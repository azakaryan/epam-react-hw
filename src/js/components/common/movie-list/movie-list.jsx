import React, { Component } from "react";
import style from './movie-list.css';
import {Link} from "react-router-dom";


export default class MovieList extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={style.movies_main}>
        {
          this.props.movies && this.props.movies.map((movie, index) => {
            return (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <div className={style.movie_item}>
                      <div className={style.image}>
                          <img src={movie.poster_path}></img>
                      </div>
                      <div className={style.title}>
                        <div>{movie.title}</div>
                        <div>{movie.release_date.slice(0, 4)}</div>
                      </div>
                      <div className={style.genres}>
                        {movie.genres.join(' & ')}
                      </div>
                    </div>
                </Link>
              )
           })
        }
      </div>
    )
  }
}