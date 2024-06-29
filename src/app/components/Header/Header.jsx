"use client";

import { Nunito_Sans } from "next/font/google";
import NavMobile from "./NavMobile";
import DesktopNav from "./DesktopNav";

const nunito_Sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const Header = () => {
  return (
    <main
      className={
        nunito_Sans.className +
        " flex flex-row-reverse items-center justify-between lg:flex-col"
      }
    >
      <NavMobile />
      <DesktopNav className="w-full" />
    </main>
  );
};

export default Header;
