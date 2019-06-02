import { from } from 'rxjs';
import { TypeCheck } from './type-check';

describe('TypeCheck tests', () => {
  /*
   * isArray
   * */
  test('isArray Success case', () => {
    expect(TypeCheck.isArray([])).toBe(true);
  });

  test('isArray Error case', () => {
    expect(TypeCheck.isArray(undefined)).not.toBe(true);
  });

  test('isArray Error case', () => {
    expect(TypeCheck.isArray({ name: 3 })).not.toBe(true);
  });

  /*
   * isObject
   * */
  test('isObject Success case', () => {
    expect(TypeCheck.isObject({ name: 3 })).toBe(true);
  });

  test('isObject Error case', () => {
    expect(TypeCheck.isObject([])).not.toBe(true);
  });

  test('isObject Error case 2', () => {
    expect(TypeCheck.isObject(() => {})).not.toBe(true);
  });

  test('isObject Error case 3', () => {
    expect(TypeCheck.isObject(4)).not.toBe(true);
  });

  test('isObject Error case 4', () => {
    expect(TypeCheck.isObject('string')).not.toBe(true);
  });

  test('isObject Error case 5', () => {
    expect(TypeCheck.isObject(null)).not.toBe(true);
  });

  /*
   * isString
   * */
  test('isString Success case', () => {
    expect(TypeCheck.isString('hello')).toBe(true);
  });

  test('isString Error case', () => {
    expect(TypeCheck.isString(false)).not.toBe(true);
  });

  /*
   * isFunction
   * */
  test('isFunction Success case', () => {
    expect(TypeCheck.isFunction(() => {})).toBe(true);
  });

  test('isFunction Error case', () => {
    expect(TypeCheck.isFunction({})).not.toBe(true);
  });

  /*
   * isBoolean
   * */
  test('isBoolean Success case', () => {
    expect(TypeCheck.isBoolean(true)).toBe(true);
  });

  test('isBoolean Error case', () => {
    expect(TypeCheck.isBoolean({})).not.toBe(true);
  });

  /*
   * isNumber
   * */
  test('isNumber Success case', () => {
    expect(TypeCheck.isNumber(234)).toBe(true);
  });

  test('isNumber Error case', () => {
    expect(TypeCheck.isNumber({})).not.toBe(true);
  });

  /*
   * isObservable
   * */
  test('isObservable Success case', () => {
    expect(TypeCheck.isObservable(from([1, 2, 3]))).toBe(true);
  });

  test('isObservable Error case', () => {
    expect(TypeCheck.isObservable(new Promise(() => {}))).not.toBe(true);
  });
});
