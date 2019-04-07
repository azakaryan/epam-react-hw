import React, { Component } from "react";
import style from './search-filters.css';
import Button from "@material-ui/core/Button/Button";
import Utils from "../../../services/utils/utils";

export default class SearchFilters extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        filters: null,
        searchValue: '',
        searchByValue: '',
    };
  }

  toggleTitle() {
    this.setState({searchByValue: this.state.searchByValue === 'title' ? '' : 'title'});
  }

  toggleGenre() {
    this.setState({searchByValue: this.state.searchByValue === 'genres' ? '' : 'genres'});
  }

  handleInputValueChange(event) {
    this.setState({searchValue: event.target.value});
  }

  onSearch() {
    this.state.filters = Utils.removeBlankAttributesFromObject({
      search: this.state.searchValue,
      searchBy: this.state.searchByValue,
    });
    this.props.onFiltersApply(this.state.filters)
  }

  render() {
    return (
      <div className={style.main_container}>

          <label className={style.label}>FIND YOUR MOVIE</label>
          <div className={style.input_wrapper}>
            <input type="text" value={this.state.searchValue} onChange={this.handleInputValueChange.bind(this)} />
          </div>
          <div className={style.filters_wrapper}>
              <label>SEARCH BY</label>
              <div className={style.search_by_btns}>
                  <Button variant="contained" color={this.state.searchByValue === 'title' ? 'primary' : 'default'} onClick={this.toggleTitle.bind(this)}>TITLE</Button>
                  <Button variant="contained" color={this.state.searchByValue === 'genres' ? 'primary' : 'default'} onClick={this.toggleGenre.bind(this)}>GENRE</Button>
              </div>
              <div className={style.search_btn}>
                  <Button variant="contained" color='primary' onClick={this.onSearch.bind(this)}>SEARCH</Button>
              </div>
          </div>

      </div>
    )
  }
}