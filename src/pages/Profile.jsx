import React, { useContext, useEffect } from 'react'
import { context, server } from '../main'
import Loader from '../components/Loader';


const Profile = () => {
  const {user,loading,}=useContext(context);


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