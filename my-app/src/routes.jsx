import React, {useState} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { MainPage } from './pages/main-page/mainPage.jsx';
import  LoginPage  from './pages/login/login';
import Registration from './pages/registration/reg';
import { PageNotFound } from './pages/not-found/pageNotFound';
import { Category } from './pages/category/category';
import { ProtectedRoutes } from "./components/propected/protectedRoutes";
import { MyPlayList } from "./pages/my-playlist/myPlaylist";


export function AppRoutes() {
  const navigate = useNavigate()

  const [user, setUser] = useState(localStorage.getItem("user"));
  
   const signIn = (e) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify({login: 123}))
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
        <Route path="/" element={<MainPage user={user} onClick={user ? signOut : signIn} />} />
        <Route path="/favorites" element={<MyPlayList />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="/login" element={<LoginPage onClick={signIn} />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
