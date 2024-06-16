import { useEffect, useRef } from "react";

export function useOnceEffect(callback: Function) {
    const renderState = useRef(false);
    useEffect(() => {
        if (renderState.current === false) {
            callback();
            renderState.current = true;
        }
    }, [callback]);
}
