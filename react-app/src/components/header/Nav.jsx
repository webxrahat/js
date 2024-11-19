import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
// import logo from "../assets/logo.jpg";

export const Nav = () => {
    return (
        <div>
            <div>
                <img src="" alt="img" />
            </div>
            <div className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
            </div>
        </div>
    );
};
