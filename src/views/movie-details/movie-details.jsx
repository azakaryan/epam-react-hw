import React, { Component } from "react";
import style from './movie-details.css'
import MovieList from "../../components/common/movie-list/movie-list.container";
import MovieCover from './movie-cover/movie-cover.container'
import Button from "@material-ui/core/Button/Button";

export default class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.props.onLoad(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps) {
    const oldId = this.props.match.params.id;
    const id = newProps.match.params.id;
    if (id && oldId !== id) this.props.onLoad(id);
  }

  goHome() {
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