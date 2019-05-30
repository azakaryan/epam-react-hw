import { connect } from 'react-redux';
import { MovieItem } from './movie-item';

const mapStateToProps = state => ({
  getMovie: movieId => state.get('movies').find(m => m.id === movieId),
});

export default connect(mapStateToProps)(MovieItem);
