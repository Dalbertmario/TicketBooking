import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

async function  newBook(params) {
     const api = import.meta.env.VITE_API_BACKEND
     const token = JSON.parse(localStorage.getItem('token1'))
     if(token){
     const responce = await fetch(`${api}/book/${params.id}`,{
        method:'POST',
        headers: {
            Authorization: `Bearer ${token}`
          },
        body:JSON.stringify(params?.tickets)
     })
     if(!responce.ok){
        const errortext = await responce.json()
        toast.error(errortext.message)
     }
     const data = await responce.json()
     return data;
    }
}

function UseNewBooking(){
const navigate = useNavigate()
    const {mutate,isLoading} = useMutation({
        mutationFn:(da)=>newBook(da),
        onSuccess:()=>{
            toast.success('Ticket booked successfully booked')
          navigate('/bookings')
        }
    })
    return {mutate,isLoading}
}

export default UseNewBooking;