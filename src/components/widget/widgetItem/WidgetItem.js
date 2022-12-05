import { Add } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./WidgetItem.css";

function WidgetItem() {
  return (
    <div className="widget_item_wrapper">
      <Avatar src="https://media.istockphoto.com/id/1179588723/photo/close-up-portrait-of-his-he-nice-attractive-funny-confused-brunet-bearded-guy-wearing-pink.jpg?s=612x612&w=0&k=20&c=nhgnEZKvA1yxYhnSQ-hD4fHFQr7xGn2TwJnatCdssK4=" />
      <div className="widget_item_content">
        <div className="widget_item_content_bio">
          <h4>Blossom Dugbatey</h4>
          <h6>
            Software Engineering || Typescript || Nodejs || Expressjs || Reactjs
          </h6>
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
