define(['dart_sdk', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/animation/animation', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__rendering__animated_size, packages__flutter__src__animation__animation, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const theme = packages__flutter__material.src__material__theme;
  const colors = packages__flutter__material.src__material__colors;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const icon_theme = packages__flutter__src__widgets__actions.src__widgets__icon_theme;
  const icon_theme_data = packages__flutter__src__widgets__actions.src__widgets__icon_theme_data;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors$ = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const bottom_navy_bar = Object.create(dart.library);
  const $length = dartx.length;
  const $add = dartx.add;
  const $indexOf = dartx.indexOf;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let BottomNavyBarItemToGestureDetector = () => (BottomNavyBarItemToGestureDetector = dart.constFn(dart.fnType(gesture_detector.GestureDetector, [bottom_navy_bar.BottomNavyBarItem])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 270000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: flex.MainAxisAlignment.prototype,
        [_name]: "MainAxisAlignment.spaceBetween",
        index: 3
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 520093696
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: box_shadow.BoxShadow.prototype,
        [Shadow_blurRadius]: 2,
        [Shadow_offset]: C4 || CT.C4,
        [Shadow_color]: C5 || CT.C5,
        [BoxShadow_spreadRadius]: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 6,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 6,
        [EdgeInsets_left]: 8
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "item",
        [_Location_column]: 19,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconSize",
        [_Location_column]: 19,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isSelected",
        [_Location_column]: 19,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 19,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCornerRadius",
        [_Location_column]: 19,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animationDuration",
        [_Location_column]: 19,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "curve",
        [_Location_column]: 19,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 65,
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
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 61,
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
        [_Location_column]: 18,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 9,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 7,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "curve",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293128957.0
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290502395.0
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287679225.0
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284790262.0
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282557941.0
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280391411.0
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280191205.0
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279858898.0
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279592384.0
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279060385.0
      });
    },
    get C73() {
      return C73 = dart.constMap(core.int, ui.Color, [50, C74 || CT.C74, 100, C75 || CT.C75, 200, C76 || CT.C76, 300, C77 || CT.C77, 400, C78 || CT.C78, 500, C79 || CT.C79, 600, C80 || CT.C80, 700, C81 || CT.C81, 800, C82 || CT.C82, 900, C83 || CT.C83]);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4280391411.0,
        [ColorSwatch__swatch]: C73 || CT.C73
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const _name = dart.privateName(flex, "_name");
  let C1;
  let C2;
  const Shadow_blurRadius = dart.privateName(ui, "Shadow.blurRadius");
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C4;
  const Shadow_offset = dart.privateName(ui, "Shadow.offset");
  const Color_value = dart.privateName(ui, "Color.value");
  let C5;
  const Shadow_color = dart.privateName(ui, "Shadow.color");
  const BoxShadow_spreadRadius = dart.privateName(box_shadow, "BoxShadow.spreadRadius");
  let C3;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C6;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C8;
  let C7;
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
  let C28;
  let C29;
  let C25;
  let C24;
  let C32;
  let C31;
  let C30;
  let C35;
  let C36;
  let C34;
  let C33;
  const selectedIndex$ = dart.privateName(bottom_navy_bar, "BottomNavyBar.selectedIndex");
  const iconSize$ = dart.privateName(bottom_navy_bar, "BottomNavyBar.iconSize");
  const backgroundColor$ = dart.privateName(bottom_navy_bar, "BottomNavyBar.backgroundColor");
  const showElevation$ = dart.privateName(bottom_navy_bar, "BottomNavyBar.showElevation");
  const animationDuration$ = dart.privateName(bottom_navy_bar, "BottomNavyBar.animationDuration");
  const items$ = dart.privateName(bottom_navy_bar, "BottomNavyBar.items");
  const onItemSelected$ = dart.privateName(bottom_navy_bar, "BottomNavyBar.onItemSelected");
  const mainAxisAlignment$ = dart.privateName(bottom_navy_bar, "BottomNavyBar.mainAxisAlignment");
  const itemCornerRadius$ = dart.privateName(bottom_navy_bar, "BottomNavyBar.itemCornerRadius");
  const curve$ = dart.privateName(bottom_navy_bar, "BottomNavyBar.curve");
  bottom_navy_bar.BottomNavyBar = class BottomNavyBar extends framework.StatelessWidget {
    get selectedIndex() {
      return this[selectedIndex$];
    }
    set selectedIndex(value) {
      super.selectedIndex = value;
    }
    get iconSize() {
      return this[iconSize$];
    }
    set iconSize(value) {
      super.iconSize = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get showElevation() {
      return this[showElevation$];
    }
    set showElevation(value) {
      super.showElevation = value;
    }
    get animationDuration() {
      return this[animationDuration$];
    }
    set animationDuration(value) {
      super.animationDuration = value;
    }
    get items() {
      return this[items$];
    }
    set items(value) {
      super.items = value;
    }
    get onItemSelected() {
      return this[onItemSelected$];
    }
    set onItemSelected(value) {
      super.onItemSelected = value;
    }
    get mainAxisAlignment() {
      return this[mainAxisAlignment$];
    }
    set mainAxisAlignment(value) {
      super.mainAxisAlignment = value;
    }
    get itemCornerRadius() {
      return this[itemCornerRadius$];
    }
    set itemCornerRadius(value) {
      super.itemCornerRadius = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    build(context) {
      let bgColor = this.backgroundColor == null ? theme.Theme.of(context).bottomAppBarColor : this.backgroundColor;
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: bgColor, boxShadow: (() => {
            let t0 = JSArrayOfBoxShadow().of([]);
            if (dart.test(this.showElevation)) t0[$add](C3 || CT.C3);
            return t0;
          })()}), child: new safe_area.SafeArea.new({child: new container.Container.new({width: 1 / 0, height: 56.0, padding: C6 || CT.C6, child: new basic.Row.new({mainAxisAlignment: this.mainAxisAlignment, children: this.items[$map](gesture_detector.GestureDetector, dart.fn(item => {
                let index = this.items[$indexOf](item);
                return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => this.onItemSelected(index), VoidTovoid()), child: new bottom_navy_bar._ItemWidget.new({item: item, iconSize: this.iconSize, isSelected: index == this.selectedIndex, backgroundColor: bgColor, itemCornerRadius: this.itemCornerRadius, animationDuration: this.animationDuration, curve: this.curve, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
              }, BottomNavyBarItemToGestureDetector()))[$toList](), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
    }
  };
  (bottom_navy_bar.BottomNavyBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let selectedIndex = opts && 'selectedIndex' in opts ? opts.selectedIndex : 0;
    let showElevation = opts && 'showElevation' in opts ? opts.showElevation : true;
    let iconSize = opts && 'iconSize' in opts ? opts.iconSize : 24;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let itemCornerRadius = opts && 'itemCornerRadius' in opts ? opts.itemCornerRadius : 50;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : C0 || CT.C0;
    let mainAxisAlignment = opts && 'mainAxisAlignment' in opts ? opts.mainAxisAlignment : C1 || CT.C1;
    let items = opts && 'items' in opts ? opts.items : null;
    let onItemSelected = opts && 'onItemSelected' in opts ? opts.onItemSelected : null;
    let curve = opts && 'curve' in opts ? opts.curve : C2 || CT.C2;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[selectedIndex$] = selectedIndex;
    this[showElevation$] = showElevation;
    this[iconSize$] = iconSize;
    this[backgroundColor$] = backgroundColor;
    this[itemCornerRadius$] = itemCornerRadius;
    this[animationDuration$] = animationDuration;
    this[mainAxisAlignment$] = mainAxisAlignment;
    this[items$] = items;
    this[onItemSelected$] = onItemSelected;
    this[curve$] = curve;
    bottom_navy_bar.BottomNavyBar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    if (!(this.items != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 31, 12, "items != null");
    if (!(dart.notNull(this.items[$length]) >= 2 && dart.notNull(this.items[$length]) <= 5)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 32, 12, "items.length >= 2 && items.length <= 5");
    if (!(this.onItemSelected != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 33, 12, "onItemSelected != null");
    if (!(this.curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 34, 12, "curve != null");
  }).prototype = bottom_navy_bar.BottomNavyBar.prototype;
  dart.addTypeTests(bottom_navy_bar.BottomNavyBar);
  dart.setMethodSignature(bottom_navy_bar.BottomNavyBar, () => ({
    __proto__: dart.getMethods(bottom_navy_bar.BottomNavyBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_navy_bar.BottomNavyBar, "package:bottom_navy_bar/bottom_navy_bar.dart");
  dart.setFieldSignature(bottom_navy_bar.BottomNavyBar, () => ({
    __proto__: dart.getFields(bottom_navy_bar.BottomNavyBar.__proto__),
    selectedIndex: dart.finalFieldType(core.int),
    iconSize: dart.finalFieldType(core.double),
    backgroundColor: dart.finalFieldType(ui.Color),
    showElevation: dart.finalFieldType(core.bool),
    animationDuration: dart.finalFieldType(core.Duration),
    items: dart.finalFieldType(core.List$(bottom_navy_bar.BottomNavyBarItem)),
    onItemSelected: dart.finalFieldType(dart.fnType(dart.void, [core.int])),
    mainAxisAlignment: dart.finalFieldType(flex.MainAxisAlignment),
    itemCornerRadius: dart.finalFieldType(core.double),
    curve: dart.finalFieldType(curves.Curve)
  }));
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C46;
  let C45;
  let C50;
  let C51;
  let C52;
  let C53;
  let C49;
  let C48;
  let C56;
  let C57;
  let C58;
  let C55;
  let C54;
  let C61;
  let C62;
  let C63;
  let C60;
  let C59;
  let C66;
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C65;
  let C64;
  const iconSize$0 = dart.privateName(bottom_navy_bar, "_ItemWidget.iconSize");
  const isSelected$ = dart.privateName(bottom_navy_bar, "_ItemWidget.isSelected");
  const item$ = dart.privateName(bottom_navy_bar, "_ItemWidget.item");
  const backgroundColor$0 = dart.privateName(bottom_navy_bar, "_ItemWidget.backgroundColor");
  const itemCornerRadius$0 = dart.privateName(bottom_navy_bar, "_ItemWidget.itemCornerRadius");
  const animationDuration$0 = dart.privateName(bottom_navy_bar, "_ItemWidget.animationDuration");
  const curve$0 = dart.privateName(bottom_navy_bar, "_ItemWidget.curve");
  bottom_navy_bar._ItemWidget = class _ItemWidget extends framework.StatelessWidget {
    get iconSize() {
      return this[iconSize$0];
    }
    set iconSize(value) {
      super.iconSize = value;
    }
    get isSelected() {
      return this[isSelected$];
    }
    set isSelected(value) {
      super.isSelected = value;
    }
    get item() {
      return this[item$];
    }
    set item(value) {
      super.item = value;
    }
    get backgroundColor() {
      return this[backgroundColor$0];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get itemCornerRadius() {
      return this[itemCornerRadius$0];
    }
    set itemCornerRadius(value) {
      super.itemCornerRadius = value;
    }
    get animationDuration() {
      return this[animationDuration$0];
    }
    set animationDuration(value) {
      super.animationDuration = value;
    }
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      super.curve = value;
    }
    build(context) {
      return new implicit_animations.AnimatedContainer.new({width: dart.test(this.isSelected) ? 130.0 : 50.0, height: 1.7976931348623157e+308, duration: this.animationDuration, curve: this.curve, decoration: new box_decoration.BoxDecoration.new({color: dart.test(this.isSelected) ? this.item.activeColor.withOpacity(0.2) : this.backgroundColor, borderRadius: new border_radius.BorderRadius.circular(this.itemCornerRadius)}), child: new single_child_scroll_view.SingleChildScrollView.new({scrollDirection: basic_types.Axis.horizontal, physics: new scroll_physics.NeverScrollableScrollPhysics.new(), child: new container.Container.new({width: dart.test(this.isSelected) ? 130.0 : 50.0, padding: new edge_insets.EdgeInsets.symmetric({horizontal: 8.0}), child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.center, children: (() => {
                let t1 = JSArrayOfWidget().of([]);
                t1[$add](new icon_theme.IconTheme.new({data: new icon_theme_data.IconThemeData.new({size: this.iconSize, color: dart.test(this.isSelected) ? this.item.activeColor.withOpacity(1.0) : this.item.inactiveColor == null ? this.item.activeColor : this.item.inactiveColor}), child: this.item.icon, $creationLocationd_0dea112b090073317d4: C37 || CT.C37}));
                if (dart.test(this.isSelected)) t1[$add](new basic.Expanded.new({child: new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 4.0}), child: text.DefaultTextStyle.merge({style: new text_style.TextStyle.new({color: this.item.activeColor, fontWeight: ui.FontWeight.bold}), maxLines: 1, textAlign: this.item.textAlign, child: this.item.title}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}));
                return t1;
              })(), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64});
    }
  };
  (bottom_navy_bar._ItemWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let item = opts && 'item' in opts ? opts.item : null;
    let isSelected = opts && 'isSelected' in opts ? opts.isSelected : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
    let itemCornerRadius = opts && 'itemCornerRadius' in opts ? opts.itemCornerRadius : null;
    let iconSize = opts && 'iconSize' in opts ? opts.iconSize : null;
    let curve = opts && 'curve' in opts ? opts.curve : C2 || CT.C2;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[item$] = item;
    this[isSelected$] = isSelected;
    this[backgroundColor$0] = backgroundColor;
    this[animationDuration$0] = animationDuration;
    this[itemCornerRadius$0] = itemCornerRadius;
    this[iconSize$0] = iconSize;
    this[curve$0] = curve;
    if (!(isSelected != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 101, 16, "isSelected != null");
    if (!(item != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 102, 16, "item != null");
    if (!(backgroundColor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 103, 16, "backgroundColor != null");
    if (!(animationDuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 104, 16, "animationDuration != null");
    if (!(itemCornerRadius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 105, 16, "itemCornerRadius != null");
    if (!(iconSize != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 106, 16, "iconSize != null");
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 107, 16, "curve != null");
    bottom_navy_bar._ItemWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottom_navy_bar._ItemWidget.prototype;
  dart.addTypeTests(bottom_navy_bar._ItemWidget);
  dart.setMethodSignature(bottom_navy_bar._ItemWidget, () => ({
    __proto__: dart.getMethods(bottom_navy_bar._ItemWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_navy_bar._ItemWidget, "package:bottom_navy_bar/bottom_navy_bar.dart");
  dart.setFieldSignature(bottom_navy_bar._ItemWidget, () => ({
    __proto__: dart.getFields(bottom_navy_bar._ItemWidget.__proto__),
    iconSize: dart.finalFieldType(core.double),
    isSelected: dart.finalFieldType(core.bool),
    item: dart.finalFieldType(bottom_navy_bar.BottomNavyBarItem),
    backgroundColor: dart.finalFieldType(ui.Color),
    itemCornerRadius: dart.finalFieldType(core.double),
    animationDuration: dart.finalFieldType(core.Duration),
    curve: dart.finalFieldType(curves.Curve)
  }));
  let C74;
  let C75;
  let C76;
  let C77;
  let C78;
  let C79;
  let C80;
  let C81;
  let C82;
  let C83;
  let C73;
  const ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  let C72;
  const icon$ = dart.privateName(bottom_navy_bar, "BottomNavyBarItem.icon");
  const title$ = dart.privateName(bottom_navy_bar, "BottomNavyBarItem.title");
  const activeColor$ = dart.privateName(bottom_navy_bar, "BottomNavyBarItem.activeColor");
  const inactiveColor$ = dart.privateName(bottom_navy_bar, "BottomNavyBarItem.inactiveColor");
  const textAlign$ = dart.privateName(bottom_navy_bar, "BottomNavyBarItem.textAlign");
  bottom_navy_bar.BottomNavyBarItem = class BottomNavyBarItem extends core.Object {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get activeColor() {
      return this[activeColor$];
    }
    set activeColor(value) {
      super.activeColor = value;
    }
    get inactiveColor() {
      return this[inactiveColor$];
    }
    set inactiveColor(value) {
      super.inactiveColor = value;
    }
    get textAlign() {
      return this[textAlign$];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
  };
  (bottom_navy_bar.BottomNavyBarItem.new = function(opts) {
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : C72 || CT.C72;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
    let inactiveColor = opts && 'inactiveColor' in opts ? opts.inactiveColor : null;
    this[icon$] = icon;
    this[title$] = title;
    this[activeColor$] = activeColor;
    this[textAlign$] = textAlign;
    this[inactiveColor$] = inactiveColor;
    if (!(this.icon != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 180, 12, "icon != null");
    if (!(this.title != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bottom_navy_bar/bottom_navy_bar.dart", 181, 12, "title != null");
  }).prototype = bottom_navy_bar.BottomNavyBarItem.prototype;
  dart.addTypeTests(bottom_navy_bar.BottomNavyBarItem);
  dart.setLibraryUri(bottom_navy_bar.BottomNavyBarItem, "package:bottom_navy_bar/bottom_navy_bar.dart");
  dart.setFieldSignature(bottom_navy_bar.BottomNavyBarItem, () => ({
    __proto__: dart.getFields(bottom_navy_bar.BottomNavyBarItem.__proto__),
    icon: dart.finalFieldType(icon.Icon),
    title: dart.finalFieldType(text.Text),
    activeColor: dart.finalFieldType(ui.Color),
    inactiveColor: dart.finalFieldType(ui.Color),
    textAlign: dart.finalFieldType(ui.TextAlign)
  }));
  dart.trackLibraries("packages/bottom_navy_bar/bottom_navy_bar", {
    "package:bottom_navy_bar/bottom_navy_bar.dart": bottom_navy_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bottom_navy_bar.dart"],"names":[],"mappings":"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","file":"bottom_navy_bar.ddc.js"}');
  // Exports:
  return {
    bottom_navy_bar: bottom_navy_bar
  };
});

//# sourceMappingURL=bottom_navy_bar.ddc.js.map
