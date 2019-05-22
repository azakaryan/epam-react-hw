import { connect } from 'react-redux'
import MovieCover from "./movie-cover.jsx";

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  }
};

export default connect(mapStateToProps)(MovieCover);