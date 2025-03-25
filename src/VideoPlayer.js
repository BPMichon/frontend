import React from 'react';

// VideoPlayer component
function VideoPlayer({ videoUrl }) {
  return (
    <div className="video-player">
      <h3>Video Player</h3>
      <video controls width="600">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
