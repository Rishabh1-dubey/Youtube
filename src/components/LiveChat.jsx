import React, { useEffect } from "react";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { setMessage } from "../utils/chatSlice";
import { generateMessage, generateName, generateProfileImage } from "../constents/youtube";

const LiveChat = () => {
  const chat = useSelector((store) => store.chat.message);

  console.log(chat);
  const dispatch = useDispatch();

  // useEffect(() => {
  //  const timer= setInterval(() => {
  //     dispatch(setMessage({ name: generateName(), message: generateMessage(),profile:generateProfileImage() }));
  //   }, 1000);

  //   return(()=>{
  //  clearInterval(timer)
  //   })

  // }, []);
  return (
    <div>
      {chat.map((item, idx) => {
        return <ChatMessage key={idx} item={item} />;
      })}
    </div>
  );
};

export default LiveChat;
