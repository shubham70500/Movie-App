import React, { useEffect, useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import { userLoginObj } from "../../contextApi/UserContext";
import "./MovieCard.css"
import axios from 'axios';

function MovieCard() {

  let {MovieList,setMovieList}=useContext(userLoginObj)
 // let [MovieList,setMovieList]=useState([])
  //console.log("list of movies",MovieList)

  useEffect(()=>{
    const fetchData =async()=>{

      try{
        let res=await axios.get("http://localhost:4000/movie-api/movieList")
        setMovieList(res.data[0])
     }
     catch(error){
       alert(error)
     }
    }
    fetchData()
  },[])
  return (
    <div className='MovieList'>
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