import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <div className="pt-0 lg:pt-[64px] w-[90vw] md:w-[90vw] relative rounded-[32px] pt-8">
      <Image
        src="/assets/images/corner-dots.svg"
        width={183}
        height={176}
        alt="corner-dots"
        className="absolute top-[1px] left-[-3.5%] w-[100px] md:w-[183px]"
      />
      <div className="text-center bg-[#FFFBF1] p-5 lg:py-[64px] lg:px-[128px] rounded-[32px] ">
        <h3 className="text-pinkShade text-[18px] lg:text-[18px] lg:text-[23px] font-bold leading-7 uppercase">
          subscribe to our newsletter
        </h3>
        <h1 className="text-[24px] leading-[28px] lg:text-2xl  md:text-[44px] md:leading-[52px] font-bold pt-2 pb-4 lg:pt-8 lg:pb-16">
          Prepare yourself & let’s explore the
          <br className="hidden sm:block md:hidden xl:block " /> beauty of the
          world
        </h1>
        <div className="flex justify-center p-3 lg:p-8 flex-col lg:flex-row items-center">
          <label
            htmlFor="emailId"
            className="flex flex-col lg:flex-row p-0 pb-4 lg:p-8 relative "
          >
            <div
              className="flex justify-center lg:justify-start lg:rounded-tr-none  lg:pt-0   rounded-tl-3xl rounded-tr-3xl lg:rounded-bl-3xl px-8 pt-6
             bg-white items-center gap-4 text-[18px] lg:text-[18px] lg:text-[23px] font-bold leading-7 "
            >
              <Image
                src="/assets/images/mail.svg"
                width={32}
                height={32}
                alt="Email-Icon"
              />
              <p className=" md:w-[151px] ">Your Email</p>
            </div>
            <input
              type="email"
              name="Email"
              id="emailId"
              className="p-8 lg:rounded-tr-3xl md:w-[50vw] w-[80vw] lg:w-full lg:rounded-bl-none rounded-bl-3xl rounded-br-3xl px-8 text-[18px] lg:text-[23px] font-bold focus-visible:outline-none"
            />
          </label>
          <button className=" p-[16px] lg:p-[32px] text-[18px] lg:text-[18px] lg:text-[23px] font-bold leading-7 text-white bg-blueShade rounded-[20px]">
            Subscribe
          </button>
        </div>
      </div>
      <Image
        src="/assets/images/spiral.svg"
        width={150}
        height={150}
        alt="spiral"
        className=" absolute right-0 lg:bottom-[-34%] bottom-[-30%] w-[80px] lg:w-[150px]"
      />
    </div>
  );
};

export default Newsletter;
