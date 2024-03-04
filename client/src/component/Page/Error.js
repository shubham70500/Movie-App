import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css"

function Error() {
  return (
    <>
    <div>
    <p className='para-1'>Oops! Something went wrong in the Server</p>
    <p className='para-2'>Please try again later</p>
    <button className='button' ><Link className='btn' to="/">Home</Link></button>
    </div>
    </>
    
  )
}

export default Error