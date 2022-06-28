"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["datepicker"],{

/***/ "./resources/scripts/modules/datepicker.js":
/*!*************************************************!*\
  !*** ./resources/scripts/modules/datepicker.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "datepicker": () => (/* binding */ datepicker)
/* harmony export */ });
/* harmony import */ var vanillajs_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanillajs-datepicker/Datepicker */ "./node_modules/vanillajs-datepicker/js/Datepicker.js");


var datepicker = function datepicker() {
  new vanillajs_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.datepicker-input'), {});
};



/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/Datepicker.js":
/*!************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/Datepicker.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Datepicker)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/date-format.js */ "./node_modules/vanillajs-datepicker/js/lib/date-format.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/base-locales.js */ "./node_modules/vanillajs-datepicker/js/i18n/base-locales.js");
/* harmony import */ var _options_defaultOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options/defaultOptions.js */ "./node_modules/vanillajs-datepicker/js/options/defaultOptions.js");
/* harmony import */ var _options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options/processOptions.js */ "./node_modules/vanillajs-datepicker/js/options/processOptions.js");
/* harmony import */ var _picker_Picker_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./picker/Picker.js */ "./node_modules/vanillajs-datepicker/js/picker/Picker.js");
/* harmony import */ var _events_functions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");
/* harmony import */ var _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/inputFieldListeners.js */ "./node_modules/vanillajs-datepicker/js/events/inputFieldListeners.js");
/* harmony import */ var _events_otherListeners_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/otherListeners.js */ "./node_modules/vanillajs-datepicker/js/events/otherListeners.js");













function stringifyDates(dates, config) {
  return dates
    .map(dt => (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(dt, config.format, config.locale))
    .join(config.dateDelimiter);
}

// parse input dates and create an array of time values for selection
// returns undefined if there are no valid dates in inputDates
// when origDates (current selection) is passed, the function works to mix
// the input dates into the current selection
function processInputDates(datepicker, inputDates, clear = false) {
  // const {config, dates: origDates, rangepicker} = datepicker;
  const {config, dates: origDates, rangeSideIndex} = datepicker;
  if (inputDates.length === 0) {
    // empty input is considered valid unless origiDates is passed
    return clear ? [] : undefined;
  }

  // const rangeEnd = rangepicker && datepicker === rangepicker.datepickers[1];
  let newDates = inputDates.reduce((dates, dt) => {
    let date = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(dt, config.format, config.locale);
    if (date === undefined) {
      return dates;
    }
    // adjust to 1st of the month/Jan 1st of the year
    // or to the last day of the monh/Dec 31st of the year if the datepicker
    // is the range-end picker of a rangepicker
    date = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(date, config.pickLevel, rangeSideIndex);
    if (
      (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInRange)(date, config.minDate, config.maxDate)
      && !dates.includes(date)
      && !config.datesDisabled.includes(date)
      && (config.pickLevel > 0 || !config.daysOfWeekDisabled.includes(new Date(date).getDay()))
    ) {
      dates.push(date);
    }
    return dates;
  }, []);
  if (newDates.length === 0) {
    return;
  }
  if (config.multidate && !clear) {
    // get the synmetric difference between origDates and newDates
    newDates = newDates.reduce((dates, date) => {
      if (!origDates.includes(date)) {
        dates.push(date);
      }
      return dates;
    }, origDates.filter(date => !newDates.includes(date)));
  }
  // do length check always because user can input multiple dates regardless of the mode
  return config.maxNumberOfDates && newDates.length > config.maxNumberOfDates
    ? newDates.slice(config.maxNumberOfDates * -1)
    : newDates;
}

// refresh the UI elements
// modes: 1: input only, 2, picker only, 3 both
function refreshUI(datepicker, mode = 3, quickRender = true) {
  const {config, picker, inputField} = datepicker;
  if (mode & 2) {
    const newView = picker.active ? config.pickLevel : config.startView;
    picker.update().changeView(newView).render(quickRender);
  }
  if (mode & 1 && inputField) {
    inputField.value = stringifyDates(datepicker.dates, config);
  }
}

function setDate(datepicker, inputDates, options) {
  let {clear, render, autohide, revert} = options;
  if (render === undefined) {
    render = true;
  }
  if (!render) {
    autohide = false;
  } else if (autohide === undefined) {
    autohide = datepicker.config.autohide;
  }

  const newDates = processInputDates(datepicker, inputDates, clear);
  if (!newDates && !revert) {
    return;
  }
  if (newDates && newDates.toString() !== datepicker.dates.toString()) {
    datepicker.dates = newDates;
    refreshUI(datepicker, render ? 3 : 1);
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_9__.triggerDatepickerEvent)(datepicker, 'changeDate');
  } else {
    refreshUI(datepicker, 1);
  }

  if (autohide) {
    datepicker.hide();
  }
}

/**
 * Class representing a date picker
 */
class Datepicker {
  /**
   * Create a date picker
   * @param  {Element} element - element to bind a date picker
   * @param  {Object} [options] - config options
   * @param  {DateRangePicker} [rangepicker] - DateRangePicker instance the
   * date picker belongs to. Use this only when creating date picker as a part
   * of date range picker
   */
  constructor(element, options = {}, rangepicker = undefined) {
    element.datepicker = this;
    this.element = element;

    const config = this.config = Object.assign({
      buttonClass: (options.buttonClass && String(options.buttonClass)) || 'button',
      container: null,
      defaultViewDate: (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.today)(),
      maxDate: undefined,
      minDate: undefined,
    }, (0,_options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_options_defaultOptions_js__WEBPACK_IMPORTED_MODULE_6__["default"], this));
    // configure by type
    const inline = this.inline = element.tagName !== 'INPUT';
    let inputField;
    if (inline) {
      config.container = element;
    } else {
      if (options.container) {
        // omit string type check because it doesn't guarantee to avoid errors
        // (invalid selector string causes abend with sytax error)
        config.container = options.container instanceof HTMLElement
          ? options.container
          : document.querySelector(options.container);
      }
      inputField = this.inputField = element;
      inputField.classList.add('datepicker-input');
    }
    if (rangepicker) {
      // check validiry
      const index = rangepicker.inputs.indexOf(inputField);
      const datepickers = rangepicker.datepickers;
      if (index < 0 || index > 1 || !Array.isArray(datepickers)) {
        throw Error('Invalid rangepicker object.');
      }
      // attach itaelf to the rangepicker here so that processInputDates() can
      // determine if this is the range-end picker of the rangepicker while
      // setting inital values when pickLevel > 0
      datepickers[index] = this;
      // add getter for rangepicker
      Object.defineProperty(this, 'rangepicker', {
        get() {
          return rangepicker;
        },
      });
      Object.defineProperty(this, 'rangeSideIndex', {
        get() {
          return index;
        },
      });
    }

    // set up config
    this._options = options;
    Object.assign(config, (0,_options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, this));

    // set initial dates
    let initialDates;
    if (inline) {
      initialDates = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.stringToArray)(element.dataset.date, config.dateDelimiter);
      delete element.dataset.date;
    } else {
      initialDates = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.stringToArray)(inputField.value, config.dateDelimiter);
    }
    this.dates = [];
    // process initial value
    const inputDateValues = processInputDates(this, initialDates);
    if (inputDateValues && inputDateValues.length > 0) {
      this.dates = inputDateValues;
    }
    if (inputField) {
      inputField.value = stringifyDates(this.dates, config);
    }

    const picker = this.picker = new _picker_Picker_js__WEBPACK_IMPORTED_MODULE_8__["default"](this);

    if (inline) {
      this.show();
    } else {
      // set up event listeners in other modes
      const onMousedownDocument = _events_otherListeners_js__WEBPACK_IMPORTED_MODULE_11__.onClickOutside.bind(null, this);
      const listeners = [
        [inputField, 'keydown', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onKeydown.bind(null, this)],
        [inputField, 'focus', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onFocus.bind(null, this)],
        [inputField, 'mousedown', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onMousedown.bind(null, this)],
        [inputField, 'click', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onClickInput.bind(null, this)],
        [inputField, 'paste', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onPaste.bind(null, this)],
        [document, 'mousedown', onMousedownDocument],
        [document, 'touchstart', onMousedownDocument],
        [window, 'resize', picker.place.bind(picker)]
      ];
      (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_4__.registerListeners)(this, listeners);
    }
  }

  /**
   * Format Date object or time value in given format and language
   * @param  {Date|Number} date - date or time value to format
   * @param  {String|Object} format - format string or object that contains
   * toDisplay() custom formatter, whose signature is
   * - args:
   *   - date: {Date} - Date instance of the date passed to the method
   *   - format: {Object} - the format object passed to the method
   *   - locale: {Object} - locale for the language specified by `lang`
   * - return:
   *     {String} formatted date
   * @param  {String} [lang=en] - language code for the locale to use
   * @return {String} formatted date
   */
  static formatDate(date, format, lang) {
    return (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(date, format, lang && _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales[lang] || _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales.en);
  }

  /**
   * Parse date string
   * @param  {String|Date|Number} dateStr - date string, Date object or time
   * value to parse
   * @param  {String|Object} format - format string or object that contains
   * toValue() custom parser, whose signature is
   * - args:
   *   - dateStr: {String|Date|Number} - the dateStr passed to the method
   *   - format: {Object} - the format object passed to the method
   *   - locale: {Object} - locale for the language specified by `lang`
   * - return:
   *     {Date|Number} parsed date or its time value
   * @param  {String} [lang=en] - language code for the locale to use
   * @return {Number} time value of parsed date
   */
  static parseDate(dateStr, format, lang) {
    return (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(dateStr, format, lang && _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales[lang] || _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales.en);
  }

  /**
   * @type {Object} - Installed locales in `[languageCode]: localeObject` format
   * en`:_English (US)_ is pre-installed.
   */
  static get locales() {
    return _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales;
  }

  /**
   * @type {Boolean} - Whether the picker element is shown. `true` whne shown
   */
  get active() {
    return !!(this.picker && this.picker.active);
  }

  /**
   * @type {HTMLDivElement} - DOM object of picker element
   */
  get pickerElement() {
    return this.picker ? this.picker.element : undefined;
  }

  /**
   * Set new values to the config options
   * @param {Object} options - config options to update
   */
  setOptions(options) {
    const picker = this.picker;
    const newOptions = (0,_options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, this);
    Object.assign(this._options, options);
    Object.assign(this.config, newOptions);
    picker.setOptions(newOptions);

    refreshUI(this, 3);
  }

  /**
   * Show the picker element
   */
  show() {
    if (this.inputField) {
      if (this.inputField.disabled) {
        return;
      }
      if (!(0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.isActiveElement)(this.inputField) && !this.config.disableTouchKeyboard) {
        this._showing = true;
        this.inputField.focus();
        delete this._showing;
      }
    }
    this.picker.show();
  }

  /**
   * Hide the picker element
   * Not available on inline picker
   */
  hide() {
    if (this.inline) {
      return;
    }
    this.picker.hide();
    this.picker.update().changeView(this.config.startView).render();
  }

  /**
   * Destroy the Datepicker instance
   * @return {Detepicker} - the instance destroyed
   */
  destroy() {
    this.hide();
    (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_4__.unregisterListeners)(this);
    this.picker.detach();
    if (!this.inline) {
      this.inputField.classList.remove('datepicker-input');
    }
    delete this.element.datepicker;
    return this;
  }

  /**
   * Get the selected date(s)
   *
   * The method returns a Date object of selected date by default, and returns
   * an array of selected dates in multidate mode. If format string is passed,
   * it returns date string(s) formatted in given format.
   *
   * @param  {String} [format] - Format string to stringify the date(s)
   * @return {Date|String|Date[]|String[]} - selected date(s), or if none is
   * selected, empty array in multidate mode and untitled in sigledate mode
   */
  getDate(format = undefined) {
    const callback = format
      ? date => (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(date, format, this.config.locale)
      : date => new Date(date);

    if (this.config.multidate) {
      return this.dates.map(callback);
    }
    if (this.dates.length > 0) {
      return callback(this.dates[0]);
    }
  }

  /**
   * Set selected date(s)
   *
   * In multidate mode, you can pass multiple dates as a series of arguments
   * or an array. (Since each date is parsed individually, the type of the
   * dates doesn't have to be the same.)
   * The given dates are used to toggle the select status of each date. The
   * number of selected dates is kept from exceeding the length set to
   * maxNumberOfDates.
   *
   * With clear: true option, the method can be used to clear the selection
   * and to replace the selection instead of toggling in multidate mode.
   * If the option is passed with no date arguments or an empty dates array,
   * it works as "clear" (clear the selection then set nothing), and if the
   * option is passed with new dates to select, it works as "replace" (clear
   * the selection then set the given dates)
   *
   * When render: false option is used, the method omits re-rendering the
   * picker element. In this case, you need to call refresh() method later in
   * order for the picker element to reflect the changes. The input field is
   * refreshed always regardless of this option.
   *
   * When invalid (unparsable, repeated, disabled or out-of-range) dates are
   * passed, the method ignores them and applies only valid ones. In the case
   * that all the given dates are invalid, which is distinguished from passing
   * no dates, the method considers it as an error and leaves the selection
   * untouched. (The input field also remains untouched unless revert: true
   * option is used.)
   *
   * @param {...(Date|Number|String)|Array} [dates] - Date strings, Date
   * objects, time values or mix of those for new selection
   * @param {Object} [options] - function options
   * - clear: {boolean} - Whether to clear the existing selection
   *     defualt: false
   * - render: {boolean} - Whether to re-render the picker element
   *     default: true
   * - autohide: {boolean} - Whether to hide the picker element after re-render
   *     Ignored when used with render: false
   *     default: config.autohide
   * - revert: {boolean} - Whether to refresh the input field when all the
   *     passed dates are invalid
   *     default: false
   */
  setDate(...args) {
    const dates = [...args];
    const opts = {};
    const lastArg = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.lastItemOf)(args);
    if (
      typeof lastArg === 'object'
      && !Array.isArray(lastArg)
      && !(lastArg instanceof Date)
      && lastArg
    ) {
      Object.assign(opts, dates.pop());
    }

    const inputDates = Array.isArray(dates[0]) ? dates[0] : dates;
    setDate(this, inputDates, opts);
  }

  /**
   * Update the selected date(s) with input field's value
   * Not available on inline picker
   *
   * The input field will be refreshed with properly formatted date string.
   *
   * In the case that all the entered dates are invalid (unparsable, repeated,
   * disabled or out-of-range), whixh is distinguished from empty input field,
   * the method leaves the input field untouched as well as the selection by
   * default. If revert: true option is used in this case, the input field is
   * refreshed with the existing selection.
   *
   * @param  {Object} [options] - function options
   * - autohide: {boolean} - whether to hide the picker element after refresh
   *     default: false
   * - revert: {boolean} - Whether to refresh the input field when all the
   *     passed dates are invalid
   *     default: false
   */
  update(options = undefined) {
    if (this.inline) {
      return;
    }

    const opts = Object.assign(options || {}, {clear: true, render: true});
    const inputDates = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.stringToArray)(this.inputField.value, this.config.dateDelimiter);
    setDate(this, inputDates, opts);
  }

  /**
   * Refresh the picker element and the associated input field
   * @param {String} [target] - target item when refreshing one item only
   * 'picker' or 'input'
   * @param {Boolean} [forceRender] - whether to re-render the picker element
   * regardless of its state instead of optimized refresh
   */
  refresh(target = undefined, forceRender = false) {
    if (target && typeof target !== 'string') {
      forceRender = target;
      target = undefined;
    }

    let mode;
    if (target === 'picker') {
      mode = 2;
    } else if (target === 'input') {
      mode = 1;
    } else {
      mode = 3;
    }
    refreshUI(this, mode, !forceRender);
  }

  /**
   * Enter edit mode
   * Not available on inline picker or when the picker element is hidden
   */
  enterEditMode() {
    if (this.inline || !this.picker.active || this.editMode) {
      return;
    }
    this.editMode = true;
    this.inputField.classList.add('in-edit');
  }

  /**
   * Exit from edit mode
   * Not available on inline picker
   * @param  {Object} [options] - function options
   * - update: {boolean} - whether to call update() after exiting
   *     If false, input field is revert to the existing selection
   *     default: false
   */
  exitEditMode(options = undefined) {
    if (this.inline || !this.editMode) {
      return;
    }
    const opts = Object.assign({update: false}, options);
    delete this.editMode;
    this.inputField.classList.remove('in-edit');
    if (opts.update) {
      this.update(opts);
    }
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/functions.js":
/*!******************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/functions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "goToPrevOrNext": () => (/* binding */ goToPrevOrNext),
/* harmony export */   "switchView": () => (/* binding */ switchView),
/* harmony export */   "triggerDatepickerEvent": () => (/* binding */ triggerDatepickerEvent),
/* harmony export */   "unfocus": () => (/* binding */ unfocus)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");



function triggerDatepickerEvent(datepicker, type) {
  const detail = {
    date: datepicker.getDate(),
    viewDate: new Date(datepicker.picker.viewDate),
    viewId: datepicker.picker.currentView.id,
    datepicker,
  };
  datepicker.element.dispatchEvent(new CustomEvent(type, {detail}));
}

// direction: -1 (to previous), 1 (to next)
function goToPrevOrNext(datepicker, direction) {
  const {minDate, maxDate} = datepicker.config;
  const {currentView, viewDate} = datepicker.picker;
  let newViewDate;
  switch (currentView.id) {
    case 0:
      newViewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addMonths)(viewDate, direction);
      break;
    case 1:
      newViewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addYears)(viewDate, direction);
      break;
    default:
      newViewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addYears)(viewDate, direction * currentView.navStep);
  }
  newViewDate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.limitToRange)(newViewDate, minDate, maxDate);
  datepicker.picker.changeFocus(newViewDate).render();
}

function switchView(datepicker) {
  const viewId = datepicker.picker.currentView.id;
  if (viewId === datepicker.config.maxView) {
    return;
  }
  datepicker.picker.changeView(viewId + 1).render();
}

function unfocus(datepicker) {
  if (datepicker.config.updateOnBlur) {
    datepicker.update({revert: true});
  } else {
    datepicker.refresh('input');
  }
  datepicker.hide();
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/inputFieldListeners.js":
/*!****************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/inputFieldListeners.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onClickInput": () => (/* binding */ onClickInput),
/* harmony export */   "onFocus": () => (/* binding */ onFocus),
/* harmony export */   "onKeydown": () => (/* binding */ onKeydown),
/* harmony export */   "onMousedown": () => (/* binding */ onMousedown),
/* harmony export */   "onPaste": () => (/* binding */ onPaste)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");





// Find the closest date that doesn't meet the condition for unavailable date
// Returns undefined if no available date is found
// addFn: function to calculate the next date
//   - args: time value, amount
// increase: amount to pass to addFn
// testFn: function to test the unavailablity of the date
//   - args: time value; retun: true if unavailable
function findNextAvailableOne(date, addFn, increase, testFn, min, max) {
  if (!(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInRange)(date, min, max)) {
    return;
  }
  if (testFn(date)) {
    const newDate = addFn(date, increase);
    return findNextAvailableOne(newDate, addFn, increase, testFn, min, max);
  }
  return date;
}

// direction: -1 (left/up), 1 (right/down)
// vertical: true for up/down, false for left/right
function moveByArrowKey(datepicker, ev, direction, vertical) {
  const picker = datepicker.picker;
  const currentView = picker.currentView;
  const step = currentView.step || 1;
  let viewDate = picker.viewDate;
  let addFn;
  let testFn;
  switch (currentView.id) {
    case 0:
      if (vertical) {
        viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addDays)(viewDate, direction * 7);
      } else if (ev.ctrlKey || ev.metaKey) {
        viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addYears)(viewDate, direction);
      } else {
        viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addDays)(viewDate, direction);
      }
      addFn = _lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addDays;
      testFn = (date) => currentView.disabled.includes(date);
      break;
    case 1:
      viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addMonths)(viewDate, vertical ? direction * 4 : direction);
      addFn = _lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addMonths;
      testFn = (date) => {
        const dt = new Date(date);
        const {year, disabled} = currentView;
        return dt.getFullYear() === year && disabled.includes(dt.getMonth());
      };
      break;
    default:
      viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addYears)(viewDate, direction * (vertical ? 4 : 1) * step);
      addFn = _lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addYears;
      testFn = date => currentView.disabled.includes((0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.startOfYearPeriod)(date, step));
  }
  viewDate = findNextAvailableOne(
    viewDate,
    addFn,
    direction < 0 ? -step : step,
    testFn,
    currentView.minDate,
    currentView.maxDate
  );
  if (viewDate !== undefined) {
    picker.changeFocus(viewDate).render();
  }
}

function onKeydown(datepicker, ev) {
  const key = ev.key;
  if (key === 'Tab') {
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.unfocus)(datepicker);
    return;
  }

  const picker = datepicker.picker;
  const {id, isMinView} = picker.currentView;
  if (!picker.active) {
    if (key === 'ArrowDown') {
      picker.show();
    } else {
      if (key === 'Enter') {
        datepicker.update();
      } else if (key === 'Escape') {
        picker.show();
      }
      return;
    }
  } else if (datepicker.editMode) {
    if (key === 'Enter') {
      datepicker.exitEditMode({update: true, autohide: datepicker.config.autohide});
    } else if (key === 'Escape') {
      picker.hide();
    }
    return;
  } else {
    if (key === 'ArrowLeft') {
      if (ev.ctrlKey || ev.metaKey) {
        (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.goToPrevOrNext)(datepicker, -1);
      } else if (ev.shiftKey) {
        datepicker.enterEditMode();
        return;
      } else {
        moveByArrowKey(datepicker, ev, -1, false);
      }
    } else if (key === 'ArrowRight') {
      if (ev.ctrlKey || ev.metaKey) {
        (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.goToPrevOrNext)(datepicker, 1);
      } else if (ev.shiftKey) {
        datepicker.enterEditMode();
        return;
      } else {
        moveByArrowKey(datepicker, ev, 1, false);
      }
    } else if (key === 'ArrowUp') {
      if (ev.ctrlKey || ev.metaKey) {
        (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.switchView)(datepicker);
      } else if (ev.shiftKey) {
        datepicker.enterEditMode();
        return;
      } else {
        moveByArrowKey(datepicker, ev, -1, true);
      }
    } else if (key === 'ArrowDown') {
      if (ev.shiftKey && !ev.ctrlKey && !ev.metaKey) {
        datepicker.enterEditMode();
        return;
      }
      moveByArrowKey(datepicker, ev, 1, true);
    } else if (key === 'Enter') {
      if (isMinView) {
        datepicker.setDate(picker.viewDate);
        return;
      }
      picker.changeView(id - 1).render();
    } else {
      if (key === 'Escape') {
        picker.hide();
      } else if (
        key === 'Backspace'
        || key === 'Delete'
        || (key.length === 1 && !ev.ctrlKey && !ev.metaKey)
      ) {
        datepicker.enterEditMode();
      }
      return;
    }
  }
  ev.preventDefault();
}

function onFocus(datepicker) {
  if (datepicker.config.showOnFocus && !datepicker._showing) {
    datepicker.show();
  }
}

// for the prevention for entering edit mode while getting focus on click
function onMousedown(datepicker, ev) {
  const el = ev.target;
  if (datepicker.picker.active || datepicker.config.showOnClick) {
    el._active = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_1__.isActiveElement)(el);
    el._clicking = setTimeout(() => {
      delete el._active;
      delete el._clicking;
    }, 2000);
  }
}

function onClickInput(datepicker, ev) {
  const el = ev.target;
  if (!el._clicking) {
    return;
  }
  clearTimeout(el._clicking);
  delete el._clicking;

  if (el._active) {
    datepicker.enterEditMode();
  }
  delete el._active;

  if (datepicker.config.showOnClick) {
    datepicker.show();
  }
}

function onPaste(datepicker, ev) {
  if (ev.clipboardData.types.includes('text/plain')) {
    datepicker.enterEditMode();
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/otherListeners.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/otherListeners.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onClickOutside": () => (/* binding */ onClickOutside)
/* harmony export */ });
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");




// for the `document` to delegate the events from outside the picker/input field
function onClickOutside(datepicker, ev) {
  const {element, picker} = datepicker;
  // check both picker's and input's activeness to make updateOnBlur work in
  // the cases where...
  // - picker is hidden by ESC key press → input stays focused
  // - input is unfocused by closing mobile keyboard → piker is kept shown
  if (!picker.active && !(0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_0__.isActiveElement)(element)) {
    return;
  }
  const pickerElem = picker.element;
  if ((0,_lib_event_js__WEBPACK_IMPORTED_MODULE_1__.findElementInEventPath)(ev, el => el === element || el === pickerElem)) {
    return;
  }
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.unfocus)(datepicker);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/pickerListeners.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/pickerListeners.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onClickClearBtn": () => (/* binding */ onClickClearBtn),
/* harmony export */   "onClickNextBtn": () => (/* binding */ onClickNextBtn),
/* harmony export */   "onClickPrevBtn": () => (/* binding */ onClickPrevBtn),
/* harmony export */   "onClickTodayBtn": () => (/* binding */ onClickTodayBtn),
/* harmony export */   "onClickView": () => (/* binding */ onClickView),
/* harmony export */   "onClickViewSwitch": () => (/* binding */ onClickViewSwitch),
/* harmony export */   "onMousedownPicker": () => (/* binding */ onMousedownPicker)
/* harmony export */ });
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");




function goToSelectedMonthOrYear(datepicker, selection) {
  const picker = datepicker.picker;
  const viewDate = new Date(picker.viewDate);
  const viewId = picker.currentView.id;
  const newDate = viewId === 1
    ? (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_0__.addMonths)(viewDate, selection - viewDate.getMonth())
    : (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_0__.addYears)(viewDate, selection - viewDate.getFullYear());

  picker.changeFocus(newDate).changeView(viewId - 1).render();
}

function onClickTodayBtn(datepicker) {
  const picker = datepicker.picker;
  const currentDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_0__.today)();
  if (datepicker.config.todayBtnMode === 1) {
    if (datepicker.config.autohide) {
      datepicker.setDate(currentDate);
      return;
    }
    datepicker.setDate(currentDate, {render: false});
    picker.update();
  }
  if (picker.viewDate !== currentDate) {
    picker.changeFocus(currentDate);
  }
  picker.changeView(0).render();
}

function onClickClearBtn(datepicker) {
  datepicker.setDate({clear: true});
}

function onClickViewSwitch(datepicker) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.switchView)(datepicker);
}

function onClickPrevBtn(datepicker) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.goToPrevOrNext)(datepicker, -1);
}

function onClickNextBtn(datepicker) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.goToPrevOrNext)(datepicker, 1);
}

// For the picker's main block to delegete the events from `datepicker-cell`s
function onClickView(datepicker, ev) {
  const target = (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_1__.findElementInEventPath)(ev, '.datepicker-cell');
  if (!target || target.classList.contains('disabled')) {
    return;
  }

  const {id, isMinView} = datepicker.picker.currentView;
  if (isMinView) {
    datepicker.setDate(Number(target.dataset.date));
  } else if (id === 1) {
    goToSelectedMonthOrYear(datepicker, Number(target.dataset.month));
  } else {
    goToSelectedMonthOrYear(datepicker, Number(target.dataset.year));
  }
}

function onMousedownPicker(ev) {
  ev.preventDefault();
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/i18n/base-locales.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/i18n/base-locales.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locales": () => (/* binding */ locales)
/* harmony export */ });
// default locales
const locales = {
  en: {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    clear: "Clear",
    titleFormat: "MM y"
  }
};


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/date-format.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/date-format.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "parseDate": () => (/* binding */ parseDate),
/* harmony export */   "reFormatTokens": () => (/* binding */ reFormatTokens),
/* harmony export */   "reNonDateParts": () => (/* binding */ reNonDateParts)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");



// pattern for format parts
const reFormatTokens = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;
// pattern for non date parts
const reNonDateParts = /[\s!-/:-@[-`{-~年月日]+/;
// cache for persed formats
let knownFormats = {};
// parse funtions for date parts
const parseFns = {
  y(date, year) {
    return new Date(date).setFullYear(parseInt(year, 10));
  },
  m(date, month, locale) {
    const newDate = new Date(date);
    let monthIndex = parseInt(month, 10) - 1;

    if (isNaN(monthIndex)) {
      if (!month) {
        return NaN;
      }

      const monthName = month.toLowerCase();
      const compareNames = name => name.toLowerCase().startsWith(monthName);
      // compare with both short and full names because some locales have periods
      // in the short names (not equal to the first X letters of the full names)
      monthIndex = locale.monthsShort.findIndex(compareNames);
      if (monthIndex < 0) {
        monthIndex = locale.months.findIndex(compareNames);
      }
      if (monthIndex < 0) {
        return NaN;
      }
    }

    newDate.setMonth(monthIndex);
    return newDate.getMonth() !== normalizeMonth(monthIndex)
      ? newDate.setDate(0)
      : newDate.getTime();
  },
  d(date, day) {
    return new Date(date).setDate(parseInt(day, 10));
  },
};
// format functions for date parts
const formatFns = {
  d(date) {
    return date.getDate();
  },
  dd(date) {
    return padZero(date.getDate(), 2);
  },
  D(date, locale) {
    return locale.daysShort[date.getDay()];
  },
  DD(date, locale) {
    return locale.days[date.getDay()];
  },
  m(date) {
    return date.getMonth() + 1;
  },
  mm(date) {
    return padZero(date.getMonth() + 1, 2);
  },
  M(date, locale) {
    return locale.monthsShort[date.getMonth()];
  },
  MM(date, locale) {
    return locale.months[date.getMonth()];
  },
  y(date) {
    return date.getFullYear();
  },
  yy(date) {
    return padZero(date.getFullYear(), 2).slice(-2);
  },
  yyyy(date) {
    return padZero(date.getFullYear(), 4);
  },
};

// get month index in normal range (0 - 11) from any number
function normalizeMonth(monthIndex) {
  return monthIndex > -1 ? monthIndex % 12 : normalizeMonth(monthIndex + 12);
}

function padZero(num, length) {
  return num.toString().padStart(length, '0');
}

function parseFormatString(format) {
  if (typeof format !== 'string') {
    throw new Error("Invalid date format.");
  }
  if (format in knownFormats) {
    return knownFormats[format];
  }

  // sprit the format string into parts and seprators
  const separators = format.split(reFormatTokens);
  const parts = format.match(new RegExp(reFormatTokens, 'g'));
  if (separators.length === 0 || !parts) {
    throw new Error("Invalid date format.");
  }

  // collect format functions used in the format
  const partFormatters = parts.map(token => formatFns[token]);

  // collect parse function keys used in the format
  // iterate over parseFns' keys in order to keep the order of the keys.
  const partParserKeys = Object.keys(parseFns).reduce((keys, key) => {
    const token = parts.find(part => part[0] !== 'D' && part[0].toLowerCase() === key);
    if (token) {
      keys.push(key);
    }
    return keys;
  }, []);

  return knownFormats[format] = {
    parser(dateStr, locale) {
      const dateParts = dateStr.split(reNonDateParts).reduce((dtParts, part, index) => {
        if (part.length > 0 && parts[index]) {
          const token = parts[index][0];
          if (token === 'M') {
            dtParts.m = part;
          } else if (token !== 'D') {
            dtParts[token] = part;
          }
        }
        return dtParts;
      }, {});

      // iterate over partParserkeys so that the parsing is made in the oder
      // of year, month and day to prevent the day parser from correcting last
      // day of month wrongly
      return partParserKeys.reduce((origDate, key) => {
        const newDate = parseFns[key](origDate, dateParts[key], locale);
        // ingnore the part failed to parse
        return isNaN(newDate) ? origDate : newDate;
      }, (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.today)());
    },
    formatter(date, locale) {
      let dateStr = partFormatters.reduce((str, fn, index) => {
        return str += `${separators[index]}${fn(date, locale)}`;
      }, '');
      // separators' length is always parts' length + 1,
      return dateStr += (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.lastItemOf)(separators);
    },
  };
}

function parseDate(dateStr, format, locale) {
  if (dateStr instanceof Date || typeof dateStr === 'number') {
    const date = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.stripTime)(dateStr);
    return isNaN(date) ? undefined : date;
  }
  if (!dateStr) {
    return undefined;
  }
  if (dateStr === 'today') {
    return (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.today)();
  }

  if (format && format.toValue) {
    const date = format.toValue(dateStr, format, locale);
    return isNaN(date) ? undefined : (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.stripTime)(date);
  }

  return parseFormatString(format).parser(dateStr, locale);
}

function formatDate(date, format, locale) {
  if (isNaN(date) || (!date && date !== 0)) {
    return '';
  }

  const dateObj = typeof date === 'number' ? new Date(date) : date;

  if (format.toDisplay) {
    return format.toDisplay(dateObj, format, locale);
  }

  return parseFormatString(format).formatter(dateObj, locale);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/date.js":
/*!**********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/date.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDays": () => (/* binding */ addDays),
/* harmony export */   "addMonths": () => (/* binding */ addMonths),
/* harmony export */   "addWeeks": () => (/* binding */ addWeeks),
/* harmony export */   "addYears": () => (/* binding */ addYears),
/* harmony export */   "dateValue": () => (/* binding */ dateValue),
/* harmony export */   "dayOfTheWeekOf": () => (/* binding */ dayOfTheWeekOf),
/* harmony export */   "getWeek": () => (/* binding */ getWeek),
/* harmony export */   "regularizeDate": () => (/* binding */ regularizeDate),
/* harmony export */   "startOfYearPeriod": () => (/* binding */ startOfYearPeriod),
/* harmony export */   "stripTime": () => (/* binding */ stripTime),
/* harmony export */   "today": () => (/* binding */ today)
/* harmony export */ });
function stripTime(timeValue) {
  return new Date(timeValue).setHours(0, 0, 0, 0);
}

function today() {
  return new Date().setHours(0, 0, 0, 0);
}

// Get the time value of the start of given date or year, month and day
function dateValue(...args) {
  switch (args.length) {
    case 0:
      return today();
    case 1:
      return stripTime(args[0]);
  }

  // use setFullYear() to keep 2-digit year from being mapped to 1900-1999
  const newDate = new Date(0);
  newDate.setFullYear(...args);
  return newDate.setHours(0, 0, 0, 0);
}

function addDays(date, amount) {
  const newDate = new Date(date);
  return newDate.setDate(newDate.getDate() + amount);
}

function addWeeks(date, amount) {
  return addDays(date, amount * 7);
}

function addMonths(date, amount) {
  // If the day of the date is not in the new month, the last day of the new
  // month will be returned. e.g. Jan 31 + 1 month → Feb 28 (not Mar 03)
  const newDate = new Date(date);
  const monthsToSet = newDate.getMonth() + amount;
  let expectedMonth = monthsToSet % 12;
  if (expectedMonth < 0) {
    expectedMonth += 12;
  }

  const time = newDate.setMonth(monthsToSet);
  return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
}

function addYears(date, amount) {
  // If the date is Feb 29 and the new year is not a leap year, Feb 28 of the
  // new year will be returned.
  const newDate = new Date(date);
  const expectedMonth = newDate.getMonth();
  const time = newDate.setFullYear(newDate.getFullYear() + amount);
  return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
}

// Calculate the distance bettwen 2 days of the week
function dayDiff(day, from) {
  return (day - from + 7) % 7;
}

// Get the date of the specified day of the week of given base date
function dayOfTheWeekOf(baseDate, dayOfWeek, weekStart = 0) {
  const baseDay = new Date(baseDate).getDay();
  return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
}

// Get the ISO week of a date
function getWeek(date) {
  // start of ISO week is Monday
  const thuOfTheWeek = dayOfTheWeekOf(date, 4, 1);
  // 1st week == the week where the 4th of January is in
  const firstThu = dayOfTheWeekOf(new Date(thuOfTheWeek).setMonth(0, 4), 4, 1);
  return Math.round((thuOfTheWeek - firstThu) / 604800000) + 1;
}

// Get the start year of the period of years that includes given date
// years: length of the year period
function startOfYearPeriod(date, years) {
  /* @see https://en.wikipedia.org/wiki/Year_zero#ISO_8601 */
  const year = new Date(date).getFullYear();
  return Math.floor(year / years) * years;
}

// Convert date to the first/last date of the month/year of the date
function regularizeDate(date, timeSpan, useLastDate) {
  if (timeSpan !== 1 && timeSpan !== 2) {
    return date;
  }
  const newDate = new Date(date);
  if (timeSpan === 1) {
    useLastDate
      ? newDate.setMonth(newDate.getMonth() + 1, 0)
      : newDate.setDate(1);
  } else {
    useLastDate
      ? newDate.setFullYear(newDate.getFullYear() + 1, 0, 0)
      : newDate.setMonth(0, 1);
  }
  return newDate.setHours(0, 0, 0, 0);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/dom.js":
/*!*********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/dom.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyChildNodes": () => (/* binding */ emptyChildNodes),
/* harmony export */   "getParent": () => (/* binding */ getParent),
/* harmony export */   "hideElement": () => (/* binding */ hideElement),
/* harmony export */   "isActiveElement": () => (/* binding */ isActiveElement),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "parseHTML": () => (/* binding */ parseHTML),
/* harmony export */   "replaceChildNodes": () => (/* binding */ replaceChildNodes),
/* harmony export */   "showElement": () => (/* binding */ showElement)
/* harmony export */ });
const range = document.createRange();

function parseHTML(html) {
  return range.createContextualFragment(html);
}

function getParent(el) {
  return el.parentElement
    || (el.parentNode instanceof ShadowRoot ? el.parentNode.host : undefined);
}

function isActiveElement(el) {
  return el.getRootNode().activeElement === el;
}

// equivalent to jQuery's :visble
function isVisible(el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

function hideElement(el) {
  if (el.style.display === 'none') {
    return;
  }
  // back up the existing display setting in data-style-display
  if (el.style.display) {
    el.dataset.styleDisplay = el.style.display;
  }
  el.style.display = 'none';
}

function showElement(el) {
  if (el.style.display !== 'none') {
    return;
  }
  if (el.dataset.styleDisplay) {
    // restore backed-up dispay property
    el.style.display = el.dataset.styleDisplay;
    delete el.dataset.styleDisplay;
  } else {
    el.style.display = '';
  }
}

function emptyChildNodes(el) {
  if (el.firstChild) {
    el.removeChild(el.firstChild);
    emptyChildNodes(el);
  }
}

function replaceChildNodes(el, newChildNodes) {
  emptyChildNodes(el);
  if (newChildNodes instanceof DocumentFragment) {
    el.appendChild(newChildNodes);
  } else if (typeof newChildNodes === 'string') {
    el.appendChild(parseHTML(newChildNodes));
  } else if (typeof newChildNodes.forEach === 'function') {
    newChildNodes.forEach((node) => {
      el.appendChild(node);
    });
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/event.js":
/*!***********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/event.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findElementInEventPath": () => (/* binding */ findElementInEventPath),
/* harmony export */   "registerListeners": () => (/* binding */ registerListeners),
/* harmony export */   "unregisterListeners": () => (/* binding */ unregisterListeners)
/* harmony export */ });
const listenerRegistry = new WeakMap();
const {addEventListener, removeEventListener} = EventTarget.prototype;

// Register event listeners to a key object
// listeners: array of listener definitions;
//   - each definition must be a flat array of event target and the arguments
//     used to call addEventListener() on the target
function registerListeners(keyObj, listeners) {
  let registered = listenerRegistry.get(keyObj);
  if (!registered) {
    registered = [];
    listenerRegistry.set(keyObj, registered);
  }
  listeners.forEach((listener) => {
    addEventListener.call(...listener);
    registered.push(listener);
  });
}

function unregisterListeners(keyObj) {
  let listeners = listenerRegistry.get(keyObj);
  if (!listeners) {
    return;
  }
  listeners.forEach((listener) => {
    removeEventListener.call(...listener);
  });
  listenerRegistry.delete(keyObj);
}

// Event.composedPath() polyfill for Edge
// based on https://gist.github.com/kleinfreund/e9787d73776c0e3750dcfcdc89f100ec
if (!Event.prototype.composedPath) {
  const getComposedPath = (node, path = []) => {
    path.push(node);

    let parent;
    if (node.parentNode) {
      parent = node.parentNode;
    } else if (node.host) { // ShadowRoot
      parent = node.host;
    } else if (node.defaultView) {  // Document
      parent = node.defaultView;
    }
    return parent ? getComposedPath(parent, path) : path;
  };

  Event.prototype.composedPath = function () {
    return getComposedPath(this.target);
  };
}

function findFromPath(path, criteria, currentTarget) {
  const [node, ...rest] = path;
  if (criteria(node)) {
    return node;
  }
  if (node === currentTarget || node.tagName === 'HTML' || rest.length === 0) {
    // stop when reaching currentTarget or <html>
    return;
  }
  return findFromPath(rest, criteria, currentTarget);
}

// Search for the actual target of a delegated event
function findElementInEventPath(ev, selector) {
  const criteria = typeof selector === 'function'
    ? selector
    : el => el instanceof Element && el.matches(selector);
  return findFromPath(ev.composedPath(), criteria, ev.currentTarget);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/utils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTagRepeat": () => (/* binding */ createTagRepeat),
/* harmony export */   "hasProperty": () => (/* binding */ hasProperty),
/* harmony export */   "isInRange": () => (/* binding */ isInRange),
/* harmony export */   "lastItemOf": () => (/* binding */ lastItemOf),
/* harmony export */   "limitToRange": () => (/* binding */ limitToRange),
/* harmony export */   "optimizeTemplateHTML": () => (/* binding */ optimizeTemplateHTML),
/* harmony export */   "pushUnique": () => (/* binding */ pushUnique),
/* harmony export */   "stringToArray": () => (/* binding */ stringToArray)
/* harmony export */ });
function hasProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

function lastItemOf(arr) {
  return arr[arr.length - 1];
}

// push only the items not included in the array
function pushUnique(arr, ...items) {
  items.forEach((item) => {
    if (arr.includes(item)) {
      return;
    }
    arr.push(item);
  });
  return arr;
}

function stringToArray(str, separator) {
  // convert empty string to an empty array
  return str ? str.split(separator) : [];
}

function isInRange(testVal, min, max) {
  const minOK = min === undefined || testVal >= min;
  const maxOK = max === undefined || testVal <= max;
  return minOK && maxOK;
}

function limitToRange(val, min, max) {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
}

function createTagRepeat(tagName, repeat, attributes = {}, index = 0, html = '') {
  const openTagSrc = Object.keys(attributes).reduce((src, attr) => {
    let val = attributes[attr];
    if (typeof val === 'function') {
      val = val(index);
    }
    return `${src} ${attr}="${val}"`;
  }, tagName);
  html += `<${openTagSrc}></${tagName}>`;

  const next = index + 1;
  return next < repeat
    ? createTagRepeat(tagName, repeat, attributes, next, html)
    : html;
}

// Remove the spacing surrounding tags for HTML parser not to create text nodes
// before/after elements
function optimizeTemplateHTML(html) {
  return html.replace(/>\s+/g, '>').replace(/\s+</, '<');
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/options/defaultOptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/options/defaultOptions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// config options updatable by setOptions() and their default values
const defaultOptions = {
  autohide: false,
  beforeShowDay: null,
  beforeShowDecade: null,
  beforeShowMonth: null,
  beforeShowYear: null,
  calendarWeeks: false,
  clearBtn: false,
  dateDelimiter: ',',
  datesDisabled: [],
  daysOfWeekDisabled: [],
  daysOfWeekHighlighted: [],
  defaultViewDate: undefined, // placeholder, defaults to today() by the program
  disableTouchKeyboard: false,
  format: 'mm/dd/yyyy',
  language: 'en',
  maxDate: null,
  maxNumberOfDates: 1,
  maxView: 3,
  minDate: null,
  nextArrow: '»',
  orientation: 'auto',
  pickLevel: 0,
  prevArrow: '«',
  showDaysOfWeek: true,
  showOnClick: true,
  showOnFocus: true,
  startView: 0,
  title: '',
  todayBtn: false,
  todayBtnMode: 0,
  todayHighlight: false,
  updateOnBlur: true,
  weekStart: 0,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultOptions);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/options/processOptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/options/processOptions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ processOptions)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/date-format.js */ "./node_modules/vanillajs-datepicker/js/lib/date-format.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultOptions.js */ "./node_modules/vanillajs-datepicker/js/options/defaultOptions.js");






const {
  language: defaultLang,
  format: defaultFormat,
  weekStart: defaultWeekStart,
} = _defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__["default"];

// Reducer function to filter out invalid day-of-week from the input
function sanitizeDOW(dow, day) {
  return dow.length < 6 && day >= 0 && day < 7
    ? (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(dow, day)
    : dow;
}

function calcEndOfWeek(startOfWeek) {
  return (startOfWeek + 6) % 7;
}

// validate input date. if invalid, fallback to the original value
function validateDate(value, format, locale, origValue) {
  const date = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(value, format, locale);
  return date !== undefined ? date : origValue;
}

// Validate viewId. if invalid, fallback to the original value
function validateViewId(value, origValue, max = 3) {
  const viewId = parseInt(value, 10);
  return viewId >= 0 && viewId <= max ? viewId : origValue;
}

// Create Datepicker configuration to set
function processOptions(options, datepicker) {
  const inOpts = Object.assign({}, options);
  const config = {};
  const locales = datepicker.constructor.locales;
  const rangeSideIndex = datepicker.rangeSideIndex;
  let {
    format,
    language,
    locale,
    maxDate,
    maxView,
    minDate,
    pickLevel,
    startView,
    weekStart,
  } = datepicker.config || {};

  if (inOpts.language) {
    let lang;
    if (inOpts.language !== language) {
      if (locales[inOpts.language]) {
        lang = inOpts.language;
      } else {
        // Check if langauge + region tag can fallback to the one without
        // region (e.g. fr-CA → fr)
        lang = inOpts.language.split('-')[0];
        if (locales[lang] === undefined) {
          lang = false;
        }
      }
    }
    delete inOpts.language;
    if (lang) {
      language = config.language = lang;

      // update locale as well when updating language
      const origLocale = locale || locales[defaultLang];
      // use default language's properties for the fallback
      locale = Object.assign({
        format: defaultFormat,
        weekStart: defaultWeekStart
      }, locales[defaultLang]);
      if (language !== defaultLang) {
        Object.assign(locale, locales[language]);
      }
      config.locale = locale;
      // if format and/or weekStart are the same as old locale's defaults,
      // update them to new locale's defaults
      if (format === origLocale.format) {
        format = config.format = locale.format;
      }
      if (weekStart === origLocale.weekStart) {
        weekStart = config.weekStart = locale.weekStart;
        config.weekEnd = calcEndOfWeek(locale.weekStart);
      }
    }
  }

  if (inOpts.format) {
    const hasToDisplay = typeof inOpts.format.toDisplay === 'function';
    const hasToValue = typeof inOpts.format.toValue === 'function';
    const validFormatString = _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.reFormatTokens.test(inOpts.format);
    if ((hasToDisplay && hasToValue) || validFormatString) {
      format = config.format = inOpts.format;
    }
    delete inOpts.format;
  }

  //*** pick level ***//
  let newPickLevel = pickLevel;
  if (inOpts.pickLevel !== undefined) {
    newPickLevel = validateViewId(inOpts.pickLevel, 2);
    delete inOpts.pickLevel;
  }
  if (newPickLevel !== pickLevel) {
    if (newPickLevel > pickLevel) {
      // complement current minDate/madDate so that the existing range will be
      // expanded to fit the new level later
      if (inOpts.minDate === undefined) {
        inOpts.minDate = minDate;
      }
      if (inOpts.maxDate === undefined) {
        inOpts.maxDate = maxDate;
      }
    }
    // complement datesDisabled so that it will be reset later
    if (!inOpts.datesDisabled) {
      inOpts.datesDisabled = [];
    }
    pickLevel = config.pickLevel = newPickLevel;
  }

  //*** dates ***//
  // while min and maxDate for "no limit" in the options are better to be null
  // (especially when updating), the ones in the config have to be undefined
  // because null is treated as 0 (= unix epoch) when comparing with time value
  let minDt = minDate;
  let maxDt = maxDate;
  if (inOpts.minDate !== undefined) {
    const defaultMinDt = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(0, 0, 1);
    minDt = inOpts.minDate === null
      ? defaultMinDt  // set 0000-01-01 to prevent negative values for year
      : validateDate(inOpts.minDate, format, locale, minDt);
    if (minDt !== defaultMinDt) {
      minDt = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(minDt, pickLevel, false);
    }
    delete inOpts.minDate;
  }
  if (inOpts.maxDate !== undefined) {
    maxDt = inOpts.maxDate === null
      ? undefined
      : validateDate(inOpts.maxDate, format, locale, maxDt);
    if (maxDt !== undefined) {
      maxDt = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(maxDt, pickLevel, true);
    }
    delete inOpts.maxDate;
  }
  if (maxDt < minDt) {
    minDate = config.minDate = maxDt;
    maxDate = config.maxDate = minDt;
  } else {
    if (minDate !== minDt) {
      minDate = config.minDate = minDt;
    }
    if (maxDate !== maxDt) {
      maxDate = config.maxDate = maxDt;
    }
  }

  if (inOpts.datesDisabled) {
    config.datesDisabled = inOpts.datesDisabled.reduce((dates, dt) => {
      const date = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(dt, format, locale);
      return date !== undefined
        ? (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(dates, (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(date, pickLevel, rangeSideIndex))
        : dates;
    }, []);
    delete inOpts.datesDisabled;
  }
  if (inOpts.defaultViewDate !== undefined) {
    const viewDate = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(inOpts.defaultViewDate, format, locale);
    if (viewDate !== undefined) {
      config.defaultViewDate = viewDate;
    }
    delete inOpts.defaultViewDate;
  }

  //*** days of week ***//
  if (inOpts.weekStart !== undefined) {
    const wkStart = Number(inOpts.weekStart) % 7;
    if (!isNaN(wkStart)) {
      weekStart = config.weekStart = wkStart;
      config.weekEnd = calcEndOfWeek(wkStart);
    }
    delete inOpts.weekStart;
  }
  if (inOpts.daysOfWeekDisabled) {
    config.daysOfWeekDisabled = inOpts.daysOfWeekDisabled.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekDisabled;
  }
  if (inOpts.daysOfWeekHighlighted) {
    config.daysOfWeekHighlighted = inOpts.daysOfWeekHighlighted.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekHighlighted;
  }

  //*** multi date ***//
  if (inOpts.maxNumberOfDates !== undefined) {
    const maxNumberOfDates = parseInt(inOpts.maxNumberOfDates, 10);
    if (maxNumberOfDates >= 0) {
      config.maxNumberOfDates = maxNumberOfDates;
      config.multidate = maxNumberOfDates !== 1;
    }
    delete inOpts.maxNumberOfDates;
  }
  if (inOpts.dateDelimiter) {
    config.dateDelimiter = String(inOpts.dateDelimiter);
    delete inOpts.dateDelimiter;
  }

  //*** view ***//
  let newMaxView = maxView;
  if (inOpts.maxView !== undefined) {
    newMaxView = validateViewId(inOpts.maxView, maxView);
    delete inOpts.maxView;
  }
  // ensure max view >= pick level
  newMaxView = pickLevel > newMaxView ? pickLevel : newMaxView;
  if (newMaxView !== maxView) {
    maxView = config.maxView = newMaxView;
  }

  let newStartView = startView;
  if (inOpts.startView !== undefined) {
    newStartView = validateViewId(inOpts.startView, newStartView);
    delete inOpts.startView;
  }
  // ensure pick level <= start view <= max view
  if (newStartView < pickLevel) {
    newStartView = pickLevel;
  } else if (newStartView > maxView) {
    newStartView = maxView;
  }
  if (newStartView !== startView) {
    config.startView = newStartView;
  }

  //*** template ***//
  if (inOpts.prevArrow) {
    const prevArrow = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(inOpts.prevArrow);
    if (prevArrow.childNodes.length > 0) {
      config.prevArrow = prevArrow.childNodes;
    }
    delete inOpts.prevArrow;
  }
  if (inOpts.nextArrow) {
    const nextArrow = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(inOpts.nextArrow);
    if (nextArrow.childNodes.length > 0) {
      config.nextArrow = nextArrow.childNodes;
    }
    delete inOpts.nextArrow;
  }

  //*** misc ***//
  if (inOpts.disableTouchKeyboard !== undefined) {
    config.disableTouchKeyboard = 'ontouchstart' in document && !!inOpts.disableTouchKeyboard;
    delete inOpts.disableTouchKeyboard;
  }
  if (inOpts.orientation) {
    const orientation = inOpts.orientation.toLowerCase().split(/\s+/g);
    config.orientation = {
      x: orientation.find(x => (x === 'left' || x === 'right')) || 'auto',
      y: orientation.find(y => (y === 'top' || y === 'bottom')) || 'auto',
    };
    delete inOpts.orientation;
  }
  if (inOpts.todayBtnMode !== undefined) {
    switch(inOpts.todayBtnMode) {
      case 0:
      case 1:
        config.todayBtnMode = inOpts.todayBtnMode;
    }
    delete inOpts.todayBtnMode;
  }

  //*** copy the rest ***//
  Object.keys(inOpts).forEach((key) => {
    if (inOpts[key] !== undefined && (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(_defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__["default"], key)) {
      config[key] = inOpts[key];
    }
  });

  return config;
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/Picker.js":
/*!***************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/Picker.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Picker)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _templates_pickerTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/pickerTemplate.js */ "./node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js");
/* harmony import */ var _views_DaysView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/DaysView.js */ "./node_modules/vanillajs-datepicker/js/picker/views/DaysView.js");
/* harmony import */ var _views_MonthsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/MonthsView.js */ "./node_modules/vanillajs-datepicker/js/picker/views/MonthsView.js");
/* harmony import */ var _views_YearsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/YearsView.js */ "./node_modules/vanillajs-datepicker/js/picker/views/YearsView.js");
/* harmony import */ var _events_functions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../events/functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");
/* harmony import */ var _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../events/pickerListeners.js */ "./node_modules/vanillajs-datepicker/js/events/pickerListeners.js");











const orientClasses = ['left', 'top', 'right', 'bottom'].reduce((obj, key) => {
  obj[key] = `datepicker-orient-${key}`;
  return obj;
}, {});
const toPx = num => num ? `${num}px` : num;

function processPickerOptions(picker, options) {
  if (options.title !== undefined) {
    if (options.title) {
      picker.controls.title.textContent = options.title;
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.showElement)(picker.controls.title);
    } else {
      picker.controls.title.textContent = '';
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideElement)(picker.controls.title);
    }
  }
  if (options.prevArrow) {
    const prevBtn = picker.controls.prevBtn;
    (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.emptyChildNodes)(prevBtn);
    options.prevArrow.forEach((node) => {
      prevBtn.appendChild(node.cloneNode(true));
    });
  }
  if (options.nextArrow) {
    const nextBtn = picker.controls.nextBtn;
    (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.emptyChildNodes)(nextBtn);
    options.nextArrow.forEach((node) => {
      nextBtn.appendChild(node.cloneNode(true));
    });
  }
  if (options.locale) {
    picker.controls.todayBtn.textContent = options.locale.today;
    picker.controls.clearBtn.textContent = options.locale.clear;
  }
  if (options.todayBtn !== undefined) {
    if (options.todayBtn) {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.showElement)(picker.controls.todayBtn);
    } else {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideElement)(picker.controls.todayBtn);
    }
  }
  if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate') || (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
    const {minDate, maxDate} = picker.datepicker.config;
    picker.controls.todayBtn.disabled = !(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInRange)((0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.today)(), minDate, maxDate);
  }
  if (options.clearBtn !== undefined) {
    if (options.clearBtn) {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.showElement)(picker.controls.clearBtn);
    } else {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideElement)(picker.controls.clearBtn);
    }
  }
}

// Compute view date to reset, which will be...
// - the last item of the selected dates or defaultViewDate if no selection
// - limitted to minDate or maxDate if it exceeds the range
function computeResetViewDate(datepicker) {
  const {dates, config} = datepicker;
  const viewDate = dates.length > 0 ? (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.lastItemOf)(dates) : config.defaultViewDate;
  return (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.limitToRange)(viewDate, config.minDate, config.maxDate);
}

// Change current view's view date
function setViewDate(picker, newDate) {
  const oldViewDate = new Date(picker.viewDate);
  const newViewDate = new Date(newDate);
  const {id, year, first, last} = picker.currentView;
  const viewYear = newViewDate.getFullYear();

  picker.viewDate = newDate;
  if (viewYear !== oldViewDate.getFullYear()) {
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(picker.datepicker, 'changeYear');
  }
  if (newViewDate.getMonth() !== oldViewDate.getMonth()) {
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(picker.datepicker, 'changeMonth');
  }

  // return whether the new date is in different period on time from the one
  // displayed in the current view
  // when true, the view needs to be re-rendered on the next UI refresh.
  switch (id) {
    case 0:
      return newDate < first || newDate > last;
    case 1:
      return viewYear !== year;
    default:
      return viewYear < first || viewYear > last;
  }
}

function getTextDirection(el) {
  return window.getComputedStyle(el).direction;
}

// find the closet scrollable ancestor elemnt under the body
function findScrollParents(el) {
  const parent = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.getParent)(el);
  if (parent === document.body || !parent) {
    return;
  }

  // checking overflow only is enough because computed overflow cannot be
  // visible or a combination of visible and other when either axis is set
  // to other than visible.
  // (Setting one axis to other than 'visible' while the other is 'visible'
  // results in the other axis turning to 'auto')
  return window.getComputedStyle(parent).overflow !== 'visible'
    ? parent
    : findScrollParents(parent);
}

// Class representing the picker UI
class Picker {
  constructor(datepicker) {
    const {config} = this.datepicker = datepicker;

    const template = _templates_pickerTemplate_js__WEBPACK_IMPORTED_MODULE_4__["default"].replace(/%buttonClass%/g, config.buttonClass);
    const element = this.element = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.parseHTML)(template).firstChild;
    const [header, main, footer] = element.firstChild.children;
    const title = header.firstElementChild;
    const [prevBtn, viewSwitch, nextBtn] = header.lastElementChild.children;
    const [todayBtn, clearBtn] = footer.firstChild.children;
    const controls = {
      title,
      prevBtn,
      viewSwitch,
      nextBtn,
      todayBtn,
      clearBtn,
    };
    this.main = main;
    this.controls = controls;

    const elementClass = datepicker.inline ? 'inline' : 'dropdown';
    element.classList.add(`datepicker-${elementClass}`);

    processPickerOptions(this, config);
    this.viewDate = computeResetViewDate(datepicker);

    // set up event listeners
    (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_3__.registerListeners)(datepicker, [
      [element, 'mousedown', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onMousedownPicker],
      [main, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickView.bind(null, datepicker)],
      [controls.viewSwitch, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickViewSwitch.bind(null, datepicker)],
      [controls.prevBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickPrevBtn.bind(null, datepicker)],
      [controls.nextBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickNextBtn.bind(null, datepicker)],
      [controls.todayBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickTodayBtn.bind(null, datepicker)],
      [controls.clearBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickClearBtn.bind(null, datepicker)],
    ]);

    // set up views
    this.views = [
      new _views_DaysView_js__WEBPACK_IMPORTED_MODULE_5__["default"](this),
      new _views_MonthsView_js__WEBPACK_IMPORTED_MODULE_6__["default"](this),
      new _views_YearsView_js__WEBPACK_IMPORTED_MODULE_7__["default"](this, {id: 2, name: 'years', cellClass: 'year', step: 1}),
      new _views_YearsView_js__WEBPACK_IMPORTED_MODULE_7__["default"](this, {id: 3, name: 'decades', cellClass: 'decade', step: 10}),
    ];
    this.currentView = this.views[config.startView];

    this.currentView.render();
    this.main.appendChild(this.currentView.element);
    if (config.container) {
      config.container.appendChild(this.element);
    } else {
      datepicker.inputField.after(this.element);
    }
  }

  setOptions(options) {
    processPickerOptions(this, options);
    this.views.forEach((view) => {
      view.init(options, false);
    });
    this.currentView.render();
  }

  detach() {
    this.element.remove();
  }

  show() {
    if (this.active) {
      return;
    }

    const {datepicker, element} = this;
    if (datepicker.inline) {
      element.classList.add('active');
    } else {
      // ensure picker's direction matches input's
      const inputDirection = getTextDirection(datepicker.inputField);
      if (inputDirection !== getTextDirection((0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.getParent)(element))) {
        element.dir = inputDirection;
      } else if (element.dir) {
        element.removeAttribute('dir');
      }

      element.style.visiblity = 'hidden';
      element.classList.add('active');
      this.place();
      element.style.visiblity = '';

      if (datepicker.config.disableTouchKeyboard) {
        datepicker.inputField.blur();
      }
    }
    this.active = true;
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(datepicker, 'show');
  }

  hide() {
    if (!this.active) {
      return;
    }
    this.datepicker.exitEditMode();
    this.element.classList.remove('active');
    this.active = false;
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(this.datepicker, 'hide');
  }

  place() {
    const {classList, offsetParent, style} = this.element;
    const {config, inputField} = this.datepicker;
    const {
      width: calendarWidth,
      height: calendarHeight,
    } = this.element.getBoundingClientRect();
    const {
      left: inputLeft,
      top: inputTop,
      right: inputRight,
      bottom: inputBottom,
      width: inputWidth,
      height: inputHeight
    } = inputField.getBoundingClientRect();
    let {x: orientX, y: orientY} = config.orientation;
    let left = inputLeft;
    let top = inputTop;

    // caliculate offsetLeft/Top of inputField
    if (offsetParent === document.body || !offsetParent) {
      left += window.scrollX;
      top += window.scrollY;
    } else {
      const offsetParentRect = offsetParent.getBoundingClientRect();
      left -= offsetParentRect.left - offsetParent.scrollLeft;
      top -= offsetParentRect.top - offsetParent.scrollTop;
    }

    // caliculate the boundaries of the visible area that contains inputField
    const scrollParent = findScrollParents(inputField);
    let scrollAreaLeft = 0;
    let scrollAreaTop = 0;
    let {
      clientWidth: scrollAreaRight,
      clientHeight: scrollAreaBottom,
    } = document.documentElement;

    if (scrollParent) {
      const scrollParentRect = scrollParent.getBoundingClientRect();
      if (scrollParentRect.top > 0) {
        scrollAreaTop = scrollParentRect.top;
      }
      if (scrollParentRect.left > 0) {
        scrollAreaLeft = scrollParentRect.left;
      }
      if (scrollParentRect.right < scrollAreaRight) {
        scrollAreaRight = scrollParentRect.right;
      }
      if (scrollParentRect.bottom < scrollAreaBottom) {
        scrollAreaBottom = scrollParentRect.bottom;
      }
    }

    // determine the horizontal orientation and left position
    let adjustment = 0;
    if (orientX === 'auto') {
      if (inputLeft < scrollAreaLeft) {
        orientX = 'left';
        adjustment = scrollAreaLeft - inputLeft;
      } else if (inputLeft + calendarWidth > scrollAreaRight) {
        orientX = 'right';
        if (scrollAreaRight < inputRight) {
          adjustment = scrollAreaRight - inputRight;
        }
      } else if (getTextDirection(inputField) === 'rtl') {
        orientX = inputRight - calendarWidth < scrollAreaLeft ? 'left' : 'right';
      } else {
        orientX = 'left';
      }
    }
    if (orientX === 'right') {
      left += inputWidth - calendarWidth;
    }
    left += adjustment;

    // determine the vertical orientation and top position
    if (orientY === 'auto') {
      if (inputTop - calendarHeight > scrollAreaTop) {
        orientY = inputBottom + calendarHeight > scrollAreaBottom ? 'top' : 'bottom';
      } else {
        orientY = 'bottom';
      }
    }
    if (orientY === 'top') {
      top -= calendarHeight;
    } else {
      top += inputHeight;
    }

    classList.remove(...Object.values(orientClasses));
    classList.add(orientClasses[orientX], orientClasses[orientY]);

    style.left = toPx(left);
    style.top = toPx(top);
  }

  setViewSwitchLabel(labelText) {
    this.controls.viewSwitch.textContent = labelText;
  }

  setPrevBtnDisabled(disabled) {
    this.controls.prevBtn.disabled = disabled;
  }

  setNextBtnDisabled(disabled) {
    this.controls.nextBtn.disabled = disabled;
  }

  changeView(viewId) {
    const oldView = this.currentView;
    const newView =  this.views[viewId];
    if (newView.id !== oldView.id) {
      this.currentView = newView;
      this._renderMethod = 'render';
      (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(this.datepicker, 'changeView');
      this.main.replaceChild(newView.element, oldView.element);
    }
    return this;
  }

  // Change the focused date (view date)
  changeFocus(newViewDate) {
    this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refreshFocus';
    this.views.forEach((view) => {
      view.updateFocus();
    });
    return this;
  }

  // Apply the change of the selected dates
  update() {
    const newViewDate = computeResetViewDate(this.datepicker);
    this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refresh';
    this.views.forEach((view) => {
      view.updateFocus();
      view.updateSelection();
    });
    return this;
  }

  // Refresh the picker UI
  render(quickRender = true) {
    const renderMethod = (quickRender && this._renderMethod) || 'render';
    delete this._renderMethod;

    this.currentView[renderMethod]();
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/templates/calendarWeeksTemplate.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/templates/calendarWeeksTemplate.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");


const calendarWeeksTemplate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.optimizeTemplateHTML)(`<div class="calendar-weeks">
  <div class="days-of-week"><span class="dow"></span></div>
  <div class="weeks">${(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 6, {class: 'week'})}</div>
</div>`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendarWeeksTemplate);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/templates/daysTemplate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/templates/daysTemplate.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");


const daysTemplate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.optimizeTemplateHTML)(`<div class="days">
  <div class="days-of-week">${(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 7, {class: 'dow'})}</div>
  <div class="datepicker-grid">${(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 42)}</div>
</div>`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (daysTemplate);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");


const pickerTemplate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.optimizeTemplateHTML)(`<div class="datepicker">
  <div class="datepicker-picker">
    <div class="datepicker-header">
      <div class="datepicker-title"></div>
      <div class="datepicker-controls">
        <button type="button" class="%buttonClass% prev-btn"></button>
        <button type="button" class="%buttonClass% view-switch"></button>
        <button type="button" class="%buttonClass% next-btn"></button>
      </div>
    </div>
    <div class="datepicker-main"></div>
    <div class="datepicker-footer">
      <div class="datepicker-controls">
        <button type="button" class="%buttonClass% today-btn"></button>
        <button type="button" class="%buttonClass% clear-btn"></button>
      </div>
    </div>
  </div>
</div>`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pickerTemplate);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/DaysView.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/DaysView.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DaysView)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/date-format.js */ "./node_modules/vanillajs-datepicker/js/lib/date-format.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _templates_daysTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/daysTemplate.js */ "./node_modules/vanillajs-datepicker/js/picker/templates/daysTemplate.js");
/* harmony import */ var _templates_calendarWeeksTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/calendarWeeksTemplate.js */ "./node_modules/vanillajs-datepicker/js/picker/templates/calendarWeeksTemplate.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View.js */ "./node_modules/vanillajs-datepicker/js/picker/views/View.js");








class DaysView extends _View_js__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(picker) {
    super(picker, {
      id: 0,
      name: 'days',
      cellClass: 'day',
    });
  }

  init(options, onConstruction = true) {
    if (onConstruction) {
      const inner = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(_templates_daysTemplate_js__WEBPACK_IMPORTED_MODULE_4__["default"]).firstChild;
      this.dow = inner.firstChild;
      this.grid = inner.lastChild;
      this.element.appendChild(inner);
    }
    super.init(options);
  }

  setOptions(options) {
    let updateDOW;

    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate')) {
      this.minDate = options.minDate;
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
      this.maxDate = options.maxDate;
    }
    if (options.datesDisabled) {
      this.datesDisabled = options.datesDisabled;
    }
    if (options.daysOfWeekDisabled) {
      this.daysOfWeekDisabled = options.daysOfWeekDisabled;
      updateDOW = true;
    }
    if (options.daysOfWeekHighlighted) {
      this.daysOfWeekHighlighted = options.daysOfWeekHighlighted;
    }
    if (options.todayHighlight !== undefined) {
      this.todayHighlight = options.todayHighlight;
    }
    if (options.weekStart !== undefined) {
      this.weekStart = options.weekStart;
      this.weekEnd = options.weekEnd;
      updateDOW = true;
    }
    if (options.locale) {
      const locale = this.locale = options.locale;
      this.dayNames = locale.daysMin;
      this.switchLabelFormat = locale.titleFormat;
      updateDOW = true;
    }
    if (options.beforeShowDay !== undefined) {
      this.beforeShow = typeof options.beforeShowDay === 'function'
        ? options.beforeShowDay
        : undefined;
    }

    if (options.calendarWeeks !== undefined) {
      if (options.calendarWeeks && !this.calendarWeeks) {
        const weeksElem = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(_templates_calendarWeeksTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"]).firstChild;
        this.calendarWeeks = {
          element: weeksElem,
          dow: weeksElem.firstChild,
          weeks: weeksElem.lastChild,
        };
        this.element.insertBefore(weeksElem, this.element.firstChild);
      } else if (this.calendarWeeks && !options.calendarWeeks) {
        this.element.removeChild(this.calendarWeeks.element);
        this.calendarWeeks = null;
      }
    }
    if (options.showDaysOfWeek !== undefined) {
      if (options.showDaysOfWeek) {
        (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.showElement)(this.dow);
        if (this.calendarWeeks) {
          (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.showElement)(this.calendarWeeks.dow);
        }
      } else {
        (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.hideElement)(this.dow);
        if (this.calendarWeeks) {
          (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.hideElement)(this.calendarWeeks.dow);
        }
      }
    }

    // update days-of-week when locale, daysOfweekDisabled or weekStart is changed
    if (updateDOW) {
      Array.from(this.dow.children).forEach((el, index) => {
        const dow = (this.weekStart + index) % 7;
        el.textContent = this.dayNames[dow];
        el.className = this.daysOfWeekDisabled.includes(dow) ? 'dow disabled' : 'dow';
      });
    }
  }

  // Apply update on the focused date to view's settings
  updateFocus() {
    const viewDate = new Date(this.picker.viewDate);
    const viewYear = viewDate.getFullYear();
    const viewMonth = viewDate.getMonth();
    const firstOfMonth = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(viewYear, viewMonth, 1);
    const start = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dayOfTheWeekOf)(firstOfMonth, this.weekStart, this.weekStart);

    this.first = firstOfMonth;
    this.last = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(viewYear, viewMonth + 1, 0);
    this.start = start;
    this.focused = this.picker.viewDate;
  }

  // Apply update on the selected dates to view's settings
  updateSelection() {
    const {dates, rangepicker} = this.picker.datepicker;
    this.selected = dates;
    if (rangepicker) {
      this.range = rangepicker.dates;
    }
  }

   // Update the entire view UI
  render() {
    // update today marker on ever render
    this.today = this.todayHighlight ? (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.today)() : undefined;
    // refresh disabled dates on every render in order to clear the ones added
    // by beforeShow hook at previous render
    this.disabled = [...this.datesDisabled];

    const switchLabel = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(this.focused, this.switchLabelFormat, this.locale);
    this.picker.setViewSwitchLabel(switchLabel);
    this.picker.setPrevBtnDisabled(this.first <= this.minDate);
    this.picker.setNextBtnDisabled(this.last >= this.maxDate);

    if (this.calendarWeeks) {
      // start of the UTC week (Monday) of the 1st of the month
      const startOfWeek = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dayOfTheWeekOf)(this.first, 1, 1);
      Array.from(this.calendarWeeks.weeks.children).forEach((el, index) => {
        el.textContent = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.getWeek)((0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addWeeks)(startOfWeek, index));
      });
    }
    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      const current = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addDays)(this.start, index);
      const date = new Date(current);
      const day = date.getDay();

      el.className = `datepicker-cell ${this.cellClass}`;
      el.dataset.date = current;
      el.textContent = date.getDate();

      if (current < this.first) {
        classList.add('prev');
      } else if (current > this.last) {
        classList.add('next');
      }
      if (this.today === current) {
        classList.add('today');
      }
      if (current < this.minDate || current > this.maxDate || this.disabled.includes(current)) {
        classList.add('disabled');
      }
      if (this.daysOfWeekDisabled.includes(day)) {
        classList.add('disabled');
        (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(this.disabled, current);
      }
      if (this.daysOfWeekHighlighted.includes(day)) {
        classList.add('highlighted');
      }
      if (this.range) {
        const [rangeStart, rangeEnd] = this.range;
        if (current > rangeStart && current < rangeEnd) {
          classList.add('range');
        }
        if (current === rangeStart) {
          classList.add('range-start');
        }
        if (current === rangeEnd) {
          classList.add('range-end');
        }
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }

      if (this.beforeShow) {
        this.performBeforeHook(el, current, current);
      }
    });
  }

  // Update the view UI by applying the changes of selected and focused items
  refresh() {
    const [rangeStart, rangeEnd] = this.range || [];
    this.grid
      .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
      .forEach((el) => {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
      });
    Array.from(this.grid.children).forEach((el) => {
      const current = Number(el.dataset.date);
      const classList = el.classList;
      if (current > rangeStart && current < rangeEnd) {
        classList.add('range');
      }
      if (current === rangeStart) {
        classList.add('range-start');
      }
      if (current === rangeEnd) {
        classList.add('range-end');
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }
    });
  }

  // Update the view UI by applying the change of focused item
  refreshFocus() {
    const index = Math.round((this.focused - this.start) / 86400000);
    this.grid.querySelectorAll('.focused').forEach((el) => {
      el.classList.remove('focused');
    });
    this.grid.children[index].classList.add('focused');
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/MonthsView.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/MonthsView.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MonthsView)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View.js */ "./node_modules/vanillajs-datepicker/js/picker/views/View.js");





function computeMonthRange(range, thisYear) {
  if (!range || !range[0] || !range[1]) {
    return;
  }

  const [[startY, startM], [endY, endM]] = range;
  if (startY > thisYear || endY < thisYear) {
    return;
  }
  return [
    startY === thisYear ? startM : -1,
    endY === thisYear ? endM : 12,
  ];
}

class MonthsView extends _View_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(picker) {
    super(picker, {
      id: 1,
      name: 'months',
      cellClass: 'month',
    });
  }

  init(options, onConstruction = true) {
    if (onConstruction) {
      this.grid = this.element;
      this.element.classList.add('months', 'datepicker-grid');
      this.grid.appendChild((0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.parseHTML)((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 12, {'data-month': ix => ix})));
    }
    super.init(options);
  }

  setOptions(options) {
    if (options.locale) {
      this.monthNames = options.locale.monthsShort;
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate')) {
      if (options.minDate === undefined) {
        this.minYear = this.minMonth = this.minDate = undefined;
      } else {
        const minDateObj = new Date(options.minDate);
        this.minYear = minDateObj.getFullYear();
        this.minMonth = minDateObj.getMonth();
        this.minDate = minDateObj.setDate(1);
      }
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
      if (options.maxDate === undefined) {
        this.maxYear = this.maxMonth = this.maxDate = undefined;
      } else {
        const maxDateObj = new Date(options.maxDate);
        this.maxYear = maxDateObj.getFullYear();
        this.maxMonth = maxDateObj.getMonth();
        this.maxDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.maxYear, this.maxMonth + 1, 0);
      }
    }
    if (this.isMinView) {
      if (options.datesDisabled) {
        this.datesDisabled = options.datesDisabled;
      }
    } else {
      this.datesDisabled = [];
    }
    if (options.beforeShowMonth !== undefined) {
      this.beforeShow = typeof options.beforeShowMonth === 'function'
        ? options.beforeShowMonth
        : undefined;
    }
  }

  // Update view's settings to reflect the viewDate set on the picker
  updateFocus() {
    const viewDate = new Date(this.picker.viewDate);
    this.year = viewDate.getFullYear();
    this.focused = viewDate.getMonth();
  }

  // Update view's settings to reflect the selected dates
  updateSelection() {
    const {dates, rangepicker} = this.picker.datepicker;
    this.selected = dates.reduce((selected, timeValue) => {
      const date = new Date(timeValue);
      const year = date.getFullYear();
      const month = date.getMonth();
      if (selected[year] === undefined) {
        selected[year] = [month];
      } else {
        (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(selected[year], month);
      }
      return selected;
    }, {});
    if (rangepicker && rangepicker.dates) {
      this.range = rangepicker.dates.map(timeValue => {
        const date = new Date(timeValue);
        return isNaN(date) ? undefined : [date.getFullYear(), date.getMonth()];
      });
    }
  }

  // Update the entire view UI
  render() {
    // refresh disabled months on every render in order to clear the ones added
    // by beforeShow hook at previous render
    // this.disabled = [...this.datesDisabled];
    this.disabled = this.datesDisabled.reduce((arr, disabled) => {
      const dt = new Date(disabled);
      if (this.year === dt.getFullYear()) {
        arr.push(dt.getMonth());
      }
      return arr;
    }, []);

    this.picker.setViewSwitchLabel(this.year);
    this.picker.setPrevBtnDisabled(this.year <= this.minYear);
    this.picker.setNextBtnDisabled(this.year >= this.maxYear);

    const selected = this.selected[this.year] || [];
    const yrOutOfRange = this.year < this.minYear || this.year > this.maxYear;
    const isMinYear = this.year === this.minYear;
    const isMaxYear = this.year === this.maxYear;
    const range = computeMonthRange(this.range, this.year);

    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      const date = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.year, index, 1);

      el.className = `datepicker-cell ${this.cellClass}`;
      if (this.isMinView) {
        el.dataset.date = date;
      }
      // reset text on every render to clear the custom content set
      // by beforeShow hook at previous render
      el.textContent = this.monthNames[index];

      if (
        yrOutOfRange
        || isMinYear && index < this.minMonth
        || isMaxYear && index > this.maxMonth
        || this.disabled.includes(index)
      ) {
        classList.add('disabled');
      }
      if (range) {
        const [rangeStart, rangeEnd] = range;
        if (index > rangeStart && index < rangeEnd) {
          classList.add('range');
        }
        if (index === rangeStart) {
          classList.add('range-start');
        }
        if (index === rangeEnd) {
          classList.add('range-end');
        }
      }
      if (selected.includes(index)) {
        classList.add('selected');
      }
      if (index === this.focused) {
        classList.add('focused');
      }

      if (this.beforeShow) {
        this.performBeforeHook(el, index, date);
      }
    });
  }

  // Update the view UI by applying the changes of selected and focused items
  refresh() {
    const selected = this.selected[this.year] || [];
    const [rangeStart, rangeEnd] = computeMonthRange(this.range, this.year) || [];
    this.grid
      .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
      .forEach((el) => {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
      });
    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      if (index > rangeStart && index < rangeEnd) {
        classList.add('range');
      }
      if (index === rangeStart) {
        classList.add('range-start');
      }
      if (index === rangeEnd) {
        classList.add('range-end');
      }
      if (selected.includes(index)) {
        classList.add('selected');
      }
      if (index === this.focused) {
        classList.add('focused');
      }
    });
  }

  // Update the view UI by applying the change of focused item
  refreshFocus() {
    this.grid.querySelectorAll('.focused').forEach((el) => {
      el.classList.remove('focused');
    });
    this.grid.children[this.focused].classList.add('focused');
  }
}

/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/View.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/View.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");



// Base class of the view classes
class View {
  constructor(picker, config) {
    Object.assign(this, config, {
      picker,
      element: (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_1__.parseHTML)(`<div class="datepicker-view"></div>`).firstChild,
      selected: [],
    });
    this.init(this.picker.datepicker.config);
  }

  init(options) {
    if (options.pickLevel !== undefined) {
      this.isMinView = this.id === options.pickLevel;
    }
    this.setOptions(options);
    this.updateFocus();
    this.updateSelection();
  }

  // Execute beforeShow() callback and apply the result to the element
  // args:
  // - current - current value on the iteration on view rendering
  // - timeValue - time value of the date to pass to beforeShow()
  performBeforeHook(el, current, timeValue) {
    let result = this.beforeShow(new Date(timeValue));
    switch (typeof result) {
      case 'boolean':
        result = {enabled: result};
        break;
      case 'string':
        result = {classes: result};
    }

    if (result) {
      if (result.enabled === false) {
        el.classList.add('disabled');
        (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(this.disabled, current);
      }
      if (result.classes) {
        const extraClasses = result.classes.split(/\s+/);
        el.classList.add(...extraClasses);
        if (extraClasses.includes('disabled')) {
          (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(this.disabled, current);
        }
      }
      if (result.content) {
        (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_1__.replaceChildNodes)(el, result.content);
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/YearsView.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/YearsView.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YearsView)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View.js */ "./node_modules/vanillajs-datepicker/js/picker/views/View.js");





function toTitleCase(word) {
  return [...word].reduce((str, ch, ix) => str += ix ? ch : ch.toUpperCase(), '');
}

// Class representing the years and decades view elements
class YearsView extends _View_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(picker, config) {
    super(picker, config);
  }

  init(options, onConstruction = true) {
    if (onConstruction) {
      this.navStep = this.step * 10;
      this.beforeShowOption = `beforeShow${toTitleCase(this.cellClass)}`;
      this.grid = this.element;
      this.element.classList.add(this.name, 'datepicker-grid');
      this.grid.appendChild((0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.parseHTML)((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 12)));
    }
    super.init(options);
  }

  setOptions(options) {
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate')) {
      if (options.minDate === undefined) {
        this.minYear = this.minDate = undefined;
      } else {
        this.minYear = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(options.minDate, this.step);
        this.minDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.minYear, 0, 1);
      }
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
      if (options.maxDate === undefined) {
        this.maxYear = this.maxDate = undefined;
      } else {
        this.maxYear = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(options.maxDate, this.step);
        this.maxDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.maxYear, 11, 31);
      }
    }
    if (this.isMinView) {
      if (options.datesDisabled) {
        this.datesDisabled = options.datesDisabled;
      }
    } else {
      this.datesDisabled = [];
    }
    if (options[this.beforeShowOption] !== undefined) {
      const beforeShow = options[this.beforeShowOption];
      this.beforeShow = typeof beforeShow === 'function' ? beforeShow : undefined;
    }
  }

  // Update view's settings to reflect the viewDate set on the picker
  updateFocus() {
    const viewDate = new Date(this.picker.viewDate);
    const first = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(viewDate, this.navStep);
    const last = first + 9 * this.step;

    this.first = first;
    this.last = last;
    this.start = first - this.step;
    this.focused = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(viewDate, this.step);
  }

  // Update view's settings to reflect the selected dates
  updateSelection() {
    const {dates, rangepicker} = this.picker.datepicker;
    this.selected = dates.reduce((years, timeValue) => {
      return (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(years, (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(timeValue, this.step));
    }, []);
    if (rangepicker && rangepicker.dates) {
      this.range = rangepicker.dates.map(timeValue => {
        if (timeValue !== undefined) {
          return (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(timeValue, this.step);
        }
      });
    }
  }

  // Update the entire view UI
  render() {
    // refresh disabled years on every render in order to clear the ones added
    // by beforeShow hook at previous render
    // this.disabled = [...this.datesDisabled];
    this.disabled = this.datesDisabled.map(disabled => new Date(disabled).getFullYear());

    this.picker.setViewSwitchLabel(`${this.first}-${this.last}`);
    this.picker.setPrevBtnDisabled(this.first <= this.minYear);
    this.picker.setNextBtnDisabled(this.last >= this.maxYear);

    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      const current = this.start + (index * this.step);
      const date = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(current, 0, 1);

      el.className = `datepicker-cell ${this.cellClass}`;
      if (this.isMinView) {
        el.dataset.date = date;
      }
      el.textContent = el.dataset.year = current;

      if (index === 0) {
        classList.add('prev');
      } else if (index === 11) {
        classList.add('next');
      }
      if (current < this.minYear || current > this.maxYear || this.disabled.includes(current)) {
        classList.add('disabled');
      }
      if (this.range) {
        const [rangeStart, rangeEnd] = this.range;
        if (current > rangeStart && current < rangeEnd) {
          classList.add('range');
        }
        if (current === rangeStart) {
          classList.add('range-start');
        }
        if (current === rangeEnd) {
          classList.add('range-end');
        }
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }

      if (this.beforeShow) {
        this.performBeforeHook(el, current, date);
      }
    });
  }

  // Update the view UI by applying the changes of selected and focused items
  refresh() {
    const [rangeStart, rangeEnd] = this.range || [];
    this.grid
      .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
      .forEach((el) => {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
      });
    Array.from(this.grid.children).forEach((el) => {
      const current = Number(el.textContent);
      const classList = el.classList;
      if (current > rangeStart && current < rangeEnd) {
        classList.add('range');
      }
      if (current === rangeStart) {
        classList.add('range-start');
      }
      if (current === rangeEnd) {
        classList.add('range-end');
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }
    });
  }

  // Update the view UI by applying the change of focused item
  refreshFocus() {
    const index = Math.round((this.focused - this.start) / this.step);
    this.grid.querySelectorAll('.focused').forEach((el) => {
      el.classList.remove('focused');
    });
    this.grid.children[index].classList.add('focused');
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQSxPQUFPLHVDQUF1Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLFdBQVcsR0FBRyxVQUFVO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFTOztBQUU1Qix3Q0FBd0MsZUFBZTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zY3JpcHRzL21vZHVsZXMvZGF0ZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvRGF0ZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvZXZlbnRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvZXZlbnRzL2lucHV0RmllbGRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2V2ZW50cy9vdGhlckxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvZXZlbnRzL3BpY2tlckxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvaTE4bi9iYXNlLWxvY2FsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2xpYi9kYXRlLWZvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2xpYi9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9vcHRpb25zL2RlZmF1bHRPcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9vcHRpb25zL3Byb2Nlc3NPcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvUGlja2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvdGVtcGxhdGVzL2NhbGVuZGFyV2Vla3NUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvcGlja2VyL3RlbXBsYXRlcy9kYXlzVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci90ZW1wbGF0ZXMvcGlja2VyVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci92aWV3cy9EYXlzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvcGlja2VyL3ZpZXdzL01vbnRoc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci92aWV3cy9WaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvdmlld3MvWWVhcnNWaWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRlcGlja2VyIGZyb20gJ3ZhbmlsbGFqcy1kYXRlcGlja2VyL0RhdGVwaWNrZXInO1xuXG5jb25zdCBkYXRlcGlja2VyID0gKCkgPT4ge1xuICBuZXcgRGF0ZXBpY2tlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZXBpY2tlci1pbnB1dCcpLCB7fSk7XG59O1xuXG5leHBvcnQgeyBkYXRlcGlja2VyIH07XG4iLCJpbXBvcnQge2xhc3RJdGVtT2YsIHN0cmluZ1RvQXJyYXksIGlzSW5SYW5nZX0gZnJvbSAnLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHt0b2RheSwgcmVndWxhcml6ZURhdGV9IGZyb20gJy4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtwYXJzZURhdGUsIGZvcm1hdERhdGV9IGZyb20gJy4vbGliL2RhdGUtZm9ybWF0LmpzJztcbmltcG9ydCB7aXNBY3RpdmVFbGVtZW50fSBmcm9tICcuL2xpYi9kb20uanMnO1xuaW1wb3J0IHtyZWdpc3Rlckxpc3RlbmVycywgdW5yZWdpc3Rlckxpc3RlbmVyc30gZnJvbSAnLi9saWIvZXZlbnQuanMnO1xuaW1wb3J0IHtsb2NhbGVzfSBmcm9tICcuL2kxOG4vYmFzZS1sb2NhbGVzLmpzJztcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tICcuL29wdGlvbnMvZGVmYXVsdE9wdGlvbnMuanMnO1xuaW1wb3J0IHByb2Nlc3NPcHRpb25zIGZyb20gJy4vb3B0aW9ucy9wcm9jZXNzT3B0aW9ucy5qcyc7XG5pbXBvcnQgUGlja2VyIGZyb20gJy4vcGlja2VyL1BpY2tlci5qcyc7XG5pbXBvcnQge3RyaWdnZXJEYXRlcGlja2VyRXZlbnR9IGZyb20gJy4vZXZlbnRzL2Z1bmN0aW9ucy5qcyc7XG5pbXBvcnQge29uS2V5ZG93biwgb25Gb2N1cywgb25Nb3VzZWRvd24sIG9uQ2xpY2tJbnB1dCwgb25QYXN0ZX0gZnJvbSAnLi9ldmVudHMvaW5wdXRGaWVsZExpc3RlbmVycy5qcyc7XG5pbXBvcnQge29uQ2xpY2tPdXRzaWRlfSBmcm9tICcuL2V2ZW50cy9vdGhlckxpc3RlbmVycy5qcyc7XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeURhdGVzKGRhdGVzLCBjb25maWcpIHtcbiAgcmV0dXJuIGRhdGVzXG4gICAgLm1hcChkdCA9PiBmb3JtYXREYXRlKGR0LCBjb25maWcuZm9ybWF0LCBjb25maWcubG9jYWxlKSlcbiAgICAuam9pbihjb25maWcuZGF0ZURlbGltaXRlcik7XG59XG5cbi8vIHBhcnNlIGlucHV0IGRhdGVzIGFuZCBjcmVhdGUgYW4gYXJyYXkgb2YgdGltZSB2YWx1ZXMgZm9yIHNlbGVjdGlvblxuLy8gcmV0dXJucyB1bmRlZmluZWQgaWYgdGhlcmUgYXJlIG5vIHZhbGlkIGRhdGVzIGluIGlucHV0RGF0ZXNcbi8vIHdoZW4gb3JpZ0RhdGVzIChjdXJyZW50IHNlbGVjdGlvbikgaXMgcGFzc2VkLCB0aGUgZnVuY3Rpb24gd29ya3MgdG8gbWl4XG4vLyB0aGUgaW5wdXQgZGF0ZXMgaW50byB0aGUgY3VycmVudCBzZWxlY3Rpb25cbmZ1bmN0aW9uIHByb2Nlc3NJbnB1dERhdGVzKGRhdGVwaWNrZXIsIGlucHV0RGF0ZXMsIGNsZWFyID0gZmFsc2UpIHtcbiAgLy8gY29uc3Qge2NvbmZpZywgZGF0ZXM6IG9yaWdEYXRlcywgcmFuZ2VwaWNrZXJ9ID0gZGF0ZXBpY2tlcjtcbiAgY29uc3Qge2NvbmZpZywgZGF0ZXM6IG9yaWdEYXRlcywgcmFuZ2VTaWRlSW5kZXh9ID0gZGF0ZXBpY2tlcjtcbiAgaWYgKGlucHV0RGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gZW1wdHkgaW5wdXQgaXMgY29uc2lkZXJlZCB2YWxpZCB1bmxlc3Mgb3JpZ2lEYXRlcyBpcyBwYXNzZWRcbiAgICByZXR1cm4gY2xlYXIgPyBbXSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8vIGNvbnN0IHJhbmdlRW5kID0gcmFuZ2VwaWNrZXIgJiYgZGF0ZXBpY2tlciA9PT0gcmFuZ2VwaWNrZXIuZGF0ZXBpY2tlcnNbMV07XG4gIGxldCBuZXdEYXRlcyA9IGlucHV0RGF0ZXMucmVkdWNlKChkYXRlcywgZHQpID0+IHtcbiAgICBsZXQgZGF0ZSA9IHBhcnNlRGF0ZShkdCwgY29uZmlnLmZvcm1hdCwgY29uZmlnLmxvY2FsZSk7XG4gICAgaWYgKGRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGRhdGVzO1xuICAgIH1cbiAgICAvLyBhZGp1c3QgdG8gMXN0IG9mIHRoZSBtb250aC9KYW4gMXN0IG9mIHRoZSB5ZWFyXG4gICAgLy8gb3IgdG8gdGhlIGxhc3QgZGF5IG9mIHRoZSBtb25oL0RlYyAzMXN0IG9mIHRoZSB5ZWFyIGlmIHRoZSBkYXRlcGlja2VyXG4gICAgLy8gaXMgdGhlIHJhbmdlLWVuZCBwaWNrZXIgb2YgYSByYW5nZXBpY2tlclxuICAgIGRhdGUgPSByZWd1bGFyaXplRGF0ZShkYXRlLCBjb25maWcucGlja0xldmVsLCByYW5nZVNpZGVJbmRleCk7XG4gICAgaWYgKFxuICAgICAgaXNJblJhbmdlKGRhdGUsIGNvbmZpZy5taW5EYXRlLCBjb25maWcubWF4RGF0ZSlcbiAgICAgICYmICFkYXRlcy5pbmNsdWRlcyhkYXRlKVxuICAgICAgJiYgIWNvbmZpZy5kYXRlc0Rpc2FibGVkLmluY2x1ZGVzKGRhdGUpXG4gICAgICAmJiAoY29uZmlnLnBpY2tMZXZlbCA+IDAgfHwgIWNvbmZpZy5kYXlzT2ZXZWVrRGlzYWJsZWQuaW5jbHVkZXMobmV3IERhdGUoZGF0ZSkuZ2V0RGF5KCkpKVxuICAgICkge1xuICAgICAgZGF0ZXMucHVzaChkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9LCBbXSk7XG4gIGlmIChuZXdEYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGNvbmZpZy5tdWx0aWRhdGUgJiYgIWNsZWFyKSB7XG4gICAgLy8gZ2V0IHRoZSBzeW5tZXRyaWMgZGlmZmVyZW5jZSBiZXR3ZWVuIG9yaWdEYXRlcyBhbmQgbmV3RGF0ZXNcbiAgICBuZXdEYXRlcyA9IG5ld0RhdGVzLnJlZHVjZSgoZGF0ZXMsIGRhdGUpID0+IHtcbiAgICAgIGlmICghb3JpZ0RhdGVzLmluY2x1ZGVzKGRhdGUpKSB7XG4gICAgICAgIGRhdGVzLnB1c2goZGF0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0ZXM7XG4gICAgfSwgb3JpZ0RhdGVzLmZpbHRlcihkYXRlID0+ICFuZXdEYXRlcy5pbmNsdWRlcyhkYXRlKSkpO1xuICB9XG4gIC8vIGRvIGxlbmd0aCBjaGVjayBhbHdheXMgYmVjYXVzZSB1c2VyIGNhbiBpbnB1dCBtdWx0aXBsZSBkYXRlcyByZWdhcmRsZXNzIG9mIHRoZSBtb2RlXG4gIHJldHVybiBjb25maWcubWF4TnVtYmVyT2ZEYXRlcyAmJiBuZXdEYXRlcy5sZW5ndGggPiBjb25maWcubWF4TnVtYmVyT2ZEYXRlc1xuICAgID8gbmV3RGF0ZXMuc2xpY2UoY29uZmlnLm1heE51bWJlck9mRGF0ZXMgKiAtMSlcbiAgICA6IG5ld0RhdGVzO1xufVxuXG4vLyByZWZyZXNoIHRoZSBVSSBlbGVtZW50c1xuLy8gbW9kZXM6IDE6IGlucHV0IG9ubHksIDIsIHBpY2tlciBvbmx5LCAzIGJvdGhcbmZ1bmN0aW9uIHJlZnJlc2hVSShkYXRlcGlja2VyLCBtb2RlID0gMywgcXVpY2tSZW5kZXIgPSB0cnVlKSB7XG4gIGNvbnN0IHtjb25maWcsIHBpY2tlciwgaW5wdXRGaWVsZH0gPSBkYXRlcGlja2VyO1xuICBpZiAobW9kZSAmIDIpIHtcbiAgICBjb25zdCBuZXdWaWV3ID0gcGlja2VyLmFjdGl2ZSA/IGNvbmZpZy5waWNrTGV2ZWwgOiBjb25maWcuc3RhcnRWaWV3O1xuICAgIHBpY2tlci51cGRhdGUoKS5jaGFuZ2VWaWV3KG5ld1ZpZXcpLnJlbmRlcihxdWlja1JlbmRlcik7XG4gIH1cbiAgaWYgKG1vZGUgJiAxICYmIGlucHV0RmllbGQpIHtcbiAgICBpbnB1dEZpZWxkLnZhbHVlID0gc3RyaW5naWZ5RGF0ZXMoZGF0ZXBpY2tlci5kYXRlcywgY29uZmlnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXREYXRlKGRhdGVwaWNrZXIsIGlucHV0RGF0ZXMsIG9wdGlvbnMpIHtcbiAgbGV0IHtjbGVhciwgcmVuZGVyLCBhdXRvaGlkZSwgcmV2ZXJ0fSA9IG9wdGlvbnM7XG4gIGlmIChyZW5kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJlbmRlciA9IHRydWU7XG4gIH1cbiAgaWYgKCFyZW5kZXIpIHtcbiAgICBhdXRvaGlkZSA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGF1dG9oaWRlID09PSB1bmRlZmluZWQpIHtcbiAgICBhdXRvaGlkZSA9IGRhdGVwaWNrZXIuY29uZmlnLmF1dG9oaWRlO1xuICB9XG5cbiAgY29uc3QgbmV3RGF0ZXMgPSBwcm9jZXNzSW5wdXREYXRlcyhkYXRlcGlja2VyLCBpbnB1dERhdGVzLCBjbGVhcik7XG4gIGlmICghbmV3RGF0ZXMgJiYgIXJldmVydCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobmV3RGF0ZXMgJiYgbmV3RGF0ZXMudG9TdHJpbmcoKSAhPT0gZGF0ZXBpY2tlci5kYXRlcy50b1N0cmluZygpKSB7XG4gICAgZGF0ZXBpY2tlci5kYXRlcyA9IG5ld0RhdGVzO1xuICAgIHJlZnJlc2hVSShkYXRlcGlja2VyLCByZW5kZXIgPyAzIDogMSk7XG4gICAgdHJpZ2dlckRhdGVwaWNrZXJFdmVudChkYXRlcGlja2VyLCAnY2hhbmdlRGF0ZScpO1xuICB9IGVsc2Uge1xuICAgIHJlZnJlc2hVSShkYXRlcGlja2VyLCAxKTtcbiAgfVxuXG4gIGlmIChhdXRvaGlkZSkge1xuICAgIGRhdGVwaWNrZXIuaGlkZSgpO1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgZGF0ZSBwaWNrZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZXBpY2tlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkYXRlIHBpY2tlclxuICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kIGEgZGF0ZSBwaWNrZXJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBbb3B0aW9uc10gLSBjb25maWcgb3B0aW9uc1xuICAgKiBAcGFyYW0gIHtEYXRlUmFuZ2VQaWNrZXJ9IFtyYW5nZXBpY2tlcl0gLSBEYXRlUmFuZ2VQaWNrZXIgaW5zdGFuY2UgdGhlXG4gICAqIGRhdGUgcGlja2VyIGJlbG9uZ3MgdG8uIFVzZSB0aGlzIG9ubHkgd2hlbiBjcmVhdGluZyBkYXRlIHBpY2tlciBhcyBhIHBhcnRcbiAgICogb2YgZGF0ZSByYW5nZSBwaWNrZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSwgcmFuZ2VwaWNrZXIgPSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50LmRhdGVwaWNrZXIgPSB0aGlzO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYnV0dG9uQ2xhc3M6IChvcHRpb25zLmJ1dHRvbkNsYXNzICYmIFN0cmluZyhvcHRpb25zLmJ1dHRvbkNsYXNzKSkgfHwgJ2J1dHRvbicsXG4gICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICBkZWZhdWx0Vmlld0RhdGU6IHRvZGF5KCksXG4gICAgICBtYXhEYXRlOiB1bmRlZmluZWQsXG4gICAgICBtaW5EYXRlOiB1bmRlZmluZWQsXG4gICAgfSwgcHJvY2Vzc09wdGlvbnMoZGVmYXVsdE9wdGlvbnMsIHRoaXMpKTtcbiAgICAvLyBjb25maWd1cmUgYnkgdHlwZVxuICAgIGNvbnN0IGlubGluZSA9IHRoaXMuaW5saW5lID0gZWxlbWVudC50YWdOYW1lICE9PSAnSU5QVVQnO1xuICAgIGxldCBpbnB1dEZpZWxkO1xuICAgIGlmIChpbmxpbmUpIHtcbiAgICAgIGNvbmZpZy5jb250YWluZXIgPSBlbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgLy8gb21pdCBzdHJpbmcgdHlwZSBjaGVjayBiZWNhdXNlIGl0IGRvZXNuJ3QgZ3VhcmFudGVlIHRvIGF2b2lkIGVycm9yc1xuICAgICAgICAvLyAoaW52YWxpZCBzZWxlY3RvciBzdHJpbmcgY2F1c2VzIGFiZW5kIHdpdGggc3l0YXggZXJyb3IpXG4gICAgICAgIGNvbmZpZy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgICAgPyBvcHRpb25zLmNvbnRhaW5lclxuICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgICBpbnB1dEZpZWxkID0gdGhpcy5pbnB1dEZpZWxkID0gZWxlbWVudDtcbiAgICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnZGF0ZXBpY2tlci1pbnB1dCcpO1xuICAgIH1cbiAgICBpZiAocmFuZ2VwaWNrZXIpIHtcbiAgICAgIC8vIGNoZWNrIHZhbGlkaXJ5XG4gICAgICBjb25zdCBpbmRleCA9IHJhbmdlcGlja2VyLmlucHV0cy5pbmRleE9mKGlucHV0RmllbGQpO1xuICAgICAgY29uc3QgZGF0ZXBpY2tlcnMgPSByYW5nZXBpY2tlci5kYXRlcGlja2VycztcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiAxIHx8ICFBcnJheS5pc0FycmF5KGRhdGVwaWNrZXJzKSkge1xuICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCByYW5nZXBpY2tlciBvYmplY3QuJyk7XG4gICAgICB9XG4gICAgICAvLyBhdHRhY2ggaXRhZWxmIHRvIHRoZSByYW5nZXBpY2tlciBoZXJlIHNvIHRoYXQgcHJvY2Vzc0lucHV0RGF0ZXMoKSBjYW5cbiAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIGlzIHRoZSByYW5nZS1lbmQgcGlja2VyIG9mIHRoZSByYW5nZXBpY2tlciB3aGlsZVxuICAgICAgLy8gc2V0dGluZyBpbml0YWwgdmFsdWVzIHdoZW4gcGlja0xldmVsID4gMFxuICAgICAgZGF0ZXBpY2tlcnNbaW5kZXhdID0gdGhpcztcbiAgICAgIC8vIGFkZCBnZXR0ZXIgZm9yIHJhbmdlcGlja2VyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3JhbmdlcGlja2VyJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHJhbmdlcGlja2VyO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3JhbmdlU2lkZUluZGV4Jywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHVwIGNvbmZpZ1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBwcm9jZXNzT3B0aW9ucyhvcHRpb25zLCB0aGlzKSk7XG5cbiAgICAvLyBzZXQgaW5pdGlhbCBkYXRlc1xuICAgIGxldCBpbml0aWFsRGF0ZXM7XG4gICAgaWYgKGlubGluZSkge1xuICAgICAgaW5pdGlhbERhdGVzID0gc3RyaW5nVG9BcnJheShlbGVtZW50LmRhdGFzZXQuZGF0ZSwgY29uZmlnLmRhdGVEZWxpbWl0ZXIpO1xuICAgICAgZGVsZXRlIGVsZW1lbnQuZGF0YXNldC5kYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0aWFsRGF0ZXMgPSBzdHJpbmdUb0FycmF5KGlucHV0RmllbGQudmFsdWUsIGNvbmZpZy5kYXRlRGVsaW1pdGVyKTtcbiAgICB9XG4gICAgdGhpcy5kYXRlcyA9IFtdO1xuICAgIC8vIHByb2Nlc3MgaW5pdGlhbCB2YWx1ZVxuICAgIGNvbnN0IGlucHV0RGF0ZVZhbHVlcyA9IHByb2Nlc3NJbnB1dERhdGVzKHRoaXMsIGluaXRpYWxEYXRlcyk7XG4gICAgaWYgKGlucHV0RGF0ZVZhbHVlcyAmJiBpbnB1dERhdGVWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kYXRlcyA9IGlucHV0RGF0ZVZhbHVlcztcbiAgICB9XG4gICAgaWYgKGlucHV0RmllbGQpIHtcbiAgICAgIGlucHV0RmllbGQudmFsdWUgPSBzdHJpbmdpZnlEYXRlcyh0aGlzLmRhdGVzLCBjb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0IHBpY2tlciA9IHRoaXMucGlja2VyID0gbmV3IFBpY2tlcih0aGlzKTtcblxuICAgIGlmIChpbmxpbmUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXQgdXAgZXZlbnQgbGlzdGVuZXJzIGluIG90aGVyIG1vZGVzXG4gICAgICBjb25zdCBvbk1vdXNlZG93bkRvY3VtZW50ID0gb25DbGlja091dHNpZGUuYmluZChudWxsLCB0aGlzKTtcbiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IFtcbiAgICAgICAgW2lucHV0RmllbGQsICdrZXlkb3duJywgb25LZXlkb3duLmJpbmQobnVsbCwgdGhpcyldLFxuICAgICAgICBbaW5wdXRGaWVsZCwgJ2ZvY3VzJywgb25Gb2N1cy5iaW5kKG51bGwsIHRoaXMpXSxcbiAgICAgICAgW2lucHV0RmllbGQsICdtb3VzZWRvd24nLCBvbk1vdXNlZG93bi5iaW5kKG51bGwsIHRoaXMpXSxcbiAgICAgICAgW2lucHV0RmllbGQsICdjbGljaycsIG9uQ2xpY2tJbnB1dC5iaW5kKG51bGwsIHRoaXMpXSxcbiAgICAgICAgW2lucHV0RmllbGQsICdwYXN0ZScsIG9uUGFzdGUuYmluZChudWxsLCB0aGlzKV0sXG4gICAgICAgIFtkb2N1bWVudCwgJ21vdXNlZG93bicsIG9uTW91c2Vkb3duRG9jdW1lbnRdLFxuICAgICAgICBbZG9jdW1lbnQsICd0b3VjaHN0YXJ0Jywgb25Nb3VzZWRvd25Eb2N1bWVudF0sXG4gICAgICAgIFt3aW5kb3csICdyZXNpemUnLCBwaWNrZXIucGxhY2UuYmluZChwaWNrZXIpXVxuICAgICAgXTtcbiAgICAgIHJlZ2lzdGVyTGlzdGVuZXJzKHRoaXMsIGxpc3RlbmVycyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBEYXRlIG9iamVjdCBvciB0aW1lIHZhbHVlIGluIGdpdmVuIGZvcm1hdCBhbmQgbGFuZ3VhZ2VcbiAgICogQHBhcmFtICB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSBkYXRlIG9yIHRpbWUgdmFsdWUgdG8gZm9ybWF0XG4gICAqIEBwYXJhbSAge1N0cmluZ3xPYmplY3R9IGZvcm1hdCAtIGZvcm1hdCBzdHJpbmcgb3Igb2JqZWN0IHRoYXQgY29udGFpbnNcbiAgICogdG9EaXNwbGF5KCkgY3VzdG9tIGZvcm1hdHRlciwgd2hvc2Ugc2lnbmF0dXJlIGlzXG4gICAqIC0gYXJnczpcbiAgICogICAtIGRhdGU6IHtEYXRlfSAtIERhdGUgaW5zdGFuY2Ugb2YgdGhlIGRhdGUgcGFzc2VkIHRvIHRoZSBtZXRob2RcbiAgICogICAtIGZvcm1hdDoge09iamVjdH0gLSB0aGUgZm9ybWF0IG9iamVjdCBwYXNzZWQgdG8gdGhlIG1ldGhvZFxuICAgKiAgIC0gbG9jYWxlOiB7T2JqZWN0fSAtIGxvY2FsZSBmb3IgdGhlIGxhbmd1YWdlIHNwZWNpZmllZCBieSBgbGFuZ2BcbiAgICogLSByZXR1cm46XG4gICAqICAgICB7U3RyaW5nfSBmb3JtYXR0ZWQgZGF0ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtsYW5nPWVuXSAtIGxhbmd1YWdlIGNvZGUgZm9yIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEByZXR1cm4ge1N0cmluZ30gZm9ybWF0dGVkIGRhdGVcbiAgICovXG4gIHN0YXRpYyBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgbGFuZykge1xuICAgIHJldHVybiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgbGFuZyAmJiBsb2NhbGVzW2xhbmddIHx8IGxvY2FsZXMuZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGRhdGUgc3RyaW5nXG4gICAqIEBwYXJhbSAge1N0cmluZ3xEYXRlfE51bWJlcn0gZGF0ZVN0ciAtIGRhdGUgc3RyaW5nLCBEYXRlIG9iamVjdCBvciB0aW1lXG4gICAqIHZhbHVlIHRvIHBhcnNlXG4gICAqIEBwYXJhbSAge1N0cmluZ3xPYmplY3R9IGZvcm1hdCAtIGZvcm1hdCBzdHJpbmcgb3Igb2JqZWN0IHRoYXQgY29udGFpbnNcbiAgICogdG9WYWx1ZSgpIGN1c3RvbSBwYXJzZXIsIHdob3NlIHNpZ25hdHVyZSBpc1xuICAgKiAtIGFyZ3M6XG4gICAqICAgLSBkYXRlU3RyOiB7U3RyaW5nfERhdGV8TnVtYmVyfSAtIHRoZSBkYXRlU3RyIHBhc3NlZCB0byB0aGUgbWV0aG9kXG4gICAqICAgLSBmb3JtYXQ6IHtPYmplY3R9IC0gdGhlIGZvcm1hdCBvYmplY3QgcGFzc2VkIHRvIHRoZSBtZXRob2RcbiAgICogICAtIGxvY2FsZToge09iamVjdH0gLSBsb2NhbGUgZm9yIHRoZSBsYW5ndWFnZSBzcGVjaWZpZWQgYnkgYGxhbmdgXG4gICAqIC0gcmV0dXJuOlxuICAgKiAgICAge0RhdGV8TnVtYmVyfSBwYXJzZWQgZGF0ZSBvciBpdHMgdGltZSB2YWx1ZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtsYW5nPWVuXSAtIGxhbmd1YWdlIGNvZGUgZm9yIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEByZXR1cm4ge051bWJlcn0gdGltZSB2YWx1ZSBvZiBwYXJzZWQgZGF0ZVxuICAgKi9cbiAgc3RhdGljIHBhcnNlRGF0ZShkYXRlU3RyLCBmb3JtYXQsIGxhbmcpIHtcbiAgICByZXR1cm4gcGFyc2VEYXRlKGRhdGVTdHIsIGZvcm1hdCwgbGFuZyAmJiBsb2NhbGVzW2xhbmddIHx8IGxvY2FsZXMuZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtPYmplY3R9IC0gSW5zdGFsbGVkIGxvY2FsZXMgaW4gYFtsYW5ndWFnZUNvZGVdOiBsb2NhbGVPYmplY3RgIGZvcm1hdFxuICAgKiBlbmA6X0VuZ2xpc2ggKFVTKV8gaXMgcHJlLWluc3RhbGxlZC5cbiAgICovXG4gIHN0YXRpYyBnZXQgbG9jYWxlcygpIHtcbiAgICByZXR1cm4gbG9jYWxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn0gLSBXaGV0aGVyIHRoZSBwaWNrZXIgZWxlbWVudCBpcyBzaG93bi4gYHRydWVgIHdobmUgc2hvd25cbiAgICovXG4gIGdldCBhY3RpdmUoKSB7XG4gICAgcmV0dXJuICEhKHRoaXMucGlja2VyICYmIHRoaXMucGlja2VyLmFjdGl2ZSk7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAtIERPTSBvYmplY3Qgb2YgcGlja2VyIGVsZW1lbnRcbiAgICovXG4gIGdldCBwaWNrZXJFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBpY2tlciA/IHRoaXMucGlja2VyLmVsZW1lbnQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG5ldyB2YWx1ZXMgdG8gdGhlIGNvbmZpZyBvcHRpb25zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlnIG9wdGlvbnMgdG8gdXBkYXRlXG4gICAqL1xuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBjb25zdCBwaWNrZXIgPSB0aGlzLnBpY2tlcjtcbiAgICBjb25zdCBuZXdPcHRpb25zID0gcHJvY2Vzc09wdGlvbnMob3B0aW9ucywgdGhpcyk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBuZXdPcHRpb25zKTtcbiAgICBwaWNrZXIuc2V0T3B0aW9ucyhuZXdPcHRpb25zKTtcblxuICAgIHJlZnJlc2hVSSh0aGlzLCAzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBwaWNrZXIgZWxlbWVudFxuICAgKi9cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5pbnB1dEZpZWxkKSB7XG4gICAgICBpZiAodGhpcy5pbnB1dEZpZWxkLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghaXNBY3RpdmVFbGVtZW50KHRoaXMuaW5wdXRGaWVsZCkgJiYgIXRoaXMuY29uZmlnLmRpc2FibGVUb3VjaEtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuX3Nob3dpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmlucHV0RmllbGQuZm9jdXMoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Nob3dpbmc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucGlja2VyLnNob3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBwaWNrZXIgZWxlbWVudFxuICAgKiBOb3QgYXZhaWxhYmxlIG9uIGlubGluZSBwaWNrZXJcbiAgICovXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuaW5saW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGlja2VyLmhpZGUoKTtcbiAgICB0aGlzLnBpY2tlci51cGRhdGUoKS5jaGFuZ2VWaWV3KHRoaXMuY29uZmlnLnN0YXJ0VmlldykucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgRGF0ZXBpY2tlciBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEZXRlcGlja2VyfSAtIHRoZSBpbnN0YW5jZSBkZXN0cm95ZWRcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gICAgdW5yZWdpc3Rlckxpc3RlbmVycyh0aGlzKTtcbiAgICB0aGlzLnBpY2tlci5kZXRhY2goKTtcbiAgICBpZiAoIXRoaXMuaW5saW5lKSB7XG4gICAgICB0aGlzLmlucHV0RmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZGF0ZXBpY2tlci1pbnB1dCcpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5lbGVtZW50LmRhdGVwaWNrZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzZWxlY3RlZCBkYXRlKHMpXG4gICAqXG4gICAqIFRoZSBtZXRob2QgcmV0dXJucyBhIERhdGUgb2JqZWN0IG9mIHNlbGVjdGVkIGRhdGUgYnkgZGVmYXVsdCwgYW5kIHJldHVybnNcbiAgICogYW4gYXJyYXkgb2Ygc2VsZWN0ZWQgZGF0ZXMgaW4gbXVsdGlkYXRlIG1vZGUuIElmIGZvcm1hdCBzdHJpbmcgaXMgcGFzc2VkLFxuICAgKiBpdCByZXR1cm5zIGRhdGUgc3RyaW5nKHMpIGZvcm1hdHRlZCBpbiBnaXZlbiBmb3JtYXQuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW2Zvcm1hdF0gLSBGb3JtYXQgc3RyaW5nIHRvIHN0cmluZ2lmeSB0aGUgZGF0ZShzKVxuICAgKiBAcmV0dXJuIHtEYXRlfFN0cmluZ3xEYXRlW118U3RyaW5nW119IC0gc2VsZWN0ZWQgZGF0ZShzKSwgb3IgaWYgbm9uZSBpc1xuICAgKiBzZWxlY3RlZCwgZW1wdHkgYXJyYXkgaW4gbXVsdGlkYXRlIG1vZGUgYW5kIHVudGl0bGVkIGluIHNpZ2xlZGF0ZSBtb2RlXG4gICAqL1xuICBnZXREYXRlKGZvcm1hdCA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZm9ybWF0XG4gICAgICA/IGRhdGUgPT4gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQsIHRoaXMuY29uZmlnLmxvY2FsZSlcbiAgICAgIDogZGF0ZSA9PiBuZXcgRGF0ZShkYXRlKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5tdWx0aWRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVzLm1hcChjYWxsYmFjayk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayh0aGlzLmRhdGVzWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNlbGVjdGVkIGRhdGUocylcbiAgICpcbiAgICogSW4gbXVsdGlkYXRlIG1vZGUsIHlvdSBjYW4gcGFzcyBtdWx0aXBsZSBkYXRlcyBhcyBhIHNlcmllcyBvZiBhcmd1bWVudHNcbiAgICogb3IgYW4gYXJyYXkuIChTaW5jZSBlYWNoIGRhdGUgaXMgcGFyc2VkIGluZGl2aWR1YWxseSwgdGhlIHR5cGUgb2YgdGhlXG4gICAqIGRhdGVzIGRvZXNuJ3QgaGF2ZSB0byBiZSB0aGUgc2FtZS4pXG4gICAqIFRoZSBnaXZlbiBkYXRlcyBhcmUgdXNlZCB0byB0b2dnbGUgdGhlIHNlbGVjdCBzdGF0dXMgb2YgZWFjaCBkYXRlLiBUaGVcbiAgICogbnVtYmVyIG9mIHNlbGVjdGVkIGRhdGVzIGlzIGtlcHQgZnJvbSBleGNlZWRpbmcgdGhlIGxlbmd0aCBzZXQgdG9cbiAgICogbWF4TnVtYmVyT2ZEYXRlcy5cbiAgICpcbiAgICogV2l0aCBjbGVhcjogdHJ1ZSBvcHRpb24sIHRoZSBtZXRob2QgY2FuIGJlIHVzZWQgdG8gY2xlYXIgdGhlIHNlbGVjdGlvblxuICAgKiBhbmQgdG8gcmVwbGFjZSB0aGUgc2VsZWN0aW9uIGluc3RlYWQgb2YgdG9nZ2xpbmcgaW4gbXVsdGlkYXRlIG1vZGUuXG4gICAqIElmIHRoZSBvcHRpb24gaXMgcGFzc2VkIHdpdGggbm8gZGF0ZSBhcmd1bWVudHMgb3IgYW4gZW1wdHkgZGF0ZXMgYXJyYXksXG4gICAqIGl0IHdvcmtzIGFzIFwiY2xlYXJcIiAoY2xlYXIgdGhlIHNlbGVjdGlvbiB0aGVuIHNldCBub3RoaW5nKSwgYW5kIGlmIHRoZVxuICAgKiBvcHRpb24gaXMgcGFzc2VkIHdpdGggbmV3IGRhdGVzIHRvIHNlbGVjdCwgaXQgd29ya3MgYXMgXCJyZXBsYWNlXCIgKGNsZWFyXG4gICAqIHRoZSBzZWxlY3Rpb24gdGhlbiBzZXQgdGhlIGdpdmVuIGRhdGVzKVxuICAgKlxuICAgKiBXaGVuIHJlbmRlcjogZmFsc2Ugb3B0aW9uIGlzIHVzZWQsIHRoZSBtZXRob2Qgb21pdHMgcmUtcmVuZGVyaW5nIHRoZVxuICAgKiBwaWNrZXIgZWxlbWVudC4gSW4gdGhpcyBjYXNlLCB5b3UgbmVlZCB0byBjYWxsIHJlZnJlc2goKSBtZXRob2QgbGF0ZXIgaW5cbiAgICogb3JkZXIgZm9yIHRoZSBwaWNrZXIgZWxlbWVudCB0byByZWZsZWN0IHRoZSBjaGFuZ2VzLiBUaGUgaW5wdXQgZmllbGQgaXNcbiAgICogcmVmcmVzaGVkIGFsd2F5cyByZWdhcmRsZXNzIG9mIHRoaXMgb3B0aW9uLlxuICAgKlxuICAgKiBXaGVuIGludmFsaWQgKHVucGFyc2FibGUsIHJlcGVhdGVkLCBkaXNhYmxlZCBvciBvdXQtb2YtcmFuZ2UpIGRhdGVzIGFyZVxuICAgKiBwYXNzZWQsIHRoZSBtZXRob2QgaWdub3JlcyB0aGVtIGFuZCBhcHBsaWVzIG9ubHkgdmFsaWQgb25lcy4gSW4gdGhlIGNhc2VcbiAgICogdGhhdCBhbGwgdGhlIGdpdmVuIGRhdGVzIGFyZSBpbnZhbGlkLCB3aGljaCBpcyBkaXN0aW5ndWlzaGVkIGZyb20gcGFzc2luZ1xuICAgKiBubyBkYXRlcywgdGhlIG1ldGhvZCBjb25zaWRlcnMgaXQgYXMgYW4gZXJyb3IgYW5kIGxlYXZlcyB0aGUgc2VsZWN0aW9uXG4gICAqIHVudG91Y2hlZC4gKFRoZSBpbnB1dCBmaWVsZCBhbHNvIHJlbWFpbnMgdW50b3VjaGVkIHVubGVzcyByZXZlcnQ6IHRydWVcbiAgICogb3B0aW9uIGlzIHVzZWQuKVxuICAgKlxuICAgKiBAcGFyYW0gey4uLihEYXRlfE51bWJlcnxTdHJpbmcpfEFycmF5fSBbZGF0ZXNdIC0gRGF0ZSBzdHJpbmdzLCBEYXRlXG4gICAqIG9iamVjdHMsIHRpbWUgdmFsdWVzIG9yIG1peCBvZiB0aG9zZSBmb3IgbmV3IHNlbGVjdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gZnVuY3Rpb24gb3B0aW9uc1xuICAgKiAtIGNsZWFyOiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGNsZWFyIHRoZSBleGlzdGluZyBzZWxlY3Rpb25cbiAgICogICAgIGRlZnVhbHQ6IGZhbHNlXG4gICAqIC0gcmVuZGVyOiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIHJlLXJlbmRlciB0aGUgcGlja2VyIGVsZW1lbnRcbiAgICogICAgIGRlZmF1bHQ6IHRydWVcbiAgICogLSBhdXRvaGlkZToge2Jvb2xlYW59IC0gV2hldGhlciB0byBoaWRlIHRoZSBwaWNrZXIgZWxlbWVudCBhZnRlciByZS1yZW5kZXJcbiAgICogICAgIElnbm9yZWQgd2hlbiB1c2VkIHdpdGggcmVuZGVyOiBmYWxzZVxuICAgKiAgICAgZGVmYXVsdDogY29uZmlnLmF1dG9oaWRlXG4gICAqIC0gcmV2ZXJ0OiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIHJlZnJlc2ggdGhlIGlucHV0IGZpZWxkIHdoZW4gYWxsIHRoZVxuICAgKiAgICAgcGFzc2VkIGRhdGVzIGFyZSBpbnZhbGlkXG4gICAqICAgICBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgc2V0RGF0ZSguLi5hcmdzKSB7XG4gICAgY29uc3QgZGF0ZXMgPSBbLi4uYXJnc107XG4gICAgY29uc3Qgb3B0cyA9IHt9O1xuICAgIGNvbnN0IGxhc3RBcmcgPSBsYXN0SXRlbU9mKGFyZ3MpO1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBsYXN0QXJnID09PSAnb2JqZWN0J1xuICAgICAgJiYgIUFycmF5LmlzQXJyYXkobGFzdEFyZylcbiAgICAgICYmICEobGFzdEFyZyBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAmJiBsYXN0QXJnXG4gICAgKSB7XG4gICAgICBPYmplY3QuYXNzaWduKG9wdHMsIGRhdGVzLnBvcCgpKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dERhdGVzID0gQXJyYXkuaXNBcnJheShkYXRlc1swXSkgPyBkYXRlc1swXSA6IGRhdGVzO1xuICAgIHNldERhdGUodGhpcywgaW5wdXREYXRlcywgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBzZWxlY3RlZCBkYXRlKHMpIHdpdGggaW5wdXQgZmllbGQncyB2YWx1ZVxuICAgKiBOb3QgYXZhaWxhYmxlIG9uIGlubGluZSBwaWNrZXJcbiAgICpcbiAgICogVGhlIGlucHV0IGZpZWxkIHdpbGwgYmUgcmVmcmVzaGVkIHdpdGggcHJvcGVybHkgZm9ybWF0dGVkIGRhdGUgc3RyaW5nLlxuICAgKlxuICAgKiBJbiB0aGUgY2FzZSB0aGF0IGFsbCB0aGUgZW50ZXJlZCBkYXRlcyBhcmUgaW52YWxpZCAodW5wYXJzYWJsZSwgcmVwZWF0ZWQsXG4gICAqIGRpc2FibGVkIG9yIG91dC1vZi1yYW5nZSksIHdoaXhoIGlzIGRpc3Rpbmd1aXNoZWQgZnJvbSBlbXB0eSBpbnB1dCBmaWVsZCxcbiAgICogdGhlIG1ldGhvZCBsZWF2ZXMgdGhlIGlucHV0IGZpZWxkIHVudG91Y2hlZCBhcyB3ZWxsIGFzIHRoZSBzZWxlY3Rpb24gYnlcbiAgICogZGVmYXVsdC4gSWYgcmV2ZXJ0OiB0cnVlIG9wdGlvbiBpcyB1c2VkIGluIHRoaXMgY2FzZSwgdGhlIGlucHV0IGZpZWxkIGlzXG4gICAqIHJlZnJlc2hlZCB3aXRoIHRoZSBleGlzdGluZyBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gW29wdGlvbnNdIC0gZnVuY3Rpb24gb3B0aW9uc1xuICAgKiAtIGF1dG9oaWRlOiB7Ym9vbGVhbn0gLSB3aGV0aGVyIHRvIGhpZGUgdGhlIHBpY2tlciBlbGVtZW50IGFmdGVyIHJlZnJlc2hcbiAgICogICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAqIC0gcmV2ZXJ0OiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIHJlZnJlc2ggdGhlIGlucHV0IGZpZWxkIHdoZW4gYWxsIHRoZVxuICAgKiAgICAgcGFzc2VkIGRhdGVzIGFyZSBpbnZhbGlkXG4gICAqICAgICBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgdXBkYXRlKG9wdGlvbnMgPSB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5pbmxpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbihvcHRpb25zIHx8IHt9LCB7Y2xlYXI6IHRydWUsIHJlbmRlcjogdHJ1ZX0pO1xuICAgIGNvbnN0IGlucHV0RGF0ZXMgPSBzdHJpbmdUb0FycmF5KHRoaXMuaW5wdXRGaWVsZC52YWx1ZSwgdGhpcy5jb25maWcuZGF0ZURlbGltaXRlcik7XG4gICAgc2V0RGF0ZSh0aGlzLCBpbnB1dERhdGVzLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBwaWNrZXIgZWxlbWVudCBhbmQgdGhlIGFzc29jaWF0ZWQgaW5wdXQgZmllbGRcbiAgICogQHBhcmFtIHtTdHJpbmd9IFt0YXJnZXRdIC0gdGFyZ2V0IGl0ZW0gd2hlbiByZWZyZXNoaW5nIG9uZSBpdGVtIG9ubHlcbiAgICogJ3BpY2tlcicgb3IgJ2lucHV0J1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtmb3JjZVJlbmRlcl0gLSB3aGV0aGVyIHRvIHJlLXJlbmRlciB0aGUgcGlja2VyIGVsZW1lbnRcbiAgICogcmVnYXJkbGVzcyBvZiBpdHMgc3RhdGUgaW5zdGVhZCBvZiBvcHRpbWl6ZWQgcmVmcmVzaFxuICAgKi9cbiAgcmVmcmVzaCh0YXJnZXQgPSB1bmRlZmluZWQsIGZvcmNlUmVuZGVyID0gZmFsc2UpIHtcbiAgICBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBmb3JjZVJlbmRlciA9IHRhcmdldDtcbiAgICAgIHRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBsZXQgbW9kZTtcbiAgICBpZiAodGFyZ2V0ID09PSAncGlja2VyJykge1xuICAgICAgbW9kZSA9IDI7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdpbnB1dCcpIHtcbiAgICAgIG1vZGUgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2RlID0gMztcbiAgICB9XG4gICAgcmVmcmVzaFVJKHRoaXMsIG1vZGUsICFmb3JjZVJlbmRlcik7XG4gIH1cblxuICAvKipcbiAgICogRW50ZXIgZWRpdCBtb2RlXG4gICAqIE5vdCBhdmFpbGFibGUgb24gaW5saW5lIHBpY2tlciBvciB3aGVuIHRoZSBwaWNrZXIgZWxlbWVudCBpcyBoaWRkZW5cbiAgICovXG4gIGVudGVyRWRpdE1vZGUoKSB7XG4gICAgaWYgKHRoaXMuaW5saW5lIHx8ICF0aGlzLnBpY2tlci5hY3RpdmUgfHwgdGhpcy5lZGl0TW9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVkaXRNb2RlID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnaW4tZWRpdCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4aXQgZnJvbSBlZGl0IG1vZGVcbiAgICogTm90IGF2YWlsYWJsZSBvbiBpbmxpbmUgcGlja2VyXG4gICAqIEBwYXJhbSAge09iamVjdH0gW29wdGlvbnNdIC0gZnVuY3Rpb24gb3B0aW9uc1xuICAgKiAtIHVwZGF0ZToge2Jvb2xlYW59IC0gd2hldGhlciB0byBjYWxsIHVwZGF0ZSgpIGFmdGVyIGV4aXRpbmdcbiAgICogICAgIElmIGZhbHNlLCBpbnB1dCBmaWVsZCBpcyByZXZlcnQgdG8gdGhlIGV4aXN0aW5nIHNlbGVjdGlvblxuICAgKiAgICAgZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIGV4aXRFZGl0TW9kZShvcHRpb25zID0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuaW5saW5lIHx8ICF0aGlzLmVkaXRNb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt1cGRhdGU6IGZhbHNlfSwgb3B0aW9ucyk7XG4gICAgZGVsZXRlIHRoaXMuZWRpdE1vZGU7XG4gICAgdGhpcy5pbnB1dEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2luLWVkaXQnKTtcbiAgICBpZiAob3B0cy51cGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlKG9wdHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtsaW1pdFRvUmFuZ2V9IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge2FkZE1vbnRocywgYWRkWWVhcnN9IGZyb20gJy4uL2xpYi9kYXRlLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQoZGF0ZXBpY2tlciwgdHlwZSkge1xuICBjb25zdCBkZXRhaWwgPSB7XG4gICAgZGF0ZTogZGF0ZXBpY2tlci5nZXREYXRlKCksXG4gICAgdmlld0RhdGU6IG5ldyBEYXRlKGRhdGVwaWNrZXIucGlja2VyLnZpZXdEYXRlKSxcbiAgICB2aWV3SWQ6IGRhdGVwaWNrZXIucGlja2VyLmN1cnJlbnRWaWV3LmlkLFxuICAgIGRhdGVwaWNrZXIsXG4gIH07XG4gIGRhdGVwaWNrZXIuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0eXBlLCB7ZGV0YWlsfSkpO1xufVxuXG4vLyBkaXJlY3Rpb246IC0xICh0byBwcmV2aW91cyksIDEgKHRvIG5leHQpXG5leHBvcnQgZnVuY3Rpb24gZ29Ub1ByZXZPck5leHQoZGF0ZXBpY2tlciwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHttaW5EYXRlLCBtYXhEYXRlfSA9IGRhdGVwaWNrZXIuY29uZmlnO1xuICBjb25zdCB7Y3VycmVudFZpZXcsIHZpZXdEYXRlfSA9IGRhdGVwaWNrZXIucGlja2VyO1xuICBsZXQgbmV3Vmlld0RhdGU7XG4gIHN3aXRjaCAoY3VycmVudFZpZXcuaWQpIHtcbiAgICBjYXNlIDA6XG4gICAgICBuZXdWaWV3RGF0ZSA9IGFkZE1vbnRocyh2aWV3RGF0ZSwgZGlyZWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIG5ld1ZpZXdEYXRlID0gYWRkWWVhcnModmlld0RhdGUsIGRpcmVjdGlvbik7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbmV3Vmlld0RhdGUgPSBhZGRZZWFycyh2aWV3RGF0ZSwgZGlyZWN0aW9uICogY3VycmVudFZpZXcubmF2U3RlcCk7XG4gIH1cbiAgbmV3Vmlld0RhdGUgPSBsaW1pdFRvUmFuZ2UobmV3Vmlld0RhdGUsIG1pbkRhdGUsIG1heERhdGUpO1xuICBkYXRlcGlja2VyLnBpY2tlci5jaGFuZ2VGb2N1cyhuZXdWaWV3RGF0ZSkucmVuZGVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hWaWV3KGRhdGVwaWNrZXIpIHtcbiAgY29uc3Qgdmlld0lkID0gZGF0ZXBpY2tlci5waWNrZXIuY3VycmVudFZpZXcuaWQ7XG4gIGlmICh2aWV3SWQgPT09IGRhdGVwaWNrZXIuY29uZmlnLm1heFZpZXcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZGF0ZXBpY2tlci5waWNrZXIuY2hhbmdlVmlldyh2aWV3SWQgKyAxKS5yZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZm9jdXMoZGF0ZXBpY2tlcikge1xuICBpZiAoZGF0ZXBpY2tlci5jb25maWcudXBkYXRlT25CbHVyKSB7XG4gICAgZGF0ZXBpY2tlci51cGRhdGUoe3JldmVydDogdHJ1ZX0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGVwaWNrZXIucmVmcmVzaCgnaW5wdXQnKTtcbiAgfVxuICBkYXRlcGlja2VyLmhpZGUoKTtcbn1cbiIsImltcG9ydCB7aXNJblJhbmdlfSBmcm9tICcuLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHtpc0FjdGl2ZUVsZW1lbnR9IGZyb20gJy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IHthZGREYXlzLCBhZGRNb250aHMsIGFkZFllYXJzLCBzdGFydE9mWWVhclBlcmlvZH0gZnJvbSAnLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtnb1RvUHJldk9yTmV4dCwgc3dpdGNoVmlldywgdW5mb2N1c30gZnJvbSAnLi9mdW5jdGlvbnMuanMnO1xuXG4vLyBGaW5kIHRoZSBjbG9zZXN0IGRhdGUgdGhhdCBkb2Vzbid0IG1lZXQgdGhlIGNvbmRpdGlvbiBmb3IgdW5hdmFpbGFibGUgZGF0ZVxuLy8gUmV0dXJucyB1bmRlZmluZWQgaWYgbm8gYXZhaWxhYmxlIGRhdGUgaXMgZm91bmRcbi8vIGFkZEZuOiBmdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIG5leHQgZGF0ZVxuLy8gICAtIGFyZ3M6IHRpbWUgdmFsdWUsIGFtb3VudFxuLy8gaW5jcmVhc2U6IGFtb3VudCB0byBwYXNzIHRvIGFkZEZuXG4vLyB0ZXN0Rm46IGZ1bmN0aW9uIHRvIHRlc3QgdGhlIHVuYXZhaWxhYmxpdHkgb2YgdGhlIGRhdGVcbi8vICAgLSBhcmdzOiB0aW1lIHZhbHVlOyByZXR1bjogdHJ1ZSBpZiB1bmF2YWlsYWJsZVxuZnVuY3Rpb24gZmluZE5leHRBdmFpbGFibGVPbmUoZGF0ZSwgYWRkRm4sIGluY3JlYXNlLCB0ZXN0Rm4sIG1pbiwgbWF4KSB7XG4gIGlmICghaXNJblJhbmdlKGRhdGUsIG1pbiwgbWF4KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodGVzdEZuKGRhdGUpKSB7XG4gICAgY29uc3QgbmV3RGF0ZSA9IGFkZEZuKGRhdGUsIGluY3JlYXNlKTtcbiAgICByZXR1cm4gZmluZE5leHRBdmFpbGFibGVPbmUobmV3RGF0ZSwgYWRkRm4sIGluY3JlYXNlLCB0ZXN0Rm4sIG1pbiwgbWF4KTtcbiAgfVxuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gZGlyZWN0aW9uOiAtMSAobGVmdC91cCksIDEgKHJpZ2h0L2Rvd24pXG4vLyB2ZXJ0aWNhbDogdHJ1ZSBmb3IgdXAvZG93biwgZmFsc2UgZm9yIGxlZnQvcmlnaHRcbmZ1bmN0aW9uIG1vdmVCeUFycm93S2V5KGRhdGVwaWNrZXIsIGV2LCBkaXJlY3Rpb24sIHZlcnRpY2FsKSB7XG4gIGNvbnN0IHBpY2tlciA9IGRhdGVwaWNrZXIucGlja2VyO1xuICBjb25zdCBjdXJyZW50VmlldyA9IHBpY2tlci5jdXJyZW50VmlldztcbiAgY29uc3Qgc3RlcCA9IGN1cnJlbnRWaWV3LnN0ZXAgfHwgMTtcbiAgbGV0IHZpZXdEYXRlID0gcGlja2VyLnZpZXdEYXRlO1xuICBsZXQgYWRkRm47XG4gIGxldCB0ZXN0Rm47XG4gIHN3aXRjaCAoY3VycmVudFZpZXcuaWQpIHtcbiAgICBjYXNlIDA6XG4gICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgdmlld0RhdGUgPSBhZGREYXlzKHZpZXdEYXRlLCBkaXJlY3Rpb24gKiA3KTtcbiAgICAgIH0gZWxzZSBpZiAoZXYuY3RybEtleSB8fCBldi5tZXRhS2V5KSB7XG4gICAgICAgIHZpZXdEYXRlID0gYWRkWWVhcnModmlld0RhdGUsIGRpcmVjdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWV3RGF0ZSA9IGFkZERheXModmlld0RhdGUsIGRpcmVjdGlvbik7XG4gICAgICB9XG4gICAgICBhZGRGbiA9IGFkZERheXM7XG4gICAgICB0ZXN0Rm4gPSAoZGF0ZSkgPT4gY3VycmVudFZpZXcuZGlzYWJsZWQuaW5jbHVkZXMoZGF0ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICB2aWV3RGF0ZSA9IGFkZE1vbnRocyh2aWV3RGF0ZSwgdmVydGljYWwgPyBkaXJlY3Rpb24gKiA0IDogZGlyZWN0aW9uKTtcbiAgICAgIGFkZEZuID0gYWRkTW9udGhzO1xuICAgICAgdGVzdEZuID0gKGRhdGUpID0+IHtcbiAgICAgICAgY29uc3QgZHQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgY29uc3Qge3llYXIsIGRpc2FibGVkfSA9IGN1cnJlbnRWaWV3O1xuICAgICAgICByZXR1cm4gZHQuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJiBkaXNhYmxlZC5pbmNsdWRlcyhkdC5nZXRNb250aCgpKTtcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdmlld0RhdGUgPSBhZGRZZWFycyh2aWV3RGF0ZSwgZGlyZWN0aW9uICogKHZlcnRpY2FsID8gNCA6IDEpICogc3RlcCk7XG4gICAgICBhZGRGbiA9IGFkZFllYXJzO1xuICAgICAgdGVzdEZuID0gZGF0ZSA9PiBjdXJyZW50Vmlldy5kaXNhYmxlZC5pbmNsdWRlcyhzdGFydE9mWWVhclBlcmlvZChkYXRlLCBzdGVwKSk7XG4gIH1cbiAgdmlld0RhdGUgPSBmaW5kTmV4dEF2YWlsYWJsZU9uZShcbiAgICB2aWV3RGF0ZSxcbiAgICBhZGRGbixcbiAgICBkaXJlY3Rpb24gPCAwID8gLXN0ZXAgOiBzdGVwLFxuICAgIHRlc3RGbixcbiAgICBjdXJyZW50Vmlldy5taW5EYXRlLFxuICAgIGN1cnJlbnRWaWV3Lm1heERhdGVcbiAgKTtcbiAgaWYgKHZpZXdEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwaWNrZXIuY2hhbmdlRm9jdXModmlld0RhdGUpLnJlbmRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbktleWRvd24oZGF0ZXBpY2tlciwgZXYpIHtcbiAgY29uc3Qga2V5ID0gZXYua2V5O1xuICBpZiAoa2V5ID09PSAnVGFiJykge1xuICAgIHVuZm9jdXMoZGF0ZXBpY2tlcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcGlja2VyID0gZGF0ZXBpY2tlci5waWNrZXI7XG4gIGNvbnN0IHtpZCwgaXNNaW5WaWV3fSA9IHBpY2tlci5jdXJyZW50VmlldztcbiAgaWYgKCFwaWNrZXIuYWN0aXZlKSB7XG4gICAgaWYgKGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHBpY2tlci5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgZGF0ZXBpY2tlci51cGRhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICBwaWNrZXIuc2hvdygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIGlmIChkYXRlcGlja2VyLmVkaXRNb2RlKSB7XG4gICAgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZGF0ZXBpY2tlci5leGl0RWRpdE1vZGUoe3VwZGF0ZTogdHJ1ZSwgYXV0b2hpZGU6IGRhdGVwaWNrZXIuY29uZmlnLmF1dG9oaWRlfSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBwaWNrZXIuaGlkZSgpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgIGlmIChldi5jdHJsS2V5IHx8IGV2Lm1ldGFLZXkpIHtcbiAgICAgICAgZ29Ub1ByZXZPck5leHQoZGF0ZXBpY2tlciwgLTEpO1xuICAgICAgfSBlbHNlIGlmIChldi5zaGlmdEtleSkge1xuICAgICAgICBkYXRlcGlja2VyLmVudGVyRWRpdE1vZGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW92ZUJ5QXJyb3dLZXkoZGF0ZXBpY2tlciwgZXYsIC0xLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgaWYgKGV2LmN0cmxLZXkgfHwgZXYubWV0YUtleSkge1xuICAgICAgICBnb1RvUHJldk9yTmV4dChkYXRlcGlja2VyLCAxKTtcbiAgICAgIH0gZWxzZSBpZiAoZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdmVCeUFycm93S2V5KGRhdGVwaWNrZXIsIGV2LCAxLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgaWYgKGV2LmN0cmxLZXkgfHwgZXYubWV0YUtleSkge1xuICAgICAgICBzd2l0Y2hWaWV3KGRhdGVwaWNrZXIpO1xuICAgICAgfSBlbHNlIGlmIChldi5zaGlmdEtleSkge1xuICAgICAgICBkYXRlcGlja2VyLmVudGVyRWRpdE1vZGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW92ZUJ5QXJyb3dLZXkoZGF0ZXBpY2tlciwgZXYsIC0xLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGlmIChldi5zaGlmdEtleSAmJiAhZXYuY3RybEtleSAmJiAhZXYubWV0YUtleSkge1xuICAgICAgICBkYXRlcGlja2VyLmVudGVyRWRpdE1vZGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbW92ZUJ5QXJyb3dLZXkoZGF0ZXBpY2tlciwgZXYsIDEsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAoaXNNaW5WaWV3KSB7XG4gICAgICAgIGRhdGVwaWNrZXIuc2V0RGF0ZShwaWNrZXIudmlld0RhdGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwaWNrZXIuY2hhbmdlVmlldyhpZCAtIDEpLnJlbmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICBwaWNrZXIuaGlkZSgpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAnQmFja3NwYWNlJ1xuICAgICAgICB8fCBrZXkgPT09ICdEZWxldGUnXG4gICAgICAgIHx8IChrZXkubGVuZ3RoID09PSAxICYmICFldi5jdHJsS2V5ICYmICFldi5tZXRhS2V5KVxuICAgICAgKSB7XG4gICAgICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Gb2N1cyhkYXRlcGlja2VyKSB7XG4gIGlmIChkYXRlcGlja2VyLmNvbmZpZy5zaG93T25Gb2N1cyAmJiAhZGF0ZXBpY2tlci5fc2hvd2luZykge1xuICAgIGRhdGVwaWNrZXIuc2hvdygpO1xuICB9XG59XG5cbi8vIGZvciB0aGUgcHJldmVudGlvbiBmb3IgZW50ZXJpbmcgZWRpdCBtb2RlIHdoaWxlIGdldHRpbmcgZm9jdXMgb24gY2xpY2tcbmV4cG9ydCBmdW5jdGlvbiBvbk1vdXNlZG93bihkYXRlcGlja2VyLCBldikge1xuICBjb25zdCBlbCA9IGV2LnRhcmdldDtcbiAgaWYgKGRhdGVwaWNrZXIucGlja2VyLmFjdGl2ZSB8fCBkYXRlcGlja2VyLmNvbmZpZy5zaG93T25DbGljaykge1xuICAgIGVsLl9hY3RpdmUgPSBpc0FjdGl2ZUVsZW1lbnQoZWwpO1xuICAgIGVsLl9jbGlja2luZyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGVsZXRlIGVsLl9hY3RpdmU7XG4gICAgICBkZWxldGUgZWwuX2NsaWNraW5nO1xuICAgIH0sIDIwMDApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrSW5wdXQoZGF0ZXBpY2tlciwgZXYpIHtcbiAgY29uc3QgZWwgPSBldi50YXJnZXQ7XG4gIGlmICghZWwuX2NsaWNraW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNsZWFyVGltZW91dChlbC5fY2xpY2tpbmcpO1xuICBkZWxldGUgZWwuX2NsaWNraW5nO1xuXG4gIGlmIChlbC5fYWN0aXZlKSB7XG4gICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gIH1cbiAgZGVsZXRlIGVsLl9hY3RpdmU7XG5cbiAgaWYgKGRhdGVwaWNrZXIuY29uZmlnLnNob3dPbkNsaWNrKSB7XG4gICAgZGF0ZXBpY2tlci5zaG93KCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUGFzdGUoZGF0ZXBpY2tlciwgZXYpIHtcbiAgaWYgKGV2LmNsaXBib2FyZERhdGEudHlwZXMuaW5jbHVkZXMoJ3RleHQvcGxhaW4nKSkge1xuICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICB9XG59XG4iLCJpbXBvcnQge2lzQWN0aXZlRWxlbWVudH0gZnJvbSAnLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQge2ZpbmRFbGVtZW50SW5FdmVudFBhdGh9IGZyb20gJy4uL2xpYi9ldmVudC5qcyc7XG5pbXBvcnQge3VuZm9jdXN9IGZyb20gJy4vZnVuY3Rpb25zLmpzJztcblxuLy8gZm9yIHRoZSBgZG9jdW1lbnRgIHRvIGRlbGVnYXRlIHRoZSBldmVudHMgZnJvbSBvdXRzaWRlIHRoZSBwaWNrZXIvaW5wdXQgZmllbGRcbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrT3V0c2lkZShkYXRlcGlja2VyLCBldikge1xuICBjb25zdCB7ZWxlbWVudCwgcGlja2VyfSA9IGRhdGVwaWNrZXI7XG4gIC8vIGNoZWNrIGJvdGggcGlja2VyJ3MgYW5kIGlucHV0J3MgYWN0aXZlbmVzcyB0byBtYWtlIHVwZGF0ZU9uQmx1ciB3b3JrIGluXG4gIC8vIHRoZSBjYXNlcyB3aGVyZS4uLlxuICAvLyAtIHBpY2tlciBpcyBoaWRkZW4gYnkgRVNDIGtleSBwcmVzcyDihpIgaW5wdXQgc3RheXMgZm9jdXNlZFxuICAvLyAtIGlucHV0IGlzIHVuZm9jdXNlZCBieSBjbG9zaW5nIG1vYmlsZSBrZXlib2FyZCDihpIgcGlrZXIgaXMga2VwdCBzaG93blxuICBpZiAoIXBpY2tlci5hY3RpdmUgJiYgIWlzQWN0aXZlRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwaWNrZXJFbGVtID0gcGlja2VyLmVsZW1lbnQ7XG4gIGlmIChmaW5kRWxlbWVudEluRXZlbnRQYXRoKGV2LCBlbCA9PiBlbCA9PT0gZWxlbWVudCB8fCBlbCA9PT0gcGlja2VyRWxlbSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdW5mb2N1cyhkYXRlcGlja2VyKTtcbn1cbiIsImltcG9ydCB7dG9kYXksIGFkZE1vbnRocywgYWRkWWVhcnN9IGZyb20gJy4uL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7ZmluZEVsZW1lbnRJbkV2ZW50UGF0aH0gZnJvbSAnLi4vbGliL2V2ZW50LmpzJztcbmltcG9ydCB7Z29Ub1ByZXZPck5leHQsIHN3aXRjaFZpZXd9IGZyb20gJy4vZnVuY3Rpb25zLmpzJztcblxuZnVuY3Rpb24gZ29Ub1NlbGVjdGVkTW9udGhPclllYXIoZGF0ZXBpY2tlciwgc2VsZWN0aW9uKSB7XG4gIGNvbnN0IHBpY2tlciA9IGRhdGVwaWNrZXIucGlja2VyO1xuICBjb25zdCB2aWV3RGF0ZSA9IG5ldyBEYXRlKHBpY2tlci52aWV3RGF0ZSk7XG4gIGNvbnN0IHZpZXdJZCA9IHBpY2tlci5jdXJyZW50Vmlldy5pZDtcbiAgY29uc3QgbmV3RGF0ZSA9IHZpZXdJZCA9PT0gMVxuICAgID8gYWRkTW9udGhzKHZpZXdEYXRlLCBzZWxlY3Rpb24gLSB2aWV3RGF0ZS5nZXRNb250aCgpKVxuICAgIDogYWRkWWVhcnModmlld0RhdGUsIHNlbGVjdGlvbiAtIHZpZXdEYXRlLmdldEZ1bGxZZWFyKCkpO1xuXG4gIHBpY2tlci5jaGFuZ2VGb2N1cyhuZXdEYXRlKS5jaGFuZ2VWaWV3KHZpZXdJZCAtIDEpLnJlbmRlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja1RvZGF5QnRuKGRhdGVwaWNrZXIpIHtcbiAgY29uc3QgcGlja2VyID0gZGF0ZXBpY2tlci5waWNrZXI7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gdG9kYXkoKTtcbiAgaWYgKGRhdGVwaWNrZXIuY29uZmlnLnRvZGF5QnRuTW9kZSA9PT0gMSkge1xuICAgIGlmIChkYXRlcGlja2VyLmNvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgZGF0ZXBpY2tlci5zZXREYXRlKGN1cnJlbnREYXRlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGF0ZXBpY2tlci5zZXREYXRlKGN1cnJlbnREYXRlLCB7cmVuZGVyOiBmYWxzZX0pO1xuICAgIHBpY2tlci51cGRhdGUoKTtcbiAgfVxuICBpZiAocGlja2VyLnZpZXdEYXRlICE9PSBjdXJyZW50RGF0ZSkge1xuICAgIHBpY2tlci5jaGFuZ2VGb2N1cyhjdXJyZW50RGF0ZSk7XG4gIH1cbiAgcGlja2VyLmNoYW5nZVZpZXcoMCkucmVuZGVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrQ2xlYXJCdG4oZGF0ZXBpY2tlcikge1xuICBkYXRlcGlja2VyLnNldERhdGUoe2NsZWFyOiB0cnVlfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrVmlld1N3aXRjaChkYXRlcGlja2VyKSB7XG4gIHN3aXRjaFZpZXcoZGF0ZXBpY2tlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrUHJldkJ0bihkYXRlcGlja2VyKSB7XG4gIGdvVG9QcmV2T3JOZXh0KGRhdGVwaWNrZXIsIC0xKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tOZXh0QnRuKGRhdGVwaWNrZXIpIHtcbiAgZ29Ub1ByZXZPck5leHQoZGF0ZXBpY2tlciwgMSk7XG59XG5cbi8vIEZvciB0aGUgcGlja2VyJ3MgbWFpbiBibG9jayB0byBkZWxlZ2V0ZSB0aGUgZXZlbnRzIGZyb20gYGRhdGVwaWNrZXItY2VsbGBzXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja1ZpZXcoZGF0ZXBpY2tlciwgZXYpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZmluZEVsZW1lbnRJbkV2ZW50UGF0aChldiwgJy5kYXRlcGlja2VyLWNlbGwnKTtcbiAgaWYgKCF0YXJnZXQgfHwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHtpZCwgaXNNaW5WaWV3fSA9IGRhdGVwaWNrZXIucGlja2VyLmN1cnJlbnRWaWV3O1xuICBpZiAoaXNNaW5WaWV3KSB7XG4gICAgZGF0ZXBpY2tlci5zZXREYXRlKE51bWJlcih0YXJnZXQuZGF0YXNldC5kYXRlKSk7XG4gIH0gZWxzZSBpZiAoaWQgPT09IDEpIHtcbiAgICBnb1RvU2VsZWN0ZWRNb250aE9yWWVhcihkYXRlcGlja2VyLCBOdW1iZXIodGFyZ2V0LmRhdGFzZXQubW9udGgpKTtcbiAgfSBlbHNlIHtcbiAgICBnb1RvU2VsZWN0ZWRNb250aE9yWWVhcihkYXRlcGlja2VyLCBOdW1iZXIodGFyZ2V0LmRhdGFzZXQueWVhcikpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk1vdXNlZG93blBpY2tlcihldikge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xufVxuIiwiLy8gZGVmYXVsdCBsb2NhbGVzXG5leHBvcnQgY29uc3QgbG9jYWxlcyA9IHtcbiAgZW46IHtcbiAgICBkYXlzOiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXSxcbiAgICBkYXlzU2hvcnQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgICBkYXlzTWluOiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgICBtb250aHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuICAgIG1vbnRoc1Nob3J0OiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl0sXG4gICAgdG9kYXk6IFwiVG9kYXlcIixcbiAgICBjbGVhcjogXCJDbGVhclwiLFxuICAgIHRpdGxlRm9ybWF0OiBcIk1NIHlcIlxuICB9XG59O1xuIiwiaW1wb3J0IHtzdHJpcFRpbWUsIHRvZGF5fSBmcm9tICcuL2RhdGUuanMnO1xuaW1wb3J0IHtsYXN0SXRlbU9mfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLy8gcGF0dGVybiBmb3IgZm9ybWF0IHBhcnRzXG5leHBvcnQgY29uc3QgcmVGb3JtYXRUb2tlbnMgPSAvZGQ/fEREP3xtbT98TU0/fHl5Pyg/Onl5KT8vO1xuLy8gcGF0dGVybiBmb3Igbm9uIGRhdGUgcGFydHNcbmV4cG9ydCBjb25zdCByZU5vbkRhdGVQYXJ0cyA9IC9bXFxzIS0vOi1AWy1gey1+5bm05pyI5pelXSsvO1xuLy8gY2FjaGUgZm9yIHBlcnNlZCBmb3JtYXRzXG5sZXQga25vd25Gb3JtYXRzID0ge307XG4vLyBwYXJzZSBmdW50aW9ucyBmb3IgZGF0ZSBwYXJ0c1xuY29uc3QgcGFyc2VGbnMgPSB7XG4gIHkoZGF0ZSwgeWVhcikge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS5zZXRGdWxsWWVhcihwYXJzZUludCh5ZWFyLCAxMCkpO1xuICB9LFxuICBtKGRhdGUsIG1vbnRoLCBsb2NhbGUpIHtcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgbGV0IG1vbnRoSW5kZXggPSBwYXJzZUludChtb250aCwgMTApIC0gMTtcblxuICAgIGlmIChpc05hTihtb250aEluZGV4KSkge1xuICAgICAgaWYgKCFtb250aCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtb250aE5hbWUgPSBtb250aC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgY29tcGFyZU5hbWVzID0gbmFtZSA9PiBuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChtb250aE5hbWUpO1xuICAgICAgLy8gY29tcGFyZSB3aXRoIGJvdGggc2hvcnQgYW5kIGZ1bGwgbmFtZXMgYmVjYXVzZSBzb21lIGxvY2FsZXMgaGF2ZSBwZXJpb2RzXG4gICAgICAvLyBpbiB0aGUgc2hvcnQgbmFtZXMgKG5vdCBlcXVhbCB0byB0aGUgZmlyc3QgWCBsZXR0ZXJzIG9mIHRoZSBmdWxsIG5hbWVzKVxuICAgICAgbW9udGhJbmRleCA9IGxvY2FsZS5tb250aHNTaG9ydC5maW5kSW5kZXgoY29tcGFyZU5hbWVzKTtcbiAgICAgIGlmIChtb250aEluZGV4IDwgMCkge1xuICAgICAgICBtb250aEluZGV4ID0gbG9jYWxlLm1vbnRocy5maW5kSW5kZXgoY29tcGFyZU5hbWVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChtb250aEluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld0RhdGUuc2V0TW9udGgobW9udGhJbmRleCk7XG4gICAgcmV0dXJuIG5ld0RhdGUuZ2V0TW9udGgoKSAhPT0gbm9ybWFsaXplTW9udGgobW9udGhJbmRleClcbiAgICAgID8gbmV3RGF0ZS5zZXREYXRlKDApXG4gICAgICA6IG5ld0RhdGUuZ2V0VGltZSgpO1xuICB9LFxuICBkKGRhdGUsIGRheSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS5zZXREYXRlKHBhcnNlSW50KGRheSwgMTApKTtcbiAgfSxcbn07XG4vLyBmb3JtYXQgZnVuY3Rpb25zIGZvciBkYXRlIHBhcnRzXG5jb25zdCBmb3JtYXRGbnMgPSB7XG4gIGQoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldERhdGUoKTtcbiAgfSxcbiAgZGQoZGF0ZSkge1xuICAgIHJldHVybiBwYWRaZXJvKGRhdGUuZ2V0RGF0ZSgpLCAyKTtcbiAgfSxcbiAgRChkYXRlLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmRheXNTaG9ydFtkYXRlLmdldERheSgpXTtcbiAgfSxcbiAgREQoZGF0ZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5kYXlzW2RhdGUuZ2V0RGF5KCldO1xuICB9LFxuICBtKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgfSxcbiAgbW0oZGF0ZSkge1xuICAgIHJldHVybiBwYWRaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpO1xuICB9LFxuICBNKGRhdGUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUubW9udGhzU2hvcnRbZGF0ZS5nZXRNb250aCgpXTtcbiAgfSxcbiAgTU0oZGF0ZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgfSxcbiAgeShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgfSxcbiAgeXkoZGF0ZSkge1xuICAgIHJldHVybiBwYWRaZXJvKGRhdGUuZ2V0RnVsbFllYXIoKSwgMikuc2xpY2UoLTIpO1xuICB9LFxuICB5eXl5KGRhdGUpIHtcbiAgICByZXR1cm4gcGFkWmVybyhkYXRlLmdldEZ1bGxZZWFyKCksIDQpO1xuICB9LFxufTtcblxuLy8gZ2V0IG1vbnRoIGluZGV4IGluIG5vcm1hbCByYW5nZSAoMCAtIDExKSBmcm9tIGFueSBudW1iZXJcbmZ1bmN0aW9uIG5vcm1hbGl6ZU1vbnRoKG1vbnRoSW5kZXgpIHtcbiAgcmV0dXJuIG1vbnRoSW5kZXggPiAtMSA/IG1vbnRoSW5kZXggJSAxMiA6IG5vcm1hbGl6ZU1vbnRoKG1vbnRoSW5kZXggKyAxMik7XG59XG5cbmZ1bmN0aW9uIHBhZFplcm8obnVtLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG51bS50b1N0cmluZygpLnBhZFN0YXJ0KGxlbmd0aCwgJzAnKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VGb3JtYXRTdHJpbmcoZm9ybWF0KSB7XG4gIGlmICh0eXBlb2YgZm9ybWF0ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBmb3JtYXQuXCIpO1xuICB9XG4gIGlmIChmb3JtYXQgaW4ga25vd25Gb3JtYXRzKSB7XG4gICAgcmV0dXJuIGtub3duRm9ybWF0c1tmb3JtYXRdO1xuICB9XG5cbiAgLy8gc3ByaXQgdGhlIGZvcm1hdCBzdHJpbmcgaW50byBwYXJ0cyBhbmQgc2VwcmF0b3JzXG4gIGNvbnN0IHNlcGFyYXRvcnMgPSBmb3JtYXQuc3BsaXQocmVGb3JtYXRUb2tlbnMpO1xuICBjb25zdCBwYXJ0cyA9IGZvcm1hdC5tYXRjaChuZXcgUmVnRXhwKHJlRm9ybWF0VG9rZW5zLCAnZycpKTtcbiAgaWYgKHNlcGFyYXRvcnMubGVuZ3RoID09PSAwIHx8ICFwYXJ0cykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBmb3JtYXQuXCIpO1xuICB9XG5cbiAgLy8gY29sbGVjdCBmb3JtYXQgZnVuY3Rpb25zIHVzZWQgaW4gdGhlIGZvcm1hdFxuICBjb25zdCBwYXJ0Rm9ybWF0dGVycyA9IHBhcnRzLm1hcCh0b2tlbiA9PiBmb3JtYXRGbnNbdG9rZW5dKTtcblxuICAvLyBjb2xsZWN0IHBhcnNlIGZ1bmN0aW9uIGtleXMgdXNlZCBpbiB0aGUgZm9ybWF0XG4gIC8vIGl0ZXJhdGUgb3ZlciBwYXJzZUZucycga2V5cyBpbiBvcmRlciB0byBrZWVwIHRoZSBvcmRlciBvZiB0aGUga2V5cy5cbiAgY29uc3QgcGFydFBhcnNlcktleXMgPSBPYmplY3Qua2V5cyhwYXJzZUZucykucmVkdWNlKChrZXlzLCBrZXkpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IHBhcnRzLmZpbmQocGFydCA9PiBwYXJ0WzBdICE9PSAnRCcgJiYgcGFydFswXS50b0xvd2VyQ2FzZSgpID09PSBrZXkpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGtub3duRm9ybWF0c1tmb3JtYXRdID0ge1xuICAgIHBhcnNlcihkYXRlU3RyLCBsb2NhbGUpIHtcbiAgICAgIGNvbnN0IGRhdGVQYXJ0cyA9IGRhdGVTdHIuc3BsaXQocmVOb25EYXRlUGFydHMpLnJlZHVjZSgoZHRQYXJ0cywgcGFydCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHBhcnQubGVuZ3RoID4gMCAmJiBwYXJ0c1tpbmRleF0pIHtcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IHBhcnRzW2luZGV4XVswXTtcbiAgICAgICAgICBpZiAodG9rZW4gPT09ICdNJykge1xuICAgICAgICAgICAgZHRQYXJ0cy5tID0gcGFydDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuICE9PSAnRCcpIHtcbiAgICAgICAgICAgIGR0UGFydHNbdG9rZW5dID0gcGFydDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGR0UGFydHM7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIC8vIGl0ZXJhdGUgb3ZlciBwYXJ0UGFyc2Vya2V5cyBzbyB0aGF0IHRoZSBwYXJzaW5nIGlzIG1hZGUgaW4gdGhlIG9kZXJcbiAgICAgIC8vIG9mIHllYXIsIG1vbnRoIGFuZCBkYXkgdG8gcHJldmVudCB0aGUgZGF5IHBhcnNlciBmcm9tIGNvcnJlY3RpbmcgbGFzdFxuICAgICAgLy8gZGF5IG9mIG1vbnRoIHdyb25nbHlcbiAgICAgIHJldHVybiBwYXJ0UGFyc2VyS2V5cy5yZWR1Y2UoKG9yaWdEYXRlLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IHBhcnNlRm5zW2tleV0ob3JpZ0RhdGUsIGRhdGVQYXJ0c1trZXldLCBsb2NhbGUpO1xuICAgICAgICAvLyBpbmdub3JlIHRoZSBwYXJ0IGZhaWxlZCB0byBwYXJzZVxuICAgICAgICByZXR1cm4gaXNOYU4obmV3RGF0ZSkgPyBvcmlnRGF0ZSA6IG5ld0RhdGU7XG4gICAgICB9LCB0b2RheSgpKTtcbiAgICB9LFxuICAgIGZvcm1hdHRlcihkYXRlLCBsb2NhbGUpIHtcbiAgICAgIGxldCBkYXRlU3RyID0gcGFydEZvcm1hdHRlcnMucmVkdWNlKChzdHIsIGZuLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gc3RyICs9IGAke3NlcGFyYXRvcnNbaW5kZXhdfSR7Zm4oZGF0ZSwgbG9jYWxlKX1gO1xuICAgICAgfSwgJycpO1xuICAgICAgLy8gc2VwYXJhdG9ycycgbGVuZ3RoIGlzIGFsd2F5cyBwYXJ0cycgbGVuZ3RoICsgMSxcbiAgICAgIHJldHVybiBkYXRlU3RyICs9IGxhc3RJdGVtT2Yoc2VwYXJhdG9ycyk7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyLCBmb3JtYXQsIGxvY2FsZSkge1xuICBpZiAoZGF0ZVN0ciBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGRhdGVTdHIgPT09ICdudW1iZXInKSB7XG4gICAgY29uc3QgZGF0ZSA9IHN0cmlwVGltZShkYXRlU3RyKTtcbiAgICByZXR1cm4gaXNOYU4oZGF0ZSkgPyB1bmRlZmluZWQgOiBkYXRlO1xuICB9XG4gIGlmICghZGF0ZVN0cikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKGRhdGVTdHIgPT09ICd0b2RheScpIHtcbiAgICByZXR1cm4gdG9kYXkoKTtcbiAgfVxuXG4gIGlmIChmb3JtYXQgJiYgZm9ybWF0LnRvVmFsdWUpIHtcbiAgICBjb25zdCBkYXRlID0gZm9ybWF0LnRvVmFsdWUoZGF0ZVN0ciwgZm9ybWF0LCBsb2NhbGUpO1xuICAgIHJldHVybiBpc05hTihkYXRlKSA/IHVuZGVmaW5lZCA6IHN0cmlwVGltZShkYXRlKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUZvcm1hdFN0cmluZyhmb3JtYXQpLnBhcnNlcihkYXRlU3RyLCBsb2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQsIGxvY2FsZSkge1xuICBpZiAoaXNOYU4oZGF0ZSkgfHwgKCFkYXRlICYmIGRhdGUgIT09IDApKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgZGF0ZU9iaiA9IHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJyA/IG5ldyBEYXRlKGRhdGUpIDogZGF0ZTtcblxuICBpZiAoZm9ybWF0LnRvRGlzcGxheSkge1xuICAgIHJldHVybiBmb3JtYXQudG9EaXNwbGF5KGRhdGVPYmosIGZvcm1hdCwgbG9jYWxlKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUZvcm1hdFN0cmluZyhmb3JtYXQpLmZvcm1hdHRlcihkYXRlT2JqLCBsb2NhbGUpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHN0cmlwVGltZSh0aW1lVmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVWYWx1ZSkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheSgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59XG5cbi8vIEdldCB0aGUgdGltZSB2YWx1ZSBvZiB0aGUgc3RhcnQgb2YgZ2l2ZW4gZGF0ZSBvciB5ZWFyLCBtb250aCBhbmQgZGF5XG5leHBvcnQgZnVuY3Rpb24gZGF0ZVZhbHVlKC4uLmFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB0b2RheSgpO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBzdHJpcFRpbWUoYXJnc1swXSk7XG4gIH1cblxuICAvLyB1c2Ugc2V0RnVsbFllYXIoKSB0byBrZWVwIDItZGlnaXQgeWVhciBmcm9tIGJlaW5nIG1hcHBlZCB0byAxOTAwLTE5OTlcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKDApO1xuICBuZXdEYXRlLnNldEZ1bGxZZWFyKC4uLmFyZ3MpO1xuICByZXR1cm4gbmV3RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgYW1vdW50KSB7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgcmV0dXJuIG5ld0RhdGUuc2V0RGF0ZShuZXdEYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRXZWVrcyhkYXRlLCBhbW91bnQpIHtcbiAgcmV0dXJuIGFkZERheXMoZGF0ZSwgYW1vdW50ICogNyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNb250aHMoZGF0ZSwgYW1vdW50KSB7XG4gIC8vIElmIHRoZSBkYXkgb2YgdGhlIGRhdGUgaXMgbm90IGluIHRoZSBuZXcgbW9udGgsIHRoZSBsYXN0IGRheSBvZiB0aGUgbmV3XG4gIC8vIG1vbnRoIHdpbGwgYmUgcmV0dXJuZWQuIGUuZy4gSmFuIDMxICsgMSBtb250aCDihpIgRmViIDI4IChub3QgTWFyIDAzKVxuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIGNvbnN0IG1vbnRoc1RvU2V0ID0gbmV3RGF0ZS5nZXRNb250aCgpICsgYW1vdW50O1xuICBsZXQgZXhwZWN0ZWRNb250aCA9IG1vbnRoc1RvU2V0ICUgMTI7XG4gIGlmIChleHBlY3RlZE1vbnRoIDwgMCkge1xuICAgIGV4cGVjdGVkTW9udGggKz0gMTI7XG4gIH1cblxuICBjb25zdCB0aW1lID0gbmV3RGF0ZS5zZXRNb250aChtb250aHNUb1NldCk7XG4gIHJldHVybiBuZXdEYXRlLmdldE1vbnRoKCkgIT09IGV4cGVjdGVkTW9udGggPyBuZXdEYXRlLnNldERhdGUoMCkgOiB0aW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkWWVhcnMoZGF0ZSwgYW1vdW50KSB7XG4gIC8vIElmIHRoZSBkYXRlIGlzIEZlYiAyOSBhbmQgdGhlIG5ldyB5ZWFyIGlzIG5vdCBhIGxlYXAgeWVhciwgRmViIDI4IG9mIHRoZVxuICAvLyBuZXcgeWVhciB3aWxsIGJlIHJldHVybmVkLlxuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIGNvbnN0IGV4cGVjdGVkTW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCk7XG4gIGNvbnN0IHRpbWUgPSBuZXdEYXRlLnNldEZ1bGxZZWFyKG5ld0RhdGUuZ2V0RnVsbFllYXIoKSArIGFtb3VudCk7XG4gIHJldHVybiBleHBlY3RlZE1vbnRoID09PSAxICYmIG5ld0RhdGUuZ2V0TW9udGgoKSA9PT0gMiA/IG5ld0RhdGUuc2V0RGF0ZSgwKSA6IHRpbWU7XG59XG5cbi8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0dHdlbiAyIGRheXMgb2YgdGhlIHdlZWtcbmZ1bmN0aW9uIGRheURpZmYoZGF5LCBmcm9tKSB7XG4gIHJldHVybiAoZGF5IC0gZnJvbSArIDcpICUgNztcbn1cblxuLy8gR2V0IHRoZSBkYXRlIG9mIHRoZSBzcGVjaWZpZWQgZGF5IG9mIHRoZSB3ZWVrIG9mIGdpdmVuIGJhc2UgZGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIGRheU9mVGhlV2Vla09mKGJhc2VEYXRlLCBkYXlPZldlZWssIHdlZWtTdGFydCA9IDApIHtcbiAgY29uc3QgYmFzZURheSA9IG5ldyBEYXRlKGJhc2VEYXRlKS5nZXREYXkoKTtcbiAgcmV0dXJuIGFkZERheXMoYmFzZURhdGUsIGRheURpZmYoZGF5T2ZXZWVrLCB3ZWVrU3RhcnQpIC0gZGF5RGlmZihiYXNlRGF5LCB3ZWVrU3RhcnQpKTtcbn1cblxuLy8gR2V0IHRoZSBJU08gd2VlayBvZiBhIGRhdGVcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUpIHtcbiAgLy8gc3RhcnQgb2YgSVNPIHdlZWsgaXMgTW9uZGF5XG4gIGNvbnN0IHRodU9mVGhlV2VlayA9IGRheU9mVGhlV2Vla09mKGRhdGUsIDQsIDEpO1xuICAvLyAxc3Qgd2VlayA9PSB0aGUgd2VlayB3aGVyZSB0aGUgNHRoIG9mIEphbnVhcnkgaXMgaW5cbiAgY29uc3QgZmlyc3RUaHUgPSBkYXlPZlRoZVdlZWtPZihuZXcgRGF0ZSh0aHVPZlRoZVdlZWspLnNldE1vbnRoKDAsIDQpLCA0LCAxKTtcbiAgcmV0dXJuIE1hdGgucm91bmQoKHRodU9mVGhlV2VlayAtIGZpcnN0VGh1KSAvIDYwNDgwMDAwMCkgKyAxO1xufVxuXG4vLyBHZXQgdGhlIHN0YXJ0IHllYXIgb2YgdGhlIHBlcmlvZCBvZiB5ZWFycyB0aGF0IGluY2x1ZGVzIGdpdmVuIGRhdGVcbi8vIHllYXJzOiBsZW5ndGggb2YgdGhlIHllYXIgcGVyaW9kXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZlllYXJQZXJpb2QoZGF0ZSwgeWVhcnMpIHtcbiAgLyogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9ZZWFyX3plcm8jSVNPXzg2MDEgKi9cbiAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XG4gIHJldHVybiBNYXRoLmZsb29yKHllYXIgLyB5ZWFycykgKiB5ZWFycztcbn1cblxuLy8gQ29udmVydCBkYXRlIHRvIHRoZSBmaXJzdC9sYXN0IGRhdGUgb2YgdGhlIG1vbnRoL3llYXIgb2YgdGhlIGRhdGVcbmV4cG9ydCBmdW5jdGlvbiByZWd1bGFyaXplRGF0ZShkYXRlLCB0aW1lU3BhbiwgdXNlTGFzdERhdGUpIHtcbiAgaWYgKHRpbWVTcGFuICE9PSAxICYmIHRpbWVTcGFuICE9PSAyKSB7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBpZiAodGltZVNwYW4gPT09IDEpIHtcbiAgICB1c2VMYXN0RGF0ZVxuICAgICAgPyBuZXdEYXRlLnNldE1vbnRoKG5ld0RhdGUuZ2V0TW9udGgoKSArIDEsIDApXG4gICAgICA6IG5ld0RhdGUuc2V0RGF0ZSgxKTtcbiAgfSBlbHNlIHtcbiAgICB1c2VMYXN0RGF0ZVxuICAgICAgPyBuZXdEYXRlLnNldEZ1bGxZZWFyKG5ld0RhdGUuZ2V0RnVsbFllYXIoKSArIDEsIDAsIDApXG4gICAgICA6IG5ld0RhdGUuc2V0TW9udGgoMCwgMSk7XG4gIH1cbiAgcmV0dXJuIG5ld0RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59XG4iLCJjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUhUTUwoaHRtbCkge1xuICByZXR1cm4gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50KGVsKSB7XG4gIHJldHVybiBlbC5wYXJlbnRFbGVtZW50XG4gICAgfHwgKGVsLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gZWwucGFyZW50Tm9kZS5ob3N0IDogdW5kZWZpbmVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWN0aXZlRWxlbWVudChlbCkge1xuICByZXR1cm4gZWwuZ2V0Um9vdE5vZGUoKS5hY3RpdmVFbGVtZW50ID09PSBlbDtcbn1cblxuLy8gZXF1aXZhbGVudCB0byBqUXVlcnkncyA6dmlzYmxlXG5leHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsKSB7XG4gIHJldHVybiAhIShlbC5vZmZzZXRXaWR0aCB8fCBlbC5vZmZzZXRIZWlnaHQgfHwgZWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUVsZW1lbnQoZWwpIHtcbiAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBiYWNrIHVwIHRoZSBleGlzdGluZyBkaXNwbGF5IHNldHRpbmcgaW4gZGF0YS1zdHlsZS1kaXNwbGF5XG4gIGlmIChlbC5zdHlsZS5kaXNwbGF5KSB7XG4gICAgZWwuZGF0YXNldC5zdHlsZURpc3BsYXkgPSBlbC5zdHlsZS5kaXNwbGF5O1xuICB9XG4gIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RWxlbWVudChlbCkge1xuICBpZiAoZWwuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChlbC5kYXRhc2V0LnN0eWxlRGlzcGxheSkge1xuICAgIC8vIHJlc3RvcmUgYmFja2VkLXVwIGRpc3BheSBwcm9wZXJ0eVxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBlbC5kYXRhc2V0LnN0eWxlRGlzcGxheTtcbiAgICBkZWxldGUgZWwuZGF0YXNldC5zdHlsZURpc3BsYXk7XG4gIH0gZWxzZSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eUNoaWxkTm9kZXMoZWwpIHtcbiAgaWYgKGVsLmZpcnN0Q2hpbGQpIHtcbiAgICBlbC5yZW1vdmVDaGlsZChlbC5maXJzdENoaWxkKTtcbiAgICBlbXB0eUNoaWxkTm9kZXMoZWwpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2hpbGROb2RlcyhlbCwgbmV3Q2hpbGROb2Rlcykge1xuICBlbXB0eUNoaWxkTm9kZXMoZWwpO1xuICBpZiAobmV3Q2hpbGROb2RlcyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICBlbC5hcHBlbmRDaGlsZChuZXdDaGlsZE5vZGVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbmV3Q2hpbGROb2RlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBlbC5hcHBlbmRDaGlsZChwYXJzZUhUTUwobmV3Q2hpbGROb2RlcykpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuZXdDaGlsZE5vZGVzLmZvckVhY2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICBuZXdDaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBsaXN0ZW5lclJlZ2lzdHJ5ID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHthZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyfSA9IEV2ZW50VGFyZ2V0LnByb3RvdHlwZTtcblxuLy8gUmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXJzIHRvIGEga2V5IG9iamVjdFxuLy8gbGlzdGVuZXJzOiBhcnJheSBvZiBsaXN0ZW5lciBkZWZpbml0aW9ucztcbi8vICAgLSBlYWNoIGRlZmluaXRpb24gbXVzdCBiZSBhIGZsYXQgYXJyYXkgb2YgZXZlbnQgdGFyZ2V0IGFuZCB0aGUgYXJndW1lbnRzXG4vLyAgICAgdXNlZCB0byBjYWxsIGFkZEV2ZW50TGlzdGVuZXIoKSBvbiB0aGUgdGFyZ2V0XG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcnMoa2V5T2JqLCBsaXN0ZW5lcnMpIHtcbiAgbGV0IHJlZ2lzdGVyZWQgPSBsaXN0ZW5lclJlZ2lzdHJ5LmdldChrZXlPYmopO1xuICBpZiAoIXJlZ2lzdGVyZWQpIHtcbiAgICByZWdpc3RlcmVkID0gW107XG4gICAgbGlzdGVuZXJSZWdpc3RyeS5zZXQoa2V5T2JqLCByZWdpc3RlcmVkKTtcbiAgfVxuICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICBhZGRFdmVudExpc3RlbmVyLmNhbGwoLi4ubGlzdGVuZXIpO1xuICAgIHJlZ2lzdGVyZWQucHVzaChsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3Rlckxpc3RlbmVycyhrZXlPYmopIHtcbiAgbGV0IGxpc3RlbmVycyA9IGxpc3RlbmVyUmVnaXN0cnkuZ2V0KGtleU9iaik7XG4gIGlmICghbGlzdGVuZXJzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIuY2FsbCguLi5saXN0ZW5lcik7XG4gIH0pO1xuICBsaXN0ZW5lclJlZ2lzdHJ5LmRlbGV0ZShrZXlPYmopO1xufVxuXG4vLyBFdmVudC5jb21wb3NlZFBhdGgoKSBwb2x5ZmlsbCBmb3IgRWRnZVxuLy8gYmFzZWQgb24gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20va2xlaW5mcmV1bmQvZTk3ODdkNzM3NzZjMGUzNzUwZGNmY2RjODlmMTAwZWNcbmlmICghRXZlbnQucHJvdG90eXBlLmNvbXBvc2VkUGF0aCkge1xuICBjb25zdCBnZXRDb21wb3NlZFBhdGggPSAobm9kZSwgcGF0aCA9IFtdKSA9PiB7XG4gICAgcGF0aC5wdXNoKG5vZGUpO1xuXG4gICAgbGV0IHBhcmVudDtcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfSBlbHNlIGlmIChub2RlLmhvc3QpIHsgLy8gU2hhZG93Um9vdFxuICAgICAgcGFyZW50ID0gbm9kZS5ob3N0O1xuICAgIH0gZWxzZSBpZiAobm9kZS5kZWZhdWx0VmlldykgeyAgLy8gRG9jdW1lbnRcbiAgICAgIHBhcmVudCA9IG5vZGUuZGVmYXVsdFZpZXc7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQgPyBnZXRDb21wb3NlZFBhdGgocGFyZW50LCBwYXRoKSA6IHBhdGg7XG4gIH07XG5cbiAgRXZlbnQucHJvdG90eXBlLmNvbXBvc2VkUGF0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0Q29tcG9zZWRQYXRoKHRoaXMudGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEZyb21QYXRoKHBhdGgsIGNyaXRlcmlhLCBjdXJyZW50VGFyZ2V0KSB7XG4gIGNvbnN0IFtub2RlLCAuLi5yZXN0XSA9IHBhdGg7XG4gIGlmIChjcml0ZXJpYShub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG4gIGlmIChub2RlID09PSBjdXJyZW50VGFyZ2V0IHx8IG5vZGUudGFnTmFtZSA9PT0gJ0hUTUwnIHx8IHJlc3QubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gc3RvcCB3aGVuIHJlYWNoaW5nIGN1cnJlbnRUYXJnZXQgb3IgPGh0bWw+XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBmaW5kRnJvbVBhdGgocmVzdCwgY3JpdGVyaWEsIGN1cnJlbnRUYXJnZXQpO1xufVxuXG4vLyBTZWFyY2ggZm9yIHRoZSBhY3R1YWwgdGFyZ2V0IG9mIGEgZGVsZWdhdGVkIGV2ZW50XG5leHBvcnQgZnVuY3Rpb24gZmluZEVsZW1lbnRJbkV2ZW50UGF0aChldiwgc2VsZWN0b3IpIHtcbiAgY29uc3QgY3JpdGVyaWEgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbidcbiAgICA/IHNlbGVjdG9yXG4gICAgOiBlbCA9PiBlbCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIHJldHVybiBmaW5kRnJvbVBhdGgoZXYuY29tcG9zZWRQYXRoKCksIGNyaXRlcmlhLCBldi5jdXJyZW50VGFyZ2V0KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdEl0ZW1PZihhcnIpIHtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59XG5cbi8vIHB1c2ggb25seSB0aGUgaXRlbXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheVxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hVbmlxdWUoYXJyLCAuLi5pdGVtcykge1xuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGFyci5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcnIucHVzaChpdGVtKTtcbiAgfSk7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0ciwgc2VwYXJhdG9yKSB7XG4gIC8vIGNvbnZlcnQgZW1wdHkgc3RyaW5nIHRvIGFuIGVtcHR5IGFycmF5XG4gIHJldHVybiBzdHIgPyBzdHIuc3BsaXQoc2VwYXJhdG9yKSA6IFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJblJhbmdlKHRlc3RWYWwsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IG1pbk9LID0gbWluID09PSB1bmRlZmluZWQgfHwgdGVzdFZhbCA+PSBtaW47XG4gIGNvbnN0IG1heE9LID0gbWF4ID09PSB1bmRlZmluZWQgfHwgdGVzdFZhbCA8PSBtYXg7XG4gIHJldHVybiBtaW5PSyAmJiBtYXhPSztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbWl0VG9SYW5nZSh2YWwsIG1pbiwgbWF4KSB7XG4gIGlmICh2YWwgPCBtaW4pIHtcbiAgICByZXR1cm4gbWluO1xuICB9XG4gIGlmICh2YWwgPiBtYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIHJldHVybiB2YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWdSZXBlYXQodGFnTmFtZSwgcmVwZWF0LCBhdHRyaWJ1dGVzID0ge30sIGluZGV4ID0gMCwgaHRtbCA9ICcnKSB7XG4gIGNvbnN0IG9wZW5UYWdTcmMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5yZWR1Y2UoKHNyYywgYXR0cikgPT4ge1xuICAgIGxldCB2YWwgPSBhdHRyaWJ1dGVzW2F0dHJdO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWwgPSB2YWwoaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gYCR7c3JjfSAke2F0dHJ9PVwiJHt2YWx9XCJgO1xuICB9LCB0YWdOYW1lKTtcbiAgaHRtbCArPSBgPCR7b3BlblRhZ1NyY30+PC8ke3RhZ05hbWV9PmA7XG5cbiAgY29uc3QgbmV4dCA9IGluZGV4ICsgMTtcbiAgcmV0dXJuIG5leHQgPCByZXBlYXRcbiAgICA/IGNyZWF0ZVRhZ1JlcGVhdCh0YWdOYW1lLCByZXBlYXQsIGF0dHJpYnV0ZXMsIG5leHQsIGh0bWwpXG4gICAgOiBodG1sO1xufVxuXG4vLyBSZW1vdmUgdGhlIHNwYWNpbmcgc3Vycm91bmRpbmcgdGFncyBmb3IgSFRNTCBwYXJzZXIgbm90IHRvIGNyZWF0ZSB0ZXh0IG5vZGVzXG4vLyBiZWZvcmUvYWZ0ZXIgZWxlbWVudHNcbmV4cG9ydCBmdW5jdGlvbiBvcHRpbWl6ZVRlbXBsYXRlSFRNTChodG1sKSB7XG4gIHJldHVybiBodG1sLnJlcGxhY2UoLz5cXHMrL2csICc+JykucmVwbGFjZSgvXFxzKzwvLCAnPCcpO1xufVxuIiwiLy8gY29uZmlnIG9wdGlvbnMgdXBkYXRhYmxlIGJ5IHNldE9wdGlvbnMoKSBhbmQgdGhlaXIgZGVmYXVsdCB2YWx1ZXNcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBhdXRvaGlkZTogZmFsc2UsXG4gIGJlZm9yZVNob3dEYXk6IG51bGwsXG4gIGJlZm9yZVNob3dEZWNhZGU6IG51bGwsXG4gIGJlZm9yZVNob3dNb250aDogbnVsbCxcbiAgYmVmb3JlU2hvd1llYXI6IG51bGwsXG4gIGNhbGVuZGFyV2Vla3M6IGZhbHNlLFxuICBjbGVhckJ0bjogZmFsc2UsXG4gIGRhdGVEZWxpbWl0ZXI6ICcsJyxcbiAgZGF0ZXNEaXNhYmxlZDogW10sXG4gIGRheXNPZldlZWtEaXNhYmxlZDogW10sXG4gIGRheXNPZldlZWtIaWdobGlnaHRlZDogW10sXG4gIGRlZmF1bHRWaWV3RGF0ZTogdW5kZWZpbmVkLCAvLyBwbGFjZWhvbGRlciwgZGVmYXVsdHMgdG8gdG9kYXkoKSBieSB0aGUgcHJvZ3JhbVxuICBkaXNhYmxlVG91Y2hLZXlib2FyZDogZmFsc2UsXG4gIGZvcm1hdDogJ21tL2RkL3l5eXknLFxuICBsYW5ndWFnZTogJ2VuJyxcbiAgbWF4RGF0ZTogbnVsbCxcbiAgbWF4TnVtYmVyT2ZEYXRlczogMSxcbiAgbWF4VmlldzogMyxcbiAgbWluRGF0ZTogbnVsbCxcbiAgbmV4dEFycm93OiAnwrsnLFxuICBvcmllbnRhdGlvbjogJ2F1dG8nLFxuICBwaWNrTGV2ZWw6IDAsXG4gIHByZXZBcnJvdzogJ8KrJyxcbiAgc2hvd0RheXNPZldlZWs6IHRydWUsXG4gIHNob3dPbkNsaWNrOiB0cnVlLFxuICBzaG93T25Gb2N1czogdHJ1ZSxcbiAgc3RhcnRWaWV3OiAwLFxuICB0aXRsZTogJycsXG4gIHRvZGF5QnRuOiBmYWxzZSxcbiAgdG9kYXlCdG5Nb2RlOiAwLFxuICB0b2RheUhpZ2hsaWdodDogZmFsc2UsXG4gIHVwZGF0ZU9uQmx1cjogdHJ1ZSxcbiAgd2Vla1N0YXJ0OiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdE9wdGlvbnM7XG4iLCJpbXBvcnQge2hhc1Byb3BlcnR5LCBwdXNoVW5pcXVlfSBmcm9tICcuLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHtkYXRlVmFsdWUsIHJlZ3VsYXJpemVEYXRlfSBmcm9tICcuLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge3JlRm9ybWF0VG9rZW5zLCBwYXJzZURhdGV9IGZyb20gJy4uL2xpYi9kYXRlLWZvcm1hdC5qcyc7XG5pbXBvcnQge3BhcnNlSFRNTH0gZnJvbSAnLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSAnLi9kZWZhdWx0T3B0aW9ucy5qcyc7XG5cbmNvbnN0IHtcbiAgbGFuZ3VhZ2U6IGRlZmF1bHRMYW5nLFxuICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXQsXG4gIHdlZWtTdGFydDogZGVmYXVsdFdlZWtTdGFydCxcbn0gPSBkZWZhdWx0T3B0aW9ucztcblxuLy8gUmVkdWNlciBmdW5jdGlvbiB0byBmaWx0ZXIgb3V0IGludmFsaWQgZGF5LW9mLXdlZWsgZnJvbSB0aGUgaW5wdXRcbmZ1bmN0aW9uIHNhbml0aXplRE9XKGRvdywgZGF5KSB7XG4gIHJldHVybiBkb3cubGVuZ3RoIDwgNiAmJiBkYXkgPj0gMCAmJiBkYXkgPCA3XG4gICAgPyBwdXNoVW5pcXVlKGRvdywgZGF5KVxuICAgIDogZG93O1xufVxuXG5mdW5jdGlvbiBjYWxjRW5kT2ZXZWVrKHN0YXJ0T2ZXZWVrKSB7XG4gIHJldHVybiAoc3RhcnRPZldlZWsgKyA2KSAlIDc7XG59XG5cbi8vIHZhbGlkYXRlIGlucHV0IGRhdGUuIGlmIGludmFsaWQsIGZhbGxiYWNrIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZVxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHZhbHVlLCBmb3JtYXQsIGxvY2FsZSwgb3JpZ1ZhbHVlKSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZURhdGUodmFsdWUsIGZvcm1hdCwgbG9jYWxlKTtcbiAgcmV0dXJuIGRhdGUgIT09IHVuZGVmaW5lZCA/IGRhdGUgOiBvcmlnVmFsdWU7XG59XG5cbi8vIFZhbGlkYXRlIHZpZXdJZC4gaWYgaW52YWxpZCwgZmFsbGJhY2sgdG8gdGhlIG9yaWdpbmFsIHZhbHVlXG5mdW5jdGlvbiB2YWxpZGF0ZVZpZXdJZCh2YWx1ZSwgb3JpZ1ZhbHVlLCBtYXggPSAzKSB7XG4gIGNvbnN0IHZpZXdJZCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIHJldHVybiB2aWV3SWQgPj0gMCAmJiB2aWV3SWQgPD0gbWF4ID8gdmlld0lkIDogb3JpZ1ZhbHVlO1xufVxuXG4vLyBDcmVhdGUgRGF0ZXBpY2tlciBjb25maWd1cmF0aW9uIHRvIHNldFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvY2Vzc09wdGlvbnMob3B0aW9ucywgZGF0ZXBpY2tlcikge1xuICBjb25zdCBpbk9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgY29uc3QgY29uZmlnID0ge307XG4gIGNvbnN0IGxvY2FsZXMgPSBkYXRlcGlja2VyLmNvbnN0cnVjdG9yLmxvY2FsZXM7XG4gIGNvbnN0IHJhbmdlU2lkZUluZGV4ID0gZGF0ZXBpY2tlci5yYW5nZVNpZGVJbmRleDtcbiAgbGV0IHtcbiAgICBmb3JtYXQsXG4gICAgbGFuZ3VhZ2UsXG4gICAgbG9jYWxlLFxuICAgIG1heERhdGUsXG4gICAgbWF4VmlldyxcbiAgICBtaW5EYXRlLFxuICAgIHBpY2tMZXZlbCxcbiAgICBzdGFydFZpZXcsXG4gICAgd2Vla1N0YXJ0LFxuICB9ID0gZGF0ZXBpY2tlci5jb25maWcgfHwge307XG5cbiAgaWYgKGluT3B0cy5sYW5ndWFnZSkge1xuICAgIGxldCBsYW5nO1xuICAgIGlmIChpbk9wdHMubGFuZ3VhZ2UgIT09IGxhbmd1YWdlKSB7XG4gICAgICBpZiAobG9jYWxlc1tpbk9wdHMubGFuZ3VhZ2VdKSB7XG4gICAgICAgIGxhbmcgPSBpbk9wdHMubGFuZ3VhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDaGVjayBpZiBsYW5nYXVnZSArIHJlZ2lvbiB0YWcgY2FuIGZhbGxiYWNrIHRvIHRoZSBvbmUgd2l0aG91dFxuICAgICAgICAvLyByZWdpb24gKGUuZy4gZnItQ0Eg4oaSIGZyKVxuICAgICAgICBsYW5nID0gaW5PcHRzLmxhbmd1YWdlLnNwbGl0KCctJylbMF07XG4gICAgICAgIGlmIChsb2NhbGVzW2xhbmddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBsYW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5sYW5ndWFnZTtcbiAgICBpZiAobGFuZykge1xuICAgICAgbGFuZ3VhZ2UgPSBjb25maWcubGFuZ3VhZ2UgPSBsYW5nO1xuXG4gICAgICAvLyB1cGRhdGUgbG9jYWxlIGFzIHdlbGwgd2hlbiB1cGRhdGluZyBsYW5ndWFnZVxuICAgICAgY29uc3Qgb3JpZ0xvY2FsZSA9IGxvY2FsZSB8fCBsb2NhbGVzW2RlZmF1bHRMYW5nXTtcbiAgICAgIC8vIHVzZSBkZWZhdWx0IGxhbmd1YWdlJ3MgcHJvcGVydGllcyBmb3IgdGhlIGZhbGxiYWNrXG4gICAgICBsb2NhbGUgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0LFxuICAgICAgICB3ZWVrU3RhcnQ6IGRlZmF1bHRXZWVrU3RhcnRcbiAgICAgIH0sIGxvY2FsZXNbZGVmYXVsdExhbmddKTtcbiAgICAgIGlmIChsYW5ndWFnZSAhPT0gZGVmYXVsdExhbmcpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihsb2NhbGUsIGxvY2FsZXNbbGFuZ3VhZ2VdKTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAvLyBpZiBmb3JtYXQgYW5kL29yIHdlZWtTdGFydCBhcmUgdGhlIHNhbWUgYXMgb2xkIGxvY2FsZSdzIGRlZmF1bHRzLFxuICAgICAgLy8gdXBkYXRlIHRoZW0gdG8gbmV3IGxvY2FsZSdzIGRlZmF1bHRzXG4gICAgICBpZiAoZm9ybWF0ID09PSBvcmlnTG9jYWxlLmZvcm1hdCkge1xuICAgICAgICBmb3JtYXQgPSBjb25maWcuZm9ybWF0ID0gbG9jYWxlLmZvcm1hdDtcbiAgICAgIH1cbiAgICAgIGlmICh3ZWVrU3RhcnQgPT09IG9yaWdMb2NhbGUud2Vla1N0YXJ0KSB7XG4gICAgICAgIHdlZWtTdGFydCA9IGNvbmZpZy53ZWVrU3RhcnQgPSBsb2NhbGUud2Vla1N0YXJ0O1xuICAgICAgICBjb25maWcud2Vla0VuZCA9IGNhbGNFbmRPZldlZWsobG9jYWxlLndlZWtTdGFydCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGluT3B0cy5mb3JtYXQpIHtcbiAgICBjb25zdCBoYXNUb0Rpc3BsYXkgPSB0eXBlb2YgaW5PcHRzLmZvcm1hdC50b0Rpc3BsYXkgPT09ICdmdW5jdGlvbic7XG4gICAgY29uc3QgaGFzVG9WYWx1ZSA9IHR5cGVvZiBpbk9wdHMuZm9ybWF0LnRvVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgY29uc3QgdmFsaWRGb3JtYXRTdHJpbmcgPSByZUZvcm1hdFRva2Vucy50ZXN0KGluT3B0cy5mb3JtYXQpO1xuICAgIGlmICgoaGFzVG9EaXNwbGF5ICYmIGhhc1RvVmFsdWUpIHx8IHZhbGlkRm9ybWF0U3RyaW5nKSB7XG4gICAgICBmb3JtYXQgPSBjb25maWcuZm9ybWF0ID0gaW5PcHRzLmZvcm1hdDtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5mb3JtYXQ7XG4gIH1cblxuICAvLyoqKiBwaWNrIGxldmVsICoqKi8vXG4gIGxldCBuZXdQaWNrTGV2ZWwgPSBwaWNrTGV2ZWw7XG4gIGlmIChpbk9wdHMucGlja0xldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICBuZXdQaWNrTGV2ZWwgPSB2YWxpZGF0ZVZpZXdJZChpbk9wdHMucGlja0xldmVsLCAyKTtcbiAgICBkZWxldGUgaW5PcHRzLnBpY2tMZXZlbDtcbiAgfVxuICBpZiAobmV3UGlja0xldmVsICE9PSBwaWNrTGV2ZWwpIHtcbiAgICBpZiAobmV3UGlja0xldmVsID4gcGlja0xldmVsKSB7XG4gICAgICAvLyBjb21wbGVtZW50IGN1cnJlbnQgbWluRGF0ZS9tYWREYXRlIHNvIHRoYXQgdGhlIGV4aXN0aW5nIHJhbmdlIHdpbGwgYmVcbiAgICAgIC8vIGV4cGFuZGVkIHRvIGZpdCB0aGUgbmV3IGxldmVsIGxhdGVyXG4gICAgICBpZiAoaW5PcHRzLm1pbkRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbk9wdHMubWluRGF0ZSA9IG1pbkRhdGU7XG4gICAgICB9XG4gICAgICBpZiAoaW5PcHRzLm1heERhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbk9wdHMubWF4RGF0ZSA9IG1heERhdGU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbXBsZW1lbnQgZGF0ZXNEaXNhYmxlZCBzbyB0aGF0IGl0IHdpbGwgYmUgcmVzZXQgbGF0ZXJcbiAgICBpZiAoIWluT3B0cy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgICBpbk9wdHMuZGF0ZXNEaXNhYmxlZCA9IFtdO1xuICAgIH1cbiAgICBwaWNrTGV2ZWwgPSBjb25maWcucGlja0xldmVsID0gbmV3UGlja0xldmVsO1xuICB9XG5cbiAgLy8qKiogZGF0ZXMgKioqLy9cbiAgLy8gd2hpbGUgbWluIGFuZCBtYXhEYXRlIGZvciBcIm5vIGxpbWl0XCIgaW4gdGhlIG9wdGlvbnMgYXJlIGJldHRlciB0byBiZSBudWxsXG4gIC8vIChlc3BlY2lhbGx5IHdoZW4gdXBkYXRpbmcpLCB0aGUgb25lcyBpbiB0aGUgY29uZmlnIGhhdmUgdG8gYmUgdW5kZWZpbmVkXG4gIC8vIGJlY2F1c2UgbnVsbCBpcyB0cmVhdGVkIGFzIDAgKD0gdW5peCBlcG9jaCkgd2hlbiBjb21wYXJpbmcgd2l0aCB0aW1lIHZhbHVlXG4gIGxldCBtaW5EdCA9IG1pbkRhdGU7XG4gIGxldCBtYXhEdCA9IG1heERhdGU7XG4gIGlmIChpbk9wdHMubWluRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZGVmYXVsdE1pbkR0ID0gZGF0ZVZhbHVlKDAsIDAsIDEpO1xuICAgIG1pbkR0ID0gaW5PcHRzLm1pbkRhdGUgPT09IG51bGxcbiAgICAgID8gZGVmYXVsdE1pbkR0ICAvLyBzZXQgMDAwMC0wMS0wMSB0byBwcmV2ZW50IG5lZ2F0aXZlIHZhbHVlcyBmb3IgeWVhclxuICAgICAgOiB2YWxpZGF0ZURhdGUoaW5PcHRzLm1pbkRhdGUsIGZvcm1hdCwgbG9jYWxlLCBtaW5EdCk7XG4gICAgaWYgKG1pbkR0ICE9PSBkZWZhdWx0TWluRHQpIHtcbiAgICAgIG1pbkR0ID0gcmVndWxhcml6ZURhdGUobWluRHQsIHBpY2tMZXZlbCwgZmFsc2UpO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLm1pbkRhdGU7XG4gIH1cbiAgaWYgKGluT3B0cy5tYXhEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICBtYXhEdCA9IGluT3B0cy5tYXhEYXRlID09PSBudWxsXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiB2YWxpZGF0ZURhdGUoaW5PcHRzLm1heERhdGUsIGZvcm1hdCwgbG9jYWxlLCBtYXhEdCk7XG4gICAgaWYgKG1heER0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1heER0ID0gcmVndWxhcml6ZURhdGUobWF4RHQsIHBpY2tMZXZlbCwgdHJ1ZSk7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMubWF4RGF0ZTtcbiAgfVxuICBpZiAobWF4RHQgPCBtaW5EdCkge1xuICAgIG1pbkRhdGUgPSBjb25maWcubWluRGF0ZSA9IG1heER0O1xuICAgIG1heERhdGUgPSBjb25maWcubWF4RGF0ZSA9IG1pbkR0O1xuICB9IGVsc2Uge1xuICAgIGlmIChtaW5EYXRlICE9PSBtaW5EdCkge1xuICAgICAgbWluRGF0ZSA9IGNvbmZpZy5taW5EYXRlID0gbWluRHQ7XG4gICAgfVxuICAgIGlmIChtYXhEYXRlICE9PSBtYXhEdCkge1xuICAgICAgbWF4RGF0ZSA9IGNvbmZpZy5tYXhEYXRlID0gbWF4RHQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKGluT3B0cy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgY29uZmlnLmRhdGVzRGlzYWJsZWQgPSBpbk9wdHMuZGF0ZXNEaXNhYmxlZC5yZWR1Y2UoKGRhdGVzLCBkdCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlRGF0ZShkdCwgZm9ybWF0LCBsb2NhbGUpO1xuICAgICAgcmV0dXJuIGRhdGUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHB1c2hVbmlxdWUoZGF0ZXMsIHJlZ3VsYXJpemVEYXRlKGRhdGUsIHBpY2tMZXZlbCwgcmFuZ2VTaWRlSW5kZXgpKVxuICAgICAgICA6IGRhdGVzO1xuICAgIH0sIFtdKTtcbiAgICBkZWxldGUgaW5PcHRzLmRhdGVzRGlzYWJsZWQ7XG4gIH1cbiAgaWYgKGluT3B0cy5kZWZhdWx0Vmlld0RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHZpZXdEYXRlID0gcGFyc2VEYXRlKGluT3B0cy5kZWZhdWx0Vmlld0RhdGUsIGZvcm1hdCwgbG9jYWxlKTtcbiAgICBpZiAodmlld0RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLmRlZmF1bHRWaWV3RGF0ZSA9IHZpZXdEYXRlO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLmRlZmF1bHRWaWV3RGF0ZTtcbiAgfVxuXG4gIC8vKioqIGRheXMgb2Ygd2VlayAqKiovL1xuICBpZiAoaW5PcHRzLndlZWtTdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgd2tTdGFydCA9IE51bWJlcihpbk9wdHMud2Vla1N0YXJ0KSAlIDc7XG4gICAgaWYgKCFpc05hTih3a1N0YXJ0KSkge1xuICAgICAgd2Vla1N0YXJ0ID0gY29uZmlnLndlZWtTdGFydCA9IHdrU3RhcnQ7XG4gICAgICBjb25maWcud2Vla0VuZCA9IGNhbGNFbmRPZldlZWsod2tTdGFydCk7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMud2Vla1N0YXJ0O1xuICB9XG4gIGlmIChpbk9wdHMuZGF5c09mV2Vla0Rpc2FibGVkKSB7XG4gICAgY29uZmlnLmRheXNPZldlZWtEaXNhYmxlZCA9IGluT3B0cy5kYXlzT2ZXZWVrRGlzYWJsZWQucmVkdWNlKHNhbml0aXplRE9XLCBbXSk7XG4gICAgZGVsZXRlIGluT3B0cy5kYXlzT2ZXZWVrRGlzYWJsZWQ7XG4gIH1cbiAgaWYgKGluT3B0cy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQpIHtcbiAgICBjb25maWcuZGF5c09mV2Vla0hpZ2hsaWdodGVkID0gaW5PcHRzLmRheXNPZldlZWtIaWdobGlnaHRlZC5yZWR1Y2Uoc2FuaXRpemVET1csIFtdKTtcbiAgICBkZWxldGUgaW5PcHRzLmRheXNPZldlZWtIaWdobGlnaHRlZDtcbiAgfVxuXG4gIC8vKioqIG11bHRpIGRhdGUgKioqLy9cbiAgaWYgKGluT3B0cy5tYXhOdW1iZXJPZkRhdGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBtYXhOdW1iZXJPZkRhdGVzID0gcGFyc2VJbnQoaW5PcHRzLm1heE51bWJlck9mRGF0ZXMsIDEwKTtcbiAgICBpZiAobWF4TnVtYmVyT2ZEYXRlcyA+PSAwKSB7XG4gICAgICBjb25maWcubWF4TnVtYmVyT2ZEYXRlcyA9IG1heE51bWJlck9mRGF0ZXM7XG4gICAgICBjb25maWcubXVsdGlkYXRlID0gbWF4TnVtYmVyT2ZEYXRlcyAhPT0gMTtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5tYXhOdW1iZXJPZkRhdGVzO1xuICB9XG4gIGlmIChpbk9wdHMuZGF0ZURlbGltaXRlcikge1xuICAgIGNvbmZpZy5kYXRlRGVsaW1pdGVyID0gU3RyaW5nKGluT3B0cy5kYXRlRGVsaW1pdGVyKTtcbiAgICBkZWxldGUgaW5PcHRzLmRhdGVEZWxpbWl0ZXI7XG4gIH1cblxuICAvLyoqKiB2aWV3ICoqKi8vXG4gIGxldCBuZXdNYXhWaWV3ID0gbWF4VmlldztcbiAgaWYgKGluT3B0cy5tYXhWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICBuZXdNYXhWaWV3ID0gdmFsaWRhdGVWaWV3SWQoaW5PcHRzLm1heFZpZXcsIG1heFZpZXcpO1xuICAgIGRlbGV0ZSBpbk9wdHMubWF4VmlldztcbiAgfVxuICAvLyBlbnN1cmUgbWF4IHZpZXcgPj0gcGljayBsZXZlbFxuICBuZXdNYXhWaWV3ID0gcGlja0xldmVsID4gbmV3TWF4VmlldyA/IHBpY2tMZXZlbCA6IG5ld01heFZpZXc7XG4gIGlmIChuZXdNYXhWaWV3ICE9PSBtYXhWaWV3KSB7XG4gICAgbWF4VmlldyA9IGNvbmZpZy5tYXhWaWV3ID0gbmV3TWF4VmlldztcbiAgfVxuXG4gIGxldCBuZXdTdGFydFZpZXcgPSBzdGFydFZpZXc7XG4gIGlmIChpbk9wdHMuc3RhcnRWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICBuZXdTdGFydFZpZXcgPSB2YWxpZGF0ZVZpZXdJZChpbk9wdHMuc3RhcnRWaWV3LCBuZXdTdGFydFZpZXcpO1xuICAgIGRlbGV0ZSBpbk9wdHMuc3RhcnRWaWV3O1xuICB9XG4gIC8vIGVuc3VyZSBwaWNrIGxldmVsIDw9IHN0YXJ0IHZpZXcgPD0gbWF4IHZpZXdcbiAgaWYgKG5ld1N0YXJ0VmlldyA8IHBpY2tMZXZlbCkge1xuICAgIG5ld1N0YXJ0VmlldyA9IHBpY2tMZXZlbDtcbiAgfSBlbHNlIGlmIChuZXdTdGFydFZpZXcgPiBtYXhWaWV3KSB7XG4gICAgbmV3U3RhcnRWaWV3ID0gbWF4VmlldztcbiAgfVxuICBpZiAobmV3U3RhcnRWaWV3ICE9PSBzdGFydFZpZXcpIHtcbiAgICBjb25maWcuc3RhcnRWaWV3ID0gbmV3U3RhcnRWaWV3O1xuICB9XG5cbiAgLy8qKiogdGVtcGxhdGUgKioqLy9cbiAgaWYgKGluT3B0cy5wcmV2QXJyb3cpIHtcbiAgICBjb25zdCBwcmV2QXJyb3cgPSBwYXJzZUhUTUwoaW5PcHRzLnByZXZBcnJvdyk7XG4gICAgaWYgKHByZXZBcnJvdy5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbmZpZy5wcmV2QXJyb3cgPSBwcmV2QXJyb3cuY2hpbGROb2RlcztcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5wcmV2QXJyb3c7XG4gIH1cbiAgaWYgKGluT3B0cy5uZXh0QXJyb3cpIHtcbiAgICBjb25zdCBuZXh0QXJyb3cgPSBwYXJzZUhUTUwoaW5PcHRzLm5leHRBcnJvdyk7XG4gICAgaWYgKG5leHRBcnJvdy5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbmZpZy5uZXh0QXJyb3cgPSBuZXh0QXJyb3cuY2hpbGROb2RlcztcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5uZXh0QXJyb3c7XG4gIH1cblxuICAvLyoqKiBtaXNjICoqKi8vXG4gIGlmIChpbk9wdHMuZGlzYWJsZVRvdWNoS2V5Ym9hcmQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbmZpZy5kaXNhYmxlVG91Y2hLZXlib2FyZCA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50ICYmICEhaW5PcHRzLmRpc2FibGVUb3VjaEtleWJvYXJkO1xuICAgIGRlbGV0ZSBpbk9wdHMuZGlzYWJsZVRvdWNoS2V5Ym9hcmQ7XG4gIH1cbiAgaWYgKGluT3B0cy5vcmllbnRhdGlvbikge1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gaW5PcHRzLm9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvZyk7XG4gICAgY29uZmlnLm9yaWVudGF0aW9uID0ge1xuICAgICAgeDogb3JpZW50YXRpb24uZmluZCh4ID0+ICh4ID09PSAnbGVmdCcgfHwgeCA9PT0gJ3JpZ2h0JykpIHx8ICdhdXRvJyxcbiAgICAgIHk6IG9yaWVudGF0aW9uLmZpbmQoeSA9PiAoeSA9PT0gJ3RvcCcgfHwgeSA9PT0gJ2JvdHRvbScpKSB8fCAnYXV0bycsXG4gICAgfTtcbiAgICBkZWxldGUgaW5PcHRzLm9yaWVudGF0aW9uO1xuICB9XG4gIGlmIChpbk9wdHMudG9kYXlCdG5Nb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICBzd2l0Y2goaW5PcHRzLnRvZGF5QnRuTW9kZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgY2FzZSAxOlxuICAgICAgICBjb25maWcudG9kYXlCdG5Nb2RlID0gaW5PcHRzLnRvZGF5QnRuTW9kZTtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy50b2RheUJ0bk1vZGU7XG4gIH1cblxuICAvLyoqKiBjb3B5IHRoZSByZXN0ICoqKi8vXG4gIE9iamVjdC5rZXlzKGluT3B0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGluT3B0c1trZXldICE9PSB1bmRlZmluZWQgJiYgaGFzUHJvcGVydHkoZGVmYXVsdE9wdGlvbnMsIGtleSkpIHtcbiAgICAgIGNvbmZpZ1trZXldID0gaW5PcHRzW2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufVxuIiwiaW1wb3J0IHtoYXNQcm9wZXJ0eSwgbGFzdEl0ZW1PZiwgaXNJblJhbmdlLCBsaW1pdFRvUmFuZ2V9IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge3RvZGF5fSBmcm9tICcuLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge3BhcnNlSFRNTCwgZ2V0UGFyZW50LCBzaG93RWxlbWVudCwgaGlkZUVsZW1lbnQsIGVtcHR5Q2hpbGROb2Rlc30gZnJvbSAnLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQge3JlZ2lzdGVyTGlzdGVuZXJzfSBmcm9tICcuLi9saWIvZXZlbnQuanMnO1xuaW1wb3J0IHBpY2tlclRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL3BpY2tlclRlbXBsYXRlLmpzJztcbmltcG9ydCBEYXlzVmlldyBmcm9tICcuL3ZpZXdzL0RheXNWaWV3LmpzJztcbmltcG9ydCBNb250aHNWaWV3IGZyb20gJy4vdmlld3MvTW9udGhzVmlldy5qcyc7XG5pbXBvcnQgWWVhcnNWaWV3IGZyb20gJy4vdmlld3MvWWVhcnNWaWV3LmpzJztcbmltcG9ydCB7dHJpZ2dlckRhdGVwaWNrZXJFdmVudH0gZnJvbSAnLi4vZXZlbnRzL2Z1bmN0aW9ucy5qcyc7XG5pbXBvcnQge1xuICBvbkNsaWNrVG9kYXlCdG4sXG4gIG9uQ2xpY2tDbGVhckJ0bixcbiAgb25DbGlja1ZpZXdTd2l0Y2gsXG4gIG9uQ2xpY2tQcmV2QnRuLFxuICBvbkNsaWNrTmV4dEJ0bixcbiAgb25DbGlja1ZpZXcsXG4gIG9uTW91c2Vkb3duUGlja2VyLFxufSBmcm9tICcuLi9ldmVudHMvcGlja2VyTGlzdGVuZXJzLmpzJztcblxuY29uc3Qgb3JpZW50Q2xhc3NlcyA9IFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJ10ucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICBvYmpba2V5XSA9IGBkYXRlcGlja2VyLW9yaWVudC0ke2tleX1gO1xuICByZXR1cm4gb2JqO1xufSwge30pO1xuY29uc3QgdG9QeCA9IG51bSA9PiBudW0gPyBgJHtudW19cHhgIDogbnVtO1xuXG5mdW5jdGlvbiBwcm9jZXNzUGlja2VyT3B0aW9ucyhwaWNrZXIsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMudGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChvcHRpb25zLnRpdGxlKSB7XG4gICAgICBwaWNrZXIuY29udHJvbHMudGl0bGUudGV4dENvbnRlbnQgPSBvcHRpb25zLnRpdGxlO1xuICAgICAgc2hvd0VsZW1lbnQocGlja2VyLmNvbnRyb2xzLnRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGlja2VyLmNvbnRyb2xzLnRpdGxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBoaWRlRWxlbWVudChwaWNrZXIuY29udHJvbHMudGl0bGUpO1xuICAgIH1cbiAgfVxuICBpZiAob3B0aW9ucy5wcmV2QXJyb3cpIHtcbiAgICBjb25zdCBwcmV2QnRuID0gcGlja2VyLmNvbnRyb2xzLnByZXZCdG47XG4gICAgZW1wdHlDaGlsZE5vZGVzKHByZXZCdG4pO1xuICAgIG9wdGlvbnMucHJldkFycm93LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIHByZXZCdG4uYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChvcHRpb25zLm5leHRBcnJvdykge1xuICAgIGNvbnN0IG5leHRCdG4gPSBwaWNrZXIuY29udHJvbHMubmV4dEJ0bjtcbiAgICBlbXB0eUNoaWxkTm9kZXMobmV4dEJ0bik7XG4gICAgb3B0aW9ucy5uZXh0QXJyb3cuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbmV4dEJ0bi5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMubG9jYWxlKSB7XG4gICAgcGlja2VyLmNvbnRyb2xzLnRvZGF5QnRuLnRleHRDb250ZW50ID0gb3B0aW9ucy5sb2NhbGUudG9kYXk7XG4gICAgcGlja2VyLmNvbnRyb2xzLmNsZWFyQnRuLnRleHRDb250ZW50ID0gb3B0aW9ucy5sb2NhbGUuY2xlYXI7XG4gIH1cbiAgaWYgKG9wdGlvbnMudG9kYXlCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChvcHRpb25zLnRvZGF5QnRuKSB7XG4gICAgICBzaG93RWxlbWVudChwaWNrZXIuY29udHJvbHMudG9kYXlCdG4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlRWxlbWVudChwaWNrZXIuY29udHJvbHMudG9kYXlCdG4pO1xuICAgIH1cbiAgfVxuICBpZiAoaGFzUHJvcGVydHkob3B0aW9ucywgJ21pbkRhdGUnKSB8fCBoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWF4RGF0ZScpKSB7XG4gICAgY29uc3Qge21pbkRhdGUsIG1heERhdGV9ID0gcGlja2VyLmRhdGVwaWNrZXIuY29uZmlnO1xuICAgIHBpY2tlci5jb250cm9scy50b2RheUJ0bi5kaXNhYmxlZCA9ICFpc0luUmFuZ2UodG9kYXkoKSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuY2xlYXJCdG4gIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChvcHRpb25zLmNsZWFyQnRuKSB7XG4gICAgICBzaG93RWxlbWVudChwaWNrZXIuY29udHJvbHMuY2xlYXJCdG4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlRWxlbWVudChwaWNrZXIuY29udHJvbHMuY2xlYXJCdG4pO1xuICAgIH1cbiAgfVxufVxuXG4vLyBDb21wdXRlIHZpZXcgZGF0ZSB0byByZXNldCwgd2hpY2ggd2lsbCBiZS4uLlxuLy8gLSB0aGUgbGFzdCBpdGVtIG9mIHRoZSBzZWxlY3RlZCBkYXRlcyBvciBkZWZhdWx0Vmlld0RhdGUgaWYgbm8gc2VsZWN0aW9uXG4vLyAtIGxpbWl0dGVkIHRvIG1pbkRhdGUgb3IgbWF4RGF0ZSBpZiBpdCBleGNlZWRzIHRoZSByYW5nZVxuZnVuY3Rpb24gY29tcHV0ZVJlc2V0Vmlld0RhdGUoZGF0ZXBpY2tlcikge1xuICBjb25zdCB7ZGF0ZXMsIGNvbmZpZ30gPSBkYXRlcGlja2VyO1xuICBjb25zdCB2aWV3RGF0ZSA9IGRhdGVzLmxlbmd0aCA+IDAgPyBsYXN0SXRlbU9mKGRhdGVzKSA6IGNvbmZpZy5kZWZhdWx0Vmlld0RhdGU7XG4gIHJldHVybiBsaW1pdFRvUmFuZ2Uodmlld0RhdGUsIGNvbmZpZy5taW5EYXRlLCBjb25maWcubWF4RGF0ZSk7XG59XG5cbi8vIENoYW5nZSBjdXJyZW50IHZpZXcncyB2aWV3IGRhdGVcbmZ1bmN0aW9uIHNldFZpZXdEYXRlKHBpY2tlciwgbmV3RGF0ZSkge1xuICBjb25zdCBvbGRWaWV3RGF0ZSA9IG5ldyBEYXRlKHBpY2tlci52aWV3RGF0ZSk7XG4gIGNvbnN0IG5ld1ZpZXdEYXRlID0gbmV3IERhdGUobmV3RGF0ZSk7XG4gIGNvbnN0IHtpZCwgeWVhciwgZmlyc3QsIGxhc3R9ID0gcGlja2VyLmN1cnJlbnRWaWV3O1xuICBjb25zdCB2aWV3WWVhciA9IG5ld1ZpZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgcGlja2VyLnZpZXdEYXRlID0gbmV3RGF0ZTtcbiAgaWYgKHZpZXdZZWFyICE9PSBvbGRWaWV3RGF0ZS5nZXRGdWxsWWVhcigpKSB7XG4gICAgdHJpZ2dlckRhdGVwaWNrZXJFdmVudChwaWNrZXIuZGF0ZXBpY2tlciwgJ2NoYW5nZVllYXInKTtcbiAgfVxuICBpZiAobmV3Vmlld0RhdGUuZ2V0TW9udGgoKSAhPT0gb2xkVmlld0RhdGUuZ2V0TW9udGgoKSkge1xuICAgIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQocGlja2VyLmRhdGVwaWNrZXIsICdjaGFuZ2VNb250aCcpO1xuICB9XG5cbiAgLy8gcmV0dXJuIHdoZXRoZXIgdGhlIG5ldyBkYXRlIGlzIGluIGRpZmZlcmVudCBwZXJpb2Qgb24gdGltZSBmcm9tIHRoZSBvbmVcbiAgLy8gZGlzcGxheWVkIGluIHRoZSBjdXJyZW50IHZpZXdcbiAgLy8gd2hlbiB0cnVlLCB0aGUgdmlldyBuZWVkcyB0byBiZSByZS1yZW5kZXJlZCBvbiB0aGUgbmV4dCBVSSByZWZyZXNoLlxuICBzd2l0Y2ggKGlkKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIG5ld0RhdGUgPCBmaXJzdCB8fCBuZXdEYXRlID4gbGFzdDtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gdmlld1llYXIgIT09IHllYXI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB2aWV3WWVhciA8IGZpcnN0IHx8IHZpZXdZZWFyID4gbGFzdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUZXh0RGlyZWN0aW9uKGVsKSB7XG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZGlyZWN0aW9uO1xufVxuXG4vLyBmaW5kIHRoZSBjbG9zZXQgc2Nyb2xsYWJsZSBhbmNlc3RvciBlbGVtbnQgdW5kZXIgdGhlIGJvZHlcbmZ1bmN0aW9uIGZpbmRTY3JvbGxQYXJlbnRzKGVsKSB7XG4gIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudChlbCk7XG4gIGlmIChwYXJlbnQgPT09IGRvY3VtZW50LmJvZHkgfHwgIXBhcmVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGNoZWNraW5nIG92ZXJmbG93IG9ubHkgaXMgZW5vdWdoIGJlY2F1c2UgY29tcHV0ZWQgb3ZlcmZsb3cgY2Fubm90IGJlXG4gIC8vIHZpc2libGUgb3IgYSBjb21iaW5hdGlvbiBvZiB2aXNpYmxlIGFuZCBvdGhlciB3aGVuIGVpdGhlciBheGlzIGlzIHNldFxuICAvLyB0byBvdGhlciB0aGFuIHZpc2libGUuXG4gIC8vIChTZXR0aW5nIG9uZSBheGlzIHRvIG90aGVyIHRoYW4gJ3Zpc2libGUnIHdoaWxlIHRoZSBvdGhlciBpcyAndmlzaWJsZSdcbiAgLy8gcmVzdWx0cyBpbiB0aGUgb3RoZXIgYXhpcyB0dXJuaW5nIHRvICdhdXRvJylcbiAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkub3ZlcmZsb3cgIT09ICd2aXNpYmxlJ1xuICAgID8gcGFyZW50XG4gICAgOiBmaW5kU2Nyb2xsUGFyZW50cyhwYXJlbnQpO1xufVxuXG4vLyBDbGFzcyByZXByZXNlbnRpbmcgdGhlIHBpY2tlciBVSVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlja2VyIHtcbiAgY29uc3RydWN0b3IoZGF0ZXBpY2tlcikge1xuICAgIGNvbnN0IHtjb25maWd9ID0gdGhpcy5kYXRlcGlja2VyID0gZGF0ZXBpY2tlcjtcblxuICAgIGNvbnN0IHRlbXBsYXRlID0gcGlja2VyVGVtcGxhdGUucmVwbGFjZSgvJWJ1dHRvbkNsYXNzJS9nLCBjb25maWcuYnV0dG9uQ2xhc3MpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQgPSBwYXJzZUhUTUwodGVtcGxhdGUpLmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgW2hlYWRlciwgbWFpbiwgZm9vdGVyXSA9IGVsZW1lbnQuZmlyc3RDaGlsZC5jaGlsZHJlbjtcbiAgICBjb25zdCB0aXRsZSA9IGhlYWRlci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBbcHJldkJ0biwgdmlld1N3aXRjaCwgbmV4dEJ0bl0gPSBoZWFkZXIubGFzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbjtcbiAgICBjb25zdCBbdG9kYXlCdG4sIGNsZWFyQnRuXSA9IGZvb3Rlci5maXJzdENoaWxkLmNoaWxkcmVuO1xuICAgIGNvbnN0IGNvbnRyb2xzID0ge1xuICAgICAgdGl0bGUsXG4gICAgICBwcmV2QnRuLFxuICAgICAgdmlld1N3aXRjaCxcbiAgICAgIG5leHRCdG4sXG4gICAgICB0b2RheUJ0bixcbiAgICAgIGNsZWFyQnRuLFxuICAgIH07XG4gICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XG5cbiAgICBjb25zdCBlbGVtZW50Q2xhc3MgPSBkYXRlcGlja2VyLmlubGluZSA/ICdpbmxpbmUnIDogJ2Ryb3Bkb3duJztcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYGRhdGVwaWNrZXItJHtlbGVtZW50Q2xhc3N9YCk7XG5cbiAgICBwcm9jZXNzUGlja2VyT3B0aW9ucyh0aGlzLCBjb25maWcpO1xuICAgIHRoaXMudmlld0RhdGUgPSBjb21wdXRlUmVzZXRWaWV3RGF0ZShkYXRlcGlja2VyKTtcblxuICAgIC8vIHNldCB1cCBldmVudCBsaXN0ZW5lcnNcbiAgICByZWdpc3Rlckxpc3RlbmVycyhkYXRlcGlja2VyLCBbXG4gICAgICBbZWxlbWVudCwgJ21vdXNlZG93bicsIG9uTW91c2Vkb3duUGlja2VyXSxcbiAgICAgIFttYWluLCAnY2xpY2snLCBvbkNsaWNrVmlldy5iaW5kKG51bGwsIGRhdGVwaWNrZXIpXSxcbiAgICAgIFtjb250cm9scy52aWV3U3dpdGNoLCAnY2xpY2snLCBvbkNsaWNrVmlld1N3aXRjaC5iaW5kKG51bGwsIGRhdGVwaWNrZXIpXSxcbiAgICAgIFtjb250cm9scy5wcmV2QnRuLCAnY2xpY2snLCBvbkNsaWNrUHJldkJ0bi5iaW5kKG51bGwsIGRhdGVwaWNrZXIpXSxcbiAgICAgIFtjb250cm9scy5uZXh0QnRuLCAnY2xpY2snLCBvbkNsaWNrTmV4dEJ0bi5iaW5kKG51bGwsIGRhdGVwaWNrZXIpXSxcbiAgICAgIFtjb250cm9scy50b2RheUJ0biwgJ2NsaWNrJywgb25DbGlja1RvZGF5QnRuLmJpbmQobnVsbCwgZGF0ZXBpY2tlcildLFxuICAgICAgW2NvbnRyb2xzLmNsZWFyQnRuLCAnY2xpY2snLCBvbkNsaWNrQ2xlYXJCdG4uYmluZChudWxsLCBkYXRlcGlja2VyKV0sXG4gICAgXSk7XG5cbiAgICAvLyBzZXQgdXAgdmlld3NcbiAgICB0aGlzLnZpZXdzID0gW1xuICAgICAgbmV3IERheXNWaWV3KHRoaXMpLFxuICAgICAgbmV3IE1vbnRoc1ZpZXcodGhpcyksXG4gICAgICBuZXcgWWVhcnNWaWV3KHRoaXMsIHtpZDogMiwgbmFtZTogJ3llYXJzJywgY2VsbENsYXNzOiAneWVhcicsIHN0ZXA6IDF9KSxcbiAgICAgIG5ldyBZZWFyc1ZpZXcodGhpcywge2lkOiAzLCBuYW1lOiAnZGVjYWRlcycsIGNlbGxDbGFzczogJ2RlY2FkZScsIHN0ZXA6IDEwfSksXG4gICAgXTtcbiAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdGhpcy52aWV3c1tjb25maWcuc3RhcnRWaWV3XTtcblxuICAgIHRoaXMuY3VycmVudFZpZXcucmVuZGVyKCk7XG4gICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKHRoaXMuY3VycmVudFZpZXcuZWxlbWVudCk7XG4gICAgaWYgKGNvbmZpZy5jb250YWluZXIpIHtcbiAgICAgIGNvbmZpZy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZXBpY2tlci5pbnB1dEZpZWxkLmFmdGVyKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcHJvY2Vzc1BpY2tlck9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy52aWV3cy5mb3JFYWNoKCh2aWV3KSA9PiB7XG4gICAgICB2aWV3LmluaXQob3B0aW9ucywgZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuY3VycmVudFZpZXcucmVuZGVyKCk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7ZGF0ZXBpY2tlciwgZWxlbWVudH0gPSB0aGlzO1xuICAgIGlmIChkYXRlcGlja2VyLmlubGluZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZW5zdXJlIHBpY2tlcidzIGRpcmVjdGlvbiBtYXRjaGVzIGlucHV0J3NcbiAgICAgIGNvbnN0IGlucHV0RGlyZWN0aW9uID0gZ2V0VGV4dERpcmVjdGlvbihkYXRlcGlja2VyLmlucHV0RmllbGQpO1xuICAgICAgaWYgKGlucHV0RGlyZWN0aW9uICE9PSBnZXRUZXh0RGlyZWN0aW9uKGdldFBhcmVudChlbGVtZW50KSkpIHtcbiAgICAgICAgZWxlbWVudC5kaXIgPSBpbnB1dERpcmVjdGlvbjtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5kaXIpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RpcicpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnN0eWxlLnZpc2libGl0eSA9ICdoaWRkZW4nO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHRoaXMucGxhY2UoKTtcbiAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJsaXR5ID0gJyc7XG5cbiAgICAgIGlmIChkYXRlcGlja2VyLmNvbmZpZy5kaXNhYmxlVG91Y2hLZXlib2FyZCkge1xuICAgICAgICBkYXRlcGlja2VyLmlucHV0RmllbGQuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdHJpZ2dlckRhdGVwaWNrZXJFdmVudChkYXRlcGlja2VyLCAnc2hvdycpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGF0ZXBpY2tlci5leGl0RWRpdE1vZGUoKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KHRoaXMuZGF0ZXBpY2tlciwgJ2hpZGUnKTtcbiAgfVxuXG4gIHBsYWNlKCkge1xuICAgIGNvbnN0IHtjbGFzc0xpc3QsIG9mZnNldFBhcmVudCwgc3R5bGV9ID0gdGhpcy5lbGVtZW50O1xuICAgIGNvbnN0IHtjb25maWcsIGlucHV0RmllbGR9ID0gdGhpcy5kYXRlcGlja2VyO1xuICAgIGNvbnN0IHtcbiAgICAgIHdpZHRoOiBjYWxlbmRhcldpZHRoLFxuICAgICAgaGVpZ2h0OiBjYWxlbmRhckhlaWdodCxcbiAgICB9ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHtcbiAgICAgIGxlZnQ6IGlucHV0TGVmdCxcbiAgICAgIHRvcDogaW5wdXRUb3AsXG4gICAgICByaWdodDogaW5wdXRSaWdodCxcbiAgICAgIGJvdHRvbTogaW5wdXRCb3R0b20sXG4gICAgICB3aWR0aDogaW5wdXRXaWR0aCxcbiAgICAgIGhlaWdodDogaW5wdXRIZWlnaHRcbiAgICB9ID0gaW5wdXRGaWVsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQge3g6IG9yaWVudFgsIHk6IG9yaWVudFl9ID0gY29uZmlnLm9yaWVudGF0aW9uO1xuICAgIGxldCBsZWZ0ID0gaW5wdXRMZWZ0O1xuICAgIGxldCB0b3AgPSBpbnB1dFRvcDtcblxuICAgIC8vIGNhbGljdWxhdGUgb2Zmc2V0TGVmdC9Ub3Agb2YgaW5wdXRGaWVsZFxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGRvY3VtZW50LmJvZHkgfHwgIW9mZnNldFBhcmVudCkge1xuICAgICAgbGVmdCArPSB3aW5kb3cuc2Nyb2xsWDtcbiAgICAgIHRvcCArPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2Zmc2V0UGFyZW50UmVjdCA9IG9mZnNldFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGxlZnQgLT0gb2Zmc2V0UGFyZW50UmVjdC5sZWZ0IC0gb2Zmc2V0UGFyZW50LnNjcm9sbExlZnQ7XG4gICAgICB0b3AgLT0gb2Zmc2V0UGFyZW50UmVjdC50b3AgLSBvZmZzZXRQYXJlbnQuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIC8vIGNhbGljdWxhdGUgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIHZpc2libGUgYXJlYSB0aGF0IGNvbnRhaW5zIGlucHV0RmllbGRcbiAgICBjb25zdCBzY3JvbGxQYXJlbnQgPSBmaW5kU2Nyb2xsUGFyZW50cyhpbnB1dEZpZWxkKTtcbiAgICBsZXQgc2Nyb2xsQXJlYUxlZnQgPSAwO1xuICAgIGxldCBzY3JvbGxBcmVhVG9wID0gMDtcbiAgICBsZXQge1xuICAgICAgY2xpZW50V2lkdGg6IHNjcm9sbEFyZWFSaWdodCxcbiAgICAgIGNsaWVudEhlaWdodDogc2Nyb2xsQXJlYUJvdHRvbSxcbiAgICB9ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKHNjcm9sbFBhcmVudCkge1xuICAgICAgY29uc3Qgc2Nyb2xsUGFyZW50UmVjdCA9IHNjcm9sbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGlmIChzY3JvbGxQYXJlbnRSZWN0LnRvcCA+IDApIHtcbiAgICAgICAgc2Nyb2xsQXJlYVRvcCA9IHNjcm9sbFBhcmVudFJlY3QudG9wO1xuICAgICAgfVxuICAgICAgaWYgKHNjcm9sbFBhcmVudFJlY3QubGVmdCA+IDApIHtcbiAgICAgICAgc2Nyb2xsQXJlYUxlZnQgPSBzY3JvbGxQYXJlbnRSZWN0LmxlZnQ7XG4gICAgICB9XG4gICAgICBpZiAoc2Nyb2xsUGFyZW50UmVjdC5yaWdodCA8IHNjcm9sbEFyZWFSaWdodCkge1xuICAgICAgICBzY3JvbGxBcmVhUmlnaHQgPSBzY3JvbGxQYXJlbnRSZWN0LnJpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKHNjcm9sbFBhcmVudFJlY3QuYm90dG9tIDwgc2Nyb2xsQXJlYUJvdHRvbSkge1xuICAgICAgICBzY3JvbGxBcmVhQm90dG9tID0gc2Nyb2xsUGFyZW50UmVjdC5ib3R0b207XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lIHRoZSBob3Jpem9udGFsIG9yaWVudGF0aW9uIGFuZCBsZWZ0IHBvc2l0aW9uXG4gICAgbGV0IGFkanVzdG1lbnQgPSAwO1xuICAgIGlmIChvcmllbnRYID09PSAnYXV0bycpIHtcbiAgICAgIGlmIChpbnB1dExlZnQgPCBzY3JvbGxBcmVhTGVmdCkge1xuICAgICAgICBvcmllbnRYID0gJ2xlZnQnO1xuICAgICAgICBhZGp1c3RtZW50ID0gc2Nyb2xsQXJlYUxlZnQgLSBpbnB1dExlZnQ7XG4gICAgICB9IGVsc2UgaWYgKGlucHV0TGVmdCArIGNhbGVuZGFyV2lkdGggPiBzY3JvbGxBcmVhUmlnaHQpIHtcbiAgICAgICAgb3JpZW50WCA9ICdyaWdodCc7XG4gICAgICAgIGlmIChzY3JvbGxBcmVhUmlnaHQgPCBpbnB1dFJpZ2h0KSB7XG4gICAgICAgICAgYWRqdXN0bWVudCA9IHNjcm9sbEFyZWFSaWdodCAtIGlucHV0UmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ2V0VGV4dERpcmVjdGlvbihpbnB1dEZpZWxkKSA9PT0gJ3J0bCcpIHtcbiAgICAgICAgb3JpZW50WCA9IGlucHV0UmlnaHQgLSBjYWxlbmRhcldpZHRoIDwgc2Nyb2xsQXJlYUxlZnQgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZW50WCA9ICdsZWZ0JztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudFggPT09ICdyaWdodCcpIHtcbiAgICAgIGxlZnQgKz0gaW5wdXRXaWR0aCAtIGNhbGVuZGFyV2lkdGg7XG4gICAgfVxuICAgIGxlZnQgKz0gYWRqdXN0bWVudDtcblxuICAgIC8vIGRldGVybWluZSB0aGUgdmVydGljYWwgb3JpZW50YXRpb24gYW5kIHRvcCBwb3NpdGlvblxuICAgIGlmIChvcmllbnRZID09PSAnYXV0bycpIHtcbiAgICAgIGlmIChpbnB1dFRvcCAtIGNhbGVuZGFySGVpZ2h0ID4gc2Nyb2xsQXJlYVRvcCkge1xuICAgICAgICBvcmllbnRZID0gaW5wdXRCb3R0b20gKyBjYWxlbmRhckhlaWdodCA+IHNjcm9sbEFyZWFCb3R0b20gPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZW50WSA9ICdib3R0b20nO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50WSA9PT0gJ3RvcCcpIHtcbiAgICAgIHRvcCAtPSBjYWxlbmRhckhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wICs9IGlucHV0SGVpZ2h0O1xuICAgIH1cblxuICAgIGNsYXNzTGlzdC5yZW1vdmUoLi4uT2JqZWN0LnZhbHVlcyhvcmllbnRDbGFzc2VzKSk7XG4gICAgY2xhc3NMaXN0LmFkZChvcmllbnRDbGFzc2VzW29yaWVudFhdLCBvcmllbnRDbGFzc2VzW29yaWVudFldKTtcblxuICAgIHN0eWxlLmxlZnQgPSB0b1B4KGxlZnQpO1xuICAgIHN0eWxlLnRvcCA9IHRvUHgodG9wKTtcbiAgfVxuXG4gIHNldFZpZXdTd2l0Y2hMYWJlbChsYWJlbFRleHQpIHtcbiAgICB0aGlzLmNvbnRyb2xzLnZpZXdTd2l0Y2gudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gIH1cblxuICBzZXRQcmV2QnRuRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLmNvbnRyb2xzLnByZXZCdG4uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIHNldE5leHRCdG5EaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuY29udHJvbHMubmV4dEJ0bi5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgY2hhbmdlVmlldyh2aWV3SWQpIHtcbiAgICBjb25zdCBvbGRWaWV3ID0gdGhpcy5jdXJyZW50VmlldztcbiAgICBjb25zdCBuZXdWaWV3ID0gIHRoaXMudmlld3Nbdmlld0lkXTtcbiAgICBpZiAobmV3Vmlldy5pZCAhPT0gb2xkVmlldy5pZCkge1xuICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG5ld1ZpZXc7XG4gICAgICB0aGlzLl9yZW5kZXJNZXRob2QgPSAncmVuZGVyJztcbiAgICAgIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQodGhpcy5kYXRlcGlja2VyLCAnY2hhbmdlVmlldycpO1xuICAgICAgdGhpcy5tYWluLnJlcGxhY2VDaGlsZChuZXdWaWV3LmVsZW1lbnQsIG9sZFZpZXcuZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gQ2hhbmdlIHRoZSBmb2N1c2VkIGRhdGUgKHZpZXcgZGF0ZSlcbiAgY2hhbmdlRm9jdXMobmV3Vmlld0RhdGUpIHtcbiAgICB0aGlzLl9yZW5kZXJNZXRob2QgPSBzZXRWaWV3RGF0ZSh0aGlzLCBuZXdWaWV3RGF0ZSkgPyAncmVuZGVyJyA6ICdyZWZyZXNoRm9jdXMnO1xuICAgIHRoaXMudmlld3MuZm9yRWFjaCgodmlldykgPT4ge1xuICAgICAgdmlldy51cGRhdGVGb2N1cygpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gQXBwbHkgdGhlIGNoYW5nZSBvZiB0aGUgc2VsZWN0ZWQgZGF0ZXNcbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IG5ld1ZpZXdEYXRlID0gY29tcHV0ZVJlc2V0Vmlld0RhdGUodGhpcy5kYXRlcGlja2VyKTtcbiAgICB0aGlzLl9yZW5kZXJNZXRob2QgPSBzZXRWaWV3RGF0ZSh0aGlzLCBuZXdWaWV3RGF0ZSkgPyAncmVuZGVyJyA6ICdyZWZyZXNoJztcbiAgICB0aGlzLnZpZXdzLmZvckVhY2goKHZpZXcpID0+IHtcbiAgICAgIHZpZXcudXBkYXRlRm9jdXMoKTtcbiAgICAgIHZpZXcudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBSZWZyZXNoIHRoZSBwaWNrZXIgVUlcbiAgcmVuZGVyKHF1aWNrUmVuZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJlbmRlck1ldGhvZCA9IChxdWlja1JlbmRlciAmJiB0aGlzLl9yZW5kZXJNZXRob2QpIHx8ICdyZW5kZXInO1xuICAgIGRlbGV0ZSB0aGlzLl9yZW5kZXJNZXRob2Q7XG5cbiAgICB0aGlzLmN1cnJlbnRWaWV3W3JlbmRlck1ldGhvZF0oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtjcmVhdGVUYWdSZXBlYXQsIG9wdGltaXplVGVtcGxhdGVIVE1MfSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuXG5jb25zdCBjYWxlbmRhcldlZWtzVGVtcGxhdGUgPSBvcHRpbWl6ZVRlbXBsYXRlSFRNTChgPGRpdiBjbGFzcz1cImNhbGVuZGFyLXdlZWtzXCI+XG4gIDxkaXYgY2xhc3M9XCJkYXlzLW9mLXdlZWtcIj48c3BhbiBjbGFzcz1cImRvd1wiPjwvc3Bhbj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndlZWtzXCI+JHtjcmVhdGVUYWdSZXBlYXQoJ3NwYW4nLCA2LCB7Y2xhc3M6ICd3ZWVrJ30pfTwvZGl2PlxuPC9kaXY+YCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGVuZGFyV2Vla3NUZW1wbGF0ZTtcbiIsImltcG9ydCB7Y3JlYXRlVGFnUmVwZWF0LCBvcHRpbWl6ZVRlbXBsYXRlSFRNTH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzLmpzJztcblxuY29uc3QgZGF5c1RlbXBsYXRlID0gb3B0aW1pemVUZW1wbGF0ZUhUTUwoYDxkaXYgY2xhc3M9XCJkYXlzXCI+XG4gIDxkaXYgY2xhc3M9XCJkYXlzLW9mLXdlZWtcIj4ke2NyZWF0ZVRhZ1JlcGVhdCgnc3BhbicsIDcsIHtjbGFzczogJ2Rvdyd9KX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZ3JpZFwiPiR7Y3JlYXRlVGFnUmVwZWF0KCdzcGFuJywgNDIpfTwvZGl2PlxuPC9kaXY+YCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRheXNUZW1wbGF0ZTtcbiIsImltcG9ydCB7b3B0aW1pemVUZW1wbGF0ZUhUTUx9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcyc7XG5cbmNvbnN0IHBpY2tlclRlbXBsYXRlID0gb3B0aW1pemVUZW1wbGF0ZUhUTUwoYDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyXCI+XG4gIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXBpY2tlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItdGl0bGVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWNvbnRyb2xzXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJWJ1dHRvbkNsYXNzJSBwcmV2LWJ0blwiPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiVidXR0b25DbGFzcyUgdmlldy1zd2l0Y2hcIj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIlYnV0dG9uQ2xhc3MlIG5leHQtYnRuXCI+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1tYWluXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1jb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiVidXR0b25DbGFzcyUgdG9kYXktYnRuXCI+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJWJ1dHRvbkNsYXNzJSBjbGVhci1idG5cIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmApO1xuXG5leHBvcnQgZGVmYXVsdCBwaWNrZXJUZW1wbGF0ZTtcbiIsImltcG9ydCB7aGFzUHJvcGVydHksIHB1c2hVbmlxdWV9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge3RvZGF5LCBkYXRlVmFsdWUsIGFkZERheXMsIGFkZFdlZWtzLCBkYXlPZlRoZVdlZWtPZiwgZ2V0V2Vla30gZnJvbSAnLi4vLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtmb3JtYXREYXRlfSBmcm9tICcuLi8uLi9saWIvZGF0ZS1mb3JtYXQuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUwsIHNob3dFbGVtZW50LCBoaWRlRWxlbWVudH0gZnJvbSAnLi4vLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQgZGF5c1RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlcy9kYXlzVGVtcGxhdGUuanMnO1xuaW1wb3J0IGNhbGVuZGFyV2Vla3NUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZXMvY2FsZW5kYXJXZWVrc1RlbXBsYXRlLmpzJztcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheXNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGNvbnN0cnVjdG9yKHBpY2tlcikge1xuICAgIHN1cGVyKHBpY2tlciwge1xuICAgICAgaWQ6IDAsXG4gICAgICBuYW1lOiAnZGF5cycsXG4gICAgICBjZWxsQ2xhc3M6ICdkYXknLFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdChvcHRpb25zLCBvbkNvbnN0cnVjdGlvbiA9IHRydWUpIHtcbiAgICBpZiAob25Db25zdHJ1Y3Rpb24pIHtcbiAgICAgIGNvbnN0IGlubmVyID0gcGFyc2VIVE1MKGRheXNUZW1wbGF0ZSkuZmlyc3RDaGlsZDtcbiAgICAgIHRoaXMuZG93ID0gaW5uZXIuZmlyc3RDaGlsZDtcbiAgICAgIHRoaXMuZ3JpZCA9IGlubmVyLmxhc3RDaGlsZDtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgfVxuICAgIHN1cGVyLmluaXQob3B0aW9ucyk7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBsZXQgdXBkYXRlRE9XO1xuXG4gICAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtaW5EYXRlJykpIHtcbiAgICAgIHRoaXMubWluRGF0ZSA9IG9wdGlvbnMubWluRGF0ZTtcbiAgICB9XG4gICAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtYXhEYXRlJykpIHtcbiAgICAgIHRoaXMubWF4RGF0ZSA9IG9wdGlvbnMubWF4RGF0ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5kYXRlc0Rpc2FibGVkID0gb3B0aW9ucy5kYXRlc0Rpc2FibGVkO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5kYXlzT2ZXZWVrRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGF5c09mV2Vla0Rpc2FibGVkID0gb3B0aW9ucy5kYXlzT2ZXZWVrRGlzYWJsZWQ7XG4gICAgICB1cGRhdGVET1cgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQpIHtcbiAgICAgIHRoaXMuZGF5c09mV2Vla0hpZ2hsaWdodGVkID0gb3B0aW9ucy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRvZGF5SGlnaGxpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudG9kYXlIaWdobGlnaHQgPSBvcHRpb25zLnRvZGF5SGlnaGxpZ2h0O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy53ZWVrU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53ZWVrU3RhcnQgPSBvcHRpb25zLndlZWtTdGFydDtcbiAgICAgIHRoaXMud2Vla0VuZCA9IG9wdGlvbnMud2Vla0VuZDtcbiAgICAgIHVwZGF0ZURPVyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmxvY2FsZSkge1xuICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgICAgIHRoaXMuZGF5TmFtZXMgPSBsb2NhbGUuZGF5c01pbjtcbiAgICAgIHRoaXMuc3dpdGNoTGFiZWxGb3JtYXQgPSBsb2NhbGUudGl0bGVGb3JtYXQ7XG4gICAgICB1cGRhdGVET1cgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5iZWZvcmVTaG93RGF5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYmVmb3JlU2hvdyA9IHR5cGVvZiBvcHRpb25zLmJlZm9yZVNob3dEYXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcHRpb25zLmJlZm9yZVNob3dEYXlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY2FsZW5kYXJXZWVrcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAob3B0aW9ucy5jYWxlbmRhcldlZWtzICYmICF0aGlzLmNhbGVuZGFyV2Vla3MpIHtcbiAgICAgICAgY29uc3Qgd2Vla3NFbGVtID0gcGFyc2VIVE1MKGNhbGVuZGFyV2Vla3NUZW1wbGF0ZSkuZmlyc3RDaGlsZDtcbiAgICAgICAgdGhpcy5jYWxlbmRhcldlZWtzID0ge1xuICAgICAgICAgIGVsZW1lbnQ6IHdlZWtzRWxlbSxcbiAgICAgICAgICBkb3c6IHdlZWtzRWxlbS5maXJzdENoaWxkLFxuICAgICAgICAgIHdlZWtzOiB3ZWVrc0VsZW0ubGFzdENoaWxkLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHdlZWtzRWxlbSwgdGhpcy5lbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNhbGVuZGFyV2Vla3MgJiYgIW9wdGlvbnMuY2FsZW5kYXJXZWVrcykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5jYWxlbmRhcldlZWtzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNhbGVuZGFyV2Vla3MgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zaG93RGF5c09mV2VlayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAob3B0aW9ucy5zaG93RGF5c09mV2Vlaykge1xuICAgICAgICBzaG93RWxlbWVudCh0aGlzLmRvdyk7XG4gICAgICAgIGlmICh0aGlzLmNhbGVuZGFyV2Vla3MpIHtcbiAgICAgICAgICBzaG93RWxlbWVudCh0aGlzLmNhbGVuZGFyV2Vla3MuZG93KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUVsZW1lbnQodGhpcy5kb3cpO1xuICAgICAgICBpZiAodGhpcy5jYWxlbmRhcldlZWtzKSB7XG4gICAgICAgICAgaGlkZUVsZW1lbnQodGhpcy5jYWxlbmRhcldlZWtzLmRvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgZGF5cy1vZi13ZWVrIHdoZW4gbG9jYWxlLCBkYXlzT2Z3ZWVrRGlzYWJsZWQgb3Igd2Vla1N0YXJ0IGlzIGNoYW5nZWRcbiAgICBpZiAodXBkYXRlRE9XKSB7XG4gICAgICBBcnJheS5mcm9tKHRoaXMuZG93LmNoaWxkcmVuKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZG93ID0gKHRoaXMud2Vla1N0YXJ0ICsgaW5kZXgpICUgNztcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0aGlzLmRheU5hbWVzW2Rvd107XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IHRoaXMuZGF5c09mV2Vla0Rpc2FibGVkLmluY2x1ZGVzKGRvdykgPyAnZG93IGRpc2FibGVkJyA6ICdkb3cnO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQXBwbHkgdXBkYXRlIG9uIHRoZSBmb2N1c2VkIGRhdGUgdG8gdmlldydzIHNldHRpbmdzXG4gIHVwZGF0ZUZvY3VzKCkge1xuICAgIGNvbnN0IHZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5waWNrZXIudmlld0RhdGUpO1xuICAgIGNvbnN0IHZpZXdZZWFyID0gdmlld0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB2aWV3TW9udGggPSB2aWV3RGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IGZpcnN0T2ZNb250aCA9IGRhdGVWYWx1ZSh2aWV3WWVhciwgdmlld01vbnRoLCAxKTtcbiAgICBjb25zdCBzdGFydCA9IGRheU9mVGhlV2Vla09mKGZpcnN0T2ZNb250aCwgdGhpcy53ZWVrU3RhcnQsIHRoaXMud2Vla1N0YXJ0KTtcblxuICAgIHRoaXMuZmlyc3QgPSBmaXJzdE9mTW9udGg7XG4gICAgdGhpcy5sYXN0ID0gZGF0ZVZhbHVlKHZpZXdZZWFyLCB2aWV3TW9udGggKyAxLCAwKTtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5mb2N1c2VkID0gdGhpcy5waWNrZXIudmlld0RhdGU7XG4gIH1cblxuICAvLyBBcHBseSB1cGRhdGUgb24gdGhlIHNlbGVjdGVkIGRhdGVzIHRvIHZpZXcncyBzZXR0aW5nc1xuICB1cGRhdGVTZWxlY3Rpb24oKSB7XG4gICAgY29uc3Qge2RhdGVzLCByYW5nZXBpY2tlcn0gPSB0aGlzLnBpY2tlci5kYXRlcGlja2VyO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRlcztcbiAgICBpZiAocmFuZ2VwaWNrZXIpIHtcbiAgICAgIHRoaXMucmFuZ2UgPSByYW5nZXBpY2tlci5kYXRlcztcbiAgICB9XG4gIH1cblxuICAgLy8gVXBkYXRlIHRoZSBlbnRpcmUgdmlldyBVSVxuICByZW5kZXIoKSB7XG4gICAgLy8gdXBkYXRlIHRvZGF5IG1hcmtlciBvbiBldmVyIHJlbmRlclxuICAgIHRoaXMudG9kYXkgPSB0aGlzLnRvZGF5SGlnaGxpZ2h0ID8gdG9kYXkoKSA6IHVuZGVmaW5lZDtcbiAgICAvLyByZWZyZXNoIGRpc2FibGVkIGRhdGVzIG9uIGV2ZXJ5IHJlbmRlciBpbiBvcmRlciB0byBjbGVhciB0aGUgb25lcyBhZGRlZFxuICAgIC8vIGJ5IGJlZm9yZVNob3cgaG9vayBhdCBwcmV2aW91cyByZW5kZXJcbiAgICB0aGlzLmRpc2FibGVkID0gWy4uLnRoaXMuZGF0ZXNEaXNhYmxlZF07XG5cbiAgICBjb25zdCBzd2l0Y2hMYWJlbCA9IGZvcm1hdERhdGUodGhpcy5mb2N1c2VkLCB0aGlzLnN3aXRjaExhYmVsRm9ybWF0LCB0aGlzLmxvY2FsZSk7XG4gICAgdGhpcy5waWNrZXIuc2V0Vmlld1N3aXRjaExhYmVsKHN3aXRjaExhYmVsKTtcbiAgICB0aGlzLnBpY2tlci5zZXRQcmV2QnRuRGlzYWJsZWQodGhpcy5maXJzdCA8PSB0aGlzLm1pbkRhdGUpO1xuICAgIHRoaXMucGlja2VyLnNldE5leHRCdG5EaXNhYmxlZCh0aGlzLmxhc3QgPj0gdGhpcy5tYXhEYXRlKTtcblxuICAgIGlmICh0aGlzLmNhbGVuZGFyV2Vla3MpIHtcbiAgICAgIC8vIHN0YXJ0IG9mIHRoZSBVVEMgd2VlayAoTW9uZGF5KSBvZiB0aGUgMXN0IG9mIHRoZSBtb250aFxuICAgICAgY29uc3Qgc3RhcnRPZldlZWsgPSBkYXlPZlRoZVdlZWtPZih0aGlzLmZpcnN0LCAxLCAxKTtcbiAgICAgIEFycmF5LmZyb20odGhpcy5jYWxlbmRhcldlZWtzLndlZWtzLmNoaWxkcmVuKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBnZXRXZWVrKGFkZFdlZWtzKHN0YXJ0T2ZXZWVrLCBpbmRleCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIEFycmF5LmZyb20odGhpcy5ncmlkLmNoaWxkcmVuKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBhZGREYXlzKHRoaXMuc3RhcnQsIGluZGV4KTtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50KTtcbiAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICAgIGVsLmNsYXNzTmFtZSA9IGBkYXRlcGlja2VyLWNlbGwgJHt0aGlzLmNlbGxDbGFzc31gO1xuICAgICAgZWwuZGF0YXNldC5kYXRlID0gY3VycmVudDtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgIGlmIChjdXJyZW50IDwgdGhpcy5maXJzdCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPiB0aGlzLmxhc3QpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudG9kYXkgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50IDwgdGhpcy5taW5EYXRlIHx8IGN1cnJlbnQgPiB0aGlzLm1heERhdGUgfHwgdGhpcy5kaXNhYmxlZC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGF5c09mV2Vla0Rpc2FibGVkLmluY2x1ZGVzKGRheSkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgcHVzaFVuaXF1ZSh0aGlzLmRpc2FibGVkLCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRheXNPZldlZWtIaWdobGlnaHRlZC5pbmNsdWRlcyhkYXkpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gdGhpcy5yYW5nZTtcbiAgICAgICAgaWYgKGN1cnJlbnQgPiByYW5nZVN0YXJ0ICYmIGN1cnJlbnQgPCByYW5nZUVuZCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1zdGFydCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZUVuZCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLWVuZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHRoaXMuZm9jdXNlZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmJlZm9yZVNob3cpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtQmVmb3JlSG9vayhlbCwgY3VycmVudCwgY3VycmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHZpZXcgVUkgYnkgYXBwbHlpbmcgdGhlIGNoYW5nZXMgb2Ygc2VsZWN0ZWQgYW5kIGZvY3VzZWQgaXRlbXNcbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gdGhpcy5yYW5nZSB8fCBbXTtcbiAgICB0aGlzLmdyaWRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2UsIC5yYW5nZS1zdGFydCwgLnJhbmdlLWVuZCwgLnNlbGVjdGVkLCAuZm9jdXNlZCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2UnLCAncmFuZ2Utc3RhcnQnLCAncmFuZ2UtZW5kJywgJ3NlbGVjdGVkJywgJ2ZvY3VzZWQnKTtcbiAgICAgIH0pO1xuICAgIEFycmF5LmZyb20odGhpcy5ncmlkLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IE51bWJlcihlbC5kYXRhc2V0LmRhdGUpO1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGN1cnJlbnQgPiByYW5nZVN0YXJ0ICYmIGN1cnJlbnQgPCByYW5nZUVuZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZScpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZUVuZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1lbmQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGN1cnJlbnQpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgdmlldyBVSSBieSBhcHBseWluZyB0aGUgY2hhbmdlIG9mIGZvY3VzZWQgaXRlbVxuICByZWZyZXNoRm9jdXMoKSB7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKCh0aGlzLmZvY3VzZWQgLSB0aGlzLnN0YXJ0KSAvIDg2NDAwMDAwKTtcbiAgICB0aGlzLmdyaWQucXVlcnlTZWxlY3RvckFsbCgnLmZvY3VzZWQnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JpZC5jaGlsZHJlbltpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICB9XG59XG4iLCJpbXBvcnQge2hhc1Byb3BlcnR5LCBwdXNoVW5pcXVlLCBjcmVhdGVUYWdSZXBlYXR9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge2RhdGVWYWx1ZX0gZnJvbSAnLi4vLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUx9IGZyb20gJy4uLy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3LmpzJztcblxuZnVuY3Rpb24gY29tcHV0ZU1vbnRoUmFuZ2UocmFuZ2UsIHRoaXNZZWFyKSB7XG4gIGlmICghcmFuZ2UgfHwgIXJhbmdlWzBdIHx8ICFyYW5nZVsxXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IFtbc3RhcnRZLCBzdGFydE1dLCBbZW5kWSwgZW5kTV1dID0gcmFuZ2U7XG4gIGlmIChzdGFydFkgPiB0aGlzWWVhciB8fCBlbmRZIDwgdGhpc1llYXIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIFtcbiAgICBzdGFydFkgPT09IHRoaXNZZWFyID8gc3RhcnRNIDogLTEsXG4gICAgZW5kWSA9PT0gdGhpc1llYXIgPyBlbmRNIDogMTIsXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoc1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgY29uc3RydWN0b3IocGlja2VyKSB7XG4gICAgc3VwZXIocGlja2VyLCB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdtb250aHMnLFxuICAgICAgY2VsbENsYXNzOiAnbW9udGgnLFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdChvcHRpb25zLCBvbkNvbnN0cnVjdGlvbiA9IHRydWUpIHtcbiAgICBpZiAob25Db25zdHJ1Y3Rpb24pIHtcbiAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuZWxlbWVudDtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb250aHMnLCAnZGF0ZXBpY2tlci1ncmlkJyk7XG4gICAgICB0aGlzLmdyaWQuYXBwZW5kQ2hpbGQocGFyc2VIVE1MKGNyZWF0ZVRhZ1JlcGVhdCgnc3BhbicsIDEyLCB7J2RhdGEtbW9udGgnOiBpeCA9PiBpeH0pKSk7XG4gICAgfVxuICAgIHN1cGVyLmluaXQob3B0aW9ucyk7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5sb2NhbGUpIHtcbiAgICAgIHRoaXMubW9udGhOYW1lcyA9IG9wdGlvbnMubG9jYWxlLm1vbnRoc1Nob3J0O1xuICAgIH1cbiAgICBpZiAoaGFzUHJvcGVydHkob3B0aW9ucywgJ21pbkRhdGUnKSkge1xuICAgICAgaWYgKG9wdGlvbnMubWluRGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWluWWVhciA9IHRoaXMubWluTW9udGggPSB0aGlzLm1pbkRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtaW5EYXRlT2JqID0gbmV3IERhdGUob3B0aW9ucy5taW5EYXRlKTtcbiAgICAgICAgdGhpcy5taW5ZZWFyID0gbWluRGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLm1pbk1vbnRoID0gbWluRGF0ZU9iai5nZXRNb250aCgpO1xuICAgICAgICB0aGlzLm1pbkRhdGUgPSBtaW5EYXRlT2JqLnNldERhdGUoMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWF4RGF0ZScpKSB7XG4gICAgICBpZiAob3B0aW9ucy5tYXhEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5tYXhZZWFyID0gdGhpcy5tYXhNb250aCA9IHRoaXMubWF4RGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1heERhdGVPYmogPSBuZXcgRGF0ZShvcHRpb25zLm1heERhdGUpO1xuICAgICAgICB0aGlzLm1heFllYXIgPSBtYXhEYXRlT2JqLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRoaXMubWF4TW9udGggPSBtYXhEYXRlT2JqLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMubWF4RGF0ZSA9IGRhdGVWYWx1ZSh0aGlzLm1heFllYXIsIHRoaXMubWF4TW9udGggKyAxLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuaXNNaW5WaWV3KSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGF0ZXNEaXNhYmxlZCA9IG9wdGlvbnMuZGF0ZXNEaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlc0Rpc2FibGVkID0gW107XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmJlZm9yZVNob3dNb250aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmJlZm9yZVNob3cgPSB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTaG93TW9udGggPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcHRpb25zLmJlZm9yZVNob3dNb250aFxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgdmlldydzIHNldHRpbmdzIHRvIHJlZmxlY3QgdGhlIHZpZXdEYXRlIHNldCBvbiB0aGUgcGlja2VyXG4gIHVwZGF0ZUZvY3VzKCkge1xuICAgIGNvbnN0IHZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5waWNrZXIudmlld0RhdGUpO1xuICAgIHRoaXMueWVhciA9IHZpZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy5mb2N1c2VkID0gdmlld0RhdGUuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB2aWV3J3Mgc2V0dGluZ3MgdG8gcmVmbGVjdCB0aGUgc2VsZWN0ZWQgZGF0ZXNcbiAgdXBkYXRlU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHtkYXRlcywgcmFuZ2VwaWNrZXJ9ID0gdGhpcy5waWNrZXIuZGF0ZXBpY2tlcjtcbiAgICB0aGlzLnNlbGVjdGVkID0gZGF0ZXMucmVkdWNlKChzZWxlY3RlZCwgdGltZVZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZVZhbHVlKTtcbiAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGlmIChzZWxlY3RlZFt5ZWFyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNlbGVjdGVkW3llYXJdID0gW21vbnRoXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHB1c2hVbmlxdWUoc2VsZWN0ZWRbeWVhcl0sIG1vbnRoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9LCB7fSk7XG4gICAgaWYgKHJhbmdlcGlja2VyICYmIHJhbmdlcGlja2VyLmRhdGVzKSB7XG4gICAgICB0aGlzLnJhbmdlID0gcmFuZ2VwaWNrZXIuZGF0ZXMubWFwKHRpbWVWYWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lVmFsdWUpO1xuICAgICAgICByZXR1cm4gaXNOYU4oZGF0ZSkgPyB1bmRlZmluZWQgOiBbZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCldO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBlbnRpcmUgdmlldyBVSVxuICByZW5kZXIoKSB7XG4gICAgLy8gcmVmcmVzaCBkaXNhYmxlZCBtb250aHMgb24gZXZlcnkgcmVuZGVyIGluIG9yZGVyIHRvIGNsZWFyIHRoZSBvbmVzIGFkZGVkXG4gICAgLy8gYnkgYmVmb3JlU2hvdyBob29rIGF0IHByZXZpb3VzIHJlbmRlclxuICAgIC8vIHRoaXMuZGlzYWJsZWQgPSBbLi4udGhpcy5kYXRlc0Rpc2FibGVkXTtcbiAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5kYXRlc0Rpc2FibGVkLnJlZHVjZSgoYXJyLCBkaXNhYmxlZCkgPT4ge1xuICAgICAgY29uc3QgZHQgPSBuZXcgRGF0ZShkaXNhYmxlZCk7XG4gICAgICBpZiAodGhpcy55ZWFyID09PSBkdC5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgIGFyci5wdXNoKGR0LmdldE1vbnRoKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFycjtcbiAgICB9LCBbXSk7XG5cbiAgICB0aGlzLnBpY2tlci5zZXRWaWV3U3dpdGNoTGFiZWwodGhpcy55ZWFyKTtcbiAgICB0aGlzLnBpY2tlci5zZXRQcmV2QnRuRGlzYWJsZWQodGhpcy55ZWFyIDw9IHRoaXMubWluWWVhcik7XG4gICAgdGhpcy5waWNrZXIuc2V0TmV4dEJ0bkRpc2FibGVkKHRoaXMueWVhciA+PSB0aGlzLm1heFllYXIpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkW3RoaXMueWVhcl0gfHwgW107XG4gICAgY29uc3QgeXJPdXRPZlJhbmdlID0gdGhpcy55ZWFyIDwgdGhpcy5taW5ZZWFyIHx8IHRoaXMueWVhciA+IHRoaXMubWF4WWVhcjtcbiAgICBjb25zdCBpc01pblllYXIgPSB0aGlzLnllYXIgPT09IHRoaXMubWluWWVhcjtcbiAgICBjb25zdCBpc01heFllYXIgPSB0aGlzLnllYXIgPT09IHRoaXMubWF4WWVhcjtcbiAgICBjb25zdCByYW5nZSA9IGNvbXB1dGVNb250aFJhbmdlKHRoaXMucmFuZ2UsIHRoaXMueWVhcik7XG5cbiAgICBBcnJheS5mcm9tKHRoaXMuZ3JpZC5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBjb25zdCBkYXRlID0gZGF0ZVZhbHVlKHRoaXMueWVhciwgaW5kZXgsIDEpO1xuXG4gICAgICBlbC5jbGFzc05hbWUgPSBgZGF0ZXBpY2tlci1jZWxsICR7dGhpcy5jZWxsQ2xhc3N9YDtcbiAgICAgIGlmICh0aGlzLmlzTWluVmlldykge1xuICAgICAgICBlbC5kYXRhc2V0LmRhdGUgPSBkYXRlO1xuICAgICAgfVxuICAgICAgLy8gcmVzZXQgdGV4dCBvbiBldmVyeSByZW5kZXIgdG8gY2xlYXIgdGhlIGN1c3RvbSBjb250ZW50IHNldFxuICAgICAgLy8gYnkgYmVmb3JlU2hvdyBob29rIGF0IHByZXZpb3VzIHJlbmRlclxuICAgICAgZWwudGV4dENvbnRlbnQgPSB0aGlzLm1vbnRoTmFtZXNbaW5kZXhdO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHlyT3V0T2ZSYW5nZVxuICAgICAgICB8fCBpc01pblllYXIgJiYgaW5kZXggPCB0aGlzLm1pbk1vbnRoXG4gICAgICAgIHx8IGlzTWF4WWVhciAmJiBpbmRleCA+IHRoaXMubWF4TW9udGhcbiAgICAgICAgfHwgdGhpcy5kaXNhYmxlZC5pbmNsdWRlcyhpbmRleClcbiAgICAgICkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHJhbmdlKSB7XG4gICAgICAgIGNvbnN0IFtyYW5nZVN0YXJ0LCByYW5nZUVuZF0gPSByYW5nZTtcbiAgICAgICAgaWYgKGluZGV4ID4gcmFuZ2VTdGFydCAmJiBpbmRleCA8IHJhbmdlRW5kKSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1zdGFydCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gcmFuZ2VFbmQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1lbmQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGVkLmluY2x1ZGVzKGluZGV4KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5iZWZvcmVTaG93KSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUJlZm9yZUhvb2soZWwsIGluZGV4LCBkYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgdmlldyBVSSBieSBhcHBseWluZyB0aGUgY2hhbmdlcyBvZiBzZWxlY3RlZCBhbmQgZm9jdXNlZCBpdGVtc1xuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFt0aGlzLnllYXJdIHx8IFtdO1xuICAgIGNvbnN0IFtyYW5nZVN0YXJ0LCByYW5nZUVuZF0gPSBjb21wdXRlTW9udGhSYW5nZSh0aGlzLnJhbmdlLCB0aGlzLnllYXIpIHx8IFtdO1xuICAgIHRoaXMuZ3JpZFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZSwgLnJhbmdlLXN0YXJ0LCAucmFuZ2UtZW5kLCAuc2VsZWN0ZWQsIC5mb2N1c2VkJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZScsICdyYW5nZS1zdGFydCcsICdyYW5nZS1lbmQnLCAnc2VsZWN0ZWQnLCAnZm9jdXNlZCcpO1xuICAgICAgfSk7XG4gICAgQXJyYXkuZnJvbSh0aGlzLmdyaWQuY2hpbGRyZW4pLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGluZGV4ID4gcmFuZ2VTdGFydCAmJiBpbmRleCA8IHJhbmdlRW5kKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlJyk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gcmFuZ2VFbmQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UtZW5kJyk7XG4gICAgICB9XG4gICAgICBpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoaW5kZXgpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IHRoaXMuZm9jdXNlZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHZpZXcgVUkgYnkgYXBwbHlpbmcgdGhlIGNoYW5nZSBvZiBmb2N1c2VkIGl0ZW1cbiAgcmVmcmVzaEZvY3VzKCkge1xuICAgIHRoaXMuZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9jdXNlZCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XG4gICAgfSk7XG4gICAgdGhpcy5ncmlkLmNoaWxkcmVuW3RoaXMuZm9jdXNlZF0uY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICB9XG59IiwiaW1wb3J0IHtwdXNoVW5pcXVlfSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUwsIHJlcGxhY2VDaGlsZE5vZGVzfSBmcm9tICcuLi8uLi9saWIvZG9tLmpzJztcblxuLy8gQmFzZSBjbGFzcyBvZiB0aGUgdmlldyBjbGFzc2VzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgY29uc3RydWN0b3IocGlja2VyLCBjb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZywge1xuICAgICAgcGlja2VyLFxuICAgICAgZWxlbWVudDogcGFyc2VIVE1MKGA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci12aWV3XCI+PC9kaXY+YCkuZmlyc3RDaGlsZCxcbiAgICAgIHNlbGVjdGVkOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmluaXQodGhpcy5waWNrZXIuZGF0ZXBpY2tlci5jb25maWcpO1xuICB9XG5cbiAgaW5pdChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMucGlja0xldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNNaW5WaWV3ID0gdGhpcy5pZCA9PT0gb3B0aW9ucy5waWNrTGV2ZWw7XG4gICAgfVxuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLnVwZGF0ZUZvY3VzKCk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIC8vIEV4ZWN1dGUgYmVmb3JlU2hvdygpIGNhbGxiYWNrIGFuZCBhcHBseSB0aGUgcmVzdWx0IHRvIHRoZSBlbGVtZW50XG4gIC8vIGFyZ3M6XG4gIC8vIC0gY3VycmVudCAtIGN1cnJlbnQgdmFsdWUgb24gdGhlIGl0ZXJhdGlvbiBvbiB2aWV3IHJlbmRlcmluZ1xuICAvLyAtIHRpbWVWYWx1ZSAtIHRpbWUgdmFsdWUgb2YgdGhlIGRhdGUgdG8gcGFzcyB0byBiZWZvcmVTaG93KClcbiAgcGVyZm9ybUJlZm9yZUhvb2soZWwsIGN1cnJlbnQsIHRpbWVWYWx1ZSkge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmJlZm9yZVNob3cobmV3IERhdGUodGltZVZhbHVlKSk7XG4gICAgc3dpdGNoICh0eXBlb2YgcmVzdWx0KSB7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmVzdWx0ID0ge2VuYWJsZWQ6IHJlc3VsdH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmVzdWx0ID0ge2NsYXNzZXM6IHJlc3VsdH07XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgaWYgKHJlc3VsdC5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICBwdXNoVW5pcXVlKHRoaXMuZGlzYWJsZWQsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5jbGFzc2VzKSB7XG4gICAgICAgIGNvbnN0IGV4dHJhQ2xhc3NlcyA9IHJlc3VsdC5jbGFzc2VzLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uZXh0cmFDbGFzc2VzKTtcbiAgICAgICAgaWYgKGV4dHJhQ2xhc3Nlcy5pbmNsdWRlcygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgIHB1c2hVbmlxdWUodGhpcy5kaXNhYmxlZCwgY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuY29udGVudCkge1xuICAgICAgICByZXBsYWNlQ2hpbGROb2RlcyhlbCwgcmVzdWx0LmNvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtoYXNQcm9wZXJ0eSwgcHVzaFVuaXF1ZSwgY3JlYXRlVGFnUmVwZWF0fSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHtkYXRlVmFsdWUsIHN0YXJ0T2ZZZWFyUGVyaW9kfSBmcm9tICcuLi8uLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge3BhcnNlSFRNTH0gZnJvbSAnLi4vLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnO1xuXG5mdW5jdGlvbiB0b1RpdGxlQ2FzZSh3b3JkKSB7XG4gIHJldHVybiBbLi4ud29yZF0ucmVkdWNlKChzdHIsIGNoLCBpeCkgPT4gc3RyICs9IGl4ID8gY2ggOiBjaC50b1VwcGVyQ2FzZSgpLCAnJyk7XG59XG5cbi8vIENsYXNzIHJlcHJlc2VudGluZyB0aGUgeWVhcnMgYW5kIGRlY2FkZXMgdmlldyBlbGVtZW50c1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVhcnNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGNvbnN0cnVjdG9yKHBpY2tlciwgY29uZmlnKSB7XG4gICAgc3VwZXIocGlja2VyLCBjb25maWcpO1xuICB9XG5cbiAgaW5pdChvcHRpb25zLCBvbkNvbnN0cnVjdGlvbiA9IHRydWUpIHtcbiAgICBpZiAob25Db25zdHJ1Y3Rpb24pIHtcbiAgICAgIHRoaXMubmF2U3RlcCA9IHRoaXMuc3RlcCAqIDEwO1xuICAgICAgdGhpcy5iZWZvcmVTaG93T3B0aW9uID0gYGJlZm9yZVNob3cke3RvVGl0bGVDYXNlKHRoaXMuY2VsbENsYXNzKX1gO1xuICAgICAgdGhpcy5ncmlkID0gdGhpcy5lbGVtZW50O1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5uYW1lLCAnZGF0ZXBpY2tlci1ncmlkJyk7XG4gICAgICB0aGlzLmdyaWQuYXBwZW5kQ2hpbGQocGFyc2VIVE1MKGNyZWF0ZVRhZ1JlcGVhdCgnc3BhbicsIDEyKSkpO1xuICAgIH1cbiAgICBzdXBlci5pbml0KG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtaW5EYXRlJykpIHtcbiAgICAgIGlmIChvcHRpb25zLm1pbkRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1pblllYXIgPSB0aGlzLm1pbkRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1pblllYXIgPSBzdGFydE9mWWVhclBlcmlvZChvcHRpb25zLm1pbkRhdGUsIHRoaXMuc3RlcCk7XG4gICAgICAgIHRoaXMubWluRGF0ZSA9IGRhdGVWYWx1ZSh0aGlzLm1pblllYXIsIDAsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzUHJvcGVydHkob3B0aW9ucywgJ21heERhdGUnKSkge1xuICAgICAgaWYgKG9wdGlvbnMubWF4RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWF4WWVhciA9IHRoaXMubWF4RGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWF4WWVhciA9IHN0YXJ0T2ZZZWFyUGVyaW9kKG9wdGlvbnMubWF4RGF0ZSwgdGhpcy5zdGVwKTtcbiAgICAgICAgdGhpcy5tYXhEYXRlID0gZGF0ZVZhbHVlKHRoaXMubWF4WWVhciwgMTEsIDMxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuaXNNaW5WaWV3KSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGF0ZXNEaXNhYmxlZCA9IG9wdGlvbnMuZGF0ZXNEaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlc0Rpc2FibGVkID0gW107XG4gICAgfVxuICAgIGlmIChvcHRpb25zW3RoaXMuYmVmb3JlU2hvd09wdGlvbl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgYmVmb3JlU2hvdyA9IG9wdGlvbnNbdGhpcy5iZWZvcmVTaG93T3B0aW9uXTtcbiAgICAgIHRoaXMuYmVmb3JlU2hvdyA9IHR5cGVvZiBiZWZvcmVTaG93ID09PSAnZnVuY3Rpb24nID8gYmVmb3JlU2hvdyA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgdmlldydzIHNldHRpbmdzIHRvIHJlZmxlY3QgdGhlIHZpZXdEYXRlIHNldCBvbiB0aGUgcGlja2VyXG4gIHVwZGF0ZUZvY3VzKCkge1xuICAgIGNvbnN0IHZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5waWNrZXIudmlld0RhdGUpO1xuICAgIGNvbnN0IGZpcnN0ID0gc3RhcnRPZlllYXJQZXJpb2Qodmlld0RhdGUsIHRoaXMubmF2U3RlcCk7XG4gICAgY29uc3QgbGFzdCA9IGZpcnN0ICsgOSAqIHRoaXMuc3RlcDtcblxuICAgIHRoaXMuZmlyc3QgPSBmaXJzdDtcbiAgICB0aGlzLmxhc3QgPSBsYXN0O1xuICAgIHRoaXMuc3RhcnQgPSBmaXJzdCAtIHRoaXMuc3RlcDtcbiAgICB0aGlzLmZvY3VzZWQgPSBzdGFydE9mWWVhclBlcmlvZCh2aWV3RGF0ZSwgdGhpcy5zdGVwKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB2aWV3J3Mgc2V0dGluZ3MgdG8gcmVmbGVjdCB0aGUgc2VsZWN0ZWQgZGF0ZXNcbiAgdXBkYXRlU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHtkYXRlcywgcmFuZ2VwaWNrZXJ9ID0gdGhpcy5waWNrZXIuZGF0ZXBpY2tlcjtcbiAgICB0aGlzLnNlbGVjdGVkID0gZGF0ZXMucmVkdWNlKCh5ZWFycywgdGltZVZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gcHVzaFVuaXF1ZSh5ZWFycywgc3RhcnRPZlllYXJQZXJpb2QodGltZVZhbHVlLCB0aGlzLnN0ZXApKTtcbiAgICB9LCBbXSk7XG4gICAgaWYgKHJhbmdlcGlja2VyICYmIHJhbmdlcGlja2VyLmRhdGVzKSB7XG4gICAgICB0aGlzLnJhbmdlID0gcmFuZ2VwaWNrZXIuZGF0ZXMubWFwKHRpbWVWYWx1ZSA9PiB7XG4gICAgICAgIGlmICh0aW1lVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBzdGFydE9mWWVhclBlcmlvZCh0aW1lVmFsdWUsIHRoaXMuc3RlcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgZW50aXJlIHZpZXcgVUlcbiAgcmVuZGVyKCkge1xuICAgIC8vIHJlZnJlc2ggZGlzYWJsZWQgeWVhcnMgb24gZXZlcnkgcmVuZGVyIGluIG9yZGVyIHRvIGNsZWFyIHRoZSBvbmVzIGFkZGVkXG4gICAgLy8gYnkgYmVmb3JlU2hvdyBob29rIGF0IHByZXZpb3VzIHJlbmRlclxuICAgIC8vIHRoaXMuZGlzYWJsZWQgPSBbLi4udGhpcy5kYXRlc0Rpc2FibGVkXTtcbiAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5kYXRlc0Rpc2FibGVkLm1hcChkaXNhYmxlZCA9PiBuZXcgRGF0ZShkaXNhYmxlZCkuZ2V0RnVsbFllYXIoKSk7XG5cbiAgICB0aGlzLnBpY2tlci5zZXRWaWV3U3dpdGNoTGFiZWwoYCR7dGhpcy5maXJzdH0tJHt0aGlzLmxhc3R9YCk7XG4gICAgdGhpcy5waWNrZXIuc2V0UHJldkJ0bkRpc2FibGVkKHRoaXMuZmlyc3QgPD0gdGhpcy5taW5ZZWFyKTtcbiAgICB0aGlzLnBpY2tlci5zZXROZXh0QnRuRGlzYWJsZWQodGhpcy5sYXN0ID49IHRoaXMubWF4WWVhcik7XG5cbiAgICBBcnJheS5mcm9tKHRoaXMuZ3JpZC5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGFydCArIChpbmRleCAqIHRoaXMuc3RlcCk7XG4gICAgICBjb25zdCBkYXRlID0gZGF0ZVZhbHVlKGN1cnJlbnQsIDAsIDEpO1xuXG4gICAgICBlbC5jbGFzc05hbWUgPSBgZGF0ZXBpY2tlci1jZWxsICR7dGhpcy5jZWxsQ2xhc3N9YDtcbiAgICAgIGlmICh0aGlzLmlzTWluVmlldykge1xuICAgICAgICBlbC5kYXRhc2V0LmRhdGUgPSBkYXRlO1xuICAgICAgfVxuICAgICAgZWwudGV4dENvbnRlbnQgPSBlbC5kYXRhc2V0LnllYXIgPSBjdXJyZW50O1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncHJldicpO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMTEpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPCB0aGlzLm1pblllYXIgfHwgY3VycmVudCA+IHRoaXMubWF4WWVhciB8fCB0aGlzLmRpc2FibGVkLmluY2x1ZGVzKGN1cnJlbnQpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gdGhpcy5yYW5nZTtcbiAgICAgICAgaWYgKGN1cnJlbnQgPiByYW5nZVN0YXJ0ICYmIGN1cnJlbnQgPCByYW5nZUVuZCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1zdGFydCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZUVuZCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLWVuZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHRoaXMuZm9jdXNlZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmJlZm9yZVNob3cpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtQmVmb3JlSG9vayhlbCwgY3VycmVudCwgZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHZpZXcgVUkgYnkgYXBwbHlpbmcgdGhlIGNoYW5nZXMgb2Ygc2VsZWN0ZWQgYW5kIGZvY3VzZWQgaXRlbXNcbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gdGhpcy5yYW5nZSB8fCBbXTtcbiAgICB0aGlzLmdyaWRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2UsIC5yYW5nZS1zdGFydCwgLnJhbmdlLWVuZCwgLnNlbGVjdGVkLCAuZm9jdXNlZCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2UnLCAncmFuZ2Utc3RhcnQnLCAncmFuZ2UtZW5kJywgJ3NlbGVjdGVkJywgJ2ZvY3VzZWQnKTtcbiAgICAgIH0pO1xuICAgIEFycmF5LmZyb20odGhpcy5ncmlkLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IE51bWJlcihlbC50ZXh0Q29udGVudCk7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY3VycmVudCA+IHJhbmdlU3RhcnQgJiYgY3VycmVudCA8IHJhbmdlRW5kKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlJyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VTdGFydCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1zdGFydCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlRW5kKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLWVuZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoY3VycmVudCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSB0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSB2aWV3IFVJIGJ5IGFwcGx5aW5nIHRoZSBjaGFuZ2Ugb2YgZm9jdXNlZCBpdGVtXG4gIHJlZnJlc2hGb2N1cygpIHtcbiAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKHRoaXMuZm9jdXNlZCAtIHRoaXMuc3RhcnQpIC8gdGhpcy5zdGVwKTtcbiAgICB0aGlzLmdyaWQucXVlcnlTZWxlY3RvckFsbCgnLmZvY3VzZWQnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JpZC5jaGlsZHJlbltpbmRleF0uY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGF0ZXBpY2tlciIsImRhdGVwaWNrZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9