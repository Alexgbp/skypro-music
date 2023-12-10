import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main-page/mainPage';
import  LoginPage  from './pages/login/login';
import Registration from './pages/registration/reg';
import { PageNotFound } from './pages/not-found/pageNotFound';
import { Catergory } from './pages/category/category';
import { ProtectedRoutes } from "./components/propected/protectedRoutes";
import PropTypes from 'prop-types'

export function AppRoutes({user}) {
  AppRoutes.propTypes = {
    user: PropTypes.bool.isRequired,
  };
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route element={<ProtectedRoutes isRegistred={Boolean(user)} />}>
        
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/favorites" element={<Catergory />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
