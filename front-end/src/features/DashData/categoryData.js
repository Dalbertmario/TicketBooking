import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function  categoryData(params) {
const api = import.meta.env.VITE_API_BACKEND
    try{
      const responce = await fetch(`${api}/catgeory/${params}`)

      if(!responce.ok){
        // const errortext = await responce.json()
        // toast.error(errortext.message)
      }
       
      const data = await responce.json()
      return data?.data
    }catch(Err){
        console.log(Err.message)
    }
}

function UseCategoryData(parmas){
    const {data,isLoading} = useQuery({
        queryKey:['category',parmas],
        queryFn:()=>categoryData(parmas)
    })
    return {data,isLoading}
}

export default UseCategoryData