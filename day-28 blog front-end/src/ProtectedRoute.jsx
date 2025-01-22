import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem('logintoken');
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;


// import React from "react";
// import { Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//     const token=sessionStorage.getItem('logintoken');
//     let verifyUser=false;
//     if(token){
//         verifyUser=true;
//     }
//   return (
//     verifyUser?<Outlet/>:<Navigate to={'/'}/>
    
//   )
// }

// export default ProtectedRoute
