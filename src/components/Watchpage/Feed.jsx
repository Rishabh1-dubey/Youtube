import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { YOUTUBE_VIDEO_URL } from "../../constents/youtube";
import Avatar from "react-avatar";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const Feed = () => {

const [ video , setVideo]= useState([]);


  const YuuTubeVideoFetch = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_URL}`);
      console.log(res?.data?.items)
      setVideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    YuuTubeVideoFetch()
  }, []);

  return (
    <div className="text-white mt-4 w-[100%] ">
      <div className="ml-12">
        <Button />
      </div>
      

      {/* ------------------------ compoent started   */}

<div className="grid grid-cols-3 gap-2 mt-8 ">

{
  video.map((itemCard,item)=>{
    return <div className="ml-12">
      <Link to={`/watch?v=${itemCard.id}`}>
      <VideoCard key={item} movieCard ={itemCard}/>
      </Link>
    </div>
  })
}
  </div>
     


    </div>
  );
};

export default Feed;
