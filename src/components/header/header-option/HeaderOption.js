import { ArrowDropDown } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption_container">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <h3 className="headerOption_title">
        {title}
        {avatar && <ArrowDropDown />}
      </h3>
    </div>
  );
}

export default HeaderOption;
