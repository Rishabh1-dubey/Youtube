import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { MdPlaylistPlay } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";
import { CiMusicNote1 } from "react-icons/ci";
import { MdMovieCreation } from "react-icons/md";
const Sidebar = () => {
  const sideItem = [
    {
      icon: <AiOutlineHome className="text-[23px] " />,
      title: "Home",
    },
    {
      icon: <SiYoutubeshorts className="text-[23px] " />,
      title: "Shorts",
    },
    {
      icon: <MdSubscriptions className="text-[23px] " />,
      title: "Subscriptions",
    },
    {
      icon: <LuHistory className="text-[23px] " />,
      title: "History",
    },
    {
      icon: <MdPlaylistPlay className="text-[23px] " />,
      title: "Vidoed",
    },
    {
      icon: <BiSolidVideos className="text-[23px] " />,
      title: "trending",
    },
    {
      icon: <FaFireAlt className="text-[23px] " />,
      title: "Music",
    },
    {
      icon: <CiMusicNote1 className="text-[23px] " />,
      title: "Home",
    },
    {
      icon: <MdMovieCreation className="text-[23px] " />,
      title: "Playlist",
    },
  ];

  return (
    <div className="bg-slate-300 w-56 h-[630px]">
      <div className="flex">
        <div className=" flex-col py-2 px-2 gap-2 items-center mt-4">
          {sideItem.map((item) => {
            return (
              <div className="flex my-4 mx-4 mt-4 gap-9 text-lg">
                {item.icon}
                <h1>{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
};

export default Sidebar;
