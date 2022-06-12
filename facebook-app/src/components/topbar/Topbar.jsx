import React, { useState } from "react";
import "./topbar.css";
import { Person, Search, Chat, Notifications } from "@mui/icons-material";

export default function Topbar({setDeger}) {


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo" onClick={()=>setDeger(true)}>
       Facebook
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img onClick={() => setDeger(false)} src="/assets/images/photo.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
