import { connect } from 'react-redux'
import MovieDetails from "./movie-details.jsx";
import MovieService from "../../services/movieService.js"
import { addMovie, addMovies } from "../../store/actions.js";

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad(movieId) {
      MovieService
        .getById(movieId)
        .then(movie => {
          if (!movie) return;
          dispatch(addMovie(movie));

          MovieService
            .fetchBy({filter: movie.genres.join(','), searchBy: 'genres'})
            .then(movies => dispatch(addMovies(movies)));
        });
    }
  }
};

export default connect(null, mapDispatchToProps)(MovieDetails);
