import { connect } from 'react-redux';
import MovieDetails from './movie-details';
import { addMovieAlongSimilarMoviesGenres } from '../../store/actions';

export const mapDispatchToProps = dispatch => ({
  onLoad(movieId) {
    dispatch(addMovieAlongSimilarMoviesGenres(movieId));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(MovieDetails);
