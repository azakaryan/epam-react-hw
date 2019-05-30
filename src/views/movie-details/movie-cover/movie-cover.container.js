import { connect } from 'react-redux';
import MovieCover from './movie-cover';

const mapStateToProps = state => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(MovieCover);
