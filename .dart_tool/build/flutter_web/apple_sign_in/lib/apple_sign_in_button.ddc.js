define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__gestures__arena, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const colors = packages__flutter__material.src__material__colors;
  const tap = packages__flutter__src__gestures__arena.src__gestures__tap;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const apple_sign_in_button = Object.create(dart.library);
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let TapDownDetailsTovoid = () => (TapDownDetailsTovoid = dart.constFn(dart.fnType(dart.void, [tap.TapDownDetails])))();
  let TapUpDetailsToNull = () => (TapUpDetailsToNull = dart.constFn(dart.fnType(core.Null, [tap.TapUpDetails])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: apple_sign_in_button.ButtonType.prototype,
        [_name$]: "ButtonType.defaultButton",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: apple_sign_in_button.ButtonType.prototype,
        [_name$]: "ButtonType.continueButton",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: apple_sign_in_button.ButtonType.prototype,
        [_name$]: "ButtonType.signIn",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], apple_sign_in_button.ButtonType);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: apple_sign_in_button.ButtonStyle.prototype,
        [_name$]: "ButtonStyle.black",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: apple_sign_in_button.ButtonStyle.prototype,
        [_name$]: "ButtonStyle.whiteOutline",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: apple_sign_in_button.ButtonStyle.prototype,
        [_name$]: "ButtonStyle.white",
        index: 2
      });
    },
    get C7() {
      return C7 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], apple_sign_in_button.ButtonStyle);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 1,
        [EdgeInsets_right]: 6,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 2
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 21,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "aspectRatio",
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapDown",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapUp",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapCancel",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart"
      });
    }
  });
  const _name$ = dart.privateName(apple_sign_in_button, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  apple_sign_in_button.ButtonType = class ButtonType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (apple_sign_in_button.ButtonType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = apple_sign_in_button.ButtonType.prototype;
  dart.addTypeTests(apple_sign_in_button.ButtonType);
  dart.setLibraryUri(apple_sign_in_button.ButtonType, "package:apple_sign_in/apple_sign_in_button.dart");
  dart.setFieldSignature(apple_sign_in_button.ButtonType, () => ({
    __proto__: dart.getFields(apple_sign_in_button.ButtonType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(apple_sign_in_button.ButtonType, ['toString']);
  apple_sign_in_button.ButtonType.defaultButton = C0 || CT.C0;
  apple_sign_in_button.ButtonType.continueButton = C1 || CT.C1;
  apple_sign_in_button.ButtonType.signIn = C2 || CT.C2;
  apple_sign_in_button.ButtonType.values = C3 || CT.C3;
  let C4;
  let C5;
  let C6;
  let C7;
  apple_sign_in_button.ButtonStyle = class ButtonStyle extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (apple_sign_in_button.ButtonStyle.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = apple_sign_in_button.ButtonStyle.prototype;
  dart.addTypeTests(apple_sign_in_button.ButtonStyle);
  dart.setLibraryUri(apple_sign_in_button.ButtonStyle, "package:apple_sign_in/apple_sign_in_button.dart");
  dart.setFieldSignature(apple_sign_in_button.ButtonStyle, () => ({
    __proto__: dart.getFields(apple_sign_in_button.ButtonStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(apple_sign_in_button.ButtonStyle, ['toString']);
  apple_sign_in_button.ButtonStyle.black = C4 || CT.C4;
  apple_sign_in_button.ButtonStyle.whiteOutline = C5 || CT.C5;
  apple_sign_in_button.ButtonStyle.white = C6 || CT.C6;
  apple_sign_in_button.ButtonStyle.values = C7 || CT.C7;
  const onPressed$ = dart.privateName(apple_sign_in_button, "AppleSignInButton.onPressed");
  const type$ = dart.privateName(apple_sign_in_button, "AppleSignInButton.type");
  const style$ = dart.privateName(apple_sign_in_button, "AppleSignInButton.style");
  const cornerRadius$ = dart.privateName(apple_sign_in_button, "AppleSignInButton.cornerRadius");
  apple_sign_in_button.AppleSignInButton = class AppleSignInButton extends framework.StatefulWidget {
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get cornerRadius() {
      return this[cornerRadius$];
    }
    set cornerRadius(value) {
      super.cornerRadius = value;
    }
    createState() {
      return new apple_sign_in_button._AppleSignInButtonState.new();
    }
  };
  (apple_sign_in_button.AppleSignInButton.new = function(opts) {
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let type = opts && 'type' in opts ? opts.type : C0 || CT.C0;
    let style = opts && 'style' in opts ? opts.style : C6 || CT.C6;
    let cornerRadius = opts && 'cornerRadius' in opts ? opts.cornerRadius : 6;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$] = onPressed;
    this[type$] = type;
    this[style$] = style;
    this[cornerRadius$] = cornerRadius;
    if (!(type != null)) dart.assertFailed(null, "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart", 30, 16, "type != null");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart", 31, 16, "style != null");
    if (!(cornerRadius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/apple_sign_in/apple_sign_in_button.dart", 32, 16, "cornerRadius != null");
    apple_sign_in_button.AppleSignInButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = apple_sign_in_button.AppleSignInButton.prototype;
  dart.addTypeTests(apple_sign_in_button.AppleSignInButton);
  dart.setMethodSignature(apple_sign_in_button.AppleSignInButton, () => ({
    __proto__: dart.getMethods(apple_sign_in_button.AppleSignInButton.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(apple_sign_in_button.AppleSignInButton, "package:apple_sign_in/apple_sign_in_button.dart");
  dart.setFieldSignature(apple_sign_in_button.AppleSignInButton, () => ({
    __proto__: dart.getFields(apple_sign_in_button.AppleSignInButton.__proto__),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    type: dart.finalFieldType(apple_sign_in_button.ButtonType),
    style: dart.finalFieldType(apple_sign_in_button.ButtonStyle),
    cornerRadius: dart.finalFieldType(core.double)
  }));
  const _isTapDown = dart.privateName(apple_sign_in_button, "_isTapDown");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C8;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C11;
  let C10;
  let C9;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C23;
  let C21;
  let C20;
  let C26;
  let C27;
  let C25;
  let C24;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C36;
  let C35;
  let C44;
  let C45;
  let C46;
  let C47;
  let C43;
  let C42;
  apple_sign_in_button._AppleSignInButtonState = class _AppleSignInButtonState extends framework.State$(apple_sign_in_button.AppleSignInButton) {
    build(context) {
      let bgColor = dart.equals(this.widget.style, apple_sign_in_button.ButtonStyle.black) ? colors.Colors.black : colors.Colors.white;
      let textColor = dart.equals(this.widget.style, apple_sign_in_button.ButtonStyle.black) ? colors.Colors.white : colors.Colors.black;
      let borderColor = dart.equals(this.widget.style, apple_sign_in_button.ButtonStyle.white) ? colors.Colors.white : colors.Colors.black;
      return new gesture_detector.GestureDetector.new({onTapDown: dart.fn(_ => this.setState(dart.fn(() => this[_isTapDown] = true, VoidTobool())), TapDownDetailsTovoid()), onTapUp: dart.fn(_ => {
          let t0;
          this.setState(dart.fn(() => this[_isTapDown] = false, VoidTobool()));
          t0 = this.widget;
          t0 == null ? null : t0.onPressed();
        }, TapUpDetailsToNull()), onTapCancel: dart.fn(() => this.setState(dart.fn(() => this[_isTapDown] = false, VoidTobool())), VoidTovoid()), child: new implicit_animations.AnimatedContainer.new({duration: new core.Duration.new({milliseconds: 100}), constraints: new box.BoxConstraints.new({minHeight: 32.0, maxHeight: 64.0, minWidth: 200.0}), height: 50.0, decoration: new box_decoration.BoxDecoration.new({color: dart.test(this[_isTapDown]) ? colors.Colors.grey : bgColor, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(this.widget.cornerRadius)), border: box_border.Border.all({width: 0.7, color: borderColor})}), child: new basic.Center.new({child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C8 || CT.C8, child: new basic.SizedBox.new({height: 14.0, child: new basic.AspectRatio.new({aspectRatio: 25 / 31, child: new basic.CustomPaint.new({painter: new apple_sign_in_button._AppleLogoPainter.new({color: textColor}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new text.Text.new(dart.equals(this.widget.type, apple_sign_in_button.ButtonType.continueButton) ? "Continue with Apple" : "Sign in with Apple", {style: new text_style.TextStyle.new({fontSize: 20.0, fontWeight: ui.FontWeight.w500, letterSpacing: 0.3, wordSpacing: -0.5, color: textColor}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24})]), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
    }
  };
  (apple_sign_in_button._AppleSignInButtonState.new = function() {
    this[_isTapDown] = false;
    apple_sign_in_button._AppleSignInButtonState.__proto__.new.call(this);
    ;
  }).prototype = apple_sign_in_button._AppleSignInButtonState.prototype;
  dart.addTypeTests(apple_sign_in_button._AppleSignInButtonState);
  dart.setMethodSignature(apple_sign_in_button._AppleSignInButtonState, () => ({
    __proto__: dart.getMethods(apple_sign_in_button._AppleSignInButtonState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(apple_sign_in_button._AppleSignInButtonState, "package:apple_sign_in/apple_sign_in_button.dart");
  dart.setFieldSignature(apple_sign_in_button._AppleSignInButtonState, () => ({
    __proto__: dart.getFields(apple_sign_in_button._AppleSignInButtonState.__proto__),
    [_isTapDown]: dart.fieldType(core.bool)
  }));
  apple_sign_in_button._AppleLogoPainter = class _AppleLogoPainter extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let t0;
      let paint = (t0 = ui.Paint.new(), t0.color = this.color, t0);
      canvas.drawPath(apple_sign_in_button._AppleLogoPainter._getApplePath(size.width, size.height), paint);
    }
    static _getApplePath(w, h) {
      let t0;
      t0 = ui.Path.new();
      t0.moveTo(dart.notNull(w) * 0.50779, dart.notNull(h) * 0.28732);
      t0.cubicTo(dart.notNull(w) * 0.4593, dart.notNull(h) * 0.28732, dart.notNull(w) * 0.38424, dart.notNull(h) * 0.24241, dart.notNull(w) * 0.30519, dart.notNull(h) * 0.24404);
      t0.cubicTo(dart.notNull(w) * 0.2009, dart.notNull(h) * 0.24512, dart.notNull(w) * 0.10525, dart.notNull(h) * 0.29328, dart.notNull(w) * 0.05145, dart.notNull(h) * 0.36957);
      t0.cubicTo(dart.notNull(w) * -0.05683, dart.notNull(h) * 0.5227, dart.notNull(w) * 0.02355, dart.notNull(h) * 0.74888, dart.notNull(w) * 0.12916, dart.notNull(h) * 0.87333);
      t0.cubicTo(dart.notNull(w) * 0.18097, dart.notNull(h) * 0.93394, dart.notNull(w) * 0.24209, dart.notNull(h) * 1.00211, dart.notNull(w) * 0.32313, dart.notNull(h) * 0.99995);
      t0.cubicTo(dart.notNull(w) * 0.40084, dart.notNull(h) * 0.99724, dart.notNull(w) * 0.43007, dart.notNull(h) * 0.95883, dart.notNull(w) * 0.52439, dart.notNull(h) * 0.95883);
      t0.cubicTo(dart.notNull(w) * 0.61805, dart.notNull(h) * 0.95883, dart.notNull(w) * 0.64462, dart.notNull(h) * 0.99995, dart.notNull(w) * 0.72699, dart.notNull(h) * 0.99833);
      t0.cubicTo(dart.notNull(w) * 0.81069, dart.notNull(h) * 0.99724, dart.notNull(w) * 0.86383, dart.notNull(h) * 0.93664, dart.notNull(w) * 0.91498, dart.notNull(h) * 0.8755);
      t0.cubicTo(dart.notNull(w) * 0.97409, dart.notNull(h) * 0.80515, dart.notNull(w) * 0.99867, dart.notNull(h) * 0.73698, dart.notNull(w) * 1, dart.notNull(h) * 0.73319);
      t0.cubicTo(dart.notNull(w) * 0.99801, dart.notNull(h) * 0.73265, dart.notNull(w) * 0.83726, dart.notNull(h) * 0.68233, dart.notNull(w) * 0.83526, dart.notNull(h) * 0.53082);
      t0.cubicTo(dart.notNull(w) * 0.83394, dart.notNull(h) * 0.4042, dart.notNull(w) * 0.96214, dart.notNull(h) * 0.3436, dart.notNull(w) * 0.96812, dart.notNull(h) * 0.34089);
      t0.cubicTo(dart.notNull(w) * 0.89505, dart.notNull(h) * 0.25378, dart.notNull(w) * 0.78279, dart.notNull(h) * 0.24404, dart.notNull(w) * 0.7436, dart.notNull(h) * 0.24187);
      t0.cubicTo(dart.notNull(w) * 0.6413, dart.notNull(h) * 0.23538, dart.notNull(w) * 0.55561, dart.notNull(h) * 0.28732, dart.notNull(w) * 0.50779, dart.notNull(h) * 0.28732);
      t0.close();
      t0.moveTo(dart.notNull(w) * 0.68049, dart.notNull(h) * 0.15962);
      t0.cubicTo(dart.notNull(w) * 0.72367, dart.notNull(h) * 0.11742, dart.notNull(w) * 0.75223, dart.notNull(h) * 0.05844, dart.notNull(w) * 0.74426, 0.0);
      t0.cubicTo(dart.notNull(w) * 0.68249, dart.notNull(h) * 0.00216, dart.notNull(w) * 0.60809, dart.notNull(h) * 0.03355, dart.notNull(w) * 0.56359, dart.notNull(h) * 0.07575);
      t0.cubicTo(dart.notNull(w) * 0.52373, dart.notNull(h) * 0.11309, dart.notNull(w) * 0.48919, dart.notNull(h) * 0.17315, dart.notNull(w) * 0.49849, dart.notNull(h) * 0.23051);
      t0.cubicTo(dart.notNull(w) * 0.56691, dart.notNull(h) * 0.23484, dart.notNull(w) * 0.63732, dart.notNull(h) * 0.20183, dart.notNull(w) * 0.68049, dart.notNull(h) * 0.15962);
      t0.close();
      return t0;
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return false;
    }
  };
  (apple_sign_in_button._AppleLogoPainter.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    this.color = color;
    apple_sign_in_button._AppleLogoPainter.__proto__.new.call(this);
    ;
  }).prototype = apple_sign_in_button._AppleLogoPainter.prototype;
  dart.addTypeTests(apple_sign_in_button._AppleLogoPainter);
  dart.setMethodSignature(apple_sign_in_button._AppleLogoPainter, () => ({
    __proto__: dart.getMethods(apple_sign_in_button._AppleLogoPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(apple_sign_in_button._AppleLogoPainter, "package:apple_sign_in/apple_sign_in_button.dart");
  dart.setFieldSignature(apple_sign_in_button._AppleLogoPainter, () => ({
    __proto__: dart.getFields(apple_sign_in_button._AppleLogoPainter.__proto__),
    color: dart.finalFieldType(ui.Color)
  }));
  dart.trackLibraries("packages/apple_sign_in/apple_sign_in_button", {
    "package:apple_sign_in/apple_sign_in_button.dart": apple_sign_in_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["apple_sign_in_button.dart"],"names":[],"mappings":"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","file":"apple_sign_in_button.ddc.js"}');
  // Exports:
  return {
    apple_sign_in_button: apple_sign_in_button
  };
});

//# sourceMappingURL=apple_sign_in_button.ddc.js.map
