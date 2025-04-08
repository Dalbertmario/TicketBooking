import React, { useState } from 'react'
import Usefilrting from '../features/DashData/Filtering'
import Loading from '../ui/Loading'
import { NavLink } from 'react-router-dom'

export default function AllEvents() {
  const [tagsClick,settagesClick] = useState(null)
  const { data, isLoading } = Usefilrting(tagsClick)
  console.log(data)
  if(isLoading) return <Loading/>
  return (
    <div className='max-w-[1000px] m-auto mt-[85px] h-screen'>
          <div className='flex flex-row gap-4'>
            {data?.tags?.map(el=>(<div className='flex flex-row gap-4 p-2'>
                <button onClick={()=>settagesClick(el)} className={`bg-white py-2 px-4 ${tagsClick === el ? 'from-blue-500 text-white font-semibold to-purple-600 bg-gradient-to-r ' : ''} rounded-lg outline-1 outline-blue-500`}>{el}</button>
            </div>))}
        </div>
      <div className='flex flex-row justify-center flex-wrap gap-4 p-5'>
    
        {data?.data.map((el, index) => (
         <NavLink to={`/event/${el.id}`}>  <div key={index} className='shadow-xl p-2 flex flex-col gap-3 hover:translate-x-[10px]  hover:translate-y-[10px] transition-all rounded-2xl' >
            <img
              className='max-h-[350px] rounded-lg max-w-[300px]'
              src={el.small_image}
              alt={`event-${index}`}
            />
            <h1>{el.name.split(' ').slice(0,4).join(' ')}</h1>
            <p>{el.location}</p>
          </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
