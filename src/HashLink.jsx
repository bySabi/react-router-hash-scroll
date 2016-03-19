import _hashLink from './_hashLink';
import scrollTo from './scroll';

function animateScroll(event, animate) {
  event.preventDefault();
  
  const hash = event.target.getAttribute('href');
  
/*  
  const element = document.querySelector(hash);
  
  const { offset, duration } = animate || { offset: 0, duration: 400 };

  scrollTo(element, offset, duration);
*/  
}

export default function HashLink(props) {
  return <_hashLink {...props} animateScroll={animateScroll} />;
}
