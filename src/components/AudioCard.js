import React, { createRef, useEffect, useState } from 'react';
import { Button, Card, Flex, Image, Space, Tag, Typography } from 'antd';
import { MoreOutlined, HeartOutlined, HeartFilled, PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons'
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { storage } from '../firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const gridStyle = {
    width: '14%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

export function AudioCard({ details }) {
    const [url, setURL] = useState('')
    const { state, dispatch } = useAudioPlayer()
    const { isPlaying, currentSong } = state;

    const audioRef = createRef()

    const firebaseStorageToBlob = async () => {
        try {
            //getDownloadURL(ref(storage, ''))
            const storageRef = ref(storage, details.path)
            let temp = getDownloadURL(storageRef).then((url) => {
                return url
            })
            if(temp){
                setURL(temp)
                return temp
            }
        } catch(error) {
            console.error('Error converting Firebase Storage URI to Blob:', error);
        }
    }

    const convertPathToAudioFile = (path) => {
        // const file = fileObj.file
        // if(!file || file===''){
        //     return 'No File Selected'
        // }
        // const fileName = fileObj.file.name
        // console.log('FILE: ',file)

        // //const storageRef = ref(storage, fileName);
        
        // //let blob = file.slice(0, file.size, file.type);

        // const metadata = {
        //     contentType: file.type,
        // }

        // const newFile = new File([file], fileName, {type: file.type}, metadata);
        // const httpsReference = ref(storage, path)
        // console.log(httpsReference)
    }
    
    const handlePlay = () => {
        if(currentSong.src){
            if(currentSong?.title!==details.title){
                dispatch({ type: 'SET_SONG', payload: { id: details.id, title: details.title, src: details.path }})
                dispatch({ type: 'PLAY' })
            } else {
                dispatch({ type: 'PLAY' })
            }
        } else {
            dispatch({ type: 'SET_SONG', payload: { id: details.id, title: details.title, src: details.path }})
            dispatch({ type: 'PLAY' })
        }
    }

    const handlePause = () => {
        if(currentSong.src){
            if(currentSong?.title!==details.title){
                dispatch({ type: 'PAUSE' })
                dispatch({ type: 'SET_SONG', payload: { id: details.id, title: details.title, src: details.path }})
            } else {
                dispatch({ type: 'PAUSE' })
            }
        } else {
            dispatch({ type: 'PAUSE' })
            dispatch({ type: 'SET_SONG', payload: { id: details.id, title: details.title, src: details.path }})
        }
    }

    useEffect(() => {
        if(currentSong) {
            if(isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
    }, [currentSong, isPlaying, audioRef])

    return (
        <Card hoverable={true}>
        <Card.Grid hoverable={false} style={{ ...gridStyle, width: '2%' }}>
        {/* {(currentSong===url) ? <Button onClick={handlePlay} style={{ height: '55%', borderRadius: '50%' }} icon={<PlayCircleFilled style={{ fontSize: 28 }} />} /> */}
        {(currentSong?.title!==details.title) ? 
            <Button onClick={handlePlay} style={{ height: '55%', borderRadius: '50%' }} icon={<PlayCircleFilled style={{ fontSize: 28 }} />} />
            : (!isPlaying)
                ? <Button onClick={handlePlay} style={{ height: '55%', borderRadius: '50%' }} icon={<PlayCircleFilled style={{ fontSize: 28 }} />} />
                : <Button onClick={handlePause} style={{ height: '55%', borderRadius: '50%' }} icon={<PauseCircleFilled style={{ fontSize: 28 }} />} />
            }
            <audio ref={audioRef} src={currentSong?.title===details.title && currentSong?.src} type={'audio/wav'} />
        </Card.Grid>    
        <Card.Grid hoverable={false} style={{ ...gridStyle, width: '22%' }}>
            <Flex horizontal={true} style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Image
                    width={70}
                    height={70}
                    src="https://picsum.photos/200/200"
                    style={{ borderRadius: '10px' }}
                />
                <Flex vertical={true} style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 10 }}>
                    <Typography style={{ fontWeight: 'bold' }}>{details.title}</Typography>
                    <Typography>{details.artist}</Typography>
                </Flex>
            </Flex>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>{details.key}</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>{`${details.bpm} BPM`}</Card.Grid>
        <Card.Grid hoverable={false} style={{ ...gridStyle, width: '34%' }}>
            <Flex horizontal style={{ justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
            <Space>
                {details.tags.map((tag) => (
                    <Tag key={tag}>
                        {tag}
                    </Tag>
                ))}
            </Space>
            </Flex>
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ ...gridStyle, width: '6%' }}>
            <Button type='text' 
                shape={'circle'}
                size='large'
                icon={<HeartOutlined style={{ fontSize: 24, marginTop: 2 }}/>} 
            />
        </Card.Grid>
        <Card.Grid hoverable={false} style={{ ...gridStyle, width: '6%' }}>
            <Button type='text' icon={<MoreOutlined style={{ fontSize: 24 }}/>} />
        </Card.Grid>
        </Card>
    )
}
