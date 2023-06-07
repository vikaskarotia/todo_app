import React, { useContext, useEffect } from 'react'
import { context, server } from '../main'
import Loader from '../components/Loader';
import axios from 'axios';

const Profile = () => {
  const {user,loading,setUser}=useContext(context);


  return (
    
       (loading?(<Loader/>):
      
    <div>
    <h1>{user?.name}</h1>
    <p>{user?.email}</p>
  </div>
      )
  
  )
}

export default Profile