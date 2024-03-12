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
} from "./icons";
import Feedback from "./icons/Feedback";

const SideBar = ({ isOpen }) => {
  const closed =
    "text-[10px] rounded-lg flex flex-col gap-[5px] justify-center items-center w-[65px] h-[75px] hover:bg-[hsl(0,0%,90%)]";

  const opened =
    "pl-[10.5px] rounded-lg text-[14px] flex gap-[20px] items-center h-[40px] w-[200px] hover:bg-[hsl(0,0%,90%)]";

  return (
    <div
      className={`font-roboto hidden h-full flex-shrink-0 overflow-auto ${isOpen ? "w-[230px] pt-[11.5px]" : "w-[75px] pt-1"} flex-col items-center sm:flex`}
    >
      <div className={`${isOpen ? opened : closed}`}>
        <HomeIcon color="black" />
        <h1>Home</h1>
      </div>
      <div className={`${isOpen ? opened : closed}`}>
        <ShortsIcon color="black" />
        <h1>Shorts</h1>
      </div>
      <div className={`${isOpen ? opened : closed}`}>
        <SubscriptionsIcon color="black" />
        <h1>Subscriptions</h1>
      </div>
      {isOpen && <hr className="my-3 ml-[16px] w-[90%] text-black" />}
      <div
        className={`${isOpen ? "font-roboto inline-flex h-[40px] w-[200px] items-center gap-[5px] rounded-lg pl-[10.5px] text-[15px] font-medium hover:bg-[hsl(0,0%,90%)]" : closed}`}
      >
        {!isOpen && <YouIcon color="black" />}
        <h1>You</h1>
        {isOpen && <RightArrow color="black" size={20} />}
      </div>
      {isOpen && (
        <>
          <div className={opened}>
            <YourChannel color="black" />
            <h1>Your channel</h1>
          </div>
          <div className={opened}>
            <History color="black" />
            <h1>History</h1>
          </div>
          <div className={opened}>
            <YourVideos color="black" />
            <h1>Your videos</h1>
          </div>
          <div className={opened}>
            <WatchLater color="black" />
            <h1>Watch later</h1>
          </div>
          <div className={opened}>
            <YourClips color="black" />
            <h1>Your clips</h1>
          </div>
          <div className={opened}>
            <LikedVideos color="black" />
            <h1>Liked videos</h1>
          </div>
          <hr className="my-3 ml-[16px] w-[90%] text-black" />
          <div className={opened}>
            <Settings color="black" />
            <h1>Settings</h1>
          </div>
          <div className={opened}>
            <Report color="black" />
            <h1>Report History</h1>
          </div>
          <div className={opened}>
            <Help color="black" />
            <h1>Help</h1>
          </div>
          <div className={opened}>
            <Feedback color="black" />
            <h1>Send feedback</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
