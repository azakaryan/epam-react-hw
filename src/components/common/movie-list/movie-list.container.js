import { connect } from 'react-redux'
import MovieList from "./movie-list.jsx";

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
};

export default connect(mapStateToProps)(MovieList);