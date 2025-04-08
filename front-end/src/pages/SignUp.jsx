import React from 'react'
import { useForm } from 'react-hook-form'
import UseSignUp from '../features/account/signUp'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
const {register,handleSubmit,watch,formState:{errors}} = useForm()
const {mutate,isLoading} = UseSignUp()
const password = watch('password')
const navigate = useNavigate()
function handleForm(data){
   mutate(data)
}

  return (
    <form onSubmit={handleSubmit(handleForm)} className=" bg-gradient-to-r from-blue-500 to-purple-600 h-screen">
      <div className="xl:max-w-[800px] m-auto p-3 relative top-[200px]">
      <div className="flex flex-col gap-5 xl:w-[70%] md:w-[70%] sm:w-[80%] w-[705] m-auto bg-slate-200 p-5 shadow-red-700 rounded-lg">
      <h1 className="heading ">Create account</h1>
      <input {...register('name')} className='inputForm' type='text' placeholder="username" required/>
      <input {...register('email')} className="inputForm" type='email' placeholder="email" required/>
      <input {...register('password')} className="inputForm" type='password' placeholder="password" required/>
      <input {...register('rePassword',{validate : (value)=> value === password || 'Password do not matach'})} className="inputForm" type='password' placeholder="Re-type password" required/>
      <p>{errors.rePassword && <p className='text-center text-red-400 font-mono'>{errors.rePassword.message}</p>}</p>
      <button className='bntForm'>Sign Up</button>
      <p className='font-mono text-center text-xs'>
    By signing in, you agree to our&nbsp;
    <a className="text-blue-500 hover:underline">
      Terms of Service
    </a>
    &nbsp;and&nbsp;
    <a className="text-blue-500 hover:underline">
      Privacy Policy
    </a>.
    <p className="text-center sm:text-xs">
    © 2025 YourCompanyName. All rights reserved.
  </p>
  </p>
  <button onClick={()=>navigate('/signin')} className='text-blue-800 text-xs text-center'>SIGN IN</button>
      </div>
     </div>
    </form>
  )
}
