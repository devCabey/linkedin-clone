import {
  Home,
  SearchOutlined,
  BusinessCenter,
  Chat,
  Notifications,
  People,
  PeopleAlt,
  Work,
  Forum,
  NotificationsActive,
  House,
} from "@mui/icons-material";
import React from "react";
import HeaderOption from "./header-option/HeaderOption";
import "./Header.css";

function Header() {
  return (
    <div className="header_container">
      <div className="header_left">
        <img src="./images/linkedin.png" alt="logo" />
        <div className="header_search">
          <SearchOutlined />
          <input type="text" placeholder="Search anything" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption title="Home" Icon={Home} to="/feed" Option={House} />
        <HeaderOption
          title="My Network"
          Icon={PeopleAlt}
          Option={People}
          to="/network"
        />
        <HeaderOption
          title="Jobs"
          Icon={BusinessCenter}
          Option={Work}
          to="/jobs"
        />
        <HeaderOption
          title="Messaging"
          Icon={Chat}
          Option={Forum}
          to="/message"
        />
        <HeaderOption
          title="Notification"
          Icon={Notifications}
          Option={NotificationsActive}
          to="/notification"
        />
        <HeaderOption
          to="/profile"
          title="Me"
          avatar="https://media.istockphoto.com/id/1179588723/photo/close-up-portrait-of-his-he-nice-attractive-funny-confused-brunet-bearded-guy-wearing-pink.jpg?s=612x612&w=0&k=20&c=nhgnEZKvA1yxYhnSQ-hD4fHFQr7xGn2TwJnatCdssK4="
        />
      </div>
    </div>
  );
}

export default Header;
