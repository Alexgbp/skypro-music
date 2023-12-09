import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main-page/mainPage';
import LoginPage from './pages/login/login';
import Registration from './pages/registration/reg';
import { PageNotFound } from './pages/not-found/pageNotFound';
import { MyPlayList } from './pages/my-playlist/myPlaylist';
import { Catergory } from './pages/category/category';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/my-playlist" element={<MyPlayList />} />
      <Route path="/category/:id" element={<Catergory />} />
    </Routes>
  );
}
