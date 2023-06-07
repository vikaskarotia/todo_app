import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import {Link, Navigate} from "react-router-dom";
import { context, server } from '../main';
import axios from 'axios';


const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const {isAuthenticated,setisAuthenticated,loading,setLoading}=useContext(context);


    
  const submitHander=async(e)=>{
    setLoading(true)
    e.preventDefault()
    try {
  
      console.log(email, password)
      const {data}= await axios.post(`${server}/users/login`,{
           email, password
           
        },{
          headers:{
            "Content-Type":"application/json",
          },
          withCredentials:true,
        })
   
       
    toast.success(data.message);
    setLoading(false)
    setisAuthenticated(true);
     } catch (error) {
    toast.error(error.response.data.message)
   
    setisAuthenticated(false)
    setLoading(false)

    }

 }

 if(isAuthenticated){
  return <Navigate to={"/"} />
 }
  
  return (
    <div >
        <section>
            <form className="login" onSubmit={submitHander}>
            <input value={email} onChange={(e) => setemail(e.target.value)} className='inpt' type="email" placeholder='email' />
            <input value={password} onChange={(e) => setpassword(e.target.value)} className='inpt' type="password" placeholder='password' />
                <button disabled={loading} className='inpt' type='submit'>Login</button>
                <h4 className='btn'>or</h4>
                <Link className='btn' to="/register"> Sing up</Link>
            </form>
        </section>
    </div>
  )
}

export default Login