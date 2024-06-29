import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "@/app/routes";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  // Login/SignUp
  const [activeTabIndex, setActiveTabIndex] = useState(1);
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

  useClickAway(ref, () => setOpen(false));
  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] md:top-[4.5rem] p-5 pt-0 bg-white"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl "
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-center w-full p-5 pt-3 pb-0 rounded-xl"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            {/* Login/SignUps */}
            <div className=" lg:flex lg:items-center justify-center gap-5 pt-5 delay-300 duration-700">
              <div className="flex justify-center">
                {/* Loop through tab data and render button for each. */}
                {tabsData.map((tab, idx) => {
                  return (
                    <a
                      href={tab.content}
                      key={idx}
                      className={` m-0 py-4 px-8 transition-colors duration-700 rounded-buttonRadius  ${
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
