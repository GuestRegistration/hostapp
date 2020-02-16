define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/vector_math/vector_math_64', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__vector_math__vector_math_64, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const fractional_offset = packages__flutter__src__painting___network_image_web.src__painting__fractional_offset;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const icons = packages__flutter__material.src__material__icons;
  const double_bounce = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const wave = Object.create(dart.library);
  const fading_circle = Object.create(dart.library);
  const flutter_spinkit = Object.create(dart.library);
  const wandering_cubes = Object.create(dart.library);
  const three_bounce = Object.create(dart.library);
  const square_circle = Object.create(dart.library);
  const spinning_circle = Object.create(dart.library);
  const rotating_plain = Object.create(dart.library);
  const rotating_circle = Object.create(dart.library);
  const ripple = Object.create(dart.library);
  const ring = Object.create(dart.library);
  const pumping_heart = Object.create(dart.library);
  const pulse = Object.create(dart.library);
  const pouring_hour_glass = Object.create(dart.library);
  const hour_glass = Object.create(dart.library);
  const folding_cube = Object.create(dart.library);
  const fading_grid = Object.create(dart.library);
  const fading_four = Object.create(dart.library);
  const fading_cube = Object.create(dart.library);
  const dual_ring = Object.create(dart.library);
  const cube_grid = Object.create(dart.library);
  const circle = Object.create(dart.library);
  const chasing_dots = Object.create(dart.library);
  const $abs = dartx.abs;
  const $length = dartx.length;
  const $_get = dartx._get;
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToAnimationController = () => (VoidToAnimationController = dart.constFn(dart.fnType(animation_controller.AnimationController, [])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let intToTransform = () => (intToTransform = dart.constFn(dart.fnType(basic.Transform, [core.int])))();
  let AnimationStatusToNull = () => (AnimationStatusToNull = dart.constFn(dart.fnType(core.Null, [animation.AnimationStatus])))();
  let intToScaleYWidget = () => (intToScaleYWidget = dart.constFn(dart.fnType(wave.ScaleYWidget, [core.int])))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let intToPositioned = () => (intToPositioned = dart.constFn(dart.fnType(basic.Positioned, [core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let intToScaleTransition = () => (intToScaleTransition = dart.constFn(dart.fnType(transitions.ScaleTransition, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2000000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 38,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 70,
        [_Location_line]: 55,
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
        [_Location_column]: 29,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/double_bounce.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 13,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/double_bounce.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 52,
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
        [_Location_column]: 14,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/double_bounce.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/double_bounce.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/double_bounce.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: wave.SpinKitWaveType.prototype,
        [_name$]: "SpinKitWaveType.start",
        index: 0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: wave.SpinKitWaveType.prototype,
        [_name$]: "SpinKitWaveType.end",
        index: 1
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: wave.SpinKitWaveType.prototype,
        [_name$]: "SpinKitWaveType.center",
        index: 2
      });
    },
    get C21() {
      return C21 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], wave.SpinKitWaveType);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1200000
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 40,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 84,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wave.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scaleY",
        [_Location_column]: 15,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wave.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wave.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wave.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wave.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wave.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 22,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 83,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 105,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wave.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 46,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 85,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_circle.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 21,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_circle.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_circle.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 17,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_circle.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 15,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 15,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_circle.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_circle.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_circle.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_circle.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_circle.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1800000
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C88 || CT.C88,
        [Interval_end]: 0.25,
        [Interval_begin]: 0
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C88 || CT.C88,
        [Interval_end]: 0.5,
        [Interval_begin]: 0.25
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C88 || CT.C88,
        [Interval_end]: 0.75,
        [Interval_begin]: 0.5
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C88 || CT.C88,
        [Interval_end]: 1,
        [Interval_begin]: 0.75
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 15,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 13,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121, C122 || CT.C122], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C124 || CT.C124,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1400000
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 40,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 78,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/three_bounce.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/three_bounce.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C74 || CT.C74], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/three_bounce.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/three_bounce.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/three_bounce.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/three_bounce.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/square_circle.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155, C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/square_circle.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/square_circle.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/square_circle.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name]: "BoxShape.circle",
        index: 1
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C166 || CT.C166,
        [Interval_end]: 1,
        [Interval_begin]: 0
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169, C170 || CT.C170], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/spinning_circle.dart"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173, C174 || CT.C174, C175 || CT.C175], widget_inspector._Location);
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C172 || CT.C172,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/spinning_circle.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/spinning_circle.dart"
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.constList([C181 || CT.C181], widget_inspector._Location);
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C180 || CT.C180,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/spinning_circle.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 1,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C183 || CT.C183,
        [Interval_end]: 0.5,
        [Interval_begin]: 0
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C166 || CT.C166,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/rotating_plain.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.constList([C191 || CT.C191, C192 || CT.C192, C193 || CT.C193], widget_inspector._Location);
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C190 || CT.C190,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/rotating_plain.dart"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/rotating_plain.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197], widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C196 || CT.C196,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/rotating_plain.dart"
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 34,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 66,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.constList([C200 || CT.C200, C201 || CT.C201], widget_inspector._Location);
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C199 || CT.C199,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/rotating_circle.dart"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C190 || CT.C190,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/rotating_circle.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/rotating_circle.dart"
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/rotating_circle.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C206 || CT.C206,
        [Interval_end]: 0.75,
        [Interval_begin]: 0
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C206 || CT.C206,
        [Interval_end]: 1,
        [Interval_begin]: 0.25
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 36,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 62,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210, C211 || CT.C211], widget_inspector._Location);
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ripple.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214, C215 || CT.C215], widget_inspector._Location);
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C213 || CT.C213,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ripple.dart"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 36,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 62,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.constList([C218 || CT.C218, C219 || CT.C219], widget_inspector._Location);
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C217 || CT.C217,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ripple.dart"
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.constList([C222 || CT.C222, C223 || CT.C223], widget_inspector._Location);
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C221 || CT.C221,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ripple.dart"
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.constList([C226 || CT.C226], widget_inspector._Location);
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ripple.dart"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ripple.dart"
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.constList([C230 || CT.C230], widget_inspector._Location);
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C229 || CT.C229,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ripple.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 7,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.constList([C233 || CT.C233, C234 || CT.C234], widget_inspector._Location);
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C232 || CT.C232,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ripple.dart"
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C206 || CT.C206,
        [Interval_end]: 1,
        [Interval_begin]: 0
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C206 || CT.C206,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: ring.SpinKitRingCurve.prototype
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C238 || CT.C238,
        [Interval_end]: 1,
        [Interval_begin]: 0
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "foregroundPainter",
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241], widget_inspector._Location);
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C240 || CT.C240,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ring.dart"
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C243() {
      return C243 = dart.constList([C244 || CT.C244, C245 || CT.C245], widget_inspector._Location);
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C243 || CT.C243,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ring.dart"
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.constList([C248 || CT.C248, C249 || CT.C249, C250 || CT.C250], widget_inspector._Location);
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C247 || CT.C247,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ring.dart"
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.constList([C253 || CT.C253], widget_inspector._Location);
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C252 || CT.C252,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/ring.dart"
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2400000
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: pumping_heart._PumpCurve.prototype
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C256 || CT.C256,
        [Interval_end]: 1,
        [Interval_begin]: 0
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 28,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 47,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.constList([C259 || CT.C259, C260 || CT.C260], widget_inspector._Location);
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C258 || CT.C258,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/pumping_heart.dart"
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 20,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 30,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 51,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C262() {
      return C262 = dart.constList([C263 || CT.C263, C264 || CT.C264, C265 || CT.C265], widget_inspector._Location);
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C262 || CT.C262,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/pumping_heart.dart"
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 13,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.constList([C269 || CT.C269, C8 || CT.C8], widget_inspector._Location);
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C268 || CT.C268,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/pulse.dart"
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.constList([C272 || CT.C272, C273 || CT.C273], widget_inspector._Location);
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C271 || CT.C271,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/pulse.dart"
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.constList([C276 || CT.C276, C277 || CT.C277], widget_inspector._Location);
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C275 || CT.C275,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/pulse.dart"
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.constList([C280 || CT.C280], widget_inspector._Location);
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C279 || CT.C279,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/pulse.dart"
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/pulse.dart"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C206 || CT.C206,
        [Interval_end]: 0.9,
        [Interval_begin]: 0
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C284 || CT.C284,
        [Interval_end]: 1,
        [Interval_begin]: 0.9
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C286() {
      return C286 = dart.constList([C287 || CT.C287], widget_inspector._Location);
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C286 || CT.C286,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/pouring_hour_glass.dart"
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C289() {
      return C289 = dart.constList([C290 || CT.C290, C291 || CT.C291], widget_inspector._Location);
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C289 || CT.C289,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/pouring_hour_glass.dart"
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "turns",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C293() {
      return C293 = dart.constList([C294 || CT.C294, C38 || CT.C38], widget_inspector._Location);
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C293 || CT.C293,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/pouring_hour_glass.dart"
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/pouring_hour_glass.dart"
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 36,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.constList([C298 || CT.C298], widget_inspector._Location);
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C297 || CT.C297,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/hour_glass.dart"
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C300() {
      return C300 = dart.constList([C273 || CT.C273, C301 || CT.C301], widget_inspector._Location);
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C300 || CT.C300,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/hour_glass.dart"
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.constList([C304 || CT.C304, C305 || CT.C305, C306 || CT.C306], widget_inspector._Location);
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C303 || CT.C303,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/hour_glass.dart"
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C279 || CT.C279,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/hour_glass.dart"
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C183 || CT.C183,
        [Interval_end]: 0.25,
        [Interval_begin]: 0
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C183 || CT.C183,
        [Interval_end]: 0.5,
        [Interval_begin]: 0.25
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C183 || CT.C183,
        [Interval_end]: 0.75,
        [Interval_begin]: 0.5
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C183 || CT.C183,
        [Interval_end]: 1,
        [Interval_begin]: 0.75
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C313() {
      return C313 = dart.constList([C314 || CT.C314], widget_inspector._Location);
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C313 || CT.C313,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.constList([C317 || CT.C317, C223 || CT.C223], widget_inspector._Location);
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C316 || CT.C316,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C319() {
      return C319 = dart.constList([C245 || CT.C245], widget_inspector._Location);
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C319 || CT.C319,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C321() {
      return C321 = dart.constList([C322 || CT.C322, C157 || CT.C157], widget_inspector._Location);
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C321 || CT.C321,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.constList([C325 || CT.C325], widget_inspector._Location);
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C324 || CT.C324,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C327() {
      return C327 = dart.constList([C328 || CT.C328, C329 || CT.C329], widget_inspector._Location);
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C327 || CT.C327,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 15,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.constList([C332 || CT.C332, C333 || CT.C333], widget_inspector._Location);
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C331 || CT.C331,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C335() {
      return C335 = dart.constList([C336 || CT.C336, C337 || CT.C337, C338 || CT.C338], widget_inspector._Location);
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C335 || CT.C335,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.constList([C341 || CT.C341, C342 || CT.C342], widget_inspector._Location);
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C340 || CT.C340,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.constList([C345 || CT.C345, C346 || CT.C346], widget_inspector._Location);
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C344 || CT.C344,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C348() {
      return C348 = dart.constList([C349 || CT.C349, C350 || CT.C350, C351 || CT.C351], widget_inspector._Location);
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C348 || CT.C348,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C353() {
      return C353 = dart.constList([C354 || CT.C354], widget_inspector._Location);
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C353 || CT.C353,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart"
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C356() {
      return C356 = dart.constList([C357 || CT.C357], widget_inspector._Location);
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C356 || CT.C356,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C359() {
      return C359 = dart.constList([C360 || CT.C360], widget_inspector._Location);
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C359 || CT.C359,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C362() {
      return C362 = dart.constList([C363 || CT.C363, C364 || CT.C364, C365 || CT.C365], widget_inspector._Location);
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C362 || CT.C362,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 49,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.constList([C368 || CT.C368, C369 || CT.C369], widget_inspector._Location);
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C367 || CT.C367,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C371() {
      return C371 = dart.constList([C372 || CT.C372, C373 || CT.C373, C374 || CT.C374], widget_inspector._Location);
    },
    get C370() {
      return C370 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C371 || CT.C371,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C376() {
      return C376 = dart.constList([C377 || CT.C377], widget_inspector._Location);
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C376 || CT.C376,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C379() {
      return C379 = dart.constList([C380 || CT.C380], widget_inspector._Location);
    },
    get C378() {
      return C378 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C379 || CT.C379,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C382() {
      return C382 = dart.constList([C383 || CT.C383, C384 || CT.C384, C385 || CT.C385], widget_inspector._Location);
    },
    get C381() {
      return C381 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C382 || CT.C382,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C389() {
      return C389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 49,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C387() {
      return C387 = dart.constList([C388 || CT.C388, C389 || CT.C389], widget_inspector._Location);
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C387 || CT.C387,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C391() {
      return C391 = dart.constList([C392 || CT.C392, C393 || CT.C393, C394 || CT.C394], widget_inspector._Location);
    },
    get C390() {
      return C390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C391 || CT.C391,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C396() {
      return C396 = dart.constList([C397 || CT.C397], widget_inspector._Location);
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C396 || CT.C396,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C400() {
      return C400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C399() {
      return C399 = dart.constList([C400 || CT.C400], widget_inspector._Location);
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C399 || CT.C399,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C402() {
      return C402 = dart.constList([C403 || CT.C403, C404 || CT.C404, C405 || CT.C405], widget_inspector._Location);
    },
    get C401() {
      return C401 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C402 || CT.C402,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C407() {
      return C407 = dart.constList([C408 || CT.C408, C409 || CT.C409, C410 || CT.C410], widget_inspector._Location);
    },
    get C406() {
      return C406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C407 || CT.C407,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C413() {
      return C413 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C414() {
      return C414 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C412() {
      return C412 = dart.constList([C413 || CT.C413, C414 || CT.C414], widget_inspector._Location);
    },
    get C411() {
      return C411 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C412 || CT.C412,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C417() {
      return C417 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C416() {
      return C416 = dart.constList([C417 || CT.C417, C418 || CT.C418], widget_inspector._Location);
    },
    get C415() {
      return C415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C416 || CT.C416,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C421() {
      return C421 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C422() {
      return C422 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C420() {
      return C420 = dart.constList([C421 || CT.C421, C422 || CT.C422], widget_inspector._Location);
    },
    get C419() {
      return C419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C420 || CT.C420,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C425() {
      return C425 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C424() {
      return C424 = dart.constList([C425 || CT.C425], widget_inspector._Location);
    },
    get C423() {
      return C423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C424 || CT.C424,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart"
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 46,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 85,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C427() {
      return C427 = dart.constList([C428 || CT.C428, C429 || CT.C429], widget_inspector._Location);
    },
    get C426() {
      return C426 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C427 || CT.C427,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart"
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 21,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C431() {
      return C431 = dart.constList([C432 || CT.C432, C433 || CT.C433], widget_inspector._Location);
    },
    get C430() {
      return C430 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C431 || CT.C431,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart"
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 19,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C435() {
      return C435 = dart.constList([C436 || CT.C436, C437 || CT.C437], widget_inspector._Location);
    },
    get C434() {
      return C434 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C435 || CT.C435,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart"
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 17,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C439() {
      return C439 = dart.constList([C440 || CT.C440, C441 || CT.C441], widget_inspector._Location);
    },
    get C438() {
      return C438 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C439 || CT.C439,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart"
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 15,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 15,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C443() {
      return C443 = dart.constList([C444 || CT.C444, C445 || CT.C445, C446 || CT.C446], widget_inspector._Location);
    },
    get C442() {
      return C442 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C443 || CT.C443,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart"
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C448() {
      return C448 = dart.constList([C449 || CT.C449], widget_inspector._Location);
    },
    get C447() {
      return C447 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C448 || CT.C448,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart"
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C451() {
      return C451 = dart.constList([C452 || CT.C452, C306 || CT.C306], widget_inspector._Location);
    },
    get C450() {
      return C450 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C451 || CT.C451,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart"
      });
    },
    get C454() {
      return C454 = dart.constList([C414 || CT.C414], widget_inspector._Location);
    },
    get C453() {
      return C453 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C454 || CT.C454,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart"
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C456() {
      return C456 = dart.constList([C457 || CT.C457], widget_inspector._Location);
    },
    get C455() {
      return C455 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C456 || CT.C456,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart"
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 52,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 78,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C459() {
      return C459 = dart.constList([C460 || CT.C460, C461 || CT.C461], widget_inspector._Location);
    },
    get C458() {
      return C458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C459 || CT.C459,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 27,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C463() {
      return C463 = dart.constList([C464 || CT.C464, C465 || CT.C465], widget_inspector._Location);
    },
    get C462() {
      return C462 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C463 || CT.C463,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 25,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C467() {
      return C467 = dart.constList([C468 || CT.C468, C469 || CT.C469], widget_inspector._Location);
    },
    get C466() {
      return C466 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C467 || CT.C467,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 23,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C471() {
      return C471 = dart.constList([C472 || CT.C472, C473 || CT.C473], widget_inspector._Location);
    },
    get C470() {
      return C470 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C471 || CT.C471,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C476() {
      return C476 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 21,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C477() {
      return C477 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "origin",
        [_Location_column]: 21,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C475() {
      return C475 = dart.constList([C476 || CT.C476, C477 || CT.C477, C478 || CT.C478], widget_inspector._Location);
    },
    get C474() {
      return C474 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C475 || CT.C475,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 19,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 19,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C483() {
      return C483 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C480() {
      return C480 = dart.constList([C481 || CT.C481, C482 || CT.C482, C483 || CT.C483], widget_inspector._Location);
    },
    get C479() {
      return C479 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C480 || CT.C480,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C485() {
      return C485 = dart.constList([C486 || CT.C486], widget_inspector._Location);
    },
    get C484() {
      return C484 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C485 || CT.C485,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C489() {
      return C489 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 13,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C488() {
      return C488 = dart.constList([C489 || CT.C489, C490 || CT.C490], widget_inspector._Location);
    },
    get C487() {
      return C487 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C488 || CT.C488,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C492() {
      return C492 = dart.constList([C493 || CT.C493], widget_inspector._Location);
    },
    get C491() {
      return C491 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C492 || CT.C492,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C494() {
      return C494 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C497() {
      return C497 = dart.constList([C498 || CT.C498], widget_inspector._Location);
    },
    get C496() {
      return C496 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C497 || CT.C497,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart"
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 36,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C500() {
      return C500 = dart.constList([C501 || CT.C501], widget_inspector._Location);
    },
    get C499() {
      return C499 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C500 || CT.C500,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/dual_ring.dart"
      });
    },
    get C504() {
      return C504 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C503() {
      return C503 = dart.constList([C504 || CT.C504, C505 || CT.C505], widget_inspector._Location);
    },
    get C502() {
      return C502 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C503 || CT.C503,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/dual_ring.dart"
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C507() {
      return C507 = dart.constList([C508 || CT.C508, C509 || CT.C509, C38 || CT.C38], widget_inspector._Location);
    },
    get C506() {
      return C506 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C507 || CT.C507,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/dual_ring.dart"
      });
    },
    get C510() {
      return C510 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/dual_ring.dart"
      });
    },
    get C511() {
      return C511 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C183 || CT.C183,
        [Interval_end]: 0.6,
        [Interval_begin]: 0.1
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C183 || CT.C183,
        [Interval_end]: 0.7,
        [Interval_begin]: 0.2
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C183 || CT.C183,
        [Interval_end]: 0.8,
        [Interval_begin]: 0.3
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C183 || CT.C183,
        [Interval_end]: 0.9,
        [Interval_begin]: 0.4
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C183 || CT.C183,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C520() {
      return C520 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C517() {
      return C517 = dart.constList([C518 || CT.C518, C519 || CT.C519, C520 || CT.C520], widget_inspector._Location);
    },
    get C516() {
      return C516 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C517 || CT.C517,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/cube_grid.dart"
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C525() {
      return C525 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C522() {
      return C522 = dart.constList([C523 || CT.C523, C524 || CT.C524, C525 || CT.C525], widget_inspector._Location);
    },
    get C521() {
      return C521 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C522 || CT.C522,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/cube_grid.dart"
      });
    },
    get C528() {
      return C528 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C529() {
      return C529 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C530() {
      return C530 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C527() {
      return C527 = dart.constList([C528 || CT.C528, C529 || CT.C529, C530 || CT.C530], widget_inspector._Location);
    },
    get C526() {
      return C526 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C527 || CT.C527,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/cube_grid.dart"
      });
    },
    get C533() {
      return C533 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C535() {
      return C535 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C532() {
      return C532 = dart.constList([C533 || CT.C533, C534 || CT.C534, C535 || CT.C535], widget_inspector._Location);
    },
    get C531() {
      return C531 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C532 || CT.C532,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/cube_grid.dart"
      });
    },
    get C538() {
      return C538 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 7,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C539() {
      return C539 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C537() {
      return C537 = dart.constList([C538 || CT.C538, C539 || CT.C539], widget_inspector._Location);
    },
    get C536() {
      return C536 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C537 || CT.C537,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/cube_grid.dart"
      });
    },
    get C542() {
      return C542 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 32,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C543() {
      return C543 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 68,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C541() {
      return C541 = dart.constList([C542 || CT.C542, C543 || CT.C543], widget_inspector._Location);
    },
    get C540() {
      return C540 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C541 || CT.C541,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/cube_grid.dart"
      });
    },
    get C546() {
      return C546 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 7,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C547() {
      return C547 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C545() {
      return C545 = dart.constList([C546 || CT.C546, C547 || CT.C547], widget_inspector._Location);
    },
    get C544() {
      return C544 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C545 || CT.C545,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/cube_grid.dart"
      });
    },
    get C550() {
      return C550 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C549() {
      return C549 = dart.constList([C550 || CT.C550], widget_inspector._Location);
    },
    get C548() {
      return C548 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C549 || CT.C549,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/cube_grid.dart"
      });
    },
    get C551() {
      return C551 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/circle.dart"
      });
    },
    get C554() {
      return C554 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 21,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C553() {
      return C553 = dart.constList([C554 || CT.C554, C58 || CT.C58], widget_inspector._Location);
    },
    get C552() {
      return C552 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C553 || CT.C553,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/circle.dart"
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/circle.dart"
      });
    },
    get C556() {
      return C556 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/circle.dart"
      });
    },
    get C557() {
      return C557 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/circle.dart"
      });
    },
    get C558() {
      return C558 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/circle.dart"
      });
    },
    get C559() {
      return C559 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/circle.dart"
      });
    },
    get C560() {
      return C560 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/circle.dart"
      });
    },
    get C561() {
      return C561 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/circle.dart"
      });
    },
    get C564() {
      return C564 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 26,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 36,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C563() {
      return C563 = dart.constList([C564 || CT.C564, C565 || CT.C565], widget_inspector._Location);
    },
    get C562() {
      return C562 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C563 || CT.C563,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/chasing_dots.dart"
      });
    },
    get C568() {
      return C568 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 26,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C569() {
      return C569 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C567() {
      return C567 = dart.constList([C568 || CT.C568, C569 || CT.C569], widget_inspector._Location);
    },
    get C566() {
      return C566 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C567 || CT.C567,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/chasing_dots.dart"
      });
    },
    get C572() {
      return C572 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C571() {
      return C571 = dart.constList([C572 || CT.C572], widget_inspector._Location);
    },
    get C570() {
      return C570 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C571 || CT.C571,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/chasing_dots.dart"
      });
    },
    get C575() {
      return C575 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C574() {
      return C574 = dart.constList([C575 || CT.C575, C188 || CT.C188], widget_inspector._Location);
    },
    get C573() {
      return C573 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C574 || CT.C574,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/chasing_dots.dart"
      });
    },
    get C578() {
      return C578 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C577() {
      return C577 = dart.constList([C578 || CT.C578, C193 || CT.C193], widget_inspector._Location);
    },
    get C576() {
      return C576 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C577 || CT.C577,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/chasing_dots.dart"
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/chasing_dots.dart"
      });
    },
    get C582() {
      return C582 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 28,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C581() {
      return C581 = dart.constList([C582 || CT.C582], widget_inspector._Location);
    },
    get C580() {
      return C580 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C581 || CT.C581,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/chasing_dots.dart"
      });
    },
    get C585() {
      return C585 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C586() {
      return C586 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C584() {
      return C584 = dart.constList([C585 || CT.C585, C586 || CT.C586], widget_inspector._Location);
    },
    get C583() {
      return C583 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C584 || CT.C584,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/chasing_dots.dart"
      });
    },
    get C589() {
      return C589 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 7,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C588() {
      return C588 = dart.constList([C589 || CT.C589, C234 || CT.C234], widget_inspector._Location);
    },
    get C587() {
      return C587 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C588 || CT.C588,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/flutter_spinkit/src/chasing_dots.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const color$ = dart.privateName(double_bounce, "SpinKitDoubleBounce.color");
  const size$ = dart.privateName(double_bounce, "SpinKitDoubleBounce.size");
  const itemBuilder$ = dart.privateName(double_bounce, "SpinKitDoubleBounce.itemBuilder");
  const duration$ = dart.privateName(double_bounce, "SpinKitDoubleBounce.duration");
  const controller$ = dart.privateName(double_bounce, "SpinKitDoubleBounce.controller");
  double_bounce.SpinKitDoubleBounce = class SpinKitDoubleBounce extends framework.StatefulWidget {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new double_bounce._SpinKitDoubleBounceState.new();
    }
  };
  (double_bounce.SpinKitDoubleBounce.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C0 || CT.C0;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[size$] = size;
    this[itemBuilder$] = itemBuilder;
    this[duration$] = duration;
    this[controller$] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/double_bounce.dart", 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/double_bounce.dart", 14, 16, "size != null");
    double_bounce.SpinKitDoubleBounce.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = double_bounce.SpinKitDoubleBounce.prototype;
  dart.addTypeTests(double_bounce.SpinKitDoubleBounce);
  dart.setMethodSignature(double_bounce.SpinKitDoubleBounce, () => ({
    __proto__: dart.getMethods(double_bounce.SpinKitDoubleBounce.__proto__),
    createState: dart.fnType(double_bounce._SpinKitDoubleBounceState, [])
  }));
  dart.setLibraryUri(double_bounce.SpinKitDoubleBounce, "package:flutter_spinkit/src/double_bounce.dart");
  dart.setFieldSignature(double_bounce.SpinKitDoubleBounce, () => ({
    __proto__: dart.getFields(double_bounce.SpinKitDoubleBounce.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(double_bounce, "_controller");
  const _animation = dart.privateName(double_bounce, "_animation");
  const _itemBuilder = dart.privateName(double_bounce, "_itemBuilder");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C2;
  let C1;
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C17;
  let C16;
  let C15;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(double_bounce.SpinKitDoubleBounce) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(double_bounce.SpinKitDoubleBounce)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(double_bounce.SpinKitDoubleBounce));
  double_bounce._SpinKitDoubleBounceState = class _SpinKitDoubleBounceState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.addStatusListener(utils.autoReverseFn(dart.fn(() => this[_controller], VoidToAnimationController()))), t0$.forward(), t0$);
      this[_animation] = new (TweenOfdouble()).new({begin: -1.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: curves.Curves.easeInOut}));
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.Stack.new({children: ListOfWidget().generate(2, dart.fn(i => new basic.Transform.scale({scale: (1.0 - dart.notNull(i) - dart.notNull(this[_animation].value))[$abs](), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder](i), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), intToTransform())), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: this.widget.color.withOpacity(0.6)}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
  };
  (double_bounce._SpinKitDoubleBounceState.new = function() {
    this[_controller] = null;
    this[_animation] = null;
    double_bounce._SpinKitDoubleBounceState.__proto__.new.call(this);
    ;
  }).prototype = double_bounce._SpinKitDoubleBounceState.prototype;
  dart.addTypeTests(double_bounce._SpinKitDoubleBounceState);
  dart.setMethodSignature(double_bounce._SpinKitDoubleBounceState, () => ({
    __proto__: dart.getMethods(double_bounce._SpinKitDoubleBounceState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(double_bounce._SpinKitDoubleBounceState, "package:flutter_spinkit/src/double_bounce.dart");
  dart.setFieldSignature(double_bounce._SpinKitDoubleBounceState, () => ({
    __proto__: dart.getFields(double_bounce._SpinKitDoubleBounceState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_animation]: dart.fieldType(animation.Animation$(core.double))
  }));
  const delay$ = dart.privateName(utils, "DelayTween.delay");
  utils.DelayTween = class DelayTween extends tween.Tween$(core.double) {
    get delay() {
      return this[delay$];
    }
    set delay(value) {
      super.delay = value;
    }
    lerp(t) {
      return super.lerp((math.sin((dart.notNull(t) - dart.notNull(this.delay)) * 2 * 3.141592653589793) + 1) / 2);
    }
    evaluate(animation) {
      return this.lerp(animation.value);
    }
  };
  (utils.DelayTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    let delay = opts && 'delay' in opts ? opts.delay : null;
    this[delay$] = delay;
    utils.DelayTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = utils.DelayTween.prototype;
  dart.addTypeTests(utils.DelayTween);
  dart.setLibraryUri(utils.DelayTween, "package:flutter_spinkit/src/utils.dart");
  dart.setFieldSignature(utils.DelayTween, () => ({
    __proto__: dart.getFields(utils.DelayTween.__proto__),
    delay: dart.finalFieldType(core.double)
  }));
  utils.autoReverseFn = function autoReverseFn(controllerFactory) {
    return dart.fn(status => {
      if (dart.equals(status, animation.AnimationStatus.completed)) {
        controllerFactory().reverse();
      } else if (dart.equals(status, animation.AnimationStatus.dismissed)) {
        controllerFactory().forward();
      }
    }, AnimationStatusToNull());
  };
  const _name$ = dart.privateName(wave, "_name");
  let C18;
  let C19;
  let C20;
  let C21;
  wave.SpinKitWaveType = class SpinKitWaveType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (wave.SpinKitWaveType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = wave.SpinKitWaveType.prototype;
  dart.addTypeTests(wave.SpinKitWaveType);
  dart.setLibraryUri(wave.SpinKitWaveType, "package:flutter_spinkit/src/wave.dart");
  dart.setFieldSignature(wave.SpinKitWaveType, () => ({
    __proto__: dart.getFields(wave.SpinKitWaveType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(wave.SpinKitWaveType, ['toString']);
  wave.SpinKitWaveType.start = C18 || CT.C18;
  wave.SpinKitWaveType.end = C19 || CT.C19;
  wave.SpinKitWaveType.center = C20 || CT.C20;
  wave.SpinKitWaveType.values = C21 || CT.C21;
  let C22;
  const color$0 = dart.privateName(wave, "SpinKitWave.color");
  const size$0 = dart.privateName(wave, "SpinKitWave.size");
  const type$ = dart.privateName(wave, "SpinKitWave.type");
  const itemBuilder$0 = dart.privateName(wave, "SpinKitWave.itemBuilder");
  const duration$0 = dart.privateName(wave, "SpinKitWave.duration");
  const controller$0 = dart.privateName(wave, "SpinKitWave.controller");
  wave.SpinKitWave = class SpinKitWave extends framework.StatefulWidget {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get itemBuilder() {
      return this[itemBuilder$0];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$0];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$0];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new wave._SpinKitWaveState.new();
    }
  };
  (wave.SpinKitWave.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let type = opts && 'type' in opts ? opts.type : C18 || CT.C18;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$0] = color;
    this[type$] = type;
    this[size$0] = size;
    this[itemBuilder$0] = itemBuilder;
    this[duration$0] = duration;
    this[controller$0] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/wave.dart", 15, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(type != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/wave.dart", 17, 16, "type != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/wave.dart", 18, 16, "size != null");
    wave.SpinKitWave.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = wave.SpinKitWave.prototype;
  dart.addTypeTests(wave.SpinKitWave);
  dart.setMethodSignature(wave.SpinKitWave, () => ({
    __proto__: dart.getMethods(wave.SpinKitWave.__proto__),
    createState: dart.fnType(wave._SpinKitWaveState, [])
  }));
  dart.setLibraryUri(wave.SpinKitWave, "package:flutter_spinkit/src/wave.dart");
  dart.setFieldSignature(wave.SpinKitWave, () => ({
    __proto__: dart.getFields(wave.SpinKitWave.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    type: dart.finalFieldType(wave.SpinKitWaveType),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$ = dart.privateName(wave, "_controller");
  const _itemBuilder$ = dart.privateName(wave, "_itemBuilder");
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C40;
  let C39;
  let C44;
  let C43;
  let C42;
  const State_SingleTickerProviderStateMixin$36$ = class State_SingleTickerProviderStateMixin extends framework.State$(wave.SpinKitWave) {};
  (State_SingleTickerProviderStateMixin$36$.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(wave.SpinKitWave)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$, ticker_provider.SingleTickerProviderStateMixin$(wave.SpinKitWave));
  wave._SpinKitWaveState = class _SpinKitWaveState extends State_SingleTickerProviderStateMixin$36$ {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat(), t0$);
    }
    dispose() {
      this[_controller$].dispose();
      super.dispose();
    }
    build(context) {
      let _bars = this.getAnimationDelay();
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.new(dart.notNull(this.widget.size) * 1.25, this.widget.size), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: ListOfWidget().generate(_bars[$length], dart.fn(i => new wave.ScaleYWidget.new({scaleY: new utils.DelayTween.new({begin: 0.4, end: 1.0, delay: _bars[$_get](i)}).animate(this[_controller$]), child: new basic.SizedBox.fromSize({size: new ui.Size.new(dart.notNull(this.widget.size) * 0.2, this.widget.size), child: this[_itemBuilder$](i), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), intToScaleYWidget())), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39});
    }
    getAnimationDelay() {
      switch (this.widget.type) {
        case C18 || CT.C18:
        {
          return JSArrayOfdouble().of([-1.2, -1.1, -1.0, -0.9, -0.8]);
        }
        case C19 || CT.C19:
        {
          return JSArrayOfdouble().of([-0.8, -0.9, -1.0, -1.1, -1.2]);
        }
        case C20 || CT.C20:
        default:
        {
          return JSArrayOfdouble().of([-0.75, -0.95, -1.2, -0.95, -0.75]);
        }
      }
    }
    [_itemBuilder$](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
    }
  };
  (wave._SpinKitWaveState.new = function() {
    this[_controller$] = null;
    wave._SpinKitWaveState.__proto__.new.call(this);
    ;
  }).prototype = wave._SpinKitWaveState.prototype;
  dart.addTypeTests(wave._SpinKitWaveState);
  dart.setMethodSignature(wave._SpinKitWaveState, () => ({
    __proto__: dart.getMethods(wave._SpinKitWaveState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    getAnimationDelay: dart.fnType(core.List$(core.double), []),
    [_itemBuilder$]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(wave._SpinKitWaveState, "package:flutter_spinkit/src/wave.dart");
  dart.setFieldSignature(wave._SpinKitWaveState, () => ({
    __proto__: dart.getFields(wave._SpinKitWaveState.__proto__),
    [_controller$]: dart.fieldType(animation_controller.AnimationController)
  }));
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C45;
  let C48;
  let C49;
  let C50;
  let C47;
  let C46;
  const child$ = dart.privateName(wave, "ScaleYWidget.child");
  const alignment$ = dart.privateName(wave, "ScaleYWidget.alignment");
  wave.ScaleYWidget = class ScaleYWidget extends transitions.AnimatedWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get scale() {
      return AnimationOfdouble()._check(this.listenable);
    }
    build(context) {
      let t0;
      return new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.scale(1.0, this.scale.value, 1.0), t0), alignment: this.alignment, child: this.child, $creationLocationd_0dea112b090073317d4: C46 || CT.C46});
    }
  };
  (wave.ScaleYWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scaleY = opts && 'scaleY' in opts ? opts.scaleY : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C45 || CT.C45;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[alignment$] = alignment;
    wave.ScaleYWidget.__proto__.new.call(this, {key: key, listenable: scaleY, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = wave.ScaleYWidget.prototype;
  dart.addTypeTests(wave.ScaleYWidget);
  dart.setMethodSignature(wave.ScaleYWidget, () => ({
    __proto__: dart.getMethods(wave.ScaleYWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(wave.ScaleYWidget, () => ({
    __proto__: dart.getGetters(wave.ScaleYWidget.__proto__),
    scale: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(wave.ScaleYWidget, "package:flutter_spinkit/src/wave.dart");
  dart.setFieldSignature(wave.ScaleYWidget, () => ({
    __proto__: dart.getFields(wave.ScaleYWidget.__proto__),
    child: dart.finalFieldType(framework.Widget),
    alignment: dart.finalFieldType(alignment.Alignment)
  }));
  const color$1 = dart.privateName(fading_circle, "SpinKitFadingCircle.color");
  const size$1 = dart.privateName(fading_circle, "SpinKitFadingCircle.size");
  const itemBuilder$1 = dart.privateName(fading_circle, "SpinKitFadingCircle.itemBuilder");
  const duration$1 = dart.privateName(fading_circle, "SpinKitFadingCircle.duration");
  const controller$1 = dart.privateName(fading_circle, "SpinKitFadingCircle.controller");
  fading_circle.SpinKitFadingCircle = class SpinKitFadingCircle extends framework.StatefulWidget {
    get color() {
      return this[color$1];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$1];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$1];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$1];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$1];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new fading_circle._SpinKitFadingCircleState.new();
    }
  };
  (fading_circle.SpinKitFadingCircle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$1] = color;
    this[size$1] = size;
    this[itemBuilder$1] = itemBuilder;
    this[duration$1] = duration;
    this[controller$1] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/fading_circle.dart", 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/fading_circle.dart", 14, 16, "size != null");
    fading_circle.SpinKitFadingCircle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fading_circle.SpinKitFadingCircle.prototype;
  dart.addTypeTests(fading_circle.SpinKitFadingCircle);
  dart.setMethodSignature(fading_circle.SpinKitFadingCircle, () => ({
    __proto__: dart.getMethods(fading_circle.SpinKitFadingCircle.__proto__),
    createState: dart.fnType(fading_circle._SpinKitFadingCircleState, [])
  }));
  dart.setLibraryUri(fading_circle.SpinKitFadingCircle, "package:flutter_spinkit/src/fading_circle.dart");
  dart.setFieldSignature(fading_circle.SpinKitFadingCircle, () => ({
    __proto__: dart.getFields(fading_circle.SpinKitFadingCircle.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$0 = dart.privateName(fading_circle, "_controller");
  const _itemBuilder$0 = dart.privateName(fading_circle, "_itemBuilder");
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C56;
  let C55;
  let C61;
  let C62;
  let C60;
  let C59;
  let C65;
  let C66;
  let C64;
  let C63;
  let C69;
  let C70;
  let C71;
  let C68;
  let C67;
  let C74;
  let C73;
  let C72;
  let C77;
  let C78;
  let C76;
  let C75;
  let C81;
  let C80;
  let C79;
  let C84;
  let C83;
  let C82;
  const State_SingleTickerProviderStateMixin$36$0 = class State_SingleTickerProviderStateMixin extends framework.State$(fading_circle.SpinKitFadingCircle) {};
  (State_SingleTickerProviderStateMixin$36$0.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(fading_circle.SpinKitFadingCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$0.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$0.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$0, ticker_provider.SingleTickerProviderStateMixin$(fading_circle.SpinKitFadingCircle));
  fading_circle._SpinKitFadingCircleState = class _SpinKitFadingCircleState extends State_SingleTickerProviderStateMixin$36$0 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$0] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat(), t0$);
    }
    dispose() {
      this[_controller$0].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: ListOfWidget().generate(12, dart.fn(i => {
              let _position = dart.notNull(this.widget.size) * 0.5;
              return new basic.Positioned.fill({left: _position, top: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(30.0 * dart.notNull(i) * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.FadeTransition.new({opacity: new utils.DelayTween.new({begin: 0.0, end: 1.0, delay: this.delays[$_get](i)}).animate(this[_controller$0]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.15), child: this[_itemBuilder$0](i), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67});
            }, intToPositioned())), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79});
    }
    [_itemBuilder$0](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.circle}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82});
    }
  };
  (fading_circle._SpinKitFadingCircleState.new = function() {
    this.delays = JSArrayOfdouble().of([0.0, -1.1, -1.0, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1]);
    this[_controller$0] = null;
    fading_circle._SpinKitFadingCircleState.__proto__.new.call(this);
    ;
  }).prototype = fading_circle._SpinKitFadingCircleState.prototype;
  dart.addTypeTests(fading_circle._SpinKitFadingCircleState);
  dart.setMethodSignature(fading_circle._SpinKitFadingCircleState, () => ({
    __proto__: dart.getMethods(fading_circle._SpinKitFadingCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$0]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(fading_circle._SpinKitFadingCircleState, "package:flutter_spinkit/src/fading_circle.dart");
  dart.setFieldSignature(fading_circle._SpinKitFadingCircleState, () => ({
    __proto__: dart.getFields(fading_circle._SpinKitFadingCircleState.__proto__),
    delays: dart.finalFieldType(core.List$(core.double)),
    [_controller$0]: dart.fieldType(animation_controller.AnimationController)
  }));
  const _name = dart.privateName(box_border, "_name");
  let C85;
  let C86;
  const color$2 = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.color");
  const shape$ = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.shape");
  const offset = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.offset");
  const size$2 = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.size");
  const itemBuilder$2 = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.itemBuilder");
  const duration$2 = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.duration");
  wandering_cubes.SpinKitWanderingCubes = class SpinKitWanderingCubes extends framework.StatefulWidget {
    get color() {
      return this[color$2];
    }
    set color(value) {
      super.color = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get offset() {
      return this[offset];
    }
    set offset(value) {
      super.offset = value;
    }
    get size() {
      return this[size$2];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$2];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$2];
    }
    set duration(value) {
      super.duration = value;
    }
    createState() {
      return new wandering_cubes._SpinKitWanderingCubesState.new();
    }
  };
  (wandering_cubes.SpinKitWanderingCubes.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shape = opts && 'shape' in opts ? opts.shape : C85 || CT.C85;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C86 || CT.C86;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$2] = color;
    this[shape$] = shape;
    this[size$2] = size;
    this[itemBuilder$2] = itemBuilder;
    this[duration$2] = duration;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart", 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart", 13, 16, "shape != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/wandering_cubes.dart", 14, 16, "size != null");
    this[offset] = dart.notNull(size) * 0.75;
    wandering_cubes.SpinKitWanderingCubes.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = wandering_cubes.SpinKitWanderingCubes.prototype;
  dart.addTypeTests(wandering_cubes.SpinKitWanderingCubes);
  dart.setMethodSignature(wandering_cubes.SpinKitWanderingCubes, () => ({
    __proto__: dart.getMethods(wandering_cubes.SpinKitWanderingCubes.__proto__),
    createState: dart.fnType(wandering_cubes._SpinKitWanderingCubesState, [])
  }));
  dart.setLibraryUri(wandering_cubes.SpinKitWanderingCubes, "package:flutter_spinkit/src/wandering_cubes.dart");
  dart.setFieldSignature(wandering_cubes.SpinKitWanderingCubes, () => ({
    __proto__: dart.getFields(wandering_cubes.SpinKitWanderingCubes.__proto__),
    color: dart.finalFieldType(ui.Color),
    shape: dart.finalFieldType(box_border.BoxShape),
    offset: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration)
  }));
  const _scaleCtrl = dart.privateName(wandering_cubes, "_scaleCtrl");
  const _rotateCtrl = dart.privateName(wandering_cubes, "_rotateCtrl");
  const _translateCtrl = dart.privateName(wandering_cubes, "_translateCtrl");
  const _scale1 = dart.privateName(wandering_cubes, "_scale1");
  const _scale2 = dart.privateName(wandering_cubes, "_scale2");
  const _scale3 = dart.privateName(wandering_cubes, "_scale3");
  const _scale4 = dart.privateName(wandering_cubes, "_scale4");
  const _rotate = dart.privateName(wandering_cubes, "_rotate");
  const _translate1 = dart.privateName(wandering_cubes, "_translate1");
  const _translate2 = dart.privateName(wandering_cubes, "_translate2");
  const _translate3 = dart.privateName(wandering_cubes, "_translate3");
  const _translate4 = dart.privateName(wandering_cubes, "_translate4");
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C88;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C87;
  let C89;
  let C90;
  let C91;
  const _cube = dart.privateName(wandering_cubes, "_cube");
  let C94;
  let C93;
  let C92;
  let C97;
  let C98;
  let C96;
  let C95;
  let C101;
  let C100;
  let C99;
  const _itemBuilder$1 = dart.privateName(wandering_cubes, "_itemBuilder");
  let C104;
  let C105;
  let C103;
  let C102;
  let C108;
  let C109;
  let C107;
  let C106;
  let C112;
  let C113;
  let C111;
  let C110;
  let C116;
  let C117;
  let C115;
  let C114;
  let C120;
  let C121;
  let C122;
  let C119;
  let C118;
  let C125;
  let C124;
  let C123;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(wandering_cubes.SpinKitWanderingCubes) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(wandering_cubes.SpinKitWanderingCubes)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(wandering_cubes.SpinKitWanderingCubes));
  wandering_cubes._SpinKitWanderingCubesState = class _SpinKitWanderingCubesState extends State_TickerProviderStateMixin$36 {
    initState() {
      let t0, t0$, t0$0;
      super.initState();
      this[_translateCtrl] = (t0 = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0.repeat(), t0);
      this[_translate1] = new (TweenOfdouble()).new({begin: 0.0, end: this.widget.offset}).animate(new animations.CurvedAnimation.new({parent: this[_translateCtrl], curve: C87 || CT.C87}));
      this[_translate2] = new (TweenOfdouble()).new({begin: 0.0, end: this.widget.offset}).animate(new animations.CurvedAnimation.new({parent: this[_translateCtrl], curve: C89 || CT.C89}));
      this[_translate3] = new (TweenOfdouble()).new({begin: 0.0, end: -dart.notNull(this.widget.offset)}).animate(new animations.CurvedAnimation.new({parent: this[_translateCtrl], curve: C90 || CT.C90}));
      this[_translate4] = new (TweenOfdouble()).new({begin: 0.0, end: -dart.notNull(this.widget.offset)}).animate(new animations.CurvedAnimation.new({parent: this[_translateCtrl], curve: C91 || CT.C91}));
      this[_scaleCtrl] = (t0$ = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_scale1] = new (TweenOfdouble()).new({begin: 1.0, end: 0.5}).animate(new animations.CurvedAnimation.new({parent: this[_scaleCtrl], curve: C87 || CT.C87}));
      this[_scale2] = new (TweenOfdouble()).new({begin: 1.0, end: 2.0}).animate(new animations.CurvedAnimation.new({parent: this[_scaleCtrl], curve: C89 || CT.C89}));
      this[_scale3] = new (TweenOfdouble()).new({begin: 1.0, end: 0.5}).animate(new animations.CurvedAnimation.new({parent: this[_scaleCtrl], curve: C90 || CT.C90}));
      this[_scale4] = new (TweenOfdouble()).new({begin: 1.0, end: 2.0}).animate(new animations.CurvedAnimation.new({parent: this[_scaleCtrl], curve: C91 || CT.C91}));
      this[_rotateCtrl] = (t0$0 = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0$0.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$0.repeat(), t0$0);
      this[_rotate] = new (TweenOfdouble()).new({begin: 0.0, end: 360.0}).animate(new animations.CurvedAnimation.new({parent: this[_translateCtrl], curve: curves.Curves.linear}));
    }
    dispose() {
      this[_translateCtrl].dispose();
      this[_scaleCtrl].dispose();
      this[_rotateCtrl].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: JSArrayOfWidget().of([this[_cube](0), this[_cube](1, true)]), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), $creationLocationd_0dea112b090073317d4: C99 || CT.C99});
    }
    [_cube](index, offset = false) {
      let t0, t0$, t0$0;
      let _tTranslate = null;
      if (dart.equals(offset, true)) {
        _tTranslate = (t0 = vector_math_64.Matrix4.identity(), t0.translate(this[_translate3].value, 0.0), t0.translate(0.0, this[_translate2].value), t0.translate(0.0, this[_translate4].value), t0.translate(this[_translate1].value, 0.0), t0);
      } else {
        _tTranslate = (t0$ = vector_math_64.Matrix4.identity(), t0$.translate(0.0, this[_translate3].value), t0$.translate(-dart.notNull(this[_translate2].value), 0.0), t0$.translate(-dart.notNull(this[_translate4].value), 0.0), t0$.translate(0.0, this[_translate1].value), t0$);
      }
      return new basic.Positioned.new({top: 0.0, left: dart.equals(offset, true) ? 0.0 : this.widget.offset, child: new basic.Transform.new({transform: _tTranslate, child: new basic.Transform.rotate({angle: dart.notNull(this[_rotate].value) * 0.0174533, child: new basic.Transform.new({transform: (t0$0 = vector_math_64.Matrix4.identity(), t0$0.scale(this[_scale2].value), t0$0.scale(this[_scale3].value), t0$0.scale(this[_scale4].value), t0$0.scale(this[_scale1].value), t0$0), child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.25), child: this[_itemBuilder$1](index), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118});
    }
    [_itemBuilder$1](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape}), $creationLocationd_0dea112b090073317d4: C123 || CT.C123});
    }
  };
  (wandering_cubes._SpinKitWanderingCubesState.new = function() {
    this[_scaleCtrl] = null;
    this[_rotateCtrl] = null;
    this[_translateCtrl] = null;
    this[_scale1] = null;
    this[_scale2] = null;
    this[_scale3] = null;
    this[_scale4] = null;
    this[_rotate] = null;
    this[_translate1] = null;
    this[_translate2] = null;
    this[_translate3] = null;
    this[_translate4] = null;
    wandering_cubes._SpinKitWanderingCubesState.__proto__.new.call(this);
    ;
  }).prototype = wandering_cubes._SpinKitWanderingCubesState.prototype;
  dart.addTypeTests(wandering_cubes._SpinKitWanderingCubesState);
  dart.setMethodSignature(wandering_cubes._SpinKitWanderingCubesState, () => ({
    __proto__: dart.getMethods(wandering_cubes._SpinKitWanderingCubesState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_cube]: dart.fnType(framework.Widget, [core.int], [core.bool]),
    [_itemBuilder$1]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(wandering_cubes._SpinKitWanderingCubesState, "package:flutter_spinkit/src/wandering_cubes.dart");
  dart.setFieldSignature(wandering_cubes._SpinKitWanderingCubesState, () => ({
    __proto__: dart.getFields(wandering_cubes._SpinKitWanderingCubesState.__proto__),
    [_scaleCtrl]: dart.fieldType(animation_controller.AnimationController),
    [_rotateCtrl]: dart.fieldType(animation_controller.AnimationController),
    [_translateCtrl]: dart.fieldType(animation_controller.AnimationController),
    [_scale1]: dart.fieldType(animation.Animation$(core.double)),
    [_scale2]: dart.fieldType(animation.Animation$(core.double)),
    [_scale3]: dart.fieldType(animation.Animation$(core.double)),
    [_scale4]: dart.fieldType(animation.Animation$(core.double)),
    [_rotate]: dart.fieldType(animation.Animation$(core.double)),
    [_translate1]: dart.fieldType(animation.Animation$(core.double)),
    [_translate2]: dart.fieldType(animation.Animation$(core.double)),
    [_translate3]: dart.fieldType(animation.Animation$(core.double)),
    [_translate4]: dart.fieldType(animation.Animation$(core.double))
  }));
  let C126;
  const color$3 = dart.privateName(three_bounce, "SpinKitThreeBounce.color");
  const size$3 = dart.privateName(three_bounce, "SpinKitThreeBounce.size");
  const itemBuilder$3 = dart.privateName(three_bounce, "SpinKitThreeBounce.itemBuilder");
  const duration$3 = dart.privateName(three_bounce, "SpinKitThreeBounce.duration");
  const controller$2 = dart.privateName(three_bounce, "SpinKitThreeBounce.controller");
  three_bounce.SpinKitThreeBounce = class SpinKitThreeBounce extends framework.StatefulWidget {
    get color() {
      return this[color$3];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$3];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$3];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$3];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$2];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new three_bounce._SpinKitThreeBounceState.new();
    }
  };
  (three_bounce.SpinKitThreeBounce.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C126 || CT.C126;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$3] = color;
    this[size$3] = size;
    this[itemBuilder$3] = itemBuilder;
    this[duration$3] = duration;
    this[controller$2] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/three_bounce.dart", 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/three_bounce.dart", 14, 16, "size != null");
    three_bounce.SpinKitThreeBounce.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = three_bounce.SpinKitThreeBounce.prototype;
  dart.addTypeTests(three_bounce.SpinKitThreeBounce);
  dart.setMethodSignature(three_bounce.SpinKitThreeBounce, () => ({
    __proto__: dart.getMethods(three_bounce.SpinKitThreeBounce.__proto__),
    createState: dart.fnType(three_bounce._SpinKitThreeBounceState, [])
  }));
  dart.setLibraryUri(three_bounce.SpinKitThreeBounce, "package:flutter_spinkit/src/three_bounce.dart");
  dart.setFieldSignature(three_bounce.SpinKitThreeBounce, () => ({
    __proto__: dart.getFields(three_bounce.SpinKitThreeBounce.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$1 = dart.privateName(three_bounce, "_controller");
  const _itemBuilder$2 = dart.privateName(three_bounce, "_itemBuilder");
  let C129;
  let C130;
  let C128;
  let C127;
  let C133;
  let C134;
  let C132;
  let C131;
  let C137;
  let C136;
  let C135;
  let C140;
  let C141;
  let C139;
  let C138;
  let C144;
  let C143;
  let C142;
  let C147;
  let C146;
  let C145;
  const State_SingleTickerProviderStateMixin$36$1 = class State_SingleTickerProviderStateMixin extends framework.State$(three_bounce.SpinKitThreeBounce) {};
  (State_SingleTickerProviderStateMixin$36$1.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(three_bounce.SpinKitThreeBounce)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$1.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$1.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$1, ticker_provider.SingleTickerProviderStateMixin$(three_bounce.SpinKitThreeBounce));
  three_bounce._SpinKitThreeBounceState = class _SpinKitThreeBounceState extends State_SingleTickerProviderStateMixin$36$1 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$1] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat(), t0$);
    }
    dispose() {
      this[_controller$1].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.new(dart.notNull(this.widget.size) * 2, this.widget.size), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: ListOfWidget().generate(3, dart.fn(i => new transitions.ScaleTransition.new({scale: new utils.DelayTween.new({begin: 0.0, end: 1.0, delay: dart.notNull(i) * 0.2}).animate(this[_controller$1]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.5), child: this[_itemBuilder$2](i), $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), intToScaleTransition())), $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), $creationLocationd_0dea112b090073317d4: C142 || CT.C142});
    }
    [_itemBuilder$2](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.circle}), $creationLocationd_0dea112b090073317d4: C145 || CT.C145});
    }
  };
  (three_bounce._SpinKitThreeBounceState.new = function() {
    this[_controller$1] = null;
    three_bounce._SpinKitThreeBounceState.__proto__.new.call(this);
    ;
  }).prototype = three_bounce._SpinKitThreeBounceState.prototype;
  dart.addTypeTests(three_bounce._SpinKitThreeBounceState);
  dart.setMethodSignature(three_bounce._SpinKitThreeBounceState, () => ({
    __proto__: dart.getMethods(three_bounce._SpinKitThreeBounceState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$2]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(three_bounce._SpinKitThreeBounceState, "package:flutter_spinkit/src/three_bounce.dart");
  dart.setFieldSignature(three_bounce._SpinKitThreeBounceState, () => ({
    __proto__: dart.getFields(three_bounce._SpinKitThreeBounceState.__proto__),
    [_controller$1]: dart.fieldType(animation_controller.AnimationController)
  }));
  let C148;
  const color$4 = dart.privateName(square_circle, "SpinKitSquareCircle.color");
  const size$4 = dart.privateName(square_circle, "SpinKitSquareCircle.size");
  const itemBuilder$4 = dart.privateName(square_circle, "SpinKitSquareCircle.itemBuilder");
  const duration$4 = dart.privateName(square_circle, "SpinKitSquareCircle.duration");
  const controller$3 = dart.privateName(square_circle, "SpinKitSquareCircle.controller");
  square_circle.SpinKitSquareCircle = class SpinKitSquareCircle extends framework.StatefulWidget {
    get color() {
      return this[color$4];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$4];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$4];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$4];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$3];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new square_circle._SpinKitSquareCircleState.new();
    }
  };
  (square_circle.SpinKitSquareCircle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C148 || CT.C148;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$4] = color;
    this[size$4] = size;
    this[itemBuilder$4] = itemBuilder;
    this[duration$4] = duration;
    this[controller$3] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/square_circle.dart", 14, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/square_circle.dart", 16, 16, "size != null");
    square_circle.SpinKitSquareCircle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = square_circle.SpinKitSquareCircle.prototype;
  dart.addTypeTests(square_circle.SpinKitSquareCircle);
  dart.setMethodSignature(square_circle.SpinKitSquareCircle, () => ({
    __proto__: dart.getMethods(square_circle.SpinKitSquareCircle.__proto__),
    createState: dart.fnType(square_circle._SpinKitSquareCircleState, [])
  }));
  dart.setLibraryUri(square_circle.SpinKitSquareCircle, "package:flutter_spinkit/src/square_circle.dart");
  dart.setFieldSignature(square_circle.SpinKitSquareCircle, () => ({
    __proto__: dart.getFields(square_circle.SpinKitSquareCircle.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _itembuilder = dart.privateName(square_circle, "_itembuilder");
  let C151;
  let C152;
  let C150;
  let C149;
  let C155;
  let C156;
  let C157;
  let C154;
  let C153;
  let C160;
  let C159;
  let C158;
  let C163;
  let C162;
  let C161;
  const State_SingleTickerProviderStateMixin$36$2 = class State_SingleTickerProviderStateMixin extends framework.State$(square_circle.SpinKitSquareCircle) {};
  (State_SingleTickerProviderStateMixin$36$2.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(square_circle.SpinKitSquareCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$2.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$2.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$2, ticker_provider.SingleTickerProviderStateMixin$(square_circle.SpinKitSquareCircle));
  square_circle._SpinKitSquareCircleState = class _SpinKitSquareCircleState extends State_SingleTickerProviderStateMixin$36$2 {
    initState() {
      let t0, t0$;
      super.initState();
      this.controller = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.addStatusListener(utils.autoReverseFn(dart.fn(() => this.controller, VoidToAnimationController()))), t0$.forward(), t0$);
      let animation = new animations.CurvedAnimation.new({parent: this.controller, curve: curves.Curves.easeInOutCubic});
      this.animationCurve = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(animation);
      this.animationSize = new (TweenOfdouble()).new({begin: 0.5, end: 1.0}).animate(animation);
    }
    dispose() {
      this.controller.dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      let sizeValue = dart.notNull(this.widget.size) * dart.notNull(this.animationSize.value);
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateZ(dart.notNull(this.animationCurve.value) * 3.141592653589793), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(sizeValue), child: this[_itembuilder](0, 0.5 * sizeValue * dart.notNull(this.animationCurve.value)), $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), $creationLocationd_0dea112b090073317d4: C153 || CT.C153}), $creationLocationd_0dea112b090073317d4: C158 || CT.C158});
    }
    [_itembuilder](index, curveValue) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(curveValue))}), $creationLocationd_0dea112b090073317d4: C161 || CT.C161});
    }
  };
  (square_circle._SpinKitSquareCircleState.new = function() {
    this.controller = null;
    this.animationCurve = null;
    this.animationSize = null;
    square_circle._SpinKitSquareCircleState.__proto__.new.call(this);
    ;
  }).prototype = square_circle._SpinKitSquareCircleState.prototype;
  dart.addTypeTests(square_circle._SpinKitSquareCircleState);
  dart.setMethodSignature(square_circle._SpinKitSquareCircleState, () => ({
    __proto__: dart.getMethods(square_circle._SpinKitSquareCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itembuilder]: dart.fnType(framework.Widget, [core.int, core.double])
  }));
  dart.setLibraryUri(square_circle._SpinKitSquareCircleState, "package:flutter_spinkit/src/square_circle.dart");
  dart.setFieldSignature(square_circle._SpinKitSquareCircleState, () => ({
    __proto__: dart.getFields(square_circle._SpinKitSquareCircleState.__proto__),
    controller: dart.fieldType(animation_controller.AnimationController),
    animationCurve: dart.fieldType(animation.Animation$(core.double)),
    animationSize: dart.fieldType(animation.Animation$(core.double))
  }));
  let C164;
  const color$5 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.color");
  const shape$0 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.shape");
  const size$5 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.size");
  const itemBuilder$5 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.itemBuilder");
  const duration$5 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.duration");
  const controller$4 = dart.privateName(spinning_circle, "SpinKitSpinningCircle.controller");
  spinning_circle.SpinKitSpinningCircle = class SpinKitSpinningCircle extends framework.StatefulWidget {
    get color() {
      return this[color$5];
    }
    set color(value) {
      super.color = value;
    }
    get shape() {
      return this[shape$0];
    }
    set shape(value) {
      super.shape = value;
    }
    get size() {
      return this[size$5];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$5];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$5];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$4];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new spinning_circle._SpinKitSpinningCircleState.new();
    }
  };
  (spinning_circle.SpinKitSpinningCircle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shape = opts && 'shape' in opts ? opts.shape : C164 || CT.C164;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$5] = color;
    this[shape$0] = shape;
    this[size$5] = size;
    this[itemBuilder$5] = itemBuilder;
    this[duration$5] = duration;
    this[controller$4] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/spinning_circle.dart", 14, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/spinning_circle.dart", 16, 16, "shape != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/spinning_circle.dart", 17, 16, "size != null");
    spinning_circle.SpinKitSpinningCircle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = spinning_circle.SpinKitSpinningCircle.prototype;
  dart.addTypeTests(spinning_circle.SpinKitSpinningCircle);
  dart.setMethodSignature(spinning_circle.SpinKitSpinningCircle, () => ({
    __proto__: dart.getMethods(spinning_circle.SpinKitSpinningCircle.__proto__),
    createState: dart.fnType(spinning_circle._SpinKitSpinningCircleState, [])
  }));
  dart.setLibraryUri(spinning_circle.SpinKitSpinningCircle, "package:flutter_spinkit/src/spinning_circle.dart");
  dart.setFieldSignature(spinning_circle.SpinKitSpinningCircle, () => ({
    __proto__: dart.getFields(spinning_circle.SpinKitSpinningCircle.__proto__),
    color: dart.finalFieldType(ui.Color),
    shape: dart.finalFieldType(box_border.BoxShape),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$2 = dart.privateName(spinning_circle, "_controller");
  const _animation$ = dart.privateName(spinning_circle, "_animation");
  let C166;
  let C165;
  const _itemBuilder$3 = dart.privateName(spinning_circle, "_itemBuilder");
  let C169;
  let C170;
  let C168;
  let C167;
  let C173;
  let C174;
  let C175;
  let C172;
  let C171;
  let C178;
  let C177;
  let C176;
  let C181;
  let C180;
  let C179;
  const State_SingleTickerProviderStateMixin$36$3 = class State_SingleTickerProviderStateMixin extends framework.State$(spinning_circle.SpinKitSpinningCircle) {};
  (State_SingleTickerProviderStateMixin$36$3.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(spinning_circle.SpinKitSpinningCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$3.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$3.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$3, ticker_provider.SingleTickerProviderStateMixin$(spinning_circle.SpinKitSpinningCircle));
  spinning_circle._SpinKitSpinningCircleState = class _SpinKitSpinningCircleState extends State_SingleTickerProviderStateMixin$36$3 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$2] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation$] = new (TweenOfdouble()).new({begin: 0.0, end: 7.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$2], curve: C165 || CT.C165}));
    }
    dispose() {
      this[_controller$2].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateY((0 - dart.notNull(this[_animation$].value)) * 3.141592653589793), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder$3](0), $creationLocationd_0dea112b090073317d4: C167 || CT.C167}), $creationLocationd_0dea112b090073317d4: C171 || CT.C171}), $creationLocationd_0dea112b090073317d4: C176 || CT.C176});
    }
    [_itemBuilder$3](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape}), $creationLocationd_0dea112b090073317d4: C179 || CT.C179});
    }
  };
  (spinning_circle._SpinKitSpinningCircleState.new = function() {
    this[_controller$2] = null;
    this[_animation$] = null;
    spinning_circle._SpinKitSpinningCircleState.__proto__.new.call(this);
    ;
  }).prototype = spinning_circle._SpinKitSpinningCircleState.prototype;
  dart.addTypeTests(spinning_circle._SpinKitSpinningCircleState);
  dart.setMethodSignature(spinning_circle._SpinKitSpinningCircleState, () => ({
    __proto__: dart.getMethods(spinning_circle._SpinKitSpinningCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$3]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(spinning_circle._SpinKitSpinningCircleState, "package:flutter_spinkit/src/spinning_circle.dart");
  dart.setFieldSignature(spinning_circle._SpinKitSpinningCircleState, () => ({
    __proto__: dart.getFields(spinning_circle._SpinKitSpinningCircleState.__proto__),
    [_controller$2]: dart.fieldType(animation_controller.AnimationController),
    [_animation$]: dart.fieldType(animation.Animation$(core.double))
  }));
  const color$6 = dart.privateName(rotating_plain, "SpinKitRotatingPlain.color");
  const size$6 = dart.privateName(rotating_plain, "SpinKitRotatingPlain.size");
  const itemBuilder$6 = dart.privateName(rotating_plain, "SpinKitRotatingPlain.itemBuilder");
  const duration$6 = dart.privateName(rotating_plain, "SpinKitRotatingPlain.duration");
  const controller$5 = dart.privateName(rotating_plain, "SpinKitRotatingPlain.controller");
  rotating_plain.SpinKitRotatingPlain = class SpinKitRotatingPlain extends framework.StatefulWidget {
    get color() {
      return this[color$6];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$6];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$6];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$6];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$5];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new rotating_plain._SpinKitRotatingPlainState.new();
    }
  };
  (rotating_plain.SpinKitRotatingPlain.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$6] = color;
    this[size$6] = size;
    this[itemBuilder$6] = itemBuilder;
    this[duration$6] = duration;
    this[controller$5] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/rotating_plain.dart", 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/rotating_plain.dart", 13, 16, "size != null");
    rotating_plain.SpinKitRotatingPlain.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = rotating_plain.SpinKitRotatingPlain.prototype;
  dart.addTypeTests(rotating_plain.SpinKitRotatingPlain);
  dart.setMethodSignature(rotating_plain.SpinKitRotatingPlain, () => ({
    __proto__: dart.getMethods(rotating_plain.SpinKitRotatingPlain.__proto__),
    createState: dart.fnType(rotating_plain._SpinKitRotatingPlainState, [])
  }));
  dart.setLibraryUri(rotating_plain.SpinKitRotatingPlain, "package:flutter_spinkit/src/rotating_plain.dart");
  dart.setFieldSignature(rotating_plain.SpinKitRotatingPlain, () => ({
    __proto__: dart.getFields(rotating_plain.SpinKitRotatingPlain.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$3 = dart.privateName(rotating_plain, "_controller");
  const _animation1 = dart.privateName(rotating_plain, "_animation1");
  const _animation2 = dart.privateName(rotating_plain, "_animation2");
  let C183;
  let C182;
  let C184;
  const _itemBuilder$4 = dart.privateName(rotating_plain, "_itemBuilder");
  let C187;
  let C188;
  let C186;
  let C185;
  let C191;
  let C192;
  let C193;
  let C190;
  let C189;
  let C194;
  let C197;
  let C196;
  let C195;
  const State_SingleTickerProviderStateMixin$36$4 = class State_SingleTickerProviderStateMixin extends framework.State$(rotating_plain.SpinKitRotatingPlain) {};
  (State_SingleTickerProviderStateMixin$36$4.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(rotating_plain.SpinKitRotatingPlain)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$4.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$4.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$4, ticker_provider.SingleTickerProviderStateMixin$(rotating_plain.SpinKitRotatingPlain));
  rotating_plain._SpinKitRotatingPlainState = class _SpinKitRotatingPlainState extends State_SingleTickerProviderStateMixin$36$4 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$3] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation1] = new (TweenOfdouble()).new({begin: 0.0, end: 180.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$3], curve: C182 || CT.C182}));
      this[_animation2] = new (TweenOfdouble()).new({begin: 0.0, end: 180.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$3], curve: C184 || CT.C184}));
    }
    dispose() {
      this[_controller$3].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateX((0 - dart.notNull(this[_animation1].value)) * 0.0174533), t0.rotateY((0 - dart.notNull(this[_animation2].value)) * 0.0174533), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder$4](0), $creationLocationd_0dea112b090073317d4: C185 || CT.C185}), $creationLocationd_0dea112b090073317d4: C189 || CT.C189}), $creationLocationd_0dea112b090073317d4: C194 || CT.C194});
    }
    [_itemBuilder$4](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C195 || CT.C195});
    }
  };
  (rotating_plain._SpinKitRotatingPlainState.new = function() {
    this[_controller$3] = null;
    this[_animation1] = null;
    this[_animation2] = null;
    rotating_plain._SpinKitRotatingPlainState.__proto__.new.call(this);
    ;
  }).prototype = rotating_plain._SpinKitRotatingPlainState.prototype;
  dart.addTypeTests(rotating_plain._SpinKitRotatingPlainState);
  dart.setMethodSignature(rotating_plain._SpinKitRotatingPlainState, () => ({
    __proto__: dart.getMethods(rotating_plain._SpinKitRotatingPlainState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$4]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(rotating_plain._SpinKitRotatingPlainState, "package:flutter_spinkit/src/rotating_plain.dart");
  dart.setFieldSignature(rotating_plain._SpinKitRotatingPlainState, () => ({
    __proto__: dart.getFields(rotating_plain._SpinKitRotatingPlainState.__proto__),
    [_controller$3]: dart.fieldType(animation_controller.AnimationController),
    [_animation1]: dart.fieldType(animation.Animation$(core.double)),
    [_animation2]: dart.fieldType(animation.Animation$(core.double))
  }));
  const color$7 = dart.privateName(rotating_circle, "SpinKitRotatingCircle.color");
  const size$7 = dart.privateName(rotating_circle, "SpinKitRotatingCircle.size");
  const itemBuilder$7 = dart.privateName(rotating_circle, "SpinKitRotatingCircle.itemBuilder");
  const duration$7 = dart.privateName(rotating_circle, "SpinKitRotatingCircle.duration");
  const controller$6 = dart.privateName(rotating_circle, "SpinKitRotatingCircle.controller");
  rotating_circle.SpinKitRotatingCircle = class SpinKitRotatingCircle extends framework.StatefulWidget {
    get color() {
      return this[color$7];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$7];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$7];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$7];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$6];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new rotating_circle._SpinKitRotatingCircleState.new();
    }
  };
  (rotating_circle.SpinKitRotatingCircle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$7] = color;
    this[size$7] = size;
    this[itemBuilder$7] = itemBuilder;
    this[duration$7] = duration;
    this[controller$6] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/rotating_circle.dart", 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/rotating_circle.dart", 13, 16, "size != null");
    rotating_circle.SpinKitRotatingCircle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = rotating_circle.SpinKitRotatingCircle.prototype;
  dart.addTypeTests(rotating_circle.SpinKitRotatingCircle);
  dart.setMethodSignature(rotating_circle.SpinKitRotatingCircle, () => ({
    __proto__: dart.getMethods(rotating_circle.SpinKitRotatingCircle.__proto__),
    createState: dart.fnType(rotating_circle._SpinKitRotatingCircleState, [])
  }));
  dart.setLibraryUri(rotating_circle.SpinKitRotatingCircle, "package:flutter_spinkit/src/rotating_circle.dart");
  dart.setFieldSignature(rotating_circle.SpinKitRotatingCircle, () => ({
    __proto__: dart.getFields(rotating_circle.SpinKitRotatingCircle.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$4 = dart.privateName(rotating_circle, "_controller");
  const _animation1$ = dart.privateName(rotating_circle, "_animation1");
  const _animation2$ = dart.privateName(rotating_circle, "_animation2");
  const _itemBuilder$5 = dart.privateName(rotating_circle, "_itemBuilder");
  let C200;
  let C201;
  let C199;
  let C198;
  let C202;
  let C203;
  let C204;
  const State_SingleTickerProviderStateMixin$36$5 = class State_SingleTickerProviderStateMixin extends framework.State$(rotating_circle.SpinKitRotatingCircle) {};
  (State_SingleTickerProviderStateMixin$36$5.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(rotating_circle.SpinKitRotatingCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$5.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$5.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$5, ticker_provider.SingleTickerProviderStateMixin$(rotating_circle.SpinKitRotatingCircle));
  rotating_circle._SpinKitRotatingCircleState = class _SpinKitRotatingCircleState extends State_SingleTickerProviderStateMixin$36$5 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$4] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation1$] = new (TweenOfdouble()).new({begin: 0.0, end: 180.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$4], curve: C182 || CT.C182}));
      this[_animation2$] = new (TweenOfdouble()).new({begin: 0.0, end: 180.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$4], curve: C184 || CT.C184}));
    }
    dispose() {
      this[_controller$4].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateX((0 - dart.notNull(this[_animation1$].value)) * 0.0174533), t0.rotateY((0 - dart.notNull(this[_animation2$].value)) * 0.0174533), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder$5](0), $creationLocationd_0dea112b090073317d4: C198 || CT.C198}), $creationLocationd_0dea112b090073317d4: C202 || CT.C202}), $creationLocationd_0dea112b090073317d4: C203 || CT.C203});
    }
    [_itemBuilder$5](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.circle}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204});
    }
  };
  (rotating_circle._SpinKitRotatingCircleState.new = function() {
    this[_controller$4] = null;
    this[_animation1$] = null;
    this[_animation2$] = null;
    rotating_circle._SpinKitRotatingCircleState.__proto__.new.call(this);
    ;
  }).prototype = rotating_circle._SpinKitRotatingCircleState.prototype;
  dart.addTypeTests(rotating_circle._SpinKitRotatingCircleState);
  dart.setMethodSignature(rotating_circle._SpinKitRotatingCircleState, () => ({
    __proto__: dart.getMethods(rotating_circle._SpinKitRotatingCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$5]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(rotating_circle._SpinKitRotatingCircleState, "package:flutter_spinkit/src/rotating_circle.dart");
  dart.setFieldSignature(rotating_circle._SpinKitRotatingCircleState, () => ({
    __proto__: dart.getFields(rotating_circle._SpinKitRotatingCircleState.__proto__),
    [_controller$4]: dart.fieldType(animation_controller.AnimationController),
    [_animation1$]: dart.fieldType(animation.Animation$(core.double)),
    [_animation2$]: dart.fieldType(animation.Animation$(core.double))
  }));
  const color$8 = dart.privateName(ripple, "SpinKitRipple.color");
  const size$8 = dart.privateName(ripple, "SpinKitRipple.size");
  const borderWidth$ = dart.privateName(ripple, "SpinKitRipple.borderWidth");
  const itemBuilder$8 = dart.privateName(ripple, "SpinKitRipple.itemBuilder");
  const duration$8 = dart.privateName(ripple, "SpinKitRipple.duration");
  const controller$7 = dart.privateName(ripple, "SpinKitRipple.controller");
  ripple.SpinKitRipple = class SpinKitRipple extends framework.StatefulWidget {
    get color() {
      return this[color$8];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$8];
    }
    set size(value) {
      super.size = value;
    }
    get borderWidth() {
      return this[borderWidth$];
    }
    set borderWidth(value) {
      super.borderWidth = value;
    }
    get itemBuilder() {
      return this[itemBuilder$8];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$8];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$7];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new ripple._SpinKitRippleState.new();
    }
  };
  (ripple.SpinKitRipple.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let borderWidth = opts && 'borderWidth' in opts ? opts.borderWidth : 6;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C86 || CT.C86;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$8] = color;
    this[size$8] = size;
    this[borderWidth$] = borderWidth;
    this[itemBuilder$8] = itemBuilder;
    this[duration$8] = duration;
    this[controller$7] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/ripple.dart", 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/ripple.dart", 14, 16, "size != null");
    if (!(borderWidth != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/ripple.dart", 15, 16, "borderWidth != null");
    ripple.SpinKitRipple.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ripple.SpinKitRipple.prototype;
  dart.addTypeTests(ripple.SpinKitRipple);
  dart.setMethodSignature(ripple.SpinKitRipple, () => ({
    __proto__: dart.getMethods(ripple.SpinKitRipple.__proto__),
    createState: dart.fnType(ripple._SpinKitRippleState, [])
  }));
  dart.setLibraryUri(ripple.SpinKitRipple, "package:flutter_spinkit/src/ripple.dart");
  dart.setFieldSignature(ripple.SpinKitRipple, () => ({
    __proto__: dart.getFields(ripple.SpinKitRipple.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    borderWidth: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$5 = dart.privateName(ripple, "_controller");
  const _animation1$0 = dart.privateName(ripple, "_animation1");
  const _animation2$0 = dart.privateName(ripple, "_animation2");
  let C206;
  let C205;
  let C207;
  const _itemBuilder$6 = dart.privateName(ripple, "_itemBuilder");
  let C210;
  let C211;
  let C209;
  let C208;
  let C214;
  let C215;
  let C213;
  let C212;
  let C218;
  let C219;
  let C217;
  let C216;
  let C222;
  let C223;
  let C221;
  let C220;
  let C226;
  let C225;
  let C224;
  let C227;
  let C230;
  let C229;
  let C228;
  let C233;
  let C234;
  let C232;
  let C231;
  const State_TickerProviderStateMixin$36$ = class State_TickerProviderStateMixin extends framework.State$(ripple.SpinKitRipple) {};
  (State_TickerProviderStateMixin$36$.new = function() {
    ticker_provider.TickerProviderStateMixin$(ripple.SpinKitRipple)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$, ticker_provider.TickerProviderStateMixin$(ripple.SpinKitRipple));
  ripple._SpinKitRippleState = class _SpinKitRippleState extends State_TickerProviderStateMixin$36$ {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$5] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation1$0] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$5], curve: C205 || CT.C205}));
      this[_animation2$0] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$5], curve: C207 || CT.C207}));
    }
    dispose() {
      this[_controller$5].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Opacity.new({opacity: 1.0 - dart.notNull(this[_animation1$0].value), child: new basic.Transform.scale({scale: this[_animation1$0].value, child: this[_itemBuilder$6](0), $creationLocationd_0dea112b090073317d4: C208 || CT.C208}), $creationLocationd_0dea112b090073317d4: C212 || CT.C212}), new basic.Opacity.new({opacity: 1.0 - dart.notNull(this[_animation2$0].value), child: new basic.Transform.scale({scale: this[_animation2$0].value, child: this[_itemBuilder$6](1), $creationLocationd_0dea112b090073317d4: C216 || CT.C216}), $creationLocationd_0dea112b090073317d4: C220 || CT.C220})]), $creationLocationd_0dea112b090073317d4: C224 || CT.C224}), $creationLocationd_0dea112b090073317d4: C227 || CT.C227});
    }
    [_itemBuilder$6](index) {
      return new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, border: box_border.Border.all({color: this.widget.color, width: this.widget.borderWidth})}), $creationLocationd_0dea112b090073317d4: C228 || CT.C228}), $creationLocationd_0dea112b090073317d4: C231 || CT.C231});
    }
  };
  (ripple._SpinKitRippleState.new = function() {
    this[_controller$5] = null;
    this[_animation1$0] = null;
    this[_animation2$0] = null;
    ripple._SpinKitRippleState.__proto__.new.call(this);
    ;
  }).prototype = ripple._SpinKitRippleState.prototype;
  dart.addTypeTests(ripple._SpinKitRippleState);
  dart.setMethodSignature(ripple._SpinKitRippleState, () => ({
    __proto__: dart.getMethods(ripple._SpinKitRippleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$6]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(ripple._SpinKitRippleState, "package:flutter_spinkit/src/ripple.dart");
  dart.setFieldSignature(ripple._SpinKitRippleState, () => ({
    __proto__: dart.getFields(ripple._SpinKitRippleState.__proto__),
    [_controller$5]: dart.fieldType(animation_controller.AnimationController),
    [_animation1$0]: dart.fieldType(animation.Animation$(core.double)),
    [_animation2$0]: dart.fieldType(animation.Animation$(core.double))
  }));
  const color$9 = dart.privateName(ring, "SpinKitRing.color");
  const size$9 = dart.privateName(ring, "SpinKitRing.size");
  const lineWidth$ = dart.privateName(ring, "SpinKitRing.lineWidth");
  const duration$9 = dart.privateName(ring, "SpinKitRing.duration");
  const controller$8 = dart.privateName(ring, "SpinKitRing.controller");
  ring.SpinKitRing = class SpinKitRing extends framework.StatefulWidget {
    get color() {
      return this[color$9];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$9];
    }
    set size(value) {
      super.size = value;
    }
    get lineWidth() {
      return this[lineWidth$];
    }
    set lineWidth(value) {
      super.lineWidth = value;
    }
    get duration() {
      return this[duration$9];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$8];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new ring._SpinKitRingState.new();
    }
  };
  (ring.SpinKitRing.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : 7;
    let size = opts && 'size' in opts ? opts.size : 50;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$9] = color;
    this[lineWidth$] = lineWidth;
    this[size$9] = size;
    this[duration$9] = duration;
    this[controller$8] = controller;
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/ring.dart", 13, 16, "color != null");
    if (!(lineWidth != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/ring.dart", 14, 16, "lineWidth != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/ring.dart", 15, 16, "size != null");
    ring.SpinKitRing.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ring.SpinKitRing.prototype;
  dart.addTypeTests(ring.SpinKitRing);
  dart.setMethodSignature(ring.SpinKitRing, () => ({
    __proto__: dart.getMethods(ring.SpinKitRing.__proto__),
    createState: dart.fnType(ring._SpinKitRingState, [])
  }));
  dart.setLibraryUri(ring.SpinKitRing, "package:flutter_spinkit/src/ring.dart");
  dart.setFieldSignature(ring.SpinKitRing, () => ({
    __proto__: dart.getFields(ring.SpinKitRing.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    lineWidth: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$6 = dart.privateName(ring, "_controller");
  const _animation1$1 = dart.privateName(ring, "_animation1");
  const _animation2$1 = dart.privateName(ring, "_animation2");
  const _animation3 = dart.privateName(ring, "_animation3");
  let C235;
  let C236;
  let C238;
  let C237;
  let C241;
  let C240;
  let C239;
  let C244;
  let C245;
  let C243;
  let C242;
  let C248;
  let C249;
  let C250;
  let C247;
  let C246;
  let C253;
  let C252;
  let C251;
  const State_SingleTickerProviderStateMixin$36$6 = class State_SingleTickerProviderStateMixin extends framework.State$(ring.SpinKitRing) {};
  (State_SingleTickerProviderStateMixin$36$6.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(ring.SpinKitRing)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$6.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$6.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$6, ticker_provider.SingleTickerProviderStateMixin$(ring.SpinKitRing));
  ring._SpinKitRingState = class _SpinKitRingState extends State_SingleTickerProviderStateMixin$36$6 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$6] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation1$1] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$6], curve: C235 || CT.C235}));
      this[_animation2$1] = new (TweenOfdouble()).new({begin: -2 / 3, end: 1 / 2}).animate(new animations.CurvedAnimation.new({parent: this[_controller$6], curve: C236 || CT.C236}));
      this[_animation3] = new (TweenOfdouble()).new({begin: 0.25, end: 5 / 6}).animate(new animations.CurvedAnimation.new({parent: this[_controller$6], curve: C237 || CT.C237}));
    }
    dispose() {
      this[_controller$6].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateZ(dart.notNull(this[_animation1$1].value) * 5 * 3.141592653589793 / 6), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.CustomPaint.new({foregroundPainter: new ring.RingPainter.new({paintWidth: this.widget.lineWidth, trackColor: this.widget.color, progressPercent: this[_animation3].value, startAngle: 3.141592653589793 * dart.notNull(this[_animation2$1].value)}), $creationLocationd_0dea112b090073317d4: C239 || CT.C239}), $creationLocationd_0dea112b090073317d4: C242 || CT.C242}), $creationLocationd_0dea112b090073317d4: C246 || CT.C246}), $creationLocationd_0dea112b090073317d4: C251 || CT.C251});
    }
  };
  (ring._SpinKitRingState.new = function() {
    this[_controller$6] = null;
    this[_animation1$1] = null;
    this[_animation2$1] = null;
    this[_animation3] = null;
    ring._SpinKitRingState.__proto__.new.call(this);
    ;
  }).prototype = ring._SpinKitRingState.prototype;
  dart.addTypeTests(ring._SpinKitRingState);
  dart.setMethodSignature(ring._SpinKitRingState, () => ({
    __proto__: dart.getMethods(ring._SpinKitRingState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ring._SpinKitRingState, "package:flutter_spinkit/src/ring.dart");
  dart.setFieldSignature(ring._SpinKitRingState, () => ({
    __proto__: dart.getFields(ring._SpinKitRingState.__proto__),
    [_controller$6]: dart.fieldType(animation_controller.AnimationController),
    [_animation1$1]: dart.fieldType(animation.Animation$(core.double)),
    [_animation2$1]: dart.fieldType(animation.Animation$(core.double)),
    [_animation3]: dart.fieldType(animation.Animation$(core.double))
  }));
  const paintWidth$ = dart.privateName(ring, "RingPainter.paintWidth");
  const trackPaint = dart.privateName(ring, "RingPainter.trackPaint");
  const trackColor$ = dart.privateName(ring, "RingPainter.trackColor");
  const progressPercent$ = dart.privateName(ring, "RingPainter.progressPercent");
  const startAngle$ = dart.privateName(ring, "RingPainter.startAngle");
  ring.RingPainter = class RingPainter extends custom_paint.CustomPainter {
    get paintWidth() {
      return this[paintWidth$];
    }
    set paintWidth(value) {
      super.paintWidth = value;
    }
    get trackPaint() {
      return this[trackPaint];
    }
    set trackPaint(value) {
      super.trackPaint = value;
    }
    get trackColor() {
      return this[trackColor$];
    }
    set trackColor(value) {
      super.trackColor = value;
    }
    get progressPercent() {
      return this[progressPercent$];
    }
    set progressPercent(value) {
      super.progressPercent = value;
    }
    get startAngle() {
      return this[startAngle$];
    }
    set startAngle(value) {
      super.startAngle = value;
    }
    paint(canvas, size) {
      let center = new ui.Offset.new(dart.notNull(size.width) / 2, dart.notNull(size.height) / 2);
      let radius = (math.min(core.double, size.width, size.height) - dart.notNull(this.paintWidth)) / 2;
      canvas.drawArc(new ui.Rect.fromCircle({center: center, radius: radius}), this.startAngle, 2 * 3.141592653589793 * dart.notNull(this.progressPercent), false, this.trackPaint);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (ring.RingPainter.new = function(opts) {
    let t0;
    let paintWidth = opts && 'paintWidth' in opts ? opts.paintWidth : null;
    let progressPercent = opts && 'progressPercent' in opts ? opts.progressPercent : null;
    let startAngle = opts && 'startAngle' in opts ? opts.startAngle : null;
    let trackColor = opts && 'trackColor' in opts ? opts.trackColor : null;
    this[paintWidth$] = paintWidth;
    this[progressPercent$] = progressPercent;
    this[startAngle$] = startAngle;
    this[trackColor$] = trackColor;
    this[trackPaint] = (t0 = ui.Paint.new(), t0.color = trackColor, t0.style = ui.PaintingStyle.stroke, t0.strokeWidth = paintWidth, t0.strokeCap = ui.StrokeCap.square, t0);
    ring.RingPainter.__proto__.new.call(this);
    ;
  }).prototype = ring.RingPainter.prototype;
  dart.addTypeTests(ring.RingPainter);
  dart.setMethodSignature(ring.RingPainter, () => ({
    __proto__: dart.getMethods(ring.RingPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(ring.RingPainter, "package:flutter_spinkit/src/ring.dart");
  dart.setFieldSignature(ring.RingPainter, () => ({
    __proto__: dart.getFields(ring.RingPainter.__proto__),
    paintWidth: dart.finalFieldType(core.double),
    trackPaint: dart.finalFieldType(ui.Paint),
    trackColor: dart.finalFieldType(ui.Color),
    progressPercent: dart.finalFieldType(core.double),
    startAngle: dart.finalFieldType(core.double)
  }));
  ring.SpinKitRingCurve = class SpinKitRingCurve extends curves.Curve {
    transform(t) {
      return dart.notNull(t) <= 0.5 ? 2 * dart.notNull(t) : 2 * (1 - dart.notNull(t));
    }
  };
  (ring.SpinKitRingCurve.new = function() {
    ring.SpinKitRingCurve.__proto__.new.call(this);
    ;
  }).prototype = ring.SpinKitRingCurve.prototype;
  dart.addTypeTests(ring.SpinKitRingCurve);
  dart.setLibraryUri(ring.SpinKitRingCurve, "package:flutter_spinkit/src/ring.dart");
  let C254;
  const color$10 = dart.privateName(pumping_heart, "SpinKitPumpingHeart.color");
  const size$10 = dart.privateName(pumping_heart, "SpinKitPumpingHeart.size");
  const itemBuilder$9 = dart.privateName(pumping_heart, "SpinKitPumpingHeart.itemBuilder");
  const duration$10 = dart.privateName(pumping_heart, "SpinKitPumpingHeart.duration");
  const controller$9 = dart.privateName(pumping_heart, "SpinKitPumpingHeart.controller");
  pumping_heart.SpinKitPumpingHeart = class SpinKitPumpingHeart extends framework.StatefulWidget {
    get color() {
      return this[color$10];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$10];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$9];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$10];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$9];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new pumping_heart._SpinKitPumpingHeartState.new();
    }
  };
  (pumping_heart.SpinKitPumpingHeart.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C254 || CT.C254;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$10] = color;
    this[size$10] = size;
    this[itemBuilder$9] = itemBuilder;
    this[duration$10] = duration;
    this[controller$9] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/pumping_heart.dart", 14, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/pumping_heart.dart", 16, 16, "size != null");
    pumping_heart.SpinKitPumpingHeart.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pumping_heart.SpinKitPumpingHeart.prototype;
  dart.addTypeTests(pumping_heart.SpinKitPumpingHeart);
  dart.setMethodSignature(pumping_heart.SpinKitPumpingHeart, () => ({
    __proto__: dart.getMethods(pumping_heart.SpinKitPumpingHeart.__proto__),
    createState: dart.fnType(pumping_heart._SpinKitPumpingHeartState, [])
  }));
  dart.setLibraryUri(pumping_heart.SpinKitPumpingHeart, "package:flutter_spinkit/src/pumping_heart.dart");
  dart.setFieldSignature(pumping_heart.SpinKitPumpingHeart, () => ({
    __proto__: dart.getFields(pumping_heart.SpinKitPumpingHeart.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$7 = dart.privateName(pumping_heart, "_controller");
  const _animation$0 = dart.privateName(pumping_heart, "_animation");
  let C256;
  let C255;
  const _itemBuilder$7 = dart.privateName(pumping_heart, "_itemBuilder");
  let C259;
  let C260;
  let C258;
  let C257;
  let C263;
  let C264;
  let C265;
  let C262;
  let C261;
  const State_SingleTickerProviderStateMixin$36$7 = class State_SingleTickerProviderStateMixin extends framework.State$(pumping_heart.SpinKitPumpingHeart) {};
  (State_SingleTickerProviderStateMixin$36$7.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(pumping_heart.SpinKitPumpingHeart)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$7.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$7.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$7, ticker_provider.SingleTickerProviderStateMixin$(pumping_heart.SpinKitPumpingHeart));
  pumping_heart._SpinKitPumpingHeartState = class _SpinKitPumpingHeartState extends State_SingleTickerProviderStateMixin$36$7 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$7] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat(), t0$);
      this[_animation$0] = new (TweenOfdouble()).new({begin: 1.0, end: 1.25}).animate(new animations.CurvedAnimation.new({parent: this[_controller$7], curve: C255 || CT.C255}));
    }
    dispose() {
      this[_controller$7].dispose();
      super.dispose();
    }
    build(context) {
      return new transitions.ScaleTransition.new({scale: this[_animation$0], child: this[_itemBuilder$7](0), $creationLocationd_0dea112b090073317d4: C257 || CT.C257});
    }
    [_itemBuilder$7](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new icon.Icon.new(icons.Icons.favorite, {color: this.widget.color, size: this.widget.size, $creationLocationd_0dea112b090073317d4: C261 || CT.C261});
    }
  };
  (pumping_heart._SpinKitPumpingHeartState.new = function() {
    this[_controller$7] = null;
    this[_animation$0] = null;
    pumping_heart._SpinKitPumpingHeartState.__proto__.new.call(this);
    ;
  }).prototype = pumping_heart._SpinKitPumpingHeartState.prototype;
  dart.addTypeTests(pumping_heart._SpinKitPumpingHeartState);
  dart.setMethodSignature(pumping_heart._SpinKitPumpingHeartState, () => ({
    __proto__: dart.getMethods(pumping_heart._SpinKitPumpingHeartState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$7]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(pumping_heart._SpinKitPumpingHeartState, "package:flutter_spinkit/src/pumping_heart.dart");
  dart.setFieldSignature(pumping_heart._SpinKitPumpingHeartState, () => ({
    __proto__: dart.getFields(pumping_heart._SpinKitPumpingHeartState.__proto__),
    [_controller$7]: dart.fieldType(animation_controller.AnimationController),
    [_animation$0]: dart.fieldType(animation.Animation$(core.double))
  }));
  pumping_heart._PumpCurve = class _PumpCurve extends curves.Curve {
    transform(t) {
      if (dart.notNull(t) >= 0.0 && dart.notNull(t) < 0.22) {
        return math.pow(t, 1.0) * 4.54545454;
      } else if (dart.notNull(t) >= 0.22 && dart.notNull(t) < 0.44) {
        return 1.0 - math.pow(dart.notNull(t) - 0.22, 1.0) * 4.54545454;
      } else if (dart.notNull(t) >= 0.44 && dart.notNull(t) < 0.5) {
        return 0.0;
      } else if (dart.notNull(t) >= 0.5 && dart.notNull(t) < 0.72) {
        return math.pow(dart.notNull(t) - 0.5, 1.0) * 2.27272727;
      } else if (dart.notNull(t) >= 0.72 && dart.notNull(t) < 0.94) {
        return 0.5 - math.pow(dart.notNull(t) - 0.72, 1.0) * 2.27272727;
      }
      return 0.0;
    }
  };
  (pumping_heart._PumpCurve.new = function() {
    pumping_heart._PumpCurve.__proto__.new.call(this);
    ;
  }).prototype = pumping_heart._PumpCurve.prototype;
  dart.addTypeTests(pumping_heart._PumpCurve);
  dart.setLibraryUri(pumping_heart._PumpCurve, "package:flutter_spinkit/src/pumping_heart.dart");
  let C266;
  const color$11 = dart.privateName(pulse, "SpinKitPulse.color");
  const size$11 = dart.privateName(pulse, "SpinKitPulse.size");
  const itemBuilder$10 = dart.privateName(pulse, "SpinKitPulse.itemBuilder");
  const duration$11 = dart.privateName(pulse, "SpinKitPulse.duration");
  const controller$10 = dart.privateName(pulse, "SpinKitPulse.controller");
  pulse.SpinKitPulse = class SpinKitPulse extends framework.StatefulWidget {
    get color() {
      return this[color$11];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$11];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$10];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$11];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$10];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new pulse._SpinKitPulseState.new();
    }
  };
  (pulse.SpinKitPulse.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C266 || CT.C266;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$11] = color;
    this[size$11] = size;
    this[itemBuilder$10] = itemBuilder;
    this[duration$11] = duration;
    this[controller$10] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/pulse.dart", 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/pulse.dart", 13, 16, "size != null");
    pulse.SpinKitPulse.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pulse.SpinKitPulse.prototype;
  dart.addTypeTests(pulse.SpinKitPulse);
  dart.setMethodSignature(pulse.SpinKitPulse, () => ({
    __proto__: dart.getMethods(pulse.SpinKitPulse.__proto__),
    createState: dart.fnType(pulse._SpinKitPulseState, [])
  }));
  dart.setLibraryUri(pulse.SpinKitPulse, "package:flutter_spinkit/src/pulse.dart");
  dart.setFieldSignature(pulse.SpinKitPulse, () => ({
    __proto__: dart.getFields(pulse.SpinKitPulse.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$8 = dart.privateName(pulse, "_controller");
  const _animation$1 = dart.privateName(pulse, "_animation");
  const _itemBuilder$8 = dart.privateName(pulse, "_itemBuilder");
  let C269;
  let C268;
  let C267;
  let C272;
  let C273;
  let C271;
  let C270;
  let C276;
  let C277;
  let C275;
  let C274;
  let C280;
  let C279;
  let C278;
  let C281;
  const State_SingleTickerProviderStateMixin$36$8 = class State_SingleTickerProviderStateMixin extends framework.State$(pulse.SpinKitPulse) {};
  (State_SingleTickerProviderStateMixin$36$8.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(pulse.SpinKitPulse)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$8.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$8.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$8, ticker_provider.SingleTickerProviderStateMixin$(pulse.SpinKitPulse));
  pulse._SpinKitPulseState = class _SpinKitPulseState extends State_SingleTickerProviderStateMixin$36$8 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$8] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation$1] = new tween.CurveTween.new({curve: curves.Curves.easeInOut}).animate(this[_controller$8]);
    }
    dispose() {
      this[_controller$8].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.Opacity.new({opacity: 1.0 - dart.notNull(this[_animation$1].value), child: new basic.Transform.scale({scale: this[_animation$1].value, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder$8](0), $creationLocationd_0dea112b090073317d4: C267 || CT.C267}), $creationLocationd_0dea112b090073317d4: C270 || CT.C270}), $creationLocationd_0dea112b090073317d4: C274 || CT.C274}), $creationLocationd_0dea112b090073317d4: C278 || CT.C278});
    }
    [_itemBuilder$8](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C281 || CT.C281});
    }
  };
  (pulse._SpinKitPulseState.new = function() {
    this[_controller$8] = null;
    this[_animation$1] = null;
    pulse._SpinKitPulseState.__proto__.new.call(this);
    ;
  }).prototype = pulse._SpinKitPulseState.prototype;
  dart.addTypeTests(pulse._SpinKitPulseState);
  dart.setMethodSignature(pulse._SpinKitPulseState, () => ({
    __proto__: dart.getMethods(pulse._SpinKitPulseState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$8]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(pulse._SpinKitPulseState, "package:flutter_spinkit/src/pulse.dart");
  dart.setFieldSignature(pulse._SpinKitPulseState, () => ({
    __proto__: dart.getFields(pulse._SpinKitPulseState.__proto__),
    [_controller$8]: dart.fieldType(animation_controller.AnimationController),
    [_animation$1]: dart.fieldType(animation.Animation$(core.double))
  }));
  const size$12 = dart.privateName(pouring_hour_glass, "SpinKitPouringHourglass.size");
  const color$12 = dart.privateName(pouring_hour_glass, "SpinKitPouringHourglass.color");
  const duration$12 = dart.privateName(pouring_hour_glass, "SpinKitPouringHourglass.duration");
  const controller$11 = dart.privateName(pouring_hour_glass, "SpinKitPouringHourglass.controller");
  pouring_hour_glass.SpinKitPouringHourglass = class SpinKitPouringHourglass extends framework.StatefulWidget {
    get size() {
      return this[size$12];
    }
    set size(value) {
      super.size = value;
    }
    get color() {
      return this[color$12];
    }
    set color(value) {
      super.color = value;
    }
    get duration() {
      return this[duration$12];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$11];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new pouring_hour_glass._SpinKitPouringHourglassState.new();
    }
  };
  (pouring_hour_glass.SpinKitPouringHourglass.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let duration = opts && 'duration' in opts ? opts.duration : C254 || CT.C254;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$12] = color;
    this[size$12] = size;
    this[duration$12] = duration;
    this[controller$11] = controller;
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/pouring_hour_glass.dart", 13, 16, "color != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/pouring_hour_glass.dart", 14, 16, "size != null");
    pouring_hour_glass.SpinKitPouringHourglass.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pouring_hour_glass.SpinKitPouringHourglass.prototype;
  dart.addTypeTests(pouring_hour_glass.SpinKitPouringHourglass);
  dart.setMethodSignature(pouring_hour_glass.SpinKitPouringHourglass, () => ({
    __proto__: dart.getMethods(pouring_hour_glass.SpinKitPouringHourglass.__proto__),
    createState: dart.fnType(pouring_hour_glass._SpinKitPouringHourglassState, [])
  }));
  dart.setLibraryUri(pouring_hour_glass.SpinKitPouringHourglass, "package:flutter_spinkit/src/pouring_hour_glass.dart");
  dart.setFieldSignature(pouring_hour_glass.SpinKitPouringHourglass, () => ({
    __proto__: dart.getFields(pouring_hour_glass.SpinKitPouringHourglass.__proto__),
    size: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$9 = dart.privateName(pouring_hour_glass, "_controller");
  const _pouringAnimation = dart.privateName(pouring_hour_glass, "_pouringAnimation");
  const _rotationAnimation = dart.privateName(pouring_hour_glass, "_rotationAnimation");
  let C282;
  let C284;
  let C283;
  let C287;
  let C286;
  let C285;
  let C290;
  let C291;
  let C289;
  let C288;
  let C294;
  let C293;
  let C292;
  let C295;
  const State_SingleTickerProviderStateMixin$36$9 = class State_SingleTickerProviderStateMixin extends framework.State$(pouring_hour_glass.SpinKitPouringHourglass) {};
  (State_SingleTickerProviderStateMixin$36$9.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(pouring_hour_glass.SpinKitPouringHourglass)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$9.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$9.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$9, ticker_provider.SingleTickerProviderStateMixin$(pouring_hour_glass.SpinKitPouringHourglass));
  pouring_hour_glass._SpinKitPouringHourglassState = class _SpinKitPouringHourglassState extends State_SingleTickerProviderStateMixin$36$9 {
    initState() {
      let t0, t0$, t0$0;
      super.initState();
      this[_controller$9] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_pouringAnimation] = (t0$0 = new animations.CurvedAnimation.new({parent: this[_controller$9], curve: C282 || CT.C282}), t0$0.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$0);
      this[_rotationAnimation] = new (TweenOfdouble()).new({begin: 0.0, end: 0.5}).animate(new animations.CurvedAnimation.new({parent: this[_controller$9], curve: C283 || CT.C283}));
    }
    dispose() {
      this[_controller$9].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new transitions.RotationTransition.new({turns: this[_rotationAnimation], child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.7071067811865476), child: new basic.CustomPaint.new({painter: new pouring_hour_glass._HourGlassPaint.new({poured: this[_pouringAnimation].value, color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C285 || CT.C285}), $creationLocationd_0dea112b090073317d4: C288 || CT.C288}), $creationLocationd_0dea112b090073317d4: C292 || CT.C292}), $creationLocationd_0dea112b090073317d4: C295 || CT.C295});
    }
  };
  (pouring_hour_glass._SpinKitPouringHourglassState.new = function() {
    this[_controller$9] = null;
    this[_pouringAnimation] = null;
    this[_rotationAnimation] = null;
    pouring_hour_glass._SpinKitPouringHourglassState.__proto__.new.call(this);
    ;
  }).prototype = pouring_hour_glass._SpinKitPouringHourglassState.prototype;
  dart.addTypeTests(pouring_hour_glass._SpinKitPouringHourglassState);
  dart.setMethodSignature(pouring_hour_glass._SpinKitPouringHourglassState, () => ({
    __proto__: dart.getMethods(pouring_hour_glass._SpinKitPouringHourglassState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(pouring_hour_glass._SpinKitPouringHourglassState, "package:flutter_spinkit/src/pouring_hour_glass.dart");
  dart.setFieldSignature(pouring_hour_glass._SpinKitPouringHourglassState, () => ({
    __proto__: dart.getFields(pouring_hour_glass._SpinKitPouringHourglassState.__proto__),
    [_controller$9]: dart.fieldType(animation_controller.AnimationController),
    [_pouringAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_rotationAnimation]: dart.fieldType(animation.Animation$(core.double))
  }));
  const _paint = dart.privateName(pouring_hour_glass, "_paint");
  const _powderPaint = dart.privateName(pouring_hour_glass, "_powderPaint");
  pouring_hour_glass._HourGlassPaint = class _HourGlassPaint extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let t0, t0$, t0$0, t0$1;
      let centerX = dart.notNull(size.width) / 2;
      let halfHeight = dart.notNull(size.height) / 2;
      let hourglassWidth = math.min(core.double, centerX * 0.8, halfHeight);
      let gapWidth = math.max(core.double, 3.0, hourglassWidth * 0.05);
      let yPadding = gapWidth / 2;
      let top = yPadding;
      let bottom = dart.notNull(size.height) - yPadding;
      this[_paint].strokeWidth = gapWidth;
      let hourglassPath = (t0 = ui.Path.new(), t0.moveTo(centerX - hourglassWidth, top), t0.lineTo(centerX + hourglassWidth, top), t0.lineTo(centerX + gapWidth, halfHeight), t0.lineTo(centerX + hourglassWidth, bottom), t0.lineTo(centerX - hourglassWidth, bottom), t0.lineTo(centerX - gapWidth, halfHeight), t0.close(), t0);
      canvas.drawPath(hourglassPath, this[_paint]);
      let upperPart = (t0$ = ui.Path.new(), t0$.moveTo(0.0, top), t0$.addRect(new ui.Rect.fromLTRB(0.0, halfHeight * dart.notNull(this.poured), size.width, halfHeight)), t0$);
      canvas.drawPath(ui.Path.combine(ui.PathOperation.intersect, hourglassPath, upperPart), this[_powderPaint]);
      let lowerPartPath = (t0$0 = ui.Path.new(), t0$0.moveTo(centerX, bottom), t0$0.relativeLineTo(hourglassWidth * dart.notNull(this.poured), 0.0), t0$0.lineTo(centerX, bottom - dart.notNull(this.poured) * halfHeight - gapWidth), t0$0.lineTo(centerX - hourglassWidth * dart.notNull(this.poured), bottom), t0$0.close(), t0$0);
      let lowerPart = ui.Path.combine(ui.PathOperation.intersect, lowerPartPath, (t0$1 = ui.Path.new(), t0$1.addRect(new ui.Rect.fromLTRB(0.0, halfHeight, size.width, size.height)), t0$1));
      canvas.drawPath(lowerPart, this[_powderPaint]);
      canvas.drawLine(new ui.Offset.new(centerX, halfHeight), new ui.Offset.new(centerX, bottom), this[_paint]);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (pouring_hour_glass._HourGlassPaint.new = function(opts) {
    let t0, t0$;
    let poured = opts && 'poured' in opts ? opts.poured : null;
    let color = opts && 'color' in opts ? opts.color : null;
    this.poured = poured;
    this[_paint] = (t0 = ui.Paint.new(), t0.style = ui.PaintingStyle.stroke, t0.color = color, t0);
    this[_powderPaint] = (t0$ = ui.Paint.new(), t0$.style = ui.PaintingStyle.fill, t0$.color = color, t0$);
    pouring_hour_glass._HourGlassPaint.__proto__.new.call(this);
    ;
  }).prototype = pouring_hour_glass._HourGlassPaint.prototype;
  dart.addTypeTests(pouring_hour_glass._HourGlassPaint);
  dart.setMethodSignature(pouring_hour_glass._HourGlassPaint, () => ({
    __proto__: dart.getMethods(pouring_hour_glass._HourGlassPaint.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(pouring_hour_glass._HourGlassPaint, "package:flutter_spinkit/src/pouring_hour_glass.dart");
  dart.setFieldSignature(pouring_hour_glass._HourGlassPaint, () => ({
    __proto__: dart.getFields(pouring_hour_glass._HourGlassPaint.__proto__),
    poured: dart.finalFieldType(core.double),
    [_paint]: dart.finalFieldType(ui.Paint),
    [_powderPaint]: dart.finalFieldType(ui.Paint)
  }));
  const color$13 = dart.privateName(hour_glass, "SpinKitHourGlass.color");
  const size$13 = dart.privateName(hour_glass, "SpinKitHourGlass.size");
  const duration$13 = dart.privateName(hour_glass, "SpinKitHourGlass.duration");
  const controller$12 = dart.privateName(hour_glass, "SpinKitHourGlass.controller");
  hour_glass.SpinKitHourGlass = class SpinKitHourGlass extends framework.StatefulWidget {
    get color() {
      return this[color$13];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$13];
    }
    set size(value) {
      super.size = value;
    }
    get duration() {
      return this[duration$13];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$12];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new hour_glass._SpinKitHourGlassState.new();
    }
  };
  (hour_glass.SpinKitHourGlass.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$13] = color;
    this[size$13] = size;
    this[duration$13] = duration;
    this[controller$12] = controller;
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/hour_glass.dart", 12, 16, "color != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/hour_glass.dart", 13, 16, "size != null");
    hour_glass.SpinKitHourGlass.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = hour_glass.SpinKitHourGlass.prototype;
  dart.addTypeTests(hour_glass.SpinKitHourGlass);
  dart.setMethodSignature(hour_glass.SpinKitHourGlass, () => ({
    __proto__: dart.getMethods(hour_glass.SpinKitHourGlass.__proto__),
    createState: dart.fnType(hour_glass._SpinKitHourGlassState, [])
  }));
  dart.setLibraryUri(hour_glass.SpinKitHourGlass, "package:flutter_spinkit/src/hour_glass.dart");
  dart.setFieldSignature(hour_glass.SpinKitHourGlass, () => ({
    __proto__: dart.getFields(hour_glass.SpinKitHourGlass.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$10 = dart.privateName(hour_glass, "_controller");
  const _animation$2 = dart.privateName(hour_glass, "_animation");
  let C298;
  let C297;
  let C296;
  let C301;
  let C300;
  let C299;
  let C304;
  let C305;
  let C306;
  let C303;
  let C302;
  let C307;
  const State_SingleTickerProviderStateMixin$36$10 = class State_SingleTickerProviderStateMixin extends framework.State$(hour_glass.SpinKitHourGlass) {};
  (State_SingleTickerProviderStateMixin$36$10.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(hour_glass.SpinKitHourGlass)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$10.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$10.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$10, ticker_provider.SingleTickerProviderStateMixin$(hour_glass.SpinKitHourGlass));
  hour_glass._SpinKitHourGlassState = class _SpinKitHourGlassState extends State_SingleTickerProviderStateMixin$36$10 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$10] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation$2] = new (TweenOfdouble()).new({begin: 0.0, end: 8.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$10], curve: C165 || CT.C165}));
    }
    dispose() {
      this[_controller$10].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateZ(dart.notNull(this[_animation$2].value) * 3.141592653589793), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.CustomPaint.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), $creationLocationd_0dea112b090073317d4: C296 || CT.C296}), painter: new hour_glass._HourGlassPainter.new({color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C299 || CT.C299}), $creationLocationd_0dea112b090073317d4: C302 || CT.C302}), $creationLocationd_0dea112b090073317d4: C307 || CT.C307});
    }
  };
  (hour_glass._SpinKitHourGlassState.new = function() {
    this[_controller$10] = null;
    this[_animation$2] = null;
    hour_glass._SpinKitHourGlassState.__proto__.new.call(this);
    ;
  }).prototype = hour_glass._SpinKitHourGlassState.prototype;
  dart.addTypeTests(hour_glass._SpinKitHourGlassState);
  dart.setMethodSignature(hour_glass._SpinKitHourGlassState, () => ({
    __proto__: dart.getMethods(hour_glass._SpinKitHourGlassState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(hour_glass._SpinKitHourGlassState, "package:flutter_spinkit/src/hour_glass.dart");
  dart.setFieldSignature(hour_glass._SpinKitHourGlassState, () => ({
    __proto__: dart.getFields(hour_glass._SpinKitHourGlassState.__proto__),
    [_controller$10]: dart.fieldType(animation_controller.AnimationController),
    [_animation$2]: dart.fieldType(animation.Animation$(core.double))
  }));
  const _paint$ = dart.privateName(hour_glass, "_paint");
  hour_glass._HourGlassPainter = class _HourGlassPainter extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let rect = new ui.Rect.fromPoints(ui.Offset.zero, new ui.Offset.new(size.width, size.height));
      canvas.drawArc(rect, 0.0, this.getRadian(this.weight), true, this[_paint$]);
      canvas.drawArc(rect, this.getRadian(180.0), this.getRadian(this.weight), true, this[_paint$]);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
    getRadian(angle) {
      return 3.141592653589793 / 180 * dart.notNull(angle);
    }
  };
  (hour_glass._HourGlassPainter.new = function(opts) {
    let t0;
    let weight = opts && 'weight' in opts ? opts.weight : 90;
    let color = opts && 'color' in opts ? opts.color : null;
    this.weight = weight;
    this[_paint$] = (t0 = ui.Paint.new(), t0.color = color, t0.strokeWidth = 1.0, t0);
    hour_glass._HourGlassPainter.__proto__.new.call(this);
    ;
  }).prototype = hour_glass._HourGlassPainter.prototype;
  dart.addTypeTests(hour_glass._HourGlassPainter);
  dart.setMethodSignature(hour_glass._HourGlassPainter, () => ({
    __proto__: dart.getMethods(hour_glass._HourGlassPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object]),
    getRadian: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(hour_glass._HourGlassPainter, "package:flutter_spinkit/src/hour_glass.dart");
  dart.setFieldSignature(hour_glass._HourGlassPainter, () => ({
    __proto__: dart.getFields(hour_glass._HourGlassPainter.__proto__),
    [_paint$]: dart.finalFieldType(ui.Paint),
    weight: dart.finalFieldType(core.double)
  }));
  const color$14 = dart.privateName(folding_cube, "SpinKitFoldingCube.color");
  const size$14 = dart.privateName(folding_cube, "SpinKitFoldingCube.size");
  const itemBuilder$11 = dart.privateName(folding_cube, "SpinKitFoldingCube.itemBuilder");
  const duration$14 = dart.privateName(folding_cube, "SpinKitFoldingCube.duration");
  const controller$13 = dart.privateName(folding_cube, "SpinKitFoldingCube.controller");
  folding_cube.SpinKitFoldingCube = class SpinKitFoldingCube extends framework.StatefulWidget {
    get color() {
      return this[color$14];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$14];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$11];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$14];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$13];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new folding_cube._SpinKitFoldingCubeState.new();
    }
  };
  (folding_cube.SpinKitFoldingCube.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C254 || CT.C254;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$14] = color;
    this[size$14] = size;
    this[itemBuilder$11] = itemBuilder;
    this[duration$14] = duration;
    this[controller$13] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart", 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/folding_cube.dart", 14, 16, "size != null");
    folding_cube.SpinKitFoldingCube.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = folding_cube.SpinKitFoldingCube.prototype;
  dart.addTypeTests(folding_cube.SpinKitFoldingCube);
  dart.setMethodSignature(folding_cube.SpinKitFoldingCube, () => ({
    __proto__: dart.getMethods(folding_cube.SpinKitFoldingCube.__proto__),
    createState: dart.fnType(folding_cube._SpinKitFoldingCubeState, [])
  }));
  dart.setLibraryUri(folding_cube.SpinKitFoldingCube, "package:flutter_spinkit/src/folding_cube.dart");
  dart.setFieldSignature(folding_cube.SpinKitFoldingCube, () => ({
    __proto__: dart.getFields(folding_cube.SpinKitFoldingCube.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$11 = dart.privateName(folding_cube, "_controller");
  const _rotate1 = dart.privateName(folding_cube, "_rotate1");
  const _rotate2 = dart.privateName(folding_cube, "_rotate2");
  const _rotate3 = dart.privateName(folding_cube, "_rotate3");
  const _rotate4 = dart.privateName(folding_cube, "_rotate4");
  let C308;
  let C309;
  let C310;
  let C311;
  const _cube$ = dart.privateName(folding_cube, "_cube");
  let C314;
  let C313;
  let C312;
  let C317;
  let C316;
  let C315;
  let C319;
  let C318;
  let C322;
  let C321;
  let C320;
  let C325;
  let C324;
  let C323;
  const _itemBuilder$9 = dart.privateName(folding_cube, "_itemBuilder");
  let C328;
  let C329;
  let C327;
  let C326;
  let C332;
  let C333;
  let C331;
  let C330;
  let C336;
  let C337;
  let C338;
  let C335;
  let C334;
  let C341;
  let C342;
  let C340;
  let C339;
  let C345;
  let C346;
  let C344;
  let C343;
  let C349;
  let C350;
  let C351;
  let C348;
  let C347;
  let C354;
  let C353;
  let C352;
  const State_SingleTickerProviderStateMixin$36$11 = class State_SingleTickerProviderStateMixin extends framework.State$(folding_cube.SpinKitFoldingCube) {};
  (State_SingleTickerProviderStateMixin$36$11.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(folding_cube.SpinKitFoldingCube)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$11.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$11.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$11, ticker_provider.SingleTickerProviderStateMixin$(folding_cube.SpinKitFoldingCube));
  folding_cube._SpinKitFoldingCubeState = class _SpinKitFoldingCubeState extends State_SingleTickerProviderStateMixin$36$11 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$11] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.addStatusListener(utils.autoReverseFn(dart.fn(() => this[_controller$11], VoidToAnimationController()))), t0$.forward(), t0$);
      this[_rotate1] = new (TweenOfdouble()).new({begin: 0.0, end: 180.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$11], curve: C308 || CT.C308}));
      this[_rotate2] = new (TweenOfdouble()).new({begin: 0.0, end: 180.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$11], curve: C309 || CT.C309}));
      this[_rotate3] = new (TweenOfdouble()).new({begin: 0.0, end: 180.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$11], curve: C310 || CT.C310}));
      this[_rotate4] = new (TweenOfdouble()).new({begin: 0.0, end: 180.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$11], curve: C311 || CT.C311}));
    }
    dispose() {
      this[_controller$11].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Center.new({child: new basic.Transform.rotate({angle: -45.0 * 0.0174533, child: new basic.Stack.new({children: JSArrayOfWidget().of([this[_cube$](1, {animation: this[_rotate2]}), this[_cube$](2, {animation: this[_rotate3]}), this[_cube$](3, {animation: this[_rotate4]}), this[_cube$](4, {animation: this[_rotate1]})]), $creationLocationd_0dea112b090073317d4: C312 || CT.C312}), $creationLocationd_0dea112b090073317d4: C315 || CT.C315}), $creationLocationd_0dea112b090073317d4: C318 || CT.C318}), $creationLocationd_0dea112b090073317d4: C320 || CT.C320}), $creationLocationd_0dea112b090073317d4: C323 || CT.C323});
    }
    [_cube$](i, opts) {
      let t0;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let _size = dart.notNull(this.widget.size) * 0.5;
      let _position = dart.notNull(this.widget.size) * 0.5;
      let _tRotate = (t0 = vector_math_64.Matrix4.identity(), t0.rotateY(dart.notNull(animation.value) * 0.0174533), t0);
      return new basic.Positioned.fill({top: _position, left: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(90.0 * (dart.notNull(i) - 1) * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new basic.Transform.new({transform: _tRotate, alignment: alignment.Alignment.centerLeft, child: new basic.Opacity.new({opacity: 1.0 - dart.notNull(animation.value) / 180.0, child: new basic.SizedBox.fromSize({size: new ui.Size.square(_size / 4), child: this[_itemBuilder$9](dart.notNull(i) - 1), $creationLocationd_0dea112b090073317d4: C326 || CT.C326}), $creationLocationd_0dea112b090073317d4: C330 || CT.C330}), $creationLocationd_0dea112b090073317d4: C334 || CT.C334}), $creationLocationd_0dea112b090073317d4: C339 || CT.C339}), $creationLocationd_0dea112b090073317d4: C343 || CT.C343}), $creationLocationd_0dea112b090073317d4: C347 || CT.C347});
    }
    [_itemBuilder$9](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C352 || CT.C352});
    }
  };
  (folding_cube._SpinKitFoldingCubeState.new = function() {
    this[_controller$11] = null;
    this[_rotate1] = null;
    this[_rotate2] = null;
    this[_rotate3] = null;
    this[_rotate4] = null;
    folding_cube._SpinKitFoldingCubeState.__proto__.new.call(this);
    ;
  }).prototype = folding_cube._SpinKitFoldingCubeState.prototype;
  dart.addTypeTests(folding_cube._SpinKitFoldingCubeState);
  dart.setMethodSignature(folding_cube._SpinKitFoldingCubeState, () => ({
    __proto__: dart.getMethods(folding_cube._SpinKitFoldingCubeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_cube$]: dart.fnType(framework.Widget, [core.int], {animation: animation.Animation$(core.double)}, {}),
    [_itemBuilder$9]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(folding_cube._SpinKitFoldingCubeState, "package:flutter_spinkit/src/folding_cube.dart");
  dart.setFieldSignature(folding_cube._SpinKitFoldingCubeState, () => ({
    __proto__: dart.getFields(folding_cube._SpinKitFoldingCubeState.__proto__),
    [_controller$11]: dart.fieldType(animation_controller.AnimationController),
    [_rotate1]: dart.fieldType(animation.Animation$(core.double)),
    [_rotate2]: dart.fieldType(animation.Animation$(core.double)),
    [_rotate3]: dart.fieldType(animation.Animation$(core.double)),
    [_rotate4]: dart.fieldType(animation.Animation$(core.double))
  }));
  const color$15 = dart.privateName(fading_grid, "SpinKitFadingGrid.color");
  const shape$1 = dart.privateName(fading_grid, "SpinKitFadingGrid.shape");
  const size$15 = dart.privateName(fading_grid, "SpinKitFadingGrid.size");
  const itemBuilder$12 = dart.privateName(fading_grid, "SpinKitFadingGrid.itemBuilder");
  const duration$15 = dart.privateName(fading_grid, "SpinKitFadingGrid.duration");
  const controller$14 = dart.privateName(fading_grid, "SpinKitFadingGrid.controller");
  fading_grid.SpinKitFadingGrid = class SpinKitFadingGrid extends framework.StatefulWidget {
    get color() {
      return this[color$15];
    }
    set color(value) {
      super.color = value;
    }
    get shape() {
      return this[shape$1];
    }
    set shape(value) {
      super.shape = value;
    }
    get size() {
      return this[size$15];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$12];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$15];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$14];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new fading_grid._SpinKitFadingGridState.new();
    }
  };
  (fading_grid.SpinKitFadingGrid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shape = opts && 'shape' in opts ? opts.shape : C164 || CT.C164;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$15] = color;
    this[shape$1] = shape;
    this[size$15] = size;
    this[itemBuilder$12] = itemBuilder;
    this[duration$15] = duration;
    this[controller$14] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart", 13, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart", 15, 16, "shape != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/fading_grid.dart", 16, 16, "size != null");
    fading_grid.SpinKitFadingGrid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fading_grid.SpinKitFadingGrid.prototype;
  dart.addTypeTests(fading_grid.SpinKitFadingGrid);
  dart.setMethodSignature(fading_grid.SpinKitFadingGrid, () => ({
    __proto__: dart.getMethods(fading_grid.SpinKitFadingGrid.__proto__),
    createState: dart.fnType(fading_grid._SpinKitFadingGridState, [])
  }));
  dart.setLibraryUri(fading_grid.SpinKitFadingGrid, "package:flutter_spinkit/src/fading_grid.dart");
  dart.setFieldSignature(fading_grid.SpinKitFadingGrid, () => ({
    __proto__: dart.getFields(fading_grid.SpinKitFadingGrid.__proto__),
    color: dart.finalFieldType(ui.Color),
    shape: dart.finalFieldType(box_border.BoxShape),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$12 = dart.privateName(fading_grid, "_controller");
  const _circle = dart.privateName(fading_grid, "_circle");
  let C357;
  let C356;
  let C355;
  let C360;
  let C359;
  let C358;
  let C363;
  let C364;
  let C365;
  let C362;
  let C361;
  let C368;
  let C369;
  let C367;
  let C366;
  let C372;
  let C373;
  let C374;
  let C371;
  let C370;
  let C377;
  let C376;
  let C375;
  let C380;
  let C379;
  let C378;
  let C383;
  let C384;
  let C385;
  let C382;
  let C381;
  let C388;
  let C389;
  let C387;
  let C386;
  let C392;
  let C393;
  let C394;
  let C391;
  let C390;
  let C397;
  let C396;
  let C395;
  let C400;
  let C399;
  let C398;
  let C403;
  let C404;
  let C405;
  let C402;
  let C401;
  let C408;
  let C409;
  let C410;
  let C407;
  let C406;
  let C413;
  let C414;
  let C412;
  let C411;
  const _itemBuilder$10 = dart.privateName(fading_grid, "_itemBuilder");
  let C417;
  let C418;
  let C416;
  let C415;
  let C421;
  let C422;
  let C420;
  let C419;
  let C425;
  let C424;
  let C423;
  const State_SingleTickerProviderStateMixin$36$12 = class State_SingleTickerProviderStateMixin extends framework.State$(fading_grid.SpinKitFadingGrid) {};
  (State_SingleTickerProviderStateMixin$36$12.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(fading_grid.SpinKitFadingGrid)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$12.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$12.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$12, ticker_provider.SingleTickerProviderStateMixin$(fading_grid.SpinKitFadingGrid));
  fading_grid._SpinKitFadingGridState = class _SpinKitFadingGridState extends State_SingleTickerProviderStateMixin$36$12 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$12] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat(), t0$);
    }
    dispose() {
      this[_controller$12].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, mainAxisSize: flex.MainAxisSize.max, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_circle](0, 1), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C355 || CT.C355}), this[_circle](1, 1), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C358 || CT.C358}), this[_circle](2, 2)]), $creationLocationd_0dea112b090073317d4: C361 || CT.C361}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: dart.notNull(this.widget.size) / 8, width: this.widget.size, $creationLocationd_0dea112b090073317d4: C366 || CT.C366})]), $creationLocationd_0dea112b090073317d4: C370 || CT.C370}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_circle](3, 4), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C375 || CT.C375}), this[_circle](4, 1), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C378 || CT.C378}), this[_circle](5, 2)]), $creationLocationd_0dea112b090073317d4: C381 || CT.C381}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: dart.notNull(this.widget.size) / 8, width: this.widget.size, $creationLocationd_0dea112b090073317d4: C386 || CT.C386})]), $creationLocationd_0dea112b090073317d4: C390 || CT.C390}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_circle](6, 4), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C395 || CT.C395}), this[_circle](7, 3), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C398 || CT.C398}), this[_circle](8, 3)]), $creationLocationd_0dea112b090073317d4: C401 || CT.C401})]), $creationLocationd_0dea112b090073317d4: C406 || CT.C406}), $creationLocationd_0dea112b090073317d4: C411 || CT.C411});
    }
    [_circle](index, i) {
      return new transitions.FadeTransition.new({opacity: new utils.DelayTween.new({begin: 0.4, end: 0.9, delay: 0.3 * (dart.notNull(i) - 1)}).animate(this[_controller$12]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) / 4), child: this[_itemBuilder$10](index), $creationLocationd_0dea112b090073317d4: C415 || CT.C415}), $creationLocationd_0dea112b090073317d4: C419 || CT.C419});
    }
    [_itemBuilder$10](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape}), $creationLocationd_0dea112b090073317d4: C423 || CT.C423});
    }
  };
  (fading_grid._SpinKitFadingGridState.new = function() {
    this[_controller$12] = null;
    fading_grid._SpinKitFadingGridState.__proto__.new.call(this);
    ;
  }).prototype = fading_grid._SpinKitFadingGridState.prototype;
  dart.addTypeTests(fading_grid._SpinKitFadingGridState);
  dart.setMethodSignature(fading_grid._SpinKitFadingGridState, () => ({
    __proto__: dart.getMethods(fading_grid._SpinKitFadingGridState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_circle]: dart.fnType(framework.Widget, [core.int, core.int]),
    [_itemBuilder$10]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(fading_grid._SpinKitFadingGridState, "package:flutter_spinkit/src/fading_grid.dart");
  dart.setFieldSignature(fading_grid._SpinKitFadingGridState, () => ({
    __proto__: dart.getFields(fading_grid._SpinKitFadingGridState.__proto__),
    [_controller$12]: dart.fieldType(animation_controller.AnimationController)
  }));
  const color$16 = dart.privateName(fading_four, "SpinKitFadingFour.color");
  const shape$2 = dart.privateName(fading_four, "SpinKitFadingFour.shape");
  const size$16 = dart.privateName(fading_four, "SpinKitFadingFour.size");
  const itemBuilder$13 = dart.privateName(fading_four, "SpinKitFadingFour.itemBuilder");
  const duration$16 = dart.privateName(fading_four, "SpinKitFadingFour.duration");
  const controller$15 = dart.privateName(fading_four, "SpinKitFadingFour.controller");
  fading_four.SpinKitFadingFour = class SpinKitFadingFour extends framework.StatefulWidget {
    get color() {
      return this[color$16];
    }
    set color(value) {
      super.color = value;
    }
    get shape() {
      return this[shape$2];
    }
    set shape(value) {
      super.shape = value;
    }
    get size() {
      return this[size$16];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$13];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$16];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$15];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new fading_four._SpinKitFadingFourState.new();
    }
  };
  (fading_four.SpinKitFadingFour.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shape = opts && 'shape' in opts ? opts.shape : C164 || CT.C164;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$16] = color;
    this[shape$2] = shape;
    this[size$16] = size;
    this[itemBuilder$13] = itemBuilder;
    this[duration$16] = duration;
    this[controller$15] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart", 13, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart", 15, 16, "shape != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/fading_four.dart", 16, 16, "size != null");
    fading_four.SpinKitFadingFour.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fading_four.SpinKitFadingFour.prototype;
  dart.addTypeTests(fading_four.SpinKitFadingFour);
  dart.setMethodSignature(fading_four.SpinKitFadingFour, () => ({
    __proto__: dart.getMethods(fading_four.SpinKitFadingFour.__proto__),
    createState: dart.fnType(fading_four._SpinKitFadingFourState, [])
  }));
  dart.setLibraryUri(fading_four.SpinKitFadingFour, "package:flutter_spinkit/src/fading_four.dart");
  dart.setFieldSignature(fading_four.SpinKitFadingFour, () => ({
    __proto__: dart.getFields(fading_four.SpinKitFadingFour.__proto__),
    color: dart.finalFieldType(ui.Color),
    shape: dart.finalFieldType(box_border.BoxShape),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$13 = dart.privateName(fading_four, "_controller");
  const _itemBuilder$11 = dart.privateName(fading_four, "_itemBuilder");
  let C428;
  let C429;
  let C427;
  let C426;
  let C432;
  let C433;
  let C431;
  let C430;
  let C436;
  let C437;
  let C435;
  let C434;
  let C440;
  let C441;
  let C439;
  let C438;
  let C444;
  let C445;
  let C446;
  let C443;
  let C442;
  let C449;
  let C448;
  let C447;
  let C452;
  let C451;
  let C450;
  let C454;
  let C453;
  let C457;
  let C456;
  let C455;
  const State_SingleTickerProviderStateMixin$36$13 = class State_SingleTickerProviderStateMixin extends framework.State$(fading_four.SpinKitFadingFour) {};
  (State_SingleTickerProviderStateMixin$36$13.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(fading_four.SpinKitFadingFour)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$13.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$13.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$13, ticker_provider.SingleTickerProviderStateMixin$(fading_four.SpinKitFadingFour));
  fading_four._SpinKitFadingFourState = class _SpinKitFadingFourState extends State_SingleTickerProviderStateMixin$36$13 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$13] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat(), t0$);
    }
    dispose() {
      this[_controller$13].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: ListOfWidget().generate(4, dart.fn(i => {
              let _position = dart.notNull(this.widget.size) * 0.5;
              return new basic.Positioned.fill({left: _position, top: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(30.0 * (dart.notNull(i) * 2) * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.FadeTransition.new({opacity: new utils.DelayTween.new({begin: 0.0, end: 1.0, delay: this.delays[$_get](i)}).animate(this[_controller$13]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.25), child: this[_itemBuilder$11](i), $creationLocationd_0dea112b090073317d4: C426 || CT.C426}), $creationLocationd_0dea112b090073317d4: C430 || CT.C430}), $creationLocationd_0dea112b090073317d4: C434 || CT.C434}), $creationLocationd_0dea112b090073317d4: C438 || CT.C438}), $creationLocationd_0dea112b090073317d4: C442 || CT.C442});
            }, intToPositioned())), $creationLocationd_0dea112b090073317d4: C447 || CT.C447}), $creationLocationd_0dea112b090073317d4: C450 || CT.C450}), $creationLocationd_0dea112b090073317d4: C453 || CT.C453});
    }
    [_itemBuilder$11](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape}), $creationLocationd_0dea112b090073317d4: C455 || CT.C455});
    }
  };
  (fading_four._SpinKitFadingFourState.new = function() {
    this.delays = JSArrayOfdouble().of([0.0, -0.9, -0.6, -0.3]);
    this[_controller$13] = null;
    fading_four._SpinKitFadingFourState.__proto__.new.call(this);
    ;
  }).prototype = fading_four._SpinKitFadingFourState.prototype;
  dart.addTypeTests(fading_four._SpinKitFadingFourState);
  dart.setMethodSignature(fading_four._SpinKitFadingFourState, () => ({
    __proto__: dart.getMethods(fading_four._SpinKitFadingFourState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$11]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(fading_four._SpinKitFadingFourState, "package:flutter_spinkit/src/fading_four.dart");
  dart.setFieldSignature(fading_four._SpinKitFadingFourState, () => ({
    __proto__: dart.getFields(fading_four._SpinKitFadingFourState.__proto__),
    delays: dart.finalFieldType(core.List$(core.double)),
    [_controller$13]: dart.fieldType(animation_controller.AnimationController)
  }));
  const color$17 = dart.privateName(fading_cube, "SpinKitFadingCube.color");
  const size$17 = dart.privateName(fading_cube, "SpinKitFadingCube.size");
  const itemBuilder$14 = dart.privateName(fading_cube, "SpinKitFadingCube.itemBuilder");
  const duration$17 = dart.privateName(fading_cube, "SpinKitFadingCube.duration");
  const controller$16 = dart.privateName(fading_cube, "SpinKitFadingCube.controller");
  fading_cube.SpinKitFadingCube = class SpinKitFadingCube extends framework.StatefulWidget {
    get color() {
      return this[color$17];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$17];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$14];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$17];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$16];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new fading_cube._SpinKitFadingCubeState.new();
    }
  };
  (fading_cube.SpinKitFadingCube.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C254 || CT.C254;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$17] = color;
    this[size$17] = size;
    this[itemBuilder$14] = itemBuilder;
    this[duration$17] = duration;
    this[controller$16] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart", 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/fading_cube.dart", 14, 16, "size != null");
    fading_cube.SpinKitFadingCube.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fading_cube.SpinKitFadingCube.prototype;
  dart.addTypeTests(fading_cube.SpinKitFadingCube);
  dart.setMethodSignature(fading_cube.SpinKitFadingCube, () => ({
    __proto__: dart.getMethods(fading_cube.SpinKitFadingCube.__proto__),
    createState: dart.fnType(fading_cube._SpinKitFadingCubeState, [])
  }));
  dart.setLibraryUri(fading_cube.SpinKitFadingCube, "package:flutter_spinkit/src/fading_cube.dart");
  dart.setFieldSignature(fading_cube.SpinKitFadingCube, () => ({
    __proto__: dart.getFields(fading_cube.SpinKitFadingCube.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$14 = dart.privateName(fading_cube, "_controller");
  const _itemBuilder$12 = dart.privateName(fading_cube, "_itemBuilder");
  let C460;
  let C461;
  let C459;
  let C458;
  let C464;
  let C465;
  let C463;
  let C462;
  let C468;
  let C469;
  let C467;
  let C466;
  let C472;
  let C473;
  let C471;
  let C470;
  let C476;
  let C477;
  let C478;
  let C475;
  let C474;
  let C481;
  let C482;
  let C483;
  let C480;
  let C479;
  let C486;
  let C485;
  let C484;
  let C489;
  let C490;
  let C488;
  let C487;
  let C493;
  let C492;
  let C491;
  let C494;
  let C495;
  let C498;
  let C497;
  let C496;
  const State_TickerProviderStateMixin$36$0 = class State_TickerProviderStateMixin extends framework.State$(fading_cube.SpinKitFadingCube) {};
  (State_TickerProviderStateMixin$36$0.new = function() {
    ticker_provider.TickerProviderStateMixin$(fading_cube.SpinKitFadingCube)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$0.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$0.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$0, ticker_provider.TickerProviderStateMixin$(fading_cube.SpinKitFadingCube));
  fading_cube._SpinKitFadingCubeState = class _SpinKitFadingCubeState extends State_TickerProviderStateMixin$36$0 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$14] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat(), t0$);
    }
    dispose() {
      this[_controller$14].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Center.new({child: new basic.Transform.rotate({angle: -45.0 * 0.0174533, child: new basic.Stack.new({children: ListOfWidget().generate(4, dart.fn(i => {
                  let _size = dart.notNull(this.widget.size) * 0.5;
                  let _position = dart.notNull(this.widget.size) * 0.5;
                  return new basic.Positioned.fill({top: _position, left: _position, child: new basic.Transform.scale({scale: 1.1, origin: new ui.Offset.new(-_size * 0.5, -_size * 0.5), child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(90.0 * dart.notNull(i) * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.FadeTransition.new({opacity: new utils.DelayTween.new({begin: 0.0, end: 1.0, delay: 0.3 * dart.notNull(i)}).animate(this[_controller$14]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(_size), child: this[_itemBuilder$12](i), $creationLocationd_0dea112b090073317d4: C458 || CT.C458}), $creationLocationd_0dea112b090073317d4: C462 || CT.C462}), $creationLocationd_0dea112b090073317d4: C466 || CT.C466}), $creationLocationd_0dea112b090073317d4: C470 || CT.C470}), $creationLocationd_0dea112b090073317d4: C474 || CT.C474}), $creationLocationd_0dea112b090073317d4: C479 || CT.C479});
                }, intToPositioned())), $creationLocationd_0dea112b090073317d4: C484 || CT.C484}), $creationLocationd_0dea112b090073317d4: C487 || CT.C487}), $creationLocationd_0dea112b090073317d4: C491 || CT.C491}), $creationLocationd_0dea112b090073317d4: C494 || CT.C494}), $creationLocationd_0dea112b090073317d4: C495 || CT.C495});
    }
    [_itemBuilder$12](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C496 || CT.C496});
    }
  };
  (fading_cube._SpinKitFadingCubeState.new = function() {
    this[_controller$14] = null;
    fading_cube._SpinKitFadingCubeState.__proto__.new.call(this);
    ;
  }).prototype = fading_cube._SpinKitFadingCubeState.prototype;
  dart.addTypeTests(fading_cube._SpinKitFadingCubeState);
  dart.setMethodSignature(fading_cube._SpinKitFadingCubeState, () => ({
    __proto__: dart.getMethods(fading_cube._SpinKitFadingCubeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$12]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(fading_cube._SpinKitFadingCubeState, "package:flutter_spinkit/src/fading_cube.dart");
  dart.setFieldSignature(fading_cube._SpinKitFadingCubeState, () => ({
    __proto__: dart.getFields(fading_cube._SpinKitFadingCubeState.__proto__),
    [_controller$14]: dart.fieldType(animation_controller.AnimationController)
  }));
  const color$18 = dart.privateName(dual_ring, "SpinKitDualRing.color");
  const lineWidth$0 = dart.privateName(dual_ring, "SpinKitDualRing.lineWidth");
  const size$18 = dart.privateName(dual_ring, "SpinKitDualRing.size");
  const duration$18 = dart.privateName(dual_ring, "SpinKitDualRing.duration");
  const controller$17 = dart.privateName(dual_ring, "SpinKitDualRing.controller");
  dual_ring.SpinKitDualRing = class SpinKitDualRing extends framework.StatefulWidget {
    get color() {
      return this[color$18];
    }
    set color(value) {
      super.color = value;
    }
    get lineWidth() {
      return this[lineWidth$0];
    }
    set lineWidth(value) {
      super.lineWidth = value;
    }
    get size() {
      return this[size$18];
    }
    set size(value) {
      super.size = value;
    }
    get duration() {
      return this[duration$18];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$17];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new dual_ring._SpinKitDualRingState.new();
    }
  };
  (dual_ring.SpinKitDualRing.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : 7;
    let size = opts && 'size' in opts ? opts.size : 50;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$18] = color;
    this[lineWidth$0] = lineWidth;
    this[size$18] = size;
    this[duration$18] = duration;
    this[controller$17] = controller;
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/dual_ring.dart", 13, 16, "color != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/dual_ring.dart", 14, 16, "size != null");
    dual_ring.SpinKitDualRing.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dual_ring.SpinKitDualRing.prototype;
  dart.addTypeTests(dual_ring.SpinKitDualRing);
  dart.setMethodSignature(dual_ring.SpinKitDualRing, () => ({
    __proto__: dart.getMethods(dual_ring.SpinKitDualRing.__proto__),
    createState: dart.fnType(dual_ring._SpinKitDualRingState, [])
  }));
  dart.setLibraryUri(dual_ring.SpinKitDualRing, "package:flutter_spinkit/src/dual_ring.dart");
  dart.setFieldSignature(dual_ring.SpinKitDualRing, () => ({
    __proto__: dart.getFields(dual_ring.SpinKitDualRing.__proto__),
    color: dart.finalFieldType(ui.Color),
    lineWidth: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$15 = dart.privateName(dual_ring, "_controller");
  const _animation$3 = dart.privateName(dual_ring, "_animation");
  let C501;
  let C500;
  let C499;
  let C504;
  let C505;
  let C503;
  let C502;
  let C508;
  let C509;
  let C507;
  let C506;
  let C510;
  const State_SingleTickerProviderStateMixin$36$14 = class State_SingleTickerProviderStateMixin extends framework.State$(dual_ring.SpinKitDualRing) {};
  (State_SingleTickerProviderStateMixin$36$14.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(dual_ring.SpinKitDualRing)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$14.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$14.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$14, ticker_provider.SingleTickerProviderStateMixin$(dual_ring.SpinKitDualRing));
  dual_ring._SpinKitDualRingState = class _SpinKitDualRingState extends State_SingleTickerProviderStateMixin$36$14 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$15] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation$3] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$15], curve: C235 || CT.C235}));
    }
    dispose() {
      this[_controller$15].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateZ(dart.notNull(this[_animation$3].value) * 3.141592653589793 * 2), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.CustomPaint.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), $creationLocationd_0dea112b090073317d4: C499 || CT.C499}), painter: new dual_ring._DualRingPainter.new({paintWidth: this.widget.lineWidth, color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C502 || CT.C502}), $creationLocationd_0dea112b090073317d4: C506 || CT.C506}), $creationLocationd_0dea112b090073317d4: C510 || CT.C510});
    }
  };
  (dual_ring._SpinKitDualRingState.new = function() {
    this[_controller$15] = null;
    this[_animation$3] = null;
    dual_ring._SpinKitDualRingState.__proto__.new.call(this);
    ;
  }).prototype = dual_ring._SpinKitDualRingState.prototype;
  dart.addTypeTests(dual_ring._SpinKitDualRingState);
  dart.setMethodSignature(dual_ring._SpinKitDualRingState, () => ({
    __proto__: dart.getMethods(dual_ring._SpinKitDualRingState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dual_ring._SpinKitDualRingState, "package:flutter_spinkit/src/dual_ring.dart");
  dart.setFieldSignature(dual_ring._SpinKitDualRingState, () => ({
    __proto__: dart.getFields(dual_ring._SpinKitDualRingState.__proto__),
    [_controller$15]: dart.fieldType(animation_controller.AnimationController),
    [_animation$3]: dart.fieldType(animation.Animation$(core.double))
  }));
  dual_ring._DualRingPainter = class _DualRingPainter extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let rect = new ui.Rect.fromPoints(ui.Offset.zero, new ui.Offset.new(size.width, size.height));
      canvas.drawArc(rect, 0.0, this.getRadian(this.angle), false, this.ringPaint);
      canvas.drawArc(rect, this.getRadian(180.0), this.getRadian(this.angle), false, this.ringPaint);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
    getRadian(angle) {
      return 3.141592653589793 / 180 * dart.notNull(angle);
    }
  };
  (dual_ring._DualRingPainter.new = function(opts) {
    let t0;
    let angle = opts && 'angle' in opts ? opts.angle : 90;
    let paintWidth = opts && 'paintWidth' in opts ? opts.paintWidth : null;
    let color = opts && 'color' in opts ? opts.color : null;
    this.angle = angle;
    this.ringPaint = (t0 = ui.Paint.new(), t0.color = color, t0.strokeWidth = paintWidth, t0.style = ui.PaintingStyle.stroke, t0);
    dual_ring._DualRingPainter.__proto__.new.call(this);
    ;
  }).prototype = dual_ring._DualRingPainter.prototype;
  dart.addTypeTests(dual_ring._DualRingPainter);
  dart.setMethodSignature(dual_ring._DualRingPainter, () => ({
    __proto__: dart.getMethods(dual_ring._DualRingPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object]),
    getRadian: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(dual_ring._DualRingPainter, "package:flutter_spinkit/src/dual_ring.dart");
  dart.setFieldSignature(dual_ring._DualRingPainter, () => ({
    __proto__: dart.getFields(dual_ring._DualRingPainter.__proto__),
    ringPaint: dart.finalFieldType(ui.Paint),
    angle: dart.finalFieldType(core.double)
  }));
  const color$19 = dart.privateName(cube_grid, "SpinKitCubeGrid.color");
  const size$19 = dart.privateName(cube_grid, "SpinKitCubeGrid.size");
  const itemBuilder$15 = dart.privateName(cube_grid, "SpinKitCubeGrid.itemBuilder");
  const duration$19 = dart.privateName(cube_grid, "SpinKitCubeGrid.duration");
  const controller$18 = dart.privateName(cube_grid, "SpinKitCubeGrid.controller");
  cube_grid.SpinKitCubeGrid = class SpinKitCubeGrid extends framework.StatefulWidget {
    get color() {
      return this[color$19];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$19];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$15];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$19];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$18];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new cube_grid._SpinKitCubeGridState.new();
    }
  };
  (cube_grid.SpinKitCubeGrid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$19] = color;
    this[size$19] = size;
    this[itemBuilder$15] = itemBuilder;
    this[duration$19] = duration;
    this[controller$18] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/cube_grid.dart", 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/cube_grid.dart", 14, 16, "size != null");
    cube_grid.SpinKitCubeGrid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = cube_grid.SpinKitCubeGrid.prototype;
  dart.addTypeTests(cube_grid.SpinKitCubeGrid);
  dart.setMethodSignature(cube_grid.SpinKitCubeGrid, () => ({
    __proto__: dart.getMethods(cube_grid.SpinKitCubeGrid.__proto__),
    createState: dart.fnType(cube_grid._SpinKitCubeGridState, [])
  }));
  dart.setLibraryUri(cube_grid.SpinKitCubeGrid, "package:flutter_spinkit/src/cube_grid.dart");
  dart.setFieldSignature(cube_grid.SpinKitCubeGrid, () => ({
    __proto__: dart.getFields(cube_grid.SpinKitCubeGrid.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$16 = dart.privateName(cube_grid, "_controller");
  const _anim1 = dart.privateName(cube_grid, "_anim1");
  const _anim2 = dart.privateName(cube_grid, "_anim2");
  const _anim3 = dart.privateName(cube_grid, "_anim3");
  const _anim4 = dart.privateName(cube_grid, "_anim4");
  const _anim5 = dart.privateName(cube_grid, "_anim5");
  let C511;
  let C512;
  let C513;
  let C514;
  let C515;
  const _square = dart.privateName(cube_grid, "_square");
  let C518;
  let C519;
  let C520;
  let C517;
  let C516;
  let C523;
  let C524;
  let C525;
  let C522;
  let C521;
  let C528;
  let C529;
  let C530;
  let C527;
  let C526;
  let C533;
  let C534;
  let C535;
  let C532;
  let C531;
  let C538;
  let C539;
  let C537;
  let C536;
  const _itemBuilder$13 = dart.privateName(cube_grid, "_itemBuilder");
  let C542;
  let C543;
  let C541;
  let C540;
  let C546;
  let C547;
  let C545;
  let C544;
  let C550;
  let C549;
  let C548;
  const State_SingleTickerProviderStateMixin$36$15 = class State_SingleTickerProviderStateMixin extends framework.State$(cube_grid.SpinKitCubeGrid) {};
  (State_SingleTickerProviderStateMixin$36$15.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(cube_grid.SpinKitCubeGrid)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$15.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$15.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$15, ticker_provider.SingleTickerProviderStateMixin$(cube_grid.SpinKitCubeGrid));
  cube_grid._SpinKitCubeGridState = class _SpinKitCubeGridState extends State_SingleTickerProviderStateMixin$36$15 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$16] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addStatusListener(utils.autoReverseFn(dart.fn(() => this[_controller$16], VoidToAnimationController()))), t0$.forward(), t0$);
      this[_anim1] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$16], curve: C511 || CT.C511}));
      this[_anim2] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$16], curve: C512 || CT.C512}));
      this[_anim3] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$16], curve: C513 || CT.C513}));
      this[_anim4] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$16], curve: C514 || CT.C514}));
      this[_anim5] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$16], curve: C515 || CT.C515}));
    }
    dispose() {
      this[_controller$16].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, mainAxisSize: flex.MainAxisSize.max, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_square](this[_anim3], 0), this[_square](this[_anim4], 1), this[_square](this[_anim5], 2)]), $creationLocationd_0dea112b090073317d4: C516 || CT.C516}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_square](this[_anim2], 3), this[_square](this[_anim3], 4), this[_square](this[_anim4], 5)]), $creationLocationd_0dea112b090073317d4: C521 || CT.C521}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_square](this[_anim1], 6), this[_square](this[_anim2], 7), this[_square](this[_anim3], 8)]), $creationLocationd_0dea112b090073317d4: C526 || CT.C526})]), $creationLocationd_0dea112b090073317d4: C531 || CT.C531}), $creationLocationd_0dea112b090073317d4: C536 || CT.C536});
    }
    [_square](animation, index) {
      return new transitions.ScaleTransition.new({scale: animation, child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) / 3), child: this[_itemBuilder$13](index), $creationLocationd_0dea112b090073317d4: C540 || CT.C540}), $creationLocationd_0dea112b090073317d4: C544 || CT.C544});
    }
    [_itemBuilder$13](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C548 || CT.C548});
    }
  };
  (cube_grid._SpinKitCubeGridState.new = function() {
    this[_controller$16] = null;
    this[_anim1] = null;
    this[_anim2] = null;
    this[_anim3] = null;
    this[_anim4] = null;
    this[_anim5] = null;
    cube_grid._SpinKitCubeGridState.__proto__.new.call(this);
    ;
  }).prototype = cube_grid._SpinKitCubeGridState.prototype;
  dart.addTypeTests(cube_grid._SpinKitCubeGridState);
  dart.setMethodSignature(cube_grid._SpinKitCubeGridState, () => ({
    __proto__: dart.getMethods(cube_grid._SpinKitCubeGridState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_square]: dart.fnType(framework.Widget, [animation.Animation$(core.double), core.int]),
    [_itemBuilder$13]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(cube_grid._SpinKitCubeGridState, "package:flutter_spinkit/src/cube_grid.dart");
  dart.setFieldSignature(cube_grid._SpinKitCubeGridState, () => ({
    __proto__: dart.getFields(cube_grid._SpinKitCubeGridState.__proto__),
    [_controller$16]: dart.fieldType(animation_controller.AnimationController),
    [_anim1]: dart.fieldType(animation.Animation$(core.double)),
    [_anim2]: dart.fieldType(animation.Animation$(core.double)),
    [_anim3]: dart.fieldType(animation.Animation$(core.double)),
    [_anim4]: dart.fieldType(animation.Animation$(core.double)),
    [_anim5]: dart.fieldType(animation.Animation$(core.double))
  }));
  const color$20 = dart.privateName(circle, "SpinKitCircle.color");
  const size$20 = dart.privateName(circle, "SpinKitCircle.size");
  const itemBuilder$16 = dart.privateName(circle, "SpinKitCircle.itemBuilder");
  const duration$20 = dart.privateName(circle, "SpinKitCircle.duration");
  const controller$19 = dart.privateName(circle, "SpinKitCircle.controller");
  circle.SpinKitCircle = class SpinKitCircle extends framework.StatefulWidget {
    get color() {
      return this[color$20];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$20];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$16];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$20];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$19];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new circle._SpinKitCircleState.new();
    }
  };
  (circle.SpinKitCircle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C22 || CT.C22;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$20] = color;
    this[size$20] = size;
    this[itemBuilder$16] = itemBuilder;
    this[duration$20] = duration;
    this[controller$19] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/circle.dart", 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/circle.dart", 14, 16, "size != null");
    circle.SpinKitCircle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = circle.SpinKitCircle.prototype;
  dart.addTypeTests(circle.SpinKitCircle);
  dart.setMethodSignature(circle.SpinKitCircle, () => ({
    __proto__: dart.getMethods(circle.SpinKitCircle.__proto__),
    createState: dart.fnType(circle._SpinKitCircleState, [])
  }));
  dart.setLibraryUri(circle.SpinKitCircle, "package:flutter_spinkit/src/circle.dart");
  dart.setFieldSignature(circle.SpinKitCircle, () => ({
    __proto__: dart.getFields(circle.SpinKitCircle.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller$17 = dart.privateName(circle, "_controller");
  const _itemBuilder$14 = dart.privateName(circle, "_itemBuilder");
  let C551;
  let C554;
  let C553;
  let C552;
  let C555;
  let C556;
  let C557;
  let C558;
  let C559;
  let C560;
  let C561;
  const State_SingleTickerProviderStateMixin$36$16 = class State_SingleTickerProviderStateMixin extends framework.State$(circle.SpinKitCircle) {};
  (State_SingleTickerProviderStateMixin$36$16.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(circle.SpinKitCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$16.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$16.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$16, ticker_provider.SingleTickerProviderStateMixin$(circle.SpinKitCircle));
  circle._SpinKitCircleState = class _SpinKitCircleState extends State_SingleTickerProviderStateMixin$36$16 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller$17] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat(), t0$);
    }
    dispose() {
      this[_controller$17].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: ListOfWidget().generate(this.delays[$length], dart.fn(index => {
              let _position = dart.notNull(this.widget.size) * 0.5;
              return new basic.Positioned.fill({left: _position, top: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(30.0 * dart.notNull(index) * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.ScaleTransition.new({scale: new utils.DelayTween.new({begin: 0.0, end: 1.0, delay: this.delays[$_get](index)}).animate(this[_controller$17]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.15), child: this[_itemBuilder$14](index), $creationLocationd_0dea112b090073317d4: C551 || CT.C551}), $creationLocationd_0dea112b090073317d4: C552 || CT.C552}), $creationLocationd_0dea112b090073317d4: C555 || CT.C555}), $creationLocationd_0dea112b090073317d4: C556 || CT.C556}), $creationLocationd_0dea112b090073317d4: C557 || CT.C557});
            }, intToPositioned())), $creationLocationd_0dea112b090073317d4: C558 || CT.C558}), $creationLocationd_0dea112b090073317d4: C559 || CT.C559}), $creationLocationd_0dea112b090073317d4: C560 || CT.C560});
    }
    [_itemBuilder$14](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.circle}), $creationLocationd_0dea112b090073317d4: C561 || CT.C561});
    }
  };
  (circle._SpinKitCircleState.new = function() {
    this.delays = JSArrayOfdouble().of([0.0, -1.1, -1.0, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1]);
    this[_controller$17] = null;
    circle._SpinKitCircleState.__proto__.new.call(this);
    ;
  }).prototype = circle._SpinKitCircleState.prototype;
  dart.addTypeTests(circle._SpinKitCircleState);
  dart.setMethodSignature(circle._SpinKitCircleState, () => ({
    __proto__: dart.getMethods(circle._SpinKitCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder$14]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(circle._SpinKitCircleState, "package:flutter_spinkit/src/circle.dart");
  dart.setFieldSignature(circle._SpinKitCircleState, () => ({
    __proto__: dart.getFields(circle._SpinKitCircleState.__proto__),
    delays: dart.finalFieldType(core.List$(core.double)),
    [_controller$17]: dart.fieldType(animation_controller.AnimationController)
  }));
  const color$21 = dart.privateName(chasing_dots, "SpinKitChasingDots.color");
  const size$21 = dart.privateName(chasing_dots, "SpinKitChasingDots.size");
  const itemBuilder$17 = dart.privateName(chasing_dots, "SpinKitChasingDots.itemBuilder");
  const duration$21 = dart.privateName(chasing_dots, "SpinKitChasingDots.duration");
  chasing_dots.SpinKitChasingDots = class SpinKitChasingDots extends framework.StatefulWidget {
    get color() {
      return this[color$21];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$21];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$17];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$21];
    }
    set duration(value) {
      super.duration = value;
    }
    createState() {
      return new chasing_dots._SpinKitChasingDotsState.new();
    }
  };
  (chasing_dots.SpinKitChasingDots.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C0 || CT.C0;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$21] = color;
    this[size$21] = size;
    this[itemBuilder$17] = itemBuilder;
    this[duration$21] = duration;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/flutter_spinkit/src/chasing_dots.dart", 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_spinkit/src/chasing_dots.dart", 13, 16, "size != null");
    chasing_dots.SpinKitChasingDots.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = chasing_dots.SpinKitChasingDots.prototype;
  dart.addTypeTests(chasing_dots.SpinKitChasingDots);
  dart.setMethodSignature(chasing_dots.SpinKitChasingDots, () => ({
    __proto__: dart.getMethods(chasing_dots.SpinKitChasingDots.__proto__),
    createState: dart.fnType(chasing_dots._SpinKitChasingDotsState, [])
  }));
  dart.setLibraryUri(chasing_dots.SpinKitChasingDots, "package:flutter_spinkit/src/chasing_dots.dart");
  dart.setFieldSignature(chasing_dots.SpinKitChasingDots, () => ({
    __proto__: dart.getFields(chasing_dots.SpinKitChasingDots.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration)
  }));
  const _scaleCtrl$ = dart.privateName(chasing_dots, "_scaleCtrl");
  const _rotateCtrl$ = dart.privateName(chasing_dots, "_rotateCtrl");
  const _scale = dart.privateName(chasing_dots, "_scale");
  const _rotate$ = dart.privateName(chasing_dots, "_rotate");
  const _circle$ = dart.privateName(chasing_dots, "_circle");
  let C564;
  let C565;
  let C563;
  let C562;
  let C568;
  let C569;
  let C567;
  let C566;
  let C572;
  let C571;
  let C570;
  let C575;
  let C574;
  let C573;
  let C578;
  let C577;
  let C576;
  let C579;
  let C582;
  let C581;
  let C580;
  let C585;
  let C586;
  let C584;
  let C583;
  let C589;
  let C588;
  let C587;
  const State_TickerProviderStateMixin$36$1 = class State_TickerProviderStateMixin extends framework.State$(chasing_dots.SpinKitChasingDots) {};
  (State_TickerProviderStateMixin$36$1.new = function() {
    ticker_provider.TickerProviderStateMixin$(chasing_dots.SpinKitChasingDots)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$1.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$1.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$1, ticker_provider.TickerProviderStateMixin$(chasing_dots.SpinKitChasingDots));
  chasing_dots._SpinKitChasingDotsState = class _SpinKitChasingDotsState extends State_TickerProviderStateMixin$36$1 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_scaleCtrl$] = (t0 = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0.addStatusListener(utils.autoReverseFn(dart.fn(() => this[_scaleCtrl$], VoidToAnimationController()))), t0.forward(), t0);
      this[_scale] = new (TweenOfdouble()).new({begin: -1.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_scaleCtrl$], curve: curves.Curves.easeInOut}));
      this[_rotateCtrl$] = (t0$ = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_rotate$] = new (TweenOfdouble()).new({begin: 0.0, end: 360.0}).animate(new animations.CurvedAnimation.new({parent: this[_rotateCtrl$], curve: curves.Curves.linear}));
    }
    dispose() {
      this[_scaleCtrl$].dispose();
      this[_rotateCtrl$].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Transform.rotate({angle: dart.notNull(this[_rotate$].value) * 0.0174533, child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Positioned.new({top: 0.0, child: this[_circle$](1.0 - this[_scale].value[$abs](), 0), $creationLocationd_0dea112b090073317d4: C562 || CT.C562}), new basic.Positioned.new({bottom: 0.0, child: this[_circle$](this[_scale].value[$abs](), 1), $creationLocationd_0dea112b090073317d4: C566 || CT.C566})]), $creationLocationd_0dea112b090073317d4: C570 || CT.C570}), $creationLocationd_0dea112b090073317d4: C573 || CT.C573}), $creationLocationd_0dea112b090073317d4: C576 || CT.C576}), $creationLocationd_0dea112b090073317d4: C579 || CT.C579});
    }
    [_circle$](scale, index) {
      return new basic.Transform.scale({scale: scale, child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.6), child: this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C580 || CT.C580}), $creationLocationd_0dea112b090073317d4: C583 || CT.C583}), $creationLocationd_0dea112b090073317d4: C587 || CT.C587});
    }
  };
  (chasing_dots._SpinKitChasingDotsState.new = function() {
    this[_scaleCtrl$] = null;
    this[_rotateCtrl$] = null;
    this[_scale] = null;
    this[_rotate$] = null;
    chasing_dots._SpinKitChasingDotsState.__proto__.new.call(this);
    ;
  }).prototype = chasing_dots._SpinKitChasingDotsState.prototype;
  dart.addTypeTests(chasing_dots._SpinKitChasingDotsState);
  dart.setMethodSignature(chasing_dots._SpinKitChasingDotsState, () => ({
    __proto__: dart.getMethods(chasing_dots._SpinKitChasingDotsState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_circle$]: dart.fnType(framework.Widget, [core.double, core.int])
  }));
  dart.setLibraryUri(chasing_dots._SpinKitChasingDotsState, "package:flutter_spinkit/src/chasing_dots.dart");
  dart.setFieldSignature(chasing_dots._SpinKitChasingDotsState, () => ({
    __proto__: dart.getFields(chasing_dots._SpinKitChasingDotsState.__proto__),
    [_scaleCtrl$]: dart.fieldType(animation_controller.AnimationController),
    [_rotateCtrl$]: dart.fieldType(animation_controller.AnimationController),
    [_scale]: dart.fieldType(animation.Animation$(core.double)),
    [_rotate$]: dart.fieldType(animation.Animation$(core.double))
  }));
  dart.trackLibraries("packages/flutter_spinkit/flutter_spinkit", {
    "package:flutter_spinkit/src/double_bounce.dart": double_bounce,
    "package:flutter_spinkit/src/utils.dart": utils,
    "package:flutter_spinkit/src/wave.dart": wave,
    "package:flutter_spinkit/src/fading_circle.dart": fading_circle,
    "package:flutter_spinkit/flutter_spinkit.dart": flutter_spinkit,
    "package:flutter_spinkit/src/wandering_cubes.dart": wandering_cubes,
    "package:flutter_spinkit/src/three_bounce.dart": three_bounce,
    "package:flutter_spinkit/src/square_circle.dart": square_circle,
    "package:flutter_spinkit/src/spinning_circle.dart": spinning_circle,
    "package:flutter_spinkit/src/rotating_plain.dart": rotating_plain,
    "package:flutter_spinkit/src/rotating_circle.dart": rotating_circle,
    "package:flutter_spinkit/src/ripple.dart": ripple,
    "package:flutter_spinkit/src/ring.dart": ring,
    "package:flutter_spinkit/src/pumping_heart.dart": pumping_heart,
    "package:flutter_spinkit/src/pulse.dart": pulse,
    "package:flutter_spinkit/src/pouring_hour_glass.dart": pouring_hour_glass,
    "package:flutter_spinkit/src/hour_glass.dart": hour_glass,
    "package:flutter_spinkit/src/folding_cube.dart": folding_cube,
    "package:flutter_spinkit/src/fading_grid.dart": fading_grid,
    "package:flutter_spinkit/src/fading_four.dart": fading_four,
    "package:flutter_spinkit/src/fading_cube.dart": fading_cube,
    "package:flutter_spinkit/src/dual_ring.dart": dual_ring,
    "package:flutter_spinkit/src/cube_grid.dart": cube_grid,
    "package:flutter_spinkit/src/circle.dart": circle,
    "package:flutter_spinkit/src/chasing_dots.dart": chasing_dots
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/double_bounce.dart","src/utils.dart","src/wave.dart","src/fading_circle.dart","src/wandering_cubes.dart","src/three_bounce.dart","src/square_circle.dart","src/spinning_circle.dart","src/rotating_plain.dart","src/rotating_circle.dart","src/ripple.dart","src/ring.dart","src/pumping_heart.dart","src/pulse.dart","src/pouring_hour_glass.dart","src/hour_glass.dart","src/folding_cube.dart","src/fading_grid.dart","src/fading_four.dart","src/fading_cube.dart","src/dual_ring.dart","src/cube_grid.dart","src/circle.dart","src/chasing_dots.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgBc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGiB;IAA2B;;;QAlBhE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAKO,MAHb,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B,sBAAkB,oBAAc,cAAM,mDACtC;AAC4G,MAAhH,mBAAa,AAA6B,kCAAhB,CAAC,UAAU,cAAa,4CAAwB,0BAA2B;IACvG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACE,+BACU,wBAAS,GAAG,QAAC,KACT,kCACqB,CAA5B,AAAI,AAAI,mBAAF,CAAC,iBAAG,AAAW,yCACb,mCAAoB,mBAAO,AAAO,0BAAc,mBAAa,CAAC;IAKxF;mBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAA8B,mCAAe,AAAO,AAAM,8BAAY;IAAM;;;IApCvF;IACF;;;EAoCpB;;;;;;;;;;;;;;;IC/Ce;;;;;;SAGM;AAAM,YAAM,YAA+C,CAAzC,AAAoC,SAAf,AAAI,CAAb,aAAF,CAAC,iBAAG,eAAS,yBAAe,KAAK;IAAE;aAGhD;AAAc,uBAAK,AAAU,SAAD;IAAO;;;QARlD;QAAc;QAAU;;AAAU,sDAAa,KAAK,OAAO,GAAG;;EAAC;;;;;;;+CAXN;AAC5E,UAAO,SAAiB;AACtB,UAAW,YAAP,MAAM,EAAoB;AACC,QAA7B,AAAiB,AAAG,iBAAH;YACZ,KAAW,YAAP,MAAM,EAAoB;AACN,QAA7B,AAAiB,AAAG,iBAAH;;;EAGvB;;;;;;;;;ICT0C;;8CAArC;;;;EAAqC;;;;;;;;;;;;;;;;;;;;;IAiB5B;;;;;;IACC;;;;;;IACS;;;;;;IACK;;;;;;IACZ;;;;;;IACW;;;;;;;AAGS;IAAmB;;;QArBhD;QACC;QACA;QACA;QACA;QACA;QACA;;IALA;IACA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;UACR,AAAK,IAAD,IAAI;AACf,oDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAEoG,MAA1G,6BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;IACpG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACL,kBAAQ;AAC3B,YAAO,8BACW,mCACR,gBAAiB,aAAZ,AAAO,oBAAO,MAAM,AAAO,0BAC/B,sCACgC,+CACtB,wBAAS,AAAM,KAAD,WAAS,QAAC,KAC9B,mCACG,AAAiD,iCAA/B,UAAS,YAAY,AAAK,KAAA,QAAC,CAAC,YAAW,4BACjD,mCAAe,gBAAiB,aAAZ,AAAO,oBAAO,KAAK,AAAO,0BAAc,oBAAa,CAAC;IAMtG;;AAGE,cAAQ,AAAO;;;AAEX,gBAAO,uBAAC,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAI,CAAC;;;;AAEhC,gBAAO,uBAAC,CAAC,KAAI,CAAC,KAAI,CAAC,KAAK,CAAC,KAAK,CAAC;;;;;AAG/B,gBAAO,uBAAC,CAAC,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC;;;IAE1C;oBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO;IAAO;;;IAhD9C;;;EAiDtB;;;;;;;;;;;;;;;;;;;;;;;;IAUe;;;;;;IACG;;;;;;;AAEe;IAAU;UAGf;;AACxB,YAAO,2CAA6B,mCAAY,SAAM,KAAK,AAAM,kBAAO,sBAAiB,uBAAkB;IAC7G;;;QAdM;QACwB;QACb;QACV;;IADU;IACV;AACF,qDAAW,GAAG,cAAc,MAAM;;EAAC;;;;;;;;;;;;;;;;;;;;;;ICzE5B;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGiB;IAA2B;;;QAlBhE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAEoG,MAA1G,8BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;IACpG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACW,mCACH,mBAAO,AAAO,0BAClB,+BACU,wBAAS,IAAI,QAAC;AACrB,8BAAwB,aAAZ,AAAO,oBAAO;AAChC,oBAAkB,kCACV,SAAS,OACV,SAAS,SACP,oCACc,iCAAU,AAAK,AAAI,oBAAF,CAAC,IAAG,mBACjC,gCACgB,mCACd,6CACI,AAAmD,iCAAjC,UAAU,YAAY,AAAM,mBAAC,CAAC,YAAW,6BACpD,mCAAoB,mBAAmB,aAAZ,AAAO,oBAAO,cAAc,qBAAa,CAAC;;IASvG;qBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAuB;IAAQ;;;IA9CvE,cAAS,sBAAC,KAAI,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC;IAC1E;;;EA8CtB;;;;;;;;;;;;;;;;;;;;;;;ICzDc;;;;;;IACG;;;;;;IACF;;;;;;IACA;;;;;;IACc;;;;;;IACZ;;;;;;;AAG8B;IAA6B;;;QArBpE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;IACR,eAAO,aAAL,IAAI,IAAG;AAChB,yEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoBF,MAAX;AAIM,MAFZ,6BAAiB,yDAA2B,gBAAgB,AAAO,wBAC/D,eAAY,cAAM,cAAS;yCAC3B;AAE4G,MADhH,oBAAc,AACT,kCADsB,UAAU,AAAO,6BAC/B,4CAAwB;AAE2E,MADhH,oBAAc,AACT,kCADsB,UAAU,AAAO,6BAC/B,4CAAwB;AAE2E,MADhH,oBAAc,AACT,kCADsB,UAAU,cAAC,AAAO,8BAChC,4CAAwB;AAE2E,MADhH,oBAAc,AACT,kCADsB,UAAU,cAAC,AAAO,8BAChC,4CAAwB;AAIzB,MAFZ,0BAAa,yDAA2B,gBAAgB,AAAO,wBAC3D,gBAAY,cAAM,cAAS;yCAC3B;AAEwG,MAD5G,gBAAU,AACL,kCADkB,UAAU,cACpB,4CAAwB;AAEuE,MAD5G,gBAAU,AACL,kCADkB,UAAU,cACpB,4CAAwB;AAEuE,MAD5G,gBAAU,AACL,kCADkB,UAAU,cACpB,4CAAwB;AAEuE,MAD5G,gBAAU,AACL,kCADkB,UAAU,cACpB,4CAAwB;AAIzB,MAFZ,4BAAc,yDAA2B,gBAAgB,AAAO,wBAC5D,iBAAY,cAAM,cAAS;yCAC3B;AAC0G,MAA9G,gBAAU,AAA8B,kCAAjB,UAAU,gBAAe,4CAAwB,6BAA8B;IACxG;;AAI0B,MAAxB,AAAe;AACK,MAApB,AAAW;AACU,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACW,mCACH,mBAAO,AAAO,0BAClB,+BACa,sBAChB,YAAM,IACN,YAAM,GAAG;IAKnB;YAEiB,OAAa;;AACpB;AACR,UAAW,YAAP,MAAM,EAAI;AAKyB,QAJrC,oBAAsB,mCAClB,aAAU,AAAY,yBAAO,MAC7B,aAAU,KAAK,AAAY,0BAC3B,aAAU,KAAK,AAAY,0BAC3B,aAAU,AAAY,yBAAO;;AAMI,QAJrC,qBAAsB,mCAClB,cAAU,KAAK,AAAY,0BAC3B,cAAU,cAAC,AAAY,0BAAO,MAC9B,cAAU,cAAC,AAAY,0BAAO,MAC9B,cAAU,KAAK,AAAY;;AAGjC,YAAO,gCACA,WACQ,YAAP,MAAM,EAAI,QAAO,MAAM,AAAO,2BAC7B,oCACM,WAAW,SACL,mCACM,aAAd,AAAQ,uBAAQ,kBAChB,4CACc,mCACf,WAAM,AAAQ,sBACd,WAAM,AAAQ,sBACd,WAAM,AAAQ,sBACd,WAAM,AAAQ,oCACF,mCACH,mBAAmB,aAAZ,AAAO,oBAAO,cACzB,qBAAa,KAAK;IAMrC;qBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAc,AAAO;IAAO;;;IAtGnE;IAAY;IAAa;IAC3B;IAAS;IAAS;IAAS;IAAS;IACpC;IAAa;IAAa;IAAa;;;EAqG3D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICpHc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGgB;IAA0B;;;QAlB9D;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,mEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiBF,MAAX;AAEoG,MAA1G,8BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;IACpG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACW,mCACR,gBAAiB,aAAZ,AAAO,oBAAO,GAAG,AAAO,0BAC5B,sCACgC,8CACtB,wBAAS,GAAG,QAAC,KACnB,4CACE,AAAgD,iCAA9B,UAAU,YAAc,aAAF,CAAC,IAAG,cAAY,6BAC/C,mCAAoB,mBAAmB,aAAZ,AAAO,oBAAO,aAAa,qBAAa,CAAC;IAMhG;qBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAuB;IAAQ;;;IAnCtE;;;EAoCtB;;;;;;;;;;;;;;;;;;;IC7Cc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGiB;IAA2B;;;QAlBhE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBF,MAAX;AAKO,MAHb,0BAAgC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BACjF,gBAAY,cAAM,cAAS;yCAC3B,sBAAkB,oBAAc,cAAM,iDACtC;AACE,sBAAY,4CAAwB,wBAA0B;AACL,MAA/D,sBAAiB,AAA4B,kCAAf,UAAU,cAAa,SAAS;AACA,MAA9D,qBAAgB,AAA4B,kCAAf,UAAU,cAAa,SAAS;IAC/D;;AAIsB,MAApB,AAAW;AACI,MAAT;IACR;UAG0B;;AAClB,sBAAwB,aAAZ,AAAO,iCAAO,AAAc;AAC9C,YAAO,8BACE,0CACc,mCAAY,WAA6B,aAArB,AAAe,iEAC1B,kDACZ,mCACH,mBAAO,SAAS,UACpB,mBAAa,GAAG,AAAI,AAAY,MAAV,SAAS,gBAAG,AAAe;IAIhE;mBAEwB,OAAc;AAAe,YAAA,AAAO,AAAY,4BAAG,OACrE,AAAO,wBAAY,cAAS,KAAK,IACjC,4CACc,6CACH,AAAO,iCACa,mCAAW,uBAAS,UAAU;IAE5D;;;IA7Ca;IACF;IACA;;;EA4CpB;;;;;;;;;;;;;;;;;;;;;;ICxDc;;;;;;IACG;;;;;;IACF;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGmB;IAA6B;;;QArBpE;QACC;QACA;QACA;QACA;QACA;QACA;;IALA;IACA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;AACf,yEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBF,MAAX;AAIM,MAFZ,8BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEsG,MAD1G,oBAAa,AACR,kCADqB,UAAU,cACvB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,8BACE,0CACc,mCAAY,WAA+B,CAAtB,AAAE,iBAAE,AAAW,gEAC3B,kDACZ,mCACH,mBAAO,AAAO,0BAClB,qBAAa;IAI5B;qBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAc,AAAO;IAAO;;;IApCnE;IACF;;;EAoCpB;;;;;;;;;;;;;;;;;;;ICrDc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGkB;IAA4B;;;QAlBlE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,uEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAIM,MAFZ,8BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEqG,MADzG,oBAAc,AACT,kCADsB,UAAU,gBACxB,4CAAwB;AAEqE,MAD1G,oBAAc,AACT,kCADsB,UAAU,gBACxB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,8BACE,0CACc,mCACf,WAAgC,CAAvB,AAAE,iBAAE,AAAY,4BAAS,YAClC,WAAgC,CAAvB,AAAE,iBAAE,AAAY,4BAAS,4BACV,kDACZ,mCACH,mBAAO,AAAO,0BAClB,qBAAa;IAI5B;qBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO;IAAO;;;IAxC9C;IACF;IAAa;;;EAwCjC;;;;;;;;;;;;;;;;;;;;ICpDc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGmB;IAA6B;;;QAlBpE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,yEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAIM,MAFZ,8BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEqG,MADzG,qBAAc,AACT,kCADsB,UAAU,gBACxB,4CAAwB;AAEqE,MAD1G,qBAAc,AACT,kCADsB,UAAU,gBACxB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,8BACE,0CACc,mCACf,WAAgC,CAAvB,AAAE,iBAAE,AAAY,6BAAS,YAClC,WAAgC,CAAvB,AAAE,iBAAE,AAAY,6BAAS,4BACV,kDACZ,mCAAoB,mBAAO,AAAO,0BAAc,qBAAa;IAGnF;qBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAuB;IAAQ;;;IArCtE;IACF;IAAa;;;EAqCjC;;;;;;;;;;;;;;;;;;;;;IC/Cc;;;;;;IACC;;;;;;IACA;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGW;IAAqB;;;QArBpD;QACC;QACA;QACA;QACA;QACA;QACA;;IALA;IACA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;UACR,AAAY,WAAD,IAAI;AACtB,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBF,MAAX;AAIM,MAFZ,8BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEsG,MAD1G,sBAAc,AACT,kCADsB,UAAU,cACxB,4CAAwB;AAEqE,MAD1G,sBAAc,AACT,kCADsB,UAAU,cACxB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACE,+BACa,sBAChB,gCACW,AAAI,mBAAE,AAAY,mCACV,kCAAa,AAAY,kCAAc,qBAAa,0HAEvE,gCACW,AAAI,mBAAE,AAAY,mCACV,kCAAa,AAAY,kCAAc,qBAAa;IAK/E;qBAEwB;AACtB,YAAgB,oCACH,mBAAO,AAAO,0BAClB,AAAO,AAAY,2BAAG,OACvB,AAAO,wBAAY,cAAS,KAAK,IACjC,4CACc,6CACM,oCACD,8BAAW,AAAO,0BAAc,AAAO;IAIpE;;;IApDoB;IACF;IAAa;;;EAoDjC;;;;;;;;;;;;;;;;;;;;ICjEc;;;;;;IACC;;;;;;IACA;;;;;;IACE;;;;;;IACW;;;;;;;AAGS;IAAmB;;;QAlBhD;QACW;QACV;QACA;QACA;QACA;;IAJU;IACV;IACA;IACA;IACA;UACM,AAAM,KAAD,IAAI;UACT,AAAU,SAAD,IAAI;UACb,AAAK,IAAD,IAAI;AACf,oDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAIM,MAFZ,8BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEqG,MADzG,sBAAc,AACT,kCADsB,UAAU,cACxB,4CAAwB;AAEoE,MADzG,sBAAc,AACT,kCADsB,AAAG,CAAF,IAAI,QAAQ,AAAE,IAAE,YAC/B,4CAAwB;AAEyE,MAD9G,oBAAc,AACT,kCADsB,WAAW,AAAE,IAAE,YAC7B,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,8BACE,0CACc,mCAAY,WAA4B,AAAI,AAAK,aAA5B,AAAY,6BAAS,wBAAS,oBAC1C,kDACZ,mCACH,mBAAO,AAAO,0BAClB,8CACc,sCACL,AAAO,mCACP,AAAO,oCACF,AAAY,qCACd,iCAAE,AAAY;IAMzC;;;IA3CoB;IACF;IAAa;IAAa;;;EA2C9C;;;;;;;;;;;;;;;;;;;;IAce;;;;;;IACD;;;;;;IACA;;;;;;IACC;;;;;;IACA;;;;;;UAGK,QAAa;AACvB,mBAAS,kBAAkB,aAAX,AAAK,IAAD,UAAS,GAAe,aAAZ,AAAK,IAAD,WAAU;AAC9C,mBAAqD,CAA3C,AAA6B,sBAAzB,AAAK,IAAD,QAAQ,AAAK,IAAD,wBAAW,oBAAc;AAO5D,MAND,AAAO,MAAD,SACC,gCAAmB,MAAM,UAAU,MAAM,IAC9C,iBACA,AAAE,AAAK,qCAAE,uBACT,OACA;IAEJ;;wCAGiC;AAAgB;IAAI;;;;QA9B9C;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;IACS,yBAAE,gBACR,WAAQ,UAAU,EAClB,WAAsB,yBACtB,iBAAc,UAAU,EACxB,eAAsB;AAThC;;EASsC;;;;;;;;;;;;;;;;;cA6Bd;AAAM,YAAG,cAAF,CAAC,KAAI,MAAO,AAAE,iBAAE,CAAC,IAAG,AAAE,KAAG,AAAE,iBAAE,CAAC;IAAC;;;AAHxD;;EAAkB;;;;;;;;;;IC5FZ;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGiB;IAA2B;;;QAlBhE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAEoG,MAA1G,8BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;AAEM,MADxG,qBAAa,AACR,kCADqB,UAAU,eACvB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,6CAAuB,2BAAmB,qBAAa;IAChE;qBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,kBAAW,8BAAiB,AAAO,yBAAa,AAAO;IAAK;;;IAzB9C;IACF;;;EAyBpB;;;;;;;;;;;;;;cAM0B;AACtB,UAAM,aAAF,CAAC,KAAI,OAAS,aAAF,CAAC,IAAG;AAClB,cAAO,AAAY,UAAR,CAAC,EAAE,OAAO;YAChB,KAAM,aAAF,CAAC,KAAI,QAAU,aAAF,CAAC,IAAG;AAC1B,cAAO,AAAI,OAAG,AAAmB,SAAb,aAAF,CAAC,IAAG,MAAM,OAAO;YAC9B,KAAM,aAAF,CAAC,KAAI,QAAU,aAAF,CAAC,IAAG;AAC1B,cAAO;YACF,KAAM,aAAF,CAAC,KAAI,OAAS,aAAF,CAAC,IAAG;AACzB,cAAO,AAAkB,UAAZ,aAAF,CAAC,IAAG,KAAK,OAAO;YACtB,KAAM,aAAF,CAAC,KAAI,QAAU,aAAF,CAAC,IAAG;AAC1B,cAAO,AAAI,OAAG,AAAmB,SAAb,aAAF,CAAC,IAAG,MAAM,OAAO;;AAErC,YAAO;IACT;;;AAhBM;;EAAY;;;;;;;;;;IC3CN;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGU;IAAoB;;;QAlBlD;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,sDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAIM,MAFZ,8BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AACiE,MAArE,qBAAa,AAAoC,iCAAX,kCAAmB;IAC3D;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACE,gCACI,AAAI,mBAAE,AAAW,kCACT,kCACR,AAAW,iCACF,mCACH,mBAAO,AAAO,0BAClB,qBAAa;IAK9B;qBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAA8B,mCAAe,AAAO;IAAO;;;IArCtE;IACF;;;EAqCpB;;;;;;;;;;;;;;;;;;IChDe;;;;;;IACD;;;;;;IACG;;;;;;IACW;;;;;;;AAGqB;IAA+B;;;QAfxE;QACW;QACV;QACA;QACA;;IAHU;IACV;IACA;IACA;UACM,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;AACf,8EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiBF,MAAX;AAIM,MAFZ,8BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEkC,MADtC,kCAAoB,4CAAwB,+CACxC,iBAAY,cAAM,cAAS;;AAEiF,MADhH,2BAAqB,AAChB,kCAD6B,UAAU,cAC/B,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACE,+CACE,iCACS,mCACH,mBAAmB,aAAZ,AAAO,gDAClB,oCACI,oDACC,AAAkB,sCACnB,AAAO;IAM1B;;;IAtCoB;IACF;IAAmB;;;EAsCvC;;;;;;;;;;;;;;;;UAgBoB,QAAa;;AACvB,oBAAqB,aAAX,AAAK,IAAD,UAAS;AACvB,uBAAyB,aAAZ,AAAK,IAAD,WAAU;AAC3B,2BAAiB,sBAAS,AAAQ,OAAD,GAAG,KAAK,UAAU;AACnD,qBAAW,sBAAS,KAAK,AAAe,cAAD,GAAG;AAC1C,qBAAW,AAAS,QAAD,GAAG;AACtB,gBAAM,QAAQ;AACd,mBAAqB,aAAZ,AAAK,IAAD,WAAU,QAAQ;AACR,MAA7B,AAAO,2BAAc,QAAQ;AAEvB,gCAAgB,eAClB,UAAO,AAAQ,OAAD,GAAG,cAAc,EAAE,GAAG,GACpC,UAAO,AAAQ,OAAD,GAAG,cAAc,EAAE,GAAG,GACpC,UAAO,AAAQ,OAAD,GAAG,QAAQ,EAAE,UAAU,GACrC,UAAO,AAAQ,OAAD,GAAG,cAAc,EAAE,MAAM,GACvC,UAAO,AAAQ,OAAD,GAAG,cAAc,EAAE,MAAM,GACvC,UAAO,AAAQ,OAAD,GAAG,QAAQ,EAAE,UAAU,GACrC;AACkC,MAAtC,AAAO,MAAD,UAAU,aAAa,EAAE;AAEzB,6BAAY,eACd,WAAO,KAAK,GAAG,GACf,YAAa,qBAAS,KAAK,AAAW,UAAD,gBAAG,cAAQ,AAAK,IAAD,QAAQ,UAAU;AACoB,MAA9F,AAAO,MAAD,UAAe,gBAAsB,4BAAW,aAAa,EAAE,SAAS,GAAG;AAE3E,kCAAgB,eAClB,YAAO,OAAO,EAAE,MAAM,GACtB,oBAAe,AAAe,cAAD,gBAAG,cAAQ,MACxC,YAAO,OAAO,EAAE,AAAO,AAAsB,MAAvB,GAAU,aAAP,eAAS,UAAU,GAAG,QAAQ,GACvD,YAAO,AAAQ,OAAD,GAAG,AAAe,cAAD,gBAAG,cAAQ,MAAM,GAChD;AACE,sBAAiB,gBACP,4BACd,aAAa,UACb,eAAQ,aAAa,qBAAS,KAAK,UAAU,EAAE,AAAK,IAAD,QAAQ,AAAK,IAAD;AAEzB,MAAxC,AAAO,MAAD,UAAU,SAAS,EAAE;AAEkD,MAA7E,AAAO,MAAD,UAAU,kBAAO,OAAO,EAAE,UAAU,GAAG,kBAAO,OAAO,EAAE,MAAM,GAAG;IACxE;;wCAGiC;AAAgB;IAAI;;;;QAvD/B;QAAwB;IAAxB;IACT,qBAAE,gBACL,WAAsB,yBACtB,WAAQ,KAAK;IACJ,4BAAE,gBACX,YAAsB,uBACtB,YAAQ,KAAK;AANvB;;EAMuB;;;;;;;;;;;;;;;;;;;IC3DX;;;;;;IACC;;;;;;IACE;;;;;;IACW;;;;;;;AAGc;IAAwB;;;QAf1D;QACW;QACV;QACA;QACA;;IAHU;IACV;IACA;IACA;UACM,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;AACf,+DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiBF,MAAX;AAIM,MAFZ,+BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEsG,MAD1G,qBAAa,AACR,kCADqB,UAAU,cACvB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,8BACE,0CACc,mCAAY,WAA2B,aAAlB,AAAW,gEACvB,kDACrB,kCACW,mCAAoB,mBAAO,AAAO,uFACzC,6CAAyB,AAAO;IAIjD;;;IAhCoB;IACF;;;EAgCpB;;;;;;;;;;;;;;UAYoB,QAAa;AACvB,iBAAY,uBAAkB,gBAAM,kBAAO,AAAK,IAAD,QAAQ,AAAK,IAAD;AACP,MAA1D,AAAO,MAAD,SAAS,IAAI,EAAE,KAAK,eAAU,cAAS,MAAM;AACoB,MAAvE,AAAO,MAAD,SAAS,IAAI,EAAE,eAAU,QAAQ,eAAU,cAAS,MAAM;IAClE;;wCAGiC;AAAgB;IAAI;cAE7B;AAAU,YAAQ,AAAM,qBAAJ,mBAAM,KAAK;;;;;QAlB/B;QAAqB;IAArB;IACX,sBAAE,gBACL,WAAQ,KAAK,EACb,iBAAc;AAHxB;;EAG2B;;;;;;;;;;;;;;;;;;;;IChDf;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGgB;IAA0B;;;QAlB9D;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,mEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAKO,MAHb,+BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B,sBAAkB,oBAAc,cAAM,sDACtC;AAEsG,MAD1G,iBAAW,AACN,kCADmB,UAAU,gBACrB,4CAAwB;AAEqE,MAD1G,iBAAW,AACN,kCADmB,UAAU,gBACrB,4CAAwB;AAEqE,MAD1G,iBAAW,AACN,kCADmB,UAAU,gBACrB,4CAAwB;AAEqE,MAD1G,iBAAW,AACN,kCADmB,UAAU,gBACrB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACW,mCACH,mBAAO,AAAO,0BAClB,6BACY,mCACR,AAAM,CAAL,OAAO,kBACR,+BACa,sBAChB,aAAM,eAAc,kBACpB,aAAM,eAAc,kBACpB,aAAM,eAAc,kBACpB,aAAM,eAAc;IAOlC;aAEiB;;UAAsB;AAC/B,kBAAoB,aAAZ,AAAO,oBAAO;AAAK,sBAAwB,aAAZ,AAAO,oBAAO;AAE7C,2BAAmB,mCAAY,WAAwB,aAAhB,AAAU,SAAD,UAAS;AAEvE,YAAkB,iCACX,SAAS,QACR,SAAS,SACR,oCACc,iCAAU,AAAK,AAAU,QAAL,aAAF,CAAC,IAAG,KAAK,mBACvC,gCACgB,mCACd,oCACM,QAAQ,aACE,uCACd,gCACI,AAAI,MAAmB,aAAhB,AAAU,SAAD,UAAS,cAClB,mCACH,mBAAO,AAAM,KAAD,GAAG,WACnB,qBAAe,aAAF,CAAC,IAAG;IAOtC;qBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO;IAAO;;;IA/E9C;IACF;IAAU;IAAU;IAAU;;;EA+ElD;;;;;;;;;;;;;;;;;;;;;;;;ICzFc;;;;;;IACG;;;;;;IACF;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGe;IAAyB;;;QArB5D;QACC;QACA;QACA;QACA;QACA;QACA;;IALA;IACA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;AACf,iEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAEoG,MAA1G,+BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;IACpG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAgB,oCACH,mBAAO,AAAO,0BAClB,yCACgC,6CACV,iCACT,sBAChB,iCAC6B,0CACU,yCACnB,sBAChB,cAAQ,GAAG,IACX,+BAA4B,aAAZ,AAAO,oBAAO,8DAC9B,cAAQ,GAAG,IACX,+BAA4B,aAAZ,AAAO,oBAAO,8DAC9B,cAAQ,GAAG,iEAGf,iCAC6B,0CACU,yCACnB,sBAChB,gCAA6B,aAAZ,AAAO,oBAAO,UAAU,AAAO,0IAGpD,iCAC6B,0CACU,yCACnB,sBAChB,cAAQ,GAAG,IACX,+BAA4B,aAAZ,AAAO,oBAAO,8DAC9B,cAAQ,GAAG,IACX,+BAA4B,aAAZ,AAAO,oBAAO,8DAC9B,cAAQ,GAAG,iEAGf,iCAC6B,0CACU,yCACnB,sBAChB,gCAA6B,aAAZ,AAAO,oBAAO,UAAU,AAAO,0IAGpD,iCAC6B,0CACU,yCACnB,sBAChB,cAAQ,GAAG,IACX,+BAA4B,aAAZ,AAAO,oBAAO,8DAC9B,cAAQ,GAAG,IACX,+BAA4B,aAAZ,AAAO,oBAAO,8DAC9B,cAAQ,GAAG;IAMvB;cAEmB,OAAW;AAC5B,YAAO,8CACI,AAAuD,iCAArC,UAAU,YAAY,AAAI,OAAK,aAAF,CAAC,IAAG,aAAY,8BACxD,mCACH,mBAAmB,aAAZ,AAAO,oBAAO,WACzB,sBAAa,KAAK;IAG/B;sBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAc,AAAO;IAAO;;;IAvFnE;;;EAwFtB;;;;;;;;;;;;;;;;;;;;ICpGc;;;;;;IACG;;;;;;IACF;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGe;IAAyB;;;QArB5D;QACC;QACA;QACA;QACA;QACA;QACA;;IALA;IACA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;AACf,iEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBF,MAAX;AAEoG,MAA1G,+BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;IACpG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACW,mCACH,mBAAO,AAAO,0BAClB,+BACU,wBAAS,GAAG,QAAC;AACpB,8BAAwB,aAAZ,AAAO,oBAAO;AAChC,oBAAkB,kCACV,SAAS,OACV,SAAS,SACP,oCACc,iCAAU,AAAK,AAAU,QAAL,aAAF,CAAC,IAAG,KAAK,mBACvC,gCACgB,mCACd,6CACI,AAAmD,iCAAjC,UAAU,YAAY,AAAM,mBAAC,CAAC,YAAW,8BACpD,mCAAoB,mBAAmB,aAAZ,AAAO,oBAAO,cAAc,sBAAa,CAAC;;IASvG;sBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAc,AAAO;IAAO;;;IA9CpE,cAAS,sBAAC,KAAI,CAAC,KAAK,CAAC,KAAK,CAAC;IAC1B;;;EA8CtB;;;;;;;;;;;;;;;;;;;IC7Dc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGe;IAAyB;;;QAlB5D;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,iEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiBF,MAAX;AAEoG,MAA1G,+BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;IACpG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACW,mCACH,mBAAO,AAAO,0BAClB,6BACY,mCACR,AAAM,CAAL,OAAO,kBACR,+BACU,wBAAS,GAAG,QAAC;AACpB,8BAAoB,aAAZ,AAAO,oBAAO;AAAK,kCAAwB,aAAZ,AAAO,oBAAO;AAC3D,wBAAkB,iCACX,SAAS,QACR,SAAS,SACE,kCACR,aACC,kBAAO,AAAO,CAAN,KAAK,GAAG,KAAI,AAAO,CAAN,KAAK,GAAG,aAC9B,oCACc,iCAAU,AAAK,AAAI,oBAAF,CAAC,IAAG,mBACjC,gCACgB,mCACd,6CACI,AAAiD,iCAA/B,UAAU,YAAY,AAAI,mBAAE,CAAC,YAAU,8BAClD,mCAAoB,mBAAO,KAAK,UAAU,sBAAa,CAAC;;IAYhG;sBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO;IAAO;;;IAtD9C;;;EAuDtB;;;;;;;;;;;;;;;;;;IClEc;;;;;;IACC;;;;;;IACA;;;;;;IACE;;;;;;IACW;;;;;;;AAGa;IAAuB;;;QAjBxD;QACW;QACV;QACA;QACA;QACA;;IAJU;IACV;IACA;IACA;IACA;UACM,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;AACf,6DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAIM,MAFZ,+BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEqG,MADzG,qBAAa,AACR,kCADqB,UAAU,cACvB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,8BACE,0CACc,mCAAY,WAA2B,AAAU,aAA5B,AAAW,gDAAmB,oBAC1C,kDACrB,kCACW,mCAAoB,mBAAO,AAAO,uFACzC,gDAA6B,AAAO,8BAAkB,AAAO;IAI9E;;;IAhCoB;IACF;;;EAgCpB;;;;;;;;;;;;;UAaoB,QAAa;AACvB,iBAAY,uBAAkB,gBAAM,kBAAO,AAAK,IAAD,QAAQ,AAAK,IAAD;AACJ,MAA7D,AAAO,MAAD,SAAS,IAAI,EAAE,KAAK,eAAU,aAAQ,OAAO;AACuB,MAA1E,AAAO,MAAD,SAAS,IAAI,EAAE,eAAU,QAAQ,eAAU,aAAQ,OAAO;IAClE;;wCAGiC;AAAgB;IAAI;cAE7B;AAAU,YAAQ,AAAM,qBAAJ,mBAAM,KAAK;;;;;QAnBhC;QAAqB;QAAkB;IAAvC;IACP,uBAAE,gBACR,WAAQ,KAAK,EACb,iBAAc,UAAU,EACxB,WAAsB;AAJhC;;EAIsC;;;;;;;;;;;;;;;;;;;;ICnD1B;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGa;IAAuB;;;QAlBxD;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,6DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAIO,MAFb,+BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,sBAAkB,oBAAc,cAAM,sDACtC;AAEqG,MADzG,eAAS,AACJ,kCADiB,UAAU,cACnB,4CAAwB;AAEoE,MADzG,eAAS,AACJ,kCADiB,UAAU,cACnB,4CAAwB;AAEoE,MADzG,eAAS,AACJ,kCADiB,UAAU,cACnB,4CAAwB;AAEoE,MADzG,eAAS,AACJ,kCADiB,UAAU,cACnB,4CAAwB;AAEoE,MADzG,eAAS,AACJ,kCADiB,UAAU,cACnB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAgB,oCACH,mBAAO,AAAO,0BAClB,yCACgC,6CACV,iCACT,sBAChB,iCAC6B,0CACU,yCACnB,sBAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ,iEAGpB,iCAC6B,0CACU,yCACnB,sBAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ,iEAGpB,iCAC6B,0CACU,yCACnB,sBAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ;IAM5B;cAEiC,WAAe;AAC9C,YAAO,6CACE,SAAS,SACA,mCAAoB,mBAAmB,aAAZ,AAAO,oBAAO,WAAW,sBAAa,KAAK;IAE1F;sBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO;IAAO;;;IA7E9C;IACF;IAAQ;IAAQ;IAAQ;IAAQ;;;EA6EpD;;;;;;;;;;;;;;;;;;;;;;;;ICzFc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGW;IAAqB;;;QAlBpD;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAEoG,MAA1G,+BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;IACpG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACW,mCACH,mBAAO,AAAO,0BAClB,+BACU,wBAAS,AAAO,sBAAQ,QAAC;AAChC,8BAAwB,aAAZ,AAAO,oBAAO;AAChC,oBAAkB,kCACV,SAAS,OACV,SAAS,SACP,oCACc,iCAAU,AAAK,AAAQ,oBAAN,KAAK,IAAG,mBACrC,gCACgB,mCACd,4CACE,AAAuD,iCAArC,UAAU,YAAY,AAAM,mBAAC,KAAK,YAAW,8BACtD,mCAAoB,mBAAmB,aAAZ,AAAO,oBAAO,cAAc,sBAAa,KAAK;;IAS3G;sBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAuB;IAAQ;;;IA9CvE,cAAS,sBAAC,KAAI,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC;IAC1E;;;EA8CtB;;;;;;;;;;;;;;;;;;IC3Dc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;;AAG2B;IAA0B;;;QAhB9D;QACC;QACA;QACA;QACA;;IAHA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,mEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiBF,MAAX;AAKO,MAHb,0BAAa,yDAA2B,gBAAgB,AAAO,wBAC3D,eAAY,cAAM,cAAS;yCAC3B,qBAAkB,oBAAc,cAAM,mDACtC;AACuG,MAA3G,eAAS,AAA6B,kCAAhB,CAAC,UAAU,cAAa,4CAAwB,0BAA0B;AAIpF,MAFZ,4BAAc,yDAA2B,gBAAgB,AAAO,wBAC5D,gBAAY,cAAM,cAAS;yCAC3B;AACuG,MAA3G,iBAAU,AAA8B,kCAAjB,UAAU,gBAAe,4CAAwB,2BAA2B;IACrG;;AAIsB,MAApB,AAAW;AACU,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACW,mCACH,mBAAO,AAAO,0BACR,mCACM,aAAd,AAAQ,wBAAQ,kBAChB,+BACa,sBAChB,+BAAgB,YAAY,eAAQ,AAAI,MAAE,AAAO,AAAM,4BAAO,+DAC9D,kCAAmB,YAAY,eAAQ,AAAO,AAAM,4BAAO;IAMvE;eAEsB,OAAW;AAC/B,YAAiB,mCACR,KAAK,SACI,mCACH,mBAAmB,aAAZ,AAAO,oBAAO,aACzB,AAAO,AAAY,2BAAG,OACvB,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAA8B,mCAAe,AAAO;IAGzF;;;IAtDoB;IAAY;IACd;IAAQ;;;EAsD5B","file":"flutter_spinkit.ddc.js"}');
  // Exports:
  return {
    src__double_bounce: double_bounce,
    src__utils: utils,
    src__wave: wave,
    src__fading_circle: fading_circle,
    flutter_spinkit: flutter_spinkit,
    src__wandering_cubes: wandering_cubes,
    src__three_bounce: three_bounce,
    src__square_circle: square_circle,
    src__spinning_circle: spinning_circle,
    src__rotating_plain: rotating_plain,
    src__rotating_circle: rotating_circle,
    src__ripple: ripple,
    src__ring: ring,
    src__pumping_heart: pumping_heart,
    src__pulse: pulse,
    src__pouring_hour_glass: pouring_hour_glass,
    src__hour_glass: hour_glass,
    src__folding_cube: folding_cube,
    src__fading_grid: fading_grid,
    src__fading_four: fading_four,
    src__fading_cube: fading_cube,
    src__dual_ring: dual_ring,
    src__cube_grid: cube_grid,
    src__circle: circle,
    src__chasing_dots: chasing_dots
  };
});

//# sourceMappingURL=flutter_spinkit.ddc.js.map
