import React from "react";
import Avatar from "react-avatar";

const VideoCard = ({ movieCard }) => {
  return (
    <div className=" w-[300px] px- py-8 ml-6 cursor-pointer">
      {/* img--------- */}
      <img
        className="rounded-2xl pb-4"
        src={
            movieCard.snippet.thumbnails.
            standard.url
            
        }
      />
      <div>
        {/* ------------------ */}
        <div className="flex items-center gap-3 pb-2">
          <Avatar googleId="118096717852922241760" size="30" round={true} />
          <div className="font-semibold">
            {movieCard.snippet?.title.slice(0, 55)}
          </div>
        </div>
        {/* ------------------- */}
        <div className="text-gray-500">{movieCard.snippet?.channelTitle}</div>
        <div className="text-gray-500"> 100M Views</div>
      </div>
    </div>
  );
};

export default VideoCard;
