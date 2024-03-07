const mongoose=require('mongoose')
require('dotenv').config()
const atlas_url=process.env.ATLAS_DB_URL
const local_url=process.env.LOCAL_DB_URL

// connect with database
// mongoose.connect("mongodb://127.0.0.1:27017/test1")
mongoose.connect(local_url)
.then(()=>console.log("database statred..."))
.catch((err)=>console.log("error occured",err))


// create user schema 
// mongoose.schema return an object having constructor and thier datatype
// validation 

const userSchema=new mongoose.Schema({  
    username: {
        type: String,
        required: [true, "Username is required"],
      },
      password: {
        type: String,
        required: [true, "Password is required"],
      },
      email: {
        type: String,
        required: [true, "Email is required"]
      },
      dob: {
        type: Date,
        required: [true, "Date of Birth is required"]
      }
    })

// create model(class) for userSchema
// it create a collection having name "users" plural of name
const User=mongoose.model('user',userSchema)

const movieSchema=new mongoose.Schema({  
  id:Number,
  name:String,
  rating:Number,
  time:String,
  desc:String,
  starring:String,
  genres:String,
  tags:String,
  cover:String,
  date:Date,
  video:String
  })
  const Action=mongoose.model('action',movieSchema)
  const Movie=mongoose.model('movie',movieSchema)
  const MovieList=mongoose.model('movieList',movieSchema)
  const Trending=mongoose.model('trending',movieSchema)
  const Upcoming=mongoose.model('upcoming',movieSchema)
  
  const CommentSchema= new mongoose.Schema({
    type:String,
    id:Number,
    user:String,
    text:String
  })
  const Comment=mongoose.model('comment',CommentSchema)

  const AdminSchema= new mongoose.Schema({
    username:{
      type:String,
      required: [true, "Username is required"]
    },
    password:{
      type: String,
      required: [true, "Password is required"]
    }
  })
  const Admin=mongoose.model('admin',AdminSchema)

// export user model 
module.exports={User,Action,Movie,MovieList,Trending,Upcoming,Comment,Admin}
