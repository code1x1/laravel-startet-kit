import { ApplicationLogo } from "resources/js/Components";
import { Head, Link } from "@inertiajs/react";
import { type PropsWithChildren } from "react";
import { PageProps } from "../types";

export default function Frontpage({
    children,
    auth,
    laravelVersion,
    phpVersion,
    title,
}: PropsWithChildren &
    PageProps<{ laravelVersion: string; phpVersion: string; title: string }>) {
    return (
        <>
            <Head title={title} />
            <div className="bg-gray-50 text-black/50 dark:bg-slate-900 dark:text-white/50">
                <header className="flex items-center justify-center p-4">
                    <ApplicationLogo className="h-20" />
                </header>
                <div className="relative min-h-screen">
                    <main className="mt-6">{children}</main>
                </div>

                <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                    <nav className="flex flex-1 content-center justify-center space-x-4">
                        {auth.user ? (
                            <>
                                <Link
                                    href={route("dashboard")}
                                    className="button-link"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="button-link"
                                >
                                    Log Out
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="button-link"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="button-link"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                    Laravel v{laravelVersion} (PHP v{phpVersion})
                </footer>
            </div>
        </>
    );
}
