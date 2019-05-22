import { connect } from 'react-redux'
import SearchFilters from "./search-filters.jsx";
import { fetchMovies } from "../../../store/actions.js";

const mapDispatchToProps = (dispatch) => {
  return {
    onFiltersApply(filters = {}) {
      dispatch(fetchMovies(filters));
    }
  }
};

export default connect(null, mapDispatchToProps)(SearchFilters);
