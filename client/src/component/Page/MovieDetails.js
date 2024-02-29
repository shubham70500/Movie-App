import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userLoginObj } from "../../contextApi/UserContext";
import CommentSection from "./CommentSection";
import "./MovieDetails.css";

function MovieDetails() {
  const { movie, Trend, Action, MovieList, Upcome,loginStatus } = useContext(userLoginObj);
  const { type, index } = useParams();
  let [isPlay,setIsPlay]=useState(false);
  let navigate=useNavigate();
  // get the movie index from the url parameter
  const selectedMovie =
    type === "trend"
      ? Trend[index]
      : type === "popular"
      ? movie[index]
      : type === "action"
      ? Action[index]
      : type === "upcoming"
      ? Upcome[index]
      : MovieList[index];

  if (!selectedMovie) {
    return <div>No movie found</div>;
  }
 const handleTrailer=()=>{
  if(loginStatus)
  {
     setIsPlay(true);
  }
  else{
    alert("user not Login , Please Login !!")
    navigate("/login")
  }
 }
 // console.log(movie);
  return (
    <div className="movie-details">
      <div className="details-section">
        <div className="header">
          <h3>{selectedMovie.name}</h3>
        </div>

        <div className="info-section">
          <p className="info-label">Rating:</p>
          <p>{selectedMovie.rating}</p>
        </div>

        <div className="info-section">
          <p className="info-label">Duration:</p>
          <p>{selectedMovie.time}</p>
        </div>

        <div className="info-section">
          <p className="info-label">Genres:</p>
          <p>{selectedMovie.genres}</p>
        </div>

        <div className="info-section">
          <p className="info-label">Starring:</p>
          <p>{selectedMovie.starring}</p>
        </div>

        <div className="info-section">
          <p className="info-label">Description:</p>
          <p>{selectedMovie.desc}</p>
        </div>

        <div className="info-section">
          <p className="info-label">Tags:</p>
          <p>{selectedMovie.tags}</p>
        </div>

        <div className="info-section">
          <p className="info-label">Release Date:</p>
          <p>{selectedMovie.date}</p>
        </div>

        <button  onClick={handleTrailer} className="watch-now-btn">
          {
            isPlay ? <a href={selectedMovie.video} rel="noreferrer" target="_blank">
            Watch Trailer
          </a> :"Watch Trailer"
          } 
        </button>
        <CommentSection movieId={selectedMovie.id} />
      </div>
      <div className="image">
        <img src={selectedMovie.cover} alt={selectedMovie.name} />
      </div>
    </div>
  );
}

export default MovieDetails;
