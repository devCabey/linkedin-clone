import React from "react";
import "./Home.css";

import Feed from "../../components/feed/Feed";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <div className="home_wrapper">
      <Header />

      {/* App Body */}
      <div className="home_container">
        {/* Sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widget */}
      </div>
    </div>
  );
}

export default Home;
