import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiImage, FiFileText, FiHeadphones, FiVideo, FiFile } from 'react-icons/fi';

import detect from 'detect-file-type';

import './styles.css';

function detectMime(mime) {
    if (mime.includes('image')) {
        return <FiImage />;
    }
    if (mime.includes('text')) {
        return <FiFileText />;
    }
    if (mime.includes('audio')) {
        return <FiHeadphones />;
    }
    if (mime.includes('video')) {
        return <FiVideo />;
    }
    return <FiFile />;
}

const Dropzone = ({ onFileUploaded }) => {

    const [selectedFileName, setSelectedFileName] = useState('');
    const [selectedFileIcon, setSelectedFileIcon] = useState();

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader()

        reader.readAsArrayBuffer(file)
        reader.onload = () => {
            console.log({ buffer: Buffer(reader.result) })
            detect
                .fromBuffer(Buffer(reader.result),
                    (err, res) => {
                        if (err) {
                            console.log(err);
                        }
                        setSelectedFileName(file.name);
                        setSelectedFileIcon(detectMime(res.mime));
                    })
        }

        // const fileUrl = URL.createObjectURL(file);

        onFileUploaded(file);
    }, [onFileUploaded]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop
    })

    return (
        <div className='dropzone' {...getRootProps()}>
            <input {...getInputProps()} />
            {!selectedFileIcon ?
                <p>
                    <FiUpload />
                    Drag 'n' drop a file here, or click to select a file
                </p>
                :
                <p>
                    {selectedFileIcon}
                    <strong>File {selectedFileName} selected</strong>
                    Drag 'n' drop here or click to select another file
                </p>
            }
        </div>
    )
}

export default Dropzone;