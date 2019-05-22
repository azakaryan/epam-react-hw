import { connect } from 'react-redux'
import SortFilters from "./sort-filters.jsx";
import { fetchMovies } from "../../../store/actions.js";

const mapDispatchToProps = (dispatch) => {
  return {
    onFiltersApply(filters = {}) {
      dispatch(fetchMovies(filters));
    }
  }
};

export default connect(null, mapDispatchToProps)(SortFilters);
