import React, { useState } from "react"
import "./Header.css"
 import logo from "../image/logo.png"
import { Link } from "react-router-dom"


const Header = () => {
  const [Mobile, setMobile] = useState(false)

  function mobileMenu(){
    setMobile(!Mobile)
  }
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src={logo} alt='Logo' />
            </div>
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
              <li>
              <Link className="a" to="/login">Login</Link>
              </li>
             
            </ul>
            <button className='toggle' onClick={mobileMenu}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
      
    </>
  )
}

export default Header