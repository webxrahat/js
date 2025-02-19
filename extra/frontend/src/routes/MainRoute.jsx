import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import App from "../App";
import RootLayout from "../layout/RootLayout";

const MainRoute = () => {
 return (
  <Routes>
   <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path={"/add"} element={<Create />} />
    <Route path={"/edit"} element={<Edit />} />
   </Route>
  </Routes>
 );
};

export default MainRoute;
