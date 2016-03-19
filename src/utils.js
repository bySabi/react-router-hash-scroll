export function getPageScrollTop() {
  // $('html, body').scrollTop
  return document.documentElement.scrollTop || document.body.scrollTop;
}

export function setPageScrollTop(position) {
  document.documentElement.scrollTop = document.body.scrollTop = position;
}

export function elementOffsetTop(element) {
  const rect = element.getBoundingClientRect();
  return rect.top + getPageScrollTop();
}
