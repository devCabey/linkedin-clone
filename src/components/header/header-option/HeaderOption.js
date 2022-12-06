import { ArrowDropDown, More } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  // const [showTitle, setShowTitle] = useState(false);
  return (
    <div
      className="headerOption_container"
      // onMouseOver={() => setShowTitle(true)}
      // onMouseLeave={() => setShowTitle(false)}
    >
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
