import $ from 'jquery';
import _HashLink from './_HashLink';

function scrollFn(event, scroll) {
  setTimeout(() => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      const parent = $('html, body');
      const scrollTop = $(element).offset().top - $(parent).offset().top;
      const { animate, offset } = scroll || { animate: {duration: 'slow', easing: 'swing'} };

      $(parent).animate({scrollTop: scrollTop + (offset || 0)}, animate);
    }
  });
}

export default function HashLinkHistory(props) {
  return <_HashLink {...props} scrollFn={scrollFn} />;
}
