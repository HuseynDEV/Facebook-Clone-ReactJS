import React from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./profile.css";

export default function Profile({ setDeger }) {
  return (
    <div>
      <Topbar setDeger={setDeger} />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/images/photo.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/images/hus.webp"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Alizade Huseyn</h4>
              <span className="profileInfoDesc">Hello my friend</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}
