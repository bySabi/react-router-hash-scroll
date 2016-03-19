"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageScrollTop = getPageScrollTop;
exports.setPageScrollTop = setPageScrollTop;
exports.elementOffsetTop = elementOffsetTop;
function getPageScrollTop() {
  // $('html, body').scrollTop
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function setPageScrollTop(position) {
  document.documentElement.scrollTop = document.body.scrollTop = position;
}

function elementOffsetTop(element) {
  var rect = element.getBoundingClientRect();
  return rect.top + getPageScrollTop();
}