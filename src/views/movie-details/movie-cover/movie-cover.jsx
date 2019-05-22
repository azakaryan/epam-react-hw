import React, { Component } from "react";
import style from "./movie-cover.css";

export default class MovieCover extends Component {

  constructor(props) {
      super(props);
  }

  render() {
      if (!this.props.movie) {
        return null;
      }

      return (
          <div className={style.main}>
              <div>
                  <div className={style.left_section}><img alt="speakom" src={this.props.movie.poster_path}></img></div>
                  <div className={style.right_section}>
                      <div>
                          <div className={style.title}>{this.props.movie.title}</div>
                          <div className={style.rating}>{this.props.movie.vote_count}</div>
                      </div>
                      <div>Oscar-winning Movies</div>
                      <div>
                          <div className={style.year}>{this.props.movie.release_date.slice(0, 4)}</div>
                          <div className={style.duration}>154 min</div>
                      </div>
                      <div>{this.props.movie.overview}</div>
                  </div>
              </div>
              <div className={style.genres}>
                  {this.props.movie.genres.join(' & ')}
              </div>
          </div>
      )
  }

}