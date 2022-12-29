import React from "react";
import "./Signup.css";

import SignupInput from "../../components/signupInput/SignupInput";
import AuthFooter from "../../components/authFooter/AuthFooter";
import { Link } from "react-router-dom";

const signupFooterList = [
  "About",
  "Accessibility",
  "User Agreement",
  "Privacy Policy",
  "Community Guidelines",
  "Cookies Policy",
  "Copyright Policy",
  "Brand Policy",
  "Guest Controls",
];

function Signup() {
  return (
    <div className="signup_container">
      {/* Header */}
      <div className="signup_header">
        <Link to="/" className="signup_header_image">
          <img src="./images/linkedin-alt.png" alt="linkedin-logo" />
        </Link>

        <span></span>
        <span></span>
      </div>
      {/* Content */}
      <div className="signup_content_wrapper">
        <p>Make the most of your professional life</p>
        <div className="signup_content_container">
          <SignupInput
            title="Email"
            error="Please enter your email address."
            type="email"
          />
          <SignupInput
            title="Password (6 or more characters)"
            error="Please enter your password."
            type="password"
          />
          <p>
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <span>User Agreement</span>,<span>Privacy Policy</span> and{" "}
            <span>Cookies Policy</span>
          </p>

          <div className="signup_button">
            <span>Agree & Join</span>
          </div>

          <div className="signup_alt">
            <span></span>
            <p> or </p>
            <span></span>
          </div>

          <div className="signup_other_button">
            <img
              src="./images/google-icon.png"
              alt="google-icon"
              width="14px"
            />
            <span>Continue with Google </span>
          </div>

          <Link to="/signin" className="signup_login_route">
            Already on LinkedIn? <span>Sign in</span>
          </Link>
        </div>
        <div className="signup_foot">
          Looking to create a page for your business? <span>Get help</span>
        </div>
      </div>
      <div className="signup_footer">
        <AuthFooter list={signupFooterList} />
      </div>
    </div>
  );
}

export default Signup;
