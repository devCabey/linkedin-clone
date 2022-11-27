import { Apple, ExpandMore, LinkedIn } from "@mui/icons-material";
import React from "react";
import LoginInput from "../../components/loginInput/LoginInput";
import "./Login.css";

function Login() {
  return (
    <div className="login_page">
      {/* header */}
      <div className="login_header">
        <img src="./images/linkedin-alt.png" alt="linkedin-logo" />
      </div>
      {/* content */}
      <div className="login_content_wrapper">
        <div className="login_content_container">
          <div className="login_content_box">
            <h2>Sign in</h2>
            <h5>Stay updated on your professional world</h5>
            <LoginInput type="text" placeholder="Email or Phone" />
            <LoginInput type="password" placeholder="Password" />

            <span className="login_forgot">Forgot Password?</span>

            <div className="login_button">
              <span>Sign in</span>
            </div>
            <div className="login_alt">
              <span></span>
              <p>or</p>
              <span></span>
            </div>

            <div className="login_other_button">
              <img
                src="./images/google-icon.png"
                alt="google-icon"
                width="14px"
              />
              <span>Sign in with Google </span>
            </div>
            <div className="login_other_button">
              <Apple />
              <span>Sign in with Apple </span>
            </div>
          </div>

          <p className="login_signup_route">
            New LinkedIn? <span>Join now</span>
          </p>
        </div>
      </div>
      {/* footer */}
      <div className="login_footer">
        <p className="login_footer_logo">
          Linked
          <LinkedIn sx={{ fontSize: 17 }} />
        </p>
        <p className="login_copyright">&copy;2022</p>

        <ul className="login_footer_list">
          <li>User Agreement</li>
          <li>Privacy Policy</li>
          <li>Community Guidelines</li>
          <li>Cookies Policy</li>
          <li>Copyright Policy</li>
          <li>Send Feedback</li>
          <li>
            Language <ExpandMore />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
