import React from 'react';
import { Link } from 'react-router';

function reCreateTo(to) {
  if (typeof to === 'string')
    return { hash: to, pathname: '' };

  const { pathname } = to;
  return { ...to, pathname: pathname || '' };
}

const { object, string, oneOfType, func } = React.PropTypes;

export default class _hashLink extends React.Component {

  static propTypes = {
    to: oneOfType([ string, object ]).isRequired,
    onClick: func,
    animateScroll: func,
    animate: object
  }
  
  animateScroll = (animate) => {
    const { hash } = this.props;
    const element = document.querySelector(hash);
    const { offset, duration } = animate || { offset: 0, duration: 400 };

    scrollTo(element, offset, duration);    
  }
  
  handleClick = (event) => {
    const { onClick, animateScroll, animate } = this.props;

    if (onClick)
      onClick(event);

    animateScroll(event, animate);
  }

  render() {
    const { to, onClick, ...props } = this.props;
    return <Link to={reCreateTo(to)} {...props} onClick={this.handleClick} />;
  }
}
