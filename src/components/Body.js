import React, { useEffect } from 'react'
import Login from './Login'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import GPTSearchCompnent from './GPTSearchCompnent'



const Body = () => {



const appRouter = createBrowserRouter(
[{
  path:'/',
  element:<Login/> 
},
{
path:'/browse',
element:<Browse/>
},


]
)



  return (
    <div>
<RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body