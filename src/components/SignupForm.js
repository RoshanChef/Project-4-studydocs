import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

export default function SignupForm({ setIsLoggedIn }) {

  const [formData, setFromdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  function changeHandler(event) {
    let { name, value } = event.target;
    setFromdata((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Please enter same password");
    } else {
      setIsLoggedIn(true);
      toast.success('Sign Up Success');
      let finalData = { ...formData, accountType };
      console.log(finalData);
      navigate('/dashboard');
    }
  }

  const [accountType, setAccountType] = useState("student");

  return (
    <div>
      <div className='flex my-3 gap-x-1 bg-gray-800 max-w-max rounded-full'>
        <button
          className={`${accountType === "student" ? "bg-gray-900 text-white" : "bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        > Student </button>
        <button
          className={`${accountType === "instructor" ? "bg-gray-900 text-white" : "bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        > Instructor </button>
      </div>

      <form onSubmit={submitHandler} className='flex flex-col gap-x-3 gap-y-2'>
        <div className='flex justify-stretch gap-2'>
          <label className='w-full'>
            <p>FirstName<sup className='text-red-500'>*</sup></p>
            <input type="text" name="firstName" required
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='bg-gray-800 text-[.775rem] rounded-[.5rem] w-full p-[.6rem] text-white' value={formData.firstName} placeholder='First Name' onChange={changeHandler} />
          </label>
          <label className='w-full'>
            <p>LastName<sup className='text-red-500'>*</sup></p>
            <input type="text" name="lastName" required
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='bg-gray-800 text-[.775rem] rounded-[.5rem] w-full p-[.6rem] text-white' value={formData.lastName} placeholder='Last Name' onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label>
            <p>Email<sup className='text-red-500'>*</sup></p>
            <input type="email"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              name="email" className='bg-gray-800 text-[.775rem] rounded-[.5rem] w-full p-[.6rem] text-white' value={formData.email} placeholder='Email' onChange={changeHandler} />
          </label>
        </div>
        <div className='flex justify-between gap-3'>
          <label className='relative w-full'>
            <p>Create Password<sup className='text-red-500'>*</sup></p>
            <input
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='bg-gray-800  text-[.775rem] rounded-[.5rem] w-full p-[.6rem] text-white'

              type={showPassword ? 'text' : "password"} name="password" value={formData.password} placeholder='Enter Password' onChange={changeHandler} />
            <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[2.3rem] text-[.775rem] z-[10] cursor-pointer text-white'>  {showPassword ? <AiOutlineEye fontSize='1rem' /> : <AiOutlineEyeInvisible fontSize='1rem' />} </span>
          </label>
          <label className='relative w-full'>
            <p className='text-gray-100 text-[.775rem] mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-red-500'>*</sup></p>
            <input
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='bg-gray-800 rounded-[.5rem] text-[.775rem]  w-full p-[.6rem] text-white' type={showConfirmPassword ? 'text' : "password"} name="confirmPassword" value={formData.confirmPassword} placeholder='Confirm Password' onChange={changeHandler} />
            <span onClick={() => setshowConfirmPassword((prev) => !prev)} className='absolute right-3 top-[2.3rem] text-[.775rem] z-[10] cursor-pointer text-white'>  {showConfirmPassword ? <AiOutlineEye fontSize='1rem' /> : <AiOutlineEyeInvisible fontSize='1rem' />} </span>
          </label>
        </div>

        <button className="mt-7 rounded-[8px] text-black bg-yellow-500 py-[8px] px-[12px] font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  )
}
