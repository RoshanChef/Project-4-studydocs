import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import toast from 'react-hot-toast';

export default function Navbar(props) {


    let isLoginIn = props.isLoginIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex text-white justify-evenly items-center w-11/12 max-w-[1160px] py-4 mx-auto z-[1]'>
            <Link to='/'>
            <img src={logo} className='w-[10vw]' alt='logo' loading='lazy'></img>
            </Link>
            <div>
                <ul className='flex gap-x-3'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                </ul>
            </div>
            <div className='flex gap-3 text-gray-300 mx-2 items-center'>
                {
                    !isLoginIn &&
                    <Link to='/login'>
                        <button className='bg-slate-700 py-[5px] rounded px-[12px]'>Login</button>
                    </Link>
                }
                {
                    !isLoginIn &&
                    <Link to='/signup'>
                        <button className='bg-slate-700 py-[5px] rounded px-[12px]'>Signup</button>
                    </Link>
                }
                {
                    isLoginIn &&
                    <Link to='/'>
                        <button onClick={() => {
                            setIsLoggedIn(false)
                            toast.success('You are LogOut');
                        }}
                        className='bg-slate-700 py-[5px] rounded px-[12px]'>
                            LogOut</button>
                    </Link>
                }
                {
                    isLoginIn &&
                    <Link to='/dashboard'>
                        <button className='bg-slate-700 py-[5px] rounded px-[12px]'>Dashboard</button>
                    </Link>
                }
            </div>

        </div >
    )
}
