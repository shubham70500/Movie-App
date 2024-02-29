import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userLoginObj } from "../../contextApi/UserContext";
import "./CommentSection.css";

function CommentSection({ movieId }) {
  let navigate = useNavigate();
  let { index } = useParams();
  const {  curUser } = useContext(userLoginObj);
  const [newComment, setNewComment] = useState("");
  const [comment, setComment] = useState([]);

  const fetchComment = async () => {
    const response = await axios.get(`http://localhost:4000/movie-api/comment/${index}`);
   // console.log("resposen", response.data[0])
    setComment(response.data[0]);
  };
  useEffect(() => {
    fetchComment();
  }, []);

  const handleCommentSection = async (e) => {
    
    const upadteComments = {
      id: index,
      user: curUser.username,
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
     console.log(res);
    if (res.request.status===201) {

      setNewComment("");
      fetchComment();

    } else {

     
      alert("User not Logged In , Please Login first");
      navigate("/login");

    }
  };
  return (
    <div className="comment-section">
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
