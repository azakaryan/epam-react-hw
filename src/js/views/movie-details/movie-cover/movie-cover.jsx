import React, { Component } from "react";
import style from "./movie-cover.css";

export default class MovieCover extends Component {

  constructor(props) {
      super(props);
  }

  render() {
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



/*


budget: 0
genres: ["Action", "Adventure", "Science Fiction"]
id: 447365
overview: "The third film based on Marvel's Guardians of the Galaxy."
poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg"
release_date: "2020-05-01"
revenue: 0
runtime: null
tagline: ""
title: "Guardians of the Galaxy Vol. 3"
vote_average: 0
vote_count: 9

* */