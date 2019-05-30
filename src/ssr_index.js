import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, matchPath } from 'react-router-dom';
import routes from './routes';
import { storeFactory } from './store/index';
import App from './components/App';


import 'source-map-support/register';

const app = express();
app.use(cors());

app.use(express.static('public'));


app.get('*', (req, res, next) => {
  console.log('called ---->>>>  >>> >>>>');
  const store = storeFactory();

  const promises = routes.reduce((acc, route) => {
    if (matchPath(req.url, route) && route.component && route.component.initialAction) {
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
    }
    return acc;
  }, []);

  Promise.all(promises)
    .then(() => {
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        </Provider>,
      );

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <link rel="stylesheet" type="text/css" href="/main.css">
            <script src="/bundle.js" defer></script>
          </head>
          <body>
            <div id="el">${markup}</div>
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening');
});
