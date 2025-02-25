import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Home = () => {
 const [inpValue, setInpValue] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  const formValue = e.target;
  const name = formValue.name.value;
  // console.log(formValue.name.value !== "");

  // console.log({ name });
  // let num = 1;
  if (formValue.name.value !== "") {
   fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
     "content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
   })
    .then((res) => res.json())
    .then((data) => {
     if (data.acknowledged) {
      toast.success("Wow successfully submited !");

      formValue.reset();
     }
     //  console.log(data);
    });
  } else {
   toast.warning("please provide a valid input");
  }
 };

 useEffect(() => {
  fetch("http://localhost:5000/users")
   .then((res) => res.json())
   .then((data) => {
    // console.log(data);

    setInpValue(data);
   })
   .catch(console.error("fetch to faild"));
 }, []);

 //  console.log(inpValue);

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
   <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
   />

   <div className="max-w-2xl mx-auto">
    {inpValue &&
     inpValue.map((inp, idx) => (
      <div
       key={idx}
       className="flex justify-between items-center shadow-xl p-3"
      >
       <div>
        <p>{inp.name}</p>
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
     ))}
   </div>
  </div>
 );
};

export default Home;
