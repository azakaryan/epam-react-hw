import { connect } from 'react-redux'
import MovieDetails from "./movie-details.jsx";
import { addMovieAlongSimilarMoviesGenres } from "../../store/actions.js";

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad(movieId) {
      dispatch(addMovieAlongSimilarMoviesGenres(movieId));
    }
  }
};

export default connect(null, mapDispatchToProps)(MovieDetails);
