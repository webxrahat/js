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
 //  const SwiperButtonNext = ({ children }) => {
 //   const swiper = useSwiper();
 //   return <button onClick={() => swiper.slideNext()}>{children}</button>;
 //  };
 //  const SwiperButtonPre = ({ children }) => {
 //   const swiper = useSwiper();
 //   return <button onClick={() => swiper.slidePrev()}>{children}</button>;
 //  };
 const SlideRef = useRef();

 const handleNext = () => {
  SlideRef.current.swiper.slideNext();
  // console.log(SlideRef.current.swiper);
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
   <button onClick={handlePrev}>pre</button>
   <button onClick={handleNext}>next</button>
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
    }}
    // navigation={true}
    modules={[Pagination, Autoplay]}
    className="mySwiper"
   >
    {photos.map((photo) => (
     <SwiperSlide className="bg-yellow-200">
      <img src={photo.img} alt="1" className="w-full h-[600px] object-cover" />
     </SwiperSlide>
    ))}
   </Swiper>
  </>
 );
}
