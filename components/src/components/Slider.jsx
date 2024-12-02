import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slide.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import img1 from "../../photos/img-1.jpg";
import img2 from "../../photos/img-2.jpg";
import img3 from "../../photos/img-3.jpg";

export default function Slider() {
 //  const SwiperButtonNext = ({ children }) => {
 //   const swiper = useSwiper();
 //   return <button onClick={() => swiper.slideNext()}>{children}</button>;
 //  };
 //  const SwiperButtonPre = ({ children }) => {
 //   const swiper = useSwiper();
 //   return <button onClick={() => swiper.slidePrev()}>{children}</button>;
 //  };
 const SlideRef = useRef();
 //  console.log(SlideRef);

 const handleNext = () => {
  SlideRef.current.swiper.slideNext();
 };

 const handlePrev = () => {
  SlideRef.current.swiper.slidePrev();
 };

 const photos = [
  {
   img: img1,
  },
  {
   img: img2,
  },
  {
   img: img3,
  },
 ];

 return (
  <>
   <button
    className="bg-yellow-400 px-5 py-1 rounded-xl m-2"
    onClick={handlePrev}
   >
    pre
   </button>
   <button className="bg-green-400 px-5 py-1 rounded-xl" onClick={handleNext}>
    next
   </button>
   <div></div>
   <Swiper
    navigation={false}
    autoplay={{
     delay: 5000,
     disableOnInteraction: false,
    }}
    ref={SlideRef}
    slidesPerView={1}
    loop={true}
    pagination={{
     clickable: true,
     renderBullet: (index, className) => {
      return `<span class="${className} custom-bullet"></span>`;
     },
    }}
    modules={[Pagination, Autoplay]}
    className="mySwiper"
   >
    {photos.map((photo, index) => (
     <SwiperSlide key={index} className="bg-yellow-200">
      <img src={photo.img} alt="1" className="w-full h-[600px] object-cover" />
     </SwiperSlide>
    ))}
   </Swiper>
  </>
 );
}
