import { connect } from 'react-redux'
import MovieHome from "./movie-home.jsx";
import { fetchMovies } from "../../store/actions.js";

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch((_, getState) => {
    const state = getState();
    if (!state.movies.length) {
      dispatch(fetchMovies({filter: null, search: null, searchBy: null}));
    }
  })
});

MovieHome.initialAction = () => {
  return fetchMovies({filter: null, search: null, searchBy: null})
};

export default connect(null, mapDispatchToProps)(MovieHome);
