import React, {useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom';
import { userLoginObj } from "../../contextApi/UserContext";
import "./Card.css"
import axios from 'axios';

function Card(props) {
    
  let {Trend,setTrend,Upcome,setUpcome}=useContext(userLoginObj)
    // let [Upcome,setUpcome]=useState([])
    // let [Trend,setTrend]=useState([]);
    useEffect(()=>{
        const fetchData =async()=>{
    
          try{
            let res=await axios.get("http://localhost:4000/movie-api/trending")
            setTrend(res.data[0])
            let res1=await axios.get("http://localhost:4000/movie-api/upcoming")
            setUpcome(res1.data[0])

         }
         catch(error){
           alert(error)
         }
        }
        fetchData()
      },[])

  return (
  <div className='card'>
      
   {
    props.type==="trending"? (
    Trend.map((movie,index)=>(
        <Link key={index} to={`/movie/trend/${index}`} className="card-item" >
            <img src={movie.cover} alt={movie.name}/>
            <div className='card-content'>
            <h2>{movie.name}</h2>
            <p>{movie.time}</p>
            <button >View More</button> 
            </div>
        </Link>
    ))):(Upcome.map((movie,index)=>(
      <Link key={index} to={`/movie/upcoming/${index}`} className="card-item" >
          <img src={movie.cover} alt={movie.name}/>
          <div className='card-content'>
          <h2>{movie.name}</h2>
          <p>{movie.time}</p>
          <button >View More</button> 
          </div>
      </Link>
  )))
   }
   </div>
  )
}

export default Card