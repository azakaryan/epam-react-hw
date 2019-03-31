import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

  goHome() {
    debugger
  }
  
  render() { 
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.goHome}>SEARCH</Button>
        <h1>Details works!!!</h1>
      </div>
    )
  }
}