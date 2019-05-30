import { connect } from 'react-redux';
import MovieList from './movie-list';

const mapStateToProps = state => ({
  movies: state.get('movies'),
});

export default connect(mapStateToProps)(MovieList);
