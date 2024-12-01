import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import img1 from "../../photos/drone.webp";
import img2 from "../../photos/earpod.jpeg";
import img3 from "../../photos/bluepen.webp";

export default function Slider() {
 const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
 };
 const SwiperButtonPre = ({ children }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>{children}</button>;
 };

 const ref = useRef();
 console.log(ref);

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
   <div></div>
   <Swiper
    autoplay={{
     delay: 2000,
     disableOnInteraction: false,
    }}
    slidesPerView={1}
    loop={true}
    pagination={{
     clickable: true,
    }}
    // navigation={true}
    modules={[Pagination, Autoplay]}
    // className="mySwiper"
   >
    <SwiperButtonNext>Next Slide</SwiperButtonNext>
    <SwiperButtonPre>Pre Slide</SwiperButtonPre>
    {photos.map((photo) => (
     <SwiperSlide className="bg-yellow-200">
      <img src={photo.img} alt="1" className="w-full h-[600px] object-cover" />
     </SwiperSlide>
    ))}
   </Swiper>
  </>
 );
}
