import React from "react";
import { Link } from "react-router";

const Navbar = () => {
 return (
  <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
   {/* Logo */}
   <div className="text-xl font-bold">Brand</div>

   {/* Menu */}
   <ul className="hidden md:flex space-x-6">
    <li>
     <Link to={"/"} className="hover:text-gray-400">
      Home
     </Link>
    </li>
    <li>
     <Link to={"/add"} className="hover:text-gray-400">
      Add
     </Link>
    </li>

    {/* <li>
     <a href="#" className="hover:text-gray-400">
      Services
     </a>
    </li>
    <li>
     <a href="#" className="hover:text-gray-400">
      Contact
     </a>
    </li> */}
   </ul>

   {/* 
   <div>
    <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
     Login / Sign Up
    </button>
   </div> */}
  </nav>
 );
};

export default Navbar;
