define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/country_list_pick/support/code_country', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__country_list_pick__support__code_country, packages__flutter__material, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const code_country = packages__country_list_pick__support__code_country.support__code_country;
  const icons = packages__flutter__material.src__material__icons;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const theme = packages__flutter__material.src__material__theme;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const colors = packages__flutter__material.src__material__colors;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const selection_list = Object.create(dart.library);
  const $map = dartx.map;
  const $addAll = dartx.addAll;
  const $toUpperCase = dartx.toUpperCase;
  const $contains = dartx.contains;
  const $where = dartx.where;
  const $toList = dartx.toList;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let CountryCodeToWidget = () => (CountryCodeToWidget = dart.constFn(dart.fnType(framework.Widget, [code_country.CountryCode])))();
  let CountryCodeTobool = () => (CountryCodeTobool = dart.constFn(dart.fnType(core.bool, [code_country.CountryCode])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 43,
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
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 15
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 41,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 51,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 43,
        [_Location_line]: 88,
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
        [_Location_column]: 25,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 15,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 20,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 13,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 11,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 15,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/country_list_pick/selection_list.dart"
      });
    }
  });
  const elements$ = dart.privateName(selection_list, "SelectionList.elements");
  const initialSelection$ = dart.privateName(selection_list, "SelectionList.initialSelection");
  selection_list.SelectionList = class SelectionList extends framework.StatefulWidget {
    get elements() {
      return this[elements$];
    }
    set elements(value) {
      super.elements = value;
    }
    get initialSelection() {
      return this[initialSelection$];
    }
    set initialSelection(value) {
      super.initialSelection = value;
    }
    createState() {
      return new selection_list._SelectionListState.new();
    }
  };
  (selection_list.SelectionList.new = function(elements, initialSelection, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[elements$] = elements;
    this[initialSelection$] = initialSelection;
    selection_list.SelectionList.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = selection_list.SelectionList.prototype;
  dart.addTypeTests(selection_list.SelectionList);
  dart.setMethodSignature(selection_list.SelectionList, () => ({
    __proto__: dart.getMethods(selection_list.SelectionList.__proto__),
    createState: dart.fnType(selection_list._SelectionListState, [])
  }));
  dart.setLibraryUri(selection_list.SelectionList, "package:country_list_pick/selection_list.dart");
  dart.setFieldSignature(selection_list.SelectionList, () => ({
    __proto__: dart.getFields(selection_list.SelectionList.__proto__),
    elements: dart.finalFieldType(core.List$(code_country.CountryCode)),
    initialSelection: dart.finalFieldType(code_country.CountryCode)
  }));
  const _controller = dart.privateName(selection_list, "_controller");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  const _sendDataBack = dart.privateName(selection_list, "_sendDataBack");
  let C8;
  let C9;
  let C7;
  let C6;
  const _filterElements = dart.privateName(selection_list, "_filterElements");
  let C12;
  let C13;
  let C14;
  let C15;
  let C11;
  let C10;
  const _handleSearchEnd = dart.privateName(selection_list, "_handleSearchEnd");
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C23;
  let C24;
  let C21;
  let C20;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C25;
  let C28;
  let C27;
  let C26;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C36;
  let C37;
  let C34;
  let C33;
  let C40;
  let C39;
  let C38;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C48;
  let C49;
  let C46;
  let C45;
  let C52;
  let C53;
  let C51;
  let C50;
  let C56;
  let C55;
  let C54;
  let C59;
  let C58;
  let C57;
  let C62;
  let C63;
  let C61;
  let C60;
  let C66;
  let C67;
  let C65;
  let C64;
  let C70;
  let C71;
  let C72;
  let C69;
  let C68;
  let C75;
  let C74;
  let C73;
  let C78;
  let C79;
  let C80;
  let C77;
  let C76;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C88;
  let C86;
  let C85;
  let C91;
  let C90;
  let C89;
  selection_list._SelectionListState = class _SelectionListState extends framework.State$(selection_list.SelectionList) {
    initState() {
      this.countries = this.widget.elements;
      super.initState();
    }
    [_sendDataBack](context, initialSelection) {
      navigator.Navigator.pop(code_country.CountryCode, context, initialSelection);
    }
    build(context) {
      let t0;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: this.appBarTitle, centerTitle: true, actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: this.icon, onPressed: dart.fn(() => {
                this.setState(dart.fn(() => {
                  if (dart.equals(this.icon.icon, icons.Icons.search)) {
                    this.icon = new icon.Icon.new(icons.Icons.close, {color: theme.Theme.of(context).secondaryHeaderColor, $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
                    this.appBarTitle = new text_field.TextField.new({controller: this[_controller], style: new text_style.TextStyle.new({color: theme.Theme.of(context).secondaryHeaderColor}), decoration: new input_decorator.InputDecoration.collapsed({hintText: "Search...", hintStyle: new text_style.TextStyle.new({color: theme.Theme.of(context).secondaryHeaderColor})}), onChanged: dart.bind(this, _filterElements), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
                  } else {
                    this[_handleSearchEnd]();
                  }
                }, VoidToNull()));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), body: new container.Container.new({color: new ui.Color.new(4294243572), child: new scroll_view.ListView.new({children: (t0 = JSArrayOfWidget().of([new basic.Padding.new({padding: C25 || CT.C25, child: new text.Text.new("LAST PICK", {$creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new container.Container.new({color: colors.Colors.white, child: new list_tile.ListTile.new({leading: new image.Image.asset(this.widget.initialSelection.flagUri, {package: "country_list_pick", width: 32.0, $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), title: new text.Text.new(this.widget.initialSelection.name, {$creationLocationd_0dea112b090073317d4: C38 || CT.C38}), trailing: new icon.Icon.new(icons.Icons.check, {color: colors.Colors.green, $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C54 || CT.C54})]), t0[$addAll](this.countries[$map](framework.Widget, dart.fn(e => this.getListCountry(e), CountryCodeToWidget()))), t0), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64});
    }
    getListCountry(e) {
      return new container.Container.new({color: colors.Colors.white, child: new list_tile.ListTile.new({leading: new image.Image.asset(e.flagUri, {package: "country_list_pick", width: 30.0, $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), title: new text.Text.new(e.name, {$creationLocationd_0dea112b090073317d4: C73 || CT.C73}), onTap: dart.fn(() => {
            this[_sendDataBack](this.context, e);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81});
    }
    [_handleSearchEnd]() {
      this.setState(dart.fn(() => {
        this.icon = new icon.Icon.new(icons.Icons.search, {color: theme.Theme.of(this.context).secondaryHeaderColor, $creationLocationd_0dea112b090073317d4: C85 || CT.C85});
        this.appBarTitle = new text.Text.new("Select Country", {$creationLocationd_0dea112b090073317d4: C89 || CT.C89});
        this[_controller].clear();
      }, VoidToNull()));
    }
    [_filterElements](s) {
      s = s[$toUpperCase]();
      this.setState(dart.fn(() => {
        this.countries = this.widget.elements[$where](dart.fn(e => e.code[$contains](s) || e.dialCode[$contains](s) || e.name[$toUpperCase]()[$contains](s), CountryCodeTobool()))[$toList]();
      }, VoidToNull()));
    }
  };
  (selection_list._SelectionListState.new = function() {
    this.countries = null;
    this[_controller] = new editable_text.TextEditingController.new();
    this.icon = new icon.Icon.new(icons.Icons.search, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    this.appBarTitle = new text.Text.new("Select Country", {$creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    selection_list._SelectionListState.__proto__.new.call(this);
    ;
  }).prototype = selection_list._SelectionListState.prototype;
  dart.addTypeTests(selection_list._SelectionListState);
  dart.setMethodSignature(selection_list._SelectionListState, () => ({
    __proto__: dart.getMethods(selection_list._SelectionListState.__proto__),
    [_sendDataBack]: dart.fnType(dart.void, [framework.BuildContext, code_country.CountryCode]),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    getListCountry: dart.fnType(framework.Widget, [code_country.CountryCode]),
    [_handleSearchEnd]: dart.fnType(dart.void, []),
    [_filterElements]: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(selection_list._SelectionListState, "package:country_list_pick/selection_list.dart");
  dart.setFieldSignature(selection_list._SelectionListState, () => ({
    __proto__: dart.getFields(selection_list._SelectionListState.__proto__),
    countries: dart.fieldType(core.List$(code_country.CountryCode)),
    [_controller]: dart.finalFieldType(editable_text.TextEditingController),
    icon: dart.fieldType(icon.Icon),
    appBarTitle: dart.fieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/country_list_pick/selection_list", {
    "package:country_list_pick/selection_list.dart": selection_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["selection_list.dart"],"names":[],"mappings":"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","file":"selection_list.ddc.js"}');
  // Exports:
  return {
    selection_list: selection_list
  };
});

//# sourceMappingURL=selection_list.ddc.js.map
