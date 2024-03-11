/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { API_KEY } from "../data";

const Videos = ({ category }) => {
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
    <div className="flex h-full flex-wrap gap-x-4 gap-y-20 overflow-auto p-5">
      {videos.map((video) => (
        <div key={video.id} className="w-[24%]">
          <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.title}
            className="w-full rounded-xl object-cover"
          />
          <div className="flex">
            <div>channel image</div>
            <div>
              <h2>{video.snippet.title}</h2>
              <h2>{video.snippet.channelTitle}</h2>
              <div className="flex">
                <p>Views: {video.statistics.viewCount}</p>
                <p>{video.snippet.publishedAt}</p>
              </div>
            </div>
            <div>dots</div>
            {/* <p>Likes: {video.statistics.likeCount}</p> */}
            {/* <p>{video.snippet.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
