// Single video component

import React from 'react';
import '../style/video.css';

// functional component to render a single video item within the VideoList
const VideoComponent = ({video, handleVideoSelect}) => { // Define a div with an onClick event handler that calls handleVideoSelect function with video object when clicked
    return (
    <div onClick={ () => handleVideoSelect(video)} className='video-item' > 
        <img src={video.snippet.thumbnails.medium.url} alt="Thumbnail" />
        <div className='content'>
            <div className='title'>{video.snippet.title}</div>
            <div className='description'>{video.snippet.description}</div>
        </div>


    </div>
    );
};
export default VideoComponent;