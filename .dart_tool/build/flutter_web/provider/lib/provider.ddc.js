define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions', 'packages/nested/nested', 'packages/collection/src/comparators'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions, packages__nested__nested, packages__collection__src__comparators) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const nested = packages__nested__nested.nested;
  const equality = packages__collection__src__comparators.src__equality;
  const listenable_provider = Object.create(dart.library);
  const proxy_provider = Object.create(dart.library);
  const provider = Object.create(dart.library);
  const provider$ = Object.create(dart.library);
  const value_listenable_provider = Object.create(dart.library);
  const selector = Object.create(dart.library);
  const consumer = Object.create(dart.library);
  const change_notifier_provider = Object.create(dart.library);
  const async_provider = Object.create(dart.library);
  const $_equals = dartx._equals;
  const $runtimeType = dartx.runtimeType;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let InheritedContextOfListenable = () => (InheritedContextOfListenable = dart.constFn(provider.InheritedContext$(change_notifier.Listenable)))();
  let InheritedContextOfListenableAndListenableToFn = () => (InheritedContextOfListenableAndListenableToFn = dart.constFn(dart.fnType(VoidTovoid(), [InheritedContextOfListenable(), change_notifier.Listenable])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let ElementTobool = () => (ElementTobool = dart.constFn(dart.fnType(core.bool, [framework.Element])))();
  let TToNull = () => (TToNull = dart.constFn(dart.gFnType(T => [core.Null, [T]])))();
  let ElementToNull = () => (ElementToNull = dart.constFn(dart.fnType(core.Null, [framework.Element])))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  let ValueListenableOfObject = () => (ValueListenableOfObject = dart.constFn(change_notifier.ValueListenable$(core.Object)))();
  let BuildContextAndValueListenableOfObjectTovoid = () => (BuildContextAndValueListenableOfObjectTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, ValueListenableOfObject()])))();
  let BuildContextAndChangeNotifierTovoid = () => (BuildContextAndChangeNotifierTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, change_notifier.ChangeNotifier])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(listenable_provider.ListenableProvider._startListening, InheritedContextOfListenableAndListenableToFn());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "owner",
        [_Location_column]: 7,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/provider/src/inherited_provider.dart"
      });
    },
    get C5() {
      return C5 = dart.fn(value_listenable_provider.ValueListenableProvider._dispose, BuildContextAndValueListenableOfObjectTovoid());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: equality.DefaultEquality.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: equality.DeepCollectionEquality.prototype,
        [DeepCollectionEquality__unordered]: false,
        [DeepCollectionEquality__base]: C7 || CT.C7
      });
    },
    get C8() {
      return C8 = dart.fn(change_notifier_provider.ChangeNotifierProvider._dispose, BuildContextAndChangeNotifierTovoid());
    }
  });
  let C0;
  const _lazy = dart.privateName(provider, "_lazy");
  const _delegate = dart.privateName(provider, "_delegate");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C2;
  let C1;
  const _is_InheritedProvider_default = Symbol('_is_InheritedProvider_default');
  provider.InheritedProvider$ = dart.generic(T => {
    let _CreateInheritedProviderOfT = () => (_CreateInheritedProviderOfT = dart.constFn(provider._CreateInheritedProvider$(T)))();
    let _ValueInheritedProviderOfT = () => (_ValueInheritedProviderOfT = dart.constFn(provider._ValueInheritedProvider$(T)))();
    let _InheritedProvderElementOfT = () => (_InheritedProvderElementOfT = dart.constFn(provider._InheritedProvderElement$(T)))();
    let _DefaultInheritedProviderScopeOfT = () => (_DefaultInheritedProviderScopeOfT = dart.constFn(provider._DefaultInheritedProviderScope$(T)))();
    class InheritedProvider extends nested.SingleChildStatelessWidget {
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        this[_delegate].debugFillProperties(properties);
      }
      createElement() {
        return new (_InheritedProvderElementOfT()).new(this);
      }
      buildWithChild(context, child) {
        return new (_DefaultInheritedProviderScopeOfT()).new({owner: this, child: child, $creationLocationd_0dea112b090073317d4: C1 || CT.C1});
      }
    }
    (InheritedProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let debugCheckInvalidValueType = opts && 'debugCheckInvalidValueType' in opts ? opts.debugCheckInvalidValueType : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[_lazy] = lazy;
      this[_delegate] = new (_CreateInheritedProviderOfT()).new({create: create, update: update, updateShouldNotify: updateShouldNotify, debugCheckInvalidValueType: debugCheckInvalidValueType, startListening: startListening, dispose: dispose});
      InheritedProvider.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = InheritedProvider.prototype;
    (InheritedProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[_lazy] = lazy;
      this[_delegate] = new (_ValueInheritedProviderOfT()).new({value: value, updateShouldNotify: updateShouldNotify, startListening: startListening});
      InheritedProvider.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = InheritedProvider.prototype;
    (InheritedProvider._constructor = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[_lazy] = lazy;
      this[_delegate] = delegate;
      InheritedProvider.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = InheritedProvider.prototype;
    dart.addTypeTests(InheritedProvider);
    InheritedProvider.prototype[_is_InheritedProvider_default] = true;
    dart.setMethodSignature(InheritedProvider, () => ({
      __proto__: dart.getMethods(InheritedProvider.__proto__),
      createElement: dart.fnType(provider._InheritedProvderElement$(T), []),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])
    }));
    dart.setLibraryUri(InheritedProvider, "package:provider/src/provider.dart");
    dart.setFieldSignature(InheritedProvider, () => ({
      __proto__: dart.getFields(InheritedProvider.__proto__),
      [_delegate]: dart.finalFieldType(provider._Delegate$(T)),
      [_lazy]: dart.finalFieldType(core.bool)
    }));
    return InheritedProvider;
  });
  provider.InheritedProvider = provider.InheritedProvider$();
  dart.addTypeTests(provider.InheritedProvider, _is_InheritedProvider_default);
  const _is_ListenableProvider_default = Symbol('_is_ListenableProvider_default');
  listenable_provider.ListenableProvider$ = dart.generic(T => {
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class ListenableProvider extends provider.InheritedProvider$(T) {
      static _startListening(e, value) {
        let t0;
        t0 = value;
        t0 == null ? null : t0.addListener(dart.bind(e, 'markNeedsNotifyDependents'));
        return dart.fn(() => {
          let t0;
          t0 = value;
          return t0 == null ? null : t0.removeListener(dart.bind(e, 'markNeedsNotifyDependents'));
        }, VoidTovoid());
      }
    }
    (ListenableProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(create != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 30, 16, "create != null");
      ListenableProvider.__proto__.new.call(this, {key: key, startListening: C0 || CT.C0, create: create, dispose: dispose, debugCheckInvalidValueType: false ? null : dart.fn(value => {
          if (change_notifier.ChangeNotifier.is(value)) {
            if (!!dart.test(value.hasListeners)) dart.assertFailed("The default constructor of ListenableProvider/ChangeNotifierProvider\nmust create a new, unused Listenable.\n\nIf you want to reuse an existing Listenable, use the second constructor:\n\n- DO use ChangeNotifierProvider.value to provider an existing ChangeNotifier:\n\nMyChangeNotifier variable;\nChangeNotifierProvider.value(\n  value: variable,\n  child: ...\n)\n\n- DON'T reuse an existing ChangeNotifier using the default constructor.\n\nMyChangeNotifier variable;\nChangeNotifierProvider(\n  create: (_) => variable,\n  child: ...\n)\n", "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 41, 28, "!value.hasListeners");
          }
        }, TToNull()), lazy: lazy, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProvider.prototype;
    (ListenableProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProvider.__proto__.value.call(this, {key: key, value: value, updateShouldNotify: updateShouldNotify, startListening: C0 || CT.C0, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProvider.prototype;
    dart.addTypeTests(ListenableProvider);
    ListenableProvider.prototype[_is_ListenableProvider_default] = true;
    dart.setLibraryUri(ListenableProvider, "package:provider/src/listenable_provider.dart");
    return ListenableProvider;
  });
  listenable_provider.ListenableProvider = listenable_provider.ListenableProvider$();
  dart.addTypeTests(listenable_provider.ListenableProvider, _is_ListenableProvider_default);
  const _is_ListenableProxyProvider0_default = Symbol('_is_ListenableProxyProvider0_default');
  listenable_provider.ListenableProxyProvider0$ = dart.generic(R => {
    let RToNull = () => (RToNull = dart.constFn(dart.fnType(core.Null, [R])))();
    class ListenableProxyProvider0 extends provider.InheritedProvider$(R) {}
    (ListenableProxyProvider0.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(create != null || update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 103, 16, "create != null || update != null");
      ListenableProxyProvider0.__proto__.new.call(this, {key: key, create: create, update: update, lazy: lazy, dispose: dispose, updateShouldNotify: updateShouldNotify, startListening: C0 || CT.C0, debugCheckInvalidValueType: false ? null : dart.fn(value => {
          if (change_notifier.ChangeNotifier.is(value)) {
            if (!!dart.equals(value.hasListeners, true)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 117, 28, "value.hasListeners != true");
          }
        }, RToNull()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider0.prototype;
    dart.addTypeTests(ListenableProxyProvider0);
    ListenableProxyProvider0.prototype[_is_ListenableProxyProvider0_default] = true;
    dart.setLibraryUri(ListenableProxyProvider0, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider0;
  });
  listenable_provider.ListenableProxyProvider0 = listenable_provider.ListenableProxyProvider0$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider0, _is_ListenableProxyProvider0_default);
  const _is_ListenableProxyProvider_default = Symbol('_is_ListenableProxyProvider_default');
  listenable_provider.ListenableProxyProvider$ = dart.generic((T, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ListenableProxyProvider extends listenable_provider.ListenableProxyProvider0$(R) {}
    (ListenableProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(create != null || update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 147, 16, "create != null || update != null");
      ListenableProxyProvider.__proto__.new.call(this, {key: key, create: create, lazy: lazy, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), previous), BuildContextAndRToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider.prototype;
    dart.addTypeTests(ListenableProxyProvider);
    ListenableProxyProvider.prototype[_is_ListenableProxyProvider_default] = true;
    dart.setLibraryUri(ListenableProxyProvider, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider;
  });
  listenable_provider.ListenableProxyProvider = listenable_provider.ListenableProxyProvider$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider, _is_ListenableProxyProvider_default);
  const _is_ListenableProxyProvider2_default = Symbol('_is_ListenableProxyProvider2_default');
  listenable_provider.ListenableProxyProvider2$ = dart.generic((T, T2, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ListenableProxyProvider2 extends listenable_provider.ListenableProxyProvider0$(R) {}
    (ListenableProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(create != null || update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 172, 16, "create != null || update != null");
      ListenableProxyProvider2.__proto__.new.call(this, {key: key, create: create, lazy: lazy, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), previous), BuildContextAndRToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider2.prototype;
    dart.addTypeTests(ListenableProxyProvider2);
    ListenableProxyProvider2.prototype[_is_ListenableProxyProvider2_default] = true;
    dart.setLibraryUri(ListenableProxyProvider2, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider2;
  });
  listenable_provider.ListenableProxyProvider2 = listenable_provider.ListenableProxyProvider2$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider2, _is_ListenableProxyProvider2_default);
  const _is_ListenableProxyProvider3_default = Symbol('_is_ListenableProxyProvider3_default');
  listenable_provider.ListenableProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ListenableProxyProvider3 extends listenable_provider.ListenableProxyProvider0$(R) {}
    (ListenableProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(create != null || update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 198, 16, "create != null || update != null");
      ListenableProxyProvider3.__proto__.new.call(this, {key: key, create: create, lazy: lazy, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), previous), BuildContextAndRToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider3.prototype;
    dart.addTypeTests(ListenableProxyProvider3);
    ListenableProxyProvider3.prototype[_is_ListenableProxyProvider3_default] = true;
    dart.setLibraryUri(ListenableProxyProvider3, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider3;
  });
  listenable_provider.ListenableProxyProvider3 = listenable_provider.ListenableProxyProvider3$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider3, _is_ListenableProxyProvider3_default);
  const _is_ListenableProxyProvider4_default = Symbol('_is_ListenableProxyProvider4_default');
  listenable_provider.ListenableProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ListenableProxyProvider4 extends listenable_provider.ListenableProxyProvider0$(R) {}
    (ListenableProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(create != null || update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 225, 16, "create != null || update != null");
      ListenableProxyProvider4.__proto__.new.call(this, {key: key, create: create, lazy: lazy, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), provider.Provider.of(T4, context), previous), BuildContextAndRToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider4.prototype;
    dart.addTypeTests(ListenableProxyProvider4);
    ListenableProxyProvider4.prototype[_is_ListenableProxyProvider4_default] = true;
    dart.setLibraryUri(ListenableProxyProvider4, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider4;
  });
  listenable_provider.ListenableProxyProvider4 = listenable_provider.ListenableProxyProvider4$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider4, _is_ListenableProxyProvider4_default);
  const _is_ListenableProxyProvider5_default = Symbol('_is_ListenableProxyProvider5_default');
  listenable_provider.ListenableProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ListenableProxyProvider5 extends listenable_provider.ListenableProxyProvider0$(R) {}
    (ListenableProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(create != null || update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 253, 16, "create != null || update != null");
      ListenableProxyProvider5.__proto__.new.call(this, {key: key, create: create, lazy: lazy, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), provider.Provider.of(T4, context), provider.Provider.of(T5, context), previous), BuildContextAndRToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider5.prototype;
    dart.addTypeTests(ListenableProxyProvider5);
    ListenableProxyProvider5.prototype[_is_ListenableProxyProvider5_default] = true;
    dart.setLibraryUri(ListenableProxyProvider5, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider5;
  });
  listenable_provider.ListenableProxyProvider5 = listenable_provider.ListenableProxyProvider5$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider5, _is_ListenableProxyProvider5_default);
  const _is_ListenableProxyProvider6_default = Symbol('_is_ListenableProxyProvider6_default');
  listenable_provider.ListenableProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ListenableProxyProvider6 extends listenable_provider.ListenableProxyProvider0$(R) {}
    (ListenableProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(create != null || update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 282, 16, "create != null || update != null");
      ListenableProxyProvider6.__proto__.new.call(this, {key: key, create: create, lazy: lazy, update: dart.fn((context, previous) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), provider.Provider.of(T4, context), provider.Provider.of(T5, context), provider.Provider.of(T6, context), previous), BuildContextAndRToR()), dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider6.prototype;
    dart.addTypeTests(ListenableProxyProvider6);
    ListenableProxyProvider6.prototype[_is_ListenableProxyProvider6_default] = true;
    dart.setLibraryUri(ListenableProxyProvider6, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider6;
  });
  listenable_provider.ListenableProxyProvider6 = listenable_provider.ListenableProxyProvider6$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider6, _is_ListenableProxyProvider6_default);
  const _is_ProxyProvider0_default = Symbol('_is_ProxyProvider0_default');
  proxy_provider.ProxyProvider0$ = dart.generic(R => {
    let RTovoid = () => (RTovoid = dart.constFn(dart.fnType(dart.void, [R])))();
    class ProxyProvider0 extends provider.InheritedProvider$(R) {}
    (ProxyProvider0.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/proxy_provider.dart", 75, 16, "update != null");
      ProxyProvider0.__proto__.new.call(this, {key: key, lazy: lazy, create: create, update: update, dispose: dispose, updateShouldNotify: updateShouldNotify, debugCheckInvalidValueType: false ? null : dart.fn(value => {
          let t0;
          t0 = provider.Provider.debugCheckInvalidValueType;
          return t0 == null ? null : t0(R, value);
        }, RTovoid()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider0.prototype;
    dart.addTypeTests(ProxyProvider0);
    ProxyProvider0.prototype[_is_ProxyProvider0_default] = true;
    dart.setLibraryUri(ProxyProvider0, "package:provider/src/proxy_provider.dart");
    return ProxyProvider0;
  });
  proxy_provider.ProxyProvider0 = proxy_provider.ProxyProvider0$();
  dart.addTypeTests(proxy_provider.ProxyProvider0, _is_ProxyProvider0_default);
  const _is_ProxyProvider_default = Symbol('_is_ProxyProvider_default');
  proxy_provider.ProxyProvider$ = dart.generic((T, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ProxyProvider extends proxy_provider.ProxyProvider0$(R) {}
    (ProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/proxy_provider.dart", 145, 16, "update != null");
      ProxyProvider.__proto__.new.call(this, {key: key, lazy: lazy, create: create, update: dart.fn((context, value) => update(context, provider.Provider.of(T, context), value), BuildContextAndRToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider.prototype;
    dart.addTypeTests(ProxyProvider);
    ProxyProvider.prototype[_is_ProxyProvider_default] = true;
    dart.setLibraryUri(ProxyProvider, "package:provider/src/proxy_provider.dart");
    return ProxyProvider;
  });
  proxy_provider.ProxyProvider = proxy_provider.ProxyProvider$();
  dart.addTypeTests(proxy_provider.ProxyProvider, _is_ProxyProvider_default);
  const _is_ProxyProvider2_default = Symbol('_is_ProxyProvider2_default');
  proxy_provider.ProxyProvider2$ = dart.generic((T, T2, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ProxyProvider2 extends proxy_provider.ProxyProvider0$(R) {}
    (ProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/proxy_provider.dart", 172, 16, "update != null");
      ProxyProvider2.__proto__.new.call(this, {key: key, lazy: lazy, create: create, update: dart.fn((context, value) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), value), BuildContextAndRToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider2.prototype;
    dart.addTypeTests(ProxyProvider2);
    ProxyProvider2.prototype[_is_ProxyProvider2_default] = true;
    dart.setLibraryUri(ProxyProvider2, "package:provider/src/proxy_provider.dart");
    return ProxyProvider2;
  });
  proxy_provider.ProxyProvider2 = proxy_provider.ProxyProvider2$();
  dart.addTypeTests(proxy_provider.ProxyProvider2, _is_ProxyProvider2_default);
  const _is_ProxyProvider3_default = Symbol('_is_ProxyProvider3_default');
  proxy_provider.ProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ProxyProvider3 extends proxy_provider.ProxyProvider0$(R) {}
    (ProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/proxy_provider.dart", 200, 16, "update != null");
      ProxyProvider3.__proto__.new.call(this, {key: key, lazy: lazy, create: create, update: dart.fn((context, value) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), value), BuildContextAndRToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider3.prototype;
    dart.addTypeTests(ProxyProvider3);
    ProxyProvider3.prototype[_is_ProxyProvider3_default] = true;
    dart.setLibraryUri(ProxyProvider3, "package:provider/src/proxy_provider.dart");
    return ProxyProvider3;
  });
  proxy_provider.ProxyProvider3 = proxy_provider.ProxyProvider3$();
  dart.addTypeTests(proxy_provider.ProxyProvider3, _is_ProxyProvider3_default);
  const _is_ProxyProvider4_default = Symbol('_is_ProxyProvider4_default');
  proxy_provider.ProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ProxyProvider4 extends proxy_provider.ProxyProvider0$(R) {}
    (ProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/proxy_provider.dart", 229, 16, "update != null");
      ProxyProvider4.__proto__.new.call(this, {key: key, lazy: lazy, create: create, update: dart.fn((context, value) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), provider.Provider.of(T4, context), value), BuildContextAndRToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider4.prototype;
    dart.addTypeTests(ProxyProvider4);
    ProxyProvider4.prototype[_is_ProxyProvider4_default] = true;
    dart.setLibraryUri(ProxyProvider4, "package:provider/src/proxy_provider.dart");
    return ProxyProvider4;
  });
  proxy_provider.ProxyProvider4 = proxy_provider.ProxyProvider4$();
  dart.addTypeTests(proxy_provider.ProxyProvider4, _is_ProxyProvider4_default);
  const _is_ProxyProvider5_default = Symbol('_is_ProxyProvider5_default');
  proxy_provider.ProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ProxyProvider5 extends proxy_provider.ProxyProvider0$(R) {}
    (ProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/proxy_provider.dart", 259, 16, "update != null");
      ProxyProvider5.__proto__.new.call(this, {key: key, lazy: lazy, create: create, update: dart.fn((context, value) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), provider.Provider.of(T4, context), provider.Provider.of(T5, context), value), BuildContextAndRToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider5.prototype;
    dart.addTypeTests(ProxyProvider5);
    ProxyProvider5.prototype[_is_ProxyProvider5_default] = true;
    dart.setLibraryUri(ProxyProvider5, "package:provider/src/proxy_provider.dart");
    return ProxyProvider5;
  });
  proxy_provider.ProxyProvider5 = proxy_provider.ProxyProvider5$();
  dart.addTypeTests(proxy_provider.ProxyProvider5, _is_ProxyProvider5_default);
  const _is_ProxyProvider6_default = Symbol('_is_ProxyProvider6_default');
  proxy_provider.ProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let BuildContextAndRToR = () => (BuildContextAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, R])))();
    class ProxyProvider6 extends proxy_provider.ProxyProvider0$(R) {}
    (ProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/proxy_provider.dart", 290, 16, "update != null");
      ProxyProvider6.__proto__.new.call(this, {key: key, lazy: lazy, create: create, update: dart.fn((context, value) => update(context, provider.Provider.of(T, context), provider.Provider.of(T2, context), provider.Provider.of(T3, context), provider.Provider.of(T4, context), provider.Provider.of(T5, context), provider.Provider.of(T6, context), value), BuildContextAndRToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider6.prototype;
    dart.addTypeTests(ProxyProvider6);
    ProxyProvider6.prototype[_is_ProxyProvider6_default] = true;
    dart.setLibraryUri(ProxyProvider6, "package:provider/src/proxy_provider.dart");
    return ProxyProvider6;
  });
  proxy_provider.ProxyProvider6 = proxy_provider.ProxyProvider6$();
  dart.addTypeTests(proxy_provider.ProxyProvider6, _is_ProxyProvider6_default);
  provider.MultiProvider = class MultiProvider extends nested.Nested {};
  (provider.MultiProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(providers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/provider.dart", 51, 16, "providers != null");
    provider.MultiProvider.__proto__.new.call(this, {key: key, children: providers, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = provider.MultiProvider.prototype;
  dart.addTypeTests(provider.MultiProvider);
  dart.setLibraryUri(provider.MultiProvider, "package:provider/src/provider.dart");
  const _is_Provider_default = Symbol('_is_Provider_default');
  provider.Provider$ = dart.generic(T => {
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class Provider extends provider.InheritedProvider$(T) {
      static of(T, context, opts) {
        let listen = opts && 'listen' in opts ? opts.listen : true;
        if (!!dart.wrapType(T)[$_equals](dart.wrapType(dart.dynamic))) dart.assertFailed("Tried to call Provider.of<dynamic>. This is likely a mistake and is therefore\nunsupported.\n\nIf you want to expose a variable that can be anything, consider changing\n`dynamic` to `Object` instead.\n", "org-dartlang-app:///packages/provider/src/provider.dart", 183, 7, "T != dynamic");
        if (!(dart.test(context.owner.debugBuilding) || dart.equals(listen, false) || dart.test(provider._debugIsInInheritedProviderUpdate))) dart.assertFailed("Tried to listen to a value exposed with provider, from outside of the widget tree.\n\nThis is likely caused by an event handler (like a button's onPressed) that called\nProvider.of without passing `listen: false`.\n\nTo fix, write:\nProvider.of<" + dart.str(dart.wrapType(T)) + ">(context, listen: false);\n\nIt is unsupported because may pointlessly rebuild the widget associated to the\nevent handler, when the widget tree doesn't care about the value.\n", "org-dartlang-app:///packages/provider/src/provider.dart", 193, 7, "context.owner.debugBuilding || listen == false || _debugIsInInheritedProviderUpdate");
        let inheritedElement = null;
        if (provider._DefaultInheritedProviderScope$(T).is(context.widget)) {
          context.visitAncestorElements(dart.fn(parent => {
            inheritedElement = provider._DefaultInheritedProviderScopeElement$(T).as(parent.getElementForInheritedWidgetOfExactType(provider._DefaultInheritedProviderScope$(T)));
            return false;
          }, ElementTobool()));
        } else {
          inheritedElement = provider._DefaultInheritedProviderScopeElement$(T).as(context.getElementForInheritedWidgetOfExactType(provider._DefaultInheritedProviderScope$(T)));
        }
        if (inheritedElement == null) {
          dart.throw(new provider.ProviderNotFoundException.new(dart.wrapType(T), dart.runtimeType(context.widget)));
        }
        if (dart.test(listen)) {
          context.dependOnInheritedElement(framework.InheritedElement.as(inheritedElement));
        }
        return inheritedElement.value;
      }
    }
    (Provider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(create != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/provider.dart", 128, 16, "create != null");
      Provider.__proto__.new.call(this, {key: key, lazy: lazy, create: create, dispose: dispose, debugCheckInvalidValueType: false ? null : dart.fn(value => {
          let t0;
          t0 = provider.Provider.debugCheckInvalidValueType;
          return t0 == null ? null : t0(T, value);
        }, TTovoid()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Provider.prototype;
    (Provider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!dart.test(dart.fn(() => {
        let t0;
        t0 = provider.Provider.debugCheckInvalidValueType;
        t0 == null ? null : t0(T, value);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/provider.dart", 153, 16, "() {\n          Provider.debugCheckInvalidValueType?.call<T>(value);\n          return true;\n        }()");
      Provider.__proto__.value.call(this, {key: key, value: value, updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    dart.setLibraryUri(Provider, "package:provider/src/provider.dart");
    return Provider;
  });
  provider.Provider = provider.Provider$();
  dart.defineLazy(provider.Provider, {
    /*provider.Provider.debugCheckInvalidValueType*/get debugCheckInvalidValueType() {
      return dart.fn((T, value) => {
        if (!dart.test(dart.fn(() => {
          if (change_notifier.Listenable.is(value) || async.Stream.is(value)) {
            dart.throw(assertions.FlutterError.new("Tried to use Provider with a subtype of Listenable/Stream (" + dart.str(dart.wrapType(T)) + ").\n\nThis is likely a mistake, as Provider will not automatically update dependents\nwhen " + dart.str(dart.wrapType(T)) + " is updated. Instead, consider changing Provider for more specific\nimplementation that handles the update mechanism, such as:\n\n- ListenableProvider\n- ChangeNotifierProvider\n- ValueListenableProvider\n- StreamProvider\n\nAlternatively, if you are making your own provider, consider using InheritedProvider.\n\nIf you think that this is not an error, you can disable this check by setting\nProvider.debugCheckInvalidValueType to `null` in your main file:\n\n```\nvoid main() {\n  Provider.debugCheckInvalidValueType = null;\n\n  runApp(MyApp());\n}\n```\n"));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/provider.dart", 251, 12, "() {\n      if (value is Listenable || value is Stream) {\n        throw FlutterError('''\nTried to use Provider with a subtype of Listenable/Stream ($T).\n\nThis is likely a mistake, as Provider will not automatically update dependents\nwhen $T is updated. Instead, consider changing Provider for more specific\nimplementation that handles the update mechanism, such as:\n\n- ListenableProvider\n- ChangeNotifierProvider\n- ValueListenableProvider\n- StreamProvider\n\nAlternatively, if you are making your own provider, consider using InheritedProvider.\n\nIf you think that this is not an error, you can disable this check by setting\nProvider.debugCheckInvalidValueType to `null` in your main file:\n\n```\nvoid main() {\n  Provider.debugCheckInvalidValueType = null;\n\n  runApp(MyApp());\n}\n```\n''');\n      }\n      return true;\n    }()");
      }, TToNull());
    },
    set debugCheckInvalidValueType(_) {}
  });
  dart.addTypeTests(provider.Provider, _is_Provider_default);
  const valueType$ = dart.privateName(provider, "ProviderNotFoundException.valueType");
  const widgetType$ = dart.privateName(provider, "ProviderNotFoundException.widgetType");
  provider.ProviderNotFoundException = class ProviderNotFoundException extends core.Object {
    get valueType() {
      return this[valueType$];
    }
    set valueType(value) {
      super.valueType = value;
    }
    get widgetType() {
      return this[widgetType$];
    }
    set widgetType(value) {
      super.widgetType = value;
    }
    toString() {
      return "Error: Could not find the correct Provider<" + dart.str(this.valueType) + "> above this " + dart.str(this.widgetType) + " Widget\n\nTo fix, please:\n\n  * Ensure the Provider<" + dart.str(this.valueType) + "> is an ancestor to this " + dart.str(this.widgetType) + " Widget\n  * Provide types to Provider<" + dart.str(this.valueType) + ">\n  * Provide types to Consumer<" + dart.str(this.valueType) + ">\n  * Provide types to Provider.of<" + dart.str(this.valueType) + ">()\n  * Always use package imports. Ex: `import 'package:my_app/my_code.dart';\n  * Ensure the correct `context` is being used.\n\nIf none of these solutions work, please file a bug at:\nhttps://github.com/rrousselGit/provider/issues\n";
    }
  };
  (provider.ProviderNotFoundException.new = function(valueType, widgetType) {
    this[valueType$] = valueType;
    this[widgetType$] = widgetType;
    ;
  }).prototype = provider.ProviderNotFoundException.prototype;
  dart.addTypeTests(provider.ProviderNotFoundException);
  provider.ProviderNotFoundException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(provider.ProviderNotFoundException, "package:provider/src/provider.dart");
  dart.setFieldSignature(provider.ProviderNotFoundException, () => ({
    __proto__: dart.getFields(provider.ProviderNotFoundException.__proto__),
    valueType: dart.finalFieldType(core.Type),
    widgetType: dart.finalFieldType(core.Type)
  }));
  dart.defineExtensionMethods(provider.ProviderNotFoundException, ['toString']);
  const _is__InheritedProvderElement_default = Symbol('_is__InheritedProvderElement_default');
  provider._InheritedProvderElement$ = dart.generic(T => {
    class _InheritedProvderElement extends nested.SingleChildStatelessElement {
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        this.visitChildren(dart.fn(e => {
          e.debugFillProperties(properties);
        }, ElementToNull()));
      }
    }
    (_InheritedProvderElement.new = function(widget) {
      _InheritedProvderElement.__proto__.new.call(this, widget);
      ;
    }).prototype = _InheritedProvderElement.prototype;
    dart.addTypeTests(_InheritedProvderElement);
    _InheritedProvderElement.prototype[_is__InheritedProvderElement_default] = true;
    dart.setLibraryUri(_InheritedProvderElement, "package:provider/src/provider.dart");
    return _InheritedProvderElement;
  });
  provider._InheritedProvderElement = provider._InheritedProvderElement$();
  dart.addTypeTests(provider._InheritedProvderElement, _is__InheritedProvderElement_default);
  const _is_InheritedContext_default = Symbol('_is_InheritedContext_default');
  provider.InheritedContext$ = dart.generic(T => {
    class InheritedContext extends framework.BuildContext {}
    (InheritedContext.new = function() {
      ;
    }).prototype = InheritedContext.prototype;
    dart.addTypeTests(InheritedContext);
    InheritedContext.prototype[_is_InheritedContext_default] = true;
    dart.setLibraryUri(InheritedContext, "package:provider/src/provider.dart");
    return InheritedContext;
  });
  provider.InheritedContext = provider.InheritedContext$();
  dart.addTypeTests(provider.InheritedContext, _is_InheritedContext_default);
  const _is__DefaultInheritedProviderScope_default = Symbol('_is__DefaultInheritedProviderScope_default');
  provider._DefaultInheritedProviderScope$ = dart.generic(T => {
    let _DefaultInheritedProviderScopeElementOfT = () => (_DefaultInheritedProviderScopeElementOfT = dart.constFn(provider._DefaultInheritedProviderScopeElement$(T)))();
    class _DefaultInheritedProviderScope extends framework.InheritedWidget {
      updateShouldNotify(oldWidget) {
        framework.InheritedWidget._check(oldWidget);
        return false;
      }
      createElement() {
        return new (_DefaultInheritedProviderScopeElementOfT()).new(this);
      }
    }
    (_DefaultInheritedProviderScope.new = function(opts) {
      let owner = opts && 'owner' in opts ? opts.owner : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this.owner = owner;
      _DefaultInheritedProviderScope.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _DefaultInheritedProviderScope.prototype;
    dart.addTypeTests(_DefaultInheritedProviderScope);
    _DefaultInheritedProviderScope.prototype[_is__DefaultInheritedProviderScope_default] = true;
    dart.setMethodSignature(_DefaultInheritedProviderScope, () => ({
      __proto__: dart.getMethods(_DefaultInheritedProviderScope.__proto__),
      updateShouldNotify: dart.fnType(core.bool, [core.Object]),
      createElement: dart.fnType(provider._DefaultInheritedProviderScopeElement$(T), [])
    }));
    dart.setLibraryUri(_DefaultInheritedProviderScope, "package:provider/src/provider.dart");
    dart.setFieldSignature(_DefaultInheritedProviderScope, () => ({
      __proto__: dart.getFields(_DefaultInheritedProviderScope.__proto__),
      owner: dart.finalFieldType(provider.InheritedProvider$(T))
    }));
    return _DefaultInheritedProviderScope;
  });
  provider._DefaultInheritedProviderScope = provider._DefaultInheritedProviderScope$();
  dart.addTypeTests(provider._DefaultInheritedProviderScope, _is__DefaultInheritedProviderScope_default);
  const _delegateState = dart.privateName(provider, "_delegateState");
  const _isLazy = dart.privateName(provider, "_isLazy");
  const _widgetToDelegate = dart.privateName(provider, "_widgetToDelegate");
  const _mountDelegate = dart.privateName(provider, "_mountDelegate");
  const _shouldNotifyDependents = dart.privateName(provider, "_shouldNotifyDependents");
  const _debugInheritLocked = dart.privateName(provider, "_debugInheritLocked");
  const _isNotifyDependentsEnabled = dart.privateName(provider, "_isNotifyDependentsEnabled");
  const _firstBuild = dart.privateName(provider, "_firstBuild");
  const _updatedShouldNotify = dart.privateName(provider, "_updatedShouldNotify");
  const _isBuildFromExternalSources = dart.privateName(provider, "_isBuildFromExternalSources");
  const _debugSetInheritedLock = dart.privateName(provider, "_debugSetInheritedLock");
  const _is__InheritedProviderScopeMixin_default = Symbol('_is__InheritedProviderScopeMixin_default');
  provider._InheritedProviderScopeMixin$ = dart.generic(T => {
    class _InheritedProviderScopeMixin extends framework.InheritedElement {}
    _InheritedProviderScopeMixin[dart.mixinOn] = InheritedElement => class _InheritedProviderScopeMixin extends InheritedElement {
      get hasValue() {
        return this[_delegateState].hasValue;
      }
      performRebuild() {
        if (dart.test(this[_firstBuild])) {
          this[_firstBuild] = false;
          this[_mountDelegate]();
        }
        super.performRebuild();
      }
      update(newWidget) {
        framework.InheritedWidget._check(newWidget);
        if (!dart.test(dart.fn(() => {
          if (!dart.equals(dart.runtimeType(this[_widgetToDelegate](this.widget)), dart.runtimeType(this[_widgetToDelegate](newWidget)))) {
            dart.throw(new core.StateError.new("Rebuilt " + dart.str(this.widget) + " using a different constructor.\n      \nThis is likely a mistake and is unsupported.\nIf you're in this situation, consider passing a `key` unique to each individual constructor.\n"));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 227, 12, "() {\n      if (_widgetToDelegate(widget).runtimeType != _widgetToDelegate(newWidget).runtimeType) {\n        throw StateError('''Rebuilt $widget using a different constructor.\n      \nThis is likely a mistake and is unsupported.\nIf you're in this situation, consider passing a `key` unique to each individual constructor.\n''');\n      }\n      return true;\n    }()");
        this[_isBuildFromExternalSources] = true;
        this[_updatedShouldNotify] = this[_delegateState].willUpdateDelegate(this[_widgetToDelegate](newWidget));
        super.update(newWidget);
        this[_updatedShouldNotify] = false;
      }
      updated(oldWidget) {
        framework.InheritedWidget._check(oldWidget);
        super.updated(oldWidget);
        if (dart.test(this[_updatedShouldNotify])) {
          this.notifyClients(oldWidget);
        }
      }
      didChangeDependencies() {
        this[_isBuildFromExternalSources] = true;
        super.didChangeDependencies();
      }
      unmount() {
        this[_delegateState].dispose();
        super.unmount();
      }
      markNeedsNotifyDependents() {
        if (!dart.test(this[_isNotifyDependentsEnabled])) return;
        this.markNeedsBuild();
        this[_shouldNotifyDependents] = true;
      }
      build() {
        if (dart.equals(this[_isLazy](this.widget), false)) {
          this.value;
        }
        this[_delegateState].build(this[_isBuildFromExternalSources]);
        this[_isBuildFromExternalSources] = false;
        if (dart.test(this[_shouldNotifyDependents])) {
          this[_shouldNotifyDependents] = false;
          this.notifyClients(this.widget);
        }
        return super.build();
      }
      [_debugSetInheritedLock](value) {
        if (!dart.test(dart.fn(() => {
          this[_debugInheritLocked] = value;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 287, 12, "() {\n      _debugInheritLocked = value;\n      return true;\n    }()");
        return true;
      }
      get value() {
        return this[_delegateState].value;
      }
      dependOnInheritedElement(ancestor, opts) {
        let aspect = opts && 'aspect' in opts ? opts.aspect : null;
        if (!dart.test(dart.fn(() => {
          if (dart.test(this[_debugInheritLocked])) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Tried to listen to an InheritedWidget " + "in a life-cycle that will never be called again."), new assertions.ErrorDescription.new("This error typically happens when calling Provider.of with `listen` to `true`,\nin a situation where listening to the provider doesn't make sense, such as:\n- initState of a StatefulWidget\n- the \"create\" callback of a provider\n\nThis is undesired because these life-cycles are called only once in the\nlifetime of a widget. As such, while `listen` is `true`, the widget has\nno mean to handle the update scenario.\n\nTo fix, consider:\n- passing `listen: false` to `Provider.of`\n- use a life-cycle that handles updates (like didChangeDependencies)\n- use a provider that handles updates (like ProxyProvider).\n")])));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 302, 12, "() {\n      if (_debugInheritLocked) {\n        throw FlutterError.fromParts(\n          <DiagnosticsNode>[\n            ErrorSummary(\n              'Tried to listen to an InheritedWidget '\n              'in a life-cycle that will never be called again.',\n            ),\n            ErrorDescription('''\nThis error typically happens when calling Provider.of with `listen` to `true`,\nin a situation where listening to the provider doesn't make sense, such as:\n- initState of a StatefulWidget\n- the \"create\" callback of a provider\n\nThis is undesired because these life-cycles are called only once in the\nlifetime of a widget. As such, while `listen` is `true`, the widget has\nno mean to handle the update scenario.\n\nTo fix, consider:\n- passing `listen: false` to `Provider.of`\n- use a life-cycle that handles updates (like didChangeDependencies)\n- use a provider that handles updates (like ProxyProvider).\n'''),\n          ],\n        );\n      }\n      return true;\n    }()");
        return super.dependOnInheritedElement(ancestor, {aspect: aspect});
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        this[_delegateState].debugFillProperties(properties);
      }
    };
    (_InheritedProviderScopeMixin[dart.mixinNew] = function() {
      this[_shouldNotifyDependents] = false;
      this[_debugInheritLocked] = false;
      this[_isNotifyDependentsEnabled] = true;
      this[_firstBuild] = true;
      this[_updatedShouldNotify] = false;
      this[_isBuildFromExternalSources] = false;
    }).prototype = _InheritedProviderScopeMixin.prototype;
    dart.addTypeTests(_InheritedProviderScopeMixin);
    _InheritedProviderScopeMixin.prototype[_is__InheritedProviderScopeMixin_default] = true;
    _InheritedProviderScopeMixin[dart.implements] = () => [provider.InheritedContext$(T), framework.InheritedElement];
    dart.setMethodSignature(_InheritedProviderScopeMixin, () => ({
      __proto__: dart.getMethods(_InheritedProviderScopeMixin.__proto__),
      markNeedsNotifyDependents: dart.fnType(dart.void, []),
      [_debugSetInheritedLock]: dart.fnType(core.bool, [core.bool])
    }));
    dart.setGetterSignature(_InheritedProviderScopeMixin, () => ({
      __proto__: dart.getGetters(_InheritedProviderScopeMixin.__proto__),
      hasValue: core.bool,
      value: T
    }));
    dart.setLibraryUri(_InheritedProviderScopeMixin, "package:provider/src/provider.dart");
    dart.setFieldSignature(_InheritedProviderScopeMixin, () => ({
      __proto__: dart.getFields(_InheritedProviderScopeMixin.__proto__),
      [_shouldNotifyDependents]: dart.fieldType(core.bool),
      [_debugInheritLocked]: dart.fieldType(core.bool),
      [_isNotifyDependentsEnabled]: dart.fieldType(core.bool),
      [_firstBuild]: dart.fieldType(core.bool),
      [_updatedShouldNotify]: dart.fieldType(core.bool),
      [_isBuildFromExternalSources]: dart.fieldType(core.bool)
    }));
    return _InheritedProviderScopeMixin;
  });
  provider._InheritedProviderScopeMixin = provider._InheritedProviderScopeMixin$();
  dart.addTypeTests(provider._InheritedProviderScopeMixin, _is__InheritedProviderScopeMixin_default);
  const _is__DefaultInheritedProviderScopeElement_default = Symbol('_is__DefaultInheritedProviderScopeElement_default');
  const _delegateState$ = dart.privateName(provider, "_DefaultInheritedProviderScopeElement._delegateState");
  provider._DefaultInheritedProviderScopeElement$ = dart.generic(T => {
    let _DefaultInheritedProviderScopeOfT = () => (_DefaultInheritedProviderScopeOfT = dart.constFn(provider._DefaultInheritedProviderScope$(T)))();
    const InheritedElement__InheritedProviderScopeMixin$36 = class InheritedElement__InheritedProviderScopeMixin extends framework.InheritedElement {};
    (InheritedElement__InheritedProviderScopeMixin$36.new = function(widget) {
      provider._InheritedProviderScopeMixin$(T)[dart.mixinNew].call(this);
      InheritedElement__InheritedProviderScopeMixin$36.__proto__.new.call(this, widget);
    }).prototype = InheritedElement__InheritedProviderScopeMixin$36.prototype;
    dart.applyMixin(InheritedElement__InheritedProviderScopeMixin$36, provider._InheritedProviderScopeMixin$(T));
    class _DefaultInheritedProviderScopeElement extends InheritedElement__InheritedProviderScopeMixin$36 {
      get [_delegateState]() {
        return this[_delegateState$];
      }
      set [_delegateState](value) {
        this[_delegateState$] = value;
      }
      get widget() {
        return _DefaultInheritedProviderScopeOfT().as(super.widget);
      }
      [_isLazy](widget) {
        return widget.owner[_lazy];
      }
      [_widgetToDelegate](widget) {
        return widget.owner[_delegate];
      }
      [_mountDelegate]() {
        let t0;
        this[_delegateState] = (t0 = this.widget.owner[_delegate].createState(), t0.element = this, t0);
      }
    }
    (_DefaultInheritedProviderScopeElement.new = function(widget) {
      this[_delegateState$] = null;
      _DefaultInheritedProviderScopeElement.__proto__.new.call(this, widget);
      ;
    }).prototype = _DefaultInheritedProviderScopeElement.prototype;
    dart.addTypeTests(_DefaultInheritedProviderScopeElement);
    _DefaultInheritedProviderScopeElement.prototype[_is__DefaultInheritedProviderScopeElement_default] = true;
    dart.setMethodSignature(_DefaultInheritedProviderScopeElement, () => ({
      __proto__: dart.getMethods(_DefaultInheritedProviderScopeElement.__proto__),
      [_isLazy]: dart.fnType(core.bool, [provider._DefaultInheritedProviderScope$(T)]),
      [_widgetToDelegate]: dart.fnType(provider._Delegate$(T), [provider._DefaultInheritedProviderScope$(T)]),
      [_mountDelegate]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_DefaultInheritedProviderScopeElement, () => ({
      __proto__: dart.getGetters(_DefaultInheritedProviderScopeElement.__proto__),
      widget: provider._DefaultInheritedProviderScope$(T)
    }));
    dart.setLibraryUri(_DefaultInheritedProviderScopeElement, "package:provider/src/provider.dart");
    dart.setFieldSignature(_DefaultInheritedProviderScopeElement, () => ({
      __proto__: dart.getFields(_DefaultInheritedProviderScopeElement.__proto__),
      [_delegateState]: dart.fieldType(provider._DelegateState$(T, provider._Delegate$(T)))
    }));
    return _DefaultInheritedProviderScopeElement;
  });
  provider._DefaultInheritedProviderScopeElement = provider._DefaultInheritedProviderScopeElement$();
  dart.addTypeTests(provider._DefaultInheritedProviderScopeElement, _is__DefaultInheritedProviderScopeElement_default);
  const _is__Delegate_default = Symbol('_is__Delegate_default');
  provider._Delegate$ = dart.generic(T => {
    class _Delegate extends core.Object {
      debugFillProperties(properties) {
      }
    }
    (_Delegate.new = function() {
      ;
    }).prototype = _Delegate.prototype;
    dart.addTypeTests(_Delegate);
    _Delegate.prototype[_is__Delegate_default] = true;
    dart.setMethodSignature(_Delegate, () => ({
      __proto__: dart.getMethods(_Delegate.__proto__),
      debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder])
    }));
    dart.setLibraryUri(_Delegate, "package:provider/src/provider.dart");
    return _Delegate;
  });
  provider._Delegate = provider._Delegate$();
  dart.addTypeTests(provider._Delegate, _is__Delegate_default);
  const _is__DelegateState_default = Symbol('_is__DelegateState_default');
  const element = dart.privateName(provider, "_DelegateState.element");
  provider._DelegateState$ = dart.generic((T, D) => {
    let _InheritedProviderScopeMixinOfT = () => (_InheritedProviderScopeMixinOfT = dart.constFn(provider._InheritedProviderScopeMixin$(T)))();
    class _DelegateState extends core.Object {
      get element() {
        return this[element];
      }
      set element(value) {
        this[element] = _InheritedProviderScopeMixinOfT()._check(value);
      }
      get delegate() {
        return D.as(this.element[_widgetToDelegate](this.element.widget));
      }
      debugSetInheritedLock(value) {
        return this.element[_debugSetInheritedLock](value);
      }
      willUpdateDelegate(newDelegate) {
        D._check(newDelegate);
        return false;
      }
      dispose() {
      }
      debugFillProperties(properties) {
      }
      build(isBuildFromExternalSources) {
      }
    }
    (_DelegateState.new = function() {
      this[element] = null;
      ;
    }).prototype = _DelegateState.prototype;
    dart.addTypeTests(_DelegateState);
    _DelegateState.prototype[_is__DelegateState_default] = true;
    dart.setMethodSignature(_DelegateState, () => ({
      __proto__: dart.getMethods(_DelegateState.__proto__),
      debugSetInheritedLock: dart.fnType(core.bool, [core.bool]),
      willUpdateDelegate: dart.fnType(core.bool, [core.Object]),
      dispose: dart.fnType(dart.void, []),
      debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder]),
      build: dart.fnType(dart.void, [core.bool])
    }));
    dart.setGetterSignature(_DelegateState, () => ({
      __proto__: dart.getGetters(_DelegateState.__proto__),
      delegate: D
    }));
    dart.setLibraryUri(_DelegateState, "package:provider/src/provider.dart");
    dart.setFieldSignature(_DelegateState, () => ({
      __proto__: dart.getFields(_DelegateState.__proto__),
      element: dart.fieldType(provider._InheritedProviderScopeMixin$(T))
    }));
    return _DelegateState;
  });
  provider._DelegateState = provider._DelegateState$();
  dart.addTypeTests(provider._DelegateState, _is__DelegateState_default);
  const _updateShouldNotify = dart.privateName(provider, "_updateShouldNotify");
  const _is__CreateInheritedProvider_default = Symbol('_is__CreateInheritedProvider_default');
  provider._CreateInheritedProvider$ = dart.generic(T => {
    let _CreateInheritedProviderStateOfT = () => (_CreateInheritedProviderStateOfT = dart.constFn(provider._CreateInheritedProviderState$(T)))();
    class _CreateInheritedProvider extends provider._Delegate$(T) {
      createState() {
        return new (_CreateInheritedProviderStateOfT()).new();
      }
    }
    (_CreateInheritedProvider.new = function(opts) {
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let debugCheckInvalidValueType = opts && 'debugCheckInvalidValueType' in opts ? opts.debugCheckInvalidValueType : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      this.create = create;
      this.update = update;
      this.debugCheckInvalidValueType = debugCheckInvalidValueType;
      this.startListening = startListening;
      this.dispose = dispose;
      if (!(create != null || update != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 377, 16, "create != null || update != null");
      this[_updateShouldNotify] = updateShouldNotify;
      ;
    }).prototype = _CreateInheritedProvider.prototype;
    dart.addTypeTests(_CreateInheritedProvider);
    _CreateInheritedProvider.prototype[_is__CreateInheritedProvider_default] = true;
    dart.setMethodSignature(_CreateInheritedProvider, () => ({
      __proto__: dart.getMethods(_CreateInheritedProvider.__proto__),
      createState: dart.fnType(provider._CreateInheritedProviderState$(T), [])
    }));
    dart.setLibraryUri(_CreateInheritedProvider, "package:provider/src/provider.dart");
    dart.setFieldSignature(_CreateInheritedProvider, () => ({
      __proto__: dart.getFields(_CreateInheritedProvider.__proto__),
      create: dart.finalFieldType(dart.fnType(T, [framework.BuildContext])),
      update: dart.finalFieldType(dart.fnType(T, [framework.BuildContext, T])),
      [_updateShouldNotify]: dart.finalFieldType(dart.fnType(core.bool, [T, T])),
      debugCheckInvalidValueType: dart.finalFieldType(dart.fnType(dart.void, [T])),
      startListening: dart.finalFieldType(dart.fnType(dart.fnType(dart.void, []), [provider.InheritedContext$(T), T])),
      dispose: dart.finalFieldType(dart.fnType(dart.void, [framework.BuildContext, T]))
    }));
    return _CreateInheritedProvider;
  });
  provider._CreateInheritedProvider = provider._CreateInheritedProvider$();
  dart.addTypeTests(provider._CreateInheritedProvider, _is__CreateInheritedProvider_default);
  const _removeListener = dart.privateName(provider, "_removeListener");
  const _didInitValue = dart.privateName(provider, "_didInitValue");
  const _value = dart.privateName(provider, "_value");
  const _previousWidget = dart.privateName(provider, "_previousWidget");
  const _is__CreateInheritedProviderState_default = Symbol('_is__CreateInheritedProviderState_default');
  provider._CreateInheritedProviderState$ = dart.generic(T => {
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let BuildContextAndTToT = () => (BuildContextAndTToT = dart.constFn(dart.fnType(T, [framework.BuildContext, T])))();
    let InheritedContextOfT = () => (InheritedContextOfT = dart.constFn(provider.InheritedContext$(T)))();
    let InheritedContextOfTAndTToFn = () => (InheritedContextOfTAndTToFn = dart.constFn(dart.fnType(VoidTovoid(), [InheritedContextOfT(), T])))();
    let BuildContextAndTTovoid = () => (BuildContextAndTTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T])))();
    let DiagnosticsPropertyOfT = () => (DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    let TAndTTobool = () => (TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    class _CreateInheritedProviderState extends provider._DelegateState$(T, provider._CreateInheritedProvider$(T)) {
      get value() {
        let t0;
        if (!dart.test(this[_didInitValue])) {
          this[_didInitValue] = true;
          if (this.delegate.create != null) {
            if (!dart.test(this.debugSetInheritedLock(true))) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 404, 16, "debugSetInheritedLock(true)");
            this[_value] = this.delegate.create(this.element);
            if (!dart.test(this.debugSetInheritedLock(false))) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 406, 16, "debugSetInheritedLock(false)");
            if (!dart.test(dart.fn(() => {
              let t0;
              t0 = TTovoid()._check(this.delegate.debugCheckInvalidValueType);
              t0 == null ? null : t0(this[_value]);
              return true;
            }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 408, 16, "() {\n          delegate.debugCheckInvalidValueType?.call(_value);\n          return true;\n        }()");
          }
          if (BuildContextAndTToT()._check(this.delegate.update) != null) {
            if (!dart.test(dart.fn(() => {
              provider._debugIsInInheritedProviderUpdate = true;
              return true;
            }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 414, 16, "() {\n          _debugIsInInheritedProviderUpdate = true;\n          return true;\n        }()");
            this[_value] = BuildContextAndTToT()._check(this.delegate.update)(this.element, this[_value]);
            if (!dart.test(dart.fn(() => {
              provider._debugIsInInheritedProviderUpdate = false;
              return true;
            }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 419, 16, "() {\n          _debugIsInInheritedProviderUpdate = false;\n          return true;\n        }()");
            if (!dart.test(dart.fn(() => {
              let t0;
              t0 = TTovoid()._check(this.delegate.debugCheckInvalidValueType);
              t0 == null ? null : t0(this[_value]);
              return true;
            }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 424, 16, "() {\n          delegate.debugCheckInvalidValueType?.call(_value);\n          return true;\n        }()");
          }
        }
        this.element[_isNotifyDependentsEnabled] = false;
        this[_removeListener] == null ? this[_removeListener] = (t0 = InheritedContextOfTAndTToFn()._check(this.delegate.startListening), t0 == null ? null : t0(this.element, this[_value])) : null;
        this.element[_isNotifyDependentsEnabled] = true;
        if (!(InheritedContextOfTAndTToFn()._check(this.delegate.startListening) == null || this[_removeListener] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 434, 12, "delegate.startListening == null || _removeListener != null");
        return this[_value];
      }
      dispose() {
        let t0, t0$;
        super.dispose();
        t0 = this[_removeListener];
        t0 == null ? null : t0();
        if (dart.test(this[_didInitValue])) {
          t0$ = BuildContextAndTTovoid()._check(this.delegate.dispose);
          t0$ == null ? null : t0$(this.element, this[_value]);
        }
      }
      debugFillProperties(properties) {
        let t0;
        super.debugFillProperties(properties);
        if (dart.test(this[_didInitValue])) {
          t0 = properties;
          t0.add(new (DiagnosticsPropertyOfT()).new("value", this.value));
          t0.add(new diagnostics.FlagProperty.new(null, {value: this[_removeListener] != null, defaultValue: false, ifTrue: "listening to value"}));
          t0;
        } else {
          properties.add(new diagnostics.FlagProperty.new("value", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
        }
      }
      build(isBuildFromExternalSources) {
        let t0, t0$;
        let shouldNotify = false;
        if (dart.test(isBuildFromExternalSources) && dart.test(this[_didInitValue]) && BuildContextAndTToT()._check(this.delegate.update) != null) {
          let previousValue = this[_value];
          this[_value] = BuildContextAndTToT()._check(this.delegate.update)(this.element, this[_value]);
          if (TAndTTobool()._check(this.delegate[_updateShouldNotify]) != null) {
            shouldNotify = TAndTTobool()._check(this.delegate[_updateShouldNotify])(previousValue, this[_value]);
          } else {
            shouldNotify = !dart.equals(this[_value], previousValue);
          }
          if (dart.test(shouldNotify)) {
            if (!dart.test(dart.fn(() => {
              let t0;
              t0 = TTovoid()._check(this.delegate.debugCheckInvalidValueType);
              t0 == null ? null : t0(this[_value]);
              return true;
            }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 489, 16, "() {\n          delegate.debugCheckInvalidValueType?.call(_value);\n          return true;\n        }()");
            if (this[_removeListener] != null) {
              this[_removeListener]();
              this[_removeListener] = null;
            }
            t0$ = (t0 = this[_previousWidget], t0 == null ? null : BuildContextAndTTovoid()._check(t0.dispose));
            t0$ == null ? null : t0$(this.element, previousValue);
          }
        }
        if (dart.test(shouldNotify)) {
          this.element[_shouldNotifyDependents] = true;
        }
        this[_previousWidget] = this.delegate;
        return super.build(isBuildFromExternalSources);
      }
      get hasValue() {
        return this[_didInitValue] != null;
      }
    }
    (_CreateInheritedProviderState.new = function() {
      this[_removeListener] = null;
      this[_didInitValue] = false;
      this[_value] = null;
      this[_previousWidget] = null;
      _CreateInheritedProviderState.__proto__.new.call(this);
      ;
    }).prototype = _CreateInheritedProviderState.prototype;
    dart.addTypeTests(_CreateInheritedProviderState);
    _CreateInheritedProviderState.prototype[_is__CreateInheritedProviderState_default] = true;
    dart.setGetterSignature(_CreateInheritedProviderState, () => ({
      __proto__: dart.getGetters(_CreateInheritedProviderState.__proto__),
      value: T,
      hasValue: core.bool
    }));
    dart.setLibraryUri(_CreateInheritedProviderState, "package:provider/src/provider.dart");
    dart.setFieldSignature(_CreateInheritedProviderState, () => ({
      __proto__: dart.getFields(_CreateInheritedProviderState.__proto__),
      [_removeListener]: dart.fieldType(dart.fnType(dart.void, [])),
      [_didInitValue]: dart.fieldType(core.bool),
      [_value]: dart.fieldType(T),
      [_previousWidget]: dart.fieldType(provider._CreateInheritedProvider$(T))
    }));
    return _CreateInheritedProviderState;
  });
  provider._CreateInheritedProviderState = provider._CreateInheritedProviderState$();
  dart.addTypeTests(provider._CreateInheritedProviderState, _is__CreateInheritedProviderState_default);
  const _is__ValueInheritedProvider_default = Symbol('_is__ValueInheritedProvider_default');
  provider._ValueInheritedProvider$ = dart.generic(T => {
    let DiagnosticsPropertyOfT = () => (DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    let _ValueInheritedProviderStateOfT = () => (_ValueInheritedProviderStateOfT = dart.constFn(provider._ValueInheritedProviderState$(T)))();
    class _ValueInheritedProvider extends provider._Delegate$(T) {
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (DiagnosticsPropertyOfT()).new("value", this.value));
      }
      createState() {
        return new (_ValueInheritedProviderStateOfT()).new();
      }
    }
    (_ValueInheritedProvider.new = function(opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      this.value = value;
      this.startListening = startListening;
      this[_updateShouldNotify] = updateShouldNotify;
      ;
    }).prototype = _ValueInheritedProvider.prototype;
    dart.addTypeTests(_ValueInheritedProvider);
    _ValueInheritedProvider.prototype[_is__ValueInheritedProvider_default] = true;
    dart.setMethodSignature(_ValueInheritedProvider, () => ({
      __proto__: dart.getMethods(_ValueInheritedProvider.__proto__),
      createState: dart.fnType(provider._ValueInheritedProviderState$(T), [])
    }));
    dart.setLibraryUri(_ValueInheritedProvider, "package:provider/src/provider.dart");
    dart.setFieldSignature(_ValueInheritedProvider, () => ({
      __proto__: dart.getFields(_ValueInheritedProvider.__proto__),
      value: dart.finalFieldType(T),
      [_updateShouldNotify]: dart.finalFieldType(dart.fnType(core.bool, [T, T])),
      startListening: dart.finalFieldType(dart.fnType(dart.fnType(dart.void, []), [provider.InheritedContext$(T), T]))
    }));
    return _ValueInheritedProvider;
  });
  provider._ValueInheritedProvider = provider._ValueInheritedProvider$();
  dart.addTypeTests(provider._ValueInheritedProvider, _is__ValueInheritedProvider_default);
  const _is__ValueInheritedProviderState_default = Symbol('_is__ValueInheritedProviderState_default');
  provider._ValueInheritedProviderState$ = dart.generic(T => {
    let InheritedContextOfT = () => (InheritedContextOfT = dart.constFn(provider.InheritedContext$(T)))();
    let InheritedContextOfTAndTToFn = () => (InheritedContextOfTAndTToFn = dart.constFn(dart.fnType(VoidTovoid(), [InheritedContextOfT(), T])))();
    let _ValueInheritedProviderOfT = () => (_ValueInheritedProviderOfT = dart.constFn(provider._ValueInheritedProvider$(T)))();
    let TAndTTobool = () => (TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    class _ValueInheritedProviderState extends provider._DelegateState$(T, provider._ValueInheritedProvider$(T)) {
      get value() {
        let t0;
        this.element[_isNotifyDependentsEnabled] = false;
        this[_removeListener] == null ? this[_removeListener] = (t0 = InheritedContextOfTAndTToFn()._check(this.delegate.startListening), t0 == null ? null : t0(this.element, this.delegate.value)) : null;
        this.element[_isNotifyDependentsEnabled] = true;
        if (!(InheritedContextOfTAndTToFn()._check(this.delegate.startListening) == null || this[_removeListener] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/inherited_provider.dart", 543, 12, "delegate.startListening == null || _removeListener != null");
        return this.delegate.value;
      }
      willUpdateDelegate(newDelegate) {
        _ValueInheritedProviderOfT()._check(newDelegate);
        let shouldNotify = null;
        if (TAndTTobool()._check(this.delegate[_updateShouldNotify]) != null) {
          shouldNotify = TAndTTobool()._check(this.delegate[_updateShouldNotify])(this.delegate.value, newDelegate.value);
        } else {
          shouldNotify = !dart.equals(newDelegate.value, this.delegate.value);
        }
        if (dart.test(shouldNotify) && this[_removeListener] != null) {
          this[_removeListener]();
          this[_removeListener] = null;
        }
        return shouldNotify;
      }
      dispose() {
        let t0;
        super.dispose();
        t0 = this[_removeListener];
        t0 == null ? null : t0();
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new diagnostics.FlagProperty.new(null, {value: this[_removeListener] != null, defaultValue: false, ifTrue: "listening to value"}));
      }
      get hasValue() {
        return true;
      }
    }
    (_ValueInheritedProviderState.new = function() {
      this[_removeListener] = null;
      _ValueInheritedProviderState.__proto__.new.call(this);
      ;
    }).prototype = _ValueInheritedProviderState.prototype;
    dart.addTypeTests(_ValueInheritedProviderState);
    _ValueInheritedProviderState.prototype[_is__ValueInheritedProviderState_default] = true;
    dart.setGetterSignature(_ValueInheritedProviderState, () => ({
      __proto__: dart.getGetters(_ValueInheritedProviderState.__proto__),
      value: T,
      hasValue: core.bool
    }));
    dart.setLibraryUri(_ValueInheritedProviderState, "package:provider/src/provider.dart");
    dart.setFieldSignature(_ValueInheritedProviderState, () => ({
      __proto__: dart.getFields(_ValueInheritedProviderState.__proto__),
      [_removeListener]: dart.fieldType(dart.fnType(dart.void, []))
    }));
    return _ValueInheritedProviderState;
  });
  provider._ValueInheritedProviderState = provider._ValueInheritedProviderState$();
  dart.addTypeTests(provider._ValueInheritedProviderState, _is__ValueInheritedProviderState_default);
  const _is_DeferredInheritedProvider_default = Symbol('_is_DeferredInheritedProvider_default');
  provider.DeferredInheritedProvider$ = dart.generic((T, R) => {
    let _CreateDeferredInheritedProviderOfT$R = () => (_CreateDeferredInheritedProviderOfT$R = dart.constFn(provider._CreateDeferredInheritedProvider$(T, R)))();
    let _ValueDeferredInheritedProviderOfT$R = () => (_ValueDeferredInheritedProviderOfT$R = dart.constFn(provider._ValueDeferredInheritedProvider$(T, R)))();
    class DeferredInheritedProvider extends provider.InheritedProvider$(R) {}
    (DeferredInheritedProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      DeferredInheritedProvider.__proto__._constructor.call(this, {key: key, child: child, lazy: lazy, delegate: new (_CreateDeferredInheritedProviderOfT$R()).new({create: create, dispose: dispose, updateShouldNotify: updateShouldNotify, startListening: startListening}), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = DeferredInheritedProvider.prototype;
    (DeferredInheritedProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      DeferredInheritedProvider.__proto__._constructor.call(this, {key: key, lazy: lazy, delegate: new (_ValueDeferredInheritedProviderOfT$R()).new(value, updateShouldNotify, startListening), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = DeferredInheritedProvider.prototype;
    dart.addTypeTests(DeferredInheritedProvider);
    DeferredInheritedProvider.prototype[_is_DeferredInheritedProvider_default] = true;
    dart.setLibraryUri(DeferredInheritedProvider, "package:provider/src/provider.dart");
    return DeferredInheritedProvider;
  });
  provider.DeferredInheritedProvider = provider.DeferredInheritedProvider$();
  dart.addTypeTests(provider.DeferredInheritedProvider, _is_DeferredInheritedProvider_default);
  const _is__DeferredDelegate_default = Symbol('_is__DeferredDelegate_default');
  provider._DeferredDelegate$ = dart.generic((T, R) => {
    class _DeferredDelegate extends provider._Delegate$(R) {}
    (_DeferredDelegate.new = function(updateShouldNotify, startListening) {
      this.updateShouldNotify = updateShouldNotify;
      this.startListening = startListening;
      ;
    }).prototype = _DeferredDelegate.prototype;
    dart.addTypeTests(_DeferredDelegate);
    _DeferredDelegate.prototype[_is__DeferredDelegate_default] = true;
    dart.setLibraryUri(_DeferredDelegate, "package:provider/src/provider.dart");
    dart.setFieldSignature(_DeferredDelegate, () => ({
      __proto__: dart.getFields(_DeferredDelegate.__proto__),
      updateShouldNotify: dart.finalFieldType(dart.fnType(core.bool, [R, R])),
      startListening: dart.finalFieldType(dart.fnType(dart.fnType(dart.void, []), [provider.InheritedContext$(R), dart.fnType(dart.void, [R]), T, R]))
    }));
    return _DeferredDelegate;
  });
  provider._DeferredDelegate = provider._DeferredDelegate$();
  dart.addTypeTests(provider._DeferredDelegate, _is__DeferredDelegate_default);
  const _hasValue = dart.privateName(provider, "_hasValue");
  const _is__DeferredDelegateState_default = Symbol('_is__DeferredDelegateState_default');
  provider._DeferredDelegateState$ = dart.generic((T, R, W) => {
    let InheritedContextOfRAndFnAndT__ToFn = () => (InheritedContextOfRAndFnAndT__ToFn = dart.constFn(dart.fnType(VoidTovoid(), [InheritedContextOfR(), RTovoid(), T, R])))();
    let InheritedContextOfR = () => (InheritedContextOfR = dart.constFn(provider.InheritedContext$(R)))();
    let RTovoid = () => (RTovoid = dart.constFn(dart.fnType(dart.void, [R])))();
    let RAndRTobool = () => (RAndRTobool = dart.constFn(dart.fnType(core.bool, [R, R])))();
    class _DeferredDelegateState extends provider._DelegateState$(R, W) {
      get value() {
        this.element[_isNotifyDependentsEnabled] = false;
        this[_removeListener] == null ? this[_removeListener] = InheritedContextOfRAndFnAndT__ToFn()._check(this.delegate.startListening)(this.element, dart.bind(this, 'setState'), this.controller, this[_value]) : null;
        this.element[_isNotifyDependentsEnabled] = true;
        if (!dart.test(this.element.hasValue)) dart.assertFailed("The callback \"startListening\" was called, but it left DeferredInhertitedProviderElement<" + dart.str(dart.wrapType(T)) + ", " + dart.str(dart.wrapType(R)) + ">\nin an unitialized state.\n\nIt is necessary for \"startListening\" to call \"setState\" at least once the very\nfirst time \"value\" is requested.\n\nTo fix, consider:\n\nDeferredInheritedProvider(\n  ...,\n  startListening: (element, setState, controller, value) {\n    if (!element.hasValue) {\n      setState(myInitialValue); // TODO replace myInitialValue with your own\n    }\n    ...\n  }\n)\n    ", "org-dartlang-app:///packages/provider/src/deferred_inherited_provider.dart", 98, 12, "element.hasValue");
        if (!(this[_removeListener] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/deferred_inherited_provider.dart", 117, 12, "_removeListener != null");
        return this[_value];
      }
      dispose() {
        let t0;
        super.dispose();
        t0 = this[_removeListener];
        t0 == null ? null : t0();
      }
      get isLoaded() {
        return this[_removeListener] != null;
      }
      get hasValue() {
        return this[_hasValue];
      }
      setState(value) {
        R._check(value);
        if (dart.test(this[_hasValue])) {
          let shouldNotify = RAndRTobool()._check(this.delegate.updateShouldNotify) != null ? RAndRTobool()._check(this.delegate.updateShouldNotify)(this[_value], value) : !dart.equals(this[_value], value);
          if (dart.test(shouldNotify)) {
            this.element.markNeedsNotifyDependents();
          }
        }
        this[_hasValue] = true;
        this[_value] = value;
      }
    }
    (_DeferredDelegateState.new = function() {
      this[_removeListener] = null;
      this[_value] = null;
      this[_hasValue] = false;
      _DeferredDelegateState.__proto__.new.call(this);
      ;
    }).prototype = _DeferredDelegateState.prototype;
    dart.addTypeTests(_DeferredDelegateState);
    _DeferredDelegateState.prototype[_is__DeferredDelegateState_default] = true;
    dart.setMethodSignature(_DeferredDelegateState, () => ({
      __proto__: dart.getMethods(_DeferredDelegateState.__proto__),
      setState: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(_DeferredDelegateState, () => ({
      __proto__: dart.getGetters(_DeferredDelegateState.__proto__),
      value: R,
      isLoaded: core.bool,
      hasValue: core.bool
    }));
    dart.setLibraryUri(_DeferredDelegateState, "package:provider/src/provider.dart");
    dart.setFieldSignature(_DeferredDelegateState, () => ({
      __proto__: dart.getFields(_DeferredDelegateState.__proto__),
      [_removeListener]: dart.fieldType(dart.fnType(dart.void, [])),
      [_value]: dart.fieldType(R),
      [_hasValue]: dart.fieldType(core.bool)
    }));
    return _DeferredDelegateState;
  });
  provider._DeferredDelegateState = provider._DeferredDelegateState$();
  dart.addTypeTests(provider._DeferredDelegateState, _is__DeferredDelegateState_default);
  const _is__CreateDeferredInheritedProvider_default = Symbol('_is__CreateDeferredInheritedProvider_default');
  provider._CreateDeferredInheritedProvider$ = dart.generic((T, R) => {
    let _CreateDeferredInheritedProviderElementOfT$R = () => (_CreateDeferredInheritedProviderElementOfT$R = dart.constFn(provider._CreateDeferredInheritedProviderElement$(T, R)))();
    class _CreateDeferredInheritedProvider extends provider._DeferredDelegate$(T, R) {
      createState() {
        return new (_CreateDeferredInheritedProviderElementOfT$R()).new();
      }
    }
    (_CreateDeferredInheritedProvider.new = function(opts) {
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      this.create = create;
      this.dispose = dispose;
      _CreateDeferredInheritedProvider.__proto__.new.call(this, updateShouldNotify, startListening);
      ;
    }).prototype = _CreateDeferredInheritedProvider.prototype;
    dart.addTypeTests(_CreateDeferredInheritedProvider);
    _CreateDeferredInheritedProvider.prototype[_is__CreateDeferredInheritedProvider_default] = true;
    dart.setMethodSignature(_CreateDeferredInheritedProvider, () => ({
      __proto__: dart.getMethods(_CreateDeferredInheritedProvider.__proto__),
      createState: dart.fnType(provider._CreateDeferredInheritedProviderElement$(T, R), [])
    }));
    dart.setLibraryUri(_CreateDeferredInheritedProvider, "package:provider/src/provider.dart");
    dart.setFieldSignature(_CreateDeferredInheritedProvider, () => ({
      __proto__: dart.getFields(_CreateDeferredInheritedProvider.__proto__),
      create: dart.finalFieldType(dart.fnType(T, [framework.BuildContext])),
      dispose: dart.finalFieldType(dart.fnType(dart.void, [framework.BuildContext, T]))
    }));
    return _CreateDeferredInheritedProvider;
  });
  provider._CreateDeferredInheritedProvider = provider._CreateDeferredInheritedProvider$();
  dart.addTypeTests(provider._CreateDeferredInheritedProvider, _is__CreateDeferredInheritedProvider_default);
  const _didBuild = dart.privateName(provider, "_didBuild");
  const _controller = dart.privateName(provider, "_controller");
  const _is__CreateDeferredInheritedProviderElement_default = Symbol('_is__CreateDeferredInheritedProviderElement_default');
  provider._CreateDeferredInheritedProviderElement$ = dart.generic((T, R) => {
    let BuildContextAndTTovoid = () => (BuildContextAndTTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T])))();
    let DiagnosticsPropertyOfT = () => (DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    let DiagnosticsPropertyOfR = () => (DiagnosticsPropertyOfR = dart.constFn(diagnostics.DiagnosticsProperty$(R)))();
    class _CreateDeferredInheritedProviderElement extends provider._DeferredDelegateState$(T, R, provider._CreateDeferredInheritedProvider$(T, R)) {
      get controller() {
        if (!dart.test(this[_didBuild])) {
          if (!dart.test(this.debugSetInheritedLock(true))) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/deferred_inherited_provider.dart", 172, 14, "debugSetInheritedLock(true)");
          this[_controller] = this.delegate.create(this.element);
          this[_didBuild] = true;
        }
        return this[_controller];
      }
      dispose() {
        let t0;
        super.dispose();
        if (dart.test(this[_didBuild])) {
          t0 = BuildContextAndTTovoid()._check(this.delegate.dispose);
          t0 == null ? null : t0(this.element, this[_controller]);
        }
      }
      debugFillProperties(properties) {
        let t0, t0$;
        super.debugFillProperties(properties);
        if (dart.test(this.isLoaded)) {
          t0 = properties;
          t0.add(new (DiagnosticsPropertyOfT()).new("controller", this.controller));
          t0.add(new (DiagnosticsPropertyOfR()).new("value", this.value));
          t0;
        } else {
          t0$ = properties;
          t0$.add(new diagnostics.FlagProperty.new("controller", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
          t0$.add(new diagnostics.FlagProperty.new("value", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
          t0$;
        }
      }
    }
    (_CreateDeferredInheritedProviderElement.new = function() {
      this[_didBuild] = false;
      this[_controller] = null;
      _CreateDeferredInheritedProviderElement.__proto__.new.call(this);
      ;
    }).prototype = _CreateDeferredInheritedProviderElement.prototype;
    dart.addTypeTests(_CreateDeferredInheritedProviderElement);
    _CreateDeferredInheritedProviderElement.prototype[_is__CreateDeferredInheritedProviderElement_default] = true;
    dart.setGetterSignature(_CreateDeferredInheritedProviderElement, () => ({
      __proto__: dart.getGetters(_CreateDeferredInheritedProviderElement.__proto__),
      controller: T
    }));
    dart.setLibraryUri(_CreateDeferredInheritedProviderElement, "package:provider/src/provider.dart");
    dart.setFieldSignature(_CreateDeferredInheritedProviderElement, () => ({
      __proto__: dart.getFields(_CreateDeferredInheritedProviderElement.__proto__),
      [_didBuild]: dart.fieldType(core.bool),
      [_controller]: dart.fieldType(T)
    }));
    return _CreateDeferredInheritedProviderElement;
  });
  provider._CreateDeferredInheritedProviderElement = provider._CreateDeferredInheritedProviderElement$();
  dart.addTypeTests(provider._CreateDeferredInheritedProviderElement, _is__CreateDeferredInheritedProviderElement_default);
  const _is__ValueDeferredInheritedProvider_default = Symbol('_is__ValueDeferredInheritedProvider_default');
  provider._ValueDeferredInheritedProvider$ = dart.generic((T, R) => {
    let _ValueDeferredInheritedProviderStateOfT$R = () => (_ValueDeferredInheritedProviderStateOfT$R = dart.constFn(provider._ValueDeferredInheritedProviderState$(T, R)))();
    let DiagnosticsPropertyOfT = () => (DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    class _ValueDeferredInheritedProvider extends provider._DeferredDelegate$(T, R) {
      createState() {
        return new (_ValueDeferredInheritedProviderStateOfT$R()).new();
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (DiagnosticsPropertyOfT()).new("controller", this.value));
      }
    }
    (_ValueDeferredInheritedProvider.new = function(value, updateShouldNotify, startListening) {
      this.value = value;
      _ValueDeferredInheritedProvider.__proto__.new.call(this, updateShouldNotify, startListening);
      ;
    }).prototype = _ValueDeferredInheritedProvider.prototype;
    dart.addTypeTests(_ValueDeferredInheritedProvider);
    _ValueDeferredInheritedProvider.prototype[_is__ValueDeferredInheritedProvider_default] = true;
    dart.setMethodSignature(_ValueDeferredInheritedProvider, () => ({
      __proto__: dart.getMethods(_ValueDeferredInheritedProvider.__proto__),
      createState: dart.fnType(provider._ValueDeferredInheritedProviderState$(T, R), [])
    }));
    dart.setLibraryUri(_ValueDeferredInheritedProvider, "package:provider/src/provider.dart");
    dart.setFieldSignature(_ValueDeferredInheritedProvider, () => ({
      __proto__: dart.getFields(_ValueDeferredInheritedProvider.__proto__),
      value: dart.finalFieldType(T)
    }));
    return _ValueDeferredInheritedProvider;
  });
  provider._ValueDeferredInheritedProvider = provider._ValueDeferredInheritedProvider$();
  dart.addTypeTests(provider._ValueDeferredInheritedProvider, _is__ValueDeferredInheritedProvider_default);
  const _is__ValueDeferredInheritedProviderState_default = Symbol('_is__ValueDeferredInheritedProviderState_default');
  provider._ValueDeferredInheritedProviderState$ = dart.generic((T, R) => {
    let _ValueDeferredInheritedProviderOfT$R = () => (_ValueDeferredInheritedProviderOfT$R = dart.constFn(provider._ValueDeferredInheritedProvider$(T, R)))();
    let DiagnosticsPropertyOfR = () => (DiagnosticsPropertyOfR = dart.constFn(diagnostics.DiagnosticsProperty$(R)))();
    class _ValueDeferredInheritedProviderState extends provider._DeferredDelegateState$(T, R, provider._ValueDeferredInheritedProvider$(T, R)) {
      willUpdateDelegate(oldDelegate) {
        _ValueDeferredInheritedProviderOfT$R()._check(oldDelegate);
        if (!dart.equals(this.delegate.value, oldDelegate.value)) {
          if (this[_removeListener] != null) {
            this[_removeListener]();
            this[_removeListener] = null;
          }
          return true;
        }
        return false;
      }
      get controller() {
        return this.delegate.value;
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        if (this[_removeListener] != null) {
          properties.add(new (DiagnosticsPropertyOfR()).new("value", this.value));
        } else {
          properties.add(new diagnostics.FlagProperty.new("value", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
        }
      }
    }
    (_ValueDeferredInheritedProviderState.new = function() {
      _ValueDeferredInheritedProviderState.__proto__.new.call(this);
      ;
    }).prototype = _ValueDeferredInheritedProviderState.prototype;
    dart.addTypeTests(_ValueDeferredInheritedProviderState);
    _ValueDeferredInheritedProviderState.prototype[_is__ValueDeferredInheritedProviderState_default] = true;
    dart.setGetterSignature(_ValueDeferredInheritedProviderState, () => ({
      __proto__: dart.getGetters(_ValueDeferredInheritedProviderState.__proto__),
      controller: T
    }));
    dart.setLibraryUri(_ValueDeferredInheritedProviderState, "package:provider/src/provider.dart");
    return _ValueDeferredInheritedProviderState;
  });
  provider._ValueDeferredInheritedProviderState = provider._ValueDeferredInheritedProviderState$();
  dart.addTypeTests(provider._ValueDeferredInheritedProviderState, _is__ValueDeferredInheritedProviderState_default);
  dart.defineLazy(provider, {
    /*provider._debugIsInInheritedProviderUpdate*/get _debugIsInInheritedProviderUpdate() {
      return false;
    },
    set _debugIsInInheritedProviderUpdate(_) {}
  });
  let C5;
  const _is_ValueListenableProvider_default = Symbol('_is_ValueListenableProvider_default');
  value_listenable_provider.ValueListenableProvider$ = dart.generic(T => {
    class ValueListenableProvider extends provider.DeferredInheritedProvider$(change_notifier.ValueListenable$(T), T) {
      static _dispose(context, notifier) {
        if (change_notifier.ValueNotifier.is(notifier)) {
          notifier.dispose();
        }
      }
      static _startListening(T) {
        return dart.fn((_, setState, controller, __) => {
          setState(controller.value);
          let listener = dart.fn(() => setState(controller.value), VoidTovoid());
          controller.addListener(listener);
          return dart.fn(() => controller.removeListener(listener), VoidTovoid());
        }, dart.fnType(VoidTovoid(), [provider.InheritedContext$(T), dart.fnType(dart.void, [T]), change_notifier.ValueListenable$(T), T]));
      }
    }
    (ValueListenableProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ValueListenableProvider.__proto__.new.call(this, {key: key, create: create, lazy: lazy, updateShouldNotify: updateShouldNotify, startListening: value_listenable_provider.ValueListenableProvider._startListening(T), dispose: C5 || CT.C5, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ValueListenableProvider.prototype;
    (ValueListenableProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ValueListenableProvider.__proto__.value.call(this, {key: key, value: value, updateShouldNotify: updateShouldNotify, startListening: value_listenable_provider.ValueListenableProvider._startListening(T), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ValueListenableProvider.prototype;
    dart.addTypeTests(ValueListenableProvider);
    ValueListenableProvider.prototype[_is_ValueListenableProvider_default] = true;
    dart.setLibraryUri(ValueListenableProvider, "package:provider/src/value_listenable_provider.dart");
    return ValueListenableProvider;
  });
  value_listenable_provider.ValueListenableProvider = value_listenable_provider.ValueListenableProvider$();
  dart.addTypeTests(value_listenable_provider.ValueListenableProvider, _is_ValueListenableProvider_default);
  const _shouldRebuild = dart.privateName(selector, "_shouldRebuild");
  const _is_Selector0_default = Symbol('_is_Selector0_default');
  const builder$ = dart.privateName(selector, "Selector0.builder");
  const selector$ = dart.privateName(selector, "Selector0.selector");
  selector.Selector0$ = dart.generic(T => {
    let _Selector0StateOfT = () => (_Selector0StateOfT = dart.constFn(selector._Selector0State$(T)))();
    class Selector0 extends nested.SingleChildStatefulWidget {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get selector() {
        return this[selector$];
      }
      set selector(value) {
        super.selector = value;
      }
      createState() {
        return new (_Selector0StateOfT()).new();
      }
    }
    (Selector0.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[selector$] = selector;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 38, 16, "builder != null");
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 39, 16, "selector != null");
      this[_shouldRebuild] = shouldRebuild;
      Selector0.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector0.prototype;
    dart.addTypeTests(Selector0);
    Selector0.prototype[_is_Selector0_default] = true;
    dart.setMethodSignature(Selector0, () => ({
      __proto__: dart.getMethods(Selector0.__proto__),
      createState: dart.fnType(selector._Selector0State$(T), [])
    }));
    dart.setLibraryUri(Selector0, "package:provider/src/selector.dart");
    dart.setFieldSignature(Selector0, () => ({
      __proto__: dart.getFields(Selector0.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, T, framework.Widget])),
      selector: dart.finalFieldType(dart.fnType(T, [framework.BuildContext])),
      [_shouldRebuild]: dart.finalFieldType(dart.fnType(core.bool, [T, T]))
    }));
    return Selector0;
  });
  selector.Selector0 = selector.Selector0$();
  dart.addTypeTests(selector.Selector0, _is_Selector0_default);
  const DeepCollectionEquality__unordered = dart.privateName(equality, "DeepCollectionEquality._unordered");
  let C7;
  const DeepCollectionEquality__base = dart.privateName(equality, "DeepCollectionEquality._base");
  let C6;
  const _is__Selector0State_default = Symbol('_is__Selector0State_default');
  const value$ = dart.privateName(selector, "_Selector0State.value");
  selector._Selector0State$ = dart.generic(T => {
    let TAndTTobool = () => (TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    let BuildContextAndTAndWidgetToWidget = () => (BuildContextAndTAndWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T, framework.Widget])))();
    class _Selector0State extends nested.SingleChildState$(selector.Selector0$(T)) {
      get value() {
        return this[value$];
      }
      set value(value) {
        this[value$] = T._check(value);
      }
      buildWithChild(context, child) {
        let selected = this.widget.selector(context);
        let shouldInvalidateCache = !dart.equals(this.oldWidget, this.widget) || TAndTTobool()._check(this.widget[_shouldRebuild]) != null && dart.test(TAndTTobool()._check(this.widget[_shouldRebuild])(this.value, selected)) || TAndTTobool()._check(this.widget[_shouldRebuild]) == null && !dart.test((C6 || CT.C6).equals(this.value, selected));
        if (shouldInvalidateCache) {
          this.value = selected;
          this.oldWidget = this.widget;
          this.cache = BuildContextAndTAndWidgetToWidget()._check(this.widget.builder)(context, selected, child);
        }
        return this.cache;
      }
    }
    (_Selector0State.new = function() {
      this[value$] = null;
      this.cache = null;
      this.oldWidget = null;
      _Selector0State.__proto__.new.call(this);
      ;
    }).prototype = _Selector0State.prototype;
    dart.addTypeTests(_Selector0State);
    _Selector0State.prototype[_is__Selector0State_default] = true;
    dart.setMethodSignature(_Selector0State, () => ({
      __proto__: dart.getMethods(_Selector0State.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])
    }));
    dart.setLibraryUri(_Selector0State, "package:provider/src/selector.dart");
    dart.setFieldSignature(_Selector0State, () => ({
      __proto__: dart.getFields(_Selector0State.__proto__),
      value: dart.fieldType(T),
      cache: dart.fieldType(framework.Widget),
      oldWidget: dart.fieldType(framework.Widget)
    }));
    return _Selector0State;
  });
  selector._Selector0State = selector._Selector0State$();
  dart.addTypeTests(selector._Selector0State, _is__Selector0State_default);
  const _is_Selector_default = Symbol('_is_Selector_default');
  selector.Selector$ = dart.generic((A, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector extends selector.Selector0$(S) {}
    (Selector.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 138, 16, "selector != null");
      Selector.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider.Provider.of(A, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector.prototype;
    dart.addTypeTests(Selector);
    Selector.prototype[_is_Selector_default] = true;
    dart.setLibraryUri(Selector, "package:provider/src/selector.dart");
    return Selector;
  });
  selector.Selector = selector.Selector$();
  dart.addTypeTests(selector.Selector, _is_Selector_default);
  const _is_Selector2_default = Symbol('_is_Selector2_default');
  selector.Selector2$ = dart.generic((A, B, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector2 extends selector.Selector0$(S) {}
    (Selector2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 157, 16, "selector != null");
      Selector2.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider.Provider.of(A, context), provider.Provider.of(B, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector2.prototype;
    dart.addTypeTests(Selector2);
    Selector2.prototype[_is_Selector2_default] = true;
    dart.setLibraryUri(Selector2, "package:provider/src/selector.dart");
    return Selector2;
  });
  selector.Selector2 = selector.Selector2$();
  dart.addTypeTests(selector.Selector2, _is_Selector2_default);
  const _is_Selector3_default = Symbol('_is_Selector3_default');
  selector.Selector3$ = dart.generic((A, B, C, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector3 extends selector.Selector0$(S) {}
    (Selector3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 180, 16, "selector != null");
      Selector3.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider.Provider.of(A, context), provider.Provider.of(B, context), provider.Provider.of(C, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector3.prototype;
    dart.addTypeTests(Selector3);
    Selector3.prototype[_is_Selector3_default] = true;
    dart.setLibraryUri(Selector3, "package:provider/src/selector.dart");
    return Selector3;
  });
  selector.Selector3 = selector.Selector3$();
  dart.addTypeTests(selector.Selector3, _is_Selector3_default);
  const _is_Selector4_default = Symbol('_is_Selector4_default');
  selector.Selector4$ = dart.generic((A, B, C, D, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector4 extends selector.Selector0$(S) {}
    (Selector4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 204, 16, "selector != null");
      Selector4.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider.Provider.of(A, context), provider.Provider.of(B, context), provider.Provider.of(C, context), provider.Provider.of(D, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector4.prototype;
    dart.addTypeTests(Selector4);
    Selector4.prototype[_is_Selector4_default] = true;
    dart.setLibraryUri(Selector4, "package:provider/src/selector.dart");
    return Selector4;
  });
  selector.Selector4 = selector.Selector4$();
  dart.addTypeTests(selector.Selector4, _is_Selector4_default);
  const _is_Selector5_default = Symbol('_is_Selector5_default');
  selector.Selector5$ = dart.generic((A, B, C, D, E, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector5 extends selector.Selector0$(S) {}
    (Selector5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 229, 16, "selector != null");
      Selector5.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider.Provider.of(A, context), provider.Provider.of(B, context), provider.Provider.of(C, context), provider.Provider.of(D, context), provider.Provider.of(E, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector5.prototype;
    dart.addTypeTests(Selector5);
    Selector5.prototype[_is_Selector5_default] = true;
    dart.setLibraryUri(Selector5, "package:provider/src/selector.dart");
    return Selector5;
  });
  selector.Selector5 = selector.Selector5$();
  dart.addTypeTests(selector.Selector5, _is_Selector5_default);
  const _is_Selector6_default = Symbol('_is_Selector6_default');
  selector.Selector6$ = dart.generic((A, B, C, D, E, F, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector6 extends selector.Selector0$(S) {}
    (Selector6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 255, 16, "selector != null");
      Selector6.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider.Provider.of(A, context), provider.Provider.of(B, context), provider.Provider.of(C, context), provider.Provider.of(D, context), provider.Provider.of(E, context), provider.Provider.of(F, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector6.prototype;
    dart.addTypeTests(Selector6);
    Selector6.prototype[_is_Selector6_default] = true;
    dart.setLibraryUri(Selector6, "package:provider/src/selector.dart");
    return Selector6;
  });
  selector.Selector6 = selector.Selector6$();
  dart.addTypeTests(selector.Selector6, _is_Selector6_default);
  const _is_Consumer_default = Symbol('_is_Consumer_default');
  const builder$0 = dart.privateName(consumer, "Consumer.builder");
  consumer.Consumer$ = dart.generic(T => {
    class Consumer extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$0];
      }
      set builder(value) {
        super.builder = value;
      }
      buildWithChild(context, child) {
        return this.builder(context, provider.Provider.of(T, context), child);
      }
    }
    (Consumer.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$0] = builder;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 165, 16, "builder != null");
      Consumer.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer.prototype;
    dart.addTypeTests(Consumer);
    Consumer.prototype[_is_Consumer_default] = true;
    dart.setMethodSignature(Consumer, () => ({
      __proto__: dart.getMethods(Consumer.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])
    }));
    dart.setLibraryUri(Consumer, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer, () => ({
      __proto__: dart.getFields(Consumer.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, T, framework.Widget]))
    }));
    return Consumer;
  });
  consumer.Consumer = consumer.Consumer$();
  dart.addTypeTests(consumer.Consumer, _is_Consumer_default);
  const _is_Consumer2_default = Symbol('_is_Consumer2_default');
  const builder$1 = dart.privateName(consumer, "Consumer2.builder");
  consumer.Consumer2$ = dart.generic((A, B) => {
    class Consumer2 extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$1];
      }
      set builder(value) {
        super.builder = value;
      }
      buildWithChild(context, child) {
        return this.builder(context, provider.Provider.of(A, context), provider.Provider.of(B, context), child);
      }
    }
    (Consumer2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$1] = builder;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 192, 16, "builder != null");
      Consumer2.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer2.prototype;
    dart.addTypeTests(Consumer2);
    Consumer2.prototype[_is_Consumer2_default] = true;
    dart.setMethodSignature(Consumer2, () => ({
      __proto__: dart.getMethods(Consumer2.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])
    }));
    dart.setLibraryUri(Consumer2, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer2, () => ({
      __proto__: dart.getFields(Consumer2.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, framework.Widget]))
    }));
    return Consumer2;
  });
  consumer.Consumer2 = consumer.Consumer2$();
  dart.addTypeTests(consumer.Consumer2, _is_Consumer2_default);
  const _is_Consumer3_default = Symbol('_is_Consumer3_default');
  const builder$2 = dart.privateName(consumer, "Consumer3.builder");
  consumer.Consumer3$ = dart.generic((A, B, C) => {
    class Consumer3 extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$2];
      }
      set builder(value) {
        super.builder = value;
      }
      buildWithChild(context, child) {
        return this.builder(context, provider.Provider.of(A, context), provider.Provider.of(B, context), provider.Provider.of(C, context), child);
      }
    }
    (Consumer3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$2] = builder;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 216, 16, "builder != null");
      Consumer3.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer3.prototype;
    dart.addTypeTests(Consumer3);
    Consumer3.prototype[_is_Consumer3_default] = true;
    dart.setMethodSignature(Consumer3, () => ({
      __proto__: dart.getMethods(Consumer3.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])
    }));
    dart.setLibraryUri(Consumer3, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer3, () => ({
      __proto__: dart.getFields(Consumer3.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, framework.Widget]))
    }));
    return Consumer3;
  });
  consumer.Consumer3 = consumer.Consumer3$();
  dart.addTypeTests(consumer.Consumer3, _is_Consumer3_default);
  const _is_Consumer4_default = Symbol('_is_Consumer4_default');
  const builder$3 = dart.privateName(consumer, "Consumer4.builder");
  consumer.Consumer4$ = dart.generic((A, B, C, D) => {
    class Consumer4 extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$3];
      }
      set builder(value) {
        super.builder = value;
      }
      buildWithChild(context, child) {
        return this.builder(context, provider.Provider.of(A, context), provider.Provider.of(B, context), provider.Provider.of(C, context), provider.Provider.of(D, context), child);
      }
    }
    (Consumer4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$3] = builder;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 241, 16, "builder != null");
      Consumer4.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer4.prototype;
    dart.addTypeTests(Consumer4);
    Consumer4.prototype[_is_Consumer4_default] = true;
    dart.setMethodSignature(Consumer4, () => ({
      __proto__: dart.getMethods(Consumer4.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])
    }));
    dart.setLibraryUri(Consumer4, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer4, () => ({
      __proto__: dart.getFields(Consumer4.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, D, framework.Widget]))
    }));
    return Consumer4;
  });
  consumer.Consumer4 = consumer.Consumer4$();
  dart.addTypeTests(consumer.Consumer4, _is_Consumer4_default);
  const _is_Consumer5_default = Symbol('_is_Consumer5_default');
  const builder$4 = dart.privateName(consumer, "Consumer5.builder");
  consumer.Consumer5$ = dart.generic((A, B, C, D, E) => {
    class Consumer5 extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$4];
      }
      set builder(value) {
        super.builder = value;
      }
      buildWithChild(context, child) {
        return this.builder(context, provider.Provider.of(A, context), provider.Provider.of(B, context), provider.Provider.of(C, context), provider.Provider.of(D, context), provider.Provider.of(E, context), child);
      }
    }
    (Consumer5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$4] = builder;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 273, 16, "builder != null");
      Consumer5.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer5.prototype;
    dart.addTypeTests(Consumer5);
    Consumer5.prototype[_is_Consumer5_default] = true;
    dart.setMethodSignature(Consumer5, () => ({
      __proto__: dart.getMethods(Consumer5.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])
    }));
    dart.setLibraryUri(Consumer5, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer5, () => ({
      __proto__: dart.getFields(Consumer5.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, D, E, framework.Widget]))
    }));
    return Consumer5;
  });
  consumer.Consumer5 = consumer.Consumer5$();
  dart.addTypeTests(consumer.Consumer5, _is_Consumer5_default);
  const _is_Consumer6_default = Symbol('_is_Consumer6_default');
  const builder$5 = dart.privateName(consumer, "Consumer6.builder");
  consumer.Consumer6$ = dart.generic((A, B, C, D, E, F) => {
    class Consumer6 extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$5];
      }
      set builder(value) {
        super.builder = value;
      }
      buildWithChild(context, child) {
        return this.builder(context, provider.Provider.of(A, context), provider.Provider.of(B, context), provider.Provider.of(C, context), provider.Provider.of(D, context), provider.Provider.of(E, context), provider.Provider.of(F, context), child);
      }
    }
    (Consumer6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$5] = builder;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 308, 16, "builder != null");
      Consumer6.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer6.prototype;
    dart.addTypeTests(Consumer6);
    Consumer6.prototype[_is_Consumer6_default] = true;
    dart.setMethodSignature(Consumer6, () => ({
      __proto__: dart.getMethods(Consumer6.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])
    }));
    dart.setLibraryUri(Consumer6, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer6, () => ({
      __proto__: dart.getFields(Consumer6.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, D, E, F, framework.Widget]))
    }));
    return Consumer6;
  });
  consumer.Consumer6 = consumer.Consumer6$();
  dart.addTypeTests(consumer.Consumer6, _is_Consumer6_default);
  let C8;
  const _is_ChangeNotifierProvider_default = Symbol('_is_ChangeNotifierProvider_default');
  change_notifier_provider.ChangeNotifierProvider$ = dart.generic(T => {
    class ChangeNotifierProvider extends listenable_provider.ListenableProvider$(T) {
      static _dispose(context, notifier) {
        let t0;
        t0 = notifier;
        t0 == null ? null : t0.dispose();
      }
    }
    (ChangeNotifierProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProvider.__proto__.new.call(this, {key: key, create: create, dispose: C8 || CT.C8, lazy: lazy, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProvider.prototype;
    (ChangeNotifierProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProvider.__proto__.value.call(this, {key: key, value: value, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProvider.prototype;
    dart.addTypeTests(ChangeNotifierProvider);
    ChangeNotifierProvider.prototype[_is_ChangeNotifierProvider_default] = true;
    dart.setLibraryUri(ChangeNotifierProvider, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProvider;
  });
  change_notifier_provider.ChangeNotifierProvider = change_notifier_provider.ChangeNotifierProvider$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProvider, _is_ChangeNotifierProvider_default);
  const _is_ChangeNotifierProxyProvider_default = Symbol('_is_ChangeNotifierProxyProvider_default');
  change_notifier_provider.ChangeNotifierProxyProvider$ = dart.generic((T, R) => {
    class ChangeNotifierProxyProvider extends listenable_provider.ListenableProxyProvider$(T, R) {}
    (ChangeNotifierProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C8 || CT.C8, lazy: lazy, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider);
    ChangeNotifierProxyProvider.prototype[_is_ChangeNotifierProxyProvider_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider;
  });
  change_notifier_provider.ChangeNotifierProxyProvider = change_notifier_provider.ChangeNotifierProxyProvider$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider, _is_ChangeNotifierProxyProvider_default);
  const _is_ChangeNotifierProxyProvider0_default = Symbol('_is_ChangeNotifierProxyProvider0_default');
  change_notifier_provider.ChangeNotifierProxyProvider0$ = dart.generic(R => {
    class ChangeNotifierProxyProvider0 extends listenable_provider.ListenableProxyProvider0$(R) {}
    (ChangeNotifierProxyProvider0.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider0.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C8 || CT.C8, lazy: lazy, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider0.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider0);
    ChangeNotifierProxyProvider0.prototype[_is_ChangeNotifierProxyProvider0_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider0, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider0;
  });
  change_notifier_provider.ChangeNotifierProxyProvider0 = change_notifier_provider.ChangeNotifierProxyProvider0$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider0, _is_ChangeNotifierProxyProvider0_default);
  const _is_ChangeNotifierProxyProvider2_default = Symbol('_is_ChangeNotifierProxyProvider2_default');
  change_notifier_provider.ChangeNotifierProxyProvider2$ = dart.generic((T, T2, R) => {
    class ChangeNotifierProxyProvider2 extends listenable_provider.ListenableProxyProvider2$(T, T2, R) {}
    (ChangeNotifierProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider2.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C8 || CT.C8, lazy: lazy, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider2.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider2);
    ChangeNotifierProxyProvider2.prototype[_is_ChangeNotifierProxyProvider2_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider2, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider2;
  });
  change_notifier_provider.ChangeNotifierProxyProvider2 = change_notifier_provider.ChangeNotifierProxyProvider2$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider2, _is_ChangeNotifierProxyProvider2_default);
  const _is_ChangeNotifierProxyProvider3_default = Symbol('_is_ChangeNotifierProxyProvider3_default');
  change_notifier_provider.ChangeNotifierProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    class ChangeNotifierProxyProvider3 extends listenable_provider.ListenableProxyProvider3$(T, T2, T3, R) {}
    (ChangeNotifierProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider3.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C8 || CT.C8, lazy: lazy, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider3.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider3);
    ChangeNotifierProxyProvider3.prototype[_is_ChangeNotifierProxyProvider3_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider3, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider3;
  });
  change_notifier_provider.ChangeNotifierProxyProvider3 = change_notifier_provider.ChangeNotifierProxyProvider3$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider3, _is_ChangeNotifierProxyProvider3_default);
  const _is_ChangeNotifierProxyProvider4_default = Symbol('_is_ChangeNotifierProxyProvider4_default');
  change_notifier_provider.ChangeNotifierProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    class ChangeNotifierProxyProvider4 extends listenable_provider.ListenableProxyProvider4$(T, T2, T3, T4, R) {}
    (ChangeNotifierProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider4.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C8 || CT.C8, lazy: lazy, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider4.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider4);
    ChangeNotifierProxyProvider4.prototype[_is_ChangeNotifierProxyProvider4_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider4, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider4;
  });
  change_notifier_provider.ChangeNotifierProxyProvider4 = change_notifier_provider.ChangeNotifierProxyProvider4$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider4, _is_ChangeNotifierProxyProvider4_default);
  const _is_ChangeNotifierProxyProvider5_default = Symbol('_is_ChangeNotifierProxyProvider5_default');
  change_notifier_provider.ChangeNotifierProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    class ChangeNotifierProxyProvider5 extends listenable_provider.ListenableProxyProvider5$(T, T2, T3, T4, T5, R) {}
    (ChangeNotifierProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider5.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C8 || CT.C8, lazy: lazy, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider5.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider5);
    ChangeNotifierProxyProvider5.prototype[_is_ChangeNotifierProxyProvider5_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider5, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider5;
  });
  change_notifier_provider.ChangeNotifierProxyProvider5 = change_notifier_provider.ChangeNotifierProxyProvider5$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider5, _is_ChangeNotifierProxyProvider5_default);
  const _is_ChangeNotifierProxyProvider6_default = Symbol('_is_ChangeNotifierProxyProvider6_default');
  change_notifier_provider.ChangeNotifierProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    class ChangeNotifierProxyProvider6 extends listenable_provider.ListenableProxyProvider6$(T, T2, T3, T4, T5, T6, R) {}
    (ChangeNotifierProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider6.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C8 || CT.C8, lazy: lazy, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider6.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider6);
    ChangeNotifierProxyProvider6.prototype[_is_ChangeNotifierProxyProvider6_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider6, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider6;
  });
  change_notifier_provider.ChangeNotifierProxyProvider6 = change_notifier_provider.ChangeNotifierProxyProvider6$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider6, _is_ChangeNotifierProxyProvider6_default);
  const _is_StreamProvider_default = Symbol('_is_StreamProvider_default');
  async_provider.StreamProvider$ = dart.generic(T => {
    class StreamProvider extends provider.DeferredInheritedProvider$(async.Stream$(T), T) {}
    (StreamProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(create != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/async_provider.dart", 88, 16, "create != null");
      StreamProvider.__proto__.new.call(this, {key: key, lazy: lazy, create: create, updateShouldNotify: updateShouldNotify, startListening: async_provider._streamStartListening(T, {catchError: catchError, initialData: initialData}), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = StreamProvider.prototype;
    (StreamProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      StreamProvider.__proto__.value.call(this, {key: key, lazy: lazy, value: value, updateShouldNotify: updateShouldNotify, startListening: async_provider._streamStartListening(T, {catchError: catchError, initialData: initialData}), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = StreamProvider.prototype;
    dart.addTypeTests(StreamProvider);
    StreamProvider.prototype[_is_StreamProvider_default] = true;
    dart.setLibraryUri(StreamProvider, "package:provider/src/async_provider.dart");
    return StreamProvider;
  });
  async_provider.StreamProvider = async_provider.StreamProvider$();
  dart.addTypeTests(async_provider.StreamProvider, _is_StreamProvider_default);
  const _is_FutureProvider_default = Symbol('_is_FutureProvider_default');
  async_provider.FutureProvider$ = dart.generic(T => {
    class FutureProvider extends provider.DeferredInheritedProvider$(async.Future$(T), T) {}
    (FutureProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(create != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/async_provider.dart", 185, 16, "create != null");
      FutureProvider.__proto__.new.call(this, {key: key, lazy: lazy, create: create, updateShouldNotify: updateShouldNotify, startListening: async_provider._futureStartListening(T, {catchError: catchError, initialData: initialData}), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = FutureProvider.prototype;
    (FutureProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      FutureProvider.__proto__.value.call(this, {key: key, lazy: false, value: value, updateShouldNotify: updateShouldNotify, startListening: async_provider._futureStartListening(T, {catchError: catchError, initialData: initialData}), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = FutureProvider.prototype;
    dart.addTypeTests(FutureProvider);
    FutureProvider.prototype[_is_FutureProvider_default] = true;
    dart.setLibraryUri(FutureProvider, "package:provider/src/async_provider.dart");
    return FutureProvider;
  });
  async_provider.FutureProvider = async_provider.FutureProvider$();
  dart.addTypeTests(async_provider.FutureProvider, _is_FutureProvider_default);
  async_provider._streamStartListening = function _streamStartListening(T, opts) {
    let initialData = opts && 'initialData' in opts ? opts.initialData : null;
    let catchError = opts && 'catchError' in opts ? opts.catchError : null;
    return dart.fn((e, setState, controller, __) => {
      if (!dart.test(e.hasValue)) {
        setState(initialData);
      }
      if (controller == null) {
        return dart.fn(() => {
        }, VoidToNull());
      }
      let sub = controller.listen(setState, {onError: dart.fn(error => {
          if (catchError != null) {
            setState(catchError(e, error));
          } else {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({library: "provider", exception: assertions.FlutterError.new("An exception was throw by " + dart.str(dart.runtimeType(controller)) + " listened by\nStreamProvider<" + dart.str(dart.wrapType(T)) + ">, but no `catchError` was provided.\n\nException:\n" + dart.str(error) + "\n")}));
          }
        }, dynamicToNull())});
      return dart.bind(sub, 'cancel');
    }, dart.fnType(VoidToFuture(), [provider.InheritedContext$(T), dart.fnType(dart.void, [T]), async.Stream$(T), T]));
  };
  async_provider._futureStartListening = function _futureStartListening(T, opts) {
    let initialData = opts && 'initialData' in opts ? opts.initialData : null;
    let catchError = opts && 'catchError' in opts ? opts.catchError : null;
    return dart.fn((e, setState, controller, __) => {
      let t0;
      if (!dart.test(e.hasValue)) {
        setState(initialData);
      }
      let canceled = false;
      t0 = controller;
      t0 == null ? null : t0.then(core.Null, dart.fn(value => {
        if (canceled) return;
        setState(value);
      }, dart.fnType(core.Null, [T])), {onError: dart.fn(error => {
          if (canceled) return;
          if (catchError != null) {
            setState(catchError(e, error));
          } else {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({library: "provider", exception: assertions.FlutterError.new("An exception was throw by " + dart.str(dart.runtimeType(controller)) + " listened by\nFutureProvider<" + dart.str(dart.wrapType(T)) + ">, but no `catchError` was provided.\n\nException:\n" + dart.str(error) + "\n")}));
          }
        }, dynamicToNull())});
      return dart.fn(() => canceled = true, VoidTobool());
    }, dart.fnType(VoidTobool(), [provider.InheritedContext$(T), dart.fnType(dart.void, [T]), async.Future$(T), T]));
  };
  dart.trackLibraries("packages/provider/provider", {
    "package:provider/src/listenable_provider.dart": listenable_provider,
    "package:provider/src/proxy_provider.dart": proxy_provider,
    "package:provider/src/provider.dart": provider,
    "package:provider/provider.dart": provider$,
    "package:provider/src/value_listenable_provider.dart": value_listenable_provider,
    "package:provider/src/selector.dart": selector,
    "package:provider/src/consumer.dart": consumer,
    "package:provider/src/change_notifier_provider.dart": change_notifier_provider,
    "package:provider/src/async_provider.dart": async_provider
  }, {
    "package:provider/src/provider.dart": ["inherited_provider.dart", "deferred_inherited_provider.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/inherited_provider.dart","src/listenable_provider.dart","src/proxy_provider.dart","src/provider.dart","src/deferred_inherited_provider.dart","src/value_listenable_provider.dart","src/selector.dart","src/consumer.dart","src/change_notifier_provider.dart","src/async_provider.dart"],"names":[],"mappings":"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","file":"provider.ddc.js"}');
  // Exports:
  return {
    src__listenable_provider: listenable_provider,
    src__proxy_provider: proxy_provider,
    src__provider: provider,
    provider: provider$,
    src__value_listenable_provider: value_listenable_provider,
    src__selector: selector,
    src__consumer: consumer,
    src__change_notifier_provider: change_notifier_provider,
    src__async_provider: async_provider
  };
});

//# sourceMappingURL=provider.ddc.js.map
