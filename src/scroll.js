import {
  getPageScrollTop,
  setPageScrollTop,
  elementOffsetTop
} from './utils';

export default function animateScroll(hash, animate) {
  const element = document.querySelector(hash);
  const { offset, duration, easing } = animate || {} ;

  scrollTo(element, offset, duration, easing);
}

function scrollTo(element, offset = 0, duration = 400, easing = easeOutQuad) {
  const start = getPageScrollTop();
  const to = elementOffsetTop(element) + offset;
  const change = to - start;
  const increment = 20;

  function animate(elapsedTime) {
    const elapsed = elapsedTime + increment;
    const position = easing(undefined, elapsed, start, change, duration);

    setPageScrollTop(position);

    if (elapsed < duration)
      setTimeout(function() { animate(elapsed) }, increment);
  }

  animate(0);
}

// jQuery easing 'swing'
function	easeOutQuad(x, t, b, c, d) {
  return -c *(t/=d)*(t-2) + b;
}
