import { useCallback, useEffect, useMemo, useRef } from "react";
import { useOnceEffect } from "../lib/render";
import { twMerge } from "tailwind-merge";

interface CanvasProps {
    file: Blob;
    height: number;
    width: number;
    className?: string;
}

export function Canvas(props: CanvasProps) {
    const { width, height, file, className } = props;
    const canvasRef: React.LegacyRef<HTMLCanvasElement> = useRef(null);

    const drawImage = useCallback(
        (dx: number, dy: number) => {
            if (canvasRef.current) {
                const img = document.createElement("img");
                const context = canvasRef.current.getContext("2d");
                img.onload = () => {
                    context?.clearRect(
                        0,
                        0,
                        context.canvas.width,
                        context.canvas.height,
                    );
                    context?.drawImage(img, dx, dy);
                    console.log({ w: img.width, h: img.height });
                };

                img.src = URL.createObjectURL(file);
            }
        },
        [file],
    );

    useEffect(() => {
        const intervalId = setInterval(
            () => drawImage(Math.random() * 100, Math.random() * 100),
            3000,
        );
        return () => {
            clearInterval(intervalId);
        };
    }, [drawImage]);

    return (
        <canvas
            className={twMerge(className)}
            width={width}
            height={height}
            ref={canvasRef}
        ></canvas>
    );
}
