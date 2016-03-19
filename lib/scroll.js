'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animateScroll;

var _utils = require('./utils');

function animateScroll(hash, animate) {
  var element = document.querySelector(hash);

  var _ref = animate || { offset: 0, duration: 400, easing: easeOutQuad };

  var offset = _ref.offset;
  var duration = _ref.duration;
  var easing = _ref.easing;


  scrollTo(element, offset, duration, easing);
}

function scrollTo(element, offset, duration, easingFunc) {
  var start = (0, _utils.getPageScrollTop)();
  var to = (0, _utils.elementOffsetTop)(element) + offset;
  var change = to - start;
  var increment = 20;

  function animate(elapsedTime) {
    var elapsed = elapsedTime + increment;
    var position = easingFunc(null, elapsed, start, change, duration);

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