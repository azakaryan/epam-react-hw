import { connect } from 'react-redux';
import SearchFilters from './search-filters';
import { fetchMovies } from '../../../store/actions';

const mapDispatchToProps = dispatch => ({
  onFiltersApply(filters = {}) {
    dispatch(fetchMovies(filters));
  },
});

export default connect(null, mapDispatchToProps)(SearchFilters);
