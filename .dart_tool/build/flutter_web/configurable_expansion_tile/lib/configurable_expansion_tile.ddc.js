define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const page_storage = packages__flutter__src__widgets__actions.src__widgets__page_storage;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const colors = packages__flutter__material.src__material__colors;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const configurable_expansion_tile = Object.create(dart.library);
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C1() {
      return C1 = dart.constList([], framework.Widget);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C4() {
      return C4 = dart.constList([], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 69,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "turns",
        [_Location_column]: 25,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 207,
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
        [_Location_column]: 23,
        [_Location_line]: 205,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 69,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "turns",
        [_Location_column]: 25,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 21,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 201,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 199,
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
        [_Location_column]: 11,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heightFactor",
        [_Location_column]: 15,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 221,
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
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 194,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 248,
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
        [_Location_column]: 22,
        [_Location_line]: 248,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 246,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 7,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 241,
        [_Location_file]: "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart"
      });
    }
  });
  const Color_value = dart.privateName(ui, "Color.value");
  let C0;
  let C1;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C2;
  const onExpansionChanged$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.onExpansionChanged");
  const children$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.children");
  const headerBackgroundColorStart$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.headerBackgroundColorStart");
  const headerBackgroundColorEnd$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.headerBackgroundColorEnd");
  const expandedBackgroundColor$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.expandedBackgroundColor");
  const initiallyExpanded$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.initiallyExpanded");
  const header$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.header");
  const headerExpanded$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.headerExpanded");
  const animatedWidgetFollowingHeader$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.animatedWidgetFollowingHeader");
  const animatedWidgetPrecedingHeader$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.animatedWidgetPrecedingHeader");
  const kExpand$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.kExpand");
  const borderColorStart$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.borderColorStart");
  const borderColorEnd$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.borderColorEnd");
  const topBorderOn$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.topBorderOn");
  const bottomBorderOn$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.bottomBorderOn");
  const headerAnimationTween$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.headerAnimationTween");
  const borderAnimationTween$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.borderAnimationTween");
  const animatedWidgetTurnTween$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.animatedWidgetTurnTween");
  const animatedWidgetTween$ = dart.privateName(configurable_expansion_tile, "ConfigurableExpansionTile.animatedWidgetTween");
  configurable_expansion_tile.ConfigurableExpansionTile = class ConfigurableExpansionTile extends framework.StatefulWidget {
    get onExpansionChanged() {
      return this[onExpansionChanged$];
    }
    set onExpansionChanged(value) {
      super.onExpansionChanged = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get headerBackgroundColorStart() {
      return this[headerBackgroundColorStart$];
    }
    set headerBackgroundColorStart(value) {
      super.headerBackgroundColorStart = value;
    }
    get headerBackgroundColorEnd() {
      return this[headerBackgroundColorEnd$];
    }
    set headerBackgroundColorEnd(value) {
      super.headerBackgroundColorEnd = value;
    }
    get expandedBackgroundColor() {
      return this[expandedBackgroundColor$];
    }
    set expandedBackgroundColor(value) {
      super.expandedBackgroundColor = value;
    }
    get initiallyExpanded() {
      return this[initiallyExpanded$];
    }
    set initiallyExpanded(value) {
      super.initiallyExpanded = value;
    }
    get header() {
      return this[header$];
    }
    set header(value) {
      super.header = value;
    }
    get headerExpanded() {
      return this[headerExpanded$];
    }
    set headerExpanded(value) {
      super.headerExpanded = value;
    }
    get animatedWidgetFollowingHeader() {
      return this[animatedWidgetFollowingHeader$];
    }
    set animatedWidgetFollowingHeader(value) {
      super.animatedWidgetFollowingHeader = value;
    }
    get animatedWidgetPrecedingHeader() {
      return this[animatedWidgetPrecedingHeader$];
    }
    set animatedWidgetPrecedingHeader(value) {
      super.animatedWidgetPrecedingHeader = value;
    }
    get kExpand() {
      return this[kExpand$];
    }
    set kExpand(value) {
      super.kExpand = value;
    }
    get borderColorStart() {
      return this[borderColorStart$];
    }
    set borderColorStart(value) {
      super.borderColorStart = value;
    }
    get borderColorEnd() {
      return this[borderColorEnd$];
    }
    set borderColorEnd(value) {
      super.borderColorEnd = value;
    }
    get topBorderOn() {
      return this[topBorderOn$];
    }
    set topBorderOn(value) {
      super.topBorderOn = value;
    }
    get bottomBorderOn() {
      return this[bottomBorderOn$];
    }
    set bottomBorderOn(value) {
      super.bottomBorderOn = value;
    }
    get headerAnimationTween() {
      return this[headerAnimationTween$];
    }
    set headerAnimationTween(value) {
      super.headerAnimationTween = value;
    }
    get borderAnimationTween() {
      return this[borderAnimationTween$];
    }
    set borderAnimationTween(value) {
      super.borderAnimationTween = value;
    }
    get animatedWidgetTurnTween() {
      return this[animatedWidgetTurnTween$];
    }
    set animatedWidgetTurnTween(value) {
      super.animatedWidgetTurnTween = value;
    }
    get animatedWidgetTween() {
      return this[animatedWidgetTween$];
    }
    set animatedWidgetTween(value) {
      super.animatedWidgetTween = value;
    }
    createState() {
      return new configurable_expansion_tile._ConfigurableExpansionTileState.new();
    }
  };
  (configurable_expansion_tile.ConfigurableExpansionTile.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let headerBackgroundColorStart = opts && 'headerBackgroundColorStart' in opts ? opts.headerBackgroundColorStart : C0 || CT.C0;
    let onExpansionChanged = opts && 'onExpansionChanged' in opts ? opts.onExpansionChanged : null;
    let children = opts && 'children' in opts ? opts.children : C1 || CT.C1;
    let initiallyExpanded = opts && 'initiallyExpanded' in opts ? opts.initiallyExpanded : false;
    let header = opts && 'header' in opts ? opts.header : null;
    let animatedWidgetFollowingHeader = opts && 'animatedWidgetFollowingHeader' in opts ? opts.animatedWidgetFollowingHeader : null;
    let animatedWidgetPrecedingHeader = opts && 'animatedWidgetPrecedingHeader' in opts ? opts.animatedWidgetPrecedingHeader : null;
    let expandedBackgroundColor = opts && 'expandedBackgroundColor' in opts ? opts.expandedBackgroundColor : null;
    let borderColorStart = opts && 'borderColorStart' in opts ? opts.borderColorStart : C0 || CT.C0;
    let borderColorEnd = opts && 'borderColorEnd' in opts ? opts.borderColorEnd : C0 || CT.C0;
    let topBorderOn = opts && 'topBorderOn' in opts ? opts.topBorderOn : true;
    let bottomBorderOn = opts && 'bottomBorderOn' in opts ? opts.bottomBorderOn : true;
    let kExpand = opts && 'kExpand' in opts ? opts.kExpand : C2 || CT.C2;
    let headerBackgroundColorEnd = opts && 'headerBackgroundColorEnd' in opts ? opts.headerBackgroundColorEnd : null;
    let headerExpanded = opts && 'headerExpanded' in opts ? opts.headerExpanded : null;
    let headerAnimationTween = opts && 'headerAnimationTween' in opts ? opts.headerAnimationTween : null;
    let borderAnimationTween = opts && 'borderAnimationTween' in opts ? opts.borderAnimationTween : null;
    let animatedWidgetTurnTween = opts && 'animatedWidgetTurnTween' in opts ? opts.animatedWidgetTurnTween : null;
    let animatedWidgetTween = opts && 'animatedWidgetTween' in opts ? opts.animatedWidgetTween : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[headerBackgroundColorStart$] = headerBackgroundColorStart;
    this[onExpansionChanged$] = onExpansionChanged;
    this[children$] = children;
    this[initiallyExpanded$] = initiallyExpanded;
    this[header$] = header;
    this[animatedWidgetFollowingHeader$] = animatedWidgetFollowingHeader;
    this[animatedWidgetPrecedingHeader$] = animatedWidgetPrecedingHeader;
    this[expandedBackgroundColor$] = expandedBackgroundColor;
    this[borderColorStart$] = borderColorStart;
    this[borderColorEnd$] = borderColorEnd;
    this[topBorderOn$] = topBorderOn;
    this[bottomBorderOn$] = bottomBorderOn;
    this[kExpand$] = kExpand;
    this[headerBackgroundColorEnd$] = headerBackgroundColorEnd;
    this[headerExpanded$] = headerExpanded;
    this[headerAnimationTween$] = headerAnimationTween;
    this[borderAnimationTween$] = borderAnimationTween;
    this[animatedWidgetTurnTween$] = animatedWidgetTurnTween;
    this[animatedWidgetTween$] = animatedWidgetTween;
    if (!(initiallyExpanded != null)) dart.assertFailed(null, "org-dartlang-app:///packages/configurable_expansion_tile/configurable_expansion_tile.dart", 38, 16, "initiallyExpanded != null");
    configurable_expansion_tile.ConfigurableExpansionTile.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = configurable_expansion_tile.ConfigurableExpansionTile.prototype;
  dart.addTypeTests(configurable_expansion_tile.ConfigurableExpansionTile);
  dart.setMethodSignature(configurable_expansion_tile.ConfigurableExpansionTile, () => ({
    __proto__: dart.getMethods(configurable_expansion_tile.ConfigurableExpansionTile.__proto__),
    createState: dart.fnType(configurable_expansion_tile._ConfigurableExpansionTileState, [])
  }));
  dart.setLibraryUri(configurable_expansion_tile.ConfigurableExpansionTile, "package:configurable_expansion_tile/configurable_expansion_tile.dart");
  dart.setFieldSignature(configurable_expansion_tile.ConfigurableExpansionTile, () => ({
    __proto__: dart.getFields(configurable_expansion_tile.ConfigurableExpansionTile.__proto__),
    onExpansionChanged: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    headerBackgroundColorStart: dart.finalFieldType(ui.Color),
    headerBackgroundColorEnd: dart.finalFieldType(ui.Color),
    expandedBackgroundColor: dart.finalFieldType(ui.Color),
    initiallyExpanded: dart.finalFieldType(core.bool),
    header: dart.finalFieldType(framework.Widget),
    headerExpanded: dart.finalFieldType(framework.Widget),
    animatedWidgetFollowingHeader: dart.finalFieldType(framework.Widget),
    animatedWidgetPrecedingHeader: dart.finalFieldType(framework.Widget),
    kExpand: dart.finalFieldType(core.Duration),
    borderColorStart: dart.finalFieldType(ui.Color),
    borderColorEnd: dart.finalFieldType(ui.Color),
    topBorderOn: dart.finalFieldType(core.bool),
    bottomBorderOn: dart.finalFieldType(core.bool),
    headerAnimationTween: dart.finalFieldType(tween.Animatable$(core.double)),
    borderAnimationTween: dart.finalFieldType(tween.Animatable$(core.double)),
    animatedWidgetTurnTween: dart.finalFieldType(tween.Animatable$(core.double)),
    animatedWidgetTween: dart.finalFieldType(tween.Animatable$(core.double))
  }));
  dart.defineLazy(configurable_expansion_tile.ConfigurableExpansionTile, {
    /*configurable_expansion_tile.ConfigurableExpansionTile._easeInTween*/get _easeInTween() {
      return new tween.CurveTween.new({curve: curves.Curves.easeIn});
    },
    /*configurable_expansion_tile.ConfigurableExpansionTile._halfTween*/get _halfTween() {
      return new (TweenOfdouble()).new({begin: 0.0, end: 0.5});
    },
    /*configurable_expansion_tile.ConfigurableExpansionTile._easeOutTween*/get _easeOutTween() {
      return new tween.CurveTween.new({curve: curves.Curves.easeOut});
    }
  });
  const _controller = dart.privateName(configurable_expansion_tile, "_controller");
  const _iconTurns = dart.privateName(configurable_expansion_tile, "_iconTurns");
  const _heightFactor = dart.privateName(configurable_expansion_tile, "_heightFactor");
  const _borderColor = dart.privateName(configurable_expansion_tile, "_borderColor");
  const _headerColor = dart.privateName(configurable_expansion_tile, "_headerColor");
  const _borderColorTween = dart.privateName(configurable_expansion_tile, "_borderColorTween");
  const _headerColorTween = dart.privateName(configurable_expansion_tile, "_headerColorTween");
  const _isExpanded = dart.privateName(configurable_expansion_tile, "_isExpanded");
  const _handleTap = dart.privateName(configurable_expansion_tile, "_handleTap");
  let C4;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C7;
  let C8;
  let C6;
  let C5;
  const _getHeader = dart.privateName(configurable_expansion_tile, "_getHeader");
  let C9;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C18;
  let C15;
  let C14;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C41;
  let C39;
  let C38;
  const _buildChildren = dart.privateName(configurable_expansion_tile, "_buildChildren");
  let C44;
  let C43;
  let C42;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C52;
  let C53;
  let C50;
  let C49;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(configurable_expansion_tile.ConfigurableExpansionTile) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(configurable_expansion_tile.ConfigurableExpansionTile)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(configurable_expansion_tile.ConfigurableExpansionTile));
  configurable_expansion_tile._ConfigurableExpansionTileState = class _ConfigurableExpansionTileState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: this.widget.kExpand, vsync: this});
      this[_heightFactor] = this[_controller].drive(core.double, configurable_expansion_tile.ConfigurableExpansionTile._easeInTween);
      this[_iconTurns] = this[_controller].drive(core.double, (t0 = this.widget.animatedWidgetTurnTween, t0 == null ? configurable_expansion_tile.ConfigurableExpansionTile._halfTween : t0).chain((t0$ = this.widget.animatedWidgetTween, t0$ == null ? configurable_expansion_tile.ConfigurableExpansionTile._easeInTween : t0$)));
      this[_borderColor] = this[_controller].drive(ui.Color, this[_borderColorTween].chain((t0$0 = this.widget.borderAnimationTween, t0$0 == null ? configurable_expansion_tile.ConfigurableExpansionTile._easeOutTween : t0$0)));
      this[_borderColorTween].end = this.widget.borderColorEnd;
      this[_headerColor] = this[_controller].drive(ui.Color, this[_headerColorTween].chain((t0$1 = this.widget.headerAnimationTween, t0$1 == null ? configurable_expansion_tile.ConfigurableExpansionTile._easeInTween : t0$1)));
      this[_headerColorTween].end = (t0$2 = this.widget.headerBackgroundColorEnd, t0$2 == null ? this.widget.headerBackgroundColorStart : t0$2);
      this[_isExpanded] = core.bool._check((t0$4 = (t0$3 = page_storage.PageStorage.of(this.context), t0$3 == null ? null : t0$3.readState(this.context)), t0$4 == null ? this.widget.initiallyExpanded : t0$4));
      if (dart.test(this[_isExpanded])) this[_controller].value = 1.0;
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_handleTap]() {
      this.setState(dart.fn(() => {
        let t0;
        this[_isExpanded] = !dart.test(this[_isExpanded]);
        if (dart.test(this[_isExpanded])) {
          this[_controller].forward();
        } else {
          this[_controller].reverse().then(dart.void, dart.fn(value => {
            if (!dart.test(this.mounted)) return;
            this.setState(dart.fn(() => {
            }, VoidToNull()));
          }, voidToNull()));
        }
        t0 = page_storage.PageStorage.of(this.context);
        t0 == null ? null : t0.writeState(this.context, this[_isExpanded]);
      }, VoidToNull()));
      if (this.widget.onExpansionChanged != null) this.widget.onExpansionChanged(this[_isExpanded]);
    }
    [_buildChildren](context, child) {
      let t0, t0$, t0$0, t0$1, t0$2;
      let borderSideColor = (t0 = this[_borderColor].value, t0 == null ? this.widget.borderColorStart : t0);
      let headerColor = (t0$0 = (t0$ = this[_headerColor], t0$ == null ? null : t0$.value), t0$0 == null ? this.widget.headerBackgroundColorStart : t0$0);
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({top: new borders.BorderSide.new({color: dart.test(this.widget.topBorderOn) ? borderSideColor : colors.Colors.transparent}), bottom: new borders.BorderSide.new({color: dart.test(this.widget.bottomBorderOn) ? borderSideColor : colors.Colors.transparent})})}), child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new gesture_detector.GestureDetector.new({onTap: dart.bind(this, _handleTap), child: new container.Container.new({color: headerColor, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new transitions.RotationTransition.new({turns: this[_iconTurns], child: (t0$1 = this.widget.animatedWidgetPrecedingHeader, t0$1 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}) : t0$1), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), this[_getHeader](), new transitions.RotationTransition.new({turns: this[_iconTurns], child: (t0$2 = this.widget.animatedWidgetFollowingHeader, t0$2 == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C9 || CT.C9}) : t0$2), $creationLocationd_0dea112b090073317d4: C10 || CT.C10})]), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new basic.ClipRect.new({child: new basic.Align.new({heightFactor: this[_heightFactor].value, child: child, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
    }
    [_getHeader]() {
      let t0;
      if (!dart.test(this[_isExpanded])) {
        return this.widget.header;
      } else {
        t0 = this.widget.headerExpanded;
        return t0 == null ? this.widget.header : t0;
      }
    }
    build(context) {
      let t0;
      let closed = !dart.test(this[_isExpanded]) && dart.test(this[_controller].isDismissed);
      return new transitions.AnimatedBuilder.new({animation: this[_controller].view, builder: dart.bind(this, _buildChildren), child: closed ? null : new container.Container.new({color: (t0 = this.widget.expandedBackgroundColor, t0 == null ? colors.Colors.transparent : t0), child: new basic.Column.new({children: this.widget.children, $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49});
    }
  };
  (configurable_expansion_tile._ConfigurableExpansionTileState.new = function() {
    this[_controller] = null;
    this[_iconTurns] = null;
    this[_heightFactor] = null;
    this[_borderColor] = null;
    this[_headerColor] = null;
    this[_borderColorTween] = new tween.ColorTween.new();
    this[_headerColorTween] = new tween.ColorTween.new();
    this[_isExpanded] = false;
    configurable_expansion_tile._ConfigurableExpansionTileState.__proto__.new.call(this);
    ;
  }).prototype = configurable_expansion_tile._ConfigurableExpansionTileState.prototype;
  dart.addTypeTests(configurable_expansion_tile._ConfigurableExpansionTileState);
  dart.setMethodSignature(configurable_expansion_tile._ConfigurableExpansionTileState, () => ({
    __proto__: dart.getMethods(configurable_expansion_tile._ConfigurableExpansionTileState.__proto__),
    [_handleTap]: dart.fnType(dart.void, []),
    [_buildChildren]: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget]),
    [_getHeader]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(configurable_expansion_tile._ConfigurableExpansionTileState, "package:configurable_expansion_tile/configurable_expansion_tile.dart");
  dart.setFieldSignature(configurable_expansion_tile._ConfigurableExpansionTileState, () => ({
    __proto__: dart.getFields(configurable_expansion_tile._ConfigurableExpansionTileState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_iconTurns]: dart.fieldType(animation.Animation$(core.double)),
    [_heightFactor]: dart.fieldType(animation.Animation$(core.double)),
    [_borderColor]: dart.fieldType(animation.Animation$(ui.Color)),
    [_headerColor]: dart.fieldType(animation.Animation$(ui.Color)),
    [_borderColorTween]: dart.finalFieldType(tween.ColorTween),
    [_headerColorTween]: dart.finalFieldType(tween.ColorTween),
    [_isExpanded]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/configurable_expansion_tile/configurable_expansion_tile", {
    "package:configurable_expansion_tile/configurable_expansion_tile.dart": configurable_expansion_tile
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["configurable_expansion_tile.dart"],"names":[],"mappings":"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","file":"configurable_expansion_tile.ddc.js"}');
  // Exports:
  return {
    configurable_expansion_tile: configurable_expansion_tile
  };
});

//# sourceMappingURL=configurable_expansion_tile.ddc.js.map
