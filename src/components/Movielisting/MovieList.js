import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  fetchAsyncMovies,
  fetchAsyncShows,
  removeSelectedMovieOrShow,
} from "../../features/Slices/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.css";
function MovieList() {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const movielist = useSelector((state) => state.movies.movies.Search);
  const showlist = useSelector((state) => state.movies.shows.Search);

  useEffect(() => {
    const Seriestext = "friends";
    const movietext = "dil";
    dispatch(fetchAsyncMovies(movietext));
    dispatch(fetchAsyncShows(Seriestext));
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow);
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movielist &&
            movielist.map((item, index) => (
              <MovieCard
                key={item.imdbID}
                Poster={item.Poster}
                Title={item.Title}
                Year={item.Year}
                imdbID={item.imdbID}
              />
            ))}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {showlist &&
            showlist.map((item) => (
              <MovieCard
                key={item.imdbID}
                Poster={item.Poster}
                Title={item.Title}
                Year={item.Year}
                imdbID={item.imdbID}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
