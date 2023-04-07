import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

const Videos = () => {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    fetch(`/videos/${keyword ? "search" : "popular"}.json`, {}).then((res) => {
      res.data();
    });
  });

  //   console.log(fetch("/videos/search.json").then((res) => res.json()));
  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>loading</p>}
      {error && <p>error</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
