<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $validationConcerns = [
            'password' => ['required', Password::defaults(), 'confirmed'],
        ];

        if ($request->user()->hasPassword()) {
            $validationConcerns['current_password'] = ['required', 'current_password'];
        }

        $validated = $request->validate($validationConcerns);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back();
    }
}
