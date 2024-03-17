<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;

class OAuthController extends Controller
{
    public function redirect(Request $request, string $provider): RedirectResponse
    {
        Log::debug("provider: ". $provider);
        if ($provider === "google") {
            return Socialite::driver('google')->redirect();
        }
    }

    public function callback(Request $request, string $provider): Response
    {
        if ($provider === "google") {
            $googleUser = Socialite::driver('google')->user();

            $user = User::updateOrCreate([
                'google_id' => $googleUser->id,
            ], [
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'google_token' => $googleUser->token,
                'google_refresh_token' => $googleUser->refreshToken,
            ]);

            Auth::login($user);

            return Inertia::render('Dashboard', [
                'status' => session('status'),
            ]);
        }
    }
}
