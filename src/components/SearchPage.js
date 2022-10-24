import React from "react";
import "../SearchPage.css";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SearchPageVideoSection from "./SearchPageVideoSection";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPageFilter">
        <TuneSharpIcon />
        <h2>FILTERS</h2>
        <p>About these results</p>
        <InfoOutlinedIcon />
      </div>
      <hr />
      <SearchPageVideoSection
        videoThumbnail="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        videoTitle="My journey to becoming a web developer"
        views="9.9M views"
        timestamp="2 days ago"
        channelImage="https://freesvg.org/img/Blue-Robot.png"
        channel="e-d-i"
        verified="true"
        description="Live stream 🔴 e-d-i on how to become a web developer from scratch"
      />
      <SearchPageVideoSection
        videoThumbnail="https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        videoTitle="Learning a new language - how to gain familiarity with JavaScript"
        views="8.9M views"
        timestamp="3 days ago"
        channelImage="https://freesvg.org/img/Blue-Robot.png"
        channel="e-d-i"
        verified="true"
        description="Watch now 🔴 Let's learn JavaScript!"
      />
      <SearchPageVideoSection
        videoThumbnail="https://images.unsplash.com/photo-1527334919515-b8dee906a34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        videoTitle="Want Free Coding Lessons? Twitch Makes It Happen in Real Time"
        views="7.2M views"
        timestamp="4 days ago"
        channelImage="https://freesvg.org/img/Blue-Robot.png"
        channel="Finley"
        verified="true"
        description="While the platform might be known for videogame livestreams, more people are flocking there to share their work—or learn to be better programmers."
      />
      <SearchPageVideoSection
        videoThumbnail="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        videoTitle="Get Your Kids Coding With Sony's Clever Building Blocks"
        views="9.5K views"
        timestamp="5 days ago"
        channelImage="https://freesvg.org/img/Blue-Robot.png"
        channel="Stinson"
        verified="true"
        description="Learning to code is as easy as playing with Koov, a set of programmable building blocks."
      />
      <SearchPageVideoSection
        videoThumbnail="https://images.unsplash.com/photo-1617994452722-4145e196248b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        videoTitle="Writing Good Code Is a Lot Like Making Beautiful Music"
        views="55K views"
        timestamp="6 days ago"
        channelImage="https://freesvg.org/img/Blue-Robot.png"
        channel="Metz"
        verified="true"
        description="Much like a good song, good code is all about how the individual pieces fit together."
      />
      <SearchPageVideoSection
        videoThumbnail="https://images.unsplash.com/photo-1511548774318-563182fe8d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        videoTitle="Hoefler &amp; Co.'s New Typewriter-Inspired Font Is Crafted for Coders"
        views="55K views"
        timestamp="7 days ago"
        channelImage="https://freesvg.org/img/Blue-Robot.png"
        channel="Stinson"
        verified="true"
        description="Operator is a new typewriter font that works in the digital age."
      />
      <SearchPageVideoSection
        videoThumbnail="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        videoTitle="Google Is 2 Billion Lines of Code—And It's All in One Place"
        views="1.2M views"
        timestamp="7 days ago"
        channelImage="https://freesvg.org/img/Blue-Robot.png"
        channel="Metz"
        verified="true"
        description="By comparison, Microsoft Windows—one of the most complex software tools ever built for a single computer—is about 50 million lines."
      />
      <SearchPageVideoSection
        videoThumbnail="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        videoTitle="The Hackathon Is On: Pitching and Programming the Next Killer App"
        views="88K views"
        timestamp="8 days ago"
        channelImage="https://freesvg.org/img/Blue-Robot.png"
        channel="Leckart"
        verified="true"
        description="Bleary engineers run on little sleep, free pizza, and series-A dreams. The goal: to build a company in two days."
      />
    </div>
  );
}

export default SearchPage;
