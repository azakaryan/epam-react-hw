import { connect } from 'react-redux';
import MovieHome from './movie-home';
import { fetchMovies } from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch((_, getState) => {
    const state = getState();
    if (!state.movies.length) {
      dispatch(fetchMovies({ filter: null, search: null, searchBy: null }));
    }
  }),
});

MovieHome.initialAction = () => fetchMovies({ filter: null, search: null, searchBy: null });

export default connect(null, mapDispatchToProps)(MovieHome);
