
import React from 'react'
import { IoIosExit } from "react-icons/io";
import { createPortal } from 'react-dom';

export default function TernsConditio({onClose }) {
  return createPortal(
    <div className='fixed inset-0 z-50 bg-blur bg-opacity-40 flex items-center justify-center'>
      <div className='bg-white w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-lg'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-xl font-semibold'>Terms & Conditions</h1>
          <button onClick={()=>onClose(el=>!el)} className='text-2xl text-gray-600 hover:text-black'>
            <IoIosExit />
          </button>
        </div>
        <div className='text-sm space-y-2'>
          <p>1. Tickets once booked cannot be exchanged or refunded.</p>
          <p>2. An Internet handling fee per ticket may be levied. Please check the total amount before payment.</p>
          <p>3. We recommend that you arrive at least 30 minutes prior at the venue for a seamless entry.</p>
          <p>4. It is mandatory to wear masks at all times and follow social distancing norms.</p>
          <p>5. Please do not purchase tickets if you feel sick.</p>
          <p>6. Unlawful resale (or attempted unlawful resale) of a ticket would lead to seizure or cancellation of that ticket without refund or other compensation.</p>
        </div>
      </div>
    </div>,
    document.body
  );
}
