import React from "react";
import { useState } from "react";
import { routes } from "@/app/routes";
import Image from "next/image";

const DesktopNav = () => {
  // Login/SignUp
  const tabsData = [
    {
      label: "Log In",
      content: "#login",
    },
    {
      label: "Sign Up",
      content: "#SignUp",
    },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(1);
  return (
    <div className="flex justify-between items-center w-full">
      {/* Logo */}
      <a href="#" className=" font-black text-2xl flex align-middle">
        <Image
          src="/assets/images/travlog-logo.svg"
          width={40}
          height={40}
          className=" inline-block  pr-2"
        />
        Travelog
      </a>
      {/* Logo */}
      {/* Navlinks */}

      <ul className="hidden lg:flex lg:items-center gap-16 ">
        {routes.map((route) => {
          const { href, title } = route;
          return (
            <li>
              <a
                href={href}
                className="flex items-center text-black gap-5 hover:text-neutral-400 transition-all"
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      {/* Navlinks */}

      {/* Login/SignUps */}
      <div className="hidden lg:flex lg:items-center gap-5 ">
        <div className="flex">
          {/* Loop through tab data and render button for each. */}
          {tabsData.map((tab, idx) => {
            return (
              <a
                href={tab.content}
                key={idx}
                className={` m-0 p-buttonPadding transition-colors duration-300 rounded-buttonRadius  ${
                  idx === activeTabIndex
                    ? " bg-blueShade text-buttonWhite"
                    : "border-transparent hover:border-gray-200"
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </a>
            );
          })}
        </div>
      </div>
      {/* Login/SignUps */}
    </div>
  );
};

export default DesktopNav;
