import React from "react";
import { formatAgo } from "../../util/date";

const SearchCard = ({ video , navHandler}) => {
  const { title, thumbnails, channelTitle, publishedAt, description } =
    video.snippet;

  return (
    <li onClick={()=>{navHandler()}} className="flex gap-3 w-full cursor-pointer p-1 rounded-lg active:bg-neutral-800 mb-2 ">
      <img
        src={thumbnails.medium.url}
        alt={title}
        className=" rounded-xl w-70 transition-all hover:rounded-none hover:delay-150"
      />
      <div className=" w-70 flex flex-col gap-3">
        <p className="font-bold line-clamp-2  lg:text-lg">{title}</p>
        <p className="text-sm text-teal-400 font-semibold">
          {" "}
          <span className="hover:text-zinc-100">{channelTitle} </span>
          <span className="font-bold">·</span> {formatAgo(publishedAt, "ko")}
        </p>
        <p className="line-clamp-1 text-sm  text-teal-400">{description}</p>
      </div>
    </li>
  );
};

export default SearchCard;
