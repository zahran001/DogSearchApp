// List of video components
import React from 'react';
import VideoComponent from './VideoComponent';

/* function to render a list of videos by mapping through the videos array and 
rendering a VideoComponent for each video in the list */
const VideoList = ({videos, handleVideoSelect}) => {
    const listVideos = videos.map((video) => {
        return <VideoComponent video={video} handleVideoSelect={handleVideoSelect} />

    });
    
    return (
        <div>{listVideos}</div>
    );

};
export default VideoList;