import React from "react";
import HomeLinkBottom from "../../components/homelink/HomeLinkBottom";
import HomeLinkTop from "../../components/homelink/HomeLinkTop";
import LoginInput from "../../components/loginInput/LoginInput";
import Navbar from "../../components/navbar/Navbar";
import "./HomeAlt.css";

function HomeAlt() {
  return (
    <div>
      {/* First  */}
      <div>
        <Navbar />
        <div className="homealt_first_container">
          <div className="homealt_first_container_left">
            <div className="homealt_first_left_wrapper">
              <p>Welcome to your professional community</p>
              <div>
                <LoginInput type="text" placeholder="Email or Phone" />
                <LoginInput type="password" placeholder="Password" />
                <span className="homealt_login_forgot">Forgot Password?</span>

                <div className="homealt_login_button">
                  <span>Sign in</span>
                </div>
                <div className="homealt_login_alt">
                  <span></span>
                  <p>or</p>
                  <span></span>
                </div>

                <div className="homealt_login_other_button">
                  <img
                    src="./images/google-icon.png"
                    alt="google-icon"
                    width="14px"
                  />
                  <span>Sign in with Google </span>
                </div>
              </div>
            </div>
          </div>
          <div className="homealt_first_container_right">
            <img
              src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
              alt="home-illustration"
            />
          </div>
        </div>
      </div>
      {/* Second */}
      <div className="homealt_second_container">
        <div className="homealt_second_container_left">
          <p>Explore topics you are interested in</p>
        </div>
        <div className="homealt_second_container_right">
          <div>
            <HomeLinkTop />
          </div>
        </div>
      </div>
      {/* third */}
      <div className="homealt_third_container">
        <div className="homealt_second_container_left">
          <p>Find the right job or internship for you</p>
        </div>
        <div className="homealt_second_container_right">
          <div>
            <HomeLinkBottom />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAlt;
