define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/country_code_picker/country_code', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__country_code_picker__country_code, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const icons = packages__flutter__material.src__material__icons;
  const dialog = packages__flutter__material.src__material__dialog;
  const text_field = packages__flutter__material.src__material__text_field;
  const divider = packages__flutter__material.src__material__divider;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const country_code = packages__country_code_picker__country_code.country_code;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const selection_dialog = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $addAll = dartx.addAll;
  const $add = dartx.add;
  const $toUpperCase = dartx.toUpperCase;
  const $contains = dartx.contains;
  const $where = dartx.where;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let CountryCodeToSimpleDialogOption = () => (CountryCodeToSimpleDialogOption = dart.constFn(dart.fnType(dialog.SimpleDialogOption, [country_code.CountryCode])))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))();
  let CountryCodeTobool = () => (CountryCodeTobool = dart.constFn(dart.fnType(core.bool, [country_code.CountryCode])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: input_decorator.FloatingLabelBehavior.prototype,
        [_name]: "FloatingLabelBehavior.auto",
        index: 1
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_floatingLabelBehavior]: C1 || CT.C1,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: null,
        [InputDecoration_icon]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 78,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 67,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: proxy_box.DecorationPosition.prototype,
        [_name$]: "DecorationPosition.background",
        index: 0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$0]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C16 || CT.C16,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: null,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: container.DecoratedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [DecoratedBox_position]: C14 || CT.C14,
        [DecoratedBox_decoration]: C15 || CT.C15
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 37,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 23,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 52,
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
        [_Location_column]: 18,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 19,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C57() {
      return C57 = dart.constList([], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 15,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 13,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "direction",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart"
      });
    }
  });
  const InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  const InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  const InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
  const InputDecoration_border = dart.privateName(input_decorator, "InputDecoration.border");
  const InputDecoration_enabledBorder = dart.privateName(input_decorator, "InputDecoration.enabledBorder");
  const InputDecoration_disabledBorder = dart.privateName(input_decorator, "InputDecoration.disabledBorder");
  const InputDecoration_focusedErrorBorder = dart.privateName(input_decorator, "InputDecoration.focusedErrorBorder");
  const InputDecoration_focusedBorder = dart.privateName(input_decorator, "InputDecoration.focusedBorder");
  const InputDecoration_errorBorder = dart.privateName(input_decorator, "InputDecoration.errorBorder");
  const InputDecoration_hoverColor = dart.privateName(input_decorator, "InputDecoration.hoverColor");
  const InputDecoration_focusColor = dart.privateName(input_decorator, "InputDecoration.focusColor");
  const InputDecoration_fillColor = dart.privateName(input_decorator, "InputDecoration.fillColor");
  const InputDecoration_filled = dart.privateName(input_decorator, "InputDecoration.filled");
  const InputDecoration_counterStyle = dart.privateName(input_decorator, "InputDecoration.counterStyle");
  const InputDecoration_counter = dart.privateName(input_decorator, "InputDecoration.counter");
  const InputDecoration_counterText = dart.privateName(input_decorator, "InputDecoration.counterText");
  const InputDecoration_suffixStyle = dart.privateName(input_decorator, "InputDecoration.suffixStyle");
  const InputDecoration_suffixText = dart.privateName(input_decorator, "InputDecoration.suffixText");
  const InputDecoration_suffix = dart.privateName(input_decorator, "InputDecoration.suffix");
  const InputDecoration_suffixIcon = dart.privateName(input_decorator, "InputDecoration.suffixIcon");
  const InputDecoration_prefixStyle = dart.privateName(input_decorator, "InputDecoration.prefixStyle");
  const InputDecoration_prefixText = dart.privateName(input_decorator, "InputDecoration.prefixText");
  const InputDecoration_prefix = dart.privateName(input_decorator, "InputDecoration.prefix");
  const InputDecoration_prefixIcon = dart.privateName(input_decorator, "InputDecoration.prefixIcon");
  const InputDecoration_isCollapsed = dart.privateName(input_decorator, "InputDecoration.isCollapsed");
  const InputDecoration_contentPadding = dart.privateName(input_decorator, "InputDecoration.contentPadding");
  const InputDecoration_isDense = dart.privateName(input_decorator, "InputDecoration.isDense");
  const _name = dart.privateName(input_decorator, "_name");
  let C1;
  const InputDecoration_floatingLabelBehavior = dart.privateName(input_decorator, "InputDecoration.floatingLabelBehavior");
  const InputDecoration_hasFloatingPlaceholder = dart.privateName(input_decorator, "InputDecoration.hasFloatingPlaceholder");
  const InputDecoration_errorMaxLines = dart.privateName(input_decorator, "InputDecoration.errorMaxLines");
  const InputDecoration_errorStyle = dart.privateName(input_decorator, "InputDecoration.errorStyle");
  const InputDecoration_errorText = dart.privateName(input_decorator, "InputDecoration.errorText");
  const InputDecoration_hintMaxLines = dart.privateName(input_decorator, "InputDecoration.hintMaxLines");
  const InputDecoration_hintStyle = dart.privateName(input_decorator, "InputDecoration.hintStyle");
  const InputDecoration_hintText = dart.privateName(input_decorator, "InputDecoration.hintText");
  const InputDecoration_helperMaxLines = dart.privateName(input_decorator, "InputDecoration.helperMaxLines");
  const InputDecoration_helperStyle = dart.privateName(input_decorator, "InputDecoration.helperStyle");
  const InputDecoration_helperText = dart.privateName(input_decorator, "InputDecoration.helperText");
  const InputDecoration_labelStyle = dart.privateName(input_decorator, "InputDecoration.labelStyle");
  const InputDecoration_labelText = dart.privateName(input_decorator, "InputDecoration.labelText");
  const InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C3;
  let C2;
  const elements$ = dart.privateName(selection_dialog, "SelectionDialog.elements");
  const showCountryOnly$ = dart.privateName(selection_dialog, "SelectionDialog.showCountryOnly");
  const searchDecoration$ = dart.privateName(selection_dialog, "SelectionDialog.searchDecoration");
  const searchStyle$ = dart.privateName(selection_dialog, "SelectionDialog.searchStyle");
  const emptySearchBuilder$ = dart.privateName(selection_dialog, "SelectionDialog.emptySearchBuilder");
  const showFlag$ = dart.privateName(selection_dialog, "SelectionDialog.showFlag");
  const favoriteElements$ = dart.privateName(selection_dialog, "SelectionDialog.favoriteElements");
  selection_dialog.SelectionDialog = class SelectionDialog extends framework.StatefulWidget {
    get elements() {
      return this[elements$];
    }
    set elements(value) {
      super.elements = value;
    }
    get showCountryOnly() {
      return this[showCountryOnly$];
    }
    set showCountryOnly(value) {
      super.showCountryOnly = value;
    }
    get searchDecoration() {
      return this[searchDecoration$];
    }
    set searchDecoration(value) {
      super.searchDecoration = value;
    }
    get searchStyle() {
      return this[searchStyle$];
    }
    set searchStyle(value) {
      super.searchStyle = value;
    }
    get emptySearchBuilder() {
      return this[emptySearchBuilder$];
    }
    set emptySearchBuilder(value) {
      super.emptySearchBuilder = value;
    }
    get showFlag() {
      return this[showFlag$];
    }
    set showFlag(value) {
      super.showFlag = value;
    }
    get favoriteElements() {
      return this[favoriteElements$];
    }
    set favoriteElements(value) {
      super.favoriteElements = value;
    }
    createState() {
      return new selection_dialog._SelectionDialogState.new();
    }
  };
  (selection_dialog.SelectionDialog.new = function(elements, favoriteElements, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let showCountryOnly = opts && 'showCountryOnly' in opts ? opts.showCountryOnly : null;
    let emptySearchBuilder = opts && 'emptySearchBuilder' in opts ? opts.emptySearchBuilder : null;
    let searchDecoration = opts && 'searchDecoration' in opts ? opts.searchDecoration : C0 || CT.C0;
    let searchStyle = opts && 'searchStyle' in opts ? opts.searchStyle : null;
    let showFlag = opts && 'showFlag' in opts ? opts.showFlag : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[elements$] = elements;
    this[favoriteElements$] = favoriteElements;
    this[showCountryOnly$] = showCountryOnly;
    this[emptySearchBuilder$] = emptySearchBuilder;
    this[searchStyle$] = searchStyle;
    this[showFlag$] = showFlag;
    if (!(searchDecoration != null)) dart.assertFailed("searchDecoration must not be null!", "org-dartlang-app:///packages/country_code_picker/selection_dialog.dart", 24, 12, "searchDecoration != null");
    this[searchDecoration$] = searchDecoration.copyWith({prefixIcon: new icon.Icon.new(icons.Icons.search, {$creationLocationd_0dea112b090073317d4: C2 || CT.C2})});
    selection_dialog.SelectionDialog.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = selection_dialog.SelectionDialog.prototype;
  dart.addTypeTests(selection_dialog.SelectionDialog);
  dart.setMethodSignature(selection_dialog.SelectionDialog, () => ({
    __proto__: dart.getMethods(selection_dialog.SelectionDialog.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(selection_dialog.SelectionDialog, "package:country_code_picker/selection_dialog.dart");
  dart.setFieldSignature(selection_dialog.SelectionDialog, () => ({
    __proto__: dart.getFields(selection_dialog.SelectionDialog.__proto__),
    elements: dart.finalFieldType(core.List$(country_code.CountryCode)),
    showCountryOnly: dart.finalFieldType(core.bool),
    searchDecoration: dart.finalFieldType(input_decorator.InputDecoration),
    searchStyle: dart.finalFieldType(text_style.TextStyle),
    emptySearchBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
    showFlag: dart.finalFieldType(core.bool),
    favoriteElements: dart.finalFieldType(core.List$(country_code.CountryCode))
  }));
  const _filterElements = dart.privateName(selection_dialog, "_filterElements");
  let C7;
  let C8;
  let C9;
  let C6;
  let C5;
  let C12;
  let C11;
  let C10;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const _name$ = dart.privateName(proxy_box, "_name");
  let C14;
  const DecoratedBox_position = dart.privateName(container, "DecoratedBox.position");
  const _name$0 = dart.privateName(box_border, "_name");
  let C16;
  const BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  const BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  const BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  const BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  const BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  const BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  const BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  const BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  let C15;
  const DecoratedBox_decoration = dart.privateName(container, "DecoratedBox.decoration");
  let C13;
  const _buildOption = dart.privateName(selection_dialog, "_buildOption");
  const _selectItem = dart.privateName(selection_dialog, "_selectItem");
  let C19;
  let C20;
  let C18;
  let C17;
  const Divider_color = dart.privateName(divider, "Divider.color");
  const Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  const Divider_indent = dart.privateName(divider, "Divider.indent");
  const Divider_thickness = dart.privateName(divider, "Divider.thickness");
  const Divider_height = dart.privateName(divider, "Divider.height");
  let C21;
  let C24;
  let C25;
  let C23;
  let C22;
  const _buildEmptySearchWidget = dart.privateName(selection_dialog, "_buildEmptySearchWidget");
  let C28;
  let C29;
  let C30;
  let C27;
  let C26;
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C38;
  let C35;
  let C34;
  let C41;
  let C42;
  let C40;
  let C39;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C43;
  let C46;
  let C47;
  let C48;
  let C45;
  let C44;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C54;
  let C53;
  let C57;
  let C56;
  let C60;
  let C61;
  let C59;
  let C58;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C69;
  let C67;
  let C66;
  let C72;
  let C73;
  let C71;
  let C70;
  let C76;
  let C75;
  let C74;
  let C79;
  let C78;
  let C77;
  selection_dialog._SelectionDialogState = class _SelectionDialogState extends framework.State$(selection_dialog.SelectionDialog) {
    build(context) {
      let t0, t0$;
      return new dialog.SimpleDialog.new({title: new basic.Column.new({children: JSArrayOfWidget().of([new text_field.TextField.new({style: this.widget.searchStyle, decoration: this.widget.searchDecoration, onChanged: dart.bind(this, _filterElements), $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), children: JSArrayOfWidget().of([new container.Container.new({width: media_query.MediaQuery.of(context).size.width, height: media_query.MediaQuery.of(context).size.height, child: new scroll_view.ListView.new({children: (t0$ = JSArrayOfWidget().of([dart.test(this.widget.favoriteElements[$isEmpty]) ? C13 || CT.C13 : new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: (t0 = JSArrayOfWidget().of([]), t0[$addAll](this.widget.favoriteElements[$map](dialog.SimpleDialogOption, dart.fn(f => new dialog.SimpleDialogOption.new({child: this[_buildOption](f), onPressed: dart.fn(() => {
                      this[_selectItem](f);
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), CountryCodeToSimpleDialogOption()))[$toList]()), t0[$add](C21 || CT.C21), t0), $creationLocationd_0dea112b090073317d4: C22 || CT.C22})]), t0$[$addAll](dart.test(this.filteredElements[$isEmpty]) ? JSArrayOfWidget().of([this[_buildEmptySearchWidget](context)]) : this.filteredElements[$map](framework.Widget, dart.fn(e => new dialog.SimpleDialogOption.new({key: new (ValueKeyOfString()).new(e.toLongString()), child: this[_buildOption](e), onPressed: dart.fn(() => {
                  this[_selectItem](e);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), CountryCodeToSimpleDialogOption()))), t0$), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34})]), $creationLocationd_0dea112b090073317d4: C39 || CT.C39});
    }
    [_buildOption](e) {
      return new container.Container.new({width: 400.0, child: new basic.Flex.new({direction: basic_types.Axis.horizontal, children: JSArrayOfWidget().of([dart.test(this.widget.showFlag) ? new basic.Flexible.new({child: new basic.Padding.new({padding: C43 || CT.C43, child: new image.Image.asset(e.flagUri, {package: "country_code_picker", width: 32.0, $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C56 || CT.C56}), new basic.Expanded.new({flex: 4, child: new text.Text.new(dart.test(this.widget.showCountryOnly) ? e.toCountryStringOnly() : e.toLongString(), {overflow: paragraph.TextOverflow.fade, $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62})]), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70});
    }
    [_buildEmptySearchWidget](context) {
      if (this.widget.emptySearchBuilder != null) {
        return this.widget.emptySearchBuilder(context);
      }
      return new basic.Center.new({child: new text.Text.new("No Country Found", {$creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77});
    }
    initState() {
      this.filteredElements = this.widget.elements;
      super.initState();
    }
    [_filterElements](s) {
      s = s[$toUpperCase]();
      this.setState(dart.fn(() => {
        this.filteredElements = this.widget.elements[$where](dart.fn(e => e.code[$contains](s) || e.dialCode[$contains](s) || e.name[$toUpperCase]()[$contains](s), CountryCodeTobool()))[$toList]();
      }, VoidToNull()));
    }
    [_selectItem](e) {
      navigator.Navigator.pop(country_code.CountryCode, this.context, e);
    }
  };
  (selection_dialog._SelectionDialogState.new = function() {
    this.filteredElements = null;
    selection_dialog._SelectionDialogState.__proto__.new.call(this);
    ;
  }).prototype = selection_dialog._SelectionDialogState.prototype;
  dart.addTypeTests(selection_dialog._SelectionDialogState);
  dart.setMethodSignature(selection_dialog._SelectionDialogState, () => ({
    __proto__: dart.getMethods(selection_dialog._SelectionDialogState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildOption]: dart.fnType(framework.Widget, [country_code.CountryCode]),
    [_buildEmptySearchWidget]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_filterElements]: dart.fnType(dart.void, [core.String]),
    [_selectItem]: dart.fnType(dart.void, [country_code.CountryCode])
  }));
  dart.setLibraryUri(selection_dialog._SelectionDialogState, "package:country_code_picker/selection_dialog.dart");
  dart.setFieldSignature(selection_dialog._SelectionDialogState, () => ({
    __proto__: dart.getFields(selection_dialog._SelectionDialogState.__proto__),
    filteredElements: dart.fieldType(core.List$(country_code.CountryCode))
  }));
  dart.trackLibraries("packages/country_code_picker/selection_dialog", {
    "package:country_code_picker/selection_dialog.dart": selection_dialog
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_dialog.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAK0B;;;;;;IACb;;;;;;IACW;;;;;;IACN;;;;;;IACI;;;;;;IACT;;;;;;IAGa;;;;;;;AAee;IAAuB;;mDAbzC,UAAe;QAC9B;QACC;QACA;QACW;QACX;QACA;;IANc;IAAe;IAE7B;IACA;IAEA;IACA;UAEE,AAAiB,gBAAD,IAAI,yBAAM;IACX,0BAAE,AAAiB,gBAAD,uBAAsB,kBAAW;AACzE,oEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAWS;;AAAY,iDAC3B,gCACa,sBAChB,qCACS,AAAO,qCACF,AAAO,mDACR,oJAIP,sBACR,oCACoB,AAAY,AAAK,0BAAd,OAAO,sBACT,AAAY,AAAK,0BAAd,OAAO,sBACtB,+CACK,gCACR,AAAO,AAAiB,0DAElB,0CACyC,+CACrB,0BACd,YAAO,AAAO,AACX,AAQA,8DAPC,QAAC,KAAM,0CACM,mBAAa,CAAC,cACV;AACK,sBAAd,kBAAY,CAAC;gJAKzB,yFACX,uBAAO,AAAiB,mCACrB,sBAAC,8BAAwB,OAAO,MAChC,AAAiB,8CACf,QAAC,KAAM,wCACA,6BAAI,AAAE,CAAD,yBACH,mBAAa,CAAC,cACV;AACK,kBAAd,kBAAY,CAAC;;IAM9B;mBAE2B;AAC9B,YAAO,qCACE,cACA,+BACW,uCACE,gCAChB,AAAO,wBAAW,+BACT,sDAEQ,sBACX,AAAE,CAAD,oBACQ,8BACF,kLAGT,sFACJ,8BACQ,UACC,4BACL,AAAO,+BACD,AAAE,CAAD,yBACD,AAAE,CAAD,4BACgB;IAMnC;8BAE4C;AAC1C,UAAI,AAAO,kCAAsB;AAC/B,cAAO,AAAO,gCAAmB,OAAO;;AAG1C,YAAO,8BAAc,kBAAK;IAC5B;;AAIoC,MAAlC,wBAAmB,AAAO;AACT,MAAX;IACR;sBAE4B;AACP,MAAnB,IAAI,AAAE,CAAD;AAQH,MAPF,cAAS;AAMM,QALb,wBAAmB,AAAO,AACrB,AAIA,6BAJM,QAAC,KACJ,AAAE,AAAK,AACgB,CADtB,iBAAe,CAAC,KACjB,AAAE,AAAS,CAAV,qBAAmB,CAAC,KACrB,AAAE,AAAK,AAAc,CAApB,iCAA6B,CAAC;;IAG3C;kBAE6B;AACF,MAAf,kDAAI,cAAS,CAAC;IAC1B;;;IA5GkB;;;EA6GpB","file":"selection_dialog.ddc.js"}');
  // Exports:
  return {
    selection_dialog: selection_dialog
  };
});

//# sourceMappingURL=selection_dialog.ddc.js.map
