import React from 'react'
import Ficon from '../../assets/icons/Ficon'
import XIcon from '../../assets/icons/Xicon'
import InIcon from '../../assets/icons/InIcon'
import IIcon from '../../assets/icons/IIcon'
import Wicon from '../../assets/icons/Wicon'

const CommunitySection = () => {
  return (
   <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE] py-[67px] ">
   <div className='px-5 lg:max-w-[1200px] mx-auto md:flex md:justify-between md:items-center lg:justify-between gap-44'>
    <div className='py-5'>
        <h2 className='font-bold text-xl lg:text-2xl pb-4'>Community</h2>
        <p>Join the Storyious community on social media! Connect with fellow readers and writers, share your favorite stories, and stay updated on the latest tales, writing tips, and storytelling events.</p>
    </div>
    <div className='flex gap-2 '>
        <Ficon />
        <XIcon />
        <InIcon />
        <IIcon />
        <Wicon />
        
    </div>
   </div>
    </div>
  )
}

export default CommunitySection