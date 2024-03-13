import { useState } from "react";
import { Categories, SecondSideBar, SideBar, Videos } from "../components";

const Home = ({
  isOpen,
  setIsOpen,
  isSecondOpen,
  setIsSecondOpen,
  isDarkMode,
}) => {
  const [category, setCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex h-[92vh] w-screen">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} isDarkMode={isDarkMode} />
      <SecondSideBar
        isSecondOpen={isSecondOpen}
        setIsSecondOpen={setIsSecondOpen}
        isDarkMode={isDarkMode}
      />
      <div
        onClick={() => setIsSecondOpen(false)}
        className={`fixed inset-0 z-[9] bg-black ${isSecondOpen ? "opacity-50" : "opacity-0"} transition-opacity duration-500 ease-in-out ${isSecondOpen ? "block" : "hidden"}`}
      />

      <div
        className={`w-full ${isOpen ? "sm:w-opensidebarwidth" : "sm:w-closesidebarwidth"} relative`}
      >
        {isLoading && (
          <div
            className={`absolute inset-0 h-[55px] ${isDarkMode ? "bg-black" : "bg-white"} opacity-50`}
          />
        )}
        <div className="flex h-full flex-col">
          <Categories
            category={category}
            setCategory={setCategory}
            isDarkMode={isDarkMode}
          />
          <Videos
            category={category}
            isOpen={isOpen}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
