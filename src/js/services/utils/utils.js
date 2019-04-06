import {TypeCheck} from "./type-check";

export default class Utils {

    static removeblankAttributesfromObject(obj, all = false) {
      for (const propName in obj) {
          const val = obj[propName];
          if (val === null || val === undefined || val === '' || all && this.isEmptyArray(val) || this.isEmptyObject(val)) delete obj[propName];
      }
      return obj;
    }

    static isEmptyObject(item) {
      return TypeCheck.isObject(item) && this.isObjectEmpty(item);
    }

    static isEmptyArray(item) {
      return TypeCheck.isArray(item) && item.length === 0;
    }

    static isObjectEmpty(obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    }

}