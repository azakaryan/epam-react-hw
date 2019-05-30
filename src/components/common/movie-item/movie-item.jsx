import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './movie-item.css';

export class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.getMovie(this.props.id),
    };
  }

  render() {
    return (
      <Link key={this.state.movie.id} to={`/movie/${this.state.movie.id}`}>
        <div className={style.movie_item} id="movie">
          <div className={style.image}>
            <img src={this.state.movie.poster_path} />
          </div>
          <div className={style.title}>
            <div>{this.state.movie.title}</div>
            <div>{this.state.movie.release_date.slice(0, 4)}</div>
          </div>
          <div className={style.genres}>
            {this.state.movie.genres.join(' & ')}
          </div>
        </div>
      </Link>
    );
  }
}
