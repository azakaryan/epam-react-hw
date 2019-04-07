import React, { Component } from "react";
import style from './sort-filters.css';
import Utils from "../../../services/utils/utils";

export default class SortFilters extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sortByValue: 'release_date',
    };
    // TODO change this.
    this.onSortApply()
  }

  toggleReleaseDate() {
    this.setState({sortByValue: this.state.sortByValue === 'release_date' ? '' : 'release_date'}, this.onSortApply.bind(this));
  }

  toggleRating() {
    this.setState({sortByValue: this.state.sortByValue === 'vote_count' ? '' : 'vote_count'}, this.onSortApply.bind(this));
  }

  onSortApply() {
    this.props.onSortApply(Utils.removeBlankAttributesFromObject({sortBy: this.state.sortByValue}));
  }

  render() {
    return (
      <div className={style.main_container}>

        <div className={style.title}>SORT BY</div>
        <div className={style.content}>
          <label className={this.state.sortByValue === 'release_date' ? style.active : ''} onClick={this.toggleReleaseDate.bind(this)}>release date</label>
          <label className={this.state.sortByValue === 'vote_count' ? style.active : ''} onClick={this.toggleRating.bind(this)}>rating</label>
        </div>

      </div>
    )
  }
}