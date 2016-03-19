import _hashLink from './_hashLink';
import animateScroll from './scroll';

function _animateScroll(event, animate) {
  event.preventDefault();
  const hash = event.target.getAttribute('href');
  animateScroll(hash, animate);
}

export default function HashLink(props) {
  return <_hashLink {...props} animateScroll={_animateScroll} />;
}
