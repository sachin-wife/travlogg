"use client";
import { Nunito_Sans } from "next/font/google";
import Sliders from "./Slider";
const nunito_Sans = Nunito_Sans({ subsets: ["latin"] });

const Services = () => {
  return (
    <div
      className={
        nunito_Sans.className +
        " pt-[64px] pt-9 flex items-center flex-col-reverse inline-block md:flex md:flex-row justify-between "
      }
    >
      <div className="w-1/2">
        <h3 className="text-pinkShade text-[18px] lg:text-[23px] text-center md:text-left font-bold leading-7">
          Services
        </h3>
        <h2 className="leading-8 pt-2 text-center md:text-left  text-2xl  md:text-2xl  md:text-[44px] md:leading-[52px] font-bold ">
          Our top value <br className="hidden md:block" /> categories for you
        </h2>
      </div>
      <Sliders />
    </div>
  );
};

export default Services;
