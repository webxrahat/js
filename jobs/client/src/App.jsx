import React from "react";
import MasterRoute from "./router/MasterRoute";
import AuthProvider from "./context/AuthProvider";

const App = () => {
 return (
  <AuthProvider>
   <MasterRoute />
  </AuthProvider>
 );
};

export default App;
