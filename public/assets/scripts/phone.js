"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["phone"],{

/***/ "./resources/scripts/modules/phone.js":
/*!********************************************!*\
  !*** ./resources/scripts/modules/phone.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "phone": () => (/* binding */ phone)
/* harmony export */ });
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");


var phone = function phone() {
  var maskOptions = {
    mask: '(000)000-0000'
  };
  (0,imask__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('.reg-form__phone'), maskOptions);
};



/***/ }),

/***/ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js":
/*!**********************************************************************!*\
  !*** ./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ _createClass),
/* harmony export */   "a": () => (/* binding */ _classCallCheck),
/* harmony export */   "b": () => (/* binding */ _objectWithoutProperties),
/* harmony export */   "c": () => (/* binding */ _typeof),
/* harmony export */   "d": () => (/* binding */ _inherits),
/* harmony export */   "e": () => (/* binding */ _createSuper),
/* harmony export */   "f": () => (/* binding */ _slicedToArray),
/* harmony export */   "g": () => (/* binding */ _get),
/* harmony export */   "h": () => (/* binding */ _getPrototypeOf),
/* harmony export */   "i": () => (/* binding */ _set)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js":
/*!******************************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLContenteditableMaskElement)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");





var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(HTMLContenteditableMaskElement, _HTMLMaskElement);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(HTMLContenteditableMaskElement);

  function HTMLContenteditableMaskElement() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, HTMLContenteditableMaskElement);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(HTMLContenteditableMaskElement, [{
    key: "_unsafeSelectionStart",
    get:
    /**
      Returns HTMLElement selection start
      @override
    */
    function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;

      if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
        return anchorOffset;
      }

      return focusOffset;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;

      if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
        return anchorOffset;
      }

      return focusOffset;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // $FlowFixMe
      return this.input.textContent;
    },
    set: function set(value) {
      this.input.textContent = value;
    }
  }]);

  return HTMLContenteditableMaskElement;
}(_html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-mask-element.js":
/*!**************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-mask-element.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLMaskElement)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");




/** Bridge between HTMLElement and {@link Masked} */

var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(HTMLMaskElement, _MaskElement);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(HTMLMaskElement);

  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */
  function HTMLMaskElement(input) {
    var _this;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, HTMLMaskElement);

    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /** */
  // $FlowFixMe https://github.com/facebook/flow/issues/2839


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(HTMLMaskElement, [{
    key: "rootElement",
    get: function get() {
      var _this$input$getRootNo, _this$input$getRootNo2, _this$input;

      return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
    }
    /**
      Is element in focus
      @readonly
    */

  }, {
    key: "isActive",
    get: function get() {
      //$FlowFixMe
      return this.input === this.rootElement.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
    /**
      Binds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);

  return HTMLMaskElement;
}(_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLMaskElement = HTMLMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/input.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/controls/input.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputMask)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_pattern_cursor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../masked/pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../masked/range.js */ "./node_modules/imask/esm/masked/range.js");




















var _excluded = ["mask"];
/** Listens to element events and controls changes between element and {@link Masked} */

var InputMask = /*#__PURE__*/function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, InputMask);

    this.el = el instanceof _mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__["default"](el) : new _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__["default"](el);
    this.masked = (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(InputMask, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update

      if (!(mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].Masked) && this.masked.constructor === (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__.maskedClass)(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      var _this$masked;

      return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
    /**
      Starts listening to element events
      @protected
    */

  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l.apply(void 0, args);
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
    /**
      Stores current selection
      @protected
    */

  }, {
    key: "_saveSelection",
    value: function
      /* ev */
    _saveSelection() {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(opts, _excluded);

      var updateMask = !this.maskEquals(mask);
      var updateOpts = !(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.objectIncludes)(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);

      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT));
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput(e) {
      this._inputEvent = e;

      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      if (removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0; // $FlowFixMe

      delete this.el;
    }
  }]);

  return InputMask;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].InputMask = InputMask;




/***/ }),

/***/ "./node_modules/imask/esm/controls/mask-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/controls/mask-element.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskElement)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



/**
  Generic element API to use with mask
  @interface
*/
var MaskElement = /*#__PURE__*/function () {
  function MaskElement() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskElement);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskElement, [{
    key: "selectionStart",
    get:
    /** */

    /** */

    /** */

    /** Safely returns selection start */
    function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */

  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }]);

  return MaskElement;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskElement = MaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/core/action-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/action-details.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-details.js */ "./node_modules/imask/esm/core/change-details.js");




/** Provides details of changing input */

var ActionDetails = /*#__PURE__*/function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ActionDetails);

    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return _utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE; // align right if delete at right

      return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
      this.oldSelection.end === this.oldSelection.start ? _utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT : _utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT;
    }
  }]);

  return ActionDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/change-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/change-details.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");


/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/
var ChangeDetails = /*#__PURE__*/function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ChangeDetails);

    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);

  return ChangeDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/continuous-tail-details.js":
/*!****************************************************************!*\
  !*** ./node_modules/imask/esm/core/continuous-tail-details.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContinuousTailDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");


/** Provides details of continuous extracted tail */
var ContinuousTailDetails = /*#__PURE__*/function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ContinuousTailDetails);

    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.value.length) return '';
      var shiftChar = this.value[this.value.length - 1];
      this.value = this.value.slice(0, -1);
      return shiftChar;
    }
  }]);

  return ContinuousTailDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/holder.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/core/holder.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IMask)
/* harmony export */ });
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}




/***/ }),

/***/ "./node_modules/imask/esm/core/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/imask/esm/core/utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIRECTION": () => (/* binding */ DIRECTION),
/* harmony export */   "escapeRegExp": () => (/* binding */ escapeRegExp),
/* harmony export */   "forceDirection": () => (/* binding */ forceDirection),
/* harmony export */   "indexInDirection": () => (/* binding */ indexInDirection),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "normalizePrepare": () => (/* binding */ normalizePrepare),
/* harmony export */   "objectIncludes": () => (/* binding */ objectIncludes),
/* harmony export */   "posInDirection": () => (/* binding */ posInDirection)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-details.js */ "./node_modules/imask/esm/core/change-details.js");



/** Checks if value is string */

function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/

var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};
/**
  Direction
  @enum {string}
*/

/** Returns next char index in direction */
function indexInDirection(pos, direction) {
  if (direction === DIRECTION.LEFT) --pos;
  return pos;
}
/** Returns next char position in direction */

function posInDirection(pos, direction) {
  switch (direction) {
    case DIRECTION.LEFT:
    case DIRECTION.FORCE_LEFT:
      return --pos;

    case DIRECTION.RIGHT:
    case DIRECTION.FORCE_RIGHT:
      return ++pos;

    default:
      return pos;
  }
}
/** */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
function normalizePrepare(prep) {
  return Array.isArray(prep) ? prep : [prep, new _change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]()];
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.c)(a) === 'object' && (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.c)(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      // $FlowFixMe ... ???
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/** Selection range */




/***/ }),

/***/ "./node_modules/imask/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/imask/esm/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLContenteditableMaskElement": () => (/* reexport safe */ _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "HTMLMaskElement": () => (/* reexport safe */ _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "InputMask": () => (/* reexport safe */ _controls_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "MaskElement": () => (/* reexport safe */ _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "Masked": () => (/* reexport safe */ _masked_base_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "MaskedDate": () => (/* reexport safe */ _masked_date_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "MaskedDynamic": () => (/* reexport safe */ _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "MaskedEnum": () => (/* reexport safe */ _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "MaskedFunction": () => (/* reexport safe */ _masked_function_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "MaskedNumber": () => (/* reexport safe */ _masked_number_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "MaskedPattern": () => (/* reexport safe */ _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "MaskedRange": () => (/* reexport safe */ _masked_range_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "MaskedRegExp": () => (/* reexport safe */ _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "PIPE_TYPE": () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__.PIPE_TYPE),
/* harmony export */   "createMask": () => (/* reexport safe */ _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "createPipe": () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__.createPipe),
/* harmony export */   "default": () => (/* reexport safe */ _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "pipe": () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__.pipe)
/* harmony export */ });
/* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/input.js */ "./node_modules/imask/esm/controls/input.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masked/enum.js */ "./node_modules/imask/esm/masked/enum.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masked/range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _masked_number_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./masked/number.js */ "./node_modules/imask/esm/masked/number.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_function_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masked/function.js */ "./node_modules/imask/esm/masked/function.js");
/* harmony import */ var _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masked/dynamic.js */ "./node_modules/imask/esm/masked/dynamic.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls/html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./masked/pipe.js */ "./node_modules/imask/esm/masked/pipe.js");
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_pattern_cursor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./masked/pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");



























try {
  globalThis.IMask = _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"];
} catch (e) {}


/***/ }),

/***/ "./node_modules/imask/esm/masked/base.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/base.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Masked)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






/** Supported mask type */

/** Provides common masking stuff */
var Masked = /*#__PURE__*/function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Format typed value to string */

  /** Parse strgin to get typed value */

  /** Enable characters overwriting */

  /** */

  /** */
  function Masked(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, Masked);

    this._value = '';

    this._update(Object.assign({}, Masked.DEFAULTS, opts));

    this.isInitialized = true;
  }
  /** Sets and applies new options */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return; // $FlowFixMe

      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
    /** Resets value */

  }, {
    key: "reset",
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
    /** Resolve new value */

  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set(value) {
      this.value = this.doFormat(value);
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
    /** */

  }, {
    key: "isFilled",
    get: function get() {
      return this.isComplete;
    }
    /** Finds nearest input position in direction */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this._value += ch;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;
      var details;

      var _normalizePrepare = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.normalizePrepare)(this.doPrepare(ch, flags));

      var _normalizePrepare2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_normalizePrepare, 2);

      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      details = details.aggregate(this._appendCharRaw(ch, flags));

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite === true) {
            consistentTail = checkTail.state;
            checkTail.unshift(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // not ok, try shift

          if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
            this.state = beforeTailState;
            consistentTail = checkTail.state;
            checkTail.shift();
            tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString();
          } // if ok, rollback state after tail


          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Appends optional eager placeholder at end */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(str)) throw new Error('value should be string');
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var checkTail = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(tail) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail)) : tail;
      if (flags && flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
        details.aggregate(this._appendEager());
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput; // append lost trailing chars at end

      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, '');
      }

      delete this._refreshing;
      return ret;
    }
    /** */

  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized) return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
    /** */

  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var oldRawValue;

      if (this.eager) {
        removeDirection = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.forceDirection)(removeDirection);
        oldRawValue = this.extractInput(0, tailPos, {
          raw: true
        });
      }

      var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE : removeDirection);
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos));

      if (this.eager && removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE && oldRawValue === this.rawInputValue) {
        if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_LEFT) {
          var valLength;

          while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
            details.aggregate(new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              tailShift: -1
            })).aggregate(this.remove(valLength - 1));
          }
        } else if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_RIGHT) {
          tail.unshift();
        }
      }

      return details.aggregate(this.append(inserted, {
        input: true
      }, tail));
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return this.mask === mask;
    }
  }]);

  return Masked;
}();
Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse(v) {
    return v;
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].Masked = Masked;




/***/ }),

/***/ "./node_modules/imask/esm/masked/date.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/date.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedDate)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");















/** Date mask */

var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedDate, _MaskedPattern);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedDate);

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */
  function MaskedDate(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedDate);

    return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
  }
  /**
    @override
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, this.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
      });

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set(date) {
      this.typedValue = date;
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "typedValue", this) : null;
    },
    set: function set(value) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "typedValue", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask === Date || (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "maskEquals", this).call(this, mask);
    }
  }]);

  return MaskedDate;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    if (!date) return '';
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1900,
      to: 9999
    }
  };
};

_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedDate = MaskedDate;




/***/ }),

/***/ "./node_modules/imask/esm/masked/dynamic.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/dynamic.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedDynamic)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");








var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];

/** Dynamic mask for choosing apropriate mask in run-time */
var MaskedDynamic = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedDynamic, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedDynamic);

  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */
  function MaskedDynamic(opts) {
    var _this;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedDynamic);

    _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var details = this._applyDispatch(ch, flags);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, flags));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset();

          if (insertValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
          }

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
     @override
    */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendEager());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      var _this$currentMask2;

      (_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic
    ,
    set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      var _this$currentMask3;

      return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isComplete);
    }
    /**
      @override
    */

  }, {
    key: "isFilled",
    get: function get() {
      var _this$currentMask4;

      return Boolean((_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.isFilled);
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      if (this.currentMask) {
        var _this$currentMask5;

        details.aggregate((_this$currentMask5 = this.currentMask).remove.apply(_this$currentMask5, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(state, _excluded);

      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask6;

      return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask7, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get3 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask8, _get4;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get4 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }, {
    key: "eager",
    get: function get() {
      return this.currentMask ? this.currentMask.eager : (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "eager", this);
    },
    set: function set(eager) {
      console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
    }
    /**
      @override
    */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return Array.isArray(mask) && this.compiledMasks.every(function (m, mi) {
        var _mask$mi;

        return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
      });
    }
  }]);

  return MaskedDynamic;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedDynamic = MaskedDynamic;




/***/ }),

/***/ "./node_modules/imask/esm/masked/enum.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/enum.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedEnum)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");














/** Pattern which validates enum values */

var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedEnum, _MaskedPattern);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedEnum);

  function MaskedEnum() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedEnum);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedEnum, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedEnum = MaskedEnum;




/***/ }),

/***/ "./node_modules/imask/esm/masked/factory.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/factory.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMask),
/* harmony export */   "maskedClass": () => (/* binding */ maskedClass)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");





/** Get Masked class by mask type */

function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  } // $FlowFixMe


  if (mask instanceof RegExp) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp; // $FlowFixMe

  if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(mask)) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern; // $FlowFixMe

  if (mask instanceof Date || mask === Date) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDate; // $FlowFixMe

  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedNumber; // $FlowFixMe

  if (Array.isArray(mask) || mask === Array) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDynamic; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask; // $FlowFixMe

  if (mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask.constructor; // $FlowFixMe

  if (mask instanceof Function) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  // $FlowFixMe

  return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked;
}
/** Creates new {@link Masked} depending on mask type */

function createMask(opts) {
  // $FlowFixMe
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
  return new MaskedClass(opts);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createMask = createMask;




/***/ }),

/***/ "./node_modules/imask/esm/masked/function.js":
/*!***************************************************!*\
  !*** ./node_modules/imask/esm/masked/function.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedFunction)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");







/** Masking by custom Function */

var MaskedFunction = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedFunction, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedFunction);

  function MaskedFunction() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedFunction);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedFunction, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedFunction = MaskedFunction;




/***/ }),

/***/ "./node_modules/imask/esm/masked/number.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/number.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedNumber)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");







/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/
var MaskedNumber = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedNumber, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedNumber);

  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */
  function MaskedNumber(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedNumber);

    return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
  }
  /**
    @override
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp)(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp)(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var _get2;

      ch = ch.replace(this._mapToRadixRegExp, this.radix);

      var noSepCh = this._removeThousandsSeparators(ch);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _normalizePrepare = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.normalizePrepare)((_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))),
          _normalizePrepare2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_normalizePrepare, 2),
          prepCh = _normalizePrepare2[0],
          details = _normalizePrepare2[1];

      if (ch && !noSepCh) details.skip = true;
      return [prepCh, details];
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);

      var appendDetails = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && ( // check min bound for negative values
        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
        this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(n) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set(number) {
      this.typedValue = number;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);

  return MaskedNumber;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedNumber = MaskedNumber;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedPattern)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");













var _excluded = ["_blocks"];

/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/
var MaskedPattern = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedPattern, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedPattern);

  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */
  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedPattern);

    // TODO type $Shape<MaskedPatternOptions>={} does not work
    opts.definitions = Object.assign({}, _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
  }
  /**
    @override
    @param {Object} opts
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              // $FlowFixMe no ideas
              var maskedBlock = (0,_factory_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                eager: _this.eager,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];
        var isInput = (char in defs);

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          isInput = false;
        }

        var def = isInput ? new _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          parent: this,
          lazy: this.lazy,
          eager: this.eager,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          char: char,
          eager: this.eager,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(state, _excluded);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
    /**
      @override
    */

  }, {
    key: "isFilled",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isFilled;
      });
    }
  }, {
    key: "isFixed",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isFixed;
      });
    }
  }, {
    key: "isOptional",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isOptional;
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var _this$_mapPosToBlock;

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
      if (startBlockIndex == null) return details; // TODO test if it works for nested pattern masks

      if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;

      for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
        var d = this._blocks[bi]._appendEager();

        if (!d.inserted) break;
        details.aggregate(d);
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _flags$_beforeTailSta;

        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta._blocks[bi]
        }));

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var removeDetails = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE;
      if (!this._blocks.length) return 0;
      var cursor = new _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_7__["default"](this, cursorPos);

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE) {
        // -------------------------------------------------
        // NONE should only go out from fixed to the right!
        // -------------------------------------------------
        if (cursor.pushRightBeforeInput()) return cursor.pos;
        cursor.popState();
        if (cursor.pushLeftBeforeInput()) return cursor.pos;
        return this.value.length;
      } // FORCE is only about a|* otherwise is 0


      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT) {
        // try to break fast when *|a
        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT) {
          cursor.pushRightBeforeFilled();
          if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
          cursor.popState();
        } // forward flow


        cursor.pushLeftBeforeInput();
        cursor.pushLeftBeforeRequired();
        cursor.pushLeftBeforeFilled(); // backward flow

        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT) {
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
        }

        if (cursor.ok) return cursor.pos;
        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT) return 0;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos; // cursor.popState();
        // if (
        //   cursor.pushRightBeforeInput() &&
        //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
        //   (!this.lazy || this.extractInput())
        // ) return cursor.pos;

        return 0;
      }

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT) {
        // forward flow
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.pushRightBeforeFilled()) return cursor.pos;
        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT) return this.value.length; // backward flow

        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        return this.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT);
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }]);

  return MaskedPattern;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"];
MaskedPattern.FixedDefinition = _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"];
_core_holder_js__WEBPACK_IMPORTED_MODULE_9__["default"].MaskedPattern = MaskedPattern;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js":
/*!*********************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChunksTailDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






var _excluded = ["chunks"];

var ChunksTailDetails = /*#__PURE__*/function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ChunksTailDetails);

    this.chunks = chunks;
    this.from = from;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tailChunk)) tailChunk = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && ( // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      // $FlowFixMe
      if (!(masked instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedPattern)) {
        var tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.toString());
        return tail.appendTo(masked);
      }

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop != null && ( // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(state, _excluded);

      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
      var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.unshift(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.chunks.length) return '';
      var ci = this.chunks.length - 1;

      while (0 <= ci) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shift();

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          --ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }]);

  return ChunksTailDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/cursor.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/cursor.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternCursor)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");




var PatternCursor = /*#__PURE__*/function () {
  function PatternCursor(masked, pos) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, PatternCursor);

    this.masked = masked;
    this._log = [];

    var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? // first
    {
      index: 0,
      offset: 0
    } : // last
    {
      index: this.masked._blocks.length,
      offset: 0
    }),
        offset = _ref.offset,
        index = _ref.index;

    this.offset = offset;
    this.index = index;
    this.ok = false;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(PatternCursor, [{
    key: "block",
    get: function get() {
      return this.masked._blocks[this.index];
    }
  }, {
    key: "pos",
    get: function get() {
      return this.masked._blockStartPos(this.index) + this.offset;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        index: this.index,
        offset: this.offset,
        ok: this.ok
      };
    },
    set: function set(s) {
      Object.assign(this, s);
    }
  }, {
    key: "pushState",
    value: function pushState() {
      this._log.push(this.state);
    }
  }, {
    key: "popState",
    value: function popState() {
      var s = this._log.pop();

      this.state = s;
      return s;
    }
  }, {
    key: "bindBlock",
    value: function bindBlock() {
      if (this.block) return;

      if (this.index < 0) {
        this.index = 0;
        this.offset = 0;
      }

      if (this.index >= this.masked._blocks.length) {
        this.index = this.masked._blocks.length - 1;
        this.offset = this.block.value.length;
      }
    }
  }, {
    key: "_pushLeft",
    value: function _pushLeft(fn) {
      this.pushState();

      for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
        var _this$block;

        if (fn()) return this.ok = true;
      }

      return this.ok = false;
    }
  }, {
    key: "_pushRight",
    value: function _pushRight(fn) {
      this.pushState();

      for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
        if (fn()) return this.ok = true;
      }

      return this.ok = false;
    }
  }, {
    key: "pushLeftBeforeFilled",
    value: function pushLeftBeforeFilled() {
      var _this = this;

      return this._pushLeft(function () {
        if (_this.block.isFixed || !_this.block.value) return;
        _this.offset = _this.block.nearestInputPos(_this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT);
        if (_this.offset !== 0) return true;
      });
    }
  }, {
    key: "pushLeftBeforeInput",
    value: function pushLeftBeforeInput() {
      var _this2 = this;

      // cases:
      // filled input: 00|
      // optional empty input: 00[]|
      // nested block: XX<[]>|
      return this._pushLeft(function () {
        if (_this2.block.isFixed) return;
        _this2.offset = _this2.block.nearestInputPos(_this2.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushLeftBeforeRequired",
    value: function pushLeftBeforeRequired() {
      var _this3 = this;

      return this._pushLeft(function () {
        if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
        _this3.offset = _this3.block.nearestInputPos(_this3.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushRightBeforeFilled",
    value: function pushRightBeforeFilled() {
      var _this4 = this;

      return this._pushRight(function () {
        if (_this4.block.isFixed || !_this4.block.value) return;
        _this4.offset = _this4.block.nearestInputPos(_this4.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT);
        if (_this4.offset !== _this4.block.value.length) return true;
      });
    }
  }, {
    key: "pushRightBeforeInput",
    value: function pushRightBeforeInput() {
      var _this5 = this;

      return this._pushRight(function () {
        if (_this5.block.isFixed) return; // const o = this.offset;

        _this5.offset = _this5.block.nearestInputPos(_this5.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE); // HACK cases like (STILL DOES NOT WORK FOR NESTED)
        // aa|X
        // aa<X|[]>X_    - this will not work
        // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;

        return true;
      });
    }
  }, {
    key: "pushRightBeforeRequired",
    value: function pushRightBeforeRequired() {
      var _this6 = this;

      return this._pushRight(function () {
        if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return; // TODO check |[*]XX_

        _this6.offset = _this6.block.nearestInputPos(_this6.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE);
        return true;
      });
    }
  }]);

  return PatternCursor;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/fixed-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/fixed-definition.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternFixedDefinition)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");





var PatternFixedDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, PatternFixedDefinition);

    Object.assign(this, opts);
    this._value = '';
    this.isFixed = true;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(PatternFixedDefinition, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT:
          return minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "isFilled",
    get: function get() {
      return Boolean(this._value);
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      var appended = this.char === ch;
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return this._appendChar(this.char);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str[0], flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return PatternFixedDefinition;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/input-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/input-definition.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_INPUT_DEFINITIONS": () => (/* binding */ DEFAULT_INPUT_DEFINITIONS),
/* harmony export */   "default": () => (/* binding */ PatternInputDefinition)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






var _excluded = ["mask"];
var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

var PatternInputDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, PatternInputDefinition);

    var mask = opts.mask,
        blockOpts = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(opts, _excluded);

    this.masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this.isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this.isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this.isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(ch, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this.isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;

      // TODO probably should be done via _appendChar
      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this.isFilled || this.isOptional) return details;
      this.isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        isFilled: this.isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this.isFilled = state.isFilled;
    }
  }]);

  return PatternInputDefinition;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pipe.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/pipe.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PIPE_TYPE": () => (/* binding */ PIPE_TYPE),
/* harmony export */   "createPipe": () => (/* binding */ createPipe),
/* harmony export */   "pipe": () => (/* binding */ pipe)
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");






/** Mask pipe source and destination types */

var PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */

function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mask);
  return function (value) {
    return masked.runIsolated(function (m) {
      m[from] = value;
      return m[to];
    });
  };
}
/** Pipes value through mask depending on mask type, source and destination options */

function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }

  return createPipe.apply(void 0, pipeArgs)(value);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].PIPE_TYPE = PIPE_TYPE;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPipe = createPipe;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].pipe = pipe;




/***/ }),

/***/ "./node_modules/imask/esm/masked/range.js":
/*!************************************************!*\
  !*** ./node_modules/imask/esm/masked/range.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedRange)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");














/** Pattern which accepts ranges */

var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedRange, _MaskedPattern);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedRange);

  function MaskedRange() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedRange);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedRange, [{
    key: "_matchFrom",
    get:
    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    function get() {
      return this.maxLength - String(this.from).length;
    }
    /**
      @override
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0,
        maxLength: this.maxLength || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    } // TODO str is a single char everytime

    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details;

      var _normalizePrepare = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.normalizePrepare)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));

      var _normalizePrepare2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_normalizePrepare, 2);

      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      if (!this.autofix || !ch) return ch;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var nextVal = this.value + ch;
      if (nextVal.length > this.maxLength) return '';

      var _this$boundaries = this.boundaries(nextVal),
          _this$boundaries2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$boundaries, 2),
          minstr = _this$boundaries2[0],
          maxstr = _this$boundaries2[1];

      if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];

      if (Number(minstr) > this.to) {
        if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
          return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
        }

        return toStr[nextVal.length - 1];
      }

      return ch;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedRange;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedRange = MaskedRange;




/***/ }),

/***/ "./node_modules/imask/esm/masked/regexp.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/regexp.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedRegExp)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");







/** Masking by RegExp */

var MaskedRegExp = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedRegExp, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedRegExp);

  function MaskedRegExp() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedRegExp);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedRegExp, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedRegExp = MaskedRegExp;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9waG9uZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07RUFDbEIsSUFBSUMsV0FBVyxHQUFHO0lBQ2hCQyxJQUFJLEVBQUU7RUFEVSxDQUFsQjtFQUdBSCxpREFBSyxDQUFDSSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQUQsRUFBNkNILFdBQTdDLENBQUw7QUFDRCxDQUxEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0IsNkJBQTZCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVvTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JUOUQ7QUFDakY7QUFDZjtBQUNYOztBQUUzQjtBQUNBLEVBQUUsd0VBQVM7O0FBRVgsZUFBZSx3RUFB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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLGdFQUFnQixDQUFDLHdFQUFJLENBQUMsd0VBQWU7O0FBRW5FLCtCQUErQix3RUFBYzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsd0VBQWM7QUFDNUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsd0VBQWM7QUFDNUM7QUFDQTs7QUFFQSwwRUFBMEUsYUFBYTtBQUN2RjtBQUNBOztBQUVBLGtGQUFrRix3RUFBSSxDQUFDLHdFQUFlO0FBQ3RHO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsQ0FBQyxtREFBYTtBQUNmLG1FQUFpQjs7QUFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFLcUk7QUFDeEk7QUFDTztBQUNIO0FBQ1M7QUFDbEI7O0FBRTFCOztBQUVBO0FBQ0EsRUFBRSx3RUFBUzs7QUFFWCxlQUFlLHdFQUFZOztBQUUzQjtBQUNBLElBQUksd0VBQWU7O0FBRW5CO0FBQ0E7O0FBRUEsRUFBRSx3RUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSx3RUFBSSxDQUFDLHdFQUFlO0FBQzFCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsQ0FBQyxnREFBTTtBQUNSLG9FQUFrQjs7QUFFaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9tb2R1bGVzL3Bob25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL2h0bWwtY29udGVudGVkaXRhYmxlLW1hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL2h0bWwtbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9tYXNrLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL2hvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9lbnVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvbnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi9jdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9waXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3JlZ2V4cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSU1hc2sgZnJvbSAnaW1hc2snO1xuXG5jb25zdCBwaG9uZSA9ICgpID0+IHtcbiAgbGV0IG1hc2tPcHRpb25zID0ge1xuICAgIG1hc2s6ICcoMDAwKTAwMC0wMDAwJyxcbiAgfTtcbiAgSU1hc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZy1mb3JtX19waG9uZScpLCBtYXNrT3B0aW9ucyk7XG59O1xuXG5leHBvcnQgeyBwaG9uZSB9O1xuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuXG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHtcbiAgICBzZXQgPSBSZWZsZWN0LnNldDtcbiAgfSBlbHNlIHtcbiAgICBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICB2YXIgZGVzYztcblxuICAgICAgaWYgKGJhc2UpIHtcbiAgICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICAgIGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xufVxuXG5mdW5jdGlvbiBfc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciwgaXNTdHJpY3QpIHtcbiAgdmFyIHMgPSBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyIHx8IHRhcmdldCk7XG5cbiAgaWYgKCFzICYmIGlzU3RyaWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gc2V0IHByb3BlcnR5Jyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBfLCBfY2xhc3NDYWxsQ2hlY2sgYXMgYSwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGFzIGIsIF90eXBlb2YgYXMgYywgX2luaGVyaXRzIGFzIGQsIF9jcmVhdGVTdXBlciBhcyBlLCBfc2xpY2VkVG9BcnJheSBhcyBmLCBfZ2V0IGFzIGcsIF9nZXRQcm90b3R5cGVPZiBhcyBoLCBfc2V0IGFzIGkgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgSFRNTE1hc2tFbGVtZW50IGZyb20gJy4vaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi9tYXNrLWVsZW1lbnQuanMnO1xuXG52YXIgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfSFRNTE1hc2tFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQsIF9IVE1MTWFza0VsZW1lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50KTtcblxuICBmdW5jdGlvbiBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50LCBbe1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6XG4gICAgLyoqXG4gICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBzdGFydFxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIHZhciBhbmNob3JPZmZzZXQgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldDtcbiAgICAgIHZhciBmb2N1c09mZnNldCA9IHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQ7XG5cbiAgICAgIGlmIChmb2N1c09mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA8IGZvY3VzT2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBhbmNob3JPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb2N1c09mZnNldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBlbmRcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uRW5kXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIHZhciBhbmNob3JPZmZzZXQgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldDtcbiAgICAgIHZhciBmb2N1c09mZnNldCA9IHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQ7XG5cbiAgICAgIGlmIChmb2N1c09mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA+IGZvY3VzT2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBhbmNob3JPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb2N1c09mZnNldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBTZXRzIEhUTUxFbGVtZW50IHNlbGVjdGlvblxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICBpZiAoIXRoaXMucm9vdEVsZW1lbnQuY3JlYXRlUmFuZ2UpIHJldHVybjtcbiAgICAgIHZhciByYW5nZSA9IHRoaXMucm9vdEVsZW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHRoaXMuaW5wdXQuZmlyc3RDaGlsZCB8fCB0aGlzLmlucHV0LCBzdGFydCk7XG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5pbnB1dC5sYXN0Q2hpbGQgfHwgdGhpcy5pbnB1dCwgZW5kKTtcbiAgICAgIHZhciByb290ID0gdGhpcy5yb290RWxlbWVudDtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbiAmJiByb290LmdldFNlbGVjdGlvbigpO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICBIVE1MRWxlbWVudCB2YWx1ZVxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC50ZXh0Q29udGVudDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudDtcbn0oSFRNTE1hc2tFbGVtZW50KTtcbklNYXNrLkhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCA9IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudDtcblxuZXhwb3J0IHsgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgTWFza0VsZW1lbnQgZnJvbSAnLi9tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuLyoqIEJyaWRnZSBiZXR3ZWVuIEhUTUxFbGVtZW50IGFuZCB7QGxpbmsgTWFza2VkfSAqL1xuXG52YXIgSFRNTE1hc2tFbGVtZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza0VsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxNYXNrRWxlbWVudCwgX01hc2tFbGVtZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxNYXNrRWxlbWVudCk7XG5cbiAgLyoqIE1hcHBpbmcgYmV0d2VlbiBIVE1MRWxlbWVudCBldmVudHMgYW5kIG1hc2sgaW50ZXJuYWwgZXZlbnRzICovXG5cbiAgLyoqIEhUTUxFbGVtZW50IHRvIHVzZSBtYXNrIG9uICovXG5cbiAgLyoqXG4gICAgQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IGlucHV0XG4gICovXG4gIGZ1bmN0aW9uIEhUTUxNYXNrRWxlbWVudChpbnB1dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MTWFza0VsZW1lbnQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIF90aGlzLl9oYW5kbGVycyA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKiogKi9cbiAgLy8gJEZsb3dGaXhNZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjgzOVxuXG5cbiAgX2NyZWF0ZUNsYXNzKEhUTUxNYXNrRWxlbWVudCwgW3tcbiAgICBrZXk6IFwicm9vdEVsZW1lbnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfdGhpcyRpbnB1dCRnZXRSb290Tm8sIF90aGlzJGlucHV0JGdldFJvb3RObzIsIF90aGlzJGlucHV0O1xuXG4gICAgICByZXR1cm4gKF90aGlzJGlucHV0JGdldFJvb3RObyA9IChfdGhpcyRpbnB1dCRnZXRSb290Tm8yID0gKF90aGlzJGlucHV0ID0gdGhpcy5pbnB1dCkuZ2V0Um9vdE5vZGUpID09PSBudWxsIHx8IF90aGlzJGlucHV0JGdldFJvb3RObzIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGlucHV0JGdldFJvb3RObzIuY2FsbChfdGhpcyRpbnB1dCkpICE9PSBudWxsICYmIF90aGlzJGlucHV0JGdldFJvb3RObyAhPT0gdm9pZCAwID8gX3RoaXMkaW5wdXQkZ2V0Um9vdE5vIDogZG9jdW1lbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAgSXMgZWxlbWVudCBpbiBmb2N1c1xuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAvLyRGbG93Rml4TWVcbiAgICAgIHJldHVybiB0aGlzLmlucHV0ID09PSB0aGlzLnJvb3RFbGVtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gc3RhcnRcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cbiAgICAvKipcbiAgICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIGVuZFxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25FbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBTZXRzIEhUTUxFbGVtZW50IHNlbGVjdGlvblxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEhUTUxFbGVtZW50IHZhbHVlXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBCaW5kcyBIVE1MRWxlbWVudCBldmVudHMgdG8gbWFzayBpbnRlcm5hbCBldmVudHNcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaGFuZGxlcnMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyhoYW5kbGVycykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5fdG9nZ2xlRXZlbnRIYW5kbGVyKEhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQW2V2ZW50XSwgaGFuZGxlcnNbZXZlbnRdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFVuYmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLl9oYW5kbGVycykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5fdG9nZ2xlRXZlbnRIYW5kbGVyKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl90b2dnbGVFdmVudEhhbmRsZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3RvZ2dsZUV2ZW50SGFuZGxlcihldmVudCwgaGFuZGxlcikge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW2V2ZW50XSkge1xuICAgICAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMuX2hhbmRsZXJzW2V2ZW50XSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9oYW5kbGVyc1tldmVudF07XG4gICAgICB9XG5cbiAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW2V2ZW50XSA9IGhhbmRsZXI7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhUTUxNYXNrRWxlbWVudDtcbn0oTWFza0VsZW1lbnQpO1xuSFRNTE1hc2tFbGVtZW50LkVWRU5UU19NQVAgPSB7XG4gIHNlbGVjdGlvbkNoYW5nZTogJ2tleWRvd24nLFxuICBpbnB1dDogJ2lucHV0JyxcbiAgZHJvcDogJ2Ryb3AnLFxuICBjbGljazogJ2NsaWNrJyxcbiAgZm9jdXM6ICdmb2N1cycsXG4gIGNvbW1pdDogJ2JsdXInXG59O1xuSU1hc2suSFRNTE1hc2tFbGVtZW50ID0gSFRNTE1hc2tFbGVtZW50O1xuXG5leHBvcnQgeyBIVE1MTWFza0VsZW1lbnQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBiIGFzIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IHsgb2JqZWN0SW5jbHVkZXMsIERJUkVDVElPTiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IEFjdGlvbkRldGFpbHMgZnJvbSAnLi4vY29yZS9hY3Rpb24tZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9kYXRlLmpzJztcbmltcG9ydCBjcmVhdGVNYXNrLCB7IG1hc2tlZENsYXNzIH0gZnJvbSAnLi4vbWFza2VkL2ZhY3RvcnkuanMnO1xuaW1wb3J0IE1hc2tFbGVtZW50IGZyb20gJy4vbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBIVE1MTWFza0VsZW1lbnQgZnJvbSAnLi9odG1sLW1hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50IGZyb20gJy4vaHRtbC1jb250ZW50ZWRpdGFibGUtbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcGF0dGVybi5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9iYXNlLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3BhdHRlcm4vY3Vyc29yLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3JlZ2V4cC5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9yYW5nZS5qcyc7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJtYXNrXCJdO1xuLyoqIExpc3RlbnMgdG8gZWxlbWVudCBldmVudHMgYW5kIGNvbnRyb2xzIGNoYW5nZXMgYmV0d2VlbiBlbGVtZW50IGFuZCB7QGxpbmsgTWFza2VkfSAqL1xuXG52YXIgSW5wdXRNYXNrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAgVmlldyBlbGVtZW50XG4gICAgQHJlYWRvbmx5XG4gICovXG5cbiAgLyoqXG4gICAgSW50ZXJuYWwge0BsaW5rIE1hc2tlZH0gbW9kZWxcbiAgICBAcmVhZG9ubHlcbiAgKi9cblxuICAvKipcbiAgICBAcGFyYW0ge01hc2tFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudH0gZWxcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAqL1xuICBmdW5jdGlvbiBJbnB1dE1hc2soZWwsIG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXRNYXNrKTtcblxuICAgIHRoaXMuZWwgPSBlbCBpbnN0YW5jZW9mIE1hc2tFbGVtZW50ID8gZWwgOiBlbC5pc0NvbnRlbnRFZGl0YWJsZSAmJiBlbC50YWdOYW1lICE9PSAnSU5QVVQnICYmIGVsLnRhZ05hbWUgIT09ICdURVhUQVJFQScgPyBuZXcgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50KGVsKSA6IG5ldyBIVE1MTWFza0VsZW1lbnQoZWwpO1xuICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayhvcHRzKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSAnJztcbiAgICB0aGlzLl9zYXZlU2VsZWN0aW9uID0gdGhpcy5fc2F2ZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uSW5wdXQgPSB0aGlzLl9vbklucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRHJvcCA9IHRoaXMuX29uRHJvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRm9jdXMgPSB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25DbGljayA9IHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmFsaWduQ3Vyc29yID0gdGhpcy5hbGlnbkN1cnNvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSA9IHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5fYmluZEV2ZW50cygpOyAvLyByZWZyZXNoXG5cblxuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gIH1cbiAgLyoqIFJlYWQgb3IgdXBkYXRlIG1hc2sgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhJbnB1dE1hc2ssIFt7XG4gICAga2V5OiBcIm1hc2tcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5tYXNrO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobWFzaykge1xuICAgICAgaWYgKHRoaXMubWFza0VxdWFscyhtYXNrKSkgcmV0dXJuOyAvLyAkRmxvd0ZpeE1lIE5vIGlkZWFzIC4uLiBhZnRlciB1cGRhdGVcblxuICAgICAgaWYgKCEobWFzayBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgJiYgdGhpcy5tYXNrZWQuY29uc3RydWN0b3IgPT09IG1hc2tlZENsYXNzKG1hc2spKSB7XG4gICAgICAgIHRoaXMubWFza2VkLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgIG1hc2s6IG1hc2tcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1hc2tlZCA9IGNyZWF0ZU1hc2soe1xuICAgICAgICBtYXNrOiBtYXNrXG4gICAgICB9KTtcbiAgICAgIG1hc2tlZC51bm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgIHRoaXMubWFza2VkID0gbWFza2VkO1xuICAgIH1cbiAgICAvKiogUmF3IHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtYXNrRXF1YWxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tFcXVhbHMobWFzaykge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDtcblxuICAgICAgcmV0dXJuIG1hc2sgPT0gbnVsbCB8fCAoKF90aGlzJG1hc2tlZCA9IHRoaXMubWFza2VkKSA9PT0gbnVsbCB8fCBfdGhpcyRtYXNrZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJG1hc2tlZC5tYXNrRXF1YWxzKG1hc2spKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0cikge1xuICAgICAgdGhpcy5tYXNrZWQudmFsdWUgPSBzdHI7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gICAgLyoqIFVubWFza2VkIHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdW5tYXNrZWRWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0cikge1xuICAgICAgdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZSA9IHN0cjtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgIH1cbiAgICAvKiogVHlwZWQgdW5tYXNrZWQgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC50eXBlZFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICB0aGlzLm1hc2tlZC50eXBlZFZhbHVlID0gdmFsO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgU3RhcnRzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50c1xuICAgICAgQHByb3RlY3RlZFxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYmluZEV2ZW50cygpIHtcbiAgICAgIHRoaXMuZWwuYmluZEV2ZW50cyh7XG4gICAgICAgIHNlbGVjdGlvbkNoYW5nZTogdGhpcy5fc2F2ZVNlbGVjdGlvbixcbiAgICAgICAgaW5wdXQ6IHRoaXMuX29uSW5wdXQsXG4gICAgICAgIGRyb3A6IHRoaXMuX29uRHJvcCxcbiAgICAgICAgY2xpY2s6IHRoaXMuX29uQ2xpY2ssXG4gICAgICAgIGZvY3VzOiB0aGlzLl9vbkZvY3VzLFxuICAgICAgICBjb21taXQ6IHRoaXMuX29uQ2hhbmdlXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBTdG9wcyBsaXN0ZW5pbmcgdG8gZWxlbWVudCBldmVudHNcbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bmJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VuYmluZEV2ZW50cygpIHtcbiAgICAgIGlmICh0aGlzLmVsKSB0aGlzLmVsLnVuYmluZEV2ZW50cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEZpcmVzIGN1c3RvbSBldmVudFxuICAgICAgQHByb3RlY3RlZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpcmVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmlyZUV2ZW50KGV2KSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgIGlmICghbGlzdGVuZXJzKSByZXR1cm47XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbC5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQ3VycmVudCBzZWxlY3Rpb24gc3RhcnRcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3Rpb25TdGFydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnNvckNoYW5naW5nID8gdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgOiB0aGlzLmVsLnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cbiAgICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cblxuICB9LCB7XG4gICAga2V5OiBcImN1cnNvclBvc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnNvckNoYW5naW5nID8gdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgOiB0aGlzLmVsLnNlbGVjdGlvbkVuZDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHBvcykge1xuICAgICAgaWYgKCF0aGlzLmVsIHx8ICF0aGlzLmVsLmlzQWN0aXZlKSByZXR1cm47XG4gICAgICB0aGlzLmVsLnNlbGVjdChwb3MsIHBvcyk7XG5cbiAgICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBTdG9yZXMgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3NhdmVTZWxlY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb25cbiAgICAgIC8qIGV2ICovXG4gICAgX3NhdmVTZWxlY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5lbC52YWx1ZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0VsZW1lbnQgdmFsdWUgd2FzIGNoYW5nZWQgb3V0c2lkZSBvZiBtYXNrLiBTeW5jcm9uaXplIG1hc2sgdXNpbmcgYG1hc2sudXBkYXRlVmFsdWUoKWAgdG8gd29yayBwcm9wZXJseS4nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIGVuZDogdGhpcy5jdXJzb3JQb3NcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKiBTeW5jcm9uaXplcyBtb2RlbCB2YWx1ZSBmcm9tIHZpZXcgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgdGhpcy5tYXNrZWQudmFsdWUgPSB0aGlzLmVsLnZhbHVlO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLm1hc2tlZC52YWx1ZTtcbiAgICB9XG4gICAgLyoqIFN5bmNyb25pemVzIHZpZXcgZnJvbSBtb2RlbCB2YWx1ZSwgZmlyZXMgY2hhbmdlIGV2ZW50cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlQ29udHJvbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDb250cm9sKCkge1xuICAgICAgdmFyIG5ld1VubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgICB2YXIgaXNDaGFuZ2VkID0gdGhpcy51bm1hc2tlZFZhbHVlICE9PSBuZXdVbm1hc2tlZFZhbHVlIHx8IHRoaXMudmFsdWUgIT09IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9IG5ld1VubWFza2VkVmFsdWU7XG4gICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKHRoaXMuZWwudmFsdWUgIT09IG5ld1ZhbHVlKSB0aGlzLmVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICBpZiAoaXNDaGFuZ2VkKSB0aGlzLl9maXJlQ2hhbmdlRXZlbnRzKCk7XG4gICAgfVxuICAgIC8qKiBVcGRhdGVzIG9wdGlvbnMgd2l0aCBkZWVwIGVxdWFsIGNoZWNrLCByZWNyZWF0ZXMgQHtsaW5rIE1hc2tlZH0gbW9kZWwgaWYgbWFzayB0eXBlIGNoYW5nZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZU9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgICB2YXIgbWFzayA9IG9wdHMubWFzayxcbiAgICAgICAgICByZXN0T3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRzLCBfZXhjbHVkZWQpO1xuXG4gICAgICB2YXIgdXBkYXRlTWFzayA9ICF0aGlzLm1hc2tFcXVhbHMobWFzayk7XG4gICAgICB2YXIgdXBkYXRlT3B0cyA9ICFvYmplY3RJbmNsdWRlcyh0aGlzLm1hc2tlZCwgcmVzdE9wdHMpO1xuICAgICAgaWYgKHVwZGF0ZU1hc2spIHRoaXMubWFzayA9IG1hc2s7XG4gICAgICBpZiAodXBkYXRlT3B0cykgdGhpcy5tYXNrZWQudXBkYXRlT3B0aW9ucyhyZXN0T3B0cyk7XG4gICAgICBpZiAodXBkYXRlTWFzayB8fCB1cGRhdGVPcHRzKSB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB9XG4gICAgLyoqIFVwZGF0ZXMgY3Vyc29yICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVDdXJzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQ3Vyc29yKGN1cnNvclBvcykge1xuICAgICAgaWYgKGN1cnNvclBvcyA9PSBudWxsKSByZXR1cm47XG4gICAgICB0aGlzLmN1cnNvclBvcyA9IGN1cnNvclBvczsgLy8gYWxzbyBxdWV1ZSBjaGFuZ2UgY3Vyc29yIGZvciBtb2JpbGUgYnJvd3NlcnNcblxuICAgICAgdGhpcy5fZGVsYXlVcGRhdGVDdXJzb3IoY3Vyc29yUG9zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBEZWxheXMgY3Vyc29yIHVwZGF0ZSB0byBzdXBwb3J0IG1vYmlsZSBicm93c2Vyc1xuICAgICAgQHByaXZhdGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2RlbGF5VXBkYXRlQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7XG5cbiAgICAgIHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgICAgdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5lbCkgcmV0dXJuOyAvLyBpZiB3YXMgZGVzdHJveWVkXG5cbiAgICAgICAgX3RoaXMuY3Vyc29yUG9zID0gX3RoaXMuX2NoYW5naW5nQ3Vyc29yUG9zO1xuXG4gICAgICAgIF90aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEZpcmVzIGN1c3RvbSBldmVudHNcbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpcmVDaGFuZ2VFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpcmVDaGFuZ2VFdmVudHMoKSB7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoJ2FjY2VwdCcsIHRoaXMuX2lucHV0RXZlbnQpO1xuXG4gICAgICBpZiAodGhpcy5tYXNrZWQuaXNDb21wbGV0ZSkgdGhpcy5fZmlyZUV2ZW50KCdjb21wbGV0ZScsIHRoaXMuX2lucHV0RXZlbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEFib3J0cyBkZWxheWVkIGN1cnNvciB1cGRhdGVcbiAgICAgIEBwcml2YXRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hYm9ydFVwZGF0ZUN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYWJvcnRVcGRhdGVDdXJzb3IoKSB7XG4gICAgICBpZiAodGhpcy5fY3Vyc29yQ2hhbmdpbmcpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2N1cnNvckNoYW5naW5nKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2N1cnNvckNoYW5naW5nO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiogQWxpZ25zIGN1cnNvciB0byBuZWFyZXN0IGF2YWlsYWJsZSBwb3NpdGlvbiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWxpZ25DdXJzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxpZ25DdXJzb3IoKSB7XG4gICAgICB0aGlzLmN1cnNvclBvcyA9IHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyh0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3ModGhpcy5jdXJzb3JQb3MsIERJUkVDVElPTi5MRUZUKSk7XG4gICAgfVxuICAgIC8qKiBBbGlnbnMgY3Vyc29yIG9ubHkgaWYgc2VsZWN0aW9uIGlzIGVtcHR5ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGlnbkN1cnNvckZyaWVuZGx5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsaWduQ3Vyc29yRnJpZW5kbHkoKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAhPT0gdGhpcy5jdXJzb3JQb3MpIHJldHVybjsgLy8gc2tpcCBpZiByYW5nZSBpcyBzZWxlY3RlZFxuXG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKiBBZGRzIGxpc3RlbmVyIG9uIGN1c3RvbSBldmVudCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXYsIGhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgdGhpcy5fbGlzdGVuZXJzW2V2XSA9IFtdO1xuXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZdLnB1c2goaGFuZGxlcik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiogUmVtb3ZlcyBjdXN0b20gZXZlbnQgbGlzdGVuZXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXYsIGhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBoSW5kZXggPSB0aGlzLl9saXN0ZW5lcnNbZXZdLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgIGlmIChoSW5kZXggPj0gMCkgdGhpcy5fbGlzdGVuZXJzW2V2XS5zcGxpY2UoaEluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiogSGFuZGxlcyB2aWV3IGlucHV0IGV2ZW50ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25JbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25JbnB1dChlKSB7XG4gICAgICB0aGlzLl9pbnB1dEV2ZW50ID0gZTtcblxuICAgICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTsgLy8gZml4IHN0cmFuZ2UgSUUgYmVoYXZpb3JcblxuXG4gICAgICBpZiAoIXRoaXMuX3NlbGVjdGlvbikgcmV0dXJuIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IEFjdGlvbkRldGFpbHMoIC8vIG5ldyBzdGF0ZVxuICAgICAgdGhpcy5lbC52YWx1ZSwgdGhpcy5jdXJzb3JQb3MsIC8vIG9sZCBzdGF0ZVxuICAgICAgdGhpcy52YWx1ZSwgdGhpcy5fc2VsZWN0aW9uKTtcbiAgICAgIHZhciBvbGRSYXdWYWx1ZSA9IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWU7XG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5tYXNrZWQuc3BsaWNlKGRldGFpbHMuc3RhcnRDaGFuZ2VQb3MsIGRldGFpbHMucmVtb3ZlZC5sZW5ndGgsIGRldGFpbHMuaW5zZXJ0ZWQsIGRldGFpbHMucmVtb3ZlRGlyZWN0aW9uKS5vZmZzZXQ7IC8vIGZvcmNlIGFsaWduIGluIHJlbW92ZSBkaXJlY3Rpb24gb25seSBpZiBubyBpbnB1dCBjaGFycyB3ZXJlIHJlbW92ZWRcbiAgICAgIC8vIG90aGVyd2lzZSB3ZSBzdGlsbCBuZWVkIHRvIGFsaWduIHdpdGggTk9ORSAodG8gZ2V0IG91dCBmcm9tIGZpeGVkIHN5bWJvbHMgZm9yIGluc3RhbmNlKVxuXG4gICAgICB2YXIgcmVtb3ZlRGlyZWN0aW9uID0gb2xkUmF3VmFsdWUgPT09IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWUgPyBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbiA6IERJUkVDVElPTi5OT05FO1xuICAgICAgdmFyIGN1cnNvclBvcyA9IHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyhkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zICsgb2Zmc2V0LCByZW1vdmVEaXJlY3Rpb24pO1xuICAgICAgaWYgKHJlbW92ZURpcmVjdGlvbiAhPT0gRElSRUNUSU9OLk5PTkUpIGN1cnNvclBvcyA9IHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIERJUkVDVElPTi5OT05FKTtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy51cGRhdGVDdXJzb3IoY3Vyc29yUG9zKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9pbnB1dEV2ZW50O1xuICAgIH1cbiAgICAvKiogSGFuZGxlcyB2aWV3IGNoYW5nZSBldmVudCBhbmQgY29tbWl0cyBtb2RlbCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkNoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLmVsLnZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXNrZWQuZG9Db21taXQoKTtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuXG4gICAgICB0aGlzLl9zYXZlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIC8qKiBIYW5kbGVzIHZpZXcgZHJvcCBldmVudCwgcHJldmVudHMgYnkgZGVmYXVsdCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uRHJvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Ecm9wKGV2KSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIC8qKiBSZXN0b3JlIGxhc3Qgc2VsZWN0aW9uIG9uIGZvY3VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25Gb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Gb2N1cyhldikge1xuICAgICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5KCk7XG4gICAgfVxuICAgIC8qKiBSZXN0b3JlIGxhc3Qgc2VsZWN0aW9uIG9uIGZvY3VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25DbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25DbGljayhldikge1xuICAgICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5KCk7XG4gICAgfVxuICAgIC8qKiBVbmJpbmQgdmlldyBldmVudHMgYW5kIHJlbW92ZXMgZWxlbWVudCByZWZlcmVuY2UgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX3VuYmluZEV2ZW50cygpOyAvLyAkRmxvd0ZpeE1lIHdoeSBub3QgZG8gc28/XG5cblxuICAgICAgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aCA9IDA7IC8vICRGbG93Rml4TWVcblxuICAgICAgZGVsZXRlIHRoaXMuZWw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0TWFzaztcbn0oKTtcbklNYXNrLklucHV0TWFzayA9IElucHV0TWFzaztcblxuZXhwb3J0IHsgSW5wdXRNYXNrIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuLyoqXG4gIEdlbmVyaWMgZWxlbWVudCBBUEkgdG8gdXNlIHdpdGggbWFza1xuICBAaW50ZXJmYWNlXG4qL1xudmFyIE1hc2tFbGVtZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFza0VsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tFbGVtZW50KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrRWxlbWVudCwgW3tcbiAgICBrZXk6IFwic2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6XG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiAqL1xuXG4gICAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBzdGFydCAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzdGFydDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc3RhcnQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25TdGFydDtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIHJldHVybiBzdGFydCAhPSBudWxsID8gc3RhcnQgOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBlbmQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdGlvbkVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGVuZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZW5kID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uRW5kO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgcmV0dXJuIGVuZCAhPSBudWxsID8gZW5kIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKiBTYWZlbHkgc2V0cyBlbGVtZW50IHNlbGVjdGlvbiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICBpZiAoc3RhcnQgPT0gbnVsbCB8fCBlbmQgPT0gbnVsbCB8fCBzdGFydCA9PT0gdGhpcy5zZWxlY3Rpb25TdGFydCAmJiBlbmQgPT09IHRoaXMuc2VsZWN0aW9uRW5kKSByZXR1cm47XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7fVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEV2ZW50cyhoYW5kbGVycykge31cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kRXZlbnRzKCkge31cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrRWxlbWVudDtcbn0oKTtcbklNYXNrLk1hc2tFbGVtZW50ID0gTWFza0VsZW1lbnQ7XG5cbmV4cG9ydCB7IE1hc2tFbGVtZW50IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgJy4vY2hhbmdlLWRldGFpbHMuanMnO1xuXG4vKiogUHJvdmlkZXMgZGV0YWlscyBvZiBjaGFuZ2luZyBpbnB1dCAqL1xuXG52YXIgQWN0aW9uRGV0YWlscyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKiBDdXJyZW50IGlucHV0IHZhbHVlICovXG5cbiAgLyoqIEN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICovXG5cbiAgLyoqIE9sZCBpbnB1dCB2YWx1ZSAqL1xuXG4gIC8qKiBPbGQgc2VsZWN0aW9uICovXG4gIGZ1bmN0aW9uIEFjdGlvbkRldGFpbHModmFsdWUsIGN1cnNvclBvcywgb2xkVmFsdWUsIG9sZFNlbGVjdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb25EZXRhaWxzKTtcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmN1cnNvclBvcyA9IGN1cnNvclBvcztcbiAgICB0aGlzLm9sZFZhbHVlID0gb2xkVmFsdWU7XG4gICAgdGhpcy5vbGRTZWxlY3Rpb24gPSBvbGRTZWxlY3Rpb247IC8vIGRvdWJsZSBjaGVjayBpZiBsZWZ0IHBhcnQgd2FzIGNoYW5nZWQgKGF1dG9maWxsaW5nLCBvdGhlciBub24tc3RhbmRhcmQgaW5wdXQgdHJpZ2dlcnMpXG5cbiAgICB3aGlsZSAodGhpcy52YWx1ZS5zbGljZSgwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKSAhPT0gdGhpcy5vbGRWYWx1ZS5zbGljZSgwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKSkge1xuICAgICAgLS10aGlzLm9sZFNlbGVjdGlvbi5zdGFydDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAgU3RhcnQgY2hhbmdpbmcgcG9zaXRpb25cbiAgICBAcmVhZG9ubHlcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhBY3Rpb25EZXRhaWxzLCBbe1xuICAgIGtleTogXCJzdGFydENoYW5nZVBvc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMuY3Vyc29yUG9zLCB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgSW5zZXJ0ZWQgc3ltYm9scyBjb3VudFxuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImluc2VydGVkQ291bnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnNvclBvcyAtIHRoaXMuc3RhcnRDaGFuZ2VQb3M7XG4gICAgfVxuICAgIC8qKlxuICAgICAgSW5zZXJ0ZWQgc3ltYm9sc1xuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImluc2VydGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHIodGhpcy5zdGFydENoYW5nZVBvcywgdGhpcy5pbnNlcnRlZENvdW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBSZW1vdmVkIHN5bWJvbHMgY291bnRcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVkQ291bnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIC8vIE1hdGgubWF4IGZvciBvcHBvc2l0ZSBvcGVyYXRpb25cbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLm9sZFNlbGVjdGlvbi5lbmQgLSB0aGlzLnN0YXJ0Q2hhbmdlUG9zIHx8IC8vIGZvciBEZWxldGVcbiAgICAgIHRoaXMub2xkVmFsdWUubGVuZ3RoIC0gdGhpcy52YWx1ZS5sZW5ndGgsIDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFJlbW92ZWQgc3ltYm9sc1xuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9sZFZhbHVlLnN1YnN0cih0aGlzLnN0YXJ0Q2hhbmdlUG9zLCB0aGlzLnJlbW92ZWRDb3VudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgVW5jaGFuZ2VkIGhlYWQgc3ltYm9sc1xuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhlYWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cmluZygwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBVbmNoYW5nZWQgdGFpbCBzeW1ib2xzXG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidGFpbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKHRoaXMuc3RhcnRDaGFuZ2VQb3MgKyB0aGlzLmluc2VydGVkQ291bnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFJlbW92ZSBkaXJlY3Rpb25cbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVEaXJlY3Rpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICghdGhpcy5yZW1vdmVkQ291bnQgfHwgdGhpcy5pbnNlcnRlZENvdW50KSByZXR1cm4gRElSRUNUSU9OLk5PTkU7IC8vIGFsaWduIHJpZ2h0IGlmIGRlbGV0ZSBhdCByaWdodFxuXG4gICAgICByZXR1cm4gKHRoaXMub2xkU2VsZWN0aW9uLmVuZCA9PT0gdGhpcy5jdXJzb3JQb3MgfHwgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQgPT09IHRoaXMuY3Vyc29yUG9zKSAmJiAvLyBpZiBub3QgcmFuZ2UgcmVtb3ZlZCAoZXZlbnQgd2l0aCBiYWNrc3BhY2UpXG4gICAgICB0aGlzLm9sZFNlbGVjdGlvbi5lbmQgPT09IHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0ID8gRElSRUNUSU9OLlJJR0hUIDogRElSRUNUSU9OLkxFRlQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFjdGlvbkRldGFpbHM7XG59KCk7XG5cbmV4cG9ydCB7IEFjdGlvbkRldGFpbHMgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5cbi8qKlxuICBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIG1vZGVsIHZhbHVlXG4gIEBwYXJhbSB7T2JqZWN0fSBbZGV0YWlsc11cbiAgQHBhcmFtIHtzdHJpbmd9IFtkZXRhaWxzLmluc2VydGVkXSAtIEluc2VydGVkIHN5bWJvbHNcbiAgQHBhcmFtIHtib29sZWFufSBbZGV0YWlscy5za2lwXSAtIENhbiBza2lwIGNoYXJzXG4gIEBwYXJhbSB7bnVtYmVyfSBbZGV0YWlscy5yZW1vdmVDb3VudF0gLSBSZW1vdmVkIHN5bWJvbHMgY291bnRcbiAgQHBhcmFtIHtudW1iZXJ9IFtkZXRhaWxzLnRhaWxTaGlmdF0gLSBBZGRpdGlvbmFsIG9mZnNldCBpZiBhbnkgY2hhbmdlcyBvY2N1cnJlZCBiZWZvcmUgdGFpbFxuKi9cbnZhciBDaGFuZ2VEZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqIEluc2VydGVkIHN5bWJvbHMgKi9cblxuICAvKiogQ2FuIHNraXAgY2hhcnMgKi9cblxuICAvKiogQWRkaXRpb25hbCBvZmZzZXQgaWYgYW55IGNoYW5nZXMgb2NjdXJyZWQgYmVmb3JlIHRhaWwgKi9cblxuICAvKiogUmF3IGluc2VydGVkIGlzIHVzZWQgYnkgZHluYW1pYyBtYXNrICovXG4gIGZ1bmN0aW9uIENoYW5nZURldGFpbHMoZGV0YWlscykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFuZ2VEZXRhaWxzKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgaW5zZXJ0ZWQ6ICcnLFxuICAgICAgcmF3SW5zZXJ0ZWQ6ICcnLFxuICAgICAgc2tpcDogZmFsc2UsXG4gICAgICB0YWlsU2hpZnQ6IDBcbiAgICB9LCBkZXRhaWxzKTtcbiAgfVxuICAvKipcbiAgICBBZ2dyZWdhdGUgY2hhbmdlc1xuICAgIEByZXR1cm5zIHtDaGFuZ2VEZXRhaWxzfSBgdGhpc2BcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDaGFuZ2VEZXRhaWxzLCBbe1xuICAgIGtleTogXCJhZ2dyZWdhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWdncmVnYXRlKGRldGFpbHMpIHtcbiAgICAgIHRoaXMucmF3SW5zZXJ0ZWQgKz0gZGV0YWlscy5yYXdJbnNlcnRlZDtcbiAgICAgIHRoaXMuc2tpcCA9IHRoaXMuc2tpcCB8fCBkZXRhaWxzLnNraXA7XG4gICAgICB0aGlzLmluc2VydGVkICs9IGRldGFpbHMuaW5zZXJ0ZWQ7XG4gICAgICB0aGlzLnRhaWxTaGlmdCArPSBkZXRhaWxzLnRhaWxTaGlmdDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiogVG90YWwgb2Zmc2V0IGNvbnNpZGVyaW5nIGFsbCBjaGFuZ2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvZmZzZXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhaWxTaGlmdCArIHRoaXMuaW5zZXJ0ZWQubGVuZ3RoO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaGFuZ2VEZXRhaWxzO1xufSgpO1xuXG5leHBvcnQgeyBDaGFuZ2VEZXRhaWxzIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuXG4vKiogUHJvdmlkZXMgZGV0YWlscyBvZiBjb250aW51b3VzIGV4dHJhY3RlZCB0YWlsICovXG52YXIgQ29udGludW91c1RhaWxEZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqIFRhaWwgdmFsdWUgYXMgc3RyaW5nICovXG5cbiAgLyoqIFRhaWwgc3RhcnQgcG9zaXRpb24gKi9cblxuICAvKiogU3RhcnQgcG9zaXRpb24gKi9cbiAgZnVuY3Rpb24gQ29udGludW91c1RhaWxEZXRhaWxzKCkge1xuICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gICAgdmFyIHN0b3AgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250aW51b3VzVGFpbERldGFpbHMpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgdGhpcy5zdG9wID0gc3RvcDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb250aW51b3VzVGFpbERldGFpbHMsIFt7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmQodGFpbCkge1xuICAgICAgdGhpcy52YWx1ZSArPSBTdHJpbmcodGFpbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRvKG1hc2tlZCkge1xuICAgICAgcmV0dXJuIG1hc2tlZC5hcHBlbmQodGhpcy50b1N0cmluZygpLCB7XG4gICAgICAgIHRhaWw6IHRydWVcbiAgICAgIH0pLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIGZyb206IHRoaXMuZnJvbSxcbiAgICAgICAgc3RvcDogdGhpcy5zdG9wXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bnNoaWZ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc2hpZnQoYmVmb3JlUG9zKSB7XG4gICAgICBpZiAoIXRoaXMudmFsdWUubGVuZ3RoIHx8IGJlZm9yZVBvcyAhPSBudWxsICYmIHRoaXMuZnJvbSA+PSBiZWZvcmVQb3MpIHJldHVybiAnJztcbiAgICAgIHZhciBzaGlmdENoYXIgPSB0aGlzLnZhbHVlWzBdO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gc2hpZnRDaGFyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaGlmdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICAgIGlmICghdGhpcy52YWx1ZS5sZW5ndGgpIHJldHVybiAnJztcbiAgICAgIHZhciBzaGlmdENoYXIgPSB0aGlzLnZhbHVlW3RoaXMudmFsdWUubGVuZ3RoIC0gMV07XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICByZXR1cm4gc2hpZnRDaGFyO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250aW51b3VzVGFpbERldGFpbHM7XG59KCk7XG5cbmV4cG9ydCB7IENvbnRpbnVvdXNUYWlsRGV0YWlscyBhcyBkZWZhdWx0IH07XG4iLCIvKipcbiAqIEFwcGxpZXMgbWFzayBvbiBlbGVtZW50LlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudHxNYXNrRWxlbWVudH0gZWwgLSBFbGVtZW50IHRvIGFwcGx5IG1hc2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gQ3VzdG9tIG1hc2sgb3B0aW9uc1xuICogQHJldHVybiB7SW5wdXRNYXNrfVxuICovXG5mdW5jdGlvbiBJTWFzayhlbCkge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIC8vIGN1cnJlbnRseSBhdmFpbGFibGUgb25seSBmb3IgaW5wdXQtbGlrZSBlbGVtZW50c1xuICByZXR1cm4gbmV3IElNYXNrLklucHV0TWFzayhlbCwgb3B0cyk7XG59XG5cbmV4cG9ydCB7IElNYXNrIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGMgYXMgX3R5cGVvZiB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi9jaGFuZ2UtZGV0YWlscy5qcyc7XG5cbi8qKiBDaGVja3MgaWYgdmFsdWUgaXMgc3RyaW5nICovXG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHwgc3RyIGluc3RhbmNlb2YgU3RyaW5nO1xufVxuLyoqXG4gIERpcmVjdGlvblxuICBAcHJvcCB7c3RyaW5nfSBOT05FXG4gIEBwcm9wIHtzdHJpbmd9IExFRlRcbiAgQHByb3Age3N0cmluZ30gRk9SQ0VfTEVGVFxuICBAcHJvcCB7c3RyaW5nfSBSSUdIVFxuICBAcHJvcCB7c3RyaW5nfSBGT1JDRV9SSUdIVFxuKi9cblxudmFyIERJUkVDVElPTiA9IHtcbiAgTk9ORTogJ05PTkUnLFxuICBMRUZUOiAnTEVGVCcsXG4gIEZPUkNFX0xFRlQ6ICdGT1JDRV9MRUZUJyxcbiAgUklHSFQ6ICdSSUdIVCcsXG4gIEZPUkNFX1JJR0hUOiAnRk9SQ0VfUklHSFQnXG59O1xuLyoqXG4gIERpcmVjdGlvblxuICBAZW51bSB7c3RyaW5nfVxuKi9cblxuLyoqIFJldHVybnMgbmV4dCBjaGFyIGluZGV4IGluIGRpcmVjdGlvbiAqL1xuZnVuY3Rpb24gaW5kZXhJbkRpcmVjdGlvbihwb3MsIGRpcmVjdGlvbikge1xuICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkgLS1wb3M7XG4gIHJldHVybiBwb3M7XG59XG4vKiogUmV0dXJucyBuZXh0IGNoYXIgcG9zaXRpb24gaW4gZGlyZWN0aW9uICovXG5cbmZ1bmN0aW9uIHBvc0luRGlyZWN0aW9uKHBvcywgZGlyZWN0aW9uKSB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgcmV0dXJuIC0tcG9zO1xuXG4gICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICByZXR1cm4gKytwb3M7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHBvcztcbiAgfVxufVxuLyoqICovXG5cbmZ1bmN0aW9uIGZvcmNlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX0xFRlQ7XG5cbiAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgIHJldHVybiBESVJFQ1RJT04uRk9SQ0VfUklHSFQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxufVxuLyoqIEVzY2FwZXMgcmVndWxhciBleHByZXNzaW9uIGNvbnRyb2wgY2hhcnMgKi9cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByZXBhcmUocHJlcCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShwcmVwKSA/IHByZXAgOiBbcHJlcCwgbmV3IENoYW5nZURldGFpbHMoKV07XG59IC8vIGNsb25lZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcG9iZXJlemtpbi9mYXN0LWRlZXAtZXF1YWwgd2l0aCBzbWFsbCBjaGFuZ2VzXG5cbmZ1bmN0aW9uIG9iamVjdEluY2x1ZGVzKGIsIGEpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuICB2YXIgYXJyQSA9IEFycmF5LmlzQXJyYXkoYSksXG4gICAgICBhcnJCID0gQXJyYXkuaXNBcnJheShiKSxcbiAgICAgIGk7XG5cbiAgaWYgKGFyckEgJiYgYXJyQikge1xuICAgIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghb2JqZWN0SW5jbHVkZXMoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcblxuICBpZiAoYSAmJiBiICYmIF90eXBlb2YoYSkgPT09ICdvYmplY3QnICYmIF90eXBlb2YoYikgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGRhdGVBID0gYSBpbnN0YW5jZW9mIERhdGUsXG4gICAgICAgIGRhdGVCID0gYiBpbnN0YW5jZW9mIERhdGU7XG4gICAgaWYgKGRhdGVBICYmIGRhdGVCKSByZXR1cm4gYS5nZXRUaW1lKCkgPT0gYi5nZXRUaW1lKCk7XG4gICAgaWYgKGRhdGVBICE9IGRhdGVCKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwLFxuICAgICAgICByZWdleHBCID0gYiBpbnN0YW5jZW9mIFJlZ0V4cDtcbiAgICBpZiAocmVnZXhwQSAmJiByZWdleHBCKSByZXR1cm4gYS50b1N0cmluZygpID09IGIudG9TdHJpbmcoKTtcbiAgICBpZiAocmVnZXhwQSAhPSByZWdleHBCKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhKTsgLy8gaWYgKGtleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lIC4uLiA/Pz9cbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghb2JqZWN0SW5jbHVkZXMoYltrZXlzW2ldXSwgYVtrZXlzW2ldXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4vKiogU2VsZWN0aW9uIHJhbmdlICovXG5cbmV4cG9ydCB7IERJUkVDVElPTiwgZXNjYXBlUmVnRXhwLCBmb3JjZURpcmVjdGlvbiwgaW5kZXhJbkRpcmVjdGlvbiwgaXNTdHJpbmcsIG5vcm1hbGl6ZVByZXBhcmUsIG9iamVjdEluY2x1ZGVzLCBwb3NJbkRpcmVjdGlvbiB9O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dE1hc2sgfSBmcm9tICcuL2NvbnRyb2xzL2lucHV0LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuL2NvcmUvaG9sZGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2NvcmUvaG9sZGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkIH0gZnJvbSAnLi9tYXNrZWQvYmFzZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZFBhdHRlcm4gfSBmcm9tICcuL21hc2tlZC9wYXR0ZXJuLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRW51bSB9IGZyb20gJy4vbWFza2VkL2VudW0uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRSYW5nZSB9IGZyb20gJy4vbWFza2VkL3JhbmdlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkTnVtYmVyIH0gZnJvbSAnLi9tYXNrZWQvbnVtYmVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRGF0ZSB9IGZyb20gJy4vbWFza2VkL2RhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRSZWdFeHAgfSBmcm9tICcuL21hc2tlZC9yZWdleHAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRGdW5jdGlvbiB9IGZyb20gJy4vbWFza2VkL2Z1bmN0aW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRHluYW1pYyB9IGZyb20gJy4vbWFza2VkL2R5bmFtaWMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVNYXNrIH0gZnJvbSAnLi9tYXNrZWQvZmFjdG9yeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tFbGVtZW50IH0gZnJvbSAnLi9jb250cm9scy9tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2h0bWwtbWFzay1lbGVtZW50LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50IH0gZnJvbSAnLi9jb250cm9scy9odG1sLWNvbnRlbnRlZGl0YWJsZS1tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgUElQRV9UWVBFLCBjcmVhdGVQaXBlLCBwaXBlIH0gZnJvbSAnLi9tYXNrZWQvcGlwZS5qcyc7XG5pbXBvcnQgJy4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgJy4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vY29yZS9hY3Rpb24tZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vbWFza2VkL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vbWFza2VkL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vbWFza2VkL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9tYXNrZWQvcGF0dGVybi9jdXJzb3IuanMnO1xuXG50cnkge1xuICBnbG9iYWxUaGlzLklNYXNrID0gSU1hc2s7XG59IGNhdGNoIChlKSB7fVxuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBmIGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgeyBpc1N0cmluZywgbm9ybWFsaXplUHJlcGFyZSwgZm9yY2VEaXJlY3Rpb24sIERJUkVDVElPTiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuLyoqIFN1cHBvcnRlZCBtYXNrIHR5cGUgKi9cblxuLyoqIFByb3ZpZGVzIGNvbW1vbiBtYXNraW5nIHN0dWZmICovXG52YXIgTWFza2VkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gJFNoYXBlPE1hc2tlZE9wdGlvbnM+OyBUT0RPIGFmdGVyIGZpeCBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvNDc3M1xuXG4gIC8qKiBAdHlwZSB7TWFza30gKi9cblxuICAvKiogKi9cbiAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIC8qKiBUcmFuc2Zvcm1zIHZhbHVlIGJlZm9yZSBtYXNrIHByb2Nlc3NpbmcgKi9cblxuICAvKiogVmFsaWRhdGVzIGlmIHZhbHVlIGlzIGFjY2VwdGFibGUgKi9cblxuICAvKiogRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG5cbiAgLyoqIEZvcm1hdCB0eXBlZCB2YWx1ZSB0byBzdHJpbmcgKi9cblxuICAvKiogUGFyc2Ugc3RyZ2luIHRvIGdldCB0eXBlZCB2YWx1ZSAqL1xuXG4gIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuICBmdW5jdGlvbiBNYXNrZWQob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWQpO1xuXG4gICAgdGhpcy5fdmFsdWUgPSAnJztcblxuICAgIHRoaXMuX3VwZGF0ZShPYmplY3QuYXNzaWduKHt9LCBNYXNrZWQuREVGQVVMVFMsIG9wdHMpKTtcblxuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbiAgLyoqIFNldHMgYW5kIGFwcGxpZXMgbmV3IG9wdGlvbnMgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWQsIFt7XG4gICAga2V5OiBcInVwZGF0ZU9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG9wdHMpLmxlbmd0aCkgcmV0dXJuOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIHRoaXMud2l0aFZhbHVlUmVmcmVzaCh0aGlzLl91cGRhdGUuYmluZCh0aGlzLCBvcHRzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgU2V0cyBuZXcgb3B0aW9uc1xuICAgICAgQHByb3RlY3RlZFxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRzKTtcbiAgICB9XG4gICAgLyoqIE1hc2sgc3RhdGUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBzdGF0ZS5fdmFsdWU7XG4gICAgfVxuICAgIC8qKiBSZXNldHMgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuICAgIC8qKiBSZXNvbHZlIG5ldyB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzb2x2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hcHBlbmQodmFsdWUsIHt9LCAnJyk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9QYXJzZSh0aGlzLnZhbHVlKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5kb0Zvcm1hdCh2YWx1ZSk7XG4gICAgfVxuICAgIC8qKiBWYWx1ZSB0aGF0IGluY2x1ZGVzIHJhdyB1c2VyIGlucHV0ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyYXdJbnB1dFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5leHRyYWN0SW5wdXQoMCwgdGhpcy52YWx1ZS5sZW5ndGgsIHtcbiAgICAgICAgcmF3OiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xuICAgICAgICByYXc6IHRydWVcbiAgICAgIH0sICcnKTtcbiAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0ZpbGxlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgICB9XG4gICAgLyoqIEZpbmRzIG5lYXJlc3QgaW5wdXQgcG9zaXRpb24gaW4gZGlyZWN0aW9uICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKiogRXh0cmFjdHMgdmFsdWUgaW4gcmFuZ2UgY29uc2lkZXJpbmcgZmxhZ3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zbGljZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgfVxuICAgIC8qKiBFeHRyYWN0cyB0YWlsIGluIHJhbmdlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zKSwgZnJvbVBvcyk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIHRhaWwgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xuICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIGNoYXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICBpZiAoIWNoKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHRoaXMuX3ZhbHVlICs9IGNoO1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgaW5zZXJ0ZWQ6IGNoLFxuICAgICAgICByYXdJbnNlcnRlZDogY2hcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBjaGFyICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBjaGVja1RhaWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciBjb25zaXN0ZW50U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgdmFyIGRldGFpbHM7XG5cbiAgICAgIHZhciBfbm9ybWFsaXplUHJlcGFyZSA9IG5vcm1hbGl6ZVByZXBhcmUodGhpcy5kb1ByZXBhcmUoY2gsIGZsYWdzKSk7XG5cbiAgICAgIHZhciBfbm9ybWFsaXplUHJlcGFyZTIgPSBfc2xpY2VkVG9BcnJheShfbm9ybWFsaXplUHJlcGFyZSwgMik7XG5cbiAgICAgIGNoID0gX25vcm1hbGl6ZVByZXBhcmUyWzBdO1xuICAgICAgZGV0YWlscyA9IF9ub3JtYWxpemVQcmVwYXJlMlsxXTtcbiAgICAgIGRldGFpbHMgPSBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncykpO1xuXG4gICAgICBpZiAoZGV0YWlscy5pbnNlcnRlZCkge1xuICAgICAgICB2YXIgY29uc2lzdGVudFRhaWw7XG4gICAgICAgIHZhciBhcHBlbmRlZCA9IHRoaXMuZG9WYWxpZGF0ZShmbGFncykgIT09IGZhbHNlO1xuXG4gICAgICAgIGlmIChhcHBlbmRlZCAmJiBjaGVja1RhaWwgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIHZhbGlkYXRpb24gb2ssIGNoZWNrIHRhaWxcbiAgICAgICAgICB2YXIgYmVmb3JlVGFpbFN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAgIGlmICh0aGlzLm92ZXJ3cml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc2lzdGVudFRhaWwgPSBjaGVja1RhaWwuc3RhdGU7XG4gICAgICAgICAgICBjaGVja1RhaWwudW5zaGlmdCh0aGlzLnZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHRhaWxEZXRhaWxzID0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCk7XG4gICAgICAgICAgYXBwZW5kZWQgPSB0YWlsRGV0YWlscy5yYXdJbnNlcnRlZCA9PT0gY2hlY2tUYWlsLnRvU3RyaW5nKCk7IC8vIG5vdCBvaywgdHJ5IHNoaWZ0XG5cbiAgICAgICAgICBpZiAoIShhcHBlbmRlZCAmJiB0YWlsRGV0YWlscy5pbnNlcnRlZCkgJiYgdGhpcy5vdmVyd3JpdGUgPT09ICdzaGlmdCcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBiZWZvcmVUYWlsU3RhdGU7XG4gICAgICAgICAgICBjb25zaXN0ZW50VGFpbCA9IGNoZWNrVGFpbC5zdGF0ZTtcbiAgICAgICAgICAgIGNoZWNrVGFpbC5zaGlmdCgpO1xuICAgICAgICAgICAgdGFpbERldGFpbHMgPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKTtcbiAgICAgICAgICAgIGFwcGVuZGVkID0gdGFpbERldGFpbHMucmF3SW5zZXJ0ZWQgPT09IGNoZWNrVGFpbC50b1N0cmluZygpO1xuICAgICAgICAgIH0gLy8gaWYgb2ssIHJvbGxiYWNrIHN0YXRlIGFmdGVyIHRhaWxcblxuXG4gICAgICAgICAgaWYgKGFwcGVuZGVkICYmIHRhaWxEZXRhaWxzLmluc2VydGVkKSB0aGlzLnN0YXRlID0gYmVmb3JlVGFpbFN0YXRlO1xuICAgICAgICB9IC8vIHJldmVydCBhbGwgaWYgc29tZXRoaW5nIHdlbnQgd3JvbmdcblxuXG4gICAgICAgIGlmICghYXBwZW5kZWQpIHtcbiAgICAgICAgICBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gY29uc2lzdGVudFN0YXRlO1xuICAgICAgICAgIGlmIChjaGVja1RhaWwgJiYgY29uc2lzdGVudFRhaWwpIGNoZWNrVGFpbC5zdGF0ZSA9IGNvbnNpc3RlbnRUYWlsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBvcHRpb25hbCBwbGFjZWhvbGRlciBhdCBlbmQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgb3B0aW9uYWwgZWFnZXIgcGxhY2Vob2xkZXIgYXQgZW5kICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kRWFnZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZEVhZ2VyKCkge1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIHN5bWJvbHMgY29uc2lkZXJpbmcgZmxhZ3MgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKHN0ciwgZmxhZ3MsIHRhaWwpIHtcbiAgICAgIGlmICghaXNTdHJpbmcoc3RyKSkgdGhyb3cgbmV3IEVycm9yKCd2YWx1ZSBzaG91bGQgYmUgc3RyaW5nJyk7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB2YXIgY2hlY2tUYWlsID0gaXNTdHJpbmcodGFpbCkgPyBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSkgOiB0YWlsO1xuICAgICAgaWYgKGZsYWdzICYmIGZsYWdzLnRhaWwpIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgc3RyLmxlbmd0aDsgKytjaSkge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRDaGFyKHN0cltjaV0sIGZsYWdzLCBjaGVja1RhaWwpKTtcbiAgICAgIH0gLy8gYXBwZW5kIHRhaWwgYnV0IGFnZ3JlZ2F0ZSBvbmx5IHRhaWxTaGlmdFxuXG5cbiAgICAgIGlmIChjaGVja1RhaWwgIT0gbnVsbCkge1xuICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKS50YWlsU2hpZnQ7IC8vIFRPRE8gaXQncyBhIGdvb2QgaWRlYSB0byBjbGVhciBzdGF0ZSBhZnRlciBhcHBlbmRpbmcgZW5kc1xuICAgICAgICAvLyBidXQgaXQgY2F1c2VzIGJ1Z3Mgd2hlbiBvbmUgYXBwZW5kIGNhbGxzIGFub3RoZXIgKHdoZW4gZHluYW1pYyBkaXNwYXRjaCBzZXQgcmF3SW5wdXRWYWx1ZSlcbiAgICAgICAgLy8gdGhpcy5fcmVzZXRCZWZvcmVUYWlsU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWFnZXIgJiYgZmxhZ3MgIT09IG51bGwgJiYgZmxhZ3MgIT09IHZvaWQgMCAmJiBmbGFncy5pbnB1dCAmJiBzdHIpIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kRWFnZXIoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMCwgZnJvbVBvcykgKyB0aGlzLnZhbHVlLnNsaWNlKHRvUG9zKTtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgICAvKiogQ2FsbHMgZnVuY3Rpb24gYW5kIHJlYXBwbGllcyBjdXJyZW50IHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3aXRoVmFsdWVSZWZyZXNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpdGhWYWx1ZVJlZnJlc2goZm4pIHtcbiAgICAgIGlmICh0aGlzLl9yZWZyZXNoaW5nIHx8ICF0aGlzLmlzSW5pdGlhbGl6ZWQpIHJldHVybiBmbigpO1xuICAgICAgdGhpcy5fcmVmcmVzaGluZyA9IHRydWU7XG4gICAgICB2YXIgcmF3SW5wdXQgPSB0aGlzLnJhd0lucHV0VmFsdWU7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdmFyIHJldCA9IGZuKCk7XG4gICAgICB0aGlzLnJhd0lucHV0VmFsdWUgPSByYXdJbnB1dDsgLy8gYXBwZW5kIGxvc3QgdHJhaWxpbmcgY2hhcnMgYXQgZW5kXG5cbiAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUgIT09IHZhbHVlICYmIHZhbHVlLmluZGV4T2YodGhpcy52YWx1ZSkgPT09IDApIHtcbiAgICAgICAgdGhpcy5hcHBlbmQodmFsdWUuc2xpY2UodGhpcy52YWx1ZS5sZW5ndGgpLCB7fSwgJycpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5fcmVmcmVzaGluZztcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicnVuSXNvbGF0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcnVuSXNvbGF0ZWQoZm4pIHtcbiAgICAgIGlmICh0aGlzLl9pc29sYXRlZCB8fCAhdGhpcy5pc0luaXRpYWxpemVkKSByZXR1cm4gZm4odGhpcyk7XG4gICAgICB0aGlzLl9pc29sYXRlZCA9IHRydWU7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgdmFyIHJldCA9IGZuKHRoaXMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgZGVsZXRlIHRoaXMuX2lzb2xhdGVkO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBQcmVwYXJlcyBzdHJpbmcgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZ1xuICAgICAgQHByb3RlY3RlZFxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ByZXBhcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9QcmVwYXJlKHN0cikge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHJldHVybiB0aGlzLnByZXBhcmUgPyB0aGlzLnByZXBhcmUoc3RyLCB0aGlzLCBmbGFncykgOiBzdHI7XG4gICAgfVxuICAgIC8qKlxuICAgICAgVmFsaWRhdGVzIGlmIHZhbHVlIGlzIGFjY2VwdGFibGVcbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgICByZXR1cm4gKCF0aGlzLnZhbGlkYXRlIHx8IHRoaXMudmFsaWRhdGUodGhpcy52YWx1ZSwgdGhpcywgZmxhZ3MpKSAmJiAoIXRoaXMucGFyZW50IHx8IHRoaXMucGFyZW50LmRvVmFsaWRhdGUoZmxhZ3MpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBEb2VzIGFkZGl0aW9uYWwgcHJvY2Vzc2luZyBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcbiAgICAgIEBwcm90ZWN0ZWRcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICBpZiAodGhpcy5jb21taXQpIHRoaXMuY29tbWl0KHRoaXMudmFsdWUsIHRoaXMpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvRm9ybWF0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXQgPyB0aGlzLmZvcm1hdCh2YWx1ZSwgdGhpcykgOiB2YWx1ZTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1BhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUGFyc2Uoc3RyKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZSA/IHRoaXMucGFyc2Uoc3RyLCB0aGlzKSA6IHN0cjtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzcGxpY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgaW5zZXJ0ZWQsIHJlbW92ZURpcmVjdGlvbikge1xuICAgICAgdmFyIHRhaWxQb3MgPSBzdGFydCArIGRlbGV0ZUNvdW50O1xuICAgICAgdmFyIHRhaWwgPSB0aGlzLmV4dHJhY3RUYWlsKHRhaWxQb3MpO1xuICAgICAgdmFyIG9sZFJhd1ZhbHVlO1xuXG4gICAgICBpZiAodGhpcy5lYWdlcikge1xuICAgICAgICByZW1vdmVEaXJlY3Rpb24gPSBmb3JjZURpcmVjdGlvbihyZW1vdmVEaXJlY3Rpb24pO1xuICAgICAgICBvbGRSYXdWYWx1ZSA9IHRoaXMuZXh0cmFjdElucHV0KDAsIHRhaWxQb3MsIHtcbiAgICAgICAgICByYXc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydENoYW5nZVBvcyA9IHRoaXMubmVhcmVzdElucHV0UG9zKHN0YXJ0LCBkZWxldGVDb3VudCA+IDEgJiYgc3RhcnQgIT09IDAgJiYgIXRoaXMuZWFnZXIgPyBESVJFQ1RJT04uTk9ORSA6IHJlbW92ZURpcmVjdGlvbik7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgdGFpbFNoaWZ0OiBzdGFydENoYW5nZVBvcyAtIHN0YXJ0IC8vIGFkanVzdCB0YWlsU2hpZnQgaWYgc3RhcnQgd2FzIGFsaWduZWRcblxuICAgICAgfSkuYWdncmVnYXRlKHRoaXMucmVtb3ZlKHN0YXJ0Q2hhbmdlUG9zKSk7XG5cbiAgICAgIGlmICh0aGlzLmVhZ2VyICYmIHJlbW92ZURpcmVjdGlvbiAhPT0gRElSRUNUSU9OLk5PTkUgJiYgb2xkUmF3VmFsdWUgPT09IHRoaXMucmF3SW5wdXRWYWx1ZSkge1xuICAgICAgICBpZiAocmVtb3ZlRGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xuICAgICAgICAgIHZhciB2YWxMZW5ndGg7XG5cbiAgICAgICAgICB3aGlsZSAob2xkUmF3VmFsdWUgPT09IHRoaXMucmF3SW5wdXRWYWx1ZSAmJiAodmFsTGVuZ3RoID0gdGhpcy52YWx1ZS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgICAgICAgIHRhaWxTaGlmdDogLTFcbiAgICAgICAgICAgIH0pKS5hZ2dyZWdhdGUodGhpcy5yZW1vdmUodmFsTGVuZ3RoIC0gMSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZW1vdmVEaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkge1xuICAgICAgICAgIHRhaWwudW5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmFwcGVuZChpbnNlcnRlZCwge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfSwgdGFpbCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXNrRXF1YWxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tFcXVhbHMobWFzaykge1xuICAgICAgcmV0dXJuIHRoaXMubWFzayA9PT0gbWFzaztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkO1xufSgpO1xuTWFza2VkLkRFRkFVTFRTID0ge1xuICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdCh2KSB7XG4gICAgcmV0dXJuIHY7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh2KSB7XG4gICAgcmV0dXJuIHY7XG4gIH1cbn07XG5JTWFzay5NYXNrZWQgPSBNYXNrZWQ7XG5cbmV4cG9ydCB7IE1hc2tlZCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZiBhcyBfc2xpY2VkVG9BcnJheSwgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiwgaSBhcyBfc2V0IH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xuaW1wb3J0IE1hc2tlZFJhbmdlIGZyb20gJy4vcmFuZ2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY3Vyc29yLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuXG4vKiogRGF0ZSBtYXNrICovXG5cbnZhciBNYXNrZWREYXRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xuICBfaW5oZXJpdHMoTWFza2VkRGF0ZSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRGF0ZSk7XG5cbiAgLyoqIFBhdHRlcm4gbWFzayBmb3IgZGF0ZSBhY2NvcmRpbmcgdG8ge0BsaW5rIE1hc2tlZERhdGUjZm9ybWF0fSAqL1xuXG4gIC8qKiBTdGFydCBkYXRlICovXG5cbiAgLyoqIEVuZCBkYXRlICovXG5cbiAgLyoqICovXG5cbiAgLyoqXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgKi9cbiAgZnVuY3Rpb24gTWFza2VkRGF0ZShvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZERhdGUpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuREVGQVVMVFMsIG9wdHMpKTtcbiAgfVxuICAvKipcbiAgICBAb3ZlcnJpZGVcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWREYXRlLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzayA9PT0gRGF0ZSkgZGVsZXRlIG9wdHMubWFzaztcbiAgICAgIGlmIChvcHRzLnBhdHRlcm4pIG9wdHMubWFzayA9IG9wdHMucGF0dGVybjtcbiAgICAgIHZhciBibG9ja3MgPSBvcHRzLmJsb2NrcztcbiAgICAgIG9wdHMuYmxvY2tzID0gT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRGF0ZS5HRVRfREVGQVVMVF9CTE9DS1MoKSk7IC8vIGFkanVzdCB5ZWFyIGJsb2NrXG5cbiAgICAgIGlmIChvcHRzLm1pbikgb3B0cy5ibG9ja3MuWS5mcm9tID0gb3B0cy5taW4uZ2V0RnVsbFllYXIoKTtcbiAgICAgIGlmIChvcHRzLm1heCkgb3B0cy5ibG9ja3MuWS50byA9IG9wdHMubWF4LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgIGlmIChvcHRzLm1pbiAmJiBvcHRzLm1heCAmJiBvcHRzLmJsb2Nrcy5ZLmZyb20gPT09IG9wdHMuYmxvY2tzLlkudG8pIHtcbiAgICAgICAgb3B0cy5ibG9ja3MubS5mcm9tID0gb3B0cy5taW4uZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIG9wdHMuYmxvY2tzLm0udG8gPSBvcHRzLm1heC5nZXRNb250aCgpICsgMTtcblxuICAgICAgICBpZiAob3B0cy5ibG9ja3MubS5mcm9tID09PSBvcHRzLmJsb2Nrcy5tLnRvKSB7XG4gICAgICAgICAgb3B0cy5ibG9ja3MuZC5mcm9tID0gb3B0cy5taW4uZ2V0RGF0ZSgpO1xuICAgICAgICAgIG9wdHMuYmxvY2tzLmQudG8gPSBvcHRzLm1heC5nZXREYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihvcHRzLmJsb2NrcywgdGhpcy5ibG9ja3MsIGJsb2Nrcyk7IC8vIGFkZCBhdXRvZml4XG5cbiAgICAgIE9iamVjdC5rZXlzKG9wdHMuYmxvY2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChiaykge1xuICAgICAgICB2YXIgYiA9IG9wdHMuYmxvY2tzW2JrXTtcbiAgICAgICAgaWYgKCEoJ2F1dG9maXgnIGluIGIpICYmICdhdXRvZml4JyBpbiBvcHRzKSBiLmF1dG9maXggPSBvcHRzLmF1dG9maXg7XG4gICAgICB9KTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF9nZXQyO1xuXG4gICAgICB2YXIgZGF0ZSA9IHRoaXMuZGF0ZTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkgJiYgKCF0aGlzLmlzQ29tcGxldGUgfHwgdGhpcy5pc0RhdGVFeGlzdCh0aGlzLnZhbHVlKSAmJiBkYXRlICE9IG51bGwgJiYgKHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPD0gZGF0ZSkgJiYgKHRoaXMubWF4ID09IG51bGwgfHwgZGF0ZSA8PSB0aGlzLm1heCkpO1xuICAgIH1cbiAgICAvKiogQ2hlY2tzIGlmIGRhdGUgaXMgZXhpc3RzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0RhdGVFeGlzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RhdGVFeGlzdChzdHIpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdCh0aGlzLnBhcnNlKHN0ciwgdGhpcyksIHRoaXMpLmluZGV4T2Yoc3RyKSA+PSAwO1xuICAgIH1cbiAgICAvKiogUGFyc2VkIERhdGUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGVkVmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChkYXRlKSB7XG4gICAgICB0aGlzLnR5cGVkVmFsdWUgPSBkYXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcInR5cGVkVmFsdWVcIiwgdGhpcykgOiBudWxsO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJ0eXBlZFZhbHVlXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWFza0VxdWFsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrRXF1YWxzKG1hc2spIHtcbiAgICAgIHJldHVybiBtYXNrID09PSBEYXRlIHx8IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJtYXNrRXF1YWxzXCIsIHRoaXMpLmNhbGwodGhpcywgbWFzayk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZERhdGU7XG59KE1hc2tlZFBhdHRlcm4pO1xuTWFza2VkRGF0ZS5ERUZBVUxUUyA9IHtcbiAgcGF0dGVybjogJ2R7Ln1gbXsufWBZJyxcbiAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQoZGF0ZSkge1xuICAgIGlmICghZGF0ZSkgcmV0dXJuICcnO1xuICAgIHZhciBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgdmFyIG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIFtkYXksIG1vbnRoLCB5ZWFyXS5qb2luKCcuJyk7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgICB2YXIgX3N0ciRzcGxpdCA9IHN0ci5zcGxpdCgnLicpLFxuICAgICAgICBfc3RyJHNwbGl0MiA9IF9zbGljZWRUb0FycmF5KF9zdHIkc3BsaXQsIDMpLFxuICAgICAgICBkYXkgPSBfc3RyJHNwbGl0MlswXSxcbiAgICAgICAgbW9udGggPSBfc3RyJHNwbGl0MlsxXSxcbiAgICAgICAgeWVhciA9IF9zdHIkc3BsaXQyWzJdO1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbiAgfVxufTtcblxuTWFza2VkRGF0ZS5HRVRfREVGQVVMVF9CTE9DS1MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgZDoge1xuICAgICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgICBmcm9tOiAxLFxuICAgICAgdG86IDMxLFxuICAgICAgbWF4TGVuZ3RoOiAyXG4gICAgfSxcbiAgICBtOiB7XG4gICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICAgIGZyb206IDEsXG4gICAgICB0bzogMTIsXG4gICAgICBtYXhMZW5ndGg6IDJcbiAgICB9LFxuICAgIFk6IHtcbiAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgICAgZnJvbTogMTkwMCxcbiAgICAgIHRvOiA5OTk5XG4gICAgfVxuICB9O1xufTtcblxuSU1hc2suTWFza2VkRGF0ZSA9IE1hc2tlZERhdGU7XG5cbmV4cG9ydCB7IE1hc2tlZERhdGUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YsIGkgYXMgX3NldCwgYiBhcyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcblxudmFyIF9leGNsdWRlZCA9IFtcImNvbXBpbGVkTWFza3NcIiwgXCJjdXJyZW50TWFza1JlZlwiLCBcImN1cnJlbnRNYXNrXCJdO1xuXG4vKiogRHluYW1pYyBtYXNrIGZvciBjaG9vc2luZyBhcHJvcHJpYXRlIG1hc2sgaW4gcnVuLXRpbWUgKi9cbnZhciBNYXNrZWREeW5hbWljID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWREeW5hbWljLCBfTWFza2VkKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZER5bmFtaWMpO1xuXG4gIC8qKiBDdXJyZW50bHkgY2hvc2VuIG1hc2sgKi9cblxuICAvKiogQ29tcGxpbGVkIHtAbGluayBNYXNrZWR9IG9wdGlvbnMgKi9cblxuICAvKiogQ2hvb3NlcyB7QGxpbmsgTWFza2VkfSBkZXBlbmRpbmcgb24gaW5wdXQgdmFsdWUgKi9cblxuICAvKipcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAqL1xuICBmdW5jdGlvbiBNYXNrZWREeW5hbWljKG9wdHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRHluYW1pYyk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZER5bmFtaWMuREVGQVVMVFMsIG9wdHMpKTtcbiAgICBfdGhpcy5jdXJyZW50TWFzayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxuICAgIEBvdmVycmlkZVxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZER5bmFtaWMsIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICBpZiAoJ21hc2snIGluIG9wdHMpIHtcbiAgICAgICAgLy8gbWFzayBjb3VsZCBiZSB0b3RhbGx5IGR5bmFtaWMgd2l0aCBvbmx5IGBkaXNwYXRjaGAgb3B0aW9uXG4gICAgICAgIHRoaXMuY29tcGlsZWRNYXNrcyA9IEFycmF5LmlzQXJyYXkob3B0cy5tYXNrKSA/IG9wdHMubWFzay5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gY3JlYXRlTWFzayhtKTtcbiAgICAgICAgfSkgOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaChjaCwgZmxhZ3MpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRDaGFyKGNoLCBmbGFncykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGx5RGlzcGF0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGx5RGlzcGF0Y2goKSB7XG4gICAgICB2YXIgYXBwZW5kZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBwcmV2VmFsdWVCZWZvcmVUYWlsID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlICE9IG51bGwgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMudmFsdWU7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMucmF3SW5wdXRWYWx1ZTtcbiAgICAgIHZhciBpbnNlcnRWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gLy8gJEZsb3dGaXhNZSAtIHRpcmVkIHRvIGZpZ2h0IHdpdGggdHlwZSBzeXN0ZW1cbiAgICAgIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3Jhd0lucHV0VmFsdWUgOiBpbnB1dFZhbHVlO1xuICAgICAgdmFyIHRhaWxWYWx1ZSA9IGlucHV0VmFsdWUuc2xpY2UoaW5zZXJ0VmFsdWUubGVuZ3RoKTtcbiAgICAgIHZhciBwcmV2TWFzayA9IHRoaXMuY3VycmVudE1hc2s7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB2YXIgcHJldk1hc2tTdGF0ZSA9IHByZXZNYXNrICYmIHByZXZNYXNrLnN0YXRlOyAvLyBjbG9uZSBmbGFncyB0byBwcmV2ZW50IG92ZXJ3cml0aW5nIGBfYmVmb3JlVGFpbFN0YXRlYFxuXG4gICAgICB0aGlzLmN1cnJlbnRNYXNrID0gdGhpcy5kb0Rpc3BhdGNoKGFwcGVuZGVkLCBPYmplY3QuYXNzaWduKHt9LCBmbGFncykpOyAvLyByZXN0b3JlIHN0YXRlIGFmdGVyIGRpc3BhdGNoXG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrICE9PSBwcmV2TWFzaykge1xuICAgICAgICAgIC8vIGlmIG1hc2sgY2hhbmdlZCByZWFwcGx5IGlucHV0XG4gICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5yZXNldCgpO1xuXG4gICAgICAgICAgaWYgKGluc2VydFZhbHVlKSB7XG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lIC0gaXQncyBvaywgd2UgZG9uJ3QgY2hhbmdlIGN1cnJlbnQgbWFzayBhYm92ZVxuICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZChpbnNlcnRWYWx1ZSwge1xuICAgICAgICAgICAgICByYXc6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgPSBkLmluc2VydGVkLmxlbmd0aCAtIHByZXZWYWx1ZUJlZm9yZVRhaWwubGVuZ3RoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0YWlsVmFsdWUpIHtcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWUgLSBpdCdzIG9rLCB3ZSBkb24ndCBjaGFuZ2UgY3VycmVudCBtYXNrIGFib3ZlXG4gICAgICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZCh0YWlsVmFsdWUsIHtcbiAgICAgICAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgICB9KS50YWlsU2hpZnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERpc3BhdGNoIGNhbiBkbyBzb21ldGhpbmcgYmFkIHdpdGggc3RhdGUsIHNvXG4gICAgICAgICAgLy8gcmVzdG9yZSBwcmV2IG1hc2sgc3RhdGVcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gcHJldk1hc2tTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxuICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZEVhZ2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRFYWdlcigpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRFYWdlcigpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvRGlzcGF0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9EaXNwYXRjaChhcHBlbmRlZCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKGFwcGVuZGVkLCB0aGlzLCBmbGFncyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfZ2V0MiwgX3RoaXMkY3VycmVudE1hc2s7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpICYmICghdGhpcy5jdXJyZW50TWFzayB8fCAoX3RoaXMkY3VycmVudE1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrKS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrLCBhcmdzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrMjtcblxuICAgICAgKF90aGlzJGN1cnJlbnRNYXNrMiA9IHRoaXMuY3VycmVudE1hc2spID09PSBudWxsIHx8IF90aGlzJGN1cnJlbnRNYXNrMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkY3VycmVudE1hc2syLnJlc2V0KCk7XG4gICAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gbS5yZXNldCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudmFsdWUgOiAnJztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwidmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZSA6ICcnO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodW5tYXNrZWRWYWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgdW5tYXNrZWRWYWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlIDogJyc7XG4gICAgfSAvLyBwcm9iYWJseSB0eXBlZFZhbHVlIHNob3VsZCBub3QgYmUgdXNlZCB3aXRoIGR5bmFtaWNcbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciB1bm1hc2tlZFZhbHVlID0gU3RyaW5nKHZhbHVlKTsgLy8gZG91YmxlIGNoZWNrIGl0XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hc2sudHlwZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB1bm1hc2tlZFZhbHVlID0gdGhpcy5jdXJyZW50TWFzay51bm1hc2tlZFZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2szO1xuXG4gICAgICByZXR1cm4gQm9vbGVhbigoX3RoaXMkY3VycmVudE1hc2szID0gdGhpcy5jdXJyZW50TWFzaykgPT09IG51bGwgfHwgX3RoaXMkY3VycmVudE1hc2szID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRjdXJyZW50TWFzazMuaXNDb21wbGV0ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzRmlsbGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s0O1xuXG4gICAgICByZXR1cm4gQm9vbGVhbigoX3RoaXMkY3VycmVudE1hc2s0ID0gdGhpcy5jdXJyZW50TWFzaykgPT09IG51bGwgfHwgX3RoaXMkY3VycmVudE1hc2s0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRjdXJyZW50TWFzazQuaXNGaWxsZWQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s1O1xuXG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKChfdGhpcyRjdXJyZW50TWFzazUgPSB0aGlzLmN1cnJlbnRNYXNrKS5yZW1vdmUuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s1LCBhcmd1bWVudHMpKSAvLyB1cGRhdGUgd2l0aCBkaXNwYXRjaFxuICAgICAgICAuYWdncmVnYXRlKHRoaXMuX2FwcGx5RGlzcGF0Y2goKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCB0aGlzKSwge1xuICAgICAgICBfcmF3SW5wdXRWYWx1ZTogdGhpcy5yYXdJbnB1dFZhbHVlLFxuICAgICAgICBjb21waWxlZE1hc2tzOiB0aGlzLmNvbXBpbGVkTWFza3MubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uc3RhdGU7XG4gICAgICAgIH0pLFxuICAgICAgICBjdXJyZW50TWFza1JlZjogdGhpcy5jdXJyZW50TWFzayxcbiAgICAgICAgY3VycmVudE1hc2s6IHRoaXMuY3VycmVudE1hc2sgJiYgdGhpcy5jdXJyZW50TWFzay5zdGF0ZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdmFyIGNvbXBpbGVkTWFza3MgPSBzdGF0ZS5jb21waWxlZE1hc2tzLFxuICAgICAgICAgIGN1cnJlbnRNYXNrUmVmID0gc3RhdGUuY3VycmVudE1hc2tSZWYsXG4gICAgICAgICAgY3VycmVudE1hc2sgPSBzdGF0ZS5jdXJyZW50TWFzayxcbiAgICAgICAgICBtYXNrZWRTdGF0ZSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgX2V4Y2x1ZGVkKTtcblxuICAgICAgdGhpcy5jb21waWxlZE1hc2tzLmZvckVhY2goZnVuY3Rpb24gKG0sIG1pKSB7XG4gICAgICAgIHJldHVybiBtLnN0YXRlID0gY29tcGlsZWRNYXNrc1ttaV07XG4gICAgICB9KTtcblxuICAgICAgaWYgKGN1cnJlbnRNYXNrUmVmICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzayA9IGN1cnJlbnRNYXNrUmVmO1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gY3VycmVudE1hc2s7XG4gICAgICB9XG5cbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCBtYXNrZWRTdGF0ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s2O1xuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazYgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0SW5wdXQuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s2LCBhcmd1bWVudHMpIDogJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNywgX2dldDM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrNyA9IHRoaXMuY3VycmVudE1hc2spLmV4dHJhY3RUYWlsLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrNywgYXJncykgOiAoX2dldDMgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZXh0cmFjdFRhaWxcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDMsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB0aGlzLmN1cnJlbnRNYXNrLmRvQ29tbWl0KCk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrOCwgX2dldDQ7XG5cbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrOCA9IHRoaXMuY3VycmVudE1hc2spLm5lYXJlc3RJbnB1dFBvcy5hcHBseShfdGhpcyRjdXJyZW50TWFzazgsIGFyZ3MpIDogKF9nZXQ0ID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIm5lYXJlc3RJbnB1dFBvc1wiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0NCwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm92ZXJ3cml0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLm92ZXJ3cml0ZSA6IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJvdmVyd3JpdGVcIiwgdGhpcyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvdmVyd3JpdGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignXCJvdmVyd3JpdGVcIiBvcHRpb24gaXMgbm90IGF2YWlsYWJsZSBpbiBkeW5hbWljIG1hc2ssIHVzZSB0aGlzIG9wdGlvbiBpbiBzaWJsaW5ncycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlYWdlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLmVhZ2VyIDogX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImVhZ2VyXCIsIHRoaXMpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoZWFnZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybignXCJlYWdlclwiIG9wdGlvbiBpcyBub3QgYXZhaWxhYmxlIGluIGR5bmFtaWMgbWFzaywgdXNlIHRoaXMgb3B0aW9uIGluIHNpYmxpbmdzJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tFcXVhbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza0VxdWFscyhtYXNrKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShtYXNrKSAmJiB0aGlzLmNvbXBpbGVkTWFza3MuZXZlcnkoZnVuY3Rpb24gKG0sIG1pKSB7XG4gICAgICAgIHZhciBfbWFzayRtaTtcblxuICAgICAgICByZXR1cm4gbS5tYXNrRXF1YWxzKChfbWFzayRtaSA9IG1hc2tbbWldKSA9PT0gbnVsbCB8fCBfbWFzayRtaSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX21hc2skbWkubWFzayk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkRHluYW1pYztcbn0oTWFza2VkKTtcbk1hc2tlZER5bmFtaWMuREVGQVVMVFMgPSB7XG4gIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhcHBlbmRlZCwgbWFza2VkLCBmbGFncykge1xuICAgIGlmICghbWFza2VkLmNvbXBpbGVkTWFza3MubGVuZ3RoKSByZXR1cm47XG4gICAgdmFyIGlucHV0VmFsdWUgPSBtYXNrZWQucmF3SW5wdXRWYWx1ZTsgLy8gc2ltdWxhdGUgaW5wdXRcblxuICAgIHZhciBpbnB1dHMgPSBtYXNrZWQuY29tcGlsZWRNYXNrcy5tYXAoZnVuY3Rpb24gKG0sIGluZGV4KSB7XG4gICAgICBtLnJlc2V0KCk7XG4gICAgICBtLmFwcGVuZChpbnB1dFZhbHVlLCB7XG4gICAgICAgIHJhdzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBtLmFwcGVuZChhcHBlbmRlZCwgZmxhZ3MpO1xuICAgICAgdmFyIHdlaWdodCA9IG0ucmF3SW5wdXRWYWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3ZWlnaHQ6IHdlaWdodCxcbiAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICB9O1xuICAgIH0pOyAvLyBwb3AgbWFza3Mgd2l0aCBsb25nZXIgdmFsdWVzIGZpcnN0XG5cbiAgICBpbnB1dHMuc29ydChmdW5jdGlvbiAoaTEsIGkyKSB7XG4gICAgICByZXR1cm4gaTIud2VpZ2h0IC0gaTEud2VpZ2h0O1xuICAgIH0pO1xuICAgIHJldHVybiBtYXNrZWQuY29tcGlsZWRNYXNrc1tpbnB1dHNbMF0uaW5kZXhdO1xuICB9XG59O1xuSU1hc2suTWFza2VkRHluYW1pYyA9IE1hc2tlZER5bmFtaWM7XG5cbmV4cG9ydCB7IE1hc2tlZER5bmFtaWMgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vYmFzZS5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jdXJzb3IuanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5cbi8qKiBQYXR0ZXJuIHdoaWNoIHZhbGlkYXRlcyBlbnVtIHZhbHVlcyAqL1xuXG52YXIgTWFza2VkRW51bSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZFBhdHRlcm4pIHtcbiAgX2luaGVyaXRzKE1hc2tlZEVudW0sIF9NYXNrZWRQYXR0ZXJuKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZEVudW0pO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZEVudW0oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZEVudW0pO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZEVudW0sIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAqL1xuICAgIGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgLy8gVE9ETyB0eXBlXG4gICAgICBpZiAob3B0cy5lbnVtKSBvcHRzLm1hc2sgPSAnKicucmVwZWF0KG9wdHMuZW51bVswXS5sZW5ndGgpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRFbnVtLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICAgIF9nZXQyO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZW51bS5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmluZGV4T2YoX3RoaXMudW5tYXNrZWRWYWx1ZSkgPj0gMDtcbiAgICAgIH0pICYmIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZEVudW0ucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkRW51bTtcbn0oTWFza2VkUGF0dGVybik7XG5JTWFzay5NYXNrZWRFbnVtID0gTWFza2VkRW51bTtcblxuZXhwb3J0IHsgTWFza2VkRW51bSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuXG4vKiogR2V0IE1hc2tlZCBjbGFzcyBieSBtYXNrIHR5cGUgKi9cblxuZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzaykge1xuICBpZiAobWFzayA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtYXNrIHByb3BlcnR5IHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiBJTWFzay5NYXNrZWRSZWdFeHA7IC8vICRGbG93Rml4TWVcblxuICBpZiAoaXNTdHJpbmcobWFzaykpIHJldHVybiBJTWFzay5NYXNrZWRQYXR0ZXJuOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBEYXRlIHx8IG1hc2sgPT09IERhdGUpIHJldHVybiBJTWFzay5NYXNrZWREYXRlOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBOdW1iZXIgfHwgdHlwZW9mIG1hc2sgPT09ICdudW1iZXInIHx8IG1hc2sgPT09IE51bWJlcikgcmV0dXJuIElNYXNrLk1hc2tlZE51bWJlcjsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG1hc2spIHx8IG1hc2sgPT09IEFycmF5KSByZXR1cm4gSU1hc2suTWFza2VkRHluYW1pYzsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChJTWFzay5NYXNrZWQgJiYgbWFzay5wcm90b3R5cGUgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBtYXNrOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBtYXNrLmNvbnN0cnVjdG9yOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBGdW5jdGlvbikgcmV0dXJuIElNYXNrLk1hc2tlZEZ1bmN0aW9uO1xuICBjb25zb2xlLndhcm4oJ01hc2sgbm90IGZvdW5kIGZvciBtYXNrJywgbWFzayk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAvLyAkRmxvd0ZpeE1lXG5cbiAgcmV0dXJuIElNYXNrLk1hc2tlZDtcbn1cbi8qKiBDcmVhdGVzIG5ldyB7QGxpbmsgTWFza2VkfSBkZXBlbmRpbmcgb24gbWFzayB0eXBlICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hc2sob3B0cykge1xuICAvLyAkRmxvd0ZpeE1lXG4gIGlmIChJTWFzay5NYXNrZWQgJiYgb3B0cyBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG9wdHM7XG4gIG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzKTtcbiAgdmFyIG1hc2sgPSBvcHRzLm1hc2s7IC8vICRGbG93Rml4TWVcblxuICBpZiAoSU1hc2suTWFza2VkICYmIG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBtYXNrO1xuICB2YXIgTWFza2VkQ2xhc3MgPSBtYXNrZWRDbGFzcyhtYXNrKTtcbiAgaWYgKCFNYXNrZWRDbGFzcykgdGhyb3cgbmV3IEVycm9yKCdNYXNrZWQgY2xhc3MgaXMgbm90IGZvdW5kIGZvciBwcm92aWRlZCBtYXNrLCBhcHByb3ByaWF0ZSBtb2R1bGUgbmVlZHMgdG8gYmUgaW1wb3J0IG1hbnVhbGx5IGJlZm9yZSBjcmVhdGluZyBtYXNrLicpO1xuICByZXR1cm4gbmV3IE1hc2tlZENsYXNzKG9wdHMpO1xufVxuSU1hc2suY3JlYXRlTWFzayA9IGNyZWF0ZU1hc2s7XG5cbmV4cG9ydCB7IGNyZWF0ZU1hc2sgYXMgZGVmYXVsdCwgbWFza2VkQ2xhc3MgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuXG4vKiogTWFza2luZyBieSBjdXN0b20gRnVuY3Rpb24gKi9cblxudmFyIE1hc2tlZEZ1bmN0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRGdW5jdGlvbiwgX01hc2tlZCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRGdW5jdGlvbik7XG5cbiAgZnVuY3Rpb24gTWFza2VkRnVuY3Rpb24oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZEZ1bmN0aW9uKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRGdW5jdGlvbiwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICovXG4gICAgZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBpZiAob3B0cy5tYXNrKSBvcHRzLnZhbGlkYXRlID0gb3B0cy5tYXNrO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRGdW5jdGlvbi5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkRnVuY3Rpb247XG59KE1hc2tlZCk7XG5JTWFzay5NYXNrZWRGdW5jdGlvbiA9IE1hc2tlZEZ1bmN0aW9uO1xuXG5leHBvcnQgeyBNYXNrZWRGdW5jdGlvbiBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiwgZiBhcyBfc2xpY2VkVG9BcnJheSwgaSBhcyBfc2V0IH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgeyBlc2NhcGVSZWdFeHAsIG5vcm1hbGl6ZVByZXBhcmUsIERJUkVDVElPTiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcblxuLyoqXG4gIE51bWJlciBtYXNrXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnJhZGl4IC0gU2luZ2xlIGNoYXJcbiAgQHBhcmFtIHtzdHJpbmd9IG9wdHMudGhvdXNhbmRzU2VwYXJhdG9yIC0gU2luZ2xlIGNoYXJcbiAgQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBvcHRzLm1hcFRvUmFkaXggLSBBcnJheSBvZiBzaW5nbGUgY2hhcnNcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWluXG4gIEBwYXJhbSB7bnVtYmVyfSBvcHRzLm1heFxuICBAcGFyYW0ge251bWJlcn0gb3B0cy5zY2FsZSAtIERpZ2l0cyBhZnRlciBwb2ludFxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMuc2lnbmVkIC0gQWxsb3cgbmVnYXRpdmVcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLm5vcm1hbGl6ZVplcm9zIC0gRmxhZyB0byByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgemVyb3MgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXG4gIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5wYWRGcmFjdGlvbmFsWmVyb3MgLSBGbGFnIHRvIHBhZCB0cmFpbGluZyB6ZXJvcyBhZnRlciBwb2ludCBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcbiovXG52YXIgTWFza2VkTnVtYmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWROdW1iZXIsIF9NYXNrZWQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkTnVtYmVyKTtcblxuICAvKiogU2luZ2xlIGNoYXIgKi9cblxuICAvKiogU2luZ2xlIGNoYXIgKi9cblxuICAvKiogQXJyYXkgb2Ygc2luZ2xlIGNoYXJzICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqIERpZ2l0cyBhZnRlciBwb2ludCAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBGbGFnIHRvIHJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB6ZXJvcyBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cblxuICAvKiogRmxhZyB0byBwYWQgdHJhaWxpbmcgemVyb3MgYWZ0ZXIgcG9pbnQgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG4gIGZ1bmN0aW9uIE1hc2tlZE51bWJlcihvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZE51bWJlcik7XG5cbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkTnVtYmVyLkRFRkFVTFRTLCBvcHRzKSk7XG4gIH1cbiAgLyoqXG4gICAgQG92ZXJyaWRlXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkTnVtYmVyLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICB0aGlzLl91cGRhdGVSZWdFeHBzKCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3VwZGF0ZVJlZ0V4cHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVJlZ0V4cHMoKSB7XG4gICAgICAvLyB1c2UgZGlmZmVyZW50IHJlZ2V4cCB0byBwcm9jZXNzIHVzZXIgaW5wdXQgKG1vcmUgc3RyaWN0LCBpbnB1dCBzdWZmaXgpIGFuZCB0YWlsIHNoaWZ0aW5nXG4gICAgICB2YXIgc3RhcnQgPSAnXicgKyAodGhpcy5hbGxvd05lZ2F0aXZlID8gJ1srfFxcXFwtXT8nIDogJycpO1xuICAgICAgdmFyIG1pZElucHV0ID0gJygwfChbMS05XStcXFxcZCopKT8nO1xuICAgICAgdmFyIG1pZCA9ICdcXFxcZConO1xuICAgICAgdmFyIGVuZCA9ICh0aGlzLnNjYWxlID8gJygnICsgZXNjYXBlUmVnRXhwKHRoaXMucmFkaXgpICsgJ1xcXFxkezAsJyArIHRoaXMuc2NhbGUgKyAnfSk/JyA6ICcnKSArICckJztcbiAgICAgIHRoaXMuX251bWJlclJlZ0V4cElucHV0ID0gbmV3IFJlZ0V4cChzdGFydCArIG1pZElucHV0ICsgZW5kKTtcbiAgICAgIHRoaXMuX251bWJlclJlZ0V4cCA9IG5ldyBSZWdFeHAoc3RhcnQgKyBtaWQgKyBlbmQpO1xuICAgICAgdGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCA9IG5ldyBSZWdFeHAoJ1snICsgdGhpcy5tYXBUb1JhZGl4Lm1hcChlc2NhcGVSZWdFeHApLmpvaW4oJycpICsgJ10nLCAnZycpO1xuICAgICAgdGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGhpcy50aG91c2FuZHNTZXBhcmF0b3IpLCAnZycpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSh0aGlzLl90aG91c2FuZHNTZXBhcmF0b3JSZWdFeHAsICcnKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfaW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkge1xuICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjkwMTEwMi9ob3ctdG8tcHJpbnQtYS1udW1iZXItd2l0aC1jb21tYXMtYXMtdGhvdXNhbmRzLXNlcGFyYXRvcnMtaW4tamF2YXNjcmlwdFxuICAgICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQodGhpcy5yYWRpeCk7XG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKTtcbiAgICAgIHJldHVybiBwYXJ0cy5qb2luKHRoaXMucmFkaXgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ByZXBhcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9QcmVwYXJlKGNoKSB7XG4gICAgICB2YXIgX2dldDI7XG5cbiAgICAgIGNoID0gY2gucmVwbGFjZSh0aGlzLl9tYXBUb1JhZGl4UmVnRXhwLCB0aGlzLnJhZGl4KTtcblxuICAgICAgdmFyIG5vU2VwQ2ggPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKGNoKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIF9ub3JtYWxpemVQcmVwYXJlID0gbm9ybWFsaXplUHJlcGFyZSgoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb1ByZXBhcmVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzLCBub1NlcENoXS5jb25jYXQoYXJncykpKSxcbiAgICAgICAgICBfbm9ybWFsaXplUHJlcGFyZTIgPSBfc2xpY2VkVG9BcnJheShfbm9ybWFsaXplUHJlcGFyZSwgMiksXG4gICAgICAgICAgcHJlcENoID0gX25vcm1hbGl6ZVByZXBhcmUyWzBdLFxuICAgICAgICAgIGRldGFpbHMgPSBfbm9ybWFsaXplUHJlcGFyZTJbMV07XG5cbiAgICAgIGlmIChjaCAmJiAhbm9TZXBDaCkgZGV0YWlscy5za2lwID0gdHJ1ZTtcbiAgICAgIHJldHVybiBbcHJlcENoLCBkZXRhaWxzXTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfc2VwYXJhdG9yc0NvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXBhcmF0b3JzQ291bnQodG8pIHtcbiAgICAgIHZhciBleHRlbmRPblNlcGFyYXRvcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgZm9yICh2YXIgcG9zID0gMDsgcG9zIDwgdG87ICsrcG9zKSB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZS5pbmRleE9mKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICArK2NvdW50O1xuICAgICAgICAgIGlmIChleHRlbmRPblNlcGFyYXRvcnMpIHRvICs9IHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKCkge1xuICAgICAgdmFyIHNsaWNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLl92YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLl9zZXBhcmF0b3JzQ291bnQodGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhzbGljZSkubGVuZ3RoLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0ID0gdGhpcy5fYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tUG9zLCB0b1Bvcyk7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMkX2FkanVzdFJhbmdlV2l0LCAyKTtcblxuICAgICAgZnJvbVBvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDJbMF07XG4gICAgICB0b1BvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDJbMV07XG4gICAgICByZXR1cm4gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJleHRyYWN0SW5wdXRcIiwgdGhpcykuY2FsbCh0aGlzLCBmcm9tUG9zLCB0b1BvcywgZmxhZ3MpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBpZiAoIXRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiX2FwcGVuZENoYXJSYXdcIiwgdGhpcykuY2FsbCh0aGlzLCBjaCwgZmxhZ3MpO1xuICAgICAgdmFyIHByZXZCZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuXG4gICAgICB2YXIgcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UocHJldkJlZm9yZVRhaWxWYWx1ZSk7XG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLnZhbHVlKTtcblxuICAgICAgdmFyIGFwcGVuZERldGFpbHMgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfYXBwZW5kQ2hhclJhd1wiLCB0aGlzKS5jYWxsKHRoaXMsIGNoLCBmbGFncyk7XG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl92YWx1ZSk7XG4gICAgICB2YXIgYmVmb3JlVGFpbFZhbHVlID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLl92YWx1ZTtcblxuICAgICAgdmFyIGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UoYmVmb3JlVGFpbFZhbHVlKTtcblxuICAgICAgYXBwZW5kRGV0YWlscy50YWlsU2hpZnQgKz0gKGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgLSBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCkgKiB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICBhcHBlbmREZXRhaWxzLnNraXAgPSAhYXBwZW5kRGV0YWlscy5yYXdJbnNlcnRlZCAmJiBjaCA9PT0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3I7XG4gICAgICByZXR1cm4gYXBwZW5kRGV0YWlscztcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZmluZFNlcGFyYXRvckFyb3VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZFNlcGFyYXRvckFyb3VuZChwb3MpIHtcbiAgICAgIGlmICh0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikge1xuICAgICAgICB2YXIgc2VhcmNoRnJvbSA9IHBvcyAtIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aCArIDE7XG4gICAgICAgIHZhciBzZXBhcmF0b3JQb3MgPSB0aGlzLnZhbHVlLmluZGV4T2YodGhpcy50aG91c2FuZHNTZXBhcmF0b3IsIHNlYXJjaEZyb20pO1xuICAgICAgICBpZiAoc2VwYXJhdG9yUG9zIDw9IHBvcykgcmV0dXJuIHNlcGFyYXRvclBvcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tLCB0bykge1xuICAgICAgdmFyIHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGZyb20pO1xuXG4gICAgICBpZiAoc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA+PSAwKSBmcm9tID0gc2VwYXJhdG9yQXJvdW5kRnJvbVBvcztcblxuICAgICAgdmFyIHNlcGFyYXRvckFyb3VuZFRvUG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZCh0byk7XG5cbiAgICAgIGlmIChzZXBhcmF0b3JBcm91bmRUb1BvcyA+PSAwKSB0byA9IHNlcGFyYXRvckFyb3VuZFRvUG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgcmV0dXJuIFtmcm9tLCB0b107XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQzID0gdGhpcy5fYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tUG9zLCB0b1Bvcyk7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0ID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMkX2FkanVzdFJhbmdlV2l0MywgMik7XG5cbiAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0WzBdO1xuICAgICAgdG9Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0WzFdO1xuICAgICAgdmFyIHZhbHVlQmVmb3JlUG9zID0gdGhpcy52YWx1ZS5zbGljZSgwLCBmcm9tUG9zKTtcbiAgICAgIHZhciB2YWx1ZUFmdGVyUG9zID0gdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XG5cbiAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudCh2YWx1ZUJlZm9yZVBvcy5sZW5ndGgpO1xuXG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZUJlZm9yZVBvcyArIHZhbHVlQWZ0ZXJQb3MpKTtcblxuICAgICAgdmFyIGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UodmFsdWVCZWZvcmVQb3MpO1xuXG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICB0YWlsU2hpZnQ6IChiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IC0gcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQpICogdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbikge1xuICAgICAgaWYgKCF0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikgcmV0dXJuIGN1cnNvclBvcztcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9yQXRMZWZ0UG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChjdXJzb3JQb3MgLSAxKTtcblxuICAgICAgICAgICAgaWYgKHNlcGFyYXRvckF0TGVmdFBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdExlZnRFbmRQb3MgPSBzZXBhcmF0b3JBdExlZnRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgaWYgKGN1cnNvclBvcyA8IHNlcGFyYXRvckF0TGVmdEVuZFBvcyB8fCB0aGlzLnZhbHVlLmxlbmd0aCA8PSBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3JBdExlZnRQb3M7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9yQXRSaWdodFBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoY3Vyc29yUG9zKTtcblxuICAgICAgICAgICAgaWYgKHNlcGFyYXRvckF0UmlnaHRQb3MgPj0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRSaWdodFBvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJzb3JQb3M7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZShmbGFncykge1xuICAgICAgdmFyIHJlZ2V4cCA9IGZsYWdzLmlucHV0ID8gdGhpcy5fbnVtYmVyUmVnRXhwSW5wdXQgOiB0aGlzLl9udW1iZXJSZWdFeHA7IC8vIHZhbGlkYXRlIGFzIHN0cmluZ1xuXG4gICAgICB2YXIgdmFsaWQgPSByZWdleHAudGVzdCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpKTtcblxuICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgIC8vIHZhbGlkYXRlIGFzIG51bWJlclxuICAgICAgICB2YXIgbnVtYmVyID0gdGhpcy5udW1iZXI7XG4gICAgICAgIHZhbGlkID0gdmFsaWQgJiYgIWlzTmFOKG51bWJlcikgJiYgKCAvLyBjaGVjayBtaW4gYm91bmQgZm9yIG5lZ2F0aXZlIHZhbHVlc1xuICAgICAgICB0aGlzLm1pbiA9PSBudWxsIHx8IHRoaXMubWluID49IDAgfHwgdGhpcy5taW4gPD0gdGhpcy5udW1iZXIpICYmICggLy8gY2hlY2sgbWF4IGJvdW5kIGZvciBwb3NpdGl2ZSB2YWx1ZXNcbiAgICAgICAgdGhpcy5tYXggPT0gbnVsbCB8fCB0aGlzLm1heCA8PSAwIHx8IHRoaXMubnVtYmVyIDw9IHRoaXMubWF4KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkICYmIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBmbGFncyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgdmFyIG51bWJlciA9IHRoaXMubnVtYmVyO1xuICAgICAgICB2YXIgdmFsaWRudW0gPSBudW1iZXI7IC8vIGNoZWNrIGJvdW5kc1xuXG4gICAgICAgIGlmICh0aGlzLm1pbiAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWF4KHZhbGlkbnVtLCB0aGlzLm1pbik7XG4gICAgICAgIGlmICh0aGlzLm1heCAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWluKHZhbGlkbnVtLCB0aGlzLm1heCk7XG4gICAgICAgIGlmICh2YWxpZG51bSAhPT0gbnVtYmVyKSB0aGlzLnVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsaWRudW0pO1xuICAgICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMubm9ybWFsaXplWmVyb3MpIGZvcm1hdHRlZCA9IHRoaXMuX25vcm1hbGl6ZVplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgIGlmICh0aGlzLnBhZEZyYWN0aW9uYWxaZXJvcyAmJiB0aGlzLnNjYWxlID4gMCkgZm9ybWF0dGVkID0gdGhpcy5fcGFkRnJhY3Rpb25hbFplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybWF0dGVkO1xuICAgICAgfVxuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9ub3JtYWxpemVaZXJvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbm9ybWFsaXplWmVyb3ModmFsdWUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpLnNwbGl0KHRoaXMucmFkaXgpOyAvLyByZW1vdmUgbGVhZGluZyB6ZXJvc1xuXG5cbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXihcXEQqKSgwKikoXFxkKikvLCBmdW5jdGlvbiAobWF0Y2gsIHNpZ24sIHplcm9zLCBudW0pIHtcbiAgICAgICAgcmV0dXJuIHNpZ24gKyBudW07XG4gICAgICB9KTsgLy8gYWRkIGxlYWRpbmcgemVyb1xuXG4gICAgICBpZiAodmFsdWUubGVuZ3RoICYmICEvXFxkJC8udGVzdChwYXJ0c1swXSkpIHBhcnRzWzBdID0gcGFydHNbMF0gKyAnMCc7XG5cbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucmVwbGFjZSgvMCokLywgJycpOyAvLyByZW1vdmUgdHJhaWxpbmcgemVyb3NcblxuICAgICAgICBpZiAoIXBhcnRzWzFdLmxlbmd0aCkgcGFydHMubGVuZ3RoID0gMTsgLy8gcmVtb3ZlIGZyYWN0aW9uYWxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnMocGFydHMuam9pbih0aGlzLnJhZGl4KSk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhZEZyYWN0aW9uYWxaZXJvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFkRnJhY3Rpb25hbFplcm9zKHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG4gICAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSBwYXJ0cy5wdXNoKCcnKTtcbiAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucGFkRW5kKHRoaXMuc2NhbGUsICcwJyk7XG4gICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fbm9ybWFsaXplWmVyb3ModGhpcy52YWx1ZSkpLnJlcGxhY2UodGhpcy5yYWRpeCwgJy4nKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgdW5tYXNrZWRWYWx1ZS5yZXBsYWNlKCcuJywgdGhpcy5yYWRpeCksIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHRoaXMudW5tYXNrZWRWYWx1ZSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIFN0cmluZyhuKSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKiBQYXJzZWQgTnVtYmVyICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGVkVmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChudW1iZXIpIHtcbiAgICAgIHRoaXMudHlwZWRWYWx1ZSA9IG51bWJlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICBJcyBuZWdhdGl2ZSBhbGxvd2VkXG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWxsb3dOZWdhdGl2ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2lnbmVkIHx8IHRoaXMubWluICE9IG51bGwgJiYgdGhpcy5taW4gPCAwIHx8IHRoaXMubWF4ICE9IG51bGwgJiYgdGhpcy5tYXggPCAwO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWROdW1iZXI7XG59KE1hc2tlZCk7XG5NYXNrZWROdW1iZXIuREVGQVVMVFMgPSB7XG4gIHJhZGl4OiAnLCcsXG4gIHRob3VzYW5kc1NlcGFyYXRvcjogJycsXG4gIG1hcFRvUmFkaXg6IFsnLiddLFxuICBzY2FsZTogMixcbiAgc2lnbmVkOiBmYWxzZSxcbiAgbm9ybWFsaXplWmVyb3M6IHRydWUsXG4gIHBhZEZyYWN0aW9uYWxaZXJvczogZmFsc2Vcbn07XG5JTWFzay5NYXNrZWROdW1iZXIgPSBNYXNrZWROdW1iZXI7XG5cbmV4cG9ydCB7IE1hc2tlZE51bWJlciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiwgYiBhcyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMsIGkgYXMgX3NldCB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBQYXR0ZXJuSW5wdXREZWZpbml0aW9uLCB7IERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMgfSBmcm9tICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgUGF0dGVybkZpeGVkRGVmaW5pdGlvbiBmcm9tICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgQ2h1bmtzVGFpbERldGFpbHMgZnJvbSAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgUGF0dGVybkN1cnNvciBmcm9tICcuL3BhdHRlcm4vY3Vyc29yLmpzJztcbmltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiX2Jsb2Nrc1wiXTtcblxuLyoqXG4gIFBhdHRlcm4gbWFza1xuICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICBAcGFyYW0ge09iamVjdH0gb3B0cy5ibG9ja3NcbiAgQHBhcmFtIHtPYmplY3R9IG9wdHMuZGVmaW5pdGlvbnNcbiAgQHBhcmFtIHtzdHJpbmd9IG9wdHMucGxhY2Vob2xkZXJDaGFyXG4gIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5sYXp5XG4qL1xudmFyIE1hc2tlZFBhdHRlcm4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZFBhdHRlcm4sIF9NYXNrZWQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkUGF0dGVybik7XG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqIFNpbmdsZSBjaGFyIGZvciBlbXB0eSBpbnB1dCAqL1xuXG4gIC8qKiBTaG93IHBsYWNlaG9sZGVyIG9ubHkgd2hlbiBuZWVkZWQgKi9cbiAgZnVuY3Rpb24gTWFza2VkUGF0dGVybigpIHtcbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkUGF0dGVybik7XG5cbiAgICAvLyBUT0RPIHR5cGUgJFNoYXBlPE1hc2tlZFBhdHRlcm5PcHRpb25zPj17fSBkb2VzIG5vdCB3b3JrXG4gICAgb3B0cy5kZWZpbml0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMsIG9wdHMuZGVmaW5pdGlvbnMpO1xuICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWRQYXR0ZXJuLkRFRkFVTFRTLCBvcHRzKSk7XG4gIH1cbiAgLyoqXG4gICAgQG92ZXJyaWRlXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRQYXR0ZXJuLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUoKSB7XG4gICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBvcHRzLmRlZmluaXRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZpbml0aW9ucywgb3B0cy5kZWZpbml0aW9ucyk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgIHRoaXMuX3JlYnVpbGRNYXNrKCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3JlYnVpbGRNYXNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWJ1aWxkTWFzaygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBkZWZzID0gdGhpcy5kZWZpbml0aW9ucztcbiAgICAgIHRoaXMuX2Jsb2NrcyA9IFtdO1xuICAgICAgdGhpcy5fc3RvcHMgPSBbXTtcbiAgICAgIHRoaXMuX21hc2tlZEJsb2NrcyA9IHt9O1xuICAgICAgdmFyIHBhdHRlcm4gPSB0aGlzLm1hc2s7XG4gICAgICBpZiAoIXBhdHRlcm4gfHwgIWRlZnMpIHJldHVybjtcbiAgICAgIHZhciB1bm1hc2tpbmdCbG9jayA9IGZhbHNlO1xuICAgICAgdmFyIG9wdGlvbmFsQmxvY2sgPSBmYWxzZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICh0aGlzLmJsb2Nrcykge1xuICAgICAgICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHAgPSBwYXR0ZXJuLnNsaWNlKGkpO1xuICAgICAgICAgICAgdmFyIGJOYW1lcyA9IE9iamVjdC5rZXlzKF90aGlzLmJsb2NrcykuZmlsdGVyKGZ1bmN0aW9uIChiTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcC5pbmRleE9mKGJOYW1lKSA9PT0gMDtcbiAgICAgICAgICAgIH0pOyAvLyBvcmRlciBieSBrZXkgbGVuZ3RoXG5cbiAgICAgICAgICAgIGJOYW1lcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgICAgICAgICAgfSk7IC8vIHVzZSBibG9jayBuYW1lIHdpdGggbWF4IGxlbmd0aFxuXG4gICAgICAgICAgICB2YXIgYk5hbWUgPSBiTmFtZXNbMF07XG5cbiAgICAgICAgICAgIGlmIChiTmFtZSkge1xuICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG4gICAgICAgICAgICAgIHZhciBtYXNrZWRCbG9jayA9IGNyZWF0ZU1hc2soT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgcGFyZW50OiBfdGhpcyxcbiAgICAgICAgICAgICAgICBsYXp5OiBfdGhpcy5sYXp5LFxuICAgICAgICAgICAgICAgIGVhZ2VyOiBfdGhpcy5lYWdlcixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckNoYXI6IF90aGlzLnBsYWNlaG9sZGVyQ2hhcixcbiAgICAgICAgICAgICAgICBvdmVyd3JpdGU6IF90aGlzLm92ZXJ3cml0ZVxuICAgICAgICAgICAgICB9LCBfdGhpcy5ibG9ja3NbYk5hbWVdKSk7XG5cbiAgICAgICAgICAgICAgaWYgKG1hc2tlZEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2Jsb2Nrcy5wdXNoKG1hc2tlZEJsb2NrKTsgLy8gc3RvcmUgYmxvY2sgaW5kZXhcblxuXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXSkgX3RoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0gPSBbXTtcblxuICAgICAgICAgICAgICAgIF90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdLnB1c2goX3RoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGkgKz0gYk5hbWUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFyID0gcGF0dGVybltpXTtcbiAgICAgICAgdmFyIGlzSW5wdXQgPSAoY2hhciBpbiBkZWZzKTtcblxuICAgICAgICBpZiAoY2hhciA9PT0gTWFza2VkUGF0dGVybi5TVE9QX0NIQVIpIHtcbiAgICAgICAgICB0aGlzLl9zdG9wcy5wdXNoKHRoaXMuX2Jsb2Nrcy5sZW5ndGgpO1xuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhciA9PT0gJ3snIHx8IGNoYXIgPT09ICd9Jykge1xuICAgICAgICAgIHVubWFza2luZ0Jsb2NrID0gIXVubWFza2luZ0Jsb2NrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXIgPT09ICdbJyB8fCBjaGFyID09PSAnXScpIHtcbiAgICAgICAgICBvcHRpb25hbEJsb2NrID0gIW9wdGlvbmFsQmxvY2s7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhciA9PT0gTWFza2VkUGF0dGVybi5FU0NBUEVfQ0hBUikge1xuICAgICAgICAgICsraTtcbiAgICAgICAgICBjaGFyID0gcGF0dGVybltpXTtcbiAgICAgICAgICBpZiAoIWNoYXIpIGJyZWFrO1xuICAgICAgICAgIGlzSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWYgPSBpc0lucHV0ID8gbmV3IFBhdHRlcm5JbnB1dERlZmluaXRpb24oe1xuICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICBsYXp5OiB0aGlzLmxhenksXG4gICAgICAgICAgZWFnZXI6IHRoaXMuZWFnZXIsXG4gICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiB0aGlzLnBsYWNlaG9sZGVyQ2hhcixcbiAgICAgICAgICBtYXNrOiBkZWZzW2NoYXJdLFxuICAgICAgICAgIGlzT3B0aW9uYWw6IG9wdGlvbmFsQmxvY2tcbiAgICAgICAgfSkgOiBuZXcgUGF0dGVybkZpeGVkRGVmaW5pdGlvbih7XG4gICAgICAgICAgY2hhcjogY2hhcixcbiAgICAgICAgICBlYWdlcjogdGhpcy5lYWdlcixcbiAgICAgICAgICBpc1VubWFza2luZzogdW5tYXNraW5nQmxvY2tcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2goZGVmKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwic3RhdGVcIiwgdGhpcyksIHtcbiAgICAgICAgX2Jsb2NrczogdGhpcy5fYmxvY2tzLm1hcChmdW5jdGlvbiAoYikge1xuICAgICAgICAgIHJldHVybiBiLnN0YXRlO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdmFyIF9ibG9ja3MgPSBzdGF0ZS5fYmxvY2tzLFxuICAgICAgICAgIG1hc2tlZFN0YXRlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHN0YXRlLCBfZXhjbHVkZWQpO1xuXG4gICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYiwgYmkpIHtcbiAgICAgICAgcmV0dXJuIGIuc3RhdGUgPSBfYmxvY2tzW2JpXTtcbiAgICAgIH0pO1xuXG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwic3RhdGVcIiwgbWFza2VkU3RhdGUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJyZXNldFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5yZXNldCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaXNDb21wbGV0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0ZpbGxlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5ldmVyeShmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5pc0ZpbGxlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0ZpeGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLmlzRml4ZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPcHRpb25hbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5ldmVyeShmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5pc09wdGlvbmFsO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuZG9Db21taXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiZG9Db21taXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgYikge1xuICAgICAgICByZXR1cm4gc3RyICs9IGIudW5tYXNrZWRWYWx1ZTtcbiAgICAgIH0sICcnKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gVE9ETyByZXR1cm4gX3ZhbHVlIHdoZW4gbm90IGluIGNoYW5nZT9cbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MucmVkdWNlKGZ1bmN0aW9uIChzdHIsIGIpIHtcbiAgICAgICAgcmV0dXJuIHN0ciArPSBiLnZhbHVlO1xuICAgICAgfSwgJycpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJ2YWx1ZVwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcImFwcGVuZFRhaWxcIiwgdGhpcykuY2FsbCh0aGlzLCB0YWlsKS5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRFYWdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kRWFnZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkX21hcFBvc1RvQmxvY2s7XG5cbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHZhciBzdGFydEJsb2NrSW5kZXggPSAoX3RoaXMkX21hcFBvc1RvQmxvY2sgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMudmFsdWUubGVuZ3RoKSkgPT09IG51bGwgfHwgX3RoaXMkX21hcFBvc1RvQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJF9tYXBQb3NUb0Jsb2NrLmluZGV4O1xuICAgICAgaWYgKHN0YXJ0QmxvY2tJbmRleCA9PSBudWxsKSByZXR1cm4gZGV0YWlsczsgLy8gVE9ETyB0ZXN0IGlmIGl0IHdvcmtzIGZvciBuZXN0ZWQgcGF0dGVybiBtYXNrc1xuXG4gICAgICBpZiAodGhpcy5fYmxvY2tzW3N0YXJ0QmxvY2tJbmRleF0uaXNGaWxsZWQpICsrc3RhcnRCbG9ja0luZGV4O1xuXG4gICAgICBmb3IgKHZhciBiaSA9IHN0YXJ0QmxvY2tJbmRleDsgYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XG4gICAgICAgIHZhciBkID0gdGhpcy5fYmxvY2tzW2JpXS5fYXBwZW5kRWFnZXIoKTtcblxuICAgICAgICBpZiAoIWQuaW5zZXJ0ZWQpIGJyZWFrO1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICB2YXIgYmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICghYmxvY2tJdGVyKSByZXR1cm4gZGV0YWlscztcblxuICAgICAgZm9yICh2YXIgYmkgPSBibG9ja0l0ZXIuaW5kZXg7OyArK2JpKSB7XG4gICAgICAgIHZhciBfZmxhZ3MkX2JlZm9yZVRhaWxTdGE7XG5cbiAgICAgICAgdmFyIF9ibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XG4gICAgICAgIGlmICghX2Jsb2NrKSBicmVhaztcblxuICAgICAgICB2YXIgYmxvY2tEZXRhaWxzID0gX2Jsb2NrLl9hcHBlbmRDaGFyKGNoLCBPYmplY3QuYXNzaWduKHt9LCBmbGFncywge1xuICAgICAgICAgIF9iZWZvcmVUYWlsU3RhdGU6IChfZmxhZ3MkX2JlZm9yZVRhaWxTdGEgPSBmbGFncy5fYmVmb3JlVGFpbFN0YXRlKSA9PT0gbnVsbCB8fCBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mbGFncyRfYmVmb3JlVGFpbFN0YS5fYmxvY2tzW2JpXVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdmFyIHNraXAgPSBibG9ja0RldGFpbHMuc2tpcDtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYmxvY2tEZXRhaWxzKTtcbiAgICAgICAgaWYgKHNraXAgfHwgYmxvY2tEZXRhaWxzLnJhd0luc2VydGVkKSBicmVhazsgLy8gZ28gbmV4dCBjaGFyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgY2h1bmtUYWlsID0gbmV3IENodW5rc1RhaWxEZXRhaWxzKCk7XG4gICAgICBpZiAoZnJvbVBvcyA9PT0gdG9Qb3MpIHJldHVybiBjaHVua1RhaWw7XG5cbiAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgYmksIGJGcm9tUG9zLCBiVG9Qb3MpIHtcbiAgICAgICAgdmFyIGJsb2NrQ2h1bmsgPSBiLmV4dHJhY3RUYWlsKGJGcm9tUG9zLCBiVG9Qb3MpO1xuICAgICAgICBibG9ja0NodW5rLnN0b3AgPSBfdGhpczIuX2ZpbmRTdG9wQmVmb3JlKGJpKTtcbiAgICAgICAgYmxvY2tDaHVuay5mcm9tID0gX3RoaXMyLl9ibG9ja1N0YXJ0UG9zKGJpKTtcbiAgICAgICAgaWYgKGJsb2NrQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykgYmxvY2tDaHVuay5ibG9ja0luZGV4ID0gYmk7XG4gICAgICAgIGNodW5rVGFpbC5leHRlbmQoYmxvY2tDaHVuayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNodW5rVGFpbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICBpZiAoZnJvbVBvcyA9PT0gdG9Qb3MpIHJldHVybiAnJztcbiAgICAgIHZhciBpbnB1dCA9ICcnO1xuXG4gICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIF8sIGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgICAgIGlucHV0ICs9IGIuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncyk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmluZFN0b3BCZWZvcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmRTdG9wQmVmb3JlKGJsb2NrSW5kZXgpIHtcbiAgICAgIHZhciBzdG9wQmVmb3JlO1xuXG4gICAgICBmb3IgKHZhciBzaSA9IDA7IHNpIDwgdGhpcy5fc3RvcHMubGVuZ3RoOyArK3NpKSB7XG4gICAgICAgIHZhciBzdG9wID0gdGhpcy5fc3RvcHNbc2ldO1xuICAgICAgICBpZiAoc3RvcCA8PSBibG9ja0luZGV4KSBzdG9wQmVmb3JlID0gc3RvcDtlbHNlIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RvcEJlZm9yZTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgcGxhY2Vob2xkZXIgZGVwZW5kaW5nIG9uIGxhemluZXNzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKHRvQmxvY2tJbmRleCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICh0aGlzLmxhenkgJiYgdG9CbG9ja0luZGV4ID09IG51bGwpIHJldHVybiBkZXRhaWxzO1xuXG4gICAgICB2YXIgc3RhcnRCbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMudmFsdWUubGVuZ3RoKTtcblxuICAgICAgaWYgKCFzdGFydEJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XG4gICAgICB2YXIgc3RhcnRCbG9ja0luZGV4ID0gc3RhcnRCbG9ja0l0ZXIuaW5kZXg7XG4gICAgICB2YXIgZW5kQmxvY2tJbmRleCA9IHRvQmxvY2tJbmRleCAhPSBudWxsID8gdG9CbG9ja0luZGV4IDogdGhpcy5fYmxvY2tzLmxlbmd0aDtcblxuICAgICAgdGhpcy5fYmxvY2tzLnNsaWNlKHN0YXJ0QmxvY2tJbmRleCwgZW5kQmxvY2tJbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICBpZiAoIWIubGF6eSB8fCB0b0Jsb2NrSW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgIC8vICRGbG93Rml4TWUgYF9ibG9ja3NgIG1heSBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIHZhciBhcmdzID0gYi5fYmxvY2tzICE9IG51bGwgPyBbYi5fYmxvY2tzLmxlbmd0aF0gOiBbXTtcblxuICAgICAgICAgIHZhciBiRGV0YWlscyA9IGIuX2FwcGVuZFBsYWNlaG9sZGVyLmFwcGx5KGIsIGFyZ3MpO1xuXG4gICAgICAgICAgX3RoaXMzLl92YWx1ZSArPSBiRGV0YWlscy5pbnNlcnRlZDtcbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShiRGV0YWlscyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqIEZpbmRzIGJsb2NrIGluIHBvcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX21hcFBvc1RvQmxvY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX21hcFBvc1RvQmxvY2socG9zKSB7XG4gICAgICB2YXIgYWNjVmFsID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGJpID0gMDsgYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XG4gICAgICAgIHZhciBfYmxvY2syID0gdGhpcy5fYmxvY2tzW2JpXTtcbiAgICAgICAgdmFyIGJsb2NrU3RhcnRQb3MgPSBhY2NWYWwubGVuZ3RoO1xuICAgICAgICBhY2NWYWwgKz0gX2Jsb2NrMi52YWx1ZTtcblxuICAgICAgICBpZiAocG9zIDw9IGFjY1ZhbC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5kZXg6IGJpLFxuICAgICAgICAgICAgb2Zmc2V0OiBwb3MgLSBibG9ja1N0YXJ0UG9zXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9ibG9ja1N0YXJ0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9ibG9ja1N0YXJ0UG9zKGJsb2NrSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3Muc2xpY2UoMCwgYmxvY2tJbmRleCkucmVkdWNlKGZ1bmN0aW9uIChwb3MsIGIpIHtcbiAgICAgICAgcmV0dXJuIHBvcyArPSBiLnZhbHVlLmxlbmd0aDtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9mb3JFYWNoQmxvY2tzSW5SYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcykge1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgICB2YXIgZnJvbUJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2soZnJvbVBvcyk7XG5cbiAgICAgIGlmIChmcm9tQmxvY2tJdGVyKSB7XG4gICAgICAgIHZhciB0b0Jsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodG9Qb3MpOyAvLyBwcm9jZXNzIGZpcnN0IGJsb2NrXG5cblxuICAgICAgICB2YXIgaXNTYW1lQmxvY2sgPSB0b0Jsb2NrSXRlciAmJiBmcm9tQmxvY2tJdGVyLmluZGV4ID09PSB0b0Jsb2NrSXRlci5pbmRleDtcbiAgICAgICAgdmFyIGZyb21CbG9ja1N0YXJ0UG9zID0gZnJvbUJsb2NrSXRlci5vZmZzZXQ7XG4gICAgICAgIHZhciBmcm9tQmxvY2tFbmRQb3MgPSB0b0Jsb2NrSXRlciAmJiBpc1NhbWVCbG9jayA/IHRvQmxvY2tJdGVyLm9mZnNldCA6IHRoaXMuX2Jsb2Nrc1tmcm9tQmxvY2tJdGVyLmluZGV4XS52YWx1ZS5sZW5ndGg7XG4gICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1tmcm9tQmxvY2tJdGVyLmluZGV4XSwgZnJvbUJsb2NrSXRlci5pbmRleCwgZnJvbUJsb2NrU3RhcnRQb3MsIGZyb21CbG9ja0VuZFBvcyk7XG5cbiAgICAgICAgaWYgKHRvQmxvY2tJdGVyICYmICFpc1NhbWVCbG9jaykge1xuICAgICAgICAgIC8vIHByb2Nlc3MgaW50ZXJtZWRpYXRlIGJsb2Nrc1xuICAgICAgICAgIGZvciAodmFyIGJpID0gZnJvbUJsb2NrSXRlci5pbmRleCArIDE7IGJpIDwgdG9CbG9ja0l0ZXIuaW5kZXg7ICsrYmkpIHtcbiAgICAgICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1tiaV0sIGJpLCAwLCB0aGlzLl9ibG9ja3NbYmldLnZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgfSAvLyBwcm9jZXNzIGxhc3QgYmxvY2tcblxuXG4gICAgICAgICAgZm4odGhpcy5fYmxvY2tzW3RvQmxvY2tJdGVyLmluZGV4XSwgdG9CbG9ja0l0ZXIuaW5kZXgsIDAsIHRvQmxvY2tJdGVyLm9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcblxuICAgICAgdmFyIHJlbW92ZURldGFpbHMgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwicmVtb3ZlXCIsIHRoaXMpLmNhbGwodGhpcywgZnJvbVBvcywgdG9Qb3MpO1xuXG4gICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIF8sIGJGcm9tUG9zLCBiVG9Qb3MpIHtcbiAgICAgICAgcmVtb3ZlRGV0YWlscy5hZ2dyZWdhdGUoYi5yZW1vdmUoYkZyb21Qb3MsIGJUb1BvcykpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZW1vdmVEZXRhaWxzO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICBpZiAoIXRoaXMuX2Jsb2Nrcy5sZW5ndGgpIHJldHVybiAwO1xuICAgICAgdmFyIGN1cnNvciA9IG5ldyBQYXR0ZXJuQ3Vyc29yKHRoaXMsIGN1cnNvclBvcyk7XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5OT05FKSB7XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gTk9ORSBzaG91bGQgb25seSBnbyBvdXQgZnJvbSBmaXhlZCB0byB0aGUgcmlnaHQhXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYgKGN1cnNvci5wdXNoUmlnaHRCZWZvcmVJbnB1dCgpKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgIGlmIChjdXJzb3IucHVzaExlZnRCZWZvcmVJbnB1dCgpKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgfSAvLyBGT1JDRSBpcyBvbmx5IGFib3V0IGF8KiBvdGhlcndpc2UgaXMgMFxuXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgICAgLy8gdHJ5IHRvIGJyZWFrIGZhc3Qgd2hlbiAqfGFcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQpIHtcbiAgICAgICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlRmlsbGVkKCk7XG4gICAgICAgICAgaWYgKGN1cnNvci5vayAmJiBjdXJzb3IucG9zID09PSBjdXJzb3JQb3MpIHJldHVybiBjdXJzb3JQb3M7XG4gICAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgIH0gLy8gZm9yd2FyZCBmbG93XG5cblxuICAgICAgICBjdXJzb3IucHVzaExlZnRCZWZvcmVJbnB1dCgpO1xuICAgICAgICBjdXJzb3IucHVzaExlZnRCZWZvcmVSZXF1aXJlZCgpO1xuICAgICAgICBjdXJzb3IucHVzaExlZnRCZWZvcmVGaWxsZWQoKTsgLy8gYmFja3dhcmQgZmxvd1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUKSB7XG4gICAgICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZUlucHV0KCk7XG4gICAgICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZVJlcXVpcmVkKCk7XG4gICAgICAgICAgaWYgKGN1cnNvci5vayAmJiBjdXJzb3IucG9zIDw9IGN1cnNvclBvcykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgICAgaWYgKGN1cnNvci5vayAmJiBjdXJzb3IucG9zIDw9IGN1cnNvclBvcykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3Vyc29yLm9rKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHJldHVybiAwO1xuICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICBpZiAoY3Vyc29yLm9rKSByZXR1cm4gY3Vyc29yLnBvczsgLy8gY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgIC8vIGlmIChcbiAgICAgICAgLy8gICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlSW5wdXQoKSAmJlxuICAgICAgICAvLyAgIC8vIFRPRE8gSEFDSyBmb3IgbGF6eSBpZiBoYXMgYWxpZ25lZCBsZWZ0IGluc2lkZSBmaXhlZCBhbmQgaGFzIGNhbWUgdG8gdGhlIHN0YXJ0IC0gdXNlIHN0YXJ0IHBvc2l0aW9uXG4gICAgICAgIC8vICAgKCF0aGlzLmxhenkgfHwgdGhpcy5leHRyYWN0SW5wdXQoKSlcbiAgICAgICAgLy8gKSByZXR1cm4gY3Vyc29yLnBvcztcblxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlJJR0hUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUKSB7XG4gICAgICAgIC8vIGZvcndhcmQgZmxvd1xuICAgICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlSW5wdXQoKTtcbiAgICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZVJlcXVpcmVkKCk7XG4gICAgICAgIGlmIChjdXJzb3IucHVzaFJpZ2h0QmVmb3JlRmlsbGVkKCkpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfUklHSFQpIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aDsgLy8gYmFja3dhcmQgZmxvd1xuXG4gICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICBpZiAoY3Vyc29yLm9rKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgIGlmIChjdXJzb3Iub2spIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICByZXR1cm4gdGhpcy5uZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBESVJFQ1RJT04uTEVGVCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJzb3JQb3M7XG4gICAgfVxuICAgIC8qKiBHZXQgYmxvY2sgYnkgbmFtZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWFza2VkQmxvY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza2VkQmxvY2sobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkQmxvY2tzKG5hbWUpWzBdO1xuICAgIH1cbiAgICAvKiogR2V0IGFsbCBibG9ja3MgYnkgbmFtZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWFza2VkQmxvY2tzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tlZEJsb2NrcyhuYW1lKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGluZGljZXMgPSB0aGlzLl9tYXNrZWRCbG9ja3NbbmFtZV07XG4gICAgICBpZiAoIWluZGljZXMpIHJldHVybiBbXTtcbiAgICAgIHJldHVybiBpbmRpY2VzLm1hcChmdW5jdGlvbiAoZ2kpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5fYmxvY2tzW2dpXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRQYXR0ZXJuO1xufShNYXNrZWQpO1xuTWFza2VkUGF0dGVybi5ERUZBVUxUUyA9IHtcbiAgbGF6eTogdHJ1ZSxcbiAgcGxhY2Vob2xkZXJDaGFyOiAnXydcbn07XG5NYXNrZWRQYXR0ZXJuLlNUT1BfQ0hBUiA9ICdgJztcbk1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIgPSAnXFxcXCc7XG5NYXNrZWRQYXR0ZXJuLklucHV0RGVmaW5pdGlvbiA9IFBhdHRlcm5JbnB1dERlZmluaXRpb247XG5NYXNrZWRQYXR0ZXJuLkZpeGVkRGVmaW5pdGlvbiA9IFBhdHRlcm5GaXhlZERlZmluaXRpb247XG5JTWFzay5NYXNrZWRQYXR0ZXJuID0gTWFza2VkUGF0dGVybjtcblxuZXhwb3J0IHsgTWFza2VkUGF0dGVybiBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIGIgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uLy4uL2NvcmUvaG9sZGVyLmpzJztcblxudmFyIF9leGNsdWRlZCA9IFtcImNodW5rc1wiXTtcblxudmFyIENodW5rc1RhaWxEZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqICovXG4gIGZ1bmN0aW9uIENodW5rc1RhaWxEZXRhaWxzKCkge1xuICAgIHZhciBjaHVua3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICAgIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENodW5rc1RhaWxEZXRhaWxzKTtcblxuICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzO1xuICAgIHRoaXMuZnJvbSA9IGZyb207XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2h1bmtzVGFpbERldGFpbHMsIFt7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2h1bmtzLm1hcChTdHJpbmcpLmpvaW4oJycpO1xuICAgIH0gLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0ZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCh0YWlsQ2h1bmspIHtcbiAgICAgIGlmICghU3RyaW5nKHRhaWxDaHVuaykpIHJldHVybjtcbiAgICAgIGlmIChpc1N0cmluZyh0YWlsQ2h1bmspKSB0YWlsQ2h1bmsgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsQ2h1bmspKTtcbiAgICAgIHZhciBsYXN0Q2h1bmsgPSB0aGlzLmNodW5rc1t0aGlzLmNodW5rcy5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBleHRlbmRMYXN0ID0gbGFzdENodW5rICYmICggLy8gaWYgc3RvcHMgYXJlIHNhbWUgb3IgdGFpbCBoYXMgbm8gc3RvcFxuICAgICAgbGFzdENodW5rLnN0b3AgPT09IHRhaWxDaHVuay5zdG9wIHx8IHRhaWxDaHVuay5zdG9wID09IG51bGwpICYmIC8vIGlmIHRhaWwgY2h1bmsgZ29lcyBqdXN0IGFmdGVyIGxhc3QgY2h1bmtcbiAgICAgIHRhaWxDaHVuay5mcm9tID09PSBsYXN0Q2h1bmsuZnJvbSArIGxhc3RDaHVuay50b1N0cmluZygpLmxlbmd0aDtcblxuICAgICAgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENvbnRpbnVvdXNUYWlsRGV0YWlscykge1xuICAgICAgICAvLyBjaGVjayB0aGUgYWJpbGl0eSB0byBleHRlbmQgcHJldmlvdXMgY2h1bmtcbiAgICAgICAgaWYgKGV4dGVuZExhc3QpIHtcbiAgICAgICAgICAvLyBleHRlbmQgcHJldmlvdXMgY2h1bmtcbiAgICAgICAgICBsYXN0Q2h1bmsuZXh0ZW5kKHRhaWxDaHVuay50b1N0cmluZygpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhcHBlbmQgbmV3IGNodW5rXG4gICAgICAgICAgdGhpcy5jaHVua3MucHVzaCh0YWlsQ2h1bmspO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzKSB7XG4gICAgICAgIGlmICh0YWlsQ2h1bmsuc3RvcCA9PSBudWxsKSB7XG4gICAgICAgICAgLy8gdW53cmFwIGZsb2F0aW5nIGNodW5rcyB0byBwYXJlbnQsIGtlZXBpbmcgYGZyb21gIHBvc1xuICAgICAgICAgIHZhciBmaXJzdFRhaWxDaHVuaztcblxuICAgICAgICAgIHdoaWxlICh0YWlsQ2h1bmsuY2h1bmtzLmxlbmd0aCAmJiB0YWlsQ2h1bmsuY2h1bmtzWzBdLnN0b3AgPT0gbnVsbCkge1xuICAgICAgICAgICAgZmlyc3RUYWlsQ2h1bmsgPSB0YWlsQ2h1bmsuY2h1bmtzLnNoaWZ0KCk7XG4gICAgICAgICAgICBmaXJzdFRhaWxDaHVuay5mcm9tICs9IHRhaWxDaHVuay5mcm9tO1xuICAgICAgICAgICAgdGhpcy5leHRlbmQoZmlyc3RUYWlsQ2h1bmspO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBpZiB0YWlsIGNodW5rIHN0aWxsIGhhcyB2YWx1ZVxuXG5cbiAgICAgICAgaWYgKHRhaWxDaHVuay50b1N0cmluZygpKSB7XG4gICAgICAgICAgLy8gaWYgY2h1bmtzIGNvbnRhaW5zIHN0b3BzLCB0aGVuIHBvcHVwIHN0b3AgdG8gY29udGFpbmVyXG4gICAgICAgICAgdGFpbENodW5rLnN0b3AgPSB0YWlsQ2h1bmsuYmxvY2tJbmRleDtcbiAgICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHRhaWxDaHVuayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVG8obWFza2VkKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBpZiAoIShtYXNrZWQgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWRQYXR0ZXJuKSkge1xuICAgICAgICB2YXIgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHModGhpcy50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8obWFza2VkKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuXG4gICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgdGhpcy5jaHVua3MubGVuZ3RoICYmICFkZXRhaWxzLnNraXA7ICsrY2kpIHtcbiAgICAgICAgdmFyIGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuXG4gICAgICAgIHZhciBsYXN0QmxvY2tJdGVyID0gbWFza2VkLl9tYXBQb3NUb0Jsb2NrKG1hc2tlZC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIHZhciBzdG9wID0gY2h1bmsuc3RvcDtcbiAgICAgICAgdmFyIGNodW5rQmxvY2sgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHN0b3AgIT0gbnVsbCAmJiAoIC8vIGlmIGJsb2NrIG5vdCBmb3VuZCBvciBzdG9wIGlzIGJlaGluZCBsYXN0QmxvY2tcbiAgICAgICAgIWxhc3RCbG9ja0l0ZXIgfHwgbGFzdEJsb2NrSXRlci5pbmRleCA8PSBzdG9wKSkge1xuICAgICAgICAgIGlmIChjaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzIHx8IC8vIGZvciBjb250aW51b3VzIGJsb2NrIGFsc28gY2hlY2sgaWYgc3RvcCBpcyBleGlzdFxuICAgICAgICAgIG1hc2tlZC5fc3RvcHMuaW5kZXhPZihzdG9wKSA+PSAwKSB7XG4gICAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKHN0b3ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaHVua0Jsb2NrID0gY2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscyAmJiBtYXNrZWQuX2Jsb2Nrc1tzdG9wXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaHVua0Jsb2NrKSB7XG4gICAgICAgICAgdmFyIHRhaWxEZXRhaWxzID0gY2h1bmtCbG9jay5hcHBlbmRUYWlsKGNodW5rKTtcbiAgICAgICAgICB0YWlsRGV0YWlscy5za2lwID0gZmFsc2U7IC8vIGFsd2F5cyBpZ25vcmUgc2tpcCwgaXQgd2lsbCBiZSBzZXQgb24gbGFzdFxuXG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGFpbERldGFpbHMpO1xuICAgICAgICAgIG1hc2tlZC5fdmFsdWUgKz0gdGFpbERldGFpbHMuaW5zZXJ0ZWQ7IC8vIGdldCBub3QgaW5zZXJ0ZWQgY2hhcnNcblxuICAgICAgICAgIHZhciByZW1haW5DaGFycyA9IGNodW5rLnRvU3RyaW5nKCkuc2xpY2UodGFpbERldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoKTtcbiAgICAgICAgICBpZiAocmVtYWluQ2hhcnMpIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQocmVtYWluQ2hhcnMsIHtcbiAgICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLmFwcGVuZChjaHVuay50b1N0cmluZygpLCB7XG4gICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNodW5rczogdGhpcy5jaHVua3MubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIGMuc3RhdGU7XG4gICAgICAgIH0pLFxuICAgICAgICBmcm9tOiB0aGlzLmZyb20sXG4gICAgICAgIHN0b3A6IHRoaXMuc3RvcCxcbiAgICAgICAgYmxvY2tJbmRleDogdGhpcy5ibG9ja0luZGV4XG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBjaHVua3MgPSBzdGF0ZS5jaHVua3MsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIF9leGNsdWRlZCk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcHJvcHMpO1xuICAgICAgdGhpcy5jaHVua3MgPSBjaHVua3MubWFwKGZ1bmN0aW9uIChjc3RhdGUpIHtcbiAgICAgICAgdmFyIGNodW5rID0gXCJjaHVua3NcIiBpbiBjc3RhdGUgPyBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKSA6IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoKTsgLy8gJEZsb3dGaXhNZSBhbHJlYWR5IGNoZWNrZWQgYWJvdmVcblxuICAgICAgICBjaHVuay5zdGF0ZSA9IGNzdGF0ZTtcbiAgICAgICAgcmV0dXJuIGNodW5rO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuc2hpZnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zaGlmdChiZWZvcmVQb3MpIHtcbiAgICAgIGlmICghdGhpcy5jaHVua3MubGVuZ3RoIHx8IGJlZm9yZVBvcyAhPSBudWxsICYmIHRoaXMuZnJvbSA+PSBiZWZvcmVQb3MpIHJldHVybiAnJztcbiAgICAgIHZhciBjaHVua1NoaWZ0UG9zID0gYmVmb3JlUG9zICE9IG51bGwgPyBiZWZvcmVQb3MgLSB0aGlzLmZyb20gOiBiZWZvcmVQb3M7XG4gICAgICB2YXIgY2kgPSAwO1xuXG4gICAgICB3aGlsZSAoY2kgPCB0aGlzLmNodW5rcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuICAgICAgICB2YXIgc2hpZnRDaGFyID0gY2h1bmsudW5zaGlmdChjaHVua1NoaWZ0UG9zKTtcblxuICAgICAgICBpZiAoY2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAgIC8vIGNodW5rIHN0aWxsIGNvbnRhaW5zIHZhbHVlXG4gICAgICAgICAgLy8gYnV0IG5vdCBzaGlmdGVkIC0gbWVhbnMgbm8gbW9yZSBhdmFpbGFibGUgY2hhcnMgdG8gc2hpZnRcbiAgICAgICAgICBpZiAoIXNoaWZ0Q2hhcikgYnJlYWs7XG4gICAgICAgICAgKytjaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjbGVhbiBpZiBjaHVuayBoYXMgbm8gdmFsdWVcbiAgICAgICAgICB0aGlzLmNodW5rcy5zcGxpY2UoY2ksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0Q2hhcikgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaGlmdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICAgIGlmICghdGhpcy5jaHVua3MubGVuZ3RoKSByZXR1cm4gJyc7XG4gICAgICB2YXIgY2kgPSB0aGlzLmNodW5rcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAoMCA8PSBjaSkge1xuICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG4gICAgICAgIHZhciBzaGlmdENoYXIgPSBjaHVuay5zaGlmdCgpO1xuXG4gICAgICAgIGlmIChjaHVuay50b1N0cmluZygpKSB7XG4gICAgICAgICAgLy8gY2h1bmsgc3RpbGwgY29udGFpbnMgdmFsdWVcbiAgICAgICAgICAvLyBidXQgbm90IHNoaWZ0ZWQgLSBtZWFucyBubyBtb3JlIGF2YWlsYWJsZSBjaGFycyB0byBzaGlmdFxuICAgICAgICAgIGlmICghc2hpZnRDaGFyKSBicmVhaztcbiAgICAgICAgICAtLWNpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNsZWFuIGlmIGNodW5rIGhhcyBubyB2YWx1ZVxuICAgICAgICAgIHRoaXMuY2h1bmtzLnNwbGljZShjaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpZnRDaGFyKSByZXR1cm4gc2hpZnRDaGFyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENodW5rc1RhaWxEZXRhaWxzO1xufSgpO1xuXG5leHBvcnQgeyBDaHVua3NUYWlsRGV0YWlscyBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2sgfSBmcm9tICcuLi8uLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcblxudmFyIFBhdHRlcm5DdXJzb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQYXR0ZXJuQ3Vyc29yKG1hc2tlZCwgcG9zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdHRlcm5DdXJzb3IpO1xuXG4gICAgdGhpcy5tYXNrZWQgPSBtYXNrZWQ7XG4gICAgdGhpcy5fbG9nID0gW107XG5cbiAgICB2YXIgX3JlZiA9IG1hc2tlZC5fbWFwUG9zVG9CbG9jayhwb3MpIHx8IChwb3MgPCAwID8gLy8gZmlyc3RcbiAgICB7XG4gICAgICBpbmRleDogMCxcbiAgICAgIG9mZnNldDogMFxuICAgIH0gOiAvLyBsYXN0XG4gICAge1xuICAgICAgaW5kZXg6IHRoaXMubWFza2VkLl9ibG9ja3MubGVuZ3RoLFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfSksXG4gICAgICAgIG9mZnNldCA9IF9yZWYub2Zmc2V0LFxuICAgICAgICBpbmRleCA9IF9yZWYuaW5kZXg7XG5cbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5vayA9IGZhbHNlO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhdHRlcm5DdXJzb3IsIFt7XG4gICAga2V5OiBcImJsb2NrXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQuX2Jsb2Nrc1t0aGlzLmluZGV4XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicG9zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQuX2Jsb2NrU3RhcnRQb3ModGhpcy5pbmRleCkgKyB0aGlzLm9mZnNldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICBvazogdGhpcy5va1xuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHMpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInB1c2hTdGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoU3RhdGUoKSB7XG4gICAgICB0aGlzLl9sb2cucHVzaCh0aGlzLnN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicG9wU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9wU3RhdGUoKSB7XG4gICAgICB2YXIgcyA9IHRoaXMuX2xvZy5wb3AoKTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IHM7XG4gICAgICByZXR1cm4gcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmluZEJsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRCbG9jaygpIHtcbiAgICAgIGlmICh0aGlzLmJsb2NrKSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLmluZGV4IDwgMCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbmRleCA+PSB0aGlzLm1hc2tlZC5fYmxvY2tzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5tYXNrZWQuX2Jsb2Nrcy5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMuYmxvY2sudmFsdWUubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcHVzaExlZnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3B1c2hMZWZ0KGZuKSB7XG4gICAgICB0aGlzLnB1c2hTdGF0ZSgpO1xuXG4gICAgICBmb3IgKHRoaXMuYmluZEJsb2NrKCk7IDAgPD0gdGhpcy5pbmRleDsgLS10aGlzLmluZGV4LCB0aGlzLm9mZnNldCA9ICgoX3RoaXMkYmxvY2sgPSB0aGlzLmJsb2NrKSA9PT0gbnVsbCB8fCBfdGhpcyRibG9jayA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkYmxvY2sudmFsdWUubGVuZ3RoKSB8fCAwKSB7XG4gICAgICAgIHZhciBfdGhpcyRibG9jaztcblxuICAgICAgICBpZiAoZm4oKSkgcmV0dXJuIHRoaXMub2sgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5vayA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcHVzaFJpZ2h0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wdXNoUmlnaHQoZm4pIHtcbiAgICAgIHRoaXMucHVzaFN0YXRlKCk7XG5cbiAgICAgIGZvciAodGhpcy5iaW5kQmxvY2soKTsgdGhpcy5pbmRleCA8IHRoaXMubWFza2VkLl9ibG9ja3MubGVuZ3RoOyArK3RoaXMuaW5kZXgsIHRoaXMub2Zmc2V0ID0gMCkge1xuICAgICAgICBpZiAoZm4oKSkgcmV0dXJuIHRoaXMub2sgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5vayA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwdXNoTGVmdEJlZm9yZUZpbGxlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoTGVmdEJlZm9yZUZpbGxlZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLl9wdXNoTGVmdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5ibG9jay5pc0ZpeGVkIHx8ICFfdGhpcy5ibG9jay52YWx1ZSkgcmV0dXJuO1xuICAgICAgICBfdGhpcy5vZmZzZXQgPSBfdGhpcy5ibG9jay5uZWFyZXN0SW5wdXRQb3MoX3RoaXMub2Zmc2V0LCBESVJFQ1RJT04uRk9SQ0VfTEVGVCk7XG4gICAgICAgIGlmIChfdGhpcy5vZmZzZXQgIT09IDApIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInB1c2hMZWZ0QmVmb3JlSW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaExlZnRCZWZvcmVJbnB1dCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAvLyBjYXNlczpcbiAgICAgIC8vIGZpbGxlZCBpbnB1dDogMDB8XG4gICAgICAvLyBvcHRpb25hbCBlbXB0eSBpbnB1dDogMDBbXXxcbiAgICAgIC8vIG5lc3RlZCBibG9jazogWFg8W10+fFxuICAgICAgcmV0dXJuIHRoaXMuX3B1c2hMZWZ0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzMi5ibG9jay5pc0ZpeGVkKSByZXR1cm47XG4gICAgICAgIF90aGlzMi5vZmZzZXQgPSBfdGhpczIuYmxvY2submVhcmVzdElucHV0UG9zKF90aGlzMi5vZmZzZXQsIERJUkVDVElPTi5MRUZUKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHVzaExlZnRCZWZvcmVSZXF1aXJlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoTGVmdEJlZm9yZVJlcXVpcmVkKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLl9wdXNoTGVmdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpczMuYmxvY2suaXNGaXhlZCB8fCBfdGhpczMuYmxvY2suaXNPcHRpb25hbCAmJiAhX3RoaXMzLmJsb2NrLnZhbHVlKSByZXR1cm47XG4gICAgICAgIF90aGlzMy5vZmZzZXQgPSBfdGhpczMuYmxvY2submVhcmVzdElucHV0UG9zKF90aGlzMy5vZmZzZXQsIERJUkVDVElPTi5MRUZUKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHVzaFJpZ2h0QmVmb3JlRmlsbGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hSaWdodEJlZm9yZUZpbGxlZCgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcHVzaFJpZ2h0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzNC5ibG9jay5pc0ZpeGVkIHx8ICFfdGhpczQuYmxvY2sudmFsdWUpIHJldHVybjtcbiAgICAgICAgX3RoaXM0Lm9mZnNldCA9IF90aGlzNC5ibG9jay5uZWFyZXN0SW5wdXRQb3MoX3RoaXM0Lm9mZnNldCwgRElSRUNUSU9OLkZPUkNFX1JJR0hUKTtcbiAgICAgICAgaWYgKF90aGlzNC5vZmZzZXQgIT09IF90aGlzNC5ibG9jay52YWx1ZS5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInB1c2hSaWdodEJlZm9yZUlucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hSaWdodEJlZm9yZUlucHV0KCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLl9wdXNoUmlnaHQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXM1LmJsb2NrLmlzRml4ZWQpIHJldHVybjsgLy8gY29uc3QgbyA9IHRoaXMub2Zmc2V0O1xuXG4gICAgICAgIF90aGlzNS5vZmZzZXQgPSBfdGhpczUuYmxvY2submVhcmVzdElucHV0UG9zKF90aGlzNS5vZmZzZXQsIERJUkVDVElPTi5OT05FKTsgLy8gSEFDSyBjYXNlcyBsaWtlIChTVElMTCBET0VTIE5PVCBXT1JLIEZPUiBORVNURUQpXG4gICAgICAgIC8vIGFhfFhcbiAgICAgICAgLy8gYWE8WHxbXT5YXyAgICAtIHRoaXMgd2lsbCBub3Qgd29ya1xuICAgICAgICAvLyBpZiAobyAmJiBvID09PSB0aGlzLm9mZnNldCAmJiB0aGlzLmJsb2NrIGluc3RhbmNlb2YgUGF0dGVybklucHV0RGVmaW5pdGlvbikgY29udGludWU7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHVzaFJpZ2h0QmVmb3JlUmVxdWlyZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaFJpZ2h0QmVmb3JlUmVxdWlyZWQoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuX3B1c2hSaWdodChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpczYuYmxvY2suaXNGaXhlZCB8fCBfdGhpczYuYmxvY2suaXNPcHRpb25hbCAmJiAhX3RoaXM2LmJsb2NrLnZhbHVlKSByZXR1cm47IC8vIFRPRE8gY2hlY2sgfFsqXVhYX1xuXG4gICAgICAgIF90aGlzNi5vZmZzZXQgPSBfdGhpczYuYmxvY2submVhcmVzdElucHV0UG9zKF90aGlzNi5vZmZzZXQsIERJUkVDVElPTi5OT05FKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGF0dGVybkN1cnNvcjtcbn0oKTtcblxuZXhwb3J0IHsgUGF0dGVybkN1cnNvciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2sgfSBmcm9tICcuLi8uLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OLCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENvbnRpbnVvdXNUYWlsRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcblxudmFyIFBhdHRlcm5GaXhlZERlZmluaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cbiAgZnVuY3Rpb24gUGF0dGVybkZpeGVkRGVmaW5pdGlvbihvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdHRlcm5GaXhlZERlZmluaXRpb24pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRzKTtcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIHRoaXMuaXNGaXhlZCA9IHRydWU7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGF0dGVybkZpeGVkRGVmaW5pdGlvbiwgW3tcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNVbm1hc2tpbmcgPyB0aGlzLnZhbHVlIDogJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5faXNSYXdJbnB1dCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX3ZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpICsgdGhpcy5fdmFsdWUuc2xpY2UodG9Qb3MpO1xuICAgICAgaWYgKCF0aGlzLl92YWx1ZSkgdGhpcy5faXNSYXdJbnB1dCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIHZhciBtaW5Qb3MgPSAwO1xuICAgICAgdmFyIG1heFBvcyA9IHRoaXMuX3ZhbHVlLmxlbmd0aDtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAgICByZXR1cm4gbWluUG9zO1xuXG4gICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbWF4UG9zO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMuX3ZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICByZXR1cm4gZmxhZ3MucmF3ICYmIHRoaXMuX2lzUmF3SW5wdXQgJiYgdGhpcy5fdmFsdWUuc2xpY2UoZnJvbVBvcywgdG9Qb3MpIHx8ICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNGaWxsZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdmFyIGFwcGVuZGVkID0gdGhpcy5jaGFyID09PSBjaDtcbiAgICAgIHZhciBpc1Jlc29sdmVkID0gYXBwZW5kZWQgJiYgKHRoaXMuaXNVbm1hc2tpbmcgfHwgZmxhZ3MuaW5wdXQgfHwgZmxhZ3MucmF3KSAmJiAhdGhpcy5lYWdlciAmJiAhZmxhZ3MudGFpbDtcbiAgICAgIGlmIChpc1Jlc29sdmVkKSBkZXRhaWxzLnJhd0luc2VydGVkID0gdGhpcy5jaGFyO1xuICAgICAgdGhpcy5fdmFsdWUgPSBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5jaGFyO1xuICAgICAgdGhpcy5faXNSYXdJbnB1dCA9IGlzUmVzb2x2ZWQgJiYgKGZsYWdzLnJhdyB8fCBmbGFncy5pbnB1dCk7XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZEVhZ2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRFYWdlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hcHBlbmRDaGFyKHRoaXMuY2hhcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdGhpcy5fdmFsdWUgPSBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5jaGFyO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCcnKTtcbiAgICB9IC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGVuZENoYXIoc3RyWzBdLCBmbGFncyk7XG5cbiAgICAgIGlmICh0YWlsICE9IG51bGwpIHtcbiAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKHRhaWwpLnRhaWxTaGlmdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge31cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX3ZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgICAgX2lzUmF3SW5wdXQ6IHRoaXMuX2lzUmF3SW5wdXRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhdHRlcm5GaXhlZERlZmluaXRpb247XG59KCk7XG5cbmV4cG9ydCB7IFBhdHRlcm5GaXhlZERlZmluaXRpb24gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBiIGFzIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyB9IGZyb20gJy4uLy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi8uLi9jb3JlL2hvbGRlci5qcyc7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJtYXNrXCJdO1xudmFyIERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMgPSB7XG4gICcwJzogL1xcZC8sXG4gICdhJzogL1tcXHUwMDQxLVxcdTAwNUFcXHUwMDYxLVxcdTAwN0FcXHUwMEFBXFx1MDBCNVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTBcXHUwOEEyLVxcdTA4QUNcXHUwOTA0LVxcdTA5MzlcXHUwOTNEXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3RlxcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkRcXHUwOUNFXFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTFcXHUwOUYwXFx1MDlGMVxcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNzItXFx1MEE3NFxcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCRFxcdTBBRDBcXHUwQUUwXFx1MEFFMVxcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNEXFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjcxXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkQwXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzMzXFx1MEMzNS1cXHUwQzM5XFx1MEMzRFxcdTBDNThcXHUwQzU5XFx1MEM2MFxcdTBDNjFcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENGMVxcdTBDRjJcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNEXFx1MEQ0RVxcdTBENjBcXHUwRDYxXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQy1cXHUwRURGXFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwMDAtXFx1MTAyQVxcdTEwM0ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVBLVxcdTEwNURcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZFLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhFXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3ODAtXFx1MTdCM1xcdTE3RDdcXHUxN0RDXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE4XFx1MThBQVxcdTE4QjAtXFx1MThGNVxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBQlxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFBMjAtXFx1MUE1NFxcdTFBQTdcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQkEtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFDRjVcXHUxQ0Y2XFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEyRi1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxODNcXHUyMTg0XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0VFXFx1MkNGMlxcdTJDRjNcXHUyRDAwLVxcdTJEMjVcXHUyRDI3XFx1MkQyRFxcdTJEMzAtXFx1MkQ2N1xcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUyRTJGXFx1MzAwNVxcdTMwMDZcXHUzMDMxLVxcdTMwMzVcXHUzMDNCXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOUQtXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjk3XFx1QTZBMC1cXHVBNkU1XFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MC1cXHVBNzkzXFx1QTdBMC1cXHVBN0FBXFx1QTdGOC1cXHVBODAxXFx1QTgwMy1cXHVBODA1XFx1QTgwNy1cXHVBODBBXFx1QTgwQy1cXHVBODIyXFx1QTg0MC1cXHVBODczXFx1QTg4Mi1cXHVBOEIzXFx1QThGMi1cXHVBOEY3XFx1QThGQlxcdUE5MEEtXFx1QTkyNVxcdUE5MzAtXFx1QTk0NlxcdUE5NjAtXFx1QTk3Q1xcdUE5ODQtXFx1QTlCMlxcdUE5Q0ZcXHVBQTAwLVxcdUFBMjhcXHVBQTQwLVxcdUFBNDJcXHVBQTQ0LVxcdUFBNEJcXHVBQTYwLVxcdUFBNzZcXHVBQTdBXFx1QUE4MC1cXHVBQUFGXFx1QUFCMVxcdUFBQjVcXHVBQUI2XFx1QUFCOS1cXHVBQUJEXFx1QUFDMFxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUFcXHVBQUYyLVxcdUFBRjRcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQkMwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdLyxcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjIwNzUwNzBcbiAgJyonOiAvLi9cbn07XG4vKiogKi9cblxudmFyIFBhdHRlcm5JbnB1dERlZmluaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cbiAgZnVuY3Rpb24gUGF0dGVybklucHV0RGVmaW5pdGlvbihvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdHRlcm5JbnB1dERlZmluaXRpb24pO1xuXG4gICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXG4gICAgICAgIGJsb2NrT3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRzLCBfZXhjbHVkZWQpO1xuXG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKHtcbiAgICAgIG1hc2s6IG1hc2tcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGJsb2NrT3B0cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGF0dGVybklucHV0RGVmaW5pdGlvbiwgW3tcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG4gICAgICB0aGlzLm1hc2tlZC5yZXNldCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuXG4gICAgICBpZiAoZnJvbVBvcyA9PT0gMCAmJiB0b1BvcyA+PSAxKSB7XG4gICAgICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnJlbW92ZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnZhbHVlIHx8ICh0aGlzLmlzRmlsbGVkICYmICF0aGlzLmlzT3B0aW9uYWwgPyB0aGlzLnBsYWNlaG9sZGVyQ2hhciA6ICcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMubWFza2VkLnZhbHVlKSB8fCB0aGlzLmlzT3B0aW9uYWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyKGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgaWYgKHRoaXMuaXNGaWxsZWQpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5tYXNrZWQuc3RhdGU7IC8vIHNpbXVsYXRlIGlucHV0XG5cbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5tYXNrZWQuX2FwcGVuZENoYXIoY2gsIGZsYWdzKTtcblxuICAgICAgaWYgKGRldGFpbHMuaW5zZXJ0ZWQgJiYgdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IGRldGFpbHMucmF3SW5zZXJ0ZWQgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWwgJiYgIXRoaXMubGF6eSAmJiAhZmxhZ3MuaW5wdXQpIHtcbiAgICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgICAgfVxuXG4gICAgICBkZXRhaWxzLnNraXAgPSAhZGV0YWlscy5pbnNlcnRlZCAmJiAhdGhpcy5pc09wdGlvbmFsO1xuICAgICAgdGhpcy5pc0ZpbGxlZCA9IEJvb2xlYW4oZGV0YWlscy5pbnNlcnRlZCk7XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZCgpIHtcbiAgICAgIHZhciBfdGhpcyRtYXNrZWQ7XG5cbiAgICAgIC8vIFRPRE8gcHJvYmFibHkgc2hvdWxkIGJlIGRvbmUgdmlhIF9hcHBlbmRDaGFyXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZCA9IHRoaXMubWFza2VkKS5hcHBlbmQuYXBwbHkoX3RoaXMkbWFza2VkLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMuaXNGaWxsZWQgfHwgdGhpcy5pc09wdGlvbmFsKSByZXR1cm4gZGV0YWlscztcbiAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRFYWdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kRWFnZXIoKSB7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkMjtcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQyID0gdGhpcy5tYXNrZWQpLmV4dHJhY3RUYWlsLmFwcGx5KF90aGlzJG1hc2tlZDIsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCgpIHtcbiAgICAgIHZhciBfdGhpcyRtYXNrZWQzO1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDMgPSB0aGlzLm1hc2tlZCkuYXBwZW5kVGFpbC5hcHBseShfdGhpcyRtYXNrZWQzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIHZhciBtaW5Qb3MgPSAwO1xuICAgICAgdmFyIG1heFBvcyA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGJvdW5kUG9zID0gTWF0aC5taW4oTWF0aC5tYXgoY3Vyc29yUG9zLCBtaW5Qb3MpLCBtYXhQb3MpO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1pblBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IGJvdW5kUG9zIDogbWF4UG9zO1xuXG4gICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGJvdW5kUG9zO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkNCwgX3RoaXMkcGFyZW50O1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDQgPSB0aGlzLm1hc2tlZCkuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRtYXNrZWQ0LCBhcmd1bWVudHMpICYmICghdGhpcy5wYXJlbnQgfHwgKF90aGlzJHBhcmVudCA9IHRoaXMucGFyZW50KS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJHBhcmVudCwgYXJndW1lbnRzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgdGhpcy5tYXNrZWQuZG9Db21taXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hc2tlZDogdGhpcy5tYXNrZWQuc3RhdGUsXG4gICAgICAgIGlzRmlsbGVkOiB0aGlzLmlzRmlsbGVkXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGUubWFza2VkO1xuICAgICAgdGhpcy5pc0ZpbGxlZCA9IHN0YXRlLmlzRmlsbGVkO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQYXR0ZXJuSW5wdXREZWZpbml0aW9uO1xufSgpO1xuXG5leHBvcnQgeyBERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TLCBQYXR0ZXJuSW5wdXREZWZpbml0aW9uIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuXG4vKiogTWFzayBwaXBlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gdHlwZXMgKi9cblxudmFyIFBJUEVfVFlQRSA9IHtcbiAgTUFTS0VEOiAndmFsdWUnLFxuICBVTk1BU0tFRDogJ3VubWFza2VkVmFsdWUnLFxuICBUWVBFRDogJ3R5cGVkVmFsdWUnXG59O1xuLyoqIENyZWF0ZXMgbmV3IHBpcGUgZnVuY3Rpb24gZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSwgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBvcHRpb25zICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVBpcGUobWFzaykge1xuICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogUElQRV9UWVBFLk1BU0tFRDtcbiAgdmFyIHRvID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBQSVBFX1RZUEUuTUFTS0VEO1xuICB2YXIgbWFza2VkID0gY3JlYXRlTWFzayhtYXNrKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBtYXNrZWQucnVuSXNvbGF0ZWQoZnVuY3Rpb24gKG0pIHtcbiAgICAgIG1bZnJvbV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBtW3RvXTtcbiAgICB9KTtcbiAgfTtcbn1cbi8qKiBQaXBlcyB2YWx1ZSB0aHJvdWdoIG1hc2sgZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSwgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBvcHRpb25zICovXG5cbmZ1bmN0aW9uIHBpcGUodmFsdWUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBpcGVBcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwaXBlQXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY3JlYXRlUGlwZS5hcHBseSh2b2lkIDAsIHBpcGVBcmdzKSh2YWx1ZSk7XG59XG5JTWFzay5QSVBFX1RZUEUgPSBQSVBFX1RZUEU7XG5JTWFzay5jcmVhdGVQaXBlID0gY3JlYXRlUGlwZTtcbklNYXNrLnBpcGUgPSBwaXBlO1xuXG5leHBvcnQgeyBQSVBFX1RZUEUsIGNyZWF0ZVBpcGUsIHBpcGUgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mLCBmIGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xuaW1wb3J0IHsgbm9ybWFsaXplUHJlcGFyZSB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vYmFzZS5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jdXJzb3IuanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5cbi8qKiBQYXR0ZXJuIHdoaWNoIGFjY2VwdHMgcmFuZ2VzICovXG5cbnZhciBNYXNrZWRSYW5nZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZFBhdHRlcm4pIHtcbiAgX2luaGVyaXRzKE1hc2tlZFJhbmdlLCBfTWFza2VkUGF0dGVybik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRSYW5nZSk7XG5cbiAgZnVuY3Rpb24gTWFza2VkUmFuZ2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZFJhbmdlKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRSYW5nZSwgW3tcbiAgICBrZXk6IFwiX21hdGNoRnJvbVwiLFxuICAgIGdldDpcbiAgICAvKipcbiAgICAgIE9wdGlvbmFsbHkgc2V0cyBtYXggbGVuZ3RoIG9mIHBhdHRlcm4uXG4gICAgICBVc2VkIHdoZW4gcGF0dGVybiBsZW5ndGggaXMgbG9uZ2VyIHRoZW4gYHRvYCBwYXJhbSBsZW5ndGguIFBhZHMgemVyb3MgYXQgc3RhcnQgaW4gdGhpcyBjYXNlLlxuICAgICovXG5cbiAgICAvKiogTWluIGJvdW5kICovXG5cbiAgICAvKiogTWF4IGJvdW5kICovXG5cbiAgICAvKiogKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGggLSBTdHJpbmcodGhpcy5mcm9tKS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAvLyBUT0RPIHR5cGVcbiAgICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdG86IHRoaXMudG8gfHwgMCxcbiAgICAgICAgZnJvbTogdGhpcy5mcm9tIHx8IDAsXG4gICAgICAgIG1heExlbmd0aDogdGhpcy5tYXhMZW5ndGggfHwgMFxuICAgICAgfSwgb3B0cyk7XG4gICAgICB2YXIgbWF4TGVuZ3RoID0gU3RyaW5nKG9wdHMudG8pLmxlbmd0aDtcbiAgICAgIGlmIChvcHRzLm1heExlbmd0aCAhPSBudWxsKSBtYXhMZW5ndGggPSBNYXRoLm1heChtYXhMZW5ndGgsIG9wdHMubWF4TGVuZ3RoKTtcbiAgICAgIG9wdHMubWF4TGVuZ3RoID0gbWF4TGVuZ3RoO1xuICAgICAgdmFyIGZyb21TdHIgPSBTdHJpbmcob3B0cy5mcm9tKS5wYWRTdGFydChtYXhMZW5ndGgsICcwJyk7XG4gICAgICB2YXIgdG9TdHIgPSBTdHJpbmcob3B0cy50bykucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHNhbWVDaGFyc0NvdW50ID0gMDtcblxuICAgICAgd2hpbGUgKHNhbWVDaGFyc0NvdW50IDwgdG9TdHIubGVuZ3RoICYmIHRvU3RyW3NhbWVDaGFyc0NvdW50XSA9PT0gZnJvbVN0cltzYW1lQ2hhcnNDb3VudF0pIHtcbiAgICAgICAgKytzYW1lQ2hhcnNDb3VudDtcbiAgICAgIH1cblxuICAgICAgb3B0cy5tYXNrID0gdG9TdHIuc2xpY2UoMCwgc2FtZUNoYXJzQ291bnQpLnJlcGxhY2UoLzAvZywgJ1xcXFwwJykgKyAnMCcucmVwZWF0KG1heExlbmd0aCAtIHNhbWVDaGFyc0NvdW50KTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcImlzQ29tcGxldGVcIiwgdGhpcykgJiYgQm9vbGVhbih0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYm91bmRhcmllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBib3VuZGFyaWVzKHN0cikge1xuICAgICAgdmFyIG1pbnN0ciA9ICcnO1xuICAgICAgdmFyIG1heHN0ciA9ICcnO1xuXG4gICAgICB2YXIgX3JlZiA9IHN0ci5tYXRjaCgvXihcXEQqKShcXGQqKShcXEQqKS8pIHx8IFtdLFxuICAgICAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMyksXG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmMlsxXSxcbiAgICAgICAgICBudW0gPSBfcmVmMlsyXTtcblxuICAgICAgaWYgKG51bSkge1xuICAgICAgICBtaW5zdHIgPSAnMCcucmVwZWF0KHBsYWNlaG9sZGVyLmxlbmd0aCkgKyBudW07XG4gICAgICAgIG1heHN0ciA9ICc5Jy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcbiAgICAgIH1cblxuICAgICAgbWluc3RyID0gbWluc3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICAgIG1heHN0ciA9IG1heHN0ci5wYWRFbmQodGhpcy5tYXhMZW5ndGgsICc5Jyk7XG4gICAgICByZXR1cm4gW21pbnN0ciwgbWF4c3RyXTtcbiAgICB9IC8vIFRPRE8gc3RyIGlzIGEgc2luZ2xlIGNoYXIgZXZlcnl0aW1lXG5cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ByZXBhcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9QcmVwYXJlKGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIGRldGFpbHM7XG5cbiAgICAgIHZhciBfbm9ybWFsaXplUHJlcGFyZSA9IG5vcm1hbGl6ZVByZXBhcmUoX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ByZXBhcmVcIiwgdGhpcykuY2FsbCh0aGlzLCBjaC5yZXBsYWNlKC9cXEQvZywgJycpLCBmbGFncykpO1xuXG4gICAgICB2YXIgX25vcm1hbGl6ZVByZXBhcmUyID0gX3NsaWNlZFRvQXJyYXkoX25vcm1hbGl6ZVByZXBhcmUsIDIpO1xuXG4gICAgICBjaCA9IF9ub3JtYWxpemVQcmVwYXJlMlswXTtcbiAgICAgIGRldGFpbHMgPSBfbm9ybWFsaXplUHJlcGFyZTJbMV07XG4gICAgICBpZiAoIXRoaXMuYXV0b2ZpeCB8fCAhY2gpIHJldHVybiBjaDtcbiAgICAgIHZhciBmcm9tU3RyID0gU3RyaW5nKHRoaXMuZnJvbSkucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgICB2YXIgdG9TdHIgPSBTdHJpbmcodGhpcy50bykucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgICB2YXIgbmV4dFZhbCA9IHRoaXMudmFsdWUgKyBjaDtcbiAgICAgIGlmIChuZXh0VmFsLmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoKSByZXR1cm4gJyc7XG5cbiAgICAgIHZhciBfdGhpcyRib3VuZGFyaWVzID0gdGhpcy5ib3VuZGFyaWVzKG5leHRWYWwpLFxuICAgICAgICAgIF90aGlzJGJvdW5kYXJpZXMyID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMkYm91bmRhcmllcywgMiksXG4gICAgICAgICAgbWluc3RyID0gX3RoaXMkYm91bmRhcmllczJbMF0sXG4gICAgICAgICAgbWF4c3RyID0gX3RoaXMkYm91bmRhcmllczJbMV07XG5cbiAgICAgIGlmIChOdW1iZXIobWF4c3RyKSA8IHRoaXMuZnJvbSkgcmV0dXJuIGZyb21TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKE51bWJlcihtaW5zdHIpID4gdGhpcy50bykge1xuICAgICAgICBpZiAodGhpcy5hdXRvZml4ID09PSAncGFkJyAmJiBuZXh0VmFsLmxlbmd0aCA8IHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIFsnJywgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5hcHBlbmQoZnJvbVN0cltuZXh0VmFsLmxlbmd0aCAtIDFdICsgY2gsIGZsYWdzKSldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvU3RyW25leHRWYWwubGVuZ3RoIC0gMV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF9nZXQyO1xuXG4gICAgICB2YXIgc3RyID0gdGhpcy52YWx1ZTtcbiAgICAgIHZhciBmaXJzdE5vblplcm8gPSBzdHIuc2VhcmNoKC9bXjBdLyk7XG4gICAgICBpZiAoZmlyc3ROb25aZXJvID09PSAtMSAmJiBzdHIubGVuZ3RoIDw9IHRoaXMuX21hdGNoRnJvbSkgcmV0dXJuIHRydWU7XG5cbiAgICAgIHZhciBfdGhpcyRib3VuZGFyaWVzMyA9IHRoaXMuYm91bmRhcmllcyhzdHIpLFxuICAgICAgICAgIF90aGlzJGJvdW5kYXJpZXM0ID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMkYm91bmRhcmllczMsIDIpLFxuICAgICAgICAgIG1pbnN0ciA9IF90aGlzJGJvdW5kYXJpZXM0WzBdLFxuICAgICAgICAgIG1heHN0ciA9IF90aGlzJGJvdW5kYXJpZXM0WzFdO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZnJvbSA8PSBOdW1iZXIobWF4c3RyKSAmJiBOdW1iZXIobWluc3RyKSA8PSB0aGlzLnRvICYmIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZFJhbmdlO1xufShNYXNrZWRQYXR0ZXJuKTtcbklNYXNrLk1hc2tlZFJhbmdlID0gTWFza2VkUmFuZ2U7XG5cbmV4cG9ydCB7IE1hc2tlZFJhbmdlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuXG4vKiogTWFza2luZyBieSBSZWdFeHAgKi9cblxudmFyIE1hc2tlZFJlZ0V4cCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkUmVnRXhwLCBfTWFza2VkKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZFJlZ0V4cCk7XG5cbiAgZnVuY3Rpb24gTWFza2VkUmVnRXhwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRSZWdFeHApO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZFJlZ0V4cCwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICovXG4gICAgZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBpZiAob3B0cy5tYXNrKSBvcHRzLnZhbGlkYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zZWFyY2gob3B0cy5tYXNrKSA+PSAwO1xuICAgICAgfTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmVnRXhwLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRSZWdFeHA7XG59KE1hc2tlZCk7XG5JTWFzay5NYXNrZWRSZWdFeHAgPSBNYXNrZWRSZWdFeHA7XG5cbmV4cG9ydCB7IE1hc2tlZFJlZ0V4cCBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOlsiSU1hc2siLCJwaG9uZSIsIm1hc2tPcHRpb25zIiwibWFzayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=