import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo, SUPPORTED_LANG} from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
const navigate=useNavigate();
const dispatch=useDispatch();
const user=useSelector((store)=> store.user);
const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);


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

const gptSearchHandler=()=>{
//ToggleGptSearch
dispatch(toggleGptSearchView())
}

const handleLanguageChange=(e)=>{
dispatch(changeLanguage(e.target.value))
}



  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

<img className='w-44' src={Logo} alt='netflix-logo'/>

{user && (<div className='flex items-center gap-1'>
{showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
  {SUPPORTED_LANG.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
  
  </select>}


<button className='py-2 px-4 m-2 bg-purple-800 mx-4 my-2 text-white rounded-lg cursor-pointer' onClick={gptSearchHandler} >{showGptSearch ?"Homepage":"GPT Search"}</button>

  <img alt="user-photo"src={user?.photoURL}className='w-12 h-12 rounded-full'/>
  
  <button onClick={signOutHandler} className='font-bold text-white'>(Sign Out)</button>
  </div>)}
    </div>
  )
}

export default Header