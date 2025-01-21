import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { YOUTUBE_VIDEO_URL } from "../../constents/youtube";
import Avatar from "react-avatar";
import VideoCard from "./VideoCard";

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
    <div className="text-white mt-4 ">
      <div className="ml-12">
        <Button />
      </div>
      

      {/* ------------------------ compoent started   */}

<div className="flex flex-wrap">

{
  video.map((itemCard,)=>{
    return <div className="ml-12">
      <VideoCard key={itemCard.id} movieCard ={itemCard}/>
    </div>
  })
}
  </div>
     


    </div>
  );
};

export default Feed;
