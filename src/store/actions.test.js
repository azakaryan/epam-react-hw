import { addMovie, addMovies, updateFilters, fetchMovies, fetchMovie, addMovieAlongSimilarMoviesGenres } from './actions';
import { TypeCheck } from '../services/utils/type-check';
import C from './constants';


describe('Reducers', () => {
  it('test addMovie', () => {
    expect(TypeCheck.isFunction(addMovie)).toBeTruthy();

    expect(addMovie('moviePayload').payload).toEqual('moviePayload');
    expect(addMovie('moviePayload').type).toEqual(C.ADD_MOVIE);
  });

  it('test addMovies', () => {
    expect(TypeCheck.isFunction(addMovies)).toBeTruthy();

    expect(addMovies('moviesPayload').payload).toEqual('moviesPayload');
    expect(addMovies('moviesPayload').type).toEqual(C.ADD_MOVIES);
  });

  it('test updateFilters', () => {
    expect(TypeCheck.isFunction(updateFilters)).toBeTruthy();

    expect(updateFilters('filtersPayload').payload).toEqual('filtersPayload');
    expect(updateFilters('filtersPayload').type).toEqual(C.UPDATE_FILTERS);
  });

  it('test fetchMovies', () => {
    expect(TypeCheck.isFunction(fetchMovies)).toBeTruthy();
  });

  it('test fetchMovie', () => {
    expect(TypeCheck.isFunction(fetchMovie)).toBeTruthy();
  });

  it('test addMovieAlongSimilarMoviesGenres', () => {
    expect(TypeCheck.isFunction(addMovieAlongSimilarMoviesGenres)).toBeTruthy();
  });
});
