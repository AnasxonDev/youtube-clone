import { useState, useRef, useEffect } from "react";
import { Bars, Search, Bell, Create, MicroPhone, ArrowBack } from "./icons";
import { Link } from "react-router-dom";

const NavBar = ({ isOpen, setIsOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
    <nav className="flex h-[8vh] items-center justify-between px-4">
      {isFull ? (
        <>
          {/* left */}
          <button
            onClick={() => setIsFull(false)}
            className="mr-10 rounded-full p-2 hover:bg-[hsl(0,0%,90%)]"
          >
            <ArrowBack color="black" />
          </button>
          {/* center */}
          <form className="flex flex-grow justify-center gap-1">
            <div className="flex max-w-[600px] flex-grow">
              <div
                className={`flex size-full items-center rounded-l-full border border-r-0 ${isFocused ? "border-blue-500" : "border-[#CCCCCC]"} shadow-inner shadow-[#e5e5e5]`}
              >
                <div className={`${isFocused ? "" : "hidden"} py-1 pl-4`}>
                  <Search color="black" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search"
                  className="font-roboto text-md size-full rounded-l-full px-4 py-1 outline-none"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </div>
              <button className="rounded-r-full border border-[#CCCCCC] bg-[#F8F8F8] px-5 hover:bg-[#F0F0F0]">
                <Search color="black" />
              </button>
            </div>
            <button className="flex-none rounded-full p-3 hover:bg-[hsl(0,0%,90%)]">
              <MicroPhone color="black" />
            </button>
          </form>
        </>
      ) : (
        <>
          {/* left */}
          <div className="flex h-full items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)]"
            >
              <Bars color="black" />
            </button>
            <Link to="/" className="flex h-full items-center">
              <div className="flex select-none items-center gap-1">
                <img src="/youtube.ico" alt="Icon" className="w-7" />
                <h1 className="font-roboto font-bold">YouTube</h1>
              </div>
            </Link>
          </div>
          {/* center */}
          <form className="2xsm:flex ml-[80px] mr-[80px] hidden flex-grow justify-center gap-4">
            <div className="flex max-w-[600px] flex-grow">
              <div
                className={`flex size-full items-center rounded-l-full border border-r-0 ${isFocused ? "border-blue-500" : "border-[#CCCCCC]"} shadow-inner shadow-[#e5e5e5]`}
              >
                <div className={`${isFocused ? "" : "hidden"} py-1 pl-4`}>
                  <Search color="black" size="20" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="font-roboto text-md size-full rounded-l-full px-4 py-1 outline-none"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </div>
              <button className="rounded-r-full border border-[#CCCCCC] bg-[#F8F8F8] px-5 hover:bg-[#F0F0F0]">
                <Search color="black" />
              </button>
            </div>
            <button
              type="button"
              className="rounded-full bg-[#F2F2F2] p-3 hover:bg-[#D9D9D9]"
            >
              <MicroPhone color="black" />
            </button>
          </form>
          {/* right */}
          <div className="h-full">
            {isLoggedIn ? (
              <div className="2xsm:gap-3 flex size-full items-center">
                <button
                  onClick={() => {
                    setIsFull(true);
                    setIsFocused(true);
                  }}
                  className="2xsm:hidden block rounded-full p-2 hover:bg-[hsl(0,0%,90%)]"
                >
                  <Search color="black" />
                </button>
                <button className="2xsm:hidden block rounded-full p-2 hover:bg-[hsl(0,0%,90%)]">
                  <MicroPhone color="black" />
                </button>
                <button className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)]">
                  <Create color="black" />
                </button>
                <button className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)]">
                  <Bell color="black" />
                </button>
                <button className="w-[60px] cursor-auto p-2">
                  <img
                    src="/profile.png"
                    alt="profile"
                    className="size-[35px] cursor-pointer rounded-full object-cover"
                  />
                </button>
              </div>
            ) : (
              <div>login</div>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
