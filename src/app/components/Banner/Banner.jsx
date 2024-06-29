import { Nunito_Sans } from "next/font/google";

import Image from "next/image";
import React from "react";
const nunito_Sans = Nunito_Sans({ subsets: ["latin"] });
const Banner = () => {
  return (
    <div
      className={
        nunito_Sans.className +
        " pt-9 flex items-center flex-col-reverse inline-block md:flex md:flex-row justify-between "
      }
    >
      {/* Banner Image  */}
      <div className="flex flex-col items-center sm:justify-center md:justify-start md:items-baseline sm:items-center">
        <button className=" flex justify-center sm:justify-center md:justify-start text-center items-center gap-4 p-buttonPadding font-bold text-sm text-pinkShade rounded-buttonRadius bg-red-200">
          Explore the world
          <Image
            src="/assets/images/explore-the-world.svg"
            width={24}
            height={24}
            alt="Explore the world"
            className=" inline-block"
          />
        </button>
        <h1 className="lg:text-bannerText  text-center sm:text-center md:text-left md:text-[52px] text-mobileBannerText font-bold leading-mobileBannerText  md:leading-[60px] lg:leading-bannerText pt-11">
          Travel{" "}
          <span className="text-pinkShade">
            top <br className="" /> destination
          </span>
          <br className="hidden md:block" /> of the world
        </h1>
        <p className="pt-7 text-gray-300 text-lg font-normal text-center sm:text-center md:text-left">
          We always make our customer happy by providing{" "}
          <br className="hidden sm:block" /> as many choices as possible
        </p>
        <div className="flex gap-4 pt-7 justify-center sm:justify-start">
          <button className="p-buttonPadding bg-blueShade rounded-buttonRadius text-white font-bold text-sm">
            Get Started
          </button>
          <button className="flex font-bold text-sm items-center gap-2 border border-buttonWhite rounded-buttonRadius p-buttonPadding">
            <Image
              src="assets/images/watch-demo.svg"
              width={24}
              height={24}
              alt="watch-demo-icon"
            />
            Watch Demo
          </button>
        </div>
      </div>
      <Image
        className=" inline-block w-80 md:w-7/12 sm:w-1/2"
        width={100}
        height={100}
        src="/assets/images/banner-image.svg"
        alt="banner-image"
      />
      {/* Banner Image Ends  */}
    </div>
  );
};

export default Banner;
