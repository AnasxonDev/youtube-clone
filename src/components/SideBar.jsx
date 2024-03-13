import { useEffect } from "react";
import {
  HomeIcon,
  RightArrow,
  ShortsIcon,
  SubscriptionsIcon,
  YouIcon,
  YourChannel,
  History,
  YourVideos,
  WatchLater,
  YourClips,
  LikedVideos,
  Settings,
  Report,
  Help,
  Feedback,
} from "./icons";

const SideBar = ({ isOpen, setIsOpen, isDarkMode }) => {
  useEffect(() => {
    function handleClose() {
      if (window.innerWidth <= 1300) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleClose);

    return () => {
      window.removeEventListener("resize", handleClose);
    };
  }, []);
  const closed =
    "text-[10px] cursor-pointer rounded-lg flex flex-col gap-[5px] justify-center items-center w-[65px] h-[75px] hover:bg-[hsl(0,0%,90%)]";

  const opened =
    "pl-[10.5px] cursor-pointer rounded-lg text-[14px] flex gap-[20px] items-center h-[40px] w-[200px] hover:bg-[hsl(0,0%,90%)]";

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div
        className={`font-roboto hidden h-full flex-shrink-0 overflow-auto dark:bg-[#0F0F0F] dark:text-white ${isOpen ? "w-[230px] pt-[11.5px]" : "w-[75px] pt-1"} flex-col items-center sm:flex`}
      >
        <div className={`${isOpen ? opened : closed}`}>
          <HomeIcon color={isDarkMode ? "white" : "black"} />
          <h1>Home</h1>
        </div>
        <div className={`${isOpen ? opened : closed}`}>
          <ShortsIcon color={isDarkMode ? "white" : "black"} />
          <h1>Shorts</h1>
        </div>
        <div className={`${isOpen ? opened : closed}`}>
          <SubscriptionsIcon color={isDarkMode ? "white" : "black"} />
          <h1>Subscriptions</h1>
        </div>
        {isOpen && <hr className="my-3 ml-[16px] w-[90%] text-black" />}
        <div
          className={`${isOpen ? "font-roboto inline-flex h-[40px] w-[200px] items-center gap-[5px] rounded-lg pl-[10.5px] text-[15px] font-medium hover:bg-[hsl(0,0%,90%)]" : closed}`}
        >
          {!isOpen && <YouIcon color={isDarkMode ? "white" : "black"} />}
          <h1>You</h1>
          {isOpen && (
            <RightArrow color={isDarkMode ? "white" : "black"} size={20} />
          )}
        </div>
        {isOpen && (
          <>
            <div className={opened}>
              <YourChannel color={isDarkMode ? "white" : "black"} />
              <h1>Your channel</h1>
            </div>
            <div className={opened}>
              <History color={isDarkMode ? "white" : "black"} />
              <h1>History</h1>
            </div>
            <div className={opened}>
              <YourVideos color={isDarkMode ? "white" : "black"} />
              <h1>Your videos</h1>
            </div>
            <div className={opened}>
              <WatchLater color={isDarkMode ? "white" : "black"} />
              <h1>Watch later</h1>
            </div>
            <div className={opened}>
              <YourClips color={isDarkMode ? "white" : "black"} />
              <h1>Your clips</h1>
            </div>
            <div className={opened}>
              <LikedVideos color={isDarkMode ? "white" : "black"} />
              <h1>Liked videos</h1>
            </div>
            <hr className="my-3 ml-[16px] w-[90%] text-black" />
            <div className={opened}>
              <Settings color={isDarkMode ? "white" : "black"} />
              <h1>Settings</h1>
            </div>
            <div className={opened}>
              <Report color={isDarkMode ? "white" : "black"} />
              <h1>Report History</h1>
            </div>
            <div className={opened}>
              <Help color={isDarkMode ? "white" : "black"} />
              <h1>Help</h1>
            </div>
            <div className={opened}>
              <Feedback color={isDarkMode ? "white" : "black"} />
              <h1>Send feedback</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
