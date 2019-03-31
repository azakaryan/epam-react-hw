import React from "react";
import ReactDOM from 'react-dom';
import MovieDetails from './js/views/movie-details/movie-details.jsx';
import MovieHome from './js/views/movie-home/movie-home.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
 
 const app = document.getElementById("el");

 if (app) {
    ReactDOM.render(
        <Router>
            <Switch>
                <Route path="/" exact component={MovieHome}/>
                <Route path="/movie/:id" component={MovieDetails}/>
            </Switch>
        </Router>,
    app);
 }