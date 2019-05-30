import { ReplaySubject } from 'rxjs';

const queryString = require('query-string');
const fetch = require('cross-fetch');

class MovieService {
  constructor() {}

  fetchBy(data) {
    const queryParams = queryString.stringify(data);

    if (!this.movies$) this.movies$ = new ReplaySubject(1);

    return fetch(
      `https://reactjs-cdp.herokuapp.com/movies${
        queryParams ? `?${queryParams}` : ''
      }`,
    )
      .then(response => response.json(), err => alert(JSON.stringify(err)))
      .then(({ data }) => data);
  }

  /*
   * GET single movie by Id
   * */
  getById(id) {
    return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`).then(
      response => response.json(),
      err => alert(JSON.stringify(err)),
    );
  }
}

export default new MovieService();
