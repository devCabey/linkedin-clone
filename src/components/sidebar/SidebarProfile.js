import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function SidebarProfile() {
  return (
    <div className="sidebar_top">
      <div className="sidebar_top_hover">
        <img
          src="https://img.freepik.com/free-vector/ocean-sea-waves-with-white-foam-nature-landscape_107791-1563.jpg?w=2000"
          alt="background"
        />
        <span>
          <Avatar
            className="sidebar_avatar"
            src="https://media.istockphoto.com/id/1179588723/photo/close-up-portrait-of-his-he-nice-attractive-funny-confused-brunet-bearded-guy-wearing-pink.jpg?s=612x612&w=0&k=20&c=nhgnEZKvA1yxYhnSQ-hD4fHFQr7xGn2TwJnatCdssK4="
            sx={{ width: "60px", height: "60px" }}
          />
        </span>

        <h2>Caleb Okyere</h2>
      </div>
      <h4>Software Engineer(Fullstack)-Javascript ||Typescript || Python</h4>
    </div>
  );
}

export default SidebarProfile;
