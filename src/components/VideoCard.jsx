import moment from "moment";
import { valueConverter } from "../data";

const VideoCard = ({ thumbnail, title, channelName, views, time }) => {
  return (
    <div className="font-roboto size-full max-w-[500px]">
      <img
        src={thumbnail}
        alt="thumbnail"
        className={`mb-2 w-full transform rounded-xl duration-200 hover:rounded-none`}
      />
      <h1 className="max-h-[50px] truncate text-wrap text-[16px] font-semibold">
        {title}
      </h1>
      <h1>{channelName}</h1>
      <h1>
        {valueConverter(views)} views &bull;&nbsp;
        {moment(time).fromNow()}
      </h1>
    </div>
  );
};

export default VideoCard;
