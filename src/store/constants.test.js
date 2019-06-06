import { TypeCheck } from '../services/utils/type-check';
import C from './constants';

describe('Constants', () => {
  it('test Constants', () => {
    expect(TypeCheck.isObject(C)).toBeTruthy();
  });

  it('test keys', () => {
    expect('ADD_ERROR' in C).toBeTruthy();
    expect('CLEAR_ERROR' in C).toBeTruthy();
  });

  it('test values', () => {
    expect(C.ADD_ERROR).toEqual('ADD_ERROR');
  });
});
