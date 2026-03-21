import React from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
