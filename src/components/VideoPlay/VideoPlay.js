import React from 'react'
import Youtbe from 'react-youtube'
import Style from './VideoPlay.module.scss'
const VideoPlay = ({id}) => {
    return (
        <div className={Style.wrap}>
            <Youtbe className={Style.video} videoId={id} />
        </div>
    )
}

export default VideoPlay
