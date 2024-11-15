import React from "react";
import { Nav } from "../components/header/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

export const Root = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};
