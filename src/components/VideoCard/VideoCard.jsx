import React from "react";
import { formatAgo } from "../../util/date";

const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li className="">
      <img src={thumbnails.medium.url} alt={title} className="w-full" />
      <p className="font-bold">{title}</p>
      <p>{channelTitle}</p>
      <p>{formatAgo(publishedAt, "ko")}</p>
    </li>
  );
};

export default VideoCard;
