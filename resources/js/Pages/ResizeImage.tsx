import { type PageProps } from "resources/js/types";
import Frontpage from "../Layouts/FrontpageLayout";
import { useCallback, useRef, useState } from "react";
import { RxPencil1, RxTrash } from "react-icons/rx";
import { deleteFromStateArray } from "../lib/utils";
import { readAndCompressImage } from "browser-image-resizer";
import { FileEditor } from "../Components/FileEditor";

export default function ResizeImage({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const fileInputRef: React.LegacyRef<HTMLInputElement> = useRef(null);
    const [config, setConfig] = useState({
        quality: 0.9,
        width: 800,
        height: 800,
    });
    const [files, setFiles] = useState<{ file: File }[]>([]);
    const [fileEditIndex, setFileEditIndex] = useState<number | null>(null);
    const onChangeFile: React.ChangeEventHandler<HTMLInputElement> =
        useCallback(async (...e) => {
            for (const file of e[0].target.files ?? []) {
                console.log("onChangeFile", file);
                const resizedFile: Blob = await readAndCompressImage(file, {
                    ...config,
                });
                const newFile = new File([resizedFile], file.name);
                setFiles((previousFiles) => [
                    ...previousFiles,
                    { file: newFile },
                ]);
            }
        }, []);

    const editFile = useCallback(
        async (index: number) => {
            if (index >= 0 && index < files.length) {
                setFileEditIndex(index);
            } else {
                throw new Error("invalid file index");
            }
        },
        [files],
    );

    return (
        <Frontpage
            auth={auth}
            laravelVersion={laravelVersion}
            phpVersion={phpVersion}
            title="Resize Image"
        >
            <div className="flex items-stretch justify-center">
                <button onClick={() => fileInputRef.current?.click()}>
                    Select File
                </button>
                <input
                    ref={fileInputRef}
                    className="hidden"
                    type="file"
                    onChange={onChangeFile}
                />
            </div>

            <div className="flex flex-col items-stretch justify-center">
                {files.map(({ file }, index: number) => (
                    <div className="card" key={`file-${index}`}>
                        <div className="flex">
                            <h2>{file.name}</h2>

                            <button
                                onClick={() =>
                                    deleteFromStateArray(setFiles, index)
                                }
                            >
                                <RxTrash />
                            </button>
                            <button onClick={() => editFile(index)}>
                                <RxPencil1 />
                            </button>
                        </div>
                        <img
                            className="w-40"
                            alt={file.name}
                            src={URL.createObjectURL(file)}
                        />
                    </div>
                ))}
            </div>
            {typeof fileEditIndex === "number" ? (
                <FileEditor
                    index={fileEditIndex}
                    file={files[fileEditIndex].file}
                    onSave={(file) => console.log({ file })}
                    onClose={() => setFileEditIndex(null)}
                />
            ) : null}
        </Frontpage>
    );
}
