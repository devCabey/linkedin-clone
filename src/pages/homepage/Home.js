import React from "react";
import "./Home.css";

import Feed from "../../components/feed/Feed";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../redux/userSlice";
// import Login from "../loginpage/Login";
// import HomeAlt from "../homepage_alt/HomeAlt";

function Home() {
  // const user = useSelector(selectUser);
  return (
    // <div>
    <div className="home_wrapper">
      <div className="home_header">
        <Header />
      </div>

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
    //  </div>
  );
}

export default Home;
