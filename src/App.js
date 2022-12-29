import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./redux/store";

import Home from "./pages/homepage/Home";
import HomeAlt from "./pages/homepage_alt/HomeAlt";
import Login from "./pages/loginpage/Login";
import Signup from "./pages/signuppage/Signup";
import ErrorPage from "./pages/errorpage/ErrorPage";
import Network from "./pages/networkpage/Network";
import Job from "./pages/jobpage/Job";
import Message from "./pages/messagepage/Message";
import Notification from "./pages/notificationpage/Notification";
import Profile from "./pages/profilepage/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeAlt />,
      errorElement: <ErrorPage />,
      children: [],
    },
    {
      path: "signin",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "feed",
      element: <Home />,
      
    },
    {
      path: "network",
      element: <Network />,
    },
    {
      path: "jobs",
      element: <Job />,
    },
    {
      path: "message",
      element: <Message />,
    },
    {
      path: "notification",
      element: <Notification />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
