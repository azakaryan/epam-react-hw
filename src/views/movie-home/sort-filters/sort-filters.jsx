import React, { Component } from 'react';
import style from './sort-filters.css';
import Utils from '../../../services/utils/utils';

export default class SortFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByValue: 'release_date',
    };
  }

  componentDidMount() {
    this.onSortApply();
  }

  onSortApply() {
    this.props.onFiltersApply(
      Utils.removeBlankAttributesFromObject({ sortBy: this.state.sortByValue }),
    );
  }

  toggleRating() {
    this.setState(
      { sortByValue: this.state.sortByValue === 'vote_count' ? '' : 'vote_count' },
      this.onSortApply.bind(this),
    );
  }

  toggleReleaseDate() {
    this.setState(
      { sortByValue: this.state.sortByValue === 'release_date' ? '' : 'release_date' },
      this.onSortApply.bind(this),
    );
  }


  render() {
    return (
      <div className={style.main_container}>
        <div className={style.title}>SORT BY</div>
        <div className={style.content}>
          <label
            id="release_date"
            className={this.state.sortByValue === 'release_date' ? style.active : ''}
            onClick={this.toggleReleaseDate.bind(this)}
          >
            release date
          </label>
          <label
            id="rating"
            className={this.state.sortByValue === 'vote_count' ? style.active : ''}
            onClick={this.toggleRating.bind(this)}
          >
            rating
          </label>
        </div>
      </div>
    );
  }
}
