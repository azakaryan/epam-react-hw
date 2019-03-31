import React, { Component } from "react";
import style from './movie-home.css';
import MovieService from '../../services/movieService';
import MovieList from '../../components/common/movie-list/movie-list.jsx'
import Header from '../../components/common/header/header.jsx'

export default class MovieHome extends Component {
  
  constructor(props) {
    super(props);
    this.state = {movies: null}
    this.movieService = MovieService
  }

  componentDidMount() {
    this.movieService.getAll().pipe().subscribe(movies => {
        this.setState({movies})
    })
  }
  
  render() {
    return (
      <div className={style.main_container}>
        <Header></Header>

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