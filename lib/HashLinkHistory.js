'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = HashLinkHistory;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _HashLink2 = require('./_HashLink');

var _HashLink3 = _interopRequireDefault(_HashLink2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollFn(event, scroll) {
  setTimeout(function () {
    var hash = window.location.hash;

    if (hash) {
      var element = document.querySelector(hash);
      var parent = (0, _jquery2.default)('html, body');
      var scrollTop = (0, _jquery2.default)(element).offset().top - (0, _jquery2.default)(parent).offset().top;

      var _ref = scroll || { animate: { duration: 'slow', easing: 'swing' } };

      var animate = _ref.animate;
      var offset = _ref.offset;


      (0, _jquery2.default)(parent).animate({ scrollTop: scrollTop + (offset || 0) }, animate);
    }
  });
}

function HashLinkHistory(props) {
  return React.createElement(_HashLink3.default, _extends({}, props, { scrollFn: scrollFn }));
}