import React, { useEffect } from "react";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { clearChat, setMessage } from "../utils/chatSlice";
import { generateMessage, generateName, generateProfileImage } from "../constents/youtube";

const LiveChat = ({videoId}) => {
  const chat = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();

  useEffect(() => {

 dispatch(clearChat());
   const timer= setInterval(() => {
      dispatch(setMessage({ name: generateName(), message: generateMessage(),profile:generateProfileImage() }));
    }, 1000);

    return(()=>{
   clearInterval(timer)
    })

  }, [dispatch,videoId])

  return (
    <div>
      {chat.map((item, idx) => {
        return <ChatMessage key={idx} item={item} />;
      })}
    </div>
  );
};

export default LiveChat;
