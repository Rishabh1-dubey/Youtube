import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiBellAlert } from "react-icons/hi2";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5"
import {
  setCategory,
  setSeachSuggestion,
  toggleSidebar,
} from "../utils/appSlice";
import axios from "axios";
const Navbar = () => {


  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const searchSuggestion = useSelector((store) => store.app.searchSuggestion);
  console.log(searchSuggestion);
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };
  const searchButton = () => {
    dispatch(setCategory(input));
    setInput("");
  };

  const showSearchSuggestion = async () => {
    try {
      const res = await axios.get(
        "https://api.codetabs.com/v1/proxy?quest=" +
          encodeURIComponent(
            "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
              input
          )
      );
      console.log(res);
      dispatch(setSeachSuggestion(res.data[1]));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showSearchSuggestion();
  }, [input]);

  return (
    <div className="flex  justify-between mt-2 border-b-2 ">
      {/* 1st component  */}
      <div className="flex justify-between gap-6 items-center -mt-6 mx-4">
        <RxHamburgerMenu
          onClick={toggleHandler}
          className="text-3xl cursor-pointer"
        />

        <div className="">
          <img
            className="h-20 w-20  "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyrsAzCWEVGtf-ZtLyV2bM9MtzcJLPl7TDPaVo4UQJ4isxFdY-UWuULBcqMWSQqzJNfM&usqp=CAU"
            alt="youtube-logo"
          />
        </div>
      </div>

      {/*  2nd components   button and search -------------------*/}
      <div className=" ">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-slate-700 px-2 py-2 w-[400px] rounded-l-3xl"
          type=" search"
          placeholder="enter you movie"
        />
        <button
          onClick={searchButton}
          className="border border-slate-700 px-2 py-2 rounded-r-3xl"
        >
          dd
        </button>
      </div>
      <div className="absolute z-50 bg-slate-900 py-4 mt-12 mr-28 left-[36%] w-[29%] rounded-lg hover:bg-gray-800 ">
        <ul>
          {searchSuggestion.map((text, idx) => {
            return (
              <div className=" flex  justify-between items-center px-4  cursor-pointer hover:bg-gray-600 rounded-sm  w-full pb-2 text-white font-semibold text-lg">
                <li>{text}</li>
                <IoSearch className="text-xl" />

              </div>
            );
          })}
        </ul>
      </div>

      {/* ------------------ */}

      {/* 3rd  component */}
      <div className="flex gap-6 justify-between mr-12">
        <span>
          <HiBellAlert className="text-4xl" />
        </span>
        <span>
          <MdAccountCircle className="text-4xl" />
        </span>
      </div>

      {/*  */}
    </div>
  );
};

export default Navbar;
