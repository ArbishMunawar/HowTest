import React from 'react'
import Button from '../components/Button'

const MoreStoriesSection = () => {
  return (
   <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE] py-10 ">
   <div className='px-5 lg:max-w-[1200px] mx-auto md:flex md:justify-between md:items-center lg:justify-between'>
    <div className='py-5 md:w-[70%]'>
        <h2 className='font-bold text-xl lg:text-2xl pb-4'>Want to Read More Stories?</h2>
        <p>Dive deeper into the world of storytelling with Storyious. Explore our vast collection of captivating tales across genres—from heartfelt moral stories to thrilling adventures and magical fairytales. </p>
    </div>
    <Button className="px-9">Read More</Button>
        
   </div>
    </div>
  )
}

export default MoreStoriesSection