import React from 'react'

const Button = () => {

 const   ButtonList =["All","JavsScript","Resume","Podcast","Software Testing","Live","Music","Goals","Study Skills","Gadegets","Tech"]
  return (
    <div className=' ' >{
    ButtonList.map((buttonName,index)=>{
        return(
            <button className='border border-slate-500 bg-gray-500 px-4 mx-2  py-1 rounded-xl'>{buttonName}</button> 
            
        )
    })  
    }
    
    </div>
  )
}

export default Button