import MovieService from './movieService';
import { TypeCheck } from './utils/type-check';

describe('MovieService', () => {
  it('MovieService', () => {
    expect(MovieService).toBeTruthy();
    expect(TypeCheck.isObject(MovieService)).toBeTruthy();
  });

  it('MovieService fetchBy', () => {
    expect(TypeCheck.isFunction(MovieService.fetchBy)).toBeTruthy();

    const result = MovieService.fetchBy({});
    expect(result).toBeTruthy();
  });

  it('MovieService getById', () => {
    expect(TypeCheck.isFunction(MovieService.getById)).toBeTruthy();

    const result = MovieService.getById(1);
    expect(result).toBeTruthy();
  });
});