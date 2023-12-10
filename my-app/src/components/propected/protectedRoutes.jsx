import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export function ProtectedRoutes({ redirectPath = '/login', isRegistred}) {
  ProtectedRoutes.propTypes = {
    redirectPath: PropTypes.bool.isRequired,
    isRegistred: PropTypes.bool.isRequired
  };
  if (!isRegistred) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet />;
}
