import { Bookmark } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar_container">
      <div className="sidebar_top_wrapper">
        <div className="sidebar_top">
          <img
            src="https://img.freepik.com/free-vector/ocean-sea-waves-with-white-foam-nature-landscape_107791-1563.jpg?w=2000"
            alt="background"
          />
          <Avatar
            className="sidebar_avatar"
            sx={{ width: "60px", height: "60px" }}
          />
          <h2>Caleb Okyere</h2>
          <h4>
            Software Engineer(Fullstack)-Javascript ||Typescript || Python
          </h4>
        </div>
        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Who's viewed your profile</p>
            <p className="sidebar_statNum">102</p>
          </div>
          <div className="sidebar_stat">
            <p>Impression of your post</p>
            <p className="sidebar_statNum">827</p>
          </div>
        </div>
        <div className="sidebar_premium">
          <p>Access exclusive tools & insights</p>
          <div className="sidebar_premium_link">
            <span></span>
            <h5>Get Hired Faster, Try Premium Free</h5>
          </div>
        </div>
        <div className="sidebar_item_link">
          <Bookmark sx={{ fontSize: "16px", color: "#4a4a4a" }} />
          <p>My items</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
