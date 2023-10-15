import React from 'react'
import './YoutubeFrame.css'

function YoutubeFrame({ embedId, w, h }) {
    /*
    w: 853px
    h: 480px
    */
  return (
    <>
        <div className="video-responsive">
        <iframe
            width={w}
            height={h}
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
    </>
  )
}

export default YoutubeFrame
