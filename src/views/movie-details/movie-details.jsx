import React, { Component } from "react";
import style from './movie-details.css'
import MovieList from "../../components/common/movie-list/movie-list.container.js";
import MovieCover from './movie-cover/movie-cover.container.js'
import Button from "@material-ui/core/Button/Button";

export default class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.props.onLoad(this.id)
  }

  componentWillReceiveProps(newProps) {
    const id = newProps.match.params.id
    if (newProps.match.params.id && this.id != id) {
      this.id = id;
      this.props.onLoad(this.id);
    }
  }

  goHome() {
    // this.movieService.fetchBy();
    this.props.history.push('/');
  }

  render() {
    return (
      <div id="movie-details" className={style.main}>
        <div id="search-btn" className={style.search}><Button variant="contained" color="primary" onClick={this.goHome.bind(this)}>SEARCH</Button></div>
        <MovieCover></MovieCover>
        <MovieList></MovieList>
      </div>
    )
  }
}