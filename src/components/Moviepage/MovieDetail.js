import React, { useEffect } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
} from "../../features/Slices/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  // console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="containerr">
          <div className="section-left">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="section-right">
            <h1>{data.Title}</h1>
            <div className="movie-info">
              <div>
                <li>Director :{data.Director}</li>
              </div>
              <div>
                <li>Stars: {data.Actors}</li>
              </div>
              <div>
                <li>
                  Generes: <>{data.Genre}</>
                </li>
              </div>
              <div>
                <li>
                  Languages: <>{data.Language}</>
                </li>
              </div>
              <div>
                <li>
                  Awards: <>{data.Awards}</>
                </li>
              </div>
            </div>
            <div className="movie-rating">
              <li>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </li>
              <li>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </li>
              <li>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </li>
              <li>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </li>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
