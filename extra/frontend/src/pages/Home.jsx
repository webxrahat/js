import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Home = () => {
 //  const [inpValue, setInpValue] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  const formValue = e.target;
  const toDo = formValue.name.value;

  console.log(toDo);
 };

 return (
  <div>
   <div>
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
     <input type="text" name="name" className="bg-amber-50 p-2 border w-full" />
     <button
      type="submit"
      className="bg-blue-400 p-2 block w-full mt-3 cursor-pointer"
     >
      Submit
     </button>
    </form>
   </div>

   {/* {This is list view section} */}

   <div className="max-w-2xl mx-auto">
    <div className="flex justify-between items-center shadow-xl p-3">
     <div>
      <p>This is the Title</p>
     </div>
     <div className="flex items-center">
      <button className="cursor-pointer bg-amber-200 p-2">
       <FaRegEdit />
      </button>
      <button className="cursor-pointer bg-red-400 p-2 ml-2">
       <MdDeleteForever />
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Home;
