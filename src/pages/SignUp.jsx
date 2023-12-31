import React from 'react'
import { useState } from 'react'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import {getAuth,createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import {db} from "../firebase"
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
export default function SignUp() {
  const[showPassword,setShowPassword]=useState(true)
  const[formData,setFormData]=useState({
    name:"", 
    email:"",
    password:""
  });
  const navigate=useNavigate()
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,[e.target.id]:e.target.value
    })

    ) 

  }
  
  
  const{name,email,password}=formData;
  async function onSubmit(e){
    e.preventDefault() 
    try {
      const auth=getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth,email,password)
      const user =userCredential.user;
      navigate("/");
      updateProfile(auth.currentUser,{
        displayName:name
        }) 
      const formDataCopy={...formData};
      delete formDataCopy.password;

      formDataCopy.timestamp=serverTimestamp()
      await setDoc(doc(db,"users",user.uid),formDataCopy)
      

      

    } catch (error) {
      toast.error("something went wrong with the registration")
    }
  }
  
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign-Up</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/photo-1575908539614-ff89490f4a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80" alt="" className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20' >
          <form onSubmit={onSubmit} >
            <input type="name"  id='name' value={name} onChange={onChange} placeholder='name' className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />
            <input type="email"  id='email' value={email} onChange={onChange} placeholder='email address' className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />
            <div className='relative'>
            <input type={showPassword?'text':'password'}  id='password' value={password} onChange={onChange} placeholder='password' className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />
            {showPassword?<AiFillEyeInvisible onClick={()=>setShowPassword(false)} className='absolute right-1 top-4 text-xl cursor-pointer'/>:<AiFillEye onClick={()=>setShowPassword(true)} className='absolute right-1 top-4 text-xl cursor-pointer'/>}
            </div>
            <div className='flex justify-between'>
               <div className='flex'>
                <p>Have an account</p>
                <Link to="/sign-in" className='text-red-400 hover:text-red-700 hover:font-semibold transition duration-200'>sign-in</Link>
                </div>  
                <div>
                <Link to="/forgot-password" className='text-blue-400  hover:text-blue-700 hover:font-semibold transition duration-200'>Forgot Password</Link>
                </div>
             
            </div>
            <button className='w-full bg-blue-600 text-white mt-8 px-3 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 easy-in-out hover:shadow-lg' type='submit' >Sign-up</button>
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
