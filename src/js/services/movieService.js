import { ReplaySubject } from 'rxjs'

class MovieService {

  constructor() {}

  getAll() {
    if (!this.movies$) {
      this.movies$ = new ReplaySubject(1);
      fetch('https://reactjs-cdp.herokuapp.com/movies')
        .then(response => response.json(), (err) => alert(JSON.stringify(err)))
        .then(({data}) => {this.setAll(data)})
    }

    return this.movies$.asObservable()
  }

  setAll(movies) {
    return this.movies$.next(movies)
  }

  getById(id) {
    return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
      .then(response => response.json(), (err) => alert(JSON.stringify(err)))
  }

  /*
  * Filters
  * */
  getMoviesByGenres(geners) {
    return fetch(`https://reactjs-cdp.herokuapp.com/movies?searchBy=genres&filter=${encodeURIComponent(geners.join(','))}`)
      .then(response => response.json(), (err) => alert(JSON.stringify(err)))
      .then(({data}) => data)
  }
}

export default new MovieService()