const {Action,Movie,MovieList,Trending,Upcoming,Comment} =require("../db")
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()



const getAction= async (req,res)=>{
    // here find method returns an array
    let userList=await Action.find()
   //  console.log(userList)
    res.status(200).send([userList])
  }
  
 const setAction=async (req,res)=>{
    const lastId=await Action.findOne().sort({id:-1})
    const newId=lastId? lastId.id+1:1;
    const newMovie = await Action.create({...req.body,id:newId});
    res.status(201).send({ message: "User created", payload: newMovie });
  }

  const getMovie= async (req,res)=>{
    // here find method returns an array
    let userList=await Movie.find()
     // console.log(userList)
    res.status(200).send([userList])
  }

  const setMovie=async (req,res)=>{
    
    const lastId=await Movie.findOne().sort({id:-1})
    const newId=lastId? lastId.id+1:1;
    const newMovie = await Movie.create({...req.body,id:newId});
    res.status(201).send({ message: "User created", payload: newMovie });
  }
  
  const getMovieList= async (req,res)=>{
    // here find method returns an array
    let userList=await MovieList.find()
    // console.log(userList)
    res.status(200).send([userList])
  }
  
  const setMovieList=async (req,res)=>{
    
    const lastId=await MovieList.findOne().sort({id:-1})
    const newId=lastId? lastId.id+1:1;
    const newMovie = await MovieList.create({...req.body,id:newId});
    res.status(201).send({ message: "User created", payload: newMovie });
  }

  const getUpcoming= async (req,res)=>{
    // here find method returns an array
    let userList=await Upcoming.find()
    // console.log(userList)
    res.status(200).send([userList])
  }

  const setUpcoming=async (req,res)=>{
    
    const lastId=await Upcoming.findOne().sort({id:-1})
    const newId=lastId? lastId.id+1:1;
    const newMovie = await Upcoming.create({...req.body,id:newId});
    res.status(201).send({ message: "User created", payload: newMovie });
  }
  
  const getTrending= async (req,res)=>{
    // here find method returns an array
    let userList=await Trending.find()
    // console.log(userList)
    res.status(200).send([userList])
  }

  const setTrending=async (req,res)=>{
    
    const lastId=await Trending.findOne().sort({id:-1})
    const newId=lastId? lastId.id+1:1;
    const newMovie = await Trending.create({...req.body,id:newId});
    res.status(201).send({ message: "User created", payload: newMovie });
  }

  const setcomment=async (req,res)=>{
    // let comment=req.body
    // console.log(comment)
  
    const newComment = await Comment.create(req.body);
  
    res.status(201).send({ message: "User created", payload: newComment });
  
  }
  
  const getComment=async (req,res)=>{
    // here find method returns an array
    
    let index=Number(req.params.index)
    let userComment=await Comment.find({id:index})
     console.log("usercomment",userComment)
    res.status(200).send([userComment])
  }
  
  module.exports={getAction,setAction,getMovie,setMovie,getComment,getMovieList,setMovieList, setUpcoming, getTrending,setTrending,getUpcoming,setcomment}