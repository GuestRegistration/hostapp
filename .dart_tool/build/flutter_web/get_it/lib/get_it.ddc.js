define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const get_it = Object.create(dart.library);
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $clear = dartx.clear;
  const $values = dartx.values;
  const $followedBy = dartx.followedBy;
  const $where = dartx.where;
  const $isEmpty = dartx.isEmpty;
  const $runtimeType = dartx.runtimeType;
  const $length = dartx.length;
  const $first = dartx.first;
  const $containsKey = dartx.containsKey;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  const $entries = dartx.entries;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $isNotEmpty = dartx.isNotEmpty;
  let LinkedMapOfType$_ServiceFactory = () => (LinkedMapOfType$_ServiceFactory = dart.constFn(_js_helper.LinkedMap$(core.Type, get_it._ServiceFactory)))();
  let LinkedMapOfString$_ServiceFactory = () => (LinkedMapOfString$_ServiceFactory = dart.constFn(_js_helper.LinkedMap$(core.String, get_it._ServiceFactory)))();
  let StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  let _ServiceFactoryTobool = () => (_ServiceFactoryTobool = dart.constFn(dart.fnType(core.bool, [get_it._ServiceFactory])))();
  let MapEntryOfType$_ServiceFactory = () => (MapEntryOfType$_ServiceFactory = dart.constFn(core.MapEntry$(core.Type, get_it._ServiceFactory)))();
  let MapEntryOfType$_ServiceFactoryTobool = () => (MapEntryOfType$_ServiceFactoryTobool = dart.constFn(dart.fnType(core.bool, [MapEntryOfType$_ServiceFactory()])))();
  let MapEntryOfType$_ServiceFactoryToString = () => (MapEntryOfType$_ServiceFactoryToString = dart.constFn(dart.fnType(core.String, [MapEntryOfType$_ServiceFactory()])))();
  let MapEntryOfString$_ServiceFactory = () => (MapEntryOfString$_ServiceFactory = dart.constFn(core.MapEntry$(core.String, get_it._ServiceFactory)))();
  let MapEntryOfString$_ServiceFactoryTobool = () => (MapEntryOfString$_ServiceFactoryTobool = dart.constFn(dart.fnType(core.bool, [MapEntryOfString$_ServiceFactory()])))();
  let MapEntryOfString$_ServiceFactoryToString = () => (MapEntryOfString$_ServiceFactoryToString = dart.constFn(dart.fnType(core.String, [MapEntryOfString$_ServiceFactory()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Object.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: get_it._ServiceFactoryType.prototype,
        [_name$]: "_ServiceFactoryType.alwaysNew",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: get_it._ServiceFactoryType.prototype,
        [_name$]: "_ServiceFactoryType.constant",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: get_it._ServiceFactoryType.prototype,
        [_name$]: "_ServiceFactoryType.lazy",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], get_it._ServiceFactoryType);
    }
  });
  const _factories = dart.privateName(get_it, "_factories");
  const _factoriesByName = dart.privateName(get_it, "_factoriesByName");
  const _readySignalStream = dart.privateName(get_it, "_readySignalStream");
  let C0;
  const _register = dart.privateName(get_it, "_register");
  const allowReassignment = dart.privateName(get_it, "GetIt.allowReassignment");
  get_it.GetIt = class GetIt extends core.Object {
    get allowReassignment() {
      return this[allowReassignment];
    }
    set allowReassignment(value) {
      this[allowReassignment] = value;
    }
    get ready() {
      return this[_readySignalStream].stream;
    }
    get readyFuture() {
      return this.ready.first;
    }
    static get instance() {
      get_it.GetIt._instance == null ? get_it.GetIt._instance = new get_it.GetIt.__() : null;
      return get_it.GetIt._instance;
    }
    static get I() {
      return get_it.GetIt.instance;
    }
    static asNewInstance() {
      return new get_it.GetIt.__();
    }
    get(T, instanceName = null) {
      get_it.throwIf(!!T.is(C0 || CT.C0) && instanceName == null, new core.ArgumentError.new("GetIt: You have to provide either a type or a name. Did you accidentally do  `var sl=GetIt.instance();` instead of var sl=GetIt.instance;"));
      let object = null;
      if (instanceName == null) {
        object = get_it._ServiceFactory$(T)._check(this[_factories][$_get](dart.wrapType(T)));
      } else {
        let registeredObject = this[_factoriesByName][$_get](instanceName);
        if (registeredObject != null) {
          if (registeredObject.instance != null && !T.is(registeredObject.instance)) {
            core.print(dart.wrapType(T)[$toString]());
            dart.throw(new core.ArgumentError.new("Object with name " + dart.str(instanceName) + " has a different type (" + dart.str(dart.toString(registeredObject.registrationType)) + ") than the one that is inferred (" + dart.str(dart.wrapType(T)[$toString]()) + ") where you call it"));
          }
        }
        object = get_it._ServiceFactory$(T)._check(registeredObject);
      }
      if (object == null && instanceName == null) {
        dart.throw(new core.ArgumentError.value(dart.wrapType(T), "Object of type " + dart.str(dart.wrapType(T)[$toString]()) + " is not registered inside GetIt.\n Did you forget to pass an instance name? \n(Did you accidentally do  GetIt sl=GetIt.instance(); instead of GetIt sl=GetIt.instance;)"));
      }
      if (object == null && instanceName != null) {
        dart.throw(new core.ArgumentError.value(instanceName, "Object with name " + dart.str(instanceName) + " is not registered inside GetIt"));
      }
      return object.getObject();
    }
    call(T, instanceName = null) {
      return this.get(T, instanceName);
    }
    registerFactory(T, func, opts) {
      let instanceName = opts && 'instanceName' in opts ? opts.instanceName : null;
      this[_register](T, {type: get_it._ServiceFactoryType.alwaysNew, instanceName: instanceName, factoryFunc: func, signalsReady: false});
    }
    registerLazySingleton(T, func, opts) {
      let instanceName = opts && 'instanceName' in opts ? opts.instanceName : null;
      let signalsReady = opts && 'signalsReady' in opts ? opts.signalsReady : false;
      this[_register](T, {type: get_it._ServiceFactoryType.lazy, instanceName: instanceName, factoryFunc: func, signalsReady: signalsReady});
    }
    registerSingleton(T, instance, opts) {
      let instanceName = opts && 'instanceName' in opts ? opts.instanceName : null;
      let signalsReady = opts && 'signalsReady' in opts ? opts.signalsReady : false;
      this[_register](T, {type: get_it._ServiceFactoryType.constant, instanceName: instanceName, instance: instance, signalsReady: signalsReady});
    }
    reset() {
      this[_factories][$clear]();
      this[_factoriesByName][$clear]();
    }
    resetLazySingleton(T, opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let instance = opts && 'instance' in opts ? opts.instance : null;
      let instanceName = opts && 'instanceName' in opts ? opts.instanceName : null;
      let disposingFunction = opts && 'disposingFunction' in opts ? opts.disposingFunction : null;
      if (instance != null) {
        let registeredInstance = this[_factories][$values][$followedBy](this[_factoriesByName][$values])[$where](dart.fn(x => core.identical(x.instance, instance), _ServiceFactoryTobool()));
        get_it.throwIf(registeredInstance[$isEmpty], new core.ArgumentError.value(instance, "There is no object type " + dart.str(dart.runtimeType(instance)) + " registered in GetIt"));
        if (!(registeredInstance[$length] === 1)) dart.assertFailed("One Instance more than once in getIt registered", "org-dartlang-app:///packages/get_it/get_it.dart", 160, 14, "registeredInstance.length == 1");
        get_it.throwIf(!dart.equals(registeredInstance[$first].factoryType, get_it._ServiceFactoryType.lazy), new core.ArgumentError.value(instance, "There is no type " + dart.str(dart.runtimeType(instance)) + " registered as LazySingleton in GetIt"));
        let _factory = registeredInstance[$first];
        t0 = disposingFunction;
        t0 == null ? null : t0(T._check(_factory.instance));
        _factory.instance = null;
      } else {
        get_it.throwIf(!T.is(C0 || CT.C0) && instanceName != null, new core.ArgumentError.new("GetIt: You have to provide either a type OR a name not both."));
        let registeredFactory = (t0$ = this[_factoriesByName][$_get](instanceName), t0$ == null ? this[_factories][$_get](dart.wrapType(T)) : t0$);
        get_it.throwIf(registeredFactory == null, new core.ArgumentError.new("No Type registered " + dart.str(dart.wrapType(T)[$toString]()) + " or instance Name must not be null"));
        get_it.throwIfNot(dart.equals(registeredFactory.factoryType, get_it._ServiceFactoryType.lazy), new core.ArgumentError.value(instance, "There is no type " + dart.str(dart.wrapType(T)[$toString]()) + " registered as LazySingleton in GetIt"));
        if (instanceName == null) {
          t0$0 = disposingFunction;
          t0$0 == null ? null : t0$0(this.get(T));
          t0$1 = this[_factories][$_get](dart.wrapType(T));
          t0$1 == null ? null : t0$1.instance = null;
        } else {
          t0$2 = disposingFunction;
          t0$2 == null ? null : t0$2(this.get(T, instanceName));
          t0$3 = this[_factoriesByName][$_get](dart.wrapType(T));
          t0$3 == null ? null : t0$3.instance = null;
        }
      }
    }
    [_register](T, opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      let factoryFunc = opts && 'factoryFunc' in opts ? opts.factoryFunc : null;
      let instance = opts && 'instance' in opts ? opts.instance : null;
      let instanceName = opts && 'instanceName' in opts ? opts.instanceName : null;
      let signalsReady = opts && 'signalsReady' in opts ? opts.signalsReady : null;
      get_it.throwIfNot(instanceName != null || dart.test(this.allowReassignment) || !dart.test(this[_factories][$containsKey](dart.wrapType(T))), new core.ArgumentError.value(dart.wrapType(T), "Type " + dart.str(dart.wrapType(T)[$toString]()) + " is already registered"));
      get_it.throwIfNot(instanceName != null || dart.test(this.allowReassignment) || !dart.test(this[_factoriesByName][$containsKey](instanceName)), new core.ArgumentError.value(instanceName, "An object of name " + dart.str(instanceName) + " is already registered"));
      let serviceFactory = new (get_it._ServiceFactory$(T)).new(type, {creationFunction: factoryFunc, instance: instance, shouldSignalReady: signalsReady, instanceName: instanceName});
      if (instanceName == null) {
        this[_factories][$_set](dart.wrapType(T), serviceFactory);
      } else {
        this[_factoriesByName][$_set](instanceName, serviceFactory);
      }
    }
    unregister(T, opts) {
      let t0, t0$, t0$0;
      let instance = opts && 'instance' in opts ? opts.instance : null;
      let instanceName = opts && 'instanceName' in opts ? opts.instanceName : null;
      let disposingFunction = opts && 'disposingFunction' in opts ? opts.disposingFunction : null;
      if (instance != null) {
        let registeredInstance = this[_factories][$values][$followedBy](this[_factoriesByName][$values])[$where](dart.fn(x => core.identical(x.instance, instance), _ServiceFactoryTobool()));
        get_it.throwIf(registeredInstance[$isEmpty], new core.ArgumentError.value(instance, "There is no object type " + dart.str(dart.runtimeType(instance)) + " registered in GetIt"));
        let _factory = registeredInstance[$first];
        if (dart.test(_factory.isNamedRegistration)) {
          this[_factoriesByName][$remove](_factory.instanceName);
        } else {
          this[_factories][$remove](_factory.registrationType);
        }
        t0 = disposingFunction;
        t0 == null ? null : t0(T._check(_factory.instance));
      } else {
        get_it.throwIf(!T.is(C0 || CT.C0) && instanceName != null, new core.ArgumentError.new("GetIt: You have to provide either a type OR a name not both."));
        get_it.throwIfNot(instanceName != null && dart.test(this[_factoriesByName][$containsKey](instanceName)) || dart.test(this[_factories][$containsKey](dart.wrapType(T))), new core.ArgumentError.new("No Type registered " + dart.str(dart.wrapType(T)[$toString]()) + " or instance Name must not be null"));
        if (instanceName == null) {
          t0$ = disposingFunction;
          t0$ == null ? null : t0$(this.get(T));
          this[_factories][$remove](dart.wrapType(T));
        } else {
          t0$0 = disposingFunction;
          t0$0 == null ? null : t0$0(this.get(T, instanceName));
          this[_factoriesByName][$remove](instanceName);
        }
      }
    }
    signalReady(instance = null) {
      if (instance != null) {
        let registeredInstance = this[_factories][$values][$followedBy](this[_factoriesByName][$values])[$where](dart.fn(x => core.identical(x.instance, instance), _ServiceFactoryTobool()));
        get_it.throwIf(dart.notNull(registeredInstance[$length]) > 1, new core.StateError.new("This objects instance of type " + dart.str(dart.runtimeType(instance)) + " are registered multiple times in GetIt"));
        get_it.throwIf(registeredInstance[$isEmpty], new core.ArgumentError.value(instance, "There is no object type " + dart.str(dart.runtimeType(instance)) + " registered in GetIt"));
        get_it.throwIfNot(registeredInstance[$first].shouldSignalReady, new core.ArgumentError.value(instance, "This instance of type " + dart.str(dart.runtimeType(instance)) + " is not supposed to be signalled"));
        get_it.throwIf(registeredInstance[$first].isReady, new core.StateError.new("This instance of type " + dart.str(dart.runtimeType(instance)) + " was already signalled"));
        registeredInstance[$first].isReady = true;
        let shouldSignalButNotReady = this[_factories][$values][$followedBy](this[_factoriesByName][$values])[$where](dart.fn(x => dart.test(x.shouldSignalReady) && !dart.test(x.isReady), _ServiceFactoryTobool()));
        if (dart.test(shouldSignalButNotReady[$isEmpty])) {
          this[_readySignalStream].add(true);
        }
      } else {
        let notReadyTypes = this[_factories][$entries][$where](dart.fn(x => dart.test(x.value.shouldSignalReady) && !dart.test(x.value.isReady), MapEntryOfType$_ServiceFactoryTobool()))[$map](core.String, dart.fn(x => dart.toString(x.key), MapEntryOfType$_ServiceFactoryToString()))[$toList]();
        let notReadyNames = this[_factoriesByName][$entries][$where](dart.fn(x => dart.test(x.value.shouldSignalReady) && !dart.test(x.value.isReady), MapEntryOfString$_ServiceFactoryTobool()))[$map](core.String, dart.fn(x => x.key, MapEntryOfString$_ServiceFactoryToString()))[$toList]();
        get_it.throwIf(dart.test(notReadyNames[$isNotEmpty]) || dart.test(notReadyTypes[$isNotEmpty]), new core.StateError.new("Registered types/names: " + dart.str(notReadyTypes) + "  / " + dart.str(notReadyNames) + " should signal ready but are not ready"));
        this[_readySignalStream].add(true);
      }
    }
  };
  (get_it.GetIt.__ = function() {
    this[_factories] = new (LinkedMapOfType$_ServiceFactory()).new();
    this[_factoriesByName] = new (LinkedMapOfString$_ServiceFactory()).new();
    this[_readySignalStream] = StreamControllerOfvoid().broadcast();
    this[allowReassignment] = false;
    ;
  }).prototype = get_it.GetIt.prototype;
  dart.addTypeTests(get_it.GetIt);
  dart.setMethodSignature(get_it.GetIt, () => ({
    __proto__: dart.getMethods(get_it.GetIt.__proto__),
    get: dart.gFnType(T => [T, [], [core.String]]),
    call: dart.gFnType(T => [T, [], [core.String]]),
    registerFactory: dart.gFnType(T => [dart.void, [dart.fnType(T, [])], {instanceName: core.String}, {}]),
    registerLazySingleton: dart.gFnType(T => [dart.void, [dart.fnType(T, [])], {instanceName: core.String, signalsReady: core.bool}, {}]),
    registerSingleton: dart.gFnType(T => [dart.void, [T], {instanceName: core.String, signalsReady: core.bool}, {}]),
    reset: dart.fnType(dart.void, []),
    resetLazySingleton: dart.gFnType(T => [dart.void, [], {disposingFunction: dart.fnType(dart.void, [T]), instance: core.Object, instanceName: core.String}, {}]),
    [_register]: dart.gFnType(T => [dart.void, [], {factoryFunc: dart.fnType(dart.dynamic, []), instance: T, instanceName: core.String, signalsReady: core.bool, type: get_it._ServiceFactoryType}, {}]),
    unregister: dart.gFnType(T => [dart.void, [], {disposingFunction: dart.fnType(dart.void, [T]), instance: core.Object, instanceName: core.String}, {}]),
    signalReady: dart.fnType(dart.void, [], [core.Object])
  }));
  dart.setGetterSignature(get_it.GetIt, () => ({
    __proto__: dart.getGetters(get_it.GetIt.__proto__),
    ready: async.Stream$(dart.void),
    readyFuture: async.Future$(dart.void)
  }));
  dart.setLibraryUri(get_it.GetIt, "package:get_it/get_it.dart");
  dart.setFieldSignature(get_it.GetIt, () => ({
    __proto__: dart.getFields(get_it.GetIt.__proto__),
    [_factories]: dart.finalFieldType(core.Map$(core.Type, get_it._ServiceFactory)),
    [_factoriesByName]: dart.finalFieldType(core.Map$(core.String, get_it._ServiceFactory)),
    [_readySignalStream]: dart.finalFieldType(async.StreamController$(dart.void)),
    allowReassignment: dart.fieldType(core.bool)
  }));
  dart.defineLazy(get_it.GetIt, {
    /*get_it.GetIt._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  const _name$ = dart.privateName(get_it, "_name");
  let C1;
  let C2;
  let C3;
  let C4;
  get_it._ServiceFactoryType = class _ServiceFactoryType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (get_it._ServiceFactoryType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = get_it._ServiceFactoryType.prototype;
  dart.addTypeTests(get_it._ServiceFactoryType);
  dart.setLibraryUri(get_it._ServiceFactoryType, "package:get_it/get_it.dart");
  dart.setFieldSignature(get_it._ServiceFactoryType, () => ({
    __proto__: dart.getFields(get_it._ServiceFactoryType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(get_it._ServiceFactoryType, ['toString']);
  get_it._ServiceFactoryType.alwaysNew = C1 || CT.C1;
  get_it._ServiceFactoryType.constant = C2 || CT.C2;
  get_it._ServiceFactoryType.lazy = C3 || CT.C3;
  get_it._ServiceFactoryType.values = C4 || CT.C4;
  const _is__ServiceFactory_default = Symbol('_is__ServiceFactory_default');
  get_it._ServiceFactory$ = dart.generic(T => {
    class _ServiceFactory extends core.Object {
      get isNamedRegistration() {
        return this.instanceName != null;
      }
      getObject() {
        try {
          switch (this.factoryType) {
            case C1 || CT.C1:
            {
              return T.as(this.creationFunction());
              break;
            }
            case C2 || CT.C2:
            {
              return T.as(this.instance);
              break;
            }
            case C3 || CT.C3:
            {
              if (this.instance == null) {
                this.instance = this.creationFunction();
              }
              return T.as(this.instance);
              break;
            }
            default:
            {
              dart.throw(new core.StateError.new("Impossible factoryType"));
            }
          }
        } catch (e$) {
          let e = dart.getThrown(e$);
          let s = dart.stackTrace(e$);
          core.print("Error while creating " + dart.str(dart.wrapType(T)[$toString]()));
          core.print("Stack trace:\n " + dart.str(s));
          dart.rethrow(e$);
        }
      }
    }
    (_ServiceFactory.new = function(factoryType, opts) {
      let creationFunction = opts && 'creationFunction' in opts ? opts.creationFunction : null;
      let instance = opts && 'instance' in opts ? opts.instance : null;
      let isReady = opts && 'isReady' in opts ? opts.isReady : false;
      let shouldSignalReady = opts && 'shouldSignalReady' in opts ? opts.shouldSignalReady : false;
      let instanceName = opts && 'instanceName' in opts ? opts.instanceName : null;
      this.registrationType = null;
      this.factoryType = factoryType;
      this.creationFunction = creationFunction;
      this.instance = instance;
      this.isReady = isReady;
      this.shouldSignalReady = shouldSignalReady;
      this.instanceName = instanceName;
      this.registrationType = dart.wrapType(T);
    }).prototype = _ServiceFactory.prototype;
    dart.addTypeTests(_ServiceFactory);
    _ServiceFactory.prototype[_is__ServiceFactory_default] = true;
    dart.setMethodSignature(_ServiceFactory, () => ({
      __proto__: dart.getMethods(_ServiceFactory.__proto__),
      getObject: dart.fnType(T, [])
    }));
    dart.setGetterSignature(_ServiceFactory, () => ({
      __proto__: dart.getGetters(_ServiceFactory.__proto__),
      isNamedRegistration: core.bool
    }));
    dart.setLibraryUri(_ServiceFactory, "package:get_it/get_it.dart");
    dart.setFieldSignature(_ServiceFactory, () => ({
      __proto__: dart.getFields(_ServiceFactory.__proto__),
      factoryType: dart.finalFieldType(get_it._ServiceFactoryType),
      creationFunction: dart.finalFieldType(dart.fnType(dart.dynamic, [])),
      instanceName: dart.finalFieldType(core.String),
      shouldSignalReady: dart.finalFieldType(core.bool),
      isReady: dart.fieldType(core.bool),
      instance: dart.fieldType(core.Object),
      registrationType: dart.fieldType(core.Type)
    }));
    return _ServiceFactory;
  });
  get_it._ServiceFactory = get_it._ServiceFactory$();
  dart.addTypeTests(get_it._ServiceFactory, _is__ServiceFactory_default);
  get_it.throwIf = function throwIf(condition, error) {
    if (dart.test(condition)) dart.throw(error);
  };
  get_it.throwIfNot = function throwIfNot(condition, error) {
    if (!dart.test(condition)) dart.throw(error);
  };
  dart.trackLibraries("packages/get_it/get_it", {
    "package:get_it/get_it.dart": get_it
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["get_it.dart"],"names":[],"mappings":"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","file":"get_it.ddc.js"}');
  // Exports:
  return {
    get_it: get_it
  };
});

//# sourceMappingURL=get_it.ddc.js.map
