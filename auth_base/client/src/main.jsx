import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <BrowserRouter>
   <div className="max-w-5xl mx-auto">
    <App />
   </div>
  </BrowserRouter>
 </StrictMode>
);
