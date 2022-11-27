import React, { useState } from "react";
import "./LoginInput.css";
function LoginInput({ type, placeholder }) {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="loginInput_wrapper">
      <div>
        <h4 style={{ display: `${showPlaceholder ? "" : "none"}` }}>
          {placeholder}
        </h4>

        <input
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          onFocus={() => setShowPlaceholder(true)}
          onBlur={() => setShowPlaceholder(false)}
        />
      </div>
      <span
        style={{ display: `${type === "password" ? "" : "none"}` }}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "hide" : "show"}
      </span>
    </div>
  );
}

export default LoginInput;
