import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import UseSignIn from '../features/account/signIn'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function SignPage() {
const {register,handleSubmit} = useForm()
const {mutate} = UseSignIn()
const [isLoading,setIsloading] = useState()
const token = JSON.parse(localStorage.getItem('token1'))

function handleForm(data){
   mutate(data)
}
const navigate = useNavigate()
function handleNavigate(){
    navigate('/')
}

useEffect(() => {
  async function tokenAuth() {
    const api = import.meta.env.VITE_API_BACKEND;
    setIsloading(true);
    try {
      const response = await fetch(`${api}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        toast.error('Unable to login');
        return;
      }

      handleNavigate();
    } catch (error) {
      toast.error('Network error during authentication');
    } finally {
      setIsloading(false);
    }
  }

  if (token) {
    tokenAuth();
  }
}, [navigate, token]);

  return (
    <form onSubmit={handleSubmit(handleForm)} className=" bg-gradient-to-r from-blue-500 to-purple-600 h-screen">
      <div className="xl:max-w-[800px] m-auto p-3 relative top-[200px]">
      <div className="flex flex-col gap-5 xl:w-[70%] md:w-[70%] sm:w-[80%] w-[705] m-auto bg-slate-200 p-5 shadow-red-700 rounded-lg">
      <h1 className="heading ">Sign In</h1>
      <input  {...register('name')} className='inputForm' type='text' placeholder="username"/>
      <input {...register('password')} className="inputForm" type='password' placeholder="password"/>
      <button className='bntForm'>Sign In</button>
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
  <button disabled={isLoading} onClick={()=>navigate('/signup')} className='text-center text-xs text-blue-700 font-mono'>SIGN UP</button>
      </div>
     </div>
    </form>
  )
}
