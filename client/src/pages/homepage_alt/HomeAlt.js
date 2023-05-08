import React from "react";
import AuthFooter from "../../components/authFooter/AuthFooter";
import HomeLinkBottom from "../../components/homelink/HomeLinkBottom";
import HomeLinkTop from "../../components/homelink/HomeLinkTop";
import LoginInput from "../../components/loginInput/LoginInput";
import Navbar from "../../components/navbar/Navbar";
import "./HomeAlt.css";

const HomeAltData = [
  "About",
  "Accessiblilty",
  "Community Guidelines",
  "User Agreement",
  "Privacy Policy",
  "Cookie Policy",
  "Copyright Policy",
  "Brand Policy",
  "Guest Controls",
  "Community Guidelines",
];

function HomeAlt() {
  return (
    <div className="homealt_wrapper">
      {/* First  */}
      <div>
        <Navbar />
        <div className="homealt_first_container">
          <div className="homealt_first_container_left">
            <div className="homealt_first_left_wrapper">
              <p>Millions of jobs and people hiring</p>
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
      {/* fourth */}
      <div className="homealt_fourth_container">
        <div className="homealt_fourth_container_left">
          <p>Post your job for millions of people to see</p>
        </div>
        <div className="homealt_fourth_container_right">
          <span>Post a job</span>
        </div>
      </div>
      {/* last but one */}
      <div className="homealt_final_container">
        <div className="homealt_final_container_left">
          <img
            src="https://static-exp1.licdn.com/aero-v1/sc/h/b1fxwht7hdbeusleja7ciftsj"
            alt="left illustration"
          />
          <p>Connect with people who can help</p>
          <div>
            <span>Find people you know</span>
          </div>
        </div>
        <div className="homealt_final_container_right">
          <img
            src="https://static-exp1.licdn.com/aero-v1/sc/h/dkfub4sc7jgzg3o31flfr91rv"
            alt="right illustration"
          />
          <p>Learn the skills you need to succeed</p>
          <div>
            <span>Choose a topic to learn about</span>
          </div>
        </div>
      </div>
      <div className="homealt_footer">
        <AuthFooter list={HomeAltData} />
      </div>
    </div>
  );
}

export default HomeAlt;
