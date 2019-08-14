import React from 'react';
import VideoItem from './VideoItem';
import Collapsible from 'react-collapsible';


const VideoList = ({ videos, onVideoSelect }) => {
    
    // creates a list of video items into a video list
    // 1. video = the prop, 
    // 2. {video} is the object we pass as a prop
    const renderedList = videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });

    // props.videos - array of different records that we want to render out
    // onto the screen

    return( 
        <div className="see-more">
            <Collapsible trigger="See Videos">
                {renderedList}
            </Collapsible>
        </div>
    )};


export default VideoList;
