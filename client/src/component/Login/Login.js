import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { userLoginObj } from '../../contextApi/UserContext';
import "./Login.css"
import { useNavigate } from 'react-router-dom';

function Login() {

  let navigate=useNavigate();
  let {handleUserLogin,setLoginStatus}=useContext(userLoginObj)
  let [user,setUser]=useState({
    username:"",
    password:""
  })
  function handleUser(event){
     let name=event.target.name;
     let value=event.target.value;
     setUser({...user,[name]:value})
  }
  let handleSubmit = async (e) => {
    e.preventDefault();
    
    let isLoginSuccess = await handleUserLogin(user);
    if (isLoginSuccess) {
      //setLoginStatus(true)
        navigate('/');
    }
    else{
        alert("Invalid user")
    }
};
  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name='username' onChange={handleUser} placeholder="Enter your name" />
        <label>Password</label>
        <input type="password" name='password' onChange={handleUser} placeholder="Enter your password" />
        <button>Login</button>
      </form>
        
        <div>New User, <Link className='register' to="/login/register"><span> Sign up </span></Link>Here, Click here <Link className='register' to="/login/admin"><span> Admin </span></Link> </div> 
        
    </div>
  )
}
export default Login