import React, { useContext, useEffect } from 'react';
import {Link, Navigate} from "react-router-dom";
import { context, server } from '../main';
import { toast } from 'react-hot-toast';
import axios from 'axios';
const Header = () => {

  const {isAuthenticated,setisAuthenticated,loading,setLoading,user,setUser}=useContext(context);


  const logoutHander = async() => {
    setLoading(true)
    


    try {
     const {data}= await axios.get(`${server}/users/logout`,
     {
         withCredentials:true,
       })
   toast.success(data.message);
   setisAuthenticated(false);
      setLoading(false)
  
    } catch (error) {
     toast.error(error.response.data.message)
 
   console.log(error)
   setisAuthenticated(true);
   setLoading(false)
    }
  
    }
 
  return (
    
    <nav className='header'>
        <div>
        <h2>TODO APP</h2>
        </div>
        <article className='nav'>
          <Link className='link' to={"/"}>Home</Link>
          <Link className='link' to={"/profile"}>profile</Link>
          {
            isAuthenticated? <button disabled={loading} onClick={logoutHander} className='link'  >logout</button>:
            <Link className='link' to={"/login"}>login</Link>
          }
         </article>

    </nav>
  )
}

export default Header