import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

async function SignUp(params){
const api = import.meta.env.VITE_API_BACKEND
 
       const responce = await fetch(`${api}/signup`,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(params)
       })
       if(!responce.ok){
        const text = await responce.json()
        toast.error(text.message)
       }
}

function UseSignUp(){
const navigate = useNavigate()
    const {mutate,isLoading} = useMutation({
        mutationFn : (da)=>SignUp(da),
        onSuccess:()=>{
            toast.success('Account created succesfully')
            navigate('/')
        }
    })
    return {mutate,isLoading}
}

export default UseSignUp;