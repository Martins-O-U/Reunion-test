// import React from 'react';
// import {Route, Redirect} from 'react-router-dom';

// const ProtectedRoute = ({component: Component, ...rest}) => {
//     return (
//         <Route
//         {...rest} 
//         render={props => {
//             if (localStorage.getItem('token')) {
//                 return <Component {...props} />
//             }
//             console.log('Redirecting to Login Page, Failed to Login')
//             return <Redirect to="/" />
//         }}
//         />
//     )
// }

// export default ProtectedRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return render ? render(props) : <Component {...props} />;
        }
        console.log("Redirecting to Login");
        return <Redirect to="/" />;
      }}
    />
  );
};

export default ProtectedRoute;