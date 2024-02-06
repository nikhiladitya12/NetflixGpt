import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {

const [isSignInForm,setIsSignInForm]=useState(true);


const toggleSignInForm=()=>{

setIsSignInForm(!isSignInForm);

}

  return (
    <div className='w-screen h-screen'>

<Header/>

<div className='w-full h-full'>
<img alt='netflix-bg-img' src='https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg' className='object-cover w-full h-full'/>
</div>




<form className='absolute p-12 bg-black w-3/12 top-[50%]  left-[50%]  translate-x-[-50%] translate-y-[-50%]  mx-auto  text-white bg-opacity-80'>

<h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
{!isSignInForm && <input type='text' name='name' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
<input type='text' name='email' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
<input type='password' name='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
<button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Register"}</button>
<p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New To Netflix?":"Already registered?"} {isSignInForm ?"Sign Up Now" : "Sign In Now"}</p>
</form>









    </div>
  )
}

export default Login