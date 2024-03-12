import { useState } from "react";
import { Categories, SideBar, Videos } from "../components";

const Home = ({ isOpen }) => {
  const [category, setCategory] = useState(0);
  return (
    <div className="flex h-[92vh] w-screen">
      <SideBar isOpen={isOpen} />
      <div
        className={`w-full ${isOpen ? "sm:w-opensidebarwidth" : "sm:w-closesidebarwidth"}`}
      >
        <div className="flex h-full flex-col">
          <Categories
            category={category}
            setCategory={setCategory}
            className="flex-grow"
          />
          <Videos category={category} isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

export default Home;
