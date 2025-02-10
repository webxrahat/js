import React from "react";

const Login = () => {
 const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Username: ${username}\nPassword: ${password}`);
 };

 return (
  <div className="p-8 max-w-md mx-auto">
   <h2 className="text-xl mb-4">Login</h2>
   <form onSubmit={handleSubmit} className="space-y-4">
    <div>
     <label className="block text-sm mb-1">Username</label>
     <input type="text" className="w-full p-2 border rounded" />
    </div>
    <div>
     <label className="block text-sm mb-1">Password</label>
     <input type="password" className="w-full p-2 border rounded" />
    </div>
    <button
     type="submit"
     className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
    >
     Login
    </button>
   </form>
  </div>
 );
};

export default Login;
