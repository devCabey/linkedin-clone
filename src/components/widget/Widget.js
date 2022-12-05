import { East, Info } from "@mui/icons-material";
import React from "react";
import "./Widget.css";
import WidgetItem from "./widgetItem/WidgetItem";

function Widget() {
  return (
    <div className="widget_wrapper">
      <div className="widget_head">
        <div className="widget_head_title">
          <p>Add to your feed</p>
          <Info sx={{ color: "#5d5d5d", fontSize: "15px" }} />
        </div>
        {/* accounts */}
        <>
          <WidgetItem />
          <WidgetItem />
          <WidgetItem />
          <WidgetItem />
        </>
        <span className="widget_head_footer">
          <p>View all recommendations</p>
          <East sx={{ fontSize: "16px" }} />
        </span>
      </div>
      <div className="widget_bottom"></div>
      <div className="widget_links"></div>
    </div>
  );
}

export default Widget;
