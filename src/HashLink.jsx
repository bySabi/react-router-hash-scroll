import _hashLink from './_hashLink';
import animateScroll from './scroll';
import React from 'react';

function _animateScroll(event, animate) {
  event.preventDefault();
  const hash = event.target.hash;
  animateScroll(hash, animate);
}

export default function HashLink(props) {
  return <_hashLink {...props} animateScroll={_animateScroll} />;
}
