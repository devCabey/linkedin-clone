import { ArrowDropDown } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";
import { NavLink } from "react-router-dom";

function HeaderOption({ avatar, Icon, title, to }) {
  return (
    <NavLink
      to={to}
      className="headerOption_link"
      style={({ isActive }) => {
        return isActive
          ? { color: "black", borderBottom: "2px solid black" }
          : {};
      }}
    >
      <div className="headerOption_container">
        {Icon && <Icon className="headerOption_icon" />}
        {avatar && <Avatar className="headerOption_icon" src={avatar} />}
        <h3 className="headerOption_title">
          {title}
          {avatar && <ArrowDropDown />}
        </h3>
      </div>
    </NavLink>
  );
}

export default HeaderOption;
