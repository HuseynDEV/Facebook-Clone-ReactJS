import React from "react";
import {
  Theaters,
  TagFaces,
  LocationOn,
  EmojiEmotions,
} from "@mui/icons-material";
import "./share.css";
// import TheatersIcon from '@mui/icons-material/Theaters';

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/images/photo.jpeg" />
          <input
            placeholder="What is your post Huseyn"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <Theaters htmlColor='tomato' />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <TagFaces htmlColor='blue' />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOn htmlColor='green' />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor='yellow' />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <div className="shareButton">Share</div>
        </div>
      </div>
    </div>
  );
}
