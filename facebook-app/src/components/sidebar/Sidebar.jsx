import React, { useRef } from "react";
import "./sidebar.css";
import {
  RssFeed,
  Event,
  Videocam,
  Groups,
  Chat,
  Bookmark,
  WorkOutlineSharp,
  HelpOutline,
} from "@mui/icons-material";
import CloseFriend from "../closeFriend/CloseFriend";
import {Users} from "../../dummyData"

export default function Sidebar() {
  const refer = useRef();

  const show = () => {
    refer.current.classList.toggle("show");
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <Videocam className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Groups className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <WorkOutlineSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>

          <div ref={refer} className="hide">
            <li className="sidebarListItem">
              <WorkOutlineSharp className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Question</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Event</span>
            </li>
          </div>
        </ul>
        <button className="sidebarButton" onClick={show}>
          Show More
        </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        {Users.map(data=>(
          <CloseFriend user={data.username} image={data.profilePicture} key={data.id} />
        ))}
        </ul>
      </div>
    </div>
  );
}
