this["wp"] = this["wp"] || {}; this["wp"]["blockEditor"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 357);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(27);
var PropTypes = __webpack_require__(31);
var autosize = __webpack_require__(112);
var _getLineHeight = __webpack_require__(113);
var getLineHeight = _getLineHeight;
var UPDATE = 'autosize:update';
var DESTROY = 'autosize:destroy';
var RESIZED = 'autosize:resized';
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
var TextareaAutosize = /** @class */ (function (_super) {
    __extends(TextareaAutosize, _super);
    function TextareaAutosize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lineHeight: null
        };
        _this.dispatchEvent = function (EVENT_TYPE) {
            var event = document.createEvent('Event');
            event.initEvent(EVENT_TYPE, true, false);
            _this.textarea.dispatchEvent(event);
        };
        _this.updateLineHeight = function () {
            _this.setState({
                lineHeight: getLineHeight(_this.textarea)
            });
        };
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            _this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
        _this.saveDOMNodeRef = function (ref) {
            var innerRef = _this.props.innerRef;
            if (innerRef) {
                innerRef(ref);
            }
            _this.textarea = ref;
        };
        _this.getLocals = function () {
            var _a = _this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef"]), lineHeight = _a.state.lineHeight, saveDOMNodeRef = _a.saveDOMNodeRef;
            var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
            return __assign({}, props, { saveDOMNodeRef: saveDOMNodeRef, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, onChange: _this.onChange });
        };
        return _this;
    }
    TextareaAutosize.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, onResize = _a.onResize, maxRows = _a.maxRows;
        if (typeof maxRows === 'number') {
            this.updateLineHeight();
        }
        /*
          the defer is needed to:
            - force "autosize" to activate the scrollbar when this.props.maxRows is passed
            - support StyledComponents (see #71)
        */
        setTimeout(function () { return autosize(_this.textarea); });
        if (onResize) {
            this.textarea.addEventListener(RESIZED, onResize);
        }
    };
    TextareaAutosize.prototype.componentWillUnmount = function () {
        var onResize = this.props.onResize;
        if (onResize) {
            this.textarea.removeEventListener(RESIZED, onResize);
        }
        this.dispatchEvent(DESTROY);
    };
    TextareaAutosize.prototype.render = function () {
        var _a = this.getLocals(), children = _a.children, saveDOMNodeRef = _a.saveDOMNodeRef, locals = __rest(_a, ["children", "saveDOMNodeRef"]);
        return (React.createElement("textarea", __assign({}, locals, { ref: saveDOMNodeRef }), children));
    };
    TextareaAutosize.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.value !== this.currentValue || this.props.rows !== prevProps.rows) {
            this.dispatchEvent(UPDATE);
        }
    };
    TextareaAutosize.defaultProps = {
        rows: 1
    };
    TextareaAutosize.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.func
    };
    return TextareaAutosize;
}(React.Component));
exports["default"] = TextareaAutosize;


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Load in dependencies
var computedStyle = __webpack_require__(114);

/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

    // Calculate the em based height
    lnHeightStr = computedStyle(node, 'line-height');
    lnHeight = parseFloat(lnHeightStr, 10);

    // Revert the lineHeight style
    if (_lnHeightStyle) {
      node.style.lineHeight = _lnHeightStyle;
    } else {
      delete node.style.lineHeight;
    }
  }

  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
  // DEV: `em` units are converted to `pt` in IE6
  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
  if (lnHeightStr.indexOf('pt') !== -1) {
    lnHeight *= 4;
    lnHeight /= 3;
  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
  } else if (lnHeightStr.indexOf('mm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 25.4;
  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
  } else if (lnHeightStr.indexOf('cm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 2.54;
  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
  } else if (lnHeightStr.indexOf('in') !== -1) {
    lnHeight *= 96;
  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
  } else if (lnHeightStr.indexOf('pc') !== -1) {
    lnHeight *= 16;
  }

  // Continue our computation
  lnHeight = Math.round(lnHeight);

  // If the line-height is "normal", calculate by font-size
  if (lnHeightStr === 'normal') {
    // Create a temporary node
    var nodeName = node.nodeName;
    var _node = document.createElement(nodeName);
    _node.innerHTML = '&nbsp;';

    // If we have a text area, reset it to only 1 row
    // https://github.com/twolfson/line-height/issues/4
    if (nodeName.toUpperCase() === 'TEXTAREA') {
      _node.setAttribute('rows', '1');
    }

    // Set the font-size of the element
    var fontSizeStr = computedStyle(node, 'font-size');
    _node.style.fontSize = fontSizeStr;

    // Remove default padding/border which can affect offset height
    // https://github.com/twolfson/line-height/issues/4
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    _node.style.padding = '0px';
    _node.style.border = '0px';

    // Append it to the body
    var body = document.body;
    body.appendChild(_node);

    // Assume the line height of the element is the height
    var height = _node.offsetHeight;
    lnHeight = height;

    // Remove our child from the DOM
    body.removeChild(_node);
  }

  // Return the calculated height
  return lnHeight;
}

// Export lineHeight
module.exports = lineHeight;


/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function (el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
    // If we have getComputedStyle
    getComputedStyle ?
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle(el) :

    // Otherwise, we are in IE and use currentStyle
      el.currentStyle
  )[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })
  ];
};

module.exports = computedStyle;


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(116);

function scrollIntoView(elem, container, config) {
  config = config || {};
  // document 归一化到 window
  if (container.nodeType === 9) {
    container = util.getWindow(container);
  }

  var allowHorizontalScroll = config.allowHorizontalScroll;
  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
  var alignWithTop = config.alignWithTop;
  var alignWithLeft = config.alignWithLeft;
  var offsetTop = config.offsetTop || 0;
  var offsetLeft = config.offsetLeft || 0;
  var offsetBottom = config.offsetBottom || 0;
  var offsetRight = config.offsetRight || 0;

  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;

  var isWin = util.isWindow(container);
  var elemOffset = util.offset(elem);
  var eh = util.outerHeight(elem);
  var ew = util.outerWidth(elem);
  var containerOffset = undefined;
  var ch = undefined;
  var cw = undefined;
  var containerScroll = undefined;
  var diffTop = undefined;
  var diffBottom = undefined;
  var win = undefined;
  var winScroll = undefined;
  var ww = undefined;
  var wh = undefined;

  if (isWin) {
    win = container;
    wh = util.height(win);
    ww = util.width(win);
    winScroll = {
      left: util.scrollLeft(win),
      top: util.scrollTop(win)
    };
    // elem 相对 container 可视视窗的距离
    diffTop = {
      left: elemOffset.left - winScroll.left - offsetLeft,
      top: elemOffset.top - winScroll.top - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
    };
    containerScroll = winScroll;
  } else {
    containerOffset = util.offset(container);
    ch = container.clientHeight;
    cw = container.clientWidth;
    containerScroll = {
      left: container.scrollLeft,
      top: container.scrollTop
    };
    // elem 相对 container 可视视窗的距离
    // 注意边框, offset 是边框到根节点
    diffTop = {
      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
    };
  }

  if (diffTop.top < 0 || diffBottom.top > 0) {
    // 强制向上
    if (alignWithTop === true) {
      util.scrollTop(container, containerScroll.top + diffTop.top);
    } else if (alignWithTop === false) {
      util.scrollTop(container, containerScroll.top + diffBottom.top);
    } else {
      // 自动调整
      if (diffTop.top < 0) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  } else {
    if (!onlyScrollIfNeeded) {
      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
      if (alignWithTop) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  }

  if (allowHorizontalScroll) {
    if (diffTop.left < 0 || diffBottom.left > 0) {
      // 强制向上
      if (alignWithLeft === true) {
        util.scrollLeft(container, containerScroll.left + diffTop.left);
      } else if (alignWithLeft === false) {
        util.scrollLeft(container, containerScroll.left + diffBottom.left);
      } else {
        // 自动调整
        if (diffTop.left < 0) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    } else {
      if (!onlyScrollIfNeeded) {
        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
        if (alignWithLeft) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    }
  }
}

module.exports = scrollIntoView;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

function getClientPosition(elem) {
  var box = undefined;
  var x = undefined;
  var y = undefined;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function _getComputedStyle(elem, name, computedStyle_) {
  var val = '';
  var d = elem.ownerDocument;
  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

var getComputedStyleX = undefined;
if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = undefined;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = undefined;
  var j = undefined;
  var i = undefined;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = undefined;
        if (prop === 'border') {
          cssProp = prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj != null && obj == obj.window;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, extra) {
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue == null || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  }
  if (borderBoxValueOrIsBorderBox) {
    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
    return val + (extra === BORDER_INDEX ? 0 : padding);
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay(elem) {
  var val = undefined;
  var args = arguments;
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value += 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, val) {
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

// 设置 elem 相对 elem.ownerDocument 的坐标
function setOffset(elem, offset) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var old = getOffset(elem);
  var ret = {};
  var current = undefined;
  var key = undefined;

  for (key in offset) {
    if (offset.hasOwnProperty(key)) {
      current = parseFloat(css(elem, key)) || 0;
      ret[key] = current + offset[key] - old[key];
    }
  }
  css(elem, ret);
}

module.exports = _extends({
  getWindow: function getWindow(node) {
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value) {
    if (typeof value !== 'undefined') {
      setOffset(el, value);
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var ret = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },
  scrollLeft: function scrollLeft(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollLeft(w);
      }
      window.scrollTo(v, getScrollTop(w));
    } else {
      if (v === undefined) {
        return w.scrollLeft;
      }
      w.scrollLeft = v;
    }
  },
  scrollTop: function scrollTop(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollTop(w);
      }
      window.scrollTo(getScrollLeft(w), v);
    } else {
      if (v === undefined) {
        return w.scrollTop;
      }
      w.scrollTop = v;
    }
  },

  viewportWidth: 0,
  viewportHeight: 0
}, domUtils);

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["tokenList"]; }());

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["richText"]; }());

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

/*!

 diff v3.5.0

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.canonicalize = exports.convertChangesToXML = exports.convertChangesToDMP = exports.merge = exports.parsePatch = exports.applyPatches = exports.applyPatch = exports.createPatch = exports.createTwoFilesPatch = exports.structuredPatch = exports.diffArrays = exports.diffJson = exports.diffCss = exports.diffSentences = exports.diffTrimmedLines = exports.diffLines = exports.diffWordsWithSpace = exports.diffWords = exports.diffChars = exports.Diff = undefined;

	/*istanbul ignore end*/var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_character = __webpack_require__(2) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_word = __webpack_require__(3) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_sentence = __webpack_require__(6) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_css = __webpack_require__(7) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_json = __webpack_require__(8) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_array = __webpack_require__(9) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_apply = __webpack_require__(10) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_merge = __webpack_require__(13) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_create = __webpack_require__(14) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_dmp = __webpack_require__(16) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_xml = __webpack_require__(17) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/* See LICENSE file for terms of use */

	/*
	 * Text diff implementation.
	 *
	 * This library supports the following APIS:
	 * JsDiff.diffChars: Character by character diff
	 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
	 * JsDiff.diffLines: Line based diff
	 *
	 * JsDiff.diffCss: Diff targeted at CSS content
	 *
	 * These methods are based on the implementation proposed in
	 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
	 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
	 */
	exports. /*istanbul ignore end*/Diff = _base2['default'];
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffChars = _character.diffChars;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWords = _word.diffWords;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = _word.diffWordsWithSpace;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffLines = _line.diffLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = _line.diffTrimmedLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffSentences = _sentence.diffSentences;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffCss = _css.diffCss;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffJson = _json.diffJson;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffArrays = _array.diffArrays;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/structuredPatch = _create.structuredPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = _create.createTwoFilesPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = _create.createPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatch = _apply.applyPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = _apply.applyPatches;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/parsePatch = _parse.parsePatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/merge = _merge.merge;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToDMP = _dmp.convertChangesToDMP;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/convertChangesToXML = _xml.convertChangesToXML;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = _json.canonicalize;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEaWZmIiwiZGlmZkNoYXJzIiwiZGlmZldvcmRzIiwiZGlmZldvcmRzV2l0aFNwYWNlIiwiZGlmZkxpbmVzIiwiZGlmZlRyaW1tZWRMaW5lcyIsImRpZmZTZW50ZW5jZXMiLCJkaWZmQ3NzIiwiZGlmZkpzb24iLCJkaWZmQXJyYXlzIiwic3RydWN0dXJlZFBhdGNoIiwiY3JlYXRlVHdvRmlsZXNQYXRjaCIsImNyZWF0ZVBhdGNoIiwiYXBwbHlQYXRjaCIsImFwcGx5UGF0Y2hlcyIsInBhcnNlUGF0Y2giLCJtZXJnZSIsImNvbnZlcnRDaGFuZ2VzVG9ETVAiLCJjb252ZXJ0Q2hhbmdlc1RvWE1MIiwiY2Fub25pY2FsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozt1QkFnQkE7Ozs7dUJBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFqQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O2dDQWtDRUEsSTt5REFFQUMsUzt5REFDQUMsUzt5REFDQUMsa0I7eURBQ0FDLFM7eURBQ0FDLGdCO3lEQUNBQyxhO3lEQUVBQyxPO3lEQUNBQyxRO3lEQUVBQyxVO3lEQUVBQyxlO3lEQUNBQyxtQjt5REFDQUMsVzt5REFDQUMsVTt5REFDQUMsWTt5REFDQUMsVTt5REFDQUMsSzt5REFDQUMsbUI7eURBQ0FDLG1CO3lEQUNBQyxZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2VlIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMgb2YgdXNlICovXG5cbi8qXG4gKiBUZXh0IGRpZmYgaW1wbGVtZW50YXRpb24uXG4gKlxuICogVGhpcyBsaWJyYXJ5IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgQVBJUzpcbiAqIEpzRGlmZi5kaWZmQ2hhcnM6IENoYXJhY3RlciBieSBjaGFyYWN0ZXIgZGlmZlxuICogSnNEaWZmLmRpZmZXb3JkczogV29yZCAoYXMgZGVmaW5lZCBieSBcXGIgcmVnZXgpIGRpZmYgd2hpY2ggaWdub3JlcyB3aGl0ZXNwYWNlXG4gKiBKc0RpZmYuZGlmZkxpbmVzOiBMaW5lIGJhc2VkIGRpZmZcbiAqXG4gKiBKc0RpZmYuZGlmZkNzczogRGlmZiB0YXJnZXRlZCBhdCBDU1MgY29udGVudFxuICpcbiAqIFRoZXNlIG1ldGhvZHMgYXJlIGJhc2VkIG9uIHRoZSBpbXBsZW1lbnRhdGlvbiBwcm9wb3NlZCBpblxuICogXCJBbiBPKE5EKSBEaWZmZXJlbmNlIEFsZ29yaXRobSBhbmQgaXRzIFZhcmlhdGlvbnNcIiAoTXllcnMsIDE5ODYpLlxuICogaHR0cDovL2NpdGVzZWVyeC5pc3QucHN1LmVkdS92aWV3ZG9jL3N1bW1hcnk/ZG9pPTEwLjEuMS40LjY5MjdcbiAqL1xuaW1wb3J0IERpZmYgZnJvbSAnLi9kaWZmL2Jhc2UnO1xuaW1wb3J0IHtkaWZmQ2hhcnN9IGZyb20gJy4vZGlmZi9jaGFyYWN0ZXInO1xuaW1wb3J0IHtkaWZmV29yZHMsIGRpZmZXb3Jkc1dpdGhTcGFjZX0gZnJvbSAnLi9kaWZmL3dvcmQnO1xuaW1wb3J0IHtkaWZmTGluZXMsIGRpZmZUcmltbWVkTGluZXN9IGZyb20gJy4vZGlmZi9saW5lJztcbmltcG9ydCB7ZGlmZlNlbnRlbmNlc30gZnJvbSAnLi9kaWZmL3NlbnRlbmNlJztcblxuaW1wb3J0IHtkaWZmQ3NzfSBmcm9tICcuL2RpZmYvY3NzJztcbmltcG9ydCB7ZGlmZkpzb24sIGNhbm9uaWNhbGl6ZX0gZnJvbSAnLi9kaWZmL2pzb24nO1xuXG5pbXBvcnQge2RpZmZBcnJheXN9IGZyb20gJy4vZGlmZi9hcnJheSc7XG5cbmltcG9ydCB7YXBwbHlQYXRjaCwgYXBwbHlQYXRjaGVzfSBmcm9tICcuL3BhdGNoL2FwcGx5JztcbmltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXRjaC9wYXJzZSc7XG5pbXBvcnQge21lcmdlfSBmcm9tICcuL3BhdGNoL21lcmdlJztcbmltcG9ydCB7c3RydWN0dXJlZFBhdGNoLCBjcmVhdGVUd29GaWxlc1BhdGNoLCBjcmVhdGVQYXRjaH0gZnJvbSAnLi9wYXRjaC9jcmVhdGUnO1xuXG5pbXBvcnQge2NvbnZlcnRDaGFuZ2VzVG9ETVB9IGZyb20gJy4vY29udmVydC9kbXAnO1xuaW1wb3J0IHtjb252ZXJ0Q2hhbmdlc1RvWE1MfSBmcm9tICcuL2NvbnZlcnQveG1sJztcblxuZXhwb3J0IHtcbiAgRGlmZixcblxuICBkaWZmQ2hhcnMsXG4gIGRpZmZXb3JkcyxcbiAgZGlmZldvcmRzV2l0aFNwYWNlLFxuICBkaWZmTGluZXMsXG4gIGRpZmZUcmltbWVkTGluZXMsXG4gIGRpZmZTZW50ZW5jZXMsXG5cbiAgZGlmZkNzcyxcbiAgZGlmZkpzb24sXG5cbiAgZGlmZkFycmF5cyxcblxuICBzdHJ1Y3R1cmVkUGF0Y2gsXG4gIGNyZWF0ZVR3b0ZpbGVzUGF0Y2gsXG4gIGNyZWF0ZVBhdGNoLFxuICBhcHBseVBhdGNoLFxuICBhcHBseVBhdGNoZXMsXG4gIHBhcnNlUGF0Y2gsXG4gIG1lcmdlLFxuICBjb252ZXJ0Q2hhbmdlc1RvRE1QLFxuICBjb252ZXJ0Q2hhbmdlc1RvWE1MLFxuICBjYW5vbmljYWxpemVcbn07XG4iXX0=


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports['default'] = /*istanbul ignore end*/Diff;
	function Diff() {}

	Diff.prototype = {
	  /*istanbul ignore start*/ /*istanbul ignore end*/diff: function diff(oldString, newString) {
	    /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var callback = options.callback;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    this.options = options;

	    var self = this;

	    function done(value) {
	      if (callback) {
	        setTimeout(function () {
	          callback(undefined, value);
	        }, 0);
	        return true;
	      } else {
	        return value;
	      }
	    }

	    // Allow subclasses to massage the input prior to running
	    oldString = this.castInput(oldString);
	    newString = this.castInput(newString);

	    oldString = this.removeEmpty(this.tokenize(oldString));
	    newString = this.removeEmpty(this.tokenize(newString));

	    var newLen = newString.length,
	        oldLen = oldString.length;
	    var editLength = 1;
	    var maxEditLength = newLen + oldLen;
	    var bestPath = [{ newPos: -1, components: [] }];

	    // Seed editLength = 0, i.e. the content starts with the same values
	    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
	    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
	      // Identity per the equality and tokenizer
	      return done([{ value: this.join(newString), count: newString.length }]);
	    }

	    // Main worker method. checks all permutations of a given edit length for acceptance.
	    function execEditLength() {
	      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
	        var basePath = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	        var addPath = bestPath[diagonalPath - 1],
	            removePath = bestPath[diagonalPath + 1],
	            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
	        if (addPath) {
	          // No one else is going to attempt to use this value, clear it
	          bestPath[diagonalPath - 1] = undefined;
	        }

	        var canAdd = addPath && addPath.newPos + 1 < newLen,
	            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
	        if (!canAdd && !canRemove) {
	          // If this path is a terminal then prune
	          bestPath[diagonalPath] = undefined;
	          continue;
	        }

	        // Select the diagonal that we want to branch from. We select the prior
	        // path whose position in the new string is the farthest from the origin
	        // and does not pass the bounds of the diff graph
	        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
	          basePath = clonePath(removePath);
	          self.pushComponent(basePath.components, undefined, true);
	        } else {
	          basePath = addPath; // No need to clone, we've pulled it from the list
	          basePath.newPos++;
	          self.pushComponent(basePath.components, true, undefined);
	        }

	        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

	        // If we have hit the end of both strings, then we are done
	        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
	          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
	        } else {
	          // Otherwise track this path as a potential candidate and continue.
	          bestPath[diagonalPath] = basePath;
	        }
	      }

	      editLength++;
	    }

	    // Performs the length of edit iteration. Is a bit fugly as this has to support the
	    // sync and async mode which is never fun. Loops over execEditLength until a value
	    // is produced.
	    if (callback) {
	      (function exec() {
	        setTimeout(function () {
	          // This should not happen, but we want to be safe.
	          /* istanbul ignore next */
	          if (editLength > maxEditLength) {
	            return callback();
	          }

	          if (!execEditLength()) {
	            exec();
	          }
	        }, 0);
	      })();
	    } else {
	      while (editLength <= maxEditLength) {
	        var ret = execEditLength();
	        if (ret) {
	          return ret;
	        }
	      }
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/pushComponent: function pushComponent(components, added, removed) {
	    var last = components[components.length - 1];
	    if (last && last.added === added && last.removed === removed) {
	      // We need to clone here as the component clone operation is just
	      // as shallow array clone
	      components[components.length - 1] = { count: last.count + 1, added: added, removed: removed };
	    } else {
	      components.push({ count: 1, added: added, removed: removed });
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
	    var newLen = newString.length,
	        oldLen = oldString.length,
	        newPos = basePath.newPos,
	        oldPos = newPos - diagonalPath,
	        commonCount = 0;
	    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
	      newPos++;
	      oldPos++;
	      commonCount++;
	    }

	    if (commonCount) {
	      basePath.components.push({ count: commonCount });
	    }

	    basePath.newPos = newPos;
	    return oldPos;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/equals: function equals(left, right) {
	    if (this.options.comparator) {
	      return this.options.comparator(left, right);
	    } else {
	      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
	    }
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/removeEmpty: function removeEmpty(array) {
	    var ret = [];
	    for (var i = 0; i < array.length; i++) {
	      if (array[i]) {
	        ret.push(array[i]);
	      }
	    }
	    return ret;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/castInput: function castInput(value) {
	    return value;
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/tokenize: function tokenize(value) {
	    return value.split('');
	  },
	  /*istanbul ignore start*/ /*istanbul ignore end*/join: function join(chars) {
	    return chars.join('');
	  }
	};

	function buildValues(diff, components, newString, oldString, useLongestToken) {
	  var componentPos = 0,
	      componentLen = components.length,
	      newPos = 0,
	      oldPos = 0;

	  for (; componentPos < componentLen; componentPos++) {
	    var component = components[componentPos];
	    if (!component.removed) {
	      if (!component.added && useLongestToken) {
	        var value = newString.slice(newPos, newPos + component.count);
	        value = value.map(function (value, i) {
	          var oldValue = oldString[oldPos + i];
	          return oldValue.length > value.length ? oldValue : value;
	        });

	        component.value = diff.join(value);
	      } else {
	        component.value = diff.join(newString.slice(newPos, newPos + component.count));
	      }
	      newPos += component.count;

	      // Common case
	      if (!component.added) {
	        oldPos += component.count;
	      }
	    } else {
	      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
	      oldPos += component.count;

	      // Reverse add and remove so removes are output first to match common convention
	      // The diffing algorithm is tied to add then remove output and this is the simplest
	      // route to get the desired output with minimal overhead.
	      if (componentPos && components[componentPos - 1].added) {
	        var tmp = components[componentPos - 1];
	        components[componentPos - 1] = components[componentPos];
	        components[componentPos] = tmp;
	      }
	    }
	  }

	  // Special case handle for when one terminal is ignored (i.e. whitespace).
	  // For this case we merge the terminal into the prior string and drop the change.
	  // This is only available for string mode.
	  var lastComponent = components[componentLen - 1];
	  if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
	    components[componentLen - 2].value += lastComponent.value;
	    components.pop();
	  }

	  return components;
	}

	function clonePath(path) {
	  return { newPos: path.newPos, components: path.components.slice(0) };
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Jhc2UuanMiXSwibmFtZXMiOlsiRGlmZiIsInByb3RvdHlwZSIsImRpZmYiLCJvbGRTdHJpbmciLCJuZXdTdHJpbmciLCJvcHRpb25zIiwiY2FsbGJhY2siLCJzZWxmIiwiZG9uZSIsInZhbHVlIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImNhc3RJbnB1dCIsInJlbW92ZUVtcHR5IiwidG9rZW5pemUiLCJuZXdMZW4iLCJsZW5ndGgiLCJvbGRMZW4iLCJlZGl0TGVuZ3RoIiwibWF4RWRpdExlbmd0aCIsImJlc3RQYXRoIiwibmV3UG9zIiwiY29tcG9uZW50cyIsIm9sZFBvcyIsImV4dHJhY3RDb21tb24iLCJqb2luIiwiY291bnQiLCJleGVjRWRpdExlbmd0aCIsImRpYWdvbmFsUGF0aCIsImJhc2VQYXRoIiwiYWRkUGF0aCIsInJlbW92ZVBhdGgiLCJjYW5BZGQiLCJjYW5SZW1vdmUiLCJjbG9uZVBhdGgiLCJwdXNoQ29tcG9uZW50IiwiYnVpbGRWYWx1ZXMiLCJ1c2VMb25nZXN0VG9rZW4iLCJleGVjIiwicmV0IiwiYWRkZWQiLCJyZW1vdmVkIiwibGFzdCIsInB1c2giLCJjb21tb25Db3VudCIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsImNvbXBhcmF0b3IiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJhcnJheSIsImkiLCJzcGxpdCIsImNoYXJzIiwiY29tcG9uZW50UG9zIiwiY29tcG9uZW50TGVuIiwiY29tcG9uZW50Iiwic2xpY2UiLCJtYXAiLCJvbGRWYWx1ZSIsInRtcCIsImxhc3RDb21wb25lbnQiLCJwb3AiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7NENBQXdCQSxJO0FBQVQsU0FBU0EsSUFBVCxHQUFnQixDQUFFOztBQUVqQ0EsS0FBS0MsU0FBTCxHQUFpQjtBQUFBLG1EQUNmQyxJQURlLGdCQUNWQyxTQURVLEVBQ0NDLFNBREQsRUFDMEI7QUFBQSx3REFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUN2QyxRQUFJQyxXQUFXRCxRQUFRQyxRQUF2QjtBQUNBLFFBQUksT0FBT0QsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUNqQ0MsaUJBQVdELE9BQVg7QUFDQUEsZ0JBQVUsRUFBVjtBQUNEO0FBQ0QsU0FBS0EsT0FBTCxHQUFlQSxPQUFmOztBQUVBLFFBQUlFLE9BQU8sSUFBWDs7QUFFQSxhQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDbkIsVUFBSUgsUUFBSixFQUFjO0FBQ1pJLG1CQUFXLFlBQVc7QUFBRUosbUJBQVNLLFNBQVQsRUFBb0JGLEtBQXBCO0FBQTZCLFNBQXJELEVBQXVELENBQXZEO0FBQ0EsZUFBTyxJQUFQO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsZUFBT0EsS0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQU4sZ0JBQVksS0FBS1MsU0FBTCxDQUFlVCxTQUFmLENBQVo7QUFDQUMsZ0JBQVksS0FBS1EsU0FBTCxDQUFlUixTQUFmLENBQVo7O0FBRUFELGdCQUFZLEtBQUtVLFdBQUwsQ0FBaUIsS0FBS0MsUUFBTCxDQUFjWCxTQUFkLENBQWpCLENBQVo7QUFDQUMsZ0JBQVksS0FBS1MsV0FBTCxDQUFpQixLQUFLQyxRQUFMLENBQWNWLFNBQWQsQ0FBakIsQ0FBWjs7QUFFQSxRQUFJVyxTQUFTWCxVQUFVWSxNQUF2QjtBQUFBLFFBQStCQyxTQUFTZCxVQUFVYSxNQUFsRDtBQUNBLFFBQUlFLGFBQWEsQ0FBakI7QUFDQSxRQUFJQyxnQkFBZ0JKLFNBQVNFLE1BQTdCO0FBQ0EsUUFBSUcsV0FBVyxDQUFDLEVBQUVDLFFBQVEsQ0FBQyxDQUFYLEVBQWNDLFlBQVksRUFBMUIsRUFBRCxDQUFmOztBQUVBO0FBQ0EsUUFBSUMsU0FBUyxLQUFLQyxhQUFMLENBQW1CSixTQUFTLENBQVQsQ0FBbkIsRUFBZ0NoQixTQUFoQyxFQUEyQ0QsU0FBM0MsRUFBc0QsQ0FBdEQsQ0FBYjtBQUNBLFFBQUlpQixTQUFTLENBQVQsRUFBWUMsTUFBWixHQUFxQixDQUFyQixJQUEwQk4sTUFBMUIsSUFBb0NRLFNBQVMsQ0FBVCxJQUFjTixNQUF0RCxFQUE4RDtBQUM1RDtBQUNBLGFBQU9ULEtBQUssQ0FBQyxFQUFDQyxPQUFPLEtBQUtnQixJQUFMLENBQVVyQixTQUFWLENBQVIsRUFBOEJzQixPQUFPdEIsVUFBVVksTUFBL0MsRUFBRCxDQUFMLENBQVA7QUFDRDs7QUFFRDtBQUNBLGFBQVNXLGNBQVQsR0FBMEI7QUFDeEIsV0FBSyxJQUFJQyxlQUFlLENBQUMsQ0FBRCxHQUFLVixVQUE3QixFQUF5Q1UsZ0JBQWdCVixVQUF6RCxFQUFxRVUsZ0JBQWdCLENBQXJGLEVBQXdGO0FBQ3RGLFlBQUlDLDBDQUFKO0FBQ0EsWUFBSUMsVUFBVVYsU0FBU1EsZUFBZSxDQUF4QixDQUFkO0FBQUEsWUFDSUcsYUFBYVgsU0FBU1EsZUFBZSxDQUF4QixDQURqQjtBQUFBLFlBRUlMLFVBQVMsQ0FBQ1EsYUFBYUEsV0FBV1YsTUFBeEIsR0FBaUMsQ0FBbEMsSUFBdUNPLFlBRnBEO0FBR0EsWUFBSUUsT0FBSixFQUFhO0FBQ1g7QUFDQVYsbUJBQVNRLGVBQWUsQ0FBeEIsSUFBNkJqQixTQUE3QjtBQUNEOztBQUVELFlBQUlxQixTQUFTRixXQUFXQSxRQUFRVCxNQUFSLEdBQWlCLENBQWpCLEdBQXFCTixNQUE3QztBQUFBLFlBQ0lrQixZQUFZRixjQUFjLEtBQUtSLE9BQW5CLElBQTZCQSxVQUFTTixNQUR0RDtBQUVBLFlBQUksQ0FBQ2UsTUFBRCxJQUFXLENBQUNDLFNBQWhCLEVBQTJCO0FBQ3pCO0FBQ0FiLG1CQUFTUSxZQUFULElBQXlCakIsU0FBekI7QUFDQTtBQUNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFlBQUksQ0FBQ3FCLE1BQUQsSUFBWUMsYUFBYUgsUUFBUVQsTUFBUixHQUFpQlUsV0FBV1YsTUFBekQsRUFBa0U7QUFDaEVRLHFCQUFXSyxVQUFVSCxVQUFWLENBQVg7QUFDQXhCLGVBQUs0QixhQUFMLENBQW1CTixTQUFTUCxVQUE1QixFQUF3Q1gsU0FBeEMsRUFBbUQsSUFBbkQ7QUFDRCxTQUhELE1BR087QUFDTGtCLHFCQUFXQyxPQUFYLENBREssQ0FDaUI7QUFDdEJELG1CQUFTUixNQUFUO0FBQ0FkLGVBQUs0QixhQUFMLENBQW1CTixTQUFTUCxVQUE1QixFQUF3QyxJQUF4QyxFQUE4Q1gsU0FBOUM7QUFDRDs7QUFFRFksa0JBQVNoQixLQUFLaUIsYUFBTCxDQUFtQkssUUFBbkIsRUFBNkJ6QixTQUE3QixFQUF3Q0QsU0FBeEMsRUFBbUR5QixZQUFuRCxDQUFUOztBQUVBO0FBQ0EsWUFBSUMsU0FBU1IsTUFBVCxHQUFrQixDQUFsQixJQUF1Qk4sTUFBdkIsSUFBaUNRLFVBQVMsQ0FBVCxJQUFjTixNQUFuRCxFQUEyRDtBQUN6RCxpQkFBT1QsS0FBSzRCLFlBQVk3QixJQUFaLEVBQWtCc0IsU0FBU1AsVUFBM0IsRUFBdUNsQixTQUF2QyxFQUFrREQsU0FBbEQsRUFBNkRJLEtBQUs4QixlQUFsRSxDQUFMLENBQVA7QUFDRCxTQUZELE1BRU87QUFDTDtBQUNBakIsbUJBQVNRLFlBQVQsSUFBeUJDLFFBQXpCO0FBQ0Q7QUFDRjs7QUFFRFg7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxRQUFJWixRQUFKLEVBQWM7QUFDWCxnQkFBU2dDLElBQVQsR0FBZ0I7QUFDZjVCLG1CQUFXLFlBQVc7QUFDcEI7QUFDQTtBQUNBLGNBQUlRLGFBQWFDLGFBQWpCLEVBQWdDO0FBQzlCLG1CQUFPYixVQUFQO0FBQ0Q7O0FBRUQsY0FBSSxDQUFDcUIsZ0JBQUwsRUFBdUI7QUFDckJXO0FBQ0Q7QUFDRixTQVZELEVBVUcsQ0FWSDtBQVdELE9BWkEsR0FBRDtBQWFELEtBZEQsTUFjTztBQUNMLGFBQU9wQixjQUFjQyxhQUFyQixFQUFvQztBQUNsQyxZQUFJb0IsTUFBTVosZ0JBQVY7QUFDQSxZQUFJWSxHQUFKLEVBQVM7QUFDUCxpQkFBT0EsR0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBOUdjO0FBQUEsbURBZ0hmSixhQWhIZSx5QkFnSERiLFVBaEhDLEVBZ0hXa0IsS0FoSFgsRUFnSGtCQyxPQWhIbEIsRUFnSDJCO0FBQ3hDLFFBQUlDLE9BQU9wQixXQUFXQSxXQUFXTixNQUFYLEdBQW9CLENBQS9CLENBQVg7QUFDQSxRQUFJMEIsUUFBUUEsS0FBS0YsS0FBTCxLQUFlQSxLQUF2QixJQUFnQ0UsS0FBS0QsT0FBTCxLQUFpQkEsT0FBckQsRUFBOEQ7QUFDNUQ7QUFDQTtBQUNBbkIsaUJBQVdBLFdBQVdOLE1BQVgsR0FBb0IsQ0FBL0IsSUFBb0MsRUFBQ1UsT0FBT2dCLEtBQUtoQixLQUFMLEdBQWEsQ0FBckIsRUFBd0JjLE9BQU9BLEtBQS9CLEVBQXNDQyxTQUFTQSxPQUEvQyxFQUFwQztBQUNELEtBSkQsTUFJTztBQUNMbkIsaUJBQVdxQixJQUFYLENBQWdCLEVBQUNqQixPQUFPLENBQVIsRUFBV2MsT0FBT0EsS0FBbEIsRUFBeUJDLFNBQVNBLE9BQWxDLEVBQWhCO0FBQ0Q7QUFDRixHQXpIYztBQUFBLG1EQTBIZmpCLGFBMUhlLHlCQTBIREssUUExSEMsRUEwSFN6QixTQTFIVCxFQTBIb0JELFNBMUhwQixFQTBIK0J5QixZQTFIL0IsRUEwSDZDO0FBQzFELFFBQUliLFNBQVNYLFVBQVVZLE1BQXZCO0FBQUEsUUFDSUMsU0FBU2QsVUFBVWEsTUFEdkI7QUFBQSxRQUVJSyxTQUFTUSxTQUFTUixNQUZ0QjtBQUFBLFFBR0lFLFNBQVNGLFNBQVNPLFlBSHRCO0FBQUEsUUFLSWdCLGNBQWMsQ0FMbEI7QUFNQSxXQUFPdkIsU0FBUyxDQUFULEdBQWFOLE1BQWIsSUFBdUJRLFNBQVMsQ0FBVCxHQUFhTixNQUFwQyxJQUE4QyxLQUFLNEIsTUFBTCxDQUFZekMsVUFBVWlCLFNBQVMsQ0FBbkIsQ0FBWixFQUFtQ2xCLFVBQVVvQixTQUFTLENBQW5CLENBQW5DLENBQXJELEVBQWdIO0FBQzlHRjtBQUNBRTtBQUNBcUI7QUFDRDs7QUFFRCxRQUFJQSxXQUFKLEVBQWlCO0FBQ2ZmLGVBQVNQLFVBQVQsQ0FBb0JxQixJQUFwQixDQUF5QixFQUFDakIsT0FBT2tCLFdBQVIsRUFBekI7QUFDRDs7QUFFRGYsYUFBU1IsTUFBVCxHQUFrQkEsTUFBbEI7QUFDQSxXQUFPRSxNQUFQO0FBQ0QsR0E3SWM7QUFBQSxtREErSWZzQixNQS9JZSxrQkErSVJDLElBL0lRLEVBK0lGQyxLQS9JRSxFQStJSztBQUNsQixRQUFJLEtBQUsxQyxPQUFMLENBQWEyQyxVQUFqQixFQUE2QjtBQUMzQixhQUFPLEtBQUszQyxPQUFMLENBQWEyQyxVQUFiLENBQXdCRixJQUF4QixFQUE4QkMsS0FBOUIsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9ELFNBQVNDLEtBQVQsSUFDRCxLQUFLMUMsT0FBTCxDQUFhNEMsVUFBYixJQUEyQkgsS0FBS0ksV0FBTCxPQUF1QkgsTUFBTUcsV0FBTixFQUR4RDtBQUVEO0FBQ0YsR0F0SmM7QUFBQSxtREF1SmZyQyxXQXZKZSx1QkF1SkhzQyxLQXZKRyxFQXVKSTtBQUNqQixRQUFJWixNQUFNLEVBQVY7QUFDQSxTQUFLLElBQUlhLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsTUFBTW5DLE1BQTFCLEVBQWtDb0MsR0FBbEMsRUFBdUM7QUFDckMsVUFBSUQsTUFBTUMsQ0FBTixDQUFKLEVBQWM7QUFDWmIsWUFBSUksSUFBSixDQUFTUSxNQUFNQyxDQUFOLENBQVQ7QUFDRDtBQUNGO0FBQ0QsV0FBT2IsR0FBUDtBQUNELEdBL0pjO0FBQUEsbURBZ0tmM0IsU0FoS2UscUJBZ0tMSCxLQWhLSyxFQWdLRTtBQUNmLFdBQU9BLEtBQVA7QUFDRCxHQWxLYztBQUFBLG1EQW1LZkssUUFuS2Usb0JBbUtOTCxLQW5LTSxFQW1LQztBQUNkLFdBQU9BLE1BQU00QyxLQUFOLENBQVksRUFBWixDQUFQO0FBQ0QsR0FyS2M7QUFBQSxtREFzS2Y1QixJQXRLZSxnQkFzS1Y2QixLQXRLVSxFQXNLSDtBQUNWLFdBQU9BLE1BQU03QixJQUFOLENBQVcsRUFBWCxDQUFQO0FBQ0Q7QUF4S2MsQ0FBakI7O0FBMktBLFNBQVNXLFdBQVQsQ0FBcUJsQyxJQUFyQixFQUEyQm9CLFVBQTNCLEVBQXVDbEIsU0FBdkMsRUFBa0RELFNBQWxELEVBQTZEa0MsZUFBN0QsRUFBOEU7QUFDNUUsTUFBSWtCLGVBQWUsQ0FBbkI7QUFBQSxNQUNJQyxlQUFlbEMsV0FBV04sTUFEOUI7QUFBQSxNQUVJSyxTQUFTLENBRmI7QUFBQSxNQUdJRSxTQUFTLENBSGI7O0FBS0EsU0FBT2dDLGVBQWVDLFlBQXRCLEVBQW9DRCxjQUFwQyxFQUFvRDtBQUNsRCxRQUFJRSxZQUFZbkMsV0FBV2lDLFlBQVgsQ0FBaEI7QUFDQSxRQUFJLENBQUNFLFVBQVVoQixPQUFmLEVBQXdCO0FBQ3RCLFVBQUksQ0FBQ2dCLFVBQVVqQixLQUFYLElBQW9CSCxlQUF4QixFQUF5QztBQUN2QyxZQUFJNUIsUUFBUUwsVUFBVXNELEtBQVYsQ0FBZ0JyQyxNQUFoQixFQUF3QkEsU0FBU29DLFVBQVUvQixLQUEzQyxDQUFaO0FBQ0FqQixnQkFBUUEsTUFBTWtELEdBQU4sQ0FBVSxVQUFTbEQsS0FBVCxFQUFnQjJDLENBQWhCLEVBQW1CO0FBQ25DLGNBQUlRLFdBQVd6RCxVQUFVb0IsU0FBUzZCLENBQW5CLENBQWY7QUFDQSxpQkFBT1EsU0FBUzVDLE1BQVQsR0FBa0JQLE1BQU1PLE1BQXhCLEdBQWlDNEMsUUFBakMsR0FBNENuRCxLQUFuRDtBQUNELFNBSE8sQ0FBUjs7QUFLQWdELGtCQUFVaEQsS0FBVixHQUFrQlAsS0FBS3VCLElBQUwsQ0FBVWhCLEtBQVYsQ0FBbEI7QUFDRCxPQVJELE1BUU87QUFDTGdELGtCQUFVaEQsS0FBVixHQUFrQlAsS0FBS3VCLElBQUwsQ0FBVXJCLFVBQVVzRCxLQUFWLENBQWdCckMsTUFBaEIsRUFBd0JBLFNBQVNvQyxVQUFVL0IsS0FBM0MsQ0FBVixDQUFsQjtBQUNEO0FBQ0RMLGdCQUFVb0MsVUFBVS9CLEtBQXBCOztBQUVBO0FBQ0EsVUFBSSxDQUFDK0IsVUFBVWpCLEtBQWYsRUFBc0I7QUFDcEJqQixrQkFBVWtDLFVBQVUvQixLQUFwQjtBQUNEO0FBQ0YsS0FsQkQsTUFrQk87QUFDTCtCLGdCQUFVaEQsS0FBVixHQUFrQlAsS0FBS3VCLElBQUwsQ0FBVXRCLFVBQVV1RCxLQUFWLENBQWdCbkMsTUFBaEIsRUFBd0JBLFNBQVNrQyxVQUFVL0IsS0FBM0MsQ0FBVixDQUFsQjtBQUNBSCxnQkFBVWtDLFVBQVUvQixLQUFwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFJNkIsZ0JBQWdCakMsV0FBV2lDLGVBQWUsQ0FBMUIsRUFBNkJmLEtBQWpELEVBQXdEO0FBQ3RELFlBQUlxQixNQUFNdkMsV0FBV2lDLGVBQWUsQ0FBMUIsQ0FBVjtBQUNBakMsbUJBQVdpQyxlQUFlLENBQTFCLElBQStCakMsV0FBV2lDLFlBQVgsQ0FBL0I7QUFDQWpDLG1CQUFXaUMsWUFBWCxJQUEyQk0sR0FBM0I7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsTUFBSUMsZ0JBQWdCeEMsV0FBV2tDLGVBQWUsQ0FBMUIsQ0FBcEI7QUFDQSxNQUFJQSxlQUFlLENBQWYsSUFDRyxPQUFPTSxjQUFjckQsS0FBckIsS0FBK0IsUUFEbEMsS0FFSXFELGNBQWN0QixLQUFkLElBQXVCc0IsY0FBY3JCLE9BRnpDLEtBR0d2QyxLQUFLMkMsTUFBTCxDQUFZLEVBQVosRUFBZ0JpQixjQUFjckQsS0FBOUIsQ0FIUCxFQUc2QztBQUMzQ2EsZUFBV2tDLGVBQWUsQ0FBMUIsRUFBNkIvQyxLQUE3QixJQUFzQ3FELGNBQWNyRCxLQUFwRDtBQUNBYSxlQUFXeUMsR0FBWDtBQUNEOztBQUVELFNBQU96QyxVQUFQO0FBQ0Q7O0FBRUQsU0FBU1ksU0FBVCxDQUFtQjhCLElBQW5CLEVBQXlCO0FBQ3ZCLFNBQU8sRUFBRTNDLFFBQVEyQyxLQUFLM0MsTUFBZixFQUF1QkMsWUFBWTBDLEtBQUsxQyxVQUFMLENBQWdCb0MsS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FBbkMsRUFBUDtBQUNEIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaWZmKCkge31cblxuRGlmZi5wcm90b3R5cGUgPSB7XG4gIGRpZmYob2xkU3RyaW5nLCBuZXdTdHJpbmcsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBkb25lKHZhbHVlKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2sodW5kZWZpbmVkLCB2YWx1ZSk7IH0sIDApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBbGxvdyBzdWJjbGFzc2VzIHRvIG1hc3NhZ2UgdGhlIGlucHV0IHByaW9yIHRvIHJ1bm5pbmdcbiAgICBvbGRTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChvbGRTdHJpbmcpO1xuICAgIG5ld1N0cmluZyA9IHRoaXMuY2FzdElucHV0KG5ld1N0cmluZyk7XG5cbiAgICBvbGRTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUob2xkU3RyaW5nKSk7XG4gICAgbmV3U3RyaW5nID0gdGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKG5ld1N0cmluZykpO1xuXG4gICAgbGV0IG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGg7XG4gICAgbGV0IGVkaXRMZW5ndGggPSAxO1xuICAgIGxldCBtYXhFZGl0TGVuZ3RoID0gbmV3TGVuICsgb2xkTGVuO1xuICAgIGxldCBiZXN0UGF0aCA9IFt7IG5ld1BvczogLTEsIGNvbXBvbmVudHM6IFtdIH1dO1xuXG4gICAgLy8gU2VlZCBlZGl0TGVuZ3RoID0gMCwgaS5lLiB0aGUgY29udGVudCBzdGFydHMgd2l0aCB0aGUgc2FtZSB2YWx1ZXNcbiAgICBsZXQgb2xkUG9zID0gdGhpcy5leHRyYWN0Q29tbW9uKGJlc3RQYXRoWzBdLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgMCk7XG4gICAgaWYgKGJlc3RQYXRoWzBdLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIG9sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAvLyBJZGVudGl0eSBwZXIgdGhlIGVxdWFsaXR5IGFuZCB0b2tlbml6ZXJcbiAgICAgIHJldHVybiBkb25lKFt7dmFsdWU6IHRoaXMuam9pbihuZXdTdHJpbmcpLCBjb3VudDogbmV3U3RyaW5nLmxlbmd0aH1dKTtcbiAgICB9XG5cbiAgICAvLyBNYWluIHdvcmtlciBtZXRob2QuIGNoZWNrcyBhbGwgcGVybXV0YXRpb25zIG9mIGEgZ2l2ZW4gZWRpdCBsZW5ndGggZm9yIGFjY2VwdGFuY2UuXG4gICAgZnVuY3Rpb24gZXhlY0VkaXRMZW5ndGgoKSB7XG4gICAgICBmb3IgKGxldCBkaWFnb25hbFBhdGggPSAtMSAqIGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCA8PSBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggKz0gMikge1xuICAgICAgICBsZXQgYmFzZVBhdGg7XG4gICAgICAgIGxldCBhZGRQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0sXG4gICAgICAgICAgICByZW1vdmVQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoICsgMV0sXG4gICAgICAgICAgICBvbGRQb3MgPSAocmVtb3ZlUGF0aCA/IHJlbW92ZVBhdGgubmV3UG9zIDogMCkgLSBkaWFnb25hbFBhdGg7XG4gICAgICAgIGlmIChhZGRQYXRoKSB7XG4gICAgICAgICAgLy8gTm8gb25lIGVsc2UgaXMgZ29pbmcgdG8gYXR0ZW1wdCB0byB1c2UgdGhpcyB2YWx1ZSwgY2xlYXIgaXRcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYW5BZGQgPSBhZGRQYXRoICYmIGFkZFBhdGgubmV3UG9zICsgMSA8IG5ld0xlbixcbiAgICAgICAgICAgIGNhblJlbW92ZSA9IHJlbW92ZVBhdGggJiYgMCA8PSBvbGRQb3MgJiYgb2xkUG9zIDwgb2xkTGVuO1xuICAgICAgICBpZiAoIWNhbkFkZCAmJiAhY2FuUmVtb3ZlKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGRpYWdvbmFsIHRoYXQgd2Ugd2FudCB0byBicmFuY2ggZnJvbS4gV2Ugc2VsZWN0IHRoZSBwcmlvclxuICAgICAgICAvLyBwYXRoIHdob3NlIHBvc2l0aW9uIGluIHRoZSBuZXcgc3RyaW5nIGlzIHRoZSBmYXJ0aGVzdCBmcm9tIHRoZSBvcmlnaW5cbiAgICAgICAgLy8gYW5kIGRvZXMgbm90IHBhc3MgdGhlIGJvdW5kcyBvZiB0aGUgZGlmZiBncmFwaFxuICAgICAgICBpZiAoIWNhbkFkZCB8fCAoY2FuUmVtb3ZlICYmIGFkZFBhdGgubmV3UG9zIDwgcmVtb3ZlUGF0aC5uZXdQb3MpKSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBjbG9uZVBhdGgocmVtb3ZlUGF0aCk7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBhZGRQYXRoOyAgIC8vIE5vIG5lZWQgdG8gY2xvbmUsIHdlJ3ZlIHB1bGxlZCBpdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgYmFzZVBhdGgubmV3UG9zKys7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHRydWUsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRQb3MgPSBzZWxmLmV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgYm90aCBzdHJpbmdzLCB0aGVuIHdlIGFyZSBkb25lXG4gICAgICAgIGlmIChiYXNlUGF0aC5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgICAgIHJldHVybiBkb25lKGJ1aWxkVmFsdWVzKHNlbGYsIGJhc2VQYXRoLmNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBzZWxmLnVzZUxvbmdlc3RUb2tlbikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSB0cmFjayB0aGlzIHBhdGggYXMgYSBwb3RlbnRpYWwgY2FuZGlkYXRlIGFuZCBjb250aW51ZS5cbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWRpdExlbmd0aCsrO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm1zIHRoZSBsZW5ndGggb2YgZWRpdCBpdGVyYXRpb24uIElzIGEgYml0IGZ1Z2x5IGFzIHRoaXMgaGFzIHRvIHN1cHBvcnQgdGhlXG4gICAgLy8gc3luYyBhbmQgYXN5bmMgbW9kZSB3aGljaCBpcyBuZXZlciBmdW4uIExvb3BzIG92ZXIgZXhlY0VkaXRMZW5ndGggdW50aWwgYSB2YWx1ZVxuICAgIC8vIGlzIHByb2R1Y2VkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgKGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IHdlIHdhbnQgdG8gYmUgc2FmZS5cbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFleGVjRWRpdExlbmd0aCgpKSB7XG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChlZGl0TGVuZ3RoIDw9IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgbGV0IHJldCA9IGV4ZWNFZGl0TGVuZ3RoKCk7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHB1c2hDb21wb25lbnQoY29tcG9uZW50cywgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICBsZXQgbGFzdCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdCAmJiBsYXN0LmFkZGVkID09PSBhZGRlZCAmJiBsYXN0LnJlbW92ZWQgPT09IHJlbW92ZWQpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gY2xvbmUgaGVyZSBhcyB0aGUgY29tcG9uZW50IGNsb25lIG9wZXJhdGlvbiBpcyBqdXN0XG4gICAgICAvLyBhcyBzaGFsbG93IGFycmF5IGNsb25lXG4gICAgICBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV0gPSB7Y291bnQ6IGxhc3QuY291bnQgKyAxLCBhZGRlZDogYWRkZWQsIHJlbW92ZWQ6IHJlbW92ZWQgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50cy5wdXNoKHtjb3VudDogMSwgYWRkZWQ6IGFkZGVkLCByZW1vdmVkOiByZW1vdmVkIH0pO1xuICAgIH1cbiAgfSxcbiAgZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCkge1xuICAgIGxldCBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoLFxuICAgICAgICBuZXdQb3MgPSBiYXNlUGF0aC5uZXdQb3MsXG4gICAgICAgIG9sZFBvcyA9IG5ld1BvcyAtIGRpYWdvbmFsUGF0aCxcblxuICAgICAgICBjb21tb25Db3VudCA9IDA7XG4gICAgd2hpbGUgKG5ld1BvcyArIDEgPCBuZXdMZW4gJiYgb2xkUG9zICsgMSA8IG9sZExlbiAmJiB0aGlzLmVxdWFscyhuZXdTdHJpbmdbbmV3UG9zICsgMV0sIG9sZFN0cmluZ1tvbGRQb3MgKyAxXSkpIHtcbiAgICAgIG5ld1BvcysrO1xuICAgICAgb2xkUG9zKys7XG4gICAgICBjb21tb25Db3VudCsrO1xuICAgIH1cblxuICAgIGlmIChjb21tb25Db3VudCkge1xuICAgICAgYmFzZVBhdGguY29tcG9uZW50cy5wdXNoKHtjb3VudDogY29tbW9uQ291bnR9KTtcbiAgICB9XG5cbiAgICBiYXNlUGF0aC5uZXdQb3MgPSBuZXdQb3M7XG4gICAgcmV0dXJuIG9sZFBvcztcbiAgfSxcblxuICBlcXVhbHMobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29tcGFyYXRvcihsZWZ0LCByaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodFxuICAgICAgICB8fCAodGhpcy5vcHRpb25zLmlnbm9yZUNhc2UgJiYgbGVmdC50b0xvd2VyQ2FzZSgpID09PSByaWdodC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUVtcHR5KGFycmF5KSB7XG4gICAgbGV0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXSkge1xuICAgICAgICByZXQucHVzaChhcnJheVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIGNhc3RJbnB1dCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgdG9rZW5pemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpO1xuICB9LFxuICBqb2luKGNoYXJzKSB7XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBidWlsZFZhbHVlcyhkaWZmLCBjb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgdXNlTG9uZ2VzdFRva2VuKSB7XG4gIGxldCBjb21wb25lbnRQb3MgPSAwLFxuICAgICAgY29tcG9uZW50TGVuID0gY29tcG9uZW50cy5sZW5ndGgsXG4gICAgICBuZXdQb3MgPSAwLFxuICAgICAgb2xkUG9zID0gMDtcblxuICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgaWYgKCFjb21wb25lbnQucmVtb3ZlZCkge1xuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQgJiYgdXNlTG9uZ2VzdFRva2VuKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCk7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uKHZhbHVlLCBpKSB7XG4gICAgICAgICAgbGV0IG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xuICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS5sZW5ndGggPiB2YWx1ZS5sZW5ndGggPyBvbGRWYWx1ZSA6IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4odmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgfVxuICAgICAgbmV3UG9zICs9IGNvbXBvbmVudC5jb3VudDtcblxuICAgICAgLy8gQ29tbW9uIGNhc2VcbiAgICAgIGlmICghY29tcG9uZW50LmFkZGVkKSB7XG4gICAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihvbGRTdHJpbmcuc2xpY2Uob2xkUG9zLCBvbGRQb3MgKyBjb21wb25lbnQuY291bnQpKTtcbiAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG5cbiAgICAgIC8vIFJldmVyc2UgYWRkIGFuZCByZW1vdmUgc28gcmVtb3ZlcyBhcmUgb3V0cHV0IGZpcnN0IHRvIG1hdGNoIGNvbW1vbiBjb252ZW50aW9uXG4gICAgICAvLyBUaGUgZGlmZmluZyBhbGdvcml0aG0gaXMgdGllZCB0byBhZGQgdGhlbiByZW1vdmUgb3V0cHV0IGFuZCB0aGlzIGlzIHRoZSBzaW1wbGVzdFxuICAgICAgLy8gcm91dGUgdG8gZ2V0IHRoZSBkZXNpcmVkIG91dHB1dCB3aXRoIG1pbmltYWwgb3ZlcmhlYWQuXG4gICAgICBpZiAoY29tcG9uZW50UG9zICYmIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0uYWRkZWQpIHtcbiAgICAgICAgbGV0IHRtcCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV07XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0gPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zXSA9IHRtcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTcGVjaWFsIGNhc2UgaGFuZGxlIGZvciB3aGVuIG9uZSB0ZXJtaW5hbCBpcyBpZ25vcmVkIChpLmUuIHdoaXRlc3BhY2UpLlxuICAvLyBGb3IgdGhpcyBjYXNlIHdlIG1lcmdlIHRoZSB0ZXJtaW5hbCBpbnRvIHRoZSBwcmlvciBzdHJpbmcgYW5kIGRyb3AgdGhlIGNoYW5nZS5cbiAgLy8gVGhpcyBpcyBvbmx5IGF2YWlsYWJsZSBmb3Igc3RyaW5nIG1vZGUuXG4gIGxldCBsYXN0Q29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAxXTtcbiAgaWYgKGNvbXBvbmVudExlbiA+IDFcbiAgICAgICYmIHR5cGVvZiBsYXN0Q29tcG9uZW50LnZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgJiYgKGxhc3RDb21wb25lbnQuYWRkZWQgfHwgbGFzdENvbXBvbmVudC5yZW1vdmVkKVxuICAgICAgJiYgZGlmZi5lcXVhbHMoJycsIGxhc3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAyXS52YWx1ZSArPSBsYXN0Q29tcG9uZW50LnZhbHVlO1xuICAgIGNvbXBvbmVudHMucG9wKCk7XG4gIH1cblxuICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuZnVuY3Rpb24gY2xvbmVQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIHsgbmV3UG9zOiBwYXRoLm5ld1BvcywgY29tcG9uZW50czogcGF0aC5jb21wb25lbnRzLnNsaWNlKDApIH07XG59XG4iXX0=


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.characterDiff = undefined;
	exports. /*istanbul ignore end*/diffChars = diffChars;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var characterDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/characterDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	function diffChars(oldStr, newStr, options) {
	  return characterDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2NoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJkaWZmQ2hhcnMiLCJjaGFyYWN0ZXJEaWZmIiwib2xkU3RyIiwibmV3U3RyIiwib3B0aW9ucyIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBR2dCQSxTLEdBQUFBLFM7O0FBSGhCOzs7Ozs7dUJBRU8sSUFBTUMseUZBQWdCLHdFQUF0QjtBQUNBLFNBQVNELFNBQVQsQ0FBbUJFLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFBRSxTQUFPSCxjQUFjSSxJQUFkLENBQW1CSCxNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNDLE9BQW5DLENBQVA7QUFBcUQiLCJmaWxlIjoiY2hhcmFjdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNvbnN0IGNoYXJhY3RlckRpZmYgPSBuZXcgRGlmZigpO1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDaGFycyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykgeyByZXR1cm4gY2hhcmFjdGVyRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTsgfVxuIl19


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.wordDiff = undefined;
	exports. /*istanbul ignore end*/diffWords = diffWords;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffWordsWithSpace = diffWordsWithSpace;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_params = __webpack_require__(4) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/ // Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
	//
	// Ranges and exceptions:
	// Latin-1 Supplement, 0080–00FF
	//  - U+00D7  × Multiplication sign
	//  - U+00F7  ÷ Division sign
	// Latin Extended-A, 0100–017F
	// Latin Extended-B, 0180–024F
	// IPA Extensions, 0250–02AF
	// Spacing Modifier Letters, 02B0–02FF
	//  - U+02C7  ˇ &#711;  Caron
	//  - U+02D8  ˘ &#728;  Breve
	//  - U+02D9  ˙ &#729;  Dot Above
	//  - U+02DA  ˚ &#730;  Ring Above
	//  - U+02DB  ˛ &#731;  Ogonek
	//  - U+02DC  ˜ &#732;  Small Tilde
	//  - U+02DD  ˝ &#733;  Double Acute Accent
	// Latin Extended Additional, 1E00–1EFF
	var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;

	var reWhitespace = /\S/;

	var wordDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/wordDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	wordDiff.equals = function (left, right) {
	  if (this.options.ignoreCase) {
	    left = left.toLowerCase();
	    right = right.toLowerCase();
	  }
	  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
	};
	wordDiff.tokenize = function (value) {
	  var tokens = value.split(/(\s+|\b)/);

	  // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.
	  for (var i = 0; i < tokens.length - 1; i++) {
	    // If we have an empty string in the next field and we have only word chars before and after, merge
	    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
	      tokens[i] += tokens[i + 2];
	      tokens.splice(i + 1, 2);
	      i--;
	    }
	  }

	  return tokens;
	};

	function diffWords(oldStr, newStr, options) {
	  options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(options, { ignoreWhitespace: true });
	  return wordDiff.diff(oldStr, newStr, options);
	}

	function diffWordsWithSpace(oldStr, newStr, options) {
	  return wordDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3dvcmQuanMiXSwibmFtZXMiOlsiZGlmZldvcmRzIiwiZGlmZldvcmRzV2l0aFNwYWNlIiwiZXh0ZW5kZWRXb3JkQ2hhcnMiLCJyZVdoaXRlc3BhY2UiLCJ3b3JkRGlmZiIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsIm9wdGlvbnMiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJpZ25vcmVXaGl0ZXNwYWNlIiwidGVzdCIsInRva2VuaXplIiwidmFsdWUiLCJ0b2tlbnMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJvbGRTdHIiLCJuZXdTdHIiLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7O2dDQW1EZ0JBLFMsR0FBQUEsUzt5REFLQUMsa0IsR0FBQUEsa0I7O0FBeERoQjs7Ozt1QkFDQTs7Ozt3QkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxvQkFBb0IsK0RBQTFCOztBQUVBLElBQU1DLGVBQWUsSUFBckI7O0FBRU8sSUFBTUMsK0VBQVcsd0VBQWpCO0FBQ1BBLFNBQVNDLE1BQVQsR0FBa0IsVUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCO0FBQ3RDLE1BQUksS0FBS0MsT0FBTCxDQUFhQyxVQUFqQixFQUE2QjtBQUMzQkgsV0FBT0EsS0FBS0ksV0FBTCxFQUFQO0FBQ0FILFlBQVFBLE1BQU1HLFdBQU4sRUFBUjtBQUNEO0FBQ0QsU0FBT0osU0FBU0MsS0FBVCxJQUFtQixLQUFLQyxPQUFMLENBQWFHLGdCQUFiLElBQWlDLENBQUNSLGFBQWFTLElBQWIsQ0FBa0JOLElBQWxCLENBQWxDLElBQTZELENBQUNILGFBQWFTLElBQWIsQ0FBa0JMLEtBQWxCLENBQXhGO0FBQ0QsQ0FORDtBQU9BSCxTQUFTUyxRQUFULEdBQW9CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsTUFBSUMsU0FBU0QsTUFBTUUsS0FBTixDQUFZLFVBQVosQ0FBYjs7QUFFQTtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixPQUFPRyxNQUFQLEdBQWdCLENBQXBDLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQztBQUNBLFFBQUksQ0FBQ0YsT0FBT0UsSUFBSSxDQUFYLENBQUQsSUFBa0JGLE9BQU9FLElBQUksQ0FBWCxDQUFsQixJQUNLZixrQkFBa0JVLElBQWxCLENBQXVCRyxPQUFPRSxDQUFQLENBQXZCLENBREwsSUFFS2Ysa0JBQWtCVSxJQUFsQixDQUF1QkcsT0FBT0UsSUFBSSxDQUFYLENBQXZCLENBRlQsRUFFZ0Q7QUFDOUNGLGFBQU9FLENBQVAsS0FBYUYsT0FBT0UsSUFBSSxDQUFYLENBQWI7QUFDQUYsYUFBT0ksTUFBUCxDQUFjRixJQUFJLENBQWxCLEVBQXFCLENBQXJCO0FBQ0FBO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPRixNQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JPLFNBQVNmLFNBQVQsQ0FBbUJvQixNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNiLE9BQW5DLEVBQTRDO0FBQ2pEQSxZQUFVLDhFQUFnQkEsT0FBaEIsRUFBeUIsRUFBQ0csa0JBQWtCLElBQW5CLEVBQXpCLENBQVY7QUFDQSxTQUFPUCxTQUFTa0IsSUFBVCxDQUFjRixNQUFkLEVBQXNCQyxNQUF0QixFQUE4QmIsT0FBOUIsQ0FBUDtBQUNEOztBQUVNLFNBQVNQLGtCQUFULENBQTRCbUIsTUFBNUIsRUFBb0NDLE1BQXBDLEVBQTRDYixPQUE1QyxFQUFxRDtBQUMxRCxTQUFPSixTQUFTa0IsSUFBVCxDQUFjRixNQUFkLEVBQXNCQyxNQUF0QixFQUE4QmIsT0FBOUIsQ0FBUDtBQUNEIiwiZmlsZSI6IndvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlmZiBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHtnZW5lcmF0ZU9wdGlvbnN9IGZyb20gJy4uL3V0aWwvcGFyYW1zJztcblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fc2NyaXB0X2luX1VuaWNvZGVcbi8vXG4vLyBSYW5nZXMgYW5kIGV4Y2VwdGlvbnM6XG4vLyBMYXRpbi0xIFN1cHBsZW1lbnQsIDAwODDigJMwMEZGXG4vLyAgLSBVKzAwRDcgIMOXIE11bHRpcGxpY2F0aW9uIHNpZ25cbi8vICAtIFUrMDBGNyAgw7cgRGl2aXNpb24gc2lnblxuLy8gTGF0aW4gRXh0ZW5kZWQtQSwgMDEwMOKAkzAxN0Zcbi8vIExhdGluIEV4dGVuZGVkLUIsIDAxODDigJMwMjRGXG4vLyBJUEEgRXh0ZW5zaW9ucywgMDI1MOKAkzAyQUZcbi8vIFNwYWNpbmcgTW9kaWZpZXIgTGV0dGVycywgMDJCMOKAkzAyRkZcbi8vICAtIFUrMDJDNyAgy4cgJiM3MTE7ICBDYXJvblxuLy8gIC0gVSswMkQ4ICDLmCAmIzcyODsgIEJyZXZlXG4vLyAgLSBVKzAyRDkgIMuZICYjNzI5OyAgRG90IEFib3ZlXG4vLyAgLSBVKzAyREEgIMuaICYjNzMwOyAgUmluZyBBYm92ZVxuLy8gIC0gVSswMkRCICDLmyAmIzczMTsgIE9nb25la1xuLy8gIC0gVSswMkRDICDLnCAmIzczMjsgIFNtYWxsIFRpbGRlXG4vLyAgLSBVKzAyREQgIMudICYjNzMzOyAgRG91YmxlIEFjdXRlIEFjY2VudFxuLy8gTGF0aW4gRXh0ZW5kZWQgQWRkaXRpb25hbCwgMUUwMOKAkzFFRkZcbmNvbnN0IGV4dGVuZGVkV29yZENoYXJzID0gL15bYS16QS1aXFx1e0MwfS1cXHV7RkZ9XFx1e0Q4fS1cXHV7RjZ9XFx1e0Y4fS1cXHV7MkM2fVxcdXsyQzh9LVxcdXsyRDd9XFx1ezJERX0tXFx1ezJGRn1cXHV7MUUwMH0tXFx1ezFFRkZ9XSskL3U7XG5cbmNvbnN0IHJlV2hpdGVzcGFjZSA9IC9cXFMvO1xuXG5leHBvcnQgY29uc3Qgd29yZERpZmYgPSBuZXcgRGlmZigpO1xud29yZERpZmYuZXF1YWxzID0gZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVDYXNlKSB7XG4gICAgbGVmdCA9IGxlZnQudG9Mb3dlckNhc2UoKTtcbiAgICByaWdodCA9IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0IHx8ICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSAmJiAhcmVXaGl0ZXNwYWNlLnRlc3QobGVmdCkgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KHJpZ2h0KSk7XG59O1xud29yZERpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBsZXQgdG9rZW5zID0gdmFsdWUuc3BsaXQoLyhcXHMrfFxcYikvKTtcblxuICAvLyBKb2luIHRoZSBib3VuZGFyeSBzcGxpdHMgdGhhdCB3ZSBkbyBub3QgY29uc2lkZXIgdG8gYmUgYm91bmRhcmllcy4gVGhpcyBpcyBwcmltYXJpbHkgdGhlIGV4dGVuZGVkIExhdGluIGNoYXJhY3RlciBzZXQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIC8vIElmIHdlIGhhdmUgYW4gZW1wdHkgc3RyaW5nIGluIHRoZSBuZXh0IGZpZWxkIGFuZCB3ZSBoYXZlIG9ubHkgd29yZCBjaGFycyBiZWZvcmUgYW5kIGFmdGVyLCBtZXJnZVxuICAgIGlmICghdG9rZW5zW2kgKyAxXSAmJiB0b2tlbnNbaSArIDJdXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaV0pXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgdG9rZW5zW2ldICs9IHRva2Vuc1tpICsgMl07XG4gICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAyKTtcbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICBvcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3Jkc1dpdGhTcGFjZShvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG59XG4iXX0=


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/generateOptions = generateOptions;
	function generateOptions(options, defaults) {
	  if (typeof options === 'function') {
	    defaults.callback = options;
	  } else if (options) {
	    for (var name in options) {
	      /* istanbul ignore else */
	      if (options.hasOwnProperty(name)) {
	        defaults[name] = options[name];
	      }
	    }
	  }
	  return defaults;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3BhcmFtcy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZU9wdGlvbnMiLCJvcHRpb25zIiwiZGVmYXVsdHMiLCJjYWxsYmFjayIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7O2dDQUFnQkEsZSxHQUFBQSxlO0FBQVQsU0FBU0EsZUFBVCxDQUF5QkMsT0FBekIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQ2pELE1BQUksT0FBT0QsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUNqQ0MsYUFBU0MsUUFBVCxHQUFvQkYsT0FBcEI7QUFDRCxHQUZELE1BRU8sSUFBSUEsT0FBSixFQUFhO0FBQ2xCLFNBQUssSUFBSUcsSUFBVCxJQUFpQkgsT0FBakIsRUFBMEI7QUFDeEI7QUFDQSxVQUFJQSxRQUFRSSxjQUFSLENBQXVCRCxJQUF2QixDQUFKLEVBQWtDO0FBQ2hDRixpQkFBU0UsSUFBVCxJQUFpQkgsUUFBUUcsSUFBUixDQUFqQjtBQUNEO0FBQ0Y7QUFDRjtBQUNELFNBQU9GLFFBQVA7QUFDRCIsImZpbGUiOiJwYXJhbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRlZmF1bHRzLmNhbGxiYWNrID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChvcHRpb25zKSB7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgZGVmYXVsdHNbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGVmYXVsdHM7XG59XG4iXX0=


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.lineDiff = undefined;
	exports. /*istanbul ignore end*/diffLines = diffLines;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/diffTrimmedLines = diffTrimmedLines;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_params = __webpack_require__(4) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var lineDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/lineDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	lineDiff.tokenize = function (value) {
	  var retLines = [],
	      linesAndNewlines = value.split(/(\n|\r\n)/);

	  // Ignore the final empty token that occurs if the string ends with a new line
	  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
	    linesAndNewlines.pop();
	  }

	  // Merge the content and line separators into single tokens
	  for (var i = 0; i < linesAndNewlines.length; i++) {
	    var line = linesAndNewlines[i];

	    if (i % 2 && !this.options.newlineIsToken) {
	      retLines[retLines.length - 1] += line;
	    } else {
	      if (this.options.ignoreWhitespace) {
	        line = line.trim();
	      }
	      retLines.push(line);
	    }
	  }

	  return retLines;
	};

	function diffLines(oldStr, newStr, callback) {
	  return lineDiff.diff(oldStr, newStr, callback);
	}
	function diffTrimmedLines(oldStr, newStr, callback) {
	  var options = /*istanbul ignore start*/(0, _params.generateOptions) /*istanbul ignore end*/(callback, { ignoreWhitespace: true });
	  return lineDiff.diff(oldStr, newStr, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2xpbmUuanMiXSwibmFtZXMiOlsiZGlmZkxpbmVzIiwiZGlmZlRyaW1tZWRMaW5lcyIsImxpbmVEaWZmIiwidG9rZW5pemUiLCJ2YWx1ZSIsInJldExpbmVzIiwibGluZXNBbmROZXdsaW5lcyIsInNwbGl0IiwibGVuZ3RoIiwicG9wIiwiaSIsImxpbmUiLCJvcHRpb25zIiwibmV3bGluZUlzVG9rZW4iLCJpZ25vcmVXaGl0ZXNwYWNlIiwidHJpbSIsInB1c2giLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBOEJnQkEsUyxHQUFBQSxTO3lEQUNBQyxnQixHQUFBQSxnQjs7QUEvQmhCOzs7O3VCQUNBOzs7O3VCQUVPLElBQU1DLCtFQUFXLHdFQUFqQjtBQUNQQSxTQUFTQyxRQUFULEdBQW9CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsTUFBSUMsV0FBVyxFQUFmO0FBQUEsTUFDSUMsbUJBQW1CRixNQUFNRyxLQUFOLENBQVksV0FBWixDQUR2Qjs7QUFHQTtBQUNBLE1BQUksQ0FBQ0QsaUJBQWlCQSxpQkFBaUJFLE1BQWpCLEdBQTBCLENBQTNDLENBQUwsRUFBb0Q7QUFDbERGLHFCQUFpQkcsR0FBakI7QUFDRDs7QUFFRDtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixpQkFBaUJFLE1BQXJDLEVBQTZDRSxHQUE3QyxFQUFrRDtBQUNoRCxRQUFJQyxPQUFPTCxpQkFBaUJJLENBQWpCLENBQVg7O0FBRUEsUUFBSUEsSUFBSSxDQUFKLElBQVMsQ0FBQyxLQUFLRSxPQUFMLENBQWFDLGNBQTNCLEVBQTJDO0FBQ3pDUixlQUFTQSxTQUFTRyxNQUFULEdBQWtCLENBQTNCLEtBQWlDRyxJQUFqQztBQUNELEtBRkQsTUFFTztBQUNMLFVBQUksS0FBS0MsT0FBTCxDQUFhRSxnQkFBakIsRUFBbUM7QUFDakNILGVBQU9BLEtBQUtJLElBQUwsRUFBUDtBQUNEO0FBQ0RWLGVBQVNXLElBQVQsQ0FBY0wsSUFBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT04sUUFBUDtBQUNELENBeEJEOztBQTBCTyxTQUFTTCxTQUFULENBQW1CaUIsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxRQUFuQyxFQUE2QztBQUFFLFNBQU9qQixTQUFTa0IsSUFBVCxDQUFjSCxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QkMsUUFBOUIsQ0FBUDtBQUFpRDtBQUNoRyxTQUFTbEIsZ0JBQVQsQ0FBMEJnQixNQUExQixFQUFrQ0MsTUFBbEMsRUFBMENDLFFBQTFDLEVBQW9EO0FBQ3pELE1BQUlQLFVBQVUsOEVBQWdCTyxRQUFoQixFQUEwQixFQUFDTCxrQkFBa0IsSUFBbkIsRUFBMUIsQ0FBZDtBQUNBLFNBQU9aLFNBQVNrQixJQUFULENBQWNILE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCTixPQUE5QixDQUFQO0FBQ0QiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2dlbmVyYXRlT3B0aW9uc30gZnJvbSAnLi4vdXRpbC9wYXJhbXMnO1xuXG5leHBvcnQgY29uc3QgbGluZURpZmYgPSBuZXcgRGlmZigpO1xubGluZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBsZXQgcmV0TGluZXMgPSBbXSxcbiAgICAgIGxpbmVzQW5kTmV3bGluZXMgPSB2YWx1ZS5zcGxpdCgvKFxcbnxcXHJcXG4pLyk7XG5cbiAgLy8gSWdub3JlIHRoZSBmaW5hbCBlbXB0eSB0b2tlbiB0aGF0IG9jY3VycyBpZiB0aGUgc3RyaW5nIGVuZHMgd2l0aCBhIG5ldyBsaW5lXG4gIGlmICghbGluZXNBbmROZXdsaW5lc1tsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgbGluZXNBbmROZXdsaW5lcy5wb3AoKTtcbiAgfVxuXG4gIC8vIE1lcmdlIHRoZSBjb250ZW50IGFuZCBsaW5lIHNlcGFyYXRvcnMgaW50byBzaW5nbGUgdG9rZW5zXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNBbmROZXdsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaW5lID0gbGluZXNBbmROZXdsaW5lc1tpXTtcblxuICAgIGlmIChpICUgMiAmJiAhdGhpcy5vcHRpb25zLm5ld2xpbmVJc1Rva2VuKSB7XG4gICAgICByZXRMaW5lc1tyZXRMaW5lcy5sZW5ndGggLSAxXSArPSBsaW5lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICAgICAgbGluZSA9IGxpbmUudHJpbSgpO1xuICAgICAgfVxuICAgICAgcmV0TGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0TGluZXM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykgeyByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spOyB9XG5leHBvcnQgZnVuY3Rpb24gZGlmZlRyaW1tZWRMaW5lcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgbGV0IG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoY2FsbGJhY2ssIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cbiJdfQ==


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.sentenceDiff = undefined;
	exports. /*istanbul ignore end*/diffSentences = diffSentences;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var sentenceDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/sentenceDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	sentenceDiff.tokenize = function (value) {
	  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
	};

	function diffSentences(oldStr, newStr, callback) {
	  return sentenceDiff.diff(oldStr, newStr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3NlbnRlbmNlLmpzIl0sIm5hbWVzIjpbImRpZmZTZW50ZW5jZXMiLCJzZW50ZW5jZURpZmYiLCJ0b2tlbml6ZSIsInZhbHVlIiwic3BsaXQiLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBUWdCQSxhLEdBQUFBLGE7O0FBUmhCOzs7Ozs7dUJBR08sSUFBTUMsdUZBQWUsd0VBQXJCO0FBQ1BBLGFBQWFDLFFBQWIsR0FBd0IsVUFBU0MsS0FBVCxFQUFnQjtBQUN0QyxTQUFPQSxNQUFNQyxLQUFOLENBQVksdUJBQVosQ0FBUDtBQUNELENBRkQ7O0FBSU8sU0FBU0osYUFBVCxDQUF1QkssTUFBdkIsRUFBK0JDLE1BQS9CLEVBQXVDQyxRQUF2QyxFQUFpRDtBQUFFLFNBQU9OLGFBQWFPLElBQWIsQ0FBa0JILE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQ0MsUUFBbEMsQ0FBUDtBQUFxRCIsImZpbGUiOiJzZW50ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cblxuZXhwb3J0IGNvbnN0IHNlbnRlbmNlRGlmZiA9IG5ldyBEaWZmKCk7XG5zZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHsgcmV0dXJuIHNlbnRlbmNlRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.cssDiff = undefined;
	exports. /*istanbul ignore end*/diffCss = diffCss;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var cssDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/cssDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	cssDiff.tokenize = function (value) {
	  return value.split(/([{}:;,]|\s+)/);
	};

	function diffCss(oldStr, newStr, callback) {
	  return cssDiff.diff(oldStr, newStr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Nzcy5qcyJdLCJuYW1lcyI6WyJkaWZmQ3NzIiwiY3NzRGlmZiIsInRva2VuaXplIiwidmFsdWUiLCJzcGxpdCIsIm9sZFN0ciIsIm5ld1N0ciIsImNhbGxiYWNrIiwiZGlmZiJdLCJtYXBwaW5ncyI6Ijs7OztnQ0FPZ0JBLE8sR0FBQUEsTzs7QUFQaEI7Ozs7Ozt1QkFFTyxJQUFNQyw2RUFBVSx3RUFBaEI7QUFDUEEsUUFBUUMsUUFBUixHQUFtQixVQUFTQyxLQUFULEVBQWdCO0FBQ2pDLFNBQU9BLE1BQU1DLEtBQU4sQ0FBWSxlQUFaLENBQVA7QUFDRCxDQUZEOztBQUlPLFNBQVNKLE9BQVQsQ0FBaUJLLE1BQWpCLEVBQXlCQyxNQUF6QixFQUFpQ0MsUUFBakMsRUFBMkM7QUFBRSxTQUFPTixRQUFRTyxJQUFSLENBQWFILE1BQWIsRUFBcUJDLE1BQXJCLEVBQTZCQyxRQUE3QixDQUFQO0FBQWdEIiwiZmlsZSI6ImNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBjc3NEaWZmID0gbmV3IERpZmYoKTtcbmNzc0RpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhbe306OyxdfFxccyspLyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNzcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHsgcmV0dXJuIGNzc0RpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spOyB9XG4iXX0=


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.jsonDiff = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports. /*istanbul ignore end*/diffJson = diffJson;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/canonicalize = canonicalize;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	/*istanbul ignore end*/var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var objectPrototypeToString = Object.prototype.toString;

	var jsonDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/jsonDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	// Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
	// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:
	jsonDiff.useLongestToken = true;

	jsonDiff.tokenize = /*istanbul ignore start*/_line.lineDiff /*istanbul ignore end*/.tokenize;
	jsonDiff.castInput = function (value) {
	  /*istanbul ignore start*/var _options = /*istanbul ignore end*/this.options,
	      undefinedReplacement = _options.undefinedReplacement,
	      _options$stringifyRep = _options.stringifyReplacer,
	      stringifyReplacer = _options$stringifyRep === undefined ? function (k, v) /*istanbul ignore start*/{
	    return (/*istanbul ignore end*/typeof v === 'undefined' ? undefinedReplacement : v
	    );
	  } : _options$stringifyRep;


	  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
	};
	jsonDiff.equals = function (left, right) {
	  return (/*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'))
	  );
	};

	function diffJson(oldObj, newObj, options) {
	  return jsonDiff.diff(oldObj, newObj, options);
	}

	// This function handles the presence of circular references by bailing out when encountering an
	// object that is already on the "stack" of items being processed. Accepts an optional replacer
	function canonicalize(obj, stack, replacementStack, replacer, key) {
	  stack = stack || [];
	  replacementStack = replacementStack || [];

	  if (replacer) {
	    obj = replacer(key, obj);
	  }

	  var i = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  for (i = 0; i < stack.length; i += 1) {
	    if (stack[i] === obj) {
	      return replacementStack[i];
	    }
	  }

	  var canonicalizedObj = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  if ('[object Array]' === objectPrototypeToString.call(obj)) {
	    stack.push(obj);
	    canonicalizedObj = new Array(obj.length);
	    replacementStack.push(canonicalizedObj);
	    for (i = 0; i < obj.length; i += 1) {
	      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
	    }
	    stack.pop();
	    replacementStack.pop();
	    return canonicalizedObj;
	  }

	  if (obj && obj.toJSON) {
	    obj = obj.toJSON();
	  }

	  if ( /*istanbul ignore start*/(typeof /*istanbul ignore end*/obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null) {
	    stack.push(obj);
	    canonicalizedObj = {};
	    replacementStack.push(canonicalizedObj);
	    var sortedKeys = [],
	        _key = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	    for (_key in obj) {
	      /* istanbul ignore else */
	      if (obj.hasOwnProperty(_key)) {
	        sortedKeys.push(_key);
	      }
	    }
	    sortedKeys.sort();
	    for (i = 0; i < sortedKeys.length; i += 1) {
	      _key = sortedKeys[i];
	      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
	    }
	    stack.pop();
	    replacementStack.pop();
	  } else {
	    canonicalizedObj = obj;
	  }
	  return canonicalizedObj;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2pzb24uanMiXSwibmFtZXMiOlsiZGlmZkpzb24iLCJjYW5vbmljYWxpemUiLCJvYmplY3RQcm90b3R5cGVUb1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwianNvbkRpZmYiLCJ1c2VMb25nZXN0VG9rZW4iLCJ0b2tlbml6ZSIsImNhc3RJbnB1dCIsInZhbHVlIiwib3B0aW9ucyIsInVuZGVmaW5lZFJlcGxhY2VtZW50Iiwic3RyaW5naWZ5UmVwbGFjZXIiLCJrIiwidiIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcXVhbHMiLCJsZWZ0IiwicmlnaHQiLCJjYWxsIiwicmVwbGFjZSIsIm9sZE9iaiIsIm5ld09iaiIsImRpZmYiLCJvYmoiLCJzdGFjayIsInJlcGxhY2VtZW50U3RhY2siLCJyZXBsYWNlciIsImtleSIsImkiLCJsZW5ndGgiLCJjYW5vbmljYWxpemVkT2JqIiwicHVzaCIsIkFycmF5IiwicG9wIiwidG9KU09OIiwic29ydGVkS2V5cyIsImhhc093blByb3BlcnR5Iiwic29ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztnQ0FxQmdCQSxRLEdBQUFBLFE7eURBSUFDLFksR0FBQUEsWTs7QUF6QmhCOzs7O3VCQUNBOzs7O3VCQUVBLElBQU1DLDBCQUEwQkMsT0FBT0MsU0FBUCxDQUFpQkMsUUFBakQ7O0FBR08sSUFBTUMsK0VBQVcsd0VBQWpCO0FBQ1A7QUFDQTtBQUNBQSxTQUFTQyxlQUFULEdBQTJCLElBQTNCOztBQUVBRCxTQUFTRSxRQUFULEdBQW9CLGdFQUFTQSxRQUE3QjtBQUNBRixTQUFTRyxTQUFULEdBQXFCLFVBQVNDLEtBQVQsRUFBZ0I7QUFBQSxpRUFDK0UsS0FBS0MsT0FEcEY7QUFBQSxNQUM1QkMsb0JBRDRCLFlBQzVCQSxvQkFENEI7QUFBQSx1Q0FDTkMsaUJBRE07QUFBQSxNQUNOQSxpQkFETSx5Q0FDYyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxtQ0FBVSxPQUFPQSxDQUFQLEtBQWEsV0FBYixHQUEyQkgsb0JBQTNCLEdBQWtERztBQUE1RDtBQUFBLEdBRGQ7OztBQUduQyxTQUFPLE9BQU9MLEtBQVAsS0FBaUIsUUFBakIsR0FBNEJBLEtBQTVCLEdBQW9DTSxLQUFLQyxTQUFMLENBQWVoQixhQUFhUyxLQUFiLEVBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDRyxpQkFBaEMsQ0FBZixFQUFtRUEsaUJBQW5FLEVBQXNGLElBQXRGLENBQTNDO0FBQ0QsQ0FKRDtBQUtBUCxTQUFTWSxNQUFULEdBQWtCLFVBQVNDLElBQVQsRUFBZUMsS0FBZixFQUFzQjtBQUN0QyxTQUFPLG9FQUFLaEIsU0FBTCxDQUFlYyxNQUFmLENBQXNCRyxJQUF0QixDQUEyQmYsUUFBM0IsRUFBcUNhLEtBQUtHLE9BQUwsQ0FBYSxZQUFiLEVBQTJCLElBQTNCLENBQXJDLEVBQXVFRixNQUFNRSxPQUFOLENBQWMsWUFBZCxFQUE0QixJQUE1QixDQUF2RTtBQUFQO0FBQ0QsQ0FGRDs7QUFJTyxTQUFTdEIsUUFBVCxDQUFrQnVCLE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQ2IsT0FBbEMsRUFBMkM7QUFBRSxTQUFPTCxTQUFTbUIsSUFBVCxDQUFjRixNQUFkLEVBQXNCQyxNQUF0QixFQUE4QmIsT0FBOUIsQ0FBUDtBQUFnRDs7QUFFcEc7QUFDQTtBQUNPLFNBQVNWLFlBQVQsQ0FBc0J5QixHQUF0QixFQUEyQkMsS0FBM0IsRUFBa0NDLGdCQUFsQyxFQUFvREMsUUFBcEQsRUFBOERDLEdBQTlELEVBQW1FO0FBQ3hFSCxVQUFRQSxTQUFTLEVBQWpCO0FBQ0FDLHFCQUFtQkEsb0JBQW9CLEVBQXZDOztBQUVBLE1BQUlDLFFBQUosRUFBYztBQUNaSCxVQUFNRyxTQUFTQyxHQUFULEVBQWNKLEdBQWQsQ0FBTjtBQUNEOztBQUVELE1BQUlLLG1DQUFKOztBQUVBLE9BQUtBLElBQUksQ0FBVCxFQUFZQSxJQUFJSixNQUFNSyxNQUF0QixFQUE4QkQsS0FBSyxDQUFuQyxFQUFzQztBQUNwQyxRQUFJSixNQUFNSSxDQUFOLE1BQWFMLEdBQWpCLEVBQXNCO0FBQ3BCLGFBQU9FLGlCQUFpQkcsQ0FBakIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBSUUsa0RBQUo7O0FBRUEsTUFBSSxxQkFBcUIvQix3QkFBd0JtQixJQUF4QixDQUE2QkssR0FBN0IsQ0FBekIsRUFBNEQ7QUFDMURDLFVBQU1PLElBQU4sQ0FBV1IsR0FBWDtBQUNBTyx1QkFBbUIsSUFBSUUsS0FBSixDQUFVVCxJQUFJTSxNQUFkLENBQW5CO0FBQ0FKLHFCQUFpQk0sSUFBakIsQ0FBc0JELGdCQUF0QjtBQUNBLFNBQUtGLElBQUksQ0FBVCxFQUFZQSxJQUFJTCxJQUFJTSxNQUFwQixFQUE0QkQsS0FBSyxDQUFqQyxFQUFvQztBQUNsQ0UsdUJBQWlCRixDQUFqQixJQUFzQjlCLGFBQWF5QixJQUFJSyxDQUFKLENBQWIsRUFBcUJKLEtBQXJCLEVBQTRCQyxnQkFBNUIsRUFBOENDLFFBQTlDLEVBQXdEQyxHQUF4RCxDQUF0QjtBQUNEO0FBQ0RILFVBQU1TLEdBQU47QUFDQVIscUJBQWlCUSxHQUFqQjtBQUNBLFdBQU9ILGdCQUFQO0FBQ0Q7O0FBRUQsTUFBSVAsT0FBT0EsSUFBSVcsTUFBZixFQUF1QjtBQUNyQlgsVUFBTUEsSUFBSVcsTUFBSixFQUFOO0FBQ0Q7O0FBRUQsTUFBSSx5REFBT1gsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQWYsSUFBMkJBLFFBQVEsSUFBdkMsRUFBNkM7QUFDM0NDLFVBQU1PLElBQU4sQ0FBV1IsR0FBWDtBQUNBTyx1QkFBbUIsRUFBbkI7QUFDQUwscUJBQWlCTSxJQUFqQixDQUFzQkQsZ0JBQXRCO0FBQ0EsUUFBSUssYUFBYSxFQUFqQjtBQUFBLFFBQ0lSLHNDQURKO0FBRUEsU0FBS0EsSUFBTCxJQUFZSixHQUFaLEVBQWlCO0FBQ2Y7QUFDQSxVQUFJQSxJQUFJYSxjQUFKLENBQW1CVCxJQUFuQixDQUFKLEVBQTZCO0FBQzNCUSxtQkFBV0osSUFBWCxDQUFnQkosSUFBaEI7QUFDRDtBQUNGO0FBQ0RRLGVBQVdFLElBQVg7QUFDQSxTQUFLVCxJQUFJLENBQVQsRUFBWUEsSUFBSU8sV0FBV04sTUFBM0IsRUFBbUNELEtBQUssQ0FBeEMsRUFBMkM7QUFDekNELGFBQU1RLFdBQVdQLENBQVgsQ0FBTjtBQUNBRSx1QkFBaUJILElBQWpCLElBQXdCN0IsYUFBYXlCLElBQUlJLElBQUosQ0FBYixFQUF1QkgsS0FBdkIsRUFBOEJDLGdCQUE5QixFQUFnREMsUUFBaEQsRUFBMERDLElBQTFELENBQXhCO0FBQ0Q7QUFDREgsVUFBTVMsR0FBTjtBQUNBUixxQkFBaUJRLEdBQWpCO0FBQ0QsR0FuQkQsTUFtQk87QUFDTEgsdUJBQW1CUCxHQUFuQjtBQUNEO0FBQ0QsU0FBT08sZ0JBQVA7QUFDRCIsImZpbGUiOiJqc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7bGluZURpZmZ9IGZyb20gJy4vbGluZSc7XG5cbmNvbnN0IG9iamVjdFByb3RvdHlwZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuXG5leHBvcnQgY29uc3QganNvbkRpZmYgPSBuZXcgRGlmZigpO1xuLy8gRGlzY3JpbWluYXRlIGJldHdlZW4gdHdvIGxpbmVzIG9mIHByZXR0eS1wcmludGVkLCBzZXJpYWxpemVkIEpTT04gd2hlcmUgb25lIG9mIHRoZW0gaGFzIGFcbi8vIGRhbmdsaW5nIGNvbW1hIGFuZCB0aGUgb3RoZXIgZG9lc24ndC4gVHVybnMgb3V0IGluY2x1ZGluZyB0aGUgZGFuZ2xpbmcgY29tbWEgeWllbGRzIHRoZSBuaWNlc3Qgb3V0cHV0OlxuanNvbkRpZmYudXNlTG9uZ2VzdFRva2VuID0gdHJ1ZTtcblxuanNvbkRpZmYudG9rZW5pemUgPSBsaW5lRGlmZi50b2tlbml6ZTtcbmpzb25EaWZmLmNhc3RJbnB1dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGNvbnN0IHt1bmRlZmluZWRSZXBsYWNlbWVudCwgc3RyaW5naWZ5UmVwbGFjZXIgPSAoaywgdikgPT4gdHlwZW9mIHYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkUmVwbGFjZW1lbnQgOiB2fSA9IHRoaXMub3B0aW9ucztcblxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkoY2Fub25pY2FsaXplKHZhbHVlLCBudWxsLCBudWxsLCBzdHJpbmdpZnlSZXBsYWNlciksIHN0cmluZ2lmeVJlcGxhY2VyLCAnICAnKTtcbn07XG5qc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICByZXR1cm4gRGlmZi5wcm90b3R5cGUuZXF1YWxzLmNhbGwoanNvbkRpZmYsIGxlZnQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJyksIHJpZ2h0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmSnNvbihvbGRPYmosIG5ld09iaiwgb3B0aW9ucykgeyByZXR1cm4ganNvbkRpZmYuZGlmZihvbGRPYmosIG5ld09iaiwgb3B0aW9ucyk7IH1cblxuLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBwcmVzZW5jZSBvZiBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGJhaWxpbmcgb3V0IHdoZW4gZW5jb3VudGVyaW5nIGFuXG4vLyBvYmplY3QgdGhhdCBpcyBhbHJlYWR5IG9uIHRoZSBcInN0YWNrXCIgb2YgaXRlbXMgYmVpbmcgcHJvY2Vzc2VkLiBBY2NlcHRzIGFuIG9wdGlvbmFsIHJlcGxhY2VyXG5leHBvcnQgZnVuY3Rpb24gY2Fub25pY2FsaXplKG9iaiwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpIHtcbiAgc3RhY2sgPSBzdGFjayB8fCBbXTtcbiAgcmVwbGFjZW1lbnRTdGFjayA9IHJlcGxhY2VtZW50U3RhY2sgfHwgW107XG5cbiAgaWYgKHJlcGxhY2VyKSB7XG4gICAgb2JqID0gcmVwbGFjZXIoa2V5LCBvYmopO1xuICB9XG5cbiAgbGV0IGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHN0YWNrW2ldID09PSBvYmopIHtcbiAgICAgIHJldHVybiByZXBsYWNlbWVudFN0YWNrW2ldO1xuICAgIH1cbiAgfVxuXG4gIGxldCBjYW5vbmljYWxpemVkT2JqO1xuXG4gIGlmICgnW29iamVjdCBBcnJheV0nID09PSBvYmplY3RQcm90b3R5cGVUb1N0cmluZy5jYWxsKG9iaikpIHtcbiAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IG5ldyBBcnJheShvYmoubGVuZ3RoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG4gICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY2Fub25pY2FsaXplZE9ialtpXSA9IGNhbm9uaWNhbGl6ZShvYmpbaV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwga2V5KTtcbiAgICB9XG4gICAgc3RhY2sucG9wKCk7XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbiAgfVxuXG4gIGlmIChvYmogJiYgb2JqLnRvSlNPTikge1xuICAgIG9iaiA9IG9iai50b0pTT04oKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcbiAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IHt9O1xuICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcbiAgICBsZXQgc29ydGVkS2V5cyA9IFtdLFxuICAgICAgICBrZXk7XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHNvcnRlZEtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0ZWRLZXlzLnNvcnQoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc29ydGVkS2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAga2V5ID0gc29ydGVkS2V5c1tpXTtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmpba2V5XSA9IGNhbm9uaWNhbGl6ZShvYmpba2V5XSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpO1xuICAgIH1cbiAgICBzdGFjay5wb3AoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBvYmo7XG4gIH1cbiAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG59XG4iXX0=


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports.arrayDiff = undefined;
	exports. /*istanbul ignore end*/diffArrays = diffArrays;

	var /*istanbul ignore start*/_base = __webpack_require__(1) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/var arrayDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/arrayDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
	arrayDiff.tokenize = function (value) {
	  return value.slice();
	};
	arrayDiff.join = arrayDiff.removeEmpty = function (value) {
	  return value;
	};

	function diffArrays(oldArr, newArr, callback) {
	  return arrayDiff.diff(oldArr, newArr, callback);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2FycmF5LmpzIl0sIm5hbWVzIjpbImRpZmZBcnJheXMiLCJhcnJheURpZmYiLCJ0b2tlbml6ZSIsInZhbHVlIiwic2xpY2UiLCJqb2luIiwicmVtb3ZlRW1wdHkiLCJvbGRBcnIiLCJuZXdBcnIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBVWdCQSxVLEdBQUFBLFU7O0FBVmhCOzs7Ozs7dUJBRU8sSUFBTUMsaUZBQVksd0VBQWxCO0FBQ1BBLFVBQVVDLFFBQVYsR0FBcUIsVUFBU0MsS0FBVCxFQUFnQjtBQUNuQyxTQUFPQSxNQUFNQyxLQUFOLEVBQVA7QUFDRCxDQUZEO0FBR0FILFVBQVVJLElBQVYsR0FBaUJKLFVBQVVLLFdBQVYsR0FBd0IsVUFBU0gsS0FBVCxFQUFnQjtBQUN2RCxTQUFPQSxLQUFQO0FBQ0QsQ0FGRDs7QUFJTyxTQUFTSCxVQUFULENBQW9CTyxNQUFwQixFQUE0QkMsTUFBNUIsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUUsU0FBT1IsVUFBVVMsSUFBVixDQUFlSCxNQUFmLEVBQXVCQyxNQUF2QixFQUErQkMsUUFBL0IsQ0FBUDtBQUFrRCIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBhcnJheURpZmYgPSBuZXcgRGlmZigpO1xuYXJyYXlEaWZmLnRva2VuaXplID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnNsaWNlKCk7XG59O1xuYXJyYXlEaWZmLmpvaW4gPSBhcnJheURpZmYucmVtb3ZlRW1wdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkFycmF5cyhvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spIHsgcmV0dXJuIGFycmF5RGlmZi5kaWZmKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/applyPatch = applyPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = applyPatches;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_distanceIterator = __webpack_require__(12) /*istanbul ignore end*/;

	/*istanbul ignore start*/var _distanceIterator2 = _interopRequireDefault(_distanceIterator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*istanbul ignore end*/function applyPatch(source, uniDiff) {
	  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  if (typeof uniDiff === 'string') {
	    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
	  }

	  if (Array.isArray(uniDiff)) {
	    if (uniDiff.length > 1) {
	      throw new Error('applyPatch only works with a single input.');
	    }

	    uniDiff = uniDiff[0];
	  }

	  // Apply the diff to the input
	  var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
	      delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
	      hunks = uniDiff.hunks,
	      compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) /*istanbul ignore start*/{
	    return (/*istanbul ignore end*/line === patchContent
	    );
	  },
	      errorCount = 0,
	      fuzzFactor = options.fuzzFactor || 0,
	      minLine = 0,
	      offset = 0,
	      removeEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
	      addEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

	  /**
	   * Checks if the hunk exactly fits on the provided location
	   */
	  function hunkFits(hunk, toPos) {
	    for (var j = 0; j < hunk.lines.length; j++) {
	      var line = hunk.lines[j],
	          operation = line.length > 0 ? line[0] : ' ',
	          content = line.length > 0 ? line.substr(1) : line;

	      if (operation === ' ' || operation === '-') {
	        // Context sanity check
	        if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
	          errorCount++;

	          if (errorCount > fuzzFactor) {
	            return false;
	          }
	        }
	        toPos++;
	      }
	    }

	    return true;
	  }

	  // Search best fit offsets for each hunk based on the previous ones
	  for (var i = 0; i < hunks.length; i++) {
	    var hunk = hunks[i],
	        maxLine = lines.length - hunk.oldLines,
	        localOffset = 0,
	        toPos = offset + hunk.oldStart - 1;

	    var iterator = /*istanbul ignore start*/(0, _distanceIterator2['default']) /*istanbul ignore end*/(toPos, minLine, maxLine);

	    for (; localOffset !== undefined; localOffset = iterator()) {
	      if (hunkFits(hunk, toPos + localOffset)) {
	        hunk.offset = offset += localOffset;
	        break;
	      }
	    }

	    if (localOffset === undefined) {
	      return false;
	    }

	    // Set lower text limit to end of the current hunk, so next ones don't try
	    // to fit over already patched text
	    minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
	  }

	  // Apply patch hunks
	  var diffOffset = 0;
	  for (var _i = 0; _i < hunks.length; _i++) {
	    var _hunk = hunks[_i],
	        _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;
	    diffOffset += _hunk.newLines - _hunk.oldLines;

	    if (_toPos < 0) {
	      // Creating a new file
	      _toPos = 0;
	    }

	    for (var j = 0; j < _hunk.lines.length; j++) {
	      var line = _hunk.lines[j],
	          operation = line.length > 0 ? line[0] : ' ',
	          content = line.length > 0 ? line.substr(1) : line,
	          delimiter = _hunk.linedelimiters[j];

	      if (operation === ' ') {
	        _toPos++;
	      } else if (operation === '-') {
	        lines.splice(_toPos, 1);
	        delimiters.splice(_toPos, 1);
	        /* istanbul ignore else */
	      } else if (operation === '+') {
	        lines.splice(_toPos, 0, content);
	        delimiters.splice(_toPos, 0, delimiter);
	        _toPos++;
	      } else if (operation === '\\') {
	        var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
	        if (previousOperation === '+') {
	          removeEOFNL = true;
	        } else if (previousOperation === '-') {
	          addEOFNL = true;
	        }
	      }
	    }
	  }

	  // Handle EOFNL insertion/removal
	  if (removeEOFNL) {
	    while (!lines[lines.length - 1]) {
	      lines.pop();
	      delimiters.pop();
	    }
	  } else if (addEOFNL) {
	    lines.push('');
	    delimiters.push('\n');
	  }
	  for (var _k = 0; _k < lines.length - 1; _k++) {
	    lines[_k] = lines[_k] + delimiters[_k];
	  }
	  return lines.join('');
	}

	// Wrapper that supports multiple file patches via callbacks.
	function applyPatches(uniDiff, options) {
	  if (typeof uniDiff === 'string') {
	    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
	  }

	  var currentIndex = 0;
	  function processIndex() {
	    var index = uniDiff[currentIndex++];
	    if (!index) {
	      return options.complete();
	    }

	    options.loadFile(index, function (err, data) {
	      if (err) {
	        return options.complete(err);
	      }

	      var updatedContent = applyPatch(data, index, options);
	      options.patched(index, updatedContent, function (err) {
	        if (err) {
	          return options.complete(err);
	        }

	        processIndex();
	      });
	    });
	  }
	  processIndex();
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9hcHBseS5qcyJdLCJuYW1lcyI6WyJhcHBseVBhdGNoIiwiYXBwbHlQYXRjaGVzIiwic291cmNlIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJFcnJvciIsImxpbmVzIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJodW5rcyIsImNvbXBhcmVMaW5lIiwibGluZU51bWJlciIsImxpbmUiLCJvcGVyYXRpb24iLCJwYXRjaENvbnRlbnQiLCJlcnJvckNvdW50IiwiZnV6ekZhY3RvciIsIm1pbkxpbmUiLCJvZmZzZXQiLCJyZW1vdmVFT0ZOTCIsImFkZEVPRk5MIiwiaHVua0ZpdHMiLCJodW5rIiwidG9Qb3MiLCJqIiwiY29udGVudCIsInN1YnN0ciIsImkiLCJtYXhMaW5lIiwib2xkTGluZXMiLCJsb2NhbE9mZnNldCIsIm9sZFN0YXJ0IiwiaXRlcmF0b3IiLCJ1bmRlZmluZWQiLCJkaWZmT2Zmc2V0IiwibmV3TGluZXMiLCJkZWxpbWl0ZXIiLCJsaW5lZGVsaW1pdGVycyIsInNwbGljZSIsInByZXZpb3VzT3BlcmF0aW9uIiwicG9wIiwicHVzaCIsIl9rIiwiam9pbiIsImN1cnJlbnRJbmRleCIsInByb2Nlc3NJbmRleCIsImluZGV4IiwiY29tcGxldGUiLCJsb2FkRmlsZSIsImVyciIsImRhdGEiLCJ1cGRhdGVkQ29udGVudCIsInBhdGNoZWQiXSwibWFwcGluZ3MiOiI7OztnQ0FHZ0JBLFUsR0FBQUEsVTt5REFvSUFDLFksR0FBQUEsWTs7QUF2SWhCOztBQUNBOzs7Ozs7dUJBRU8sU0FBU0QsVUFBVCxDQUFvQkUsTUFBcEIsRUFBNEJDLE9BQTVCLEVBQW1EO0FBQUEsc0RBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDeEQsTUFBSSxPQUFPRCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CQSxjQUFVLHdFQUFXQSxPQUFYLENBQVY7QUFDRDs7QUFFRCxNQUFJRSxNQUFNQyxPQUFOLENBQWNILE9BQWQsQ0FBSixFQUE0QjtBQUMxQixRQUFJQSxRQUFRSSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLFlBQU0sSUFBSUMsS0FBSixDQUFVLDRDQUFWLENBQU47QUFDRDs7QUFFREwsY0FBVUEsUUFBUSxDQUFSLENBQVY7QUFDRDs7QUFFRDtBQUNBLE1BQUlNLFFBQVFQLE9BQU9RLEtBQVAsQ0FBYSxxQkFBYixDQUFaO0FBQUEsTUFDSUMsYUFBYVQsT0FBT1UsS0FBUCxDQUFhLHNCQUFiLEtBQXdDLEVBRHpEO0FBQUEsTUFFSUMsUUFBUVYsUUFBUVUsS0FGcEI7QUFBQSxNQUlJQyxjQUFjVixRQUFRVSxXQUFSLElBQXdCLFVBQUNDLFVBQUQsRUFBYUMsSUFBYixFQUFtQkMsU0FBbkIsRUFBOEJDLFlBQTlCO0FBQUEsbUNBQStDRixTQUFTRTtBQUF4RDtBQUFBLEdBSjFDO0FBQUEsTUFLSUMsYUFBYSxDQUxqQjtBQUFBLE1BTUlDLGFBQWFoQixRQUFRZ0IsVUFBUixJQUFzQixDQU52QztBQUFBLE1BT0lDLFVBQVUsQ0FQZDtBQUFBLE1BUUlDLFNBQVMsQ0FSYjtBQUFBLE1BVUlDLDZDQVZKO0FBQUEsTUFXSUMsMENBWEo7O0FBYUE7OztBQUdBLFdBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxLQUF4QixFQUErQjtBQUM3QixTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS2pCLEtBQUwsQ0FBV0YsTUFBL0IsRUFBdUNxQixHQUF2QyxFQUE0QztBQUMxQyxVQUFJWixPQUFPVSxLQUFLakIsS0FBTCxDQUFXbUIsQ0FBWCxDQUFYO0FBQUEsVUFDSVgsWUFBYUQsS0FBS1QsTUFBTCxHQUFjLENBQWQsR0FBa0JTLEtBQUssQ0FBTCxDQUFsQixHQUE0QixHQUQ3QztBQUFBLFVBRUlhLFVBQVdiLEtBQUtULE1BQUwsR0FBYyxDQUFkLEdBQWtCUyxLQUFLYyxNQUFMLENBQVksQ0FBWixDQUFsQixHQUFtQ2QsSUFGbEQ7O0FBSUEsVUFBSUMsY0FBYyxHQUFkLElBQXFCQSxjQUFjLEdBQXZDLEVBQTRDO0FBQzFDO0FBQ0EsWUFBSSxDQUFDSCxZQUFZYSxRQUFRLENBQXBCLEVBQXVCbEIsTUFBTWtCLEtBQU4sQ0FBdkIsRUFBcUNWLFNBQXJDLEVBQWdEWSxPQUFoRCxDQUFMLEVBQStEO0FBQzdEVjs7QUFFQSxjQUFJQSxhQUFhQyxVQUFqQixFQUE2QjtBQUMzQixtQkFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNETztBQUNEO0FBQ0Y7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxPQUFLLElBQUlJLElBQUksQ0FBYixFQUFnQkEsSUFBSWxCLE1BQU1OLE1BQTFCLEVBQWtDd0IsR0FBbEMsRUFBdUM7QUFDckMsUUFBSUwsT0FBT2IsTUFBTWtCLENBQU4sQ0FBWDtBQUFBLFFBQ0lDLFVBQVV2QixNQUFNRixNQUFOLEdBQWVtQixLQUFLTyxRQURsQztBQUFBLFFBRUlDLGNBQWMsQ0FGbEI7QUFBQSxRQUdJUCxRQUFRTCxTQUFTSSxLQUFLUyxRQUFkLEdBQXlCLENBSHJDOztBQUtBLFFBQUlDLFdBQVcsb0ZBQWlCVCxLQUFqQixFQUF3Qk4sT0FBeEIsRUFBaUNXLE9BQWpDLENBQWY7O0FBRUEsV0FBT0UsZ0JBQWdCRyxTQUF2QixFQUFrQ0gsY0FBY0UsVUFBaEQsRUFBNEQ7QUFDMUQsVUFBSVgsU0FBU0MsSUFBVCxFQUFlQyxRQUFRTyxXQUF2QixDQUFKLEVBQXlDO0FBQ3ZDUixhQUFLSixNQUFMLEdBQWNBLFVBQVVZLFdBQXhCO0FBQ0E7QUFDRDtBQUNGOztBQUVELFFBQUlBLGdCQUFnQkcsU0FBcEIsRUFBK0I7QUFDN0IsYUFBTyxLQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBaEIsY0FBVUssS0FBS0osTUFBTCxHQUFjSSxLQUFLUyxRQUFuQixHQUE4QlQsS0FBS08sUUFBN0M7QUFDRDs7QUFFRDtBQUNBLE1BQUlLLGFBQWEsQ0FBakI7QUFDQSxPQUFLLElBQUlQLEtBQUksQ0FBYixFQUFnQkEsS0FBSWxCLE1BQU1OLE1BQTFCLEVBQWtDd0IsSUFBbEMsRUFBdUM7QUFDckMsUUFBSUwsUUFBT2IsTUFBTWtCLEVBQU4sQ0FBWDtBQUFBLFFBQ0lKLFNBQVFELE1BQUtTLFFBQUwsR0FBZ0JULE1BQUtKLE1BQXJCLEdBQThCZ0IsVUFBOUIsR0FBMkMsQ0FEdkQ7QUFFQUEsa0JBQWNaLE1BQUthLFFBQUwsR0FBZ0JiLE1BQUtPLFFBQW5DOztBQUVBLFFBQUlOLFNBQVEsQ0FBWixFQUFlO0FBQUU7QUFDZkEsZUFBUSxDQUFSO0FBQ0Q7O0FBRUQsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE1BQUtqQixLQUFMLENBQVdGLE1BQS9CLEVBQXVDcUIsR0FBdkMsRUFBNEM7QUFDMUMsVUFBSVosT0FBT1UsTUFBS2pCLEtBQUwsQ0FBV21CLENBQVgsQ0FBWDtBQUFBLFVBQ0lYLFlBQWFELEtBQUtULE1BQUwsR0FBYyxDQUFkLEdBQWtCUyxLQUFLLENBQUwsQ0FBbEIsR0FBNEIsR0FEN0M7QUFBQSxVQUVJYSxVQUFXYixLQUFLVCxNQUFMLEdBQWMsQ0FBZCxHQUFrQlMsS0FBS2MsTUFBTCxDQUFZLENBQVosQ0FBbEIsR0FBbUNkLElBRmxEO0FBQUEsVUFHSXdCLFlBQVlkLE1BQUtlLGNBQUwsQ0FBb0JiLENBQXBCLENBSGhCOztBQUtBLFVBQUlYLGNBQWMsR0FBbEIsRUFBdUI7QUFDckJVO0FBQ0QsT0FGRCxNQUVPLElBQUlWLGNBQWMsR0FBbEIsRUFBdUI7QUFDNUJSLGNBQU1pQyxNQUFOLENBQWFmLE1BQWIsRUFBb0IsQ0FBcEI7QUFDQWhCLG1CQUFXK0IsTUFBWCxDQUFrQmYsTUFBbEIsRUFBeUIsQ0FBekI7QUFDRjtBQUNDLE9BSk0sTUFJQSxJQUFJVixjQUFjLEdBQWxCLEVBQXVCO0FBQzVCUixjQUFNaUMsTUFBTixDQUFhZixNQUFiLEVBQW9CLENBQXBCLEVBQXVCRSxPQUF2QjtBQUNBbEIsbUJBQVcrQixNQUFYLENBQWtCZixNQUFsQixFQUF5QixDQUF6QixFQUE0QmEsU0FBNUI7QUFDQWI7QUFDRCxPQUpNLE1BSUEsSUFBSVYsY0FBYyxJQUFsQixFQUF3QjtBQUM3QixZQUFJMEIsb0JBQW9CakIsTUFBS2pCLEtBQUwsQ0FBV21CLElBQUksQ0FBZixJQUFvQkYsTUFBS2pCLEtBQUwsQ0FBV21CLElBQUksQ0FBZixFQUFrQixDQUFsQixDQUFwQixHQUEyQyxJQUFuRTtBQUNBLFlBQUllLHNCQUFzQixHQUExQixFQUErQjtBQUM3QnBCLHdCQUFjLElBQWQ7QUFDRCxTQUZELE1BRU8sSUFBSW9CLHNCQUFzQixHQUExQixFQUErQjtBQUNwQ25CLHFCQUFXLElBQVg7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBLE1BQUlELFdBQUosRUFBaUI7QUFDZixXQUFPLENBQUNkLE1BQU1BLE1BQU1GLE1BQU4sR0FBZSxDQUFyQixDQUFSLEVBQWlDO0FBQy9CRSxZQUFNbUMsR0FBTjtBQUNBakMsaUJBQVdpQyxHQUFYO0FBQ0Q7QUFDRixHQUxELE1BS08sSUFBSXBCLFFBQUosRUFBYztBQUNuQmYsVUFBTW9DLElBQU4sQ0FBVyxFQUFYO0FBQ0FsQyxlQUFXa0MsSUFBWCxDQUFnQixJQUFoQjtBQUNEO0FBQ0QsT0FBSyxJQUFJQyxLQUFLLENBQWQsRUFBaUJBLEtBQUtyQyxNQUFNRixNQUFOLEdBQWUsQ0FBckMsRUFBd0N1QyxJQUF4QyxFQUE4QztBQUM1Q3JDLFVBQU1xQyxFQUFOLElBQVlyQyxNQUFNcUMsRUFBTixJQUFZbkMsV0FBV21DLEVBQVgsQ0FBeEI7QUFDRDtBQUNELFNBQU9yQyxNQUFNc0MsSUFBTixDQUFXLEVBQVgsQ0FBUDtBQUNEOztBQUVEO0FBQ08sU0FBUzlDLFlBQVQsQ0FBc0JFLE9BQXRCLEVBQStCQyxPQUEvQixFQUF3QztBQUM3QyxNQUFJLE9BQU9ELE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0JBLGNBQVUsd0VBQVdBLE9BQVgsQ0FBVjtBQUNEOztBQUVELE1BQUk2QyxlQUFlLENBQW5CO0FBQ0EsV0FBU0MsWUFBVCxHQUF3QjtBQUN0QixRQUFJQyxRQUFRL0MsUUFBUTZDLGNBQVIsQ0FBWjtBQUNBLFFBQUksQ0FBQ0UsS0FBTCxFQUFZO0FBQ1YsYUFBTzlDLFFBQVErQyxRQUFSLEVBQVA7QUFDRDs7QUFFRC9DLFlBQVFnRCxRQUFSLENBQWlCRixLQUFqQixFQUF3QixVQUFTRyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDMUMsVUFBSUQsR0FBSixFQUFTO0FBQ1AsZUFBT2pELFFBQVErQyxRQUFSLENBQWlCRSxHQUFqQixDQUFQO0FBQ0Q7O0FBRUQsVUFBSUUsaUJBQWlCdkQsV0FBV3NELElBQVgsRUFBaUJKLEtBQWpCLEVBQXdCOUMsT0FBeEIsQ0FBckI7QUFDQUEsY0FBUW9ELE9BQVIsQ0FBZ0JOLEtBQWhCLEVBQXVCSyxjQUF2QixFQUF1QyxVQUFTRixHQUFULEVBQWM7QUFDbkQsWUFBSUEsR0FBSixFQUFTO0FBQ1AsaUJBQU9qRCxRQUFRK0MsUUFBUixDQUFpQkUsR0FBakIsQ0FBUDtBQUNEOztBQUVESjtBQUNELE9BTkQ7QUFPRCxLQWJEO0FBY0Q7QUFDREE7QUFDRCIsImZpbGUiOiJhcHBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQgZGlzdGFuY2VJdGVyYXRvciBmcm9tICcuLi91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0Y2goc291cmNlLCB1bmlEaWZmLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodW5pRGlmZikpIHtcbiAgICBpZiAodW5pRGlmZi5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwcGx5UGF0Y2ggb25seSB3b3JrcyB3aXRoIGEgc2luZ2xlIGlucHV0LicpO1xuICAgIH1cblxuICAgIHVuaURpZmYgPSB1bmlEaWZmWzBdO1xuICB9XG5cbiAgLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG4gIGxldCBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSBzb3VyY2UubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgaHVua3MgPSB1bmlEaWZmLmh1bmtzLFxuXG4gICAgICBjb21wYXJlTGluZSA9IG9wdGlvbnMuY29tcGFyZUxpbmUgfHwgKChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkgPT4gbGluZSA9PT0gcGF0Y2hDb250ZW50KSxcbiAgICAgIGVycm9yQ291bnQgPSAwLFxuICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgbWluTGluZSA9IDAsXG4gICAgICBvZmZzZXQgPSAwLFxuXG4gICAgICByZW1vdmVFT0ZOTCxcbiAgICAgIGFkZEVPRk5MO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGh1bmsgZXhhY3RseSBmaXRzIG9uIHRoZSBwcm92aWRlZCBsb2NhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gaHVua0ZpdHMoaHVuaywgdG9Qb3MpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSAobGluZS5sZW5ndGggPiAwID8gbGluZVswXSA6ICcgJyksXG4gICAgICAgICAgY29udGVudCA9IChsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmUpO1xuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnICcgfHwgb3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgLy8gQ29udGV4dCBzYW5pdHkgY2hlY2tcbiAgICAgICAgaWYgKCFjb21wYXJlTGluZSh0b1BvcyArIDEsIGxpbmVzW3RvUG9zXSwgb3BlcmF0aW9uLCBjb250ZW50KSkge1xuICAgICAgICAgIGVycm9yQ291bnQrKztcblxuICAgICAgICAgIGlmIChlcnJvckNvdW50ID4gZnV6ekZhY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b1BvcysrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gU2VhcmNoIGJlc3QgZml0IG9mZnNldHMgZm9yIGVhY2ggaHVuayBiYXNlZCBvbiB0aGUgcHJldmlvdXMgb25lc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGh1bmsgPSBodW5rc1tpXSxcbiAgICAgICAgbWF4TGluZSA9IGxpbmVzLmxlbmd0aCAtIGh1bmsub2xkTGluZXMsXG4gICAgICAgIGxvY2FsT2Zmc2V0ID0gMCxcbiAgICAgICAgdG9Qb3MgPSBvZmZzZXQgKyBodW5rLm9sZFN0YXJ0IC0gMTtcblxuICAgIGxldCBpdGVyYXRvciA9IGRpc3RhbmNlSXRlcmF0b3IodG9Qb3MsIG1pbkxpbmUsIG1heExpbmUpO1xuXG4gICAgZm9yICg7IGxvY2FsT2Zmc2V0ICE9PSB1bmRlZmluZWQ7IGxvY2FsT2Zmc2V0ID0gaXRlcmF0b3IoKSkge1xuICAgICAgaWYgKGh1bmtGaXRzKGh1bmssIHRvUG9zICsgbG9jYWxPZmZzZXQpKSB7XG4gICAgICAgIGh1bmsub2Zmc2V0ID0gb2Zmc2V0ICs9IGxvY2FsT2Zmc2V0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobG9jYWxPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNldCBsb3dlciB0ZXh0IGxpbWl0IHRvIGVuZCBvZiB0aGUgY3VycmVudCBodW5rLCBzbyBuZXh0IG9uZXMgZG9uJ3QgdHJ5XG4gICAgLy8gdG8gZml0IG92ZXIgYWxyZWFkeSBwYXRjaGVkIHRleHRcbiAgICBtaW5MaW5lID0gaHVuay5vZmZzZXQgKyBodW5rLm9sZFN0YXJ0ICsgaHVuay5vbGRMaW5lcztcbiAgfVxuXG4gIC8vIEFwcGx5IHBhdGNoIGh1bmtzXG4gIGxldCBkaWZmT2Zmc2V0ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBodW5rID0gaHVua3NbaV0sXG4gICAgICAgIHRvUG9zID0gaHVuay5vbGRTdGFydCArIGh1bmsub2Zmc2V0ICsgZGlmZk9mZnNldCAtIDE7XG4gICAgZGlmZk9mZnNldCArPSBodW5rLm5ld0xpbmVzIC0gaHVuay5vbGRMaW5lcztcblxuICAgIGlmICh0b1BvcyA8IDApIHsgLy8gQ3JlYXRpbmcgYSBuZXcgZmlsZVxuICAgICAgdG9Qb3MgPSAwO1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaHVuay5saW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGxpbmUgPSBodW5rLmxpbmVzW2pdLFxuICAgICAgICAgIG9wZXJhdGlvbiA9IChsaW5lLmxlbmd0aCA+IDAgPyBsaW5lWzBdIDogJyAnKSxcbiAgICAgICAgICBjb250ZW50ID0gKGxpbmUubGVuZ3RoID4gMCA/IGxpbmUuc3Vic3RyKDEpIDogbGluZSksXG4gICAgICAgICAgZGVsaW1pdGVyID0gaHVuay5saW5lZGVsaW1pdGVyc1tqXTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgIHRvUG9zKys7XG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIGxpbmVzLnNwbGljZSh0b1BvcywgMSk7XG4gICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKHRvUG9zLCAxKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgIGxpbmVzLnNwbGljZSh0b1BvcywgMCwgY29udGVudCk7XG4gICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKHRvUG9zLCAwLCBkZWxpbWl0ZXIpO1xuICAgICAgICB0b1BvcysrO1xuICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdcXFxcJykge1xuICAgICAgICBsZXQgcHJldmlvdXNPcGVyYXRpb24gPSBodW5rLmxpbmVzW2ogLSAxXSA/IGh1bmsubGluZXNbaiAtIDFdWzBdIDogbnVsbDtcbiAgICAgICAgaWYgKHByZXZpb3VzT3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICByZW1vdmVFT0ZOTCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgIGFkZEVPRk5MID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBFT0ZOTCBpbnNlcnRpb24vcmVtb3ZhbFxuICBpZiAocmVtb3ZlRU9GTkwpIHtcbiAgICB3aGlsZSAoIWxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICBsaW5lcy5wb3AoKTtcbiAgICAgIGRlbGltaXRlcnMucG9wKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFkZEVPRk5MKSB7XG4gICAgbGluZXMucHVzaCgnJyk7XG4gICAgZGVsaW1pdGVycy5wdXNoKCdcXG4nKTtcbiAgfVxuICBmb3IgKGxldCBfayA9IDA7IF9rIDwgbGluZXMubGVuZ3RoIC0gMTsgX2srKykge1xuICAgIGxpbmVzW19rXSA9IGxpbmVzW19rXSArIGRlbGltaXRlcnNbX2tdO1xuICB9XG4gIHJldHVybiBsaW5lcy5qb2luKCcnKTtcbn1cblxuLy8gV3JhcHBlciB0aGF0IHN1cHBvcnRzIG11bHRpcGxlIGZpbGUgcGF0Y2hlcyB2aWEgY2FsbGJhY2tzLlxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0Y2hlcyh1bmlEaWZmLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICB1bmlEaWZmID0gcGFyc2VQYXRjaCh1bmlEaWZmKTtcbiAgfVxuXG4gIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICBmdW5jdGlvbiBwcm9jZXNzSW5kZXgoKSB7XG4gICAgbGV0IGluZGV4ID0gdW5pRGlmZltjdXJyZW50SW5kZXgrK107XG4gICAgaWYgKCFpbmRleCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBvcHRpb25zLmxvYWRGaWxlKGluZGV4LCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHVwZGF0ZWRDb250ZW50ID0gYXBwbHlQYXRjaChkYXRhLCBpbmRleCwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLnBhdGNoZWQoaW5kZXgsIHVwZGF0ZWRDb250ZW50LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9jZXNzSW5kZXgoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHByb2Nlc3NJbmRleCgpO1xufVxuIl19


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/parsePatch = parsePatch;
	function parsePatch(uniDiff) {
	  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
	      delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
	      list = [],
	      i = 0;

	  function parseIndex() {
	    var index = {};
	    list.push(index);

	    // Parse diff metadata
	    while (i < diffstr.length) {
	      var line = diffstr[i];

	      // File header found, end parsing diff metadata
	      if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
	        break;
	      }

	      // Diff index
	      var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);
	      if (header) {
	        index.index = header[1];
	      }

	      i++;
	    }

	    // Parse file headers if they are defined. Unified diff requires them, but
	    // there's no technical issues to have an isolated hunk without file header
	    parseFileHeader(index);
	    parseFileHeader(index);

	    // Parse hunks
	    index.hunks = [];

	    while (i < diffstr.length) {
	      var _line = diffstr[i];

	      if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
	        break;
	      } else if (/^@@/.test(_line)) {
	        index.hunks.push(parseHunk());
	      } else if (_line && options.strict) {
	        // Ignore unexpected content unless in strict mode
	        throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
	      } else {
	        i++;
	      }
	    }
	  }

	  // Parses the --- and +++ headers, if none are found, no lines
	  // are consumed.
	  function parseFileHeader(index) {
	    var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);
	    if (fileHeader) {
	      var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
	      var data = fileHeader[2].split('\t', 2);
	      var fileName = data[0].replace(/\\\\/g, '\\');
	      if (/^".*"$/.test(fileName)) {
	        fileName = fileName.substr(1, fileName.length - 2);
	      }
	      index[keyPrefix + 'FileName'] = fileName;
	      index[keyPrefix + 'Header'] = (data[1] || '').trim();

	      i++;
	    }
	  }

	  // Parses a hunk
	  // This assumes that we are at the start of a hunk.
	  function parseHunk() {
	    var chunkHeaderIndex = i,
	        chunkHeaderLine = diffstr[i++],
	        chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);

	    var hunk = {
	      oldStart: +chunkHeader[1],
	      oldLines: +chunkHeader[2] || 1,
	      newStart: +chunkHeader[3],
	      newLines: +chunkHeader[4] || 1,
	      lines: [],
	      linedelimiters: []
	    };

	    var addCount = 0,
	        removeCount = 0;
	    for (; i < diffstr.length; i++) {
	      // Lines starting with '---' could be mistaken for the "remove line" operation
	      // But they could be the header for the next file. Therefore prune such cases out.
	      if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
	        break;
	      }
	      var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? ' ' : diffstr[i][0];

	      if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
	        hunk.lines.push(diffstr[i]);
	        hunk.linedelimiters.push(delimiters[i] || '\n');

	        if (operation === '+') {
	          addCount++;
	        } else if (operation === '-') {
	          removeCount++;
	        } else if (operation === ' ') {
	          addCount++;
	          removeCount++;
	        }
	      } else {
	        break;
	      }
	    }

	    // Handle the empty block count case
	    if (!addCount && hunk.newLines === 1) {
	      hunk.newLines = 0;
	    }
	    if (!removeCount && hunk.oldLines === 1) {
	      hunk.oldLines = 0;
	    }

	    // Perform optional sanity checking
	    if (options.strict) {
	      if (addCount !== hunk.newLines) {
	        throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
	      }
	      if (removeCount !== hunk.oldLines) {
	        throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
	      }
	    }

	    return hunk;
	  }

	  while (i < diffstr.length) {
	    parseIndex();
	  }

	  return list;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9wYXJzZS5qcyJdLCJuYW1lcyI6WyJwYXJzZVBhdGNoIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJkaWZmc3RyIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJsaXN0IiwiaSIsInBhcnNlSW5kZXgiLCJpbmRleCIsInB1c2giLCJsZW5ndGgiLCJsaW5lIiwidGVzdCIsImhlYWRlciIsImV4ZWMiLCJwYXJzZUZpbGVIZWFkZXIiLCJodW5rcyIsInBhcnNlSHVuayIsInN0cmljdCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbGVIZWFkZXIiLCJrZXlQcmVmaXgiLCJkYXRhIiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwic3Vic3RyIiwidHJpbSIsImNodW5rSGVhZGVySW5kZXgiLCJjaHVua0hlYWRlckxpbmUiLCJjaHVua0hlYWRlciIsImh1bmsiLCJvbGRTdGFydCIsIm9sZExpbmVzIiwibmV3U3RhcnQiLCJuZXdMaW5lcyIsImxpbmVzIiwibGluZWRlbGltaXRlcnMiLCJhZGRDb3VudCIsInJlbW92ZUNvdW50IiwiaW5kZXhPZiIsIm9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7O2dDQUFnQkEsVSxHQUFBQSxVO0FBQVQsU0FBU0EsVUFBVCxDQUFvQkMsT0FBcEIsRUFBMkM7QUFBQSxzREFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUNoRCxNQUFJQyxVQUFVRixRQUFRRyxLQUFSLENBQWMscUJBQWQsQ0FBZDtBQUFBLE1BQ0lDLGFBQWFKLFFBQVFLLEtBQVIsQ0FBYyxzQkFBZCxLQUF5QyxFQUQxRDtBQUFBLE1BRUlDLE9BQU8sRUFGWDtBQUFBLE1BR0lDLElBQUksQ0FIUjs7QUFLQSxXQUFTQyxVQUFULEdBQXNCO0FBQ3BCLFFBQUlDLFFBQVEsRUFBWjtBQUNBSCxTQUFLSSxJQUFMLENBQVVELEtBQVY7O0FBRUE7QUFDQSxXQUFPRixJQUFJTCxRQUFRUyxNQUFuQixFQUEyQjtBQUN6QixVQUFJQyxPQUFPVixRQUFRSyxDQUFSLENBQVg7O0FBRUE7QUFDQSxVQUFJLHdCQUF3Qk0sSUFBeEIsQ0FBNkJELElBQTdCLENBQUosRUFBd0M7QUFDdEM7QUFDRDs7QUFFRDtBQUNBLFVBQUlFLFNBQVUsMENBQUQsQ0FBNkNDLElBQTdDLENBQWtESCxJQUFsRCxDQUFiO0FBQ0EsVUFBSUUsTUFBSixFQUFZO0FBQ1ZMLGNBQU1BLEtBQU4sR0FBY0ssT0FBTyxDQUFQLENBQWQ7QUFDRDs7QUFFRFA7QUFDRDs7QUFFRDtBQUNBO0FBQ0FTLG9CQUFnQlAsS0FBaEI7QUFDQU8sb0JBQWdCUCxLQUFoQjs7QUFFQTtBQUNBQSxVQUFNUSxLQUFOLEdBQWMsRUFBZDs7QUFFQSxXQUFPVixJQUFJTCxRQUFRUyxNQUFuQixFQUEyQjtBQUN6QixVQUFJQyxRQUFPVixRQUFRSyxDQUFSLENBQVg7O0FBRUEsVUFBSSxpQ0FBaUNNLElBQWpDLENBQXNDRCxLQUF0QyxDQUFKLEVBQWlEO0FBQy9DO0FBQ0QsT0FGRCxNQUVPLElBQUksTUFBTUMsSUFBTixDQUFXRCxLQUFYLENBQUosRUFBc0I7QUFDM0JILGNBQU1RLEtBQU4sQ0FBWVAsSUFBWixDQUFpQlEsV0FBakI7QUFDRCxPQUZNLE1BRUEsSUFBSU4sU0FBUVgsUUFBUWtCLE1BQXBCLEVBQTRCO0FBQ2pDO0FBQ0EsY0FBTSxJQUFJQyxLQUFKLENBQVUsbUJBQW1CYixJQUFJLENBQXZCLElBQTRCLEdBQTVCLEdBQWtDYyxLQUFLQyxTQUFMLENBQWVWLEtBQWYsQ0FBNUMsQ0FBTjtBQUNELE9BSE0sTUFHQTtBQUNMTDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBO0FBQ0EsV0FBU1MsZUFBVCxDQUF5QlAsS0FBekIsRUFBZ0M7QUFDOUIsUUFBTWMsYUFBYyx1QkFBRCxDQUEwQlIsSUFBMUIsQ0FBK0JiLFFBQVFLLENBQVIsQ0FBL0IsQ0FBbkI7QUFDQSxRQUFJZ0IsVUFBSixFQUFnQjtBQUNkLFVBQUlDLFlBQVlELFdBQVcsQ0FBWCxNQUFrQixLQUFsQixHQUEwQixLQUExQixHQUFrQyxLQUFsRDtBQUNBLFVBQU1FLE9BQU9GLFdBQVcsQ0FBWCxFQUFjcEIsS0FBZCxDQUFvQixJQUFwQixFQUEwQixDQUExQixDQUFiO0FBQ0EsVUFBSXVCLFdBQVdELEtBQUssQ0FBTCxFQUFRRSxPQUFSLENBQWdCLE9BQWhCLEVBQXlCLElBQXpCLENBQWY7QUFDQSxVQUFJLFNBQVNkLElBQVQsQ0FBY2EsUUFBZCxDQUFKLEVBQTZCO0FBQzNCQSxtQkFBV0EsU0FBU0UsTUFBVCxDQUFnQixDQUFoQixFQUFtQkYsU0FBU2YsTUFBVCxHQUFrQixDQUFyQyxDQUFYO0FBQ0Q7QUFDREYsWUFBTWUsWUFBWSxVQUFsQixJQUFnQ0UsUUFBaEM7QUFDQWpCLFlBQU1lLFlBQVksUUFBbEIsSUFBOEIsQ0FBQ0MsS0FBSyxDQUFMLEtBQVcsRUFBWixFQUFnQkksSUFBaEIsRUFBOUI7O0FBRUF0QjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBLFdBQVNXLFNBQVQsR0FBcUI7QUFDbkIsUUFBSVksbUJBQW1CdkIsQ0FBdkI7QUFBQSxRQUNJd0Isa0JBQWtCN0IsUUFBUUssR0FBUixDQUR0QjtBQUFBLFFBRUl5QixjQUFjRCxnQkFBZ0I1QixLQUFoQixDQUFzQiw0Q0FBdEIsQ0FGbEI7O0FBSUEsUUFBSThCLE9BQU87QUFDVEMsZ0JBQVUsQ0FBQ0YsWUFBWSxDQUFaLENBREY7QUFFVEcsZ0JBQVUsQ0FBQ0gsWUFBWSxDQUFaLENBQUQsSUFBbUIsQ0FGcEI7QUFHVEksZ0JBQVUsQ0FBQ0osWUFBWSxDQUFaLENBSEY7QUFJVEssZ0JBQVUsQ0FBQ0wsWUFBWSxDQUFaLENBQUQsSUFBbUIsQ0FKcEI7QUFLVE0sYUFBTyxFQUxFO0FBTVRDLHNCQUFnQjtBQU5QLEtBQVg7O0FBU0EsUUFBSUMsV0FBVyxDQUFmO0FBQUEsUUFDSUMsY0FBYyxDQURsQjtBQUVBLFdBQU9sQyxJQUFJTCxRQUFRUyxNQUFuQixFQUEyQkosR0FBM0IsRUFBZ0M7QUFDOUI7QUFDQTtBQUNBLFVBQUlMLFFBQVFLLENBQVIsRUFBV21DLE9BQVgsQ0FBbUIsTUFBbkIsTUFBK0IsQ0FBL0IsSUFDTW5DLElBQUksQ0FBSixHQUFRTCxRQUFRUyxNQUR0QixJQUVLVCxRQUFRSyxJQUFJLENBQVosRUFBZW1DLE9BQWYsQ0FBdUIsTUFBdkIsTUFBbUMsQ0FGeEMsSUFHS3hDLFFBQVFLLElBQUksQ0FBWixFQUFlbUMsT0FBZixDQUF1QixJQUF2QixNQUFpQyxDQUgxQyxFQUc2QztBQUN6QztBQUNIO0FBQ0QsVUFBSUMsWUFBYXpDLFFBQVFLLENBQVIsRUFBV0ksTUFBWCxJQUFxQixDQUFyQixJQUEwQkosS0FBTUwsUUFBUVMsTUFBUixHQUFpQixDQUFsRCxHQUF3RCxHQUF4RCxHQUE4RFQsUUFBUUssQ0FBUixFQUFXLENBQVgsQ0FBOUU7O0FBRUEsVUFBSW9DLGNBQWMsR0FBZCxJQUFxQkEsY0FBYyxHQUFuQyxJQUEwQ0EsY0FBYyxHQUF4RCxJQUErREEsY0FBYyxJQUFqRixFQUF1RjtBQUNyRlYsYUFBS0ssS0FBTCxDQUFXNUIsSUFBWCxDQUFnQlIsUUFBUUssQ0FBUixDQUFoQjtBQUNBMEIsYUFBS00sY0FBTCxDQUFvQjdCLElBQXBCLENBQXlCTixXQUFXRyxDQUFYLEtBQWlCLElBQTFDOztBQUVBLFlBQUlvQyxjQUFjLEdBQWxCLEVBQXVCO0FBQ3JCSDtBQUNELFNBRkQsTUFFTyxJQUFJRyxjQUFjLEdBQWxCLEVBQXVCO0FBQzVCRjtBQUNELFNBRk0sTUFFQSxJQUFJRSxjQUFjLEdBQWxCLEVBQXVCO0FBQzVCSDtBQUNBQztBQUNEO0FBQ0YsT0FaRCxNQVlPO0FBQ0w7QUFDRDtBQUNGOztBQUVEO0FBQ0EsUUFBSSxDQUFDRCxRQUFELElBQWFQLEtBQUtJLFFBQUwsS0FBa0IsQ0FBbkMsRUFBc0M7QUFDcENKLFdBQUtJLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDRDtBQUNELFFBQUksQ0FBQ0ksV0FBRCxJQUFnQlIsS0FBS0UsUUFBTCxLQUFrQixDQUF0QyxFQUF5QztBQUN2Q0YsV0FBS0UsUUFBTCxHQUFnQixDQUFoQjtBQUNEOztBQUVEO0FBQ0EsUUFBSWxDLFFBQVFrQixNQUFaLEVBQW9CO0FBQ2xCLFVBQUlxQixhQUFhUCxLQUFLSSxRQUF0QixFQUFnQztBQUM5QixjQUFNLElBQUlqQixLQUFKLENBQVUsc0RBQXNEVSxtQkFBbUIsQ0FBekUsQ0FBVixDQUFOO0FBQ0Q7QUFDRCxVQUFJVyxnQkFBZ0JSLEtBQUtFLFFBQXpCLEVBQW1DO0FBQ2pDLGNBQU0sSUFBSWYsS0FBSixDQUFVLHdEQUF3RFUsbUJBQW1CLENBQTNFLENBQVYsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsV0FBT0csSUFBUDtBQUNEOztBQUVELFNBQU8xQixJQUFJTCxRQUFRUyxNQUFuQixFQUEyQjtBQUN6Qkg7QUFDRDs7QUFFRCxTQUFPRixJQUFQO0FBQ0QiLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcGFyc2VQYXRjaCh1bmlEaWZmLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGRpZmZzdHIgPSB1bmlEaWZmLnNwbGl0KC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS8pLFxuICAgICAgZGVsaW1pdGVycyA9IHVuaURpZmYubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgbGlzdCA9IFtdLFxuICAgICAgaSA9IDA7XG5cbiAgZnVuY3Rpb24gcGFyc2VJbmRleCgpIHtcbiAgICBsZXQgaW5kZXggPSB7fTtcbiAgICBsaXN0LnB1c2goaW5kZXgpO1xuXG4gICAgLy8gUGFyc2UgZGlmZiBtZXRhZGF0YVxuICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgIGxldCBsaW5lID0gZGlmZnN0cltpXTtcblxuICAgICAgLy8gRmlsZSBoZWFkZXIgZm91bmQsIGVuZCBwYXJzaW5nIGRpZmYgbWV0YWRhdGFcbiAgICAgIGlmICgvXihcXC1cXC1cXC18XFwrXFwrXFwrfEBAKVxccy8udGVzdChsaW5lKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gRGlmZiBpbmRleFxuICAgICAgbGV0IGhlYWRlciA9ICgvXig/OkluZGV4OnxkaWZmKD86IC1yIFxcdyspKylcXHMrKC4rPylcXHMqJC8pLmV4ZWMobGluZSk7XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIGluZGV4LmluZGV4ID0gaGVhZGVyWzFdO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gUGFyc2UgZmlsZSBoZWFkZXJzIGlmIHRoZXkgYXJlIGRlZmluZWQuIFVuaWZpZWQgZGlmZiByZXF1aXJlcyB0aGVtLCBidXRcbiAgICAvLyB0aGVyZSdzIG5vIHRlY2huaWNhbCBpc3N1ZXMgdG8gaGF2ZSBhbiBpc29sYXRlZCBodW5rIHdpdGhvdXQgZmlsZSBoZWFkZXJcbiAgICBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpO1xuICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7XG5cbiAgICAvLyBQYXJzZSBodW5rc1xuICAgIGluZGV4Lmh1bmtzID0gW107XG5cbiAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICBsZXQgbGluZSA9IGRpZmZzdHJbaV07XG5cbiAgICAgIGlmICgvXihJbmRleDp8ZGlmZnxcXC1cXC1cXC18XFwrXFwrXFwrKVxccy8udGVzdChsaW5lKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoL15AQC8udGVzdChsaW5lKSkge1xuICAgICAgICBpbmRleC5odW5rcy5wdXNoKHBhcnNlSHVuaygpKTtcbiAgICAgIH0gZWxzZSBpZiAobGluZSAmJiBvcHRpb25zLnN0cmljdCkge1xuICAgICAgICAvLyBJZ25vcmUgdW5leHBlY3RlZCBjb250ZW50IHVubGVzcyBpbiBzdHJpY3QgbW9kZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGluZSAnICsgKGkgKyAxKSArICcgJyArIEpTT04uc3RyaW5naWZ5KGxpbmUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQYXJzZXMgdGhlIC0tLSBhbmQgKysrIGhlYWRlcnMsIGlmIG5vbmUgYXJlIGZvdW5kLCBubyBsaW5lc1xuICAvLyBhcmUgY29uc3VtZWQuXG4gIGZ1bmN0aW9uIHBhcnNlRmlsZUhlYWRlcihpbmRleCkge1xuICAgIGNvbnN0IGZpbGVIZWFkZXIgPSAoL14oLS0tfFxcK1xcK1xcKylcXHMrKC4qKSQvKS5leGVjKGRpZmZzdHJbaV0pO1xuICAgIGlmIChmaWxlSGVhZGVyKSB7XG4gICAgICBsZXQga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgY29uc3QgZGF0YSA9IGZpbGVIZWFkZXJbMl0uc3BsaXQoJ1xcdCcsIDIpO1xuICAgICAgbGV0IGZpbGVOYW1lID0gZGF0YVswXS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpO1xuICAgICAgaWYgKC9eXCIuKlwiJC8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgZmlsZU5hbWUgPSBmaWxlTmFtZS5zdWJzdHIoMSwgZmlsZU5hbWUubGVuZ3RoIC0gMik7XG4gICAgICB9XG4gICAgICBpbmRleFtrZXlQcmVmaXggKyAnRmlsZU5hbWUnXSA9IGZpbGVOYW1lO1xuICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0hlYWRlciddID0gKGRhdGFbMV0gfHwgJycpLnRyaW0oKTtcblxuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlcyBhIGh1bmtcbiAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgd2UgYXJlIGF0IHRoZSBzdGFydCBvZiBhIGh1bmsuXG4gIGZ1bmN0aW9uIHBhcnNlSHVuaygpIHtcbiAgICBsZXQgY2h1bmtIZWFkZXJJbmRleCA9IGksXG4gICAgICAgIGNodW5rSGVhZGVyTGluZSA9IGRpZmZzdHJbaSsrXSxcbiAgICAgICAgY2h1bmtIZWFkZXIgPSBjaHVua0hlYWRlckxpbmUuc3BsaXQoL0BAIC0oXFxkKykoPzosKFxcZCspKT8gXFwrKFxcZCspKD86LChcXGQrKSk/IEBALyk7XG5cbiAgICBsZXQgaHVuayA9IHtcbiAgICAgIG9sZFN0YXJ0OiArY2h1bmtIZWFkZXJbMV0sXG4gICAgICBvbGRMaW5lczogK2NodW5rSGVhZGVyWzJdIHx8IDEsXG4gICAgICBuZXdTdGFydDogK2NodW5rSGVhZGVyWzNdLFxuICAgICAgbmV3TGluZXM6ICtjaHVua0hlYWRlcls0XSB8fCAxLFxuICAgICAgbGluZXM6IFtdLFxuICAgICAgbGluZWRlbGltaXRlcnM6IFtdXG4gICAgfTtcblxuICAgIGxldCBhZGRDb3VudCA9IDAsXG4gICAgICAgIHJlbW92ZUNvdW50ID0gMDtcbiAgICBmb3IgKDsgaSA8IGRpZmZzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpbmVzIHN0YXJ0aW5nIHdpdGggJy0tLScgY291bGQgYmUgbWlzdGFrZW4gZm9yIHRoZSBcInJlbW92ZSBsaW5lXCIgb3BlcmF0aW9uXG4gICAgICAvLyBCdXQgdGhleSBjb3VsZCBiZSB0aGUgaGVhZGVyIGZvciB0aGUgbmV4dCBmaWxlLiBUaGVyZWZvcmUgcHJ1bmUgc3VjaCBjYXNlcyBvdXQuXG4gICAgICBpZiAoZGlmZnN0cltpXS5pbmRleE9mKCctLS0gJykgPT09IDBcbiAgICAgICAgICAgICYmIChpICsgMiA8IGRpZmZzdHIubGVuZ3RoKVxuICAgICAgICAgICAgJiYgZGlmZnN0cltpICsgMV0uaW5kZXhPZignKysrICcpID09PSAwXG4gICAgICAgICAgICAmJiBkaWZmc3RyW2kgKyAyXS5pbmRleE9mKCdAQCcpID09PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBsZXQgb3BlcmF0aW9uID0gKGRpZmZzdHJbaV0ubGVuZ3RoID09IDAgJiYgaSAhPSAoZGlmZnN0ci5sZW5ndGggLSAxKSkgPyAnICcgOiBkaWZmc3RyW2ldWzBdO1xuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnKycgfHwgb3BlcmF0aW9uID09PSAnLScgfHwgb3BlcmF0aW9uID09PSAnICcgfHwgb3BlcmF0aW9uID09PSAnXFxcXCcpIHtcbiAgICAgICAgaHVuay5saW5lcy5wdXNoKGRpZmZzdHJbaV0pO1xuICAgICAgICBodW5rLmxpbmVkZWxpbWl0ZXJzLnB1c2goZGVsaW1pdGVyc1tpXSB8fCAnXFxuJyk7XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnICcpIHtcbiAgICAgICAgICBhZGRDb3VudCsrO1xuICAgICAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSB0aGUgZW1wdHkgYmxvY2sgY291bnQgY2FzZVxuICAgIGlmICghYWRkQ291bnQgJiYgaHVuay5uZXdMaW5lcyA9PT0gMSkge1xuICAgICAgaHVuay5uZXdMaW5lcyA9IDA7XG4gICAgfVxuICAgIGlmICghcmVtb3ZlQ291bnQgJiYgaHVuay5vbGRMaW5lcyA9PT0gMSkge1xuICAgICAgaHVuay5vbGRMaW5lcyA9IDA7XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBvcHRpb25hbCBzYW5pdHkgY2hlY2tpbmdcbiAgICBpZiAob3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgIGlmIChhZGRDb3VudCAhPT0gaHVuay5uZXdMaW5lcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FkZGVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZW1vdmVDb3VudCAhPT0gaHVuay5vbGRMaW5lcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW92ZWQgbGluZSBjb3VudCBkaWQgbm90IG1hdGNoIGZvciBodW5rIGF0IGxpbmUgJyArIChjaHVua0hlYWRlckluZGV4ICsgMSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodW5rO1xuICB9XG5cbiAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgIHBhcnNlSW5kZXgoKTtcbiAgfVxuXG4gIHJldHVybiBsaXN0O1xufVxuIl19


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	exports.__esModule = true;

	exports["default"] = /*istanbul ignore end*/function (start, minLine, maxLine) {
	  var wantForward = true,
	      backwardExhausted = false,
	      forwardExhausted = false,
	      localOffset = 1;

	  return function iterator() {
	    if (wantForward && !forwardExhausted) {
	      if (backwardExhausted) {
	        localOffset++;
	      } else {
	        wantForward = false;
	      }

	      // Check if trying to fit beyond text length, and if not, check it fits
	      // after offset location (or desired location on first iteration)
	      if (start + localOffset <= maxLine) {
	        return localOffset;
	      }

	      forwardExhausted = true;
	    }

	    if (!backwardExhausted) {
	      if (!forwardExhausted) {
	        wantForward = true;
	      }

	      // Check if trying to fit before text beginning, and if not, check it fits
	      // before offset location
	      if (minLine <= start - localOffset) {
	        return -localOffset++;
	      }

	      backwardExhausted = true;
	      return iterator();
	    }

	    // We tried to fit hunk before text beginning and beyond text length, then
	    // hunk can't fit on the text. Return undefined
	  };
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwibWluTGluZSIsIm1heExpbmUiLCJ3YW50Rm9yd2FyZCIsImJhY2t3YXJkRXhoYXVzdGVkIiwiZm9yd2FyZEV4aGF1c3RlZCIsImxvY2FsT2Zmc2V0IiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7NENBR2UsVUFBU0EsS0FBVCxFQUFnQkMsT0FBaEIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQy9DLE1BQUlDLGNBQWMsSUFBbEI7QUFBQSxNQUNJQyxvQkFBb0IsS0FEeEI7QUFBQSxNQUVJQyxtQkFBbUIsS0FGdkI7QUFBQSxNQUdJQyxjQUFjLENBSGxCOztBQUtBLFNBQU8sU0FBU0MsUUFBVCxHQUFvQjtBQUN6QixRQUFJSixlQUFlLENBQUNFLGdCQUFwQixFQUFzQztBQUNwQyxVQUFJRCxpQkFBSixFQUF1QjtBQUNyQkU7QUFDRCxPQUZELE1BRU87QUFDTEgsc0JBQWMsS0FBZDtBQUNEOztBQUVEO0FBQ0E7QUFDQSxVQUFJSCxRQUFRTSxXQUFSLElBQXVCSixPQUEzQixFQUFvQztBQUNsQyxlQUFPSSxXQUFQO0FBQ0Q7O0FBRURELHlCQUFtQixJQUFuQjtBQUNEOztBQUVELFFBQUksQ0FBQ0QsaUJBQUwsRUFBd0I7QUFDdEIsVUFBSSxDQUFDQyxnQkFBTCxFQUF1QjtBQUNyQkYsc0JBQWMsSUFBZDtBQUNEOztBQUVEO0FBQ0E7QUFDQSxVQUFJRixXQUFXRCxRQUFRTSxXQUF2QixFQUFvQztBQUNsQyxlQUFPLENBQUNBLGFBQVI7QUFDRDs7QUFFREYsMEJBQW9CLElBQXBCO0FBQ0EsYUFBT0csVUFBUDtBQUNEOztBQUVEO0FBQ0E7QUFDRCxHQWxDRDtBQW1DRCxDIiwiZmlsZSI6ImRpc3RhbmNlLWl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSXRlcmF0b3IgdGhhdCB0cmF2ZXJzZXMgaW4gdGhlIHJhbmdlIG9mIFttaW4sIG1heF0sIHN0ZXBwaW5nXG4vLyBieSBkaXN0YW5jZSBmcm9tIGEgZ2l2ZW4gc3RhcnQgcG9zaXRpb24uIEkuZS4gZm9yIFswLCA0XSwgd2l0aFxuLy8gc3RhcnQgb2YgMiwgdGhpcyB3aWxsIGl0ZXJhdGUgMiwgMywgMSwgNCwgMC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXJ0LCBtaW5MaW5lLCBtYXhMaW5lKSB7XG4gIGxldCB3YW50Rm9yd2FyZCA9IHRydWUsXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgbG9jYWxPZmZzZXQgPSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICBpZiAod2FudEZvcndhcmQgJiYgIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgIGlmIChiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICBsb2NhbE9mZnNldCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FudEZvcndhcmQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZXlvbmQgdGV4dCBsZW5ndGgsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgIC8vIGFmdGVyIG9mZnNldCBsb2NhdGlvbiAob3IgZGVzaXJlZCBsb2NhdGlvbiBvbiBmaXJzdCBpdGVyYXRpb24pXG4gICAgICBpZiAoc3RhcnQgKyBsb2NhbE9mZnNldCA8PSBtYXhMaW5lKSB7XG4gICAgICAgIHJldHVybiBsb2NhbE9mZnNldDtcbiAgICAgIH1cblxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgaWYgKCFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgIHdhbnRGb3J3YXJkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZWZvcmUgdGV4dCBiZWdpbm5pbmcsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgIC8vIGJlZm9yZSBvZmZzZXQgbG9jYXRpb25cbiAgICAgIGlmIChtaW5MaW5lIDw9IHN0YXJ0IC0gbG9jYWxPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC1sb2NhbE9mZnNldCsrO1xuICAgICAgfVxuXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICByZXR1cm4gaXRlcmF0b3IoKTtcbiAgICB9XG5cbiAgICAvLyBXZSB0cmllZCB0byBmaXQgaHVuayBiZWZvcmUgdGV4dCBiZWdpbm5pbmcgYW5kIGJleW9uZCB0ZXh0IGxlbmd0aCwgdGhlblxuICAgIC8vIGh1bmsgY2FuJ3QgZml0IG9uIHRoZSB0ZXh0LiBSZXR1cm4gdW5kZWZpbmVkXG4gIH07XG59XG4iXX0=


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/calcLineCount = calcLineCount;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/merge = merge;

	var /*istanbul ignore start*/_create = __webpack_require__(14) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_parse = __webpack_require__(11) /*istanbul ignore end*/;

	var /*istanbul ignore start*/_array = __webpack_require__(15) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/*istanbul ignore end*/function calcLineCount(hunk) {
	  /*istanbul ignore start*/var _calcOldNewLineCount = /*istanbul ignore end*/calcOldNewLineCount(hunk.lines),
	      oldLines = _calcOldNewLineCount.oldLines,
	      newLines = _calcOldNewLineCount.newLines;

	  if (oldLines !== undefined) {
	    hunk.oldLines = oldLines;
	  } else {
	    delete hunk.oldLines;
	  }

	  if (newLines !== undefined) {
	    hunk.newLines = newLines;
	  } else {
	    delete hunk.newLines;
	  }
	}

	function merge(mine, theirs, base) {
	  mine = loadPatch(mine, base);
	  theirs = loadPatch(theirs, base);

	  var ret = {};

	  // For index we just let it pass through as it doesn't have any necessary meaning.
	  // Leaving sanity checks on this to the API consumer that may know more about the
	  // meaning in their own context.
	  if (mine.index || theirs.index) {
	    ret.index = mine.index || theirs.index;
	  }

	  if (mine.newFileName || theirs.newFileName) {
	    if (!fileNameChanged(mine)) {
	      // No header or no change in ours, use theirs (and ours if theirs does not exist)
	      ret.oldFileName = theirs.oldFileName || mine.oldFileName;
	      ret.newFileName = theirs.newFileName || mine.newFileName;
	      ret.oldHeader = theirs.oldHeader || mine.oldHeader;
	      ret.newHeader = theirs.newHeader || mine.newHeader;
	    } else if (!fileNameChanged(theirs)) {
	      // No header or no change in theirs, use ours
	      ret.oldFileName = mine.oldFileName;
	      ret.newFileName = mine.newFileName;
	      ret.oldHeader = mine.oldHeader;
	      ret.newHeader = mine.newHeader;
	    } else {
	      // Both changed... figure it out
	      ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
	      ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
	      ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
	      ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
	    }
	  }

	  ret.hunks = [];

	  var mineIndex = 0,
	      theirsIndex = 0,
	      mineOffset = 0,
	      theirsOffset = 0;

	  while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
	    var mineCurrent = mine.hunks[mineIndex] || { oldStart: Infinity },
	        theirsCurrent = theirs.hunks[theirsIndex] || { oldStart: Infinity };

	    if (hunkBefore(mineCurrent, theirsCurrent)) {
	      // This patch does not overlap with any of the others, yay.
	      ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
	      mineIndex++;
	      theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
	    } else if (hunkBefore(theirsCurrent, mineCurrent)) {
	      // This patch does not overlap with any of the others, yay.
	      ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
	      theirsIndex++;
	      mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
	    } else {
	      // Overlap, merge as best we can
	      var mergedHunk = {
	        oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
	        oldLines: 0,
	        newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
	        newLines: 0,
	        lines: []
	      };
	      mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
	      theirsIndex++;
	      mineIndex++;

	      ret.hunks.push(mergedHunk);
	    }
	  }

	  return ret;
	}

	function loadPatch(param, base) {
	  if (typeof param === 'string') {
	    if (/^@@/m.test(param) || /^Index:/m.test(param)) {
	      return (/*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(param)[0]
	      );
	    }

	    if (!base) {
	      throw new Error('Must provide a base reference or pass in a patch');
	    }
	    return (/*istanbul ignore start*/(0, _create.structuredPatch) /*istanbul ignore end*/(undefined, undefined, base, param)
	    );
	  }

	  return param;
	}

	function fileNameChanged(patch) {
	  return patch.newFileName && patch.newFileName !== patch.oldFileName;
	}

	function selectField(index, mine, theirs) {
	  if (mine === theirs) {
	    return mine;
	  } else {
	    index.conflict = true;
	    return { mine: mine, theirs: theirs };
	  }
	}

	function hunkBefore(test, check) {
	  return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
	}

	function cloneHunk(hunk, offset) {
	  return {
	    oldStart: hunk.oldStart, oldLines: hunk.oldLines,
	    newStart: hunk.newStart + offset, newLines: hunk.newLines,
	    lines: hunk.lines
	  };
	}

	function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
	  // This will generally result in a conflicted hunk, but there are cases where the context
	  // is the only overlap where we can successfully merge the content here.
	  var mine = { offset: mineOffset, lines: mineLines, index: 0 },
	      their = { offset: theirOffset, lines: theirLines, index: 0 };

	  // Handle any leading content
	  insertLeading(hunk, mine, their);
	  insertLeading(hunk, their, mine);

	  // Now in the overlap content. Scan through and select the best changes from each.
	  while (mine.index < mine.lines.length && their.index < their.lines.length) {
	    var mineCurrent = mine.lines[mine.index],
	        theirCurrent = their.lines[their.index];

	    if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
	      // Both modified ...
	      mutualChange(hunk, mine, their);
	    } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
	      /*istanbul ignore start*/var _hunk$lines;

	      /*istanbul ignore end*/ // Mine inserted
	      /*istanbul ignore start*/(_hunk$lines = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/collectChange(mine)));
	    } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
	      /*istanbul ignore start*/var _hunk$lines2;

	      /*istanbul ignore end*/ // Theirs inserted
	      /*istanbul ignore start*/(_hunk$lines2 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/collectChange(their)));
	    } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
	      // Mine removed or edited
	      removal(hunk, mine, their);
	    } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
	      // Their removed or edited
	      removal(hunk, their, mine, true);
	    } else if (mineCurrent === theirCurrent) {
	      // Context identity
	      hunk.lines.push(mineCurrent);
	      mine.index++;
	      their.index++;
	    } else {
	      // Context mismatch
	      conflict(hunk, collectChange(mine), collectChange(their));
	    }
	  }

	  // Now push anything that may be remaining
	  insertTrailing(hunk, mine);
	  insertTrailing(hunk, their);

	  calcLineCount(hunk);
	}

	function mutualChange(hunk, mine, their) {
	  var myChanges = collectChange(mine),
	      theirChanges = collectChange(their);

	  if (allRemoves(myChanges) && allRemoves(theirChanges)) {
	    // Special case for remove changes that are supersets of one another
	    if ( /*istanbul ignore start*/(0, _array.arrayStartsWith) /*istanbul ignore end*/(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
	      /*istanbul ignore start*/var _hunk$lines3;

	      /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines3 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/myChanges));
	      return;
	    } else if ( /*istanbul ignore start*/(0, _array.arrayStartsWith) /*istanbul ignore end*/(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
	      /*istanbul ignore start*/var _hunk$lines4;

	      /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines4 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines4 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/theirChanges));
	      return;
	    }
	  } else if ( /*istanbul ignore start*/(0, _array.arrayEqual) /*istanbul ignore end*/(myChanges, theirChanges)) {
	    /*istanbul ignore start*/var _hunk$lines5;

	    /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines5 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines5 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/myChanges));
	    return;
	  }

	  conflict(hunk, myChanges, theirChanges);
	}

	function removal(hunk, mine, their, swap) {
	  var myChanges = collectChange(mine),
	      theirChanges = collectContext(their, myChanges);
	  if (theirChanges.merged) {
	    /*istanbul ignore start*/var _hunk$lines6;

	    /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines6 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines6 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/theirChanges.merged));
	  } else {
	    conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
	  }
	}

	function conflict(hunk, mine, their) {
	  hunk.conflict = true;
	  hunk.lines.push({
	    conflict: true,
	    mine: mine,
	    theirs: their
	  });
	}

	function insertLeading(hunk, insert, their) {
	  while (insert.offset < their.offset && insert.index < insert.lines.length) {
	    var line = insert.lines[insert.index++];
	    hunk.lines.push(line);
	    insert.offset++;
	  }
	}
	function insertTrailing(hunk, insert) {
	  while (insert.index < insert.lines.length) {
	    var line = insert.lines[insert.index++];
	    hunk.lines.push(line);
	  }
	}

	function collectChange(state) {
	  var ret = [],
	      operation = state.lines[state.index][0];
	  while (state.index < state.lines.length) {
	    var line = state.lines[state.index];

	    // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.
	    if (operation === '-' && line[0] === '+') {
	      operation = '+';
	    }

	    if (operation === line[0]) {
	      ret.push(line);
	      state.index++;
	    } else {
	      break;
	    }
	  }

	  return ret;
	}
	function collectContext(state, matchChanges) {
	  var changes = [],
	      merged = [],
	      matchIndex = 0,
	      contextChanges = false,
	      conflicted = false;
	  while (matchIndex < matchChanges.length && state.index < state.lines.length) {
	    var change = state.lines[state.index],
	        match = matchChanges[matchIndex];

	    // Once we've hit our add, then we are done
	    if (match[0] === '+') {
	      break;
	    }

	    contextChanges = contextChanges || change[0] !== ' ';

	    merged.push(match);
	    matchIndex++;

	    // Consume any additions in the other block as a conflict to attempt
	    // to pull in the remaining context after this
	    if (change[0] === '+') {
	      conflicted = true;

	      while (change[0] === '+') {
	        changes.push(change);
	        change = state.lines[++state.index];
	      }
	    }

	    if (match.substr(1) === change.substr(1)) {
	      changes.push(change);
	      state.index++;
	    } else {
	      conflicted = true;
	    }
	  }

	  if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
	    conflicted = true;
	  }

	  if (conflicted) {
	    return changes;
	  }

	  while (matchIndex < matchChanges.length) {
	    merged.push(matchChanges[matchIndex++]);
	  }

	  return {
	    merged: merged,
	    changes: changes
	  };
	}

	function allRemoves(changes) {
	  return changes.reduce(function (prev, change) {
	    return prev && change[0] === '-';
	  }, true);
	}
	function skipRemoveSuperset(state, removeChanges, delta) {
	  for (var i = 0; i < delta; i++) {
	    var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
	    if (state.lines[state.index + i] !== ' ' + changeContent) {
	      return false;
	    }
	  }

	  state.index += delta;
	  return true;
	}

	function calcOldNewLineCount(lines) {
	  var oldLines = 0;
	  var newLines = 0;

	  lines.forEach(function (line) {
	    if (typeof line !== 'string') {
	      var myCount = calcOldNewLineCount(line.mine);
	      var theirCount = calcOldNewLineCount(line.theirs);

	      if (oldLines !== undefined) {
	        if (myCount.oldLines === theirCount.oldLines) {
	          oldLines += myCount.oldLines;
	        } else {
	          oldLines = undefined;
	        }
	      }

	      if (newLines !== undefined) {
	        if (myCount.newLines === theirCount.newLines) {
	          newLines += myCount.newLines;
	        } else {
	          newLines = undefined;
	        }
	      }
	    } else {
	      if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
	        newLines++;
	      }
	      if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
	        oldLines++;
	      }
	    }
	  });

	  return { oldLines: oldLines, newLines: newLines };
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9tZXJnZS5qcyJdLCJuYW1lcyI6WyJjYWxjTGluZUNvdW50IiwibWVyZ2UiLCJodW5rIiwiY2FsY09sZE5ld0xpbmVDb3VudCIsImxpbmVzIiwib2xkTGluZXMiLCJuZXdMaW5lcyIsInVuZGVmaW5lZCIsIm1pbmUiLCJ0aGVpcnMiLCJiYXNlIiwibG9hZFBhdGNoIiwicmV0IiwiaW5kZXgiLCJuZXdGaWxlTmFtZSIsImZpbGVOYW1lQ2hhbmdlZCIsIm9sZEZpbGVOYW1lIiwib2xkSGVhZGVyIiwibmV3SGVhZGVyIiwic2VsZWN0RmllbGQiLCJodW5rcyIsIm1pbmVJbmRleCIsInRoZWlyc0luZGV4IiwibWluZU9mZnNldCIsInRoZWlyc09mZnNldCIsImxlbmd0aCIsIm1pbmVDdXJyZW50Iiwib2xkU3RhcnQiLCJJbmZpbml0eSIsInRoZWlyc0N1cnJlbnQiLCJodW5rQmVmb3JlIiwicHVzaCIsImNsb25lSHVuayIsIm1lcmdlZEh1bmsiLCJNYXRoIiwibWluIiwibmV3U3RhcnQiLCJtZXJnZUxpbmVzIiwicGFyYW0iLCJ0ZXN0IiwiRXJyb3IiLCJwYXRjaCIsImNvbmZsaWN0IiwiY2hlY2siLCJvZmZzZXQiLCJtaW5lTGluZXMiLCJ0aGVpck9mZnNldCIsInRoZWlyTGluZXMiLCJ0aGVpciIsImluc2VydExlYWRpbmciLCJ0aGVpckN1cnJlbnQiLCJtdXR1YWxDaGFuZ2UiLCJjb2xsZWN0Q2hhbmdlIiwicmVtb3ZhbCIsImluc2VydFRyYWlsaW5nIiwibXlDaGFuZ2VzIiwidGhlaXJDaGFuZ2VzIiwiYWxsUmVtb3ZlcyIsInNraXBSZW1vdmVTdXBlcnNldCIsInN3YXAiLCJjb2xsZWN0Q29udGV4dCIsIm1lcmdlZCIsImluc2VydCIsImxpbmUiLCJzdGF0ZSIsIm9wZXJhdGlvbiIsIm1hdGNoQ2hhbmdlcyIsImNoYW5nZXMiLCJtYXRjaEluZGV4IiwiY29udGV4dENoYW5nZXMiLCJjb25mbGljdGVkIiwiY2hhbmdlIiwibWF0Y2giLCJzdWJzdHIiLCJyZWR1Y2UiLCJwcmV2IiwicmVtb3ZlQ2hhbmdlcyIsImRlbHRhIiwiaSIsImNoYW5nZUNvbnRlbnQiLCJmb3JFYWNoIiwibXlDb3VudCIsInRoZWlyQ291bnQiXSwibWFwcGluZ3MiOiI7OztnQ0FLZ0JBLGEsR0FBQUEsYTt5REFnQkFDLEssR0FBQUEsSzs7QUFyQmhCOztBQUNBOztBQUVBOzs7O3VCQUVPLFNBQVNELGFBQVQsQ0FBdUJFLElBQXZCLEVBQTZCO0FBQUEsNkVBQ0xDLG9CQUFvQkQsS0FBS0UsS0FBekIsQ0FESztBQUFBLE1BQzNCQyxRQUQyQix3QkFDM0JBLFFBRDJCO0FBQUEsTUFDakJDLFFBRGlCLHdCQUNqQkEsUUFEaUI7O0FBR2xDLE1BQUlELGFBQWFFLFNBQWpCLEVBQTRCO0FBQzFCTCxTQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9ILEtBQUtHLFFBQVo7QUFDRDs7QUFFRCxNQUFJQyxhQUFhQyxTQUFqQixFQUE0QjtBQUMxQkwsU0FBS0ksUUFBTCxHQUFnQkEsUUFBaEI7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPSixLQUFLSSxRQUFaO0FBQ0Q7QUFDRjs7QUFFTSxTQUFTTCxLQUFULENBQWVPLElBQWYsRUFBcUJDLE1BQXJCLEVBQTZCQyxJQUE3QixFQUFtQztBQUN4Q0YsU0FBT0csVUFBVUgsSUFBVixFQUFnQkUsSUFBaEIsQ0FBUDtBQUNBRCxXQUFTRSxVQUFVRixNQUFWLEVBQWtCQyxJQUFsQixDQUFUOztBQUVBLE1BQUlFLE1BQU0sRUFBVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFJSixLQUFLSyxLQUFMLElBQWNKLE9BQU9JLEtBQXpCLEVBQWdDO0FBQzlCRCxRQUFJQyxLQUFKLEdBQVlMLEtBQUtLLEtBQUwsSUFBY0osT0FBT0ksS0FBakM7QUFDRDs7QUFFRCxNQUFJTCxLQUFLTSxXQUFMLElBQW9CTCxPQUFPSyxXQUEvQixFQUE0QztBQUMxQyxRQUFJLENBQUNDLGdCQUFnQlAsSUFBaEIsQ0FBTCxFQUE0QjtBQUMxQjtBQUNBSSxVQUFJSSxXQUFKLEdBQWtCUCxPQUFPTyxXQUFQLElBQXNCUixLQUFLUSxXQUE3QztBQUNBSixVQUFJRSxXQUFKLEdBQWtCTCxPQUFPSyxXQUFQLElBQXNCTixLQUFLTSxXQUE3QztBQUNBRixVQUFJSyxTQUFKLEdBQWdCUixPQUFPUSxTQUFQLElBQW9CVCxLQUFLUyxTQUF6QztBQUNBTCxVQUFJTSxTQUFKLEdBQWdCVCxPQUFPUyxTQUFQLElBQW9CVixLQUFLVSxTQUF6QztBQUNELEtBTkQsTUFNTyxJQUFJLENBQUNILGdCQUFnQk4sTUFBaEIsQ0FBTCxFQUE4QjtBQUNuQztBQUNBRyxVQUFJSSxXQUFKLEdBQWtCUixLQUFLUSxXQUF2QjtBQUNBSixVQUFJRSxXQUFKLEdBQWtCTixLQUFLTSxXQUF2QjtBQUNBRixVQUFJSyxTQUFKLEdBQWdCVCxLQUFLUyxTQUFyQjtBQUNBTCxVQUFJTSxTQUFKLEdBQWdCVixLQUFLVSxTQUFyQjtBQUNELEtBTk0sTUFNQTtBQUNMO0FBQ0FOLFVBQUlJLFdBQUosR0FBa0JHLFlBQVlQLEdBQVosRUFBaUJKLEtBQUtRLFdBQXRCLEVBQW1DUCxPQUFPTyxXQUExQyxDQUFsQjtBQUNBSixVQUFJRSxXQUFKLEdBQWtCSyxZQUFZUCxHQUFaLEVBQWlCSixLQUFLTSxXQUF0QixFQUFtQ0wsT0FBT0ssV0FBMUMsQ0FBbEI7QUFDQUYsVUFBSUssU0FBSixHQUFnQkUsWUFBWVAsR0FBWixFQUFpQkosS0FBS1MsU0FBdEIsRUFBaUNSLE9BQU9RLFNBQXhDLENBQWhCO0FBQ0FMLFVBQUlNLFNBQUosR0FBZ0JDLFlBQVlQLEdBQVosRUFBaUJKLEtBQUtVLFNBQXRCLEVBQWlDVCxPQUFPUyxTQUF4QyxDQUFoQjtBQUNEO0FBQ0Y7O0FBRUROLE1BQUlRLEtBQUosR0FBWSxFQUFaOztBQUVBLE1BQUlDLFlBQVksQ0FBaEI7QUFBQSxNQUNJQyxjQUFjLENBRGxCO0FBQUEsTUFFSUMsYUFBYSxDQUZqQjtBQUFBLE1BR0lDLGVBQWUsQ0FIbkI7O0FBS0EsU0FBT0gsWUFBWWIsS0FBS1ksS0FBTCxDQUFXSyxNQUF2QixJQUFpQ0gsY0FBY2IsT0FBT1csS0FBUCxDQUFhSyxNQUFuRSxFQUEyRTtBQUN6RSxRQUFJQyxjQUFjbEIsS0FBS1ksS0FBTCxDQUFXQyxTQUFYLEtBQXlCLEVBQUNNLFVBQVVDLFFBQVgsRUFBM0M7QUFBQSxRQUNJQyxnQkFBZ0JwQixPQUFPVyxLQUFQLENBQWFFLFdBQWIsS0FBNkIsRUFBQ0ssVUFBVUMsUUFBWCxFQURqRDs7QUFHQSxRQUFJRSxXQUFXSixXQUFYLEVBQXdCRyxhQUF4QixDQUFKLEVBQTRDO0FBQzFDO0FBQ0FqQixVQUFJUSxLQUFKLENBQVVXLElBQVYsQ0FBZUMsVUFBVU4sV0FBVixFQUF1QkgsVUFBdkIsQ0FBZjtBQUNBRjtBQUNBRyxzQkFBZ0JFLFlBQVlwQixRQUFaLEdBQXVCb0IsWUFBWXJCLFFBQW5EO0FBQ0QsS0FMRCxNQUtPLElBQUl5QixXQUFXRCxhQUFYLEVBQTBCSCxXQUExQixDQUFKLEVBQTRDO0FBQ2pEO0FBQ0FkLFVBQUlRLEtBQUosQ0FBVVcsSUFBVixDQUFlQyxVQUFVSCxhQUFWLEVBQXlCTCxZQUF6QixDQUFmO0FBQ0FGO0FBQ0FDLG9CQUFjTSxjQUFjdkIsUUFBZCxHQUF5QnVCLGNBQWN4QixRQUFyRDtBQUNELEtBTE0sTUFLQTtBQUNMO0FBQ0EsVUFBSTRCLGFBQWE7QUFDZk4sa0JBQVVPLEtBQUtDLEdBQUwsQ0FBU1QsWUFBWUMsUUFBckIsRUFBK0JFLGNBQWNGLFFBQTdDLENBREs7QUFFZnRCLGtCQUFVLENBRks7QUFHZitCLGtCQUFVRixLQUFLQyxHQUFMLENBQVNULFlBQVlVLFFBQVosR0FBdUJiLFVBQWhDLEVBQTRDTSxjQUFjRixRQUFkLEdBQXlCSCxZQUFyRSxDQUhLO0FBSWZsQixrQkFBVSxDQUpLO0FBS2ZGLGVBQU87QUFMUSxPQUFqQjtBQU9BaUMsaUJBQVdKLFVBQVgsRUFBdUJQLFlBQVlDLFFBQW5DLEVBQTZDRCxZQUFZdEIsS0FBekQsRUFBZ0V5QixjQUFjRixRQUE5RSxFQUF3RkUsY0FBY3pCLEtBQXRHO0FBQ0FrQjtBQUNBRDs7QUFFQVQsVUFBSVEsS0FBSixDQUFVVyxJQUFWLENBQWVFLFVBQWY7QUFDRDtBQUNGOztBQUVELFNBQU9yQixHQUFQO0FBQ0Q7O0FBRUQsU0FBU0QsU0FBVCxDQUFtQjJCLEtBQW5CLEVBQTBCNUIsSUFBMUIsRUFBZ0M7QUFDOUIsTUFBSSxPQUFPNEIsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixRQUFJLE9BQU9DLElBQVAsQ0FBWUQsS0FBWixLQUF1QixXQUFXQyxJQUFYLENBQWdCRCxLQUFoQixDQUEzQixFQUFvRDtBQUNsRCxhQUFPLHlFQUFXQSxLQUFYLEVBQWtCLENBQWxCO0FBQVA7QUFDRDs7QUFFRCxRQUFJLENBQUM1QixJQUFMLEVBQVc7QUFDVCxZQUFNLElBQUk4QixLQUFKLENBQVUsa0RBQVYsQ0FBTjtBQUNEO0FBQ0QsV0FBTywrRUFBZ0JqQyxTQUFoQixFQUEyQkEsU0FBM0IsRUFBc0NHLElBQXRDLEVBQTRDNEIsS0FBNUM7QUFBUDtBQUNEOztBQUVELFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxTQUFTdkIsZUFBVCxDQUF5QjBCLEtBQXpCLEVBQWdDO0FBQzlCLFNBQU9BLE1BQU0zQixXQUFOLElBQXFCMkIsTUFBTTNCLFdBQU4sS0FBc0IyQixNQUFNekIsV0FBeEQ7QUFDRDs7QUFFRCxTQUFTRyxXQUFULENBQXFCTixLQUFyQixFQUE0QkwsSUFBNUIsRUFBa0NDLE1BQWxDLEVBQTBDO0FBQ3hDLE1BQUlELFNBQVNDLE1BQWIsRUFBcUI7QUFDbkIsV0FBT0QsSUFBUDtBQUNELEdBRkQsTUFFTztBQUNMSyxVQUFNNkIsUUFBTixHQUFpQixJQUFqQjtBQUNBLFdBQU8sRUFBQ2xDLFVBQUQsRUFBT0MsY0FBUCxFQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTcUIsVUFBVCxDQUFvQlMsSUFBcEIsRUFBMEJJLEtBQTFCLEVBQWlDO0FBQy9CLFNBQU9KLEtBQUtaLFFBQUwsR0FBZ0JnQixNQUFNaEIsUUFBdEIsSUFDRFksS0FBS1osUUFBTCxHQUFnQlksS0FBS2xDLFFBQXRCLEdBQWtDc0MsTUFBTWhCLFFBRDdDO0FBRUQ7O0FBRUQsU0FBU0ssU0FBVCxDQUFtQjlCLElBQW5CLEVBQXlCMEMsTUFBekIsRUFBaUM7QUFDL0IsU0FBTztBQUNMakIsY0FBVXpCLEtBQUt5QixRQURWLEVBQ29CdEIsVUFBVUgsS0FBS0csUUFEbkM7QUFFTCtCLGNBQVVsQyxLQUFLa0MsUUFBTCxHQUFnQlEsTUFGckIsRUFFNkJ0QyxVQUFVSixLQUFLSSxRQUY1QztBQU`��     `��                     ��              :�     ȏ�             ���      @      ���             FBc0NzQixTQUF0QyxFQUFpREMsV0FBakQsRUFBOERDLFVBQTlELEVBQTBFO0FBQ3hFO0FBQ0E7QUFDQSxNQUFJdkMsT0FBTyxFQUFDb0MsUUFBUXJCLFVBQVQsRUFBcUJuQixPQUFPeUMsU0FBNUIsRUFBdUNoQyxPQUFPLENBQTlDLEVBQVg7QUFBQSxNQUNJbUMsUUFBUSxFQUFDSixRQUFRRSxXQUFULEVBQXNCMUMsT0FBTzJDLFVBQTdCLEVBQXlDbEMsT0FBTyxDQUFoRCxFQURaOztBQUdBO0FBQ0FvQyxnQkFBYy9DLElBQWQsRUFBb0JNLElBQXBCLEVBQTBCd0MsS0FBMUI7QUFDQUMsZ0JBQWMvQyxJQUFkLEVBQW9COEMsS0FBcEIsRUFBMkJ4QyxJQUEzQjs7QUFFQTtBQUNBLFNBQU9BLEtBQUtLLEtBQUwsR0FBYUwsS0FBS0osS0FBTCxDQUFXcUIsTUFBeEIsSUFBa0N1QixNQUFNbkMsS0FBTixHQUFjbUMsTUFBTTVDLEtBQU4sQ0FBWXFCLE1BQW5FLEVBQTJFO0FBQ3pFLFFBQUlDLGNBQWNsQixLQUFLSixLQUFMLENBQVdJLEtBQUtLLEtBQWhCLENBQWxCO0FBQUEsUUFDSXFDLGVBQWVGLE1BQU01QyxLQUFOLENBQVk0QyxNQUFNbkMsS0FBbEIsQ0FEbkI7O0FBR0EsUUFBSSxDQUFDYSxZQUFZLENBQVosTUFBbUIsR0FBbkIsSUFBMEJBLFlBQVksQ0FBWixNQUFtQixHQUE5QyxNQUNJd0IsYUFBYSxDQUFiLE1BQW9CLEdBQXBCLElBQTJCQSxhQUFhLENBQWIsTUFBb0IsR0FEbkQsQ0FBSixFQUM2RDtBQUMzRDtBQUNBQyxtQkFBYWpELElBQWIsRUFBbUJNLElBQW5CLEVBQXlCd0MsS0FBekI7QUFDRCxLQUpELE1BSU8sSUFBSXRCLFlBQVksQ0FBWixNQUFtQixHQUFuQixJQUEwQndCLGFBQWEsQ0FBYixNQUFvQixHQUFsRCxFQUF1RDtBQUFBOztBQUFBLDhCQUM1RDtBQUNBLDBFQUFLOUMsS0FBTCxFQUFXMkIsSUFBWCw0TEFBb0JxQixjQUFjNUMsSUFBZCxDQUFwQjtBQUNELEtBSE0sTUFHQSxJQUFJMEMsYUFBYSxDQUFiLE1BQW9CLEdBQXBCLElBQTJCeEIsWUFBWSxDQUFaLE1BQW1CLEdBQWxELEVBQXVEO0FBQUE7O0FBQUEsOEJBQzVEO0FBQ0EsMkVBQUt0QixLQUFMLEVBQVcyQixJQUFYLDZMQUFvQnFCLGNBQWNKLEtBQWQsQ0FBcEI7QUFDRCxLQUhNLE1BR0EsSUFBSXRCLFlBQVksQ0FBWixNQUFtQixHQUFuQixJQUEwQndCLGFBQWEsQ0FBYixNQUFvQixHQUFsRCxFQUF1RDtBQUM1RDtBQUNBRyxjQUFRbkQsSUFBUixFQUFjTSxJQUFkLEVBQW9Cd0MsS0FBcEI7QUFDRCxLQUhNLE1BR0EsSUFBSUUsYUFBYSxDQUFiLE1BQW9CLEdBQXBCLElBQTJCeEIsWUFBWSxDQUFaLE1BQW1CLEdBQWxELEVBQXVEO0FBQzVEO0FBQ0EyQixjQUFRbkQsSUFBUixFQUFjOEMsS0FBZCxFQUFxQnhDLElBQXJCLEVBQTJCLElBQTNCO0FBQ0QsS0FITSxNQUdBLElBQUlrQixnQkFBZ0J3QixZQUFwQixFQUFrQztBQUN2QztBQUNBaEQsV0FBS0UsS0FBTCxDQUFXMkIsSUFBWCxDQUFnQkwsV0FBaEI7QUFDQWxCLFdBQUtLLEtBQUw7QUFDQW1DLFlBQU1uQyxLQUFOO0FBQ0QsS0FMTSxNQUtBO0FBQ0w7QUFDQTZCLGVBQVN4QyxJQUFULEVBQWVrRCxjQUFjNUMsSUFBZCxDQUFmLEVBQW9DNEMsY0FBY0osS0FBZCxDQUFwQztBQUNEO0FBQ0Y7O0FBRUQ7QUFDQU0saUJBQWVwRCxJQUFmLEVBQXFCTSxJQUFyQjtBQUNBOEMsaUJBQWVwRCxJQUFmLEVBQXFCOEMsS0FBckI7O0FBRUFoRCxnQkFBY0UsSUFBZDtBQUNEOztBQUVELFNBQVNpRCxZQUFULENBQXNCakQsSUFBdEIsRUFBNEJNLElBQTVCLEVBQWtDd0MsS0FBbEMsRUFBeUM7QUFDdkMsTUFBSU8sWUFBWUgsY0FBYzVDLElBQWQsQ0FBaEI7QUFBQSxNQUNJZ0QsZUFBZUosY0FBY0osS0FBZCxDQURuQjs7QUFHQSxNQUFJUyxXQUFXRixTQUFYLEtBQXlCRSxXQUFXRCxZQUFYLENBQTdCLEVBQXVEO0FBQ3JEO0FBQ0EsUUFBSSw4RUFBZ0JELFNBQWhCLEVBQTJCQyxZQUEzQixLQUNHRSxtQkFBbUJWLEtBQW5CLEVBQTBCTyxTQUExQixFQUFxQ0EsVUFBVTlCLE1BQVYsR0FBbUIrQixhQUFhL0IsTUFBckUsQ0FEUCxFQUNxRjtBQUFBOztBQUFBLDZCQUNuRixzRUFBS3JCLEtBQUwsRUFBVzJCLElBQVgsNkxBQW9Cd0IsU0FBcEI7QUFDQTtBQUNELEtBSkQsTUFJTyxJQUFJLDhFQUFnQkMsWUFBaEIsRUFBOEJELFNBQTlCLEtBQ0pHLG1CQUFtQmxELElBQW5CLEVBQXlCZ0QsWUFBekIsRUFBdUNBLGFBQWEvQixNQUFiLEdBQXNCOEIsVUFBVTlCLE1BQXZFLENBREEsRUFDZ0Y7QUFBQTs7QUFBQSw2QkFDckYsc0VBQUtyQixLQUFMLEVBQVcyQixJQUFYLDZMQUFvQnlCLFlBQXBCO0FBQ0E7QUFDRDtBQUNGLEdBWEQsTUFXTyxJQUFJLHlFQUFXRCxTQUFYLEVBQXNCQyxZQUF0QixDQUFKLEVBQXlDO0FBQUE7O0FBQUEsMkJBQzlDLHNFQUFLcEQsS0FBTCxFQUFXMkIsSUFBWCw2TEFBb0J3QixTQUFwQjtBQUNBO0FBQ0Q7O0FBRURiLFdBQVN4QyxJQUFULEVBQWVxRCxTQUFmLEVBQTBCQyxZQUExQjtBQUNEOztBQUVELFNBQVNILE9BQVQsQ0FBaUJuRCxJQUFqQixFQUF1Qk0sSUFBdkIsRUFBNkJ3QyxLQUE3QixFQUFvQ1csSUFBcEMsRUFBMEM7QUFDeEMsTUFBSUosWUFBWUgsY0FBYzVDLElBQWQsQ0FBaEI7QUFBQSxNQUNJZ0QsZUFBZUksZUFBZVosS0FBZixFQUFzQk8sU0FBdEIsQ0FEbkI7QUFFQSxNQUFJQyxhQUFhSyxNQUFqQixFQUF5QjtBQUFBOztBQUFBLDJCQUN2QixzRUFBS3pELEtBQUwsRUFBVzJCLElBQVgsNkxBQW9CeUIsYUFBYUssTUFBakM7QUFDRCxHQUZELE1BRU87QUFDTG5CLGFBQVN4QyxJQUFULEVBQWV5RCxPQUFPSCxZQUFQLEdBQXNCRCxTQUFyQyxFQUFnREksT0FBT0osU0FBUCxHQUFtQkMsWUFBbkU7QUFDRDtBQUNGOztBQUVELFNBQVNkLFFBQVQsQ0FBa0J4QyxJQUFsQixFQUF3Qk0sSUFBeEIsRUFBOEJ3QyxLQUE5QixFQUFxQztBQUNuQzlDLE9BQUt3QyxRQUFMLEdBQWdCLElBQWhCO0FBQ0F4QyxPQUFLRSxLQUFMLENBQVcyQixJQUFYLENBQWdCO0FBQ2RXLGNBQVUsSUFESTtBQUVkbEMsVUFBTUEsSUFGUTtBQUdkQyxZQUFRdUM7QUFITSxHQUFoQjtBQUtEOztBQUVELFNBQVNDLGFBQVQsQ0FBdUIvQyxJQUF2QixFQUE2QjRELE1BQTdCLEVBQXFDZCxLQUFyQyxFQUE0QztBQUMxQyxTQUFPYyxPQUFPbEIsTUFBUCxHQUFnQkksTUFBTUosTUFBdEIsSUFBZ0NrQixPQUFPakQsS0FBUCxHQUFlaUQsT0FBTzFELEtBQVAsQ0FBYXFCLE1BQW5FLEVBQTJFO0FBQ3pFLFFBQUlzQyxPQUFPRCxPQUFPMUQsS0FBUCxDQUFhMEQsT0FBT2pELEtBQVAsRUFBYixDQUFYO0FBQ0FYLFNBQUtFLEtBQUwsQ0FBVzJCLElBQVgsQ0FBZ0JnQyxJQUFoQjtBQUNBRCxXQUFPbEIsTUFBUDtBQUNEO0FBQ0Y7QUFDRCxTQUFTVSxjQUFULENBQXdCcEQsSUFBeEIsRUFBOEI0RCxNQUE5QixFQUFzQztBQUNwQyxTQUFPQSxPQUFPakQsS0FBUCxHQUFlaUQsT0FBTzFELEtBQVAsQ0FBYXFCLE1BQW5DLEVBQTJDO0FBQ3pDLFFBQUlzQyxPQUFPRCxPQUFPMUQsS0FBUCxDQUFhMEQsT0FBT2pELEtBQVAsRUFBYixDQUFYO0FBQ0FYLFNBQUtFLEtBQUwsQ0FBVzJCLElBQVgsQ0FBZ0JnQyxJQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1gsYUFBVCxDQUF1QlksS0FBdkIsRUFBOEI7QUFDNUIsTUFBSXBELE1BQU0sRUFBVjtBQUFBLE1BQ0lxRCxZQUFZRCxNQUFNNUQsS0FBTixDQUFZNEQsTUFBTW5ELEtBQWxCLEVBQXlCLENBQXpCLENBRGhCO0FBRUEsU0FBT21ELE1BQU1uRCxLQUFOLEdBQWNtRCxNQUFNNUQsS0FBTixDQUFZcUIsTUFBakMsRUFBeUM7QUFDdkMsUUFBSXNDLE9BQU9DLE1BQU01RCxLQUFOLENBQVk0RCxNQUFNbkQsS0FBbEIsQ0FBWDs7QUFFQTtBQUNBLFFBQUlvRCxjQUFjLEdBQWQsSUFBcUJGLEtBQUssQ0FBTCxNQUFZLEdBQXJDLEVBQTBDO0FBQ3hDRSxrQkFBWSxHQUFaO0FBQ0Q7O0FBRUQsUUFBSUEsY0FBY0YsS0FBSyxDQUFMLENBQWxCLEVBQTJCO0FBQ3pCbkQsVUFBSW1CLElBQUosQ0FBU2dDLElBQVQ7QUFDQUMsWUFBTW5ELEtBQU47QUFDRCxLQUhELE1BR087QUFDTDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0QsR0FBUDtBQUNEO0FBQ0QsU0FBU2dELGNBQVQsQ0FBd0JJLEtBQXhCLEVBQStCRSxZQUEvQixFQUE2QztBQUMzQyxNQUFJQyxVQUFVLEVBQWQ7QUFBQSxNQUNJTixTQUFTLEVBRGI7QUFBQSxNQUVJTyxhQUFhLENBRmpCO0FBQUEsTUFHSUMsaUJBQWlCLEtBSHJCO0FBQUEsTUFJSUMsYUFBYSxLQUpqQjtBQUtBLFNBQU9GLGFBQWFGLGFBQWF6QyxNQUExQixJQUNFdUMsTUFBTW5ELEtBQU4sR0FBY21ELE1BQU01RCxLQUFOLENBQVlxQixNQURuQyxFQUMyQztBQUN6QyxRQUFJOEMsU0FBU1AsTUFBTTVELEtBQU4sQ0FBWTRELE1BQU1uRCxLQUFsQixDQUFiO0FBQUEsUUFDSTJELFFBQVFOLGFBQWFFLFVBQWIsQ0FEWjs7QUFHQTtBQUNBLFFBQUlJLE1BQU0sQ0FBTixNQUFhLEdBQWpCLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBRURILHFCQUFpQkEsa0JBQWtCRSxPQUFPLENBQVAsTUFBYyxHQUFqRDs7QUFFQVYsV0FBTzlCLElBQVAsQ0FBWXlDLEtBQVo7QUFDQUo7O0FBRUE7QUFDQTtBQUNBLFFBQUlHLE9BQU8sQ0FBUCxNQUFjLEdBQWxCLEVBQXVCO0FBQ3JCRCxtQkFBYSxJQUFiOztBQUVBLGFBQU9DLE9BQU8sQ0FBUCxNQUFjLEdBQXJCLEVBQTBCO0FBQ3hCSixnQkFBUXBDLElBQVIsQ0FBYXdDLE1BQWI7QUFDQUEsaUJBQVNQLE1BQU01RCxLQUFOLENBQVksRUFBRTRELE1BQU1uRCxLQUFwQixDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJMkQsTUFBTUMsTUFBTixDQUFhLENBQWIsTUFBb0JGLE9BQU9FLE1BQVAsQ0FBYyxDQUFkLENBQXhCLEVBQTBDO0FBQ3hDTixjQUFRcEMsSUFBUixDQUFhd0MsTUFBYjtBQUNBUCxZQUFNbkQsS0FBTjtBQUNELEtBSEQsTUFHTztBQUNMeUQsbUJBQWEsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSSxDQUFDSixhQUFhRSxVQUFiLEtBQTRCLEVBQTdCLEVBQWlDLENBQWpDLE1BQXdDLEdBQXhDLElBQ0dDLGNBRFAsRUFDdUI7QUFDckJDLGlCQUFhLElBQWI7QUFDRDs7QUFFRCxNQUFJQSxVQUFKLEVBQWdCO0FBQ2QsV0FBT0gsT0FBUDtBQUNEOztBQUVELFNBQU9DLGFBQWFGLGFBQWF6QyxNQUFqQyxFQUF5QztBQUN2Q29DLFdBQU85QixJQUFQLENBQVltQyxhQUFhRSxZQUFiLENBQVo7QUFDRDs7QUFFRCxTQUFPO0FBQ0xQLGtCQURLO0FBRUxNO0FBRkssR0FBUDtBQUlEOztBQUVELFNBQVNWLFVBQVQsQ0FBb0JVLE9BQXBCLEVBQTZCO0FBQzNCLFNBQU9BLFFBQVFPLE1BQVIsQ0FBZSxVQUFTQyxJQUFULEVBQWVKLE1BQWYsRUFBdUI7QUFDM0MsV0FBT0ksUUFBUUosT0FBTyxDQUFQLE1BQWMsR0FBN0I7QUFDRCxHQUZNLEVBRUosSUFGSSxDQUFQO0FBR0Q7QUFDRCxTQUFTYixrQkFBVCxDQUE0Qk0sS0FBNUIsRUFBbUNZLGFBQW5DLEVBQWtEQyxLQUFsRCxFQUF5RDtBQUN2RCxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsS0FBcEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzlCLFFBQUlDLGdCQUFnQkgsY0FBY0EsY0FBY25ELE1BQWQsR0FBdUJvRCxLQUF2QixHQUErQkMsQ0FBN0MsRUFBZ0RMLE1BQWhELENBQXVELENBQXZELENBQXBCO0FBQ0EsUUFBSVQsTUFBTTVELEtBQU4sQ0FBWTRELE1BQU1uRCxLQUFOLEdBQWNpRSxDQUExQixNQUFpQyxNQUFNQyxhQUEzQyxFQUEwRDtBQUN4RCxhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVEZixRQUFNbkQsS0FBTixJQUFlZ0UsS0FBZjtBQUNBLFNBQU8sSUFBUDtBQUNEOztBQUVELFNBQVMxRSxtQkFBVCxDQUE2QkMsS0FBN0IsRUFBb0M7QUFDbEMsTUFBSUMsV0FBVyxDQUFmO0FBQ0EsTUFBSUMsV0FBVyxDQUFmOztBQUVBRixRQUFNNEUsT0FBTixDQUFjLFVBQVNqQixJQUFULEVBQWU7QUFDM0IsUUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLFVBQUlrQixVQUFVOUUsb0JBQW9CNEQsS0FBS3ZELElBQXpCLENBQWQ7QUFDQSxVQUFJMEUsYUFBYS9FLG9CQUFvQjRELEtBQUt0RCxNQUF6QixDQUFqQjs7QUFFQSxVQUFJSixhQUFhRSxTQUFqQixFQUE0QjtBQUMxQixZQUFJMEUsUUFBUTVFLFFBQVIsS0FBcUI2RSxXQUFXN0UsUUFBcEMsRUFBOEM7QUFDNUNBLHNCQUFZNEUsUUFBUTVFLFFBQXBCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xBLHFCQUFXRSxTQUFYO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJRCxhQUFhQyxTQUFqQixFQUE0QjtBQUMxQixZQUFJMEUsUUFBUTNFLFFBQVIsS0FBcUI0RSxXQUFXNUUsUUFBcEMsRUFBOEM7QUFDNUNBLHNCQUFZMkUsUUFBUTNFLFFBQXBCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xBLHFCQUFXQyxTQUFYO0FBQ0Q7QUFDRjtBQUNGLEtBbkJELE1BbUJPO0FBQ0wsVUFBSUQsYUFBYUMsU0FBYixLQUEyQndELEtBQUssQ0FBTCxNQUFZLEdBQVosSUFBbUJBLEtBQUssQ0FBTCxNQUFZLEdBQTFELENBQUosRUFBb0U7QUFDbEV6RDtBQUNEO0FBQ0QsVUFBSUQsYUFBYUUsU0FBYixLQUEyQndELEtBQUssQ0FBTCxNQUFZLEdBQVosSUFBbUJBLEtBQUssQ0FBTCxNQUFZLEdBQTFELENBQUosRUFBb0U7QUFDbEUxRDtBQUNEO0FBQ0Y7QUFDRixHQTVCRDs7QUE4QkEsU0FBTyxFQUFDQSxrQkFBRCxFQUFXQyxrQkFBWCxFQUFQO0FBQ0QiLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3N0cnVjdHVyZWRQYXRjaH0gZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IHtwYXJzZVBhdGNofSBmcm9tICcuL3BhcnNlJztcblxuaW1wb3J0IHthcnJheUVxdWFsLCBhcnJheVN0YXJ0c1dpdGh9IGZyb20gJy4uL3V0aWwvYXJyYXknO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY0xpbmVDb3VudChodW5rKSB7XG4gIGNvbnN0IHtvbGRMaW5lcywgbmV3TGluZXN9ID0gY2FsY09sZE5ld0xpbmVDb3VudChodW5rLmxpbmVzKTtcblxuICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGh1bmsub2xkTGluZXMgPSBvbGRMaW5lcztcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgaHVuay5vbGRMaW5lcztcbiAgfVxuXG4gIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaHVuay5uZXdMaW5lcyA9IG5ld0xpbmVzO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSBodW5rLm5ld0xpbmVzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShtaW5lLCB0aGVpcnMsIGJhc2UpIHtcbiAgbWluZSA9IGxvYWRQYXRjaChtaW5lLCBiYXNlKTtcbiAgdGhlaXJzID0gbG9hZFBhdGNoKHRoZWlycywgYmFzZSk7XG5cbiAgbGV0IHJldCA9IHt9O1xuXG4gIC8vIEZvciBpbmRleCB3ZSBqdXN0IGxldCBpdCBwYXNzIHRocm91Z2ggYXMgaXQgZG9lc24ndCBoYXZlIGFueSBuZWNlc3NhcnkgbWVhbmluZy5cbiAgLy8gTGVhdmluZyBzYW5pdHkgY2hlY2tzIG9uIHRoaXMgdG8gdGhlIEFQSSBjb25zdW1lciB0aGF0IG1heSBrbm93IG1vcmUgYWJvdXQgdGhlXG4gIC8vIG1lYW5pbmcgaW4gdGhlaXIgb3duIGNvbnRleHQuXG4gIGlmIChtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleCkge1xuICAgIHJldC5pbmRleCA9IG1pbmUuaW5kZXggfHwgdGhlaXJzLmluZGV4O1xuICB9XG5cbiAgaWYgKG1pbmUubmV3RmlsZU5hbWUgfHwgdGhlaXJzLm5ld0ZpbGVOYW1lKSB7XG4gICAgaWYgKCFmaWxlTmFtZUNoYW5nZWQobWluZSkpIHtcbiAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gb3VycywgdXNlIHRoZWlycyAoYW5kIG91cnMgaWYgdGhlaXJzIGRvZXMgbm90IGV4aXN0KVxuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gdGhlaXJzLm9sZEZpbGVOYW1lIHx8IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSB0aGVpcnMubmV3RmlsZU5hbWUgfHwgbWluZS5uZXdGaWxlTmFtZTtcbiAgICAgIHJldC5vbGRIZWFkZXIgPSB0aGVpcnMub2xkSGVhZGVyIHx8IG1pbmUub2xkSGVhZGVyO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IHRoZWlycy5uZXdIZWFkZXIgfHwgbWluZS5uZXdIZWFkZXI7XG4gICAgfSBlbHNlIGlmICghZmlsZU5hbWVDaGFuZ2VkKHRoZWlycykpIHtcbiAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gdGhlaXJzLCB1c2Ugb3Vyc1xuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gbWluZS5vbGRGaWxlTmFtZTtcbiAgICAgIHJldC5uZXdGaWxlTmFtZSA9IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICByZXQub2xkSGVhZGVyID0gbWluZS5vbGRIZWFkZXI7XG4gICAgICByZXQubmV3SGVhZGVyID0gbWluZS5uZXdIZWFkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJvdGggY2hhbmdlZC4uLiBmaWd1cmUgaXQgb3V0XG4gICAgICByZXQub2xkRmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUub2xkRmlsZU5hbWUsIHRoZWlycy5vbGRGaWxlTmFtZSk7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUubmV3RmlsZU5hbWUsIHRoZWlycy5uZXdGaWxlTmFtZSk7XG4gICAgICByZXQub2xkSGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEhlYWRlciwgdGhlaXJzLm9sZEhlYWRlcik7XG4gICAgICByZXQubmV3SGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0hlYWRlciwgdGhlaXJzLm5ld0hlYWRlcik7XG4gICAgfVxuICB9XG5cbiAgcmV0Lmh1bmtzID0gW107XG5cbiAgbGV0IG1pbmVJbmRleCA9IDAsXG4gICAgICB0aGVpcnNJbmRleCA9IDAsXG4gICAgICBtaW5lT2Zmc2V0ID0gMCxcbiAgICAgIHRoZWlyc09mZnNldCA9IDA7XG5cbiAgd2hpbGUgKG1pbmVJbmRleCA8IG1pbmUuaHVua3MubGVuZ3RoIHx8IHRoZWlyc0luZGV4IDwgdGhlaXJzLmh1bmtzLmxlbmd0aCkge1xuICAgIGxldCBtaW5lQ3VycmVudCA9IG1pbmUuaHVua3NbbWluZUluZGV4XSB8fCB7b2xkU3RhcnQ6IEluZmluaXR5fSxcbiAgICAgICAgdGhlaXJzQ3VycmVudCA9IHRoZWlycy5odW5rc1t0aGVpcnNJbmRleF0gfHwge29sZFN0YXJ0OiBJbmZpbml0eX07XG5cbiAgICBpZiAoaHVua0JlZm9yZShtaW5lQ3VycmVudCwgdGhlaXJzQ3VycmVudCkpIHtcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsobWluZUN1cnJlbnQsIG1pbmVPZmZzZXQpKTtcbiAgICAgIG1pbmVJbmRleCsrO1xuICAgICAgdGhlaXJzT2Zmc2V0ICs9IG1pbmVDdXJyZW50Lm5ld0xpbmVzIC0gbWluZUN1cnJlbnQub2xkTGluZXM7XG4gICAgfSBlbHNlIGlmIChodW5rQmVmb3JlKHRoZWlyc0N1cnJlbnQsIG1pbmVDdXJyZW50KSkge1xuICAgICAgLy8gVGhpcyBwYXRjaCBkb2VzIG5vdCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBvdGhlcnMsIHlheS5cbiAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayh0aGVpcnNDdXJyZW50LCB0aGVpcnNPZmZzZXQpKTtcbiAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICBtaW5lT2Zmc2V0ICs9IHRoZWlyc0N1cnJlbnQubmV3TGluZXMgLSB0aGVpcnNDdXJyZW50Lm9sZExpbmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdmVybGFwLCBtZXJnZSBhcyBiZXN0IHdlIGNhblxuICAgICAgbGV0IG1lcmdlZEh1bmsgPSB7XG4gICAgICAgIG9sZFN0YXJ0OiBNYXRoLm1pbihtaW5lQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCksXG4gICAgICAgIG9sZExpbmVzOiAwLFxuICAgICAgICBuZXdTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQubmV3U3RhcnQgKyBtaW5lT2Zmc2V0LCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0ICsgdGhlaXJzT2Zmc2V0KSxcbiAgICAgICAgbmV3TGluZXM6IDAsXG4gICAgICAgIGxpbmVzOiBbXVxuICAgICAgfTtcbiAgICAgIG1lcmdlTGluZXMobWVyZ2VkSHVuaywgbWluZUN1cnJlbnQub2xkU3RhcnQsIG1pbmVDdXJyZW50LmxpbmVzLCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0LCB0aGVpcnNDdXJyZW50LmxpbmVzKTtcbiAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICBtaW5lSW5kZXgrKztcblxuICAgICAgcmV0Lmh1bmtzLnB1c2gobWVyZ2VkSHVuayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbG9hZFBhdGNoKHBhcmFtLCBiYXNlKSB7XG4gIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKC9eQEAvbS50ZXN0KHBhcmFtKSB8fCAoL15JbmRleDovbS50ZXN0KHBhcmFtKSkpIHtcbiAgICAgIHJldHVybiBwYXJzZVBhdGNoKHBhcmFtKVswXTtcbiAgICB9XG5cbiAgICBpZiAoIWJhc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGEgYmFzZSByZWZlcmVuY2Ugb3IgcGFzcyBpbiBhIHBhdGNoJyk7XG4gICAgfVxuICAgIHJldHVybiBzdHJ1Y3R1cmVkUGF0Y2godW5kZWZpbmVkLCB1bmRlZmluZWQsIGJhc2UsIHBhcmFtKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbTtcbn1cblxuZnVuY3Rpb24gZmlsZU5hbWVDaGFuZ2VkKHBhdGNoKSB7XG4gIHJldHVybiBwYXRjaC5uZXdGaWxlTmFtZSAmJiBwYXRjaC5uZXdGaWxlTmFtZSAhPT0gcGF0Y2gub2xkRmlsZU5hbWU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEZpZWxkKGluZGV4LCBtaW5lLCB0aGVpcnMpIHtcbiAgaWYgKG1pbmUgPT09IHRoZWlycykge1xuICAgIHJldHVybiBtaW5lO1xuICB9IGVsc2Uge1xuICAgIGluZGV4LmNvbmZsaWN0ID0gdHJ1ZTtcbiAgICByZXR1cm4ge21pbmUsIHRoZWlyc307XG4gIH1cbn1cblxuZnVuY3Rpb24gaHVua0JlZm9yZSh0ZXN0LCBjaGVjaykge1xuICByZXR1cm4gdGVzdC5vbGRTdGFydCA8IGNoZWNrLm9sZFN0YXJ0XG4gICAgJiYgKHRlc3Qub2xkU3RhcnQgKyB0ZXN0Lm9sZExpbmVzKSA8IGNoZWNrLm9sZFN0YXJ0O1xufVxuXG5mdW5jdGlvbiBjbG9uZUh1bmsoaHVuaywgb2Zmc2V0KSB7XG4gIHJldHVybiB7XG4gICAgb2xkU3RhcnQ6IGh1bmsub2xkU3RhcnQsIG9sZExpbmVzOiBodW5rLm9sZExpbmVzLFxuICAgIG5ld1N0YXJ0OiBodW5rLm5ld1N0YXJ0ICsgb2Zmc2V0LCBuZXdMaW5lczogaHVuay5uZXdMaW5lcyxcbiAgICBsaW5lczogaHVuay5saW5lc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZUxpbmVzKGh1bmssIG1pbmVPZmZzZXQsIG1pbmVMaW5lcywgdGhlaXJPZmZzZXQsIHRoZWlyTGluZXMpIHtcbiAgLy8gVGhpcyB3aWxsIGdlbmVyYWxseSByZXN1bHQgaW4gYSBjb25mbGljdGVkIGh1bmssIGJ1dCB0aGVyZSBhcmUgY2FzZXMgd2hlcmUgdGhlIGNvbnRleHRcbiAgLy8gaXMgdGhlIG9ubHkgb3ZlcmxhcCB3aGVyZSB3ZSBjYW4gc3VjY2Vzc2Z1bGx5IG1lcmdlIHRoZSBjb250ZW50IGhlcmUuXG4gIGxldCBtaW5lID0ge29mZnNldDogbWluZU9mZnNldCwgbGluZXM6IG1pbmVMaW5lcywgaW5kZXg6IDB9LFxuICAgICAgdGhlaXIgPSB7b2Zmc2V0OiB0aGVpck9mZnNldCwgbGluZXM6IHRoZWlyTGluZXMsIGluZGV4OiAwfTtcblxuICAvLyBIYW5kbGUgYW55IGxlYWRpbmcgY29udGVudFxuICBpbnNlcnRMZWFkaW5nKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgaW5zZXJ0TGVhZGluZyhodW5rLCB0aGVpciwgbWluZSk7XG5cbiAgLy8gTm93IGluIHRoZSBvdmVybGFwIGNvbnRlbnQuIFNjYW4gdGhyb3VnaCBhbmQgc2VsZWN0IHRoZSBiZXN0IGNoYW5nZXMgZnJvbSBlYWNoLlxuICB3aGlsZSAobWluZS5pbmRleCA8IG1pbmUubGluZXMubGVuZ3RoICYmIHRoZWlyLmluZGV4IDwgdGhlaXIubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IG1pbmVDdXJyZW50ID0gbWluZS5saW5lc1ttaW5lLmluZGV4XSxcbiAgICAgICAgdGhlaXJDdXJyZW50ID0gdGhlaXIubGluZXNbdGhlaXIuaW5kZXhdO1xuXG4gICAgaWYgKChtaW5lQ3VycmVudFswXSA9PT0gJy0nIHx8IG1pbmVDdXJyZW50WzBdID09PSAnKycpXG4gICAgICAgICYmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyB8fCB0aGVpckN1cnJlbnRbMF0gPT09ICcrJykpIHtcbiAgICAgIC8vIEJvdGggbW9kaWZpZWQgLi4uXG4gICAgICBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICcrJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gTWluZSBpbnNlcnRlZFxuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBjb2xsZWN0Q2hhbmdlKG1pbmUpKTtcbiAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJysnICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIFRoZWlycyBpbnNlcnRlZFxuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBjb2xsZWN0Q2hhbmdlKHRoZWlyKSk7XG4gICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJy0nICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvLyBNaW5lIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIFRoZWlyIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICByZW1vdmFsKGh1bmssIHRoZWlyLCBtaW5lLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50ID09PSB0aGVpckN1cnJlbnQpIHtcbiAgICAgIC8vIENvbnRleHQgaWRlbnRpdHlcbiAgICAgIGh1bmsubGluZXMucHVzaChtaW5lQ3VycmVudCk7XG4gICAgICBtaW5lLmluZGV4Kys7XG4gICAgICB0aGVpci5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb250ZXh0IG1pc21hdGNoXG4gICAgICBjb25mbGljdChodW5rLCBjb2xsZWN0Q2hhbmdlKG1pbmUpLCBjb2xsZWN0Q2hhbmdlKHRoZWlyKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTm93IHB1c2ggYW55dGhpbmcgdGhhdCBtYXkgYmUgcmVtYWluaW5nXG4gIGluc2VydFRyYWlsaW5nKGh1bmssIG1pbmUpO1xuICBpbnNlcnRUcmFpbGluZyhodW5rLCB0aGVpcik7XG5cbiAgY2FsY0xpbmVDb3VudChodW5rKTtcbn1cblxuZnVuY3Rpb24gbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKSB7XG4gIGxldCBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENoYW5nZSh0aGVpcik7XG5cbiAgaWYgKGFsbFJlbW92ZXMobXlDaGFuZ2VzKSAmJiBhbGxSZW1vdmVzKHRoZWlyQ2hhbmdlcykpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHJlbW92ZSBjaGFuZ2VzIHRoYXQgYXJlIHN1cGVyc2V0cyBvZiBvbmUgYW5vdGhlclxuICAgIGlmIChhcnJheVN0YXJ0c1dpdGgobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpXG4gICAgICAgICYmIHNraXBSZW1vdmVTdXBlcnNldCh0aGVpciwgbXlDaGFuZ2VzLCBteUNoYW5nZXMubGVuZ3RoIC0gdGhlaXJDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgIGh1bmsubGluZXMucHVzaCguLi4gbXlDaGFuZ2VzKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGFycmF5U3RhcnRzV2l0aCh0aGVpckNoYW5nZXMsIG15Q2hhbmdlcylcbiAgICAgICAgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KG1pbmUsIHRoZWlyQ2hhbmdlcywgdGhlaXJDaGFuZ2VzLmxlbmd0aCAtIG15Q2hhbmdlcy5sZW5ndGgpKSB7XG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIHRoZWlyQ2hhbmdlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2UgaWYgKGFycmF5RXF1YWwobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpKSB7XG4gICAgaHVuay5saW5lcy5wdXNoKC4uLiBteUNoYW5nZXMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbmZsaWN0KGh1bmssIG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZhbChodW5rLCBtaW5lLCB0aGVpciwgc3dhcCkge1xuICBsZXQgbXlDaGFuZ2VzID0gY29sbGVjdENoYW5nZShtaW5lKSxcbiAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDb250ZXh0KHRoZWlyLCBteUNoYW5nZXMpO1xuICBpZiAodGhlaXJDaGFuZ2VzLm1lcmdlZCkge1xuICAgIGh1bmsubGluZXMucHVzaCguLi4gdGhlaXJDaGFuZ2VzLm1lcmdlZCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmxpY3QoaHVuaywgc3dhcCA/IHRoZWlyQ2hhbmdlcyA6IG15Q2hhbmdlcywgc3dhcCA/IG15Q2hhbmdlcyA6IHRoZWlyQ2hhbmdlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uZmxpY3QoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgaHVuay5jb25mbGljdCA9IHRydWU7XG4gIGh1bmsubGluZXMucHVzaCh7XG4gICAgY29uZmxpY3Q6IHRydWUsXG4gICAgbWluZTogbWluZSxcbiAgICB0aGVpcnM6IHRoZWlyXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRMZWFkaW5nKGh1bmssIGluc2VydCwgdGhlaXIpIHtcbiAgd2hpbGUgKGluc2VydC5vZmZzZXQgPCB0aGVpci5vZmZzZXQgJiYgaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gICAgaW5zZXJ0Lm9mZnNldCsrO1xuICB9XG59XG5mdW5jdGlvbiBpbnNlcnRUcmFpbGluZyhodW5rLCBpbnNlcnQpIHtcbiAgd2hpbGUgKGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RDaGFuZ2Uoc3RhdGUpIHtcbiAgbGV0IHJldCA9IFtdLFxuICAgICAgb3BlcmF0aW9uID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdWzBdO1xuICB3aGlsZSAoc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbGluZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XTtcblxuICAgIC8vIEdyb3VwIGFkZGl0aW9ucyB0aGF0IGFyZSBpbW1lZGlhdGVseSBhZnRlciBzdWJ0cmFjdGlvbnMgYW5kIHRyZWF0IHRoZW0gYXMgb25lIFwiYXRvbWljXCIgbW9kaWZ5IGNoYW5nZS5cbiAgICBpZiAob3BlcmF0aW9uID09PSAnLScgJiYgbGluZVswXSA9PT0gJysnKSB7XG4gICAgICBvcGVyYXRpb24gPSAnKyc7XG4gICAgfVxuXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gbGluZVswXSkge1xuICAgICAgcmV0LnB1c2gobGluZSk7XG4gICAgICBzdGF0ZS5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gY29sbGVjdENvbnRleHQoc3RhdGUsIG1hdGNoQ2hhbmdlcykge1xuICBsZXQgY2hhbmdlcyA9IFtdLFxuICAgICAgbWVyZ2VkID0gW10sXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIGNvbnRleHRDaGFuZ2VzID0gZmFsc2UsXG4gICAgICBjb25mbGljdGVkID0gZmFsc2U7XG4gIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aFxuICAgICAgICAmJiBzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBjaGFuZ2UgPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF0sXG4gICAgICAgIG1hdGNoID0gbWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdO1xuXG4gICAgLy8gT25jZSB3ZSd2ZSBoaXQgb3VyIGFkZCwgdGhlbiB3ZSBhcmUgZG9uZVxuICAgIGlmIChtYXRjaFswXSA9PT0gJysnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb250ZXh0Q2hhbmdlcyA9IGNvbnRleHRDaGFuZ2VzIHx8IGNoYW5nZVswXSAhPT0gJyAnO1xuXG4gICAgbWVyZ2VkLnB1c2gobWF0Y2gpO1xuICAgIG1hdGNoSW5kZXgrKztcblxuICAgIC8vIENvbnN1bWUgYW55IGFkZGl0aW9ucyBpbiB0aGUgb3RoZXIgYmxvY2sgYXMgYSBjb25mbGljdCB0byBhdHRlbXB0XG4gICAgLy8gdG8gcHVsbCBpbiB0aGUgcmVtYWluaW5nIGNvbnRleHQgYWZ0ZXIgdGhpc1xuICAgIGlmIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG5cbiAgICAgIHdoaWxlIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgY2hhbmdlID0gc3RhdGUubGluZXNbKytzdGF0ZS5pbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLnN1YnN0cigxKSA9PT0gY2hhbmdlLnN1YnN0cigxKSkge1xuICAgICAgY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICBzdGF0ZS5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XSB8fCAnJylbMF0gPT09ICcrJ1xuICAgICAgJiYgY29udGV4dENoYW5nZXMpIHtcbiAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChjb25mbGljdGVkKSB7XG4gICAgcmV0dXJuIGNoYW5nZXM7XG4gIH1cblxuICB3aGlsZSAobWF0Y2hJbmRleCA8IG1hdGNoQ2hhbmdlcy5sZW5ndGgpIHtcbiAgICBtZXJnZWQucHVzaChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleCsrXSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1lcmdlZCxcbiAgICBjaGFuZ2VzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFsbFJlbW92ZXMoY2hhbmdlcykge1xuICByZXR1cm4gY2hhbmdlcy5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY2hhbmdlKSB7XG4gICAgcmV0dXJuIHByZXYgJiYgY2hhbmdlWzBdID09PSAnLSc7XG4gIH0sIHRydWUpO1xufVxuZnVuY3Rpb24gc2tpcFJlbW92ZVN1cGVyc2V0KHN0YXRlLCByZW1vdmVDaGFuZ2VzLCBkZWx0YSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbHRhOyBpKyspIHtcbiAgICBsZXQgY2hhbmdlQ29udGVudCA9IHJlbW92ZUNoYW5nZXNbcmVtb3ZlQ2hhbmdlcy5sZW5ndGggLSBkZWx0YSArIGldLnN1YnN0cigxKTtcbiAgICBpZiAoc3RhdGUubGluZXNbc3RhdGUuaW5kZXggKyBpXSAhPT0gJyAnICsgY2hhbmdlQ29udGVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmluZGV4ICs9IGRlbHRhO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lcykge1xuICBsZXQgb2xkTGluZXMgPSAwO1xuICBsZXQgbmV3TGluZXMgPSAwO1xuXG4gIGxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgIGlmICh0eXBlb2YgbGluZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBteUNvdW50ID0gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lLm1pbmUpO1xuICAgICAgbGV0IHRoZWlyQ291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUudGhlaXJzKTtcblxuICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG15Q291bnQub2xkTGluZXMgPT09IHRoZWlyQ291bnQub2xkTGluZXMpIHtcbiAgICAgICAgICBvbGRMaW5lcyArPSBteUNvdW50Lm9sZExpbmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9sZExpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChteUNvdW50Lm5ld0xpbmVzID09PSB0aGVpckNvdW50Lm5ld0xpbmVzKSB7XG4gICAgICAgICAgbmV3TGluZXMgKz0gbXlDb3VudC5uZXdMaW5lcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdMaW5lcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCAmJiAobGluZVswXSA9PT0gJysnIHx8IGxpbmVbMF0gPT09ICcgJykpIHtcbiAgICAgICAgbmV3TGluZXMrKztcbiAgICAgIH1cbiAgICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnLScgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICBvbGRMaW5lcysrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtvbGRMaW5lcywgbmV3TGluZXN9O1xufVxuIl19


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/structuredPatch = structuredPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = createTwoFilesPatch;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = createPatch;

	var /*istanbul ignore start*/_line = __webpack_require__(5) /*istanbul ignore end*/;

	/*istanbul ignore start*/function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/*istanbul ignore end*/function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
	  if (!options) {
	    options = {};
	  }
	  if (typeof options.context === 'undefined') {
	    options.context = 4;
	  }

	  var diff = /*istanbul ignore start*/(0, _line.diffLines) /*istanbul ignore end*/(oldStr, newStr, options);
	  diff.push({ value: '', lines: [] }); // Append an empty value to make cleanup easier

	  function contextLines(lines) {
	    return lines.map(function (entry) {
	      return ' ' + entry;
	    });
	  }

	  var hunks = [];
	  var oldRangeStart = 0,
	      newRangeStart = 0,
	      curRange = [],
	      oldLine = 1,
	      newLine = 1;

	  /*istanbul ignore start*/var _loop = function _loop( /*istanbul ignore end*/i) {
	    var current = diff[i],
	        lines = current.lines || current.value.replace(/\n$/, '').split('\n');
	    current.lines = lines;

	    if (current.added || current.removed) {
	      /*istanbul ignore start*/var _curRange;

	      /*istanbul ignore end*/ // If we have previous context, start with that
	      if (!oldRangeStart) {
	        var prev = diff[i - 1];
	        oldRangeStart = oldLine;
	        newRangeStart = newLine;

	        if (prev) {
	          curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
	          oldRangeStart -= curRange.length;
	          newRangeStart -= curRange.length;
	        }
	      }

	      // Output our changes
	      /*istanbul ignore start*/(_curRange = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/lines.map(function (entry) {
	        return (current.added ? '+' : '-') + entry;
	      })));

	      // Track the updated file position
	      if (current.added) {
	        newLine += lines.length;
	      } else {
	        oldLine += lines.length;
	      }
	    } else {
	      // Identical context lines. Track line changes
	      if (oldRangeStart) {
	        // Close out any changes that have been output (or join overlapping)
	        if (lines.length <= options.context * 2 && i < diff.length - 2) {
	          /*istanbul ignore start*/var _curRange2;

	          /*istanbul ignore end*/ // Overlapping
	          /*istanbul ignore start*/(_curRange2 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines)));
	        } else {
	          /*istanbul ignore start*/var _curRange3;

	          /*istanbul ignore end*/ // end the range and output
	          var contextSize = Math.min(lines.length, options.context);
	          /*istanbul ignore start*/(_curRange3 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines.slice(0, contextSize))));

	          var hunk = {
	            oldStart: oldRangeStart,
	            oldLines: oldLine - oldRangeStart + contextSize,
	            newStart: newRangeStart,
	            newLines: newLine - newRangeStart + contextSize,
	            lines: curRange
	          };
	          if (i >= diff.length - 2 && lines.length <= options.context) {
	            // EOF is inside this hunk
	            var oldEOFNewline = /\n$/.test(oldStr);
	            var newEOFNewline = /\n$/.test(newStr);
	            if (lines.length == 0 && !oldEOFNewline) {
	              // special case: old has no eol and no trailing context; no-nl can end up before adds
	              curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
	            } else if (!oldEOFNewline || !newEOFNewline) {
	              curRange.push('\\ No newline at end of file');
	            }
	          }
	          hunks.push(hunk);

	          oldRangeStart = 0;
	          newRangeStart = 0;
	          curRange = [];
	        }
	      }
	      oldLine += lines.length;
	      newLine += lines.length;
	    }
	  };

	  for (var i = 0; i < diff.length; i++) {
	    /*istanbul ignore start*/_loop( /*istanbul ignore end*/i);
	  }

	  return {
	    oldFileName: oldFileName, newFileName: newFileName,
	    oldHeader: oldHeader, newHeader: newHeader,
	    hunks: hunks
	  };
	}

	function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
	  var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);

	  var ret = [];
	  if (oldFileName == newFileName) {
	    ret.push('Index: ' + oldFileName);
	  }
	  ret.push('===================================================================');
	  ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
	  ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

	  for (var i = 0; i < diff.hunks.length; i++) {
	    var hunk = diff.hunks[i];
	    ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
	    ret.push.apply(ret, hunk.lines);
	  }

	  return ret.join('\n') + '\n';
	}

	function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
	  return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9jcmVhdGUuanMiXSwibmFtZXMiOlsic3RydWN0dXJlZFBhdGNoIiwiY3JlYXRlVHdvRmlsZXNQYXRjaCIsImNyZWF0ZVBhdGNoIiwib2xkRmlsZU5hbWUiLCJuZXdGaWxlTmFtZSIsIm9sZFN0ciIsIm5ld1N0ciIsIm9sZEhlYWRlciIsIm5ld0hlYWRlciIsIm9wdGlvbnMiLCJjb250ZXh0IiwiZGlmZiIsInB1c2giLCJ2YWx1ZSIsImxpbmVzIiwiY29udGV4dExpbmVzIiwibWFwIiwiZW50cnkiLCJodW5rcyIsIm9sZFJhbmdlU3RhcnQiLCJuZXdSYW5nZVN0YXJ0IiwiY3VyUmFuZ2UiLCJvbGRMaW5lIiwibmV3TGluZSIsImkiLCJjdXJyZW50IiwicmVwbGFjZSIsInNwbGl0IiwiYWRkZWQiLCJyZW1vdmVkIiwicHJldiIsInNsaWNlIiwibGVuZ3RoIiwiY29udGV4dFNpemUiLCJNYXRoIiwibWluIiwiaHVuayIsIm9sZFN0YXJ0Iiwib2xkTGluZXMiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwib2xkRU9GTmV3bGluZSIsInRlc3QiLCJuZXdFT0ZOZXdsaW5lIiwic3BsaWNlIiwicmV0IiwiYXBwbHkiLCJqb2luIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7OztnQ0FFZ0JBLGUsR0FBQUEsZTt5REFpR0FDLG1CLEdBQUFBLG1CO3lEQXdCQUMsVyxHQUFBQSxXOztBQTNIaEI7Ozs7dUJBRU8sU0FBU0YsZUFBVCxDQUF5QkcsV0FBekIsRUFBc0NDLFdBQXRDLEVBQW1EQyxNQUFuRCxFQUEyREMsTUFBM0QsRUFBbUVDLFNBQW5FLEVBQThFQyxTQUE5RSxFQUF5RkMsT0FBekYsRUFBa0c7QUFDdkcsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWkEsY0FBVSxFQUFWO0FBQ0Q7QUFDRCxNQUFJLE9BQU9BLFFBQVFDLE9BQWYsS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUNELFlBQVFDLE9BQVIsR0FBa0IsQ0FBbEI7QUFDRDs7QUFFRCxNQUFNQyxPQUFPLHNFQUFVTixNQUFWLEVBQWtCQyxNQUFsQixFQUEwQkcsT0FBMUIsQ0FBYjtBQUNBRSxPQUFLQyxJQUFMLENBQVUsRUFBQ0MsT0FBTyxFQUFSLEVBQVlDLE9BQU8sRUFBbkIsRUFBVixFQVR1RyxDQVNsRTs7QUFFckMsV0FBU0MsWUFBVCxDQUFzQkQsS0FBdEIsRUFBNkI7QUFDM0IsV0FBT0EsTUFBTUUsR0FBTixDQUFVLFVBQVNDLEtBQVQsRUFBZ0I7QUFBRSxhQUFPLE1BQU1BLEtBQWI7QUFBcUIsS0FBakQsQ0FBUDtBQUNEOztBQUVELE1BQUlDLFFBQVEsRUFBWjtBQUNBLE1BQUlDLGdCQUFnQixDQUFwQjtBQUFBLE1BQXVCQyxnQkFBZ0IsQ0FBdkM7QUFBQSxNQUEwQ0MsV0FBVyxFQUFyRDtBQUFBLE1BQ0lDLFVBQVUsQ0FEZDtBQUFBLE1BQ2lCQyxVQUFVLENBRDNCOztBQWhCdUcsOEVBa0I5RkMsQ0FsQjhGO0FBbUJyRyxRQUFNQyxVQUFVZCxLQUFLYSxDQUFMLENBQWhCO0FBQUEsUUFDTVYsUUFBUVcsUUFBUVgsS0FBUixJQUFpQlcsUUFBUVosS0FBUixDQUFjYSxPQUFkLENBQXNCLEtBQXRCLEVBQTZCLEVBQTdCLEVBQWlDQyxLQUFqQyxDQUF1QyxJQUF2QyxDQUQvQjtBQUVBRixZQUFRWCxLQUFSLEdBQWdCQSxLQUFoQjs7QUFFQSxRQUFJVyxRQUFRRyxLQUFSLElBQWlCSCxRQUFRSSxPQUE3QixFQUFzQztBQUFBOztBQUFBLDhCQUNwQztBQUNBLFVBQUksQ0FBQ1YsYUFBTCxFQUFvQjtBQUNsQixZQUFNVyxPQUFPbkIsS0FBS2EsSUFBSSxDQUFULENBQWI7QUFDQUwsd0JBQWdCRyxPQUFoQjtBQUNBRix3QkFBZ0JHLE9BQWhCOztBQUVBLFlBQUlPLElBQUosRUFBVTtBQUNSVCxxQkFBV1osUUFBUUMsT0FBUixHQUFrQixDQUFsQixHQUFzQkssYUFBYWUsS0FBS2hCLEtBQUwsQ0FBV2lCLEtBQVgsQ0FBaUIsQ0FBQ3RCLFFBQVFDLE9BQTFCLENBQWIsQ0FBdEIsR0FBeUUsRUFBcEY7QUFDQVMsMkJBQWlCRSxTQUFTVyxNQUExQjtBQUNBWiwyQkFBaUJDLFNBQVNXLE1BQTFCO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBLDZFQUFTcEIsSUFBVCwwTEFBa0JFLE1BQU1FLEdBQU4sQ0FBVSxVQUFTQyxLQUFULEVBQWdCO0FBQzFDLGVBQU8sQ0FBQ1EsUUFBUUcsS0FBUixHQUFnQixHQUFoQixHQUFzQixHQUF2QixJQUE4QlgsS0FBckM7QUFDRCxPQUZpQixDQUFsQjs7QUFJQTtBQUNBLFVBQUlRLFFBQVFHLEtBQVosRUFBbUI7QUFDakJMLG1CQUFXVCxNQUFNa0IsTUFBakI7QUFDRCxPQUZELE1BRU87QUFDTFYsbUJBQVdSLE1BQU1rQixNQUFqQjtBQUNEO0FBQ0YsS0F6QkQsTUF5Qk87QUFDTDtBQUNBLFVBQUliLGFBQUosRUFBbUI7QUFDakI7QUFDQSxZQUFJTCxNQUFNa0IsTUFBTixJQUFnQnZCLFFBQVFDLE9BQVIsR0FBa0IsQ0FBbEMsSUFBdUNjLElBQUliLEtBQUtxQixNQUFMLEdBQWMsQ0FBN0QsRUFBZ0U7QUFBQTs7QUFBQSxrQ0FDOUQ7QUFDQSxrRkFBU3BCLElBQVQsMkxBQWtCRyxhQUFhRCxLQUFiLENBQWxCO0FBQ0QsU0FIRCxNQUdPO0FBQUE7O0FBQUEsa0NBQ0w7QUFDQSxjQUFJbUIsY0FBY0MsS0FBS0MsR0FBTCxDQUFTckIsTUFBTWtCLE1BQWYsRUFBdUJ2QixRQUFRQyxPQUEvQixDQUFsQjtBQUNBLGtGQUFTRSxJQUFULDJMQUFrQkcsYUFBYUQsTUFBTWlCLEtBQU4sQ0FBWSxDQUFaLEVBQWVFLFdBQWYsQ0FBYixDQUFsQjs7QUFFQSxjQUFJRyxPQUFPO0FBQ1RDLHNCQUFVbEIsYUFERDtBQUVUbUIsc0JBQVdoQixVQUFVSCxhQUFWLEdBQTBCYyxXQUY1QjtBQUdUTSxzQkFBVW5CLGFBSEQ7QUFJVG9CLHNCQUFXakIsVUFBVUgsYUFBVixHQUEwQmEsV0FKNUI7QUFLVG5CLG1CQUFPTztBQUxFLFdBQVg7QUFPQSxjQUFJRyxLQUFLYixLQUFLcUIsTUFBTCxHQUFjLENBQW5CLElBQXdCbEIsTUFBTWtCLE1BQU4sSUFBZ0J2QixRQUFRQyxPQUFwRCxFQUE2RDtBQUMzRDtBQUNBLGdCQUFJK0IsZ0JBQWlCLE1BQU1DLElBQU4sQ0FBV3JDLE1BQVgsQ0FBckI7QUFDQSxnQkFBSXNDLGdCQUFpQixNQUFNRCxJQUFOLENBQVdwQyxNQUFYLENBQXJCO0FBQ0EsZ0JBQUlRLE1BQU1rQixNQUFOLElBQWdCLENBQWhCLElBQXFCLENBQUNTLGFBQTFCLEVBQXlDO0FBQ3ZDO0FBQ0FwQix1QkFBU3VCLE1BQVQsQ0FBZ0JSLEtBQUtFLFFBQXJCLEVBQStCLENBQS9CLEVBQWtDLDhCQUFsQztBQUNELGFBSEQsTUFHTyxJQUFJLENBQUNHLGFBQUQsSUFBa0IsQ0FBQ0UsYUFBdkIsRUFBc0M7QUFDM0N0Qix1QkFBU1QsSUFBVCxDQUFjLDhCQUFkO0FBQ0Q7QUFDRjtBQUNETSxnQkFBTU4sSUFBTixDQUFXd0IsSUFBWDs7QUFFQWpCLDBCQUFnQixDQUFoQjtBQUNBQywwQkFBZ0IsQ0FBaEI7QUFDQUMscUJBQVcsRUFBWDtBQUNEO0FBQ0Y7QUFDREMsaUJBQVdSLE1BQU1rQixNQUFqQjtBQUNBVCxpQkFBV1QsTUFBTWtCLE1BQWpCO0FBQ0Q7QUF2Rm9HOztBQWtCdkcsT0FBSyxJQUFJUixJQUFJLENBQWIsRUFBZ0JBLElBQUliLEtBQUtxQixNQUF6QixFQUFpQ1IsR0FBakMsRUFBc0M7QUFBQSwyREFBN0JBLENBQTZCO0FBc0VyQzs7QUFFRCxTQUFPO0FBQ0xyQixpQkFBYUEsV0FEUixFQUNxQkMsYUFBYUEsV0FEbEM7QUFFTEcsZUFBV0EsU0FGTixFQUVpQkMsV0FBV0EsU0FGNUI7QUFHTFUsV0FBT0E7QUFIRixHQUFQO0FBS0Q7O0FBRU0sU0FBU2pCLG1CQUFULENBQTZCRSxXQUE3QixFQUEwQ0MsV0FBMUMsRUFBdURDLE1BQXZELEVBQStEQyxNQUEvRCxFQUF1RUMsU0FBdkUsRUFBa0ZDLFNBQWxGLEVBQTZGQyxPQUE3RixFQUFzRztBQUMzRyxNQUFNRSxPQUFPWCxnQkFBZ0JHLFdBQWhCLEVBQTZCQyxXQUE3QixFQUEwQ0MsTUFBMUMsRUFBa0RDLE1BQWxELEVBQTBEQyxTQUExRCxFQUFxRUMsU0FBckUsRUFBZ0ZDLE9BQWhGLENBQWI7O0FBRUEsTUFBTW9DLE1BQU0sRUFBWjtBQUNBLE1BQUkxQyxlQUFlQyxXQUFuQixFQUFnQztBQUM5QnlDLFFBQUlqQyxJQUFKLENBQVMsWUFBWVQsV0FBckI7QUFDRDtBQUNEMEMsTUFBSWpDLElBQUosQ0FBUyxxRUFBVDtBQUNBaUMsTUFBSWpDLElBQUosQ0FBUyxTQUFTRCxLQUFLUixXQUFkLElBQTZCLE9BQU9RLEtBQUtKLFNBQVosS0FBMEIsV0FBMUIsR0FBd0MsRUFBeEMsR0FBNkMsT0FBT0ksS0FBS0osU0FBdEYsQ0FBVDtBQUNBc0MsTUFBSWpDLElBQUosQ0FBUyxTQUFTRCxLQUFLUCxXQUFkLElBQTZCLE9BQU9PLEtBQUtILFNBQVosS0FBMEIsV0FBMUIsR0FBd0MsRUFBeEMsR0FBNkMsT0FBT0csS0FBS0gsU0FBdEYsQ0FBVDs7QUFFQSxPQUFLLElBQUlnQixJQUFJLENBQWIsRUFBZ0JBLElBQUliLEtBQUtPLEtBQUwsQ0FBV2MsTUFBL0IsRUFBdUNSLEdBQXZDLEVBQTRDO0FBQzFDLFFBQU1ZLE9BQU96QixLQUFLTyxLQUFMLENBQVdNLENBQVgsQ0FBYjtBQUNBcUIsUUFBSWpDLElBQUosQ0FDRSxTQUFTd0IsS0FBS0MsUUFBZCxHQUF5QixHQUF6QixHQUErQkQsS0FBS0UsUUFBcEMsR0FDRSxJQURGLEdBQ1NGLEtBQUtHLFFBRGQsR0FDeUIsR0FEekIsR0FDK0JILEtBQUtJLFFBRHBDLEdBRUUsS0FISjtBQUtBSyxRQUFJakMsSUFBSixDQUFTa0MsS0FBVCxDQUFlRCxHQUFmLEVBQW9CVCxLQUFLdEIsS0FBekI7QUFDRDs7QUFFRCxTQUFPK0IsSUFBSUUsSUFBSixDQUFTLElBQVQsSUFBaUIsSUFBeEI7QUFDRDs7QUFFTSxTQUFTN0MsV0FBVCxDQUFxQjhDLFFBQXJCLEVBQStCM0MsTUFBL0IsRUFBdUNDLE1BQXZDLEVBQStDQyxTQUEvQyxFQUEwREMsU0FBMUQsRUFBcUVDLE9BQXJFLEVBQThFO0FBQ25GLFNBQU9SLG9CQUFvQitDLFFBQXBCLEVBQThCQSxRQUE5QixFQUF3QzNDLE1BQXhDLEVBQWdEQyxNQUFoRCxFQUF3REMsU0FBeEQsRUFBbUVDLFNBQW5FLEVBQThFQyxPQUE5RSxDQUFQO0FBQ0QiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkaWZmTGluZXN9IGZyb20gJy4uL2RpZmYvbGluZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMuY29udGV4dCA9IDQ7XG4gIH1cblxuICBjb25zdCBkaWZmID0gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgZGlmZi5wdXNoKHt2YWx1ZTogJycsIGxpbmVzOiBbXX0pOyAgIC8vIEFwcGVuZCBhbiBlbXB0eSB2YWx1ZSB0byBtYWtlIGNsZWFudXAgZWFzaWVyXG5cbiAgZnVuY3Rpb24gY29udGV4dExpbmVzKGxpbmVzKSB7XG4gICAgcmV0dXJuIGxpbmVzLm1hcChmdW5jdGlvbihlbnRyeSkgeyByZXR1cm4gJyAnICsgZW50cnk7IH0pO1xuICB9XG5cbiAgbGV0IGh1bmtzID0gW107XG4gIGxldCBvbGRSYW5nZVN0YXJ0ID0gMCwgbmV3UmFuZ2VTdGFydCA9IDAsIGN1clJhbmdlID0gW10sXG4gICAgICBvbGRMaW5lID0gMSwgbmV3TGluZSA9IDE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkaWZmW2ldLFxuICAgICAgICAgIGxpbmVzID0gY3VycmVudC5saW5lcyB8fCBjdXJyZW50LnZhbHVlLnJlcGxhY2UoL1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpO1xuICAgIGN1cnJlbnQubGluZXMgPSBsaW5lcztcblxuICAgIGlmIChjdXJyZW50LmFkZGVkIHx8IGN1cnJlbnQucmVtb3ZlZCkge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBwcmV2aW91cyBjb250ZXh0LCBzdGFydCB3aXRoIHRoYXRcbiAgICAgIGlmICghb2xkUmFuZ2VTdGFydCkge1xuICAgICAgICBjb25zdCBwcmV2ID0gZGlmZltpIC0gMV07XG4gICAgICAgIG9sZFJhbmdlU3RhcnQgPSBvbGRMaW5lO1xuICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gbmV3TGluZTtcblxuICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgIGN1clJhbmdlID0gb3B0aW9ucy5jb250ZXh0ID4gMCA/IGNvbnRleHRMaW5lcyhwcmV2LmxpbmVzLnNsaWNlKC1vcHRpb25zLmNvbnRleHQpKSA6IFtdO1xuICAgICAgICAgIG9sZFJhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE91dHB1dCBvdXIgY2hhbmdlc1xuICAgICAgY3VyUmFuZ2UucHVzaCguLi4gbGluZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoY3VycmVudC5hZGRlZCA/ICcrJyA6ICctJykgKyBlbnRyeTtcbiAgICAgIH0pKTtcblxuICAgICAgLy8gVHJhY2sgdGhlIHVwZGF0ZWQgZmlsZSBwb3NpdGlvblxuICAgICAgaWYgKGN1cnJlbnQuYWRkZWQpIHtcbiAgICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWRlbnRpY2FsIGNvbnRleHQgbGluZXMuIFRyYWNrIGxpbmUgY2hhbmdlc1xuICAgICAgaWYgKG9sZFJhbmdlU3RhcnQpIHtcbiAgICAgICAgLy8gQ2xvc2Ugb3V0IGFueSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIG91dHB1dCAob3Igam9pbiBvdmVybGFwcGluZylcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQgKiAyICYmIGkgPCBkaWZmLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAvLyBPdmVybGFwcGluZ1xuICAgICAgICAgIGN1clJhbmdlLnB1c2goLi4uIGNvbnRleHRMaW5lcyhsaW5lcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVuZCB0aGUgcmFuZ2UgYW5kIG91dHB1dFxuICAgICAgICAgIGxldCBjb250ZXh0U2l6ZSA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgb3B0aW9ucy5jb250ZXh0KTtcbiAgICAgICAgICBjdXJSYW5nZS5wdXNoKC4uLiBjb250ZXh0TGluZXMobGluZXMuc2xpY2UoMCwgY29udGV4dFNpemUpKSk7XG5cbiAgICAgICAgICBsZXQgaHVuayA9IHtcbiAgICAgICAgICAgIG9sZFN0YXJ0OiBvbGRSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgb2xkTGluZXM6IChvbGRMaW5lIC0gb2xkUmFuZ2VTdGFydCArIGNvbnRleHRTaXplKSxcbiAgICAgICAgICAgIG5ld1N0YXJ0OiBuZXdSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgbmV3TGluZXM6IChuZXdMaW5lIC0gbmV3UmFuZ2VTdGFydCArIGNvbnRleHRTaXplKSxcbiAgICAgICAgICAgIGxpbmVzOiBjdXJSYW5nZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGkgPj0gZGlmZi5sZW5ndGggLSAyICYmIGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIEVPRiBpcyBpbnNpZGUgdGhpcyBodW5rXG4gICAgICAgICAgICBsZXQgb2xkRU9GTmV3bGluZSA9ICgvXFxuJC8udGVzdChvbGRTdHIpKTtcbiAgICAgICAgICAgIGxldCBuZXdFT0ZOZXdsaW5lID0gKC9cXG4kLy50ZXN0KG5ld1N0cikpO1xuICAgICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA9PSAwICYmICFvbGRFT0ZOZXdsaW5lKSB7XG4gICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogb2xkIGhhcyBubyBlb2wgYW5kIG5vIHRyYWlsaW5nIGNvbnRleHQ7IG5vLW5sIGNhbiBlbmQgdXAgYmVmb3JlIGFkZHNcbiAgICAgICAgICAgICAgY3VyUmFuZ2Uuc3BsaWNlKGh1bmsub2xkTGluZXMsIDAsICdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW9sZEVPRk5ld2xpbmUgfHwgIW5ld0VPRk5ld2xpbmUpIHtcbiAgICAgICAgICAgICAgY3VyUmFuZ2UucHVzaCgnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGh1bmtzLnB1c2goaHVuayk7XG5cbiAgICAgICAgICBvbGRSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICBjdXJSYW5nZSA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2xkRmlsZU5hbWU6IG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZTogbmV3RmlsZU5hbWUsXG4gICAgb2xkSGVhZGVyOiBvbGRIZWFkZXIsIG5ld0hlYWRlcjogbmV3SGVhZGVyLFxuICAgIGh1bmtzOiBodW5rc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHdvRmlsZXNQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICBjb25zdCBkaWZmID0gc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKTtcblxuICBjb25zdCByZXQgPSBbXTtcbiAgaWYgKG9sZEZpbGVOYW1lID09IG5ld0ZpbGVOYW1lKSB7XG4gICAgcmV0LnB1c2goJ0luZGV4OiAnICsgb2xkRmlsZU5hbWUpO1xuICB9XG4gIHJldC5wdXNoKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gIHJldC5wdXNoKCctLS0gJyArIGRpZmYub2xkRmlsZU5hbWUgKyAodHlwZW9mIGRpZmYub2xkSGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm9sZEhlYWRlcikpO1xuICByZXQucHVzaCgnKysrICcgKyBkaWZmLm5ld0ZpbGVOYW1lICsgKHR5cGVvZiBkaWZmLm5ld0hlYWRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6ICdcXHQnICsgZGlmZi5uZXdIZWFkZXIpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmYuaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBodW5rID0gZGlmZi5odW5rc1tpXTtcbiAgICByZXQucHVzaChcbiAgICAgICdAQCAtJyArIGh1bmsub2xkU3RhcnQgKyAnLCcgKyBodW5rLm9sZExpbmVzXG4gICAgICArICcgKycgKyBodW5rLm5ld1N0YXJ0ICsgJywnICsgaHVuay5uZXdMaW5lc1xuICAgICAgKyAnIEBAJ1xuICAgICk7XG4gICAgcmV0LnB1c2guYXBwbHkocmV0LCBodW5rLmxpbmVzKTtcbiAgfVxuXG4gIHJldHVybiByZXQuam9pbignXFxuJykgKyAnXFxuJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhdGNoKGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNyZWF0ZVR3b0ZpbGVzUGF0Y2goZmlsZU5hbWUsIGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xufVxuIl19


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	exports.__esModule = true;
	exports. /*istanbul ignore end*/arrayEqual = arrayEqual;
	/*istanbul ignore start*/exports. /*istanbul ignore end*/arrayStartsWith = arrayStartsWith;
	function arrayEqual(a, b) {
	  if (a.length !== b.length) {
	    return false;
	  }

	  return arrayStartsWith(a, b);
	}

	function arrayStartsWith(array, start) {
	  if (start.length > array.length) {
	    return false;
	  }

	  for (var i = 0; i < start.length; i++) {
	    if (start[i] !== array[i]) {
	      return false;
	    }
	  }

	  return true;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5RXF1YWwiLCJhcnJheVN0YXJ0c1dpdGgiLCJhIiwiYiIsImxlbmd0aCIsImFycmF5Iiwic3RhcnQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Z0NBQWdCQSxVLEdBQUFBLFU7eURBUUFDLGUsR0FBQUEsZTtBQVJULFNBQVNELFVBQVQsQ0FBb0JFLENBQXBCLEVBQXVCQyxDQUF2QixFQUEwQjtBQUMvQixNQUFJRCxFQUFFRSxNQUFGLEtBQWFELEVBQUVDLE1BQW5CLEVBQTJCO0FBQ3pCLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU9ILGdCQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLENBQVA7QUFDRDs7QUFFTSxTQUFTRixlQUFULENBQXlCSSxLQUF6QixFQUFnQ0MsS0FBaEMsRUFBdUM7QUFDNUMsTUFBSUEsTUFBTUYsTUFBTixHQUFlQyxNQUFNRCxNQUF6QixFQUFpQztBQUMvQixXQUFPLEtBQVA7QUFDRDs7QUFFRCxPQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsTUFBTUYsTUFBMUIsRUFBa0NHLEdBQWxDLEVBQXVDO0FBQ3JDLFFBQUlELE1BQU1DLENBQU4sTUFBYUYsTUFBTUUsQ0FBTixDQUFqQixFQUEyQjtBQUN6QixhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNEIiwiZmlsZSI6ImFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFycmF5RXF1YWwoYSwgYikge1xuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5U3RhcnRzV2l0aChhLCBiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5U3RhcnRzV2l0aChhcnJheSwgc3RhcnQpIHtcbiAgaWYgKHN0YXJ0Lmxlbmd0aCA+IGFycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3RhcnRbaV0gIT09IGFycmF5W2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/"use strict";

	exports.__esModule = true;
	exports. /*istanbul ignore end*/convertChangesToDMP = convertChangesToDMP;
	// See: http://code.google.com/p/google-diff-match-patch/wiki/API
	function convertChangesToDMP(changes) {
	  var ret = [],
	      change = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
	      operation = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
	  for (var i = 0; i < changes.length; i++) {
	    change = changes[i];
	    if (change.added) {
	      operation = 1;
	    } else if (change.removed) {
	      operation = -1;
	    } else {
	      operation = 0;
	    }

	    ret.push([operation, change.value]);
	  }
	  return ret;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L2RtcC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvRE1QIiwiY2hhbmdlcyIsInJldCIsImNoYW5nZSIsIm9wZXJhdGlvbiIsImkiLCJsZW5ndGgiLCJhZGRlZCIsInJlbW92ZWQiLCJwdXNoIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7OztnQ0FDZ0JBLG1CLEdBQUFBLG1CO0FBRGhCO0FBQ08sU0FBU0EsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDO0FBQzNDLE1BQUlDLE1BQU0sRUFBVjtBQUFBLE1BQ0lDLHdDQURKO0FBQUEsTUFFSUMsMkNBRko7QUFHQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosUUFBUUssTUFBNUIsRUFBb0NELEdBQXBDLEVBQXlDO0FBQ3ZDRixhQUFTRixRQUFRSSxDQUFSLENBQVQ7QUFDQSxRQUFJRixPQUFPSSxLQUFYLEVBQWtCO0FBQ2hCSCxrQkFBWSxDQUFaO0FBQ0QsS0FGRCxNQUVPLElBQUlELE9BQU9LLE9BQVgsRUFBb0I7QUFDekJKLGtCQUFZLENBQUMsQ0FBYjtBQUNELEtBRk0sTUFFQTtBQUNMQSxrQkFBWSxDQUFaO0FBQ0Q7O0FBRURGLFFBQUlPLElBQUosQ0FBUyxDQUFDTCxTQUFELEVBQVlELE9BQU9PLEtBQW5CLENBQVQ7QUFDRDtBQUNELFNBQU9SLEdBQVA7QUFDRCIsImZpbGUiOiJkbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWU6IGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtZGlmZi1tYXRjaC1wYXRjaC93aWtpL0FQSVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9ETVAoY2hhbmdlcykge1xuICBsZXQgcmV0ID0gW10sXG4gICAgICBjaGFuZ2UsXG4gICAgICBvcGVyYXRpb247XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNoYW5nZSA9IGNoYW5nZXNbaV07XG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgb3BlcmF0aW9uID0gMTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICBvcGVyYXRpb24gPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3BlcmF0aW9uID0gMDtcbiAgICB9XG5cbiAgICByZXQucHVzaChbb3BlcmF0aW9uLCBjaGFuZ2UudmFsdWVdKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIl19


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/*istanbul ignore start*/'use strict';

	exports.__esModule = true;
	exports. /*istanbul ignore end*/convertChangesToXML = convertChangesToXML;
	function convertChangesToXML(changes) {
	  var ret = [];
	  for (var i = 0; i < changes.length; i++) {
	    var change = changes[i];
	    if (change.added) {
	      ret.push('<ins>');
	    } else if (change.removed) {
	      ret.push('<del>');
	    }

	    ret.push(escapeHTML(change.value));

	    if (change.added) {
	      ret.push('</ins>');
	    } else if (change.removed) {
	      ret.push('</del>');
	    }
	  }
	  return ret.join('');
	}

	function escapeHTML(s) {
	  var n = s;
	  n = n.replace(/&/g, '&amp;');
	  n = n.replace(/</g, '&lt;');
	  n = n.replace(/>/g, '&gt;');
	  n = n.replace(/"/g, '&quot;');

	  return n;
	}
	

/***/ })
/******/ ])
});
;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(54);


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dom"]; }());

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return Object(arrayWithHoles["a" /* default */])(arr) || _iterableToArrayLimit(arr, i) || Object(nonIterableRest["a" /* default */])();
}

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ __webpack_exports__["a"] = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(89)();
}


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blob"]; }());

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "resetBlocks", function() { return resetBlocks; });
__webpack_require__.d(actions_namespaceObject, "receiveBlocks", function() { return receiveBlocks; });
__webpack_require__.d(actions_namespaceObject, "updateBlockAttributes", function() { return updateBlockAttributes; });
__webpack_require__.d(actions_namespaceObject, "updateBlock", function() { return updateBlock; });
__webpack_require__.d(actions_namespaceObject, "selectBlock", function() { return actions_selectBlock; });
__webpack_require__.d(actions_namespaceObject, "selectPreviousBlock", function() { return selectPreviousBlock; });
__webpack_require__.d(actions_namespaceObject, "selectNextBlock", function() { return selectNextBlock; });
__webpack_require__.d(actions_namespaceObject, "startMultiSelect", function() { return startMultiSelect; });
__webpack_require__.d(actions_namespaceObject, "stopMultiSelect", function() { return stopMultiSelect; });
__webpack_require__.d(actions_namespaceObject, "multiSelect", function() { return actions_multiSelect; });
__webpack_require__.d(actions_namespaceObject, "clearSelectedBlock", function() { return clearSelectedBlock; });
__webpack_require__.d(actions_namespaceObject, "toggleSelection", function() { return toggleSelection; });
__webpack_require__.d(actions_namespaceObject, "replaceBlocks", function() { return actions_replaceBlocks; });
__webpack_require__.d(actions_namespaceObject, "replaceBlock", function() { return replaceBlock; });
__webpack_require__.d(actions_namespaceObject, "moveBlocksDown", function() { return actions_moveBlocksDown; });
__webpack_require__.d(actions_namespaceObject, "moveBlocksUp", function() { return actions_moveBlocksUp; });
__webpack_require__.d(actions_namespaceObject, "moveBlockToPosition", function() { return moveBlockToPosition; });
__webpack_require__.d(actions_namespaceObject, "insertBlock", function() { return actions_insertBlock; });
__webpack_require__.d(actions_namespaceObject, "insertBlocks", function() { return actions_insertBlocks; });
__webpack_require__.d(actions_namespaceObject, "showInsertionPoint", function() { return actions_showInsertionPoint; });
__webpack_require__.d(actions_namespaceObject, "hideInsertionPoint", function() { return actions_hideInsertionPoint; });
__webpack_require__.d(actions_namespaceObject, "setTemplateValidity", function() { return setTemplateValidity; });
__webpack_require__.d(actions_namespaceObject, "synchronizeTemplate", function() { return synchronizeTemplate; });
__webpack_require__.d(actions_namespaceObject, "mergeBlocks", function() { return mergeBlocks; });
__webpack_require__.d(actions_namespaceObject, "removeBlocks", function() { return actions_removeBlocks; });
__webpack_require__.d(actions_namespaceObject, "removeBlock", function() { return removeBlock; });
__webpack_require__.d(actions_namespaceObject, "replaceInnerBlocks", function() { return actions_replaceInnerBlocks; });
__webpack_require__.d(actions_namespaceObject, "toggleBlockMode", function() { return toggleBlockMode; });
__webpack_require__.d(actions_namespaceObject, "startTyping", function() { return startTyping; });
__webpack_require__.d(actions_namespaceObject, "stopTyping", function() { return stopTyping; });
__webpack_require__.d(actions_namespaceObject, "enterFormattedText", function() { return enterFormattedText; });
__webpack_require__.d(actions_namespaceObject, "exitFormattedText", function() { return exitFormattedText; });
__webpack_require__.d(actions_namespaceObject, "insertDefaultBlock", function() { return actions_insertDefaultBlock; });
__webpack_require__.d(actions_namespaceObject, "updateBlockListSettings", function() { return updateBlockListSettings; });
__webpack_require__.d(actions_namespaceObject, "updateSettings", function() { return updateSettings; });
__webpack_require__.d(actions_namespaceObject, "__unstableSaveReusableBlock", function() { return __unstableSaveReusableBlock; });
__webpack_require__.d(actions_namespaceObject, "__unstableMarkLastChangeAsPersistent", function() { return __unstableMarkLastChangeAsPersistent; });
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "INSERTER_UTILITY_HIGH", function() { return INSERTER_UTILITY_HIGH; });
__webpack_require__.d(selectors_namespaceObject, "INSERTER_UTILITY_MEDIUM", function() { return INSERTER_UTILITY_MEDIUM; });
__webpack_require__.d(selectors_namespaceObject, "INSERTER_UTILITY_LOW", function() { return INSERTER_UTILITY_LOW; });
__webpack_require__.d(selectors_namespaceObject, "INSERTER_UTILITY_NONE", function() { return INSERTER_UTILITY_NONE; });
__webpack_require__.d(selectors_namespaceObject, "getBlockDependantsCacheBust", function() { return getBlockDependantsCacheBust; });
__webpack_require__.d(selectors_namespaceObject, "getBlockName", function() { return selectors_getBlockName; });
__webpack_require__.d(selectors_namespaceObject, "isBlockValid", function() { return selectors_isBlockValid; });
__webpack_require__.d(selectors_namespaceObject, "getBlockAttributes", function() { return getBlockAttributes; });
__webpack_require__.d(selectors_namespaceObject, "getBlock", function() { return selectors_getBlock; });
__webpack_require__.d(selectors_namespaceObject, "__unstableGetBlockWithoutInnerBlocks", function() { return selectors_unstableGetBlockWithoutInnerBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getBlocks", function() { return getBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsOfDescendants", function() { return selectors_getClientIdsOfDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsWithDescendants", function() { return getClientIdsWithDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getGlobalBlockCount", function() { return getGlobalBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getBlocksByClientId", function() { return selectors_getBlocksByClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockCount", function() { return selectors_getBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionStart", function() { return getBlockSelectionStart; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionEnd", function() { return getBlockSelectionEnd; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockCount", function() { return selectors_getSelectedBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedBlock", function() { return hasSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockClientId", function() { return selectors_getSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlock", function() { return selectors_getSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getBlockRootClientId", function() { return selectors_getBlockRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockHierarchyRootClientId", function() { return getBlockHierarchyRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getAdjacentBlockClientId", function() { return getAdjacentBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getPreviousBlockClientId", function() { return getPreviousBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getNextBlockClientId", function() { return getNextBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlocksInitialCaretPosition", function() { return selectors_getSelectedBlocksInitialCaretPosition; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlockClientIds", function() { return selectors_getMultiSelectedBlockClientIds; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocks", function() { return getMultiSelectedBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getFirstMultiSelectedBlockClientId", function() { return getFirstMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getLastMultiSelectedBlockClientId", function() { return getLastMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "isFirstMultiSelectedBlock", function() { return selectors_isFirstMultiSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockMultiSelected", function() { return selectors_isBlockMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "isAncestorMultiSelected", function() { return selectors_isAncestorMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksStartClientId", function() { return getMultiSelectedBlocksStartClientId; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksEndClientId", function() { return getMultiSelectedBlocksEndClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockOrder", function() { return selectors_getBlockOrder; });
__webpack_require__.d(selectors_namespaceObject, "getBlockIndex", function() { return selectors_getBlockIndex; });
__webpack_require__.d(selectors_namespaceObject, "isBlockSelected", function() { return selectors_isBlockSelected; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedInnerBlock", function() { return selectors_hasSelectedInnerBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockWithinSelection", function() { return isBlockWithinSelection; });
__webpack_require__.d(selectors_namespaceObject, "hasMultiSelection", function() { return selectors_hasMultiSelection; });
__webpack_require__.d(selectors_namespaceObject, "isMultiSelecting", function() { return selectors_isMultiSelecting; });
__webpack_require__.d(selectors_namespaceObject, "isSelectionEnabled", function() { return selectors_isSelectionEnabled; });
__webpack_require__.d(selectors_namespaceObject, "getBlockMode", function() { return selectors_getBlockMode; });
__webpack_require__.d(selectors_namespaceObject, "isTyping", function() { return selectors_isTyping; });
__webpack_require__.d(selectors_namespaceObject, "isCaretWithinFormattedText", function() { return selectors_isCaretWithinFormattedText; });
__webpack_require__.d(selectors_namespaceObject, "getBlockInsertionPoint", function() { return getBlockInsertionPoint; });
__webpack_require__.d(selectors_namespaceObject, "isBlockInsertionPointVisible", function() { return isBlockInsertionPointVisible; });
__webpack_require__.d(selectors_namespaceObject, "isValidTemplate", function() { return isValidTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplate", function() { return getTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplateLock", function() { return selectors_getTemplateLock; });
__webpack_require__.d(selectors_namespaceObject, "canInsertBlockType", function() { return selectors_canInsertBlockType; });
__webpack_require__.d(selectors_namespaceObject, "getInserterItems", function() { return selectors_getInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "hasInserterItems", function() { return hasInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "getBlockListSettings", function() { return getBlockListSettings; });
__webpack_require__.d(selectors_namespaceObject, "getSettings", function() { return selectors_getSettings; });
__webpack_require__.d(selectors_namespaceObject, "isLastBlockChangePersistent", function() { return isLastBlockChangePersistent; });
__webpack_require__.d(selectors_namespaceObject, "__unstableIsLastBlockChangeIgnored", function() { return __unstableIsLastBlockChangeIgnored; });

// EXTERNAL MODULE: external {"this":["wp","blocks"]}
var external_this_wp_blocks_ = __webpack_require__(14);

// EXTERNAL MODULE: external {"this":["wp","coreData"]}
var external_this_wp_coreData_ = __webpack_require__(72);

// EXTERNAL MODULE: external {"this":["wp","richText"]}
var external_this_wp_richText_ = __webpack_require__(20);

// EXTERNAL MODULE: external {"this":["wp","viewport"]}
var external_this_wp_viewport_ = __webpack_require__(40);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(15);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/store/defaults.js
/**
 * WordPress dependencies
 */

var PREFERENCES_DEFAULTS = {
  insertUsage: {}
};
/**
 * The default editor settings
 *
 *  alignWide                     boolean       Enable/Disable Wide/Full Alignments
 *  availableLegacyWidgets        Array         Array of objects representing the legacy widgets available.
 *  colors                        Array         Palette colors
 *  disableCustomColors           boolean       Whether or not the custom colors are disabled
 *  fontSizes                     Array         Available font sizes
 *  disableCustomFontSizes        boolean       Whether or not the custom font sizes are disabled
 *  imageSizes                    Array         Available image sizes
 *  maxWidth                      number        Max width to constraint resizing
 *  allowedBlockTypes             boolean|Array Allowed block types
 *  hasFixedToolbar               boolean       Whether or not the editor toolbar is fixed
 *  hasPermissionsToManageWidgets boolean       Whether or not the user is able to manage widgets.
 *  focusMode                     boolean       Whether the focus mode is enabled or not
 *  styles                        Array         Editor Styles
 *  isRTL                         boolean       Whether the editor is in RTL mode
 *  bodyPlaceholder               string        Empty post placeholder
 *  titlePlaceholder              string        Empty title placeholder
 */

var SETTINGS_DEFAULTS = {
  alignWide: false,
  colors: [{
    name: Object(external_this_wp_i18n_["__"])('Pale pink'),
    slug: 'pale-pink',
    color: '#f78da7'
  }, {
    name: Object(external_this_wp_i18n_["__"])('Vivid red'),
    slug: 'vivid-red',
    color: '#cf2e2e'
  }, {
    name: Object(external_this_wp_i18n_["__"])('Luminous vivid orange'),
    slug: 'luminous-vivid-orange',
    color: '#ff6900'
  }, {
    name: Object(external_this_wp_i18n_["__"])('Luminous vivid amber'),
    slug: 'luminous-vivid-amber',
    color: '#fcb900'
  }, {
    name: Object(external_this_wp_i18n_["__"])('Light green cyan'),
    slug: 'light-green-cyan',
    color: '#7bdcb5'
  }, {
    name: Object(external_this_wp_i18n_["__"])('Vivid green cyan'),
    slug: 'vivid-green-cyan',
    color: '#00d084'
  }, {
    name: Object(external_this_wp_i18n_["__"])('Pale cyan blue'),
    slug: 'pale-cyan-blue',
    color: '#8ed1fc'
  }, {
    name: Object(external_this_wp_i18n_["__"])('Vivid cyan blue'),
    slug: 'vivid-cyan-blue',
    color: '#0693e3'
  }, {
    name: Object(external_this_wp_i18n_["__"])('Very light gray'),
    slug: 'very-light-gray',
    color: '#eeeeee'
  }, {
    name: Object(external_this_wp_i18n_["__"])('Cyan bluish gray'),
    slug: 'cyan-bluish-gray',
    color: '#abb8c3'
  }, {
    name: Object(external_this_wp_i18n_["__"])('Very dark gray'),
    slug: 'very-dark-gray',
    color: '#313131'
  }],
  fontSizes: [{
    name: Object(external_this_wp_i18n_["_x"])('Small', 'font size name'),
    size: 13,
    slug: 'small'
  }, {
    name: Object(external_this_wp_i18n_["_x"])('Normal', 'font size name'),
    size: 16,
    slug: 'normal'
  }, {
    name: Object(external_this_wp_i18n_["_x"])('Medium', 'font size name'),
    size: 20,
    slug: 'medium'
  }, {
    name: Object(external_this_wp_i18n_["_x"])('Large', 'font size name'),
    size: 36,
    slug: 'large'
  }, {
    name: Object(external_this_wp_i18n_["_x"])('Huge', 'font size name'),
    size: 48,
    slug: 'huge'
  }],
  imageSizes: [{
    slug: 'thumbnail',
    label: Object(external_this_wp_i18n_["__"])('Thumbnail')
  }, {
    slug: 'medium',
    label: Object(external_this_wp_i18n_["__"])('Medium')
  }, {
    slug: 'large',
    label: Object(external_this_wp_i18n_["__"])('Large')
  }, {
    slug: 'full',
    label: Object(external_this_wp_i18n_["__"])('Full Size')
  }],
  // This is current max width of the block inner area
  // It's used to constraint image resizing and this value could be overridden later by themes
  maxWidth: 580,
  // Allowed block types for the editor, defaulting to true (all supported).
  allowedBlockTypes: true,
  // Maximum upload size in bytes allowed for the site.
  maxUploadFileSize: 0,
  // List of allowed mime types and file extensions.
  allowedMimeTypes: null,
  availableLegacyWidgets: {},
  hasPermissionsToManageWidgets: false
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/store/array.js


/**
 * External dependencies
 */

/**
 * Insert one or multiple elements into a given position of an array.
 *
 * @param {Array}  array    Source array.
 * @param {*}      elements Elements to insert.
 * @param {number} index    Insert Position.
 *
 * @return {Array}          Result.
 */

function insertAt(array, elements, index) {
  return [].concat(Object(toConsumableArray["a" /* default */])(array.slice(0, index)), Object(toConsumableArray["a" /* default */])(Object(external_lodash_["castArray"])(elements)), Object(toConsumableArray["a" /* default */])(array.slice(index)));
}
/**
 * Moves an element in an array.
 *
 * @param {Array}  array Source array.
 * @param {number} from  Source index.
 * @param {number} to    Destination index.
 * @param {number} count Number of elements to move.
 *
 * @return {Array}       Result.
 */

function moveTo(array, from, to) {
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  var withoutMovedElements = Object(toConsumableArray["a" /* default */])(array);

  withoutMovedElements.splice(from, count);
  return insertAt(withoutMovedElements, array.slice(from, from + count), to);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/store/reducer.js





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/**
 * Given an array of blocks, returns an object where each key is a nesting
 * context, the value of which is an array of block client IDs existing within
 * that nesting context.
 *
 * @param {Array}   blocks       Blocks to map.
 * @param {?string} rootClientId Assumed root client ID.
 *
 * @return {Object} Block order map object.
 */

function mapBlockOrder(blocks) {
  var rootClientId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var result = Object(defineProperty["a" /* default */])({}, rootClientId, []);

  blocks.forEach(function (block) {
    var clientId = block.clientId,
        innerBlocks = block.innerBlocks;
    result[rootClientId].push(clientId);
    Object.assign(result, mapBlockOrder(innerBlocks, clientId));
  });
  return result;
}
/**
 * Helper method to iterate through all blocks, recursing into inner blocks,
 * applying a transformation function to each one.
 * Returns a flattened object with the transformed blocks.
 *
 * @param {Array} blocks Blocks to flatten.
 * @param {Function} transform Transforming function to be applied to each block.
 *
 * @return {Object} Flattened object.
 */


function flattenBlocks(blocks, transform) {
  var result = {};

  var stack = Object(toConsumableArray["a" /* default */])(blocks);

  while (stack.length) {
    var _stack$shift = stack.shift(),
        innerBlocks = _stack$shift.innerBlocks,
        block = Object(objectWithoutProperties["a" /* default */])(_stack$shift, ["innerBlocks"]);

    stack.push.apply(stack, Object(toConsumableArray["a" /* default */])(innerBlocks));
    result[block.clientId] = transform(block);
  }

  return result;
}
/**
 * Given an array of blocks, returns an object containing all blocks, without
 * attributes, recursing into inner blocks. Keys correspond to the block client
 * ID, the value of which is the attributes object.
 *
 * @param {Array} blocks Blocks to flatten.
 *
 * @return {Object} Flattened block attributes object.
 */


function getFlattenedBlocksWithoutAttributes(blocks) {
  return flattenBlocks(blocks, function (block) {
    return Object(external_lodash_["omit"])(block, 'attributes');
  });
}
/**
 * Given an array of blocks, returns an object containing all block attributes,
 * recursing into inner blocks. Keys correspond to the block client ID, the
 * value of which is the attributes object.
 *
 * @param {Array} blocks Blocks to flatten.
 *
 * @return {Object} Flattened block attributes object.
 */


function getFlattenedBlockAttributes(blocks) {
  return flattenBlocks(blocks, function (block) {
    return block.attributes;
  });
}
/**
 * Given a block order map object, returns *all* of the block client IDs that are
 * a descendant of the given root client ID.
 *
 * Calling this with `rootClientId` set to `''` results in a list of client IDs
 * that are in the post. That is, it excludes blocks like fetched reusable
 * blocks which are stored into state but not visible.
 *
 * @param {Object}  blocksOrder  Object that maps block client IDs to a list of
 *                               nested block client IDs.
 * @param {?string} rootClientId The root client ID to search. Defaults to ''.
 *
 * @return {Array} List of descendant client IDs.
 */


function getNestedBlockClientIds(blocksOrder) {
  var rootClientId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return Object(external_lodash_["reduce"])(blocksOrder[rootClientId], function (result, clientId) {
    return [].concat(Object(toConsumableArray["a" /* default */])(result), [clientId], Object(toConsumableArray["a" /* default */])(getNestedBlockClientIds(blocksOrder, clientId)));
  }, []);
}
/**
 * Returns an object against which it is safe to perform mutating operations,
 * given the original object and its current working copy.
 *
 * @param {Object} original Original object.
 * @param {Object} working  Working object.
 *
 * @return {Object} Mutation-safe object.
 */


function getMutateSafeObject(original, working) {
  if (original === working) {
    return Object(objectSpread["a" /* default */])({}, original);
  }

  return working;
}
/**
 * Returns true if the two object arguments have the same keys, or false
 * otherwise.
 *
 * @param {Object} a First object.
 * @param {Object} b Second object.
 *
 * @return {boolean} Whether the two objects have the same keys.
 */


function hasSameKeys(a, b) {
  return Object(external_lodash_["isEqual"])(Object(external_lodash_["keys"])(a), Object(external_lodash_["keys"])(b));
}
/**
 * Returns true if, given the currently dispatching action and the previously
 * dispatched action, the two actions are updating the same block attribute, or
 * false otherwise.
 *
 * @param {Object} action     Currently dispatching action.
 * @param {Object} lastAction Previously dispatched action.
 *
 * @return {boolean} Whether actions are updating the same block attribute.
 */

function isUpdatingSameBlockAttribute(action, lastAction) {
  return action.type === 'UPDATE_BLOCK_ATTRIBUTES' && lastAction !== undefined && lastAction.type === 'UPDATE_BLOCK_ATTRIBUTES' && action.clientId === lastAction.clientId && hasSameKeys(action.attributes, lastAction.attributes);
}
/**
 * Higher-order reducer intended to augment the blocks reducer, assigning an
 * `isPersistentChange` property value corresponding to whether a change in
 * state can be considered as persistent. All changes are considered persistent
 * except when updating the same block attribute as in the previous action.
 *
 * @param {Function} reducer Original reducer function.
 *
 * @return {Function} Enhanced reducer function.
 */

function withPersistentBlockChange(reducer) {
  var lastAction;
  return function (state, action) {
    var nextState = reducer(state, action);
    var isExplicitPersistentChange = action.type === 'MARK_LAST_CHANGE_AS_PERSISTENT'; // Defer to previous state value (or default) unless changing or
    // explicitly marking as persistent.

    if (state === nextState && !isExplicitPersistentChange) {
      var nextIsPersistentChange = Object(external_lodash_["get"])(state, ['isPersistentChange'], true);

      if (state.isPersistentChange === nextIsPersistentChange) {
        return state;
      }

      return Object(objectSpread["a" /* default */])({}, nextState, {
        isPersistentChange: nextIsPersistentChange
      });
    }

    nextState = Object(objectSpread["a" /* default */])({}, nextState, {
      isPersistentChange: isExplicitPersistentChange || !isUpdatingSameBlockAttribute(action, lastAction)
    }); // In comparing against the previous action, consider only those which
    // would have qualified as one which would have been ignored or not
    // have resulted in a changed state.

    lastAction = action;
    return nextState;
  };
}
/**
 * Higher-order reducer intended to augment the blocks reducer, assigning an
 * `isIgnoredChange` property value corresponding to whether a change in state
 * can be considered as ignored. A change is considered ignored when the result
 * of an action not incurred by direct user interaction.
 *
 * @param {Function} reducer Original reducer function.
 *
 * @return {Function} Enhanced reducer function.
 */


function withIgnoredBlockChange(reducer) {
  /**
   * Set of action types for which a blocks state change should be ignored.
   *
   * @type {Set}
   */
  var IGNORED_ACTION_TYPES = new Set(['RECEIVE_BLOCKS']);
  return function (state, action) {
    var nextState = reducer(state, action);

    if (nextState !== state) {
      nextState.isIgnoredChange = IGNORED_ACTION_TYPES.has(action.type);
    }

    return nextState;
  };
}
/**
 * Higher-order reducer targeting the combined blocks reducer, augmenting
 * block client IDs in remove action to include cascade of inner blocks.
 *
 * @param {Function} reducer Original reducer function.
 *
 * @return {Function} Enhanced reducer function.
 */


var reducer_withInnerBlocksRemoveCascade = function withInnerBlocksRemoveCascade(reducer) {
  return function (state, action) {
    if (state && action.type === 'REMOVE_BLOCKS') {
      var clientIds = Object(toConsumableArray["a" /* default */])(action.clientIds); // For each removed client ID, include its inner blocks to remove,
      // recursing into those so long as inner blocks exist.


      for (var i = 0; i < clientIds.length; i++) {
        clientIds.push.apply(clientIds, Object(toConsumableArray["a" /* default */])(state.order[clientIds[i]]));
      }

      action = Object(objectSpread["a" /* default */])({}, action, {
        clientIds: clientIds
      });
    }

    return reducer(state, action);
  };
};
/**
 * Higher-order reducer which targets the combined blocks reducer and handles
 * the `RESET_BLOCKS` action. When dispatched, this action will replace all
 * blocks that exist in the post, leaving blocks that exist only in state (e.g.
 * reusable blocks) alone.
 *
 * @param {Function} reducer Original reducer function.
 *
 * @return {Function} Enhanced reducer function.
 */


var reducer_withBlockReset = function withBlockReset(reducer) {
  return function (state, action) {
    if (state && action.type === 'RESET_BLOCKS') {
      var visibleClientIds = getNestedBlockClientIds(state.order);
      return Object(objectSpread["a" /* default */])({}, state, {
        byClientId: Object(objectSpread["a" /* default */])({}, Object(external_lodash_["omit"])(state.byClientId, visibleClientIds), getFlattenedBlocksWithoutAttributes(action.blocks)),
        attributes: Object(objectSpread["a" /* default */])({}, Object(external_lodash_["omit"])(state.attributes, visibleClientIds), getFlattenedBlockAttributes(action.blocks)),
        order: Object(objectSpread["a" /* default */])({}, Object(external_lodash_["omit"])(state.order, visibleClientIds), mapBlockOrder(action.blocks))
      });
    }

    return reducer(state, action);
  };
};
/**
 * Higher-order reducer which targets the combined blocks reducer and handles
 * the `REPLACE_INNER_BLOCKS` action. When dispatched, this action the state should become equivalent
 * to the execution of a `REMOVE_BLOCKS` action containing all the child's of the root block followed by
 * the execution of `INSERT_BLOCKS` with the new blocks.
 *
 * @param {Function} reducer Original reducer function.
 *
 * @return {Function} Enhanced reducer function.
 */


var reducer_withReplaceInnerBlocks = function withReplaceInnerBlocks(reducer) {
  return function (state, action) {
    if (action.type !== 'REPLACE_INNER_BLOCKS') {
      return reducer(state, action);
    }

    var stateAfterBlocksRemoval = state;

    if (state.order[action.rootClientId]) {
      stateAfterBlocksRemoval = reducer(stateAfterBlocksRemoval, {
        type: 'REMOVE_BLOCKS',
        clientIds: state.order[action.rootClientId]
      });
    }

    var stateAfterInsert = stateAfterBlocksRemoval;

    if (action.blocks.length) {
      stateAfterInsert = reducer(stateAfterInsert, Object(objectSpread["a" /* default */])({}, action, {
        type: 'INSERT_BLOCKS',
        index: 0
      }));
    }

    return stateAfterInsert;
  };
};
/**
 * Higher-order reducer which targets the combined blocks reducer and handles
 * the `SAVE_REUSABLE_BLOCK_SUCCESS` action. This action can't be handled by
 * regular reducers and needs a higher-order reducer since it needs access to
 * both `byClientId` and `attributes` simultaneously.
 *
 * @param {Function} reducer Original reducer function.
 *
 * @return {Function} Enhanced reducer function.
 */


var reducer_withSaveReusableBlock = function withSaveReusableBlock(reducer) {
  return function (state, action) {
    if (state && action.type === 'SAVE_REUSABLE_BLOCK_SUCCESS') {
      var id = action.id,
          updatedId = action.updatedId; // If a temporary reusable block is saved, we swap the temporary id with the final one

      if (id === updatedId) {
        return state;
      }

      state = Object(objectSpread["a" /* default */])({}, state);
      state.attributes = Object(external_lodash_["mapValues"])(state.attributes, function (attributes, clientId) {
        var name = state.byClientId[clientId].name;

        if (name === 'core/block' && attributes.ref === id) {
          return Object(objectSpread["a" /* default */])({}, attributes, {
            ref: updatedId
          });
        }

        return attributes;
      });
    }

    return reducer(state, action);
  };
};
/**
 * Reducer returning the blocks state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @returns {Object} Updated state.
 */


var reducer_blocks = Object(external_lodash_["flow"])(external_this_wp_data_["combineReducers"], reducer_withInnerBlocksRemoveCascade, reducer_withReplaceInnerBlocks, // needs to be after withInnerBlocksRemoveCascade
reducer_withBlockReset, reducer_withSaveReusableBlock, withPersistentBlockChange, withIgnoredBlockChange)({
  byClientId: function byClientId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'RESET_BLOCKS':
        return getFlattenedBlocksWithoutAttributes(action.blocks);

      case 'RECEIVE_BLOCKS':
        return Object(objectSpread["a" /* default */])({}, state, getFlattenedBlocksWithoutAttributes(action.blocks));

      case 'UPDATE_BLOCK':
        // Ignore updates if block isn't known
        if (!state[action.clientId]) {
          return state;
        } // Do nothing if only attributes change.


        var changes = Object(external_lodash_["omit"])(action.updates, 'attributes');

        if (Object(external_lodash_["isEmpty"])(changes)) {
          return state;
        }

        return Object(objectSpread["a" /* default */])({}, state, Object(defineProperty["a" /* default */])({}, action.clientId, Object(objectSpread["a" /* default */])({}, state[action.clientId], changes)));

      case 'INSERT_BLOCKS':
        return Object(objectSpread["a" /* default */])({}, state, getFlattenedBlocksWithoutAttributes(action.blocks));

      case 'REPLACE_BLOCKS':
        if (!action.blocks) {
          return state;
        }

        return Object(objectSpread["a" /* default */])({}, Object(external_lodash_["omit"])(state, action.clientIds), getFlattenedBlocksWithoutAttributes(action.blocks));

      case 'REMOVE_BLOCKS':
        return Object(external_lodash_["omit"])(state, action.clientIds);
    }

    return state;
  },
  attributes: function attributes() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'RESET_BLOCKS':
        return getFlattenedBlockAttributes(action.blocks);

      case 'RECEIVE_BLOCKS':
        return Object(objectSpread["a" /* default */])({}, state, getFlattenedBlockAttributes(action.blocks));

      case 'UPDATE_BLOCK':
        // Ignore updates if block isn't known or there are no attribute changes.
        if (!state[action.clientId] || !action.updates.attributes) {
          return state;
        }

        return Object(objectSpread["a" /* default */])({}, state, Object(defineProperty["a" /* default */])({}, action.clientId, Object(objectSpread["a" /* default */])({}, state[action.clientId], action.updates.attributes)));

      case 'UPDATE_BLOCK_ATTRIBUTES':
        // Ignore updates if block isn't known
        if (!state[action.clientId]) {
          return state;
        } // Consider as updates only changed values


        var nextAttributes = Object(external_lodash_["reduce"])(action.attributes, function (result, value, key) {
          if (value !== result[key]) {
            result = getMutateSafeObject(state[action.clientId], result);
            result[key] = value;
          }

          return result;
        }, state[action.clientId]); // Skip update if nothing has been changed. The reference will
        // match the original block if `reduce` had no changed values.

        if (nextAttributes === state[action.clientId]) {
          return state;
        } // Otherwise replace attributes in state


        return Object(objectSpread["a" /* default */])({}, state, Object(defineProperty["a" /* default */])({}, action.clientId, nextAttributes));

      case 'INSERT_BLOCKS':
        return Object(objectSpread["a" /* default */])({}, state, getFlattenedBlockAttributes(action.blocks));

      case 'REPLACE_BLOCKS':
        if (!action.blocks) {
          return state;
        }

        return Object(objectSpread["a" /* default */])({}, Object(external_lodash_["omit"])(state, action.clientIds), getFlattenedBlockAttributes(action.blocks));

      case 'REMOVE_BLOCKS':
        return Object(external_lodash_["omit"])(state, action.clientIds);
    }

    return state;
  },
  order: function order() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'RESET_BLOCKS':
        return mapBlockOrder(action.blocks);

      case 'RECEIVE_BLOCKS':
        return Object(objectSpread["a" /* default */])({}, state, Object(external_lodash_["omit"])(mapBlockOrder(action.blocks), ''));

      case 'INSERT_BLOCKS':
        {
          var _action$rootClientId = action.rootClientId,
              rootClientId = _action$rootClientId === void 0 ? '' : _action$rootClientId;
          var subState = state[rootClientId] || [];
          var mappedBlocks = mapBlockOrder(action.blocks, rootClientId);
          var _action$index = action.index,
              index = _action$index === void 0 ? subState.length : _action$index;
          return Object(objectSpread["a" /* default */])({}, state, mappedBlocks, Object(defineProperty["a" /* default */])({}, rootClientId, insertAt(subState, mappedBlocks[rootClientId], index)));
        }

      case 'MOVE_BLOCK_TO_POSITION':
        {
          var _objectSpread7;

          var _action$fromRootClien = action.fromRootClientId,
              fromRootClientId = _action$fromRootClien === void 0 ? '' : _action$fromRootClien,
              _action$toRootClientI = action.toRootClientId,
              toRootClientId = _action$toRootClientI === void 0 ? '' : _action$toRootClientI,
              clientId = action.clientId;

          var _action$index2 = action.index,
              _index = _action$index2 === void 0 ? state[toRootClientId].length : _action$index2; // Moving inside the same parent block


          if (fromRootClientId === toRootClientId) {
            var _subState = state[toRootClientId];

            var fromIndex = _subState.indexOf(clientId);

            return Object(objectSpread["a" /* default */])({}, state, Object(defineProperty["a" /* default */])({}, toRootClientId, moveTo(state[toRootClientId], fromIndex, _index)));
          } // Moving from a parent block to another


          return Object(objectSpread["a" /* default */])({}, state, (_objectSpread7 = {}, Object(defineProperty["a" /* default */])(_objectSpread7, fromRootClientId, Object(external_lodash_["without"])(state[fromRootClientId], clientId)), Object(defineProperty["a" /* default */])(_objectSpread7, toRootClientId, insertAt(state[toRootClientId], clientId, _index)), _objectSpread7));
        }

      case 'MOVE_BLOCKS_UP':
        {
          var clientIds = action.clientIds,
              _action$rootClientId2 = action.rootClientId,
              _rootClientId = _action$rootClientId2 === void 0 ? '' : _action$rootClientId2;

          var firstClientId = Object(external_lodash_["first"])(clientIds);
          var _subState2 = state[_rootClientId];

          if (!_subState2.length || firstClientId === Object(external_lodash_["first"])(_subState2)) {
            return state;
          }

          var firstIndex = _subState2.indexOf(firstClientId);

          return Object(objectSpread["a" /* default */])({}, state, Object(defineProperty["a" /* default */])({}, _rootClientId, moveTo(_subState2, firstIndex, firstIndex - 1, clientIds.length)));
        }

      case 'MOVE_BLOCKS_DOWN':
        {
          var _clientIds = action.clientIds,
              _action$rootClientId3 = action.rootClientId,
              _rootClientId2 = _action$rootClientId3 === void 0 ? '' : _action$rootClientId3;

          var _firstClientId = Object(external_lodash_["first"])(_clientIds);

          var lastClientId = Object(external_lodash_["last"])(_clientIds);
          var _subState3 = state[_rootClientId2];

          if (!_subState3.length || lastClientId === Object(external_lodash_["last"])(_subState3)) {
            return state;
          }

          var _firstIndex = _subState3.indexOf(_firstClientId);

          return Object(objectSpread["a" /* default */])({}, state, Object(defineProperty["a" /* default */])({}, _rootClientId2, moveTo(_subState3, _firstIndex, _firstIndex + 1, _clientIds.length)));
        }

      case 'REPLACE_BLOCKS':
        {
          var _clientIds2 = action.clientIds;

          if (!action.blocks) {
            return state;
          }

          var _mappedBlocks = mapBlockOrder(action.blocks);

          return Object(external_lodash_["flow"])([function (nextState) {
            return Object(external_lodash_["omit"])(nextState, _clientIds2);
          }, function (nextState) {
            return Object(objectSpread["a" /* default */])({}, nextState, Object(external_lodash_["omit"])(_mappedBlocks, ''));
          }, function (nextState) {
            return Object(external_lodash_["mapValues"])(nextState, function (subState) {
              return Object(external_lodash_["reduce"])(subState, function (result, clientId) {
                if (clientId === _clientIds2[0]) {
                  return [].concat(Object(toConsumableArray["a" /* default */])(result), Object(toConsumableArray["a" /* default */])(_mappedBlocks['']));
                }

                if (_clientIds2.indexOf(clientId) === -1) {
                  result.push(clientId);
                }

                return result;
              }, []);
            });
          }])(state);
        }

      case 'REMOVE_BLOCKS':
        return Object(external_lodash_["flow"])([// Remove inner block ordering for removed blocks
        function (nextState) {
          return Object(external_lodash_["omit"])(nextState, action.clientIds);
        }, // Remove deleted blocks from other blocks' orderings
        function (nextState) {
          return Object(external_lodash_["mapValues"])(nextState, function (subState) {
            return external_lodash_["without"].apply(void 0, [subState].concat(Object(toConsumableArray["a" /* default */])(action.clientIds)));
          });
        }])(state);
    }

    return state;
  }
});
/**
 * Reducer returning typing state.
 *
 * @param {boolean} state  Current state.
 * @param {Object}  action Dispatched action.
 *
 * @return {boolean} Updated state.
 */

function reducer_isTyping() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'START_TYPING':
      return true;

    case 'STOP_TYPING':
      return false;
  }

  return state;
}
/**
 * Reducer returning whether the caret is within formatted text.
 *
 * @param {boolean} state  Current state.
 * @param {Object}  action Dispatched action.
 *
 * @return {boolean} Updated state.
 */

function reducer_isCaretWithinFormattedText() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ENTER_FORMATTED_TEXT':
      return true;

    case 'EXIT_FORMATTED_TEXT':
      return false;
  }

  return state;
}
/**
 * Reducer returning the block selection's state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function blockSelection() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    start: null,
    end: null,
    isMultiSelecting: false,
    isEnabled: true,
    initialPosition: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CLEAR_SELECTED_BLOCK':
      if (state.start === null && state.end === null && !state.isMultiSelecting) {
        return state;
      }

      return Object(objectSpread["a" /* default */])({}, state, {
        start: null,
        end: null,
        isMultiSelecting: false,
        initialPosition: null
      });

    case 'START_MULTI_SELECT':
      if (state.isMultiSelecting) {
        return state;
      }

      return Object(objectSpread["a" /* default */])({}, state, {
        isMultiSelecting: true,
        initialPosition: null
      });

    case 'STOP_MULTI_SELECT':
      if (!state.isMultiSelecting) {
        return state;
      }

      return Object(objectSpread["a" /* default */])({}, state, {
        isMultiSelecting: false,
        initialPosition: null
      });

    case 'MULTI_SELECT':
      return Object(objectSpread["a" /* default */])({}, state, {
        start: action.start,
        end: action.end,
        initialPosition: null
      });

    case 'SELECT_BLOCK':
      if (action.clientId === state.start && action.clientId === state.end) {
        return state;
      }

      return Object(objectSpread["a" /* default */])({}, state, {
        start: action.clientId,
        end: action.clientId,
        initialPosition: action.initialPosition
      });

    case 'REPLACE_INNER_BLOCKS': // REPLACE_INNER_BLOCKS and INSERT_BLOCKS should follow the same logic.

    case 'INSERT_BLOCKS':
      {
        if (action.updateSelection) {
          return Object(objectSpread["a" /* default */])({}, state, {
            start: action.blocks[0].clientId,
            end: action.blocks[0].clientId,
            initialPosition: null,
            isMultiSelecting: false
          });
        }

        return state;
      }

    case 'REMOVE_BLOCKS':
      if (!action.clientIds || !action.clientIds.length || action.clientIds.indexOf(state.start) === -1) {
        return state;
      }

      return Object(objectSpread["a" /* default */])({}, state, {
        start: null,
        end: null,
        initialPosition: null,
        isMultiSelecting: false
      });

    case 'REPLACE_BLOCKS':
      if (action.clientIds.indexOf(state.start) === -1) {
        return state;
      } // If there are replacement blocks, assign last block as the next
      // selected block, otherwise set to null.


      var lastBlock = Object(external_lodash_["last"])(action.blocks);
      var nextSelectedBlockClientId = lastBlock ? lastBlock.clientId : null;

      if (nextSelectedBlockClientId === state.start && nextSelectedBlockClientId === state.end) {
        return state;
      }

      return Object(objectSpread["a" /* default */])({}, state, {
        start: nextSelectedBlockClientId,
        end: nextSelectedBlockClientId,
        initialPosition: null,
        isMultiSelecting: false
      });

    case 'TOGGLE_SELECTION':
      return Object(objectSpread["a" /* default */])({}, state, {
        isEnabled: action.isSelectionEnabled
      });
  }

  return state;
}
function blocksMode() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'TOGGLE_BLOCK_MODE') {
    var clientId = action.clientId;
    return Object(objectSpread["a" /* default */])({}, state, Object(defineProperty["a" /* default */])({}, clientId, state[clientId] && state[clientId] === 'html' ? 'visual' : 'html'));
  }

  return state;
}
/**
 * Reducer returning the block insertion point visibility, either null if there
 * is not an explicit insertion point assigned, or an object of its `index` and
 * `rootClientId`.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function insertionPoint() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SHOW_INSERTION_POINT':
      var rootClientId = action.rootClientId,
          index = action.index;
      return {
        rootClientId: rootClientId,
        index: index
      };

    case 'HIDE_INSERTION_POINT':
      return null;
  }

  return state;
}
/**
 * Reducer returning whether the post blocks match the defined template or not.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {boolean} Updated state.
 */

function reducer_template() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isValid: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_TEMPLATE_VALIDITY':
      return Object(objectSpread["a" /* default */])({}, state, {
        isValid: action.isValid
      });
  }

  return state;
}
/**
 * Reducer returning the editor setting.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_settings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SETTINGS_DEFAULTS;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return Object(objectSpread["a" /* default */])({}, state, action.settings);
  }

  return state;
}
/**
 * Reducer returning the user preferences.
 *
 * @param {Object}  state                 Current state.
 * @param {Object}  action                Dispatched action.
 *
 * @return {string} Updated state.
 */

function preferences() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PREFERENCES_DEFAULTS;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INSERT_BLOCKS':
    case 'REPLACE_BLOCKS':
      return action.blocks.reduce(function (prevState, block) {
        var id = block.name;
        var insert = {
          name: block.name
        };

        if (Object(external_this_wp_blocks_["isReusableBlock"])(block)) {
          insert.ref = block.attributes.ref;
          id += '/' + block.attributes.ref;
        }

        return Object(objectSpread["a" /* default */])({}, prevState, {
          insertUsage: Object(objectSpread["a" /* default */])({}, prevState.insertUsage, Object(defineProperty["a" /* default */])({}, id, {
            time: action.time,
            count: prevState.insertUsage[id] ? prevState.insertUsage[id].count + 1 : 1,
            insert: insert
          }))
        });
      }, state);
  }

  return state;
}
/**
 * Reducer returning an object where each key is a block client ID, its value
 * representing the settings for its nested blocks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var reducer_blockListSettings = function blockListSettings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    // Even if the replaced blocks have the same client ID, our logic
    // should correct the state.
    case 'REPLACE_BLOCKS':
    case 'REMOVE_BLOCKS':
      {
        return Object(external_lodash_["omit"])(state, action.clientIds);
      }

    case 'UPDATE_BLOCK_LIST_SETTINGS':
      {
        var clientId = action.clientId;

        if (!action.settings) {
          if (state.hasOwnProperty(clientId)) {
            return Object(external_lodash_["omit"])(state, clientId);
          }

          return state;
        }

        if (Object(external_lodash_["isEqual"])(state[clientId], action.settings)) {
          return state;
        }

        return Object(objectSpread["a" /* default */])({}, state, Object(defineProperty["a" /* default */])({}, clientId, action.settings));
      }
  }

  return state;
};
/* harmony default export */ var store_reducer = (Object(external_this_wp_data_["combineReducers"])({
  blocks: reducer_blocks,
  isTyping: reducer_isTyping,
  isCaretWithinFormattedText: reducer_isCaretWithinFormattedText,
  blockSelection: blockSelection,
  blocksMode: blocksMode,
  blockListSettings: reducer_blockListSettings,
  insertionPoint: insertionPoint,
  template: reducer_template,
  settings: reducer_settings,
  preferences: preferences
}));

// EXTERNAL MODULE: ./node_modules/refx/refx.js
var refx = __webpack_require__(70);
var refx_default = /*#__PURE__*/__webpack_require__.n(refx);

// EXTERNAL MODULE: ./node_modules/redux-multi/lib/index.js
var lib = __webpack_require__(97);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(28);

// EXTERNAL MODULE: external {"this":["wp","a11y"]}
var external_this_wp_a11y_ = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(23);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/store/controls.js


/**
 * WordPress dependencies
 */

/**
 * Calls a selector using the current state.
 *
 * @param {string} storeName    Store name.
 * @param {string} selectorName Selector name.
 * @param  {Array} args         Selector arguments.
 *
 * @return {Object} control descriptor.
 */

function controls_select(storeName, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return {
    type: 'SELECT',
    storeName: storeName,
    selectorName: selectorName,
    args: args
  };
}
var controls_controls = {
  SELECT: Object(external_this_wp_data_["createRegistryControl"])(function (registry) {
    return function (_ref) {
      var _registry$select;

      var storeName = _ref.storeName,
          selectorName = _ref.selectorName,
          args = _ref.args;
      return (_registry$select = registry.select(storeName))[selectorName].apply(_registry$select, Object(toConsumableArray["a" /* default */])(args));
    };
  })
};
/* harmony default export */ var store_controls = (controls_controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/store/actions.js


var _marked =
/*#__PURE__*/
regenerator_default.a.mark(ensureDefaultBlock),
    _marked2 =
/*#__PURE__*/
regenerator_default.a.mark(selectPreviousBlock),
    _marked3 =
/*#__PURE__*/
regenerator_default.a.mark(selectNextBlock),
    _marked4 =
/*#__PURE__*/
regenerator_default.a.mark(actions_replaceBlocks),
    _marked5 =
/*#__PURE__*/
regenerator_default.a.mark(moveBlockToPosition),
    _marked6 =
/*#__PURE__*/
regenerator_default.a.mark(actions_insertBlocks),
    _marked7 =
/*#__PURE__*/
regenerator_default.a.mark(actions_removeBlocks);

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Generator which will yield a default block insert action if there
 * are no other blocks at the root of the editor. This generator should be used
 * in actions which may result in no blocks remaining in the editor (removal,
 * replacement, etc).
 */

function ensureDefaultBlock() {
  var count;
  return regenerator_default.a.wrap(function ensureDefaultBlock$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return controls_select('core/block-editor', 'getBlockCount');

        case 2:
          count = _context.sent;

          if (!(count === 0)) {
            _context.next = 6;
            break;
          }

          _context.next = 6;
          return actions_insertDefaultBlock();

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
/**
 * Returns an action object used in signalling that blocks state should be
 * reset to the specified array of blocks, taking precedence over any other
 * content reflected as an edit in state.
 *
 * @param {Array} blocks Array of blocks.
 *
 * @return {Object} Action object.
 */


function resetBlocks(blocks) {
  return {
    type: 'RESET_BLOCKS',
    blocks: blocks
  };
}
/**
 * Returns an action object used in signalling that blocks have been received.
 * Unlike resetBlocks, these should be appended to the existing known set, not
 * replacing.
 *
 * @param {Object[]} blocks Array of block objects.
 *
 * @return {Object} Action object.
 */

function receiveBlocks(blocks) {
  return {
    type: 'RECEIVE_BLOCKS',
    blocks: blocks
  };
}
/**
 * Returns an action object used in signalling that the block attributes with
 * the specified client ID has been updated.
 *
 * @param {string} clientId   Block client ID.
 * @param {Object} attributes Block attributes to be merged.
 *
 * @return {Object} Action object.
 */

function updateBlockAttributes(clientId, attributes) {
  return {
    type: 'UPDATE_BLOCK_ATTRIBUTES',
    clientId: clientId,
    attributes: attributes
  };
}
/**
 * Returns an action object used in signalling that the block with the
 * specified client ID has been updated.
 *
 * @param {string} clientId Block client ID.
 * @param {Object} updates  Block attributes to be merged.
 *
 * @return {Object} Action object.
 */

function updateBlock(clientId, updates) {
  return {
    type: 'UPDATE_BLOCK',
    clientId: clientId,
    updates: updates
  };
}
/**
 * Returns an action object used in signalling that the block with the
 * specified client ID has been selected, optionally accepting a position
 * value reflecting its selection directionality. An initialPosition of -1
 * reflects a reverse selection.
 *
 * @param {string}  clientId        Block client ID.
 * @param {?number} initialPosition Optional initial position. Pass as -1 to
 *                                  reflect reverse selection.
 *
 * @return {Object} Action object.
 */

function actions_selectBlock(clientId) {
  var initialPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    type: 'SELECT_BLOCK',
    initialPosition: initialPosition,
    clientId: clientId
  };
}
/**
 * Yields action objects used in signalling that the block preceding the given
 * clientId should be selected.
 *
 * @param {string} clientId Block client ID.
 */

function selectPreviousBlock(clientId) {
  var previousBlockClientId;
  return regenerator_default.a.wrap(function selectPreviousBlock$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return controls_select('core/block-editor', 'getPreviousBlockClientId', clientId);

        case 2:
          previousBlockClientId = _context2.sent;
          _context2.next = 5;
          return actions_selectBlock(previousBlockClientId, -1);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}
/**
 * Yields action objects used in signalling that the block following the given
 * clientId should be selected.
 *
 * @param {string} clientId Block client ID.
 */

function selectNextBlock(clientId) {
  var nextBlockClientId;
  return regenerator_default.a.wrap(function selectNextBlock$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return controls_select('core/block-editor', 'getNextBlockClientId', clientId);

        case 2:
          nextBlockClientId = _context3.sent;
          _context3.next = 5;
          return actions_selectBlock(nextBlockClientId);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}
/**
 * Returns an action object used in signalling that a block multi-selection has started.
 *
 * @return {Object} Action object.
 */

function startMultiSelect() {
  return {
    type: 'START_MULTI_SELECT'
  };
}
/**
 * Returns an action object used in signalling that block multi-selection stopped.
 *
 * @return {Object} Action object.
 */

function stopMultiSelect() {
  return {
    type: 'STOP_MULTI_SELECT'
  };
}
/**
 * Returns an action object used in signalling that block multi-selection changed.
 *
 * @param {string} start First block of the multi selection.
 * @param {string} end   Last block of the multiselection.
 *
 * @return {Object} Action object.
 */

function actions_multiSelect(start, end) {
  return {
    type: 'MULTI_SELECT',
    start: start,
    end: end
  };
}
/**
 * Returns an action object used in signalling that the block selection is cleared.
 *
 * @return {Object} Action object.
 */

function clearSelectedBlock() {
  return {
    type: 'CLEAR_SELECTED_BLOCK'
  };
}
/**
 * Returns an action object that enables or disables block selection.
 *
 * @param {boolean} [isSelectionEnabled=true] Whether block selection should
 *                                            be enabled.

 * @return {Object} Action object.
 */

function toggleSelection() {
  var isSelectionEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: 'TOGGLE_SELECTION',
    isSelectionEnabled: isSelectionEnabled
  };
}
/**
 * Returns an action object signalling that a blocks should be replaced with
 * one or more replacement blocks.
 *
 * @param {(string|string[])} clientIds Block client ID(s) to replace.
 * @param {(Object|Object[])} blocks    Replacement block(s).
 *
 * @yields {Object} Action object.
 */

function actions_replaceBlocks(clientIds, blocks) {
  var rootClientId, index, block, canInsertBlock;
  return regenerator_default.a.wrap(function replaceBlocks$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          clientIds = Object(external_lodash_["castArray"])(clientIds);
          blocks = Object(external_lodash_["castArray"])(blocks);
          _context4.next = 4;
          return controls_select('core/block-editor', 'getBlockRootClientId', Object(external_lodash_["first"])(clientIds));

        case 4:
          rootClientId = _context4.sent;
          index = 0;

        case 6:
          if (!(index < blocks.length)) {
            _context4.next = 16;
            break;
          }

          block = blocks[index];
          _context4.next = 10;
          return controls_select('core/block-editor', 'canInsertBlockType', block.name, rootClientId);

        case 10:
          canInsertBlock = _context4.sent;

          if (canInsertBlock) {
            _context4.next = 13;
            break;
          }

          return _context4.abrupt("return");

        case 13:
          index++;
          _context4.next = 6;
          break;

        case 16:
          _context4.next = 18;
          return {
            type: 'REPLACE_BLOCKS',
            clientIds: clientIds,
            blocks: blocks,
            time: Date.now()
          };

        case 18:
          return _context4.delegateYield(ensureDefaultBlock(), "t0", 19);

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, this);
}
/**
 * Returns an action object signalling that a single block should be replaced
 * with one or more replacement blocks.
 *
 * @param {(string|string[])} clientId Block client ID to replace.
 * @param {(Object|Object[])} block    Replacement block(s).
 *
 * @return {Object} Action object.
 */

function replaceBlock(clientId, block) {
  return actions_replaceBlocks(clientId, block);
}
/**
 * Higher-order action creator which, given the action type to dispatch creates
 * an action creator for managing block movement.
 *
 * @param {string} type Action type to dispatch.
 *
 * @return {Function} Action creator.
 */

function createOnMove(type) {
  return function (clientIds, rootClientId) {
    return {
      clientIds: Object(external_lodash_["castArray"])(clientIds),
      type: type,
      rootClientId: rootClientId
    };
  };
}

var actions_moveBlocksDown = createOnMove('MOVE_BLOCKS_DOWN');
var actions_moveBlocksUp = createOnMove('MOVE_BLOCKS_UP');
/**
 * Returns an action object signalling that an indexed block should be moved
 * to a new index.
 *
 * @param  {?string} clientId         The client ID of the block.
 * @param  {?string} fromRootClientId Root client ID source.
 * @param  {?string} toRootClientId   Root client ID destination.
 * @param  {number}  index            The index to move the block into.
 *
 * @yields {Object} Action object.
 */

function moveBlockToPosition(clientId, fromRootClientId, toRootClientId, index) {
  var templateLock, action, blockName, canInsertBlock;
  return regenerator_default.a.wrap(function moveBlockToPosition$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return controls_select('core/block-editor', 'getTemplateLock', fromRootClientId);

        case 2:
          templateLock = _context5.sent;

          if (!(templateLock === 'all')) {
            _context5.next = 5;
            break;
          }

          return _context5.abrupt("return");

        case 5:
          action = {
            type: 'MOVE_BLOCK_TO_POSITION',
            fromRootClientId: fromRootClientId,
            toRootClientId: toRootClientId,
            clientId: clientId,
            index: index
          }; // If moving inside the same root block the move is always possible.

          if (!(fromRootClientId === toRootClientId)) {
            _context5.next = 10;
            break;
          }

          _context5.next = 9;
          return action;

        case 9:
          return _context5.abrupt("return");

        case 10:
          _context5.next = 12;
          return controls_select('core/block-editor', 'getBlockName', clientId);

        case 12:
          blockName = _context5.sent;
          _context5.next = 15;
          return controls_select('core/block-editor', 'canInsertBlockType', blockName, toRootClientId);

        case 15:
          canInsertBlock = _context5.sent;

          if (!canInsertBlock) {
            _context5.next = 19;
            break;
          }

          _context5.next = 19;
          return action;

        case 19:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, this);
}
/**
 * Returns an action object used in signalling that a single block should be
 * inserted, optionally at a specific index respective a root block list.
 *
 * @param {Object}  block            Block object to insert.
 * @param {?number} index            Index at which block should be inserted.
 * @param {?string} rootClientId     Optional root client ID of block list on which to insert.
 * @param {?boolean} updateSelection If true block selection will be updated. If false, block selection will not change. Defaults to true.
 *
 * @return {Object} Action object.
 */

function actions_insertBlock(block, index, rootClientId) {
  var updateSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return actions_insertBlocks([block], index, rootClientId, updateSelection);
}
/**
 * Returns an action object used in signalling that an array of blocks should
 * be inserted, optionally at a specific index respective a root block list.
 *
 * @param {Object[]} blocks          Block objects to insert.
 * @param {?number}  index           Index at which block should be inserted.
 * @param {?string}  rootClientId    Optional root client ID of block list on which to insert.
 * @param {?boolean} updateSelection If true block selection will be updated.  If false, block selection will not change. Defaults to true.
 *
 *  @return {Object} Action object.
 */

function actions_insertBlocks(blocks, index, rootClientId) {
  var updateSelection,
      allowedBlocks,
      _iteratorNormalCompletion,
      _didIteratorError,
      _iteratorError,
      _iterator,
      _step,
      block,
      isValid,
      _args6 = arguments;

  return regenerator_default.a.wrap(function insertBlocks$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          updateSelection = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : true;
          blocks = Object(external_lodash_["castArray"])(blocks);
          allowedBlocks = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context6.prev = 6;
          _iterator = blocks[Symbol.iterator]();

        case 8:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context6.next = 17;
            break;
          }

          block = _step.value;
          _context6.next = 12;
          return controls_select('core/block-editor', 'canInsertBlockType', block.name, rootClientId);

        case 12:
          isValid = _context6.sent;

          if (isValid) {
            allowedBlocks.push(block);
          }

        case 14:
          _iteratorNormalCompletion = true;
          _context6.next = 8;
          break;

        case 17:
          _context6.next = 23;
          break;

        case 19:
          _context6.prev = 19;
          _context6.t0 = _context6["catch"](6);
          _didIteratorError = true;
          _iteratorError = _context6.t0;

        case 23:
          _context6.prev = 23;
          _context6.prev = 24;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 26:
          _context6.prev = 26;

          if (!_didIteratorError) {
            _context6.next = 29;
            break;
          }

          throw _iteratorError;

        case 29:
          return _context6.finish(26);

        case 30:
          return _context6.finish(23);

        case 31:
          if (!allowedBlocks.length) {
            _context6.next = 33;
            break;
          }

          return _context6.abrupt("return", {
            type: 'INSERT_BLOCKS',
            blocks: allowedBlocks,
            index: index,
            rootClientId: rootClientId,
            time: Date.now(),
            updateSelection: updateSelection
          });

        case 33:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, this, [[6, 19, 23, 31], [24,, 26, 30]]);
}
/**
 * Returns an action object used in signalling that the insertion point should
 * be shown.
 *
 * @param {?string} rootClientId Optional root client ID of block list on
 *                               which to insert.
 * @param {?number} index        Index at which block should be inserted.
 *
 * @return {Object} Action object.
 */

function actions_showInsertionPoint(rootClientId, index) {
  return {
    type: 'SHOW_INSERTION_POINT',
    rootClientId: rootClientId,
    index: index
  };
}
/**
 * Returns an action object hiding the insertion point.
 *
 * @return {Object} Action object.
 */

function actions_hideInsertionPoint() {
  return {
    type: 'HIDE_INSERTION_POINT'
  };
}
/**
 * Returns an action object resetting the template validity.
 *
 * @param {boolean}  isValid  template validity flag.
 *
 * @return {Object} Action object.
 */

function setTemplateValidity(isValid) {
  return {
    type: 'SET_TEMPLATE_VALIDITY',
    isValid: isValid
  };
}
/**
 * Returns an action object synchronize the template with the list of blocks
 *
 * @return {Object} Action object.
 */

function synchronizeTemplate() {
  return {
    type: 'SYNCHRONIZE_TEMPLATE'
  };
}
/**
 * Returns an action object used in signalling that two blocks should be merged
 *
 * @param {string} firstBlockClientId  Client ID of the first block to merge.
 * @param {string} secondBlockClientId Client ID of the second block to merge.
 *
 * @return {Object} Action object.
 */

function mergeBlocks(firstBlockClientId, secondBlockClientId) {
  return {
    type: 'MERGE_BLOCKS',
    blocks: [firstBlockClientId, secondBlockClientId]
  };
}
/**
 * Yields action objects used in signalling that the blocks corresponding to
 * the set of specified client IDs are to be removed.
 *
 * @param {string|string[]} clientIds      Client IDs of blocks to remove.
 * @param {boolean}         selectPrevious True if the previous block should be
 *                                         selected when a block is removed.
 */

function actions_removeBlocks(clientIds) {
  var selectPrevious,
      _args7 = arguments;
  return regenerator_default.a.wrap(function removeBlocks$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          selectPrevious = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : true;
          clientIds = Object(external_lodash_["castArray"])(clientIds);

          if (!selectPrevious) {
            _context7.next = 5;
            break;
          }

          _context7.next = 5;
          return selectPreviousBlock(clientIds[0]);

        case 5:
          _context7.next = 7;
          return {
            type: 'REMOVE_BLOCKS',
            clientIds: clientIds
          };

        case 7:
          return _context7.delegateYield(ensureDefaultBlock(), "t0", 8);

        case 8:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, this);
}
/**
 * Returns an action object used in signalling that the block with the
 * specified client ID is to be removed.
 *
 * @param {string}  clientId       Client ID of block to remove.
 * @param {boolean} selectPrevious True if the previous block should be
 *                                 selected when a block is removed.
 *
 * @return {Object} Action object.
 */

function removeBlock(clientId, selectPrevious) {
  return actions_removeBlocks([clientId], selectPrevious);
}
/**
 * Returns an action object used in signalling that the inner blocks with the
 * specified client ID should be replaced.
 *
 * @param {string}   rootClientId    Client ID of the block whose InnerBlocks will re replaced.
 * @param {Object[]} blocks          Block objects to insert as new InnerBlocks
 * @param {?boolean} updateSelection If true block selection will be updated. If false, block selection will not change. Defaults to true.
 *
 * @return {Object} Action object.
 */

function actions_replaceInnerBlocks(rootClientId, blocks) {
  var updateSelection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return {
    type: 'REPLACE_INNER_BLOCKS',
    rootClientId: rootClientId,
    blocks: blocks,
    updateSelection: updateSelection,
    time: Date.now()
  };
}
/**
 * Returns an action object used to toggle the block editing mode between
 * visual and HTML modes.
 *
 * @param {string} clientId Block client ID.
 *
 * @return {Object} Action object.
 */

function toggleBlockMode(clientId) {
  return {
    type: 'TOGGLE_BLOCK_MODE',
    clientId: clientId
  };
}
/**
 * Returns an action object used in signalling that the user has begun to type.
 *
 * @return {Object} Action object.
 */

function startTyping() {
  return {
    type: 'START_TYPING'
  };
}
/**
 * Returns an action object used in signalling that the user has stopped typing.
 *
 * @return {Object} Action object.
 */

function stopTyping() {
  return {
    type: 'STOP_TYPING'
  };
}
/**
 * Returns an action object used in signalling that the caret has entered formatted text.
 *
 * @return {Object} Action object.
 */

function enterFormattedText() {
  return {
    type: 'ENTER_FORMATTED_TEXT'
  };
}
/**
 * Returns an action object used in signalling that the user caret has exited formatted text.
 *
 * @return {Object} Action object.
 */

function exitFormattedText() {
  return {
    type: 'EXIT_FORMATTED_TEXT'
  };
}
/**
 * Returns an action object used in signalling that a new block of the default
 * type should be added to the block list.
 *
 * @param {?Object} attributes   Optional attributes of the block to assign.
 * @param {?string} rootClientId Optional root client ID of block list on which
 *                               to append.
 * @param {?number} index        Optional index where to insert the default block
 *
 * @return {Object} Action object
 */

function actions_insertDefaultBlock(attributes, rootClientId, index) {
  var block = Object(external_this_wp_blocks_["createBlock"])(Object(external_this_wp_blocks_["getDefaultBlockName"])(), attributes);
  return actions_insertBlock(block, index, rootClientId);
}
/**
 * Returns an action object that changes the nested settings of a given block.
 *
 * @param {string} clientId Client ID of the block whose nested setting are
 *                          being received.
 * @param {Object} settings Object with the new settings for the nested block.
 *
 * @return {Object} Action object
 */

function updateBlockListSettings(clientId, settings) {
  return {
    type: 'UPDATE_BLOCK_LIST_SETTINGS',
    clientId: clientId,
    settings: settings
  };
}
/*
 * Returns an action object used in signalling that the block editor settings have been updated.
 *
 * @param {Object} settings Updated settings
 *
 * @return {Object} Action object
 */

function updateSettings(settings) {
  return {
    type: 'UPDATE_SETTINGS',
    settings: settings
  };
}
/**
 * Returns an action object used in signalling that a temporary reusable blocks have been saved
 * in order to switch its temporary id with the real id.
 *
 * @param {string} id        Reusable block's id.
 * @param {string} updatedId Updated block's id.
 *
 * @return {Object} Action object.
 */

function __unstableSaveReusableBlock(id, updatedId) {
  return {
    type: 'SAVE_REUSABLE_BLOCK_SUCCESS',
    id: id,
    updatedId: updatedId
  };
}
/**
 * Returns an action object used in signalling that the last block change should be marked explicitely as persistent.
 *
 * @return {Object} Action object.
 */

function __unstableMarkLastChangeAsPersistent() {
  return {
    type: 'MARK_LAST_CHANGE_AS_PERSISTENT'
  };
}

// EXTERNAL MODULE: ./node_modules/rememo/es/rememo.js
var rememo = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/store/selectors.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/***
 * Module constants
 */

var INSERTER_UTILITY_HIGH = 3;
var INSERTER_UTILITY_MEDIUM = 2;
var INSERTER_UTILITY_LOW = 1;
var INSERTER_UTILITY_NONE = 0;
var MILLISECONDS_PER_HOUR = 3600 * 1000;
var MILLISECONDS_PER_DAY = 24 * 3600 * 1000;
var MILLISECONDS_PER_WEEK = 7 * 24 * 3600 * 1000;
/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 *
 * @type {Array}
 */

var EMPTY_ARRAY = [];
/**
 * Shared reference to an empty object for cases where it is important to avoid
 * returning a new object reference on every invocation.
 *
 * @type {Object}
 */

var EMPTY_OBJECT = {};
/**
 * Returns a new reference when the inner blocks of a given block client ID
 * change. This is used exclusively as a memoized selector dependant, relying
 * on this selector's shared return value and recursively those of its inner
 * blocks defined as dependencies. This abuses mechanics of the selector
 * memoization to return from the original selector function only when
 * dependants change.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block client ID.
 *
 * @return {*} A value whose reference will change only when inner blocks of
 *             the given block client ID change.
 */

var getBlockDependantsCacheBust = Object(rememo["a" /* default */])(function () {
  return [];
}, function (state, clientId) {
  return Object(external_lodash_["map"])(selectors_getBlockOrder(state, clientId), function (innerBlockClientId) {
    return selectors_getBlock(state, innerBlockClientId);
  });
});
/**
 * Returns a block's name given its client ID, or null if no block exists with
 * the client ID.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block client ID.
 *
 * @return {string} Block name.
 */

function selectors_getBlockName(state, clientId) {
  var block = state.blocks.byClientId[clientId];
  return block ? block.name : null;
}
/**
 * Returns whether a block is valid or not.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block client ID.
 *
 * @return {boolean} Is Valid.
 */

function selectors_isBlockValid(state, clientId) {
  var block = state.blocks.byClientId[clientId];
  return !!block && block.isValid;
}
/**
 * Returns a block's attributes given its client ID, or null if no block exists with
 * the client ID.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block client ID.
 *
 * @return {Object?} Block attributes.
 */

var getBlockAttributes = Object(rememo["a" /* default */])(function (state, clientId) {
  var block = state.blocks.byClientId[clientId];

  if (!block) {
    return null;
  }

  var attributes = state.blocks.attributes[clientId]; // Inject custom source attribute values.
  //
  // TODO: Create generic external sourcing pattern, not explicitly
  // targeting meta attributes.

  var type = Object(external_this_wp_blocks_["getBlockType"])(block.name);

  if (type) {
    attributes = Object(external_lodash_["reduce"])(type.attributes, function (result, value, key) {
      if (value.source === 'meta') {
        if (result === attributes) {
          result = Object(objectSpread["a" /* default */])({}, result);
        }

        result[key] = getPostMeta(state, value.meta);
      }

      return result;
    }, attributes);
  }

  return attributes;
}, function (state, clientId) {
  return [state.blocks.byClientId[clientId], state.blocks.attributes[clientId], getPostMeta(state)];
});
/**
 * Returns a block given its client ID. This is a parsed copy of the block,
 * containing its `blockName`, `clientId`, and current `attributes` state. This
 * is not the block's registration settings, which must be retrieved from the
 * blocks module registration store.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block client ID.
 *
 * @return {Object} Parsed block object.
 */

var selectors_getBlock = Object(rememo["a" /* default */])(function (state, clientId) {
  var block = state.blocks.byClientId[clientId];

  if (!block) {
    return null;
  }

  return Object(objectSpread["a" /* default */])({}, block, {
    attributes: getBlockAttributes(state, clientId),
    innerBlocks: getBlocks(state, clientId)
  });
}, function (state, clientId) {
  return [].concat(Object(toConsumableArray["a" /* default */])(getBlockAttributes.getDependants(state, clientId)), [getBlockDependantsCacheBust(state, clientId)]);
});
var selectors_unstableGetBlockWithoutInnerBlocks = Object(rememo["a" /* default */])(function (state, clientId) {
  var block = state.blocks.byClientId[clientId];

  if (!block) {
    return null;
  }

  return Object(objectSpread["a" /* default */])({}, block, {
    attributes: getBlockAttributes(state, clientId)
  });
}, function (state, clientId) {
  return [state.blocks.byClientId[clientId]].concat(Object(toConsumableArray["a" /* default */])(getBlockAttributes.getDependants(state, clientId)));
});
/**
 * Returns all block objects for the current post being edited as an array in
 * the order they appear in the post.
 *
 * Note: It's important to memoize this selector to avoid return a new instance
 * on each call
 *
 * @param {Object}  state        Editor state.
 * @param {?String} rootClientId Optional root client ID of block list.
 *
 * @return {Object[]} Post blocks.
 */

var getBlocks = Object(rememo["a" /* default */])(function (state, rootClientId) {
  return Object(external_lodash_["map"])(selectors_getBlockOrder(state, rootClientId), function (clientId) {
    return selectors_getBlock(state, clientId);
  });
}, function (state) {
  return [state.blocks.byClientId, state.blocks.order, state.blocks.attributes];
});
/**
 * Returns an array containing the clientIds of all descendants
 * of the blocks given.
 *
 * @param {Object} state Global application state.
 * @param {Array} clientIds Array of blocks to inspect.
 *
 * @return {Array} ids of descendants.
 */

var selectors_getClientIdsOfDescendants = function getClientIdsOfDescendants(state, clientIds) {
  return Object(external_lodash_["flatMap"])(clientIds, function (clientId) {
    var descendants = selectors_getBlockOrder(state, clientId);
    return [].concat(Object(toConsumableArray["a" /* default */])(descendants), Object(toConsumableArray["a" /* default */])(getClientIdsOfDescendants(state, descendants)));
  });
};
/**
 * Returns an array containing the clientIds of the top-level blocks
 * and their descendants of any depth (for nested blocks).
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} ids of top-level and descendant blocks.
 */

var getClientIdsWithDescendants = Object(rememo["a" /* default */])(function (state) {
  var topLevelIds = selectors_getBlockOrder(state);
  return [].concat(Object(toConsumableArray["a" /* default */])(topLevelIds), Object(toConsumableArray["a" /* default */])(selectors_getClientIdsOfDescendants(state, topLevelIds)));
}, function (state) {
  return [state.blocks.order];
});
/**
 * Returns the total number of blocks, or the total number of blocks with a specific name in a post.
 * The number returned includes nested blocks.
 *
 * @param {Object}  state     Global application state.
 * @param {?String} blockName Optional block name, if specified only blocks of that type will be counted.
 *
 * @return {number} Number of blocks in the post, or number of blocks with name equal to blockName.
 */

var getGlobalBlockCount = Object(rememo["a" /* default */])(function (state, blockName) {
  var clientIds = getClientIdsWithDescendants(state);

  if (!blockName) {
    return clientIds.length;
  }

  return Object(external_lodash_["reduce"])(clientIds, function (count, clientId) {
    var block = state.blocks.byClientId[clientId];
    return block.name === blockName ? count + 1 : count;
  }, 0);
}, function (state) {
  return [state.blocks.order, state.blocks.byClientId];
});
/**
 * Given an array of block client IDs, returns the corresponding array of block
 * objects.
 *
 * @param {Object}   state     Editor state.
 * @param {string[]} clientIds Client IDs for which blocks are to be returned.
 *
 * @return {WPBlock[]} Block objects.
 */

var selectors_getBlocksByClientId = Object(rememo["a" /* default */])(function (state, clientIds) {
  return Object(external_lodash_["map"])(Object(external_lodash_["castArray"])(clientIds), function (clientId) {
    return selectors_getBlock(state, clientId);
  });
}, function (state) {
  return [getPostMeta(state), state.blocks.byClientId, state.blocks.order, state.blocks.attributes];
});
/**
 * Returns the number of blocks currently present in the post.
 *
 * @param {Object}  state        Editor state.
 * @param {?string} rootClientId Optional root client ID of block list.
 *
 * @return {number} Number of blocks in the post.
 */

function selectors_getBlockCount(state, rootClientId) {
  return selectors_getBlockOrder(state, rootClientId).length;
}
/**
 * Returns the current block selection start. This value may be null, and it
 * may represent either a singular block selection or multi-selection start.
 * A selection is singular if its start and end match.
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Client ID of block selection start.
 */

function getBlockSelectionStart(state) {
  return state.blockSelection.start;
}
/**
 * Returns the current block selection end. This value may be null, and it
 * may represent either a singular block selection or multi-selection end.
 * A selection is singular if its start and end match.
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Client ID of block selection end.
 */

function getBlockSelectionEnd(state) {
  return state.blockSelection.end;
}
/**
 * Returns the number of blocks currently selected in the post.
 *
 * @param {Object} state Global application state.
 *
 * @return {number} Number of blocks selected in the post.
 */

function selectors_getSelectedBlockCount(state) {
  var multiSelectedBlockCount = selectors_getMultiSelectedBlockClientIds(state).length;

  if (multiSelectedBlockCount) {
    return multiSelectedBlockCount;
  }

  return state.blockSelection.start ? 1 : 0;
}
/**
 * Returns true if there is a single selected block, or false otherwise.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether a single block is selected.
 */

function hasSelectedBlock(state) {
  var _state$blockSelection = state.blockSelection,
      start = _state$blockSelection.start,
      end = _state$blockSelection.end;
  return !!start && start === end;
}
/**
 * Returns the currently selected block client ID, or null if there is no
 * selected block.
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} Selected block client ID.
 */

function selectors_getSelectedBlockClientId(state) {
  var _state$blockSelection2 = state.blockSelection,
      start = _state$blockSelection2.start,
      end = _state$blockSelection2.end; // We need to check the block exists because the current blockSelection
  // reducer doesn't take into account when blocks are reset via undo. To be
  // removed when that's fixed.

  return start && start === end && !!state.blocks.byClientId[start] ? start : null;
}
/**
 * Returns the currently selected block, or null if there is no selected block.
 *
 * @param {Object} state Global application state.
 *
 * @return {?Object} Selected block.
 */

function selectors_getSelectedBlock(state) {
  var clientId = selectors_getSelectedBlockClientId(state);
  return clientId ? selectors_getBlock(state, clientId) : null;
}
/**
 * Given a block client ID, returns the root block from which the block is
 * nested, an empty string for top-level blocks, or null if the block does not
 * exist.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block from which to find root client ID.
 *
 * @return {?string} Root client ID, if exists
 */

var selectors_getBlockRootClientId = Object(rememo["a" /* default */])(function (state, clientId) {
  var order = state.blocks.order;

  for (var rootClientId in order) {
    if (Object(external_lodash_["includes"])(order[rootClientId], clientId)) {
      return rootClientId;
    }
  }

  return null;
}, function (state) {
  return [state.blocks.order];
});
/**
 * Given a block client ID, returns the root of the hierarchy from which the block is nested, return the block itself for root level blocks.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block from which to find root client ID.
 *
 * @return {string} Root client ID
 */

var getBlockHierarchyRootClientId = Object(rememo["a" /* default */])(function (state, clientId) {
  var rootClientId = clientId;
  var current = clientId;

  while (rootClientId) {
    current = rootClientId;
    rootClientId = selectors_getBlockRootClientId(state, current);
  }

  return current;
}, function (state) {
  return [state.blocks.order];
});
/**
 * Returns the client ID of the block adjacent one at the given reference
 * startClientId and modifier directionality. Defaults start startClientId to
 * the selected block, and direction as next block. Returns null if there is no
 * adjacent block.
 *
 * @param {Object}  state         Editor state.
 * @param {?string} startClientId Optional client ID of block from which to
 *                                search.
 * @param {?number} modifier      Directionality multiplier (1 next, -1
 *                                previous).
 *
 * @return {?string} Return the client ID of the block, or null if none exists.
 */

function getAdjacentBlockClientId(state, startClientId) {
  var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  // Default to selected block.
  if (startClientId === undefined) {
    startClientId = selectors_getSelectedBlockClientId(state);
  } // Try multi-selection starting at extent based on modifier.


  if (startClientId === undefined) {
    if (modifier < 0) {
      startClientId = getFirstMultiSelectedBlockClientId(state);
    } else {
      startClientId = getLastMultiSelectedBlockClientId(state);
    }
  } // Validate working start client ID.


  if (!startClientId) {
    return null;
  } // Retrieve start block root client ID, being careful to allow the falsey
  // empty string top-level root by explicitly testing against null.


  var rootClientId = selectors_getBlockRootClientId(state, startClientId);

  if (rootClientId === null) {
    return null;
  }

  var order = state.blocks.order;
  var orderSet = order[rootClientId];
  var index = orderSet.indexOf(startClientId);
  var nextIndex = index + 1 * modifier; // Block was first in set and we're attempting to get previous.

  if (nextIndex < 0) {
    return null;
  } // Block was last in set and we're attempting to get next.


  if (nextIndex === orderSet.length) {
    return null;
  } // Assume incremented index is within the set.


  return orderSet[nextIndex];
}
/**
 * Returns the previous block's client ID from the given reference start ID.
 * Defaults start to the selected block. Returns null if there is no previous
 * block.
 *
 * @param {Object}  state         Editor state.
 * @param {?string} startClientId Optional client ID of block from which to
 *                                search.
 *
 * @return {?string} Adjacent block's client ID, or null if none exists.
 */

function getPreviousBlockClientId(state, startClientId) {
  return getAdjacentBlockClientId(state, startClientId, -1);
}
/**
 * Returns the next block's client ID from the given reference start ID.
 * Defaults start to the selected block. Returns null if there is no next
 * block.
 *
 * @param {Object}  state         Editor state.
 * @param {?string} startClientId Optional client ID of block from which to
 *                                search.
 *
 * @return {?string} Adjacent block's client ID, or null if none exists.
 */

function getNextBlockClientId(state, startClientId) {
  return getAdjacentBlockClientId(state, startClientId, 1);
}
/**
 * Returns the initial caret position for the selected block.
 * This position is to used to position the caret properly when the selected block changes.
 *
 * @param {Object} state Global application state.
 *
 * @return {?Object} Selected block.
 */

function selectors_getSelectedBlocksInitialCaretPosition(state) {
  var _state$blockSelection3 = state.blockSelection,
      start = _state$blockSelection3.start,
      end = _state$blockSelection3.end;

  if (start !== end || !start) {
    return null;
  }

  return state.blockSelection.initialPosition;
}
/**
 * Returns the current multi-selection set of block client IDs, or an empty
 * array if there is no multi-selection.
 *
 * @param {Object} state Editor state.
 *
 * @return {Array} Multi-selected block client IDs.
 */

var selectors_getMultiSelectedBlockClientIds = Object(rememo["a" /* default */])(function (state) {
  var _state$blockSelection4 = state.blockSelection,
      start = _state$blockSelection4.start,
      end = _state$blockSelection4.end;

  if (start === end) {
    return [];
  } // Retrieve root client ID to aid in retrieving relevant nested block
  // order, being careful to allow the falsey empty string top-level root
  // by explicitly testing against null.


  var rootClientId = selectors_getBlockRootClientId(state, start);

  if (rootClientId === null) {
    return [];
  }

  var blockOrder = selectors_getBlockOrder(state, rootClientId);
  var startIndex = blockOrder.indexOf(start);
  var endIndex = blockOrder.indexOf(end);

  if (startIndex > endIndex) {
    return blockOrder.slice(endIndex, startIndex + 1);
  }

  return blockOrder.slice(startIndex, endIndex + 1);
}, function (state) {
  return [state.blocks.order, state.blockSelection.start, state.blockSelection.end];
});
/**
 * Returns the current multi-selection set of blocks, or an empty array if
 * there is no multi-selection.
 *
 * @param {Object} state Editor state.
 *
 * @return {Array} Multi-selected block objects.
 */

var getMultiSelectedBlocks = Object(rememo["a" /* default */])(function (state) {
  var multiSelectedBlockClientIds = selectors_getMultiSelectedBlockClientIds(state);

  if (!multiSelectedBlockClientIds.length) {
    return EMPTY_ARRAY;
  }

  return multiSelectedBlockClientIds.map(function (clientId) {
    return selectors_getBlock(state, clientId);
  });
}, function (state) {
  return [].concat(Object(toConsumableArray["a" /* default */])(selectors_getMultiSelectedBlockClientIds.getDependants(state)), [state.blocks.byClientId, state.blocks.order, state.blocks.attributes, getPostMeta(state)]);
});
/**
 * Returns the client ID of the first block in the multi-selection set, or null
 * if there is no multi-selection.
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} First block client ID in the multi-selection set.
 */

function getFirstMultiSelectedBlockClientId(state) {
  return Object(external_lodash_["first"])(selectors_getMultiSelectedBlockClientIds(state)) || null;
}
/**
 * Returns the client ID of the last block in the multi-selection set, or null
 * if there is no multi-selection.
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} Last block client ID in the multi-selection set.
 */

function getLastMultiSelectedBlockClientId(state) {
  return Object(external_lodash_["last"])(selectors_getMultiSelectedBlockClientIds(state)) || null;
}
/**
 * Checks if possibleAncestorId is an ancestor of possibleDescendentId.
 *
 * @param {Object} state                Editor state.
 * @param {string} possibleAncestorId   Possible ancestor client ID.
 * @param {string} possibleDescendentId Possible descent client ID.
 *
 * @return {boolean} True if possibleAncestorId is an ancestor
 *                   of possibleDescendentId, and false otherwise.
 */

var isAncestorOf = Object(rememo["a" /* default */])(function (state, possibleAncestorId, possibleDescendentId) {
  var idToCheck = possibleDescendentId;

  while (possibleAncestorId !== idToCheck && idToCheck) {
    idToCheck = selectors_getBlockRootClientId(state, idToCheck);
  }

  return possibleAncestorId === idToCheck;
}, function (state) {
  return [state.blocks.order];
});
/**
 * Returns true if a multi-selection exists, and the block corresponding to the
 * specified client ID is the first block of the multi-selection set, or false
 * otherwise.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block client ID.
 *
 * @return {boolean} Whether block is first in multi-selection.
 */

function selectors_isFirstMultiSelectedBlock(state, clientId) {
  return getFirstMultiSelectedBlockClientId(state) === clientId;
}
/**
 * Returns true if the client ID occurs within the block multi-selection, or
 * false otherwise.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block client ID.
 *
 * @return {boolean} Whether block is in multi-selection set.
 */

function selectors_isBlockMultiSelected(state, clientId) {
  return selectors_getMultiSelectedBlockClientIds(state).indexOf(clientId) !== -1;
}
/**
 * Returns true if an ancestor of the block is multi-selected, or false
 * otherwise.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block client ID.
 *
 * @return {boolean} Whether an ancestor of the block is in multi-selection
 *                   set.
 */

var selectors_isAncestorMultiSelected = Object(rememo["a" /* default */])(function (state, clientId) {
  var ancestorClientId = clientId;
  var isMultiSelected = false;

  while (ancestorClientId && !isMultiSelected) {
    ancestorClientId = selectors_getBlockRootClientId(state, ancestorClientId);
    isMultiSelected = selectors_isBlockMultiSelected(state, ancestorClientId);
  }

  return isMultiSelected;
}, function (state) {
  return [state.blocks.order, state.blockSelection.start, state.blockSelection.end];
});
/**
 * Returns the client ID of the block which begins the multi-selection set, or
 * null if there is no multi-selection.
 *
 * This is not necessarily the first client ID in the selection.
 *
 * @see getFirstMultiSelectedBlockClientId
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} Client ID of block beginning multi-selection.
 */

function getMultiSelectedBlocksStartClientId(state) {
  var _state$blockSelection5 = state.blockSelection,
      start = _state$blockSelection5.start,
      end = _state$blockSelection5.end;

  if (start === end) {
    return null;
  }

  return start || null;
}
/**
 * Returns the client ID of the block which ends the multi-selection set, or
 * null if there is no multi-selection.
 *
 * This is not necessarily the last client ID in the selection.
 *
 * @see getLastMultiSelectedBlockClientId
 *
 * @param {Object} state Editor state.
 *
 * @return {?string} Client ID of block ending multi-selection.
 */

function getMultiSelectedBlocksEndClientId(state) {
  var _state$blockSelection6 = state.blockSelection,
      start = _state$blockSelection6.start,
      end = _state$blockSelection6.end;

  if (start === end) {
    return null;
  }

  return end || null;
}
/**
 * Returns an array containing all block client IDs in the editor in the order
 * they appear. Optionally accepts a root client ID of the block list for which
 * the order should be returned, defaulting to the top-level block order.
 *
 * @param {Object}  state        Editor state.
 * @param {?string} rootClientId Optional root client ID of block list.
 *
 * @return {Array} Ordered client IDs of editor blocks.
 */

function selectors_getBlockOrder(state, rootClientId) {
  return state.blocks.order[rootClientId || ''] || EMPTY_ARRAY;
}
/**
 * Returns the index at which the block corresponding to the specified client
 * ID occurs within the block order, or `-1` if the block does not exist.
 *
 * @param {Object}  state        Editor state.
 * @param {string}  clientId     Block client ID.
 * @param {?string} rootClientId Optional root client ID of block list.
 *
 * @return {number} Index at which block exists in order.
 */

function selectors_getBlockIndex(state, clientId, rootClientId) {
  return selectors_getBlockOrder(state, rootClientId).indexOf(clientId);
}
/**
 * Returns true if the block corresponding to the specified client ID is
 * currently selected and no multi-selection exists, or false otherwise.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block client ID.
 *
 * @return {boolean} Whether block is selected and multi-selection exists.
 */

function selectors_isBlockSelected(state, clientId) {
  var _state$blockSelection7 = state.blockSelection,
      start = _state$blockSelection7.start,
      end = _state$blockSelection7.end;

  if (start !== end) {
    return false;
  }

  return start === clientId;
}
/**
 * Returns true if one of the block's inner blocks is selected.
 *
 * @param {Object}  state    Editor state.
 * @param {string}  clientId Block client ID.
 * @param {boolean} deep     Perform a deep check.
 *
 * @return {boolean} Whether the block as an inner block selected
 */

function selectors_hasSelectedInnerBlock(state, clientId) {
  var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return Object(external_lodash_["some"])(selectors_getBlockOrder(state, clientId), function (innerClientId) {
    return selectors_isBlockSelected(state, innerClientId) || selectors_isBlockMultiSelected(state, innerClientId) || deep && selectors_hasSelectedInnerBlock(state, innerClientId, deep);
  });
}
/**
 * Returns true if the block corresponding to the specified client ID is
 * currently selected but isn't the last of the selected blocks. Here "last"
 * refers to the block sequence in the document, _not_ the sequence of
 * multi-selection, which is why `state.blockSelection.end` isn't used.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block client ID.
 *
 * @return {boolean} Whether block is selected and not the last in the
 *                   selection.
 */

function isBlockWithinSelection(state, clientId) {
  if (!clientId) {
    return false;
  }

  var clientIds = selectors_getMultiSelectedBlockClientIds(state);
  var index = clientIds.indexOf(clientId);
  return index > -1 && index < clientIds.length - 1;
}
/**
 * Returns true if a multi-selection has been made, or false otherwise.
 *
 * @param {Object} state Editor state.
 *
 * @return {boolean} Whether multi-selection has been made.
 */

function selectors_hasMultiSelection(state) {
  var _state$blockSelection8 = state.blockSelection,
      start = _state$blockSelection8.start,
      end = _state$blockSelection8.end;
  return start !== end;
}
/**
 * Whether in the process of multi-selecting or not. This flag is only true
 * while the multi-selection is being selected (by mouse move), and is false
 * once the multi-selection has been settled.
 *
 * @see hasMultiSelection
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} True if multi-selecting, false if not.
 */

function selectors_isMultiSelecting(state) {
  return state.blockSelection.isMultiSelecting;
}
/**
 * Selector that returns if multi-selection is enabled or not.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} True if it should be possible to multi-select blocks, false if multi-selection is disabled.
 */

function selectors_isSelectionEnabled(state) {
  return state.blockSelection.isEnabled;
}
/**
 * Returns the block's editing mode, defaulting to "visual" if not explicitly
 * assigned.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId Block client ID.
 *
 * @return {Object} Block editing mode.
 */

function selectors_getBlockMode(state, clientId) {
  return state.blocksMode[clientId] || 'visual';
}
/**
 * Returns true if the user is typing, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether user is typing.
 */

function selectors_isTyping(state) {
  return state.isTyping;
}
/**
 * Returns true if the caret is within formatted text, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the caret is within formatted text.
 */

function selectors_isCaretWithinFormattedText(state) {
  return state.isCaretWithinFormattedText;
}
/**
 * Returns the insertion point, the index at which the new inserted block would
 * be placed. Defaults to the last index.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} Insertion point object with `rootClientId`, `index`.
 */

function getBlockInsertionPoint(state) {
  var rootClientId, index;
  var insertionPoint = state.insertionPoint,
      blockSelection = state.blockSelection;

  if (insertionPoint !== null) {
    return insertionPoint;
  }

  var end = blockSelection.end;

  if (end) {
    rootClientId = selectors_getBlockRootClientId(state, end) || undefined;
    index = selectors_getBlockIndex(state, end, rootClientId) + 1;
  } else {
    index = selectors_getBlockOrder(state).length;
  }

  return {
    rootClientId: rootClientId,
    index: index
  };
}
/**
 * Returns true if we should show the block insertion point.
 *
 * @param {Object} state Global application state.
 *
 * @return {?boolean} Whether the insertion point is visible or not.
 */

function isBlockInsertionPointVisible(state) {
  return state.insertionPoint !== null;
}
/**
 * Returns whether the blocks matches the template or not.
 *
 * @param {boolean} state
 * @return {?boolean} Whether the template is valid or not.
 */

function isValidTemplate(state) {
  return state.template.isValid;
}
/**
 * Returns the defined block template
 *
 * @param {boolean} state
 * @return {?Array}        Block Template
 */

function getTemplate(state) {
  return state.settings.template;
}
/**
 * Returns the defined block template lock. Optionally accepts a root block
 * client ID as context, otherwise defaulting to the global context.
 *
 * @param {Object}  state        Editor state.
 * @param {?string} rootClientId Optional block root client ID.
 *
 * @return {?string} Block Template Lock
 */

function selectors_getTemplateLock(state, rootClientId) {
  if (!rootClientId) {
    return state.settings.templateLock;
  }

  var blockListSettings = getBlockListSettings(state, rootClientId);

  if (!blockListSettings) {
    return null;
  }

  return blockListSettings.templateLock;
}
/**
 * Determines if the given block type is allowed to be inserted into the block list.
 * This function is not exported and not memoized because using a memoized selector
 * inside another memoized selector is just a waste of time.
 *
 * @param {Object}  state        Editor state.
 * @param {string}  blockName    The name of the block type, e.g.' core/paragraph'.
 * @param {?string} rootClientId Optional root client ID of block list.
 *
 * @return {boolean} Whether the given block type is allowed to be inserted.
 */

var selectors_canInsertBlockTypeUnmemoized = function canInsertBlockTypeUnmemoized(state, blockName) {
  var rootClientId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var checkAllowList = function checkAllowList(list, item) {
    var defaultResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (Object(external_lodash_["isBoolean"])(list)) {
      return list;
    }

    if (Object(external_lodash_["isArray"])(list)) {
      return Object(external_lodash_["includes"])(list, item);
    }

    return defaultResult;
  };

  var blockType = Object(external_this_wp_blocks_["getBlockType"])(blockName);

  if (!blockType) {
    return false;
  }

  var _getSettings = selectors_getSettings(state),
      allowedBlockTypes = _getSettings.allowedBlockTypes;

  var isBlockAllowedInEditor = checkAllowList(allowedBlockTypes, blockName, true);

  if (!isBlockAllowedInEditor) {
    return false;
  }

  var isLocked = !!selectors_getTemplateLock(state, rootClientId);

  if (isLocked) {
    return false;
  }

  var parentBlockListSettings = getBlockListSettings(state, rootClientId);
  var parentAllowedBlocks = Object(external_lodash_["get"])(parentBlockListSettings, ['allowedBlocks']);
  var hasParentAllowedBlock = checkAllowList(parentAllowedBlocks, blockName);
  var blockAllowedParentBlocks = blockType.parent;
  var parentName = selectors_getBlockName(state, rootClientId);
  var hasBlockAllowedParent = checkAllowList(blockAllowedParentBlocks, parentName);

  if (hasParentAllowedBlock !== null && hasBlockAllowedParent !== null) {
    return hasParentAllowedBlock || hasBlockAllowedParent;
  } else if (hasParentAllowedBlock !== null) {
    return hasParentAllowedBlock;
  } else if (hasBlockAllowedParent !== null) {
    return hasBlockAllowedParent;
  }

  return true;
};
/**
 * Determines if the given block type is allowed to be inserted into the block list.
 *
 * @param {Object}  state        Editor state.
 * @param {string}  blockName    The name of the block type, e.g.' core/paragraph'.
 * @param {?string} rootClientId Optional root client ID of block list.
 *
 * @return {boolean} Whether the given block type is allowed to be inserted.
 */


var selectors_canInsertBlockType = Object(rememo["a" /* default */])(selectors_canInsertBlockTypeUnmemoized, function (state, blockName, rootClientId) {
  return [state.blockListSettings[rootClientId], state.blocks.byClientId[rootClientId], state.settings.allowedBlockTypes, state.settings.templateLock];
});
/**
 * Returns information about how recently and frequently a block has been inserted.
 *
 * @param {Object} state Global application state.
 * @param {string} id    A string which identifies the insert, e.g. 'core/block/12'
 *
 * @return {?{ time: number, count: number }} An object containing `time` which is when the last
 *                                            insert occurred as a UNIX epoch, and `count` which is
 *                                            the number of inserts that have occurred.
 */

function getInsertUsage(state, id) {
  return state.preferences.insertUsage[id] || null;
}
/**
 * Returns whether we can show a block type in the inserter
 *
 * @param {Object} state Global State
 * @param {Object} blockType BlockType
 * @param {?string} rootClientId Optional root client ID of block list.
 *
 * @return {boolean} Whether the given block type is allowed to be shown in the inserter.
 */


var selectors_canIncludeBlockTypeInInserter = function canIncludeBlockTypeInInserter(state, blockType, rootClientId) {
  if (!Object(external_this_wp_blocks_["hasBlockSupport"])(blockType, 'inserter', true)) {
    return false;
  }

  return selectors_canInsertBlockTypeUnmemoized(state, blockType.name, rootClientId);
};
/**
 * Returns whether we can show a reusable block in the inserter
 *
 * @param {Object} state Global State
 * @param {Object} reusableBlock Reusable block object
 * @param {?string} rootClientId Optional root client ID of block list.
 *
 * @return {boolean} Whether the given block type is allowed to be shown in the inserter.
 */


var selectors_canIncludeReusableBlockInInserter = function canIncludeReusableBlockInInserter(state, reusableBlock, rootClientId) {
  if (!selectors_canInsertBlockTypeUnmemoized(state, 'core/block', rootClientId)) {
    return false;
  }

  var referencedBlockName = selectors_getBlockName(state, reusableBlock.clientId);

  if (!referencedBlockName) {
    return false;
  }

  var referencedBlockType = Object(external_this_wp_blocks_["getBlockType"])(referencedBlockName);

  if (!referencedBlockType) {
    return false;
  }

  if (!selectors_canInsertBlockTypeUnmemoized(state, referencedBlockName, rootClientId)) {
    return false;
  }

  if (isAncestorOf(state, reusableBlock.clientId, rootClientId)) {
    return false;
  }

  return true;
};
/**
 * Determines the items that appear in the inserter. Includes both static
 * items (e.g. a regular block type) and dynamic items (e.g. a reusable block).
 *
 * Each item object contains what's necessary to display a button in the
 * inserter and handle its selection.
 *
 * The 'utility' property indicates how useful we think an item will be to the
 * user. There are 4 levels of utility:
 *
 * 1. Blocks that are contextually useful (utility = 3)
 * 2. Blocks that have been previously inserted (utility = 2)
 * 3. Blocks that are in the common category (utility = 1)
 * 4. All other blocks (utility = 0)
 *
 * The 'frecency' property is a heuristic (https://en.wikipedia.org/wiki/Frecency)
 * that combines block usage frequenty and recency.
 *
 * Items are returned ordered descendingly by their 'utility' and 'frecency'.
 *
 * @param {Object}  state        Editor state.
 * @param {?string} rootClientId Optional root client ID of block list.
 *
 * @return {Editor.InserterItem[]} Items that appear in inserter.
 *
 * @typedef {Object} Editor.InserterItem
 * @property {string}   id                Unique identifier for the item.
 * @property {string}   name              The type of block to create.
 * @property {Object}   initialAttributes Attributes to pass to the newly created block.
 * @property {string}   title             Title of the item, as it appears in the inserter.
 * @property {string}   icon              Dashicon for the item, as it appears in the inserter.
 * @property {string}   category          Block category that the item is associated with.
 * @property {string[]} keywords          Keywords that can be searched to find this item.
 * @property {boolean}  isDisabled        Whether or not the user should be prevented from inserting
 *                                        this item.
 * @property {number}   utility           How useful we think this item is, between 0 and 3.
 * @property {number}   frecency          Hueristic that combines frequency and recency.
 */


var selectors_getInserterItems = Object(rememo["a" /* default */])(function (state) {
  var rootClientId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var calculateUtility = function calculateUtility(category, count, isContextual) {
    if (isContextual) {
      return INSERTER_UTILITY_HIGH;
    } else if (count > 0) {
      return INSERTER_UTILITY_MEDIUM;
    } else if (category === 'common') {
      return INSERTER_UTILITY_LOW;
    }

    return INSERTER_UTILITY_NONE;
  };

  var calculateFrecency = function calculateFrecency(time, count) {
    if (!time) {
      return count;
    } // The selector is cached, which means Date.now() is the last time that the
    // relevant state changed. This suits our needs.


    var duration = Date.now() - time;

    switch (true) {
      case duration < MILLISECONDS_PER_HOUR:
        return count * 4;

      case duration < MILLISECONDS_PER_DAY:
        return count * 2;

      case duration < MILLISECONDS_PER_WEEK:
        return count / 2;

      default:
        return count / 4;
    }
  };

  var buildBlockTypeInserterItem = function buildBlockTypeInserterItem(blockType) {
    var id = blockType.name;
    var isDisabled = false;

    if (!Object(external_this_wp_blocks_["hasBlockSupport"])(blockType.name, 'multiple', true)) {
      isDisabled = Object(external_lodash_["some"])(selectors_getBlocksByClientId(state, getClientIdsWithDescendants(state)), {
        name: blockType.name
      });
    }

    var isContextual = Object(external_lodash_["isArray"])(blockType.parent);

    var _ref = getInsertUsage(state, id) || {},
        time = _ref.time,
        _ref$count = _ref.count,
        count = _ref$count === void 0 ? 0 : _ref$count;

    return {
      id: id,
      name: blockType.name,
      initialAttributes: {},
      title: blockType.title,
      icon: blockType.icon,
      category: blockType.category,
      keywords: blockType.keywords,
      isDisabled: isDisabled,
      utility: calculateUtility(blockType.category, count, isContextual),
      frecency: calculateFrecency(time, count),
      hasChildBlocksWithInserterSupport: Object(external_this_wp_blocks_["hasChildBlocksWithInserterSupport"])(blockType.name)
    };
  };

  var buildReusableBlockInserterItem = function buildReusableBlockInserterItem(reusableBlock) {
    var id = "core/block/".concat(reusableBlock.id);
    var referencedBlockName = selectors_getBlockName(state, reusableBlock.clientId);
    var referencedBlockType = Object(external_this_wp_blocks_["getBlockType"])(referencedBlockName);

    var _ref2 = getInsertUsage(state, id) || {},
        time = _ref2.time,
        _ref2$count = _ref2.count,
        count = _ref2$count === void 0 ? 0 : _ref2$count;

    var utility = calculateUtility('reusable', count, false);
    var frecency = calculateFrecency(time, count);
    return {
      id: id,
      name: 'core/block',
      initialAttributes: {
        ref: reusableBlock.id
      },
      title: reusableBlock.title,
      icon: referencedBlockType.icon,
      category: 'reusable',
      keywords: [],
      isDisabled: false,
      utility: utility,
      frecency: frecency
    };
  };

  var blockTypeInserterItems = Object(external_this_wp_blocks_["getBlockTypes"])().filter(function (blockType) {
    return selectors_canIncludeBlockTypeInInserter(state, blockType, rootClientId);
  }).map(buildBlockTypeInserterItem);
  var reusableBlockInserterItems = getReusableBlocks(state).filter(function (block) {
    return selectors_canIncludeReusableBlockInInserter(state, block, rootClientId);
  }).map(buildReusableBlockInserterItem);
  return Object(external_lodash_["orderBy"])([].concat(Object(toConsumableArray["a" /* default */])(blockTypeInserterItems), Object(toConsumableArray["a" /* default */])(reusableBlockInserterItems)), ['utility', 'frecency'], ['desc', 'desc']);
}, function (state, rootClientId) {
  return [state.blockListSettings[rootClientId], state.blocks.byClientId, state.blocks.order, state.preferences.insertUsage, state.settings.allowedBlockTypes, state.settings.templateLock, getReusableBlocks(state), Object(external_this_wp_blocks_["getBlockTypes"])()];
});
/**
 * Determines whether there are items to show in the inserter.
 * @param {Object}  state        Editor state.
 * @param {?string} rootClientId Optional root client ID of block list.
 *
 * @return {boolean} Items that appear in inserter.
 */

var hasInserterItems = Object(rememo["a" /* default */])(function (state) {
  var rootClientId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var hasBlockType = Object(external_lodash_["some"])(Object(external_this_wp_blocks_["getBlockTypes"])(), function (blockType) {
    return selectors_canIncludeBlockTypeInInserter(state, blockType, rootClientId);
  });

  if (hasBlockType) {
    return true;
  }

  var hasReusableBlock = Object(external_lodash_["some"])(getReusableBlocks(state), function (block) {
    return selectors_canIncludeReusableBlockInInserter(state, block, rootClientId);
  });
  return hasReusableBlock;
}, function (state, rootClientId) {
  return [state.blockListSettings[rootClientId], state.blocks.byClientId, state.settings.allowedBlockTypes, state.settings.templateLock, getReusableBlocks(state), Object(external_this_wp_blocks_["getBlockTypes"])()];
});
/**
 * Returns the Block List settings of a block, if any exist.
 *
 * @param {Object}  state    Editor state.
 * @param {?string} clientId Block client ID.
 *
 * @return {?Object} Block settings of the block if set.
 */

function getBlockListSettings(state, clientId) {
  return state.blockListSettings[clientId];
}
/**
 * Returns the editor settings.
 *
 * @param {Object} state Editor state.
 *
 * @return {Object} The editor settings object.
 */

function selectors_getSettings(state) {
  return state.settings;
}
/**
 * Returns true if the most recent block change is be considered persistent, or
 * false otherwise. A persistent change is one committed by BlockEditorProvider
 * via its `onChange` callback, in addition to `onInput`.
 *
 * @param {Object} state Block editor state.
 *
 * @return {boolean} Whether the most recent block change was persistent.
 */

function isLastBlockChangePersistent(state) {
  return state.blocks.isPersistentChange;
}
/**
 * Returns true if the most recent block change is be considered ignored, or
 * false otherwise. An ignored change is one not to be committed by
 * BlockEditorProvider, neither via `onChange` nor `onInput`.
 *
 * @param {Object} state Block editor state.
 *
 * @return {boolean} Whether the most recent block change was ignored.
 */

function __unstableIsLastBlockChangeIgnored(state) {
  // TODO: Removal Plan: Changes incurred by RECEIVE_BLOCKS should not be
  // ignored if in-fact they result in a change in blocks state. The current
  // need to ignore changes not a result of user interaction should be
  // accounted for in the refactoring of reusable blocks as occurring within
  // their own separate block editor / state (#7119).
  return state.blocks.isIgnoredChange;
}
/**
 * Returns the value of a post meta from the editor settings.
 *
 * @param {Object} state Global application state.
 * @param {string} key   Meta Key to retrieve
 *
 * @return {*} Meta value
 */

function getPostMeta(state, key) {
  if (key === undefined) {
    return Object(external_lodash_["get"])(state, ['settings', '__experimentalMetaSource', 'value'], EMPTY_OBJECT);
  }

  return Object(external_lodash_["get"])(state, ['settings', '__experimentalMetaSource', 'value', key]);
}
/**
 * Returns the available reusable blocks
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Reusable blocks
 */


function getReusableBlocks(state) {
  return Object(external_lodash_["get"])(state, ['settings', '__experimentalReusableBlocks'], EMPTY_ARRAY);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/store/effects.js




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/**
 * Block validity is a function of blocks state (at the point of a
 * reset) and the template setting. As a compromise to its placement
 * across distinct parts of state, it is implemented here as a side-
 * effect of the block reset action.
 *
 * @param {Object} action RESET_BLOCKS action.
 * @param {Object} store  Store instance.
 *
 * @return {?Object} New validity set action if validity has changed.
 */

function validateBlocksToTemplate(action, store) {
  var state = store.getState();
  var template = getTemplate(state);
  var templateLock = selectors_getTemplateLock(state); // Unlocked templates are considered always valid because they act
  // as default values only.

  var isBlocksValidToTemplate = !template || templateLock !== 'all' || Object(external_this_wp_blocks_["doBlocksMatchTemplate"])(action.blocks, template); // Update if validity has changed.

  if (isBlocksValidToTemplate !== isValidTemplate(state)) {
    return setTemplateValidity(isBlocksValidToTemplate);
  }
}
/* harmony default export */ var effects = ({
  MERGE_BLOCKS: function MERGE_BLOCKS(action, store) {
    var dispatch = store.dispatch;
    var state = store.getState();

    var _action$blocks = Object(slicedToArray["a" /* default */])(action.blocks, 2),
        firstBlockClientId = _action$blocks[0],
        secondBlockClientId = _action$blocks[1];

    var blockA = selectors_getBlock(state, firstBlockClientId);
    var blockType = Object(external_this_wp_blocks_["getBlockType"])(blockA.name); // Only focus the previous block if it's not mergeable

    if (!blockType.merge) {
      dispatch(actions_selectBlock(blockA.clientId));
      return;
    } // We can only merge blocks with similar types
    // thus, we transform the block to merge first


    var blockB = selectors_getBlock(state, secondBlockClientId);
    var blocksWithTheSameType = blockA.name === blockB.name ? [blockB] : Object(external_this_wp_blocks_["switchToBlockType"])(blockB, blockA.name); // If the block types can not match, do nothing

    if (!blocksWithTheSameType || !blocksWithTheSameType.length) {
      return;
    } // Calling the merge to update the attributes and remove the block to be merged


    var updatedAttributes = blockType.merge(blockA.attributes, blocksWithTheSameType[0].attributes);
    dispatch(actions_selectBlock(blockA.clientId, -1));
    dispatch(actions_replaceBlocks([blockA.clientId, blockB.clientId], [Object(objectSpread["a" /* default */])({}, blockA, {
      attributes: Object(objectSpread["a" /* default */])({}, blockA.attributes, updatedAttributes)
    })].concat(Object(toConsumableArray["a" /* default */])(blocksWithTheSameType.slice(1)))));
  },
  RESET_BLOCKS: [validateBlocksToTemplate],
  MULTI_SELECT: function MULTI_SELECT(action, _ref) {
    var getState = _ref.getState;
    var blockCount = selectors_getSelectedBlockCount(getState());
    /* translators: %s: number of selected blocks */

    Object(external_this_wp_a11y_["speak"])(Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%s block selected.', '%s blocks selected.', blockCount), blockCount), 'assertive');
  },
  SYNCHRONIZE_TEMPLATE: function SYNCHRONIZE_TEMPLATE(action, _ref2) {
    var getState = _ref2.getState;
    var state = getState();
    var blocks = getBlocks(state);
    var template = getTemplate(state);
    var updatedBlockList = Object(external_this_wp_blocks_["synchronizeBlocksWithTemplate"])(blocks, template);
    return resetBlocks(updatedBlockList);
  }
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/store/middlewares.js


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Applies the custom middlewares used specifically in the editor module.
 *
 * @param {Object} store Store Object.
 *
 * @return {Object} Update Store Object.
 */

function applyMiddlewares(store) {
  var middlewares = [refx_default()(effects), lib_default.a];

  var enhancedDispatch = function enhancedDispatch() {
    throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
  };

  var chain = [];
  var middlewareAPI = {
    getState: store.getState,
    dispatch: function dispatch() {
      return enhancedDispatch.apply(void 0, arguments);
    }
  };
  chain = middlewares.map(function (middleware) {
    return middleware(middlewareAPI);
  });
  enhancedDispatch = external_lodash_["flowRight"].apply(void 0, Object(toConsumableArray["a" /* default */])(chain))(store.dispatch);
  store.dispatch = enhancedDispatch;
  return store;
}

/* harmony default export */ var store_middlewares = (applyMiddlewares);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/store/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */






/**
 * Module Constants
 */

var MODULE_KEY = 'core/block-editor';
var store_store = Object(external_this_wp_data_["registerStore"])(MODULE_KEY, {
  reducer: store_reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject,
  controls: store_controls,
  persist: ['preferences']
});
store_middlewares(store_store);
/* harmony default export */ var build_module_store = (store_store);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(19);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(16);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(6);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-edit/context.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




var _createContext = Object(external_this_wp_element_["createContext"])({
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: external_lodash_["noop"],
  clientId: null
}),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;


/**
 * A Higher Order Component used to inject BlockEdit context to the
 * wrapped component.
 *
 * @param {Function} mapContextToProps Function called on every context change,
 *                                     expected to return object of props to
 *                                     merge with the component's own props.
 *
 * @return {Component} Enhanced component with injected context as props.
 */

var context_withBlockEditContext = function withBlockEditContext(mapContextToProps) {
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      return Object(external_this_wp_element_["createElement"])(Consumer, null, function (context) {
        return Object(external_this_wp_element_["createElement"])(OriginalComponent, Object(esm_extends["a" /* default */])({}, props, mapContextToProps(context, props)));
      });
    };
  }, 'withBlockEditContext');
};
/**
 * A Higher Order Component used to render conditionally the wrapped
 * component only when the BlockEdit has selected state set.
 *
 * @param {Component} OriginalComponent Component to wrap.
 *
 * @return {Component} Component which renders only when the BlockEdit is selected.
 */

var ifBlockEditSelected = Object(external_this_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
  return function (props) {
    return Object(external_this_wp_element_["createElement"])(Consumer, null, function (_ref) {
      var isSelected = _ref.isSelected;
      return isSelected && Object(external_this_wp_element_["createElement"])(OriginalComponent, props);
    });
  };
}, 'ifBlockEditSelected');

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/autocomplete/index.js










/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/*
 * Use one array instance for fallback rather than inline array literals
 * because the latter may cause rerender due to failed prop equality checks.
 */

var completersFallback = [];
/**
 * Wrap the default Autocomplete component with one that
 * supports a filter hook for customizing its list of autocompleters.
 *
 * Since there may be many Autocomplete instances at one time, this component
 * applies the filter on demand, when the component is first focused after
 * receiving a new list of completers.
 *
 * This function is exported for unit test.
 *
 * @param  {Function} Autocomplete Original component.
 * @return {Function}              Wrapped component
 */

function withFilteredAutocompleters(Autocomplete) {
  return (
    /*#__PURE__*/
    function (_Component) {
      Object(inherits["a" /* default */])(FilteredAutocomplete, _Component);

      function FilteredAutocomplete() {
        var _this;

        Object(classCallCheck["a" /* default */])(this, FilteredAutocomplete);

        _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(FilteredAutocomplete).call(this));
        _this.state = {
          completers: completersFallback
        };
        _this.saveParentRef = _this.saveParentRef.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
        _this.onFocus = _this.onFocus.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
        return _this;
      }

      Object(createClass["a" /* default */])(FilteredAutocomplete, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          var hasFocus = this.parentNode.contains(document.activeElement);
          /*
           * It's possible for props to be updated when the component has focus,
           * so here, we ensure new completers are immediately applied while we
           * have the focus.
           *
           * NOTE: This may trigger another render but only when the component has focus.
           */

          if (hasFocus && this.hasStaleCompleters()) {
            this.updateCompletersState();
          }
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          if (this.hasStaleCompleters()) {
            this.updateCompletersState();
          }
        }
      }, {
        key: "hasStaleCompleters",
        value: function hasStaleCompleters() {
          return !('lastFilteredCompletersProp' in this.state) || this.state.lastFilteredCompletersProp !== this.props.completers;
        }
      }, {
        key: "updateCompletersState",
        value: function updateCompletersState() {
          var _this$props = this.props,
              blockName = _this$props.blockName,
              completers = _this$props.completers;
          var nextCompleters = completers;
          var lastFilteredCompletersProp = nextCompleters;

          if (Object(external_this_wp_hooks_["hasFilter"])('editor.Autocomplete.completers')) {
            nextCompleters = Object(external_this_wp_hooks_["applyFilters"])('editor.Autocomplete.completers', // Provide copies so filters may directly modify them.
            nextCompleters && nextCompleters.map(external_lodash_["clone"]), blockName);
          }

          this.setState({
            lastFilteredCompletersProp: lastFilteredCompletersProp,
            completers: nextCompleters || completersFallback
          });
        }
      }, {
        key: "saveParentRef",
        value: function saveParentRef(parentNode) {
          this.parentNode = parentNode;
        }
      }, {
        key: "render",
        value: function render() {
          var completers = this.state.completers;

          var autocompleteProps = Object(objectSpread["a" /* default */])({}, this.props, {
            completers: completers
          });

          return Object(external_this_wp_element_["createElement"])("div", {
            onFocus: this.onFocus,
            ref: this.saveParentRef
          }, Object(external_this_wp_element_["createElement"])(Autocomplete, Object(esm_extends["a" /* default */])({
            onFocus: this.onFocus
          }, autocompleteProps)));
        }
      }]);

      return FilteredAutocomplete;
    }(external_this_wp_element_["Component"])
  );
}
/* harmony default export */ var autocomplete = (Object(external_this_wp_compose_["compose"])([context_withBlockEditContext(function (_ref) {
  var name = _ref.name;
  return {
    blockName: name
  };
}), withFilteredAutocompleters])(external_this_wp_components_["Autocomplete"]));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/alignment-toolbar/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


var DEFAULT_ALIGNMENT_CONTROLS = [{
  icon: 'editor-alignleft',
  title: Object(external_this_wp_i18n_["__"])('Align text left'),
  align: 'left'
}, {
  icon: 'editor-aligncenter',
  title: Object(external_this_wp_i18n_["__"])('Align text center'),
  align: 'center'
}, {
  icon: 'editor-alignright',
  title: Object(external_this_wp_i18n_["__"])('Align text right'),
  align: 'right'
}];
function AlignmentToolbar(_ref) {
  var isCollapsed = _ref.isCollapsed,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$alignmentControl = _ref.alignmentControls,
      alignmentControls = _ref$alignmentControl === void 0 ? DEFAULT_ALIGNMENT_CONTROLS : _ref$alignmentControl;

  function applyOrUnset(align) {
    return function () {
      return onChange(value === align ? undefined : align);
    };
  }

  var activeAlignment = Object(external_lodash_["find"])(alignmentControls, function (control) {
    return control.align === value;
  });
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Toolbar"], {
    isCollapsed: isCollapsed,
    icon: activeAlignment ? activeAlignment.icon : 'editor-alignleft',
    label: Object(external_this_wp_i18n_["__"])('Change Text Alignment'),
    controls: alignmentControls.map(function (control) {
      var align = control.align;
      var isActive = value === align;
      return Object(objectSpread["a" /* default */])({}, control, {
        isActive: isActive,
        onClick: applyOrUnset(align)
      });
    })
  });
}
/* harmony default export */ var alignment_toolbar = (Object(external_this_wp_compose_["compose"])(context_withBlockEditContext(function (_ref2) {
  var clientId = _ref2.clientId;
  return {
    clientId: clientId
  };
}), Object(external_this_wp_viewport_["withViewportMatch"])({
  isLargeViewport: 'medium'
}), Object(external_this_wp_data_["withSelect"])(function (select, _ref3) {
  var clientId = _ref3.clientId,
      isLargeViewport = _ref3.isLargeViewport,
      isCollapsed = _ref3.isCollapsed;

  var _select = select('core/block-editor'),
      getBlockRootClientId = _select.getBlockRootClientId,
      getSettings = _select.getSettings;

  return {
    isCollapsed: isCollapsed || !isLargeViewport || !getSettings().hasFixedToolbar && getBlockRootClientId(clientId)
  };
}))(AlignmentToolbar));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-alignment-toolbar/index.js



/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var BLOCK_ALIGNMENTS_CONTROLS = {
  left: {
    icon: 'align-left',
    title: Object(external_this_wp_i18n_["__"])('Align left')
  },
  center: {
    icon: 'align-center',
    title: Object(external_this_wp_i18n_["__"])('Align center')
  },
  right: {
    icon: 'align-right',
    title: Object(external_this_wp_i18n_["__"])('Align right')
  },
  wide: {
    icon: 'align-wide',
    title: Object(external_this_wp_i18n_["__"])('Wide width')
  },
  full: {
    icon: 'align-full-width',
    title: Object(external_this_wp_i18n_["__"])('Full width')
  }
};
var DEFAULT_CONTROLS = ['left', 'center', 'right', 'wide', 'full'];
var WIDE_CONTROLS = ['wide', 'full'];
function BlockAlignmentToolbar(_ref) {
  var isCollapsed = _ref.isCollapsed,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? DEFAULT_CONTROLS : _ref$controls,
      _ref$wideControlsEnab = _ref.wideControlsEnabled,
      wideControlsEnabled = _ref$wideControlsEnab === void 0 ? false : _ref$wideControlsEnab;

  function applyOrUnset(align) {
    return function () {
      return onChange(value === align ? undefined : align);
    };
  }

  var enabledControls = wideControlsEnabled ? controls : controls.filter(function (control) {
    return WIDE_CONTROLS.indexOf(control) === -1;
  });
  var activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[value];
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Toolbar"], {
    isCollapsed: isCollapsed,
    icon: activeAlignment ? activeAlignment.icon : 'align-left',
    label: Object(external_this_wp_i18n_["__"])('Change Alignment'),
    controls: enabledControls.map(function (control) {
      return Object(objectSpread["a" /* default */])({}, BLOCK_ALIGNMENTS_CONTROLS[control], {
        isActive: value === control,
        onClick: applyOrUnset(control)
      });
    })
  });
}
/* harmony default export */ var block_alignment_toolbar = (Object(external_this_wp_compose_["compose"])(context_withBlockEditContext(function (_ref2) {
  var clientId = _ref2.clientId;
  return {
    clientId: clientId
  };
}), Object(external_this_wp_viewport_["withViewportMatch"])({
  isLargeViewport: 'medium'
}), Object(external_this_wp_data_["withSelect"])(function (select, _ref3) {
  var clientId = _ref3.clientId,
      isLargeViewport = _ref3.isLargeViewport,
      isCollapsed = _ref3.isCollapsed;

  var _select = select('core/block-editor'),
      getBlockRootClientId = _select.getBlockRootClientId,
      getSettings = _select.getSettings;

  var settings = getSettings();
  return {
    wideControlsEnabled: settings.alignWide,
    isCollapsed: isCollapsed || !isLargeViewport || !settings.hasFixedToolbar && getBlockRootClientId(clientId)
  };
}))(BlockAlignmentToolbar));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-controls/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var _createSlotFill = Object(external_this_wp_components_["createSlotFill"])('BlockControls'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var block_controls_BlockControlsFill = function BlockControlsFill(_ref) {
  var controls = _ref.controls,
      children = _ref.children;
  return Object(external_this_wp_element_["createElement"])(Fill, null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Toolbar"], {
    controls: controls
  }), children);
};

var BlockControls = ifBlockEditSelected(block_controls_BlockControlsFill);
BlockControls.Slot = Slot;
/* harmony default export */ var block_controls = (BlockControls);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-edit/edit.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



var edit_Edit = function Edit(props) {
  var _props$attributes = props.attributes,
      attributes = _props$attributes === void 0 ? {} : _props$attributes,
      name = props.name;
  var blockType = Object(external_this_wp_blocks_["getBlockType"])(name);

  if (!blockType) {
    return null;
  } // Generate a class name for the block's editable form


  var generatedClassName = Object(external_this_wp_blocks_["hasBlockSupport"])(blockType, 'className', true) ? Object(external_this_wp_blocks_["getBlockDefaultClassName"])(name) : null;
  var className = classnames_default()(generatedClassName, attributes.className); // `edit` and `save` are functions or components describing the markup
  // with which a block is displayed. If `blockType` is valid, assign
  // them preferentially as the render value for the block.

  var Component = blockType.edit || blockType.save;
  return Object(external_this_wp_element_["createElement"])(Component, Object(esm_extends["a" /* default */])({}, props, {
    className: className
  }));
};
/* harmony default export */ var edit = (Object(external_this_wp_components_["withFilters"])('editor.BlockEdit')(edit_Edit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-edit/index.js








/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




var block_edit_BlockEdit =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockEdit, _Component);

  function BlockEdit(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockEdit);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockEdit).call(this, props));
    _this.setFocusedElement = _this.setFocusedElement.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.state = {
      focusedElement: null,
      setFocusedElement: _this.setFocusedElement
    };
    return _this;
  }

  Object(createClass["a" /* default */])(BlockEdit, [{
    key: "setFocusedElement",
    value: function setFocusedElement(focusedElement) {
      this.setState(function (prevState) {
        if (prevState.focusedElement === focusedElement) {
          return null;
        }

        return {
          focusedElement: focusedElement
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(external_this_wp_element_["createElement"])(Provider, {
        value: this.state
      }, Object(external_this_wp_element_["createElement"])(edit, this.props));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var clientId = props.clientId,
          name = props.name,
          isSelected = props.isSelected;
      return {
        name: name,
        isSelected: isSelected,
        clientId: clientId
      };
    }
  }]);

  return BlockEdit;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var block_edit = (block_edit_BlockEdit);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-format-controls/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var block_format_controls_createSlotFill = Object(external_this_wp_components_["createSlotFill"])('BlockFormatControls'),
    block_format_controls_Fill = block_format_controls_createSlotFill.Fill,
    block_format_controls_Slot = block_format_controls_createSlotFill.Slot;

var BlockFormatControls = ifBlockEditSelected(block_format_controls_Fill);
BlockFormatControls.Slot = block_format_controls_Slot;
/* harmony default export */ var block_format_controls = (BlockFormatControls);

// EXTERNAL MODULE: external {"this":["wp","keycodes"]}
var external_this_wp_keycodes_ = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-icon/index.js


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


function BlockIcon(_ref) {
  var icon = _ref.icon,
      _ref$showColors = _ref.showColors,
      showColors = _ref$showColors === void 0 ? false : _ref$showColors,
      className = _ref.className;

  if (Object(external_lodash_["get"])(icon, ['src']) === 'block-default') {
    icon = {
      src: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
        d: "M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"
      }))
    };
  }

  var renderedIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
    icon: icon && icon.src ? icon.src : icon
  });
  var style = showColors ? {
    backgroundColor: icon && icon.background,
    color: icon && icon.foreground
  } : {};
  return Object(external_this_wp_element_["createElement"])("span", {
    style: style,
    className: classnames_default()('editor-block-icon block-editor-block-icon', className, {
      'has-colors': showColors
    })
  }, renderedIcon);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-navigation/index.js


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function BlockNavigationList(_ref) {
  var blocks = _ref.blocks,
      selectedBlockClientId = _ref.selectedBlockClientId,
      selectBlock = _ref.selectBlock,
      showNestedBlocks = _ref.showNestedBlocks;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(external_this_wp_element_["createElement"])("ul", {
      className: "editor-block-navigation__list block-editor-block-navigation__list",
      role: "list"
    }, Object(external_lodash_["map"])(blocks, function (block) {
      var blockType = Object(external_this_wp_blocks_["getBlockType"])(block.name);
      var isSelected = block.clientId === selectedBlockClientId;
      return Object(external_this_wp_element_["createElement"])("li", {
        key: block.clientId
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-block-navigation__item block-editor-block-navigation__item"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        className: classnames_default()('editor-block-navigation__item-button block-editor-block-navigation__item-button', {
          'is-selected': isSelected
        }),
        onClick: function onClick() {
          return selectBlock(block.clientId);
        }
      }, Object(external_this_wp_element_["createElement"])(BlockIcon, {
        icon: blockType.icon,
        showColors: true
      }), blockType.title, isSelected && Object(external_this_wp_element_["createElement"])("span", {
        className: "screen-reader-text"
      }, Object(external_this_wp_i18n_["__"])('(selected block)')))), showNestedBlocks && !!block.innerBlocks && !!block.innerBlocks.length && Object(external_this_wp_element_["createElement"])(BlockNavigationList, {
        blocks: block.innerBlocks,
        selectedBlockClientId: selectedBlockClientId,
        selectBlock: selectBlock,
        showNestedBlocks: true
      }));
    }))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

function BlockNavigation(_ref2) {
  var rootBlock = _ref2.rootBlock,
      rootBlocks = _ref2.rootBlocks,
      selectedBlockClientId = _ref2.selectedBlockClientId,
      selectBlock = _ref2.selectBlock;

  if (!rootBlocks || rootBlocks.length === 0) {
    return null;
  }

  var hasHierarchy = rootBlock && (rootBlock.clientId !== selectedBlockClientId || rootBlock.innerBlocks && rootBlock.innerBlocks.length !== 0);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["NavigableMenu"], {
    role: "presentation",
    className: "editor-block-navigation__container block-editor-block-navigation__container"
  }, Object(external_this_wp_element_["createElement"])("p", {
    className: "editor-block-navigation__label block-editor-block-navigation__label"
  }, Object(external_this_wp_i18n_["__"])('Block Navigation')), hasHierarchy && Object(external_this_wp_element_["createElement"])(BlockNavigationList, {
    blocks: [rootBlock],
    selectedBlockClientId: selectedBlockClientId,
    selectBlock: selectBlock,
    showNestedBlocks: true
  }), !hasHierarchy && Object(external_this_wp_element_["createElement"])(BlockNavigationList, {
    blocks: rootBlocks,
    selectedBlockClientId: selectedBlockClientId,
    selectBlock: selectBlock
  }));
}

/* harmony default export */ var block_navigation = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getBlockHierarchyRootClientId = _select.getBlockHierarchyRootClientId,
      getBlock = _select.getBlock,
      getBlocks = _select.getBlocks;

  var selectedBlockClientId = getSelectedBlockClientId();
  return {
    rootBlocks: getBlocks(),
    rootBlock: selectedBlockClientId ? getBlock(getBlockHierarchyRootClientId(selectedBlockClientId)) : null,
    selectedBlockClientId: selectedBlockClientId
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref3) {
  var _ref3$onSelect = _ref3.onSelect,
      onSelect = _ref3$onSelect === void 0 ? external_lodash_["noop"] : _ref3$onSelect;
  return {
    selectBlock: function selectBlock(clientId) {
      dispatch('core/block-editor').selectBlock(clientId);
      onSelect(clientId);
    }
  };
}))(BlockNavigation));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-navigation/dropdown.js



/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


var MenuIcon = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "20",
  height: "20"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M5 5H3v2h2V5zm3 8h11v-2H8v2zm9-8H6v2h11V5zM7 11H5v2h2v-2zm0 8h2v-2H7v2zm3-2v2h11v-2H10z"
}));

function BlockNavigationDropdown(_ref) {
  var hasBlocks = _ref.hasBlocks,
      isDisabled = _ref.isDisabled;
  var isEnabled = hasBlocks && !isDisabled;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Dropdown"], {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, isEnabled && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["KeyboardShortcuts"], {
        bindGlobal: true,
        shortcuts: Object(defineProperty["a" /* default */])({}, external_this_wp_keycodes_["rawShortcut"].access('o'), onToggle)
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
        icon: MenuIcon,
        "aria-expanded": isOpen,
        onClick: isEnabled ? onToggle : undefined,
        label: Object(external_this_wp_i18n_["__"])('Block Navigation'),
        className: "editor-block-navigation block-editor-block-navigation",
        shortcut: external_this_wp_keycodes_["displayShortcut"].access('o'),
        "aria-disabled": !isEnabled
      }));
    },
    renderContent: function renderContent(_ref4) {
      var onClose = _ref4.onClose;
      return Object(external_this_wp_element_["createElement"])(block_navigation, {
        onSelect: onClose
      });
    }
  });
}

/* harmony default export */ var dropdown = (Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    hasBlocks: !!select('core/block-editor').getBlockCount()
  };
})(BlockNavigationDropdown));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/color-palette/with-color-context.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/* harmony default export */ var with_color_context = (Object(external_this_wp_compose_["createHigherOrderComponent"])(Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  var settings = select('core/block-editor').getSettings();
  var colors = ownProps.colors === undefined ? settings.colors : ownProps.colors;
  var disableCustomColors = ownProps.disableCustomColors === undefined ? settings.disableCustomColors : ownProps.disableCustomColors;
  return {
    colors: colors,
    disableCustomColors: disableCustomColors,
    hasColorsToChoose: !Object(external_lodash_["isEmpty"])(colors) || !disableCustomColors
  };
}), 'withColorContext'));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/color-palette/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/* harmony default export */ var color_palette = (with_color_context(external_this_wp_components_["ColorPalette"]));

// EXTERNAL MODULE: ./node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__(45);
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/colors/utils.js
/**
 * External dependencies
 */


/**
 * Provided an array of color objects as set by the theme or by the editor defaults,
 * and the values of the defined color or custom color returns a color object describing the color.
 *
 * @param {Array}   colors       Array of color objects as set by the theme or by the editor defaults.
 * @param {?string} definedColor A string containing the color slug.
 * @param {?string} customColor  A string containing the customColor value.
 *
 * @return {?string} If definedColor is passed and the name is found in colors,
 *                   the color object exactly as set by the theme or editor defaults is returned.
 *                   Otherwise, an object that just sets the color is defined.
 */

var utils_getColorObjectByAttributeValues = function getColorObjectByAttributeValues(colors, definedColor, customColor) {
  if (definedColor) {
    var colorObj = Object(external_lodash_["find"])(colors, {
      slug: definedColor
    });

    if (colorObj) {
      return colorObj;
    }
  }

  return {
    color: customColor
  };
};
/**
* Provided an array of color objects as set by the theme or by the editor defaults, and a color value returns the color object matching that value or undefined.
*
* @param {Array}   colors      Array of color objects as set by the theme or by the editor defaults.
* @param {?string} colorValue  A string containing the color value.
*
* @return {?string} Returns the color object included in the colors array whose color property equals colorValue.
*                   Returns undefined if no color object matches this requirement.
*/

var utils_getColorObjectByColorValue = function getColorObjectByColorValue(colors, colorValue) {
  return Object(external_lodash_["find"])(colors, {
    color: colorValue
  });
};
/**
 * Returns a class based on the context a color is being used and its slug.
 *
 * @param {string} colorContextName Context/place where color is being used e.g: background, text etc...
 * @param {string} colorSlug        Slug of the color.
 *
 * @return {string} String with the class corresponding to the color in the provided context.
 */

function getColorClassName(colorContextName, colorSlug) {
  if (!colorContextName || !colorSlug) {
    return;
  }

  return "has-".concat(Object(external_lodash_["kebabCase"])(colorSlug), "-").concat(colorContextName);
}
/**
* Given an array of color objects and a color value returns the color value of the most readable color in the array.
*
* @param {Array}   colors     Array of color objects as set by the theme or by the editor defaults.
* @param {?string} colorValue A string containing the color value.
*
* @return {string} String with the color value of the most readable color.
*/

function utils_getMostReadableColor(colors, colorValue) {
  return tinycolor_default.a.mostReadable(colorValue, Object(external_lodash_["map"])(colors, 'color')).toHexString();
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/colors/with-colors.js











/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


var DEFAULT_COLORS = [];
/**
 * Higher order component factory for injecting the `colorsArray` argument as
 * the colors prop in the `withCustomColors` HOC.
 *
 * @param {Array} colorsArray An array of color objects.
 *
 * @return {function} The higher order component.
 */

var with_colors_withCustomColorPalette = function withCustomColorPalette(colorsArray) {
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(function (WrappedComponent) {
    return function (props) {
      return Object(external_this_wp_element_["createElement"])(WrappedComponent, Object(esm_extends["a" /* default */])({}, props, {
        colors: colorsArray
      }));
    };
  }, 'withCustomColorPalette');
};
/**
 * Higher order component factory for injecting the editor colors as the
 * `colors` prop in the `withColors` HOC.
 *
 * @return {function} The higher order component.
 */


var with_colors_withEditorColorPalette = function withEditorColorPalette() {
  return Object(external_this_wp_data_["withSelect"])(function (select) {
    var settings = select('core/block-editor').getSettings();
    return {
      colors: Object(external_lodash_["get"])(settings, ['colors'], DEFAULT_COLORS)
    };
  });
};
/**
 * Helper function used with `createHigherOrderComponent` to create
 * higher order components for managing color logic.
 *
 * @param {Array}    colorTypes       An array of color types (e.g. 'backgroundColor, borderColor).
 * @param {Function} withColorPalette A HOC for injecting the 'colors' prop into the WrappedComponent.
 *
 * @return {Component} The component that can be used as a HOC.
 */


function createColorHOC(colorTypes, withColorPalette) {
  var colorMap = Object(external_lodash_["reduce"])(colorTypes, function (colorObject, colorType) {
    return Object(objectSpread["a" /* default */])({}, colorObject, Object(external_lodash_["isString"])(colorType) ? Object(defineProperty["a" /* default */])({}, colorType, Object(external_lodash_["kebabCase"])(colorType)) : colorType);
  }, {});
  return Object(external_this_wp_compose_["compose"])([withColorPalette, function (WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_Component) {
        Object(inherits["a" /* default */])(_class, _Component);

        function _class(props) {
          var _this;

          Object(classCallCheck["a" /* default */])(this, _class);

          _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(_class).call(this, props));
          _this.setters = _this.createSetters();
          _this.colorUtils = {
            getMostReadableColor: _this.getMostReadableColor.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)))
          };
          _this.state = {};
          return _this;
        }

        Object(createClass["a" /* default */])(_class, [{
          key: "getMostReadableColor",
          value: function getMostReadableColor(colorValue) {
            var colors = this.props.colors;
            return utils_getMostReadableColor(colors, colorValue);
          }
        }, {
          key: "createSetters",
          value: function createSetters() {
            var _this2 = this;

            return Object(external_lodash_["reduce"])(colorMap, function (settersAccumulator, colorContext, colorAttributeName) {
              var upperFirstColorAttributeName = Object(external_lodash_["upperFirst"])(colorAttributeName);
              var customColorAttributeName = "custom".concat(upperFirstColorAttributeName);
              settersAccumulator["set".concat(upperFirstColorAttributeName)] = _this2.createSetColor(colorAttributeName, customColorAttributeName);
              return settersAccumulator;
            }, {});
          }
        }, {
          key: "createSetColor",
          value: function createSetColor(colorAttributeName, customColorAttributeName) {
            var _this3 = this;

            return function (colorValue) {
              var _this3$props$setAttri;

              var colorObject = utils_getColorObjectByColorValue(_this3.props.colors, colorValue);

              _this3.props.setAttributes((_this3$props$setAttri = {}, Object(defineProperty["a" /* default */])(_this3$props$setAttri, colorAttributeName, colorObject && colorObject.slug ? colorObject.slug : undefined), Object(defineProperty["a" /* default */])(_this3$props$setAttri, customColorAttributeName, colorObject && colorObject.slug ? undefined : colorValue), _this3$props$setAttri));
            };
          }
        }, {
          key: "render",
          value: function render() {
            return Object(external_this_wp_element_["createElement"])(WrappedComponent, Object(objectSpread["a" /* default */])({}, this.props, {
              colors: undefined
            }, this.state, this.setters, {
              colorUtils: this.colorUtils
            }));
          }
        }], [{
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(_ref2, previousState) {
            var attributes = _ref2.attributes,
                colors = _ref2.colors;
            return Object(external_lodash_["reduce"])(colorMap, function (newState, colorContext, colorAttributeName) {
              var colorObject = utils_getColorObjectByAttributeValues(colors, attributes[colorAttributeName], attributes["custom".concat(Object(external_lodash_["upperFirst"])(colorAttributeName))]);
              var previousColorObject = previousState[colorAttributeName];
              var previousColor = Object(external_lodash_["get"])(previousColorObject, ['color']);
              /**
              * The "and previousColorObject" condition checks that a previous color object was already computed.
              * At the start previousColorObject and colorValue are both equal to undefined
              * bus as previousColorObject does not exist we should compute the object.
              */

              if (previousColor === colorObject.color && previousColorObject) {
                newState[colorAttributeName] = previousColorObject;
              } else {
                newState[colorAttributeName] = Object(objectSpread["a" /* default */])({}, colorObject, {
                  class: getColorClassName(colorContext, colorObject.slug)
                });
              }

              return newState;
            }, {});
          }
        }]);

        return _class;
      }(external_this_wp_element_["Component"])
    );
  }]);
}
/**
 * A higher-order component factory for creating a 'withCustomColors' HOC, which handles color logic
 * for class generation color value, retrieval and color attribute setting.
 *
 * Use this higher-order component to work with a custom set of colors.
 *
 * @example
 *
 * ```jsx
 * const CUSTOM_COLORS = [ { name: 'Red', slug: 'red', color: '#ff0000' }, { name: 'Blue', slug: 'blue', color: '#0000ff' } ];
 * const withCustomColors = createCustomColorsHOC( CUSTOM_COLORS );
 * // ...
 * export default compose(
 *     withCustomColors( 'backgroundColor', 'borderColor' ),
 *     MyColorfulComponent,
 * );
 * ```
 *
 * @param {Array} colorsArray The array of color objects (name, slug, color, etc... ).
 *
 * @return {Function} Higher-order component.
 */


function createCustomColorsHOC(colorsArray) {
  return function () {
    var withColorPalette = with_colors_withCustomColorPalette(colorsArray);

    for (var _len = arguments.length, colorTypes = new Array(_len), _key = 0; _key < _len; _key++) {
      colorTypes[_key] = arguments[_key];
    }

    return Object(external_this_wp_compose_["createHigherOrderComponent"])(createColorHOC(colorTypes, withColorPalette), 'withCustomColors');
  };
}
/**
 * A higher-order component, which handles color logic for class generation color value, retrieval and color attribute setting.
 *
 * For use with the default editor/theme color palette.
 *
 * @example
 *
 * ```jsx
 * export default compose(
 *     withColors( 'backgroundColor', { textColor: 'color' } ),
 *     MyColorfulComponent,
 * );
 * ```
 *
 * @param {...(object|string)} colorTypes The arguments can be strings or objects. If the argument is an object,
 *                                        it should contain the color attribute name as key and the color context as value.
 *                                        If the argument is a string the value should be the color attribute name,
 *                                        the color context is computed by applying a kebab case transform to the value.
 *                                        Color context represents the context/place where the color is going to be used.
 *                                        The class name of the color is generated using 'has' followed by the color name
 *                                        and ending with the color context all in kebab case e.g: has-green-background-color.
 *
 * @return {Function} Higher-order component.
 */

function withColors() {
  var withColorPalette = with_colors_withEditorColorPalette();

  for (var _len2 = arguments.length, colorTypes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    colorTypes[_key2] = arguments[_key2];
  }

  return Object(external_this_wp_compose_["createHigherOrderComponent"])(createColorHOC(colorTypes, withColorPalette), 'withColors');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/colors/index.js



// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/contrast-checker/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function ContrastChecker(_ref) {
  var backgroundColor = _ref.backgroundColor,
      fallbackBackgroundColor = _ref.fallbackBackgroundColor,
      fallbackTextColor = _ref.fallbackTextColor,
      fontSize = _ref.fontSize,
      isLargeText = _ref.isLargeText,
      textColor = _ref.textColor;

  if (!(backgroundColor || fallbackBackgroundColor) || !(textColor || fallbackTextColor)) {
    return null;
  }

  var tinyBackgroundColor = tinycolor_default()(backgroundColor || fallbackBackgroundColor);
  var tinyTextColor = tinycolor_default()(textColor || fallbackTextColor);
  var hasTransparency = tinyBackgroundColor.getAlpha() !== 1 || tinyTextColor.getAlpha() !== 1;

  if (hasTransparency || tinycolor_default.a.isReadable(tinyBackgroundColor, tinyTextColor, {
    level: 'AA',
    size: isLargeText || isLargeText !== false && fontSize >= 24 ? 'large' : 'small'
  })) {
    return null;
  }

  var msg = tinyBackgroundColor.getBrightness() < tinyTextColor.getBrightness() ? Object(external_this_wp_i18n_["__"])('This color combination may be hard for people to read. Try using a darker background color and/or a brighter text color.') : Object(external_this_wp_i18n_["__"])('This color combination may be hard for people to read. Try using a brighter background color and/or a darker text color.');
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-contrast-checker block-editor-contrast-checker"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Notice"], {
    status: "warning",
    isDismissible: false
  }, msg));
}

/* harmony default export */ var contrast_checker = (ContrastChecker);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/font-sizes/utils.js
/**
 * External dependencies
 */

/**
 *  Returns the font size object based on an array of named font sizes and the namedFontSize and customFontSize values.
 * 	If namedFontSize is undefined or not found in fontSizes an object with just the size value based on customFontSize is returned.
 *
 * @param {Array}   fontSizes               Array of font size objects containing at least the "name" and "size" values as properties.
 * @param {?string} fontSizeAttribute       Content of the font size attribute (slug).
 * @param {?number} customFontSizeAttribute Contents of the custom font size attribute (value).
 *
 * @return {?string} If fontSizeAttribute is set and an equal slug is found in fontSizes it returns the font size object for that slug.
 * 					 Otherwise, an object with just the size value based on customFontSize is returned.
 */

var utils_getFontSize = function getFontSize(fontSizes, fontSizeAttribute, customFontSizeAttribute) {
  if (fontSizeAttribute) {
    var fontSizeObject = Object(external_lodash_["find"])(fontSizes, {
      slug: fontSizeAttribute
    });

    if (fontSizeObject) {
      return fontSizeObject;
    }
  }

  return {
    size: customFontSizeAttribute
  };
};
/**
 * Returns a class based on fontSizeName.
 *
 * @param {string} fontSizeSlug    Slug of the fontSize.
 *
 * @return {string} String with the class corresponding to the fontSize passed.
 *                  The class is generated by appending 'has-' followed by fontSizeSlug in kebabCase and ending with '-font-size'.
 */

function getFontSizeClass(fontSizeSlug) {
  if (!fontSizeSlug) {
    return;
  }

  return "has-".concat(Object(external_lodash_["kebabCase"])(fontSizeSlug), "-font-size");
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/font-sizes/font-size-picker.js
/**
 * WordPress dependencies
 */


/* harmony default export */ var font_size_picker = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select$getSettings = select('core/block-editor').getSettings(),
      disableCustomFontSizes = _select$getSettings.disableCustomFontSizes,
      fontSizes = _select$getSettings.fontSizes;

  return {
    disableCustomFontSizes: disableCustomFontSizes,
    fontSizes: fontSizes
  };
})(external_this_wp_components_["FontSizePicker"]));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/font-sizes/with-font-sizes.js









/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Higher-order component, which handles font size logic for class generation,
 * font size value retrieval, and font size change handling.
 *
 * @param {...(object|string)} args The arguments should all be strings
 *                                  Each string contains the font size attribute name e.g: 'fontSize'.
 *
 * @return {Function} Higher-order component.
 */

/* harmony default export */ var with_font_sizes = (function () {
  for (var _len = arguments.length, fontSizeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    fontSizeNames[_key] = arguments[_key];
  }

  /*
  * Computes an object whose key is the font size attribute name as passed in the array,
  * and the value is the custom font size attribute name.
  * Custom font size is automatically compted by appending custom followed by the font size attribute name in with the first letter capitalized.
  */
  var fontSizeAttributeNames = Object(external_lodash_["reduce"])(fontSizeNames, function (fontSizeAttributeNamesAccumulator, fontSizeAttributeName) {
    fontSizeAttributeNamesAccumulator[fontSizeAttributeName] = "custom".concat(Object(external_lodash_["upperFirst"])(fontSizeAttributeName));
    return fontSizeAttributeNamesAccumulator;
  }, {});
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
    var _select$getSettings = select('core/block-editor').getSettings(),
        fontSizes = _select$getSettings.fontSizes;

    return {
      fontSizes: fontSizes
    };
  }), function (WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_Component) {
        Object(inherits["a" /* default */])(_class, _Component);

        function _class(props) {
          var _this;

          Object(classCallCheck["a" /* default */])(this, _class);

          _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(_class).call(this, props));
          _this.setters = _this.createSetters();
          _this.state = {};
          return _this;
        }

        Object(createClass["a" /* default */])(_class, [{
          key: "createSetters",
          value: function createSetters() {
            var _this2 = this;

            return Object(external_lodash_["reduce"])(fontSizeAttributeNames, function (settersAccumulator, customFontSizeAttributeName, fontSizeAttributeName) {
              var upperFirstFontSizeAttributeName = Object(external_lodash_["upperFirst"])(fontSizeAttributeName);
              settersAccumulator["set".concat(upperFirstFontSizeAttributeName)] = _this2.createSetFontSize(fontSizeAttributeName, customFontSizeAttributeName);
              return settersAccumulator;
            }, {});
          }
        }, {
          key: "createSetFontSize",
          value: function createSetFontSize(fontSizeAttributeName, customFontSizeAttributeName) {
            var _this3 = this;

            return function (fontSizeValue) {
              var _this3$props$setAttri;

              var fontSizeObject = Object(external_lodash_["find"])(_this3.props.fontSizes, {
                size: fontSizeValue
              });

              _this3.props.setAttributes((_this3$props$setAttri = {}, Object(defineProperty["a" /* default */])(_this3$props$setAttri, fontSizeAttributeName, fontSizeObject && fontSizeObject.slug ? fontSizeObject.slug : undefined), Object(defineProperty["a" /* default */])(_this3$props$setAttri, customFontSizeAttributeName, fontSizeObject && fontSizeObject.slug ? undefined : fontSizeValue), _this3$props$setAttri));
            };
          }
        }, {
          key: "render",
          value: function render() {
            return Object(external_this_wp_element_["createElement"])(WrappedComponent, Object(objectSpread["a" /* default */])({}, this.props, {
              fontSizes: undefined
            }, this.state, this.setters));
          }
        }], [{
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(_ref, previousState) {
            var attributes = _ref.attributes,
                fontSizes = _ref.fontSizes;

            var didAttributesChange = function didAttributesChange(customFontSizeAttributeName, fontSizeAttributeName) {
              if (previousState[fontSizeAttributeName]) {
                // if new font size is name compare with the previous slug
                if (attributes[fontSizeAttributeName]) {
                  return attributes[fontSizeAttributeName] !== previousState[fontSizeAttributeName].slug;
                } // if font size is not named, update when the font size value changes.


                return previousState[fontSizeAttributeName].size !== attributes[customFontSizeAttributeName];
              } // in this case we need to build the font size object


              return true;
            };

            if (!Object(external_lodash_["some"])(fontSizeAttributeNames, didAttributesChange)) {
              return null;
            }

            var newState = Object(external_lodash_["reduce"])(Object(external_lodash_["pickBy"])(fontSizeAttributeNames, didAttributesChange), function (newStateAccumulator, customFontSizeAttributeName, fontSizeAttributeName) {
              var fontSizeAttributeValue = attributes[fontSizeAttributeName];
              var fontSizeObject = utils_getFontSize(fontSizes, fontSizeAttributeValue, attributes[customFontSizeAttributeName]);
              newStateAccumulator[fontSizeAttributeName] = Object(objectSpread["a" /* default */])({}, fontSizeObject, {
                class: getFontSizeClass(fontSizeAttributeValue)
              });
              return newStateAccumulator;
            }, {});
            return Object(objectSpread["a" /* default */])({}, previousState, newState);
          }
        }]);

        return _class;
      }(external_this_wp_element_["Component"])
    );
  }]), 'withFontSizes');
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/font-sizes/index.js




// EXTERNAL MODULE: external {"this":["wp","isShallowEqual"]}
var external_this_wp_isShallowEqual_ = __webpack_require__(42);
var external_this_wp_isShallowEqual_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_isShallowEqual_);

// EXTERNAL MODULE: external {"this":["wp","dom"]}
var external_this_wp_dom_ = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-mover/mover-description.js
/**
 * WordPress dependencies
 */

/**
 * Return a label for the block movement controls depending on block position.
 *
 * @param {number}  selectedCount Number of blocks selected.
 * @param {string}  type          Block type - in the case of a single block, should
 *                                 define its 'type'. I.e. 'Text', 'Heading', 'Image' etc.
 * @param {number}  firstIndex    The index (position - 1) of the first block selected.
 * @param {boolean} isFirst       This is the first block.
 * @param {boolean} isLast        This is the last block.
 * @param {number}  dir           Direction of movement (> 0 is considered to be going
 *                                 down, < 0 is up).
 *
 * @return {string} Label for the block movement controls.
 */

function getBlockMoverDescription(selectedCount, type, firstIndex, isFirst, isLast, dir) {
  var position = firstIndex + 1;

  if (selectedCount > 1) {
    return getMultiBlockMoverDescription(selectedCount, firstIndex, isFirst, isLast, dir);
  }

  if (isFirst && isLast) {
    // translators: %s: Type of block (i.e. Text, Image etc)
    return Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Block %s is the only block, and cannot be moved'), type);
  }

  if (dir > 0 && !isLast) {
    // moving down
    return Object(external_this_wp_i18n_["sprintf"])( // translators: 1: Type of block (i.e. Text, Image etc), 2: Position of selected block, 3: New position
    Object(external_this_wp_i18n_["__"])('Move %1$s block from position %2$d down to position %3$d'), type, position, position + 1);
  }

  if (dir > 0 && isLast) {
    // moving down, and is the last item
    // translators: %s: Type of block (i.e. Text, Image etc)
    return Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Block %s is at the end of the content and can’t be moved down'), type);
  }

  if (dir < 0 && !isFirst) {
    // moving up
    return Object(external_this_wp_i18n_["sprintf"])( // translators: 1: Type of block (i.e. Text, Image etc), 2: Position of selected block, 3: New position
    Object(external_this_wp_i18n_["__"])('Move %1$s block from position %2$d up to position %3$d'), type, position, position - 1);
  }

  if (dir < 0 && isFirst) {
    // moving up, and is the first item
    // translators: %s: Type of block (i.e. Text, Image etc)
    return Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Block %s is at the beginning of the content and can’t be moved up'), type);
  }
}
/**
 * Return a label for the block movement controls depending on block position.
 *
 * @param {number}  selectedCount Number of blocks selected.
 * @param {number}  firstIndex    The index (position - 1) of the first block selected.
 * @param {boolean} isFirst       This is the first block.
 * @param {boolean} isLast        This is the last block.
 * @param {number}  dir           Direction of movement (> 0 is considered to be going
 *                                 down, < 0 is up).
 *
 * @return {string} Label for the block movement controls.
 */

function getMultiBlockMoverDescription(selectedCount, firstIndex, isFirst, isLast, dir) {
  var position = firstIndex + 1;

  if (dir < 0 && isFirst) {
    return Object(external_this_wp_i18n_["__"])('Blocks cannot be moved up as they are already at the top');
  }

  if (dir > 0 && isLast) {
    return Object(external_this_wp_i18n_["__"])('Blocks cannot be moved down as they are already at the bottom');
  }

  if (dir < 0 && !isFirst) {
    return Object(external_this_wp_i18n_["sprintf"])( // translators: 1: Number of selected blocks, 2: Position of selected blocks
    Object(external_this_wp_i18n_["_n"])('Move %1$d block from position %2$d up by one place', 'Move %1$d blocks from position %2$d up by one place', selectedCount), selectedCount, position);
  }

  if (dir > 0 && !isLast) {
    return Object(external_this_wp_i18n_["sprintf"])( // translators: 1: Number of selected blocks, 2: Position of selected blocks
    Object(external_this_wp_i18n_["_n"])('Move %1$d block from position %2$d down by one place', 'Move %1$d blocks from position %2$d down by one place', selectedCount), selectedCount, position);
  }
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-mover/icons.js


/**
 * WordPress dependencies
 */

var upArrow = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  width: "18",
  height: "18",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Polygon"], {
  points: "9,4.5 3.3,10.1 4.8,11.5 9,7.3 13.2,11.5 14.7,10.1 "
}));
var downArrow = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  width: "18",
  height: "18",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Polygon"], {
  points: "9,13.5 14.7,7.9 13.2,6.5 9,10.7 4.8,6.5 3.3,7.9 "
}));
var dragHandle = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
  width: "18",
  height: "18",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 18 18"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
  d: "M13,8c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S12.4,8,13,8z M5,6C4.4,6,4,6.4,4,7s0.4,1,1,1s1-0.4,1-1S5.6,6,5,6z M5,10 c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S5.6,10,5,10z M13,10c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S13.6,10,13,10z M9,6 C8.4,6,8,6.4,8,7s0.4,1,1,1s1-0.4,1-1S9.6,6,9,6z M9,10c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S9.6,10,9,10z"
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-draggable/index.js


/**
 * WordPress dependencies
 */



var block_draggable_BlockDraggable = function BlockDraggable(_ref) {
  var children = _ref.children,
      clientId = _ref.clientId,
      rootClientId = _ref.rootClientId,
      blockElementId = _ref.blockElementId,
      index = _ref.index,
      onDragStart = _ref.onDragStart,
      onDragEnd = _ref.onDragEnd;
  var transferData = {
    type: 'block',
    srcIndex: index,
    srcRootClientId: rootClientId,
    srcClientId: clientId
  };
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Draggable"], {
    elementId: blockElementId,
    transferData: transferData,
    onDragStart: onDragStart,
    onDragEnd: onDragEnd
  }, function (_ref2) {
    var onDraggableStart = _ref2.onDraggableStart,
        onDraggableEnd = _ref2.onDraggableEnd;
    return children({
      onDraggableStart: onDraggableStart,
      onDraggableEnd: onDraggableEnd
    });
  });
};

/* harmony default export */ var block_draggable = (Object(external_this_wp_data_["withSelect"])(function (select, _ref3) {
  var clientId = _ref3.clientId;

  var _select = select('core/block-editor'),
      getBlockIndex = _select.getBlockIndex,
      getBlockRootClientId = _select.getBlockRootClientId;

  var rootClientId = getBlockRootClientId(clientId);
  return {
    index: getBlockIndex(clientId, rootClientId),
    rootClientId: rootClientId
  };
})(block_draggable_BlockDraggable));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-mover/drag-handle.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var drag_handle_IconDragHandle = function IconDragHandle(_ref) {
  var isVisible = _ref.isVisible,
      className = _ref.className,
      icon = _ref.icon,
      onDragStart = _ref.onDragStart,
      onDragEnd = _ref.onDragEnd,
      blockElementId = _ref.blockElementId,
      clientId = _ref.clientId;

  if (!isVisible) {
    return null;
  }

  var dragHandleClassNames = classnames_default()('editor-block-mover__control-drag-handle block-editor-block-mover__control-drag-handle', className);
  return Object(external_this_wp_element_["createElement"])(block_draggable, {
    clientId: clientId,
    blockElementId: blockElementId,
    onDragStart: onDragStart,
    onDragEnd: onDragEnd
  }, function (_ref2) {
    var onDraggableStart = _ref2.onDraggableStart,
        onDraggableEnd = _ref2.onDraggableEnd;
    return Object(external_this_wp_element_["createElement"])("div", {
      className: dragHandleClassNames,
      "aria-hidden": "true",
      onDragStart: onDraggableStart,
      onDragEnd: onDraggableEnd,
      draggable: true
    }, icon);
  });
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-mover/index.js








/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




var block_mover_BlockMover =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockMover, _Component);

  function BlockMover() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockMover);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockMover).apply(this, arguments));
    _this.state = {
      isFocused: false
    };
    _this.onFocus = _this.onFocus.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onBlur = _this.onBlur.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(BlockMover, [{
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        isFocused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        isFocused: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onMoveUp = _this$props.onMoveUp,
          onMoveDown = _this$props.onMoveDown,
          isFirst = _this$props.isFirst,
          isLast = _this$props.isLast,
          isDraggable = _this$props.isDraggable,
          onDragStart = _this$props.onDragStart,
          onDragEnd = _this$props.onDragEnd,
          clientIds = _this$props.clientIds,
          blockElementId = _this$props.blockElementId,
          blockType = _this$props.blockType,
          firstIndex = _this$props.firstIndex,
          isLocked = _this$props.isLocked,
          instanceId = _this$props.instanceId,
          isHidden = _this$props.isHidden;
      var isFocused = this.state.isFocused;
      var blocksCount = Object(external_lodash_["castArray"])(clientIds).length;

      if (isLocked || isFirst && isLast) {
        return null;
      } // We emulate a disabled state because forcefully applying the `disabled`
      // attribute on the button while it has focus causes the screen to change
      // to an unfocused state (body as active element) without firing blur on,
      // the rendering parent, leaving it unable to react to focus out.


      return Object(external_this_wp_element_["createElement"])("div", {
        className: classnames_default()('editor-block-mover block-editor-block-mover', {
          'is-visible': isFocused || !isHidden
        })
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
        className: "editor-block-mover__control block-editor-block-mover__control",
        onClick: isFirst ? null : onMoveUp,
        icon: upArrow,
        label: Object(external_this_wp_i18n_["__"])('Move up'),
        "aria-describedby": "block-editor-block-mover__up-description-".concat(instanceId),
        "aria-disabled": isFirst,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }), Object(external_this_wp_element_["createElement"])(drag_handle_IconDragHandle, {
        className: "editor-block-mover__control block-editor-block-mover__control",
        icon: dragHandle,
        clientId: clientIds,
        blockElementId: blockElementId,
        isVisible: isDraggable,
        onDragStart: onDragStart,
        onDragEnd: onDragEnd
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
        className: "editor-block-mover__control block-editor-block-mover__control",
        onClick: isLast ? null : onMoveDown,
        icon: downArrow,
        label: Object(external_this_wp_i18n_["__"])('Move down'),
        "aria-describedby": "block-editor-block-mover__down-description-".concat(instanceId),
        "aria-disabled": isLast,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }), Object(external_this_wp_element_["createElement"])("span", {
        id: "block-editor-block-mover__up-description-".concat(instanceId),
        className: "editor-block-mover__description block-editor-block-mover__description"
      }, getBlockMoverDescription(blocksCount, blockType && blockType.title, firstIndex, isFirst, isLast, -1)), Object(external_this_wp_element_["createElement"])("span", {
        id: "block-editor-block-mover__down-description-".concat(instanceId),
        className: "editor-block-mover__description block-editor-block-mover__description"
      }, getBlockMoverDescription(blocksCount, blockType && blockType.title, firstIndex, isFirst, isLast, 1)));
    }
  }]);

  return BlockMover;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var block_mover = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select, _ref) {
  var clientIds = _ref.clientIds;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock,
      getBlockIndex = _select.getBlockIndex,
      getTemplateLock = _select.getTemplateLock,
      getBlockRootClientId = _select.getBlockRootClientId;

  var firstClientId = Object(external_lodash_["first"])(Object(external_lodash_["castArray"])(clientIds));
  var block = getBlock(firstClientId);
  var rootClientId = getBlockRootClientId(Object(external_lodash_["first"])(Object(external_lodash_["castArray"])(clientIds)));
  return {
    firstIndex: getBlockIndex(firstClientId, rootClientId),
    blockType: block ? Object(external_this_wp_blocks_["getBlockType"])(block.name) : null,
    isLocked: getTemplateLock(rootClientId) === 'all',
    rootClientId: rootClientId
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref2) {
  var clientIds = _ref2.clientIds,
      rootClientId = _ref2.rootClientId;

  var _dispatch = dispatch('core/block-editor'),
      moveBlocksDown = _dispatch.moveBlocksDown,
      moveBlocksUp = _dispatch.moveBlocksUp;

  return {
    onMoveDown: Object(external_lodash_["partial"])(moveBlocksDown, clientIds, rootClientId),
    onMoveUp: Object(external_lodash_["partial"])(moveBlocksUp, clientIds, rootClientId)
  };
}), external_this_wp_compose_["withInstanceId"])(block_mover_BlockMover));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/media-upload/check.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function MediaUploadCheck(_ref) {
  var hasUploadPermissions = _ref.hasUploadPermissions,
      _ref$fallback = _ref.fallback,
      fallback = _ref$fallback === void 0 ? null : _ref$fallback,
      children = _ref.children;
  return hasUploadPermissions ? children : fallback;
}
/* harmony default export */ var check = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core'),
      canUser = _select.canUser;

  return {
    hasUploadPermissions: Object(external_lodash_["defaultTo"])(canUser('create', 'media'), true)
  };
})(MediaUploadCheck));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-drop-zone/index.js








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var parseDropEvent = function parseDropEvent(event) {
  var result = {
    srcRootClientId: null,
    srcClientId: null,
    srcIndex: null,
    type: null
  };

  if (!event.dataTransfer) {
    return result;
  }

  try {
    result = Object.assign(result, JSON.parse(event.dataTransfer.getData('text')));
  } catch (err) {
    return result;
  }

  return result;
};

var block_drop_zone_BlockDropZone =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockDropZone, _Component);

  function BlockDropZone() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockDropZone);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockDropZone).apply(this, arguments));
    _this.onFilesDrop = _this.onFilesDrop.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onHTMLDrop = _this.onHTMLDrop.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onDrop = _this.onDrop.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(BlockDropZone, [{
    key: "getInsertIndex",
    value: function getInsertIndex(position) {
      var _this$props = this.props,
          clientId = _this$props.clientId,
          rootClientId = _this$props.rootClientId,
          getBlockIndex = _this$props.getBlockIndex;

      if (clientId !== undefined) {
        var index = getBlockIndex(clientId, rootClientId);
        return position.y === 'top' ? index : index + 1;
      }
    }
  }, {
    key: "onFilesDrop",
    value: function onFilesDrop(files, position) {
      var transformation = Object(external_this_wp_blocks_["findTransform"])(Object(external_this_wp_blocks_["getBlockTransforms"])('from'), function (transform) {
        return transform.type === 'files' && transform.isMatch(files);
      });

      if (transformation) {
        var insertIndex = this.getInsertIndex(position);
        var blocks = transformation.transform(files, this.props.updateBlockAttributes);
        this.props.insertBlocks(blocks, insertIndex);
      }
    }
  }, {
    key: "onHTMLDrop",
    value: function onHTMLDrop(HTML, position) {
      var blocks = Object(external_this_wp_blocks_["pasteHandler"])({
        HTML: HTML,
        mode: 'BLOCKS'
      });

      if (blocks.length) {
        this.props.insertBlocks(blocks, this.getInsertIndex(position));
      }
    }
  }, {
    key: "onDrop",
    value: function onDrop(event, position) {
      var _this$props2 = this.props,
          dstRootClientId = _this$props2.rootClientId,
          dstClientId = _this$props2.clientId,
          getClientIdsOfDescendants = _this$props2.getClientIdsOfDescendants,
          getBlockIndex = _this$props2.getBlockIndex;

      var _parseDropEvent = parseDropEvent(event),
          srcRootClientId = _parseDropEvent.srcRootClientId,
          srcClientId = _parseDropEvent.srcClientId,
          srcIndex = _parseDropEvent.srcIndex,
          type = _parseDropEvent.type;

      var isBlockDropType = function isBlockDropType(dropType) {
        return dropType === 'block';
      };

      var isSameLevel = function isSameLevel(srcRoot, dstRoot) {
        // Note that rootClientId of top-level blocks will be undefined OR a void string,
        // so we also need to account for that case separately.
        return srcRoot === dstRoot || !srcRoot === true && !dstRoot === true;
      };

      var isSameBlock = function isSameBlock(src, dst) {
        return src === dst;
      };

      var isSrcBlockAnAncestorOfDstBlock = function isSrcBlockAnAncestorOfDstBlock(src, dst) {
        return getClientIdsOfDescendants([src]).some(function (id) {
          return id === dst;
        });
      };

      if (!isBlockDropType(type) || isSameBlock(srcClientId, dstClientId) || isSrcBlockAnAncestorOfDstBlock(srcClientId, dstClientId || dstRootClientId)) {
        return;
      }

      var dstIndex = dstClientId ? getBlockIndex(dstClientId, dstRootClientId) : undefined;
      var positionIndex = this.getInsertIndex(position); // If the block is kept at the same level and moved downwards,
      // subtract to account for blocks shifting upward to occupy its old position.

      var insertIndex = dstIndex && srcIndex < dstIndex && isSameLevel(srcRootClientId, dstRootClientId) ? positionIndex - 1 : positionIndex;
      this.props.moveBlockToPosition(srcClientId, srcRootClientId, insertIndex);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          isLocked = _this$props3.isLocked,
          index = _this$props3.index;

      if (isLocked) {
        return null;
      }

      var isAppender = index === undefined;
      return Object(external_this_wp_element_["createElement"])(check, null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["DropZone"], {
        className: classnames_default()('editor-block-drop-zone block-editor-block-drop-zone', {
          'is-appender': isAppender
        }),
        onFilesDrop: this.onFilesDrop,
        onHTMLDrop: this.onHTMLDrop,
        onDrop: this.onDrop
      }));
    }
  }]);

  return BlockDropZone;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var block_drop_zone = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  var _dispatch = dispatch('core/block-editor'),
      _insertBlocks = _dispatch.insertBlocks,
      _updateBlockAttributes = _dispatch.updateBlockAttributes,
      _moveBlockToPosition = _dispatch.moveBlockToPosition;

  return {
    insertBlocks: function insertBlocks(blocks, index) {
      var rootClientId = ownProps.rootClientId;

      _insertBlocks(blocks, index, rootClientId);
    },
    updateBlockAttributes: function updateBlockAttributes() {
      _updateBlockAttributes.apply(void 0, arguments);
    },
    moveBlockToPosition: function moveBlockToPosition(srcClientId, srcRootClientId, dstIndex) {
      var dstRootClientId = ownProps.rootClientId;

      _moveBlockToPosition(srcClientId, srcRootClientId, dstRootClientId, dstIndex);
    }
  };
}), Object(external_this_wp_data_["withSelect"])(function (select, _ref) {
  var rootClientId = _ref.rootClientId;

  var _select = select('core/block-editor'),
      getClientIdsOfDescendants = _select.getClientIdsOfDescendants,
      getTemplateLock = _select.getTemplateLock,
      getBlockIndex = _select.getBlockIndex;

  return {
    isLocked: !!getTemplateLock(rootClientId),
    getClientIdsOfDescendants: getClientIdsOfDescendants,
    getBlockIndex: getBlockIndex
  };
}), Object(external_this_wp_components_["withFilters"])('editor.BlockDropZone'))(block_drop_zone_BlockDropZone));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/warning/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function Warning(_ref) {
  var className = _ref.className,
      actions = _ref.actions,
      children = _ref.children,
      secondaryActions = _ref.secondaryActions;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: classnames_default()(className, 'editor-warning block-editor-warning')
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-warning__contents block-editor-warning__contents"
  }, Object(external_this_wp_element_["createElement"])("p", {
    className: "editor-warning__message block-editor-warning__message"
  }, children), external_this_wp_element_["Children"].count(actions) > 0 && Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-warning__actions block-editor-warning__actions"
  }, external_this_wp_element_["Children"].map(actions, function (action, i) {
    return Object(external_this_wp_element_["createElement"])("span", {
      key: i,
      className: "editor-warning__action block-editor-warning__action"
    }, action);
  }))), secondaryActions && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Dropdown"], {
    className: "editor-warning__secondary block-editor-warning__secondary",
    position: "bottom left",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
        icon: "ellipsis",
        label: Object(external_this_wp_i18n_["__"])('More options'),
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: function renderContent() {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuGroup"], null, secondaryActions.map(function (item, pos) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
          onClick: item.onClick,
          key: pos
        }, item.title);
      }));
    }
  }));
}

/* harmony default export */ var warning = (Warning);

// EXTERNAL MODULE: ./node_modules/diff/dist/diff.js
var diff = __webpack_require__(207);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-compare/block-view.js


/**
 * WordPress dependencies
 */


var block_view_BlockView = function BlockView(_ref) {
  var title = _ref.title,
      rawContent = _ref.rawContent,
      renderedContent = _ref.renderedContent,
      action = _ref.action,
      actionText = _ref.actionText,
      className = _ref.className;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: className
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-compare__content block-editor-block-compare__content"
  }, Object(external_this_wp_element_["createElement"])("h2", {
    className: "editor-block-compare__heading block-editor-block-compare__heading"
  }, title), Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-compare__html block-editor-block-compare__html"
  }, rawContent), Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-compare__preview block-editor-block-compare__preview edit-post-visual-editor"
  }, renderedContent)), Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-compare__action block-editor-block-compare__action"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isLarge: true,
    tabIndex: "0",
    onClick: action
  }, actionText)));
};

/* harmony default export */ var block_view = (block_view_BlockView);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-compare/index.js







/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var block_compare_BlockCompare =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockCompare, _Component);

  function BlockCompare() {
    Object(classCallCheck["a" /* default */])(this, BlockCompare);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockCompare).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(BlockCompare, [{
    key: "getDifference",
    value: function getDifference(originalContent, newContent) {
      var difference = Object(diff["diffChars"])(originalContent, newContent);
      return difference.map(function (item, pos) {
        var classes = classnames_default()({
          'editor-block-compare__added block-editor-block-compare__added': item.added,
          'editor-block-compare__removed block-editor-block-compare__removed': item.removed
        });
        return Object(external_this_wp_element_["createElement"])("span", {
          key: pos,
          className: classes
        }, item.value);
      });
    }
  }, {
    key: "getOriginalContent",
    value: function getOriginalContent(block) {
      return {
        rawContent: block.originalContent,
        renderedContent: Object(external_this_wp_blocks_["getSaveElement"])(block.name, block.attributes)
      };
    }
  }, {
    key: "getConvertedContent",
    value: function getConvertedContent(block) {
      // The convertor may return an array of items or a single item
      var newBlocks = Object(external_lodash_["castArray"])(block); // Get converted block details

      var newContent = newBlocks.map(function (item) {
        return Object(external_this_wp_blocks_["getSaveContent"])(item.name, item.attributes, item.innerBlocks);
      });
      var renderedContent = newBlocks.map(function (item) {
        return Object(external_this_wp_blocks_["getSaveElement"])(item.name, item.attributes, item.innerBlocks);
      });
      return {
        rawContent: newContent.join(''),
        renderedContent: renderedContent
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          block = _this$props.block,
          onKeep = _this$props.onKeep,
          onConvert = _this$props.onConvert,
          convertor = _this$props.convertor,
          convertButtonText = _this$props.convertButtonText;
      var original = this.getOriginalContent(block);
      var converted = this.getConvertedContent(convertor(block));
      var difference = this.getDifference(original.rawContent, converted.rawContent);
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-block-compare__wrapper block-editor-block-compare__wrapper"
      }, Object(external_this_wp_element_["createElement"])(block_view, {
        title: Object(external_this_wp_i18n_["__"])('Current'),
        className: "editor-block-compare__current block-editor-block-compare__current",
        action: onKeep,
        actionText: Object(external_this_wp_i18n_["__"])('Convert to HTML'),
        rawContent: original.rawContent,
        renderedContent: original.renderedContent
      }), Object(external_this_wp_element_["createElement"])(block_view, {
        title: Object(external_this_wp_i18n_["__"])('After Conversion'),
        className: "editor-block-compare__converted block-editor-block-compare__converted",
        action: onConvert,
        actionText: convertButtonText,
        rawContent: difference,
        renderedContent: converted.renderedContent
      }));
    }
  }]);

  return BlockCompare;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var block_compare = (block_compare_BlockCompare);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/block-invalid-warning.js








/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var block_invalid_warning_BlockInvalidWarning =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockInvalidWarning, _Component);

  function BlockInvalidWarning(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockInvalidWarning);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockInvalidWarning).call(this, props));
    _this.state = {
      compare: false
    };
    _this.onCompare = _this.onCompare.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onCompareClose = _this.onCompareClose.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(BlockInvalidWarning, [{
    key: "onCompare",
    value: function onCompare() {
      this.setState({
        compare: true
      });
    }
  }, {
    key: "onCompareClose",
    value: function onCompareClose() {
      this.setState({
        compare: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          convertToHTML = _this$props.convertToHTML,
          convertToBlocks = _this$props.convertToBlocks,
          convertToClassic = _this$props.convertToClassic,
          attemptBlockRecovery = _this$props.attemptBlockRecovery,
          block = _this$props.block;
      var hasHTMLBlock = !!Object(external_this_wp_blocks_["getBlockType"])('core/html');
      var compare = this.state.compare;
      var hiddenActions = [{
        title: Object(external_this_wp_i18n_["__"])('Convert to Classic Block'),
        onClick: convertToClassic
      }, {
        title: Object(external_this_wp_i18n_["__"])('Attempt Block Recovery'),
        onClick: attemptBlockRecovery
      }];

      if (compare) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Modal"], {
          title: // translators: Dialog title to fix block content
          Object(external_this_wp_i18n_["__"])('Resolve Block'),
          onRequestClose: this.onCompareClose,
          className: "editor-block-compare block-editor-block-compare"
        }, Object(external_this_wp_element_["createElement"])(block_compare, {
          block: block,
          onKeep: convertToHTML,
          onConvert: convertToBlocks,
          convertor: block_invalid_warning_blockToBlocks,
          convertButtonText: Object(external_this_wp_i18n_["__"])('Convert to Blocks')
        }));
      }

      return Object(external_this_wp_element_["createElement"])(warning, {
        actions: [Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          key: "convert",
          onClick: this.onCompare,
          isLarge: true,
          isPrimary: !hasHTMLBlock
        }, // translators: Button to fix block content
        Object(external_this_wp_i18n_["_x"])('Resolve', 'imperative verb')), hasHTMLBlock && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          key: "edit",
          onClick: convertToHTML,
          isLarge: true,
          isPrimary: true
        }, Object(external_this_wp_i18n_["__"])('Convert to HTML'))],
        secondaryActions: hiddenActions
      }, Object(external_this_wp_i18n_["__"])('This block contains unexpected or invalid content.'));
    }
  }]);

  return BlockInvalidWarning;
}(external_this_wp_element_["Component"]);

var block_invalid_warning_blockToClassic = function blockToClassic(block) {
  return Object(external_this_wp_blocks_["createBlock"])('core/freeform', {
    content: block.originalContent
  });
};

var block_invalid_warning_blockToHTML = function blockToHTML(block) {
  return Object(external_this_wp_blocks_["createBlock"])('core/html', {
    content: block.originalContent
  });
};

var block_invalid_warning_blockToBlocks = function blockToBlocks(block) {
  return Object(external_this_wp_blocks_["rawHandler"])({
    HTML: block.originalContent
  });
};

var block_invalid_warning_recoverBlock = function recoverBlock(_ref) {
  var name = _ref.name,
      attributes = _ref.attributes,
      innerBlocks = _ref.innerBlocks;
  return Object(external_this_wp_blocks_["createBlock"])(name, attributes, innerBlocks);
};

/* harmony default export */ var block_invalid_warning = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var clientId = _ref2.clientId;
  return {
    block: select('core/block-editor').getBlock(clientId)
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref3) {
  var block = _ref3.block;

  var _dispatch = dispatch('core/block-editor'),
      replaceBlock = _dispatch.replaceBlock;

  return {
    convertToClassic: function convertToClassic() {
      replaceBlock(block.clientId, block_invalid_warning_blockToClassic(block));
    },
    convertToHTML: function convertToHTML() {
      replaceBlock(block.clientId, block_invalid_warning_blockToHTML(block));
    },
    convertToBlocks: function convertToBlocks() {
      replaceBlock(block.clientId, block_invalid_warning_blockToBlocks(block));
    },
    attemptBlockRecovery: function attemptBlockRecovery() {
      replaceBlock(block.clientId, block_invalid_warning_recoverBlock(block));
    }
  };
})])(block_invalid_warning_BlockInvalidWarning));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/block-crash-warning.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var block_crash_warning_warning = Object(external_this_wp_element_["createElement"])(warning, null, Object(external_this_wp_i18n_["__"])('This block has encountered an error and cannot be previewed.'));
/* harmony default export */ var block_crash_warning = (function () {
  return block_crash_warning_warning;
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/block-crash-boundary.js






/**
 * WordPress dependencies
 */


var block_crash_boundary_BlockCrashBoundary =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockCrashBoundary, _Component);

  function BlockCrashBoundary() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockCrashBoundary);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockCrashBoundary).apply(this, arguments));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(BlockCrashBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      this.props.onError(error);
      this.setState({
        hasError: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return null;
      }

      return this.props.children;
    }
  }]);

  return BlockCrashBoundary;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var block_crash_boundary = (block_crash_boundary_BlockCrashBoundary);

// EXTERNAL MODULE: ./node_modules/react-autosize-textarea/lib/index.js
var react_autosize_textarea_lib = __webpack_require__(61);
var react_autosize_textarea_lib_default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea_lib);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/block-html.js








/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





var block_html_BlockHTML =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockHTML, _Component);

  function BlockHTML(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockHTML);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockHTML).apply(this, arguments));
    _this.onChange = _this.onChange.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onBlur = _this.onBlur.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.state = {
      html: props.block.isValid ? Object(external_this_wp_blocks_["getBlockContent"])(props.block) : props.block.originalContent
    };
    return _this;
  }

  Object(createClass["a" /* default */])(BlockHTML, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!Object(external_lodash_["isEqual"])(this.props.block.attributes, prevProps.block.attributes)) {
        this.setState({
          html: Object(external_this_wp_blocks_["getBlockContent"])(this.props.block)
        });
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      var html = this.state.html;
      var blockType = Object(external_this_wp_blocks_["getBlockType"])(this.props.block.name);
      var attributes = Object(external_this_wp_blocks_["getBlockAttributes"])(blockType, html, this.props.block.attributes); // If html is empty  we reset the block to the default HTML and mark it as valid to avoid triggering an error

      var content = html ? html : Object(external_this_wp_blocks_["getSaveContent"])(blockType, attributes);
      var isValid = html ? Object(external_this_wp_blocks_["isValidBlockContent"])(blockType, attributes, content) : true;
      this.props.onChange(this.props.clientId, attributes, content, isValid); // Ensure the state is updated if we reset so it displays the default content

      if (!html) {
        this.setState({
          html: content
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.setState({
        html: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var html = this.state.html;
      return Object(external_this_wp_element_["createElement"])(react_autosize_textarea_lib_default.a, {
        className: "editor-block-list__block-html-textarea block-editor-block-list__block-html-textarea",
        value: html,
        onBlur: this.onBlur,
        onChange: this.onChange
      });
    }
  }]);

  return BlockHTML;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var block_html = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  return {
    block: select('core/block-editor').getBlock(ownProps.clientId)
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onChange: function onChange(clientId, attributes, originalContent, isValid) {
      dispatch('core/block-editor').updateBlock(clientId, {
        attributes: attributes,
        originalContent: originalContent,
        isValid: isValid
      });
    }
  };
})])(block_html_BlockHTML));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-title/index.js
/**
 * WordPress dependencies
 */


/**
 * Renders the block's configured title as a string, or empty if the title
 * cannot be determined.
 *
 * @example
 *
 * ```jsx
 * <BlockTitle clientId="afd1cb17-2c08-4e7a-91be-007ba7ddc3a1" />
 * ```
 *
 * @param {?string} props.name Block name.
 *
 * @return {?string} Block title.
 */

function BlockTitle(_ref) {
  var name = _ref.name;

  if (!name) {
    return null;
  }

  var blockType = Object(external_this_wp_blocks_["getBlockType"])(name);

  if (!blockType) {
    return null;
  }

  return blockType.title;
}
/* harmony default export */ var block_title = (Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  var _select = select('core/block-editor'),
      getBlockName = _select.getBlockName;

  var clientId = ownProps.clientId;
  return {
    name: getBlockName(clientId)
  };
})(BlockTitle));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/breadcrumb.js








/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Block breadcrumb component, displaying the label of the block. If the block
 * descends from a root block, a button is displayed enabling the user to select
 * the root block.
 *
 * @param {string}   props.clientId        Client ID of block.
 * @param {string}   props.rootClientId    Client ID of block's root.
 * @param {Function} props.selectRootBlock Callback to select root block.
 */

var breadcrumb_BlockBreadcrumb =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockBreadcrumb, _Component);

  function BlockBreadcrumb() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockBreadcrumb);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockBreadcrumb).apply(this, arguments));
    _this.state = {
      isFocused: false
    };
    _this.onFocus = _this.onFocus.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onBlur = _this.onBlur.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(BlockBreadcrumb, [{
    key: "onFocus",
    value: function onFocus(event) {
      this.setState({
        isFocused: true
      }); // This is used for improved interoperability
      // with the block's `onFocus` handler which selects the block, thus conflicting
      // with the intention to select the root block.

      event.stopPropagation();
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        isFocused: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          clientId = _this$props.clientId,
          rootClientId = _this$props.rootClientId;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: 'editor-block-list__breadcrumb block-editor-block-list__breadcrumb'
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Toolbar"], null, rootClientId && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(block_title, {
        clientId: rootClientId
      }), Object(external_this_wp_element_["createElement"])("span", {
        className: "editor-block-list__descendant-arrow block-editor-block-list__descendant-arrow"
      })), Object(external_this_wp_element_["createElement"])(block_title, {
        clientId: clientId
      })));
    }
  }]);

  return BlockBreadcrumb;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var breadcrumb = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  var _select = select('core/block-editor'),
      getBlockRootClientId = _select.getBlockRootClientId;

  var clientId = ownProps.clientId;
  return {
    rootClientId: getBlockRootClientId(clientId)
  };
})])(breadcrumb_BlockBreadcrumb));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/navigable-toolbar/index.js










/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Browser dependencies
 */

var _window = window,
    Node = _window.Node,
    getSelection = _window.getSelection;

var navigable_toolbar_NavigableToolbar =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(NavigableToolbar, _Component);

  function NavigableToolbar() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NavigableToolbar);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavigableToolbar).apply(this, arguments));
    _this.focusToolbar = _this.focusToolbar.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.focusSelection = _this.focusSelection.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.switchOnKeyDown = Object(external_lodash_["cond"])([[Object(external_lodash_["matchesProperty"])(['keyCode'], external_this_wp_keycodes_["ESCAPE"]), _this.focusSelection]]);
    _this.toolbar = Object(external_this_wp_element_["createRef"])();
    return _this;
  }

  Object(createClass["a" /* default */])(NavigableToolbar, [{
    key: "focusToolbar",
    value: function focusToolbar() {
      var tabbables = external_this_wp_dom_["focus"].tabbable.find(this.toolbar.current);

      if (tabbables.length) {
        tabbables[0].focus();
      }
    }
    /**
     * Programmatically shifts focus to the element where the current selection
     * exists, if there is a selection.
     */

  }, {
    key: "focusSelection",
    value: function focusSelection() {
      // Ensure that a selection exists.
      var selection = getSelection();

      if (!selection) {
        return;
      } // Focus node may be a text node, which cannot be focused directly.
      // Find its parent element instead.


      var focusNode = selection.focusNode;
      var focusElement = focusNode;

      if (focusElement.nodeType !== Node.ELEMENT_NODE) {
        focusElement = focusElement.parentElement;
      }

      if (focusElement) {
        focusElement.focus();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focusOnMount) {
        this.focusToolbar();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = Object(objectWithoutProperties["a" /* default */])(_this$props, ["children"]);

      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["NavigableMenu"], Object(esm_extends["a" /* default */])({
        orientation: "horizontal",
        role: "toolbar",
        ref: this.toolbar,
        onKeyDown: this.switchOnKeyDown
      }, Object(external_lodash_["omit"])(props, ['focusOnMount'])), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["KeyboardShortcuts"], {
        bindGlobal: true // Use the same event that TinyMCE uses in the Classic block for its own `alt+f10` shortcut.
        ,
        eventName: "keydown",
        shortcuts: {
          'alt+f10': this.focusToolbar
        }
      }), children);
    }
  }]);

  return NavigableToolbar;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var navigable_toolbar = (navigable_toolbar_NavigableToolbar);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/block-contextual-toolbar.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




function BlockContextualToolbar(_ref) {
  var focusOnMount = _ref.focusOnMount;
  return Object(external_this_wp_element_["createElement"])(navigable_toolbar, {
    focusOnMount: focusOnMount,
    className: "editor-block-contextual-toolbar block-editor-block-contextual-toolbar"
    /* translators: accessibility text for the block toolbar */
    ,
    "aria-label": Object(external_this_wp_i18n_["__"])('Block tools')
  }, Object(external_this_wp_element_["createElement"])(block_toolbar, null));
}

/* harmony default export */ var block_contextual_toolbar = (BlockContextualToolbar);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/multi-controls.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function BlockListMultiControls(_ref) {
  var multiSelectedBlockClientIds = _ref.multiSelectedBlockClientIds,
      clientId = _ref.clientId,
      isSelecting = _ref.isSelecting,
      isFirst = _ref.isFirst,
      isLast = _ref.isLast;

  if (isSelecting) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(block_mover, {
    key: "mover",
    clientId: clientId,
    clientIds: multiSelectedBlockClientIds,
    isFirst: isFirst,
    isLast: isLast
  });
}

/* harmony default export */ var multi_controls = (Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var clientId = _ref2.clientId;

  var _select = select('core/block-editor'),
      getMultiSelectedBlockClientIds = _select.getMultiSelectedBlockClientIds,
      isMultiSelecting = _select.isMultiSelecting,
      getBlockIndex = _select.getBlockIndex,
      getBlockCount = _select.getBlockCount;

  var clientIds = getMultiSelectedBlockClientIds();
  var firstIndex = getBlockIndex(Object(external_lodash_["first"])(clientIds), clientId);
  var lastIndex = getBlockIndex(Object(external_lodash_["last"])(clientIds), clientId);
  return {
    multiSelectedBlockClientIds: clientIds,
    isSelecting: isMultiSelecting(),
    isFirst: firstIndex === 0,
    isLast: lastIndex + 1 === getBlockCount()
  };
})(BlockListMultiControls));

// EXTERNAL MODULE: ./node_modules/dom-scroll-into-view/lib/index.js
var dom_scroll_into_view_lib = __webpack_require__(67);
var dom_scroll_into_view_lib_default = /*#__PURE__*/__webpack_require__.n(dom_scroll_into_view_lib);

// EXTERNAL MODULE: external {"this":["wp","url"]}
var external_this_wp_url_ = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-preview/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Block Preview Component: It renders a preview given a block name and attributes.
 *
 * @param {Object} props Component props.
 *
 * @return {WPElement} Rendered element.
 */

function BlockPreview(props) {
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-preview block-editor-block-preview"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-preview__title block-editor-block-preview__title"
  }, Object(external_this_wp_i18n_["__"])('Preview')), Object(external_this_wp_element_["createElement"])(BlockPreviewContent, props));
}

function BlockPreviewContent(_ref) {
  var name = _ref.name,
      attributes = _ref.attributes;
  var block = Object(external_this_wp_blocks_["createBlock"])(name, attributes);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Disabled"], {
    className: "editor-block-preview__content block-editor-block-preview__content editor-styles-wrapper",
    "aria-hidden": true
  }, Object(external_this_wp_element_["createElement"])(block_edit, {
    name: name,
    focus: false,
    attributes: block.attributes,
    setAttributes: external_lodash_["noop"]
  }));
}
/* harmony default export */ var block_preview = (BlockPreview);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/inserter-list-item/index.js




/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function InserterListItem(_ref) {
  var icon = _ref.icon,
      hasChildBlocksWithInserterSupport = _ref.hasChildBlocksWithInserterSupport,
      _onClick = _ref.onClick,
      isDisabled = _ref.isDisabled,
      title = _ref.title,
      className = _ref.className,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["icon", "hasChildBlocksWithInserterSupport", "onClick", "isDisabled", "title", "className"]);

  var itemIconStyle = icon ? {
    backgroundColor: icon.background,
    color: icon.foreground
  } : {};
  var itemIconStackStyle = icon && icon.shadowColor ? {
    backgroundColor: icon.shadowColor
  } : {};
  return Object(external_this_wp_element_["createElement"])("li", {
    className: "editor-block-types-list__list-item block-editor-block-types-list__list-item"
  }, Object(external_this_wp_element_["createElement"])("button", Object(esm_extends["a" /* default */])({
    className: classnames_default()('editor-block-types-list__item block-editor-block-types-list__item', className, {
      'editor-block-types-list__item-has-children block-editor-block-types-list__item-has-children': hasChildBlocksWithInserterSupport
    }),
    onClick: function onClick(event) {
      event.preventDefault();

      _onClick();
    },
    disabled: isDisabled,
    "aria-label": title // Fix for IE11 and JAWS 2018.

  }, props), Object(external_this_wp_element_["createElement"])("span", {
    className: "editor-block-types-list__item-icon block-editor-block-types-list__item-icon",
    style: itemIconStyle
  }, Object(external_this_wp_element_["createElement"])(BlockIcon, {
    icon: icon,
    showColors: true
  }), hasChildBlocksWithInserterSupport && Object(external_this_wp_element_["createElement"])("span", {
    className: "editor-block-types-list__item-icon-stack block-editor-block-types-list__item-icon-stack",
    style: itemIconStackStyle
  })), Object(external_this_wp_element_["createElement"])("span", {
    className: "editor-block-types-list__item-title block-editor-block-types-list__item-title"
  }, title)));
}

/* harmony default export */ var inserter_list_item = (InserterListItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-types-list/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function BlockTypesList(_ref) {
  var items = _ref.items,
      onSelect = _ref.onSelect,
      _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? function () {} : _ref$onHover,
      children = _ref.children;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(external_this_wp_element_["createElement"])("ul", {
      role: "list",
      className: "editor-block-types-list block-editor-block-types-list"
    }, items && items.map(function (item) {
      return Object(external_this_wp_element_["createElement"])(inserter_list_item, {
        key: item.id,
        className: Object(external_this_wp_blocks_["getBlockMenuDefaultClassName"])(item.id),
        icon: item.icon,
        hasChildBlocksWithInserterSupport: item.hasChildBlocksWithInserterSupport,
        onClick: function onClick() {
          onSelect(item);
          onHover(null);
        },
        onFocus: function onFocus() {
          return onHover(item);
        },
        onMouseEnter: function onMouseEnter() {
          return onHover(item);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(null);
        },
        onBlur: function onBlur() {
          return onHover(null);
        },
        isDisabled: item.isDisabled,
        title: item.title
      });
    }), children)
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

/* harmony default export */ var block_types_list = (BlockTypesList);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/inserter/child-blocks.js




/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function ChildBlocks(_ref) {
  var rootBlockIcon = _ref.rootBlockIcon,
      rootBlockTitle = _ref.rootBlockTitle,
      items = _ref.items,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["rootBlockIcon", "rootBlockTitle", "items"]);

  return Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-inserter__child-blocks block-editor-inserter__child-blocks"
  }, (rootBlockIcon || rootBlockTitle) && Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-inserter__parent-block-header block-editor-inserter__parent-block-header"
  }, Object(external_this_wp_element_["createElement"])(BlockIcon, {
    icon: rootBlockIcon,
    showColors: true
  }), rootBlockTitle && Object(external_this_wp_element_["createElement"])("h2", null, rootBlockTitle)), Object(external_this_wp_element_["createElement"])(block_types_list, Object(esm_extends["a" /* default */])({
    items: items
  }, props)));
}

/* harmony default export */ var child_blocks = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_compose_["ifCondition"])(function (_ref2) {
  var items = _ref2.items;
  return items && items.length > 0;
}), Object(external_this_wp_data_["withSelect"])(function (select, _ref3) {
  var rootClientId = _ref3.rootClientId;

  var _select = select('core/blocks'),
      getBlockType = _select.getBlockType;

  var _select2 = select('core/block-editor'),
      getBlockName = _select2.getBlockName;

  var rootBlockName = getBlockName(rootClientId);
  var rootBlockType = getBlockType(rootBlockName);
  return {
    rootBlockTitle: rootBlockType && rootBlockType.title,
    rootBlockIcon: rootBlockType && rootBlockType.icon
  };
}))(ChildBlocks));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/inserter/menu.js









/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */




var MAX_SUGGESTED_ITEMS = 9;

var stopKeyPropagation = function stopKeyPropagation(event) {
  return event.stopPropagation();
};
/**
 * Filters an item list given a search term.
 *
 * @param {Array} items        Item list
 * @param {string} searchTerm  Search term.
 *
 * @return {Array}             Filtered item list.
 */


var menu_searchItems = function searchItems(items, searchTerm) {
  var normalizedSearchTerm = menu_normalizeTerm(searchTerm);

  var matchSearch = function matchSearch(string) {
    return menu_normalizeTerm(string).indexOf(normalizedSearchTerm) !== -1;
  };

  var categories = Object(external_this_wp_blocks_["getCategories"])();
  return items.filter(function (item) {
    var itemCategory = Object(external_lodash_["find"])(categories, {
      slug: item.category
    });
    return matchSearch(item.title) || Object(external_lodash_["some"])(item.keywords, matchSearch) || itemCategory && matchSearch(itemCategory.title);
  });
};
/**
 * Converts the search term into a normalized term.
 *
 * @param {string} term The search term to normalize.
 *
 * @return {string} The normalized search term.
 */

var menu_normalizeTerm = function normalizeTerm(term) {
  // Disregard diacritics.
  //  Input: "média"
  term = Object(external_lodash_["deburr"])(term); // Accommodate leading slash, matching autocomplete expectations.
  //  Input: "/media"

  term = term.replace(/^\//, ''); // Lowercase.
  //  Input: "MEDIA"

  term = term.toLowerCase(); // Strip leading and trailing whitespace.
  //  Input: " media "

  term = term.trim();
  return term;
};
var menu_InserterMenu =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(InserterMenu, _Component);

  function InserterMenu() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, InserterMenu);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(InserterMenu).apply(this, arguments));
    _this.state = {
      childItems: [],
      filterValue: '',
      hoveredItem: null,
      suggestedItems: [],
      reusableItems: [],
      itemsPerCategory: {},
      openPanels: ['suggested']
    };
    _this.onChangeSearchInput = _this.onChangeSearchInput.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onHover = _this.onHover.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.panels = {};
    _this.inserterResults = Object(external_this_wp_element_["createRef"])();
    return _this;
  }

  Object(createClass["a" /* default */])(InserterMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // This could be replaced by a resolver.
      this.props.fetchReusableBlocks();
      this.filter();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.items !== this.props.items) {
        this.filter(this.state.filterValue);
      }
    }
  }, {
    key: "onChangeSearchInput",
    value: function onChangeSearchInput(event) {
      this.filter(event.target.value);
    }
  }, {
    key: "onHover",
    value: function onHover(item) {
      this.setState({
        hoveredItem: item
      });
      var _this$props = this.props,
          showInsertionPoint = _this$props.showInsertionPoint,
          hideInsertionPoint = _this$props.hideInsertionPoint;

      if (item) {
        showInsertionPoint();
      } else {
        hideInsertionPoint();
      }
    }
  }, {
    key: "bindPanel",
    value: function bindPanel(name) {
      var _this2 = this;

      return function (ref) {
        _this2.panels[name] = ref;
      };
    }
  }, {
    key: "onTogglePanel",
    value: function onTogglePanel(panel) {
      var _this3 = this;

      return function () {
        var isOpened = _this3.state.openPanels.indexOf(panel) !== -1;

        if (isOpened) {
          _this3.setState({
            openPanels: Object(external_lodash_["without"])(_this3.state.openPanels, panel)
          });
        } else {
          _this3.setState({
            openPanels: [].concat(Object(toConsumableArray["a" /* default */])(_this3.state.openPanels), [panel])
          });

          _this3.props.setTimeout(function () {
            // We need a generic way to access the panel's container
            // eslint-disable-next-line react/no-find-dom-node
            dom_scroll_into_view_lib_default()(_this3.panels[panel], _this3.inserterResults.current, {
              alignWithTop: true
            });
          });
        }
      };
    }
  }, {
    key: "filterOpenPanels",
    value: function filterOpenPanels(filterValue, itemsPerCategory, filteredItems, reusableItems) {
      if (filterValue === this.state.filterValue) {
        return this.state.openPanels;
      }

      if (!filterValue) {
        return ['suggested'];
      }

      var openPanels = [];

      if (reusableItems.length > 0) {
        openPanels.push('reusable');
      }

      if (filteredItems.length > 0) {
        openPanels = openPanels.concat(Object.keys(itemsPerCategory));
      }

      return openPanels;
    }
  }, {
    key: "filter",
    value: function filter() {
      var filterValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _this$props2 = this.props,
          debouncedSpeak = _this$props2.debouncedSpeak,
          items = _this$props2.items,
          rootChildBlocks = _this$props2.rootChildBlocks;
      var filteredItems = menu_searchItems(items, filterValue);

      var childItems = Object(external_lodash_["filter"])(filteredItems, function (_ref) {
        var name = _ref.name;
        return Object(external_lodash_["includes"])(rootChildBlocks, name);
      });

      var suggestedItems = [];

      if (!filterValue) {
        var maxSuggestedItems = this.props.maxSuggestedItems || MAX_SUGGESTED_ITEMS;
        suggestedItems = Object(external_lodash_["filter"])(items, function (item) {
          return item.utility > 0;
        }).slice(0, maxSuggestedItems);
      }

      var reusableItems = Object(external_lodash_["filter"])(filteredItems, {
        category: 'reusable'
      });

      var getCategoryIndex = function getCategoryIndex(item) {
        return Object(external_lodash_["findIndex"])(Object(external_this_wp_blocks_["getCategories"])(), function (category) {
          return category.slug === item.category;
        });
      };

      var itemsPerCategory = Object(external_lodash_["flow"])(function (itemList) {
        return Object(external_lodash_["filter"])(itemList, function (item) {
          return item.category !== 'reusable';
        });
      }, function (itemList) {
        return Object(external_lodash_["sortBy"])(itemList, getCategoryIndex);
      }, function (itemList) {
        return Object(external_lodash_["groupBy"])(itemList, 'category');
      })(filteredItems);
      this.setState({
        hoveredItem: null,
        childItems: childItems,
        filterValue: filterValue,
        suggestedItems: suggestedItems,
        reusableItems: reusableItems,
        itemsPerCategory: itemsPerCategory,
        openPanels: this.filterOpenPanels(filterValue, itemsPerCategory, filteredItems, reusableItems)
      });
      var resultCount = Object.keys(itemsPerCategory).reduce(function (accumulator, currentCategorySlug) {
        return accumulator + itemsPerCategory[currentCategorySlug].length;
      }, 0);
      var resultsFoundMessage = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%d result found.', '%d results found.', resultCount), resultCount);
      debouncedSpeak(resultsFoundMessage);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (Object(external_lodash_["includes"])([external_this_wp_keycodes_["LEFT"], external_this_wp_keycodes_["DOWN"], external_this_wp_keycodes_["RIGHT"], external_this_wp_keycodes_["UP"], external_this_wp_keycodes_["BACKSPACE"], external_this_wp_keycodes_["ENTER"]], event.keyCode)) {
        // Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
        event.stopPropagation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          instanceId = _this$props3.instanceId,
          onSelect = _this$props3.onSelect,
          rootClientId = _this$props3.rootClientId;
      var _this$state = this.state,
          childItems = _this$state.childItems,
          hoveredItem = _this$state.hoveredItem,
          itemsPerCategory = _this$state.itemsPerCategory,
          openPanels = _this$state.openPanels,
          reusableItems = _this$state.reusableItems,
          suggestedItems = _this$state.suggestedItems;

      var isPanelOpen = function isPanelOpen(panel) {
        return openPanels.indexOf(panel) !== -1;
      }; // Disable reason (no-autofocus): The inserter menu is a modal display, not one which
      // is always visible, and one which already incurs this behavior of autoFocus via
      // Popover's focusOnMount.
      // Disable reason (no-static-element-interactions): Navigational key-presses within
      // the menu are prevented from triggering WritingFlow and ObserveTyping interactions.

      /* eslint-disable jsx-a11y/no-autofocus, jsx-a11y/no-static-element-interactions */


      return Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-inserter__menu block-editor-inserter__menu",
        onKeyPress: stopKeyPropagation,
        onKeyDown: this.onKeyDown
      }, Object(external_this_wp_element_["createElement"])("label", {
        htmlFor: "block-editor-inserter__search-".concat(instanceId),
        className: "screen-reader-text"
      }, Object(external_this_wp_i18n_["__"])('Search for a block')), Object(external_this_wp_element_["createElement"])("input", {
        id: "block-editor-inserter__search-".concat(instanceId),
        type: "search",
        placeholder: Object(external_this_wp_i18n_["__"])('Search for a block'),
        className: "editor-inserter__search block-editor-inserter__search",
        autoFocus: true,
        onChange: this.onChangeSearchInput
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-inserter__results block-editor-inserter__results",
        ref: this.inserterResults,
        tabIndex: "0",
        role: "region",
        "aria-label": Object(external_this_wp_i18n_["__"])('Available block types')
      }, Object(external_this_wp_element_["createElement"])(child_blocks, {
        rootClientId: rootClientId,
        items: childItems,
        onSelect: onSelect,
        onHover: this.onHover
      }), !!suggestedItems.length && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        title: Object(external_this_wp_i18n_["_x"])('Most Used', 'blocks'),
        opened: isPanelOpen('suggested'),
        onToggle: this.onTogglePanel('suggested'),
        ref: this.bindPanel('suggested')
      }, Object(external_this_wp_element_["createElement"])(block_types_list, {
        items: suggestedItems,
        onSelect: onSelect,
        onHover: this.onHover
      })), Object(external_lodash_["map"])(Object(external_this_wp_blocks_["getCategories"])(), function (category) {
        var categoryItems = itemsPerCategory[category.slug];

        if (!categoryItems || !categoryItems.length) {
          return null;
        }

        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
          key: category.slug,
          title: category.title,
          icon: category.icon,
          opened: isPanelOpen(category.slug),
          onToggle: _this4.onTogglePanel(category.slug),
          ref: _this4.bindPanel(category.slug)
        }, Object(external_this_wp_element_["createElement"])(block_types_list, {
          items: categoryItems,
          onSelect: onSelect,
          onHover: _this4.onHover
        }));
      }), !!reusableItems.length && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
        className: "editor-inserter__reusable-blocks-panel block-editor-inserter__reusable-blocks-panel",
        title: Object(external_this_wp_i18n_["__"])('Reusable'),
        opened: isPanelOpen('reusable'),
        onToggle: this.onTogglePanel('reusable'),
        icon: "controls-repeat",
        ref: this.bindPanel('reusable')
      }, Object(external_this_wp_element_["createElement"])(block_types_list, {
        items: reusableItems,
        onSelect: onSelect,
        onHover: this.onHover
      }), Object(external_this_wp_element_["createElement"])("a", {
        className: "editor-inserter__manage-reusable-blocks block-editor-inserter__manage-reusable-blocks",
        href: Object(external_this_wp_url_["addQueryArgs"])('edit.php', {
          post_type: 'wp_block'
        })
      }, Object(external_this_wp_i18n_["__"])('Manage All Reusable Blocks'))), Object(external_lodash_["isEmpty"])(suggestedItems) && Object(external_lodash_["isEmpty"])(reusableItems) && Object(external_lodash_["isEmpty"])(itemsPerCategory) && Object(external_this_wp_element_["createElement"])("p", {
        className: "editor-inserter__no-results block-editor-inserter__no-results"
      }, Object(external_this_wp_i18n_["__"])('No blocks found.'))), hoveredItem && Object(external_this_wp_blocks_["isReusableBlock"])(hoveredItem) && Object(external_this_wp_element_["createElement"])(block_preview, {
        name: hoveredItem.name,
        attributes: hoveredItem.initialAttributes
      }));
      /* eslint-enable jsx-a11y/no-autofocus, jsx-a11y/no-noninteractive-element-interactions */
    }
  }]);

  return InserterMenu;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var menu = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var clientId = _ref2.clientId,
      isAppender = _ref2.isAppender,
      rootClientId = _ref2.rootClientId;

  var _select = select('core/block-editor'),
      getInserterItems = _select.getInserterItems,
      getBlockName = _select.getBlockName,
      getBlockRootClientId = _select.getBlockRootClientId,
      getBlockSelectionEnd = _select.getBlockSelectionEnd;

  var _select2 = select('core/blocks'),
      getChildBlockNames = _select2.getChildBlockNames;

  var destinationRootClientId = rootClientId;

  if (!destinationRootClientId && !clientId && !isAppender) {
    var end = getBlockSelectionEnd();

    if (end) {
      destinationRootClientId = getBlockRootClientId(end) || undefined;
    }
  }

  var destinationRootBlockName = getBlockName(destinationRootClientId);
  return {
    rootChildBlocks: getChildBlockNames(destinationRootBlockName),
    items: getInserterItems(destinationRootClientId),
    destinationRootClientId: destinationRootClientId
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps, _ref3) {
  var select = _ref3.select;

  var _dispatch = dispatch('core/block-editor'),
      _showInsertionPoint = _dispatch.showInsertionPoint,
      hideInsertionPoint = _dispatch.hideInsertionPoint; // This should be an external action provided in the editor settings.


  var _dispatch2 = dispatch('core/editor'),
      fetchReusableBlocks = _dispatch2.__experimentalFetchReusableBlocks; // To avoid duplication, getInsertionIndex is extracted and used in two event handlers
  // This breaks the withDispatch not containing any logic rule.
  // Since it's a function only called when the event handlers are called,
  // it's fine to extract it.
  // eslint-disable-next-line no-restricted-syntax


  function getInsertionIndex() {
    var _select3 = select('core/block-editor'),
        getBlockIndex = _select3.getBlockIndex,
        getBlockSelectionEnd = _select3.getBlockSelectionEnd,
        getBlockOrder = _select3.getBlockOrder;

    var clientId = ownProps.clientId,
        destinationRootClientId = ownProps.destinationRootClientId,
        isAppender = ownProps.isAppender; // If the clientId is defined, we insert at the position of the block.

    if (clientId) {
      return getBlockIndex(clientId, destinationRootClientId);
    } // If there a selected block, we insert after the selected block.


    var end = getBlockSelectionEnd();

    if (!isAppender && end) {
      return getBlockIndex(end, destinationRootClientId) + 1;
    } // Otherwise, we insert at the end of the current rootClientId


    return getBlockOrder(destinationRootClientId).length;
  }

  return {
    fetchReusableBlocks: fetchReusableBlocks,
    showInsertionPoint: function showInsertionPoint() {
      var index = getInsertionIndex();

      _showInsertionPoint(ownProps.destinationRootClientId, index);
    },
    hideInsertionPoint: hideInsertionPoint,
    onSelect: function onSelect(item) {
      var _dispatch3 = dispatch('core/block-editor'),
          replaceBlocks = _dispatch3.replaceBlocks,
          insertBlock = _dispatch3.insertBlock;

      var _select4 = select('core/block-editor'),
          getSelectedBlock = _select4.getSelectedBlock;

      var isAppender = ownProps.isAppender;
      var name = item.name,
          initialAttributes = item.initialAttributes;
      var selectedBlock = getSelectedBlock();
      var insertedBlock = Object(external_this_wp_blocks_["createBlock"])(name, initialAttributes);

      if (!isAppender && selectedBlock && Object(external_this_wp_blocks_["isUnmodifiedDefaultBlock"])(selectedBlock)) {
        replaceBlocks(selectedBlock.clientId, insertedBlock);
      } else {
        insertBlock(insertedBlock, getInsertionIndex(), ownProps.destinationRootClientId);
      }

      ownProps.onSelect();
    }
  };
}), external_this_wp_components_["withSpokenMessages"], external_this_wp_compose_["withInstanceId"], external_this_wp_compose_["withSafeTimeout"])(menu_InserterMenu));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/inserter/index.js








/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



var inserter_defaultRenderToggle = function defaultRenderToggle(_ref) {
  var onToggle = _ref.onToggle,
      disabled = _ref.disabled,
      isOpen = _ref.isOpen;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
    icon: "insert",
    label: Object(external_this_wp_i18n_["__"])('Add block'),
    labelPosition: "bottom",
    onClick: onToggle,
    className: "editor-inserter__toggle block-editor-inserter__toggle",
    "aria-haspopup": "true",
    "aria-expanded": isOpen,
    disabled: disabled
  });
};

var inserter_Inserter =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Inserter, _Component);

  function Inserter() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Inserter);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Inserter).apply(this, arguments));
    _this.onToggle = _this.onToggle.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.renderToggle = _this.renderToggle.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.renderContent = _this.renderContent.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(Inserter, [{
    key: "onToggle",
    value: function onToggle(isOpen) {
      var onToggle = this.props.onToggle; // Surface toggle callback to parent component

      if (onToggle) {
        onToggle(isOpen);
      }
    }
    /**
     * Render callback to display Dropdown toggle element.
     *
     * @param {Function} options.onToggle Callback to invoke when toggle is
     *                                    pressed.
     * @param {boolean}  options.isOpen   Whether dropdown is currently open.
     *
     * @return {WPElement} Dropdown toggle element.
     */

  }, {
    key: "renderToggle",
    value: function renderToggle(_ref2) {
      var onToggle = _ref2.onToggle,
          isOpen = _ref2.isOpen;
      var _this$props = this.props,
          disabled = _this$props.disabled,
          _this$props$renderTog = _this$props.renderToggle,
          renderToggle = _this$props$renderTog === void 0 ? inserter_defaultRenderToggle : _this$props$renderTog;
      return renderToggle({
        onToggle: onToggle,
        isOpen: isOpen,
        disabled: disabled
      });
    }
    /**
     * Render callback to display Dropdown content element.
     *
     * @param {Function} options.onClose Callback to invoke when dropdown is
     *                                   closed.
     *
     * @return {WPElement} Dropdown content element.
     */

  }, {
    key: "renderContent",
    value: function renderContent(_ref3) {
      var onClose = _ref3.onClose;
      var _this$props2 = this.props,
          rootClientId = _this$props2.rootClientId,
          clientId = _this$props2.clientId,
          isAppender = _this$props2.isAppender;
      return Object(external_this_wp_element_["createElement"])(menu, {
        onSelect: onClose,
        rootClientId: rootClientId,
        clientId: clientId,
        isAppender: isAppender
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          position = _this$props3.position,
          title = _this$props3.title;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Dropdown"], {
        className: "editor-inserter block-editor-inserter",
        contentClassName: "editor-inserter__popover block-editor-inserter__popover",
        position: position,
        onToggle: this.onToggle,
        expandOnMobile: true,
        headerTitle: title,
        renderToggle: this.renderToggle,
        renderContent: this.renderContent
      });
    }
  }]);

  return Inserter;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var inserter = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref4) {
  var rootClientId = _ref4.rootClientId;

  var _select = select('core/block-editor'),
      hasInserterItems = _select.hasInserterItems; // The title should be removed from the inserter
  // or replaced by a prop passed to the inserter.


  var _select2 = select('core/editor'),
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  return {
    title: getEditedPostAttribute('title'),
    hasItems: hasInserterItems(rootClientId)
  };
}), Object(external_this_wp_compose_["ifCondition"])(function (_ref5) {
  var hasItems = _ref5.hasItems;
  return hasItems;
})])(inserter_Inserter));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/block-mobile-toolbar.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




function BlockMobileToolbar(_ref) {
  var clientId = _ref.clientId;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-list__block-mobile-toolbar block-editor-block-list__block-mobile-toolbar"
  }, Object(external_this_wp_element_["createElement"])(inserter, null), Object(external_this_wp_element_["createElement"])(block_mover, {
    clientIds: [clientId]
  }));
}

/* harmony default export */ var block_mobile_toolbar = (Object(external_this_wp_viewport_["ifViewportMatches"])('< small')(BlockMobileToolbar));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/insertion-point.js








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var insertion_point_BlockInsertionPoint =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockInsertionPoint, _Component);

  function BlockInsertionPoint() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockInsertionPoint);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockInsertionPoint).apply(this, arguments));
    _this.state = {
      isInserterFocused: false
    };
    _this.onBlurInserter = _this.onBlurInserter.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onFocusInserter = _this.onFocusInserter.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(BlockInsertionPoint, [{
    key: "onFocusInserter",
    value: function onFocusInserter(event) {
      // Stop propagation of the focus event to avoid selecting the current
      // block while inserting a new block, as it is not relevant to sibling
      // insertion and conflicts with contextual toolbar placement.
      event.stopPropagation();
      this.setState({
        isInserterFocused: true
      });
    }
  }, {
    key: "onBlurInserter",
    value: function onBlurInserter() {
      this.setState({
        isInserterFocused: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isInserterFocused = this.state.isInserterFocused;
      var _this$props = this.props,
          showInsertionPoint = _this$props.showInsertionPoint,
          rootClientId = _this$props.rootClientId,
          clientId = _this$props.clientId;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-block-list__insertion-point block-editor-block-list__insertion-point"
      }, showInsertionPoint && Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-block-list__insertion-point-indicator block-editor-block-list__insertion-point-indicator"
      }), Object(external_this_wp_element_["createElement"])("div", {
        onFocus: this.onFocusInserter,
        onBlur: this.onBlurInserter // While ideally it would be enough to capture the
        // bubbling focus event from the Inserter, due to the
        // characteristics of click focusing of `button`s in
        // Firefox and Safari, it is not reliable.
        //
        // See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
        ,
        tabIndex: -1,
        className: classnames_default()('editor-block-list__insertion-point-inserter block-editor-block-list__insertion-point-inserter', {
          'is-visible': isInserterFocused
        })
      }, Object(external_this_wp_element_["createElement"])(inserter, {
        rootClientId: rootClientId,
        clientId: clientId
      })));
    }
  }]);

  return BlockInsertionPoint;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var insertion_point = (Object(external_this_wp_data_["withSelect"])(function (select, _ref) {
  var clientId = _ref.clientId,
      rootClientId = _ref.rootClientId;

  var _select = select('core/block-editor'),
      getBlockIndex = _select.getBlockIndex,
      getBlockInsertionPoint = _select.getBlockInsertionPoint,
      isBlockInsertionPointVisible = _select.isBlockInsertionPointVisible;

  var blockIndex = getBlockIndex(clientId, rootClientId);
  var insertionPoint = getBlockInsertionPoint();
  var showInsertionPoint = isBlockInsertionPointVisible() && insertionPoint.index === blockIndex && insertionPoint.rootClientId === rootClientId;
  return {
    showInsertionPoint: showInsertionPoint
  };
})(insertion_point_BlockInsertionPoint));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/ignore-nested-events/index.js











/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Component which renders a div with passed props applied except the optional
 * `childHandledEvents` prop. Event prop handlers are replaced with a proxying
 * event handler to capture and prevent events from being handled by ancestor
 * `IgnoreNestedEvents` elements by testing the presence of a private property
 * assigned on the event object.
 *
 * Optionally accepts an `childHandledEvents` prop array, which can be used in
 * instances where an inner `IgnoreNestedEvents` element exists and the outer
 * element should stop propagation but not invoke a callback handler, since it
 * would be assumed these are invoked by the child element.
 *
 * @type {Component}
 */

var ignore_nested_events_IgnoreNestedEvents =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(IgnoreNestedEvents, _Component);

  function IgnoreNestedEvents() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, IgnoreNestedEvents);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(IgnoreNestedEvents).apply(this, arguments));
    _this.proxyEvent = _this.proxyEvent.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this))); // The event map is responsible for tracking an event type to a React
    // component prop name, since it is easy to determine event type from
    // a React prop name, but not the other way around.

    _this.eventMap = {};
    return _this;
  }
  /**
   * General event handler which only calls to its original props callback if
   * it has not already been handled by a descendant IgnoreNestedEvents.
   *
   * @param {Event} event Event object.
   *
   * @return {void}
   */


  Object(createClass["a" /* default */])(IgnoreNestedEvents, [{
    key: "proxyEvent",
    value: function proxyEvent(event) {
      var isHandled = !!event.nativeEvent._blockHandled; // Assign into the native event, since React will reuse their synthetic
      // event objects and this property assignment could otherwise leak.
      //
      // See: https://reactjs.org/docs/events.html#event-pooling

      event.nativeEvent._blockHandled = true; // Invoke original prop handler

      var propKey = this.eventMap[event.type]; // If already handled (i.e. assume nested block), only invoke a
      // corresponding "Handled"-suffixed prop callback.

      if (isHandled) {
        propKey += 'Handled';
      }

      if (this.props[propKey]) {
        this.props[propKey](event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$childHand = _this$props.childHandledEvents,
          childHandledEvents = _this$props$childHand === void 0 ? [] : _this$props$childHand,
          forwardedRef = _this$props.forwardedRef,
          props = Object(objectWithoutProperties["a" /* default */])(_this$props, ["childHandledEvents", "forwardedRef"]);

      var eventHandlers = Object(external_lodash_["reduce"])([].concat(Object(toConsumableArray["a" /* default */])(childHandledEvents), Object(toConsumableArray["a" /* default */])(Object.keys(props))), function (result, key) {
        // Try to match prop key as event handler
        var match = key.match(/^on([A-Z][a-zA-Z]+?)(Handled)?$/);

        if (match) {
          var isHandledProp = !!match[2];

          if (isHandledProp) {
            // Avoid assigning through the invalid prop key. This
            // assumes mutation of shallow clone by above spread.
            delete props[key];
          } // Re-map the prop to the local proxy handler to check whether
          // the event has already been handled.


          var proxiedPropName = 'on' + match[1];
          result[proxiedPropName] = _this2.proxyEvent; // Assign event -> propName into an instance variable, so as to
          // avoid re-renders which could be incurred either by setState
          // or in mapping values to a newly created function.

          _this2.eventMap[match[1].toLowerCase()] = proxiedPropName;
        }

        return result;
      }, {});
      return Object(external_this_wp_element_["createElement"])("div", Object(esm_extends["a" /* default */])({
        ref: forwardedRef
      }, props, eventHandlers));
    }
  }]);

  return IgnoreNestedEvents;
}(external_this_wp_element_["Component"]);

var ignore_nested_events_forwardedIgnoreNestedEvents = function forwardedIgnoreNestedEvents(props, ref) {
  return Object(external_this_wp_element_["createElement"])(ignore_nested_events_IgnoreNestedEvents, Object(esm_extends["a" /* default */])({}, props, {
    forwardedRef: ref
  }));
};

ignore_nested_events_forwardedIgnoreNestedEvents.displayName = 'IgnoreNestedEvents';
/* harmony default export */ var ignore_nested_events = (Object(external_this_wp_element_["forwardRef"])(ignore_nested_events_forwardedIgnoreNestedEvents));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/inserter-with-shortcuts/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function InserterWithShortcuts(_ref) {
  var items = _ref.items,
      isLocked = _ref.isLocked,
      onInsert = _ref.onInsert;

  if (isLocked) {
    return null;
  }

  var itemsWithoutDefaultBlock = Object(external_lodash_["filter"])(items, function (item) {
    return !item.isDisabled && (item.name !== Object(external_this_wp_blocks_["getDefaultBlockName"])() || !Object(external_lodash_["isEmpty"])(item.initialAttributes));
  }).slice(0, 3);
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-inserter-with-shortcuts block-editor-inserter-with-shortcuts"
  }, itemsWithoutDefaultBlock.map(function (item) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
      key: item.id,
      className: "editor-inserter-with-shortcuts__block block-editor-inserter-with-shortcuts__block",
      onClick: function onClick() {
        return onInsert(item);
      } // translators: %s: block title/name to be added
      ,
      label: Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Add %s'), item.title),
      icon: Object(external_this_wp_element_["createElement"])(BlockIcon, {
        icon: item.icon
      })
    });
  }));
}

/* harmony default export */ var inserter_with_shortcuts = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var rootClientId = _ref2.rootClientId;

  var _select = select('core/block-editor'),
      getInserterItems = _select.getInserterItems,
      getTemplateLock = _select.getTemplateLock;

  return {
    items: getInserterItems(rootClientId),
    isLocked: !!getTemplateLock(rootClientId)
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  var clientId = ownProps.clientId,
      rootClientId = ownProps.rootClientId;
  return {
    onInsert: function onInsert(_ref3) {
      var name = _ref3.name,
          initialAttributes = _ref3.initialAttributes;
      var block = Object(external_this_wp_blocks_["createBlock"])(name, initialAttributes);

      if (clientId) {
        dispatch('core/block-editor').replaceBlocks(clientId, block);
      } else {
        dispatch('core/block-editor').insertBlock(block, undefined, rootClientId);
      }
    }
  };
}))(InserterWithShortcuts));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/hover-area.js







/**
 * WordPress dependencies
 */



var hover_area_HoverArea =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(HoverArea, _Component);

  function HoverArea() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, HoverArea);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(HoverArea).apply(this, arguments));
    _this.state = {
      hoverArea: null
    };
    _this.onMouseLeave = _this.onMouseLeave.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onMouseMove = _this.onMouseMove.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(HoverArea, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.container) {
        this.toggleListeners(this.props.container, false);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.container) {
        this.toggleListeners(this.props.container);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.container === this.props.container) {
        return;
      }

      if (prevProps.container) {
        this.toggleListeners(prevProps.container, false);
      }

      if (this.props.container) {
        this.toggleListeners(this.props.container, true);
      }
    }
  }, {
    key: "toggleListeners",
    value: function toggleListeners(container) {
      var shouldListnerToEvents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var method = shouldListnerToEvents ? 'addEventListener' : 'removeEventListener';
      container[method]('mousemove', this.onMouseMove);
      container[method]('mouseleave', this.onMouseLeave);
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      if (this.state.hoverArea) {
        this.setState({
          hoverArea: null
        });
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var _this$props = this.props,
          isRTL = _this$props.isRTL,
          container = _this$props.container;

      var _container$getBoundin = container.getBoundingClientRect(),
          width = _container$getBoundin.width,
          left = _container$getBoundin.left,
          right = _container$getBoundin.right;

      var hoverArea = null;

      if (event.clientX - left < width / 3) {
        hoverArea = isRTL ? 'right' : 'left';
      } else if (right - event.clientX < width / 3) {
        hoverArea = isRTL ? 'left' : 'right';
      }

      if (hoverArea !== this.state.hoverArea) {
        this.setState({
          hoverArea: hoverArea
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var hoverArea = this.state.hoverArea;
      var children = this.props.children;
      return children({
        hoverArea: hoverArea
      });
    }
  }]);

  return HoverArea;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var hover_area = (Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    isRTL: select('core/block-editor').getSettings().isRTL
  };
})(hover_area_HoverArea));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/utils/dom.js
/**
 * Given a block client ID, returns the corresponding DOM node for the block,
 * if exists. As much as possible, this helper should be avoided, and used only
 * in cases where isolated behaviors need remote access to a block node.
 *
 * @param {string} clientId Block client ID.
 *
 * @return {Element} Block DOM node.
 */
function getBlockDOMNode(clientId) {
  return document.querySelector('[data-block="' + clientId + '"]');
}
/**
 * Given a block client ID, returns the corresponding DOM node for the block
 * focusable wrapper, if exists. As much as possible, this helper should be
 * avoided, and used only in cases where isolated behaviors need remote access
 * to a block node.
 *
 * @param {string} clientId Block client ID.
 *
 * @return {Element} Block DOM node.
 */

function getBlockFocusableWrapper(clientId) {
  return getBlockDOMNode(clientId).closest('.block-editor-block-list__block');
}
/**
 * Returns true if the given HTMLElement is a block focus stop. Blocks without
 * their own text fields rely on the focus stop to be keyboard navigable.
 *
 * @param {HTMLElement} element Element to test.
 *
 * @return {boolean} Whether element is a block focus stop.
 */

function isBlockFocusStop(element) {
  return element.classList.contains('block-editor-block-list__block');
}
/**
 * Returns true if two elements are contained within the same block.
 *
 * @param {HTMLElement} a First element.
 * @param {HTMLElement} b Second element.
 *
 * @return {boolean} Whether elements are in the same block.
 */

function isInSameBlock(a, b) {
  return a.closest('[data-block]') === b.closest('[data-block]');
}
/**
 * Returns true if an elements is considered part of the block and not its children.
 *
 * @param {HTMLElement} blockElement Block container element.
 * @param {HTMLElement} element      Element.
 *
 * @return {boolean} Whether element is in the block Element but not its children.
 */

function isInsideRootBlock(blockElement, element) {
  var innerBlocksContainer = blockElement.querySelector('.block-editor-block-list__layout');
  return blockElement.contains(element) && (!innerBlocksContainer || !innerBlocksContainer.contains(element));
}
/**
 * Returns true if the given HTMLElement contains inner blocks (an InnerBlocks
 * element).
 *
 * @param {HTMLElement} element Element to test.
 *
 * @return {boolean} Whether element contains inner blocks.
 */

function hasInnerBlocksContext(element) {
  return !!element.querySelector('.block-editor-block-list__layout');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/block.js










/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */


















var block_BlockListBlock =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockListBlock, _Component);

  function BlockListBlock() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockListBlock);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockListBlock).apply(this, arguments));
    _this.setBlockListRef = _this.setBlockListRef.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.bindBlockNode = _this.bindBlockNode.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.setAttributes = _this.setAttributes.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.maybeHover = _this.maybeHover.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.forceFocusedContextualToolbar = _this.forceFocusedContextualToolbar.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.hideHoverEffects = _this.hideHoverEffects.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onFocus = _this.onFocus.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.preventDrag = _this.preventDrag.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onPointerDown = _this.onPointerDown.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.deleteOrInsertAfterWrapper = _this.deleteOrInsertAfterWrapper.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onBlockError = _this.onBlockError.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onTouchStart = _this.onTouchStart.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onClick = _this.onClick.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onDragStart = _this.onDragStart.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onDragEnd = _this.onDragEnd.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.selectOnOpen = _this.selectOnOpen.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.hadTouchStart = false;
    _this.state = {
      error: null,
      dragging: false,
      isHovered: false
    };
    _this.isForcingContextualToolbar = false;
    return _this;
  }

  Object(createClass["a" /* default */])(BlockListBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isSelected) {
        this.focusTabbable();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.isForcingContextualToolbar) {
        // The forcing of contextual toolbar should only be true during one update,
        // after the first update normal conditions should apply.
        this.isForcingContextualToolbar = false;
      }

      if (this.props.isTypingWithinBlock || this.props.isSelected) {
        this.hideHoverEffects();
      }

      if (this.props.isSelected && !prevProps.isSelected) {
        this.focusTabbable(true);
      } // When triggering a multi-selection, move the focus to the wrapper of the first selected block.
      // This ensures that it is not possible to continue editing the initially selected block
      // when a multi-selection is triggered.


      if (this.props.isFirstMultiSelected && !prevProps.isFirstMultiSelected) {
        this.wrapperNode.focus();
      }
    }
  }, {
    key: "setBlockListRef",
    value: function setBlockListRef(node) {
      this.wrapperNode = node;
      this.props.blockRef(node, this.props.clientId); // We need to rerender to trigger a rerendering of HoverArea
      // it depents on this.wrapperNode but we can't keep this.wrapperNode in state
      // Because we need it to be immediately availeble for `focusableTabbable` to work.

      this.forceUpdate();
    }
  }, {
    key: "bindBlockNode",
    value: function bindBlockNode(node) {
      this.node = node;
    }
    /**
     * When a block becomes selected, transition focus to an inner tabbable.
     *
     * @param {boolean} ignoreInnerBlocks Should not focus inner blocks.
     */

  }, {
    key: "focusTabbable",
    value: function focusTabbable(ignoreInnerBlocks) {
      var _this2 = this;

      var initialPosition = this.props.initialPosition; // Focus is captured by the wrapper node, so while focus transition
      // should only consider tabbables within editable display, since it
      // may be the wrapper itself or a side control which triggered the
      // focus event, don't unnecessary transition to an inner tabbable.

      if (this.wrapperNode.contains(document.activeElement)) {
        return;
      } // Find all tabbables within node.


      var textInputs = external_this_wp_dom_["focus"].tabbable.find(this.node).filter(external_this_wp_dom_["isTextField"]) // Exclude inner blocks
      .filter(function (node) {
        return !ignoreInnerBlocks || isInsideRootBlock(_this2.node, node);
      }); // If reversed (e.g. merge via backspace), use the last in the set of
      // tabbables.

      var isReverse = -1 === initialPosition;
      var target = (isReverse ? external_lodash_["last"] : external_lodash_["first"])(textInputs);

      if (!target) {
        this.wrapperNode.focus();
        return;
      }

      target.focus(); // In reverse case, need to explicitly place caret position.

      if (isReverse) {
        Object(external_this_wp_dom_["placeCaretAtHorizontalEdge"])(target, true);
        Object(external_this_wp_dom_["placeCaretAtVerticalEdge"])(target, true);
      }
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(newAttributes) {
      var _this$props = this.props,
          clientId = _this$props.clientId,
          name = _this$props.name,
          onChange = _this$props.onChange;
      var type = Object(external_this_wp_blocks_["getBlockType"])(name);

      function isMetaAttribute(key) {
        return Object(external_lodash_["get"])(type, ['attributes', key, 'source']) === 'meta';
      } // Partition new attributes to delegate update behavior by source.
      //
      // TODO: A consolidated approach to external attributes sourcing
      // should be devised to avoid specific handling for meta, enable
      // additional attributes sources.
      //
      // See: https://github.com/WordPress/gutenberg/issues/2759


      var _reduce = Object(external_lodash_["reduce"])(newAttributes, function (result, value, key) {
        if (isMetaAttribute(key)) {
          result.metaAttributes[type.attributes[key].meta] = value;
        } else {
          result.blockAttributes[key] = value;
        }

        return result;
      }, {
        blockAttributes: {},
        metaAttributes: {}
      }),
          blockAttributes = _reduce.blockAttributes,
          metaAttributes = _reduce.metaAttributes;

      if (Object(external_lodash_["size"])(blockAttributes)) {
        onChange(clientId, blockAttributes);
      }

      if (Object(external_lodash_["size"])(metaAttributes)) {
        this.props.onMetaChange(metaAttributes);
      }
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart() {
      // Detect touchstart to disable hover on iOS
      this.hadTouchStart = true;
    }
  }, {
    key: "onClick",
    value: function onClick() {
      // Clear touchstart detection
      // Browser will try to emulate mouse events also see https://www.html5rocks.com/en/mobile/touchandmouse/
      this.hadTouchStart = false;
    }
    /**
     * A mouseover event handler to apply hover effect when a pointer device is
     * placed within the bounds of the block. The mouseover event is preferred
     * over mouseenter because it may be the case that a previous mouseenter
     * event was blocked from being handled by a IgnoreNestedEvents component,
     * therefore transitioning out of a nested block to the bounds of the block
     * would otherwise not trigger a hover effect.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter
     */

  }, {
    key: "maybeHover",
    value: function maybeHover() {
      var _this$props2 = this.props,
          isPartOfMultiSelection = _this$props2.isPartOfMultiSelection,
          isSelected = _this$props2.isSelected;
      var isHovered = this.state.isHovered;

      if (isHovered || isPartOfMultiSelection || isSelected || this.hadTouchStart) {
        return;
      }

      this.setState({
        isHovered: true
      });
    }
    /**
     * Sets the block state as unhovered if currently hovering. There are cases
     * where mouseleave may occur but the block is not hovered (multi-select),
     * so to avoid unnecesary renders, the state is only set if hovered.
     */

  }, {
    key: "hideHoverEffects",
    value: function hideHoverEffects() {
      if (this.state.isHovered) {
        this.setState({
          isHovered: false
        });
      }
    }
    /**
     * Marks the block as selected when focused and not already selected. This
     * specifically handles the case where block does not set focus on its own
     * (via `setFocus`), typically if there is no focusable input in the block.
     *
     * @return {void}
     */

  }, {
    key: "onFocus",
    value: function onFocus() {
      if (!this.props.isSelected && !this.props.isPartOfMultiSelection) {
        this.props.onSelect();
      }
    }
    /**
     * Prevents default dragging behavior within a block to allow for multi-
     * selection to take effect unhampered.
     *
     * @param {DragEvent} event Drag event.
     *
     * @return {void}
     */

  }, {
    key: "preventDrag",
    value: function preventDrag(event) {
      event.preventDefault();
    }
    /**
     * Begins tracking cursor multi-selection when clicking down within block.
     *
     * @param {MouseEvent} event A mousedown event.
     *
     * @return {void}
     */

  }, {
    key: "onPointerDown",
    value: function onPointerDown(event) {
      // Not the main button.
      // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
      if (event.button !== 0) {
        return;
      }

      if (event.shiftKey) {
        if (!this.props.isSelected) {
          this.props.onShiftSelection();
          event.preventDefault();
        }
      } else {
        this.props.onSelectionStart(this.props.clientId); // Allow user to escape out of a multi-selection to a singular
        // selection of a block via click. This is handled here since
        // onFocus excludes blocks involved in a multiselection, as
        // focus can be incurred by starting a multiselection (focus
        // moved to first block's multi-controls).

        if (this.props.isPartOfMultiSelection) {
          this.props.onSelect();
        }
      }
    }
    /**
     * Interprets keydown event intent to remove or insert after block if key
     * event occurs on wrapper node. This can occur when the block has no text
     * fields of its own, particularly after initial insertion, to allow for
     * easy deletion and continuous writing flow to add additional content.
     *
     * @param {KeyboardEvent} event Keydown event.
     */

  }, {
    key: "deleteOrInsertAfterWrapper",
    value: function deleteOrInsertAfterWrapper(event) {
      var keyCode = event.keyCode,
          target = event.target; // These block shortcuts should only trigger if the wrapper of the block is selected
      // And when it's not a multi-selection to avoid conflicting with RichText/Inputs and multiselection.

      if (!this.props.isSelected || target !== this.wrapperNode || this.props.isLocked) {
        return;
      }

      switch (keyCode) {
        case external_this_wp_keycodes_["ENTER"]:
          // Insert default block after current block if enter and event
          // not already handled by descendant.
          this.props.onInsertDefaultBlockAfter();
          event.preventDefault();
          break;

        case external_this_wp_keycodes_["BACKSPACE"]:
        case external_this_wp_keycodes_["DELETE"]:
          // Remove block on backspace.
          var _this$props3 = this.props,
              clientId = _this$props3.clientId,
              onRemove = _this$props3.onRemove;
          onRemove(clientId);
          event.preventDefault();
          break;
      }
    }
  }, {
    key: "onBlockError",
    value: function onBlockError(error) {
      this.setState({
        error: error
      });
    }
  }, {
    key: "onDragStart",
    value: function onDragStart() {
      this.setState({
        dragging: true
      });
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd() {
      this.setState({
        dragging: false
      });
    }
  }, {
    key: "selectOnOpen",
    value: function selectOnOpen(open) {
      if (open && !this.props.isSelected) {
        this.props.onSelect();
      }
    }
  }, {
    key: "forceFocusedContextualToolbar",
    value: function forceFocusedContextualToolbar() {
      this.isForcingContextualToolbar = true; // trigger a re-render

      this.setState(function () {
        return {};
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return Object(external_this_wp_element_["createElement"])(hover_area, {
        container: this.wrapperNode
      }, function (_ref) {
        var hoverArea = _ref.hoverArea;
        var _this3$props = _this3.props,
            mode = _this3$props.mode,
            isFocusMode = _this3$props.isFocusMode,
            hasFixedToolbar = _this3$props.hasFixedToolbar,
            isLocked = _this3$props.isLocked,
            isFirst = _this3$props.isFirst,
            isLast = _this3$props.isLast,
            clientId = _this3$props.clientId,
            rootClientId = _this3$props.rootClientId,
            isSelected = _this3$props.isSelected,
            isPartOfMultiSelection = _this3$props.isPartOfMultiSelection,
            isFirstMultiSelected = _this3$props.isFirstMultiSelected,
            isTypingWithinBlock = _this3$props.isTypingWithinBlock,
            isCaretWithinFormattedText = _this3$props.isCaretWithinFormattedText,
            isEmptyDefaultBlock = _this3$props.isEmptyDefaultBlock,
            isMovable = _this3$props.isMovable,
            isParentOfSelectedBlock = _this3$props.isParentOfSelectedBlock,
            isDraggable = _this3$props.isDraggable,
            className = _this3$props.className,
            name = _this3$props.name,
            isValid = _this3$props.isValid,
            attributes = _this3$props.attributes;
        var isHovered = _this3.state.isHovered && !isPartOfMultiSelection;
        var blockType = Object(external_this_wp_blocks_["getBlockType"])(name); // translators: %s: Type of block (i.e. Text, Image etc)

        var blockLabel = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Block: %s'), blockType.title); // The block as rendered in the editor is composed of general block UI
        // (mover, toolbar, wrapper) and the display of the block content.

        var isUnregisteredBlock = name === Object(external_this_wp_blocks_["getUnregisteredTypeHandlerName"])(); // If the block is selected and we're typing the block should not appear.
        // Empty paragraph blocks should always show up as unselected.

        var showEmptyBlockSideInserter = (isSelected || isHovered) && isEmptyDefaultBlock && isValid;
        var shouldAppearSelected = !isFocusMode && !showEmptyBlockSideInserter && isSelected && !isTypingWithinBlock;
        var shouldAppearHovered = !isFocusMode && !hasFixedToolbar && isHovered && !isEmptyDefaultBlock; // We render block movers and block settings to keep them tabbale even if hidden

        var shouldRenderMovers = !isFocusMode && (isSelected || hoverArea === 'left') && !showEmptyBlockSideInserter && !isPartOfMultiSelection && !isTypingWithinBlock;
        var shouldShowBreadcrumb = !isFocusMode && isHovered && !isEmptyDefaultBlock;
        var shouldShowContextualToolbar = !hasFixedToolbar && !showEmptyBlockSideInserter && (isSelected && (!isTypingWithinBlock || isCaretWithinFormattedText) || isFirstMultiSelected);
        var shouldShowMobileToolbar = shouldAppearSelected;
        var _this3$state = _this3.state,
            error = _this3$state.error,
            dragging = _this3$state.dragging; // Insertion point can only be made visible if the block is at the
        // the extent of a multi-selection, or not in a multi-selection.

        var shouldShowInsertionPoint = isPartOfMultiSelection && isFirstMultiSelected || !isPartOfMultiSelection; // The wp-block className is important for editor styles.
        // Generate the wrapper class names handling the different states of the block.

        var wrapperClassName = classnames_default()('wp-block editor-block-list__block block-editor-block-list__block', {
          'has-warning': !isValid || !!error || isUnregisteredBlock,
          'is-selected': shouldAppearSelected,
          'is-multi-selected': isPartOfMultiSelection,
          'is-hovered': shouldAppearHovered,
          'is-reusable': Object(external_this_wp_blocks_["isReusableBlock"])(blockType),
          'is-dragging': dragging,
          'is-typing': isTypingWithinBlock,
          'is-focused': isFocusMode && (isSelected || isParentOfSelectedBlock),
          'is-focus-mode': isFocusMode
        }, className);
        var onReplace = _this3.props.onReplace; // Determine whether the block has props to apply to the wrapper.

        var wrapperProps = _this3.props.wrapperProps;

        if (blockType.getEditWrapperProps) {
          wrapperProps = Object(objectSpread["a" /* default */])({}, wrapperProps, blockType.getEditWrapperProps(attributes));
        }

        var blockElementId = "block-".concat(clientId); // We wrap the BlockEdit component in a div that hides it when editing in
        // HTML mode. This allows us to render all of the ancillary pieces
        // (InspectorControls, etc.) which are inside `BlockEdit` but not
        // `BlockHTML`, even in HTML mode.

        var blockEdit = Object(external_this_wp_element_["createElement"])(block_edit, {
          name: name,
          isSelected: isSelected,
          attributes: attributes,
          setAttributes: _this3.setAttributes,
          insertBlocksAfter: isLocked ? undefined : _this3.props.onInsertBlocksAfter,
          onReplace: isLocked ? undefined : onReplace,
          mergeBlocks: isLocked ? undefined : _this3.props.onMerge,
          clientId: clientId,
          isSelectionEnabled: _this3.props.isSelectionEnabled,
          toggleSelection: _this3.props.toggleSelection
        });

        if (mode !== 'visual') {
          blockEdit = Object(external_this_wp_element_["createElement"])("div", {
            style: {
              display: 'none'
            }
          }, blockEdit);
        } // Disable reasons:
        //
        //  jsx-a11y/mouse-events-have-key-events:
        //   - onMouseOver is explicitly handling hover effects
        //
        //  jsx-a11y/no-static-element-interactions:
        //   - Each block can be selected by clicking on it

        /* eslint-disable jsx-a11y/mouse-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/onclick-has-role, jsx-a11y/click-events-have-key-events */


        return Object(external_this_wp_element_["createElement"])(ignore_nested_events, Object(esm_extends["a" /* default */])({
          id: blockElementId,
          ref: _this3.setBlockListRef,
          onMouseOver: _this3.maybeHover,
          onMouseOverHandled: _this3.hideHoverEffects,
          onMouseLeave: _this3.hideHoverEffects,
          className: wrapperClassName,
          "data-type": name,
          onTouchStart: _this3.onTouchStart,
          onFocus: _this3.onFocus,
          onClick: _this3.onClick,
          onKeyDown: _this3.deleteOrInsertAfterWrapper,
          tabIndex: "0",
          "aria-label": blockLabel,
          childHandledEvents: ['onDragStart', 'onMouseDown']
        }, wrapperProps), shouldShowInsertionPoint && Object(external_this_wp_element_["createElement"])(insertion_point, {
          clientId: clientId,
          rootClientId: rootClientId
        }), Object(external_this_wp_element_["createElement"])(block_drop_zone, {
          clientId: clientId,
          rootClientId: rootClientId
        }), isFirstMultiSelected && Object(external_this_wp_element_["createElement"])(multi_controls, {
          rootClientId: rootClientId
        }), Object(external_this_wp_element_["createElement"])("div", {
          className: "editor-block-list__block-edit block-editor-block-list__block-edit"
        }, shouldRenderMovers && Object(external_this_wp_element_["createElement"])(block_mover, {
          clientIds: clientId,
          blockElementId: blockElementId,
          isFirst: isFirst,
          isLast: isLast,
          isHidden: !(isHovered || isSelected) || hoverArea !== 'left',
          isDraggable: isDraggable !== false && !isPartOfMultiSelection && isMovable,
          onDragStart: _this3.onDragStart,
          onDragEnd: _this3.onDragEnd
        }), shouldShowBreadcrumb && Object(external_this_wp_element_["createElement"])(breadcrumb, {
          clientId: clientId,
          isHidden: !(isHovered || isSelected) || hoverArea !== 'left'
        }), (shouldShowContextualToolbar || _this3.isForcingContextualToolbar) && Object(external_this_wp_element_["createElement"])(block_contextual_toolbar // If the toolbar is being shown because of being forced
        // it should focus the toolbar right after the mount.
        , {
          focusOnMount: _this3.isForcingContextualToolbar
        }), !shouldShowContextualToolbar && isSelected && !hasFixedToolbar && !isEmptyDefaultBlock && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["KeyboardShortcuts"], {
          bindGlobal: true,
          eventName: "keydown",
          shortcuts: {
            'alt+f10': _this3.forceFocusedContextualToolbar
          }
        }), Object(external_this_wp_element_["createElement"])(ignore_nested_events, {
          ref: _this3.bindBlockNode,
          onDragStart: _this3.preventDrag,
          onMouseDown: _this3.onPointerDown,
          "data-block": clientId
        }, Object(external_this_wp_element_["createElement"])(block_crash_boundary, {
          onError: _this3.onBlockError
        }, isValid && blockEdit, isValid && mode === 'html' && Object(external_this_wp_element_["createElement"])(block_html, {
          clientId: clientId
        }), !isValid && [Object(external_this_wp_element_["createElement"])(block_invalid_warning, {
          key: "invalid-warning",
          clientId: clientId
        }), Object(external_this_wp_element_["createElement"])("div", {
          key: "invalid-preview"
        }, Object(external_this_wp_blocks_["getSaveElement"])(blockType, attributes))]), shouldShowMobileToolbar && Object(external_this_wp_element_["createElement"])(block_mobile_toolbar, {
          clientId: clientId
        }), !!error && Object(external_this_wp_element_["createElement"])(block_crash_warning, null))), showEmptyBlockSideInserter && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("div", {
          className: "editor-block-list__side-inserter block-editor-block-list__side-inserter"
        }, Object(external_this_wp_element_["createElement"])(inserter_with_shortcuts, {
          clientId: clientId,
          rootClientId: rootClientId,
          onToggle: _this3.selectOnOpen
        })), Object(external_this_wp_element_["createElement"])("div", {
          className: "editor-block-list__empty-block-inserter block-editor-block-list__empty-block-inserter"
        }, Object(external_this_wp_element_["createElement"])(inserter, {
          position: "top right",
          onToggle: _this3.selectOnOpen,
          rootClientId: rootClientId,
          clientId: clientId
        }))));
        /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/onclick-has-role, jsx-a11y/click-events-have-key-events */
      });
    }
  }]);

  return BlockListBlock;
}(external_this_wp_element_["Component"]);
var applyWithSelect = Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var clientId = _ref2.clientId,
      rootClientId = _ref2.rootClientId,
      isLargeViewport = _ref2.isLargeViewport;

  var _select = select('core/block-editor'),
      isBlockSelected = _select.isBlockSelected,
      isAncestorMultiSelected = _select.isAncestorMultiSelected,
      isBlockMultiSelected = _select.isBlockMultiSelected,
      isFirstMultiSelectedBlock = _select.isFirstMultiSelectedBlock,
      isTyping = _select.isTyping,
      isCaretWithinFormattedText = _select.isCaretWithinFormattedText,
      getBlockMode = _select.getBlockMode,
      isSelectionEnabled = _select.isSelectionEnabled,
      getSelectedBlocksInitialCaretPosition = _select.getSelectedBlocksInitialCaretPosition,
      getSettings = _select.getSettings,
      hasSelectedInnerBlock = _select.hasSelectedInnerBlock,
      getTemplateLock = _select.getTemplateLock,
      __unstableGetBlockWithoutInnerBlocks = _select.__unstableGetBlockWithoutInnerBlocks;

  var block = __unstableGetBlockWithoutInnerBlocks(clientId);

  var isSelected = isBlockSelected(clientId);

  var _getSettings = getSettings(),
      hasFixedToolbar = _getSettings.hasFixedToolbar,
      focusMode = _getSettings.focusMode;

  var templateLock = getTemplateLock(rootClientId);
  var isParentOfSelectedBlock = hasSelectedInnerBlock(clientId, true); // The fallback to `{}` is a temporary fix.
  // This function should never be called when a block is not present in the state.
  // It happens now because the order in withSelect rendering is not correct.

  var _ref3 = block || {},
      name = _ref3.name,
      attributes = _ref3.attributes,
      isValid = _ref3.isValid;

  return {
    isPartOfMultiSelection: isBlockMultiSelected(clientId) || isAncestorMultiSelected(clientId),
    isFirstMultiSelected: isFirstMultiSelectedBlock(clientId),
    // We only care about this prop when the block is selected
    // Thus to avoid unnecessary rerenders we avoid updating the prop if the block is not selected.
    isTypingWithinBlock: (isSelected || isParentOfSelectedBlock) && isTyping(),
    isCaretWithinFormattedText: isCaretWithinFormattedText(),
    mode: getBlockMode(clientId),
    isSelectionEnabled: isSelectionEnabled(),
    initialPosition: isSelected ? getSelectedBlocksInitialCaretPosition() : null,
    isEmptyDefaultBlock: name && Object(external_this_wp_blocks_["isUnmodifiedDefaultBlock"])({
      name: name,
      attributes: attributes
    }),
    isMovable: 'all' !== templateLock,
    isLocked: !!templateLock,
    isFocusMode: focusMode && isLargeViewport,
    hasFixedToolbar: hasFixedToolbar && isLargeViewport,
    // Users of the editor.BlockListBlock filter used to be able to access the block prop
    // Ideally these blocks would rely on the clientId prop only.
    // This is kept for backward compatibility reasons.
    block: block,
    name: name,
    attributes: attributes,
    isValid: isValid,
    isSelected: isSelected,
    isParentOfSelectedBlock: isParentOfSelectedBlock
  };
});
var applyWithDispatch = Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps, _ref4) {
  var select = _ref4.select;

  var _dispatch = dispatch('core/block-editor'),
      updateBlockAttributes = _dispatch.updateBlockAttributes,
      selectBlock = _dispatch.selectBlock,
      multiSelect = _dispatch.multiSelect,
      insertBlocks = _dispatch.insertBlocks,
      insertDefaultBlock = _dispatch.insertDefaultBlock,
      removeBlock = _dispatch.removeBlock,
      mergeBlocks = _dispatch.mergeBlocks,
      replaceBlocks = _dispatch.replaceBlocks,
      _toggleSelection = _dispatch.toggleSelection;

  return {
    onChange: function onChange(clientId, attributes) {
      updateBlockAttributes(clientId, attributes);
    },
    onSelect: function onSelect() {
      var clientId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ownProps.clientId;
      var initialPosition = arguments.length > 1 ? arguments[1] : undefined;
      selectBlock(clientId, initialPosition);
    },
    onInsertBlocks: function onInsertBlocks(blocks, index) {
      var rootClientId = ownProps.rootClientId;
      insertBlocks(blocks, index, rootClientId);
    },
    onInsertDefaultBlockAfter: function onInsertDefaultBlockAfter() {
      var clientId = ownProps.clientId,
          rootClientId = ownProps.rootClientId;

      var _select2 = select('core/block-editor'),
          getBlockIndex = _select2.getBlockIndex;

      var index = getBlockIndex(clientId, rootClientId);
      insertDefaultBlock({}, rootClientId, index + 1);
    },
    onInsertBlocksAfter: function onInsertBlocksAfter(blocks) {
      var clientId = ownProps.clientId,
          rootClientId = ownProps.rootClientId;

      var _select3 = select('core/block-editor'),
          getBlockIndex = _select3.getBlockIndex;

      var index = getBlockIndex(clientId, rootClientId);
      insertBlocks(blocks, index + 1, rootClientId);
    },
    onRemove: function onRemove(clientId) {
      removeBlock(clientId);
    },
    onMerge: function onMerge(forward) {
      var clientId = ownProps.clientId;

      var _select4 = select('core/block-editor'),
          getPreviousBlockClientId = _select4.getPreviousBlockClientId,
          getNextBlockClientId = _select4.getNextBlockClientId;

      if (forward) {
        var nextBlockClientId = getNextBlockClientId(clientId);

        if (nextBlockClientId) {
          mergeBlocks(clientId, nextBlockClientId);
        }
      } else {
        var previousBlockClientId = getPreviousBlockClientId(clientId);

        if (previousBlockClientId) {
          mergeBlocks(previousBlockClientId, clientId);
        }
      }
    },
    onReplace: function onReplace(blocks) {
      replaceBlocks([ownProps.clientId], blocks);
    },
    onMetaChange: function onMetaChange(updatedMeta) {
      var _select5 = select('core/block-editor'),
          getSettings = _select5.getSettings;

      var onChangeMeta = getSettings().__experimentalMetaSource.onChange;

      onChangeMeta(updatedMeta);
    },
    onShiftSelection: function onShiftSelection() {
      if (!ownProps.isSelectionEnabled) {
        return;
      }

      var _select6 = select('core/block-editor'),
          getBlockSelectionStart = _select6.getBlockSelectionStart;

      if (getBlockSelectionStart()) {
        multiSelect(getBlockSelectionStart(), ownProps.clientId);
      } else {
        selectBlock(ownProps.clientId);
      }
    },
    toggleSelection: function toggleSelection(selectionEnabled) {
      _toggleSelection(selectionEnabled);
    }
  };
});
/* harmony default export */ var block_list_block = (Object(external_this_wp_compose_["compose"])(external_this_wp_compose_["pure"], Object(external_this_wp_viewport_["withViewportMatch"])({
  isLargeViewport: 'medium'
}), applyWithSelect, applyWithDispatch, Object(external_this_wp_components_["withFilters"])('editor.BlockListBlock'))(block_BlockListBlock));

// EXTERNAL MODULE: external {"this":["wp","htmlEntities"]}
var external_this_wp_htmlEntities_ = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/default-block-appender/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




function DefaultBlockAppender(_ref) {
  var isLocked = _ref.isLocked,
      isVisible = _ref.isVisible,
      onAppend = _ref.onAppend,
      showPrompt = _ref.showPrompt,
      placeholder = _ref.placeholder,
      rootClientId = _ref.rootClientId,
      hovered = _ref.hovered,
      setState = _ref.setState;

  if (isLocked || !isVisible) {
    return null;
  }

  var value = Object(external_this_wp_htmlEntities_["decodeEntities"])(placeholder) || Object(external_this_wp_i18n_["__"])('Start writing or type / to choose a block'); // The appender "button" is in-fact a text field so as to support
  // transitions by WritingFlow occurring by arrow key press. WritingFlow
  // only supports tab transitions into text fields and to the block focus
  // boundary.
  //
  // See: https://github.com/WordPress/gutenberg/issues/4829#issuecomment-374213658
  //
  // If it were ever to be made to be a proper `button` element, it is
  // important to note that `onFocus` alone would not be sufficient to
  // capture click events, notably in Firefox.
  //
  // See: https://gist.github.com/cvrebert/68659d0333a578d75372
  // The wp-block className is important for editor styles.


  return Object(external_this_wp_element_["createElement"])("div", {
    "data-root-client-id": rootClientId || '',
    className: "wp-block editor-default-block-appender block-editor-default-block-appender",
    onMouseEnter: function onMouseEnter() {
      return setState({
        hovered: true
      });
    },
    onMouseLeave: function onMouseLeave() {
      return setState({
        hovered: false
      });
    }
  }, Object(external_this_wp_element_["createElement"])(block_drop_zone, {
    rootClientId: rootClientId
  }), Object(external_this_wp_element_["createElement"])(react_autosize_textarea_lib_default.a, {
    role: "button",
    "aria-label": Object(external_this_wp_i18n_["__"])('Add block'),
    className: "editor-default-block-appender__content block-editor-default-block-appender__content",
    readOnly: true,
    onFocus: onAppend,
    value: showPrompt ? value : ''
  }), hovered && Object(external_this_wp_element_["createElement"])(inserter_with_shortcuts, {
    rootClientId: rootClientId
  }), Object(external_this_wp_element_["createElement"])(inserter, {
    rootClientId: rootClientId,
    position: "top right",
    isAppender: true
  }));
}
/* harmony default export */ var default_block_appender = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_compose_["withState"])({
  hovered: false
}), Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  var _select = select('core/block-editor'),
      getBlockCount = _select.getBlockCount,
      getBlockName = _select.getBlockName,
      isBlockValid = _select.isBlockValid,
      getSettings = _select.getSettings,
      getTemplateLock = _select.getTemplateLock;

  var isEmpty = !getBlockCount(ownProps.rootClientId);
  var isLastBlockDefault = getBlockName(ownProps.lastBlockClientId) === Object(external_this_wp_blocks_["getDefaultBlockName"])();
  var isLastBlockValid = isBlockValid(ownProps.lastBlockClientId);

  var _getSettings = getSettings(),
      bodyPlaceholder = _getSettings.bodyPlaceholder;

  return {
    isVisible: isEmpty || !isLastBlockDefault || !isLastBlockValid,
    showPrompt: isEmpty,
    isLocked: !!getTemplateLock(ownProps.rootClientId),
    placeholder: bodyPlaceholder
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  var _dispatch = dispatch('core/block-editor'),
      insertDefaultBlock = _dispatch.insertDefaultBlock,
      startTyping = _dispatch.startTyping;

  return {
    onAppend: function onAppend() {
      var rootClientId = ownProps.rootClientId;
      insertDefaultBlock(undefined, rootClientId);
      startTyping();
    }
  };
}))(DefaultBlockAppender));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list-appender/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





function BlockListAppender(_ref) {
  var blockClientIds = _ref.blockClientIds,
      rootClientId = _ref.rootClientId,
      canInsertDefaultBlock = _ref.canInsertDefaultBlock,
      isLocked = _ref.isLocked;

  if (isLocked) {
    return null;
  }

  if (canInsertDefaultBlock) {
    return Object(external_this_wp_element_["createElement"])(ignore_nested_events, {
      childHandledEvents: ['onFocus', 'onClick', 'onKeyDown']
    }, Object(external_this_wp_element_["createElement"])(default_block_appender, {
      rootClientId: rootClientId,
      lastBlockClientId: Object(external_lodash_["last"])(blockClientIds)
    }));
  }

  return Object(external_this_wp_element_["createElement"])("div", {
    className: "block-list-appender"
  }, Object(external_this_wp_element_["createElement"])(inserter, {
    rootClientId: rootClientId,
    renderToggle: function renderToggle(_ref2) {
      var onToggle = _ref2.onToggle,
          disabled = _ref2.disabled,
          isOpen = _ref2.isOpen;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
        label: Object(external_this_wp_i18n_["__"])('Add block'),
        icon: "insert",
        onClick: onToggle,
        className: "block-list-appender__toggle",
        "aria-haspopup": "true",
        "aria-expanded": isOpen,
        disabled: disabled
      });
    },
    isAppender: true
  }));
}

/* harmony default export */ var block_list_appender = (Object(external_this_wp_data_["withSelect"])(function (select, _ref3) {
  var rootClientId = _ref3.rootClientId;

  var _select = select('core/block-editor'),
      getBlockOrder = _select.getBlockOrder,
      canInsertBlockType = _select.canInsertBlockType,
      getTemplateLock = _select.getTemplateLock;

  return {
    isLocked: !!getTemplateLock(rootClientId),
    blockClientIds: getBlockOrder(rootClientId),
    canInsertDefaultBlock: canInsertBlockType(Object(external_this_wp_blocks_["getDefaultBlockName"])(), rootClientId)
  };
})(BlockListAppender));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-list/index.js










/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





var block_list_forceSyncUpdates = function forceSyncUpdates(WrappedComponent) {
  return function (props) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_data_["__experimentalAsyncModeProvider"], {
      value: false
    }, Object(external_this_wp_element_["createElement"])(WrappedComponent, props));
  };
};

var block_list_BlockList =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockList, _Component);

  function BlockList(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockList);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockList).call(this, props));
    _this.onSelectionStart = _this.onSelectionStart.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onSelectionEnd = _this.onSelectionEnd.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.setBlockRef = _this.setBlockRef.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.setLastClientY = _this.setLastClientY.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onPointerMove = Object(external_lodash_["throttle"])(_this.onPointerMove.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this))), 100); // Browser does not fire `*move` event when the pointer position changes
    // relative to the document, so fire it with the last known position.

    _this.onScroll = function () {
      return _this.onPointerMove({
        clientY: _this.lastClientY
      });
    };

    _this.lastClientY = 0;
    _this.nodes = {};
    return _this;
  }

  Object(createClass["a" /* default */])(BlockList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('mousemove', this.setLastClientY);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mousemove', this.setLastClientY);
    }
  }, {
    key: "setLastClientY",
    value: function setLastClientY(_ref) {
      var clientY = _ref.clientY;
      this.lastClientY = clientY;
    }
  }, {
    key: "setBlockRef",
    value: function setBlockRef(node, clientId) {
      if (node === null) {
        delete this.nodes[clientId];
      } else {
        this.nodes = Object(objectSpread["a" /* default */])({}, this.nodes, Object(defineProperty["a" /* default */])({}, clientId, node));
      }
    }
    /**
     * Handles a pointer move event to update the extent of the current cursor
     * multi-selection.
     *
     * @param {MouseEvent} event A mousemove event object.
     *
     * @return {void}
     */

  }, {
    key: "onPointerMove",
    value: function onPointerMove(_ref2) {
      var clientY = _ref2.clientY;

      // We don't start multi-selection until the mouse starts moving, so as
      // to avoid dispatching multi-selection actions on an in-place click.
      if (!this.props.isMultiSelecting) {
        this.props.onStartMultiSelect();
      }

      var blockContentBoundaries = getBlockDOMNode(this.selectionAtStart).getBoundingClientRect(); // prevent multi-selection from triggering when the selected block is a float
      // and the cursor is still between the top and the bottom of the block.

      if (clientY >= blockContentBoundaries.top && clientY <= blockContentBoundaries.bottom) {
        return;
      }

      var y = clientY - blockContentBoundaries.top;
      var key = Object(external_lodash_["findLast"])(this.coordMapKeys, function (coordY) {
        return coordY < y;
      });
      this.onSelectionChange(this.coordMap[key]);
    }
    /**
     * Binds event handlers to the document for tracking a pending multi-select
     * in response to a mousedown event occurring in a rendered block.
     *
     * @param {string} clientId Client ID of block where mousedown occurred.
     *
     * @return {void}
     */

  }, {
    key: "onSelectionStart",
    value: function onSelectionStart(clientId) {
      if (!this.props.isSelectionEnabled) {
        return;
      }

      var boundaries = this.nodes[clientId].getBoundingClientRect(); // Create a clientId to Y coördinate map.

      var clientIdToCoordMap = Object(external_lodash_["mapValues"])(this.nodes, function (node) {
        return node.getBoundingClientRect().top - boundaries.top;
      }); // Cache a Y coördinate to clientId map for use in `onPointerMove`.

      this.coordMap = Object(external_lodash_["invert"])(clientIdToCoordMap); // Cache an array of the Y coördinates for use in `onPointerMove`.
      // Sort the coördinates, as `this.nodes` will not necessarily reflect
      // the current block sequence.

      this.coordMapKeys = Object(external_lodash_["sortBy"])(Object.values(clientIdToCoordMap));
      this.selectionAtStart = clientId;
      window.addEventListener('mousemove', this.onPointerMove); // Capture scroll on all elements.

      window.addEventListener('scroll', this.onScroll, true);
      window.addEventListener('mouseup', this.onSelectionEnd);
    }
    /**
     * Handles multi-selection changes in response to pointer move.
     *
     * @param {string} clientId Client ID of block under cursor in multi-select
     *                          drag.
     */

  }, {
    key: "onSelectionChange",
    value: function onSelectionChange(clientId) {
      var _this$props = this.props,
          onMultiSelect = _this$props.onMultiSelect,
          selectionStart = _this$props.selectionStart,
          selectionEnd = _this$props.selectionEnd;
      var selectionAtStart = this.selectionAtStart;
      var isAtStart = selectionAtStart === clientId;

      if (!selectionAtStart || !this.props.isSelectionEnabled) {
        return;
      } // If multi-selecting and cursor extent returns to the start of
      // selection, cancel multi-select.


      if (isAtStart && selectionStart) {
        onMultiSelect(null, null);
      } // Expand multi-selection to block under cursor.


      if (!isAtStart && selectionEnd !== clientId) {
        onMultiSelect(selectionAtStart, clientId);
      }
    }
    /**
     * Handles a mouseup event to end the current cursor multi-selection.
     *
     * @return {void}
     */

  }, {
    key: "onSelectionEnd",
    value: function onSelectionEnd() {
      // Cancel throttled calls.
      this.onPointerMove.cancel();
      delete this.coordMap;
      delete this.coordMapKeys;
      delete this.selectionAtStart;
      window.removeEventListener('mousemove', this.onPointerMove);
      window.removeEventListener('scroll', this.onScroll, true);
      window.removeEventListener('mouseup', this.onSelectionEnd); // We may or may not be in a multi-selection when mouseup occurs (e.g.
      // an in-place mouse click), so only trigger stop if multi-selecting.

      if (this.props.isMultiSelecting) {
        this.props.onStopMultiSelect();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          blockClientIds = _this$props2.blockClientIds,
          rootClientId = _this$props2.rootClientId,
          isDraggable = _this$props2.isDraggable,
          selectedBlockClientId = _this$props2.selectedBlockClientId,
          multiSelectedBlockClientIds = _this$props2.multiSelectedBlockClientIds,
          hasMultiSelection = _this$props2.hasMultiSelection;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-block-list__layout block-editor-block-list__layout"
      }, Object(external_lodash_["map"])(blockClientIds, function (clientId, blockIndex) {
        var isBlockInSelection = hasMultiSelection ? multiSelectedBlockClientIds.includes(clientId) : selectedBlockClientId === clientId;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_data_["__experimentalAsyncModeProvider"], {
          key: 'block-' + clientId,
          value: !isBlockInSelection
        }, Object(external_this_wp_element_["createElement"])(block_list_block, {
          clientId: clientId,
          blockRef: _this2.setBlockRef,
          onSelectionStart: _this2.onSelectionStart,
          rootClientId: rootClientId,
          isFirst: blockIndex === 0,
          isLast: blockIndex === blockClientIds.length - 1,
          isDraggable: isDraggable
        }));
      }), Object(external_this_wp_element_["createElement"])(block_list_appender, {
        rootClientId: rootClientId
      }));
    }
  }]);

  return BlockList;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var block_list = (Object(external_this_wp_compose_["compose"])([// This component needs to always be synchronous
// as it's the one changing the async mode
// depending on the block selection.
block_list_forceSyncUpdates, Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  var _select = select('core/block-editor'),
      getBlockOrder = _select.getBlockOrder,
      isSelectionEnabled = _select.isSelectionEnabled,
      isMultiSelecting = _select.isMultiSelecting,
      getMultiSelectedBlocksStartClientId = _select.getMultiSelectedBlocksStartClientId,
      getMultiSelectedBlocksEndClientId = _select.getMultiSelectedBlocksEndClientId,
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getMultiSelectedBlockClientIds = _select.getMultiSelectedBlockClientIds,
      hasMultiSelection = _select.hasMultiSelection;

  var rootClientId = ownProps.rootClientId;
  return {
    blockClientIds: getBlockOrder(rootClientId),
    selectionStart: getMultiSelectedBlocksStartClientId(),
    selectionEnd: getMultiSelectedBlocksEndClientId(),
    isSelectionEnabled: isSelectionEnabled(),
    isMultiSelecting: isMultiSelecting(),
    selectedBlockClientId: getSelectedBlockClientId(),
    multiSelectedBlockClientIds: getMultiSelectedBlockClientIds(),
    hasMultiSelection: hasMultiSelection()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      startMultiSelect = _dispatch.startMultiSelect,
      stopMultiSelect = _dispatch.stopMultiSelect,
      multiSelect = _dispatch.multiSelect;

  return {
    onStartMultiSelect: startMultiSelect,
    onStopMultiSelect: stopMultiSelect,
    onMultiSelect: multiSelect
  };
})])(block_list_BlockList));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/inner-blocks/index.js







/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




var inner_blocks_InnerBlocks =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(InnerBlocks, _Component);

  function InnerBlocks() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, InnerBlocks);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(InnerBlocks).apply(this, arguments));
    _this.state = {
      templateInProcess: !!_this.props.template
    };

    _this.updateNestedSettings();

    return _this;
  }

  Object(createClass["a" /* default */])(InnerBlocks, [{
    key: "getTemplateLock",
    value: function getTemplateLock() {
      var _this$props = this.props,
          templateLock = _this$props.templateLock,
          parentLock = _this$props.parentLock;
      return templateLock === undefined ? parentLock : templateLock;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var innerBlocks = this.props.block.innerBlocks; // only synchronize innerBlocks with template if innerBlocks are empty or a locking all exists

      if (innerBlocks.length === 0 || this.getTemplateLock() === 'all') {
        this.synchronizeBlocksWithTemplate();
      }

      if (this.state.templateInProcess) {
        this.setState({
          templateInProcess: false
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          template = _this$props2.template,
          block = _this$props2.block;
      var innerBlocks = block.innerBlocks;
      this.updateNestedSettings(); // only synchronize innerBlocks with template if innerBlocks are empty or a locking all exists

      if (innerBlocks.length === 0 || this.getTemplateLock() === 'all') {
        var hasTemplateChanged = !Object(external_lodash_["isEqual"])(template, prevProps.template);

        if (hasTemplateChanged) {
          this.synchronizeBlocksWithTemplate();
        }
      }
    }
    /**
     * Called on mount or when a mismatch exists between the templates and
     * inner blocks, synchronizes inner blocks with the template, replacing
     * current blocks.
     */

  }, {
    key: "synchronizeBlocksWithTemplate",
    value: function synchronizeBlocksWithTemplate() {
      var _this$props3 = this.props,
          template = _this$props3.template,
          block = _this$props3.block,
          replaceInnerBlocks = _this$props3.replaceInnerBlocks;
      var innerBlocks = block.innerBlocks; // Synchronize with templates. If the next set differs, replace.

      var nextBlocks = Object(external_this_wp_blocks_["synchronizeBlocksWithTemplate"])(innerBlocks, template);

      if (!Object(external_lodash_["isEqual"])(nextBlocks, innerBlocks)) {
        replaceInnerBlocks(nextBlocks);
      }
    }
  }, {
    key: "updateNestedSettings",
    value: function updateNestedSettings() {
      var _this$props4 = this.props,
          blockListSettings = _this$props4.blockListSettings,
          allowedBlocks = _this$props4.allowedBlocks,
          updateNestedSettings = _this$props4.updateNestedSettings;
      var newSettings = {
        allowedBlocks: allowedBlocks,
        templateLock: this.getTemplateLock()
      };

      if (!external_this_wp_isShallowEqual_default()(blockListSettings, newSettings)) {
        updateNestedSettings(newSettings);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          clientId = _this$props5.clientId,
          isSmallScreen = _this$props5.isSmallScreen,
          isSelectedBlockInRoot = _this$props5.isSelectedBlockInRoot;
      var templateInProcess = this.state.templateInProcess;
      var classes = classnames_default()('editor-inner-blocks block-editor-inner-blocks', {
        'has-overlay': isSmallScreen && !isSelectedBlockInRoot
      });
      return Object(external_this_wp_element_["createElement"])("div", {
        className: classes
      }, !templateInProcess && Object(external_this_wp_element_["createElement"])(block_list, {
        rootClientId: clientId
      }));
    }
  }]);

  return InnerBlocks;
}(external_this_wp_element_["Component"]);

inner_blocks_InnerBlocks = Object(external_this_wp_compose_["compose"])([context_withBlockEditContext(function (context) {
  return Object(external_lodash_["pick"])(context, ['clientId']);
}), Object(external_this_wp_viewport_["withViewportMatch"])({
  isSmallScreen: '< medium'
}), Object(external_this_wp_data_["withSelect"])(function (select, ownProps) {
  var _select = select('core/block-editor'),
      isBlockSelected = _select.isBlockSelected,
      hasSelectedInnerBlock = _select.hasSelectedInnerBlock,
      getBlock = _select.getBlock,
      getBlockListSettings = _select.getBlockListSettings,
      getBlockRootClientId = _select.getBlockRootClientId,
      getTemplateLock = _select.getTemplateLock;

  var clientId = ownProps.clientId;
  var rootClientId = getBlockRootClientId(clientId);
  return {
    isSelectedBlockInRoot: isBlockSelected(clientId) || hasSelectedInnerBlock(clientId),
    block: getBlock(clientId),
    blockListSettings: getBlockListSettings(clientId),
    parentLock: getTemplateLock(rootClientId)
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  var _dispatch = dispatch('core/block-editor'),
      _replaceInnerBlocks = _dispatch.replaceInnerBlocks,
      updateBlockListSettings = _dispatch.updateBlockListSettings;

  var block = ownProps.block,
      clientId = ownProps.clientId,
      _ownProps$templateIns = ownProps.templateInsertUpdatesSelection,
      templateInsertUpdatesSelection = _ownProps$templateIns === void 0 ? true : _ownProps$templateIns;
  return {
    replaceInnerBlocks: function replaceInnerBlocks(blocks) {
      _replaceInnerBlocks(clientId, blocks, block.innerBlocks.length === 0 && templateInsertUpdatesSelection);
    },
    updateNestedSettings: function updateNestedSettings(settings) {
      dispatch(updateBlockListSettings(clientId, settings));
    }
  };
})])(inner_blocks_InnerBlocks);
inner_blocks_InnerBlocks.Content = Object(external_this_wp_blocks_["withBlockContentContext"])(function (_ref) {
  var BlockContent = _ref.BlockContent;
  return Object(external_this_wp_element_["createElement"])(BlockContent, null);
});
/* harmony default export */ var inner_blocks = (inner_blocks_InnerBlocks);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/inspector-advanced-controls/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var inspector_advanced_controls_createSlotFill = Object(external_this_wp_components_["createSlotFill"])('InspectorAdvancedControls'),
    inspector_advanced_controls_Fill = inspector_advanced_controls_createSlotFill.Fill,
    inspector_advanced_controls_Slot = inspector_advanced_controls_createSlotFill.Slot;

var InspectorAdvancedControls = ifBlockEditSelected(inspector_advanced_controls_Fill);
InspectorAdvancedControls.Slot = inspector_advanced_controls_Slot;
/* harmony default export */ var inspector_advanced_controls = (InspectorAdvancedControls);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/inspector-controls/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var inspector_controls_createSlotFill = Object(external_this_wp_components_["createSlotFill"])('InspectorControls'),
    inspector_controls_Fill = inspector_controls_createSlotFill.Fill,
    inspector_controls_Slot = inspector_controls_createSlotFill.Slot;

var InspectorControls = ifBlockEditSelected(inspector_controls_Fill);
InspectorControls.Slot = inspector_controls_Slot;
/* harmony default export */ var inspector_controls = (InspectorControls);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/color-palette/control.js



/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



 // translators: first %s: The type of color (e.g. background color), second %s: the color name or value (e.g. red or #ff0000)

var colorIndicatorAriaLabel = Object(external_this_wp_i18n_["__"])('(current %s: %s)');

function ColorPaletteControl(_ref) {
  var colors = _ref.colors,
      disableCustomColors = _ref.disableCustomColors,
      label = _ref.label,
      onChange = _ref.onChange,
      value = _ref.value;
  var colorObject = utils_getColorObjectByColorValue(colors, value);
  var colorName = colorObject && colorObject.name;
  var ariaLabel = Object(external_this_wp_i18n_["sprintf"])(colorIndicatorAriaLabel, label.toLowerCase(), colorName || value);
  var labelElement = Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, label, value && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ColorIndicator"], {
    colorValue: value,
    "aria-label": ariaLabel
  }));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BaseControl"], {
    className: "editor-color-palette-control block-editor-color-palette-control",
    label: labelElement
  }, Object(external_this_wp_element_["createElement"])(color_palette, Object(esm_extends["a" /* default */])({
    className: "editor-color-palette-control__color-palette block-editor-color-palette-control__color-palette",
    value: value,
    onChange: onChange
  }, {
    colors: colors,
    disableCustomColors: disableCustomColors
  })));
}
/* harmony default export */ var color_palette_control = (Object(external_this_wp_compose_["compose"])([with_color_context, Object(external_this_wp_compose_["ifCondition"])(function (_ref2) {
  var hasColorsToChoose = _ref2.hasColorsToChoose;
  return hasColorsToChoose;
})])(ColorPaletteControl));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/panel-color-settings/index.js





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





var hasCustomColorsDisabledForSetting = function hasCustomColorsDisabledForSetting(disableCustomColors, colorSetting) {
  if (colorSetting.disableCustomColors !== undefined) {
    return colorSetting.disableCustomColors;
  }

  return disableCustomColors;
};

var hasColorsToChooseInSetting = function hasColorsToChooseInSetting() {
  var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var disableCustomColors = arguments.length > 1 ? arguments[1] : undefined;
  var colorSetting = arguments.length > 2 ? arguments[2] : undefined;

  if (!hasCustomColorsDisabledForSetting(disableCustomColors, colorSetting)) {
    return true;
  }

  return (colorSetting.colors || colors).length > 0;
};

var panel_color_settings_hasColorsToChoose = function hasColorsToChoose(_ref) {
  var colors = _ref.colors,
      disableCustomColors = _ref.disableCustomColors,
      colorSettings = _ref.colorSettings;
  return Object(external_lodash_["some"])(colorSettings, function (colorSetting) {
    return hasColorsToChooseInSetting(colors, disableCustomColors, colorSetting);
  });
}; // translators: first %s: The type of color (e.g. background color), second %s: the color name or value (e.g. red or #ff0000)


var panel_color_settings_colorIndicatorAriaLabel = Object(external_this_wp_i18n_["__"])('(%s: %s)');

var panel_color_settings_renderColorIndicators = function renderColorIndicators(colorSettings, colors) {
  return colorSettings.map(function (_ref2, index) {
    var value = _ref2.value,
        label = _ref2.label,
        availableColors = _ref2.colors;

    if (!value) {
      return null;
    }

    var colorObject = utils_getColorObjectByColorValue(availableColors || colors, value);
    var colorName = colorObject && colorObject.name;
    var ariaLabel = Object(external_this_wp_i18n_["sprintf"])(panel_color_settings_colorIndicatorAriaLabel, label.toLowerCase(), colorName || value);
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ColorIndicator"], {
      key: index,
      colorValue: value,
      "aria-label": ariaLabel
    });
  });
}; // colorSettings is passed as an array of props so that it can be used for
// mapping both ColorIndicator and ColorPaletteControl components. Passing
// an array of components/nodes here wouldn't be feasible.


var PanelColorSettings = Object(external_this_wp_compose_["ifCondition"])(panel_color_settings_hasColorsToChoose)(function (_ref3) {
  var children = _ref3.children,
      colors = _ref3.colors,
      colorSettings = _ref3.colorSettings,
      disableCustomColors = _ref3.disableCustomColors,
      title = _ref3.title,
      props = Object(objectWithoutProperties["a" /* default */])(_ref3, ["children", "colors", "colorSettings", "disableCustomColors", "title"]);

  var titleElement = Object(external_this_wp_element_["createElement"])("span", {
    className: "editor-panel-color-settings__panel-title block-editor-panel-color-settings__panel-title"
  }, title, panel_color_settings_renderColorIndicators(colorSettings, colors));
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], Object(esm_extends["a" /* default */])({
    className: "editor-panel-color-settings block-editor-panel-color-settings",
    title: titleElement
  }, props), colorSettings.map(function (settings, index) {
    return Object(external_this_wp_element_["createElement"])(color_palette_control, Object(esm_extends["a" /* default */])({
      key: index
    }, Object(objectSpread["a" /* default */])({
      colors: colors,
      disableCustomColors: disableCustomColors
    }, settings)));
  }), children);
});
/* harmony default export */ var panel_color_settings = (with_color_context(PanelColorSettings));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/plain-text/index.js




/**
 * External dependencies
 */



function PlainText(_ref) {
  var _onChange = _ref.onChange,
      className = _ref.className,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["onChange", "className"]);

  return Object(external_this_wp_element_["createElement"])(react_autosize_textarea_lib_default.a, Object(esm_extends["a" /* default */])({
    className: classnames_default()('editor-plain-text block-editor-plain-text', className),
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    }
  }, props));
}

/* harmony default export */ var plain_text = (PlainText);

// EXTERNAL MODULE: ./node_modules/memize/index.js
var memize = __webpack_require__(41);
var memize_default = /*#__PURE__*/__webpack_require__.n(memize);

// EXTERNAL MODULE: external {"this":["wp","blob"]}
var external_this_wp_blob_ = __webpack_require__(35);

// EXTERNAL MODULE: external {"this":["wp","deprecated"]}
var external_this_wp_deprecated_ = __webpack_require__(49);
var external_this_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_deprecated_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/rich-text/format-edit.js


/**
 * WordPress dependencies
 */




var format_edit_FormatEdit = function FormatEdit(_ref) {
  var formatTypes = _ref.formatTypes,
      onChange = _ref.onChange,
      value = _ref.value;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, formatTypes.map(function (_ref2) {
    var name = _ref2.name,
        Edit = _ref2.edit;

    if (!Edit) {
      return null;
    }

    var activeFormat = Object(external_this_wp_richText_["getActiveFormat"])(value, name);
    var isActive = activeFormat !== undefined;
    var activeObject = Object(external_this_wp_richText_["getActiveObject"])(value);
    var isObjectActive = activeObject !== undefined;
    return Object(external_this_wp_element_["createElement"])(Edit, {
      key: name,
      isActive: isActive,
      activeAttributes: isActive ? activeFormat.attributes || {} : {},
      isObjectActive: isObjectActive,
      activeObjectAttributes: isObjectActive ? activeObject.attributes || {} : {},
      value: value,
      onChange: onChange
    });
  }));
};

/* harmony default export */ var format_edit = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/rich-text'),
      getFormatTypes = _select.getFormatTypes;

  return {
    formatTypes: getFormatTypes()
  };
})(format_edit_FormatEdit));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/rich-text/format-toolbar/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




var format_toolbar_FormatToolbar = function FormatToolbar(_ref) {
  var controls = _ref.controls;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-format-toolbar block-editor-format-toolbar"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Toolbar"], null, controls.map(function (format) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Slot"], {
      name: "RichText.ToolbarControls.".concat(format),
      key: format
    });
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Slot"], {
    name: "RichText.ToolbarControls"
  }, function (fills) {
    return fills.length && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["DropdownMenu"], {
      icon: false,
      position: "bottom left",
      label: Object(external_this_wp_i18n_["__"])('More Rich Text Controls'),
      controls: Object(external_lodash_["orderBy"])(fills.map(function (_ref2) {
        var _ref3 = Object(slicedToArray["a" /* default */])(_ref2, 1),
            props = _ref3[0].props;

        return props;
      }), 'title')
    });
  })));
};

/* harmony default export */ var format_toolbar = (format_toolbar_FormatToolbar);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/rich-text/aria.js
/**
 * External dependencies
 */


var aria_isAriaPropName = function isAriaPropName(name) {
  return Object(external_lodash_["startsWith"])(name, 'aria-');
};

var aria_pickAriaProps = function pickAriaProps(props) {
  return Object(external_lodash_["pickBy"])(props, function (value, key) {
    return aria_isAriaPropName(key) && !Object(external_lodash_["isNil"])(value);
  });
};
var aria_diffAriaProps = function diffAriaProps(props, nextProps) {
  var prevAriaKeys = Object(external_lodash_["keys"])(aria_pickAriaProps(props));
  var nextAriaKeys = Object(external_lodash_["keys"])(aria_pickAriaProps(nextProps));
  var removedKeys = Object(external_lodash_["difference"])(prevAriaKeys, nextAriaKeys);
  var updatedKeys = nextAriaKeys.filter(function (key) {
    return !Object(external_lodash_["isEqual"])(props[key], nextProps[key]);
  });
  return {
    removedKeys: removedKeys,
    updatedKeys: updatedKeys
  };
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/rich-text/editable.js










/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Browser dependencies
 */

var userAgent = window.navigator.userAgent;
/**
 * Applies a fix that provides `input` events for contenteditable in Internet Explorer.
 *
 * @param {Element} editorNode The root editor node.
 *
 * @return {Function} A function to remove the fix (for cleanup).
 */

function applyInternetExplorerInputFix(editorNode) {
  /**
   * Dispatches `input` events in response to `textinput` events.
   *
   * IE provides a `textinput` event that is similar to an `input` event,
   * and we use it to manually dispatch an `input` event.
   * `textinput` is dispatched for text entry but for not deletions.
   *
   * @param {Event} textInputEvent An Internet Explorer `textinput` event.
   */
  function mapTextInputEvent(textInputEvent) {
    textInputEvent.stopImmediatePropagation();
    var inputEvent = document.createEvent('Event');
    inputEvent.initEvent('input', true, false);
    inputEvent.data = textInputEvent.data;
    textInputEvent.target.dispatchEvent(inputEvent);
  }
  /**
   * Dispatches `input` events in response to Delete and Backspace keyup.
   *
   * It would be better dispatch an `input` event after each deleting
   * `keydown` because the DOM is updated after each, but it is challenging
   * to determine the right time to dispatch `input` since propagation of
   * `keydown` can be stopped at any point.
   *
   * It's easier to listen for `keyup` in the capture phase and dispatch
   * `input` before `keyup` propagates further. It's not perfect, but should
   * be good enough.
   *
   * @param {KeyboardEvent} keyUp
   * @param {Node}          keyUp.target  The event target.
   * @param {number}        keyUp.keyCode The key code.
   */


  function mapDeletionKeyUpEvents(_ref) {
    var target = _ref.target,
        keyCode = _ref.keyCode;
    var isDeletion = external_this_wp_keycodes_["BACKSPACE"] === keyCode || external_this_wp_keycodes_["DELETE"] === keyCode;

    if (isDeletion && editorNode.contains(target)) {
      var inputEvent = document.createEvent('Event');
      inputEvent.initEvent('input', true, false);
      inputEvent.data = null;
      target.dispatchEvent(inputEvent);
    }
  }

  editorNode.addEventListener('textinput', mapTextInputEvent);
  document.addEventListener('keyup', mapDeletionKeyUpEvents, true);
  return function removeInternetExplorerInputFix() {
    editorNode.removeEventListener('textinput', mapTextInputEvent);
    document.removeEventListener('keyup', mapDeletionKeyUpEvents, true);
  };
}

var IS_PLACEHOLDER_VISIBLE_ATTR_NAME = 'data-is-placeholder-visible';
var oldClassName = 'editor-rich-text__editable';
var editable_className = 'block-editor-rich-text__editable';
/**
 * Whether or not the user agent is Internet Explorer.
 *
 * @type {boolean}
 */

var IS_IE = userAgent.indexOf('Trident') >= 0;

var editable_Editable =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Editable, _Component);

  function Editable() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Editable);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Editable).call(this));
    _this.bindEditorNode = _this.bindEditorNode.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  } // We must prevent rerenders because the browser will modify the DOM. React
  // will rerender the DOM fine, but we're losing selection and it would be
  // more expensive to do so as it would just set the inner HTML through
  // `dangerouslySetInnerHTML`. Instead RichText does it's own diffing and
  // selection setting.
  //
  // Because we never update the component, we have to look through props and
  // update the attributes on the wrapper nodes here. `componentDidUpdate`
  // will never be called.


  Object(createClass["a" /* default */])(Editable, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      this.configureIsPlaceholderVisible(nextProps.isPlaceholderVisible);

      if (!Object(external_lodash_["isEqual"])(this.props.style, nextProps.style)) {
        this.editorNode.setAttribute('style', '');
        Object.assign(this.editorNode.style, nextProps.style);
      }

      if (!Object(external_lodash_["isEqual"])(this.props.className, nextProps.className)) {
        this.editorNode.className = classnames_default()(editable_className, oldClassName, nextProps.className);
      }

      var _diffAriaProps = aria_diffAriaProps(this.props, nextProps),
          removedKeys = _diffAriaProps.removedKeys,
          updatedKeys = _diffAriaProps.updatedKeys;

      removedKeys.forEach(function (key) {
        return _this2.editorNode.removeAttribute(key);
      });
      updatedKeys.forEach(function (key) {
        return _this2.editorNode.setAttribute(key, nextProps[key]);
      });
      return false;
    }
  }, {
    key: "configureIsPlaceholderVisible",
    value: function configureIsPlaceholderVisible(isPlaceholderVisible) {
      var isPlaceholderVisibleString = String(!!isPlaceholderVisible);

      if (this.editorNode.getAttribute(IS_PLACEHOLDER_VISIBLE_ATTR_NAME) !== isPlaceholderVisibleString) {
        this.editorNode.setAttribute(IS_PLACEHOLDER_VISIBLE_ATTR_NAME, isPlaceholderVisibleString);
      }
    }
  }, {
    key: "bindEditorNode",
    value: function bindEditorNode(editorNode) {
      this.editorNode = editorNode;
      this.props.setRef(editorNode);

      if (IS_IE) {
        if (editorNode) {
          // Mounting:
          this.removeInternetExplorerInputFix = applyInternetExplorerInputFix(editorNode);
        } else {
          // Unmounting:
          this.removeInternetExplorerInputFix();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _objectSpread2;

      var _this$props = this.props,
          _this$props$tagName = _this$props.tagName,
          tagName = _this$props$tagName === void 0 ? 'div' : _this$props$tagName,
          style = _this$props.style,
          record = _this$props.record,
          valueToEditableHTML = _this$props.valueToEditableHTML,
          additionalClassName = _this$props.className,
          isPlaceholderVisible = _this$props.isPlaceholderVisible,
          remainingProps = Object(objectWithoutProperties["a" /* default */])(_this$props, ["tagName", "style", "record", "valueToEditableHTML", "className", "isPlaceholderVisible"]);

      delete remainingProps.setRef;
      return Object(external_this_wp_element_["createElement"])(tagName, Object(objectSpread["a" /* default */])((_objectSpread2 = {
        role: 'textbox',
        'aria-multiline': true,
        className: classnames_default()(editable_className, oldClassName, additionalClassName),
        contentEditable: true
      }, Object(defineProperty["a" /* default */])(_objectSpread2, IS_PLACEHOLDER_VISIBLE_ATTR_NAME, isPlaceholderVisible), Object(defineProperty["a" /* default */])(_objectSpread2, "ref", this.bindEditorNode), Object(defineProperty["a" /* default */])(_objectSpread2, "style", style), Object(defineProperty["a" /* default */])(_objectSpread2, "suppressContentEditableWarning", true), Object(defineProperty["a" /* default */])(_objectSpread2, "dangerouslySetInnerHTML", {
        __html: valueToEditableHTML(record)
      }), _objectSpread2), remainingProps));
    }
  }]);

  return Editable;
}(external_this_wp_element_["Component"]);



// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/rich-text/patterns.js
/**
 * WordPress dependencies
 */


function getPatterns(_ref) {
  var onReplace = _ref.onReplace,
      valueToFormat = _ref.valueToFormat;
  var prefixTransforms = Object(external_this_wp_blocks_["getBlockTransforms"])('from').filter(function (_ref2) {
    var type = _ref2.type;
    return type === 'prefix';
  });
  return [function (record) {
    if (!onReplace) {
      return record;
    }

    var start = Object(external_this_wp_richText_["getSelectionStart"])(record);
    var text = Object(external_this_wp_richText_["getTextContent"])(record);
    var characterBefore = text.slice(start - 1, start);

    if (!/\s/.test(characterBefore)) {
      return record;
    }

    var trimmedTextBefore = text.slice(0, start).trim();
    var transformation = Object(external_this_wp_blocks_["findTransform"])(prefixTransforms, function (_ref3) {
      var prefix = _ref3.prefix;
      return trimmedTextBefore === prefix;
    });

    if (!transformation) {
      return record;
    }

    var content = valueToFormat(Object(external_this_wp_richText_["slice"])(record, start, text.length));
    var block = transformation.transform(content);
    onReplace([block]);
    return record;
  }, function (record) {
    var BACKTICK = '`';
    var start = Object(external_this_wp_richText_["getSelectionStart"])(record);
    var text = Object(external_this_wp_richText_["getTextContent"])(record);
    var characterBefore = text.slice(start - 1, start); // Quick check the text for the necessary character.

    if (characterBefore !== BACKTICK) {
      return record;
    }

    var textBefore = text.slice(0, start - 1);
    var indexBefore = textBefore.lastIndexOf(BACKTICK);

    if (indexBefore === -1) {
      return record;
    }

    var startIndex = indexBefore;
    var endIndex = start - 2;

    if (startIndex === endIndex) {
      return record;
    }

    record = Object(external_this_wp_richText_["remove"])(record, startIndex, startIndex + 1);
    record = Object(external_this_wp_richText_["remove"])(record, endIndex, endIndex + 1);
    record = Object(external_this_wp_richText_["applyFormat"])(record, {
      type: 'code'
    }, startIndex, endIndex);
    return record;
  }];
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/rich-text/shortcut.js









/**
 * WordPress dependencies
 */



var shortcut_RichTextShortcut =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(RichTextShortcut, _Component);

  function RichTextShortcut() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, RichTextShortcut);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(RichTextShortcut).apply(this, arguments));
    _this.onUse = _this.onUse.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(RichTextShortcut, [{
    key: "onUse",
    value: function onUse() {
      this.props.onUse();
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          character = _this$props.character,
          type = _this$props.type;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["KeyboardShortcuts"], {
        bindGlobal: true,
        shortcuts: Object(defineProperty["a" /* default */])({}, external_this_wp_keycodes_["rawShortcut"][type](character), this.onUse)
      });
    }
  }]);

  return RichTextShortcut;
}(external_this_wp_element_["Component"]);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/rich-text/list-edit.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var _window$Node = window.Node,
    TEXT_NODE = _window$Node.TEXT_NODE,
    ELEMENT_NODE = _window$Node.ELEMENT_NODE;
/**
 * Gets the selected list node, which is the closest list node to the start of
 * the selection.
 *
 * @return {?Element} The selected list node, or undefined if none is selected.
 */

function getSelectedListNode() {
  var selection = window.getSelection();

  if (selection.rangeCount === 0) {
    return;
  }

  var _selection$getRangeAt = selection.getRangeAt(0),
      startContainer = _selection$getRangeAt.startContainer;

  if (startContainer.nodeType === TEXT_NODE) {
    startContainer = startContainer.parentNode;
  }

  if (startContainer.nodeType !== ELEMENT_NODE) {
    return;
  }

  var rootNode = startContainer.closest('*[contenteditable]');

  if (!rootNode || !rootNode.contains(startContainer)) {
    return;
  }

  return startContainer.closest('ol,ul');
}
/**
 * Whether or not the root list is selected.
 *
 * @return {boolean} True if the root list or nothing is selected, false if an
 *                   inner list is selected.
 */


function isListRootSelected() {
  var listNode = getSelectedListNode(); // Consider the root list selected if nothing is selected.

  return !listNode || listNode.contentEditable === 'true';
}
/**
 * Wether or not the selected list has the given tag name.
 *
 * @param {string}  tagName     The tag name the list should have.
 * @param {string}  rootTagName The current root tag name, to compare with in
 *                              case nothing is selected.
 *
 * @return {boolean}             [description]
 */


function isActiveListType(tagName, rootTagName) {
  var listNode = getSelectedListNode();

  if (!listNode) {
    return tagName === rootTagName;
  }

  return listNode.nodeName.toLowerCase() === tagName;
}

var list_edit_ListEdit = function ListEdit(_ref) {
  var onTagNameChange = _ref.onTagNameChange,
      tagName = _ref.tagName,
      value = _ref.value,
      onChange = _ref.onChange;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(shortcut_RichTextShortcut, {
    type: "primary",
    character: "[",
    onUse: function onUse() {
      onChange(Object(external_this_wp_richText_["outdentListItems"])(value));
    }
  }), Object(external_this_wp_element_["createElement"])(shortcut_RichTextShortcut, {
    type: "primary",
    character: "]",
    onUse: function onUse() {
      onChange(Object(external_this_wp_richText_["indentListItems"])(value, {
        type: tagName
      }));
    }
  }), Object(external_this_wp_element_["createElement"])(shortcut_RichTextShortcut, {
    type: "primary",
    character: "m",
    onUse: function onUse() {
      onChange(Object(external_this_wp_richText_["indentListItems"])(value, {
        type: tagName
      }));
    }
  }), Object(external_this_wp_element_["createElement"])(shortcut_RichTextShortcut, {
    type: "primaryShift",
    character: "m",
    onUse: function onUse() {
      onChange(Object(external_this_wp_richText_["outdentListItems"])(value));
    }
  }), Object(external_this_wp_element_["createElement"])(block_format_controls, null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Toolbar"], {
    controls: [onTagNameChange && {
      icon: 'editor-ul',
      title: Object(external_this_wp_i18n_["__"])('Convert to unordered list'),
      isActive: isActiveListType('ul', tagName),
      onClick: function onClick() {
        onChange(Object(external_this_wp_richText_["changeListType"])(value, {
          type: 'ul'
        }));

        if (isListRootSelected()) {
          onTagNameChange('ul');
        }
      }
    }, onTagNameChange && {
      icon: 'editor-ol',
      title: Object(external_this_wp_i18n_["__"])('Convert to ordered list'),
      isActive: isActiveListType('ol', tagName),
      onClick: function onClick() {
        onChange(Object(external_this_wp_richText_["changeListType"])(value, {
          type: 'ol'
        }));

        if (isListRootSelected()) {
          onTagNameChange('ol');
        }
      }
    }, {
      icon: 'editor-outdent',
      title: Object(external_this_wp_i18n_["__"])('Outdent list item'),
      shortcut: Object(external_this_wp_i18n_["_x"])('Backspace', 'keyboard key'),
      onClick: function onClick() {
        onChange(Object(external_this_wp_richText_["outdentListItems"])(value));
      }
    }, {
      icon: 'editor-indent',
      title: Object(external_this_wp_i18n_["__"])('Indent list item'),
      shortcut: Object(external_this_wp_i18n_["_x"])('Space', 'keyboard key'),
      onClick: function onClick() {
        onChange(Object(external_this_wp_richText_["indentListItems"])(value, {
          type: tagName
        }));
      }
    }].filter(Boolean)
  })));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/rich-text/remove-browser-shortcuts.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Set of keyboard shortcuts handled internally by RichText.
 *
 * @type {Array}
 */

var HANDLED_SHORTCUTS = [external_this_wp_keycodes_["rawShortcut"].primary('z'), external_this_wp_keycodes_["rawShortcut"].primaryShift('z'), external_this_wp_keycodes_["rawShortcut"].primary('y')];
/**
 * An instance of a KeyboardShortcuts element pre-bound for the handled
 * shortcuts. Since shortcuts never change, the element can be considered
 * static, and can be skipped in reconciliation.
 *
 * @type {WPElement}
 */

var SHORTCUTS_ELEMENT = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["KeyboardShortcuts"], {
  bindGlobal: true,
  shortcuts: Object(external_lodash_["fromPairs"])(HANDLED_SHORTCUTS.map(function (shortcut) {
    return [shortcut, function (event) {
      return event.preventDefault();
    }];
  }))
});
/**
 * Component which registered keyboard event handlers to prevent default
 * behaviors for key combinations otherwise handled internally by RichText.
 *
 * @return {WPElement} WordPress element.
 */

var RemoveBrowserShortcuts = function RemoveBrowserShortcuts() {
  return SHORTCUTS_ELEMENT;
};

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/rich-text/toolbar-button.js




/**
 * WordPress dependencies
 */


function RichTextToolbarButton(_ref) {
  var name = _ref.name,
      shortcutType = _ref.shortcutType,
      shortcutCharacter = _ref.shortcutCharacter,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["name", "shortcutType", "shortcutCharacter"]);

  var shortcut;
  var fillName = 'RichText.ToolbarControls';

  if (name) {
    fillName += ".".concat(name);
  }

  if (shortcutType && shortcutCharacter) {
    shortcut = external_this_wp_keycodes_["displayShortcut"][shortcutType](shortcutCharacter);
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Fill"], {
    name: fillName
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarButton"], Object(esm_extends["a" /* default */])({}, props, {
    shortcut: shortcut
  })));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/rich-text/input-event.js







/**
 * WordPress dependencies
 */

var input_event_UnstableRichTextInputEvent =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(UnstableRichTextInputEvent, _Component);

  function UnstableRichTextInputEvent() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UnstableRichTextInputEvent);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UnstableRichTextInputEvent).apply(this, arguments));
    _this.onInput = _this.onInput.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(UnstableRichTextInputEvent, [{
    key: "onInput",
    value: function onInput(event) {
      if (event.inputType === this.props.inputType) {
        this.props.onInput();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('input', this.onInput, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('input', this.onInput, true);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return UnstableRichTextInputEvent;
}(external_this_wp_element_["Component"]);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/rich-text/index.js













/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */













/**
 * Internal dependencies
 */











/**
 * Browser dependencies
 */

var rich_text_window = window,
    rich_text_getSelection = rich_text_window.getSelection,
    getComputedStyle = rich_text_window.getComputedStyle;
/**
 * All inserting input types that would insert HTML into the DOM.
 *
 * @see  https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes
 *
 * @type {Set}
 */

var INSERTION_INPUT_TYPES_TO_IGNORE = new Set(['insertParagraph', 'insertOrderedList', 'insertUnorderedList', 'insertHorizontalRule', 'insertLink']);
/**
 * Global stylesheet.
 */

var globalStyle = document.createElement('style');
document.head.appendChild(globalStyle);
var rich_text_RichText =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(RichText, _Component);

  function RichText(_ref) {
    var _this;

    var value = _ref.value,
        onReplace = _ref.onReplace,
        multiline = _ref.multiline;

    Object(classCallCheck["a" /* default */])(this, RichText);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(RichText).apply(this, arguments));

    if (multiline === true || multiline === 'p' || multiline === 'li') {
      _this.multilineTag = multiline === true ? 'p' : multiline;
    }

    if (_this.multilineTag === 'li') {
      _this.multilineWrapperTags = ['ul', 'ol'];
    }

    if (_this.props.onSplit) {
      _this.onSplit = _this.props.onSplit;
      external_this_wp_deprecated_default()('wp.editor.RichText onSplit prop', {
        plugin: 'Gutenberg',
        alternative: 'wp.editor.RichText unstableOnSplit prop'
      });
    } else if (_this.props.unstableOnSplit) {
      _this.onSplit = _this.props.unstableOnSplit;
    }

    _this.onFocus = _this.onFocus.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onBlur = _this.onBlur.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onChange = _this.onChange.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onDeleteKeyDown = _this.onDeleteKeyDown.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onKeyDown = _this.onKeyDown.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onPaste = _this.onPaste.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onCreateUndoLevel = _this.onCreateUndoLevel.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.setFocusedElement = _this.setFocusedElement.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onInput = _this.onInput.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onCompositionEnd = _this.onCompositionEnd.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onSelectionChange = _this.onSelectionChange.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.getRecord = _this.getRecord.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.createRecord = _this.createRecord.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.applyRecord = _this.applyRecord.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.isEmpty = _this.isEmpty.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.valueToFormat = _this.valueToFormat.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.setRef = _this.setRef.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.valueToEditableHTML = _this.valueToEditableHTML.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.handleHorizontalNavigation = _this.handleHorizontalNavigation.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onPointerDown = _this.onPointerDown.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.formatToValue = memize_default()(_this.formatToValue.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this))), {
      maxSize: 1
    });
    _this.savedContent = value;
    _this.patterns = getPatterns({
      onReplace: onReplace,
      valueToFormat: _this.valueToFormat
    });
    _this.enterPatterns = Object(external_this_wp_blocks_["getBlockTransforms"])('from').filter(function (_ref2) {
      var type = _ref2.type;
      return type === 'enter';
    });
    _this.state = {};
    _this.usedDeprecatedChildrenSource = Array.isArray(value);
    _this.lastHistoryValue = value;
    return _this;
  }

  Object(createClass["a" /* default */])(RichText, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('selectionchange', this.onSelectionChange);
    }
  }, {
    key: "setRef",
    value: function setRef(node) {
      if (node) {
        if (false) { var computedStyle; }

        this.editableRef = node;
      } else {
        delete this.editableRef;
      }
    }
  }, {
    key: "setFocusedElement",
    value: function setFocusedElement() {
      if (this.props.setFocusedElement) {
        this.props.setFocusedElement(this.props.instanceId);
      }
    }
    /**
     * Get the current record (value and selection) from props and state.
     *
     * @return {Object} The current record (value and selection).
     */

  }, {
    key: "getRecord",
    value: function getRecord() {
      var _this$formatToValue = this.formatToValue(this.props.value),
          formats = _this$formatToValue.formats,
          replacements = _this$formatToValue.replacements,
          text = _this$formatToValue.text;

      var _this$state = this.state,
          start = _this$state.start,
          end = _this$state.end,
          activeFormats = _this$state.activeFormats;
      return {
        formats: formats,
        replacements: replacements,
        text: text,
        start: start,
        end: end,
        activeFormats: activeFormats
      };
    }
  }, {
    key: "createRecord",
    value: function createRecord() {
      var selection = rich_text_getSelection();
      var range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
      return Object(external_this_wp_richText_["create"])({
        element: this.editableRef,
        range: range,
        multilineTag: this.multilineTag,
        multilineWrapperTags: this.multilineWrapperTags,
        __unstableIsEditableTree: true
      });
    }
  }, {
    key: "applyRecord",
    value: function applyRecord(record) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          domOnly = _ref3.domOnly;

      Object(external_this_wp_richText_["apply"])({
        value: record,
        current: this.editableRef,
        multilineTag: this.multilineTag,
        multilineWrapperTags: this.multilineWrapperTags,
        prepareEditableTree: this.props.prepareEditableTree,
        __unstableDomOnly: domOnly
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return Object(external_this_wp_richText_["isEmpty"])(this.formatToValue(this.props.value));
    }
    /**
     * Handles a paste event.
     *
     * Saves the pasted data as plain text in `pastedPlainText`.
     *
     * @param {PasteEvent} event The paste event.
     */

  }, {
    key: "onPaste",
    value: function onPaste(event) {
      var clipboardData = event.clipboardData;
      var items = clipboardData.items,
          files = clipboardData.files; // In Edge these properties can be null instead of undefined, so a more
      // rigorous test is required over using default values.

      items = Object(external_lodash_["isNil"])(items) ? [] : items;
      files = Object(external_lodash_["isNil"])(files) ? [] : files;
      var plainText = '';
      var html = ''; // IE11 only supports `Text` as an argument for `getData` and will
      // otherwise throw an invalid argument error, so we try the standard
      // arguments first, then fallback to `Text` if they fail.

      try {
        plainText = clipboardData.getData('text/plain');
        html = clipboardData.getData('text/html');
      } catch (error1) {
        try {
          html = clipboardData.getData('Text');
        } catch (error2) {
          // Some browsers like UC Browser paste plain text by default and
          // don't support clipboardData at all, so allow default
          // behaviour.
          return;
        }
      }

      event.preventDefault(); // Allows us to ask for this information when we get a report.

      window.console.log('Received HTML:\n\n', html);
      window.console.log('Received plain text:\n\n', plainText); // Only process file if no HTML is present.
      // Note: a pasted file may have the URL as plain text.

      var item = Object(external_lodash_["find"])([].concat(Object(toConsumableArray["a" /* default */])(items), Object(toConsumableArray["a" /* default */])(files)), function (_ref4) {
        var type = _ref4.type;
        return /^image\/(?:jpe?g|png|gif)$/.test(type);
      });

      if (item && !html) {
        var file = item.getAsFile ? item.getAsFile() : item;

        var _content = Object(external_this_wp_blocks_["pasteHandler"])({
          HTML: "<img src=\"".concat(Object(external_this_wp_blob_["createBlobURL"])(file), "\">"),
          mode: 'BLOCKS',
          tagName: this.props.tagName
        });

        var _shouldReplace = this.props.onReplace && this.isEmpty(); // Allows us to ask for this information when we get a report.


        window.console.log('Received item:\n\n', file);

        if (_shouldReplace) {
          this.props.onReplace(_content);
        } else if (this.onSplit) {
          this.splitContent(_content);
        }

        return;
      }

      var record = this.getRecord(); // There is a selection, check if a URL is pasted.

      if (!Object(external_this_wp_richText_["isCollapsed"])(record)) {
        var pastedText = (html || plainText).replace(/<[^>]+>/g, '').trim(); // A URL was pasted, turn the selection into a link

        if (Object(external_this_wp_url_["isURL"])(pastedText)) {
          this.onChange(Object(external_this_wp_richText_["applyFormat"])(record, {
            type: 'a',
            attributes: {
              href: Object(external_this_wp_htmlEntities_["decodeEntities"])(pastedText)
            }
          })); // Allows us to ask for this information when we get a report.

          window.console.log('Created link:\n\n', pastedText);
          return;
        }
      }

      var shouldReplace = this.props.onReplace && this.isEmpty();
      var mode = 'INLINE';

      if (shouldReplace) {
        mode = 'BLOCKS';
      } else if (this.onSplit) {
        mode = 'AUTO';
      }

      var content = Object(external_this_wp_blocks_["pasteHandler"])({
        HTML: html,
        plainText: plainText,
        mode: mode,
        tagName: this.props.tagName,
        canUserUseUnfilteredHTML: this.props.canUserUseUnfilteredHTML
      });

      if (typeof content === 'string') {
        var recordToInsert = Object(external_this_wp_richText_["create"])({
          html: content
        });
        this.onChange(Object(external_this_wp_richText_["insert"])(record, recordToInsert));
      } else if (this.onSplit) {
        if (!content.length) {
          return;
        }

        if (shouldReplace) {
          this.props.onReplace(content);
        } else {
          this.splitContent(content, {
            paste: true
          });
        }
      }
    }
    /**
     * Handles a focus event on the contenteditable field, calling the
     * `unstableOnFocus` prop callback if one is defined. The callback does not
     * receive any arguments.
     *
     * This is marked as a private API and the `unstableOnFocus` prop is not
     * documented, as the current requirements where it is used are subject to
     * future refactoring following `isSelected` handling.
     *
     * In contrast with `setFocusedElement`, this is only triggered in response
     * to focus within the contenteditable field, whereas `setFocusedElement`
     * is triggered on focus within any `RichText` descendent element.
     *
     * @see setFocusedElement
     *
     * @private
     */

  }, {
    key: "onFocus",
    value: function onFocus() {
      var unstableOnFocus = this.props.unstableOnFocus;

      if (unstableOnFocus) {
        unstableOnFocus();
      }

      this.recalculateBoundaryStyle();
      document.addEventListener('selectionchange', this.onSelectionChange);
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      document.removeEventListener('selectionchange', this.onSelectionChange);
    }
    /**
     * Handle input on the next selection change event.
     *
     * @param {SyntheticEvent} event Synthetic input event.
     */

  }, {
    key: "onInput",
    value: function onInput(event) {
      // For Input Method Editor (IME), used in Chinese, Japanese, and Korean
      // (CJK), do not trigger a change if characters are being composed.
      // Browsers setting `isComposing` to `true` will usually emit a final
      // `input` event when the characters are composed.
      if (event && event.nativeEvent.isComposing) {
        // Also don't update any selection.
        document.removeEventListener('selectionchange', this.onSelectionChange);
        return;
      }

      if (event && event.nativeEvent.inputType) {
        var inputType = event.nativeEvent.inputType; // The browser formatted something or tried to insert HTML.
        // Overwrite it. It will be handled later by the format library if
        // needed.

        if (inputType.indexOf('format') === 0 || INSERTION_INPUT_TYPES_TO_IGNORE.has(inputType)) {
          this.applyRecord(this.getRecord());
          return;
        }
      }

      var value = this.createRecord();
      var _this$state2 = this.state,
          _this$state2$activeFo = _this$state2.activeFormats,
          activeFormats = _this$state2$activeFo === void 0 ? [] : _this$state2$activeFo,
          start = _this$state2.start; // Update the formats between the last and new caret position.

      var change = Object(external_this_wp_richText_["__unstableUpdateFormats"])({
        value: value,
        start: start,
        end: value.start,
        formats: activeFormats
      });

      this.onChange(change, {
        withoutHistory: true
      });
      var transformed = this.patterns.reduce(function (accumlator, transform) {
        return transform(accumlator);
      }, change);

      if (transformed !== change) {
        this.onCreateUndoLevel();
        this.onChange(Object(objectSpread["a" /* default */])({}, transformed, {
          activeFormats: activeFormats
        }));
      } // Create an undo level when input stops for over a second.


      this.props.clearTimeout(this.onInput.timeout);
      this.onInput.timeout = this.props.setTimeout(this.onCreateUndoLevel, 1000);
    }
  }, {
    key: "onCompositionEnd",
    value: function onCompositionEnd() {
      // Ensure the value is up-to-date for browsers that don't emit a final
      // input event after composition.
      this.onInput(); // Tracking selection changes can be resumed.

      document.addEventListener('selectionchange', this.onSelectionChange);
    }
    /**
     * Handles the `selectionchange` event: sync the selection to local state.
     */

  }, {
    key: "onSelectionChange",
    value: function onSelectionChange() {
      var value = this.createRecord();
      var start = value.start,
          end = value.end;

      if (start !== this.state.start || end !== this.state.end) {
        var isCaretWithinFormattedText = this.props.isCaretWithinFormattedText;

        var activeFormats = Object(external_this_wp_richText_["__unstableGetActiveFormats"])(value);

        if (!isCaretWithinFormattedText && activeFormats.length) {
          this.props.onEnterFormattedText();
        } else if (isCaretWithinFormattedText && !activeFormats.length) {
          this.props.onExitFormattedText();
        }

        this.setState({
          start: start,
          end: end,
          activeFormats: activeFormats
        });
        this.applyRecord(Object(objectSpread["a" /* default */])({}, value, {
          activeFormats: activeFormats
        }), {
          domOnly: true
        });

        if (activeFormats.length > 0) {
          this.recalculateBoundaryStyle();
        }
      }
    }
  }, {
    key: "recalculateBoundaryStyle",
    value: function recalculateBoundaryStyle() {
      var boundarySelector = '*[data-rich-text-format-boundary]';
      var element = this.editableRef.querySelector(boundarySelector);

      if (!element) {
        return;
      }

      var computedStyle = getComputedStyle(element);
      var newColor = computedStyle.color.replace(')', ', 0.2)').replace('rgb', 'rgba');
      var selector = ".".concat(editable_className, ":focus ").concat(boundarySelector);
      var rule = "background-color: ".concat(newColor);
      globalStyle.innerHTML = "".concat(selector, " {").concat(rule, "}");
    }
    /**
     * Calls all registered onChangeEditableValue handlers.
     *
     * @param {Array}  formats The formats of the latest rich-text value.
     * @param {string} text    The text of the latest rich-text value.
     */

  }, {
    key: "onChangeEditableValue",
    value: function onChangeEditableValue(_ref5) {
      var formats = _ref5.formats,
          text = _ref5.text;
      Object(external_lodash_["get"])(this.props, ['onChangeEditableValue'], []).forEach(function (eventHandler) {
        eventHandler(formats, text);
      });
    }
    /**
     * Sync the value to global state. The node tree and selection will also be
     * updated if differences are found.
     *
     * @param {Object}  record            The record to sync and apply.
     * @param {Object}  $2                Named options.
     * @param {boolean} $2.withoutHistory If true, no undo level will be
     *                                    created.
     */

  }, {
    key: "onChange",
    value: function onChange(record) {
      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          withoutHistory = _ref6.withoutHistory;

      this.applyRecord(record);
      var start = record.start,
          end = record.end,
          _record$activeFormats = record.activeFormats,
          activeFormats = _record$activeFormats === void 0 ? [] : _record$activeFormats;
      this.onChangeEditableValue(record);
      this.savedContent = this.valueToFormat(record);
      this.props.onChange(this.savedContent);
      this.setState({
        start: start,
        end: end,
        activeFormats: activeFormats
      });

      if (!withoutHistory) {
        this.onCreateUndoLevel();
      }
    }
  }, {
    key: "onCreateUndoLevel",
    value: function onCreateUndoLevel() {
      // If the content is the same, no level needs to be created.
      if (this.lastHistoryValue === this.savedContent) {
        return;
      }

      this.props.onCreateUndoLevel();
      this.lastHistoryValue = this.savedContent;
    }
    /**
     * Handles a delete keyDown event to handle merge or removal for collapsed
     * selection where caret is at directional edge: forward for a delete key,
     * reverse for a backspace key.
     *
     * @link https://en.wikipedia.org/wiki/Caret_navigation
     *
     * @param {KeyboardEvent} event Keydown event.
     */

  }, {
    key: "onDeleteKeyDown",
    value: function onDeleteKeyDown(event) {
      var _this$props = this.props,
          onMerge = _this$props.onMerge,
          onRemove = _this$props.onRemove;

      if (!onMerge && !onRemove) {
        return;
      }

      var keyCode = event.keyCode;
      var isReverse = keyCode === external_this_wp_keycodes_["BACKSPACE"]; // Only process delete if the key press occurs at uncollapsed edge.

      if (!Object(external_this_wp_richText_["isCollapsed"])(this.createRecord())) {
        return;
      }

      var empty = this.isEmpty(); // It is important to consider emptiness because an empty container
      // will include a padding BR node _after_ the caret, so in a forward
      // deletion the isHorizontalEdge function will incorrectly interpret the
      // presence of the BR node as not being at the edge.

      var isEdge = empty || Object(external_this_wp_dom_["isHorizontalEdge"])(this.editableRef, isReverse);

      if (!isEdge) {
        return;
      }

      if (onMerge) {
        onMerge(!isReverse);
      } // Only handle remove on Backspace. This serves dual-purpose of being
      // an intentional user interaction distinguishing between Backspace and
      // Delete to remove the empty field, but also to avoid merge & remove
      // causing destruction of two fields (merge, then removed merged).


      if (onRemove && empty && isReverse) {
        onRemove(!isReverse);
      }

      event.preventDefault();
    }
    /**
     * Handles a keydown event.
     *
     * @param {SyntheticEvent} event A synthetic keyboard event.
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var keyCode = event.keyCode,
          shiftKey = event.shiftKey,
          altKey = event.altKey,
          metaKey = event.metaKey,
          ctrlKey = event.ctrlKey;

      if ( // Only override left and right keys without modifiers pressed.
      !shiftKey && !altKey && !metaKey && !ctrlKey && (keyCode === external_this_wp_keycodes_["LEFT"] || keyCode === external_this_wp_keycodes_["RIGHT"])) {
        this.handleHorizontalNavigation(event);
      } // Use the space key in list items (at the start of an item) to indent
      // the list item.


      if (keyCode === external_this_wp_keycodes_["SPACE"] && this.multilineTag === 'li') {
        var value = this.createRecord();

        if (Object(external_this_wp_richText_["isCollapsed"])(value)) {
          var text = value.text,
              start = value.start;
          var characterBefore = text[start - 1]; // The caret must be at the start of a line.

          if (!characterBefore || characterBefore === external_this_wp_richText_["LINE_SEPARATOR"]) {
            this.onChange(Object(external_this_wp_richText_["indentListItems"])(value, {
              type: this.props.tagName
            }));
            event.preventDefault();
          }
        }
      }

      if (keyCode === external_this_wp_keycodes_["DELETE"] || keyCode === external_this_wp_keycodes_["BACKSPACE"]) {
        var _value = this.createRecord();

        var replacements = _value.replacements,
            _text = _value.text,
            _start = _value.start,
            end = _value.end; // Always handle full content deletion ourselves.

        if (_start === 0 && end !== 0 && end === _value.text.length) {
          this.onChange(Object(external_this_wp_richText_["remove"])(_value));
          event.preventDefault();
          return;
        }

        if (this.multilineTag) {
          var newValue;

          if (keyCode === external_this_wp_keycodes_["BACKSPACE"]) {
            var index = _start - 1;

            if (_text[index] === external_this_wp_richText_["LINE_SEPARATOR"]) {
              var collapsed = Object(external_this_wp_richText_["isCollapsed"])(_value); // If the line separator that is about te be removed
              // contains wrappers, remove the wrappers first.

              if (collapsed && replacements[index] && replacements[index].length) {
                var newReplacements = replacements.slice();
                newReplacements[index] = replacements[index].slice(0, -1);
                newValue = Object(objectSpread["a" /* default */])({}, _value, {
                  replacements: newReplacements
                });
              } else {
                newValue = Object(external_this_wp_richText_["remove"])(_value, // Only remove the line if the selection is
                // collapsed, otherwise remove the selection.
                collapsed ? _start - 1 : _start, end);
              }
            }
          } else if (_text[end] === external_this_wp_richText_["LINE_SEPARATOR"]) {
            var _collapsed = Object(external_this_wp_richText_["isCollapsed"])(_value); // If the line separator that is about te be removed
            // contains wrappers, remove the wrappers first.


            if (_collapsed && replacements[end] && replacements[end].length) {
              var _newReplacements = replacements.slice();

              _newReplacements[end] = replacements[end].slice(0, -1);
              newValue = Object(objectSpread["a" /* default */])({}, _value, {
                replacements: _newReplacements
              });
            } else {
              newValue = Object(external_this_wp_richText_["remove"])(_value, _start, // Only remove the line if the selection is
              // collapsed, otherwise remove the selection.
              _collapsed ? end + 1 : end);
            }
          }

          if (newValue) {
            this.onChange(newValue);
            event.preventDefault();
          }
        }

        this.onDeleteKeyDown(event);
      } else if (keyCode === external_this_wp_keycodes_["ENTER"]) {
        event.preventDefault();
        var record = this.createRecord();

        if (this.props.onReplace) {
          var _text2 = Object(external_this_wp_richText_["getTextContent"])(record);

          var transformation = Object(external_this_wp_blocks_["findTransform"])(this.enterPatterns, function (item) {
            return item.regExp.test(_text2);
          });

          if (transformation) {
            this.props.onReplace([transformation.transform({
              content: _text2
            })]);
            return;
          }
        }

        if (this.multilineTag) {
          if (event.shiftKey) {
            this.onChange(Object(external_this_wp_richText_["insertLineBreak"])(record));
          } else if (this.onSplit && Object(external_this_wp_richText_["isEmptyLine"])(record)) {
            this.onSplit.apply(this, Object(toConsumableArray["a" /* default */])(Object(external_this_wp_richText_["split"])(record).map(this.valueToFormat)));
          } else {
            this.onChange(Object(external_this_wp_richText_["insertLineSeparator"])(record));
          }
        } else if (event.shiftKey || !this.onSplit) {
          this.onChange(Object(external_this_wp_richText_["insertLineBreak"])(record));
        } else {
          this.splitContent();
        }
      }
    }
    /**
     * Handles horizontal keyboard navigation when no modifiers are pressed. The
     * navigation is handled separately to move correctly around format
     * boundaries.
     *
     * @param  {SyntheticEvent} event A synthetic keyboard event.
     */

  }, {
    key: "handleHorizontalNavigation",
    value: function handleHorizontalNavigation(event) {
      var _this2 = this;

      var value = this.createRecord();
      var formats = value.formats,
          text = value.text,
          start = value.start,
          end = value.end;
      var _this$state$activeFor = this.state.activeFormats,
          activeFormats = _this$state$activeFor === void 0 ? [] : _this$state$activeFor;
      var collapsed = Object(external_this_wp_richText_["isCollapsed"])(value); // To do: ideally, we should look at visual position instead.

      var _getComputedStyle = getComputedStyle(this.editableRef),
          direction = _getComputedStyle.direction;

      var reverseKey = direction === 'rtl' ? external_this_wp_keycodes_["RIGHT"] : external_this_wp_keycodes_["LEFT"];
      var isReverse = event.keyCode === reverseKey; // If the selection is collapsed and at the very start, do nothing if
      // navigating backward.
      // If the selection is collapsed and at the very end, do nothing if
      // navigating forward.

      if (collapsed && activeFormats.length === 0) {
        if (start === 0 && isReverse) {
          return;
        }

        if (end === text.length && !isReverse) {
          return;
        }
      } // If the selection is not collapsed, let the browser handle collapsing
      // the selection for now. Later we could expand this logic to set
      // boundary positions if needed.


      if (!collapsed) {
        return;
      } // In all other cases, prevent default behaviour.


      event.preventDefault();
      var formatsBefore = formats[start - 1] || [];
      var formatsAfter = formats[start] || [];
      var newActiveFormatsLength = activeFormats.length;
      var source = formatsAfter;

      if (formatsBefore.length > formatsAfter.length) {
        source = formatsBefore;
      } // If the amount of formats before the caret and after the caret is
      // different, the caret is at a format boundary.


      if (formatsBefore.length < formatsAfter.length) {
        if (!isReverse && activeFormats.length < formatsAfter.length) {
          newActiveFormatsLength++;
        }

        if (isReverse && activeFormats.length > formatsBefore.length) {
          newActiveFormatsLength--;
        }
      } else if (formatsBefore.length > formatsAfter.length) {
        if (!isReverse && activeFormats.length > formatsAfter.length) {
          newActiveFormatsLength--;
        }

        if (isReverse && activeFormats.length < formatsBefore.length) {
          newActiveFormatsLength++;
        }
      } // Wait for boundary class to be added.


      setTimeout(function () {
        return _this2.recalculateBoundaryStyle();
      });

      if (newActiveFormatsLength !== activeFormats.length) {
        var newActiveFormats = source.slice(0, newActiveFormatsLength);
        this.applyRecord(Object(objectSpread["a" /* default */])({}, value, {
          activeFormats: newActiveFormats
        }));
        this.setState({
          activeFormats: newActiveFormats
        });
        return;
      }

      var newPos = value.start + (isReverse ? -1 : 1);
      this.setState({
        start: newPos,
        end: newPos
      });
      this.applyRecord(Object(objectSpread["a" /* default */])({}, value, {
        start: newPos,
        end: newPos,
        activeFormats: isReverse ? formatsBefore : formatsAfter
      }));
    }
    /**
     * Splits the content at the location of the selection.
     *
     * Replaces the content of the editor inside this element with the contents
     * before the selection. Sends the elements after the selection to the `onSplit`
     * handler.
     *
     * @param {Array}  blocks  The blocks to add after the split point.
     * @param {Object} context The context for splitting.
     */

  }, {
    key: "splitContent",
    value: function splitContent() {
      var blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.onSplit) {
        return;
      }

      var record = this.createRecord();

      var _split = Object(external_this_wp_richText_["split"])(record),
          _split2 = Object(slicedToArray["a" /* default */])(_split, 2),
          before = _split2[0],
          after = _split2[1]; // In case split occurs at the trailing or leading edge of the field,
      // assume that the before/after values respectively reflect the current
      // value. This also provides an opportunity for the parent component to
      // determine whether the before/after value has changed using a trivial
      //  strict equality operation.


      if (Object(external_this_wp_richText_["isEmpty"])(after)) {
        before = record;
      } else if (Object(external_this_wp_richText_["isEmpty"])(before)) {
        after = record;
      } // If pasting and the split would result in no content other than the
      // pasted blocks, remove the before and after blocks.


      if (context.paste) {
        before = Object(external_this_wp_richText_["isEmpty"])(before) ? null : before;
        after = Object(external_this_wp_richText_["isEmpty"])(after) ? null : after;
      }

      if (before) {
        before = this.valueToFormat(before);
      }

      if (after) {
        after = this.valueToFormat(after);
      }

      this.onSplit.apply(this, [before, after].concat(Object(toConsumableArray["a" /* default */])(blocks)));
    }
    /**
     * Select object when they are clicked. The browser will not set any
     * selection when clicking e.g. an image.
     *
     * @param  {SyntheticEvent} event Synthetic mousedown or touchstart event.
     */

  }, {
    key: "onPointerDown",
    value: function onPointerDown(event) {
      var target = event.target; // If the child element has no text content, it must be an object.

      if (target === this.editableRef || target.textContent) {
        return;
      }

      var parentNode = target.parentNode;
      var index = Array.from(parentNode.childNodes).indexOf(target);
      var range = target.ownerDocument.createRange();
      var selection = rich_text_getSelection();
      range.setStart(target.parentNode, index);
      range.setEnd(target.parentNode, index + 1);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      var _this$props2 = this.props,
          tagName = _this$props2.tagName,
          value = _this$props2.value,
          isSelected = _this$props2.isSelected;

      if (tagName === prevProps.tagName && value !== prevProps.value && value !== this.savedContent) {
        // Handle deprecated `children` and `node` sources.
        // The old way of passing a value with the `node` matcher required
        // the value to be mapped first, creating a new array each time, so
        // a shallow check wouldn't work. We need to check deep equality.
        // This is only executed for a deprecated API and will eventually be
        // removed.
        if (Array.isArray(value) && Object(external_lodash_["isEqual"])(value, this.savedContent)) {
          return;
        }

        var record = this.formatToValue(value);

        if (isSelected) {
          var prevRecord = this.formatToValue(prevProps.value);
          var length = Object(external_this_wp_richText_["getTextContent"])(prevRecord).length;
          record.start = length;
          record.end = length;
        }

        this.applyRecord(record);
        this.savedContent = value;
      } // If any format props update, reapply value.


      var shouldReapply = Object.keys(this.props).some(function (name) {
        if (name.indexOf('format_') !== 0) {
          return false;
        } // Allow primitives and arrays:


        if (!Object(external_lodash_["isPlainObject"])(_this3.props[name])) {
          return _this3.props[name] !== prevProps[name];
        }

        return Object.keys(_this3.props[name]).some(function (subName) {
          return _this3.props[name][subName] !== prevProps[name][subName];
        });
      });

      if (shouldReapply) {
        var _record = this.formatToValue(value); // Maintain the previous selection if the instance is currently
        // selected.


        if (isSelected) {
          _record.start = this.state.start;
          _record.end = this.state.end;
        }

        this.applyRecord(_record);
      }
    }
    /**
     * Get props that are provided by formats to modify RichText.
     *
     * @return {Object} Props that start with 'format_'.
     */

  }, {
    key: "getFormatProps",
    value: function getFormatProps() {
      return Object(external_lodash_["pickBy"])(this.props, function (propValue, name) {
        return name.startsWith('format_');
      });
    }
    /**
     * Converts the outside data structure to our internal representation.
     *
     * @param {*} value The outside value, data type depends on props.
     * @return {Object} An internal rich-text value.
     */

  }, {
    key: "formatToValue",
    value: function formatToValue(value) {
      // Handle deprecated `children` and `node` sources.
      if (Array.isArray(value)) {
        return Object(external_this_wp_richText_["create"])({
          html: external_this_wp_blocks_["children"].toHTML(value),
          multilineTag: this.multilineTag,
          multilineWrapperTags: this.multilineWrapperTags
        });
      }

      if (this.props.format === 'string') {
        return Object(external_this_wp_richText_["create"])({
          html: value,
          multilineTag: this.multilineTag,
          multilineWrapperTags: this.multilineWrapperTags
        });
      } // Guard for blocks passing `null` in onSplit callbacks. May be removed
      // if onSplit is revised to not pass a `null` value.


      if (value === null) {
        return Object(external_this_wp_richText_["create"])();
      }

      return value;
    }
  }, {
    key: "valueToEditableHTML",
    value: function valueToEditableHTML(value) {
      return Object(external_this_wp_richText_["unstableToDom"])({
        value: value,
        multilineTag: this.multilineTag,
        prepareEditableTree: this.props.prepareEditableTree
      }).body.innerHTML;
    }
    /**
     * Removes editor only formats from the value.
     *
     * Editor only formats are applied using `prepareEditableTree`, so we need to
     * remove them before converting the internal state
     *
     * @param {Object} value The internal rich-text value.
     * @return {Object} A new rich-text value.
     */

  }, {
    key: "removeEditorOnlyFormats",
    value: function removeEditorOnlyFormats(value) {
      this.props.formatTypes.forEach(function (formatType) {
        // Remove formats created by prepareEditableTree, because they are editor only.
        if (formatType.__experimentalCreatePrepareEditableTree) {
          value = Object(external_this_wp_richText_["removeFormat"])(value, formatType.name, 0, value.text.length);
        }
      });
      return value;
    }
    /**
     * Converts the internal value to the external data format.
     *
     * @param {Object} value The internal rich-text value.
     * @return {*} The external data format, data type depends on props.
     */

  }, {
    key: "valueToFormat",
    value: function valueToFormat(value) {
      value = this.removeEditorOnlyFormats(value); // Handle deprecated `children` and `node` sources.

      if (this.usedDeprecatedChildrenSource) {
        return external_this_wp_blocks_["children"].fromDOM(Object(external_this_wp_richText_["unstableToDom"])({
          value: value,
          multilineTag: this.multilineTag,
          isEditableTree: false
        }).body.childNodes);
      }

      if (this.props.format === 'string') {
        return Object(external_this_wp_richText_["toHTMLString"])({
          value: value,
          multilineTag: this.multilineTag
        });
      }

      return value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          _this$props3$tagName = _this$props3.tagName,
          Tagname = _this$props3$tagName === void 0 ? 'div' : _this$props3$tagName,
          style = _this$props3.style,
          wrapperClassName = _this$props3.wrapperClassName,
          className = _this$props3.className,
          _this$props3$inlineTo = _this$props3.inlineToolbar,
          inlineToolbar = _this$props3$inlineTo === void 0 ? false : _this$props3$inlineTo,
          formattingControls = _this$props3.formattingControls,
          placeholder = _this$props3.placeholder,
          _this$props3$keepPlac = _this$props3.keepPlaceholderOnFocus,
          keepPlaceholderOnFocus = _this$props3$keepPlac === void 0 ? false : _this$props3$keepPlac,
          isSelected = _this$props3.isSelected,
          autocompleters = _this$props3.autocompleters,
          onTagNameChange = _this$props3.onTagNameChange; // Generating a key that includes `tagName` ensures that if the tag
      // changes, we replace the relevant element. This is needed because we
      // prevent Editable component updates.

      var key = Tagname;
      var MultilineTag = this.multilineTag;
      var ariaProps = aria_pickAriaProps(this.props);
      var isPlaceholderVisible = placeholder && (!isSelected || keepPlaceholderOnFocus) && this.isEmpty();
      var classes = classnames_default()(wrapperClassName, 'editor-rich-text block-editor-rich-text');
      var record = this.getRecord();
      return Object(external_this_wp_element_["createElement"])("div", {
        className: classes,
        onFocus: this.setFocusedElement
      }, isSelected && this.multilineTag === 'li' && Object(external_this_wp_element_["createElement"])(list_edit_ListEdit, {
        onTagNameChange: onTagNameChange,
        tagName: Tagname,
        value: record,
        onChange: this.onChange
      }), isSelected && !inlineToolbar && Object(external_this_wp_element_["createElement"])(block_format_controls, null, Object(external_this_wp_element_["createElement"])(format_toolbar, {
        controls: formattingControls
      })), isSelected && inlineToolbar && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IsolatedEventContainer"], {
        className: "editor-rich-text__inline-toolbar block-editor-rich-text__inline-toolbar"
      }, Object(external_this_wp_element_["createElement"])(format_toolbar, {
        controls: formattingControls
      })), Object(external_this_wp_element_["createElement"])(autocomplete, {
        onReplace: this.props.onReplace,
        completers: autocompleters,
        record: record,
        onChange: this.onChange
      }, function (_ref7) {
        var listBoxId = _ref7.listBoxId,
            activeId = _ref7.activeId;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(editable_Editable, Object(esm_extends["a" /* default */])({
          tagName: Tagname,
          style: style,
          record: record,
          valueToEditableHTML: _this4.valueToEditableHTML,
          isPlaceholderVisible: isPlaceholderVisible,
          "aria-label": placeholder,
          "aria-autocomplete": "list",
          "aria-owns": listBoxId,
          "aria-activedescendant": activeId
        }, ariaProps, {
          className: className,
          key: key,
          onPaste: _this4.onPaste,
          onInput: _this4.onInput,
          onCompositionEnd: _this4.onCompositionEnd,
          onKeyDown: _this4.onKeyDown,
          onFocus: _this4.onFocus,
          onBlur: _this4.onBlur,
          onMouseDown: _this4.onPointerDown,
          onTouchStart: _this4.onPointerDown,
          setRef: _this4.setRef
        })), isPlaceholderVisible && Object(external_this_wp_element_["createElement"])(Tagname, {
          className: classnames_default()('editor-rich-text__editable block-editor-rich-text__editable', className),
          style: style
        }, MultilineTag ? Object(external_this_wp_element_["createElement"])(MultilineTag, null, placeholder) : placeholder), isSelected && Object(external_this_wp_element_["createElement"])(format_edit, {
          value: record,
          onChange: _this4.onChange
        }));
      }), isSelected && Object(external_this_wp_element_["createElement"])(RemoveBrowserShortcuts, null));
    }
  }]);

  return RichText;
}(external_this_wp_element_["Component"]);
rich_text_RichText.defaultProps = {
  formattingControls: ['bold', 'italic', 'link', 'strikethrough'],
  format: 'string',
  value: ''
};
var RichTextContainer = Object(external_this_wp_compose_["compose"])([external_this_wp_compose_["withInstanceId"], context_withBlockEditContext(function (context, ownProps) {
  // When explicitly set as not selected, do nothing.
  if (ownProps.isSelected === false) {
    return {
      clientId: context.clientId
    };
  } // When explicitly set as selected, use the value stored in the context instead.


  if (ownProps.isSelected === true) {
    return {
      isSelected: context.isSelected,
      clientId: context.clientId
    };
  } // Ensures that only one RichText component can be focused.


  return {
    isSelected: context.isSelected && context.focusedElement === ownProps.instanceId,
    setFocusedElement: context.setFocusedElement,
    clientId: context.clientId
  };
}), Object(external_this_wp_data_["withSelect"])(function (select) {
  // This should probably be moved to the block editor settings.
  var _select = select('core/editor'),
      canUserUseUnfilteredHTML = _select.canUserUseUnfilteredHTML;

  var _select2 = select('core/block-editor'),
      isCaretWithinFormattedText = _select2.isCaretWithinFormattedText;

  var _select3 = select('core/rich-text'),
      getFormatTypes = _select3.getFormatTypes;

  return {
    canUserUseUnfilteredHTML: canUserUseUnfilteredHTML(),
    isCaretWithinFormattedText: isCaretWithinFormattedText(),
    formatTypes: getFormatTypes()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      __unstableMarkLastChangeAsPersistent = _dispatch.__unstableMarkLastChangeAsPersistent,
      enterFormattedText = _dispatch.enterFormattedText,
      exitFormattedText = _dispatch.exitFormattedText;

  return {
    onCreateUndoLevel: __unstableMarkLastChangeAsPersistent,
    onEnterFormattedText: enterFormattedText,
    onExitFormattedText: exitFormattedText
  };
}), external_this_wp_compose_["withSafeTimeout"], Object(external_this_wp_components_["withFilters"])('experimentalRichText')])(rich_text_RichText);

RichTextContainer.Content = function (_ref8) {
  var value = _ref8.value,
      Tag = _ref8.tagName,
      multiline = _ref8.multiline,
      props = Object(objectWithoutProperties["a" /* default */])(_ref8, ["value", "tagName", "multiline"]);

  var html = value;
  var MultilineTag;

  if (multiline === true || multiline === 'p' || multiline === 'li') {
    MultilineTag = multiline === true ? 'p' : multiline;
  } // Handle deprecated `children` and `node` sources.


  if (Array.isArray(value)) {
    html = external_this_wp_blocks_["children"].toHTML(value);
  }

  if (!html && MultilineTag) {
    html = "<".concat(MultilineTag, "></").concat(MultilineTag, ">");
  }

  var content = Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, html);

  if (Tag) {
    return Object(external_this_wp_element_["createElement"])(Tag, Object(external_lodash_["omit"])(props, ['format']), content);
  }

  return content;
};

RichTextContainer.isEmpty = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  // Handle deprecated `children` and `node` sources.
  if (Array.isArray(value)) {
    return !value || value.length === 0;
  }

  return value.length === 0;
};

RichTextContainer.Content.defaultProps = {
  format: 'string',
  value: ''
};
/* harmony default export */ var rich_text = (RichTextContainer);




// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/media-upload/index.js
/**
 * WordPress dependencies
 */

/**
 * This is a placeholder for the media upload component necessary to make it possible to provide
 * an integration with the core blocks that handle media files. By default it renders nothing but
 * it provides a way to have it overridden with the `editor.MediaUpload` filter.
 *
 * @return {WPElement} Media upload element.
 */

var MediaUpload = function MediaUpload() {
  return null;
}; // Todo: rename the filter


/* harmony default export */ var media_upload = (Object(external_this_wp_components_["withFilters"])('editor.MediaUpload')(MediaUpload));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/url-popover/index.js










/**
 * WordPress dependencies
 */




var url_popover_URLPopover =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(URLPopover, _Component);

  function URLPopover() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, URLPopover);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(URLPopover).apply(this, arguments));
    _this.toggleSettingsVisibility = _this.toggleSettingsVisibility.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.state = {
      isSettingsExpanded: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(URLPopover, [{
    key: "toggleSettingsVisibility",
    value: function toggleSettingsVisibility() {
      this.setState({
        isSettingsExpanded: !this.state.isSettingsExpanded
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          renderSettings = _this$props.renderSettings,
          _this$props$position = _this$props.position,
          position = _this$props$position === void 0 ? 'bottom center' : _this$props$position,
          _this$props$focusOnMo = _this$props.focusOnMount,
          focusOnMount = _this$props$focusOnMo === void 0 ? 'firstElement' : _this$props$focusOnMo,
          popoverProps = Object(objectWithoutProperties["a" /* default */])(_this$props, ["children", "renderSettings", "position", "focusOnMount"]);

      var isSettingsExpanded = this.state.isSettingsExpanded;
      var showSettings = !!renderSettings && isSettingsExpanded;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Popover"], Object(esm_extends["a" /* default */])({
        className: "editor-url-popover block-editor-url-popover",
        focusOnMount: focusOnMount,
        position: position
      }, popoverProps), Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-url-popover__row block-editor-url-popover__row"
      }, children, !!renderSettings && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
        className: "editor-url-popover__settings-toggle block-editor-url-popover__settings-toggle",
        icon: "arrow-down-alt2",
        label: Object(external_this_wp_i18n_["__"])('Link Settings'),
        onClick: this.toggleSettingsVisibility,
        "aria-expanded": isSettingsExpanded
      })), showSettings && Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-url-popover__row block-editor-url-popover__row editor-url-popover__settings block-editor-url-popover__settings"
      }, renderSettings()));
    }
  }]);

  return URLPopover;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var url_popover = (url_popover_URLPopover);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/media-placeholder/index.js









/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





var media_placeholder_InsertFromURLPopover = function InsertFromURLPopover(_ref) {
  var src = _ref.src,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      onClose = _ref.onClose;
  return Object(external_this_wp_element_["createElement"])(url_popover, {
    onClose: onClose
  }, Object(external_this_wp_element_["createElement"])("form", {
    className: "editor-media-placeholder__url-input-form block-editor-media-placeholder__url-input-form",
    onSubmit: onSubmit
  }, Object(external_this_wp_element_["createElement"])("input", {
    className: "editor-media-placeholder__url-input-field block-editor-media-placeholder__url-input-field",
    type: "url",
    "aria-label": Object(external_this_wp_i18n_["__"])('URL'),
    placeholder: Object(external_this_wp_i18n_["__"])('Paste or type URL'),
    onChange: onChange,
    value: src
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
    className: "editor-media-placeholder__url-input-submit-button block-editor-media-placeholder__url-input-submit-button",
    icon: "editor-break",
    label: Object(external_this_wp_i18n_["__"])('Apply'),
    type: "submit"
  })));
};

var media_placeholder_MediaPlaceholder =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(MediaPlaceholder, _Component);

  function MediaPlaceholder() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MediaPlaceholder);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MediaPlaceholder).apply(this, arguments));
    _this.state = {
      src: '',
      isURLInputVisible: false
    };
    _this.onChangeSrc = _this.onChangeSrc.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onSubmitSrc = _this.onSubmitSrc.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onUpload = _this.onUpload.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onFilesUpload = _this.onFilesUpload.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.openURLInput = _this.openURLInput.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.closeURLInput = _this.closeURLInput.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(MediaPlaceholder, [{
    key: "onlyAllowsImages",
    value: function onlyAllowsImages() {
      var allowedTypes = this.props.allowedTypes;

      if (!allowedTypes) {
        return false;
      }

      return Object(external_lodash_["every"])(allowedTypes, function (allowedType) {
        return allowedType === 'image' || Object(external_lodash_["startsWith"])(allowedType, 'image/');
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        src: Object(external_lodash_["get"])(this.props.value, ['src'], '')
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (Object(external_lodash_["get"])(prevProps.value, ['src'], '') !== Object(external_lodash_["get"])(this.props.value, ['src'], '')) {
        this.setState({
          src: Object(external_lodash_["get"])(this.props.value, ['src'], '')
        });
      }
    }
  }, {
    key: "onChangeSrc",
    value: function onChangeSrc(event) {
      this.setState({
        src: event.target.value
      });
    }
  }, {
    key: "onSubmitSrc",
    value: function onSubmitSrc(event) {
      event.preventDefault();

      if (this.state.src && this.props.onSelectURL) {
        this.props.onSelectURL(this.state.src);
        this.closeURLInput();
      }
    }
  }, {
    key: "onUpload",
    value: function onUpload(event) {
      this.onFilesUpload(event.target.files);
    }
  }, {
    key: "onFilesUpload",
    value: function onFilesUpload(files) {
      var _this$props = this.props,
          onSelect = _this$props.onSelect,
          multiple = _this$props.multiple,
          onError = _this$props.onError,
          allowedTypes = _this$props.allowedTypes,
          mediaUpload = _this$props.mediaUpload;
      var setMedia = multiple ? onSelect : function (_ref2) {
        var _ref3 = Object(slicedToArray["a" /* default */])(_ref2, 1),
            media = _ref3[0];

        return onSelect(media);
      };
      mediaUpload({
        allowedTypes: allowedTypes,
        filesList: files,
        onFileChange: setMedia,
        onError: onError
      });
    }
  }, {
    key: "openURLInput",
    value: function openURLInput() {
      this.setState({
        isURLInputVisible: true
      });
    }
  }, {
    key: "closeURLInput",
    value: function closeURLInput() {
      this.setState({
        isURLInputVisible: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          accept = _this$props2.accept,
          icon = _this$props2.icon,
          className = _this$props2.className,
          _this$props2$labels = _this$props2.labels,
          labels = _this$props2$labels === void 0 ? {} : _this$props2$labels,
          onSelect = _this$props2.onSelect,
          _this$props2$value = _this$props2.value,
          value = _this$props2$value === void 0 ? {} : _this$props2$value,
          onSelectURL = _this$props2.onSelectURL,
          _this$props2$onHTMLDr = _this$props2.onHTMLDrop,
          onHTMLDrop = _this$props2$onHTMLDr === void 0 ? external_lodash_["noop"] : _this$props2$onHTMLDr,
          _this$props2$multiple = _this$props2.multiple,
          multiple = _this$props2$multiple === void 0 ? false : _this$props2$multiple,
          notices = _this$props2.notices,
          _this$props2$allowedT = _this$props2.allowedTypes,
          allowedTypes = _this$props2$allowedT === void 0 ? [] : _this$props2$allowedT,
          hasUploadPermissions = _this$props2.hasUploadPermissions,
          mediaUpload = _this$props2.mediaUpload;
      var _this$state = this.state,
          isURLInputVisible = _this$state.isURLInputVisible,
          src = _this$state.src;
      var instructions = labels.instructions || '';
      var title = labels.title || '';

      if (!hasUploadPermissions && !onSelectURL) {
        instructions = Object(external_this_wp_i18n_["__"])('To edit this block, you need permission to upload media.');
      }

      if (!instructions || !title) {
        var isOneType = 1 === allowedTypes.length;
        var isAudio = isOneType && 'audio' === allowedTypes[0];
        var isImage = isOneType && 'image' === allowedTypes[0];
        var isVideo = isOneType && 'video' === allowedTypes[0];

        if (!instructions) {
          if (hasUploadPermissions) {
            instructions = Object(external_this_wp_i18n_["__"])('Drag a media file, upload a new one or select a file from your library.');

            if (isAudio) {
              instructions = Object(external_this_wp_i18n_["__"])('Drag an audio, upload a new one or select a file from your library.');
            } else if (isImage) {
              instructions = Object(external_this_wp_i18n_["__"])('Drag an image, upload a new one or select a file from your library.');
            } else if (isVideo) {
              instructions = Object(external_this_wp_i18n_["__"])('Drag a video, upload a new one or select a file from your library.');
            }
          } else if (!hasUploadPermissions && onSelectURL) {
            instructions = Object(external_this_wp_i18n_["__"])('Given your current role, you can only link a media file, you cannot upload.');

            if (isAudio) {
              instructions = Object(external_this_wp_i18n_["__"])('Given your current role, you can only link an audio, you cannot upload.');
            } else if (isImage) {
              instructions = Object(external_this_wp_i18n_["__"])('Given your current role, you can only link an image, you cannot upload.');
            } else if (isVideo) {
              instructions = Object(external_this_wp_i18n_["__"])('Given your current role, you can only link a video, you cannot upload.');
            }
          }
        }

        if (!title) {
          title = Object(external_this_wp_i18n_["__"])('Media');

          if (isAudio) {
            title = Object(external_this_wp_i18n_["__"])('Audio');
          } else if (isImage) {
            title = Object(external_this_wp_i18n_["__"])('Image');
          } else if (isVideo) {
            title = Object(external_this_wp_i18n_["__"])('Video');
          }
        }
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
        icon: icon,
        label: title,
        instructions: instructions,
        className: classnames_default()('editor-media-placeholder block-editor-media-placeholder', className),
        notices: notices
      }, Object(external_this_wp_element_["createElement"])(check, null, !!mediaUpload && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["DropZone"], {
        onFilesDrop: this.onFilesUpload,
        onHTMLDrop: onHTMLDrop
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["FormFileUpload"], {
        isLarge: true,
        className: "editor-media-placeholder__button block-editor-media-placeholder__button",
        onChange: this.onUpload,
        accept: accept,
        multiple: multiple
      }, Object(external_this_wp_i18n_["__"])('Upload'))), Object(external_this_wp_element_["createElement"])(media_upload, {
        gallery: multiple && this.onlyAllowsImages(),
        multiple: multiple,
        onSelect: onSelect,
        allowedTypes: allowedTypes,
        value: value.id,
        render: function render(_ref4) {
          var open = _ref4.open;
          return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
            isLarge: true,
            className: "editor-media-placeholder__button block-editor-media-placeholder__button",
            onClick: open
          }, Object(external_this_wp_i18n_["__"])('Media Library'));
        }
      })), onSelectURL && Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-media-placeholder__url-input-container block-editor-media-placeholder__url-input-container"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        className: "editor-media-placeholder__button block-editor-media-placeholder__button",
        onClick: this.openURLInput,
        isToggled: isURLInputVisible,
        isLarge: true
      }, Object(external_this_wp_i18n_["__"])('Insert from URL')), isURLInputVisible && Object(external_this_wp_element_["createElement"])(media_placeholder_InsertFromURLPopover, {
        src: src,
        onChange: this.onChangeSrc,
        onSubmit: this.onSubmitSrc,
        onClose: this.closeURLInput
      })));
    }
  }]);

  return MediaPlaceholder;
}(external_this_wp_element_["Component"]);
var media_placeholder_applyWithSelect = Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core'),
      canUser = _select.canUser;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  return {
    hasUploadPermissions: Object(external_lodash_["defaultTo"])(canUser('create', 'media'), true),
    mediaUpload: getSettings().__experimentalMediaUpload
  };
});
/* harmony default export */ var media_placeholder = (Object(external_this_wp_compose_["compose"])(media_placeholder_applyWithSelect, Object(external_this_wp_components_["withFilters"])('editor.MediaPlaceholder'))(media_placeholder_MediaPlaceholder));

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(33);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/url-input/index.js








/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */








 // Since URLInput is rendered in the context of other inputs, but should be
// considered a separate modal node, prevent keyboard events from propagating
// as being considered from the input.

var stopEventPropagation = function stopEventPropagation(event) {
  return event.stopPropagation();
};

var url_input_URLInput =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(URLInput, _Component);

  function URLInput(_ref) {
    var _this;

    var autocompleteRef = _ref.autocompleteRef;

    Object(classCallCheck["a" /* default */])(this, URLInput);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(URLInput).apply(this, arguments));
    _this.onChange = _this.onChange.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onKeyDown = _this.onKeyDown.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.autocompleteRef = autocompleteRef || Object(external_this_wp_element_["createRef"])();
    _this.inputRef = Object(external_this_wp_element_["createRef"])();
    _this.updateSuggestions = Object(external_lodash_["throttle"])(_this.updateSuggestions.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this))), 200);
    _this.suggestionNodes = [];
    _this.state = {
      posts: [],
      showSuggestions: false,
      selectedSuggestion: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(URLInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var _this$state = this.state,
          showSuggestions = _this$state.showSuggestions,
          selectedSuggestion = _this$state.selectedSuggestion; // only have to worry about scrolling selected suggestion into view
      // when already expanded

      if (showSuggestions && selectedSuggestion !== null && !this.scrollingIntoView) {
        this.scrollingIntoView = true;
        dom_scroll_into_view_lib_default()(this.suggestionNodes[selectedSuggestion], this.autocompleteRef.current, {
          onlyScrollIfNeeded: true
        });
        setTimeout(function () {
          _this2.scrollingIntoView = false;
        }, 100);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete this.suggestionsRequest;
    }
  }, {
    key: "bindSuggestionNode",
    value: function bindSuggestionNode(index) {
      var _this3 = this;

      return function (ref) {
        _this3.suggestionNodes[index] = ref;
      };
    }
  }, {
    key: "updateSuggestions",
    value: function updateSuggestions(value) {
      var _this4 = this;

      // Show the suggestions after typing at least 2 characters
      // and also for URLs
      if (value.length < 2 || /^https?:/.test(value)) {
        this.setState({
          showSuggestions: false,
          selectedSuggestion: null,
          loading: false
        });
        return;
      }

      this.setState({
        showSuggestions: true,
        selectedSuggestion: null,
        loading: true
      });
      var request = external_this_wp_apiFetch_default()({
        path: Object(external_this_wp_url_["addQueryArgs"])('/wp/v2/search', {
          search: value,
          per_page: 20,
          type: 'post'
        })
      });
      request.then(function (posts) {
        // A fetch Promise doesn't have an abort option. It's mimicked by
        // comparing the request reference in on the instance, which is
        // reset or deleted on subsequent requests or unmounting.
        if (_this4.suggestionsRequest !== request) {
          return;
        }

        _this4.setState({
          posts: posts,
          loading: false
        });

        if (!!posts.length) {
          _this4.props.debouncedSpeak(Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%d result found, use up and down arrow keys to navigate.', '%d results found, use up and down arrow keys to navigate.', posts.length), posts.length), 'assertive');
        } else {
          _this4.props.debouncedSpeak(Object(external_this_wp_i18n_["__"])('No results.'), 'assertive');
        }
      }).catch(function () {
        if (_this4.suggestionsRequest === request) {
          _this4.setState({
            loading: false
          });
        }
      });
      this.suggestionsRequest = request;
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var inputValue = event.target.value;
      this.props.onChange(inputValue);
      this.updateSuggestions(inputValue);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var _this$state2 = this.state,
          showSuggestions = _this$state2.showSuggestions,
          selectedSuggestion = _this$state2.selectedSuggestion,
          posts = _this$state2.posts,
          loading = _this$state2.loading; // If the suggestions are not shown or loading, we shouldn't handle the arrow keys
      // We shouldn't preventDefault to allow block arrow keys navigation

      if (!showSuggestions || !posts.length || loading) {
        // In the Windows version of Firefox the up and down arrows don't move the caret
        // within an input field like they do for Mac Firefox/Chrome/Safari. This causes
        // a form of focus trapping that is disruptive to the user experience. This disruption
        // only happens if the caret is not in the first or last position in the text input.
        // See: https://github.com/WordPress/gutenberg/issues/5693#issuecomment-436684747
        switch (event.keyCode) {
          // When UP is pressed, if the caret is at the start of the text, move it to the 0
          // position.
          case external_this_wp_keycodes_["UP"]:
            {
              if (0 !== event.target.selectionStart) {
                event.stopPropagation();
                event.preventDefault(); // Set the input caret to position 0

                event.target.setSelectionRange(0, 0);
              }

              break;
            }
          // When DOWN is pressed, if the caret is not at the end of the text, move it to the
          // last position.

          case external_this_wp_keycodes_["DOWN"]:
            {
              if (this.props.value.length !== event.target.selectionStart) {
                event.stopPropagation();
                event.preventDefault(); // Set the input caret to the last position

                event.target.setSelectionRange(this.props.value.length, this.props.value.length);
              }

              break;
            }
        }

        return;
      }

      var post = this.state.posts[this.state.selectedSuggestion];

      switch (event.keyCode) {
        case external_this_wp_keycodes_["UP"]:
          {
            event.stopPropagation();
            event.preventDefault();
            var previousIndex = !selectedSuggestion ? posts.length - 1 : selectedSuggestion - 1;
            this.setState({
              selectedSuggestion: previousIndex
            });
            break;
          }

        case external_this_wp_keycodes_["DOWN"]:
          {
            event.stopPropagation();
            event.preventDefault();
            var nextIndex = selectedSuggestion === null || selectedSuggestion === posts.length - 1 ? 0 : selectedSuggestion + 1;
            this.setState({
              selectedSuggestion: nextIndex
            });
            break;
          }

        case external_this_wp_keycodes_["TAB"]:
          {
            if (this.state.selectedSuggestion !== null) {
              this.selectLink(post); // Announce a link has been selected when tabbing away from the input field.

              this.props.speak(Object(external_this_wp_i18n_["__"])('Link selected.'));
            }

            break;
          }

        case external_this_wp_keycodes_["ENTER"]:
          {
            if (this.state.selectedSuggestion !== null) {
              event.stopPropagation();
              this.selectLink(post);
            }

            break;
          }
      }
    }
  }, {
    key: "selectLink",
    value: function selectLink(post) {
      this.props.onChange(post.url, post);
      this.setState({
        selectedSuggestion: null,
        showSuggestions: false
      });
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick(post) {
      this.selectLink(post); // Move focus to the input field when a link suggestion is clicked.

      this.inputRef.current.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          _this$props$value = _this$props.value,
          value = _this$props$value === void 0 ? '' : _this$props$value,
          _this$props$autoFocus = _this$props.autoFocus,
          autoFocus = _this$props$autoFocus === void 0 ? true : _this$props$autoFocus,
          instanceId = _this$props.instanceId,
          className = _this$props.className;
      var _this$state3 = this.state,
          showSuggestions = _this$state3.showSuggestions,
          posts = _this$state3.posts,
          selectedSuggestion = _this$state3.selectedSuggestion,
          loading = _this$state3.loading;
      /* eslint-disable jsx-a11y/no-autofocus */

      return Object(external_this_wp_element_["createElement"])("div", {
        className: classnames_default()('editor-url-input block-editor-url-input', className)
      }, Object(external_this_wp_element_["createElement"])("input", {
        autoFocus: autoFocus,
        type: "text",
        "aria-label": Object(external_this_wp_i18n_["__"])('URL'),
        required: true,
        value: value,
        onChange: this.onChange,
        onInput: stopEventPropagation,
        placeholder: Object(external_this_wp_i18n_["__"])('Paste URL or type to search'),
        onKeyDown: this.onKeyDown,
        role: "combobox",
        "aria-expanded": showSuggestions,
        "aria-autocomplete": "list",
        "aria-owns": "block-editor-url-input-suggestions-".concat(instanceId),
        "aria-activedescendant": selectedSuggestion !== null ? "block-editor-url-input-suggestion-".concat(instanceId, "-").concat(selectedSuggestion) : undefined,
        ref: this.inputRef
      }), loading && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null), showSuggestions && !!posts.length && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Popover"], {
        position: "bottom",
        noArrow: true,
        focusOnMount: false
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-url-input__suggestions block-editor-url-input__suggestions",
        id: "editor-url-input-suggestions-".concat(instanceId),
        ref: this.autocompleteRef,
        role: "listbox"
      }, posts.map(function (post, index) {
        return Object(external_this_wp_element_["createElement"])("button", {
          key: post.id,
          role: "option",
          tabIndex: "-1",
          id: "block-editor-url-input-suggestion-".concat(instanceId, "-").concat(index),
          ref: _this5.bindSuggestionNode(index),
          className: classnames_default()('editor-url-input__suggestion block-editor-url-input__suggestion', {
            'is-selected': index === selectedSuggestion
          }),
          onClick: function onClick() {
            return _this5.handleOnClick(post);
          },
          "aria-selected": index === selectedSuggestion
        }, Object(external_this_wp_htmlEntities_["decodeEntities"])(post.title) || Object(external_this_wp_i18n_["__"])('(no title)'));
      }))));
      /* eslint-enable jsx-a11y/no-autofocus */
    }
  }]);

  return URLInput;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var url_input = (Object(external_this_wp_components_["withSpokenMessages"])(Object(external_this_wp_compose_["withInstanceId"])(url_input_URLInput)));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/url-input/button.js








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var button_URLInputButton =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(URLInputButton, _Component);

  function URLInputButton() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, URLInputButton);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(URLInputButton).apply(this, arguments));
    _this.toggle = _this.toggle.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.submitLink = _this.submitLink.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.state = {
      expanded: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(URLInputButton, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        expanded: !this.state.expanded
      });
    }
  }, {
    key: "submitLink",
    value: function submitLink(event) {
      event.preventDefault();
      this.toggle();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          onChange = _this$props.onChange;
      var expanded = this.state.expanded;
      var buttonLabel = url ? Object(external_this_wp_i18n_["__"])('Edit Link') : Object(external_this_wp_i18n_["__"])('Insert Link');
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-url-input__button block-editor-url-input__button"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
        icon: "admin-links",
        label: buttonLabel,
        onClick: this.toggle,
        className: classnames_default()('components-toolbar__control', {
          'is-active': url
        })
      }), expanded && Object(external_this_wp_element_["createElement"])("form", {
        className: "editor-url-input__button-modal block-editor-url-input__button-modal",
        onSubmit: this.submitLink
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-url-input__button-modal-line block-editor-url-input__button-modal-line"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
        className: "editor-url-input__back block-editor-url-input__back",
        icon: "arrow-left-alt",
        label: Object(external_this_wp_i18n_["__"])('Close'),
        onClick: this.toggle
      }), Object(external_this_wp_element_["createElement"])(url_input, {
        value: url || '',
        onChange: onChange
      }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
        icon: "editor-break",
        label: Object(external_this_wp_i18n_["__"])('Submit'),
        type: "submit"
      }))));
    }
  }]);

  return URLInputButton;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var url_input_button = (button_URLInputButton);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-actions/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function BlockActions(_ref) {
  var onDuplicate = _ref.onDuplicate,
      onRemove = _ref.onRemove,
      onInsertBefore = _ref.onInsertBefore,
      onInsertAfter = _ref.onInsertAfter,
      isLocked = _ref.isLocked,
      canDuplicate = _ref.canDuplicate,
      children = _ref.children;
  return children({
    onDuplicate: onDuplicate,
    onRemove: onRemove,
    onInsertAfter: onInsertAfter,
    onInsertBefore: onInsertBefore,
    isLocked: isLocked,
    canDuplicate: canDuplicate
  });
}

/* harmony default export */ var block_actions = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var _select = select('core/block-editor'),
      getBlocksByClientId = _select.getBlocksByClientId,
      getTemplateLock = _select.getTemplateLock,
      getBlockRootClientId = _select.getBlockRootClientId;

  var blocks = getBlocksByClientId(props.clientIds);
  var canDuplicate = Object(external_lodash_["every"])(blocks, function (block) {
    return !!block && Object(external_this_wp_blocks_["hasBlockSupport"])(block.name, 'multiple', true);
  });
  var rootClientId = getBlockRootClientId(props.clientIds[0]);
  return {
    isLocked: !!getTemplateLock(rootClientId),
    blocks: blocks,
    canDuplicate: canDuplicate,
    rootClientId: rootClientId,
    extraProps: props
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, props, _ref2) {
  var select = _ref2.select;
  var clientIds = props.clientIds,
      rootClientId = props.rootClientId,
      blocks = props.blocks,
      isLocked = props.isLocked,
      canDuplicate = props.canDuplicate;

  var _dispatch = dispatch('core/block-editor'),
      insertBlocks = _dispatch.insertBlocks,
      multiSelect = _dispatch.multiSelect,
      removeBlocks = _dispatch.removeBlocks,
      insertDefaultBlock = _dispatch.insertDefaultBlock;

  return {
    onDuplicate: function onDuplicate() {
      if (isLocked || !canDuplicate) {
        return;
      }

      var _select2 = select('core/block-editor'),
          getBlockIndex = _select2.getBlockIndex;

      var lastSelectedIndex = getBlockIndex(Object(external_lodash_["last"])(Object(external_lodash_["castArray"])(clientIds)), rootClientId);
      var clonedBlocks = blocks.map(function (block) {
        return Object(external_this_wp_blocks_["cloneBlock"])(block);
      });
      insertBlocks(clonedBlocks, lastSelectedIndex + 1, rootClientId);

      if (clonedBlocks.length > 1) {
        multiSelect(Object(external_lodash_["first"])(clonedBlocks).clientId, Object(external_lodash_["last"])(clonedBlocks).clientId);
      }
    },
    onRemove: function onRemove() {
      if (!isLocked) {
        removeBlocks(clientIds);
      }
    },
    onInsertBefore: function onInsertBefore() {
      if (!isLocked) {
        var _select3 = select('core/block-editor'),
            getBlockIndex = _select3.getBlockIndex;

        var firstSelectedIndex = getBlockIndex(Object(external_lodash_["first"])(Object(external_lodash_["castArray"])(clientIds)), rootClientId);
        insertDefaultBlock({}, rootClientId, firstSelectedIndex);
      }
    },
    onInsertAfter: function onInsertAfter() {
      if (!isLocked) {
        var _select4 = select('core/block-editor'),
            getBlockIndex = _select4.getBlockIndex;

        var lastSelectedIndex = getBlockIndex(Object(external_lodash_["last"])(Object(external_lodash_["castArray"])(clientIds)), rootClientId);
        insertDefaultBlock({}, rootClientId, lastSelectedIndex + 1);
      }
    }
  };
})])(BlockActions));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-editor-keyboard-shortcuts/index.js









/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



var preventDefault = function preventDefault(event) {
  event.preventDefault();
  return event;
};

var shortcuts = {
  duplicate: {
    raw: external_this_wp_keycodes_["rawShortcut"].primaryShift('d'),
    display: external_this_wp_keycodes_["displayShortcut"].primaryShift('d')
  },
  removeBlock: {
    raw: external_this_wp_keycodes_["rawShortcut"].access('z'),
    display: external_this_wp_keycodes_["displayShortcut"].access('z')
  },
  insertBefore: {
    raw: external_this_wp_keycodes_["rawShortcut"].primaryAlt('t'),
    display: external_this_wp_keycodes_["displayShortcut"].primaryAlt('t')
  },
  insertAfter: {
    raw: external_this_wp_keycodes_["rawShortcut"].primaryAlt('y'),
    display: external_this_wp_keycodes_["displayShortcut"].primaryAlt('y')
  }
};

var block_editor_keyboard_shortcuts_BlockEditorKeyboardShortcuts =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockEditorKeyboardShortcuts, _Component);

  function BlockEditorKeyboardShortcuts() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockEditorKeyboardShortcuts);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockEditorKeyboardShortcuts).apply(this, arguments));
    _this.selectAll = _this.selectAll.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.deleteSelectedBlocks = _this.deleteSelectedBlocks.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.clearMultiSelection = _this.clearMultiSelection.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(BlockEditorKeyboardShortcuts, [{
    key: "selectAll",
    value: function selectAll(event) {
      var _this$props = this.props,
          rootBlocksClientIds = _this$props.rootBlocksClientIds,
          onMultiSelect = _this$props.onMultiSelect;
      event.preventDefault();
      onMultiSelect(Object(external_lodash_["first"])(rootBlocksClientIds), Object(external_lodash_["last"])(rootBlocksClientIds));
    }
  }, {
    key: "deleteSelectedBlocks",
    value: function deleteSelectedBlocks(event) {
      var _this$props2 = this.props,
          selectedBlockClientIds = _this$props2.selectedBlockClientIds,
          hasMultiSelection = _this$props2.hasMultiSelection,
          onRemove = _this$props2.onRemove,
          isLocked = _this$props2.isLocked;

      if (hasMultiSelection) {
        event.preventDefault();

        if (!isLocked) {
          onRemove(selectedBlockClientIds);
        }
      }
    }
    /**
     * Clears current multi-selection, if one exists.
     */

  }, {
    key: "clearMultiSelection",
    value: function clearMultiSelection() {
      var _this$props3 = this.props,
          hasMultiSelection = _this$props3.hasMultiSelection,
          clearSelectedBlock = _this$props3.clearSelectedBlock;

      if (hasMultiSelection) {
        clearSelectedBlock();
        window.getSelection().removeAllRanges();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _ref;

      var selectedBlockClientIds = this.props.selectedBlockClientIds;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["KeyboardShortcuts"], {
        shortcuts: (_ref = {}, Object(defineProperty["a" /* default */])(_ref, external_this_wp_keycodes_["rawShortcut"].primary('a'), this.selectAll), Object(defineProperty["a" /* default */])(_ref, "backspace", this.deleteSelectedBlocks), Object(defineProperty["a" /* default */])(_ref, "del", this.deleteSelectedBlocks), Object(defineProperty["a" /* default */])(_ref, "escape", this.clearMultiSelection), _ref)
      }), selectedBlockClientIds.length > 0 && Object(external_this_wp_element_["createElement"])(block_actions, {
        clientIds: selectedBlockClientIds
      }, function (_ref2) {
        var _ref3;

        var onDuplicate = _ref2.onDuplicate,
            onRemove = _ref2.onRemove,
            onInsertAfter = _ref2.onInsertAfter,
            onInsertBefore = _ref2.onInsertBefore;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["KeyboardShortcuts"], {
          bindGlobal: true,
          shortcuts: (_ref3 = {}, Object(defineProperty["a" /* default */])(_ref3, shortcuts.duplicate.raw, Object(external_lodash_["flow"])(preventDefault, onDuplicate)), Object(defineProperty["a" /* default */])(_ref3, shortcuts.removeBlock.raw, Object(external_lodash_["flow"])(preventDefault, onRemove)), Object(defineProperty["a" /* default */])(_ref3, shortcuts.insertBefore.raw, Object(external_lodash_["flow"])(preventDefault, onInsertBefore)), Object(defineProperty["a" /* default */])(_ref3, shortcuts.insertAfter.raw, Object(external_lodash_["flow"])(preventDefault, onInsertAfter)), _ref3)
        });
      }));
    }
  }]);

  return BlockEditorKeyboardShortcuts;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var block_editor_keyboard_shortcuts = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getBlockOrder = _select.getBlockOrder,
      getMultiSelectedBlockClientIds = _select.getMultiSelectedBlockClientIds,
      hasMultiSelection = _select.hasMultiSelection,
      getBlockRootClientId = _select.getBlockRootClientId,
      getTemplateLock = _select.getTemplateLock,
      getSelectedBlockClientId = _select.getSelectedBlockClientId;

  var selectedBlockClientId = getSelectedBlockClientId();
  var selectedBlockClientIds = selectedBlockClientId ? [selectedBlockClientId] : getMultiSelectedBlockClientIds();
  return {
    rootBlocksClientIds: getBlockOrder(),
    hasMultiSelection: hasMultiSelection(),
    isLocked: Object(external_lodash_["some"])(selectedBlockClientIds, function (clientId) {
      return !!getTemplateLock(getBlockRootClientId(clientId));
    }),
    selectedBlockClientIds: selectedBlockClientIds
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      clearSelectedBlock = _dispatch.clearSelectedBlock,
      multiSelect = _dispatch.multiSelect,
      removeBlocks = _dispatch.removeBlocks;

  return {
    clearSelectedBlock: clearSelectedBlock,
    onMultiSelect: multiSelect,
    onRemove: removeBlocks
  };
})])(block_editor_keyboard_shortcuts_BlockEditorKeyboardShortcuts));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/skip-to-selected-block/index.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var skip_to_selected_block_SkipToSelectedBlock = function SkipToSelectedBlock(_ref) {
  var selectedBlockClientId = _ref.selectedBlockClientId;

  var onClick = function onClick() {
    var selectedBlockElement = getBlockFocusableWrapper(selectedBlockClientId);
    selectedBlockElement.focus();
  };

  return selectedBlockClientId && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isDefault: true,
    type: "button",
    className: "editor-skip-to-selected-block block-editor-skip-to-selected-block",
    onClick: onClick
  }, Object(external_this_wp_i18n_["__"])('Skip to the selected block'));
};

/* harmony default export */ var skip_to_selected_block = (Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    selectedBlockClientId: select('core/block-editor').getBlockSelectionStart()
  };
})(skip_to_selected_block_SkipToSelectedBlock));

// EXTERNAL MODULE: external {"this":["wp","tokenList"]}
var external_this_wp_tokenList_ = __webpack_require__(135);
var external_this_wp_tokenList_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_tokenList_);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-styles/index.js




/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


/**
 * Returns the active style from the given className.
 *
 * @param {Array} styles Block style variations.
 * @param {string} className  Class name
 *
 * @return {Object?} The active style.
 */

function getActiveStyle(styles, className) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = new external_this_wp_tokenList_default.a(className).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var style = _step.value;

      if (style.indexOf('is-style-') === -1) {
        continue;
      }

      var potentialStyleName = style.substring(9);
      var activeStyle = Object(external_lodash_["find"])(styles, {
        name: potentialStyleName
      });

      if (activeStyle) {
        return activeStyle;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return Object(external_lodash_["find"])(styles, 'isDefault');
}
/**
 * Replaces the active style in the block's className.
 *
 * @param {string}  className   Class name.
 * @param {Object?} activeStyle The replaced style.
 * @param {Object}  newStyle    The replacing style.
 *
 * @return {string} The updated className.
 */

function replaceActiveStyle(className, activeStyle, newStyle) {
  var list = new external_this_wp_tokenList_default.a(className);

  if (activeStyle) {
    list.remove('is-style-' + activeStyle.name);
  }

  list.add('is-style-' + newStyle.name);
  return list.value;
}

function BlockStyles(_ref) {
  var styles = _ref.styles,
      className = _ref.className,
      onChangeClassName = _ref.onChangeClassName,
      name = _ref.name,
      attributes = _ref.attributes,
      type = _ref.type,
      _ref$onSwitch = _ref.onSwitch,
      onSwitch = _ref$onSwitch === void 0 ? external_lodash_["noop"] : _ref$onSwitch,
      _ref$onHoverClassName = _ref.onHoverClassName,
      onHoverClassName = _ref$onHoverClassName === void 0 ? external_lodash_["noop"] : _ref$onHoverClassName;

  if (!styles || styles.length === 0) {
    return null;
  }

  if (!type.styles && !Object(external_lodash_["find"])(styles, 'isDefault')) {
    styles = [{
      name: 'default',
      label: Object(external_this_wp_i18n_["_x"])('Default', 'block style'),
      isDefault: true
    }].concat(Object(toConsumableArray["a" /* default */])(styles));
  }

  var activeStyle = getActiveStyle(styles, className);

  function updateClassName(style) {
    var updatedClassName = replaceActiveStyle(className, activeStyle, style);
    onChangeClassName(updatedClassName);
    onHoverClassName(null);
    onSwitch();
  }

  return Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-styles block-editor-block-styles"
  }, styles.map(function (style) {
    var styleClassName = replaceActiveStyle(className, activeStyle, style);
    return Object(external_this_wp_element_["createElement"])("div", {
      key: style.name,
      className: classnames_default()('editor-block-styles__item block-editor-block-styles__item', {
        'is-active': activeStyle === style
      }),
      onClick: function onClick() {
        return updateClassName(style);
      },
      onKeyDown: function onKeyDown(event) {
        if (external_this_wp_keycodes_["ENTER"] === event.keyCode || external_this_wp_keycodes_["SPACE"] === event.keyCode) {
          event.preventDefault();
          updateClassName(style);
        }
      },
      onMouseEnter: function onMouseEnter() {
        return onHoverClassName(styleClassName);
      },
      onMouseLeave: function onMouseLeave() {
        return onHoverClassName(null);
      },
      role: "button",
      tabIndex: "0",
      "aria-label": style.label || style.name
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "editor-block-styles__item-preview block-editor-block-styles__item-preview"
    }, Object(external_this_wp_element_["createElement"])(BlockPreviewContent, {
      name: name,
      attributes: Object(objectSpread["a" /* default */])({}, attributes, {
        className: styleClassName
      })
    })), Object(external_this_wp_element_["createElement"])("div", {
      className: "editor-block-styles__item-label block-editor-block-styles__item-label"
    }, style.label || style.name));
  }));
}

/* harmony default export */ var block_styles = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var clientId = _ref2.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock;

  var _select2 = select('core/blocks'),
      getBlockStyles = _select2.getBlockStyles;

  var block = getBlock(clientId);
  var blockType = Object(external_this_wp_blocks_["getBlockType"])(block.name);
  return {
    name: block.name,
    attributes: block.attributes,
    className: block.attributes.className || '',
    styles: getBlockStyles(block.name),
    type: blockType
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref3) {
  var clientId = _ref3.clientId;
  return {
    onChangeClassName: function onChangeClassName(newClassName) {
      dispatch('core/block-editor').updateBlockAttributes(clientId, {
        className: newClassName
      });
    }
  };
})])(BlockStyles));

// EXTERNAL MODULE: external {"this":["wp","wordcount"]}
var external_this_wp_wordcount_ = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/multi-selection-inspector/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function MultiSelectionInspector(_ref) {
  var blocks = _ref.blocks;
  var words = Object(external_this_wp_wordcount_["count"])(Object(external_this_wp_blocks_["serialize"])(blocks), 'words');
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-multi-selection-inspector__card block-editor-multi-selection-inspector__card"
  }, Object(external_this_wp_element_["createElement"])(BlockIcon, {
    icon: Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
      d: "M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"
    })),
    showColors: true
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-multi-selection-inspector__card-content block-editor-multi-selection-inspector__card-content"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-multi-selection-inspector__card-title block-editor-multi-selection-inspector__card-title"
  },
  /* translators: %d: number of blocks */
  Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%d block', '%d blocks', blocks.length), blocks.length)), Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-multi-selection-inspector__card-description block-editor-multi-selection-inspector__card-description"
  },
  /* translators: %d: number of words */
  Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%d word', '%d words', words), words))));
}

/* harmony default export */ var multi_selection_inspector = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getMultiSelectedBlocks = _select.getMultiSelectedBlocks;

  return {
    blocks: getMultiSelectedBlocks()
  };
})(MultiSelectionInspector));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-inspector/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */








var block_inspector_BlockInspector = function BlockInspector(_ref) {
  var selectedBlockClientId = _ref.selectedBlockClientId,
      selectedBlockName = _ref.selectedBlockName,
      blockType = _ref.blockType,
      count = _ref.count,
      hasBlockStyles = _ref.hasBlockStyles;

  if (count > 1) {
    return Object(external_this_wp_element_["createElement"])(multi_selection_inspector, null);
  }

  var isSelectedBlockUnregistered = selectedBlockName === Object(external_this_wp_blocks_["getUnregisteredTypeHandlerName"])();
  /*
   * If the selected block is of an unregistered type, avoid showing it as an actual selection
   * because we want the user to focus on the unregistered block warning, not block settings.
   */

  if (!blockType || !selectedBlockClientId || isSelectedBlockUnregistered) {
    return Object(external_this_wp_element_["createElement"])("span", {
      className: "editor-block-inspector__no-blocks block-editor-block-inspector__no-blocks"
    }, Object(external_this_wp_i18n_["__"])('No block selected.'));
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-inspector__card block-editor-block-inspector__card"
  }, Object(external_this_wp_element_["createElement"])(BlockIcon, {
    icon: blockType.icon,
    showColors: true
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-inspector__card-content block-editor-block-inspector__card-content"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-inspector__card-title block-editor-block-inspector__card-title"
  }, blockType.title), Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-inspector__card-description block-editor-block-inspector__card-description"
  }, blockType.description))), hasBlockStyles && Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
    title: Object(external_this_wp_i18n_["__"])('Styles'),
    initialOpen: false
  }, Object(external_this_wp_element_["createElement"])(block_styles, {
    clientId: selectedBlockClientId
  }))), Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(inspector_controls.Slot, null)), Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(inspector_advanced_controls.Slot, null, function (fills) {
    return !Object(external_lodash_["isEmpty"])(fills) && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
      className: "editor-block-inspector__advanced block-editor-block-inspector__advanced",
      title: Object(external_this_wp_i18n_["__"])('Advanced'),
      initialOpen: false
    }, fills);
  })), Object(external_this_wp_element_["createElement"])(skip_to_selected_block, {
    key: "back"
  }));
};

/* harmony default export */ var block_inspector = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getSelectedBlockCount = _select.getSelectedBlockCount,
      getBlockName = _select.getBlockName;

  var _select2 = select('core/blocks'),
      getBlockStyles = _select2.getBlockStyles;

  var selectedBlockClientId = getSelectedBlockClientId();
  var selectedBlockName = selectedBlockClientId && getBlockName(selectedBlockClientId);
  var blockType = selectedBlockClientId && Object(external_this_wp_blocks_["getBlockType"])(selectedBlockName);
  var blockStyles = selectedBlockClientId && getBlockStyles(selectedBlockName);
  return {
    count: getSelectedBlockCount(),
    hasBlockStyles: blockStyles && blockStyles.length > 0,
    selectedBlockName: selectedBlockName,
    selectedBlockClientId: selectedBlockClientId,
    blockType: blockType
  };
})(block_inspector_BlockInspector));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-selection-clearer/index.js









/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





var block_selection_clearer_BlockSelectionClearer =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockSelectionClearer, _Component);

  function BlockSelectionClearer() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockSelectionClearer);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockSelectionClearer).apply(this, arguments));
    _this.bindContainer = _this.bindContainer.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.clearSelectionIfFocusTarget = _this.clearSelectionIfFocusTarget.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(BlockSelectionClearer, [{
    key: "bindContainer",
    value: function bindContainer(ref) {
      this.container = ref;
    }
    /**
     * Clears the selected block on focus if the container is the target of the
     * focus. This assumes no other descendents have received focus until event
     * has bubbled to the container.
     *
     * @param {FocusEvent} event Focus event.
     */

  }, {
    key: "clearSelectionIfFocusTarget",
    value: function clearSelectionIfFocusTarget(event) {
      var _this$props = this.props,
          hasSelectedBlock = _this$props.hasSelectedBlock,
          hasMultiSelection = _this$props.hasMultiSelection,
          clearSelectedBlock = _this$props.clearSelectedBlock;
      var hasSelection = hasSelectedBlock || hasMultiSelection;

      if (event.target === this.container && hasSelection) {
        clearSelectedBlock();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(external_this_wp_element_["createElement"])("div", Object(esm_extends["a" /* default */])({
        tabIndex: -1,
        onFocus: this.clearSelectionIfFocusTarget,
        ref: this.bindContainer
      }, Object(external_lodash_["omit"])(this.props, ['clearSelectedBlock', 'hasSelectedBlock', 'hasMultiSelection'])));
    }
  }]);

  return BlockSelectionClearer;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var block_selection_clearer = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      hasSelectedBlock = _select.hasSelectedBlock,
      hasMultiSelection = _select.hasMultiSelection;

  return {
    hasSelectedBlock: hasSelectedBlock(),
    hasMultiSelection: hasMultiSelection()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      clearSelectedBlock = _dispatch.clearSelectedBlock;

  return {
    clearSelectedBlock: clearSelectedBlock
  };
})])(block_selection_clearer_BlockSelectionClearer));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-settings-menu/block-mode-toggle.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function BlockModeToggle(_ref) {
  var blockType = _ref.blockType,
      mode = _ref.mode,
      onToggleMode = _ref.onToggleMode,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small;

  if (!Object(external_this_wp_blocks_["hasBlockSupport"])(blockType, 'html', true)) {
    return null;
  }

  var label = mode === 'visual' ? Object(external_this_wp_i18n_["__"])('Edit as HTML') : Object(external_this_wp_i18n_["__"])('Edit visually');
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    onClick: onToggleMode,
    icon: "html"
  }, !small && label);
}
/* harmony default export */ var block_mode_toggle = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var clientId = _ref2.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock,
      getBlockMode = _select.getBlockMode;

  var block = getBlock(clientId);
  return {
    mode: getBlockMode(clientId),
    blockType: block ? Object(external_this_wp_blocks_["getBlockType"])(block.name) : null
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref3) {
  var _ref3$onToggle = _ref3.onToggle,
      onToggle = _ref3$onToggle === void 0 ? external_lodash_["noop"] : _ref3$onToggle,
      clientId = _ref3.clientId;
  return {
    onToggleMode: function onToggleMode() {
      dispatch('core/block-editor').toggleBlockMode(clientId);
      onToggle();
    }
  };
})])(BlockModeToggle));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-settings-menu/reusable-block-convert-button.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







function ReusableBlockConvertButton(_ref) {
  var isVisible = _ref.isVisible,
      isReusable = _ref.isReusable,
      onConvertToStatic = _ref.onConvertToStatic,
      onConvertToReusable = _ref.onConvertToReusable;

  if (!isVisible) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, !isReusable && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    icon: "controls-repeat",
    onClick: onConvertToReusable
  }, Object(external_this_wp_i18n_["__"])('Add to Reusable Blocks')), isReusable && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    icon: "controls-repeat",
    onClick: onConvertToStatic
  }, Object(external_this_wp_i18n_["__"])('Convert to Regular Block')));
}
/* harmony default export */ var reusable_block_convert_button = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var clientIds = _ref2.clientIds;

  var _select = select('core/block-editor'),
      getBlocksByClientId = _select.getBlocksByClientId,
      canInsertBlockType = _select.canInsertBlockType;

  var _select2 = select('core/editor'),
      getReusableBlock = _select2.__experimentalGetReusableBlock;

  var _select3 = select('core'),
      canUser = _select3.canUser;

  var blocks = getBlocksByClientId(clientIds);
  var isReusable = blocks.length === 1 && blocks[0] && Object(external_this_wp_blocks_["isReusableBlock"])(blocks[0]) && !!getReusableBlock(blocks[0].attributes.ref); // Show 'Convert to Regular Block' when selected block is a reusable block

  var isVisible = isReusable || // Hide 'Add to Reusable Blocks' when reusable blocks are disabled
  canInsertBlockType('core/block') && Object(external_lodash_["every"])(blocks, function (block) {
    return (// Guard against the case where a regular block has *just* been converted
      !!block && // Hide 'Add to Reusable Blocks' on invalid blocks
      block.isValid && // Hide 'Add to Reusable Blocks' when block doesn't support being made reusable
      Object(external_this_wp_blocks_["hasBlockSupport"])(block.name, 'reusable', true)
    );
  }) && // Hide 'Add to Reusable Blocks' when current doesn't have permission to do that
  !!canUser('create', 'blocks');
  return {
    isReusable: isReusable,
    isVisible: isVisible
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref3) {
  var clientIds = _ref3.clientIds,
      _ref3$onToggle = _ref3.onToggle,
      onToggle = _ref3$onToggle === void 0 ? external_lodash_["noop"] : _ref3$onToggle;

  var _dispatch = dispatch('core/editor'),
      convertBlockToReusable = _dispatch.__experimentalConvertBlockToReusable,
      convertBlockToStatic = _dispatch.__experimentalConvertBlockToStatic;

  return {
    onConvertToStatic: function onConvertToStatic() {
      if (clientIds.length !== 1) {
        return;
      }

      convertBlockToStatic(clientIds[0]);
      onToggle();
    },
    onConvertToReusable: function onConvertToReusable() {
      convertBlockToReusable(clientIds);
      onToggle();
    }
  };
})])(ReusableBlockConvertButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-settings-menu/reusable-block-delete-button.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function ReusableBlockDeleteButton(_ref) {
  var isVisible = _ref.isVisible,
      isDisabled = _ref.isDisabled,
      onDelete = _ref.onDelete;

  if (!isVisible) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    icon: "no",
    disabled: isDisabled,
    onClick: function onClick() {
      return onDelete();
    }
  }, Object(external_this_wp_i18n_["__"])('Remove from Reusable Blocks'));
}
/* harmony default export */ var reusable_block_delete_button = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var clientId = _ref2.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock;

  var _select2 = select('core'),
      canUser = _select2.canUser;

  var _select3 = select('core/editor'),
      getReusableBlock = _select3.__experimentalGetReusableBlock;

  var block = getBlock(clientId);
  var reusableBlock = block && Object(external_this_wp_blocks_["isReusableBlock"])(block) ? getReusableBlock(block.attributes.ref) : null;
  return {
    isVisible: !!reusableBlock && !!canUser('delete', 'blocks', reusableBlock.id),
    isDisabled: reusableBlock && reusableBlock.isTemporary
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref3, _ref4) {
  var clientId = _ref3.clientId,
      _ref3$onToggle = _ref3.onToggle,
      onToggle = _ref3$onToggle === void 0 ? external_lodash_["noop"] : _ref3$onToggle;
  var select = _ref4.select;

  var _dispatch = dispatch('core/editor'),
      deleteReusableBlock = _dispatch.__experimentalDeleteReusableBlock;

  var _select4 = select('core/block-editor'),
      getBlock = _select4.getBlock;

  return {
    onDelete: function onDelete() {
      // TODO: Make this a <Confirm /> component or similar
      // eslint-disable-next-line no-alert
      var hasConfirmed = window.confirm(Object(external_this_wp_i18n_["__"])('Are you sure you want to delete this Reusable Block?\n\n' + 'It will be permanently removed from all posts and pages that use it.'));

      if (hasConfirmed) {
        var block = getBlock(clientId);
        deleteReusableBlock(block.attributes.ref);
        onToggle();
      }
    }
  };
})])(ReusableBlockDeleteButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-settings-menu/block-convert-button.js


/**
 * WordPress dependencies
 */


function BlockConvertButton(_ref) {
  var shouldRender = _ref.shouldRender,
      onClick = _ref.onClick,
      small = _ref.small;

  if (!shouldRender) {
    return null;
  }

  var label = Object(external_this_wp_i18n_["__"])('Convert to Blocks');

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
    className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
    onClick: onClick,
    icon: "screenoptions"
  }, !small && label);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-settings-menu/block-html-convert-button.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/* harmony default export */ var block_html_convert_button = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select, _ref) {
  var clientId = _ref.clientId;
  var block = select('core/block-editor').getBlock(clientId);
  return {
    block: block,
    shouldRender: block && block.name === 'core/html'
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref2) {
  var block = _ref2.block;
  return {
    onClick: function onClick() {
      return dispatch('core/block-editor').replaceBlocks(block.clientId, Object(external_this_wp_blocks_["rawHandler"])({
        HTML: Object(external_this_wp_blocks_["getBlockContent"])(block)
      }));
    }
  };
}))(BlockConvertButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-settings-menu/block-unknown-convert-button.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/* harmony default export */ var block_unknown_convert_button = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select, _ref) {
  var clientId = _ref.clientId;
  var block = select('core/block-editor').getBlock(clientId);
  return {
    block: block,
    shouldRender: block && block.name === Object(external_this_wp_blocks_["getFreeformContentHandlerName"])()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, _ref2) {
  var block = _ref2.block;
  return {
    onClick: function onClick() {
      return dispatch('core/block-editor').replaceBlocks(block.clientId, Object(external_this_wp_blocks_["rawHandler"])({
        HTML: Object(external_this_wp_blocks_["serialize"])(block)
      }));
    }
  };
}))(BlockConvertButton));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-settings-menu/block-settings-menu-first-item.js
/**
 * WordPress dependencies
 */


var block_settings_menu_first_item_createSlotFill = Object(external_this_wp_components_["createSlotFill"])('_BlockSettingsMenuFirstItem'),
    _BlockSettingsMenuFirstItem = block_settings_menu_first_item_createSlotFill.Fill,
    block_settings_menu_first_item_Slot = block_settings_menu_first_item_createSlotFill.Slot;

_BlockSettingsMenuFirstItem.Slot = block_settings_menu_first_item_Slot;
/* harmony default export */ var block_settings_menu_first_item = (_BlockSettingsMenuFirstItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-settings-menu/block-settings-menu-plugins-extension.js
/**
 * WordPress dependencies
 */


var block_settings_menu_plugins_extension_createSlotFill = Object(external_this_wp_components_["createSlotFill"])('_BlockSettingsMenuPluginsExtension'),
    _BlockSettingsMenuPluginsExtension = block_settings_menu_plugins_extension_createSlotFill.Fill,
    block_settings_menu_plugins_extension_Slot = block_settings_menu_plugins_extension_createSlotFill.Slot;

_BlockSettingsMenuPluginsExtension.Slot = block_settings_menu_plugins_extension_Slot;
/* harmony default export */ var block_settings_menu_plugins_extension = (_BlockSettingsMenuPluginsExtension);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-settings-menu/index.js


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */










function BlockSettingsMenu(_ref) {
  var clientIds = _ref.clientIds,
      onSelect = _ref.onSelect;
  var blockClientIds = Object(external_lodash_["castArray"])(clientIds);
  var count = blockClientIds.length;
  var firstBlockClientId = blockClientIds[0];
  return Object(external_this_wp_element_["createElement"])(block_actions, {
    clientIds: clientIds
  }, function (_ref2) {
    var onDuplicate = _ref2.onDuplicate,
        onRemove = _ref2.onRemove,
        onInsertAfter = _ref2.onInsertAfter,
        onInsertBefore = _ref2.onInsertBefore,
        canDuplicate = _ref2.canDuplicate,
        isLocked = _ref2.isLocked;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Dropdown"], {
      contentClassName: "editor-block-settings-menu__popover block-editor-block-settings-menu__popover",
      position: "bottom right",
      renderToggle: function renderToggle(_ref3) {
        var onToggle = _ref3.onToggle,
            isOpen = _ref3.isOpen;
        var toggleClassname = classnames_default()('editor-block-settings-menu__toggle block-editor-block-settings-menu__toggle', {
          'is-opened': isOpen
        });
        var label = isOpen ? Object(external_this_wp_i18n_["__"])('Hide options') : Object(external_this_wp_i18n_["__"])('More options');
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Toolbar"], {
          controls: [{
            icon: 'ellipsis',
            title: label,
            onClick: function onClick() {
              if (count === 1) {
                onSelect(firstBlockClientId);
              }

              onToggle();
            },
            className: toggleClassname,
            extraProps: {
              'aria-expanded': isOpen
            }
          }]
        });
      },
      renderContent: function renderContent(_ref4) {
        var onClose = _ref4.onClose;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["NavigableMenu"], {
          className: "editor-block-settings-menu__content block-editor-block-settings-menu__content"
        }, Object(external_this_wp_element_["createElement"])(block_settings_menu_first_item.Slot, {
          fillProps: {
            onClose: onClose
          }
        }), count === 1 && Object(external_this_wp_element_["createElement"])(block_unknown_convert_button, {
          clientId: firstBlockClientId
        }), count === 1 && Object(external_this_wp_element_["createElement"])(block_html_convert_button, {
          clientId: firstBlockClientId
        }), !isLocked && canDuplicate && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
          className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
          onClick: onDuplicate,
          icon: "admin-page",
          shortcut: shortcuts.duplicate.display
        }, Object(external_this_wp_i18n_["__"])('Duplicate')), !isLocked && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
          className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
          onClick: onInsertBefore,
          icon: "insert-before",
          shortcut: shortcuts.insertBefore.display
        }, Object(external_this_wp_i18n_["__"])('Insert Before')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
          className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
          onClick: onInsertAfter,
          icon: "insert-after",
          shortcut: shortcuts.insertAfter.display
        }, Object(external_this_wp_i18n_["__"])('Insert After'))), count === 1 && Object(external_this_wp_element_["createElement"])(block_mode_toggle, {
          clientId: firstBlockClientId,
          onToggle: onClose
        }), Object(external_this_wp_element_["createElement"])(reusable_block_convert_button, {
          clientIds: clientIds,
          onToggle: onClose
        }), Object(external_this_wp_element_["createElement"])(block_settings_menu_plugins_extension.Slot, {
          fillProps: {
            clientIds: clientIds,
            onClose: onClose
          }
        }), Object(external_this_wp_element_["createElement"])("div", {
          className: "editor-block-settings-menu__separator block-editor-block-settings-menu__separator"
        }), count === 1 && Object(external_this_wp_element_["createElement"])(reusable_block_delete_button, {
          clientId: firstBlockClientId,
          onToggle: onClose
        }), !isLocked && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItem"], {
          className: "editor-block-settings-menu__control block-editor-block-settings-menu__control",
          onClick: onRemove,
          icon: "trash",
          shortcut: shortcuts.removeBlock.display
        }, Object(external_this_wp_i18n_["__"])('Remove Block')));
      }
    });
  });
}
/* harmony default export */ var block_settings_menu = (Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      selectBlock = _dispatch.selectBlock;

  return {
    onSelect: function onSelect(clientId) {
      selectBlock(clientId);
    }
  };
})(BlockSettingsMenu));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-switcher/index.js









/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */





var block_switcher_BlockSwitcher =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockSwitcher, _Component);

  function BlockSwitcher() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BlockSwitcher);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockSwitcher).apply(this, arguments));
    _this.state = {
      hoveredClassName: null
    };
    _this.onHoverClassName = _this.onHoverClassName.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    return _this;
  }

  Object(createClass["a" /* default */])(BlockSwitcher, [{
    key: "onHoverClassName",
    value: function onHoverClassName(className) {
      this.setState({
        hoveredClassName: className
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          blocks = _this$props.blocks,
          onTransform = _this$props.onTransform,
          inserterItems = _this$props.inserterItems,
          hasBlockStyles = _this$props.hasBlockStyles;
      var hoveredClassName = this.state.hoveredClassName;

      if (!blocks || !blocks.length) {
        return null;
      }

      var itemsByName = Object(external_lodash_["mapKeys"])(inserterItems, function (_ref) {
        var name = _ref.name;
        return name;
      });
      var possibleBlockTransformations = Object(external_lodash_["orderBy"])(Object(external_lodash_["filter"])(Object(external_this_wp_blocks_["getPossibleBlockTransformations"])(blocks), function (block) {
        return block && !!itemsByName[block.name];
      }), function (block) {
        return itemsByName[block.name].frecency;
      }, 'desc'); // When selection consists of blocks of multiple types, display an
      // appropriate icon to communicate the non-uniformity.

      var isSelectionOfSameType = Object(external_lodash_["uniq"])(Object(external_lodash_["map"])(blocks, 'name')).length === 1;
      var icon;

      if (isSelectionOfSameType) {
        var sourceBlockName = blocks[0].name;
        var blockType = Object(external_this_wp_blocks_["getBlockType"])(sourceBlockName);
        icon = blockType.icon;
      } else {
        icon = 'layout';
      }

      if (!hasBlockStyles && !possibleBlockTransformations.length) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Toolbar"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
          disabled: true,
          className: "editor-block-switcher__no-switcher-icon block-editor-block-switcher__no-switcher-icon",
          label: Object(external_this_wp_i18n_["__"])('Block icon')
        }, Object(external_this_wp_element_["createElement"])(BlockIcon, {
          icon: icon,
          showColors: true
        })));
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Dropdown"], {
        position: "bottom right",
        className: "editor-block-switcher block-editor-block-switcher",
        contentClassName: "editor-block-switcher__popover block-editor-block-switcher__popover",
        renderToggle: function renderToggle(_ref2) {
          var onToggle = _ref2.onToggle,
              isOpen = _ref2.isOpen;

          var openOnArrowDown = function openOnArrowDown(event) {
            if (!isOpen && event.keyCode === external_this_wp_keycodes_["DOWN"]) {
              event.preventDefault();
              event.stopPropagation();
              onToggle();
            }
          };

          var label = 1 === blocks.length ? Object(external_this_wp_i18n_["__"])('Change block type or style') : Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('Change type of %d block', 'Change type of %d blocks', blocks.length), blocks.length);
          return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Toolbar"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IconButton"], {
            className: "editor-block-switcher__toggle block-editor-block-switcher__toggle",
            onClick: onToggle,
            "aria-haspopup": "true",
            "aria-expanded": isOpen,
            label: label,
            tooltip: label,
            onKeyDown: openOnArrowDown,
            icon: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(BlockIcon, {
              icon: icon,
              showColors: true
            }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SVG"], {
              className: "editor-block-switcher__transform block-editor-block-switcher__transform",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Path"], {
              d: "M6.5 8.9c.6-.6 1.4-.9 2.2-.9h6.9l-1.3 1.3 1.4 1.4L19.4 7l-3.7-3.7-1.4 1.4L15.6 6H8.7c-1.4 0-2.6.5-3.6 1.5l-2.8 2.8 1.4 1.4 2.8-2.8zm13.8 2.4l-2.8 2.8c-.6.6-1.3.9-2.1.9h-7l1.3-1.3-1.4-1.4L4.6 16l3.7 3.7 1.4-1.4L8.4 17h6.9c1.3 0 2.6-.5 3.5-1.5l2.8-2.8-1.3-1.4z"
            })))
          }));
        },
        renderContent: function renderContent(_ref3) {
          var onClose = _ref3.onClose;
          return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, hasBlockStyles && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
            title: Object(external_this_wp_i18n_["__"])('Block Styles'),
            initialOpen: true
          }, Object(external_this_wp_element_["createElement"])(block_styles, {
            clientId: blocks[0].clientId,
            onSwitch: onClose,
            onHoverClassName: _this2.onHoverClassName
          })), possibleBlockTransformations.length !== 0 && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
            title: Object(external_this_wp_i18n_["__"])('Transform To:'),
            initialOpen: true
          }, Object(external_this_wp_element_["createElement"])(block_types_list, {
            items: possibleBlockTransformations.map(function (destinationBlockType) {
              return {
                id: destinationBlockType.name,
                icon: destinationBlockType.icon,
                title: destinationBlockType.title,
                hasChildBlocksWithInserterSupport: Object(external_this_wp_blocks_["hasChildBlocksWithInserterSupport"])(destinationBlockType.name)
              };
            }),
            onSelect: function onSelect(item) {
              onTransform(blocks, item.id);
              onClose();
            }
          })), hoveredClassName !== null && Object(external_this_wp_element_["createElement"])(block_preview, {
            name: blocks[0].name,
            attributes: Object(objectSpread["a" /* default */])({}, blocks[0].attributes, {
              className: hoveredClassName
            })
          }));
        }
      });
    }
  }]);

  return BlockSwitcher;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var block_switcher = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select, _ref4) {
  var clientIds = _ref4.clientIds;

  var _select = select('core/block-editor'),
      getBlocksByClientId = _select.getBlocksByClientId,
      getBlockRootClientId = _select.getBlockRootClientId,
      getInserterItems = _select.getInserterItems;

  var _select2 = select('core/blocks'),
      getBlockStyles = _select2.getBlockStyles;

  var rootClientId = getBlockRootClientId(Object(external_lodash_["first"])(Object(external_lodash_["castArray"])(clientIds)));
  var blocks = getBlocksByClientId(clientIds);
  var firstBlock = blocks && blocks.length === 1 ? blocks[0] : null;
  var styles = firstBlock && getBlockStyles(firstBlock.name);
  return {
    blocks: blocks,
    inserterItems: getInserterItems(rootClientId),
    hasBlockStyles: styles && styles.length > 0
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  return {
    onTransform: function onTransform(blocks, name) {
      dispatch('core/block-editor').replaceBlocks(ownProps.clientIds, Object(external_this_wp_blocks_["switchToBlockType"])(blocks, name));
    }
  };
}))(block_switcher_BlockSwitcher));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-switcher/multi-blocks-switcher.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function MultiBlocksSwitcher(_ref) {
  var isMultiBlockSelection = _ref.isMultiBlockSelection,
      selectedBlockClientIds = _ref.selectedBlockClientIds;

  if (!isMultiBlockSelection) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(block_switcher, {
    key: "switcher",
    clientIds: selectedBlockClientIds
  });
}
/* harmony default export */ var multi_blocks_switcher = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var selectedBlockClientIds = select('core/block-editor').getMultiSelectedBlockClientIds();
  return {
    isMultiBlockSelection: selectedBlockClientIds.length > 1,
    selectedBlockClientIds: selectedBlockClientIds
  };
})(MultiBlocksSwitcher));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-toolbar/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */







function BlockToolbar(_ref) {
  var blockClientIds = _ref.blockClientIds,
      isValid = _ref.isValid,
      mode = _ref.mode;

  if (blockClientIds.length === 0) {
    return null;
  }

  if (blockClientIds.length > 1) {
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "editor-block-toolbar block-editor-block-toolbar"
    }, Object(external_this_wp_element_["createElement"])(multi_blocks_switcher, null), Object(external_this_wp_element_["createElement"])(block_settings_menu, {
      clientIds: blockClientIds
    }));
  }

  return Object(external_this_wp_element_["createElement"])("div", {
    className: "editor-block-toolbar block-editor-block-toolbar"
  }, mode === 'visual' && isValid && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(block_switcher, {
    clientIds: blockClientIds
  }), Object(external_this_wp_element_["createElement"])(block_controls.Slot, null), Object(external_this_wp_element_["createElement"])(block_format_controls.Slot, null)), Object(external_this_wp_element_["createElement"])(block_settings_menu, {
    clientIds: blockClientIds
  }));
}

/* harmony default export */ var block_toolbar = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getBlockMode = _select.getBlockMode,
      getMultiSelectedBlockClientIds = _select.getMultiSelectedBlockClientIds,
      isBlockValid = _select.isBlockValid;

  var selectedBlockClientId = getSelectedBlockClientId();
  var blockClientIds = selectedBlockClientId ? [selectedBlockClientId] : getMultiSelectedBlockClientIds();
  return {
    blockClientIds: blockClientIds,
    isValid: selectedBlockClientId ? isBlockValid(selectedBlockClientId) : null,
    mode: selectedBlockClientId ? getBlockMode(selectedBlockClientId) : null
  };
})(BlockToolbar));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/copy-handler/index.js


/**
 * WordPress dependencies
 */





function CopyHandler(_ref) {
  var children = _ref.children,
      onCopy = _ref.onCopy,
      onCut = _ref.onCut;
  return Object(external_this_wp_element_["createElement"])("div", {
    onCopy: onCopy,
    onCut: onCut
  }, children);
}

/* harmony default export */ var copy_handler = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withDispatch"])(function (dispatch, ownProps, _ref2) {
  var select = _ref2.select;

  var _select = select('core/block-editor'),
      getBlocksByClientId = _select.getBlocksByClientId,
      getMultiSelectedBlockClientIds = _select.getMultiSelectedBlockClientIds,
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      hasMultiSelection = _select.hasMultiSelection;

  var _dispatch = dispatch('core/block-editor'),
      removeBlocks = _dispatch.removeBlocks;

  var onCopy = function onCopy(event) {
    var selectedBlockClientIds = getSelectedBlockClientId() ? [getSelectedBlockClientId()] : getMultiSelectedBlockClientIds();

    if (selectedBlockClientIds.length === 0) {
      return;
    } // Let native copy behaviour take over in input fields.


    if (!hasMultiSelection() && Object(external_this_wp_dom_["documentHasSelection"])()) {
      return;
    }

    var serialized = Object(external_this_wp_blocks_["serialize"])(getBlocksByClientId(selectedBlockClientIds));
    event.clipboardData.setData('text/plain', serialized);
    event.clipboardData.setData('text/html', serialized);
    event.preventDefault();
  };

  return {
    onCopy: onCopy,
    onCut: function onCut(event) {
      onCopy(event);

      if (hasMultiSelection()) {
        var selectedBlockClientIds = getSelectedBlockClientId() ? [getSelectedBlockClientId()] : getMultiSelectedBlockClientIds();
        removeBlocks(selectedBlockClientIds);
      }
    }
  };
})])(CopyHandler));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/multi-select-scroll-into-view/index.js






/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var multi_select_scroll_into_view_MultiSelectScrollIntoView =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(MultiSelectScrollIntoView, _Component);

  function MultiSelectScrollIntoView() {
    Object(classCallCheck["a" /* default */])(this, MultiSelectScrollIntoView);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MultiSelectScrollIntoView).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MultiSelectScrollIntoView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // Relies on expectation that `componentDidUpdate` will only be called
      // if value of `extentClientId` changes.
      this.scrollIntoView();
    }
    /**
     * Ensures that if a multi-selection exists, the extent of the selection is
     * visible within the nearest scrollable container.
     *
     * @return {void}
     */

  }, {
    key: "scrollIntoView",
    value: function scrollIntoView() {
      var extentClientId = this.props.extentClientId;

      if (!extentClientId) {
        return;
      }

      var extentNode = getBlockDOMNode(extentClientId);

      if (!extentNode) {
        return;
      }

      var scrollContainer = Object(external_this_wp_dom_["getScrollContainer"])(extentNode); // If there's no scroll container, it follows that there's no scrollbar
      // and thus there's no need to try to scroll into view.

      if (!scrollContainer) {
        return;
      }

      dom_scroll_into_view_lib_default()(extentNode, scrollContainer, {
        onlyScrollIfNeeded: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return MultiSelectScrollIntoView;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var multi_select_scroll_into_view = (Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getLastMultiSelectedBlockClientId = _select.getLastMultiSelectedBlockClientId;

  return {
    extentClientId: getLastMultiSelectedBlockClientId()
  };
})(multi_select_scroll_into_view_MultiSelectScrollIntoView));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/observe-typing/index.js








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Set of key codes upon which typing is to be initiated on a keydown event.
 *
 * @type {number[]}
 */

var KEY_DOWN_ELIGIBLE_KEY_CODES = [external_this_wp_keycodes_["UP"], external_this_wp_keycodes_["RIGHT"], external_this_wp_keycodes_["DOWN"], external_this_wp_keycodes_["LEFT"], external_this_wp_keycodes_["ENTER"], external_this_wp_keycodes_["BACKSPACE"]];
/**
 * Returns true if a given keydown event can be inferred as intent to start
 * typing, or false otherwise. A keydown is considered eligible if it is a
 * text navigation without shift active.
 *
 * @param {KeyboardEvent} event Keydown event to test.
 *
 * @return {boolean} Whether event is eligible to start typing.
 */

function isKeyDownEligibleForStartTyping(event) {
  var keyCode = event.keyCode,
      shiftKey = event.shiftKey;
  return !shiftKey && Object(external_lodash_["includes"])(KEY_DOWN_ELIGIBLE_KEY_CODES, keyCode);
}

var observe_typing_ObserveTyping =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ObserveTyping, _Component);

  function ObserveTyping() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ObserveTyping);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ObserveTyping).apply(this, arguments));
    _this.stopTypingOnSelectionUncollapse = _this.stopTypingOnSelectionUncollapse.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.stopTypingOnMouseMove = _this.stopTypingOnMouseMove.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.startTypingInTextField = _this.startTypingInTextField.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.stopTypingOnNonTextField = _this.stopTypingOnNonTextField.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.stopTypingOnEscapeKey = _this.stopTypingOnEscapeKey.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.onKeyDown = Object(external_lodash_["over"])([_this.startTypingInTextField, _this.stopTypingOnEscapeKey]);
    _this.lastMouseMove = null;
    return _this;
  }

  Object(createClass["a" /* default */])(ObserveTyping, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.toggleEventBindings(this.props.isTyping);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isTyping !== prevProps.isTyping) {
        this.toggleEventBindings(this.props.isTyping);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleEventBindings(false);
    }
    /**
     * Bind or unbind events to the document when typing has started or stopped
     * respectively, or when component has become unmounted.
     *
     * @param {boolean} isBound Whether event bindings should be applied.
     */

  }, {
    key: "toggleEventBindings",
    value: function toggleEventBindings(isBound) {
      var bindFn = isBound ? 'addEventListener' : 'removeEventListener';
      document[bindFn]('selectionchange', this.stopTypingOnSelectionUncollapse);
      document[bindFn]('mousemove', this.stopTypingOnMouseMove);
    }
    /**
     * On mouse move, unset typing flag if user has moved cursor.
     *
     * @param {MouseEvent} event Mousemove event.
     */

  }, {
    key: "stopTypingOnMouseMove",
    value: function stopTypingOnMouseMove(event) {
      var clientX = event.clientX,
          clientY = event.clientY; // We need to check that the mouse really moved because Safari triggers
      // mousemove events when shift or ctrl are pressed.

      if (this.lastMouseMove) {
        var _this$lastMouseMove = this.lastMouseMove,
            lastClientX = _this$lastMouseMove.clientX,
            lastClientY = _this$lastMouseMove.clientY;

        if (lastClientX !== clientX || lastClientY !== clientY) {
          this.props.onStopTyping();
        }
      }

      this.lastMouseMove = {
        clientX: clientX,
        clientY: clientY
      };
    }
    /**
     * On selection change, unset typing flag if user has made an uncollapsed
     * (shift) selection.
     */

  }, {
    key: "stopTypingOnSelectionUncollapse",
    value: function stopTypingOnSelectionUncollapse() {
      var selection = window.getSelection();
      var isCollapsed = selection.rangeCount > 0 && selection.getRangeAt(0).collapsed;

      if (!isCollapsed) {
        this.props.onStopTyping();
      }
    }
    /**
     * Unsets typing flag if user presses Escape while typing flag is active.
     *
     * @param {KeyboardEvent} event Keypress or keydown event to interpret.
     */

  }, {
    key: "stopTypingOnEscapeKey",
    value: function stopTypingOnEscapeKey(event) {
      if (this.props.isTyping && event.keyCode === external_this_wp_keycodes_["ESCAPE"]) {
        this.props.onStopTyping();
      }
    }
    /**
     * Handles a keypress or keydown event to infer intention to start typing.
     *
     * @param {KeyboardEvent} event Keypress or keydown event to interpret.
     */

  }, {
    key: "startTypingInTextField",
    value: function startTypingInTextField(event) {
      var _this$props = this.props,
          isTyping = _this$props.isTyping,
          onStartTyping = _this$props.onStartTyping;
      var type = event.type,
          target = event.target; // Abort early if already typing, or key press is incurred outside a
      // text field (e.g. arrow-ing through toolbar buttons).
      // Ignore typing in a block toolbar

      if (isTyping || !Object(external_this_wp_dom_["isTextField"])(target) || target.closest('.block-editor-block-toolbar')) {
        return;
      } // Special-case keydown because certain keys do not emit a keypress
      // event. Conversely avoid keydown as the canonical event since there
      // are many keydown which are explicitly not targeted for typing.


      if (type === 'keydown' && !isKeyDownEligibleForStartTyping(event)) {
        return;
      }

      onStartTyping();
    }
    /**
     * Stops typing when focus transitions to a non-text field element.
     *
     * @param {FocusEvent} event Focus event.
     */

  }, {
    key: "stopTypingOnNonTextField",
    value: function stopTypingOnNonTextField(event) {
      var _this2 = this;

      event.persist(); // Since focus to a non-text field via arrow key will trigger before
      // the keydown event, wait until after current stack before evaluating
      // whether typing is to be stopped. Otherwise, typing will re-start.

      this.props.setTimeout(function () {
        var _this2$props = _this2.props,
            isTyping = _this2$props.isTyping,
            onStopTyping = _this2$props.onStopTyping;
        var target = event.target;

        if (isTyping && !Object(external_this_wp_dom_["isTextField"])(target)) {
          onStopTyping();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children; // Disable reason: This component is responsible for capturing bubbled
      // keyboard events which are interpreted as typing intent.

      /* eslint-disable jsx-a11y/no-static-element-interactions */

      return Object(external_this_wp_element_["createElement"])("div", {
        onFocus: this.stopTypingOnNonTextField,
        onKeyPress: this.startTypingInTextField,
        onKeyDown: this.onKeyDown
      }, children);
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    }
  }]);

  return ObserveTyping;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var observe_typing = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      isTyping = _select.isTyping;

  return {
    isTyping: isTyping()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      startTyping = _dispatch.startTyping,
      stopTyping = _dispatch.stopTyping;

  return {
    onStartTyping: startTyping,
    onStopTyping: stopTyping
  };
}), external_this_wp_compose_["withSafeTimeout"]])(observe_typing_ObserveTyping));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/preserve-scroll-in-reorder/index.js






/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Non-visual component which preserves offset of selected block within nearest
 * scrollable container while reordering.
 *
 * @example
 *
 * ```jsx
 * <PreserveScrollInReorder />
 * ```
 */

var preserve_scroll_in_reorder_PreserveScrollInReorder =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PreserveScrollInReorder, _Component);

  function PreserveScrollInReorder() {
    Object(classCallCheck["a" /* default */])(this, PreserveScrollInReorder);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PreserveScrollInReorder).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(PreserveScrollInReorder, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var _this$props = this.props,
          blockOrder = _this$props.blockOrder,
          selectionStart = _this$props.selectionStart;

      if (blockOrder !== prevProps.blockOrder && selectionStart) {
        return this.getOffset(selectionStart);
      }

      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (snapshot) {
        this.restorePreviousOffset(snapshot);
      }
    }
    /**
     * Given the block client ID of the start of the selection, saves the
     * block's top offset as an instance property before a reorder is to occur.
     *
     * @param {string} selectionStart Client ID of selected block.
     *
     * @return {number?} The scroll offset.
     */

  }, {
    key: "getOffset",
    value: function getOffset(selectionStart) {
      var blockNode = getBlockDOMNode(selectionStart);

      if (!blockNode) {
        return null;
      }

      return blockNode.getBoundingClientRect().top;
    }
    /**
     * After a block reordering, restores the previous viewport top offset.
     *
     * @param {number} offset The scroll offset.
     */

  }, {
    key: "restorePreviousOffset",
    value: function restorePreviousOffset(offset) {
      var selectionStart = this.props.selectionStart;
      var blockNode = getBlockDOMNode(selectionStart);

      if (blockNode) {
        var scrollContainer = Object(external_this_wp_dom_["getScrollContainer"])(blockNode);

        if (scrollContainer) {
          scrollContainer.scrollTop = scrollContainer.scrollTop + blockNode.getBoundingClientRect().top - offset;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return PreserveScrollInReorder;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var preserve_scroll_in_reorder = (Object(external_this_wp_data_["withSelect"])(function (select) {
  return {
    blockOrder: select('core/block-editor').getBlockOrder(),
    selectionStart: select('core/block-editor').getBlockSelectionStart()
  };
})(preserve_scroll_in_reorder_PreserveScrollInReorder));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/writing-flow/index.js








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * Browser constants
 */

var writing_flow_window = window,
    writing_flow_getSelection = writing_flow_window.getSelection,
    writing_flow_getComputedStyle = writing_flow_window.getComputedStyle;
/**
 * Given an element, returns true if the element is a tabbable text field, or
 * false otherwise.
 *
 * @param {Element} element Element to test.
 *
 * @return {boolean} Whether element is a tabbable text field.
 */

var isTabbableTextField = Object(external_lodash_["overEvery"])([external_this_wp_dom_["isTextField"], external_this_wp_dom_["focus"].tabbable.isTabbableIndex]);
/**
 * Returns true if the element should consider edge navigation upon a keyboard
 * event of the given directional key code, or false otherwise.
 *
 * @param {Element} element     HTML element to test.
 * @param {number}  keyCode     KeyboardEvent keyCode to test.
 * @param {boolean} hasModifier Whether a modifier is pressed.
 *
 * @return {boolean} Whether element should consider edge navigation.
 */

function isNavigationCandidate(element, keyCode, hasModifier) {
  var isVertical = keyCode === external_this_wp_keycodes_["UP"] || keyCode === external_this_wp_keycodes_["DOWN"]; // Currently, all elements support unmodified vertical navigation.

  if (isVertical && !hasModifier) {
    return true;
  } // Native inputs should not navigate horizontally.


  var tagName = element.tagName;
  return tagName !== 'INPUT' && tagName !== 'TEXTAREA';
}

var writing_flow_WritingFlow =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(WritingFlow, _Component);

  function WritingFlow() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, WritingFlow);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(WritingFlow).apply(this, arguments));
    _this.onKeyDown = _this.onKeyDown.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.bindContainer = _this.bindContainer.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.clearVerticalRect = _this.clearVerticalRect.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    _this.focusLastTextField = _this.focusLastTextField.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));
    /**
     * Here a rectangle is stored while moving the caret vertically so
     * vertical position of the start position can be restored.
     * This is to recreate browser behaviour across blocks.
     *
     * @type {?DOMRect}
     */

    _this.verticalRect = null;
    return _this;
  }

  Object(createClass["a" /* default */])(WritingFlow, [{
    key: "bindContainer",
    value: function bindContainer(ref) {
      this.container = ref;
    }
  }, {
    key: "clearVerticalRect",
    value: function clearVerticalRect() {
      this.verticalRect = null;
    }
    /**
     * Returns the optimal tab target from the given focused element in the
     * desired direction. A preference is made toward text fields, falling back
     * to the block focus stop if no other candidates exist for the block.
     *
     * @param {Element} target    Currently focused text field.
     * @param {boolean} isReverse True if considering as the first field.
     *
     * @return {?Element} Optimal tab target, if one exists.
     */

  }, {
    key: "getClosestTabbable",
    value: function getClosestTabbable(target, isReverse) {
      // Since the current focus target is not guaranteed to be a text field,
      // find all focusables. Tabbability is considered later.
      var focusableNodes = external_this_wp_dom_["focus"].focusable.find(this.container);

      if (isReverse) {
        focusableNodes = Object(external_lodash_["reverse"])(focusableNodes);
      } // Consider as candidates those focusables after the current target.
      // It's assumed this can only be reached if the target is focusable
      // (on its keydown event), so no need to verify it exists in the set.


      focusableNodes = focusableNodes.slice(focusableNodes.indexOf(target) + 1);

      function isTabCandidate(node, i, array) {
        // Not a candidate if the node is not tabbable.
        if (!external_this_wp_dom_["focus"].tabbable.isTabbableIndex(node)) {
          return false;
        } // Prefer text fields...


        if (Object(external_this_wp_dom_["isTextField"])(node)) {
          return true;
        } // ...but settle for block focus stop.


        if (!isBlockFocusStop(node)) {
          return false;
        } // If element contains inner blocks, stop immediately at its focus
        // wrapper.


        if (hasInnerBlocksContext(node)) {
          return true;
        } // If navigating out of a block (in reverse), don't consider its
        // block focus stop.


        if (node.contains(target)) {
          return false;
        } // In case of block focus stop, check to see if there's a better
        // text field candidate within.


        for (var offset = 1, nextNode; nextNode = array[i + offset]; offset++) {
          // Abort if no longer testing descendents of focus stop.
          if (!node.contains(nextNode)) {
            break;
          } // Apply same tests by recursion. This is important to consider
          // nestable blocks where we don't want to settle for the inner
          // block focus stop.


          if (isTabCandidate(nextNode, i + offset, array)) {
            return false;
          }
        }

        return true;
      }

      return Object(external_lodash_["find"])(focusableNodes, isTabCandidate);
    }
  }, {
    key: "expandSelection",
    value: function expandSelection(isReverse) {
      var _this$props = this.props,
          selectedBlockClientId = _this$props.selectedBlockClientId,
          selectionStartClientId = _this$props.selectionStartClientId,
          selectionBeforeEndClientId = _this$props.selectionBeforeEndClientId,
          selectionAfterEndClientId = _this$props.selectionAfterEndClientId;
      var nextSelectionEndClientId = isReverse ? selectionBeforeEndClientId : selectionAfterEndClientId;

      if (nextSelectionEndClientId) {
        this.props.onMultiSelect(selectionStartClientId || selectedBlockClientId, nextSelectionEndClientId);
      }
    }
  }, {
    key: "moveSelection",
    value: function moveSelection(isReverse) {
      var _this$props2 = this.props,
          selectedFirstClientId = _this$props2.selectedFirstClientId,
          selectedLastClientId = _this$props2.selectedLastClientId;
      var focusedBlockClientId = isReverse ? selectedFirstClientId : selectedLastClientId;

      if (focusedBlockClientId) {
        this.props.onSelectBlock(focusedBlockClientId);
      }
    }
    /**
     * Returns true if the given target field is the last in its block which
     * can be considered for tab transition. For example, in a block with two
     * text fields, this would return true when reversing from the first of the
     * two fields, but false when reversing from the second.
     *
     * @param {Element} target    Currently focused text field.
     * @param {boolean} isReverse True if considering as the first field.
     *
     * @return {boolean} Whether field is at edge for tab transition.
     */

  }, {
    key: "isTabbableEdge",
    value: function isTabbableEdge(target, isReverse) {
      var closestTabbable = this.getClosestTabbable(target, isReverse);
      return !closestTabbable || !isInSameBlock(target, closestTabbable);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var _this$props3 = this.props,
          hasMultiSelection = _this$props3.hasMultiSelection,
          onMultiSelect = _this$props3.onMultiSelect,
          blocks = _this$props3.blocks,
          selectionBeforeEndClientId = _this$props3.selectionBeforeEndClientId,
          selectionAfterEndClientId = _this$props3.selectionAfterEndClientId;
      var keyCode = event.keyCode,
          target = event.target;
      var isUp = keyCode === external_this_wp_keycodes_["UP"];
      var isDown = keyCode === external_this_wp_keycodes_["DOWN"];
      var isLeft = keyCode === external_this_wp_keycodes_["LEFT"];
      var isRight = keyCode === external_this_wp_keycodes_["RIGHT"];
      var isReverse = isUp || isLeft;
      var isHorizontal = isLeft || isRight;
      var isVertical = isUp || isDown;
      var isNav = isHorizontal || isVertical;
      var isShift = event.shiftKey;
      var hasModifier = isShift || event.ctrlKey || event.altKey || event.metaKey;
      var isNavEdge = isVertical ? external_this_wp_dom_["isVerticalEdge"] : external_this_wp_dom_["isHorizontalEdge"]; // When presing any key other than up or down, the initial vertical
      // position must ALWAYS be reset. The vertical position is saved so it
      // can be restored as well as possible on sebsequent vertical arrow key
      // presses. It may not always be possible to restore the exact same
      // position (such as at an empty line), so it wouldn't be good to
      // compute the position right before any vertical arrow key press.

      if (!isVertical) {
        this.verticalRect = null;
      } else if (!this.verticalRect) {
        this.verticalRect = Object(external_this_wp_dom_["computeCaretRect"])(target);
      } // This logic inside this condition needs to be checked before
      // the check for event.nativeEvent.defaultPrevented.
      // The logic handles meta+a keypress and this event is default prevented
      // by RichText.


      if (!isNav) {
        // Set immediately before the meta+a combination can be pressed.
        if (external_this_wp_keycodes_["isKeyboardEvent"].primary(event)) {
          this.isEntirelySelected = Object(external_this_wp_dom_["isEntirelySelected"])(target);
        }

        if (external_this_wp_keycodes_["isKeyboardEvent"].primary(event, 'a')) {
          // When the target is contentEditable, selection will already
          // have been set by the browser earlier in this call stack. We
          // need check the previous result, otherwise all blocks will be
          // selected right away.
          if (target.isContentEditable ? this.isEntirelySelected : Object(external_this_wp_dom_["isEntirelySelected"])(target)) {
            onMultiSelect(Object(external_lodash_["first"])(blocks), Object(external_lodash_["last"])(blocks));
            event.preventDefault();
          } // After pressing primary + A we can assume isEntirelySelected is true.
          // Calling right away isEntirelySelected after primary + A may still return false on some browsers.


          this.isEntirelySelected = true;
        }

        return;
      } // Abort if navigation has already been handled (e.g. RichText inline
      // boundaries).


      if (event.nativeEvent.defaultPrevented) {
        return;
      } // Abort if our current target is not a candidate for navigation (e.g.
      // preserve native input behaviors).


      if (!isNavigationCandidate(target, keyCode, hasModifier)) {
        return;
      } // In the case of RTL scripts, right means previous and left means next,
      // which is the exact reverse of LTR.


      var _getComputedStyle = writing_flow_getComputedStyle(target),
          direction = _getComputedStyle.direction;

      var isReverseDir = direction === 'rtl' ? !isReverse : isReverse;

      if (isShift) {
        if (( // Ensure that there is a target block.
        isReverse && selectionBeforeEndClientId || !isReverse && selectionAfterEndClientId) && (hasMultiSelection || this.isTabbableEdge(target, isReverse) && isNavEdge(target, isReverse))) {
          // Shift key is down, and there is multi selection or we're at
          // the end of the current block.
          this.expandSelection(isReverse);
          event.preventDefault();
        }
      } else if (hasMultiSelection) {
        // Moving from block multi-selection to single block selection
        this.moveSelection(isReverse);
        event.preventDefault();
      } else if (isVertical && Object(external_this_wp_dom_["isVerticalEdge"])(target, isReverse)) {
        var closestTabbable = this.getClosestTabbable(target, isReverse);

        if (closestTabbable) {
          Object(external_this_wp_dom_["placeCaretAtVerticalEdge"])(closestTabbable, isReverse, this.verticalRect);
          event.preventDefault();
        }
      } else if (isHorizontal && writing_flow_getSelection().isCollapsed && Object(external_this_wp_dom_["isHorizontalEdge"])(target, isReverseDir)) {
        var _closestTabbable = this.getClosestTabbable(target, isReverseDir);

        Object(external_this_wp_dom_["placeCaretAtHorizontalEdge"])(_closestTabbable, isReverseDir);
        event.preventDefault();
      }
    }
    /**
     * Sets focus to the end of the last tabbable text field, if one exists.
     */

  }, {
    key: "focusLastTextField",
    value: function focusLastTextField() {
      var focusableNodes = external_this_wp_dom_["focus"].focusable.find(this.container);
      var target = Object(external_lodash_["findLast"])(focusableNodes, isTabbableTextField);

      if (target) {
        Object(external_this_wp_dom_["placeCaretAtHorizontalEdge"])(target, true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children; // Disable reason: Wrapper itself is non-interactive, but must capture
      // bubbling events from children to determine focus transition intents.

      /* eslint-disable jsx-a11y/no-static-element-interactions */

      return Object(external_this_wp_element_["createElement"])("div", {
        className: "editor-writing-flow block-editor-writing-flow"
      }, Object(external_this_wp_element_["createElement"])("div", {
        ref: this.bindContainer,
        onKeyDown: this.onKeyDown,
        onMouseDown: this.clearVerticalRect
      }, children), Object(external_this_wp_element_["createElement"])("div", {
        "aria-hidden": true,
        tabIndex: -1,
        onClick: this.focusLastTextField,
        className: "wp-block editor-writing-flow__click-redirect block-editor-writing-flow__click-redirect"
      }));
      /* eslint-disable jsx-a11y/no-static-element-interactions */
    }
  }]);

  return WritingFlow;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var writing_flow = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getMultiSelectedBlocksStartClientId = _select.getMultiSelectedBlocksStartClientId,
      getMultiSelectedBlocksEndClientId = _select.getMultiSelectedBlocksEndClientId,
      getPreviousBlockClientId = _select.getPreviousBlockClientId,
      getNextBlockClientId = _select.getNextBlockClientId,
      getFirstMultiSelectedBlockClientId = _select.getFirstMultiSelectedBlockClientId,
      getLastMultiSelectedBlockClientId = _select.getLastMultiSelectedBlockClientId,
      hasMultiSelection = _select.hasMultiSelection,
      getBlockOrder = _select.getBlockOrder;

  var selectedBlockClientId = getSelectedBlockClientId();
  var selectionStartClientId = getMultiSelectedBlocksStartClientId();
  var selectionEndClientId = getMultiSelectedBlocksEndClientId();
  return {
    selectedBlockClientId: selectedBlockClientId,
    selectionStartClientId: selectionStartClientId,
    selectionBeforeEndClientId: getPreviousBlockClientId(selectionEndClientId || selectedBlockClientId),
    selectionAfterEndClientId: getNextBlockClientId(selectionEndClientId || selectedBlockClientId),
    selectedFirstClientId: getFirstMultiSelectedBlockClientId(),
    selectedLastClientId: getLastMultiSelectedBlockClientId(),
    hasMultiSelection: hasMultiSelection(),
    blocks: getBlockOrder()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      multiSelect = _dispatch.multiSelect,
      selectBlock = _dispatch.selectBlock;

  return {
    onMultiSelect: multiSelect,
    onSelectBlock: selectBlock
  };
})])(writing_flow_WritingFlow));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/provider/index.js







/**
 * WordPress dependencies
 */





var provider_BlockEditorProvider =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(BlockEditorProvider, _Component);

  function BlockEditorProvider() {
    Object(classCallCheck["a" /* default */])(this, BlockEditorProvider);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BlockEditorProvider).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(BlockEditorProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.updateSettings(this.props.settings);
      this.props.resetBlocks(this.props.value);
      this.attachChangeObserver(this.props.registry);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          settings = _this$props.settings,
          updateSettings = _this$props.updateSettings,
          value = _this$props.value,
          resetBlocks = _this$props.resetBlocks,
          registry = _this$props.registry;

      if (settings !== prevProps.settings) {
        updateSettings(settings);
      }

      if (registry !== prevProps.registry) {
        this.attachChangeObserver(registry);
      }

      if (this.isSyncingOutcomingValue) {
        this.isSyncingOutcomingValue = false;
      } else if (value !== prevProps.value) {
        this.isSyncingIncomingValue = true;
        resetBlocks(value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }
    /**
     * Given a registry object, overrides the default dispatch behavior for the
     * `core/block-editor` store to interpret a state change and decide whether
     * we should call `onChange` or `onInput` depending on whether the change
     * is persistent or not.
     *
     * This needs to be done synchronously after state changes (instead of using
     * `componentDidUpdate`) in order to avoid batching these changes.
     *
     * @param {WPDataRegistry} registry     Registry from which block editor
     *                                      dispatch is to be overriden.
     */

  }, {
    key: "attachChangeObserver",
    value: function attachChangeObserver(registry) {
      var _this = this;

      if (this.unsubscribe) {
        this.unsubscribe();
      }

      var _registry$select = registry.select('core/block-editor'),
          getBlocks = _registry$select.getBlocks,
          isLastBlockChangePersistent = _registry$select.isLastBlockChangePersistent,
          __unstableIsLastBlockChangeIgnored = _registry$select.__unstableIsLastBlockChangeIgnored;

      var blocks = getBlocks();
      var isPersistent = isLastBlockChangePersistent();
      this.unsubscribe = registry.subscribe(function () {
        var _this$props2 = _this.props,
            onChange = _this$props2.onChange,
            onInput = _this$props2.onInput;
        var newBlocks = getBlocks();
        var newIsPersistent = isLastBlockChangePersistent();

        if (newBlocks !== blocks && (_this.isSyncingIncomingValue || __unstableIsLastBlockChangeIgnored())) {
          _this.isSyncingIncomingValue = false;
          blocks = newBlocks;
          isPersistent = newIsPersistent;
          return;
        }

        if (newBlocks !== blocks || // This happens when a previous input is explicitely marked as persistent.
        newIsPersistent && !isPersistent) {
          // When knowing the blocks value is changing, assign instance
          // value to skip reset in subsequent `componentDidUpdate`.
          if (newBlocks !== blocks) {
            _this.isSyncingOutcomingValue = true;
          }

          blocks = newBlocks;
          isPersistent = newIsPersistent;

          if (isPersistent) {
            onChange(blocks);
          } else {
            onInput(blocks);
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["SlotFillProvider"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["DropZoneProvider"], null, children));
    }
  }]);

  return BlockEditorProvider;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var provider = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      updateSettings = _dispatch.updateSettings,
      resetBlocks = _dispatch.resetBlocks;

  return {
    updateSettings: updateSettings,
    resetBlocks: resetBlocks
  };
}), external_this_wp_data_["withRegistry"]])(provider_BlockEditorProvider));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/index.js
// Block Creation Components
























 // Content Related Components





















 // State Related Components



// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/hooks/align.js




/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * An array which includes all possible valid alignments,
 * used to validate if an alignment is valid or not.
 *
 * @constant
 * @type {string[]}
*/

var ALL_ALIGNMENTS = ['left', 'center', 'right', 'wide', 'full'];
/**
 * An array which includes all wide alignments.
 * In order for this alignments to be valid they need to be supported by the block,
 * and by the theme.
 *
 * @constant
 * @type {string[]}
*/

var WIDE_ALIGNMENTS = ['wide', 'full'];
/**
 * Returns the valid alignments.
 * Takes into consideration the aligns supported by a block, if the block supports wide controls or not and if theme supports wide controls or not.
 * Exported just for testing purposes, not exported outside the module.
 *
 * @param {?boolean|string[]} blockAlign          Aligns supported by the block.
 * @param {?boolean}          hasWideBlockSupport True if block supports wide alignments. And False otherwise.
 * @param {?boolean}          hasWideEnabled      True if theme supports wide alignments. And False otherwise.
 *
 * @return {string[]} Valid alignments.
 */

function getValidAlignments(blockAlign) {
  var hasWideBlockSupport = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var hasWideEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var validAlignments;

  if (Array.isArray(blockAlign)) {
    validAlignments = blockAlign;
  } else if (blockAlign === true) {
    // `true` includes all alignments...
    validAlignments = ALL_ALIGNMENTS;
  } else {
    validAlignments = [];
  }

  if (!hasWideEnabled || blockAlign === true && !hasWideBlockSupport) {
    return external_lodash_["without"].apply(void 0, [validAlignments].concat(WIDE_ALIGNMENTS));
  }

  return validAlignments;
}
/**
 * Filters registered block settings, extending attributes to include `align`.
 *
 * @param  {Object} settings Original block settings
 * @return {Object}          Filtered block settings
 */

function addAttribute(settings) {
  // allow blocks to specify their own attribute definition with default values if needed.
  if (Object(external_lodash_["has"])(settings.attributes, ['align', 'type'])) {
    return settings;
  }

  if (Object(external_this_wp_blocks_["hasBlockSupport"])(settings, 'align')) {
    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = Object(external_lodash_["assign"])(settings.attributes, {
      align: {
        type: 'string'
      }
    });
  }

  return settings;
}
/**
 * Override the default edit UI to include new toolbar controls for block
 * alignment, if block defines support.
 *
 * @param  {Function} BlockEdit Original component
 * @return {Function}           Wrapped component
 */

var withToolbarControls = Object(external_this_wp_compose_["createHigherOrderComponent"])(function (BlockEdit) {
  return function (props) {
    var blockName = props.name; // Compute valid alignments without taking into account,
    // if the theme supports wide alignments or not.
    // BlockAlignmentToolbar takes into account the theme support.

    var validAlignments = getValidAlignments(Object(external_this_wp_blocks_["getBlockSupport"])(blockName, 'align'), Object(external_this_wp_blocks_["hasBlockSupport"])(blockName, 'alignWide', true));

    var updateAlignment = function updateAlignment(nextAlign) {
      if (!nextAlign) {
        var blockType = Object(external_this_wp_blocks_["getBlockType"])(props.name);
        var blockDefaultAlign = Object(external_lodash_["get"])(blockType, ['attributes', 'align', 'default']);

        if (blockDefaultAlign) {
          nextAlign = '';
        }
      }

      props.setAttributes({
        align: nextAlign
      });
    };

    return [validAlignments.length > 0 && props.isSelected && Object(external_this_wp_element_["createElement"])(block_controls, {
      key: "align-controls"
    }, Object(external_this_wp_element_["createElement"])(block_alignment_toolbar, {
      value: props.attributes.align,
      onChange: updateAlignment,
      controls: validAlignments
    })), Object(external_this_wp_element_["createElement"])(BlockEdit, Object(esm_extends["a" /* default */])({
      key: "edit"
    }, props))];
  };
}, 'withToolbarControls'); // Exported just for testing purposes, not exported outside the module.

var align_insideSelectWithDataAlign = function insideSelectWithDataAlign(BlockListBlock) {
  return function (props) {
    var name = props.name,
        attributes = props.attributes,
        hasWideEnabled = props.hasWideEnabled;
    var align = attributes.align;
    var validAlignments = getValidAlignments(Object(external_this_wp_blocks_["getBlockSupport"])(name, 'align'), Object(external_this_wp_blocks_["hasBlockSupport"])(name, 'alignWide', true), hasWideEnabled);
    var wrapperProps = props.wrapperProps;

    if (Object(external_lodash_["includes"])(validAlignments, align)) {
      wrapperProps = Object(objectSpread["a" /* default */])({}, wrapperProps, {
        'data-align': align
      });
    }

    return Object(external_this_wp_element_["createElement"])(BlockListBlock, Object(esm_extends["a" /* default */])({}, props, {
      wrapperProps: wrapperProps
    }));
  };
};
/**
 * Override the default block element to add alignment wrapper props.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function}                Wrapped component
 */

var withDataAlign = Object(external_this_wp_compose_["createHigherOrderComponent"])(Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select('core/block-editor'),
      getSettings = _select.getSettings;

  return {
    hasWideEnabled: !!getSettings().alignWide
  };
}), align_insideSelectWithDataAlign]));
/**
 * Override props assigned to save component to inject alignment class name if
 * block supports it.
 *
 * @param  {Object} props      Additional props applied to save element
 * @param  {Object} blockType  Block type
 * @param  {Object} attributes Block attributes
 * @return {Object}            Filtered props applied to save element
 */

function addAssignedAlign(props, blockType, attributes) {
  var align = attributes.align;
  var blockAlign = Object(external_this_wp_blocks_["getBlockSupport"])(blockType, 'align');
  var hasWideBlockSupport = Object(external_this_wp_blocks_["hasBlockSupport"])(blockType, 'alignWide', true);
  var isAlignValid = Object(external_lodash_["includes"])( // Compute valid alignments without taking into account,
  // if the theme supports wide alignments or not.
  // This way changing themes does not impacts the block save.
  getValidAlignments(blockAlign, hasWideBlockSupport), align);

  if (isAlignValid) {
    props.className = classnames_default()("align".concat(align), props.className);
  }

  return props;
}
Object(external_this_wp_hooks_["addFilter"])('blocks.registerBlockType', 'core/align/addAttribute', addAttribute);
Object(external_this_wp_hooks_["addFilter"])('editor.BlockListBlock', 'core/editor/align/with-data-align', withDataAlign);
Object(external_this_wp_hooks_["addFilter"])('editor.BlockEdit', 'core/editor/align/with-toolbar-controls', withToolbarControls);
Object(external_this_wp_hooks_["addFilter"])('blocks.getSaveContent.extraProps', 'core/align/addAssignedAlign', addAssignedAlign);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/hooks/anchor.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


/**
 * Regular expression matching invalid anchor characters for replacement.
 *
 * @type {RegExp}
 */

var ANCHOR_REGEX = /[\s#]/g;
/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */

function anchor_addAttribute(settings) {
  if (Object(external_this_wp_blocks_["hasBlockSupport"])(settings, 'anchor')) {
    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = Object(external_lodash_["assign"])(settings.attributes, {
      anchor: {
        type: 'string',
        source: 'attribute',
        attribute: 'id',
        selector: '*'
      }
    });
  }

  return settings;
}
/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the anchor ID, if block supports anchor.
 *
 * @param {function|Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */

var withInspectorControl = Object(external_this_wp_compose_["createHigherOrderComponent"])(function (BlockEdit) {
  return function (props) {
    var hasAnchor = Object(external_this_wp_blocks_["hasBlockSupport"])(props.name, 'anchor');

    if (hasAnchor && props.isSelected) {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(BlockEdit, props), Object(external_this_wp_element_["createElement"])(inspector_advanced_controls, null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
        label: Object(external_this_wp_i18n_["__"])('HTML Anchor'),
        help: Object(external_this_wp_i18n_["__"])('Anchors lets you link directly to a section on a page.'),
        value: props.attributes.anchor || '',
        onChange: function onChange(nextValue) {
          nextValue = nextValue.replace(ANCHOR_REGEX, '-');
          props.setAttributes({
            anchor: nextValue
          });
        }
      })));
    }

    return Object(external_this_wp_element_["createElement"])(BlockEdit, props);
  };
}, 'withInspectorControl');
/**
 * Override props assigned to save component to inject anchor ID, if block
 * supports anchor. This is only applied if the block's save result is an
 * element and not a markup string.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */

function addSaveProps(extraProps, blockType, attributes) {
  if (Object(external_this_wp_blocks_["hasBlockSupport"])(blockType, 'anchor')) {
    extraProps.id = attributes.anchor === '' ? null : attributes.anchor;
  }

  return extraProps;
}
Object(external_this_wp_hooks_["addFilter"])('blocks.registerBlockType', 'core/anchor/attribute', anchor_addAttribute);
Object(external_this_wp_hooks_["addFilter"])('editor.BlockEdit', 'core/editor/anchor/with-inspector-control', withInspectorControl);
Object(external_this_wp_hooks_["addFilter"])('blocks.getSaveContent.extraProps', 'core/anchor/save-props', addSaveProps);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/hooks/custom-class-name.js


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */

function custom_class_name_addAttribute(settings) {
  if (Object(external_this_wp_blocks_["hasBlockSupport"])(settings, 'customClassName', true)) {
    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = Object(external_lodash_["assign"])(settings.attributes, {
      className: {
        type: 'string'
      }
    });
  }

  return settings;
}
/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param {function|Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */

var custom_class_name_withInspectorControl = Object(external_this_wp_compose_["createHigherOrderComponent"])(function (BlockEdit) {
  return function (props) {
    var hasCustomClassName = Object(external_this_wp_blocks_["hasBlockSupport"])(props.name, 'customClassName', true);

    if (hasCustomClassName && props.isSelected) {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(BlockEdit, props), Object(external_this_wp_element_["createElement"])(inspector_advanced_controls, null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextControl"], {
        label: Object(external_this_wp_i18n_["__"])('Additional CSS Class'),
        value: props.attributes.className || '',
        onChange: function onChange(nextValue) {
          props.setAttributes({
            className: nextValue !== '' ? nextValue : undefined
          });
        }
      })));
    }

    return Object(external_this_wp_element_["createElement"])(BlockEdit, props);
  };
}, 'withInspectorControl');
/**
 * Override props assigned to save component to inject anchor ID, if block
 * supports anchor. This is only applied if the block's save result is an
 * element and not a markup string.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */

function custom_class_name_addSaveProps(extraProps, blockType, attributes) {
  if (Object(external_this_wp_blocks_["hasBlockSupport"])(blockType, 'customClassName', true) && attributes.className) {
    extraProps.className = classnames_default()(extraProps.className, attributes.className);
  }

  return extraProps;
}
/**
 * Given an HTML string, returns an array of class names assigned to the root
 * element in the markup.
 *
 * @param {string} innerHTML Markup string from which to extract classes.
 *
 * @return {string[]} Array of class names assigned to the root element.
 */

function getHTMLRootElementClasses(innerHTML) {
  innerHTML = "<div data-custom-class-name>".concat(innerHTML, "</div>");
  var parsed = Object(external_this_wp_blocks_["parseWithAttributeSchema"])(innerHTML, {
    type: 'string',
    source: 'attribute',
    selector: '[data-custom-class-name] > *',
    attribute: 'class'
  });
  return parsed ? parsed.trim().split(/\s+/) : [];
}
/**
 * Given a parsed set of block attributes, if the block supports custom class
 * names and an unknown class (per the block's serialization behavior) is
 * found, the unknown classes are treated as custom classes. This prevents the
 * block from being considered as invalid.
 *
 * @param {Object} blockAttributes Original block attributes.
 * @param {Object} blockType       Block type settings.
 * @param {string} innerHTML       Original block markup.
 *
 * @return {Object} Filtered block attributes.
 */

function addParsedDifference(blockAttributes, blockType, innerHTML) {
  if (Object(external_this_wp_blocks_["hasBlockSupport"])(blockType, 'customClassName', true)) {
    // To determine difference, serialize block given the known set of
    // attributes, with the exception of `className`. This will determine
    // the default set of classes. From there, any difference in innerHTML
    // can be considered as custom classes.
    var attributesSansClassName = Object(external_lodash_["omit"])(blockAttributes, ['className']);
    var serialized = Object(external_this_wp_blocks_["getSaveContent"])(blockType, attributesSansClassName);
    var defaultClasses = getHTMLRootElementClasses(serialized);
    var actualClasses = getHTMLRootElementClasses(innerHTML);
    var customClasses = Object(external_lodash_["difference"])(actualClasses, defaultClasses);

    if (customClasses.length) {
      blockAttributes.className = customClasses.join(' ');
    } else if (serialized) {
      delete blockAttributes.className;
    }
  }

  return blockAttributes;
}
Object(external_this_wp_hooks_["addFilter"])('blocks.registerBlockType', 'core/custom-class-name/attribute', custom_class_name_addAttribute);
Object(external_this_wp_hooks_["addFilter"])('editor.BlockEdit', 'core/editor/custom-class-name/with-inspector-control', custom_class_name_withInspectorControl);
Object(external_this_wp_hooks_["addFilter"])('blocks.getSaveContent.extraProps', 'core/custom-class-name/save-props', custom_class_name_addSaveProps);
Object(external_this_wp_hooks_["addFilter"])('blocks.getBlockAttributes', 'core/custom-class-name/addParsedDifference', addParsedDifference);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/hooks/generated-class-name.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Override props assigned to save component to inject generated className if
 * block supports it. This is only applied if the block's save result is an
 * element and not a markup string.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 *
 * @return {Object} Filtered props applied to save element.
 */

function addGeneratedClassName(extraProps, blockType) {
  // Adding the generated className
  if (Object(external_this_wp_blocks_["hasBlockSupport"])(blockType, 'className', true)) {
    if (typeof extraProps.className === 'string') {
      // We have some extra classes and want to add the default classname
      // We use uniq to prevent duplicate classnames
      extraProps.className = Object(external_lodash_["uniq"])([Object(external_this_wp_blocks_["getBlockDefaultClassName"])(blockType.name)].concat(Object(toConsumableArray["a" /* default */])(extraProps.className.split(' ')))).join(' ').trim();
    } else {
      // There is no string in the className variable,
      // so we just dump the default name in there
      extraProps.className = Object(external_this_wp_blocks_["getBlockDefaultClassName"])(blockType.name);
    }
  }

  return extraProps;
}
Object(external_this_wp_hooks_["addFilter"])('blocks.getSaveContent.extraProps', 'core/generated-class-name/save-props', addGeneratedClassName);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/hooks/index.js
/**
 * Internal dependencies
 */





// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/index.js
/* concated harmony reexport Autocomplete */__webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return autocomplete; });
/* concated harmony reexport AlignmentToolbar */__webpack_require__.d(__webpack_exports__, "AlignmentToolbar", function() { return alignment_toolbar; });
/* concated harmony reexport BlockAlignmentToolbar */__webpack_require__.d(__webpack_exports__, "BlockAlignmentToolbar", function() { return block_alignment_toolbar; });
/* concated harmony reexport BlockControls */__webpack_require__.d(__webpack_exports__, "BlockControls", function() { return block_controls; });
/* concated harmony reexport BlockEdit */__webpack_require__.d(__webpack_exports__, "BlockEdit", function() { return block_edit; });
/* concated harmony reexport BlockFormatControls */__webpack_require__.d(__webpack_exports__, "BlockFormatControls", function() { return block_format_controls; });
/* concated harmony reexport BlockNavigationDropdown */__webpack_require__.d(__webpack_exports__, "BlockNavigationDropdown", function() { return dropdown; });
/* concated harmony reexport BlockIcon */__webpack_require__.d(__webpack_exports__, "BlockIcon", function() { return BlockIcon; });
/* concated harmony reexport ColorPalette */__webpack_require__.d(__webpack_exports__, "ColorPalette", function() { return color_palette; });
/* concated harmony reexport withColorContext */__webpack_require__.d(__webpack_exports__, "withColorContext", function() { return with_color_context; });
/* concated harmony reexport ContrastChecker */__webpack_require__.d(__webpack_exports__, "ContrastChecker", function() { return contrast_checker; });
/* concated harmony reexport InnerBlocks */__webpack_require__.d(__webpack_exports__, "InnerBlocks", function() { return inner_blocks; });
/* concated harmony reexport InspectorAdvancedControls */__webpack_require__.d(__webpack_exports__, "InspectorAdvancedControls", function() { return inspector_advanced_controls; });
/* concated harmony reexport InspectorControls */__webpack_require__.d(__webpack_exports__, "InspectorControls", function() { return inspector_controls; });
/* concated harmony reexport PanelColorSettings */__webpack_require__.d(__webpack_exports__, "PanelColorSettings", function() { return panel_color_settings; });
/* concated harmony reexport PlainText */__webpack_require__.d(__webpack_exports__, "PlainText", function() { return plain_text; });
/* concated harmony reexport RichText */__webpack_require__.d(__webpack_exports__, "RichText", function() { return rich_text; });
/* concated harmony reexport RichTextShortcut */__webpack_require__.d(__webpack_exports__, "RichTextShortcut", function() { return shortcut_RichTextShortcut; });
/* concated harmony reexport RichTextToolbarButton */__webpack_require__.d(__webpack_exports__, "RichTextToolbarButton", function() { return RichTextToolbarButton; });
/* concated harmony reexport UnstableRichTextInputEvent */__webpack_require__.d(__webpack_exports__, "UnstableRichTextInputEvent", function() { return input_event_UnstableRichTextInputEvent; });
/* concated harmony reexport MediaPlaceholder */__webpack_require__.d(__webpack_exports__, "MediaPlaceholder", function() { return media_placeholder; });
/* concated harmony reexport MediaUpload */__webpack_require__.d(__webpack_exports__, "MediaUpload", function() { return media_upload; });
/* concated harmony reexport MediaUploadCheck */__webpack_require__.d(__webpack_exports__, "MediaUploadCheck", function() { return check; });
/* concated harmony reexport URLInput */__webpack_require__.d(__webpack_exports__, "URLInput", function() { return url_input; });
/* concated harmony reexport URLInputButton */__webpack_require__.d(__webpack_exports__, "URLInputButton", function() { return url_input_button; });
/* concated harmony reexport URLPopover */__webpack_require__.d(__webpack_exports__, "URLPopover", function() { return url_popover; });
/* concated harmony reexport BlockEditorKeyboardShortcuts */__webpack_require__.d(__webpack_exports__, "BlockEditorKeyboardShortcuts", function() { return block_editor_keyboard_shortcuts; });
/* concated harmony reexport BlockInspector */__webpack_require__.d(__webpack_exports__, "BlockInspector", function() { return block_inspector; });
/* concated harmony reexport BlockList */__webpack_require__.d(__webpack_exports__, "BlockList", function() { return block_list; });
/* concated harmony reexport BlockMover */__webpack_require__.d(__webpack_exports__, "BlockMover", function() { return block_mover; });
/* concated harmony reexport BlockSelectionClearer */__webpack_require__.d(__webpack_exports__, "BlockSelectionClearer", function() { return block_selection_clearer; });
/* concated harmony reexport BlockSettingsMenu */__webpack_require__.d(__webpack_exports__, "BlockSettingsMenu", function() { return block_settings_menu; });
/* concated harmony reexport _BlockSettingsMenuFirstItem */__webpack_require__.d(__webpack_exports__, "_BlockSettingsMenuFirstItem", function() { return block_settings_menu_first_item; });
/* concated harmony reexport _BlockSettingsMenuPluginsExtension */__webpack_require__.d(__webpack_exports__, "_BlockSettingsMenuPluginsExtension", function() { return block_settings_menu_plugins_extension; });
/* concated harmony reexport BlockTitle */__webpack_require__.d(__webpack_exports__, "BlockTitle", function() { return block_title; });
/* concated harmony reexport BlockToolbar */__webpack_require__.d(__webpack_exports__, "BlockToolbar", function() { return block_toolbar; });
/* concated harmony reexport CopyHandler */__webpack_require__.d(__webpack_exports__, "CopyHandler", function() { return copy_handler; });
/* concated harmony reexport DefaultBlockAppender */__webpack_require__.d(__webpack_exports__, "DefaultBlockAppender", function() { return default_block_appender; });
/* concated harmony reexport Inserter */__webpack_require__.d(__webpack_exports__, "Inserter", function() { return inserter; });
/* concated harmony reexport MultiBlocksSwitcher */__webpack_require__.d(__webpack_exports__, "MultiBlocksSwitcher", function() { return multi_blocks_switcher; });
/* concated harmony reexport MultiSelectScrollIntoView */__webpack_require__.d(__webpack_exports__, "MultiSelectScrollIntoView", function() { return multi_select_scroll_into_view; });
/* concated harmony reexport NavigableToolbar */__webpack_require__.d(__webpack_exports__, "NavigableToolbar", function() { return navigable_toolbar; });
/* concated harmony reexport ObserveTyping */__webpack_require__.d(__webpack_exports__, "ObserveTyping", function() { return observe_typing; });
/* concated harmony reexport PreserveScrollInReorder */__webpack_require__.d(__webpack_exports__, "PreserveScrollInReorder", function() { return preserve_scroll_in_reorder; });
/* concated harmony reexport SkipToSelectedBlock */__webpack_require__.d(__webpack_exports__, "SkipToSelectedBlock", function() { return skip_to_selected_block; });
/* concated harmony reexport Warning */__webpack_require__.d(__webpack_exports__, "Warning", function() { return warning; });
/* concated harmony reexport WritingFlow */__webpack_require__.d(__webpack_exports__, "WritingFlow", function() { return writing_flow; });
/* concated harmony reexport BlockEditorProvider */__webpack_require__.d(__webpack_exports__, "BlockEditorProvider", function() { return provider; });
/* concated harmony reexport getColorClassName */__webpack_require__.d(__webpack_exports__, "getColorClassName", function() { return getColorClassName; });
/* concated harmony reexport getColorObjectByAttributeValues */__webpack_require__.d(__webpack_exports__, "getColorObjectByAttributeValues", function() { return utils_getColorObjectByAttributeValues; });
/* concated harmony reexport getColorObjectByColorValue */__webpack_require__.d(__webpack_exports__, "getColorObjectByColorValue", function() { return utils_getColorObjectByColorValue; });
/* concated harmony reexport createCustomColorsHOC */__webpack_require__.d(__webpack_exports__, "createCustomColorsHOC", function() { return createCustomColorsHOC; });
/* concated harmony reexport withColors */__webpack_require__.d(__webpack_exports__, "withColors", function() { return withColors; });
/* concated harmony reexport getFontSize */__webpack_require__.d(__webpack_exports__, "getFontSize", function() { return utils_getFontSize; });
/* concated harmony reexport getFontSizeClass */__webpack_require__.d(__webpack_exports__, "getFontSizeClass", function() { return getFontSizeClass; });
/* concated harmony reexport FontSizePicker */__webpack_require__.d(__webpack_exports__, "FontSizePicker", function() { return font_size_picker; });
/* concated harmony reexport withFontSizes */__webpack_require__.d(__webpack_exports__, "withFontSizes", function() { return with_font_sizes; });
/* concated harmony reexport SETTINGS_DEFAULTS */__webpack_require__.d(__webpack_exports__, "SETTINGS_DEFAULTS", function() { return SETTINGS_DEFAULTS; });
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */







/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["viewport"]; }());

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function memize( fn, options ) {
	var size = 0,
		maxSize, head, tail;

	if ( options && options.maxSize ) {
		maxSize = options.maxSize;
	}

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				head.prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args )
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === maxSize ) {
			tail = tail.prev;
			tail.next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	return memoized;
};


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["isShallowEqual"]; }());

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["a11y"]; }());

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["deprecated"]; }());

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(55);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 55:
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["htmlEntities"]; }());

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextareaAutosize_1 = __webpack_require__(111);
exports["default"] = TextareaAutosize_1["default"];


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(115);

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function flattenIntoMap( map, effects ) {
	var i;
	if ( Array.isArray( effects ) ) {
		for ( i = 0; i < effects.length; i++ ) {
			flattenIntoMap( map, effects[ i ] );
		}
	} else {
		for ( i in effects ) {
			map[ i ] = ( map[ i ] || [] ).concat( effects[ i ] );
		}
	}
}

function refx( effects ) {
	var map = {},
		middleware;

	flattenIntoMap( map, effects );

	middleware = function( store ) {
		return function( next ) {
			return function( action ) {
				var handlers = map[ action.type ],
					result = next( action ),
					i, handlerAction;

				if ( handlers ) {
					for ( i = 0; i < handlers.length; i++ ) {
						handlerAction = handlers[ i ]( action, store );
						if ( handlerAction ) {
							store.dispatch( handlerAction );
						}
					}
				}

				return result;
			};
		};
	};

	middleware.effects = map;

	return middleware;
}

module.exports = refx;


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["coreData"]; }());

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(90);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Redux dispatch multiple actions
 */

function multi(_ref) {
  var dispatch = _ref.dispatch;

  return function (next) {
    return function (action) {
      return Array.isArray(action) ? action.filter(Boolean).map(dispatch) : next(action);
    };
  };
}

/**
 * Exports
 */

exports.default = multi;

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["wordcount"]; }());

/***/ })

/******/ });