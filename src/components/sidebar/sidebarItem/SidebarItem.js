import { Add, ExpandLess, ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";
import "./SidebarItem.css";
function SidebarItem(props) {
  return (
    <div className="sidebar_item_wrapper">
      <div className="sidebar_item_title">
        <p style={{ color: props.title !== "Recent" && "#0a8bfc" }}>
          {props.title}
        </p>
        <div className="sidebar_item_title_icon">
          {props.title === "Events" && (
            <span>
              <Add />
            </span>
          )}
          <span className="sidebar_item_expand">
            <ExpandLess />
          </span>
        </div>
      </div>
      <div className="sidebar_item_content">{props.children}</div>
    </div>
  );
}

export default SidebarItem;
