
import React from "react";
import { Navigate } from "react-router-dom";
import { permission } from "../permission";

const ProtectedRoute = ({ children, requiredPermission, user }) => {
  if (!permission[user.role]?.includes(requiredPermission)) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default ProtectedRoute;
