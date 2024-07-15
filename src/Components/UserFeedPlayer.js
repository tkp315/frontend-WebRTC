import React, { useEffect, useRef } from 'react'

 function UserFeedPlayer({stream}) {

    const videoRef = useRef(null)
     
    useEffect(()=>{
        if(videoRef.current && stream){
            videoRef.current.srcObject = stream;
        }
    })

  return (
    <div>
      <video
      ref={videoRef}
      autoPlay
      muted={true}
      className='w-[500px] h-[500px]'
      ></video>
    </div>
  )
}
export default  UserFeedPlayer
