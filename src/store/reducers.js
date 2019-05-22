import C from './constants.js';
import {combineReducers} from "redux";

/* MOVIE */
export const movie = (state = {}, action) => {
  return action.type === C.ADD_MOVIE
    ? action.payload
    : state
};

/* MOVIES */
export const movies = (state = [], action) => {
  return action.type === C.ADD_MOVIES
    ? action.payload
    : state
};

/* ERRORS */
export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state, action.payload];
    case C.CLEAR_ERROR:
      return state.filter(str => str !== action.payload);
    default:
      return state
  }
};

/* FETCHING */
export const fetchingMovies = (state = false, action) => {
  switch (action.type) {
    case C.START_FETCHING_MOVIES:
      return true;
    case C.CANCEL_FETCHING_MOVIES:
      return false;
    default:
      return state
  }
};
export const fetchingMovie = (state = false, action) => {
  switch (action.type) {
    case C.START_FETCHING_MOVIE:
      return true;
    case C.CANCEL_FETCHING_MOVIE:
      return false;
    default:
      return state
  }
};


export const appReducer = combineReducers({
  movies,
  movie,
  errors,
  fetchingMovie,
  fetchingMovies
});

