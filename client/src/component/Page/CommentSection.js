import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CommentSection.css";
import { Toaster, toast } from 'react-hot-toast';

function CommentSection({ movieId }) {
  let navigate = useNavigate();
  let { type, id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [comment, setComment] = useState([]);
  const username=localStorage.getItem("username")
  

  const fetchComment = async () => {
    const response = await axios.get(`http://localhost:4000/movie-api/comment/${type}/${id}`);
   // console.log("resposen", response.data[0])
    setComment(response.data[0]);
  };
  useEffect(() => {
    fetchComment();
  }, []);

  const handleCommentSection = async (e) => {
    
    const upadteComments = {
      type:type,
      id: id,
      user: username,
      text: newComment,
    };

    // get token from local/session storage
    let token = localStorage.getItem("token");
    // add token to the header of request object
    let axiosWithToken = axios.create({
      baseURL: "http://localhost:4000",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let res = await axiosWithToken.post(
      "http://localhost:4000/movie-api/comment",
      upadteComments
    );
    // console.log(res);
    if (res.request.status===201) {

      setNewComment("");
      fetchComment();

    } 
    else {

      localStorage.removeItem("username")
      localStorage.removeItem(token)
      localStorage.setItem("status",false)
      toast.error("User not Logged In , Please Login first",{
        duration:1500,
      })
      setTimeout(() => {
        navigate('/login');
    }, 3000)
      

    }
  };
  return (
    <div className="comment-section">
      <Toaster/>
      <h4>Reviews :</h4>
      {comment.map((comment, index) => (
        <div key={index} className="comment">
          <strong>{comment.user}</strong>
          <div>{comment.text}</div>
        </div>
      ))}
      <div className="comment-input">
        <textarea
          placeholder="Write your comment...."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleCommentSection}>Submit</button>
      </div>
    </div>
  );
}

export default CommentSection;
