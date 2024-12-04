import { useState } from "react";

import "./App.css";

function App() {
 const [favorite, setFavorite] = useState({
  model: "F-1",
  car: "BMW",
  color: "Chery",
 });

 const { car, model, color } = favorite;
 //  console.log(favorite);

 //  let col = "Black";

 const handleColorChange = () => {
  setFavorite((prev) => {
   console.log(prev);

   return { ...prev, color: "black" };
  });
 };

 //  console.log(color);

 return (
  <>
   <h2>
    This is my favorite Car: {car}, Model: {model} , Color: {color}
   </h2>
   <button onClick={handleColorChange}>Color change</button>
   <button>Change Car</button>
   <button>Change Model</button>
  </>
 );
}

export default App;
