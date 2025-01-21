import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiBellAlert } from "react-icons/hi2";
import { MdAccountCircle } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="flex  justify-between mt-2 border-b-2">
      {/* 1st component  */}
      <div className="flex justify-between gap-6 items-center -mt-6 mx-4">
        <div>
        <RxHamburgerMenu className="text-3xl" />
          
        </div>
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
          className="border border-slate-700 px-2 py-2 w-[400px] rounded-l-3xl"
          type=" search"
          placeholder="enter you movie"
        />
        <button className="border border-slate-700 px-2 py-2 rounded-r-3xl">
          dfhh
        </button>
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
