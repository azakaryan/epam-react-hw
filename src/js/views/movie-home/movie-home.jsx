import React, { Component } from "react";
import style from './movie-home.css';
import { Link } from 'react-router-dom'
import MovieService from './../../services/movieService';

export default class MovieHome extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };

    this.movieService = MovieService
    debugger
    this.movieService.getAll().pipe().subscribe(movies => this.movies = movies)  
  }
  
  render() {
    return (
      <div className={style.movie_home_container}>
        <h1>Home Works!!!</h1>
        <Link to="/movie/1">Details</Link>
      </div>
    )
  }
}