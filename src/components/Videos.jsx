import { useEffect, useState } from "react";
import { API_KEY } from "../data";
import VideoCard from "./VideoCard";
import CardSkeleton from "./CardSkeleton";

const Videos = ({ category, isOpen, isLoading, setIsLoading }) => {
  const [videos, setVideos] = useState([]);
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

  const breakpoints = {
    xsm: 3,
    sm: 6,
    md: 9,
    xl: 12,
  };

  const calculateCardsPerRow = () => {
    const width = window.innerWidth;
    if (width >= 1300) {
      return breakpoints.xl;
    } else if (width >= 1100) {
      return breakpoints.md;
    } else if (width >= 800) {
      return breakpoints.sm;
    } else {
      return breakpoints.xsm;
    }
  };

  const cards = calculateCardsPerRow();

  return (
    <div
      className={`grid ${isOpen ? "md:grid-cols-3" : "xl:grid-cols-4"} place-items-center gap-x-4 gap-y-[40px] overflow-auto p-4 sm:grid-cols-2 md:grid-cols-3`}
    >
      {isLoading ? (
        <CardSkeleton cards={cards} />
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
