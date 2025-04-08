import React from 'react'
import Header from '../ui/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/Footer'

export default function AppLayout() {
  return (
    <div className="bg-slate-100 min-h-screen max-h-auto">
      <Header/>
      <Outlet/>
      <div className='hidden xl:block'>
      <Footer/>
      </div>
    </div>
  )
}
