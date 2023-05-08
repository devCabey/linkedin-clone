import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";
import "./HomeLink.css";

function HomeLinkBottom() {
  const [show, setShow] = useState(false);
  return (
    <div className="homelink_container">
      <div className="homelink_title_wrapper">
        <span>SUGGESTED SEARCHES</span>
      </div>
      <ul className="homelink_links_bottom">
        <li>Engineering</li>
        <li>Business Development</li>
        <li>Finance</li>
        <li>Administrative Assistant</li>
        <li>Retail Associate</li>
        <li>Customer Service</li>
        <li>Operations</li>
        <li>Information Technology</li>
        <li>Marketing</li>
        <li>Human Resources</li>
        {show && (
          <>
            <li>Healthcare Service</li>
            <li>Sales</li>
            <li>Programming and Project Management</li>
            <li>Accounting</li>
            <li>Arts and Design</li>
            <li>Community and Social Services</li>
            <li>Consulting</li>
            <li>Education</li>
            <li>Enterprenuership</li>
            <li>Legal</li>
            <li>Media and Communications</li>
            <li>Military and Protective Service</li>
            <li>Product Management</li>
            <li>Purchasing</li>
            <li>Quality Assurance</li>
            <li>Real Estate</li>
            <li>Research</li>
            <li>Support </li>
            <li>Administrative</li>
          </>
        )}
      </ul>
      <div className="homelink_more" onClick={() => setShow(!show)}>
        <span>{show ? "Show less" : "Show more"} </span>{" "}
        {show ? <ExpandLess /> : <ExpandMore />}
      </div>
    </div>
  );
}

export default HomeLinkBottom;
