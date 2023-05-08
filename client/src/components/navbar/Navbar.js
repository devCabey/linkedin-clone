import {
  BusinessCenter,
  Explore,
  People,
  Slideshow,
} from "@mui/icons-material";
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar_container">
      <Link to="/" className="navbar_logo_wrapper">
        <img src="./images/linkedin-alt.png" alt="linkedin_logo" />
      </Link>
      <div className="navbar_link_wrapper">
        <ul className="navbar_link_container">
          <li>
            <Link to="/discover" className="navbar_link_style">
              <Explore sx={{ fontSize: "25px" }} />
              <span>Discover</span>
            </Link>
          </li>
          <li>
            <Link to="/people" className="navbar_link_style">
              <People sx={{ fontSize: "25px" }} />
              <span>People</span>
            </Link>
          </li>
          <li>
            <Link to="/learning" className="navbar_link_style">
              <Slideshow sx={{ fontSize: "25px" }} />
              <span>Learning</span>
            </Link>
          </li>
          <li>
            <Link to="/jobalt" className="navbar_link_style">
              <BusinessCenter sx={{ fontSize: "25px" }} />
              <span>Jobs</span>
            </Link>
          </li>
        </ul>
        <div className="navbar_auth_link_container">
          <span>
            <Link to="/signup" className="navbar_link">
              Join now
            </Link>
          </span>
          <span>
            <Link to="/signin" className="navbar_link">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
