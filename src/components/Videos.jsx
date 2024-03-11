/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { API_KEY } from "../data";
import VideoCard from "./VideoCard";

const Videos = ({ category, isOpen }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
      const response = await fetch(videoListUrl);
      const data = await response.json();
      setVideos(data.items);
      console.log(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div
      className={`grid ${isOpen ? "lg:grid-cols-3" : "xl:grid-cols-4"} xsm:grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-[50px] overflow-auto p-4 pt-8 lg:grid-cols-3`}
    >
      {videos.map((item, index) => (
        <VideoCard
          key={index}
          thumbnail={item.snippet.thumbnails.medium.url}
          title={item.snippet.title}
          channelName={item.snippet.channelTitle}
          views={item.statistics.viewCount}
          time={item.snippet.publishedAt}
        />
      ))}
    </div>
  );
};

export default Videos;
