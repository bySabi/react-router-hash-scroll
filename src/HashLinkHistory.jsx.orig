import _hashLink from './_hashLink';
import scrollTo from './scroll';

function animateScroll(event, animate) {
  setTimeout(() => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);

      const { offset, duration } = animate || { offset: 0, duration: 400 };

      scrollTo(element, offset, duration);
    }
  });
}

export default function HashLinkHistory(props) {
  return <_hashLink {...props} animateScroll={animateScroll} />;
}
