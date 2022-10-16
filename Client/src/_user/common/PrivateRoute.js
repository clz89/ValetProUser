import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



function PrivateRoute({ children}) {
    const { user: currentUser } = useSelector((state) => state.auth);
    const auth = currentUser && currentUser.roles  

    return auth ? children : <Navigate to="/login" />;
  }
   export default PrivateRoute;