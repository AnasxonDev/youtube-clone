import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bars,
  Feedback,
  Help,
  HomeIcon,
  LikedVideos,
  RightArrow,
  Settings,
  ShortsIcon,
  SubscriptionsIcon,
  WatchLater,
  YourChannel,
  YourClips,
  YourVideos,
  Report,
  History,
} from "./icons";

const SecondSideBar = ({ isSecondOpen, setIsSecondOpen, isDarkMode }) => {
  useEffect(() => {
    function handleClose() {
      if (window.innerWidth >= 1300) {
        setIsSecondOpen(false);
      }
    }

    window.addEventListener("resize", handleClose);

    return () => {
      window.removeEventListener("resize", handleClose);
    };
  }, []);
  const sectionStyles =
    "flex h-[40px] w-[200px] items-center gap-[20px] rounded-lg pl-[10.5px] text-[14px] hover:bg-[hsl(0,0%,90%)]";
  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div
        className={`font-roboto fixed left-0 top-0 z-10 h-full w-[230px] flex-shrink-0 transform flex-col items-center overflow-auto bg-white pt-[11.5px] dark:bg-[#0F0F0F] dark:text-white ${isSecondOpen ? "translate-x-0" : "-translate-x-full"} flex transition duration-200 ease-linear`}
      >
        <div className="mb-[20px] flex h-[40px] w-[200px] items-center gap-[20px] rounded-lg">
          <button
            onClick={() => setIsSecondOpen(false)}
            className="rounded-full p-2"
          >
            <Bars color={isDarkMode ? "white" : "black"} />
          </button>
          <Link to="/" className="flex h-full items-center">
            <div className="flex select-none items-center gap-1">
              <img src="/youtube.ico" alt="Icon" className="w-7" />
              <h1 className="font-roboto font-bold">YouTube</h1>
            </div>
          </Link>
        </div>
        {/* hdiashd */}
        <div className={sectionStyles}>
          <HomeIcon color={isDarkMode ? "white" : "black"} />
          <h1>Home</h1>
        </div>
        <div className={sectionStyles}>
          <ShortsIcon color={isDarkMode ? "white" : "black"} />
          <h1>Shorts</h1>
        </div>
        <div className={sectionStyles}>
          <SubscriptionsIcon color={isDarkMode ? "white" : "black"} />
          <h1>Subscriptions</h1>
        </div>
        <hr className="my-3 ml-[16px] w-[90%] text-black" />
        <div className="font-roboto inline-flex h-[40px] w-[200px] items-center gap-[5px] rounded-lg pl-[10.5px] text-[15px] font-medium hover:bg-[hsl(0,0%,90%)]">
          <h1>You</h1>
          <RightArrow color={isDarkMode ? "white" : "black"} size={20} />
        </div>
        <div className={sectionStyles}>
          <YourChannel color={isDarkMode ? "white" : "black"} />
          <h1>Your channel</h1>
        </div>
        <div className={sectionStyles}>
          <History color={isDarkMode ? "white" : "black"} />
          <h1>History</h1>
        </div>
        <div className={sectionStyles}>
          <YourVideos color={isDarkMode ? "white" : "black"} />
          <h1>Your videos</h1>
        </div>
        <div className={sectionStyles}>
          <WatchLater color={isDarkMode ? "white" : "black"} />
          <h1>Watch later</h1>
        </div>
        <div className={sectionStyles}>
          <YourClips color={isDarkMode ? "white" : "black"} />
          <h1>Your clips</h1>
        </div>
        <div className={sectionStyles}>
          <LikedVideos color={isDarkMode ? "white" : "black"} />
          <h1>Liked videos</h1>
        </div>
        <hr className="my-3 ml-[16px] w-[90%] text-black" />
        <div className={sectionStyles}>
          <Settings color={isDarkMode ? "white" : "black"} />
          <h1>Settings</h1>
        </div>
        <div className={sectionStyles}>
          <Report color={isDarkMode ? "white" : "black"} />
          <h1>Report History</h1>
        </div>
        <div className={sectionStyles}>
          <Help color={isDarkMode ? "white" : "black"} />
          <h1>Help</h1>
        </div>
        <div className={sectionStyles}>
          <Feedback color={isDarkMode ? "white" : "black"} />
          <h1>Send feedback</h1>
        </div>
      </div>
    </div>
  );
};

export default SecondSideBar;
