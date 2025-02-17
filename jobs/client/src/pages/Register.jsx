import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const Register = () => {
 const { createUser } = useContext(AuthContext);

 const handleSubmit = (e) => {
  e.preventDefault();

  const formData = e.target;
  const userName = formData.username.value;
  const email = formData.email.value;
  const password = formData.password.value;
  const inputValue = { userName, email, password };
  console.log("Form Submitted", inputValue);

  createUser(email, password)
   .then((result) => {
    console.log(result.user);
   })
   .catch((error) => {
    console.error();
    error.message;
   });
 };

 return (
  <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
   <h2 className="text-xl font-semibold mb-4">Register</h2>
   <form onSubmit={handleSubmit}>
    <div className="mb-4">
     <label className="block text-sm font-medium mb-1">Username</label>
     <input
      type="text"
      name="username"
      className="w-full px-3 py-2 border rounded-lg"
      required
     />
    </div>
    <div className="mb-4">
     <label className="block text-sm font-medium mb-1">Email</label>
     <input
      type="email"
      name="email"
      className="w-full px-3 py-2 border rounded-lg"
      required
     />
    </div>
    <div className="mb-4">
     <label className="block text-sm font-medium mb-1">Password</label>
     <input
      type="password"
      name="password"
      className="w-full px-3 py-2 border rounded-lg"
      required
     />
    </div>
    <button
     type="submit"
     className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
    >
     Register
    </button>
   </form>
  </div>
 );
};

export default Register;
