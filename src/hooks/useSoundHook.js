import React from "react"
import useSound from "use-sound"
import usePlayer from "./usePlayer"

const useSoundHook = (file) => {
    const {updatePlayer} = usePlayer()
    const [play, { pause, duration, sound }] = useSound(file)
    updatePlayer('controls', { play: play(), pause: pause(), duration: duration, sound: sound })
}

export default useSoundHook