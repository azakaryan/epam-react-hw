import React, { Component } from 'react';
import style from './movie-list.css';
import MovieItem from '../movie-item/movie-item.container';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.movies) return null;

    return (
      <div id="movies" className={style.movies_main}>
        {this.props.movies
          && this.props.movies.map((movie, index) => <MovieItem id={movie.id} key={movie.id} />)}
      </div>
    );
  }
}
