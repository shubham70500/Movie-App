import React, { useContext,useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import axios from "axios";
// import img1 from "../image/ring.jpg"
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import { userLoginObj } from "../../contextApi/UserContext";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
  );
};

function Home() {
  let { movie,setMovie } = useContext(userLoginObj);
// let [movie, setMovie] = useState([]);

  useEffect(()=>{
    const fetchData =async()=>{

      try{
  
        let res1=await axios.get("http://localhost:4000/movie-api/movie")
        setMovie(res1.data[0])

     }
     catch(error){
       alert(error)
     }
    }
    fetchData()
  },[])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="hero-section">
        <div>
          <Slider {...settings}>
            {movie.map((movie, index) => (
              <div key={index} className="carousel-item">
                <Link to={`/movie/popular/${index}`}>
                  <img src={movie.cover} alt={movie.name} />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="card1">
        <h1>Latest Movie</h1>
        <HomeCard type="latest"/>
      </div>
      <div className="trend">
        <h1>Trending Movie</h1>
        <HomeCard type="Drama" />
      </div>
      <div className="trend">
        <h1>Action Movie</h1>
        <HomeCard type="action" />
      </div>
    </>
  );
}

export default Home;
