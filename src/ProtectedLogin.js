import React from "react";
import { Navigate } from "react-router";

const ProtectedLogin = ({ children }) => {
  const loggedIn = !!localStorage.getItem("loggedInUserEmail");
  if (loggedIn) {
    return <Navigate to="/dashboard" replace />;
  } else {
    return children;
  }
};

export default ProtectedLogin;
