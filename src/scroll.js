import {
  getPageScrollTop,
  setPageScrollTop,
  elementOffsetTop
} from './utils';

export default function animateScroll(event, animate) {
  const hash = event.target.getAttribute('href');
  const element = document.querySelector(hash);
  const { offset, duration } = animate || { offset: 0, duration: 400 };

  scrollTo(element, offset, duration);
}

function scrollTo(element, offset, duration) {
  const start = getPageScrollTop();
  const to = elementOffsetTop(element) + offset;
  const change = to - start;
  const increment = 20;

  function animate(elapsedTime) {
    const elapsed = elapsedTime + increment;
    const position = easeInOut(elapsed, start, change, duration);

    setPageScrollTop(position);

    if (elapsed < duration)
      setTimeout(function() { animate(elapsed) }, increment);
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

