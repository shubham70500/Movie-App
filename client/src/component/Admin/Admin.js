import React, { useContext, useState } from 'react'
import { userLoginObj } from '../../contextApi/UserContext';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

function Admin() {
   
  let [err,setErr]=useState({})
   let navigate=useNavigate();
   let {handleAdminLogin}=useContext(userLoginObj)
  let [adminUser,setAdminUser]=useState({
    username:"",
    password:""
  })
  
  const handleUser=(event)=>{
      let name=event.target.name;
      let value=event.target.value;
      setAdminUser({...adminUser,[name]:value})
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    let Validateerror=validate(adminUser)
    if(Object.keys(Validateerror).length===0){
    let isLoginSuccess = await handleAdminLogin(adminUser);
    if (isLoginSuccess==="Admin-login") {
      
      toast.success("Admin Login Successfull")
      setTimeout(() => {
        navigate('/login/admin/moviedata');
    }, 600)
        
    }
    else if(isLoginSuccess==="Axios-error"){
      navigate("/error")
  }
  else{
    setErr("")
    toast.error(isLoginSuccess)
  }
  }
  else{
    setErr(Validateerror)
  }
  }
 
  return (
    <div className='login-container'>
      <Toaster/>
      <h2>Admin</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name='username' onChange={handleUser} placeholder="Enter your name" />
        {err.username && <p className="userErr">{err.username}</p>}
        <label>Password</label>
        <input type="password" name='password' onChange={handleUser} placeholder="Enter your password" />
        {err.password && <p className="userErr">{err.password}</p>}
        <button>Admin</button>
      </form>   
    </div>
  )
}


export default Admin

function validate(user) {
  let er = {};
  if (!user.username) {
    er.username = "Username is Required";
  }
  if (!user.password) {
    er.password = "Password is Required";
  }
  
  return er;
}