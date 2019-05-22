import React, { Component } from "react";
import style from './movie-details.css'
import MovieService from "../../services/movieService";
import MovieList from "../../components/common/movie-list/movie-list.jsx";
import MovieCover from './movie-cover/movie-cover.container.js'
import Button from "@material-ui/core/Button/Button";

export default class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {movie: null, movies: null};
    this.movieService = MovieService;
    this.id = this.props.match.params.id;
    // Call parent to dispatch the data
    this.props.onLoad(this.id)
  }

  componentDidMount() {
    this.load(this.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id && this.id != newProps.match.params.id) this.load(newProps.match.params.id);
  }

  goHome() {
    this.movieService.fetchBy();
    this.props.history.push('/');
  }

  render() {
    return (
      <div id="movie-details" className={style.main}>
        <div id="search-btn" className={style.search}><Button variant="contained" color="primary" onClick={this.goHome.bind(this)}>SEARCH</Button></div>
        <MovieCover></MovieCover>
        {
          this.state.movies && (<MovieList movies={this.state.movies}></MovieList>)
        }
      </div>
    )
  }

  load(id) {
    this.id = id;

    // Dispatch Store


    this.movieService.getById(id).then(movie => {
      this.setState({movie});

      this.movieService.fetchBy({
        filter: movie.genres.join(','),
        searchBy: 'genres',
      }).then(movies => this.setState({movies}));
    });
  }
}