import React, { useEffect, useRef, useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
export default function RecommendEvent({data}) {
 const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  console.log(data)
  return (
    <div className='mt-[100px] h-auto'>
      <h1 className='font-semibold text-2xl text-center font-mono'>Recommended Event <span className='text-[12px] text-blue-600'><NavLink to='/allevent'><button className='cursor-pointer hover:border-b-1 bg-slate-200 transtion-all'>All event</button></NavLink></span></h1>
      <div className='max-w-[1200px] content-between xl:justify-center md:justify-center sm:justify-start flex flex-row gap-5 xl:max-w-[1400px] m-auto overflow-x-auto  overflow-y-hidden '>
      {data.map(el=>(
      <NavLink to={`/event/${el.id}`}> <div className='transition-all hover:bg-slate-200 hover:translate-1.5 shadow-lg rounded-lg p-5 justify-between flex flex-col gap-3 '>
            <img className='max-h-[350px] rounded-lg max-w-[300px]' src={el.small_image}/>
            <div className='max-w-[250px] mb-[10px]'>
            <p className='font-semibold'>{el.name.split(' ').slice(0,3)}</p>
            <p className='flex items-center gap-3'><CiLocationOn /> {el.location}</p>
            </div>
        </div>
        </NavLink> 
      ))}

      </div>
    </div>
  )
}
