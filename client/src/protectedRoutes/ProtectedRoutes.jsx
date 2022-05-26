import React from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';
// import Login from '../pages/login/Login';

const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};
function ProtectedRoutes() {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default ProtectedRoutes;
