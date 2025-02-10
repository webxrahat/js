import React from "react";

const Register = () => {
 const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
 };

 return (
  <div className="p-8 max-w-md mx-auto">
   <h2 className="text-xl mb-4">Register</h2>
   <form onSubmit={handleSubmit} className="space-y-4">
    <div>
     <label className="block text-sm mb-1">Username</label>
     <input type="text" className="w-full p-2 border rounded" />
    </div>
    <div>
     <label className="block text-sm mb-1">Email</label>
     <input type="email" className="w-full p-2 border rounded" />
    </div>
    <div>
     <label className="block text-sm mb-1">Password</label>
     <input type="password" className="w-full p-2 border rounded" />
    </div>
    <button
     type="submit"
     className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
    >
     Register
    </button>
   </form>
  </div>
 );
};

export default Register;
