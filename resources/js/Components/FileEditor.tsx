import { useLayoutEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { useOnceEffect } from "../lib/render";
import { Canvas } from "./Canvas";
import { Button } from "./ui/button";
import { useWindowSize } from "@uidotdev/usehooks";

interface FileEditorProps {
    index: number;
    file: File;
    onSave: (file: Blob) => void;
    onClose: () => void;
}

export function FileEditor(props: FileEditorProps) {
    const { onClose, onSave, file } = props;
    const { width, height } = useWindowSize();
    const content = useMemo(() => {
        return width && height ? (
            <dialog
                open={true}
                className="overflow-scroll h-screen absolute top-0 container rounded ring ring-red-400 bg-slate-400 p-2"
            >
                <Canvas
                    className="mx-auto"
                    file={file}
                    width={width * 0.9}
                    height={height * 0.9}
                />
                <div className="flex justify-center gap-2">
                    <Button className="bg-red-400" onClick={() => onSave(file)}>
                        Save
                    </Button>
                    <Button className="bg-red-400" onClick={onClose}>
                        Close
                    </Button>
                </div>
            </dialog>
        ) : null;
    }, [width, height, file]);

    return <>{createPortal(content, document.body)}</>;
}
