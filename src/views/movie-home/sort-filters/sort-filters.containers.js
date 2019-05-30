import { connect } from 'react-redux';
import SortFilters from './sort-filters';
import { fetchMovies } from '../../../store/actions';

const mapDispatchToProps = dispatch => ({
  onFiltersApply: (filters = {}) => dispatch((_, getState) => {
    const state = getState();
    if (!state.movies.length) {
      dispatch(fetchMovies(filters));
    }
  }),
});

export default connect(null, mapDispatchToProps)(SortFilters);
