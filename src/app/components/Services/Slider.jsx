"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "../../globals.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
const Slider = () => {
  const sliderCards = [
    {
      id: 1,

      icon: "/assets/images/best-tour-guide.svg",
      cardTitle: "Best Tour Guide",
      cardContent:
        "What looked like a small patch of purple grass, above five feet.",
    },
    {
      id: 2,
      icon: "/assets/images/easy-booking.svg",
      cardTitle: "Easy Booking",
      cardContent: "Square, was moving across the sand in their direction.",
    },
    {
      id: 3,
      icon: "/assets/images/cloudy.svg",
      cardTitle: "Weather Forecast",
      cardContent:
        "What looked like a small patch of purple grass, above five feet.",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={2.4}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 3,
        },
        400: {
          slidesPerView: 3,
        },
        639: {
          slidesPerView: 2.5,
        },
        865: {
          slidesPerView: 2.5,
        },
        1000: {
          slidesPerView: 2.5,
        },
        1500: {
          slidesPerView: 2.5,
        },
        1700: {
          slidesPerView: 2.5,
        },
      }}
      className=" p-7 w-[70%] hidden xl:block"
    >
      {sliderCards.map((slide, idx) => {
        return (
          <SwiperSlide
            key={idx}
            className=" flex flex-col justify-center items-center text-center p-[64px] shadow-lg rounded-[32px]"
          >
            <Image
              src={slide.icon}
              width={64}
              height={64}
              alt={slide.cardTitle}
              className="inline-block"
            />
            <h1 className="font-bold pt-16 pb-8 text-[28px]">
              {slide.cardTitle}
            </h1>
            <p className="text-sm leading-7">{slide.cardContent}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
