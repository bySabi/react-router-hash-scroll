import $ from 'jquery';
import _HashLink from './_HashLink';

function scrollFn(event, scroll) {
  event.preventDefault();
  
  const element = $(event.target);
  const parent = $('html, body');
  const scrollTop= $(element.attr('href')).offset().top;
  const { animate, offset } = scroll || { animate: {duration: 'slow', easing: 'swing'} };

  $(parent).animate({scrollTop: scrollTop + (offset || 0)}, animate);
}

export default function HashLink(props) {
  return <_HashLink {...props} scrollFn={scrollFn} />;
}
