import { type PageProps } from "resources/js/types";
import Frontpage from "../Layouts/FrontpageLayout";

export default function Startpage({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <Frontpage
            auth={auth}
            laravelVersion={laravelVersion}
            phpVersion={phpVersion}
            title="Welcome"
        >
            <div className="flex items-stretch justify-center">
                <a href="/resize-image" className="button-big-hover">
                    Risize image
                </a>
            </div>
        </Frontpage>
    );
}
