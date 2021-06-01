import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAllowedByRole, isAuthenticated } from './auth';

const PrivateRoute = ({ children, path, allowedRoutes }) => {
  return (
    <Route
      path={path}
      render={({ location }) => {
        if (!isAuthenticated()) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        } else if (isAuthenticated() && !isAllowedByRole(allowedRoutes)) {
          return (
            <Redirect to={{ pathname: "/" }} />
          )
        }

        return children;
      }}
    />
  );
}

export default PrivateRoute;