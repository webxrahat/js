import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";

const MasterRoute = () => {
 return (
  <Routes>
   <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/register" element={<Register />} />
   </Route>
  </Routes>
 );
};

export default MasterRoute;
