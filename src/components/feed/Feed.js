import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import React from "react";
import "./Feed.css";
import InputOption from "./inputOption/InputOption";
function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit" className="">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption title="Photo" Icon={Image} color="#7005f9" />
          <InputOption title="Video" Icon={Subscriptions} color="#E7A33F" />
          <InputOption title="Event" Icon={EventNote} color="0C0CBCD" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDay}
            color="7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
    </div>
  );
}

export default Feed;
