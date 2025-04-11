import React, { useEffect, useState } from 'react'
import UseBookingDetails from '../features/BookingsDetails/bookingDetails'
import { useNavigate, useParams } from 'react-router-dom';
import DateFormating, { ConsertDate } from '../utils/DateTimeFormate';
import UseNewBooking from '../features/bookings/newBooking';

export default function CheckoutPage() {
const { id } = useParams();
const {data} =UseBookingDetails(id)
// const [selection,setselection]  = useState(1)
const {mutate:BookingMutate} = UseNewBooking()
const token = JSON.parse(localStorage.getItem('token1'))
const navigate = useNavigate()
function handlebooking(data){
    BookingMutate(data)
}
useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
function handleLogin(){
    navigate('/signin')
}
  return (
    <div className='mt-[10px] max-w-[1200px] m-auto p-5 h-[83vh]'>
        <div className='flex flex-col gap-2 sm:flex-col md:flex-col xl:flex-row justify-center'>
       <div className='mt-[80px] bg-white h-fit p-4 rounded-2xl'>
        <p className='text-slate-400'>Please select from the following option(s)</p>
        <p>M-Ticket</p>
        <div className='bg-blue-200 p-2 rounded-lg'>
            <h1 className='font-semibold'>M-Ticket Information</h1>
            <p>1. Customer(s) can access their ticket(s) from the 'My Profile' section on the app/mobile-web.</p>
            <p>2. It is mandatory to present the ticket(s) in my profile section via app/mobile-web at the venue.</p>
            <p>3. No physical ticket(s) are required to enter the venue.</p>
        </div>
       </div>
       <div className='mt-[80px] xl:mt-[80px] md:mt-[20px] sm:mt-[20px] '>
         {data?.map(el=>(
            <div className='flex flex-col justify-between h-[500px] rounded-2xl bg-white p-5'>
                <div className='font-mono'>
                <p className='outline-1 outline-slate-400 p-2 rounded-t-lg'>{el?.name}</p>
                <div className='outline-1 flex flex-col gap-4 outline-slate-400 p-2'>
                <p>Date :{DateFormating(el?.start_time)}</p>
                <p>Time :{ConsertDate(el.start_time) > 12 ? ConsertDate(el.start_time) - 12 : el.start_time}.00 P.m</p>
                <p>Venue : {el?.location}</p>
                {/* <select onChange={(e)=>setselection(e.target.value)}>
                    <option disabled>Select No of seats required</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select> */}
                </div>
                </div>
                <div >
            
                <p className='border-b-1 border-t-2 p-3 mb-1'>Total Amount :{el?.price}</p>
               {token ? <p onClick={()=>handlebooking(el)} className='bg-gradient-to-r p-2 hover:from-purple-600 hover:to-blue-500 transition-colors rounded-2xl text-white font-semibold from-blue-500 to-purple-600'>Pay {el?.price}</p> : <button onClick={()=>handleLogin()} className='bg-gradient-to-r p-2 hover:from-purple-600 hover:to-blue-500 transition-colors rounded-2xl text-white font-semibold from-blue-500 to-purple-600'>Login</button> }
                </div>
            </div>
         ))}
       </div>
       </div>
    </div>
  )
}
