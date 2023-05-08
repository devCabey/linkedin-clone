import React from "react";
import "./HomeLink.css";

function HomeLinkTop() {
  return (
    <div className="homelink_container">
      <div className="homelink_title_wrapper">
        <span>CONTENT TOPICS</span>
      </div>
      <ul className="homelink_links">
        <li>See All Topics</li>
        <li>Workplace</li>
        <li>Job Search</li>
        <li>Careers</li>
        <li>Interviewing</li>
        <li>Salary and Compensation</li>
        <li>Internships</li>
        <li>Employee Benefits</li>
      </ul>
    </div>
  );
}

export default HomeLinkTop;
