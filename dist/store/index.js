define("@staking/store",(require, exports)=>{
  var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/moment/moment.js
var require_moment = __commonJS({
  "node_modules/moment/moment.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory();
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
        if (locales[name] === void 0 && typeof module2 !== "undefined" && module2 && module2.exports) {
          try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = require;
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

// src/store/data/tokens/mainnet/bsc.json
var require_bsc = __commonJS({
  "src/store/data/tokens/mainnet/bsc.json"(exports, module2) {
    module2.exports = [
      {
        name: "OpenSwap",
        symbol: "OSWAP",
        address: "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
        decimals: 18,
        isCommon: true
      },
      {
        name: "PancakeSwap Token",
        symbol: "CAKE",
        address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
        decimals: 18
      },
      {
        name: "Cardano Token",
        symbol: "ADA",
        address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
        decimals: 18
      },
      {
        name: "AdEx Network",
        symbol: "ADX",
        address: "0x6bfF4Fb161347ad7de4A625AE5aa3A1CA7077819",
        decimals: 18
      },
      {
        name: "My Neigbor Alice",
        symbol: "ALICE",
        address: "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
        decimals: 6
      },
      {
        name: "AlpaToken",
        symbol: "ALPA",
        address: "0xc5E6689C9c8B02be7C49912Ef19e79cF24977f03",
        decimals: 18
      },
      {
        name: "Alpaca",
        symbol: "ALPACA",
        address: "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
        decimals: 18
      },
      {
        name: "AlphaToken",
        symbol: "ALPHA",
        address: "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
        decimals: 18
      },
      {
        name: "Ampleforth",
        symbol: "AMPL",
        address: "0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F",
        decimals: 9
      },
      {
        name: "Ankr",
        symbol: "ANKR",
        address: "0xf307910A4c7bbc79691fD374889b36d8531B08e3",
        decimals: 18
      },
      {
        name: "anyMTLX",
        symbol: "anyMTLX",
        address: "0x5921DEE8556c4593EeFCFad3CA5e2f618606483b",
        decimals: 18
      },
      {
        name: "APYSwap",
        symbol: "APYS",
        address: "0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7",
        decimals: 18
      },
      {
        name: "ARPA",
        symbol: "ARPA",
        address: "0x6F769E65c14Ebd1f68817F5f1DcDb61Cfa2D6f7e",
        decimals: 18
      },
      {
        name: "ARIVA",
        symbol: "ARV",
        address: "0x6679eB24F59dFe111864AEc72B443d1Da666B360",
        decimals: 8
      },
      {
        name: "AS Roma",
        symbol: "ASR",
        address: "0x80D5f92C2c8C682070C95495313dDB680B267320",
        decimals: 2
      },
      {
        name: "Automata",
        symbol: "ATA",
        address: "0xA2120b9e674d3fC3875f415A7DF52e382F141225",
        decimals: 18
      },
      {
        name: "Atletico de Madrid",
        symbol: "ATM",
        address: "0x25E9d05365c867E59C1904E7463Af9F312296f9E",
        decimals: 2
      },
      {
        name: "Cosmos Token",
        symbol: "ATOM",
        address: "0x0Eb3a705fc54725037CC9e008bDede697f62F335",
        decimals: 18
      },
      {
        name: "AUTOv2",
        symbol: "AUTO",
        address: "0xa184088a740c695E156F91f5cC086a06bb78b827",
        decimals: 18
      },
      {
        name: "Axie Infinity Shard",
        symbol: "AXS",
        address: "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0",
        decimals: 18
      },
      {
        name: "BabyCake",
        symbol: "BABYCAKE",
        address: "0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c",
        decimals: 18
      },
      {
        name: "Bakery Token",
        symbol: "BAKE",
        address: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
        decimals: 18
      },
      {
        name: "AllianceBlock",
        symbol: "bALBT",
        address: "0x72fAa679E1008Ad8382959FF48E392042A8b06f7",
        decimals: 18
      },
      {
        name: "BAND Protocol Token",
        symbol: "BAND",
        address: "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
        decimals: 18
      },
      {
        name: "Basic Attention Token",
        symbol: "BAT",
        address: "0x101d82428437127bF1608F699CD651e6Abf9766E",
        decimals: 18
      },
      {
        name: "bBADGER",
        symbol: "bBADGER",
        address: "0x1F7216fdB338247512Ec99715587bb97BBf96eae",
        decimals: 18
      },
      {
        name: "Conflux",
        symbol: "bCFX",
        address: "0x045c4324039dA91c52C55DF5D785385Aab073DcF",
        decimals: 18
      },
      {
        name: "Bitcoin Cash Token",
        symbol: "BCH",
        address: "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
        decimals: 18
      },
      {
        name: "bDIGG",
        symbol: "bDIGG",
        address: "0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA",
        decimals: 18
      },
      {
        name: "bDollar",
        symbol: "BDO",
        address: "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
        decimals: 18
      },
      {
        name: "Bella Protocol",
        symbol: "BEL",
        address: "0x8443f091997f06a61670B735ED92734F5628692F",
        decimals: 18
      },
      {
        name: "Belt",
        symbol: "BELT",
        address: "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
        decimals: 18
      },
      {
        name: "Beta Finance",
        symbol: "BETA",
        address: "0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28",
        decimals: 18
      },
      {
        name: "Beacon ETH",
        symbol: "BETH",
        address: "0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B",
        decimals: 18
      },
      {
        name: "b.earnfi",
        symbol: "BFI",
        address: "0x81859801b01764D4f0Fa5E64729f5a6C3b91435b",
        decimals: 18
      },
      {
        name: "Beefy.finance",
        symbol: "BIFI",
        address: "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
        decimals: 18
      },
      {
        name: "BLINk",
        symbol: "BLK",
        address: "0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F",
        decimals: 6
      },
      {
        name: "Binamon",
        symbol: "BMON",
        address: "0x08ba0619b1e7A582E0BCe5BBE9843322C954C340",
        decimals: 18
      },
      {
        name: "Multiplier",
        symbol: "bMXX",
        address: "0x4131b87F74415190425ccD873048C708F8005823",
        decimals: 18
      },
      {
        name: "Bondly",
        symbol: "BONDLY",
        address: "0x5D0158A5c3ddF47d4Ea4517d8DB0D76aA2e87563",
        decimals: 18
      },
      {
        name: "OPEN Governance Token",
        symbol: "bOPEN",
        address: "0xF35262a9d427F96d2437379eF090db986eaE5d42",
        decimals: 18
      },
      {
        name: "BoringDAO",
        symbol: "BORING",
        address: "0xffEecbf8D7267757c2dc3d13D730E97E15BfdF7F",
        decimals: 18
      },
      {
        name: "BunnyPark",
        symbol: "BP",
        address: "0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1",
        decimals: 18
      },
      {
        name: "ROOBEE",
        symbol: "bROOBEE",
        address: "0xE64F5Cb844946C1F102Bd25bBD87a5aB4aE89Fbe",
        decimals: 18
      },
      {
        name: "Berry",
        symbol: "BRY",
        address: "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830",
        decimals: 18
      },
      {
        name: "BSC Ecosystem Defi blue chips",
        symbol: "BSCDEFI",
        address: "0x40E46dE174dfB776BB89E04dF1C47d8a66855EB3",
        decimals: 18
      },
      {
        name: "BSCPad",
        symbol: "BSCPAD",
        address: "0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700",
        decimals: 18
      },
      {
        name: "BSCEX",
        symbol: "BSCX",
        address: "0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587",
        decimals: 18
      },
      {
        name: "Binance Pegged Bitcoin",
        symbol: "BTCB",
        address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
        decimals: 18
      },
      {
        name: "Standard BTC Hashrate Token",
        symbol: "BTCST",
        address: "0x78650B139471520656b9E7aA7A5e9276814a38e9",
        decimals: 17
      },
      {
        name: "Bittrue",
        symbol: "BTR",
        address: "0x5a16E8cE8cA316407c6E6307095dc9540a8D62B3",
        decimals: 18
      },
      {
        name: "Bittorrent",
        symbol: "BTT",
        address: "0x8595F9dA7b868b1822194fAEd312235E43007b49",
        decimals: 18
      },
      {
        name: "Bunny Token",
        symbol: "BUNNY",
        address: "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
        decimals: 18
      },
      {
        name: "Burger Swap",
        symbol: "BURGER",
        address: "0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f",
        decimals: 18
      },
      {
        name: "Binance Pegged BUSD",
        symbol: "BUSD",
        address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        decimals: 18,
        isCommon: true
      },
      {
        name: "BUX",
        symbol: "BUX",
        address: "0x211FfbE424b90e25a15531ca322adF1559779E45",
        decimals: 18
      },
      {
        name: "Coin98",
        symbol: "C98",
        address: "0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6",
        decimals: 18
      },
      {
        name: "CanYaCoin",
        symbol: "CAN",
        address: "0x007EA5C0Ea75a8DF45D288a4debdD5bb633F9e56",
        decimals: 18
      },
      {
        name: "CryptoArt.ai",
        symbol: "CART",
        address: "0x5C8C8D560048F34E5f7f8ad71f2f81a89DBd273e",
        decimals: 18
      },
      {
        name: "ChainGuardians",
        symbol: "CGG",
        address: "0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2",
        decimals: 18
      },
      {
        name: "Tranchess",
        symbol: "CHESS",
        address: "0x20de22029ab63cf9A7Cf5fEB2b737Ca1eE4c82A6",
        decimals: 18
      },
      {
        name: "Chromia",
        symbol: "CHR",
        address: "0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE",
        decimals: 6
      },
      {
        name: "Compound Finance",
        symbol: "COMP",
        address: "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8",
        decimals: 18
      },
      {
        name: "Contentos",
        symbol: "COS",
        address: "0x96Dd399F9c3AFda1F194182F71600F1B65946501",
        decimals: 18
      },
      {
        name: "Cream",
        symbol: "CREAM",
        address: "0xd4CB328A82bDf5f03eB737f37Fa6B370aef3e888",
        decimals: 18
      },
      {
        name: "CertiK Token",
        symbol: "CTK",
        address: "0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929",
        decimals: 6
      },
      {
        name: "Concentrated Voting Power",
        symbol: "CVP",
        address: "0x5Ec3AdBDae549Dce842e24480Eb2434769e22B2E",
        decimals: 18
      },
      {
        name: "Cyclone",
        symbol: "CYC",
        address: "0x810EE35443639348aDbbC467b33310d2AB43c168",
        decimals: 18
      },
      {
        name: "Binance Pegged DAI",
        symbol: "DAI",
        address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
        decimals: 18,
        isCommon: true
      },
      {
        name: "Dego.Finance",
        symbol: "DEGO",
        address: "0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC",
        decimals: 18
      },
      {
        name: "Deri",
        symbol: "DERI",
        address: "0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5",
        decimals: 18
      },
      {
        name: "DeXe",
        symbol: "DEXE",
        address: "0x039cB485212f996A9DBb85A9a75d898F94d38dA6",
        decimals: 18
      },
      {
        name: "DefiDollar DAO",
        symbol: "DFD",
        address: "0x9899a98b222fCb2f3dbee7dF45d943093a4ff9ff",
        decimals: 18
      },
      {
        name: "DFuture",
        symbol: "DFT",
        address: "0x42712dF5009c20fee340B245b510c0395896cF6e",
        decimals: 18
      },
      {
        name: "Decentral Games",
        symbol: "DG",
        address: "0x9Fdc3ae5c814b79dcA2556564047C5e7e5449C19",
        decimals: 18
      },
      {
        name: "Ditto",
        symbol: "DITTO",
        address: "0x233d91A0713155003fc4DcE0AFa871b508B3B715",
        decimals: 9
      },
      {
        name: "Dodo",
        symbol: "DODO",
        address: "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
        decimals: 18
      },
      {
        name: "Dogecoin",
        symbol: "DOGE",
        address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
        decimals: 8
      },
      {
        name: "Dopple Finance",
        symbol: "DOP",
        address: "0x844FA82f1E54824655470970F7004Dd90546bB28",
        decimals: 18
      },
      {
        name: "Polkadot Token",
        symbol: "DOT",
        address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
        decimals: 18
      },
      {
        name: "Dusk",
        symbol: "DUSK",
        address: "0xB2BD0749DBE21f623d9BABa856D3B0f0e1BFEc9C",
        decimals: 18
      },
      {
        name: "Dvision Network",
        symbol: "DVI",
        address: "0x758FB037A375F17c7e195CC634D77dA4F554255B",
        decimals: 18
      },
      {
        name: "Elrond",
        symbol: "EGLD",
        address: "0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe",
        decimals: 18
      },
      {
        name: "EOS Token",
        symbol: "EOS",
        address: "0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6",
        decimals: 18
      },
      {
        name: "Ellipsis",
        symbol: "EPS",
        address: "0xA7f552078dcC247C2684336020c03648500C6d9F",
        decimals: 18
      },
      {
        name: "Binance Pegged ETH",
        symbol: "ETH",
        address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        decimals: 18
      },
      {
        name: "Easy V2",
        symbol: "EZ",
        address: "0x5512014efa6Cd57764Fa743756F7a6Ce3358cC83",
        decimals: 18
      },
      {
        name: "Filecoin",
        symbol: "FIL",
        address: "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153",
        decimals: 18
      },
      {
        name: "Refinable",
        symbol: "FINE",
        address: "0x4e6415a5727ea08aAE4580057187923aeC331227",
        decimals: 18
      },
      {
        name: "ForTube",
        symbol: "FOR",
        address: "0x658A109C5900BC6d2357c87549B651670E5b0539",
        decimals: 18
      },
      {
        name: "Formation Finance",
        symbol: "FORM",
        address: "0x25A528af62e56512A19ce8c3cAB427807c28CC19",
        decimals: 18
      },
      {
        name: "fry.world",
        symbol: "FRIES",
        address: "0x393B312C01048b3ed2720bF1B090084C09e408A1",
        decimals: 18
      },
      {
        name: "Frontier Token",
        symbol: "FRONT",
        address: "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
        decimals: 18
      },
      {
        name: "Fuel",
        symbol: "FUEL",
        address: "0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
        decimals: 18
      },
      {
        name: "GreenTrust",
        symbol: "GNT",
        address: "0xF750A26EB0aCf95556e8529E72eD530f3b60f348",
        decimals: 18
      },
      {
        name: "Gourmet Galaxy",
        symbol: "GUM",
        address: "0xc53708664b99DF348dd27C3Ac0759d2DA9c40462",
        decimals: 18
      },
      {
        name: "Hacken",
        symbol: "HAI",
        address: "0xaA9E582e5751d703F85912903bacADdFed26484C",
        decimals: 8
      },
      {
        name: "Hakka Finance",
        symbol: "HAKKA",
        address: "0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC",
        decimals: 18
      },
      {
        name: "HARD",
        symbol: "HARD",
        address: "0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4",
        decimals: 6
      },
      {
        name: "Helmet.insure",
        symbol: "Helmet",
        address: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
        decimals: 18
      },
      {
        name: "MetaHero",
        symbol: "HERO",
        address: "0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13",
        decimals: 18
      },
      {
        name: "StepHero",
        symbol: "HERO",
        address: "0xE8176d414560cFE1Bf82Fd73B986823B89E4F545",
        decimals: 18
      },
      {
        name: "Hedget",
        symbol: "HGET",
        address: "0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731",
        decimals: 6
      },
      {
        name: "Hoo",
        symbol: "HOO",
        address: "0xE1d1F66215998786110Ba0102ef558b22224C016",
        decimals: 8
      },
      {
        name: "Hot Cross Token",
        symbol: "HOTCROSS",
        address: "0x4FA7163E153419E0E1064e418dd7A99314Ed27b6",
        decimals: 18
      },
      {
        name: "Hotbit",
        symbol: "HTB",
        address: "0x4e840AADD28DA189B9906674B4Afcb77C128d9ea",
        decimals: 18
      },
      {
        name: "HYFI",
        symbol: "HYFI",
        address: "0x9a319b959e33369C5eaA494a770117eE3e585318",
        decimals: 18
      },
      {
        name: "Horizon Protocol",
        symbol: "HZN",
        address: "0xC0eFf7749b125444953ef89682201Fb8c6A917CD",
        decimals: 18
      },
      {
        name: "Impossible Finance",
        symbol: "IF",
        address: "0xB0e1fc65C1a741b4662B813eB787d369b8614Af1",
        decimals: 18
      },
      {
        name: "Injective Protocol",
        symbol: "INJ",
        address: "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
        decimals: 18
      },
      {
        name: "IoTeX",
        symbol: "IOTX",
        address: "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5",
        decimals: 18
      },
      {
        name: "Itam",
        symbol: "ITAM",
        address: "0x04C747b40Be4D535fC83D09939fb0f626F32800B",
        decimals: 18
      },
      {
        name: "Juggernaut Finance",
        symbol: "JGN",
        address: "0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75",
        decimals: 18
      },
      {
        name: "Juventus",
        symbol: "JUV",
        address: "0xC40C9A843E1c6D01b7578284a9028854f6683b1B",
        decimals: 2
      },
      {
        name: "Kalmar",
        symbol: "KALM",
        address: "0x4BA0057f784858a48fe351445C672FF2a3d43515",
        decimals: 18
      },
      {
        name: "KAVA",
        symbol: "KAVA",
        address: "0x5F88AB06e8dfe89DF127B2430Bba4Af600866035",
        decimals: 6
      },
      {
        name: "Kattana",
        symbol: "KTN",
        address: "0xDAe6c2A48BFAA66b43815c5548b10800919c993E",
        decimals: 18
      },
      {
        name: "Qian Governance Token",
        symbol: "KUN",
        address: "0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584",
        decimals: 18
      },
      {
        name: "FC Lazio Fan Token",
        symbol: "LAZIO",
        address: "0x77d547256A2cD95F32F67aE0313E450Ac200648d",
        decimals: 8
      },
      {
        name: "Lien",
        symbol: "LIEN",
        address: "0x5d684ADaf3FcFe9CFb5ceDe3abf02F0Cdd1012E3",
        decimals: 8
      },
      {
        name: "Lightning",
        symbol: "LIGHT",
        address: "0x037838b556d9c9d654148a284682C55bB5f56eF4",
        decimals: 18
      },
      {
        name: "Linear Finance",
        symbol: "LINA",
        address: "0x762539b45A1dCcE3D36d080F74d1AED37844b878",
        decimals: 18
      },
      {
        name: "ChainLink Token",
        symbol: "LINK",
        address: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
        decimals: 18
      },
      {
        name: "Litentry",
        symbol: "LIT",
        address: "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
        decimals: 18
      },
      {
        name: "Lympo Market Token",
        symbol: "LMT",
        address: "0x9617857E191354dbEA0b714d78Bc59e57C411087",
        decimals: 18
      },
      {
        name: "Litecoin Token",
        symbol: "LTC",
        address: "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
        decimals: 18
      },
      {
        name: "LTO Network",
        symbol: "LTO",
        address: "0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd",
        decimals: 18
      },
      {
        name: "lUSD",
        symbol: "lUSD",
        address: "0x23e8a70534308a4AAF76fb8C32ec13d17a3BD89e",
        decimals: 18
      },
      {
        name: "Mirror AMZN Token",
        symbol: "mAMZN",
        address: "0x3947B992DC0147D2D89dF0392213781b04B25075",
        decimals: 18
      },
      {
        name: "Unmarshal",
        symbol: "MARSH",
        address: "0x2FA5dAF6Fe0708fBD63b1A7D1592577284f52256",
        decimals: 18
      },
      {
        name: "Mask Network",
        symbol: "MASK",
        address: "0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3",
        decimals: 18
      },
      {
        name: "Math",
        symbol: "MATH",
        address: "0xF218184Af829Cf2b0019F8E6F0b2423498a36983",
        decimals: 18
      },
      {
        name: "Mobox",
        symbol: "MBOX",
        address: "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377",
        decimals: 18
      },
      {
        name: "MCDEX",
        symbol: "MCB",
        address: "0x5fE80d2CD054645b9419657d3d10d26391780A7B",
        decimals: 18
      },
      {
        name: "Mirror COIN",
        symbol: "mCOIN",
        address: "0x49022089e78a8D46Ec87A3AF86a1Db6c189aFA6f",
        decimals: 18
      },
      {
        name: "MacaronSwap",
        symbol: "MCRN",
        address: "0xacb2d47827C9813AE26De80965845D80935afd0B",
        decimals: 18
      },
      {
        name: "Mirror GOOGL Token",
        symbol: "mGOOGL",
        address: "0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f",
        decimals: 18
      },
      {
        name: "Mirror Finance",
        symbol: "MIR",
        address: "0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9",
        decimals: 18
      },
      {
        name: "Mix",
        symbol: "MIX",
        address: "0xB67754f5b4C704A24d2db68e661b2875a4dDD197",
        decimals: 18
      },
      {
        name: "Mirror NFLX Token",
        symbol: "mNFLX",
        address: "0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc",
        decimals: 18
      },
      {
        name: "Meter",
        symbol: "MTRG",
        address: "0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F",
        decimals: 18
      },
      {
        name: "Mirror TSLA Token",
        symbol: "mTSLA",
        address: "0xF215A127A196e3988C09d052e16BcFD365Cd7AA3",
        decimals: 18
      },
      {
        name: "MX Token",
        symbol: "MX",
        address: "0x9F882567A62a5560d147d64871776EeA72Df41D3",
        decimals: 18
      },
      {
        name: "NAOS Finance",
        symbol: "NAOS",
        address: "0x758d08864fB6cCE3062667225ca10b8F00496cc2",
        decimals: 18
      },
      {
        name: "NAR Token",
        symbol: "NAR",
        address: "0xA1303E6199b319a891b79685F0537D289af1FC83",
        decimals: 18
      },
      {
        name: "APENFT",
        symbol: "NFT",
        address: "0x1fC9004eC7E5722891f5f38baE7678efCB11d34D",
        decimals: 6
      },
      {
        name: "Nerve Finance",
        symbol: "NRV",
        address: "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
        decimals: 18
      },
      {
        name: "Nuls",
        symbol: "NULS",
        address: "0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B",
        decimals: 8
      },
      {
        name: "NerveNetwork",
        symbol: "NVT",
        address: "0xf0E406c49C63AbF358030A299C0E00118C4C6BA5",
        decimals: 8
      },
      {
        name: "Nyanswop Token",
        symbol: "NYA",
        address: "0xbFa0841F7a90c4CE6643f651756EE340991F99D5",
        decimals: 18
      },
      {
        name: "O3 Swap",
        symbol: "O3",
        address: "0xEe9801669C6138E84bD50dEB500827b776777d28",
        decimals: 18
      },
      {
        name: "Oddz",
        symbol: "ODDZ",
        address: "0xCD40F2670CF58720b694968698A5514e924F742d",
        decimals: 18
      },
      {
        name: "OG",
        symbol: "OG",
        address: "0xf05E45aD22150677a017Fbd94b84fBB63dc9b44c",
        decimals: 2
      },
      {
        name: "Oin Finance",
        symbol: "OIN",
        address: "0x658E64FFcF40D240A43D52CA9342140316Ae44fA",
        decimals: 8
      },
      {
        name: "Harmony One",
        symbol: "ONE",
        address: "0x03fF0ff224f904be3118461335064bB48Df47938",
        decimals: 18
      },
      {
        name: "BigOne Token",
        symbol: "ONE",
        address: "0x04BAf95Fd4C52fd09a56D840bAEe0AB8D7357bf0",
        decimals: 18
      },
      {
        name: "Ontology Token",
        symbol: "ONT",
        address: "0xFd7B3A77848f1C2D67E05E54d78d174a0C850335",
        decimals: 18
      },
      {
        name: "The Orbs Network",
        symbol: "ORBS",
        address: "0xeBd49b26169e1b52c04cFd19FCf289405dF55F80",
        decimals: 18
      },
      {
        name: "pBTC",
        symbol: "pBTC",
        address: "0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C",
        decimals: 18
      },
      {
        name: "PolyCrowns",
        symbol: "pCWS",
        address: "0xbcf39F0EDDa668C58371E519AF37CA705f2bFcbd",
        decimals: 18
      },
      {
        name: "Perlin X",
        symbol: "PERL",
        address: "0x0F9E4D49f25de22c2202aF916B681FBB3790497B",
        decimals: 18
      },
      {
        name: "Phala Network",
        symbol: "PHA",
        address: "0x0112e557d400474717056C4e6D40eDD846F38351",
        decimals: 18
      },
      {
        name: "Polkamon",
        symbol: "PMON",
        address: "0x1796ae0b0fa4862485106a0de9b654eFE301D0b2",
        decimals: 18
      },
      {
        name: "PNT",
        symbol: "PNT",
        address: "0xdaacB0Ab6Fb34d24E8a67BfA14BF4D95D4C7aF92",
        decimals: 18
      },
      {
        name: "pTokens OPEN",
        symbol: "pOPEN",
        address: "0xaBaE871B7E3b67aEeC6B46AE9FE1A91660AadAC5",
        decimals: 18
      },
      {
        name: "Moonpot",
        symbol: "POTS",
        address: "0x3Fcca8648651E5b974DD6d3e50F61567779772A8",
        decimals: 18
      },
      {
        name: "Prometeus",
        symbol: "PROM",
        address: "0xaF53d56ff99f1322515E54FdDE93FF8b3b7DAFd5",
        decimals: 18
      },
      {
        name: "Prosper",
        symbol: "PROS",
        address: "0xEd8c8Aa8299C10f067496BB66f8cC7Fb338A3405",
        decimals: 18
      },
      {
        name: "Paris Saint-Germain",
        symbol: "PSG",
        address: "0xBc5609612b7C44BEf426De600B5fd1379DB2EcF1",
        decimals: 2
      },
      {
        name: "Qubit Token",
        symbol: "QBT",
        address: "0x17B7163cf1Dbd286E262ddc68b553D899B93f526",
        decimals: 18
      },
      {
        name: "QuarkChain Token",
        symbol: "QKC",
        address: "0xA1434F1FC3F437fa33F7a781E041961C0205B5Da",
        decimals: 18
      },
      {
        name: "QIAN second generation dollar",
        symbol: "QSD",
        address: "0x07AaA29E63FFEB2EBf59B33eE61437E1a91A3bb2",
        decimals: 18
      },
      {
        name: "QUSD Stablecoin",
        symbol: "QUSD",
        address: "0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E",
        decimals: 18
      },
      {
        name: "Rabbit Finance",
        symbol: "RABBIT",
        address: "0x95a1199EBA84ac5f19546519e287d43D2F0E1b41",
        decimals: 18
      },
      {
        name: "Ramp DEFI",
        symbol: "RAMP",
        address: "0x8519EA49c997f50cefFa444d240fB655e89248Aa",
        decimals: 18
      },
      {
        name: "Reef",
        symbol: "REEF",
        address: "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
        decimals: 18
      },
      {
        name: "renBTC",
        symbol: "renBTC",
        address: "0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c",
        decimals: 8
      },
      {
        name: "renDOGE",
        symbol: "renDOGE",
        address: "0xc3fEd6eB39178A541D274e6Fc748d48f0Ca01CC3",
        decimals: 8
      },
      {
        name: "renZEC",
        symbol: "renZEC",
        address: "0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7",
        decimals: 8
      },
      {
        name: "REVV",
        symbol: "REVV",
        address: "0x833F307aC507D47309fD8CDD1F835BeF8D702a93",
        decimals: 18
      },
      {
        name: "RFOX",
        symbol: "RFOX",
        address: "0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5",
        decimals: 18
      },
      {
        name: "Rangers Protocol",
        symbol: "RPG",
        address: "0xc2098a8938119A52B1F7661893c0153A6CB116d5",
        decimals: 18
      },
      {
        name: "rUSD",
        symbol: "rUSD",
        address: "0x07663837218A003e66310a01596af4bf4e44623D",
        decimals: 18
      },
      {
        name: "SafeMoon",
        symbol: "SAFEMOON",
        address: "0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3",
        decimals: 9
      },
      {
        name: "bDollar Share",
        symbol: "sBDO",
        address: "0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740",
        decimals: 18
      },
      {
        name: "SafePal Token",
        symbol: "SFP",
        address: "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
        decimals: 18
      },
      {
        name: "Seedify",
        symbol: "SFUND",
        address: "0x477bC8d23c634C154061869478bce96BE6045D12",
        decimals: 18
      },
      {
        name: "CryptoBlades Skill Token",
        symbol: "SKILL",
        address: "0x154A9F9cbd3449AD22FDaE23044319D6eF2a1Fab",
        decimals: 18
      },
      {
        name: "SPARTAN PROTOCOL TOKEN",
        symbol: "SPARTA",
        address: "0x3910db0600eA925F63C36DdB1351aB6E2c6eb102",
        decimals: 18
      },
      {
        name: "Splintershards",
        symbol: "SPS",
        address: "0x1633b7157e7638C4d6593436111Bf125Ee74703F",
        decimals: 18
      },
      {
        name: "StableXSwap",
        symbol: "STAX",
        address: "0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4",
        decimals: 18
      },
      {
        name: "Sushi",
        symbol: "SUSHI",
        address: "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4",
        decimals: 18
      },
      {
        name: "Suterusu",
        symbol: "SUTER",
        address: "0x4CfbBdfBd5BF0814472fF35C72717Bd095ADa055",
        decimals: 18
      },
      {
        name: "Swampy",
        symbol: "SWAMP",
        address: "0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d",
        decimals: 18
      },
      {
        name: "SWGToken",
        symbol: "SWG",
        address: "0xe792f64C582698b8572AAF765bDC426AC3aEfb6B",
        decimals: 18
      },
      {
        name: "Swingby",
        symbol: "SWINGBY",
        address: "0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739",
        decimals: 18
      },
      {
        name: "Switcheo",
        symbol: "SWTH",
        address: "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C",
        decimals: 8
      },
      {
        name: "Swipe",
        symbol: "SXP",
        address: "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
        decimals: 18
      },
      {
        name: "Tau Bitcoin",
        symbol: "tBTC",
        address: "0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c",
        decimals: 9
      },
      {
        name: "Tau DOGE",
        symbol: "tDOGE",
        address: "0xe550a593d09FBC8DCD557b5C88Cea6946A8b404A",
        decimals: 8
      },
      {
        name: "Tenet",
        symbol: "TEN",
        address: "0xdFF8cb622790b7F92686c722b02CaB55592f152C",
        decimals: 18
      },
      {
        name: "TitanSwap",
        symbol: "TITAN",
        address: "0xe898EDc43920F357A93083F1d4460437dE6dAeC2",
        decimals: 18
      },
      {
        name: "TokoCrypto",
        symbol: "TKO",
        address: "0x9f589e3eabe42ebC94A44727b3f3531C0c877809",
        decimals: 18
      },
      {
        name: "Alien Worlds",
        symbol: "TLM",
        address: "0x2222227E22102Fe3322098e4CBfE18cFebD57c95",
        decimals: 4
      },
      {
        name: "Telos",
        symbol: "TLOS",
        address: "0xb6C53431608E626AC81a9776ac3e999c5556717c",
        decimals: 18
      },
      {
        name: "TokenPocket",
        symbol: "TPT",
        address: "0xECa41281c24451168a37211F0bc2b8645AF45092",
        decimals: 4
      },
      {
        name: "Unitrade",
        symbol: "TRADE",
        address: "0x7af173F350D916358AF3e218Bdf2178494Beb748",
        decimals: 18
      },
      {
        name: "Tron",
        symbol: "TRX",
        address: "0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B",
        decimals: 18
      },
      {
        name: "True USD",
        symbol: "TUSD",
        address: "0x14016E85a25aeb13065688cAFB43044C2ef86784",
        decimals: 18
      },
      {
        name: "Trust Wallet",
        symbol: "TWT",
        address: "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
        decimals: 18
      },
      {
        name: "Tixl",
        symbol: "TXL",
        address: "0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5",
        decimals: 18
      },
      {
        name: "UpBots",
        symbol: "UBXT",
        address: "0xBbEB90cFb6FAFa1F69AA130B7341089AbeEF5811",
        decimals: 18
      },
      {
        name: "Unifi Token",
        symbol: "UNFI",
        address: "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
        decimals: 18
      },
      {
        name: "Uniswap",
        symbol: "UNI",
        address: "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
        decimals: 18
      },
      {
        name: "Binance Pegged USD Coin",
        symbol: "USDC",
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        decimals: 18
      },
      {
        name: "Binance Pegged USDT",
        symbol: "USDT",
        address: "0x55d398326f99059fF775485246999027B3197955",
        decimals: 18,
        isCommon: true
      },
      {
        name: "USDX",
        symbol: "USDX",
        address: "0x1203355742e76875154C0D13eB81DCD7711dC7d9",
        decimals: 6
      },
      {
        name: "UST Token",
        symbol: "UST",
        address: "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
        decimals: 18
      },
      {
        name: "VAI Stablecoin",
        symbol: "VAI",
        address: "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
        decimals: 18
      },
      {
        name: "Venus Reward Token",
        symbol: "VRT",
        address: "0x5F84ce30DC3cF7909101C69086c50De191895883",
        decimals: 18
      },
      {
        name: "Yieldwatch",
        symbol: "WATCH",
        address: "0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0",
        decimals: 18
      },
      {
        name: "Wault",
        symbol: "WAULTx",
        address: "0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21",
        decimals: 18
      },
      {
        name: "WBNB Token",
        symbol: "WBNB",
        address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        decimals: 18,
        isCommon: true,
        isWETH: true
      },
      {
        name: "BitWell Token",
        symbol: "WELL",
        address: "0xf07a32Eb035b786898c00bB1C64d8c6F8E7a46D5",
        decimals: 18
      },
      {
        name: "WaultSwap",
        symbol: "WEX",
        address: "0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90",
        decimals: 18
      },
      {
        name: "WINk",
        symbol: "WIN",
        address: "0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99",
        decimals: 18
      },
      {
        name: "Wrapped MASS",
        symbol: "WMASS",
        address: "0x7e396BfC8a2f84748701167c2d622F041A1D7a17",
        decimals: 8
      },
      {
        name: "Wootrade",
        symbol: "WOO",
        address: "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
        decimals: 18
      },
      {
        name: "Wall Street Games",
        symbol: "WSG",
        address: "0xA58950F05FeA2277d2608748412bf9F802eA4901",
        decimals: 18
      },
      {
        name: "Soteria",
        symbol: "wSOTE",
        address: "0x541E619858737031A1244A5d0Cd47E5ef480342c",
        decimals: 18
      },
      {
        name: "Xcademy",
        symbol: "XCAD",
        address: "0x431e0cD023a32532BF3969CddFc002c00E98429d",
        decimals: 18
      },
      {
        name: "Exeedme",
        symbol: "XED",
        address: "0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f",
        decimals: 18
      },
      {
        name: "XEND",
        symbol: "XEND",
        address: "0x4a080377f83D669D7bB83B3184a8A5E61B500608",
        decimals: 18
      },
      {
        name: "xMARK",
        symbol: "xMARK",
        address: "0x26A5dFab467d4f58fB266648CAe769503CEC9580",
        decimals: 9
      },
      {
        name: "XRP Token",
        symbol: "XRP",
        address: "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
        decimals: 18
      },
      {
        name: "Tezos Token",
        symbol: "XTZ",
        address: "0x16939ef78684453bfDFb47825F8a5F714f12623a",
        decimals: 18
      },
      {
        name: "Venus Token",
        symbol: "XVS",
        address: "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
        decimals: 18
      },
      {
        name: "yearn.finance",
        symbol: "YFI",
        address: "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e",
        decimals: 18
      },
      {
        name: "YFII.finance Token",
        symbol: "YFII",
        address: "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
        decimals: 18
      },
      {
        name: "Zcash Token",
        symbol: "ZEC",
        address: "0x1Ba42e5193dfA8B03D15dd1B86a3113bbBEF8Eeb",
        decimals: 18
      },
      {
        name: "ZeroSwapToken",
        symbol: "ZEE",
        address: "0x44754455564474A89358B2C2265883DF993b12F0",
        decimals: 18
      },
      {
        name: "Zilliqa",
        symbol: "ZIL",
        address: "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787",
        decimals: 12
      },
      {
        name: "openANX Token",
        symbol: "OAX",
        address: "0x31720B2276Df3b3B757B55845d17Eea184d4fc8f",
        decimals: 18
      },
      {
        name: "Impossible Decentralized Incubator Access Token",
        symbol: "IDIA",
        address: "0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89",
        decimals: 18
      },
      {
        name: "Biswap",
        symbol: "BSW",
        address: "0x965F527D9159dCe6288a2219DB51fc6Eef120dD1",
        decimals: 18
      },
      {
        name: "OpenSwap Booster - IDIA Series #1",
        symbol: "bqIDIA1",
        address: "0x46c5BC0656301c3DFb8EF8fc44CfBF89ef121348",
        decimals: 18
      },
      {
        name: "OGS",
        symbol: "OGS",
        address: "0x416947e6Fc78F158fd9B775fA846B72d768879c2",
        decimals: 18
      }
    ];
  }
});

// src/store/data/tokens/mainnet/ethereum.json
var require_ethereum = __commonJS({
  "src/store/data/tokens/mainnet/ethereum.json"(exports, module2) {
    module2.exports = [
      {
        address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
        name: "Aave",
        symbol: "AAVE",
        decimals: 18
      },
      {
        address: "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
        name: "Amp",
        symbol: "AMP",
        decimals: 18
      },
      {
        name: "Aragon Network Token",
        address: "0x960b236A07cf122663c4303350609A66A7B288C0",
        symbol: "ANT",
        decimals: 18
      },
      {
        name: "Balancer",
        address: "0xba100000625a3754423978a60c9317c58a424e3D",
        symbol: "BAL",
        decimals: 18
      },
      {
        address: "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
        name: "Band Protocol",
        symbol: "BAND",
        decimals: 18
      },
      {
        name: "Bancor Network Token",
        address: "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
        symbol: "BNT",
        decimals: 18
      },
      {
        name: "Compound",
        address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
        symbol: "COMP",
        decimals: 18
      },
      {
        name: "Curve DAO Token",
        address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
        symbol: "CRV",
        decimals: 18
      },
      {
        address: "0x41e5560054824eA6B0732E656E3Ad64E20e94E45",
        name: "Civic",
        symbol: "CVC",
        decimals: 8
      },
      {
        name: "Dai Stablecoin",
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        symbol: "DAI",
        decimals: 18,
        isCommon: true
      },
      {
        address: "0x0AbdAce70D3790235af448C88547603b945604ea",
        name: "district0x",
        symbol: "DNT",
        decimals: 18
      },
      {
        name: "Gnosis Token",
        address: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
        symbol: "GNO",
        decimals: 18
      },
      {
        address: "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
        name: "The Graph",
        symbol: "GRT",
        decimals: 18
      },
      {
        address: "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
        name: "Keep Network",
        symbol: "KEEP",
        decimals: 18
      },
      {
        name: "Kyber Network Crystal",
        address: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
        symbol: "KNC",
        decimals: 18
      },
      {
        name: "ChainLink Token",
        address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
        symbol: "LINK",
        decimals: 18
      },
      {
        name: "Loom Network",
        address: "0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0",
        symbol: "LOOM",
        decimals: 18
      },
      {
        name: "LoopringCoin V2",
        address: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
        symbol: "LRC",
        decimals: 18
      },
      {
        address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
        name: "Decentraland",
        symbol: "MANA",
        decimals: 18
      },
      {
        name: "Maker",
        address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
        symbol: "MKR",
        decimals: 18
      },
      {
        address: "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892",
        name: "Melon",
        symbol: "MLN",
        decimals: 18
      },
      {
        name: "Numeraire",
        address: "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
        symbol: "NMR",
        decimals: 18
      },
      {
        address: "0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
        name: "NuCypher",
        symbol: "NU",
        decimals: 18
      },
      {
        name: "Orchid",
        address: "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
        symbol: "OXT",
        decimals: 18
      },
      {
        name: "Republic Token",
        address: "0x408e41876cCCDC0F92210600ef50372656052a38",
        symbol: "REN",
        decimals: 18
      },
      {
        name: "Reputation Augur v1",
        address: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
        symbol: "REP",
        decimals: 18
      },
      {
        name: "Reputation Augur v2",
        address: "0x221657776846890989a759BA2973e427DfF5C9bB",
        symbol: "REPv2",
        decimals: 18
      },
      {
        name: "Synthetix Network Token",
        address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
        symbol: "SNX",
        decimals: 18
      },
      {
        name: "Storj Token",
        address: "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
        symbol: "STORJ",
        decimals: 8
      },
      {
        address: "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
        name: "tBTC",
        symbol: "TBTC",
        decimals: 18
      },
      {
        name: "UMA Voting Token v1",
        address: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
        symbol: "UMA",
        decimals: 18
      },
      {
        name: "Uniswap",
        address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        symbol: "UNI",
        decimals: 18
      },
      {
        name: "USDCoin",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        symbol: "USDC",
        decimals: 6,
        isCommon: true
      },
      {
        name: "Tether USD",
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        symbol: "USDT",
        decimals: 6,
        isCommon: true
      },
      {
        name: "Wrapped BTC",
        address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        symbol: "WBTC",
        decimals: 8,
        isCommon: true
      },
      {
        address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
        name: "yearn finance",
        symbol: "YFI",
        decimals: 18
      },
      {
        name: "0x Protocol Token",
        address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
        symbol: "ZRX",
        decimals: 18
      },
      {
        name: "openANX Token",
        address: "0x701C244b988a513c945973dEFA05de933b23Fe1D",
        symbol: "OAX",
        decimals: 18
      },
      {
        name: "Wrapped Ether",
        symbol: "WETH",
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        decimals: 18,
        isCommon: true,
        isWETH: true
      }
    ];
  }
});

// src/store/data/tokens/mainnet/polygon.json
var require_polygon = __commonJS({
  "src/store/data/tokens/mainnet/polygon.json"(exports, module2) {
    module2.exports = [
      {
        address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        name: "Wrapped Matic",
        symbol: "WMATIC",
        decimals: 18,
        isCommon: true,
        isWETH: true
      },
      { address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", name: "Wrapped Ether", symbol: "WETH", decimals: 18 },
      { address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", name: "USD Coin (PoS)", symbol: "USDC", decimals: 6, isCommon: true },
      { address: "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683", name: "SAND", symbol: "SAND", decimals: 18 },
      { address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", name: "(PoS) Tether USD", symbol: "USDT", decimals: 6 },
      { address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", name: "(PoS) Wrapped BTC", symbol: "WBTC", decimals: 8 },
      { address: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1", name: "miMATIC", symbol: "miMATIC", decimals: 18 },
      {
        address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        name: "(PoS) Dai Stablecoin",
        symbol: "DAI",
        decimals: 18,
        isCommon: true
      },
      { address: "0x831753DD7087CaC61aB5644b308642cc1c33Dc13", name: "Quickswap", symbol: "QUICK", decimals: 18 },
      { address: "0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32", name: "Telcoin (PoS)", symbol: "TEL", decimals: 2 },
      { address: "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7", name: "Aavegotchi GHST Token (PoS)", symbol: "GHST", decimals: 18 },
      { address: "0x580A84C73811E1839F75d86d75d88cCa0c241fF4", name: "Qi Dao", symbol: "QI", decimals: 18 },
      { address: "0xE5417Af564e4bFDA1c483642db72007871397896", name: "Gains Network", symbol: "GNS", decimals: 18 },
      { address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B", name: "Aave (PoS)", symbol: "AAVE", decimals: 18, isCommon: true },
      { address: "0xc6C855AD634dCDAd23e64DA71Ba85b8C51E5aD7c", name: "Decentral Games ICE", symbol: "ICE", decimals: 18 },
      { address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39", name: "ChainLink Token", symbol: "LINK", decimals: 18 },
      { address: "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b", name: "Avalanche Token", symbol: "AVAX", decimals: 18 },
      { address: "0xB85517b87BF64942adf3A0B9E4c71E4Bc5Caa4e5", name: "Fantom Token", symbol: "FTM", decimals: 18 },
      { address: "0x229b1b6C23ff8953D663C4cBB519717e323a0a84", name: "BLOK", symbol: "BLOK", decimals: 18 }
    ];
  }
});

// src/store/data/tokens/mainnet/avalanche.json
var require_avalanche = __commonJS({
  "src/store/data/tokens/mainnet/avalanche.json"(exports, module2) {
    module2.exports = [
      {
        address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
        name: "Wrapped AVAX",
        symbol: "WAVAX",
        decimals: 18,
        isCommon: true,
        isWETH: true
      },
      {
        name: "OpenSwap",
        symbol: "OSWAP",
        address: "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
        decimals: 18,
        isCommon: true
      },
      { address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664", name: "USD Coin", symbol: "USDC.e", decimals: 6, isCommon: true },
      {
        address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
        name: "Wrapped Ether",
        symbol: "WETH.e",
        decimals: 18,
        isCommon: true
      },
      { address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118", name: "Tether USD", symbol: "USDT.e", decimals: 6, isCommon: true },
      { address: "0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5", name: "BENQI", symbol: "QI", decimals: 18 },
      { address: "0x60781C2586D68229fde47564546784ab3fACA982", name: "Pangolin", symbol: "PNG", decimals: 18 },
      {
        address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
        name: "Dai Stablecoin",
        symbol: "DAI.e",
        decimals: 18,
        isCommon: true
      },
      { address: "0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4", name: "Avalaunch", symbol: "XAVA", decimals: 18 },
      { address: "0x130966628846BFd36ff31a822705796e8cb8C18D", name: "Magic Internet Money", symbol: "MIM", decimals: 18 },
      { address: "0x50b7545627a5162F82A992c33b87aDc75187B218", name: "Wrapped BTC", symbol: "WBTC.e", decimals: 8 },
      { address: "0x5947BB275c521040051D82396192181b413227A3", name: "Chainlink Token", symbol: "LINK.e", decimals: 18 },
      { address: "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64", name: "Frax", symbol: "FRAX", decimals: 18 },
      { address: "0x4f60a160D8C2DDdaAfe16FCC57566dB84D674BD6", name: "Jewels", symbol: "JEWEL", decimals: 18 },
      { address: "0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7", name: "Yak Token", symbol: "YAK", decimals: 18 },
      { address: "0x214DB107654fF987AD859F34125307783fC8e387", name: "Frax Share", symbol: "FXS", decimals: 18 },
      { address: "0x1C20E891Bab6b1727d14Da358FAe2984Ed9B59EB", name: "TrueUSD", symbol: "TUSD", decimals: 18 },
      { address: "0xCE1bFFBD5374Dac86a2893119683F4911a2F7814", name: "Spell Token", symbol: "SPELL", decimals: 18 },
      { address: "0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c", name: "PenguinToken", symbol: "PEFI", decimals: 18 },
      { address: "0x346A59146b9b4a77100D369a3d18E8007A9F46a6", name: "AVAI", symbol: "AVAI", decimals: 18 },
      { address: "0x321E7092a180BB43555132ec53AaA65a5bF84251", name: "Governance OHM", symbol: "gOHM", decimals: 18 },
      { address: "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd", name: "JoeToken", symbol: "JOE", decimals: 18 },
      { address: "0xdef1fac7Bf08f173D286BbBDcBeeADe695129840", name: "Cerby Token", symbol: "CERBY", decimals: 18 },
      { address: "0x63682bDC5f875e9bF69E201550658492C9763F89", name: "Betswap.gg", symbol: "BSGG", decimals: 18 },
      { address: "0x57319d41F71E81F3c65F2a47CA4e001EbAFd4F33", name: "JoeBar", symbol: "xJOE", decimals: 18 },
      { address: "0xe0Ce60AF0850bF54072635e66E79Df17082A1109", name: "Ice Token", symbol: "ICE", decimals: 18 },
      { address: "0x3Ee97d514BBef95a2f110e6B9b73824719030f7a", name: "Staked Spell Token", symbol: "sSPELL", decimals: 18 },
      { address: "0xCDEB5641dC5BF05845317B00643A713CCC3b22e6", name: "Huobi", symbol: "HT", decimals: 18 },
      { address: "0xA56B1b9f4e5A1A1e0868F5Fd4352ce7CdF0C2A4F", name: "Matic", symbol: "MATIC", decimals: 18 },
      { address: "0xF873633DF9D5cDd62BB1f402499CC470a72A02D7", name: "MoonRiver", symbol: "MOVR", decimals: 18 },
      { address: "0xA384Bc7Cdc0A93e686da9E7B8C0807cD040F4E0b", name: "WOWSwap", symbol: "WOW", decimals: 18 },
      { address: "0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b", name: "Wrapped Memo", symbol: "wMEMO", decimals: 18 },
      { address: "0xb54f16fB19478766A268F172C9480f8da1a7c9C3", name: "Time", symbol: "TIME", decimals: 18 },
      { address: "0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76", name: "SushiToken", symbol: "SUSHI", decimals: 18 },
      { address: "0x63a72806098Bd3D9520cC43356dD78afe5D386D9", name: "Aave Token", symbol: "AAVE", decimals: 18 }
    ];
  }
});

// src/store/data/tokens/mainnet/fantom.json
var require_fantom = __commonJS({
  "src/store/data/tokens/mainnet/fantom.json"(exports, module2) {
    module2.exports = [
      {
        address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
        name: "Wrapped Fantom",
        symbol: "WFTM",
        decimals: 18,
        isCommon: true,
        isWETH: true
      },
      { address: "0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7", name: "TOMB", symbol: "TOMB", decimals: 18 },
      { address: "0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37", name: "TSHARE", symbol: "TSHARE", decimals: 18 },
      { address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75", name: "USD Coin", symbol: "USDC", decimals: 6, isCommon: true },
      { address: "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE", name: "SpookyToken", symbol: "BOO", decimals: 18 },
      { address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E", name: "Dai Stablecoin", symbol: "DAI", decimals: 18 },
      { address: "0x74b23882a30290451A17c44f4F05243b6b58C76d", name: "Ethereum", symbol: "ETH", decimals: 18 },
      { address: "0x321162Cd933E2Be498Cd2267a90534A804051b11", name: "Bitcoin", symbol: "BTC", decimals: 8 },
      { address: "0x049d68029688eAbF473097a2fC38ef61633A3C7A", name: "Frapped USDT", symbol: "fUSDT", decimals: 6 },
      { address: "0x82f0B8B456c1A451378467398982d4834b6829c1", name: "Magic Internet Money", symbol: "MIM", decimals: 18 },
      { address: "0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475", name: "Scream", symbol: "SCREAM", decimals: 18 },
      { address: "0x5602df4A94eB6C680190ACCFA2A475621E0ddBdc", name: "Spartacus", symbol: "SPA", decimals: 9 },
      { address: "0xd8321AA83Fb0a4ECd6348D4577431310A6E0814d", name: "Geist.Finance Protocol Token", symbol: "GEIST", decimals: 18 },
      { address: "0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454", name: "Binance", symbol: "BNB", decimals: 18 },
      { address: "0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0", name: "Hector", symbol: "HEC", decimals: 9 },
      { address: "0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8", name: "ChainLink", symbol: "LINK", decimals: 18 },
      { address: "0x9879aBDea01a879644185341F7aF7d8343556B7a", name: "TrueUSD", symbol: "TUSD", decimals: 18 },
      { address: "0xfB98B335551a418cD0737375a2ea0ded62Ea213b", name: "miMATIC", symbol: "miMATIC", decimals: 18 },
      { address: "0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC", name: "Sushi", symbol: "SUSHI", decimals: 18 },
      { address: "0xdDcb3fFD12750B45d32E084887fdf1aABAb34239", name: "Anyswap", symbol: "ANY", decimals: 18 },
      { address: "0x511D35c52a3C244E7b8bd92c0C297755FbD89212", name: "Avalanche", symbol: "AVAX", decimals: 18 },
      { address: "0x468003B688943977e6130F4F68F23aad939a1040", name: "Spell Token", symbol: "SPELL", decimals: 18 },
      { address: "0x5Cc61A78F164885776AA610fb0FE1257df78E59B", name: "SpiritSwap Token", symbol: "SPIRIT", decimals: 18 },
      { address: "0x10b620b2dbAC4Faa7D7FFD71Da486f5D44cd86f9", name: "Liquid Driver", symbol: "LQDR", decimals: 18 },
      { address: "0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355", name: "Frax", symbol: "FRAX", decimals: 18 }
    ];
  }
});

// src/store/data/tokens/mainnet/cronos.json
var require_cronos = __commonJS({
  "src/store/data/tokens/mainnet/cronos.json"(exports, module2) {
    module2.exports = [
      {
        address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
        name: "WCRO",
        symbol: "WCRO",
        decimals: 18,
        isCommon: true,
        isWETH: true
      },
      {
        address: "0xe44Fd7fCb2b1581822D0c862B68222998a0c299a",
        name: "WETH",
        symbol: "WCRO",
        decimals: 18,
        isCommon: true
      },
      {
        address: "0x062E66477Faf219F25D27dCED647BF57C3107d52",
        name: "WBTC",
        symbol: "WBTC",
        decimals: 8,
        isCommon: true
      },
      {
        address: "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        isCommon: true
      },
      {
        address: "0x66e428c3f67a68878562e79A0234c1F83c208770",
        name: "USDT",
        symbol: "USDT",
        decimals: 6,
        isCommon: true
      },
      {
        address: "0xF2001B145b43032AAF5Ee2884e456CCd805F677D",
        name: "DAI",
        symbol: "DAI",
        decimals: 18,
        isCommon: true
      }
    ];
  }
});

// src/store/data/tokens/testnet/kovan.json
var require_kovan = __commonJS({
  "src/store/data/tokens/testnet/kovan.json"(exports, module2) {
    module2.exports = [
      {
        name: "Wrapped ETH",
        address: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
        symbol: "WETH",
        decimals: 18,
        isCommon: true,
        isWETH: true
      },
      {
        name: "USDC",
        address: "0xe7EB1b3f0b7f287a93c34A313552974669C425B6",
        symbol: "USDC",
        decimals: 6,
        isCommon: true
      },
      {
        name: "USDT",
        address: "0xDcdAFd9461c2df544F6E2165481E8174e45fEbD8",
        symbol: "USDT",
        decimals: 6,
        isCommon: true,
        isVaultToken: true
      },
      {
        name: "DAI",
        address: "0x25b061e0fcBB2Fbe38A5e669957eFF3DFE03d28f",
        symbol: "DAI",
        decimals: 18
      },
      {
        name: "openANX Token",
        address: "0xbe01a8e3F1E3841ccbf6eeEB09215A3a3bdBe336",
        symbol: "OAX",
        decimals: 18
      },
      {
        name: "CAKE",
        address: "0x5f33463E584D7D2Caa50b597984F0C4512A79aaf",
        symbol: "CAKE",
        decimals: 18
      },
      {
        name: "Uniswap",
        symbol: "UNI",
        address: "0xB409C977546d60BFBcd235Bb6cDfB71b1364e509",
        decimals: 18
      },
      {
        name: "OpenSwap",
        address: "0x28A6a9079fA8e041179cD13F4652af2B315b6fd8",
        symbol: "OSWAP",
        decimals: 18
      }
    ];
  }
});

// src/store/data/tokens/testnet/bsc-testnet.json
var require_bsc_testnet = __commonJS({
  "src/store/data/tokens/testnet/bsc-testnet.json"(exports, module2) {
    module2.exports = [
      {
        name: "Wrapped BNB",
        address: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
        symbol: "WBNB",
        decimals: 18,
        isCommon: true,
        isWETH: true
      },
      {
        name: "USDT",
        address: "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
        symbol: "USDT",
        decimals: 6,
        isCommon: true
      },
      {
        name: "BUSD Token",
        symbol: "BUSD",
        address: "0xDe9334C157968320f26e449331D6544b89bbD00F",
        decimals: 18,
        isCommon: true
      },
      {
        name: "USDC",
        address: "0x278B02d1b60AcD3334682F0dcF29AECcc62b28B3",
        symbol: "USDC",
        decimals: 18
      },
      {
        name: "DAI",
        address: "0xB78DAa2F1A2de8270a5641f052FaFC4b2b3ea3B1",
        symbol: "DAI",
        decimals: 18
      },
      {
        name: "openANX Token",
        address: "0x8677048f3eD472610514bA6EF6Ec2f03b550eBdB",
        symbol: "OAX",
        decimals: 18
      },
      {
        name: "CAKE",
        address: "0xEF899e45461F4614655AEe012ec69ae12F97F81e",
        symbol: "CAKE",
        decimals: 18
      },
      {
        name: "BakeryToken",
        address: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
        symbol: "BAKE",
        decimals: 18
      },
      {
        name: "Polkadot Token",
        symbol: "DOT",
        address: "0x6679b8031519fA81fE681a93e98cdddA5aafa95b",
        decimals: 18
      },
      {
        name: "Impossible Finance",
        symbol: "IF",
        address: "0x3245fD889abe511A7d57643905368F8Ec8fd4A92",
        decimals: 18
      },
      {
        name: "Coin98",
        symbol: "C98",
        address: "0x5EB137B421AE7Be6Ce26C3dE7c828c475C9a69b1",
        decimals: 18
      },
      {
        name: "Impossible Decentralized Incubator Access Token",
        symbol: "IDIA",
        address: "0x52423B7F0769d0365EbdD79342ce167eB9C29AE2",
        decimals: 18
      },
      {
        name: "OpenSwap",
        address: "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
        symbol: "OSWAP",
        decimals: 18,
        isCommon: true
      },
      {
        name: "mOpenSwap",
        address: "0xC2C76387eB1cd15f2f55D2463b5AAd6fca062EB1",
        symbol: "mOSWAP",
        decimals: 18
      },
      {
        name: "Project",
        address: "0x100c8C9eFCb56A253d5A82059647A2adEFDC984A",
        symbol: "PRO",
        decimals: 18
      },
      {
        name: "mProject",
        address: "0x05039f76eB9Dcb6aB49b4D5860980e32f976e17b",
        symbol: "mPRO",
        decimals: 18
      },
      {
        name: "mIDIA",
        address: "0x18CE3F88De23DC2A72f3aDDeB048caa01059E9f3",
        symbol: "mIDIA",
        decimals: 18
      },
      {
        name: "Testing",
        address: "0xc9E10b2a33631c1F9b185Df07198591d507CcE20",
        symbol: "TS",
        decimals: 18
      },
      {
        name: "tokenT",
        address: "0xb79aA5c1730Ad78dD958f05fD87022aeF3e50721",
        symbol: "TT",
        decimals: 18
      },
      {
        name: "JetSwap Token",
        address: "0x8839903E0D698e5976C39E34bDED66F7B9a1b8c9",
        symbol: "WINGS",
        decimals: 18
      }
    ];
  }
});

// src/store/data/tokens/testnet/fuji.json
var require_fuji = __commonJS({
  "src/store/data/tokens/testnet/fuji.json"(exports, module2) {
    module2.exports = [
      {
        name: "Wrapped AVAX",
        address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
        symbol: "WAVAX",
        decimals: 18,
        isCommon: true,
        isWETH: true
      },
      {
        name: "Pangolin",
        address: "0x6d0A79756774c7cbac6Ce5c5e3b0f40b0ccCcB20",
        symbol: "PNG",
        decimals: 18
      },
      {
        name: "OpenSwap",
        address: "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
        symbol: "OSWAP",
        decimals: 18,
        isCommon: true
      },
      {
        name: "Tether USD",
        address: "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
        symbol: "USDT.e",
        decimals: 6
      },
      {
        name: "HakuSwap Token",
        address: "0x2093f387FA92d3963A4Bc8Fd8E4f88cD82c0d14A",
        symbol: "HAKU",
        decimals: 18
      },
      {
        name: "Snowball",
        address: "0xF319e2f610462F846d6e93F51CdC862EEFF2a554",
        symbol: "SNOB",
        decimals: 18
      },
      {
        name: "TEDDY",
        address: "0x7B635b81920F2C9B7a217DD898BeC9F6D309470D",
        symbol: "TEDDY",
        decimals: 18
      },
      {
        name: "AxialToken",
        address: "0x57b8a194230ef402584130B1eD31d2C4682d7a71",
        symbol: "AXIAL",
        decimals: 18
      },
      {
        name: "USDC",
        address: "0xA269756ccf60766FB311BeE71c07F53Af1d15bDE",
        symbol: "USDC",
        decimals: 6
      }
    ];
  }
});

// src/store/data/tokens/testnet/mumbai.json
var require_mumbai = __commonJS({
  "src/store/data/tokens/testnet/mumbai.json"(exports, module2) {
    module2.exports = [
      {
        name: "USDT",
        address: "0xF6Bf7c1213fdCe4AA92e7c91865cD586891B9cF6",
        symbol: "USDT",
        decimals: 6,
        isCommon: true
      },
      {
        name: "OpenSwap",
        address: "0xA9d603421e2777b8BEa685272611A01fF3bc6523",
        symbol: "OSWAP",
        decimals: 18,
        isCommon: true
      },
      {
        name: "Wrapped MATIC",
        address: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
        symbol: "WMATIC",
        decimals: 18,
        isCommon: true,
        isWETH: true
      },
      {
        name: "USDC",
        address: "0x87a86a498E50D9cb81cE7B4682Db90eDB32A2A01",
        symbol: "USDC",
        decimals: 6
      },
      {
        name: "Tidal Token",
        address: "0xE4c020c5B74A44cf21549C36E8762Da77FAaf134",
        symbol: "TIDAL",
        decimals: 18
      }
    ];
  }
});

// src/store/data/tokens/testnet/fantom-testnet.json
var require_fantom_testnet = __commonJS({
  "src/store/data/tokens/testnet/fantom-testnet.json"(exports, module2) {
    module2.exports = [
      {
        address: "0xf1277d1Ed8AD466beddF92ef448A132661956621",
        decimals: 18,
        name: "Wrapped Fantom",
        symbol: "WFTM",
        isWETH: true
      },
      {
        name: "OpenSwap",
        address: "0xDe0399014ED809e0E5976D391013dEd315c6B778",
        symbol: "OSWAP",
        decimals: 18,
        isCommon: true
      }
    ];
  }
});

// src/store/data/tokens/testnet/amino.json
var require_amino = __commonJS({
  "src/store/data/tokens/testnet/amino.json"(exports, module2) {
    module2.exports = [
      {
        name: "USDT",
        address: "0x28A6a9079fA8e041179cD13F4652af2B315b6fd8",
        symbol: "USDT",
        decimals: 18
      },
      {
        name: "CAKE",
        address: "0x8dc927D1c259A2EdA099712eAFB57509aD4164b7",
        symbol: "CAKE",
        decimals: 18
      },
      {
        name: "BUSD",
        address: "0x5d3e849B757afD8500b0F514933eEb55a92EB757",
        symbol: "BUSD",
        decimals: 18
      },
      {
        name: "Wrapped ACT",
        address: "0xBB04C4927A05Cf7d3e329E6333658D48A9313356",
        symbol: "WACT",
        decimals: 18,
        isCommon: true,
        isWETH: true
      }
    ];
  }
});

// src/store/data/tokens/testnet/aminoX-testnet.json
var require_aminoX_testnet = __commonJS({
  "src/store/data/tokens/testnet/aminoX-testnet.json"(exports, module2) {
    module2.exports = [
      {
        name: "OpenSwap",
        address: "0xA0AF68AB35fa4618b57C1A7CFc07A8caa0cBf07E",
        symbol: "OSWAP",
        decimals: 18,
        isCommon: true
      },
      {
        name: "Tether USD",
        address: "0xFFfffffF8d2EE523a2206206994597c13D831EC7",
        symbol: "USDT",
        decimals: 6,
        isCommon: true
      },
      {
        name: "DAI Stablecoin",
        address: "0xFFFffffFE89094c44da98B954eEDEac495271D0f",
        symbol: "DAI",
        decimals: 18,
        isCommon: true
      },
      {
        name: "Wrapped ACT",
        address: "0xCb5e100fdF7d24f25865fa85673D9bD6Bb4674ab",
        symbol: "WACT",
        decimals: 18,
        isCommon: true,
        isWETH: true
      }
    ];
  }
});

// src/store/data/tokens/testnet/cronos-testnet.json
var require_cronos_testnet = __commonJS({
  "src/store/data/tokens/testnet/cronos-testnet.json"(exports, module2) {
    module2.exports = [
      {
        address: "0x6a3173618859C7cd40fAF6921b5E9eB6A76f1fD4",
        name: "Wrapped CRO",
        symbol: "WCRO",
        decimals: 18,
        isCommon: true,
        isWETH: true
      },
      {
        name: "WETH",
        address: "0x796135E94527c38433e9c42f4Cd91ca931E5e6A6",
        symbol: "WETH",
        decimals: 18,
        isCommon: true
      },
      {
        name: "WBTC",
        address: "0xEE200f25d7B1B9518AC944fd60b113d39bee209c",
        symbol: "WBTC",
        decimals: 8,
        isCommon: true
      },
      {
        name: "USDC",
        address: "0x25f0965F285F03d6F6B3B21c8EC3367412Fd0ef6",
        symbol: "USDC",
        decimals: 6,
        isCommon: true
      },
      {
        name: "USDT",
        address: "0xa144617Afd9205AF1ceDE3Cc671da1a409A82c5a",
        symbol: "USDT",
        decimals: 6,
        isCommon: true
      },
      {
        name: "DAI",
        address: "0x8662A8111daEC7570a1bDF3dbd3E163d41563904",
        symbol: "DAI",
        decimals: 18,
        isCommon: true
      },
      {
        name: "OSWAP",
        address: "0xA09d20Bac0A83b0d1454a2B3BA7A39D55ca00628",
        symbol: "OSWAP",
        decimals: 18,
        isCommon: true
      }
    ];
  }
});

// src/store/index.ts
__export(exports, {
  BridgeVaultGroupList: () => BridgeVaultGroupList,
  ChainNativeTokenByChainId: () => ChainNativeTokenByChainId,
  ChainTrollRegistryMap: () => ChainTrollRegistryMap,
  CoreContractAddressesByChainId: () => CoreContractAddressesByChainId,
  CrossChainAddressMap: () => CrossChainAddressMap,
  DefaultERC20Tokens: () => DefaultERC20Tokens,
  DefaultTokens: () => DefaultTokens,
  InfuraId: () => InfuraId,
  LockTokenType: () => LockTokenType,
  LockTokenTypeList: () => LockTokenTypeList,
  MockOracleMap: () => MockOracleMap,
  Networks: () => Networks,
  ToUSDPriceFeedAddressesMap: () => ToUSDPriceFeedAddressesMap,
  TrollManagementActionType: () => TrollManagementActionType,
  TrollStatus: () => TrollStatus,
  TrollType: () => TrollType,
  TrollTypeStringEnumMap: () => TrollTypeStringEnumMap,
  USDPeggedTokenAddressMap: () => USDPeggedTokenAddressMap,
  VaultActionType: () => VaultActionType,
  VaultOrderStatus: () => VaultOrderStatus,
  VaultType: () => VaultType,
  WETHByChainId: () => WETHByChainId,
  addUserTokens: () => addUserTokens,
  baseRoute: () => baseRoute,
  connectWallet: () => connectWallet,
  crossChainNativeTokenList: () => crossChainNativeTokenList,
  fallBackUrl: () => fallBackUrl,
  getAddresses: () => getAddresses,
  getBridgeVaultVersion: () => getBridgeVaultVersion,
  getChainId: () => getChainId,
  getChainNativeToken: () => getChainNativeToken,
  getCurrentChainId: () => getCurrentChainId2,
  getDefaultChainId: () => getDefaultChainId2,
  getErc20: () => getErc20,
  getFilteredNetworks: () => getFilteredNetworks,
  getInfuraId: () => getInfuraId,
  getMatchNetworks: () => getMatchNetworks,
  getNetworkExplorerName: () => getNetworkExplorerName,
  getNetworkImg: () => getNetworkImg,
  getNetworkInfo: () => getNetworkInfo,
  getOpenSwapToken: () => getOpenSwapToken,
  getSiteEnv: () => getSiteEnv,
  getSiteSupportedNetworks: () => getSiteSupportedNetworks,
  getStakingStatus: () => getStakingStatus,
  getTokenBalance: () => getTokenBalance,
  getTokenBalances: () => getTokenBalances,
  getTokenDecimals: () => getTokenDecimals,
  getTokenIcon: () => getTokenIcon,
  getTokenIconPath: () => getTokenIconPath,
  getTokenList: () => getTokenList,
  getTokenMap: () => getTokenMap,
  getTokenMapData: () => getTokenMapData,
  getTokenObject: () => getTokenObject,
  getTokensDataList: () => getTokensDataList,
  getUserTokens: () => getUserTokens,
  getWETH: () => getWETH,
  getWallet: () => getWallet,
  getWalletProvider: () => getWalletProvider,
  hasMetaMask: () => hasMetaMask,
  hasUserToken: () => hasUserToken,
  hasWallet: () => hasWallet,
  isExpertMode: () => isExpertMode,
  isWalletConnected: () => isWalletConnected,
  logoutWallet: () => logoutWallet,
  nullAddress: () => nullAddress,
  projectNativeToken: () => projectNativeToken,
  projectNativeTokenSymbol: () => projectNativeTokenSymbol,
  setCurrentChainId: () => setCurrentChainId2,
  setDataFromSCConfig: () => setDataFromSCConfig,
  setSiteEnv: () => setSiteEnv,
  setStakingStatus: () => setStakingStatus,
  setTokenBalances: () => setTokenBalances,
  setTokenMap: () => setTokenMap,
  setUserTokens: () => setUserTokens,
  state: () => state,
  switchNetwork: () => switchNetwork,
  toggleExpertMode: () => toggleExpertMode,
  tokenPriceAMMReference: () => tokenPriceAMMReference,
  tokenSymbol: () => tokenSymbol,
  truncateAddress: () => truncateAddress,
  updateAllTokenBalances: () => updateAllTokenBalances2,
  viewOnExplorerByAddress: () => viewOnExplorerByAddress,
  viewOnExplorerByTxHash: () => viewOnExplorerByTxHash,
  walletList: () => walletList
});
var import_eth_wallet6 = __toModule(require("@ijstech/eth-wallet"));
var import_global2 = __toModule(require("@staking/global"));
var import_assets = __toModule(require("@staking/assets"));
var import_sdk2 = __toModule(require("@openswap/sdk"));

// src/store/wallet.ts
var import_components = __toModule(require("@ijstech/components"));

// src/store/walletList.ts
var import_eth_wallet = __toModule(require("@ijstech/eth-wallet"));
var walletList = [
  {
    name: import_eth_wallet.WalletPlugin.MetaMask,
    displayName: "MetaMask",
    iconFile: "metamask.png"
  },
  {
    name: import_eth_wallet.WalletPlugin.BitKeepWallet,
    displayName: "BitKeep Wallet",
    iconFile: "BitKeep.png"
  },
  {
    name: import_eth_wallet.WalletPlugin.ONTOWallet,
    displayName: "ONTO Wallet",
    iconFile: "ONTOWallet.jpg"
  },
  {
    name: import_eth_wallet.WalletPlugin.Coin98,
    displayName: "Coin98 Wallet",
    iconFile: "Coin98.svg"
  },
  {
    name: import_eth_wallet.WalletPlugin.TrustWallet,
    displayName: "Trust Wallet",
    iconFile: "trustwallet.svg"
  },
  {
    name: import_eth_wallet.WalletPlugin.BinanceChainWallet,
    displayName: "Binance Chain Wallet",
    iconFile: "binance-chain-wallet.svg"
  },
  {
    name: import_eth_wallet.WalletPlugin.WalletConnect,
    displayName: "WalletConnect",
    iconFile: "walletconnect.svg"
  }
];
var getWalletOptions = () => {
  let networkList = getSiteSupportedNetworks();
  const rpcs = {};
  for (const network of networkList) {
    let rpc = network.rpc;
    if (rpc)
      rpcs[network.chainId] = rpc;
  }
  return {
    [import_eth_wallet.WalletPlugin.WalletConnect]: {
      infuraId: getInfuraId(),
      bridge: "https://bridge.walletconnect.org",
      rpc: rpcs
    }
  };
};

// src/store/wallet.ts
var import_eth_wallet5 = __toModule(require("@ijstech/eth-wallet"));
var import_store = __toModule(require("@staking/store"));

// src/global/approvalModel/index.ts
var import_eth_wallet2 = __toModule(require("@ijstech/eth-wallet"));
var ApprovalStatus;
(function(ApprovalStatus2) {
  ApprovalStatus2[ApprovalStatus2["TO_BE_APPROVED"] = 0] = "TO_BE_APPROVED";
  ApprovalStatus2[ApprovalStatus2["APPROVING"] = 1] = "APPROVING";
  ApprovalStatus2[ApprovalStatus2["NONE"] = 2] = "NONE";
})(ApprovalStatus || (ApprovalStatus = {}));

// src/global/utils/helper.ts
var import_eth_wallet3 = __toModule(require("@ijstech/eth-wallet"));
var import_moment = __toModule(require_moment());
var SITE_ENV;
(function(SITE_ENV3) {
  SITE_ENV3["DEV"] = "dev";
  SITE_ENV3["TESTNET"] = "testnet";
  SITE_ENV3["MAINNET"] = "mainnet";
})(SITE_ENV || (SITE_ENV = {}));

// src/global/utils/common.ts
var import_eth_wallet4 = __toModule(require("@ijstech/eth-wallet"));
var import_sdk = __toModule(require("@openswap/sdk"));

// src/global/index.ts
var EventId;
(function(EventId3) {
  EventId3["ConnectWallet"] = "connectWallet";
  EventId3["IsWalletConnected"] = "isWalletConnected";
  EventId3["IsWalletDisconnected"] = "IsWalletDisconnected";
  EventId3["Paid"] = "Paid";
  EventId3["chainChanged"] = "chainChanged";
  EventId3["EmitButtonStatus"] = "emitButtonStatus";
  EventId3["EmitInput"] = "emitInput";
  EventId3["EmitNewToken"] = "emitNewToken";
})(EventId || (EventId = {}));

// src/store/wallet.ts
function isWalletConnected() {
  const wallet = import_eth_wallet5.Wallet.getInstance();
  return wallet.isConnected;
}
async function connectWallet(walletPlugin, eventHandlers) {
  let wallet = import_eth_wallet5.Wallet.getInstance();
  const walletOptions = getWalletOptions();
  let providerOptions = walletOptions[walletPlugin];
  if (!wallet.chainId) {
    wallet.chainId = (0, import_store.getDefaultChainId)();
  }
  await wallet.connect(walletPlugin, {
    onAccountChanged: async (account) => {
      var _a, _b;
      if (eventHandlers && eventHandlers.accountsChanged) {
        eventHandlers.accountsChanged(account);
      }
      const connected = !!account;
      if (connected) {
        localStorage.setItem("walletProvider", ((_b = (_a = import_eth_wallet5.Wallet.getInstance()) == null ? void 0 : _a.clientSideProvider) == null ? void 0 : _b.walletPlugin) || "");
        if (wallet.chainId !== (0, import_store.getCurrentChainId)()) {
          (0, import_store.setCurrentChainId)(wallet.chainId);
          import_components.application.EventBus.dispatch(EventId.chainChanged, wallet.chainId);
        }
        await (0, import_store.updateAllTokenBalances)();
      }
      import_components.application.EventBus.dispatch(EventId.IsWalletConnected, connected);
    },
    onChainChanged: async (chainIdHex) => {
      const chainId = Number(chainIdHex);
      if (eventHandlers && eventHandlers.chainChanged) {
        eventHandlers.chainChanged(chainId);
      }
      (0, import_store.setCurrentChainId)(chainId);
      await (0, import_store.updateAllTokenBalances)();
      import_components.application.EventBus.dispatch(EventId.chainChanged, chainId);
    }
  }, providerOptions);
  return wallet;
}
async function switchNetwork(chainId) {
  var _a;
  if (!isWalletConnected()) {
    (0, import_store.setCurrentChainId)(chainId);
    import_eth_wallet5.Wallet.getInstance().chainId = chainId;
    import_components.application.EventBus.dispatch(EventId.chainChanged, chainId);
    return;
  }
  const wallet = import_eth_wallet5.Wallet.getInstance();
  if (((_a = wallet == null ? void 0 : wallet.clientSideProvider) == null ? void 0 : _a.walletPlugin) === import_eth_wallet5.WalletPlugin.MetaMask) {
    await wallet.switchNetwork(chainId);
  }
}
async function logoutWallet() {
  const wallet = import_eth_wallet5.Wallet.getInstance();
  await wallet.disconnect();
  localStorage.setItem("walletProvider", "");
  import_components.application.EventBus.dispatch(EventId.IsWalletDisconnected, false);
}
var hasWallet = function() {
  let hasWallet2 = false;
  for (let wallet of walletList) {
    if (import_eth_wallet5.Wallet.isInstalled(wallet.name)) {
      hasWallet2 = true;
      break;
    }
  }
  return hasWallet2;
};
var hasMetaMask = function() {
  return import_eth_wallet5.Wallet.isInstalled(import_eth_wallet5.WalletPlugin.MetaMask);
};
var truncateAddress = (address) => {
  if (address === void 0 || address === null)
    return "";
  return address.substr(0, 6) + "..." + address.substr(-4);
};

// src/store/data/tokens/index.ts
var Tokens_BSC = require_bsc();
var Tokens_Ethereuem = require_ethereum();
var Tokens_Polygon = require_polygon();
var Tokens_Avalanche = require_avalanche();
var Tokens_Fantom = require_fantom();
var Tokens_Cronos = require_cronos();
var Tokens_Kovan = require_kovan();
var Tokens_BSC_Testnet = require_bsc_testnet();
var Tokens_Fuji = require_fuji();
var Tokens_Mumbai = require_mumbai();
var Tokens_Fantom_Testnet = require_fantom_testnet();
var Tokens_Amino = require_amino();
var Tokens_AminoXTestnet = require_aminoX_testnet();
var Tokens_Cronos_Testnet = require_cronos_testnet();
var DefaultERC20Tokens = {
  1: Tokens_Ethereuem,
  25: Tokens_Cronos,
  42: Tokens_Kovan,
  56: Tokens_BSC,
  97: Tokens_BSC_Testnet,
  137: Tokens_Polygon,
  338: Tokens_Cronos_Testnet,
  31337: Tokens_Amino,
  80001: Tokens_Mumbai,
  43113: Tokens_Fuji,
  43114: Tokens_Avalanche,
  250: Tokens_Fantom,
  4002: Tokens_Fantom_Testnet,
  13370: Tokens_AminoXTestnet
};
var ChainNativeTokenByChainId = {
  1: { address: void 0, decimals: 18, symbol: "ETH", name: "ETH", isNative: true },
  25: { address: void 0, decimals: 18, symbol: "CRO", name: "CRO", isNative: true },
  42: { address: void 0, decimals: 18, symbol: "ETH", name: "ETH", isNative: true },
  56: { address: void 0, decimals: 18, symbol: "BNB", name: "BNB", isNative: true },
  97: { address: void 0, decimals: 18, symbol: "BNB", name: "BNB", isNative: true },
  137: { address: void 0, decimals: 18, symbol: "MATIC", name: "MATIC", isNative: true },
  338: { address: void 0, decimals: 18, symbol: "TCRO", name: "TCRO", isNative: true },
  31337: { address: void 0, decimals: 18, symbol: "ACT", name: "ACT", isNative: true },
  80001: { address: void 0, decimals: 18, symbol: "MATIC", name: "MATIC", isNative: true },
  43114: { address: void 0, decimals: 18, symbol: "AVAX", name: "AVAX", isNative: true },
  43113: { address: void 0, decimals: 18, symbol: "AVAX", name: "AVAX", isNative: true },
  250: { address: void 0, decimals: 18, symbol: "FTM", name: "FTM", isNative: true },
  4002: { address: void 0, decimals: 18, symbol: "FTM", name: "FTM", isNative: true },
  13370: { address: void 0, decimals: 18, symbol: "ACT", name: "ACT", isNative: true }
};
var WETHByChainId = Object.keys(DefaultERC20Tokens).reduce((result, key) => {
  let weth = DefaultERC20Tokens[Number(key)].find((v) => v.isWETH);
  if (!weth)
    console.log(`No Default Wrapped Native Token on chain ${key}`);
  result[Number(key)] = weth;
  return result;
}, {});
var getOpenSwapToken = (chainId) => {
  let tokens = DefaultERC20Tokens[chainId];
  if (!tokens)
    return null;
  for (const token of tokens) {
    if (token.name == "OpenSwap" && token.symbol == "OSWAP")
      return token;
  }
  return null;
};
var DefaultTokens = Object.keys(ChainNativeTokenByChainId).reduce((result, key) => {
  result[Number(key)] = [...DefaultERC20Tokens[Number(key)], ChainNativeTokenByChainId[Number(key)]];
  return result;
}, {});
var ToUSDPriceFeedAddressesMap = {
  56: {
    "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE",
    "0x55d398326f99059ff775485246999027b3197955": "0xB97Ad0E74fa7d920791E90258A6E2085088b4320",
    "0xe9e7cea3dedca5984780bafc599bd69add087d56": "0xcBb98864Ef56E9042e7d2efef76141f15731B82f"
  },
  97: {
    "0xae13d989dac2f0debff460ac112a837c89baa7cd": "0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526",
    "0x29386b60e0a9a1a30e1488ada47256577ca2c385": "0xEca2605f0BCF2BA5966372C99837b1F182d3D620",
    "0xde9334c157968320f26e449331d6544b89bbd00f": "0x9331b55D9830EF609A2aBCfAc0FBCE050A52fdEa",
    "0xb78daa2f1a2de8270a5641f052fafc4b2b3ea3b1": "0x9331b55D9830EF609A2aBCfAc0FBCE050A52fdEa"
  },
  43113: {
    "0xd00ae08403b9bbb9124bb305c09058e32c39a48c": "0x5498BB86BC934c8D34FDA08E81D444153d0D06aD",
    "0xb9c31ea1d475c25e58a1be1a46221db55e5a7c6e": "0x7898AcCC83587C3C55116c5230C17a6Cd9C71bad"
  },
  43114: {
    "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7": "0x0A77230d17318075983913bC2145DB16C7366156",
    "0xc7198437980c041c805a1edcba50c1ce5db95118": "0xEBE676ee90Fe1112671f19b6B7459bC678B67e8a",
    "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664": "0xF096872672F44d6EBA71458D74fe67F9a77a23B9"
  }
};
var tokenPriceAMMReference = {
  56: {
    "0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93": "0x6AA3eC903176df556e8D8473A002b6A807399351",
    "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    "0x0b15ddf19d47e6a86a56148fb4afffc6929bcb89": "0x71E6de81381eFE0Aa98f56b3B43eB3727D640715",
    "0x416947e6fc78f158fd9b775fa846b72d768879c2": "0xe6A97E7B5EB2FA72A8B4BeDaaf4CdE85E015DAbf",
    "0x31720b2276df3b3b757b55845d17eea184d4fc8f": "0x0DBCe9e7b634B5eAAAb483194CC3224Fde9624CF"
  },
  97: {
    "0x45eee762aaea4e5ce317471bda8782724972ee19": "0xb0094FfE387da1739FB95bAbCAF01B105FD0D887",
    "0xae13d989dac2f0debff460ac112a837c89baa7cd": "0x4A63235712c5F56796b8120DE9195626cf7496f1",
    "0xc2c76387eb1cd15f2f55d2463b5aad6fca062eb1": "0xd2401ED7A6444CB96EE78424a222A51788E90060",
    "0x52423b7f0769d0365ebdd79342ce167eb9c29ae2": "0x34aE455fC2d8C808471f7A6967eee858C61cc838",
    "0xb79aa5c1730ad78dd958f05fd87022aef3e50721": "0x902d79f7Dc980D9b21D691F5F0737ce11f352eB9",
    "0x8677048f3ed472610514ba6ef6ec2f03b550ebdb": "0x095307dEac764FDC521fE2E3cf8EDf0f40B00F17"
  },
  43113: {
    "0x78d9d80e67bc80a11efbf84b7c8a65da51a8ef3c": "0x239b4EaF1746051b1bED34dC2963f053c4649f88",
    "0xd00ae08403B9bbb9124bB305C09058E32C39A48c": "0x0f98073122cc43596eF645Ae51FE085f355C487e"
  },
  43114: {
    "0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93": "0xBeaE5AaA6d76ABe711336801D590850e18cB3C6b"
  }
};
var TokenFolderName = {
  1: "ethereum",
  25: "cronos",
  42: "kovan",
  56: "bsc",
  97: "bsc-testnet",
  137: "polygon",
  338: "cronos-testnet",
  31337: "amino",
  80001: "mumbai",
  43113: "fuji",
  43114: "avalanche",
  250: "fantom",
  4002: "fantom-testnet",
  13370: "aminox-testnet"
};
var getTokenIconPath = (tokenObj, chainId) => {
  const tokenPath = "img/tokens";
  if (!tokenObj || tokenObj.isCustom) {
    return `${tokenPath}/token-placeholder.svg`;
  } else if (chainId != null && chainId != void 0) {
    let folderName = TokenFolderName[chainId];
    let fileName = (!tokenObj.isNative ? tokenObj.address.toLowerCase() : tokenObj.symbol) + ".png";
    return `${tokenPath}/${folderName}/${fileName}`;
  } else {
    return `${tokenPath}/${tokenObj.symbol}.png`;
  }
};

// src/store/data/core.ts
var CoreContractAddressesByChainId = {
  1: {
    "WETH9": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "UniswapV2Router02": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "SushiSwapV2Factory": "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
    "SushiSwapV2Router02": "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F"
  },
  4: {
    "WETH9": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    "MockChainlinkUSDT": "0x82D6466553978edfC416Aa360e7bec4D8aF60ad8",
    "GOV_TOKEN": "0x3Fb6f85Db141c2d5DA1C6dcea80dA974fb09ed28",
    "OAXDEX_Governance": "0xFeA4807aAb9f1CdA382a3e2076102718bc547Ad9",
    "OAXDEX_VotingRegistry": "0xfE34db2D8C73b61701eEF5A71584DC0319A8b105",
    "OAXDEX_Factory": "0x051732011D8b709322C6fC1fE517f68d10Db1b8f",
    "OAXDEX_Administrator": "0xdbf7120bB13EbF2DDbd0Fef23232B0B2b8E20e93",
    "OAXDEX_VotingExecutor": "0x1Ab6b7eB1Fa2efa2bA5604Bf568b3bEd3b1C56d1",
    "OAXDEX_Router": "0x5837a508B429788a576357A4bF78a3e0DA1A684e",
    "OAXDEX_OracleRouter": "0x4d7C952eEFF589D29AaDEF04E738aC7af1Af0c9B",
    "OAXDEX_OracleLiquidityProvider": "0xb689a7efd351882fb1D5f1276DA42Ae401cF8Ff7",
    "OAXDEX_OracleChainlink": "0xF6F531aFAc924170331577ddAC0700551a11f072",
    "UniswapV2Factory": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "UniswapV2Router02": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "SushiSwapV2Factory": "0xaDe0ad525430cfe17218B679483c46B6c1d63fe2",
    "SushiSwapV2Router02": "0x027Bb5f9205360aC628C33508c3f182320A44525"
  },
  42: {
    "WETH9": "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
    "GOV_TOKEN": "0x28A6a9079fA8e041179cD13F4652af2B315b6fd8",
    "GOV_TOKEN_BSC": "0x28A6a9079fA8e041179cD13F4652af2B315b6fd8",
    "OAXDEX_Governance": "0xFDAecCEb806bECF079A136B008Bd9B4F5101634C",
    "OAXDEX_VotingRegistry": "0xC78705400eaa92c96916D616D1cC925E4dD31363",
    "OAXDEX_Factory": "0x13aCdFbbeeB2DcB245BFbf2993FFCe7eeab8dEdB",
    "OAXDEX_Administrator": "0x7810eC500061f5469fF6e1485Ab130045B3af6b0",
    "OAXDEX_VotingExecutor": "0x0aB2130A99Bd43494D72bD1c710922d5eaFC3689",
    "OAXDEX_VotingExecutor1": "0x1C9901dF88341e724be378Aed3aE27737c6E77a8",
    "OAXDEX_Router": "0x889460F92f51Cd0c4E66DDc707c267C55823a31b",
    "UniswapV2Factory": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "UniswapV2Router02": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "SushiSwapV2Factory": "0xaDe0ad525430cfe17218B679483c46B6c1d63fe2",
    "SushiSwapV2Router02": "0x027Bb5f9205360aC628C33508c3f182320A44525",
    "OSWAP_HybridRouterRegistry": "0x95b84f0e84EFf81e5B0bF1BD4290D0637006cFf7",
    "OSWAP_HybridRouter2": "0xf612B4879ADC5713A5c0781F0f431362a69030b5",
    "OSWAP_OracleFactory": "0x02ac522Deb18156CFaE15c7c93da44bd6CC5c967",
    "OSWAP_OracleRouter": "0x000D6d0560d1525e210939CB3FCa191AE90dC34b",
    "OSWAP_OracleLiquidityProvider": "0x90ab74adDB92d589A6c4b53A8491eC0413b95680",
    "OSWAP_VotingExecutor2": "0x3E606a008e019e5604B5f1f316338a0b60A902Fb",
    "OSWAP_PeggedOracleFactory": "0x016c6d1Cee7a639D84479372EB1B4fBaDca92a5d",
    "OSWAP_PeggedOracleRouter": "0xf53f81385ca888CD77B5F839b41adB5fFBBdF963",
    "OSWAP_PeggedOracleLiquidityProvider": "0x347F4582488CBE2B84e2392d23a67da228E3B404",
    "OSWAP_PeggedVotingExecutor2": "0xAdFB5b9Ef70af5f41Bc433f0A75F1896f1CaE9Fc"
  },
  56: {
    "GOV_TOKEN": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
    "WETH9": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    "OAXDEX_Governance": "0x510a179AA399672e26e54Ed8Ce0e822cc9D0a98D",
    "OAXDEX_VotingRegistry": "0x845308010C3B699150Cdd54dCf0E7C4b8653e6B2",
    "OAXDEX_Factory": "0x0625468f8F56995Ff1C27EB6FD44ac90E96C5D22",
    "OAXDEX_Administrator": "0x667AE7A348610d42d9955d1b43868683A34b1AAb",
    "OAXDEX_VotingExecutor": "0x61dD8885F8adA39ba61f04EBe3aD540bbE670d4b",
    "OAXDEX_VotingExecutor1": "0x308c0bDD77EaBcdbDE5bd5EfDf5a97Bc9b3237DC",
    "OAXDEX_Router": "0x50f5679F0CeF71287bD9C7e619960fF9C579661C",
    "OAXDEX_FactoryV1": "0x3f9744A881Aacf7573064f8B915100474d365523",
    "OAXDEX_RouterV1": "0xFae00dfA7D734CB23f935e10c2cBf139f1ab2648",
    "PancakeSwapFactoryV1": "0xbcfccbde45ce874adcb698cc183debcf17952812",
    "PancakeSwapRouterV1": "0x05ff2b0db69458a0750badebc4f9e13add608c7f",
    "PancakeSwapFactory": "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
    "PancakeSwapRouter": "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    "BakerySwapFactory": "0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7",
    "BakerySwapRouter": "0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F",
    "BurgerSwapFactory": "0x8a1E9d3aEbBBd5bA2A64d3355A48dD5E9b511256",
    "BurgerSwapRouter": "0x42591f57f707739b95c5c486c014b525f19d70ca",
    "IFSwapFactoryV1": "0x918d7e714243F7d9d463C37e106235dCde294ffC",
    "IFSwapRouterV1": "0x8f2A0d8865D995364DC6843D51Cf6989001f989e",
    "IFSwapFactoryV3": "0x4233ad9b8b7c1ccf0818907908a7f0796a3df85f",
    "IFSwapRouterV3": "0x56f6ca0a3364fa3ac9f0e8e9858b2966cdf39d03",
    "BiSwapFactory": "0x858E3312ed3A876947EA49d572A7C42DE08af7EE",
    "BiSwapRouter": "0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8",
    "OSWAP_HybridRouterRegistry": "0xcc44c3617e46b2e946d61499ff8f4cda721ff178",
    "OSWAP_HybridRouter2": "0xFc7261491753C53F0aa168CDB290e47f64C713bB",
    "OSWAP_OracleFactory": "0x8CB1fEE69f7F8f00efd5d47067eb75C19cd40017",
    "OSWAP_OracleRouter": "0x8Af3e8596acE65D9c1EDE6d5356a34eAb46a46f5",
    "OSWAP_OracleLiquidityProvider": "0x1F6d550A182cA2FC5f5145De108005eA121D6539",
    "OSWAP_VotingExecutor2": "0xfA9f979e05A0E5A2F6eF08Bb8B7C36616a86c154",
    "OSWAP_RangeFactory": "0xE31e10f0f3f65a4aFe510C460Cda0f9392Fb0e99",
    "OSWAP_RangeLiquidityProvider": "0xd9C031db7D613E4977237Bd681Dd1941A36Cdb98",
    "OSWAP_VotingExecutor3": "0x22937e50C09fcb59532a379472Ab78Dc556afA3b",
    "OSWAP_ConfigStore": "0xE07526f892af09acb84E9bC5f32Df575750DaE3b",
    "OSWAP_RestrictedFactory": "0x91d137464b93caC7E2c2d4444a9D8609E4473B70",
    "OSWAP_RestrictedLiquidityProvider": "0x1c8682435DB14502857834139cB2710E902485b2",
    "OSWAP_VotingExecutor4": "0xD055df2049465293016C3AFF966b65Ad18A12054",
    "OSWAP_RestrictedOracle": "0xb1e6db5ccf8153edf9ffbaf206bb6eb2b4dff5c7",
    "OSWAP_PeggedOracleFactory": "0x6ebc906c7f657c17f021f4a3c696a4c625bfbaf0",
    "OSWAP_PeggedOracleRouter": "0xC8807382D3C8160dca4bCaA8DC7762633140e149",
    "OSWAP_PeggedOracleLiquidityProvider": "0xdE7926575002ba7A4D97504F1C54B9c13e54CE59",
    "OSWAP_PeggedVotingExecutor2": "0x1e5133700581FB8C4494B6870B5752a9BEbf778f",
    "JetSwapFactory": "0x0eb58E5c8aA63314ff5547289185cC4583DfCBD5",
    "JetSwapRouter": "0xBe65b8f75B9F20f4C522e0067a3887FADa714800"
  },
  97: {
    "WETH9": "0xae13d989dac2f0debff460ac112a837c89baa7cd",
    "GOV_TOKEN": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
    "GOV_TOKEN_BSC": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
    "PancakeSwapWETH9": "0xae13d989dac2f0debff460ac112a837c89baa7cd",
    "OAXDEX_Governance": "0xDfC070E2dbDAdcf892aE2ed2E2C426aDa835c528",
    "OAXDEX_VotingRegistry": "0x28a5bB54A53831Db40e00a6d416FfB2dBe0Fef68",
    "OAXDEX_Factory": "0xDE5CC59535312A8ECCfdB74694C338b6231e490D",
    "OAXDEX_Administrator": "0x816196380aAc970D1C16d5804e5EE167104e50b0",
    "OAXDEX_VotingExecutor": "0x21116eC1BD0aAdD34D08C393A117039591E07C36",
    "OAXDEX_VotingExecutor1": "0xB4FB3f331da8A361C69945b1Eeb4650dB0DA36C9",
    "OAXDEX_Router": "0x8AEb7abBCfe0ED8baAfa3ddD2CdE39cDBb4d0106",
    "OAXDEX_FactoryV1": "0x83edf60a9c37972538592F184c1B59c62f028893",
    "OAXDEX_RouterV1": "0x3BCeAa9A824cE4bdFfB7942494d76D1bb145B269",
    "PancakeSwapFactory": "0x6725f303b657a9451d8ba641348b6761a6cc7a17",
    "PancakeSwapRouter": "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
    "BakerySwapWETH9": "0x094616f0bdfb0b526bd735bf66eca0ad254ca81f",
    "BakerySwapFactory": "0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7",
    "BakerySwapRouter": "0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F",
    "BurgereSwapWETH9": "0x2f8b72301c05c444585d24B93e1e06bE9D0c35b2",
    "BurgerSwapFactory": "0xEa7B5325407084A37057b422cCF69B1a56f5fBf2",
    "BurgerSwapRouter": "0x11614C8DFd440a05F92eA70d75f7dC6Ec8011bb6",
    "OSWAP_HybridRouterRegistry": "0x8e5Afed779B56888ca267284494f23aFe158EA0B",
    "OSWAP_HybridRouter2": "0x58dD8dC6EbE7AE6bbDA3ba5DA10eC08f27D52D31",
    "OSWAP_OracleFactory": "0x03843D530400cB153459d3d64f921940f88b21B2",
    "OSWAP_OracleRouter": "0x7B3Df9668AFbE5d8D3E264026c45dB37a7213d74",
    "OSWAP_OracleLiquidityProvider": "0x6034C466E063308a96b9b3F0614eF7aa1c81D2e4",
    "OSWAP_VotingExecutor2": "0x925Bdd8B0D1b9B0CeD2b37EdBce1149991105B7d",
    "OSWAP_RangeFactory": "0xbF8C49367377e1bc15faafF1A873fBc692d5411c",
    "OSWAP_RangeLiquidityProvider": "0x7c22B070f01D50FFF6534B7C08abcE05CdF09ccB",
    "OSWAP_VotingExecutor3": "0x12A8B3578A923008CcD405a1026073153323934a",
    "OSWAP_ConfigStore": "0x3349184B0b3e84094ad78176407D627F0A29bEFC",
    "OSWAP_RestrictedFactory": "0xa158FB71cA5EF59f707c6F8D0b9CC5765F97Fd60",
    "OSWAP_RestrictedLiquidityProvider": "0xdBE2111327D60DbB5376db10dD0F484E98b7d40e",
    "OSWAP_VotingExecutor4": "0x6EDE6Ab7c32D95C210f84eFedC39f80505ed4ea6",
    "OSWAP_RestrictedOracle": "0x4a10650eac83aeb59D007E1F0039B4F1BCeFe0c3",
    "OAXDEX_HybridRouter": "0x7319fE00bF986b21Aa09ACC96a5c7cBdD8bAAFEc",
    "OSWAP_PeggedOracleFactory": "0xC4539f2e431AD23ab62c5947a99750FEF0Ccf046",
    "OSWAP_PeggedOracleRouter": "0x5A8dCfc4F09Ca742b1074698BF37912F13D814C0",
    "OSWAP_PeggedOracleLiquidityProvider": "0xcCB1CA49D60a7c56ba3badFB7E759153B4c546Ef",
    "OSWAP_PeggedVotingExecutor2": "0x14BfdaDc5AD9D7B59d4663D95e101F5A69e82CDF"
  },
  137: {
    "WETH9": "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    "SushiSwapV2Factory": "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    "SushiSwapV2Router02": "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    "QuickSwapFactory": "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",
    "QuickSwapRouter": "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"
  },
  1287: {
    "WETH9": "0xd614547c5CF8619F8F40445e51c39F93E1D48BFf",
    "GOV_TOKEN": "0x20F7407c8cbeB667991277dC1668C0922e652D9E",
    "OSWAP": "0x20F7407c8cbeB667991277dC1668C0922e652D9E",
    "GOV_TOKEN_BSC": "0x20F7407c8cbeB667991277dC1668C0922e652D9E",
    "OAXDEX_Governance": "0x29B72e5ae80D456a7c261a149De06230cFd86d68",
    "OAXDEX_VotingRegistry": "0x0F2b3A7e597ead9b37A20Ac218d366bEAaB82C79",
    "OAXDEX_Factory": "0xa5f6e01F5070a80d428320043c03a6fA05aA8F78",
    "OAXDEX_Administrator": "0xaaf3551f78CFEc7bC7F3c6763E7D1282aD0496a5",
    "OAXDEX_VotingExecutor": "0x0b4171107c1a61762490BA882aa52A1035C201B0",
    "OAXDEX_Router": "0x31F69F69C8B643546A2a69660763042C7D92a77a",
    "OAXDEX_OracleRouter": "0x6B4031C97A0bb82E3EdcfB5c406f29aaC96316Bd",
    "OAXDEX_OracleLiquidityProvider": "0xaC5a71147cCCfF7C14B0bF4C1c92c1cd36fdDFd0"
  },
  1337: {
    "WETH9": "0x5162B0a57734dd25865821b177d570827CADCb26",
    "USDT": "0x923d8C86f6bbf337714727630382b1994ae75Cfb",
    "USDC": "0x26A0a1d886e4CC255d31215f2088aF3450426d7a",
    "DAI": "0x43215B5eF6EdEbeE775030D2b92D960E039CDF3f",
    "MockChainlinkDAI": "0xe2e41Fb387F7b7ABEb3274875464EFae4dD21407",
    "MockChainlinkUSDC": "0x850e6c1802bE3b01eB23af0559Cf6C9E66748F71",
    "MockChainlinkUSDT": "0x3cE54857AAa1194909545f6ddbd6Bd9D1b8131E6",
    "OSWAP": "0xf8C8328c21Cfd5E5B626D7DeA705C643995cC14C",
    "GOV_TOKEN": "0xf8C8328c21Cfd5E5B626D7DeA705C643995cC14C",
    "OAXDEX_OracleChainlink": "0xEFA6D76C4D74E7976D34e67B55a08Cc4f3e4da87",
    "GOV_TOKEN_BSC": "0xf8C8328c21Cfd5E5B626D7DeA705C643995cC14C",
    "OAXDEX_Governance": "0x76591A8Ec8b7CeE064dD2c9857493F79F7D3266c",
    "OAXDEX_VotingRegistry": "0x6deDFD16BED7391411C6c13b805546Eb67A3433D",
    "OAXDEX_Factory": "0xB596Aa20F4E947f9A0F5d7154C07677309C308f2",
    "OAXDEX_OracleFactory": "0x2D2b45Eb0674431943c7fB72DdAA161e634FB47a",
    "OAXDEX_Administrator": "0x6619288d4376953B83C6a5a32A014d16424b8a6B",
    "OAXDEX_VotingExecutor": "0xe9d210E2Dd15470AE792d189CBdCc6889eE4Ab5f",
    "OAXDEX_VotingExecutor1": "0x5AF349A891D19eE6047D56dDa596fFe92Cd2B79F",
    "OAXDEX_VotingExecutor2": "0x3774D0F74A1955553581939685e539575761E648",
    "OAXDEX_Router": "0x6d2E47a68B8CA4F18b15c54F8a8A5d12CC7ca871",
    "OAXDEX_OracleRouter": "0x696E553017812C206355239F37Ab6Ee785Cd8Ea5",
    "OAXDEX_OracleLiquidityProvider": "0x582E56207b135a149C60Be7475A874C1924797cE",
    "OAXDEX_RangeFactory": "0x7Ad3Fbf5C81B4C347957ebe46070aF37c31E0725",
    "OAXDEX_HybridRouterRegistry": "0x5dD315f7d3f78823AdB23F66D4D18C425643DDbf",
    "OAXDEX_HybridRouter2": "0x8A8Df98d16e655BF745343bca8CC67503A2889ad",
    "OAXDEX_RangeLiquidityProvider": "0xd43838C5dC18427B80A19ECD93871D576562bC84",
    "OAXDEX_VotingExecutor3": "0xB6646AeBBB527b6DaA3EeE58413Cf0B8FF6f9ac0"
  },
  31337: {
    "GOV_TOKEN": "0x15947755FDa4BDc65F532e0d83B2710D14d98232",
    "WETH9": "0xBB04C4927A05Cf7d3e329E6333658D48A9313356",
    "OAXDEX_Factory": "0xF1AFa2C0Df79b9cf7fD40b5670382A04276DAEEF",
    "OAXDEX_Router": "0xE0B60F919E6051a5533ffa5B61CF0d5b27cD1cbf"
  },
  80001: {
    "GOV_TOKEN": "0xA9d603421e2777b8BEa685272611A01fF3bc6523",
    "WETH9": "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
    "OAXDEX_Governance": "0x38Ad504DE483D633fACb16904C8Ff61a0CdC4f0d",
    "OAXDEX_VotingRegistry": "0x347ff1e838d86c1adf4512dedd1550a5131e4179",
    "OAXDEX_Factory": "0x4e761D13814F69191dB9d8B12102b90CE3d1351F",
    "OAXDEX_Administrator": "0x0b02ddA212Ea3dfb111B4d18Ba72Db897305f95a",
    "OAXDEX_VotingExecutor": "0x93B337ffbaAC5848B836b84DB4194661d95C2F61",
    "OAXDEX_VotingExecutor1": "0xaA865b8c41614E327F517727Cc6af7305eDC57D6",
    "OAXDEX_Router": "0x2204beA97997678Bd35fA50BFA33994Bd31f3698",
    "OSWAP_HybridRouterRegistry": "0x7700d9f222a66ad426d3a6c6eddbe73f92f0f9d0",
    "OSWAP_HybridRouter2": "0x0304a5ca544ecf6b8cd04f07b32be10a10df2032"
  },
  43114: {
    "WETH9": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    "GOV_TOKEN": "0x29E65d6f3e7a609E0138a1331D42D23159124B8E",
    "OAXDEX_Governance": "0x845308010c3b699150cdd54dcf0e7c4b8653e6b2",
    "OAXDEX_VotingRegistry": "0x0625468f8F56995Ff1C27EB6FD44ac90E96C5D22",
    "OAXDEX_Factory": "0x667ae7a348610d42d9955d1b43868683a34b1aab",
    "OAXDEX_Administrator": "0x88087c1528fFDfF0567261cF688c7123765a5beF",
    "OAXDEX_VotingExecutor": "0x61dD8885F8adA39ba61f04EBe3aD540bbE670d4b",
    "OAXDEX_VotingExecutor1": "0xD88Bd19D64d832Cd691F19e002cc6BA081bA4768",
    "OAXDEX_Router": "0x56131021109f14E766E96a5E7c1294D351e9dFc5",
    "OSWAP_OracleFactory": "0x67c314DC938049150F4c162032bb9645c202Ba71",
    "OSWAP_OracleRouter": "0xca62Dc811D78B6760637A5E97A6021282863F0B6",
    "OSWAP_OracleLiquidityProvider": "0x26C04EadD7913e681693a42CC881536622eB4317",
    "OSWAP_VotingExecutor2": "0xb696B08893c862832a6cA1e5a4C9004deb4069A2",
    "OSWAP_RangeFactory": "0xEfeAD058e3a16272FD61D978e54D6c7039ae828E",
    "OSWAP_RangeLiquidityProvider": "0xaDDD8F7aAd6a847e547C56Af19e9d6b443c2f403",
    "OSWAP_VotingExecutor3": "0xcd3e984cdE988C24d5009296e4eDE14b89aE6e29",
    "OSWAP_ConfigStore": "0x8Ae51f1A62c4Bc0715C367bFe812c53e583aEE2f",
    "OSWAP_RestrictedFactory": "0x739f0BBcdAd415127FE8d5d6ED053e9D817BdAdb",
    "OSWAP_RestrictedLiquidityProvider": "0x629cF4235c0f6b9954698EF0aF779b9502e4853E",
    "OSWAP_VotingExecutor4": "0x646C5e3Ec40706372243accF2D457D9162553685",
    "OSWAP_RestrictedOracle": "0x510a179AA399672e26e54Ed8Ce0e822cc9D0a98D",
    "OSWAP_HybridRouterRegistry": "0xEA6A56086e66622208fa8e7B743Bad3FF47aD40c",
    "OSWAP_HybridRouter2": "0xC3F6FE3da0A69621EE9c5bBFa5507f365ad9CFf8",
    "PangolinFactory": "0xefa94DE7a4656D787667C749f7E1223D71E9FD88",
    "PangolinRouter": "0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106",
    "TraderJoeFactory": "0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10",
    "TraderJoeRouter": "0x60aE616a2155Ee3d9A68541Ba4544862310933d4",
    "SushiSwapV2Factory": "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    "SushiSwapV2Router02": "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    "HakuSwapFactory": "0x2Db46fEB38C57a6621BCa4d97820e1fc1de40f41",
    "HakuSwapRouter": "0x5F1FdcA239362c5b8A8Ada26a256ac5626CC33E0"
  },
  43113: {
    "WETH9": "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    "GOV_TOKEN": "0x27eF998b96c9A66937DBAc38c405Adcd7fa5e7DB",
    "OAXDEX_Governance": "0xC025b30e6D4cBe4B6978a1A71a86e6eCB9F87F92",
    "OAXDEX_VotingRegistry": "0x05E425dD88dd7D4f725aC429D0C8C022B2004cBB",
    "OAXDEX_Factory": "0x9560fD7C36527001D3Fea2510D405F77cB6AD739",
    "OAXDEX_Administrator": "0x201c4A200B5728675A74dD4Af55870Ae1eC82CcF",
    "OAXDEX_VotingExecutor": "0xC3544B01050583e92CDA580AbfAe3ab683f458a1",
    "OAXDEX_VotingExecutor1": "0x8faeA25e1cA12152663617fA67379D7202f2B978",
    "OAXDEX_Router": "0xc9C6f026E489e0A8895F67906ef1627f1E56860d",
    "OSWAP_HybridRouterRegistry": "0xCd370BBbC84AB66a9e0Ff9F533E11DeC87704736",
    "OSWAP_HybridRouter2": "0x83445062a0685e47d8228881c594c0A8494E284a",
    "OSWAP_OracleFactory": "0x9D9491e6dF38A68181fb4c24D5c6779DdEFdd6E8",
    "OSWAP_OracleRouter": "0xD538501F67A3ad75EB941C86D939241dd4ef4394",
    "OSWAP_OracleLiquidityProvider": "0xe6f8b9fE565e3E3BA05E8ad0d1A19512901e4fbD",
    "OSWAP_VotingExecutor2": "0xFf01C7f3121d6FCCd78C56EBAf9995f5669Bb4a2",
    "OSWAP_RangeFactory": "0xEcD7f181f90aC33117ac4CfAe55514F1c62433db",
    "OSWAP_RangeLiquidityProvider": "0xa7932f346dAB7F0f387F37B8B05D5eaFA90C8b6D",
    "OSWAP_VotingExecutor3": "0x2539161cB7777aA61a7C6A4D381fEf9A38f78d49",
    "OSWAP_ConfigStore": "0x258A5309486310398Ee078217729db2f65367a92",
    "OSWAP_RestrictedFactory": "0x6C99c8E2c587706281a5B66bA7617DA7e2Ba6e48",
    "OSWAP_RestrictedLiquidityProvider": "0x6Ad6dE48e1bdBb7caD656D80fFDcA863B4614741",
    "OSWAP_VotingExecutor4": "0x5AE58EA32B231576ADE76c6f94b13F06C2B8387b",
    "OSWAP_RestrictedOracle": "0xc37B982d836b72374f5D276E60A69C66062b9Bcf",
    "OSWAP_PeggedOracleFactory": "0x728DbD968341eb7aD11bDabFE775A13aF901d6ac",
    "OSWAP_PeggedOracleRouter": "0x408aAf94BD851eb991dA146dFc7C290aA42BA70f",
    "OSWAP_PeggedOracleLiquidityProvider": "0x5A9C508ee45d417d176CddADFb151DDC1Fcd21D9",
    "OSWAP_PeggedVotingExecutor2": "0xc441538c208e38C8B8cbc1028dd270049CD73761",
    "PangolinFactory": "0xE4A575550C2b460d2307b82dCd7aFe84AD1484dd",
    "PangolinRouter": "0x2D99ABD9008Dc933ff5c0CD271B88309593aB921",
    "SushiSwapV2Factory": "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    "SushiSwapV2Router02": "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"
  },
  250: {
    "WETH9": "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
    "SpiritSwapFactory": "0xEF45d134b73241eDa7703fa787148D9C9F4950b0",
    "SpiritSwapRouter": "0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52",
    "SpookySwapFactory": "0x152ee697f2e276fa89e96742e9bb9ab1f2e61be3",
    "SpookySwapRouter": "0xf491e7b69e4244ad4002bc14e878a34207e38c29",
    "SushiSwapV2Factory": "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    "SushiSwapV2Router02": "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"
  },
  4002: {
    "WETH9": "0xf1277d1Ed8AD466beddF92ef448A132661956621",
    "GOV_TOKEN": "0xDe0399014ED809e0E5976D391013dEd315c6B778",
    "OAXDEX_Governance": "0xA9d603421e2777b8BEa685272611A01fF3bc6523",
    "OAXDEX_VotingRegistry": "0xBB04C4927A05Cf7d3e329E6333658D48A9313356",
    "OAXDEX_Factory": "0xE0B60F919E6051a5533ffa5B61CF0d5b27cD1cbf",
    "OAXDEX_Administrator": "0x21C393fADf4dC7f612DEe2DFE72410B012F045E9",
    "OAXDEX_Router": "0xDcdAFd9461c2df544F6E2165481E8174e45fEbD8",
    "OSWAP_OracleFactory": "0x28A6a9079fA8e041179cD13F4652af2B315b6fd8",
    "OSWAP_OracleRouter": "0x689200913Ca40C8c89102A3441D62d51282eAA3f",
    "OSWAP_OracleLiquidityProvider": "0x909e8e370E0B53FdA0790ead072FA6EE4112CDec",
    "OSWAP_HybridRouterRegistry": "0x93baA37dA23d507dF3F075F660584969e68ec5eb",
    "OSWAP_HybridRouter2": "0x1B0D217822719941a1ae3B38eB0A94663e9ad86E",
    "OAXDEX_VotingExecutor": "0xe06a37e298733d418b3e5a36445877A0C657414F",
    "OAXDEX_VotingExecutor1": "0x02de3A670ea1aAcF4a404A49585D619560ec1964",
    "OSWAP_VotingExecutor2": "0xA887958C66bec5da6a884936c050FeB32D67F4d3"
  },
  13370: {
    "WETH9": "0xCb5e100fdF7d24f25865fa85673D9bD6Bb4674ab",
    "GOV_TOKEN": "0xA0AF68AB35fa4618b57C1A7CFc07A8caa0cBf07E",
    "OAXDEX_Governance": "0xB46d2C706A5F276300506E734010302D1B6e6A15",
    "OAXDEX_VotingRegistry": "0x3998E14410f26905fdAB3EddaE834f101A083975",
    "OAXDEX_Factory": "0x76c9DB339F5E0C3613bcbD309474B8b7BDf7395e",
    "OAXDEX_Administrator": "0x316a4956481b1cBb4cbcd326aC12feA63691d07F",
    "OAXDEX_VotingExecutor": "0xd72Bf3c285eBB7dA189ba46a3634a662Cae6851B",
    "OAXDEX_VotingExecutor1": "0x69556952DC7667A8B5a670A1eb60d38a89fB327B",
    "OAXDEX_Router": "0x4Dd2748168a1B60ea59990E57D70Ae1E7b9958fB",
    "OSWAP_HybridRouterRegistry": "0x9173cf0b537275eC74D075b32E73690e7d273086",
    "OSWAP_HybridRouter2": "0x567c6Af5Ec3EC2821143179DD4bBAcea5f7A9de9",
    "OSWAP_OracleFactory": "0x227C8E8C4D1baDC6665Cb31C01E0B3D65c5d04B4",
    "OSWAP_OracleRouter": "0xF51D07E7d50cA5236f0032F70D1CDc36C78aa8Be",
    "OSWAP_OracleLiquidityProvider": "0x1F9D36030d2AA6d0Ce2Bd8e8cc224d53CAC0a655",
    "OSWAP_VotingExecutor2": "0x7D003771A1b2Facb23C076194c75a1b9Ed6F0690",
    "OSWAP_RangeFactory": "0x1Db29E80e7eCc82Be98d1deE4Bf3800433212b7e",
    "OSWAP_RangeLiquidityProvider": "0x8aEc300b35Ac976318CfeD9425D09071796dA38b",
    "OSWAP_VotingExecutor3": "0x915dF121e7F95D00943Bb402b1137788E521Ea03",
    "OSWAP_ConfigStore": "0xE1B1fE44E8a9fec2Ae47065BA1d33069014d64bd",
    "OSWAP_RestrictedFactory": "0x6B9215FCa70E2972182B7BF427C4D7fCcf5C24e5",
    "OSWAP_RestrictedLiquidityProvider": "0xaaC04C77FeB88207c29f50A9a9543aFBa08C4323",
    "OSWAP_VotingExecutor4": "0xDD6cdC84840322615e6c89Cd8CA330c261bff12F"
  }
};

// src/store/data/staking.ts
var LockTokenType;
(function(LockTokenType2) {
  LockTokenType2[LockTokenType2["ERC20_Token"] = 0] = "ERC20_Token";
  LockTokenType2[LockTokenType2["LP_Token"] = 1] = "LP_Token";
  LockTokenType2[LockTokenType2["VAULT_Token"] = 2] = "VAULT_Token";
})(LockTokenType || (LockTokenType = {}));
var LockTokenTypeList = [
  { name: "ERC20_Token", value: 0 },
  { name: "LP_Token", value: 1 },
  { name: "VAULT_Token", value: 2 }
];
var USDPeggedTokenAddressMap = {
  56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  97: "0xDe9334C157968320f26e449331D6544b89bbD00F",
  43113: "0xb9c31ea1d475c25e58a1be1a46221db55e5a7c6e",
  43114: "0xc7198437980c041c805a1edcba50c1ce5db95118"
};

// src/store/data/cross-chain.ts
var baseRoute = "https://route.openswap.xyz";
var crossChainNativeTokenList = {
  42: { address: "ETH", decimals: 18, symbol: "ETH", name: "ETH", isNative: true, wethAddress: "0xd0A1E359811322d97991E03f863a0C30C2cF029C" },
  56: { address: "BNB", decimals: 18, symbol: "BNB", name: "BNB", isNative: true, wethAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" },
  97: { address: "BNB", decimals: 18, symbol: "BNB", name: "BNB", isNative: true, wethAddress: "0xae13d989dac2f0debff460ac112a837c89baa7cd" },
  43113: { address: "AVAX", decimals: 18, symbol: "AVAX", name: "AVAX", isNative: true, wethAddress: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c" },
  43114: { address: "AVAX", decimals: 18, symbol: "AVAX", name: "AVAX", isNative: true, wethAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7" },
  80001: { address: "MATIC", decimals: 18, symbol: "MATIC", name: "MATIC", isNative: true, wethAddress: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889" }
};
var VaultType;
(function(VaultType2) {
  VaultType2["Project"] = "Project";
  VaultType2["Exchange"] = "Exchange";
})(VaultType || (VaultType = {}));
var getBridgeVaultVersion = (chainId) => {
  let network = getNetworkInfo(chainId);
  const isTestnet = !network.isDisabled && network.isCrossChainSupported && network.isTestnet;
  if (isTestnet)
    return "0.1.5";
  return "1.1.1";
};
var BridgeVaultGroupList = [
  {
    "name": "USDT",
    "vaultType": VaultType.Exchange,
    "vaults": {
      "42": {
        "tokenAddress": "0xDcdAFd9461c2df544F6E2165481E8174e45fEbD8",
        "vaultRegistryAddress": "0x9580C567daC0EC4D05bB64a078e6fCCDc2103B64",
        "vaultAddress": "0x07578ec965a54bfBdAA83db7261F442d315eC6c2",
        "softCap": 1e5
      },
      "56": {
        "tokenAddress": "0x55d398326f99059fF775485246999027B3197955",
        "vaultRegistryAddress": "0x1026deABF37C452F8aF8672cC9B9181fab709154",
        "vaultAddress": "0xE9CAAFD124831562423FE129b02e938Cc33B45E2",
        "vaultDecimals": 18,
        "softCap": 1e5
      },
      "97": {
        "tokenAddress": "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
        "vaultRegistryAddress": "0xf2B6E0585282ffd10573a566C650f8b57cB7298F",
        "vaultAddress": "0x5d2510192A6F6C46154603c1132499d800BB9785",
        "softCap": 1e5
      },
      "43113": {
        "tokenAddress": "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
        "vaultRegistryAddress": "0x7076d6314aCe8830b07B66D716CceF581629E728",
        "vaultAddress": "0xe9645952f275521875a11EB122E9eF2649162977",
        "softCap": 1e5
      },
      "43114": {
        "tokenAddress": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
        "vaultRegistryAddress": "0x2e102E6E9546433aB9c2a32ddd6eAFDfE987910B",
        "vaultAddress": "0x55570d7EcAeFF86a6425815def25447A8b14A222",
        "vaultDecimals": 18,
        "softCap": 1e5
      },
      "80001": {
        "tokenAddress": "0xF6Bf7c1213fdCe4AA92e7c91865cD586891B9cF6",
        "vaultRegistryAddress": "0x8E5fcD46C6Dc74180C89572bAd8822cC0Eff3622",
        "vaultAddress": "0x90Dd6EF27dBB77CD55Da6818414F3A3185f6a7f6",
        "softCap": 1e5
      }
    }
  },
  {
    "name": "OSWAP",
    "vaultType": VaultType.Project,
    "vaults": {
      "42": {
        "tokenAddress": "0x28A6a9079fA8e041179cD13F4652af2B315b6fd8",
        "vaultRegistryAddress": "0x911567173f33377784a934DC071a999F1dA4bd0C",
        "vaultAddress": "0x13c682d5F11927c24022a743B0510A7C23649667",
        "softCap": 1e5
      },
      "56": {
        "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
        "vaultRegistryAddress": "0xd8f7a9E2cE096670A27238487a62e1e000334F81",
        "vaultAddress": "0x65d6d677e102C2758224a797f7fb2b60DBeA8635",
        "softCap": 1e5,
        "vaultDecimals": 18
      },
      "97": {
        "tokenAddress": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
        "vaultRegistryAddress": "0xA7d49e365C458324bB8F0dEcB9b7292EFAC397a7",
        "vaultAddress": "0x64A3B88cf51d1cc4de145DCf3981B8D8072c3d06",
        "softCap": 1e5
      },
      "43113": {
        "tokenAddress": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
        "vaultRegistryAddress": "0xc8fC05a8e9D6dA2FF6395202b28eEbA4e5B21004",
        "vaultAddress": "0xc6bBF3DdC2eef54cCB667962Fa37733e0D3CE510",
        "fixedStakingApr": "18.25",
        "softCap": 1e5
      },
      "43114": {
        "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
        "vaultRegistryAddress": "0x39dfbdF2a8b4719D009F3CEE1d000899FeD8B00a",
        "vaultAddress": "0x8Af3e8596acE65D9c1EDE6d5356a34eAb46a46f5",
        "vaultDecimals": 18,
        "softCap": 1e5
      },
      "80001": {
        "tokenAddress": "0xA9d603421e2777b8BEa685272611A01fF3bc6523",
        "vaultRegistryAddress": "0x4c0f2C0acb7a5728a75EE35820Ed14e98F24e8b9",
        "vaultAddress": "0x2ED4CE8f09F606ea253bF57c45e83d8BD45Ce572",
        "softCap": 1e5
      }
    }
  },
  {
    "name": "OSWAP",
    "deprecated": true,
    "vaultType": VaultType.Project,
    "vaults": {
      "43113": {
        "tokenAddress": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
        "vaultRegistryAddress": "0xc8fC05a8e9D6dA2FF6395202b28eEbA4e5B21004",
        "vaultAddress": "0x67565ACa8abcc5C94b3E934AdC5C6965b3ed7F89"
      },
      "43114": {
        "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
        "vaultRegistryAddress": "",
        "vaultAddress": "0x547C8B68Cb36410FFDceE6Ad4bA0c64FD21085Bb"
      }
    }
  }
];
var ChainTrollRegistryMap = {
  42: {
    registryAddress: "0x152b19e48BB87dE40cFC2bf7FFAF341d4E2A7eD3",
    isMainChain: false
  },
  56: {
    registryAddress: "0xcd050070b53924e1965418d7d940fa2abb4302f3",
    isMainChain: true
  },
  97: {
    registryAddress: "0x3e2Fa653594273c6C908c1702154D4EAcC6Be7c3",
    isMainChain: false
  },
  43113: {
    registryAddress: "0x63A2c470289bb95DCcdc01EaC080491B72702F8a",
    isMainChain: true
  },
  43114: {
    registryAddress: "0x30ab6C6545Ee09caDB78A16489907B50893270D4",
    isMainChain: false
  },
  80001: {
    registryAddress: "0x75008c73440E93bB1331483F8A22149AD2A61Be9",
    isMainChain: false
  }
};
var CrossChainAddressMap = {
  42: {
    wrapperAddress: "0x8ad7a50FA4647995126988c7fCEa242Bae2D832F"
  },
  56: {
    wrapperAddress: "0xce194324a8ddaf43e5c00f38593f37c9f21ed297"
  },
  97: {
    wrapperAddress: "0x7D67DBb5DA525eC3455f075BA1211cDe35FC737d"
  },
  43113: {
    wrapperAddress: "0x960C93958caED9622207edd7f77f2D0E57CFd322"
  },
  43114: {
    wrapperAddress: "0xcd050070b53924e1965418d7d940fa2abb4302f3"
  },
  80001: {
    wrapperAddress: "0x788a9036b682AdB247A30Ec3628DE11735B67718"
  }
};
var MockOracleMap = {
  42: {
    "0x28a6a9079fa8e041179cd13f4652af2b315b6fd8": "0x226021E3582c89eF9a338be069dEcFD43acF0269",
    "0xdcdafd9461c2df544f6e2165481e8174e45febd8": "0xEF4Faa48Ee32E2D47503a821eb7E8607D52489AC"
  },
  56: {
    "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93": "0xd9df1285e2effbaaa580513b256bd21c041973f7",
    "0x55d398326f99059fF775485246999027B3197955": "0x6979c00cc49e0b5e77a920b25a0e16445b0f665a"
  },
  97: {
    "0x45eee762aaea4e5ce317471bda8782724972ee19": "0x50C41443c3F05d469644675235249F375a5AA622",
    "0x29386b60e0a9a1a30e1488ada47256577ca2c385": "0x6af1CdfBe372C922405C0CD9003CE7758250E8E5"
  },
  43113: {
    "0x78d9d80e67bc80a11efbf84b7c8a65da51a8ef3c": "0xe4dfc0E5772405483F71FE1c234290d62C102e02",
    "0xb9c31ea1d475c25e58a1be1a46221db55e5a7c6e": "0xA79D4C012AaeafD45630af1298DC3e18596fF081"
  },
  43114: {
    "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93": "0xd9df1285e2effbaaa580513b256bd21c041973f7",
    "0xc7198437980c041c805A1EDcbA50c1Ce5db95118": "0x6979c00cc49e0b5e77a920b25a0e16445b0f665a"
  },
  80001: {
    "0xA9d603421e2777b8BEa685272611A01fF3bc6523": "0x7d564Ca1A9fb5a6D2275e62A97333AdaA5d2Cbe6",
    "0xf6bf7c1213fdce4aa92e7c91865cd586891b9cf6": "0xc2817961e17E24853856cC355E902C5D1B8f07E9"
  }
};
var VaultOrderStatus;
(function(VaultOrderStatus2) {
  VaultOrderStatus2[VaultOrderStatus2["pending"] = 0] = "pending";
  VaultOrderStatus2[VaultOrderStatus2["executed"] = 1] = "executed";
  VaultOrderStatus2[VaultOrderStatus2["requestCancel"] = 2] = "requestCancel";
  VaultOrderStatus2[VaultOrderStatus2["approvedCancel"] = 3] = "approvedCancel";
  VaultOrderStatus2[VaultOrderStatus2["cancelled"] = 4] = "cancelled";
  VaultOrderStatus2[VaultOrderStatus2["expired"] = 5] = "expired";
})(VaultOrderStatus || (VaultOrderStatus = {}));
var TrollType;
(function(TrollType2) {
  TrollType2[TrollType2["NotSpecified"] = 0] = "NotSpecified";
  TrollType2[TrollType2["SuperTroll"] = 1] = "SuperTroll";
  TrollType2[TrollType2["GeneralTroll"] = 2] = "GeneralTroll";
})(TrollType || (TrollType = {}));
var TrollTypeStringEnumMap = {
  "NotSpecified": 0,
  "SuperTroll": 1,
  "GeneralTroll": 2
};
var TrollStatus;
(function(TrollStatus2) {
  TrollStatus2[TrollStatus2["Active"] = 0] = "Active";
  TrollStatus2[TrollStatus2["Inactive"] = 1] = "Inactive";
})(TrollStatus || (TrollStatus = {}));
var VaultActionType;
(function(VaultActionType2) {
  VaultActionType2[VaultActionType2["Stake"] = 0] = "Stake";
  VaultActionType2[VaultActionType2["RequestUnstake"] = 1] = "RequestUnstake";
  VaultActionType2[VaultActionType2["Unstake"] = 2] = "Unstake";
})(VaultActionType || (VaultActionType = {}));
var TrollManagementActionType;
(function(TrollManagementActionType2) {
  TrollManagementActionType2[TrollManagementActionType2["StakeNFT"] = 0] = "StakeNFT";
  TrollManagementActionType2[TrollManagementActionType2["UnstakeNFT"] = 1] = "UnstakeNFT";
  TrollManagementActionType2[TrollManagementActionType2["StakeBond"] = 2] = "StakeBond";
  TrollManagementActionType2[TrollManagementActionType2["UnstakeBond"] = 3] = "UnstakeBond";
})(TrollManagementActionType || (TrollManagementActionType = {}));

// src/store/data/networks.ts
var InfuraId = "adc596bf88b648e2a8902bc9093930c5";
var Networks = [
  {
    name: "Ethereum",
    chainId: 1,
    img: "img/network/ethereumNetwork.svg",
    rpc: `https://mainnet.infura.io/v3/${InfuraId}`,
    explorerName: "Etherscan",
    explorerTxUrl: "https://etherscan.io/tx/",
    explorerAddressUrl: "https://etherscan.io/address/"
  },
  {
    name: "Cronos Mainnet",
    chainId: 25,
    img: "img/network/cronosMainnet.svg",
    isDisabled: true
  },
  {
    name: "Kovan Test Network",
    chainId: 42,
    img: "img/network/ethereumNetwork.svg",
    rpc: `https://kovan.infura.io/v3/${InfuraId}`,
    isCrossChainSupported: true,
    explorerName: "Etherscan",
    explorerTxUrl: "https://kovan.etherscan.io/tx/",
    explorerAddressUrl: "https://kovan.etherscan.io/address/",
    isTestnet: true
  },
  {
    name: "Binance Smart Chain",
    chainId: 56,
    img: "img/network/bscMainnet.svg",
    rpc: "https://bsc-dataseed.binance.org/",
    isMainChain: true,
    isCrossChainSupported: true,
    explorerName: "BSCScan",
    explorerTxUrl: "https://bscscan.com/tx/",
    explorerAddressUrl: "https://bscscan.com/address/"
  },
  {
    name: "Polygon",
    chainId: 137,
    img: "img/network/polygon.svg",
    explorerName: "PolygonScan",
    explorerTxUrl: "https://polygonscan.com/tx/",
    explorerAddressUrl: "https://polygonscan.com/address/"
  },
  {
    name: "Fantom Opera",
    chainId: 250,
    img: "img/network/fantom-ftm-logo.svg",
    rpc: "https://rpc.ftm.tools/",
    explorerName: "FTMScan",
    explorerTxUrl: "https://ftmscan.com/tx/",
    explorerAddressUrl: "https://ftmscan.com/address/"
  },
  {
    name: "BSC Testnet",
    chainId: 97,
    img: "img/network/bscMainnet.svg",
    rpc: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    isCrossChainSupported: true,
    explorerName: "BSCScan",
    explorerTxUrl: "https://testnet.bscscan.com/tx/",
    explorerAddressUrl: "https://testnet.bscscan.com/address/",
    isTestnet: true
  },
  {
    name: "Cronos Mainnet",
    chainId: 338,
    img: "img/network/cronosMainnet.svg",
    isDisabled: true
  },
  {
    name: "Amino Testnet",
    chainId: 31337,
    img: "img/network/animoTestnet.svg",
    isDisabled: true,
    isTestnet: true
  },
  {
    name: "Mumbai",
    chainId: 80001,
    img: "img/network/polygon.svg",
    rpc: "https://matic-mumbai.chainstacklabs.com",
    isCrossChainSupported: true,
    explorerName: "PolygonScan",
    explorerTxUrl: "https://mumbai.polygonscan.com/tx/",
    explorerAddressUrl: "https://mumbai.polygonscan.com/address/",
    isTestnet: true
  },
  {
    name: "Avalanche FUJI C-Chain",
    chainId: 43113,
    img: "img/network/avax.svg",
    rpc: "https://api.avax-test.network/ext/bc/C/rpc",
    isCrossChainSupported: true,
    isMainChain: true,
    explorerName: "SnowTrace",
    explorerTxUrl: "https://testnet.snowtrace.io/tx/",
    explorerAddressUrl: "https://testnet.snowtrace.io/address/",
    isTestnet: true
  },
  {
    name: "Avalanche Mainnet C-Chain",
    chainId: 43114,
    img: "img/network/avax.svg",
    rpc: "https://api.avax.network/ext/bc/C/rpc",
    isCrossChainSupported: true,
    explorerName: "SnowTrace",
    explorerTxUrl: "https://snowtrace.io/tx/",
    explorerAddressUrl: "https://snowtrace.io/address/"
  },
  {
    name: "Fantom Testnet",
    chainId: 4002,
    img: "img/network/fantom-ftm-logo.svg",
    rpc: "https://rpc.testnet.fantom.network/",
    explorerName: "FTMScan",
    explorerTxUrl: "https://testnet.ftmscan.com/tx/",
    explorerAddressUrl: "https://testnet.ftmscan.com/address/",
    isDisabled: true,
    isTestnet: true
  },
  {
    name: "AminoX Testnet",
    chainId: 13370,
    img: "img/network/aminoXTestnet.svg",
    isDisabled: true,
    explorerName: "AminoX Explorer",
    explorerTxUrl: "https://aminoxtestnet.blockscout.alphacarbon.network/tx/",
    explorerAddressUrl: "https://aminoxtestnet.blockscout.alphacarbon.network/address/",
    isTestnet: true
  }
];

// src/store/index.ts
var import_components2 = __toModule(require("@ijstech/components"));
var fallBackUrl = import_assets.default.fullPath("img/tokens/token-placeholder.svg");
var nullAddress = "0x0000000000000000000000000000000000000000";
var TOKENS = "oswap_user_tokens_";
var getUserTokens = (chainId) => {
  let tokens = localStorage[TOKENS + chainId];
  if (tokens) {
    tokens = JSON.parse(tokens);
  } else {
    tokens = [];
  }
  const userTokens = state.userTokens[chainId];
  if (userTokens && userTokens.length) {
    tokens = tokens.concat(userTokens);
  }
  return tokens.length ? tokens : null;
};
var addUserTokens = (token) => {
  const chainId = getChainId();
  let tokens = localStorage[TOKENS + chainId];
  let i = -1;
  if (tokens) {
    tokens = JSON.parse(tokens);
    i = tokens.findIndex((item) => item.address == token.address);
  } else {
    tokens = [];
  }
  if (i == -1) {
    tokens.push(token);
  }
  localStorage[TOKENS + chainId] = JSON.stringify(tokens);
};
var setSiteEnv = (value) => {
  if (Object.values(import_global2.SITE_ENV).includes(value)) {
    state.siteEnv = value;
  } else {
    state.siteEnv = import_global2.SITE_ENV.TESTNET;
  }
};
var getSiteEnv = () => {
  return state.siteEnv;
};
var setCurrentChainId2 = (value) => {
  state.currentChainId = value;
};
var getCurrentChainId2 = () => {
  return state.currentChainId;
};
function getAddresses(chainId) {
  return CoreContractAddressesByChainId[chainId];
}
var getChainNativeToken = (chainId) => {
  return ChainNativeTokenByChainId[chainId];
};
var getWETH = (chainId) => {
  let wrappedToken = WETHByChainId[chainId];
  return wrappedToken;
};
function getChainId() {
  return import_eth_wallet6.Wallet.getInstance().chainId;
}
function getWallet() {
  return isWalletConnected() ? import_eth_wallet6.Wallet.getInstance() : new import_eth_wallet6.Wallet(getNetworkInfo(state.currentChainId || getDefaultChainId2()).rpc);
}
function getWalletProvider() {
  return localStorage.getItem("walletProvider") || "";
}
function getErc20(address) {
  const wallet = getWallet();
  return new import_eth_wallet6.Erc20(wallet, address);
}
var isExpertMode = () => {
  return state.isExpertMode;
};
function toggleExpertMode() {
  state.isExpertMode = !state.isExpertMode;
}
var getTokenList = (chainId) => {
  const tokenList = [...DefaultTokens[chainId]];
  const userCustomTokens = getUserTokens(chainId);
  if (userCustomTokens) {
    userCustomTokens.forEach((v) => tokenList.push(__spreadProps(__spreadValues({}, v), { isNew: false, isCustom: true })));
  }
  return tokenList;
};
async function updateAllTokenBalances2() {
  const wallet = getWallet();
  let allTokenBalancesMap = {};
  if (!wallet.chainId || !DefaultTokens[wallet.chainId])
    return allTokenBalancesMap;
  const tokenList = getTokenList(wallet.chainId);
  let promises = [];
  promises.push(...tokenList.map(async (token, index) => {
    try {
      if (token.address) {
        let balance = (await (0, import_global2.getERC20Amount)(wallet, token.address, token.decimals)).toFixed();
        allTokenBalancesMap[token.address.toLowerCase()] = balance;
      } else {
        let balance = (await getWallet().balance).toFixed();
        allTokenBalancesMap[token.symbol] = balance;
      }
    } catch (error) {
    }
  }));
  await Promise.all(promises);
  state.tokenBalances = allTokenBalancesMap;
  return allTokenBalancesMap;
}
var getTokenBalances = () => {
  return state.tokenBalances;
};
var getTokenBalance = (token) => {
  let balance = "0";
  if (!token)
    return balance;
  if (token.address) {
    balance = state.tokenBalances[token.address.toLowerCase()];
  } else {
    balance = state.tokenBalances[token.symbol];
  }
  return balance;
};
var setTokenBalances = async (value) => {
  state.tokenBalances = value ? value : await updateAllTokenBalances2();
};
var state = {
  siteEnv: import_global2.SITE_ENV.TESTNET,
  currentChainId: 0,
  isExpertMode: false,
  slippageTolerance: 0.5,
  transactionDeadline: 30,
  tokenBalances: {},
  tokenMap: {},
  userTokens: {},
  infuraId: "",
  networkMap: {},
  stakingStatusMap: {}
};
var setDataFromSCConfig = (networkList, infuraId) => {
  if (infuraId) {
    setInfuraId(infuraId);
  }
  if (networkList) {
    setNetworkList(networkList);
  }
};
var getDefaultChainId2 = () => {
  switch (getSiteEnv()) {
    case import_global2.SITE_ENV.TESTNET:
      return 97;
    case import_global2.SITE_ENV.DEV:
    case import_global2.SITE_ENV.MAINNET:
    default:
      return 56;
  }
};
var setInfuraId = (infuraId) => {
  state.infuraId = infuraId;
};
var getInfuraId = () => {
  return state.infuraId;
};
var setNetworkList = (networkList) => {
  let networkFullList = Object.keys(networkList);
  for (const key of networkFullList) {
    let network = networkList[Number(key)];
    state.networkMap[network.chainId] = network;
  }
};
var getNetworkInfo = (chainId) => {
  return state.networkMap[chainId];
};
var getFilteredNetworks = (filter) => {
  let networkFullList = Object.values(state.networkMap);
  return networkFullList.filter(filter);
};
function matchFilter(list, filter) {
  let filters = Object.keys(filter);
  return list.filter((item) => filters.every((f) => {
    switch (typeof filter[f]) {
      case "boolean":
        if (filter[f] === false) {
          return item[f] === void 0 || item[f] === null;
        }
      case "string":
      case "number":
        return filter[f] === item[f];
      case "object":
      default:
        console.log(`matchFilter do not support ${typeof filter[f]} yet!`);
        return false;
    }
  }));
}
var getMatchNetworks = (conditions) => {
  let networkFullList = Object.values(state.networkMap);
  let out = matchFilter(networkFullList, conditions);
  return out;
};
var getSiteSupportedNetworks = () => {
  let networkFullList = Object.values(state.networkMap);
  let list = networkFullList.filter((network) => !getNetworkInfo(network.chainId).isDisabled);
  const siteEnv = getSiteEnv();
  if (siteEnv === import_global2.SITE_ENV.TESTNET) {
    return list.filter((network) => network.isTestnet);
  }
  if (siteEnv === import_global2.SITE_ENV.DEV) {
    return list;
  }
  return list.filter((network) => !network.isTestnet);
};
var getNetworkExplorerName = (chainId) => {
  if (getNetworkInfo(chainId)) {
    return getNetworkInfo(chainId).explorerName;
  }
  return "Unknown";
};
var getNetworkImg = (chainId) => {
  try {
    const network = getNetworkInfo(chainId);
    if (network) {
      return import_assets.default.fullPath(network.img);
    }
  } catch (e) {
  }
  return import_assets.default.fullPath("img/tokens/token-placeholder.svg");
};
var projectNativeToken = () => {
  let chainId = getChainId();
  if (chainId == null || chainId == void 0)
    return null;
  let stakeToken = DefaultTokens[chainId].find((v) => v.symbol == "OSWAP");
  return stakeToken ? __spreadProps(__spreadValues({}, stakeToken), { address: stakeToken.address.toLowerCase() }) : null;
};
var projectNativeTokenSymbol = () => {
  const token = projectNativeToken();
  return token ? token.symbol : "";
};
var getTokenObject = async (address, showBalance) => {
  const ERC20Contract = new import_sdk2.Contracts.ERC20(import_eth_wallet6.Wallet.getInstance(), address);
  const symbol = await ERC20Contract.symbol();
  const name = await ERC20Contract.name();
  const decimals = (await ERC20Contract.decimals()).toFixed();
  let balance;
  if (showBalance && getWallet().isConnected) {
    balance = (await ERC20Contract.balanceOf(getWallet().account.address)).shiftedBy(-decimals).toFixed();
  }
  return {
    address: address.toLowerCase(),
    decimals: +decimals,
    name,
    symbol,
    balance
  };
};
var getTokenMapData = (targetChain) => {
  let allTokensMap = {};
  let chainId = targetChain || getChainId();
  if (DefaultTokens[chainId]) {
    let defaultTokenList = DefaultTokens[chainId].sort((a, b) => {
      if (a.symbol.toLowerCase() < b.symbol.toLowerCase()) {
        return -1;
      }
      if (a.symbol.toLowerCase() > b.symbol.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    for (let i = 0; i < defaultTokenList.length; i++) {
      let defaultTokenItem = defaultTokenList[i];
      if (defaultTokenItem.address)
        allTokensMap[defaultTokenItem.address.toLowerCase()] = defaultTokenItem;
      else
        allTokensMap[defaultTokenItem.symbol] = defaultTokenItem;
    }
    const userCustomTokens = getUserTokens(chainId);
    if (userCustomTokens) {
      userCustomTokens.forEach((v) => allTokensMap[v.address] = __spreadProps(__spreadValues({}, v), { isCustom: true }));
    }
  }
  return allTokensMap;
};
var tokenMapChainId = 0;
var setTokenMap = () => {
  state.tokenMap = getTokenMapData();
};
var getTokenMap = () => {
  let chainId = getChainId();
  if (tokenMapChainId != chainId) {
    state.tokenMap = getTokenMapData();
    tokenMapChainId = chainId;
  }
  return state.tokenMap;
};
var getTokensDataList = async (tokenMapData, tokenBalances) => {
  let dataList = [];
  for (let i = 0; i < Object.keys(tokenMapData).length; i++) {
    let tokenAddress = Object.keys(tokenMapData)[i];
    let tokenObject = tokenMapData[tokenAddress];
    if (tokenBalances) {
      dataList.push(__spreadProps(__spreadValues({}, tokenObject), {
        status: false,
        value: tokenBalances[tokenAddress] ? tokenBalances[tokenAddress] : 0
      }));
    } else {
      dataList.push(__spreadProps(__spreadValues({}, tokenObject), {
        status: null
      }));
    }
  }
  return dataList;
};
var getTokenDecimals = (address) => {
  let chainId = getChainId();
  const Address = getAddresses(chainId);
  const ChainNativeToken = getChainNativeToken(chainId);
  const tokenObject = !address || address.toLowerCase() === Address["WETH9"].toLowerCase() ? ChainNativeToken : getTokenMap()[address];
  return tokenObject ? tokenObject.decimals : 18;
};
var getTokenIcon = (address) => {
  if (!address)
    return "";
  const tokenMap = getTokenMap();
  let ChainNativeToken;
  let tokenObject;
  if (isWalletConnected()) {
    ChainNativeToken = getChainNativeToken(getChainId());
    tokenObject = address == ChainNativeToken.symbol ? ChainNativeToken : tokenMap[address.toLowerCase()];
  } else {
    tokenObject = tokenMap[address.toLowerCase()];
  }
  return import_assets.default.fullPath(getTokenIconPath(tokenObject, getChainId()));
};
var tokenSymbol = (address) => {
  if (!address)
    return "";
  const tokenMap = getTokenMap();
  let tokenObject = tokenMap[address.toLowerCase()];
  if (!tokenObject) {
    tokenObject = tokenMap[address];
  }
  return tokenObject ? tokenObject.symbol : "";
};
var setUserTokens = (token, chainId) => {
  if (!state.userTokens[chainId]) {
    state.userTokens[chainId] = [token];
  } else {
    state.userTokens[chainId].push(token);
  }
};
var hasUserToken = (address, chainId) => {
  var _a;
  return (_a = state.userTokens[chainId]) == null ? void 0 : _a.some((token) => {
    var _a2;
    return ((_a2 = token.address) == null ? void 0 : _a2.toLocaleLowerCase()) === (address == null ? void 0 : address.toLocaleLowerCase());
  });
};
var viewOnExplorerByTxHash = (chainId, txHash) => {
  let network = getNetworkInfo(chainId);
  if (network && network.explorerTxUrl) {
    let url = `${network.explorerTxUrl}${txHash}`;
    window.open(url);
  }
};
var viewOnExplorerByAddress = (chainId, address) => {
  let network = getNetworkInfo(chainId);
  if (network && network.explorerAddressUrl) {
    let url = `${network.explorerAddressUrl}${address}`;
    window.open(url);
  }
};
var setStakingStatus = (key, value, text) => {
  state.stakingStatusMap[key] = { value, text };
  import_components2.application.EventBus.dispatch(import_global2.EventId.EmitButtonStatus, { key, value, text });
};
var getStakingStatus = (key) => {
  return state.stakingStatusMap[key] || { value: false, text: "Stake" };
};
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! moment.js
//! momentjs.com
//! version : 2.29.1
  
  });