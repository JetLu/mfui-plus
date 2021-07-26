'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var select = require('../mf-select');

const _Option = select.Option;
_Option.install = (app) => {
  app.component(_Option.name, _Option);
};

exports.default = _Option;
