import React, {useState} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { MainPage } from './pages/main-page/mainPage';
import  LoginPage  from './pages/login/login';
import Registration from './pages/registration/reg';
import { PageNotFound } from './pages/not-found/pageNotFound';
import { Catergory } from './pages/category/category';
import { ProtectedRoutes } from "./components/propected/protectedRoutes";


export function AppRoutes() {
  const navigate = useNavigate()

  const [user, setUser] = useState(localStorage.getItem("user"));
   const signIn = (e) => {
    e.preventDefault()
    localStorage.setItem("user", {login: 123})
    setUser(localStorage.getItem("user"));
    navigate("/" , {replace: true})
  };
  const signOut = () =>{
    localStorage.removeItem("user")
    setUser(null)
    navigate("/login" , {replace: true})
  };
  return (
    <Routes>
      <Route element={<ProtectedRoutes isRegistred={Boolean(user)} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<Catergory />} />
        <Route path="/category/:id" element={<Catergory />} />
      </Route>
      <Route path="/login" element={<LoginPage onClick={signIn} />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
