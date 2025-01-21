import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { MdPlaylistPlay } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi"
import { BiSolidLike } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";
import { CiMusicNote1 } from "react-icons/ci";
import { MdMovieCreation } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className="bg-slate-300 w-56 h-[630px]">
      <div className="flex">
        <div className=" flex py-2 px-2 gap-2 items-center mt-2">
          <AiOutlineHome className="text-[23px] " />
          <h1 className="text-[17px]">Home</h1>
        </div>
      </div>{" "}


      {/* 2nd */}
      <div className="flex">
        <div className=" flex py-2 px-2 gap-2 items-center mt-2">
          <SiYoutubeshorts className="text-[23px] " />
          <h1 className="text-[17px]">Shorts</h1>
        </div>
      </div>{" "}

      {/* 3rd */}
      <div className="flex">
        <div className=" flex py-2 px-2 gap-2 items-center mt-2">
          <MdSubscriptions className="text-[23px] " />
          <h1 className="text-[17px]">Subscription</h1>
        </div>
      </div>{" "}

<div className="border-b-[1px] px-0 border-blue-50 mt-2"></div>

      {/* 4th */}
      <div className="flex">
        <div className=" flex py-2 px-2 gap-2 items-center mt-2">
          <LuHistory className="text-[23px] " />
          <h1 className="text-[17px]">History</h1>
        </div>
      </div>{" "}

      {/* 5th */}
      <div className="flex">
        <div className=" flex py-2 px-2 gap-2 items-center mt-2">
          <MdPlaylistPlay className="text-[23px] " />
          <h1 className="text-[17px]">Playlist</h1>
        </div>
      </div>{" "}

      {/* 6th */}
      <div className="flex">
        <div className=" flex py-2 px-2 gap-2 items-center mt-2">
          <BiSolidVideos className="text-[23px] " />
          <h1 className="text-[17px]">Your Vidoes</h1>
        </div>
      </div>{" "}
      {/* 7th */}
      <div className="flex">
        <div className=" flex py-2 px-2 gap-2 items-center mt-2">
          <BiSolidLike className="text-[23px] " />
          <h1 className="text-[17px]">Liked </h1>
        </div>
      </div>{" "}
      <div className="flex">
        <div className=" flex py-2 px-2 gap-2 items-center mt-2">
          <FaFireAlt className="text-[23px] " />
          <h1 className="text-[17px]">Trending</h1>
        </div>
      </div>{" "}
      <div className="flex">
        <div className=" flex py-2 px-2 gap-2 items-center mt-2">
          <CiMusicNote1 className="text-[23px] " />
          <h1 className="text-[17px]">Music</h1>
        </div>
      </div>{" "}
      <div className="flex">
        <div className=" flex py-2 px-2 gap-2 items-center mt-2">
          <MdMovieCreation className="text-[23px] " />
          <h1 className="text-[17px]">Vidoes</h1>
        </div>
      </div>{" "}
      
     
    
      
    </div>
  );
};

export default Sidebar;
