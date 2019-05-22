import {createStore, applyMiddleware} from "redux";
import {appReducer} from './reducers.js';
import thunk from 'redux-thunk';

const consoleMessagesProxy = store => next => action => {
  let result;
  // Before action dispatch
  console.log(` -- Dispatching actions: ${action.type}`);

  // Dispatch the action
  result = next(action);

  // After action dispatch

  console.log(` >>> After action dispatched: ${action.type}`);
  console.log(store.getState());

  return result;
};

export default (initialState = {}) => {
  return applyMiddleware(thunk, consoleMessagesProxy)(createStore)(appReducer, initialState);
};