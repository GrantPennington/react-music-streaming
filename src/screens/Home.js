import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase'
import { AudioCard } from '../components/AudioCard'

function Home() {
    const [songs, setSongs] = useState(null)

    useEffect(() => {
        const getSongs = async () => {
            let temp = []
            const querySnapshot = await getDocs(collection(firestore, "songs"));
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                temp.push({ ...doc.data() })
            });
            setSongs(temp)
        }
        getSongs()
    }, [])
    return (
        <>
        {(!!songs) && songs.map((song) => (
            <AudioCard key={song.id} details={song} />
        ))}
        </>
    )
}

export default Home