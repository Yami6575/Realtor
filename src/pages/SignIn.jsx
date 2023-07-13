import React from 'react'
import { useState } from 'react'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom';


export default function SignIn() {
  const[showPassword,setShowPassword]=useState(true)
  const[formData,setFormData]=useState({
    email:"",
    password:""
  });
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,[e.target.id]:e.target.value
    })

    ) 

  }
  
  const{email,password}=formData;
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign-In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/photo-1575908539614-ff89490f4a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80" alt="" className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20' >
          <form >
            <input type="email"  id='email' value={email} onChange={onChange} placeholder='email address' className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />
            <div className='relative'>
            <input type={showPassword?'text':'password'}  id='password' value={password} onChange={onChange} placeholder='password' className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />
            {showPassword?<AiFillEyeInvisible onClick={()=>setShowPassword(false)} className='absolute right-1 top-4 text-xl cursor-pointer'/>:<AiFillEye onClick={()=>setShowPassword(true)} className='absolute right-1 top-4 text-xl cursor-pointer'/>}
            </div>
            <div className='flex justify-between'>
               <div className='flex'>
                <p>Don't have a account?</p>
                <Link to="/sign-up" className='text-red-400 hover:text-red-700 hover:font-semibold transition duration-200'>Register</Link>
                </div>  
                <div>
                <Link to="/forgot-password">Forgot Password</Link>
                </div>
             
            </div>
             
          </form>

        </div> 
      </div>
    </section>
  )
}
