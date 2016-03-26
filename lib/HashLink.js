'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = HashLink;

var _hashLink2 = require('./_hashLink');

var _hashLink3 = _interopRequireDefault(_hashLink2);

var _scroll = require('./scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _animateScroll(event, animate) {
  event.preventDefault();
  var hash = event.target.hash;
  (0, _scroll2.default)(hash, animate);
}

function HashLink(props) {
  return _react2.default.createElement(_hashLink3.default, _extends({}, props, { animateScroll: _animateScroll }));
}