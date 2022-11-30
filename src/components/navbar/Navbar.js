import {
  BusinessCenter,
  Explore,
  People,
  Slideshow,
} from "@mui/icons-material";
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_logo_wrapper">
        <img src="./images/linkedin-alt.png" alt="linkedin_logo" />
      </div>
      <div className="navbar_link_wrapper">
        <ul className="navbar_link_container">
          <li>
            <Explore sx={{ fontSize: "25px" }} />
            <span>Discover</span>
          </li>
          <li>
            <People sx={{ fontSize: "25px" }} />
            <span>People</span>
          </li>
          <li>
            <Slideshow sx={{ fontSize: "25px" }} />
            <span>Learning</span>
          </li>
          <li>
            <BusinessCenter sx={{ fontSize: "25px" }} />
            <span>Jobs</span>
          </li>
        </ul>
        <div className="navbar_auth_link_container">
          <span>Join now</span>
          <span>Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
