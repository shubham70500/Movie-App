const exp=require('express')
const app=exp()
const path=require('path')
const cors=require("cors")
// connect with client side
app.use(exp.static(path.join(__dirname,"../client/build")))

const userApp = require('./APIs/user-Api')
const movieApp=require("./APIs/movie-api")



require('dotenv').config

app.use(cors({origin:'http://localhost:3000'}))
app.use(exp.json())
app.use("/user-api",userApp)
app.use("/movie-api",movieApp)

// error handler for sync
app.use((err,req,res,next)=>{
    res.send({message:"error occurred",payload:err.message})
})


app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../client/build/index.html'))
})

const PORT=process.env.PORT || 4000
app.listen(PORT,()=>console.log(`web server listining on ${PORT}`))