'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _utils = require('./utils');

function scrollTo(element, offset, duration) {
  var start = (0, _utils.getPageScrollTop)();
  var to = (0, _utils.elementOffsetTop)(element) + offset;
  var change = to - start;
  var increment = 20;

  function animate(elapsedTime) {
    var elapsed = elapsedTime + increment;
    var position = easeInOut(elapsed, start, change, duration);

    (0, _utils.setPageScrollTop)(position);

    if (elapsed < duration) setTimeout(function () {
      animate(elapsed);
    }, increment);
  }

  animate(0);
}

function easeInOut(currentTime, start, change, duration) {
  currentTime /= duration / 2;
  if (currentTime < 1) {
    return change / 2 * currentTime * currentTime + start;
  }
  currentTime -= 1;
  return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}