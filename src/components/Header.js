import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo} from '../utils/constants';


const Header = () => {
const navigate=useNavigate();
const dispatch=useDispatch();
const user=useSelector((store)=> store.user);

const signOutHandler=()=>{

signOut(auth).then(() => {
  // Sign-out successful.

}).catch((error) => {
  // An error happened.
navigate("/error");
});

}

useEffect(()=>{

 const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName,photoURL} = user;
dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
navigate("/browse");
  } else {
    // User is signed out
    dispatch(removeUser());
   navigate("/");
  }
});

// Unsubscribe when component unmount
return ()=>unsubscribe();
},[]);


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

<img className='w-44' src={Logo} alt='netflix-logo'/>

<div className='flex items-center gap-1'>
  <img alt="user-photo"src={user?.photoURL}className='w-12 h-12 rounded-full'/>
  
  <button onClick={signOutHandler} className='font-bold text-white'>(Sign Out)</button>
  </div>
    </div>
  )
}

export default Header