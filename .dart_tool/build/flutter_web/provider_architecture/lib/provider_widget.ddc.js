define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/provider/provider'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__provider__provider) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const provider = packages__provider__provider.src__provider;
  const provider_widget = Object.create(dart.library);
  const CT = Object.create(null);
  const _is_ProviderWidget_default = Symbol('_is_ProviderWidget_default');
  const listen$ = dart.privateName(provider_widget, "ProviderWidget.listen");
  provider_widget.ProviderWidget$ = dart.generic(T => {
    let _DataProviderElementOfT = () => (_DataProviderElementOfT = dart.constFn(provider_widget._DataProviderElement$(T)))();
    class ProviderWidget extends framework.Widget {
      get listen() {
        return this[listen$];
      }
      set listen(value) {
        super.listen = value;
      }
      createElement() {
        return new (_DataProviderElementOfT()).new(this);
      }
    }
    (ProviderWidget.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let listen = opts && 'listen' in opts ? opts.listen : true;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[listen$] = listen;
      ProviderWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProviderWidget.prototype;
    dart.addTypeTests(ProviderWidget);
    ProviderWidget.prototype[_is_ProviderWidget_default] = true;
    dart.setMethodSignature(ProviderWidget, () => ({
      __proto__: dart.getMethods(ProviderWidget.__proto__),
      createElement: dart.fnType(provider_widget._DataProviderElement$(T), [])
    }));
    dart.setLibraryUri(ProviderWidget, "package:provider_architecture/provider_widget.dart");
    dart.setFieldSignature(ProviderWidget, () => ({
      __proto__: dart.getFields(ProviderWidget.__proto__),
      listen: dart.finalFieldType(core.bool)
    }));
    return ProviderWidget;
  });
  provider_widget.ProviderWidget = provider_widget.ProviderWidget$();
  dart.addTypeTests(provider_widget.ProviderWidget, _is_ProviderWidget_default);
  const _is__DataProviderElement_default = Symbol('_is__DataProviderElement_default');
  provider_widget._DataProviderElement$ = dart.generic(T => {
    class _DataProviderElement extends framework.ComponentElement {
      get widget() {
        return provider_widget.ProviderWidget._check(super.widget);
      }
      build() {
        return this.widget.build(this, provider.Provider.of(T, this, {listen: this.widget.listen}));
      }
      update(newWidget) {
        provider_widget.ProviderWidget._check(newWidget);
        super.update(newWidget);
        if (!dart.equals(this.widget, newWidget)) dart.assertFailed(null, "org-dartlang-app:///packages/provider_architecture/provider_widget.dart", 30, 12, "widget == newWidget");
        this.rebuild();
      }
    }
    (_DataProviderElement.new = function(widget) {
      _DataProviderElement.__proto__.new.call(this, widget);
      ;
    }).prototype = _DataProviderElement.prototype;
    dart.addTypeTests(_DataProviderElement);
    _DataProviderElement.prototype[_is__DataProviderElement_default] = true;
    dart.setMethodSignature(_DataProviderElement, () => ({
      __proto__: dart.getMethods(_DataProviderElement.__proto__),
      build: dart.fnType(framework.Widget, [])
    }));
    dart.setGetterSignature(_DataProviderElement, () => ({
      __proto__: dart.getGetters(_DataProviderElement.__proto__),
      widget: provider_widget.ProviderWidget
    }));
    dart.setLibraryUri(_DataProviderElement, "package:provider_architecture/provider_widget.dart");
    return _DataProviderElement;
  });
  provider_widget._DataProviderElement = provider_widget._DataProviderElement$();
  dart.addTypeTests(provider_widget._DataProviderElement, _is__DataProviderElement_default);
  dart.trackLibraries("packages/provider_architecture/provider_widget", {
    "package:provider_architecture/provider_widget.dart": provider_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["provider_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAKa;;;;;;;AAQgC,mDAAwB;MAAK;;;UANpD;UAAU;;;AAAkB,oDAAW,GAAG;;IAAC;;;;;;;;;;;;;;;;;;;;AAalC,qDAAM;MAAM;;AAIrC,cAAA,AAAO,mBAAM,MAAe,wBAAM,eAAc,AAAO;MAAQ;;8CAGxC;AACF,QAAjB,aAAO,SAAS;AACtB,aAAc,YAAP,aAAU,SAAS;AACjB,QAAT;MACF;;yCAdoC;AAAU,oDAAM,MAAM;;IAAC","file":"provider_widget.ddc.js"}');
  // Exports:
  return {
    provider_widget: provider_widget
  };
});

//# sourceMappingURL=provider_widget.ddc.js.map
