define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const race = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const notification = Object.create(dart.library);
  const never = Object.create(dart.library);
  const defer = Object.create(dart.library);
  const timer = Object.create(dart.library);
  const materialize = Object.create(dart.library);
  const repeat = Object.create(dart.library);
  const zip = Object.create(dart.library);
  const sequence_equal = Object.create(dart.library);
  const range = Object.create(dart.library);
  const concat_eager = Object.create(dart.library);
  const concat = Object.create(dart.library);
  const switch_latest = Object.create(dart.library);
  const merge = Object.create(dart.library);
  const retry = Object.create(dart.library);
  const retry_when = Object.create(dart.library);
  const combine_latest = Object.create(dart.library);
  const error = Object.create(dart.library);
  const fork_join = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $removeAt = dartx.removeAt;
  const $forEach = dartx.forEach;
  const $length = dartx.length;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $where = dartx.where;
  const $runtimeType = dartx.runtimeType;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $every = dartx.every;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $_set = dartx._set;
  const $toString = dartx.toString;
  const $abs = dartx.abs;
  const $any = dartx.any;
  const $first = dartx.first;
  const $elementAt = dartx.elementAt;
  const $add = dartx.add;
  const $isNotEmpty = dartx.isNotEmpty;
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureTovoid = () => (FutureTovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let FutureToNull = () => (FutureToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  let JSArrayOfStream = () => (JSArrayOfStream = dart.constFn(_interceptors.JSArray$(async.Stream)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let boolToStreamControllerOfbool = () => (boolToStreamControllerOfbool = dart.constFn(dart.fnType(StreamControllerOfbool(), [], [core.bool])))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let StreamOfint = () => (StreamOfint = dart.constFn(async.Stream$(core.int)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfCompleter = () => (ListOfCompleter = dart.constFn(core.List$(async.Completer)))();
  let intToCompleter = () => (intToCompleter = dart.constFn(dart.fnType(async.Completer, [core.int])))();
  let intToFn = () => (intToFn = dart.constFn(dart.fnType(VoidToNull(), [core.int])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let JSArrayOfErrorAndStacktrace = () => (JSArrayOfErrorAndStacktrace = dart.constFn(_interceptors.JSArray$(utils.ErrorAndStacktrace)))();
  let VoidToRetryError = () => (VoidToRetryError = dart.constFn(dart.fnType(utils.RetryError, [])))();
  let intToNull$ = () => (intToNull$ = dart.constFn(dart.fnType(core.Null, [], [core.int])))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let ObjectAndStackTraceToNull = () => (ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object], [core.StackTrace])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let StreamSubscriptionTovoid = () => (StreamSubscriptionTovoid = dart.constFn(dart.fnType(dart.void, [async.StreamSubscription])))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$]: "Kind.OnData",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$]: "Kind.OnDone",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$]: "Kind.OnError",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], notification.Kind);
    }
  });
  const _controller = dart.privateName(race, "_controller");
  const _is_RaceStream_default = Symbol('_is_RaceStream_default');
  race.RaceStream$ = dart.generic(T => {
    class RaceStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("provide at least 1 stream"));
        }
        let subscriptions = null;
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let index = 0;
            let reduceToWinner = dart.fn(winnerIndex => {
              let winner = subscriptions[$removeAt](winnerIndex);
              subscriptions[$forEach](dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])));
              subscriptions = _interceptors.JSArray$(async.StreamSubscription$(T)).of([winner]);
            }, intToNull());
            let doUpdate = dart.fn(index => dart.fn(value => {
              try {
                if (dart.notNull(subscriptions[$length]) > 1) reduceToWinner(index);
                controller.add(value);
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, dart.fnType(core.Null, [T])), dart.fnType(dart.fnType(core.Null, [T]), [core.int]));
            subscriptions = streams[$map](async.StreamSubscription$(T), dart.fn(stream => {
              let t1;
              return stream.listen(doUpdate((t1 = index, index = t1 + 1, t1)), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close')});
            }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)])))[$toList]();
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$where](dart.fn(subscription => subscription != null, dart.fnType(core.bool, [async.StreamSubscription$(T)])))[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (RaceStream.new = function(streams) {
      this[_controller] = race.RaceStream._buildController(T, streams);
      RaceStream.__proto__.new.call(this);
      ;
    }).prototype = RaceStream.prototype;
    dart.addTypeTests(RaceStream);
    RaceStream.prototype[_is_RaceStream_default] = true;
    dart.setMethodSignature(RaceStream, () => ({
      __proto__: dart.getMethods(RaceStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(RaceStream, "package:rxdart/src/streams/race.dart");
    dart.setFieldSignature(RaceStream, () => ({
      __proto__: dart.getFields(RaceStream.__proto__),
      [_controller]: dart.finalFieldType(async.StreamController$(T))
    }));
    return RaceStream;
  });
  race.RaceStream = race.RaceStream$();
  dart.addTypeTests(race.RaceStream, _is_RaceStream_default);
  const message$ = dart.privateName(utils, "RetryError.message");
  const errors$ = dart.privateName(utils, "RetryError.errors");
  utils.RetryError = class RetryError extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get errors() {
      return this[errors$];
    }
    set errors(value) {
      super.errors = value;
    }
    static withCount(count, errors) {
      return new utils.RetryError.__("Received an error after attempting " + dart.str(count) + " retries", errors);
    }
    static onReviveFailed(errors) {
      return new utils.RetryError.__("Received an error after attempting to retry.", errors);
    }
    toString() {
      return this.message;
    }
  };
  (utils.RetryError.__ = function(message, errors) {
    this[message$] = message;
    this[errors$] = errors;
    utils.RetryError.__proto__.new.call(this);
    ;
  }).prototype = utils.RetryError.prototype;
  dart.addTypeTests(utils.RetryError);
  dart.setLibraryUri(utils.RetryError, "package:rxdart/src/streams/utils.dart");
  dart.setFieldSignature(utils.RetryError, () => ({
    __proto__: dart.getFields(utils.RetryError.__proto__),
    message: dart.finalFieldType(core.String),
    errors: dart.finalFieldType(core.List$(utils.ErrorAndStacktrace))
  }));
  dart.defineExtensionMethods(utils.RetryError, ['toString']);
  const error$ = dart.privateName(utils, "ErrorAndStacktrace.error");
  const stackTrace$ = dart.privateName(utils, "ErrorAndStacktrace.stackTrace");
  utils.ErrorAndStacktrace = class ErrorAndStacktrace extends core.Object {
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stackTrace() {
      return this[stackTrace$];
    }
    set stackTrace(value) {
      super.stackTrace = value;
    }
    toString() {
      return "ErrorAndStacktrace{error: " + dart.str(this.error) + ", stacktrace: " + dart.str(this.stackTrace) + "}";
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || utils.ErrorAndStacktrace.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.error, other.error) && dart.equals(this.stackTrace, other.stackTrace);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stackTrace))) >>> 0;
    }
  };
  (utils.ErrorAndStacktrace.new = function(error, stackTrace) {
    this[error$] = error;
    this[stackTrace$] = stackTrace;
    ;
  }).prototype = utils.ErrorAndStacktrace.prototype;
  dart.addTypeTests(utils.ErrorAndStacktrace);
  dart.setMethodSignature(utils.ErrorAndStacktrace, () => ({
    __proto__: dart.getMethods(utils.ErrorAndStacktrace.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(utils.ErrorAndStacktrace, "package:rxdart/src/streams/utils.dart");
  dart.setFieldSignature(utils.ErrorAndStacktrace, () => ({
    __proto__: dart.getFields(utils.ErrorAndStacktrace.__proto__),
    error: dart.finalFieldType(dart.dynamic),
    stackTrace: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(utils.ErrorAndStacktrace, ['toString', '_equals']);
  dart.defineExtensionAccessors(utils.ErrorAndStacktrace, ['hashCode']);
  const _name$ = dart.privateName(notification, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  notification.Kind = class Kind extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (notification.Kind.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = notification.Kind.prototype;
  dart.addTypeTests(notification.Kind);
  dart.setLibraryUri(notification.Kind, "package:rxdart/src/utils/notification.dart");
  dart.setFieldSignature(notification.Kind, () => ({
    __proto__: dart.getFields(notification.Kind.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(notification.Kind, ['toString']);
  notification.Kind.OnData = C0 || CT.C0;
  notification.Kind.OnDone = C1 || CT.C1;
  notification.Kind.OnError = C2 || CT.C2;
  notification.Kind.values = C3 || CT.C3;
  const _is_Notification_default = Symbol('_is_Notification_default');
  const kind$ = dart.privateName(notification, "Notification.kind");
  const value$ = dart.privateName(notification, "Notification.value");
  const error$0 = dart.privateName(notification, "Notification.error");
  const stackTrace$0 = dart.privateName(notification, "Notification.stackTrace");
  notification.Notification$ = dart.generic(T => {
    class Notification extends core.Object {
      get kind() {
        return this[kind$];
      }
      set kind(value) {
        super.kind = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get error() {
        return this[error$0];
      }
      set error(value) {
        super.error = value;
      }
      get stackTrace() {
        return this[stackTrace$0];
      }
      set stackTrace(value) {
        super.stackTrace = value;
      }
      static onData(value) {
        return new (notification.Notification$(T)).new(notification.Kind.OnData, value, null, null);
      }
      static onDone() {
        return new (notification.Notification$(T)).new(notification.Kind.OnDone, null, null, null);
      }
      static onError(error, stackTrace) {
        return new (notification.Notification$(T)).new(notification.Kind.OnError, null, error, stackTrace);
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return notification.Notification.is(other) && dart.equals(this.kind, other.kind) && dart.equals(this.error, other.error) && dart.equals(this.stackTrace, other.stackTrace) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.kind)) ^ dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stackTrace)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "Notification{kind: " + dart.str(this.kind) + ", value: " + dart.str(this.value) + ", error: " + dart.str(this.error) + ", stackTrace: " + dart.str(this.stackTrace) + "}";
      }
      get isOnData() {
        return dart.equals(this.kind, notification.Kind.OnData);
      }
      get isOnDone() {
        return dart.equals(this.kind, notification.Kind.OnDone);
      }
      get isOnError() {
        return dart.equals(this.kind, notification.Kind.OnError);
      }
    }
    (Notification.new = function(kind, value, error, stackTrace) {
      this[kind$] = kind;
      this[value$] = value;
      this[error$0] = error;
      this[stackTrace$0] = stackTrace;
      ;
    }).prototype = Notification.prototype;
    dart.addTypeTests(Notification);
    Notification.prototype[_is_Notification_default] = true;
    dart.setMethodSignature(Notification, () => ({
      __proto__: dart.getMethods(Notification.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(Notification, () => ({
      __proto__: dart.getGetters(Notification.__proto__),
      isOnData: core.bool,
      isOnDone: core.bool,
      isOnError: core.bool
    }));
    dart.setLibraryUri(Notification, "package:rxdart/src/utils/notification.dart");
    dart.setFieldSignature(Notification, () => ({
      __proto__: dart.getFields(Notification.__proto__),
      kind: dart.finalFieldType(notification.Kind),
      value: dart.finalFieldType(T),
      error: dart.finalFieldType(dart.dynamic),
      stackTrace: dart.finalFieldType(core.StackTrace)
    }));
    dart.defineExtensionMethods(Notification, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Notification, ['hashCode']);
    return Notification;
  });
  notification.Notification = notification.Notification$();
  dart.addTypeTests(notification.Notification, _is_Notification_default);
  const _controller$ = dart.privateName(never, "_controller");
  const _is_NeverStream_default = Symbol('_is_NeverStream_default');
  never.NeverStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class NeverStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (NeverStream.new = function() {
      this[_controller$] = StreamControllerOfT().new();
      NeverStream.__proto__.new.call(this);
      ;
    }).prototype = NeverStream.prototype;
    dart.addTypeTests(NeverStream);
    NeverStream.prototype[_is_NeverStream_default] = true;
    dart.setMethodSignature(NeverStream, () => ({
      __proto__: dart.getMethods(NeverStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(NeverStream, "package:rxdart/src/streams/never.dart");
    dart.setFieldSignature(NeverStream, () => ({
      __proto__: dart.getFields(NeverStream.__proto__),
      [_controller$]: dart.fieldType(async.StreamController$(T))
    }));
    return NeverStream;
  });
  never.NeverStream = never.NeverStream$();
  dart.addTypeTests(never.NeverStream, _is_NeverStream_default);
  const _isReusable = dart.privateName(defer, "_isReusable");
  const _factory = dart.privateName(defer, "_factory");
  const _is_DeferStream_default = Symbol('_is_DeferStream_default');
  defer.DeferStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    let VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(VoidToStreamOfT(), [])))();
    class DeferStream extends async.Stream$(T) {
      get isBroadcast() {
        return this[_isReusable];
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_factory]().listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (DeferStream.new = function(streamFactory, opts) {
      let reusable = opts && 'reusable' in opts ? opts.reusable : false;
      this[_isReusable] = reusable;
      this[_factory] = dart.test(reusable) ? streamFactory : dart.fn(() => {
        let stream = null;
        return dart.fn(() => {
          let t1;
          t1 = stream;
          return t1 == null ? stream = streamFactory() : t1;
        }, VoidToStreamOfT());
      }, VoidToFn())();
      DeferStream.__proto__.new.call(this);
      ;
    }).prototype = DeferStream.prototype;
    dart.addTypeTests(DeferStream);
    DeferStream.prototype[_is_DeferStream_default] = true;
    dart.setMethodSignature(DeferStream, () => ({
      __proto__: dart.getMethods(DeferStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(DeferStream, "package:rxdart/src/streams/defer.dart");
    dart.setFieldSignature(DeferStream, () => ({
      __proto__: dart.getFields(DeferStream.__proto__),
      [_factory]: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      [_isReusable]: dart.finalFieldType(core.bool)
    }));
    return DeferStream;
  });
  defer.DeferStream = defer.DeferStream$();
  dart.addTypeTests(defer.DeferStream, _is_DeferStream_default);
  const _controller$0 = dart.privateName(timer, "_controller");
  const _is_TimerStream_default = Symbol('_is_TimerStream_default');
  timer.TimerStream$ = dart.generic(T => {
    class TimerStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$0].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, value, duration) {
        if (duration == null) {
          dart.throw(new core.ArgumentError.new("duration cannot be null"));
        }
        let subscription = null;
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            subscription = async.Stream$(T).fromFuture(async.Future$(T).delayed(duration, dart.fn(() => value, dart.fnType(T, [])))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                if (!dart.test(controller.isClosed)) {
                  controller.close();
                }
              }, VoidToNull())});
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        return controller;
      }
    }
    (TimerStream.new = function(value, duration) {
      this[_controller$0] = timer.TimerStream._buildController(T, value, duration);
      TimerStream.__proto__.new.call(this);
      ;
    }).prototype = TimerStream.prototype;
    dart.addTypeTests(TimerStream);
    TimerStream.prototype[_is_TimerStream_default] = true;
    dart.setMethodSignature(TimerStream, () => ({
      __proto__: dart.getMethods(TimerStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(TimerStream, "package:rxdart/src/streams/timer.dart");
    dart.setFieldSignature(TimerStream, () => ({
      __proto__: dart.getFields(TimerStream.__proto__),
      [_controller$0]: dart.finalFieldType(async.StreamController$(T))
    }));
    return TimerStream;
  });
  timer.TimerStream = timer.TimerStream$();
  dart.addTypeTests(timer.TimerStream, _is_TimerStream_default);
  const _transformer = dart.privateName(materialize, "_transformer");
  const _is_MaterializeStreamTransformer_default = Symbol('_is_MaterializeStreamTransformer_default');
  materialize.MaterializeStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class MaterializeStreamTransformer extends async.StreamTransformerBase$(T, notification.Notification$(T)) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer].bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, notification.Notification$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(notification.Notification$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  controller.add(notification.Notification$(T).onData(value));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.fn((e, s) => {
                  controller.add(notification.Notification$(T).onError(e, s));
                }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
                  controller.add(notification.Notification$(T).onDone());
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              subscription.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(notification.Notification$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (MaterializeStreamTransformer.new = function() {
      this[_transformer] = materialize.MaterializeStreamTransformer._buildTransformer(T);
      MaterializeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = MaterializeStreamTransformer.prototype;
    dart.addTypeTests(MaterializeStreamTransformer);
    MaterializeStreamTransformer.prototype[_is_MaterializeStreamTransformer_default] = true;
    dart.setMethodSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getMethods(MaterializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(notification.Notification$(T)), [core.Object])
    }));
    dart.setLibraryUri(MaterializeStreamTransformer, "package:rxdart/src/transformers/materialize.dart");
    dart.setFieldSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getFields(MaterializeStreamTransformer.__proto__),
      [_transformer]: dart.finalFieldType(async.StreamTransformer$(T, notification.Notification$(T)))
    }));
    return MaterializeStreamTransformer;
  });
  materialize.MaterializeStreamTransformer = materialize.MaterializeStreamTransformer$();
  dart.addTypeTests(materialize.MaterializeStreamTransformer, _is_MaterializeStreamTransformer_default);
  const _repeatStep = dart.privateName(repeat, "_repeatStep");
  const _controller$1 = dart.privateName(repeat, "_controller");
  const _subscription = dart.privateName(repeat, "_subscription");
  const _maybeRepeatNext = dart.privateName(repeat, "_maybeRepeatNext");
  const _repeatNext = dart.privateName(repeat, "_repeatNext");
  const _is_RepeatStream_default = Symbol('_is_RepeatStream_default');
  const streamFactory$ = dart.privateName(repeat, "RepeatStream.streamFactory");
  const count$ = dart.privateName(repeat, "RepeatStream.count");
  repeat.RepeatStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class RepeatStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get count() {
        return this[count$];
      }
      set count(value) {
        super.count = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        this[_controller$1] == null ? this[_controller$1] = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, _maybeRepeatNext), onPause: dart.fn((resumeSignal = null) => this[_subscription].pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => this[_subscription].resume(), VoidTovoid()), onCancel: dart.fn(() => {
            let t2;
            t2 = this[_subscription];
            return t2 == null ? null : t2.cancel();
          }, VoidToFuture())}) : null;
        return this[_controller$1].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      [_repeatNext]() {
        let t2;
        const onDone = () => {
          let t2;
          t2 = this[_subscription];
          t2 == null ? null : t2.cancel();
          this[_maybeRepeatNext]();
        };
        dart.fn(onDone, VoidTovoid());
        try {
          this[_subscription] = this.streamFactory((t2 = this[_repeatStep], this[_repeatStep] = dart.notNull(t2) + 1, t2)).listen(dart.bind(this[_controller$1], 'add'), {onError: dart.bind(this[_controller$1], 'addError'), onDone: onDone, cancelOnError: false});
        } catch (e$) {
          let e = dart.getThrown(e$);
          let s = dart.stackTrace(e$);
          this[_controller$1].addError(e, s);
        }
      }
      [_maybeRepeatNext]() {
        if (this[_repeatStep] == this.count) {
          this[_controller$1].close();
        } else {
          this[_repeatNext]();
        }
      }
    }
    (RepeatStream.new = function(streamFactory, count = null) {
      this[_repeatStep] = 0;
      this[_controller$1] = null;
      this[_subscription] = null;
      this[streamFactory$] = streamFactory;
      this[count$] = count;
      RepeatStream.__proto__.new.call(this);
      ;
    }).prototype = RepeatStream.prototype;
    dart.addTypeTests(RepeatStream);
    RepeatStream.prototype[_is_RepeatStream_default] = true;
    dart.setMethodSignature(RepeatStream, () => ({
      __proto__: dart.getMethods(RepeatStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {}),
      [_repeatNext]: dart.fnType(dart.void, []),
      [_maybeRepeatNext]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(RepeatStream, "package:rxdart/src/streams/repeat.dart");
    dart.setFieldSignature(RepeatStream, () => ({
      __proto__: dart.getFields(RepeatStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [core.int])),
      count: dart.finalFieldType(core.int),
      [_repeatStep]: dart.fieldType(core.int),
      [_controller$1]: dart.fieldType(async.StreamController$(T)),
      [_subscription]: dart.fieldType(async.StreamSubscription$(T))
    }));
    return RepeatStream;
  });
  repeat.RepeatStream = repeat.RepeatStream$();
  dart.addTypeTests(repeat.RepeatStream, _is_RepeatStream_default);
  const _is_ZipStream_default = Symbol('_is_ZipStream_default');
  zip.ZipStream$ = dart.generic((T, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class ZipStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (zip.ZipStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static zip2(A, B, R, streamOne, streamTwo, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static zip3(A, B, C, R, streamA, streamB, streamC, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static zip4(A, B, C, D, R, streamA, streamB, streamC, streamD, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static zip5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static zip6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static zip7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static zip8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static zip9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, zipper) {
        {
          let controller = null;
          let len = streams[$length];
          let subscriptions = null;
          let pendingSubscriptions = null;
          controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
              try {
                let completeCurrent = null;
                let window = new (zip._Window$(T)).new(len);
                let index = 0;
                let next = dart.fn(() => {
                  let t3;
                  t3 = completeCurrent;
                  t3 == null ? null : t3.complete();
                  completeCurrent = async.Completer$(core.List$(T)).new();
                  pendingSubscriptions = subscriptions[$toList]();
                }, VoidToNull());
                let doUpdate = dart.fn(index => dart.fn(value => {
                  let t4;
                  window.onValue(index, value);
                  if (dart.test(window.isComplete)) {
                    try {
                      controller.add(zipper(window.flush()));
                      next();
                    } catch (e$) {
                      let e = dart.getThrown(e$);
                      let s = dart.stackTrace(e$);
                      controller.addError(e, s);
                    }
                  } else {
                    let subscription = (t4 = subscriptions[$_get](index), t4.pause(completeCurrent.future), t4);
                    pendingSubscriptions[$remove](subscription);
                  }
                }, dart.fnType(core.Null, [T])), dart.fnType(dart.fnType(core.Null, [T]), [core.int]));
                subscriptions = streams[$map](async.StreamSubscription$(T), dart.fn(stream => {
                  let t4;
                  return stream.listen(doUpdate((t4 = index, index = t4 + 1, t4)), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close')});
                }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)])))[$toList]({growable: false});
                next();
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => pendingSubscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), FutureTovoid()), onResume: dart.fn(() => pendingSubscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
          return controller;
        }
      }
    }
    (ZipStream.new = function(streams, zipper) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null", "org-dartlang-app:///packages/rxdart/src/streams/zip.dart", 47, 16, "streams != null && streams.every((s) => s != null)");
      if (!(zipper != null)) dart.assertFailed("must provide a zipper function", "org-dartlang-app:///packages/rxdart/src/streams/zip.dart", 49, 16, "zipper != null");
      ZipStream.__proto__.new.call(this, zip.ZipStream._buildController(T, R, streams, zipper).stream);
      ;
    }).prototype = ZipStream.prototype;
    dart.addTypeTests(ZipStream);
    ZipStream.prototype[_is_ZipStream_default] = true;
    dart.setLibraryUri(ZipStream, "package:rxdart/src/streams/zip.dart");
    return ZipStream;
  });
  zip.ZipStream = zip.ZipStream$();
  dart.addTypeTests(zip.ZipStream, _is_ZipStream_default);
  const _valuesReceived = dart.privateName(zip, "_valuesReceived");
  const _values = dart.privateName(zip, "_values");
  const _is__Window_default = Symbol('_is__Window_default');
  zip._Window$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class _Window extends core.Object {
      get isComplete() {
        return this[_valuesReceived] == this.size;
      }
      onValue(index, value) {
        T._check(value);
        this[_values][$_set](index, value);
        this[_valuesReceived] = dart.notNull(this[_valuesReceived]) + 1;
      }
      flush() {
        this[_valuesReceived] = 0;
        return ListOfT().unmodifiable(this[_values]);
      }
    }
    (_Window.new = function(size) {
      this[_valuesReceived] = 0;
      this.size = size;
      this[_values] = ListOfT().new(size);
      ;
    }).prototype = _Window.prototype;
    dart.addTypeTests(_Window);
    _Window.prototype[_is__Window_default] = true;
    dart.setMethodSignature(_Window, () => ({
      __proto__: dart.getMethods(_Window.__proto__),
      onValue: dart.fnType(dart.void, [core.int, core.Object]),
      flush: dart.fnType(core.List$(T), [])
    }));
    dart.setGetterSignature(_Window, () => ({
      __proto__: dart.getGetters(_Window.__proto__),
      isComplete: core.bool
    }));
    dart.setLibraryUri(_Window, "package:rxdart/src/streams/zip.dart");
    dart.setFieldSignature(_Window, () => ({
      __proto__: dart.getFields(_Window.__proto__),
      size: dart.finalFieldType(core.int),
      [_values]: dart.finalFieldType(core.List$(T)),
      [_valuesReceived]: dart.fieldType(core.int)
    }));
    return _Window;
  });
  zip._Window = zip._Window$();
  dart.addTypeTests(zip._Window, _is__Window_default);
  const _controller$2 = dart.privateName(sequence_equal, "_controller");
  const _is_SequenceEqualStream_default = Symbol('_is_SequenceEqualStream_default');
  sequence_equal.SequenceEqualStream$ = dart.generic((S, T) => {
    class SequenceEqualStream extends async.Stream$(core.bool) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$2].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(S, T, stream, other, equals) {
        let t5;
        if (stream == null) {
          dart.throw(new core.ArgumentError.notNull("stream"));
        }
        if (other == null) {
          dart.throw(new core.ArgumentError.notNull("other"));
        }
        let doCompare = (t5 = equals, t5 == null ? dart.fn((s, t) => dart.equals(s, t), dart.fnType(core.bool, [S, T])) : t5);
        let controller = null;
        let subscription = null;
        controller = StreamControllerOfbool().new({sync: true, onListen: dart.fn(() => {
            let emitAndClose = dart.fn((value = true) => {
              let t5;
              t5 = controller;
              t5.add(value);
              t5.close();
              return t5;
            }, boolToStreamControllerOfbool());
            subscription = zip.ZipStream.zip2(notification.Notification$(S), notification.Notification$(T), core.bool, stream.transform(notification.Notification$(S), new (materialize.MaterializeStreamTransformer$(S)).new()), other.transform(notification.Notification$(T), new (materialize.MaterializeStreamTransformer$(T)).new()), dart.fn((s, t) => {
              let t5, t5$;
              return dart.equals(s.kind, t.kind) && (t5 = s.error, t5 == null ? null : dart.toString(t5)) == (t5$ = t.error, t5$ == null ? null : dart.toString(t5$)) && dart.test(doCompare(s.value, t.value));
            }, dart.fnType(core.bool, [notification.Notification$(S), notification.Notification$(T)]))).where(dart.fn(isEqual => !dart.test(isEqual), boolTobool())).listen(emitAndClose, {onError: dart.bind(controller, 'addError'), onDone: emitAndClose});
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        return controller;
      }
    }
    (SequenceEqualStream.new = function(stream, other, opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      this[_controller$2] = sequence_equal.SequenceEqualStream._buildController(S, T, stream, other, equals);
      SequenceEqualStream.__proto__.new.call(this);
      ;
    }).prototype = SequenceEqualStream.prototype;
    dart.addTypeTests(SequenceEqualStream);
    SequenceEqualStream.prototype[_is_SequenceEqualStream_default] = true;
    dart.setMethodSignature(SequenceEqualStream, () => ({
      __proto__: dart.getMethods(SequenceEqualStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(core.bool), [dart.fnType(dart.void, [core.bool])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(SequenceEqualStream, "package:rxdart/src/streams/sequence_equal.dart");
    dart.setFieldSignature(SequenceEqualStream, () => ({
      __proto__: dart.getFields(SequenceEqualStream.__proto__),
      [_controller$2]: dart.finalFieldType(async.StreamController$(core.bool))
    }));
    return SequenceEqualStream;
  });
  sequence_equal.SequenceEqualStream = sequence_equal.SequenceEqualStream$();
  dart.addTypeTests(sequence_equal.SequenceEqualStream, _is_SequenceEqualStream_default);
  const _stream = dart.privateName(range, "_stream");
  range.RangeStream = class RangeStream extends async.Stream$(core.int) {
    listen(onData, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      return this[_stream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
    }
    static _buildStream(startInclusive, endInclusive) {
      let length = (dart.notNull(endInclusive) - dart.notNull(startInclusive))[$abs]() + 1;
      let nextValue = dart.fn(index => dart.notNull(startInclusive) > dart.notNull(endInclusive) ? dart.notNull(startInclusive) - dart.notNull(index) : dart.notNull(startInclusive) + dart.notNull(index), intToint());
      return StreamOfint().fromIterable(ListOfint().generate(length, nextValue));
    }
  };
  (range.RangeStream.new = function(startInclusive, endInclusive) {
    this[_stream] = range.RangeStream._buildStream(startInclusive, endInclusive);
    range.RangeStream.__proto__.new.call(this);
    ;
  }).prototype = range.RangeStream.prototype;
  dart.addTypeTests(range.RangeStream);
  dart.setMethodSignature(range.RangeStream, () => ({
    __proto__: dart.getMethods(range.RangeStream.__proto__),
    listen: dart.fnType(async.StreamSubscription$(core.int), [dart.fnType(dart.void, [core.int])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
  }));
  dart.setLibraryUri(range.RangeStream, "package:rxdart/src/streams/range.dart");
  dart.setFieldSignature(range.RangeStream, () => ({
    __proto__: dart.getFields(range.RangeStream.__proto__),
    [_stream]: dart.finalFieldType(async.Stream$(core.int))
  }));
  const _controller$3 = dart.privateName(concat_eager, "_controller");
  const _is_ConcatEagerStream_default = Symbol('_is_ConcatEagerStream_default');
  concat_eager.ConcatEagerStream$ = dart.generic(T => {
    class ConcatEagerStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$3].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("at least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let len = streams[$length];
        let completeEvents = ListOfCompleter().generate(len, dart.fn(_ => async.Completer.new(), intToCompleter()));
        let subscriptions = null;
        let controller = null;
        let activeSubscription = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let index = -1;
            let completed = 0;
            let onDone = dart.fn(index => {
              let completer = completeEvents[$_get](index);
              return dart.fn(() => {
                completer.complete();
                if ((completed = completed + 1) === len) {
                  controller.close();
                } else {
                  activeSubscription = subscriptions[$_get](dart.notNull(index) + 1);
                }
              }, VoidToNull());
            }, intToFn());
            let createSubscription = dart.fn(stream => {
              index = index + 1;
              let subscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone(index)});
              if (index > 0) subscription.pause(completeEvents[$_get](index - 1).future);
              return subscription;
            }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)]));
            subscriptions = streams[$map](async.StreamSubscription$(T), createSubscription)[$toList]({growable: false});
            activeSubscription = subscriptions[$first];
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => activeSubscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => activeSubscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (ConcatEagerStream.new = function(streams) {
      this[_controller$3] = concat_eager.ConcatEagerStream._buildController(T, streams);
      ConcatEagerStream.__proto__.new.call(this);
      ;
    }).prototype = ConcatEagerStream.prototype;
    dart.addTypeTests(ConcatEagerStream);
    ConcatEagerStream.prototype[_is_ConcatEagerStream_default] = true;
    dart.setMethodSignature(ConcatEagerStream, () => ({
      __proto__: dart.getMethods(ConcatEagerStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(ConcatEagerStream, "package:rxdart/src/streams/concat_eager.dart");
    dart.setFieldSignature(ConcatEagerStream, () => ({
      __proto__: dart.getFields(ConcatEagerStream.__proto__),
      [_controller$3]: dart.finalFieldType(async.StreamController$(T))
    }));
    return ConcatEagerStream;
  });
  concat_eager.ConcatEagerStream = concat_eager.ConcatEagerStream$();
  dart.addTypeTests(concat_eager.ConcatEagerStream, _is_ConcatEagerStream_default);
  const _controller$4 = dart.privateName(concat, "_controller");
  const _is_ConcatStream_default = Symbol('_is_ConcatStream_default');
  concat.ConcatStream$ = dart.generic(T => {
    class ConcatStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$4].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("Streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("At least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let controller = null;
        let subscription = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let len = streams[$length];
            let index = 0;
            function moveNext() {
              let t5;
              let stream = streams[$elementAt](index);
              t5 = subscription;
              t5 == null ? null : t5.cancel();
              subscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  index = index + 1;
                  if (index === len) {
                    controller.close();
                  } else {
                    moveNext();
                  }
                }, VoidToNull())});
            }
            dart.fn(moveNext, VoidTovoid());
            moveNext();
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
            let t5;
            t5 = subscription;
            return t5 == null ? null : t5.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => {
            let t5;
            t5 = subscription;
            return t5 == null ? null : t5.resume();
          }, VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        return controller;
      }
    }
    (ConcatStream.new = function(streams) {
      this[_controller$4] = concat.ConcatStream._buildController(T, streams);
      ConcatStream.__proto__.new.call(this);
      ;
    }).prototype = ConcatStream.prototype;
    dart.addTypeTests(ConcatStream);
    ConcatStream.prototype[_is_ConcatStream_default] = true;
    dart.setMethodSignature(ConcatStream, () => ({
      __proto__: dart.getMethods(ConcatStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(ConcatStream, "package:rxdart/src/streams/concat.dart");
    dart.setFieldSignature(ConcatStream, () => ({
      __proto__: dart.getFields(ConcatStream.__proto__),
      [_controller$4]: dart.finalFieldType(async.StreamController$(T))
    }));
    return ConcatStream;
  });
  concat.ConcatStream = concat.ConcatStream$();
  dart.addTypeTests(concat.ConcatStream, _is_ConcatStream_default);
  const _controller$5 = dart.privateName(switch_latest, "_controller");
  const _is_SwitchLatestStream_default = Symbol('_is_SwitchLatestStream_default');
  switch_latest.SwitchLatestStream$ = dart.generic(T => {
    class SwitchLatestStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$5].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        let controller = null;
        let subscription = null;
        let otherSubscription = null;
        let leftClosed = false;
        let rightClosed = false;
        let hasMainEvent = false;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let closeLeft = dart.fn(() => {
              leftClosed = true;
              if (rightClosed || !hasMainEvent) controller.close();
            }, VoidToNull());
            let closeRight = dart.fn(() => {
              rightClosed = true;
              if (leftClosed) controller.close();
            }, VoidToNull());
            subscription = streams.listen(dart.fn(stream => {
              let t5;
              try {
                t5 = otherSubscription;
                t5 == null ? null : t5.cancel();
                hasMainEvent = true;
                otherSubscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: closeRight});
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, dart.fnType(core.Null, [async.Stream$(T)])), {onError: dart.bind(controller, 'addError'), onDone: closeLeft});
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
            let t6;
            subscription.pause(resumeSignal);
            t6 = otherSubscription;
            t6 == null ? null : t6.pause(resumeSignal);
          }, FutureToNull()), onResume: dart.fn(() => {
            let t6;
            subscription.resume();
            t6 = otherSubscription;
            t6 == null ? null : t6.resume();
          }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
            yield subscription.cancel();
            if (hasMainEvent) yield otherSubscription.cancel();
          }), VoidToFutureOfNull())});
        return controller;
      }
    }
    (SwitchLatestStream.new = function(streams) {
      this[_controller$5] = switch_latest.SwitchLatestStream._buildController(T, streams);
      SwitchLatestStream.__proto__.new.call(this);
      ;
    }).prototype = SwitchLatestStream.prototype;
    dart.addTypeTests(SwitchLatestStream);
    SwitchLatestStream.prototype[_is_SwitchLatestStream_default] = true;
    dart.setMethodSignature(SwitchLatestStream, () => ({
      __proto__: dart.getMethods(SwitchLatestStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(SwitchLatestStream, "package:rxdart/src/streams/switch_latest.dart");
    dart.setFieldSignature(SwitchLatestStream, () => ({
      __proto__: dart.getFields(SwitchLatestStream.__proto__),
      [_controller$5]: dart.fieldType(async.StreamController$(T))
    }));
    return SwitchLatestStream;
  });
  switch_latest.SwitchLatestStream = switch_latest.SwitchLatestStream$();
  dart.addTypeTests(switch_latest.SwitchLatestStream, _is_SwitchLatestStream_default);
  const _controller$6 = dart.privateName(merge, "_controller");
  const _is_MergeStream_default = Symbol('_is_MergeStream_default');
  merge.MergeStream$ = dart.generic(T => {
    class MergeStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_controller$6].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("at least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let len = streams[$length];
        let subscriptions = core.List$(async.StreamSubscription$(T)).new(len);
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let completed = 0;
            let onDone = dart.fn(() => {
              completed = completed + 1;
              if (completed === len) controller.close();
            }, VoidToNull());
            for (let i = 0; i < dart.notNull(len); i = i + 1) {
              let stream = streams[$elementAt](i);
              subscriptions[$_set](i, stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone}));
            }
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (MergeStream.new = function(streams) {
      this[_controller$6] = merge.MergeStream._buildController(T, streams);
      MergeStream.__proto__.new.call(this);
      ;
    }).prototype = MergeStream.prototype;
    dart.addTypeTests(MergeStream);
    MergeStream.prototype[_is_MergeStream_default] = true;
    dart.setMethodSignature(MergeStream, () => ({
      __proto__: dart.getMethods(MergeStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(MergeStream, "package:rxdart/src/streams/merge.dart");
    dart.setFieldSignature(MergeStream, () => ({
      __proto__: dart.getFields(MergeStream.__proto__),
      [_controller$6]: dart.finalFieldType(async.StreamController$(T))
    }));
    return MergeStream;
  });
  merge.MergeStream = merge.MergeStream$();
  dart.addTypeTests(merge.MergeStream, _is_MergeStream_default);
  const _retryStep = dart.privateName(retry, "_retryStep");
  const _controller$7 = dart.privateName(retry, "_controller");
  const _subscription$ = dart.privateName(retry, "_subscription");
  const _errors = dart.privateName(retry, "_errors");
  const _is_RetryStream_default = Symbol('_is_RetryStream_default');
  const streamFactory$0 = dart.privateName(retry, "RetryStream.streamFactory");
  const count$0 = dart.privateName(retry, "RetryStream.count");
  retry.RetryStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class RetryStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$0];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get count() {
        return this[count$0];
      }
      set count(value) {
        this[count$0] = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        let retry = null;
        let combinedErrors = dart.fn(() => utils.RetryError.withCount(this.count, this[_errors]), VoidToRetryError());
        retry = dart.fn((_ = null) => {
          this[_subscription$] = this.streamFactory().listen(dart.bind(this[_controller$7], 'add'), {onError: dart.fn((e, s) => {
              let t6;
              this[_subscription$].cancel();
              this[_errors][$add](new utils.ErrorAndStacktrace.new(e, s));
              if (this.count == this[_retryStep]) {
                t6 = this[_controller$7];
                t6.addError(combinedErrors());
                t6.close();
                t6;
              } else {
                retry(this[_retryStep] = dart.notNull(this[_retryStep]) + 1);
              }
            }, dynamicAndStackTraceToNull()), onDone: dart.bind(this[_controller$7], 'close'), cancelOnError: false});
        }, intToNull$());
        this[_controller$7] == null ? this[_controller$7] = StreamControllerOfT().new({sync: true, onListen: retry, onPause: dart.fn((resumeSignal = null) => this[_subscription$].pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => this[_subscription$].resume(), VoidTovoid()), onCancel: dart.fn(() => this[_subscription$].cancel(), VoidToFuture())}) : null;
        return this[_controller$7].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (RetryStream.new = function(streamFactory, count = null) {
      this[_retryStep] = 0;
      this[_controller$7] = null;
      this[_subscription$] = null;
      this[_errors] = JSArrayOfErrorAndStacktrace().of([]);
      this[streamFactory$0] = streamFactory;
      this[count$0] = count;
      RetryStream.__proto__.new.call(this);
      ;
    }).prototype = RetryStream.prototype;
    dart.addTypeTests(RetryStream);
    RetryStream.prototype[_is_RetryStream_default] = true;
    dart.setMethodSignature(RetryStream, () => ({
      __proto__: dart.getMethods(RetryStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(RetryStream, "package:rxdart/src/streams/retry.dart");
    dart.setFieldSignature(RetryStream, () => ({
      __proto__: dart.getFields(RetryStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      count: dart.fieldType(core.int),
      [_retryStep]: dart.fieldType(core.int),
      [_controller$7]: dart.fieldType(async.StreamController$(T)),
      [_subscription$]: dart.fieldType(async.StreamSubscription$(T)),
      [_errors]: dart.fieldType(core.List$(utils.ErrorAndStacktrace))
    }));
    return RetryStream;
  });
  retry.RetryStream = retry.RetryStream$();
  dart.addTypeTests(retry.RetryStream, _is_RetryStream_default);
  const _controller$8 = dart.privateName(retry_when, "_controller");
  const _subscription$0 = dart.privateName(retry_when, "_subscription");
  const _errors$ = dart.privateName(retry_when, "_errors");
  const _retry = dart.privateName(retry_when, "_retry");
  const _is_RetryWhenStream_default = Symbol('_is_RetryWhenStream_default');
  const streamFactory$1 = dart.privateName(retry_when, "RetryWhenStream.streamFactory");
  const retryWhenFactory$ = dart.privateName(retry_when, "RetryWhenStream.retryWhenFactory");
  retry_when.RetryWhenStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class RetryWhenStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$1];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get retryWhenFactory() {
        return this[retryWhenFactory$];
      }
      set retryWhenFactory(value) {
        super.retryWhenFactory = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        this[_controller$8] == null ? this[_controller$8] = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, _retry), onPause: dart.fn((resumeSignal = null) => this[_subscription$0].pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => this[_subscription$0].resume(), VoidTovoid()), onCancel: dart.fn(() => this[_subscription$0].cancel(), VoidToFuture())}) : null;
        return this[_controller$8].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      [_retry]() {
        this[_subscription$0] = this.streamFactory().listen(dart.bind(this[_controller$8], 'add'), {onError: dart.fn((e, s = null) => {
            this[_subscription$0].cancel();
            let sub = null;
            sub = this.retryWhenFactory(e, s).listen(dart.fn(event => {
              sub.cancel();
              this[_errors$][$add](new utils.ErrorAndStacktrace.new(e, s));
              this[_retry]();
            }, voidToNull()), {onError: dart.fn((e, s = null) => {
                let t7, t6;
                sub.cancel();
                t6 = this[_controller$8];
                t6.addError(utils.RetryError.onReviveFailed((t7 = this[_errors$], t7[$add](new utils.ErrorAndStacktrace.new(e, s)), t7)));
                t6.close();
                t6;
              }, ObjectAndStackTraceToNull())});
          }, ObjectAndStackTraceToNull()), onDone: dart.bind(this[_controller$8], 'close'), cancelOnError: false});
      }
    }
    (RetryWhenStream.new = function(streamFactory, retryWhenFactory) {
      this[_controller$8] = null;
      this[_subscription$0] = null;
      this[_errors$] = JSArrayOfErrorAndStacktrace().of([]);
      this[streamFactory$1] = streamFactory;
      this[retryWhenFactory$] = retryWhenFactory;
      RetryWhenStream.__proto__.new.call(this);
      ;
    }).prototype = RetryWhenStream.prototype;
    dart.addTypeTests(RetryWhenStream);
    RetryWhenStream.prototype[_is_RetryWhenStream_default] = true;
    dart.setMethodSignature(RetryWhenStream, () => ({
      __proto__: dart.getMethods(RetryWhenStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {}),
      [_retry]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(RetryWhenStream, "package:rxdart/src/streams/retry_when.dart");
    dart.setFieldSignature(RetryWhenStream, () => ({
      __proto__: dart.getFields(RetryWhenStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      retryWhenFactory: dart.finalFieldType(dart.fnType(async.Stream$(dart.void), [dart.dynamic, core.StackTrace])),
      [_controller$8]: dart.fieldType(async.StreamController$(T)),
      [_subscription$0]: dart.fieldType(async.StreamSubscription$(T)),
      [_errors$]: dart.fieldType(core.List$(utils.ErrorAndStacktrace))
    }));
    return RetryWhenStream;
  });
  retry_when.RetryWhenStream = retry_when.RetryWhenStream$();
  dart.addTypeTests(retry_when.RetryWhenStream, _is_RetryWhenStream_default);
  const _is_CombineLatestStream_default = Symbol('_is_CombineLatestStream_default');
  combine_latest.CombineLatestStream$ = dart.generic((T, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class CombineLatestStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (combine_latest.CombineLatestStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static combine2(A, B, R, streamOne, streamTwo, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static combine3(A, B, C, R, streamA, streamB, streamC, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static combine4(A, B, C, D, R, streamA, streamB, streamC, streamD, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static combine5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static combine6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static combine7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static combine8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static combine9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, combiner) {
        let len = streams[$length];
        let subscriptions = null;
        let controller = null;
        controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
            let values = core.List$(T).new(len);
            let triggered = 0;
            let completed = 0;
            let index = 0;
            let allHaveEvent = dart.fn(() => triggered === len, VoidTobool());
            let onDone = dart.fn(() => {
              if ((completed = completed + 1) === len) controller.close();
            }, VoidToNull());
            let onUpdate = dart.fn(index => dart.fn(value => {
              let t8, t7, t6;
              t6 = values;
              t7 = index;
              t8 = value;
              t6[$_set](t7, t8);
              return t8;
            }, dart.fnType(T, [T])), dart.fnType(dart.fnType(T, [T]), [core.int]));
            subscriptions = streams[$map](async.StreamSubscription$(T), dart.fn(stream => {
              let t6;
              let onUpdateForStream = onUpdate((t6 = index, index = t6 + 1, t6));
              let hasFirstEvent = false;
              return stream.listen(dart.fn(value => {
                onUpdateForStream(value);
                if (!hasFirstEvent) {
                  hasFirstEvent = true;
                  triggered = triggered + 1;
                }
                if (dart.test(allHaveEvent())) {
                  try {
                    controller.add(combiner(core.List$(T).unmodifiable(values)));
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone});
            }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)])))[$toList]({growable: false});
          }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), StreamSubscriptionTovoid())), FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), StreamSubscriptionTovoid())), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (CombineLatestStream.new = function(streams, combiner) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null", "org-dartlang-app:///packages/rxdart/src/streams/combine_latest.dart", 57, 16, "streams != null && streams.every((s) => s != null)");
      if (!(combiner != null)) dart.assertFailed("must provide a combiner function", "org-dartlang-app:///packages/rxdart/src/streams/combine_latest.dart", 59, 16, "combiner != null");
      CombineLatestStream.__proto__.new.call(this, combine_latest.CombineLatestStream._buildController(T, R, streams, combiner).stream);
      ;
    }).prototype = CombineLatestStream.prototype;
    dart.addTypeTests(CombineLatestStream);
    CombineLatestStream.prototype[_is_CombineLatestStream_default] = true;
    dart.setLibraryUri(CombineLatestStream, "package:rxdart/src/streams/combine_latest.dart");
    return CombineLatestStream;
  });
  combine_latest.CombineLatestStream = combine_latest.CombineLatestStream$();
  dart.addTypeTests(combine_latest.CombineLatestStream, _is_CombineLatestStream_default);
  const _controller$9 = dart.privateName(error, "_controller");
  const _is_ErrorStream_default = Symbol('_is_ErrorStream_default');
  const error$1 = dart.privateName(error, "ErrorStream.error");
  error.ErrorStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class ErrorStream extends async.Stream$(T) {
      get error() {
        return this[error$1];
      }
      set error(value) {
        super.error = value;
      }
      listen(onData, opts) {
        let t7;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        t7 = this[_controller$9];
        t7.addError(this.error);
        t7.close();
        t7;
        return this[_controller$9].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (ErrorStream.new = function(error) {
      this[_controller$9] = StreamControllerOfT().new();
      this[error$1] = error;
      ErrorStream.__proto__.new.call(this);
      ;
    }).prototype = ErrorStream.prototype;
    dart.addTypeTests(ErrorStream);
    ErrorStream.prototype[_is_ErrorStream_default] = true;
    dart.setMethodSignature(ErrorStream, () => ({
      __proto__: dart.getMethods(ErrorStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(ErrorStream, "package:rxdart/src/streams/error.dart");
    dart.setFieldSignature(ErrorStream, () => ({
      __proto__: dart.getFields(ErrorStream.__proto__),
      error: dart.finalFieldType(core.Object),
      [_controller$9]: dart.fieldType(async.StreamController$(T))
    }));
    return ErrorStream;
  });
  error.ErrorStream = error.ErrorStream$();
  dart.addTypeTests(error.ErrorStream, _is_ErrorStream_default);
  const _is_ForkJoinStream_default = Symbol('_is_ForkJoinStream_default');
  fork_join.ForkJoinStream$ = dart.generic((T, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class ForkJoinStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (fork_join.ForkJoinStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static combine2(A, B, R, streamOne, streamTwo, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static combine3(A, B, C, R, streamA, streamB, streamC, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static combine4(A, B, C, D, R, streamA, streamB, streamC, streamD, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static combine5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static combine6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static combine7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static combine8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static combine9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, combiner) {
        let controller = null;
        controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
            let onDone = dart.fn(values => {
              try {
                controller.add(combiner(values));
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
              controller.close();
            }, dart.fnType(core.Null, [core.List$(T)]));
            async.Future.wait(T, streams[$map](async.Future$(T), dart.fn(stream => stream.last, dart.fnType(async.Future$(T), [async.Stream$(T)]))), {eagerError: true, cleanUp: dart.fn(_ => controller.close(), dynamicToFuture())}).then(core.Null, onDone, {onError: dart.bind(controller, 'addError')});
          }, VoidToNull())});
        return controller;
      }
    }
    (ForkJoinStream.new = function(streams, combiner) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null", "org-dartlang-app:///packages/rxdart/src/streams/fork_join.dart", 68, 16, "streams != null && streams.every((s) => s != null)");
      if (!dart.test(streams[$isNotEmpty])) dart.assertFailed("provide at least 1 stream", "org-dartlang-app:///packages/rxdart/src/streams/fork_join.dart", 70, 16, "streams.isNotEmpty");
      if (!(combiner != null)) dart.assertFailed("must provide a combiner function", "org-dartlang-app:///packages/rxdart/src/streams/fork_join.dart", 71, 16, "combiner != null");
      ForkJoinStream.__proto__.new.call(this, fork_join.ForkJoinStream._buildController(T, R, streams, combiner).stream);
      ;
    }).prototype = ForkJoinStream.prototype;
    dart.addTypeTests(ForkJoinStream);
    ForkJoinStream.prototype[_is_ForkJoinStream_default] = true;
    dart.setLibraryUri(ForkJoinStream, "package:rxdart/src/streams/fork_join.dart");
    return ForkJoinStream;
  });
  fork_join.ForkJoinStream = fork_join.ForkJoinStream$();
  dart.addTypeTests(fork_join.ForkJoinStream, _is_ForkJoinStream_default);
  dart.trackLibraries("packages/rxdart/src/streams/combine_latest", {
    "package:rxdart/src/streams/race.dart": race,
    "package:rxdart/src/streams/utils.dart": utils,
    "package:rxdart/src/utils/notification.dart": notification,
    "package:rxdart/src/streams/never.dart": never,
    "package:rxdart/src/streams/defer.dart": defer,
    "package:rxdart/src/streams/timer.dart": timer,
    "package:rxdart/src/transformers/materialize.dart": materialize,
    "package:rxdart/src/streams/repeat.dart": repeat,
    "package:rxdart/src/streams/zip.dart": zip,
    "package:rxdart/src/streams/sequence_equal.dart": sequence_equal,
    "package:rxdart/src/streams/range.dart": range,
    "package:rxdart/src/streams/concat_eager.dart": concat_eager,
    "package:rxdart/src/streams/concat.dart": concat,
    "package:rxdart/src/streams/switch_latest.dart": switch_latest,
    "package:rxdart/src/streams/merge.dart": merge,
    "package:rxdart/src/streams/retry.dart": retry,
    "package:rxdart/src/streams/retry_when.dart": retry_when,
    "package:rxdart/src/streams/combine_latest.dart": combine_latest,
    "package:rxdart/src/streams/error.dart": error,
    "package:rxdart/src/streams/fork_join.dart": fork_join
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["race.dart","utils.dart","../utils/notification.dart","never.dart","defer.dart","timer.dart","../transformers/materialize.dart","repeat.dart","zip.dart","sequence_equal.dart","range.dart","concat_eager.dart","concat.dart","switch_latest.dart","merge.dart","retry.dart","retry_when.dart","combine_latest.dart","error.dart","fork_join.dart"],"names":[],"mappings":"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","file":"combine_latest.ddc.js"}');
  // Exports:
  return {
    src__streams__race: race,
    src__streams__utils: utils,
    src__utils__notification: notification,
    src__streams__never: never,
    src__streams__defer: defer,
    src__streams__timer: timer,
    src__transformers__materialize: materialize,
    src__streams__repeat: repeat,
    src__streams__zip: zip,
    src__streams__sequence_equal: sequence_equal,
    src__streams__range: range,
    src__streams__concat_eager: concat_eager,
    src__streams__concat: concat,
    src__streams__switch_latest: switch_latest,
    src__streams__merge: merge,
    src__streams__retry: retry,
    src__streams__retry_when: retry_when,
    src__streams__combine_latest: combine_latest,
    src__streams__error: error,
    src__streams__fork_join: fork_join
  };
});

//# sourceMappingURL=combine_latest.ddc.js.map
