import { connect } from 'react-redux'
import MovieDetails from "./movie-details.jsx";
import { fetchMovie } from "../../store/actions.js";

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad(movieId) {
      dispatch(fetchMovie(movieId));
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

export default Container;