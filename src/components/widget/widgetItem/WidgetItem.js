import { Add } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./WidgetItem.css";

function WidgetItem({ image, name, description }) {
  return (
    <div className="widget_item_wrapper">
      <Avatar src={image} />
      <div className="widget_item_content">
        <div className="widget_item_content_bio">
          <h4>{name}</h4>
          <h6>{description}</h6>
        </div>
        <span className="widget_item_follow_button">
          <Add />
          <p>Follow</p>
        </span>
      </div>
    </div>
  );
}

export default WidgetItem;
