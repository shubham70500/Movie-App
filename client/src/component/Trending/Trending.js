import React from "react";
import Card from "./Card";
import "./Trending.css";

function Trending() {
  return (
    <>
      <div className="trending">
        <h3>Top 5 Trending Movies</h3>
        <Card type="trending" />
      </div>
      <div className="trending">
        <h3>Top 5 Upcoming Movies</h3>
        <Card type="upcoming" />
      </div>
    </>
  );
}

export default Trending;
