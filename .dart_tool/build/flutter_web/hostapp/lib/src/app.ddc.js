define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/bottom_navy_bar/bottom_navy_bar', 'packages/flutter_icons/flutter_icons', 'packages/configurable_expansion_tile/configurable_expansion_tile', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/cloud_firestore/cloud_firestore', 'packages/flutter/src/gestures/arena', 'packages/get_it/get_it', 'packages/shared_preferences/shared_preferences', 'packages/fluttertoast/fluttertoast', 'packages/flutter_spinkit/flutter_spinkit', 'packages/google_fonts/google_fonts', 'packages/encrypt/encrypt', 'packages/firebase_auth/firebase_auth', 'packages/firebase_storage/firebase_storage', 'packages/provider_architecture/viewmodel_provider', 'packages/flutter/src/animation/animation', 'packages/flutter/src/foundation/_bitfield_web', 'packages/image_picker/image_picker', 'packages/responsive_builder/responsive_builder', 'packages/country_code_picker/country_code_picker', 'packages/country_code_picker/country_code', 'packages/provider_architecture/provider_widget', 'packages/rxdart/futures', 'packages/firebase_auth_platform_interface/firebase_auth_platform_interface', 'packages/flutter_secure_storage/flutter_secure_storage', 'packages/apple_sign_in/apple_sign_in'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__bottom_navy_bar__bottom_navy_bar, packages__flutter_icons__flutter_icons, packages__configurable_expansion_tile__configurable_expansion_tile, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__cloud_firestore__cloud_firestore, packages__flutter__src__gestures__arena, packages__get_it__get_it, packages__shared_preferences__shared_preferences, packages__fluttertoast__fluttertoast, packages__flutter_spinkit__flutter_spinkit, packages__google_fonts__google_fonts, packages__encrypt__encrypt, packages__firebase_auth__firebase_auth, packages__firebase_storage__firebase_storage, packages__provider_architecture__viewmodel_provider, packages__flutter__src__animation__animation, packages__flutter__src__foundation___bitfield_web, packages__image_picker__image_picker, packages__responsive_builder__responsive_builder, packages__country_code_picker__country_code_picker, packages__country_code_picker__country_code, packages__provider_architecture__provider_widget, packages__rxdart__futures, packages__firebase_auth_platform_interface__firebase_auth_platform_interface, packages__flutter_secure_storage__flutter_secure_storage, packages__apple_sign_in__apple_sign_in) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const focus_manager = packages__flutter__src__widgets__actions.src__widgets__focus_manager;
  const focus_scope = packages__flutter__src__widgets__actions.src__widgets__focus_scope;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const icons = packages__flutter__material.src__material__icons;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const theme = packages__flutter__material.src__material__theme;
  const snack_bar = packages__flutter__material.src__material__snack_bar;
  const dialog = packages__flutter__material.src__material__dialog;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const material = packages__flutter__material.src__material__material;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const material_button = packages__flutter__material.src__material__material_button;
  const text_field = packages__flutter__material.src__material__text_field;
  const divider = packages__flutter__material.src__material__divider;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const page = packages__flutter__material.src__material__page;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const bottom_navy_bar = packages__bottom_navy_bar__bottom_navy_bar.bottom_navy_bar;
  const font_awesome = packages__flutter_icons__flutter_icons.src__font_awesome;
  const configurable_expansion_tile = packages__configurable_expansion_tile__configurable_expansion_tile.configurable_expansion_tile;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const shape_decoration = packages__flutter__src__painting___network_image_web.src__painting__shape_decoration;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const colors$ = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const text_formatter = packages__flutter__src__gestures__arena.src__services__text_formatter;
  const get_it = packages__get_it__get_it.get_it;
  const shared_preferences = packages__shared_preferences__shared_preferences.shared_preferences;
  const fluttertoast = packages__fluttertoast__fluttertoast.fluttertoast;
  const ripple = packages__flutter_spinkit__flutter_spinkit.src__ripple;
  const google_fonts = packages__google_fonts__google_fonts.google_fonts;
  const encrypt = packages__encrypt__encrypt.encrypt;
  const firebase_auth = packages__firebase_auth__firebase_auth.firebase_auth;
  const firebase_storage = packages__firebase_storage__firebase_storage.firebase_storage;
  const viewmodel_provider = packages__provider_architecture__viewmodel_provider.viewmodel_provider;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const image_picker = packages__image_picker__image_picker.image_picker;
  const responsive_builder = packages__responsive_builder__responsive_builder.responsive_builder;
  const country_code_picker = packages__country_code_picker__country_code_picker.country_code_picker;
  const country_code = packages__country_code_picker__country_code.country_code;
  const provider_widget = packages__provider_architecture__provider_widget.provider_widget;
  const behavior_subject = packages__rxdart__futures.src__subjects__behavior_subject;
  const observable = packages__rxdart__futures.src__observables__observable;
  const firebase_auth_platform_interface = packages__firebase_auth_platform_interface__firebase_auth_platform_interface.firebase_auth_platform_interface;
  const flutter_secure_storage = packages__flutter_secure_storage__flutter_secure_storage.flutter_secure_storage;
  const apple_sign_in = packages__apple_sign_in__apple_sign_in.apple_sign_in;
  const dialog_service = Object.create(dart.library);
  const dialog_models = Object.create(dart.library);
  const Dashboard = Object.create(dart.library);
  const FetchProperties = Object.create(dart.library);
  const ExpansionInfo = Object.create(dart.library);
  const FirestoreService = Object.create(dart.library);
  const propertyModel = Object.create(dart.library);
  const UserDetails = Object.create(dart.library);
  const locator = Object.create(dart.library);
  const customFunctions = Object.create(dart.library);
  const constants = Object.create(dart.library);
  const AppColor = Object.create(dart.library);
  const navigation_service = Object.create(dart.library);
  const authentication = Object.create(dart.library);
  const CloudStorageService = Object.create(dart.library);
  const ListOfProperty = Object.create(dart.library);
  const ListOfPropertyViewModel = Object.create(dart.library);
  const base_model = Object.create(dart.library);
  const PropertyWidget = Object.create(dart.library);
  const AddProperty_view_mode = Object.create(dart.library);
  const AppTextStyle = Object.create(dart.library);
  const AppFontSizes = Object.create(dart.library);
  const AppImage = Object.create(dart.library);
  const AddPropertyScreen = Object.create(dart.library);
  const ui_helpers = Object.create(dart.library);
  const propertButton = Object.create(dart.library);
  const input_field = Object.create(dart.library);
  const note_text = Object.create(dart.library);
  const busy_button = Object.create(dart.library);
  const AddPropertyMobile = Object.create(dart.library);
  const dialog_manager = Object.create(dart.library);
  const auth_bloc = Object.create(dart.library);
  const repository = Object.create(dart.library);
  const auth_provider = Object.create(dart.library);
  const storage_repository = Object.create(dart.library);
  const storage_provider = Object.create(dart.library);
  const auth_validators = Object.create(dart.library);
  const AppleSignInAvailable = Object.create(dart.library);
  const auth_bloc_provider = Object.create(dart.library);
  const route = Object.create(dart.library);
  const WrapperScreen = Object.create(dart.library);
  const app$ = Object.create(dart.library);
  const $toString = dartx.toString;
  const $isNotEmpty = dartx.isNotEmpty;
  const $map = dartx.map;
  const $where = dartx.where;
  const $toList = dartx.toList;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $length = dartx.length;
  const $trim = dartx.trim;
  const $add = dartx.add;
  const $replaceAll = dartx.replaceAll;
  const $toLowerCase = dartx.toLowerCase;
  let GlobalKeyOfNavigatorState = () => (GlobalKeyOfNavigatorState = dart.constFn(framework.GlobalKey$(navigator.NavigatorState)))();
  let CompleterOfDialogResponse = () => (CompleterOfDialogResponse = dart.constFn(async.Completer$(dialog_models.DialogResponse)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  let JSArrayOfBottomNavyBarItem = () => (JSArrayOfBottomNavyBarItem = dart.constFn(_interceptors.JSArray$(bottom_navy_bar.BottomNavyBarItem)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let ListOfPropertyModel = () => (ListOfPropertyModel = dart.constFn(core.List$(propertyModel.PropertyModel)))();
  let StreamControllerOfListOfPropertyModel = () => (StreamControllerOfListOfPropertyModel = dart.constFn(async.StreamController$(ListOfPropertyModel())))();
  let DocumentSnapshotToPropertyModel = () => (DocumentSnapshotToPropertyModel = dart.constFn(dart.fnType(propertyModel.PropertyModel, [cloud_firestore.DocumentSnapshot])))();
  let PropertyModelTobool = () => (PropertyModelTobool = dart.constFn(dart.fnType(core.bool, [propertyModel.PropertyModel])))();
  let QuerySnapshotToNull = () => (QuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [cloud_firestore.QuerySnapshot])))();
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let VoidToAuthService = () => (VoidToAuthService = dart.constFn(dart.fnType(authentication.AuthService, [])))();
  let VoidToCustomFuntion = () => (VoidToCustomFuntion = dart.constFn(dart.fnType(customFunctions.CustomFuntion, [])))();
  let VoidToNavigationService = () => (VoidToNavigationService = dart.constFn(dart.fnType(navigation_service.NavigationService, [])))();
  let VoidToDialogService = () => (VoidToDialogService = dart.constFn(dart.fnType(dialog_service.DialogService, [])))();
  let VoidToFirestoreService = () => (VoidToFirestoreService = dart.constFn(dart.fnType(FirestoreService.FirestoreService, [])))();
  let VoidToCloudStorageService = () => (VoidToCloudStorageService = dart.constFn(dart.fnType(CloudStorageService.CloudStorageService, [])))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let ViewModelProviderOfListOfPropertyViewModel = () => (ViewModelProviderOfListOfPropertyViewModel = dart.constFn(viewmodel_provider.ViewModelProvider$(ListOfPropertyViewModel.ListOfPropertyViewModel)))();
  let ListOfPropertyViewModelTovoid = () => (ListOfPropertyViewModelTovoid = dart.constFn(dart.fnType(dart.void, [ListOfPropertyViewModel.ListOfPropertyViewModel])))();
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let AlwaysStoppedAnimationOfColor = () => (AlwaysStoppedAnimationOfColor = dart.constFn(animations.AlwaysStoppedAnimation$(ui.Color)))();
  let BuildContextAndListOfPropertyViewModelAndWidgetToScaffold = () => (BuildContextAndListOfPropertyViewModelAndWidgetToScaffold = dart.constFn(dart.fnType(scaffold.Scaffold, [framework.BuildContext, ListOfPropertyViewModel.ListOfPropertyViewModel, framework.Widget])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  let ViewModelProviderOfAddPropertyViewModel = () => (ViewModelProviderOfAddPropertyViewModel = dart.constFn(viewmodel_provider.ViewModelProvider$(AddProperty_view_mode.AddPropertyViewModel)))();
  let AddPropertyViewModelTovoid = () => (AddPropertyViewModelTovoid = dart.constFn(dart.fnType(dart.void, [AddProperty_view_mode.AddPropertyViewModel])))();
  let BuildContextToAddPropertyLandscape = () => (BuildContextToAddPropertyLandscape = dart.constFn(dart.fnType(AddPropertyMobile.AddPropertyLandscape, [framework.BuildContext])))();
  let BuildContextToAddPropertyPortrait = () => (BuildContextToAddPropertyPortrait = dart.constFn(dart.fnType(AddPropertyMobile.AddPropertyPortrait, [framework.BuildContext])))();
  let BuildContextAndAddPropertyViewModelAndWidgetToScreenTypeLayout = () => (BuildContextAndAddPropertyViewModelAndWidgetToScreenTypeLayout = dart.constFn(dart.fnType(responsive_builder.ScreenTypeLayout, [framework.BuildContext, AddProperty_view_mode.AddPropertyViewModel, framework.Widget])))();
  let CountryCodeToNull = () => (CountryCodeToNull = dart.constFn(dart.fnType(core.Null, [country_code.CountryCode])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfTextInputFormatter = () => (JSArrayOfTextInputFormatter = dart.constFn(_interceptors.JSArray$(text_formatter.TextInputFormatter)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let BehaviorSubjectOfString = () => (BehaviorSubjectOfString = dart.constFn(behavior_subject.BehaviorSubject$(core.String)))();
  let BehaviorSubjectOfAuthStatus = () => (BehaviorSubjectOfAuthStatus = dart.constFn(behavior_subject.BehaviorSubject$(auth_bloc.AuthStatus)))();
  let _StreamHandlerTransformerOfString$String = () => (_StreamHandlerTransformerOfString$String = dart.constFn(async._StreamHandlerTransformer$(core.String, core.String)))();
  let EventSinkOfString = () => (EventSinkOfString = dart.constFn(async.EventSink$(core.String)))();
  let StringAndEventSinkOfStringToNull = () => (StringAndEventSinkOfStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, EventSinkOfString()])))();
  let BuildContextToScaffold = () => (BuildContextToScaffold = dart.constFn(dart.fnType(scaffold.Scaffold, [framework.BuildContext])))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let StreamBuilderOfFirebaseUser = () => (StreamBuilderOfFirebaseUser = dart.constFn(async$.StreamBuilder$(firebase_auth.FirebaseUser)))();
  let AsyncSnapshotOfFirebaseUser = () => (AsyncSnapshotOfFirebaseUser = dart.constFn(async$.AsyncSnapshot$(firebase_auth.FirebaseUser)))();
  let BuildContextAndAsyncSnapshotOfFirebaseUserToWidget = () => (BuildContextAndAsyncSnapshotOfFirebaseUserToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AsyncSnapshotOfFirebaseUser()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 31,
        [_Location_line]: 30,
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
        [_Location_column]: 14,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 31,
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
        [_Location_column]: 15,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 36,
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
        [_Location_column]: 17,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 40,
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
        [_Location_column]: 16,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 41,
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
        [_Location_column]: 17,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedIndex",
        [_Location_column]: 4,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showElevation",
        [_Location_column]: 4,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onItemSelected",
        [_Location_column]: 4,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 4,
        [_Location_line]: 28,
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
        [_Location_column]: 29,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomPadding",
        [_Location_column]: 5,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottomNavigationBar",
        [_Location_column]: 8,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C36() {
      return C36 = dart.constList([], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 65,
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
        [_Location_column]: 14,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Dashboard.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 36,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/FetchProperties.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 10,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/FetchProperties.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 18,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/FetchProperties.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 21,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 5,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/FetchProperties.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 20,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ExpansionInfo.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 17,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ExpansionInfo.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 24,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 75,
        [_Location_line]: 18,
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
        [_Location_column]: 20,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ExpansionInfo.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 18,
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
        [_Location_column]: 16,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ExpansionInfo.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 16,
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
        [_Location_column]: 23,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ExpansionInfo.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C5 || CT.C5, C79 || CT.C79], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ExpansionInfo.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 17,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ExpansionInfo.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 24,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 75,
        [_Location_line]: 30,
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
        [_Location_column]: 20,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ExpansionInfo.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ExpansionInfo.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ExpansionInfo.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initiallyExpanded",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "headerExpanded",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "header",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ExpansionInfo.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/util/customFunctions.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 17,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 8,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/util/customFunctions.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/util/customFunctions.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/util/customFunctions.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/util/customFunctions.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/util/customFunctions.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124, C125 || CT.C125], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/util/customFunctions.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 28,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 58,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128, C129 || CT.C129], widget_inspector._Location);
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C127 || CT.C127,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/util/customFunctions.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/util/customFunctions.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 9,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136, C137 || CT.C137], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/util/customFunctions.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/util/customFunctions.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 268398336
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294907716.0
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292352864.0
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290190364.0
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293815923.0
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288748606.0
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 268136897
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280686923.0
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281408402.0
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293284096.0
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281559326.0
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280888374.0
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280693304.0
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4283723386.0
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293848814.0
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287669422.0
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293348412.0
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294244852.0
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294661252.0
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278979337.0
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288813363.0
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293783794.0
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291940817.0
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284433209.0
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287889446.0
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293845481.0
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294901502.0
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280365875.0
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281416260.0
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294111986.0
      });
    },
    get C173() {
      return C173 = dart.constList([0, 1], core.double);
    },
    get C174() {
      return C174 = dart.constList([C146 || CT.C146, C147 || CT.C147], ui.Color);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: ui.TileMode.prototype,
        [_name]: "TileMode.clamp",
        index: 0
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: 0
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: 0
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: gradient.LinearGradient.prototype,
        [Gradient_transform]: null,
        [Gradient_stops]: C173 || CT.C173,
        [Gradient_colors]: C174 || CT.C174,
        [LinearGradient_tileMode]: C175 || CT.C175,
        [LinearGradient_end]: C176 || CT.C176,
        [LinearGradient_begin]: C177 || CT.C177
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.constList([C180 || CT.C180], widget_inspector._Location);
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C179 || CT.C179,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 60,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 70,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 80,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185, C186 || CT.C186], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 36,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189, C190 || CT.C190], widget_inspector._Location);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C188 || CT.C188,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193, C194 || CT.C194], widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C192 || CT.C192,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198, C199 || CT.C199, C200 || CT.C200], widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C196 || CT.C196,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 43,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.constList([C204 || CT.C204], widget_inspector._Location);
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C203 || CT.C203,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 41,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.constList([C207 || CT.C207], widget_inspector._Location);
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C206 || CT.C206,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 59,
        [_Location_line]: 79,
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
        [_Location_column]: 32,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 30,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 30,
        [_Location_line]: 76,
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
        [_Location_column]: 35,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 28,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 28,
        [_Location_line]: 74,
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
        [_Location_column]: 33,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 27,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shadowColor",
        [_Location_column]: 26,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.constList([C222 || CT.C222, C223 || CT.C223, C224 || CT.C224, C225 || CT.C225], widget_inspector._Location);
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C221 || CT.C221,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 26,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.constList([C228 || CT.C228, C229 || CT.C229, C230 || CT.C230, C231 || CT.C231], widget_inspector._Location);
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C227 || CT.C227,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C233() {
      return C233 = dart.constList([C234 || CT.C234], widget_inspector._Location);
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C233 || CT.C233,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.constList([C237 || CT.C237, C238 || CT.C238], widget_inspector._Location);
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C236 || CT.C236,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241, C242 || CT.C242], widget_inspector._Location);
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C240 || CT.C240,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 66,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.constList([C245 || CT.C245, C246 || CT.C246], widget_inspector._Location);
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C244 || CT.C244,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.constList([C249 || CT.C249], widget_inspector._Location);
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C248 || CT.C248,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "propertyModel",
        [_Location_column]: 17,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.constList([C252 || CT.C252], widget_inspector._Location);
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C251 || CT.C251,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 11,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 11,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 11,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 11,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.constList([C255 || CT.C255, C256 || CT.C256, C257 || CT.C257, C258 || CT.C258], widget_inspector._Location);
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C254 || CT.C254,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 25,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C260() {
      return C260 = dart.constList([C261 || CT.C261], widget_inspector._Location);
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C260 || CT.C260,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 32,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.constList([C264 || CT.C264], widget_inspector._Location);
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C263 || CT.C263,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 12,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C266() {
      return C266 = dart.constList([C267 || CT.C267], widget_inspector._Location);
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C266 || CT.C266,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C269() {
      return C269 = dart.constList([C270 || CT.C270], widget_inspector._Location);
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C269 || CT.C269,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C272() {
      return C272 = dart.constList([C273 || CT.C273, C274 || CT.C274], widget_inspector._Location);
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C272 || CT.C272,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomPadding",
        [_Location_column]: 5,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C276() {
      return C276 = dart.constList([C277 || CT.C277, C278 || CT.C278, C279 || CT.C279], widget_inspector._Location);
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C276 || CT.C276,
        [_Location_name]: null,
        [_Location_column]: 8,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewModel",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onModelReady",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C281() {
      return C281 = dart.constList([C282 || CT.C282, C283 || CT.C283, C284 || CT.C284], widget_inspector._Location);
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C281 || CT.C281,
        [_Location_name]: null,
        [_Location_column]: 6,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/ListOfProperty.dart"
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 24,
        [_Location_line]: 24,
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
        [_Location_column]: 13,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C289() {
      return C289 = dart.constList([C290 || CT.C290], widget_inspector._Location);
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C289 || CT.C289,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 43,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.constList([C293 || CT.C293], widget_inspector._Location);
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C292 || CT.C292,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 76,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 88,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C295() {
      return C295 = dart.constList([C296 || CT.C296, C297 || CT.C297, C298 || CT.C298], widget_inspector._Location);
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C295 || CT.C295,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C300() {
      return C300 = dart.constList([C301 || CT.C301], widget_inspector._Location);
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C300 || CT.C300,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 39,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 46,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 58,
        [_Location_line]: 29,
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
        [_Location_column]: 24,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 49,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C308() {
      return C308 = dart.constList([C309 || CT.C309, C310 || CT.C310], widget_inspector._Location);
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C308 || CT.C308,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 39,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C312() {
      return C312 = dart.constList([C313 || CT.C313, C314 || CT.C314], widget_inspector._Location);
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C312 || CT.C312,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 62,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 18,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.constList([C317 || CT.C317, C318 || CT.C318, C319 || CT.C319], widget_inspector._Location);
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C316 || CT.C316,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C321() {
      return C321 = dart.constList([C322 || CT.C322], widget_inspector._Location);
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C321 || CT.C321,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 34,
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
        [_Location_column]: 18,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 33,
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
        [_Location_column]: 19,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 9,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.constList([C332 || CT.C332, C333 || CT.C333, C334 || CT.C334, C335 || CT.C335], widget_inspector._Location);
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C331 || CT.C331,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C337() {
      return C337 = dart.constList([C338 || CT.C338], widget_inspector._Location);
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C337 || CT.C337,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/PropertyWidget.dart"
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 15
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C341 || CT.C341,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C152 || CT.C152,
        [TextStyle_inherit]: true
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "landscape",
        [_Location_column]: 11,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "portrait",
        [_Location_column]: 11,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C345() {
      return C345 = dart.constList([C346 || CT.C346, C347 || CT.C347], widget_inspector._Location);
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C345 || CT.C345,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C349() {
      return C349 = dart.constList([C350 || CT.C350], widget_inspector._Location);
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C349 || CT.C349,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mobile",
        [_Location_column]: 3,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tablet",
        [_Location_column]: 3,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C352() {
      return C352 = dart.constList([C353 || CT.C353, C354 || CT.C354], widget_inspector._Location);
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C352 || CT.C352,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewModel",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onModelReady",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C356() {
      return C356 = dart.constList([C357 || CT.C357, C358 || CT.C358, C359 || CT.C359], widget_inspector._Location);
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C356 || CT.C356,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C361() {
      return C361 = dart.constList([C362 || CT.C362, C363 || CT.C363], widget_inspector._Location);
    },
    get C360() {
      return C360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C361 || CT.C361,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 60,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 70,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 80,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C365() {
      return C365 = dart.constList([C366 || CT.C366, C367 || CT.C367, C368 || CT.C368], widget_inspector._Location);
    },
    get C364() {
      return C364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C365 || CT.C365,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 36,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C370() {
      return C370 = dart.constList([C371 || CT.C371, C372 || CT.C372], widget_inspector._Location);
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C370 || CT.C370,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C374() {
      return C374 = dart.constList([C375 || CT.C375, C376 || CT.C376], widget_inspector._Location);
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C374 || CT.C374,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C378() {
      return C378 = dart.constList([C379 || CT.C379, C380 || CT.C380, C381 || CT.C381, C382 || CT.C382], widget_inspector._Location);
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C378 || CT.C378,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 19,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "background",
        [_Location_column]: 19,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onpress",
        [_Location_column]: 19,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C385() {
      return C385 = dart.constList([C386 || CT.C386, C387 || CT.C387, C388 || CT.C388], widget_inspector._Location);
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C385 || CT.C385,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 19,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "background",
        [_Location_column]: 19,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onpress",
        [_Location_column]: 19,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C390() {
      return C390 = dart.constList([C391 || CT.C391, C392 || CT.C392, C393 || CT.C393], widget_inspector._Location);
    },
    get C389() {
      return C389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C390 || CT.C390,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C396() {
      return C396 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 19,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "background",
        [_Location_column]: 19,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onpress",
        [_Location_column]: 19,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C395() {
      return C395 = dart.constList([C396 || CT.C396, C397 || CT.C397, C398 || CT.C398], widget_inspector._Location);
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C395 || CT.C395,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C400() {
      return C400 = dart.constList([C401 || CT.C401, C402 || CT.C402], widget_inspector._Location);
    },
    get C399() {
      return C399 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C400 || CT.C400,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C404() {
      return C404 = dart.constList([C405 || CT.C405, C406 || CT.C406], widget_inspector._Location);
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C404 || CT.C404,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C408() {
      return C408 = dart.constList([C409 || CT.C409], widget_inspector._Location);
    },
    get C407() {
      return C407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C408 || CT.C408,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C411() {
      return C411 = dart.constList([C412 || CT.C412], widget_inspector._Location);
    },
    get C410() {
      return C410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C411 || CT.C411,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C416() {
      return C416 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C414() {
      return C414 = dart.constList([C415 || CT.C415, C416 || CT.C416], widget_inspector._Location);
    },
    get C413() {
      return C413 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C414 || CT.C414,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "placeholder",
        [_Location_column]: 21,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C418() {
      return C418 = dart.constList([C419 || CT.C419, C420 || CT.C420], widget_inspector._Location);
    },
    get C417() {
      return C417 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C418 || CT.C418,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "placeholder",
        [_Location_column]: 21,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C422() {
      return C422 = dart.constList([C423 || CT.C423, C424 || CT.C424], widget_inspector._Location);
    },
    get C421() {
      return C421 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C422 || CT.C422,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "placeholder",
        [_Location_column]: 21,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textInputType",
        [_Location_column]: 21,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C426() {
      return C426 = dart.constList([C427 || CT.C427, C428 || CT.C428, C429 || CT.C429], widget_inspector._Location);
    },
    get C425() {
      return C425 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C426 || CT.C426,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 42,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialSelection",
        [_Location_column]: 41,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "favorite",
        [_Location_column]: 41,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showCountryOnly",
        [_Location_column]: 41,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignLeft",
        [_Location_column]: 41,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C431() {
      return C431 = dart.constList([C432 || CT.C432, C433 || CT.C433, C434 || CT.C434, C435 || CT.C435, C436 || CT.C436], widget_inspector._Location);
    },
    get C430() {
      return C430 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C431 || CT.C431,
        [_Location_name]: null,
        [_Location_column]: 49,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "placeholder",
        [_Location_column]: 21,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textInputType",
        [_Location_column]: 21,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C442() {
      return C442 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C438() {
      return C438 = dart.constList([C439 || CT.C439, C440 || CT.C440, C441 || CT.C441, C442 || CT.C442], widget_inspector._Location);
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C438 || CT.C438,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C444() {
      return C444 = dart.constList([C445 || CT.C445, C446 || CT.C446], widget_inspector._Location);
    },
    get C443() {
      return C443 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C444 || CT.C444,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C450() {
      return C450 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C451() {
      return C451 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C448() {
      return C448 = dart.constList([C449 || CT.C449, C450 || CT.C450, C451 || CT.C451], widget_inspector._Location);
    },
    get C447() {
      return C447 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C448 || CT.C448,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C454() {
      return C454 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C453() {
      return C453 = dart.constList([C454 || CT.C454], widget_inspector._Location);
    },
    get C452() {
      return C452 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C453 || CT.C453,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C456() {
      return C456 = dart.constList([C457 || CT.C457, C458 || CT.C458], widget_inspector._Location);
    },
    get C455() {
      return C455 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C456 || CT.C456,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 47,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C460() {
      return C460 = dart.constList([C461 || CT.C461], widget_inspector._Location);
    },
    get C459() {
      return C459 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C460 || CT.C460,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 221,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 34,
        [_Location_line]: 226,
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
        [_Location_column]: 37,
        [_Location_line]: 225,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 30,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C467() {
      return C467 = dart.constList([C468 || CT.C468], widget_inspector._Location);
    },
    get C466() {
      return C466 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C467 || CT.C467,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 224,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C471() {
      return C471 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 28,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 28,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C470() {
      return C470 = dart.constList([C471 || CT.C471, C472 || CT.C472], widget_inspector._Location);
    },
    get C469() {
      return C469 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C470 || CT.C470,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 222,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C475() {
      return C475 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 24,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C474() {
      return C474 = dart.constList([C475 || CT.C475], widget_inspector._Location);
    },
    get C473() {
      return C473 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C474 || CT.C474,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 30,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C477() {
      return C477 = dart.constList([C478 || CT.C478], widget_inspector._Location);
    },
    get C476() {
      return C476 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C477 || CT.C477,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 28,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 28,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C480() {
      return C480 = dart.constList([C481 || CT.C481, C482 || CT.C482], widget_inspector._Location);
    },
    get C479() {
      return C479 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C480 || CT.C480,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 216,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 40,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 22,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C484() {
      return C484 = dart.constList([C485 || CT.C485, C486 || CT.C486], widget_inspector._Location);
    },
    get C483() {
      return C483 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C484 || CT.C484,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 215,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 5,
        [EdgeInsets_right]: 5,
        [EdgeInsets_top]: 5,
        [EdgeInsets_left]: 5
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 34,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C489() {
      return C489 = dart.constList([C490 || CT.C490, C491 || CT.C491], widget_inspector._Location);
    },
    get C488() {
      return C488 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C489 || CT.C489,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 241,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C494() {
      return C494 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "file",
        [_Location_column]: 72,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 87,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C493() {
      return C493 = dart.constList([C494 || CT.C494, C495 || CT.C495], widget_inspector._Location);
    },
    get C492() {
      return C492 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C493 || CT.C493,
        [_Location_name]: null,
        [_Location_column]: 61,
        [_Location_line]: 244,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 47,
        [_Location_line]: 244,
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
        [_Location_column]: 38,
        [_Location_line]: 244,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 37,
        [_Location_line]: 240,
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
        [_Location_column]: 42,
        [_Location_line]: 239,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C504() {
      return C504 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 35,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 239,
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
        [_Location_column]: 52,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 45,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 34,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C507() {
      return C507 = dart.constList([C508 || CT.C508, C509 || CT.C509], widget_inspector._Location);
    },
    get C506() {
      return C506 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C507 || CT.C507,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 236,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C510() {
      return C510 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 30,
        [Radius_x]: 30
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 22,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 22,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C516() {
      return C516 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C512() {
      return C512 = dart.constList([C513 || CT.C513, C514 || CT.C514, C515 || CT.C515, C516 || CT.C516], widget_inspector._Location);
    },
    get C511() {
      return C511 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C512 || CT.C512,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C520() {
      return C520 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C518() {
      return C518 = dart.constList([C519 || CT.C519, C520 || CT.C520], widget_inspector._Location);
    },
    get C517() {
      return C517 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C518 || CT.C518,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 272,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C525() {
      return C525 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 279,
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
        [_Location_column]: 25,
        [_Location_line]: 271,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C528() {
      return C528 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C529() {
      return C529 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C527() {
      return C527 = dart.constList([C528 || CT.C528, C529 || CT.C529], widget_inspector._Location);
    },
    get C526() {
      return C526 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C527 || CT.C527,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 283,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C532() {
      return C532 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C533() {
      return C533 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C531() {
      return C531 = dart.constList([C532 || CT.C532, C533 || CT.C533, C534 || CT.C534], widget_inspector._Location);
    },
    get C530() {
      return C530 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C531 || CT.C531,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 282,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C538() {
      return C538 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C536() {
      return C536 = dart.constList([C537 || CT.C537, C538 || CT.C538], widget_inspector._Location);
    },
    get C535() {
      return C535 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C536 || CT.C536,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C540() {
      return C540 = dart.constList([C541 || CT.C541], widget_inspector._Location);
    },
    get C539() {
      return C539 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C540 || CT.C540,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 209,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C544() {
      return C544 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C545() {
      return C545 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C543() {
      return C543 = dart.constList([C544 || CT.C544, C545 || CT.C545], widget_inspector._Location);
    },
    get C542() {
      return C542 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C543 || CT.C543,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C548() {
      return C548 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C547() {
      return C547 = dart.constList([C548 || CT.C548], widget_inspector._Location);
    },
    get C546() {
      return C546 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C547 || CT.C547,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C551() {
      return C551 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C552() {
      return C552 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 51,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C550() {
      return C550 = dart.constList([C551 || CT.C551, C552 || CT.C552], widget_inspector._Location);
    },
    get C549() {
      return C549 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C550 || CT.C550,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 309,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 19,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C556() {
      return C556 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 19,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C557() {
      return C557 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 20,
        [_Location_line]: 319,
        [_Location_file]: null
      });
    },
    get C558() {
      return C558 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 320,
        [_Location_file]: null
      });
    },
    get C554() {
      return C554 = dart.constList([C555 || CT.C555, C556 || CT.C556, C557 || CT.C557, C558 || CT.C558], widget_inspector._Location);
    },
    get C553() {
      return C553 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C554 || CT.C554,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 316,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C561() {
      return C561 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C562() {
      return C562 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C560() {
      return C560 = dart.constList([C561 || CT.C561, C562 || CT.C562], widget_inspector._Location);
    },
    get C559() {
      return C559 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C560 || CT.C560,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 332,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C566() {
      return C566 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 338,
        [_Location_file]: null
      });
    },
    get C567() {
      return C567 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C564() {
      return C564 = dart.constList([C565 || CT.C565, C566 || CT.C566, C567 || CT.C567], widget_inspector._Location);
    },
    get C563() {
      return C563 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C564 || CT.C564,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 331,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C570() {
      return C570 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 23,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C571() {
      return C571 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "busy",
        [_Location_column]: 23,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C572() {
      return C572 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C569() {
      return C569 = dart.constList([C570 || CT.C570, C571 || CT.C571, C572 || CT.C572], widget_inspector._Location);
    },
    get C568() {
      return C568 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C569 || CT.C569,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 342,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C575() {
      return C575 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C576() {
      return C576 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C574() {
      return C574 = dart.constList([C575 || CT.C575, C576 || CT.C576], widget_inspector._Location);
    },
    get C573() {
      return C573 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C574 || CT.C574,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 328,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 307,
        [_Location_file]: null
      });
    },
    get C578() {
      return C578 = dart.constList([C579 || CT.C579], widget_inspector._Location);
    },
    get C577() {
      return C577 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C578 || CT.C578,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 306,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C582() {
      return C582 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C583() {
      return C583 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C581() {
      return C581 = dart.constList([C582 || CT.C582, C583 || CT.C583], widget_inspector._Location);
    },
    get C580() {
      return C580 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C581 || CT.C581,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 304,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/AddPropertyScreen.dart"
      });
    },
    get C586() {
      return C586 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 49,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C585() {
      return C585 = dart.constList([C586 || CT.C586], widget_inspector._Location);
    },
    get C584() {
      return C584 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C585 || CT.C585,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ui_helpers.dart"
      });
    },
    get C587() {
      return C587 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 5
      });
    },
    get C588() {
      return C588 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C589() {
      return C589 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 25
      });
    },
    get C590() {
      return C590 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 30
      });
    },
    get C591() {
      return C591 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 5,
        [SizedBox_width]: null
      });
    },
    get C592() {
      return C592 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 10,
        [SizedBox_width]: null
      });
    },
    get C593() {
      return C593 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 25,
        [SizedBox_width]: null
      });
    },
    get C594() {
      return C594 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 50,
        [SizedBox_width]: null
      });
    },
    get C595() {
      return C595 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 120,
        [SizedBox_width]: null
      });
    },
    get C600() {
      return C600 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293718001.0
      });
    },
    get C601() {
      return C601 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291811548.0
      });
    },
    get C602() {
      return C602 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4289773253.0
      });
    },
    get C603() {
      return C603 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286091420.0
      });
    },
    get C604() {
      return C604 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284513675.0
      });
    },
    get C605() {
      return C605 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282735204.0
      });
    },
    get C606() {
      return C606 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281812815.0
      });
    },
    get C599() {
      return C599 = dart.constMap(core.int, ui.Color, [50, C600 || CT.C600, 100, C601 || CT.C601, 200, C602 || CT.C602, 300, C157 || CT.C157, 400, C603 || CT.C603, 500, C604 || CT.C604, 600, C155 || CT.C155, 700, C605 || CT.C605, 800, C606 || CT.C606, 900, C154 || CT.C154]);
    },
    get C598() {
      return C598 = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4284513675.0,
        [ColorSwatch__swatch]: C599 || CT.C599
      });
    },
    get C597() {
      return C597 = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: C598 || CT.C598,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: 5
      });
    },
    get C596() {
      return C596 = dart.constList([C593 || CT.C593, C597 || CT.C597, C593 || CT.C593], framework.Widget);
    },
    get C609() {
      return C609 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 3,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C608() {
      return C608 = dart.constList([C609 || CT.C609], widget_inspector._Location);
    },
    get C607() {
      return C607 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C608 || CT.C608,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/ui_helpers.dart"
      });
    },
    get C612() {
      return C612 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C613() {
      return C613 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C611() {
      return C611 = dart.constList([C612 || CT.C612, C613 || CT.C613], widget_inspector._Location);
    },
    get C610() {
      return C610 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C611 || CT.C611,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/propertButton.dart"
      });
    },
    get C616() {
      return C616 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C617() {
      return C617 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C618() {
      return C618 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C615() {
      return C615 = dart.constList([C616 || CT.C616, C617 || CT.C617, C618 || CT.C618], widget_inspector._Location);
    },
    get C614() {
      return C614 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C615 || CT.C615,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/propertButton.dart"
      });
    },
    get C619() {
      return C619 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.next",
        index: 6
      });
    },
    get C620() {
      return C620 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [TextInputType_decimal]: null,
        [TextInputType_signed]: null,
        [TextInputType_index]: 0
      });
    },
    get C623() {
      return C623 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 19,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C624() {
      return C624 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 19,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C625() {
      return C625 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 19,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C626() {
      return C626 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textInputAction",
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C627() {
      return C627 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C628() {
      return C628 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C629() {
      return C629 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onEditingComplete",
        [_Location_column]: 19,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C630() {
      return C630 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onFieldSubmitted",
        [_Location_column]: 19,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C631() {
      return C631 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 19,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C632() {
      return C632 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "readOnly",
        [_Location_column]: 19,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C633() {
      return C633 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C622() {
      return C622 = dart.constList([C623 || CT.C623, C624 || CT.C624, C625 || CT.C625, C626 || CT.C626, C627 || CT.C627, C628 || CT.C628, C629 || CT.C629, C630 || CT.C630, C631 || CT.C631, C632 || CT.C632, C633 || CT.C633], widget_inspector._Location);
    },
    get C621() {
      return C621 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C622 || CT.C622,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/input_field.dart"
      });
    },
    get C636() {
      return C636 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C635() {
      return C635 = dart.constList([C636 || CT.C636], widget_inspector._Location);
    },
    get C634() {
      return C634 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C635 || CT.C635,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/input_field.dart"
      });
    },
    get C639() {
      return C639 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C638() {
      return C638 = dart.constList([C639 || CT.C639], widget_inspector._Location);
    },
    get C637() {
      return C637 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C638 || CT.C638,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/input_field.dart"
      });
    },
    get C642() {
      return C642 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C643() {
      return C643 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C644() {
      return C644 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 25,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C645() {
      return C645 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C641() {
      return C641 = dart.constList([C642 || CT.C642, C643 || CT.C643, C644 || CT.C644, C645 || CT.C645], widget_inspector._Location);
    },
    get C640() {
      return C640 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C641 || CT.C641,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/input_field.dart"
      });
    },
    get C646() {
      return C646 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/input_field.dart"
      });
    },
    get C649() {
      return C649 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C650() {
      return C650 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C648() {
      return C648 = dart.constList([C649 || CT.C649, C650 || CT.C650], widget_inspector._Location);
    },
    get C647() {
      return C647 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C648 || CT.C648,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/input_field.dart"
      });
    },
    get C653() {
      return C653 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C652() {
      return C652 = dart.constList([C653 || CT.C653], widget_inspector._Location);
    },
    get C651() {
      return C651 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C652 || CT.C652,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/input_field.dart"
      });
    },
    get C656() {
      return C656 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C657() {
      return C657 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C658() {
      return C658 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C659() {
      return C659 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C660() {
      return C660 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C655() {
      return C655 = dart.constList([C656 || CT.C656, C657 || CT.C657, C658 || CT.C658, C659 || CT.C659, C660 || CT.C660], widget_inspector._Location);
    },
    get C654() {
      return C654 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C655 || CT.C655,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/input_field.dart"
      });
    },
    get C663() {
      return C663 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 20,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C664() {
      return C664 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C662() {
      return C662 = dart.constList([C663 || CT.C663, C664 || CT.C664], widget_inspector._Location);
    },
    get C661() {
      return C661 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C662 || CT.C662,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/input_field.dart"
      });
    },
    get C667() {
      return C667 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 60,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C666() {
      return C666 = dart.constList([C667 || CT.C667], widget_inspector._Location);
    },
    get C665() {
      return C665 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C666 || CT.C666,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/input_field.dart"
      });
    },
    get C670() {
      return C670 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C671() {
      return C671 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C669() {
      return C669 = dart.constList([C670 || CT.C670, C671 || CT.C671], widget_inspector._Location);
    },
    get C668() {
      return C668 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C669 || CT.C669,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/input_field.dart"
      });
    },
    get C674() {
      return C674 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C675() {
      return C675 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C676() {
      return C676 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C673() {
      return C673 = dart.constList([C674 || CT.C674, C675 || CT.C675, C676 || CT.C676], widget_inspector._Location);
    },
    get C672() {
      return C672 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C673 || CT.C673,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/note_text.dart"
      });
    },
    get C677() {
      return C677 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C680() {
      return C680 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C681() {
      return C681 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C679() {
      return C679 = dart.constList([C680 || CT.C680, C681 || CT.C681], widget_inspector._Location);
    },
    get C678() {
      return C678 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C679 || CT.C679,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/busy_button.dart"
      });
    },
    get C684() {
      return C684 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "strokeWidth",
        [_Location_column]: 19,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C685() {
      return C685 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 19,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C683() {
      return C683 = dart.constList([C684 || CT.C684, C685 || CT.C685], widget_inspector._Location);
    },
    get C682() {
      return C682 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C683 || CT.C683,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/busy_button.dart"
      });
    },
    get C688() {
      return C688 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C689() {
      return C689 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C690() {
      return C690 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 11,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C691() {
      return C691 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C692() {
      return C692 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C693() {
      return C693 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C687() {
      return C687 = dart.constList([C688 || CT.C688, C689 || CT.C689, C690 || CT.C690, C691 || CT.C691, C328 || CT.C328, C692 || CT.C692, C693 || CT.C693], widget_inspector._Location);
    },
    get C686() {
      return C686 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C687 || CT.C687,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/busy_button.dart"
      });
    },
    get C696() {
      return C696 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C695() {
      return C695 = dart.constList([C696 || CT.C696], widget_inspector._Location);
    },
    get C694() {
      return C694 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C695 || CT.C695,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/busy_button.dart"
      });
    },
    get C699() {
      return C699 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C700() {
      return C700 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C698() {
      return C698 = dart.constList([C699 || CT.C699, C700 || CT.C700], widget_inspector._Location);
    },
    get C697() {
      return C697 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C698 || CT.C698,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/widget/busy_button.dart"
      });
    },
    get C703() {
      return C703 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "model",
        [_Location_column]: 26,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C702() {
      return C702 = dart.constList([C703 || CT.C703], widget_inspector._Location);
    },
    get C701() {
      return C701 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C702 || CT.C702,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Mobile/AddPropertyMobile.dart"
      });
    },
    get C706() {
      return C706 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C705() {
      return C705 = dart.constList([C706 || CT.C706], widget_inspector._Location);
    },
    get C704() {
      return C704 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C705 || CT.C705,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Mobile/AddPropertyMobile.dart"
      });
    },
    get C709() {
      return C709 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "model",
        [_Location_column]: 30,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C708() {
      return C708 = dart.constList([C709 || CT.C709], widget_inspector._Location);
    },
    get C707() {
      return C707 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C708 || CT.C708,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Mobile/AddPropertyMobile.dart"
      });
    },
    get C712() {
      return C712 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 10,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C711() {
      return C711 = dart.constList([C712 || CT.C712], widget_inspector._Location);
    },
    get C710() {
      return C710 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C711 || CT.C711,
        [_Location_name]: null,
        [_Location_column]: 6,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Mobile/AddPropertyMobile.dart"
      });
    },
    get C715() {
      return C715 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 26,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C714() {
      return C714 = dart.constList([C715 || CT.C715], widget_inspector._Location);
    },
    get C713() {
      return C713 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C714 || CT.C714,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Mobile/AddPropertyMobile.dart"
      });
    },
    get C718() {
      return C718 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C717() {
      return C717 = dart.constList([C718 || CT.C718], widget_inspector._Location);
    },
    get C716() {
      return C716 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C717 || CT.C717,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Mobile/AddPropertyMobile.dart"
      });
    },
    get C721() {
      return C721 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C720() {
      return C720 = dart.constList([C721 || CT.C721, C33 || CT.C33], widget_inspector._Location);
    },
    get C719() {
      return C719 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C720 || CT.C720,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/Mobile/AddPropertyMobile.dart"
      });
    },
    get C724() {
      return C724 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C723() {
      return C723 = dart.constList([C724 || CT.C724], widget_inspector._Location);
    },
    get C722() {
      return C722 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C723 || CT.C723,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/managers/dialog_manager.dart"
      });
    },
    get C727() {
      return C727 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C726() {
      return C726 = dart.constList([C727 || CT.C727], widget_inspector._Location);
    },
    get C725() {
      return C725 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C726 || CT.C726,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/managers/dialog_manager.dart"
      });
    },
    get C730() {
      return C730 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C729() {
      return C729 = dart.constList([C730 || CT.C730], widget_inspector._Location);
    },
    get C728() {
      return C728 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C729 || CT.C729,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/managers/dialog_manager.dart"
      });
    },
    get C733() {
      return C733 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C734() {
      return C734 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C732() {
      return C732 = dart.constList([C733 || CT.C733, C734 || CT.C734], widget_inspector._Location);
    },
    get C731() {
      return C731 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C732 || CT.C732,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/managers/dialog_manager.dart"
      });
    },
    get C737() {
      return C737 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C736() {
      return C736 = dart.constList([C737 || CT.C737], widget_inspector._Location);
    },
    get C735() {
      return C735 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C736 || CT.C736,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/managers/dialog_manager.dart"
      });
    },
    get C740() {
      return C740 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C741() {
      return C741 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C739() {
      return C739 = dart.constList([C740 || CT.C740, C741 || CT.C741], widget_inspector._Location);
    },
    get C738() {
      return C738 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C739 || CT.C739,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/managers/dialog_manager.dart"
      });
    },
    get C744() {
      return C744 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C745() {
      return C745 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 15,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C746() {
      return C746 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 15,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C743() {
      return C743 = dart.constList([C744 || CT.C744, C745 || CT.C745, C746 || CT.C746], widget_inspector._Location);
    },
    get C742() {
      return C742 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C743 || CT.C743,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/managers/dialog_manager.dart"
      });
    },
    get C747() {
      return C747 = dart.const({
        __proto__: auth_bloc.AuthStatus.prototype,
        [_name$0]: "AuthStatus.emailAuth",
        index: 0
      });
    },
    get C748() {
      return C748 = dart.const({
        __proto__: auth_bloc.AuthStatus.prototype,
        [_name$0]: "AuthStatus.phoneAuth",
        index: 1
      });
    },
    get C749() {
      return C749 = dart.const({
        __proto__: auth_bloc.AuthStatus.prototype,
        [_name$0]: "AuthStatus.emailLinkSent",
        index: 2
      });
    },
    get C750() {
      return C750 = dart.const({
        __proto__: auth_bloc.AuthStatus.prototype,
        [_name$0]: "AuthStatus.smsSent",
        index: 3
      });
    },
    get C751() {
      return C751 = dart.const({
        __proto__: auth_bloc.AuthStatus.prototype,
        [_name$0]: "AuthStatus.isLoading",
        index: 4
      });
    },
    get C752() {
      return C752 = dart.constList([C747 || CT.C747, C748 || CT.C748, C749 || CT.C749, C750 || CT.C750, C751 || CT.C751], auth_bloc.AuthStatus);
    },
    get C753() {
      return C753 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/route.dart"
      });
    },
    get C754() {
      return C754 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/route.dart"
      });
    },
    get C755() {
      return C755 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/route.dart"
      });
    },
    get C758() {
      return C758 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 72,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C757() {
      return C757 = dart.constList([C758 || CT.C758], widget_inspector._Location);
    },
    get C756() {
      return C756 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C757 || CT.C757,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/route.dart"
      });
    },
    get C761() {
      return C761 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C760() {
      return C760 = dart.constList([C761 || CT.C761], widget_inspector._Location);
    },
    get C759() {
      return C759 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C760 || CT.C760,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/route.dart"
      });
    },
    get C764() {
      return C764 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 17,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C763() {
      return C763 = dart.constList([C764 || CT.C764], widget_inspector._Location);
    },
    get C762() {
      return C762 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C763 || CT.C763,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/route.dart"
      });
    },
    get C767() {
      return C767 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 36,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C766() {
      return C766 = dart.constList([C767 || CT.C767], widget_inspector._Location);
    },
    get C765() {
      return C765 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C766 || CT.C766,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/WrapperScreen.dart"
      });
    },
    get C770() {
      return C770 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 24,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C769() {
      return C769 = dart.constList([C770 || CT.C770], widget_inspector._Location);
    },
    get C768() {
      return C768 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C769 || CT.C769,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/WrapperScreen.dart"
      });
    },
    get C773() {
      return C773 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 22,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C772() {
      return C772 = dart.constList([C773 || CT.C773], widget_inspector._Location);
    },
    get C771() {
      return C771 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C772 || CT.C772,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/WrapperScreen.dart"
      });
    },
    get C774() {
      return C774 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/WrapperScreen.dart"
      });
    },
    get C777() {
      return C777 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C776() {
      return C776 = dart.constList([C777 || CT.C777], widget_inspector._Location);
    },
    get C775() {
      return C775 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C776 || CT.C776,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/WrapperScreen.dart"
      });
    },
    get C780() {
      return C780 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 14,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C781() {
      return C781 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 14,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C779() {
      return C779 = dart.constList([C780 || CT.C780, C781 || CT.C781], widget_inspector._Location);
    },
    get C778() {
      return C778 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C779 || CT.C779,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/WrapperScreen.dart"
      });
    },
    get C784() {
      return C784 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C783() {
      return C783 = dart.constList([C784 || CT.C784], widget_inspector._Location);
    },
    get C782() {
      return C782 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C783 || CT.C783,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/WrapperScreen.dart"
      });
    },
    get C787() {
      return C787 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 10,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C786() {
      return C786 = dart.constList([C787 || CT.C787], widget_inspector._Location);
    },
    get C785() {
      return C785 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C786 || CT.C786,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/WrapperScreen.dart"
      });
    },
    get C790() {
      return C790 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 8,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C789() {
      return C789 = dart.constList([C790 || CT.C790], widget_inspector._Location);
    },
    get C788() {
      return C788 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C789 || CT.C789,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/screen/WrapperScreen.dart"
      });
    },
    get C791() {
      return C791 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/app.dart"
      });
    },
    get C794() {
      return C794 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C793() {
      return C793 = dart.constList([C794 || CT.C794], widget_inspector._Location);
    },
    get C792() {
      return C792 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C793 || CT.C793,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/app.dart"
      });
    },
    get C797() {
      return C797 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C798() {
      return C798 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C796() {
      return C796 = dart.constList([C797 || CT.C797, C798 || CT.C798], widget_inspector._Location);
    },
    get C795() {
      return C795 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C796 || CT.C796,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/app.dart"
      });
    },
    get C801() {
      return C801 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C800() {
      return C800 = dart.constList([C801 || CT.C801], widget_inspector._Location);
    },
    get C799() {
      return C799 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C800 || CT.C800,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/src/app.dart"
      });
    }
  });
  const _dialogNavigationKey = dart.privateName(dialog_service, "_dialogNavigationKey");
  const _showDialogListener = dart.privateName(dialog_service, "_showDialogListener");
  const _dialogCompleter = dart.privateName(dialog_service, "_dialogCompleter");
  dialog_service.DialogService = class DialogService extends core.Object {
    get dialogNavigationKey() {
      return this[_dialogNavigationKey];
    }
    registerDialogListener(showDialogListener) {
      this[_showDialogListener] = showDialogListener;
    }
    showDialog(opts) {
      let title = opts && 'title' in opts ? opts.title : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let buttonTitle = opts && 'buttonTitle' in opts ? opts.buttonTitle : "Ok";
      this[_dialogCompleter] = CompleterOfDialogResponse().new();
      this[_showDialogListener](new dialog_models.DialogRequest.new({title: title, description: description, buttonTitle: buttonTitle}));
      return this[_dialogCompleter].future;
    }
    showConfirmationDialog(opts) {
      let title = opts && 'title' in opts ? opts.title : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let confirmationTitle = opts && 'confirmationTitle' in opts ? opts.confirmationTitle : "Ok";
      let cancelTitle = opts && 'cancelTitle' in opts ? opts.cancelTitle : "Cancel";
      this[_dialogCompleter] = CompleterOfDialogResponse().new();
      this[_showDialogListener](new dialog_models.DialogRequest.new({title: title, description: description, buttonTitle: confirmationTitle, cancelTitle: cancelTitle}));
      return this[_dialogCompleter].future;
    }
    dialogComplete(response) {
      this[_dialogNavigationKey].currentState.pop(core.Object);
      this[_dialogCompleter].complete(response);
      this[_dialogCompleter] = null;
    }
  };
  (dialog_service.DialogService.new = function() {
    this[_dialogNavigationKey] = GlobalKeyOfNavigatorState().new();
    this[_showDialogListener] = null;
    this[_dialogCompleter] = null;
    ;
  }).prototype = dialog_service.DialogService.prototype;
  dart.addTypeTests(dialog_service.DialogService);
  dart.setMethodSignature(dialog_service.DialogService, () => ({
    __proto__: dart.getMethods(dialog_service.DialogService.__proto__),
    registerDialogListener: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [dialog_models.DialogRequest])]),
    showDialog: dart.fnType(async.Future$(dialog_models.DialogResponse), [], {buttonTitle: core.String, description: core.String, title: core.String}, {}),
    showConfirmationDialog: dart.fnType(async.Future$(dialog_models.DialogResponse), [], {cancelTitle: core.String, confirmationTitle: core.String, description: core.String, title: core.String}, {}),
    dialogComplete: dart.fnType(dart.void, [dialog_models.DialogResponse])
  }));
  dart.setGetterSignature(dialog_service.DialogService, () => ({
    __proto__: dart.getGetters(dialog_service.DialogService.__proto__),
    dialogNavigationKey: framework.GlobalKey$(navigator.NavigatorState)
  }));
  dart.setLibraryUri(dialog_service.DialogService, "package:hostapp/src/service/dialog_service.dart");
  dart.setFieldSignature(dialog_service.DialogService, () => ({
    __proto__: dart.getFields(dialog_service.DialogService.__proto__),
    [_dialogNavigationKey]: dart.fieldType(framework.GlobalKey$(navigator.NavigatorState)),
    [_showDialogListener]: dart.fieldType(dart.fnType(dart.dynamic, [dialog_models.DialogRequest])),
    [_dialogCompleter]: dart.fieldType(async.Completer$(dialog_models.DialogResponse))
  }));
  const title$ = dart.privateName(dialog_models, "DialogRequest.title");
  const description$ = dart.privateName(dialog_models, "DialogRequest.description");
  const buttonTitle$ = dart.privateName(dialog_models, "DialogRequest.buttonTitle");
  const cancelTitle$ = dart.privateName(dialog_models, "DialogRequest.cancelTitle");
  dialog_models.DialogRequest = class DialogRequest extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get buttonTitle() {
      return this[buttonTitle$];
    }
    set buttonTitle(value) {
      super.buttonTitle = value;
    }
    get cancelTitle() {
      return this[cancelTitle$];
    }
    set cancelTitle(value) {
      super.cancelTitle = value;
    }
  };
  (dialog_models.DialogRequest.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let buttonTitle = opts && 'buttonTitle' in opts ? opts.buttonTitle : null;
    let cancelTitle = opts && 'cancelTitle' in opts ? opts.cancelTitle : null;
    this[title$] = title;
    this[description$] = description;
    this[buttonTitle$] = buttonTitle;
    this[cancelTitle$] = cancelTitle;
    ;
  }).prototype = dialog_models.DialogRequest.prototype;
  dart.addTypeTests(dialog_models.DialogRequest);
  dart.setLibraryUri(dialog_models.DialogRequest, "package:hostapp/src/model/dialog_models.dart");
  dart.setFieldSignature(dialog_models.DialogRequest, () => ({
    __proto__: dart.getFields(dialog_models.DialogRequest.__proto__),
    title: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    buttonTitle: dart.finalFieldType(core.String),
    cancelTitle: dart.finalFieldType(core.String)
  }));
  const fieldOne$ = dart.privateName(dialog_models, "DialogResponse.fieldOne");
  const fieldTwo$ = dart.privateName(dialog_models, "DialogResponse.fieldTwo");
  const confirmed$ = dart.privateName(dialog_models, "DialogResponse.confirmed");
  dialog_models.DialogResponse = class DialogResponse extends core.Object {
    get fieldOne() {
      return this[fieldOne$];
    }
    set fieldOne(value) {
      super.fieldOne = value;
    }
    get fieldTwo() {
      return this[fieldTwo$];
    }
    set fieldTwo(value) {
      super.fieldTwo = value;
    }
    get confirmed() {
      return this[confirmed$];
    }
    set confirmed(value) {
      super.confirmed = value;
    }
  };
  (dialog_models.DialogResponse.new = function(opts) {
    let fieldOne = opts && 'fieldOne' in opts ? opts.fieldOne : null;
    let fieldTwo = opts && 'fieldTwo' in opts ? opts.fieldTwo : null;
    let confirmed = opts && 'confirmed' in opts ? opts.confirmed : null;
    this[fieldOne$] = fieldOne;
    this[fieldTwo$] = fieldTwo;
    this[confirmed$] = confirmed;
    ;
  }).prototype = dialog_models.DialogResponse.prototype;
  dart.addTypeTests(dialog_models.DialogResponse);
  dart.setLibraryUri(dialog_models.DialogResponse, "package:hostapp/src/model/dialog_models.dart");
  dart.setFieldSignature(dialog_models.DialogResponse, () => ({
    __proto__: dart.getFields(dialog_models.DialogResponse.__proto__),
    fieldOne: dart.finalFieldType(core.String),
    fieldTwo: dart.finalFieldType(core.String),
    confirmed: dart.finalFieldType(core.bool)
  }));
  Dashboard.Dashboard = class Dashboard$ extends framework.StatefulWidget {
    createState() {
      return new Dashboard._DashboardState.new();
    }
  };
  (Dashboard.Dashboard.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    Dashboard.Dashboard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = Dashboard.Dashboard.prototype;
  dart.addTypeTests(Dashboard.Dashboard);
  dart.setMethodSignature(Dashboard.Dashboard, () => ({
    __proto__: dart.getMethods(Dashboard.Dashboard.__proto__),
    createState: dart.fnType(Dashboard._DashboardState, [])
  }));
  dart.setLibraryUri(Dashboard.Dashboard, "package:hostapp/src/screen/Dashboard.dart");
  const _selectedIndex = dart.privateName(Dashboard, "_selectedIndex");
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
  let C8;
  let C7;
  let C6;
  let C11;
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C17;
  let C16;
  let C15;
  let C20;
  let C19;
  let C18;
  let C23;
  let C22;
  let C21;
  let C26;
  let C27;
  let C28;
  let C29;
  let C25;
  let C24;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  let C36;
  let C35;
  let C37;
  let C40;
  let C39;
  let C38;
  let C43;
  let C42;
  let C41;
  Dashboard._DashboardState = class _DashboardState extends framework.State$(Dashboard.Dashboard) {
    build(context) {
      return new scaffold.Scaffold.new({resizeToAvoidBottomPadding: true, body: framework.Widget._check(this.switchBody()), bottomNavigationBar: new bottom_navy_bar.BottomNavyBar.new({selectedIndex: this[_selectedIndex], showElevation: true, onItemSelected: dart.fn(index => this.setState(dart.fn(() => {
            this[_selectedIndex] = index;
          }, VoidToNull())), intTovoid()), items: JSArrayOfBottomNavyBarItem().of([new bottom_navy_bar.BottomNavyBarItem.new({icon: new icon.Icon.new(font_awesome.FontAwesome.building, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), title: new text.Text.new("Properties", {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), activeColor: colors.Colors.red}), new bottom_navy_bar.BottomNavyBarItem.new({icon: new icon.Icon.new(icons.Icons.local_airport, {$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), title: new text.Text.new("Reservation", {$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), activeColor: colors.Colors.purpleAccent}), new bottom_navy_bar.BottomNavyBarItem.new({icon: new icon.Icon.new(icons.Icons.message, {$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), title: new text.Text.new("Messages", {$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), activeColor: colors.Colors.pink}), new bottom_navy_bar.BottomNavyBarItem.new({icon: new icon.Icon.new(icons.Icons.supervised_user_circle, {$creationLocationd_0dea112b090073317d4: C18 || CT.C18}), title: new text.Text.new("Profile", {$creationLocationd_0dea112b090073317d4: C21 || CT.C21}), activeColor: colors.Colors.blue})]), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
    }
    switchBody() {
      if (this[_selectedIndex] === 0) {
        return new ListOfProperty.ListOfProperty.new({$creationLocationd_0dea112b090073317d4: C35 || CT.C35});
      } else if (this[_selectedIndex] === 1) {
        return new FetchProperties.FetchProperties.new({$creationLocationd_0dea112b090073317d4: C37 || CT.C37});
      } else if (this[_selectedIndex] === 2) {
        return new text.Text.new("", {$creationLocationd_0dea112b090073317d4: C38 || CT.C38});
      } else if (this[_selectedIndex] === 3) {
        return new text.Text.new("", {$creationLocationd_0dea112b090073317d4: C41 || CT.C41});
      }
    }
  };
  (Dashboard._DashboardState.new = function() {
    this[_selectedIndex] = 0;
    Dashboard._DashboardState.__proto__.new.call(this);
    ;
  }).prototype = Dashboard._DashboardState.prototype;
  dart.addTypeTests(Dashboard._DashboardState);
  dart.setMethodSignature(Dashboard._DashboardState, () => ({
    __proto__: dart.getMethods(Dashboard._DashboardState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    switchBody: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(Dashboard._DashboardState, "package:hostapp/src/screen/Dashboard.dart");
  dart.setFieldSignature(Dashboard._DashboardState, () => ({
    __proto__: dart.getFields(Dashboard._DashboardState.__proto__),
    [_selectedIndex]: dart.fieldType(core.int)
  }));
  FetchProperties.FetchProperties = class FetchProperties$ extends framework.StatefulWidget {
    createState() {
      return new FetchProperties._FetchPropertiesState.new();
    }
  };
  (FetchProperties.FetchProperties.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    FetchProperties.FetchProperties.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = FetchProperties.FetchProperties.prototype;
  dart.addTypeTests(FetchProperties.FetchProperties);
  dart.setMethodSignature(FetchProperties.FetchProperties, () => ({
    __proto__: dart.getMethods(FetchProperties.FetchProperties.__proto__),
    createState: dart.fnType(FetchProperties._FetchPropertiesState, [])
  }));
  dart.setLibraryUri(FetchProperties.FetchProperties, "package:hostapp/src/screen/FetchProperties.dart");
  let C46;
  let C45;
  let C44;
  let C49;
  let C48;
  let C47;
  let C52;
  let C51;
  let C50;
  let C55;
  let C56;
  let C54;
  let C53;
  FetchProperties._FetchPropertiesState = class _FetchPropertiesState extends framework.State$(FetchProperties.FetchProperties) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({actions: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), body: new basic.Center.new({child: new text.Text.new("Fetch Proprtiees", {$creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53});
    }
  };
  (FetchProperties._FetchPropertiesState.new = function() {
    this.firestoreService = new FirestoreService.FirestoreService.new();
    FetchProperties._FetchPropertiesState.__proto__.new.call(this);
    ;
  }).prototype = FetchProperties._FetchPropertiesState.prototype;
  dart.addTypeTests(FetchProperties._FetchPropertiesState);
  dart.setMethodSignature(FetchProperties._FetchPropertiesState, () => ({
    __proto__: dart.getMethods(FetchProperties._FetchPropertiesState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(FetchProperties._FetchPropertiesState, "package:hostapp/src/screen/FetchProperties.dart");
  dart.setFieldSignature(FetchProperties._FetchPropertiesState, () => ({
    __proto__: dart.getFields(FetchProperties._FetchPropertiesState.__proto__),
    firestoreService: dart.fieldType(FirestoreService.FirestoreService)
  }));
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C65;
  let C62;
  let C61;
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
  let C82;
  let C83;
  let C84;
  let C81;
  let C80;
  let C87;
  let C88;
  let C86;
  let C85;
  let C91;
  let C92;
  let C90;
  let C89;
  let C95;
  let C94;
  let C93;
  let C98;
  let C99;
  let C100;
  let C101;
  let C97;
  let C96;
  const title$0 = dart.privateName(ExpansionInfo, "ExpansionInfo.title");
  const expand$ = dart.privateName(ExpansionInfo, "ExpansionInfo.expand");
  const children$ = dart.privateName(ExpansionInfo, "ExpansionInfo.children");
  ExpansionInfo.ExpansionInfo = class ExpansionInfo extends framework.StatelessWidget {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get expand() {
      return this[expand$];
    }
    set expand(value) {
      super.expand = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    build(context) {
      return new configurable_expansion_tile.ConfigurableExpansionTile.new({initiallyExpanded: this.expand, headerExpanded: new basic.Flexible.new({child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 20.0}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new text.Text.new(this.title, {style: new text_style.TextStyle.new({fontSize: 18.0, fontWeight: ui.FontWeight.w600}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), new icon.Icon.new(icons.Icons.keyboard_arrow_up, {color: theme.Theme.of(context).accentColor, size: 20.0, $creationLocationd_0dea112b090073317d4: C61 || CT.C61})]), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), header: new basic.Flexible.new({child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 17.0}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new text.Text.new(this.title, {style: new text_style.TextStyle.new({fontSize: 18.0, fontWeight: ui.FontWeight.w600}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new icon.Icon.new(icons.Icons.keyboard_arrow_right, {color: theme.Theme.of(context).accentColor, size: 20.0, $creationLocationd_0dea112b090073317d4: C80 || CT.C80})]), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), children: this.children, $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
    }
  };
  (ExpansionInfo.ExpansionInfo.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let expand = opts && 'expand' in opts ? opts.expand : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$0] = title;
    this[children$] = children;
    this[expand$] = expand;
    ExpansionInfo.ExpansionInfo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ExpansionInfo.ExpansionInfo.prototype;
  dart.addTypeTests(ExpansionInfo.ExpansionInfo);
  dart.setMethodSignature(ExpansionInfo.ExpansionInfo, () => ({
    __proto__: dart.getMethods(ExpansionInfo.ExpansionInfo.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ExpansionInfo.ExpansionInfo, "package:hostapp/src/widget/ExpansionInfo.dart");
  dart.setFieldSignature(ExpansionInfo.ExpansionInfo, () => ({
    __proto__: dart.getFields(ExpansionInfo.ExpansionInfo.__proto__),
    title: dart.finalFieldType(core.String),
    expand: dart.finalFieldType(core.bool),
    children: dart.finalFieldType(core.List$(framework.Widget))
  }));
  const _usersCollectionReference = dart.privateName(FirestoreService, "_usersCollectionReference");
  const _addPropertyCollectionReference = dart.privateName(FirestoreService, "_addPropertyCollectionReference");
  const _streamController = dart.privateName(FirestoreService, "_streamController");
  FirestoreService.FirestoreService = class FirestoreService extends core.Object {
    createUser(user) {
      return async.async(dart.dynamic, (function* createUser() {
        try {
          yield this[_usersCollectionReference].document(user.id).setData(user.toJson());
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (message_codec.PlatformException.is(e)) {
            return e.message;
          }
          return dart.toString(e);
        }
      }).bind(this));
    }
    getUser(uid) {
      return async.async(dart.dynamic, (function* getUser() {
        try {
          let userData = (yield this[_usersCollectionReference].document(uid).get());
          return new UserDetails.UserDetails.fromData(userData.data);
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (message_codec.PlatformException.is(e)) {
            return e.message;
          }
          return dart.toString(e);
        }
      }).bind(this));
    }
    addProperty(propertyModel) {
      return async.async(dart.dynamic, (function* addProperty() {
        try {
          yield this[_addPropertyCollectionReference].add(propertyModel.toJson());
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (message_codec.PlatformException.is(e)) {
            return e.message;
          }
          return dart.toString(e);
        }
      }).bind(this));
    }
    fetchProperties() {
      this[_addPropertyCollectionReference].snapshots().listen(dart.fn(event => {
        if (dart.test(event.documents[$isNotEmpty])) {
          let property = event.documents[$map](propertyModel.PropertyModel, dart.fn(e => new propertyModel.PropertyModel.fromJson(e.data), DocumentSnapshotToPropertyModel()))[$where](dart.fn(element => element.propertyName != null, PropertyModelTobool()))[$toList]();
          this[_streamController].add(property);
        }
      }, QuerySnapshotToNull()));
      return this[_streamController].stream;
    }
  };
  (FirestoreService.FirestoreService.new = function() {
    this[_usersCollectionReference] = cloud_firestore.Firestore.instance.collection("users");
    this[_addPropertyCollectionReference] = cloud_firestore.Firestore.instance.collection("DemoProperty");
    this[_streamController] = StreamControllerOfListOfPropertyModel().broadcast();
    ;
  }).prototype = FirestoreService.FirestoreService.prototype;
  dart.addTypeTests(FirestoreService.FirestoreService);
  dart.setMethodSignature(FirestoreService.FirestoreService, () => ({
    __proto__: dart.getMethods(FirestoreService.FirestoreService.__proto__),
    createUser: dart.fnType(async.Future, [UserDetails.UserDetails]),
    getUser: dart.fnType(async.Future, [core.String]),
    addProperty: dart.fnType(async.Future, [propertyModel.PropertyModel]),
    fetchProperties: dart.fnType(async.Stream, [])
  }));
  dart.setLibraryUri(FirestoreService.FirestoreService, "package:hostapp/src/service/FirestoreService.dart");
  dart.setFieldSignature(FirestoreService.FirestoreService, () => ({
    __proto__: dart.getFields(FirestoreService.FirestoreService.__proto__),
    [_usersCollectionReference]: dart.finalFieldType(cloud_firestore.CollectionReference),
    [_addPropertyCollectionReference]: dart.finalFieldType(cloud_firestore.CollectionReference),
    [_streamController]: dart.finalFieldType(async.StreamController$(core.List$(propertyModel.PropertyModel)))
  }));
  const userId$ = dart.privateName(propertyModel, "PropertyModel.userId");
  const propertyName$ = dart.privateName(propertyModel, "PropertyModel.propertyName");
  const propertyPhone$ = dart.privateName(propertyModel, "PropertyModel.propertyPhone");
  const propertyEmail$ = dart.privateName(propertyModel, "PropertyModel.propertyEmail");
  const propertyImage$ = dart.privateName(propertyModel, "PropertyModel.propertyImage");
  const propertyRules$ = dart.privateName(propertyModel, "PropertyModel.propertyRules");
  const propertyAddress$ = dart.privateName(propertyModel, "PropertyModel.propertyAddress");
  const imageFileName$ = dart.privateName(propertyModel, "PropertyModel.imageFileName");
  propertyModel.PropertyModel = class PropertyModel extends core.Object {
    get userId() {
      return this[userId$];
    }
    set userId(value) {
      this[userId$] = value;
    }
    get propertyName() {
      return this[propertyName$];
    }
    set propertyName(value) {
      this[propertyName$] = value;
    }
    get propertyPhone() {
      return this[propertyPhone$];
    }
    set propertyPhone(value) {
      this[propertyPhone$] = value;
    }
    get propertyEmail() {
      return this[propertyEmail$];
    }
    set propertyEmail(value) {
      this[propertyEmail$] = value;
    }
    get propertyImage() {
      return this[propertyImage$];
    }
    set propertyImage(value) {
      this[propertyImage$] = value;
    }
    get propertyRules() {
      return this[propertyRules$];
    }
    set propertyRules(value) {
      this[propertyRules$] = value;
    }
    get propertyAddress() {
      return this[propertyAddress$];
    }
    set propertyAddress(value) {
      this[propertyAddress$] = value;
    }
    get imageFileName() {
      return this[imageFileName$];
    }
    set imageFileName(value) {
      this[imageFileName$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("userId", this.userId);
      data[$_set]("property_name", this.propertyName);
      data[$_set]("property_phone", this.propertyPhone);
      data[$_set]("property_email", this.propertyEmail);
      data[$_set]("property_image", this.propertyImage);
      data[$_set]("property_rules", this.propertyRules);
      data[$_set]("property_address", this.propertyAddress);
      data[$_set]("imageFileName", this.imageFileName);
      return data;
    }
  };
  (propertyModel.PropertyModel.new = function(opts) {
    let userId = opts && 'userId' in opts ? opts.userId : null;
    let propertyName = opts && 'propertyName' in opts ? opts.propertyName : null;
    let propertyPhone = opts && 'propertyPhone' in opts ? opts.propertyPhone : null;
    let propertyEmail = opts && 'propertyEmail' in opts ? opts.propertyEmail : null;
    let propertyImage = opts && 'propertyImage' in opts ? opts.propertyImage : null;
    let propertyRules = opts && 'propertyRules' in opts ? opts.propertyRules : null;
    let propertyAddress = opts && 'propertyAddress' in opts ? opts.propertyAddress : null;
    let imageFileName = opts && 'imageFileName' in opts ? opts.imageFileName : null;
    this[userId$] = userId;
    this[propertyName$] = propertyName;
    this[propertyPhone$] = propertyPhone;
    this[propertyEmail$] = propertyEmail;
    this[propertyImage$] = propertyImage;
    this[propertyRules$] = propertyRules;
    this[propertyAddress$] = propertyAddress;
    this[imageFileName$] = imageFileName;
    ;
  }).prototype = propertyModel.PropertyModel.prototype;
  (propertyModel.PropertyModel.fromJson = function(json) {
    this[imageFileName$] = null;
    this[propertyAddress$] = null;
    this[propertyRules$] = null;
    this[propertyImage$] = null;
    this[propertyEmail$] = null;
    this[propertyPhone$] = null;
    this[propertyName$] = null;
    this[userId$] = null;
    this.userId = core.String._check(json[$_get]("userId"));
    this.propertyName = core.String._check(json[$_get]("property_name"));
    this.propertyPhone = core.String._check(json[$_get]("property_phone"));
    this.propertyEmail = core.String._check(json[$_get]("property_email"));
    this.propertyImage = core.String._check(json[$_get]("property_image"));
    this.propertyRules = core.String._check(json[$_get]("property_rules"));
    this.propertyAddress = core.String._check(json[$_get]("property_address"));
    this.imageFileName = core.String._check(json[$_get]("imageFileName"));
  }).prototype = propertyModel.PropertyModel.prototype;
  dart.addTypeTests(propertyModel.PropertyModel);
  dart.setMethodSignature(propertyModel.PropertyModel, () => ({
    __proto__: dart.getMethods(propertyModel.PropertyModel.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(propertyModel.PropertyModel, "package:hostapp/src/model/propertyModel.dart");
  dart.setFieldSignature(propertyModel.PropertyModel, () => ({
    __proto__: dart.getFields(propertyModel.PropertyModel.__proto__),
    userId: dart.fieldType(core.String),
    propertyName: dart.fieldType(core.String),
    propertyPhone: dart.fieldType(core.String),
    propertyEmail: dart.fieldType(core.String),
    propertyImage: dart.fieldType(core.String),
    propertyRules: dart.fieldType(core.String),
    propertyAddress: dart.fieldType(core.String),
    imageFileName: dart.fieldType(core.String)
  }));
  const id$ = dart.privateName(UserDetails, "UserDetails.id");
  const email$ = dart.privateName(UserDetails, "UserDetails.email");
  UserDetails.UserDetails = class UserDetails extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["id", this.id, "email", this.email]);
    }
  };
  (UserDetails.UserDetails.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let email = opts && 'email' in opts ? opts.email : null;
    this[id$] = id;
    this[email$] = email;
    ;
  }).prototype = UserDetails.UserDetails.prototype;
  (UserDetails.UserDetails.fromData = function(data) {
    this[id$] = core.String._check(data[$_get]("id"));
    this[email$] = core.String._check(data[$_get]("email"));
    ;
  }).prototype = UserDetails.UserDetails.prototype;
  dart.addTypeTests(UserDetails.UserDetails);
  dart.setMethodSignature(UserDetails.UserDetails, () => ({
    __proto__: dart.getMethods(UserDetails.UserDetails.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(UserDetails.UserDetails, "package:hostapp/src/model/UserDetails.dart");
  dart.setFieldSignature(UserDetails.UserDetails, () => ({
    __proto__: dart.getFields(UserDetails.UserDetails.__proto__),
    id: dart.finalFieldType(core.String),
    email: dart.finalFieldType(core.String)
  }));
  const customlogic = dart.privateName(locator, "MyInjection.customlogic");
  const authService = dart.privateName(locator, "MyInjection.authService");
  locator.MyInjection = class MyInjection extends core.Object {
    get customlogic() {
      return this[customlogic];
    }
    set customlogic(value) {
      this[customlogic] = value;
    }
    get authService() {
      return this[authService];
    }
    set authService(value) {
      this[authService] = value;
    }
  };
  (locator.MyInjection.new = function() {
    this[customlogic] = locator.locator.call(customFunctions.CustomFuntion);
    this[authService] = locator.locator.call(authentication.AuthService);
    ;
  }).prototype = locator.MyInjection.prototype;
  dart.addTypeTests(locator.MyInjection);
  dart.setLibraryUri(locator.MyInjection, "package:hostapp/src/locator.dart");
  dart.setFieldSignature(locator.MyInjection, () => ({
    __proto__: dart.getFields(locator.MyInjection.__proto__),
    customlogic: dart.fieldType(customFunctions.CustomFuntion),
    authService: dart.fieldType(authentication.AuthService)
  }));
  locator.setupLocator = function setupLocator() {
    locator.locator.registerLazySingleton(authentication.AuthService, dart.fn(() => new authentication.AuthService.new(), VoidToAuthService()));
    locator.locator.registerLazySingleton(customFunctions.CustomFuntion, dart.fn(() => new customFunctions.CustomFuntion.new(), VoidToCustomFuntion()));
    locator.locator.registerLazySingleton(navigation_service.NavigationService, dart.fn(() => new navigation_service.NavigationService.new(), VoidToNavigationService()));
    locator.locator.registerLazySingleton(dialog_service.DialogService, dart.fn(() => new dialog_service.DialogService.new(), VoidToDialogService()));
    locator.locator.registerLazySingleton(FirestoreService.FirestoreService, dart.fn(() => new FirestoreService.FirestoreService.new(), VoidToFirestoreService()));
    locator.locator.registerLazySingleton(CloudStorageService.CloudStorageService, dart.fn(() => new CloudStorageService.CloudStorageService.new(), VoidToCloudStorageService()));
  };
  dart.defineLazy(locator, {
    /*locator.locator*/get locator() {
      return get_it.GetIt.instance;
    },
    set locator(_) {}
  });
  let C104;
  let C103;
  let C102;
  let C107;
  let C106;
  let C105;
  let C110;
  let C109;
  let C108;
  let C113;
  let C112;
  let C111;
  let C116;
  let C115;
  let C114;
  let C119;
  let C120;
  let C118;
  let C117;
  let C123;
  let C124;
  let C125;
  let C122;
  let C121;
  let C128;
  let C129;
  let C127;
  let C126;
  let C132;
  let C131;
  let C130;
  let C135;
  let C136;
  let C137;
  let C134;
  let C133;
  let C140;
  let C139;
  let C138;
  const iv = dart.privateName(customFunctions, "CustomFuntion.iv");
  const encrypter = dart.privateName(customFunctions, "CustomFuntion.encrypter");
  const encrypted = dart.privateName(customFunctions, "CustomFuntion.encrypted");
  customFunctions.CustomFuntion = class CustomFuntion extends core.Object {
    get iv() {
      return this[iv];
    }
    set iv(value) {
      this[iv] = value;
    }
    get encrypter() {
      return this[encrypter];
    }
    set encrypter(value) {
      this[encrypter] = value;
    }
    get encrypted() {
      return this[encrypted];
    }
    set encrypted(value) {
      this[encrypted] = value;
    }
    snackBarMessage(opts) {
      let message = opts && 'message' in opts ? opts.message : null;
      return new snack_bar.SnackBar.new({content: new text.Text.new(message, {$creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C105 || CT.C105});
    }
    saveUserID(opts) {
      let userId = opts && 'userId' in opts ? opts.userId : null;
      return async.async(dart.dynamic, function* saveUserID() {
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        prefs.setString("userID", userId);
      });
    }
    getUserID() {
      return async.async(dart.dynamic, function* getUserID() {
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        let uid = prefs.getString("userID");
        return uid;
      });
    }
    dialog(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let title = opts && 'title' in opts ? opts.title : null;
      return dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new(core.String._check(title), {$creationLocationd_0dea112b090073317d4: C108 || CT.C108}), content: new text.Text.new(dart.toString(message), {$creationLocationd_0dea112b090073317d4: C111 || CT.C111}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Close", {$creationLocationd_0dea112b090073317d4: C114 || CT.C114}), onPressed: dart.fn(() => {
                navigator.Navigator.of(context).pop(core.Object);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C117 || CT.C117})]), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), BuildContextToAlertDialog())});
    }
    showToast(opts) {
      let message = opts && 'message' in opts ? opts.message : null;
      fluttertoast.Fluttertoast.showToast({msg: message, toastLength: fluttertoast.Toast.LENGTH_LONG, gravity: fluttertoast.ToastGravity.CENTER, timeInSecForIos: 1, backgroundColor: AppColor.AppColor.accents, textColor: colors.Colors.white, fontSize: 16.0});
    }
    loadingWidget() {
      return new basic.Center.new({child: new ripple.SpinKitRipple.new({color: AppColor.AppColor.colorassence, duration: new core.Duration.new({seconds: 1}), $creationLocationd_0dea112b090073317d4: C126 || CT.C126}), $creationLocationd_0dea112b090073317d4: C130 || CT.C130});
    }
    errorWidget(message) {
      return new basic.Center.new({child: new text.Text.new(dart.toString(message), {textAlign: ui.TextAlign.center, style: google_fonts.GoogleFonts.alikeAngular({textStyle: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.red})}), $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), $creationLocationd_0dea112b090073317d4: C138 || CT.C138});
    }
    util() {
      let key = new encrypt.Key.fromLength(32);
      this.iv = new encrypt.IV.fromLength(16);
      this.encrypter = new encrypt.Encrypter.new(new encrypt.AES.new(key));
    }
    encryptUserData(opts) {
      let plainText = opts && 'plainText' in opts ? opts.plainText : null;
      this.encrypted = this.encrypter.encrypt(plainText, {iv: this.iv});
      core.print(dart.toString(this.encrypted.base16));
    }
    deecryptUserData() {
      return async.async(dart.dynamic, (function* deecryptUserData() {
        let decrypted = this.encrypter.decrypt(this.encrypted, {iv: this.iv});
        core.print(decrypted);
        return decrypted;
      }).bind(this));
    }
  };
  (customFunctions.CustomFuntion.new = function() {
    this[iv] = null;
    this[encrypter] = null;
    this[encrypted] = null;
    ;
  }).prototype = customFunctions.CustomFuntion.prototype;
  dart.addTypeTests(customFunctions.CustomFuntion);
  dart.setMethodSignature(customFunctions.CustomFuntion, () => ({
    __proto__: dart.getMethods(customFunctions.CustomFuntion.__proto__),
    snackBarMessage: dart.fnType(dart.dynamic, [], {message: core.String}, {}),
    saveUserID: dart.fnType(dart.dynamic, [], {userId: core.String}, {}),
    getUserID: dart.fnType(dart.dynamic, []),
    dialog: dart.fnType(dart.dynamic, [], {context: framework.BuildContext, message: core.String, title: dart.dynamic}, {}),
    showToast: dart.fnType(dart.dynamic, [], {message: core.String}, {}),
    loadingWidget: dart.fnType(dart.dynamic, []),
    errorWidget: dart.fnType(framework.Widget, [core.String]),
    util: dart.fnType(dart.void, []),
    encryptUserData: dart.fnType(dart.dynamic, [], {plainText: core.String}, {}),
    deecryptUserData: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(customFunctions.CustomFuntion, "package:hostapp/src/util/customFunctions.dart");
  dart.setFieldSignature(customFunctions.CustomFuntion, () => ({
    __proto__: dart.getFields(customFunctions.CustomFuntion.__proto__),
    iv: dart.fieldType(encrypt.IV),
    encrypter: dart.fieldType(encrypt.Encrypter),
    encrypted: dart.fieldType(encrypt.Encrypted)
  }));
  constants.Constants = class Constants extends core.Object {};
  (constants.Constants.new = function() {
    ;
  }).prototype = constants.Constants.prototype;
  dart.addTypeTests(constants.Constants);
  dart.setLibraryUri(constants.Constants, "package:hostapp/src/util/constants.dart");
  dart.defineLazy(constants.Constants, {
    /*constants.Constants.projectUrl*/get projectUrl() {
      return "https://guestregistration-4140a.firebaseapp.com";
    },
    /*constants.Constants.errorPhone*/get errorPhone() {
      return "Phone is incorrect";
    },
    /*constants.Constants.errorEmail*/get errorEmail() {
      return "Email is incorect";
    },
    /*constants.Constants.enterPhone*/get enterPhone() {
      return "Please enter your phone";
    },
    /*constants.Constants.enterEmail*/get enterEmail() {
      return "Please enter your email";
    },
    /*constants.Constants.usePhone*/get usePhone() {
      return "Use phone instead";
    },
    /*constants.Constants.useEmail*/get useEmail() {
      return "Use email instead";
    },
    /*constants.Constants.submit*/get submit() {
      return "submit";
    },
    /*constants.Constants.labelPhone*/get labelPhone() {
      return "Phone";
    },
    /*constants.Constants.labelEmail*/get labelEmail() {
      return "Email";
    },
    /*constants.Constants.sentEmail*/get sentEmail() {
      return "Check your email for the confirmation link";
    },
    /*constants.Constants.error*/get error() {
      return "Please check the input field";
    },
    /*constants.Constants.verificationFailed*/get verificationFailed() {
      return "Verification failed";
    },
    /*constants.Constants.thankYou*/get thankYou() {
      return "Thank you for authenticating!";
    },
    /*constants.Constants.timeOutDuration*/get timeOutDuration() {
      return 90;
    }
  });
  dart.defineLazy(constants, {
    /*constants.passwordLessRoute*/get passwordLessRoute() {
      return "/passless";
    },
    /*constants.wrapperRoute*/get wrapperRoute() {
      return "/wrapper";
    },
    /*constants.dynamicLink*/get dynamicLink() {
      return "https://guestregistration-4140a.firebaseapp.com";
    },
    /*constants.sheref_Uid*/get sheref_Uid() {
      return "userID";
    },
    /*constants.dashboardRoute*/get dashboardRoute() {
      return "/dashboard";
    },
    /*constants.addPropertyRoute*/get addPropertyRoute() {
      return "/addProperty";
    },
    /*constants.signUpViewRoute*/get signUpViewRoute() {
      return "/signUp";
    },
    /*constants.signInViewRoute*/get signInViewRoute() {
      return "/signIn";
    }
  });
  const Color_value = dart.privateName(ui, "Color.value");
  let C141;
  let C142;
  let C143;
  let C144;
  let C145;
  let C146;
  let C147;
  let C148;
  let C149;
  let C150;
  let C151;
  let C152;
  let C153;
  let C154;
  let C155;
  let C156;
  let C157;
  let C158;
  let C159;
  let C160;
  let C161;
  let C162;
  let C163;
  let C164;
  let C165;
  let C166;
  let C167;
  let C168;
  let C169;
  let C170;
  let C171;
  const Gradient_transform = dart.privateName(gradient, "Gradient.transform");
  let C173;
  const Gradient_stops = dart.privateName(gradient, "Gradient.stops");
  let C174;
  const Gradient_colors = dart.privateName(gradient, "Gradient.colors");
  const _name = dart.privateName(ui, "_name");
  let C175;
  const LinearGradient_tileMode = dart.privateName(gradient, "LinearGradient.tileMode");
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C176;
  const LinearGradient_end = dart.privateName(gradient, "LinearGradient.end");
  let C177;
  const LinearGradient_begin = dart.privateName(gradient, "LinearGradient.begin");
  let C172;
  AppColor.AppColor = class AppColor extends core.Object {};
  (AppColor.AppColor.new = function() {
    ;
  }).prototype = AppColor.AppColor.prototype;
  dart.addTypeTests(AppColor.AppColor);
  dart.setLibraryUri(AppColor.AppColor, "package:hostapp/src/style/AppColor.dart");
  dart.defineLazy(AppColor.AppColor, {
    /*AppColor.AppColor.rimary*/get rimary() {
      return C141 || CT.C141;
    },
    /*AppColor.AppColor.teal*/get teal() {
      return C142 || CT.C142;
    },
    /*AppColor.AppColor.accents*/get accents() {
      return C143 || CT.C143;
    },
    /*AppColor.AppColor.CircleYellow*/get CircleYellow() {
      return C144 || CT.C144;
    },
    /*AppColor.AppColor.deep00*/get deep00() {
      return C145 || CT.C145;
    },
    /*AppColor.AppColor.colorDark*/get colorDark() {
      return C142 || CT.C142;
    },
    /*AppColor.AppColor.primary*/get primary() {
      return C146 || CT.C146;
    },
    /*AppColor.AppColor.colorassence*/get colorassence() {
      return C142 || CT.C142;
    },
    /*AppColor.AppColor.primaryLight*/get primaryLight() {
      return C145 || CT.C145;
    },
    /*AppColor.AppColor.colordark*/get colordark() {
      return C147 || CT.C147;
    },
    /*AppColor.AppColor.secondary*/get secondary() {
      return C148 || CT.C148;
    },
    /*AppColor.AppColor.secondaryDeep*/get secondaryDeep() {
      return C149 || CT.C149;
    },
    /*AppColor.AppColor.erroColor*/get erroColor() {
      return C150 || CT.C150;
    },
    /*AppColor.AppColor.b*/get b() {
      return C151 || CT.C151;
    },
    /*AppColor.AppColor.white*/get white() {
      return C152 || CT.C152;
    },
    /*AppColor.AppColor.productBg1*/get productBg1() {
      return C145 || CT.C145;
    },
    /*AppColor.AppColor.productBg2*/get productBg2() {
      return C153 || CT.C153;
    },
    /*AppColor.AppColor.kTeal400*/get kTeal400() {
      return C146 || CT.C146;
    },
    /*AppColor.AppColor.kGrey900*/get kGrey900() {
      return C154 || CT.C154;
    },
    /*AppColor.AppColor.kGrey600*/get kGrey600() {
      return C155 || CT.C155;
    },
    /*AppColor.AppColor.kGrey200*/get kGrey200() {
      return C156 || CT.C156;
    },
    /*AppColor.AppColor.kGrey400*/get kGrey400() {
      return C157 || CT.C157;
    },
    /*AppColor.AppColor.kErrorRed*/get kErrorRed() {
      return C158 || CT.C158;
    },
    /*AppColor.AppColor.white10*/get white10() {
      return C159 || CT.C159;
    },
    /*AppColor.AppColor.black*/get black() {
      return colors.Colors.black;
    },
    set black(_) {},
    /*AppColor.AppColor.launchColor1*/get launchColor1() {
      return C160 || CT.C160;
    },
    /*AppColor.AppColor.launchColor2*/get launchColor2() {
      return C161 || CT.C161;
    },
    /*AppColor.AppColor.launchColor3*/get launchColor3() {
      return C162 || CT.C162;
    },
    /*AppColor.AppColor.textColor*/get textColor() {
      return C163 || CT.C163;
    },
    /*AppColor.AppColor.surface*/get surface() {
      return C164 || CT.C164;
    },
    /*AppColor.AppColor.primaryDarkColor*/get primaryDarkColor() {
      return C165 || CT.C165;
    },
    /*AppColor.AppColor.d*/get d() {
      return C166 || CT.C166;
    },
    /*AppColor.AppColor.con*/get con() {
      return C167 || CT.C167;
    },
    /*AppColor.AppColor.notWhite*/get notWhite() {
      return C163 || CT.C163;
    },
    /*AppColor.AppColor.nearlyWhite*/get nearlyWhite() {
      return C168 || CT.C168;
    },
    /*AppColor.AppColor.nearlyBlack*/get nearlyBlack() {
      return C169 || CT.C169;
    },
    /*AppColor.AppColor.dark_grey*/get dark_grey() {
      return C170 || CT.C170;
    },
    /*AppColor.AppColor.spacer*/get spacer() {
      return C171 || CT.C171;
    },
    /*AppColor.AppColor.loginGradientEnd*/get loginGradientEnd() {
      return C166 || CT.C166;
    },
    /*AppColor.AppColor.primaryGradient*/get primaryGradient() {
      return C172 || CT.C172;
    },
    /*AppColor.AppColor.SecondaryGradient*/get SecondaryGradient() {
      return C172 || CT.C172;
    }
  });
  const _navigationKey = dart.privateName(navigation_service, "_navigationKey");
  navigation_service.NavigationService = class NavigationService extends core.Object {
    get navigationKey() {
      return this[_navigationKey];
    }
    pop() {
      return this[_navigationKey].currentState.pop(core.Object);
    }
    navigateTo(routeName, opts) {
      let $arguments = opts && 'arguments' in opts ? opts.arguments : null;
      return this[_navigationKey].currentState.pushNamed(core.Object, routeName, {arguments: $arguments});
    }
  };
  (navigation_service.NavigationService.new = function() {
    this[_navigationKey] = GlobalKeyOfNavigatorState().new();
    ;
  }).prototype = navigation_service.NavigationService.prototype;
  dart.addTypeTests(navigation_service.NavigationService);
  dart.setMethodSignature(navigation_service.NavigationService, () => ({
    __proto__: dart.getMethods(navigation_service.NavigationService.__proto__),
    pop: dart.fnType(core.bool, []),
    navigateTo: dart.fnType(async.Future, [core.String], {arguments: dart.dynamic}, {})
  }));
  dart.setGetterSignature(navigation_service.NavigationService, () => ({
    __proto__: dart.getGetters(navigation_service.NavigationService.__proto__),
    navigationKey: framework.GlobalKey$(navigator.NavigatorState)
  }));
  dart.setLibraryUri(navigation_service.NavigationService, "package:hostapp/src/service/navigation_service.dart");
  dart.setFieldSignature(navigation_service.NavigationService, () => ({
    __proto__: dart.getFields(navigation_service.NavigationService.__proto__),
    [_navigationKey]: dart.fieldType(framework.GlobalKey$(navigator.NavigatorState))
  }));
  const _auth = dart.privateName(authentication, "_auth");
  const _firebaseAuth = dart.privateName(authentication, "_firebaseAuth");
  const _firestoreService = dart.privateName(authentication, "_firestoreService");
  const _currentUser = dart.privateName(authentication, "_currentUser");
  const customlogic$ = dart.privateName(authentication, "AuthService.customlogic");
  authentication.AuthService = class AuthService extends core.Object {
    get customlogic() {
      return this[customlogic$];
    }
    set customlogic(value) {
      this[customlogic$] = value;
    }
    get currentUser() {
      return this[_currentUser];
    }
    loginWithEmail(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let password = opts && 'password' in opts ? opts.password : null;
      return async.async(dart.dynamic, (function* loginWithEmail() {
        try {
          let authResult = (yield this[_firebaseAuth].signInWithEmailAndPassword({email: email, password: password}));
          return authResult.user != null;
        } catch (e$) {
          let e = dart.getThrown(e$);
          return dart.dload(e, 'message');
        }
      }).bind(this));
    }
    signUpWithEmail(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let password = opts && 'password' in opts ? opts.password : null;
      return async.async(dart.dynamic, (function* signUpWithEmail() {
        try {
          let authResult = (yield this[_firebaseAuth].createUserWithEmailAndPassword({email: email, password: password}));
          this[_currentUser] = new UserDetails.UserDetails.new({id: authResult.user.uid, email: email});
          yield this[_firestoreService].createUser(this[_currentUser]);
          return authResult.user != null;
        } catch (e$) {
          let e = dart.getThrown(e$);
          return dart.dload(e, 'message');
        }
      }).bind(this));
    }
    signOut() {
      return async.async(dart.dynamic, (function* signOut() {
        try {
          return yield this[_auth].signOut();
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print("******signInAnonymous ERROR " + dart.str(dart.toString(e)));
          return null;
        }
      }).bind(this));
    }
  };
  (authentication.AuthService.new = function() {
    this[_auth] = firebase_auth.FirebaseAuth.instance;
    this[customlogic$] = locator.locator.call(customFunctions.CustomFuntion);
    this[_firebaseAuth] = firebase_auth.FirebaseAuth.instance;
    this[_firestoreService] = locator.locator.call(FirestoreService.FirestoreService);
    this[_currentUser] = new UserDetails.UserDetails.new({id: "g9QdJTWvWlXJYVuUlVyNNsSFYVf2", email: "horlaz229@gmail.com"});
    ;
  }).prototype = authentication.AuthService.prototype;
  dart.addTypeTests(authentication.AuthService);
  dart.setMethodSignature(authentication.AuthService, () => ({
    __proto__: dart.getMethods(authentication.AuthService.__proto__),
    loginWithEmail: dart.fnType(async.Future, [], {email: core.String, password: core.String}, {}),
    signUpWithEmail: dart.fnType(async.Future, [], {email: core.String, password: core.String}, {}),
    signOut: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(authentication.AuthService, () => ({
    __proto__: dart.getGetters(authentication.AuthService.__proto__),
    currentUser: UserDetails.UserDetails
  }));
  dart.setLibraryUri(authentication.AuthService, "package:hostapp/src/service/authentication.dart");
  dart.setFieldSignature(authentication.AuthService, () => ({
    __proto__: dart.getFields(authentication.AuthService.__proto__),
    [_auth]: dart.finalFieldType(firebase_auth.FirebaseAuth),
    customlogic: dart.fieldType(customFunctions.CustomFuntion),
    [_firebaseAuth]: dart.finalFieldType(firebase_auth.FirebaseAuth),
    [_firestoreService]: dart.finalFieldType(FirestoreService.FirestoreService),
    [_currentUser]: dart.fieldType(UserDetails.UserDetails)
  }));
  CloudStorageService.CloudStorageService = class CloudStorageService$ extends core.Object {
    uploadImage(opts) {
      let imageToUpload = opts && 'imageToUpload' in opts ? opts.imageToUpload : null;
      let title = opts && 'title' in opts ? opts.title : null;
      return async.async(CloudStorageService.CloudStorageResult, function* uploadImage() {
        let firebaseStorageRef = firebase_storage.FirebaseStorage.instance.ref().child("DemoProperties");
        let imageFileName = dart.notNull(title) + dart.toString(new core.DateTime.now().millisecondsSinceEpoch);
        let uploadTask = firebaseStorageRef.child(imageFileName).putFile(imageToUpload);
        let storageSnapshot = (yield uploadTask.onComplete);
        let downloadUrl = (yield storageSnapshot.ref.getDownloadURL());
        if (dart.test(uploadTask.isComplete)) {
          let url = dart.toString(downloadUrl);
          return new CloudStorageService.CloudStorageResult.new({imageUrl: url, imageFileName: imageFileName});
        }
        return null;
      });
    }
  };
  (CloudStorageService.CloudStorageService.new = function() {
    ;
  }).prototype = CloudStorageService.CloudStorageService.prototype;
  dart.addTypeTests(CloudStorageService.CloudStorageService);
  dart.setMethodSignature(CloudStorageService.CloudStorageService, () => ({
    __proto__: dart.getMethods(CloudStorageService.CloudStorageService.__proto__),
    uploadImage: dart.fnType(async.Future$(CloudStorageService.CloudStorageResult), [], {imageToUpload: io.File, title: core.String}, {})
  }));
  dart.setLibraryUri(CloudStorageService.CloudStorageService, "package:hostapp/src/service/CloudStorageService.dart");
  const imageUrl$ = dart.privateName(CloudStorageService, "CloudStorageResult.imageUrl");
  const imageFileName$0 = dart.privateName(CloudStorageService, "CloudStorageResult.imageFileName");
  CloudStorageService.CloudStorageResult = class CloudStorageResult extends core.Object {
    get imageUrl() {
      return this[imageUrl$];
    }
    set imageUrl(value) {
      super.imageUrl = value;
    }
    get imageFileName() {
      return this[imageFileName$0];
    }
    set imageFileName(value) {
      super.imageFileName = value;
    }
  };
  (CloudStorageService.CloudStorageResult.new = function(opts) {
    let imageUrl = opts && 'imageUrl' in opts ? opts.imageUrl : null;
    let imageFileName = opts && 'imageFileName' in opts ? opts.imageFileName : null;
    this[imageUrl$] = imageUrl;
    this[imageFileName$0] = imageFileName;
    ;
  }).prototype = CloudStorageService.CloudStorageResult.prototype;
  dart.addTypeTests(CloudStorageService.CloudStorageResult);
  dart.setLibraryUri(CloudStorageService.CloudStorageResult, "package:hostapp/src/service/CloudStorageService.dart");
  dart.setFieldSignature(CloudStorageService.CloudStorageResult, () => ({
    __proto__: dart.getFields(CloudStorageService.CloudStorageResult.__proto__),
    imageUrl: dart.finalFieldType(core.String),
    imageFileName: dart.finalFieldType(core.String)
  }));
  ListOfProperty.ListOfProperty = class ListOfProperty$ extends framework.StatefulWidget {
    createState() {
      return new ListOfProperty._ListOfPropertyState.new();
    }
  };
  (ListOfProperty.ListOfProperty.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    ListOfProperty.ListOfProperty.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ListOfProperty.ListOfProperty.prototype;
  dart.addTypeTests(ListOfProperty.ListOfProperty);
  dart.setMethodSignature(ListOfProperty.ListOfProperty, () => ({
    __proto__: dart.getMethods(ListOfProperty.ListOfProperty.__proto__),
    createState: dart.fnType(ListOfProperty._ListOfPropertyState, [])
  }));
  dart.setLibraryUri(ListOfProperty.ListOfProperty, "package:hostapp/src/screen/ListOfProperty.dart");
  let C180;
  let C179;
  let C178;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C181;
  let C184;
  let C185;
  let C186;
  let C183;
  let C182;
  let C189;
  let C190;
  let C188;
  let C187;
  let C193;
  let C194;
  let C192;
  let C191;
  let C197;
  let C198;
  let C199;
  let C200;
  let C196;
  let C195;
  let C201;
  let C204;
  let C203;
  let C202;
  let C207;
  let C206;
  let C205;
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
  let C224;
  let C225;
  let C221;
  let C220;
  let C228;
  let C229;
  let C230;
  let C231;
  let C227;
  let C226;
  let C234;
  let C233;
  let C232;
  let C237;
  let C238;
  let C236;
  let C235;
  let C241;
  let C242;
  let C240;
  let C239;
  let C245;
  let C246;
  let C244;
  let C243;
  let C249;
  let C248;
  let C247;
  let C252;
  let C251;
  let C250;
  let C255;
  let C256;
  let C257;
  let C258;
  let C254;
  let C253;
  let C261;
  let C260;
  let C259;
  let C264;
  let C263;
  let C262;
  let C267;
  let C266;
  let C265;
  let C270;
  let C269;
  let C268;
  let C273;
  let C274;
  let C272;
  let C271;
  let C277;
  let C278;
  let C279;
  let C276;
  let C275;
  let C282;
  let C283;
  let C284;
  let C281;
  let C280;
  ListOfProperty._ListOfPropertyState = class _ListOfPropertyState extends framework.State$(ListOfProperty.ListOfProperty) {
    initState() {
      super.initState();
    }
    build(context) {
      return new (ViewModelProviderOfListOfPropertyViewModel()).withConsumer({viewModel: new ListOfPropertyViewModel.ListOfPropertyViewModel.new(), onModelReady: dart.fn(model => model.initialize(), ListOfPropertyViewModelTovoid()), builder: dart.fn((context, model, child) => new scaffold.Scaffold.new({resizeToAvoidBottomPadding: true, appBar: new app_bar.AppBar.new({centerTitle: true, backgroundColor: AppColor.AppColor.white, title: new text.Text.new("My Properties", {$creationLocationd_0dea112b090073317d4: C178 || CT.C178}), actions: JSArrayOfWidget().of([new basic.Padding.new({padding: C181 || CT.C181, child: new gesture_detector.GestureDetector.new({child: new icon.Icon.new(font_awesome.FontAwesome.sign_out, {size: 30.0, color: colors.Colors.red, $creationLocationd_0dea112b090073317d4: C182 || CT.C182}), onTap: dart.fn(() => {
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C187 || CT.C187}), $creationLocationd_0dea112b090073317d4: C191 || CT.C191})]), $creationLocationd_0dea112b090073317d4: C195 || CT.C195}), body: new basic.Padding.new({padding: C201 || CT.C201, child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: C201 || CT.C201, child: new gesture_detector.GestureDetector.new({child: new basic.Center.new({child: new container.Container.new({height: 60.0, width: 1 / 0, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(10.0), shape: box_border.BoxShape.rectangle, color: colors.Colors.red}), child: new material.Material.new({color: colors.Colors.white, elevation: 20.0, shadowColor: AppColor.AppColor.primary, child: new basic.Padding.new({padding: C201 || CT.C201, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.add_circle, {$creationLocationd_0dea112b090073317d4: C202 || CT.C202}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C205 || CT.C205}), new text.Text.new("Add a new Property", {style: AppTextStyle.AppTextStyle.subTitle(context), $creationLocationd_0dea112b090073317d4: C208 || CT.C208})]), $creationLocationd_0dea112b090073317d4: C212 || CT.C212}), $creationLocationd_0dea112b090073317d4: C216 || CT.C216}), $creationLocationd_0dea112b090073317d4: C220 || CT.C220}), $creationLocationd_0dea112b090073317d4: C226 || CT.C226}), $creationLocationd_0dea112b090073317d4: C232 || CT.C232}), onTap: dart.fn(() => {
                      model.addproperty();
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C235 || CT.C235}), $creationLocationd_0dea112b090073317d4: C239 || CT.C239}), new basic.Expanded.new({child: model.properties != null ? new scroll_view.ListView.builder({itemCount: model.properties[$length], shrinkWrap: true, scrollDirection: basic_types.Axis.vertical, itemBuilder: dart.fn((context, index) => {
                      if (model.properties[$length] === 0) {
                        return new basic.Center.new({child: new text.Text.new("No Property Available", {style: AppTextStyle.AppTextStyle.error(context, colors.Colors.redAccent), $creationLocationd_0dea112b090073317d4: C243 || CT.C243}), $creationLocationd_0dea112b090073317d4: C247 || CT.C247});
                      }
                      return new PropertyWidget.PropertyWidget.new({propertyModel: model.properties[$_get](index), $creationLocationd_0dea112b090073317d4: C250 || CT.C250});
                    }, BuildContextAndintToWidget()), $creationLocationd_0dea112b090073317d4: C253 || CT.C253}) : new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({valueColor: new (AlwaysStoppedAnimationOfColor()).new(AppColor.AppColor.primary), $creationLocationd_0dea112b090073317d4: C259 || CT.C259}), $creationLocationd_0dea112b090073317d4: C262 || CT.C262}), $creationLocationd_0dea112b090073317d4: C265 || CT.C265})]), $creationLocationd_0dea112b090073317d4: C268 || CT.C268}), $creationLocationd_0dea112b090073317d4: C271 || CT.C271}), $creationLocationd_0dea112b090073317d4: C275 || CT.C275}), BuildContextAndListOfPropertyViewModelAndWidgetToScaffold()), $creationLocationd_0dea112b090073317d4: C280 || CT.C280});
    }
  };
  (ListOfProperty._ListOfPropertyState.new = function() {
    ListOfProperty._ListOfPropertyState.__proto__.new.call(this);
    ;
  }).prototype = ListOfProperty._ListOfPropertyState.prototype;
  dart.addTypeTests(ListOfProperty._ListOfPropertyState);
  dart.setMethodSignature(ListOfProperty._ListOfPropertyState, () => ({
    __proto__: dart.getMethods(ListOfProperty._ListOfPropertyState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ListOfProperty._ListOfPropertyState, "package:hostapp/src/screen/ListOfProperty.dart");
  const _authService = dart.privateName(ListOfPropertyViewModel, "_authService");
  const _navigationService = dart.privateName(ListOfPropertyViewModel, "_navigationService");
  const _firestoreService$ = dart.privateName(ListOfPropertyViewModel, "_firestoreService");
  const _propertlist = dart.privateName(ListOfPropertyViewModel, "_propertlist");
  const _authService$ = dart.privateName(base_model, "_authService");
  const _busy = dart.privateName(base_model, "_busy");
  base_model.BaseModel = class BaseModel extends change_notifier.ChangeNotifier {
    get currentUser() {
      return this[_authService$].currentUser;
    }
    get busy() {
      return this[_busy];
    }
    setBusy(value) {
      this[_busy] = value;
      this.notifyListeners();
    }
  };
  (base_model.BaseModel.new = function() {
    this[_authService$] = locator.locator.call(authentication.AuthService);
    this[_busy] = false;
    base_model.BaseModel.__proto__.new.call(this);
    ;
  }).prototype = base_model.BaseModel.prototype;
  dart.addTypeTests(base_model.BaseModel);
  dart.setMethodSignature(base_model.BaseModel, () => ({
    __proto__: dart.getMethods(base_model.BaseModel.__proto__),
    setBusy: dart.fnType(dart.void, [core.bool])
  }));
  dart.setGetterSignature(base_model.BaseModel, () => ({
    __proto__: dart.getGetters(base_model.BaseModel.__proto__),
    currentUser: UserDetails.UserDetails,
    busy: core.bool
  }));
  dart.setLibraryUri(base_model.BaseModel, "package:hostapp/src/viewmodels/base_model.dart");
  dart.setFieldSignature(base_model.BaseModel, () => ({
    __proto__: dart.getFields(base_model.BaseModel.__proto__),
    [_authService$]: dart.finalFieldType(authentication.AuthService),
    [_busy]: dart.fieldType(core.bool)
  }));
  ListOfPropertyViewModel.ListOfPropertyViewModel = class ListOfPropertyViewModel extends base_model.BaseModel {
    get properties() {
      return this[_propertlist];
    }
    initialize() {
      this.setBusy(true);
      core.print("Am Here");
      this[_firestoreService$].fetchProperties().listen(dart.fn(propertyData => {
        let updatedData = ListOfPropertyModel()._check(propertyData);
        if (updatedData != null && dart.notNull(updatedData[$length]) > 0) {
          this[_propertlist] = updatedData;
          this.notifyListeners();
        }
        this.setBusy(false);
        core.print("End");
      }, dynamicToNull()));
    }
    addproperty() {
      this[_navigationService].navigateTo("/addProperty");
    }
  };
  (ListOfPropertyViewModel.ListOfPropertyViewModel.new = function() {
    this[_authService] = locator.locator.call(authentication.AuthService);
    this[_navigationService] = locator.locator.call(navigation_service.NavigationService);
    this[_firestoreService$] = locator.locator.call(FirestoreService.FirestoreService);
    this[_propertlist] = null;
    ListOfPropertyViewModel.ListOfPropertyViewModel.__proto__.new.call(this);
    ;
  }).prototype = ListOfPropertyViewModel.ListOfPropertyViewModel.prototype;
  dart.addTypeTests(ListOfPropertyViewModel.ListOfPropertyViewModel);
  dart.setMethodSignature(ListOfPropertyViewModel.ListOfPropertyViewModel, () => ({
    __proto__: dart.getMethods(ListOfPropertyViewModel.ListOfPropertyViewModel.__proto__),
    initialize: dart.fnType(dart.void, []),
    addproperty: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(ListOfPropertyViewModel.ListOfPropertyViewModel, () => ({
    __proto__: dart.getGetters(ListOfPropertyViewModel.ListOfPropertyViewModel.__proto__),
    properties: core.List$(propertyModel.PropertyModel)
  }));
  dart.setLibraryUri(ListOfPropertyViewModel.ListOfPropertyViewModel, "package:hostapp/src/viewmodels/ListOfPropertyViewModel.dart");
  dart.setFieldSignature(ListOfPropertyViewModel.ListOfPropertyViewModel, () => ({
    __proto__: dart.getFields(ListOfPropertyViewModel.ListOfPropertyViewModel.__proto__),
    [_authService]: dart.finalFieldType(authentication.AuthService),
    [_navigationService]: dart.finalFieldType(navigation_service.NavigationService),
    [_firestoreService$]: dart.finalFieldType(FirestoreService.FirestoreService),
    [_propertlist]: dart.fieldType(core.List$(propertyModel.PropertyModel))
  }));
  let C287;
  let C286;
  let C285;
  let C290;
  let C289;
  let C288;
  let C293;
  let C292;
  let C291;
  let C296;
  let C297;
  let C298;
  let C295;
  let C294;
  let C301;
  let C300;
  let C299;
  let C304;
  let C305;
  let C306;
  let C303;
  let C302;
  let C309;
  let C310;
  let C308;
  let C307;
  let C313;
  let C314;
  let C312;
  let C311;
  let C317;
  let C318;
  let C319;
  let C316;
  let C315;
  let C322;
  let C321;
  let C320;
  let C325;
  let C324;
  let C323;
  let C328;
  let C329;
  let C327;
  let C326;
  let C332;
  let C333;
  let C334;
  let C335;
  let C331;
  let C330;
  let C338;
  let C337;
  let C336;
  const propertyModel$ = dart.privateName(PropertyWidget, "PropertyWidget.propertyModel");
  const onDeleteItem$ = dart.privateName(PropertyWidget, "PropertyWidget.onDeleteItem");
  PropertyWidget.PropertyWidget = class PropertyWidget extends framework.StatelessWidget {
    get propertyModel() {
      return this[propertyModel$];
    }
    set propertyModel(value) {
      super.propertyModel = value;
    }
    get onDeleteItem() {
      return this[onDeleteItem$];
    }
    set onDeleteItem(value) {
      super.onDeleteItem = value;
    }
    build(context) {
      return new container.Container.new({child: new list_tile.ListTile.new({trailing: new basic.Column.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.menu, {$creationLocationd_0dea112b090073317d4: C285 || CT.C285}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C288 || CT.C288}), new container.Container.new({child: new circle_avatar.CircleAvatar.new({backgroundColor: colors.Colors.green, $creationLocationd_0dea112b090073317d4: C291 || CT.C291}), height: 10.0, width: 10.0, $creationLocationd_0dea112b090073317d4: C294 || CT.C294})]), $creationLocationd_0dea112b090073317d4: C299 || CT.C299}), leading: new image.Image.asset(AppImage.AppImage.icode, {height: 50.0, width: 50.0, $creationLocationd_0dea112b090073317d4: C302 || CT.C302}), title: new text.Text.new(this.propertyModel.propertyName, {style: AppTextStyle.AppTextStyle.headerSmall(context), $creationLocationd_0dea112b090073317d4: C307 || CT.C307}), subtitle: new basic.Padding.new({padding: C201 || CT.C201, child: new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.location_on, {color: colors.Colors.grey, $creationLocationd_0dea112b090073317d4: C311 || CT.C311}), new basic.Flexible.new({child: new text.Text.new(this.propertyModel.propertyAddress, {style: AppTextStyle.AppTextStyle.headerSmall2(context), overflow: paragraph.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C315 || CT.C315}), $creationLocationd_0dea112b090073317d4: C320 || CT.C320})]), $creationLocationd_0dea112b090073317d4: C323 || CT.C323}), $creationLocationd_0dea112b090073317d4: C326 || CT.C326}), $creationLocationd_0dea112b090073317d4: C330 || CT.C330}), $creationLocationd_0dea112b090073317d4: C336 || CT.C336});
    }
  };
  (PropertyWidget.PropertyWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let propertyModel = opts && 'propertyModel' in opts ? opts.propertyModel : null;
    let onDeleteItem = opts && 'onDeleteItem' in opts ? opts.onDeleteItem : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[propertyModel$] = propertyModel;
    this[onDeleteItem$] = onDeleteItem;
    PropertyWidget.PropertyWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = PropertyWidget.PropertyWidget.prototype;
  dart.addTypeTests(PropertyWidget.PropertyWidget);
  dart.setMethodSignature(PropertyWidget.PropertyWidget, () => ({
    __proto__: dart.getMethods(PropertyWidget.PropertyWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(PropertyWidget.PropertyWidget, "package:hostapp/src/widget/PropertyWidget.dart");
  dart.setFieldSignature(PropertyWidget.PropertyWidget, () => ({
    __proto__: dart.getFields(PropertyWidget.PropertyWidget.__proto__),
    propertyModel: dart.finalFieldType(propertyModel.PropertyModel),
    onDeleteItem: dart.finalFieldType(core.Function)
  }));
  const _authService$0 = dart.privateName(AddProperty_view_mode, "_authService");
  const _dialogService = dart.privateName(AddProperty_view_mode, "_dialogService");
  const _navigationService$ = dart.privateName(AddProperty_view_mode, "_navigationService");
  const _firestoreService$0 = dart.privateName(AddProperty_view_mode, "_firestoreService");
  const _cloudStorageService = dart.privateName(AddProperty_view_mode, "_cloudStorageService");
  const _image = dart.privateName(AddProperty_view_mode, "_image");
  const _propertyName = dart.privateName(AddProperty_view_mode, "_propertyName");
  const _address = dart.privateName(AddProperty_view_mode, "_address");
  const _contactEmail = dart.privateName(AddProperty_view_mode, "_contactEmail");
  const _phoneN = dart.privateName(AddProperty_view_mode, "_phoneN");
  const pageIndex = dart.privateName(AddProperty_view_mode, "AddPropertyViewModel.pageIndex");
  const storageResult = dart.privateName(AddProperty_view_mode, "AddPropertyViewModel.storageResult");
  AddProperty_view_mode.AddPropertyViewModel = class AddPropertyViewModel extends base_model.BaseModel {
    get pageIndex() {
      return this[pageIndex];
    }
    set pageIndex(value) {
      this[pageIndex] = value;
    }
    get storageResult() {
      return this[storageResult];
    }
    set storageResult(value) {
      this[storageResult] = value;
    }
    get selectedImage() {
      return this[_image];
    }
    initialize() {
      this.pageIndex = 1;
      this.notifyListeners();
    }
    nextPage() {
      if (dart.notNull(this.pageIndex) > 2) {
        this.pageIndex = 2;
        this.notifyListeners();
      } else {
        this.pageIndex = dart.notNull(this.pageIndex) + 1;
        this.notifyListeners();
      }
    }
    goback() {
      if (this.pageIndex === -1) {
        this.pageIndex = 1;
        this.notifyListeners();
      } else {
        this.pageIndex = dart.notNull(this.pageIndex) - 1;
        this.notifyListeners();
      }
    }
    movetoScreen2(opts) {
      let propertyName = opts && 'propertyName' in opts ? opts.propertyName : null;
      let address = opts && 'address' in opts ? opts.address : null;
      let contactEmail = opts && 'contactEmail' in opts ? opts.contactEmail : null;
      let phoneN = opts && 'phoneN' in opts ? opts.phoneN : null;
      if (propertyName.length === 0 || address.length === 0 || contactEmail.length === 0 || phoneN.length === 0) {
        this[_dialogService].showDialog({title: "Error!", description: "Empty field Detected"});
      } else {
        this[_propertyName] = propertyName;
        this[_address] = address;
        this[_contactEmail] = contactEmail;
        this[_phoneN] = phoneN;
        this.nextPage();
      }
    }
    pickImage() {
      return async.async(dart.dynamic, (function* pickImage() {
        let pickedImage = (yield image_picker.ImagePicker.pickImage({source: image_picker.ImageSource.gallery}));
        this[_image] = pickedImage;
        this.notifyListeners();
      }).bind(this));
    }
    lastScreenbutton(opts) {
      let propertyName = opts && 'propertyName' in opts ? opts.propertyName : null;
      let address = opts && 'address' in opts ? opts.address : null;
      let contactEmail = opts && 'contactEmail' in opts ? opts.contactEmail : null;
      let phoneN = opts && 'phoneN' in opts ? opts.phoneN : null;
      let image = opts && 'image' in opts ? opts.image : null;
      let propertyRule = opts && 'propertyRule' in opts ? opts.propertyRule : null;
      return async.async(dart.dynamic, (function* lastScreenbutton() {
        this.setBusy(true);
        this.storageResult = (yield this[_cloudStorageService].uploadImage({imageToUpload: image, title: this[_propertyName]}));
        let result = (yield this[_firestoreService$0].addProperty(new propertyModel.PropertyModel.new({propertyAddress: this[_address], propertyEmail: this[_contactEmail], propertyImage: this.storageResult.imageUrl, imageFileName: this.storageResult.imageFileName, propertyPhone: this[_phoneN], propertyName: this[_propertyName], propertyRules: propertyRule})));
        this.setBusy(false);
        if (typeof result == 'string') {
          yield this[_dialogService].showDialog({title: "Unable to Create Property", description: result});
        } else {
          yield this[_dialogService].showDialog({title: "Success", description: "Property Successfully Upload"});
        }
      }).bind(this));
    }
    logout() {
      return async.async(dart.dynamic, (function* logout() {
        yield this[_authService$0].signOut();
        this[_navigationService$].navigateTo("/signIn");
      }).bind(this));
    }
  };
  (AddProperty_view_mode.AddPropertyViewModel.new = function() {
    this[_authService$0] = locator.locator.call(authentication.AuthService);
    this[_dialogService] = locator.locator.call(dialog_service.DialogService);
    this[_navigationService$] = locator.locator.call(navigation_service.NavigationService);
    this[_firestoreService$0] = locator.locator.call(FirestoreService.FirestoreService);
    this[_cloudStorageService] = locator.locator.call(CloudStorageService.CloudStorageService);
    this[pageIndex] = 0;
    this[_image] = null;
    this[storageResult] = null;
    this[_propertyName] = null;
    this[_address] = null;
    this[_contactEmail] = null;
    this[_phoneN] = null;
    AddProperty_view_mode.AddPropertyViewModel.__proto__.new.call(this);
    ;
  }).prototype = AddProperty_view_mode.AddPropertyViewModel.prototype;
  dart.addTypeTests(AddProperty_view_mode.AddPropertyViewModel);
  dart.setMethodSignature(AddProperty_view_mode.AddPropertyViewModel, () => ({
    __proto__: dart.getMethods(AddProperty_view_mode.AddPropertyViewModel.__proto__),
    initialize: dart.fnType(dart.void, []),
    nextPage: dart.fnType(dart.void, []),
    goback: dart.fnType(dart.void, []),
    movetoScreen2: dart.fnType(dart.dynamic, [], {address: core.String, contactEmail: core.String, phoneN: core.String, propertyName: core.String}, {}),
    pickImage: dart.fnType(async.Future, []),
    lastScreenbutton: dart.fnType(dart.dynamic, [], {address: core.String, contactEmail: core.String, image: io.File, phoneN: core.String, propertyName: core.String, propertyRule: core.String}, {}),
    logout: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(AddProperty_view_mode.AddPropertyViewModel, () => ({
    __proto__: dart.getGetters(AddProperty_view_mode.AddPropertyViewModel.__proto__),
    selectedImage: io.File
  }));
  dart.setLibraryUri(AddProperty_view_mode.AddPropertyViewModel, "package:hostapp/src/viewmodels/AddProperty_view_mode.dart");
  dart.setFieldSignature(AddProperty_view_mode.AddPropertyViewModel, () => ({
    __proto__: dart.getFields(AddProperty_view_mode.AddPropertyViewModel.__proto__),
    [_authService$0]: dart.finalFieldType(authentication.AuthService),
    [_dialogService]: dart.finalFieldType(dialog_service.DialogService),
    [_navigationService$]: dart.finalFieldType(navigation_service.NavigationService),
    [_firestoreService$0]: dart.finalFieldType(FirestoreService.FirestoreService),
    [_cloudStorageService]: dart.finalFieldType(CloudStorageService.CloudStorageService),
    pageIndex: dart.fieldType(core.int),
    [_image]: dart.fieldType(io.File),
    storageResult: dart.fieldType(CloudStorageService.CloudStorageResult),
    [_propertyName]: dart.fieldType(core.String),
    [_address]: dart.fieldType(core.String),
    [_contactEmail]: dart.fieldType(core.String),
    [_phoneN]: dart.fieldType(core.String)
  }));
  let C339;
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const FontWeight_index = dart.privateName(ui, "FontWeight.index");
  let C341;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C340;
  AppTextStyle.AppTextStyle = class AppTextStyle$ extends core.Object {
    static categoryText(context) {
      return new text_style.TextStyle.new({fontFamilyFallback: JSArrayOfString().of(["Raleway-Thin"]), fontSize: 12, fontWeight: ui.FontWeight.w700, color: colors.Colors.grey});
    }
    static snackbar(context) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["RobotoRegular"]), fontSize: 14, fontWeight: ui.FontWeight.w700, color: AppColor.AppColor.erroColor});
    }
    static inputStyle(context) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["RobotoRegular"]), fontSize: 16, fontWeight: ui.FontWeight.w700, color: colors.Colors.grey});
    }
    static header(context) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["RobotoRegular"]), fontSize: 28, fontWeight: ui.FontWeight.w700, color: AppColor.AppColor.loginGradientEnd});
    }
    static subTitle(context) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["RobotoRegular"]), fontSize: 16, fontWeight: ui.FontWeight.w700, color: AppColor.AppColor.loginGradientEnd});
    }
    static editTextSmall(context) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["Lobster"]), fontSize: 16, fontWeight: ui.FontWeight.w500, color: AppColor.AppColor.loginGradientEnd});
    }
    static error(context, color) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["Lobster"]), fontSize: 16, fontWeight: ui.FontWeight.w800, color: color});
    }
    static help(context) {
      return google_fonts.GoogleFonts.alike({textStyle: new text_style.TextStyle.new({fontSize: 16, fontWeight: ui.FontWeight.w800, color: AppColor.AppColor.loginGradientEnd})});
    }
    static helpWhite(context) {
      return google_fonts.GoogleFonts.alike({textStyle: new text_style.TextStyle.new({fontSize: 16, fontWeight: ui.FontWeight.w800, color: colors.Colors.white70})});
    }
    static siginText(context) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["Lobster"]), fontSize: 14.0, fontWeight: ui.FontWeight.w800, color: AppColor.AppColor.loginGradientEnd});
    }
    static headerSmall(context) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["RobotoRegular"]), fontSize: 16, fontWeight: ui.FontWeight.w500, color: AppColor.AppColor.black});
    }
    static headerSmallWhite(context) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["RobotoRegular"]), fontSize: 16, fontWeight: ui.FontWeight.w500, color: AppColor.AppColor.loginGradientEnd});
    }
    static headerSmall2(context) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["RobotoRegular"]), fontSize: 12, fontWeight: ui.FontWeight.w700, color: colors.Colors.grey});
    }
    static inputHint(context) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["RobotoRegular"]), fontSize: 14, fontWeight: ui.FontWeight.w500, color: colors.Colors.grey});
    }
    static emailheaderSmall(context, color) {
      return new text_style.TextStyle.new({fontFamily: "Metropolis", fontFamilyFallback: JSArrayOfString().of(["RobotoRegular"]), fontSize: 14, fontWeight: ui.FontWeight.w500, color: color});
    }
    static getInputDecoration(opts) {
      let helper = opts && 'helper' in opts ? opts.helper : null;
      return new input_decorator.InputDecoration.new({helperStyle: AppTextStyle.AppTextStyle.helperStyle, focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: AppTextStyle.AppTextStyle.secondaryColor})}), errorBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: AppTextStyle.AppTextStyle.errorColor})}), enabledBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: AppTextStyle.AppTextStyle.lightGrayColor})}), border: new input_border.OutlineInputBorder.new(), errorStyle: new text_style.TextStyle.new({color: colors.Colors.transparent}), helperText: "", hintText: helper, hintStyle: AppTextStyle.AppTextStyle.helperStyle});
    }
    static subText(context) {
      return google_fonts.GoogleFonts.alike({fontSize: 16, textStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.normal, color: AppColor.AppColor.white})});
    }
    static h1(context) {
      return google_fonts.GoogleFonts.alike({fontSize: 18, textStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, color: AppColor.AppColor.white})});
    }
  };
  (AppTextStyle.AppTextStyle.new = function() {
    ;
  }).prototype = AppTextStyle.AppTextStyle.prototype;
  dart.addTypeTests(AppTextStyle.AppTextStyle);
  dart.setLibraryUri(AppTextStyle.AppTextStyle, "package:hostapp/src/style/AppTextStyle.dart");
  dart.defineLazy(AppTextStyle.AppTextStyle, {
    /*AppTextStyle.AppTextStyle.fieldHeight*/get fieldHeight() {
      return 55.0;
    },
    set fieldHeight(_) {},
    /*AppTextStyle.AppTextStyle.fieldPadding*/get fieldPadding() {
      return C339 || CT.C339;
    },
    set fieldPadding(_) {},
    /*AppTextStyle.AppTextStyle.fieldDecortaion*/get fieldDecortaion() {
      return new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(5.0), color: colors.Colors.grey._get(200)});
    },
    set fieldDecortaion(_) {},
    /*AppTextStyle.AppTextStyle.disabledFieldDecortaion*/get disabledFieldDecortaion() {
      return new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(5.0), color: colors.Colors.grey._get(100)});
    },
    set disabledFieldDecortaion(_) {},
    /*AppTextStyle.AppTextStyle.formRadius*/get formRadius() {
      return 20.0;
    },
    set formRadius(_) {},
    /*AppTextStyle.AppTextStyle.hzPadding*/get hzPadding() {
      return 37.0;
    },
    set hzPadding(_) {},
    /*AppTextStyle.AppTextStyle.vtFormPadding*/get vtFormPadding() {
      return 18.0;
    },
    set vtFormPadding(_) {},
    /*AppTextStyle.AppTextStyle.primaryColor*/get primaryColor() {
      return AppColor.AppColor.primary;
    },
    set primaryColor(_) {},
    /*AppTextStyle.AppTextStyle.secondaryColor*/get secondaryColor() {
      return AppColor.AppColor.erroColor;
    },
    set secondaryColor(_) {},
    /*AppTextStyle.AppTextStyle.baseColor*/get baseColor() {
      return new ui.Color.new(4283058762);
    },
    set baseColor(_) {},
    /*AppTextStyle.AppTextStyle.lightGrayColor*/get lightGrayColor() {
      return new ui.Color.new(4293322470);
    },
    set lightGrayColor(_) {},
    /*AppTextStyle.AppTextStyle.grayColor*/get grayColor() {
      return new ui.Color.new(4283453520);
    },
    set grayColor(_) {},
    /*AppTextStyle.AppTextStyle.darkGrayColor*/get darkGrayColor() {
      return new ui.Color.new(4281150765);
    },
    set darkGrayColor(_) {},
    /*AppTextStyle.AppTextStyle.helperColor*/get helperColor() {
      return new ui.Color.new(4286085240);
    },
    set helperColor(_) {},
    /*AppTextStyle.AppTextStyle.optionalColor*/get optionalColor() {
      return new ui.Color.new(4289177511);
    },
    set optionalColor(_) {},
    /*AppTextStyle.AppTextStyle.errorColor*/get errorColor() {
      return new ui.Color.new(4293550176);
    },
    set errorColor(_) {},
    /*AppTextStyle.AppTextStyle.formContainerDecoration*/get formContainerDecoration() {
      return new box_decoration.BoxDecoration.new({color: colors.Colors.white, boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.black12, blurRadius: 8.0})]), border: box_border.Border.all({color: new ui.Color.new(4292138196)}), borderRadius: new border_radius.BorderRadius.vertical({top: new ui.Radius.circular(AppTextStyle.AppTextStyle.formRadius)})});
    },
    /*AppTextStyle.AppTextStyle.barlow*/get barlow() {
      return new text_style.TextStyle.new({fontFamily: "Barlow"});
    },
    set barlow(_) {},
    /*AppTextStyle.AppTextStyle.baloo*/get baloo() {
      return new text_style.TextStyle.new({fontFamily: "Baloo"});
    },
    set baloo(_) {},
    /*AppTextStyle.AppTextStyle.appTitle1*/get appTitle1() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({color: AppTextStyle.AppTextStyle.primaryColor, fontWeight: ui.FontWeight.w800, fontSize: 8.0, letterSpacing: 1.95});
    },
    set appTitle1(_) {},
    /*AppTextStyle.AppTextStyle.appTitle2*/get appTitle2() {
      return AppTextStyle.AppTextStyle.baloo.copyWith({color: AppTextStyle.AppTextStyle.primaryColor, fontSize: 32.0, letterSpacing: -1.08, height: 1.1, decoration: ui.TextDecoration.underline, decorationThickness: 1.2});
    },
    set appTitle2(_) {},
    /*AppTextStyle.AppTextStyle.formTitle*/get formTitle() {
      return AppTextStyle.AppTextStyle.baloo.copyWith({color: AppTextStyle.AppTextStyle.primaryColor, height: 1.0, fontSize: 30.0, letterSpacing: 0.22});
    },
    set formTitle(_) {},
    /*AppTextStyle.AppTextStyle.formSection*/get formSection() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 16.0, fontWeight: ui.FontWeight.w600, letterSpacing: 0.5, color: AppTextStyle.AppTextStyle.secondaryColor});
    },
    set formSection(_) {},
    /*AppTextStyle.AppTextStyle.imageBatch*/get imageBatch() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({color: colors.Colors.white, fontWeight: ui.FontWeight.bold, fontSize: 16.0, letterSpacing: 0.5});
    },
    set imageBatch(_) {},
    /*AppTextStyle.AppTextStyle.productName*/get productName() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontWeight: ui.FontWeight.w600, color: AppTextStyle.AppTextStyle.secondaryColor, letterSpacing: 0.63, fontSize: 20.0});
    },
    set productName(_) {},
    /*AppTextStyle.AppTextStyle.productPrice*/get productPrice() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontWeight: ui.FontWeight.w500, fontSize: 20.0, height: 1.8, letterSpacing: 0.63});
    },
    set productPrice(_) {},
    /*AppTextStyle.AppTextStyle.orderLabel*/get orderLabel() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 14.0, color: AppTextStyle.AppTextStyle.baseColor, letterSpacing: 0.44, fontWeight: ui.FontWeight.w500});
    },
    set orderLabel(_) {},
    /*AppTextStyle.AppTextStyle.orderPrice*/get orderPrice() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 14.0, color: AppTextStyle.AppTextStyle.baseColor, letterSpacing: 0.44, fontWeight: ui.FontWeight.w600});
    },
    set orderPrice(_) {},
    /*AppTextStyle.AppTextStyle.orderTotalLabel*/get orderTotalLabel() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 16.0, color: AppTextStyle.AppTextStyle.baseColor, letterSpacing: 0.5, fontWeight: ui.FontWeight.w500});
    },
    set orderTotalLabel(_) {},
    /*AppTextStyle.AppTextStyle.orderTotal*/get orderTotal() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 20.0, color: AppTextStyle.AppTextStyle.baseColor, letterSpacing: 0.63, fontWeight: ui.FontWeight.bold});
    },
    set orderTotal(_) {},
    /*AppTextStyle.AppTextStyle.helperStyle*/get helperStyle() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 16.0, color: AppTextStyle.AppTextStyle.helperColor, letterSpacing: 0.5, fontWeight: ui.FontWeight.w500});
    },
    set helperStyle(_) {},
    /*AppTextStyle.AppTextStyle.inpuTStyle*/get inpuTStyle() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 16.0, color: AppTextStyle.AppTextStyle.baseColor, letterSpacing: 0.5, fontWeight: ui.FontWeight.w500});
    },
    set inpuTStyle(_) {},
    /*AppTextStyle.AppTextStyle.submitButtonText*/get submitButtonText() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 16.0, color: colors.Colors.white, letterSpacing: 0.44, fontWeight: ui.FontWeight.bold});
    },
    set submitButtonText(_) {},
    /*AppTextStyle.AppTextStyle.labelOptional*/get labelOptional() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 8.0, color: AppTextStyle.AppTextStyle.optionalColor, fontWeight: ui.FontWeight.bold, letterSpacing: 1.0});
    },
    set labelOptional(_) {},
    /*AppTextStyle.AppTextStyle.labelNotValid*/get labelNotValid() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 8.0, color: AppTextStyle.AppTextStyle.errorColor, fontWeight: ui.FontWeight.bold, letterSpacing: 1.0});
    },
    set labelNotValid(_) {},
    /*AppTextStyle.AppTextStyle.labelRequired*/get labelRequired() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 6.0, color: AppTextStyle.AppTextStyle.grayColor, fontWeight: ui.FontWeight.bold, letterSpacing: 0.5});
    },
    set labelRequired(_) {},
    /*AppTextStyle.AppTextStyle.textButton*/get textButton() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 16.0, color: AppTextStyle.AppTextStyle.secondaryColor, letterSpacing: 0.5, fontWeight: ui.FontWeight.bold});
    },
    set textButton(_) {},
    /*AppTextStyle.AppTextStyle.optionsTitle*/get optionsTitle() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 20.0, color: AppTextStyle.AppTextStyle.darkGrayColor, letterSpacing: 0.63, fontWeight: ui.FontWeight.w600});
    },
    set optionsTitle(_) {},
    /*AppTextStyle.AppTextStyle.iconDropdown*/get iconDropdown() {
      return AppTextStyle.AppTextStyle.baloo.copyWith({color: AppTextStyle.AppTextStyle.secondaryColor, fontSize: 27.0});
    },
    set iconDropdown(_) {},
    /*AppTextStyle.AppTextStyle.formError*/get formError() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 12.0, color: AppTextStyle.AppTextStyle.errorColor, fontStyle: ui.FontStyle.italic, letterSpacing: 0.38, fontWeight: ui.FontWeight.w500});
    },
    set formError(_) {},
    /*AppTextStyle.AppTextStyle.inputLabel*/get inputLabel() {
      return AppTextStyle.AppTextStyle.barlow.copyWith({fontSize: 16.0, color: AppTextStyle.AppTextStyle.baseColor, letterSpacing: 0.5, fontWeight: ui.FontWeight.w600});
    },
    set inputLabel(_) {},
    /*AppTextStyle.AppTextStyle.buttonTitleTextStyle*/get buttonTitleTextStyle() {
      return C340 || CT.C340;
    },
    set buttonTitleTextStyle(_) {}
  });
  AppFontSizes.AppFontSizes = class AppFontSizes extends core.Object {};
  (AppFontSizes.AppFontSizes.new = function() {
    ;
  }).prototype = AppFontSizes.AppFontSizes.prototype;
  dart.addTypeTests(AppFontSizes.AppFontSizes);
  dart.setLibraryUri(AppFontSizes.AppFontSizes, "package:hostapp/src/style/AppFontSizes.dart");
  dart.defineLazy(AppFontSizes.AppFontSizes, {
    /*AppFontSizes.AppFontSizes.smallest*/get smallest() {
      return 12;
    },
    /*AppFontSizes.AppFontSizes.small*/get small() {
      return 14;
    },
    /*AppFontSizes.AppFontSizes.medium*/get medium() {
      return 16;
    },
    /*AppFontSizes.AppFontSizes.large*/get large() {
      return 18;
    },
    /*AppFontSizes.AppFontSizes.larger*/get larger() {
      return 24;
    },
    /*AppFontSizes.AppFontSizes.largest*/get largest() {
      return 28;
    }
  });
  AppImage.AppImage = class AppImage extends core.Object {};
  (AppImage.AppImage.new = function() {
    ;
  }).prototype = AppImage.AppImage.prototype;
  dart.addTypeTests(AppImage.AppImage);
  dart.setLibraryUri(AppImage.AppImage, "package:hostapp/src/style/AppImage.dart");
  dart.defineLazy(AppImage.AppImage, {
    /*AppImage.AppImage.icode*/get icode() {
      return "assets/tester_images/icode.jpg";
    },
    /*AppImage.AppImage.uploadImage*/get uploadImage() {
      return "assets/tester_images/uploadImage.jpg";
    },
    /*AppImage.AppImage.appLogo*/get appLogo() {
      return "assets/images/share.png";
    },
    /*AppImage.AppImage.board1*/get board1() {
      return "assets/images/board1.png";
    },
    /*AppImage.AppImage.board2*/get board2() {
      return "assets/images/signup.png";
    },
    /*AppImage.AppImage.board3*/get board3() {
      return "assets/images/share.png";
    },
    /*AppImage.AppImage.board4*/get board4() {
      return "assets/images/doc.png";
    }
  });
  let C342;
  let C343;
  let C346;
  let C347;
  let C345;
  let C344;
  let C350;
  let C349;
  let C348;
  let C353;
  let C354;
  let C352;
  let C351;
  let C357;
  let C358;
  let C359;
  let C356;
  let C355;
  AddPropertyScreen.AddPropertyView = class AddPropertyView extends framework.StatelessWidget {
    build(context) {
      return new (ViewModelProviderOfAddPropertyViewModel()).withoutConsumer({viewModel: new AddProperty_view_mode.AddPropertyViewModel.new(), onModelReady: dart.fn(model => model.initialize(), AddPropertyViewModelTovoid()), builder: dart.fn((context, model, child) => new responsive_builder.ScreenTypeLayout.new({mobile: new responsive_builder.OrientationLayoutBuilder.new({landscape: dart.fn(context => new AddPropertyMobile.AddPropertyLandscape.new({$creationLocationd_0dea112b090073317d4: C342 || CT.C342}), BuildContextToAddPropertyLandscape()), portrait: dart.fn(context => new AddPropertyMobile.AddPropertyPortrait.new({$creationLocationd_0dea112b090073317d4: C343 || CT.C343}), BuildContextToAddPropertyPortrait()), $creationLocationd_0dea112b090073317d4: C344 || CT.C344}), tablet: new container.Container.new({color: colors.Colors.yellow, $creationLocationd_0dea112b090073317d4: C348 || CT.C348}), $creationLocationd_0dea112b090073317d4: C351 || CT.C351}), BuildContextAndAddPropertyViewModelAndWidgetToScreenTypeLayout()), $creationLocationd_0dea112b090073317d4: C355 || CT.C355});
    }
  };
  (AddPropertyScreen.AddPropertyView.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    AddPropertyScreen.AddPropertyView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = AddPropertyScreen.AddPropertyView.prototype;
  dart.addTypeTests(AddPropertyScreen.AddPropertyView);
  dart.setMethodSignature(AddPropertyScreen.AddPropertyView, () => ({
    __proto__: dart.getMethods(AddPropertyScreen.AddPropertyView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(AddPropertyScreen.AddPropertyView, "package:hostapp/src/screen/AddPropertyScreen.dart");
  let C362;
  let C363;
  let C361;
  let C360;
  let C366;
  let C367;
  let C368;
  let C365;
  let C364;
  let C371;
  let C372;
  let C370;
  let C369;
  let C375;
  let C376;
  let C374;
  let C373;
  let C379;
  let C380;
  let C381;
  let C382;
  let C378;
  let C377;
  let C383;
  let C386;
  let C387;
  let C388;
  let C385;
  let C384;
  let C391;
  let C392;
  let C393;
  let C390;
  let C389;
  let C396;
  let C397;
  let C398;
  let C395;
  let C394;
  let C401;
  let C402;
  let C400;
  let C399;
  let C405;
  let C406;
  let C404;
  let C403;
  let C409;
  let C408;
  let C407;
  let C412;
  let C411;
  let C410;
  let C415;
  let C416;
  let C414;
  let C413;
  let C419;
  let C420;
  let C418;
  let C417;
  let C423;
  let C424;
  let C422;
  let C421;
  let C427;
  let C428;
  let C429;
  let C426;
  let C425;
  let C432;
  let C433;
  let C434;
  let C435;
  let C436;
  let C431;
  let C430;
  let C439;
  let C440;
  let C441;
  let C442;
  let C438;
  let C437;
  let C445;
  let C446;
  let C444;
  let C443;
  let C449;
  let C450;
  let C451;
  let C448;
  let C447;
  let C454;
  let C453;
  let C452;
  let C457;
  let C458;
  let C456;
  let C455;
  let C461;
  let C460;
  let C459;
  let C464;
  let C465;
  let C463;
  let C462;
  let C468;
  let C467;
  let C466;
  let C471;
  let C472;
  let C470;
  let C469;
  let C475;
  let C474;
  let C473;
  let C478;
  let C477;
  let C476;
  let C481;
  let C482;
  let C480;
  let C479;
  let C485;
  let C486;
  let C484;
  let C483;
  let C487;
  let C490;
  let C491;
  let C489;
  let C488;
  let C494;
  let C495;
  let C493;
  let C492;
  let C498;
  let C497;
  let C496;
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
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C510;
  let C513;
  let C514;
  let C515;
  let C516;
  let C512;
  let C511;
  let C519;
  let C520;
  let C518;
  let C517;
  let C523;
  let C524;
  let C525;
  let C522;
  let C521;
  let C528;
  let C529;
  let C527;
  let C526;
  let C532;
  let C533;
  let C534;
  let C531;
  let C530;
  let C537;
  let C538;
  let C536;
  let C535;
  let C541;
  let C540;
  let C539;
  let C544;
  let C545;
  let C543;
  let C542;
  let C548;
  let C547;
  let C546;
  let C551;
  let C552;
  let C550;
  let C549;
  let C555;
  let C556;
  let C557;
  let C558;
  let C554;
  let C553;
  let C561;
  let C562;
  let C560;
  let C559;
  let C565;
  let C566;
  let C567;
  let C564;
  let C563;
  let C570;
  let C571;
  let C572;
  let C569;
  let C568;
  let C575;
  let C576;
  let C574;
  let C573;
  let C579;
  let C578;
  let C577;
  let C582;
  let C583;
  let C581;
  let C580;
  const propertyNameController = dart.privateName(AddPropertyScreen, "AddProprtyUI.propertyNameController");
  const addressController = dart.privateName(AddPropertyScreen, "AddProprtyUI.addressController");
  const emailcontroller = dart.privateName(AddPropertyScreen, "AddProprtyUI.emailcontroller");
  const phoneNumber = dart.privateName(AddPropertyScreen, "AddProprtyUI.phoneNumber");
  const rulesController = dart.privateName(AddPropertyScreen, "AddProprtyUI.rulesController");
  const model$ = dart.privateName(AddPropertyScreen, "AddProprtyUI.model");
  AddPropertyScreen.AddProprtyUI = class AddProprtyUI extends framework.StatelessWidget {
    get propertyNameController() {
      return this[propertyNameController];
    }
    set propertyNameController(value) {
      this[propertyNameController] = value;
    }
    get addressController() {
      return this[addressController];
    }
    set addressController(value) {
      this[addressController] = value;
    }
    get emailcontroller() {
      return this[emailcontroller];
    }
    set emailcontroller(value) {
      this[emailcontroller] = value;
    }
    get phoneNumber() {
      return this[phoneNumber];
    }
    set phoneNumber(value) {
      this[phoneNumber] = value;
    }
    get rulesController() {
      return this[rulesController];
    }
    set rulesController(value) {
      this[rulesController] = value;
    }
    get model() {
      return this[model$];
    }
    set model(value) {
      super.model = value;
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({centerTitle: true, title: new text.Text.new("Add Property", {style: google_fonts.GoogleFonts.alice({textStyle: new text_style.TextStyle.new({color: AppColor.AppColor.black, fontSize: 18})}), $creationLocationd_0dea112b090073317d4: C360 || CT.C360}), backgroundColor: AppColor.AppColor.white, actions: JSArrayOfWidget().of([new basic.Padding.new({padding: C181 || CT.C181, child: new gesture_detector.GestureDetector.new({child: new icon.Icon.new(font_awesome.FontAwesome.sign_out, {size: 30.0, color: colors.Colors.red, $creationLocationd_0dea112b090073317d4: C364 || CT.C364}), onTap: dart.fn(() => {
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C369 || CT.C369}), $creationLocationd_0dea112b090073317d4: C373 || CT.C373})]), $creationLocationd_0dea112b090073317d4: C377 || CT.C377}), body: new basic.Column.new({children: JSArrayOfWidget().of([ui_helpers.horizontalSpaceSmall, new basic.Padding.new({padding: C383 || CT.C383, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new propertButton.PropertyButton.new({text: "1", background: AppColor.AppColor.black, onpress: dart.fn(() => {
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C384 || CT.C384}), ui_helpers.horizontalSpaceSmall, new propertButton.PropertyButton.new({text: "2", background: this.model.pageIndex === 2 || this.model.pageIndex === 3 ? AppColor.AppColor.black : AppColor.AppColor.kGrey200, onpress: dart.fn(() => {
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C389 || CT.C389}), ui_helpers.horizontalSpaceSmall, new propertButton.PropertyButton.new({text: "3", background: this.model.pageIndex === 3 ? AppColor.AppColor.black : AppColor.AppColor.kGrey200, onpress: dart.fn(() => {
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C394 || CT.C394})]), $creationLocationd_0dea112b090073317d4: C399 || CT.C399}), $creationLocationd_0dea112b090073317d4: C403 || CT.C403}), new single_child_scroll_view.SingleChildScrollView.new({child: framework.Widget._check(this.swtichScreen(this.model, context)), $creationLocationd_0dea112b090073317d4: C407 || CT.C407})]), $creationLocationd_0dea112b090073317d4: C410 || CT.C410}), $creationLocationd_0dea112b090073317d4: C413 || CT.C413});
    }
    swtichScreen(model, context) {
      if (model.pageIndex === 1) {
        return this.screen1(context, model);
      } else if (model.pageIndex === 2) {
        return this.screen2(context, model);
      } else if (model.pageIndex === 3) {
        return this.screen3(context, model);
      }
    }
    screen1(context, model) {
      return new basic.Padding.new({padding: C339 || CT.C339, child: new basic.Column.new({children: JSArrayOfWidget().of([ui_helpers.verticalSpaceMedium, new input_field.InputField.new({placeholder: "Property Name", controller: this.propertyNameController, $creationLocationd_0dea112b090073317d4: C417 || CT.C417}), ui_helpers.verticalSpaceSmall, new input_field.InputField.new({placeholder: "Property Address", controller: this.addressController, $creationLocationd_0dea112b090073317d4: C421 || CT.C421}), ui_helpers.verticalSpaceSmall, new input_field.InputField.new({placeholder: "Contact Email", controller: this.emailcontroller, textInputType: text_input.TextInputType.emailAddress, $creationLocationd_0dea112b090073317d4: C425 || CT.C425}), ui_helpers.verticalSpaceSmall, new input_field.InputField.new({placeholder: "PhoneNumber", controller: this.phoneNumber, textInputType: text_input.TextInputType.number, decoration: new input_decorator.InputDecoration.new({border: input_border.InputBorder.none, hintText: "xxxxxx", hintStyle: AppTextStyle.AppTextStyle.inputHint(context), icon: new country_code_picker.CountryCodePicker.new({onChanged: dart.fn(value => {
                  }, CountryCodeToNull()), initialSelection: "+234", favorite: JSArrayOfString().of(["+39", "FR"]), showCountryOnly: false, alignLeft: false, $creationLocationd_0dea112b090073317d4: C430 || CT.C430})}), $creationLocationd_0dea112b090073317d4: C437 || CT.C437}), ui_helpers.verticalSpaceSmall, ui_helpers.verticalSpaceSmall, new material_button.MaterialButton.new({child: new text.Text.new("Continue", {style: new text_style.TextStyle.new({color: AppColor.AppColor.white, fontSize: 17.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C443 || CT.C443}), color: AppColor.AppColor.black, onPressed: dart.fn(() => model.movetoScreen2({address: this.addressController.text[$trim](), contactEmail: this.emailcontroller.text[$trim](), phoneN: this.phoneNumber.text[$trim](), propertyName: this.propertyNameController.text[$trim]()}), VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C447 || CT.C447})]), $creationLocationd_0dea112b090073317d4: C452 || CT.C452}), $creationLocationd_0dea112b090073317d4: C455 || CT.C455});
    }
    screen2(context, model) {
      return new basic.Center.new({child: new basic.Padding.new({padding: C339 || CT.C339, child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({height: 300.0, width: 300.0, child: model.selectedImage == null ? new gesture_detector.GestureDetector.new({child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 10.0}), child: new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.asset(AppImage.AppImage.uploadImage, {$creationLocationd_0dea112b090073317d4: C459 || CT.C459}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 10.0}), child: new basic.Center.new({child: new text.Text.new("No image selected.", {style: AppTextStyle.AppTextStyle.error(context, AppColor.AppColor.kErrorRed), $creationLocationd_0dea112b090073317d4: C462 || CT.C462}), $creationLocationd_0dea112b090073317d4: C466 || CT.C466}), $creationLocationd_0dea112b090073317d4: C469 || CT.C469})]), $creationLocationd_0dea112b090073317d4: C473 || CT.C473}), $creationLocationd_0dea112b090073317d4: C476 || CT.C476}), $creationLocationd_0dea112b090073317d4: C479 || CT.C479}), onTap: dart.fn(() => {
                    model.pickImage();
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C483 || CT.C483}) : new gesture_detector.GestureDetector.new({child: new basic.Padding.new({padding: C487 || CT.C487, child: new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("Tap to replace", {style: AppTextStyle.AppTextStyle.error(context, AppColor.AppColor.black), $creationLocationd_0dea112b090073317d4: C488 || CT.C488}), ui_helpers.verticalSpaceSmall, new basic.Flexible.new({child: new image.Image.file(model.selectedImage, {fit: box_fit.BoxFit.fill, $creationLocationd_0dea112b090073317d4: C492 || CT.C492}), $creationLocationd_0dea112b090073317d4: C496 || CT.C496})]), $creationLocationd_0dea112b090073317d4: C499 || CT.C499}), $creationLocationd_0dea112b090073317d4: C502 || CT.C502}), onTap: dart.fn(() => {
                    model.pickImage();
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C506 || CT.C506}), decoration: new shape_decoration.ShapeDecoration.new({color: AppColor.AppColor.kGrey200, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.only({topLeft: C510 || CT.C510, topRight: C510 || CT.C510, bottomLeft: C510 || CT.C510, bottomRight: C510 || CT.C510})})}), $creationLocationd_0dea112b090073317d4: C511 || CT.C511}), ui_helpers.verticalSpaceLarge, new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new material_button.MaterialButton.new({child: new text.Text.new("Back", {style: new text_style.TextStyle.new({color: AppColor.AppColor.white, fontSize: 17.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C517 || CT.C517}), color: AppColor.AppColor.black, onPressed: dart.fn(() => model.goback(), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C521 || CT.C521}), ui_helpers.horizontalSpaceLarge, new material_button.MaterialButton.new({child: new text.Text.new("Skip", {style: new text_style.TextStyle.new({color: AppColor.AppColor.white, fontSize: 17.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C526 || CT.C526}), color: AppColor.AppColor.black, onPressed: dart.fn(() => model.nextPage(), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C530 || CT.C530})]), $creationLocationd_0dea112b090073317d4: C535 || CT.C535})]), $creationLocationd_0dea112b090073317d4: C539 || CT.C539}), $creationLocationd_0dea112b090073317d4: C542 || CT.C542}), $creationLocationd_0dea112b090073317d4: C546 || CT.C546});
    }
    screen3(context, model) {
      return new basic.Padding.new({padding: C339 || CT.C339, child: new basic.Column.new({children: JSArrayOfWidget().of([ui_helpers.verticalSpaceSmall, new text.Text.new("Tell People what to expect", {style: google_fonts.GoogleFonts.alice({textStyle: new text_style.TextStyle.new({color: AppColor.AppColor.black, fontSize: 18})}), $creationLocationd_0dea112b090073317d4: C549 || CT.C549}), ui_helpers.verticalSpaceMedium, new text_field.TextField.new({keyboardType: text_input.TextInputType.multiline, controller: this.rulesController, maxLines: 10, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new(), labelText: "Paste your property rules here..", labelStyle: google_fonts.GoogleFonts.abel()}), $creationLocationd_0dea112b090073317d4: C553 || CT.C553}), ui_helpers.verticalSpaceLarge, new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new material_button.MaterialButton.new({child: new text.Text.new("Back", {style: new text_style.TextStyle.new({color: AppColor.AppColor.white, fontSize: 17.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C559 || CT.C559}), color: AppColor.AppColor.black, onPressed: dart.fn(() => model.goback(), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C563 || CT.C563}), ui_helpers.horizontalSpaceLarge, new busy_button.BusyButton.new({title: "Skip", busy: model.busy, onPressed: dart.fn(() => {
                    model.lastScreenbutton({propertyName: this.propertyNameController.text[$trim](), address: this.addressController.text[$trim](), contactEmail: this.emailcontroller.text[$trim](), phoneN: this.phoneNumber.text[$trim](), image: model.selectedImage, propertyRule: this.rulesController.text[$trim]()});
                    core.print(this.propertyNameController.text);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C568 || CT.C568})]), $creationLocationd_0dea112b090073317d4: C573 || CT.C573})]), $creationLocationd_0dea112b090073317d4: C577 || CT.C577}), $creationLocationd_0dea112b090073317d4: C580 || CT.C580});
    }
  };
  (AddPropertyScreen.AddProprtyUI.new = function(model, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[propertyNameController] = new editable_text.TextEditingController.new();
    this[addressController] = new editable_text.TextEditingController.new();
    this[emailcontroller] = new editable_text.TextEditingController.new();
    this[phoneNumber] = new editable_text.TextEditingController.new();
    this[rulesController] = new editable_text.TextEditingController.new();
    this[model$] = model;
    AddPropertyScreen.AddProprtyUI.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = AddPropertyScreen.AddProprtyUI.prototype;
  dart.addTypeTests(AddPropertyScreen.AddProprtyUI);
  dart.setMethodSignature(AddPropertyScreen.AddProprtyUI, () => ({
    __proto__: dart.getMethods(AddPropertyScreen.AddProprtyUI.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    swtichScreen: dart.fnType(dart.dynamic, [AddProperty_view_mode.AddPropertyViewModel, framework.BuildContext]),
    screen1: dart.fnType(dart.dynamic, [framework.BuildContext, AddProperty_view_mode.AddPropertyViewModel]),
    screen2: dart.fnType(dart.dynamic, [framework.BuildContext, AddProperty_view_mode.AddPropertyViewModel]),
    screen3: dart.fnType(dart.dynamic, [framework.BuildContext, AddProperty_view_mode.AddPropertyViewModel])
  }));
  dart.setLibraryUri(AddPropertyScreen.AddProprtyUI, "package:hostapp/src/screen/AddPropertyScreen.dart");
  dart.setFieldSignature(AddPropertyScreen.AddProprtyUI, () => ({
    __proto__: dart.getFields(AddPropertyScreen.AddProprtyUI.__proto__),
    propertyNameController: dart.fieldType(editable_text.TextEditingController),
    addressController: dart.fieldType(editable_text.TextEditingController),
    emailcontroller: dart.fieldType(editable_text.TextEditingController),
    phoneNumber: dart.fieldType(editable_text.TextEditingController),
    rulesController: dart.fieldType(editable_text.TextEditingController),
    model: dart.finalFieldType(AddProperty_view_mode.AddPropertyViewModel)
  }));
  let C586;
  let C585;
  let C584;
  ui_helpers.verticalSpace = function verticalSpace(height) {
    return new basic.SizedBox.new({height: height, $creationLocationd_0dea112b090073317d4: C584 || CT.C584});
  };
  ui_helpers.screenWidth = function screenWidth(context) {
    return media_query.MediaQuery.of(context).size.width;
  };
  ui_helpers.screenHeight = function screenHeight(context) {
    return media_query.MediaQuery.of(context).size.height;
  };
  ui_helpers.screenHeightFraction = function screenHeightFraction(context, opts) {
    let dividedBy = opts && 'dividedBy' in opts ? opts.dividedBy : 1;
    let offsetBy = opts && 'offsetBy' in opts ? opts.offsetBy : 0;
    return (dart.notNull(ui_helpers.screenHeight(context)) - dart.notNull(offsetBy)) / dart.notNull(dividedBy);
  };
  ui_helpers.screenWidthFraction = function screenWidthFraction(context, opts) {
    let dividedBy = opts && 'dividedBy' in opts ? opts.dividedBy : 1;
    let offsetBy = opts && 'offsetBy' in opts ? opts.offsetBy : 0;
    return (dart.notNull(ui_helpers.screenWidth(context)) - dart.notNull(offsetBy)) / dart.notNull(dividedBy);
  };
  ui_helpers.halfScreenWidth = function halfScreenWidth(context) {
    return ui_helpers.screenWidthFraction(context, {dividedBy: 2});
  };
  ui_helpers.thirdScreenWidth = function thirdScreenWidth(context) {
    return ui_helpers.screenWidthFraction(context, {dividedBy: 3});
  };
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C587;
  let C588;
  let C589;
  let C590;
  let C591;
  let C592;
  let C593;
  let C594;
  let C595;
  let C600;
  let C601;
  let C602;
  let C603;
  let C604;
  let C605;
  let C606;
  let C599;
  const ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  let C598;
  const Divider_color = dart.privateName(divider, "Divider.color");
  const Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  const Divider_indent = dart.privateName(divider, "Divider.indent");
  const Divider_thickness = dart.privateName(divider, "Divider.thickness");
  const Divider_height = dart.privateName(divider, "Divider.height");
  let C597;
  let C596;
  let C609;
  let C608;
  let C607;
  dart.defineLazy(ui_helpers, {
    /*ui_helpers.horizontalSpaceTiny*/get horizontalSpaceTiny() {
      return C587 || CT.C587;
    },
    /*ui_helpers.horizontalSpaceSmall*/get horizontalSpaceSmall() {
      return C588 || CT.C588;
    },
    /*ui_helpers.horizontalSpaceMedium*/get horizontalSpaceMedium() {
      return C589 || CT.C589;
    },
    /*ui_helpers.horizontalSpaceLarge*/get horizontalSpaceLarge() {
      return C590 || CT.C590;
    },
    /*ui_helpers.verticalSpaceTiny*/get verticalSpaceTiny() {
      return C591 || CT.C591;
    },
    /*ui_helpers.verticalSpaceSmall*/get verticalSpaceSmall() {
      return C592 || CT.C592;
    },
    /*ui_helpers.verticalSpaceMedium*/get verticalSpaceMedium() {
      return C593 || CT.C593;
    },
    /*ui_helpers.verticalSpaceLarge*/get verticalSpaceLarge() {
      return C594 || CT.C594;
    },
    /*ui_helpers.verticalSpaceMassive*/get verticalSpaceMassive() {
      return C595 || CT.C595;
    },
    /*ui_helpers.spacedDivider*/get spacedDivider() {
      return new basic.Column.new({children: C596 || CT.C596, $creationLocationd_0dea112b090073317d4: C607 || CT.C607});
    },
    set spacedDivider(_) {}
  });
  let C612;
  let C613;
  let C611;
  let C610;
  let C616;
  let C617;
  let C618;
  let C615;
  let C614;
  const text$ = dart.privateName(propertButton, "PropertyButton.text");
  const onpress$ = dart.privateName(propertButton, "PropertyButton.onpress");
  const background$ = dart.privateName(propertButton, "PropertyButton.background");
  propertButton.PropertyButton = class PropertyButton extends framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      this[text$] = value;
    }
    get onpress() {
      return this[onpress$];
    }
    set onpress(value) {
      this[onpress$] = value;
    }
    get background() {
      return this[background$];
    }
    set background(value) {
      this[background$] = value;
    }
    build(context) {
      return new material_button.MaterialButton.new({child: new text.Text.new(this.text, {style: new text_style.TextStyle.new({color: AppColor.AppColor.white, fontSize: 17.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C610 || CT.C610}), color: this.background, onPressed: VoidTovoid()._check(this.onpress), $creationLocationd_0dea112b090073317d4: C614 || CT.C614});
    }
  };
  (propertButton.PropertyButton.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let onpress = opts && 'onpress' in opts ? opts.onpress : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[onpress$] = onpress;
    this[background$] = background;
    propertButton.PropertyButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = propertButton.PropertyButton.prototype;
  dart.addTypeTests(propertButton.PropertyButton);
  dart.setMethodSignature(propertButton.PropertyButton, () => ({
    __proto__: dart.getMethods(propertButton.PropertyButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(propertButton.PropertyButton, "package:hostapp/src/widget/propertButton.dart");
  dart.setFieldSignature(propertButton.PropertyButton, () => ({
    __proto__: dart.getFields(propertButton.PropertyButton.__proto__),
    text: dart.fieldType(core.String),
    onpress: dart.fieldType(core.Function),
    background: dart.fieldType(ui.Color)
  }));
  const _name$ = dart.privateName(text_input, "_name");
  let C619;
  const TextInputType_decimal = dart.privateName(text_input, "TextInputType.decimal");
  const TextInputType_signed = dart.privateName(text_input, "TextInputType.signed");
  const TextInputType_index = dart.privateName(text_input, "TextInputType.index");
  let C620;
  const controller$ = dart.privateName(input_field, "InputField.controller");
  const textInputType$ = dart.privateName(input_field, "InputField.textInputType");
  const password$ = dart.privateName(input_field, "InputField.password");
  const isReadOnly$ = dart.privateName(input_field, "InputField.isReadOnly");
  const placeholder$ = dart.privateName(input_field, "InputField.placeholder");
  const validationMessage$ = dart.privateName(input_field, "InputField.validationMessage");
  const enterPressed$ = dart.privateName(input_field, "InputField.enterPressed");
  const smallVersion$ = dart.privateName(input_field, "InputField.smallVersion");
  const fieldFocusNode$ = dart.privateName(input_field, "InputField.fieldFocusNode");
  const nextFocusNode$ = dart.privateName(input_field, "InputField.nextFocusNode");
  const textInputAction$ = dart.privateName(input_field, "InputField.textInputAction");
  const additionalNote$ = dart.privateName(input_field, "InputField.additionalNote");
  const onChanged$ = dart.privateName(input_field, "InputField.onChanged");
  const decoration$ = dart.privateName(input_field, "InputField.decoration");
  const formatter$ = dart.privateName(input_field, "InputField.formatter");
  input_field.InputField = class InputField extends framework.StatefulWidget {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get textInputType() {
      return this[textInputType$];
    }
    set textInputType(value) {
      super.textInputType = value;
    }
    get password() {
      return this[password$];
    }
    set password(value) {
      super.password = value;
    }
    get isReadOnly() {
      return this[isReadOnly$];
    }
    set isReadOnly(value) {
      super.isReadOnly = value;
    }
    get placeholder() {
      return this[placeholder$];
    }
    set placeholder(value) {
      super.placeholder = value;
    }
    get validationMessage() {
      return this[validationMessage$];
    }
    set validationMessage(value) {
      super.validationMessage = value;
    }
    get enterPressed() {
      return this[enterPressed$];
    }
    set enterPressed(value) {
      super.enterPressed = value;
    }
    get smallVersion() {
      return this[smallVersion$];
    }
    set smallVersion(value) {
      super.smallVersion = value;
    }
    get fieldFocusNode() {
      return this[fieldFocusNode$];
    }
    set fieldFocusNode(value) {
      super.fieldFocusNode = value;
    }
    get nextFocusNode() {
      return this[nextFocusNode$];
    }
    set nextFocusNode(value) {
      super.nextFocusNode = value;
    }
    get textInputAction() {
      return this[textInputAction$];
    }
    set textInputAction(value) {
      super.textInputAction = value;
    }
    get additionalNote() {
      return this[additionalNote$];
    }
    set additionalNote(value) {
      super.additionalNote = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get formatter() {
      return this[formatter$];
    }
    set formatter(value) {
      super.formatter = value;
    }
    createState() {
      return new input_field._InputFieldState.new();
    }
  };
  (input_field.InputField.new = function(opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let placeholder = opts && 'placeholder' in opts ? opts.placeholder : null;
    let enterPressed = opts && 'enterPressed' in opts ? opts.enterPressed : null;
    let fieldFocusNode = opts && 'fieldFocusNode' in opts ? opts.fieldFocusNode : null;
    let nextFocusNode = opts && 'nextFocusNode' in opts ? opts.nextFocusNode : null;
    let additionalNote = opts && 'additionalNote' in opts ? opts.additionalNote : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let formatter = opts && 'formatter' in opts ? opts.formatter : null;
    let validationMessage = opts && 'validationMessage' in opts ? opts.validationMessage : null;
    let textInputAction = opts && 'textInputAction' in opts ? opts.textInputAction : C619 || CT.C619;
    let textInputType = opts && 'textInputType' in opts ? opts.textInputType : C620 || CT.C620;
    let password = opts && 'password' in opts ? opts.password : false;
    let isReadOnly = opts && 'isReadOnly' in opts ? opts.isReadOnly : false;
    let smallVersion = opts && 'smallVersion' in opts ? opts.smallVersion : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[placeholder$] = placeholder;
    this[enterPressed$] = enterPressed;
    this[fieldFocusNode$] = fieldFocusNode;
    this[nextFocusNode$] = nextFocusNode;
    this[additionalNote$] = additionalNote;
    this[onChanged$] = onChanged;
    this[decoration$] = decoration;
    this[formatter$] = formatter;
    this[validationMessage$] = validationMessage;
    this[textInputAction$] = textInputAction;
    this[textInputType$] = textInputType;
    this[password$] = password;
    this[isReadOnly$] = isReadOnly;
    this[smallVersion$] = smallVersion;
    input_field.InputField.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = input_field.InputField.prototype;
  dart.addTypeTests(input_field.InputField);
  dart.setMethodSignature(input_field.InputField, () => ({
    __proto__: dart.getMethods(input_field.InputField.__proto__),
    createState: dart.fnType(input_field._InputFieldState, [])
  }));
  dart.setLibraryUri(input_field.InputField, "package:hostapp/src/widget/input_field.dart");
  dart.setFieldSignature(input_field.InputField, () => ({
    __proto__: dart.getFields(input_field.InputField.__proto__),
    controller: dart.finalFieldType(editable_text.TextEditingController),
    textInputType: dart.finalFieldType(text_input.TextInputType),
    password: dart.finalFieldType(core.bool),
    isReadOnly: dart.finalFieldType(core.bool),
    placeholder: dart.finalFieldType(core.String),
    validationMessage: dart.finalFieldType(core.String),
    enterPressed: dart.finalFieldType(core.Function),
    smallVersion: dart.finalFieldType(core.bool),
    fieldFocusNode: dart.finalFieldType(focus_manager.FocusNode),
    nextFocusNode: dart.finalFieldType(focus_manager.FocusNode),
    textInputAction: dart.finalFieldType(text_input.TextInputAction),
    additionalNote: dart.finalFieldType(core.String),
    onChanged: dart.finalFieldType(dart.fnType(dart.dynamic, [core.String])),
    decoration: dart.finalFieldType(input_decorator.InputDecoration),
    formatter: dart.finalFieldType(text_formatter.TextInputFormatter)
  }));
  let C623;
  let C624;
  let C625;
  let C626;
  let C627;
  let C628;
  let C629;
  let C630;
  let C631;
  let C632;
  let C633;
  let C622;
  let C621;
  let C636;
  let C635;
  let C634;
  let C639;
  let C638;
  let C637;
  let C642;
  let C643;
  let C644;
  let C645;
  let C641;
  let C640;
  let C646;
  let C649;
  let C650;
  let C648;
  let C647;
  let C653;
  let C652;
  let C651;
  let C656;
  let C657;
  let C658;
  let C659;
  let C660;
  let C655;
  let C654;
  let C663;
  let C664;
  let C662;
  let C661;
  let C667;
  let C666;
  let C665;
  let C670;
  let C671;
  let C669;
  let C668;
  input_field._InputFieldState = class _InputFieldState extends framework.State$(input_field.InputField) {
    initState() {
      super.initState();
      this.isPassword = this.widget.password;
    }
    build(context) {
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: (() => {
          let t6 = JSArrayOfWidget().of([]);
          t6[$add](new container.Container.new({height: dart.test(this.widget.smallVersion) ? 40.0 : this.fieldHeight, alignment: alignment.Alignment.centerLeft, padding: AppTextStyle.AppTextStyle.fieldPadding, decoration: dart.test(this.widget.isReadOnly) ? AppTextStyle.AppTextStyle.disabledFieldDecortaion : AppTextStyle.AppTextStyle.fieldDecortaion, child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new text_form_field.TextFormField.new({controller: this.widget.controller, keyboardType: this.widget.textInputType, focusNode: this.widget.fieldFocusNode, textInputAction: this.widget.textInputAction, onChanged: this.widget.onChanged, inputFormatters: this.widget.formatter != null ? JSArrayOfTextInputFormatter().of([this.widget.formatter]) : null, onEditingComplete: dart.fn(() => {
                      if (this.widget.enterPressed != null) {
                        focus_scope.FocusScope.of(context).requestFocus(new focus_manager.FocusNode.new());
                        dart.dsend(this.widget, 'enterPressed', []);
                      }
                    }, VoidToNull()), onFieldSubmitted: dart.fn(value => {
                      if (this.widget.nextFocusNode != null) {
                        this.widget.nextFocusNode.requestFocus();
                      }
                    }, StringToNull()), obscureText: this.isPassword, readOnly: this.widget.isReadOnly, decoration: this.widget.decoration == null ? new input_decorator.InputDecoration.collapsed({hintText: this.widget.placeholder, hintStyle: new text_style.TextStyle.new({fontSize: dart.test(this.widget.smallVersion) ? 12.0 : 15.0})}) : this.widget.decoration, $creationLocationd_0dea112b090073317d4: C621 || CT.C621}), $creationLocationd_0dea112b090073317d4: C634 || CT.C634}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => this.setState(dart.fn(() => {
                    this.isPassword = !dart.test(this.isPassword);
                  }, VoidToNull())), VoidTovoid()), child: dart.test(this.widget.password) ? new container.Container.new({width: this.fieldHeight, height: this.fieldHeight, alignment: alignment.Alignment.center, child: new icon.Icon.new(dart.test(this.isPassword) ? icons.Icons.visibility : icons.Icons.visibility_off, {$creationLocationd_0dea112b090073317d4: C637 || CT.C637}), $creationLocationd_0dea112b090073317d4: C640 || CT.C640}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C646 || CT.C646}), $creationLocationd_0dea112b090073317d4: C647 || CT.C647})]), $creationLocationd_0dea112b090073317d4: C651 || CT.C651}), $creationLocationd_0dea112b090073317d4: C654 || CT.C654}));
          if (this.widget.validationMessage != null) t6[$add](new note_text.NoteText.new(this.widget.validationMessage, {color: colors.Colors.red, $creationLocationd_0dea112b090073317d4: C661 || CT.C661}));
          if (this.widget.additionalNote != null) t6[$add](ui_helpers.verticalSpace(5.0));
          if (this.widget.additionalNote != null) t6[$add](new note_text.NoteText.new(this.widget.additionalNote, {$creationLocationd_0dea112b090073317d4: C665 || CT.C665}));
          t6[$add](ui_helpers.verticalSpaceSmall);
          return t6;
        })(), $creationLocationd_0dea112b090073317d4: C668 || CT.C668});
    }
  };
  (input_field._InputFieldState.new = function() {
    this.isPassword = null;
    this.fieldHeight = 55.0;
    input_field._InputFieldState.__proto__.new.call(this);
    ;
  }).prototype = input_field._InputFieldState.prototype;
  dart.addTypeTests(input_field._InputFieldState);
  dart.setMethodSignature(input_field._InputFieldState, () => ({
    __proto__: dart.getMethods(input_field._InputFieldState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(input_field._InputFieldState, "package:hostapp/src/widget/input_field.dart");
  dart.setFieldSignature(input_field._InputFieldState, () => ({
    __proto__: dart.getFields(input_field._InputFieldState.__proto__),
    isPassword: dart.fieldType(core.bool),
    fieldHeight: dart.fieldType(core.double)
  }));
  let C674;
  let C675;
  let C676;
  let C673;
  let C672;
  const text$0 = dart.privateName(note_text, "NoteText.text");
  const textAlign$ = dart.privateName(note_text, "NoteText.textAlign");
  const color$ = dart.privateName(note_text, "NoteText.color");
  note_text.NoteText = class NoteText extends framework.StatelessWidget {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get textAlign() {
      return this[textAlign$];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    build(context) {
      let t7;
      return new text.Text.new(this.text, {textAlign: this.textAlign, style: new text_style.TextStyle.new({fontSize: 12.0, fontWeight: ui.FontWeight.normal, color: (t7 = this.color, t7 == null ? colors.Colors.grey._get(600) : t7)}), $creationLocationd_0dea112b090073317d4: C672 || CT.C672});
    }
  };
  (note_text.NoteText.new = function(text, opts) {
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$0] = text;
    this[textAlign$] = textAlign;
    this[color$] = color;
    note_text.NoteText.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = note_text.NoteText.prototype;
  dart.addTypeTests(note_text.NoteText);
  dart.setMethodSignature(note_text.NoteText, () => ({
    __proto__: dart.getMethods(note_text.NoteText.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(note_text.NoteText, "package:hostapp/src/widget/note_text.dart");
  dart.setFieldSignature(note_text.NoteText, () => ({
    __proto__: dart.getFields(note_text.NoteText.__proto__),
    text: dart.finalFieldType(core.String),
    textAlign: dart.finalFieldType(ui.TextAlign),
    color: dart.finalFieldType(ui.Color)
  }));
  const busy$ = dart.privateName(busy_button, "BusyButton.busy");
  const title$1 = dart.privateName(busy_button, "BusyButton.title");
  const onPressed$ = dart.privateName(busy_button, "BusyButton.onPressed");
  const enabled$ = dart.privateName(busy_button, "BusyButton.enabled");
  busy_button.BusyButton = class BusyButton extends framework.StatefulWidget {
    get busy() {
      return this[busy$];
    }
    set busy(value) {
      super.busy = value;
    }
    get title() {
      return this[title$1];
    }
    set title(value) {
      super.title = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    createState() {
      return new busy_button._BusyButtonState.new();
    }
  };
  (busy_button.BusyButton.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let busy = opts && 'busy' in opts ? opts.busy : false;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let enabled = opts && 'enabled' in opts ? opts.enabled : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$1] = title;
    this[busy$] = busy;
    this[onPressed$] = onPressed;
    this[enabled$] = enabled;
    busy_button.BusyButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = busy_button.BusyButton.prototype;
  dart.addTypeTests(busy_button.BusyButton);
  dart.setMethodSignature(busy_button.BusyButton, () => ({
    __proto__: dart.getMethods(busy_button.BusyButton.__proto__),
    createState: dart.fnType(busy_button._BusyButtonState, [])
  }));
  dart.setLibraryUri(busy_button.BusyButton, "package:hostapp/src/widget/busy_button.dart");
  dart.setFieldSignature(busy_button.BusyButton, () => ({
    __proto__: dart.getFields(busy_button.BusyButton.__proto__),
    busy: dart.finalFieldType(core.bool),
    title: dart.finalFieldType(core.String),
    onPressed: dart.finalFieldType(core.Function),
    enabled: dart.finalFieldType(core.bool)
  }));
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C677;
  let C680;
  let C681;
  let C679;
  let C678;
  let C684;
  let C685;
  let C683;
  let C682;
  let C688;
  let C689;
  let C690;
  let C691;
  let C692;
  let C693;
  let C687;
  let C686;
  let C696;
  let C695;
  let C694;
  let C699;
  let C700;
  let C698;
  let C697;
  busy_button._BusyButtonState = class _BusyButtonState extends framework.State$(busy_button.BusyButton) {
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: VoidTovoid()._check(this.widget.onPressed), child: new ink_well.InkWell.new({child: new implicit_animations.AnimatedContainer.new({height: dart.test(this.widget.busy) ? 40.0 : null, width: dart.test(this.widget.busy) ? 40.0 : null, duration: C677 || CT.C677, alignment: alignment.Alignment.center, padding: new edge_insets.EdgeInsets.symmetric({horizontal: dart.test(this.widget.busy) ? 10.0 : 15.0, vertical: dart.test(this.widget.busy) ? 10.0 : 10.0}), decoration: new box_decoration.BoxDecoration.new({color: dart.test(this.widget.enabled) ? colors.Colors.grey._get(800) : colors.Colors.grey._get(300), borderRadius: new border_radius.BorderRadius.circular(5.0)}), child: !dart.test(this.widget.busy) ? new text.Text.new(this.widget.title, {style: AppTextStyle.AppTextStyle.buttonTitleTextStyle, $creationLocationd_0dea112b090073317d4: C678 || CT.C678}) : new progress_indicator.CircularProgressIndicator.new({strokeWidth: 2.0, valueColor: new (AlwaysStoppedAnimationOfColor()).new(colors.Colors.white), $creationLocationd_0dea112b090073317d4: C682 || CT.C682}), $creationLocationd_0dea112b090073317d4: C686 || CT.C686}), $creationLocationd_0dea112b090073317d4: C694 || CT.C694}), $creationLocationd_0dea112b090073317d4: C697 || CT.C697});
    }
  };
  (busy_button._BusyButtonState.new = function() {
    busy_button._BusyButtonState.__proto__.new.call(this);
    ;
  }).prototype = busy_button._BusyButtonState.prototype;
  dart.addTypeTests(busy_button._BusyButtonState);
  dart.setMethodSignature(busy_button._BusyButtonState, () => ({
    __proto__: dart.getMethods(busy_button._BusyButtonState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(busy_button._BusyButtonState, "package:hostapp/src/widget/busy_button.dart");
  let C703;
  let C702;
  let C701;
  let C706;
  let C705;
  let C704;
  AddPropertyMobile.AddPropertyPortrait = class AddPropertyPortrait extends provider_widget.ProviderWidget$(AddProperty_view_mode.AddPropertyViewModel) {
    build(context, model) {
      AddProperty_view_mode.AddPropertyViewModel._check(model);
      core.print("AM Prostrait***************");
      return new scaffold.Scaffold.new({body: new AddPropertyScreen.AddProprtyUI.new(model, {$creationLocationd_0dea112b090073317d4: C701 || CT.C701}), $creationLocationd_0dea112b090073317d4: C704 || CT.C704});
    }
  };
  (AddPropertyMobile.AddPropertyPortrait.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    AddPropertyMobile.AddPropertyPortrait.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = AddPropertyMobile.AddPropertyPortrait.prototype;
  dart.addTypeTests(AddPropertyMobile.AddPropertyPortrait);
  dart.setMethodSignature(AddPropertyMobile.AddPropertyPortrait, () => ({
    __proto__: dart.getMethods(AddPropertyMobile.AddPropertyPortrait.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, core.Object])
  }));
  dart.setLibraryUri(AddPropertyMobile.AddPropertyPortrait, "package:hostapp/src/screen/Mobile/AddPropertyMobile.dart");
  let C709;
  let C708;
  let C707;
  let C712;
  let C711;
  let C710;
  let C715;
  let C714;
  let C713;
  let C718;
  let C717;
  let C716;
  let C721;
  let C720;
  let C719;
  AddPropertyMobile.AddPropertyLandscape = class AddPropertyLandscape extends provider_widget.ProviderWidget$(AddProperty_view_mode.AddPropertyViewModel) {
    build(context, model) {
      AddProperty_view_mode.AddPropertyViewModel._check(model);
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, body: new basic.Center.new({child: new container.Container.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new AddPropertyScreen.AddProprtyUI.new(model, {$creationLocationd_0dea112b090073317d4: C707 || CT.C707}), $creationLocationd_0dea112b090073317d4: C710 || CT.C710}), $creationLocationd_0dea112b090073317d4: C713 || CT.C713}), $creationLocationd_0dea112b090073317d4: C716 || CT.C716}), $creationLocationd_0dea112b090073317d4: C719 || CT.C719});
    }
  };
  (AddPropertyMobile.AddPropertyLandscape.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    AddPropertyMobile.AddPropertyLandscape.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = AddPropertyMobile.AddPropertyLandscape.prototype;
  dart.addTypeTests(AddPropertyMobile.AddPropertyLandscape);
  dart.setMethodSignature(AddPropertyMobile.AddPropertyLandscape, () => ({
    __proto__: dart.getMethods(AddPropertyMobile.AddPropertyLandscape.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext, core.Object])
  }));
  dart.setLibraryUri(AddPropertyMobile.AddPropertyLandscape, "package:hostapp/src/screen/Mobile/AddPropertyMobile.dart");
  const child$ = dart.privateName(dialog_manager, "DialogManager.child");
  dialog_manager.DialogManager = class DialogManager extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    createState() {
      return new dialog_manager._DialogManagerState.new();
    }
  };
  (dialog_manager.DialogManager.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    dialog_manager.DialogManager.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dialog_manager.DialogManager.prototype;
  dart.addTypeTests(dialog_manager.DialogManager);
  dart.setMethodSignature(dialog_manager.DialogManager, () => ({
    __proto__: dart.getMethods(dialog_manager.DialogManager.__proto__),
    createState: dart.fnType(dialog_manager._DialogManagerState, [])
  }));
  dart.setLibraryUri(dialog_manager.DialogManager, "package:hostapp/src/managers/dialog_manager.dart");
  dart.setFieldSignature(dialog_manager.DialogManager, () => ({
    __proto__: dart.getFields(dialog_manager.DialogManager.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  const _dialogService$ = dart.privateName(dialog_manager, "_dialogService");
  const _showDialog = dart.privateName(dialog_manager, "_showDialog");
  let C724;
  let C723;
  let C722;
  let C727;
  let C726;
  let C725;
  let C730;
  let C729;
  let C728;
  let C733;
  let C734;
  let C732;
  let C731;
  let C737;
  let C736;
  let C735;
  let C740;
  let C741;
  let C739;
  let C738;
  let C744;
  let C745;
  let C746;
  let C743;
  let C742;
  dialog_manager._DialogManagerState = class _DialogManagerState extends framework.State$(dialog_manager.DialogManager) {
    initState() {
      super.initState();
      this[_dialogService$].registerDialogListener(dart.bind(this, _showDialog));
    }
    build(context) {
      return this.widget.child;
    }
    [_showDialog](request) {
      let isConfirmationDialog = request.cancelTitle != null;
      dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new(request.title, {$creationLocationd_0dea112b090073317d4: C722 || CT.C722}), content: new text.Text.new(request.description, {$creationLocationd_0dea112b090073317d4: C725 || CT.C725}), actions: (() => {
            let t7 = JSArrayOfWidget().of([]);
            if (isConfirmationDialog) t7[$add](new flat_button.FlatButton.new({child: new text.Text.new(request.cancelTitle, {$creationLocationd_0dea112b090073317d4: C728 || CT.C728}), onPressed: dart.fn(() => {
                this[_dialogService$].dialogComplete(new dialog_models.DialogResponse.new({confirmed: false}));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C731 || CT.C731}));
            t7[$add](new flat_button.FlatButton.new({child: new text.Text.new(request.buttonTitle, {$creationLocationd_0dea112b090073317d4: C735 || CT.C735}), onPressed: dart.fn(() => {
                this[_dialogService$].dialogComplete(new dialog_models.DialogResponse.new({confirmed: true}));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C738 || CT.C738}));
            return t7;
          })(), $creationLocationd_0dea112b090073317d4: C742 || CT.C742}), BuildContextToAlertDialog())});
    }
  };
  (dialog_manager._DialogManagerState.new = function() {
    this[_dialogService$] = locator.locator.call(dialog_service.DialogService);
    dialog_manager._DialogManagerState.__proto__.new.call(this);
    ;
  }).prototype = dialog_manager._DialogManagerState.prototype;
  dart.addTypeTests(dialog_manager._DialogManagerState);
  dart.setMethodSignature(dialog_manager._DialogManagerState, () => ({
    __proto__: dart.getMethods(dialog_manager._DialogManagerState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_showDialog]: dart.fnType(dart.void, [dialog_models.DialogRequest])
  }));
  dart.setLibraryUri(dialog_manager._DialogManagerState, "package:hostapp/src/managers/dialog_manager.dart");
  dart.setFieldSignature(dialog_manager._DialogManagerState, () => ({
    __proto__: dart.getFields(dialog_manager._DialogManagerState.__proto__),
    [_dialogService$]: dart.fieldType(dialog_service.DialogService)
  }));
  const _name$0 = dart.privateName(auth_bloc, "_name");
  let C747;
  let C748;
  let C749;
  let C750;
  let C751;
  let C752;
  auth_bloc.AuthStatus = class AuthStatus extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (auth_bloc.AuthStatus.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = auth_bloc.AuthStatus.prototype;
  dart.addTypeTests(auth_bloc.AuthStatus);
  dart.setLibraryUri(auth_bloc.AuthStatus, "package:hostapp/src/service/auth_bloc.dart");
  dart.setFieldSignature(auth_bloc.AuthStatus, () => ({
    __proto__: dart.getFields(auth_bloc.AuthStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(auth_bloc.AuthStatus, ['toString']);
  auth_bloc.AuthStatus.emailAuth = C747 || CT.C747;
  auth_bloc.AuthStatus.phoneAuth = C748 || CT.C748;
  auth_bloc.AuthStatus.emailLinkSent = C749 || CT.C749;
  auth_bloc.AuthStatus.smsSent = C750 || CT.C750;
  auth_bloc.AuthStatus.isLoading = C751 || CT.C751;
  auth_bloc.AuthStatus.values = C752 || CT.C752;
  const _repository = dart.privateName(auth_bloc, "_repository");
  const _email = dart.privateName(auth_bloc, "_email");
  const _dialCode = dart.privateName(auth_bloc, "_dialCode");
  const _phone = dart.privateName(auth_bloc, "_phone");
  const _authStatus = dart.privateName(auth_bloc, "_authStatus");
  const _verificationId = dart.privateName(auth_bloc, "_verificationId");
  const validateEmail = dart.privateName(auth_validators, "AuthValidators.validateEmail");
  const validatePhone = dart.privateName(auth_validators, "AuthValidators.validatePhone");
  auth_validators.AuthValidators = class AuthValidators extends core.Object {
    get validateEmail() {
      return this[validateEmail];
    }
    set validateEmail(value) {
      super.validateEmail = value;
    }
    get validatePhone() {
      return this[validatePhone];
    }
    set validatePhone(value) {
      super.validatePhone = value;
    }
  };
  (auth_validators.AuthValidators.new = function() {
    this[validateEmail] = new (_StreamHandlerTransformerOfString$String()).new({handleData: dart.fn((email, sink) => {
        if (dart.test(core.RegExp.new("^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\\.[a-zA-Z]+").hasMatch(email))) {
          sink.add(email[$toLowerCase]());
          core.print("emailllllllllllllllowercase" + email[$toLowerCase]());
        } else {
          sink.addError("Email is incorect");
        }
      }, StringAndEventSinkOfStringToNull())});
    this[validatePhone] = new (_StreamHandlerTransformerOfString$String()).new({handleData: dart.fn((phone, sink) => {
        if (dart.test(core.RegExp.new("^(?:[+0]+)?[0-9]{6,14}$").hasMatch(phone))) {
          sink.add(phone);
        } else {
          sink.addError("Phone is incorrect");
        }
      }, StringAndEventSinkOfStringToNull())});
    ;
  }).prototype = auth_validators.AuthValidators.prototype;
  dart.addTypeTests(auth_validators.AuthValidators);
  dart.setLibraryUri(auth_validators.AuthValidators, "package:hostapp/src/util/auth_validators.dart");
  dart.setFieldSignature(auth_validators.AuthValidators, () => ({
    __proto__: dart.getFields(auth_validators.AuthValidators.__proto__),
    validateEmail: dart.finalFieldType(async.StreamTransformer$(core.String, core.String)),
    validatePhone: dart.finalFieldType(async.StreamTransformer$(core.String, core.String))
  }));
  const Object_AuthValidators$36 = class Object_AuthValidators extends core.Object {};
  (Object_AuthValidators$36.new = function() {
    auth_validators.AuthValidators.new.call(this);
  }).prototype = Object_AuthValidators$36.prototype;
  dart.applyMixin(Object_AuthValidators$36, auth_validators.AuthValidators);
  auth_bloc.AuthBloc = class AuthBloc extends Object_AuthValidators$36 {
    get email() {
      return this[_email].stream.transform(core.String, this.validateEmail);
    }
    get phone() {
      return this[_phone].stream.transform(core.String, this.validatePhone);
    }
    get dialCode() {
      return this[_dialCode].stream;
    }
    get verificationID() {
      return this[_verificationId].stream;
    }
    get authStatus() {
      return this[_authStatus].stream;
    }
    get getEmail() {
      return this[_email].value;
    }
    get getPhone() {
      return this[_phone].value;
    }
    get getDialCode() {
      return this[_dialCode].value;
    }
    get getVerificationId() {
      return this[_verificationId].value;
    }
    get getAuthStatus() {
      return this[_authStatus].value;
    }
    get changeEmail() {
      return dart.bind(this[_email].sink, 'add');
    }
    get changePhone() {
      return dart.bind(this[_phone].sink, 'add');
    }
    get changeDialCode() {
      return dart.bind(this[_dialCode].sink, 'add');
    }
    get changeVerificationId() {
      return dart.bind(this[_verificationId].sink, 'add');
    }
    get changeAuthStatus() {
      return dart.bind(this[_authStatus].sink, 'add');
    }
    sendSignInWithEmailLink() {
      return this[_repository].sendSignInWithEmailLink(this[_email].value[$replaceAll](" ", ""));
    }
    signInWIthEmailLink(email, link) {
      return this[_repository].signInWithEmailLink(core.String._check(email), core.String._check(link));
    }
    getCurrentUser() {
      return this[_repository].getCurrentUser();
    }
    storeUserEmail() {
      return this[_repository].setEmail(this[_email].value[$replaceAll](" ", ""));
    }
    clearUserEmailFromStorage() {
      return this[_repository].clearEmail();
    }
    getUserEmailFromStorage() {
      return this[_repository].getEmail();
    }
    signInWithCredential(credential) {
      return this[_repository].signInWithCredential(credential);
    }
    verifyPhoneNumber(codeAutoRetrievalTimeout, codeSent, verificationCompleted, verificationFailed) {
      let phoneNumber = dart.notNull(this[_dialCode].value) + this[_phone].value[$replaceAll](" ", "");
      return this[_repository].verifyPhoneNumber(phoneNumber, codeAutoRetrievalTimeout, codeSent, new core.Duration.new({seconds: 90}), verificationCompleted, verificationFailed);
    }
    dispose() {
      return async.async(dart.dynamic, (function* dispose() {
        yield this[_email].drain(dart.dynamic);
        this[_email].close();
        yield this[_phone].drain(dart.dynamic);
        this[_phone].close();
        yield this[_authStatus].drain(dart.dynamic);
        this[_authStatus].close();
        yield this[_dialCode].drain(dart.dynamic);
        this[_dialCode].close();
        yield this[_verificationId].drain(dart.dynamic);
        this[_verificationId].close();
      }).bind(this));
    }
  };
  (auth_bloc.AuthBloc.new = function() {
    this[_repository] = new repository.Repository.new();
    this[_email] = BehaviorSubjectOfString().new();
    this[_dialCode] = BehaviorSubjectOfString().new();
    this[_phone] = BehaviorSubjectOfString().new();
    this[_authStatus] = BehaviorSubjectOfAuthStatus().new();
    this[_verificationId] = BehaviorSubjectOfString().new();
    auth_bloc.AuthBloc.__proto__.new.call(this);
    ;
  }).prototype = auth_bloc.AuthBloc.prototype;
  dart.addTypeTests(auth_bloc.AuthBloc);
  dart.setMethodSignature(auth_bloc.AuthBloc, () => ({
    __proto__: dart.getMethods(auth_bloc.AuthBloc.__proto__),
    sendSignInWithEmailLink: dart.fnType(async.Future$(dart.void), []),
    signInWIthEmailLink: dart.fnType(async.Future$(firebase_auth.AuthResult), [dart.dynamic, dart.dynamic]),
    getCurrentUser: dart.fnType(async.Future$(firebase_auth.FirebaseUser), []),
    storeUserEmail: dart.fnType(async.Future$(dart.void), []),
    clearUserEmailFromStorage: dart.fnType(async.Future$(dart.void), []),
    getUserEmailFromStorage: dart.fnType(async.Future$(core.String), []),
    signInWithCredential: dart.fnType(async.Future$(firebase_auth.AuthResult), [firebase_auth_platform_interface.AuthCredential]),
    verifyPhoneNumber: dart.fnType(async.Future$(dart.void), [dart.fnType(dart.void, [core.String]), dart.fnType(dart.void, [core.String], [core.int]), dart.fnType(dart.void, [firebase_auth_platform_interface.AuthCredential]), dart.fnType(dart.void, [firebase_auth_platform_interface.AuthException])]),
    dispose: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(auth_bloc.AuthBloc, () => ({
    __proto__: dart.getGetters(auth_bloc.AuthBloc.__proto__),
    email: observable.Observable$(core.String),
    phone: observable.Observable$(core.String),
    dialCode: observable.Observable$(core.String),
    verificationID: observable.Observable$(core.String),
    authStatus: observable.Observable$(auth_bloc.AuthStatus),
    getEmail: core.String,
    getPhone: core.String,
    getDialCode: core.String,
    getVerificationId: core.String,
    getAuthStatus: auth_bloc.AuthStatus,
    changeEmail: dart.fnType(dart.dynamic, [core.String]),
    changePhone: dart.fnType(dart.dynamic, [core.String]),
    changeDialCode: dart.fnType(dart.dynamic, [core.String]),
    changeVerificationId: dart.fnType(dart.dynamic, [core.String]),
    changeAuthStatus: dart.fnType(dart.dynamic, [auth_bloc.AuthStatus])
  }));
  dart.setLibraryUri(auth_bloc.AuthBloc, "package:hostapp/src/service/auth_bloc.dart");
  dart.setFieldSignature(auth_bloc.AuthBloc, () => ({
    __proto__: dart.getFields(auth_bloc.AuthBloc.__proto__),
    [_repository]: dart.finalFieldType(repository.Repository),
    [_email]: dart.finalFieldType(behavior_subject.BehaviorSubject$(core.String)),
    [_dialCode]: dart.finalFieldType(behavior_subject.BehaviorSubject$(core.String)),
    [_phone]: dart.finalFieldType(behavior_subject.BehaviorSubject$(core.String)),
    [_authStatus]: dart.finalFieldType(behavior_subject.BehaviorSubject$(auth_bloc.AuthStatus)),
    [_verificationId]: dart.finalFieldType(behavior_subject.BehaviorSubject$(core.String))
  }));
  const _authProvider = dart.privateName(repository, "_authProvider");
  const _store = dart.privateName(storage_repository, "_store");
  storage_repository.StorageRepository = class StorageRepository extends core.Object {
    setEmail(email) {
      return this[_store].setEmail(email);
    }
    clearEmail() {
      return this[_store].clearEmail();
    }
    getEmail() {
      return this[_store].getEmail();
    }
  };
  (storage_repository.StorageRepository.new = function() {
    this[_store] = new storage_provider.StorageProvider.new({flutterSecureStorage: new flutter_secure_storage.FlutterSecureStorage.new()});
    ;
  }).prototype = storage_repository.StorageRepository.prototype;
  dart.addTypeTests(storage_repository.StorageRepository);
  dart.setMethodSignature(storage_repository.StorageRepository, () => ({
    __proto__: dart.getMethods(storage_repository.StorageRepository.__proto__),
    setEmail: dart.fnType(async.Future$(dart.void), [core.String]),
    clearEmail: dart.fnType(async.Future$(dart.void), []),
    getEmail: dart.fnType(async.Future$(core.String), [])
  }));
  dart.setLibraryUri(storage_repository.StorageRepository, "package:hostapp/src/util/storage_repository.dart");
  dart.setFieldSignature(storage_repository.StorageRepository, () => ({
    __proto__: dart.getFields(storage_repository.StorageRepository.__proto__),
    [_store]: dart.finalFieldType(storage_provider.StorageProvider)
  }));
  const Object_StorageRepository$36 = class Object_StorageRepository extends core.Object {};
  (Object_StorageRepository$36.new = function() {
    storage_repository.StorageRepository.new.call(this);
  }).prototype = Object_StorageRepository$36.prototype;
  dart.applyMixin(Object_StorageRepository$36, storage_repository.StorageRepository);
  repository.Repository = class Repository extends Object_StorageRepository$36 {
    sendSignInWithEmailLink(email) {
      return this[_authProvider].sendSignInWithEmailLink(email);
    }
    signInWithEmailLink(email, link) {
      return this[_authProvider].signInWithEmailLink(email, link);
    }
    signInWithCredential(credential) {
      return this[_authProvider].signInWithCredential(credential);
    }
    getCurrentUser() {
      return this[_authProvider].getCurrentUser();
    }
    verifyPhoneNumber(phone, codeAutoRetrievalTimeout, codeSent, duration, verificationCompleted, verificationFailed) {
      return this[_authProvider].verifyPhoneNumber(phone, codeAutoRetrievalTimeout, codeSent, duration, verificationCompleted, verificationFailed);
    }
  };
  (repository.Repository.new = function() {
    this[_authProvider] = new auth_provider.AuthProvider.new();
    repository.Repository.__proto__.new.call(this);
    ;
  }).prototype = repository.Repository.prototype;
  dart.addTypeTests(repository.Repository);
  dart.setMethodSignature(repository.Repository, () => ({
    __proto__: dart.getMethods(repository.Repository.__proto__),
    sendSignInWithEmailLink: dart.fnType(async.Future$(dart.void), [core.String]),
    signInWithEmailLink: dart.fnType(async.Future$(firebase_auth.AuthResult), [core.String, core.String]),
    signInWithCredential: dart.fnType(async.Future$(firebase_auth.AuthResult), [firebase_auth_platform_interface.AuthCredential]),
    getCurrentUser: dart.fnType(async.Future$(firebase_auth.FirebaseUser), []),
    verifyPhoneNumber: dart.fnType(async.Future$(dart.void), [core.String, dart.fnType(dart.void, [core.String]), dart.fnType(dart.void, [core.String], [core.int]), core.Duration, dart.fnType(dart.void, [firebase_auth_platform_interface.AuthCredential]), dart.fnType(dart.void, [firebase_auth_platform_interface.AuthException])])
  }));
  dart.setLibraryUri(repository.Repository, "package:hostapp/src/service/repository.dart");
  dart.setFieldSignature(repository.Repository, () => ({
    __proto__: dart.getFields(repository.Repository.__proto__),
    [_authProvider]: dart.finalFieldType(auth_provider.AuthProvider)
  }));
  const _auth$ = dart.privateName(auth_provider, "_auth");
  auth_provider.AuthProvider = class AuthProvider extends core.Object {
    sendSignInWithEmailLink(email) {
      return async.async(dart.void, (function* sendSignInWithEmailLink() {
        return this[_auth$].sendSignInWithEmailLink({email: email, url: constants.Constants.projectUrl, androidInstallIfNotAvailable: true, androidMinimumVersion: "18", androidPackageName: "com.example.hostapp", handleCodeInApp: true, iOSBundleID: "com.example.hostapp"});
      }).bind(this));
    }
    signInWithEmailLink(email, link) {
      return async.async(firebase_auth.AuthResult, (function* signInWithEmailLink() {
        return this[_auth$].signInWithEmailAndLink({email: email, link: link});
      }).bind(this));
    }
    verifyPhoneNumber(phone, codeAutoRetrievalTimeout, codeSent, duration, verificationCompleted, verificationFailed) {
      return async.async(dart.void, (function* verifyPhoneNumber() {
        return this[_auth$].verifyPhoneNumber({phoneNumber: phone, codeAutoRetrievalTimeout: codeAutoRetrievalTimeout, codeSent: codeSent, timeout: duration, verificationCompleted: verificationCompleted, verificationFailed: verificationFailed});
      }).bind(this));
    }
    signInWithCredential(credential) {
      return async.async(firebase_auth.AuthResult, (function* signInWithCredential() {
        return this[_auth$].signInWithCredential(credential);
      }).bind(this));
    }
    getCurrentUser() {
      return this[_auth$].currentUser();
    }
  };
  (auth_provider.AuthProvider.new = function() {
    this[_auth$] = firebase_auth.FirebaseAuth.instance;
    ;
  }).prototype = auth_provider.AuthProvider.prototype;
  dart.addTypeTests(auth_provider.AuthProvider);
  dart.setMethodSignature(auth_provider.AuthProvider, () => ({
    __proto__: dart.getMethods(auth_provider.AuthProvider.__proto__),
    sendSignInWithEmailLink: dart.fnType(async.Future$(dart.void), [core.String]),
    signInWithEmailLink: dart.fnType(async.Future$(firebase_auth.AuthResult), [core.String, core.String]),
    verifyPhoneNumber: dart.fnType(async.Future$(dart.void), [core.String, dart.fnType(dart.void, [core.String]), dart.fnType(dart.void, [core.String], [core.int]), core.Duration, dart.fnType(dart.void, [firebase_auth_platform_interface.AuthCredential]), dart.fnType(dart.void, [firebase_auth_platform_interface.AuthException])]),
    signInWithCredential: dart.fnType(async.Future$(firebase_auth.AuthResult), [firebase_auth_platform_interface.AuthCredential]),
    getCurrentUser: dart.fnType(async.Future$(firebase_auth.FirebaseUser), [])
  }));
  dart.setLibraryUri(auth_provider.AuthProvider, "package:hostapp/src/service/auth_provider.dart");
  dart.setFieldSignature(auth_provider.AuthProvider, () => ({
    __proto__: dart.getFields(auth_provider.AuthProvider.__proto__),
    [_auth$]: dart.finalFieldType(firebase_auth.FirebaseAuth)
  }));
  const flutterSecureStorage$ = dart.privateName(storage_provider, "StorageProvider.flutterSecureStorage");
  storage_provider.StorageProvider = class StorageProvider extends core.Object {
    get flutterSecureStorage() {
      return this[flutterSecureStorage$];
    }
    set flutterSecureStorage(value) {
      super.flutterSecureStorage = value;
    }
    setEmail(email) {
      return async.async(dart.void, (function* setEmail() {
        yield this.flutterSecureStorage.write({key: "userEmailAddress", value: email});
      }).bind(this));
    }
    clearEmail() {
      return async.async(dart.void, (function* clearEmail() {
        yield this.flutterSecureStorage.delete({key: "userEmailAddress"});
      }).bind(this));
    }
    getEmail() {
      return async.async(core.String, (function* getEmail() {
        return yield this.flutterSecureStorage.read({key: "userEmailAddress"});
      }).bind(this));
    }
  };
  (storage_provider.StorageProvider.new = function(opts) {
    let flutterSecureStorage = opts && 'flutterSecureStorage' in opts ? opts.flutterSecureStorage : null;
    this[flutterSecureStorage$] = flutterSecureStorage;
    if (!(flutterSecureStorage != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hostapp/src/util/storage_provider.dart", 7, 16, "flutterSecureStorage != null");
    ;
  }).prototype = storage_provider.StorageProvider.prototype;
  dart.addTypeTests(storage_provider.StorageProvider);
  dart.setMethodSignature(storage_provider.StorageProvider, () => ({
    __proto__: dart.getMethods(storage_provider.StorageProvider.__proto__),
    setEmail: dart.fnType(async.Future$(dart.void), [core.String]),
    clearEmail: dart.fnType(async.Future$(dart.void), []),
    getEmail: dart.fnType(async.Future$(core.String), [])
  }));
  dart.setLibraryUri(storage_provider.StorageProvider, "package:hostapp/src/util/storage_provider.dart");
  dart.setFieldSignature(storage_provider.StorageProvider, () => ({
    __proto__: dart.getFields(storage_provider.StorageProvider.__proto__),
    flutterSecureStorage: dart.finalFieldType(flutter_secure_storage.FlutterSecureStorage)
  }));
  dart.defineLazy(storage_provider.StorageProvider, {
    /*storage_provider.StorageProvider.storageUserEmailKey*/get storageUserEmailKey() {
      return "userEmailAddress";
    }
  });
  const isAvailable$ = dart.privateName(AppleSignInAvailable, "AppleSignInAvailable.isAvailable");
  AppleSignInAvailable.AppleSignInAvailable = class AppleSignInAvailable$ extends core.Object {
    get isAvailable() {
      return this[isAvailable$];
    }
    set isAvailable(value) {
      super.isAvailable = value;
    }
    static check() {
      return async.async(AppleSignInAvailable.AppleSignInAvailable, function* check() {
        return new AppleSignInAvailable.AppleSignInAvailable.new(yield apple_sign_in.AppleSignIn.isAvailable());
      });
    }
  };
  (AppleSignInAvailable.AppleSignInAvailable.new = function(isAvailable) {
    this[isAvailable$] = isAvailable;
    ;
  }).prototype = AppleSignInAvailable.AppleSignInAvailable.prototype;
  dart.addTypeTests(AppleSignInAvailable.AppleSignInAvailable);
  dart.setLibraryUri(AppleSignInAvailable.AppleSignInAvailable, "package:hostapp/src/service/AppleSignInAvailable.dart");
  dart.setFieldSignature(AppleSignInAvailable.AppleSignInAvailable, () => ({
    __proto__: dart.getFields(AppleSignInAvailable.AppleSignInAvailable.__proto__),
    isAvailable: dart.finalFieldType(core.bool)
  }));
  const bloc = dart.privateName(auth_bloc_provider, "AuthBlocProvider.bloc");
  auth_bloc_provider.AuthBlocProvider = class AuthBlocProvider extends framework.InheritedWidget {
    get bloc() {
      return this[bloc];
    }
    set bloc(value) {
      super.bloc = value;
    }
    updateShouldNotify(_) {
      framework.InheritedWidget._check(_);
      return true;
    }
    static of(context) {
      return context.dependOnInheritedWidgetOfExactType(auth_bloc_provider.AuthBlocProvider).bloc;
    }
  };
  (auth_bloc_provider.AuthBlocProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[bloc] = new auth_bloc.AuthBloc.new();
    auth_bloc_provider.AuthBlocProvider.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auth_bloc_provider.AuthBlocProvider.prototype;
  dart.addTypeTests(auth_bloc_provider.AuthBlocProvider);
  dart.setMethodSignature(auth_bloc_provider.AuthBlocProvider, () => ({
    __proto__: dart.getMethods(auth_bloc_provider.AuthBlocProvider.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(auth_bloc_provider.AuthBlocProvider, "package:hostapp/src/service/auth_bloc_provider.dart");
  dart.setFieldSignature(auth_bloc_provider.AuthBlocProvider, () => ({
    __proto__: dart.getFields(auth_bloc_provider.AuthBlocProvider.__proto__),
    bloc: dart.finalFieldType(auth_bloc.AuthBloc)
  }));
  let C753;
  let C754;
  let C755;
  let C758;
  let C757;
  let C756;
  let C761;
  let C760;
  let C759;
  let C764;
  let C763;
  let C762;
  route.generateRoute = function generateRoute(settings) {
    switch (settings.name) {
      case "/signUp":
      case "/signIn":
      case "/wrapper":
      {
        return route._getPageRoute({routeName: settings.name, viewToShow: new WrapperScreen.WrapperScreen.new({$creationLocationd_0dea112b090073317d4: C753 || CT.C753})});
      }
      case "/addProperty":
      {
        return route._getPageRoute({routeName: settings.name, viewToShow: new AddPropertyScreen.AddPropertyView.new({$creationLocationd_0dea112b090073317d4: C754 || CT.C754})});
      }
      case "/dashboard":
      {
        return route._getPageRoute({routeName: settings.name, viewToShow: new Dashboard.Dashboard.new({$creationLocationd_0dea112b090073317d4: C755 || CT.C755})});
      }
      default:
      {
        return new page.MaterialPageRoute.new({builder: dart.fn(_ => new scaffold.Scaffold.new({body: new basic.Center.new({child: new text.Text.new("No route defined for " + dart.str(settings.name), {$creationLocationd_0dea112b090073317d4: C756 || CT.C756}), $creationLocationd_0dea112b090073317d4: C759 || CT.C759}), $creationLocationd_0dea112b090073317d4: C762 || CT.C762}), BuildContextToScaffold())});
      }
    }
  };
  route._getPageRoute = function _getPageRoute(opts) {
    let routeName = opts && 'routeName' in opts ? opts.routeName : null;
    let viewToShow = opts && 'viewToShow' in opts ? opts.viewToShow : null;
    return new page.MaterialPageRoute.new({settings: new navigator.RouteSettings.new({name: routeName}), builder: dart.fn(_ => viewToShow, BuildContextToWidget())});
  };
  let C767;
  let C766;
  let C765;
  let C770;
  let C769;
  let C768;
  let C773;
  let C772;
  let C771;
  let C774;
  let C777;
  let C776;
  let C775;
  let C780;
  let C781;
  let C779;
  let C778;
  let C784;
  let C783;
  let C782;
  let C787;
  let C786;
  let C785;
  let C790;
  let C789;
  let C788;
  WrapperScreen.WrapperScreen = class WrapperScreen extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({body: new basic.Center.new({child: new (StreamBuilderOfFirebaseUser()).new({stream: firebase_auth.FirebaseAuth.instance.onAuthStateChanged, builder: dart.fn((context, snapshot) => {
                if (dart.equals(snapshot.connectionState, async$.ConnectionState.active)) {
                  let user = snapshot.data;
                  if (user == null) {
                    return new scaffold.Scaffold.new({body: new basic.Center.new({child: new text.Text.new("Not Login", {$creationLocationd_0dea112b090073317d4: C765 || CT.C765}), $creationLocationd_0dea112b090073317d4: C768 || CT.C768}), $creationLocationd_0dea112b090073317d4: C771 || CT.C771});
                  } else {
                    return new Dashboard.Dashboard.new({$creationLocationd_0dea112b090073317d4: C774 || CT.C774});
                  }
                } else {
                  return new text.Text.new("", {$creationLocationd_0dea112b090073317d4: C775 || CT.C775});
                }
              }, BuildContextAndAsyncSnapshotOfFirebaseUserToWidget()), $creationLocationd_0dea112b090073317d4: C778 || CT.C778}), $creationLocationd_0dea112b090073317d4: C782 || CT.C782}), $creationLocationd_0dea112b090073317d4: C785 || CT.C785}), $creationLocationd_0dea112b090073317d4: C788 || CT.C788});
    }
  };
  (WrapperScreen.WrapperScreen.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    WrapperScreen.WrapperScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = WrapperScreen.WrapperScreen.prototype;
  dart.addTypeTests(WrapperScreen.WrapperScreen);
  dart.setMethodSignature(WrapperScreen.WrapperScreen, () => ({
    __proto__: dart.getMethods(WrapperScreen.WrapperScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(WrapperScreen.WrapperScreen, "package:hostapp/src/screen/WrapperScreen.dart");
  dart.defineLazy(WrapperScreen, {
    /*WrapperScreen.authService*/get authService() {
      return locator.locator.call(authentication.AuthService);
    },
    set authService(_) {}
  });
  let C791;
  let C794;
  let C793;
  let C792;
  let C797;
  let C798;
  let C796;
  let C795;
  let C801;
  let C800;
  let C799;
  app$.PasswordlessApp = class PasswordlessApp extends framework.StatelessWidget {
    build(context) {
      return new auth_bloc_provider.AuthBlocProvider.new({child: new app.MaterialApp.new({theme: theme_data.ThemeData.new({scaffoldBackgroundColor: colors.Colors.white}), home: new scaffold.Scaffold.new({body: new Dashboard.Dashboard.new({$creationLocationd_0dea112b090073317d4: C791 || CT.C791}), $creationLocationd_0dea112b090073317d4: C792 || CT.C792}), $creationLocationd_0dea112b090073317d4: C795 || CT.C795}), $creationLocationd_0dea112b090073317d4: C799 || CT.C799});
    }
  };
  (app$.PasswordlessApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    app$.PasswordlessApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = app$.PasswordlessApp.prototype;
  dart.addTypeTests(app$.PasswordlessApp);
  dart.setMethodSignature(app$.PasswordlessApp, () => ({
    __proto__: dart.getMethods(app$.PasswordlessApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(app$.PasswordlessApp, "package:hostapp/src/app.dart");
  dart.trackLibraries("packages/hostapp/src/app", {
    "package:hostapp/src/service/dialog_service.dart": dialog_service,
    "package:hostapp/src/model/dialog_models.dart": dialog_models,
    "package:hostapp/src/screen/Dashboard.dart": Dashboard,
    "package:hostapp/src/screen/FetchProperties.dart": FetchProperties,
    "package:hostapp/src/widget/ExpansionInfo.dart": ExpansionInfo,
    "package:hostapp/src/service/FirestoreService.dart": FirestoreService,
    "package:hostapp/src/model/propertyModel.dart": propertyModel,
    "package:hostapp/src/model/UserDetails.dart": UserDetails,
    "package:hostapp/src/locator.dart": locator,
    "package:hostapp/src/util/customFunctions.dart": customFunctions,
    "package:hostapp/src/util/constants.dart": constants,
    "package:hostapp/src/style/AppColor.dart": AppColor,
    "package:hostapp/src/service/navigation_service.dart": navigation_service,
    "package:hostapp/src/service/authentication.dart": authentication,
    "package:hostapp/src/service/CloudStorageService.dart": CloudStorageService,
    "package:hostapp/src/screen/ListOfProperty.dart": ListOfProperty,
    "package:hostapp/src/viewmodels/ListOfPropertyViewModel.dart": ListOfPropertyViewModel,
    "package:hostapp/src/viewmodels/base_model.dart": base_model,
    "package:hostapp/src/widget/PropertyWidget.dart": PropertyWidget,
    "package:hostapp/src/viewmodels/AddProperty_view_mode.dart": AddProperty_view_mode,
    "package:hostapp/src/style/AppTextStyle.dart": AppTextStyle,
    "package:hostapp/src/style/AppFontSizes.dart": AppFontSizes,
    "package:hostapp/src/style/AppImage.dart": AppImage,
    "package:hostapp/src/screen/AddPropertyScreen.dart": AddPropertyScreen,
    "package:hostapp/src/widget/ui_helpers.dart": ui_helpers,
    "package:hostapp/src/widget/propertButton.dart": propertButton,
    "package:hostapp/src/widget/input_field.dart": input_field,
    "package:hostapp/src/widget/note_text.dart": note_text,
    "package:hostapp/src/widget/busy_button.dart": busy_button,
    "package:hostapp/src/screen/Mobile/AddPropertyMobile.dart": AddPropertyMobile,
    "package:hostapp/src/managers/dialog_manager.dart": dialog_manager,
    "package:hostapp/src/service/auth_bloc.dart": auth_bloc,
    "package:hostapp/src/service/repository.dart": repository,
    "package:hostapp/src/service/auth_provider.dart": auth_provider,
    "package:hostapp/src/util/storage_repository.dart": storage_repository,
    "package:hostapp/src/util/storage_provider.dart": storage_provider,
    "package:hostapp/src/util/auth_validators.dart": auth_validators,
    "package:hostapp/src/service/AppleSignInAvailable.dart": AppleSignInAvailable,
    "package:hostapp/src/service/auth_bloc_provider.dart": auth_bloc_provider,
    "package:hostapp/src/route.dart": route,
    "package:hostapp/src/screen/WrapperScreen.dart": WrapperScreen,
    "package:hostapp/src/app.dart": app$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["service/dialog_service.dart","model/dialog_models.dart","screen/Dashboard.dart","screen/FetchProperties.dart","widget/ExpansionInfo.dart","service/FirestoreService.dart","model/propertyModel.dart","model/UserDetails.dart","locator.dart","util/customFunctions.dart","util/constants.dart","style/AppColor.dart","service/navigation_service.dart","service/authentication.dart","service/CloudStorageService.dart","screen/ListOfProperty.dart","viewmodels/base_model.dart","viewmodels/ListOfPropertyViewModel.dart","widget/PropertyWidget.dart","viewmodels/AddProperty_view_mode.dart","style/AppTextStyle.dart","style/AppFontSizes.dart","style/AppImage.dart","screen/AddPropertyScreen.dart","widget/ui_helpers.dart","widget/propertButton.dart","widget/input_field.dart","widget/note_text.dart","widget/busy_button.dart","screen/Mobile/AddPropertyMobile.dart","managers/dialog_manager.dart","service/auth_bloc.dart","util/auth_validators.dart","util/storage_repository.dart","service/repository.dart","service/auth_provider.dart","util/storage_provider.dart","service/AppleSignInAvailable.dart","service/auth_bloc_provider.dart","route.dart","screen/WrapperScreen.dart","app.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"app.ddc.js"}');
  // Exports:
  return {
    src__service__dialog_service: dialog_service,
    src__model__dialog_models: dialog_models,
    src__screen__Dashboard: Dashboard,
    src__screen__FetchProperties: FetchProperties,
    src__widget__ExpansionInfo: ExpansionInfo,
    src__service__FirestoreService: FirestoreService,
    src__model__propertyModel: propertyModel,
    src__model__UserDetails: UserDetails,
    src__locator: locator,
    src__util__customFunctions: customFunctions,
    src__util__constants: constants,
    src__style__AppColor: AppColor,
    src__service__navigation_service: navigation_service,
    src__service__authentication: authentication,
    src__service__CloudStorageService: CloudStorageService,
    src__screen__ListOfProperty: ListOfProperty,
    src__viewmodels__ListOfPropertyViewModel: ListOfPropertyViewModel,
    src__viewmodels__base_model: base_model,
    src__widget__PropertyWidget: PropertyWidget,
    src__viewmodels__AddProperty_view_mode: AddProperty_view_mode,
    src__style__AppTextStyle: AppTextStyle,
    src__style__AppFontSizes: AppFontSizes,
    src__style__AppImage: AppImage,
    src__screen__AddPropertyScreen: AddPropertyScreen,
    src__widget__ui_helpers: ui_helpers,
    src__widget__propertButton: propertButton,
    src__widget__input_field: input_field,
    src__widget__note_text: note_text,
    src__widget__busy_button: busy_button,
    src__screen__Mobile__AddPropertyMobile: AddPropertyMobile,
    src__managers__dialog_manager: dialog_manager,
    src__service__auth_bloc: auth_bloc,
    src__service__repository: repository,
    src__service__auth_provider: auth_provider,
    src__util__storage_repository: storage_repository,
    src__util__storage_provider: storage_provider,
    src__util__auth_validators: auth_validators,
    src__service__AppleSignInAvailable: AppleSignInAvailable,
    src__service__auth_bloc_provider: auth_bloc_provider,
    src__route: route,
    src__screen__WrapperScreen: WrapperScreen,
    src__app: app$
  };
});

//# sourceMappingURL=app.ddc.js.map
