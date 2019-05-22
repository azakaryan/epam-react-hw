import { connect } from 'react-redux'
import MovieCount from "./movie-count.jsx";

const mapStateToProps = (state) => {
  return {
    count: state.movies.length
  }
};

export default connect(mapStateToProps)(MovieCount);