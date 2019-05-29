import React from 'react';

const width100 = {
    width: '100%',
    height: '390px'
};
const VideoDetail = ({ video }) => {
    if (!video) {
        return <div className="loading">Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div>
                <iframe style={width100} title="video player" src={videoSrc}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    ) 
};

export default VideoDetail;