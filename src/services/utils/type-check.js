import { Observable } from 'rxjs';

export class TypeCheck {
  static isArray(data) {
    return Object.prototype.toString.call(data) === '[object Array]';
  }

  static isObject(data) {
    return Object.prototype.toString.call(data) === '[object Object]';
  }

  static isString(data) {
    return typeof data === 'string';
  }

  static isFunction(data) {
    return data && {}.toString.call(data) === '[object Function]';
  }

  static isBoolean(data) {
    return typeof data === 'boolean';
  }

  static isNumber(data) {
    return typeof data === 'number';
  }

  static isObservable(data) {
    return data instanceof Observable;
  }
}
