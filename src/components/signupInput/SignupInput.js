import React, { useState } from "react";
import "./SignupInput.css";
function SignupInput({ title, type, error }) {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  return (
    <div className="signup_input_container">
      <h6>{title}</h6>
      <div className="signup_input_spot">
        <input type={showPassword ? "text" : type} />
        <span
          style={{ display: type === "password" ? "" : "none" }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </span>
      </div>
      <h4 style={{ display: errorMessage ? "" : "none" }}>{error}</h4>
    </div>
  );
}

export default SignupInput;
