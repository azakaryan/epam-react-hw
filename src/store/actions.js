import C from './constants.js';
import MovieService from '../services/movieService.js';

export const addMovie = (movie) => ({
    type: C.ADD_MOVIE,
    payload: movie,
  });
export const addMovies = (movies) => ({
    type: C.ADD_MOVIES,
    payload: movies,
  });

export const updateFilters = (filters) => ({
    type: C.UPDATE_FILTERS,
    payload: filters,
  });

export const addMovieAlongSimilarMoviesGenres = (movieId) => async (dispatch, getState) => {
  dispatch({type: C.START_FETCHING_MOVIE});

  await dispatch(fetchMovie(movieId));
  const state = getState();
  dispatch(fetchMovies({filter: state.movie.genres.join(','), searchBy: 'genres'}));
};

export const fetchMovies = (filters) => (dispatch, getState) => {
  dispatch(updateFilters(filters));

  const state = getState();
  dispatch({type: C.START_FETCHING_MOVIES});

  return MovieService
    .fetchBy(state.filters)
    .then(movies => dispatch(addMovies(movies)))
    .catch(err => {
      dispatch({
        type: C.CANCEL_FETCHING_MOVIES,
        payload: err,
      });
    });
};

export const fetchMovie = (movieId) => (dispatch) => {
  dispatch({type: C.START_FETCHING_MOVIE});

  return MovieService
    .getById(movieId)
    .then(movie => {
      dispatch(addMovie(movie));
    })
    .catch(err => {
      dispatch({
        type: C.CANCEL_FETCHING_MOVIE,
        payload: err,
      });
    });
};