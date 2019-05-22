import React from "react";
import ReactDOM from 'react-dom';
import MovieDetails from './views/movie-details/movie-details.container.js';
import MovieHome from './views/movie-home/movie-home.container.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux';
import storeFactory from './store/index.js';
const sampleData = {
  "movie": null,
  "movies": [],
  "errors": [],
  "fetchingMovies": false,
  "fetchingMovie": false,
};

const app = document.getElementById("el");

if (app) {

  const localStorageData = localStorage['redux-store'];
  const store = storeFactory(localStorageData ? JSON.parse(localStorageData) : sampleData);
  const saveState = () => localStorage['redux-store'] = JSON.stringify(store.getState());
  store.subscribe(saveState);

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={MovieHome}/>
          <Route path="/movie/:id" component={MovieDetails}/>
        </Switch>
      </Router>
    </Provider>,
    app
  );
}