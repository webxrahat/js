import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpg";

export const Nav = () => {
    return (
        <div>
            <div>
                <img src="" alt="img" />
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};
