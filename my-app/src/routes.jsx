import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page/mainPage";

export function AppRoutes(){
return(
    <Routes>
        <Route path="/" element={<MainPage />}/>
    </Routes>
)
}