import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { toast } from 'react-hot-toast'

export default function LoginForm({ setIsLoggedIn }) {

  const [formData, setFromdata] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  let Navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success('Login Success');
    let finalData = {...formData}; 
    console.log(finalData);
    Navigate('/dashboard');
  }

  function changeHandler(event) {
    let { name, value } = event.target;
    setFromdata((prev) => {
      return { ...prev, [name]: value };
    })
  }


  return (
    <div >
      <form onSubmit={submitHandler} className='flex  flex-col gap-y-4  mt-4 w-full max-w-[400px] '>
        <label className='w-full max-w-max-[400px]'>
          <p>Email Address <sup className='text-red-500'>*</sup></p>
          <input
            placeholder='Enter Your Email' required
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className='bg-gray-800  text-[.775rem] rounded-[.5rem] w-full p-[.6rem] text-white '
            onChange={changeHandler} type="email" name="email" value={formData.email} />
        </label>
        <label className='relative '>
          <p>Enter Password <sup className='text-red-500'>*</sup></p>
          <input required
            placeholder='Enter Your password'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className='bg-gray-800  text-[.775rem] rounded-[.5rem] w-full p-[.6rem] text-white '
            onChange={changeHandler} type={showPassword ? 'text' : "password"}
            name="password" value={formData.password} />
          <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[2.3rem] z-[10] cursor-pointer text-white' >
            {showPassword ? (<AiOutlineEye />) : <AiOutlineEyeInvisible />}
          </span>
          <Link to="#" >
            <p className='text-green-400 text-sm absolute right-0'>Forgot Password</p>
          </Link>
        </label>
        <button
          className="mt-9 text-black rounded-[8px] bg-yellow-400 py-[8px] px-[12px] font-medium text-richblack-900"
          type='submit'>Sign In</button>
      </form>
    </div >
  )
}
