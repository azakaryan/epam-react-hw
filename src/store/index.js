import {createStore, applyMiddleware} from "redux";
import {appReducer} from './reducers.js';
import thunk from 'redux-thunk';

export const sampleData = {
  "movie": null,
  "movies": [],
  "filters": {},
  "errors": [],
  "fetchingMovies": false,
  "fetchingMovie": false,
};

const consoleMessagesProxy = store => next => action => {
  let result;
  // Before action dispatch
  // console.log(` -- Dispatching actions: ${action.type}`);

  // Dispatch the action
  result = next(action);

  // After action dispatch

  console.log(` >>> After action dispatched: ${action.type}`);
  // console.log(store.getState());

  return result;
};

export const storeFactory = (initialState = sampleData) => {
  return applyMiddleware(thunk, consoleMessagesProxy)(createStore)(appReducer, initialState);
};