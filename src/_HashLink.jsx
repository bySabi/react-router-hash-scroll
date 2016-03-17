import React from 'react';
import { Link } from 'react-router';

function reCreateTo(to) {
  if (typeof to === 'string')
    return { hash: to, pathname: '' };

  const { pathname } = to;
  return { ...to, pathname: pathname || '' };
}

const { object, string, oneOfType, func } = React.PropTypes;

export default class _HashLink extends React.Component {

  static propTypes = {
    to: oneOfType([ string, object ]).isRequired,
    scroll: object,
    onClick: func,
    scrollFn: func
  };

  handleClick = (event) => {
    const { onClick, scrollFn, scroll } = this.props;

    if (onClick)
      onClick(event);

    scrollFn(event, scroll);
  }

  render() {
    const { to, onClick, ...props } = this.props;
    return <Link to={reCreateTo(to)} {...props} onClick={this.handleClick} />;
  }
}
