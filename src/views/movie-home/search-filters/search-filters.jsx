import React, { Component } from 'react';
import Button from '@material-ui/core/Button/Button';
import style from './search-filters.css';

export default class SearchFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchBy: '',
    };
  }

  toggleTitle() {
    this.setState({ searchBy: this.state.searchBy === 'title' ? '' : 'title' });
  }

  toggleGenre() {
    this.setState({
      searchBy: this.state.searchBy === 'genres' ? '' : 'genres',
    });
  }

  handleInputValueChange(event) {
    this.setState({ search: event.target.value });
  }

  onSearch() {
    const { search, searchBy } = this.state;
    this.props.onFiltersApply({ search, searchBy });
  }

  render() {
    return (
      <div className={style.main_container}>
        <label className={style.label}>FIND YOUR MOVIE</label>
        <div className={style.input_wrapper}>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleInputValueChange.bind(this)}
          />
        </div>
        <div className={style.filters_wrapper}>
          <label>SEARCH BY</label>
          <div className={style.search_by_btns}>
            <Button
              variant="contained"
              color={this.state.searchBy === 'title' ? 'primary' : 'default'}
              onClick={this.toggleTitle.bind(this)}
            >
              TITLE
            </Button>
            <Button
              variant="contained"
              color={this.state.searchBy === 'genres' ? 'primary' : 'default'}
              onClick={this.toggleGenre.bind(this)}
            >
              GENRE
            </Button>
          </div>
          <div className={style.search_btn}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onSearch.bind(this)}
            >
              SEARCH
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
