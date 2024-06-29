import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 pt-[128px]">
      <div className="pb-4">
        <a href="#" className=" font-black text-2xl flex items-center">
          <Image
            src="/assets/images/travlog-logo.svg"
            width={40}
            height={40}
            className=" inline-block  pr-2"
            alt="travel-logo"
          />
          Travelog
        </a>
        <p className="pt-8 text-[18px] lg:text-[18px] lg:text-[23px] text-[#8B8B91] font-black ">
          Contrary to popular <br className=" hidden sm:block" /> belief, Lorem
          Ipsum is <br className=" hidden sm:block" /> not simply random text.
          <br className=" hidden sm:block" /> It has roots{" "}
          <br className=" hidden sm:block" /> in a piece of classical{" "}
          <br className=" hidden sm:block" /> Latin literature from 45{" "}
          <br className=" hidden sm:block" /> BC.
        </p>
        <div className="flex gap-8 pt-8 sm:pt-16">
          <a href="#">
            <Image
              src="/assets/images/facebook.svg"
              width={32}
              height={32}
              alt="facebook"
            />
          </a>
          <a href="#">
            <Image
              src="/assets/images/twitter.svg"
              width={32}
              height={32}
              alt="twitter"
            />
          </a>
          <a href="#">
            <Image
              src="/assets/images/insta.svg"
              width={32}
              height={32}
              alt="instagram"
            />
          </a>
        </div>
      </div>
      <div className=" pb-4 md:pt-0 sm:pl-[4rem]">
        <ul>
          <li className="text-[18px] lg:text-[23px] font-bold">Company</li>
          <li className="pt-5 sm:pt-8 text-sm sm:text-lg">
            <a href="#">About</a>
          </li>
          <li className="pt-5 sm:pt-8 text-sm sm:text-lg">
            <a href="#">Career</a>
          </li>
          <li className="pt-5 sm:pt-8 text-sm sm:text-lg">
            <a href="#">Mobile</a>
          </li>
        </ul>
      </div>
      <div className=" pb-4 md:pt-0 sm:pl-[1rem]">
        <ul>
          <li className="text-[18px] lg:text-[23px] font-bold">Contact</li>
          <li className="pt-5 sm:pt-8 text-sm sm:text-lg">
            <a href="#">Why Travlog</a>
          </li>
          <li className="pt-5 sm:pt-8 text-sm sm:text-lg">
            <a href="#">Partner with us</a>
          </li>
          <li className="pt-5 sm:pt-8 text-sm sm:text-lg">
            <a href="#">FAQ's</a>
          </li>
          <li className="pt-5 sm:pt-8 text-sm sm:text-lg">
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="  pb-4 md:pt-0">
        <ul>
          <li className="text-[18px] lg:text-[23px] font-bold">Meet Us</li>
          <li className="pt-5 sm:pt-8 text-sm sm:text-lg">
            <a href="#">+00 92 1234 56789</a>
          </li>
          <li className="pt-5 sm:pt-8 text-sm sm:text-lg">
            <a href="mailto:info@travlog.com">info@travlog.com</a>
          </li>
          <li className="pt-5 sm:pt-8 text-sm sm:text-lg">
            <a href="#">
              205. R Street, New York <br /> BD23200
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
