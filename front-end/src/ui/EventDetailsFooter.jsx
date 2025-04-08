import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function EventDetailsFooter({datas}) {
    const [booking,setBooking] = useState(false)
const token = JSON.parse(localStorage.getItem('token1'))

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
      <div className='bg-gradient-to-r bottom-0 flex justify-between p-5 w-screen fixed z-10 from-blue-500 to-purple-600 '>
       <button className='bg-white py-3 px-5 text-center transition-all hover:bg-slate-200 rounded-2xl font-semibold' onClick={()=>Booking()}>Book Now {datas?.map(el=>el.price)}</button>
    </div>

  )
}
