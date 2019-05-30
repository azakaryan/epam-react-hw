import { TypeCheck } from './type-check';

export default class Utils {
  static removeBlankAttributesFromObject(obj, all = false) {
    for (const propName in obj) {
      const val = obj[propName];
      if (val === null || val === undefined || val === '' || all && (this.isEmptyArray(val) || this.isEmptyObject(val))) delete obj[propName];
    }
    return obj;
  }

  static isEmptyObject(obj) {
    if (!TypeCheck.isObject(obj)) return false;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  static isEmptyArray(item) {
    return TypeCheck.isArray(item) && item.length === 0;
  }
}
