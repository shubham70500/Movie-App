// create mini express
const exp=require('express')
const userApp=exp.Router()
const expressAsyncHandler=require('express-async-handler')
const {getUser,createUser,loginUser,handleAdmin}=require("../Controllers/user")




// read user details
userApp.get("/user",expressAsyncHandler(getUser))

// create user
userApp.post("/user",expressAsyncHandler(createUser))

// user login
userApp.post("/login",expressAsyncHandler(loginUser))

// post admin
userApp.post("/admin",expressAsyncHandler(handleAdmin))




module.exports=userApp