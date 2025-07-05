import { useNavStore } from "../store/navStore";
import { useThemeStore } from "../store/themeStore";
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

const Nav = () => {
  const { isOpen, toggleNav, closeNav } = useNavStore();
  const { isDark, toggleTheme } = useThemeStore();

  const navButtons = [
    {
      icon: <RxPerson className="text-2xl" />,
      label: "Home",
    },
    {
      icon: <RxCode className="text-2xl" />,
      label: "Projects",
    },
    {
      icon: <FiTool className="text-2xl" />,
      label: "Tools",
    },
    {
      icon: <RxInfoCircled className="text-2xl" />,
      label: "About",
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="bg-retroBlue text-text-dark dark:text-text-light font-retro dark:bg-retroBrown w- fixed top-20 left-0 z-10 hidden flex-col items-center space-y-6 rounded-r-sm p-4 text-xs lg:flex">
        <button onClick={toggleNav} className="">
          {isOpen ? (
            <HiArrowLeftEndOnRectangle className="text-2xl" />
          ) : (
            <HiArrowRightStartOnRectangle className="text-2xl" />
          )}
        </button>
        {navButtons.map((button, index) => (
          <p
            key={index}
            className="hover:bg-base-light dark:hover:bg-base-dark flex w-full items-center space-x-2 rounded-xl px-2.5 py-1.5"
          >
            {button.icon}
            <span>{isOpen && button.label}</span>
          </p>
        ))}
        <button onClick={toggleTheme} className="hover:opacity-50">
          {isDark ? (
            <HiOutlineMoon className="text-2xl" />
          ) : (
            <HiOutlineSun className="text-3xl" />
          )}
        </button>
      </nav>

      {/* Mobile Navbar */}
      <button
        onClick={toggleNav}
        className="bg-tranparent border-retroBlue dark:border-retroBrown dark:text-retroBrown text-retroBlue fixed top-4 right-4 z-50 rounded-full border-2 p-2 lg:hidden"
      >
        {isOpen ? (
          <HiOutlineXMark className="text-2xl" />
        ) : (
          <HiBars3 className="text-2xl" />
        )}
      </button>
      {isOpen && (
        <div
          className="bg-retroBlue dark:bg-retroBrown font-retro text-text-dark dark:text-text-light fixed top-16 right-4 z-40 flex h-60 flex-col space-y-4 rounded-lg p-8 text-xs lg:hidden"
          onClick={closeNav}
        >
          {navButtons.map((button, index) => (
            <p key={index} className="flex w-full items-center space-x-2">
              {button.icon}
              <span>{isOpen && button.label}</span>
            </p>
          ))}
          <button onClick={toggleTheme} className="">
            {isDark ? (
              <HiOutlineMoon className="text-2xl" />
            ) : (
              <HiOutlineSun className="text-3xl" />
            )}
          </button>
        </div>
      )}
    </>
  );
};
export default Nav;
