import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Header.css";
import { fetchAsyncMovies } from "../../features/Slices/movieSlice";
import { fetchAsyncShows } from "../../features/Slices/movieSlice";
import {Link} from "react-router-dom"
function Header() {

  const [term, setterm] = useState("");
  const dispatch = useDispatch();
  function handleSearch(e) {
    e.preventDefault();
    if (term === "") return alert("Please enter search term!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setterm("");
  }

  return (
    <div className="header">
      <div className="nav-left">
        <div className="">
          <img
            src="https://png.pngtree.com/element_our/20190603/ourmid/pngtree-movie-board-icon-image_1455346.jpg"
            alt=""
          />
        </div>
        <div className="">
          <Link style={{ textDecoration: "none" ,color:"white" }} exact to={"/"}>
            <h1>MovieStage</h1>
          </Link>
        </div>
      </div>
      <div className="nav-right">
        <div className="form">
          <form onSubmit={handleSearch}>
            <input
              placeholder="Search movies or shows"
              type="text"
              value={term}
              onChange={(e) => setterm(e.target.value)}
            />
            <button type="submit" onSubmit={handleSearch}>
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
