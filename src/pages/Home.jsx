import { useState } from "react";
import { Categories, SideBar, Videos } from "../components";

const Home = ({ isOpen }) => {
  const [category, setCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex h-[92vh] w-screen">
      <SideBar isOpen={isOpen} />
      <div
        className={`w-full ${isOpen ? "sm:w-opensidebarwidth" : "sm:w-closesidebarwidth"} relative`}
      >
        {isLoading && <div className="absolute inset-0 bg-white opacity-50" />}
        <div className="flex h-full flex-col">
          <Categories category={category} setCategory={setCategory} />
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
