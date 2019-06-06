import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MovieItem from './movie-item';

const moviesSelector = (state) => state.get('movies');
const movieIdSelector = (state, movieId) => movieId;

const getMovieById = createSelector(
  [moviesSelector, movieIdSelector],
  (movies, id) => movies.find(m => m.id === id),
);

export const mapStateToProps = state => ({
  getMovie: movieId => getMovieById(state, movieId),
});

export default connect(mapStateToProps)(MovieItem);
