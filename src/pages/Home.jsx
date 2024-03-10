/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Categories, SideBar, Videos } from "../components";

const Home = () => {
  const [category, setCategory] = useState(0);
  return (
    <div className="flex h-[92vh] w-screen">
      <SideBar />
      <div className="w-full md:w-sidebarwidth">
        <div className="flex h-full flex-col">
          <Categories setCategory={setCategory} className="flex-grow" />
          <Videos category={category} />
        </div>
      </div>
    </div>
  );
};

export default Home;
