import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main-page/mainPage';
import LoginPage from './pages/login/login';
import Registration from './pages/registration/reg';
import { PageNotFound } from './pages/not-found/pageNotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
