// Single video component

import React from 'react';


// functional component to render a single video item within the VideoList
const VideoComponent = ({video, handleVideoSelect}) => { // Define a div with an onClick event handler that calls handleVideoSelect function with video object when clicked
    <div onClick={ () => handleVideoSelect(video)} > 
        <img src={video.snippet.thumbnails.standard.url} alt="Thumbnail" />
        <div>
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>


    </div>

};
export default VideoComponent;