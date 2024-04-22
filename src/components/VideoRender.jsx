// Render the video when it is selected from the list of videos  
import React from 'react'


// functional component to display video details
const VideoRender = ({ video }) => {
  if (!video) {
    return (
      <div>
        Search any Dog related video
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div>
        <iframe src={videoSrc} allow="fullscreen" />
      </div>
      <div>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
        <p>{video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoRender;