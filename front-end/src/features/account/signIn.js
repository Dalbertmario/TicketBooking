import { useMutation } from "@tanstack/react-query";

async function SignIn(params) {
const api = import.meta.env.VITE_API_BACKEND 
    try{
      const responce = await fetch(`${api}/login`,{
        method:'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(params)
      })

      if(!responce.ok){
        const errorText = await responce.text()
        token.error(errorText)
        throw new Error(errorText)
      }
      const token = await responce.json()
      console.log(token)
      localStorage.setItem('token1', JSON.stringify(token.token))
    }catch(er){
     throw new console.error(er.message 
     );
     
    }
}

function UseSignIn(){
    const {mutate} = useMutation({
        mutationFn : (da)=>SignIn(da)
    })
  return {mutate}
}

export default UseSignIn;