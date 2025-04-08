import React from 'react'
import HeroBanner from '../ui/HeroBanner'
import UseDashData from '../features/DashData/dashData'
import LiveEvent from '../ui/LiveEvent'
import RecommendEvent from '../ui/RecommendEvent'
import Loading from '../ui/Loading'

export default function Dashboard() {
const {dashData,isLoading} = UseDashData()
console.log(isLoading)
if(isLoading) return <Loading/>
  return (
    <div className='bg-slate-100 h-auto'>
        <HeroBanner data={dashData?.slice(1,3)}/>
        <RecommendEvent data={dashData}/>
        <LiveEvent/>
    </div>
  )
}
