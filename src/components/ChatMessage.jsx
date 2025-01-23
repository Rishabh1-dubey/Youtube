import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ({item}) => {
  return (
    <div className="flex items-center ">
      <div>
        <Avatar
          className="rounded-xl  border bg-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSd9ntnjxJieblDHXudyFyNaw3jYmHFuhaQ&s"
          size="43"
          round={true}
        />
      </div>
      <div className="text-slate-500 ml-2">{item.name}</div>
      <div className="ml-4">{item.message}</div>
    </div>
  )
}

export default ChatMessage