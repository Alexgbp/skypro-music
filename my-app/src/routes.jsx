import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { MainPage } from './pages/main-page/mainPage.jsx';
// import  LoginPage  from './pages/login/login';
import Registration from './pages/registration/reg';
import { PageNotFound } from './pages/not-found/pageNotFound';
import { Category } from './pages/category/category';
import { ProtectedRoutes } from "./components/propected/protectedRoutes";
import { MyPlayList } from "./pages/my-playlist/myPlaylist";


export function AppRoutes() {

  // const [user, setUser] = useState();
  
  return (
    <Routes>
      <Route element={<ProtectedRoutes isRegistred={Boolean()} />}>
        <Route path="/favorites" element={<MyPlayList />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/" element={<MainPage user={user} так было раньше  />} /> */}
      <Route path="/login" element={<Registration  isLoginMode={true} />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
