import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import UseUserDetials from "../features/account/GetuserData"


export default function Userpage() {
const navigate = useNavigate()
const {data} = UseUserDetials()
console.log(data)
const token = JSON.parse(localStorage.getItem('token1'))
useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
function LogingOut(){
    localStorage.removeItem('token1')
    navigate('/signin')
}
  return (
    <div className="mt-[80px] max-w-[1200px] p-5 m-auto h-screen flex flex-col gap-5 ">
       
        <button onClick={()=>navigate('/bookings')} className="bg-slate-200 w-fit text-xl hover:bg-slate-200 transition-all rounded-2xl px-5">Booking deails</button>
        {token ?<button onClick={()=>LogingOut()} className="bg-slate-200 w-fit text-xl hover:bg-slate-200 transition-all rounded-2xl px-5">LogOut</button> : <button onClick={()=>LogingOut()} className="bg-slate-200 w-fit text-xl hover:bg-slate-200 transition-all rounded-2xl px-5">Log In</button> }
    </div>
  )
}
