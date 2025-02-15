import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const PrivateRoute = ({ children }) => {
  const { token, status } = useSelector((state) => state.auth);

  if (status === "loading") {
    return <Loading />;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
