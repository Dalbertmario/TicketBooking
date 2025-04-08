import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function  YouMayLike() {
const api = import.meta.env.VITE_API_BACKEND

    try{
       const responce = await fetch(`${api}/events`)
       if(!responce.ok){
        const errorText = await responce.json()
        toast.error(errorText.message)
       }
       const data = await responce.json()
       return data.data.slice(0,2)
    }catch(Err){
        console.log(Err.message)
    }
}

function UseMayLike(){
    const {data,isLoading} = useQuery({
        queryKey:['MayLike'],
        queryFn:YouMayLike
    })
    return {data,isLoading}
}

export default UseMayLike