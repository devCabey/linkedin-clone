import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./HomeAlt.css";

function HomeAlt() {
  return (
    <div>
      {/* First  */}
      <div>
        <Navbar />
        <div>
          <div>auth side</div>
          <div>
            <img
              src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
              alt="home illustration"
            />{" "}
          </div>
        </div>
      </div>
      {/* Second */}
      <div>Second part</div>
    </div>
  );
}

export default HomeAlt;
