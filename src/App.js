import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";

import ActivityLoader from "./pages/activitypage/ActivityLoader";
import Home from "./pages/homepage/Home";
import HomeAlt from "./pages/homepage_alt/HomeAlt";
import Login from "./pages/loginpage/Login";
import Signup from "./pages/signuppage/Signup";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
