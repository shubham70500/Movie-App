const exp=require("express")
const movieApp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
const {getAction,setAction,getMovie,setMovie,getComment,getMovieList,getTrailer,setMovieList, setUpcoming, getTrending,setTrending,getUpcoming,setcomment}=require("../Controllers/movie")
const verifyToken = require('../Middleware/verifyToken')


// read action movie details
movieApp.get("/action",expressAsyncHandler(getAction))

// post action movie details
movieApp.post("/action",verifyToken,expressAsyncHandler(setAction))

// read movie details
movieApp.get("/movie",expressAsyncHandler(getMovie))

// post movie  details
movieApp.post("/movie",verifyToken,expressAsyncHandler(setMovie))

// read MovieList details
movieApp.get("/movieList",expressAsyncHandler(getMovieList))

// post MovieList movie details
movieApp.post("/movieList",verifyToken,expressAsyncHandler(setMovieList))

// read upcoming details
movieApp.get("/upcoming",expressAsyncHandler(getUpcoming))

// post upcoming movie details
movieApp.post("/upcoming",verifyToken,expressAsyncHandler(setUpcoming))

// read trending details
movieApp.get("/trending",expressAsyncHandler(getTrending))

// post trending movie details
movieApp.post("/trending",verifyToken,expressAsyncHandler(setTrending))

// post comment
movieApp.post("/comment",verifyToken,expressAsyncHandler(setcomment))

// get Comment
movieApp.get("/comment/:type/:id",expressAsyncHandler(getComment))

// get trailer
movieApp.get("/trailer",verifyToken,expressAsyncHandler(getTrailer))

module.exports=movieApp