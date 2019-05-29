import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={ () => onVideoSelect(video) } className="row">
            <div className="col-md-6">
                <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            </div>
            <div className="col-md-6">
                <div className="header">{video.snippet.title}</div> 
            </div>
        </div>
    )
};

export default VideoItem;