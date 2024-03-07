import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { userLoginObj } from '../../contextApi/UserContext';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

function Login() {

  let navigate=useNavigate();
  let [err,setErr]=useState({})
  let {handleUserLogin}=useContext(userLoginObj)
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
    let Validateerror=validate(user)
    if(Object.keys(Validateerror).length===0){
    let isLoginSuccess = await handleUserLogin(user);
    if (isLoginSuccess==="User-login") {
      //setLoginStatus(true)
      toast.success("Login Successfull",{duration:1500})
      setTimeout(() => {
        navigate('/');
        // window.location.href="/"
    }, 3000)
       
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
};
  return (
    <div className='login-container'>
      <Toaster/>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name='username' onChange={handleUser} placeholder="Enter your name" />
        {err.username && <p className="userErr">{err.username}</p>}
        <label>Password</label>
        <input type="password" name='password' onChange={handleUser} placeholder="Enter your password"  />
        {err.password && <p className="userErr">{err.password}</p>}
        <button>Login</button>
      </form>
        
        <div>New User, <Link className='register' to="/login/register"><span> Sign up </span></Link>Here, Click here <Link className='register' to="/login/admin"><span> Admin </span></Link> </div> 
        
    </div>
  )
}
export default Login

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
