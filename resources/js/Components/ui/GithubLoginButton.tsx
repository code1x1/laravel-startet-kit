import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { Button } from 'src/js/Components/ui/button';

export function GithubLoginButton() {
    return (
        <Button asChild>
            <a
                href={'/auth/redirect/google'}
                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
                Google
                <GitHubLogoIcon className="mr-2 h-4 w-4" /> Login with Github
            </a>
        </Button>
    );
}
