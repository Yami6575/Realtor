import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';


export default function ForgotPassword() {
 
  const[email,setEmail]=useState("")
  function onChange(e){
    setEmail(e.target.value);

     

  }
  
  
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/photo-1575908539614-ff89490f4a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80" alt="" className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20' >
          <form >
            <input type="email"  id='email' value={email} onChange={onChange} placeholder='email address' className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />
           
            <div className='flex justify-between'>
               <div className='flex'>
                <p>Don't have a account?</p>
                <Link to="/sign-up" className='text-red-400 hover:text-red-700 hover:font-semibold transition duration-200'>Register</Link>
                </div>  
                <div>
                <Link to="/sign-in" className='text-blue-400  hover:text-blue-700 hover:font-semibold transition duration-200'>Sign In instead</Link>
                </div>
             
            </div>
            <button className='w-full bg-blue-600 text-white mt-8 px-3 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 easy-in-out hover:shadow-lg' type='submit' >Send Reset Password</button>
          <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
          <p className='text-center font-semibold'>
            OR
          </p>
          </div>
          <OAuth/>
             
          </form>
         

        </div> 

      </div>
    </section>
  )
}
