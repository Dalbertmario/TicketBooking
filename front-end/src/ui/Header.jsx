import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-gradient-to-r top-0 flex justify-between p-5 w-screen fixed z-10 from-blue-500 to-purple-600 h-[80px]'>
        <div className="flex flex-row gap-4">
      <NavLink to={`/`}><h1 className='bashh1 sm:text-[12px]'>Booking.com</h1></NavLink> 
       </div>
       <div className='flex flex-row gap-5'>
        <NavLink to={`/profile`}> <CgProfile size={40} color='white' /> </NavLink>
         <NavLink to={`/bookings`}>  <IoBookSharp size={40} color='white'/></NavLink>
       </div>
    </div>
  )
}
