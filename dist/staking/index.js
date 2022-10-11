(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/moment/moment.js
  var require_moment = __commonJS({
    "node_modules/moment/moment.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory();
      })(exports, function() {
        "use strict";
        var hookCallback;
        function hooks() {
          return hookCallback.apply(null, arguments);
        }
        function setHookCallback(callback) {
          hookCallback = callback;
        }
        function isArray(input) {
          return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
        }
        function isObject(input) {
          return input != null && Object.prototype.toString.call(input) === "[object Object]";
        }
        function hasOwnProp(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
        }
        function isObjectEmpty(obj) {
          if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
          } else {
            var k;
            for (k in obj) {
              if (hasOwnProp(obj, k)) {
                return false;
              }
            }
            return true;
          }
        }
        function isUndefined(input) {
          return input === void 0;
        }
        function isNumber(input) {
          return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
        }
        function isDate(input) {
          return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
        }
        function map(arr, fn) {
          var res = [], i;
          for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
          }
          return res;
        }
        function extend(a, b) {
          for (var i in b) {
            if (hasOwnProp(b, i)) {
              a[i] = b[i];
            }
          }
          if (hasOwnProp(b, "toString")) {
            a.toString = b.toString;
          }
          if (hasOwnProp(b, "valueOf")) {
            a.valueOf = b.valueOf;
          }
          return a;
        }
        function createUTC(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, true).utc();
        }
        function defaultParsingFlags() {
          return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
          };
        }
        function getParsingFlags(m) {
          if (m._pf == null) {
            m._pf = defaultParsingFlags();
          }
          return m._pf;
        }
        var some;
        if (Array.prototype.some) {
          some = Array.prototype.some;
        } else {
          some = function(fun) {
            var t = Object(this), len = t.length >>> 0, i;
            for (i = 0; i < len; i++) {
              if (i in t && fun.call(this, t[i], i, t)) {
                return true;
              }
            }
            return false;
          };
        }
        function isValid(m) {
          if (m._isValid == null) {
            var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
              return i != null;
            }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) {
              isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
            }
            if (Object.isFrozen == null || !Object.isFrozen(m)) {
              m._isValid = isNowValid;
            } else {
              return isNowValid;
            }
          }
          return m._isValid;
        }
        function createInvalid(flags) {
          var m = createUTC(NaN);
          if (flags != null) {
            extend(getParsingFlags(m), flags);
          } else {
            getParsingFlags(m).userInvalidated = true;
          }
          return m;
        }
        var momentProperties = hooks.momentProperties = [], updateInProgress = false;
        function copyConfig(to2, from2) {
          var i, prop, val;
          if (!isUndefined(from2._isAMomentObject)) {
            to2._isAMomentObject = from2._isAMomentObject;
          }
          if (!isUndefined(from2._i)) {
            to2._i = from2._i;
          }
          if (!isUndefined(from2._f)) {
            to2._f = from2._f;
          }
          if (!isUndefined(from2._l)) {
            to2._l = from2._l;
          }
          if (!isUndefined(from2._strict)) {
            to2._strict = from2._strict;
          }
          if (!isUndefined(from2._tzm)) {
            to2._tzm = from2._tzm;
          }
          if (!isUndefined(from2._isUTC)) {
            to2._isUTC = from2._isUTC;
          }
          if (!isUndefined(from2._offset)) {
            to2._offset = from2._offset;
          }
          if (!isUndefined(from2._pf)) {
            to2._pf = getParsingFlags(from2);
          }
          if (!isUndefined(from2._locale)) {
            to2._locale = from2._locale;
          }
          if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
              prop = momentProperties[i];
              val = from2[prop];
              if (!isUndefined(val)) {
                to2[prop] = val;
              }
            }
          }
          return to2;
        }
        function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);
          if (!this.isValid()) {
            this._d = new Date(NaN);
          }
          if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
          }
        }
        function isMoment(obj) {
          return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
        }
        function warn(msg) {
          if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
            console.warn("Deprecation warning: " + msg);
          }
        }
        function deprecate(msg, fn) {
          var firstTime = true;
          return extend(function() {
            if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
              var args = [], arg, i, key;
              for (i = 0; i < arguments.length; i++) {
                arg = "";
                if (typeof arguments[i] === "object") {
                  arg += "\n[" + i + "] ";
                  for (key in arguments[0]) {
                    if (hasOwnProp(arguments[0], key)) {
                      arg += key + ": " + arguments[0][key] + ", ";
                    }
                  }
                  arg = arg.slice(0, -2);
                } else {
                  arg = arguments[i];
                }
                args.push(arg);
              }
              warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
              firstTime = false;
            }
            return fn.apply(this, arguments);
          }, fn);
        }
        var deprecations = {};
        function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
          }
          if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
          }
        }
        hooks.suppressDeprecationWarnings = false;
        hooks.deprecationHandler = null;
        function isFunction(input) {
          return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
        }
        function set(config) {
          var prop, i;
          for (i in config) {
            if (hasOwnProp(config, i)) {
              prop = config[i];
              if (isFunction(prop)) {
                this[i] = prop;
              } else {
                this["_" + i] = prop;
              }
            }
          }
          this._config = config;
          this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
        }
        function mergeConfigs(parentConfig, childConfig) {
          var res = extend({}, parentConfig), prop;
          for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
              if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
              } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
              } else {
                delete res[prop];
              }
            }
          }
          for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
              res[prop] = extend({}, res[prop]);
            }
          }
          return res;
        }
        function Locale(config) {
          if (config != null) {
            this.set(config);
          }
        }
        var keys;
        if (Object.keys) {
          keys = Object.keys;
        } else {
          keys = function(obj) {
            var i, res = [];
            for (i in obj) {
              if (hasOwnProp(obj, i)) {
                res.push(i);
              }
            }
            return res;
          };
        }
        var defaultCalendar = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        };
        function calendar(key, mom, now2) {
          var output = this._calendar[key] || this._calendar["sameElse"];
          return isFunction(output) ? output.call(mom, now2) : output;
        }
        function zeroFill(number, targetLength, forceSign) {
          var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
          return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
        }
        var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
        function addFormatToken(token2, padded, ordinal2, callback) {
          var func = callback;
          if (typeof callback === "string") {
            func = function() {
              return this[callback]();
            };
          }
          if (token2) {
            formatTokenFunctions[token2] = func;
          }
          if (padded) {
            formatTokenFunctions[padded[0]] = function() {
              return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
          }
          if (ordinal2) {
            formatTokenFunctions[ordinal2] = function() {
              return this.localeData().ordinal(func.apply(this, arguments), token2);
            };
          }
        }
        function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
          }
          return input.replace(/\\/g, "");
        }
        function makeFormatFunction(format2) {
          var array = format2.match(formattingTokens), i, length;
          for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
            } else {
              array[i] = removeFormattingTokens(array[i]);
            }
          }
          return function(mom) {
            var output = "", i2;
            for (i2 = 0; i2 < length; i2++) {
              output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
            }
            return output;
          };
        }
        function formatMoment(m, format2) {
          if (!m.isValid()) {
            return m.localeData().invalidDate();
          }
          format2 = expandFormat(format2, m.localeData());
          formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
          return formatFunctions[format2](m);
        }
        function expandFormat(format2, locale2) {
          var i = 5;
          function replaceLongDateFormatTokens(input) {
            return locale2.longDateFormat(input) || input;
          }
          localFormattingTokens.lastIndex = 0;
          while (i >= 0 && localFormattingTokens.test(format2)) {
            format2 = format2.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
          }
          return format2;
        }
        var defaultLongDateFormat = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        function longDateFormat(key) {
          var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
          if (format2 || !formatUpper) {
            return format2;
          }
          this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
              return tok.slice(1);
            }
            return tok;
          }).join("");
          return this._longDateFormat[key];
        }
        var defaultInvalidDate = "Invalid date";
        function invalidDate() {
          return this._invalidDate;
        }
        var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
        function ordinal(number) {
          return this._ordinal.replace("%d", number);
        }
        var defaultRelativeTime = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
        function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
        }
        function pastFuture(diff2, output) {
          var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
          return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
        }
        var aliases = {};
        function addUnitAlias(unit, shorthand) {
          var lowerCase = unit.toLowerCase();
          aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
        }
        function normalizeUnits(units) {
          return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
        }
        function normalizeObjectUnits(inputObject) {
          var normalizedInput = {}, normalizedProp, prop;
          for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);
              if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
              }
            }
          }
          return normalizedInput;
        }
        var priorities = {};
        function addUnitPriority(unit, priority) {
          priorities[unit] = priority;
        }
        function getPrioritizedUnits(unitsObj) {
          var units = [], u;
          for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
              units.push({ unit: u, priority: priorities[u] });
            }
          }
          units.sort(function(a, b) {
            return a.priority - b.priority;
          });
          return units;
        }
        function isLeapYear(year) {
          return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        }
        function absFloor(number) {
          if (number < 0) {
            return Math.ceil(number) || 0;
          } else {
            return Math.floor(number);
          }
        }
        function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion, value = 0;
          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
          }
          return value;
        }
        function makeGetSet(unit, keepTime) {
          return function(value) {
            if (value != null) {
              set$1(this, unit, value);
              hooks.updateOffset(this, keepTime);
              return this;
            } else {
              return get(this, unit);
            }
          };
        }
        function get(mom, unit) {
          return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
        }
        function set$1(mom, unit, value) {
          if (mom.isValid() && !isNaN(value)) {
            if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
              value = toInt(value);
              mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else {
              mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
            }
          }
        }
        function stringGet(units) {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units]();
          }
          return this;
        }
        function stringSet(units, value) {
          if (typeof units === "object") {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i;
            for (i = 0; i < prioritized.length; i++) {
              this[prioritized[i].unit](units[prioritized[i].unit]);
            }
          } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
              return this[units](value);
            }
          }
          return this;
        }
        var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
        regexes = {};
        function addRegexToken(token2, regex, strictRegex) {
          regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
            return isStrict && strictRegex ? strictRegex : regex;
          };
        }
        function getParseRegexForToken(token2, config) {
          if (!hasOwnProp(regexes, token2)) {
            return new RegExp(unescapeFormat(token2));
          }
          return regexes[token2](config._strict, config._locale);
        }
        function unescapeFormat(s) {
          return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
          }));
        }
        function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        var tokens = {};
        function addParseToken(token2, callback) {
          var i, func = callback;
          if (typeof token2 === "string") {
            token2 = [token2];
          }
          if (isNumber(callback)) {
            func = function(input, array) {
              array[callback] = toInt(input);
            };
          }
          for (i = 0; i < token2.length; i++) {
            tokens[token2[i]] = func;
          }
        }
        function addWeekParseToken(token2, callback) {
          addParseToken(token2, function(input, array, config, token3) {
            config._w = config._w || {};
            callback(input, config._w, config, token3);
          });
        }
        function addTimeToArrayFromToken(token2, input, config) {
          if (input != null && hasOwnProp(tokens, token2)) {
            tokens[token2](input, config._a, config, token2);
          }
        }
        var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
        function mod(n, x) {
          return (n % x + x) % x;
        }
        var indexOf;
        if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
        } else {
          indexOf = function(o) {
            var i;
            for (i = 0; i < this.length; ++i) {
              if (this[i] === o) {
                return i;
              }
            }
            return -1;
          };
        }
        function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
            return NaN;
          }
          var modMonth = mod(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
        }
        addFormatToken("M", ["MM", 2], "Mo", function() {
          return this.month() + 1;
        });
        addFormatToken("MMM", 0, 0, function(format2) {
          return this.localeData().monthsShort(this, format2);
        });
        addFormatToken("MMMM", 0, 0, function(format2) {
          return this.localeData().months(this, format2);
        });
        addUnitAlias("month", "M");
        addUnitPriority("month", 8);
        addRegexToken("M", match1to2);
        addRegexToken("MM", match1to2, match2);
        addRegexToken("MMM", function(isStrict, locale2) {
          return locale2.monthsShortRegex(isStrict);
        });
        addRegexToken("MMMM", function(isStrict, locale2) {
          return locale2.monthsRegex(isStrict);
        });
        addParseToken(["M", "MM"], function(input, array) {
          array[MONTH] = toInt(input) - 1;
        });
        addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
          var month = config._locale.monthsParse(input, token2, config._strict);
          if (month != null) {
            array[MONTH] = month;
          } else {
            getParsingFlags(config).invalidMonth = input;
          }
        });
        var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
        function localeMonths(m, format2) {
          if (!m) {
            return isArray(this._months) ? this._months : this._months["standalone"];
          }
          return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
        }
        function localeMonthsShort(m, format2) {
          if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
          }
          return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
        }
        function handleStrictParse(monthName, format2, strict) {
          var i, ii, mom, llc = monthName.toLocaleLowerCase();
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
              mom = createUTC([2e3, i]);
              this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeMonthsParse(monthName, format2, strict) {
          var i, mom, regex;
          if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format2, strict);
          }
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
          }
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            if (strict && !this._longMonthsParse[i]) {
              this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
              this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
            }
            if (!strict && !this._monthsParse[i]) {
              regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
              this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
              return i;
            } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
              return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
            }
          }
        }
        function setMonth(mom, value) {
          var dayOfMonth;
          if (!mom.isValid()) {
            return mom;
          }
          if (typeof value === "string") {
            if (/^\d+$/.test(value)) {
              value = toInt(value);
            } else {
              value = mom.localeData().monthsParse(value);
              if (!isNumber(value)) {
                return mom;
              }
            }
          }
          dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
          mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
          return mom;
        }
        function getSetMonth(value) {
          if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
          } else {
            return get(this, "Month");
          }
        }
        function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
        }
        function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsShortStrictRegex;
            } else {
              return this._monthsShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsShortRegex")) {
              this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
          }
        }
        function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsStrictRegex;
            } else {
              return this._monthsRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsRegex")) {
              this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
          }
        }
        function computeMonthsParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }
          var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            shortPieces.push(this.monthsShort(mom, ""));
            longPieces.push(this.months(mom, ""));
            mixedPieces.push(this.months(mom, ""));
            mixedPieces.push(this.monthsShort(mom, ""));
          }
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
          }
          for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
          }
          this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
          this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
        }
        addFormatToken("Y", 0, 0, function() {
          var y = this.year();
          return y <= 9999 ? zeroFill(y, 4) : "+" + y;
        });
        addFormatToken(0, ["YY", 2], 0, function() {
          return this.year() % 100;
        });
        addFormatToken(0, ["YYYY", 4], 0, "year");
        addFormatToken(0, ["YYYYY", 5], 0, "year");
        addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
        addUnitAlias("year", "y");
        addUnitPriority("year", 1);
        addRegexToken("Y", matchSigned);
        addRegexToken("YY", match1to2, match2);
        addRegexToken("YYYY", match1to4, match4);
        addRegexToken("YYYYY", match1to6, match6);
        addRegexToken("YYYYYY", match1to6, match6);
        addParseToken(["YYYYY", "YYYYYY"], YEAR);
        addParseToken("YYYY", function(input, array) {
          array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
        });
        addParseToken("YY", function(input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
        });
        addParseToken("Y", function(input, array) {
          array[YEAR] = parseInt(input, 10);
        });
        function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
        }
        hooks.parseTwoDigitYear = function(input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
        };
        var getSetYear = makeGetSet("FullYear", true);
        function getIsLeapYear() {
          return isLeapYear(this.year());
        }
        function createDate(y, m, d, h, M, s, ms) {
          var date;
          if (y < 100 && y >= 0) {
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
              date.setFullYear(y);
            }
          } else {
            date = new Date(y, m, d, h, M, s, ms);
          }
          return date;
        }
        function createUTCDate(y) {
          var date, args;
          if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
              date.setUTCFullYear(y);
            }
          } else {
            date = new Date(Date.UTC.apply(null, arguments));
          }
          return date;
        }
        function firstWeekOffset(year, dow, doy) {
          var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
          return -fwdlw + fwd - 1;
        }
        function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
          if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
          } else {
            resYear = year;
            resDayOfYear = dayOfYear;
          }
          return {
            year: resYear,
            dayOfYear: resDayOfYear
          };
        }
        function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
          if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
          } else {
            resYear = mom.year();
            resWeek = week;
          }
          return {
            week: resWeek,
            year: resYear
          };
        }
        function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
        }
        addFormatToken("w", ["ww", 2], "wo", "week");
        addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
        addUnitAlias("week", "w");
        addUnitAlias("isoWeek", "W");
        addUnitPriority("week", 5);
        addUnitPriority("isoWeek", 5);
        addRegexToken("w", match1to2);
        addRegexToken("ww", match1to2, match2);
        addRegexToken("W", match1to2);
        addRegexToken("WW", match1to2, match2);
        addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token2) {
          week[token2.substr(0, 1)] = toInt(input);
        });
        function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
        }
        var defaultLocaleWeek = {
          dow: 0,
          doy: 6
        };
        function localeFirstDayOfWeek() {
          return this._week.dow;
        }
        function localeFirstDayOfYear() {
          return this._week.doy;
        }
        function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        addFormatToken("d", 0, "do", "day");
        addFormatToken("dd", 0, 0, function(format2) {
          return this.localeData().weekdaysMin(this, format2);
        });
        addFormatToken("ddd", 0, 0, function(format2) {
          return this.localeData().weekdaysShort(this, format2);
        });
        addFormatToken("dddd", 0, 0, function(format2) {
          return this.localeData().weekdays(this, format2);
        });
        addFormatToken("e", 0, 0, "weekday");
        addFormatToken("E", 0, 0, "isoWeekday");
        addUnitAlias("day", "d");
        addUnitAlias("weekday", "e");
        addUnitAlias("isoWeekday", "E");
        addUnitPriority("day", 11);
        addUnitPriority("weekday", 11);
        addUnitPriority("isoWeekday", 11);
        addRegexToken("d", match1to2);
        addRegexToken("e", match1to2);
        addRegexToken("E", match1to2);
        addRegexToken("dd", function(isStrict, locale2) {
          return locale2.weekdaysMinRegex(isStrict);
        });
        addRegexToken("ddd", function(isStrict, locale2) {
          return locale2.weekdaysShortRegex(isStrict);
        });
        addRegexToken("dddd", function(isStrict, locale2) {
          return locale2.weekdaysRegex(isStrict);
        });
        addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
          var weekday = config._locale.weekdaysParse(input, token2, config._strict);
          if (weekday != null) {
            week.d = weekday;
          } else {
            getParsingFlags(config).invalidWeekday = input;
          }
        });
        addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
          week[token2] = toInt(input);
        });
        function parseWeekday(input, locale2) {
          if (typeof input !== "string") {
            return input;
          }
          if (!isNaN(input)) {
            return parseInt(input, 10);
          }
          input = locale2.weekdaysParse(input);
          if (typeof input === "number") {
            return input;
          }
          return null;
        }
        function parseIsoWeekday(input, locale2) {
          if (typeof input === "string") {
            return locale2.weekdaysParse(input) % 7 || 7;
          }
          return isNaN(input) ? null : input;
        }
        function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
        }
        var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
        function localeWeekdays(m, format2) {
          var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
          return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
        }
        function localeWeekdaysShort(m) {
          return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
        }
        function localeWeekdaysMin(m) {
          return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
        }
        function handleStrictParse$1(weekdayName, format2, strict) {
          var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (i = 0; i < 7; ++i) {
              mom = createUTC([2e3, 1]).day(i);
              this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeWeekdaysParse(weekdayName, format2, strict) {
          var i, mom, regex;
          if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format2, strict);
          }
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
          }
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
              this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
              this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
            }
            if (!this._weekdaysParse[i]) {
              regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
              this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
            }
          }
        }
        function getSetDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, "d");
          } else {
            return day;
          }
        }
        function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, "d");
        }
        function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
            return this.day() || 7;
          }
        }
        function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysStrictRegex;
            } else {
              return this._weekdaysRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
          }
        }
        function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysShortStrictRegex;
            } else {
              return this._weekdaysShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysShortRegex")) {
              this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
          }
        }
        function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysMinStrictRegex;
            } else {
              return this._weekdaysMinRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysMinRegex")) {
              this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
          }
        }
        function computeWeekdaysParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }
          var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ""));
            shortp = regexEscape(this.weekdaysShort(mom, ""));
            longp = regexEscape(this.weekdays(mom, ""));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
          }
          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;
          this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
          this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
          this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
        }
        function hFormat() {
          return this.hours() % 12 || 12;
        }
        function kFormat() {
          return this.hours() || 24;
        }
        addFormatToken("H", ["HH", 2], 0, "hour");
        addFormatToken("h", ["hh", 2], 0, hFormat);
        addFormatToken("k", ["kk", 2], 0, kFormat);
        addFormatToken("hmm", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
        });
        addFormatToken("hmmss", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        addFormatToken("Hmm", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2);
        });
        addFormatToken("Hmmss", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        function meridiem(token2, lowercase) {
          addFormatToken(token2, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
          });
        }
        meridiem("a", true);
        meridiem("A", false);
        addUnitAlias("hour", "h");
        addUnitPriority("hour", 13);
        function matchMeridiem(isStrict, locale2) {
          return locale2._meridiemParse;
        }
        addRegexToken("a", matchMeridiem);
        addRegexToken("A", matchMeridiem);
        addRegexToken("H", match1to2);
        addRegexToken("h", match1to2);
        addRegexToken("k", match1to2);
        addRegexToken("HH", match1to2, match2);
        addRegexToken("hh", match1to2, match2);
        addRegexToken("kk", match1to2, match2);
        addRegexToken("hmm", match3to4);
        addRegexToken("hmmss", match5to6);
        addRegexToken("Hmm", match3to4);
        addRegexToken("Hmmss", match5to6);
        addParseToken(["H", "HH"], HOUR);
        addParseToken(["k", "kk"], function(input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
        });
        addParseToken(["a", "A"], function(input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
        });
        addParseToken(["h", "hh"], function(input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("Hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
        });
        addParseToken("Hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
        });
        function localeIsPM(input) {
          return (input + "").toLowerCase().charAt(0) === "p";
        }
        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
        function localeMeridiem(hours2, minutes2, isLower) {
          if (hours2 > 11) {
            return isLower ? "pm" : "PM";
          } else {
            return isLower ? "am" : "AM";
          }
        }
        var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,
          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,
          week: defaultLocaleWeek,
          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,
          meridiemParse: defaultLocaleMeridiemParse
        };
        var locales = {}, localeFamilies = {}, globalLocale;
        function commonPrefix(arr1, arr2) {
          var i, minl = Math.min(arr1.length, arr2.length);
          for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
              return i;
            }
          }
          return minl;
        }
        function normalizeLocale(key) {
          return key ? key.toLowerCase().replace("_", "-") : key;
        }
        function chooseLocale(names) {
          var i = 0, j, next, locale2, split;
          while (i < names.length) {
            split = normalizeLocale(names[i]).split("-");
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split("-") : null;
            while (j > 0) {
              locale2 = loadLocale(split.slice(0, j).join("-"));
              if (locale2) {
                return locale2;
              }
              if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
                break;
              }
              j--;
            }
            i++;
          }
          return globalLocale;
        }
        function loadLocale(name) {
          var oldLocale = null, aliasedRequire;
          if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports) {
            try {
              oldLocale = globalLocale._abbr;
              aliasedRequire = __require;
              aliasedRequire("./locale/" + name);
              getSetGlobalLocale(oldLocale);
            } catch (e) {
              locales[name] = null;
            }
          }
          return locales[name];
        }
        function getSetGlobalLocale(key, values) {
          var data;
          if (key) {
            if (isUndefined(values)) {
              data = getLocale(key);
            } else {
              data = defineLocale(key, values);
            }
            if (data) {
              globalLocale = data;
            } else {
              if (typeof console !== "undefined" && console.warn) {
                console.warn("Locale " + key + " not found. Did you forget to load it?");
              }
            }
          }
          return globalLocale._abbr;
        }
        function defineLocale(name, config) {
          if (config !== null) {
            var locale2, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
              deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
              parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
              if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
              } else {
                locale2 = loadLocale(config.parentLocale);
                if (locale2 != null) {
                  parentConfig = locale2._config;
                } else {
                  if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                  }
                  localeFamilies[config.parentLocale].push({
                    name,
                    config
                  });
                  return null;
                }
              }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) {
              localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
              });
            }
            getSetGlobalLocale(name);
            return locales[name];
          } else {
            delete locales[name];
            return null;
          }
        }
        function updateLocale(name, config) {
          if (config != null) {
            var locale2, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) {
              locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
              tmpLocale = loadLocale(name);
              if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
              }
              config = mergeConfigs(parentConfig, config);
              if (tmpLocale == null) {
                config.abbr = name;
              }
              locale2 = new Locale(config);
              locale2.parentLocale = locales[name];
              locales[name] = locale2;
            }
            getSetGlobalLocale(name);
          } else {
            if (locales[name] != null) {
              if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                  getSetGlobalLocale(name);
                }
              } else if (locales[name] != null) {
                delete locales[name];
              }
            }
          }
          return locales[name];
        }
        function getLocale(key) {
          var locale2;
          if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
          }
          if (!key) {
            return globalLocale;
          }
          if (!isArray(key)) {
            locale2 = loadLocale(key);
            if (locale2) {
              return locale2;
            }
            key = [key];
          }
          return chooseLocale(key);
        }
        function listLocales() {
          return keys(locales);
        }
        function checkOverflow(m) {
          var overflow, a = m._a;
          if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
              overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
              overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
              overflow = WEEKDAY;
            }
            getParsingFlags(m).overflow = overflow;
          }
          return m;
        }
        var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, false],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, false],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, false],
          ["YYYY", /\d{4}/, false]
        ], isoTimes = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
        ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
          UT: 0,
          GMT: 0,
          EDT: -4 * 60,
          EST: -5 * 60,
          CDT: -5 * 60,
          CST: -6 * 60,
          MDT: -6 * 60,
          MST: -7 * 60,
          PDT: -7 * 60,
          PST: -8 * 60
        };
        function configFromISO(config) {
          var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
          if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
              if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
              }
            }
            if (dateFormat == null) {
              config._isValid = false;
              return;
            }
            if (match[3]) {
              for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                  timeFormat = (match[2] || " ") + isoTimes[i][0];
                  break;
                }
              }
              if (timeFormat == null) {
                config._isValid = false;
                return;
              }
            }
            if (!allowTime && timeFormat != null) {
              config._isValid = false;
              return;
            }
            if (match[4]) {
              if (tzRegex.exec(match[4])) {
                tzFormat = "Z";
              } else {
                config._isValid = false;
                return;
              }
            }
            config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
            configFromStringAndFormat(config);
          } else {
            config._isValid = false;
          }
        }
        function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
          var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
          ];
          if (secondStr) {
            result.push(parseInt(secondStr, 10));
          }
          return result;
        }
        function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);
          if (year <= 49) {
            return 2e3 + year;
          } else if (year <= 999) {
            return 1900 + year;
          }
          return year;
        }
        function preprocessRFC2822(s) {
          return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        }
        function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
              getParsingFlags(config).weekdayMismatch = true;
              config._isValid = false;
              return false;
            }
          }
          return true;
        }
        function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
            return obsOffsets[obsOffset];
          } else if (militaryOffset) {
            return 0;
          } else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
          }
        }
        function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
          if (match) {
            parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
              return;
            }
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
          } else {
            config._isValid = false;
          }
        }
        function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);
          if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
          }
          configFromISO(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          configFromRFC2822(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          if (config._strict) {
            config._isValid = false;
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
          config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
        });
        function defaults(a, b, c) {
          if (a != null) {
            return a;
          }
          if (b != null) {
            return b;
          }
          return c;
        }
        function currentDateArray(config) {
          var nowValue = new Date(hooks.now());
          if (config._useUTC) {
            return [
              nowValue.getUTCFullYear(),
              nowValue.getUTCMonth(),
              nowValue.getUTCDate()
            ];
          }
          return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
        }
        function configFromArray(config) {
          var i, date, input = [], currentDate, expectedWeekday, yearToUse;
          if (config._d) {
            return;
          }
          currentDate = currentDateArray(config);
          if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
          }
          if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
              getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
          }
          for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
          }
          for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
          }
          if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
          }
          config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
          expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
          if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }
          if (config._nextDay) {
            config._a[HOUR] = 24;
          }
          if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
          }
        }
        function dayOfYearFromWeekInfo(config) {
          var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
          w = config._w;
          if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
              weekdayOverflow = true;
            }
          } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
              weekday = w.d;
              if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
              }
            } else if (w.e != null) {
              weekday = w.e + dow;
              if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
              }
            } else {
              weekday = dow;
            }
          }
          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
          } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
          }
        }
        hooks.ISO_8601 = function() {
        };
        hooks.RFC_2822 = function() {
        };
        function configFromStringAndFormat(config) {
          if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
          }
          if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
          }
          config._a = [];
          getParsingFlags(config).empty = true;
          var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era;
          tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
          for (i = 0; i < tokens2.length; i++) {
            token2 = tokens2[i];
            parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
            if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));
              if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
              }
              string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
              totalParsedInputLength += parsedInput.length;
            }
            if (formatTokenFunctions[token2]) {
              if (parsedInput) {
                getParsingFlags(config).empty = false;
              } else {
                getParsingFlags(config).unusedTokens.push(token2);
              }
              addTimeToArrayFromToken(token2, parsedInput, config);
            } else if (config._strict && !parsedInput) {
              getParsingFlags(config).unusedTokens.push(token2);
            }
          }
          getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
          if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
          }
          if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = void 0;
          }
          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem;
          config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
          era = getParsingFlags(config).era;
          if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
          }
          configFromArray(config);
          checkOverflow(config);
        }
        function meridiemFixWrap(locale2, hour, meridiem2) {
          var isPm;
          if (meridiem2 == null) {
            return hour;
          }
          if (locale2.meridiemHour != null) {
            return locale2.meridiemHour(hour, meridiem2);
          } else if (locale2.isPM != null) {
            isPm = locale2.isPM(meridiem2);
            if (isPm && hour < 12) {
              hour += 12;
            }
            if (!isPm && hour === 12) {
              hour = 0;
            }
            return hour;
          } else {
            return hour;
          }
        }
        function configFromStringAndArray(config) {
          var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false;
          if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
          }
          for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) {
              validFormatFound = true;
            }
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
              if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                  bestFormatIsValid = true;
                }
              }
            } else {
              if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
              }
            }
          }
          extend(config, bestMoment || tempConfig);
        }
        function configFromObject(config) {
          if (config._d) {
            return;
          }
          var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
          config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function(obj) {
            return obj && parseInt(obj, 10);
          });
          configFromArray(config);
        }
        function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));
          if (res._nextDay) {
            res.add(1, "d");
            res._nextDay = void 0;
          }
          return res;
        }
        function prepareConfig(config) {
          var input = config._i, format2 = config._f;
          config._locale = config._locale || getLocale(config._l);
          if (input === null || format2 === void 0 && input === "") {
            return createInvalid({ nullInput: true });
          }
          if (typeof input === "string") {
            config._i = input = config._locale.preparse(input);
          }
          if (isMoment(input)) {
            return new Moment(checkOverflow(input));
          } else if (isDate(input)) {
            config._d = input;
          } else if (isArray(format2)) {
            configFromStringAndArray(config);
          } else if (format2) {
            configFromStringAndFormat(config);
          } else {
            configFromInput(config);
          }
          if (!isValid(config)) {
            config._d = null;
          }
          return config;
        }
        function configFromInput(config) {
          var input = config._i;
          if (isUndefined(input)) {
            config._d = new Date(hooks.now());
          } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
          } else if (typeof input === "string") {
            configFromString(config);
          } else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
              return parseInt(obj, 10);
            });
            configFromArray(config);
          } else if (isObject(input)) {
            configFromObject(config);
          } else if (isNumber(input)) {
            config._d = new Date(input);
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
          var c = {};
          if (format2 === true || format2 === false) {
            strict = format2;
            format2 = void 0;
          }
          if (locale2 === true || locale2 === false) {
            strict = locale2;
            locale2 = void 0;
          }
          if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
            input = void 0;
          }
          c._isAMomentObject = true;
          c._useUTC = c._isUTC = isUTC;
          c._l = locale2;
          c._i = input;
          c._f = format2;
          c._strict = strict;
          return createFromConfig(c);
        }
        function createLocal(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, false);
        }
        var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
          } else {
            return createInvalid();
          }
        }), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
          } else {
            return createInvalid();
          }
        });
        function pickBy(fn, moments) {
          var res, i;
          if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
          }
          if (!moments.length) {
            return createLocal();
          }
          res = moments[0];
          for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
              res = moments[i];
            }
          }
          return res;
        }
        function min() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isBefore", args);
        }
        function max() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isAfter", args);
        }
        var now = function() {
          return Date.now ? Date.now() : +new Date();
        };
        var ordering = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond"
        ];
        function isDurationValid(m) {
          var key, unitHasDecimal = false, i;
          for (key in m) {
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
              return false;
            }
          }
          for (i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
              if (unitHasDecimal) {
                return false;
              }
              if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
              }
            }
          }
          return true;
        }
        function isValid$1() {
          return this._isValid;
        }
        function createInvalid$1() {
          return createDuration(NaN);
        }
        function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
          this._isValid = isDurationValid(normalizedInput);
          this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
          this._days = +days2 + weeks2 * 7;
          this._months = +months2 + quarters * 3 + years2 * 12;
          this._data = {};
          this._locale = getLocale();
          this._bubble();
        }
        function isDuration(obj) {
          return obj instanceof Duration;
        }
        function absRound(number) {
          if (number < 0) {
            return Math.round(-1 * number) * -1;
          } else {
            return Math.round(number);
          }
        }
        function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
          for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
              diffs++;
            }
          }
          return diffs + lengthDiff;
        }
        function offset(token2, separator) {
          addFormatToken(token2, 0, 0, function() {
            var offset2 = this.utcOffset(), sign2 = "+";
            if (offset2 < 0) {
              offset2 = -offset2;
              sign2 = "-";
            }
            return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
          });
        }
        offset("Z", ":");
        offset("ZZ", "");
        addRegexToken("Z", matchShortOffset);
        addRegexToken("ZZ", matchShortOffset);
        addParseToken(["Z", "ZZ"], function(input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
        });
        var chunkOffset = /([\+\-]|\d\d)/gi;
        function offsetFromString(matcher, string) {
          var matches = (string || "").match(matcher), chunk, parts, minutes2;
          if (matches === null) {
            return null;
          }
          chunk = matches[matches.length - 1] || [];
          parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
          minutes2 = +(parts[1] * 60) + toInt(parts[2]);
          return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
        }
        function cloneWithOffset(input, model) {
          var res, diff2;
          if (model._isUTC) {
            res = model.clone();
            diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            res._d.setTime(res._d.valueOf() + diff2);
            hooks.updateOffset(res, false);
            return res;
          } else {
            return createLocal(input).local();
          }
        }
        function getDateOffset(m) {
          return -Math.round(m._d.getTimezoneOffset());
        }
        hooks.updateOffset = function() {
        };
        function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset2 = this._offset || 0, localAdjust;
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            if (typeof input === "string") {
              input = offsetFromString(matchShortOffset, input);
              if (input === null) {
                return this;
              }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
              input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
              localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
              this.add(localAdjust, "m");
            }
            if (offset2 !== input) {
              if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset2, "m"), 1, false);
              } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
              }
            }
            return this;
          } else {
            return this._isUTC ? offset2 : getDateOffset(this);
          }
        }
        function getSetZone(input, keepLocalTime) {
          if (input != null) {
            if (typeof input !== "string") {
              input = -input;
            }
            this.utcOffset(input, keepLocalTime);
            return this;
          } else {
            return -this.utcOffset();
          }
        }
        function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
        }
        function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
              this.subtract(getDateOffset(this), "m");
            }
          }
          return this;
        }
        function setOffsetToParsedOffset() {
          if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === "string") {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
              this.utcOffset(tZone);
            } else {
              this.utcOffset(0, true);
            }
          }
          return this;
        }
        function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
            return false;
          }
          input = input ? createLocal(input).utcOffset() : 0;
          return (this.utcOffset() - input) % 60 === 0;
        }
        function isDaylightSavingTime() {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }
        function isDaylightSavingTimeShifted() {
          if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
          }
          var c = {}, other;
          copyConfig(c, this);
          c = prepareConfig(c);
          if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
          } else {
            this._isDSTShifted = false;
          }
          return this._isDSTShifted;
        }
        function isLocal() {
          return this.isValid() ? !this._isUTC : false;
        }
        function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
        }
        function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }
        var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function createDuration(input, key) {
          var duration = input, match = null, sign2, ret, diffRes;
          if (isDuration(input)) {
            duration = {
              ms: input._milliseconds,
              d: input._days,
              M: input._months
            };
          } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
              duration[key] = +input;
            } else {
              duration.milliseconds = +input;
            }
          } else if (match = aspNetRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: 0,
              d: toInt(match[DATE]) * sign2,
              h: toInt(match[HOUR]) * sign2,
              m: toInt(match[MINUTE]) * sign2,
              s: toInt(match[SECOND]) * sign2,
              ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
            };
          } else if (match = isoRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: parseIso(match[2], sign2),
              M: parseIso(match[3], sign2),
              w: parseIso(match[4], sign2),
              d: parseIso(match[5], sign2),
              h: parseIso(match[6], sign2),
              m: parseIso(match[7], sign2),
              s: parseIso(match[8], sign2)
            };
          } else if (duration == null) {
            duration = {};
          } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
          }
          ret = new Duration(duration);
          if (isDuration(input) && hasOwnProp(input, "_locale")) {
            ret._locale = input._locale;
          }
          if (isDuration(input) && hasOwnProp(input, "_isValid")) {
            ret._isValid = input._isValid;
          }
          return ret;
        }
        createDuration.fn = Duration.prototype;
        createDuration.invalid = createInvalid$1;
        function parseIso(inp, sign2) {
          var res = inp && parseFloat(inp.replace(",", "."));
          return (isNaN(res) ? 0 : res) * sign2;
        }
        function positiveMomentsDifference(base, other) {
          var res = {};
          res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
          if (base.clone().add(res.months, "M").isAfter(other)) {
            --res.months;
          }
          res.milliseconds = +other - +base.clone().add(res.months, "M");
          return res;
        }
        function momentsDifference(base, other) {
          var res;
          if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
          }
          other = cloneWithOffset(other, base);
          if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
          } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
          }
          return res;
        }
        function createAdder(direction, name) {
          return function(val, period) {
            var dur, tmp;
            if (period !== null && !isNaN(+period)) {
              deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
              tmp = val;
              val = period;
              period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
          };
        }
        function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
          if (!mom.isValid()) {
            return;
          }
          updateOffset = updateOffset == null ? true : updateOffset;
          if (months2) {
            setMonth(mom, get(mom, "Month") + months2 * isAdding);
          }
          if (days2) {
            set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
          }
          if (milliseconds2) {
            mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
          }
          if (updateOffset) {
            hooks.updateOffset(mom, days2 || months2);
          }
        }
        var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
        function isString(input) {
          return typeof input === "string" || input instanceof String;
        }
        function isMomentInput(input) {
          return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
        }
        function isMomentInputObject(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms"
          ], i, property;
          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function isNumberOrStringArray(input) {
          var arrayTest = isArray(input), dataTypeTest = false;
          if (arrayTest) {
            dataTypeTest = input.filter(function(item) {
              return !isNumber(item) && isString(input);
            }).length === 0;
          }
          return arrayTest && dataTypeTest;
        }
        function isCalendarSpec(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse"
          ], i, property;
          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function getCalendarFormat(myMoment, now2) {
          var diff2 = myMoment.diff(now2, "days", true);
          return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
        }
        function calendar$1(time, formats) {
          if (arguments.length === 1) {
            if (!arguments[0]) {
              time = void 0;
              formats = void 0;
            } else if (isMomentInput(arguments[0])) {
              time = arguments[0];
              formats = void 0;
            } else if (isCalendarSpec(arguments[0])) {
              formats = arguments[0];
              time = void 0;
            }
          }
          var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
          return this.format(output || this.localeData().calendar(format2, this, createLocal(now2)));
        }
        function clone() {
          return new Moment(this);
        }
        function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() > localInput.valueOf();
          } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
        }
        function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() < localInput.valueOf();
          } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
        }
        function isBetween(from2, to2, units, inclusivity) {
          var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
          }
          inclusivity = inclusivity || "()";
          return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
        }
        function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input), inputMs;
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() === localInput.valueOf();
          } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
          }
        }
        function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
        }
        function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
        }
        function diff(input, units, asFloat) {
          var that, zoneDelta, output;
          if (!this.isValid()) {
            return NaN;
          }
          that = cloneWithOffset(input, this);
          if (!that.isValid()) {
            return NaN;
          }
          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
          units = normalizeUnits(units);
          switch (units) {
            case "year":
              output = monthDiff(this, that) / 12;
              break;
            case "month":
              output = monthDiff(this, that);
              break;
            case "quarter":
              output = monthDiff(this, that) / 3;
              break;
            case "second":
              output = (this - that) / 1e3;
              break;
            case "minute":
              output = (this - that) / 6e4;
              break;
            case "hour":
              output = (this - that) / 36e5;
              break;
            case "day":
              output = (this - that - zoneDelta) / 864e5;
              break;
            case "week":
              output = (this - that - zoneDelta) / 6048e5;
              break;
            default:
              output = this - that;
          }
          return asFloat ? output : absFloor(output);
        }
        function monthDiff(a, b) {
          if (a.date() < b.date()) {
            return -monthDiff(b, a);
          }
          var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
          if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
            adjust = (b - anchor) / (anchor - anchor2);
          } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
            adjust = (b - anchor) / (anchor2 - anchor);
          }
          return -(wholeMonthDiff + adjust) || 0;
        }
        hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        function toString() {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function toISOString(keepOffset) {
          if (!this.isValid()) {
            return null;
          }
          var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
          if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
          }
          if (isFunction(Date.prototype.toISOString)) {
            if (utc) {
              return this.toDate().toISOString();
            } else {
              return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
            }
          }
          return formatMoment(m, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }
        function inspect() {
          if (!this.isValid()) {
            return "moment.invalid(/* " + this._i + " */)";
          }
          var func = "moment", zone = "", prefix, year, datetime, suffix;
          if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            zone = "Z";
          }
          prefix = "[" + func + '("]';
          year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
          datetime = "-MM-DD[T]HH:mm:ss.SSS";
          suffix = zone + '[")]';
          return this.format(prefix + year + datetime + suffix);
        }
        function format(inputString) {
          if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
          }
          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
        }
        function from(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
        }
        function to(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
        }
        function locale(key) {
          var newLocaleData;
          if (key === void 0) {
            return this._locale._abbr;
          } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
              this._locale = newLocaleData;
            }
            return this;
          }
        }
        var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
          if (key === void 0) {
            return this.localeData();
          } else {
            return this.locale(key);
          }
        });
        function localeData() {
          return this._locale;
        }
        var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
        function mod$1(dividend, divisor) {
          return (dividend % divisor + divisor) % divisor;
        }
        function localStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return new Date(y, m, d).valueOf();
          }
        }
        function utcStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return Date.UTC(y, m, d);
          }
        }
        function startOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year(), 0, 1);
              break;
            case "quarter":
              time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
              break;
            case "month":
              time = startOfDate(this.year(), this.month(), 1);
              break;
            case "week":
              time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
              break;
            case "isoWeek":
              time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date());
              break;
            case "hour":
              time = this._d.valueOf();
              time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
              break;
            case "minute":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_MINUTE);
              break;
            case "second":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_SECOND);
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function endOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
              break;
            case "month":
              time = startOfDate(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
              break;
            case "isoWeek":
              time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              time = this._d.valueOf();
              time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
              break;
            case "minute":
              time = this._d.valueOf();
              time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
              break;
            case "second":
              time = this._d.valueOf();
              time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 6e4;
        }
        function unix() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function toDate() {
          return new Date(this.valueOf());
        }
        function toArray() {
          var m = this;
          return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond()
          ];
        }
        function toObject() {
          var m = this;
          return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
          };
        }
        function toJSON() {
          return this.isValid() ? this.toISOString() : null;
        }
        function isValid$2() {
          return isValid(this);
        }
        function parsingFlags() {
          return extend({}, getParsingFlags(this));
        }
        function invalidAt() {
          return getParsingFlags(this).overflow;
        }
        function creationData() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        }
        addFormatToken("N", 0, 0, "eraAbbr");
        addFormatToken("NN", 0, 0, "eraAbbr");
        addFormatToken("NNN", 0, 0, "eraAbbr");
        addFormatToken("NNNN", 0, 0, "eraName");
        addFormatToken("NNNNN", 0, 0, "eraNarrow");
        addFormatToken("y", ["y", 1], "yo", "eraYear");
        addFormatToken("y", ["yy", 2], 0, "eraYear");
        addFormatToken("y", ["yyy", 3], 0, "eraYear");
        addFormatToken("y", ["yyyy", 4], 0, "eraYear");
        addRegexToken("N", matchEraAbbr);
        addRegexToken("NN", matchEraAbbr);
        addRegexToken("NNN", matchEraAbbr);
        addRegexToken("NNNN", matchEraName);
        addRegexToken("NNNNN", matchEraNarrow);
        addParseToken(["N", "NN", "NNN", "NNNN", "NNNNN"], function(input, array, config, token2) {
          var era = config._locale.erasParse(input, token2, config._strict);
          if (era) {
            getParsingFlags(config).era = era;
          } else {
            getParsingFlags(config).invalidEra = input;
          }
        });
        addRegexToken("y", matchUnsigned);
        addRegexToken("yy", matchUnsigned);
        addRegexToken("yyy", matchUnsigned);
        addRegexToken("yyyy", matchUnsigned);
        addRegexToken("yo", matchEraYearOrdinal);
        addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
        addParseToken(["yo"], function(input, array, config, token2) {
          var match;
          if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
          }
          if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
          } else {
            array[YEAR] = parseInt(input, 10);
          }
        });
        function localeEras(m, format2) {
          var i, l, date, eras = this._eras || getLocale("en")._eras;
          for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
              case "string":
                date = hooks(eras[i].since).startOf("day");
                eras[i].since = date.valueOf();
                break;
            }
            switch (typeof eras[i].until) {
              case "undefined":
                eras[i].until = Infinity;
                break;
              case "string":
                date = hooks(eras[i].until).startOf("day").valueOf();
                eras[i].until = date.valueOf();
                break;
            }
          }
          return eras;
        }
        function localeErasParse(eraName, format2, strict) {
          var i, l, eras = this.eras(), name, abbr, narrow;
          eraName = eraName.toUpperCase();
          for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) {
              switch (format2) {
                case "N":
                case "NN":
                case "NNN":
                  if (abbr === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNN":
                  if (name === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNNN":
                  if (narrow === eraName) {
                    return eras[i];
                  }
                  break;
              }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
              return eras[i];
            }
          }
        }
        function localeErasConvertYear(era, year) {
          var dir = era.since <= era.until ? 1 : -1;
          if (year === void 0) {
            return hooks(era.since).year();
          } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
          }
        }
        function getEraName() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].name;
            }
          }
          return "";
        }
        function getEraNarrow() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].narrow;
            }
          }
          return "";
        }
        function getEraAbbr() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].abbr;
            }
          }
          return "";
        }
        function getEraYear() {
          var i, l, dir, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
              return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
            }
          }
          return this.year();
        }
        function erasNameRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNameRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNameRegex : this._erasRegex;
        }
        function erasAbbrRegex(isStrict) {
          if (!hasOwnProp(this, "_erasAbbrRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasAbbrRegex : this._erasRegex;
        }
        function erasNarrowRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNarrowRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNarrowRegex : this._erasRegex;
        }
        function matchEraAbbr(isStrict, locale2) {
          return locale2.erasAbbrRegex(isStrict);
        }
        function matchEraName(isStrict, locale2) {
          return locale2.erasNameRegex(isStrict);
        }
        function matchEraNarrow(isStrict, locale2) {
          return locale2.erasNarrowRegex(isStrict);
        }
        function matchEraYearOrdinal(isStrict, locale2) {
          return locale2._eraYearOrdinalRegex || matchUnsigned;
        }
        function computeErasParse() {
          var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
          }
          this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
          this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
          this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
        }
        addFormatToken(0, ["gg", 2], 0, function() {
          return this.weekYear() % 100;
        });
        addFormatToken(0, ["GG", 2], 0, function() {
          return this.isoWeekYear() % 100;
        });
        function addWeekYearFormatToken(token2, getter) {
          addFormatToken(0, [token2, token2.length], 0, getter);
        }
        addWeekYearFormatToken("gggg", "weekYear");
        addWeekYearFormatToken("ggggg", "weekYear");
        addWeekYearFormatToken("GGGG", "isoWeekYear");
        addWeekYearFormatToken("GGGGG", "isoWeekYear");
        addUnitAlias("weekYear", "gg");
        addUnitAlias("isoWeekYear", "GG");
        addUnitPriority("weekYear", 1);
        addUnitPriority("isoWeekYear", 1);
        addRegexToken("G", matchSigned);
        addRegexToken("g", matchSigned);
        addRegexToken("GG", match1to2, match2);
        addRegexToken("gg", match1to2, match2);
        addRegexToken("GGGG", match1to4, match4);
        addRegexToken("gggg", match1to4, match4);
        addRegexToken("GGGGG", match1to6, match6);
        addRegexToken("ggggg", match1to6, match6);
        addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token2) {
          week[token2.substr(0, 2)] = toInt(input);
        });
        addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
          week[token2] = hooks.parseTwoDigitYear(input);
        });
        function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }
        function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
        }
        function getISOWeeksInISOWeekYear() {
          return weeksInYear(this.isoWeekYear(), 1, 4);
        }
        function getWeeksInYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        }
        function getWeeksInWeekYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
        }
        function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;
          if (input == null) {
            return weekOfYear(this, dow, doy).year;
          } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
              week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
        }
        function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
        }
        addFormatToken("Q", 0, "Qo", "quarter");
        addUnitAlias("quarter", "Q");
        addUnitPriority("quarter", 7);
        addRegexToken("Q", match1);
        addParseToken("Q", function(input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
        });
        function getSetQuarter(input) {
          return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        }
        addFormatToken("D", ["DD", 2], "Do", "date");
        addUnitAlias("date", "D");
        addUnitPriority("date", 9);
        addRegexToken("D", match1to2);
        addRegexToken("DD", match1to2, match2);
        addRegexToken("Do", function(isStrict, locale2) {
          return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
        });
        addParseToken(["D", "DD"], DATE);
        addParseToken("Do", function(input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
        });
        var getSetDayOfMonth = makeGetSet("Date", true);
        addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
        addUnitAlias("dayOfYear", "DDD");
        addUnitPriority("dayOfYear", 4);
        addRegexToken("DDD", match1to3);
        addRegexToken("DDDD", match3);
        addParseToken(["DDD", "DDDD"], function(input, array, config) {
          config._dayOfYear = toInt(input);
        });
        function getSetDayOfYear(input) {
          var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
        }
        addFormatToken("m", ["mm", 2], 0, "minute");
        addUnitAlias("minute", "m");
        addUnitPriority("minute", 14);
        addRegexToken("m", match1to2);
        addRegexToken("mm", match1to2, match2);
        addParseToken(["m", "mm"], MINUTE);
        var getSetMinute = makeGetSet("Minutes", false);
        addFormatToken("s", ["ss", 2], 0, "second");
        addUnitAlias("second", "s");
        addUnitPriority("second", 15);
        addRegexToken("s", match1to2);
        addRegexToken("ss", match1to2, match2);
        addParseToken(["s", "ss"], SECOND);
        var getSetSecond = makeGetSet("Seconds", false);
        addFormatToken("S", 0, 0, function() {
          return ~~(this.millisecond() / 100);
        });
        addFormatToken(0, ["SS", 2], 0, function() {
          return ~~(this.millisecond() / 10);
        });
        addFormatToken(0, ["SSS", 3], 0, "millisecond");
        addFormatToken(0, ["SSSS", 4], 0, function() {
          return this.millisecond() * 10;
        });
        addFormatToken(0, ["SSSSS", 5], 0, function() {
          return this.millisecond() * 100;
        });
        addFormatToken(0, ["SSSSSS", 6], 0, function() {
          return this.millisecond() * 1e3;
        });
        addFormatToken(0, ["SSSSSSS", 7], 0, function() {
          return this.millisecond() * 1e4;
        });
        addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
          return this.millisecond() * 1e5;
        });
        addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
          return this.millisecond() * 1e6;
        });
        addUnitAlias("millisecond", "ms");
        addUnitPriority("millisecond", 16);
        addRegexToken("S", match1to3, match1);
        addRegexToken("SS", match1to3, match2);
        addRegexToken("SSS", match1to3, match3);
        var token, getSetMillisecond;
        for (token = "SSSS"; token.length <= 9; token += "S") {
          addRegexToken(token, matchUnsigned);
        }
        function parseMs(input, array) {
          array[MILLISECOND] = toInt(("0." + input) * 1e3);
        }
        for (token = "S"; token.length <= 9; token += "S") {
          addParseToken(token, parseMs);
        }
        getSetMillisecond = makeGetSet("Milliseconds", false);
        addFormatToken("z", 0, 0, "zoneAbbr");
        addFormatToken("zz", 0, 0, "zoneName");
        function getZoneAbbr() {
          return this._isUTC ? "UTC" : "";
        }
        function getZoneName() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        var proto = Moment.prototype;
        proto.add = add;
        proto.calendar = calendar$1;
        proto.clone = clone;
        proto.diff = diff;
        proto.endOf = endOf;
        proto.format = format;
        proto.from = from;
        proto.fromNow = fromNow;
        proto.to = to;
        proto.toNow = toNow;
        proto.get = stringGet;
        proto.invalidAt = invalidAt;
        proto.isAfter = isAfter;
        proto.isBefore = isBefore;
        proto.isBetween = isBetween;
        proto.isSame = isSame;
        proto.isSameOrAfter = isSameOrAfter;
        proto.isSameOrBefore = isSameOrBefore;
        proto.isValid = isValid$2;
        proto.lang = lang;
        proto.locale = locale;
        proto.localeData = localeData;
        proto.max = prototypeMax;
        proto.min = prototypeMin;
        proto.parsingFlags = parsingFlags;
        proto.set = stringSet;
        proto.startOf = startOf;
        proto.subtract = subtract;
        proto.toArray = toArray;
        proto.toObject = toObject;
        proto.toDate = toDate;
        proto.toISOString = toISOString;
        proto.inspect = inspect;
        if (typeof Symbol !== "undefined" && Symbol.for != null) {
          proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return "Moment<" + this.format() + ">";
          };
        }
        proto.toJSON = toJSON;
        proto.toString = toString;
        proto.unix = unix;
        proto.valueOf = valueOf;
        proto.creationData = creationData;
        proto.eraName = getEraName;
        proto.eraNarrow = getEraNarrow;
        proto.eraAbbr = getEraAbbr;
        proto.eraYear = getEraYear;
        proto.year = getSetYear;
        proto.isLeapYear = getIsLeapYear;
        proto.weekYear = getSetWeekYear;
        proto.isoWeekYear = getSetISOWeekYear;
        proto.quarter = proto.quarters = getSetQuarter;
        proto.month = getSetMonth;
        proto.daysInMonth = getDaysInMonth;
        proto.week = proto.weeks = getSetWeek;
        proto.isoWeek = proto.isoWeeks = getSetISOWeek;
        proto.weeksInYear = getWeeksInYear;
        proto.weeksInWeekYear = getWeeksInWeekYear;
        proto.isoWeeksInYear = getISOWeeksInYear;
        proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
        proto.date = getSetDayOfMonth;
        proto.day = proto.days = getSetDayOfWeek;
        proto.weekday = getSetLocaleDayOfWeek;
        proto.isoWeekday = getSetISODayOfWeek;
        proto.dayOfYear = getSetDayOfYear;
        proto.hour = proto.hours = getSetHour;
        proto.minute = proto.minutes = getSetMinute;
        proto.second = proto.seconds = getSetSecond;
        proto.millisecond = proto.milliseconds = getSetMillisecond;
        proto.utcOffset = getSetOffset;
        proto.utc = setOffsetToUTC;
        proto.local = setOffsetToLocal;
        proto.parseZone = setOffsetToParsedOffset;
        proto.hasAlignedHourOffset = hasAlignedHourOffset;
        proto.isDST = isDaylightSavingTime;
        proto.isLocal = isLocal;
        proto.isUtcOffset = isUtcOffset;
        proto.isUtc = isUtc;
        proto.isUTC = isUtc;
        proto.zoneAbbr = getZoneAbbr;
        proto.zoneName = getZoneName;
        proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
        proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
        proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
        proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
        proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
        function createUnix(input) {
          return createLocal(input * 1e3);
        }
        function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
        }
        function preParsePostFormat(string) {
          return string;
        }
        var proto$1 = Locale.prototype;
        proto$1.calendar = calendar;
        proto$1.longDateFormat = longDateFormat;
        proto$1.invalidDate = invalidDate;
        proto$1.ordinal = ordinal;
        proto$1.preparse = preParsePostFormat;
        proto$1.postformat = preParsePostFormat;
        proto$1.relativeTime = relativeTime;
        proto$1.pastFuture = pastFuture;
        proto$1.set = set;
        proto$1.eras = localeEras;
        proto$1.erasParse = localeErasParse;
        proto$1.erasConvertYear = localeErasConvertYear;
        proto$1.erasAbbrRegex = erasAbbrRegex;
        proto$1.erasNameRegex = erasNameRegex;
        proto$1.erasNarrowRegex = erasNarrowRegex;
        proto$1.months = localeMonths;
        proto$1.monthsShort = localeMonthsShort;
        proto$1.monthsParse = localeMonthsParse;
        proto$1.monthsRegex = monthsRegex;
        proto$1.monthsShortRegex = monthsShortRegex;
        proto$1.week = localeWeek;
        proto$1.firstDayOfYear = localeFirstDayOfYear;
        proto$1.firstDayOfWeek = localeFirstDayOfWeek;
        proto$1.weekdays = localeWeekdays;
        proto$1.weekdaysMin = localeWeekdaysMin;
        proto$1.weekdaysShort = localeWeekdaysShort;
        proto$1.weekdaysParse = localeWeekdaysParse;
        proto$1.weekdaysRegex = weekdaysRegex;
        proto$1.weekdaysShortRegex = weekdaysShortRegex;
        proto$1.weekdaysMinRegex = weekdaysMinRegex;
        proto$1.isPM = localeIsPM;
        proto$1.meridiem = localeMeridiem;
        function get$1(format2, index, field, setter) {
          var locale2 = getLocale(), utc = createUTC().set(setter, index);
          return locale2[field](utc, format2);
        }
        function listMonthsImpl(format2, index, field) {
          if (isNumber(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
          if (index != null) {
            return get$1(format2, index, field, "month");
          }
          var i, out = [];
          for (i = 0; i < 12; i++) {
            out[i] = get$1(format2, i, field, "month");
          }
          return out;
        }
        function listWeekdaysImpl(localeSorted, format2, index, field) {
          if (typeof localeSorted === "boolean") {
            if (isNumber(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          } else {
            format2 = localeSorted;
            index = format2;
            localeSorted = false;
            if (isNumber(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          }
          var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
          if (index != null) {
            return get$1(format2, (index + shift) % 7, field, "day");
          }
          for (i = 0; i < 7; i++) {
            out[i] = get$1(format2, (i + shift) % 7, field, "day");
          }
          return out;
        }
        function listMonths(format2, index) {
          return listMonthsImpl(format2, index, "months");
        }
        function listMonthsShort(format2, index) {
          return listMonthsImpl(format2, index, "monthsShort");
        }
        function listWeekdays(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
        }
        function listWeekdaysShort(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
        }
        function listWeekdaysMin(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
        }
        getSetGlobalLocale("en", {
          eras: [
            {
              since: "0001-01-01",
              until: Infinity,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD"
            },
            {
              since: "0000-12-31",
              until: -Infinity,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC"
            }
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
            return number + output;
          }
        });
        hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
        hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
        var mathAbs = Math.abs;
        function abs() {
          var data = this._data;
          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);
          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);
          return this;
        }
        function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);
          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;
          return duration._bubble();
        }
        function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
        }
        function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
        }
        function absCeil(number) {
          if (number < 0) {
            return Math.floor(number);
          } else {
            return Math.ceil(number);
          }
        }
        function bubble() {
          var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
          if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
            milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
            days2 = 0;
            months2 = 0;
          }
          data.milliseconds = milliseconds2 % 1e3;
          seconds2 = absFloor(milliseconds2 / 1e3);
          data.seconds = seconds2 % 60;
          minutes2 = absFloor(seconds2 / 60);
          data.minutes = minutes2 % 60;
          hours2 = absFloor(minutes2 / 60);
          data.hours = hours2 % 24;
          days2 += absFloor(hours2 / 24);
          monthsFromDays = absFloor(daysToMonths(days2));
          months2 += monthsFromDays;
          days2 -= absCeil(monthsToDays(monthsFromDays));
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          data.days = days2;
          data.months = months2;
          data.years = years2;
          return this;
        }
        function daysToMonths(days2) {
          return days2 * 4800 / 146097;
        }
        function monthsToDays(months2) {
          return months2 * 146097 / 4800;
        }
        function as(units) {
          if (!this.isValid()) {
            return NaN;
          }
          var days2, months2, milliseconds2 = this._milliseconds;
          units = normalizeUnits(units);
          if (units === "month" || units === "quarter" || units === "year") {
            days2 = this._days + milliseconds2 / 864e5;
            months2 = this._months + daysToMonths(days2);
            switch (units) {
              case "month":
                return months2;
              case "quarter":
                return months2 / 3;
              case "year":
                return months2 / 12;
            }
          } else {
            days2 = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
              case "week":
                return days2 / 7 + milliseconds2 / 6048e5;
              case "day":
                return days2 + milliseconds2 / 864e5;
              case "hour":
                return days2 * 24 + milliseconds2 / 36e5;
              case "minute":
                return days2 * 1440 + milliseconds2 / 6e4;
              case "second":
                return days2 * 86400 + milliseconds2 / 1e3;
              case "millisecond":
                return Math.floor(days2 * 864e5) + milliseconds2;
              default:
                throw new Error("Unknown unit " + units);
            }
          }
        }
        function valueOf$1() {
          if (!this.isValid()) {
            return NaN;
          }
          return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
        }
        function makeAs(alias) {
          return function() {
            return this.as(alias);
          };
        }
        var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
        function clone$1() {
          return createDuration(this);
        }
        function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + "s"]() : NaN;
        }
        function makeGetter(name) {
          return function() {
            return this.isValid() ? this._data[name] : NaN;
          };
        }
        var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
        function weeks() {
          return absFloor(this.days() / 7);
        }
        var round = Math.round, thresholds = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          w: null,
          M: 11
        };
        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
          return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
        }
        function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
          var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
          if (thresholds2.w != null) {
            a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
          }
          a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
          a[2] = withoutSuffix;
          a[3] = +posNegDuration > 0;
          a[4] = locale2;
          return substituteTimeAgo.apply(null, a);
        }
        function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === void 0) {
            return round;
          }
          if (typeof roundingFunction === "function") {
            round = roundingFunction;
            return true;
          }
          return false;
        }
        function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === void 0) {
            return false;
          }
          if (limit === void 0) {
            return thresholds[threshold];
          }
          thresholds[threshold] = limit;
          if (threshold === "s") {
            thresholds.ss = limit - 1;
          }
          return true;
        }
        function humanize(argWithSuffix, argThresholds) {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var withSuffix = false, th = thresholds, locale2, output;
          if (typeof argWithSuffix === "object") {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
          }
          if (typeof argWithSuffix === "boolean") {
            withSuffix = argWithSuffix;
          }
          if (typeof argThresholds === "object") {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
              th.ss = argThresholds.s - 1;
            }
          }
          locale2 = this.localeData();
          output = relativeTime$1(this, !withSuffix, th, locale2);
          if (withSuffix) {
            output = locale2.pastFuture(+this, output);
          }
          return locale2.postformat(output);
        }
        var abs$1 = Math.abs;
        function sign(x) {
          return (x > 0) - (x < 0) || +x;
        }
        function toISOString$1() {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
          if (!total) {
            return "P0D";
          }
          minutes2 = absFloor(seconds2 / 60);
          hours2 = absFloor(minutes2 / 60);
          seconds2 %= 60;
          minutes2 %= 60;
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
          totalSign = total < 0 ? "-" : "";
          ymSign = sign(this._months) !== sign(total) ? "-" : "";
          daysSign = sign(this._days) !== sign(total) ? "-" : "";
          hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
          return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
        }
        var proto$2 = Duration.prototype;
        proto$2.isValid = isValid$1;
        proto$2.abs = abs;
        proto$2.add = add$1;
        proto$2.subtract = subtract$1;
        proto$2.as = as;
        proto$2.asMilliseconds = asMilliseconds;
        proto$2.asSeconds = asSeconds;
        proto$2.asMinutes = asMinutes;
        proto$2.asHours = asHours;
        proto$2.asDays = asDays;
        proto$2.asWeeks = asWeeks;
        proto$2.asMonths = asMonths;
        proto$2.asQuarters = asQuarters;
        proto$2.asYears = asYears;
        proto$2.valueOf = valueOf$1;
        proto$2._bubble = bubble;
        proto$2.clone = clone$1;
        proto$2.get = get$2;
        proto$2.milliseconds = milliseconds;
        proto$2.seconds = seconds;
        proto$2.minutes = minutes;
        proto$2.hours = hours;
        proto$2.days = days;
        proto$2.weeks = weeks;
        proto$2.months = months;
        proto$2.years = years;
        proto$2.humanize = humanize;
        proto$2.toISOString = toISOString$1;
        proto$2.toString = toISOString$1;
        proto$2.toJSON = toISOString$1;
        proto$2.locale = locale;
        proto$2.localeData = localeData;
        proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
        proto$2.lang = lang;
        addFormatToken("X", 0, 0, "unix");
        addFormatToken("x", 0, 0, "valueOf");
        addRegexToken("x", matchSigned);
        addRegexToken("X", matchTimestamp);
        addParseToken("X", function(input, array, config) {
          config._d = new Date(parseFloat(input) * 1e3);
        });
        addParseToken("x", function(input, array, config) {
          config._d = new Date(toInt(input));
        });
        hooks.version = "2.29.1";
        setHookCallback(createLocal);
        hooks.fn = proto;
        hooks.min = min;
        hooks.max = max;
        hooks.now = now;
        hooks.utc = createUTC;
        hooks.unix = createUnix;
        hooks.months = listMonths;
        hooks.isDate = isDate;
        hooks.locale = getSetGlobalLocale;
        hooks.invalid = createInvalid;
        hooks.duration = createDuration;
        hooks.isMoment = isMoment;
        hooks.weekdays = listWeekdays;
        hooks.parseZone = createInZone;
        hooks.localeData = getLocale;
        hooks.isDuration = isDuration;
        hooks.monthsShort = listMonthsShort;
        hooks.weekdaysMin = listWeekdaysMin;
        hooks.defineLocale = defineLocale;
        hooks.updateLocale = updateLocale;
        hooks.locales = listLocales;
        hooks.weekdaysShort = listWeekdaysShort;
        hooks.normalizeUnits = normalizeUnits;
        hooks.relativeTimeRounding = getSetRelativeTimeRounding;
        hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
        hooks.calendarFormat = getCalendarFormat;
        hooks.prototype = proto;
        hooks.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "GGGG-[W]WW",
          MONTH: "YYYY-MM"
        };
        return hooks;
      });
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.js
  var require_ERC20_json = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = {
        "abi": [
          { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
          { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162000ded38038062000ded8339810160408190526200003491620001c1565b81516200004990600390602085019062000068565b5080516200005f90600490602084019062000068565b5050506200027b565b828054620000769062000228565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c62000265565b604051601f8301601f19908116603f0116810190828211818310171562000167576200016762000265565b8160405283815260209250868385880101111562000183578485fd5b8491505b83821015620001a6578582018301518183018401529082019062000187565b83821115620001b757848385830101525b9695505050505050565b60008060408385031215620001d4578182fd5b82516001600160401b0380821115620001eb578384fd5b620001f9868387016200010e565b935060208501519150808211156200020f578283fd5b506200021e858286016200010e565b9150509250929050565b600181811c908216806200023d57607f821691505b602082108114156200025f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610b62806200028b6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610194578063a9059cbb146101a7578063dd62ed3e146101ba57600080fd5b8063395093511461014357806370a082311461015657806395d89b411461018c57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610121578063313ce5671461013457600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d6610200565b6040516100e39190610a2a565b60405180910390f35b6100ff6100fa366004610a01565b610292565b60405190151581526020016100e3565b6002545b6040519081526020016100e3565b6100ff61012f3660046109c6565b6102aa565b604051601281526020016100e3565b6100ff610151366004610a01565b6102ce565b610113610164366004610973565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100d661031a565b6100ff6101a2366004610a01565b610329565b6100ff6101b5366004610a01565b6103ff565b6101136101c8366004610994565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020f90610ad8565b80601f016020809104026020016040519081016040528092919081815260200182805461023b90610ad8565b80156102885780601f1061025d57610100808354040283529160200191610288565b820191906000526020600020905b81548152906001019060200180831161026b57829003601f168201915b5050505050905090565b6000336102a081858561040d565b5060019392505050565b6000336102b88582856105c0565b6102c3858585610697565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906102a09082908690610315908790610a9b565b61040d565b60606004805461020f90610ad8565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156103f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102c3828686840361040d565b6000336102a0818585610697565b73ffffffffffffffffffffffffffffffffffffffff83166104af576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff8216610552576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106915781811015610684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103e9565b610691848484840361040d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff831661073a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff82166107dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082208585039055918516815290812080548492906108d7908490610a9b565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161093d91815260200190565b60405180910390a3610691565b803573ffffffffffffffffffffffffffffffffffffffff8116811461096e57600080fd5b919050565b600060208284031215610984578081fd5b61098d8261094a565b9392505050565b600080604083850312156109a6578081fd5b6109af8361094a565b91506109bd6020840161094a565b90509250929050565b6000806000606084860312156109da578081fd5b6109e38461094a565b92506109f16020850161094a565b9150604084013590509250925092565b60008060408385031215610a13578182fd5b610a1c8361094a565b946020939093013593505050565b6000602080835283518082850152825b81811015610a5657858101830151858201604001528201610a3a565b81811115610a675783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115610ad3577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b600181811c90821680610aec57607f821691505b60208210811415610b26577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea26469706673582212207e1188179a2ec2d71a830e14508575abf5fda1df1955826b145b51f575550cdc64736f6c63430008040033"
      };
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/@openzeppelin/contracts/token/ERC20/ERC20.js
  var require_ERC20 = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/@openzeppelin/contracts/token/ERC20/ERC20.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ERC20 = void 0;
      var eth_wallet_1 = __require("@ijstech/eth-wallet");
      var ERC20_json_1 = __importDefault(require_ERC20_json());
      var ERC20 = class extends eth_wallet_1.Contract {
        constructor(wallet, address) {
          super(wallet, address, ERC20_json_1.default.abi, ERC20_json_1.default.bytecode);
          this.assign();
        }
        deploy(params) {
          return this.__deploy([params.name, params.symbol]);
        }
        parseApprovalEvent(receipt) {
          return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
          let result = event.data;
          return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
          };
        }
        parseTransferEvent(receipt) {
          return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
          let result = event.data;
          return {
            from: result.from,
            to: result.to,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
          };
        }
        assign() {
          let allowanceParams = (params) => [params.owner, params.spender];
          let allowance_call = async (params) => {
            let result = await this.call("allowance", allowanceParams(params));
            return new eth_wallet_1.BigNumber(result);
          };
          this.allowance = allowance_call;
          let balanceOf_call = async (account) => {
            let result = await this.call("balanceOf", [account]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.balanceOf = balanceOf_call;
          let decimals_call = async () => {
            let result = await this.call("decimals");
            return new eth_wallet_1.BigNumber(result);
          };
          this.decimals = decimals_call;
          let name_call = async () => {
            let result = await this.call("name");
            return result;
          };
          this.name = name_call;
          let symbol_call = async () => {
            let result = await this.call("symbol");
            return result;
          };
          this.symbol = symbol_call;
          let totalSupply_call = async () => {
            let result = await this.call("totalSupply");
            return new eth_wallet_1.BigNumber(result);
          };
          this.totalSupply = totalSupply_call;
          let approveParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.amount)];
          let approve_send = async (params) => {
            let result = await this.send("approve", approveParams(params));
            return result;
          };
          let approve_call = async (params) => {
            let result = await this.call("approve", approveParams(params));
            return result;
          };
          this.approve = Object.assign(approve_send, {
            call: approve_call
          });
          let decreaseAllowanceParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.subtractedValue)];
          let decreaseAllowance_send = async (params) => {
            let result = await this.send("decreaseAllowance", decreaseAllowanceParams(params));
            return result;
          };
          let decreaseAllowance_call = async (params) => {
            let result = await this.call("decreaseAllowance", decreaseAllowanceParams(params));
            return result;
          };
          this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call: decreaseAllowance_call
          });
          let increaseAllowanceParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.addedValue)];
          let increaseAllowance_send = async (params) => {
            let result = await this.send("increaseAllowance", increaseAllowanceParams(params));
            return result;
          };
          let increaseAllowance_call = async (params) => {
            let result = await this.call("increaseAllowance", increaseAllowanceParams(params));
            return result;
          };
          this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call: increaseAllowance_call
          });
          let transferParams = (params) => [params.to, eth_wallet_1.Utils.toString(params.amount)];
          let transfer_send = async (params) => {
            let result = await this.send("transfer", transferParams(params));
            return result;
          };
          let transfer_call = async (params) => {
            let result = await this.call("transfer", transferParams(params));
            return result;
          };
          this.transfer = Object.assign(transfer_send, {
            call: transfer_call
          });
          let transferFromParams = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.amount)];
          let transferFrom_send = async (params) => {
            let result = await this.send("transferFrom", transferFromParams(params));
            return result;
          };
          let transferFrom_call = async (params) => {
            let result = await this.call("transferFrom", transferFromParams(params));
            return result;
          };
          this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
          });
        }
      };
      exports.ERC20 = ERC20;
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.json.js
  var require_ERC20PresetMinterPauser_json = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.json.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = {
        "abi": [
          { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
          { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "MINTER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "PAUSER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b506040516200263b3803806200263b83398101604081905262000034916200039b565b8151829082906200004d90600590602085019062000242565b5080516200006390600690602084019062000242565b50506007805460ff19169055506200007d600033620000dd565b620000a97f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000dd565b620000d57f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000dd565b505062000455565b620000e98282620000ed565b5050565b6200010482826200013060201b62000aa41760201c565b60008281526001602090815260409091206200012b91839062000b94620001d0821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000e9576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200018c3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001e7836001600160a01b038416620001f0565b90505b92915050565b60008181526001830160205260408120546200023957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001ea565b506000620001ea565b828054620002509062000402565b90600052602060002090601f016020900481019282620002745760008555620002bf565b82601f106200028f57805160ff1916838001178555620002bf565b82800160010185558215620002bf579182015b82811115620002bf578251825591602001919060010190620002a2565b50620002cd929150620002d1565b5090565b5b80821115620002cd5760008155600101620002d2565b600082601f830112620002f9578081fd5b81516001600160401b03808211156200031657620003166200043f565b604051601f8301601f19908116603f011681019082821181831017156200034157620003416200043f565b816040528381526020925086838588010111156200035d578485fd5b8491505b8382101562000380578582018301518183018401529082019062000361565b838211156200039157848385830101525b9695505050505050565b60008060408385031215620003ae578182fd5b82516001600160401b0380821115620003c5578384fd5b620003d386838701620002e8565b93506020850151915080821115620003e9578283fd5b50620003f885828601620002e8565b9150509250929050565b600181811c908216806200041757607f821691505b602082108114156200043957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6121d680620004656000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d5391393146103fa578063d547741f14610421578063dd62ed3e14610434578063e63ab1e91461047a57600080fd5b8063a457c2d7146103c1578063a9059cbb146103d4578063ca15c873146103e757600080fd5b80639010d07c116100d35780639010d07c1461033557806391d148541461036d57806395d89b41146103b1578063a217fddf146103b957600080fd5b806370a08231146102e457806379cc67901461031a5780638456cb591461032d57600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102ab57806340c10f19146102b357806342966c68146102c65780635c975abb146102d957600080fd5b8063313ce5671461027657806336568abe14610285578063395093511461029857600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d7366004611f3e565b6104a1565b60405190151581526020015b60405180910390f35b6101f96104fd565b6040516101e89190611fff565b6101dc610214366004611eba565b61058f565b6004545b6040519081526020016101e8565b6101dc610239366004611e7f565b6105a7565b61021d61024c366004611ee3565b60009081526020819052604090206001015490565b61027461026f366004611efb565b6105cb565b005b604051601281526020016101e8565b610274610293366004611efb565b6105f6565b6101dc6102a6366004611eba565b6106ae565b6102746106fa565b6102746102c1366004611eba565b6107ba565b6102746102d4366004611ee3565b61087a565b60075460ff166101dc565b61021d6102f2366004611e33565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b610274610328366004611eba565b610887565b61027461089c565b610348610343366004611f1d565b61095a565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101e8565b6101dc61037b366004611efb565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6101f9610979565b61021d600081565b6101dc6103cf366004611eba565b610988565b6101dc6103e2366004611eba565b610a59565b61021d6103f5366004611ee3565b610a67565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61027461042f366004611efb565b610a7e565b61021d610442366004611e4d565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f5a05180f0000000000000000000000000000000000000000000000000000000014806104f757506104f782610bb6565b92915050565b60606005805461050c9061211d565b80601f01602080910402602001604051908101604052809291908181526020018280546105389061211d565b80156105855780601f1061055a57610100808354040283529160200191610585565b820191906000526020600020905b81548152906001019060200180831161056857829003601f168201915b5050505050905090565b60003361059d818585610c4d565b5060019392505050565b6000336105b5858285610e00565b6105c0858585610ed7565b506001949350505050565b6000828152602081905260409020600101546105e78133611195565b6105f18383611265565b505050565b73ffffffffffffffffffffffffffffffffffffffff811633146106a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6106aa8282611287565b5050565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061059d90829086906106f5908790612050565b610c4d565b6107247f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361037b565b6107b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e7061757365000000000000006064820152608401610697565b6107b86112a9565b565b6107e47f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361037b565b610870576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e74000000000000000000006064820152608401610697565b6106aa828261138a565b61088433826114b6565b50565b610892823383610e00565b6106aa82826114b6565b6108c67f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361037b565b610952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f2070617573650000000000000000006064820152608401610697565b6107b86116af565b6000828152600160205260408120610972908361176f565b9392505050565b60606006805461050c9061211d565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610a4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610697565b6105c08286868403610c4d565b60003361059d818585610ed7565b60008181526001602052604081206104f79061177b565b600082815260208190526040902060010154610a9a8133611195565b6105f18383611287565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166106aa5760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610b363390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006109728373ffffffffffffffffffffffffffffffffffffffff8416611785565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806104f757507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146104f7565b73ffffffffffffffffffffffffffffffffffffffff8316610cef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610697565b73ffffffffffffffffffffffffffffffffffffffff8216610d92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610697565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600360209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ed15781811015610ec4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610697565b610ed18484848403610c4d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610697565b73ffffffffffffffffffffffffffffffffffffffff821661101d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610697565b6110288383836117d4565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040902054818110156110de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610697565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260026020526040808220858503905591851681529081208054849290611122908490612050565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161118891815260200190565b60405180910390a3610ed1565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166106aa576111eb8173ffffffffffffffffffffffffffffffffffffffff1660146117df565b6111f68360206117df565b604051602001611207929190611f7e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a000000000000000000000000000000000000000000000000000000000825261069791600401611fff565b61126f8282610aa4565b60008281526001602052604090206105f19082610b94565b6112918282611ae5565b60008281526001602052604090206105f19082611b9c565b60075460ff16611315576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610697565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b73ffffffffffffffffffffffffffffffffffffffff8216611407576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610697565b611413600083836117d4565b80600460008282546114259190612050565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600260205260408120805483929061145f908490612050565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8216611559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610697565b611565826000836117d4565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600260205260409020548181101561161b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610697565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604081208383039055600480548492906116579084906120a5565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff161561171c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610697565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113603390565b60006109728383611bbe565b60006104f7825490565b60008181526001830160205260408120546117cc575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104f7565b5060006104f7565b6105f1838383611c0f565b606060006117ee836002612068565b6117f9906002612050565b67ffffffffffffffff811115611838577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611862576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106118c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061194a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611986846002612068565b611991906001612050565b90505b6001811115611a7c577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106119f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b828281518110611a36577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611a75816120e8565b9050611994565b508315610972576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610697565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156106aa5760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006109728373ffffffffffffffffffffffffffffffffffffffff8416611ca2565b6000826000018281548110611bfc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b60075460ff16156105f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c6520706175736564000000000000000000000000000000000000000000006064820152608401610697565b60008181526001830160205260408120548015611e00576000611cc66001836120a5565b8554909150600090611cda906001906120a5565b9050818114611d8d576000866000018281548110611d21577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080876000018481548110611d6b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611dc5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104f7565b60009150506104f7565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e2e57600080fd5b919050565b600060208284031215611e44578081fd5b61097282611e0a565b60008060408385031215611e5f578081fd5b611e6883611e0a565b9150611e7660208401611e0a565b90509250929050565b600080600060608486031215611e93578081fd5b611e9c84611e0a565b9250611eaa60208501611e0a565b9150604084013590509250925092565b60008060408385031215611ecc578182fd5b611ed583611e0a565b946020939093013593505050565b600060208284031215611ef4578081fd5b5035919050565b60008060408385031215611f0d578182fd5b82359150611e7660208401611e0a565b60008060408385031215611f2f578182fd5b50508035926020909101359150565b600060208284031215611f4f578081fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610972578182fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611fb68160178501602088016120bc565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611ff38160288401602088016120bc565b01602801949350505050565b602081526000825180602084015261201e8160408501602087016120bc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000821982111561206357612063612171565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156120a0576120a0612171565b500290565b6000828210156120b7576120b7612171565b500390565b60005b838110156120d75781810151838201526020016120bf565b83811115610ed15750506000910152565b6000816120f7576120f7612171565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600181811c9082168061213157607f821691505b6020821081141561216b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212202544bd98fabb7345b147e14e1e64ec5931c26b43e7424f280819c377ef934e0464736f6c63430008040033"
      };
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.js
  var require_ERC20PresetMinterPauser = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ERC20PresetMinterPauser = void 0;
      var eth_wallet_1 = __require("@ijstech/eth-wallet");
      var ERC20PresetMinterPauser_json_1 = __importDefault(require_ERC20PresetMinterPauser_json());
      var ERC20PresetMinterPauser = class extends eth_wallet_1.Contract {
        constructor(wallet, address) {
          super(wallet, address, ERC20PresetMinterPauser_json_1.default.abi, ERC20PresetMinterPauser_json_1.default.bytecode);
          this.assign();
        }
        deploy(params) {
          return this.__deploy([params.name, params.symbol]);
        }
        parseApprovalEvent(receipt) {
          return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
          let result = event.data;
          return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
          };
        }
        parsePausedEvent(receipt) {
          return this.parseEvents(receipt, "Paused").map((e) => this.decodePausedEvent(e));
        }
        decodePausedEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            _event: event
          };
        }
        parseRoleAdminChangedEvent(receipt) {
          return this.parseEvents(receipt, "RoleAdminChanged").map((e) => this.decodeRoleAdminChangedEvent(e));
        }
        decodeRoleAdminChangedEvent(event) {
          let result = event.data;
          return {
            role: result.role,
            previousAdminRole: result.previousAdminRole,
            newAdminRole: result.newAdminRole,
            _event: event
          };
        }
        parseRoleGrantedEvent(receipt) {
          return this.parseEvents(receipt, "RoleGranted").map((e) => this.decodeRoleGrantedEvent(e));
        }
        decodeRoleGrantedEvent(event) {
          let result = event.data;
          return {
            role: result.role,
            account: result.account,
            sender: result.sender,
            _event: event
          };
        }
        parseRoleRevokedEvent(receipt) {
          return this.parseEvents(receipt, "RoleRevoked").map((e) => this.decodeRoleRevokedEvent(e));
        }
        decodeRoleRevokedEvent(event) {
          let result = event.data;
          return {
            role: result.role,
            account: result.account,
            sender: result.sender,
            _event: event
          };
        }
        parseTransferEvent(receipt) {
          return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
          let result = event.data;
          return {
            from: result.from,
            to: result.to,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
          };
        }
        parseUnpausedEvent(receipt) {
          return this.parseEvents(receipt, "Unpaused").map((e) => this.decodeUnpausedEvent(e));
        }
        decodeUnpausedEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            _event: event
          };
        }
        assign() {
          let DEFAULT_ADMIN_ROLE_call = async () => {
            let result = await this.call("DEFAULT_ADMIN_ROLE");
            return result;
          };
          this.DEFAULT_ADMIN_ROLE = DEFAULT_ADMIN_ROLE_call;
          let MINTER_ROLE_call = async () => {
            let result = await this.call("MINTER_ROLE");
            return result;
          };
          this.MINTER_ROLE = MINTER_ROLE_call;
          let PAUSER_ROLE_call = async () => {
            let result = await this.call("PAUSER_ROLE");
            return result;
          };
          this.PAUSER_ROLE = PAUSER_ROLE_call;
          let allowanceParams = (params) => [params.owner, params.spender];
          let allowance_call = async (params) => {
            let result = await this.call("allowance", allowanceParams(params));
            return new eth_wallet_1.BigNumber(result);
          };
          this.allowance = allowance_call;
          let balanceOf_call = async (account) => {
            let result = await this.call("balanceOf", [account]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.balanceOf = balanceOf_call;
          let decimals_call = async () => {
            let result = await this.call("decimals");
            return new eth_wallet_1.BigNumber(result);
          };
          this.decimals = decimals_call;
          let getRoleAdmin_call = async (role) => {
            let result = await this.call("getRoleAdmin", [eth_wallet_1.Utils.stringToBytes32(role)]);
            return result;
          };
          this.getRoleAdmin = getRoleAdmin_call;
          let getRoleMemberParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.role), eth_wallet_1.Utils.toString(params.index)];
          let getRoleMember_call = async (params) => {
            let result = await this.call("getRoleMember", getRoleMemberParams(params));
            return result;
          };
          this.getRoleMember = getRoleMember_call;
          let getRoleMemberCount_call = async (role) => {
            let result = await this.call("getRoleMemberCount", [eth_wallet_1.Utils.stringToBytes32(role)]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.getRoleMemberCount = getRoleMemberCount_call;
          let hasRoleParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.role), params.account];
          let hasRole_call = async (params) => {
            let result = await this.call("hasRole", hasRoleParams(params));
            return result;
          };
          this.hasRole = hasRole_call;
          let name_call = async () => {
            let result = await this.call("name");
            return result;
          };
          this.name = name_call;
          let paused_call = async () => {
            let result = await this.call("paused");
            return result;
          };
          this.paused = paused_call;
          let supportsInterface_call = async (interfaceId) => {
            let result = await this.call("supportsInterface", [interfaceId]);
            return result;
          };
          this.supportsInterface = supportsInterface_call;
          let symbol_call = async () => {
            let result = await this.call("symbol");
            return result;
          };
          this.symbol = symbol_call;
          let totalSupply_call = async () => {
            let result = await this.call("totalSupply");
            return new eth_wallet_1.BigNumber(result);
          };
          this.totalSupply = totalSupply_call;
          let approveParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.amount)];
          let approve_send = async (params) => {
            let result = await this.send("approve", approveParams(params));
            return result;
          };
          let approve_call = async (params) => {
            let result = await this.call("approve", approveParams(params));
            return result;
          };
          this.approve = Object.assign(approve_send, {
            call: approve_call
          });
          let burn_send = async (amount) => {
            let result = await this.send("burn", [eth_wallet_1.Utils.toString(amount)]);
            return result;
          };
          let burn_call = async (amount) => {
            let result = await this.call("burn", [eth_wallet_1.Utils.toString(amount)]);
            return;
          };
          this.burn = Object.assign(burn_send, {
            call: burn_call
          });
          let burnFromParams = (params) => [params.account, eth_wallet_1.Utils.toString(params.amount)];
          let burnFrom_send = async (params) => {
            let result = await this.send("burnFrom", burnFromParams(params));
            return result;
          };
          let burnFrom_call = async (params) => {
            let result = await this.call("burnFrom", burnFromParams(params));
            return;
          };
          this.burnFrom = Object.assign(burnFrom_send, {
            call: burnFrom_call
          });
          let decreaseAllowanceParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.subtractedValue)];
          let decreaseAllowance_send = async (params) => {
            let result = await this.send("decreaseAllowance", decreaseAllowanceParams(params));
            return result;
          };
          let decreaseAllowance_call = async (params) => {
            let result = await this.call("decreaseAllowance", decreaseAllowanceParams(params));
            return result;
          };
          this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call: decreaseAllowance_call
          });
          let grantRoleParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.role), params.account];
          let grantRole_send = async (params) => {
            let result = await this.send("grantRole", grantRoleParams(params));
            return result;
          };
          let grantRole_call = async (params) => {
            let result = await this.call("grantRole", grantRoleParams(params));
            return;
          };
          this.grantRole = Object.assign(grantRole_send, {
            call: grantRole_call
          });
          let increaseAllowanceParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.addedValue)];
          let increaseAllowance_send = async (params) => {
            let result = await this.send("increaseAllowance", increaseAllowanceParams(params));
            return result;
          };
          let increaseAllowance_call = async (params) => {
            let result = await this.call("increaseAllowance", increaseAllowanceParams(params));
            return result;
          };
          this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call: increaseAllowance_call
          });
          let mintParams = (params) => [params.to, eth_wallet_1.Utils.toString(params.amount)];
          let mint_send = async (params) => {
            let result = await this.send("mint", mintParams(params));
            return result;
          };
          let mint_call = async (params) => {
            let result = await this.call("mint", mintParams(params));
            return;
          };
          this.mint = Object.assign(mint_send, {
            call: mint_call
          });
          let pause_send = async () => {
            let result = await this.send("pause");
            return result;
          };
          let pause_call = async () => {
            let result = await this.call("pause");
            return;
          };
          this.pause = Object.assign(pause_send, {
            call: pause_call
          });
          let renounceRoleParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.role), params.account];
          let renounceRole_send = async (params) => {
            let result = await this.send("renounceRole", renounceRoleParams(params));
            return result;
          };
          let renounceRole_call = async (params) => {
            let result = await this.call("renounceRole", renounceRoleParams(params));
            return;
          };
          this.renounceRole = Object.assign(renounceRole_send, {
            call: renounceRole_call
          });
          let revokeRoleParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.role), params.account];
          let revokeRole_send = async (params) => {
            let result = await this.send("revokeRole", revokeRoleParams(params));
            return result;
          };
          let revokeRole_call = async (params) => {
            let result = await this.call("revokeRole", revokeRoleParams(params));
            return;
          };
          this.revokeRole = Object.assign(revokeRole_send, {
            call: revokeRole_call
          });
          let transferParams = (params) => [params.to, eth_wallet_1.Utils.toString(params.amount)];
          let transfer_send = async (params) => {
            let result = await this.send("transfer", transferParams(params));
            return result;
          };
          let transfer_call = async (params) => {
            let result = await this.call("transfer", transferParams(params));
            return result;
          };
          this.transfer = Object.assign(transfer_send, {
            call: transfer_call
          });
          let transferFromParams = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.amount)];
          let transferFrom_send = async (params) => {
            let result = await this.send("transferFrom", transferFromParams(params));
            return result;
          };
          let transferFrom_call = async (params) => {
            let result = await this.call("transferFrom", transferFromParams(params));
            return result;
          };
          this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
          });
          let unpause_send = async () => {
            let result = await this.send("unpause");
            return result;
          };
          let unpause_call = async () => {
            let result = await this.call("unpause");
            return;
          };
          this.unpause = Object.assign(unpause_send, {
            call: unpause_call
          });
        }
      };
      exports.ERC20PresetMinterPauser = ERC20PresetMinterPauser;
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/Rewards.json.js
  var require_Rewards_json = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/Rewards.json.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = {
        "abi": [
          { "inputs": [{ "internalType": "contract TimeIsMoneyI", "name": "timeIsMoney_", "type": "address" }, { "internalType": "contract IERC20", "name": "token_", "type": "address" }, { "internalType": "uint256", "name": "multiplier_", "type": "uint256" }, { "internalType": "uint256", "name": "initialReward_", "type": "uint256" }, { "internalType": "uint256", "name": "vestingPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "claimDeadline_", "type": "uint256" }, { "internalType": "address", "name": "admin_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
          { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "AdminDrain", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalSoFar", "type": "uint256" }], "name": "Claim", "type": "event" },
          { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "claimDeadline", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "claimFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "claimSoFar", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "initialReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "multiplier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "putFund", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "reward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "rewardForAccount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "takeUnclaimed", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "timeIsMoney", "outputs": [{ "internalType": "contract TimeIsMoneyI", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "unclaimed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "unclaimedForAccount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "vestingPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "6101806040523480156200001257600080fd5b5060405162001728380380620017288339810160408190526200003591620001ab565b6001600055670de0b6b3a7640000841115620000985760405162461bcd60e51b815260206004820152601860248201527f496e697469616c2072657761726420746f6f206c61726765000000000000000060448201526064015b60405180910390fd5b6001600160a01b038116620000f05760405162461bcd60e51b815260206004820152601560248201527f496e76616c69642061646d696e2061646472657373000000000000000000000060448201526064016200008f565b6001600160a01b038616620001485760405162461bcd60e51b815260206004820152601460248201527f496e76616c69642072657761726420746f6b656e00000000000000000000000060448201526064016200008f565b6001600160601b0319606087811b821660805288901b1660a05260c085905260e08490526200018084670de0b6b3a764000062000226565b61010052610120929092526101405260601b6001600160601b03191661016052506200026392505050565b600080600080600080600060e0888a031215620001c6578283fd5b8751620001d3816200024a565b6020890151909750620001e6816200024a565b8096505060408801519450606088015193506080880151925060a0880151915060c088015162000216816200024a565b8091505092959891949750929550565b6000828210156200024557634e487b7160e01b81526011600452602481fd5b500390565b6001600160a01b03811681146200026057600080fd5b50565b60805160601c60a05160601c60c05160e0516101005161012051610140516101605160601c6113e6620003426000396000818161028b015281816102de0152818161056201526107fb0152600081816101ad015281816105ed01526106750152600081816101e401528181610b080152610b60015260008181610b320152610b8501526000818161021e0152610ad701526000818161011f0152610bd0015260008181610161015281816109840152610c560152600081816102ba0152818161039a0152818161072e015281816107d90152610dc901526113e66000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063828fd19d11610097578063eca679c311610066578063eca679c314610273578063f851a44014610286578063fbad76cb146102ad578063fc0c546a146102b557600080fd5b8063828fd19d14610206578063abee967c14610219578063ddeae03314610240578063e073bb4f1461025357600080fd5b80633ba86c44116100d35780633ba86c44146101a85780634e71d92d146101cf578063669416b8146101d75780637313ee5a146101df57600080fd5b80630d890369146101055780631b3ed7221461011a578063228cb733146101545780632b23c16e1461015c575b600080fd5b6101186101133660046111e2565b6102dc565b005b6101417f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6101416103c6565b6101837f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161014b565b6101417f000000000000000000000000000000000000000000000000000000000000000081565b6101186103d6565b610141610458565b6101417f000000000000000000000000000000000000000000000000000000000000000081565b6101416102143660046111c8565b61047d565b6101417f000000000000000000000000000000000000000000000000000000000000000081565b61011861024e3660046111c8565b61048e565b6101416102613660046111c8565b60016020526000908152604090205481565b6101416102813660046111c8565b610511565b6101837f000000000000000000000000000000000000000000000000000000000000000081565b61011861054a565b6101837f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163314610380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f742066726f6d2061646d696e00000000000000000000000000000000000060448201526064015b60405180910390fd5b6103c273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016833084610856565b5050565b60006103d133610938565b905090565b60026000541415610443576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610377565b600260005561045133610cef565b6001600055565b33600081815260016020526040812054909161047390610938565b6103d1919061133e565b600061048882610938565b92915050565b600260005414156104fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610377565b600260005561050981610cef565b506001600055565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604081205461054083610938565b610488919061133e565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146105e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f6e6c79207468652061646d696e2063616e20646f20746869732100000000006044820152606401610377565b60007f000000000000000000000000000000000000000000000000000000000000000011610673576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4e6f20636c61696d20646561646c696e65207365742e000000000000000000006044820152606401610377565b7f00000000000000000000000000000000000000000000000000000000000000004210156106fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4974277320746f6f206561726c7920746f20646f20746869732e0000000000006044820152606401610377565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b15801561078557600080fd5b505afa158015610799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bd919061122b565b905061082073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000083610e46565b6040518181527f146bbc9b753597a27f70129b547228bac3f0a1fd36ee128a15367d259ab427149060200160405180910390a150565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526109329085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610ea1565b50505050565b6040517f34265c4800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091829182917f0000000000000000000000000000000000000000000000000000000000000000909116906334265c489060240160206040518083038186803b1580156109c857600080fd5b505afa1580156109dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a00919061122b565b905060008111610a6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f596f7520617265206e6f74206120706172746974696f6e65722e0000000000006044820152606401610377565b804211610ad5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f5265776172647320686173206e6f742073746172746564207965742e000000006044820152606401610377565b7f000000000000000000000000000000000000000000000000000000000000000091506000610b04824261133e565b90507f00000000000000000000000000000000000000000000000000000000000000008110610b5e57610b577f0000000000000000000000000000000000000000000000000000000000000000846112b0565b9250610bc0565b7f0000000000000000000000000000000000000000000000000000000000000000610ba9827f0000000000000000000000000000000000000000000000000000000000000000611301565b610bb391906112c8565b610bbd90846112b0565b92505b6000670de0b6b3a7640000610bf57f000000000000000000000000000000000000000000000000000000000000000086611301565b610bff91906112c8565b6040517f57344e6f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152919250600091670de0b6b3a76400009184917f000000000000000000000000000000000000000000000000000000000000000016906357344e6f9060240160206040518083038186803b158015610c9857600080fd5b505afa158015610cac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd0919061122b565b610cda9190611301565b610ce491906112c8565b979650505050505050565b6000610cfa82610938565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604081205491925090610d2e908361133e565b905060008111610d9a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f596f752068617665206e6f7468696e6720746f20636c61696d210000000000006044820152606401610377565b73ffffffffffffffffffffffffffffffffffffffff8084166000908152600160205260409020839055610df0907f0000000000000000000000000000000000000000000000000000000000000000168483610e46565b604080518281526020810184905273ffffffffffffffffffffffffffffffffffffffff8516917f34fcbac0073d7c3d388e51312faf357774904998eeb8fca628b9e6f65ee1cbf7910160405180910390a2505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610e9c9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016108b0565b505050565b6000610f03826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610fad9092919063ffffffff16565b805190915015610e9c5780806020019051810190610f21919061120b565b610e9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610377565b6060610fbc8484600085610fc6565b90505b9392505050565b606082471015611058576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610377565b73ffffffffffffffffffffffffffffffffffffffff85163b6110d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610377565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110ff9190611243565b60006040518083038185875af1925050503d806000811461113c576040519150601f19603f3d011682016040523d82523d6000602084013e611141565b606091505b5091509150610ce48282866060831561115b575081610fbf565b82511561116b5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610377919061125f565b803573ffffffffffffffffffffffffffffffffffffffff811681146111c357600080fd5b919050565b6000602082840312156111d9578081fd5b610fbf8261119f565b600080604083850312156111f4578081fd5b6111fd8361119f565b946020939093013593505050565b60006020828403121561121c578081fd5b81518015158114610fbf578182fd5b60006020828403121561123c578081fd5b5051919050565b60008251611255818460208701611355565b9190910192915050565b602081526000825180602084015261127e816040850160208701611355565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082198211156112c3576112c3611381565b500190565b6000826112fc577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561133957611339611381565b500290565b60008282101561135057611350611381565b500390565b60005b83811015611370578181015183820152602001611358565b838111156109325750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220ff3ed5ebd018521381881ebded5cc125de897128b1250079a65fc7cf05468c3664736f6c63430008040033"
      };
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/Rewards.js
  var require_Rewards = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/Rewards.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Rewards = void 0;
      var eth_wallet_1 = __require("@ijstech/eth-wallet");
      var Rewards_json_1 = __importDefault(require_Rewards_json());
      var Rewards = class extends eth_wallet_1.Contract {
        constructor(wallet, address) {
          super(wallet, address, Rewards_json_1.default.abi, Rewards_json_1.default.bytecode);
          this.assign();
        }
        deploy(params) {
          return this.__deploy([params.timeIsMoney, params.token, eth_wallet_1.Utils.toString(params.multiplier), eth_wallet_1.Utils.toString(params.initialReward), eth_wallet_1.Utils.toString(params.vestingPeriod), eth_wallet_1.Utils.toString(params.claimDeadline), params.admin]);
        }
        parseAdminDrainEvent(receipt) {
          return this.parseEvents(receipt, "AdminDrain").map((e) => this.decodeAdminDrainEvent(e));
        }
        decodeAdminDrainEvent(event) {
          let result = event.data;
          return {
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
          };
        }
        parseClaimEvent(receipt) {
          return this.parseEvents(receipt, "Claim").map((e) => this.decodeClaimEvent(e));
        }
        decodeClaimEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            totalSoFar: new eth_wallet_1.BigNumber(result.totalSoFar),
            _event: event
          };
        }
        assign() {
          let admin_call = async () => {
            let result = await this.call("admin");
            return result;
          };
          this.admin = admin_call;
          let claimDeadline_call = async () => {
            let result = await this.call("claimDeadline");
            return new eth_wallet_1.BigNumber(result);
          };
          this.claimDeadline = claimDeadline_call;
          let claimSoFar_call = async (param1) => {
            let result = await this.call("claimSoFar", [param1]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.claimSoFar = claimSoFar_call;
          let initialReward_call = async () => {
            let result = await this.call("initialReward");
            return new eth_wallet_1.BigNumber(result);
          };
          this.initialReward = initialReward_call;
          let multiplier_call = async () => {
            let result = await this.call("multiplier");
            return new eth_wallet_1.BigNumber(result);
          };
          this.multiplier = multiplier_call;
          let reward_call = async () => {
            let result = await this.call("reward");
            return new eth_wallet_1.BigNumber(result);
          };
          this.reward = reward_call;
          let rewardForAccount_call = async (account) => {
            let result = await this.call("rewardForAccount", [account]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.rewardForAccount = rewardForAccount_call;
          let timeIsMoney_call = async () => {
            let result = await this.call("timeIsMoney");
            return result;
          };
          this.timeIsMoney = timeIsMoney_call;
          let token_call = async () => {
            let result = await this.call("token");
            return result;
          };
          this.token = token_call;
          let unclaimed_call = async () => {
            let result = await this.call("unclaimed");
            return new eth_wallet_1.BigNumber(result);
          };
          this.unclaimed = unclaimed_call;
          let unclaimedForAccount_call = async (account) => {
            let result = await this.call("unclaimedForAccount", [account]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.unclaimedForAccount = unclaimedForAccount_call;
          let vestingPeriod_call = async () => {
            let result = await this.call("vestingPeriod");
            return new eth_wallet_1.BigNumber(result);
          };
          this.vestingPeriod = vestingPeriod_call;
          let claim_send = async () => {
            let result = await this.send("claim");
            return result;
          };
          let claim_call = async () => {
            let result = await this.call("claim");
            return;
          };
          this.claim = Object.assign(claim_send, {
            call: claim_call
          });
          let claimFor_send = async (account) => {
            let result = await this.send("claimFor", [account]);
            return result;
          };
          let claimFor_call = async (account) => {
            let result = await this.call("claimFor", [account]);
            return;
          };
          this.claimFor = Object.assign(claimFor_send, {
            call: claimFor_call
          });
          let putFundParams = (params) => [params.from, eth_wallet_1.Utils.toString(params.amount)];
          let putFund_send = async (params) => {
            let result = await this.send("putFund", putFundParams(params));
            return result;
          };
          let putFund_call = async (params) => {
            let result = await this.call("putFund", putFundParams(params));
            return;
          };
          this.putFund = Object.assign(putFund_send, {
            call: putFund_call
          });
          let takeUnclaimed_send = async () => {
            let result = await this.send("takeUnclaimed");
            return result;
          };
          let takeUnclaimed_call = async () => {
            let result = await this.call("takeUnclaimed");
            return;
          };
          this.takeUnclaimed = Object.assign(takeUnclaimed_send, {
            call: takeUnclaimed_call
          });
        }
      };
      exports.Rewards = Rewards;
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/RewardsCommonStartDate.json.js
  var require_RewardsCommonStartDate_json = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/RewardsCommonStartDate.json.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = {
        "abi": [
          { "inputs": [{ "internalType": "contract TimeIsMoneyI", "name": "timeIsMoney_", "type": "address" }, { "internalType": "contract IERC20", "name": "token_", "type": "address" }, { "internalType": "uint256", "name": "multiplier_", "type": "uint256" }, { "internalType": "uint256", "name": "initialReward_", "type": "uint256" }, { "internalType": "uint256", "name": "vestingStartDate_", "type": "uint256" }, { "internalType": "uint256", "name": "vestingPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "claimDeadline_", "type": "uint256" }, { "internalType": "address", "name": "admin_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
          { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "AdminDrain", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalSoFar", "type": "uint256" }], "name": "Claim", "type": "event" },
          { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "claimDeadline", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "claimFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "claimSoFar", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "initialReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "multiplier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "putFund", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "reward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "rewardForAccount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "takeUnclaimed", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "timeIsMoney", "outputs": [{ "internalType": "contract TimeIsMoneyI", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "unclaimed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "unclaimedForAccount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "vestingPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "vestingStartDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "6101a06040523480156200001257600080fd5b50604051620018b5380380620018b58339810160408190526200003591620002f9565b6001600055670de0b6b3a7640000851115620000985760405162461bcd60e51b815260206004820152601860248201527f496e697469616c2072657761726420746f6f206c61726765000000000000000060448201526064015b60405180910390fd5b6001600160a01b038116620000f05760405162461bcd60e51b815260206004820152601560248201527f496e76616c69642061646d696e2061646472657373000000000000000000000060448201526064016200008f565b6001600160a01b038716620001485760405162461bcd60e51b815260206004820152601460248201527f496e76616c69642072657761726420746f6b656e00000000000000000000000060448201526064016200008f565b876001600160a01b031663ed6d0c5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200018257600080fd5b505afa15801562000197573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001bd91906200037e565b886001600160a01b031663302ef3f36040518163ffffffff1660e01b815260040160206040518083038186803b158015620001f757600080fd5b505afa1580156200020c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023291906200037e565b6200023e919062000397565b8410156200028f5760405162461bcd60e51b815260206004820152601a60248201527f496e76616c69642076657374696e67207374617274206461746500000000000060448201526064016200008f565b6001600160601b0319606088811b821660805289901b1660a05260c086905260e0859052620002c785670de0b6b3a7640000620003b2565b6101005261012093909352610140919091526101605260601b6001600160601b0319166101805250620003fb92505050565b600080600080600080600080610100898b03121562000316578384fd5b88516200032381620003e2565b60208a01519098506200033681620003e2565b8097505060408901519550606089015194506080890151935060a0890151925060c0890151915060e08901516200036d81620003e2565b809150509295985092959890939650565b60006020828403121562000390578081fd5b5051919050565b60008219821115620003ad57620003ad620003cc565b500190565b600082821015620003c757620003c7620003cc565b500390565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114620003f857600080fd5b50565b60805160601c60a05160601c60c05160e051610100516101205161014051610160516101805160601c6113c9620004ec600039600081816102cd01528181610505015261079e0152600081816101c801528181610590015261061801526000818161022601528181610aeb0152610b430152600081816101f701528181610a110152610ac2015260008181610b150152610b680152600081816102600152610a9a01526000818161013a0152610bb301526000818161017c015281816109270152610c390152600081816102fc01528181610338015281816106d10152818161077c0152610dac01526113c96000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c80637313ee5a116100b2578063e073bb4f11610081578063f851a44011610066578063f851a440146102c8578063fbad76cb146102ef578063fc0c546a146102f757600080fd5b8063e073bb4f14610295578063eca679c3146102b557600080fd5b80637313ee5a14610221578063828fd19d14610248578063abee967c1461025b578063ddeae0331461028257600080fd5b80633ba86c44116100ee5780633ba86c44146101c35780634e71d92d146101ea578063579acacc146101f2578063669416b81461021957600080fd5b80630d890369146101205780631b3ed72214610135578063228cb7331461016f5780632b23c16e14610177575b600080fd5b61013361012e3660046111c5565b61031e565b005b61015c7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b61015c610364565b61019e7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610166565b61015c7f000000000000000000000000000000000000000000000000000000000000000081565b610133610374565b61015c7f000000000000000000000000000000000000000000000000000000000000000081565b61015c6103fb565b61015c7f000000000000000000000000000000000000000000000000000000000000000081565b61015c6102563660046111ab565b610420565b61015c7f000000000000000000000000000000000000000000000000000000000000000081565b6101336102903660046111ab565b610431565b61015c6102a33660046111ab565b60016020526000908152604090205481565b61015c6102c33660046111ab565b6104b4565b61019e7f000000000000000000000000000000000000000000000000000000000000000081565b6101336104ed565b61019e7f000000000000000000000000000000000000000000000000000000000000000081565b61036073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168330846107f9565b5050565b600061036f336108db565b905090565b600260005414156103e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026000556103f433610cd2565b6001600055565b336000818152600160205260408120549091610416906108db565b61036f9190611321565b600061042b826108db565b92915050565b6002600054141561049e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103dd565b60026000556104ac81610cd2565b506001600055565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600160205260408120546104e3836108db565b61042b9190611321565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461058c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f6e6c79207468652061646d696e2063616e20646f207468697321000000000060448201526064016103dd565b60007f000000000000000000000000000000000000000000000000000000000000000011610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4e6f20636c61696d20646561646c696e65207365742e0000000000000000000060448201526064016103dd565b7f00000000000000000000000000000000000000000000000000000000000000004210156106a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4974277320746f6f206561726c7920746f20646f20746869732e00000000000060448201526064016103dd565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b15801561072857600080fd5b505afa15801561073c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610760919061120e565b90506107c373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000083610e29565b6040518181527f146bbc9b753597a27f70129b547228bac3f0a1fd36ee128a15367d259ab427149060200160405180910390a150565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526108d59085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610e84565b50505050565b6040517f34265c4800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091829182917f0000000000000000000000000000000000000000000000000000000000000000909116906334265c489060240160206040518083038186803b15801561096b57600080fd5b505afa15801561097f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a3919061120e565b905060008111610a0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f596f7520617265206e6f74206120706172746974696f6e65722e00000000000060448201526064016103dd565b7f00000000000000000000000000000000000000000000000000000000000000004211610a98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f5265776172647320686173206e6f742073746172746564207965742e0000000060448201526064016103dd565b7f000000000000000000000000000000000000000000000000000000000000000091506000610ae77f000000000000000000000000000000000000000000000000000000000000000042611321565b90507f00000000000000000000000000000000000000000000000000000000000000008110610b4157610b3a7f000000000000000000000000000000000000000000000000000000000000000084611293565b9250610ba3565b7f0000000000000000000000000000000000000000000000000000000000000000610b8c827f00000000000000000000000000000000000000000000000000000000000000006112e4565b610b9691906112ab565b610ba09084611293565b92505b6000670de0b6b3a7640000610bd87f0000000000000000000000000000000000000000000000000000000000000000866112e4565b610be291906112ab565b6040517f57344e6f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152919250600091670de0b6b3a76400009184917f000000000000000000000000000000000000000000000000000000000000000016906357344e6f9060240160206040518083038186803b158015610c7b57600080fd5b505afa158015610c8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb3919061120e565b610cbd91906112e4565b610cc791906112ab565b979650505050505050565b6000610cdd826108db565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604081205491925090610d119083611321565b905060008111610d7d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f596f752068617665206e6f7468696e6720746f20636c61696d2100000000000060448201526064016103dd565b73ffffffffffffffffffffffffffffffffffffffff8084166000908152600160205260409020839055610dd3907f0000000000000000000000000000000000000000000000000000000000000000168483610e29565b604080518281526020810184905273ffffffffffffffffffffffffffffffffffffffff8516917f34fcbac0073d7c3d388e51312faf357774904998eeb8fca628b9e6f65ee1cbf7910160405180910390a2505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610e7f9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401610853565b505050565b6000610ee6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610f909092919063ffffffff16565b805190915015610e7f5780806020019051810190610f0491906111ee565b610e7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016103dd565b6060610f9f8484600085610fa9565b90505b9392505050565b60608247101561103b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016103dd565b73ffffffffffffffffffffffffffffffffffffffff85163b6110b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103dd565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110e29190611226565b60006040518083038185875af1925050503d806000811461111f576040519150601f19603f3d011682016040523d82523d6000602084013e611124565b606091505b5091509150610cc78282866060831561113e575081610fa2565b82511561114e5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103dd9190611242565b803573ffffffffffffffffffffffffffffffffffffffff811681146111a657600080fd5b919050565b6000602082840312156111bc578081fd5b610fa282611182565b600080604083850312156111d7578081fd5b6111e083611182565b946020939093013593505050565b6000602082840312156111ff578081fd5b81518015158114610fa2578182fd5b60006020828403121561121f578081fd5b5051919050565b60008251611238818460208701611338565b9190910192915050565b6020815260008251806020840152611261816040850160208701611338565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082198211156112a6576112a6611364565b500190565b6000826112df577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561131c5761131c611364565b500290565b60008282101561133357611333611364565b500390565b60005b8381101561135357818101518382015260200161133b565b838111156108d55750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220123bc438f07092d9d350677e4d8109af289f13d9266926fb30ec8d42df37e1dc64736f6c63430008040033"
      };
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/RewardsCommonStartDate.js
  var require_RewardsCommonStartDate = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/RewardsCommonStartDate.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.RewardsCommonStartDate = void 0;
      var eth_wallet_1 = __require("@ijstech/eth-wallet");
      var RewardsCommonStartDate_json_1 = __importDefault(require_RewardsCommonStartDate_json());
      var RewardsCommonStartDate = class extends eth_wallet_1.Contract {
        constructor(wallet, address) {
          super(wallet, address, RewardsCommonStartDate_json_1.default.abi, RewardsCommonStartDate_json_1.default.bytecode);
          this.assign();
        }
        deploy(params) {
          return this.__deploy([params.timeIsMoney, params.token, eth_wallet_1.Utils.toString(params.multiplier), eth_wallet_1.Utils.toString(params.initialReward), eth_wallet_1.Utils.toString(params.vestingStartDate), eth_wallet_1.Utils.toString(params.vestingPeriod), eth_wallet_1.Utils.toString(params.claimDeadline), params.admin]);
        }
        parseAdminDrainEvent(receipt) {
          return this.parseEvents(receipt, "AdminDrain").map((e) => this.decodeAdminDrainEvent(e));
        }
        decodeAdminDrainEvent(event) {
          let result = event.data;
          return {
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
          };
        }
        parseClaimEvent(receipt) {
          return this.parseEvents(receipt, "Claim").map((e) => this.decodeClaimEvent(e));
        }
        decodeClaimEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            totalSoFar: new eth_wallet_1.BigNumber(result.totalSoFar),
            _event: event
          };
        }
        assign() {
          let admin_call = async () => {
            let result = await this.call("admin");
            return result;
          };
          this.admin = admin_call;
          let claimDeadline_call = async () => {
            let result = await this.call("claimDeadline");
            return new eth_wallet_1.BigNumber(result);
          };
          this.claimDeadline = claimDeadline_call;
          let claimSoFar_call = async (param1) => {
            let result = await this.call("claimSoFar", [param1]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.claimSoFar = claimSoFar_call;
          let initialReward_call = async () => {
            let result = await this.call("initialReward");
            return new eth_wallet_1.BigNumber(result);
          };
          this.initialReward = initialReward_call;
          let multiplier_call = async () => {
            let result = await this.call("multiplier");
            return new eth_wallet_1.BigNumber(result);
          };
          this.multiplier = multiplier_call;
          let reward_call = async () => {
            let result = await this.call("reward");
            return new eth_wallet_1.BigNumber(result);
          };
          this.reward = reward_call;
          let rewardForAccount_call = async (account) => {
            let result = await this.call("rewardForAccount", [account]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.rewardForAccount = rewardForAccount_call;
          let timeIsMoney_call = async () => {
            let result = await this.call("timeIsMoney");
            return result;
          };
          this.timeIsMoney = timeIsMoney_call;
          let token_call = async () => {
            let result = await this.call("token");
            return result;
          };
          this.token = token_call;
          let unclaimed_call = async () => {
            let result = await this.call("unclaimed");
            return new eth_wallet_1.BigNumber(result);
          };
          this.unclaimed = unclaimed_call;
          let unclaimedForAccount_call = async (account) => {
            let result = await this.call("unclaimedForAccount", [account]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.unclaimedForAccount = unclaimedForAccount_call;
          let vestingPeriod_call = async () => {
            let result = await this.call("vestingPeriod");
            return new eth_wallet_1.BigNumber(result);
          };
          this.vestingPeriod = vestingPeriod_call;
          let vestingStartDate_call = async () => {
            let result = await this.call("vestingStartDate");
            return new eth_wallet_1.BigNumber(result);
          };
          this.vestingStartDate = vestingStartDate_call;
          let claim_send = async () => {
            let result = await this.send("claim");
            return result;
          };
          let claim_call = async () => {
            let result = await this.call("claim");
            return;
          };
          this.claim = Object.assign(claim_send, {
            call: claim_call
          });
          let claimFor_send = async (account) => {
            let result = await this.send("claimFor", [account]);
            return result;
          };
          let claimFor_call = async (account) => {
            let result = await this.call("claimFor", [account]);
            return;
          };
          this.claimFor = Object.assign(claimFor_send, {
            call: claimFor_call
          });
          let putFundParams = (params) => [params.from, eth_wallet_1.Utils.toString(params.amount)];
          let putFund_send = async (params) => {
            let result = await this.send("putFund", putFundParams(params));
            return result;
          };
          let putFund_call = async (params) => {
            let result = await this.call("putFund", putFundParams(params));
            return;
          };
          this.putFund = Object.assign(putFund_send, {
            call: putFund_call
          });
          let takeUnclaimed_send = async () => {
            let result = await this.send("takeUnclaimed");
            return result;
          };
          let takeUnclaimed_call = async () => {
            let result = await this.call("takeUnclaimed");
            return;
          };
          this.takeUnclaimed = Object.assign(takeUnclaimed_send, {
            call: takeUnclaimed_call
          });
        }
      };
      exports.RewardsCommonStartDate = RewardsCommonStartDate;
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/TimeIsMoney.json.js
  var require_TimeIsMoney_json = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/TimeIsMoney.json.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = {
        "abi": [
          { "inputs": [{ "internalType": "address", "name": "token_", "type": "address" }, { "internalType": "uint256", "name": "maximumTotalLock_", "type": "uint256" }, { "internalType": "uint256", "name": "minimumLockTime_", "type": "uint256" }, { "internalType": "uint256", "name": "startOfEntryPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "endOfEntryPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "perAddressCap_", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "heldLongEnough", "type": "bool" }], "name": "Withdrawal", "type": "event" },
          { "inputs": [], "name": "endOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lockAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "maximumTotalLock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "minimumLockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "perAddressCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "readyToWithdraw", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "releaseTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "startOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "totalLocked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "bool", "name": "allowWithdrawalBeforeRelease", "type": "bool" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "withdrawn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "61014060405234801561001157600080fd5b5060405161133738038061133783398101604081905261003091610064565b600160005560609590951b6001600160601b03191660805260a09390935260c09190915260e05261010052610120526100c1565b60008060008060008060c0878903121561007c578182fd5b86516001600160a01b0381168114610092578283fd5b6020880151604089015160608a015160808b015160a0909b0151939c929b509099909850965090945092505050565b60805160601c60a05160c05160e05161010051610120516111ec61014b60003960008181610171015261098901526000818161011c01526107f9015260008181610246015261076f01526000818161026d0152610b6401526000818161020c0152610a1a015260008181610294015281816105d50152818161067a0152610b0d01526111ec6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806395bc3bd01161008c578063dd46706411610066578063dd4670641461022e578063e76a5de014610241578063ed6d0c5b14610268578063fc0c546a1461028f57600080fd5b806395bc3bd0146101d2578063a810a54c146101f2578063cbc2efbe1461020757600080fd5b806347dd5172116100c857806347dd51721461016c578063568914121461019357806357344e6f1461019c5780636ef61092146101af57600080fd5b80630a469e7a146100ef578063302ef3f31461011757806334265c481461014c575b600080fd5b6101026100fd36600461102a565b6102db565b60405190151581526020015b60405180910390f35b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161010e565b61013e61015a36600461102a565b60036020526000908152604090205481565b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b61013e60015481565b61013e6101aa36600461102a565b61036c565b6101026101bd36600461102a565b60046020526000908152604090205460ff1681565b61013e6101e036600461102a565b60026020526000908152604090205481565b61020561020036600461105e565b6103ca565b005b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b61020561023c366004611096565b6106fb565b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b6102b67f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010e565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604081205415801590610334575073ffffffffffffffffffffffffffffffffffffffff82166000908152600360205260409020544210155b8015610366575073ffffffffffffffffffffffffffffffffffffffff821660009081526004602052604090205460ff16155b92915050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600360205260408120544210156103a157506000919050565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b6002600054141561043c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081553381526004602052604090205460ff1615801561046e57503360009081526002602052604090205415155b6104d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4e6f20746f6b656e7320617661696c61626c6520746f2077697468647261772e6044820152606401610433565b3360009081526002602090815260408083205460039092529091205442101561063c5781610584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f596f757220746f6b656e732077657265206e6f74206c6f636b6564206c6f6e6760448201527f20656e6f756768210000000000000000000000000000000000000000000000006064820152608401610433565b33600090815260026020908152604080832083905560039091528120819055600180548392906105b5908490611133565b909155506105fc905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163383610bdf565b604080518281526000602082015233917f06e0c61e7e9f4912ee1f3ce060b59207b98f9a232d711462af3166aeeed1250a910160405180910390a26106f2565b33600081815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556106b6907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169083610bdf565b604080518281526001602082015233917f06e0c61e7e9f4912ee1f3ce060b59207b98f9a232d711462af3166aeeed1250a910160405180910390a25b50506001600055565b60026000541415610768576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610433565b60026000557f00000000000000000000000000000000000000000000000000000000000000004210156107f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4974277320746f6f206561726c7920746f20646f2074686973210000000000006044820152606401610433565b7f00000000000000000000000000000000000000000000000000000000000000004210610880576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f536f7272792c20796f752061746520746f6f206c6174652100000000000000006044820152606401610433565b336000908152600260205260409020541561091d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f596f75206861766520616c72656164792070617274696369706174656420696e60448201527f20746869732e00000000000000000000000000000000000000000000000000006064820152608401610433565b60008111610987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f596f752063616e6e6f74206c6f636b206e6f7468696e672100000000000000006044820152606401610433565b7f0000000000000000000000000000000000000000000000000000000000000000811115610a11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f596f752063616e6e6f74206c6f636b206f76657220746865206c696d697421006044820152606401610433565b600154610a3e907f0000000000000000000000000000000000000000000000000000000000000000611133565b811115610af3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604760248201527f54686973206465706f73697420776f756c64206361757365206f757220746f7460448201527f616c206c6f636b656420616d6f756e7420746f2065786365656420746865206d60648201527f6178696d756d2e00000000000000000000000000000000000000000000000000608482015260a401610433565b610b3573ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333084610cb8565b33600090815260026020526040812082905560018054839290610b5990849061111b565b90915550610b8990507f00000000000000000000000000000000000000000000000000000000000000004261111b565b33600081815260036020526040908190209290925590517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c90610bcf9084815260200190565b60405180910390a2506001600055565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610cb39084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610d1c565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d169085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610c31565b50505050565b6000610d7e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610e289092919063ffffffff16565b805190915015610cb35780806020019051810190610d9c919061107a565b610cb3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610433565b6060610e378484600085610e41565b90505b9392505050565b606082471015610ed3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610433565b73ffffffffffffffffffffffffffffffffffffffff85163b610f51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610433565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610f7a91906110ae565b60006040518083038185875af1925050503d8060008114610fb7576040519150601f19603f3d011682016040523d82523d6000602084013e610fbc565b606091505b5091509150610fcc828286610fd7565b979650505050505050565b60608315610fe6575081610e3a565b825115610ff65782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043391906110ca565b60006020828403121561103b578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610e3a578182fd5b60006020828403121561106f578081fd5b8135610e3a816111a5565b60006020828403121561108b578081fd5b8151610e3a816111a5565b6000602082840312156110a7578081fd5b5035919050565b600082516110c081846020870161114a565b9190910192915050565b60208152600082518060208401526110e981604085016020870161114a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000821982111561112e5761112e611176565b500190565b60008282101561114557611145611176565b500390565b60005b8381101561116557818101518382015260200161114d565b83811115610d165750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80151581146111b357600080fd5b5056fea2646970667358221220d97e87a8c428325cadb382f9267cb2c1c82b1c1a7411090c012660530f62700664736f6c63430008040033"
      };
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/TimeIsMoney.js
  var require_TimeIsMoney = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/TimeIsMoney.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TimeIsMoney = void 0;
      var eth_wallet_1 = __require("@ijstech/eth-wallet");
      var TimeIsMoney_json_1 = __importDefault(require_TimeIsMoney_json());
      var TimeIsMoney = class extends eth_wallet_1.Contract {
        constructor(wallet, address) {
          super(wallet, address, TimeIsMoney_json_1.default.abi, TimeIsMoney_json_1.default.bytecode);
          this.assign();
        }
        deploy(params) {
          return this.__deploy([params.token, eth_wallet_1.Utils.toString(params.maximumTotalLock), eth_wallet_1.Utils.toString(params.minimumLockTime), eth_wallet_1.Utils.toString(params.startOfEntryPeriod), eth_wallet_1.Utils.toString(params.endOfEntryPeriod), eth_wallet_1.Utils.toString(params.perAddressCap)]);
        }
        parseDepositEvent(receipt) {
          return this.parseEvents(receipt, "Deposit").map((e) => this.decodeDepositEvent(e));
        }
        decodeDepositEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
          };
        }
        parseWithdrawalEvent(receipt) {
          return this.parseEvents(receipt, "Withdrawal").map((e) => this.decodeWithdrawalEvent(e));
        }
        decodeWithdrawalEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            heldLongEnough: result.heldLongEnough,
            _event: event
          };
        }
        assign() {
          let endOfEntryPeriod_call = async () => {
            let result = await this.call("endOfEntryPeriod");
            return new eth_wallet_1.BigNumber(result);
          };
          this.endOfEntryPeriod = endOfEntryPeriod_call;
          let getCredit_call = async (account) => {
            let result = await this.call("getCredit", [account]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.getCredit = getCredit_call;
          let lockAmount_call = async (param1) => {
            let result = await this.call("lockAmount", [param1]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.lockAmount = lockAmount_call;
          let maximumTotalLock_call = async () => {
            let result = await this.call("maximumTotalLock");
            return new eth_wallet_1.BigNumber(result);
          };
          this.maximumTotalLock = maximumTotalLock_call;
          let minimumLockTime_call = async () => {
            let result = await this.call("minimumLockTime");
            return new eth_wallet_1.BigNumber(result);
          };
          this.minimumLockTime = minimumLockTime_call;
          let perAddressCap_call = async () => {
            let result = await this.call("perAddressCap");
            return new eth_wallet_1.BigNumber(result);
          };
          this.perAddressCap = perAddressCap_call;
          let readyToWithdraw_call = async (account) => {
            let result = await this.call("readyToWithdraw", [account]);
            return result;
          };
          this.readyToWithdraw = readyToWithdraw_call;
          let releaseTime_call = async (param1) => {
            let result = await this.call("releaseTime", [param1]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.releaseTime = releaseTime_call;
          let startOfEntryPeriod_call = async () => {
            let result = await this.call("startOfEntryPeriod");
            return new eth_wallet_1.BigNumber(result);
          };
          this.startOfEntryPeriod = startOfEntryPeriod_call;
          let token_call = async () => {
            let result = await this.call("token");
            return result;
          };
          this.token = token_call;
          let totalLocked_call = async () => {
            let result = await this.call("totalLocked");
            return new eth_wallet_1.BigNumber(result);
          };
          this.totalLocked = totalLocked_call;
          let withdrawn_call = async (param1) => {
            let result = await this.call("withdrawn", [param1]);
            return result;
          };
          this.withdrawn = withdrawn_call;
          let lock_send = async (amount) => {
            let result = await this.send("lock", [eth_wallet_1.Utils.toString(amount)]);
            return result;
          };
          let lock_call = async (amount) => {
            let result = await this.call("lock", [eth_wallet_1.Utils.toString(amount)]);
            return;
          };
          this.lock = Object.assign(lock_send, {
            call: lock_call
          });
          let withdraw_send = async (allowWithdrawalBeforeRelease) => {
            let result = await this.send("withdraw", [allowWithdrawalBeforeRelease]);
            return result;
          };
          let withdraw_call = async (allowWithdrawalBeforeRelease) => {
            let result = await this.call("withdraw", [allowWithdrawalBeforeRelease]);
            return;
          };
          this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call
          });
        }
      };
      exports.TimeIsMoney = TimeIsMoney;
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/TimeIsMoneyEther.json.js
  var require_TimeIsMoneyEther_json = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/TimeIsMoneyEther.json.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = {
        "abi": [
          { "inputs": [{ "internalType": "uint256", "name": "maximumTotalLock_", "type": "uint256" }, { "internalType": "uint256", "name": "minimumLockTime_", "type": "uint256" }, { "internalType": "uint256", "name": "startOfEntryPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "endOfEntryPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "perAddressCap_", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "heldLongEnough", "type": "bool" }], "name": "Withdrawal", "type": "event" },
          { "inputs": [], "name": "endOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "lock", "outputs": [], "stateMutability": "payable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lockAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "maximumTotalLock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "minimumLockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "perAddressCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "readyToWithdraw", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "releaseTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "startOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "totalLocked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "bool", "name": "allowWithdrawalBeforeRelease", "type": "bool" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "withdrawn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "61012060405234801561001157600080fd5b50604051610e9b380380610e9b83398101604081905261003091610050565b600160005560809490945260a09290925260c05260e0526101005261008f565b600080600080600060a08688031215610067578081fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b60805160a05160c05160e05161010051610da56100f66000396000818161018d015261095a01526000818161011e01526107ca0152600081816102aa01526107400152600081816102de0152610af301526000818161027601526109eb0152610da56000f3fe6080604052600436106100d25760003560e01c80636ef610921161007f578063cbc2efbe11610059578063cbc2efbe14610264578063e76a5de014610298578063ed6d0c5b146102cc578063f83d08ba1461030057600080fd5b80636ef61092146101e557806395bc3bd014610215578063a810a54c1461024257600080fd5b806347dd5172116100b057806347dd51721461017b57806356891412146101af57806357344e6f146101c557600080fd5b80630a469e7a146100d7578063302ef3f31461010c57806334265c481461014e575b600080fd5b3480156100e357600080fd5b506100f76100f2366004610c7d565b610308565b60405190151581526020015b60405180910390f35b34801561011857600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610103565b34801561015a57600080fd5b50610140610169366004610c7d565b60036020526000908152604090205481565b34801561018757600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b3480156101bb57600080fd5b5061014060015481565b3480156101d157600080fd5b506101406101e0366004610c7d565b610399565b3480156101f157600080fd5b506100f7610200366004610c7d565b60046020526000908152604090205460ff1681565b34801561022157600080fd5b50610140610230366004610c7d565b60026020526000908152604090205481565b34801561024e57600080fd5b5061026261025d366004610cb8565b6103f7565b005b34801561027057600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b3480156102a457600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b3480156102d857600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b6102626106cb565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604081205415801590610361575073ffffffffffffffffffffffffffffffffffffffff82166000908152600360205260409020544210155b8015610393575073ffffffffffffffffffffffffffffffffffffffff821660009081526004602052604090205460ff16155b92915050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600360205260408120544210156103ce57506000919050565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b60026000541415610469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081553381526004602052604090205460ff1615801561049b57503360009081526002602052604090205415155b610501576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4e6f2065746865727320617661696c61626c6520746f2077697468647261772e6044820152606401610460565b3360009081526002602090815260408083205460039092529091205442101561063257816105b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f596f7572206574686572732077657265206e6f74206c6f636b6564206c6f6e6760448201527f20656e6f756768210000000000000000000000000000000000000000000000006064820152608401610460565b33600090815260026020908152604080832083905560039091528120819055600180548392906105e2908490610d29565b909155506105f290503382610b6e565b604080518281526000602082015233917f06e0c61e7e9f4912ee1f3ce060b59207b98f9a232d711462af3166aeeed1250a910160405180910390a26106c2565b33600081815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556106749082610b6e565b336000818152600260209081526040918290205482519081526001918101919091527f06e0c61e7e9f4912ee1f3ce060b59207b98f9a232d711462af3166aeeed1250a910160405180910390a25b50506001600055565b60026000541415610738576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610460565b6002600055347f00000000000000000000000000000000000000000000000000000000000000004210156107c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4974277320746f6f206561726c7920746f20646f2074686973210000000000006044820152606401610460565b7f00000000000000000000000000000000000000000000000000000000000000004210610851576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f536f7272792c20796f752061746520746f6f206c6174652100000000000000006044820152606401610460565b33600090815260026020526040902054156108ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f596f75206861766520616c72656164792070617274696369706174656420696e60448201527f20746869732e00000000000000000000000000000000000000000000000000006064820152608401610460565b60008111610958576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f596f752063616e6e6f74206c6f636b206e6f7468696e672100000000000000006044820152606401610460565b7f00000000000000000000000000000000000000000000000000000000000000008111156109e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f596f752063616e6e6f74206c6f636b206f76657220746865206c696d697421006044820152606401610460565b600154610a0f907f0000000000000000000000000000000000000000000000000000000000000000610d29565b811115610ac4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604760248201527f54686973206465706f73697420776f756c64206361757365206f757220746f7460448201527f616c206c6f636b656420616d6f756e7420746f2065786365656420746865206d60648201527f6178696d756d2e00000000000000000000000000000000000000000000000000608482015260a401610460565b33600090815260026020526040812082905560018054839290610ae8908490610d11565b90915550610b1890507f000000000000000000000000000000000000000000000000000000000000000042610d11565b33600081815260036020526040908190209290925590517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c90610b5e9084815260200190565b60405180910390a2506001600055565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff8416908390604051610ba59190610cd8565b60006040518083038185875af1925050503d8060008114610be2576040519150601f19603f3d011682016040523d82523d6000602084013e610be7565b606091505b5050905080610c78576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f5472616e7366657248656c7065723a204554485f5452414e534645525f46414960448201527f4c454400000000000000000000000000000000000000000000000000000000006064820152608401610460565b505050565b600060208284031215610c8e578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610cb1578182fd5b9392505050565b600060208284031215610cc9578081fd5b81358015158114610cb1578182fd5b60008251815b81811015610cf85760208186018101518583015201610cde565b81811115610d065782828501525b509190910192915050565b60008219821115610d2457610d24610d40565b500190565b600082821015610d3b57610d3b610d40565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220d7246743a80fbbba5b2260eee4fb6ef67a0ecfffcc3249f9cf2a36774cca5ea564736f6c63430008040033"
      };
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/TimeIsMoneyEther.js
  var require_TimeIsMoneyEther = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/TimeIsMoneyEther.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TimeIsMoneyEther = void 0;
      var eth_wallet_1 = __require("@ijstech/eth-wallet");
      var TimeIsMoneyEther_json_1 = __importDefault(require_TimeIsMoneyEther_json());
      var TimeIsMoneyEther = class extends eth_wallet_1.Contract {
        constructor(wallet, address) {
          super(wallet, address, TimeIsMoneyEther_json_1.default.abi, TimeIsMoneyEther_json_1.default.bytecode);
          this.assign();
        }
        deploy(params) {
          return this.__deploy([eth_wallet_1.Utils.toString(params.maximumTotalLock), eth_wallet_1.Utils.toString(params.minimumLockTime), eth_wallet_1.Utils.toString(params.startOfEntryPeriod), eth_wallet_1.Utils.toString(params.endOfEntryPeriod), eth_wallet_1.Utils.toString(params.perAddressCap)]);
        }
        parseDepositEvent(receipt) {
          return this.parseEvents(receipt, "Deposit").map((e) => this.decodeDepositEvent(e));
        }
        decodeDepositEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
          };
        }
        parseWithdrawalEvent(receipt) {
          return this.parseEvents(receipt, "Withdrawal").map((e) => this.decodeWithdrawalEvent(e));
        }
        decodeWithdrawalEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            heldLongEnough: result.heldLongEnough,
            _event: event
          };
        }
        assign() {
          let endOfEntryPeriod_call = async () => {
            let result = await this.call("endOfEntryPeriod");
            return new eth_wallet_1.BigNumber(result);
          };
          this.endOfEntryPeriod = endOfEntryPeriod_call;
          let getCredit_call = async (account) => {
            let result = await this.call("getCredit", [account]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.getCredit = getCredit_call;
          let lockAmount_call = async (param1) => {
            let result = await this.call("lockAmount", [param1]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.lockAmount = lockAmount_call;
          let maximumTotalLock_call = async () => {
            let result = await this.call("maximumTotalLock");
            return new eth_wallet_1.BigNumber(result);
          };
          this.maximumTotalLock = maximumTotalLock_call;
          let minimumLockTime_call = async () => {
            let result = await this.call("minimumLockTime");
            return new eth_wallet_1.BigNumber(result);
          };
          this.minimumLockTime = minimumLockTime_call;
          let perAddressCap_call = async () => {
            let result = await this.call("perAddressCap");
            return new eth_wallet_1.BigNumber(result);
          };
          this.perAddressCap = perAddressCap_call;
          let readyToWithdraw_call = async (account) => {
            let result = await this.call("readyToWithdraw", [account]);
            return result;
          };
          this.readyToWithdraw = readyToWithdraw_call;
          let releaseTime_call = async (param1) => {
            let result = await this.call("releaseTime", [param1]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.releaseTime = releaseTime_call;
          let startOfEntryPeriod_call = async () => {
            let result = await this.call("startOfEntryPeriod");
            return new eth_wallet_1.BigNumber(result);
          };
          this.startOfEntryPeriod = startOfEntryPeriod_call;
          let totalLocked_call = async () => {
            let result = await this.call("totalLocked");
            return new eth_wallet_1.BigNumber(result);
          };
          this.totalLocked = totalLocked_call;
          let withdrawn_call = async (param1) => {
            let result = await this.call("withdrawn", [param1]);
            return result;
          };
          this.withdrawn = withdrawn_call;
          let lock_send = async (_value) => {
            let result = await this.send("lock", [], { value: _value });
            return result;
          };
          let lock_call = async (_value) => {
            let result = await this.call("lock", [], { value: _value });
            return;
          };
          this.lock = Object.assign(lock_send, {
            call: lock_call
          });
          let withdraw_send = async (allowWithdrawalBeforeRelease) => {
            let result = await this.send("withdraw", [allowWithdrawalBeforeRelease]);
            return result;
          };
          let withdraw_call = async (allowWithdrawalBeforeRelease) => {
            let result = await this.call("withdraw", [allowWithdrawalBeforeRelease]);
            return;
          };
          this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call
          });
        }
      };
      exports.TimeIsMoneyEther = TimeIsMoneyEther;
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/test/FakeTimeIsMoney.json.js
  var require_FakeTimeIsMoney_json = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/test/FakeTimeIsMoney.json.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = {
        "abi": [
          { "inputs": [{ "internalType": "contract IERC20", "name": "token_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "heldLongEnough", "type": "bool" }], "name": "Withdrawal", "type": "event" },
          { "inputs": [], "name": "amount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "endOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "getCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "pure", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lockAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "maximumTotalLock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "minimumLockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
          { "inputs": [], "name": "perAddressCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "readyToWithdraw", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "pure", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "releaseTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
          { "inputs": [{ "internalType": "uint256", "name": "amount_", "type": "uint256" }], "name": "setAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "startOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
          { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "totalLocked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "name": "withdraw", "outputs": [], "stateMutability": "pure", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "withdrawn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "pure", "type": "function" }
        ],
        "bytecode": "60a060405234801561001057600080fd5b506040516103a63803806103a683398101604081905261002f91610050565b60601b6001600160601b031916608052678ac7230489e8000060005561007e565b600060208284031215610061578081fd5b81516001600160a01b0381168114610077578182fd5b9392505050565b60805160601c61030a61009c60003960006101b4015261030a6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806395bc3bd011610097578063dd46706411610066578063dd467064146101a1578063e76a5de014610143578063ed6d0c5b14610143578063fc0c546a146101af57600080fd5b806395bc3bd014610170578063a810a54c14610185578063aa8c217c14610198578063cbc2efbe1461016857600080fd5b806347dd5172116100d357806347dd517214610168578063568914121461016857806357344e6f146101705780636ef610921461010557600080fd5b80630a469e7a14610105578063271f88b41461012e578063302ef3f31461014357806334265c4814610154575b600080fd5b610119610113366004610261565b50600190565b60405190151581526020015b60405180910390f35b61014161013c3660046102bc565b600055565b005b60005b604051908152602001610125565b610146610162366004610261565b50600090565b600054610146565b61014661017e366004610261565b5060005490565b61014161019336600461029c565b6101fb565b61014660005481565b6101416101933660046102bc565b6101d67f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610125565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4e6f7420737570706f72746564206f6e2046616b6554696d6549734d6f6e6579604482015260640160405180910390fd5b600060208284031215610272578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610295578182fd5b9392505050565b6000602082840312156102ad578081fd5b81358015158114610295578182fd5b6000602082840312156102cd578081fd5b503591905056fea2646970667358221220c7c48f7df02dc285c76f39bec35d44229b6683107277c589e6b18e73eb33a74a64736f6c63430008040033"
      };
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/test/FakeTimeIsMoney.js
  var require_FakeTimeIsMoney = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/test/FakeTimeIsMoney.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FakeTimeIsMoney = void 0;
      var eth_wallet_1 = __require("@ijstech/eth-wallet");
      var FakeTimeIsMoney_json_1 = __importDefault(require_FakeTimeIsMoney_json());
      var FakeTimeIsMoney = class extends eth_wallet_1.Contract {
        constructor(wallet, address) {
          super(wallet, address, FakeTimeIsMoney_json_1.default.abi, FakeTimeIsMoney_json_1.default.bytecode);
          this.assign();
        }
        deploy(token) {
          return this.__deploy([token]);
        }
        parseDepositEvent(receipt) {
          return this.parseEvents(receipt, "Deposit").map((e) => this.decodeDepositEvent(e));
        }
        decodeDepositEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
          };
        }
        parseWithdrawalEvent(receipt) {
          return this.parseEvents(receipt, "Withdrawal").map((e) => this.decodeWithdrawalEvent(e));
        }
        decodeWithdrawalEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            heldLongEnough: result.heldLongEnough,
            _event: event
          };
        }
        assign() {
          let amount_call = async () => {
            let result = await this.call("amount");
            return new eth_wallet_1.BigNumber(result);
          };
          this.amount = amount_call;
          let endOfEntryPeriod_call = async () => {
            let result = await this.call("endOfEntryPeriod");
            return new eth_wallet_1.BigNumber(result);
          };
          this.endOfEntryPeriod = endOfEntryPeriod_call;
          let getCredit_call = async (param1) => {
            let result = await this.call("getCredit", [param1]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.getCredit = getCredit_call;
          let lock_call = async (param1) => {
            let result = await this.call("lock", [eth_wallet_1.Utils.toString(param1)]);
            return;
          };
          this.lock = lock_call;
          let lockAmount_call = async (param1) => {
            let result = await this.call("lockAmount", [param1]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.lockAmount = lockAmount_call;
          let maximumTotalLock_call = async () => {
            let result = await this.call("maximumTotalLock");
            return new eth_wallet_1.BigNumber(result);
          };
          this.maximumTotalLock = maximumTotalLock_call;
          let minimumLockTime_call = async () => {
            let result = await this.call("minimumLockTime");
            return new eth_wallet_1.BigNumber(result);
          };
          this.minimumLockTime = minimumLockTime_call;
          let perAddressCap_call = async () => {
            let result = await this.call("perAddressCap");
            return new eth_wallet_1.BigNumber(result);
          };
          this.perAddressCap = perAddressCap_call;
          let readyToWithdraw_call = async (param1) => {
            let result = await this.call("readyToWithdraw", [param1]);
            return result;
          };
          this.readyToWithdraw = readyToWithdraw_call;
          let releaseTime_call = async (param1) => {
            let result = await this.call("releaseTime", [param1]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.releaseTime = releaseTime_call;
          let startOfEntryPeriod_call = async () => {
            let result = await this.call("startOfEntryPeriod");
            return new eth_wallet_1.BigNumber(result);
          };
          this.startOfEntryPeriod = startOfEntryPeriod_call;
          let token_call = async () => {
            let result = await this.call("token");
            return result;
          };
          this.token = token_call;
          let totalLocked_call = async () => {
            let result = await this.call("totalLocked");
            return new eth_wallet_1.BigNumber(result);
          };
          this.totalLocked = totalLocked_call;
          let withdraw_call = async (param1) => {
            let result = await this.call("withdraw", [param1]);
            return;
          };
          this.withdraw = withdraw_call;
          let withdrawn_call = async (param1) => {
            let result = await this.call("withdrawn", [param1]);
            return result;
          };
          this.withdrawn = withdrawn_call;
          let setAmount_send = async (amount) => {
            let result = await this.send("setAmount", [eth_wallet_1.Utils.toString(amount)]);
            return result;
          };
          let setAmount_call = async (amount) => {
            let result = await this.call("setAmount", [eth_wallet_1.Utils.toString(amount)]);
            return;
          };
          this.setAmount = Object.assign(setAmount_send, {
            call: setAmount_call
          });
        }
      };
      exports.FakeTimeIsMoney = FakeTimeIsMoney;
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/test/TestERC20.json.js
  var require_TestERC20_json = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/test/TestERC20.json.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = {
        "abi": [
          { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "__decimals", "type": "uint8" }], "stateMutability": "nonpayable", "type": "constructor" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
          { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
          { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "MINTER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "PAUSER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
          { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
          { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b50604051620026f0380380620026f08339810160408190526200003491620003c9565b8282818181600590805190602001906200005092919062000270565b5080516200006690600690602084019062000270565b50506007805460ff1916905550620000806000336200010b565b620000ac7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200010b565b620000d87f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336200010b565b505060f81b7fff0000000000000000000000000000000000000000000000000000000000000016608052506200049d9050565b6200011782826200011b565b5050565b6200013282826200015e60201b62000afb1760201c565b60008281526001602090815260409091206200015991839062000beb620001fe821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000117576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001ba3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000215836001600160a01b0384166200021e565b90505b92915050565b6000818152600183016020526040812054620002675750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000218565b50600062000218565b8280546200027e906200044a565b90600052602060002090601f016020900481019282620002a25760008555620002ed565b82601f10620002bd57805160ff1916838001178555620002ed565b82800160010185558215620002ed579182015b82811115620002ed578251825591602001919060010190620002d0565b50620002fb929150620002ff565b5090565b5b80821115620002fb576000815560010162000300565b600082601f83011262000327578081fd5b81516001600160401b038082111562000344576200034462000487565b604051601f8301601f19908116603f011681019082821181831017156200036f576200036f62000487565b816040528381526020925086838588010111156200038b578485fd5b8491505b83821015620003ae57858201830151818301840152908201906200038f565b83821115620003bf57848385830101525b9695505050505050565b600080600060608486031215620003de578283fd5b83516001600160401b0380821115620003f5578485fd5b620004038783880162000316565b9450602086015191508082111562000419578384fd5b50620004288682870162000316565b925050604084015160ff811681146200043f578182fd5b809150509250925092565b600181811c908216806200045f57607f821691505b602082108114156200048157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160f81c61222d620004c36000396000818161028301526102ba015261222d6000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80635c975abb11610104578063a217fddf116100a2578063d539139311610071578063d539139314610451578063d547741f14610478578063dd62ed3e1461048b578063e63ab1e9146104d157600080fd5b8063a217fddf14610410578063a457c2d714610418578063a9059cbb1461042b578063ca15c8731461043e57600080fd5b80638456cb59116100de5780638456cb59146103845780639010d07c1461038c57806391d14854146103c457806395d89b411461040857600080fd5b80635c975abb1461033057806370a082311461033b57806379cc67901461037157600080fd5b8063313ce56711610171578063395093511161014b57806339509351146102ef5780633f4ba83a1461030257806340c10f191461030a57806342966c681461031d57600080fd5b8063313ce5671461028157806332424aa3146102b557806336568abe146102dc57600080fd5b806318160ddd116101ad57806318160ddd1461022457806323b872dd14610236578063248a9ca3146102495780632f2ff15d1461026c57600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063095ea7b314610211575b600080fd5b6101e76101e2366004611f95565b6104f8565b60405190151581526020015b60405180910390f35b610204610554565b6040516101f39190612056565b6101e761021f366004611f11565b6105e6565b6004545b6040519081526020016101f3565b6101e7610244366004611ed6565b6105fe565b610228610257366004611f3a565b60009081526020819052604090206001015490565b61027f61027a366004611f52565b610622565b005b7f00000000000000000000000000000000000000000000000000000000000000005b60405160ff90911681526020016101f3565b6102a37f000000000000000000000000000000000000000000000000000000000000000081565b61027f6102ea366004611f52565b61064d565b6101e76102fd366004611f11565b610705565b61027f610751565b61027f610318366004611f11565b610811565b61027f61032b366004611f3a565b6108d1565b60075460ff166101e7565b610228610349366004611e8a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b61027f61037f366004611f11565b6108de565b61027f6108f3565b61039f61039a366004611f74565b6109b1565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101f3565b6101e76103d2366004611f52565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6102046109d0565b610228600081565b6101e7610426366004611f11565b6109df565b6101e7610439366004611f11565b610ab0565b61022861044c366004611f3a565b610abe565b6102287f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61027f610486366004611f52565b610ad5565b610228610499366004611ea4565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291909152205490565b6102287f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f5a05180f00000000000000000000000000000000000000000000000000000000148061054e575061054e82610c0d565b92915050565b60606005805461056390612174565b80601f016020809104026020016040519081016040528092919081815260200182805461058f90612174565b80156105dc5780601f106105b1576101008083540402835291602001916105dc565b820191906000526020600020905b8154815290600101906020018083116105bf57829003601f168201915b5050505050905090565b6000336105f4818585610ca4565b5060019392505050565b60003361060c858285610e57565b610617858585610f2e565b506001949350505050565b60008281526020819052604090206001015461063e81336111ec565b61064883836112bc565b505050565b73ffffffffffffffffffffffffffffffffffffffff811633146106f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b61070182826112de565b5050565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906105f4908290869061074c9087906120a7565b610ca4565b61077b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336103d2565b610807576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e70617573650000000000000060648201526084016106ee565b61080f611300565b565b61083b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336103d2565b6108c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e740000000000000000000060648201526084016106ee565b61070182826113e1565b6108db338261150d565b50565b6108e9823383610e57565b610701828261150d565b61091d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336103d2565b6109a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20706175736500000000000000000060648201526084016106ee565b61080f611706565b60008281526001602052604081206109c990836117c6565b9392505050565b60606006805461056390612174565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610aa3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016106ee565b6106178286868403610ca4565b6000336105f4818585610f2e565b600081815260016020526040812061054e906117d2565b600082815260208190526040902060010154610af181336111ec565b61064883836112de565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166107015760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610b8d3390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006109c98373ffffffffffffffffffffffffffffffffffffffff84166117dc565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061054e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461054e565b73ffffffffffffffffffffffffffffffffffffffff8316610d46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016106ee565b73ffffffffffffffffffffffffffffffffffffffff8216610de9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016106ee565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600360209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610f285781811015610f1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106ee565b610f288484848403610ca4565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fd1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016106ee565b73ffffffffffffffffffffffffffffffffffffffff8216611074576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016106ee565b61107f83838361182b565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604090205481811015611135576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016106ee565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600260205260408082208585039055918516815290812080548492906111799084906120a7565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111df91815260200190565b60405180910390a3610f28565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610701576112428173ffffffffffffffffffffffffffffffffffffffff166014611836565b61124d836020611836565b60405160200161125e929190611fd5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a00000000000000000000000000000000000000000000000000000000082526106ee91600401612056565b6112c68282610afb565b60008281526001602052604090206106489082610beb565b6112e88282611b3c565b60008281526001602052604090206106489082611bf3565b60075460ff1661136c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016106ee565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b73ffffffffffffffffffffffffffffffffffffffff821661145e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106ee565b61146a6000838361182b565b806004600082825461147c91906120a7565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260026020526040812080548392906114b69084906120a7565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff82166115b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016106ee565b6115bc8260008361182b565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205481811015611672576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016106ee565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604081208383039055600480548492906116ae9084906120fc565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff1615611773576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016106ee565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113b73390565b60006109c98383611c15565b600061054e825490565b60008181526001830160205260408120546118235750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561054e565b50600061054e565b610648838383611c66565b606060006118458360026120bf565b6118509060026120a7565b67ffffffffffffffff81111561188f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156118b9576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611917577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106119a1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006119dd8460026120bf565b6119e89060016120a7565b90505b6001811115611ad3577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611a50577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b828281518110611a8d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611acc8161213f565b90506119eb565b5083156109c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106ee565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156107015760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006109c98373ffffffffffffffffffffffffffffffffffffffff8416611cf9565b6000826000018281548110611c53577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b60075460ff1615610648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c65207061757365640000000000000000000000000000000000000000000060648201526084016106ee565b60008181526001830160205260408120548015611e57576000611d1d6001836120fc565b8554909150600090611d31906001906120fc565b9050818114611de4576000866000018281548110611d78577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080876000018481548110611dc2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611e1c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061054e565b600091505061054e565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e8557600080fd5b919050565b600060208284031215611e9b578081fd5b6109c982611e61565b60008060408385031215611eb6578081fd5b611ebf83611e61565b9150611ecd60208401611e61565b90509250929050565b600080600060608486031215611eea578081fd5b611ef384611e61565b9250611f0160208501611e61565b9150604084013590509250925092565b60008060408385031215611f23578182fd5b611f2c83611e61565b946020939093013593505050565b600060208284031215611f4b578081fd5b5035919050565b60008060408385031215611f64578182fd5b82359150611ecd60208401611e61565b60008060408385031215611f86578182fd5b50508035926020909101359150565b600060208284031215611fa6578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146109c9578182fd5b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161200d816017850160208801612113565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161204a816028840160208801612113565b01602801949350505050565b6020815260008251806020840152612075816040850160208701612113565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082198211156120ba576120ba6121c8565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156120f7576120f76121c8565b500290565b60008282101561210e5761210e6121c8565b500390565b60005b8381101561212e578181015183820152602001612116565b83811115610f285750506000910152565b60008161214e5761214e6121c8565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600181811c9082168061218857607f821691505b602082108114156121c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212203bd3c022fddd917bb80cb9b5d07459f32cd74e6fe6200c575edbb22783bcdc4764736f6c63430008040033"
      };
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/test/TestERC20.js
  var require_TestERC20 = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/test/TestERC20.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TestERC20 = void 0;
      var eth_wallet_1 = __require("@ijstech/eth-wallet");
      var TestERC20_json_1 = __importDefault(require_TestERC20_json());
      var TestERC20 = class extends eth_wallet_1.Contract {
        constructor(wallet, address) {
          super(wallet, address, TestERC20_json_1.default.abi, TestERC20_json_1.default.bytecode);
          this.assign();
        }
        deploy(params) {
          return this.__deploy([params.name, params.symbol, eth_wallet_1.Utils.toString(params.decimals)]);
        }
        parseApprovalEvent(receipt) {
          return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
          let result = event.data;
          return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
          };
        }
        parsePausedEvent(receipt) {
          return this.parseEvents(receipt, "Paused").map((e) => this.decodePausedEvent(e));
        }
        decodePausedEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            _event: event
          };
        }
        parseRoleAdminChangedEvent(receipt) {
          return this.parseEvents(receipt, "RoleAdminChanged").map((e) => this.decodeRoleAdminChangedEvent(e));
        }
        decodeRoleAdminChangedEvent(event) {
          let result = event.data;
          return {
            role: result.role,
            previousAdminRole: result.previousAdminRole,
            newAdminRole: result.newAdminRole,
            _event: event
          };
        }
        parseRoleGrantedEvent(receipt) {
          return this.parseEvents(receipt, "RoleGranted").map((e) => this.decodeRoleGrantedEvent(e));
        }
        decodeRoleGrantedEvent(event) {
          let result = event.data;
          return {
            role: result.role,
            account: result.account,
            sender: result.sender,
            _event: event
          };
        }
        parseRoleRevokedEvent(receipt) {
          return this.parseEvents(receipt, "RoleRevoked").map((e) => this.decodeRoleRevokedEvent(e));
        }
        decodeRoleRevokedEvent(event) {
          let result = event.data;
          return {
            role: result.role,
            account: result.account,
            sender: result.sender,
            _event: event
          };
        }
        parseTransferEvent(receipt) {
          return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
          let result = event.data;
          return {
            from: result.from,
            to: result.to,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
          };
        }
        parseUnpausedEvent(receipt) {
          return this.parseEvents(receipt, "Unpaused").map((e) => this.decodeUnpausedEvent(e));
        }
        decodeUnpausedEvent(event) {
          let result = event.data;
          return {
            account: result.account,
            _event: event
          };
        }
        assign() {
          let DEFAULT_ADMIN_ROLE_call = async () => {
            let result = await this.call("DEFAULT_ADMIN_ROLE");
            return result;
          };
          this.DEFAULT_ADMIN_ROLE = DEFAULT_ADMIN_ROLE_call;
          let MINTER_ROLE_call = async () => {
            let result = await this.call("MINTER_ROLE");
            return result;
          };
          this.MINTER_ROLE = MINTER_ROLE_call;
          let PAUSER_ROLE_call = async () => {
            let result = await this.call("PAUSER_ROLE");
            return result;
          };
          this.PAUSER_ROLE = PAUSER_ROLE_call;
          let _decimals_call = async () => {
            let result = await this.call("_decimals");
            return new eth_wallet_1.BigNumber(result);
          };
          this._decimals = _decimals_call;
          let allowanceParams = (params) => [params.owner, params.spender];
          let allowance_call = async (params) => {
            let result = await this.call("allowance", allowanceParams(params));
            return new eth_wallet_1.BigNumber(result);
          };
          this.allowance = allowance_call;
          let balanceOf_call = async (account) => {
            let result = await this.call("balanceOf", [account]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.balanceOf = balanceOf_call;
          let decimals_call = async () => {
            let result = await this.call("decimals");
            return new eth_wallet_1.BigNumber(result);
          };
          this.decimals = decimals_call;
          let getRoleAdmin_call = async (role) => {
            let result = await this.call("getRoleAdmin", [eth_wallet_1.Utils.stringToBytes32(role)]);
            return result;
          };
          this.getRoleAdmin = getRoleAdmin_call;
          let getRoleMemberParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.role), eth_wallet_1.Utils.toString(params.index)];
          let getRoleMember_call = async (params) => {
            let result = await this.call("getRoleMember", getRoleMemberParams(params));
            return result;
          };
          this.getRoleMember = getRoleMember_call;
          let getRoleMemberCount_call = async (role) => {
            let result = await this.call("getRoleMemberCount", [eth_wallet_1.Utils.stringToBytes32(role)]);
            return new eth_wallet_1.BigNumber(result);
          };
          this.getRoleMemberCount = getRoleMemberCount_call;
          let hasRoleParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.role), params.account];
          let hasRole_call = async (params) => {
            let result = await this.call("hasRole", hasRoleParams(params));
            return result;
          };
          this.hasRole = hasRole_call;
          let name_call = async () => {
            let result = await this.call("name");
            return result;
          };
          this.name = name_call;
          let paused_call = async () => {
            let result = await this.call("paused");
            return result;
          };
          this.paused = paused_call;
          let supportsInterface_call = async (interfaceId) => {
            let result = await this.call("supportsInterface", [interfaceId]);
            return result;
          };
          this.supportsInterface = supportsInterface_call;
          let symbol_call = async () => {
            let result = await this.call("symbol");
            return result;
          };
          this.symbol = symbol_call;
          let totalSupply_call = async () => {
            let result = await this.call("totalSupply");
            return new eth_wallet_1.BigNumber(result);
          };
          this.totalSupply = totalSupply_call;
          let approveParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.amount)];
          let approve_send = async (params) => {
            let result = await this.send("approve", approveParams(params));
            return result;
          };
          let approve_call = async (params) => {
            let result = await this.call("approve", approveParams(params));
            return result;
          };
          this.approve = Object.assign(approve_send, {
            call: approve_call
          });
          let burn_send = async (amount) => {
            let result = await this.send("burn", [eth_wallet_1.Utils.toString(amount)]);
            return result;
          };
          let burn_call = async (amount) => {
            let result = await this.call("burn", [eth_wallet_1.Utils.toString(amount)]);
            return;
          };
          this.burn = Object.assign(burn_send, {
            call: burn_call
          });
          let burnFromParams = (params) => [params.account, eth_wallet_1.Utils.toString(params.amount)];
          let burnFrom_send = async (params) => {
            let result = await this.send("burnFrom", burnFromParams(params));
            return result;
          };
          let burnFrom_call = async (params) => {
            let result = await this.call("burnFrom", burnFromParams(params));
            return;
          };
          this.burnFrom = Object.assign(burnFrom_send, {
            call: burnFrom_call
          });
          let decreaseAllowanceParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.subtractedValue)];
          let decreaseAllowance_send = async (params) => {
            let result = await this.send("decreaseAllowance", decreaseAllowanceParams(params));
            return result;
          };
          let decreaseAllowance_call = async (params) => {
            let result = await this.call("decreaseAllowance", decreaseAllowanceParams(params));
            return result;
          };
          this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call: decreaseAllowance_call
          });
          let grantRoleParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.role), params.account];
          let grantRole_send = async (params) => {
            let result = await this.send("grantRole", grantRoleParams(params));
            return result;
          };
          let grantRole_call = async (params) => {
            let result = await this.call("grantRole", grantRoleParams(params));
            return;
          };
          this.grantRole = Object.assign(grantRole_send, {
            call: grantRole_call
          });
          let increaseAllowanceParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.addedValue)];
          let increaseAllowance_send = async (params) => {
            let result = await this.send("increaseAllowance", increaseAllowanceParams(params));
            return result;
          };
          let increaseAllowance_call = async (params) => {
            let result = await this.call("increaseAllowance", increaseAllowanceParams(params));
            return result;
          };
          this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call: increaseAllowance_call
          });
          let mintParams = (params) => [params.to, eth_wallet_1.Utils.toString(params.amount)];
          let mint_send = async (params) => {
            let result = await this.send("mint", mintParams(params));
            return result;
          };
          let mint_call = async (params) => {
            let result = await this.call("mint", mintParams(params));
            return;
          };
          this.mint = Object.assign(mint_send, {
            call: mint_call
          });
          let pause_send = async () => {
            let result = await this.send("pause");
            return result;
          };
          let pause_call = async () => {
            let result = await this.call("pause");
            return;
          };
          this.pause = Object.assign(pause_send, {
            call: pause_call
          });
          let renounceRoleParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.role), params.account];
          let renounceRole_send = async (params) => {
            let result = await this.send("renounceRole", renounceRoleParams(params));
            return result;
          };
          let renounceRole_call = async (params) => {
            let result = await this.call("renounceRole", renounceRoleParams(params));
            return;
          };
          this.renounceRole = Object.assign(renounceRole_send, {
            call: renounceRole_call
          });
          let revokeRoleParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.role), params.account];
          let revokeRole_send = async (params) => {
            let result = await this.send("revokeRole", revokeRoleParams(params));
            return result;
          };
          let revokeRole_call = async (params) => {
            let result = await this.call("revokeRole", revokeRoleParams(params));
            return;
          };
          this.revokeRole = Object.assign(revokeRole_send, {
            call: revokeRole_call
          });
          let transferParams = (params) => [params.to, eth_wallet_1.Utils.toString(params.amount)];
          let transfer_send = async (params) => {
            let result = await this.send("transfer", transferParams(params));
            return result;
          };
          let transfer_call = async (params) => {
            let result = await this.call("transfer", transferParams(params));
            return result;
          };
          this.transfer = Object.assign(transfer_send, {
            call: transfer_call
          });
          let transferFromParams = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.amount)];
          let transferFrom_send = async (params) => {
            let result = await this.send("transferFrom", transferFromParams(params));
            return result;
          };
          let transferFrom_call = async (params) => {
            let result = await this.call("transferFrom", transferFromParams(params));
            return result;
          };
          this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
          });
          let unpause_send = async () => {
            let result = await this.send("unpause");
            return result;
          };
          let unpause_call = async () => {
            let result = await this.call("unpause");
            return;
          };
          this.unpause = Object.assign(unpause_send, {
            call: unpause_call
          });
        }
      };
      exports.TestERC20 = TestERC20;
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/contracts/index.js
  var require_contracts = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/contracts/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TestERC20 = exports.FakeTimeIsMoney = exports.TimeIsMoneyEther = exports.TimeIsMoney = exports.RewardsCommonStartDate = exports.Rewards = exports.ERC20PresetMinterPauser = exports.ERC20 = void 0;
      var ERC20_1 = require_ERC20();
      Object.defineProperty(exports, "ERC20", { enumerable: true, get: function() {
        return ERC20_1.ERC20;
      } });
      var ERC20PresetMinterPauser_1 = require_ERC20PresetMinterPauser();
      Object.defineProperty(exports, "ERC20PresetMinterPauser", { enumerable: true, get: function() {
        return ERC20PresetMinterPauser_1.ERC20PresetMinterPauser;
      } });
      var Rewards_1 = require_Rewards();
      Object.defineProperty(exports, "Rewards", { enumerable: true, get: function() {
        return Rewards_1.Rewards;
      } });
      var RewardsCommonStartDate_1 = require_RewardsCommonStartDate();
      Object.defineProperty(exports, "RewardsCommonStartDate", { enumerable: true, get: function() {
        return RewardsCommonStartDate_1.RewardsCommonStartDate;
      } });
      var TimeIsMoney_1 = require_TimeIsMoney();
      Object.defineProperty(exports, "TimeIsMoney", { enumerable: true, get: function() {
        return TimeIsMoney_1.TimeIsMoney;
      } });
      var TimeIsMoneyEther_1 = require_TimeIsMoneyEther();
      Object.defineProperty(exports, "TimeIsMoneyEther", { enumerable: true, get: function() {
        return TimeIsMoneyEther_1.TimeIsMoneyEther;
      } });
      var FakeTimeIsMoney_1 = require_FakeTimeIsMoney();
      Object.defineProperty(exports, "FakeTimeIsMoney", { enumerable: true, get: function() {
        return FakeTimeIsMoney_1.FakeTimeIsMoney;
      } });
      var TestERC20_1 = require_TestERC20();
      Object.defineProperty(exports, "TestERC20", { enumerable: true, get: function() {
        return TestERC20_1.TestERC20;
      } });
    }
  });

  // node_modules/@validapp/time-is-money-sdk/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@validapp/time-is-money-sdk/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Contracts = void 0;
      exports.Contracts = __importStar(require_contracts());
    }
  });

  // src/staking/index.tsx
  var import_components13 = __toModule(__require("@ijstech/components"));
  var import_global7 = __toModule(__require("@staking/global"));
  var import_store8 = __toModule(__require("@staking/store"));
  var import_staking_utils3 = __toModule(__require("@staking/staking-utils"));

  // src/staking/common.ts
  var import_store = __toModule(__require("@staking/store"));
  var getLockedTokenObject = (info, tokenInfo, tokenMap) => {
    if (info) {
      if (info.lockTokenType == import_store.LockTokenType.ERC20_Token) {
        if (!tokenMap) {
          tokenMap = (0, import_store.getTokenMap)();
        }
        return tokenMap[tokenInfo.tokenAddress];
      }
      if (info.lockTokenType == import_store.LockTokenType.LP_Token && tokenInfo.lpToken) {
        return tokenInfo.lpToken.object;
      } else if (info.lockTokenType == import_store.LockTokenType.VAULT_Token && tokenInfo.vaultToken) {
        return tokenInfo.vaultToken.object;
      }
    }
    return null;
  };
  var getLockedTokenSymbol = (info, token) => {
    if (info) {
      if (info.lockTokenType == import_store.LockTokenType.ERC20_Token) {
        return token ? token.symbol : "";
      }
      if (info.lockTokenType == import_store.LockTokenType.LP_Token) {
        return "LP";
      }
      if (info.lockTokenType == import_store.LockTokenType.VAULT_Token) {
        return token ? `vt${token.assetToken.symbol}` : "";
      }
    }
    return "";
  };
  var getLockedTokenIconPaths = (info, tokenObject, chainId, tokenMap) => {
    var _a;
    if (info && tokenObject) {
      if (!tokenMap) {
        tokenMap = (0, import_store.getTokenMap)();
      }
      if (info.lockTokenType == import_store.LockTokenType.ERC20_Token) {
        return [(0, import_store.getTokenIconPath)(tokenObject, chainId)];
      }
      if (info.lockTokenType == import_store.LockTokenType.LP_Token) {
        const nativeToken = (_a = import_store.DefaultTokens[chainId]) == null ? void 0 : _a.find((token) => token.isNative);
        const token0 = tokenMap[tokenObject.token0] || nativeToken;
        const token1 = tokenMap[tokenObject.token1] || nativeToken;
        return [(0, import_store.getTokenIconPath)(token0, chainId), (0, import_store.getTokenIconPath)(token1, chainId)];
      }
      if (info.lockTokenType == import_store.LockTokenType.VAULT_Token) {
        return [(0, import_store.getTokenIconPath)(tokenObject.assetToken, chainId)];
      }
    }
    return [];
  };

  // src/staking/index.tsx
  var import_assets5 = __toModule(__require("@staking/assets"));
  var import_moment2 = __toModule(require_moment());
  var import_eth_wallet4 = __toModule(__require("@ijstech/eth-wallet"));

  // src/result/result.tsx
  var import_components2 = __toModule(__require("@ijstech/components"));
  var import_store2 = __toModule(__require("@staking/store"));
  var import_global = __toModule(__require("@staking/global"));

  // src/result/result.css.ts
  var import_components = __toModule(__require("@ijstech/components"));
  var result_css_default = import_components.Styles.style({
    textAlign: "center",
    $nest: {
      "i-label > *": {
        color: "#fff",
        fontSize: ".875rem",
        wordBreak: "normal"
      },
      ".modal": {
        minWidth: "25%",
        maxWidth: "100%",
        width: 455
      },
      ".i-modal-close svg": {
        fill: "#F05E61"
      },
      ".i-modal_content": {
        padding: "0 2.563rem 3rem"
      },
      ".i-modal_header": {
        borderBottom: "none !important"
      },
      ".waiting-txt > *": {
        color: "#F6C958",
        fontSize: "1.125rem"
      },
      ".confirm-txt > *": {
        color: "#C2C3CB"
      },
      ".red-link *": {
        color: "#FD4A4C",
        textDecoration: "none"
      },
      ".mb": {
        marginBottom: "1.875rem"
      },
      "i-button": {
        padding: "1rem 2rem",
        textAlign: "center"
      },
      ".address-txt > *": {
        lineHeight: "1.5rem"
      },
      ".btn-submit": {
        padding: ".35rem 2.438rem",
        borderRadius: 5
      },
      ".btn-cancel": {
        padding: ".35rem 2.438rem",
        borderRadius: 5,
        background: "#2B304A 0% 0% no-repeat padding-box"
      }
    }
  });

  // src/result/result.tsx
  var import_assets = __toModule(__require("@staking/assets"));
  var Result = class extends import_components2.Module {
    get message() {
      return this._message;
    }
    set message(value) {
      this._message = value;
      this.renderUI();
    }
    constructor(parent, options) {
      super(parent, options);
    }
    async init() {
      this.classList.add(result_css_default);
      super.init();
      this.confirmModal.onClose = () => this.onCloseRedirect();
    }
    closeModal() {
      this.confirmModal.visible = false;
    }
    showModal() {
      this.confirmModal.visible = true;
    }
    onCloseRedirect() {
      var _a;
      const customRedirect = (_a = this.message) == null ? void 0 : _a.customRedirect;
      if (customRedirect && customRedirect.name) {
        this._message.customRedirect = null;
        if (customRedirect.params) {
          const queries = new URLSearchParams(customRedirect.params).toString();
          window.location.assign(`/#/${customRedirect.name}?${queries}`);
        } else {
          window.location.assign(`/#/${customRedirect.name}`);
        }
      }
    }
    async buildLink() {
      if (this.message.txtHash) {
        const chainId = await (0, import_store2.getWallet)().getChainId();
        (0, import_store2.viewOnExplorerByTxHash)(chainId, this.message.txtHash);
      }
    }
    async renderUI() {
      this.mainContent.innerHTML = "";
      const mainSection = await import_components2.VStack.create({
        horizontalAlignment: "center"
      });
      if (this.message.status === "warning") {
        mainSection.id = "warningSection";
        const loading = /* @__PURE__ */ this.$render("i-panel", {
          height: 100
        }, /* @__PURE__ */ this.$render("i-vstack", {
          id: "loadingElm",
          class: "i-loading-overlay",
          height: "100%",
          background: { color: "transparent" }
        }, /* @__PURE__ */ this.$render("i-vstack", {
          class: "i-loading-spinner",
          horizontalAlignment: "center",
          verticalAlignment: "center"
        }, /* @__PURE__ */ this.$render("i-icon", {
          class: "i-loading-spinner_icon",
          image: { url: import_assets.default.fullPath("img/loading.svg"), width: 24, height: 24 }
        }), /* @__PURE__ */ this.$render("i-label", {
          caption: "Loading...",
          font: { color: "#FD4A4C" },
          class: "i-loading-spinner_text"
        }))));
        mainSection.appendChild(loading);
        const section = new import_components2.VStack();
        section.margin = { bottom: 20 };
        const captionList = ["Waiting For Confirmation", this.message.content || "", "Confirm this transaction in your wallet"];
        const classList = ["waiting-txt mb-1", "mb-1", "confirm-txt"];
        for (let i = 0; i < captionList.length; i++) {
          const caption = captionList[i];
          const label = await import_components2.Label.create();
          label.caption = caption;
          if (classList[i]) {
            const classes = classList[i].split(" ");
            classes.forEach((className) => label.classList.add(className));
          }
          section.appendChild(label);
        }
        ;
        mainSection.appendChild(section);
      } else if (this.message.status === "success") {
        const chainId = await (0, import_store2.getWallet)().getChainId();
        const explorerName = (0, import_store2.getNetworkExplorerName)(chainId);
        const image = await import_components2.Image.create({
          width: "50px",
          url: import_assets.default.fullPath("img/success-icon.svg")
        });
        image.classList.add("inline-block", "mb");
        mainSection.appendChild(image);
        const label = await import_components2.Label.create();
        label.caption = "Transaction Submitted";
        label.classList.add("waiting-txt");
        label.classList.add("mb");
        mainSection.appendChild(label);
        const contentSection = await import_components2.Panel.create();
        contentSection.id = "contentSection";
        mainSection.appendChild(contentSection);
        const contentLabel = await import_components2.Label.create();
        contentLabel.caption = this.message.content || "";
        contentSection.appendChild(contentLabel);
        if (this.message.txtHash) {
          const section = new import_components2.VStack();
          const label1 = await import_components2.Label.create({
            caption: this.message.txtHash.substr(0, 33)
          });
          label1.classList.add("mb-1");
          section.appendChild(label1);
          const label2 = await import_components2.Label.create({
            caption: this.message.txtHash.substr(33, this.message.txtHash.length)
          });
          label2.classList.add("mb-1");
          section.appendChild(label2);
          const link = await import_components2.Label.create({
            caption: `View on ${explorerName}`
          });
          link.onClick = this.buildLink.bind(this);
          link.classList.add("red-link", "block", "mt-1", "pointer");
          section.appendChild(link);
          contentSection.appendChild(section);
        }
        const button = new import_components2.Button(mainSection, {
          width: "100%",
          caption: "Close"
        });
        button.classList.add("btn-os");
        button.classList.add("btn-approve");
        button.classList.add("mt-1");
        button.onClick = () => this.closeModal();
        mainSection.appendChild(button);
      } else {
        const image = await import_components2.Image.create({
          width: "50px",
          url: import_assets.default.fullPath("img/oswap_error.png")
        });
        image.classList.add("inline-block", "mb");
        mainSection.appendChild(image);
        const label = await import_components2.Label.create({
          caption: "Transaction Rejected."
        });
        label.classList.add("waiting-txt", "mb");
        mainSection.appendChild(label);
        const section = await import_components2.VStack.create();
        section.id = "contentSection";
        const contentLabel = await import_components2.Label.create({
          caption: await this.onErrMsgChanged()
        });
        contentLabel.classList.add("mb-1");
        section.appendChild(contentLabel);
        mainSection.appendChild(section);
        const button = new import_components2.Button(mainSection, {
          width: "100%",
          caption: "Cancel"
        });
        button.classList.add("btn-os");
        button.classList.add("btn-approve");
        button.classList.add("mt-1");
        button.onClick = () => this.closeModal();
        mainSection.appendChild(button);
      }
      this.mainContent.clearInnerHTML();
      this.mainContent.appendChild(mainSection);
    }
    async onErrMsgChanged() {
      if (this.message.status !== "error")
        return this.message.content;
      if (this.message.content.message && this.message.content.message.includes("Internal JSON-RPC error.")) {
        this.message.content.message = JSON.parse(this.message.content.message.replace("Internal JSON-RPC error.\n", "")).message;
      }
      return await (0, import_global.parseContractError)(this.message.content.message, this.message.obj);
    }
    render() {
      return /* @__PURE__ */ this.$render("i-modal", {
        id: "confirmModal",
        closeIcon: { name: "times" },
        class: "dark-modal confirm-modal",
        minHeight: "280px"
      }, /* @__PURE__ */ this.$render("i-panel", {
        id: "mainContent",
        class: "i-modal_content"
      }));
    }
  };
  Result = __decorateClass([
    (0, import_components2.customElements)("staking-result")
  ], Result);

  // src/config.ts
  var baseUrl = "https://openswap.xyz/#";
  var tokenIcon = "img/swap/openswap.png";
  var getTokenUrl = `${baseUrl}/swap`;
  var manageStakeUrl = `${baseUrl}/staking/manage-stake?address=`;

  // src/staking/staking.css.ts
  var import_components3 = __toModule(__require("@ijstech/components"));
  var import_assets2 = __toModule(__require("@staking/assets"));
  import_components3.Styles.Theme.defaultTheme.background.main = "#181e3e";
  import_components3.Styles.Theme.defaultTheme.background.paper = "#000";
  import_components3.Styles.Theme.defaultTheme.colors.primary.main = "#FF6600";
  import_components3.Styles.Theme.defaultTheme.colors.primary.light = "rgb(101, 115, 195)";
  import_components3.Styles.Theme.defaultTheme.colors.primary.contrastText = "#fff";
  import_components3.Styles.Theme.defaultTheme.colors.secondary.main = "#f50057";
  import_components3.Styles.Theme.defaultTheme.colors.secondary.light = "rgb(247, 51, 120)";
  import_components3.Styles.Theme.defaultTheme.action.active = "rgba(0, 0, 0, 0.54)";
  import_components3.Styles.Theme.defaultTheme.action.hover = "rgba(0, 0, 0, 0.04)";
  import_components3.Styles.Theme.defaultTheme.action.disabled = "rgba(0, 0, 0, 0.26)";
  var colorVar = {
    primaryButton: "transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box",
    primaryGradient: "linear-gradient(255deg,#f15e61,#b52082)",
    darkBg: "#181E3E 0% 0% no-repeat padding-box",
    primaryDisabled: "transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important"
  };
  import_components3.Styles.fontFace({
    fontFamily: "Proxima Nova",
    src: `url("${import_assets2.default.fullPath("fonts/proxima_nova/ProximaNovaBold.ttf")}") format("truetype")`,
    fontWeight: "bold",
    fontStyle: "normal"
  });
  import_components3.Styles.fontFace({
    fontFamily: "Proxima Nova",
    src: `url("${import_assets2.default.fullPath("fonts/proxima_nova/ProximaNovaBoldIt.ttf")}") format("truetype")`,
    fontWeight: "bold",
    fontStyle: "italic"
  });
  import_components3.Styles.fontFace({
    fontFamily: "Proxima Nova",
    src: `url("${import_assets2.default.fullPath("fonts/proxima_nova/ProximaNovaLight.ttf")}") format("truetype")`,
    fontWeight: "300",
    fontStyle: "normal"
  });
  import_components3.Styles.fontFace({
    fontFamily: "Proxima Nova",
    src: `url("${import_assets2.default.fullPath("fonts/proxima_nova/ProximaNovaLightIt.ttf")}") format("truetype")`,
    fontWeight: "300",
    fontStyle: "italic"
  });
  import_components3.Styles.fontFace({
    fontFamily: "Proxima Nova",
    src: `url("${import_assets2.default.fullPath("fonts/proxima_nova/ProximaNovaReg.ttf")}") format("truetype")`,
    fontWeight: "normal",
    fontStyle: "normal"
  });
  import_components3.Styles.fontFace({
    fontFamily: "Proxima Nova",
    src: `url("${import_assets2.default.fullPath("fonts/proxima_nova/ProximaNovaRegIt.ttf")}") format("truetype")`,
    fontWeight: "normal",
    fontStyle: "italic"
  });
  import_components3.Styles.fontFace({
    fontFamily: "Proxima Nova",
    src: `url("${import_assets2.default.fullPath("fonts/proxima_nova/ProximaNovaBold.ttf")}") format("truetype")`,
    fontWeight: "bold",
    fontStyle: "normal"
  });
  import_components3.Styles.fontFace({
    fontFamily: "Apple SD Gothic Neo",
    src: `url("${import_assets2.default.fullPath("fonts/FontsFree-Net-Apple-SD-Gothic-Neo-Bold.ttf")}") format("truetype")`,
    fontWeight: "bold",
    fontStyle: "normal"
  });
  import_components3.Styles.cssRule(".staking-component", {
    padding: "1rem",
    $nest: {
      "*": {
        fontFamily: "Proxima Nova"
      },
      "#stakingElm": {
        background: "#0c1234"
      },
      ".i-loading-overlay": {
        background: "#0c1234"
      },
      ".overflow-inherit": {
        overflow: "inherit"
      },
      "::selection": {
        color: "#fff",
        background: "#1890ff"
      },
      ".btn-os": {
        background: colorVar.primaryButton,
        height: "auto !important",
        color: "#fff",
        transition: "background .3s ease",
        fontSize: "1rem",
        $nest: {
          "i-icon.loading-icon": {
            marginInline: "0.25rem",
            width: "16px !important",
            height: "16px !important"
          }
        }
      },
      ".btn-os:not(.disabled):not(.is-spinning):hover, .btn-os:not(.disabled):not(.is-spinning):focus": {
        background: colorVar.primaryGradient,
        backgroundColor: "transparent",
        boxShadow: "none",
        opacity: 0.9
      },
      ".btn-os:not(.disabled):not(.is-spinning):focus": {
        boxShadow: "0 0 0 0.2rem rgb(0 123 255 / 25%)"
      },
      ".btn-os.disabled, .btn-os.is-spinning": {
        background: colorVar.primaryDisabled,
        opacity: 1
      },
      ".dark-bg, .dark-modal > div > div": {
        background: colorVar.darkBg,
        borderRadius: 5
      },
      ".btn-transparent, .btn-transparent:not(.disabled):focus, .btn-transparent:not(.disabled):hover": {
        background: "transparent",
        boxShadow: "none",
        backgroundColor: "transparent"
      },
      ".mr-0-5": {
        marginRight: ".5rem"
      },
      ".ml-0-5": {
        marginLeft: ".5rem"
      },
      ".mb-0-5": {
        marginBottom: ".5rem"
      },
      ".hidden": {
        display: "none !important"
      },
      ".no-wrap": {
        whiteSpace: "nowrap"
      },
      ".flex-nowrap": {
        flexWrap: "nowrap"
      },
      ".py-1": {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      },
      ".px-1": {
        paddingLeft: "1rem",
        paddingRight: "1rem"
      },
      ".align-middle": {
        alignItems: "center"
      },
      ".staking-layout": {
        width: "100%",
        marginInline: "auto"
      },
      "i-link": {
        display: "flex",
        $nest: {
          "&:hover *": {
            color: "#fff",
            opacity: 0.9
          }
        }
      },
      ".wrapper": {
        $nest: {
          "i-label:not(.duration) > *": {
            color: "#fff",
            fontSize: "0.875rem"
          },
          ".sticker": {
            position: "absolute",
            top: "-8px",
            right: "-33px",
            borderInline: "50px solid transparent",
            borderBottom: "50px solid #20bf55",
            transform: "rotate(45deg)",
            $nest: {
              "&.sold-out": {
                borderBottomColor: "#ccc"
              },
              "&.closed": {
                borderBottomColor: "#0c1234",
                $nest: {
                  "i-label > *": {
                    color: "#f7d064 !important"
                  },
                  "i-icon": {
                    fill: "#f7d064"
                  }
                }
              },
              ".sticker-text": {
                position: "absolute",
                right: "-1.6rem",
                top: "0.75rem",
                width: "50px",
                lineHeight: "1rem"
              },
              "i-label": {
                display: "flex",
                justifyContent: "center"
              },
              "i-label > *": {
                color: "#3f3f42 !important",
                fontSize: "0.75rem"
              },
              "i-icon": {
                width: "14px",
                height: "14px",
                display: "block",
                margin: "auto"
              }
            }
          },
          ".banner": {
            position: "relative",
            height: "100%",
            minHeight: "485px",
            borderTopLeftRadius: "26px",
            borderBottomLeftRadius: "26px",
            padding: "2.5rem 0.75rem"
          },
          ".campaign-name": {
            $nest: {
              "i-image": {
                marginRight: "0.25rem"
              },
              "i-label > *": {
                fontSize: "1.25rem",
                fontWeight: "700"
              }
            }
          },
          ".campaign-description": {
            display: "flex",
            paddingBlock: "2.5rem"
          },
          ".row-item": {
            marginBlock: "0.15rem"
          },
          ".col-item": {
            display: "flex",
            alignItems: "flex-start",
            marginRight: "0.25rem",
            width: "auto",
            $nest: {
              ".custom-icon": {
                display: "flex",
                width: "14px",
                height: "14px",
                marginRight: "0.15rem",
                marginTop: "0.1rem"
              }
            }
          },
          ".simplified": {
            marginTop: "0.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            $nest: {
              ".simplified-description": {
                display: "flex",
                alignItems: "center",
                marginInline: "auto",
                $nest: {
                  "i-image": {
                    display: "flex",
                    marginLeft: "0.25rem"
                  }
                }
              },
              ".simplified-link": {
                textAlign: "center",
                $nest: {
                  "a": {
                    color: "#fff",
                    fontWeight: "bold",
                    fontFamily: "Proxima Nova",
                    marginInline: "0.25rem",
                    textDecorationLine: "underline"
                  }
                }
              }
            }
          },
          ".get-token": {
            cursor: "pointer",
            justifyContent: "center",
            marginBlock: "1rem",
            marginInline: "auto",
            width: "fit-content",
            $nest: {
              "i-label": {
                marginRight: "0.25rem"
              },
              "i-image": {
                marginRight: "0.25rem"
              }
            }
          },
          ".custom-timer": {
            display: "flex",
            $nest: {
              ".timer-value": {
                padding: "0.5rem",
                borderRadius: "0.5rem",
                fontWeight: "bold"
              },
              ".timer-unit": {
                marginInline: "0.25rem",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold"
              }
            }
          },
          ".bg-color": {
            display: "flex",
            flexDirection: "column",
            color: "#fff",
            minHeight: "485px",
            height: "100%",
            borderRadius: "15px",
            paddingBottom: "1rem",
            position: "relative"
          },
          ".header-info": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "1rem",
            $nest: {
              "i-hstack i-label > *": {
                fontSize: "1.25rem",
                marginLeft: "0.25rem",
                lineHeight: "1.875rem"
              }
            }
          },
          ".container-custom": {
            display: "flex",
            alignItems: "stretch",
            marginBottom: "1rem"
          },
          ".row-custom": {
            margin: "1rem",
            borderRadius: "26px",
            width: "100%"
          },
          ".column-custom": {
            width: "25%",
            padding: "0 1rem",
            height: "100%",
            $nest: {
              "&:first-child": {
                marginLeft: "-30px"
              }
            }
          },
          ".img-custom": {
            display: "flex",
            justifyContent: "center",
            paddingTop: "1.5rem",
            marginBottom: "0.75rem"
          },
          ".group-img": {
            display: "flex",
            justifyContent: "center",
            $nest: {
              "i-icon": {
                margin: "auto 0.25rem",
                fill: "var(--colors-primary-main)"
              }
            }
          },
          ".info-stake": {
            width: "100%",
            padding: "0.5rem 0.75rem",
            $nest: {
              "i-hstack": {
                padding: "0.175rem 0"
              },
              "i-label:first-child": {
                display: "flex"
              },
              "i-label:last-child": {
                fontWeight: 700,
                textAlign: "right"
              }
            }
          },
          ".custom-divider": {
            borderTop: "2px solid",
            marginBlock: "1rem"
          },
          ".btn-stake": {
            width: "100%",
            padding: "0.625rem 0",
            marginBottom: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700
          },
          ".view-contract": {
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            $nest: {
              "a": {
                display: "flex",
                alignItems: "center"
              },
              "i-label": {
                marginRight: "0.25rem"
              }
            }
          },
          ".no-campaign": {
            margin: "0 1rem",
            padding: "3rem 2rem",
            borderRadius: "26px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            $nest: {
              "i-label > *": {
                fontSize: "1.5rem",
                marginTop: "1rem"
              }
            }
          }
        }
      },
      ".ml-auto": {
        marginLeft: "auto"
      },
      ".mr-025": {
        marginRight: "0.25rem"
      },
      "#loadingElm.i-loading--active": {
        marginTop: "2rem",
        position: "initial",
        $nest: {
          "#stakingElm": {
            display: "none !important"
          },
          ".i-loading-spinner": {
            marginTop: "2rem"
          }
        }
      },
      ".connect-wallet": {
        display: "block",
        textAlign: "center",
        paddingTop: "1rem"
      },
      "@media (max-width: 1240px)": {
        $nest: {
          ".wrapper": {
            $nest: {
              ".banner": {
                borderRadius: "26px",
                minHeight: "auto",
                height: "auto"
              },
              ".row-custom": {
                maxWidth: "520px",
                margin: "1rem auto"
              },
              ".column-custom": {
                width: "100%",
                height: "auto",
                margin: "1rem 0",
                $nest: {
                  "&:first-child": {
                    margin: "0",
                    padding: "0"
                  }
                }
              }
            }
          }
        }
      },
      "@media (max-width: 992px)": {
        $nest: {
          ".header": {
            flexDirection: "column"
          }
        }
      }
    }
  });

  // src/staking/manageStake/manage-stake.tsx
  var import_components5 = __toModule(__require("@ijstech/components"));
  var import_global2 = __toModule(__require("@staking/global"));
  var import_store3 = __toModule(__require("@staking/store"));
  var import_staking_utils = __toModule(__require("@staking/staking-utils"));
  var import_assets3 = __toModule(__require("@staking/assets"));
  var import_eth_wallet = __toModule(__require("@ijstech/eth-wallet"));

  // src/staking/manageStake/manage-stake.css.ts
  var import_components4 = __toModule(__require("@ijstech/components"));
  import_components4.Styles.cssRule(".manage-stake", {
    $nest: {
      "input": {
        $nest: {
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: "0"
          },
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: "0"
          }
        }
      },
      ".ml-auto": {
        marginLeft: "auto"
      },
      ".cursor-pointer": {
        cursor: "pointer"
      },
      ".manage-wrapper": {
        width: "480px"
      },
      ".question-icon": {
        border: `2px solid #fff`,
        borderRadius: "50%",
        padding: "3px",
        opacity: "0.8"
      },
      ".manage-header": {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "1rem",
        marginBottom: "1rem",
        borderBottom: "2px solid var(--divider)"
      },
      ".main-content": {
        fontSize: ".875rem",
        $nest: {
          "i-label > *": {
            color: "#fff",
            fontSize: "1rem",
            wordBreak: "normal"
          },
          ".section-info": {
            $nest: {
              "i-panel": {
                display: "flex",
                flexWrap: "wrap"
              },
              "i-vstack": {
                alignItems: "flex-start",
                marginBottom: "2rem"
              }
            }
          },
          ".description": {
            background: "linear-gradient(255deg,#f15e61,#b52082)",
            padding: "0.75rem 1rem",
            marginBottom: "1rem",
            $nest: {
              "i-label": {
                display: "block",
                padding: "0.5rem 0"
              }
            }
          },
          ".input--token-box": {
            border: `1px solid ${"#fff"}`,
            borderRadius: "5px",
            padding: "0.75rem"
          },
          ".input--token-box *": {
            fontSize: "1rem"
          },
          ".img-token": {
            marginRight: "0.25rem"
          },
          ".text-normal > *": {
            fontWeight: "normal !important",
            fontSize: "1rem !important"
          },
          ".btn-max": {
            display: "flex",
            alignItems: "center",
            paddingInline: "0.5rem",
            marginRight: "0.5rem"
          },
          ".btn-approve": {
            padding: "1rem 0.25rem",
            textAlign: "center",
            marginBlock: ".25rem"
          },
          ".w-50": {
            width: "50%"
          },
          ".w-100": {
            width: "100%"
          },
          ".token-input > input": {
            border: "none",
            width: "100% !important",
            backgroundColor: "transparent",
            color: "#fff",
            fontSize: "1.25rem",
            textAlign: "left"
          }
        }
      },
      ".text-yellow *": {
        color: `#f6c958 !important`,
        fontSize: "1.25rem !important",
        fontWeight: "bold"
      },
      ".mr-025": {
        marginRight: "0.25rem"
      },
      ".mb-025": {
        marginBottom: "0.25rem"
      },
      ".mb-075": {
        marginBottom: "0.75rem"
      },
      "#loadingElm.i-loading--active": {
        marginTop: "2rem",
        position: "initial",
        $nest: {
          ".i-loading-spinner": {
            marginTop: "2rem"
          }
        }
      },
      ".stake-modal": {
        $nest: {
          ".i-modal_header": {
            display: "none"
          },
          ".modal": {
            background: "#192046",
            width: 480,
            maxWidth: "100%",
            borderRadius: "1rem",
            padding: "1.5rem 1rem",
            color: "#fff"
          }
        }
      },
      ".custom-modal": {
        $nest: {
          ".i-modal_header": {
            display: "none"
          },
          ".modal": {
            background: "#192046",
            width: 480,
            maxWidth: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "1rem",
            color: "#fff"
          },
          ".manage-header": {
            marginTop: "0.5rem",
            marginBottom: 0,
            paddingBottom: 0,
            border: "none",
            justifyContent: "flex-end",
            $nest: {
              "i-icon": {
                fill: "#f15e61"
              }
            }
          },
          "i-label > *": {
            fontSize: ".875rem",
            wordBreak: "normal"
          },
          ".i-modal_content": {
            padding: "0 1rem 1rem"
          },
          ".description-time": {
            display: "inline-block",
            $nest: {
              "i-label": {
                marginRight: "0.25rem"
              },
              "i-label > *": {
                color: "#f15e61",
                display: "inherit"
              }
            }
          },
          ".group-btn": {
            marginTop: "2rem"
          },
          "i-button": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "50px !important",
            fontWeight: 600,
            borderRadius: 5,
            margin: "0.5rem"
          },
          ".btn-cancel": {
            background: "#eaecef",
            color: "#0c1234"
          },
          ".btn-submit": {
            textAlign: "center"
          },
          ".btn-submit > *": {
            color: `${"#fff"} !important`
          }
        }
      }
    }
  });

  // src/staking/manageStake/manage-stake.tsx
  var import_moment = __toModule(require_moment());
  var CurrentMode;
  (function(CurrentMode2) {
    CurrentMode2[CurrentMode2["STAKE"] = 0] = "STAKE";
    CurrentMode2[CurrentMode2["UNLOCK"] = 1] = "UNLOCK";
  })(CurrentMode || (CurrentMode = {}));
  var ManageStake = class extends import_components5.Module {
    constructor(parent, options) {
      super(parent, options);
      this.stakingInfo = {};
      this.lockedTokenObject = {};
      this.maxQty = 0;
      this.availableQty = "0";
      this.balance = "0";
      this.perAddressCap = "0";
      this.stakeQty = "0";
      this.tokenSymbol = "";
      this.currentMode = 0;
      this.tokenBalances = {};
      this.tokenMap = {};
      this.showModal = async (data, actionKey) => {
        this.address = data.address;
        this.stakingInfo = data;
        this.onSetupPage((0, import_store3.isWalletConnected)(), actionKey);
        if (this.currentMode === 1) {
          this.modalActions.visible = true;
        } else {
          this.modalStake.visible = true;
        }
      };
      this.showResultMessage = (result, status, content) => {
        if (!result)
          return;
        let params = { status };
        if (status === "success") {
          params.txtHash = content;
        } else {
          params.content = content;
        }
        result.message = __spreadValues({}, params);
        result.showModal();
      };
      this.onApproveToken = async () => {
        this.showResultMessage(this.stakingResult, "warning", `Approve ${this.tokenSymbol}`);
        this.approvalModelAction.doApproveAction(this.lockedTokenObject, this.inputAmount.value);
      };
      this.onStake = async () => {
        this.approvalModelAction.doPayAction();
      };
      this.onInputAmount = () => {
        var _a;
        (0, import_global2.limitInputNumber)(this.inputAmount, ((_a = this.lockedTokenObject) == null ? void 0 : _a.decimals) || 18);
        this.approvalModelAction.checkAllowance(this.lockedTokenObject, this.inputAmount.value);
      };
      this.setMaxBalance = () => {
        var _a;
        this.inputAmount.value = import_eth_wallet.BigNumber.min(this.availableQty, this.balance, this.perAddressCap).toFixed();
        (0, import_global2.limitInputNumber)(this.inputAmount, ((_a = this.lockedTokenObject) == null ? void 0 : _a.decimals) || 18);
        this.approvalModelAction.checkAllowance(this.lockedTokenObject, this.inputAmount.value);
      };
      this.renderStakingInfo = async (info) => {
        if (!info || !Object.keys(info).length) {
          clearInterval(this.timer);
          this.lbDuration.caption = "-";
          this.lbMaxQty.caption = "-";
          this.lbAvailableQty.caption = "-";
          this.lbMaturity.caption = "-";
          this.colIndividualCap.visible = false;
          this.colYourStakeQty.visible = false;
          this.sectionEarnedQty.visible = false;
          this.btnApprove.visible = false;
          if (!(0, import_store3.isWalletConnected)()) {
            this.lbBalance.caption = "Balance: 0";
            this.btnMax.visible = false;
          }
          return;
        }
        ;
        let lpTokenData = {};
        let vaultTokenData = {};
        const { tokenAddress, lockTokenType } = info;
        if (tokenAddress) {
          if (lockTokenType == import_store3.LockTokenType.LP_Token) {
            lpTokenData = {
              "object": await (0, import_staking_utils.getLPObject)(tokenAddress),
              "balance": await (0, import_staking_utils.getLPBalance)(tokenAddress)
            };
          } else if (lockTokenType == import_store3.LockTokenType.VAULT_Token) {
            vaultTokenData = {
              "object": await (0, import_staking_utils.getVaultObject)(tokenAddress),
              "balance": await (0, import_staking_utils.getVaultBalance)(tokenAddress)
            };
          }
        }
        const tokenInfo = {
          tokenAddress,
          lpToken: lpTokenData,
          vaultToken: vaultTokenData
        };
        this.lockedTokenObject = getLockedTokenObject(info, tokenInfo, this.tokenMap);
        const symbol = getLockedTokenSymbol(info, this.lockedTokenObject);
        this.tokenSymbol = symbol;
        this.lbDuration.caption = info.duration;
        this.perAddressCap = info.perAddressCap;
        this.maxQty = info.maxTotalLock;
        this.stakeQty = info.stakeQty;
        this.availableQty = new import_eth_wallet.BigNumber(info.maxTotalLock).minus(info.totalLocked).toFixed();
        this.lbMaxQty.caption = `${(0, import_global2.formatNumber)(this.maxQty)} ${symbol}`;
        this.lbAvailableQty.caption = `${(0, import_global2.formatNumber)(this.availableQty)} ${symbol}`;
        this.btnApprove.visible = false;
        clearInterval(this.timer);
        if (this.currentMode === 1) {
          const totalCredit = new import_eth_wallet.BigNumber(info.totalCredit);
          if (totalCredit.isZero()) {
            this.sectionUnlockMessage.visible = true;
            this.btnStake.onClick = () => {
              this.modalActions.visible = true;
            };
          } else {
            this.btnStake.onClick = () => this.onStake();
            this.sectionUnlockMessage.visible = false;
          }
          this.lbTitle.caption = "Manage Locked Staking";
          this.colIndividualCap.visible = false;
          this.colYourStakeQty.visible = true;
          this.sectionEarnedQty.visible = true;
          this.sectionTokenInput.visible = false;
          this.colYourStakeQty.innerHTML = "";
          this.colYourStakeQty.appendChild(/* @__PURE__ */ this.$render("i-label", {
            caption: "Your Stake QTY"
          }));
          this.colYourStakeQty.appendChild(/* @__PURE__ */ this.$render("i-label", {
            class: "text-yellow",
            caption: `${(0, import_global2.formatNumber)(this.stakeQty)} ${symbol}`
          }));
          const maturity = (0, import_moment.default)(info.releaseTime).format("YYYY-MM-DD HH:mm:ss");
          this.lbMaturity.caption = maturity;
          this.lbTimer.caption = `Please note that you will forfeit your rewards by unstaking. You are not eligible for rewards until <b>${maturity}</b>`;
          this.sectionEarnedQty.innerHTML = "";
          info.rewards.forEach((rewardOption) => {
            var _a, _b;
            const earnedQty = (0, import_global2.formatNumber)(totalCredit.times(rewardOption.rate));
            const rewardSymbol = ((_b = this.tokenMap[(_a = rewardOption.tokenAddress) == null ? void 0 : _a.toLowerCase()]) == null ? void 0 : _b.symbol) || "";
            this.sectionEarnedQty.appendChild(/* @__PURE__ */ this.$render("i-vstack", {
              class: "w-50"
            }, /* @__PURE__ */ this.$render("i-label", {
              caption: "Your Earned QTY"
            }), /* @__PURE__ */ this.$render("i-label", {
              class: "text-yellow",
              caption: `${earnedQty} ${rewardSymbol}`
            })));
          });
          this.approvalModelAction.checkAllowance(this.lockedTokenObject, this.stakeQty);
        } else {
          this.lbTitle.caption = "Create Locked Staking";
          this.btnStake.onClick = () => this.onStake();
          this.btnStake.caption = "Stake";
          this.btnStake.enabled = false;
          this.sectionUnlockMessage.visible = false;
          this.colIndividualCap.visible = true;
          this.colYourStakeQty.visible = false;
          this.sectionEarnedQty.visible = false;
          if (!!tokenAddress) {
            const decimals = info.decimalsOffset || 0;
            if (lockTokenType == import_store3.LockTokenType.ERC20_Token) {
              let balances = (0, import_store3.getTokenBalances)();
              if (!Object.keys(balances).length) {
                await (0, import_store3.setTokenBalances)();
                balances = (0, import_store3.getTokenBalances)();
              }
              this.tokenBalances = Object.keys(balances).reduce((accumulator, key) => {
                accumulator[key.toLowerCase()] = balances[key];
                return accumulator;
              }, {});
              this.balance = this.tokenBalances[tokenAddress] || "0";
            } else if (lockTokenType == import_store3.LockTokenType.LP_Token) {
              this.balance = new import_eth_wallet.BigNumber(lpTokenData.balance || 0).shiftedBy(decimals).toFixed();
            } else if (lockTokenType == import_store3.LockTokenType.VAULT_Token) {
              this.balance = new import_eth_wallet.BigNumber(vaultTokenData.balance || 0).shiftedBy(decimals).toFixed();
            }
            this.btnMax.visible = true;
            this.btnMax.enabled = new import_eth_wallet.BigNumber(this.balance).gt(0);
            this.lbBalance.caption = `Balance: ${(0, import_global2.formatNumber)(this.balance)}`;
            this.rowImgToken.innerHTML = "";
            const lockedTokenIconPaths = getLockedTokenIconPaths(info, this.lockedTokenObject, this.chainId, this.tokenMap);
            lockedTokenIconPaths.forEach((tokenPath) => {
              this.rowImgToken.appendChild(/* @__PURE__ */ this.$render("i-image", {
                width: 28,
                class: "inline-block img-token",
                url: import_assets3.default.fullPath(tokenPath)
              }));
            });
            this.rowImgToken.appendChild(/* @__PURE__ */ this.$render("i-label", {
              class: "text-yellow",
              caption: symbol
            }));
            this.sectionTokenInput.visible = true;
          } else {
            this.sectionTokenInput.visible = false;
          }
          this.colIndividualCap.innerHTML = "";
          this.colIndividualCap.appendChild(/* @__PURE__ */ this.$render("i-label", {
            caption: "Individual Cap"
          }));
          this.colIndividualCap.appendChild(/* @__PURE__ */ this.$render("i-label", {
            class: "text-yellow",
            caption: `${(0, import_global2.formatNumber)(info.perAddressCap)} ${symbol}`
          }));
          const setMaturityText = () => {
            const val = (0, import_moment.default)().add(info.minLockTime, "seconds").format("YYYY-MM-DD HH:mm:ss");
            this.lbMaturity.caption = val;
          };
          setMaturityText();
          this.timer = setInterval(setMaturityText, 1e3);
        }
      };
      this.onSetupPage = async (connected, actionKey) => {
        if (!connected) {
          this.btnStake.enabled = false;
          this.btnApprove.visible = false;
          this.inputAmount.enabled = false;
          this.renderStakingInfo(null);
          this.loadingElm.visible = false;
          return;
        }
        this.loadingElm.visible = true;
        this.inputAmount.enabled = true;
        this.tokenMap = (0, import_store3.getTokenMap)();
        this.chainId = (0, import_store3.getChainId)();
        this.currentMode = CurrentMode[this.stakingInfo.mode.toUpperCase()];
        await this.initApprovalModelAction(actionKey);
        await this.renderStakingInfo(this.stakingInfo);
        this.loadingElm.visible = false;
      };
      this.closeStakeModal = () => {
        this.modalStake.visible = false;
      };
      this.closeModal = () => {
        this.modalActions.visible = false;
      };
    }
    async initApprovalModelAction(actionKey) {
      this.approvalModelAction = (0, import_staking_utils.getApprovalModelAction)(this.address, {
        sender: this,
        payAction: async () => {
          var _a;
          if (this.modalActions.visible) {
            this.modalActions.visible = false;
          }
          this.showResultMessage(this.stakingResult, "warning", `${this.currentMode === 0 ? "Stake" : "Unlock"} ${this.tokenSymbol}`);
          if (this.currentMode === 0) {
            const decimals = ((_a = this.stakingInfo) == null ? void 0 : _a.decimalsOffset) || 0;
            const amount = new import_eth_wallet.BigNumber(this.inputAmount.value).shiftedBy(-decimals).toFixed();
            (0, import_staking_utils.lockToken)(this.lockedTokenObject, amount, this.address);
          } else {
            (0, import_staking_utils.withdrawToken)(this.address);
          }
        },
        onToBeApproved: async (token) => {
          if (new import_eth_wallet.BigNumber(this.inputAmount.value).lte(import_eth_wallet.BigNumber.min(this.availableQty, this.balance, this.perAddressCap))) {
            this.btnApprove.caption = `Approve ${token.symbol}`;
            this.btnApprove.visible = true;
            this.btnApprove.enabled = true;
          } else {
            this.btnApprove.visible = false;
          }
          this.btnStake.enabled = false;
        },
        onToBePaid: async (token) => {
          this.btnApprove.visible = false;
          if (this.currentMode === 0) {
            const amount = new import_eth_wallet.BigNumber(this.inputAmount.value);
            if (amount.gt(this.balance)) {
              this.btnStake.caption = "Insufficient Balance";
              this.btnStake.enabled = false;
              return;
            }
            this.btnStake.caption = "Stake";
            if (amount.isNaN() || amount.lte(0) || amount.gt(import_eth_wallet.BigNumber.min(this.availableQty, this.balance, this.perAddressCap))) {
              this.btnStake.enabled = false;
            } else {
              this.btnStake.enabled = true;
            }
          } else {
            this.btnStake.caption = "Unstake";
            this.btnStake.enabled = new import_eth_wallet.BigNumber(this.stakeQty).gt(0);
          }
        },
        onApproving: async (token, receipt) => {
          if (receipt) {
            this.showResultMessage(this.stakingResult, "success", receipt);
            this.btnApprove.caption = `Approving`;
            this.btnApprove.enabled = false;
            this.btnApprove.rightIcon.visible = true;
            this.btnMax.enabled = false;
            this.inputAmount.enabled = false;
            (0, import_store3.setStakingStatus)(actionKey, true, "Approving");
          }
        },
        onApproved: async (token) => {
          this.btnApprove.rightIcon.visible = false;
          this.btnApprove.visible = false;
          this.btnMax.enabled = new import_eth_wallet.BigNumber(this.balance).gt(0);
          this.inputAmount.enabled = true;
          (0, import_store3.setStakingStatus)(actionKey, false, "Stake");
        },
        onApprovingError: async (token, err) => {
          this.showResultMessage(this.stakingResult, "error", err);
          this.btnApprove.rightIcon.visible = false;
          this.btnMax.enabled = new import_eth_wallet.BigNumber(this.balance).gt(0);
          this.inputAmount.enabled = true;
          (0, import_store3.setStakingStatus)(actionKey, false, "Stake");
        },
        onPaying: async (receipt) => {
          if (receipt) {
            this.showResultMessage(this.stakingResult, "success", receipt);
            this.inputAmount.enabled = false;
            this.btnMax.enabled = false;
            const caption = this.currentMode === 0 ? "Staking" : "Unstaking";
            this.btnStake.caption = caption;
            this.btnStake.enabled = false;
            this.btnStake.rightIcon.visible = true;
            (0, import_store3.setStakingStatus)(actionKey, true, caption);
          }
        },
        onPaid: async () => {
          if (this.onRefresh) {
            await this.onRefresh();
          }
          this.inputAmount.value = "";
          this.inputAmount.enabled = true;
          this.btnMax.enabled = true;
          const caption = this.currentMode === 0 ? "Stake" : "Unstake";
          this.btnStake.caption = caption;
          this.btnStake.rightIcon.visible = false;
          this.modalActions.visible = false;
        },
        onPayingError: async (err) => {
          this.inputAmount.enabled = true;
          this.btnMax.enabled = true;
          const caption = this.currentMode === 0 ? "Stake" : "Unstake";
          this.btnStake.caption = caption;
          this.btnStake.rightIcon.visible = false;
          this.showResultMessage(this.stakingResult, "error", err);
          (0, import_store3.setStakingStatus)(actionKey, false, caption);
        }
      });
    }
    init() {
      super.init();
      this.stakingResult = new Result();
      this.appendChild(this.stakingResult);
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        class: "manage-stake"
      }, /* @__PURE__ */ this.$render("i-modal", {
        id: "modalStake",
        class: "stake-modal",
        closeIcon: { name: "times" }
      }, /* @__PURE__ */ this.$render("i-panel", {
        id: "containerStake"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        horizontalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-vstack", {
        class: "manage-wrapper"
      }, /* @__PURE__ */ this.$render("i-panel", {
        class: "main-content"
      }, /* @__PURE__ */ this.$render("i-vstack", {
        id: "loadingElm",
        class: "i-loading-overlay",
        background: { color: "#192046" }
      }, /* @__PURE__ */ this.$render("i-vstack", {
        class: "i-loading-spinner",
        horizontalAlignment: "center",
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-icon", {
        class: "i-loading-spinner_icon",
        image: { url: import_assets3.default.fullPath("img/loading.svg"), width: 36, height: 36 }
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "Loading...",
        font: { color: "#FD4A4C", size: "1.5em" },
        class: "i-loading-spinner_text"
      }))), /* @__PURE__ */ this.$render("i-panel", {
        class: "manage-header"
      }, /* @__PURE__ */ this.$render("i-icon", {
        width: 20,
        height: 20,
        fill: "#fff",
        class: "cursor-pointer pointer",
        name: "arrow-left",
        onClick: this.closeStakeModal
      }), /* @__PURE__ */ this.$render("i-label", {
        id: "lbTitle",
        caption: "Create Locked Staking",
        class: "text-yellow"
      }), /* @__PURE__ */ this.$render("i-icon", {
        width: 20,
        height: 20,
        fill: "#fff",
        class: "question-icon",
        name: "question",
        tooltip: {
          content: "You can lock your stake for a certain period of time.",
          placement: "bottom"
        }
      })), /* @__PURE__ */ this.$render("i-panel", {
        id: "sectionUnlockMessage",
        visible: true,
        class: "description"
      }, /* @__PURE__ */ this.$render("i-label", {
        caption: "Note that you will forfeit your rewards if you unstake before the maturity date."
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "By unlocking, you will lose your progress, are you sure?"
      })), /* @__PURE__ */ this.$render("i-panel", {
        class: "section-info"
      }, /* @__PURE__ */ this.$render("i-panel", {
        visible: false
      }, /* @__PURE__ */ this.$render("i-vstack", {
        class: "w-100"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "mr-025",
        caption: "Duration (days)"
      }), /* @__PURE__ */ this.$render("i-icon", {
        width: 18,
        height: 18,
        fill: "#fff",
        class: "question-icon",
        name: "question",
        tooltip: {
          content: "You can lock your stake for a certain period of time.",
          placement: "bottom"
        }
      })), /* @__PURE__ */ this.$render("i-label", {
        id: "lbDuration",
        class: "text-yellow",
        caption: "-"
      })), /* @__PURE__ */ this.$render("i-vstack", {
        class: "w-50"
      }, /* @__PURE__ */ this.$render("i-label", {
        caption: "Max QTY."
      }), /* @__PURE__ */ this.$render("i-label", {
        id: "lbMaxQty",
        class: "text-yellow",
        caption: "-"
      })), /* @__PURE__ */ this.$render("i-vstack", {
        class: "w-50"
      }, /* @__PURE__ */ this.$render("i-label", {
        caption: "Available QTY."
      }), /* @__PURE__ */ this.$render("i-label", {
        id: "lbAvailableQty",
        class: "text-yellow",
        caption: "-"
      })), /* @__PURE__ */ this.$render("i-vstack", {
        id: "colYourStakeQty",
        class: "w-50"
      }), /* @__PURE__ */ this.$render("i-panel", {
        id: "sectionEarnedQty",
        class: "w-100"
      }), /* @__PURE__ */ this.$render("i-vstack", {
        id: "colIndividualCap",
        class: "w-50"
      })), /* @__PURE__ */ this.$render("i-vstack", {
        class: "w-100"
      }, /* @__PURE__ */ this.$render("i-label", {
        caption: "Maturity"
      }), /* @__PURE__ */ this.$render("i-label", {
        id: "lbMaturity",
        class: "text-yellow",
        caption: "-"
      }))), /* @__PURE__ */ this.$render("i-panel", {
        id: "sectionTokenInput",
        class: "input--token-box mb-1"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        class: "mb-075"
      }, /* @__PURE__ */ this.$render("i-label", {
        caption: "Input"
      }), /* @__PURE__ */ this.$render("i-label", {
        id: "lbBalance",
        class: "text-yellow text-normal w-100 text-right",
        caption: "-"
      })), /* @__PURE__ */ this.$render("i-hstack", null, /* @__PURE__ */ this.$render("i-input", {
        id: "inputAmount",
        inputType: "number",
        placeholder: "0.0",
        class: "token-input w-100 mr-025",
        width: "100%",
        onChanged: () => this.onInputAmount()
      }), /* @__PURE__ */ this.$render("i-button", {
        id: "btnMax",
        caption: "Max",
        enabled: false,
        class: "btn-os btn-max",
        onClick: () => this.setMaxBalance()
      }), /* @__PURE__ */ this.$render("i-hstack", {
        id: "rowImgToken",
        verticalAlignment: "center"
      }))), /* @__PURE__ */ this.$render("i-hstack", null, /* @__PURE__ */ this.$render("i-button", {
        id: "btnApprove",
        caption: "Approve Token",
        enabled: false,
        visible: false,
        width: "100%",
        class: "btn-os btn-approve mb-075 mr-025",
        rightIcon: { spin: true, visible: false },
        onClick: () => this.onApproveToken()
      }), /* @__PURE__ */ this.$render("i-button", {
        id: "btnStake",
        caption: "Stake",
        enabled: false,
        width: "100%",
        rightIcon: { spin: true, visible: false },
        class: "btn-os btn-approve mb-075"
      }))))))), /* @__PURE__ */ this.$render("i-modal", {
        id: "modalActions",
        class: "custom-modal",
        closeIcon: { name: "times" }
      }, /* @__PURE__ */ this.$render("i-panel", {
        class: "manage-header"
      }, /* @__PURE__ */ this.$render("i-icon", {
        width: 24,
        height: 24,
        name: "times",
        class: "cursor-pointer",
        onClick: () => this.closeModal()
      })), /* @__PURE__ */ this.$render("i-panel", {
        class: "i-modal_content"
      }, /* @__PURE__ */ this.$render("i-panel", {
        class: "mt-1"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        verticalAlignment: "center",
        horizontalAlignment: "center",
        class: "mb-1"
      }, /* @__PURE__ */ this.$render("i-image", {
        width: 80,
        height: 80,
        url: import_assets3.default.fullPath("img/warning-icon.png")
      })), /* @__PURE__ */ this.$render("i-panel", {
        class: "description-time"
      }, /* @__PURE__ */ this.$render("i-label", {
        id: "lbTimer",
        caption: "Please note that you will forfeit your rewards by unstaking. You are not eligible for rewards until"
      })), /* @__PURE__ */ this.$render("i-hstack", {
        verticalAlignment: "center",
        horizontalAlignment: "center",
        class: "group-btn"
      }, /* @__PURE__ */ this.$render("i-button", {
        caption: "Cancel",
        class: "btn-os btn-cancel",
        onClick: () => this.closeModal()
      }), /* @__PURE__ */ this.$render("i-button", {
        caption: "Proceed",
        class: "btn-os btn-submit",
        onClick: () => this.onStake()
      }))))));
    }
  };
  ManageStake = __decorateClass([
    (0, import_components5.customElements)("manage-stake")
  ], ManageStake);

  // src/staking/panelConfig/panel-config.tsx
  var import_components12 = __toModule(__require("@ijstech/components"));
  var import_global6 = __toModule(__require("@staking/global"));

  // src/staking/panelConfig/panel-config.css.ts
  var import_components6 = __toModule(__require("@ijstech/components"));
  var Theme = import_components6.Styles.Theme.defaultTheme;
  import_components6.Styles.cssRule(".panel-config", {
    background: Theme.background.main,
    padding: "1rem",
    margin: "auto",
    $nest: {
      ".modal": {
        width: 800,
        maxWidth: "100%",
        borderRadius: "1rem",
        padding: "1.5rem 1rem"
      },
      "i-button": {
        padding: "6px 12px",
        textAlign: "center"
      },
      ".pnl-label": {
        $nest: {
          "i-icon": {
            display: "none",
            cursor: "pointer"
          },
          "&:hover i-icon": {
            display: "block"
          }
        }
      },
      ".btn-item": {
        background: `${Theme.colors.secondary.main} !important`,
        borderRadius: 0,
        color: Theme.colors.primary.contrastText,
        $nest: {
          "&.btn-active": {
            background: `${Theme.colors.primary.main} !important`,
            cursor: "default"
          }
        }
      },
      "input": {
        $nest: {
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: "0"
          },
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: "0"
          },
          "&:focus::placeholder": {
            opacity: 0
          }
        }
      },
      ".input-area": {
        width: "calc(100% - 190px) !important",
        height: "80px !important",
        borderRadius: 12,
        padding: 8,
        background: Theme.background.paper,
        $nest: {
          "textarea": {
            width: "100% !important",
            height: "100% !important",
            background: "transparent",
            boxShadow: "none",
            outline: "none",
            border: "none",
            color: Theme.colors.primary.contrastText,
            fontSize: "1rem"
          }
        }
      },
      ".input-text": {
        width: "calc(100% - 190px) !important",
        height: "40px !important",
        borderRadius: 12,
        paddingInline: 8,
        background: Theme.background.paper,
        $nest: {
          "&.w-100": {
            width: "100% !important"
          },
          input: {
            border: "none",
            width: "100% !important",
            height: "100% !important",
            backgroundColor: "transparent",
            color: Theme.colors.primary.contrastText,
            fontSize: "1rem",
            textAlign: "left"
          }
        }
      },
      ".network-selection": {
        $nest: {
          ".btn-select:hover": {
            background: `${Theme.action.active} !important`
          },
          ".modal": {
            padding: "0.75rem 0",
            background: Theme.background.paper,
            borderRadius: 0,
            $nest: {
              "& > i-vstack": {
                maxHeight: "40vh",
                overflow: "auto"
              },
              "i-button": {
                boxShadow: "none",
                color: Theme.colors.primary.contrastText
              },
              "i-button:hover": {
                background: `${Theme.action.hover} !important`
              }
            }
          }
        }
      },
      "i-checkbox .checkmark": {
        backgroundColor: Theme.background.paper,
        border: `1px solid ${Theme.colors.primary.light}`,
        borderRadius: 6,
        width: 20,
        height: 20,
        $nest: {
          "&:after": {
            borderWidth: 2,
            top: 3
          }
        }
      },
      "i-checkbox.is-checked .checkmark": {
        backgroundColor: Theme.colors.secondary.light
      },
      ".cursor-pointer": {
        cursor: "pointer"
      },
      "&.custom-scroll *": {
        $nest: {
          "&::-webkit-scrollbar-track": {
            background: "transparent"
          },
          "&::-webkit-scrollbar": {
            width: "5px"
          },
          "&::-webkit-scrollbar-thumb": {
            background: Theme.colors.primary.main,
            borderRadius: "5px"
          }
        }
      },
      "#loadingElm.i-loading--active": {
        marginTop: "2rem",
        position: "initial",
        $nest: {
          ".i-loading-spinner": {
            marginTop: "2rem"
          }
        }
      }
    }
  });

  // src/staking/panelConfig/campaign.tsx
  var import_components11 = __toModule(__require("@ijstech/components"));
  var import_global5 = __toModule(__require("@staking/global"));
  var import_store6 = __toModule(__require("@staking/store"));

  // src/staking/panelConfig/staking.tsx
  var import_components10 = __toModule(__require("@ijstech/components"));
  var import_eth_wallet3 = __toModule(__require("@ijstech/eth-wallet"));
  var import_global4 = __toModule(__require("@staking/global"));
  var import_store5 = __toModule(__require("@staking/store"));

  // src/token-selection/tokenSelection.tsx
  var import_components8 = __toModule(__require("@ijstech/components"));
  var import_store4 = __toModule(__require("@staking/store"));
  var import_assets4 = __toModule(__require("@staking/assets"));

  // src/token-selection/tokenSelection.css.ts
  var import_components7 = __toModule(__require("@ijstech/components"));
  var Theme2 = import_components7.Styles.Theme.defaultTheme;
  import_components7.Styles.cssRule(".token-selection", {
    $nest: {
      "i-icon": {
        display: "inline-block"
      },
      "i-modal > .i-modal_header": {
        display: "none"
      },
      "::-webkit-scrollbar-track": {
        background: Theme2.colors.secondary.main
      },
      "::-webkit-scrollbar": {
        width: "5px"
      },
      "::-webkit-scrollbar-thumb": {
        background: Theme2.colors.primary.main,
        borderRadius: "5px"
      },
      "#btnToken": {
        alignItems: "center",
        justifyContent: "start",
        boxShadow: "none",
        background: Theme2.background.paper,
        $nest: {
          "&:hover": {
            background: Theme2.action.active,
            opacity: 0.8
          },
          "&.disabled": {
            background: Theme2.action.disabled,
            opacity: 0.6
          },
          "span": {
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap"
          },
          "i-icon": {
            marginLeft: "auto"
          }
        }
      },
      "#tokenSelectionModal": {
        $nest: {
          "&> div": {
            height: "auto !important"
          },
          ".i-modal_header": {
            display: "none"
          },
          ".modal": {
            width: 450,
            maxWidth: "100%",
            minWidth: "auto",
            background: "#484860",
            padding: "0.5rem 0"
          },
          "#tokenList": {
            maxHeight: "33vh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            $nest: {
              ".token-item": {
                $nest: {
                  "i-label": {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "calc(100% - 40px)"
                  },
                  "&:hover": {
                    background: "#26262a"
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  // src/token-selection/tokenSelection.tsx
  var Theme3 = import_components8.Styles.Theme.defaultTheme;
  var TokenSelection = class extends import_components8.Module {
    constructor(parent, options) {
      super(parent, options);
      this.initData = () => {
        this.renderTokenItems();
      };
      this.updateDataByChain = async () => {
        this.renderTokenItems();
        this.updateButton();
      };
      this.sortToken = (a, b, asc) => {
        if (a.balance != b.balance) {
          return asc ? a.balance - b.balance : b.balance - a.balance;
        }
        if (a.symbol.toLowerCase() < b.symbol.toLowerCase()) {
          return -1;
        }
        if (a.symbol.toLowerCase() > b.symbol.toLowerCase()) {
          return 1;
        }
        return 0;
      };
      this.renderToken = (token) => {
        const logoAddress = import_assets4.default.fullPath((0, import_store4.getTokenIconPath)(token, this.chainId));
        return /* @__PURE__ */ this.$render("i-hstack", {
          width: "100%",
          minHeight: "40px",
          verticalAlignment: "center",
          padding: { top: 6, bottom: 6, left: 8, right: 8 },
          class: "pointer token-item",
          onClick: () => this.onSelect(token)
        }, /* @__PURE__ */ this.$render("i-vstack", {
          width: "100%"
        }, /* @__PURE__ */ this.$render("i-hstack", {
          gap: 16,
          verticalAlignment: "center"
        }, /* @__PURE__ */ this.$render("i-image", {
          width: 24,
          height: 24,
          minWidth: 16,
          minHeight: 16,
          url: logoAddress
        }), /* @__PURE__ */ this.$render("i-label", {
          caption: `${token.symbol} ${token.address ? `(${token.address})` : ""}`,
          font: { size: "16px", color: Theme3.colors.primary.contrastText, name: "Proxima Nova" }
        }))));
      };
      this.renderTokenItems = async () => {
        if (!this.tokenList)
          return;
        this.tokenList.clearInnerHTML();
        if (this.tokenDataList.length) {
          const tokenItems = this.tokenDataList.map((token) => this.renderToken(token));
          this.tokenList.append(...tokenItems);
        } else {
          this.tokenList.append(/* @__PURE__ */ this.$render("i-label", {
            font: { color: Theme3.colors.primary.contrastText },
            margin: { top: 10, bottom: 16 },
            class: "text-center",
            caption: "No tokens found"
          }));
        }
      };
      this.showModal = () => {
        if (!this.enabled)
          return;
        if (this.tokenSelectionModal.visible) {
          this.tokenSelectionModal.visible = false;
          return;
        }
        if (!this.tokenList.innerHTML) {
          this.initData();
        }
        this.tokenSelectionModal.visible = true;
      };
      this.onCloseModal = () => {
        this.tokenSelectionModal.visible = false;
      };
      this.updateButton = (token) => {
        var _a;
        const btnToken = this.btnToken;
        if (!btnToken)
          return;
        try {
          let image = btnToken.querySelector("i-image");
          if (!token) {
            token = (_a = this.tokenDataList) == null ? void 0 : _a.find((v) => {
              var _a2, _b;
              return v.address && v.address == ((_a2 = this.token) == null ? void 0 : _a2.address) || v.symbol == ((_b = this.token) == null ? void 0 : _b.symbol);
            });
          }
          if (!token) {
            btnToken.caption = "Select Token";
            btnToken.font = { size: "16px", color: Theme3.colors.primary.contrastText };
            if (image) {
              btnToken.removeChild(image);
            }
          } else {
            btnToken.caption = `${token.symbol} ${token.address ? `(${token.address})` : ""}`;
            btnToken.font = { size: "16px", color: Theme3.colors.primary.contrastText };
            const logoAddress = import_assets4.default.fullPath((0, import_store4.getTokenIconPath)(token, this.chainId));
            if (!image) {
              image = new import_components8.Image(btnToken, {
                width: 24,
                height: 24,
                marginRight: 10
              });
              btnToken.prepend(image);
            }
            image.url = logoAddress;
          }
        } catch (e) {
        }
      };
      this.onSelect = (token) => {
        this.token = token;
        this.onSelectToken(token);
        this.tokenSelectionModal.visible = false;
      };
      this.init = async () => {
        this.initData();
        super.init();
        this.updateButton(this._token);
      };
    }
    get token() {
      return this._token;
    }
    set token(value) {
      this._token = value;
      this.updateButton(value);
    }
    get onSelectToken() {
      return this._onSelectToken;
    }
    set onSelectToken(callback) {
      this._onSelectToken = callback;
    }
    set chainId(value) {
      this._chainId = value;
      this.updateDataByChain();
    }
    get chainId() {
      return this._chainId || (0, import_store4.getChainId)() || (0, import_store4.getDefaultChainId)();
    }
    get tokenDataList() {
      const tokenList = (0, import_store4.getTokenList)(this.chainId).filter((token) => token.address);
      return tokenList.map((token) => {
        const tokenObject = __spreadValues({}, token);
        const nativeToken = import_store4.ChainNativeTokenByChainId[this.chainId];
        if (token.symbol === nativeToken.symbol) {
          Object.assign(tokenObject, { isNative: true });
        }
        return tokenObject;
      }).sort(this.sortToken);
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        class: "token-selection"
      }, /* @__PURE__ */ this.$render("i-button", {
        id: "btnToken",
        display: "flex",
        width: "100%",
        height: 40,
        background: { color: Theme3.background.main },
        font: { size: "16px", color: Theme3.colors.primary.contrastText },
        padding: { left: "1rem", right: "1rem" },
        border: { radius: 16 },
        rightIcon: { name: "caret-down", fill: Theme3.colors.primary.main, width: 16, height: 16 },
        caption: "Select Token",
        onClick: () => this.showModal()
      }), /* @__PURE__ */ this.$render("i-modal", {
        id: "tokenSelectionModal",
        showBackdrop: false,
        popupPlacement: "bottom",
        width: "100%"
      }, /* @__PURE__ */ this.$render("i-grid-layout", {
        id: "tokenList",
        columnsPerRow: 1,
        margin: { top: 8, bottom: 8 }
      })));
    }
  };
  TokenSelection = __decorateClass([
    (0, import_components8.customElements)("token-selection")
  ], TokenSelection);

  // src/staking/panelConfig/reward.tsx
  var import_components9 = __toModule(__require("@ijstech/components"));
  var import_eth_wallet2 = __toModule(__require("@ijstech/eth-wallet"));
  var import_global3 = __toModule(__require("@staking/global"));
  var Theme4 = import_components9.Styles.Theme.defaultTheme;
  var RewardConfig = class extends import_components9.Module {
    constructor(parent, options) {
      super(parent, options);
      this.isAdminValid = false;
      this.setupInput = () => {
        if (this.wrapperAddressElm) {
          this.wrapperAddressElm.visible = !this.isNew;
        }
      };
      this.emitInput = () => {
        import_components9.application.EventBus.dispatch(import_global3.EventId.EmitInput);
      };
      this.onInputToken = (token) => {
        this.token = token;
        this.emitInput();
      };
      this.onInputNumber = (input) => {
        (0, import_global3.limitInputNumber)(input, 18);
        this.emitInput();
      };
      this.onInputUnix = (input) => {
        const _input = input;
        let value = _input.value;
        value = value.replace(/[^0-9]+/g, "");
        _input.value = value;
        this.emitInput();
      };
      this.onInputAddress = async () => {
        this.isAddressValid = await (0, import_global3.isAddressValid)(this.inputAddress.value);
        this.lbAddressErr.visible = !this.isAddressValid;
        this.emitInput();
      };
      this.onInputAdmin = async () => {
        this.isAdminValid = await (0, import_global3.isAddressValid)(this.inputAdmin.value);
        this.lbErr.visible = !this.isAdminValid;
        this.emitInput();
      };
      this.checkValidation = () => {
        return this.token && this.isAdminValid && (0, import_global3.isValidNumber)(this.inputMultiplier.value) && (0, import_global3.isValidNumber)(this.inputInitialReward.value) && (0, import_global3.isValidNumber)(this.inputVestingPeriod.value) && (0, import_global3.isValidNumber)(this.inputClaimDeadline.value) && (this.isNew || this.isAddressValid);
      };
      this.getData = () => {
        var _a;
        const reward = {
          address: this.inputAddress.value,
          rewardTokenAddress: ((_a = this.token) == null ? void 0 : _a.address) || "",
          multiplier: new import_eth_wallet2.BigNumber(this.inputMultiplier.value),
          initialReward: new import_eth_wallet2.BigNumber(this.inputInitialReward.value),
          vestingPeriod: new import_eth_wallet2.BigNumber(this.inputVestingPeriod.value),
          claimDeadline: new import_eth_wallet2.BigNumber(this.inputClaimDeadline.value),
          admin: `${this.inputAdmin.value}`,
          isCommonStartDate: this.checkboxStartDate.checked
        };
        return reward;
      };
    }
    set chainId(chainId) {
      this.tokenSelection.chainId = chainId;
      this.token = void 0;
    }
    set isNew(value) {
      this._isNew = value;
      this.setupInput();
    }
    get isNew() {
      return this._isNew;
    }
    init() {
      super.init();
      this.tokenSelection = new TokenSelection();
      this.tokenSelection.onSelectToken = this.onInputToken;
      this.pnlTokenSelection.appendChild(this.tokenSelection);
      this.setupInput();
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        class: "custom-scroll"
      }, /* @__PURE__ */ this.$render("i-vstack", {
        gap: 10,
        verticalAlignment: "center",
        class: "main-content"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        id: "wrapperAddressElm",
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Address"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme4.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-vstack", {
        gap: 4,
        width: "calc(100% - 190px)",
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-input", {
        id: "inputAddress",
        class: "input-text w-100",
        onChanged: this.onInputAddress
      }), /* @__PURE__ */ this.$render("i-label", {
        id: "lbAddressErr",
        visible: false,
        caption: "The address is invalid!",
        font: { color: Theme4.colors.primary.main, size: "12px" }
      }))), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Reward Token Address"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme4.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlTokenSelection",
        width: "calc(100% - 190px)"
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Multiplier"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme4.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-input", {
        id: "inputMultiplier",
        inputType: "number",
        class: "input-text",
        onChanged: (src) => this.onInputNumber(src)
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Initial Reward"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme4.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-input", {
        id: "inputInitialReward",
        inputType: "number",
        class: "input-text",
        onChanged: (src) => this.onInputNumber(src)
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Vesting Period"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme4.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-input", {
        id: "inputVestingPeriod",
        placeholder: "Second",
        inputType: "number",
        class: "input-text",
        onChanged: (src) => this.onInputUnix(src)
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Claim Deadline"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme4.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-input", {
        id: "inputClaimDeadline",
        placeholder: "Unix",
        inputType: "number",
        class: "input-text",
        onChanged: (src) => this.onInputUnix(src)
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Admin"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme4.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-vstack", {
        gap: 4,
        width: "calc(100% - 190px)",
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-input", {
        id: "inputAdmin",
        class: "input-text w-100",
        onChanged: this.onInputAdmin
      }), /* @__PURE__ */ this.$render("i-label", {
        id: "lbErr",
        visible: false,
        caption: "The address is invalid!",
        font: { color: Theme4.colors.primary.main, size: "12px" }
      }))), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Common Start Date"
      }), /* @__PURE__ */ this.$render("i-vstack", {
        verticalAlignment: "center",
        horizontalAlignment: "start",
        width: "calc(100% - 190px)"
      }, /* @__PURE__ */ this.$render("i-checkbox", {
        id: "checkboxStartDate",
        height: "auto",
        checked: false
      })))));
    }
  };
  RewardConfig = __decorateClass([
    (0, import_components9.customElements)("reward-config")
  ], RewardConfig);

  // src/staking/panelConfig/staking.tsx
  var Theme5 = import_components10.Styles.Theme.defaultTheme;
  var StakingConfig = class extends import_components10.Module {
    constructor(parent, options) {
      super(parent, options);
      this.rewardConfig = [];
      this.currentReward = 0;
      this.setupInput = () => {
        if (this.wrapperAddressElm) {
          this.wrapperAddressElm.visible = !this.isNew;
        }
      };
      this.renderTypeButton = async () => {
        var _a;
        const vstack = await import_components10.VStack.create({ gap: 8 });
        const dropdownModal = await import_components10.Modal.create({
          showBackdrop: false,
          width: "100%",
          maxWidth: 300,
          popupPlacement: "bottom"
        });
        this.lockType = (_a = import_store5.LockTokenTypeList[0]) == null ? void 0 : _a.value;
        const btnType = await import_components10.Button.create({
          caption: import_store5.LockTokenTypeList[0] ? import_store5.LockTokenTypeList[0].name : "Select Type",
          font: { color: Theme5.colors.primary.contrastText },
          background: { color: Theme5.background.paper },
          border: { style: "none", radius: 12 },
          padding: { top: "0.5rem", bottom: "0.5rem", left: "0.75rem", right: "0.75rem" },
          rightIcon: { name: "caret-down", fill: Theme5.colors.primary.main },
          width: "100%",
          height: 40,
          maxWidth: 300
        });
        btnType.classList.add("btn-select");
        btnType.onClick = () => {
          dropdownModal.visible = !dropdownModal.visible;
        };
        for (const type of import_store5.LockTokenTypeList) {
          const dropdownItem = await import_components10.Button.create({
            caption: `${type.name} (${type.value})`,
            background: { color: "transparent" },
            height: 36
          });
          dropdownItem.onClick = () => {
            dropdownModal.visible = false;
            btnType.caption = `${type.name} (${type.value})`;
            this.lockType = type.value;
          };
          vstack.appendChild(dropdownItem);
        }
        dropdownModal.item = vstack;
        this.typeSelection.clearInnerHTML();
        this.typeSelection.appendChild(btnType);
        this.typeSelection.appendChild(dropdownModal);
      };
      this.onRenderReward = (button, idx) => {
        for (const elm of this.rewardConfig) {
          elm.visible = false;
        }
        this.rewardConfig[idx].visible = true;
        const active = this.listRewardButton.querySelector(".btn-active");
        if (active) {
          active.classList.remove("btn-active");
        }
        button.classList.add("btn-active");
        this.currentReward = idx;
      };
      this.removeReward = (idx) => {
        this.listRewardButton.removeChild(this.listRewardButton.childNodes[idx]);
        this.pnlInfoElm.removeChild(this.rewardConfig[idx]);
        this.rewardConfig.splice(idx, 1);
        for (let i = 0; i < this.listRewardButton.childElementCount; i++) {
          const elm = this.listRewardButton.childNodes[i];
          const button = elm.firstChild;
          button.caption = `Reward ${i + 1}`;
          button.onClick = () => this.onRenderReward(button, i);
          elm.lastChild.onClick = () => this.removeReward(i);
          if (this.currentReward === idx && i === 0) {
            this.onRenderReward(button, 0);
          }
        }
        this.emitInput();
      };
      this.addReward = async (idx) => {
        for (const elm of this.rewardConfig) {
          elm.visible = false;
        }
        const rewards = [...this.rewardConfig];
        rewards[idx] = new RewardConfig();
        rewards[idx].isNew = this.isNew;
        this.rewardConfig = [...rewards];
        this.pnlInfoElm.appendChild(this.rewardConfig[idx]);
        if (!this.isNew) {
          this.rewardConfig[idx].chainId = this.chainId;
        }
        this.currentReward = idx;
        this.emitInput();
      };
      this.onAddReward = async () => {
        this.btnAdd.enabled = false;
        const idx = Number(this.rewardConfig.length);
        const pnl = await import_components10.Panel.create({ position: "relative" });
        pnl.classList.add("pnl-label");
        const icon = await import_components10.Icon.create({ name: "times", fill: Theme5.background.main, height: 12, width: 12, position: "absolute", top: 1, right: 1 });
        icon.onClick = () => this.removeReward(idx);
        const button = await import_components10.Button.create({ caption: `Reward ${idx + 1}`, padding: { top: 6, bottom: 6, left: 16, right: 16 } });
        button.classList.add("btn-item", "btn-active");
        button.onClick = () => this.onRenderReward(button, idx);
        const active = this.listRewardButton.querySelector(".btn-active");
        if (active) {
          active.classList.remove("btn-active");
        }
        pnl.appendChild(button);
        pnl.appendChild(icon);
        this.listRewardButton.appendChild(pnl);
        await this.addReward(idx);
        this.btnAdd.enabled = true;
      };
      this.emitInput = () => {
        import_components10.application.EventBus.dispatch(import_global4.EventId.EmitInput);
      };
      this.onInputAddress = async () => {
        this.isAddressValid = await (0, import_global4.isAddressValid)(this.inputAddress.value);
        this.lbAddressErr.visible = !this.isAddressValid;
        this.emitInput();
      };
      this.onInputToken = (token) => {
        this.token = token;
        this.emitInput();
      };
      this.onInputUnixAndSecond = (input) => {
        const _input = input;
        let value = _input.value;
        value = value.replace(/[^0-9]+/g, "");
        _input.value = value;
        this.emitInput();
      };
      this.onInputNumber = (input) => {
        (0, import_global4.limitInputNumber)(input, 18);
        this.emitInput();
      };
      this.isRewardValid = () => {
        if (!this.rewardConfig.length)
          return false;
        for (const reward of this.rewardConfig) {
          if (!reward.checkValidation()) {
            return false;
          }
        }
        return true;
      };
      this.checkValidation = () => {
        return this.token && !isNaN(this.lockType) && (0, import_global4.isValidNumber)(this.inputMinLockTime.value) && (0, import_global4.isValidNumber)(this.inputEntryStart.value) && (0, import_global4.isValidNumber)(this.inputEntryEnd.value) && (0, import_global4.isValidNumber)(this.inputPerAddressCap.value) && (0, import_global4.isValidNumber)(this.inputMaxTotalLock.value) && (this.isNew || this.isAddressValid) && this.isRewardValid();
      };
      this.getRewardData = () => {
        const rewardData = [];
        for (const reward of this.rewardConfig) {
          const data = reward.getData();
          rewardData.push(data);
        }
        return rewardData;
      };
      this.getData = () => {
        var _a;
        const offset = Number(this.inputDecimalsOffset.value);
        const staking = {
          address: this.inputAddress.value,
          lockTokenAddress: ((_a = this.token) == null ? void 0 : _a.address) || "",
          minLockTime: new import_eth_wallet3.BigNumber(this.inputMinLockTime.value),
          entryStart: new import_eth_wallet3.BigNumber(this.inputEntryStart.value),
          entryEnd: new import_eth_wallet3.BigNumber(this.inputEntryEnd.value),
          perAddressCap: new import_eth_wallet3.BigNumber(this.inputPerAddressCap.value),
          maxTotalLock: new import_eth_wallet3.BigNumber(this.inputMaxTotalLock.value),
          customDesc: this.inputDesc.value,
          lockTokenType: this.lockType,
          decimalsOffset: isNaN(offset) ? void 0 : offset,
          rewards: this.getRewardData()
        };
        return staking;
      };
    }
    set chainId(chainId) {
      this._chainId = chainId;
      this.tokenSelection.chainId = chainId;
      this.token = void 0;
      for (const elm of this.rewardConfig) {
        elm.chainId = chainId;
      }
    }
    get chainId() {
      return this._chainId || (0, import_store5.getChainId)() || (0, import_store5.getDefaultChainId)();
    }
    set isNew(value) {
      this._isNew = value;
      this.setupInput();
    }
    get isNew() {
      return this._isNew;
    }
    init() {
      super.init();
      this.tokenSelection = new TokenSelection();
      this.tokenSelection.onSelectToken = this.onInputToken;
      this.pnlTokenSelection.appendChild(this.tokenSelection);
      this.onAddReward();
      this.renderTypeButton();
      this.setupInput();
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        class: "custom-scroll"
      }, /* @__PURE__ */ this.$render("i-vstack", {
        gap: 10,
        verticalAlignment: "center",
        class: "main-content"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        id: "wrapperAddressElm",
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Address"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme5.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-vstack", {
        gap: 4,
        width: "calc(100% - 190px)",
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-input", {
        id: "inputAddress",
        class: "input-text w-100",
        onChanged: this.onInputAddress
      }), /* @__PURE__ */ this.$render("i-label", {
        id: "lbAddressErr",
        visible: false,
        caption: "The address is invalid!",
        font: { color: Theme5.colors.primary.main, size: "12px" }
      }))), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Lock Token Address"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme5.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlTokenSelection",
        width: "calc(100% - 190px)"
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Min Lock Time"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme5.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-input", {
        id: "inputMinLockTime",
        placeholder: "Second",
        inputType: "number",
        class: "input-text",
        onChanged: (src) => this.onInputUnixAndSecond(src)
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Entry Start"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme5.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-input", {
        id: "inputEntryStart",
        placeholder: "Unix",
        inputType: "number",
        class: "input-text",
        onChanged: (src) => this.onInputUnixAndSecond(src)
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Entry End"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme5.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-input", {
        id: "inputEntryEnd",
        placeholder: "Unix",
        inputType: "number",
        class: "input-text",
        onChanged: (src) => this.onInputUnixAndSecond(src)
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Per Address Cap"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme5.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-input", {
        id: "inputPerAddressCap",
        inputType: "number",
        class: "input-text",
        onChanged: (src) => this.onInputNumber(src)
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Max Total Lock"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme5.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-input", {
        id: "inputMaxTotalLock",
        inputType: "number",
        class: "input-text",
        onChanged: (src) => this.onInputNumber(src)
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Staking Description"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "inputDesc",
        class: "input-text"
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Lock Token Type"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme5.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-panel", {
        id: "typeSelection",
        class: "network-selection",
        width: "calc(100% - 190px)"
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Decimals Offset"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "inputDecimalsOffset",
        inputType: "number",
        class: "input-text",
        onChanged: (src) => this.onInputNumber(src)
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        margin: { top: 10, bottom: 5 },
        width: "100%",
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        id: "listRewardButton",
        verticalAlignment: "center"
      }), /* @__PURE__ */ this.$render("i-button", {
        id: "btnAdd",
        class: "btn-os",
        margin: { left: "auto" },
        caption: "Add Reward",
        onClick: this.onAddReward
      })), /* @__PURE__ */ this.$render("i-panel", {
        width: "100%",
        height: 2,
        margin: { bottom: 10 },
        background: { color: Theme5.colors.primary.light }
      }), /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlInfoElm"
      })));
    }
  };
  StakingConfig = __decorateClass([
    (0, import_components10.customElements)("staking-config")
  ], StakingConfig);

  // src/staking/panelConfig/campaign.tsx
  var Theme6 = import_components11.Styles.Theme.defaultTheme;
  var CampaignConfig = class extends import_components11.Module {
    constructor(parent, options) {
      super(parent, options);
      this.stakingConfig = [];
      this.currentStaking = 0;
      this.setupInput = () => {
        if (this.wapperNetworkElm) {
          this.wapperNetworkElm.visible = !this.isNew;
        }
      };
      this.renderNetworkButton = async () => {
        const vstack = await import_components11.VStack.create({ gap: 8 });
        const dropdownModal = await import_components11.Modal.create({
          showBackdrop: false,
          width: "100%",
          maxWidth: 300,
          popupPlacement: "bottom"
        });
        const listNetwork = import_store6.Networks.filter((f) => !f.isDisabled);
        const networkObj = listNetwork.find((f) => f.chainId === this.network);
        const btnNetwork = await import_components11.Button.create({
          caption: networkObj ? `${networkObj.name} (${networkObj.chainId})` : "Select Network",
          font: { color: Theme6.colors.primary.contrastText },
          background: { color: Theme6.background.paper },
          border: { style: "none", radius: 12 },
          padding: { top: "0.5rem", bottom: "0.5rem", left: "0.75rem", right: "0.75rem" },
          rightIcon: { name: "caret-down", fill: Theme6.colors.primary.main },
          width: "100%",
          height: 40,
          maxWidth: 300
        });
        btnNetwork.classList.add("btn-select");
        btnNetwork.onClick = () => {
          dropdownModal.visible = !dropdownModal.visible;
        };
        for (const network of listNetwork) {
          const dropdownItem = await import_components11.Button.create({
            caption: `${network.name} (${network.chainId})`,
            background: { color: "transparent" },
            height: 36
          });
          dropdownItem.onClick = () => {
            dropdownModal.visible = false;
            btnNetwork.caption = `${network.name} (${network.chainId})`;
            this.network = network.chainId;
            for (const elm of this.stakingConfig) {
              elm.chainId = this.network;
            }
            this.emitInput();
          };
          vstack.appendChild(dropdownItem);
        }
        dropdownModal.item = vstack;
        this.networkSelection.clearInnerHTML();
        this.networkSelection.appendChild(btnNetwork);
        this.networkSelection.appendChild(dropdownModal);
      };
      this.onRenderStaking = (button, idx) => {
        for (const elm of this.stakingConfig) {
          elm.visible = false;
        }
        this.stakingConfig[idx].visible = true;
        const active = this.listStakingButton.querySelector(".btn-active");
        if (active) {
          active.classList.remove("btn-active");
        }
        button.classList.add("btn-active");
        this.currentStaking = idx;
      };
      this.removeStaking = (idx) => {
        this.listStakingButton.removeChild(this.listStakingButton.childNodes[idx]);
        this.pnlInfoElm.removeChild(this.stakingConfig[idx]);
        this.stakingConfig.splice(idx, 1);
        for (let i = 0; i < this.listStakingButton.childElementCount; i++) {
          const elm = this.listStakingButton.childNodes[i];
          const button = elm.firstChild;
          button.caption = `Staking ${i + 1}`;
          button.onClick = () => this.onRenderStaking(button, i);
          elm.lastChild.onClick = () => this.removeStaking(i);
          if (this.currentStaking === idx && i === 0) {
            this.onRenderStaking(button, 0);
          }
        }
        this.emitInput();
      };
      this.addStaking = async (idx) => {
        for (const elm of this.stakingConfig) {
          elm.visible = false;
        }
        const stakings = [...this.stakingConfig];
        stakings[idx] = new StakingConfig();
        stakings[idx].isNew = this.isNew;
        this.stakingConfig = [...stakings];
        this.pnlInfoElm.appendChild(this.stakingConfig[idx]);
        if (!this.isNew) {
          this.stakingConfig[idx].chainId = this.network;
        }
        this.currentStaking = idx;
        this.emitInput();
      };
      this.onAddStaking = async () => {
        this.btnAdd.enabled = false;
        const idx = Number(this.stakingConfig.length);
        const pnl = await import_components11.Panel.create({ position: "relative" });
        pnl.classList.add("pnl-label");
        const icon = await import_components11.Icon.create({ name: "times", fill: Theme6.background.main, height: 12, width: 12, position: "absolute", top: 1, right: 1 });
        icon.onClick = () => this.removeStaking(idx);
        const button = await import_components11.Button.create({ caption: `Staking ${idx + 1}`, padding: { top: 6, bottom: 6, left: 16, right: 16 } });
        button.classList.add("btn-item", "btn-active");
        button.onClick = () => this.onRenderStaking(button, idx);
        const active = this.listStakingButton.querySelector(".btn-active");
        if (active) {
          active.classList.remove("btn-active");
        }
        pnl.appendChild(button);
        pnl.appendChild(icon);
        this.listStakingButton.appendChild(pnl);
        await this.addStaking(idx);
        this.btnAdd.enabled = true;
      };
      this.emitInput = () => {
        import_components11.application.EventBus.dispatch(import_global5.EventId.EmitInput);
      };
      this.onInputText = () => {
      };
      this.isStakingValid = () => {
        if (!this.stakingConfig.length)
          return false;
        for (const staking of this.stakingConfig) {
          if (!staking.checkValidation()) {
            return false;
          }
        }
        return true;
      };
      this.checkValidation = () => {
        return !!this.inputName.value && this.isStakingValid();
      };
      this.getStakingData = () => {
        const stakingData = [];
        for (const staking of this.stakingConfig) {
          const data = staking.getData();
          stakingData.push(data);
        }
        return stakingData;
      };
      this.getData = () => {
        const campaign = {
          chainId: this.network,
          customName: this.inputName.value,
          customDesc: this.inputDesc.value || void 0,
          getTokenURL: this.inputURL.value || void 0,
          vestingPeriod: this.inputVestingPeriod.value || void 0,
          showContractLink: this.checkboxContract.checked || void 0,
          customColorCampaign: this.inputMainColor.value || void 0,
          customColorBackground: this.inputBg.value || void 0,
          customColorStakingBackground: this.inputStakingBg.value || void 0,
          customColorButton: this.inputStakingBtn.value || void 0,
          customColorText: this.inputColorText.value || void 0,
          customColorTimeBackground: this.inputCountdownBg.value || void 0,
          stakings: this.getStakingData()
        };
        return campaign;
      };
    }
    set chainId(chainId) {
      for (const elm of this.stakingConfig) {
        elm.chainId = chainId;
      }
    }
    set isNew(value) {
      this._isNew = value;
      this.setupInput();
    }
    get isNew() {
      return this._isNew;
    }
    init() {
      this.network = (0, import_store6.getChainId)() || (0, import_store6.getDefaultChainId)();
      super.init();
      this.onAddStaking();
      this.renderNetworkButton();
      this.setupInput();
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        class: "custom-scroll"
      }, /* @__PURE__ */ this.$render("i-vstack", {
        gap: 10,
        verticalAlignment: "center",
        class: "main-content"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        id: "wapperNetworkElm",
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Network"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme6.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-panel", {
        id: "networkSelection",
        class: "network-selection",
        width: "calc(100% - 190px)"
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 4,
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Campaign Name"
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "*",
        font: { color: Theme6.colors.primary.main, size: "16px" }
      })), /* @__PURE__ */ this.$render("i-input", {
        id: "inputName",
        class: "input-text",
        onChanged: this.emitInput
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Campaign Description"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "inputDesc",
        class: "input-area",
        inputType: "textarea",
        rows: 3,
        onChanged: this.onInputText
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Get Token URL"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "inputURL",
        class: "input-text",
        onChanged: this.onInputText
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Vesting Period"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "inputVestingPeriod",
        class: "input-text",
        onChanged: this.onInputText
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        margin: { top: 5, bottom: 5 },
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Show Contract Link"
      }), /* @__PURE__ */ this.$render("i-vstack", {
        verticalAlignment: "center",
        horizontalAlignment: "start",
        width: "calc(100% - 190px)"
      }, /* @__PURE__ */ this.$render("i-checkbox", {
        id: "checkboxContract",
        height: "auto",
        checked: false
      }))), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Campaign Main Color"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "inputMainColor",
        placeholder: "#f15e61",
        class: "input-text",
        onChanged: this.onInputText
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Campaign Background"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "inputBg",
        placeholder: "hsla(0, 0%, 100%, 0.15)",
        class: "input-text",
        onChanged: this.onInputText
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Color Text"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "inputColorText",
        placeholder: "#ffffff",
        class: "input-text",
        onChanged: this.onInputText
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Countdown Background"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "inputCountdownBg",
        placeholder: "#b14781",
        class: "input-text",
        onChanged: this.onInputText
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Staking Background"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "inputStakingBg",
        placeholder: "hsla(0, 0%, 100%, 0.03)",
        class: "input-text",
        onChanged: this.onInputText
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-label", {
        class: "lb-title",
        caption: "Staking Button"
      }), /* @__PURE__ */ this.$render("i-input", {
        id: "inputStakingBtn",
        placeholder: "linear-gradient(90deg, #AC1D78 0%, #E04862 100%)",
        class: "input-text",
        onChanged: this.onInputText
      })), /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        margin: { top: 10, bottom: 5 },
        width: "100%",
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        id: "listStakingButton",
        verticalAlignment: "center"
      }), /* @__PURE__ */ this.$render("i-button", {
        id: "btnAdd",
        class: "btn-os",
        margin: { left: "auto" },
        caption: "Add Staking",
        onClick: this.onAddStaking
      })), /* @__PURE__ */ this.$render("i-panel", {
        width: "100%",
        height: 2,
        margin: { bottom: 10 },
        background: { color: Theme6.colors.primary.light }
      }), /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlInfoElm"
      })));
    }
  };
  CampaignConfig = __decorateClass([
    (0, import_components11.customElements)("campaign-config")
  ], CampaignConfig);

  // src/staking/panelConfig/panel-config.tsx
  var import_store7 = __toModule(__require("@staking/store"));
  var import_staking_utils2 = __toModule(__require("@staking/staking-utils"));
  var Theme7 = import_components12.Styles.Theme.defaultTheme;
  var PanelConfig = class extends import_components12.Module {
    constructor(parent, options) {
      super(parent, options);
      this.campaignConfig = [];
      this.currentCampaign = 0;
      this.registerEvent = () => {
        this.$eventBus.register(this, import_global6.EventId.EmitInput, this.updateButton);
        this.$eventBus.register(this, import_global6.EventId.IsWalletConnected, this.renderUI);
        this.$eventBus.register(this, import_global6.EventId.IsWalletDisconnected, this.renderUI);
        this.$eventBus.register(this, import_global6.EventId.chainChanged, this.onChangeChanged);
      };
      this.renderUI = () => {
        const isConnected = (0, import_store7.isWalletConnected)();
        this.networkElm.visible = !isConnected;
        this.campaignElm.visible = isConnected;
        this.updateNetworkName((0, import_store7.getChainId)());
      };
      this.onChangeChanged = () => {
        const chainId = (0, import_store7.getChainId)();
        this.updateNetworkName(chainId);
        for (const campaign of this.campaignConfig) {
          campaign.chainId = chainId;
        }
        this.updateButton();
      };
      this.showInputCampaign = (isNew) => {
        this.wrapperNetworkElm.visible = isNew;
        this.wapperCampaignsButton.visible = !isNew;
        this.groupBtnSaveElm.visible = !isNew;
        this.groupBtnDeployElm.visible = isNew;
        this.isNew = isNew;
        this.onAddCampaign();
      };
      this.onBack = () => {
        this.pnlInfoElm.clearInnerHTML();
        this.listCampaignButton.clearInnerHTML();
        this.campaignConfig = [];
        if (this.onReset) {
          this.onReset();
        }
      };
      this.updateNetworkName = (chainId) => {
        const network = (0, import_store7.getNetworkInfo)(chainId);
        this.lbNetworkName.caption = network ? network.name : "Unknown Network";
      };
      this.onRenderCampaign = (button, idx) => {
        for (const elm of this.campaignConfig) {
          elm.visible = false;
        }
        this.campaignConfig[idx].visible = true;
        const active = this.listCampaignButton.querySelector(".btn-active");
        if (active) {
          active.classList.remove("btn-active");
        }
        button.classList.add("btn-active");
        this.currentCampaign = idx;
      };
      this.removeCampaign = (idx) => {
        this.listCampaignButton.removeChild(this.listCampaignButton.childNodes[idx]);
        this.pnlInfoElm.removeChild(this.campaignConfig[idx]);
        this.campaignConfig.splice(idx, 1);
        for (let i = 0; i < this.listCampaignButton.childElementCount; i++) {
          const elm = this.listCampaignButton.childNodes[i];
          const button = elm.firstChild;
          button.caption = `Campaign ${i + 1}`;
          button.onClick = () => this.onRenderCampaign(button, i);
          elm.lastChild.onClick = () => this.removeCampaign(i);
          if (this.currentCampaign === idx && i === 0) {
            this.onRenderCampaign(button, 0);
          }
        }
      };
      this.addCampaign = async (idx) => {
        for (const elm of this.campaignConfig) {
          elm.visible = false;
        }
        const campaigns = [...this.campaignConfig];
        campaigns[idx] = new CampaignConfig();
        campaigns[idx].isNew = this.isNew;
        this.campaignConfig = [...campaigns];
        this.pnlInfoElm.appendChild(this.campaignConfig[idx]);
        this.currentCampaign = idx;
      };
      this.onAddCampaign = async () => {
        const idx = Number(this.campaignConfig.length);
        if (!this.isNew) {
          this.btnAdd.enabled = false;
          const pnl = await import_components12.Panel.create({ position: "relative" });
          pnl.classList.add("pnl-label");
          const icon = await import_components12.Icon.create({ name: "times", fill: Theme7.background.main, height: 12, width: 12, position: "absolute", top: 1, right: 1 });
          icon.onClick = () => this.removeCampaign(idx);
          const button = await import_components12.Button.create({ caption: `Campaign ${idx + 1}`, padding: { top: 6, bottom: 6, left: 16, right: 16 } });
          button.classList.add("btn-item", "btn-active");
          button.onClick = () => this.onRenderCampaign(button, idx);
          const active = this.listCampaignButton.querySelector(".btn-active");
          if (active) {
            active.classList.remove("btn-active");
          }
          pnl.appendChild(button);
          pnl.appendChild(icon);
          this.listCampaignButton.appendChild(pnl);
        }
        await this.addCampaign(idx);
        if (!this.isNew) {
          this.btnAdd.enabled = true;
        }
      };
      this.updateButton = () => {
        const valid = this.checkValidation();
        if (this.isNew) {
          if (this.btnDeploy.rightIcon.visible || this.btnDeployDownload.rightIcon.visible)
            return;
          this.btnDeploy.enabled = valid;
          this.btnDeployDownload.enabled = valid;
        } else {
          this.btnSave.enabled = valid;
          this.btnDownload.enabled = valid;
        }
      };
      this.checkValidation = () => {
        if (!this.campaignConfig.length)
          return false;
        for (const campaign of this.campaignConfig) {
          if (!campaign.checkValidation()) {
            return false;
          }
        }
        return true;
      };
      this.getStakingCampaignData = () => {
        const campaignData = [];
        for (const campaign of this.campaignConfig) {
          const data = campaign.getData();
          campaignData.push(data);
        }
        return campaignData;
      };
      this.showResultMessage = (result, status, content) => {
        if (!result)
          return;
        let params = { status };
        if (status === "success") {
          params.txtHash = content;
        } else {
          params.content = content;
        }
        result.message = __spreadValues({}, params);
        result.showModal();
      };
      this.parseData = () => {
        const arr = this.getStakingCampaignData();
        this.campaigns = arr.reduce((result, currentValue) => {
          (result[currentValue["chainId"]] = result[currentValue["chainId"]] || []).push(currentValue);
          return result;
        }, {});
      };
      this.onSave = () => {
        if (!this.isNew && this.checkValidation()) {
          this.parseData();
          const campaigns = __spreadValues({}, this.campaigns);
          this.onConfigSave(campaigns);
        }
      };
      this.onDownload = (data) => {
        if (this.isNew) {
          (0, import_global6.downloadJsonFile)("campaign.json", __spreadValues({}, data));
          return;
        }
        if (!this.isNew && this.checkValidation()) {
          this.parseData();
          const campaigns = __spreadValues({}, this.campaigns);
          (0, import_global6.downloadJsonFile)("campaign.json", campaigns);
        }
      };
      this.onDeployCampaign = async (isDownload) => {
        if (this.isNew && this.checkValidation()) {
          const campaign = this.campaignConfig[0].getData();
          const chainId = (0, import_store7.getChainId)();
          let result;
          const btn = isDownload ? this.btnDeployDownload : this.btnDeploy;
          this.showResultMessage(this.stakingResult, "warning", `Deploying ${campaign.customName}`);
          const callBack = async (err, reply) => {
            if (err) {
              this.showResultMessage(this.stakingResult, "error", err);
            } else {
              this.showResultMessage(this.stakingResult, "success", reply);
              this.backElm.classList.remove("cursor-pointer");
              this.backElm.onClick = () => {
              };
              this.btnDeployDownload.enabled = false;
              this.btnDeploy.enabled = false;
              btn.caption = isDownload ? "Deploying And Downloading" : "Deploying";
              btn.rightIcon.visible = true;
            }
          };
          const confirmationCallBack = async (receipt) => {
            if (!result)
              return;
            btn.rightIcon.visible = false;
            btn.caption = isDownload ? "Deploy and Download JSON" : "Deploy";
            this.updateButton();
            this.backElm.classList.add("cursor-pointer");
            this.backElm.onClick = () => this.onBack();
          };
          (0, import_global6.registerSendTxEvents)({
            transactionHash: callBack,
            confirmation: confirmationCallBack
          });
          result = await (0, import_staking_utils2.deployCampaign)(campaign, callBack);
          if (result) {
            this.stakingResult.closeModal();
            this.onConfigSave({ [chainId]: [__spreadValues({}, result)] });
            confirmationCallBack(true);
            if (isDownload) {
              this.onDownload(__spreadValues({}, result));
            }
          }
        }
      };
      this.$eventBus = import_components12.application.EventBus;
      this.registerEvent();
    }
    init() {
      super.init();
      this.stakingResult = new Result();
      this.appendChild(this.stakingResult);
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        class: "panel-config custom-scroll"
      }, /* @__PURE__ */ this.$render("i-panel", {
        id: "configCampaignsElm",
        margin: { left: "auto", right: "auto" },
        width: "100%",
        maxWidth: 800
      }, /* @__PURE__ */ this.$render("i-hstack", {
        id: "backElm",
        gap: 4,
        width: "fit-content",
        margin: { top: 5, bottom: 15, left: "auto" },
        verticalAlignment: "center",
        class: "cursor-pointer",
        onClick: this.onBack
      }, /* @__PURE__ */ this.$render("i-icon", {
        name: "arrow-left",
        fill: Theme7.colors.primary.contrastText,
        width: 20,
        height: 20
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "Back",
        font: { size: "20px", bold: true, color: Theme7.colors.primary.contrastText }
      })), /* @__PURE__ */ this.$render("i-hstack", {
        id: "networkElm",
        width: "100%",
        height: 150,
        verticalAlignment: "center",
        horizontalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        caption: "Please connect with your network!",
        font: { color: Theme7.colors.primary.contrastText }
      })), /* @__PURE__ */ this.$render("i-panel", {
        visible: false,
        id: "campaignElm",
        width: "100%"
      }, /* @__PURE__ */ this.$render("i-vstack", {
        id: "wapperCampaignsButton",
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        gap: 10,
        margin: { bottom: 10 },
        width: "100%",
        verticalAlignment: "center",
        horizontalAlignment: "space-between"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        id: "listCampaignButton",
        verticalAlignment: "center"
      }), /* @__PURE__ */ this.$render("i-button", {
        id: "btnAdd",
        class: "btn-os",
        margin: { left: "auto" },
        caption: "Add Campaign",
        onClick: this.onAddCampaign
      })), /* @__PURE__ */ this.$render("i-panel", {
        width: "100%",
        height: 2,
        margin: { bottom: 10 },
        background: { color: Theme7.colors.primary.light }
      })), /* @__PURE__ */ this.$render("i-hstack", {
        id: "wrapperNetworkElm",
        width: "100%",
        margin: { bottom: 10 },
        verticalAlignment: "center",
        horizontalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-label", {
        id: "lbNetworkName",
        font: { color: Theme7.colors.primary.main, size: "20px", bold: true }
      })), /* @__PURE__ */ this.$render("i-vstack", {
        gap: 10,
        verticalAlignment: "center",
        class: "main-content"
      }, /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlInfoElm"
      }), /* @__PURE__ */ this.$render("i-hstack", {
        horizontalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-hstack", {
        id: "groupBtnSaveElm",
        gap: 10,
        margin: { top: 20 },
        verticalAlignment: "center",
        horizontalAlignment: "center",
        wrap: "wrap"
      }, /* @__PURE__ */ this.$render("i-button", {
        id: "btnSave",
        caption: "Save",
        enabled: false,
        width: 200,
        maxWidth: "100%",
        class: "btn-os",
        onClick: this.onSave
      }), /* @__PURE__ */ this.$render("i-button", {
        id: "btnDownload",
        caption: "Download JSON",
        enabled: false,
        width: 200,
        maxWidth: "100%",
        class: "btn-os",
        onClick: () => this.onDownload()
      })), /* @__PURE__ */ this.$render("i-hstack", {
        id: "groupBtnDeployElm",
        gap: 10,
        margin: { top: 10 },
        verticalAlignment: "center",
        horizontalAlignment: "center",
        wrap: "wrap"
      }, /* @__PURE__ */ this.$render("i-vstack", {
        width: "100%",
        margin: { bottom: 10 },
        verticalAlignment: "center",
        horizontalAlignment: "start"
      }, /* @__PURE__ */ this.$render("i-label", {
        caption: "Note: You need to confirm on your wallet for each staking/reward!",
        font: { size: "12px", color: Theme7.colors.secondary.main }
      })), /* @__PURE__ */ this.$render("i-button", {
        id: "btnDeploy",
        caption: "Deploy",
        enabled: false,
        width: 200,
        maxWidth: "100%",
        rightIcon: { spin: true, visible: false, fill: Theme7.colors.primary.contrastText },
        class: "btn-os",
        onClick: () => this.onDeployCampaign()
      }), /* @__PURE__ */ this.$render("i-button", {
        id: "btnDeployDownload",
        caption: "Deploy and Download JSON",
        enabled: false,
        width: 300,
        maxWidth: "100%",
        rightIcon: { spin: true, visible: false, fill: Theme7.colors.primary.contrastText },
        class: "btn-os",
        onClick: () => this.onDeployCampaign(true)
      })))))));
    }
  };
  PanelConfig = __decorateClass([
    (0, import_components12.customElements)("panel-config")
  ], PanelConfig);

  // src/staking/index.tsx
  var import_time_is_money_sdk = __toModule(require_lib());
  var StakingBlock = class extends import_components13.Module {
    constructor(parent, options) {
      super(parent, options);
      this.campaigns = [];
      this.listAprTimer = [];
      this.listActiveTimer = [];
      this.tokenIcon = tokenIcon || "img/swap/openswap.png";
      this.tokenMap = {};
      this.registerEvent = () => {
        this.$eventBus.register(this, import_global7.EventId.IsWalletConnected, this.onWalletConnect);
        this.$eventBus.register(this, import_global7.EventId.IsWalletDisconnected, this.onWalletConnect);
        this.$eventBus.register(this, import_global7.EventId.chainChanged, this.onChainChange);
        this.$eventBus.register(this, import_global7.EventId.EmitButtonStatus, this.updateButtonStatus);
      };
      this.onWalletConnect = async (connected) => {
        this.onSetupPage(connected);
      };
      this.onChainChange = async () => {
        const isConnected = (0, import_store8.isWalletConnected)();
        if (await this.isWalletValid(isConnected)) {
          this.onSetupPage(isConnected);
        }
      };
      this.isWalletValid = async (isConnected) => {
        var _a;
        if (this.data && isConnected) {
          try {
            const wallet = import_eth_wallet4.Wallet.getInstance();
            const infoList = this.data[wallet.chainId];
            const stakingAddress = infoList && ((_a = infoList[0].stakings[0]) == null ? void 0 : _a.address);
            if (stakingAddress) {
              const timeIsMoney = new import_time_is_money_sdk.Contracts.TimeIsMoney(wallet, stakingAddress);
              await timeIsMoney.getCredit(wallet.address);
            }
            return true;
          } catch (e) {
            return false;
          }
        }
        return false;
      };
      this.initWalletData = async () => {
        let accountsChangedEventHandler = async (account) => {
          (0, import_store8.setTokenMap)();
        };
        let chainChangedEventHandler = async (hexChainId) => {
          (0, import_store8.setTokenMap)();
        };
        const selectedProvider = localStorage.getItem("walletProvider");
        const isValidProvider = Object.values(import_eth_wallet4.WalletPlugin).includes(selectedProvider);
        if (!import_eth_wallet4.Wallet.getInstance().chainId) {
          import_eth_wallet4.Wallet.getInstance().chainId = (0, import_store8.getDefaultChainId)();
        }
        if ((0, import_store8.hasWallet)() && isValidProvider) {
          await (0, import_store8.connectWallet)(selectedProvider, {
            "accountsChanged": accountsChangedEventHandler,
            "chainChanged": chainChangedEventHandler
          });
        }
      };
      this.onSetupPage = async (connected, hideLoading) => {
        if (!hideLoading && this.loadingElm) {
          this.loadingElm.visible = true;
        }
        if (!connected || !this.data) {
          await this.renderEmpty();
          return;
        }
        this.campaigns = await (0, import_staking_utils3.getAllCampaignsInfo)(this.data);
        await this.renderCampaigns(hideLoading);
        if (!hideLoading && this.loadingElm) {
          this.loadingElm.visible = false;
        }
      };
      this.showResultMessage = (result, status, content) => {
        if (!result)
          return;
        let params = { status };
        if (status === "success") {
          params.txtHash = content;
        } else {
          params.content = content;
        }
        result.message = __spreadValues({}, params);
        result.showModal();
      };
      this.onStake = async (option) => {
        const manageStake = new ManageStake();
        manageStake.onRefresh = () => this.onSetupPage((0, import_store8.isWalletConnected)(), true);
        this.manageStakeElm.clearInnerHTML();
        this.manageStakeElm.appendChild(manageStake);
        manageStake.showModal(option, `#btn-${option.address}`);
      };
      this.onUnstake = async (btnUnstake, data) => {
        if (data.option.mode !== "Claim") {
          this.onStake(data.option);
        } else {
          this.showResultMessage(this.stakingResult, "warning", `Unstake ${data.lockedTokenSymbol}`);
          const callBack = async (err, reply) => {
            if (err) {
              this.showResultMessage(this.stakingResult, "error", err);
            } else {
              this.showResultMessage(this.stakingResult, "success", reply);
              btnUnstake.enabled = false;
              btnUnstake.rightIcon.visible = true;
            }
          };
          const confirmationCallBack = async (receipt) => {
            await this.onSetupPage((0, import_store8.isWalletConnected)(), true);
            if (!btnUnstake)
              return;
            btnUnstake.rightIcon.visible = false;
            btnUnstake.enabled = true;
          };
          (0, import_global7.registerSendTxEvents)({
            transactionHash: callBack,
            confirmation: confirmationCallBack
          });
          (0, import_staking_utils3.withdrawToken)(data.option.address, callBack);
        }
      };
      this.onClaim = async (btnClaim, data) => {
        this.showResultMessage(this.stakingResult, "warning", `Claim ${data.rewardSymbol}`);
        const callBack = async (err, reply) => {
          if (err) {
            this.showResultMessage(this.stakingResult, "error", err);
          } else {
            this.showResultMessage(this.stakingResult, "success", reply);
            btnClaim.enabled = false;
            btnClaim.rightIcon.visible = true;
          }
        };
        const confirmationCallBack = async (receipt) => {
          await this.onSetupPage((0, import_store8.isWalletConnected)(), true);
          if (!btnClaim)
            return;
          btnClaim.rightIcon.visible = false;
          btnClaim.enabled = true;
        };
        (0, import_global7.registerSendTxEvents)({
          transactionHash: callBack,
          confirmation: confirmationCallBack
        });
        (0, import_staking_utils3.claimToken)(data.reward.address, callBack);
      };
      this.removeTimer = () => {
        for (const timer of this.listAprTimer) {
          clearInterval(timer);
        }
        this.listAprTimer = [];
        for (const timer of this.listActiveTimer) {
          clearInterval(timer);
        }
        this.listActiveTimer = [];
      };
      this.getRewardToken = (tokenAddress) => {
        return this.tokenMap[tokenAddress] || this.tokenMap[tokenAddress == null ? void 0 : tokenAddress.toLocaleLowerCase()] || {};
      };
      this.getLPToken = (campaign, token, chainId) => {
        if (campaign.getTokenURL) {
          window.open(campaign.getTokenURL);
        } else {
          window.open(getTokenUrl ? getTokenUrl : `#/swap?chainId=${chainId}&fromToken=BNB&toToken=${token}&fromAmount=1&showOptimizedRoutes=false`);
        }
      };
      this.init = async () => {
        super.init();
        this.pnlConfig = new PanelConfig();
        this.pnlConfig.visible = false;
        this.pnlConfig.onConfigSave = (campaign) => this.onConfigSave(campaign);
        this.pnlConfig.onReset = () => {
          this.pnlConfig.visible = false;
          this.stakingLayout.visible = true;
        };
        this.stakingComponent.appendChild(this.pnlConfig);
        this.stakingResult = new Result();
        this.stakingComponent.appendChild(this.stakingResult);
        this.initWalletData();
        (0, import_store8.setDataFromSCConfig)(import_store8.Networks, import_store8.InfuraId);
        (0, import_store8.setCurrentChainId)((0, import_store8.getDefaultChainId)());
        if (!this.data) {
          await this.renderEmpty();
        }
      };
      this.updateButtonStatus = async (data) => {
        if (data) {
          const { value, key, text } = data;
          const elm = this.stakingElm.querySelector(key);
          if (elm) {
            elm.rightIcon.visible = value;
            elm.caption = text;
          }
        }
      };
      this.getBtnText = (key, text) => {
        const data = (0, import_store8.getStakingStatus)(key);
        if (data.value) {
          return data.text;
        }
        return text;
      };
      this.initEmptyUI = async () => {
        if (!this.noCampaignSection) {
          this.noCampaignSection = await import_components13.Panel.create();
        }
        const isConnected = (0, import_store8.isWalletConnected)();
        this.noCampaignSection.clearInnerHTML();
        this.noCampaignSection.appendChild(/* @__PURE__ */ this.$render("i-panel", {
          class: "no-campaign",
          background: { color: "#192046" }
        }, /* @__PURE__ */ this.$render("i-vstack", {
          gap: 10,
          verticalAlignment: "center"
        }, /* @__PURE__ */ this.$render("i-image", {
          url: import_assets5.default.fullPath("img/staking/TrollTrooper.svg")
        }), /* @__PURE__ */ this.$render("i-label", {
          caption: isConnected ? "No Campaigns" : "Please connect with your wallet!"
        }), !this.data && isConnected ? /* @__PURE__ */ this.$render("i-hstack", {
          gap: 10,
          margin: { top: 10 },
          verticalAlignment: "center",
          horizontalAlignment: "center"
        }, /* @__PURE__ */ this.$render("i-button", {
          maxWidth: 200,
          caption: "Add New Campaign",
          class: "btn-os btn-stake",
          onClick: () => this.onEditCampaign(true)
        }), /* @__PURE__ */ this.$render("i-button", {
          maxWidth: 200,
          caption: "Add Existing Campaigns",
          class: "btn-os btn-stake",
          onClick: () => this.onEditCampaign(false)
        })) : [])));
        this.noCampaignSection.visible = true;
      };
      this.renderEmpty = async () => {
        await this.initEmptyUI();
        if (this.stakingElm) {
          this.stakingElm.clearInnerHTML();
          this.stakingElm.appendChild(this.noCampaignSection);
        }
        if (this.loadingElm) {
          this.loadingElm.visible = false;
        }
      };
      this.renderCampaigns = async (hideLoading) => {
        if (!hideLoading) {
          this.stakingElm.clearInnerHTML();
        }
        this.tokenMap = (0, import_store8.getTokenMap)();
        const chainId = (0, import_store8.getChainId)();
        const network = (0, import_store8.getNetworkInfo)(chainId);
        await this.initEmptyUI();
        this.noCampaignSection.visible = false;
        if (this.campaigns && !this.campaigns.length) {
          this.stakingElm.clearInnerHTML();
          this.stakingElm.appendChild(this.noCampaignSection);
          this.noCampaignSection.visible = true;
          return;
        }
        let nodeItems = [];
        this.removeTimer();
        for (let idx = 0; idx < this.campaigns.length; idx++) {
          const campaign = this.campaigns[idx];
          const containerSection = await import_components13.Panel.create();
          containerSection.id = `campaign-${idx}`;
          containerSection.classList.add("container-custom");
          if (campaign.customColorText) {
            const style = document.createElement("style");
            style.innerHTML = `
					.wrapper i-label:not(.duration) > * {
						color: ${campaign.customColorText} !important;
					},
				`;
            containerSection.appendChild(style);
          }
          const options = campaign.options;
          const stakingInfo = options ? options[0] : null;
          let lpTokenData = {};
          let vaultTokenData = {};
          if (stakingInfo && stakingInfo.tokenAddress) {
            if (stakingInfo.lockTokenType == import_store8.LockTokenType.LP_Token) {
              lpTokenData = {
                "object": await (0, import_staking_utils3.getLPObject)(stakingInfo.tokenAddress)
              };
            } else if (stakingInfo.lockTokenType == import_store8.LockTokenType.VAULT_Token) {
              vaultTokenData = {
                "object": await (0, import_staking_utils3.getVaultObject)(stakingInfo.tokenAddress)
              };
            }
          }
          const tokenInfo = {
            tokenAddress: campaign.tokenAddress,
            lpToken: lpTokenData,
            vaultToken: vaultTokenData
          };
          const lockedTokenObject = getLockedTokenObject(stakingInfo, tokenInfo, this.tokenMap);
          const lockedTokenSymbol = getLockedTokenSymbol(stakingInfo, lockedTokenObject);
          const lockedTokenIconPaths = getLockedTokenIconPaths(stakingInfo, lockedTokenObject, chainId, this.tokenMap);
          const isSimplified = campaign.isSimplified;
          const activeStartTime = stakingInfo ? stakingInfo.startOfEntryPeriod : 0;
          const activeEndTime = stakingInfo ? stakingInfo.endOfEntryPeriod : 0;
          let isStarted = (0, import_moment2.default)(activeStartTime).diff((0, import_moment2.default)()) <= 0;
          let isClosed = (0, import_moment2.default)(activeEndTime).diff((0, import_moment2.default)()) <= 0;
          let totalTokens = 0;
          let availableQty = 0;
          let totalLocked = {};
          const totalTokensLabel = await import_components13.Label.create();
          const availableQtyLabel = await import_components13.Label.create();
          const activeTimerRow = await import_components13.VStack.create();
          const bg = { color: campaign.customColorTimeBackground || "#b14781" };
          const endHours = await import_components13.Label.create({ background: bg });
          const endDays = await import_components13.Label.create({ background: bg });
          const endMins = await import_components13.Label.create({ background: bg });
          const stickerSection = await import_components13.Panel.create();
          const stickerLabel = await import_components13.Label.create();
          const stickerIcon = await import_components13.Icon.create();
          const simplifiedRow = await import_components13.VStack.create();
          stickerSection.classList.add("sticker");
          endHours.classList.add("timer-value");
          endDays.classList.add("timer-value");
          endMins.classList.add("timer-value");
          if (isSimplified) {
            simplifiedRow.classList.add("simplified");
            simplifiedRow.appendChild(/* @__PURE__ */ this.$render("i-panel", {
              class: "simplified-description"
            }, /* @__PURE__ */ this.$render("i-label", {
              caption: `Don't have ${network == null ? void 0 : network.name} ${lockedTokenSymbol}?`
            }), /* @__PURE__ */ this.$render("i-image", {
              width: 25,
              height: 25,
              url: import_assets5.default.fullPath((network == null ? void 0 : network.img) || "")
            })));
            simplifiedRow.appendChild(/* @__PURE__ */ this.$render("i-panel", {
              class: "simplified-link"
            }, /* @__PURE__ */ this.$render("i-label", {
              caption: `Flip ERC20 ${lockedTokenSymbol} to ${network == null ? void 0 : network.name} ${lockedTokenSymbol}`
            }), /* @__PURE__ */ this.$render("i-label", {
              link: { href: campaign.getTokenURL2 },
              caption: "HERE"
            }), /* @__PURE__ */ this.$render("i-label", {
              caption: "now!"
            })));
          }
          const setAvailableQty = async () => {
            if (!(0, import_store8.isWalletConnected)())
              return;
            let _totalTokens = 0;
            let _availableQty = 0;
            for (const o of options) {
              const _totalLocked = await (0, import_staking_utils3.getStakingTotalLocked)(o.address, o.decimalsOffset);
              totalLocked[o.address] = _totalLocked;
              const optionQty = new import_eth_wallet4.BigNumber(o.maxTotalLock).minus(_totalLocked);
              const lbOptionQty = document.querySelector(`#lb-${o.address}`);
              if (lbOptionQty) {
                lbOptionQty.caption = `${(0, import_global7.formatNumber)(optionQty)} ${lockedTokenSymbol}`;
              }
              const btnStake = document.querySelector(`#btn-${o.address}`);
              const isStaking = (0, import_store8.getStakingStatus)(`#btn-${o.address}`).value;
              if (btnStake && btnStake.caption === "Stake") {
                btnStake.enabled = !isStaking && !(!isStarted || o.mode === "Stake" && (optionQty.lte(0) || isClosed));
              } else if (btnStake && btnStake.caption === "Unstake") {
                btnStake.enabled = !isStaking && o.stakeQty != "0";
              }
              const stickerOption = document.querySelector(`#sticker-${o.address}`);
              if (optionQty.lte(0) && stickerOption) {
                stickerOption.visible = true;
              }
              _totalTokens += parseFloat(o.maxTotalLock);
              _availableQty += parseFloat(o.maxTotalLock) - parseFloat(_totalLocked);
            }
            ;
            totalTokens = _totalTokens;
            availableQty = _availableQty;
            totalTokensLabel.caption = `${(0, import_global7.formatNumber)(totalTokens)} ${lockedTokenSymbol}`;
            availableQtyLabel.caption = `${(0, import_global7.formatNumber)(availableQty)} ${lockedTokenSymbol}`;
            if (isClosed) {
              if (stickerLabel.caption !== "Closed") {
                stickerSection.classList.add("closed");
                stickerSection.classList.remove("sold-out");
                stickerLabel.caption = "Closed";
                stickerIcon.name = "check-square";
              }
            } else if (availableQty === 0) {
              if (stickerLabel.caption !== "Sold Out") {
                stickerLabel.caption = "Sold Out";
                stickerIcon.name = "star";
                stickerSection.classList.add("sold-out");
              }
            } else {
              if (stickerLabel.caption !== "Active") {
                stickerLabel.caption = "Active";
                stickerIcon.name = "star";
              }
            }
          };
          const setEndRemainingTime = () => {
            isStarted = (0, import_moment2.default)(activeStartTime).diff((0, import_moment2.default)()) <= 0;
            isClosed = (0, import_moment2.default)(activeEndTime).diff((0, import_moment2.default)()) <= 0;
            if (isStarted && !isClosed) {
              activeTimerRow.visible = true;
            } else {
              activeTimerRow.visible = false;
            }
            if (activeEndTime == 0) {
              endDays.caption = endHours.caption = endMins.caption = "0";
              if (this.listActiveTimer[idx]) {
                clearInterval(this.listActiveTimer[idx]);
              }
            } else {
              const days = (0, import_moment2.default)(activeEndTime).diff((0, import_moment2.default)(), "days");
              const hours = (0, import_moment2.default)(activeEndTime).diff((0, import_moment2.default)(), "hours") - days * 24;
              const mins = (0, import_moment2.default)(activeEndTime).diff((0, import_moment2.default)(), "minutes") - days * 24 * 60 - hours * 60;
              endDays.caption = `${days}`;
              endHours.caption = `${hours}`;
              endMins.caption = `${mins}`;
            }
          };
          const setTimer = () => {
            setEndRemainingTime();
            setAvailableQty();
          };
          setTimer();
          this.listActiveTimer.push(setInterval(setTimer, 2e3));
          stickerSection.appendChild(/* @__PURE__ */ this.$render("i-vstack", {
            class: "sticker-text"
          }, stickerIcon, stickerLabel));
          activeTimerRow.appendChild(/* @__PURE__ */ this.$render("i-vstack", null, /* @__PURE__ */ this.$render("i-label", {
            caption: "Time until the staking campaign ends:"
          }), /* @__PURE__ */ this.$render("i-panel", {
            margin: { top: 4 },
            class: "custom-timer"
          }, endDays, /* @__PURE__ */ this.$render("i-label", {
            caption: "D",
            class: "timer-unit"
          }), endHours, /* @__PURE__ */ this.$render("i-label", {
            caption: "H",
            class: "timer-unit"
          }), endMins, /* @__PURE__ */ this.$render("i-label", {
            caption: "M",
            class: "timer-unit"
          }))));
          totalTokensLabel.classList.add("bold");
          availableQtyLabel.classList.add("bold");
          totalTokensLabel.caption = `${(0, import_global7.formatNumber)(totalTokens)} ${lockedTokenSymbol}`;
          availableQtyLabel.caption = `${(0, import_global7.formatNumber)(availableQty)} ${lockedTokenSymbol}`;
          totalTokensLabel.classList.add("text-right");
          availableQtyLabel.classList.add("text-right");
          const rowItems = [
            {
              title: "Total Tokens:",
              value: totalTokensLabel.caption,
              isHidden: isSimplified,
              img: import_assets5.default.fullPath("img/staking/dot-circle.svg"),
              elm: totalTokensLabel
            },
            {
              title: "Available QTY:",
              value: availableQtyLabel.caption,
              isHidden: isSimplified,
              img: import_assets5.default.fullPath("img/staking/dot-circle.svg"),
              elm: availableQtyLabel
            },
            {
              title: "Campaign Start:",
              value: (0, import_moment2.default)(activeStartTime).utc().format("YYYY-MM-DD HH:mm:ss z"),
              isHidden: isStarted || isSimplified,
              img: import_assets5.default.fullPath("img/staking/stopwatch.svg")
            },
            {
              title: "Vesting Period:",
              value: campaign.vestingPeriod,
              isHidden: !campaign.vestingPeriod || isSimplified,
              img: import_assets5.default.fullPath("img/staking/stopwatch.svg")
            }
          ];
          nodeItems.push(containerSection);
          containerSection.appendChild(/* @__PURE__ */ this.$render("i-hstack", {
            class: "row-custom",
            background: { color: campaign.customColorBackground || "hsla(0,0%,100%,0.15)" },
            width: "100%",
            wrap: "wrap"
          }, /* @__PURE__ */ this.$render("i-vstack", {
            class: "column-custom"
          }, /* @__PURE__ */ this.$render("i-vstack", {
            class: "banner",
            background: { color: campaign.customColorCampaign || "#f15e61" },
            verticalAlignment: "space-between"
          }, stickerSection, /* @__PURE__ */ this.$render("i-hstack", {
            verticalAlignment: "center",
            class: "campaign-name"
          }, /* @__PURE__ */ this.$render("i-image", {
            width: "25px",
            height: "25px",
            url: import_assets5.default.fullPath(this.tokenIcon)
          }), /* @__PURE__ */ this.$render("i-label", {
            caption: campaign.campaignName
          })), /* @__PURE__ */ this.$render("i-hstack", null, /* @__PURE__ */ this.$render("i-label", {
            class: "campaign-description",
            caption: campaign.campaignDesc || ""
          })), /* @__PURE__ */ this.$render("i-panel", null, rowItems.filter((f) => !f.isHidden).map((v) => {
            return /* @__PURE__ */ this.$render("i-hstack", {
              verticalAlignment: "start",
              horizontalAlignment: "space-between",
              class: "row-item"
            }, /* @__PURE__ */ this.$render("i-hstack", {
              class: "col-item"
            }, /* @__PURE__ */ this.$render("i-image", {
              class: "custom-icon",
              url: v.img
            }), /* @__PURE__ */ this.$render("i-label", {
              class: "no-wrap",
              caption: v.title
            })), /* @__PURE__ */ this.$render("i-vstack", {
              width: "auto",
              horizontalAlignment: "end"
            }, v.elm ? v.elm : /* @__PURE__ */ this.$render("i-label", {
              class: "bold text-right",
              caption: v.value
            })));
          })), simplifiedRow, /* @__PURE__ */ this.$render("i-hstack", {
            verticalAlignment: "center",
            class: "get-token",
            onClick: () => this.getLPToken(campaign, lockedTokenSymbol, chainId)
          }, /* @__PURE__ */ this.$render("i-label", {
            class: "bold",
            caption: `Get ${lockedTokenSymbol}`
          }), lockedTokenIconPaths.map((v) => {
            return /* @__PURE__ */ this.$render("i-image", {
              width: 25,
              height: 25,
              url: import_assets5.default.fullPath(v)
            });
          }), /* @__PURE__ */ this.$render("i-icon", {
            name: "external-link-alt",
            width: "14",
            height: "14",
            fill: campaign.customColorText || "#fff"
          })), activeTimerRow)), await Promise.all(options.map(async (option) => {
            const stickerOptionSection = await import_components13.Panel.create();
            stickerOptionSection.classList.add("sticker", "sold-out", "hidden", "sticker-text");
            stickerOptionSection.id = `sticker-${option.address}`;
            stickerOptionSection.appendChild(/* @__PURE__ */ this.$render("i-panel", {
              class: "sticker-text"
            }, /* @__PURE__ */ this.$render("i-icon", {
              name: "star"
            }), /* @__PURE__ */ this.$render("i-label", {
              caption: "Sold Out"
            })));
            const key = `btn-${option.address}`;
            const btnStake = await import_components13.Button.create({
              caption: this.getBtnText(key, "Stake"),
              background: { color: `${campaign.customColorButton} !important` },
              font: { color: campaign.customColorText || "#fff" },
              rightIcon: { spin: true, fill: campaign.customColorText || "#fff", visible: (0, import_store8.getStakingStatus)(key).value }
            });
            const btnUnstake = await import_components13.Button.create({
              caption: this.getBtnText(key, "Unstake"),
              background: { color: `${campaign.customColorButton} !important` },
              font: { color: campaign.customColorText || "#fff" },
              rightIcon: { spin: true, fill: campaign.customColorText || "#fff", visible: (0, import_store8.getStakingStatus)(key).value }
            });
            if (option.mode === "Stake") {
              btnUnstake.visible = false;
              btnStake.id = key;
              btnStake.enabled = !isClosed;
              btnStake.classList.add("btn-os", "btn-stake");
              btnStake.onClick = () => this.onStake(__spreadValues(__spreadValues({}, campaign), option));
            } else {
              btnStake.visible = false;
              btnUnstake.id = key;
              btnUnstake.classList.add("btn-os", "btn-stake");
              btnUnstake.onClick = () => this.onUnstake(btnUnstake, { option: __spreadValues(__spreadValues({}, campaign), option), lockedTokenSymbol });
            }
            const isClaim = option.mode === "Claim";
            const rewardOptions = !isClaim ? option.rewards : [];
            const rewardToken = !isClaim ? this.getRewardToken(rewardOptions[0].tokenAddress) : {};
            const lpRewardTokenIconPath = !isClaim && rewardToken.address ? (0, import_store8.getTokenIconPath)(rewardToken, chainId) : "";
            let aprInfo = {};
            const optionAvailableQtyLabel = await import_components13.Label.create();
            optionAvailableQtyLabel.classList.add("ml-auto");
            optionAvailableQtyLabel.id = `lb-${option.address}`;
            optionAvailableQtyLabel.caption = `${(0, import_global7.formatNumber)(new import_eth_wallet4.BigNumber(option.maxTotalLock).minus(totalLocked[option.address]))} ${lockedTokenSymbol}`;
            const claimStakedRow = await import_components13.HStack.create();
            claimStakedRow.appendChild(/* @__PURE__ */ this.$render("i-label", {
              class: "mr-025",
              caption: "You Staked:"
            }));
            claimStakedRow.appendChild(/* @__PURE__ */ this.$render("i-label", {
              class: "ml-auto",
              caption: `${(0, import_global7.formatNumber)(option.stakeQty)} ${lockedTokenSymbol}`
            }));
            const rowRewardsLocked = await import_components13.Panel.create();
            const rowRewardsVesting = await import_components13.Panel.create();
            const rowRewardsVestingEnd = await import_components13.Panel.create();
            const rowRewardsClaimable = await import_components13.Panel.create();
            const rowRewardsClaimBtn = await import_components13.Panel.create();
            if (isClaim) {
              claimStakedRow.classList.add("mb-1");
              for (let idx2 = 0; idx2 < option.rewardsData.length; idx2++) {
                const reward = option.rewardsData[idx2];
                const rewardToken2 = this.getRewardToken(reward.rewardTokenAddress);
                const rewardSymbol = rewardToken2.symbol || "";
                rowRewardsLocked.appendChild(/* @__PURE__ */ this.$render("i-hstack", {
                  horizontalAlignment: "space-between"
                }, /* @__PURE__ */ this.$render("i-label", {
                  caption: `${rewardSymbol} Locked:`
                }), /* @__PURE__ */ this.$render("i-label", {
                  class: "bold",
                  caption: `${(0, import_global7.formatNumber)(reward.vestedReward)} ${rewardSymbol}`
                })));
                rowRewardsVesting.appendChild(/* @__PURE__ */ this.$render("i-hstack", {
                  horizontalAlignment: "space-between"
                }, /* @__PURE__ */ this.$render("i-label", {
                  caption: `${rewardSymbol} Vesting Start:`
                }), /* @__PURE__ */ this.$render("i-label", {
                  class: "bold",
                  caption: reward.vestingStart ? reward.vestingStart.format("YYYY-MM-DD HH:mm:ss") : "TBC"
                })));
                rowRewardsVestingEnd.appendChild(/* @__PURE__ */ this.$render("i-hstack", {
                  horizontalAlignment: "space-between"
                }, /* @__PURE__ */ this.$render("i-label", {
                  caption: `${rewardSymbol} Vesting End:`
                }), /* @__PURE__ */ this.$render("i-label", {
                  class: "bold",
                  caption: reward.vestingEnd ? reward.vestingEnd.format("YYYY-MM-DD HH:mm:ss") : "TBC"
                })));
                const passClaimStartTime = !(reward.claimStartTime && (0, import_moment2.default)().diff(import_moment2.default.unix(reward.claimStartTime)) < 0);
                let rewardClaimable = `0 ${rewardSymbol}`;
                if (passClaimStartTime) {
                  rewardClaimable = `${(0, import_global7.formatNumber)(reward.claimable)} ${rewardSymbol}`;
                }
                let startClaimingText = "";
                if (!(!reward.claimStartTime || passClaimStartTime)) {
                  const claimStart = import_moment2.default.unix(reward.claimStartTime).format("YYYY-MM-DD HH:mm:ss");
                  startClaimingText = `(Claim ${rewardSymbol} after ${claimStart})`;
                }
                rowRewardsClaimable.appendChild(/* @__PURE__ */ this.$render("i-hstack", {
                  horizontalAlignment: "space-between"
                }, /* @__PURE__ */ this.$render("i-label", {
                  caption: `${rewardSymbol} Claimable:`
                }), /* @__PURE__ */ this.$render("i-label", {
                  class: "bold",
                  caption: rewardClaimable
                }), startClaimingText ? /* @__PURE__ */ this.$render("i-label", {
                  caption: startClaimingText
                }) : []));
                const btnClaim = await import_components13.Button.create({
                  rightIcon: { spin: true, fill: campaign.customColorText || "#fff", visible: false },
                  caption: `Claim ${rewardSymbol}`,
                  background: { color: `${campaign.customColorButton} !important` },
                  font: { color: campaign.customColorText || "#fff" },
                  enabled: !(!passClaimStartTime || new import_eth_wallet4.BigNumber(reward.claimable).isZero())
                });
                btnClaim.id = `btnClaim-${idx2}-${option.address}`;
                btnClaim.classList.add("btn-os", "btn-stake", "mt-1");
                btnClaim.onClick = () => this.onClaim(btnClaim, { reward, rewardSymbol });
                rowRewardsClaimBtn.appendChild(btnClaim);
              }
              ;
            } else {
              rowRewardsLocked.visible = false;
              rowRewardsVesting.visible = false;
              rowRewardsVestingEnd.visible = false;
              rowRewardsClaimable.visible = false;
              rowRewardsClaimBtn.visible = false;
            }
            const rowOptionItems = !isClaim ? [
              {
                title: "Max. QTY",
                value: `${(0, import_global7.formatNumber)(option.maxTotalLock)} ${lockedTokenSymbol}`,
                isHidden: isSimplified
              },
              {
                title: "Available QTY",
                value: optionAvailableQtyLabel.caption,
                isHidden: isSimplified,
                elm: optionAvailableQtyLabel
              },
              {
                title: "Individual Cap",
                value: `${(0, import_global7.formatNumber)(option.perAddressCap)} ${lockedTokenSymbol}`
              },
              {
                title: "Campaign Start Date",
                value: (0, import_global7.formatDate)(option.startOfEntryPeriod, "DD MMM YYYY"),
                isHidden: !isSimplified
              }
            ] : [];
            const getAprValue = (rewardOption) => {
              if (rewardOption && aprInfo && aprInfo[rewardOption.rewardTokenAddress]) {
                const apr = new import_eth_wallet4.BigNumber(aprInfo[rewardOption.rewardTokenAddress]).times(100).toFormat(2, import_eth_wallet4.BigNumber.ROUND_DOWN);
                return `${apr}%`;
              }
              return "";
            };
            const durationDays = option.minLockTime / (60 * 60 * 24);
            return /* @__PURE__ */ this.$render("i-vstack", {
              class: "column-custom"
            }, /* @__PURE__ */ this.$render("i-panel", {
              class: "bg-color",
              background: { color: campaign.customColorStakingBackground || "hsla(0,0%,100%,0.03)" }
            }, stickerOptionSection, /* @__PURE__ */ this.$render("i-panel", {
              class: "header-info"
            }, /* @__PURE__ */ this.$render("i-hstack", {
              verticalAlignment: "center",
              horizontalAlignment: "center"
            }, lockedTokenIconPaths.map((v) => {
              return /* @__PURE__ */ this.$render("i-image", {
                width: 25,
                height: 25,
                url: import_assets5.default.fullPath(v)
              });
            }), /* @__PURE__ */ this.$render("i-label", {
              class: "bold duration",
              font: { color: campaign.customColorCampaign || "#f15e61" },
              caption: durationDays < 1 ? "< 1 Day" : `${durationDays} Days`
            })), /* @__PURE__ */ this.$render("i-label", {
              caption: option.customDesc || ""
            })), /* @__PURE__ */ this.$render("i-panel", {
              class: "img-custom"
            }, option.lockTokenType === import_store8.LockTokenType.LP_Token && rewardOptions.length === 2 ? /* @__PURE__ */ this.$render("i-panel", {
              class: "group-img"
            }, /* @__PURE__ */ this.$render("i-image", {
              width: 75,
              height: 75,
              url: import_assets5.default.fullPath(lpRewardTokenIconPath)
            }), /* @__PURE__ */ this.$render("i-icon", {
              name: "plus",
              width: 16,
              height: 16
            }), /* @__PURE__ */ this.$render("i-image", {
              width: 75,
              height: 75,
              url: import_assets5.default.fullPath(this.tokenIcon)
            })) : /* @__PURE__ */ this.$render("i-image", {
              width: 75,
              height: 75,
              url: import_assets5.default.fullPath(this.tokenIcon)
            })), /* @__PURE__ */ this.$render("i-panel", {
              class: "info-stake"
            }, btnStake, await Promise.all(rewardOptions.map(async (rewardOption) => {
              const labelApr = await import_components13.Label.create();
              labelApr.classList.add("ml-auto");
              const rateDesc = `1 ${(0, import_store8.tokenSymbol)(option.lockTokenAddress)} : ${new import_eth_wallet4.BigNumber(rewardOption.multiplier).toFixed()} ${(0, import_store8.tokenSymbol)(rewardOption.rewardTokenAddress)}`;
              const updateApr = async () => {
                if (option.lockTokenType === import_store8.LockTokenType.ERC20_Token) {
                  const apr = await (0, import_staking_utils3.getERC20RewardCurrentAPR)(rewardOption, lockedTokenObject, durationDays);
                  if (!isNaN(parseFloat(apr))) {
                    aprInfo[rewardOption.rewardTokenAddress] = apr;
                  }
                } else if (option.lockTokenType === import_store8.LockTokenType.LP_Token) {
                  if (rewardOption.referencePair) {
                    aprInfo[rewardOption.rewardTokenAddress] = await (0, import_staking_utils3.getLPRewardCurrentAPR)(rewardOption, lpTokenData.object, durationDays);
                  }
                } else {
                  aprInfo[rewardOption.rewardTokenAddress] = await (0, import_staking_utils3.getVaultRewardCurrentAPR)(rewardOption, vaultTokenData.object, durationDays);
                }
                const aprValue2 = getAprValue(rewardOption);
                if (isSimplified) {
                  labelApr.caption = aprValue2;
                } else {
                  labelApr.caption = aprValue2 ? `(${aprValue2} APR) ${rateDesc}` : rateDesc;
                }
              };
              updateApr();
              this.listAprTimer.push(setInterval(updateApr, 1e4));
              const aprValue = getAprValue(rewardOption);
              if (isSimplified) {
                labelApr.caption = aprValue;
                return /* @__PURE__ */ this.$render("i-vstack", null, /* @__PURE__ */ this.$render("i-hstack", {
                  horizontalAlignment: "space-between"
                }, /* @__PURE__ */ this.$render("i-label", {
                  class: "mr-025",
                  caption: "Rate"
                }), /* @__PURE__ */ this.$render("i-label", {
                  class: "bold",
                  caption: rateDesc
                })), /* @__PURE__ */ this.$render("i-hstack", null, /* @__PURE__ */ this.$render("i-label", {
                  class: "mr-025",
                  caption: "APR"
                }), labelApr));
              }
              labelApr.caption = aprValue ? `(${aprValue} APR) ${rateDesc}` : rateDesc;
              return /* @__PURE__ */ this.$render("i-hstack", null, /* @__PURE__ */ this.$render("i-label", {
                class: "mr-025",
                caption: "Rate"
              }), labelApr);
            })), rowOptionItems.filter((f) => !f.isHidden).map((v) => {
              return /* @__PURE__ */ this.$render("i-hstack", {
                horizontalAlignment: "space-between"
              }, /* @__PURE__ */ this.$render("i-label", {
                class: "mr-025",
                caption: v.title
              }), v.elm ? v.elm : /* @__PURE__ */ this.$render("i-label", {
                caption: v.value
              }));
            }), /* @__PURE__ */ this.$render("i-panel", {
              class: isClaim ? "hidden" : "custom-divider",
              border: { top: { color: `${campaign.customColorCampaign || "#f15e61"} !important` } }
            }), claimStakedRow, btnUnstake, rowRewardsLocked, rowRewardsVesting, rowRewardsVestingEnd, rowRewardsClaimable, rowRewardsClaimBtn, rewardOptions.map((rewardOption) => {
              const earnedQty = (0, import_global7.formatNumber)(new import_eth_wallet4.BigNumber(option.totalCredit).times(rewardOption.multiplier));
              const earnedSymbol = this.getRewardToken(rewardOption.rewardTokenAddress).symbol || "";
              return /* @__PURE__ */ this.$render("i-hstack", {
                horizontalAlignment: "space-between"
              }, /* @__PURE__ */ this.$render("i-label", {
                class: "mr-025",
                caption: "You Earned"
              }), /* @__PURE__ */ this.$render("i-label", {
                caption: `${earnedQty} ${earnedSymbol}`
              }));
            })), /* @__PURE__ */ this.$render("i-label", {
              visible: !!campaign.showContractLink,
              class: "view-contract pointer",
              margin: { top: isClaim ? 0 : "auto" },
              onClick: () => (0, import_store8.viewOnExplorerByAddress)(chainId, option.address)
            }, /* @__PURE__ */ this.$render("i-label", {
              caption: "View Contract"
            }), /* @__PURE__ */ this.$render("i-icon", {
              name: "external-link-alt",
              width: "14",
              height: "14",
              fill: campaign.customColorText || "#fff",
              class: "inline-block"
            }))));
          }))));
        }
        ;
        this.stakingElm.clearInnerHTML();
        this.stakingElm.append(this.noCampaignSection, ...nodeItems);
      };
      this.$eventBus = import_components13.application.EventBus;
      this.registerEvent();
    }
    validateConfig() {
    }
    async getData() {
      return this.data;
    }
    async setData(value) {
      this.data = value;
      this.pnlConfig.visible = false;
      this.stakingLayout.visible = true;
      this.onSetupPage((0, import_store8.isWalletConnected)());
    }
    async getTag() {
      return this.tag;
    }
    async setTag(value) {
      this.tag = value;
    }
    async edit() {
      this.pnlConfig.showInputCampaign(this.isNew);
      this.stakingLayout.visible = false;
      this.pnlConfig.visible = true;
    }
    async confirm() {
      this.setData(this.data);
    }
    async discard() {
    }
    async config() {
    }
    async onConfigSave(campaign) {
      this.data = campaign;
      this.pnlConfig.visible = false;
      this.stakingLayout.visible = true;
      this.onSetupPage((0, import_store8.isWalletConnected)());
    }
    async onEditCampaign(isNew) {
      this.isNew = isNew;
      this.edit();
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        id: "stakingComponent",
        class: "staking-component",
        minHeight: 200
      }, /* @__PURE__ */ this.$render("i-panel", {
        id: "stakingLayout",
        class: "staking-layout",
        minHeight: 290
      }, /* @__PURE__ */ this.$render("i-vstack", {
        id: "loadingElm",
        class: "i-loading-overlay"
      }, /* @__PURE__ */ this.$render("i-vstack", {
        class: "i-loading-spinner",
        horizontalAlignment: "center",
        verticalAlignment: "center"
      }, /* @__PURE__ */ this.$render("i-icon", {
        class: "i-loading-spinner_icon",
        image: { url: import_assets5.default.fullPath("img/loading.svg"), width: 36, height: 36 }
      }), /* @__PURE__ */ this.$render("i-label", {
        caption: "Loading...",
        font: { color: "#FD4A4C", size: "1.5em" },
        class: "i-loading-spinner_text"
      }))), /* @__PURE__ */ this.$render("i-panel", {
        id: "stakingElm",
        class: "wrapper"
      })), /* @__PURE__ */ this.$render("i-panel", {
        id: "manageStakeElm"
      }));
    }
  };
  StakingBlock = __decorateClass([
    import_components13.customModule,
    (0, import_components13.customElements)("i-section-staking")
  ], StakingBlock);
})();
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! moment.js
//! momentjs.com
//! version : 2.29.1
