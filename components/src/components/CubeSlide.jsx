import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import img1 from "../../photos/img-1.jpg";
import img2 from "../../photos/img-2.jpg";
import img3 from "../../photos/img-3.jpg";

import { EffectCube, Pagination } from "swiper/modules";

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

const CubeSlide = () => {
 return (
  <>
   <Swiper
    effect={"cube"}
    loop={true}
    grabCursor={true}
    cubeEffect={{
     shadow: true,
     slideShadows: true,
     shadowOffset: 20,
     shadowScale: 0.94,
    }}
    pagination={{
     clickable: true,
     bulletActiveClass: "custom-bullet-active",
    }}
    modules={[EffectCube, Pagination]}
    className="mySwiper"
   >
    {photos.map((photo, index) => (
     <SwiperSlide key={index} className="bg-yellow-200">
      <img src={photo.img} alt="1" className="w-full h-[300px] " />
     </SwiperSlide>
    ))}
   </Swiper>
  </>
 );
};

export default CubeSlide;
