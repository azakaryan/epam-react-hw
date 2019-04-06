import React, { Component } from "react";
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import style from './movie-home.css';
import MovieService from '../../services/movieService';
import MovieList from '../../components/common/movie-list/movie-list.jsx';
import Header from '../../components/common/header/header.jsx';
import SearchFilters from "./search-filters/search-filters.jsx";
import MovieCount from "./movie-count/movie-count.jsx";
import SortFilters from "./sort-filters/sort-filters.jsx";

export default class MovieHome extends Component {
  
  constructor(props) {
    super(props);
    this.destroy$ = new Subject();
    this.state = {movies: null};
    this.movieService = MovieService;
  }

  componentDidMount() {
    this.movieService.getBy().pipe(takeUntil(this.destroy$)).subscribe(movies => {
        this.setState({movies})
    })
  }

  componentWillUnmount() {
      this.destroy$.next();
      this.destroy$.unsubscribe();
  }

  onFiltersApply(filters) {
    this.movieService.fetchBy(filters)
  }

  onSortApply(filters) {
    this.movieService.fetchBy(filters)
  }
  
  render() {
    return (
      <div className={style.main_container}>
        <Header></Header>
        <SearchFilters onFiltersApply={this.onFiltersApply.bind(this)}></SearchFilters>
        <div className={style.sort_and_count}>

          {
            this.state.movies && (<MovieCount count={this.state.movies.length}></MovieCount>)
          }

          <SortFilters onSortApply={this.onSortApply.bind(this)}></SortFilters>
        </div>

        {
          this.state.movies && (
            <div>
              <MovieList movies={this.state.movies}></MovieList>
            </div>
          )
        }
      </div>
    )
  }
}