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
import { useSelector } from "react-redux";
const Sidebar = () => {

const open = useSelector((store)=> store.app.open)



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
      title: "Playlist",
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
      title: "Music",
    },
    {
      icon: <MdMovieCreation className="text-[23px] " />,
      title: "Video",
    }, 
 
    
  ];

  return (
    <div className={` bg-slate-900 w-[260px] h-[630px] overflow-y-scroll overflow-x-hidden custom-scrollbar text-white ${open ? "" : "hidden"} `}>
      <div className="flex">
        <div className=" flex-col py-2 px-2 gap-2 items-center mt-4">
          {sideItem.map((item ,index) => {
            return (
              <div key={index} className="flex my-5 mx-4 mt-4 gap-9 text-lg">
                {item.icon}
                <h1>{item.title}</h1>
              </div>
            );
          })}
        <h1>Subscriptions</h1>
        <div className="border border-b-slate-500 mt-2"></div>
        </div>

      </div>{" "}
    </div>
  );
};

export default Sidebar;
