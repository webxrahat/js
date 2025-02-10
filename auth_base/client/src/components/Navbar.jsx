import React from "react";
import { Link } from "react-router";

const Navbar = () => {
 return (
  <nav className="bg-blue-600 text-white p-4">
   <ul className="flex gap-4">
    <li>
     <Link className="hover:text-gray-300" to="/">
      Home
     </Link>
    </li>
    <li>
     <Link className="hover:text-gray-300" to="/login">
      Login
     </Link>
    </li>
    <li>
     <Link className="hover:text-gray-300" to="/register">
      Sign Up
     </Link>
    </li>
   </ul>
  </nav>
 );
};

export default Navbar;
