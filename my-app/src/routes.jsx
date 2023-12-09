import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page/mainPage";
import { LoginPage } from "./pages/login/loginPages";

export function AppRoutes(){
return(
    <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />}/>
    </Routes>
)
}