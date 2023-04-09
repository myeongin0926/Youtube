import React from "react";
import PopularCard from "./PopularCard";
import SearchCard from "./SearchCard";

const VideoCard = ({ video, keyword }) => {
  if (keyword) {
    return <SearchCard video={video} />;
  }
  return <PopularCard video={video} />;
};

export default VideoCard;
