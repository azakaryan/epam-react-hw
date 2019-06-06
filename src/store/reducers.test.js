import { movie, movies, filters, errors, fetchingMovies, fetchingMovie, appReducer } from './reducers';
import { TypeCheck } from '../services/utils/type-check';
import C from './constants';


describe('Reducers', () => {
  it('test movie', () => {
    expect(TypeCheck.isFunction(movie)).toBeTruthy();
    expect(movie({}, { type: C.ADD_MOVIES, payload: 'payload' })).toEqual({});
    expect(movie({}, { type: C.ADD_MOVIE, payload: 'payload' })).toEqual('payload');
  });

  it('test movies', () => {
    expect(TypeCheck.isFunction(movies)).toBeTruthy();
    expect(movies({}, { type: C.ADD_MOVIE, payload: 'payload' })).toEqual({});
    expect(movies({}, { type: C.ADD_MOVIES, payload: 'payload' })).toEqual('payload');
  });

  it('test filters', () => {
    expect(TypeCheck.isFunction(filters)).toBeTruthy();
    expect(filters({}, { type: C.ADD_MOVIE, payload: 'payload' })).toEqual({});
    expect(filters({ queryParam: 'cc' }, { type: C.UPDATE_FILTERS, payload: { query: 'aaa' } })).toEqual({ queryParam: 'cc', query: 'aaa' });
  });

  it('test fetchingMovies', () => {
    expect(TypeCheck.isFunction(fetchingMovies)).toBeTruthy();
    expect(fetchingMovies(undefined, { type: C.UPDATE_FILTERS })).toEqual(false);
    expect(fetchingMovies(true, { type: C.UPDATE_FILTERS })).toEqual(true);

    expect(fetchingMovies(true, { type: C.START_FETCHING_MOVIES })).toEqual(true);
    expect(fetchingMovies(false, { type: C.START_FETCHING_MOVIES })).toEqual(true);
    expect(fetchingMovies(true, { type: C.CANCEL_FETCHING_MOVIES })).toEqual(false);
    expect(fetchingMovies(false, { type: C.CANCEL_FETCHING_MOVIES })).toEqual(false);
  });

  it('test fetchingMovie', () => {
    expect(TypeCheck.isFunction(fetchingMovie)).toBeTruthy();
    expect(fetchingMovie(undefined, { type: C.UPDATE_FILTERS })).toEqual(false);
    expect(fetchingMovie(true, { type: C.UPDATE_FILTERS })).toEqual(true);

    expect(fetchingMovie(true, { type: C.START_FETCHING_MOVIE })).toEqual(true);
    expect(fetchingMovie(false, { type: C.START_FETCHING_MOVIE })).toEqual(true);
    expect(fetchingMovie(true, { type: C.CANCEL_FETCHING_MOVIE })).toEqual(false);
    expect(fetchingMovie(false, { type: C.CANCEL_FETCHING_MOVIE })).toEqual(false);
  });

  it('test errors', () => {
    expect(TypeCheck.isFunction(errors)).toBeTruthy();
    expect(errors(undefined, { type: C.UPDATE_FILTERS })).toEqual([]);
    expect(errors([], { type: C.UPDATE_FILTERS })).toEqual([]);

    expect(errors([], { type: C.ADD_ERROR, payload: 'err_2' })).toEqual(['err_2']);
    expect(errors(['err_1'], { type: C.ADD_ERROR, payload: 'err_1' })).toEqual(['err_1', 'err_1']);
    expect(errors(['err_1'], { type: C.ADD_ERROR, payload: 'err_2' })).toEqual(['err_1', 'err_2']);
    expect(errors(['err_1'], { type: C.CLEAR_ERROR , payload: 'err_2' })).toEqual(['err_1']);
    expect(errors(['err_1'], { type: C.CLEAR_ERROR , payload: 'err_1' })).toEqual([]);
  });

  it('test combineReducers', () => {
    expect(TypeCheck.isFunction(appReducer)).toBeTruthy();
  });
});
