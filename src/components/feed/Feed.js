import {
  CalendarToday,
  Notes,
  PhotoSizeSelectActual,
  SmartDisplay,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Feed.css";
import InputOption from "./inputOption/InputOption";
function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Avatar sx={{ width: "40px", height: "40px" }} />
          <div className="feed_input_form">
            <p>Start a post</p>
          </div>
        </div>
        <div className="feed_inputOptions">
          <InputOption
            title="Photo"
            Icon={PhotoSizeSelectActual}
            color="#0388fc"
          />
          <InputOption title="Video" Icon={SmartDisplay} color="#3b8f42" />
          <InputOption title="Event" Icon={CalendarToday} color="#a15c03" />
          <InputOption title="Write article" Icon={Notes} color="#f56302" />
        </div>
      </div>

      {/* Posts */}
    </div>
  );
}

export default Feed;
