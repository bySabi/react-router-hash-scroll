'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animateScroll;

var _utils = require('./utils');

function animateScroll(hash, animate) {
  var element = document.querySelector(hash);

  var _ref = animate || {};

  var offset = _ref.offset;
  var duration = _ref.duration;
  var easing = _ref.easing;


  scrollTo(element, offset, duration, easing);
}

function scrollTo(element) {
  var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var duration = arguments.length <= 2 || arguments[2] === undefined ? 400 : arguments[2];
  var easing = arguments.length <= 3 || arguments[3] === undefined ? easeOutQuad : arguments[3];

  var start = (0, _utils.getPageScrollTop)();
  var to = (0, _utils.elementOffsetTop)(element) + offset;
  var change = to - start;
  var increment = 20;

  function animate(elapsedTime) {
    var elapsed = elapsedTime + increment;
    var position = easing(undefined, elapsed, start, change, duration);

    (0, _utils.setPageScrollTop)(position);

    if (elapsed < duration) setTimeout(function () {
      animate(elapsed);
    }, increment);
  }

  animate(0);
}

// jQuery easing 'swing'
function easeOutQuad(x, t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}