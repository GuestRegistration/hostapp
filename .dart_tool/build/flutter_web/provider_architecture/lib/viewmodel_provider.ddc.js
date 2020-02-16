define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/provider/provider'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__provider__provider) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const change_notifier_provider = packages__provider__provider.src__change_notifier_provider;
  const consumer = packages__provider__provider.src__consumer;
  const viewmodel_provider = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: viewmodel_provider._ViewModelProviderType.prototype,
        [_name$]: "_ViewModelProviderType.WithoutConsumer",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: viewmodel_provider._ViewModelProviderType.prototype,
        [_name$]: "_ViewModelProviderType.WithConsumer",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], viewmodel_provider._ViewModelProviderType);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "create",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/provider_architecture/viewmodel_provider.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/provider_architecture/viewmodel_provider.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "create",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/provider_architecture/viewmodel_provider.dart"
      });
    }
  });
  const _name$ = dart.privateName(viewmodel_provider, "_name");
  let C0;
  let C1;
  let C2;
  viewmodel_provider._ViewModelProviderType = class _ViewModelProviderType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (viewmodel_provider._ViewModelProviderType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = viewmodel_provider._ViewModelProviderType.prototype;
  dart.addTypeTests(viewmodel_provider._ViewModelProviderType);
  dart.setLibraryUri(viewmodel_provider._ViewModelProviderType, "package:provider_architecture/viewmodel_provider.dart");
  dart.setFieldSignature(viewmodel_provider._ViewModelProviderType, () => ({
    __proto__: dart.getFields(viewmodel_provider._ViewModelProviderType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(viewmodel_provider._ViewModelProviderType, ['toString']);
  viewmodel_provider._ViewModelProviderType.WithoutConsumer = C0 || CT.C0;
  viewmodel_provider._ViewModelProviderType.WithConsumer = C1 || CT.C1;
  viewmodel_provider._ViewModelProviderType.values = C2 || CT.C2;
  const _is_ViewModelProvider_default = Symbol('_is_ViewModelProvider_default');
  const staticChild$ = dart.privateName(viewmodel_provider, "ViewModelProvider.staticChild");
  const onModelReady$ = dart.privateName(viewmodel_provider, "ViewModelProvider.onModelReady");
  const builder$ = dart.privateName(viewmodel_provider, "ViewModelProvider.builder");
  const viewModel$ = dart.privateName(viewmodel_provider, "ViewModelProvider.viewModel");
  const providerType = dart.privateName(viewmodel_provider, "ViewModelProvider.providerType");
  viewmodel_provider.ViewModelProvider$ = dart.generic(T => {
    let _ViewModelProviderStateOfT = () => (_ViewModelProviderStateOfT = dart.constFn(viewmodel_provider._ViewModelProviderState$(T)))();
    class ViewModelProvider extends framework.StatefulWidget {
      get staticChild() {
        return this[staticChild$];
      }
      set staticChild(value) {
        super.staticChild = value;
      }
      get onModelReady() {
        return this[onModelReady$];
      }
      set onModelReady(value) {
        super.onModelReady = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get viewModel() {
        return this[viewModel$];
      }
      set viewModel(value) {
        super.viewModel = value;
      }
      get providerType() {
        return this[providerType];
      }
      set providerType(value) {
        super.providerType = value;
      }
      createState() {
        return new (_ViewModelProviderStateOfT()).new();
      }
    }
    (ViewModelProvider.withoutConsumer = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let viewModel = opts && 'viewModel' in opts ? opts.viewModel : null;
      let onModelReady = opts && 'onModelReady' in opts ? opts.onModelReady : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[viewModel$] = viewModel;
      this[onModelReady$] = onModelReady;
      this[providerType] = viewmodel_provider._ViewModelProviderType.WithoutConsumer;
      this[staticChild$] = null;
      ViewModelProvider.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ViewModelProvider.prototype;
    (ViewModelProvider.withConsumer = function(opts) {
      let viewModel = opts && 'viewModel' in opts ? opts.viewModel : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let staticChild = opts && 'staticChild' in opts ? opts.staticChild : null;
      let onModelReady = opts && 'onModelReady' in opts ? opts.onModelReady : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[viewModel$] = viewModel;
      this[builder$] = builder;
      this[staticChild$] = staticChild;
      this[onModelReady$] = onModelReady;
      this[providerType] = viewmodel_provider._ViewModelProviderType.WithConsumer;
      ViewModelProvider.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ViewModelProvider.prototype;
    dart.addTypeTests(ViewModelProvider);
    ViewModelProvider.prototype[_is_ViewModelProvider_default] = true;
    dart.setMethodSignature(ViewModelProvider, () => ({
      __proto__: dart.getMethods(ViewModelProvider.__proto__),
      createState: dart.fnType(viewmodel_provider._ViewModelProviderState$(T), [])
    }));
    dart.setLibraryUri(ViewModelProvider, "package:provider_architecture/viewmodel_provider.dart");
    dart.setFieldSignature(ViewModelProvider, () => ({
      __proto__: dart.getFields(ViewModelProvider.__proto__),
      staticChild: dart.finalFieldType(framework.Widget),
      onModelReady: dart.finalFieldType(dart.fnType(dart.dynamic, [T])),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, T, framework.Widget])),
      viewModel: dart.finalFieldType(T),
      providerType: dart.finalFieldType(viewmodel_provider._ViewModelProviderType)
    }));
    return ViewModelProvider;
  });
  viewmodel_provider.ViewModelProvider = viewmodel_provider.ViewModelProvider$();
  dart.addTypeTests(viewmodel_provider.ViewModelProvider, _is_ViewModelProvider_default);
  const _model = dart.privateName(viewmodel_provider, "_model");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C14;
  let C12;
  let C11;
  const _is__ViewModelProviderState_default = Symbol('_is__ViewModelProviderState_default');
  viewmodel_provider._ViewModelProviderState$ = dart.generic(T => {
    let TTodynamic = () => (TTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T])))();
    let ChangeNotifierProviderOfT = () => (ChangeNotifierProviderOfT = dart.constFn(change_notifier_provider.ChangeNotifierProvider$(T)))();
    let BuildContextToT = () => (BuildContextToT = dart.constFn(dart.fnType(T, [framework.BuildContext])))();
    let BuildContextAndTAndWidgetToWidget = () => (BuildContextAndTAndWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T, framework.Widget])))();
    let ConsumerOfT = () => (ConsumerOfT = dart.constFn(consumer.Consumer$(T)))();
    class _ViewModelProviderState extends framework.State$(viewmodel_provider.ViewModelProvider$(T)) {
      initState() {
        super.initState();
        this[_model] = this.widget.viewModel;
        if (TTodynamic()._check(this.widget.onModelReady) != null) {
          TTodynamic()._check(this.widget.onModelReady)(this[_model]);
        }
      }
      build(context) {
        if (dart.equals(this.widget.providerType, viewmodel_provider._ViewModelProviderType.WithoutConsumer)) {
          return new (ChangeNotifierProviderOfT()).new({create: dart.fn(context => this[_model], BuildContextToT()), child: BuildContextAndTAndWidgetToWidget()._check(this.widget.builder)(context, this[_model], null), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
        }
        return new (ChangeNotifierProviderOfT()).new({create: dart.fn(context => this[_model], BuildContextToT()), child: new (ConsumerOfT()).new({builder: BuildContextAndTAndWidgetToWidget()._check(this.widget.builder), child: this.widget.staticChild, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
      }
    }
    (_ViewModelProviderState.new = function() {
      this[_model] = null;
      _ViewModelProviderState.__proto__.new.call(this);
      ;
    }).prototype = _ViewModelProviderState.prototype;
    dart.addTypeTests(_ViewModelProviderState);
    _ViewModelProviderState.prototype[_is__ViewModelProviderState_default] = true;
    dart.setMethodSignature(_ViewModelProviderState, () => ({
      __proto__: dart.getMethods(_ViewModelProviderState.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(_ViewModelProviderState, "package:provider_architecture/viewmodel_provider.dart");
    dart.setFieldSignature(_ViewModelProviderState, () => ({
      __proto__: dart.getFields(_ViewModelProviderState.__proto__),
      [_model]: dart.fieldType(T)
    }));
    return _ViewModelProviderState;
  });
  viewmodel_provider._ViewModelProviderState = viewmodel_provider._ViewModelProviderState$();
  dart.addTypeTests(viewmodel_provider._ViewModelProviderState, _is__ViewModelProviderState_default);
  dart.trackLibraries("packages/provider_architecture/viewmodel_provider", {
    "package:provider_architecture/viewmodel_provider.dart": viewmodel_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["viewmodel_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAG4D;;mEAAvD;;;;EAAuD;;;;;;;;;;;;;;;;;;;;;MAI7C;;;;;;MACK;;;;;;MAC6B;;;;;;MACvC;;;;;;MACqB;;;;;;;AAiBe;MAA4B;;;UAdvD;UACA;UACV;;MAFU;MACA;MACV;MACY,qBAAyB;MAC1B,qBAAE;AALpB;;IAKwB;;UAGP;UACA;UACV;UACA;;MAHU;MACA;MACV;MACA;MACW,qBAAyB;AAL3C;;IAKuD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYpC,QAAX;AACmB,QAAzB,eAAS,AAAO;AAEhB,gCAAI,AAAO,6BAAgB;AACE,UAApB,oBAAP,0BAAoB;;MAExB;YAG0B;AACxB,YAAwB,YAApB,AAAO,0BAAuC;AAChD,gBAAO,gDACG,QAAC,WAAY,yCACP,2CAAP,qBAAe,OAAO,EAAE,cAAQ;;AAI3C,cAAO,gDACG,QAAC,WAAY,yCACd,6EACI,AAAO,6BACT,AAAO;MAGpB;;;MA5BE;;;IA6BJ","file":"viewmodel_provider.ddc.js"}');
  // Exports:
  return {
    viewmodel_provider: viewmodel_provider
  };
});

//# sourceMappingURL=viewmodel_provider.ddc.js.map
