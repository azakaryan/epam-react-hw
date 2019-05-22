import { connect } from 'react-redux'
import MovieHome from "./movie-home.jsx";
import MovieService from "../../services/movieService.js"
import { addMovies } from "../../store/actions.js";

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad(filters = {}) {
      MovieService
        .fetchBy(filters)
        .then(movies => {
          if (!movies) return;

          dispatch(addMovies(movies));
        });
    }
  }
};

export default connect(null, mapDispatchToProps)(MovieHome);
