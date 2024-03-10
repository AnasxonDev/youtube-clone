import { HomeIcon, ShortsIcon, SubscriptionsIcon, YouIcon } from "./icons";

const SideBar = () => {
  const buttonStyles =
    "rounded-lg flex flex-col gap-[5px] justify-center items-center w-[65px] h-[75px] hover:bg-[hsl(0,0%,90%)]";
  return (
    <div className="hidden h-full w-[75px] select-none flex-col items-center pt-1 md:flex">
      <div className={buttonStyles}>
        <HomeIcon color="black" />
        <h1 className="font-roboto text-[10px]">Home</h1>
      </div>
      <div className={buttonStyles}>
        <ShortsIcon color="black" />
        <h1 className="font-roboto text-[10px]">Shorts</h1>
      </div>
      <div className={buttonStyles}>
        <SubscriptionsIcon color="black" />
        <h1 className="font-roboto text-[10px]">Subscriptions</h1>
      </div>
      <div className={buttonStyles}>
        <YouIcon color="black" />
        <h1 className="font-roboto text-[10px]">You</h1>
      </div>
    </div>
  );
};

export default SideBar;
