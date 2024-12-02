import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper/modules";

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
    pagination={true}
    modules={[EffectCube, Pagination]}
    className="mySwiper"
   >
    <SwiperSlide>
     <img
      src="https://swiperjs.com/demos/images/nature-1.jpg"
      className="w-full h-[300px]"
     />
    </SwiperSlide>
    <SwiperSlide>
     <img
      src="https://swiperjs.com/demos/images/nature-2.jpg"
      className="w-full h-[300px] "
     />
    </SwiperSlide>
    <SwiperSlide>
     <img
      src="https://swiperjs.com/demos/images/nature-3.jpg"
      className="w-full h-[300px] "
     />
    </SwiperSlide>
    <SwiperSlide>
     <img
      src="https://swiperjs.com/demos/images/nature-4.jpg"
      className="w-full h-[300px] "
     />
    </SwiperSlide>
   </Swiper>
  </>
 );
};

export default CubeSlide;
