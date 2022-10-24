import React from "react";
import "../Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import CastConnectedOutlinedIcon from "@mui/icons-material/CastConnectedOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

function Sidebar({ sidebar }) {
  return (
    <div className={sidebar ? "sidebar sidebarOpen" : "sidebar"}>
      <SidebarOption selected Icon={HomeSharpIcon} title="Home" />
      <SidebarOption Icon={ExploreOutlinedIcon} title="Explore" />
      <SidebarOption Icon={OfflineBoltOutlinedIcon} title="Shorts" />
      <SidebarOption Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
      <hr />
      <SidebarOption Icon={VideoLibraryOutlinedIcon} title="Library" />
      <SidebarOption Icon={HistoryOutlinedIcon} title="History" />
      <SidebarOption Icon={WatchLaterOutlinedIcon} title="Watch later" />
      <SidebarOption Icon={ThumbUpOutlinedIcon} title="Liked Videos" />
      <SidebarOption Icon={MoreHorizOutlinedIcon} title="Show more" />
      <hr />
      <p className="sidebarPara">MORE FROM YOUTUBE</p>
      <SidebarOption Icon={SmartDisplayOutlinedIcon} title="YouTube Premium" />
      <SidebarOption
        Icon={LocalMoviesOutlinedIcon}
        title="Movies &amp; Shows"
      />
      <SidebarOption Icon={SportsEsportsOutlinedIcon} title="Gaming" />
      <SidebarOption Icon={CastConnectedOutlinedIcon} title="Live" />
      <SidebarOption Icon={LightbulbOutlinedIcon} title="Learning" />
      <SidebarOption Icon={EmojiEventsOutlinedIcon} title="Sports" />
      <hr />
      <SidebarOption Icon={SettingsOutlinedIcon} title="Settings" />
      <SidebarOption Icon={FlagOutlinedIcon} title="Report history" />
      <SidebarOption Icon={HelpOutlineOutlinedIcon} title="Help" />
      <SidebarOption Icon={FeedbackOutlinedIcon} title="Send feedback" />
      <hr />
      <a href="/" className="sidebarAnchor">
        About
      </a>
      <a href="/" className="sidebarAnchor">
        Press
      </a>
      <a href="/" className="sidebarAnchor">
        Copyright
      </a>
      <a href="/" className="sidebarAnchor">
        Contact us
      </a>
      <a href="/" className="sidebarAnchor">
        Creators
      </a>
      <a href="/" className="sidebarAnchor">
        Advertise
      </a>
      <a href="/" className="sidebarAnchor">
        Developers
      </a>
      <a href="/" className="sidebarAnchor">
        Complaints
      </a>
      <a href="/" className="sidebarAnchor">
        Terms
      </a>
      <a href="/" className="sidebarAnchor sidebarAnchor10">
        Cancel Memberships
      </a>
      <a href="/" className="sidebarAnchor">
        Privacy
      </a>
      <a href="/" className="sidebarAnchor">
        Policy &amp; Safety
      </a>
      <a href="/" className="sidebarAnchor">
        How YouTube works
      </a>
      <a href="/" className="sidebarAnchor">
        Test new features
      </a>
      <p className="sidebarFooter">© 2022 e-d-i</p>
    </div>
  );
}

export default Sidebar;
