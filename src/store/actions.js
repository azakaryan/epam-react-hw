import C from './constants.js';
const queryString = require('query-string');

export const addError = (message) => ({
    type: C.ADD_ERROR,
    payload: message,
  });

export const clearError = (index) => ({
    type: C.CLEAR_ERROR,
    payload: index,
  });


export const fetchMovies = (data) => (dispatch) => {
  const queryParams = queryString.stringify(data);

  dispatch({type: C.START_FETCHING_MOVIES});

  fetch(`https://reactjs-cdp.herokuapp.com/movies${queryParams ? `?${queryParams}` : ''}`)
    .then(response => response.json())
    .then(({data}) => {
      dispatch({
        type: C.ADD_MOVIES,
        payload: data,
      });
    })
    .catch(err => {
      dispatch({
        type: C.CANCEL_FETCHING_MOVIES,
        payload: err,
      });
    })
};

/*
* GET single movie by Id
* */
export const fetchMovie = (id) => (dispatch) => {
  debugger
  dispatch({type: C.START_FETCHING_MOVIE});

  fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: C.ADD_MOVIE,
        payload: data,
      });
    })
    .catch(err => {
      dispatch({
        type: C.CANCEL_FETCHING_MOVIE,
        payload: err,
      });
    });
};