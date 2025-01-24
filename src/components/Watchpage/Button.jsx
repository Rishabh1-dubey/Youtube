import React, { act, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../utils/appSlice";

const Button = () => {
  //getting category data  from feed Page
  const res = useSelector(store=>store.app.category)
console.log(res)

const[active, setActive] = useState("All")

const dispatch = useDispatch()

  const buttonLoader = (tag) => {
    if(active !== tag)
      dispatch(setCategory(tag))
    setActive(tag);
  };

  const ButtonList = [
    "All",
    "JavaScript",
    "Resume",
    "Podcast",
    "Cricket",
    "Live",
    "studySkill",
    "Music",
    "Goals", 
    "Tech",
    "Anime",
    "SSC",
    "MERN",
  ];
  return (
    <div className="flex gap-2">
      {ButtonList.map((buttonName, index) => {
        return (
          <div className="w-full">

          <button
            onClick={() => {
              buttonLoader(buttonName);
            }}
            key={index}
            className={`border border-slate-500  px-4 mx-2 transition-all  py-1 rounded-xl whitespace-nowrap ${
              active === buttonName ? "bg-black text-white" : "bg-gray-500"
            }`}
            >
            {buttonName}
          </button>
            </div>
        );
      })}
    </div>
  );
};

export default Button;
