import axios from "axios";
import React, { useState } from "react";
import { userLoginObj } from "./UserContext";

function UserContextStore({ children }) {
  let [loginStatus, setLoginStatus] = useState(false);
  let [curUser, setCurUser] = useState({});
  let [movie, setMovie] = useState([]);
  let [Trend, setTrend] = useState([]);
  let [Action, setAction] = useState([]);
  let [MovieList, setMovieList] = useState([]);
  let [Upcome, setUpcome] = useState([]);

  const handleUserLogin = async (obj) => {
    let res = await axios.post("http://localhost:4000/user-api/login", obj);
    // console.log(res)
    if (res.status === 201) {
      localStorage.setItem("token", res.data.token);
      setCurUser(res.data.user);
      setLoginStatus(true);
      return "User-login";
    } else if (res.status === 200) {
      return "Axios-error";
    } else {
      return res.data.message;
    }
  };
  const handleAdminLogin = async (obj) => {
    let res = await axios.post("http://localhost:4000/user-api/admin", obj);
    //console.log(res)
    if (res.status === 201) {
      localStorage.setItem("admintoken", res.data.token);
      return "Admin-login";
    } else if (res.status === 200) {
      return "Axios-error";
    } else {
      return res.data.message;
    }
  };

  return (
    <userLoginObj.Provider
      value={{
        curUser,
        loginStatus,
        setCurUser,
        movie,
        setMovie,
        Trend,
        setTrend,
        Action,
        setAction,
        MovieList,
        setMovieList,
        Upcome,
        setUpcome,
        setLoginStatus,
        handleUserLogin,
        handleAdminLogin,
      }}
    >
      {/* {console.log(movie)} */}
      {children}
    </userLoginObj.Provider>
  );
}

export default UserContextStore;
