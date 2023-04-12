import React from "react";
import { formatAgo } from "../../util/date";

const PopularCard = ({ video , navHandler}) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li
      onClick={() => {
        navHandler();
      }}
      className="cursor-pointer p-1.5 group rounded-lg active:bg-neutral-800 "
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full rounded-xl group-hover:rounded-none transition-all duration-0 group-hover:duration-200 group-hover:delay-100"
      />
      <div className="h-24 w-10/12 py-2">
        <p className="font-bold line-clamp-2 mb-3 ">{title}</p>
        <p className="text-sm text-teal-400 font-semibold">
          {" "}
          <span className="hover:text-zinc-100">{channelTitle} </span>
          <span className="font-bold">·</span> {formatAgo(publishedAt, "ko")}
        </p>
      </div>
    </li>
  );
};

export default PopularCard;
