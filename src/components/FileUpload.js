import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { database, firestore, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { set } from 'firebase/database';
import { doc, setDoc } from 'firebase/firestore';
// const fileList = [
//   {
//     uid: '0',
//     name: 'xxx.png',
//     status: 'uploading',
//     percent: 33,
//   },
// ];
const FileUpload = ({ songSize }) => {
    const [fileList, setFileList] = useState([])
    
    const uploadToStorage = async (fileObj) => {
        if(!fileObj || fileObj===''){
            return 'No File Selected'
        }
        const file = fileObj.file.originFileObj
        const fileName = file.name

        const storageRef = ref(storage, fileName);
        
        let blob = file.slice(0, file.size, file.type);

        const metadata = {
            contentType: file.type,
        }

        const newFile = new File([blob], fileName, {type: file.type}, metadata);
        await uploadBytes(storageRef, newFile).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                postSongToFirestore(fileName, url)
            })
        })
    }

    const postSongToFirestore = async (fileName, url) => {
        await setDoc(doc(firestore, "songs", fileName), {
            title: fileName,
            artist: 'Grant Pennington',
            path: url,
            genre: 'unknown',
            key: 'unknown',
            bpm: 'unknown',
            tags: [],
        })
    }

    const handleFile = (e) => {
        console.log(e)
    }

    return (
        <>
            <Upload
                listType="picture"
                defaultFileList={[...fileList]}
                onChange={(e) => uploadToStorage(e)}
            >
            <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
        </>
    )
};

export default FileUpload;


// import React from 'react';
// import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';

// const props = {
//   name: 'file',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//         console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };
// const FileUpload = () => (
//   <Upload {...props}>
//     <Button icon={<UploadOutlined />}>Click to Upload</Button>
//   </Upload>
// );
// export default FileUpload;


