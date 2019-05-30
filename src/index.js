import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storeFactory } from './store/index';
import App from './components/App';

const app = document.getElementById('el');

if (app) {
  const localStorageData = localStorage['redux-store'];
  const store = storeFactory(localStorageData ? JSON.parse(localStorageData) : undefined);
  const saveState = () => localStorage['redux-store'] = JSON.stringify(store.getState());
  store.subscribe(saveState);

  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    app,
  );
}
