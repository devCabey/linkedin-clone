import { Info } from "@mui/icons-material";
import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget_wrapper">
      <div className="widget_head">
        <div className="widget_head_title">
          <p>Add to your feed</p>
          <Info />
        </div>
      </div>
      <div className="widget_bottom"></div>
      <div className="widget_links"></div>
    </div>
  );
}

export default Widget;
