import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function keepBanner() {
  return (
    <>
      <Swiper className="h-[350px]">
        <SwiperSlide className="h-[500px]">
          <img src="public\Banner1.jpg" alt="User Icon" className="" />
        </SwiperSlide>
        <SwiperSlide className="h-[500px]">
          <img src="public\banner2.jpg" alt="User Icon" className="" />
        </SwiperSlide>
        <SwiperSlide className="h-[500px]">
          <img src="public\Banner3.jpg" alt="User Icon" className="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
