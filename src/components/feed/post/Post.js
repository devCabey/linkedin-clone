import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        
      </div>
    </div>
  );
}

export default Post;
