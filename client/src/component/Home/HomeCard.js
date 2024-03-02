import React, {useState,useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./HomeCard.css"
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { userLoginObj } from "../../contextApi/UserContext";


function HomeCard(props) {

    let {movie,Trend,Action,setMovie,setAction,setTrend}=useContext(userLoginObj)
    let navigate=useNavigate()

    useEffect(()=>{
        const fetchData =async()=>{
    
          try{
            let res=await axios.get("http://localhost:4000/movie-api/trending")
            
            let res1=await axios.get("http://localhost:4000/movie-api/movie")
            
            const res2=await axios.get("http://localhost:4000/movie-api/action")
            
          // console.log("response",res2)
            if(res.request.status===201 && res1.request.status===201 && res2.request.status===201)
            {
                setTrend(res.data[0])
                setMovie(res1.data[0])
                setAction(res2.data[0])
            }
            else
            {
                navigate("/error")
            }
         }
         catch(error){
           toast.error(error)
         }
        }
        fetchData()
      },[])

  return (
   <div className='cont'>
    <Toaster/>
   { props.type==="latest" ? ( movie.map((movie,index)=>(
        <Link key={index} to={`/movie/popular/${index}`} className="movie-card" style={{backgroundImage : `url(${movie.cover})`}}>
            <div className='movie-card-content'>
            <h2>{movie.name}</h2>
            <p>{movie.time}</p>
            <button>View More</button>  
            </div>
        </Link>
    ))) : props.type==="Drama" ? Trend.map((movie,index)=>(
        <Link key={index} to={`/movie/trend/${index}`} className="movie-card" style={{backgroundImage : `url(${movie.cover})`}}>
            <div className='movie-card-content'>
            <h2>{movie.name}</h2>
            <p>{movie.time}</p>
            <button>View More</button>  
            </div>
        </Link>
    )) : Action.map((movie,index)=>(
        <Link key={index} to={`/movie/action/${index}`} className="movie-card" style={{backgroundImage : `url(${movie.cover})`}}>
            <div className='movie-card-content'>
            <h2>{movie.name}</h2>
            <p>{movie.time}</p>
            <button>View More</button>  
            </div>
        </Link>
    ))
   }
    
      
   </div>
  )
}

export default HomeCard