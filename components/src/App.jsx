import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "./components/Slider";
import CubeSlide from "./components/CubeSlide";

export default function App() {
 return (
  <div>
   <div className="h-[70vh] w-full">
    <div className="max-w-6xl bg-slate-200 mx-auto w-full h-[50vh]">
     <Slider />
    </div>
   </div>

   <div className="max-w-sm mx-auto my-20">
    <CubeSlide />
   </div>
  </div>
 );
}
