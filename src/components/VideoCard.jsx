const VideoCard = ({ thumbnail, title, channelName, views, time }) => {
  return (
    <div className="size-full">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="w-full rounded-lg object-cover"
      />
      <h1>{title}</h1>
      <h1>{channelName}</h1>
      <h1>
        {views} &bull; {time}
      </h1>
    </div>
  );
};

export default VideoCard;
