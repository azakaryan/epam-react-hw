import { connect } from 'react-redux'
import MovieItem from "./movie-item.jsx";

const mapStateToProps = (state) => {
  return {
    getMovie: (movieId) => state.movies.find(m => m.id === movieId),
  }
};

export default connect(mapStateToProps)(MovieItem);