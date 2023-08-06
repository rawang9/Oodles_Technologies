// VideoCard.js
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

const VideoCard = ({ videoData, isPlaying, onVideoClick }) => {
  const { uri, name, discription, duration, thumbnail } = videoData;
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleVideoClick = () => {
    onVideoClick();
  };

  return (
    <div
      className={`video-card col-lg-3 col-md-4 col-sm-6 col-12 ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleVideoClick}
    >
      {isPlaying ? (
        <div className="video-player-wrapper">
          <ReactPlayer
            ref={videoRef}
            url={uri}
            controls
            playing
            width="100%"
            height="100%"
            className="video-player"
          />
        </div>
      ) : (
        <div>
          <div className="video-thumbnail">
            <img src={thumbnail} alt="Video Thumbnail" className="thumbnail" />
            <div className={`video-description ${isHovered ? "show" : ""}`}>
              <p>{discription}</p>
            </div>
            {isHovered && (
              <div className="play-icon">
                <i className="fas fa-play"></i>
              </div>
            )}
          </div>
          <div className="video-details">
            <h2 className="video-name">{name}</h2>
            <p className="video-duration">Duration: {duration} seconds</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
