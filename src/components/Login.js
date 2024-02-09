import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';


const Login = () => {

const [isSignInForm,setIsSignInForm]=useState(true);
const [errorMessage,setErrorMessage]=useState(null);

const dispatch=useDispatch();
const name=useRef(null);
const email=useRef(null);
const password=useRef(null);


const toggleSignInForm=()=>{
setIsSignInForm(!isSignInForm);
}

const buttonClickHandler=()=>{

//Validate the form data



const message=checkValidData(email.current.value,password.current.value);

setErrorMessage(message);

if(message) return;


//Sign in sign up logic

if(!isSignInForm){
    //Sign up logic

    createUserWithEmailAndPassword(
    auth, email.current.value, password.current.value
    )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

updateProfile(user, {
  displayName: name.current.value, 
  photoURL:USER_AVATAR,
}).then(() => {
  // Profile updated!

 const {uid,email,displayName,photoURL} = auth.currentUser;
   
dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
}).catch((error) => {
 setErrorMessage(error.message);
});
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
 setErrorMessage(errorCode + "-" + errorMessage);
  });
}else{
//Sign in logic
signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
  const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-" + errorMessage)
  });



}


}

  return (
    <div className='w-screen h-screen'>

<Header/>

<div className='w-full h-full'>
<img alt='netflix-bg-img' src={BG_URL} className='object-cover w-full h-full'/>
</div>




<form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 bg-black w-3/12 top-[50%]  left-[50%]  translate-x-[-50%] translate-y-[-50%]  mx-auto  text-white bg-opacity-80'>

<h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
{!isSignInForm&&(<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
<input ref={email} type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
<input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
<p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
<button onClick={buttonClickHandler} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Register"}</button>
<p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New To Netflix?":"Already registered?"} {isSignInForm ?"Sign Up Now" : "Sign In Now"}</p>
</form>









    </div>
  )
}

export default Login