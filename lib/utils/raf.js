import isServer from "./isServer";

var rAF = function rAF(fn) {
  return setTimeout(fn, 16);
};

var cAF = function cAF(handle) {
  return clearTimeout(handle);
};

if (!isServer) {
  rAF = function rAF(fn) {
    return window.requestAnimationFrame(fn);
  };

  cAF = function cAF(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

export { rAF, cAF };