import React from "react";
import "./Home.css";

import Feed from "../../components/feed/Feed";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import HomeWrapper from "../../hoc/homeWrapper/HomeWrapper";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../redux/userSlice";
// import Login from "../loginpage/Login";
// import HomeAlt from "../homepage_alt/HomeAlt";

function Home() {
  // const user = useSelector(selectUser);
  return (
    <HomeWrapper>
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
    </HomeWrapper>
  );
}

export default Home;
