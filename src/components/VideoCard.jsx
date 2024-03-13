import moment from "moment";
import { valueConverter } from "../data";

const VideoCard = ({
  thumbnail,
  title,
  channelName,
  views,
  time,
  isDarkmode,
}) => {
  return (
    <div className={`${isDarkmode ? "dark" : ""} size-full`}>
      <div className="font-roboto m-auto size-full max-w-[500px] cursor-pointer">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="mb-2 w-full transform rounded-xl duration-200 hover:rounded-none"
        />
        <h1 className="max-h-[50px] truncate text-wrap text-[16px] font-semibold">
          {title}
        </h1>
        <h1 className="dark:text-[#A0A0A0]">{channelName}</h1>
        <h1 className="dark:text-[#A0A0A0]">
          {valueConverter(views)} views &bull;&nbsp;
          {moment(time).fromNow()}
        </h1>
      </div>
    </div>
  );
};

export default VideoCard;
