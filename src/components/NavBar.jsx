import { useState, useRef, useEffect } from "react";
import {
  Bars,
  Search,
  Bell,
  Create,
  MicroPhone,
  ArrowBack,
  AppearanceIcon,
} from "./icons";
import { Link } from "react-router-dom";

const NavBar = ({
  isOpen,
  setIsOpen,
  setIsSecondOpen,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [menu, setMenu] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 700) {
        setIsFull(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isFull && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFull]);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <nav className="flex h-[8vh] items-center justify-between px-4 dark:bg-[#0F0F0F] dark:text-white">
        {menu && (
          <div
            onClick={() => setMenu(false)}
            className="fixed inset-0 z-[11]"
          />
        )}
        {isFull ? (
          <>
            {/* left */}
            <button
              onClick={() => setIsFull(false)}
              className="mr-10 rounded-full p-2 hover:bg-[hsl(0,0%,90%)] dark:hover:bg-[#272727]"
            >
              <ArrowBack color={`${isDarkMode ? "white" : "black"}`} />
            </button>
            {/* center */}
            <form className="flex flex-grow justify-center gap-1">
              <div className="flex max-w-[600px] flex-grow">
                <div
                  className={`flex size-full items-center rounded-l-full border ${isFocused ? "border-blue-500" : "border-[#CCCCCC] dark:border-[#303030]"} shadow-inner shadow-[#e5e5e5] dark:shadow-[#222222]`}
                >
                  <div className={`${isFocused ? "" : "hidden"} py-1 pl-4`}>
                    <Search color={`${isDarkMode ? "white" : "black"}`} />
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search"
                    className="font-roboto text-md size-full rounded-l-full px-4 py-1 outline-none dark:bg-[#121212]"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </div>
                <button className="rounded-r-full border border-[#CCCCCC] bg-[#F8F8F8] px-5 hover:bg-[#F0F0F0] dark:border-[#303030] dark:bg-[#222222]">
                  <Search color={`${isDarkMode ? "white" : "black"}`} />
                </button>
              </div>
              <button
                type="button"
                className="flex-none rounded-full p-3 hover:bg-[hsl(0,0%,90%)] dark:hover:bg-[#3E3E3E]"
              >
                <MicroPhone color={`${isDarkMode ? "white" : "black"}`} />
              </button>
            </form>
          </>
        ) : (
          <>
            {/* left */}
            <div className="flex h-full items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hidden rounded-full p-2 hover:bg-[hsl(0,0%,90%)] dark:hover:bg-[#272727] xl:block"
              >
                <Bars color={`${isDarkMode ? "white" : "black"}`} />
              </button>
              <button
                onClick={() => setIsSecondOpen(true)}
                className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)] dark:hover:bg-[#272727] xl:hidden"
              >
                <Bars color={`${isDarkMode ? "white" : "black"}`} />
              </button>
              <Link to="/" className="flex h-full items-center">
                <div className="flex select-none items-center gap-1">
                  <img src="/youtube.ico" alt="Icon" className="w-7" />
                  <h1 className="font-roboto font-bold">YouTube</h1>
                </div>
              </Link>
            </div>
            {/* center */}
            <form className="ml-[80px] mr-[80px] hidden flex-grow justify-center gap-4 2xsm:flex">
              <div className="flex max-w-[600px] flex-grow">
                <div
                  className={`flex size-full items-center rounded-l-full border ${isFocused ? "border-blue-500" : "border-[#CCCCCC] dark:border-[#303030]"} shadow-inner shadow-[#e5e5e5] dark:shadow-[#222222]`}
                >
                  <div className={`${isFocused ? "" : "hidden"} py-1 pl-4`}>
                    <Search
                      color={`${isDarkMode ? "white" : "black"}`}
                      size="20"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="font-roboto text-md size-full rounded-l-full px-4 py-1 outline-none dark:bg-[#121212]"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </div>
                <button className="rounded-r-full border border-[#CCCCCC] bg-[#F8F8F8] px-5 hover:bg-[#F0F0F0] dark:border-[#303030] dark:bg-[#222222]">
                  <Search color={`${isDarkMode ? "white" : "black"}`} />
                </button>
              </div>
              <button
                type="button"
                className="rounded-full bg-[#F2F2F2] p-3 hover:bg-[#D9D9D9] dark:bg-[#222222] dark:hover:bg-[#3E3E3E]"
              >
                <MicroPhone color={`${isDarkMode ? "white" : "black"}`} />
              </button>
            </form>
            {/* right */}
            <div className="h-full">
              <div className="flex size-full items-center 2xsm:gap-3">
                <button
                  onClick={() => {
                    setIsFull(true);
                    setIsFocused(true);
                  }}
                  className="block rounded-full p-2 hover:bg-[hsl(0,0%,90%)] dark:hover:bg-[#272727] 2xsm:hidden"
                >
                  <Search color={`${isDarkMode ? "white" : "black"}`} />
                </button>
                <button className="block rounded-full p-2 hover:bg-[hsl(0,0%,90%)] dark:hover:bg-[#3E3E3E] 2xsm:hidden">
                  <MicroPhone color={`${isDarkMode ? "white" : "black"}`} />
                </button>
                <button className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)] dark:hover:bg-[#272727]">
                  <Create color={`${isDarkMode ? "white" : "black"}`} />
                </button>
                <button className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)] dark:hover:bg-[#272727]">
                  <Bell color={`${isDarkMode ? "white" : "black"}`} />
                </button>
                <button className="w-[60px] cursor-auto p-2">
                  <div
                    className={`${menu ? "fixed" : "hidden"} menu-shadow z-[12] w-[300px] -translate-x-[310px] rounded-xl bg-white dark:bg-[#282828]`}
                  >
                    <div className="font-roboto flex gap-4  p-4">
                      <div className="pt-1">
                        <img
                          src="/profile.png"
                          alt="profile image"
                          className="size-[40px] cursor-pointer rounded-full object-cover"
                        />
                      </div>
                      <div className="text-start">
                        <h1>Anasxon Dev</h1>
                        <h1 className="mb-2">@AnasxonDev</h1>
                        <a
                          href="https://youtube.com/@AnasxonDev?si=JGBztzR61dLfyka9"
                          className="text-blue-500"
                        >
                          View your channel
                        </a>
                      </div>
                    </div>
                    <hr
                      color={`${isDarkMode ? "white" : "black"}`}
                      className="mb-3"
                    />
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className="mb-3 flex h-[50px] w-full items-center gap-3 pl-3 hover:bg-[hsl(0,0%,90%)] dark:hover:bg-[#3E3E3E]"
                    >
                      <AppearanceIcon
                        color={`${isDarkMode ? "white" : "black"}`}
                      />
                      <h1 className="text-14px font-roboto">
                        Appearance: {isDarkMode ? "Dark" : "Light"}
                      </h1>
                    </button>
                  </div>
                  <img
                    src="/profile.png"
                    alt="profile"
                    className={`${menu ? "size-[33px]" : "size-[35px]"} m-auto cursor-pointer rounded-full object-cover`}
                    onClick={() => setMenu(!menu)}
                  />
                </button>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
