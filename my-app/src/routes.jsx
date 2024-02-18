import React, { createContext, useState } from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';
import { MainPage } from './pages/main-page/mainPage.jsx';
import Registration from './pages/registration/reg';
import { PageNotFound } from './pages/not-found/pageNotFound';
import { Category } from './pages/category/category';
import { ProtectedRoutes } from "./components/protected/protectedRoutes.jsx";
import { MyPlayList } from "./pages/my-playlist/myPlaylist";
export const Context = createContext()


export function AppRoutes() {
  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [loader, setLoader] = useState(false);

  const logOutClick = () => {
    localStorage.removeItem("user")
    navigate("/login", {replace: true})
    setUser(null)
  }
  
  return (
    <Context.Provider value={{user, setUser, loader, setLoader}}>
      <Routes>
      <Route element={<ProtectedRoutes isRegistred={Boolean(user)} />}>
        <Route path="/favorites" element={<MyPlayList loader={loader} />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/" element={<MainPage onClick={logOutClick} />} />
      </Route>
      <Route path="/login" element={<Registration  isLoginMode={true} />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </Context.Provider>
  );
}
