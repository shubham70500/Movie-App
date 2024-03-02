import React, { useEffect, useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { userLoginObj } from "../../contextApi/UserContext";
import "./MovieCard.css"
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

function MovieCard() {

  let {MovieList,setMovieList}=useContext(userLoginObj)
  let navigate=useNavigate()

  useEffect(()=>{
    const fetchData =async()=>{

      try{
        let res=await axios.get("http://localhost:4000/movie-api/movieList")

       // console.log(res)
        if(res.request.status===201){
          setMovieList(res.data[0])
        }
        else{
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
    <div className='MovieList'>
      <Toaster/>
   {
    MovieList.map((movie,index)=>(
        <Link key={index} to={`/movie/movieList/${index}`} className="card-item" >
            <img src={movie.cover} alt={movie.name}/>
            <div className='card-content'>
            <h2>{movie.name}</h2>
            <p>{movie.time}</p>
            <button >View More</button> 
            </div>
        </Link>
    ))
   }
   </div>
   
  )
}

export default MovieCard