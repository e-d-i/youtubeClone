import React from "react";
import { Avatar } from "@mui/material";
import "../VideoSectionCoverVideo.css";

function VideoSectionCoverVideo({
  videoThumbnail,
  channelImage,
  videoTitle,
  channel,
  views,
  timestamp,
}) {
  return (
    <div className="VideoSectionCoverVideo">
      <img
        className="videoThumbnail"
        src={videoThumbnail}
        alt="video thumbnail"
      />
      <div className="videoInfo">
        <Avatar className="videoAvatar" src={channelImage} alt={channel} />
        <div className="videoTitleContainer">
          <h4>{videoTitle}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoSectionCoverVideo;
