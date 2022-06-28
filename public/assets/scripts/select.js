(self["webpackChunk"] = self["webpackChunk"] || []).push([["select"],{

/***/ "./resources/scripts/modules/select.js":
/*!*********************************************!*\
  !*** ./resources/scripts/modules/select.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "select": () => (/* binding */ select)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tom-select */ "./node_modules/tom-select/dist/js/tom-select.complete.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tom_select__WEBPACK_IMPORTED_MODULE_3__);





var select = function select() {
  document.querySelectorAll('.reg-form__select').forEach(function (el) {
    new (tom_select__WEBPACK_IMPORTED_MODULE_3___default())(el, {
      create: true,
      sortField: {
        field: 'text',
        direction: 'asc'
      }
    });
  });
};



/***/ }),

/***/ "./node_modules/tom-select/dist/js/tom-select.complete.js":
/*!****************************************************************!*\
  !*** ./node_modules/tom-select/dist/js/tom-select.complete.js ***!
  \****************************************************************/
/***/ (function(module) {

/**
* Tom Select v2.0.3
* Licensed under the Apache License, Version 2.0 (the "License");
*/

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
})(this, (function () { 'use strict';

	/**
	 * MicroEvent - to make any js object an event emitter
	 *
	 * - pure javascript - server compatible, browser compatible
	 * - dont rely on the browser doms
	 * - super simple - you get it immediatly, no mistery, no magic involved
	 *
	 * @author Jerome Etienne (https://github.com/jeromeetienne)
	 */

	/**
	 * Execute callback for each event in space separated list of event names
	 *
	 */
	function forEvents(events, callback) {
	  events.split(/\s+/).forEach(event => {
	    callback(event);
	  });
	}

	class MicroEvent {
	  constructor() {
	    this._events = void 0;
	    this._events = {};
	  }

	  on(events, fct) {
	    forEvents(events, event => {
	      this._events[event] = this._events[event] || [];

	      this._events[event].push(fct);
	    });
	  }

	  off(events, fct) {
	    var n = arguments.length;

	    if (n === 0) {
	      this._events = {};
	      return;
	    }

	    forEvents(events, event => {
	      if (n === 1) return delete this._events[event];
	      if (event in this._events === false) return;

	      this._events[event].splice(this._events[event].indexOf(fct), 1);
	    });
	  }

	  trigger(events, ...args) {
	    var self = this;
	    forEvents(events, event => {
	      if (event in self._events === false) return;

	      for (let fct of self._events[event]) {
	        fct.apply(self, args);
	      }
	    });
	  }

	}

	/**
	 * microplugin.js
	 * Copyright (c) 2013 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */
	function MicroPlugin(Interface) {
	  Interface.plugins = {};
	  return class extends Interface {
	    constructor(...args) {
	      super(...args);
	      this.plugins = {
	        names: [],
	        settings: {},
	        requested: {},
	        loaded: {}
	      };
	    }

	    /**
	     * Registers a plugin.
	     *
	     * @param {function} fn
	     */
	    static define(name, fn) {
	      Interface.plugins[name] = {
	        'name': name,
	        'fn': fn
	      };
	    }
	    /**
	     * Initializes the listed plugins (with options).
	     * Acceptable formats:
	     *
	     * List (without options):
	     *   ['a', 'b', 'c']
	     *
	     * List (with options):
	     *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
	     *
	     * Hash (with options):
	     *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
	     *
	     * @param {array|object} plugins
	     */


	    initializePlugins(plugins) {
	      var key, name;
	      const self = this;
	      const queue = [];

	      if (Array.isArray(plugins)) {
	        plugins.forEach(plugin => {
	          if (typeof plugin === 'string') {
	            queue.push(plugin);
	          } else {
	            self.plugins.settings[plugin.name] = plugin.options;
	            queue.push(plugin.name);
	          }
	        });
	      } else if (plugins) {
	        for (key in plugins) {
	          if (plugins.hasOwnProperty(key)) {
	            self.plugins.settings[key] = plugins[key];
	            queue.push(key);
	          }
	        }
	      }

	      while (name = queue.shift()) {
	        self.require(name);
	      }
	    }

	    loadPlugin(name) {
	      var self = this;
	      var plugins = self.plugins;
	      var plugin = Interface.plugins[name];

	      if (!Interface.plugins.hasOwnProperty(name)) {
	        throw new Error('Unable to find "' + name + '" plugin');
	      }

	      plugins.requested[name] = true;
	      plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
	      plugins.names.push(name);
	    }
	    /**
	     * Initializes a plugin.
	     *
	     */


	    require(name) {
	      var self = this;
	      var plugins = self.plugins;

	      if (!self.plugins.loaded.hasOwnProperty(name)) {
	        if (plugins.requested[name]) {
	          throw new Error('Plugin has circular dependency ("' + name + '")');
	        }

	        self.loadPlugin(name);
	      }

	      return plugins.loaded[name];
	    }

	  };
	}

	// https://github.com/andrewrk/node-diacritics/blob/master/index.js
	var latin_pat;
	const accent_pat = '[\u0300-\u036F\u{b7}\u{2be}]'; // \u{2bc}

	const accent_reg = new RegExp(accent_pat, 'g');
	var diacritic_patterns;
	const latin_convert = {
	  'æ': 'ae',
	  'ⱥ': 'a',
	  'ø': 'o'
	};
	const convert_pat = new RegExp(Object.keys(latin_convert).join('|'), 'g');
	/**
	 * code points generated from toCodePoints();
	 * removed 65339 to 65345
	 */

	const code_points = [[67, 67], [160, 160], [192, 438], [452, 652], [961, 961], [1019, 1019], [1083, 1083], [1281, 1289], [1984, 1984], [5095, 5095], [7429, 7441], [7545, 7549], [7680, 7935], [8580, 8580], [9398, 9449], [11360, 11391], [42792, 42793], [42802, 42851], [42873, 42897], [42912, 42922], [64256, 64260], [65313, 65338], [65345, 65370]];
	/**
	 * Remove accents
	 * via https://github.com/krisk/Fuse/issues/133#issuecomment-318692703
	 *
	 */

	const asciifold = str => {
	  return str.normalize('NFKD').replace(accent_reg, '').toLowerCase().replace(convert_pat, function (foreignletter) {
	    return latin_convert[foreignletter];
	  });
	};
	/**
	 * Convert array of strings to a regular expression
	 *	ex ['ab','a'] => (?:ab|a)
	 * 	ex ['a','b'] => [ab]
	 *
	 */


	const arrayToPattern = (chars, glue = '|') => {
	  if (chars.length == 1) {
	    return chars[0];
	  }

	  var longest = 1;
	  chars.forEach(a => {
	    longest = Math.max(longest, a.length);
	  });

	  if (longest == 1) {
	    return '[' + chars.join('') + ']';
	  }

	  return '(?:' + chars.join(glue) + ')';
	};
	/**
	 * Get all possible combinations of substrings that add up to the given string
	 * https://stackoverflow.com/questions/30169587/find-all-the-combination-of-substrings-that-add-up-to-the-given-string
	 *
	 */

	const allSubstrings = input => {
	  if (input.length === 1) return [[input]];
	  var result = [];
	  allSubstrings(input.substring(1)).forEach(function (subresult) {
	    var tmp = subresult.slice(0);
	    tmp[0] = input.charAt(0) + tmp[0];
	    result.push(tmp);
	    tmp = subresult.slice(0);
	    tmp.unshift(input.charAt(0));
	    result.push(tmp);
	  });
	  return result;
	};
	/**
	 * Generate a list of diacritics from the list of code points
	 *
	 */

	const generateDiacritics = () => {
	  var diacritics = {};
	  code_points.forEach(code_range => {
	    for (let i = code_range[0]; i <= code_range[1]; i++) {
	      let diacritic = String.fromCharCode(i);
	      let latin = asciifold(diacritic);

	      if (latin == diacritic.toLowerCase()) {
	        continue;
	      }

	      if (!(latin in diacritics)) {
	        diacritics[latin] = [latin];
	      }

	      var patt = new RegExp(arrayToPattern(diacritics[latin]), 'iu');

	      if (diacritic.match(patt)) {
	        continue;
	      }

	      diacritics[latin].push(diacritic);
	    }
	  });
	  var latin_chars = Object.keys(diacritics); // latin character pattern
	  // match longer substrings first

	  latin_chars = latin_chars.sort((a, b) => b.length - a.length);
	  latin_pat = new RegExp('(' + arrayToPattern(latin_chars) + accent_pat + '*)', 'g'); // build diacritic patterns
	  // ae needs: 
	  //	(?:(?:ae|Æ|Ǽ|Ǣ)|(?:A|Ⓐ|Ａ...)(?:E|ɛ|Ⓔ...))

	  var diacritic_patterns = {};
	  latin_chars.sort((a, b) => a.length - b.length).forEach(latin => {
	    var substrings = allSubstrings(latin);
	    var pattern = substrings.map(sub_pat => {
	      sub_pat = sub_pat.map(l => {
	        if (diacritics.hasOwnProperty(l)) {
	          return arrayToPattern(diacritics[l]);
	        }

	        return l;
	      });
	      return arrayToPattern(sub_pat, '');
	    });
	    diacritic_patterns[latin] = arrayToPattern(pattern);
	  });
	  return diacritic_patterns;
	};
	/**
	 * Expand a regular expression pattern to include diacritics
	 * 	eg /a/ becomes /aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑAⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ/
	 *
	 */

	const diacriticRegexPoints = regex => {
	  if (diacritic_patterns === undefined) {
	    diacritic_patterns = generateDiacritics();
	  }

	  const decomposed = regex.normalize('NFKD').toLowerCase();
	  return decomposed.split(latin_pat).map(part => {
	    if (part == '') {
	      return '';
	    } // "ﬄ" or "ffl"


	    const no_accent = asciifold(part);

	    if (diacritic_patterns.hasOwnProperty(no_accent)) {
	      return diacritic_patterns[no_accent];
	    } // 'أهلا' (\u{623}\u{647}\u{644}\u{627}) or 'أهلا' (\u{627}\u{654}\u{647}\u{644}\u{627})


	    const composed_part = part.normalize('NFC');

	    if (composed_part != part) {
	      return arrayToPattern([part, composed_part]);
	    }

	    return part;
	  }).join('');
	};

	// @ts-ignore TS2691 "An import path cannot end with a '.ts' extension"

	/**
	 * A property getter resolving dot-notation
	 * @param  {Object}  obj     The root object to fetch property on
	 * @param  {String}  name    The optionally dotted property name to fetch
	 * @return {Object}          The resolved property value
	 */
	const getAttr = (obj, name) => {
	  if (!obj) return;
	  return obj[name];
	};
	/**
	 * A property getter resolving dot-notation
	 * @param  {Object}  obj     The root object to fetch property on
	 * @param  {String}  name    The optionally dotted property name to fetch
	 * @return {Object}          The resolved property value
	 */

	const getAttrNesting = (obj, name) => {
	  if (!obj) return;
	  var part,
	      names = name.split(".");

	  while ((part = names.shift()) && (obj = obj[part]));

	  return obj;
	};
	/**
	 * Calculates how close of a match the
	 * given value is against a search token.
	 *
	 */

	const scoreValue = (value, token, weight) => {
	  var score, pos;
	  if (!value) return 0;
	  value = value + '';
	  pos = value.search(token.regex);
	  if (pos === -1) return 0;
	  score = token.string.length / value.length;
	  if (pos === 0) score += 0.5;
	  return score * weight;
	};
	/**
	 *
	 * https://stackoverflow.com/questions/63006601/why-does-u-throw-an-invalid-escape-error
	 */

	const escape_regex = str => {
	  return (str + '').replace(/([\$\(-\+\.\?\[-\^\{-\}])/g, '\\$1');
	};
	/**
	 * Cast object property to an array if it exists and has a value
	 *
	 */

	const propToArray = (obj, key) => {
	  var value = obj[key];
	  if (typeof value == 'function') return value;

	  if (value && !Array.isArray(value)) {
	    obj[key] = [value];
	  }
	};
	/**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * iterate(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 */

	const iterate = (object, callback) => {
	  if (Array.isArray(object)) {
	    object.forEach(callback);
	  } else {
	    for (var key in object) {
	      if (object.hasOwnProperty(key)) {
	        callback(object[key], key);
	      }
	    }
	  }
	};
	const cmp = (a, b) => {
	  if (typeof a === 'number' && typeof b === 'number') {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  a = asciifold(a + '').toLowerCase();
	  b = asciifold(b + '').toLowerCase();
	  if (a > b) return 1;
	  if (b > a) return -1;
	  return 0;
	};

	/**
	 * sifter.js
	 * Copyright (c) 2013–2020 Brian Reavis & contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 * @author Brian Reavis <brian@thirdroute.com>
	 */

	class Sifter {
	  // []|{};

	  /**
	   * Textually searches arrays and hashes of objects
	   * by property (or multiple properties). Designed
	   * specifically for autocomplete.
	   *
	   */
	  constructor(items, settings) {
	    this.items = void 0;
	    this.settings = void 0;
	    this.items = items;
	    this.settings = settings || {
	      diacritics: true
	    };
	  }

	  /**
	   * Splits a search string into an array of individual
	   * regexps to be used to match results.
	   *
	   */
	  tokenize(query, respect_word_boundaries, weights) {
	    if (!query || !query.length) return [];
	    const tokens = [];
	    const words = query.split(/\s+/);
	    var field_regex;

	    if (weights) {
	      field_regex = new RegExp('^(' + Object.keys(weights).map(escape_regex).join('|') + ')\:(.*)$');
	    }

	    words.forEach(word => {
	      let field_match;
	      let field = null;
	      let regex = null; // look for "field:query" tokens

	      if (field_regex && (field_match = word.match(field_regex))) {
	        field = field_match[1];
	        word = field_match[2];
	      }

	      if (word.length > 0) {
	        regex = escape_regex(word);

	        if (this.settings.diacritics) {
	          regex = diacriticRegexPoints(regex);
	        }

	        if (respect_word_boundaries) regex = "\\b" + regex;
	      }

	      tokens.push({
	        string: word,
	        regex: regex ? new RegExp(regex, 'iu') : null,
	        field: field
	      });
	    });
	    return tokens;
	  }

	  /**
	   * Returns a function to be used to score individual results.
	   *
	   * Good matches will have a higher score than poor matches.
	   * If an item is not a match, 0 will be returned by the function.
	   *
	   * @returns {function}
	   */
	  getScoreFunction(query, options) {
	    var search = this.prepareSearch(query, options);
	    return this._getScoreFunction(search);
	  }

	  _getScoreFunction(search) {
	    const tokens = search.tokens,
	          token_count = tokens.length;

	    if (!token_count) {
	      return function () {
	        return 0;
	      };
	    }

	    const fields = search.options.fields,
	          weights = search.weights,
	          field_count = fields.length,
	          getAttrFn = search.getAttrFn;

	    if (!field_count) {
	      return function () {
	        return 1;
	      };
	    }
	    /**
	     * Calculates the score of an object
	     * against the search query.
	     *
	     */


	    const scoreObject = function () {
	      if (field_count === 1) {
	        return function (token, data) {
	          const field = fields[0].field;
	          return scoreValue(getAttrFn(data, field), token, weights[field]);
	        };
	      }

	      return function (token, data) {
	        var sum = 0; // is the token specific to a field?

	        if (token.field) {
	          const value = getAttrFn(data, token.field);

	          if (!token.regex && value) {
	            sum += 1 / field_count;
	          } else {
	            sum += scoreValue(value, token, 1);
	          }
	        } else {
	          iterate(weights, (weight, field) => {
	            sum += scoreValue(getAttrFn(data, field), token, weight);
	          });
	        }

	        return sum / field_count;
	      };
	    }();

	    if (token_count === 1) {
	      return function (data) {
	        return scoreObject(tokens[0], data);
	      };
	    }

	    if (search.options.conjunction === 'and') {
	      return function (data) {
	        var i = 0,
	            score,
	            sum = 0;

	        for (; i < token_count; i++) {
	          score = scoreObject(tokens[i], data);
	          if (score <= 0) return 0;
	          sum += score;
	        }

	        return sum / token_count;
	      };
	    } else {
	      return function (data) {
	        var sum = 0;
	        iterate(tokens, token => {
	          sum += scoreObject(token, data);
	        });
	        return sum / token_count;
	      };
	    }
	  }

	  /**
	   * Returns a function that can be used to compare two
	   * results, for sorting purposes. If no sorting should
	   * be performed, `null` will be returned.
	   *
	   * @return function(a,b)
	   */
	  getSortFunction(query, options) {
	    var search = this.prepareSearch(query, options);
	    return this._getSortFunction(search);
	  }

	  _getSortFunction(search) {
	    var i, n, implicit_score;
	    const self = this,
	          options = search.options,
	          sort = !search.query && options.sort_empty ? options.sort_empty : options.sort,
	          sort_flds = [],
	          multipliers = [];

	    if (typeof sort == 'function') {
	      return sort.bind(this);
	    }
	    /**
	     * Fetches the specified sort field value
	     * from a search result item.
	     *
	     */


	    const get_field = function get_field(name, result) {
	      if (name === '$score') return result.score;
	      return search.getAttrFn(self.items[result.id], name);
	    }; // parse options


	    if (sort) {
	      for (i = 0, n = sort.length; i < n; i++) {
	        if (search.query || sort[i].field !== '$score') {
	          sort_flds.push(sort[i]);
	        }
	      }
	    } // the "$score" field is implied to be the primary
	    // sort field, unless it's manually specified


	    if (search.query) {
	      implicit_score = true;

	      for (i = 0, n = sort_flds.length; i < n; i++) {
	        if (sort_flds[i].field === '$score') {
	          implicit_score = false;
	          break;
	        }
	      }

	      if (implicit_score) {
	        sort_flds.unshift({
	          field: '$score',
	          direction: 'desc'
	        });
	      }
	    } else {
	      for (i = 0, n = sort_flds.length; i < n; i++) {
	        if (sort_flds[i].field === '$score') {
	          sort_flds.splice(i, 1);
	          break;
	        }
	      }
	    }

	    for (i = 0, n = sort_flds.length; i < n; i++) {
	      multipliers.push(sort_flds[i].direction === 'desc' ? -1 : 1);
	    } // build function


	    const sort_flds_count = sort_flds.length;

	    if (!sort_flds_count) {
	      return null;
	    } else if (sort_flds_count === 1) {
	      const sort_fld = sort_flds[0].field;
	      const multiplier = multipliers[0];
	      return function (a, b) {
	        return multiplier * cmp(get_field(sort_fld, a), get_field(sort_fld, b));
	      };
	    } else {
	      return function (a, b) {
	        var i, result, field;

	        for (i = 0; i < sort_flds_count; i++) {
	          field = sort_flds[i].field;
	          result = multipliers[i] * cmp(get_field(field, a), get_field(field, b));
	          if (result) return result;
	        }

	        return 0;
	      };
	    }
	  }

	  /**
	   * Parses a search query and returns an object
	   * with tokens and fields ready to be populated
	   * with results.
	   *
	   */
	  prepareSearch(query, optsUser) {
	    const weights = {};
	    var options = Object.assign({}, optsUser);
	    propToArray(options, 'sort');
	    propToArray(options, 'sort_empty'); // convert fields to new format

	    if (options.fields) {
	      propToArray(options, 'fields');
	      const fields = [];
	      options.fields.forEach(field => {
	        if (typeof field == 'string') {
	          field = {
	            field: field,
	            weight: 1
	          };
	        }

	        fields.push(field);
	        weights[field.field] = 'weight' in field ? field.weight : 1;
	      });
	      options.fields = fields;
	    }

	    return {
	      options: options,
	      query: query.toLowerCase().trim(),
	      tokens: this.tokenize(query, options.respect_word_boundaries, weights),
	      total: 0,
	      items: [],
	      weights: weights,
	      getAttrFn: options.nesting ? getAttrNesting : getAttr
	    };
	  }

	  /**
	   * Searches through all items and returns a sorted array of matches.
	   *
	   */
	  search(query, options) {
	    var self = this,
	        score,
	        search;
	    search = this.prepareSearch(query, options);
	    options = search.options;
	    query = search.query; // generate result scoring function

	    const fn_score = options.score || self._getScoreFunction(search); // perform search and sort


	    if (query.length) {
	      iterate(self.items, (item, id) => {
	        score = fn_score(item);

	        if (options.filter === false || score > 0) {
	          search.items.push({
	            'score': score,
	            'id': id
	          });
	        }
	      });
	    } else {
	      iterate(self.items, (_, id) => {
	        search.items.push({
	          'score': 1,
	          'id': id
	        });
	      });
	    }

	    const fn_sort = self._getSortFunction(search);

	    if (fn_sort) search.items.sort(fn_sort); // apply limits

	    search.total = search.items.length;

	    if (typeof options.limit === 'number') {
	      search.items = search.items.slice(0, options.limit);
	    }

	    return search;
	  }

	}

	/**
	 * Return a dom element from either a dom query string, jQuery object, a dom element or html string
	 * https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
	 *
	 * param query should be {}
	 */

	const getDom = query => {
	  if (query.jquery) {
	    return query[0];
	  }

	  if (query instanceof HTMLElement) {
	    return query;
	  }

	  if (isHtmlString(query)) {
	    let div = document.createElement('div');
	    div.innerHTML = query.trim(); // Never return a text node of whitespace as the result

	    return div.firstChild;
	  }

	  return document.querySelector(query);
	};
	const isHtmlString = arg => {
	  if (typeof arg === 'string' && arg.indexOf('<') > -1) {
	    return true;
	  }

	  return false;
	};
	const escapeQuery = query => {
	  return query.replace(/['"\\]/g, '\\$&');
	};
	/**
	 * Dispatch an event
	 *
	 */

	const triggerEvent = (dom_el, event_name) => {
	  var event = document.createEvent('HTMLEvents');
	  event.initEvent(event_name, true, false);
	  dom_el.dispatchEvent(event);
	};
	/**
	 * Apply CSS rules to a dom element
	 *
	 */

	const applyCSS = (dom_el, css) => {
	  Object.assign(dom_el.style, css);
	};
	/**
	 * Add css classes
	 *
	 */

	const addClasses = (elmts, ...classes) => {
	  var norm_classes = classesArray(classes);
	  elmts = castAsArray(elmts);
	  elmts.map(el => {
	    norm_classes.map(cls => {
	      el.classList.add(cls);
	    });
	  });
	};
	/**
	 * Remove css classes
	 *
	 */

	const removeClasses = (elmts, ...classes) => {
	  var norm_classes = classesArray(classes);
	  elmts = castAsArray(elmts);
	  elmts.map(el => {
	    norm_classes.map(cls => {
	      el.classList.remove(cls);
	    });
	  });
	};
	/**
	 * Return arguments
	 *
	 */

	const classesArray = args => {
	  var classes = [];
	  iterate(args, _classes => {
	    if (typeof _classes === 'string') {
	      _classes = _classes.trim().split(/[\11\12\14\15\40]/);
	    }

	    if (Array.isArray(_classes)) {
	      classes = classes.concat(_classes);
	    }
	  });
	  return classes.filter(Boolean);
	};
	/**
	 * Create an array from arg if it's not already an array
	 *
	 */

	const castAsArray = arg => {
	  if (!Array.isArray(arg)) {
	    arg = [arg];
	  }

	  return arg;
	};
	/**
	 * Get the closest node to the evt.target matching the selector
	 * Stops at wrapper
	 *
	 */

	const parentMatch = (target, selector, wrapper) => {
	  if (wrapper && !wrapper.contains(target)) {
	    return;
	  }

	  while (target && target.matches) {
	    if (target.matches(selector)) {
	      return target;
	    }

	    target = target.parentNode;
	  }
	};
	/**
	 * Get the first or last item from an array
	 *
	 * > 0 - right (last)
	 * <= 0 - left (first)
	 *
	 */

	const getTail = (list, direction = 0) => {
	  if (direction > 0) {
	    return list[list.length - 1];
	  }

	  return list[0];
	};
	/**
	 * Return true if an object is empty
	 *
	 */

	const isEmptyObject = obj => {
	  return Object.keys(obj).length === 0;
	};
	/**
	 * Get the index of an element amongst sibling nodes of the same type
	 *
	 */

	const nodeIndex = (el, amongst) => {
	  if (!el) return -1;
	  amongst = amongst || el.nodeName;
	  var i = 0;

	  while (el = el.previousElementSibling) {
	    if (el.matches(amongst)) {
	      i++;
	    }
	  }

	  return i;
	};
	/**
	 * Set attributes of an element
	 *
	 */

	const setAttr = (el, attrs) => {
	  iterate(attrs, (val, attr) => {
	    if (val == null) {
	      el.removeAttribute(attr);
	    } else {
	      el.setAttribute(attr, '' + val);
	    }
	  });
	};
	/**
	 * Replace a node
	 */

	const replaceNode = (existing, replacement) => {
	  if (existing.parentNode) existing.parentNode.replaceChild(replacement, existing);
	};

	/**
	 * highlight v3 | MIT license | Johann Burkard <jb@eaio.com>
	 * Highlights arbitrary terms in a node.
	 *
	 * - Modified by Marshal <beatgates@gmail.com> 2011-6-24 (added regex)
	 * - Modified by Brian Reavis <brian@thirdroute.com> 2012-8-27 (cleanup)
	 */
	const highlight = (element, regex) => {
	  if (regex === null) return; // convet string to regex

	  if (typeof regex === 'string') {
	    if (!regex.length) return;
	    regex = new RegExp(regex, 'i');
	  } // Wrap matching part of text node with highlighting <span>, e.g.
	  // Soccer  ->  <span class="highlight">Soc</span>cer  for regex = /soc/i


	  const highlightText = node => {
	    var match = node.data.match(regex);

	    if (match && node.data.length > 0) {
	      var spannode = document.createElement('span');
	      spannode.className = 'highlight';
	      var middlebit = node.splitText(match.index);
	      middlebit.splitText(match[0].length);
	      var middleclone = middlebit.cloneNode(true);
	      spannode.appendChild(middleclone);
	      replaceNode(middlebit, spannode);
	      return 1;
	    }

	    return 0;
	  }; // Recurse element node, looking for child text nodes to highlight, unless element
	  // is childless, <script>, <style>, or already highlighted: <span class="hightlight">


	  const highlightChildren = node => {
	    if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName) && (node.className !== 'highlight' || node.tagName !== 'SPAN')) {
	      for (var i = 0; i < node.childNodes.length; ++i) {
	        i += highlightRecursive(node.childNodes[i]);
	      }
	    }
	  };

	  const highlightRecursive = node => {
	    if (node.nodeType === 3) {
	      return highlightText(node);
	    }

	    highlightChildren(node);
	    return 0;
	  };

	  highlightRecursive(element);
	};
	/**
	 * removeHighlight fn copied from highlight v5 and
	 * edited to remove with(), pass js strict mode, and use without jquery
	 */

	const removeHighlight = el => {
	  var elements = el.querySelectorAll("span.highlight");
	  Array.prototype.forEach.call(elements, function (el) {
	    var parent = el.parentNode;
	    parent.replaceChild(el.firstChild, el);
	    parent.normalize();
	  });
	};

	const KEY_A = 65;
	const KEY_RETURN = 13;
	const KEY_ESC = 27;
	const KEY_LEFT = 37;
	const KEY_UP = 38;
	const KEY_RIGHT = 39;
	const KEY_DOWN = 40;
	const KEY_BACKSPACE = 8;
	const KEY_DELETE = 46;
	const KEY_TAB = 9;
	const IS_MAC = typeof navigator === 'undefined' ? false : /Mac/.test(navigator.userAgent);
	const KEY_SHORTCUT = IS_MAC ? 'metaKey' : 'ctrlKey'; // ctrl key or apple key for ma

	var defaults = {
	  options: [],
	  optgroups: [],
	  plugins: [],
	  delimiter: ',',
	  splitOn: null,
	  // regexp or string for splitting up values from a paste command
	  persist: true,
	  diacritics: true,
	  create: null,
	  createOnBlur: false,
	  createFilter: null,
	  highlight: true,
	  openOnFocus: true,
	  shouldOpen: null,
	  maxOptions: 50,
	  maxItems: null,
	  hideSelected: null,
	  duplicates: false,
	  addPrecedence: false,
	  selectOnTab: false,
	  preload: null,
	  allowEmptyOption: false,
	  //closeAfterSelect: false,
	  loadThrottle: 300,
	  loadingClass: 'loading',
	  dataAttr: null,
	  //'data-data',
	  optgroupField: 'optgroup',
	  valueField: 'value',
	  labelField: 'text',
	  disabledField: 'disabled',
	  optgroupLabelField: 'label',
	  optgroupValueField: 'value',
	  lockOptgroupOrder: false,
	  sortField: '$order',
	  searchField: ['text'],
	  searchConjunction: 'and',
	  mode: null,
	  wrapperClass: 'ts-wrapper',
	  controlClass: 'ts-control',
	  dropdownClass: 'ts-dropdown',
	  dropdownContentClass: 'ts-dropdown-content',
	  itemClass: 'item',
	  optionClass: 'option',
	  dropdownParent: null,
	  controlInput: '<input type="text" autocomplete="off" size="1" />',
	  copyClassesToDropdown: false,
	  placeholder: null,
	  hidePlaceholder: null,
	  shouldLoad: function (query) {
	    return query.length > 0;
	  },

	  /*
	  load                 : null, // function(query, callback) { ... }
	  score                : null, // function(search) { ... }
	  onInitialize         : null, // function() { ... }
	  onChange             : null, // function(value) { ... }
	  onItemAdd            : null, // function(value, $item) { ... }
	  onItemRemove         : null, // function(value) { ... }
	  onClear              : null, // function() { ... }
	  onOptionAdd          : null, // function(value, data) { ... }
	  onOptionRemove       : null, // function(value) { ... }
	  onOptionClear        : null, // function() { ... }
	  onOptionGroupAdd     : null, // function(id, data) { ... }
	  onOptionGroupRemove  : null, // function(id) { ... }
	  onOptionGroupClear   : null, // function() { ... }
	  onDropdownOpen       : null, // function(dropdown) { ... }
	  onDropdownClose      : null, // function(dropdown) { ... }
	  onType               : null, // function(str) { ... }
	  onDelete             : null, // function(values) { ... }
	  */
	  render: {
	    /*
	    item: null,
	    optgroup: null,
	    optgroup_header: null,
	    option: null,
	    option_create: null
	    */
	  }
	};

	/**
	 * Converts a scalar to its best string representation
	 * for hash keys and HTML attribute values.
	 *
	 * Transformations:
	 *   'str'     -> 'str'
	 *   null      -> ''
	 *   undefined -> ''
	 *   true      -> '1'
	 *   false     -> '0'
	 *   0         -> '0'
	 *   1         -> '1'
	 *
	 */
	const hash_key = value => {
	  if (typeof value === 'undefined' || value === null) return null;
	  return get_hash(value);
	};
	const get_hash = value => {
	  if (typeof value === 'boolean') return value ? '1' : '0';
	  return value + '';
	};
	/**
	 * Escapes a string for use within HTML.
	 *
	 */

	const escape_html = str => {
	  return (str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	};
	/**
	 * Debounce the user provided load function
	 *
	 */

	const loadDebounce = (fn, delay) => {
	  var timeout;
	  return function (value, callback) {
	    var self = this;

	    if (timeout) {
	      self.loading = Math.max(self.loading - 1, 0);
	      clearTimeout(timeout);
	    }

	    timeout = setTimeout(function () {
	      timeout = null;
	      self.loadedSearches[value] = true;
	      fn.call(self, value, callback);
	    }, delay);
	  };
	};
	/**
	 * Debounce all fired events types listed in `types`
	 * while executing the provided `fn`.
	 *
	 */

	const debounce_events = (self, types, fn) => {
	  var type;
	  var trigger = self.trigger;
	  var event_args = {}; // override trigger method

	  self.trigger = function () {
	    var type = arguments[0];

	    if (types.indexOf(type) !== -1) {
	      event_args[type] = arguments;
	    } else {
	      return trigger.apply(self, arguments);
	    }
	  }; // invoke provided function


	  fn.apply(self, []);
	  self.trigger = trigger; // trigger queued events

	  for (type of types) {
	    if (type in event_args) {
	      trigger.apply(self, event_args[type]);
	    }
	  }
	};
	/**
	 * Determines the current selection within a text input control.
	 * Returns an object containing:
	 *   - start
	 *   - length
	 *
	 */

	const getSelection = input => {
	  return {
	    start: input.selectionStart || 0,
	    length: (input.selectionEnd || 0) - (input.selectionStart || 0)
	  };
	};
	/**
	 * Prevent default
	 *
	 */

	const preventDefault = (evt, stop = false) => {
	  if (evt) {
	    evt.preventDefault();

	    if (stop) {
	      evt.stopPropagation();
	    }
	  }
	};
	/**
	 * Prevent default
	 *
	 */

	const addEvent = (target, type, callback, options) => {
	  target.addEventListener(type, callback, options);
	};
	/**
	 * Return true if the requested key is down
	 * Will return false if more than one control character is pressed ( when [ctrl+shift+a] != [ctrl+a] )
	 * The current evt may not always set ( eg calling advanceSelection() )
	 *
	 */

	const isKeyDown = (key_name, evt) => {
	  if (!evt) {
	    return false;
	  }

	  if (!evt[key_name]) {
	    return false;
	  }

	  var count = (evt.altKey ? 1 : 0) + (evt.ctrlKey ? 1 : 0) + (evt.shiftKey ? 1 : 0) + (evt.metaKey ? 1 : 0);

	  if (count === 1) {
	    return true;
	  }

	  return false;
	};
	/**
	 * Get the id of an element
	 * If the id attribute is not set, set the attribute with the given id
	 *
	 */

	const getId = (el, id) => {
	  const existing_id = el.getAttribute('id');

	  if (existing_id) {
	    return existing_id;
	  }

	  el.setAttribute('id', id);
	  return id;
	};
	/**
	 * Returns a string with backslashes added before characters that need to be escaped.
	 */

	const addSlashes = str => {
	  return str.replace(/[\\"']/g, '\\$&');
	};
	/**
	 *
	 */

	const append = (parent, node) => {
	  if (node) parent.append(node);
	};

	function getSettings(input, settings_user) {
	  var settings = Object.assign({}, defaults, settings_user);
	  var attr_data = settings.dataAttr;
	  var field_label = settings.labelField;
	  var field_value = settings.valueField;
	  var field_disabled = settings.disabledField;
	  var field_optgroup = settings.optgroupField;
	  var field_optgroup_label = settings.optgroupLabelField;
	  var field_optgroup_value = settings.optgroupValueField;
	  var tag_name = input.tagName.toLowerCase();
	  var placeholder = input.getAttribute('placeholder') || input.getAttribute('data-placeholder');

	  if (!placeholder && !settings.allowEmptyOption) {
	    let option = input.querySelector('option[value=""]');

	    if (option) {
	      placeholder = option.textContent;
	    }
	  }

	  var settings_element = {
	    placeholder: placeholder,
	    options: [],
	    optgroups: [],
	    items: [],
	    maxItems: null
	  };
	  /**
	   * Initialize from a <select> element.
	   *
	   */

	  var init_select = () => {
	    var tagName;
	    var options = settings_element.options;
	    var optionsMap = {};
	    var group_count = 1;

	    var readData = el => {
	      var data = Object.assign({}, el.dataset); // get plain object from DOMStringMap

	      var json = attr_data && data[attr_data];

	      if (typeof json === 'string' && json.length) {
	        data = Object.assign(data, JSON.parse(json));
	      }

	      return data;
	    };

	    var addOption = (option, group) => {
	      var value = hash_key(option.value);
	      if (value == null) return;
	      if (!value && !settings.allowEmptyOption) return; // if the option already exists, it's probably been
	      // duplicated in another optgroup. in this case, push
	      // the current group to the "optgroup" property on the
	      // existing option so that it's rendered in both places.

	      if (optionsMap.hasOwnProperty(value)) {
	        if (group) {
	          var arr = optionsMap[value][field_optgroup];

	          if (!arr) {
	            optionsMap[value][field_optgroup] = group;
	          } else if (!Array.isArray(arr)) {
	            optionsMap[value][field_optgroup] = [arr, group];
	          } else {
	            arr.push(group);
	          }
	        }
	      } else {
	        var option_data = readData(option);
	        option_data[field_label] = option_data[field_label] || option.textContent;
	        option_data[field_value] = option_data[field_value] || value;
	        option_data[field_disabled] = option_data[field_disabled] || option.disabled;
	        option_data[field_optgroup] = option_data[field_optgroup] || group;
	        option_data.$option = option;
	        optionsMap[value] = option_data;
	        options.push(option_data);
	      }

	      if (option.selected) {
	        settings_element.items.push(value);
	      }
	    };

	    var addGroup = optgroup => {
	      var id, optgroup_data;
	      optgroup_data = readData(optgroup);
	      optgroup_data[field_optgroup_label] = optgroup_data[field_optgroup_label] || optgroup.getAttribute('label') || '';
	      optgroup_data[field_optgroup_value] = optgroup_data[field_optgroup_value] || group_count++;
	      optgroup_data[field_disabled] = optgroup_data[field_disabled] || optgroup.disabled;
	      settings_element.optgroups.push(optgroup_data);
	      id = optgroup_data[field_optgroup_value];
	      iterate(optgroup.children, option => {
	        addOption(option, id);
	      });
	    };

	    settings_element.maxItems = input.hasAttribute('multiple') ? null : 1;
	    iterate(input.children, child => {
	      tagName = child.tagName.toLowerCase();

	      if (tagName === 'optgroup') {
	        addGroup(child);
	      } else if (tagName === 'option') {
	        addOption(child);
	      }
	    });
	  };
	  /**
	   * Initialize from a <input type="text"> element.
	   *
	   */


	  var init_textbox = () => {
	    const data_raw = input.getAttribute(attr_data);

	    if (!data_raw) {
	      var value = input.value.trim() || '';
	      if (!settings.allowEmptyOption && !value.length) return;
	      const values = value.split(settings.delimiter);
	      iterate(values, value => {
	        const option = {};
	        option[field_label] = value;
	        option[field_value] = value;
	        settings_element.options.push(option);
	      });
	      settings_element.items = values;
	    } else {
	      settings_element.options = JSON.parse(data_raw);
	      iterate(settings_element.options, opt => {
	        settings_element.items.push(opt[field_value]);
	      });
	    }
	  };

	  if (tag_name === 'select') {
	    init_select();
	  } else {
	    init_textbox();
	  }

	  return Object.assign({}, defaults, settings_element, settings_user);
	}

	var instance_i = 0;
	class TomSelect extends MicroPlugin(MicroEvent) {
	  // @deprecated 1.8
	  constructor(input_arg, user_settings) {
	    super();
	    this.control_input = void 0;
	    this.wrapper = void 0;
	    this.dropdown = void 0;
	    this.control = void 0;
	    this.dropdown_content = void 0;
	    this.focus_node = void 0;
	    this.order = 0;
	    this.settings = void 0;
	    this.input = void 0;
	    this.tabIndex = void 0;
	    this.is_select_tag = void 0;
	    this.rtl = void 0;
	    this.inputId = void 0;
	    this._destroy = void 0;
	    this.sifter = void 0;
	    this.isOpen = false;
	    this.isDisabled = false;
	    this.isRequired = void 0;
	    this.isInvalid = false;
	    this.isValid = true;
	    this.isLocked = false;
	    this.isFocused = false;
	    this.isInputHidden = false;
	    this.isSetup = false;
	    this.ignoreFocus = false;
	    this.hasOptions = false;
	    this.currentResults = void 0;
	    this.lastValue = '';
	    this.caretPos = 0;
	    this.loading = 0;
	    this.loadedSearches = {};
	    this.activeOption = null;
	    this.activeItems = [];
	    this.optgroups = {};
	    this.options = {};
	    this.userOptions = {};
	    this.items = [];
	    instance_i++;
	    var dir;
	    var input = getDom(input_arg);

	    if (input.tomselect) {
	      throw new Error('Tom Select already initialized on this element');
	    }

	    input.tomselect = this; // detect rtl environment

	    var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
	    dir = computedStyle.getPropertyValue('direction'); // setup default state

	    const settings = getSettings(input, user_settings);
	    this.settings = settings;
	    this.input = input;
	    this.tabIndex = input.tabIndex || 0;
	    this.is_select_tag = input.tagName.toLowerCase() === 'select';
	    this.rtl = /rtl/i.test(dir);
	    this.inputId = getId(input, 'tomselect-' + instance_i);
	    this.isRequired = input.required; // search system

	    this.sifter = new Sifter(this.options, {
	      diacritics: settings.diacritics
	    }); // option-dependent defaults

	    settings.mode = settings.mode || (settings.maxItems === 1 ? 'single' : 'multi');

	    if (typeof settings.hideSelected !== 'boolean') {
	      settings.hideSelected = settings.mode === 'multi';
	    }

	    if (typeof settings.hidePlaceholder !== 'boolean') {
	      settings.hidePlaceholder = settings.mode !== 'multi';
	    } // set up createFilter callback


	    var filter = settings.createFilter;

	    if (typeof filter !== 'function') {
	      if (typeof filter === 'string') {
	        filter = new RegExp(filter);
	      }

	      if (filter instanceof RegExp) {
	        settings.createFilter = input => filter.test(input);
	      } else {
	        settings.createFilter = value => {
	          return this.settings.duplicates || !this.options[value];
	        };
	      }
	    }

	    this.initializePlugins(settings.plugins);
	    this.setupCallbacks();
	    this.setupTemplates(); // Create all elements

	    const wrapper = getDom('<div>');
	    const control = getDom('<div>');

	    const dropdown = this._render('dropdown');

	    const dropdown_content = getDom(`<div role="listbox" tabindex="-1">`);
	    const classes = this.input.getAttribute('class') || '';
	    const inputMode = settings.mode;
	    var control_input;
	    addClasses(wrapper, settings.wrapperClass, classes, inputMode);
	    addClasses(control, settings.controlClass);
	    append(wrapper, control);
	    addClasses(dropdown, settings.dropdownClass, inputMode);

	    if (settings.copyClassesToDropdown) {
	      addClasses(dropdown, classes);
	    }

	    addClasses(dropdown_content, settings.dropdownContentClass);
	    append(dropdown, dropdown_content);
	    getDom(settings.dropdownParent || wrapper).appendChild(dropdown); // default controlInput

	    if (isHtmlString(settings.controlInput)) {
	      control_input = getDom(settings.controlInput); // set attributes

	      var attrs = ['autocorrect', 'autocapitalize', 'autocomplete'];
	      iterate(attrs, attr => {
	        if (input.getAttribute(attr)) {
	          setAttr(control_input, {
	            [attr]: input.getAttribute(attr)
	          });
	        }
	      });
	      control_input.tabIndex = -1;
	      control.appendChild(control_input);
	      this.focus_node = control_input; // dom element
	    } else if (settings.controlInput) {
	      control_input = getDom(settings.controlInput);
	      this.focus_node = control_input;
	    } else {
	      control_input = getDom('<input/>');
	      this.focus_node = control;
	    }

	    this.wrapper = wrapper;
	    this.dropdown = dropdown;
	    this.dropdown_content = dropdown_content;
	    this.control = control;
	    this.control_input = control_input;
	    this.setup();
	  }
	  /**
	   * set up event bindings.
	   *
	   */


	  setup() {
	    const self = this;
	    const settings = self.settings;
	    const control_input = self.control_input;
	    const dropdown = self.dropdown;
	    const dropdown_content = self.dropdown_content;
	    const wrapper = self.wrapper;
	    const control = self.control;
	    const input = self.input;
	    const focus_node = self.focus_node;
	    const passive_event = {
	      passive: true
	    };
	    const listboxId = self.inputId + '-ts-dropdown';
	    setAttr(dropdown_content, {
	      id: listboxId
	    });
	    setAttr(focus_node, {
	      role: 'combobox',
	      'aria-haspopup': 'listbox',
	      'aria-expanded': 'false',
	      'aria-controls': listboxId
	    });
	    const control_id = getId(focus_node, self.inputId + '-ts-control');
	    const query = "label[for='" + escapeQuery(self.inputId) + "']";
	    const label = document.querySelector(query);
	    const label_click = self.focus.bind(self);

	    if (label) {
	      addEvent(label, 'click', label_click);
	      setAttr(label, {
	        for: control_id
	      });
	      const label_id = getId(label, self.inputId + '-ts-label');
	      setAttr(focus_node, {
	        'aria-labelledby': label_id
	      });
	      setAttr(dropdown_content, {
	        'aria-labelledby': label_id
	      });
	    }

	    wrapper.style.width = input.style.width;

	    if (self.plugins.names.length) {
	      const classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
	      addClasses([wrapper, dropdown], classes_plugins);
	    }

	    if ((settings.maxItems === null || settings.maxItems > 1) && self.is_select_tag) {
	      setAttr(input, {
	        multiple: 'multiple'
	      });
	    }

	    if (settings.placeholder) {
	      setAttr(control_input, {
	        placeholder: settings.placeholder
	      });
	    } // if splitOn was not passed in, construct it from the delimiter to allow pasting universally


	    if (!settings.splitOn && settings.delimiter) {
	      settings.splitOn = new RegExp('\\s*' + escape_regex(settings.delimiter) + '+\\s*');
	    } // debounce user defined load() if loadThrottle > 0
	    // after initializePlugins() so plugins can create/modify user defined loaders


	    if (settings.load && settings.loadThrottle) {
	      settings.load = loadDebounce(settings.load, settings.loadThrottle);
	    }

	    self.control_input.type = input.type; // clicking on an option should select it

	    addEvent(dropdown, 'click', evt => {
	      const option = parentMatch(evt.target, '[data-selectable]');

	      if (option) {
	        self.onOptionSelect(evt, option);
	        preventDefault(evt, true);
	      }
	    });
	    addEvent(control, 'click', evt => {
	      var target_match = parentMatch(evt.target, '[data-ts-item]', control);

	      if (target_match && self.onItemSelect(evt, target_match)) {
	        preventDefault(evt, true);
	        return;
	      } // retain focus (see control_input mousedown)


	      if (control_input.value != '') {
	        return;
	      }

	      self.onClick();
	      preventDefault(evt, true);
	    }); // keydown on focus_node for arrow_down/arrow_up

	    addEvent(focus_node, 'keydown', e => self.onKeyDown(e)); // keypress and input/keyup

	    addEvent(control_input, 'keypress', e => self.onKeyPress(e));
	    addEvent(control_input, 'input', e => self.onInput(e));
	    addEvent(focus_node, 'resize', () => self.positionDropdown(), passive_event);
	    addEvent(focus_node, 'blur', e => self.onBlur(e));
	    addEvent(focus_node, 'focus', e => self.onFocus(e));
	    addEvent(focus_node, 'paste', e => self.onPaste(e));

	    const doc_mousedown = evt => {
	      // blur if target is outside of this instance
	      // dropdown is not always inside wrapper
	      const target = evt.composedPath()[0];

	      if (!wrapper.contains(target) && !dropdown.contains(target)) {
	        if (self.isFocused) {
	          self.blur();
	        }

	        self.inputState();
	        return;
	      } // retain focus by preventing native handling. if the
	      // event target is the input it should not be modified.
	      // otherwise, text selection within the input won't work.
	      // Fixes bug #212 which is no covered by tests


	      if (target == control_input && self.isOpen) {
	        evt.stopPropagation(); // clicking anywhere in the control should not blur the control_input (which would close the dropdown)
	      } else {
	        preventDefault(evt, true);
	      }
	    };

	    var win_scroll = () => {
	      if (self.isOpen) {
	        self.positionDropdown();
	      }
	    };

	    addEvent(document, 'mousedown', doc_mousedown);
	    addEvent(window, 'scroll', win_scroll, passive_event);
	    addEvent(window, 'resize', win_scroll, passive_event);

	    this._destroy = () => {
	      document.removeEventListener('mousedown', doc_mousedown);
	      window.removeEventListener('scroll', win_scroll);
	      window.removeEventListener('resize', win_scroll);
	      if (label) label.removeEventListener('click', label_click);
	    }; // store original html and tab index so that they can be
	    // restored when the destroy() method is called.


	    this.revertSettings = {
	      innerHTML: input.innerHTML,
	      tabIndex: input.tabIndex
	    };
	    input.tabIndex = -1;
	    input.insertAdjacentElement('afterend', self.wrapper);
	    self.sync(false);
	    settings.items = [];
	    delete settings.optgroups;
	    delete settings.options;
	    addEvent(input, 'invalid', e => {
	      if (self.isValid) {
	        self.isValid = false;
	        self.isInvalid = true;
	        self.refreshState();
	      }
	    });
	    self.updateOriginalInput();
	    self.refreshItems();
	    self.close(false);
	    self.inputState();
	    self.isSetup = true;

	    if (input.disabled) {
	      self.disable();
	    } else {
	      self.enable(); //sets tabIndex
	    }

	    self.on('change', this.onChange);
	    addClasses(input, 'tomselected', 'ts-hidden-accessible');
	    self.trigger('initialize'); // preload options

	    if (settings.preload === true) {
	      self.preload();
	    }
	  }
	  /**
	   * Register options and optgroups
	   *
	   */


	  setupOptions(options = [], optgroups = []) {
	    // build options table
	    this.addOptions(options); // build optgroup table

	    iterate(optgroups, optgroup => {
	      this.registerOptionGroup(optgroup);
	    });
	  }
	  /**
	   * Sets up default rendering functions.
	   */


	  setupTemplates() {
	    var self = this;
	    var field_label = self.settings.labelField;
	    var field_optgroup = self.settings.optgroupLabelField;
	    var templates = {
	      'optgroup': data => {
	        let optgroup = document.createElement('div');
	        optgroup.className = 'optgroup';
	        optgroup.appendChild(data.options);
	        return optgroup;
	      },
	      'optgroup_header': (data, escape) => {
	        return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
	      },
	      'option': (data, escape) => {
	        return '<div>' + escape(data[field_label]) + '</div>';
	      },
	      'item': (data, escape) => {
	        return '<div>' + escape(data[field_label]) + '</div>';
	      },
	      'option_create': (data, escape) => {
	        return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
	      },
	      'no_results': () => {
	        return '<div class="no-results">No results found</div>';
	      },
	      'loading': () => {
	        return '<div class="spinner"></div>';
	      },
	      'not_loading': () => {},
	      'dropdown': () => {
	        return '<div></div>';
	      }
	    };
	    self.settings.render = Object.assign({}, templates, self.settings.render);
	  }
	  /**
	   * Maps fired events to callbacks provided
	   * in the settings used when creating the control.
	   */


	  setupCallbacks() {
	    var key, fn;
	    var callbacks = {
	      'initialize': 'onInitialize',
	      'change': 'onChange',
	      'item_add': 'onItemAdd',
	      'item_remove': 'onItemRemove',
	      'item_select': 'onItemSelect',
	      'clear': 'onClear',
	      'option_add': 'onOptionAdd',
	      'option_remove': 'onOptionRemove',
	      'option_clear': 'onOptionClear',
	      'optgroup_add': 'onOptionGroupAdd',
	      'optgroup_remove': 'onOptionGroupRemove',
	      'optgroup_clear': 'onOptionGroupClear',
	      'dropdown_open': 'onDropdownOpen',
	      'dropdown_close': 'onDropdownClose',
	      'type': 'onType',
	      'load': 'onLoad',
	      'focus': 'onFocus',
	      'blur': 'onBlur'
	    };

	    for (key in callbacks) {
	      fn = this.settings[callbacks[key]];
	      if (fn) this.on(key, fn);
	    }
	  }
	  /**
	   * Sync the Tom Select instance with the original input or select
	   *
	   */


	  sync(get_settings = true) {
	    const self = this;
	    const settings = get_settings ? getSettings(self.input, {
	      delimiter: self.settings.delimiter
	    }) : self.settings;
	    self.setupOptions(settings.options, settings.optgroups);
	    self.setValue(settings.items || [], true); // silent prevents recursion

	    self.lastQuery = null; // so updated options will be displayed in dropdown
	  }
	  /**
	   * Triggered when the main control element
	   * has a click event.
	   *
	   */


	  onClick() {
	    var self = this;

	    if (self.activeItems.length > 0) {
	      self.clearActiveItems();
	      self.focus();
	      return;
	    }

	    if (self.isFocused && self.isOpen) {
	      self.blur();
	    } else {
	      self.focus();
	    }
	  }
	  /**
	   * @deprecated v1.7
	   *
	   */


	  onMouseDown() {}
	  /**
	   * Triggered when the value of the control has been changed.
	   * This should propagate the event to the original DOM
	   * input / select element.
	   */


	  onChange() {
	    triggerEvent(this.input, 'input');
	    triggerEvent(this.input, 'change');
	  }
	  /**
	   * Triggered on <input> paste.
	   *
	   */


	  onPaste(e) {
	    var self = this;

	    if (self.isInputHidden || self.isLocked) {
	      preventDefault(e);
	      return;
	    } // If a regex or string is included, this will split the pasted
	    // input and create Items for each separate value


	    if (self.settings.splitOn) {
	      // Wait for pasted text to be recognized in value
	      setTimeout(() => {
	        var pastedText = self.inputValue();

	        if (!pastedText.match(self.settings.splitOn)) {
	          return;
	        }

	        var splitInput = pastedText.trim().split(self.settings.splitOn);
	        iterate(splitInput, piece => {
	          self.createItem(piece);
	        });
	      }, 0);
	    }
	  }
	  /**
	   * Triggered on <input> keypress.
	   *
	   */


	  onKeyPress(e) {
	    var self = this;

	    if (self.isLocked) {
	      preventDefault(e);
	      return;
	    }

	    var character = String.fromCharCode(e.keyCode || e.which);

	    if (self.settings.create && self.settings.mode === 'multi' && character === self.settings.delimiter) {
	      self.createItem();
	      preventDefault(e);
	      return;
	    }
	  }
	  /**
	   * Triggered on <input> keydown.
	   *
	   */


	  onKeyDown(e) {
	    var self = this;

	    if (self.isLocked) {
	      if (e.keyCode !== KEY_TAB) {
	        preventDefault(e);
	      }

	      return;
	    }

	    switch (e.keyCode) {
	      // ctrl+A: select all
	      case KEY_A:
	        if (isKeyDown(KEY_SHORTCUT, e)) {
	          if (self.control_input.value == '') {
	            preventDefault(e);
	            self.selectAll();
	            return;
	          }
	        }

	        break;
	      // esc: close dropdown

	      case KEY_ESC:
	        if (self.isOpen) {
	          preventDefault(e, true);
	          self.close();
	        }

	        self.clearActiveItems();
	        return;
	      // down: open dropdown or move selection down

	      case KEY_DOWN:
	        if (!self.isOpen && self.hasOptions) {
	          self.open();
	        } else if (self.activeOption) {
	          let next = self.getAdjacent(self.activeOption, 1);
	          if (next) self.setActiveOption(next);
	        }

	        preventDefault(e);
	        return;
	      // up: move selection up

	      case KEY_UP:
	        if (self.activeOption) {
	          let prev = self.getAdjacent(self.activeOption, -1);
	          if (prev) self.setActiveOption(prev);
	        }

	        preventDefault(e);
	        return;
	      // return: select active option

	      case KEY_RETURN:
	        if (self.canSelect(self.activeOption)) {
	          self.onOptionSelect(e, self.activeOption);
	          preventDefault(e); // if the option_create=null, the dropdown might be closed
	        } else if (self.settings.create && self.createItem()) {
	          preventDefault(e);
	        }

	        return;
	      // left: modifiy item selection to the left

	      case KEY_LEFT:
	        self.advanceSelection(-1, e);
	        return;
	      // right: modifiy item selection to the right

	      case KEY_RIGHT:
	        self.advanceSelection(1, e);
	        return;
	      // tab: select active option and/or create item

	      case KEY_TAB:
	        if (self.settings.selectOnTab) {
	          if (self.canSelect(self.activeOption)) {
	            self.onOptionSelect(e, self.activeOption); // prevent default [tab] behaviour of jump to the next field
	            // if select isFull, then the dropdown won't be open and [tab] will work normally

	            preventDefault(e);
	          }

	          if (self.settings.create && self.createItem()) {
	            preventDefault(e);
	          }
	        }

	        return;
	      // delete|backspace: delete items

	      case KEY_BACKSPACE:
	      case KEY_DELETE:
	        self.deleteSelection(e);
	        return;
	    } // don't enter text in the control_input when active items are selected


	    if (self.isInputHidden && !isKeyDown(KEY_SHORTCUT, e)) {
	      preventDefault(e);
	    }
	  }
	  /**
	   * Triggered on <input> keyup.
	   *
	   */


	  onInput(e) {
	    var self = this;

	    if (self.isLocked) {
	      return;
	    }

	    var value = self.inputValue();

	    if (self.lastValue !== value) {
	      self.lastValue = value;

	      if (self.settings.shouldLoad.call(self, value)) {
	        self.load(value);
	      }

	      self.refreshOptions();
	      self.trigger('type', value);
	    }
	  }
	  /**
	   * Triggered on <input> focus.
	   *
	   */


	  onFocus(e) {
	    var self = this;
	    var wasFocused = self.isFocused;

	    if (self.isDisabled) {
	      self.blur();
	      preventDefault(e);
	      return;
	    }

	    if (self.ignoreFocus) return;
	    self.isFocused = true;
	    if (self.settings.preload === 'focus') self.preload();
	    if (!wasFocused) self.trigger('focus');

	    if (!self.activeItems.length) {
	      self.showInput();
	      self.refreshOptions(!!self.settings.openOnFocus);
	    }

	    self.refreshState();
	  }
	  /**
	   * Triggered on <input> blur.
	   *
	   */


	  onBlur(e) {
	    if (document.hasFocus() === false) return;
	    var self = this;
	    if (!self.isFocused) return;
	    self.isFocused = false;
	    self.ignoreFocus = false;

	    var deactivate = () => {
	      self.close();
	      self.setActiveItem();
	      self.setCaret(self.items.length);
	      self.trigger('blur');
	    };

	    if (self.settings.create && self.settings.createOnBlur) {
	      self.createItem(null, false, deactivate);
	    } else {
	      deactivate();
	    }
	  }
	  /**
	   * Triggered when the user clicks on an option
	   * in the autocomplete dropdown menu.
	   *
	   */


	  onOptionSelect(evt, option) {
	    var value,
	        self = this; // should not be possible to trigger a option under a disabled optgroup

	    if (option.parentElement && option.parentElement.matches('[data-disabled]')) {
	      return;
	    }

	    if (option.classList.contains('create')) {
	      self.createItem(null, true, () => {
	        if (self.settings.closeAfterSelect) {
	          self.close();
	        }
	      });
	    } else {
	      value = option.dataset.value;

	      if (typeof value !== 'undefined') {
	        self.lastQuery = null;
	        self.addItem(value);

	        if (self.settings.closeAfterSelect) {
	          self.close();
	        }

	        if (!self.settings.hideSelected && evt.type && /click/.test(evt.type)) {
	          self.setActiveOption(option);
	        }
	      }
	    }
	  }
	  /**
	   * Return true if the given option can be selected
	   *
	   */


	  canSelect(option) {
	    if (this.isOpen && option && this.dropdown_content.contains(option)) {
	      return true;
	    }

	    return false;
	  }
	  /**
	   * Triggered when the user clicks on an item
	   * that has been selected.
	   *
	   */


	  onItemSelect(evt, item) {
	    var self = this;

	    if (!self.isLocked && self.settings.mode === 'multi') {
	      preventDefault(evt);
	      self.setActiveItem(item, evt);
	      return true;
	    }

	    return false;
	  }
	  /**
	   * Determines whether or not to invoke
	   * the user-provided option provider / loader
	   *
	   * Note, there is a subtle difference between
	   * this.canLoad() and this.settings.shouldLoad();
	   *
	   *	- settings.shouldLoad() is a user-input validator.
	   *	When false is returned, the not_loading template
	   *	will be added to the dropdown
	   *
	   *	- canLoad() is lower level validator that checks
	   * 	the Tom Select instance. There is no inherent user
	   *	feedback when canLoad returns false
	   *
	   */


	  canLoad(value) {
	    if (!this.settings.load) return false;
	    if (this.loadedSearches.hasOwnProperty(value)) return false;
	    return true;
	  }
	  /**
	   * Invokes the user-provided option provider / loader.
	   *
	   */


	  load(value) {
	    const self = this;
	    if (!self.canLoad(value)) return;
	    addClasses(self.wrapper, self.settings.loadingClass);
	    self.loading++;
	    const callback = self.loadCallback.bind(self);
	    self.settings.load.call(self, value, callback);
	  }
	  /**
	   * Invoked by the user-provided option provider
	   *
	   */


	  loadCallback(options, optgroups) {
	    const self = this;
	    self.loading = Math.max(self.loading - 1, 0);
	    self.lastQuery = null;
	    self.clearActiveOption(); // when new results load, focus should be on first option

	    self.setupOptions(options, optgroups);
	    self.refreshOptions(self.isFocused && !self.isInputHidden);

	    if (!self.loading) {
	      removeClasses(self.wrapper, self.settings.loadingClass);
	    }

	    self.trigger('load', options, optgroups);
	  }

	  preload() {
	    var classList = this.wrapper.classList;
	    if (classList.contains('preloaded')) return;
	    classList.add('preloaded');
	    this.load('');
	  }
	  /**
	   * Sets the input field of the control to the specified value.
	   *
	   */


	  setTextboxValue(value = '') {
	    var input = this.control_input;
	    var changed = input.value !== value;

	    if (changed) {
	      input.value = value;
	      triggerEvent(input, 'update');
	      this.lastValue = value;
	    }
	  }
	  /**
	   * Returns the value of the control. If multiple items
	   * can be selected (e.g. <select multiple>), this returns
	   * an array. If only one item can be selected, this
	   * returns a string.
	   *
	   */


	  getValue() {
	    if (this.is_select_tag && this.input.hasAttribute('multiple')) {
	      return this.items;
	    }

	    return this.items.join(this.settings.delimiter);
	  }
	  /**
	   * Resets the selected items to the given value.
	   *
	   */


	  setValue(value, silent) {
	    var events = silent ? [] : ['change'];
	    debounce_events(this, events, () => {
	      this.clear(silent);
	      this.addItems(value, silent);
	    });
	  }
	  /**
	   * Resets the number of max items to the given value
	   *
	   */


	  setMaxItems(value) {
	    if (value === 0) value = null; //reset to unlimited items.

	    this.settings.maxItems = value;
	    this.refreshState();
	  }
	  /**
	   * Sets the selected item.
	   *
	   */


	  setActiveItem(item, e) {
	    var self = this;
	    var eventName;
	    var i, begin, end, swap;
	    var last;
	    if (self.settings.mode === 'single') return; // clear the active selection

	    if (!item) {
	      self.clearActiveItems();

	      if (self.isFocused) {
	        self.showInput();
	      }

	      return;
	    } // modify selection


	    eventName = e && e.type.toLowerCase();

	    if (eventName === 'click' && isKeyDown('shiftKey', e) && self.activeItems.length) {
	      last = self.getLastActive();
	      begin = Array.prototype.indexOf.call(self.control.children, last);
	      end = Array.prototype.indexOf.call(self.control.children, item);

	      if (begin > end) {
	        swap = begin;
	        begin = end;
	        end = swap;
	      }

	      for (i = begin; i <= end; i++) {
	        item = self.control.children[i];

	        if (self.activeItems.indexOf(item) === -1) {
	          self.setActiveItemClass(item);
	        }
	      }

	      preventDefault(e);
	    } else if (eventName === 'click' && isKeyDown(KEY_SHORTCUT, e) || eventName === 'keydown' && isKeyDown('shiftKey', e)) {
	      if (item.classList.contains('active')) {
	        self.removeActiveItem(item);
	      } else {
	        self.setActiveItemClass(item);
	      }
	    } else {
	      self.clearActiveItems();
	      self.setActiveItemClass(item);
	    } // ensure control has focus


	    self.hideInput();

	    if (!self.isFocused) {
	      self.focus();
	    }
	  }
	  /**
	   * Set the active and last-active classes
	   *
	   */


	  setActiveItemClass(item) {
	    const self = this;
	    const last_active = self.control.querySelector('.last-active');
	    if (last_active) removeClasses(last_active, 'last-active');
	    addClasses(item, 'active last-active');
	    self.trigger('item_select', item);

	    if (self.activeItems.indexOf(item) == -1) {
	      self.activeItems.push(item);
	    }
	  }
	  /**
	   * Remove active item
	   *
	   */


	  removeActiveItem(item) {
	    var idx = this.activeItems.indexOf(item);
	    this.activeItems.splice(idx, 1);
	    removeClasses(item, 'active');
	  }
	  /**
	   * Clears all the active items
	   *
	   */


	  clearActiveItems() {
	    removeClasses(this.activeItems, 'active');
	    this.activeItems = [];
	  }
	  /**
	   * Sets the selected item in the dropdown menu
	   * of available options.
	   *
	   */


	  setActiveOption(option) {
	    if (option === this.activeOption) {
	      return;
	    }

	    this.clearActiveOption();
	    if (!option) return;
	    this.activeOption = option;
	    setAttr(this.focus_node, {
	      'aria-activedescendant': option.getAttribute('id')
	    });
	    setAttr(option, {
	      'aria-selected': 'true'
	    });
	    addClasses(option, 'active');
	    this.scrollToOption(option);
	  }
	  /**
	   * Sets the dropdown_content scrollTop to display the option
	   *
	   */


	  scrollToOption(option, behavior) {
	    if (!option) return;
	    const content = this.dropdown_content;
	    const height_menu = content.clientHeight;
	    const scrollTop = content.scrollTop || 0;
	    const height_item = option.offsetHeight;
	    const y = option.getBoundingClientRect().top - content.getBoundingClientRect().top + scrollTop;

	    if (y + height_item > height_menu + scrollTop) {
	      this.scroll(y - height_menu + height_item, behavior);
	    } else if (y < scrollTop) {
	      this.scroll(y, behavior);
	    }
	  }
	  /**
	   * Scroll the dropdown to the given position
	   *
	   */


	  scroll(scrollTop, behavior) {
	    const content = this.dropdown_content;

	    if (behavior) {
	      content.style.scrollBehavior = behavior;
	    }

	    content.scrollTop = scrollTop;
	    content.style.scrollBehavior = '';
	  }
	  /**
	   * Clears the active option
	   *
	   */


	  clearActiveOption() {
	    if (this.activeOption) {
	      removeClasses(this.activeOption, 'active');
	      setAttr(this.activeOption, {
	        'aria-selected': null
	      });
	    }

	    this.activeOption = null;
	    setAttr(this.focus_node, {
	      'aria-activedescendant': null
	    });
	  }
	  /**
	   * Selects all items (CTRL + A).
	   */


	  selectAll() {
	    const self = this;
	    if (self.settings.mode === 'single') return;
	    const activeItems = self.controlChildren();
	    if (!activeItems.length) return;
	    self.hideInput();
	    self.close();
	    self.activeItems = activeItems;
	    iterate(activeItems, item => {
	      self.setActiveItemClass(item);
	    });
	  }
	  /**
	   * Determines if the control_input should be in a hidden or visible state
	   *
	   */


	  inputState() {
	    var self = this;
	    if (!self.control.contains(self.control_input)) return;
	    setAttr(self.control_input, {
	      placeholder: self.settings.placeholder
	    });

	    if (self.activeItems.length > 0 || !self.isFocused && self.settings.hidePlaceholder && self.items.length > 0) {
	      self.setTextboxValue();
	      self.isInputHidden = true;
	    } else {
	      if (self.settings.hidePlaceholder && self.items.length > 0) {
	        setAttr(self.control_input, {
	          placeholder: ''
	        });
	      }

	      self.isInputHidden = false;
	    }

	    self.wrapper.classList.toggle('input-hidden', self.isInputHidden);
	  }
	  /**
	   * Hides the input element out of view, while
	   * retaining its focus.
	   * @deprecated 1.3
	   */


	  hideInput() {
	    this.inputState();
	  }
	  /**
	   * Restores input visibility.
	   * @deprecated 1.3
	   */


	  showInput() {
	    this.inputState();
	  }
	  /**
	   * Get the input value
	   */


	  inputValue() {
	    return this.control_input.value.trim();
	  }
	  /**
	   * Gives the control focus.
	   */


	  focus() {
	    var self = this;
	    if (self.isDisabled) return;
	    self.ignoreFocus = true;

	    if (self.control_input.offsetWidth) {
	      self.control_input.focus();
	    } else {
	      self.focus_node.focus();
	    }

	    setTimeout(() => {
	      self.ignoreFocus = false;
	      self.onFocus();
	    }, 0);
	  }
	  /**
	   * Forces the control out of focus.
	   *
	   */


	  blur() {
	    this.focus_node.blur();
	    this.onBlur();
	  }
	  /**
	   * Returns a function that scores an object
	   * to show how good of a match it is to the
	   * provided query.
	   *
	   * @return {function}
	   */


	  getScoreFunction(query) {
	    return this.sifter.getScoreFunction(query, this.getSearchOptions());
	  }
	  /**
	   * Returns search options for sifter (the system
	   * for scoring and sorting results).
	   *
	   * @see https://github.com/orchidjs/sifter.js
	   * @return {object}
	   */


	  getSearchOptions() {
	    var settings = this.settings;
	    var sort = settings.sortField;

	    if (typeof settings.sortField === 'string') {
	      sort = [{
	        field: settings.sortField
	      }];
	    }

	    return {
	      fields: settings.searchField,
	      conjunction: settings.searchConjunction,
	      sort: sort,
	      nesting: settings.nesting
	    };
	  }
	  /**
	   * Searches through available options and returns
	   * a sorted array of matches.
	   *
	   */


	  search(query) {
	    var i, result, calculateScore;
	    var self = this;
	    var options = this.getSearchOptions(); // validate user-provided result scoring function

	    if (self.settings.score) {
	      calculateScore = self.settings.score.call(self, query);

	      if (typeof calculateScore !== 'function') {
	        throw new Error('Tom Select "score" setting must be a function that returns a function');
	      }
	    } // perform search


	    if (query !== self.lastQuery) {
	      self.lastQuery = query;
	      result = self.sifter.search(query, Object.assign(options, {
	        score: calculateScore
	      }));
	      self.currentResults = result;
	    } else {
	      result = Object.assign({}, self.currentResults);
	    } // filter out selected items


	    if (self.settings.hideSelected) {
	      for (i = result.items.length - 1; i >= 0; i--) {
	        let hashed = hash_key(result.items[i].id);

	        if (hashed && self.items.indexOf(hashed) !== -1) {
	          result.items.splice(i, 1);
	        }
	      }
	    }

	    return result;
	  }
	  /**
	   * Refreshes the list of available options shown
	   * in the autocomplete dropdown menu.
	   *
	   */


	  refreshOptions(triggerDropdown = true) {
	    var i, j, k, n, optgroup, optgroups, html, has_create_option, active_value, active_group;
	    var create;
	    const groups = {};
	    const groups_order = [];
	    var self = this;
	    var query = self.inputValue();
	    var results = self.search(query);
	    var active_option = null; //self.activeOption;

	    var show_dropdown = self.settings.shouldOpen || false;
	    var dropdown_content = self.dropdown_content;

	    if (self.activeOption) {
	      active_value = self.activeOption.dataset.value;
	      active_group = self.activeOption.closest('[data-group]');
	    } // build markup


	    n = results.items.length;

	    if (typeof self.settings.maxOptions === 'number') {
	      n = Math.min(n, self.settings.maxOptions);
	    }

	    if (n > 0) {
	      show_dropdown = true;
	    } // render and group available options individually


	    for (i = 0; i < n; i++) {
	      // get option dom element
	      let opt_value = results.items[i].id;
	      let option = self.options[opt_value];
	      let option_el = self.getOption(opt_value, true); // toggle 'selected' class

	      if (!self.settings.hideSelected) {
	        option_el.classList.toggle('selected', self.items.includes(opt_value));
	      }

	      optgroup = option[self.settings.optgroupField] || '';
	      optgroups = Array.isArray(optgroup) ? optgroup : [optgroup];

	      for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
	        optgroup = optgroups[j];

	        if (!self.optgroups.hasOwnProperty(optgroup)) {
	          optgroup = '';
	        }

	        if (!groups.hasOwnProperty(optgroup)) {
	          groups[optgroup] = document.createDocumentFragment();
	          groups_order.push(optgroup);
	        } // nodes can only have one parent, so if the option is in mutple groups, we need a clone


	        if (j > 0) {
	          option_el = option_el.cloneNode(true);
	          setAttr(option_el, {
	            id: option.$id + '-clone-' + j,
	            'aria-selected': null
	          });
	          option_el.classList.add('ts-cloned');
	          removeClasses(option_el, 'active');
	        } // make sure we keep the activeOption in the same group


	        if (!active_option && active_value == opt_value) {
	          if (active_group) {
	            if (active_group.dataset.group === optgroup) {
	              active_option = option_el;
	            }
	          } else {
	            active_option = option_el;
	          }
	        }

	        groups[optgroup].appendChild(option_el);
	      }
	    } // sort optgroups


	    if (this.settings.lockOptgroupOrder) {
	      groups_order.sort((a, b) => {
	        var a_order = self.optgroups[a] && self.optgroups[a].$order || 0;
	        var b_order = self.optgroups[b] && self.optgroups[b].$order || 0;
	        return a_order - b_order;
	      });
	    } // render optgroup headers & join groups


	    html = document.createDocumentFragment();
	    iterate(groups_order, optgroup => {
	      if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].children.length) {
	        let group_options = document.createDocumentFragment();
	        let header = self.render('optgroup_header', self.optgroups[optgroup]);
	        append(group_options, header);
	        append(group_options, groups[optgroup]);
	        let group_html = self.render('optgroup', {
	          group: self.optgroups[optgroup],
	          options: group_options
	        });
	        append(html, group_html);
	      } else {
	        append(html, groups[optgroup]);
	      }
	    });
	    dropdown_content.innerHTML = '';
	    append(dropdown_content, html); // highlight matching terms inline

	    if (self.settings.highlight) {
	      removeHighlight(dropdown_content);

	      if (results.query.length && results.tokens.length) {
	        iterate(results.tokens, tok => {
	          highlight(dropdown_content, tok.regex);
	        });
	      }
	    } // helper method for adding templates to dropdown


	    var add_template = template => {
	      let content = self.render(template, {
	        input: query
	      });

	      if (content) {
	        show_dropdown = true;
	        dropdown_content.insertBefore(content, dropdown_content.firstChild);
	      }

	      return content;
	    }; // add loading message


	    if (self.loading) {
	      add_template('loading'); // invalid query
	    } else if (!self.settings.shouldLoad.call(self, query)) {
	      add_template('not_loading'); // add no_results message
	    } else if (results.items.length === 0) {
	      add_template('no_results');
	    } // add create option


	    has_create_option = self.canCreate(query);

	    if (has_create_option) {
	      create = add_template('option_create');
	    } // activate


	    self.hasOptions = results.items.length > 0 || has_create_option;

	    if (show_dropdown) {
	      if (results.items.length > 0) {
	        if (!active_option && self.settings.mode === 'single' && self.items.length) {
	          active_option = self.getOption(self.items[0]);
	        }

	        if (!dropdown_content.contains(active_option)) {
	          let active_index = 0;

	          if (create && !self.settings.addPrecedence) {
	            active_index = 1;
	          }

	          active_option = self.selectable()[active_index];
	        }
	      } else if (create) {
	        active_option = create;
	      }

	      if (triggerDropdown && !self.isOpen) {
	        self.open();
	        self.scrollToOption(active_option, 'auto');
	      }

	      self.setActiveOption(active_option);
	    } else {
	      self.clearActiveOption();

	      if (triggerDropdown && self.isOpen) {
	        self.close(false); // if create_option=null, we want the dropdown to close but not reset the textbox value
	      }
	    }
	  }
	  /**
	   * Return list of selectable options
	   *
	   */


	  selectable() {
	    return this.dropdown_content.querySelectorAll('[data-selectable]');
	  }
	  /**
	   * Adds an available option. If it already exists,
	   * nothing will happen. Note: this does not refresh
	   * the options list dropdown (use `refreshOptions`
	   * for that).
	   *
	   * Usage:
	   *
	   *   this.addOption(data)
	   *
	   */


	  addOption(data, user_created = false) {
	    const self = this; // @deprecated 1.7.7
	    // use addOptions( array, user_created ) for adding multiple options

	    if (Array.isArray(data)) {
	      self.addOptions(data, user_created);
	      return false;
	    }

	    const key = hash_key(data[self.settings.valueField]);

	    if (key === null || self.options.hasOwnProperty(key)) {
	      return false;
	    }

	    data.$order = data.$order || ++self.order;
	    data.$id = self.inputId + '-opt-' + data.$order;
	    self.options[key] = data;
	    self.lastQuery = null;

	    if (user_created) {
	      self.userOptions[key] = user_created;
	      self.trigger('option_add', key, data);
	    }

	    return key;
	  }
	  /**
	   * Add multiple options
	   *
	   */


	  addOptions(data, user_created = false) {
	    iterate(data, dat => {
	      this.addOption(dat, user_created);
	    });
	  }
	  /**
	   * @deprecated 1.7.7
	   */


	  registerOption(data) {
	    return this.addOption(data);
	  }
	  /**
	   * Registers an option group to the pool of option groups.
	   *
	   * @return {boolean|string}
	   */


	  registerOptionGroup(data) {
	    var key = hash_key(data[this.settings.optgroupValueField]);
	    if (key === null) return false;
	    data.$order = data.$order || ++this.order;
	    this.optgroups[key] = data;
	    return key;
	  }
	  /**
	   * Registers a new optgroup for options
	   * to be bucketed into.
	   *
	   */


	  addOptionGroup(id, data) {
	    var hashed_id;
	    data[this.settings.optgroupValueField] = id;

	    if (hashed_id = this.registerOptionGroup(data)) {
	      this.trigger('optgroup_add', hashed_id, data);
	    }
	  }
	  /**
	   * Removes an existing option group.
	   *
	   */


	  removeOptionGroup(id) {
	    if (this.optgroups.hasOwnProperty(id)) {
	      delete this.optgroups[id];
	      this.clearCache();
	      this.trigger('optgroup_remove', id);
	    }
	  }
	  /**
	   * Clears all existing option groups.
	   */


	  clearOptionGroups() {
	    this.optgroups = {};
	    this.clearCache();
	    this.trigger('optgroup_clear');
	  }
	  /**
	   * Updates an option available for selection. If
	   * it is visible in the selected items or options
	   * dropdown, it will be re-rendered automatically.
	   *
	   */


	  updateOption(value, data) {
	    const self = this;
	    var item_new;
	    var index_item;
	    const value_old = hash_key(value);
	    const value_new = hash_key(data[self.settings.valueField]); // sanity checks

	    if (value_old === null) return;
	    if (!self.options.hasOwnProperty(value_old)) return;
	    if (typeof value_new !== 'string') throw new Error('Value must be set in option data');
	    const option = self.getOption(value_old);
	    const item = self.getItem(value_old);
	    data.$order = data.$order || self.options[value_old].$order;
	    delete self.options[value_old]; // invalidate render cache
	    // don't remove existing node yet, we'll remove it after replacing it

	    self.uncacheValue(value_new);
	    self.options[value_new] = data; // update the option if it's in the dropdown

	    if (option) {
	      if (self.dropdown_content.contains(option)) {
	        const option_new = self._render('option', data);

	        replaceNode(option, option_new);

	        if (self.activeOption === option) {
	          self.setActiveOption(option_new);
	        }
	      }

	      option.remove();
	    } // update the item if we have one


	    if (item) {
	      index_item = self.items.indexOf(value_old);

	      if (index_item !== -1) {
	        self.items.splice(index_item, 1, value_new);
	      }

	      item_new = self._render('item', data);
	      if (item.classList.contains('active')) addClasses(item_new, 'active');
	      replaceNode(item, item_new);
	    } // invalidate last query because we might have updated the sortField


	    self.lastQuery = null;
	  }
	  /**
	   * Removes a single option.
	   *
	   */


	  removeOption(value, silent) {
	    const self = this;
	    value = get_hash(value);
	    self.uncacheValue(value);
	    delete self.userOptions[value];
	    delete self.options[value];
	    self.lastQuery = null;
	    self.trigger('option_remove', value);
	    self.removeItem(value, silent);
	  }
	  /**
	   * Clears all options.
	   */


	  clearOptions() {
	    this.loadedSearches = {};
	    this.userOptions = {};
	    this.clearCache();
	    var selected = {};
	    iterate(this.options, (option, key) => {
	      if (this.items.indexOf(key) >= 0) {
	        selected[key] = this.options[key];
	      }
	    });
	    this.options = this.sifter.items = selected;
	    this.lastQuery = null;
	    this.trigger('option_clear');
	  }
	  /**
	   * Returns the dom element of the option
	   * matching the given value.
	   *
	   */


	  getOption(value, create = false) {
	    const hashed = hash_key(value);

	    if (hashed !== null && this.options.hasOwnProperty(hashed)) {
	      const option = this.options[hashed];

	      if (option.$div) {
	        return option.$div;
	      }

	      if (create) {
	        return this._render('option', option);
	      }
	    }

	    return null;
	  }
	  /**
	   * Returns the dom element of the next or previous dom element of the same type
	   * Note: adjacent options may not be adjacent DOM elements (optgroups)
	   *
	   */


	  getAdjacent(option, direction, type = 'option') {
	    var self = this,
	        all;

	    if (!option) {
	      return null;
	    }

	    if (type == 'item') {
	      all = self.controlChildren();
	    } else {
	      all = self.dropdown_content.querySelectorAll('[data-selectable]');
	    }

	    for (let i = 0; i < all.length; i++) {
	      if (all[i] != option) {
	        continue;
	      }

	      if (direction > 0) {
	        return all[i + 1];
	      }

	      return all[i - 1];
	    }

	    return null;
	  }
	  /**
	   * Returns the dom element of the item
	   * matching the given value.
	   *
	   */


	  getItem(item) {
	    if (typeof item == 'object') {
	      return item;
	    }

	    var value = hash_key(item);
	    return value !== null ? this.control.querySelector(`[data-value="${addSlashes(value)}"]`) : null;
	  }
	  /**
	   * "Selects" multiple items at once. Adds them to the list
	   * at the current caret position.
	   *
	   */


	  addItems(values, silent) {
	    var self = this;
	    var items = Array.isArray(values) ? values : [values];
	    items = items.filter(x => self.items.indexOf(x) === -1);

	    for (let i = 0, n = items.length; i < n; i++) {
	      self.isPending = i < n - 1;
	      self.addItem(items[i], silent);
	    }
	  }
	  /**
	   * "Selects" an item. Adds it to the list
	   * at the current caret position.
	   *
	   */


	  addItem(value, silent) {
	    var events = silent ? [] : ['change', 'dropdown_close'];
	    debounce_events(this, events, () => {
	      var item, wasFull;
	      const self = this;
	      const inputMode = self.settings.mode;
	      const hashed = hash_key(value);

	      if (hashed && self.items.indexOf(hashed) !== -1) {
	        if (inputMode === 'single') {
	          self.close();
	        }

	        if (inputMode === 'single' || !self.settings.duplicates) {
	          return;
	        }
	      }

	      if (hashed === null || !self.options.hasOwnProperty(hashed)) return;
	      if (inputMode === 'single') self.clear(silent);
	      if (inputMode === 'multi' && self.isFull()) return;
	      item = self._render('item', self.options[hashed]);

	      if (self.control.contains(item)) {
	        // duplicates
	        item = item.cloneNode(true);
	      }

	      wasFull = self.isFull();
	      self.items.splice(self.caretPos, 0, hashed);
	      self.insertAtCaret(item);

	      if (self.isSetup) {
	        // update menu / remove the option (if this is not one item being added as part of series)
	        if (!self.isPending && self.settings.hideSelected) {
	          let option = self.getOption(hashed);
	          let next = self.getAdjacent(option, 1);

	          if (next) {
	            self.setActiveOption(next);
	          }
	        } // refreshOptions after setActiveOption(),
	        // otherwise setActiveOption() will be called by refreshOptions() with the wrong value


	        if (!self.isPending && !self.settings.closeAfterSelect) {
	          self.refreshOptions(self.isFocused && inputMode !== 'single');
	        } // hide the menu if the maximum number of items have been selected or no options are left


	        if (self.settings.closeAfterSelect != false && self.isFull()) {
	          self.close();
	        } else if (!self.isPending) {
	          self.positionDropdown();
	        }

	        self.trigger('item_add', hashed, item);

	        if (!self.isPending) {
	          self.updateOriginalInput({
	            silent: silent
	          });
	        }
	      }

	      if (!self.isPending || !wasFull && self.isFull()) {
	        self.inputState();
	        self.refreshState();
	      }
	    });
	  }
	  /**
	   * Removes the selected item matching
	   * the provided value.
	   *
	   */


	  removeItem(item = null, silent) {
	    const self = this;
	    item = self.getItem(item);
	    if (!item) return;
	    var i, idx;
	    const value = item.dataset.value;
	    i = nodeIndex(item);
	    item.remove();

	    if (item.classList.contains('active')) {
	      idx = self.activeItems.indexOf(item);
	      self.activeItems.splice(idx, 1);
	      removeClasses(item, 'active');
	    }

	    self.items.splice(i, 1);
	    self.lastQuery = null;

	    if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
	      self.removeOption(value, silent);
	    }

	    if (i < self.caretPos) {
	      self.setCaret(self.caretPos - 1);
	    }

	    self.updateOriginalInput({
	      silent: silent
	    });
	    self.refreshState();
	    self.positionDropdown();
	    self.trigger('item_remove', value, item);
	  }
	  /**
	   * Invokes the `create` method provided in the
	   * TomSelect options that should provide the data
	   * for the new item, given the user input.
	   *
	   * Once this completes, it will be added
	   * to the item list.
	   *
	   */


	  createItem(input = null, triggerDropdown = true, callback = () => {}) {
	    var self = this;
	    var caret = self.caretPos;
	    var output;
	    input = input || self.inputValue();

	    if (!self.canCreate(input)) {
	      callback();
	      return false;
	    }

	    self.lock();
	    var created = false;

	    var create = data => {
	      self.unlock();
	      if (!data || typeof data !== 'object') return callback();
	      var value = hash_key(data[self.settings.valueField]);

	      if (typeof value !== 'string') {
	        return callback();
	      }

	      self.setTextboxValue();
	      self.addOption(data, true);
	      self.setCaret(caret);
	      self.addItem(value);
	      callback(data);
	      created = true;
	    };

	    if (typeof self.settings.create === 'function') {
	      output = self.settings.create.call(this, input, create);
	    } else {
	      output = {
	        [self.settings.labelField]: input,
	        [self.settings.valueField]: input
	      };
	    }

	    if (!created) {
	      create(output);
	    }

	    return true;
	  }
	  /**
	   * Re-renders the selected item lists.
	   */


	  refreshItems() {
	    var self = this;
	    self.lastQuery = null;

	    if (self.isSetup) {
	      self.addItems(self.items);
	    }

	    self.updateOriginalInput();
	    self.refreshState();
	  }
	  /**
	   * Updates all state-dependent attributes
	   * and CSS classes.
	   */


	  refreshState() {
	    const self = this;
	    self.refreshValidityState();
	    const isFull = self.isFull();
	    const isLocked = self.isLocked;
	    self.wrapper.classList.toggle('rtl', self.rtl);
	    const wrap_classList = self.wrapper.classList;
	    wrap_classList.toggle('focus', self.isFocused);
	    wrap_classList.toggle('disabled', self.isDisabled);
	    wrap_classList.toggle('required', self.isRequired);
	    wrap_classList.toggle('invalid', !self.isValid);
	    wrap_classList.toggle('locked', isLocked);
	    wrap_classList.toggle('full', isFull);
	    wrap_classList.toggle('input-active', self.isFocused && !self.isInputHidden);
	    wrap_classList.toggle('dropdown-active', self.isOpen);
	    wrap_classList.toggle('has-options', isEmptyObject(self.options));
	    wrap_classList.toggle('has-items', self.items.length > 0);
	  }
	  /**
	   * Update the `required` attribute of both input and control input.
	   *
	   * The `required` property needs to be activated on the control input
	   * for the error to be displayed at the right place. `required` also
	   * needs to be temporarily deactivated on the input since the input is
	   * hidden and can't show errors.
	   */


	  refreshValidityState() {
	    var self = this;

	    if (!self.input.checkValidity) {
	      return;
	    }

	    self.isValid = self.input.checkValidity();
	    self.isInvalid = !self.isValid;
	  }
	  /**
	   * Determines whether or not more items can be added
	   * to the control without exceeding the user-defined maximum.
	   *
	   * @returns {boolean}
	   */


	  isFull() {
	    return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
	  }
	  /**
	   * Refreshes the original <select> or <input>
	   * element to reflect the current state.
	   *
	   */


	  updateOriginalInput(opts = {}) {
	    const self = this;
	    var option, label;
	    const empty_option = self.input.querySelector('option[value=""]');

	    if (self.is_select_tag) {
	      const selected = [];
	      const has_selected = self.input.querySelectorAll('option:checked').length;

	      function AddSelected(option_el, value, label) {
	        if (!option_el) {
	          option_el = getDom('<option value="' + escape_html(value) + '">' + escape_html(label) + '</option>');
	        } // don't move empty option from top of list
	        // fixes bug in firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1725293


	        if (option_el != empty_option) {
	          self.input.append(option_el);
	        }

	        selected.push(option_el); // marking empty option as selected can break validation
	        // fixes https://github.com/orchidjs/tom-select/issues/303

	        if (option_el != empty_option || has_selected > 0) {
	          option_el.selected = true;
	        }

	        return option_el;
	      } // unselect all selected options


	      self.input.querySelectorAll('option:checked').forEach(option_el => {
	        option_el.selected = false;
	      }); // nothing selected?

	      if (self.items.length == 0 && self.settings.mode == 'single') {
	        AddSelected(empty_option, "", ""); // order selected <option> tags for values in self.items
	      } else {
	        self.items.forEach(value => {
	          option = self.options[value];
	          label = option[self.settings.labelField] || '';

	          if (selected.includes(option.$option)) {
	            const reuse_opt = self.input.querySelector(`option[value="${addSlashes(value)}"]:not(:checked)`);
	            AddSelected(reuse_opt, value, label);
	          } else {
	            option.$option = AddSelected(option.$option, value, label);
	          }
	        });
	      }
	    } else {
	      self.input.value = self.getValue();
	    }

	    if (self.isSetup) {
	      if (!opts.silent) {
	        self.trigger('change', self.getValue());
	      }
	    }
	  }
	  /**
	   * Shows the autocomplete dropdown containing
	   * the available options.
	   */


	  open() {
	    var self = this;
	    if (self.isLocked || self.isOpen || self.settings.mode === 'multi' && self.isFull()) return;
	    self.isOpen = true;
	    setAttr(self.focus_node, {
	      'aria-expanded': 'true'
	    });
	    self.refreshState();
	    applyCSS(self.dropdown, {
	      visibility: 'hidden',
	      display: 'block'
	    });
	    self.positionDropdown();
	    applyCSS(self.dropdown, {
	      visibility: 'visible',
	      display: 'block'
	    });
	    self.focus();
	    self.trigger('dropdown_open', self.dropdown);
	  }
	  /**
	   * Closes the autocomplete dropdown menu.
	   */


	  close(setTextboxValue = true) {
	    var self = this;
	    var trigger = self.isOpen;

	    if (setTextboxValue) {
	      // before blur() to prevent form onchange event
	      self.setTextboxValue();

	      if (self.settings.mode === 'single' && self.items.length) {
	        self.hideInput();
	      }
	    }

	    self.isOpen = false;
	    setAttr(self.focus_node, {
	      'aria-expanded': 'false'
	    });
	    applyCSS(self.dropdown, {
	      display: 'none'
	    });

	    if (self.settings.hideSelected) {
	      self.clearActiveOption();
	    }

	    self.refreshState();
	    if (trigger) self.trigger('dropdown_close', self.dropdown);
	  }
	  /**
	   * Calculates and applies the appropriate
	   * position of the dropdown if dropdownParent = 'body'.
	   * Otherwise, position is determined by css
	   */


	  positionDropdown() {
	    if (this.settings.dropdownParent !== 'body') {
	      return;
	    }

	    var context = this.control;
	    var rect = context.getBoundingClientRect();
	    var top = context.offsetHeight + rect.top + window.scrollY;
	    var left = rect.left + window.scrollX;
	    applyCSS(this.dropdown, {
	      width: rect.width + 'px',
	      top: top + 'px',
	      left: left + 'px'
	    });
	  }
	  /**
	   * Resets / clears all selected items
	   * from the control.
	   *
	   */


	  clear(silent) {
	    var self = this;
	    if (!self.items.length) return;
	    var items = self.controlChildren();
	    iterate(items, item => {
	      self.removeItem(item, true);
	    });
	    self.showInput();
	    if (!silent) self.updateOriginalInput();
	    self.trigger('clear');
	  }
	  /**
	   * A helper method for inserting an element
	   * at the current caret position.
	   *
	   */


	  insertAtCaret(el) {
	    const self = this;
	    const caret = self.caretPos;
	    const target = self.control;
	    target.insertBefore(el, target.children[caret]);
	    self.setCaret(caret + 1);
	  }
	  /**
	   * Removes the current selected item(s).
	   *
	   */


	  deleteSelection(e) {
	    var direction, selection, caret, tail;
	    var self = this;
	    direction = e && e.keyCode === KEY_BACKSPACE ? -1 : 1;
	    selection = getSelection(self.control_input); // determine items that will be removed

	    const rm_items = [];

	    if (self.activeItems.length) {
	      tail = getTail(self.activeItems, direction);
	      caret = nodeIndex(tail);

	      if (direction > 0) {
	        caret++;
	      }

	      iterate(self.activeItems, item => rm_items.push(item));
	    } else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
	      const items = self.controlChildren();

	      if (direction < 0 && selection.start === 0 && selection.length === 0) {
	        rm_items.push(items[self.caretPos - 1]);
	      } else if (direction > 0 && selection.start === self.inputValue().length) {
	        rm_items.push(items[self.caretPos]);
	      }
	    }

	    const values = rm_items.map(item => item.dataset.value); // allow the callback to abort

	    if (!values.length || typeof self.settings.onDelete === 'function' && self.settings.onDelete.call(self, values, e) === false) {
	      return false;
	    }

	    preventDefault(e, true); // perform removal

	    if (typeof caret !== 'undefined') {
	      self.setCaret(caret);
	    }

	    while (rm_items.length) {
	      self.removeItem(rm_items.pop());
	    }

	    self.showInput();
	    self.positionDropdown();
	    self.refreshOptions(false);
	    return true;
	  }
	  /**
	   * Selects the previous / next item (depending on the `direction` argument).
	   *
	   * > 0 - right
	   * < 0 - left
	   *
	   */


	  advanceSelection(direction, e) {
	    var last_active,
	        adjacent,
	        self = this;
	    if (self.rtl) direction *= -1;
	    if (self.inputValue().length) return; // add or remove to active items

	    if (isKeyDown(KEY_SHORTCUT, e) || isKeyDown('shiftKey', e)) {
	      last_active = self.getLastActive(direction);

	      if (last_active) {
	        if (!last_active.classList.contains('active')) {
	          adjacent = last_active;
	        } else {
	          adjacent = self.getAdjacent(last_active, direction, 'item');
	        } // if no active item, get items adjacent to the control input

	      } else if (direction > 0) {
	        adjacent = self.control_input.nextElementSibling;
	      } else {
	        adjacent = self.control_input.previousElementSibling;
	      }

	      if (adjacent) {
	        if (adjacent.classList.contains('active')) {
	          self.removeActiveItem(last_active);
	        }

	        self.setActiveItemClass(adjacent); // mark as last_active !! after removeActiveItem() on last_active
	      } // move caret to the left or right

	    } else {
	      self.moveCaret(direction);
	    }
	  }

	  moveCaret(direction) {}
	  /**
	   * Get the last active item
	   *
	   */


	  getLastActive(direction) {
	    let last_active = this.control.querySelector('.last-active');

	    if (last_active) {
	      return last_active;
	    }

	    var result = this.control.querySelectorAll('.active');

	    if (result) {
	      return getTail(result, direction);
	    }
	  }
	  /**
	   * Moves the caret to the specified index.
	   *
	   * The input must be moved by leaving it in place and moving the
	   * siblings, due to the fact that focus cannot be restored once lost
	   * on mobile webkit devices
	   *
	   */


	  setCaret(new_pos) {
	    this.caretPos = this.items.length;
	  }
	  /**
	   * Return list of item dom elements
	   *
	   */


	  controlChildren() {
	    return Array.from(this.control.querySelectorAll('[data-ts-item]'));
	  }
	  /**
	   * Disables user input on the control. Used while
	   * items are being asynchronously created.
	   */


	  lock() {
	    this.isLocked = true;
	    this.refreshState();
	  }
	  /**
	   * Re-enables user input on the control.
	   */


	  unlock() {
	    this.isLocked = false;
	    this.refreshState();
	  }
	  /**
	   * Disables user input on the control completely.
	   * While disabled, it cannot receive focus.
	   */


	  disable() {
	    var self = this;
	    self.input.disabled = true;
	    self.control_input.disabled = true;
	    self.focus_node.tabIndex = -1;
	    self.isDisabled = true;
	    this.close();
	    self.lock();
	  }
	  /**
	   * Enables the control so that it can respond
	   * to focus and user input.
	   */


	  enable() {
	    var self = this;
	    self.input.disabled = false;
	    self.control_input.disabled = false;
	    self.focus_node.tabIndex = self.tabIndex;
	    self.isDisabled = false;
	    self.unlock();
	  }
	  /**
	   * Completely destroys the control and
	   * unbinds all event listeners so that it can
	   * be garbage collected.
	   */


	  destroy() {
	    var self = this;
	    var revertSettings = self.revertSettings;
	    self.trigger('destroy');
	    self.off();
	    self.wrapper.remove();
	    self.dropdown.remove();
	    self.input.innerHTML = revertSettings.innerHTML;
	    self.input.tabIndex = revertSettings.tabIndex;
	    removeClasses(self.input, 'tomselected', 'ts-hidden-accessible');

	    self._destroy();

	    delete self.input.tomselect;
	  }
	  /**
	   * A helper method for rendering "item" and
	   * "option" templates, given the data.
	   *
	   */


	  render(templateName, data) {
	    if (typeof this.settings.render[templateName] !== 'function') {
	      return null;
	    }

	    return this._render(templateName, data);
	  }
	  /**
	   * _render() can be called directly when we know we don't want to hit the cache
	   * return type could be null for some templates, we need https://github.com/microsoft/TypeScript/issues/33014
	   */


	  _render(templateName, data) {
	    var value = '',
	        id,
	        html;
	    const self = this;

	    if (templateName === 'option' || templateName == 'item') {
	      value = get_hash(data[self.settings.valueField]);
	    } // render markup


	    html = self.settings.render[templateName].call(this, data, escape_html);

	    if (html == null) {
	      return html;
	    }

	    html = getDom(html); // add mandatory attributes

	    if (templateName === 'option' || templateName === 'option_create') {
	      if (data[self.settings.disabledField]) {
	        setAttr(html, {
	          'aria-disabled': 'true'
	        });
	      } else {
	        setAttr(html, {
	          'data-selectable': ''
	        });
	      }
	    } else if (templateName === 'optgroup') {
	      id = data.group[self.settings.optgroupValueField];
	      setAttr(html, {
	        'data-group': id
	      });

	      if (data.group[self.settings.disabledField]) {
	        setAttr(html, {
	          'data-disabled': ''
	        });
	      }
	    }

	    if (templateName === 'option' || templateName === 'item') {
	      setAttr(html, {
	        'data-value': value
	      }); // make sure we have some classes if a template is overwritten

	      if (templateName === 'item') {
	        addClasses(html, self.settings.itemClass);
	        setAttr(html, {
	          'data-ts-item': ''
	        });
	      } else {
	        addClasses(html, self.settings.optionClass);
	        setAttr(html, {
	          role: 'option',
	          id: data.$id
	        }); // update cache

	        self.options[value].$div = html;
	      }
	    }

	    return html;
	  }
	  /**
	   * Clears the render cache for a template. If
	   * no template is given, clears all render
	   * caches.
	   *
	   */


	  clearCache() {
	    iterate(this.options, (option, value) => {
	      if (option.$div) {
	        option.$div.remove();
	        delete option.$div;
	      }
	    });
	  }
	  /**
	   * Removes a value from item and option caches
	   *
	   */


	  uncacheValue(value) {
	    const option_el = this.getOption(value);
	    if (option_el) option_el.remove();
	  }
	  /**
	   * Determines whether or not to display the
	   * create item prompt, given a user input.
	   *
	   */


	  canCreate(input) {
	    return this.settings.create && input.length > 0 && this.settings.createFilter.call(this, input);
	  }
	  /**
	   * Wraps this.`method` so that `new_fn` can be invoked 'before', 'after', or 'instead' of the original method
	   *
	   * this.hook('instead','onKeyDown',function( arg1, arg2 ...){
	   *
	   * });
	   */


	  hook(when, method, new_fn) {
	    var self = this;
	    var orig_method = self[method];

	    self[method] = function () {
	      var result, result_new;

	      if (when === 'after') {
	        result = orig_method.apply(self, arguments);
	      }

	      result_new = new_fn.apply(self, arguments);

	      if (when === 'instead') {
	        return result_new;
	      }

	      if (when === 'before') {
	        result = orig_method.apply(self, arguments);
	      }

	      return result;
	    };
	  }

	}

	/**
	 * Plugin: "change_listener" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function change_listener () {
	  addEvent(this.input, 'change', () => {
	    this.sync();
	  });
	}

	/**
	 * Plugin: "restore_on_backspace" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function checkbox_options () {
	  var self = this;
	  var orig_onOptionSelect = self.onOptionSelect;
	  self.settings.hideSelected = false; // update the checkbox for an option

	  var UpdateCheckbox = function UpdateCheckbox(option) {
	    setTimeout(() => {
	      var checkbox = option.querySelector('input');

	      if (option.classList.contains('selected')) {
	        checkbox.checked = true;
	      } else {
	        checkbox.checked = false;
	      }
	    }, 1);
	  }; // add checkbox to option template


	  self.hook('after', 'setupTemplates', () => {
	    var orig_render_option = self.settings.render.option;

	    self.settings.render.option = (data, escape_html) => {
	      var rendered = getDom(orig_render_option.call(self, data, escape_html));
	      var checkbox = document.createElement('input');
	      checkbox.addEventListener('click', function (evt) {
	        preventDefault(evt);
	      });
	      checkbox.type = 'checkbox';
	      const hashed = hash_key(data[self.settings.valueField]);

	      if (hashed && self.items.indexOf(hashed) > -1) {
	        checkbox.checked = true;
	      }

	      rendered.prepend(checkbox);
	      return rendered;
	    };
	  }); // uncheck when item removed

	  self.on('item_remove', value => {
	    var option = self.getOption(value);

	    if (option) {
	      // if dropdown hasn't been opened yet, the option won't exist
	      option.classList.remove('selected'); // selected class won't be removed yet

	      UpdateCheckbox(option);
	    }
	  }); // check when item added

	  self.on('item_add', value => {
	    var option = self.getOption(value);

	    if (option) {
	      // if dropdown hasn't been opened yet, the option won't exist
	      UpdateCheckbox(option);
	    }
	  }); // remove items when selected option is clicked

	  self.hook('instead', 'onOptionSelect', (evt, option) => {
	    if (option.classList.contains('selected')) {
	      option.classList.remove('selected');
	      self.removeItem(option.dataset.value);
	      self.refreshOptions();
	      preventDefault(evt, true);
	      return;
	    }

	    orig_onOptionSelect.call(self, evt, option);
	    UpdateCheckbox(option);
	  });
	}

	/**
	 * Plugin: "dropdown_header" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function clear_button (userOptions) {
	  const self = this;
	  const options = Object.assign({
	    className: 'clear-button',
	    title: 'Clear All',
	    html: data => {
	      return `<div class="${data.className}" title="${data.title}">&times;</div>`;
	    }
	  }, userOptions);
	  self.on('initialize', () => {
	    var button = getDom(options.html(options));
	    button.addEventListener('click', evt => {
	      if (self.isDisabled) {
	        return;
	      }

	      self.clear();

	      if (self.settings.mode === 'single' && self.settings.allowEmptyOption) {
	        self.addItem('');
	      }

	      evt.preventDefault();
	      evt.stopPropagation();
	    });
	    self.control.appendChild(button);
	  });
	}

	/**
	 * Plugin: "drag_drop" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function drag_drop () {
	  var self = this;
	  if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
	  if (self.settings.mode !== 'multi') return;
	  var orig_lock = self.lock;
	  var orig_unlock = self.unlock;
	  self.hook('instead', 'lock', () => {
	    var sortable = $(self.control).data('sortable');
	    if (sortable) sortable.disable();
	    return orig_lock.call(self);
	  });
	  self.hook('instead', 'unlock', () => {
	    var sortable = $(self.control).data('sortable');
	    if (sortable) sortable.enable();
	    return orig_unlock.call(self);
	  });
	  self.on('initialize', () => {
	    var $control = $(self.control).sortable({
	      items: '[data-value]',
	      forcePlaceholderSize: true,
	      disabled: self.isLocked,
	      start: (e, ui) => {
	        ui.placeholder.css('width', ui.helper.css('width'));
	        $control.css({
	          overflow: 'visible'
	        });
	      },
	      stop: () => {
	        $control.css({
	          overflow: 'hidden'
	        });
	        var values = [];
	        $control.children('[data-value]').each(function () {
	          if (this.dataset.value) values.push(this.dataset.value);
	        });
	        self.setValue(values);
	      }
	    });
	  });
	}

	/**
	 * Plugin: "dropdown_header" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function dropdown_header (userOptions) {
	  const self = this;
	  const options = Object.assign({
	    title: 'Untitled',
	    headerClass: 'dropdown-header',
	    titleRowClass: 'dropdown-header-title',
	    labelClass: 'dropdown-header-label',
	    closeClass: 'dropdown-header-close',
	    html: data => {
	      return '<div class="' + data.headerClass + '">' + '<div class="' + data.titleRowClass + '">' + '<span class="' + data.labelClass + '">' + data.title + '</span>' + '<a class="' + data.closeClass + '">&times;</a>' + '</div>' + '</div>';
	    }
	  }, userOptions);
	  self.on('initialize', () => {
	    var header = getDom(options.html(options));
	    var close_link = header.querySelector('.' + options.closeClass);

	    if (close_link) {
	      close_link.addEventListener('click', evt => {
	        preventDefault(evt, true);
	        self.close();
	      });
	    }

	    self.dropdown.insertBefore(header, self.dropdown.firstChild);
	  });
	}

	/**
	 * Plugin: "dropdown_input" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function caret_position () {
	  var self = this;
	  /**
	   * Moves the caret to the specified index.
	   *
	   * The input must be moved by leaving it in place and moving the
	   * siblings, due to the fact that focus cannot be restored once lost
	   * on mobile webkit devices
	   *
	   */

	  self.hook('instead', 'setCaret', new_pos => {
	    if (self.settings.mode === 'single' || !self.control.contains(self.control_input)) {
	      new_pos = self.items.length;
	    } else {
	      new_pos = Math.max(0, Math.min(self.items.length, new_pos));

	      if (new_pos != self.caretPos && !self.isPending) {
	        self.controlChildren().forEach((child, j) => {
	          if (j < new_pos) {
	            self.control_input.insertAdjacentElement('beforebegin', child);
	          } else {
	            self.control.appendChild(child);
	          }
	        });
	      }
	    }

	    self.caretPos = new_pos;
	  });
	  self.hook('instead', 'moveCaret', direction => {
	    if (!self.isFocused) return; // move caret before or after selected items

	    const last_active = self.getLastActive(direction);

	    if (last_active) {
	      const idx = nodeIndex(last_active);
	      self.setCaret(direction > 0 ? idx + 1 : idx);
	      self.setActiveItem();
	      removeClasses(last_active, 'last-active'); // move caret left or right of current position
	    } else {
	      self.setCaret(self.caretPos + direction);
	    }
	  });
	}

	/**
	 * Plugin: "dropdown_input" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function dropdown_input () {
	  const self = this;
	  self.settings.shouldOpen = true; // make sure the input is shown even if there are no options to display in the dropdown

	  self.hook('before', 'setup', () => {
	    self.focus_node = self.control;
	    addClasses(self.control_input, 'dropdown-input');
	    const div = getDom('<div class="dropdown-input-wrap">');
	    div.append(self.control_input);
	    self.dropdown.insertBefore(div, self.dropdown.firstChild); // set a placeholder in the select control

	    const placeholder = getDom('<input class="items-placeholder" tabindex="-1" />');
	    placeholder.placeholder = self.settings.placeholder || '';
	    self.control.append(placeholder);
	  });
	  self.on('initialize', () => {
	    // set tabIndex on control to -1, otherwise [shift+tab] will put focus right back on control_input
	    self.control_input.addEventListener('keydown', evt => {
	      //addEvent(self.control_input,'keydown' as const,(evt:KeyboardEvent) =>{
	      switch (evt.keyCode) {
	        case KEY_ESC:
	          if (self.isOpen) {
	            preventDefault(evt, true);
	            self.close();
	          }

	          self.clearActiveItems();
	          return;

	        case KEY_TAB:
	          self.focus_node.tabIndex = -1;
	          break;
	      }

	      return self.onKeyDown.call(self, evt);
	    });
	    self.on('blur', () => {
	      self.focus_node.tabIndex = self.isDisabled ? -1 : self.tabIndex;
	    }); // give the control_input focus when the dropdown is open

	    self.on('dropdown_open', () => {
	      self.control_input.focus();
	    }); // prevent onBlur from closing when focus is on the control_input

	    const orig_onBlur = self.onBlur;
	    self.hook('instead', 'onBlur', evt => {
	      if (evt && evt.relatedTarget == self.control_input) return;
	      return orig_onBlur.call(self);
	    });
	    addEvent(self.control_input, 'blur', () => self.onBlur()); // return focus to control to allow further keyboard input

	    self.hook('before', 'close', () => {
	      if (!self.isOpen) return;
	      self.focus_node.focus();
	    });
	  });
	}

	/**
	 * Plugin: "input_autogrow" (Tom Select)
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function input_autogrow () {
	  var self = this;
	  self.on('initialize', () => {
	    var test_input = document.createElement('span');
	    var control = self.control_input;
	    test_input.style.cssText = 'position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ';
	    self.wrapper.appendChild(test_input);
	    var transfer_styles = ['letterSpacing', 'fontSize', 'fontFamily', 'fontWeight', 'textTransform'];

	    for (const style_name of transfer_styles) {
	      // @ts-ignore TS7015 https://stackoverflow.com/a/50506154/697576
	      test_input.style[style_name] = control.style[style_name];
	    }
	    /**
	     * Set the control width
	     *
	     */


	    var resize = () => {
	      if (self.items.length > 0) {
	        test_input.textContent = control.value;
	        control.style.width = test_input.clientWidth + 'px';
	      } else {
	        control.style.width = '';
	      }
	    };

	    resize();
	    self.on('update item_add item_remove', resize);
	    addEvent(control, 'input', resize);
	    addEvent(control, 'keyup', resize);
	    addEvent(control, 'blur', resize);
	    addEvent(control, 'update', resize);
	  });
	}

	/**
	 * Plugin: "input_autogrow" (Tom Select)
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function no_backspace_delete () {
	  var self = this;
	  var orig_deleteSelection = self.deleteSelection;
	  this.hook('instead', 'deleteSelection', evt => {
	    if (self.activeItems.length) {
	      return orig_deleteSelection.call(self, evt);
	    }

	    return false;
	  });
	}

	/**
	 * Plugin: "no_active_items" (Tom Select)
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function no_active_items () {
	  this.hook('instead', 'setActiveItem', () => {});
	  this.hook('instead', 'selectAll', () => {});
	}

	/**
	 * Plugin: "optgroup_columns" (Tom Select.js)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function optgroup_columns () {
	  var self = this;
	  var orig_keydown = self.onKeyDown;
	  self.hook('instead', 'onKeyDown', evt => {
	    var index, option, options, optgroup;

	    if (!self.isOpen || !(evt.keyCode === KEY_LEFT || evt.keyCode === KEY_RIGHT)) {
	      return orig_keydown.call(self, evt);
	    }

	    optgroup = parentMatch(self.activeOption, '[data-group]');
	    index = nodeIndex(self.activeOption, '[data-selectable]');

	    if (!optgroup) {
	      return;
	    }

	    if (evt.keyCode === KEY_LEFT) {
	      optgroup = optgroup.previousSibling;
	    } else {
	      optgroup = optgroup.nextSibling;
	    }

	    if (!optgroup) {
	      return;
	    }

	    options = optgroup.querySelectorAll('[data-selectable]');
	    option = options[Math.min(options.length - 1, index)];

	    if (option) {
	      self.setActiveOption(option);
	    }
	  });
	}

	/**
	 * Plugin: "remove_button" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function remove_button (userOptions) {
	  const options = Object.assign({
	    label: '&times;',
	    title: 'Remove',
	    className: 'remove',
	    append: true
	  }, userOptions); //options.className = 'remove-single';

	  var self = this; // override the render method to add remove button to each item

	  if (!options.append) {
	    return;
	  }

	  var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	  self.hook('after', 'setupTemplates', () => {
	    var orig_render_item = self.settings.render.item;

	    self.settings.render.item = (data, escape) => {
	      var rendered = getDom(orig_render_item.call(self, data, escape));
	      var close_button = getDom(html);
	      rendered.appendChild(close_button);
	      addEvent(close_button, 'mousedown', evt => {
	        preventDefault(evt, true);
	      });
	      addEvent(close_button, 'click', evt => {
	        // propagating will trigger the dropdown to show for single mode
	        preventDefault(evt, true);
	        if (self.isLocked) return;
	        var value = rendered.dataset.value;
	        self.removeItem(value);
	        self.refreshOptions(false);
	        self.inputState();
	      });
	      return rendered;
	    };
	  });
	}

	/**
	 * Plugin: "restore_on_backspace" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function restore_on_backspace (userOptions) {
	  const self = this;
	  const options = Object.assign({
	    text: option => {
	      return option[self.settings.labelField];
	    }
	  }, userOptions);
	  self.on('item_remove', function (value) {
	    if (!self.isFocused) {
	      return;
	    }

	    if (self.control_input.value.trim() === '') {
	      var option = self.options[value];

	      if (option) {
	        self.setTextboxValue(options.text.call(self, option));
	      }
	    }
	  });
	}

	/**
	 * Plugin: "restore_on_backspace" (Tom Select)
	 * Copyright (c) contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
	 * file except in compliance with the License. You may obtain a copy of the License at:
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 *
	 */
	function virtual_scroll () {
	  const self = this;
	  const orig_canLoad = self.canLoad;
	  const orig_clearActiveOption = self.clearActiveOption;
	  const orig_loadCallback = self.loadCallback;
	  var pagination = {};
	  var dropdown_content;
	  var loading_more = false;
	  var load_more_opt;

	  if (!self.settings.shouldLoadMore) {
	    // return true if additional results should be loaded
	    self.settings.shouldLoadMore = function () {
	      const scroll_percent = dropdown_content.clientHeight / (dropdown_content.scrollHeight - dropdown_content.scrollTop);

	      if (scroll_percent > 0.9) {
	        return true;
	      }

	      if (self.activeOption) {
	        var selectable = self.selectable();
	        var index = [...selectable].indexOf(self.activeOption);

	        if (index >= selectable.length - 2) {
	          return true;
	        }
	      }

	      return false;
	    };
	  }

	  if (!self.settings.firstUrl) {
	    throw 'virtual_scroll plugin requires a firstUrl() method';
	  } // in order for virtual scrolling to work,
	  // options need to be ordered the same way they're returned from the remote data source


	  self.settings.sortField = [{
	    field: '$order'
	  }, {
	    field: '$score'
	  }]; // can we load more results for given query?

	  function canLoadMore(query) {
	    if (typeof self.settings.maxOptions === 'number' && dropdown_content.children.length >= self.settings.maxOptions) {
	      return false;
	    }

	    if (query in pagination && pagination[query]) {
	      return true;
	    }

	    return false;
	  } // set the next url that will be


	  self.setNextUrl = function (value, next_url) {
	    pagination[value] = next_url;
	  }; // getUrl() to be used in settings.load()


	  self.getUrl = function (query) {
	    if (query in pagination) {
	      const next_url = pagination[query];
	      pagination[query] = false;
	      return next_url;
	    } // if the user goes back to a previous query
	    // we need to load the first page again


	    pagination = {};
	    return self.settings.firstUrl.call(self, query);
	  }; // don't clear the active option (and cause unwanted dropdown scroll)
	  // while loading more results


	  self.hook('instead', 'clearActiveOption', () => {
	    if (loading_more) {
	      return;
	    }

	    return orig_clearActiveOption.call(self);
	  }); // override the canLoad method

	  self.hook('instead', 'canLoad', query => {
	    // first time the query has been seen
	    if (!(query in pagination)) {
	      return orig_canLoad.call(self, query);
	    }

	    return canLoadMore(query);
	  }); // wrap the load

	  self.hook('instead', 'loadCallback', (options, optgroups) => {
	    if (!loading_more) {
	      self.clearOptions();
	    } else if (load_more_opt && options.length > 0) {
	      load_more_opt.dataset.value = options[0][self.settings.valueField];
	    }

	    orig_loadCallback.call(self, options, optgroups);
	    loading_more = false;
	  }); // add templates to dropdown
	  //	loading_more if we have another url in the queue
	  //	no_more_results if we don't have another url in the queue

	  self.hook('after', 'refreshOptions', () => {
	    const query = self.lastValue;
	    var option;

	    if (canLoadMore(query)) {
	      option = self.render('loading_more', {
	        query: query
	      });

	      if (option) {
	        option.setAttribute('data-selectable', ''); // so that navigating dropdown with [down] keypresses can navigate to this node

	        load_more_opt = option;
	      }
	    } else if (query in pagination && !dropdown_content.querySelector('.no-results')) {
	      option = self.render('no_more_results', {
	        query: query
	      });
	    }

	    if (option) {
	      addClasses(option, self.settings.optionClass);
	      dropdown_content.append(option);
	    }
	  }); // add scroll listener and default templates

	  self.on('initialize', () => {
	    dropdown_content = self.dropdown_content; // default templates

	    self.settings.render = Object.assign({}, {
	      loading_more: function () {
	        return `<div class="loading-more-results">Loading more results ... </div>`;
	      },
	      no_more_results: function () {
	        return `<div class="no-more-results">No more results</div>`;
	      }
	    }, self.settings.render); // watch dropdown content scroll position

	    dropdown_content.addEventListener('scroll', function () {
	      if (!self.settings.shouldLoadMore.call(self)) {
	        return;
	      } // !important: this will get checked again in load() but we still need to check here otherwise loading_more will be set to true


	      if (!canLoadMore(self.lastValue)) {
	        return;
	      } // don't call load() too much


	      if (loading_more) return;
	      loading_more = true;
	      self.load.call(self, self.lastValue);
	    });
	  });
	}

	TomSelect.define('change_listener', change_listener);
	TomSelect.define('checkbox_options', checkbox_options);
	TomSelect.define('clear_button', clear_button);
	TomSelect.define('drag_drop', drag_drop);
	TomSelect.define('dropdown_header', dropdown_header);
	TomSelect.define('caret_position', caret_position);
	TomSelect.define('dropdown_input', dropdown_input);
	TomSelect.define('input_autogrow', input_autogrow);
	TomSelect.define('no_backspace_delete', no_backspace_delete);
	TomSelect.define('no_active_items', no_active_items);
	TomSelect.define('optgroup_columns', optgroup_columns);
	TomSelect.define('remove_button', remove_button);
	TomSelect.define('restore_on_backspace', restore_on_backspace);
	TomSelect.define('virtual_scroll', virtual_scroll);

	return TomSelect;

}));
var tomSelect=function(el,opts){return new TomSelect(el,opts);} 
//# sourceMappingURL=tom-select.complete.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsK0RBQStEO0FBQy9ELHNEQUFzRDtBQUN0RCxnREFBZ0Q7QUFDaEQscURBQXFEO0FBQ3JELDREQUE0RDtBQUM1RCxxREFBcUQ7QUFDckQsZ0RBQWdEO0FBQ2hELDJEQUEyRDtBQUMzRCxxREFBcUQ7QUFDckQsZ0RBQWdEO0FBQ2hELHdEQUF3RDtBQUN4RCxrREFBa0Q7QUFDbEQsZ0RBQWdEO0FBQ2hELHdEQUF3RDtBQUN4RCx3REFBd0Q7QUFDeEQsbURBQW1EO0FBQ25ELHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsc0JBQXNCLHNCQUFzQix3QkFBd0I7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLGVBQWU7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxL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O0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixVQUFVO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQSxVQUFVO0FBQ1Y7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7O0FBRVgsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDO0FBQzVDLFNBQVM7O0FBRVQsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsU0FBUztBQUNUO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEdBQUc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxHQUFHOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQU07QUFDTixNQUFNOzs7QUFHTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxHQUFHOztBQUVQO0FB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QTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUksR0FBRzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEdBQUc7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksR0FBRzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxHQUFHO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxHQUFHOztBQUVQO0FBQ0EsK0NBQStDOztBQUUvQyw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlCQUF5Qjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDO0FBQ0QsZ0NBQWdDO0FBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NjcmlwdHMvbW9kdWxlcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RvbS1zZWxlY3QvZGlzdC9qcy90b20tc2VsZWN0LmNvbXBsZXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb21TZWxlY3QgZnJvbSAndG9tLXNlbGVjdCc7XG5cbmNvbnN0IHNlbGVjdCA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZy1mb3JtX19zZWxlY3QnKS5mb3JFYWNoKGVsID0+IHtcbiAgICBuZXcgVG9tU2VsZWN0KGVsLCB7XG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgICBzb3J0RmllbGQ6IHtcbiAgICAgICAgZmllbGQ6ICd0ZXh0JyxcbiAgICAgICAgZGlyZWN0aW9uOiAnYXNjJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgc2VsZWN0IH07XG4iLCIvKipcbiogVG9tIFNlbGVjdCB2Mi4wLjNcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLlRvbVNlbGVjdCA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIE1pY3JvRXZlbnQgLSB0byBtYWtlIGFueSBqcyBvYmplY3QgYW4gZXZlbnQgZW1pdHRlclxuXHQgKlxuXHQgKiAtIHB1cmUgamF2YXNjcmlwdCAtIHNlcnZlciBjb21wYXRpYmxlLCBicm93c2VyIGNvbXBhdGlibGVcblx0ICogLSBkb250IHJlbHkgb24gdGhlIGJyb3dzZXIgZG9tc1xuXHQgKiAtIHN1cGVyIHNpbXBsZSAtIHlvdSBnZXQgaXQgaW1tZWRpYXRseSwgbm8gbWlzdGVyeSwgbm8gbWFnaWMgaW52b2x2ZWRcblx0ICpcblx0ICogQGF1dGhvciBKZXJvbWUgRXRpZW5uZSAoaHR0cHM6Ly9naXRodWIuY29tL2plcm9tZWV0aWVubmUpXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBFeGVjdXRlIGNhbGxiYWNrIGZvciBlYWNoIGV2ZW50IGluIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGV2ZW50IG5hbWVzXG5cdCAqXG5cdCAqL1xuXHRmdW5jdGlvbiBmb3JFdmVudHMoZXZlbnRzLCBjYWxsYmFjaykge1xuXHQgIGV2ZW50cy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZXZlbnQgPT4ge1xuXHQgICAgY2FsbGJhY2soZXZlbnQpO1xuXHQgIH0pO1xuXHR9XG5cblx0Y2xhc3MgTWljcm9FdmVudCB7XG5cdCAgY29uc3RydWN0b3IoKSB7XG5cdCAgICB0aGlzLl9ldmVudHMgPSB2b2lkIDA7XG5cdCAgICB0aGlzLl9ldmVudHMgPSB7fTtcblx0ICB9XG5cblx0ICBvbihldmVudHMsIGZjdCkge1xuXHQgICAgZm9yRXZlbnRzKGV2ZW50cywgZXZlbnQgPT4ge1xuXHQgICAgICB0aGlzLl9ldmVudHNbZXZlbnRdID0gdGhpcy5fZXZlbnRzW2V2ZW50XSB8fCBbXTtcblxuXHQgICAgICB0aGlzLl9ldmVudHNbZXZlbnRdLnB1c2goZmN0KTtcblx0ICAgIH0pO1xuXHQgIH1cblxuXHQgIG9mZihldmVudHMsIGZjdCkge1xuXHQgICAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoO1xuXG5cdCAgICBpZiAobiA9PT0gMCkge1xuXHQgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICBmb3JFdmVudHMoZXZlbnRzLCBldmVudCA9PiB7XG5cdCAgICAgIGlmIChuID09PSAxKSByZXR1cm4gZGVsZXRlIHRoaXMuX2V2ZW50c1tldmVudF07XG5cdCAgICAgIGlmIChldmVudCBpbiB0aGlzLl9ldmVudHMgPT09IGZhbHNlKSByZXR1cm47XG5cblx0ICAgICAgdGhpcy5fZXZlbnRzW2V2ZW50XS5zcGxpY2UodGhpcy5fZXZlbnRzW2V2ZW50XS5pbmRleE9mKGZjdCksIDEpO1xuXHQgICAgfSk7XG5cdCAgfVxuXG5cdCAgdHJpZ2dlcihldmVudHMsIC4uLmFyZ3MpIHtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgIGZvckV2ZW50cyhldmVudHMsIGV2ZW50ID0+IHtcblx0ICAgICAgaWYgKGV2ZW50IGluIHNlbGYuX2V2ZW50cyA9PT0gZmFsc2UpIHJldHVybjtcblxuXHQgICAgICBmb3IgKGxldCBmY3Qgb2Ygc2VsZi5fZXZlbnRzW2V2ZW50XSkge1xuXHQgICAgICAgIGZjdC5hcHBseShzZWxmLCBhcmdzKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgfVxuXG5cdH1cblxuXHQvKipcblx0ICogbWljcm9wbHVnaW4uanNcblx0ICogQ29weXJpZ2h0IChjKSAyMDEzIEJyaWFuIFJlYXZpcyAmIGNvbnRyaWJ1dG9yc1xuXHQgKlxuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuXHQgKiBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcblx0ICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cdCAqXG5cdCAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcblx0ICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxuXHQgKiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2Vcblx0ICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblx0ICpcblx0ICogQGF1dGhvciBCcmlhbiBSZWF2aXMgPGJyaWFuQHRoaXJkcm91dGUuY29tPlxuXHQgKi9cblx0ZnVuY3Rpb24gTWljcm9QbHVnaW4oSW50ZXJmYWNlKSB7XG5cdCAgSW50ZXJmYWNlLnBsdWdpbnMgPSB7fTtcblx0ICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBJbnRlcmZhY2Uge1xuXHQgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuXHQgICAgICBzdXBlciguLi5hcmdzKTtcblx0ICAgICAgdGhpcy5wbHVnaW5zID0ge1xuXHQgICAgICAgIG5hbWVzOiBbXSxcblx0ICAgICAgICBzZXR0aW5nczoge30sXG5cdCAgICAgICAgcmVxdWVzdGVkOiB7fSxcblx0ICAgICAgICBsb2FkZWQ6IHt9XG5cdCAgICAgIH07XG5cdCAgICB9XG5cblx0ICAgIC8qKlxuXHQgICAgICogUmVnaXN0ZXJzIGEgcGx1Z2luLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG5cdCAgICAgKi9cblx0ICAgIHN0YXRpYyBkZWZpbmUobmFtZSwgZm4pIHtcblx0ICAgICAgSW50ZXJmYWNlLnBsdWdpbnNbbmFtZV0gPSB7XG5cdCAgICAgICAgJ25hbWUnOiBuYW1lLFxuXHQgICAgICAgICdmbic6IGZuXG5cdCAgICAgIH07XG5cdCAgICB9XG5cdCAgICAvKipcblx0ICAgICAqIEluaXRpYWxpemVzIHRoZSBsaXN0ZWQgcGx1Z2lucyAod2l0aCBvcHRpb25zKS5cblx0ICAgICAqIEFjY2VwdGFibGUgZm9ybWF0czpcblx0ICAgICAqXG5cdCAgICAgKiBMaXN0ICh3aXRob3V0IG9wdGlvbnMpOlxuXHQgICAgICogICBbJ2EnLCAnYicsICdjJ11cblx0ICAgICAqXG5cdCAgICAgKiBMaXN0ICh3aXRoIG9wdGlvbnMpOlxuXHQgICAgICogICBbeyduYW1lJzogJ2EnLCBvcHRpb25zOiB7fX0sIHsnbmFtZSc6ICdiJywgb3B0aW9uczoge319XVxuXHQgICAgICpcblx0ICAgICAqIEhhc2ggKHdpdGggb3B0aW9ucyk6XG5cdCAgICAgKiAgIHsnYSc6IHsgLi4uIH0sICdiJzogeyAuLi4gfSwgJ2MnOiB7IC4uLiB9fVxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7YXJyYXl8b2JqZWN0fSBwbHVnaW5zXG5cdCAgICAgKi9cblxuXG5cdCAgICBpbml0aWFsaXplUGx1Z2lucyhwbHVnaW5zKSB7XG5cdCAgICAgIHZhciBrZXksIG5hbWU7XG5cdCAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXHQgICAgICBjb25zdCBxdWV1ZSA9IFtdO1xuXG5cdCAgICAgIGlmIChBcnJheS5pc0FycmF5KHBsdWdpbnMpKSB7XG5cdCAgICAgICAgcGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PiB7XG5cdCAgICAgICAgICBpZiAodHlwZW9mIHBsdWdpbiA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgcXVldWUucHVzaChwbHVnaW4pO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgc2VsZi5wbHVnaW5zLnNldHRpbmdzW3BsdWdpbi5uYW1lXSA9IHBsdWdpbi5vcHRpb25zO1xuXHQgICAgICAgICAgICBxdWV1ZS5wdXNoKHBsdWdpbi5uYW1lKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgfSBlbHNlIGlmIChwbHVnaW5zKSB7XG5cdCAgICAgICAgZm9yIChrZXkgaW4gcGx1Z2lucykge1xuXHQgICAgICAgICAgaWYgKHBsdWdpbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgICAgICBzZWxmLnBsdWdpbnMuc2V0dGluZ3Nba2V5XSA9IHBsdWdpbnNba2V5XTtcblx0ICAgICAgICAgICAgcXVldWUucHVzaChrZXkpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIHdoaWxlIChuYW1lID0gcXVldWUuc2hpZnQoKSkge1xuXHQgICAgICAgIHNlbGYucmVxdWlyZShuYW1lKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBsb2FkUGx1Z2luKG5hbWUpIHtcblx0ICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgICAgICB2YXIgcGx1Z2lucyA9IHNlbGYucGx1Z2lucztcblx0ICAgICAgdmFyIHBsdWdpbiA9IEludGVyZmFjZS5wbHVnaW5zW25hbWVdO1xuXG5cdCAgICAgIGlmICghSW50ZXJmYWNlLnBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmaW5kIFwiJyArIG5hbWUgKyAnXCIgcGx1Z2luJyk7XG5cdCAgICAgIH1cblxuXHQgICAgICBwbHVnaW5zLnJlcXVlc3RlZFtuYW1lXSA9IHRydWU7XG5cdCAgICAgIHBsdWdpbnMubG9hZGVkW25hbWVdID0gcGx1Z2luLmZuLmFwcGx5KHNlbGYsIFtzZWxmLnBsdWdpbnMuc2V0dGluZ3NbbmFtZV0gfHwge31dKTtcblx0ICAgICAgcGx1Z2lucy5uYW1lcy5wdXNoKG5hbWUpO1xuXHQgICAgfVxuXHQgICAgLyoqXG5cdCAgICAgKiBJbml0aWFsaXplcyBhIHBsdWdpbi5cblx0ICAgICAqXG5cdCAgICAgKi9cblxuXG5cdCAgICByZXF1aXJlKG5hbWUpIHtcblx0ICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgICAgICB2YXIgcGx1Z2lucyA9IHNlbGYucGx1Z2lucztcblxuXHQgICAgICBpZiAoIXNlbGYucGx1Z2lucy5sb2FkZWQuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0ICAgICAgICBpZiAocGx1Z2lucy5yZXF1ZXN0ZWRbbmFtZV0pIHtcblx0ICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGx1Z2luIGhhcyBjaXJjdWxhciBkZXBlbmRlbmN5IChcIicgKyBuYW1lICsgJ1wiKScpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHNlbGYubG9hZFBsdWdpbihuYW1lKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiBwbHVnaW5zLmxvYWRlZFtuYW1lXTtcblx0ICAgIH1cblxuXHQgIH07XG5cdH1cblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vYW5kcmV3cmsvbm9kZS1kaWFjcml0aWNzL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5cdHZhciBsYXRpbl9wYXQ7XG5cdGNvbnN0IGFjY2VudF9wYXQgPSAnW1xcdTAzMDAtXFx1MDM2RlxcdXtiN31cXHV7MmJlfV0nOyAvLyBcXHV7MmJjfVxuXG5cdGNvbnN0IGFjY2VudF9yZWcgPSBuZXcgUmVnRXhwKGFjY2VudF9wYXQsICdnJyk7XG5cdHZhciBkaWFjcml0aWNfcGF0dGVybnM7XG5cdGNvbnN0IGxhdGluX2NvbnZlcnQgPSB7XG5cdCAgJ8OmJzogJ2FlJyxcblx0ICAn4rGlJzogJ2EnLFxuXHQgICfDuCc6ICdvJ1xuXHR9O1xuXHRjb25zdCBjb252ZXJ0X3BhdCA9IG5ldyBSZWdFeHAoT2JqZWN0LmtleXMobGF0aW5fY29udmVydCkuam9pbignfCcpLCAnZycpO1xuXHQvKipcblx0ICogY29kZSBwb2ludHMgZ2VuZXJhdGVkIGZyb20gdG9Db2RlUG9pbnRzKCk7XG5cdCAqIHJlbW92ZWQgNjUzMzkgdG8gNjUzNDVcblx0ICovXG5cblx0Y29uc3QgY29kZV9wb2ludHMgPSBbWzY3LCA2N10sIFsxNjAsIDE2MF0sIFsxOTIsIDQzOF0sIFs0NTIsIDY1Ml0sIFs5NjEsIDk2MV0sIFsxMDE5LCAxMDE5XSwgWzEwODMsIDEwODNdLCBbMTI4MSwgMTI4OV0sIFsxOTg0LCAxOTg0XSwgWzUwOTUsIDUwOTVdLCBbNzQyOSwgNzQ0MV0sIFs3NTQ1LCA3NTQ5XSwgWzc2ODAsIDc5MzVdLCBbODU4MCwgODU4MF0sIFs5Mzk4LCA5NDQ5XSwgWzExMzYwLCAxMTM5MV0sIFs0Mjc5MiwgNDI3OTNdLCBbNDI4MDIsIDQyODUxXSwgWzQyODczLCA0Mjg5N10sIFs0MjkxMiwgNDI5MjJdLCBbNjQyNTYsIDY0MjYwXSwgWzY1MzEzLCA2NTMzOF0sIFs2NTM0NSwgNjUzNzBdXTtcblx0LyoqXG5cdCAqIFJlbW92ZSBhY2NlbnRzXG5cdCAqIHZpYSBodHRwczovL2dpdGh1Yi5jb20va3Jpc2svRnVzZS9pc3N1ZXMvMTMzI2lzc3VlY29tbWVudC0zMTg2OTI3MDNcblx0ICpcblx0ICovXG5cblx0Y29uc3QgYXNjaWlmb2xkID0gc3RyID0+IHtcblx0ICByZXR1cm4gc3RyLm5vcm1hbGl6ZSgnTkZLRCcpLnJlcGxhY2UoYWNjZW50X3JlZywgJycpLnRvTG93ZXJDYXNlKCkucmVwbGFjZShjb252ZXJ0X3BhdCwgZnVuY3Rpb24gKGZvcmVpZ25sZXR0ZXIpIHtcblx0ICAgIHJldHVybiBsYXRpbl9jb252ZXJ0W2ZvcmVpZ25sZXR0ZXJdO1xuXHQgIH0pO1xuXHR9O1xuXHQvKipcblx0ICogQ29udmVydCBhcnJheSBvZiBzdHJpbmdzIHRvIGEgcmVndWxhciBleHByZXNzaW9uXG5cdCAqXHRleCBbJ2FiJywnYSddID0+ICg/OmFifGEpXG5cdCAqIFx0ZXggWydhJywnYiddID0+IFthYl1cblx0ICpcblx0ICovXG5cblxuXHRjb25zdCBhcnJheVRvUGF0dGVybiA9IChjaGFycywgZ2x1ZSA9ICd8JykgPT4ge1xuXHQgIGlmIChjaGFycy5sZW5ndGggPT0gMSkge1xuXHQgICAgcmV0dXJuIGNoYXJzWzBdO1xuXHQgIH1cblxuXHQgIHZhciBsb25nZXN0ID0gMTtcblx0ICBjaGFycy5mb3JFYWNoKGEgPT4ge1xuXHQgICAgbG9uZ2VzdCA9IE1hdGgubWF4KGxvbmdlc3QsIGEubGVuZ3RoKTtcblx0ICB9KTtcblxuXHQgIGlmIChsb25nZXN0ID09IDEpIHtcblx0ICAgIHJldHVybiAnWycgKyBjaGFycy5qb2luKCcnKSArICddJztcblx0ICB9XG5cblx0ICByZXR1cm4gJyg/OicgKyBjaGFycy5qb2luKGdsdWUpICsgJyknO1xuXHR9O1xuXHQvKipcblx0ICogR2V0IGFsbCBwb3NzaWJsZSBjb21iaW5hdGlvbnMgb2Ygc3Vic3RyaW5ncyB0aGF0IGFkZCB1cCB0byB0aGUgZ2l2ZW4gc3RyaW5nXG5cdCAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMwMTY5NTg3L2ZpbmQtYWxsLXRoZS1jb21iaW5hdGlvbi1vZi1zdWJzdHJpbmdzLXRoYXQtYWRkLXVwLXRvLXRoZS1naXZlbi1zdHJpbmdcblx0ICpcblx0ICovXG5cblx0Y29uc3QgYWxsU3Vic3RyaW5ncyA9IGlucHV0ID0+IHtcblx0ICBpZiAoaW5wdXQubGVuZ3RoID09PSAxKSByZXR1cm4gW1tpbnB1dF1dO1xuXHQgIHZhciByZXN1bHQgPSBbXTtcblx0ICBhbGxTdWJzdHJpbmdzKGlucHV0LnN1YnN0cmluZygxKSkuZm9yRWFjaChmdW5jdGlvbiAoc3VicmVzdWx0KSB7XG5cdCAgICB2YXIgdG1wID0gc3VicmVzdWx0LnNsaWNlKDApO1xuXHQgICAgdG1wWzBdID0gaW5wdXQuY2hhckF0KDApICsgdG1wWzBdO1xuXHQgICAgcmVzdWx0LnB1c2godG1wKTtcblx0ICAgIHRtcCA9IHN1YnJlc3VsdC5zbGljZSgwKTtcblx0ICAgIHRtcC51bnNoaWZ0KGlucHV0LmNoYXJBdCgwKSk7XG5cdCAgICByZXN1bHQucHVzaCh0bXApO1xuXHQgIH0pO1xuXHQgIHJldHVybiByZXN1bHQ7XG5cdH07XG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBhIGxpc3Qgb2YgZGlhY3JpdGljcyBmcm9tIHRoZSBsaXN0IG9mIGNvZGUgcG9pbnRzXG5cdCAqXG5cdCAqL1xuXG5cdGNvbnN0IGdlbmVyYXRlRGlhY3JpdGljcyA9ICgpID0+IHtcblx0ICB2YXIgZGlhY3JpdGljcyA9IHt9O1xuXHQgIGNvZGVfcG9pbnRzLmZvckVhY2goY29kZV9yYW5nZSA9PiB7XG5cdCAgICBmb3IgKGxldCBpID0gY29kZV9yYW5nZVswXTsgaSA8PSBjb2RlX3JhbmdlWzFdOyBpKyspIHtcblx0ICAgICAgbGV0IGRpYWNyaXRpYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG5cdCAgICAgIGxldCBsYXRpbiA9IGFzY2lpZm9sZChkaWFjcml0aWMpO1xuXG5cdCAgICAgIGlmIChsYXRpbiA9PSBkaWFjcml0aWMudG9Mb3dlckNhc2UoKSkge1xuXHQgICAgICAgIGNvbnRpbnVlO1xuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKCEobGF0aW4gaW4gZGlhY3JpdGljcykpIHtcblx0ICAgICAgICBkaWFjcml0aWNzW2xhdGluXSA9IFtsYXRpbl07XG5cdCAgICAgIH1cblxuXHQgICAgICB2YXIgcGF0dCA9IG5ldyBSZWdFeHAoYXJyYXlUb1BhdHRlcm4oZGlhY3JpdGljc1tsYXRpbl0pLCAnaXUnKTtcblxuXHQgICAgICBpZiAoZGlhY3JpdGljLm1hdGNoKHBhdHQpKSB7XG5cdCAgICAgICAgY29udGludWU7XG5cdCAgICAgIH1cblxuXHQgICAgICBkaWFjcml0aWNzW2xhdGluXS5wdXNoKGRpYWNyaXRpYyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdCAgdmFyIGxhdGluX2NoYXJzID0gT2JqZWN0LmtleXMoZGlhY3JpdGljcyk7IC8vIGxhdGluIGNoYXJhY3RlciBwYXR0ZXJuXG5cdCAgLy8gbWF0Y2ggbG9uZ2VyIHN1YnN0cmluZ3MgZmlyc3RcblxuXHQgIGxhdGluX2NoYXJzID0gbGF0aW5fY2hhcnMuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCk7XG5cdCAgbGF0aW5fcGF0ID0gbmV3IFJlZ0V4cCgnKCcgKyBhcnJheVRvUGF0dGVybihsYXRpbl9jaGFycykgKyBhY2NlbnRfcGF0ICsgJyopJywgJ2cnKTsgLy8gYnVpbGQgZGlhY3JpdGljIHBhdHRlcm5zXG5cdCAgLy8gYWUgbmVlZHM6IFxuXHQgIC8vXHQoPzooPzphZXzDhnzHvHzHoil8KD86QXzikrZ877yhLi4uKSg/OkV8yZt84pK6Li4uKSlcblxuXHQgIHZhciBkaWFjcml0aWNfcGF0dGVybnMgPSB7fTtcblx0ICBsYXRpbl9jaGFycy5zb3J0KChhLCBiKSA9PiBhLmxlbmd0aCAtIGIubGVuZ3RoKS5mb3JFYWNoKGxhdGluID0+IHtcblx0ICAgIHZhciBzdWJzdHJpbmdzID0gYWxsU3Vic3RyaW5ncyhsYXRpbik7XG5cdCAgICB2YXIgcGF0dGVybiA9IHN1YnN0cmluZ3MubWFwKHN1Yl9wYXQgPT4ge1xuXHQgICAgICBzdWJfcGF0ID0gc3ViX3BhdC5tYXAobCA9PiB7XG5cdCAgICAgICAgaWYgKGRpYWNyaXRpY3MuaGFzT3duUHJvcGVydHkobCkpIHtcblx0ICAgICAgICAgIHJldHVybiBhcnJheVRvUGF0dGVybihkaWFjcml0aWNzW2xdKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICByZXR1cm4gbDtcblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybiBhcnJheVRvUGF0dGVybihzdWJfcGF0LCAnJyk7XG5cdCAgICB9KTtcblx0ICAgIGRpYWNyaXRpY19wYXR0ZXJuc1tsYXRpbl0gPSBhcnJheVRvUGF0dGVybihwYXR0ZXJuKTtcblx0ICB9KTtcblx0ICByZXR1cm4gZGlhY3JpdGljX3BhdHRlcm5zO1xuXHR9O1xuXHQvKipcblx0ICogRXhwYW5kIGEgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4gdG8gaW5jbHVkZSBkaWFjcml0aWNzXG5cdCAqIFx0ZWcgL2EvIGJlY29tZXMgL2Hik5DvvYHhuprDoMOhw6LhuqfhuqXhuqvhuqnDo8SBxIPhurHhuq/hurXhurPIp8ehw6THn+G6o8Olx7vHjsiByIPhuqHhuq3hurfhuIHEheKxpcmQyZFB4pK277yhw4DDgcOC4bqm4bqk4bqq4bqow4PEgMSC4bqw4bqu4bq04bqyyKbHoMOEx57huqLDhce6x43IgMiC4bqg4bqs4bq24biAxITIuuKxry9cblx0ICpcblx0ICovXG5cblx0Y29uc3QgZGlhY3JpdGljUmVnZXhQb2ludHMgPSByZWdleCA9PiB7XG5cdCAgaWYgKGRpYWNyaXRpY19wYXR0ZXJucyA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICBkaWFjcml0aWNfcGF0dGVybnMgPSBnZW5lcmF0ZURpYWNyaXRpY3MoKTtcblx0ICB9XG5cblx0ICBjb25zdCBkZWNvbXBvc2VkID0gcmVnZXgubm9ybWFsaXplKCdORktEJykudG9Mb3dlckNhc2UoKTtcblx0ICByZXR1cm4gZGVjb21wb3NlZC5zcGxpdChsYXRpbl9wYXQpLm1hcChwYXJ0ID0+IHtcblx0ICAgIGlmIChwYXJ0ID09ICcnKSB7XG5cdCAgICAgIHJldHVybiAnJztcblx0ICAgIH0gLy8gXCLvrIRcIiBvciBcImZmbFwiXG5cblxuXHQgICAgY29uc3Qgbm9fYWNjZW50ID0gYXNjaWlmb2xkKHBhcnQpO1xuXG5cdCAgICBpZiAoZGlhY3JpdGljX3BhdHRlcm5zLmhhc093blByb3BlcnR5KG5vX2FjY2VudCkpIHtcblx0ICAgICAgcmV0dXJuIGRpYWNyaXRpY19wYXR0ZXJuc1tub19hY2NlbnRdO1xuXHQgICAgfSAvLyAn2KPZh9mE2KcnIChcXHV7NjIzfVxcdXs2NDd9XFx1ezY0NH1cXHV7NjI3fSkgb3IgJ9in2ZTZh9mE2KcnIChcXHV7NjI3fVxcdXs2NTR9XFx1ezY0N31cXHV7NjQ0fVxcdXs2Mjd9KVxuXG5cblx0ICAgIGNvbnN0IGNvbXBvc2VkX3BhcnQgPSBwYXJ0Lm5vcm1hbGl6ZSgnTkZDJyk7XG5cblx0ICAgIGlmIChjb21wb3NlZF9wYXJ0ICE9IHBhcnQpIHtcblx0ICAgICAgcmV0dXJuIGFycmF5VG9QYXR0ZXJuKFtwYXJ0LCBjb21wb3NlZF9wYXJ0XSk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBwYXJ0O1xuXHQgIH0pLmpvaW4oJycpO1xuXHR9O1xuXG5cdC8vIEB0cy1pZ25vcmUgVFMyNjkxIFwiQW4gaW1wb3J0IHBhdGggY2Fubm90IGVuZCB3aXRoIGEgJy50cycgZXh0ZW5zaW9uXCJcblxuXHQvKipcblx0ICogQSBwcm9wZXJ0eSBnZXR0ZXIgcmVzb2x2aW5nIGRvdC1ub3RhdGlvblxuXHQgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmogICAgIFRoZSByb290IG9iamVjdCB0byBmZXRjaCBwcm9wZXJ0eSBvblxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9ICBuYW1lICAgIFRoZSBvcHRpb25hbGx5IGRvdHRlZCBwcm9wZXJ0eSBuYW1lIHRvIGZldGNoXG5cdCAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgVGhlIHJlc29sdmVkIHByb3BlcnR5IHZhbHVlXG5cdCAqL1xuXHRjb25zdCBnZXRBdHRyID0gKG9iaiwgbmFtZSkgPT4ge1xuXHQgIGlmICghb2JqKSByZXR1cm47XG5cdCAgcmV0dXJuIG9ialtuYW1lXTtcblx0fTtcblx0LyoqXG5cdCAqIEEgcHJvcGVydHkgZ2V0dGVyIHJlc29sdmluZyBkb3Qtbm90YXRpb25cblx0ICogQHBhcmFtICB7T2JqZWN0fSAgb2JqICAgICBUaGUgcm9vdCBvYmplY3QgdG8gZmV0Y2ggcHJvcGVydHkgb25cblx0ICogQHBhcmFtICB7U3RyaW5nfSAgbmFtZSAgICBUaGUgb3B0aW9uYWxseSBkb3R0ZWQgcHJvcGVydHkgbmFtZSB0byBmZXRjaFxuXHQgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgIFRoZSByZXNvbHZlZCBwcm9wZXJ0eSB2YWx1ZVxuXHQgKi9cblxuXHRjb25zdCBnZXRBdHRyTmVzdGluZyA9IChvYmosIG5hbWUpID0+IHtcblx0ICBpZiAoIW9iaikgcmV0dXJuO1xuXHQgIHZhciBwYXJ0LFxuXHQgICAgICBuYW1lcyA9IG5hbWUuc3BsaXQoXCIuXCIpO1xuXG5cdCAgd2hpbGUgKChwYXJ0ID0gbmFtZXMuc2hpZnQoKSkgJiYgKG9iaiA9IG9ialtwYXJ0XSkpO1xuXG5cdCAgcmV0dXJuIG9iajtcblx0fTtcblx0LyoqXG5cdCAqIENhbGN1bGF0ZXMgaG93IGNsb3NlIG9mIGEgbWF0Y2ggdGhlXG5cdCAqIGdpdmVuIHZhbHVlIGlzIGFnYWluc3QgYSBzZWFyY2ggdG9rZW4uXG5cdCAqXG5cdCAqL1xuXG5cdGNvbnN0IHNjb3JlVmFsdWUgPSAodmFsdWUsIHRva2VuLCB3ZWlnaHQpID0+IHtcblx0ICB2YXIgc2NvcmUsIHBvcztcblx0ICBpZiAoIXZhbHVlKSByZXR1cm4gMDtcblx0ICB2YWx1ZSA9IHZhbHVlICsgJyc7XG5cdCAgcG9zID0gdmFsdWUuc2VhcmNoKHRva2VuLnJlZ2V4KTtcblx0ICBpZiAocG9zID09PSAtMSkgcmV0dXJuIDA7XG5cdCAgc2NvcmUgPSB0b2tlbi5zdHJpbmcubGVuZ3RoIC8gdmFsdWUubGVuZ3RoO1xuXHQgIGlmIChwb3MgPT09IDApIHNjb3JlICs9IDAuNTtcblx0ICByZXR1cm4gc2NvcmUgKiB3ZWlnaHQ7XG5cdH07XG5cdC8qKlxuXHQgKlxuXHQgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MzAwNjYwMS93aHktZG9lcy11LXRocm93LWFuLWludmFsaWQtZXNjYXBlLWVycm9yXG5cdCAqL1xuXG5cdGNvbnN0IGVzY2FwZV9yZWdleCA9IHN0ciA9PiB7XG5cdCAgcmV0dXJuIChzdHIgKyAnJykucmVwbGFjZSgvKFtcXCRcXCgtXFwrXFwuXFw/XFxbLVxcXlxcey1cXH1dKS9nLCAnXFxcXCQxJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBDYXN0IG9iamVjdCBwcm9wZXJ0eSB0byBhbiBhcnJheSBpZiBpdCBleGlzdHMgYW5kIGhhcyBhIHZhbHVlXG5cdCAqXG5cdCAqL1xuXG5cdGNvbnN0IHByb3BUb0FycmF5ID0gKG9iaiwga2V5KSA9PiB7XG5cdCAgdmFyIHZhbHVlID0gb2JqW2tleV07XG5cdCAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cblx0ICBpZiAodmFsdWUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdCAgICBvYmpba2V5XSA9IFt2YWx1ZV07XG5cdCAgfVxuXHR9O1xuXHQvKipcblx0ICogSXRlcmF0ZXMgb3ZlciBhcnJheXMgYW5kIGhhc2hlcy5cblx0ICpcblx0ICogYGBgXG5cdCAqIGl0ZXJhdGUodGhpcy5pdGVtcywgZnVuY3Rpb24oaXRlbSwgaWQpIHtcblx0ICogICAgLy8gaW52b2tlZCBmb3IgZWFjaCBpdGVtXG5cdCAqIH0pO1xuXHQgKiBgYGBcblx0ICpcblx0ICovXG5cblx0Y29uc3QgaXRlcmF0ZSA9IChvYmplY3QsIGNhbGxiYWNrKSA9PiB7XG5cdCAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuXHQgICAgb2JqZWN0LmZvckVhY2goY2FsbGJhY2spO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG5cdCAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgIGNhbGxiYWNrKG9iamVjdFtrZXldLCBrZXkpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXHRjb25zdCBjbXAgPSAoYSwgYikgPT4ge1xuXHQgIGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGIgPT09ICdudW1iZXInKSB7XG5cdCAgICByZXR1cm4gYSA+IGIgPyAxIDogYSA8IGIgPyAtMSA6IDA7XG5cdCAgfVxuXG5cdCAgYSA9IGFzY2lpZm9sZChhICsgJycpLnRvTG93ZXJDYXNlKCk7XG5cdCAgYiA9IGFzY2lpZm9sZChiICsgJycpLnRvTG93ZXJDYXNlKCk7XG5cdCAgaWYgKGEgPiBiKSByZXR1cm4gMTtcblx0ICBpZiAoYiA+IGEpIHJldHVybiAtMTtcblx0ICByZXR1cm4gMDtcblx0fTtcblxuXHQvKipcblx0ICogc2lmdGVyLmpzXG5cdCAqIENvcHlyaWdodCAoYykgMjAxM+KAkzIwMjAgQnJpYW4gUmVhdmlzICYgY29udHJpYnV0b3JzXG5cdCAqXG5cdCAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG5cdCAqIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuXHQgKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblx0ICpcblx0ICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuXHQgKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GXG5cdCAqIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuXHQgKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXHQgKlxuXHQgKiBAYXV0aG9yIEJyaWFuIFJlYXZpcyA8YnJpYW5AdGhpcmRyb3V0ZS5jb20+XG5cdCAqL1xuXG5cdGNsYXNzIFNpZnRlciB7XG5cdCAgLy8gW118e307XG5cblx0ICAvKipcblx0ICAgKiBUZXh0dWFsbHkgc2VhcmNoZXMgYXJyYXlzIGFuZCBoYXNoZXMgb2Ygb2JqZWN0c1xuXHQgICAqIGJ5IHByb3BlcnR5IChvciBtdWx0aXBsZSBwcm9wZXJ0aWVzKS4gRGVzaWduZWRcblx0ICAgKiBzcGVjaWZpY2FsbHkgZm9yIGF1dG9jb21wbGV0ZS5cblx0ICAgKlxuXHQgICAqL1xuXHQgIGNvbnN0cnVjdG9yKGl0ZW1zLCBzZXR0aW5ncykge1xuXHQgICAgdGhpcy5pdGVtcyA9IHZvaWQgMDtcblx0ICAgIHRoaXMuc2V0dGluZ3MgPSB2b2lkIDA7XG5cdCAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG5cdCAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3MgfHwge1xuXHQgICAgICBkaWFjcml0aWNzOiB0cnVlXG5cdCAgICB9O1xuXHQgIH1cblxuXHQgIC8qKlxuXHQgICAqIFNwbGl0cyBhIHNlYXJjaCBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBpbmRpdmlkdWFsXG5cdCAgICogcmVnZXhwcyB0byBiZSB1c2VkIHRvIG1hdGNoIHJlc3VsdHMuXG5cdCAgICpcblx0ICAgKi9cblx0ICB0b2tlbml6ZShxdWVyeSwgcmVzcGVjdF93b3JkX2JvdW5kYXJpZXMsIHdlaWdodHMpIHtcblx0ICAgIGlmICghcXVlcnkgfHwgIXF1ZXJ5Lmxlbmd0aCkgcmV0dXJuIFtdO1xuXHQgICAgY29uc3QgdG9rZW5zID0gW107XG5cdCAgICBjb25zdCB3b3JkcyA9IHF1ZXJ5LnNwbGl0KC9cXHMrLyk7XG5cdCAgICB2YXIgZmllbGRfcmVnZXg7XG5cblx0ICAgIGlmICh3ZWlnaHRzKSB7XG5cdCAgICAgIGZpZWxkX3JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgT2JqZWN0LmtleXMod2VpZ2h0cykubWFwKGVzY2FwZV9yZWdleCkuam9pbignfCcpICsgJylcXDooLiopJCcpO1xuXHQgICAgfVxuXG5cdCAgICB3b3Jkcy5mb3JFYWNoKHdvcmQgPT4ge1xuXHQgICAgICBsZXQgZmllbGRfbWF0Y2g7XG5cdCAgICAgIGxldCBmaWVsZCA9IG51bGw7XG5cdCAgICAgIGxldCByZWdleCA9IG51bGw7IC8vIGxvb2sgZm9yIFwiZmllbGQ6cXVlcnlcIiB0b2tlbnNcblxuXHQgICAgICBpZiAoZmllbGRfcmVnZXggJiYgKGZpZWxkX21hdGNoID0gd29yZC5tYXRjaChmaWVsZF9yZWdleCkpKSB7XG5cdCAgICAgICAgZmllbGQgPSBmaWVsZF9tYXRjaFsxXTtcblx0ICAgICAgICB3b3JkID0gZmllbGRfbWF0Y2hbMl07XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAod29yZC5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgcmVnZXggPSBlc2NhcGVfcmVnZXgod29yZCk7XG5cblx0ICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5kaWFjcml0aWNzKSB7XG5cdCAgICAgICAgICByZWdleCA9IGRpYWNyaXRpY1JlZ2V4UG9pbnRzKHJlZ2V4KTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAocmVzcGVjdF93b3JkX2JvdW5kYXJpZXMpIHJlZ2V4ID0gXCJcXFxcYlwiICsgcmVnZXg7XG5cdCAgICAgIH1cblxuXHQgICAgICB0b2tlbnMucHVzaCh7XG5cdCAgICAgICAgc3RyaW5nOiB3b3JkLFxuXHQgICAgICAgIHJlZ2V4OiByZWdleCA/IG5ldyBSZWdFeHAocmVnZXgsICdpdScpIDogbnVsbCxcblx0ICAgICAgICBmaWVsZDogZmllbGRcblx0ICAgICAgfSk7XG5cdCAgICB9KTtcblx0ICAgIHJldHVybiB0b2tlbnM7XG5cdCAgfVxuXG5cdCAgLyoqXG5cdCAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgdG8gc2NvcmUgaW5kaXZpZHVhbCByZXN1bHRzLlxuXHQgICAqXG5cdCAgICogR29vZCBtYXRjaGVzIHdpbGwgaGF2ZSBhIGhpZ2hlciBzY29yZSB0aGFuIHBvb3IgbWF0Y2hlcy5cblx0ICAgKiBJZiBhbiBpdGVtIGlzIG5vdCBhIG1hdGNoLCAwIHdpbGwgYmUgcmV0dXJuZWQgYnkgdGhlIGZ1bmN0aW9uLlxuXHQgICAqXG5cdCAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuXHQgICAqL1xuXHQgIGdldFNjb3JlRnVuY3Rpb24ocXVlcnksIG9wdGlvbnMpIHtcblx0ICAgIHZhciBzZWFyY2ggPSB0aGlzLnByZXBhcmVTZWFyY2gocXVlcnksIG9wdGlvbnMpO1xuXHQgICAgcmV0dXJuIHRoaXMuX2dldFNjb3JlRnVuY3Rpb24oc2VhcmNoKTtcblx0ICB9XG5cblx0ICBfZ2V0U2NvcmVGdW5jdGlvbihzZWFyY2gpIHtcblx0ICAgIGNvbnN0IHRva2VucyA9IHNlYXJjaC50b2tlbnMsXG5cdCAgICAgICAgICB0b2tlbl9jb3VudCA9IHRva2Vucy5sZW5ndGg7XG5cblx0ICAgIGlmICghdG9rZW5fY291bnQpIHtcblx0ICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gMDtcblx0ICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgY29uc3QgZmllbGRzID0gc2VhcmNoLm9wdGlvbnMuZmllbGRzLFxuXHQgICAgICAgICAgd2VpZ2h0cyA9IHNlYXJjaC53ZWlnaHRzLFxuXHQgICAgICAgICAgZmllbGRfY291bnQgPSBmaWVsZHMubGVuZ3RoLFxuXHQgICAgICAgICAgZ2V0QXR0ckZuID0gc2VhcmNoLmdldEF0dHJGbjtcblxuXHQgICAgaWYgKCFmaWVsZF9jb3VudCkge1xuXHQgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiAxO1xuXHQgICAgICB9O1xuXHQgICAgfVxuXHQgICAgLyoqXG5cdCAgICAgKiBDYWxjdWxhdGVzIHRoZSBzY29yZSBvZiBhbiBvYmplY3Rcblx0ICAgICAqIGFnYWluc3QgdGhlIHNlYXJjaCBxdWVyeS5cblx0ICAgICAqXG5cdCAgICAgKi9cblxuXG5cdCAgICBjb25zdCBzY29yZU9iamVjdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgaWYgKGZpZWxkX2NvdW50ID09PSAxKSB7XG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0b2tlbiwgZGF0YSkge1xuXHQgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbMF0uZmllbGQ7XG5cdCAgICAgICAgICByZXR1cm4gc2NvcmVWYWx1ZShnZXRBdHRyRm4oZGF0YSwgZmllbGQpLCB0b2tlbiwgd2VpZ2h0c1tmaWVsZF0pO1xuXHQgICAgICAgIH07XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gZnVuY3Rpb24gKHRva2VuLCBkYXRhKSB7XG5cdCAgICAgICAgdmFyIHN1bSA9IDA7IC8vIGlzIHRoZSB0b2tlbiBzcGVjaWZpYyB0byBhIGZpZWxkP1xuXG5cdCAgICAgICAgaWYgKHRva2VuLmZpZWxkKSB7XG5cdCAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldEF0dHJGbihkYXRhLCB0b2tlbi5maWVsZCk7XG5cblx0ICAgICAgICAgIGlmICghdG9rZW4ucmVnZXggJiYgdmFsdWUpIHtcblx0ICAgICAgICAgICAgc3VtICs9IDEgLyBmaWVsZF9jb3VudDtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHN1bSArPSBzY29yZVZhbHVlKHZhbHVlLCB0b2tlbiwgMSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGl0ZXJhdGUod2VpZ2h0cywgKHdlaWdodCwgZmllbGQpID0+IHtcblx0ICAgICAgICAgICAgc3VtICs9IHNjb3JlVmFsdWUoZ2V0QXR0ckZuKGRhdGEsIGZpZWxkKSwgdG9rZW4sIHdlaWdodCk7XG5cdCAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICByZXR1cm4gc3VtIC8gZmllbGRfY291bnQ7XG5cdCAgICAgIH07XG5cdCAgICB9KCk7XG5cblx0ICAgIGlmICh0b2tlbl9jb3VudCA9PT0gMSkge1xuXHQgICAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICByZXR1cm4gc2NvcmVPYmplY3QodG9rZW5zWzBdLCBkYXRhKTtcblx0ICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHNlYXJjaC5vcHRpb25zLmNvbmp1bmN0aW9uID09PSAnYW5kJykge1xuXHQgICAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICB2YXIgaSA9IDAsXG5cdCAgICAgICAgICAgIHNjb3JlLFxuXHQgICAgICAgICAgICBzdW0gPSAwO1xuXG5cdCAgICAgICAgZm9yICg7IGkgPCB0b2tlbl9jb3VudDsgaSsrKSB7XG5cdCAgICAgICAgICBzY29yZSA9IHNjb3JlT2JqZWN0KHRva2Vuc1tpXSwgZGF0YSk7XG5cdCAgICAgICAgICBpZiAoc2NvcmUgPD0gMCkgcmV0dXJuIDA7XG5cdCAgICAgICAgICBzdW0gKz0gc2NvcmU7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIHN1bSAvIHRva2VuX2NvdW50O1xuXHQgICAgICB9O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgdmFyIHN1bSA9IDA7XG5cdCAgICAgICAgaXRlcmF0ZSh0b2tlbnMsIHRva2VuID0+IHtcblx0ICAgICAgICAgIHN1bSArPSBzY29yZU9iamVjdCh0b2tlbiwgZGF0YSk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgICAgcmV0dXJuIHN1bSAvIHRva2VuX2NvdW50O1xuXHQgICAgICB9O1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8qKlxuXHQgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbXBhcmUgdHdvXG5cdCAgICogcmVzdWx0cywgZm9yIHNvcnRpbmcgcHVycG9zZXMuIElmIG5vIHNvcnRpbmcgc2hvdWxkXG5cdCAgICogYmUgcGVyZm9ybWVkLCBgbnVsbGAgd2lsbCBiZSByZXR1cm5lZC5cblx0ICAgKlxuXHQgICAqIEByZXR1cm4gZnVuY3Rpb24oYSxiKVxuXHQgICAqL1xuXHQgIGdldFNvcnRGdW5jdGlvbihxdWVyeSwgb3B0aW9ucykge1xuXHQgICAgdmFyIHNlYXJjaCA9IHRoaXMucHJlcGFyZVNlYXJjaChxdWVyeSwgb3B0aW9ucyk7XG5cdCAgICByZXR1cm4gdGhpcy5fZ2V0U29ydEZ1bmN0aW9uKHNlYXJjaCk7XG5cdCAgfVxuXG5cdCAgX2dldFNvcnRGdW5jdGlvbihzZWFyY2gpIHtcblx0ICAgIHZhciBpLCBuLCBpbXBsaWNpdF9zY29yZTtcblx0ICAgIGNvbnN0IHNlbGYgPSB0aGlzLFxuXHQgICAgICAgICAgb3B0aW9ucyA9IHNlYXJjaC5vcHRpb25zLFxuXHQgICAgICAgICAgc29ydCA9ICFzZWFyY2gucXVlcnkgJiYgb3B0aW9ucy5zb3J0X2VtcHR5ID8gb3B0aW9ucy5zb3J0X2VtcHR5IDogb3B0aW9ucy5zb3J0LFxuXHQgICAgICAgICAgc29ydF9mbGRzID0gW10sXG5cdCAgICAgICAgICBtdWx0aXBsaWVycyA9IFtdO1xuXG5cdCAgICBpZiAodHlwZW9mIHNvcnQgPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICByZXR1cm4gc29ydC5iaW5kKHRoaXMpO1xuXHQgICAgfVxuXHQgICAgLyoqXG5cdCAgICAgKiBGZXRjaGVzIHRoZSBzcGVjaWZpZWQgc29ydCBmaWVsZCB2YWx1ZVxuXHQgICAgICogZnJvbSBhIHNlYXJjaCByZXN1bHQgaXRlbS5cblx0ICAgICAqXG5cdCAgICAgKi9cblxuXG5cdCAgICBjb25zdCBnZXRfZmllbGQgPSBmdW5jdGlvbiBnZXRfZmllbGQobmFtZSwgcmVzdWx0KSB7XG5cdCAgICAgIGlmIChuYW1lID09PSAnJHNjb3JlJykgcmV0dXJuIHJlc3VsdC5zY29yZTtcblx0ICAgICAgcmV0dXJuIHNlYXJjaC5nZXRBdHRyRm4oc2VsZi5pdGVtc1tyZXN1bHQuaWRdLCBuYW1lKTtcblx0ICAgIH07IC8vIHBhcnNlIG9wdGlvbnNcblxuXG5cdCAgICBpZiAoc29ydCkge1xuXHQgICAgICBmb3IgKGkgPSAwLCBuID0gc29ydC5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0ICAgICAgICBpZiAoc2VhcmNoLnF1ZXJ5IHx8IHNvcnRbaV0uZmllbGQgIT09ICckc2NvcmUnKSB7XG5cdCAgICAgICAgICBzb3J0X2ZsZHMucHVzaChzb3J0W2ldKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0gLy8gdGhlIFwiJHNjb3JlXCIgZmllbGQgaXMgaW1wbGllZCB0byBiZSB0aGUgcHJpbWFyeVxuXHQgICAgLy8gc29ydCBmaWVsZCwgdW5sZXNzIGl0J3MgbWFudWFsbHkgc3BlY2lmaWVkXG5cblxuXHQgICAgaWYgKHNlYXJjaC5xdWVyeSkge1xuXHQgICAgICBpbXBsaWNpdF9zY29yZSA9IHRydWU7XG5cblx0ICAgICAgZm9yIChpID0gMCwgbiA9IHNvcnRfZmxkcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0ICAgICAgICBpZiAoc29ydF9mbGRzW2ldLmZpZWxkID09PSAnJHNjb3JlJykge1xuXHQgICAgICAgICAgaW1wbGljaXRfc2NvcmUgPSBmYWxzZTtcblx0ICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIGlmIChpbXBsaWNpdF9zY29yZSkge1xuXHQgICAgICAgIHNvcnRfZmxkcy51bnNoaWZ0KHtcblx0ICAgICAgICAgIGZpZWxkOiAnJHNjb3JlJyxcblx0ICAgICAgICAgIGRpcmVjdGlvbjogJ2Rlc2MnXG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGZvciAoaSA9IDAsIG4gPSBzb3J0X2ZsZHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdCAgICAgICAgaWYgKHNvcnRfZmxkc1tpXS5maWVsZCA9PT0gJyRzY29yZScpIHtcblx0ICAgICAgICAgIHNvcnRfZmxkcy5zcGxpY2UoaSwgMSk7XG5cdCAgICAgICAgICBicmVhaztcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZm9yIChpID0gMCwgbiA9IHNvcnRfZmxkcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0ICAgICAgbXVsdGlwbGllcnMucHVzaChzb3J0X2ZsZHNbaV0uZGlyZWN0aW9uID09PSAnZGVzYycgPyAtMSA6IDEpO1xuXHQgICAgfSAvLyBidWlsZCBmdW5jdGlvblxuXG5cblx0ICAgIGNvbnN0IHNvcnRfZmxkc19jb3VudCA9IHNvcnRfZmxkcy5sZW5ndGg7XG5cblx0ICAgIGlmICghc29ydF9mbGRzX2NvdW50KSB7XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfSBlbHNlIGlmIChzb3J0X2ZsZHNfY291bnQgPT09IDEpIHtcblx0ICAgICAgY29uc3Qgc29ydF9mbGQgPSBzb3J0X2ZsZHNbMF0uZmllbGQ7XG5cdCAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSBtdWx0aXBsaWVyc1swXTtcblx0ICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG5cdCAgICAgICAgcmV0dXJuIG11bHRpcGxpZXIgKiBjbXAoZ2V0X2ZpZWxkKHNvcnRfZmxkLCBhKSwgZ2V0X2ZpZWxkKHNvcnRfZmxkLCBiKSk7XG5cdCAgICAgIH07XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcblx0ICAgICAgICB2YXIgaSwgcmVzdWx0LCBmaWVsZDtcblxuXHQgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3J0X2ZsZHNfY291bnQ7IGkrKykge1xuXHQgICAgICAgICAgZmllbGQgPSBzb3J0X2ZsZHNbaV0uZmllbGQ7XG5cdCAgICAgICAgICByZXN1bHQgPSBtdWx0aXBsaWVyc1tpXSAqIGNtcChnZXRfZmllbGQoZmllbGQsIGEpLCBnZXRfZmllbGQoZmllbGQsIGIpKTtcblx0ICAgICAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIDA7XG5cdCAgICAgIH07XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgLyoqXG5cdCAgICogUGFyc2VzIGEgc2VhcmNoIHF1ZXJ5IGFuZCByZXR1cm5zIGFuIG9iamVjdFxuXHQgICAqIHdpdGggdG9rZW5zIGFuZCBmaWVsZHMgcmVhZHkgdG8gYmUgcG9wdWxhdGVkXG5cdCAgICogd2l0aCByZXN1bHRzLlxuXHQgICAqXG5cdCAgICovXG5cdCAgcHJlcGFyZVNlYXJjaChxdWVyeSwgb3B0c1VzZXIpIHtcblx0ICAgIGNvbnN0IHdlaWdodHMgPSB7fTtcblx0ICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0c1VzZXIpO1xuXHQgICAgcHJvcFRvQXJyYXkob3B0aW9ucywgJ3NvcnQnKTtcblx0ICAgIHByb3BUb0FycmF5KG9wdGlvbnMsICdzb3J0X2VtcHR5Jyk7IC8vIGNvbnZlcnQgZmllbGRzIHRvIG5ldyBmb3JtYXRcblxuXHQgICAgaWYgKG9wdGlvbnMuZmllbGRzKSB7XG5cdCAgICAgIHByb3BUb0FycmF5KG9wdGlvbnMsICdmaWVsZHMnKTtcblx0ICAgICAgY29uc3QgZmllbGRzID0gW107XG5cdCAgICAgIG9wdGlvbnMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuXHQgICAgICAgIGlmICh0eXBlb2YgZmllbGQgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgIGZpZWxkID0ge1xuXHQgICAgICAgICAgICBmaWVsZDogZmllbGQsXG5cdCAgICAgICAgICAgIHdlaWdodDogMVxuXHQgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBmaWVsZHMucHVzaChmaWVsZCk7XG5cdCAgICAgICAgd2VpZ2h0c1tmaWVsZC5maWVsZF0gPSAnd2VpZ2h0JyBpbiBmaWVsZCA/IGZpZWxkLndlaWdodCA6IDE7XG5cdCAgICAgIH0pO1xuXHQgICAgICBvcHRpb25zLmZpZWxkcyA9IGZpZWxkcztcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgb3B0aW9uczogb3B0aW9ucyxcblx0ICAgICAgcXVlcnk6IHF1ZXJ5LnRvTG93ZXJDYXNlKCkudHJpbSgpLFxuXHQgICAgICB0b2tlbnM6IHRoaXMudG9rZW5pemUocXVlcnksIG9wdGlvbnMucmVzcGVjdF93b3JkX2JvdW5kYXJpZXMsIHdlaWdodHMpLFxuXHQgICAgICB0b3RhbDogMCxcblx0ICAgICAgaXRlbXM6IFtdLFxuXHQgICAgICB3ZWlnaHRzOiB3ZWlnaHRzLFxuXHQgICAgICBnZXRBdHRyRm46IG9wdGlvbnMubmVzdGluZyA/IGdldEF0dHJOZXN0aW5nIDogZ2V0QXR0clxuXHQgICAgfTtcblx0ICB9XG5cblx0ICAvKipcblx0ICAgKiBTZWFyY2hlcyB0aHJvdWdoIGFsbCBpdGVtcyBhbmQgcmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiBtYXRjaGVzLlxuXHQgICAqXG5cdCAgICovXG5cdCAgc2VhcmNoKHF1ZXJ5LCBvcHRpb25zKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXMsXG5cdCAgICAgICAgc2NvcmUsXG5cdCAgICAgICAgc2VhcmNoO1xuXHQgICAgc2VhcmNoID0gdGhpcy5wcmVwYXJlU2VhcmNoKHF1ZXJ5LCBvcHRpb25zKTtcblx0ICAgIG9wdGlvbnMgPSBzZWFyY2gub3B0aW9ucztcblx0ICAgIHF1ZXJ5ID0gc2VhcmNoLnF1ZXJ5OyAvLyBnZW5lcmF0ZSByZXN1bHQgc2NvcmluZyBmdW5jdGlvblxuXG5cdCAgICBjb25zdCBmbl9zY29yZSA9IG9wdGlvbnMuc2NvcmUgfHwgc2VsZi5fZ2V0U2NvcmVGdW5jdGlvbihzZWFyY2gpOyAvLyBwZXJmb3JtIHNlYXJjaCBhbmQgc29ydFxuXG5cblx0ICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcblx0ICAgICAgaXRlcmF0ZShzZWxmLml0ZW1zLCAoaXRlbSwgaWQpID0+IHtcblx0ICAgICAgICBzY29yZSA9IGZuX3Njb3JlKGl0ZW0pO1xuXG5cdCAgICAgICAgaWYgKG9wdGlvbnMuZmlsdGVyID09PSBmYWxzZSB8fCBzY29yZSA+IDApIHtcblx0ICAgICAgICAgIHNlYXJjaC5pdGVtcy5wdXNoKHtcblx0ICAgICAgICAgICAgJ3Njb3JlJzogc2NvcmUsXG5cdCAgICAgICAgICAgICdpZCc6IGlkXG5cdCAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaXRlcmF0ZShzZWxmLml0ZW1zLCAoXywgaWQpID0+IHtcblx0ICAgICAgICBzZWFyY2guaXRlbXMucHVzaCh7XG5cdCAgICAgICAgICAnc2NvcmUnOiAxLFxuXHQgICAgICAgICAgJ2lkJzogaWRcblx0ICAgICAgICB9KTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cblx0ICAgIGNvbnN0IGZuX3NvcnQgPSBzZWxmLl9nZXRTb3J0RnVuY3Rpb24oc2VhcmNoKTtcblxuXHQgICAgaWYgKGZuX3NvcnQpIHNlYXJjaC5pdGVtcy5zb3J0KGZuX3NvcnQpOyAvLyBhcHBseSBsaW1pdHNcblxuXHQgICAgc2VhcmNoLnRvdGFsID0gc2VhcmNoLml0ZW1zLmxlbmd0aDtcblxuXHQgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxpbWl0ID09PSAnbnVtYmVyJykge1xuXHQgICAgICBzZWFyY2guaXRlbXMgPSBzZWFyY2guaXRlbXMuc2xpY2UoMCwgb3B0aW9ucy5saW1pdCk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBzZWFyY2g7XG5cdCAgfVxuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgZG9tIGVsZW1lbnQgZnJvbSBlaXRoZXIgYSBkb20gcXVlcnkgc3RyaW5nLCBqUXVlcnkgb2JqZWN0LCBhIGRvbSBlbGVtZW50IG9yIGh0bWwgc3RyaW5nXG5cdCAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NDE0My9jcmVhdGluZy1hLW5ldy1kb20tZWxlbWVudC1mcm9tLWFuLWh0bWwtc3RyaW5nLXVzaW5nLWJ1aWx0LWluLWRvbS1tZXRob2RzLW9yLXByby8zNTM4NTUxOCMzNTM4NTUxOFxuXHQgKlxuXHQgKiBwYXJhbSBxdWVyeSBzaG91bGQgYmUge31cblx0ICovXG5cblx0Y29uc3QgZ2V0RG9tID0gcXVlcnkgPT4ge1xuXHQgIGlmIChxdWVyeS5qcXVlcnkpIHtcblx0ICAgIHJldHVybiBxdWVyeVswXTtcblx0ICB9XG5cblx0ICBpZiAocXVlcnkgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHQgICAgcmV0dXJuIHF1ZXJ5O1xuXHQgIH1cblxuXHQgIGlmIChpc0h0bWxTdHJpbmcocXVlcnkpKSB7XG5cdCAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdCAgICBkaXYuaW5uZXJIVE1MID0gcXVlcnkudHJpbSgpOyAvLyBOZXZlciByZXR1cm4gYSB0ZXh0IG5vZGUgb2Ygd2hpdGVzcGFjZSBhcyB0aGUgcmVzdWx0XG5cblx0ICAgIHJldHVybiBkaXYuZmlyc3RDaGlsZDtcblx0ICB9XG5cblx0ICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG5cdH07XG5cdGNvbnN0IGlzSHRtbFN0cmluZyA9IGFyZyA9PiB7XG5cdCAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGFyZy5pbmRleE9mKCc8JykgPiAtMSkge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRjb25zdCBlc2NhcGVRdWVyeSA9IHF1ZXJ5ID0+IHtcblx0ICByZXR1cm4gcXVlcnkucmVwbGFjZSgvWydcIlxcXFxdL2csICdcXFxcJCYnKTtcblx0fTtcblx0LyoqXG5cdCAqIERpc3BhdGNoIGFuIGV2ZW50XG5cdCAqXG5cdCAqL1xuXG5cdGNvbnN0IHRyaWdnZXJFdmVudCA9IChkb21fZWwsIGV2ZW50X25hbWUpID0+IHtcblx0ICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuXHQgIGV2ZW50LmluaXRFdmVudChldmVudF9uYW1lLCB0cnVlLCBmYWxzZSk7XG5cdCAgZG9tX2VsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHR9O1xuXHQvKipcblx0ICogQXBwbHkgQ1NTIHJ1bGVzIHRvIGEgZG9tIGVsZW1lbnRcblx0ICpcblx0ICovXG5cblx0Y29uc3QgYXBwbHlDU1MgPSAoZG9tX2VsLCBjc3MpID0+IHtcblx0ICBPYmplY3QuYXNzaWduKGRvbV9lbC5zdHlsZSwgY3NzKTtcblx0fTtcblx0LyoqXG5cdCAqIEFkZCBjc3MgY2xhc3Nlc1xuXHQgKlxuXHQgKi9cblxuXHRjb25zdCBhZGRDbGFzc2VzID0gKGVsbXRzLCAuLi5jbGFzc2VzKSA9PiB7XG5cdCAgdmFyIG5vcm1fY2xhc3NlcyA9IGNsYXNzZXNBcnJheShjbGFzc2VzKTtcblx0ICBlbG10cyA9IGNhc3RBc0FycmF5KGVsbXRzKTtcblx0ICBlbG10cy5tYXAoZWwgPT4ge1xuXHQgICAgbm9ybV9jbGFzc2VzLm1hcChjbHMgPT4ge1xuXHQgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG5cdCAgICB9KTtcblx0ICB9KTtcblx0fTtcblx0LyoqXG5cdCAqIFJlbW92ZSBjc3MgY2xhc3Nlc1xuXHQgKlxuXHQgKi9cblxuXHRjb25zdCByZW1vdmVDbGFzc2VzID0gKGVsbXRzLCAuLi5jbGFzc2VzKSA9PiB7XG5cdCAgdmFyIG5vcm1fY2xhc3NlcyA9IGNsYXNzZXNBcnJheShjbGFzc2VzKTtcblx0ICBlbG10cyA9IGNhc3RBc0FycmF5KGVsbXRzKTtcblx0ICBlbG10cy5tYXAoZWwgPT4ge1xuXHQgICAgbm9ybV9jbGFzc2VzLm1hcChjbHMgPT4ge1xuXHQgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG5cdCAgICB9KTtcblx0ICB9KTtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybiBhcmd1bWVudHNcblx0ICpcblx0ICovXG5cblx0Y29uc3QgY2xhc3Nlc0FycmF5ID0gYXJncyA9PiB7XG5cdCAgdmFyIGNsYXNzZXMgPSBbXTtcblx0ICBpdGVyYXRlKGFyZ3MsIF9jbGFzc2VzID0+IHtcblx0ICAgIGlmICh0eXBlb2YgX2NsYXNzZXMgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgIF9jbGFzc2VzID0gX2NsYXNzZXMudHJpbSgpLnNwbGl0KC9bXFwxMVxcMTJcXDE0XFwxNVxcNDBdLyk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChBcnJheS5pc0FycmF5KF9jbGFzc2VzKSkge1xuXHQgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoX2NsYXNzZXMpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHQgIHJldHVybiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhbiBhcnJheSBmcm9tIGFyZyBpZiBpdCdzIG5vdCBhbHJlYWR5IGFuIGFycmF5XG5cdCAqXG5cdCAqL1xuXG5cdGNvbnN0IGNhc3RBc0FycmF5ID0gYXJnID0+IHtcblx0ICBpZiAoIUFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHQgICAgYXJnID0gW2FyZ107XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGFyZztcblx0fTtcblx0LyoqXG5cdCAqIEdldCB0aGUgY2xvc2VzdCBub2RlIHRvIHRoZSBldnQudGFyZ2V0IG1hdGNoaW5nIHRoZSBzZWxlY3RvclxuXHQgKiBTdG9wcyBhdCB3cmFwcGVyXG5cdCAqXG5cdCAqL1xuXG5cdGNvbnN0IHBhcmVudE1hdGNoID0gKHRhcmdldCwgc2VsZWN0b3IsIHdyYXBwZXIpID0+IHtcblx0ICBpZiAod3JhcHBlciAmJiAhd3JhcHBlci5jb250YWlucyh0YXJnZXQpKSB7XG5cdCAgICByZXR1cm47XG5cdCAgfVxuXG5cdCAgd2hpbGUgKHRhcmdldCAmJiB0YXJnZXQubWF0Y2hlcykge1xuXHQgICAgaWYgKHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuXHQgICAgICByZXR1cm4gdGFyZ2V0O1xuXHQgICAgfVxuXG5cdCAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcblx0ICB9XG5cdH07XG5cdC8qKlxuXHQgKiBHZXQgdGhlIGZpcnN0IG9yIGxhc3QgaXRlbSBmcm9tIGFuIGFycmF5XG5cdCAqXG5cdCAqID4gMCAtIHJpZ2h0IChsYXN0KVxuXHQgKiA8PSAwIC0gbGVmdCAoZmlyc3QpXG5cdCAqXG5cdCAqL1xuXG5cdGNvbnN0IGdldFRhaWwgPSAobGlzdCwgZGlyZWN0aW9uID0gMCkgPT4ge1xuXHQgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG5cdCAgICByZXR1cm4gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdO1xuXHQgIH1cblxuXHQgIHJldHVybiBsaXN0WzBdO1xuXHR9O1xuXHQvKipcblx0ICogUmV0dXJuIHRydWUgaWYgYW4gb2JqZWN0IGlzIGVtcHR5XG5cdCAqXG5cdCAqL1xuXG5cdGNvbnN0IGlzRW1wdHlPYmplY3QgPSBvYmogPT4ge1xuXHQgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcblx0fTtcblx0LyoqXG5cdCAqIEdldCB0aGUgaW5kZXggb2YgYW4gZWxlbWVudCBhbW9uZ3N0IHNpYmxpbmcgbm9kZXMgb2YgdGhlIHNhbWUgdHlwZVxuXHQgKlxuXHQgKi9cblxuXHRjb25zdCBub2RlSW5kZXggPSAoZWwsIGFtb25nc3QpID0+IHtcblx0ICBpZiAoIWVsKSByZXR1cm4gLTE7XG5cdCAgYW1vbmdzdCA9IGFtb25nc3QgfHwgZWwubm9kZU5hbWU7XG5cdCAgdmFyIGkgPSAwO1xuXG5cdCAgd2hpbGUgKGVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuXHQgICAgaWYgKGVsLm1hdGNoZXMoYW1vbmdzdCkpIHtcblx0ICAgICAgaSsrO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiBpO1xuXHR9O1xuXHQvKipcblx0ICogU2V0IGF0dHJpYnV0ZXMgb2YgYW4gZWxlbWVudFxuXHQgKlxuXHQgKi9cblxuXHRjb25zdCBzZXRBdHRyID0gKGVsLCBhdHRycykgPT4ge1xuXHQgIGl0ZXJhdGUoYXR0cnMsICh2YWwsIGF0dHIpID0+IHtcblx0ICAgIGlmICh2YWwgPT0gbnVsbCkge1xuXHQgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgJycgKyB2YWwpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXHQvKipcblx0ICogUmVwbGFjZSBhIG5vZGVcblx0ICovXG5cblx0Y29uc3QgcmVwbGFjZU5vZGUgPSAoZXhpc3RpbmcsIHJlcGxhY2VtZW50KSA9PiB7XG5cdCAgaWYgKGV4aXN0aW5nLnBhcmVudE5vZGUpIGV4aXN0aW5nLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlcGxhY2VtZW50LCBleGlzdGluZyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIGhpZ2hsaWdodCB2MyB8IE1JVCBsaWNlbnNlIHwgSm9oYW5uIEJ1cmthcmQgPGpiQGVhaW8uY29tPlxuXHQgKiBIaWdobGlnaHRzIGFyYml0cmFyeSB0ZXJtcyBpbiBhIG5vZGUuXG5cdCAqXG5cdCAqIC0gTW9kaWZpZWQgYnkgTWFyc2hhbCA8YmVhdGdhdGVzQGdtYWlsLmNvbT4gMjAxMS02LTI0IChhZGRlZCByZWdleClcblx0ICogLSBNb2RpZmllZCBieSBCcmlhbiBSZWF2aXMgPGJyaWFuQHRoaXJkcm91dGUuY29tPiAyMDEyLTgtMjcgKGNsZWFudXApXG5cdCAqL1xuXHRjb25zdCBoaWdobGlnaHQgPSAoZWxlbWVudCwgcmVnZXgpID0+IHtcblx0ICBpZiAocmVnZXggPT09IG51bGwpIHJldHVybjsgLy8gY29udmV0IHN0cmluZyB0byByZWdleFxuXG5cdCAgaWYgKHR5cGVvZiByZWdleCA9PT0gJ3N0cmluZycpIHtcblx0ICAgIGlmICghcmVnZXgubGVuZ3RoKSByZXR1cm47XG5cdCAgICByZWdleCA9IG5ldyBSZWdFeHAocmVnZXgsICdpJyk7XG5cdCAgfSAvLyBXcmFwIG1hdGNoaW5nIHBhcnQgb2YgdGV4dCBub2RlIHdpdGggaGlnaGxpZ2h0aW5nIDxzcGFuPiwgZS5nLlxuXHQgIC8vIFNvY2NlciAgLT4gIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+U29jPC9zcGFuPmNlciAgZm9yIHJlZ2V4ID0gL3NvYy9pXG5cblxuXHQgIGNvbnN0IGhpZ2hsaWdodFRleHQgPSBub2RlID0+IHtcblx0ICAgIHZhciBtYXRjaCA9IG5vZGUuZGF0YS5tYXRjaChyZWdleCk7XG5cblx0ICAgIGlmIChtYXRjaCAmJiBub2RlLmRhdGEubGVuZ3RoID4gMCkge1xuXHQgICAgICB2YXIgc3Bhbm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdCAgICAgIHNwYW5ub2RlLmNsYXNzTmFtZSA9ICdoaWdobGlnaHQnO1xuXHQgICAgICB2YXIgbWlkZGxlYml0ID0gbm9kZS5zcGxpdFRleHQobWF0Y2guaW5kZXgpO1xuXHQgICAgICBtaWRkbGViaXQuc3BsaXRUZXh0KG1hdGNoWzBdLmxlbmd0aCk7XG5cdCAgICAgIHZhciBtaWRkbGVjbG9uZSA9IG1pZGRsZWJpdC5jbG9uZU5vZGUodHJ1ZSk7XG5cdCAgICAgIHNwYW5ub2RlLmFwcGVuZENoaWxkKG1pZGRsZWNsb25lKTtcblx0ICAgICAgcmVwbGFjZU5vZGUobWlkZGxlYml0LCBzcGFubm9kZSk7XG5cdCAgICAgIHJldHVybiAxO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gMDtcblx0ICB9OyAvLyBSZWN1cnNlIGVsZW1lbnQgbm9kZSwgbG9va2luZyBmb3IgY2hpbGQgdGV4dCBub2RlcyB0byBoaWdobGlnaHQsIHVubGVzcyBlbGVtZW50XG5cdCAgLy8gaXMgY2hpbGRsZXNzLCA8c2NyaXB0PiwgPHN0eWxlPiwgb3IgYWxyZWFkeSBoaWdobGlnaHRlZDogPHNwYW4gY2xhc3M9XCJoaWdodGxpZ2h0XCI+XG5cblxuXHQgIGNvbnN0IGhpZ2hsaWdodENoaWxkcmVuID0gbm9kZSA9PiB7XG5cdCAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBub2RlLmNoaWxkTm9kZXMgJiYgIS8oc2NyaXB0fHN0eWxlKS9pLnRlc3Qobm9kZS50YWdOYW1lKSAmJiAobm9kZS5jbGFzc05hbWUgIT09ICdoaWdobGlnaHQnIHx8IG5vZGUudGFnTmFtZSAhPT0gJ1NQQU4nKSkge1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7ICsraSkge1xuXHQgICAgICAgIGkgKz0gaGlnaGxpZ2h0UmVjdXJzaXZlKG5vZGUuY2hpbGROb2Rlc1tpXSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgY29uc3QgaGlnaGxpZ2h0UmVjdXJzaXZlID0gbm9kZSA9PiB7XG5cdCAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuXHQgICAgICByZXR1cm4gaGlnaGxpZ2h0VGV4dChub2RlKTtcblx0ICAgIH1cblxuXHQgICAgaGlnaGxpZ2h0Q2hpbGRyZW4obm9kZSk7XG5cdCAgICByZXR1cm4gMDtcblx0ICB9O1xuXG5cdCAgaGlnaGxpZ2h0UmVjdXJzaXZlKGVsZW1lbnQpO1xuXHR9O1xuXHQvKipcblx0ICogcmVtb3ZlSGlnaGxpZ2h0IGZuIGNvcGllZCBmcm9tIGhpZ2hsaWdodCB2NSBhbmRcblx0ICogZWRpdGVkIHRvIHJlbW92ZSB3aXRoKCksIHBhc3MganMgc3RyaWN0IG1vZGUsIGFuZCB1c2Ugd2l0aG91dCBqcXVlcnlcblx0ICovXG5cblx0Y29uc3QgcmVtb3ZlSGlnaGxpZ2h0ID0gZWwgPT4ge1xuXHQgIHZhciBlbGVtZW50cyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuLmhpZ2hsaWdodFwiKTtcblx0ICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcblx0ICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuXHQgICAgcGFyZW50LnJlcGxhY2VDaGlsZChlbC5maXJzdENoaWxkLCBlbCk7XG5cdCAgICBwYXJlbnQubm9ybWFsaXplKCk7XG5cdCAgfSk7XG5cdH07XG5cblx0Y29uc3QgS0VZX0EgPSA2NTtcblx0Y29uc3QgS0VZX1JFVFVSTiA9IDEzO1xuXHRjb25zdCBLRVlfRVNDID0gMjc7XG5cdGNvbnN0IEtFWV9MRUZUID0gMzc7XG5cdGNvbnN0IEtFWV9VUCA9IDM4O1xuXHRjb25zdCBLRVlfUklHSFQgPSAzOTtcblx0Y29uc3QgS0VZX0RPV04gPSA0MDtcblx0Y29uc3QgS0VZX0JBQ0tTUEFDRSA9IDg7XG5cdGNvbnN0IEtFWV9ERUxFVEUgPSA0Njtcblx0Y29uc3QgS0VZX1RBQiA9IDk7XG5cdGNvbnN0IElTX01BQyA9IHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiAvTWFjLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXHRjb25zdCBLRVlfU0hPUlRDVVQgPSBJU19NQUMgPyAnbWV0YUtleScgOiAnY3RybEtleSc7IC8vIGN0cmwga2V5IG9yIGFwcGxlIGtleSBmb3IgbWFcblxuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdCAgb3B0aW9uczogW10sXG5cdCAgb3B0Z3JvdXBzOiBbXSxcblx0ICBwbHVnaW5zOiBbXSxcblx0ICBkZWxpbWl0ZXI6ICcsJyxcblx0ICBzcGxpdE9uOiBudWxsLFxuXHQgIC8vIHJlZ2V4cCBvciBzdHJpbmcgZm9yIHNwbGl0dGluZyB1cCB2YWx1ZXMgZnJvbSBhIHBhc3RlIGNvbW1hbmRcblx0ICBwZXJzaXN0OiB0cnVlLFxuXHQgIGRpYWNyaXRpY3M6IHRydWUsXG5cdCAgY3JlYXRlOiBudWxsLFxuXHQgIGNyZWF0ZU9uQmx1cjogZmFsc2UsXG5cdCAgY3JlYXRlRmlsdGVyOiBudWxsLFxuXHQgIGhpZ2hsaWdodDogdHJ1ZSxcblx0ICBvcGVuT25Gb2N1czogdHJ1ZSxcblx0ICBzaG91bGRPcGVuOiBudWxsLFxuXHQgIG1heE9wdGlvbnM6IDUwLFxuXHQgIG1heEl0ZW1zOiBudWxsLFxuXHQgIGhpZGVTZWxlY3RlZDogbnVsbCxcblx0ICBkdXBsaWNhdGVzOiBmYWxzZSxcblx0ICBhZGRQcmVjZWRlbmNlOiBmYWxzZSxcblx0ICBzZWxlY3RPblRhYjogZmFsc2UsXG5cdCAgcHJlbG9hZDogbnVsbCxcblx0ICBhbGxvd0VtcHR5T3B0aW9uOiBmYWxzZSxcblx0ICAvL2Nsb3NlQWZ0ZXJTZWxlY3Q6IGZhbHNlLFxuXHQgIGxvYWRUaHJvdHRsZTogMzAwLFxuXHQgIGxvYWRpbmdDbGFzczogJ2xvYWRpbmcnLFxuXHQgIGRhdGFBdHRyOiBudWxsLFxuXHQgIC8vJ2RhdGEtZGF0YScsXG5cdCAgb3B0Z3JvdXBGaWVsZDogJ29wdGdyb3VwJyxcblx0ICB2YWx1ZUZpZWxkOiAndmFsdWUnLFxuXHQgIGxhYmVsRmllbGQ6ICd0ZXh0Jyxcblx0ICBkaXNhYmxlZEZpZWxkOiAnZGlzYWJsZWQnLFxuXHQgIG9wdGdyb3VwTGFiZWxGaWVsZDogJ2xhYmVsJyxcblx0ICBvcHRncm91cFZhbHVlRmllbGQ6ICd2YWx1ZScsXG5cdCAgbG9ja09wdGdyb3VwT3JkZXI6IGZhbHNlLFxuXHQgIHNvcnRGaWVsZDogJyRvcmRlcicsXG5cdCAgc2VhcmNoRmllbGQ6IFsndGV4dCddLFxuXHQgIHNlYXJjaENvbmp1bmN0aW9uOiAnYW5kJyxcblx0ICBtb2RlOiBudWxsLFxuXHQgIHdyYXBwZXJDbGFzczogJ3RzLXdyYXBwZXInLFxuXHQgIGNvbnRyb2xDbGFzczogJ3RzLWNvbnRyb2wnLFxuXHQgIGRyb3Bkb3duQ2xhc3M6ICd0cy1kcm9wZG93bicsXG5cdCAgZHJvcGRvd25Db250ZW50Q2xhc3M6ICd0cy1kcm9wZG93bi1jb250ZW50Jyxcblx0ICBpdGVtQ2xhc3M6ICdpdGVtJyxcblx0ICBvcHRpb25DbGFzczogJ29wdGlvbicsXG5cdCAgZHJvcGRvd25QYXJlbnQ6IG51bGwsXG5cdCAgY29udHJvbElucHV0OiAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgc2l6ZT1cIjFcIiAvPicsXG5cdCAgY29weUNsYXNzZXNUb0Ryb3Bkb3duOiBmYWxzZSxcblx0ICBwbGFjZWhvbGRlcjogbnVsbCxcblx0ICBoaWRlUGxhY2Vob2xkZXI6IG51bGwsXG5cdCAgc2hvdWxkTG9hZDogZnVuY3Rpb24gKHF1ZXJ5KSB7XG5cdCAgICByZXR1cm4gcXVlcnkubGVuZ3RoID4gMDtcblx0ICB9LFxuXG5cdCAgLypcblx0ICBsb2FkICAgICAgICAgICAgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKHF1ZXJ5LCBjYWxsYmFjaykgeyAuLi4gfVxuXHQgIHNjb3JlICAgICAgICAgICAgICAgIDogbnVsbCwgLy8gZnVuY3Rpb24oc2VhcmNoKSB7IC4uLiB9XG5cdCAgb25Jbml0aWFsaXplICAgICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbigpIHsgLi4uIH1cblx0ICBvbkNoYW5nZSAgICAgICAgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKHZhbHVlKSB7IC4uLiB9XG5cdCAgb25JdGVtQWRkICAgICAgICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbih2YWx1ZSwgJGl0ZW0pIHsgLi4uIH1cblx0ICBvbkl0ZW1SZW1vdmUgICAgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKHZhbHVlKSB7IC4uLiB9XG5cdCAgb25DbGVhciAgICAgICAgICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbigpIHsgLi4uIH1cblx0ICBvbk9wdGlvbkFkZCAgICAgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKHZhbHVlLCBkYXRhKSB7IC4uLiB9XG5cdCAgb25PcHRpb25SZW1vdmUgICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbih2YWx1ZSkgeyAuLi4gfVxuXHQgIG9uT3B0aW9uQ2xlYXIgICAgICAgIDogbnVsbCwgLy8gZnVuY3Rpb24oKSB7IC4uLiB9XG5cdCAgb25PcHRpb25Hcm91cEFkZCAgICAgOiBudWxsLCAvLyBmdW5jdGlvbihpZCwgZGF0YSkgeyAuLi4gfVxuXHQgIG9uT3B0aW9uR3JvdXBSZW1vdmUgIDogbnVsbCwgLy8gZnVuY3Rpb24oaWQpIHsgLi4uIH1cblx0ICBvbk9wdGlvbkdyb3VwQ2xlYXIgICA6IG51bGwsIC8vIGZ1bmN0aW9uKCkgeyAuLi4gfVxuXHQgIG9uRHJvcGRvd25PcGVuICAgICAgIDogbnVsbCwgLy8gZnVuY3Rpb24oZHJvcGRvd24pIHsgLi4uIH1cblx0ICBvbkRyb3Bkb3duQ2xvc2UgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKGRyb3Bkb3duKSB7IC4uLiB9XG5cdCAgb25UeXBlICAgICAgICAgICAgICAgOiBudWxsLCAvLyBmdW5jdGlvbihzdHIpIHsgLi4uIH1cblx0ICBvbkRlbGV0ZSAgICAgICAgICAgICA6IG51bGwsIC8vIGZ1bmN0aW9uKHZhbHVlcykgeyAuLi4gfVxuXHQgICovXG5cdCAgcmVuZGVyOiB7XG5cdCAgICAvKlxuXHQgICAgaXRlbTogbnVsbCxcblx0ICAgIG9wdGdyb3VwOiBudWxsLFxuXHQgICAgb3B0Z3JvdXBfaGVhZGVyOiBudWxsLFxuXHQgICAgb3B0aW9uOiBudWxsLFxuXHQgICAgb3B0aW9uX2NyZWF0ZTogbnVsbFxuXHQgICAgKi9cblx0ICB9XG5cdH07XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgc2NhbGFyIHRvIGl0cyBiZXN0IHN0cmluZyByZXByZXNlbnRhdGlvblxuXHQgKiBmb3IgaGFzaCBrZXlzIGFuZCBIVE1MIGF0dHJpYnV0ZSB2YWx1ZXMuXG5cdCAqXG5cdCAqIFRyYW5zZm9ybWF0aW9uczpcblx0ICogICAnc3RyJyAgICAgLT4gJ3N0cidcblx0ICogICBudWxsICAgICAgLT4gJydcblx0ICogICB1bmRlZmluZWQgLT4gJydcblx0ICogICB0cnVlICAgICAgLT4gJzEnXG5cdCAqICAgZmFsc2UgICAgIC0+ICcwJ1xuXHQgKiAgIDAgICAgICAgICAtPiAnMCdcblx0ICogICAxICAgICAgICAgLT4gJzEnXG5cdCAqXG5cdCAqL1xuXHRjb25zdCBoYXNoX2tleSA9IHZhbHVlID0+IHtcblx0ICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdCAgcmV0dXJuIGdldF9oYXNoKHZhbHVlKTtcblx0fTtcblx0Y29uc3QgZ2V0X2hhc2ggPSB2YWx1ZSA9PiB7XG5cdCAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gdmFsdWUgPyAnMScgOiAnMCc7XG5cdCAgcmV0dXJuIHZhbHVlICsgJyc7XG5cdH07XG5cdC8qKlxuXHQgKiBFc2NhcGVzIGEgc3RyaW5nIGZvciB1c2Ugd2l0aGluIEhUTUwuXG5cdCAqXG5cdCAqL1xuXG5cdGNvbnN0IGVzY2FwZV9odG1sID0gc3RyID0+IHtcblx0ICByZXR1cm4gKHN0ciArICcnKS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXHR9O1xuXHQvKipcblx0ICogRGVib3VuY2UgdGhlIHVzZXIgcHJvdmlkZWQgbG9hZCBmdW5jdGlvblxuXHQgKlxuXHQgKi9cblxuXHRjb25zdCBsb2FkRGVib3VuY2UgPSAoZm4sIGRlbGF5KSA9PiB7XG5cdCAgdmFyIHRpbWVvdXQ7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgY2FsbGJhY2spIHtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblxuXHQgICAgaWYgKHRpbWVvdXQpIHtcblx0ICAgICAgc2VsZi5sb2FkaW5nID0gTWF0aC5tYXgoc2VsZi5sb2FkaW5nIC0gMSwgMCk7XG5cdCAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0ICAgIH1cblxuXHQgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICB0aW1lb3V0ID0gbnVsbDtcblx0ICAgICAgc2VsZi5sb2FkZWRTZWFyY2hlc1t2YWx1ZV0gPSB0cnVlO1xuXHQgICAgICBmbi5jYWxsKHNlbGYsIHZhbHVlLCBjYWxsYmFjayk7XG5cdCAgICB9LCBkZWxheSk7XG5cdCAgfTtcblx0fTtcblx0LyoqXG5cdCAqIERlYm91bmNlIGFsbCBmaXJlZCBldmVudHMgdHlwZXMgbGlzdGVkIGluIGB0eXBlc2Bcblx0ICogd2hpbGUgZXhlY3V0aW5nIHRoZSBwcm92aWRlZCBgZm5gLlxuXHQgKlxuXHQgKi9cblxuXHRjb25zdCBkZWJvdW5jZV9ldmVudHMgPSAoc2VsZiwgdHlwZXMsIGZuKSA9PiB7XG5cdCAgdmFyIHR5cGU7XG5cdCAgdmFyIHRyaWdnZXIgPSBzZWxmLnRyaWdnZXI7XG5cdCAgdmFyIGV2ZW50X2FyZ3MgPSB7fTsgLy8gb3ZlcnJpZGUgdHJpZ2dlciBtZXRob2RcblxuXHQgIHNlbGYudHJpZ2dlciA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciB0eXBlID0gYXJndW1lbnRzWzBdO1xuXG5cdCAgICBpZiAodHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcblx0ICAgICAgZXZlbnRfYXJnc1t0eXBlXSA9IGFyZ3VtZW50cztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiB0cmlnZ2VyLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG5cdCAgICB9XG5cdCAgfTsgLy8gaW52b2tlIHByb3ZpZGVkIGZ1bmN0aW9uXG5cblxuXHQgIGZuLmFwcGx5KHNlbGYsIFtdKTtcblx0ICBzZWxmLnRyaWdnZXIgPSB0cmlnZ2VyOyAvLyB0cmlnZ2VyIHF1ZXVlZCBldmVudHNcblxuXHQgIGZvciAodHlwZSBvZiB0eXBlcykge1xuXHQgICAgaWYgKHR5cGUgaW4gZXZlbnRfYXJncykge1xuXHQgICAgICB0cmlnZ2VyLmFwcGx5KHNlbGYsIGV2ZW50X2FyZ3NbdHlwZV0pO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblx0LyoqXG5cdCAqIERldGVybWluZXMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIHdpdGhpbiBhIHRleHQgaW5wdXQgY29udHJvbC5cblx0ICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZzpcblx0ICogICAtIHN0YXJ0XG5cdCAqICAgLSBsZW5ndGhcblx0ICpcblx0ICovXG5cblx0Y29uc3QgZ2V0U2VsZWN0aW9uID0gaW5wdXQgPT4ge1xuXHQgIHJldHVybiB7XG5cdCAgICBzdGFydDogaW5wdXQuc2VsZWN0aW9uU3RhcnQgfHwgMCxcblx0ICAgIGxlbmd0aDogKGlucHV0LnNlbGVjdGlvbkVuZCB8fCAwKSAtIChpbnB1dC5zZWxlY3Rpb25TdGFydCB8fCAwKVxuXHQgIH07XG5cdH07XG5cdC8qKlxuXHQgKiBQcmV2ZW50IGRlZmF1bHRcblx0ICpcblx0ICovXG5cblx0Y29uc3QgcHJldmVudERlZmF1bHQgPSAoZXZ0LCBzdG9wID0gZmFsc2UpID0+IHtcblx0ICBpZiAoZXZ0KSB7XG5cdCAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuXHQgICAgaWYgKHN0b3ApIHtcblx0ICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblx0LyoqXG5cdCAqIFByZXZlbnQgZGVmYXVsdFxuXHQgKlxuXHQgKi9cblxuXHRjb25zdCBhZGRFdmVudCA9ICh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSA9PiB7XG5cdCAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuXHR9O1xuXHQvKipcblx0ICogUmV0dXJuIHRydWUgaWYgdGhlIHJlcXVlc3RlZCBrZXkgaXMgZG93blxuXHQgKiBXaWxsIHJldHVybiBmYWxzZSBpZiBtb3JlIHRoYW4gb25lIGNvbnRyb2wgY2hhcmFjdGVyIGlzIHByZXNzZWQgKCB3aGVuIFtjdHJsK3NoaWZ0K2FdICE9IFtjdHJsK2FdIClcblx0ICogVGhlIGN1cnJlbnQgZXZ0IG1heSBub3QgYWx3YXlzIHNldCAoIGVnIGNhbGxpbmcgYWR2YW5jZVNlbGVjdGlvbigpIClcblx0ICpcblx0ICovXG5cblx0Y29uc3QgaXNLZXlEb3duID0gKGtleV9uYW1lLCBldnQpID0+IHtcblx0ICBpZiAoIWV2dCkge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblxuXHQgIGlmICghZXZ0W2tleV9uYW1lXSkge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblxuXHQgIHZhciBjb3VudCA9IChldnQuYWx0S2V5ID8gMSA6IDApICsgKGV2dC5jdHJsS2V5ID8gMSA6IDApICsgKGV2dC5zaGlmdEtleSA/IDEgOiAwKSArIChldnQubWV0YUtleSA/IDEgOiAwKTtcblxuXHQgIGlmIChjb3VudCA9PT0gMSkge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGZhbHNlO1xuXHR9O1xuXHQvKipcblx0ICogR2V0IHRoZSBpZCBvZiBhbiBlbGVtZW50XG5cdCAqIElmIHRoZSBpZCBhdHRyaWJ1dGUgaXMgbm90IHNldCwgc2V0IHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgZ2l2ZW4gaWRcblx0ICpcblx0ICovXG5cblx0Y29uc3QgZ2V0SWQgPSAoZWwsIGlkKSA9PiB7XG5cdCAgY29uc3QgZXhpc3RpbmdfaWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG5cblx0ICBpZiAoZXhpc3RpbmdfaWQpIHtcblx0ICAgIHJldHVybiBleGlzdGluZ19pZDtcblx0ICB9XG5cblx0ICBlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuXHQgIHJldHVybiBpZDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgYSBzdHJpbmcgd2l0aCBiYWNrc2xhc2hlcyBhZGRlZCBiZWZvcmUgY2hhcmFjdGVycyB0aGF0IG5lZWQgdG8gYmUgZXNjYXBlZC5cblx0ICovXG5cblx0Y29uc3QgYWRkU2xhc2hlcyA9IHN0ciA9PiB7XG5cdCAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFxcXFwiJ10vZywgJ1xcXFwkJicpO1xuXHR9O1xuXHQvKipcblx0ICpcblx0ICovXG5cblx0Y29uc3QgYXBwZW5kID0gKHBhcmVudCwgbm9kZSkgPT4ge1xuXHQgIGlmIChub2RlKSBwYXJlbnQuYXBwZW5kKG5vZGUpO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGdldFNldHRpbmdzKGlucHV0LCBzZXR0aW5nc191c2VyKSB7XG5cdCAgdmFyIHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIHNldHRpbmdzX3VzZXIpO1xuXHQgIHZhciBhdHRyX2RhdGEgPSBzZXR0aW5ncy5kYXRhQXR0cjtcblx0ICB2YXIgZmllbGRfbGFiZWwgPSBzZXR0aW5ncy5sYWJlbEZpZWxkO1xuXHQgIHZhciBmaWVsZF92YWx1ZSA9IHNldHRpbmdzLnZhbHVlRmllbGQ7XG5cdCAgdmFyIGZpZWxkX2Rpc2FibGVkID0gc2V0dGluZ3MuZGlzYWJsZWRGaWVsZDtcblx0ICB2YXIgZmllbGRfb3B0Z3JvdXAgPSBzZXR0aW5ncy5vcHRncm91cEZpZWxkO1xuXHQgIHZhciBmaWVsZF9vcHRncm91cF9sYWJlbCA9IHNldHRpbmdzLm9wdGdyb3VwTGFiZWxGaWVsZDtcblx0ICB2YXIgZmllbGRfb3B0Z3JvdXBfdmFsdWUgPSBzZXR0aW5ncy5vcHRncm91cFZhbHVlRmllbGQ7XG5cdCAgdmFyIHRhZ19uYW1lID0gaW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHQgIHZhciBwbGFjZWhvbGRlciA9IGlucHV0LmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSB8fCBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2Vob2xkZXInKTtcblxuXHQgIGlmICghcGxhY2Vob2xkZXIgJiYgIXNldHRpbmdzLmFsbG93RW1wdHlPcHRpb24pIHtcblx0ICAgIGxldCBvcHRpb24gPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCJcIl0nKTtcblxuXHQgICAgaWYgKG9wdGlvbikge1xuXHQgICAgICBwbGFjZWhvbGRlciA9IG9wdGlvbi50ZXh0Q29udGVudDtcblx0ICAgIH1cblx0ICB9XG5cblx0ICB2YXIgc2V0dGluZ3NfZWxlbWVudCA9IHtcblx0ICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcblx0ICAgIG9wdGlvbnM6IFtdLFxuXHQgICAgb3B0Z3JvdXBzOiBbXSxcblx0ICAgIGl0ZW1zOiBbXSxcblx0ICAgIG1heEl0ZW1zOiBudWxsXG5cdCAgfTtcblx0ICAvKipcblx0ICAgKiBJbml0aWFsaXplIGZyb20gYSA8c2VsZWN0PiBlbGVtZW50LlxuXHQgICAqXG5cdCAgICovXG5cblx0ICB2YXIgaW5pdF9zZWxlY3QgPSAoKSA9PiB7XG5cdCAgICB2YXIgdGFnTmFtZTtcblx0ICAgIHZhciBvcHRpb25zID0gc2V0dGluZ3NfZWxlbWVudC5vcHRpb25zO1xuXHQgICAgdmFyIG9wdGlvbnNNYXAgPSB7fTtcblx0ICAgIHZhciBncm91cF9jb3VudCA9IDE7XG5cblx0ICAgIHZhciByZWFkRGF0YSA9IGVsID0+IHtcblx0ICAgICAgdmFyIGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBlbC5kYXRhc2V0KTsgLy8gZ2V0IHBsYWluIG9iamVjdCBmcm9tIERPTVN0cmluZ01hcFxuXG5cdCAgICAgIHZhciBqc29uID0gYXR0cl9kYXRhICYmIGRhdGFbYXR0cl9kYXRhXTtcblxuXHQgICAgICBpZiAodHlwZW9mIGpzb24gPT09ICdzdHJpbmcnICYmIGpzb24ubGVuZ3RoKSB7XG5cdCAgICAgICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oZGF0YSwgSlNPTi5wYXJzZShqc29uKSk7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gZGF0YTtcblx0ICAgIH07XG5cblx0ICAgIHZhciBhZGRPcHRpb24gPSAob3B0aW9uLCBncm91cCkgPT4ge1xuXHQgICAgICB2YXIgdmFsdWUgPSBoYXNoX2tleShvcHRpb24udmFsdWUpO1xuXHQgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuO1xuXHQgICAgICBpZiAoIXZhbHVlICYmICFzZXR0aW5ncy5hbGxvd0VtcHR5T3B0aW9uKSByZXR1cm47IC8vIGlmIHRoZSBvcHRpb24gYWxyZWFkeSBleGlzdHMsIGl0J3MgcHJvYmFibHkgYmVlblxuXHQgICAgICAvLyBkdXBsaWNhdGVkIGluIGFub3RoZXIgb3B0Z3JvdXAuIGluIHRoaXMgY2FzZSwgcHVzaFxuXHQgICAgICAvLyB0aGUgY3VycmVudCBncm91cCB0byB0aGUgXCJvcHRncm91cFwiIHByb3BlcnR5IG9uIHRoZVxuXHQgICAgICAvLyBleGlzdGluZyBvcHRpb24gc28gdGhhdCBpdCdzIHJlbmRlcmVkIGluIGJvdGggcGxhY2VzLlxuXG5cdCAgICAgIGlmIChvcHRpb25zTWFwLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuXHQgICAgICAgIGlmIChncm91cCkge1xuXHQgICAgICAgICAgdmFyIGFyciA9IG9wdGlvbnNNYXBbdmFsdWVdW2ZpZWxkX29wdGdyb3VwXTtcblxuXHQgICAgICAgICAgaWYgKCFhcnIpIHtcblx0ICAgICAgICAgICAgb3B0aW9uc01hcFt2YWx1ZV1bZmllbGRfb3B0Z3JvdXBdID0gZ3JvdXA7XG5cdCAgICAgICAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcblx0ICAgICAgICAgICAgb3B0aW9uc01hcFt2YWx1ZV1bZmllbGRfb3B0Z3JvdXBdID0gW2FyciwgZ3JvdXBdO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgYXJyLnB1c2goZ3JvdXApO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YXIgb3B0aW9uX2RhdGEgPSByZWFkRGF0YShvcHRpb24pO1xuXHQgICAgICAgIG9wdGlvbl9kYXRhW2ZpZWxkX2xhYmVsXSA9IG9wdGlvbl9kYXRhW2ZpZWxkX2xhYmVsXSB8fCBvcHRpb24udGV4dENvbnRlbnQ7XG5cdCAgICAgICAgb3B0aW9uX2RhdGFbZmllbGRfdmFsdWVdID0gb3B0aW9uX2RhdGFbZmllbGRfdmFsdWVdIHx8IHZhbHVlO1xuXHQgICAgICAgIG9wdGlvbl9kYXRhW2ZpZWxkX2Rpc2FibGVkXSA9IG9wdGlvbl9kYXRhW2ZpZWxkX2Rpc2FibGVkXSB8fCBvcHRpb24uZGlzYWJsZWQ7XG5cdCAgICAgICAgb3B0aW9uX2RhdGFbZmllbGRfb3B0Z3JvdXBdID0gb3B0aW9uX2RhdGFbZmllbGRfb3B0Z3JvdXBdIHx8IGdyb3VwO1xuXHQgICAgICAgIG9wdGlvbl9kYXRhLiRvcHRpb24gPSBvcHRpb247XG5cdCAgICAgICAgb3B0aW9uc01hcFt2YWx1ZV0gPSBvcHRpb25fZGF0YTtcblx0ICAgICAgICBvcHRpb25zLnB1c2gob3B0aW9uX2RhdGEpO1xuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuXHQgICAgICAgIHNldHRpbmdzX2VsZW1lbnQuaXRlbXMucHVzaCh2YWx1ZSk7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIHZhciBhZGRHcm91cCA9IG9wdGdyb3VwID0+IHtcblx0ICAgICAgdmFyIGlkLCBvcHRncm91cF9kYXRhO1xuXHQgICAgICBvcHRncm91cF9kYXRhID0gcmVhZERhdGEob3B0Z3JvdXApO1xuXHQgICAgICBvcHRncm91cF9kYXRhW2ZpZWxkX29wdGdyb3VwX2xhYmVsXSA9IG9wdGdyb3VwX2RhdGFbZmllbGRfb3B0Z3JvdXBfbGFiZWxdIHx8IG9wdGdyb3VwLmdldEF0dHJpYnV0ZSgnbGFiZWwnKSB8fCAnJztcblx0ICAgICAgb3B0Z3JvdXBfZGF0YVtmaWVsZF9vcHRncm91cF92YWx1ZV0gPSBvcHRncm91cF9kYXRhW2ZpZWxkX29wdGdyb3VwX3ZhbHVlXSB8fCBncm91cF9jb3VudCsrO1xuXHQgICAgICBvcHRncm91cF9kYXRhW2ZpZWxkX2Rpc2FibGVkXSA9IG9wdGdyb3VwX2RhdGFbZmllbGRfZGlzYWJsZWRdIHx8IG9wdGdyb3VwLmRpc2FibGVkO1xuXHQgICAgICBzZXR0aW5nc19lbGVtZW50Lm9wdGdyb3Vwcy5wdXNoKG9wdGdyb3VwX2RhdGEpO1xuXHQgICAgICBpZCA9IG9wdGdyb3VwX2RhdGFbZmllbGRfb3B0Z3JvdXBfdmFsdWVdO1xuXHQgICAgICBpdGVyYXRlKG9wdGdyb3VwLmNoaWxkcmVuLCBvcHRpb24gPT4ge1xuXHQgICAgICAgIGFkZE9wdGlvbihvcHRpb24sIGlkKTtcblx0ICAgICAgfSk7XG5cdCAgICB9O1xuXG5cdCAgICBzZXR0aW5nc19lbGVtZW50Lm1heEl0ZW1zID0gaW5wdXQuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpID8gbnVsbCA6IDE7XG5cdCAgICBpdGVyYXRlKGlucHV0LmNoaWxkcmVuLCBjaGlsZCA9PiB7XG5cdCAgICAgIHRhZ05hbWUgPSBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0ICAgICAgaWYgKHRhZ05hbWUgPT09ICdvcHRncm91cCcpIHtcblx0ICAgICAgICBhZGRHcm91cChjaGlsZCk7XG5cdCAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gJ29wdGlvbicpIHtcblx0ICAgICAgICBhZGRPcHRpb24oY2hpbGQpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICB9O1xuXHQgIC8qKlxuXHQgICAqIEluaXRpYWxpemUgZnJvbSBhIDxpbnB1dCB0eXBlPVwidGV4dFwiPiBlbGVtZW50LlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIHZhciBpbml0X3RleHRib3ggPSAoKSA9PiB7XG5cdCAgICBjb25zdCBkYXRhX3JhdyA9IGlucHV0LmdldEF0dHJpYnV0ZShhdHRyX2RhdGEpO1xuXG5cdCAgICBpZiAoIWRhdGFfcmF3KSB7XG5cdCAgICAgIHZhciB2YWx1ZSA9IGlucHV0LnZhbHVlLnRyaW0oKSB8fCAnJztcblx0ICAgICAgaWYgKCFzZXR0aW5ncy5hbGxvd0VtcHR5T3B0aW9uICYmICF2YWx1ZS5sZW5ndGgpIHJldHVybjtcblx0ICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoc2V0dGluZ3MuZGVsaW1pdGVyKTtcblx0ICAgICAgaXRlcmF0ZSh2YWx1ZXMsIHZhbHVlID0+IHtcblx0ICAgICAgICBjb25zdCBvcHRpb24gPSB7fTtcblx0ICAgICAgICBvcHRpb25bZmllbGRfbGFiZWxdID0gdmFsdWU7XG5cdCAgICAgICAgb3B0aW9uW2ZpZWxkX3ZhbHVlXSA9IHZhbHVlO1xuXHQgICAgICAgIHNldHRpbmdzX2VsZW1lbnQub3B0aW9ucy5wdXNoKG9wdGlvbik7XG5cdCAgICAgIH0pO1xuXHQgICAgICBzZXR0aW5nc19lbGVtZW50Lml0ZW1zID0gdmFsdWVzO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgc2V0dGluZ3NfZWxlbWVudC5vcHRpb25zID0gSlNPTi5wYXJzZShkYXRhX3Jhdyk7XG5cdCAgICAgIGl0ZXJhdGUoc2V0dGluZ3NfZWxlbWVudC5vcHRpb25zLCBvcHQgPT4ge1xuXHQgICAgICAgIHNldHRpbmdzX2VsZW1lbnQuaXRlbXMucHVzaChvcHRbZmllbGRfdmFsdWVdKTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIGlmICh0YWdfbmFtZSA9PT0gJ3NlbGVjdCcpIHtcblx0ICAgIGluaXRfc2VsZWN0KCk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGluaXRfdGV4dGJveCgpO1xuXHQgIH1cblxuXHQgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgc2V0dGluZ3NfZWxlbWVudCwgc2V0dGluZ3NfdXNlcik7XG5cdH1cblxuXHR2YXIgaW5zdGFuY2VfaSA9IDA7XG5cdGNsYXNzIFRvbVNlbGVjdCBleHRlbmRzIE1pY3JvUGx1Z2luKE1pY3JvRXZlbnQpIHtcblx0ICAvLyBAZGVwcmVjYXRlZCAxLjhcblx0ICBjb25zdHJ1Y3RvcihpbnB1dF9hcmcsIHVzZXJfc2V0dGluZ3MpIHtcblx0ICAgIHN1cGVyKCk7XG5cdCAgICB0aGlzLmNvbnRyb2xfaW5wdXQgPSB2b2lkIDA7XG5cdCAgICB0aGlzLndyYXBwZXIgPSB2b2lkIDA7XG5cdCAgICB0aGlzLmRyb3Bkb3duID0gdm9pZCAwO1xuXHQgICAgdGhpcy5jb250cm9sID0gdm9pZCAwO1xuXHQgICAgdGhpcy5kcm9wZG93bl9jb250ZW50ID0gdm9pZCAwO1xuXHQgICAgdGhpcy5mb2N1c19ub2RlID0gdm9pZCAwO1xuXHQgICAgdGhpcy5vcmRlciA9IDA7XG5cdCAgICB0aGlzLnNldHRpbmdzID0gdm9pZCAwO1xuXHQgICAgdGhpcy5pbnB1dCA9IHZvaWQgMDtcblx0ICAgIHRoaXMudGFiSW5kZXggPSB2b2lkIDA7XG5cdCAgICB0aGlzLmlzX3NlbGVjdF90YWcgPSB2b2lkIDA7XG5cdCAgICB0aGlzLnJ0bCA9IHZvaWQgMDtcblx0ICAgIHRoaXMuaW5wdXRJZCA9IHZvaWQgMDtcblx0ICAgIHRoaXMuX2Rlc3Ryb3kgPSB2b2lkIDA7XG5cdCAgICB0aGlzLnNpZnRlciA9IHZvaWQgMDtcblx0ICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cdCAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcblx0ICAgIHRoaXMuaXNSZXF1aXJlZCA9IHZvaWQgMDtcblx0ICAgIHRoaXMuaXNJbnZhbGlkID0gZmFsc2U7XG5cdCAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuXHQgICAgdGhpcy5pc0xvY2tlZCA9IGZhbHNlO1xuXHQgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcblx0ICAgIHRoaXMuaXNJbnB1dEhpZGRlbiA9IGZhbHNlO1xuXHQgICAgdGhpcy5pc1NldHVwID0gZmFsc2U7XG5cdCAgICB0aGlzLmlnbm9yZUZvY3VzID0gZmFsc2U7XG5cdCAgICB0aGlzLmhhc09wdGlvbnMgPSBmYWxzZTtcblx0ICAgIHRoaXMuY3VycmVudFJlc3VsdHMgPSB2b2lkIDA7XG5cdCAgICB0aGlzLmxhc3RWYWx1ZSA9ICcnO1xuXHQgICAgdGhpcy5jYXJldFBvcyA9IDA7XG5cdCAgICB0aGlzLmxvYWRpbmcgPSAwO1xuXHQgICAgdGhpcy5sb2FkZWRTZWFyY2hlcyA9IHt9O1xuXHQgICAgdGhpcy5hY3RpdmVPcHRpb24gPSBudWxsO1xuXHQgICAgdGhpcy5hY3RpdmVJdGVtcyA9IFtdO1xuXHQgICAgdGhpcy5vcHRncm91cHMgPSB7fTtcblx0ICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuXHQgICAgdGhpcy51c2VyT3B0aW9ucyA9IHt9O1xuXHQgICAgdGhpcy5pdGVtcyA9IFtdO1xuXHQgICAgaW5zdGFuY2VfaSsrO1xuXHQgICAgdmFyIGRpcjtcblx0ICAgIHZhciBpbnB1dCA9IGdldERvbShpbnB1dF9hcmcpO1xuXG5cdCAgICBpZiAoaW5wdXQudG9tc2VsZWN0KSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignVG9tIFNlbGVjdCBhbHJlYWR5IGluaXRpYWxpemVkIG9uIHRoaXMgZWxlbWVudCcpO1xuXHQgICAgfVxuXG5cdCAgICBpbnB1dC50b21zZWxlY3QgPSB0aGlzOyAvLyBkZXRlY3QgcnRsIGVudmlyb25tZW50XG5cblx0ICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoaW5wdXQsIG51bGwpO1xuXHQgICAgZGlyID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKTsgLy8gc2V0dXAgZGVmYXVsdCBzdGF0ZVxuXG5cdCAgICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKGlucHV0LCB1c2VyX3NldHRpbmdzKTtcblx0ICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblx0ICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcblx0ICAgIHRoaXMudGFiSW5kZXggPSBpbnB1dC50YWJJbmRleCB8fCAwO1xuXHQgICAgdGhpcy5pc19zZWxlY3RfdGFnID0gaW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jztcblx0ICAgIHRoaXMucnRsID0gL3J0bC9pLnRlc3QoZGlyKTtcblx0ICAgIHRoaXMuaW5wdXRJZCA9IGdldElkKGlucHV0LCAndG9tc2VsZWN0LScgKyBpbnN0YW5jZV9pKTtcblx0ICAgIHRoaXMuaXNSZXF1aXJlZCA9IGlucHV0LnJlcXVpcmVkOyAvLyBzZWFyY2ggc3lzdGVtXG5cblx0ICAgIHRoaXMuc2lmdGVyID0gbmV3IFNpZnRlcih0aGlzLm9wdGlvbnMsIHtcblx0ICAgICAgZGlhY3JpdGljczogc2V0dGluZ3MuZGlhY3JpdGljc1xuXHQgICAgfSk7IC8vIG9wdGlvbi1kZXBlbmRlbnQgZGVmYXVsdHNcblxuXHQgICAgc2V0dGluZ3MubW9kZSA9IHNldHRpbmdzLm1vZGUgfHwgKHNldHRpbmdzLm1heEl0ZW1zID09PSAxID8gJ3NpbmdsZScgOiAnbXVsdGknKTtcblxuXHQgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5oaWRlU2VsZWN0ZWQgIT09ICdib29sZWFuJykge1xuXHQgICAgICBzZXR0aW5ncy5oaWRlU2VsZWN0ZWQgPSBzZXR0aW5ncy5tb2RlID09PSAnbXVsdGknO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodHlwZW9mIHNldHRpbmdzLmhpZGVQbGFjZWhvbGRlciAhPT0gJ2Jvb2xlYW4nKSB7XG5cdCAgICAgIHNldHRpbmdzLmhpZGVQbGFjZWhvbGRlciA9IHNldHRpbmdzLm1vZGUgIT09ICdtdWx0aSc7XG5cdCAgICB9IC8vIHNldCB1cCBjcmVhdGVGaWx0ZXIgY2FsbGJhY2tcblxuXG5cdCAgICB2YXIgZmlsdGVyID0gc2V0dGluZ3MuY3JlYXRlRmlsdGVyO1xuXG5cdCAgICBpZiAodHlwZW9mIGZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICBmaWx0ZXIgPSBuZXcgUmVnRXhwKGZpbHRlcik7XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAoZmlsdGVyIGluc3RhbmNlb2YgUmVnRXhwKSB7XG5cdCAgICAgICAgc2V0dGluZ3MuY3JlYXRlRmlsdGVyID0gaW5wdXQgPT4gZmlsdGVyLnRlc3QoaW5wdXQpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHNldHRpbmdzLmNyZWF0ZUZpbHRlciA9IHZhbHVlID0+IHtcblx0ICAgICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmR1cGxpY2F0ZXMgfHwgIXRoaXMub3B0aW9uc1t2YWx1ZV07XG5cdCAgICAgICAgfTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB0aGlzLmluaXRpYWxpemVQbHVnaW5zKHNldHRpbmdzLnBsdWdpbnMpO1xuXHQgICAgdGhpcy5zZXR1cENhbGxiYWNrcygpO1xuXHQgICAgdGhpcy5zZXR1cFRlbXBsYXRlcygpOyAvLyBDcmVhdGUgYWxsIGVsZW1lbnRzXG5cblx0ICAgIGNvbnN0IHdyYXBwZXIgPSBnZXREb20oJzxkaXY+Jyk7XG5cdCAgICBjb25zdCBjb250cm9sID0gZ2V0RG9tKCc8ZGl2PicpO1xuXG5cdCAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX3JlbmRlcignZHJvcGRvd24nKTtcblxuXHQgICAgY29uc3QgZHJvcGRvd25fY29udGVudCA9IGdldERvbShgPGRpdiByb2xlPVwibGlzdGJveFwiIHRhYmluZGV4PVwiLTFcIj5gKTtcblx0ICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmlucHV0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJztcblx0ICAgIGNvbnN0IGlucHV0TW9kZSA9IHNldHRpbmdzLm1vZGU7XG5cdCAgICB2YXIgY29udHJvbF9pbnB1dDtcblx0ICAgIGFkZENsYXNzZXMod3JhcHBlciwgc2V0dGluZ3Mud3JhcHBlckNsYXNzLCBjbGFzc2VzLCBpbnB1dE1vZGUpO1xuXHQgICAgYWRkQ2xhc3Nlcyhjb250cm9sLCBzZXR0aW5ncy5jb250cm9sQ2xhc3MpO1xuXHQgICAgYXBwZW5kKHdyYXBwZXIsIGNvbnRyb2wpO1xuXHQgICAgYWRkQ2xhc3Nlcyhkcm9wZG93biwgc2V0dGluZ3MuZHJvcGRvd25DbGFzcywgaW5wdXRNb2RlKTtcblxuXHQgICAgaWYgKHNldHRpbmdzLmNvcHlDbGFzc2VzVG9Ecm9wZG93bikge1xuXHQgICAgICBhZGRDbGFzc2VzKGRyb3Bkb3duLCBjbGFzc2VzKTtcblx0ICAgIH1cblxuXHQgICAgYWRkQ2xhc3Nlcyhkcm9wZG93bl9jb250ZW50LCBzZXR0aW5ncy5kcm9wZG93bkNvbnRlbnRDbGFzcyk7XG5cdCAgICBhcHBlbmQoZHJvcGRvd24sIGRyb3Bkb3duX2NvbnRlbnQpO1xuXHQgICAgZ2V0RG9tKHNldHRpbmdzLmRyb3Bkb3duUGFyZW50IHx8IHdyYXBwZXIpLmFwcGVuZENoaWxkKGRyb3Bkb3duKTsgLy8gZGVmYXVsdCBjb250cm9sSW5wdXRcblxuXHQgICAgaWYgKGlzSHRtbFN0cmluZyhzZXR0aW5ncy5jb250cm9sSW5wdXQpKSB7XG5cdCAgICAgIGNvbnRyb2xfaW5wdXQgPSBnZXREb20oc2V0dGluZ3MuY29udHJvbElucHV0KTsgLy8gc2V0IGF0dHJpYnV0ZXNcblxuXHQgICAgICB2YXIgYXR0cnMgPSBbJ2F1dG9jb3JyZWN0JywgJ2F1dG9jYXBpdGFsaXplJywgJ2F1dG9jb21wbGV0ZSddO1xuXHQgICAgICBpdGVyYXRlKGF0dHJzLCBhdHRyID0+IHtcblx0ICAgICAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKGF0dHIpKSB7XG5cdCAgICAgICAgICBzZXRBdHRyKGNvbnRyb2xfaW5wdXQsIHtcblx0ICAgICAgICAgICAgW2F0dHJdOiBpbnB1dC5nZXRBdHRyaWJ1dGUoYXR0cilcblx0ICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIGNvbnRyb2xfaW5wdXQudGFiSW5kZXggPSAtMTtcblx0ICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChjb250cm9sX2lucHV0KTtcblx0ICAgICAgdGhpcy5mb2N1c19ub2RlID0gY29udHJvbF9pbnB1dDsgLy8gZG9tIGVsZW1lbnRcblx0ICAgIH0gZWxzZSBpZiAoc2V0dGluZ3MuY29udHJvbElucHV0KSB7XG5cdCAgICAgIGNvbnRyb2xfaW5wdXQgPSBnZXREb20oc2V0dGluZ3MuY29udHJvbElucHV0KTtcblx0ICAgICAgdGhpcy5mb2N1c19ub2RlID0gY29udHJvbF9pbnB1dDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGNvbnRyb2xfaW5wdXQgPSBnZXREb20oJzxpbnB1dC8+Jyk7XG5cdCAgICAgIHRoaXMuZm9jdXNfbm9kZSA9IGNvbnRyb2w7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XG5cdCAgICB0aGlzLmRyb3Bkb3duID0gZHJvcGRvd247XG5cdCAgICB0aGlzLmRyb3Bkb3duX2NvbnRlbnQgPSBkcm9wZG93bl9jb250ZW50O1xuXHQgICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcblx0ICAgIHRoaXMuY29udHJvbF9pbnB1dCA9IGNvbnRyb2xfaW5wdXQ7XG5cdCAgICB0aGlzLnNldHVwKCk7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIHNldCB1cCBldmVudCBiaW5kaW5ncy5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBzZXR1cCgpIHtcblx0ICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXHQgICAgY29uc3Qgc2V0dGluZ3MgPSBzZWxmLnNldHRpbmdzO1xuXHQgICAgY29uc3QgY29udHJvbF9pbnB1dCA9IHNlbGYuY29udHJvbF9pbnB1dDtcblx0ICAgIGNvbnN0IGRyb3Bkb3duID0gc2VsZi5kcm9wZG93bjtcblx0ICAgIGNvbnN0IGRyb3Bkb3duX2NvbnRlbnQgPSBzZWxmLmRyb3Bkb3duX2NvbnRlbnQ7XG5cdCAgICBjb25zdCB3cmFwcGVyID0gc2VsZi53cmFwcGVyO1xuXHQgICAgY29uc3QgY29udHJvbCA9IHNlbGYuY29udHJvbDtcblx0ICAgIGNvbnN0IGlucHV0ID0gc2VsZi5pbnB1dDtcblx0ICAgIGNvbnN0IGZvY3VzX25vZGUgPSBzZWxmLmZvY3VzX25vZGU7XG5cdCAgICBjb25zdCBwYXNzaXZlX2V2ZW50ID0ge1xuXHQgICAgICBwYXNzaXZlOiB0cnVlXG5cdCAgICB9O1xuXHQgICAgY29uc3QgbGlzdGJveElkID0gc2VsZi5pbnB1dElkICsgJy10cy1kcm9wZG93bic7XG5cdCAgICBzZXRBdHRyKGRyb3Bkb3duX2NvbnRlbnQsIHtcblx0ICAgICAgaWQ6IGxpc3Rib3hJZFxuXHQgICAgfSk7XG5cdCAgICBzZXRBdHRyKGZvY3VzX25vZGUsIHtcblx0ICAgICAgcm9sZTogJ2NvbWJvYm94Jyxcblx0ICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAnbGlzdGJveCcsXG5cdCAgICAgICdhcmlhLWV4cGFuZGVkJzogJ2ZhbHNlJyxcblx0ICAgICAgJ2FyaWEtY29udHJvbHMnOiBsaXN0Ym94SWRcblx0ICAgIH0pO1xuXHQgICAgY29uc3QgY29udHJvbF9pZCA9IGdldElkKGZvY3VzX25vZGUsIHNlbGYuaW5wdXRJZCArICctdHMtY29udHJvbCcpO1xuXHQgICAgY29uc3QgcXVlcnkgPSBcImxhYmVsW2Zvcj0nXCIgKyBlc2NhcGVRdWVyeShzZWxmLmlucHV0SWQpICsgXCInXVwiO1xuXHQgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcblx0ICAgIGNvbnN0IGxhYmVsX2NsaWNrID0gc2VsZi5mb2N1cy5iaW5kKHNlbGYpO1xuXG5cdCAgICBpZiAobGFiZWwpIHtcblx0ICAgICAgYWRkRXZlbnQobGFiZWwsICdjbGljaycsIGxhYmVsX2NsaWNrKTtcblx0ICAgICAgc2V0QXR0cihsYWJlbCwge1xuXHQgICAgICAgIGZvcjogY29udHJvbF9pZFxuXHQgICAgICB9KTtcblx0ICAgICAgY29uc3QgbGFiZWxfaWQgPSBnZXRJZChsYWJlbCwgc2VsZi5pbnB1dElkICsgJy10cy1sYWJlbCcpO1xuXHQgICAgICBzZXRBdHRyKGZvY3VzX25vZGUsIHtcblx0ICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxfaWRcblx0ICAgICAgfSk7XG5cdCAgICAgIHNldEF0dHIoZHJvcGRvd25fY29udGVudCwge1xuXHQgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbF9pZFxuXHQgICAgICB9KTtcblx0ICAgIH1cblxuXHQgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9IGlucHV0LnN0eWxlLndpZHRoO1xuXG5cdCAgICBpZiAoc2VsZi5wbHVnaW5zLm5hbWVzLmxlbmd0aCkge1xuXHQgICAgICBjb25zdCBjbGFzc2VzX3BsdWdpbnMgPSAncGx1Z2luLScgKyBzZWxmLnBsdWdpbnMubmFtZXMuam9pbignIHBsdWdpbi0nKTtcblx0ICAgICAgYWRkQ2xhc3Nlcyhbd3JhcHBlciwgZHJvcGRvd25dLCBjbGFzc2VzX3BsdWdpbnMpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoKHNldHRpbmdzLm1heEl0ZW1zID09PSBudWxsIHx8IHNldHRpbmdzLm1heEl0ZW1zID4gMSkgJiYgc2VsZi5pc19zZWxlY3RfdGFnKSB7XG5cdCAgICAgIHNldEF0dHIoaW5wdXQsIHtcblx0ICAgICAgICBtdWx0aXBsZTogJ211bHRpcGxlJ1xuXHQgICAgICB9KTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHNldHRpbmdzLnBsYWNlaG9sZGVyKSB7XG5cdCAgICAgIHNldEF0dHIoY29udHJvbF9pbnB1dCwge1xuXHQgICAgICAgIHBsYWNlaG9sZGVyOiBzZXR0aW5ncy5wbGFjZWhvbGRlclxuXHQgICAgICB9KTtcblx0ICAgIH0gLy8gaWYgc3BsaXRPbiB3YXMgbm90IHBhc3NlZCBpbiwgY29uc3RydWN0IGl0IGZyb20gdGhlIGRlbGltaXRlciB0byBhbGxvdyBwYXN0aW5nIHVuaXZlcnNhbGx5XG5cblxuXHQgICAgaWYgKCFzZXR0aW5ncy5zcGxpdE9uICYmIHNldHRpbmdzLmRlbGltaXRlcikge1xuXHQgICAgICBzZXR0aW5ncy5zcGxpdE9uID0gbmV3IFJlZ0V4cCgnXFxcXHMqJyArIGVzY2FwZV9yZWdleChzZXR0aW5ncy5kZWxpbWl0ZXIpICsgJytcXFxccyonKTtcblx0ICAgIH0gLy8gZGVib3VuY2UgdXNlciBkZWZpbmVkIGxvYWQoKSBpZiBsb2FkVGhyb3R0bGUgPiAwXG5cdCAgICAvLyBhZnRlciBpbml0aWFsaXplUGx1Z2lucygpIHNvIHBsdWdpbnMgY2FuIGNyZWF0ZS9tb2RpZnkgdXNlciBkZWZpbmVkIGxvYWRlcnNcblxuXG5cdCAgICBpZiAoc2V0dGluZ3MubG9hZCAmJiBzZXR0aW5ncy5sb2FkVGhyb3R0bGUpIHtcblx0ICAgICAgc2V0dGluZ3MubG9hZCA9IGxvYWREZWJvdW5jZShzZXR0aW5ncy5sb2FkLCBzZXR0aW5ncy5sb2FkVGhyb3R0bGUpO1xuXHQgICAgfVxuXG5cdCAgICBzZWxmLmNvbnRyb2xfaW5wdXQudHlwZSA9IGlucHV0LnR5cGU7IC8vIGNsaWNraW5nIG9uIGFuIG9wdGlvbiBzaG91bGQgc2VsZWN0IGl0XG5cblx0ICAgIGFkZEV2ZW50KGRyb3Bkb3duLCAnY2xpY2snLCBldnQgPT4ge1xuXHQgICAgICBjb25zdCBvcHRpb24gPSBwYXJlbnRNYXRjaChldnQudGFyZ2V0LCAnW2RhdGEtc2VsZWN0YWJsZV0nKTtcblxuXHQgICAgICBpZiAob3B0aW9uKSB7XG5cdCAgICAgICAgc2VsZi5vbk9wdGlvblNlbGVjdChldnQsIG9wdGlvbik7XG5cdCAgICAgICAgcHJldmVudERlZmF1bHQoZXZ0LCB0cnVlKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICBhZGRFdmVudChjb250cm9sLCAnY2xpY2snLCBldnQgPT4ge1xuXHQgICAgICB2YXIgdGFyZ2V0X21hdGNoID0gcGFyZW50TWF0Y2goZXZ0LnRhcmdldCwgJ1tkYXRhLXRzLWl0ZW1dJywgY29udHJvbCk7XG5cblx0ICAgICAgaWYgKHRhcmdldF9tYXRjaCAmJiBzZWxmLm9uSXRlbVNlbGVjdChldnQsIHRhcmdldF9tYXRjaCkpIHtcblx0ICAgICAgICBwcmV2ZW50RGVmYXVsdChldnQsIHRydWUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfSAvLyByZXRhaW4gZm9jdXMgKHNlZSBjb250cm9sX2lucHV0IG1vdXNlZG93bilcblxuXG5cdCAgICAgIGlmIChjb250cm9sX2lucHV0LnZhbHVlICE9ICcnKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cblx0ICAgICAgc2VsZi5vbkNsaWNrKCk7XG5cdCAgICAgIHByZXZlbnREZWZhdWx0KGV2dCwgdHJ1ZSk7XG5cdCAgICB9KTsgLy8ga2V5ZG93biBvbiBmb2N1c19ub2RlIGZvciBhcnJvd19kb3duL2Fycm93X3VwXG5cblx0ICAgIGFkZEV2ZW50KGZvY3VzX25vZGUsICdrZXlkb3duJywgZSA9PiBzZWxmLm9uS2V5RG93bihlKSk7IC8vIGtleXByZXNzIGFuZCBpbnB1dC9rZXl1cFxuXG5cdCAgICBhZGRFdmVudChjb250cm9sX2lucHV0LCAna2V5cHJlc3MnLCBlID0+IHNlbGYub25LZXlQcmVzcyhlKSk7XG5cdCAgICBhZGRFdmVudChjb250cm9sX2lucHV0LCAnaW5wdXQnLCBlID0+IHNlbGYub25JbnB1dChlKSk7XG5cdCAgICBhZGRFdmVudChmb2N1c19ub2RlLCAncmVzaXplJywgKCkgPT4gc2VsZi5wb3NpdGlvbkRyb3Bkb3duKCksIHBhc3NpdmVfZXZlbnQpO1xuXHQgICAgYWRkRXZlbnQoZm9jdXNfbm9kZSwgJ2JsdXInLCBlID0+IHNlbGYub25CbHVyKGUpKTtcblx0ICAgIGFkZEV2ZW50KGZvY3VzX25vZGUsICdmb2N1cycsIGUgPT4gc2VsZi5vbkZvY3VzKGUpKTtcblx0ICAgIGFkZEV2ZW50KGZvY3VzX25vZGUsICdwYXN0ZScsIGUgPT4gc2VsZi5vblBhc3RlKGUpKTtcblxuXHQgICAgY29uc3QgZG9jX21vdXNlZG93biA9IGV2dCA9PiB7XG5cdCAgICAgIC8vIGJsdXIgaWYgdGFyZ2V0IGlzIG91dHNpZGUgb2YgdGhpcyBpbnN0YW5jZVxuXHQgICAgICAvLyBkcm9wZG93biBpcyBub3QgYWx3YXlzIGluc2lkZSB3cmFwcGVyXG5cdCAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC5jb21wb3NlZFBhdGgoKVswXTtcblxuXHQgICAgICBpZiAoIXdyYXBwZXIuY29udGFpbnModGFyZ2V0KSAmJiAhZHJvcGRvd24uY29udGFpbnModGFyZ2V0KSkge1xuXHQgICAgICAgIGlmIChzZWxmLmlzRm9jdXNlZCkge1xuXHQgICAgICAgICAgc2VsZi5ibHVyKCk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgc2VsZi5pbnB1dFN0YXRlKCk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9IC8vIHJldGFpbiBmb2N1cyBieSBwcmV2ZW50aW5nIG5hdGl2ZSBoYW5kbGluZy4gaWYgdGhlXG5cdCAgICAgIC8vIGV2ZW50IHRhcmdldCBpcyB0aGUgaW5wdXQgaXQgc2hvdWxkIG5vdCBiZSBtb2RpZmllZC5cblx0ICAgICAgLy8gb3RoZXJ3aXNlLCB0ZXh0IHNlbGVjdGlvbiB3aXRoaW4gdGhlIGlucHV0IHdvbid0IHdvcmsuXG5cdCAgICAgIC8vIEZpeGVzIGJ1ZyAjMjEyIHdoaWNoIGlzIG5vIGNvdmVyZWQgYnkgdGVzdHNcblxuXG5cdCAgICAgIGlmICh0YXJnZXQgPT0gY29udHJvbF9pbnB1dCAmJiBzZWxmLmlzT3Blbikge1xuXHQgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gY2xpY2tpbmcgYW55d2hlcmUgaW4gdGhlIGNvbnRyb2wgc2hvdWxkIG5vdCBibHVyIHRoZSBjb250cm9sX2lucHV0ICh3aGljaCB3b3VsZCBjbG9zZSB0aGUgZHJvcGRvd24pXG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcHJldmVudERlZmF1bHQoZXZ0LCB0cnVlKTtcblx0ICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgdmFyIHdpbl9zY3JvbGwgPSAoKSA9PiB7XG5cdCAgICAgIGlmIChzZWxmLmlzT3Blbikge1xuXHQgICAgICAgIHNlbGYucG9zaXRpb25Ecm9wZG93bigpO1xuXHQgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICBhZGRFdmVudChkb2N1bWVudCwgJ21vdXNlZG93bicsIGRvY19tb3VzZWRvd24pO1xuXHQgICAgYWRkRXZlbnQod2luZG93LCAnc2Nyb2xsJywgd2luX3Njcm9sbCwgcGFzc2l2ZV9ldmVudCk7XG5cdCAgICBhZGRFdmVudCh3aW5kb3csICdyZXNpemUnLCB3aW5fc2Nyb2xsLCBwYXNzaXZlX2V2ZW50KTtcblxuXHQgICAgdGhpcy5fZGVzdHJveSA9ICgpID0+IHtcblx0ICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG9jX21vdXNlZG93bik7XG5cdCAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB3aW5fc2Nyb2xsKTtcblx0ICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHdpbl9zY3JvbGwpO1xuXHQgICAgICBpZiAobGFiZWwpIGxhYmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGFiZWxfY2xpY2spO1xuXHQgICAgfTsgLy8gc3RvcmUgb3JpZ2luYWwgaHRtbCBhbmQgdGFiIGluZGV4IHNvIHRoYXQgdGhleSBjYW4gYmVcblx0ICAgIC8vIHJlc3RvcmVkIHdoZW4gdGhlIGRlc3Ryb3koKSBtZXRob2QgaXMgY2FsbGVkLlxuXG5cblx0ICAgIHRoaXMucmV2ZXJ0U2V0dGluZ3MgPSB7XG5cdCAgICAgIGlubmVySFRNTDogaW5wdXQuaW5uZXJIVE1MLFxuXHQgICAgICB0YWJJbmRleDogaW5wdXQudGFiSW5kZXhcblx0ICAgIH07XG5cdCAgICBpbnB1dC50YWJJbmRleCA9IC0xO1xuXHQgICAgaW5wdXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIHNlbGYud3JhcHBlcik7XG5cdCAgICBzZWxmLnN5bmMoZmFsc2UpO1xuXHQgICAgc2V0dGluZ3MuaXRlbXMgPSBbXTtcblx0ICAgIGRlbGV0ZSBzZXR0aW5ncy5vcHRncm91cHM7XG5cdCAgICBkZWxldGUgc2V0dGluZ3Mub3B0aW9ucztcblx0ICAgIGFkZEV2ZW50KGlucHV0LCAnaW52YWxpZCcsIGUgPT4ge1xuXHQgICAgICBpZiAoc2VsZi5pc1ZhbGlkKSB7XG5cdCAgICAgICAgc2VsZi5pc1ZhbGlkID0gZmFsc2U7XG5cdCAgICAgICAgc2VsZi5pc0ludmFsaWQgPSB0cnVlO1xuXHQgICAgICAgIHNlbGYucmVmcmVzaFN0YXRlKCk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgc2VsZi51cGRhdGVPcmlnaW5hbElucHV0KCk7XG5cdCAgICBzZWxmLnJlZnJlc2hJdGVtcygpO1xuXHQgICAgc2VsZi5jbG9zZShmYWxzZSk7XG5cdCAgICBzZWxmLmlucHV0U3RhdGUoKTtcblx0ICAgIHNlbGYuaXNTZXR1cCA9IHRydWU7XG5cblx0ICAgIGlmIChpbnB1dC5kaXNhYmxlZCkge1xuXHQgICAgICBzZWxmLmRpc2FibGUoKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHNlbGYuZW5hYmxlKCk7IC8vc2V0cyB0YWJJbmRleFxuXHQgICAgfVxuXG5cdCAgICBzZWxmLm9uKCdjaGFuZ2UnLCB0aGlzLm9uQ2hhbmdlKTtcblx0ICAgIGFkZENsYXNzZXMoaW5wdXQsICd0b21zZWxlY3RlZCcsICd0cy1oaWRkZW4tYWNjZXNzaWJsZScpO1xuXHQgICAgc2VsZi50cmlnZ2VyKCdpbml0aWFsaXplJyk7IC8vIHByZWxvYWQgb3B0aW9uc1xuXG5cdCAgICBpZiAoc2V0dGluZ3MucHJlbG9hZCA9PT0gdHJ1ZSkge1xuXHQgICAgICBzZWxmLnByZWxvYWQoKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgLyoqXG5cdCAgICogUmVnaXN0ZXIgb3B0aW9ucyBhbmQgb3B0Z3JvdXBzXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgc2V0dXBPcHRpb25zKG9wdGlvbnMgPSBbXSwgb3B0Z3JvdXBzID0gW10pIHtcblx0ICAgIC8vIGJ1aWxkIG9wdGlvbnMgdGFibGVcblx0ICAgIHRoaXMuYWRkT3B0aW9ucyhvcHRpb25zKTsgLy8gYnVpbGQgb3B0Z3JvdXAgdGFibGVcblxuXHQgICAgaXRlcmF0ZShvcHRncm91cHMsIG9wdGdyb3VwID0+IHtcblx0ICAgICAgdGhpcy5yZWdpc3Rlck9wdGlvbkdyb3VwKG9wdGdyb3VwKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBTZXRzIHVwIGRlZmF1bHQgcmVuZGVyaW5nIGZ1bmN0aW9ucy5cblx0ICAgKi9cblxuXG5cdCAgc2V0dXBUZW1wbGF0ZXMoKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cdCAgICB2YXIgZmllbGRfbGFiZWwgPSBzZWxmLnNldHRpbmdzLmxhYmVsRmllbGQ7XG5cdCAgICB2YXIgZmllbGRfb3B0Z3JvdXAgPSBzZWxmLnNldHRpbmdzLm9wdGdyb3VwTGFiZWxGaWVsZDtcblx0ICAgIHZhciB0ZW1wbGF0ZXMgPSB7XG5cdCAgICAgICdvcHRncm91cCc6IGRhdGEgPT4ge1xuXHQgICAgICAgIGxldCBvcHRncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQgICAgICAgIG9wdGdyb3VwLmNsYXNzTmFtZSA9ICdvcHRncm91cCc7XG5cdCAgICAgICAgb3B0Z3JvdXAuYXBwZW5kQ2hpbGQoZGF0YS5vcHRpb25zKTtcblx0ICAgICAgICByZXR1cm4gb3B0Z3JvdXA7XG5cdCAgICAgIH0sXG5cdCAgICAgICdvcHRncm91cF9oZWFkZXInOiAoZGF0YSwgZXNjYXBlKSA9PiB7XG5cdCAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwib3B0Z3JvdXAtaGVhZGVyXCI+JyArIGVzY2FwZShkYXRhW2ZpZWxkX29wdGdyb3VwXSkgKyAnPC9kaXY+Jztcblx0ICAgICAgfSxcblx0ICAgICAgJ29wdGlvbic6IChkYXRhLCBlc2NhcGUpID0+IHtcblx0ICAgICAgICByZXR1cm4gJzxkaXY+JyArIGVzY2FwZShkYXRhW2ZpZWxkX2xhYmVsXSkgKyAnPC9kaXY+Jztcblx0ICAgICAgfSxcblx0ICAgICAgJ2l0ZW0nOiAoZGF0YSwgZXNjYXBlKSA9PiB7XG5cdCAgICAgICAgcmV0dXJuICc8ZGl2PicgKyBlc2NhcGUoZGF0YVtmaWVsZF9sYWJlbF0pICsgJzwvZGl2Pic7XG5cdCAgICAgIH0sXG5cdCAgICAgICdvcHRpb25fY3JlYXRlJzogKGRhdGEsIGVzY2FwZSkgPT4ge1xuXHQgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImNyZWF0ZVwiPkFkZCA8c3Ryb25nPicgKyBlc2NhcGUoZGF0YS5pbnB1dCkgKyAnPC9zdHJvbmc+JmhlbGxpcDs8L2Rpdj4nO1xuXHQgICAgICB9LFxuXHQgICAgICAnbm9fcmVzdWx0cyc6ICgpID0+IHtcblx0ICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJuby1yZXN1bHRzXCI+Tm8gcmVzdWx0cyBmb3VuZDwvZGl2Pic7XG5cdCAgICAgIH0sXG5cdCAgICAgICdsb2FkaW5nJzogKCkgPT4ge1xuXHQgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInNwaW5uZXJcIj48L2Rpdj4nO1xuXHQgICAgICB9LFxuXHQgICAgICAnbm90X2xvYWRpbmcnOiAoKSA9PiB7fSxcblx0ICAgICAgJ2Ryb3Bkb3duJzogKCkgPT4ge1xuXHQgICAgICAgIHJldHVybiAnPGRpdj48L2Rpdj4nO1xuXHQgICAgICB9XG5cdCAgICB9O1xuXHQgICAgc2VsZi5zZXR0aW5ncy5yZW5kZXIgPSBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZXMsIHNlbGYuc2V0dGluZ3MucmVuZGVyKTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogTWFwcyBmaXJlZCBldmVudHMgdG8gY2FsbGJhY2tzIHByb3ZpZGVkXG5cdCAgICogaW4gdGhlIHNldHRpbmdzIHVzZWQgd2hlbiBjcmVhdGluZyB0aGUgY29udHJvbC5cblx0ICAgKi9cblxuXG5cdCAgc2V0dXBDYWxsYmFja3MoKSB7XG5cdCAgICB2YXIga2V5LCBmbjtcblx0ICAgIHZhciBjYWxsYmFja3MgPSB7XG5cdCAgICAgICdpbml0aWFsaXplJzogJ29uSW5pdGlhbGl6ZScsXG5cdCAgICAgICdjaGFuZ2UnOiAnb25DaGFuZ2UnLFxuXHQgICAgICAnaXRlbV9hZGQnOiAnb25JdGVtQWRkJyxcblx0ICAgICAgJ2l0ZW1fcmVtb3ZlJzogJ29uSXRlbVJlbW92ZScsXG5cdCAgICAgICdpdGVtX3NlbGVjdCc6ICdvbkl0ZW1TZWxlY3QnLFxuXHQgICAgICAnY2xlYXInOiAnb25DbGVhcicsXG5cdCAgICAgICdvcHRpb25fYWRkJzogJ29uT3B0aW9uQWRkJyxcblx0ICAgICAgJ29wdGlvbl9yZW1vdmUnOiAnb25PcHRpb25SZW1vdmUnLFxuXHQgICAgICAnb3B0aW9uX2NsZWFyJzogJ29uT3B0aW9uQ2xlYXInLFxuXHQgICAgICAnb3B0Z3JvdXBfYWRkJzogJ29uT3B0aW9uR3JvdXBBZGQnLFxuXHQgICAgICAnb3B0Z3JvdXBfcmVtb3ZlJzogJ29uT3B0aW9uR3JvdXBSZW1vdmUnLFxuXHQgICAgICAnb3B0Z3JvdXBfY2xlYXInOiAnb25PcHRpb25Hcm91cENsZWFyJyxcblx0ICAgICAgJ2Ryb3Bkb3duX29wZW4nOiAnb25Ecm9wZG93bk9wZW4nLFxuXHQgICAgICAnZHJvcGRvd25fY2xvc2UnOiAnb25Ecm9wZG93bkNsb3NlJyxcblx0ICAgICAgJ3R5cGUnOiAnb25UeXBlJyxcblx0ICAgICAgJ2xvYWQnOiAnb25Mb2FkJyxcblx0ICAgICAgJ2ZvY3VzJzogJ29uRm9jdXMnLFxuXHQgICAgICAnYmx1cic6ICdvbkJsdXInXG5cdCAgICB9O1xuXG5cdCAgICBmb3IgKGtleSBpbiBjYWxsYmFja3MpIHtcblx0ICAgICAgZm4gPSB0aGlzLnNldHRpbmdzW2NhbGxiYWNrc1trZXldXTtcblx0ICAgICAgaWYgKGZuKSB0aGlzLm9uKGtleSwgZm4pO1xuXHQgICAgfVxuXHQgIH1cblx0ICAvKipcblx0ICAgKiBTeW5jIHRoZSBUb20gU2VsZWN0IGluc3RhbmNlIHdpdGggdGhlIG9yaWdpbmFsIGlucHV0IG9yIHNlbGVjdFxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIHN5bmMoZ2V0X3NldHRpbmdzID0gdHJ1ZSkge1xuXHQgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cdCAgICBjb25zdCBzZXR0aW5ncyA9IGdldF9zZXR0aW5ncyA/IGdldFNldHRpbmdzKHNlbGYuaW5wdXQsIHtcblx0ICAgICAgZGVsaW1pdGVyOiBzZWxmLnNldHRpbmdzLmRlbGltaXRlclxuXHQgICAgfSkgOiBzZWxmLnNldHRpbmdzO1xuXHQgICAgc2VsZi5zZXR1cE9wdGlvbnMoc2V0dGluZ3Mub3B0aW9ucywgc2V0dGluZ3Mub3B0Z3JvdXBzKTtcblx0ICAgIHNlbGYuc2V0VmFsdWUoc2V0dGluZ3MuaXRlbXMgfHwgW10sIHRydWUpOyAvLyBzaWxlbnQgcHJldmVudHMgcmVjdXJzaW9uXG5cblx0ICAgIHNlbGYubGFzdFF1ZXJ5ID0gbnVsbDsgLy8gc28gdXBkYXRlZCBvcHRpb25zIHdpbGwgYmUgZGlzcGxheWVkIGluIGRyb3Bkb3duXG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIFRyaWdnZXJlZCB3aGVuIHRoZSBtYWluIGNvbnRyb2wgZWxlbWVudFxuXHQgICAqIGhhcyBhIGNsaWNrIGV2ZW50LlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIG9uQ2xpY2soKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cblx0ICAgIGlmIChzZWxmLmFjdGl2ZUl0ZW1zLmxlbmd0aCA+IDApIHtcblx0ICAgICAgc2VsZi5jbGVhckFjdGl2ZUl0ZW1zKCk7XG5cdCAgICAgIHNlbGYuZm9jdXMoKTtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoc2VsZi5pc0ZvY3VzZWQgJiYgc2VsZi5pc09wZW4pIHtcblx0ICAgICAgc2VsZi5ibHVyKCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBzZWxmLmZvY3VzKCk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIEBkZXByZWNhdGVkIHYxLjdcblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBvbk1vdXNlRG93bigpIHt9XG5cdCAgLyoqXG5cdCAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sIGhhcyBiZWVuIGNoYW5nZWQuXG5cdCAgICogVGhpcyBzaG91bGQgcHJvcGFnYXRlIHRoZSBldmVudCB0byB0aGUgb3JpZ2luYWwgRE9NXG5cdCAgICogaW5wdXQgLyBzZWxlY3QgZWxlbWVudC5cblx0ICAgKi9cblxuXG5cdCAgb25DaGFuZ2UoKSB7XG5cdCAgICB0cmlnZ2VyRXZlbnQodGhpcy5pbnB1dCwgJ2lucHV0Jyk7XG5cdCAgICB0cmlnZ2VyRXZlbnQodGhpcy5pbnB1dCwgJ2NoYW5nZScpO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBUcmlnZ2VyZWQgb24gPGlucHV0PiBwYXN0ZS5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBvblBhc3RlKGUpIHtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblxuXHQgICAgaWYgKHNlbGYuaXNJbnB1dEhpZGRlbiB8fCBzZWxmLmlzTG9ja2VkKSB7XG5cdCAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9IC8vIElmIGEgcmVnZXggb3Igc3RyaW5nIGlzIGluY2x1ZGVkLCB0aGlzIHdpbGwgc3BsaXQgdGhlIHBhc3RlZFxuXHQgICAgLy8gaW5wdXQgYW5kIGNyZWF0ZSBJdGVtcyBmb3IgZWFjaCBzZXBhcmF0ZSB2YWx1ZVxuXG5cblx0ICAgIGlmIChzZWxmLnNldHRpbmdzLnNwbGl0T24pIHtcblx0ICAgICAgLy8gV2FpdCBmb3IgcGFzdGVkIHRleHQgdG8gYmUgcmVjb2duaXplZCBpbiB2YWx1ZVxuXHQgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0ICAgICAgICB2YXIgcGFzdGVkVGV4dCA9IHNlbGYuaW5wdXRWYWx1ZSgpO1xuXG5cdCAgICAgICAgaWYgKCFwYXN0ZWRUZXh0Lm1hdGNoKHNlbGYuc2V0dGluZ3Muc3BsaXRPbikpIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICB2YXIgc3BsaXRJbnB1dCA9IHBhc3RlZFRleHQudHJpbSgpLnNwbGl0KHNlbGYuc2V0dGluZ3Muc3BsaXRPbik7XG5cdCAgICAgICAgaXRlcmF0ZShzcGxpdElucHV0LCBwaWVjZSA9PiB7XG5cdCAgICAgICAgICBzZWxmLmNyZWF0ZUl0ZW0ocGllY2UpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICB9LCAwKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgLyoqXG5cdCAgICogVHJpZ2dlcmVkIG9uIDxpbnB1dD4ga2V5cHJlc3MuXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgb25LZXlQcmVzcyhlKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cblx0ICAgIGlmIChzZWxmLmlzTG9ja2VkKSB7XG5cdCAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIHZhciBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSB8fCBlLndoaWNoKTtcblxuXHQgICAgaWYgKHNlbGYuc2V0dGluZ3MuY3JlYXRlICYmIHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ211bHRpJyAmJiBjaGFyYWN0ZXIgPT09IHNlbGYuc2V0dGluZ3MuZGVsaW1pdGVyKSB7XG5cdCAgICAgIHNlbGYuY3JlYXRlSXRlbSgpO1xuXHQgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgIH1cblx0ICAvKipcblx0ICAgKiBUcmlnZ2VyZWQgb24gPGlucHV0PiBrZXlkb3duLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIG9uS2V5RG93bihlKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cblx0ICAgIGlmIChzZWxmLmlzTG9ja2VkKSB7XG5cdCAgICAgIGlmIChlLmtleUNvZGUgIT09IEtFWV9UQUIpIHtcblx0ICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcblx0ICAgICAgLy8gY3RybCtBOiBzZWxlY3QgYWxsXG5cdCAgICAgIGNhc2UgS0VZX0E6XG5cdCAgICAgICAgaWYgKGlzS2V5RG93bihLRVlfU0hPUlRDVVQsIGUpKSB7XG5cdCAgICAgICAgICBpZiAoc2VsZi5jb250cm9sX2lucHV0LnZhbHVlID09ICcnKSB7XG5cdCAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuXHQgICAgICAgICAgICBzZWxmLnNlbGVjdEFsbCgpO1xuXHQgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgYnJlYWs7XG5cdCAgICAgIC8vIGVzYzogY2xvc2UgZHJvcGRvd25cblxuXHQgICAgICBjYXNlIEtFWV9FU0M6XG5cdCAgICAgICAgaWYgKHNlbGYuaXNPcGVuKSB7XG5cdCAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlLCB0cnVlKTtcblx0ICAgICAgICAgIHNlbGYuY2xvc2UoKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBzZWxmLmNsZWFyQWN0aXZlSXRlbXMoKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIC8vIGRvd246IG9wZW4gZHJvcGRvd24gb3IgbW92ZSBzZWxlY3Rpb24gZG93blxuXG5cdCAgICAgIGNhc2UgS0VZX0RPV046XG5cdCAgICAgICAgaWYgKCFzZWxmLmlzT3BlbiAmJiBzZWxmLmhhc09wdGlvbnMpIHtcblx0ICAgICAgICAgIHNlbGYub3BlbigpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5hY3RpdmVPcHRpb24pIHtcblx0ICAgICAgICAgIGxldCBuZXh0ID0gc2VsZi5nZXRBZGphY2VudChzZWxmLmFjdGl2ZU9wdGlvbiwgMSk7XG5cdCAgICAgICAgICBpZiAobmV4dCkgc2VsZi5zZXRBY3RpdmVPcHRpb24obmV4dCk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICAvLyB1cDogbW92ZSBzZWxlY3Rpb24gdXBcblxuXHQgICAgICBjYXNlIEtFWV9VUDpcblx0ICAgICAgICBpZiAoc2VsZi5hY3RpdmVPcHRpb24pIHtcblx0ICAgICAgICAgIGxldCBwcmV2ID0gc2VsZi5nZXRBZGphY2VudChzZWxmLmFjdGl2ZU9wdGlvbiwgLTEpO1xuXHQgICAgICAgICAgaWYgKHByZXYpIHNlbGYuc2V0QWN0aXZlT3B0aW9uKHByZXYpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgLy8gcmV0dXJuOiBzZWxlY3QgYWN0aXZlIG9wdGlvblxuXG5cdCAgICAgIGNhc2UgS0VZX1JFVFVSTjpcblx0ICAgICAgICBpZiAoc2VsZi5jYW5TZWxlY3Qoc2VsZi5hY3RpdmVPcHRpb24pKSB7XG5cdCAgICAgICAgICBzZWxmLm9uT3B0aW9uU2VsZWN0KGUsIHNlbGYuYWN0aXZlT3B0aW9uKTtcblx0ICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpOyAvLyBpZiB0aGUgb3B0aW9uX2NyZWF0ZT1udWxsLCB0aGUgZHJvcGRvd24gbWlnaHQgYmUgY2xvc2VkXG5cdCAgICAgICAgfSBlbHNlIGlmIChzZWxmLnNldHRpbmdzLmNyZWF0ZSAmJiBzZWxmLmNyZWF0ZUl0ZW0oKSkge1xuXHQgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICAvLyBsZWZ0OiBtb2RpZml5IGl0ZW0gc2VsZWN0aW9uIHRvIHRoZSBsZWZ0XG5cblx0ICAgICAgY2FzZSBLRVlfTEVGVDpcblx0ICAgICAgICBzZWxmLmFkdmFuY2VTZWxlY3Rpb24oLTEsIGUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgLy8gcmlnaHQ6IG1vZGlmaXkgaXRlbSBzZWxlY3Rpb24gdG8gdGhlIHJpZ2h0XG5cblx0ICAgICAgY2FzZSBLRVlfUklHSFQ6XG5cdCAgICAgICAgc2VsZi5hZHZhbmNlU2VsZWN0aW9uKDEsIGUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgLy8gdGFiOiBzZWxlY3QgYWN0aXZlIG9wdGlvbiBhbmQvb3IgY3JlYXRlIGl0ZW1cblxuXHQgICAgICBjYXNlIEtFWV9UQUI6XG5cdCAgICAgICAgaWYgKHNlbGYuc2V0dGluZ3Muc2VsZWN0T25UYWIpIHtcblx0ICAgICAgICAgIGlmIChzZWxmLmNhblNlbGVjdChzZWxmLmFjdGl2ZU9wdGlvbikpIHtcblx0ICAgICAgICAgICAgc2VsZi5vbk9wdGlvblNlbGVjdChlLCBzZWxmLmFjdGl2ZU9wdGlvbik7IC8vIHByZXZlbnQgZGVmYXVsdCBbdGFiXSBiZWhhdmlvdXIgb2YganVtcCB0byB0aGUgbmV4dCBmaWVsZFxuXHQgICAgICAgICAgICAvLyBpZiBzZWxlY3QgaXNGdWxsLCB0aGVuIHRoZSBkcm9wZG93biB3b24ndCBiZSBvcGVuIGFuZCBbdGFiXSB3aWxsIHdvcmsgbm9ybWFsbHlcblxuXHQgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcblx0ICAgICAgICAgIH1cblxuXHQgICAgICAgICAgaWYgKHNlbGYuc2V0dGluZ3MuY3JlYXRlICYmIHNlbGYuY3JlYXRlSXRlbSgpKSB7XG5cdCAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgLy8gZGVsZXRlfGJhY2tzcGFjZTogZGVsZXRlIGl0ZW1zXG5cblx0ICAgICAgY2FzZSBLRVlfQkFDS1NQQUNFOlxuXHQgICAgICBjYXNlIEtFWV9ERUxFVEU6XG5cdCAgICAgICAgc2VsZi5kZWxldGVTZWxlY3Rpb24oZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfSAvLyBkb24ndCBlbnRlciB0ZXh0IGluIHRoZSBjb250cm9sX2lucHV0IHdoZW4gYWN0aXZlIGl0ZW1zIGFyZSBzZWxlY3RlZFxuXG5cblx0ICAgIGlmIChzZWxmLmlzSW5wdXRIaWRkZW4gJiYgIWlzS2V5RG93bihLRVlfU0hPUlRDVVQsIGUpKSB7XG5cdCAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuXHQgICAgfVxuXHQgIH1cblx0ICAvKipcblx0ICAgKiBUcmlnZ2VyZWQgb24gPGlucHV0PiBrZXl1cC5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBvbklucHV0KGUpIHtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblxuXHQgICAgaWYgKHNlbGYuaXNMb2NrZWQpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgdmFsdWUgPSBzZWxmLmlucHV0VmFsdWUoKTtcblxuXHQgICAgaWYgKHNlbGYubGFzdFZhbHVlICE9PSB2YWx1ZSkge1xuXHQgICAgICBzZWxmLmxhc3RWYWx1ZSA9IHZhbHVlO1xuXG5cdCAgICAgIGlmIChzZWxmLnNldHRpbmdzLnNob3VsZExvYWQuY2FsbChzZWxmLCB2YWx1ZSkpIHtcblx0ICAgICAgICBzZWxmLmxvYWQodmFsdWUpO1xuXHQgICAgICB9XG5cblx0ICAgICAgc2VsZi5yZWZyZXNoT3B0aW9ucygpO1xuXHQgICAgICBzZWxmLnRyaWdnZXIoJ3R5cGUnLCB2YWx1ZSk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIFRyaWdnZXJlZCBvbiA8aW5wdXQ+IGZvY3VzLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIG9uRm9jdXMoZSkge1xuXHQgICAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgICAgdmFyIHdhc0ZvY3VzZWQgPSBzZWxmLmlzRm9jdXNlZDtcblxuXHQgICAgaWYgKHNlbGYuaXNEaXNhYmxlZCkge1xuXHQgICAgICBzZWxmLmJsdXIoKTtcblx0ICAgICAgcHJldmVudERlZmF1bHQoZSk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgaWYgKHNlbGYuaWdub3JlRm9jdXMpIHJldHVybjtcblx0ICAgIHNlbGYuaXNGb2N1c2VkID0gdHJ1ZTtcblx0ICAgIGlmIChzZWxmLnNldHRpbmdzLnByZWxvYWQgPT09ICdmb2N1cycpIHNlbGYucHJlbG9hZCgpO1xuXHQgICAgaWYgKCF3YXNGb2N1c2VkKSBzZWxmLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cblx0ICAgIGlmICghc2VsZi5hY3RpdmVJdGVtcy5sZW5ndGgpIHtcblx0ICAgICAgc2VsZi5zaG93SW5wdXQoKTtcblx0ICAgICAgc2VsZi5yZWZyZXNoT3B0aW9ucyghIXNlbGYuc2V0dGluZ3Mub3Blbk9uRm9jdXMpO1xuXHQgICAgfVxuXG5cdCAgICBzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBUcmlnZ2VyZWQgb24gPGlucHV0PiBibHVyLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIG9uQmx1cihlKSB7XG5cdCAgICBpZiAoZG9jdW1lbnQuaGFzRm9jdXMoKSA9PT0gZmFsc2UpIHJldHVybjtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgIGlmICghc2VsZi5pc0ZvY3VzZWQpIHJldHVybjtcblx0ICAgIHNlbGYuaXNGb2N1c2VkID0gZmFsc2U7XG5cdCAgICBzZWxmLmlnbm9yZUZvY3VzID0gZmFsc2U7XG5cblx0ICAgIHZhciBkZWFjdGl2YXRlID0gKCkgPT4ge1xuXHQgICAgICBzZWxmLmNsb3NlKCk7XG5cdCAgICAgIHNlbGYuc2V0QWN0aXZlSXRlbSgpO1xuXHQgICAgICBzZWxmLnNldENhcmV0KHNlbGYuaXRlbXMubGVuZ3RoKTtcblx0ICAgICAgc2VsZi50cmlnZ2VyKCdibHVyJyk7XG5cdCAgICB9O1xuXG5cdCAgICBpZiAoc2VsZi5zZXR0aW5ncy5jcmVhdGUgJiYgc2VsZi5zZXR0aW5ncy5jcmVhdGVPbkJsdXIpIHtcblx0ICAgICAgc2VsZi5jcmVhdGVJdGVtKG51bGwsIGZhbHNlLCBkZWFjdGl2YXRlKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGRlYWN0aXZhdGUoKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgLyoqXG5cdCAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGFuIG9wdGlvblxuXHQgICAqIGluIHRoZSBhdXRvY29tcGxldGUgZHJvcGRvd24gbWVudS5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBvbk9wdGlvblNlbGVjdChldnQsIG9wdGlvbikge1xuXHQgICAgdmFyIHZhbHVlLFxuXHQgICAgICAgIHNlbGYgPSB0aGlzOyAvLyBzaG91bGQgbm90IGJlIHBvc3NpYmxlIHRvIHRyaWdnZXIgYSBvcHRpb24gdW5kZXIgYSBkaXNhYmxlZCBvcHRncm91cFxuXG5cdCAgICBpZiAob3B0aW9uLnBhcmVudEVsZW1lbnQgJiYgb3B0aW9uLnBhcmVudEVsZW1lbnQubWF0Y2hlcygnW2RhdGEtZGlzYWJsZWRdJykpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICBpZiAob3B0aW9uLmNsYXNzTGlzdC5jb250YWlucygnY3JlYXRlJykpIHtcblx0ICAgICAgc2VsZi5jcmVhdGVJdGVtKG51bGwsIHRydWUsICgpID0+IHtcblx0ICAgICAgICBpZiAoc2VsZi5zZXR0aW5ncy5jbG9zZUFmdGVyU2VsZWN0KSB7XG5cdCAgICAgICAgICBzZWxmLmNsb3NlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHZhbHVlID0gb3B0aW9uLmRhdGFzZXQudmFsdWU7XG5cblx0ICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICBzZWxmLmxhc3RRdWVyeSA9IG51bGw7XG5cdCAgICAgICAgc2VsZi5hZGRJdGVtKHZhbHVlKTtcblxuXHQgICAgICAgIGlmIChzZWxmLnNldHRpbmdzLmNsb3NlQWZ0ZXJTZWxlY3QpIHtcblx0ICAgICAgICAgIHNlbGYuY2xvc2UoKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAoIXNlbGYuc2V0dGluZ3MuaGlkZVNlbGVjdGVkICYmIGV2dC50eXBlICYmIC9jbGljay8udGVzdChldnQudHlwZSkpIHtcblx0ICAgICAgICAgIHNlbGYuc2V0QWN0aXZlT3B0aW9uKG9wdGlvbik7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIFJldHVybiB0cnVlIGlmIHRoZSBnaXZlbiBvcHRpb24gY2FuIGJlIHNlbGVjdGVkXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgY2FuU2VsZWN0KG9wdGlvbikge1xuXHQgICAgaWYgKHRoaXMuaXNPcGVuICYmIG9wdGlvbiAmJiB0aGlzLmRyb3Bkb3duX2NvbnRlbnQuY29udGFpbnMob3B0aW9uKSkge1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYW4gaXRlbVxuXHQgICAqIHRoYXQgaGFzIGJlZW4gc2VsZWN0ZWQuXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgb25JdGVtU2VsZWN0KGV2dCwgaXRlbSkge1xuXHQgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG5cdCAgICBpZiAoIXNlbGYuaXNMb2NrZWQgJiYgc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnbXVsdGknKSB7XG5cdCAgICAgIHByZXZlbnREZWZhdWx0KGV2dCk7XG5cdCAgICAgIHNlbGYuc2V0QWN0aXZlSXRlbShpdGVtLCBldnQpO1xuXHQgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGludm9rZVxuXHQgICAqIHRoZSB1c2VyLXByb3ZpZGVkIG9wdGlvbiBwcm92aWRlciAvIGxvYWRlclxuXHQgICAqXG5cdCAgICogTm90ZSwgdGhlcmUgaXMgYSBzdWJ0bGUgZGlmZmVyZW5jZSBiZXR3ZWVuXG5cdCAgICogdGhpcy5jYW5Mb2FkKCkgYW5kIHRoaXMuc2V0dGluZ3Muc2hvdWxkTG9hZCgpO1xuXHQgICAqXG5cdCAgICpcdC0gc2V0dGluZ3Muc2hvdWxkTG9hZCgpIGlzIGEgdXNlci1pbnB1dCB2YWxpZGF0b3IuXG5cdCAgICpcdFdoZW4gZmFsc2UgaXMgcmV0dXJuZWQsIHRoZSBub3RfbG9hZGluZyB0ZW1wbGF0ZVxuXHQgICAqXHR3aWxsIGJlIGFkZGVkIHRvIHRoZSBkcm9wZG93blxuXHQgICAqXG5cdCAgICpcdC0gY2FuTG9hZCgpIGlzIGxvd2VyIGxldmVsIHZhbGlkYXRvciB0aGF0IGNoZWNrc1xuXHQgICAqIFx0dGhlIFRvbSBTZWxlY3QgaW5zdGFuY2UuIFRoZXJlIGlzIG5vIGluaGVyZW50IHVzZXJcblx0ICAgKlx0ZmVlZGJhY2sgd2hlbiBjYW5Mb2FkIHJldHVybnMgZmFsc2Vcblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBjYW5Mb2FkKHZhbHVlKSB7XG5cdCAgICBpZiAoIXRoaXMuc2V0dGluZ3MubG9hZCkgcmV0dXJuIGZhbHNlO1xuXHQgICAgaWYgKHRoaXMubG9hZGVkU2VhcmNoZXMuaGFzT3duUHJvcGVydHkodmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogSW52b2tlcyB0aGUgdXNlci1wcm92aWRlZCBvcHRpb24gcHJvdmlkZXIgLyBsb2FkZXIuXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgbG9hZCh2YWx1ZSkge1xuXHQgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cdCAgICBpZiAoIXNlbGYuY2FuTG9hZCh2YWx1ZSkpIHJldHVybjtcblx0ICAgIGFkZENsYXNzZXMoc2VsZi53cmFwcGVyLCBzZWxmLnNldHRpbmdzLmxvYWRpbmdDbGFzcyk7XG5cdCAgICBzZWxmLmxvYWRpbmcrKztcblx0ICAgIGNvbnN0IGNhbGxiYWNrID0gc2VsZi5sb2FkQ2FsbGJhY2suYmluZChzZWxmKTtcblx0ICAgIHNlbGYuc2V0dGluZ3MubG9hZC5jYWxsKHNlbGYsIHZhbHVlLCBjYWxsYmFjayk7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIEludm9rZWQgYnkgdGhlIHVzZXItcHJvdmlkZWQgb3B0aW9uIHByb3ZpZGVyXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgbG9hZENhbGxiYWNrKG9wdGlvbnMsIG9wdGdyb3Vwcykge1xuXHQgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cdCAgICBzZWxmLmxvYWRpbmcgPSBNYXRoLm1heChzZWxmLmxvYWRpbmcgLSAxLCAwKTtcblx0ICAgIHNlbGYubGFzdFF1ZXJ5ID0gbnVsbDtcblx0ICAgIHNlbGYuY2xlYXJBY3RpdmVPcHRpb24oKTsgLy8gd2hlbiBuZXcgcmVzdWx0cyBsb2FkLCBmb2N1cyBzaG91bGQgYmUgb24gZmlyc3Qgb3B0aW9uXG5cblx0ICAgIHNlbGYuc2V0dXBPcHRpb25zKG9wdGlvbnMsIG9wdGdyb3Vwcyk7XG5cdCAgICBzZWxmLnJlZnJlc2hPcHRpb25zKHNlbGYuaXNGb2N1c2VkICYmICFzZWxmLmlzSW5wdXRIaWRkZW4pO1xuXG5cdCAgICBpZiAoIXNlbGYubG9hZGluZykge1xuXHQgICAgICByZW1vdmVDbGFzc2VzKHNlbGYud3JhcHBlciwgc2VsZi5zZXR0aW5ncy5sb2FkaW5nQ2xhc3MpO1xuXHQgICAgfVxuXG5cdCAgICBzZWxmLnRyaWdnZXIoJ2xvYWQnLCBvcHRpb25zLCBvcHRncm91cHMpO1xuXHQgIH1cblxuXHQgIHByZWxvYWQoKSB7XG5cdCAgICB2YXIgY2xhc3NMaXN0ID0gdGhpcy53cmFwcGVyLmNsYXNzTGlzdDtcblx0ICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ3ByZWxvYWRlZCcpKSByZXR1cm47XG5cdCAgICBjbGFzc0xpc3QuYWRkKCdwcmVsb2FkZWQnKTtcblx0ICAgIHRoaXMubG9hZCgnJyk7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIFNldHMgdGhlIGlucHV0IGZpZWxkIG9mIHRoZSBjb250cm9sIHRvIHRoZSBzcGVjaWZpZWQgdmFsdWUuXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgc2V0VGV4dGJveFZhbHVlKHZhbHVlID0gJycpIHtcblx0ICAgIHZhciBpbnB1dCA9IHRoaXMuY29udHJvbF9pbnB1dDtcblx0ICAgIHZhciBjaGFuZ2VkID0gaW5wdXQudmFsdWUgIT09IHZhbHVlO1xuXG5cdCAgICBpZiAoY2hhbmdlZCkge1xuXHQgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuXHQgICAgICB0cmlnZ2VyRXZlbnQoaW5wdXQsICd1cGRhdGUnKTtcblx0ICAgICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcblx0ICAgIH1cblx0ICB9XG5cdCAgLyoqXG5cdCAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuIElmIG11bHRpcGxlIGl0ZW1zXG5cdCAgICogY2FuIGJlIHNlbGVjdGVkIChlLmcuIDxzZWxlY3QgbXVsdGlwbGU+KSwgdGhpcyByZXR1cm5zXG5cdCAgICogYW4gYXJyYXkuIElmIG9ubHkgb25lIGl0ZW0gY2FuIGJlIHNlbGVjdGVkLCB0aGlzXG5cdCAgICogcmV0dXJucyBhIHN0cmluZy5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBnZXRWYWx1ZSgpIHtcblx0ICAgIGlmICh0aGlzLmlzX3NlbGVjdF90YWcgJiYgdGhpcy5pbnB1dC5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0aGlzLml0ZW1zLmpvaW4odGhpcy5zZXR0aW5ncy5kZWxpbWl0ZXIpO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBSZXNldHMgdGhlIHNlbGVjdGVkIGl0ZW1zIHRvIHRoZSBnaXZlbiB2YWx1ZS5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBzZXRWYWx1ZSh2YWx1ZSwgc2lsZW50KSB7XG5cdCAgICB2YXIgZXZlbnRzID0gc2lsZW50ID8gW10gOiBbJ2NoYW5nZSddO1xuXHQgICAgZGVib3VuY2VfZXZlbnRzKHRoaXMsIGV2ZW50cywgKCkgPT4ge1xuXHQgICAgICB0aGlzLmNsZWFyKHNpbGVudCk7XG5cdCAgICAgIHRoaXMuYWRkSXRlbXModmFsdWUsIHNpbGVudCk7XG5cdCAgICB9KTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogUmVzZXRzIHRoZSBudW1iZXIgb2YgbWF4IGl0ZW1zIHRvIHRoZSBnaXZlbiB2YWx1ZVxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIHNldE1heEl0ZW1zKHZhbHVlKSB7XG5cdCAgICBpZiAodmFsdWUgPT09IDApIHZhbHVlID0gbnVsbDsgLy9yZXNldCB0byB1bmxpbWl0ZWQgaXRlbXMuXG5cblx0ICAgIHRoaXMuc2V0dGluZ3MubWF4SXRlbXMgPSB2YWx1ZTtcblx0ICAgIHRoaXMucmVmcmVzaFN0YXRlKCk7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIFNldHMgdGhlIHNlbGVjdGVkIGl0ZW0uXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgc2V0QWN0aXZlSXRlbShpdGVtLCBlKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cdCAgICB2YXIgZXZlbnROYW1lO1xuXHQgICAgdmFyIGksIGJlZ2luLCBlbmQsIHN3YXA7XG5cdCAgICB2YXIgbGFzdDtcblx0ICAgIGlmIChzZWxmLnNldHRpbmdzLm1vZGUgPT09ICdzaW5nbGUnKSByZXR1cm47IC8vIGNsZWFyIHRoZSBhY3RpdmUgc2VsZWN0aW9uXG5cblx0ICAgIGlmICghaXRlbSkge1xuXHQgICAgICBzZWxmLmNsZWFyQWN0aXZlSXRlbXMoKTtcblxuXHQgICAgICBpZiAoc2VsZi5pc0ZvY3VzZWQpIHtcblx0ICAgICAgICBzZWxmLnNob3dJbnB1dCgpO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfSAvLyBtb2RpZnkgc2VsZWN0aW9uXG5cblxuXHQgICAgZXZlbnROYW1lID0gZSAmJiBlLnR5cGUudG9Mb3dlckNhc2UoKTtcblxuXHQgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2NsaWNrJyAmJiBpc0tleURvd24oJ3NoaWZ0S2V5JywgZSkgJiYgc2VsZi5hY3RpdmVJdGVtcy5sZW5ndGgpIHtcblx0ICAgICAgbGFzdCA9IHNlbGYuZ2V0TGFzdEFjdGl2ZSgpO1xuXHQgICAgICBiZWdpbiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoc2VsZi5jb250cm9sLmNoaWxkcmVuLCBsYXN0KTtcblx0ICAgICAgZW5kID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChzZWxmLmNvbnRyb2wuY2hpbGRyZW4sIGl0ZW0pO1xuXG5cdCAgICAgIGlmIChiZWdpbiA+IGVuZCkge1xuXHQgICAgICAgIHN3YXAgPSBiZWdpbjtcblx0ICAgICAgICBiZWdpbiA9IGVuZDtcblx0ICAgICAgICBlbmQgPSBzd2FwO1xuXHQgICAgICB9XG5cblx0ICAgICAgZm9yIChpID0gYmVnaW47IGkgPD0gZW5kOyBpKyspIHtcblx0ICAgICAgICBpdGVtID0gc2VsZi5jb250cm9sLmNoaWxkcmVuW2ldO1xuXG5cdCAgICAgICAgaWYgKHNlbGYuYWN0aXZlSXRlbXMuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcblx0ICAgICAgICAgIHNlbGYuc2V0QWN0aXZlSXRlbUNsYXNzKGl0ZW0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuXHQgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdjbGljaycgJiYgaXNLZXlEb3duKEtFWV9TSE9SVENVVCwgZSkgfHwgZXZlbnROYW1lID09PSAna2V5ZG93bicgJiYgaXNLZXlEb3duKCdzaGlmdEtleScsIGUpKSB7XG5cdCAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0ICAgICAgICBzZWxmLnJlbW92ZUFjdGl2ZUl0ZW0oaXRlbSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5zZXRBY3RpdmVJdGVtQ2xhc3MoaXRlbSk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHNlbGYuY2xlYXJBY3RpdmVJdGVtcygpO1xuXHQgICAgICBzZWxmLnNldEFjdGl2ZUl0ZW1DbGFzcyhpdGVtKTtcblx0ICAgIH0gLy8gZW5zdXJlIGNvbnRyb2wgaGFzIGZvY3VzXG5cblxuXHQgICAgc2VsZi5oaWRlSW5wdXQoKTtcblxuXHQgICAgaWYgKCFzZWxmLmlzRm9jdXNlZCkge1xuXHQgICAgICBzZWxmLmZvY3VzKCk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIFNldCB0aGUgYWN0aXZlIGFuZCBsYXN0LWFjdGl2ZSBjbGFzc2VzXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgc2V0QWN0aXZlSXRlbUNsYXNzKGl0ZW0pIHtcblx0ICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXHQgICAgY29uc3QgbGFzdF9hY3RpdmUgPSBzZWxmLmNvbnRyb2wucXVlcnlTZWxlY3RvcignLmxhc3QtYWN0aXZlJyk7XG5cdCAgICBpZiAobGFzdF9hY3RpdmUpIHJlbW92ZUNsYXNzZXMobGFzdF9hY3RpdmUsICdsYXN0LWFjdGl2ZScpO1xuXHQgICAgYWRkQ2xhc3NlcyhpdGVtLCAnYWN0aXZlIGxhc3QtYWN0aXZlJyk7XG5cdCAgICBzZWxmLnRyaWdnZXIoJ2l0ZW1fc2VsZWN0JywgaXRlbSk7XG5cblx0ICAgIGlmIChzZWxmLmFjdGl2ZUl0ZW1zLmluZGV4T2YoaXRlbSkgPT0gLTEpIHtcblx0ICAgICAgc2VsZi5hY3RpdmVJdGVtcy5wdXNoKGl0ZW0pO1xuXHQgICAgfVxuXHQgIH1cblx0ICAvKipcblx0ICAgKiBSZW1vdmUgYWN0aXZlIGl0ZW1cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICByZW1vdmVBY3RpdmVJdGVtKGl0ZW0pIHtcblx0ICAgIHZhciBpZHggPSB0aGlzLmFjdGl2ZUl0ZW1zLmluZGV4T2YoaXRlbSk7XG5cdCAgICB0aGlzLmFjdGl2ZUl0ZW1zLnNwbGljZShpZHgsIDEpO1xuXHQgICAgcmVtb3ZlQ2xhc3NlcyhpdGVtLCAnYWN0aXZlJyk7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIENsZWFycyBhbGwgdGhlIGFjdGl2ZSBpdGVtc1xuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIGNsZWFyQWN0aXZlSXRlbXMoKSB7XG5cdCAgICByZW1vdmVDbGFzc2VzKHRoaXMuYWN0aXZlSXRlbXMsICdhY3RpdmUnKTtcblx0ICAgIHRoaXMuYWN0aXZlSXRlbXMgPSBbXTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogU2V0cyB0aGUgc2VsZWN0ZWQgaXRlbSBpbiB0aGUgZHJvcGRvd24gbWVudVxuXHQgICAqIG9mIGF2YWlsYWJsZSBvcHRpb25zLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIHNldEFjdGl2ZU9wdGlvbihvcHRpb24pIHtcblx0ICAgIGlmIChvcHRpb24gPT09IHRoaXMuYWN0aXZlT3B0aW9uKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5jbGVhckFjdGl2ZU9wdGlvbigpO1xuXHQgICAgaWYgKCFvcHRpb24pIHJldHVybjtcblx0ICAgIHRoaXMuYWN0aXZlT3B0aW9uID0gb3B0aW9uO1xuXHQgICAgc2V0QXR0cih0aGlzLmZvY3VzX25vZGUsIHtcblx0ICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2lkJylcblx0ICAgIH0pO1xuXHQgICAgc2V0QXR0cihvcHRpb24sIHtcblx0ICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZSdcblx0ICAgIH0pO1xuXHQgICAgYWRkQ2xhc3NlcyhvcHRpb24sICdhY3RpdmUnKTtcblx0ICAgIHRoaXMuc2Nyb2xsVG9PcHRpb24ob3B0aW9uKTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogU2V0cyB0aGUgZHJvcGRvd25fY29udGVudCBzY3JvbGxUb3AgdG8gZGlzcGxheSB0aGUgb3B0aW9uXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgc2Nyb2xsVG9PcHRpb24ob3B0aW9uLCBiZWhhdmlvcikge1xuXHQgICAgaWYgKCFvcHRpb24pIHJldHVybjtcblx0ICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmRyb3Bkb3duX2NvbnRlbnQ7XG5cdCAgICBjb25zdCBoZWlnaHRfbWVudSA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuXHQgICAgY29uc3Qgc2Nyb2xsVG9wID0gY29udGVudC5zY3JvbGxUb3AgfHwgMDtcblx0ICAgIGNvbnN0IGhlaWdodF9pdGVtID0gb3B0aW9uLm9mZnNldEhlaWdodDtcblx0ICAgIGNvbnN0IHkgPSBvcHRpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBzY3JvbGxUb3A7XG5cblx0ICAgIGlmICh5ICsgaGVpZ2h0X2l0ZW0gPiBoZWlnaHRfbWVudSArIHNjcm9sbFRvcCkge1xuXHQgICAgICB0aGlzLnNjcm9sbCh5IC0gaGVpZ2h0X21lbnUgKyBoZWlnaHRfaXRlbSwgYmVoYXZpb3IpO1xuXHQgICAgfSBlbHNlIGlmICh5IDwgc2Nyb2xsVG9wKSB7XG5cdCAgICAgIHRoaXMuc2Nyb2xsKHksIGJlaGF2aW9yKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgLyoqXG5cdCAgICogU2Nyb2xsIHRoZSBkcm9wZG93biB0byB0aGUgZ2l2ZW4gcG9zaXRpb25cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBzY3JvbGwoc2Nyb2xsVG9wLCBiZWhhdmlvcikge1xuXHQgICAgY29uc3QgY29udGVudCA9IHRoaXMuZHJvcGRvd25fY29udGVudDtcblxuXHQgICAgaWYgKGJlaGF2aW9yKSB7XG5cdCAgICAgIGNvbnRlbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBiZWhhdmlvcjtcblx0ICAgIH1cblxuXHQgICAgY29udGVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cdCAgICBjb250ZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJyc7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIENsZWFycyB0aGUgYWN0aXZlIG9wdGlvblxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIGNsZWFyQWN0aXZlT3B0aW9uKCkge1xuXHQgICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XG5cdCAgICAgIHJlbW92ZUNsYXNzZXModGhpcy5hY3RpdmVPcHRpb24sICdhY3RpdmUnKTtcblx0ICAgICAgc2V0QXR0cih0aGlzLmFjdGl2ZU9wdGlvbiwge1xuXHQgICAgICAgICdhcmlhLXNlbGVjdGVkJzogbnVsbFxuXHQgICAgICB9KTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5hY3RpdmVPcHRpb24gPSBudWxsO1xuXHQgICAgc2V0QXR0cih0aGlzLmZvY3VzX25vZGUsIHtcblx0ICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IG51bGxcblx0ICAgIH0pO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBTZWxlY3RzIGFsbCBpdGVtcyAoQ1RSTCArIEEpLlxuXHQgICAqL1xuXG5cblx0ICBzZWxlY3RBbGwoKSB7XG5cdCAgICBjb25zdCBzZWxmID0gdGhpcztcblx0ICAgIGlmIChzZWxmLnNldHRpbmdzLm1vZGUgPT09ICdzaW5nbGUnKSByZXR1cm47XG5cdCAgICBjb25zdCBhY3RpdmVJdGVtcyA9IHNlbGYuY29udHJvbENoaWxkcmVuKCk7XG5cdCAgICBpZiAoIWFjdGl2ZUl0ZW1zLmxlbmd0aCkgcmV0dXJuO1xuXHQgICAgc2VsZi5oaWRlSW5wdXQoKTtcblx0ICAgIHNlbGYuY2xvc2UoKTtcblx0ICAgIHNlbGYuYWN0aXZlSXRlbXMgPSBhY3RpdmVJdGVtcztcblx0ICAgIGl0ZXJhdGUoYWN0aXZlSXRlbXMsIGl0ZW0gPT4ge1xuXHQgICAgICBzZWxmLnNldEFjdGl2ZUl0ZW1DbGFzcyhpdGVtKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjb250cm9sX2lucHV0IHNob3VsZCBiZSBpbiBhIGhpZGRlbiBvciB2aXNpYmxlIHN0YXRlXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgaW5wdXRTdGF0ZSgpIHtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgIGlmICghc2VsZi5jb250cm9sLmNvbnRhaW5zKHNlbGYuY29udHJvbF9pbnB1dCkpIHJldHVybjtcblx0ICAgIHNldEF0dHIoc2VsZi5jb250cm9sX2lucHV0LCB7XG5cdCAgICAgIHBsYWNlaG9sZGVyOiBzZWxmLnNldHRpbmdzLnBsYWNlaG9sZGVyXG5cdCAgICB9KTtcblxuXHQgICAgaWYgKHNlbGYuYWN0aXZlSXRlbXMubGVuZ3RoID4gMCB8fCAhc2VsZi5pc0ZvY3VzZWQgJiYgc2VsZi5zZXR0aW5ncy5oaWRlUGxhY2Vob2xkZXIgJiYgc2VsZi5pdGVtcy5sZW5ndGggPiAwKSB7XG5cdCAgICAgIHNlbGYuc2V0VGV4dGJveFZhbHVlKCk7XG5cdCAgICAgIHNlbGYuaXNJbnB1dEhpZGRlbiA9IHRydWU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAoc2VsZi5zZXR0aW5ncy5oaWRlUGxhY2Vob2xkZXIgJiYgc2VsZi5pdGVtcy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgc2V0QXR0cihzZWxmLmNvbnRyb2xfaW5wdXQsIHtcblx0ICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJ1xuXHQgICAgICAgIH0pO1xuXHQgICAgICB9XG5cblx0ICAgICAgc2VsZi5pc0lucHV0SGlkZGVuID0gZmFsc2U7XG5cdCAgICB9XG5cblx0ICAgIHNlbGYud3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dC1oaWRkZW4nLCBzZWxmLmlzSW5wdXRIaWRkZW4pO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBIaWRlcyB0aGUgaW5wdXQgZWxlbWVudCBvdXQgb2Ygdmlldywgd2hpbGVcblx0ICAgKiByZXRhaW5pbmcgaXRzIGZvY3VzLlxuXHQgICAqIEBkZXByZWNhdGVkIDEuM1xuXHQgICAqL1xuXG5cblx0ICBoaWRlSW5wdXQoKSB7XG5cdCAgICB0aGlzLmlucHV0U3RhdGUoKTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogUmVzdG9yZXMgaW5wdXQgdmlzaWJpbGl0eS5cblx0ICAgKiBAZGVwcmVjYXRlZCAxLjNcblx0ICAgKi9cblxuXG5cdCAgc2hvd0lucHV0KCkge1xuXHQgICAgdGhpcy5pbnB1dFN0YXRlKCk7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIEdldCB0aGUgaW5wdXQgdmFsdWVcblx0ICAgKi9cblxuXG5cdCAgaW5wdXRWYWx1ZSgpIHtcblx0ICAgIHJldHVybiB0aGlzLmNvbnRyb2xfaW5wdXQudmFsdWUudHJpbSgpO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBHaXZlcyB0aGUgY29udHJvbCBmb2N1cy5cblx0ICAgKi9cblxuXG5cdCAgZm9jdXMoKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cdCAgICBpZiAoc2VsZi5pc0Rpc2FibGVkKSByZXR1cm47XG5cdCAgICBzZWxmLmlnbm9yZUZvY3VzID0gdHJ1ZTtcblxuXHQgICAgaWYgKHNlbGYuY29udHJvbF9pbnB1dC5vZmZzZXRXaWR0aCkge1xuXHQgICAgICBzZWxmLmNvbnRyb2xfaW5wdXQuZm9jdXMoKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHNlbGYuZm9jdXNfbm9kZS5mb2N1cygpO1xuXHQgICAgfVxuXG5cdCAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0ICAgICAgc2VsZi5pZ25vcmVGb2N1cyA9IGZhbHNlO1xuXHQgICAgICBzZWxmLm9uRm9jdXMoKTtcblx0ICAgIH0sIDApO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBGb3JjZXMgdGhlIGNvbnRyb2wgb3V0IG9mIGZvY3VzLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIGJsdXIoKSB7XG5cdCAgICB0aGlzLmZvY3VzX25vZGUuYmx1cigpO1xuXHQgICAgdGhpcy5vbkJsdXIoKTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgc2NvcmVzIGFuIG9iamVjdFxuXHQgICAqIHRvIHNob3cgaG93IGdvb2Qgb2YgYSBtYXRjaCBpdCBpcyB0byB0aGVcblx0ICAgKiBwcm92aWRlZCBxdWVyeS5cblx0ICAgKlxuXHQgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuXHQgICAqL1xuXG5cblx0ICBnZXRTY29yZUZ1bmN0aW9uKHF1ZXJ5KSB7XG5cdCAgICByZXR1cm4gdGhpcy5zaWZ0ZXIuZ2V0U2NvcmVGdW5jdGlvbihxdWVyeSwgdGhpcy5nZXRTZWFyY2hPcHRpb25zKCkpO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBSZXR1cm5zIHNlYXJjaCBvcHRpb25zIGZvciBzaWZ0ZXIgKHRoZSBzeXN0ZW1cblx0ICAgKiBmb3Igc2NvcmluZyBhbmQgc29ydGluZyByZXN1bHRzKS5cblx0ICAgKlxuXHQgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29yY2hpZGpzL3NpZnRlci5qc1xuXHQgICAqIEByZXR1cm4ge29iamVjdH1cblx0ICAgKi9cblxuXG5cdCAgZ2V0U2VhcmNoT3B0aW9ucygpIHtcblx0ICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3M7XG5cdCAgICB2YXIgc29ydCA9IHNldHRpbmdzLnNvcnRGaWVsZDtcblxuXHQgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5zb3J0RmllbGQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgIHNvcnQgPSBbe1xuXHQgICAgICAgIGZpZWxkOiBzZXR0aW5ncy5zb3J0RmllbGRcblx0ICAgICAgfV07XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB7XG5cdCAgICAgIGZpZWxkczogc2V0dGluZ3Muc2VhcmNoRmllbGQsXG5cdCAgICAgIGNvbmp1bmN0aW9uOiBzZXR0aW5ncy5zZWFyY2hDb25qdW5jdGlvbixcblx0ICAgICAgc29ydDogc29ydCxcblx0ICAgICAgbmVzdGluZzogc2V0dGluZ3MubmVzdGluZ1xuXHQgICAgfTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogU2VhcmNoZXMgdGhyb3VnaCBhdmFpbGFibGUgb3B0aW9ucyBhbmQgcmV0dXJuc1xuXHQgICAqIGEgc29ydGVkIGFycmF5IG9mIG1hdGNoZXMuXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgc2VhcmNoKHF1ZXJ5KSB7XG5cdCAgICB2YXIgaSwgcmVzdWx0LCBjYWxjdWxhdGVTY29yZTtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRTZWFyY2hPcHRpb25zKCk7IC8vIHZhbGlkYXRlIHVzZXItcHJvdmlkZWQgcmVzdWx0IHNjb3JpbmcgZnVuY3Rpb25cblxuXHQgICAgaWYgKHNlbGYuc2V0dGluZ3Muc2NvcmUpIHtcblx0ICAgICAgY2FsY3VsYXRlU2NvcmUgPSBzZWxmLnNldHRpbmdzLnNjb3JlLmNhbGwoc2VsZiwgcXVlcnkpO1xuXG5cdCAgICAgIGlmICh0eXBlb2YgY2FsY3VsYXRlU2NvcmUgIT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvbSBTZWxlY3QgXCJzY29yZVwiIHNldHRpbmcgbXVzdCBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGZ1bmN0aW9uJyk7XG5cdCAgICAgIH1cblx0ICAgIH0gLy8gcGVyZm9ybSBzZWFyY2hcblxuXG5cdCAgICBpZiAocXVlcnkgIT09IHNlbGYubGFzdFF1ZXJ5KSB7XG5cdCAgICAgIHNlbGYubGFzdFF1ZXJ5ID0gcXVlcnk7XG5cdCAgICAgIHJlc3VsdCA9IHNlbGYuc2lmdGVyLnNlYXJjaChxdWVyeSwgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG5cdCAgICAgICAgc2NvcmU6IGNhbGN1bGF0ZVNjb3JlXG5cdCAgICAgIH0pKTtcblx0ICAgICAgc2VsZi5jdXJyZW50UmVzdWx0cyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHNlbGYuY3VycmVudFJlc3VsdHMpO1xuXHQgICAgfSAvLyBmaWx0ZXIgb3V0IHNlbGVjdGVkIGl0ZW1zXG5cblxuXHQgICAgaWYgKHNlbGYuc2V0dGluZ3MuaGlkZVNlbGVjdGVkKSB7XG5cdCAgICAgIGZvciAoaSA9IHJlc3VsdC5pdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHQgICAgICAgIGxldCBoYXNoZWQgPSBoYXNoX2tleShyZXN1bHQuaXRlbXNbaV0uaWQpO1xuXG5cdCAgICAgICAgaWYgKGhhc2hlZCAmJiBzZWxmLml0ZW1zLmluZGV4T2YoaGFzaGVkKSAhPT0gLTEpIHtcblx0ICAgICAgICAgIHJlc3VsdC5pdGVtcy5zcGxpY2UoaSwgMSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiByZXN1bHQ7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIFJlZnJlc2hlcyB0aGUgbGlzdCBvZiBhdmFpbGFibGUgb3B0aW9ucyBzaG93blxuXHQgICAqIGluIHRoZSBhdXRvY29tcGxldGUgZHJvcGRvd24gbWVudS5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICByZWZyZXNoT3B0aW9ucyh0cmlnZ2VyRHJvcGRvd24gPSB0cnVlKSB7XG5cdCAgICB2YXIgaSwgaiwgaywgbiwgb3B0Z3JvdXAsIG9wdGdyb3VwcywgaHRtbCwgaGFzX2NyZWF0ZV9vcHRpb24sIGFjdGl2ZV92YWx1ZSwgYWN0aXZlX2dyb3VwO1xuXHQgICAgdmFyIGNyZWF0ZTtcblx0ICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuXHQgICAgY29uc3QgZ3JvdXBzX29yZGVyID0gW107XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cdCAgICB2YXIgcXVlcnkgPSBzZWxmLmlucHV0VmFsdWUoKTtcblx0ICAgIHZhciByZXN1bHRzID0gc2VsZi5zZWFyY2gocXVlcnkpO1xuXHQgICAgdmFyIGFjdGl2ZV9vcHRpb24gPSBudWxsOyAvL3NlbGYuYWN0aXZlT3B0aW9uO1xuXG5cdCAgICB2YXIgc2hvd19kcm9wZG93biA9IHNlbGYuc2V0dGluZ3Muc2hvdWxkT3BlbiB8fCBmYWxzZTtcblx0ICAgIHZhciBkcm9wZG93bl9jb250ZW50ID0gc2VsZi5kcm9wZG93bl9jb250ZW50O1xuXG5cdCAgICBpZiAoc2VsZi5hY3RpdmVPcHRpb24pIHtcblx0ICAgICAgYWN0aXZlX3ZhbHVlID0gc2VsZi5hY3RpdmVPcHRpb24uZGF0YXNldC52YWx1ZTtcblx0ICAgICAgYWN0aXZlX2dyb3VwID0gc2VsZi5hY3RpdmVPcHRpb24uY2xvc2VzdCgnW2RhdGEtZ3JvdXBdJyk7XG5cdCAgICB9IC8vIGJ1aWxkIG1hcmt1cFxuXG5cblx0ICAgIG4gPSByZXN1bHRzLml0ZW1zLmxlbmd0aDtcblxuXHQgICAgaWYgKHR5cGVvZiBzZWxmLnNldHRpbmdzLm1heE9wdGlvbnMgPT09ICdudW1iZXInKSB7XG5cdCAgICAgIG4gPSBNYXRoLm1pbihuLCBzZWxmLnNldHRpbmdzLm1heE9wdGlvbnMpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAobiA+IDApIHtcblx0ICAgICAgc2hvd19kcm9wZG93biA9IHRydWU7XG5cdCAgICB9IC8vIHJlbmRlciBhbmQgZ3JvdXAgYXZhaWxhYmxlIG9wdGlvbnMgaW5kaXZpZHVhbGx5XG5cblxuXHQgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuXHQgICAgICAvLyBnZXQgb3B0aW9uIGRvbSBlbGVtZW50XG5cdCAgICAgIGxldCBvcHRfdmFsdWUgPSByZXN1bHRzLml0ZW1zW2ldLmlkO1xuXHQgICAgICBsZXQgb3B0aW9uID0gc2VsZi5vcHRpb25zW29wdF92YWx1ZV07XG5cdCAgICAgIGxldCBvcHRpb25fZWwgPSBzZWxmLmdldE9wdGlvbihvcHRfdmFsdWUsIHRydWUpOyAvLyB0b2dnbGUgJ3NlbGVjdGVkJyBjbGFzc1xuXG5cdCAgICAgIGlmICghc2VsZi5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQpIHtcblx0ICAgICAgICBvcHRpb25fZWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnLCBzZWxmLml0ZW1zLmluY2x1ZGVzKG9wdF92YWx1ZSkpO1xuXHQgICAgICB9XG5cblx0ICAgICAgb3B0Z3JvdXAgPSBvcHRpb25bc2VsZi5zZXR0aW5ncy5vcHRncm91cEZpZWxkXSB8fCAnJztcblx0ICAgICAgb3B0Z3JvdXBzID0gQXJyYXkuaXNBcnJheShvcHRncm91cCkgPyBvcHRncm91cCA6IFtvcHRncm91cF07XG5cblx0ICAgICAgZm9yIChqID0gMCwgayA9IG9wdGdyb3VwcyAmJiBvcHRncm91cHMubGVuZ3RoOyBqIDwgazsgaisrKSB7XG5cdCAgICAgICAgb3B0Z3JvdXAgPSBvcHRncm91cHNbal07XG5cblx0ICAgICAgICBpZiAoIXNlbGYub3B0Z3JvdXBzLmhhc093blByb3BlcnR5KG9wdGdyb3VwKSkge1xuXHQgICAgICAgICAgb3B0Z3JvdXAgPSAnJztcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAoIWdyb3Vwcy5oYXNPd25Qcm9wZXJ0eShvcHRncm91cCkpIHtcblx0ICAgICAgICAgIGdyb3Vwc1tvcHRncm91cF0gPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdCAgICAgICAgICBncm91cHNfb3JkZXIucHVzaChvcHRncm91cCk7XG5cdCAgICAgICAgfSAvLyBub2RlcyBjYW4gb25seSBoYXZlIG9uZSBwYXJlbnQsIHNvIGlmIHRoZSBvcHRpb24gaXMgaW4gbXV0cGxlIGdyb3Vwcywgd2UgbmVlZCBhIGNsb25lXG5cblxuXHQgICAgICAgIGlmIChqID4gMCkge1xuXHQgICAgICAgICAgb3B0aW9uX2VsID0gb3B0aW9uX2VsLmNsb25lTm9kZSh0cnVlKTtcblx0ICAgICAgICAgIHNldEF0dHIob3B0aW9uX2VsLCB7XG5cdCAgICAgICAgICAgIGlkOiBvcHRpb24uJGlkICsgJy1jbG9uZS0nICsgaixcblx0ICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBudWxsXG5cdCAgICAgICAgICB9KTtcblx0ICAgICAgICAgIG9wdGlvbl9lbC5jbGFzc0xpc3QuYWRkKCd0cy1jbG9uZWQnKTtcblx0ICAgICAgICAgIHJlbW92ZUNsYXNzZXMob3B0aW9uX2VsLCAnYWN0aXZlJyk7XG5cdCAgICAgICAgfSAvLyBtYWtlIHN1cmUgd2Uga2VlcCB0aGUgYWN0aXZlT3B0aW9uIGluIHRoZSBzYW1lIGdyb3VwXG5cblxuXHQgICAgICAgIGlmICghYWN0aXZlX29wdGlvbiAmJiBhY3RpdmVfdmFsdWUgPT0gb3B0X3ZhbHVlKSB7XG5cdCAgICAgICAgICBpZiAoYWN0aXZlX2dyb3VwKSB7XG5cdCAgICAgICAgICAgIGlmIChhY3RpdmVfZ3JvdXAuZGF0YXNldC5ncm91cCA9PT0gb3B0Z3JvdXApIHtcblx0ICAgICAgICAgICAgICBhY3RpdmVfb3B0aW9uID0gb3B0aW9uX2VsO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBhY3RpdmVfb3B0aW9uID0gb3B0aW9uX2VsO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGdyb3Vwc1tvcHRncm91cF0uYXBwZW5kQ2hpbGQob3B0aW9uX2VsKTtcblx0ICAgICAgfVxuXHQgICAgfSAvLyBzb3J0IG9wdGdyb3Vwc1xuXG5cblx0ICAgIGlmICh0aGlzLnNldHRpbmdzLmxvY2tPcHRncm91cE9yZGVyKSB7XG5cdCAgICAgIGdyb3Vwc19vcmRlci5zb3J0KChhLCBiKSA9PiB7XG5cdCAgICAgICAgdmFyIGFfb3JkZXIgPSBzZWxmLm9wdGdyb3Vwc1thXSAmJiBzZWxmLm9wdGdyb3Vwc1thXS4kb3JkZXIgfHwgMDtcblx0ICAgICAgICB2YXIgYl9vcmRlciA9IHNlbGYub3B0Z3JvdXBzW2JdICYmIHNlbGYub3B0Z3JvdXBzW2JdLiRvcmRlciB8fCAwO1xuXHQgICAgICAgIHJldHVybiBhX29yZGVyIC0gYl9vcmRlcjtcblx0ICAgICAgfSk7XG5cdCAgICB9IC8vIHJlbmRlciBvcHRncm91cCBoZWFkZXJzICYgam9pbiBncm91cHNcblxuXG5cdCAgICBodG1sID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHQgICAgaXRlcmF0ZShncm91cHNfb3JkZXIsIG9wdGdyb3VwID0+IHtcblx0ICAgICAgaWYgKHNlbGYub3B0Z3JvdXBzLmhhc093blByb3BlcnR5KG9wdGdyb3VwKSAmJiBncm91cHNbb3B0Z3JvdXBdLmNoaWxkcmVuLmxlbmd0aCkge1xuXHQgICAgICAgIGxldCBncm91cF9vcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHQgICAgICAgIGxldCBoZWFkZXIgPSBzZWxmLnJlbmRlcignb3B0Z3JvdXBfaGVhZGVyJywgc2VsZi5vcHRncm91cHNbb3B0Z3JvdXBdKTtcblx0ICAgICAgICBhcHBlbmQoZ3JvdXBfb3B0aW9ucywgaGVhZGVyKTtcblx0ICAgICAgICBhcHBlbmQoZ3JvdXBfb3B0aW9ucywgZ3JvdXBzW29wdGdyb3VwXSk7XG5cdCAgICAgICAgbGV0IGdyb3VwX2h0bWwgPSBzZWxmLnJlbmRlcignb3B0Z3JvdXAnLCB7XG5cdCAgICAgICAgICBncm91cDogc2VsZi5vcHRncm91cHNbb3B0Z3JvdXBdLFxuXHQgICAgICAgICAgb3B0aW9uczogZ3JvdXBfb3B0aW9uc1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIGFwcGVuZChodG1sLCBncm91cF9odG1sKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBhcHBlbmQoaHRtbCwgZ3JvdXBzW29wdGdyb3VwXSk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgZHJvcGRvd25fY29udGVudC5pbm5lckhUTUwgPSAnJztcblx0ICAgIGFwcGVuZChkcm9wZG93bl9jb250ZW50LCBodG1sKTsgLy8gaGlnaGxpZ2h0IG1hdGNoaW5nIHRlcm1zIGlubGluZVxuXG5cdCAgICBpZiAoc2VsZi5zZXR0aW5ncy5oaWdobGlnaHQpIHtcblx0ICAgICAgcmVtb3ZlSGlnaGxpZ2h0KGRyb3Bkb3duX2NvbnRlbnQpO1xuXG5cdCAgICAgIGlmIChyZXN1bHRzLnF1ZXJ5Lmxlbmd0aCAmJiByZXN1bHRzLnRva2Vucy5sZW5ndGgpIHtcblx0ICAgICAgICBpdGVyYXRlKHJlc3VsdHMudG9rZW5zLCB0b2sgPT4ge1xuXHQgICAgICAgICAgaGlnaGxpZ2h0KGRyb3Bkb3duX2NvbnRlbnQsIHRvay5yZWdleCk7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH1cblx0ICAgIH0gLy8gaGVscGVyIG1ldGhvZCBmb3IgYWRkaW5nIHRlbXBsYXRlcyB0byBkcm9wZG93blxuXG5cblx0ICAgIHZhciBhZGRfdGVtcGxhdGUgPSB0ZW1wbGF0ZSA9PiB7XG5cdCAgICAgIGxldCBjb250ZW50ID0gc2VsZi5yZW5kZXIodGVtcGxhdGUsIHtcblx0ICAgICAgICBpbnB1dDogcXVlcnlcblx0ICAgICAgfSk7XG5cblx0ICAgICAgaWYgKGNvbnRlbnQpIHtcblx0ICAgICAgICBzaG93X2Ryb3Bkb3duID0gdHJ1ZTtcblx0ICAgICAgICBkcm9wZG93bl9jb250ZW50Lmluc2VydEJlZm9yZShjb250ZW50LCBkcm9wZG93bl9jb250ZW50LmZpcnN0Q2hpbGQpO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIGNvbnRlbnQ7XG5cdCAgICB9OyAvLyBhZGQgbG9hZGluZyBtZXNzYWdlXG5cblxuXHQgICAgaWYgKHNlbGYubG9hZGluZykge1xuXHQgICAgICBhZGRfdGVtcGxhdGUoJ2xvYWRpbmcnKTsgLy8gaW52YWxpZCBxdWVyeVxuXHQgICAgfSBlbHNlIGlmICghc2VsZi5zZXR0aW5ncy5zaG91bGRMb2FkLmNhbGwoc2VsZiwgcXVlcnkpKSB7XG5cdCAgICAgIGFkZF90ZW1wbGF0ZSgnbm90X2xvYWRpbmcnKTsgLy8gYWRkIG5vX3Jlc3VsdHMgbWVzc2FnZVxuXHQgICAgfSBlbHNlIGlmIChyZXN1bHRzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICBhZGRfdGVtcGxhdGUoJ25vX3Jlc3VsdHMnKTtcblx0ICAgIH0gLy8gYWRkIGNyZWF0ZSBvcHRpb25cblxuXG5cdCAgICBoYXNfY3JlYXRlX29wdGlvbiA9IHNlbGYuY2FuQ3JlYXRlKHF1ZXJ5KTtcblxuXHQgICAgaWYgKGhhc19jcmVhdGVfb3B0aW9uKSB7XG5cdCAgICAgIGNyZWF0ZSA9IGFkZF90ZW1wbGF0ZSgnb3B0aW9uX2NyZWF0ZScpO1xuXHQgICAgfSAvLyBhY3RpdmF0ZVxuXG5cblx0ICAgIHNlbGYuaGFzT3B0aW9ucyA9IHJlc3VsdHMuaXRlbXMubGVuZ3RoID4gMCB8fCBoYXNfY3JlYXRlX29wdGlvbjtcblxuXHQgICAgaWYgKHNob3dfZHJvcGRvd24pIHtcblx0ICAgICAgaWYgKHJlc3VsdHMuaXRlbXMubGVuZ3RoID4gMCkge1xuXHQgICAgICAgIGlmICghYWN0aXZlX29wdGlvbiAmJiBzZWxmLnNldHRpbmdzLm1vZGUgPT09ICdzaW5nbGUnICYmIHNlbGYuaXRlbXMubGVuZ3RoKSB7XG5cdCAgICAgICAgICBhY3RpdmVfb3B0aW9uID0gc2VsZi5nZXRPcHRpb24oc2VsZi5pdGVtc1swXSk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgaWYgKCFkcm9wZG93bl9jb250ZW50LmNvbnRhaW5zKGFjdGl2ZV9vcHRpb24pKSB7XG5cdCAgICAgICAgICBsZXQgYWN0aXZlX2luZGV4ID0gMDtcblxuXHQgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhc2VsZi5zZXR0aW5ncy5hZGRQcmVjZWRlbmNlKSB7XG5cdCAgICAgICAgICAgIGFjdGl2ZV9pbmRleCA9IDE7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIGFjdGl2ZV9vcHRpb24gPSBzZWxmLnNlbGVjdGFibGUoKVthY3RpdmVfaW5kZXhdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIGlmIChjcmVhdGUpIHtcblx0ICAgICAgICBhY3RpdmVfb3B0aW9uID0gY3JlYXRlO1xuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKHRyaWdnZXJEcm9wZG93biAmJiAhc2VsZi5pc09wZW4pIHtcblx0ICAgICAgICBzZWxmLm9wZW4oKTtcblx0ICAgICAgICBzZWxmLnNjcm9sbFRvT3B0aW9uKGFjdGl2ZV9vcHRpb24sICdhdXRvJyk7XG5cdCAgICAgIH1cblxuXHQgICAgICBzZWxmLnNldEFjdGl2ZU9wdGlvbihhY3RpdmVfb3B0aW9uKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHNlbGYuY2xlYXJBY3RpdmVPcHRpb24oKTtcblxuXHQgICAgICBpZiAodHJpZ2dlckRyb3Bkb3duICYmIHNlbGYuaXNPcGVuKSB7XG5cdCAgICAgICAgc2VsZi5jbG9zZShmYWxzZSk7IC8vIGlmIGNyZWF0ZV9vcHRpb249bnVsbCwgd2Ugd2FudCB0aGUgZHJvcGRvd24gdG8gY2xvc2UgYnV0IG5vdCByZXNldCB0aGUgdGV4dGJveCB2YWx1ZVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIFJldHVybiBsaXN0IG9mIHNlbGVjdGFibGUgb3B0aW9uc1xuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIHNlbGVjdGFibGUoKSB7XG5cdCAgICByZXR1cm4gdGhpcy5kcm9wZG93bl9jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNlbGVjdGFibGVdJyk7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIEFkZHMgYW4gYXZhaWxhYmxlIG9wdGlvbi4gSWYgaXQgYWxyZWFkeSBleGlzdHMsXG5cdCAgICogbm90aGluZyB3aWxsIGhhcHBlbi4gTm90ZTogdGhpcyBkb2VzIG5vdCByZWZyZXNoXG5cdCAgICogdGhlIG9wdGlvbnMgbGlzdCBkcm9wZG93biAodXNlIGByZWZyZXNoT3B0aW9uc2Bcblx0ICAgKiBmb3IgdGhhdCkuXG5cdCAgICpcblx0ICAgKiBVc2FnZTpcblx0ICAgKlxuXHQgICAqICAgdGhpcy5hZGRPcHRpb24oZGF0YSlcblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBhZGRPcHRpb24oZGF0YSwgdXNlcl9jcmVhdGVkID0gZmFsc2UpIHtcblx0ICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyBAZGVwcmVjYXRlZCAxLjcuN1xuXHQgICAgLy8gdXNlIGFkZE9wdGlvbnMoIGFycmF5LCB1c2VyX2NyZWF0ZWQgKSBmb3IgYWRkaW5nIG11bHRpcGxlIG9wdGlvbnNcblxuXHQgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0ICAgICAgc2VsZi5hZGRPcHRpb25zKGRhdGEsIHVzZXJfY3JlYXRlZCk7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblxuXHQgICAgY29uc3Qga2V5ID0gaGFzaF9rZXkoZGF0YVtzZWxmLnNldHRpbmdzLnZhbHVlRmllbGRdKTtcblxuXHQgICAgaWYgKGtleSA9PT0gbnVsbCB8fCBzZWxmLm9wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cblx0ICAgIGRhdGEuJG9yZGVyID0gZGF0YS4kb3JkZXIgfHwgKytzZWxmLm9yZGVyO1xuXHQgICAgZGF0YS4kaWQgPSBzZWxmLmlucHV0SWQgKyAnLW9wdC0nICsgZGF0YS4kb3JkZXI7XG5cdCAgICBzZWxmLm9wdGlvbnNba2V5XSA9IGRhdGE7XG5cdCAgICBzZWxmLmxhc3RRdWVyeSA9IG51bGw7XG5cblx0ICAgIGlmICh1c2VyX2NyZWF0ZWQpIHtcblx0ICAgICAgc2VsZi51c2VyT3B0aW9uc1trZXldID0gdXNlcl9jcmVhdGVkO1xuXHQgICAgICBzZWxmLnRyaWdnZXIoJ29wdGlvbl9hZGQnLCBrZXksIGRhdGEpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4ga2V5O1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBBZGQgbXVsdGlwbGUgb3B0aW9uc1xuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIGFkZE9wdGlvbnMoZGF0YSwgdXNlcl9jcmVhdGVkID0gZmFsc2UpIHtcblx0ICAgIGl0ZXJhdGUoZGF0YSwgZGF0ID0+IHtcblx0ICAgICAgdGhpcy5hZGRPcHRpb24oZGF0LCB1c2VyX2NyZWF0ZWQpO1xuXHQgICAgfSk7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIEBkZXByZWNhdGVkIDEuNy43XG5cdCAgICovXG5cblxuXHQgIHJlZ2lzdGVyT3B0aW9uKGRhdGEpIHtcblx0ICAgIHJldHVybiB0aGlzLmFkZE9wdGlvbihkYXRhKTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogUmVnaXN0ZXJzIGFuIG9wdGlvbiBncm91cCB0byB0aGUgcG9vbCBvZiBvcHRpb24gZ3JvdXBzLlxuXHQgICAqXG5cdCAgICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG5cdCAgICovXG5cblxuXHQgIHJlZ2lzdGVyT3B0aW9uR3JvdXAoZGF0YSkge1xuXHQgICAgdmFyIGtleSA9IGhhc2hfa2V5KGRhdGFbdGhpcy5zZXR0aW5ncy5vcHRncm91cFZhbHVlRmllbGRdKTtcblx0ICAgIGlmIChrZXkgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0ICAgIGRhdGEuJG9yZGVyID0gZGF0YS4kb3JkZXIgfHwgKyt0aGlzLm9yZGVyO1xuXHQgICAgdGhpcy5vcHRncm91cHNba2V5XSA9IGRhdGE7XG5cdCAgICByZXR1cm4ga2V5O1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBSZWdpc3RlcnMgYSBuZXcgb3B0Z3JvdXAgZm9yIG9wdGlvbnNcblx0ICAgKiB0byBiZSBidWNrZXRlZCBpbnRvLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIGFkZE9wdGlvbkdyb3VwKGlkLCBkYXRhKSB7XG5cdCAgICB2YXIgaGFzaGVkX2lkO1xuXHQgICAgZGF0YVt0aGlzLnNldHRpbmdzLm9wdGdyb3VwVmFsdWVGaWVsZF0gPSBpZDtcblxuXHQgICAgaWYgKGhhc2hlZF9pZCA9IHRoaXMucmVnaXN0ZXJPcHRpb25Hcm91cChkYXRhKSkge1xuXHQgICAgICB0aGlzLnRyaWdnZXIoJ29wdGdyb3VwX2FkZCcsIGhhc2hlZF9pZCwgZGF0YSk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIFJlbW92ZXMgYW4gZXhpc3Rpbmcgb3B0aW9uIGdyb3VwLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIHJlbW92ZU9wdGlvbkdyb3VwKGlkKSB7XG5cdCAgICBpZiAodGhpcy5vcHRncm91cHMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG5cdCAgICAgIGRlbGV0ZSB0aGlzLm9wdGdyb3Vwc1tpZF07XG5cdCAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuXHQgICAgICB0aGlzLnRyaWdnZXIoJ29wdGdyb3VwX3JlbW92ZScsIGlkKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgLyoqXG5cdCAgICogQ2xlYXJzIGFsbCBleGlzdGluZyBvcHRpb24gZ3JvdXBzLlxuXHQgICAqL1xuXG5cblx0ICBjbGVhck9wdGlvbkdyb3VwcygpIHtcblx0ICAgIHRoaXMub3B0Z3JvdXBzID0ge307XG5cdCAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcblx0ICAgIHRoaXMudHJpZ2dlcignb3B0Z3JvdXBfY2xlYXInKTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogVXBkYXRlcyBhbiBvcHRpb24gYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24uIElmXG5cdCAgICogaXQgaXMgdmlzaWJsZSBpbiB0aGUgc2VsZWN0ZWQgaXRlbXMgb3Igb3B0aW9uc1xuXHQgICAqIGRyb3Bkb3duLCBpdCB3aWxsIGJlIHJlLXJlbmRlcmVkIGF1dG9tYXRpY2FsbHkuXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgdXBkYXRlT3B0aW9uKHZhbHVlLCBkYXRhKSB7XG5cdCAgICBjb25zdCBzZWxmID0gdGhpcztcblx0ICAgIHZhciBpdGVtX25ldztcblx0ICAgIHZhciBpbmRleF9pdGVtO1xuXHQgICAgY29uc3QgdmFsdWVfb2xkID0gaGFzaF9rZXkodmFsdWUpO1xuXHQgICAgY29uc3QgdmFsdWVfbmV3ID0gaGFzaF9rZXkoZGF0YVtzZWxmLnNldHRpbmdzLnZhbHVlRmllbGRdKTsgLy8gc2FuaXR5IGNoZWNrc1xuXG5cdCAgICBpZiAodmFsdWVfb2xkID09PSBudWxsKSByZXR1cm47XG5cdCAgICBpZiAoIXNlbGYub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZV9vbGQpKSByZXR1cm47XG5cdCAgICBpZiAodHlwZW9mIHZhbHVlX25ldyAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBFcnJvcignVmFsdWUgbXVzdCBiZSBzZXQgaW4gb3B0aW9uIGRhdGEnKTtcblx0ICAgIGNvbnN0IG9wdGlvbiA9IHNlbGYuZ2V0T3B0aW9uKHZhbHVlX29sZCk7XG5cdCAgICBjb25zdCBpdGVtID0gc2VsZi5nZXRJdGVtKHZhbHVlX29sZCk7XG5cdCAgICBkYXRhLiRvcmRlciA9IGRhdGEuJG9yZGVyIHx8IHNlbGYub3B0aW9uc1t2YWx1ZV9vbGRdLiRvcmRlcjtcblx0ICAgIGRlbGV0ZSBzZWxmLm9wdGlvbnNbdmFsdWVfb2xkXTsgLy8gaW52YWxpZGF0ZSByZW5kZXIgY2FjaGVcblx0ICAgIC8vIGRvbid0IHJlbW92ZSBleGlzdGluZyBub2RlIHlldCwgd2UnbGwgcmVtb3ZlIGl0IGFmdGVyIHJlcGxhY2luZyBpdFxuXG5cdCAgICBzZWxmLnVuY2FjaGVWYWx1ZSh2YWx1ZV9uZXcpO1xuXHQgICAgc2VsZi5vcHRpb25zW3ZhbHVlX25ld10gPSBkYXRhOyAvLyB1cGRhdGUgdGhlIG9wdGlvbiBpZiBpdCdzIGluIHRoZSBkcm9wZG93blxuXG5cdCAgICBpZiAob3B0aW9uKSB7XG5cdCAgICAgIGlmIChzZWxmLmRyb3Bkb3duX2NvbnRlbnQuY29udGFpbnMob3B0aW9uKSkge1xuXHQgICAgICAgIGNvbnN0IG9wdGlvbl9uZXcgPSBzZWxmLl9yZW5kZXIoJ29wdGlvbicsIGRhdGEpO1xuXG5cdCAgICAgICAgcmVwbGFjZU5vZGUob3B0aW9uLCBvcHRpb25fbmV3KTtcblxuXHQgICAgICAgIGlmIChzZWxmLmFjdGl2ZU9wdGlvbiA9PT0gb3B0aW9uKSB7XG5cdCAgICAgICAgICBzZWxmLnNldEFjdGl2ZU9wdGlvbihvcHRpb25fbmV3KTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICBvcHRpb24ucmVtb3ZlKCk7XG5cdCAgICB9IC8vIHVwZGF0ZSB0aGUgaXRlbSBpZiB3ZSBoYXZlIG9uZVxuXG5cblx0ICAgIGlmIChpdGVtKSB7XG5cdCAgICAgIGluZGV4X2l0ZW0gPSBzZWxmLml0ZW1zLmluZGV4T2YodmFsdWVfb2xkKTtcblxuXHQgICAgICBpZiAoaW5kZXhfaXRlbSAhPT0gLTEpIHtcblx0ICAgICAgICBzZWxmLml0ZW1zLnNwbGljZShpbmRleF9pdGVtLCAxLCB2YWx1ZV9uZXcpO1xuXHQgICAgICB9XG5cblx0ICAgICAgaXRlbV9uZXcgPSBzZWxmLl9yZW5kZXIoJ2l0ZW0nLCBkYXRhKTtcblx0ICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgYWRkQ2xhc3NlcyhpdGVtX25ldywgJ2FjdGl2ZScpO1xuXHQgICAgICByZXBsYWNlTm9kZShpdGVtLCBpdGVtX25ldyk7XG5cdCAgICB9IC8vIGludmFsaWRhdGUgbGFzdCBxdWVyeSBiZWNhdXNlIHdlIG1pZ2h0IGhhdmUgdXBkYXRlZCB0aGUgc29ydEZpZWxkXG5cblxuXHQgICAgc2VsZi5sYXN0UXVlcnkgPSBudWxsO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBSZW1vdmVzIGEgc2luZ2xlIG9wdGlvbi5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICByZW1vdmVPcHRpb24odmFsdWUsIHNpbGVudCkge1xuXHQgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cdCAgICB2YWx1ZSA9IGdldF9oYXNoKHZhbHVlKTtcblx0ICAgIHNlbGYudW5jYWNoZVZhbHVlKHZhbHVlKTtcblx0ICAgIGRlbGV0ZSBzZWxmLnVzZXJPcHRpb25zW3ZhbHVlXTtcblx0ICAgIGRlbGV0ZSBzZWxmLm9wdGlvbnNbdmFsdWVdO1xuXHQgICAgc2VsZi5sYXN0UXVlcnkgPSBudWxsO1xuXHQgICAgc2VsZi50cmlnZ2VyKCdvcHRpb25fcmVtb3ZlJywgdmFsdWUpO1xuXHQgICAgc2VsZi5yZW1vdmVJdGVtKHZhbHVlLCBzaWxlbnQpO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBDbGVhcnMgYWxsIG9wdGlvbnMuXG5cdCAgICovXG5cblxuXHQgIGNsZWFyT3B0aW9ucygpIHtcblx0ICAgIHRoaXMubG9hZGVkU2VhcmNoZXMgPSB7fTtcblx0ICAgIHRoaXMudXNlck9wdGlvbnMgPSB7fTtcblx0ICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuXHQgICAgdmFyIHNlbGVjdGVkID0ge307XG5cdCAgICBpdGVyYXRlKHRoaXMub3B0aW9ucywgKG9wdGlvbiwga2V5KSA9PiB7XG5cdCAgICAgIGlmICh0aGlzLml0ZW1zLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG5cdCAgICAgICAgc2VsZWN0ZWRba2V5XSA9IHRoaXMub3B0aW9uc1trZXldO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuc2lmdGVyLml0ZW1zID0gc2VsZWN0ZWQ7XG5cdCAgICB0aGlzLmxhc3RRdWVyeSA9IG51bGw7XG5cdCAgICB0aGlzLnRyaWdnZXIoJ29wdGlvbl9jbGVhcicpO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBSZXR1cm5zIHRoZSBkb20gZWxlbWVudCBvZiB0aGUgb3B0aW9uXG5cdCAgICogbWF0Y2hpbmcgdGhlIGdpdmVuIHZhbHVlLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIGdldE9wdGlvbih2YWx1ZSwgY3JlYXRlID0gZmFsc2UpIHtcblx0ICAgIGNvbnN0IGhhc2hlZCA9IGhhc2hfa2V5KHZhbHVlKTtcblxuXHQgICAgaWYgKGhhc2hlZCAhPT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuaGFzT3duUHJvcGVydHkoaGFzaGVkKSkge1xuXHQgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLm9wdGlvbnNbaGFzaGVkXTtcblxuXHQgICAgICBpZiAob3B0aW9uLiRkaXYpIHtcblx0ICAgICAgICByZXR1cm4gb3B0aW9uLiRkaXY7XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAoY3JlYXRlKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcignb3B0aW9uJywgb3B0aW9uKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gbnVsbDtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogUmV0dXJucyB0aGUgZG9tIGVsZW1lbnQgb2YgdGhlIG5leHQgb3IgcHJldmlvdXMgZG9tIGVsZW1lbnQgb2YgdGhlIHNhbWUgdHlwZVxuXHQgICAqIE5vdGU6IGFkamFjZW50IG9wdGlvbnMgbWF5IG5vdCBiZSBhZGphY2VudCBET00gZWxlbWVudHMgKG9wdGdyb3Vwcylcblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBnZXRBZGphY2VudChvcHRpb24sIGRpcmVjdGlvbiwgdHlwZSA9ICdvcHRpb24nKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXMsXG5cdCAgICAgICAgYWxsO1xuXG5cdCAgICBpZiAoIW9wdGlvbikge1xuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblxuXHQgICAgaWYgKHR5cGUgPT0gJ2l0ZW0nKSB7XG5cdCAgICAgIGFsbCA9IHNlbGYuY29udHJvbENoaWxkcmVuKCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBhbGwgPSBzZWxmLmRyb3Bkb3duX2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2VsZWN0YWJsZV0nKTtcblx0ICAgIH1cblxuXHQgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGwubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgaWYgKGFsbFtpXSAhPSBvcHRpb24pIHtcblx0ICAgICAgICBjb250aW51ZTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG5cdCAgICAgICAgcmV0dXJuIGFsbFtpICsgMV07XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gYWxsW2kgLSAxXTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIG51bGw7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIFJldHVybnMgdGhlIGRvbSBlbGVtZW50IG9mIHRoZSBpdGVtXG5cdCAgICogbWF0Y2hpbmcgdGhlIGdpdmVuIHZhbHVlLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIGdldEl0ZW0oaXRlbSkge1xuXHQgICAgaWYgKHR5cGVvZiBpdGVtID09ICdvYmplY3QnKSB7XG5cdCAgICAgIHJldHVybiBpdGVtO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgdmFsdWUgPSBoYXNoX2tleShpdGVtKTtcblx0ICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCA/IHRoaXMuY29udHJvbC5xdWVyeVNlbGVjdG9yKGBbZGF0YS12YWx1ZT1cIiR7YWRkU2xhc2hlcyh2YWx1ZSl9XCJdYCkgOiBudWxsO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBcIlNlbGVjdHNcIiBtdWx0aXBsZSBpdGVtcyBhdCBvbmNlLiBBZGRzIHRoZW0gdG8gdGhlIGxpc3Rcblx0ICAgKiBhdCB0aGUgY3VycmVudCBjYXJldCBwb3NpdGlvbi5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBhZGRJdGVtcyh2YWx1ZXMsIHNpbGVudCkge1xuXHQgICAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgICAgdmFyIGl0ZW1zID0gQXJyYXkuaXNBcnJheSh2YWx1ZXMpID8gdmFsdWVzIDogW3ZhbHVlc107XG5cdCAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcih4ID0+IHNlbGYuaXRlbXMuaW5kZXhPZih4KSA9PT0gLTEpO1xuXG5cdCAgICBmb3IgKGxldCBpID0gMCwgbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHQgICAgICBzZWxmLmlzUGVuZGluZyA9IGkgPCBuIC0gMTtcblx0ICAgICAgc2VsZi5hZGRJdGVtKGl0ZW1zW2ldLCBzaWxlbnQpO1xuXHQgICAgfVxuXHQgIH1cblx0ICAvKipcblx0ICAgKiBcIlNlbGVjdHNcIiBhbiBpdGVtLiBBZGRzIGl0IHRvIHRoZSBsaXN0XG5cdCAgICogYXQgdGhlIGN1cnJlbnQgY2FyZXQgcG9zaXRpb24uXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgYWRkSXRlbSh2YWx1ZSwgc2lsZW50KSB7XG5cdCAgICB2YXIgZXZlbnRzID0gc2lsZW50ID8gW10gOiBbJ2NoYW5nZScsICdkcm9wZG93bl9jbG9zZSddO1xuXHQgICAgZGVib3VuY2VfZXZlbnRzKHRoaXMsIGV2ZW50cywgKCkgPT4ge1xuXHQgICAgICB2YXIgaXRlbSwgd2FzRnVsbDtcblx0ICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cdCAgICAgIGNvbnN0IGlucHV0TW9kZSA9IHNlbGYuc2V0dGluZ3MubW9kZTtcblx0ICAgICAgY29uc3QgaGFzaGVkID0gaGFzaF9rZXkodmFsdWUpO1xuXG5cdCAgICAgIGlmIChoYXNoZWQgJiYgc2VsZi5pdGVtcy5pbmRleE9mKGhhc2hlZCkgIT09IC0xKSB7XG5cdCAgICAgICAgaWYgKGlucHV0TW9kZSA9PT0gJ3NpbmdsZScpIHtcblx0ICAgICAgICAgIHNlbGYuY2xvc2UoKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAoaW5wdXRNb2RlID09PSAnc2luZ2xlJyB8fCAhc2VsZi5zZXR0aW5ncy5kdXBsaWNhdGVzKSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKGhhc2hlZCA9PT0gbnVsbCB8fCAhc2VsZi5vcHRpb25zLmhhc093blByb3BlcnR5KGhhc2hlZCkpIHJldHVybjtcblx0ICAgICAgaWYgKGlucHV0TW9kZSA9PT0gJ3NpbmdsZScpIHNlbGYuY2xlYXIoc2lsZW50KTtcblx0ICAgICAgaWYgKGlucHV0TW9kZSA9PT0gJ211bHRpJyAmJiBzZWxmLmlzRnVsbCgpKSByZXR1cm47XG5cdCAgICAgIGl0ZW0gPSBzZWxmLl9yZW5kZXIoJ2l0ZW0nLCBzZWxmLm9wdGlvbnNbaGFzaGVkXSk7XG5cblx0ICAgICAgaWYgKHNlbGYuY29udHJvbC5jb250YWlucyhpdGVtKSkge1xuXHQgICAgICAgIC8vIGR1cGxpY2F0ZXNcblx0ICAgICAgICBpdGVtID0gaXRlbS5jbG9uZU5vZGUodHJ1ZSk7XG5cdCAgICAgIH1cblxuXHQgICAgICB3YXNGdWxsID0gc2VsZi5pc0Z1bGwoKTtcblx0ICAgICAgc2VsZi5pdGVtcy5zcGxpY2Uoc2VsZi5jYXJldFBvcywgMCwgaGFzaGVkKTtcblx0ICAgICAgc2VsZi5pbnNlcnRBdENhcmV0KGl0ZW0pO1xuXG5cdCAgICAgIGlmIChzZWxmLmlzU2V0dXApIHtcblx0ICAgICAgICAvLyB1cGRhdGUgbWVudSAvIHJlbW92ZSB0aGUgb3B0aW9uIChpZiB0aGlzIGlzIG5vdCBvbmUgaXRlbSBiZWluZyBhZGRlZCBhcyBwYXJ0IG9mIHNlcmllcylcblx0ICAgICAgICBpZiAoIXNlbGYuaXNQZW5kaW5nICYmIHNlbGYuc2V0dGluZ3MuaGlkZVNlbGVjdGVkKSB7XG5cdCAgICAgICAgICBsZXQgb3B0aW9uID0gc2VsZi5nZXRPcHRpb24oaGFzaGVkKTtcblx0ICAgICAgICAgIGxldCBuZXh0ID0gc2VsZi5nZXRBZGphY2VudChvcHRpb24sIDEpO1xuXG5cdCAgICAgICAgICBpZiAobmV4dCkge1xuXHQgICAgICAgICAgICBzZWxmLnNldEFjdGl2ZU9wdGlvbihuZXh0KTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9IC8vIHJlZnJlc2hPcHRpb25zIGFmdGVyIHNldEFjdGl2ZU9wdGlvbigpLFxuXHQgICAgICAgIC8vIG90aGVyd2lzZSBzZXRBY3RpdmVPcHRpb24oKSB3aWxsIGJlIGNhbGxlZCBieSByZWZyZXNoT3B0aW9ucygpIHdpdGggdGhlIHdyb25nIHZhbHVlXG5cblxuXHQgICAgICAgIGlmICghc2VsZi5pc1BlbmRpbmcgJiYgIXNlbGYuc2V0dGluZ3MuY2xvc2VBZnRlclNlbGVjdCkge1xuXHQgICAgICAgICAgc2VsZi5yZWZyZXNoT3B0aW9ucyhzZWxmLmlzRm9jdXNlZCAmJiBpbnB1dE1vZGUgIT09ICdzaW5nbGUnKTtcblx0ICAgICAgICB9IC8vIGhpZGUgdGhlIG1lbnUgaWYgdGhlIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIGhhdmUgYmVlbiBzZWxlY3RlZCBvciBubyBvcHRpb25zIGFyZSBsZWZ0XG5cblxuXHQgICAgICAgIGlmIChzZWxmLnNldHRpbmdzLmNsb3NlQWZ0ZXJTZWxlY3QgIT0gZmFsc2UgJiYgc2VsZi5pc0Z1bGwoKSkge1xuXHQgICAgICAgICAgc2VsZi5jbG9zZSgpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoIXNlbGYuaXNQZW5kaW5nKSB7XG5cdCAgICAgICAgICBzZWxmLnBvc2l0aW9uRHJvcGRvd24oKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBzZWxmLnRyaWdnZXIoJ2l0ZW1fYWRkJywgaGFzaGVkLCBpdGVtKTtcblxuXHQgICAgICAgIGlmICghc2VsZi5pc1BlbmRpbmcpIHtcblx0ICAgICAgICAgIHNlbGYudXBkYXRlT3JpZ2luYWxJbnB1dCh7XG5cdCAgICAgICAgICAgIHNpbGVudDogc2lsZW50XG5cdCAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAoIXNlbGYuaXNQZW5kaW5nIHx8ICF3YXNGdWxsICYmIHNlbGYuaXNGdWxsKCkpIHtcblx0ICAgICAgICBzZWxmLmlucHV0U3RhdGUoKTtcblx0ICAgICAgICBzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogUmVtb3ZlcyB0aGUgc2VsZWN0ZWQgaXRlbSBtYXRjaGluZ1xuXHQgICAqIHRoZSBwcm92aWRlZCB2YWx1ZS5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICByZW1vdmVJdGVtKGl0ZW0gPSBudWxsLCBzaWxlbnQpIHtcblx0ICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXHQgICAgaXRlbSA9IHNlbGYuZ2V0SXRlbShpdGVtKTtcblx0ICAgIGlmICghaXRlbSkgcmV0dXJuO1xuXHQgICAgdmFyIGksIGlkeDtcblx0ICAgIGNvbnN0IHZhbHVlID0gaXRlbS5kYXRhc2V0LnZhbHVlO1xuXHQgICAgaSA9IG5vZGVJbmRleChpdGVtKTtcblx0ICAgIGl0ZW0ucmVtb3ZlKCk7XG5cblx0ICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblx0ICAgICAgaWR4ID0gc2VsZi5hY3RpdmVJdGVtcy5pbmRleE9mKGl0ZW0pO1xuXHQgICAgICBzZWxmLmFjdGl2ZUl0ZW1zLnNwbGljZShpZHgsIDEpO1xuXHQgICAgICByZW1vdmVDbGFzc2VzKGl0ZW0sICdhY3RpdmUnKTtcblx0ICAgIH1cblxuXHQgICAgc2VsZi5pdGVtcy5zcGxpY2UoaSwgMSk7XG5cdCAgICBzZWxmLmxhc3RRdWVyeSA9IG51bGw7XG5cblx0ICAgIGlmICghc2VsZi5zZXR0aW5ncy5wZXJzaXN0ICYmIHNlbGYudXNlck9wdGlvbnMuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG5cdCAgICAgIHNlbGYucmVtb3ZlT3B0aW9uKHZhbHVlLCBzaWxlbnQpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaSA8IHNlbGYuY2FyZXRQb3MpIHtcblx0ICAgICAgc2VsZi5zZXRDYXJldChzZWxmLmNhcmV0UG9zIC0gMSk7XG5cdCAgICB9XG5cblx0ICAgIHNlbGYudXBkYXRlT3JpZ2luYWxJbnB1dCh7XG5cdCAgICAgIHNpbGVudDogc2lsZW50XG5cdCAgICB9KTtcblx0ICAgIHNlbGYucmVmcmVzaFN0YXRlKCk7XG5cdCAgICBzZWxmLnBvc2l0aW9uRHJvcGRvd24oKTtcblx0ICAgIHNlbGYudHJpZ2dlcignaXRlbV9yZW1vdmUnLCB2YWx1ZSwgaXRlbSk7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIEludm9rZXMgdGhlIGBjcmVhdGVgIG1ldGhvZCBwcm92aWRlZCBpbiB0aGVcblx0ICAgKiBUb21TZWxlY3Qgb3B0aW9ucyB0aGF0IHNob3VsZCBwcm92aWRlIHRoZSBkYXRhXG5cdCAgICogZm9yIHRoZSBuZXcgaXRlbSwgZ2l2ZW4gdGhlIHVzZXIgaW5wdXQuXG5cdCAgICpcblx0ICAgKiBPbmNlIHRoaXMgY29tcGxldGVzLCBpdCB3aWxsIGJlIGFkZGVkXG5cdCAgICogdG8gdGhlIGl0ZW0gbGlzdC5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBjcmVhdGVJdGVtKGlucHV0ID0gbnVsbCwgdHJpZ2dlckRyb3Bkb3duID0gdHJ1ZSwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuXHQgICAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgICAgdmFyIGNhcmV0ID0gc2VsZi5jYXJldFBvcztcblx0ICAgIHZhciBvdXRwdXQ7XG5cdCAgICBpbnB1dCA9IGlucHV0IHx8IHNlbGYuaW5wdXRWYWx1ZSgpO1xuXG5cdCAgICBpZiAoIXNlbGYuY2FuQ3JlYXRlKGlucHV0KSkge1xuXHQgICAgICBjYWxsYmFjaygpO1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cblx0ICAgIHNlbGYubG9jaygpO1xuXHQgICAgdmFyIGNyZWF0ZWQgPSBmYWxzZTtcblxuXHQgICAgdmFyIGNyZWF0ZSA9IGRhdGEgPT4ge1xuXHQgICAgICBzZWxmLnVubG9jaygpO1xuXHQgICAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSByZXR1cm4gY2FsbGJhY2soKTtcblx0ICAgICAgdmFyIHZhbHVlID0gaGFzaF9rZXkoZGF0YVtzZWxmLnNldHRpbmdzLnZhbHVlRmllbGRdKTtcblxuXHQgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuXHQgICAgICB9XG5cblx0ICAgICAgc2VsZi5zZXRUZXh0Ym94VmFsdWUoKTtcblx0ICAgICAgc2VsZi5hZGRPcHRpb24oZGF0YSwgdHJ1ZSk7XG5cdCAgICAgIHNlbGYuc2V0Q2FyZXQoY2FyZXQpO1xuXHQgICAgICBzZWxmLmFkZEl0ZW0odmFsdWUpO1xuXHQgICAgICBjYWxsYmFjayhkYXRhKTtcblx0ICAgICAgY3JlYXRlZCA9IHRydWU7XG5cdCAgICB9O1xuXG5cdCAgICBpZiAodHlwZW9mIHNlbGYuc2V0dGluZ3MuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgIG91dHB1dCA9IHNlbGYuc2V0dGluZ3MuY3JlYXRlLmNhbGwodGhpcywgaW5wdXQsIGNyZWF0ZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBvdXRwdXQgPSB7XG5cdCAgICAgICAgW3NlbGYuc2V0dGluZ3MubGFiZWxGaWVsZF06IGlucHV0LFxuXHQgICAgICAgIFtzZWxmLnNldHRpbmdzLnZhbHVlRmllbGRdOiBpbnB1dFxuXHQgICAgICB9O1xuXHQgICAgfVxuXG5cdCAgICBpZiAoIWNyZWF0ZWQpIHtcblx0ICAgICAgY3JlYXRlKG91dHB1dCk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBSZS1yZW5kZXJzIHRoZSBzZWxlY3RlZCBpdGVtIGxpc3RzLlxuXHQgICAqL1xuXG5cblx0ICByZWZyZXNoSXRlbXMoKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cdCAgICBzZWxmLmxhc3RRdWVyeSA9IG51bGw7XG5cblx0ICAgIGlmIChzZWxmLmlzU2V0dXApIHtcblx0ICAgICAgc2VsZi5hZGRJdGVtcyhzZWxmLml0ZW1zKTtcblx0ICAgIH1cblxuXHQgICAgc2VsZi51cGRhdGVPcmlnaW5hbElucHV0KCk7XG5cdCAgICBzZWxmLnJlZnJlc2hTdGF0ZSgpO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBVcGRhdGVzIGFsbCBzdGF0ZS1kZXBlbmRlbnQgYXR0cmlidXRlc1xuXHQgICAqIGFuZCBDU1MgY2xhc3Nlcy5cblx0ICAgKi9cblxuXG5cdCAgcmVmcmVzaFN0YXRlKCkge1xuXHQgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cdCAgICBzZWxmLnJlZnJlc2hWYWxpZGl0eVN0YXRlKCk7XG5cdCAgICBjb25zdCBpc0Z1bGwgPSBzZWxmLmlzRnVsbCgpO1xuXHQgICAgY29uc3QgaXNMb2NrZWQgPSBzZWxmLmlzTG9ja2VkO1xuXHQgICAgc2VsZi53cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ3J0bCcsIHNlbGYucnRsKTtcblx0ICAgIGNvbnN0IHdyYXBfY2xhc3NMaXN0ID0gc2VsZi53cmFwcGVyLmNsYXNzTGlzdDtcblx0ICAgIHdyYXBfY2xhc3NMaXN0LnRvZ2dsZSgnZm9jdXMnLCBzZWxmLmlzRm9jdXNlZCk7XG5cdCAgICB3cmFwX2NsYXNzTGlzdC50b2dnbGUoJ2Rpc2FibGVkJywgc2VsZi5pc0Rpc2FibGVkKTtcblx0ICAgIHdyYXBfY2xhc3NMaXN0LnRvZ2dsZSgncmVxdWlyZWQnLCBzZWxmLmlzUmVxdWlyZWQpO1xuXHQgICAgd3JhcF9jbGFzc0xpc3QudG9nZ2xlKCdpbnZhbGlkJywgIXNlbGYuaXNWYWxpZCk7XG5cdCAgICB3cmFwX2NsYXNzTGlzdC50b2dnbGUoJ2xvY2tlZCcsIGlzTG9ja2VkKTtcblx0ICAgIHdyYXBfY2xhc3NMaXN0LnRvZ2dsZSgnZnVsbCcsIGlzRnVsbCk7XG5cdCAgICB3cmFwX2NsYXNzTGlzdC50b2dnbGUoJ2lucHV0LWFjdGl2ZScsIHNlbGYuaXNGb2N1c2VkICYmICFzZWxmLmlzSW5wdXRIaWRkZW4pO1xuXHQgICAgd3JhcF9jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bi1hY3RpdmUnLCBzZWxmLmlzT3Blbik7XG5cdCAgICB3cmFwX2NsYXNzTGlzdC50b2dnbGUoJ2hhcy1vcHRpb25zJywgaXNFbXB0eU9iamVjdChzZWxmLm9wdGlvbnMpKTtcblx0ICAgIHdyYXBfY2xhc3NMaXN0LnRvZ2dsZSgnaGFzLWl0ZW1zJywgc2VsZi5pdGVtcy5sZW5ndGggPiAwKTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogVXBkYXRlIHRoZSBgcmVxdWlyZWRgIGF0dHJpYnV0ZSBvZiBib3RoIGlucHV0IGFuZCBjb250cm9sIGlucHV0LlxuXHQgICAqXG5cdCAgICogVGhlIGByZXF1aXJlZGAgcHJvcGVydHkgbmVlZHMgdG8gYmUgYWN0aXZhdGVkIG9uIHRoZSBjb250cm9sIGlucHV0XG5cdCAgICogZm9yIHRoZSBlcnJvciB0byBiZSBkaXNwbGF5ZWQgYXQgdGhlIHJpZ2h0IHBsYWNlLiBgcmVxdWlyZWRgIGFsc29cblx0ICAgKiBuZWVkcyB0byBiZSB0ZW1wb3JhcmlseSBkZWFjdGl2YXRlZCBvbiB0aGUgaW5wdXQgc2luY2UgdGhlIGlucHV0IGlzXG5cdCAgICogaGlkZGVuIGFuZCBjYW4ndCBzaG93IGVycm9ycy5cblx0ICAgKi9cblxuXG5cdCAgcmVmcmVzaFZhbGlkaXR5U3RhdGUoKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cblx0ICAgIGlmICghc2VsZi5pbnB1dC5jaGVja1ZhbGlkaXR5KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgc2VsZi5pc1ZhbGlkID0gc2VsZi5pbnB1dC5jaGVja1ZhbGlkaXR5KCk7XG5cdCAgICBzZWxmLmlzSW52YWxpZCA9ICFzZWxmLmlzVmFsaWQ7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgbW9yZSBpdGVtcyBjYW4gYmUgYWRkZWRcblx0ICAgKiB0byB0aGUgY29udHJvbCB3aXRob3V0IGV4Y2VlZGluZyB0aGUgdXNlci1kZWZpbmVkIG1heGltdW0uXG5cdCAgICpcblx0ICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICAgKi9cblxuXG5cdCAgaXNGdWxsKCkge1xuXHQgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWF4SXRlbXMgIT09IG51bGwgJiYgdGhpcy5pdGVtcy5sZW5ndGggPj0gdGhpcy5zZXR0aW5ncy5tYXhJdGVtcztcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogUmVmcmVzaGVzIHRoZSBvcmlnaW5hbCA8c2VsZWN0PiBvciA8aW5wdXQ+XG5cdCAgICogZWxlbWVudCB0byByZWZsZWN0IHRoZSBjdXJyZW50IHN0YXRlLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIHVwZGF0ZU9yaWdpbmFsSW5wdXQob3B0cyA9IHt9KSB7XG5cdCAgICBjb25zdCBzZWxmID0gdGhpcztcblx0ICAgIHZhciBvcHRpb24sIGxhYmVsO1xuXHQgICAgY29uc3QgZW1wdHlfb3B0aW9uID0gc2VsZi5pbnB1dC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCJcIl0nKTtcblxuXHQgICAgaWYgKHNlbGYuaXNfc2VsZWN0X3RhZykge1xuXHQgICAgICBjb25zdCBzZWxlY3RlZCA9IFtdO1xuXHQgICAgICBjb25zdCBoYXNfc2VsZWN0ZWQgPSBzZWxmLmlucHV0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbjpjaGVja2VkJykubGVuZ3RoO1xuXG5cdCAgICAgIGZ1bmN0aW9uIEFkZFNlbGVjdGVkKG9wdGlvbl9lbCwgdmFsdWUsIGxhYmVsKSB7XG5cdCAgICAgICAgaWYgKCFvcHRpb25fZWwpIHtcblx0ICAgICAgICAgIG9wdGlvbl9lbCA9IGdldERvbSgnPG9wdGlvbiB2YWx1ZT1cIicgKyBlc2NhcGVfaHRtbCh2YWx1ZSkgKyAnXCI+JyArIGVzY2FwZV9odG1sKGxhYmVsKSArICc8L29wdGlvbj4nKTtcblx0ICAgICAgICB9IC8vIGRvbid0IG1vdmUgZW1wdHkgb3B0aW9uIGZyb20gdG9wIG9mIGxpc3Rcblx0ICAgICAgICAvLyBmaXhlcyBidWcgaW4gZmlyZWZveCBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzI1MjkzXG5cblxuXHQgICAgICAgIGlmIChvcHRpb25fZWwgIT0gZW1wdHlfb3B0aW9uKSB7XG5cdCAgICAgICAgICBzZWxmLmlucHV0LmFwcGVuZChvcHRpb25fZWwpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uX2VsKTsgLy8gbWFya2luZyBlbXB0eSBvcHRpb24gYXMgc2VsZWN0ZWQgY2FuIGJyZWFrIHZhbGlkYXRpb25cblx0ICAgICAgICAvLyBmaXhlcyBodHRwczovL2dpdGh1Yi5jb20vb3JjaGlkanMvdG9tLXNlbGVjdC9pc3N1ZXMvMzAzXG5cblx0ICAgICAgICBpZiAob3B0aW9uX2VsICE9IGVtcHR5X29wdGlvbiB8fCBoYXNfc2VsZWN0ZWQgPiAwKSB7XG5cdCAgICAgICAgICBvcHRpb25fZWwuc2VsZWN0ZWQgPSB0cnVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiBvcHRpb25fZWw7XG5cdCAgICAgIH0gLy8gdW5zZWxlY3QgYWxsIHNlbGVjdGVkIG9wdGlvbnNcblxuXG5cdCAgICAgIHNlbGYuaW5wdXQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uOmNoZWNrZWQnKS5mb3JFYWNoKG9wdGlvbl9lbCA9PiB7XG5cdCAgICAgICAgb3B0aW9uX2VsLnNlbGVjdGVkID0gZmFsc2U7XG5cdCAgICAgIH0pOyAvLyBub3RoaW5nIHNlbGVjdGVkP1xuXG5cdCAgICAgIGlmIChzZWxmLml0ZW1zLmxlbmd0aCA9PSAwICYmIHNlbGYuc2V0dGluZ3MubW9kZSA9PSAnc2luZ2xlJykge1xuXHQgICAgICAgIEFkZFNlbGVjdGVkKGVtcHR5X29wdGlvbiwgXCJcIiwgXCJcIik7IC8vIG9yZGVyIHNlbGVjdGVkIDxvcHRpb24+IHRhZ3MgZm9yIHZhbHVlcyBpbiBzZWxmLml0ZW1zXG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5pdGVtcy5mb3JFYWNoKHZhbHVlID0+IHtcblx0ICAgICAgICAgIG9wdGlvbiA9IHNlbGYub3B0aW9uc1t2YWx1ZV07XG5cdCAgICAgICAgICBsYWJlbCA9IG9wdGlvbltzZWxmLnNldHRpbmdzLmxhYmVsRmllbGRdIHx8ICcnO1xuXG5cdCAgICAgICAgICBpZiAoc2VsZWN0ZWQuaW5jbHVkZXMob3B0aW9uLiRvcHRpb24pKSB7XG5cdCAgICAgICAgICAgIGNvbnN0IHJldXNlX29wdCA9IHNlbGYuaW5wdXQucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHthZGRTbGFzaGVzKHZhbHVlKX1cIl06bm90KDpjaGVja2VkKWApO1xuXHQgICAgICAgICAgICBBZGRTZWxlY3RlZChyZXVzZV9vcHQsIHZhbHVlLCBsYWJlbCk7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBvcHRpb24uJG9wdGlvbiA9IEFkZFNlbGVjdGVkKG9wdGlvbi4kb3B0aW9uLCB2YWx1ZSwgbGFiZWwpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBzZWxmLmlucHV0LnZhbHVlID0gc2VsZi5nZXRWYWx1ZSgpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoc2VsZi5pc1NldHVwKSB7XG5cdCAgICAgIGlmICghb3B0cy5zaWxlbnQpIHtcblx0ICAgICAgICBzZWxmLnRyaWdnZXIoJ2NoYW5nZScsIHNlbGYuZ2V0VmFsdWUoKSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdCAgLyoqXG5cdCAgICogU2hvd3MgdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93biBjb250YWluaW5nXG5cdCAgICogdGhlIGF2YWlsYWJsZSBvcHRpb25zLlxuXHQgICAqL1xuXG5cblx0ICBvcGVuKCkge1xuXHQgICAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgICAgaWYgKHNlbGYuaXNMb2NrZWQgfHwgc2VsZi5pc09wZW4gfHwgc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnbXVsdGknICYmIHNlbGYuaXNGdWxsKCkpIHJldHVybjtcblx0ICAgIHNlbGYuaXNPcGVuID0gdHJ1ZTtcblx0ICAgIHNldEF0dHIoc2VsZi5mb2N1c19ub2RlLCB7XG5cdCAgICAgICdhcmlhLWV4cGFuZGVkJzogJ3RydWUnXG5cdCAgICB9KTtcblx0ICAgIHNlbGYucmVmcmVzaFN0YXRlKCk7XG5cdCAgICBhcHBseUNTUyhzZWxmLmRyb3Bkb3duLCB7XG5cdCAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuXHQgICAgICBkaXNwbGF5OiAnYmxvY2snXG5cdCAgICB9KTtcblx0ICAgIHNlbGYucG9zaXRpb25Ecm9wZG93bigpO1xuXHQgICAgYXBwbHlDU1Moc2VsZi5kcm9wZG93biwge1xuXHQgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG5cdCAgICAgIGRpc3BsYXk6ICdibG9jaydcblx0ICAgIH0pO1xuXHQgICAgc2VsZi5mb2N1cygpO1xuXHQgICAgc2VsZi50cmlnZ2VyKCdkcm9wZG93bl9vcGVuJywgc2VsZi5kcm9wZG93bik7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIENsb3NlcyB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duIG1lbnUuXG5cdCAgICovXG5cblxuXHQgIGNsb3NlKHNldFRleHRib3hWYWx1ZSA9IHRydWUpIHtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgIHZhciB0cmlnZ2VyID0gc2VsZi5pc09wZW47XG5cblx0ICAgIGlmIChzZXRUZXh0Ym94VmFsdWUpIHtcblx0ICAgICAgLy8gYmVmb3JlIGJsdXIoKSB0byBwcmV2ZW50IGZvcm0gb25jaGFuZ2UgZXZlbnRcblx0ICAgICAgc2VsZi5zZXRUZXh0Ym94VmFsdWUoKTtcblxuXHQgICAgICBpZiAoc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnc2luZ2xlJyAmJiBzZWxmLml0ZW1zLmxlbmd0aCkge1xuXHQgICAgICAgIHNlbGYuaGlkZUlucHV0KCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgc2VsZi5pc09wZW4gPSBmYWxzZTtcblx0ICAgIHNldEF0dHIoc2VsZi5mb2N1c19ub2RlLCB7XG5cdCAgICAgICdhcmlhLWV4cGFuZGVkJzogJ2ZhbHNlJ1xuXHQgICAgfSk7XG5cdCAgICBhcHBseUNTUyhzZWxmLmRyb3Bkb3duLCB7XG5cdCAgICAgIGRpc3BsYXk6ICdub25lJ1xuXHQgICAgfSk7XG5cblx0ICAgIGlmIChzZWxmLnNldHRpbmdzLmhpZGVTZWxlY3RlZCkge1xuXHQgICAgICBzZWxmLmNsZWFyQWN0aXZlT3B0aW9uKCk7XG5cdCAgICB9XG5cblx0ICAgIHNlbGYucmVmcmVzaFN0YXRlKCk7XG5cdCAgICBpZiAodHJpZ2dlcikgc2VsZi50cmlnZ2VyKCdkcm9wZG93bl9jbG9zZScsIHNlbGYuZHJvcGRvd24pO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBDYWxjdWxhdGVzIGFuZCBhcHBsaWVzIHRoZSBhcHByb3ByaWF0ZVxuXHQgICAqIHBvc2l0aW9uIG9mIHRoZSBkcm9wZG93biBpZiBkcm9wZG93blBhcmVudCA9ICdib2R5Jy5cblx0ICAgKiBPdGhlcndpc2UsIHBvc2l0aW9uIGlzIGRldGVybWluZWQgYnkgY3NzXG5cdCAgICovXG5cblxuXHQgIHBvc2l0aW9uRHJvcGRvd24oKSB7XG5cdCAgICBpZiAodGhpcy5zZXR0aW5ncy5kcm9wZG93blBhcmVudCAhPT0gJ2JvZHknKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRyb2w7XG5cdCAgICB2YXIgcmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdCAgICB2YXIgdG9wID0gY29udGV4dC5vZmZzZXRIZWlnaHQgKyByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuXHQgICAgdmFyIGxlZnQgPSByZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWDtcblx0ICAgIGFwcGx5Q1NTKHRoaXMuZHJvcGRvd24sIHtcblx0ICAgICAgd2lkdGg6IHJlY3Qud2lkdGggKyAncHgnLFxuXHQgICAgICB0b3A6IHRvcCArICdweCcsXG5cdCAgICAgIGxlZnQ6IGxlZnQgKyAncHgnXG5cdCAgICB9KTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogUmVzZXRzIC8gY2xlYXJzIGFsbCBzZWxlY3RlZCBpdGVtc1xuXHQgICAqIGZyb20gdGhlIGNvbnRyb2wuXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgY2xlYXIoc2lsZW50KSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cdCAgICBpZiAoIXNlbGYuaXRlbXMubGVuZ3RoKSByZXR1cm47XG5cdCAgICB2YXIgaXRlbXMgPSBzZWxmLmNvbnRyb2xDaGlsZHJlbigpO1xuXHQgICAgaXRlcmF0ZShpdGVtcywgaXRlbSA9PiB7XG5cdCAgICAgIHNlbGYucmVtb3ZlSXRlbShpdGVtLCB0cnVlKTtcblx0ICAgIH0pO1xuXHQgICAgc2VsZi5zaG93SW5wdXQoKTtcblx0ICAgIGlmICghc2lsZW50KSBzZWxmLnVwZGF0ZU9yaWdpbmFsSW5wdXQoKTtcblx0ICAgIHNlbGYudHJpZ2dlcignY2xlYXInKTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogQSBoZWxwZXIgbWV0aG9kIGZvciBpbnNlcnRpbmcgYW4gZWxlbWVudFxuXHQgICAqIGF0IHRoZSBjdXJyZW50IGNhcmV0IHBvc2l0aW9uLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIGluc2VydEF0Q2FyZXQoZWwpIHtcblx0ICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXHQgICAgY29uc3QgY2FyZXQgPSBzZWxmLmNhcmV0UG9zO1xuXHQgICAgY29uc3QgdGFyZ2V0ID0gc2VsZi5jb250cm9sO1xuXHQgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShlbCwgdGFyZ2V0LmNoaWxkcmVuW2NhcmV0XSk7XG5cdCAgICBzZWxmLnNldENhcmV0KGNhcmV0ICsgMSk7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIFJlbW92ZXMgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgaXRlbShzKS5cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBkZWxldGVTZWxlY3Rpb24oZSkge1xuXHQgICAgdmFyIGRpcmVjdGlvbiwgc2VsZWN0aW9uLCBjYXJldCwgdGFpbDtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgIGRpcmVjdGlvbiA9IGUgJiYgZS5rZXlDb2RlID09PSBLRVlfQkFDS1NQQUNFID8gLTEgOiAxO1xuXHQgICAgc2VsZWN0aW9uID0gZ2V0U2VsZWN0aW9uKHNlbGYuY29udHJvbF9pbnB1dCk7IC8vIGRldGVybWluZSBpdGVtcyB0aGF0IHdpbGwgYmUgcmVtb3ZlZFxuXG5cdCAgICBjb25zdCBybV9pdGVtcyA9IFtdO1xuXG5cdCAgICBpZiAoc2VsZi5hY3RpdmVJdGVtcy5sZW5ndGgpIHtcblx0ICAgICAgdGFpbCA9IGdldFRhaWwoc2VsZi5hY3RpdmVJdGVtcywgZGlyZWN0aW9uKTtcblx0ICAgICAgY2FyZXQgPSBub2RlSW5kZXgodGFpbCk7XG5cblx0ICAgICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcblx0ICAgICAgICBjYXJldCsrO1xuXHQgICAgICB9XG5cblx0ICAgICAgaXRlcmF0ZShzZWxmLmFjdGl2ZUl0ZW1zLCBpdGVtID0+IHJtX2l0ZW1zLnB1c2goaXRlbSkpO1xuXHQgICAgfSBlbHNlIGlmICgoc2VsZi5pc0ZvY3VzZWQgfHwgc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnc2luZ2xlJykgJiYgc2VsZi5pdGVtcy5sZW5ndGgpIHtcblx0ICAgICAgY29uc3QgaXRlbXMgPSBzZWxmLmNvbnRyb2xDaGlsZHJlbigpO1xuXG5cdCAgICAgIGlmIChkaXJlY3Rpb24gPCAwICYmIHNlbGVjdGlvbi5zdGFydCA9PT0gMCAmJiBzZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgcm1faXRlbXMucHVzaChpdGVtc1tzZWxmLmNhcmV0UG9zIC0gMV0pO1xuXHQgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA+IDAgJiYgc2VsZWN0aW9uLnN0YXJ0ID09PSBzZWxmLmlucHV0VmFsdWUoKS5sZW5ndGgpIHtcblx0ICAgICAgICBybV9pdGVtcy5wdXNoKGl0ZW1zW3NlbGYuY2FyZXRQb3NdKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBjb25zdCB2YWx1ZXMgPSBybV9pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmRhdGFzZXQudmFsdWUpOyAvLyBhbGxvdyB0aGUgY2FsbGJhY2sgdG8gYWJvcnRcblxuXHQgICAgaWYgKCF2YWx1ZXMubGVuZ3RoIHx8IHR5cGVvZiBzZWxmLnNldHRpbmdzLm9uRGVsZXRlID09PSAnZnVuY3Rpb24nICYmIHNlbGYuc2V0dGluZ3Mub25EZWxldGUuY2FsbChzZWxmLCB2YWx1ZXMsIGUpID09PSBmYWxzZSkge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cblx0ICAgIHByZXZlbnREZWZhdWx0KGUsIHRydWUpOyAvLyBwZXJmb3JtIHJlbW92YWxcblxuXHQgICAgaWYgKHR5cGVvZiBjYXJldCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgc2VsZi5zZXRDYXJldChjYXJldCk7XG5cdCAgICB9XG5cblx0ICAgIHdoaWxlIChybV9pdGVtcy5sZW5ndGgpIHtcblx0ICAgICAgc2VsZi5yZW1vdmVJdGVtKHJtX2l0ZW1zLnBvcCgpKTtcblx0ICAgIH1cblxuXHQgICAgc2VsZi5zaG93SW5wdXQoKTtcblx0ICAgIHNlbGYucG9zaXRpb25Ecm9wZG93bigpO1xuXHQgICAgc2VsZi5yZWZyZXNoT3B0aW9ucyhmYWxzZSk7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogU2VsZWN0cyB0aGUgcHJldmlvdXMgLyBuZXh0IGl0ZW0gKGRlcGVuZGluZyBvbiB0aGUgYGRpcmVjdGlvbmAgYXJndW1lbnQpLlxuXHQgICAqXG5cdCAgICogPiAwIC0gcmlnaHRcblx0ICAgKiA8IDAgLSBsZWZ0XG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgYWR2YW5jZVNlbGVjdGlvbihkaXJlY3Rpb24sIGUpIHtcblx0ICAgIHZhciBsYXN0X2FjdGl2ZSxcblx0ICAgICAgICBhZGphY2VudCxcblx0ICAgICAgICBzZWxmID0gdGhpcztcblx0ICAgIGlmIChzZWxmLnJ0bCkgZGlyZWN0aW9uICo9IC0xO1xuXHQgICAgaWYgKHNlbGYuaW5wdXRWYWx1ZSgpLmxlbmd0aCkgcmV0dXJuOyAvLyBhZGQgb3IgcmVtb3ZlIHRvIGFjdGl2ZSBpdGVtc1xuXG5cdCAgICBpZiAoaXNLZXlEb3duKEtFWV9TSE9SVENVVCwgZSkgfHwgaXNLZXlEb3duKCdzaGlmdEtleScsIGUpKSB7XG5cdCAgICAgIGxhc3RfYWN0aXZlID0gc2VsZi5nZXRMYXN0QWN0aXZlKGRpcmVjdGlvbik7XG5cblx0ICAgICAgaWYgKGxhc3RfYWN0aXZlKSB7XG5cdCAgICAgICAgaWYgKCFsYXN0X2FjdGl2ZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdCAgICAgICAgICBhZGphY2VudCA9IGxhc3RfYWN0aXZlO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBhZGphY2VudCA9IHNlbGYuZ2V0QWRqYWNlbnQobGFzdF9hY3RpdmUsIGRpcmVjdGlvbiwgJ2l0ZW0nKTtcblx0ICAgICAgICB9IC8vIGlmIG5vIGFjdGl2ZSBpdGVtLCBnZXQgaXRlbXMgYWRqYWNlbnQgdG8gdGhlIGNvbnRyb2wgaW5wdXRcblxuXHQgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA+IDApIHtcblx0ICAgICAgICBhZGphY2VudCA9IHNlbGYuY29udHJvbF9pbnB1dC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgYWRqYWNlbnQgPSBzZWxmLmNvbnRyb2xfaW5wdXQucHJldmlvdXNFbGVtZW50U2libGluZztcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmIChhZGphY2VudCkge1xuXHQgICAgICAgIGlmIChhZGphY2VudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cdCAgICAgICAgICBzZWxmLnJlbW92ZUFjdGl2ZUl0ZW0obGFzdF9hY3RpdmUpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHNlbGYuc2V0QWN0aXZlSXRlbUNsYXNzKGFkamFjZW50KTsgLy8gbWFyayBhcyBsYXN0X2FjdGl2ZSAhISBhZnRlciByZW1vdmVBY3RpdmVJdGVtKCkgb24gbGFzdF9hY3RpdmVcblx0ICAgICAgfSAvLyBtb3ZlIGNhcmV0IHRvIHRoZSBsZWZ0IG9yIHJpZ2h0XG5cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHNlbGYubW92ZUNhcmV0KGRpcmVjdGlvbik7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgbW92ZUNhcmV0KGRpcmVjdGlvbikge31cblx0ICAvKipcblx0ICAgKiBHZXQgdGhlIGxhc3QgYWN0aXZlIGl0ZW1cblx0ICAgKlxuXHQgICAqL1xuXG5cblx0ICBnZXRMYXN0QWN0aXZlKGRpcmVjdGlvbikge1xuXHQgICAgbGV0IGxhc3RfYWN0aXZlID0gdGhpcy5jb250cm9sLnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LWFjdGl2ZScpO1xuXG5cdCAgICBpZiAobGFzdF9hY3RpdmUpIHtcblx0ICAgICAgcmV0dXJuIGxhc3RfYWN0aXZlO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgcmVzdWx0ID0gdGhpcy5jb250cm9sLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgICByZXR1cm4gZ2V0VGFpbChyZXN1bHQsIGRpcmVjdGlvbik7XG5cdCAgICB9XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIE1vdmVzIHRoZSBjYXJldCB0byB0aGUgc3BlY2lmaWVkIGluZGV4LlxuXHQgICAqXG5cdCAgICogVGhlIGlucHV0IG11c3QgYmUgbW92ZWQgYnkgbGVhdmluZyBpdCBpbiBwbGFjZSBhbmQgbW92aW5nIHRoZVxuXHQgICAqIHNpYmxpbmdzLCBkdWUgdG8gdGhlIGZhY3QgdGhhdCBmb2N1cyBjYW5ub3QgYmUgcmVzdG9yZWQgb25jZSBsb3N0XG5cdCAgICogb24gbW9iaWxlIHdlYmtpdCBkZXZpY2VzXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgc2V0Q2FyZXQobmV3X3Bvcykge1xuXHQgICAgdGhpcy5jYXJldFBvcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBSZXR1cm4gbGlzdCBvZiBpdGVtIGRvbSBlbGVtZW50c1xuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIGNvbnRyb2xDaGlsZHJlbigpIHtcblx0ICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY29udHJvbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cy1pdGVtXScpKTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogRGlzYWJsZXMgdXNlciBpbnB1dCBvbiB0aGUgY29udHJvbC4gVXNlZCB3aGlsZVxuXHQgICAqIGl0ZW1zIGFyZSBiZWluZyBhc3luY2hyb25vdXNseSBjcmVhdGVkLlxuXHQgICAqL1xuXG5cblx0ICBsb2NrKCkge1xuXHQgICAgdGhpcy5pc0xvY2tlZCA9IHRydWU7XG5cdCAgICB0aGlzLnJlZnJlc2hTdGF0ZSgpO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBSZS1lbmFibGVzIHVzZXIgaW5wdXQgb24gdGhlIGNvbnRyb2wuXG5cdCAgICovXG5cblxuXHQgIHVubG9jaygpIHtcblx0ICAgIHRoaXMuaXNMb2NrZWQgPSBmYWxzZTtcblx0ICAgIHRoaXMucmVmcmVzaFN0YXRlKCk7XG5cdCAgfVxuXHQgIC8qKlxuXHQgICAqIERpc2FibGVzIHVzZXIgaW5wdXQgb24gdGhlIGNvbnRyb2wgY29tcGxldGVseS5cblx0ICAgKiBXaGlsZSBkaXNhYmxlZCwgaXQgY2Fubm90IHJlY2VpdmUgZm9jdXMuXG5cdCAgICovXG5cblxuXHQgIGRpc2FibGUoKSB7XG5cdCAgICB2YXIgc2VsZiA9IHRoaXM7XG5cdCAgICBzZWxmLmlucHV0LmRpc2FibGVkID0gdHJ1ZTtcblx0ICAgIHNlbGYuY29udHJvbF9pbnB1dC5kaXNhYmxlZCA9IHRydWU7XG5cdCAgICBzZWxmLmZvY3VzX25vZGUudGFiSW5kZXggPSAtMTtcblx0ICAgIHNlbGYuaXNEaXNhYmxlZCA9IHRydWU7XG5cdCAgICB0aGlzLmNsb3NlKCk7XG5cdCAgICBzZWxmLmxvY2soKTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogRW5hYmxlcyB0aGUgY29udHJvbCBzbyB0aGF0IGl0IGNhbiByZXNwb25kXG5cdCAgICogdG8gZm9jdXMgYW5kIHVzZXIgaW5wdXQuXG5cdCAgICovXG5cblxuXHQgIGVuYWJsZSgpIHtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgIHNlbGYuaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcblx0ICAgIHNlbGYuY29udHJvbF9pbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuXHQgICAgc2VsZi5mb2N1c19ub2RlLnRhYkluZGV4ID0gc2VsZi50YWJJbmRleDtcblx0ICAgIHNlbGYuaXNEaXNhYmxlZCA9IGZhbHNlO1xuXHQgICAgc2VsZi51bmxvY2soKTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogQ29tcGxldGVseSBkZXN0cm95cyB0aGUgY29udHJvbCBhbmRcblx0ICAgKiB1bmJpbmRzIGFsbCBldmVudCBsaXN0ZW5lcnMgc28gdGhhdCBpdCBjYW5cblx0ICAgKiBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cblx0ICAgKi9cblxuXG5cdCAgZGVzdHJveSgpIHtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgIHZhciByZXZlcnRTZXR0aW5ncyA9IHNlbGYucmV2ZXJ0U2V0dGluZ3M7XG5cdCAgICBzZWxmLnRyaWdnZXIoJ2Rlc3Ryb3knKTtcblx0ICAgIHNlbGYub2ZmKCk7XG5cdCAgICBzZWxmLndyYXBwZXIucmVtb3ZlKCk7XG5cdCAgICBzZWxmLmRyb3Bkb3duLnJlbW92ZSgpO1xuXHQgICAgc2VsZi5pbnB1dC5pbm5lckhUTUwgPSByZXZlcnRTZXR0aW5ncy5pbm5lckhUTUw7XG5cdCAgICBzZWxmLmlucHV0LnRhYkluZGV4ID0gcmV2ZXJ0U2V0dGluZ3MudGFiSW5kZXg7XG5cdCAgICByZW1vdmVDbGFzc2VzKHNlbGYuaW5wdXQsICd0b21zZWxlY3RlZCcsICd0cy1oaWRkZW4tYWNjZXNzaWJsZScpO1xuXG5cdCAgICBzZWxmLl9kZXN0cm95KCk7XG5cblx0ICAgIGRlbGV0ZSBzZWxmLmlucHV0LnRvbXNlbGVjdDtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogQSBoZWxwZXIgbWV0aG9kIGZvciByZW5kZXJpbmcgXCJpdGVtXCIgYW5kXG5cdCAgICogXCJvcHRpb25cIiB0ZW1wbGF0ZXMsIGdpdmVuIHRoZSBkYXRhLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIHJlbmRlcih0ZW1wbGF0ZU5hbWUsIGRhdGEpIHtcblx0ICAgIGlmICh0eXBlb2YgdGhpcy5zZXR0aW5ncy5yZW5kZXJbdGVtcGxhdGVOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHRoaXMuX3JlbmRlcih0ZW1wbGF0ZU5hbWUsIGRhdGEpO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBfcmVuZGVyKCkgY2FuIGJlIGNhbGxlZCBkaXJlY3RseSB3aGVuIHdlIGtub3cgd2UgZG9uJ3Qgd2FudCB0byBoaXQgdGhlIGNhY2hlXG5cdCAgICogcmV0dXJuIHR5cGUgY291bGQgYmUgbnVsbCBmb3Igc29tZSB0ZW1wbGF0ZXMsIHdlIG5lZWQgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8zMzAxNFxuXHQgICAqL1xuXG5cblx0ICBfcmVuZGVyKHRlbXBsYXRlTmFtZSwgZGF0YSkge1xuXHQgICAgdmFyIHZhbHVlID0gJycsXG5cdCAgICAgICAgaWQsXG5cdCAgICAgICAgaHRtbDtcblx0ICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdCAgICBpZiAodGVtcGxhdGVOYW1lID09PSAnb3B0aW9uJyB8fCB0ZW1wbGF0ZU5hbWUgPT0gJ2l0ZW0nKSB7XG5cdCAgICAgIHZhbHVlID0gZ2V0X2hhc2goZGF0YVtzZWxmLnNldHRpbmdzLnZhbHVlRmllbGRdKTtcblx0ICAgIH0gLy8gcmVuZGVyIG1hcmt1cFxuXG5cblx0ICAgIGh0bWwgPSBzZWxmLnNldHRpbmdzLnJlbmRlclt0ZW1wbGF0ZU5hbWVdLmNhbGwodGhpcywgZGF0YSwgZXNjYXBlX2h0bWwpO1xuXG5cdCAgICBpZiAoaHRtbCA9PSBudWxsKSB7XG5cdCAgICAgIHJldHVybiBodG1sO1xuXHQgICAgfVxuXG5cdCAgICBodG1sID0gZ2V0RG9tKGh0bWwpOyAvLyBhZGQgbWFuZGF0b3J5IGF0dHJpYnV0ZXNcblxuXHQgICAgaWYgKHRlbXBsYXRlTmFtZSA9PT0gJ29wdGlvbicgfHwgdGVtcGxhdGVOYW1lID09PSAnb3B0aW9uX2NyZWF0ZScpIHtcblx0ICAgICAgaWYgKGRhdGFbc2VsZi5zZXR0aW5ncy5kaXNhYmxlZEZpZWxkXSkge1xuXHQgICAgICAgIHNldEF0dHIoaHRtbCwge1xuXHQgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZSdcblx0ICAgICAgICB9KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZXRBdHRyKGh0bWwsIHtcblx0ICAgICAgICAgICdkYXRhLXNlbGVjdGFibGUnOiAnJ1xuXHQgICAgICAgIH0pO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2UgaWYgKHRlbXBsYXRlTmFtZSA9PT0gJ29wdGdyb3VwJykge1xuXHQgICAgICBpZCA9IGRhdGEuZ3JvdXBbc2VsZi5zZXR0aW5ncy5vcHRncm91cFZhbHVlRmllbGRdO1xuXHQgICAgICBzZXRBdHRyKGh0bWwsIHtcblx0ICAgICAgICAnZGF0YS1ncm91cCc6IGlkXG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIGlmIChkYXRhLmdyb3VwW3NlbGYuc2V0dGluZ3MuZGlzYWJsZWRGaWVsZF0pIHtcblx0ICAgICAgICBzZXRBdHRyKGh0bWwsIHtcblx0ICAgICAgICAgICdkYXRhLWRpc2FibGVkJzogJydcblx0ICAgICAgICB9KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAodGVtcGxhdGVOYW1lID09PSAnb3B0aW9uJyB8fCB0ZW1wbGF0ZU5hbWUgPT09ICdpdGVtJykge1xuXHQgICAgICBzZXRBdHRyKGh0bWwsIHtcblx0ICAgICAgICAnZGF0YS12YWx1ZSc6IHZhbHVlXG5cdCAgICAgIH0pOyAvLyBtYWtlIHN1cmUgd2UgaGF2ZSBzb21lIGNsYXNzZXMgaWYgYSB0ZW1wbGF0ZSBpcyBvdmVyd3JpdHRlblxuXG5cdCAgICAgIGlmICh0ZW1wbGF0ZU5hbWUgPT09ICdpdGVtJykge1xuXHQgICAgICAgIGFkZENsYXNzZXMoaHRtbCwgc2VsZi5zZXR0aW5ncy5pdGVtQ2xhc3MpO1xuXHQgICAgICAgIHNldEF0dHIoaHRtbCwge1xuXHQgICAgICAgICAgJ2RhdGEtdHMtaXRlbSc6ICcnXG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgYWRkQ2xhc3NlcyhodG1sLCBzZWxmLnNldHRpbmdzLm9wdGlvbkNsYXNzKTtcblx0ICAgICAgICBzZXRBdHRyKGh0bWwsIHtcblx0ICAgICAgICAgIHJvbGU6ICdvcHRpb24nLFxuXHQgICAgICAgICAgaWQ6IGRhdGEuJGlkXG5cdCAgICAgICAgfSk7IC8vIHVwZGF0ZSBjYWNoZVxuXG5cdCAgICAgICAgc2VsZi5vcHRpb25zW3ZhbHVlXS4kZGl2ID0gaHRtbDtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gaHRtbDtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogQ2xlYXJzIHRoZSByZW5kZXIgY2FjaGUgZm9yIGEgdGVtcGxhdGUuIElmXG5cdCAgICogbm8gdGVtcGxhdGUgaXMgZ2l2ZW4sIGNsZWFycyBhbGwgcmVuZGVyXG5cdCAgICogY2FjaGVzLlxuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIGNsZWFyQ2FjaGUoKSB7XG5cdCAgICBpdGVyYXRlKHRoaXMub3B0aW9ucywgKG9wdGlvbiwgdmFsdWUpID0+IHtcblx0ICAgICAgaWYgKG9wdGlvbi4kZGl2KSB7XG5cdCAgICAgICAgb3B0aW9uLiRkaXYucmVtb3ZlKCk7XG5cdCAgICAgICAgZGVsZXRlIG9wdGlvbi4kZGl2O1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogUmVtb3ZlcyBhIHZhbHVlIGZyb20gaXRlbSBhbmQgb3B0aW9uIGNhY2hlc1xuXHQgICAqXG5cdCAgICovXG5cblxuXHQgIHVuY2FjaGVWYWx1ZSh2YWx1ZSkge1xuXHQgICAgY29uc3Qgb3B0aW9uX2VsID0gdGhpcy5nZXRPcHRpb24odmFsdWUpO1xuXHQgICAgaWYgKG9wdGlvbl9lbCkgb3B0aW9uX2VsLnJlbW92ZSgpO1xuXHQgIH1cblx0ICAvKipcblx0ICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGRpc3BsYXkgdGhlXG5cdCAgICogY3JlYXRlIGl0ZW0gcHJvbXB0LCBnaXZlbiBhIHVzZXIgaW5wdXQuXG5cdCAgICpcblx0ICAgKi9cblxuXG5cdCAgY2FuQ3JlYXRlKGlucHV0KSB7XG5cdCAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5jcmVhdGUgJiYgaW5wdXQubGVuZ3RoID4gMCAmJiB0aGlzLnNldHRpbmdzLmNyZWF0ZUZpbHRlci5jYWxsKHRoaXMsIGlucHV0KTtcblx0ICB9XG5cdCAgLyoqXG5cdCAgICogV3JhcHMgdGhpcy5gbWV0aG9kYCBzbyB0aGF0IGBuZXdfZm5gIGNhbiBiZSBpbnZva2VkICdiZWZvcmUnLCAnYWZ0ZXInLCBvciAnaW5zdGVhZCcgb2YgdGhlIG9yaWdpbmFsIG1ldGhvZFxuXHQgICAqXG5cdCAgICogdGhpcy5ob29rKCdpbnN0ZWFkJywnb25LZXlEb3duJyxmdW5jdGlvbiggYXJnMSwgYXJnMiAuLi4pe1xuXHQgICAqXG5cdCAgICogfSk7XG5cdCAgICovXG5cblxuXHQgIGhvb2sod2hlbiwgbWV0aG9kLCBuZXdfZm4pIHtcblx0ICAgIHZhciBzZWxmID0gdGhpcztcblx0ICAgIHZhciBvcmlnX21ldGhvZCA9IHNlbGZbbWV0aG9kXTtcblxuXHQgICAgc2VsZlttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICB2YXIgcmVzdWx0LCByZXN1bHRfbmV3O1xuXG5cdCAgICAgIGlmICh3aGVuID09PSAnYWZ0ZXInKSB7XG5cdCAgICAgICAgcmVzdWx0ID0gb3JpZ19tZXRob2QuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHJlc3VsdF9uZXcgPSBuZXdfZm4uYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblxuXHQgICAgICBpZiAod2hlbiA9PT0gJ2luc3RlYWQnKSB7XG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdF9uZXc7XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAod2hlbiA9PT0gJ2JlZm9yZScpIHtcblx0ICAgICAgICByZXN1bHQgPSBvcmlnX21ldGhvZC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH07XG5cdCAgfVxuXG5cdH1cblxuXHQvKipcblx0ICogUGx1Z2luOiBcImNoYW5nZV9saXN0ZW5lclwiIChUb20gU2VsZWN0KVxuXHQgKiBDb3B5cmlnaHQgKGMpIGNvbnRyaWJ1dG9yc1xuXHQgKlxuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuXHQgKiBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcblx0ICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cdCAqXG5cdCAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcblx0ICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxuXHQgKiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2Vcblx0ICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblx0ICpcblx0ICovXG5cdGZ1bmN0aW9uIGNoYW5nZV9saXN0ZW5lciAoKSB7XG5cdCAgYWRkRXZlbnQodGhpcy5pbnB1dCwgJ2NoYW5nZScsICgpID0+IHtcblx0ICAgIHRoaXMuc3luYygpO1xuXHQgIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsdWdpbjogXCJyZXN0b3JlX29uX2JhY2tzcGFjZVwiIChUb20gU2VsZWN0KVxuXHQgKiBDb3B5cmlnaHQgKGMpIGNvbnRyaWJ1dG9yc1xuXHQgKlxuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuXHQgKiBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcblx0ICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cdCAqXG5cdCAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcblx0ICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxuXHQgKiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2Vcblx0ICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblx0ICpcblx0ICovXG5cdGZ1bmN0aW9uIGNoZWNrYm94X29wdGlvbnMgKCkge1xuXHQgIHZhciBzZWxmID0gdGhpcztcblx0ICB2YXIgb3JpZ19vbk9wdGlvblNlbGVjdCA9IHNlbGYub25PcHRpb25TZWxlY3Q7XG5cdCAgc2VsZi5zZXR0aW5ncy5oaWRlU2VsZWN0ZWQgPSBmYWxzZTsgLy8gdXBkYXRlIHRoZSBjaGVja2JveCBmb3IgYW4gb3B0aW9uXG5cblx0ICB2YXIgVXBkYXRlQ2hlY2tib3ggPSBmdW5jdGlvbiBVcGRhdGVDaGVja2JveChvcHRpb24pIHtcblx0ICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHQgICAgICB2YXIgY2hlY2tib3ggPSBvcHRpb24ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuXHQgICAgICBpZiAob3B0aW9uLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuXHQgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfSwgMSk7XG5cdCAgfTsgLy8gYWRkIGNoZWNrYm94IHRvIG9wdGlvbiB0ZW1wbGF0ZVxuXG5cblx0ICBzZWxmLmhvb2soJ2FmdGVyJywgJ3NldHVwVGVtcGxhdGVzJywgKCkgPT4ge1xuXHQgICAgdmFyIG9yaWdfcmVuZGVyX29wdGlvbiA9IHNlbGYuc2V0dGluZ3MucmVuZGVyLm9wdGlvbjtcblxuXHQgICAgc2VsZi5zZXR0aW5ncy5yZW5kZXIub3B0aW9uID0gKGRhdGEsIGVzY2FwZV9odG1sKSA9PiB7XG5cdCAgICAgIHZhciByZW5kZXJlZCA9IGdldERvbShvcmlnX3JlbmRlcl9vcHRpb24uY2FsbChzZWxmLCBkYXRhLCBlc2NhcGVfaHRtbCkpO1xuXHQgICAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHQgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcblx0ICAgICAgICBwcmV2ZW50RGVmYXVsdChldnQpO1xuXHQgICAgICB9KTtcblx0ICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG5cdCAgICAgIGNvbnN0IGhhc2hlZCA9IGhhc2hfa2V5KGRhdGFbc2VsZi5zZXR0aW5ncy52YWx1ZUZpZWxkXSk7XG5cblx0ICAgICAgaWYgKGhhc2hlZCAmJiBzZWxmLml0ZW1zLmluZGV4T2YoaGFzaGVkKSA+IC0xKSB7XG5cdCAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG5cdCAgICAgIH1cblxuXHQgICAgICByZW5kZXJlZC5wcmVwZW5kKGNoZWNrYm94KTtcblx0ICAgICAgcmV0dXJuIHJlbmRlcmVkO1xuXHQgICAgfTtcblx0ICB9KTsgLy8gdW5jaGVjayB3aGVuIGl0ZW0gcmVtb3ZlZFxuXG5cdCAgc2VsZi5vbignaXRlbV9yZW1vdmUnLCB2YWx1ZSA9PiB7XG5cdCAgICB2YXIgb3B0aW9uID0gc2VsZi5nZXRPcHRpb24odmFsdWUpO1xuXG5cdCAgICBpZiAob3B0aW9uKSB7XG5cdCAgICAgIC8vIGlmIGRyb3Bkb3duIGhhc24ndCBiZWVuIG9wZW5lZCB5ZXQsIHRoZSBvcHRpb24gd29uJ3QgZXhpc3Rcblx0ICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7IC8vIHNlbGVjdGVkIGNsYXNzIHdvbid0IGJlIHJlbW92ZWQgeWV0XG5cblx0ICAgICAgVXBkYXRlQ2hlY2tib3gob3B0aW9uKTtcblx0ICAgIH1cblx0ICB9KTsgLy8gY2hlY2sgd2hlbiBpdGVtIGFkZGVkXG5cblx0ICBzZWxmLm9uKCdpdGVtX2FkZCcsIHZhbHVlID0+IHtcblx0ICAgIHZhciBvcHRpb24gPSBzZWxmLmdldE9wdGlvbih2YWx1ZSk7XG5cblx0ICAgIGlmIChvcHRpb24pIHtcblx0ICAgICAgLy8gaWYgZHJvcGRvd24gaGFzbid0IGJlZW4gb3BlbmVkIHlldCwgdGhlIG9wdGlvbiB3b24ndCBleGlzdFxuXHQgICAgICBVcGRhdGVDaGVja2JveChvcHRpb24pO1xuXHQgICAgfVxuXHQgIH0pOyAvLyByZW1vdmUgaXRlbXMgd2hlbiBzZWxlY3RlZCBvcHRpb24gaXMgY2xpY2tlZFxuXG5cdCAgc2VsZi5ob29rKCdpbnN0ZWFkJywgJ29uT3B0aW9uU2VsZWN0JywgKGV2dCwgb3B0aW9uKSA9PiB7XG5cdCAgICBpZiAob3B0aW9uLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuXHQgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcblx0ICAgICAgc2VsZi5yZW1vdmVJdGVtKG9wdGlvbi5kYXRhc2V0LnZhbHVlKTtcblx0ICAgICAgc2VsZi5yZWZyZXNoT3B0aW9ucygpO1xuXHQgICAgICBwcmV2ZW50RGVmYXVsdChldnQsIHRydWUpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIG9yaWdfb25PcHRpb25TZWxlY3QuY2FsbChzZWxmLCBldnQsIG9wdGlvbik7XG5cdCAgICBVcGRhdGVDaGVja2JveChvcHRpb24pO1xuXHQgIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsdWdpbjogXCJkcm9wZG93bl9oZWFkZXJcIiAoVG9tIFNlbGVjdClcblx0ICogQ29weXJpZ2h0IChjKSBjb250cmlidXRvcnNcblx0ICpcblx0ICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXNcblx0ICogZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG5cdCAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXHQgKlxuXHQgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG5cdCAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0Zcblx0ICogQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5cdCAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cdCAqXG5cdCAqL1xuXHRmdW5jdGlvbiBjbGVhcl9idXR0b24gKHVzZXJPcHRpb25zKSB7XG5cdCAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cdCAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHQgICAgY2xhc3NOYW1lOiAnY2xlYXItYnV0dG9uJyxcblx0ICAgIHRpdGxlOiAnQ2xlYXIgQWxsJyxcblx0ICAgIGh0bWw6IGRhdGEgPT4ge1xuXHQgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2RhdGEuY2xhc3NOYW1lfVwiIHRpdGxlPVwiJHtkYXRhLnRpdGxlfVwiPiZ0aW1lczs8L2Rpdj5gO1xuXHQgICAgfVxuXHQgIH0sIHVzZXJPcHRpb25zKTtcblx0ICBzZWxmLm9uKCdpbml0aWFsaXplJywgKCkgPT4ge1xuXHQgICAgdmFyIGJ1dHRvbiA9IGdldERvbShvcHRpb25zLmh0bWwob3B0aW9ucykpO1xuXHQgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcblx0ICAgICAgaWYgKHNlbGYuaXNEaXNhYmxlZCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXG5cdCAgICAgIHNlbGYuY2xlYXIoKTtcblxuXHQgICAgICBpZiAoc2VsZi5zZXR0aW5ncy5tb2RlID09PSAnc2luZ2xlJyAmJiBzZWxmLnNldHRpbmdzLmFsbG93RW1wdHlPcHRpb24pIHtcblx0ICAgICAgICBzZWxmLmFkZEl0ZW0oJycpO1xuXHQgICAgICB9XG5cblx0ICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblx0ICAgIH0pO1xuXHQgICAgc2VsZi5jb250cm9sLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cdCAgfSk7XG5cdH1cblxuXHQvKipcblx0ICogUGx1Z2luOiBcImRyYWdfZHJvcFwiIChUb20gU2VsZWN0KVxuXHQgKiBDb3B5cmlnaHQgKGMpIGNvbnRyaWJ1dG9yc1xuXHQgKlxuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuXHQgKiBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcblx0ICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cdCAqXG5cdCAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcblx0ICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxuXHQgKiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2Vcblx0ICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblx0ICpcblx0ICovXG5cdGZ1bmN0aW9uIGRyYWdfZHJvcCAoKSB7XG5cdCAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgIGlmICghJC5mbi5zb3J0YWJsZSkgdGhyb3cgbmV3IEVycm9yKCdUaGUgXCJkcmFnX2Ryb3BcIiBwbHVnaW4gcmVxdWlyZXMgalF1ZXJ5IFVJIFwic29ydGFibGVcIi4nKTtcblx0ICBpZiAoc2VsZi5zZXR0aW5ncy5tb2RlICE9PSAnbXVsdGknKSByZXR1cm47XG5cdCAgdmFyIG9yaWdfbG9jayA9IHNlbGYubG9jaztcblx0ICB2YXIgb3JpZ191bmxvY2sgPSBzZWxmLnVubG9jaztcblx0ICBzZWxmLmhvb2soJ2luc3RlYWQnLCAnbG9jaycsICgpID0+IHtcblx0ICAgIHZhciBzb3J0YWJsZSA9ICQoc2VsZi5jb250cm9sKS5kYXRhKCdzb3J0YWJsZScpO1xuXHQgICAgaWYgKHNvcnRhYmxlKSBzb3J0YWJsZS5kaXNhYmxlKCk7XG5cdCAgICByZXR1cm4gb3JpZ19sb2NrLmNhbGwoc2VsZik7XG5cdCAgfSk7XG5cdCAgc2VsZi5ob29rKCdpbnN0ZWFkJywgJ3VubG9jaycsICgpID0+IHtcblx0ICAgIHZhciBzb3J0YWJsZSA9ICQoc2VsZi5jb250cm9sKS5kYXRhKCdzb3J0YWJsZScpO1xuXHQgICAgaWYgKHNvcnRhYmxlKSBzb3J0YWJsZS5lbmFibGUoKTtcblx0ICAgIHJldHVybiBvcmlnX3VubG9jay5jYWxsKHNlbGYpO1xuXHQgIH0pO1xuXHQgIHNlbGYub24oJ2luaXRpYWxpemUnLCAoKSA9PiB7XG5cdCAgICB2YXIgJGNvbnRyb2wgPSAkKHNlbGYuY29udHJvbCkuc29ydGFibGUoe1xuXHQgICAgICBpdGVtczogJ1tkYXRhLXZhbHVlXScsXG5cdCAgICAgIGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuXHQgICAgICBkaXNhYmxlZDogc2VsZi5pc0xvY2tlZCxcblx0ICAgICAgc3RhcnQ6IChlLCB1aSkgPT4ge1xuXHQgICAgICAgIHVpLnBsYWNlaG9sZGVyLmNzcygnd2lkdGgnLCB1aS5oZWxwZXIuY3NzKCd3aWR0aCcpKTtcblx0ICAgICAgICAkY29udHJvbC5jc3Moe1xuXHQgICAgICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xuXHQgICAgICAgIH0pO1xuXHQgICAgICB9LFxuXHQgICAgICBzdG9wOiAoKSA9PiB7XG5cdCAgICAgICAgJGNvbnRyb2wuY3NzKHtcblx0ICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcblx0ICAgICAgICAkY29udHJvbC5jaGlsZHJlbignW2RhdGEtdmFsdWVdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICBpZiAodGhpcy5kYXRhc2V0LnZhbHVlKSB2YWx1ZXMucHVzaCh0aGlzLmRhdGFzZXQudmFsdWUpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHNlbGYuc2V0VmFsdWUodmFsdWVzKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgfSk7XG5cdH1cblxuXHQvKipcblx0ICogUGx1Z2luOiBcImRyb3Bkb3duX2hlYWRlclwiIChUb20gU2VsZWN0KVxuXHQgKiBDb3B5cmlnaHQgKGMpIGNvbnRyaWJ1dG9yc1xuXHQgKlxuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuXHQgKiBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcblx0ICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cdCAqXG5cdCAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcblx0ICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxuXHQgKiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2Vcblx0ICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblx0ICpcblx0ICovXG5cdGZ1bmN0aW9uIGRyb3Bkb3duX2hlYWRlciAodXNlck9wdGlvbnMpIHtcblx0ICBjb25zdCBzZWxmID0gdGhpcztcblx0ICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdCAgICB0aXRsZTogJ1VudGl0bGVkJyxcblx0ICAgIGhlYWRlckNsYXNzOiAnZHJvcGRvd24taGVhZGVyJyxcblx0ICAgIHRpdGxlUm93Q2xhc3M6ICdkcm9wZG93bi1oZWFkZXItdGl0bGUnLFxuXHQgICAgbGFiZWxDbGFzczogJ2Ryb3Bkb3duLWhlYWRlci1sYWJlbCcsXG5cdCAgICBjbG9zZUNsYXNzOiAnZHJvcGRvd24taGVhZGVyLWNsb3NlJyxcblx0ICAgIGh0bWw6IGRhdGEgPT4ge1xuXHQgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCInICsgZGF0YS5oZWFkZXJDbGFzcyArICdcIj4nICsgJzxkaXYgY2xhc3M9XCInICsgZGF0YS50aXRsZVJvd0NsYXNzICsgJ1wiPicgKyAnPHNwYW4gY2xhc3M9XCInICsgZGF0YS5sYWJlbENsYXNzICsgJ1wiPicgKyBkYXRhLnRpdGxlICsgJzwvc3Bhbj4nICsgJzxhIGNsYXNzPVwiJyArIGRhdGEuY2xvc2VDbGFzcyArICdcIj4mdGltZXM7PC9hPicgKyAnPC9kaXY+JyArICc8L2Rpdj4nO1xuXHQgICAgfVxuXHQgIH0sIHVzZXJPcHRpb25zKTtcblx0ICBzZWxmLm9uKCdpbml0aWFsaXplJywgKCkgPT4ge1xuXHQgICAgdmFyIGhlYWRlciA9IGdldERvbShvcHRpb25zLmh0bWwob3B0aW9ucykpO1xuXHQgICAgdmFyIGNsb3NlX2xpbmsgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLicgKyBvcHRpb25zLmNsb3NlQ2xhc3MpO1xuXG5cdCAgICBpZiAoY2xvc2VfbGluaykge1xuXHQgICAgICBjbG9zZV9saW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcblx0ICAgICAgICBwcmV2ZW50RGVmYXVsdChldnQsIHRydWUpO1xuXHQgICAgICAgIHNlbGYuY2xvc2UoKTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cblx0ICAgIHNlbGYuZHJvcGRvd24uaW5zZXJ0QmVmb3JlKGhlYWRlciwgc2VsZi5kcm9wZG93bi5maXJzdENoaWxkKTtcblx0ICB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbHVnaW46IFwiZHJvcGRvd25faW5wdXRcIiAoVG9tIFNlbGVjdClcblx0ICogQ29weXJpZ2h0IChjKSBjb250cmlidXRvcnNcblx0ICpcblx0ICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXNcblx0ICogZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG5cdCAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXHQgKlxuXHQgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG5cdCAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0Zcblx0ICogQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5cdCAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cdCAqXG5cdCAqL1xuXHRmdW5jdGlvbiBjYXJldF9wb3NpdGlvbiAoKSB7XG5cdCAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgIC8qKlxuXHQgICAqIE1vdmVzIHRoZSBjYXJldCB0byB0aGUgc3BlY2lmaWVkIGluZGV4LlxuXHQgICAqXG5cdCAgICogVGhlIGlucHV0IG11c3QgYmUgbW92ZWQgYnkgbGVhdmluZyBpdCBpbiBwbGFjZSBhbmQgbW92aW5nIHRoZVxuXHQgICAqIHNpYmxpbmdzLCBkdWUgdG8gdGhlIGZhY3QgdGhhdCBmb2N1cyBjYW5ub3QgYmUgcmVzdG9yZWQgb25jZSBsb3N0XG5cdCAgICogb24gbW9iaWxlIHdlYmtpdCBkZXZpY2VzXG5cdCAgICpcblx0ICAgKi9cblxuXHQgIHNlbGYuaG9vaygnaW5zdGVhZCcsICdzZXRDYXJldCcsIG5ld19wb3MgPT4ge1xuXHQgICAgaWYgKHNlbGYuc2V0dGluZ3MubW9kZSA9PT0gJ3NpbmdsZScgfHwgIXNlbGYuY29udHJvbC5jb250YWlucyhzZWxmLmNvbnRyb2xfaW5wdXQpKSB7XG5cdCAgICAgIG5ld19wb3MgPSBzZWxmLml0ZW1zLmxlbmd0aDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIG5ld19wb3MgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzZWxmLml0ZW1zLmxlbmd0aCwgbmV3X3BvcykpO1xuXG5cdCAgICAgIGlmIChuZXdfcG9zICE9IHNlbGYuY2FyZXRQb3MgJiYgIXNlbGYuaXNQZW5kaW5nKSB7XG5cdCAgICAgICAgc2VsZi5jb250cm9sQ2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZCwgaikgPT4ge1xuXHQgICAgICAgICAgaWYgKGogPCBuZXdfcG9zKSB7XG5cdCAgICAgICAgICAgIHNlbGYuY29udHJvbF9pbnB1dC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgY2hpbGQpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgc2VsZi5jb250cm9sLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBzZWxmLmNhcmV0UG9zID0gbmV3X3Bvcztcblx0ICB9KTtcblx0ICBzZWxmLmhvb2soJ2luc3RlYWQnLCAnbW92ZUNhcmV0JywgZGlyZWN0aW9uID0+IHtcblx0ICAgIGlmICghc2VsZi5pc0ZvY3VzZWQpIHJldHVybjsgLy8gbW92ZSBjYXJldCBiZWZvcmUgb3IgYWZ0ZXIgc2VsZWN0ZWQgaXRlbXNcblxuXHQgICAgY29uc3QgbGFzdF9hY3RpdmUgPSBzZWxmLmdldExhc3RBY3RpdmUoZGlyZWN0aW9uKTtcblxuXHQgICAgaWYgKGxhc3RfYWN0aXZlKSB7XG5cdCAgICAgIGNvbnN0IGlkeCA9IG5vZGVJbmRleChsYXN0X2FjdGl2ZSk7XG5cdCAgICAgIHNlbGYuc2V0Q2FyZXQoZGlyZWN0aW9uID4gMCA/IGlkeCArIDEgOiBpZHgpO1xuXHQgICAgICBzZWxmLnNldEFjdGl2ZUl0ZW0oKTtcblx0ICAgICAgcmVtb3ZlQ2xhc3NlcyhsYXN0X2FjdGl2ZSwgJ2xhc3QtYWN0aXZlJyk7IC8vIG1vdmUgY2FyZXQgbGVmdCBvciByaWdodCBvZiBjdXJyZW50IHBvc2l0aW9uXG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBzZWxmLnNldENhcmV0KHNlbGYuY2FyZXRQb3MgKyBkaXJlY3Rpb24pO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsdWdpbjogXCJkcm9wZG93bl9pbnB1dFwiIChUb20gU2VsZWN0KVxuXHQgKiBDb3B5cmlnaHQgKGMpIGNvbnRyaWJ1dG9yc1xuXHQgKlxuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuXHQgKiBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcblx0ICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cdCAqXG5cdCAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcblx0ICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxuXHQgKiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2Vcblx0ICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblx0ICpcblx0ICovXG5cdGZ1bmN0aW9uIGRyb3Bkb3duX2lucHV0ICgpIHtcblx0ICBjb25zdCBzZWxmID0gdGhpcztcblx0ICBzZWxmLnNldHRpbmdzLnNob3VsZE9wZW4gPSB0cnVlOyAvLyBtYWtlIHN1cmUgdGhlIGlucHV0IGlzIHNob3duIGV2ZW4gaWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgdG8gZGlzcGxheSBpbiB0aGUgZHJvcGRvd25cblxuXHQgIHNlbGYuaG9vaygnYmVmb3JlJywgJ3NldHVwJywgKCkgPT4ge1xuXHQgICAgc2VsZi5mb2N1c19ub2RlID0gc2VsZi5jb250cm9sO1xuXHQgICAgYWRkQ2xhc3NlcyhzZWxmLmNvbnRyb2xfaW5wdXQsICdkcm9wZG93bi1pbnB1dCcpO1xuXHQgICAgY29uc3QgZGl2ID0gZ2V0RG9tKCc8ZGl2IGNsYXNzPVwiZHJvcGRvd24taW5wdXQtd3JhcFwiPicpO1xuXHQgICAgZGl2LmFwcGVuZChzZWxmLmNvbnRyb2xfaW5wdXQpO1xuXHQgICAgc2VsZi5kcm9wZG93bi5pbnNlcnRCZWZvcmUoZGl2LCBzZWxmLmRyb3Bkb3duLmZpcnN0Q2hpbGQpOyAvLyBzZXQgYSBwbGFjZWhvbGRlciBpbiB0aGUgc2VsZWN0IGNvbnRyb2xcblxuXHQgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBnZXREb20oJzxpbnB1dCBjbGFzcz1cIml0ZW1zLXBsYWNlaG9sZGVyXCIgdGFiaW5kZXg9XCItMVwiIC8+Jyk7XG5cdCAgICBwbGFjZWhvbGRlci5wbGFjZWhvbGRlciA9IHNlbGYuc2V0dGluZ3MucGxhY2Vob2xkZXIgfHwgJyc7XG5cdCAgICBzZWxmLmNvbnRyb2wuYXBwZW5kKHBsYWNlaG9sZGVyKTtcblx0ICB9KTtcblx0ICBzZWxmLm9uKCdpbml0aWFsaXplJywgKCkgPT4ge1xuXHQgICAgLy8gc2V0IHRhYkluZGV4IG9uIGNvbnRyb2wgdG8gLTEsIG90aGVyd2lzZSBbc2hpZnQrdGFiXSB3aWxsIHB1dCBmb2N1cyByaWdodCBiYWNrIG9uIGNvbnRyb2xfaW5wdXRcblx0ICAgIHNlbGYuY29udHJvbF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZ0ID0+IHtcblx0ICAgICAgLy9hZGRFdmVudChzZWxmLmNvbnRyb2xfaW5wdXQsJ2tleWRvd24nIGFzIGNvbnN0LChldnQ6S2V5Ym9hcmRFdmVudCkgPT57XG5cdCAgICAgIHN3aXRjaCAoZXZ0LmtleUNvZGUpIHtcblx0ICAgICAgICBjYXNlIEtFWV9FU0M6XG5cdCAgICAgICAgICBpZiAoc2VsZi5pc09wZW4pIHtcblx0ICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZXZ0LCB0cnVlKTtcblx0ICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xuXHQgICAgICAgICAgfVxuXG5cdCAgICAgICAgICBzZWxmLmNsZWFyQWN0aXZlSXRlbXMoKTtcblx0ICAgICAgICAgIHJldHVybjtcblxuXHQgICAgICAgIGNhc2UgS0VZX1RBQjpcblx0ICAgICAgICAgIHNlbGYuZm9jdXNfbm9kZS50YWJJbmRleCA9IC0xO1xuXHQgICAgICAgICAgYnJlYWs7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gc2VsZi5vbktleURvd24uY2FsbChzZWxmLCBldnQpO1xuXHQgICAgfSk7XG5cdCAgICBzZWxmLm9uKCdibHVyJywgKCkgPT4ge1xuXHQgICAgICBzZWxmLmZvY3VzX25vZGUudGFiSW5kZXggPSBzZWxmLmlzRGlzYWJsZWQgPyAtMSA6IHNlbGYudGFiSW5kZXg7XG5cdCAgICB9KTsgLy8gZ2l2ZSB0aGUgY29udHJvbF9pbnB1dCBmb2N1cyB3aGVuIHRoZSBkcm9wZG93biBpcyBvcGVuXG5cblx0ICAgIHNlbGYub24oJ2Ryb3Bkb3duX29wZW4nLCAoKSA9PiB7XG5cdCAgICAgIHNlbGYuY29udHJvbF9pbnB1dC5mb2N1cygpO1xuXHQgICAgfSk7IC8vIHByZXZlbnQgb25CbHVyIGZyb20gY2xvc2luZyB3aGVuIGZvY3VzIGlzIG9uIHRoZSBjb250cm9sX2lucHV0XG5cblx0ICAgIGNvbnN0IG9yaWdfb25CbHVyID0gc2VsZi5vbkJsdXI7XG5cdCAgICBzZWxmLmhvb2soJ2luc3RlYWQnLCAnb25CbHVyJywgZXZ0ID0+IHtcblx0ICAgICAgaWYgKGV2dCAmJiBldnQucmVsYXRlZFRhcmdldCA9PSBzZWxmLmNvbnRyb2xfaW5wdXQpIHJldHVybjtcblx0ICAgICAgcmV0dXJuIG9yaWdfb25CbHVyLmNhbGwoc2VsZik7XG5cdCAgICB9KTtcblx0ICAgIGFkZEV2ZW50KHNlbGYuY29udHJvbF9pbnB1dCwgJ2JsdXInLCAoKSA9PiBzZWxmLm9uQmx1cigpKTsgLy8gcmV0dXJuIGZvY3VzIHRvIGNvbnRyb2wgdG8gYWxsb3cgZnVydGhlciBrZXlib2FyZCBpbnB1dFxuXG5cdCAgICBzZWxmLmhvb2soJ2JlZm9yZScsICdjbG9zZScsICgpID0+IHtcblx0ICAgICAgaWYgKCFzZWxmLmlzT3BlbikgcmV0dXJuO1xuXHQgICAgICBzZWxmLmZvY3VzX25vZGUuZm9jdXMoKTtcblx0ICAgIH0pO1xuXHQgIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsdWdpbjogXCJpbnB1dF9hdXRvZ3Jvd1wiIChUb20gU2VsZWN0KVxuXHQgKlxuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuXHQgKiBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcblx0ICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cdCAqXG5cdCAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcblx0ICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRlxuXHQgKiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2Vcblx0ICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblx0ICpcblx0ICovXG5cdGZ1bmN0aW9uIGlucHV0X2F1dG9ncm93ICgpIHtcblx0ICB2YXIgc2VsZiA9IHRoaXM7XG5cdCAgc2VsZi5vbignaW5pdGlhbGl6ZScsICgpID0+IHtcblx0ICAgIHZhciB0ZXN0X2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHQgICAgdmFyIGNvbnRyb2wgPSBzZWxmLmNvbnRyb2xfaW5wdXQ7XG5cdCAgICB0ZXN0X2lucHV0LnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246YWJzb2x1dGU7IHRvcDotOTk5OTlweDsgbGVmdDotOTk5OTlweDsgd2lkdGg6YXV0bzsgcGFkZGluZzowOyB3aGl0ZS1zcGFjZTpwcmU7ICc7XG5cdCAgICBzZWxmLndyYXBwZXIuYXBwZW5kQ2hpbGQodGVzdF9pbnB1dCk7XG5cdCAgICB2YXIgdHJhbnNmZXJfc3R5bGVzID0gWydsZXR0ZXJTcGFjaW5nJywgJ2ZvbnRTaXplJywgJ2ZvbnRGYW1pbHknLCAnZm9udFdlaWdodCcsICd0ZXh0VHJhbnNmb3JtJ107XG5cblx0ICAgIGZvciAoY29uc3Qgc3R5bGVfbmFtZSBvZiB0cmFuc2Zlcl9zdHlsZXMpIHtcblx0ICAgICAgLy8gQHRzLWlnbm9yZSBUUzcwMTUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUwNTA2MTU0LzY5NzU3NlxuXHQgICAgICB0ZXN0X2lucHV0LnN0eWxlW3N0eWxlX25hbWVdID0gY29udHJvbC5zdHlsZVtzdHlsZV9uYW1lXTtcblx0ICAgIH1cblx0ICAgIC8qKlxuXHQgICAgICogU2V0IHRoZSBjb250cm9sIHdpZHRoXG5cdCAgICAgKlxuXHQgICAgICovXG5cblxuXHQgICAgdmFyIHJlc2l6ZSA9ICgpID0+IHtcblx0ICAgICAgaWYgKHNlbGYuaXRlbXMubGVuZ3RoID4gMCkge1xuXHQgICAgICAgIHRlc3RfaW5wdXQudGV4dENvbnRlbnQgPSBjb250cm9sLnZhbHVlO1xuXHQgICAgICAgIGNvbnRyb2wuc3R5bGUud2lkdGggPSB0ZXN0X2lucHV0LmNsaWVudFdpZHRoICsgJ3B4Jztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBjb250cm9sLnN0eWxlLndpZHRoID0gJyc7XG5cdCAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIHJlc2l6ZSgpO1xuXHQgICAgc2VsZi5vbigndXBkYXRlIGl0ZW1fYWRkIGl0ZW1fcmVtb3ZlJywgcmVzaXplKTtcblx0ICAgIGFkZEV2ZW50KGNvbnRyb2wsICdpbnB1dCcsIHJlc2l6ZSk7XG5cdCAgICBhZGRFdmVudChjb250cm9sLCAna2V5dXAnLCByZXNpemUpO1xuXHQgICAgYWRkRXZlbnQoY29udHJvbCwgJ2JsdXInLCByZXNpemUpO1xuXHQgICAgYWRkRXZlbnQoY29udHJvbCwgJ3VwZGF0ZScsIHJlc2l6ZSk7XG5cdCAgfSk7XG5cdH1cblxuXHQvKipcblx0ICogUGx1Z2luOiBcImlucHV0X2F1dG9ncm93XCIgKFRvbSBTZWxlY3QpXG5cdCAqXG5cdCAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG5cdCAqIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuXHQgKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblx0ICpcblx0ICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuXHQgKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GXG5cdCAqIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuXHQgKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXHQgKlxuXHQgKi9cblx0ZnVuY3Rpb24gbm9fYmFja3NwYWNlX2RlbGV0ZSAoKSB7XG5cdCAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgIHZhciBvcmlnX2RlbGV0ZVNlbGVjdGlvbiA9IHNlbGYuZGVsZXRlU2VsZWN0aW9uO1xuXHQgIHRoaXMuaG9vaygnaW5zdGVhZCcsICdkZWxldGVTZWxlY3Rpb24nLCBldnQgPT4ge1xuXHQgICAgaWYgKHNlbGYuYWN0aXZlSXRlbXMubGVuZ3RoKSB7XG5cdCAgICAgIHJldHVybiBvcmlnX2RlbGV0ZVNlbGVjdGlvbi5jYWxsKHNlbGYsIGV2dCk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbHVnaW46IFwibm9fYWN0aXZlX2l0ZW1zXCIgKFRvbSBTZWxlY3QpXG5cdCAqXG5cdCAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG5cdCAqIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuXHQgKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblx0ICpcblx0ICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuXHQgKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GXG5cdCAqIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuXHQgKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXHQgKlxuXHQgKi9cblx0ZnVuY3Rpb24gbm9fYWN0aXZlX2l0ZW1zICgpIHtcblx0ICB0aGlzLmhvb2soJ2luc3RlYWQnLCAnc2V0QWN0aXZlSXRlbScsICgpID0+IHt9KTtcblx0ICB0aGlzLmhvb2soJ2luc3RlYWQnLCAnc2VsZWN0QWxsJywgKCkgPT4ge30pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsdWdpbjogXCJvcHRncm91cF9jb2x1bW5zXCIgKFRvbSBTZWxlY3QuanMpXG5cdCAqIENvcHlyaWdodCAoYykgY29udHJpYnV0b3JzXG5cdCAqXG5cdCAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG5cdCAqIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuXHQgKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblx0ICpcblx0ICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuXHQgKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GXG5cdCAqIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuXHQgKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXHQgKlxuXHQgKi9cblx0ZnVuY3Rpb24gb3B0Z3JvdXBfY29sdW1ucyAoKSB7XG5cdCAgdmFyIHNlbGYgPSB0aGlzO1xuXHQgIHZhciBvcmlnX2tleWRvd24gPSBzZWxmLm9uS2V5RG93bjtcblx0ICBzZWxmLmhvb2soJ2luc3RlYWQnLCAnb25LZXlEb3duJywgZXZ0ID0+IHtcblx0ICAgIHZhciBpbmRleCwgb3B0aW9uLCBvcHRpb25zLCBvcHRncm91cDtcblxuXHQgICAgaWYgKCFzZWxmLmlzT3BlbiB8fCAhKGV2dC5rZXlDb2RlID09PSBLRVlfTEVGVCB8fCBldnQua2V5Q29kZSA9PT0gS0VZX1JJR0hUKSkge1xuXHQgICAgICByZXR1cm4gb3JpZ19rZXlkb3duLmNhbGwoc2VsZiwgZXZ0KTtcblx0ICAgIH1cblxuXHQgICAgb3B0Z3JvdXAgPSBwYXJlbnRNYXRjaChzZWxmLmFjdGl2ZU9wdGlvbiwgJ1tkYXRhLWdyb3VwXScpO1xuXHQgICAgaW5kZXggPSBub2RlSW5kZXgoc2VsZi5hY3RpdmVPcHRpb24sICdbZGF0YS1zZWxlY3RhYmxlXScpO1xuXG5cdCAgICBpZiAoIW9wdGdyb3VwKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfTEVGVCkge1xuXHQgICAgICBvcHRncm91cCA9IG9wdGdyb3VwLnByZXZpb3VzU2libGluZztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIG9wdGdyb3VwID0gb3B0Z3JvdXAubmV4dFNpYmxpbmc7XG5cdCAgICB9XG5cblx0ICAgIGlmICghb3B0Z3JvdXApIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICBvcHRpb25zID0gb3B0Z3JvdXAucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2VsZWN0YWJsZV0nKTtcblx0ICAgIG9wdGlvbiA9IG9wdGlvbnNbTWF0aC5taW4ob3B0aW9ucy5sZW5ndGggLSAxLCBpbmRleCldO1xuXG5cdCAgICBpZiAob3B0aW9uKSB7XG5cdCAgICAgIHNlbGYuc2V0QWN0aXZlT3B0aW9uKG9wdGlvbik7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH1cblxuXHQvKipcblx0ICogUGx1Z2luOiBcInJlbW92ZV9idXR0b25cIiAoVG9tIFNlbGVjdClcblx0ICogQ29weXJpZ2h0IChjKSBjb250cmlidXRvcnNcblx0ICpcblx0ICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXNcblx0ICogZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG5cdCAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXHQgKlxuXHQgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG5cdCAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0Zcblx0ICogQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5cdCAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cdCAqXG5cdCAqL1xuXHRmdW5jdGlvbiByZW1vdmVfYnV0dG9uICh1c2VyT3B0aW9ucykge1xuXHQgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0ICAgIGxhYmVsOiAnJnRpbWVzOycsXG5cdCAgICB0aXRsZTogJ1JlbW92ZScsXG5cdCAgICBjbGFzc05hbWU6ICdyZW1vdmUnLFxuXHQgICAgYXBwZW5kOiB0cnVlXG5cdCAgfSwgdXNlck9wdGlvbnMpOyAvL29wdGlvbnMuY2xhc3NOYW1lID0gJ3JlbW92ZS1zaW5nbGUnO1xuXG5cdCAgdmFyIHNlbGYgPSB0aGlzOyAvLyBvdmVycmlkZSB0aGUgcmVuZGVyIG1ldGhvZCB0byBhZGQgcmVtb3ZlIGJ1dHRvbiB0byBlYWNoIGl0ZW1cblxuXHQgIGlmICghb3B0aW9ucy5hcHBlbmQpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cblx0ICB2YXIgaHRtbCA9ICc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCInICsgb3B0aW9ucy5jbGFzc05hbWUgKyAnXCIgdGFiaW5kZXg9XCItMVwiIHRpdGxlPVwiJyArIGVzY2FwZV9odG1sKG9wdGlvbnMudGl0bGUpICsgJ1wiPicgKyBvcHRpb25zLmxhYmVsICsgJzwvYT4nO1xuXHQgIHNlbGYuaG9vaygnYWZ0ZXInLCAnc2V0dXBUZW1wbGF0ZXMnLCAoKSA9PiB7XG5cdCAgICB2YXIgb3JpZ19yZW5kZXJfaXRlbSA9IHNlbGYuc2V0dGluZ3MucmVuZGVyLml0ZW07XG5cblx0ICAgIHNlbGYuc2V0dGluZ3MucmVuZGVyLml0ZW0gPSAoZGF0YSwgZXNjYXBlKSA9PiB7XG5cdCAgICAgIHZhciByZW5kZXJlZCA9IGdldERvbShvcmlnX3JlbmRlcl9pdGVtLmNhbGwoc2VsZiwgZGF0YSwgZXNjYXBlKSk7XG5cdCAgICAgIHZhciBjbG9zZV9idXR0b24gPSBnZXREb20oaHRtbCk7XG5cdCAgICAgIHJlbmRlcmVkLmFwcGVuZENoaWxkKGNsb3NlX2J1dHRvbik7XG5cdCAgICAgIGFkZEV2ZW50KGNsb3NlX2J1dHRvbiwgJ21vdXNlZG93bicsIGV2dCA9PiB7XG5cdCAgICAgICAgcHJldmVudERlZmF1bHQoZXZ0LCB0cnVlKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIGFkZEV2ZW50KGNsb3NlX2J1dHRvbiwgJ2NsaWNrJywgZXZ0ID0+IHtcblx0ICAgICAgICAvLyBwcm9wYWdhdGluZyB3aWxsIHRyaWdnZXIgdGhlIGRyb3Bkb3duIHRvIHNob3cgZm9yIHNpbmdsZSBtb2RlXG5cdCAgICAgICAgcHJldmVudERlZmF1bHQoZXZ0LCB0cnVlKTtcblx0ICAgICAgICBpZiAoc2VsZi5pc0xvY2tlZCkgcmV0dXJuO1xuXHQgICAgICAgIHZhciB2YWx1ZSA9IHJlbmRlcmVkLmRhdGFzZXQudmFsdWU7XG5cdCAgICAgICAgc2VsZi5yZW1vdmVJdGVtKHZhbHVlKTtcblx0ICAgICAgICBzZWxmLnJlZnJlc2hPcHRpb25zKGZhbHNlKTtcblx0ICAgICAgICBzZWxmLmlucHV0U3RhdGUoKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHJldHVybiByZW5kZXJlZDtcblx0ICAgIH07XG5cdCAgfSk7XG5cdH1cblxuXHQvKipcblx0ICogUGx1Z2luOiBcInJlc3RvcmVfb25fYmFja3NwYWNlXCIgKFRvbSBTZWxlY3QpXG5cdCAqIENvcHlyaWdodCAoYykgY29udHJpYnV0b3JzXG5cdCAqXG5cdCAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG5cdCAqIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuXHQgKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblx0ICpcblx0ICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuXHQgKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GXG5cdCAqIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuXHQgKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXHQgKlxuXHQgKi9cblx0ZnVuY3Rpb24gcmVzdG9yZV9vbl9iYWNrc3BhY2UgKHVzZXJPcHRpb25zKSB7XG5cdCAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cdCAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHQgICAgdGV4dDogb3B0aW9uID0+IHtcblx0ICAgICAgcmV0dXJuIG9wdGlvbltzZWxmLnNldHRpbmdzLmxhYmVsRmllbGRdO1xuXHQgICAgfVxuXHQgIH0sIHVzZXJPcHRpb25zKTtcblx0ICBzZWxmLm9uKCdpdGVtX3JlbW92ZScsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgaWYgKCFzZWxmLmlzRm9jdXNlZCkge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIGlmIChzZWxmLmNvbnRyb2xfaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xuXHQgICAgICB2YXIgb3B0aW9uID0gc2VsZi5vcHRpb25zW3ZhbHVlXTtcblxuXHQgICAgICBpZiAob3B0aW9uKSB7XG5cdCAgICAgICAgc2VsZi5zZXRUZXh0Ym94VmFsdWUob3B0aW9ucy50ZXh0LmNhbGwoc2VsZiwgb3B0aW9uKSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbHVnaW46IFwicmVzdG9yZV9vbl9iYWNrc3BhY2VcIiAoVG9tIFNlbGVjdClcblx0ICogQ29weXJpZ2h0IChjKSBjb250cmlidXRvcnNcblx0ICpcblx0ICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXNcblx0ICogZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG5cdCAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXHQgKlxuXHQgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG5cdCAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0Zcblx0ICogQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG5cdCAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cdCAqXG5cdCAqL1xuXHRmdW5jdGlvbiB2aXJ0dWFsX3Njcm9sbCAoKSB7XG5cdCAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cdCAgY29uc3Qgb3JpZ19jYW5Mb2FkID0gc2VsZi5jYW5Mb2FkO1xuXHQgIGNvbnN0IG9yaWdfY2xlYXJBY3RpdmVPcHRpb24gPSBzZWxmLmNsZWFyQWN0aXZlT3B0aW9uO1xuXHQgIGNvbnN0IG9yaWdfbG9hZENhbGxiYWNrID0gc2VsZi5sb2FkQ2FsbGJhY2s7XG5cdCAgdmFyIHBhZ2luYXRpb24gPSB7fTtcblx0ICB2YXIgZHJvcGRvd25fY29udGVudDtcblx0ICB2YXIgbG9hZGluZ19tb3JlID0gZmFsc2U7XG5cdCAgdmFyIGxvYWRfbW9yZV9vcHQ7XG5cblx0ICBpZiAoIXNlbGYuc2V0dGluZ3Muc2hvdWxkTG9hZE1vcmUpIHtcblx0ICAgIC8vIHJldHVybiB0cnVlIGlmIGFkZGl0aW9uYWwgcmVzdWx0cyBzaG91bGQgYmUgbG9hZGVkXG5cdCAgICBzZWxmLnNldHRpbmdzLnNob3VsZExvYWRNb3JlID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICBjb25zdCBzY3JvbGxfcGVyY2VudCA9IGRyb3Bkb3duX2NvbnRlbnQuY2xpZW50SGVpZ2h0IC8gKGRyb3Bkb3duX2NvbnRlbnQuc2Nyb2xsSGVpZ2h0IC0gZHJvcGRvd25fY29udGVudC5zY3JvbGxUb3ApO1xuXG5cdCAgICAgIGlmIChzY3JvbGxfcGVyY2VudCA+IDAuOSkge1xuXHQgICAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgICB9XG5cblx0ICAgICAgaWYgKHNlbGYuYWN0aXZlT3B0aW9uKSB7XG5cdCAgICAgICAgdmFyIHNlbGVjdGFibGUgPSBzZWxmLnNlbGVjdGFibGUoKTtcblx0ICAgICAgICB2YXIgaW5kZXggPSBbLi4uc2VsZWN0YWJsZV0uaW5kZXhPZihzZWxmLmFjdGl2ZU9wdGlvbik7XG5cblx0ICAgICAgICBpZiAoaW5kZXggPj0gc2VsZWN0YWJsZS5sZW5ndGggLSAyKSB7XG5cdCAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9O1xuXHQgIH1cblxuXHQgIGlmICghc2VsZi5zZXR0aW5ncy5maXJzdFVybCkge1xuXHQgICAgdGhyb3cgJ3ZpcnR1YWxfc2Nyb2xsIHBsdWdpbiByZXF1aXJlcyBhIGZpcnN0VXJsKCkgbWV0aG9kJztcblx0ICB9IC8vIGluIG9yZGVyIGZvciB2aXJ0dWFsIHNjcm9sbGluZyB0byB3b3JrLFxuXHQgIC8vIG9wdGlvbnMgbmVlZCB0byBiZSBvcmRlcmVkIHRoZSBzYW1lIHdheSB0aGV5J3JlIHJldHVybmVkIGZyb20gdGhlIHJlbW90ZSBkYXRhIHNvdXJjZVxuXG5cblx0ICBzZWxmLnNldHRpbmdzLnNvcnRGaWVsZCA9IFt7XG5cdCAgICBmaWVsZDogJyRvcmRlcidcblx0ICB9LCB7XG5cdCAgICBmaWVsZDogJyRzY29yZSdcblx0ICB9XTsgLy8gY2FuIHdlIGxvYWQgbW9yZSByZXN1bHRzIGZvciBnaXZlbiBxdWVyeT9cblxuXHQgIGZ1bmN0aW9uIGNhbkxvYWRNb3JlKHF1ZXJ5KSB7XG5cdCAgICBpZiAodHlwZW9mIHNlbGYuc2V0dGluZ3MubWF4T3B0aW9ucyA9PT0gJ251bWJlcicgJiYgZHJvcGRvd25fY29udGVudC5jaGlsZHJlbi5sZW5ndGggPj0gc2VsZi5zZXR0aW5ncy5tYXhPcHRpb25zKSB7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHF1ZXJ5IGluIHBhZ2luYXRpb24gJiYgcGFnaW5hdGlvbltxdWVyeV0pIHtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9IC8vIHNldCB0aGUgbmV4dCB1cmwgdGhhdCB3aWxsIGJlXG5cblxuXHQgIHNlbGYuc2V0TmV4dFVybCA9IGZ1bmN0aW9uICh2YWx1ZSwgbmV4dF91cmwpIHtcblx0ICAgIHBhZ2luYXRpb25bdmFsdWVdID0gbmV4dF91cmw7XG5cdCAgfTsgLy8gZ2V0VXJsKCkgdG8gYmUgdXNlZCBpbiBzZXR0aW5ncy5sb2FkKClcblxuXG5cdCAgc2VsZi5nZXRVcmwgPSBmdW5jdGlvbiAocXVlcnkpIHtcblx0ICAgIGlmIChxdWVyeSBpbiBwYWdpbmF0aW9uKSB7XG5cdCAgICAgIGNvbnN0IG5leHRfdXJsID0gcGFnaW5hdGlvbltxdWVyeV07XG5cdCAgICAgIHBhZ2luYXRpb25bcXVlcnldID0gZmFsc2U7XG5cdCAgICAgIHJldHVybiBuZXh0X3VybDtcblx0ICAgIH0gLy8gaWYgdGhlIHVzZXIgZ29lcyBiYWNrIHRvIGEgcHJldmlvdXMgcXVlcnlcblx0ICAgIC8vIHdlIG5lZWQgdG8gbG9hZCB0aGUgZmlyc3QgcGFnZSBhZ2FpblxuXG5cblx0ICAgIHBhZ2luYXRpb24gPSB7fTtcblx0ICAgIHJldHVybiBzZWxmLnNldHRpbmdzLmZpcnN0VXJsLmNhbGwoc2VsZiwgcXVlcnkpO1xuXHQgIH07IC8vIGRvbid0IGNsZWFyIHRoZSBhY3RpdmUgb3B0aW9uIChhbmQgY2F1c2UgdW53YW50ZWQgZHJvcGRvd24gc2Nyb2xsKVxuXHQgIC8vIHdoaWxlIGxvYWRpbmcgbW9yZSByZXN1bHRzXG5cblxuXHQgIHNlbGYuaG9vaygnaW5zdGVhZCcsICdjbGVhckFjdGl2ZU9wdGlvbicsICgpID0+IHtcblx0ICAgIGlmIChsb2FkaW5nX21vcmUpIHtcblx0ICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gb3JpZ19jbGVhckFjdGl2ZU9wdGlvbi5jYWxsKHNlbGYpO1xuXHQgIH0pOyAvLyBvdmVycmlkZSB0aGUgY2FuTG9hZCBtZXRob2RcblxuXHQgIHNlbGYuaG9vaygnaW5zdGVhZCcsICdjYW5Mb2FkJywgcXVlcnkgPT4ge1xuXHQgICAgLy8gZmlyc3QgdGltZSB0aGUgcXVlcnkgaGFzIGJlZW4gc2VlblxuXHQgICAgaWYgKCEocXVlcnkgaW4gcGFnaW5hdGlvbikpIHtcblx0ICAgICAgcmV0dXJuIG9yaWdfY2FuTG9hZC5jYWxsKHNlbGYsIHF1ZXJ5KTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGNhbkxvYWRNb3JlKHF1ZXJ5KTtcblx0ICB9KTsgLy8gd3JhcCB0aGUgbG9hZFxuXG5cdCAgc2VsZi5ob29rKCdpbnN0ZWFkJywgJ2xvYWRDYWxsYmFjaycsIChvcHRpb25zLCBvcHRncm91cHMpID0+IHtcblx0ICAgIGlmICghbG9hZGluZ19tb3JlKSB7XG5cdCAgICAgIHNlbGYuY2xlYXJPcHRpb25zKCk7XG5cdCAgICB9IGVsc2UgaWYgKGxvYWRfbW9yZV9vcHQgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG5cdCAgICAgIGxvYWRfbW9yZV9vcHQuZGF0YXNldC52YWx1ZSA9IG9wdGlvbnNbMF1bc2VsZi5zZXR0aW5ncy52YWx1ZUZpZWxkXTtcblx0ICAgIH1cblxuXHQgICAgb3JpZ19sb2FkQ2FsbGJhY2suY2FsbChzZWxmLCBvcHRpb25zLCBvcHRncm91cHMpO1xuXHQgICAgbG9hZGluZ19tb3JlID0gZmFsc2U7XG5cdCAgfSk7IC8vIGFkZCB0ZW1wbGF0ZXMgdG8gZHJvcGRvd25cblx0ICAvL1x0bG9hZGluZ19tb3JlIGlmIHdlIGhhdmUgYW5vdGhlciB1cmwgaW4gdGhlIHF1ZXVlXG5cdCAgLy9cdG5vX21vcmVfcmVzdWx0cyBpZiB3ZSBkb24ndCBoYXZlIGFub3RoZXIgdXJsIGluIHRoZSBxdWV1ZVxuXG5cdCAgc2VsZi5ob29rKCdhZnRlcicsICdyZWZyZXNoT3B0aW9ucycsICgpID0+IHtcblx0ICAgIGNvbnN0IHF1ZXJ5ID0gc2VsZi5sYXN0VmFsdWU7XG5cdCAgICB2YXIgb3B0aW9uO1xuXG5cdCAgICBpZiAoY2FuTG9hZE1vcmUocXVlcnkpKSB7XG5cdCAgICAgIG9wdGlvbiA9IHNlbGYucmVuZGVyKCdsb2FkaW5nX21vcmUnLCB7XG5cdCAgICAgICAgcXVlcnk6IHF1ZXJ5XG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIGlmIChvcHRpb24pIHtcblx0ICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGFibGUnLCAnJyk7IC8vIHNvIHRoYXQgbmF2aWdhdGluZyBkcm9wZG93biB3aXRoIFtkb3duXSBrZXlwcmVzc2VzIGNhbiBuYXZpZ2F0ZSB0byB0aGlzIG5vZGVcblxuXHQgICAgICAgIGxvYWRfbW9yZV9vcHQgPSBvcHRpb247XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSBpZiAocXVlcnkgaW4gcGFnaW5hdGlvbiAmJiAhZHJvcGRvd25fY29udGVudC5xdWVyeVNlbGVjdG9yKCcubm8tcmVzdWx0cycpKSB7XG5cdCAgICAgIG9wdGlvbiA9IHNlbGYucmVuZGVyKCdub19tb3JlX3Jlc3VsdHMnLCB7XG5cdCAgICAgICAgcXVlcnk6IHF1ZXJ5XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXG5cdCAgICBpZiAob3B0aW9uKSB7XG5cdCAgICAgIGFkZENsYXNzZXMob3B0aW9uLCBzZWxmLnNldHRpbmdzLm9wdGlvbkNsYXNzKTtcblx0ICAgICAgZHJvcGRvd25fY29udGVudC5hcHBlbmQob3B0aW9uKTtcblx0ICAgIH1cblx0ICB9KTsgLy8gYWRkIHNjcm9sbCBsaXN0ZW5lciBhbmQgZGVmYXVsdCB0ZW1wbGF0ZXNcblxuXHQgIHNlbGYub24oJ2luaXRpYWxpemUnLCAoKSA9PiB7XG5cdCAgICBkcm9wZG93bl9jb250ZW50ID0gc2VsZi5kcm9wZG93bl9jb250ZW50OyAvLyBkZWZhdWx0IHRlbXBsYXRlc1xuXG5cdCAgICBzZWxmLnNldHRpbmdzLnJlbmRlciA9IE9iamVjdC5hc3NpZ24oe30sIHtcblx0ICAgICAgbG9hZGluZ19tb3JlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibG9hZGluZy1tb3JlLXJlc3VsdHNcIj5Mb2FkaW5nIG1vcmUgcmVzdWx0cyAuLi4gPC9kaXY+YDtcblx0ICAgICAgfSxcblx0ICAgICAgbm9fbW9yZV9yZXN1bHRzOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tbW9yZS1yZXN1bHRzXCI+Tm8gbW9yZSByZXN1bHRzPC9kaXY+YDtcblx0ICAgICAgfVxuXHQgICAgfSwgc2VsZi5zZXR0aW5ncy5yZW5kZXIpOyAvLyB3YXRjaCBkcm9wZG93biBjb250ZW50IHNjcm9sbCBwb3NpdGlvblxuXG5cdCAgICBkcm9wZG93bl9jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgaWYgKCFzZWxmLnNldHRpbmdzLnNob3VsZExvYWRNb3JlLmNhbGwoc2VsZikpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH0gLy8gIWltcG9ydGFudDogdGhpcyB3aWxsIGdldCBjaGVja2VkIGFnYWluIGluIGxvYWQoKSBidXQgd2Ugc3RpbGwgbmVlZCB0byBjaGVjayBoZXJlIG90aGVyd2lzZSBsb2FkaW5nX21vcmUgd2lsbCBiZSBzZXQgdG8gdHJ1ZVxuXG5cblx0ICAgICAgaWYgKCFjYW5Mb2FkTW9yZShzZWxmLmxhc3RWYWx1ZSkpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH0gLy8gZG9uJ3QgY2FsbCBsb2FkKCkgdG9vIG11Y2hcblxuXG5cdCAgICAgIGlmIChsb2FkaW5nX21vcmUpIHJldHVybjtcblx0ICAgICAgbG9hZGluZ19tb3JlID0gdHJ1ZTtcblx0ICAgICAgc2VsZi5sb2FkLmNhbGwoc2VsZiwgc2VsZi5sYXN0VmFsdWUpO1xuXHQgICAgfSk7XG5cdCAgfSk7XG5cdH1cblxuXHRUb21TZWxlY3QuZGVmaW5lKCdjaGFuZ2VfbGlzdGVuZXInLCBjaGFuZ2VfbGlzdGVuZXIpO1xuXHRUb21TZWxlY3QuZGVmaW5lKCdjaGVja2JveF9vcHRpb25zJywgY2hlY2tib3hfb3B0aW9ucyk7XG5cdFRvbVNlbGVjdC5kZWZpbmUoJ2NsZWFyX2J1dHRvbicsIGNsZWFyX2J1dHRvbik7XG5cdFRvbVNlbGVjdC5kZWZpbmUoJ2RyYWdfZHJvcCcsIGRyYWdfZHJvcCk7XG5cdFRvbVNlbGVjdC5kZWZpbmUoJ2Ryb3Bkb3duX2hlYWRlcicsIGRyb3Bkb3duX2hlYWRlcik7XG5cdFRvbVNlbGVjdC5kZWZpbmUoJ2NhcmV0X3Bvc2l0aW9uJywgY2FyZXRfcG9zaXRpb24pO1xuXHRUb21TZWxlY3QuZGVmaW5lKCdkcm9wZG93bl9pbnB1dCcsIGRyb3Bkb3duX2lucHV0KTtcblx0VG9tU2VsZWN0LmRlZmluZSgnaW5wdXRfYXV0b2dyb3cnLCBpbnB1dF9hdXRvZ3Jvdyk7XG5cdFRvbVNlbGVjdC5kZWZpbmUoJ25vX2JhY2tzcGFjZV9kZWxldGUnLCBub19iYWNrc3BhY2VfZGVsZXRlKTtcblx0VG9tU2VsZWN0LmRlZmluZSgnbm9fYWN0aXZlX2l0ZW1zJywgbm9fYWN0aXZlX2l0ZW1zKTtcblx0VG9tU2VsZWN0LmRlZmluZSgnb3B0Z3JvdXBfY29sdW1ucycsIG9wdGdyb3VwX2NvbHVtbnMpO1xuXHRUb21TZWxlY3QuZGVmaW5lKCdyZW1vdmVfYnV0dG9uJywgcmVtb3ZlX2J1dHRvbik7XG5cdFRvbVNlbGVjdC5kZWZpbmUoJ3Jlc3RvcmVfb25fYmFja3NwYWNlJywgcmVzdG9yZV9vbl9iYWNrc3BhY2UpO1xuXHRUb21TZWxlY3QuZGVmaW5lKCd2aXJ0dWFsX3Njcm9sbCcsIHZpcnR1YWxfc2Nyb2xsKTtcblxuXHRyZXR1cm4gVG9tU2VsZWN0O1xuXG59KSk7XG52YXIgdG9tU2VsZWN0PWZ1bmN0aW9uKGVsLG9wdHMpe3JldHVybiBuZXcgVG9tU2VsZWN0KGVsLG9wdHMpO30gXG4vLyMgc291cmNlTWFwcGluZ1VSTD10b20tc2VsZWN0LmNvbXBsZXRlLmpzLm1hcFxuIl0sIm5hbWVzIjpbIlRvbVNlbGVjdCIsInNlbGVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImNyZWF0ZSIsInNvcnRGaWVsZCIsImZpZWxkIiwiZGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==