import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
     <video 
       autoPlay 
       loop 
       muted 
       className='h-full w-full object-cover'
       src='src/assets/videos/bgvideo.mp4'>
     </video>
    </div>
  )
}

export default Video