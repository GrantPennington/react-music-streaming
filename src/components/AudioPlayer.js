import React, { createRef, useEffect, useState } from 'react'
import usePlayer from '../hooks/usePlayer'
import { IconContext } from 'react-icons'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'
import { useAudioPlayer } from '../context/AudioPlayerContext'
import AudioControlButtons from './AudioControlButtons'

export const AudioPlayer = (props) => {
    const { state, dispatch } = useAudioPlayer()
    const { isPlaying, currentSong } = state;

    const handleSongSelect = (label) => {
        dispatch({ type: 'SET_SONG', payload: `/audio/${label}.wav` })
    }

    const audioRef = createRef()

    return (
        <>
        <div style={{ width: 200, height: 50, border: '2px solid black' }} onClick={() => handleSongSelect('audio1')}>
            Audio 1
        </div>
        <div style={{ width: 200, height: 50, border: '2px solid black' }} onClick={() => handleSongSelect('audio2')}>
            Audio 2
        </div>
        <h2>Playing Now</h2>
        <img
            className="musicCover"
            src="https://picsum.photos/200/200"
        />
        <div>
            <h3 className="title">Rubaiyyan</h3>
            <p className="subTitle">Qala</p>
        </div>
        <audio ref={audioRef} src={currentSong} />
        <AudioControlButtons audioRef={audioRef}/>
        {/* <div>
            <button className="playButton">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <BiSkipPrevious />
            </IconContext.Provider>
            </button>
            <button className="playButton">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <BiSkipNext />
            </IconContext.Provider>
            </button>
        </div> */}
        </>
    )
}