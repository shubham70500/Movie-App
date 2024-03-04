import React, { useState } from "react";
import "./Moviedata.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';

function MovieData() {
  let navigate = useNavigate();
  let [err,setErr]=useState({})
  let [data, setData] = useState({

    name: "",
    rating: "",
    time: "",
    desc: "",
    starring: "",
    genres: "",
    date: "",
    tags: "",
    cover: "",
    video: "",
  });
  let [category, setCategory] = useState({
    category: "",
  });
  const handleCategory = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setCategory({ ...category, [name]: value });
  };
  const handleUser = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // get token from local/session storage
    let token = localStorage.getItem("admintoken");

    // // add token to the header of request object
    let axiosWithToken = axios.create({
      baseURL: "http://localhost:4000",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let ValidateError=validate({...data,category:category.category})

    if(Object.keys(ValidateError).length===0){

    let res = await axiosWithToken.post(
      `http://localhost:4000/movie-api/${category.category}`,
      data
    );
   // console.log(res);
   // console.log(res.response.request.status)
    if (res.status === 201) {

      toast.success("Movie Data created",{duration:1500});

      setTimeout(() => {
        navigate("/");
    }, 3000)
      
    } 

    else if(res.status===200) {
      navigate("/error")
      
    }
    else{

      toast.error("Admin  Logged Out , Please Login first",1500);

      setTimeout(() => {
        navigate("/login/admin");
    }, 3000)
    }
  }
  else{
    setErr(ValidateError)
  }
  };
  return (
    <>
      <div className="movie-container">
        <Toaster/>
        <h2>Movie Details</h2>
        <form onSubmit={handleSubmit}>
          
          <label>Select Category</label>
          <select name="category" onChange={handleCategory}>
            <option>Select One...</option>
            <option value="movie">Movies</option>
            <option value="movieList">MovieList</option>
            <option value="trending">Trending</option>
            <option value="upcoming">Upcoming</option>
            <option value="action">Action</option>
          </select>

          {err.category && <p className="userErr">{err.category}</p>}

          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            onChange={handleUser}
            placeholder="Enter movie name"
            
          />

          {err.name && <p className="userErr">{err.name}</p>}

          <label>Rating</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="10"
            onChange={handleUser}
            placeholder="Enter your Rating"
            
          />
          {err.rating && <p className="userErr">{err.rating}</p>}

          <label>Duration</label>
          <input
            type="text"
            name="time"
            onChange={handleUser}
            placeholder="Enter Duration"
            
          />

          {err.time && <p className="userErr">{err.time}</p>}

          <label>Description</label>
          <input
            type="text"
            name="desc"
            onChange={handleUser}
            placeholder="Enter Description"
            
          />

          {err.desc && <p className="userErr">{err.desc}</p>}

          <label>Starring</label>
          <input
            type="text"
            name="starring"
            onChange={handleUser}
            placeholder="Enter Starring"
            
          />

          {err.starring && <p className="userErr">{err.starring}</p>}

          <label>Genres</label>
          <input
            type="text"
            name="genres"
            onChange={handleUser}
            placeholder="Enter Genres"
            
          />

          {err.genres && <p className="userErr">{err.genres}</p>}

          <label>Tags</label>
          <input
            type="text"
            name="tags"
            onChange={handleUser}
            placeholder="Enter Tags"
            
          />

          {err.tags && <p className="userErr">{err.tags}</p>}

          <label>Poster Link</label>
          <input
            type="text"
            name="cover"
            onChange={handleUser}
            placeholder="Enter Image Link"
            
          />

          {err.cover && <p className="userErr">{err.cover}</p>}

          <label>Release Date</label>
          <input
            type="date"
            name="date"
            onChange={handleUser}
            placeholder="Enter Release Data"
            
          />

          {err.date && <p className="userErr">{err.date}</p>}

          <label>Video Link</label>
          <input
            type="text"
            name="video"
            onChange={handleUser}
            placeholder="Enter Video Link"
            
          />

          {err.video && <p className="userErr">{err.video}</p>}

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default MovieData;


function validate(user) {
  let er = {};
  if(!user.category){
    er.category = "Movie Category is Required";
  }
  if (!user.name) {
    er.name = "Movie Name is Required";
  }
  if (!user.rating) {
    er.rating = "Rating is Required";
  }
  if (!user.time) {
    er.time = "Duration is Required";
  }
  if (!user.desc) {
    er.desc = "Description is Required";
  }
  if (!user.starring) {
    er.starring = "Starring is Required";
  }
  if (!user.genres) {
    er.genres = "Genres is Required";
  }
  if (!user.date) {
    er.date = "Release Date is Required";
  }
  if (!user.tags) {
    er.tags = "Tags  Required";
  }
  if (!user.cover) {
    er.cover = "Poster Link is Required";
  }
  if (!user.video) {
    er.video = "Trailer Link is Required";
  }

  
  return er;
}