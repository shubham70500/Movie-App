const {User,Action,Movie,MovieList,Trending,Upcoming,Comment,Admin} =require("../db")
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()


const getUser= async (req,res)=>{
    // here find method returns an array
    let userList=await User.find()

    res.status(200).send({message:"user data",payload:userList})
}

const createUser = async (req,res)=>{

  //check for existing user with same username
  let existingUser = await User.findOne({ username: req.body.username });
  //user already existed
  if (existingUser !== null) {
    return res.status(203).send({ message: "User already existed" });
  }
  //if user not existed, then hash password
  const hashedPassword = await bcryptjs.hash(req.body.password, 6);
  //replace plain password with hashed pw
  req.body.password = hashedPassword;
  const newUser = await User.create(req.body);

  res.status(201).send({ message: "User created", payload: newUser });
}

const loginUser= async (req,res)=>{
  
     //get user crdentials object from req
  const userCredentials = req.body;
  //  console.log(req.body)
  //check username
  let user = await User.findOne({ username: userCredentials.username });
  //if invalid username
  if (user === null) {
    return res.status(203).send({ message: "Invalid username" });
  }
  //if username is found, compare passwords
  const result = await bcryptjs.compare(userCredentials.password,user.password);
  //if pasword not matched
  if (result === false) {
    return res.status(203).send({ message: "Invalid password" });
  }
  //Create jwt token and sign it
  const signedToken = jwt.sign(
    { username: user.username },
    process.env.SECRET_KEY,
    { expiresIn: 60 }
  );
 // console.log(signedToken)
  res.status(201).send({ message: "login success", token: signedToken, user: user });
  
  
}


const handleAdmin =async (req,res)=>{
  
   //get user crdentials object from req
   const userCredentials = req.body;
   // console.log(req.body)
   //check username
   let user = await Admin.findOne({ username: userCredentials.username});
   //if invalid username
   if (user === null) {
     return res.status(203).send({ message: "Invalid Admin username" });
   }
   
    //if username is found, compare passwords
  let result = await bcryptjs.compare(userCredentials.password,user.password);
  //if pasword not matched
  if (result === false) {
    return res.status(203).send({ message: "Invalid Admin password" });
  }
  //Create jwt token and sign it
  const signedToken = jwt.sign(
    { username: user.username },
    process.env.SECRET_KEY,
    { expiresIn: 6000 }
  );
 console.log(signedToken)
  res.status(201).send({ message: "Admin login success", token: signedToken });
}

module.exports={getUser,createUser,loginUser,handleAdmin}