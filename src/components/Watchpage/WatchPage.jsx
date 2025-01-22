import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { YOUTUBE_API } from "../../constents/youtube";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { RiDownloadLine } from "react-icons/ri";
import { BiDislike } from "react-icons/bi";

const WatchPage = () => {
  const [singleVideo, setSingleVideo] = useState("");
  const [serachParams] = useSearchParams();
  const videoId = serachParams.get("v");

  const GetSingleVideo = async () => {
    try {
      const res = await axios.get(
        ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&regionCode=IN&key=${YOUTUBE_API}`
      );
      setSingleVideo(res?.data?.items[0]);
      console.log(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSingleVideo();
  }, []);

  // for like video convert
  function formatViews(count) {
    if (!count) return "0";
    count = Number(count);
    if (count >= 10000000) {
      return Math.floor(count / 10000000) + "Cr";
    } else if (count >= 1000000) {
      return Math.floor(count / 1000000) + "M";
    } else if (count >= 100000) {
      return Math.floor(count / 100000) + "L";
    } else if (count >= 1000) {
      return Math.floor(count / 1000) + "K";
    } else {
      return count.toString();
    }
  }
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />

        {/* video component */}
        <div className="ml-4 mt-2 ">
        
            <iframe
              width="900"
              height="500"
              className="rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
              title="YouTube video player"
              frameborder="0"
            ></iframe>
       

          <h1 className="font-bold mt-4 text-xl">
            {singleVideo.snippet?.title}
          </h1>
          <div className="flex justify-between">
            {/* subscriber list */}
            <div className="flex mt-2 gap-2">
              <div>
                <Avatar
                  src={singleVideo.snippet?.thumbnails?.medium?.url}
                  size="40"
                  round={true}
                />
              </div>
              <div className="-mt-1">
                <span className="text-lg font-semibold ">
                  {singleVideo.snippet?.channelTitle}
                </span>
                <p className="-mt-1">5M</p>
              </div>
            </div>
            {/*  */}

            <button className=" border border-black bg-black text-white hover:bg-white hover:text-black rounded-2xl cursor-pointer px-4 text-lg  transition-all delay-150 h-full mt-2  py-[2px]">
              Subscribe
            </button>
            {/* butoon for like ND SHARE */}
            <div className="flex items-center  ml-4 ">
              <div className=" flex ml-20 gap-4">

              <div className=" flex gap-2 items-center text-lg border border-yellow-500 rounded-2xl cursor-pointer">
                <span className="flex items-center px-2 gap-2  hover:bg-gray-400 transition-all delay-150 hover:rounded-l-xl   ">
                  <AiOutlineLike />{" "}
                  {formatViews(singleVideo?.statistics?.likeCount)}{" "}
                </span>
                <span className="w-[1px] h-[23px] bg-slate-600"></span>
                <span className=" py-1 px-2 hover:bg-gray-400 hover:rounded-r-xl transition-all delay-150 ">
                  <BiDislike />{" "}
                </span>
              </div>
              <div className="flex items-center gap-2  border border-black rounded-2xl cursor-pointer px-4 text-lg hover:bg-gray-400 transition-all delay-150 ">
                <span className="font-semibold">share</span>
                <PiShareFatThin />
              </div>
              <div className="flex items-center gap-2  border border-black rounded-2xl cursor-pointer px-4 text-lg hover:bg-gray-400 transition-all delay-150">
                <span className="font-semibold">downlaod</span>

                <RiDownloadLine />
              </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
        {/* live chat component */}
        <div></div>
      </div>
    </div>
  );
};

export default WatchPage;
