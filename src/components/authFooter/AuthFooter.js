import { ExpandMore, LinkedIn } from "@mui/icons-material";
import React from "react";

import "./AuthFooter.css";

function AuthFooter({ list }) {
  return (
    <div className="auth_footer">
      <div className="auth_footer_head">
        <p className="auth_footer_logo">
          Linked
          <LinkedIn sx={{ fontSize: 17 }} />
        </p>
        <p className="auth_copyright">&copy;2022</p>
      </div>
      <ul className="auth_footer_list">
        {list && list.map((data, index) => <li key={index}>{data}</li>)}
        <li>
          Language <ExpandMore />
        </li>
      </ul>
    </div>
  );
}

export default AuthFooter;
