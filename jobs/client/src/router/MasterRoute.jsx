import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";

const MasterRoute = () => {
 return (
  <Routes>
   <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
   </Route>
  </Routes>
 );
};

export default MasterRoute;
