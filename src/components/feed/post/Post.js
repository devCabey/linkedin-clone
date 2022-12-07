import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
function Post({
  name,
  description,
  message,
  photoUrl,
  profilePic,
  likes,
  comment,
  repost,  
}) {
  return (
    <div className="post_container">
      <div className="post_top"></div>
      <div className="post_header">
        <Avatar />
      </div>
      <div>
        {/* Image or polls  */}
      </div>
      {/* Interactions */}
      <div></div>
      {/* Reaction */}
      <div></div>
    </div>
  );
}

export default Post;
