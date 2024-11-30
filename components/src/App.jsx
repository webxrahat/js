import "./App.css";
import Slider from "./components/Slider";

export default function App() {
 return (
  <div className="flex justify-center align-middle items-center h-[70vh] w-full">
   <div className="max-w-6xl bg-slate-200 mx-auto w-full h-[50vh]">
    <Slider />
   </div>
  </div>
 );
}
