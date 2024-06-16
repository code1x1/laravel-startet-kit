import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function deleteFromStateArray<T>(
    setItems: React.Dispatch<React.SetStateAction<T[]>>,
    index: number,
) {
    setItems((previousItems) =>
        previousItems.filter((_item, itemIndex: number) => itemIndex !== index),
    );
}
