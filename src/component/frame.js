import React, { useState } from "react";
import VideoCard from "./videoCard";
const Frame = ({ videos }) => {
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);

  const handleVideoClick = (index) => {
    if (index === currentPlayingIndex) {
      setCurrentPlayingIndex(null);
    } else {
      setCurrentPlayingIndex(index);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {videos.map((videoData, index) => (
            <VideoCard
              key={videoData._id}
              videoData={videoData}
              isPlaying={index === currentPlayingIndex}
              onVideoClick={() => handleVideoClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Frame;
