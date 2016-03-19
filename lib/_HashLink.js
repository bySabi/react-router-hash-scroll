'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function reCreateTo(to) {
  if (typeof to === 'string') return { hash: to, pathname: '' };

  var pathname = to.pathname;

  return _extends({}, to, { pathname: pathname || '' });
}

var _React$PropTypes = _react2.default.PropTypes;
var object = _React$PropTypes.object;
var string = _React$PropTypes.string;
var oneOfType = _React$PropTypes.oneOfType;
var func = _React$PropTypes.func;

var _hashLink = function (_React$Component) {
  _inherits(_hashLink, _React$Component);

  function _hashLink() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, _hashLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_hashLink)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (event) {
      var _this$props = _this.props;
      var onClick = _this$props.onClick;
      var animateScroll = _this$props.animateScroll;
      var animate = _this$props.animate;


      if (onClick) onClick(event);

      animateScroll(event, animate);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_hashLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var to = _props.to;
      var onClick = _props.onClick;

      var props = _objectWithoutProperties(_props, ['to', 'onClick']);

      return _react2.default.createElement(_reactRouter.Link, _extends({ to: reCreateTo(to) }, props, { onClick: this.handleClick }));
    }
  }]);

  return _hashLink;
}(_react2.default.Component);

_hashLink.propTypes = {
  to: oneOfType([string, object]).isRequired,
  onClick: func,
  animateScroll: func,
  animate: object
};
exports.default = _hashLink;