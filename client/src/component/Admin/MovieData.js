import React, { useState } from "react";
import "./Moviedata.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MovieData() {
  let navigate = useNavigate();
  let [data, setData] = useState({
    // id: "",
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

    let res = await axiosWithToken.post(
      `http://localhost:4000/movie-api/${category.category}`,
      data
    );
    console.log(res);
    if (res.status === 201) {
      alert("Data created");
      navigate("/");
    } else {
      alert("Admin  Logged Out , Please Login first");
      navigate("/login/admin");
    }
  };
  return (
    <>
      <div className="movie-container">
        <h2>Movie Details</h2>
        <form onSubmit={handleSubmit}>
          
          <label>Select Category</label>
          <select name="category" onChange={handleCategory}>
            <option>Select One...</option>
            <option value="movie">movies</option>
            <option value="movieList">movieLists</option>
            <option value="trending">trendings</option>
            <option value="upcoming">upcomings</option>
            <option value="action">actions</option>
          </select>

          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            onChange={handleUser}
            placeholder="Enter movie name"
            required
          />

          <label>Rating</label>
          <input
            type="number"
            name="rating"
            onChange={handleUser}
            placeholder="Enter your Rating"
            required
          />

          <label>Duration</label>
          <input
            type="text"
            name="time"
            onChange={handleUser}
            placeholder="Enter Duration"
            required
          />

          <label>Desc</label>
          <input
            type="text"
            name="desc"
            onChange={handleUser}
            placeholder="Enter Description"
            required
          />

          <label>Starring</label>
          <input
            type="text"
            name="starring"
            onChange={handleUser}
            placeholder="Enter Starring"
            required
          />

          <label>Genres</label>
          <input
            type="text"
            name="genres"
            onChange={handleUser}
            placeholder="Enter Genres"
            required
          />

          <label>Tags</label>
          <input
            type="text"
            name="tags"
            onChange={handleUser}
            placeholder="Enter Tags"
            required
          />

          <label>Image Link</label>
          <input
            type="text"
            name="cover"
            onChange={handleUser}
            placeholder="Enter Image Link"
            required
          />

          <label>Date</label>
          <input
            type="date"
            name="date"
            onChange={handleUser}
            placeholder="Enter Release Data"
            required
          />

          <label>Video</label>
          <input
            type="text"
            name="video"
            onChange={handleUser}
            placeholder="Enter Video Link"
            required
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default MovieData;
