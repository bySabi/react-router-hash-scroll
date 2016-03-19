import _hashLink from './_hashLink';
import animateScroll from './scroll';

function _animateScroll(event, animate) {
  setTimeout(() => {
    const hash = window.location.hash;
    if (hash) animateScroll(hash, animate);
  });
}

export default function HashLinkHistory(props) {
  return <_hashLink {...props} animateScroll={_animateScroll} />;
}
