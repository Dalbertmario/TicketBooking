import React, { useState } from 'react'
import { CiCalendar } from "react-icons/ci";
import { FaUserClock } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";


import { CiClock2 } from "react-icons/ci";
import DateFormating, { ConsertDate, timeFormating } from '../utils/DateTimeFormate';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function BookingCard({datas}) {
    const [booking,setBooking] = useState(false)
const token = JSON.parse(localStorage.getItem('token1'))

console.log(token)
const navigate = useNavigate()
function Booking(){
    setBooking(e=>!e)
    if(!token && booking){
        navigate('/signup')
        toast.error('Please signup')
    }else{
        navigate(`/checkout/${datas[0]?.id}`)
    }
}
  return (
    <div className='p-5 fixed min-w-[500px]'>
        {datas?.map(el=>(
            <div className='outline-1 p-2 rounded-xl outline-slate-400 flex flex-col gap-4'>
                <p className='flex flex-row items-center gap-4'><CiCalendar size={40}/> {DateFormating(el?.start_time)}</p>
                <p className='flex flex-row items-center gap-4'><CiClock2 size={40}/>{ConsertDate(el.start_time) > 12 ? ConsertDate(el.start_time) - 12 : el.start_time}.00 P.m </p>
                <p className='flex flex-row items-center gap-4'><FaUserClock size={40}/> {timeFormating(el)} Hours</p>
                <p className='flex flex-row items-center gap-4'><IoPeopleOutline size={40}/>5+ years</p>
                <p  className='flex flex-row items-center gap-4'><CiLocationOn size={40}/> {el.location}</p>
                <button className='bg-gradient-to-r p-5 hover:from-purple-600 hover:to-blue-500 transition-colors rounded-2xl text-white font-semibold from-blue-500 to-purple-600' onClick={()=>Booking()}>Book Now {datas.map(el=>el.price)}</button>
            </div>
        ))}
     </div>
  )
}
