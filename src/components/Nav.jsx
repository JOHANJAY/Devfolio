import { useNavStore } from "../store/navStore";
import { useThemeStore } from "../store/themeStore";
import { Link as ScrollLink } from "react-scroll";
import {
  HiArrowRightStartOnRectangle,
  HiArrowLeftEndOnRectangle,
  HiBars3,
  HiOutlineXMark,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi2";
import { RxPerson, RxCode, RxInfoCircled } from "react-icons/rx";
import { FiTool } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const { isOpen, toggleNav } = useNavStore();
  const { isDark, toggleTheme } = useThemeStore();

  const navLinks = [
    {
      icon: <RxPerson className="text-2xl" />,
      label: "Home",
      to: "hero",
    },
    {
      icon: <RxCode className="text-2xl" />,
      label: "Projects",
      to: "projects",
    },
    {
      icon: <FiTool className="text-2xl" />,
      label: "Tools",
      to: "/Tools",
    },
    {
      icon: <RxInfoCircled className="text-2xl" />,
      label: "About",
      to: "/About",
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className={`bg-retroBlue text-text-dark dark:text-text-light font-body dark:bg-retroBlue-2 fixed top-20 left-0 z-10 hidden flex-col items-center space-y-6 rounded-r-2xl py-4 lg:flex`}
      >
        <button onClick={toggleNav} className="">
          {isOpen ? (
            <HiArrowLeftEndOnRectangle className="text-2xl" />
          ) : (
            <HiArrowRightStartOnRectangle className="text-2xl" />
          )}
        </button>
        {navLinks.map((link, index) => (
          <ScrollLink
            to={link.to}
            key={index}
            smooth={true}
            duration={500}
            offset={-20}
            className="hover:bg-base-light dark:hover:bg-base-dark flex w-full items-center space-x-2 rounded-xl px-2.5 py-1.5"
            activeClass="font-bold"
            spy={true}
          >
            {link.icon}
            <span>{isOpen && link.label}</span>
          </ScrollLink>
        ))}
        <div
          onClick={toggleTheme}
          className={`bg-base-light dark:bg-base-dark relative flex items-center gap-4 ${isOpen ? "w-20 flex-row" : ""} rounded-xl px-1 py-1.5 transition-all duration-300`}
        >
          <div
            className={`bg-retroBlue dark:bg-retroBlue-2 ${isOpen ? "" : "hidden"} absolute top-1/2 left-2 flex h-5 w-5 -translate-y-1/2 transform items-center justify-center transition-all duration-300 ${isDark ? "translate-x-12" : "-translate-x-1"} rounded-full`}
          ></div>
          <div
            className={`bg-retroBlue dark:bg-retroBlue-2 ${isOpen ? "hidden" : ""} absolute top-1/2 left-2 flex h-5 w-5 -translate-x-1 transform items-center justify-center transition-all duration-300 ${isDark ? "translate-y-2" : "-translate-y-7"} rounded-full`}
          ></div>
          <div
            className={`flex w-full items-center ${isOpen ? "flex-row justify-between" : "flex-col gap-4"} `}
          >
            <HiOutlineSun className="text-xl" />
            <HiOutlineMoon className="text-lg" />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <button
        onClick={toggleNav}
        className="bg-tranparent border-retroBlue dark:border-retroBlue-2 dark:text-retroBlue-2 text-retroBlue fixed top-3 right-4 z-50 rounded-full border-2 p-2 lg:hidden"
      >
        {isOpen ? (
          <HiOutlineXMark className="text-2xl" />
        ) : (
          <HiBars3 className="text-2xl" />
        )}
      </button>
      {isOpen && (
        <div className="bg-retroBlue dark:bg-retroBlue-2 font-body text-text-dark dark:text-text-light fixed top-16 right-4 z-40 flex h-56 flex-col space-y-4 rounded-2xl p-4 lg:hidden">
          {navLinks.map((link, index) => (
            <ScrollLink
              to={link.to}
              key={index}
              smooth={true}
              duration={500}
              offset={-20}
              className="hover:bg-base-light dark:hover:bg-base-dark flex w-full items-center space-x-2 rounded-xl px-2.5 py-1.5"
              activeClass="font-bold"
              spy={true}
            >
              {link.icon}
              <span>{isOpen && link.label}</span>
            </ScrollLink>
          ))}
          <div
            onClick={toggleTheme}
            className={`bg-base-light dark:bg-base-dark relative flex items-center gap-4 ${isOpen ? "w-20 flex-row" : "h-16 flex-col"} rounded-xl px-1 py-1.5 transition-all duration-300`}
          >
            <div
              className={`bg-retroBlue dark:bg-retroBlue-2 ${isOpen ? "" : "hidden"} absolute top-1/2 left-2 flex h-5 w-5 -translate-y-1/2 transform items-center justify-center transition-all duration-300 ${isDark ? "translate-x-12" : "-translate-x-1"} rounded-full`}
            ></div>
            <div
              className={`flex w-full items-center ${isOpen ? "flex-row justify-between" : "flex-col gap-4"} `}
            >
              <HiOutlineSun className="text-xl" />
              <HiOutlineMoon className="text-lg" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Nav;
