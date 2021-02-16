/* eslint-disable react/jsx-props-no-spreading */
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const PrivateRoute = ({ children, ...props }: RouteProps) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Route
      {...props}
      render={() => (isUser ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
