import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function DashData() {
const api = import.meta.env.VITE_API_BACKEND
    try{
        const responce = await fetch(`${api}/events`)
        if(!responce.ok){
            const ErrText = await responce.json()
            toast.error(ErrText)
        }
        const data = await responce.json()
        return data?.data
    }catch(Er){
       console.log(Er.message)
    }
}

function UseDashData(){
    const {data:dashData,isLoading} = useQuery({
        queryKey:['dashdata'],
        queryFn:DashData
    })
    return {dashData,isLoading}
}

export default UseDashData