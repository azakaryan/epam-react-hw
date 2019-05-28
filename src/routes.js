import MovieHome from "./views/movie-home/movie-home.container";
import MovieDetails from "./views/movie-details/movie-details.container";
import React from "react";

const routes = [
  {
    path: "/",
    exact: true,
    component: MovieHome
  },
  {
    path: "/movie/:id",
    component: MovieDetails
  }
];

export default routes;