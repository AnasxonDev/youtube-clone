import { useEffect, useState } from "react";
import { API_KEY } from "../data";
import VideoCard from "./VideoCard";
import CardSkeleton from "./CardSkeleton";

const Videos = ({ category, isOpen }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
      const response = await fetch(videoListUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`grid ${isOpen ? "lg:grid-cols-3" : "xl:grid-cols-4"} place-items-center gap-x-4 gap-y-[50px] overflow-auto p-4 xsm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3`}
    >
      {isLoading ? (
        <CardSkeleton cards={8} />
      ) : error ? (
        <div>Error fetching videos: {error}</div>
      ) : (
        <>
          {videos.map((item) => (
            <VideoCard
              key={item.id}
              thumbnail={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              channelName={item.snippet.channelTitle}
              views={item.statistics.viewCount}
              time={item.snippet.publishedAt}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Videos;
