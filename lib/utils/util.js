import { getCurrentInstance } from 'vue';
import { camelize, capitalize, extend, hasOwn, hyphenate, isArray, isObject, isString, isFunction, looseEqual, toRawType } from '@vue/shared';
import isEqualWith from 'lodash/isEqualWith';
import isServer from "./isServer";
import { warn } from "./error"; // type polyfill for compat isIE method

export var SCOPE = 'Util';
export function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
export var getValueByPath = function getValueByPath(obj, paths) {
  if (paths === void 0) {
    paths = '';
  }

  var ret = obj;
  paths.split('.').map(function (path) {
    var _ret;

    ret = (_ret = ret) == null ? void 0 : _ret[path];
  });
  return ret;
};
export function getPropByPath(obj, path, strict) {
  var _tempObj;

  var tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');
  var keyArr = path.split('.');
  var i = 0;

  for (i; i < keyArr.length - 1; i++) {
    if (!tempObj && !strict) break;
    var key = keyArr[i];

    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }

      break;
    }
  }

  return {
    o: tempObj,
    k: keyArr[i],
    v: (_tempObj = tempObj) == null ? void 0 : _tempObj[keyArr[i]]
  };
}
/**
 * Generate random number in range [0, 1000]
 * Maybe replace with [uuid](https://www.npmjs.com/package/uuid)
 */

export var generateId = function generateId() {
  return Math.floor(Math.random() * 10000);
}; // use isEqual instead
// export const valueEquals

export var escapeRegexpString = function escapeRegexpString(value) {
  if (value === void 0) {
    value = '';
  }

  return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}; // Use native Array.find, Array.findIndex instead
// coerce truthy value to array

export var coerceTruthyValueToArray = function coerceTruthyValueToArray(arr) {
  if (!arr && arr !== 0) {
    return [];
  }

  return Array.isArray(arr) ? arr : [arr];
};
export var isIE = function isIE() {
  return !isServer && !isNaN(Number(document.documentMode));
};
export var isEdge = function isEdge() {
  return !isServer && navigator.userAgent.indexOf('Edge') > -1;
};
export var isFirefox = function isFirefox() {
  return !isServer && !!window.navigator.userAgent.match(/firefox/i);
};
export var autoprefixer = function autoprefixer(style) {
  var rules = ['transform', 'transition', 'animation'];
  var prefixes = ['ms-', 'webkit-'];
  rules.forEach(function (rule) {
    var value = style[rule];

    if (rule && value) {
      prefixes.forEach(function (prefix) {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};
export var kebabCase = hyphenate; // reexport from lodash & vue shared

export { hasOwn // isEmpty,
// isEqual,
, isObject, isArray, isString, capitalize, camelize, looseEqual, extend };
export var isBool = function isBool(val) {
  return typeof val === 'boolean';
};
export var isNumber = function isNumber(val) {
  return typeof val === 'number';
};
export var isHTMLElement = function isHTMLElement(val) {
  return toRawType(val).startsWith('HTML');
};
export function rafThrottle(fn) {
  var locked = false;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (locked) return;
    locked = true;
    window.requestAnimationFrame(function () {
      fn.apply(_this, args);
      locked = false;
    });
  };
}
export var clearTimer = function clearTimer(timer) {
  clearTimeout(timer.value);
  timer.value = null;
};
/**
 * Generating a random int in range (0, max - 1)
 * @param max {number}
 */

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
export function entries(obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
}
export function isUndefined(val) {
  return val === void 0;
}
export { isVNode } from 'vue';
export function useGlobalConfig() {
  var vm = getCurrentInstance();

  if ('$ELEMENT' in vm.proxy) {
    return vm.proxy.$ELEMENT;
  }

  return {};
}
export var arrayFindIndex = function arrayFindIndex(arr, pred) {
  return arr.findIndex(pred);
};
export var arrayFind = function arrayFind(arr, pred) {
  return arr.find(pred);
};
export function isEmpty(val) {
  if (!val && val !== 0 || isArray(val) && !val.length || isObject(val) && !Object.keys(val).length) return true;
  return false;
}
export function arrayFlat(arr) {
  return arr.reduce(function (acm, item) {
    var val = Array.isArray(item) ? arrayFlat(item) : item;
    return acm.concat(val);
  }, []);
}
export function deduplicate(arr) {
  return Array.from(new Set(arr));
}
/**
 * Unwraps refed value
 * @param ref Refed value
 */

export function $(ref) {
  return ref.value;
}
export function addUnit(value) {
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return value + 'px';
  }

  if (process.env.NODE_ENV === 'development') {
    warn(SCOPE, 'binding value must be a string or number');
  }

  return '';
}
/**
 * Enhance `lodash.isEqual` for it always return false even two functions have completely same statements.
 * @param obj The value to compare
 * @param other The other value to compare
 * @returns Returns `true` if the values are equivalent, else `false`.
 * @example
 *  lodash.isEqual(() => 1, () => 1)      // false
 *  isEqualWith(() => 1, () => 1)         // true
 */

export function isEqualWithFunction(obj, other) {
  return isEqualWith(obj, other, function (objVal, otherVal) {
    return isFunction(objVal) && isFunction(otherVal) ? "" + objVal === "" + otherVal : undefined;
  });
}