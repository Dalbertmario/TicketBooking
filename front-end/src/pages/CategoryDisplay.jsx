import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import UseCategoryData from '../features/DashData/categoryData'
import { CiLocationOn } from "react-icons/ci";
import Loading from '../ui/Loading';

export default function CategoryDisplay() {
const {cat} = useParams()
const {data,isLoading} = UseCategoryData(cat)

useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
 if(isLoading) return  <Loading/>
  return (
    <div className='mt-[80px] h-[78vh] p-4'>
    <h1 className='font-semibold text-2xl text-center font-mono'>Category {cat}</h1>
    <p>{!data?.length && <p className='text-2xl'>No data found</p>}</p>
    <div className='flex flex-wrap gap-4 justify-center'>
    {data?.map(el=>(
    <NavLink to={`/event/${el?.id}`}> <div className='transition-all hover:bg-slate-200 hover:translate-1.5 shadow-lg rounded-lg p-5 justify-between flex flex-col gap-3 '>
          <img className='max-h-[350px] rounded-lg max-w-[300px]' src={el?.small_image}/>
          <div className='max-w-[250px] mb-[10px]'>
          <p className='font-semibold'>{el?.name?.split(' ').slice(0,3)}</p>
          <p className='flex items-center gap-3'><CiLocationOn /> {el?.location}</p>
          </div>
      </div>
      </NavLink> 
    ))}
    </div>
  </div>
  )
}
