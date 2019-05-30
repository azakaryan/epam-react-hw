import React, { Component } from "react";
import style from './movie-home.css';

import MovieList from '../../components/common/movie-list/movie-list.container';
import MovieCount from "./movie-count/movie-count.container";

import Header from '../../components/common/header/header';
import SearchFilters from "./search-filters/search-filters.container";
import SortFilters from "./sort-filters/sort-filters.containers";

export default class MovieHome extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
     this.props.onLoad();
  }
  
  render() {
    return (
      <div id="movie-home" className={style.main_container}>
        <Header></Header>

        <SearchFilters></SearchFilters>

        <div className={style.sort_and_count}>
          <MovieCount></MovieCount>
          <SortFilters></SortFilters>
        </div>

        <div>
          <MovieList></MovieList>
        </div>

      </div>
    )
  }
}