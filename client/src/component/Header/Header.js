import React, {  useEffect, useState } from "react"
import "./Header.css"
 import logo from "../image/logo.png"
import { Link, useNavigate, } from "react-router-dom"



const Header = () => {
  let navigate=useNavigate()

  const [Mobile, setMobile] = useState(false)
  const [isLoggedIn,setIsloggedIn]=useState(false)

  function mobileMenu(){
    setMobile(!Mobile)
  }

 
  
  const checkedLoggedIn = () => {
    //console.log("Inside checkedLoggedIn");
    let status = localStorage.getItem("status");
    //console.log("Status:", status);
    setIsloggedIn(status === "true");
  };

      const handleLogout=()=>{
     
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.setItem("status",false)
        // window.location.href="/login"
        navigate("/login")
    
      }
    
      useEffect(() => {
        //console.log("Inside useEffect");
        checkedLoggedIn();
      }, [handleLogout]);
  

  return (
    <>
      <header>
        <div className='container flex'>
            <div className='logo'>
              <Link to="/"><img src={logo} alt='Logo' /></Link>
            </div>
            <nav className='flexSB'>
            
            <ul className={Mobile ? "navMenu-list" : "flexSB"}>
              <li>
              <Link className="a" to="/">Home</Link>
              </li>
              <li>
              <Link className="a" to="/movie">Movie</Link>
              </li>
              <li>
              <Link className="a" to="/trending">Trending</Link>
              </li>
              <li>
              <Link className="a" to="/about">About</Link>
              </li>
              {
                isLoggedIn===true ? <li>
                <button className="login-btn"><Link className="login-content" onClick={handleLogout} >Logout</Link></button>
                </li> : <li>
                <button className="login-btn"><Link className="login-content" to="/login">Login</Link></button>
              </li>
              }
              
            </ul>
            
            <button className='toggle' onClick={mobileMenu}>
              {Mobile ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>}
            </button>
          </nav>
        </div>
      </header>
      
    </>
  )
}

export default Header