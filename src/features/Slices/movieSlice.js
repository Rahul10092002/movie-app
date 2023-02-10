import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Movieapi from "../../common/Movieapi";

const APIKey = "149f65c4";
export  const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchasyncmovies",
    async (term) => {
     
    const response = await Movieapi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchasyncShows",
    async (term) => {
      
    const response = await Movieapi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await Movieapi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);
const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    shows: [],
    selectMovieOrShow: [],
    status: "idle",
  },
 
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      // console.log("Pending");
      state.status = "pending";
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      // console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      // console.log("Fetched Successfully!");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
