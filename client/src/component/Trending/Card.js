import React, {useEffect,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { userLoginObj } from "../../contextApi/UserContext";
import "./Card.css"
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

function Card(props) {
    
  let {Trend,setTrend,Upcome,setUpcome}=useContext(userLoginObj)
  let navigate=useNavigate("/error")

    useEffect(()=>{
        const fetchData =async()=>{
    
          try{

            let res=await axios.get("http://localhost:4000/movie-api/trending")
            
            let res1=await axios.get("http://localhost:4000/movie-api/upcoming")
           
          //console.log(res1)
            if(res.request.status===201 && res1.request.status===201){
              setTrend(res.data[0])
              setUpcome(res1.data[0])
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
  <div className='card'>
      <Toaster/>
   {
    props.type==="trending"? (
    Trend.map((movie,index)=>(
        <Link key={index} to={`/movie/trend/${movie.id}`} className="card-item" >
            <img src={movie.cover} alt={movie.name}/>
            <div className='card-content'>
            <h2>{movie.name}</h2>
            <p>{movie.time}</p>
            <button >View More</button> 
            </div>
        </Link>
    ))):(Upcome.map((movie,index)=>(
      <Link key={index} to={`/movie/upcoming/${movie.id}`} className="card-item" >
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