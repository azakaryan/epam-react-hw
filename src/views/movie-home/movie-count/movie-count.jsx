import React, { Component } from 'react';
import style from './movie-count.css';

export default class MovieCount extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.main_container}>
        <label id="count" className={style.count}>{this.props.count}</label>
        <span>movies found</span>
      </div>
    );
  }
}
