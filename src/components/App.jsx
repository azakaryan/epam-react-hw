import { Component } from 'react';
import React from 'react';
import { Route, Switch } from 'react-router';
import routes from '../routes';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    );
  }
}
