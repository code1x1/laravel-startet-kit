import { type AxiosInstance } from 'axios';
import { type route as ziggyRoute } from 'ziggy-js';

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Window {
        axios: AxiosInstance;
    }

    const route: typeof ziggyRoute;
}
