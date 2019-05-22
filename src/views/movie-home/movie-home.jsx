import React, { Component } from "react";
import style from './movie-home.css';

import MovieList from '../../components/common/movie-list/movie-list.container.js';
import MovieCount from "./movie-count/movie-count.container.js";

import Header from '../../components/common/header/header.jsx';
import SearchFilters from "./search-filters/search-filters.jsx";
import SortFilters from "./sort-filters/sort-filters.jsx";

export default class MovieHome extends Component {
  
  constructor(props) {
    super(props);
  }

  onFiltersApply(filters) {
    this.props.onLoad(filters);
  }

  onSortApply(filters) {
    this.props.onLoad(filters);
  }
  
  render() {
    return (
      <div id="movie-home" className={style.main_container}>
        <Header></Header>

        <SearchFilters onFiltersApply={this.onFiltersApply.bind(this)}></SearchFilters>

        <div className={style.sort_and_count}>
          <MovieCount></MovieCount>
          <SortFilters onSortApply={this.onSortApply.bind(this)}></SortFilters>
        </div>

        <div>
          <MovieList></MovieList>
        </div>

      </div>
    )
  }
}