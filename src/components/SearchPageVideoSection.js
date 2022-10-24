import React from "react";
import "../SearchPageVideoSection.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function SearchPageVideoSection({
  videoThumbnail,
  videoTitle,
  views,
  timestamp,
  channelImage,
  channel,
  verified,
  description,
}) {
  return (
    <div className="searchPageVideoSectionCoverVideo">
      <img src={videoThumbnail} alt="video thumbnail" />
      <div className="searchPageVideoSectionCoverVideoInfo">
        <h3>{videoTitle}</h3>
        <p>
          {views} • {timestamp}
        </p>
        <div>
          <img src={channelImage} alt="channel" />
          <p>• {channel}</p>
          {verified && <CheckCircleIcon />}
        </div>
        <p className="description">{description}</p>
        <span className="specialInfo specialInfo1">New</span>
        <span className="specialInfo">4K</span>
      </div>
    </div>
  );
}

export default SearchPageVideoSection;
