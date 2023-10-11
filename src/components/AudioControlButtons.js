import React from 'react'
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { Button } from 'antd';
import { PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons';

const AudioControlButtons = ({ audioRef, path }) => {
    const { state, dispatch } = useAudioPlayer()
    const { isPlaying, currentSong } = state;

    const handleSongSelect = () => {
        dispatch({ type: 'SET_SONG', payload: path })
    }
    
    const handlePlay = () => {
        if(currentSong===null) {
            dispatch({ type: 'SET_SONG', payload: path })
        }
        dispatch({ type: 'PLAY' })
        // audioRef.current.play()
        
        // if(currentSong){
            
        // } else {
        //     dispatch({ type: 'SET_SONG', payload: path })
        //     audioRef.current.play()
        //     dispatch({ type: 'PLAY' })
        // }
    }

    const handlePause = () => {
        if(currentSong===null) {
            dispatch({ type: 'SET_SONG', payload: path })
        }
        dispatch({ type: 'PAUSE' })
        // if(currentSong){
        //     audioRef.current.pause()
        //     dispatch({ type: 'PAUSE' })
        // } else {
        //     dispatch({ type: 'SET_SONG', payload: path })
        //     audioRef.current.pause()
        //     dispatch({ type: 'PAUSE' })
        // }
    }

    return (
        <div>
        {!isPlaying
            ? <Button onClick={handlePlay} style={{ width: 40, height: 40, borderRadius: '50%' }} icon={<PlayCircleFilled style={{ fontSize: 28 }} />} />
            : <Button onClick={handlePause} style={{ width: 40, height: 40, }} icon={<PauseCircleFilled style={{ fontSize: 28 }} />} />
        } 
        </div>
    );
}

export default AudioControlButtons;