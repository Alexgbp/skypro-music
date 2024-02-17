import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoutes({ redirectPath = '/login', isRegistred}) {
  if (!isRegistred) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet />;
}
