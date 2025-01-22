import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

    const[serachParams] = useSearchParams()
    const videoId = serachParams.get('v');
    console.log("videoId=", videoId)
  return (
    <div>
<Navbar/>
<div className="flex">
        <Sidebar />
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
       
  )
}

export default WatchPage