import React, { useState } from "react";
import { MoreVert, ThumbUp, Favorite } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(true);

  const Like = () => {
    // if (isLiked == false) {
    //   setLike(like + 1);
    //   setIsLiked(true);
    // } else {
    //   setLike(like - 1);
    //   setIsLiked(false);
    // }

    // ORR
    setLike(isLiked ? like + 1 : like - 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={post.photo}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id == post.id)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/images/like.png"
              className="unlike"
              style={{ width: "22px" }}
              onClick={Like}
            />
            <Favorite htmlColor="red" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
