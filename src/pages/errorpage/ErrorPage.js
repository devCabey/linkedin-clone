import React from "react";
import { useRouteError } from "react-router-dom";

import "./ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();
  console.log(error.status);
  return (
    <div className="error_wrapper">
      {error.status === 404 ? (
        <img
          src="https://cdn.dribbble.com/users/992274/screenshots/7392790/media/95483df50a0a3324c4cf9ccb1094b825.jpg"
          alt="illustration"
        />
      ) : error.status === 400 ? (
        <img
          src="https://stories.freepiklabs.com/storage/23267/400-error-bad-request-pana-2855.png"
          alt="illustration"
        />
      ) : error.status === 401 ? (
        <img
          src="https://stories.freepiklabs.com/storage/23269/401-error-unauthorized-pana-2856.png"
          alt="illustration"
        />
      ) : (
        <img
          src="https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg"
          alt="illustration"
        />
      )}

      <i>!! {error.statusText || error.messsage} !!</i>
    </div>
  );
}

export default ErrorPage;
