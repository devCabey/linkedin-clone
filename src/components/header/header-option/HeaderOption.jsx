import { ArrowDropDown } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./HeaderOption.css";
import { NavLink } from "react-router-dom";

function HeaderOption({ avatar, Icon, Option, title, to }) {
  const [showActive, setShowActive] = useState(false);
  return (
    <NavLink
      to={to}
      className="headerOption_link"
      style={({ isActive }) => {
        isActive ? setShowActive(false) : setShowActive(true);
        return isActive
          ? { color: "black", borderBottom: "2px solid black" }
          : {};
      }}
    >
      <div className="headerOption_container">
        {Icon && showActive ? (
          <Icon className="headerOption_icon" />
        ) : (
          Option && <Option className="headerOption_icon_active" />
        )}
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
