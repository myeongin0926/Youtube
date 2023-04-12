import React from "react";
import PopularCard from "./PopularCard";
import SearchCard from "./SearchCard";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, keyword }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  if (keyword) {
    return <SearchCard video={video} navHandler={navigateHandler} />;
  }
  return <PopularCard video={video} navHandler={navigateHandler} />;
};

export default VideoCard;
