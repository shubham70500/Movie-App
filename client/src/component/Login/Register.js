import axios from "axios";
import React, { useState } from "react";
import "./Register.css";
import  {useNavigate} from  "react-router-dom"
import { Toaster, toast } from 'react-hot-toast';

function Register() {

  let navigate=useNavigate();
  let [err,setErr]=useState({})

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    dob: "",
  });
  
  function handleUser(event) {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(e){

        e.preventDefault();
       // console.log(user)
        let Validateerror=validate(user)
        if(Object.keys(Validateerror).length===0){
          let res= await axios.post("http://localhost:4000/user-api/user",user)
          //console.log(res)
          if(res.status===201){
            toast.success("Registeration Successfull",{duration:1500})
              setTimeout(() => {
                navigate("/login")
            }, 3000)
          }
          else if(res.status===203){
             setErr('')
            toast.error(res.data.message);
          }
          else {   
              navigate("/error")
            }
        }
        else{
           setErr(Validateerror)
        }
    
}
  return (
    <div className="register-container">
      <Toaster/>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={handleUser}
          placeholder="Enter your name"
        />
        {err.username && <p className="userErr">{err.username}</p>}
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleUser}
          placeholder="Enter your password"
        />
        {err.password && <p className="userErr">{err.password}</p>}
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleUser}
          placeholder="Enter your Email"
        />
        {err.email && <p className="userErr">{err.email}</p>}
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          onChange={handleUser}
          placeholder="Enter your Date of Birth"
        />
        {err.dob && <p className="userErr">{err.dob}</p>}
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;

function validate(user) {
  let er = {};
  if (!user.username) {
    er.username = "Username is Required";
  }
  if (!user.password) {
    er.password = "Password is Required";
  }
  if (!user.email) {
    er.email = "Email is Required";
  }
  if (!user.dob) {
    er.dob = "Date of Birth is Required";
  }
  return er;
}
