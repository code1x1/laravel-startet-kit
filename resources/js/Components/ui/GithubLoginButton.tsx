import { BiLogoGithub } from "react-icons/bi";

import { Button } from "resources/js/Components/ui/button";

export function GithubLoginButton() {
    return (
        <Button asChild>
            <a
                href={"/auth/redirect/github"}
                className="text-sm text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                <BiLogoGithub /> <span className="pl-2">Login with Github</span>
            </a>
        </Button>
    );
}
