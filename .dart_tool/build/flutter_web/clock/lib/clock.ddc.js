define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const $default = Object.create(dart.library);
  const clock = Object.create(dart.library);
  const stopwatch = Object.create(dart.library);
  const clock$ = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const $modulo = dartx['%'];
  const $truncate = dartx.truncate;
  const $noSuchMethod = dartx.noSuchMethod;
  const $_get = dartx._get;
  const $clamp = dartx.clamp;
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(clock$.systemTime, VoidToDateTime());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: clock.Clock.prototype,
        [Clock__time]: C1 || CT.C1
      });
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_stop', _stop));
    },
    get C3() {
      return C3 = dart.const(new _js_helper.PrivateSymbol.new('_start', _start));
    },
    get C4() {
      return C4 = dart.const(new _js_helper.PrivateSymbol.new('_stop=', _stop_));
    },
    get C5() {
      return C5 = dart.const(new _js_helper.PrivateSymbol.new('_start=', _start_));
    },
    get C6() {
      return C6 = dart.constList([0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], core.int);
    }
  });
  $default.withClock = function withClock(T, clock, callback, opts) {
    let t0;
    let isFinal = opts && 'isFinal' in opts ? opts.isFinal : false;
    if (dart.dtest((t0 = async.Zone.current._get($default._isFinalKey), t0 == null ? false : t0))) {
      dart.throw(new core.StateError.new("Cannot call withClock() within a call to withClock(isFinal: true)."));
    }
    return async.runZoned(T, callback, {zoneValues: new _js_helper.LinkedMap.from([$default._clockKey, clock, $default._isFinalKey, isFinal])});
  };
  let C1;
  const Clock__time = dart.privateName(clock, "Clock._time");
  let C0;
  dart.copyProperties($default, {
    get clock() {
      let t0;
      return clock.Clock._check((t0 = async.Zone.current._get($default._clockKey), t0 == null ? C0 || CT.C0 : t0));
    }
  });
  dart.defineLazy($default, {
    /*$default._clockKey*/get _clockKey() {
      return new core.Object.new();
    },
    /*$default._isFinalKey*/get _isFinalKey() {
      return new core.Object.new();
    }
  });
  const _time = dart.privateName(clock, "_time");
  clock.Clock = class Clock extends core.Object {
    get [_time]() {
      return this[_time$];
    }
    set [_time](value) {
      super[_time] = value;
    }
    now() {
      return this[_time]();
    }
    agoBy(duration) {
      return this.now().subtract(duration);
    }
    fromNowBy(duration) {
      return this.now().add(duration);
    }
    ago(opts) {
      let days = opts && 'days' in opts ? opts.days : 0;
      let hours = opts && 'hours' in opts ? opts.hours : 0;
      let minutes = opts && 'minutes' in opts ? opts.minutes : 0;
      let seconds = opts && 'seconds' in opts ? opts.seconds : 0;
      let milliseconds = opts && 'milliseconds' in opts ? opts.milliseconds : 0;
      let microseconds = opts && 'microseconds' in opts ? opts.microseconds : 0;
      return this.agoBy(new core.Duration.new({days: days, hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds, microseconds: microseconds}));
    }
    fromNow(opts) {
      let days = opts && 'days' in opts ? opts.days : 0;
      let hours = opts && 'hours' in opts ? opts.hours : 0;
      let minutes = opts && 'minutes' in opts ? opts.minutes : 0;
      let seconds = opts && 'seconds' in opts ? opts.seconds : 0;
      let milliseconds = opts && 'milliseconds' in opts ? opts.milliseconds : 0;
      let microseconds = opts && 'microseconds' in opts ? opts.microseconds : 0;
      return this.fromNowBy(new core.Duration.new({days: days, hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds, microseconds: microseconds}));
    }
    microsAgo(microseconds) {
      return this.ago({microseconds: microseconds});
    }
    microsFromNow(microseconds) {
      return this.fromNow({microseconds: microseconds});
    }
    millisAgo(milliseconds) {
      return this.ago({milliseconds: milliseconds});
    }
    millisFromNow(milliseconds) {
      return this.fromNow({milliseconds: milliseconds});
    }
    secondsAgo(seconds) {
      return this.ago({seconds: seconds});
    }
    secondsFromNow(seconds) {
      return this.fromNow({seconds: seconds});
    }
    minutesAgo(minutes) {
      return this.ago({minutes: minutes});
    }
    minutesFromNow(minutes) {
      return this.fromNow({minutes: minutes});
    }
    hoursAgo(hours) {
      return this.ago({hours: hours});
    }
    hoursFromNow(hours) {
      return this.fromNow({hours: hours});
    }
    daysAgo(days) {
      return this.ago({days: days});
    }
    daysFromNow(days) {
      return this.fromNow({days: days});
    }
    weeksAgo(weeks) {
      return this.ago({days: 7 * dart.notNull(weeks)});
    }
    weeksFromNow(weeks) {
      return this.fromNow({days: 7 * dart.notNull(weeks)});
    }
    monthsAgo(months) {
      let time = this.now();
      let month = (dart.notNull(time.month) - dart.notNull(months) - 1)[$modulo](12) + 1;
      let year = dart.notNull(time.year) - ((dart.notNull(months) + 12 - dart.notNull(time.month)) / 12)[$truncate]();
      let day = utils.clampDayOfMonth({year: year, month: month, day: time.day});
      return new core.DateTime.new(year, month, day, time.hour, time.minute, time.second, time.millisecond);
    }
    monthsFromNow(months) {
      let time = this.now();
      let month = (dart.notNull(time.month) + dart.notNull(months) - 1)[$modulo](12) + 1;
      let year = dart.notNull(time.year) + ((dart.notNull(months) + dart.notNull(time.month) - 1) / 12)[$truncate]();
      let day = utils.clampDayOfMonth({year: year, month: month, day: time.day});
      return new core.DateTime.new(year, month, day, time.hour, time.minute, time.second, time.millisecond);
    }
    yearsAgo(years) {
      let time = this.now();
      let year = dart.notNull(time.year) - dart.notNull(years);
      let day = utils.clampDayOfMonth({year: year, month: time.month, day: time.day});
      return new core.DateTime.new(year, time.month, day, time.hour, time.minute, time.second, time.millisecond);
    }
    yearsFromNow(years) {
      return this.yearsAgo(-dart.notNull(years));
    }
    stopwatch() {
      return new stopwatch.ClockStopwatch.new(this);
    }
    getStopwatch() {
      return this.stopwatch();
    }
  };
  (clock.Clock.new = function(currentTime = C1 || CT.C1) {
    this[_time$] = currentTime;
    ;
  }).prototype = clock.Clock.prototype;
  (clock.Clock.fixed = function(time) {
    this[_time$] = dart.fn(() => time, VoidToDateTime());
    ;
  }).prototype = clock.Clock.prototype;
  dart.addTypeTests(clock.Clock);
  const _time$ = Clock__time;
  dart.setMethodSignature(clock.Clock, () => ({
    __proto__: dart.getMethods(clock.Clock.__proto__),
    now: dart.fnType(core.DateTime, []),
    agoBy: dart.fnType(core.DateTime, [core.Duration]),
    fromNowBy: dart.fnType(core.DateTime, [core.Duration]),
    ago: dart.fnType(core.DateTime, [], {days: core.int, hours: core.int, microseconds: core.int, milliseconds: core.int, minutes: core.int, seconds: core.int}, {}),
    fromNow: dart.fnType(core.DateTime, [], {days: core.int, hours: core.int, microseconds: core.int, milliseconds: core.int, minutes: core.int, seconds: core.int}, {}),
    microsAgo: dart.fnType(core.DateTime, [core.int]),
    microsFromNow: dart.fnType(core.DateTime, [core.int]),
    millisAgo: dart.fnType(core.DateTime, [core.int]),
    millisFromNow: dart.fnType(core.DateTime, [core.int]),
    secondsAgo: dart.fnType(core.DateTime, [core.int]),
    secondsFromNow: dart.fnType(core.DateTime, [core.int]),
    minutesAgo: dart.fnType(core.DateTime, [core.int]),
    minutesFromNow: dart.fnType(core.DateTime, [core.int]),
    hoursAgo: dart.fnType(core.DateTime, [core.int]),
    hoursFromNow: dart.fnType(core.DateTime, [core.int]),
    daysAgo: dart.fnType(core.DateTime, [core.int]),
    daysFromNow: dart.fnType(core.DateTime, [core.int]),
    weeksAgo: dart.fnType(core.DateTime, [core.int]),
    weeksFromNow: dart.fnType(core.DateTime, [core.int]),
    monthsAgo: dart.fnType(core.DateTime, [core.int]),
    monthsFromNow: dart.fnType(core.DateTime, [core.int]),
    yearsAgo: dart.fnType(core.DateTime, [core.int]),
    yearsFromNow: dart.fnType(core.DateTime, [core.int]),
    stopwatch: dart.fnType(core.Stopwatch, []),
    getStopwatch: dart.fnType(core.Stopwatch, [])
  }));
  dart.setLibraryUri(clock.Clock, "package:clock/src/clock.dart");
  dart.setFieldSignature(clock.Clock, () => ({
    __proto__: dart.getFields(clock.Clock.__proto__),
    [_time]: dart.finalFieldType(dart.fnType(core.DateTime, []))
  }));
  const _elapsed = dart.privateName(stopwatch, "_elapsed");
  const _clock$ = dart.privateName(stopwatch, "_clock");
  const _start = dart.privateName(stopwatch, "_start");
  const _stop = dart.privateName(stopwatch, "_stop");
  let C2;
  const _stop$ = dart.privateName(core, "_stop");
  let C3;
  const _start$ = dart.privateName(core, "_start");
  const _stop_ = dart.privateName(stopwatch, "_stop=");
  let C4;
  const _start_ = dart.privateName(stopwatch, "_start=");
  let C5;
  const _start$0 = dart.privateName(stopwatch, "ClockStopwatch._start");
  stopwatch.ClockStopwatch = class ClockStopwatch extends core.Object {
    get [_start]() {
      return this[_start$0];
    }
    set [_start](value) {
      this[_start$0] = value;
    }
    get frequency() {
      return stopwatch._frequency;
    }
    get elapsedTicks() {
      return (dart.notNull(this.elapsedMicroseconds) * dart.notNull(this.frequency) / 1000000)[$truncate]();
    }
    get elapsed() {
      return new core.Duration.new({microseconds: this.elapsedMicroseconds});
    }
    get elapsedMilliseconds() {
      return (dart.notNull(this.elapsedMicroseconds) / 1000)[$truncate]();
    }
    get isRunning() {
      return this[_start] != null;
    }
    get elapsedMicroseconds() {
      return dart.notNull(this[_elapsed]) + dart.notNull(this[_start] == null ? 0 : this[_clock$].now().difference(this[_start]).inMicroseconds);
    }
    start() {
      this[_start] == null ? this[_start] = this[_clock$].now() : null;
    }
    stop() {
      this[_elapsed] = this.elapsedMicroseconds;
      this[_start] = null;
    }
    reset() {
      this[_elapsed] = 0;
      if (this[_start] != null) this[_start] = this[_clock$].now();
    }
    get [_stop$]() {
      return core.int._check(this[$noSuchMethod](new core._Invocation.getter(C2 || CT.C2)));
    }
    get [_start$]() {
      return core.int._check(this[$noSuchMethod](new core._Invocation.getter(C3 || CT.C3)));
    }
    set [_stop$](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C4 || CT.C4, value));
    }
    set [_start$](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C5 || CT.C5, value));
    }
  };
  (stopwatch.ClockStopwatch.new = function(_clock) {
    this[_elapsed] = 0;
    this[_start$0] = null;
    this[_clock$] = _clock;
    ;
  }).prototype = stopwatch.ClockStopwatch.prototype;
  dart.addTypeTests(stopwatch.ClockStopwatch);
  stopwatch.ClockStopwatch[dart.implements] = () => [core.Stopwatch];
  dart.setMethodSignature(stopwatch.ClockStopwatch, () => ({
    __proto__: dart.getMethods(stopwatch.ClockStopwatch.__proto__),
    start: dart.fnType(dart.void, []),
    stop: dart.fnType(dart.void, []),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(stopwatch.ClockStopwatch, () => ({
    __proto__: dart.getGetters(stopwatch.ClockStopwatch.__proto__),
    frequency: core.int,
    elapsedTicks: core.int,
    elapsed: core.Duration,
    elapsedMilliseconds: core.int,
    isRunning: core.bool,
    elapsedMicroseconds: core.int,
    [_stop$]: core.int,
    [_start$]: core.int
  }));
  dart.setSetterSignature(stopwatch.ClockStopwatch, () => ({
    __proto__: dart.getSetters(stopwatch.ClockStopwatch.__proto__),
    [_stop$]: core.int,
    [_start$]: core.int
  }));
  dart.setLibraryUri(stopwatch.ClockStopwatch, "package:clock/src/stopwatch.dart");
  dart.setFieldSignature(stopwatch.ClockStopwatch, () => ({
    __proto__: dart.getFields(stopwatch.ClockStopwatch.__proto__),
    [_clock$]: dart.finalFieldType(clock.Clock),
    [_elapsed]: dart.fieldType(core.int),
    [_start]: dart.fieldType(core.DateTime)
  }));
  dart.defineLazy(stopwatch, {
    /*stopwatch._frequency*/get _frequency() {
      return new core.Stopwatch.new().frequency;
    }
  });
  clock$.systemTime = function systemTime() {
    return new core.DateTime.now();
  };
  clock$.getStopwatch = function getStopwatch() {
    return $default.clock.stopwatch();
  };
  dart.copyProperties(clock$, {
    get now() {
      return $default.clock.now();
    }
  });
  utils.daysInMonth = function daysInMonth(year, month) {
    return month === 2 && dart.test(utils.isLeapYear(year)) ? 29 : utils._daysInMonth[$_get](month);
  };
  utils.isLeapYear = function isLeapYear(year) {
    return year[$modulo](4) === 0 && (year[$modulo](100) !== 0 || year[$modulo](400) === 0);
  };
  utils.clampDayOfMonth = function clampDayOfMonth(opts) {
    let year = opts && 'year' in opts ? opts.year : null;
    let month = opts && 'month' in opts ? opts.month : null;
    let day = opts && 'day' in opts ? opts.day : null;
    return dart.asInt(day[$clamp](1, utils.daysInMonth(year, month)));
  };
  let C6;
  dart.defineLazy(utils, {
    /*utils._daysInMonth*/get _daysInMonth() {
      return C6 || CT.C6;
    }
  });
  dart.trackLibraries("packages/clock/clock", {
    "package:clock/src/default.dart": $default,
    "package:clock/src/clock.dart": clock,
    "package:clock/src/stopwatch.dart": stopwatch,
    "package:clock/clock.dart": clock$,
    "package:clock/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/default.dart","src/clock.dart","src/stopwatch.dart","clock.dart","src/utils.dart"],"names":[],"mappings":"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","file":"clock.ddc.js"}');
  // Exports:
  return {
    src__default: $default,
    src__clock: clock,
    src__stopwatch: stopwatch,
    clock: clock$,
    src__utils: utils
  };
});

//# sourceMappingURL=clock.ddc.js.map
