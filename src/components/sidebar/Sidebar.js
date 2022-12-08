import { Bookmark, ExpandMore, Groups, Tag, Wallet } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import SidebarItem from "./sidebarItem/SidebarItem";
function Sidebar() {
  const recentItem = (topic, Icon) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">
          {Icon && <Icon sx={{ fontSize: "13px" }} />}
        </span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar_container">
      <div className="sidebar_top_wrapper">
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
        <SidebarItem title="Recent">
          {recentItem("Agile Portfolio", Wallet)}
          {recentItem("UK Virtual Tech Jobs Fair ", Wallet)}
          {recentItem("User Experience and Design", Groups)}
          {recentItem("The Code Project", Groups)}
          {recentItem("mobileapplications", Tag)}
        </SidebarItem>
        <SidebarItem title="Groups">
          {recentItem("User Experience and Design", Groups)}
          {recentItem("The Code Project", Groups)}
          {recentItem("See all")}
        </SidebarItem>
        <SidebarItem title="Events">
          {recentItem("UK Virtual Tech Jobs Fair ", Wallet)}
          {recentItem("Agile Portfolio: A Catalyst", Wallet)}
          {recentItem("See all")}
        </SidebarItem>
        <SidebarItem title="Followed Hashtags">
          {recentItem("mobileapplications", Tag)}
          {recentItem("devops", Tag)}
          {recentItem("theafricawewant", Tag)}
          {recentItem("Show More", ExpandMore)}
        </SidebarItem>
        <div className="sidebar_discover">
          <p>Discover more</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
