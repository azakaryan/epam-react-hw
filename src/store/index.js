import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import { appReducer } from './reducers';

export const sampleData = {
  movie: null,
  movies: [],
  filters: {},
  errors: [],
  fetchingMovies: false,
  fetchingMovie: false,
};

export const consoleMessagesProxy = () => next => (action) => {
  // Before action dispatch
  // console.log(` -- Dispatching actions: ${action.type}`);

  // Dispatch the action
  const result = next(action);

  // After action dispatch

  console.log(` >>> After action dispatched: ${action.type}`);
  // console.log(store.getState());

  return result;
};

export const storeFactory = (initialState = sampleData) => {
  return applyMiddleware(thunk, consoleMessagesProxy)(createStore)(appReducer, Immutable.Map(initialState));
};
