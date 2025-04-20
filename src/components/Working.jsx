import React from 'react'
import { IoBookmarks } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import DashedArrow from './DashedArrow';


function Working() {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='step bg-gradient-to-b from-gray-200 to-gray-400'>
                <FaLocationDot size={25} color='#034367'/>
            </div>
            <h2 className='font-bold text-[16px]'>Choose a Location</h2>
            <p className='text-center text-gray-600 text-[18px] font-[secondary]'>Easily select the perfect location for your car rental.</p>
        </div>

        <DashedArrow />

        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='step bg-gradient-to-b from-[#0b0a0f] to-[#034367]'>
                <BsCalendar2DateFill size={25} color='gray'/>
            </div>
            <h2 className='font-bold text-[16px]'>Pick-Up Date</h2>
            <p className='text-center text-gray-600 text-[18px] font-[secondary]'>Pick a convenient date to start your journey.</p>
        </div>

        <DashedArrow />

        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='step bg-gradient-to-b from-gray-200 to-gray-400'>
                <IoBookmarks size={25} color='#034367'/>
            </div>
            <h2 className='font-bold text-[16px]'>Book your Car</h2>
            <p className='text-center text-gray-600 text-[18px] font-[secondary]'>Reserve your ideal car in just a few clicks.</p>
        </div>
    </div>
  )
}

export default Working