import React from 'react'
import Style from './VideoGriditem.module.scss'
import { Link } from 'react-router-dom'

const VideoGriditem = ({id, src, title}) => {
    return (
<Link to={{pathname: 'watch', search: `?v=${id}`}} className={Style.item}>
        <div>
           <img src={src} alt={title} />
    <span>{title}</span>
        </div>
</Link>
    )
}

export default VideoGriditem
