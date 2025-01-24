import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ({item}) => {
  return (
    <div className="flex items-center mt-1 ">
      <div className='ml-2 pb-2'>
        <Avatar
          className="rounded-xl  border bg-cover "
          src={item.profile}
          size="43"
          round={true}
        />
      </div>
      <div className="text-slate-500 ml-2 ">{item.name}</div>
      <div className="ml-4">{item.message}</div>
    </div>
  )
}

export default ChatMessage