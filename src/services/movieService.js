import { ReplaySubject } from 'rxjs';
const queryString = require('query-string');

class MovieService {

  constructor() {}

  fetchBy(data) {
    const queryParams = queryString.stringify(data);

    if (!this.movies$) this.movies$ = new ReplaySubject(1);

    return fetch(`https://reactjs-cdp.herokuapp.com/movies${queryParams ? `?${queryParams}` : ''}`)
      .then(response => response.json(), (err) => alert(JSON.stringify(err)))
      .then(({data}) => {
        this.setAll(data);
        return data;
      })
  }

  getBy(data) {
    if (!this.movies$) this.fetchBy(data);
    return this.movies$.asObservable();
  }

  setAll(movies) {
    this.movies$.next(movies);
  }

  /*
  * GET single movie by Id
  * */
  getById(id) {
    return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
      .then(response => response.json(), (err) => alert(JSON.stringify(err)))
  }
}

export default new MovieService()