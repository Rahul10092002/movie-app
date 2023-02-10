import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard(data) {
  return (
    <div className="card-item">
      <Link style={{ textDecoration: "none" }} to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <p>
                {data.Title} ({data.Year})
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
