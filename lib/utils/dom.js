import isServer from "./isServer";
import { camelize, isObject } from "./util";
/* istanbul ignore next */

var trim = function trim(s) {
  return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */


export var on = function on(element, event, handler, useCapture) {
  if (useCapture === void 0) {
    useCapture = false;
  }

  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};
/* istanbul ignore next */

export var off = function off(element, event, handler, useCapture) {
  if (useCapture === void 0) {
    useCapture = false;
  }

  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};
/* istanbul ignore next */

export var once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(this, args);
    }

    off(el, event, listener);
  };

  on(el, event, listener);
};
/* istanbul ignore next */

export function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');

  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
/* istanbul ignore next */

export function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }

  if (!el.classList) {
    el.className = curClass;
  }
}
/* istanbul ignore next */

export function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }

  if (!el.classList) {
    el.className = trim(curClass);
  }
}
/* istanbul ignore next */
// Here I want to use the type CSSStyleDeclaration, but the definition for CSSStyleDeclaration
// has { [index: number]: string } in its type annotation, which does not satisfy the method
// camelize(s: string)
// Same as the return type

export var getStyle = function getStyle(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelize(styleName);

  if (styleName === 'float') {
    styleName = 'cssFloat';
  }

  try {
    var style = element.style[styleName];
    if (style) return style;
    var computed = document.defaultView.getComputedStyle(element, '');
    return computed ? computed[styleName] : '';
  } catch (e) {
    return element.style[styleName];
  }
};
/* istanbul ignore next */

export function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (isObject(styleName)) {
    Object.keys(styleName).forEach(function (prop) {
      setStyle(element, prop, styleName[prop]);
    });
  } else {
    styleName = camelize(styleName);
    element.style[styleName] = value;
  }
}
export function removeStyle(element, style) {
  if (!element || !style) return;

  if (isObject(style)) {
    Object.keys(style).forEach(function (prop) {
      setStyle(element, prop, '');
    });
  } else {
    setStyle(element, style, '');
  }
}
export var isScroll = function isScroll(el, isVertical) {
  if (isServer) return;
  var determinedDirection = isVertical === null || isVertical === undefined;
  var overflow = determinedDirection ? getStyle(el, 'overflow') : isVertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x');
  return overflow.match(/(scroll|auto|overlay)/);
};
export var getScrollContainer = function getScrollContainer(el, isVertical) {
  if (isServer) return;
  var parent = el;

  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }

    if (isScroll(parent, isVertical)) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return parent;
};
export var isInContainer = function isInContainer(el, container) {
  if (isServer || !el || !container) return false;
  var elRect = el.getBoundingClientRect();
  var containerRect;

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};
export var getOffsetTop = function getOffsetTop(el) {
  var offset = 0;
  var parent = el;

  while (parent) {
    offset += parent.offsetTop;
    parent = parent.offsetParent;
  }

  return offset;
};
export var getOffsetTopDistance = function getOffsetTopDistance(el, containerEl) {
  return Math.abs(getOffsetTop(el) - getOffsetTop(containerEl));
};
export var stop = function stop(e) {
  return e.stopPropagation();
};