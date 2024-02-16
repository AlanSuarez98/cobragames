import React from "react";
import { Navigate } from "react-router";

const ProtectedDashboard = ({ children }) => {
  const loggedIn = !!localStorage.getItem("loggedInUserEmail");
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default ProtectedDashboard;
