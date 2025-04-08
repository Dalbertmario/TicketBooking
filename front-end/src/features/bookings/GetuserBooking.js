import { useQuery } from "@tanstack/react-query"
import toast from "react-hot-toast"

async function getuserBooking(){
    const api = import.meta.env.VITE_API_BACKEND
    const token = JSON.parse(localStorage.getItem('token1'))
    console.log(token)
    try{
      const responce  = await fetch(`${api}/my-bookings`,{
        method:'GET',
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
     if(!responce.ok){
        const errorText = await responce.json()
        toast.error(errorText.message)
     }

     const data  = await responce.json()
     return data?.data
    }catch(Err){
      console.log(Err.message)
    }
}

function UseGetBookingData(){
    const {data,isLoading} = useQuery({
        queryKey:['bookings'],
        queryFn:getuserBooking
    })
    return {data,isLoading}
}

export default UseGetBookingData;