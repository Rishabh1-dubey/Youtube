import React from 'react'

const Button = () => {

 const   ButtonList =["All","JavaScript","Resume","Podcast","Software Testing","Live","Music","Goals","Study Skills","Gadegets","Tech"]
  return (
    <div className=' ' >
      {
    ButtonList.map((buttonName,index)=>{
        return(
            <button key={index} className={`border border-slate-500  px-4 mx-2  py-1 rounded-xl ${buttonName === "All" ? "bg-black text-white":"bg-gray-500"}`}>{buttonName}</button> 
            
        )
    })  
    }
    
    </div>
  )
}

export default Button