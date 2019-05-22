import { connect } from 'react-redux'
import MovieHome from "./movie-home.jsx";
import { fetchMovies } from "../../store/actions.js";

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad() {
      dispatch(fetchMovies({filter: null, search: null, searchBy: null}))
    }
  }
};

export default connect(null, mapDispatchToProps)(MovieHome);
