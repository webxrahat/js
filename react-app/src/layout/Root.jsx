import React from "react";
import { Nav } from "../components/header/Nav";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/footer/Footer";

export const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Nav />
            {navigation.state === "loading" ? (
                <p style={{ fontSize: "50px" }}>Data Loading</p>
            ) : (
                <Outlet />
            )}
            <Footer />
        </div>
    );
};
