import React from 'react'
import "./About.css"
function About() {
  return (
    <>
    <div className='about-container'>
      <h1>About <span>StreamIT</span></h1>
      <p>
        Welcome to the StreamIT! This app is your go-to destination for all things movies.
        Whether you're a cinephille or just looking for something to watch,we've got you covered. 
      </p>
      <p>
        Explore a diverse collection of movies across genres .From timeless classics to the latest blockbuster,
        our app caters to every movie lover's taste.
      </p>
      <h2>Key Features : </h2>
      <ul>
        <li>
          Discover a vast library of movies.
          </li>
          <li>
            Watch high-quality trailers.
          </li>
          <li>
            Get detailed information about each movie.
          </li>
          <li>
            Stay updated with the latest releases.
          </li>
          <li>
            Create your watchlist and keep track of your favorite movies .
          </li>

      </ul>
      <h2>Our Mission:</h2>
      <p>
        We are passionate about creating an immersive movie-watching experience for our users,
        Our mission is to make the world of cinema easily accessible, enjoyable,and oersonalised for everyone.
      </p>
      <h2>Contact Us:</h2>
      <p>
        Have question, suggestion ,or just want to say hello? Reach out us at  
        <a href='mailto:info@movieapp.com'> mailto:info@movieapp.com</a>
        </p>
        <p>
          Thank you for choosing StreamIT! Lights, Camera, Action!
        </p>
      </div>
    </>
  )
}

export default About 