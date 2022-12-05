import React from "react";
import "./Home.css";

import Feed from "../../components/feed/Feed";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";

function Home() {
  return (
    <div className="home_wrapper">
      <Header />
      {/* App Body */}
      <div className="home_container">
        {/* Sidebar */}
        <div className="home_sidebar">
          <Sidebar />
        </div>

        {/* feed */}
        <div className="home_feed">
          <Feed />
        </div>

        {/* widget */}
        <div className="home_widget">
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Home;
