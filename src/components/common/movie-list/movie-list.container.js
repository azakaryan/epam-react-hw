import { connect } from 'react-redux';
import MovieList from './movie-list';

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(MovieList);
