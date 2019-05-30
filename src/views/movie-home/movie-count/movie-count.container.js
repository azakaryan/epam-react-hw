import { connect } from 'react-redux';
import MovieCount from './movie-count';

const mapStateToProps = state => ({
  count: state.get('movies').length,
});

export default connect(mapStateToProps)(MovieCount);
