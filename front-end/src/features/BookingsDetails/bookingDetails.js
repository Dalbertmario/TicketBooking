import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function BookingDetails(params) {
const api = import.meta.env.VITE_API_BACKEND
    try{
        const responce = await fetch(`${api}/events/${params}`)
        if(!responce.ok){
            const errorText = await responce.json()
            toast.success(errorText.message)
        }
        const data = await responce.json()
        return data?.data
    }catch(Err){
          console.log(Err)
    }
}

function UseBookingDetails(params){
    const {data,isLoading} = useQuery({
        queryKey:['bookingDetails',params],
        queryFn:()=>BookingDetails(params)
    })
    return {data,isLoading}
}

export default  UseBookingDetails;