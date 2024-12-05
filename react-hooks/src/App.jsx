import { useEffect, useState } from "react";

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

 const handleCarChange = () => {
  setFavorite((prev) => {
   //  console.log(prev);

   return { ...prev, car: "Range Rovar" };
  });
 };
 const handleModelChange = () => {
  setFavorite((prev) => {
   //  console.log(prev);

   return { ...prev, model: "R-1" };
  });
 };
 const handleColorChange = () => {
  setFavorite((prev) => {
   //  console.log(prev);

   return { ...prev, color: "black" };
  });
 };

 //  console.log(color);
 const [count, setCount] = useState(0);
 useEffect(() => {
  // setCount(count);
 });

 return (
  <>
   <p>{count}</p>
   <h2>
    This is my favorite Car: {car}, Model: {model} , Color: {color}
   </h2>
   <button onClick={handleColorChange}>Color change</button>
   <button onClick={handleCarChange}>Change Car</button>
   <button onClick={handleModelChange}>Change Model</button>
  </>
 );
}

export default App;
