<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureOAuthProvider
{
    static $providers = ["google", "github", "twitter", "facebook"];

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $providerExists = in_array($request->provider, EnsureOAuthProvider::$providers);
        if ($providerExists) {
            return $next($request);
        }
        return redirect("/");
    }
}
