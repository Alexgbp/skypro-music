import React from 'react';
import { Navigate } from 'react-router-dom';

export function protectedRoutes({
  children,
  redirectPath = '/login',
  isRegistred,
}) {
  if (!isRegistred) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return children;
}
