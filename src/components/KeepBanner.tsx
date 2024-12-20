import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function keepBanner() {
  return (
    <>
      <Swiper className="h-[350px]">
        <SwiperSlide className="h-[500px] bg-red-600">Slide 1</SwiperSlide>
        <SwiperSlide className="h-[500px] bg-red-600">Slide 1</SwiperSlide>
        <SwiperSlide className="h-[500px] bg-red-600">Slide 1</SwiperSlide>
        <SwiperSlide className="h-[500px] bg-red-600">Slide 1</SwiperSlide>
        <SwiperSlide className="h-[500px] bg-red-600">Slide 1</SwiperSlide>
      </Swiper>
    </>
  );
}
