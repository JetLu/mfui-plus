import defaultLang from "./lang/en";
import dayjs from 'dayjs';
var lang = defaultLang;
var i18nHandler = null;
export var i18n = function i18n(fn) {
  i18nHandler = fn;
};

function template(str, option) {
  if (!str || !option) return str;
  return str.replace(/\{(\w+)\}/g, function (match, key) {
    return option[key];
  });
}

export var t = function t() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (i18nHandler) return i18nHandler.apply(void 0, args);
  var path = args[0],
      option = args[1];
  var value;
  var array = path.split('.');
  var current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    value = current[property];
    if (i === j - 1) return template(value, option);
    if (!value) return '';
    current = value;
  }

  return '';
};
export var use = function use(l) {
  lang = l || lang;

  if (lang.name) {
    dayjs.locale(lang.name);
  }
};
export default {
  use: use,
  t: t,
  i18n: i18n
};