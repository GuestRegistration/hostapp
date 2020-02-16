define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/country_code_picker/country_codes', 'packages/country_code_picker/country_code', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/country_code_picker/selection_dialog'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__country_code_picker__country_codes, packages__country_code_picker__country_code, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__country_code_picker__selection_dialog) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const theme = packages__flutter__material.src__material__theme;
  const dialog = packages__flutter__material.src__material__dialog;
  const country_codes = packages__country_code_picker__country_codes.country_codes;
  const country_code = packages__country_code_picker__country_code.country_code;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const selection_dialog = packages__country_code_picker__selection_dialog.selection_dialog;
  const country_code_picker = Object.create(dart.library);
  const $_get = dartx._get;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $contains = dartx.contains;
  const $where = dartx.where;
  const $toUpperCase = dartx.toUpperCase;
  const $toString = dartx.toString;
  const $firstWhere = dartx.firstWhere;
  let MapToCountryCode = () => (MapToCountryCode = dart.constFn(dart.fnType(country_code.CountryCode, [core.Map])))();
  let CountryCodeTobool = () => (CountryCodeTobool = dart.constFn(dart.fnType(core.bool, [country_code.CountryCode])))();
  let JSArrayOfCountryCode = () => (JSArrayOfCountryCode = dart.constFn(_interceptors.JSArray$(country_code.CountryCode)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToCountryCode = () => (VoidToCountryCode = dart.constFn(dart.fnType(country_code.CountryCode, [])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToSelectionDialog = () => (BuildContextToSelectionDialog = dart.constFn(dart.fnType(selection_dialog.SelectionDialog, [framework.BuildContext])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.String);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: input_decorator.FloatingLabelBehavior.prototype,
        [_name]: "FloatingLabelBehavior.auto",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
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
        [InputDecoration_floatingLabelBehavior]: C3 || CT.C3,
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
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/country_code_picker.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 38,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 25,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/country_code_picker.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/country_code_picker.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 21,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 21,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/country_code_picker.dart"
      });
    },
    get C25() {
      return C25 = dart.constList([], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/country_code_picker.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/country_code_picker.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 15,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/country_code_picker.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "direction",
        [_Location_column]: 11,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 11,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 103,
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
        [_Location_column]: 16,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/country_code_picker.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/country_code_picker.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elements",
        [_Location_column]: 39,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "favoriteElements",
        [_Location_column]: 49,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showCountryOnly",
        [_Location_column]: 11,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "emptySearchBuilder",
        [_Location_column]: 11,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "searchDecoration",
        [_Location_column]: 11,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "searchStyle",
        [_Location_column]: 11,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showFlag",
        [_Location_column]: 11,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/country_code_picker/country_code_picker.dart"
      });
    }
  });
  let C0;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C1;
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
  let C3;
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
  let C2;
  const onChanged$ = dart.privateName(country_code_picker, "CountryCodePicker.onChanged");
  const onInit$ = dart.privateName(country_code_picker, "CountryCodePicker.onInit");
  const initialSelection$ = dart.privateName(country_code_picker, "CountryCodePicker.initialSelection");
  const favorite$ = dart.privateName(country_code_picker, "CountryCodePicker.favorite");
  const textStyle$ = dart.privateName(country_code_picker, "CountryCodePicker.textStyle");
  const padding$ = dart.privateName(country_code_picker, "CountryCodePicker.padding");
  const showCountryOnly$ = dart.privateName(country_code_picker, "CountryCodePicker.showCountryOnly");
  const searchDecoration$ = dart.privateName(country_code_picker, "CountryCodePicker.searchDecoration");
  const searchStyle$ = dart.privateName(country_code_picker, "CountryCodePicker.searchStyle");
  const emptySearchBuilder$ = dart.privateName(country_code_picker, "CountryCodePicker.emptySearchBuilder");
  const builder$ = dart.privateName(country_code_picker, "CountryCodePicker.builder");
  const showOnlyCountryWhenClosed$ = dart.privateName(country_code_picker, "CountryCodePicker.showOnlyCountryWhenClosed");
  const alignLeft$ = dart.privateName(country_code_picker, "CountryCodePicker.alignLeft");
  const showFlag$ = dart.privateName(country_code_picker, "CountryCodePicker.showFlag");
  const countryFilter$ = dart.privateName(country_code_picker, "CountryCodePicker.countryFilter");
  country_code_picker.CountryCodePicker = class CountryCodePicker extends framework.StatefulWidget {
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get onInit() {
      return this[onInit$];
    }
    set onInit(value) {
      super.onInit = value;
    }
    get initialSelection() {
      return this[initialSelection$];
    }
    set initialSelection(value) {
      super.initialSelection = value;
    }
    get favorite() {
      return this[favorite$];
    }
    set favorite(value) {
      super.favorite = value;
    }
    get textStyle() {
      return this[textStyle$];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
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
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get showOnlyCountryWhenClosed() {
      return this[showOnlyCountryWhenClosed$];
    }
    set showOnlyCountryWhenClosed(value) {
      super.showOnlyCountryWhenClosed = value;
    }
    get alignLeft() {
      return this[alignLeft$];
    }
    set alignLeft(value) {
      super.alignLeft = value;
    }
    get showFlag() {
      return this[showFlag$];
    }
    set showFlag(value) {
      super.showFlag = value;
    }
    get countryFilter() {
      return this[countryFilter$];
    }
    set countryFilter(value) {
      super.countryFilter = value;
    }
    createState() {
      let jsonList = country_codes.codes;
      let elements = jsonList[$map](country_code.CountryCode, dart.fn(s => new country_code.CountryCode.new({name: core.String._check(s[$_get]("name")), code: core.String._check(s[$_get]("code")), dialCode: core.String._check(s[$_get]("dial_code")), flagUri: "flags/" + dart.str(dart.dsend(s[$_get]("code"), 'toLowerCase', [])) + ".png"}), MapToCountryCode()))[$toList]();
      if (dart.notNull(this.countryFilter[$length]) > 0) {
        elements = elements[$where](dart.fn(c => this.countryFilter[$contains](c.code), CountryCodeTobool()))[$toList]();
      }
      return new country_code_picker._CountryCodePickerState.new(elements);
    }
  };
  (country_code_picker.CountryCodePicker.new = function(opts) {
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let onInit = opts && 'onInit' in opts ? opts.onInit : null;
    let initialSelection = opts && 'initialSelection' in opts ? opts.initialSelection : null;
    let favorite = opts && 'favorite' in opts ? opts.favorite : C0 || CT.C0;
    let countryFilter = opts && 'countryFilter' in opts ? opts.countryFilter : C0 || CT.C0;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let padding = opts && 'padding' in opts ? opts.padding : C1 || CT.C1;
    let showCountryOnly = opts && 'showCountryOnly' in opts ? opts.showCountryOnly : false;
    let searchDecoration = opts && 'searchDecoration' in opts ? opts.searchDecoration : C2 || CT.C2;
    let searchStyle = opts && 'searchStyle' in opts ? opts.searchStyle : null;
    let emptySearchBuilder = opts && 'emptySearchBuilder' in opts ? opts.emptySearchBuilder : null;
    let showOnlyCountryWhenClosed = opts && 'showOnlyCountryWhenClosed' in opts ? opts.showOnlyCountryWhenClosed : false;
    let alignLeft = opts && 'alignLeft' in opts ? opts.alignLeft : false;
    let showFlag = opts && 'showFlag' in opts ? opts.showFlag : true;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onChanged$] = onChanged;
    this[onInit$] = onInit;
    this[initialSelection$] = initialSelection;
    this[favorite$] = favorite;
    this[countryFilter$] = countryFilter;
    this[textStyle$] = textStyle;
    this[padding$] = padding;
    this[showCountryOnly$] = showCountryOnly;
    this[searchDecoration$] = searchDecoration;
    this[searchStyle$] = searchStyle;
    this[emptySearchBuilder$] = emptySearchBuilder;
    this[showOnlyCountryWhenClosed$] = showOnlyCountryWhenClosed;
    this[alignLeft$] = alignLeft;
    this[showFlag$] = showFlag;
    this[builder$] = builder;
    country_code_picker.CountryCodePicker.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = country_code_picker.CountryCodePicker.prototype;
  dart.addTypeTests(country_code_picker.CountryCodePicker);
  dart.setMethodSignature(country_code_picker.CountryCodePicker, () => ({
    __proto__: dart.getMethods(country_code_picker.CountryCodePicker.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(country_code_picker.CountryCodePicker, "package:country_code_picker/country_code_picker.dart");
  dart.setFieldSignature(country_code_picker.CountryCodePicker, () => ({
    __proto__: dart.getFields(country_code_picker.CountryCodePicker.__proto__),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [country_code.CountryCode])),
    onInit: dart.finalFieldType(dart.fnType(dart.void, [country_code.CountryCode])),
    initialSelection: dart.finalFieldType(core.String),
    favorite: dart.finalFieldType(core.List$(core.String)),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    showCountryOnly: dart.finalFieldType(core.bool),
    searchDecoration: dart.finalFieldType(input_decorator.InputDecoration),
    searchStyle: dart.finalFieldType(text_style.TextStyle),
    emptySearchBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
    builder: dart.finalFieldType(dart.fnType(dart.dynamic, [country_code.CountryCode])),
    showOnlyCountryWhenClosed: dart.finalFieldType(core.bool),
    alignLeft: dart.finalFieldType(core.bool),
    showFlag: dart.finalFieldType(core.bool),
    countryFilter: dart.finalFieldType(core.List$(core.String))
  }));
  const _showSelectionDialog = dart.privateName(country_code_picker, "_showSelectionDialog");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C6;
  let C7;
  let C5;
  let C4;
  let C8;
  let C9;
  let C12;
  let C13;
  let C14;
  let C11;
  let C10;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C23;
  let C20;
  let C19;
  let C25;
  let C24;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C33;
  let C31;
  let C30;
  let C36;
  let C37;
  let C38;
  let C35;
  let C34;
  let C41;
  let C42;
  let C43;
  let C40;
  let C39;
  const _onInit = dart.privateName(country_code_picker, "_onInit");
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C51;
  let C52;
  let C45;
  let C44;
  const _publishSelection = dart.privateName(country_code_picker, "_publishSelection");
  country_code_picker._CountryCodePickerState = class _CountryCodePickerState extends framework.State$(country_code_picker.CountryCodePicker) {
    build(context) {
      let t0;
      let _widget = null;
      if (this.widget.builder != null)
        _widget = new ink_well.InkWell.new({onTap: dart.bind(this, _showSelectionDialog), child: framework.Widget._check(this.widget.builder(this.selectedItem)), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
      else {
        _widget = new flat_button.FlatButton.new({padding: this.widget.padding, onPressed: dart.bind(this, _showSelectionDialog), child: new basic.Flex.new({direction: basic_types.Axis.horizontal, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([dart.test(this.widget.showFlag) ? new basic.Flexible.new({flex: dart.test(this.widget.alignLeft) ? 0 : 1, fit: dart.test(this.widget.alignLeft) ? flex.FlexFit.tight : flex.FlexFit.loose, child: new basic.Padding.new({padding: dart.test(this.widget.alignLeft) ? C8 || CT.C8 : C9 || CT.C9, child: new image.Image.asset(this.selectedItem.flagUri, {package: "country_code_picker", width: 32.0, $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C24 || CT.C24}), new basic.Flexible.new({fit: dart.test(this.widget.alignLeft) ? flex.FlexFit.tight : flex.FlexFit.loose, child: new text.Text.new(dart.test(this.widget.showOnlyCountryWhenClosed) ? this.selectedItem.toCountryStringOnly() : dart.toString(this.selectedItem), {style: (t0 = this.widget.textStyle, t0 == null ? theme.Theme.of(context).textTheme.button : t0), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39});
      }
      return _widget;
    }
    didUpdateWidget(oldWidget) {
      country_code_picker.CountryCodePicker._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (oldWidget.initialSelection != this.widget.initialSelection) {
        if (this.widget.initialSelection != null) {
          this.selectedItem = this.elements[$firstWhere](dart.fn(e => e.code[$toUpperCase]() === this.widget.initialSelection[$toUpperCase]() || e.dialCode === dart.toString(this.widget.initialSelection), CountryCodeTobool()), {orElse: dart.fn(() => this.elements[$_get](0), VoidToCountryCode())});
        } else {
          this.selectedItem = this.elements[$_get](0);
        }
      }
    }
    initState() {
      if (this.widget.initialSelection != null) {
        this.selectedItem = this.elements[$firstWhere](dart.fn(e => e.code[$toUpperCase]() === this.widget.initialSelection[$toUpperCase]() || e.dialCode === dart.toString(this.widget.initialSelection), CountryCodeTobool()), {orElse: dart.fn(() => this.elements[$_get](0), VoidToCountryCode())});
      } else {
        this.selectedItem = this.elements[$_get](0);
      }
      this[_onInit](this.selectedItem);
      this.favoriteElements = this.elements[$where](dart.fn(e => this.widget.favorite[$firstWhere](dart.fn(f => e.code === f[$toUpperCase]() || e.dialCode === dart.toString(f), StringTobool()), {orElse: dart.fn(() => null, VoidToNull())}) != null, CountryCodeTobool()))[$toList]();
      super.initState();
    }
    [_showSelectionDialog]() {
      dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(_ => new selection_dialog.SelectionDialog.new(this.elements, this.favoriteElements, {showCountryOnly: this.widget.showCountryOnly, emptySearchBuilder: this.widget.emptySearchBuilder, searchDecoration: this.widget.searchDecoration, searchStyle: this.widget.searchStyle, showFlag: this.widget.showFlag, $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), BuildContextToSelectionDialog())}).then(core.Null, dart.fn(e => {
        if (e != null) {
          this.setState(dart.fn(() => {
            this.selectedItem = country_code.CountryCode._check(e);
          }, VoidToNull()));
          this[_publishSelection](country_code.CountryCode._check(e));
        }
      }, dynamicToNull()));
    }
    [_publishSelection](e) {
      if (this.widget.onChanged != null) {
        this.widget.onChanged(e);
      }
    }
    [_onInit](initialData) {
      if (this.widget.onInit != null) {
        this.widget.onInit(initialData);
      }
    }
  };
  (country_code_picker._CountryCodePickerState.new = function(elements) {
    this.selectedItem = null;
    this.elements = JSArrayOfCountryCode().of([]);
    this.favoriteElements = JSArrayOfCountryCode().of([]);
    this.elements = elements;
    country_code_picker._CountryCodePickerState.__proto__.new.call(this);
    ;
  }).prototype = country_code_picker._CountryCodePickerState.prototype;
  dart.addTypeTests(country_code_picker._CountryCodePickerState);
  dart.setMethodSignature(country_code_picker._CountryCodePickerState, () => ({
    __proto__: dart.getMethods(country_code_picker._CountryCodePickerState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_showSelectionDialog]: dart.fnType(dart.void, []),
    [_publishSelection]: dart.fnType(dart.void, [country_code.CountryCode]),
    [_onInit]: dart.fnType(dart.void, [country_code.CountryCode])
  }));
  dart.setLibraryUri(country_code_picker._CountryCodePickerState, "package:country_code_picker/country_code_picker.dart");
  dart.setFieldSignature(country_code_picker._CountryCodePickerState, () => ({
    __proto__: dart.getFields(country_code_picker._CountryCodePickerState.__proto__),
    selectedItem: dart.fieldType(country_code.CountryCode),
    elements: dart.fieldType(core.List$(country_code.CountryCode)),
    favoriteElements: dart.fieldType(core.List$(country_code.CountryCode))
  }));
  dart.trackLibraries("packages/country_code_picker/country_code_picker", {
    "package:country_code_picker/country_code_picker.dart": country_code_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["country_code_picker.dart"],"names":[],"mappings":"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","file":"country_code_picker.ddc.js"}');
  // Exports:
  return {
    country_code_picker: country_code_picker
  };
});

//# sourceMappingURL=country_code_picker.ddc.js.map
