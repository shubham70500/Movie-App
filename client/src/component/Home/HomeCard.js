import React, {useState,useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import "./HomeCard.css"
import axios from 'axios';
import { userLoginObj } from "../../contextApi/UserContext";
function HomeCard(props) {

    let {movie,Trend,Action,setMovie,setAction,setTrend}=useContext(userLoginObj)
//    let [movie, setMovie] = useState([]);
//    let [Trend,setTrend]=useState([]);
//    let [Action,setAction]=useState([])

    useEffect(()=>{
        const fetchData =async()=>{
    
          try{
            let res=await axios.get("http://localhost:4000/movie-api/trending")
            setTrend(res.data[0])
            let res1=await axios.get("http://localhost:4000/movie-api/movie")
            setMovie(res1.data[0])
            const res2=await axios.get("http://localhost:4000/movie-api/action")
            setAction(res2.data[0])

         }
         catch(error){
           alert(error)
         }
        }
        fetchData()
      },[])

  return (
   <div className='cont'>
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