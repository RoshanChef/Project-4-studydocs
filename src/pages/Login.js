import React from 'react'
import Template from '../components/Template'
import image from '../login.webp'

export default function Login({ setIsLoggedIn }) {
  return (
    <Template
      title='Welcome Back'
      des1='Build skills for today, tomorrow and move forward'
      des2='Education to future-proof your career'
      image={image}
      formtype='logIn'
      setIsLoggedIn={setIsLoggedIn}
    >

    </Template>
  )
}
