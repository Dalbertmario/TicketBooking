import React from 'react'
import { RiCustomerServiceLine } from "react-icons/ri";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <div className='bg-slate-200 p-5 mt-[80px]'>
       <div className='flex flex-row justify-between px-10'>
        <p className='flex flex-row items-center gap-4'><RiCustomerServiceLine size={35}/> Customer Support</p>
        <p className='flex flex-row items-center gap-4' >< LiaMoneyBillSolid size={35}/> RESEND BOOKING CONFIMATION</p>
        <p className='flex flex-row items-center  gap-4'><CiMail size={35}/> SUBSCRIBE NEW LETTER</p>
       </div>
    </div>
  )
}
