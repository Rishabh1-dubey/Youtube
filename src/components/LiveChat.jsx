import React from "react";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const chat = useSelector(store=>store.chat.message);
  console.log(chat)
  return (
   <div>


    {
chat.map((item,idx)=>{
  return (
    <ChatMessage key={idx} item ={item}/>
  )
})
    }
  
   </div>
  );
};

export default LiveChat;
