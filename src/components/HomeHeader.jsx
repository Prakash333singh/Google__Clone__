import React from 'react'
import ProfileIcon from './ProfileIcon';
import ProfileRing from "../assets/profile-ring.svg";
import Profile from "../assets/Profile.jpg";
const HomeHeader = () => {
  return (
    <header className='h-16 flex justify-between md:justify-end items-center gap-4 px-5'>
        <div className='flex gap-4'>
            <span className='text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer'>
             Gmail
            </span>
            <span className='text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer'>
             Images
            </span>
            <span className='h-10 w-10 relative flex justify-center items-center'>
                <img className='absolute' src={ProfileRing}/>
            <span className='h-8 w-8 rounded-full overflow-hidden'>
                <img  className='h-full w-full object-cover'  src={Profile} />
            </span>

            </span>
        </div>
      <ProfileIcon/>
    </header>
  )
}

export default HomeHeader
