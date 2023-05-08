import React from "react";

import "./HomeWrapper.css";

import Header from "../../components/header/Header";

function HomeWrapper(props) {
  return (
    <div className="home_wrapper">
      <div className="home_header">
        <Header />
      </div>
      <>{props.children}</>
    </div>
  );
}

export default HomeWrapper;
