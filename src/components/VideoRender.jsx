// Render the video when it is selected from the list of videos  
import React from 'react';
import '../style/video.css';

// functional component to display video details
const VideoRender = ({ video }) => {
  if (!video) {
    return (
      <div>
        
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-render">
      <div className="video-container">
        <iframe src={videoSrc} allow="fullscreen" />
      </div>
      <div className="video-details">
        <h3>{video.snippet.title}</h3>
        <p>Description: {video.snippet.description}</p>
        <p>Channel: {video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoRender;