import React, { useContext, useState } from 'react'
import { userLoginObj } from '../../contextApi/UserContext';
import { useNavigate } from 'react-router-dom';

function Admin() {

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
    
    let isLoginSuccess = await handleAdminLogin(adminUser);
    if (isLoginSuccess) {
     
        navigate('/login/admin/moviedata');
    }
    else{
        alert("Invalid Admin")
    }
  }
 
  return (
    <div className='login-container'>
      <h2>Admin</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name='username' onChange={handleUser} placeholder="Enter your name" />
        <label>Password</label>
        <input type="password" name='password' onChange={handleUser} placeholder="Enter your password" />
        <button>Admin</button>
      </form>   
    </div>
  )
}


export default Admin