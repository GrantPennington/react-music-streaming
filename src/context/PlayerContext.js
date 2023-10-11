import React, { createContext, useCallback, useEffect, useState } from 'react'
import useSound from 'use-sound'
import useSoundHook from '../hooks/useSoundHook'

const PlayerContext = createContext(null)

const PlayerContextProvider = ({ children }) => {
    const [initializing, setInitializing] = useState(false)
    const [player, setPlayer] = useState({
        isPlaying: false,
        audioFile: null,
        controls: {
            play: null,
            pause: null,
            duration: null,
            sound: null
        },
    })

    //const [play, { pause, duration, sound }] = useSound()

    const audioFileChanged = useCallback((newAudio) => {
        setInitializing(true)
        if(newAudio) {
            updatePlayer('audioFile', newAudio)
        } else {
            updatePlayer('audioFile', null)
        }
        setInitializing(false)
    }, [])

    // const initializeAudio = (audioFile) => {
    //     if(audioFile){
    //         const [play, { pause, duration, sound }] = useSound(audioFile)
    //         return { play, pause, duration, sound }
    //     } else {
    //         return false
    //     }
    // }

    const updatePlayer = (field, value) => {
        console.log('Selecting: ', field, value)
        setPlayer((prev) => {
            const updated = {
                ...prev,
                [field]: value,
            }
            return updated
        })
    }

    const handlePlayButton = () => {
        if(player.isPlaying){
            if(player.controls.pause!==null){
                player.controls.pause()
            }
            updatePlayer('isPlaying', false)
        } else {
            if(player.controls.play!==null){
                player.controls.play()
            }
            updatePlayer('isPlaying', true)
        }
    }

    useEffect(() => {
        console.log('PLAYER: ',player)
    }, [player])

    // useEffect(() => {
    //     // let init = ini(player.audioFile)
    //     // if(init) {
    //     //     console.log('CONTROLS: ', { play: init.play(), pause: init.pause(), duration: init.duration, sound: init.sound })
    //     //     updatePlayer('controls', { play: init.play(), pause: init.pause(), duration: init.duration, sound: init.sound })
    //     // }
    // }, [player.audioFile])

    return (
        <PlayerContext.Provider value={{ player, initializing, handlePlayButton, updatePlayer }}>
            { children }
        </PlayerContext.Provider>
    )
}

export { PlayerContext, PlayerContextProvider }