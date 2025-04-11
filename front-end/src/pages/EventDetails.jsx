import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import UseBookingDetails from '../features/BookingsDetails/bookingDetails';
import BookingCard from '../ui/BookingCard';
import EventDetailsFooter from '../ui/EventDetailsFooter';
import TernsConditio from '../ui/Terns&Conditio';
import UseMayLike from '../features/BookingsDetails/YouMayAlsoLike';
import { CiLocationOn } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import Loading from '../ui/Loading';


export default function EventDetails() {
    const { id } = useParams();
    const {data,isLoading} =   UseBookingDetails(id)
    const {data:YouMayLike} =  UseMayLike()
    const [readMore,setReadMore] = useState(false)
    const [TermsButton,setTermsButton] = useState(false)


useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  if(isLoading) return <Loading/>
   return (
    <>
    {TermsButton && <TernsConditio onClose={setTermsButton}/>}
    <div className={`mt-[80px] max-w-[1200px] m-auto ${TermsButton && 'blur'}  `}>
        <div>
        {data?.map(el=>(
            <div className={`xl:flex xl:flex-row md:flex-col p-2 sm:flex-col`} key={el?.id}>
                <div  className='flex flex-col gap-3'>
                 <h1 className='headings sm:text-[12px]'>{el?.name}</h1>
                <img className='xl:max-w-[700px] md:max-w-[700px] md:max-h-[700px] xl:max-h-[700px] sm:max-w-[150px] sm:max-h-[150px] rounded-lg' src={el.image_url}/>
                {/* {el?.tags?.map(el=>(<p className='bg-green-300 text-green-800'>{el}</p>))} */}
                <h1 className='headings'>About The Event</h1>
                <h1 className='font-semibold text-xl md:text-md sm:text-sm'>{el.name}</h1>
                <p className='max-w-[700px] font-normal text-lg md:text-base sm:text-[12px] leading-relaxed'>{el.description.slice(1,!readMore ? 100 : el?.description.length)}... <button className='text-red-600' onClick={()=>setReadMore(e=>!e)}>{!readMore ?'Read More' :'Read Less'}</button></p>
                </div>
                <div className="hidden md:hidden sm:block xl:block">
                <BookingCard datas={data} />
                </div>
            </div>
        ))}
        <button className='font-semibold text-2xl p-2 font-mono fheadingslex flex-row items-center gap-2' onClick={()=>setTermsButton(e=>!e)}>
        Terms & Condition <FaLongArrowAltRight /></button>
        <div className='h-fit mt-[20px] p-2'>
      <h1 className='font-semibold text-2xl font-mono'>You May Like</h1>
      <div className='max-w-[1000px] content-between xl:justify-start md:justify-center sm:justify-start flex flex-row gap-2 xl:max-w-[1400px] m-auto overflow-x-auto  overflow-y-hidden '>
      {YouMayLike?.map(el=>(
      <NavLink to={`/event/${el.id}`}> <div className='bg-slate-100 transition-all hover:bg-slate-200 hover:translate-1.5 shadow-2xl rounded-lg p-5 justify-between flex flex-col gap-3 '>
            <img className='max-h-[300px] rounded-lg max-w-[300px]' src={el.small_image}/>
            <div className='max-w-[250px]'>
            <p className='font-semibold'>{el.name.split(' ').slice(0,3).join(' ')}</p>
            <p className='flex items-center gap-3'><CiLocationOn /> {el.location}</p>
            </div>
        </div>
        </NavLink> 
      ))}
      </div>
    </div>
            <div className='xl:hidden md:block sm:block mt-[100px]'>
                  <EventDetailsFooter datas={data}/>
               </div>
        </div>
    </div>
    </>
  )
}
