define(['dart_sdk', 'packages/rxdart/src/streams/combine_latest'], function(dart_sdk, packages__rxdart__src__streams__combine_latest) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const collection$ = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const combine_latest = packages__rxdart__src__streams__combine_latest.src__streams__combine_latest;
  const concat = packages__rxdart__src__streams__combine_latest.src__streams__concat;
  const concat_eager = packages__rxdart__src__streams__combine_latest.src__streams__concat_eager;
  const defer = packages__rxdart__src__streams__combine_latest.src__streams__defer;
  const error$ = packages__rxdart__src__streams__combine_latest.src__streams__error;
  const fork_join = packages__rxdart__src__streams__combine_latest.src__streams__fork_join;
  const merge = packages__rxdart__src__streams__combine_latest.src__streams__merge;
  const never = packages__rxdart__src__streams__combine_latest.src__streams__never;
  const race = packages__rxdart__src__streams__combine_latest.src__streams__race;
  const range = packages__rxdart__src__streams__combine_latest.src__streams__range;
  const repeat = packages__rxdart__src__streams__combine_latest.src__streams__repeat;
  const retry = packages__rxdart__src__streams__combine_latest.src__streams__retry;
  const retry_when = packages__rxdart__src__streams__combine_latest.src__streams__retry_when;
  const sequence_equal = packages__rxdart__src__streams__combine_latest.src__streams__sequence_equal;
  const switch_latest = packages__rxdart__src__streams__combine_latest.src__streams__switch_latest;
  const timer = packages__rxdart__src__streams__combine_latest.src__streams__timer;
  const zip = packages__rxdart__src__streams__combine_latest.src__streams__zip;
  const notification = packages__rxdart__src__streams__combine_latest.src__utils__notification;
  const materialize = packages__rxdart__src__streams__combine_latest.src__transformers__materialize;
  const window = Object.create(dart.library);
  const backpressure = Object.create(dart.library);
  const subjects = Object.create(dart.library);
  const replay_subject = Object.create(dart.library);
  const subject = Object.create(dart.library);
  const observable = Object.create(dart.library);
  const transformers = Object.create(dart.library);
  const throttle = Object.create(dart.library);
  const sample = Object.create(dart.library);
  const pairwise = Object.create(dart.library);
  const debounce = Object.create(dart.library);
  const buffer = Object.create(dart.library);
  const type_token = Object.create(dart.library);
  const with_latest_from = Object.create(dart.library);
  const where_type = Object.create(dart.library);
  const timestamp = Object.create(dart.library);
  const time_interval = Object.create(dart.library);
  const take_until = Object.create(dart.library);
  const switch_map = Object.create(dart.library);
  const switch_if_empty = Object.create(dart.library);
  const start_with_many = Object.create(dart.library);
  const start_with = Object.create(dart.library);
  const skip_until = Object.create(dart.library);
  const scan = Object.create(dart.library);
  const on_error_resume = Object.create(dart.library);
  const of_type = Object.create(dart.library);
  const map_to = Object.create(dart.library);
  const interval = Object.create(dart.library);
  const ignore_elements = Object.create(dart.library);
  const group_by = Object.create(dart.library);
  const flat_map = Object.create(dart.library);
  const exhaust_map = Object.create(dart.library);
  const $do = Object.create(dart.library);
  const distinct_unique = Object.create(dart.library);
  const dematerialize = Object.create(dart.library);
  const delay = Object.create(dart.library);
  const default_if_empty = Object.create(dart.library);
  const value_observable = Object.create(dart.library);
  const replay_observable = Object.create(dart.library);
  const connectable_observable = Object.create(dart.library);
  const rxdart = Object.create(dart.library);
  const composite_subscription = Object.create(dart.library);
  const futures = Object.create(dart.library);
  const wrapped_future = Object.create(dart.library);
  const stream_min_future = Object.create(dart.library);
  const stream_max_future = Object.create(dart.library);
  const as_observable_future = Object.create(dart.library);
  const publish_subject = Object.create(dart.library);
  const behavior_subject = Object.create(dart.library);
  const start_with_error = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $length = dartx.length;
  const $toList = dartx.toList;
  const $sublist = dartx.sublist;
  const $last = dartx.last;
  const $addAll = dartx.addAll;
  const $_get = dartx._get;
  const $any = dartx.any;
  const $every = dartx.every;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $map = dartx.map;
  const $where = dartx.where;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $forEach = dartx.forEach;
  const $putIfAbsent = dartx.putIfAbsent;
  const $values = dartx.values;
  const $clear = dartx.clear;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $first = dartx.first;
  const $sort = dartx.sort;
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [], [core.bool])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureToNull = () => (FutureToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let AsObservableFutureOfbool = () => (AsObservableFutureOfbool = dart.constFn(as_observable_future.AsObservableFuture$(core.bool)))();
  let ObservableOfint = () => (ObservableOfint = dart.constFn(observable.Observable$(core.int)))();
  let ObservableOfbool = () => (ObservableOfbool = dart.constFn(observable.Observable$(core.bool)))();
  let StreamOfvoid = () => (StreamOfvoid = dart.constFn(async.Stream$(dart.void)))();
  let TimerStreamOfbool = () => (TimerStreamOfbool = dart.constFn(timer.TimerStream$(core.bool)))();
  let AsObservableFutureOfString = () => (AsObservableFutureOfString = dart.constFn(as_observable_future.AsObservableFuture$(core.String)))();
  let AsObservableFutureOfint = () => (AsObservableFutureOfint = dart.constFn(as_observable_future.AsObservableFuture$(core.int)))();
  let NeverStreamOfvoid = () => (NeverStreamOfvoid = dart.constFn(never.NeverStream$(dart.void)))();
  let TypeTokenOfbool = () => (TypeTokenOfbool = dart.constFn(type_token.TypeToken$(core.bool)))();
  let TypeTokenOfdouble = () => (TypeTokenOfdouble = dart.constFn(type_token.TypeToken$(core.double)))();
  let TypeTokenOfint = () => (TypeTokenOfint = dart.constFn(type_token.TypeToken$(core.int)))();
  let TypeTokenOfnum = () => (TypeTokenOfnum = dart.constFn(type_token.TypeToken$(core.num)))();
  let TypeTokenOfString = () => (TypeTokenOfString = dart.constFn(type_token.TypeToken$(core.String)))();
  let TypeTokenOfSymbol = () => (TypeTokenOfSymbol = dart.constFn(type_token.TypeToken$(core.Symbol)))();
  let JSArrayOfStream = () => (JSArrayOfStream = dart.constFn(_interceptors.JSArray$(async.Stream)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ListOfbool = () => (ListOfbool = dart.constFn(core.List$(core.bool)))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let FutureTovoid = () => (FutureTovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let FutureToFuture = () => (FutureToFuture = dart.constFn(dart.fnType(async.Future, [async.Future])))();
  let LinkedMapOfStream$StreamSubscription = () => (LinkedMapOfStream$StreamSubscription = dart.constFn(_js_helper.LinkedMap$(async.Stream, async.StreamSubscription)))();
  let VoidToStreamSubscription = () => (VoidToStreamSubscription = dart.constFn(dart.fnType(async.StreamSubscription, [])))();
  let JSArrayOfTimer = () => (JSArrayOfTimer = dart.constFn(_interceptors.JSArray$(async.Timer)))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.eventAfterLastWindow",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.firstEventOnly",
        index: 2
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.everyEvent",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.onHandler",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C2 || CT.C2, C0 || CT.C0, C1 || CT.C1, C3 || CT.C3], backpressure.WindowStrategy);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: TypeTokenOfbool().prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: TypeTokenOfdouble().prototype
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: TypeTokenOfint().prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: TypeTokenOfnum().prototype
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: TypeTokenOfString().prototype
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: TypeTokenOfSymbol().prototype
      });
    },
    get C11() {
      return C11 = dart.fn(delay.DelayStreamTransformer._cancelTimerIfActive, TimerTovoid());
    }
  });
  const _transformer = dart.privateName(backpressure, "_transformer");
  const _name$ = dart.privateName(backpressure, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  const _is_BackpressureStreamTransformer_default = Symbol('_is_BackpressureStreamTransformer_default');
  backpressure.BackpressureStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class BackpressureStreamTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return this[_transformer].bind(stream);
      }
      static _buildTransformer(S, T, strategy, windowStreamFactory, onWindowStart, onWindowEnd, startBufferEvery, closeWindowWhen, ignoreEmptyWindows, dispatchOnClose) {
        return new (async._StreamSubscriptionTransformer$(S, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let windowSubscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              let skip = 0;
              let queue = new (collection$.ListQueue$(S)).new();
              let resolveWindowStart = dart.fn(event => {
                if (onWindowStart != null) controller.add(onWindowStart(event));
              }, dart.fnType(core.Null, [S]));
              let resolveWindowEnd = dart.fn((isControllerClosing = false) => {
                let t0, t1;
                if (dart.test(isControllerClosing) || dart.equals(strategy, backpressure.WindowStrategy.eventAfterLastWindow) || dart.equals(strategy, backpressure.WindowStrategy.everyEvent)) {
                  t0 = windowSubscription;
                  t0 == null ? null : t0.cancel();
                  windowSubscription = null;
                }
                if (dart.test(isControllerClosing) && !dart.test(dispatchOnClose)) return;
                if (dart.test(queue[$isNotEmpty]) || !dart.test(ignoreEmptyWindows)) {
                  if (onWindowEnd != null) {
                    try {
                      controller.add(onWindowEnd(core.List$(S).unmodifiable(queue)));
                    } catch (e$) {
                      let e = dart.getThrown(e$);
                      let s = dart.stackTrace(e$);
                      controller.addError(e, s);
                    }
                  }
                  if (!dart.test(isControllerClosing) && dart.notNull(startBufferEvery) > 0) {
                    try {
                      let startWith = dart.notNull(startBufferEvery) < dart.notNull(queue[$length]) ? queue[$toList]()[$sublist](startBufferEvery) : _interceptors.JSArray$(S).of([]);
                      skip = dart.notNull(startBufferEvery) > dart.notNull(queue[$length]) ? dart.notNull(startBufferEvery) - dart.notNull(queue[$length]) : 0;
                      t1 = queue;
                      t1.clear();
                      t1.addAll(startWith);
                      t1;
                    } catch (e$0) {
                      let e = dart.getThrown(e$0);
                      let s = dart.stackTrace(e$0);
                      controller.addError(e, s);
                    }
                  } else {
                    queue.clear();
                  }
                }
              }, boolToNull());
              let buildStream = dart.fn(event => {
                let t2;
                let stream = null;
                t2 = windowSubscription;
                t2 == null ? null : t2.cancel();
                try {
                  stream = windowStreamFactory(event);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
                if (stream == null) {
                  controller.addError(new core.ArgumentError.notNull("windowStreamFactory"));
                }
                return stream;
              }, dart.fnType(async.Stream, [S]));
              let singleWindow = dart.fn(event => buildStream(event).take(1).listen(null, {onError: dart.bind(controller, 'addError'), onDone: resolveWindowEnd, cancelOnError: cancelOnError}), dart.fnType(async.StreamSubscription, [S]));
              let multiWindow = dart.fn(event => buildStream(event).listen(dart.fn(_ => resolveWindowEnd(), dynamicToNull()), {onError: dart.bind(controller, 'addError'), onDone: resolveWindowEnd, cancelOnError: cancelOnError}), dart.fnType(async.StreamSubscription, [S]));
              let maybeCreateWindow = dart.fn(event => {
                let t3;
                try {
                  switch (strategy) {
                    case C0 || CT.C0:
                    {
                      if (windowSubscription != null) return;
                      windowSubscription = singleWindow(event);
                      resolveWindowStart(event);
                      break;
                    }
                    case C1 || CT.C1:
                    {
                      if (windowSubscription != null) return;
                      windowSubscription = multiWindow(event);
                      resolveWindowStart(event);
                      break;
                    }
                    case C2 || CT.C2:
                    {
                      t3 = windowSubscription;
                      t3 == null ? null : t3.cancel();
                      windowSubscription = singleWindow(event);
                      resolveWindowStart(event);
                      break;
                    }
                    case C3 || CT.C3:
                    {
                      break;
                    }
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [S]));
              let maybeCloseWindow = dart.fn(() => {
                if (closeWindowWhen != null && dart.test(closeWindowWhen(core.List$(S).unmodifiable(queue)))) {
                  resolveWindowEnd();
                }
              }, VoidToNull());
              let onData = dart.fn(event => {
                maybeCreateWindow(event);
                if (skip === 0) queue.add(event);
                if (skip > 0) skip = skip - 1;
                maybeCloseWindow();
              }, dart.fnType(core.Null, [S]));
              let onDone = dart.fn(() => {
                if (dart.test(queue[$isNotEmpty])) resolveWindowStart(queue[$last]);
                resolveWindowEnd(true);
                queue.clear();
                controller.close();
              }, VoidToNull());
              subscription = input.listen(onData, {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              let t4;
              t4 = windowSubscription;
              t4 == null ? null : t4.pause(resumeSignal);
              subscription.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t4;
              t4 = windowSubscription;
              t4 == null ? null : t4.resume();
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t4;
              t4 = windowSubscription;
              t4 == null ? null : t4.cancel();
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (BackpressureStreamTransformer.new = function(strategy, windowStreamFactory, opts) {
      let onWindowStart = opts && 'onWindowStart' in opts ? opts.onWindowStart : null;
      let onWindowEnd = opts && 'onWindowEnd' in opts ? opts.onWindowEnd : null;
      let startBufferEvery = opts && 'startBufferEvery' in opts ? opts.startBufferEvery : 0;
      let closeWindowWhen = opts && 'closeWindowWhen' in opts ? opts.closeWindowWhen : null;
      let ignoreEmptyWindows = opts && 'ignoreEmptyWindows' in opts ? opts.ignoreEmptyWindows : true;
      let dispatchOnClose = opts && 'dispatchOnClose' in opts ? opts.dispatchOnClose : true;
      this[_transformer] = backpressure.BackpressureStreamTransformer._buildTransformer(S, T, strategy, windowStreamFactory, onWindowStart, onWindowEnd, startBufferEvery, closeWindowWhen, ignoreEmptyWindows, dispatchOnClose);
      BackpressureStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = BackpressureStreamTransformer.prototype;
    dart.addTypeTests(BackpressureStreamTransformer);
    BackpressureStreamTransformer.prototype[_is_BackpressureStreamTransformer_default] = true;
    dart.setMethodSignature(BackpressureStreamTransformer, () => ({
      __proto__: dart.getMethods(BackpressureStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(BackpressureStreamTransformer, "package:rxdart/src/transformers/backpressure/backpressure.dart");
    dart.setFieldSignature(BackpressureStreamTransformer, () => ({
      __proto__: dart.getFields(BackpressureStreamTransformer.__proto__),
      [_transformer]: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return BackpressureStreamTransformer;
  });
  backpressure.BackpressureStreamTransformer = backpressure.BackpressureStreamTransformer$();
  dart.addTypeTests(backpressure.BackpressureStreamTransformer, _is_BackpressureStreamTransformer_default);
  const _is_WindowStreamTransformer_default = Symbol('_is_WindowStreamTransformer_default');
  window.WindowStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToStreamOfT = () => (ListOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [ListOfT()])))();
    class WindowStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, async.Stream$(T)) {}
    (WindowStreamTransformer.new = function(window) {
      WindowStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, window, {onWindowEnd: dart.fn(queue => StreamOfT().fromIterable(queue), ListOfTToStreamOfT()), ignoreEmptyWindows: false});
      if (window == null) dart.throw(new core.ArgumentError.notNull("window"));
    }).prototype = WindowStreamTransformer.prototype;
    dart.addTypeTests(WindowStreamTransformer);
    WindowStreamTransformer.prototype[_is_WindowStreamTransformer_default] = true;
    dart.setLibraryUri(WindowStreamTransformer, "package:rxdart/src/transformers/backpressure/window.dart");
    return WindowStreamTransformer;
  });
  window.WindowStreamTransformer = window.WindowStreamTransformer$();
  dart.addTypeTests(window.WindowStreamTransformer, _is_WindowStreamTransformer_default);
  const _is_WindowCountStreamTransformer_default = Symbol('_is_WindowCountStreamTransformer_default');
  window.WindowCountStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToStreamOfT = () => (ListOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [ListOfT()])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class WindowCountStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, async.Stream$(T)) {}
    (WindowCountStreamTransformer.new = function(count, startBufferEvery = 0) {
      WindowCountStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => StreamOfT().fromIterable(queue), ListOfTToStreamOfT()), startBufferEvery: startBufferEvery, closeWindowWhen: dart.fn(queue => queue[$length] == count, IterableOfTTobool())});
      if (count == null) dart.throw(new core.ArgumentError.notNull("count"));
      if (startBufferEvery == null) {
        dart.throw(new core.ArgumentError.notNull("startBufferEvery"));
      }
      if (dart.notNull(count) < 1) dart.throw(new core.ArgumentError.value(count, "count"));
      if (dart.notNull(startBufferEvery) < 0) {
        dart.throw(new core.ArgumentError.value(startBufferEvery, "startBufferEvery"));
      }
    }).prototype = WindowCountStreamTransformer.prototype;
    dart.addTypeTests(WindowCountStreamTransformer);
    WindowCountStreamTransformer.prototype[_is_WindowCountStreamTransformer_default] = true;
    dart.setLibraryUri(WindowCountStreamTransformer, "package:rxdart/src/transformers/backpressure/window.dart");
    return WindowCountStreamTransformer;
  });
  window.WindowCountStreamTransformer = window.WindowCountStreamTransformer$();
  dart.addTypeTests(window.WindowCountStreamTransformer, _is_WindowCountStreamTransformer_default);
  const _is_WindowTestStreamTransformer_default = Symbol('_is_WindowTestStreamTransformer_default');
  window.WindowTestStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToStreamOfT = () => (ListOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [ListOfT()])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class WindowTestStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, async.Stream$(T)) {}
    (WindowTestStreamTransformer.new = function(test) {
      WindowTestStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => StreamOfT().fromIterable(queue), ListOfTToStreamOfT()), closeWindowWhen: dart.fn(queue => test(queue[$last]), IterableOfTTobool())});
      if (test == null) dart.throw(new core.ArgumentError.notNull("test"));
    }).prototype = WindowTestStreamTransformer.prototype;
    dart.addTypeTests(WindowTestStreamTransformer);
    WindowTestStreamTransformer.prototype[_is_WindowTestStreamTransformer_default] = true;
    dart.setLibraryUri(WindowTestStreamTransformer, "package:rxdart/src/transformers/backpressure/window.dart");
    return WindowTestStreamTransformer;
  });
  window.WindowTestStreamTransformer = window.WindowTestStreamTransformer$();
  dart.addTypeTests(window.WindowTestStreamTransformer, _is_WindowTestStreamTransformer_default);
  let C4;
  backpressure.WindowStrategy = class WindowStrategy extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (backpressure.WindowStrategy.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = backpressure.WindowStrategy.prototype;
  dart.addTypeTests(backpressure.WindowStrategy);
  dart.setLibraryUri(backpressure.WindowStrategy, "package:rxdart/src/transformers/backpressure/backpressure.dart");
  dart.setFieldSignature(backpressure.WindowStrategy, () => ({
    __proto__: dart.getFields(backpressure.WindowStrategy.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(backpressure.WindowStrategy, ['toString']);
  backpressure.WindowStrategy.everyEvent = C2 || CT.C2;
  backpressure.WindowStrategy.eventAfterLastWindow = C0 || CT.C0;
  backpressure.WindowStrategy.firstEventOnly = C1 || CT.C1;
  backpressure.WindowStrategy.onHandler = C3 || CT.C3;
  backpressure.WindowStrategy.values = C4 || CT.C4;
  const _queue$ = dart.privateName(replay_subject, "_queue");
  const _maxSize$ = dart.privateName(replay_subject, "_maxSize");
  const _isAddingStreamItems = dart.privateName(subject, "_isAddingStreamItems");
  const _controller = dart.privateName(subject, "_controller");
  const _addError = dart.privateName(subject, "_addError");
  const _add = dart.privateName(subject, "_add");
  const _stream = dart.privateName(observable, "_stream");
  const _is_Observable_default = Symbol('_is_Observable_default');
  observable.Observable$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(observable.Observable$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let BufferStreamTransformerOfT = () => (BufferStreamTransformerOfT = dart.constFn(buffer.BufferStreamTransformer$(T)))();
    let TToStream = () => (TToStream = dart.constFn(dart.fnType(async.Stream, [T])))();
    let BufferCountStreamTransformerOfT = () => (BufferCountStreamTransformerOfT = dart.constFn(buffer.BufferCountStreamTransformer$(T)))();
    let BufferTestStreamTransformerOfT = () => (BufferTestStreamTransformerOfT = dart.constFn(buffer.BufferTestStreamTransformer$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let IterableOfStreamOfT = () => (IterableOfStreamOfT = dart.constFn(core.Iterable$(StreamOfT())))();
    let ConcatStreamOfT = () => (ConcatStreamOfT = dart.constFn(concat.ConcatStream$(T)))();
    let JSArrayOfStreamOfT = () => (JSArrayOfStreamOfT = dart.constFn(_interceptors.JSArray$(StreamOfT())))();
    let DebounceStreamTransformerOfT = () => (DebounceStreamTransformerOfT = dart.constFn(debounce.DebounceStreamTransformer$(T)))();
    let TToTimerStreamOfbool = () => (TToTimerStreamOfbool = dart.constFn(dart.fnType(TimerStreamOfbool(), [T])))();
    let DefaultIfEmptyStreamTransformerOfT = () => (DefaultIfEmptyStreamTransformerOfT = dart.constFn(default_if_empty.DefaultIfEmptyStreamTransformer$(T)))();
    let DelayStreamTransformerOfT = () => (DelayStreamTransformerOfT = dart.constFn(delay.DelayStreamTransformer$(T)))();
    let DistinctUniqueStreamTransformerOfT = () => (DistinctUniqueStreamTransformerOfT = dart.constFn(distinct_unique.DistinctUniqueStreamTransformer$(T)))();
    let DoStreamTransformerOfT = () => (DoStreamTransformerOfT = dart.constFn($do.DoStreamTransformer$(T)))();
    let AsObservableFutureOfT = () => (AsObservableFutureOfT = dart.constFn(as_observable_future.AsObservableFuture$(T)))();
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    let IgnoreElementsStreamTransformerOfT = () => (IgnoreElementsStreamTransformerOfT = dart.constFn(ignore_elements.IgnoreElementsStreamTransformer$(T)))();
    let IntervalStreamTransformerOfT = () => (IntervalStreamTransformerOfT = dart.constFn(interval.IntervalStreamTransformer$(T)))();
    let NotificationOfT = () => (NotificationOfT = dart.constFn(notification.Notification$(T)))();
    let MaterializeStreamTransformerOfT = () => (MaterializeStreamTransformerOfT = dart.constFn(materialize.MaterializeStreamTransformer$(T)))();
    let StreamMaxFutureOfT = () => (StreamMaxFutureOfT = dart.constFn(stream_max_future.StreamMaxFuture$(T)))();
    let MergeStreamOfT = () => (MergeStreamOfT = dart.constFn(merge.MergeStream$(T)))();
    let StreamMinFutureOfT = () => (StreamMinFutureOfT = dart.constFn(stream_min_future.StreamMinFuture$(T)))();
    let OnErrorResumeStreamTransformerOfT = () => (OnErrorResumeStreamTransformerOfT = dart.constFn(on_error_resume.OnErrorResumeStreamTransformer$(T)))();
    let dynamicToStreamOfT = () => (dynamicToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [dart.dynamic])))();
    let dynamicToObservableOfT = () => (dynamicToObservableOfT = dart.constFn(dart.fnType(ObservableOfT(), [dart.dynamic])))();
    let dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let PairwiseStreamTransformerOfT = () => (PairwiseStreamTransformerOfT = dart.constFn(pairwise.PairwiseStreamTransformer$(T)))();
    let StreamConsumerOfT = () => (StreamConsumerOfT = dart.constFn(async.StreamConsumer$(T)))();
    let TAndTToT = () => (TAndTToT = dart.constFn(dart.fnType(T, [T, T])))();
    let SampleStreamTransformerOfT = () => (SampleStreamTransformerOfT = dart.constFn(sample.SampleStreamTransformer$(T)))();
    let StartWithStreamTransformerOfT = () => (StartWithStreamTransformerOfT = dart.constFn(start_with.StartWithStreamTransformer$(T)))();
    let StartWithManyStreamTransformerOfT = () => (StartWithManyStreamTransformerOfT = dart.constFn(start_with_many.StartWithManyStreamTransformer$(T)))();
    let SwitchIfEmptyStreamTransformerOfT = () => (SwitchIfEmptyStreamTransformerOfT = dart.constFn(switch_if_empty.SwitchIfEmptyStreamTransformer$(T)))();
    let ThrottleStreamTransformerOfT = () => (ThrottleStreamTransformerOfT = dart.constFn(throttle.ThrottleStreamTransformer$(T)))();
    let TimeIntervalOfT = () => (TimeIntervalOfT = dart.constFn(time_interval.TimeInterval$(T)))();
    let TimeIntervalStreamTransformerOfT = () => (TimeIntervalStreamTransformerOfT = dart.constFn(time_interval.TimeIntervalStreamTransformer$(T)))();
    let TimestampedOfT = () => (TimestampedOfT = dart.constFn(timestamp.Timestamped$(T)))();
    let TimestampStreamTransformerOfT = () => (TimestampStreamTransformerOfT = dart.constFn(timestamp.TimestampStreamTransformer$(T)))();
    let AsObservableFutureOfListOfT = () => (AsObservableFutureOfListOfT = dart.constFn(as_observable_future.AsObservableFuture$(ListOfT())))();
    let SetOfT = () => (SetOfT = dart.constFn(core.Set$(T)))();
    let AsObservableFutureOfSetOfT = () => (AsObservableFutureOfSetOfT = dart.constFn(as_observable_future.AsObservableFuture$(SetOfT())))();
    let WindowStreamTransformerOfT = () => (WindowStreamTransformerOfT = dart.constFn(window.WindowStreamTransformer$(T)))();
    let WindowCountStreamTransformerOfT = () => (WindowCountStreamTransformerOfT = dart.constFn(window.WindowCountStreamTransformer$(T)))();
    let WindowTestStreamTransformerOfT = () => (WindowTestStreamTransformerOfT = dart.constFn(window.WindowTestStreamTransformer$(T)))();
    let PublishConnectableObservableOfT = () => (PublishConnectableObservableOfT = dart.constFn(connectable_observable.PublishConnectableObservable$(T)))();
    let ValueConnectableObservableOfT = () => (ValueConnectableObservableOfT = dart.constFn(connectable_observable.ValueConnectableObservable$(T)))();
    let ReplayConnectableObservableOfT = () => (ReplayConnectableObservableOfT = dart.constFn(connectable_observable.ReplayConnectableObservable$(T)))();
    class Observable extends async.Stream$(T) {
      any(test) {
        return new (AsObservableFutureOfbool()).new(this[_stream].any(test));
      }
      static combineLatest(T, R, streams, combiner) {
        return new (observable.Observable$(R)).new(new (combine_latest.CombineLatestStream$(T, R)).new(streams, combiner));
      }
      static combineLatestList(T, streams) {
        return new (observable.Observable$(core.List$(T))).new(combine_latest.CombineLatestStream.list(T, streams));
      }
      static combineLatest2(A, B, T, streamA, streamB, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine2(A, B, T, streamA, streamB, combiner));
      }
      static combineLatest3(A, B, C, T, streamA, streamB, streamC, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine3(A, B, C, T, streamA, streamB, streamC, combiner));
      }
      static combineLatest4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner));
      }
      static combineLatest5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner));
      }
      static combineLatest6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner));
      }
      static combineLatest7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner));
      }
      static combineLatest8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner));
      }
      static combineLatest9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner));
      }
      static concat(streams) {
        return new (observable.Observable$(T)).new(new (concat.ConcatStream$(T)).new(streams));
      }
      static concatEager(streams) {
        return new (observable.Observable$(T)).new(new (concat_eager.ConcatEagerStream$(T)).new(streams));
      }
      static defer(streamFactory, opts) {
        let reusable = opts && 'reusable' in opts ? opts.reusable : false;
        return new (observable.Observable$(T)).new(new (defer.DeferStream$(T)).new(streamFactory, {reusable: reusable}));
      }
      static error(error) {
        return new (observable.Observable$(T)).new(new (error$.ErrorStream$(T)).new(error));
      }
      static eventTransformed(source, mapSink) {
        return new (observable.Observable$(T)).new(async.Stream$(T).eventTransformed(source, mapSink));
      }
      static forkJoin(T, R, streams, combiner) {
        return new (observable.Observable$(R)).new(new (fork_join.ForkJoinStream$(T, R)).new(streams, combiner));
      }
      static forkJoinList(T, streams) {
        return new (observable.Observable$(core.List$(T))).new(fork_join.ForkJoinStream.list(T, streams));
      }
      static forkJoin2(A, B, T, streamA, streamB, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine2(A, B, T, streamA, streamB, combiner));
      }
      static forkJoin3(A, B, C, T, streamA, streamB, streamC, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine3(A, B, C, T, streamA, streamB, streamC, combiner));
      }
      static forkJoin4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner));
      }
      static forkJoin5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner));
      }
      static forkJoin6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner));
      }
      static forkJoin7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner));
      }
      static forkJoin8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner));
      }
      static forkJoin9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner));
      }
      static fromFuture(future) {
        return new (observable.Observable$(T)).new(async.Stream$(T).fromFuture(future));
      }
      static fromIterable(data) {
        return new (observable.Observable$(T)).new(async.Stream$(T).fromIterable(data));
      }
      static just(data) {
        return new (observable.Observable$(T)).new(async.Stream$(T).fromIterable(_interceptors.JSArray$(T).of([data])));
      }
      static empty() {
        return new (observable.Observable$(T)).new(new (async._EmptyStream$(T)).new());
      }
      static merge(streams) {
        return new (observable.Observable$(T)).new(new (merge.MergeStream$(T)).new(streams));
      }
      static never() {
        return new (observable.Observable$(T)).new(new (never.NeverStream$(T)).new());
      }
      static periodic(period, computation = null) {
        return new (observable.Observable$(T)).new(async.Stream$(T).periodic(period, computation));
      }
      static race(streams) {
        return new (observable.Observable$(T)).new(new (race.RaceStream$(T)).new(streams));
      }
      static range(startInclusive, endInclusive) {
        return new (ObservableOfint()).new(new range.RangeStream.new(startInclusive, endInclusive));
      }
      static repeat(streamFactory, count = null) {
        return new (observable.Observable$(T)).new(new (repeat.RepeatStream$(T)).new(streamFactory, count));
      }
      static retry(streamFactory, count = null) {
        return new (observable.Observable$(T)).new(new (retry.RetryStream$(T)).new(streamFactory, count));
      }
      static retryWhen(streamFactory, retryWhenFactory) {
        return new (observable.Observable$(T)).new(new (retry_when.RetryWhenStream$(T)).new(streamFactory, retryWhenFactory));
      }
      static sequenceEqual(A, B, stream, other, opts) {
        let equals = opts && 'equals' in opts ? opts.equals : null;
        return new (ObservableOfbool()).new(new (sequence_equal.SequenceEqualStream$(A, B)).new(stream, other, {equals: equals}));
      }
      static switchLatest(streams) {
        return new (observable.Observable$(T)).new(new (switch_latest.SwitchLatestStream$(T)).new(streams));
      }
      static timer(value, duration) {
        return new (observable.Observable$(T)).new(new (timer.TimerStream$(T)).new(value, duration));
      }
      static zip2(A, B, T, streamA, streamB, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip2(A, B, T, streamA, streamB, zipper));
      }
      static zip(T, R, streams, zipper) {
        return new (observable.Observable$(R)).new(new (zip.ZipStream$(T, R)).new(streams, zipper));
      }
      static zipList(T, streams) {
        return new (observable.Observable$(core.List$(T))).new(zip.ZipStream.list(T, streams));
      }
      static zip3(A, B, C, T, streamA, streamB, streamC, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip3(A, B, C, T, streamA, streamB, streamC, zipper));
      }
      static zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper));
      }
      static zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper));
      }
      static zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper));
      }
      static zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper));
      }
      static zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper));
      }
      static zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper));
      }
      asBroadcastStream(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        return new (ObservableOfT()).new(this[_stream].asBroadcastStream({onListen: onListen, onCancel: onCancel}));
      }
      asyncExpand(S, mapper) {
        return new (observable.Observable$(S)).new(this[_stream].asyncExpand(S, mapper));
      }
      asyncMap(S, convert) {
        return new (observable.Observable$(S)).new(this[_stream].asyncMap(S, convert));
      }
      buffer(window) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(dart.fn(_ => window, TToStream())));
      }
      bufferCount(count, startBufferEvery = 0) {
        return this.transform(ListOfT(), new (BufferCountStreamTransformerOfT()).new(count, startBufferEvery));
      }
      bufferTest(onTestHandler) {
        return this.transform(ListOfT(), new (BufferTestStreamTransformerOfT()).new(onTestHandler));
      }
      bufferTime(duration) {
        if (duration == null) dart.throw(new core.ArgumentError.notNull("duration"));
        return this.buffer(StreamOfvoid().periodic(duration));
      }
      cast(R) {
        return new (observable.Observable$(R)).new(this[_stream].cast(R));
      }
      concatMap(S, mapper) {
        return new (observable.Observable$(S)).new(this[_stream].asyncExpand(S, mapper));
      }
      concatWith(other) {
        let t4;
        IterableOfStreamOfT()._check(other);
        return new (ObservableOfT()).new(new (ConcatStreamOfT()).new((t4 = JSArrayOfStreamOfT().of([this[_stream]]), t4[$addAll](other), t4)));
      }
      contains(needle) {
        return new (AsObservableFutureOfbool()).new(this[_stream].contains(needle));
      }
      debounce(window) {
        return this.transform(T, new (DebounceStreamTransformerOfT()).new(window));
      }
      debounceTime(duration) {
        return this.transform(T, new (DebounceStreamTransformerOfT()).new(dart.fn(_ => new (TimerStreamOfbool()).new(true, duration), TToTimerStreamOfbool())));
      }
      defaultIfEmpty(defaultValue) {
        T._check(defaultValue);
        return this.transform(T, new (DefaultIfEmptyStreamTransformerOfT()).new(defaultValue));
      }
      delay(duration) {
        return this.transform(T, new (DelayStreamTransformerOfT()).new(duration));
      }
      dematerialize(S) {
        return this.cast(notification.Notification$(S)).transform(S, new (dematerialize.DematerializeStreamTransformer$(S)).new());
      }
      distinct(equals = null) {
        return new (ObservableOfT()).new(this[_stream].distinct(equals));
      }
      distinctUnique(opts) {
        let equals = opts && 'equals' in opts ? opts.equals : null;
        let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
        return this.transform(T, new (DistinctUniqueStreamTransformerOfT()).new({equals: equals, hashCode: hashCode}));
      }
      doOnCancel(onCancel) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onCancel: onCancel}));
      }
      doOnData(onData) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onData: onData}));
      }
      doOnDone(onDone) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onDone: onDone}));
      }
      doOnEach(onEach) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onEach: onEach}));
      }
      doOnError(onError) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onError: onError}));
      }
      doOnListen(onListen) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onListen: onListen}));
      }
      doOnPause(onPause) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onPause: onPause}));
      }
      doOnResume(onResume) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onResume: onResume}));
      }
      drain(S, futureValue = null) {
        return new (as_observable_future.AsObservableFuture$(S)).new(this[_stream].drain(S, futureValue));
      }
      elementAt(index) {
        return new (AsObservableFutureOfT()).new(this[_stream].elementAt(index));
      }
      every(test) {
        return new (AsObservableFutureOfbool()).new(this[_stream].every(test));
      }
      exhaustMap(S, mapper) {
        return this.transform(S, new (exhaust_map.ExhaustMapStreamTransformer$(T, S)).new(mapper));
      }
      expand(S, convert) {
        return new (observable.Observable$(S)).new(this[_stream].expand(S, convert));
      }
      get first() {
        return new (AsObservableFutureOfT()).new(this[_stream].first);
      }
      firstWhere(test, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].firstWhere(test, {orElse: orElse}));
      }
      flatMap(S, mapper) {
        return this.transform(S, new (flat_map.FlatMapStreamTransformer$(T, S)).new(mapper));
      }
      flatMapIterable(S, mapper) {
        return this.transform(core.Iterable$(S), new (flat_map.FlatMapStreamTransformer$(T, core.Iterable$(S))).new(mapper)).expand(S, dart.fn(iterable => iterable, dart.fnType(core.Iterable$(S), [core.Iterable$(S)])));
      }
      fold(S, initialValue, combine) {
        return new (as_observable_future.AsObservableFuture$(S)).new(this[_stream].fold(S, initialValue, combine));
      }
      forEach(action) {
        return new as_observable_future.AsObservableFuture.new(this[_stream].forEach(action));
      }
      groupBy(S, grouper) {
        return this.transform(group_by.GroupByObservable$(T, S), new (group_by.GroupByStreamTransformer$(T, S)).new(grouper));
      }
      handleError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return new (ObservableOfT()).new(this[_stream].handleError(onError, {test: test}));
      }
      ignoreElements() {
        return this.transform(T, new (IgnoreElementsStreamTransformerOfT()).new());
      }
      interval(duration) {
        return this.transform(T, new (IntervalStreamTransformerOfT()).new(duration));
      }
      get isBroadcast() {
        return this[_stream] != null ? this[_stream].isBroadcast : false;
      }
      get isEmpty() {
        return new (AsObservableFutureOfbool()).new(this[_stream].isEmpty);
      }
      join(separator = "") {
        return new (AsObservableFutureOfString()).new(this[_stream].join(separator));
      }
      get last() {
        return new (AsObservableFutureOfT()).new(this[_stream].last);
      }
      lastWhere(test, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].lastWhere(test, {orElse: orElse}));
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_stream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      get length() {
        return new (AsObservableFutureOfint()).new(this[_stream].length);
      }
      map(S, convert) {
        return new (observable.Observable$(S)).new(this[_stream].map(S, convert));
      }
      mapTo(S, value) {
        return this.transform(S, new (map_to.MapToStreamTransformer$(T, S)).new(value));
      }
      materialize() {
        return this.transform(NotificationOfT(), new (MaterializeStreamTransformerOfT()).new());
      }
      max(comparator = null) {
        return new (AsObservableFutureOfT()).new(new (StreamMaxFutureOfT()).new(this[_stream], comparator));
      }
      mergeWith(streams) {
        let t4;
        IterableOfStreamOfT()._check(streams);
        return new (ObservableOfT()).new(new (MergeStreamOfT()).new((t4 = JSArrayOfStreamOfT().of([this[_stream]]), t4[$addAll](streams), t4)));
      }
      min(comparator = null) {
        return new (AsObservableFutureOfT()).new(new (StreamMinFutureOfT()).new(this[_stream], comparator));
      }
      ofType(S, typeToken) {
        return this.transform(S, new (of_type.OfTypeStreamTransformer$(T, S)).new(typeToken));
      }
      onErrorResumeNext(recoveryStream) {
        StreamOfT()._check(recoveryStream);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => recoveryStream, dynamicToStreamOfT())));
      }
      onErrorResume(recoveryFn) {
        dynamicToStreamOfT()._check(recoveryFn);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(recoveryFn));
      }
      onErrorReturn(returnValue) {
        T._check(returnValue);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => ObservableOfT().just(returnValue), dynamicToObservableOfT())));
      }
      onErrorReturnWith(returnFn) {
        dynamicToT()._check(returnFn);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => ObservableOfT().just(returnFn(e)), dynamicToObservableOfT())));
      }
      pairwise() {
        return this.transform(IterableOfT(), new (PairwiseStreamTransformerOfT()).new());
      }
      pipe(streamConsumer) {
        StreamConsumerOfT()._check(streamConsumer);
        return new as_observable_future.AsObservableFuture.new(this[_stream].pipe(streamConsumer));
      }
      reduce(combine) {
        TAndTToT()._check(combine);
        return new (AsObservableFutureOfT()).new(this[_stream].reduce(combine));
      }
      sample(sampleStream) {
        return this.transform(T, new (SampleStreamTransformerOfT()).new(dart.fn(_ => sampleStream, TToStream())));
      }
      sampleTime(duration) {
        return this.sample(StreamOfvoid().periodic(duration));
      }
      scan(S, accumulator, seed = null) {
        return this.transform(S, new (scan.ScanStreamTransformer$(T, S)).new(accumulator, seed));
      }
      get single() {
        return new (AsObservableFutureOfT()).new(this[_stream].single);
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].singleWhere(test, {orElse: orElse}));
      }
      skip(count) {
        return new (ObservableOfT()).new(this[_stream].skip(count));
      }
      skipUntil(S, otherStream) {
        return this.transform(T, new (skip_until.SkipUntilStreamTransformer$(T, S)).new(otherStream));
      }
      skipWhile(test) {
        return new (ObservableOfT()).new(this[_stream].skipWhile(test));
      }
      startWith(startValue) {
        T._check(startValue);
        return this.transform(T, new (StartWithStreamTransformerOfT()).new(startValue));
      }
      startWithMany(startValues) {
        ListOfT()._check(startValues);
        return this.transform(T, new (StartWithManyStreamTransformerOfT()).new(startValues));
      }
      switchIfEmpty(fallbackStream) {
        StreamOfT()._check(fallbackStream);
        return this.transform(T, new (SwitchIfEmptyStreamTransformerOfT()).new(fallbackStream));
      }
      switchMap(S, mapper) {
        return this.transform(S, new (switch_map.SwitchMapStreamTransformer$(T, S)).new(mapper));
      }
      take(count) {
        return new (ObservableOfT()).new(this[_stream].take(count));
      }
      takeUntil(S, otherStream) {
        return this.transform(T, new (take_until.TakeUntilStreamTransformer$(T, S)).new(otherStream));
      }
      takeWhile(test) {
        return new (ObservableOfT()).new(this[_stream].takeWhile(test));
      }
      throttle(window, opts) {
        let trailing = opts && 'trailing' in opts ? opts.trailing : false;
        return this.transform(T, new (ThrottleStreamTransformerOfT()).new(window, {trailing: trailing}));
      }
      throttleTime(duration, opts) {
        let trailing = opts && 'trailing' in opts ? opts.trailing : false;
        return this.transform(T, new (ThrottleStreamTransformerOfT()).new(dart.fn(_ => new (TimerStreamOfbool()).new(true, duration), TToTimerStreamOfbool()), {trailing: trailing}));
      }
      timeInterval() {
        return this.transform(TimeIntervalOfT(), new (TimeIntervalStreamTransformerOfT()).new());
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return new (ObservableOfT()).new(this[_stream].timeout(timeLimit, {onTimeout: onTimeout}));
      }
      timestamp() {
        return this.transform(TimestampedOfT(), new (TimestampStreamTransformerOfT()).new());
      }
      transform(S, streamTransformer) {
        async.StreamTransformer$(T, S)._check(streamTransformer);
        return new (observable.Observable$(S)).new(super.transform(S, streamTransformer));
      }
      toList() {
        return new (AsObservableFutureOfListOfT()).new(this[_stream].toList());
      }
      toSet() {
        return new (AsObservableFutureOfSetOfT()).new(this[_stream].toSet());
      }
      where(test) {
        return new (ObservableOfT()).new(this[_stream].where(test));
      }
      whereType(S) {
        return this.transform(S, new (where_type.WhereTypeStreamTransformer$(T, S)).new());
      }
      window(window) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(dart.fn(_ => window, TToStream())));
      }
      windowCount(count, startBufferEvery = 0) {
        return this.transform(StreamOfT(), new (WindowCountStreamTransformerOfT()).new(count, startBufferEvery));
      }
      windowTest(onTestHandler) {
        return this.transform(StreamOfT(), new (WindowTestStreamTransformerOfT()).new(onTestHandler));
      }
      windowTime(duration) {
        if (duration == null) dart.throw(new core.ArgumentError.notNull("duration"));
        return this.window(StreamOfvoid().periodic(duration));
      }
      withLatestFrom(S, R, latestFromStream, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with1(T, S, R, latestFromStream, fn));
      }
      withLatestFromList(latestFromStreams) {
        IterableOfStreamOfT()._check(latestFromStreams);
        return this.transform(ListOfT(), with_latest_from.WithLatestFromStreamTransformer.withList(T, latestFromStreams));
      }
      withLatestFrom2(A, B, R, latestFromStream1, latestFromStream2, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with2(T, A, B, R, latestFromStream1, latestFromStream2, fn));
      }
      withLatestFrom3(A, B, C, R, latestFromStream1, latestFromStream2, latestFromStream3, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with3(T, A, B, C, R, latestFromStream1, latestFromStream2, latestFromStream3, fn));
      }
      withLatestFrom4(A, B, C, D, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with4(T, A, B, C, D, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, fn));
      }
      withLatestFrom5(A, B, C, D, E, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with5(T, A, B, C, D, E, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, fn));
      }
      withLatestFrom6(A, B, C, D, E, F, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with6(T, A, B, C, D, E, F, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, fn));
      }
      withLatestFrom7(A, B, C, D, E, F, G, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with7(T, A, B, C, D, E, F, G, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, fn));
      }
      withLatestFrom8(A, B, C, D, E, F, G, H, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with8(T, A, B, C, D, E, F, G, H, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, fn));
      }
      withLatestFrom9(A, B, C, D, E, F, G, H, I, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with9(T, A, B, C, D, E, F, G, H, I, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9, fn));
      }
      zipWith(S, R, other, zipper) {
        return new (observable.Observable$(R)).new(zip.ZipStream.zip2(T, S, R, this[_stream], other, zipper));
      }
      publish() {
        return PublishConnectableObservableOfT().new(this);
      }
      publishValue() {
        return ValueConnectableObservableOfT().new(this);
      }
      publishValueSeeded(seedValue) {
        T._check(seedValue);
        return ValueConnectableObservableOfT().seeded(this, seedValue);
      }
      publishReplay(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return ReplayConnectableObservableOfT().new(this, {maxSize: maxSize});
      }
      share() {
        return this.publish().refCount();
      }
      shareValue() {
        return this.publishValue().refCount();
      }
      shareValueSeeded(seedValue) {
        T._check(seedValue);
        return this.publishValueSeeded(seedValue).refCount();
      }
      shareReplay(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return this.publishReplay({maxSize: maxSize}).refCount();
      }
    }
    (Observable.new = function(stream) {
      this[_stream] = stream;
      Observable.__proto__.new.call(this);
      ;
    }).prototype = Observable.prototype;
    dart.addTypeTests(Observable);
    Observable.prototype[_is_Observable_default] = true;
    dart.setMethodSignature(Observable, () => ({
      __proto__: dart.getMethods(Observable.__proto__),
      any: dart.fnType(as_observable_future.AsObservableFuture$(core.bool), [dart.fnType(core.bool, [T])]),
      asBroadcastStream: dart.fnType(observable.Observable$(T), [], {onCancel: dart.fnType(dart.void, [async.StreamSubscription$(T)]), onListen: dart.fnType(dart.void, [async.StreamSubscription$(T)])}, {}),
      asyncExpand: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      asyncMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.FutureOr$(S), [T])]]),
      buffer: dart.fnType(observable.Observable$(core.List$(T)), [async.Stream]),
      bufferCount: dart.fnType(observable.Observable$(core.List$(T)), [core.int], [core.int]),
      bufferTest: dart.fnType(observable.Observable$(core.List$(T)), [dart.fnType(core.bool, [T])]),
      bufferTime: dart.fnType(observable.Observable$(core.List$(T)), [core.Duration]),
      cast: dart.gFnType(R => [observable.Observable$(R), []]),
      concatMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      concatWith: dart.fnType(observable.Observable$(T), [core.Object]),
      contains: dart.fnType(as_observable_future.AsObservableFuture$(core.bool), [core.Object]),
      debounce: dart.fnType(observable.Observable$(T), [dart.fnType(async.Stream, [T])]),
      debounceTime: dart.fnType(observable.Observable$(T), [core.Duration]),
      defaultIfEmpty: dart.fnType(observable.Observable$(T), [core.Object]),
      delay: dart.fnType(observable.Observable$(T), [core.Duration]),
      dematerialize: dart.gFnType(S => [observable.Observable$(S), []]),
      distinct: dart.fnType(observable.Observable$(T), [], [dart.fnType(core.bool, [T, T])]),
      distinctUnique: dart.fnType(observable.Observable$(T), [], {equals: dart.fnType(core.bool, [T, T]), hashCode: dart.fnType(core.int, [T])}, {}),
      doOnCancel: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnData: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [T])]),
      doOnDone: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnEach: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [notification.Notification$(T)])]),
      doOnError: dart.fnType(observable.Observable$(T), [core.Function]),
      doOnListen: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnPause: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [async.Future])]),
      doOnResume: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      drain: dart.gFnType(S => [as_observable_future.AsObservableFuture$(S), [], [S]]),
      elementAt: dart.fnType(as_observable_future.AsObservableFuture$(T), [core.int]),
      every: dart.fnType(as_observable_future.AsObservableFuture$(core.bool), [dart.fnType(core.bool, [T])]),
      exhaustMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      expand: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(core.Iterable$(S), [T])]]),
      firstWhere: dart.fnType(as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {defaultValue: dart.fnType(dart.dynamic, []), orElse: core.Object}, {}),
      flatMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      flatMapIterable: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(core.Iterable$(S)), [T])]]),
      fold: dart.gFnType(S => [as_observable_future.AsObservableFuture$(S), [S, dart.fnType(S, [S, T])]]),
      forEach: dart.fnType(as_observable_future.AsObservableFuture, [dart.fnType(dart.void, [T])]),
      groupBy: dart.gFnType(S => [observable.Observable$(group_by.GroupByObservable$(T, S)), [dart.fnType(S, [T])]]),
      handleError: dart.fnType(observable.Observable$(T), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}, {}),
      ignoreElements: dart.fnType(observable.Observable$(T), []),
      interval: dart.fnType(observable.Observable$(T), [core.Duration]),
      join: dart.fnType(as_observable_future.AsObservableFuture$(core.String), [], [core.String]),
      lastWhere: dart.fnType(as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {defaultValue: dart.fnType(core.Object, []), orElse: core.Object}, {}),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {}),
      map: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(S, [T])]]),
      mapTo: dart.gFnType(S => [observable.Observable$(S), [S]]),
      materialize: dart.fnType(observable.Observable$(notification.Notification$(T)), []),
      max: dart.fnType(as_observable_future.AsObservableFuture$(T), [], [dart.fnType(core.int, [T, T])]),
      mergeWith: dart.fnType(observable.Observable$(T), [core.Object]),
      min: dart.fnType(as_observable_future.AsObservableFuture$(T), [], [dart.fnType(core.int, [T, T])]),
      ofType: dart.gFnType(S => [observable.Observable$(S), [type_token.TypeToken$(S)]]),
      onErrorResumeNext: dart.fnType(observable.Observable$(T), [core.Object]),
      onErrorResume: dart.fnType(observable.Observable$(T), [core.Object]),
      onErrorReturn: dart.fnType(observable.Observable$(T), [core.Object]),
      onErrorReturnWith: dart.fnType(observable.Observable$(T), [core.Object]),
      pairwise: dart.fnType(observable.Observable$(core.Iterable$(T)), []),
      pipe: dart.fnType(as_observable_future.AsObservableFuture, [core.Object]),
      reduce: dart.fnType(as_observable_future.AsObservableFuture$(T), [core.Object]),
      sample: dart.fnType(observable.Observable$(T), [async.Stream]),
      sampleTime: dart.fnType(observable.Observable$(T), [core.Duration]),
      scan: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(S, [S, T, core.int])], [S]]),
      singleWhere: dart.fnType(as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {orElse: core.Object}, {}),
      skip: dart.fnType(observable.Observable$(T), [core.int]),
      skipUntil: dart.gFnType(S => [observable.Observable$(T), [async.Stream$(S)]]),
      skipWhile: dart.fnType(observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      startWith: dart.fnType(observable.Observable$(T), [core.Object]),
      startWithMany: dart.fnType(observable.Observable$(T), [core.Object]),
      switchIfEmpty: dart.fnType(observable.Observable$(T), [core.Object]),
      switchMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      take: dart.fnType(observable.Observable$(T), [core.int]),
      takeUntil: dart.gFnType(S => [observable.Observable$(T), [async.Stream$(S)]]),
      takeWhile: dart.fnType(observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      throttle: dart.fnType(observable.Observable$(T), [dart.fnType(async.Stream, [T])], {trailing: core.bool}, {}),
      throttleTime: dart.fnType(observable.Observable$(T), [core.Duration], {trailing: core.bool}, {}),
      timeInterval: dart.fnType(observable.Observable$(time_interval.TimeInterval$(T)), []),
      timeout: dart.fnType(observable.Observable$(T), [core.Duration], {onTimeout: dart.fnType(dart.void, [async.EventSink$(T)])}, {}),
      timestamp: dart.fnType(observable.Observable$(timestamp.Timestamped$(T)), []),
      transform: dart.gFnType(S => [observable.Observable$(S), [core.Object]]),
      toList: dart.fnType(as_observable_future.AsObservableFuture$(core.List$(T)), []),
      toSet: dart.fnType(as_observable_future.AsObservableFuture$(core.Set$(T)), []),
      where: dart.fnType(observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      whereType: dart.gFnType(S => [observable.Observable$(S), []]),
      window: dart.fnType(observable.Observable$(async.Stream$(T)), [async.Stream]),
      windowCount: dart.fnType(observable.Observable$(async.Stream$(T)), [core.int], [core.int]),
      windowTest: dart.fnType(observable.Observable$(async.Stream$(T)), [dart.fnType(core.bool, [T])]),
      windowTime: dart.fnType(observable.Observable$(async.Stream$(T)), [core.Duration]),
      withLatestFrom: dart.gFnType((S, R) => [observable.Observable$(R), [async.Stream$(S), dart.fnType(R, [T, S])]]),
      withLatestFromList: dart.fnType(observable.Observable$(core.List$(T)), [core.Object]),
      withLatestFrom2: dart.gFnType((A, B, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), dart.fnType(R, [T, A, B])]]),
      withLatestFrom3: dart.gFnType((A, B, C, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), dart.fnType(R, [T, A, B, C])]]),
      withLatestFrom4: dart.gFnType((A, B, C, D, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), dart.fnType(R, [T, A, B, C, D])]]),
      withLatestFrom5: dart.gFnType((A, B, C, D, E, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), async.Stream$(E), dart.fnType(R, [T, A, B, C, D, E])]]),
      withLatestFrom6: dart.gFnType((A, B, C, D, E, F, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), async.Stream$(E), async.Stream$(F), dart.fnType(R, [T, A, B, C, D, E, F])]]),
      withLatestFrom7: dart.gFnType((A, B, C, D, E, F, G, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), async.Stream$(E), async.Stream$(F), async.Stream$(G), dart.fnType(R, [T, A, B, C, D, E, F, G])]]),
      withLatestFrom8: dart.gFnType((A, B, C, D, E, F, G, H, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), async.Stream$(E), async.Stream$(F), async.Stream$(G), async.Stream$(H), dart.fnType(R, [T, A, B, C, D, E, F, G, H])]]),
      withLatestFrom9: dart.gFnType((A, B, C, D, E, F, G, H, I, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), async.Stream$(E), async.Stream$(F), async.Stream$(G), async.Stream$(H), async.Stream$(I), dart.fnType(R, [T, A, B, C, D, E, F, G, H, I])]]),
      zipWith: dart.gFnType((S, R) => [observable.Observable$(R), [async.Stream$(S), dart.fnType(R, [T, S])]]),
      publish: dart.fnType(connectable_observable.ConnectableObservable$(T), []),
      publishValue: dart.fnType(connectable_observable.ValueConnectableObservable$(T), []),
      publishValueSeeded: dart.fnType(connectable_observable.ValueConnectableObservable$(T), [core.Object]),
      publishReplay: dart.fnType(connectable_observable.ReplayConnectableObservable$(T), [], {maxSize: core.int}, {}),
      share: dart.fnType(observable.Observable$(T), []),
      shareValue: dart.fnType(value_observable.ValueObservable$(T), []),
      shareValueSeeded: dart.fnType(value_observable.ValueObservable$(T), [core.Object]),
      shareReplay: dart.fnType(replay_observable.ReplayObservable$(T), [], {maxSize: core.int}, {})
    }));
    dart.setGetterSignature(Observable, () => ({
      __proto__: dart.getGetters(Observable.__proto__),
      first: as_observable_future.AsObservableFuture$(T),
      isEmpty: as_observable_future.AsObservableFuture$(core.bool),
      last: as_observable_future.AsObservableFuture$(T),
      length: as_observable_future.AsObservableFuture$(core.int),
      single: as_observable_future.AsObservableFuture$(T)
    }));
    dart.setLibraryUri(Observable, "package:rxdart/src/observables/observable.dart");
    dart.setFieldSignature(Observable, () => ({
      __proto__: dart.getFields(Observable.__proto__),
      [_stream]: dart.finalFieldType(async.Stream$(T))
    }));
    return Observable;
  });
  observable.Observable = observable.Observable$();
  dart.addTypeTests(observable.Observable, _is_Observable_default);
  const _is_Subject_default = Symbol('_is_Subject_default');
  subject.Subject$ = dart.generic(T => {
    let _StreamSinkWrapperOfT = () => (_StreamSinkWrapperOfT = dart.constFn(subject._StreamSinkWrapper$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class Subject extends observable.Observable$(T) {
      get sink() {
        return new (_StreamSinkWrapperOfT()).new(this);
      }
      get onListen() {
        return this[_controller].onListen;
      }
      set onListen(onListenHandler) {
        this[_controller].onListen = onListenHandler;
      }
      get stream() {
        return this;
      }
      get onPause() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      set onPause(onPauseHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      get onResume() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      set onResume(onResumeHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      get onCancel() {
        return this[_controller].onCancel;
      }
      set onCancel(onCancelHandler) {
        this[_controller].onCancel = onCancelHandler;
      }
      get isClosed() {
        return this[_controller].isClosed;
      }
      get isPaused() {
        return this[_controller].isPaused;
      }
      get hasListener() {
        return this[_controller].hasListener;
      }
      get done() {
        return this[_controller].done;
      }
      addError(error, stackTrace = null) {
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add an error while items are being added from addStream"));
        }
        this[_addError](error, stackTrace);
      }
      [_addError](error, stackTrace = null) {
        this.onAddError(error, stackTrace);
        this[_controller].addError(error, stackTrace);
      }
      onAddError(error, stackTrace = null) {
      }
      addStream(source, opts) {
        StreamOfT()._check(source);
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        let completer = CompleterOfT().new();
        this[_isAddingStreamItems] = true;
        source.listen(dart.fn(event => {
          this[_add](event);
        }, TToNull()), {onError: dart.fn((e, s) => {
            this[_controller].addError(e, s);
            if (dart.test(cancelOnError)) {
              this[_isAddingStreamItems] = false;
              completer.completeError(e);
            }
          }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
            this[_isAddingStreamItems] = false;
            completer.complete();
          }, VoidToNull()), cancelOnError: cancelOnError});
        return completer.future;
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        this[_add](event);
      }
      [_add](event) {
        this.onAdd(event);
        this[_controller].add(event);
      }
      onAdd(event) {
        T._check(event);
      }
      close() {
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot close the subject while items are being added from addStream"));
        }
        return this[_controller].close();
      }
    }
    (Subject.new = function(controller, observable) {
      this[_isAddingStreamItems] = false;
      this[_controller] = controller;
      Subject.__proto__.new.call(this, observable);
      ;
    }).prototype = Subject.prototype;
    dart.addTypeTests(Subject);
    Subject.prototype[_is_Subject_default] = true;
    Subject[dart.implements] = () => [async.StreamController$(T)];
    dart.setMethodSignature(Subject, () => ({
      __proto__: dart.getMethods(Subject.__proto__),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_addError]: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      onAddError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object], {cancelOnError: core.bool}, {}),
      add: dart.fnType(dart.void, [core.Object]),
      [_add]: dart.fnType(dart.void, [T]),
      onAdd: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(Subject, () => ({
      __proto__: dart.getGetters(Subject.__proto__),
      sink: async.StreamSink$(T),
      onListen: dart.fnType(dart.void, []),
      stream: observable.Observable$(T),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.dynamic, []),
      isClosed: core.bool,
      isPaused: core.bool,
      hasListener: core.bool,
      done: async.Future
    }));
    dart.setSetterSignature(Subject, () => ({
      __proto__: dart.getSetters(Subject.__proto__),
      onListen: dart.fnType(dart.void, []),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(Subject, "package:rxdart/src/subjects/subject.dart");
    dart.setFieldSignature(Subject, () => ({
      __proto__: dart.getFields(Subject.__proto__),
      [_controller]: dart.finalFieldType(async.StreamController$(T)),
      [_isAddingStreamItems]: dart.fieldType(core.bool)
    }));
    return Subject;
  });
  subject.Subject = subject.Subject$();
  dart.addTypeTests(subject.Subject, _is_Subject_default);
  const _is_ReplaySubject_default = Symbol('_is_ReplaySubject_default');
  replay_subject.ReplaySubject$ = dart.generic(T => {
    class ReplaySubject extends subject.Subject$(T) {
      static new(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let queue = new (collection$.ListQueue$(T)).new();
        return new (replay_subject.ReplaySubject$(T)).__(controller, observable.Observable$(T).defer(dart.fn(() => new (observable.Observable$(T)).new(controller.stream).startWithMany(queue[$toList]({growable: false})), dart.fnType(observable.Observable$(T), [])), {reusable: true}), queue, maxSize);
      }
      onAdd(event) {
        T._check(event);
        if (this[_queue$][$length] == this[_maxSize$]) {
          this[_queue$].removeFirst();
        }
        this[_queue$].add(event);
      }
      get values() {
        return this[_queue$][$toList]({growable: false});
      }
    }
    (ReplaySubject.__ = function(controller, observable, _queue, _maxSize) {
      this[_queue$] = _queue;
      this[_maxSize$] = _maxSize;
      ReplaySubject.__proto__.new.call(this, controller, observable);
      ;
    }).prototype = ReplaySubject.prototype;
    dart.addTypeTests(ReplaySubject);
    ReplaySubject.prototype[_is_ReplaySubject_default] = true;
    ReplaySubject[dart.implements] = () => [replay_observable.ReplayObservable$(T)];
    dart.setGetterSignature(ReplaySubject, () => ({
      __proto__: dart.getGetters(ReplaySubject.__proto__),
      values: core.List$(T)
    }));
    dart.setLibraryUri(ReplaySubject, "package:rxdart/src/subjects/replay_subject.dart");
    dart.setFieldSignature(ReplaySubject, () => ({
      __proto__: dart.getFields(ReplaySubject.__proto__),
      [_queue$]: dart.finalFieldType(collection$.Queue$(T)),
      [_maxSize$]: dart.finalFieldType(core.int)
    }));
    return ReplaySubject;
  });
  replay_subject.ReplaySubject = replay_subject.ReplaySubject$();
  dart.addTypeTests(replay_subject.ReplaySubject, _is_ReplaySubject_default);
  const _target$ = dart.privateName(subject, "_target");
  const _is__StreamSinkWrapper_default = Symbol('_is__StreamSinkWrapper_default');
  subject._StreamSinkWrapper$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class _StreamSinkWrapper extends core.Object {
      add(data) {
        T._check(data);
        this[_target$].add(data);
      }
      addError(error, stackTrace = null) {
        this[_target$].addError(error, stackTrace);
      }
      close() {
        return this[_target$].close();
      }
      addStream(source) {
        StreamOfT()._check(source);
        return this[_target$].addStream(source);
      }
      get done() {
        return this[_target$].done;
      }
    }
    (_StreamSinkWrapper.new = function(_target) {
      this[_target$] = _target;
      ;
    }).prototype = _StreamSinkWrapper.prototype;
    dart.addTypeTests(_StreamSinkWrapper);
    _StreamSinkWrapper.prototype[_is__StreamSinkWrapper_default] = true;
    _StreamSinkWrapper[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getMethods(_StreamSinkWrapper.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(async.Future, []),
      addStream: dart.fnType(async.Future, [core.Object])
    }));
    dart.setGetterSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getGetters(_StreamSinkWrapper.__proto__),
      done: async.Future
    }));
    dart.setLibraryUri(_StreamSinkWrapper, "package:rxdart/src/subjects/subject.dart");
    dart.setFieldSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getFields(_StreamSinkWrapper.__proto__),
      [_target$]: dart.finalFieldType(async.StreamController$(T))
    }));
    return _StreamSinkWrapper;
  });
  subject._StreamSinkWrapper = subject._StreamSinkWrapper$();
  dart.addTypeTests(subject._StreamSinkWrapper, _is__StreamSinkWrapper_default);
  const _is_ThrottleStreamTransformer_default = Symbol('_is_ThrottleStreamTransformer_default');
  throttle.ThrottleStreamTransformer$ = dart.generic(T => {
    let TToT = () => (TToT = dart.constFn(dart.fnType(T, [T])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToT = () => (IterableOfTToT = dart.constFn(dart.fnType(T, [IterableOfT()])))();
    class ThrottleStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, T) {}
    (ThrottleStreamTransformer.new = function(window, opts) {
      let trailing = opts && 'trailing' in opts ? opts.trailing : false;
      ThrottleStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.eventAfterLastWindow, window, {onWindowStart: dart.test(trailing) ? null : dart.fn(event => event, TToT()), onWindowEnd: dart.test(trailing) ? dart.fn(queue => queue[$last], IterableOfTToT()) : null});
      if (!(window != null)) dart.assertFailed("window stream factory cannot be null", "org-dartlang-app:///packages/rxdart/src/transformers/backpressure/throttle.dart", 24, 12, "window != null");
    }).prototype = ThrottleStreamTransformer.prototype;
    dart.addTypeTests(ThrottleStreamTransformer);
    ThrottleStreamTransformer.prototype[_is_ThrottleStreamTransformer_default] = true;
    dart.setLibraryUri(ThrottleStreamTransformer, "package:rxdart/src/transformers/backpressure/throttle.dart");
    return ThrottleStreamTransformer;
  });
  throttle.ThrottleStreamTransformer = throttle.ThrottleStreamTransformer$();
  dart.addTypeTests(throttle.ThrottleStreamTransformer, _is_ThrottleStreamTransformer_default);
  const _is_SampleStreamTransformer_default = Symbol('_is_SampleStreamTransformer_default');
  sample.SampleStreamTransformer$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToT = () => (IterableOfTToT = dart.constFn(dart.fnType(T, [IterableOfT()])))();
    class SampleStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, T) {}
    (SampleStreamTransformer.new = function(window) {
      SampleStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, window, {onWindowEnd: dart.fn(queue => queue[$last], IterableOfTToT())});
      if (!(window != null)) dart.assertFailed("window stream factory cannot be null", "org-dartlang-app:///packages/rxdart/src/transformers/backpressure/sample.dart", 23, 12, "window != null");
    }).prototype = SampleStreamTransformer.prototype;
    dart.addTypeTests(SampleStreamTransformer);
    SampleStreamTransformer.prototype[_is_SampleStreamTransformer_default] = true;
    dart.setLibraryUri(SampleStreamTransformer, "package:rxdart/src/transformers/backpressure/sample.dart");
    return SampleStreamTransformer;
  });
  sample.SampleStreamTransformer = sample.SampleStreamTransformer$();
  dart.addTypeTests(sample.SampleStreamTransformer, _is_SampleStreamTransformer_default);
  const _is_PairwiseStreamTransformer_default = Symbol('_is_PairwiseStreamTransformer_default');
  pairwise.PairwiseStreamTransformer$ = dart.generic(T => {
    let TToNeverStreamOfvoid = () => (TToNeverStreamOfvoid = dart.constFn(dart.fnType(NeverStreamOfvoid(), [T])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToIterableOfT = () => (IterableOfTToIterableOfT = dart.constFn(dart.fnType(IterableOfT(), [IterableOfT()])))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class PairwiseStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.Iterable$(T)) {}
    (PairwiseStreamTransformer.new = function() {
      PairwiseStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, dart.fn(_ => new (NeverStreamOfvoid()).new(), TToNeverStreamOfvoid()), {onWindowEnd: dart.fn(queue => queue, IterableOfTToIterableOfT()), startBufferEvery: 1, closeWindowWhen: dart.fn(queue => queue[$length] === 2, IterableOfTTobool()), dispatchOnClose: false});
      ;
    }).prototype = PairwiseStreamTransformer.prototype;
    dart.addTypeTests(PairwiseStreamTransformer);
    PairwiseStreamTransformer.prototype[_is_PairwiseStreamTransformer_default] = true;
    dart.setLibraryUri(PairwiseStreamTransformer, "package:rxdart/src/transformers/backpressure/pairwise.dart");
    return PairwiseStreamTransformer;
  });
  pairwise.PairwiseStreamTransformer = pairwise.PairwiseStreamTransformer$();
  dart.addTypeTests(pairwise.PairwiseStreamTransformer, _is_PairwiseStreamTransformer_default);
  const _is_DebounceStreamTransformer_default = Symbol('_is_DebounceStreamTransformer_default');
  debounce.DebounceStreamTransformer$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToT = () => (IterableOfTToT = dart.constFn(dart.fnType(T, [IterableOfT()])))();
    class DebounceStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, T) {}
    (DebounceStreamTransformer.new = function(window) {
      DebounceStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.everyEvent, window, {onWindowEnd: dart.fn(queue => queue[$last], IterableOfTToT())});
      if (!(window != null)) dart.assertFailed("window stream factory cannot be null", "org-dartlang-app:///packages/rxdart/src/transformers/backpressure/debounce.dart", 35, 12, "window != null");
    }).prototype = DebounceStreamTransformer.prototype;
    dart.addTypeTests(DebounceStreamTransformer);
    DebounceStreamTransformer.prototype[_is_DebounceStreamTransformer_default] = true;
    dart.setLibraryUri(DebounceStreamTransformer, "package:rxdart/src/transformers/backpressure/debounce.dart");
    return DebounceStreamTransformer;
  });
  debounce.DebounceStreamTransformer = debounce.DebounceStreamTransformer$();
  dart.addTypeTests(debounce.DebounceStreamTransformer, _is_DebounceStreamTransformer_default);
  const _is_BufferStreamTransformer_default = Symbol('_is_BufferStreamTransformer_default');
  buffer.BufferStreamTransformer$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToListOfT = () => (ListOfTToListOfT = dart.constFn(dart.fnType(ListOfT(), [ListOfT()])))();
    class BufferStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.List$(T)) {}
    (BufferStreamTransformer.new = function(window) {
      BufferStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, window, {onWindowEnd: dart.fn(queue => queue, ListOfTToListOfT()), ignoreEmptyWindows: false});
      if (window == null) dart.throw(new core.ArgumentError.notNull("window"));
    }).prototype = BufferStreamTransformer.prototype;
    dart.addTypeTests(BufferStreamTransformer);
    BufferStreamTransformer.prototype[_is_BufferStreamTransformer_default] = true;
    dart.setLibraryUri(BufferStreamTransformer, "package:rxdart/src/transformers/backpressure/buffer.dart");
    return BufferStreamTransformer;
  });
  buffer.BufferStreamTransformer = buffer.BufferStreamTransformer$();
  dart.addTypeTests(buffer.BufferStreamTransformer, _is_BufferStreamTransformer_default);
  const _is_BufferCountStreamTransformer_default = Symbol('_is_BufferCountStreamTransformer_default');
  buffer.BufferCountStreamTransformer$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToListOfT = () => (ListOfTToListOfT = dart.constFn(dart.fnType(ListOfT(), [ListOfT()])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class BufferCountStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.List$(T)) {}
    (BufferCountStreamTransformer.new = function(count, startBufferEvery = 0) {
      BufferCountStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => queue, ListOfTToListOfT()), startBufferEvery: startBufferEvery, closeWindowWhen: dart.fn(queue => queue[$length] == count, IterableOfTTobool())});
      if (count == null) dart.throw(new core.ArgumentError.notNull("count"));
      if (startBufferEvery == null) {
        dart.throw(new core.ArgumentError.notNull("startBufferEvery"));
      }
      if (dart.notNull(count) < 1) dart.throw(new core.ArgumentError.value(count, "count"));
      if (dart.notNull(startBufferEvery) < 0) {
        dart.throw(new core.ArgumentError.value(startBufferEvery, "startBufferEvery"));
      }
    }).prototype = BufferCountStreamTransformer.prototype;
    dart.addTypeTests(BufferCountStreamTransformer);
    BufferCountStreamTransformer.prototype[_is_BufferCountStreamTransformer_default] = true;
    dart.setLibraryUri(BufferCountStreamTransformer, "package:rxdart/src/transformers/backpressure/buffer.dart");
    return BufferCountStreamTransformer;
  });
  buffer.BufferCountStreamTransformer = buffer.BufferCountStreamTransformer$();
  dart.addTypeTests(buffer.BufferCountStreamTransformer, _is_BufferCountStreamTransformer_default);
  const _is_BufferTestStreamTransformer_default = Symbol('_is_BufferTestStreamTransformer_default');
  buffer.BufferTestStreamTransformer$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToListOfT = () => (ListOfTToListOfT = dart.constFn(dart.fnType(ListOfT(), [ListOfT()])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class BufferTestStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.List$(T)) {}
    (BufferTestStreamTransformer.new = function(test) {
      BufferTestStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => queue, ListOfTToListOfT()), closeWindowWhen: dart.fn(queue => test(queue[$last]), IterableOfTTobool())});
      if (test == null) dart.throw(new core.ArgumentError.notNull("test"));
    }).prototype = BufferTestStreamTransformer.prototype;
    dart.addTypeTests(BufferTestStreamTransformer);
    BufferTestStreamTransformer.prototype[_is_BufferTestStreamTransformer_default] = true;
    dart.setLibraryUri(BufferTestStreamTransformer, "package:rxdart/src/transformers/backpressure/buffer.dart");
    return BufferTestStreamTransformer;
  });
  buffer.BufferTestStreamTransformer = buffer.BufferTestStreamTransformer$();
  dart.addTypeTests(buffer.BufferTestStreamTransformer, _is_BufferTestStreamTransformer_default);
  const _is_TypeToken_default = Symbol('_is_TypeToken_default');
  type_token.TypeToken$ = dart.generic(S => {
    class TypeToken extends core.Object {
      isType(other) {
        return S.is(other);
      }
      toType(other) {
        return S.as(other);
      }
    }
    (TypeToken.new = function() {
      ;
    }).prototype = TypeToken.prototype;
    dart.addTypeTests(TypeToken);
    TypeToken.prototype[_is_TypeToken_default] = true;
    dart.setMethodSignature(TypeToken, () => ({
      __proto__: dart.getMethods(TypeToken.__proto__),
      isType: dart.fnType(core.bool, [dart.dynamic]),
      toType: dart.fnType(S, [dart.dynamic])
    }));
    dart.setLibraryUri(TypeToken, "package:rxdart/src/utils/type_token.dart");
    return TypeToken;
  });
  type_token.TypeToken = type_token.TypeToken$();
  dart.addTypeTests(type_token.TypeToken, _is_TypeToken_default);
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  dart.defineLazy(type_token, {
    /*type_token.kBool*/get kBool() {
      return C5 || CT.C5;
    },
    /*type_token.kDouble*/get kDouble() {
      return C6 || CT.C6;
    },
    /*type_token.kInt*/get kInt() {
      return C7 || CT.C7;
    },
    /*type_token.kNum*/get kNum() {
      return C8 || CT.C8;
    },
    /*type_token.kString*/get kString() {
      return C9 || CT.C9;
    },
    /*type_token.kSymbol*/get kSymbol() {
      return C10 || CT.C10;
    }
  });
  const _transformer$ = dart.privateName(with_latest_from, "_transformer");
  const _is_WithLatestFromStreamTransformer_default = Symbol('_is_WithLatestFromStreamTransformer_default');
  with_latest_from.WithLatestFromStreamTransformer$ = dart.generic((T, S, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class WithLatestFromStreamTransformer extends async.StreamTransformerBase$(T, R) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$].bind(stream);
      }
      static withList(T, latestFromStreams) {
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, T, core.List$(T))).new(latestFromStreams, dart.fn((s, values) => {
          let t4;
          t4 = _interceptors.JSArray$(T).of([s]);
          t4[$addAll](values);
          return t4;
        }, dart.fnType(core.List$(T), [T, core.List$(T)])));
      }
      static with1(T, S, R, latestFromStream, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, S, R)).new(_interceptors.JSArray$(async.Stream$(S)).of([latestFromStream]), dart.fn((s, values) => fn(s, values[$_get](0)), dart.fnType(R, [T, core.List$(S)])));
      }
      static with2(T, A, B, R, latestFromStream1, latestFromStream2, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [T, core.List])));
      }
      static with3(T, A, B, C, R, latestFromStream1, latestFromStream2, latestFromStream3, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [T, core.List])));
      }
      static with4(T, A, B, C, D, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [T, core.List])));
      }
      static with5(T, A, B, C, D, E, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [T, core.List])));
      }
      static with6(T, A, B, C, D, E, F, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [T, core.List])));
      }
      static with7(T, A, B, C, D, E, F, G, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [T, core.List])));
      }
      static with8(T, A, B, C, D, E, F, G, H, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [T, core.List])));
      }
      static with9(T, A, B, C, D, E, F, G, H, I, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [T, core.List])));
      }
      static _buildTransformer(T, S, R, latestFromStreams, fn) {
        if (latestFromStreams == null) {
          dart.throw(new core.ArgumentError.new("latestFromStreams cannot be null"));
        }
        if (dart.test(latestFromStreams[$any](dart.fn(s => s == null, dart.fnType(core.bool, [async.Stream$(S)]))))) {
          dart.throw(new core.ArgumentError.new("All streams must be not null"));
        }
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("combiner cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, R)).new(dart.fn((input, cancelOnError) => {
          let len = latestFromStreams[$length];
          let controller = null;
          let subscription = null;
          let subscriptions = core.List$(async.StreamSubscription$(S)).new(len);
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
              let latestValues = core.List$(S).new(len);
              let hasValues = ListOfbool().filled(len, false);
              subscription = input.listen(dart.fn(value => {
                if (dart.test(hasValues[$every](dart.fn(hasValue => hasValue, boolTobool())))) {
                  try {
                    controller.add(fn(value, core.List$(S).unmodifiable(latestValues)));
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone});
              let index = 0;
              for (let latestFromStream of latestFromStreams) {
                let currentIndex = index;
                subscriptions[$_set](index, latestFromStream.listen(dart.fn(latest => {
                  hasValues[$_set](currentIndex, true);
                  latestValues[$_set](currentIndex, latest);
                }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError}));
                index = index + 1;
              }
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              let t5;
              let list = (t5 = ListOfStreamSubscription().of(subscriptions), t5[$add](subscription), t5);
              let cancelFutures = list[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()));
              return async.Future.wait(dart.dynamic, cancelFutures);
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(R), [async.Stream$(T), core.bool])));
      }
    }
    (WithLatestFromStreamTransformer.new = function(latestFromStreams, fn) {
      this[_transformer$] = with_latest_from.WithLatestFromStreamTransformer._buildTransformer(T, S, R, latestFromStreams, fn);
      WithLatestFromStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = WithLatestFromStreamTransformer.prototype;
    dart.addTypeTests(WithLatestFromStreamTransformer);
    WithLatestFromStreamTransformer.prototype[_is_WithLatestFromStreamTransformer_default] = true;
    dart.setMethodSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getMethods(WithLatestFromStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(R), [core.Object])
    }));
    dart.setLibraryUri(WithLatestFromStreamTransformer, "package:rxdart/src/transformers/with_latest_from.dart");
    dart.setFieldSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getFields(WithLatestFromStreamTransformer.__proto__),
      [_transformer$]: dart.finalFieldType(async.StreamTransformer$(T, R))
    }));
    return WithLatestFromStreamTransformer;
  });
  with_latest_from.WithLatestFromStreamTransformer = with_latest_from.WithLatestFromStreamTransformer$();
  dart.addTypeTests(with_latest_from.WithLatestFromStreamTransformer, _is_WithLatestFromStreamTransformer_default);
  const _transformer$0 = dart.privateName(where_type, "_transformer");
  const _is_WhereTypeStreamTransformer_default = Symbol('_is_WhereTypeStreamTransformer_default');
  where_type.WhereTypeStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class WhereTypeStreamTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return this[_transformer$0].bind(stream);
      }
      static _buildTransformer(S, T) {
        return new (async._StreamSubscriptionTransformer$(S, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(event => {
                try {
                  if (T.is(event)) {
                    controller.add(event);
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (WhereTypeStreamTransformer.new = function() {
      this[_transformer$0] = where_type.WhereTypeStreamTransformer._buildTransformer(S, T);
      WhereTypeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = WhereTypeStreamTransformer.prototype;
    dart.addTypeTests(WhereTypeStreamTransformer);
    WhereTypeStreamTransformer.prototype[_is_WhereTypeStreamTransformer_default] = true;
    dart.setMethodSignature(WhereTypeStreamTransformer, () => ({
      __proto__: dart.getMethods(WhereTypeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(WhereTypeStreamTransformer, "package:rxdart/src/transformers/where_type.dart");
    dart.setFieldSignature(WhereTypeStreamTransformer, () => ({
      __proto__: dart.getFields(WhereTypeStreamTransformer.__proto__),
      [_transformer$0]: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return WhereTypeStreamTransformer;
  });
  where_type.WhereTypeStreamTransformer = where_type.WhereTypeStreamTransformer$();
  dart.addTypeTests(where_type.WhereTypeStreamTransformer, _is_WhereTypeStreamTransformer_default);
  const _transformer$1 = dart.privateName(timestamp, "_transformer");
  const _is_Timestamped_default = Symbol('_is_Timestamped_default');
  const value$ = dart.privateName(timestamp, "Timestamped.value");
  const timestamp$ = dart.privateName(timestamp, "Timestamped.timestamp");
  timestamp.Timestamped$ = dart.generic(T => {
    class Timestamped extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get timestamp() {
        return this[timestamp$];
      }
      set timestamp(value) {
        super.timestamp = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return timestamp.Timestamped.is(other) && dart.equals(this.timestamp, other.timestamp) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.timestamp)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeStamp{timestamp: " + dart.str(this.timestamp) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (Timestamped.new = function(timestamp, value) {
      this[timestamp$] = timestamp;
      this[value$] = value;
      ;
    }).prototype = Timestamped.prototype;
    dart.addTypeTests(Timestamped);
    Timestamped.prototype[_is_Timestamped_default] = true;
    dart.setMethodSignature(Timestamped, () => ({
      __proto__: dart.getMethods(Timestamped.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(Timestamped, "package:rxdart/src/transformers/timestamp.dart");
    dart.setFieldSignature(Timestamped, () => ({
      __proto__: dart.getFields(Timestamped.__proto__),
      value: dart.finalFieldType(T),
      timestamp: dart.finalFieldType(core.DateTime)
    }));
    dart.defineExtensionMethods(Timestamped, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Timestamped, ['hashCode']);
    return Timestamped;
  });
  timestamp.Timestamped = timestamp.Timestamped$();
  dart.addTypeTests(timestamp.Timestamped, _is_Timestamped_default);
  const _is_TimestampStreamTransformer_default = Symbol('_is_TimestampStreamTransformer_default');
  timestamp.TimestampStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TimestampStreamTransformer extends async.StreamTransformerBase$(T, timestamp.Timestamped$(T)) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$1].bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, timestamp.Timestamped$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(timestamp.Timestamped$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.map(timestamp.Timestamped$(T), dart.fn(value => new (timestamp.Timestamped$(T)).new(new core.DateTime.now(), value), dart.fnType(timestamp.Timestamped$(T), [T]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(timestamp.Timestamped$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimestampStreamTransformer.new = function() {
      this[_transformer$1] = timestamp.TimestampStreamTransformer._buildTransformer(T);
      TimestampStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TimestampStreamTransformer.prototype;
    dart.addTypeTests(TimestampStreamTransformer);
    TimestampStreamTransformer.prototype[_is_TimestampStreamTransformer_default] = true;
    dart.setMethodSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getMethods(TimestampStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(timestamp.Timestamped$(T)), [core.Object])
    }));
    dart.setLibraryUri(TimestampStreamTransformer, "package:rxdart/src/transformers/timestamp.dart");
    dart.setFieldSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getFields(TimestampStreamTransformer.__proto__),
      [_transformer$1]: dart.finalFieldType(async.StreamTransformer$(T, timestamp.Timestamped$(T)))
    }));
    return TimestampStreamTransformer;
  });
  timestamp.TimestampStreamTransformer = timestamp.TimestampStreamTransformer$();
  dart.addTypeTests(timestamp.TimestampStreamTransformer, _is_TimestampStreamTransformer_default);
  const _transformer$2 = dart.privateName(time_interval, "_transformer");
  const _is_TimeInterval_default = Symbol('_is_TimeInterval_default');
  const interval$ = dart.privateName(time_interval, "TimeInterval.interval");
  const value$0 = dart.privateName(time_interval, "TimeInterval.value");
  time_interval.TimeInterval$ = dart.generic(T => {
    class TimeInterval extends core.Object {
      get interval() {
        return this[interval$];
      }
      set interval(value) {
        super.interval = value;
      }
      get value() {
        return this[value$0];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return time_interval.TimeInterval.is(other) && dart.equals(this.interval, other.interval) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.interval)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeInterval{interval: " + dart.str(this.interval) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (TimeInterval.new = function(value, interval) {
      this[value$0] = value;
      this[interval$] = interval;
      ;
    }).prototype = TimeInterval.prototype;
    dart.addTypeTests(TimeInterval);
    TimeInterval.prototype[_is_TimeInterval_default] = true;
    dart.setMethodSignature(TimeInterval, () => ({
      __proto__: dart.getMethods(TimeInterval.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(TimeInterval, "package:rxdart/src/transformers/time_interval.dart");
    dart.setFieldSignature(TimeInterval, () => ({
      __proto__: dart.getFields(TimeInterval.__proto__),
      interval: dart.finalFieldType(core.Duration),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(TimeInterval, ['_equals', 'toString']);
    dart.defineExtensionAccessors(TimeInterval, ['hashCode']);
    return TimeInterval;
  });
  time_interval.TimeInterval = time_interval.TimeInterval$();
  dart.addTypeTests(time_interval.TimeInterval, _is_TimeInterval_default);
  const _is_TimeIntervalStreamTransformer_default = Symbol('_is_TimeIntervalStreamTransformer_default');
  time_interval.TimeIntervalStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TimeIntervalStreamTransformer extends async.StreamTransformerBase$(T, time_interval.TimeInterval$(T)) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$2].bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, time_interval.TimeInterval$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(time_interval.TimeInterval$(T)).new({sync: true, onListen: dart.fn(() => {
              let t6;
              let stopwatch = (t6 = new core.Stopwatch.new(), t6.start(), t6);
              let ems = null;
              subscription = input.listen(dart.fn(value => {
                let t7;
                ems = stopwatch.elapsedMicroseconds;
                stopwatch.stop();
                try {
                  controller.add(new (time_interval.TimeInterval$(T)).new(value, new core.Duration.new({microseconds: ems})));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
                stopwatch = (t7 = new core.Stopwatch.new(), t7.start(), t7);
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  stopwatch.stop();
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(time_interval.TimeInterval$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimeIntervalStreamTransformer.new = function() {
      this[_transformer$2] = time_interval.TimeIntervalStreamTransformer._buildTransformer(T);
      TimeIntervalStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TimeIntervalStreamTransformer.prototype;
    dart.addTypeTests(TimeIntervalStreamTransformer);
    TimeIntervalStreamTransformer.prototype[_is_TimeIntervalStreamTransformer_default] = true;
    dart.setMethodSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(TimeIntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(time_interval.TimeInterval$(T)), [core.Object])
    }));
    dart.setLibraryUri(TimeIntervalStreamTransformer, "package:rxdart/src/transformers/time_interval.dart");
    dart.setFieldSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getFields(TimeIntervalStreamTransformer.__proto__),
      [_transformer$2]: dart.finalFieldType(async.StreamTransformer$(T, time_interval.TimeInterval$(T)))
    }));
    return TimeIntervalStreamTransformer;
  });
  time_interval.TimeIntervalStreamTransformer = time_interval.TimeIntervalStreamTransformer$();
  dart.addTypeTests(time_interval.TimeIntervalStreamTransformer, _is_TimeIntervalStreamTransformer_default);
  const _transformer$3 = dart.privateName(take_until, "_transformer");
  const _is_TakeUntilStreamTransformer_default = Symbol('_is_TakeUntilStreamTransformer_default');
  take_until.TakeUntilStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TakeUntilStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$3].bind(stream);
      }
      static _buildTransformer(T, S, otherStream) {
        if (otherStream == null) {
          dart.throw(new core.ArgumentError.new("take until stream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              otherSubscription = otherStream.listen(dart.fn(_ => onDone(), dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError, onDone: onDone});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              let t7, t7$;
              yield (t7 = otherSubscription, t7 == null ? null : t7.cancel());
              yield (t7$ = subscription, t7$ == null ? null : t7$.cancel());
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (TakeUntilStreamTransformer.new = function(otherStream) {
      this[_transformer$3] = take_until.TakeUntilStreamTransformer._buildTransformer(T, S, otherStream);
      TakeUntilStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TakeUntilStreamTransformer.prototype;
    dart.addTypeTests(TakeUntilStreamTransformer);
    TakeUntilStreamTransformer.prototype[_is_TakeUntilStreamTransformer_default] = true;
    dart.setMethodSignature(TakeUntilStreamTransformer, () => ({
      __proto__: dart.getMethods(TakeUntilStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(TakeUntilStreamTransformer, "package:rxdart/src/transformers/take_until.dart");
    dart.setFieldSignature(TakeUntilStreamTransformer, () => ({
      __proto__: dart.getFields(TakeUntilStreamTransformer.__proto__),
      [_transformer$3]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return TakeUntilStreamTransformer;
  });
  take_until.TakeUntilStreamTransformer = take_until.TakeUntilStreamTransformer$();
  dart.addTypeTests(take_until.TakeUntilStreamTransformer, _is_TakeUntilStreamTransformer_default);
  const _transformer$4 = dart.privateName(switch_map, "_transformer");
  const _is_SwitchMapStreamTransformer_default = Symbol('_is_SwitchMapStreamTransformer_default');
  switch_map.SwitchMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SwitchMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$4].bind(stream);
      }
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let leftClosed = false;
          let rightClosed = false;
          let hasMainEvent = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                let t7;
                try {
                  t7 = otherSubscription;
                  t7 == null ? null : t7.cancel();
                  rightClosed = false;
                  hasMainEvent = true;
                  otherSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      rightClosed = true;
                      if (leftClosed) controller.close();
                    }, VoidToNull())});
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  leftClosed = true;
                  if (rightClosed || !hasMainEvent) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              let t8;
              subscription.pause(resumeSignal);
              t8 = otherSubscription;
              t8 == null ? null : t8.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t8;
              subscription.resume();
              t8 = otherSubscription;
              t8 == null ? null : t8.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              let t8;
              yield subscription.cancel();
              if (hasMainEvent) yield (t8 = otherSubscription, t8 == null ? null : t8.cancel());
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchMapStreamTransformer.new = function(mapper) {
      this[_transformer$4] = switch_map.SwitchMapStreamTransformer._buildTransformer(T, S, mapper);
      SwitchMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SwitchMapStreamTransformer.prototype;
    dart.addTypeTests(SwitchMapStreamTransformer);
    SwitchMapStreamTransformer.prototype[_is_SwitchMapStreamTransformer_default] = true;
    dart.setMethodSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(SwitchMapStreamTransformer, "package:rxdart/src/transformers/switch_map.dart");
    dart.setFieldSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchMapStreamTransformer.__proto__),
      [_transformer$4]: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return SwitchMapStreamTransformer;
  });
  switch_map.SwitchMapStreamTransformer = switch_map.SwitchMapStreamTransformer$();
  dart.addTypeTests(switch_map.SwitchMapStreamTransformer, _is_SwitchMapStreamTransformer_default);
  const _transformer$5 = dart.privateName(switch_if_empty, "_transformer");
  const _is_SwitchIfEmptyStreamTransformer_default = Symbol('_is_SwitchIfEmptyStreamTransformer_default');
  switch_if_empty.SwitchIfEmptyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SwitchIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$5].bind(stream);
      }
      static _buildTransformer(T, fallbackStream) {
        if (fallbackStream == null) {
          dart.throw(new core.ArgumentError.new("fallbackStream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let defaultSubscription = null;
          let switchSubscription = null;
          let hasEvent = false;
          function onDone() {
            let t8;
            if (dart.test(controller.isClosed)) return;
            controller.close();
            t8 = switchSubscription;
            t8 == null ? null : t8.cancel();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              defaultSubscription = input.listen(dart.fn(value => {
                hasEvent = true;
                controller.add(value);
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasEvent) {
                    controller.close();
                  } else {
                    switchSubscription = fallbackStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              let t8, t8$;
              t8 = defaultSubscription;
              t8 == null ? null : t8.pause(resumeSignal);
              t8$ = switchSubscription;
              t8$ == null ? null : t8$.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t8, t8$;
              t8 = defaultSubscription;
              t8 == null ? null : t8.resume();
              t8$ = switchSubscription;
              t8$ == null ? null : t8$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t8;
              t8 = defaultSubscription;
              return t8 == null ? null : t8.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchIfEmptyStreamTransformer.new = function(fallbackStream) {
      this[_transformer$5] = switch_if_empty.SwitchIfEmptyStreamTransformer._buildTransformer(T, fallbackStream);
      SwitchIfEmptyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SwitchIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(SwitchIfEmptyStreamTransformer);
    SwitchIfEmptyStreamTransformer.prototype[_is_SwitchIfEmptyStreamTransformer_default] = true;
    dart.setMethodSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(SwitchIfEmptyStreamTransformer, "package:rxdart/src/transformers/switch_if_empty.dart");
    dart.setFieldSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchIfEmptyStreamTransformer.__proto__),
      [_transformer$5]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return SwitchIfEmptyStreamTransformer;
  });
  switch_if_empty.SwitchIfEmptyStreamTransformer = switch_if_empty.SwitchIfEmptyStreamTransformer$();
  dart.addTypeTests(switch_if_empty.SwitchIfEmptyStreamTransformer, _is_SwitchIfEmptyStreamTransformer_default);
  const _transformer$6 = dart.privateName(start_with_many, "_transformer");
  const _is_StartWithManyStreamTransformer_default = Symbol('_is_StartWithManyStreamTransformer_default');
  start_with_many.StartWithManyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class StartWithManyStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$6].bind(stream);
      }
      static _buildTransformer(T, startValues) {
        if (startValues == null) {
          dart.throw(new core.ArgumentError.new("startValues cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              startValues[$forEach](dart.bind(controller, 'add'));
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithManyStreamTransformer.new = function(startValues) {
      this[_transformer$6] = start_with_many.StartWithManyStreamTransformer._buildTransformer(T, startValues);
      StartWithManyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = StartWithManyStreamTransformer.prototype;
    dart.addTypeTests(StartWithManyStreamTransformer);
    StartWithManyStreamTransformer.prototype[_is_StartWithManyStreamTransformer_default] = true;
    dart.setMethodSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithManyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(StartWithManyStreamTransformer, "package:rxdart/src/transformers/start_with_many.dart");
    dart.setFieldSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithManyStreamTransformer.__proto__),
      [_transformer$6]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return StartWithManyStreamTransformer;
  });
  start_with_many.StartWithManyStreamTransformer = start_with_many.StartWithManyStreamTransformer$();
  dart.addTypeTests(start_with_many.StartWithManyStreamTransformer, _is_StartWithManyStreamTransformer_default);
  const _transformer$7 = dart.privateName(start_with, "_transformer");
  const _is_StartWithStreamTransformer_default = Symbol('_is_StartWithStreamTransformer_default');
  start_with.StartWithStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class StartWithStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$7].bind(stream);
      }
      static _buildTransformer(T, startValue) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              try {
                controller.add(startValue);
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithStreamTransformer.new = function(startValue) {
      this[_transformer$7] = start_with.StartWithStreamTransformer._buildTransformer(T, startValue);
      StartWithStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = StartWithStreamTransformer.prototype;
    dart.addTypeTests(StartWithStreamTransformer);
    StartWithStreamTransformer.prototype[_is_StartWithStreamTransformer_default] = true;
    dart.setMethodSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(StartWithStreamTransformer, "package:rxdart/src/transformers/start_with.dart");
    dart.setFieldSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithStreamTransformer.__proto__),
      [_transformer$7]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return StartWithStreamTransformer;
  });
  start_with.StartWithStreamTransformer = start_with.StartWithStreamTransformer$();
  dart.addTypeTests(start_with.StartWithStreamTransformer, _is_StartWithStreamTransformer_default);
  const _transformer$8 = dart.privateName(skip_until, "_transformer");
  const _is_SkipUntilStreamTransformer_default = Symbol('_is_SkipUntilStreamTransformer_default');
  skip_until.SkipUntilStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SkipUntilStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$8].bind(stream);
      }
      static _buildTransformer(T, S, otherStream) {
        if (otherStream == null) {
          dart.throw(new core.ArgumentError.new("otherStream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let goTime = false;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(data => {
                if (goTime) {
                  controller.add(data);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              otherSubscription = otherStream.listen(dart.fn(_ => {
                goTime = true;
                otherSubscription.cancel();
              }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError, onDone: onDone});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              let t9, t9$;
              yield (t9 = otherSubscription, t9 == null ? null : t9.cancel());
              yield (t9$ = subscription, t9$ == null ? null : t9$.cancel());
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SkipUntilStreamTransformer.new = function(otherStream) {
      this[_transformer$8] = skip_until.SkipUntilStreamTransformer._buildTransformer(T, S, otherStream);
      SkipUntilStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SkipUntilStreamTransformer.prototype;
    dart.addTypeTests(SkipUntilStreamTransformer);
    SkipUntilStreamTransformer.prototype[_is_SkipUntilStreamTransformer_default] = true;
    dart.setMethodSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getMethods(SkipUntilStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(SkipUntilStreamTransformer, "package:rxdart/src/transformers/skip_until.dart");
    dart.setFieldSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getFields(SkipUntilStreamTransformer.__proto__),
      [_transformer$8]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return SkipUntilStreamTransformer;
  });
  skip_until.SkipUntilStreamTransformer = skip_until.SkipUntilStreamTransformer$();
  dart.addTypeTests(skip_until.SkipUntilStreamTransformer, _is_SkipUntilStreamTransformer_default);
  const _transformer$9 = dart.privateName(scan, "_transformer");
  const _is_ScanStreamTransformer_default = Symbol('_is_ScanStreamTransformer_default');
  scan.ScanStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ScanStreamTransformer extends async.StreamTransformerBase$(T, S) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$9].bind(stream);
      }
      static _buildTransformer(T, S, accumulator, seed = null) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let index = 0;
          let acc = seed;
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                let t9;
                try {
                  acc = accumulator(acc, value, (t9 = index, index = t9 + 1, t9));
                  controller.add(acc);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (ScanStreamTransformer.new = function(accumulator, seed = null) {
      this[_transformer$9] = scan.ScanStreamTransformer._buildTransformer(T, S, accumulator, seed);
      ScanStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ScanStreamTransformer.prototype;
    dart.addTypeTests(ScanStreamTransformer);
    ScanStreamTransformer.prototype[_is_ScanStreamTransformer_default] = true;
    dart.setMethodSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getMethods(ScanStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(ScanStreamTransformer, "package:rxdart/src/transformers/scan.dart");
    dart.setFieldSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getFields(ScanStreamTransformer.__proto__),
      [_transformer$9]: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return ScanStreamTransformer;
  });
  scan.ScanStreamTransformer = scan.ScanStreamTransformer$();
  dart.addTypeTests(scan.ScanStreamTransformer, _is_ScanStreamTransformer_default);
  const _transformer$10 = dart.privateName(on_error_resume, "_transformer");
  const _is_OnErrorResumeStreamTransformer_default = Symbol('_is_OnErrorResumeStreamTransformer_default');
  on_error_resume.OnErrorResumeStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class OnErrorResumeStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$10].bind(stream);
      }
      static _buildTransformer(T, recoveryFn) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let inputSubscription = null;
          let recoverySubscription = null;
          let controller = null;
          let shouldCloseController = true;
          function safeClose() {
            if (shouldCloseController) {
              controller.close();
            }
          }
          dart.fn(safeClose, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.bind(controller, 'add'), {onError: dart.fn((e, s) => {
                  shouldCloseController = false;
                  recoverySubscription = recoveryFn(e).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
                  inputSubscription.cancel();
                }, dynamicAnddynamicToNull()), onDone: safeClose, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              let t10, t10$;
              t10 = inputSubscription;
              t10 == null ? null : t10.pause(resumeSignal);
              t10$ = recoverySubscription;
              t10$ == null ? null : t10$.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t10, t10$;
              t10 = inputSubscription;
              t10 == null ? null : t10.resume();
              t10$ = recoverySubscription;
              t10$ == null ? null : t10$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t10, t10$;
              return async.Future.wait(dart.dynamic, JSArrayOfFuture().of([(t10 = inputSubscription, t10 == null ? null : t10.cancel()), (t10$ = recoverySubscription, t10$ == null ? null : t10$.cancel())])[$where](dart.fn(future => future != null, FutureTobool())));
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (OnErrorResumeStreamTransformer.new = function(recoveryFn) {
      this[_transformer$10] = on_error_resume.OnErrorResumeStreamTransformer._buildTransformer(T, recoveryFn);
      OnErrorResumeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = OnErrorResumeStreamTransformer.prototype;
    dart.addTypeTests(OnErrorResumeStreamTransformer);
    OnErrorResumeStreamTransformer.prototype[_is_OnErrorResumeStreamTransformer_default] = true;
    dart.setMethodSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getMethods(OnErrorResumeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(OnErrorResumeStreamTransformer, "package:rxdart/src/transformers/on_error_resume.dart");
    dart.setFieldSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getFields(OnErrorResumeStreamTransformer.__proto__),
      [_transformer$10]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return OnErrorResumeStreamTransformer;
  });
  on_error_resume.OnErrorResumeStreamTransformer = on_error_resume.OnErrorResumeStreamTransformer$();
  dart.addTypeTests(on_error_resume.OnErrorResumeStreamTransformer, _is_OnErrorResumeStreamTransformer_default);
  const _transformer$11 = dart.privateName(of_type, "_transformer");
  const _is_OfTypeStreamTransformer_default = Symbol('_is_OfTypeStreamTransformer_default');
  of_type.OfTypeStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class OfTypeStreamTransformer extends async.StreamTransformerBase$(T, S) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$11].bind(stream);
      }
      static _buildTransformer(T, S, typeToken) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  if (dart.test(typeToken.isType(value))) {
                    controller.add(typeToken.toType(value));
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (OfTypeStreamTransformer.new = function(typeToken) {
      this[_transformer$11] = of_type.OfTypeStreamTransformer._buildTransformer(T, S, typeToken);
      OfTypeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = OfTypeStreamTransformer.prototype;
    dart.addTypeTests(OfTypeStreamTransformer);
    OfTypeStreamTransformer.prototype[_is_OfTypeStreamTransformer_default] = true;
    dart.setMethodSignature(OfTypeStreamTransformer, () => ({
      __proto__: dart.getMethods(OfTypeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(OfTypeStreamTransformer, "package:rxdart/src/transformers/of_type.dart");
    dart.setFieldSignature(OfTypeStreamTransformer, () => ({
      __proto__: dart.getFields(OfTypeStreamTransformer.__proto__),
      [_transformer$11]: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return OfTypeStreamTransformer;
  });
  of_type.OfTypeStreamTransformer = of_type.OfTypeStreamTransformer$();
  dart.addTypeTests(of_type.OfTypeStreamTransformer, _is_OfTypeStreamTransformer_default);
  const _transformer$12 = dart.privateName(map_to, "_transformer");
  const _is_MapToStreamTransformer_default = Symbol('_is_MapToStreamTransformer_default');
  map_to.MapToStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class MapToStreamTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return this[_transformer$12].bind(stream);
      }
      static _buildTransformer(S, T, value) {
        return new (async._StreamSubscriptionTransformer$(S, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(_ => controller.add(value), dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (MapToStreamTransformer.new = function(value) {
      this[_transformer$12] = map_to.MapToStreamTransformer._buildTransformer(S, T, value);
      MapToStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = MapToStreamTransformer.prototype;
    dart.addTypeTests(MapToStreamTransformer);
    MapToStreamTransformer.prototype[_is_MapToStreamTransformer_default] = true;
    dart.setMethodSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getMethods(MapToStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(MapToStreamTransformer, "package:rxdart/src/transformers/map_to.dart");
    dart.setFieldSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getFields(MapToStreamTransformer.__proto__),
      [_transformer$12]: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return MapToStreamTransformer;
  });
  map_to.MapToStreamTransformer = map_to.MapToStreamTransformer$();
  dart.addTypeTests(map_to.MapToStreamTransformer, _is_MapToStreamTransformer_default);
  const _transformer$13 = dart.privateName(interval, "_transformer");
  const _is_IntervalStreamTransformer_default = Symbol('_is_IntervalStreamTransformer_default');
  interval.IntervalStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class IntervalStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$13].bind(stream);
      }
      static _buildTransformer(T, duration) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let onInterval = null;
          let combinedWait = dart.fn(resumeSignal => resumeSignal != null && onInterval != null ? async.Future.wait(dart.dynamic, JSArrayOfFuture().of([onInterval, resumeSignal])) : resumeSignal, FutureToFuture());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  onInterval = async.Future$(T).delayed(duration, dart.fn(() => value, dart.fnType(T, [])));
                  subscription.pause(onInterval.then(dart.void, dart.bind(controller, 'add')).whenComplete(dart.fn(() => onInterval = null, VoidToNull())));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(combinedWait(resumeSignal)), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IntervalStreamTransformer.new = function(duration) {
      this[_transformer$13] = interval.IntervalStreamTransformer._buildTransformer(T, duration);
      IntervalStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = IntervalStreamTransformer.prototype;
    dart.addTypeTests(IntervalStreamTransformer);
    IntervalStreamTransformer.prototype[_is_IntervalStreamTransformer_default] = true;
    dart.setMethodSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(IntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(IntervalStreamTransformer, "package:rxdart/src/transformers/interval.dart");
    dart.setFieldSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getFields(IntervalStreamTransformer.__proto__),
      [_transformer$13]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return IntervalStreamTransformer;
  });
  interval.IntervalStreamTransformer = interval.IntervalStreamTransformer$();
  dart.addTypeTests(interval.IntervalStreamTransformer, _is_IntervalStreamTransformer_default);
  const _transformer$14 = dart.privateName(ignore_elements, "_transformer");
  const _is_IgnoreElementsStreamTransformer_default = Symbol('_is_IgnoreElementsStreamTransformer_default');
  ignore_elements.IgnoreElementsStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class IgnoreElementsStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$14].bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(null, {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => controller.close(), VoidToFuture()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IgnoreElementsStreamTransformer.new = function() {
      this[_transformer$14] = ignore_elements.IgnoreElementsStreamTransformer._buildTransformer(T);
      IgnoreElementsStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = IgnoreElementsStreamTransformer.prototype;
    dart.addTypeTests(IgnoreElementsStreamTransformer);
    IgnoreElementsStreamTransformer.prototype[_is_IgnoreElementsStreamTransformer_default] = true;
    dart.setMethodSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getMethods(IgnoreElementsStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(IgnoreElementsStreamTransformer, "package:rxdart/src/transformers/ignore_elements.dart");
    dart.setFieldSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getFields(IgnoreElementsStreamTransformer.__proto__),
      [_transformer$14]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return IgnoreElementsStreamTransformer;
  });
  ignore_elements.IgnoreElementsStreamTransformer = ignore_elements.IgnoreElementsStreamTransformer$();
  dart.addTypeTests(ignore_elements.IgnoreElementsStreamTransformer, _is_IgnoreElementsStreamTransformer_default);
  const _transformer$15 = dart.privateName(group_by, "_transformer");
  const _is_GroupByObservable_default = Symbol('_is_GroupByObservable_default');
  const key$ = dart.privateName(group_by, "GroupByObservable.key");
  group_by.GroupByObservable$ = dart.generic((T, S) => {
    class GroupByObservable extends observable.Observable$(T) {
      get key() {
        return this[key$];
      }
      set key(value) {
        super.key = value;
      }
    }
    (GroupByObservable.new = function(key, stream) {
      this[key$] = key;
      GroupByObservable.__proto__.new.call(this, stream);
      ;
    }).prototype = GroupByObservable.prototype;
    dart.addTypeTests(GroupByObservable);
    GroupByObservable.prototype[_is_GroupByObservable_default] = true;
    dart.setLibraryUri(GroupByObservable, "package:rxdart/src/transformers/group_by.dart");
    dart.setFieldSignature(GroupByObservable, () => ({
      __proto__: dart.getFields(GroupByObservable.__proto__),
      key: dart.finalFieldType(S)
    }));
    return GroupByObservable;
  });
  group_by.GroupByObservable = group_by.GroupByObservable$();
  dart.addTypeTests(group_by.GroupByObservable, _is_GroupByObservable_default);
  const _is_GroupByStreamTransformer_default = Symbol('_is_GroupByStreamTransformer_default');
  group_by.GroupByStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class GroupByStreamTransformer extends async.StreamTransformerBase$(T, group_by.GroupByObservable$(T, S)) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$15].bind(stream);
      }
      static _buildTransformer(T, S, grouper) {
        return new (async._StreamSubscriptionTransformer$(T, group_by.GroupByObservable$(T, S))).new(dart.fn((input, cancelOnError) => {
          let mapper = new (_js_helper.LinkedMap$(S, async.StreamController$(T))).new();
          let controller = null;
          let subscription = null;
          let controllerBuilder = dart.fn(forKey => dart.fn(() => {
            let groupedController = async.StreamController$(T).new();
            controller.add(new (group_by.GroupByObservable$(T, S)).new(forKey, groupedController.stream));
            return groupedController;
          }, dart.fnType(async.StreamController$(T), [])), dart.fnType(dart.fnType(async.StreamController$(T), []), [S]));
          controller = async.StreamController$(group_by.GroupByObservable$(T, S)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let key = grouper(value);
                  let groupedController = mapper[$putIfAbsent](key, controllerBuilder(key));
                  groupedController.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  mapper[$values][$forEach](dart.fn(controller => controller.close(), dart.fnType(async.Future, [async.StreamController$(T)])));
                  mapper[$clear]();
                  controller.close();
                }, VoidToNull())});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(group_by.GroupByObservable$(T, S)), [async.Stream$(T), core.bool])));
      }
    }
    (GroupByStreamTransformer.new = function(grouper) {
      this[_transformer$15] = group_by.GroupByStreamTransformer._buildTransformer(T, S, grouper);
      GroupByStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = GroupByStreamTransformer.prototype;
    dart.addTypeTests(GroupByStreamTransformer);
    GroupByStreamTransformer.prototype[_is_GroupByStreamTransformer_default] = true;
    dart.setMethodSignature(GroupByStreamTransformer, () => ({
      __proto__: dart.getMethods(GroupByStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(group_by.GroupByObservable$(T, S)), [core.Object])
    }));
    dart.setLibraryUri(GroupByStreamTransformer, "package:rxdart/src/transformers/group_by.dart");
    dart.setFieldSignature(GroupByStreamTransformer, () => ({
      __proto__: dart.getFields(GroupByStreamTransformer.__proto__),
      [_transformer$15]: dart.finalFieldType(async.StreamTransformer$(T, group_by.GroupByObservable$(T, S)))
    }));
    return GroupByStreamTransformer;
  });
  group_by.GroupByStreamTransformer = group_by.GroupByStreamTransformer$();
  dart.addTypeTests(group_by.GroupByStreamTransformer, _is_GroupByStreamTransformer_default);
  const _transformer$16 = dart.privateName(flat_map, "_transformer");
  const _is_FlatMapStreamTransformer_default = Symbol('_is_FlatMapStreamTransformer_default');
  flat_map.FlatMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class FlatMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$16].bind(stream);
      }
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(S)).of([]);
          let controller = null;
          let subscription = null;
          let closeAfterNextEvent = false;
          let hasMainEvent = false;
          let openStreams = 0;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let otherSubscription = null;
                  let otherStream = mapper(value);
                  hasMainEvent = true;
                  openStreams = openStreams + 1;
                  otherSubscription = otherStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      openStreams = openStreams - 1;
                      if (closeAfterNextEvent && openStreams === 0) {
                        controller.close();
                      }
                    }, VoidToNull())});
                  subscriptions[$add](otherSubscription);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasMainEvent || openStreams === 0) {
                    controller.close();
                  } else {
                    closeAfterNextEvent = true;
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              subscription.pause(resumeSignal);
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t14;
              let list = (t14 = ListOfStreamSubscription().from(subscriptions), t14[$add](subscription), t14);
              return async.Future.wait(dart.dynamic, list[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool())));
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (FlatMapStreamTransformer.new = function(mapper) {
      this[_transformer$16] = flat_map.FlatMapStreamTransformer._buildTransformer(T, S, mapper);
      FlatMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = FlatMapStreamTransformer.prototype;
    dart.addTypeTests(FlatMapStreamTransformer);
    FlatMapStreamTransformer.prototype[_is_FlatMapStreamTransformer_default] = true;
    dart.setMethodSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getMethods(FlatMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(FlatMapStreamTransformer, "package:rxdart/src/transformers/flat_map.dart");
    dart.setFieldSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getFields(FlatMapStreamTransformer.__proto__),
      [_transformer$16]: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return FlatMapStreamTransformer;
  });
  flat_map.FlatMapStreamTransformer = flat_map.FlatMapStreamTransformer$();
  dart.addTypeTests(flat_map.FlatMapStreamTransformer, _is_FlatMapStreamTransformer_default);
  const _transformer$17 = dart.privateName(exhaust_map, "_transformer");
  const _is_ExhaustMapStreamTransformer_default = Symbol('_is_ExhaustMapStreamTransformer_default');
  exhaust_map.ExhaustMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ExhaustMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$17].bind(stream);
      }
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let inputSubscription = null;
          let outputSubscription = null;
          let inputClosed = false;
          let outputIsEmitting = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.fn(value => {
                try {
                  if (!outputIsEmitting) {
                    outputIsEmitting = true;
                    outputSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                        outputIsEmitting = false;
                        if (inputClosed) controller.close();
                      }, VoidToNull())});
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  inputClosed = true;
                  if (!outputIsEmitting) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              let t15;
              inputSubscription.pause(resumeSignal);
              t15 = outputSubscription;
              t15 == null ? null : t15.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t15;
              inputSubscription.resume();
              t15 = outputSubscription;
              t15 == null ? null : t15.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield inputSubscription.cancel();
              if (outputIsEmitting) yield outputSubscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (ExhaustMapStreamTransformer.new = function(mapper) {
      this[_transformer$17] = exhaust_map.ExhaustMapStreamTransformer._buildTransformer(T, S, mapper);
      ExhaustMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ExhaustMapStreamTransformer.prototype;
    dart.addTypeTests(ExhaustMapStreamTransformer);
    ExhaustMapStreamTransformer.prototype[_is_ExhaustMapStreamTransformer_default] = true;
    dart.setMethodSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getMethods(ExhaustMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(ExhaustMapStreamTransformer, "package:rxdart/src/transformers/exhaust_map.dart");
    dart.setFieldSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getFields(ExhaustMapStreamTransformer.__proto__),
      [_transformer$17]: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return ExhaustMapStreamTransformer;
  });
  exhaust_map.ExhaustMapStreamTransformer = exhaust_map.ExhaustMapStreamTransformer$();
  dart.addTypeTests(exhaust_map.ExhaustMapStreamTransformer, _is_ExhaustMapStreamTransformer_default);
  const _transformer$18 = dart.privateName($do, "_transformer");
  const _is_DoStreamTransformer_default = Symbol('_is_DoStreamTransformer_default');
  $do.DoStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DoStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$18].bind(stream);
      }
      static _buildTransformer(T, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let onData = opts && 'onData' in opts ? opts.onData : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let onEach = opts && 'onEach' in opts ? opts.onEach : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onPause = opts && 'onPause' in opts ? opts.onPause : null;
        let onResume = opts && 'onResume' in opts ? opts.onResume : null;
        if (onCancel == null && onData == null && onDone == null && onEach == null && onError == null && onListen == null && onPause == null && onResume == null) {
          dart.throw(new core.ArgumentError.new("Must provide at least one handler"));
        }
        let subscriptions = new (LinkedMapOfStream$StreamSubscription()).new();
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let onListenLocal = dart.fn(() => {
            if (onListen != null) {
              try {
                onListen();
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }
            subscriptions[$putIfAbsent](input, dart.fn(() => input.listen(dart.fn(value => {
              if (onData != null) {
                try {
                  onData(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }
              if (onEach != null) {
                try {
                  onEach(notification.Notification$(T).onData(value));
                } catch (e$0) {
                  let e = dart.getThrown(e$0);
                  let s = dart.stackTrace(e$0);
                  controller.addError(e, s);
                }
              }
              controller.add(value);
            }, dart.fnType(core.Null, [T])), {onError: dart.fn((e, s) => {
                if (onError != null) {
                  try {
                    dart.dcall(onError, [e, s]);
                  } catch (e$) {
                    let e2 = dart.getThrown(e$);
                    let s2 = dart.stackTrace(e$);
                    controller.addError(e2, s2);
                  }
                }
                if (onEach != null) {
                  try {
                    onEach(notification.Notification$(T).onError(e, s));
                  } catch (e$0) {
                    let e = dart.getThrown(e$0);
                    let s = dart.stackTrace(e$0);
                    controller.addError(e, s);
                  }
                }
                controller.addError(e, s);
              }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
                if (onDone != null) {
                  try {
                    onDone();
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                if (onEach != null) {
                  try {
                    onEach(notification.Notification$(T).onDone());
                  } catch (e$0) {
                    let e = dart.getThrown(e$0);
                    let s = dart.stackTrace(e$0);
                    controller.addError(e, s);
                  }
                }
                controller.close();
              }, VoidToNull()), cancelOnError: cancelOnError}), dart.fnType(async.StreamSubscription$(T), [])));
          }, VoidToNull());
          let onCancelLocal = dart.fn(() => {
            let t23;
            let onCancelResult = null;
            if (onCancel != null) {
              try {
                onCancelResult = onCancel();
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                if (!dart.test(controller.isClosed)) {
                  controller.addError(e, s);
                } else {
                  async.Zone.current.handleUncaughtError(e, s);
                }
              }
            }
            let cancelResultFuture = async.Future.is(onCancelResult) ? onCancelResult : async.Future.value(onCancelResult);
            let cancelFuture = (t23 = subscriptions[$_get](input).cancel(), t23 == null ? async.Future.value() : t23);
            return async.Future.wait(dart.dynamic, JSArrayOfFuture().of([cancelFuture, cancelResultFuture])).whenComplete(dart.fn(() => subscriptions[$remove](input), VoidToStreamSubscription()));
          }, VoidToFutureOfList());
          if (dart.test(input.isBroadcast)) {
            controller = async.StreamController$(T).broadcast({sync: true, onListen: onListenLocal, onCancel: onCancelLocal});
          } else {
            controller = async.StreamController$(T).new({sync: true, onListen: onListenLocal, onCancel: onCancelLocal, onPause: dart.fn((resumeSignal = null) => {
                if (onPause != null) {
                  try {
                    onPause(resumeSignal);
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                subscriptions[$_get](input).pause(resumeSignal);
              }, FutureToNull()), onResume: dart.fn(() => {
                if (onResume != null) {
                  try {
                    onResume();
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                subscriptions[$_get](input).resume();
              }, VoidToNull())});
          }
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DoStreamTransformer.new = function(opts) {
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      let onData = opts && 'onData' in opts ? opts.onData : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let onEach = opts && 'onEach' in opts ? opts.onEach : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onPause = opts && 'onPause' in opts ? opts.onPause : null;
      let onResume = opts && 'onResume' in opts ? opts.onResume : null;
      this[_transformer$18] = $do.DoStreamTransformer._buildTransformer(T, {onCancel: onCancel, onData: onData, onDone: onDone, onEach: onEach, onError: onError, onListen: onListen, onPause: onPause, onResume: onResume});
      DoStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DoStreamTransformer.prototype;
    dart.addTypeTests(DoStreamTransformer);
    DoStreamTransformer.prototype[_is_DoStreamTransformer_default] = true;
    dart.setMethodSignature(DoStreamTransformer, () => ({
      __proto__: dart.getMethods(DoStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DoStreamTransformer, "package:rxdart/src/transformers/do.dart");
    dart.setFieldSignature(DoStreamTransformer, () => ({
      __proto__: dart.getFields(DoStreamTransformer.__proto__),
      [_transformer$18]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DoStreamTransformer;
  });
  $do.DoStreamTransformer = $do.DoStreamTransformer$();
  dart.addTypeTests($do.DoStreamTransformer, _is_DoStreamTransformer_default);
  const _transformer$19 = dart.privateName(distinct_unique, "_transformer");
  const _is_DistinctUniqueStreamTransformer_default = Symbol('_is_DistinctUniqueStreamTransformer_default');
  distinct_unique.DistinctUniqueStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DistinctUniqueStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$19].bind(stream);
      }
      static _buildTransformer(T, equals, hashCode) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let collection = collection$.HashSet$(T).new({equals: equals, hashCode: hashCode});
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  if (dart.test(collection.add(value))) controller.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              collection.clear();
              collection = null;
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DistinctUniqueStreamTransformer.new = function(opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
      this[_transformer$19] = distinct_unique.DistinctUniqueStreamTransformer._buildTransformer(T, equals, hashCode);
      DistinctUniqueStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DistinctUniqueStreamTransformer.prototype;
    dart.addTypeTests(DistinctUniqueStreamTransformer);
    DistinctUniqueStreamTransformer.prototype[_is_DistinctUniqueStreamTransformer_default] = true;
    dart.setMethodSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getMethods(DistinctUniqueStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DistinctUniqueStreamTransformer, "package:rxdart/src/transformers/distinct_unique.dart");
    dart.setFieldSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getFields(DistinctUniqueStreamTransformer.__proto__),
      [_transformer$19]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DistinctUniqueStreamTransformer;
  });
  distinct_unique.DistinctUniqueStreamTransformer = distinct_unique.DistinctUniqueStreamTransformer$();
  dart.addTypeTests(distinct_unique.DistinctUniqueStreamTransformer, _is_DistinctUniqueStreamTransformer_default);
  const _transformer$20 = dart.privateName(dematerialize, "_transformer");
  const _is_DematerializeStreamTransformer_default = Symbol('_is_DematerializeStreamTransformer_default');
  dematerialize.DematerializeStreamTransformer$ = dart.generic(T => {
    let NotificationOfT = () => (NotificationOfT = dart.constFn(notification.Notification$(T)))();
    let StreamOfNotificationOfT = () => (StreamOfNotificationOfT = dart.constFn(async.Stream$(NotificationOfT())))();
    class DematerializeStreamTransformer extends async.StreamTransformerBase$(notification.Notification$(T), T) {
      bind(stream) {
        StreamOfNotificationOfT()._check(stream);
        return this[_transformer$20].bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(notification.Notification$(T), T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(notification => {
                try {
                  if (dart.test(notification.isOnData)) {
                    controller.add(notification.value);
                  } else if (dart.test(notification.isOnDone)) {
                    controller.close();
                  } else if (dart.test(notification.isOnError)) {
                    controller.addError(notification.error, notification.stackTrace);
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [notification.Notification$(T)])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => {
              subscription.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(notification.Notification$(T)), core.bool])));
      }
    }
    (DematerializeStreamTransformer.new = function() {
      this[_transformer$20] = dematerialize.DematerializeStreamTransformer._buildTransformer(T);
      DematerializeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DematerializeStreamTransformer.prototype;
    dart.addTypeTests(DematerializeStreamTransformer);
    DematerializeStreamTransformer.prototype[_is_DematerializeStreamTransformer_default] = true;
    dart.setMethodSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getMethods(DematerializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DematerializeStreamTransformer, "package:rxdart/src/transformers/dematerialize.dart");
    dart.setFieldSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getFields(DematerializeStreamTransformer.__proto__),
      [_transformer$20]: dart.finalFieldType(async.StreamTransformer$(notification.Notification$(T), T))
    }));
    return DematerializeStreamTransformer;
  });
  dematerialize.DematerializeStreamTransformer = dematerialize.DematerializeStreamTransformer$();
  dart.addTypeTests(dematerialize.DematerializeStreamTransformer, _is_DematerializeStreamTransformer_default);
  const _transformer$21 = dart.privateName(delay, "_transformer");
  let C11;
  const _is_DelayStreamTransformer_default = Symbol('_is_DelayStreamTransformer_default');
  delay.DelayStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DelayStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$21].bind(stream);
      }
      static _buildTransformer(T, duration) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let onDoneCalled = false;
          let hasNoEvents = true;
          let timers = JSArrayOfTimer().of([]);
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasNoEvents = false;
                try {
                  let timer = null;
                  timer = async.Timer.new(duration, dart.fn(() => {
                    controller.add(value);
                    timers[$remove](timer);
                    if (onDoneCalled && dart.test(timers[$isEmpty])) {
                      controller.close();
                    }
                  }, VoidToNull()));
                  timers[$add](timer);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasNoEvents) controller.close();
                  onDoneCalled = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              timers[$forEach](C11 || CT.C11);
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
      static _cancelTimerIfActive(_timer) {
        if (_timer != null && dart.test(_timer.isActive)) {
          _timer.cancel();
        }
      }
    }
    (DelayStreamTransformer.new = function(duration) {
      this[_transformer$21] = delay.DelayStreamTransformer._buildTransformer(T, duration);
      DelayStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DelayStreamTransformer.prototype;
    dart.addTypeTests(DelayStreamTransformer);
    DelayStreamTransformer.prototype[_is_DelayStreamTransformer_default] = true;
    dart.setMethodSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getMethods(DelayStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DelayStreamTransformer, "package:rxdart/src/transformers/delay.dart");
    dart.setFieldSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getFields(DelayStreamTransformer.__proto__),
      [_transformer$21]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DelayStreamTransformer;
  });
  delay.DelayStreamTransformer = delay.DelayStreamTransformer$();
  dart.addTypeTests(delay.DelayStreamTransformer, _is_DelayStreamTransformer_default);
  const _transformer$22 = dart.privateName(default_if_empty, "_transformer");
  const _is_DefaultIfEmptyStreamTransformer_default = Symbol('_is_DefaultIfEmptyStreamTransformer_default');
  default_if_empty.DefaultIfEmptyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DefaultIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$22].bind(stream);
      }
      static _buildTransformer(T, defaultValue) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let hasEvent = false;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasEvent = true;
                try {
                  controller.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasEvent) controller.add(defaultValue);
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DefaultIfEmptyStreamTransformer.new = function(defaultValue) {
      this[_transformer$22] = default_if_empty.DefaultIfEmptyStreamTransformer._buildTransformer(T, defaultValue);
      DefaultIfEmptyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DefaultIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(DefaultIfEmptyStreamTransformer);
    DefaultIfEmptyStreamTransformer.prototype[_is_DefaultIfEmptyStreamTransformer_default] = true;
    dart.setMethodSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(DefaultIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DefaultIfEmptyStreamTransformer, "package:rxdart/src/transformers/default_if_empty.dart");
    dart.setFieldSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(DefaultIfEmptyStreamTransformer.__proto__),
      [_transformer$22]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DefaultIfEmptyStreamTransformer;
  });
  default_if_empty.DefaultIfEmptyStreamTransformer = default_if_empty.DefaultIfEmptyStreamTransformer$();
  dart.addTypeTests(default_if_empty.DefaultIfEmptyStreamTransformer, _is_DefaultIfEmptyStreamTransformer_default);
  const _is_ValueObservable_default = Symbol('_is_ValueObservable_default');
  value_observable.ValueObservable$ = dart.generic(T => {
    class ValueObservable extends core.Object {}
    (ValueObservable.new = function() {
      ;
    }).prototype = ValueObservable.prototype;
    dart.addTypeTests(ValueObservable);
    ValueObservable.prototype[_is_ValueObservable_default] = true;
    ValueObservable[dart.implements] = () => [observable.Observable$(T)];
    dart.setLibraryUri(ValueObservable, "package:rxdart/src/observables/value_observable.dart");
    return ValueObservable;
  });
  value_observable.ValueObservable = value_observable.ValueObservable$();
  dart.addTypeTests(value_observable.ValueObservable, _is_ValueObservable_default);
  const _is_ReplayObservable_default = Symbol('_is_ReplayObservable_default');
  replay_observable.ReplayObservable$ = dart.generic(T => {
    class ReplayObservable extends core.Object {}
    (ReplayObservable.new = function() {
      ;
    }).prototype = ReplayObservable.prototype;
    dart.addTypeTests(ReplayObservable);
    ReplayObservable.prototype[_is_ReplayObservable_default] = true;
    ReplayObservable[dart.implements] = () => [observable.Observable$(T)];
    dart.setLibraryUri(ReplayObservable, "package:rxdart/src/observables/replay_observable.dart");
    return ReplayObservable;
  });
  replay_observable.ReplayObservable = replay_observable.ReplayObservable$();
  dart.addTypeTests(replay_observable.ReplayObservable, _is_ReplayObservable_default);
  const _is_ConnectableObservable_default = Symbol('_is_ConnectableObservable_default');
  connectable_observable.ConnectableObservable$ = dart.generic(T => {
    class ConnectableObservable extends observable.Observable$(T) {}
    (ConnectableObservable.new = function(stream) {
      ConnectableObservable.__proto__.new.call(this, stream);
      ;
    }).prototype = ConnectableObservable.prototype;
    dart.addTypeTests(ConnectableObservable);
    ConnectableObservable.prototype[_is_ConnectableObservable_default] = true;
    dart.setLibraryUri(ConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    return ConnectableObservable;
  });
  connectable_observable.ConnectableObservable = connectable_observable.ConnectableObservable$();
  dart.addTypeTests(connectable_observable.ConnectableObservable, _is_ConnectableObservable_default);
  const _source$ = dart.privateName(connectable_observable, "_source");
  const _subject$ = dart.privateName(connectable_observable, "_subject");
  const _is_PublishConnectableObservable_default = Symbol('_is_PublishConnectableObservable_default');
  connectable_observable.PublishConnectableObservable$ = dart.generic(T => {
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    class PublishConnectableObservable extends connectable_observable.ConnectableObservable$(T) {
      static new(source) {
        return new (connectable_observable.PublishConnectableObservable$(T)).__(source, publish_subject.PublishSubject$(T).new());
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
    }
    (PublishConnectableObservable.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      PublishConnectableObservable.__proto__.new.call(this, _subject);
      ;
    }).prototype = PublishConnectableObservable.prototype;
    dart.addTypeTests(PublishConnectableObservable);
    PublishConnectableObservable.prototype[_is_PublishConnectableObservable_default] = true;
    dart.setMethodSignature(PublishConnectableObservable, () => ({
      __proto__: dart.getMethods(PublishConnectableObservable.__proto__),
      autoConnect: dart.fnType(observable.Observable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}, {}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(observable.Observable$(T), [])
    }));
    dart.setLibraryUri(PublishConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(PublishConnectableObservable, () => ({
      __proto__: dart.getFields(PublishConnectableObservable.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(publish_subject.PublishSubject$(T))
    }));
    return PublishConnectableObservable;
  });
  connectable_observable.PublishConnectableObservable = connectable_observable.PublishConnectableObservable$();
  dart.addTypeTests(connectable_observable.PublishConnectableObservable, _is_PublishConnectableObservable_default);
  const _is_ValueConnectableObservable_default = Symbol('_is_ValueConnectableObservable_default');
  connectable_observable.ValueConnectableObservable$ = dart.generic(T => {
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    class ValueConnectableObservable extends connectable_observable.ConnectableObservable$(T) {
      static new(source) {
        return new (connectable_observable.ValueConnectableObservable$(T)).__(source, behavior_subject.BehaviorSubject$(T).new());
      }
      static seeded(source, seedValue) {
        return new (connectable_observable.ValueConnectableObservable$(T)).__(source, behavior_subject.BehaviorSubject$(T).seeded(seedValue));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
      get value() {
        return this[_subject$].value;
      }
      get hasValue() {
        return this[_subject$].hasValue;
      }
    }
    (ValueConnectableObservable.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ValueConnectableObservable.__proto__.new.call(this, _subject);
      ;
    }).prototype = ValueConnectableObservable.prototype;
    dart.addTypeTests(ValueConnectableObservable);
    ValueConnectableObservable.prototype[_is_ValueConnectableObservable_default] = true;
    ValueConnectableObservable[dart.implements] = () => [value_observable.ValueObservable$(T)];
    dart.setMethodSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getMethods(ValueConnectableObservable.__proto__),
      autoConnect: dart.fnType(value_observable.ValueObservable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}, {}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(value_observable.ValueObservable$(T), [])
    }));
    dart.setGetterSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getGetters(ValueConnectableObservable.__proto__),
      value: T,
      hasValue: core.bool
    }));
    dart.setLibraryUri(ValueConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getFields(ValueConnectableObservable.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(behavior_subject.BehaviorSubject$(T))
    }));
    return ValueConnectableObservable;
  });
  connectable_observable.ValueConnectableObservable = connectable_observable.ValueConnectableObservable$();
  dart.addTypeTests(connectable_observable.ValueConnectableObservable, _is_ValueConnectableObservable_default);
  const _is_ReplayConnectableObservable_default = Symbol('_is_ReplayConnectableObservable_default');
  connectable_observable.ReplayConnectableObservable$ = dart.generic(T => {
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    class ReplayConnectableObservable extends connectable_observable.ConnectableObservable$(T) {
      static new(stream, opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return new (connectable_observable.ReplayConnectableObservable$(T)).__(stream, replay_subject.ReplaySubject$(T).new({maxSize: maxSize}));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
      get values() {
        return this[_subject$].values;
      }
    }
    (ReplayConnectableObservable.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ReplayConnectableObservable.__proto__.new.call(this, _subject);
      ;
    }).prototype = ReplayConnectableObservable.prototype;
    dart.addTypeTests(ReplayConnectableObservable);
    ReplayConnectableObservable.prototype[_is_ReplayConnectableObservable_default] = true;
    ReplayConnectableObservable[dart.implements] = () => [replay_observable.ReplayObservable$(T)];
    dart.setMethodSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getMethods(ReplayConnectableObservable.__proto__),
      autoConnect: dart.fnType(replay_observable.ReplayObservable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}, {}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(replay_observable.ReplayObservable$(T), [])
    }));
    dart.setGetterSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getGetters(ReplayConnectableObservable.__proto__),
      values: core.List$(T)
    }));
    dart.setLibraryUri(ReplayConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getFields(ReplayConnectableObservable.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(replay_subject.ReplaySubject$(T))
    }));
    return ReplayConnectableObservable;
  });
  connectable_observable.ReplayConnectableObservable = connectable_observable.ReplayConnectableObservable$();
  dart.addTypeTests(connectable_observable.ReplayConnectableObservable, _is_ReplayConnectableObservable_default);
  const _is_ConnectableObservableStreamSubscription_default = Symbol('_is_ConnectableObservableStreamSubscription_default');
  connectable_observable.ConnectableObservableStreamSubscription$ = dart.generic(T => {
    class ConnectableObservableStreamSubscription extends async.StreamSubscription$(T) {
      cancel() {
        this[_subject$].close();
        return this[_source$].cancel();
      }
      asFuture(E, futureValue = null) {
        return this[_source$].asFuture(E, futureValue);
      }
      get isPaused() {
        return this[_source$].isPaused;
      }
      onData(handleData) {
        return this[_source$].onData(handleData);
      }
      onDone(handleDone) {
        return this[_source$].onDone(handleDone);
      }
      onError(handleError) {
        return this[_source$].onError(handleError);
      }
      pause(resumeSignal = null) {
        return this[_source$].pause(resumeSignal);
      }
      resume() {
        return this[_source$].resume();
      }
    }
    (ConnectableObservableStreamSubscription.new = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ;
    }).prototype = ConnectableObservableStreamSubscription.prototype;
    dart.addTypeTests(ConnectableObservableStreamSubscription);
    ConnectableObservableStreamSubscription.prototype[_is_ConnectableObservableStreamSubscription_default] = true;
    dart.setMethodSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getMethods(ConnectableObservableStreamSubscription.__proto__),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]]),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onError: dart.fnType(dart.void, [core.Function]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getGetters(ConnectableObservableStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setLibraryUri(ConnectableObservableStreamSubscription, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getFields(ConnectableObservableStreamSubscription.__proto__),
      [_source$]: dart.finalFieldType(async.StreamSubscription$(T)),
      [_subject$]: dart.finalFieldType(subject.Subject$(T))
    }));
    return ConnectableObservableStreamSubscription;
  });
  connectable_observable.ConnectableObservableStreamSubscription = connectable_observable.ConnectableObservableStreamSubscription$();
  dart.addTypeTests(connectable_observable.ConnectableObservableStreamSubscription, _is_ConnectableObservableStreamSubscription_default);
  const _isDisposed = dart.privateName(composite_subscription, "_isDisposed");
  const _subscriptionsList = dart.privateName(composite_subscription, "_subscriptionsList");
  composite_subscription.CompositeSubscription = class CompositeSubscription extends core.Object {
    get isDisposed() {
      return this[_isDisposed];
    }
    add(T, subscription) {
      if (dart.test(this.isDisposed)) {
        dart.throw("This composite was disposed, try to use new instance instead");
      }
      this[_subscriptionsList][$add](subscription);
      return subscription;
    }
    remove(subscription) {
      subscription.cancel();
      this[_subscriptionsList][$remove](subscription);
    }
    clear() {
      this[_subscriptionsList][$forEach](dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()));
      this[_subscriptionsList][$clear]();
    }
    dispose() {
      this.clear();
      this[_isDisposed] = true;
    }
  };
  (composite_subscription.CompositeSubscription.new = function() {
    this[_isDisposed] = false;
    this[_subscriptionsList] = JSArrayOfStreamSubscription().of([]);
    ;
  }).prototype = composite_subscription.CompositeSubscription.prototype;
  dart.addTypeTests(composite_subscription.CompositeSubscription);
  dart.setMethodSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getMethods(composite_subscription.CompositeSubscription.__proto__),
    add: dart.gFnType(T => [async.StreamSubscription$(T), [async.StreamSubscription$(T)]]),
    remove: dart.fnType(dart.void, [async.StreamSubscription]),
    clear: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getGetters(composite_subscription.CompositeSubscription.__proto__),
    isDisposed: core.bool
  }));
  dart.setLibraryUri(composite_subscription.CompositeSubscription, "package:rxdart/src/utils/composite_subscription.dart");
  dart.setFieldSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getFields(composite_subscription.CompositeSubscription.__proto__),
    [_isDisposed]: dart.fieldType(core.bool),
    [_subscriptionsList]: dart.finalFieldType(core.List$(async.StreamSubscription))
  }));
  const _is_WrappedFuture_default = Symbol('_is_WrappedFuture_default');
  const wrapped$ = dart.privateName(wrapped_future, "WrappedFuture.wrapped");
  wrapped_future.WrappedFuture$ = dart.generic(T => {
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    class WrappedFuture extends core.Object {
      get wrapped() {
        return this[wrapped$];
      }
      set wrapped(value) {
        super.wrapped = value;
      }
      asStream() {
        return this.wrapped.asStream();
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this.wrapped.catchError(onError, {test: test});
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this.wrapped.then(S, onValue, {onError: onError});
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidToFutureOrOfT()._check(onTimeout);
        return this.wrapped.timeout(timeLimit, {onTimeout: onTimeout});
      }
      whenComplete(action) {
        return this.wrapped.whenComplete(action);
      }
    }
    (WrappedFuture.new = function(wrapped) {
      this[wrapped$] = wrapped;
      ;
    }).prototype = WrappedFuture.prototype;
    WrappedFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(WrappedFuture);
    WrappedFuture.prototype[_is_WrappedFuture_default] = true;
    WrappedFuture[dart.implements] = () => [async.Future$(T)];
    dart.setMethodSignature(WrappedFuture, () => ({
      __proto__: dart.getMethods(WrappedFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [core.Object])}, {}),
      then: dart.gFnType(S => [async.Future$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}, {}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: core.Object}, {}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.void, [])])
    }));
    dart.setLibraryUri(WrappedFuture, "package:rxdart/src/futures/wrapped_future.dart");
    dart.setFieldSignature(WrappedFuture, () => ({
      __proto__: dart.getFields(WrappedFuture.__proto__),
      wrapped: dart.finalFieldType(async.Future$(T))
    }));
    return WrappedFuture;
  });
  wrapped_future.WrappedFuture = wrapped_future.WrappedFuture$();
  dart.addTypeTests(wrapped_future.WrappedFuture, _is_WrappedFuture_default);
  const _is_StreamMinFuture_default = Symbol('_is_StreamMinFuture_default');
  stream_min_future.StreamMinFuture$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToT = () => (ListOfTToT = dart.constFn(dart.fnType(T, [ListOfT()])))();
    class StreamMinFuture extends wrapped_future.WrappedFuture$(T) {}
    (StreamMinFuture.new = function(stream, comparator = null) {
      StreamMinFuture.__proto__.new.call(this, stream.toList().then(T, dart.fn(values => {
        let t29;
        return (t29 = values, t29[$sort](comparator), t29)[$first];
      }, ListOfTToT())));
      ;
    }).prototype = StreamMinFuture.prototype;
    dart.addTypeTests(StreamMinFuture);
    StreamMinFuture.prototype[_is_StreamMinFuture_default] = true;
    dart.setLibraryUri(StreamMinFuture, "package:rxdart/src/futures/stream_min_future.dart");
    return StreamMinFuture;
  });
  stream_min_future.StreamMinFuture = stream_min_future.StreamMinFuture$();
  dart.addTypeTests(stream_min_future.StreamMinFuture, _is_StreamMinFuture_default);
  const _is_StreamMaxFuture_default = Symbol('_is_StreamMaxFuture_default');
  stream_max_future.StreamMaxFuture$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToT = () => (ListOfTToT = dart.constFn(dart.fnType(T, [ListOfT()])))();
    class StreamMaxFuture extends wrapped_future.WrappedFuture$(T) {}
    (StreamMaxFuture.new = function(stream, comparator = null) {
      StreamMaxFuture.__proto__.new.call(this, stream.toList().then(T, dart.fn(values => {
        let t29;
        return (t29 = values, t29[$sort](comparator), t29)[$last];
      }, ListOfTToT())));
      ;
    }).prototype = StreamMaxFuture.prototype;
    dart.addTypeTests(StreamMaxFuture);
    StreamMaxFuture.prototype[_is_StreamMaxFuture_default] = true;
    dart.setLibraryUri(StreamMaxFuture, "package:rxdart/src/futures/stream_max_future.dart");
    return StreamMaxFuture;
  });
  stream_max_future.StreamMaxFuture = stream_max_future.StreamMaxFuture$();
  dart.addTypeTests(stream_max_future.StreamMaxFuture, _is_StreamMaxFuture_default);
  const _is_AsObservableFuture_default = Symbol('_is_AsObservableFuture_default');
  as_observable_future.AsObservableFuture$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(observable.Observable$(T)))();
    class AsObservableFuture extends wrapped_future.WrappedFuture$(T) {
      asObservable() {
        return ObservableOfT().fromFuture(this.wrapped);
      }
    }
    (AsObservableFuture.new = function(wrapped) {
      AsObservableFuture.__proto__.new.call(this, wrapped);
      ;
    }).prototype = AsObservableFuture.prototype;
    dart.addTypeTests(AsObservableFuture);
    AsObservableFuture.prototype[_is_AsObservableFuture_default] = true;
    dart.setMethodSignature(AsObservableFuture, () => ({
      __proto__: dart.getMethods(AsObservableFuture.__proto__),
      asObservable: dart.fnType(observable.Observable$(T), [])
    }));
    dart.setLibraryUri(AsObservableFuture, "package:rxdart/src/futures/as_observable_future.dart");
    return AsObservableFuture;
  });
  as_observable_future.AsObservableFuture = as_observable_future.AsObservableFuture$();
  dart.addTypeTests(as_observable_future.AsObservableFuture, _is_AsObservableFuture_default);
  const _is_PublishSubject_default = Symbol('_is_PublishSubject_default');
  publish_subject.PublishSubject$ = dart.generic(T => {
    class PublishSubject extends subject.Subject$(T) {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        return new (publish_subject.PublishSubject$(T)).__(controller, new (observable.Observable$(T)).new(controller.stream));
      }
    }
    (PublishSubject.__ = function(controller, observable) {
      PublishSubject.__proto__.new.call(this, controller, observable);
      ;
    }).prototype = PublishSubject.prototype;
    dart.addTypeTests(PublishSubject);
    PublishSubject.prototype[_is_PublishSubject_default] = true;
    dart.setLibraryUri(PublishSubject, "package:rxdart/src/subjects/publish_subject.dart");
    return PublishSubject;
  });
  publish_subject.PublishSubject = publish_subject.PublishSubject$();
  dart.addTypeTests(publish_subject.PublishSubject, _is_PublishSubject_default);
  const _wrapper$ = dart.privateName(behavior_subject, "_wrapper");
  const _is_BehaviorSubject_default = Symbol('_is_BehaviorSubject_default');
  behavior_subject.BehaviorSubject$ = dart.generic(T => {
    class BehaviorSubject extends subject.Subject$(T) {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let wrapper = new (behavior_subject._Wrapper$(T)).new();
        return new (behavior_subject.BehaviorSubject$(T)).__(controller, observable.Observable$(T).defer(behavior_subject.BehaviorSubject._deferStream(T, wrapper, controller), {reusable: true}), wrapper);
      }
      static seeded(seedValue, opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let wrapper = new (behavior_subject._Wrapper$(T)).seeded(seedValue);
        return new (behavior_subject.BehaviorSubject$(T)).__(controller, observable.Observable$(T).defer(behavior_subject.BehaviorSubject._deferStream(T, wrapper, controller), {reusable: true}), wrapper);
      }
      static _deferStream(T, wrapper, controller) {
        return dart.fn(() => {
          if (dart.test(wrapper.latestIsError)) {
            return controller.stream.transform(T, new (start_with_error.StartWithErrorStreamTransformer$(T)).new(wrapper.latestError, wrapper.latestStackTrace));
          } else if (dart.test(wrapper.latestIsValue)) {
            return controller.stream.transform(T, new (start_with.StartWithStreamTransformer$(T)).new(wrapper.latestValue));
          }
          return controller.stream;
        }, dart.fnType(async.Stream$(T), []));
      }
      onAdd(event) {
        T._check(event);
        return this[_wrapper$].setValue(event);
      }
      onAddError(error, stackTrace = null) {
        return this[_wrapper$].setError(error, stackTrace);
      }
      get stream() {
        return this;
      }
      get hasValue() {
        return this[_wrapper$].latestIsValue;
      }
      get value() {
        return this[_wrapper$].latestValue;
      }
      set value(newValue) {
        T._check(newValue);
        return this.add(newValue);
      }
    }
    (BehaviorSubject.__ = function(controller, observable, _wrapper) {
      this[_wrapper$] = _wrapper;
      BehaviorSubject.__proto__.new.call(this, controller, observable);
      ;
    }).prototype = BehaviorSubject.prototype;
    dart.addTypeTests(BehaviorSubject);
    BehaviorSubject.prototype[_is_BehaviorSubject_default] = true;
    BehaviorSubject[dart.implements] = () => [value_observable.ValueObservable$(T)];
    dart.setGetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getGetters(BehaviorSubject.__proto__),
      stream: value_observable.ValueObservable$(T),
      hasValue: core.bool,
      value: T
    }));
    dart.setSetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getSetters(BehaviorSubject.__proto__),
      value: core.Object
    }));
    dart.setLibraryUri(BehaviorSubject, "package:rxdart/src/subjects/behavior_subject.dart");
    dart.setFieldSignature(BehaviorSubject, () => ({
      __proto__: dart.getFields(BehaviorSubject.__proto__),
      [_wrapper$]: dart.fieldType(behavior_subject._Wrapper$(T))
    }));
    return BehaviorSubject;
  });
  behavior_subject.BehaviorSubject = behavior_subject.BehaviorSubject$();
  dart.addTypeTests(behavior_subject.BehaviorSubject, _is_BehaviorSubject_default);
  const _is__Wrapper_default = Symbol('_is__Wrapper_default');
  const latestValue$ = dart.privateName(behavior_subject, "_Wrapper.latestValue");
  behavior_subject._Wrapper$ = dart.generic(T => {
    class _Wrapper extends core.Object {
      get latestValue() {
        return this[latestValue$];
      }
      set latestValue(value) {
        this[latestValue$] = T._check(value);
      }
      setValue(event) {
        T._check(event);
        this.latestIsValue = true;
        this.latestIsError = false;
        this.latestValue = event;
        this.latestError = null;
        this.latestStackTrace = null;
      }
      setError(error, stackTrace = null) {
        this.latestIsValue = false;
        this.latestIsError = true;
        this.latestValue = null;
        this.latestError = error;
        this.latestStackTrace = stackTrace;
      }
    }
    (_Wrapper.new = function() {
      this.latestError = null;
      this.latestStackTrace = null;
      this.latestIsValue = false;
      this.latestIsError = false;
      this[latestValue$] = null;
      ;
    }).prototype = _Wrapper.prototype;
    (_Wrapper.seeded = function(latestValue) {
      this.latestError = null;
      this.latestStackTrace = null;
      this.latestIsValue = false;
      this.latestIsError = false;
      this[latestValue$] = latestValue;
      this.latestIsValue = true;
      ;
    }).prototype = _Wrapper.prototype;
    dart.addTypeTests(_Wrapper);
    _Wrapper.prototype[_is__Wrapper_default] = true;
    dart.setMethodSignature(_Wrapper, () => ({
      __proto__: dart.getMethods(_Wrapper.__proto__),
      setValue: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [core.Object], [core.StackTrace])
    }));
    dart.setLibraryUri(_Wrapper, "package:rxdart/src/subjects/behavior_subject.dart");
    dart.setFieldSignature(_Wrapper, () => ({
      __proto__: dart.getFields(_Wrapper.__proto__),
      latestValue: dart.fieldType(T),
      latestError: dart.fieldType(core.Object),
      latestStackTrace: dart.fieldType(core.StackTrace),
      latestIsValue: dart.fieldType(core.bool),
      latestIsError: dart.fieldType(core.bool)
    }));
    return _Wrapper;
  });
  behavior_subject._Wrapper = behavior_subject._Wrapper$();
  dart.addTypeTests(behavior_subject._Wrapper, _is__Wrapper_default);
  const _transformer$23 = dart.privateName(start_with_error, "_transformer");
  const _is_StartWithErrorStreamTransformer_default = Symbol('_is_StartWithErrorStreamTransformer_default');
  start_with_error.StartWithErrorStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class StartWithErrorStreamTransformer extends async.StreamTransformerBase$(T, T) {
      bind(stream) {
        StreamOfT()._check(stream);
        return this[_transformer$23].bind(stream);
      }
      static _buildTransformer(T, error, stackTrace) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              try {
                controller.addError(error, stackTrace);
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn((resumeSignal = null) => subscription.pause(resumeSignal), FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithErrorStreamTransformer.new = function(error, stackTrace = null) {
      this[_transformer$23] = start_with_error.StartWithErrorStreamTransformer._buildTransformer(T, error, stackTrace);
      StartWithErrorStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = StartWithErrorStreamTransformer.prototype;
    dart.addTypeTests(StartWithErrorStreamTransformer);
    StartWithErrorStreamTransformer.prototype[_is_StartWithErrorStreamTransformer_default] = true;
    dart.setMethodSignature(StartWithErrorStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithErrorStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(StartWithErrorStreamTransformer, "package:rxdart/src/transformers/start_with_error.dart");
    dart.setFieldSignature(StartWithErrorStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithErrorStreamTransformer.__proto__),
      [_transformer$23]: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return StartWithErrorStreamTransformer;
  });
  start_with_error.StartWithErrorStreamTransformer = start_with_error.StartWithErrorStreamTransformer$();
  dart.addTypeTests(start_with_error.StartWithErrorStreamTransformer, _is_StartWithErrorStreamTransformer_default);
  dart.trackLibraries("packages/rxdart/futures", {
    "package:rxdart/src/transformers/backpressure/window.dart": window,
    "package:rxdart/src/transformers/backpressure/backpressure.dart": backpressure,
    "package:rxdart/subjects.dart": subjects,
    "package:rxdart/src/subjects/replay_subject.dart": replay_subject,
    "package:rxdart/src/subjects/subject.dart": subject,
    "package:rxdart/src/observables/observable.dart": observable,
    "package:rxdart/transformers.dart": transformers,
    "package:rxdart/src/transformers/backpressure/throttle.dart": throttle,
    "package:rxdart/src/transformers/backpressure/sample.dart": sample,
    "package:rxdart/src/transformers/backpressure/pairwise.dart": pairwise,
    "package:rxdart/src/transformers/backpressure/debounce.dart": debounce,
    "package:rxdart/src/transformers/backpressure/buffer.dart": buffer,
    "package:rxdart/src/utils/type_token.dart": type_token,
    "package:rxdart/src/transformers/with_latest_from.dart": with_latest_from,
    "package:rxdart/src/transformers/where_type.dart": where_type,
    "package:rxdart/src/transformers/timestamp.dart": timestamp,
    "package:rxdart/src/transformers/time_interval.dart": time_interval,
    "package:rxdart/src/transformers/take_until.dart": take_until,
    "package:rxdart/src/transformers/switch_map.dart": switch_map,
    "package:rxdart/src/transformers/switch_if_empty.dart": switch_if_empty,
    "package:rxdart/src/transformers/start_with_many.dart": start_with_many,
    "package:rxdart/src/transformers/start_with.dart": start_with,
    "package:rxdart/src/transformers/skip_until.dart": skip_until,
    "package:rxdart/src/transformers/scan.dart": scan,
    "package:rxdart/src/transformers/on_error_resume.dart": on_error_resume,
    "package:rxdart/src/transformers/of_type.dart": of_type,
    "package:rxdart/src/transformers/map_to.dart": map_to,
    "package:rxdart/src/transformers/interval.dart": interval,
    "package:rxdart/src/transformers/ignore_elements.dart": ignore_elements,
    "package:rxdart/src/transformers/group_by.dart": group_by,
    "package:rxdart/src/transformers/flat_map.dart": flat_map,
    "package:rxdart/src/transformers/exhaust_map.dart": exhaust_map,
    "package:rxdart/src/transformers/do.dart": $do,
    "package:rxdart/src/transformers/distinct_unique.dart": distinct_unique,
    "package:rxdart/src/transformers/dematerialize.dart": dematerialize,
    "package:rxdart/src/transformers/delay.dart": delay,
    "package:rxdart/src/transformers/default_if_empty.dart": default_if_empty,
    "package:rxdart/src/observables/value_observable.dart": value_observable,
    "package:rxdart/src/observables/replay_observable.dart": replay_observable,
    "package:rxdart/src/observables/connectable_observable.dart": connectable_observable,
    "package:rxdart/rxdart.dart": rxdart,
    "package:rxdart/src/utils/composite_subscription.dart": composite_subscription,
    "package:rxdart/futures.dart": futures,
    "package:rxdart/src/futures/wrapped_future.dart": wrapped_future,
    "package:rxdart/src/futures/stream_min_future.dart": stream_min_future,
    "package:rxdart/src/futures/stream_max_future.dart": stream_max_future,
    "package:rxdart/src/futures/as_observable_future.dart": as_observable_future,
    "package:rxdart/src/subjects/publish_subject.dart": publish_subject,
    "package:rxdart/src/subjects/behavior_subject.dart": behavior_subject,
    "package:rxdart/src/transformers/start_with_error.dart": start_with_error
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/transformers/backpressure/backpressure.dart","src/transformers/backpressure/window.dart","src/observables/observable.dart","src/subjects/subject.dart","src/subjects/replay_subject.dart","src/transformers/backpressure/throttle.dart","src/transformers/backpressure/sample.dart","src/transformers/backpressure/pairwise.dart","src/transformers/backpressure/debounce.dart","src/transformers/backpressure/buffer.dart","src/utils/type_token.dart","src/transformers/with_latest_from.dart","src/transformers/where_type.dart","src/transformers/timestamp.dart","src/transformers/time_interval.dart","src/transformers/take_until.dart","src/transformers/switch_map.dart","src/transformers/switch_if_empty.dart","src/transformers/start_with_many.dart","src/transformers/start_with.dart","src/transformers/skip_until.dart","src/transformers/scan.dart","src/transformers/on_error_resume.dart","src/transformers/of_type.dart","src/transformers/map_to.dart","src/transformers/interval.dart","src/transformers/ignore_elements.dart","src/transformers/group_by.dart","src/transformers/flat_map.dart","src/transformers/exhaust_map.dart","src/transformers/do.dart","src/transformers/distinct_unique.dart","src/transformers/dematerialize.dart","src/transformers/delay.dart","src/transformers/default_if_empty.dart","src/observables/value_observable.dart","src/observables/replay_observable.dart","src/observables/connectable_observable.dart","src/utils/composite_subscription.dart","src/futures/wrapped_future.dart","src/futures/stream_min_future.dart","src/futures/stream_max_future.dart","src/futures/as_observable_future.dart","src/subjects/publish_subject.dart","src/subjects/behavior_subject.dart","src/transformers/start_with_error.dart"],"names":[],"mappings":"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","file":"futures.ddc.js"}');
  // Exports:
  return {
    src__transformers__backpressure__window: window,
    src__transformers__backpressure__backpressure: backpressure,
    subjects: subjects,
    src__subjects__replay_subject: replay_subject,
    src__subjects__subject: subject,
    src__observables__observable: observable,
    transformers: transformers,
    src__transformers__backpressure__throttle: throttle,
    src__transformers__backpressure__sample: sample,
    src__transformers__backpressure__pairwise: pairwise,
    src__transformers__backpressure__debounce: debounce,
    src__transformers__backpressure__buffer: buffer,
    src__utils__type_token: type_token,
    src__transformers__with_latest_from: with_latest_from,
    src__transformers__where_type: where_type,
    src__transformers__timestamp: timestamp,
    src__transformers__time_interval: time_interval,
    src__transformers__take_until: take_until,
    src__transformers__switch_map: switch_map,
    src__transformers__switch_if_empty: switch_if_empty,
    src__transformers__start_with_many: start_with_many,
    src__transformers__start_with: start_with,
    src__transformers__skip_until: skip_until,
    src__transformers__scan: scan,
    src__transformers__on_error_resume: on_error_resume,
    src__transformers__of_type: of_type,
    src__transformers__map_to: map_to,
    src__transformers__interval: interval,
    src__transformers__ignore_elements: ignore_elements,
    src__transformers__group_by: group_by,
    src__transformers__flat_map: flat_map,
    src__transformers__exhaust_map: exhaust_map,
    src__transformers__do: $do,
    src__transformers__distinct_unique: distinct_unique,
    src__transformers__dematerialize: dematerialize,
    src__transformers__delay: delay,
    src__transformers__default_if_empty: default_if_empty,
    src__observables__value_observable: value_observable,
    src__observables__replay_observable: replay_observable,
    src__observables__connectable_observable: connectable_observable,
    rxdart: rxdart,
    src__utils__composite_subscription: composite_subscription,
    futures: futures,
    src__futures__wrapped_future: wrapped_future,
    src__futures__stream_min_future: stream_min_future,
    src__futures__stream_max_future: stream_max_future,
    src__futures__as_observable_future: as_observable_future,
    src__subjects__publish_subject: publish_subject,
    src__subjects__behavior_subject: behavior_subject,
    src__transformers__start_with_error: start_with_error
  };
});

//# sourceMappingURL=futures.ddc.js.map
