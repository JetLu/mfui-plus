import { isNumber } from "./util";
export var isValidWidthUnit = function isValidWidthUnit(val) {
  if (isNumber(val)) {
    return true;
  } else {
    return ['px', 'rem', 'em', 'vw', '%', 'vmin', 'vmax'].some(function (unit) {
      return val.endsWith(unit);
    });
  }
};
export var isValidComponentSize = function isValidComponentSize(val) {
  return ['', 'large', 'medium', 'small', 'mini'].includes(val);
};
export var isValidDatePickType = function isValidDatePickType(val) {
  return ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'monthrange'].includes(val);
};