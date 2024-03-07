import { Routes } from "react-router-dom"
import "./App.css"
import {  Route } from "react-router-dom"
import Home from "./component/Home/Home"
import Movie from "./component/Movies/Movie"
import Trending from "./component/Trending/Trending"
import About from "./component/About/About"
import Login from "./component/Login/Login"
import Register from "./component/Login/Register"
import MovieDetails from "./component/Page/MovieDetails"
import Footer from '../src/component/Footer/Footer'
import Header from '../src/component/Header/Header';
import PageNotFound from "./component/Page/PageNotFound"
import Admin from "./component/Admin/Admin"
import MovieData from "./component/Admin/MovieData"
import Error from "./component/Page/Error"




function App() {
  return (
    <>
    <Header />
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login/register" element={<Register/>}/>
        <Route path="/login/admin" element={<Admin/>}/>
        <Route path="/login/admin/moviedata" element={<MovieData/>}/>
        <Route path="/movie/:type/:id" element={<MovieDetails/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App