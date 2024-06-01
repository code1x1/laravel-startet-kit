import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
    type InputHTMLAttributes,
} from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

export const TextInput = forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        ...props
    }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref,
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    const [hidden, setHidden] = useState(true);

    const inputType = useMemo(() => {
        if (type !== "password") {
            return type;
        }
        if (hidden) {
            return "password";
        }
        return "text";
    }, [type, hidden]);

    const toggleHidden = () => setHidden((prev) => !prev);

    const iconContent = useMemo(
        () =>
            hidden ? (
                <RxEyeClosed
                    className="place-self-center ml-3"
                    onClick={toggleHidden}
                />
            ) : (
                <RxEyeOpen
                    className="place-self-center ml-3"
                    onClick={toggleHidden}
                />
            ),
        [hidden],
    );

    return (
        <div className="flex flex-row">
            <input
                {...props}
                type={inputType}
                className={
                    "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
                    className
                }
                ref={localRef}
            />
            {type === "password" ? iconContent : null}
        </div>
    );
});
