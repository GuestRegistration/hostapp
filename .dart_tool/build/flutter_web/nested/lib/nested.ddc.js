define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const nested = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $reversed = dartx.reversed;
  let LinkedHashSetOf_NestedHookElement = () => (LinkedHashSetOf_NestedHookElement = dart.constFn(collection.LinkedHashSet$(nested._NestedHookElement)))();
  let ElementTobool = () => (ElementTobool = dart.constFn(dart.fnType(core.bool, [framework.Element])))();
  let ElementTovoid = () => (ElementTovoid = dart.constFn(dart.fnType(dart.void, [framework.Element])))();
  let SingleChildStateOfSingleChildStatefulWidget = () => (SingleChildStateOfSingleChildStatefulWidget = dart.constFn(nested.SingleChildState$(nested.SingleChildStatefulWidget)))();
  let SingleChildStateMixinOfStatefulWidget = () => (SingleChildStateMixinOfStatefulWidget = dart.constFn(nested.SingleChildStateMixin$(framework.StatefulWidget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "owner",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "wrappedWidget",
        [_Location_column]: 9,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "injectedChild",
        [_Location_column]: 9,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/nested/nested.dart"
      });
    }
  });
  const _children = dart.privateName(nested, "_children");
  const _child = dart.privateName(nested, "_child");
  nested.Nested = class Nested extends framework.StatelessWidget {
    build(context) {
      dart.throw(new core.StateError.new("implemented internally"));
    }
    createElement() {
      return new nested._NestedElement.new(this);
    }
  };
  (nested.Nested.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(children != null)) dart.assertFailed(null, "org-dartlang-app:///packages/nested/nested.dart", 71, 16, "children != null");
    if (!(children != null && dart.test(children[$isNotEmpty]))) dart.assertFailed(null, "org-dartlang-app:///packages/nested/nested.dart", 72, 16, "children != null && children.isNotEmpty");
    this[_children] = children;
    this[_child] = child;
    nested.Nested.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = nested.Nested.prototype;
  dart.addTypeTests(nested.Nested);
  nested.Nested[dart.implements] = () => [nested.SingleChildWidget];
  dart.setMethodSignature(nested.Nested, () => ({
    __proto__: dart.getMethods(nested.Nested.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    createElement: dart.fnType(nested._NestedElement, [])
  }));
  dart.setLibraryUri(nested.Nested, "package:nested/nested.dart");
  dart.setFieldSignature(nested.Nested, () => ({
    __proto__: dart.getFields(nested.Nested.__proto__),
    [_children]: dart.finalFieldType(core.List$(nested.SingleChildWidget)),
    [_child]: dart.finalFieldType(framework.Widget)
  }));
  const _parent = dart.privateName(nested, "_parent");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  nested.SingleChildWidgetElementMixin = class SingleChildWidgetElementMixin extends framework.Element {};
  nested.SingleChildWidgetElementMixin[dart.mixinOn] = Element => class SingleChildWidgetElementMixin extends Element {
    mount(parent, newSlot) {
      if (nested._NestedHookElement.is(parent)) {
        this[_parent] = parent;
      }
      super.mount(parent, newSlot);
    }
    activate() {
      super.activate();
      this.visitAncestorElements(dart.fn(parent => {
        if (nested._NestedHookElement.is(parent)) {
          this[_parent] = parent;
        }
        return false;
      }, ElementTobool()));
    }
  };
  (nested.SingleChildWidgetElementMixin[dart.mixinNew] = function() {
    this[_parent] = null;
  }).prototype = nested.SingleChildWidgetElementMixin.prototype;
  dart.addTypeTests(nested.SingleChildWidgetElementMixin);
  nested.SingleChildWidgetElementMixin[dart.implements] = () => [framework.Element];
  dart.setLibraryUri(nested.SingleChildWidgetElementMixin, "package:nested/nested.dart");
  dart.setFieldSignature(nested.SingleChildWidgetElementMixin, () => ({
    __proto__: dart.getFields(nested.SingleChildWidgetElementMixin.__proto__),
    [_parent]: dart.fieldType(nested._NestedHookElement)
  }));
  const StatelessElement_SingleChildWidgetElementMixin$36 = class StatelessElement_SingleChildWidgetElementMixin extends framework.StatelessElement {};
  (StatelessElement_SingleChildWidgetElementMixin$36.new = function(widget) {
    nested.SingleChildWidgetElementMixin[dart.mixinNew].call(this);
    StatelessElement_SingleChildWidgetElementMixin$36.__proto__.new.call(this, widget);
  }).prototype = StatelessElement_SingleChildWidgetElementMixin$36.prototype;
  dart.applyMixin(StatelessElement_SingleChildWidgetElementMixin$36, nested.SingleChildWidgetElementMixin);
  nested._NestedElement = class _NestedElement extends StatelessElement_SingleChildWidgetElementMixin$36 {
    get widget() {
      return nested.Nested.as(super.widget);
    }
    build() {
      let t0, t0$, t0$0;
      let nestedHook = null;
      let nextNode = (t0$ = (t0 = this[_parent], t0 == null ? null : t0.injectedChild), t0$ == null ? this.widget[_child] : t0$);
      for (let child of this.widget[_children][$reversed]) {
        nextNode = nestedHook = new nested._NestedHook.new({owner: this, wrappedWidget: child, injectedChild: nextNode, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
      }
      if (nestedHook != null) {
        for (let node of this.nodes) {
          t0$0 = node;
          t0$0.wrappedChild = nestedHook.wrappedWidget;
          t0$0.injectedChild = nestedHook.injectedChild;
          t0$0;
          let next = nestedHook.injectedChild;
          if (nested._NestedHook.is(next)) {
            nestedHook = next;
          } else {
            break;
          }
        }
      }
      return nextNode;
    }
  };
  (nested._NestedElement.new = function(widget) {
    this.nodes = LinkedHashSetOf_NestedHookElement().new();
    nested._NestedElement.__proto__.new.call(this, widget);
    ;
  }).prototype = nested._NestedElement.prototype;
  dart.addTypeTests(nested._NestedElement);
  dart.setGetterSignature(nested._NestedElement, () => ({
    __proto__: dart.getGetters(nested._NestedElement.__proto__),
    widget: nested.Nested
  }));
  dart.setLibraryUri(nested._NestedElement, "package:nested/nested.dart");
  dart.setFieldSignature(nested._NestedElement, () => ({
    __proto__: dart.getFields(nested._NestedElement.__proto__),
    nodes: dart.finalFieldType(core.Set$(nested._NestedHookElement))
  }));
  nested._NestedHook = class _NestedHook extends framework.StatelessWidget {
    createElement() {
      return new nested._NestedHookElement.new(this);
    }
    build(context) {
      return dart.throw(new core.StateError.new("handled internally"));
    }
  };
  (nested._NestedHook.new = function(opts) {
    let injectedChild = opts && 'injectedChild' in opts ? opts.injectedChild : null;
    let wrappedWidget = opts && 'wrappedWidget' in opts ? opts.wrappedWidget : null;
    let owner = opts && 'owner' in opts ? opts.owner : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.injectedChild = injectedChild;
    this.wrappedWidget = wrappedWidget;
    this.owner = owner;
    nested._NestedHook.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = nested._NestedHook.prototype;
  dart.addTypeTests(nested._NestedHook);
  dart.setMethodSignature(nested._NestedHook, () => ({
    __proto__: dart.getMethods(nested._NestedHook.__proto__),
    createElement: dart.fnType(nested._NestedHookElement, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(nested._NestedHook, "package:nested/nested.dart");
  dart.setFieldSignature(nested._NestedHook, () => ({
    __proto__: dart.getFields(nested._NestedHook.__proto__),
    wrappedWidget: dart.finalFieldType(nested.SingleChildWidget),
    injectedChild: dart.finalFieldType(framework.Widget),
    owner: dart.finalFieldType(nested._NestedElement)
  }));
  const _injectedChild = dart.privateName(nested, "_injectedChild");
  const _wrappedChild = dart.privateName(nested, "_wrappedChild");
  nested._NestedHookElement = class _NestedHookElement extends framework.StatelessElement {
    get widget() {
      return nested._NestedHook.as(super.widget);
    }
    get injectedChild() {
      return this[_injectedChild];
    }
    set injectedChild(value) {
      let previous = this[_injectedChild];
      if (nested._NestedHook.is(value) && nested._NestedHook.is(previous) && dart.test(framework.Widget.canUpdate(value.wrappedWidget, previous.wrappedWidget))) {
        return;
      }
      if (!dart.equals(previous, value)) {
        this[_injectedChild] = value;
        this.visitChildren(dart.fn(e => e.markNeedsBuild(), ElementTovoid()));
      }
    }
    get wrappedChild() {
      return this[_wrappedChild];
    }
    set wrappedChild(value) {
      if (!dart.equals(this[_wrappedChild], value)) {
        this[_wrappedChild] = value;
        this.markNeedsBuild();
      }
    }
    mount(parent, newSlot) {
      this.widget.owner.nodes.add(this);
      this[_wrappedChild] = this.widget.wrappedWidget;
      this[_injectedChild] = this.widget.injectedChild;
      super.mount(parent, newSlot);
    }
    unmount() {
      this.widget.owner.nodes.remove(this);
      super.unmount();
    }
    build() {
      return this.wrappedChild;
    }
  };
  (nested._NestedHookElement.new = function(widget) {
    this[_injectedChild] = null;
    this[_wrappedChild] = null;
    nested._NestedHookElement.__proto__.new.call(this, widget);
    ;
  }).prototype = nested._NestedHookElement.prototype;
  dart.addTypeTests(nested._NestedHookElement);
  dart.setGetterSignature(nested._NestedHookElement, () => ({
    __proto__: dart.getGetters(nested._NestedHookElement.__proto__),
    widget: nested._NestedHook,
    injectedChild: framework.Widget,
    wrappedChild: nested.SingleChildWidget
  }));
  dart.setSetterSignature(nested._NestedHookElement, () => ({
    __proto__: dart.getSetters(nested._NestedHookElement.__proto__),
    injectedChild: framework.Widget,
    wrappedChild: nested.SingleChildWidget
  }));
  dart.setLibraryUri(nested._NestedHookElement, "package:nested/nested.dart");
  dart.setFieldSignature(nested._NestedHookElement, () => ({
    __proto__: dart.getFields(nested._NestedHookElement.__proto__),
    [_injectedChild]: dart.fieldType(framework.Widget),
    [_wrappedChild]: dart.fieldType(nested.SingleChildWidget)
  }));
  nested.SingleChildWidget = class SingleChildWidget extends core.Object {};
  (nested.SingleChildWidget.new = function() {
    ;
  }).prototype = nested.SingleChildWidget.prototype;
  dart.addTypeTests(nested.SingleChildWidget);
  nested.SingleChildWidget[dart.implements] = () => [framework.Widget];
  dart.setLibraryUri(nested.SingleChildWidget, "package:nested/nested.dart");
  const _child$ = dart.privateName(nested, "SingleChildStatelessWidget._child");
  nested.SingleChildStatelessWidget = class SingleChildStatelessWidget extends framework.StatelessWidget {
    get [_child]() {
      return this[_child$];
    }
    set [_child](value) {
      super[_child] = value;
    }
    build(context) {
      return this.buildWithChild(context, this[_child]);
    }
    createElement() {
      return new nested.SingleChildStatelessElement.new(this);
    }
  };
  (nested.SingleChildStatelessWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_child$] = child;
    nested.SingleChildStatelessWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = nested.SingleChildStatelessWidget.prototype;
  dart.addTypeTests(nested.SingleChildStatelessWidget);
  nested.SingleChildStatelessWidget[dart.implements] = () => [nested.SingleChildWidget];
  dart.setMethodSignature(nested.SingleChildStatelessWidget, () => ({
    __proto__: dart.getMethods(nested.SingleChildStatelessWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    createElement: dart.fnType(nested.SingleChildStatelessElement, [])
  }));
  dart.setLibraryUri(nested.SingleChildStatelessWidget, "package:nested/nested.dart");
  dart.setFieldSignature(nested.SingleChildStatelessWidget, () => ({
    __proto__: dart.getFields(nested.SingleChildStatelessWidget.__proto__),
    [_child]: dart.finalFieldType(framework.Widget)
  }));
  const StatelessElement_SingleChildWidgetElementMixin$36$ = class StatelessElement_SingleChildWidgetElementMixin extends framework.StatelessElement {};
  (StatelessElement_SingleChildWidgetElementMixin$36$.new = function(widget) {
    nested.SingleChildWidgetElementMixin[dart.mixinNew].call(this);
    StatelessElement_SingleChildWidgetElementMixin$36$.__proto__.new.call(this, widget);
  }).prototype = StatelessElement_SingleChildWidgetElementMixin$36$.prototype;
  dart.applyMixin(StatelessElement_SingleChildWidgetElementMixin$36$, nested.SingleChildWidgetElementMixin);
  nested.SingleChildStatelessElement = class SingleChildStatelessElement extends StatelessElement_SingleChildWidgetElementMixin$36$ {
    build() {
      if (this[_parent] != null) {
        return this.widget.buildWithChild(this, this[_parent].injectedChild);
      }
      return super.build();
    }
    get widget() {
      return nested.SingleChildStatelessWidget.as(super.widget);
    }
  };
  (nested.SingleChildStatelessElement.new = function(widget) {
    nested.SingleChildStatelessElement.__proto__.new.call(this, widget);
    ;
  }).prototype = nested.SingleChildStatelessElement.prototype;
  dart.addTypeTests(nested.SingleChildStatelessElement);
  dart.setGetterSignature(nested.SingleChildStatelessElement, () => ({
    __proto__: dart.getGetters(nested.SingleChildStatelessElement.__proto__),
    widget: nested.SingleChildStatelessWidget
  }));
  dart.setLibraryUri(nested.SingleChildStatelessElement, "package:nested/nested.dart");
  const _child$0 = dart.privateName(nested, "SingleChildStatefulWidget._child");
  nested.SingleChildStatefulWidget = class SingleChildStatefulWidget extends framework.StatefulWidget {
    get [_child]() {
      return this[_child$0];
    }
    set [_child](value) {
      super[_child] = value;
    }
    createElement() {
      return new nested.SingleChildStatefulElement.new(this);
    }
  };
  (nested.SingleChildStatefulWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_child$0] = child;
    nested.SingleChildStatefulWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = nested.SingleChildStatefulWidget.prototype;
  dart.addTypeTests(nested.SingleChildStatefulWidget);
  nested.SingleChildStatefulWidget[dart.implements] = () => [nested.SingleChildWidget];
  dart.setMethodSignature(nested.SingleChildStatefulWidget, () => ({
    __proto__: dart.getMethods(nested.SingleChildStatefulWidget.__proto__),
    createElement: dart.fnType(nested.SingleChildStatefulElement, [])
  }));
  dart.setLibraryUri(nested.SingleChildStatefulWidget, "package:nested/nested.dart");
  dart.setFieldSignature(nested.SingleChildStatefulWidget, () => ({
    __proto__: dart.getFields(nested.SingleChildStatefulWidget.__proto__),
    [_child]: dart.finalFieldType(framework.Widget)
  }));
  const _is_SingleChildState_default = Symbol('_is_SingleChildState_default');
  nested.SingleChildState$ = dart.generic(T => {
    class SingleChildState extends framework.State$(T) {
      build(context) {
        return this.buildWithChild(context, this.widget[_child]);
      }
    }
    (SingleChildState.new = function() {
      SingleChildState.__proto__.new.call(this);
      ;
    }).prototype = SingleChildState.prototype;
    dart.addTypeTests(SingleChildState);
    SingleChildState.prototype[_is_SingleChildState_default] = true;
    dart.setMethodSignature(SingleChildState, () => ({
      __proto__: dart.getMethods(SingleChildState.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(SingleChildState, "package:nested/nested.dart");
    return SingleChildState;
  });
  nested.SingleChildState = nested.SingleChildState$();
  dart.addTypeTests(nested.SingleChildState, _is_SingleChildState_default);
  const StatefulElement_SingleChildWidgetElementMixin$36 = class StatefulElement_SingleChildWidgetElementMixin extends framework.StatefulElement {};
  (StatefulElement_SingleChildWidgetElementMixin$36.new = function(widget) {
    nested.SingleChildWidgetElementMixin[dart.mixinNew].call(this);
    StatefulElement_SingleChildWidgetElementMixin$36.__proto__.new.call(this, widget);
  }).prototype = StatefulElement_SingleChildWidgetElementMixin$36.prototype;
  dart.applyMixin(StatefulElement_SingleChildWidgetElementMixin$36, nested.SingleChildWidgetElementMixin);
  nested.SingleChildStatefulElement = class SingleChildStatefulElement extends StatefulElement_SingleChildWidgetElementMixin$36 {
    get widget() {
      return nested.SingleChildStatefulWidget.as(super.widget);
    }
    get state() {
      return SingleChildStateOfSingleChildStatefulWidget().as(super.state);
    }
    build() {
      if (this[_parent] != null) {
        return this.state.buildWithChild(this, this[_parent].injectedChild);
      }
      return super.build();
    }
  };
  (nested.SingleChildStatefulElement.new = function(widget) {
    nested.SingleChildStatefulElement.__proto__.new.call(this, widget);
    ;
  }).prototype = nested.SingleChildStatefulElement.prototype;
  dart.addTypeTests(nested.SingleChildStatefulElement);
  dart.setGetterSignature(nested.SingleChildStatefulElement, () => ({
    __proto__: dart.getGetters(nested.SingleChildStatefulElement.__proto__),
    widget: nested.SingleChildStatefulWidget,
    state: nested.SingleChildState$(nested.SingleChildStatefulWidget)
  }));
  dart.setLibraryUri(nested.SingleChildStatefulElement, "package:nested/nested.dart");
  const builder$ = dart.privateName(nested, "SingleChildBuilder.builder");
  nested.SingleChildBuilder = class SingleChildBuilder extends nested.SingleChildStatelessWidget {
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    buildWithChild(context, child) {
      return this.builder(context, child);
    }
  };
  (nested.SingleChildBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[builder$] = builder;
    if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/nested/nested.dart", 352, 16, "builder != null");
    nested.SingleChildBuilder.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = nested.SingleChildBuilder.prototype;
  dart.addTypeTests(nested.SingleChildBuilder);
  dart.setMethodSignature(nested.SingleChildBuilder, () => ({
    __proto__: dart.getMethods(nested.SingleChildBuilder.__proto__),
    buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])
  }));
  dart.setLibraryUri(nested.SingleChildBuilder, "package:nested/nested.dart");
  dart.setFieldSignature(nested.SingleChildBuilder, () => ({
    __proto__: dart.getFields(nested.SingleChildBuilder.__proto__),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget]))
  }));
  nested.SingleChildStatelessWidgetMixin = class SingleChildStatelessWidgetMixin extends core.Object {};
  nested.SingleChildStatelessWidgetMixin[dart.mixinOn] = Object => class SingleChildStatelessWidgetMixin extends Object {
    get [_child]() {
      return this.child;
    }
    createElement() {
      return new nested.SingleChildStatelessElement.new(this);
    }
    build(context) {
      return this.buildWithChild(context, this.child);
    }
  };
  (nested.SingleChildStatelessWidgetMixin[dart.mixinNew] = function() {
  }).prototype = nested.SingleChildStatelessWidgetMixin.prototype;
  dart.addTypeTests(nested.SingleChildStatelessWidgetMixin);
  nested.SingleChildStatelessWidgetMixin[dart.implements] = () => [framework.StatelessWidget, nested.SingleChildStatelessWidget, core.Object];
  dart.setMethodSignature(nested.SingleChildStatelessWidgetMixin, () => ({
    __proto__: dart.getMethods(nested.SingleChildStatelessWidgetMixin.__proto__),
    createElement: dart.fnType(nested.SingleChildStatelessElement, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(nested.SingleChildStatelessWidgetMixin, () => ({
    __proto__: dart.getGetters(nested.SingleChildStatelessWidgetMixin.__proto__),
    [_child]: framework.Widget
  }));
  dart.setLibraryUri(nested.SingleChildStatelessWidgetMixin, "package:nested/nested.dart");
  nested.SingleChildStatefulWidgetMixin = class SingleChildStatefulWidgetMixin extends framework.StatefulWidget {};
  nested.SingleChildStatefulWidgetMixin[dart.mixinOn] = StatefulWidget => class SingleChildStatefulWidgetMixin extends StatefulWidget {
    createElement() {
      return new nested._SingleChildStatefulMixinElement.new(this);
    }
  };
  dart.addTypeTests(nested.SingleChildStatefulWidgetMixin);
  nested.SingleChildStatefulWidgetMixin[dart.implements] = () => [nested.SingleChildWidget, framework.StatefulWidget];
  dart.setMethodSignature(nested.SingleChildStatefulWidgetMixin, () => ({
    __proto__: dart.getMethods(nested.SingleChildStatefulWidgetMixin.__proto__),
    createElement: dart.fnType(nested._SingleChildStatefulMixinElement, [])
  }));
  dart.setLibraryUri(nested.SingleChildStatefulWidgetMixin, "package:nested/nested.dart");
  const _is_SingleChildStateMixin_default = Symbol('_is_SingleChildStateMixin_default');
  nested.SingleChildStateMixin$ = dart.generic(T => {
    class SingleChildStateMixin extends framework.State$(T) {}
    SingleChildStateMixin[dart.mixinOn] = State => class SingleChildStateMixin extends State {
      build(context) {
        return this.buildWithChild(context, nested.SingleChildStatefulWidgetMixin.as(this.widget).child);
      }
    };
    dart.addTypeTests(SingleChildStateMixin);
    SingleChildStateMixin.prototype[_is_SingleChildStateMixin_default] = true;
    SingleChildStateMixin[dart.implements] = () => [framework.State$(T)];
    dart.setMethodSignature(SingleChildStateMixin, () => ({
      __proto__: dart.getMethods(SingleChildStateMixin.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(SingleChildStateMixin, "package:nested/nested.dart");
    return SingleChildStateMixin;
  });
  nested.SingleChildStateMixin = nested.SingleChildStateMixin$();
  dart.addTypeTests(nested.SingleChildStateMixin, _is_SingleChildStateMixin_default);
  const StatefulElement_SingleChildWidgetElementMixin$36$ = class StatefulElement_SingleChildWidgetElementMixin extends framework.StatefulElement {};
  (StatefulElement_SingleChildWidgetElementMixin$36$.new = function(widget) {
    nested.SingleChildWidgetElementMixin[dart.mixinNew].call(this);
    StatefulElement_SingleChildWidgetElementMixin$36$.__proto__.new.call(this, widget);
  }).prototype = StatefulElement_SingleChildWidgetElementMixin$36$.prototype;
  dart.applyMixin(StatefulElement_SingleChildWidgetElementMixin$36$, nested.SingleChildWidgetElementMixin);
  nested._SingleChildStatefulMixinElement = class _SingleChildStatefulMixinElement extends StatefulElement_SingleChildWidgetElementMixin$36$ {
    get widget() {
      return nested.SingleChildStatefulWidgetMixin.as(super.widget);
    }
    get state() {
      return SingleChildStateMixinOfStatefulWidget().as(super.state);
    }
    build() {
      if (this[_parent] != null) {
        return this.state.buildWithChild(this, this[_parent].injectedChild);
      }
      return super.build();
    }
  };
  (nested._SingleChildStatefulMixinElement.new = function(widget) {
    nested._SingleChildStatefulMixinElement.__proto__.new.call(this, widget);
    ;
  }).prototype = nested._SingleChildStatefulMixinElement.prototype;
  dart.addTypeTests(nested._SingleChildStatefulMixinElement);
  dart.setGetterSignature(nested._SingleChildStatefulMixinElement, () => ({
    __proto__: dart.getGetters(nested._SingleChildStatefulMixinElement.__proto__),
    widget: nested.SingleChildStatefulWidgetMixin,
    state: nested.SingleChildStateMixin$(framework.StatefulWidget)
  }));
  dart.setLibraryUri(nested._SingleChildStatefulMixinElement, "package:nested/nested.dart");
  nested.SingleChildInheritedElementMixin = class SingleChildInheritedElementMixin extends core.Object {};
  nested.SingleChildInheritedElementMixin[dart.mixinOn] = _SingleChildInheritedElementMixin$36InheritedElement$36SingleChildWidgetElementMixin => class SingleChildInheritedElementMixin extends _SingleChildInheritedElementMixin$36InheritedElement$36SingleChildWidgetElementMixin {
    build() {
      if (this[_parent] != null) {
        return this[_parent].injectedChild;
      }
      return super.build();
    }
  };
  dart.addTypeTests(nested.SingleChildInheritedElementMixin);
  nested.SingleChildInheritedElementMixin[dart.implements] = () => [nested.SingleChildWidgetElementMixin, framework.InheritedElement];
  dart.setMethodSignature(nested.SingleChildInheritedElementMixin, () => ({
    __proto__: dart.getMethods(nested.SingleChildInheritedElementMixin.__proto__),
    build: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(nested.SingleChildInheritedElementMixin, "package:nested/nested.dart");
  dart.trackLibraries("packages/nested/nested", {
    "package:nested/nested.dart": nested
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["nested.dart"],"names":[],"mappings":"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","file":"nested.ddc.js"}');
  // Exports:
  return {
    nested: nested
  };
});

//# sourceMappingURL=nested.ddc.js.map
