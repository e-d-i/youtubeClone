import React, { useState, useEffect } from "react";
import "../Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MicSharpIcon from "@mui/icons-material/MicSharp";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Header({ openSidebar }) {
  const [inputSearch, setInputSearch] = useState("");

  const handleClick = (e) => {
    if (inputSearch.trim().length < 1) {
      e.preventDefault();
    }
    setInputSearch("");
  };

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    setInputSearch();
  }, [listening]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="header">
      <div className="headerLeft">
        <MenuSharpIcon className="menuSharpIcon" onClick={openSidebar} />
        <Link to="/">
          <img
            className="headerLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png?20220605194644"
            alt="YouTube Logo"
            onClick={(e) => setInputSearch("")}
          />
        </Link>
      </div>

      <div className="headerInput">
        {!listening ? (
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            placeholder="Search"
            type="text"
          />
        ) : (
          <input value={transcript} />
        )}
        <Link to={`/search/${inputSearch || transcript}`}>
          <SearchSharpIcon
            className="headerInputSearchIcon"
            onClick={handleClick}
          />
        </Link>
        <MicSharpIcon
          className="headerInputMicIcon"
          onClick={SpeechRecognition.startListening}
        />
      </div>

      <div className="headerRight">
        <div className="headerRight1" data-tooltip="Create">
          <VideoCallOutlinedIcon className="headerRightIcon" />
        </div>
        <div className="headerRight2" data-tooltip="Notifications">
          <NotificationsNoneSharpIcon className="headerRightIcon" />
        </div>
        <div className="headerRight3">
          <Avatar className="headerRightIcon">ET</Avatar>
        </div>
      </div>
    </div>
  );
}

export default Header;
