import React, { useMemo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const baseStyle = {
    height: "25rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#bdbdbd",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
};

const focusedStyle = {
    borderColor: "var(--tai-secondary)",
};

const acceptStyle = {
    borderColor: "#00e676",
};

const rejectStyle = {
    borderColor: "#ff1744",
};

const DropZone = ({ setFileName }) => {
    const [file, setFile] = useState("");

    const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, acceptedFiles } =
        useDropzone({ accept: { "video/*": [] } });

    useEffect(() => {
        setFile(acceptedFiles[0]);
    }, [acceptedFiles]);

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isFocused, isDragAccept, isDragReject]
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dataForm = new FormData();
        dataForm.append("file", file);
        axios({
            method: "post",
            url: "http://localhost:3001/files/",
            data: dataForm,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                console.log(response);
                setFileName(response.data.filename);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        return false;
    };
    return (
        <div {...getRootProps({ className: "dropzone", style })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            {file && (
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="axil-btn btn-fill-primary btn-large"
                >
                    upload {file.path}
                </button>
            )}
        </div>
    );
};

export default DropZone;
