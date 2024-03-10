import { Categories, SideBar } from "../components";

const Home = () => {
  return (
    <div className="flex h-[92vh] w-screen">
      <SideBar />
      <div className="md:w-sidebarwidth w-full">
        <div className="flex h-full flex-col">
          <Categories className="flex-grow" />
          <div>videos</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
