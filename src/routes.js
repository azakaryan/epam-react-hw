import React from 'react';
import MovieHome from './views/movie-home/movie-home.container';
import MovieDetails from './views/movie-details/movie-details.container';

const routes = [
  {
    path: '/',
    exact: true,
    component: MovieHome,
  },
  {
    path: '/movie/:id',
    component: MovieDetails,
  },
];

export default routes;
