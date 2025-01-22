import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { YOUTUBE_API } from "../../constents/youtube";
import { Link } from "react-router-dom";

const VideoCard = ({ movieCard }) => {

  const[ytlogo , setYtlogo] = useState("")
  const YoutubeChannelId = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${movieCard.snippet.channelId}&key=${YOUTUBE_API}`
      );

      console.log(res.data);
      setYtlogo(res.data.items[0].snippet.thumbnails.default.url);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{
    YoutubeChannelId()
  },[])
  return (
    <>
    
    <div className="w-94 cursor-pointer my-2">
      <img
        className="rounded-xl w-full"
        src={movieCard.snippet.thumbnails.medium.url}
        alt="ytvideo"
        />
      <div>
        <div className="flex mt-6 gap-2">
          <Avatar src={ytlogo} size="40" round={true} style={{ border: '2px solid #fff', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}  />
          <div className="ml-2">
            <h1 className="font-bold text-black">{movieCard.snippet.title}</h1>
            <p className="text-sm text-gray-500">
              {movieCard.snippet.channelTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
       
        </>
  );
};

export default VideoCard;
