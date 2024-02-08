import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black'>

<h1 className='text-6xl font-bold'>{title}</h1>
<p className='py-6 tex-lg w-1/4'>{overview}</p>

<div className='flex items-center gap-3'>
<button className='bg-white text-black p-4 px-12  text-xl  rounded-lg z-10 hover:bg-opacity-80 transition-all duration-300'>▶️Play </button>
<button className='bg-gray-500 text-white p-4 px-12  text-xl bg-opacity-50 rounded-lg'>More Info</button>


</div>




    </div>
  )
}

export default VideoTitle