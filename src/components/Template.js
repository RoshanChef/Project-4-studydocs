import React from 'react'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import frame from '../components/frame.png'
import { FcGoogle } from 'react-icons/fc'

const Template = ({ title, des1, des2, image, formtype, setIsLoggedIn }) => {

    return (
        <div className='flex py-12 w-11/12 max-w-[1160px] justify-evenly mx-auto gap-x-5 gap-y-0 mt-[-2rem] z-[0] text-white'>

            <div className='w-11/12 max-w-[400px]'>
                <div className='font-semibold text-2xl mb-2'>
                    {title}
                </div>
                <div className='mb-2'>
                    <p className='text-slate-400 text-base'>{des1}</p>
                    <p className='text-green-200 text-sm italic'>{des2}</p>

                </div>
                <div className='flex flex-col w-full'>
                    {
                        formtype === "signup" ?
                            (< SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                            (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                    }
                </div>
                <div className='flex  w-full items-center my-4 gap-x-2'>
                    <div className='h-[1px] w-full bg-gray-800'></div>
                    <p className='text-white'>OR</p>
                    <div className='h-[1px] w-full bg-gray-800'></div>
                </div>
                <button className='text-white items-center gap-2 border-gray-800 p-1 rounded-[8px] gap-x-2 mt-5 border flex justify-center w-[100%]'>
                    <FcGoogle />
                    <p >
                        Sign Up with Google
                    </p>
                </button>
            </div>

            <div className='relative  w-10/12 max-w-[20rem]'>
                <img
                    src={frame} alt='Not Found'
                    width={558}
                    height={504}
                    loading="lazy" />

                <img src={image} alt='Not Found'
                    className='absolute top-[-.7rem] right-[0.7rem]'
                    width={550} height={504} loading='lazy'
                />
            </div>

        </div>
    )
}

export default Template
