import '../styles/VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <>
            <div onClick={ () => onVideoSelect(video) } className="row">
                <div className="col-md-5">
                    <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
                </div>
                <div className="col-md-7 sds_padding_sp">
                    <div className="details header"><strong>{video.snippet.title}</strong></div>
                    <p className="description">{video.snippet.description}</p>
                    {/* <p className="duration">{video.contentDetails.duration}</p> */}
                </div>            
            </div>    
        </>
    )
};

export default VideoItem;