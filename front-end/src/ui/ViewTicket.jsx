
import React from 'react'
import { IoIosExit } from "react-icons/io";
import { createPortal } from 'react-dom';
import DateFormating, { ConsertDate } from '../utils/DateTimeFormate';

export default function ViewTicket({onClose,data,index}) {
const {booking_time,start_time,location,image_url} = data[index]
  return createPortal(
    <div className='fixed inset-0 z-50 bg-blur bg-opacity-40 flex items-center justify-center'>
      <div className='bg-white w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-lg'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-xl font-semibold'>Your Ticket Details</h1>
          <button onClick={()=>onClose(el=>!el)} className='text-2xl text-gray-600 hover:text-black'>
            <IoIosExit />
          </button>
        </div>
        <div className='text-sm space-y-2'>
            
                <div className='flex flex-col gap-3'>
                    <img src={image_url}/>
                     <p>Date :{DateFormating(booking_time)}</p>
                     <p>Time :{ConsertDate(start_time) > 12 ? ConsertDate(start_time) - 12 : start_time}.00 P.m</p>
                     <p>Venue : {location}</p>
                </div>
            
        </div>
      </div>
    </div>,
    document.body
  );
}
