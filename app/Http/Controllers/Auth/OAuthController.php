<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;

class OAuthController extends Controller
{
    public function redirect(string $provider): RedirectResponse
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback(string $provider): RedirectResponse
    {
        $providerUser = Socialite::driver($provider)->user();

        $user = User::updateOrCreate([
            'provider_id' => $providerUser->id,
            'provider_type' => $provider
        ], [
            'name' => $providerUser->getNickname() ?? $providerUser->getName(),
            'email' => $providerUser->email,
            'provider_token' => $providerUser->token,
            'provider_refresh_token' => $providerUser->refreshToken,
            'provider_payload' => json_encode($providerUser),
            'avatar' => $providerUser->getAvatar()
        ]);

        Auth::login($user);

        return redirect('dashboard');
    }
}
