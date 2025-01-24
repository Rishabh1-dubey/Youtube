import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { YOUTUBE_API, YOUTUBE_VIDEO_URL } from "../../constents/youtube";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setHome } from "../../utils/appSlice";

const Feed = () => {
  // const [video, setVideo] = useState([]);

  const { video, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  // youtube categoryyy
  const videoCategory = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${category}&type=video&key=${YOUTUBE_API}`
      );
      dispatch(setHome(res?.data?.items));
    } catch (error) {}
  };

  //  youtube video feed
  const YuuTubeVideoFetch = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_URL}`);

      // setVideo(res?.data?.items);
      dispatch(setHome(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (category === "All") {
      YuuTubeVideoFetch();
    } else {
      videoCategory();
    }
  }, [category]);

  return (
    <div className="text-white mt-4 w-[100%] ">
      <div className="ml-4">
        <Button />
      </div>

      {/* ------------------------ compoent started   */}

      <div className="grid grid-cols-3 gap-2 mt-6 ">
        {video.map((itemCard, item) => {
          return (
            <div className="ml-6">
              <Link to={`/watch?v=${itemCard.id}`}>
                <VideoCard key={item} movieCard={itemCard} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
