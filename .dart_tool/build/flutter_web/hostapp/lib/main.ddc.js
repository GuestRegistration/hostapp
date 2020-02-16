define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/hostapp/src/app', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__hostapp__src__app, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const page = packages__flutter__material.src__material__page;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const theme = packages__flutter__material.src__material__theme;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const locator = packages__hostapp__src__app.src__locator;
  const dialog_service = packages__hostapp__src__app.src__service__dialog_service;
  const dialog_manager = packages__hostapp__src__app.src__managers__dialog_manager;
  const navigation_service = packages__hostapp__src__app.src__service__navigation_service;
  const Dashboard = packages__hostapp__src__app.src__screen__Dashboard;
  const route = packages__hostapp__src__app.src__route;
  const system_chrome = packages__flutter__src__gestures__arena.src__services__system_chrome;
  const main = Object.create(dart.library);
  let BuildContextToDialogManager = () => (BuildContextToDialogManager = dart.constFn(dart.fnType(dialog_manager.DialogManager, [framework.BuildContext])))();
  let RouteSettingsToMaterialPageRoute = () => (RouteSettingsToMaterialPageRoute = dart.constFn(dart.fnType(page.MaterialPageRoute, [navigator.RouteSettings])))();
  let BuildContextAndWidgetToNavigator = () => (BuildContextAndWidgetToNavigator = dart.constFn(dart.fnType(navigator.Navigator, [framework.BuildContext, framework.Widget])))();
  let RouteSettingsToRoute = () => (RouteSettingsToRoute = dart.constFn(dart.fnType(navigator.Route, [navigator.RouteSettings])))();
  let JSArrayOfDeviceOrientation = () => (JSArrayOfDeviceOrientation = dart.constFn(_interceptors.JSArray$(system_chrome.DeviceOrientation)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 49,
        [_Location_line]: 35,
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
        [_Location_column]: 35,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/main.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onGenerateRoute",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/main.dart"
      });
    },
    get C8() {
      return C8 = dart.constList([], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/main.dart"
      });
    },
    get C9() {
      return C9 = dart.fn(route.generateRoute, RouteSettingsToRoute());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "navigatorKey",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onGenerateRoute",
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/main.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/hostapp/main.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C8;
  let C7;
  let C9;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C11;
  let C10;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "HandyWorker", debugShowCheckedModeBanner: false, builder: dart.fn((context, child) => new navigator.Navigator.new({key: locator.locator.call(dialog_service.DialogService).dialogNavigationKey, onGenerateRoute: dart.fn(settings => new page.MaterialPageRoute.new({builder: dart.fn(context => new dialog_manager.DialogManager.new({child: child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToDialogManager())}), RouteSettingsToMaterialPageRoute()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), BuildContextAndWidgetToNavigator()), navigatorKey: locator.locator.call(navigation_service.NavigationService).navigationKey, theme: theme_data.ThemeData.new({primaryColor: new ui.Color.fromARGB(255, 9, 202, 172), backgroundColor: new ui.Color.fromARGB(255, 26, 27, 30), textTheme: theme.Theme.of(context).textTheme.apply({fontFamily: "Open Sans"})}), home: new Dashboard.Dashboard.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), onGenerateRoute: C9 || CT.C9, $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    }
  };
  (main.MyApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:hostapp/main.dart");
  let C19;
  main.main = function main$() {
    return async.async(dart.void, function* main$() {
      binding.WidgetsFlutterBinding.ensureInitialized();
      locator.setupLocator();
      system_chrome.SystemChrome.setPreferredOrientations(JSArrayOfDeviceOrientation().of([system_chrome.DeviceOrientation.portraitUp, system_chrome.DeviceOrientation.portraitDown, system_chrome.DeviceOrientation.landscapeLeft, system_chrome.DeviceOrientation.landscapeRight]));
      binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C19 || CT.C19}));
    });
  };
  dart.trackLibraries("packages/hostapp/main", {
    "package:hostapp/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA2B4B;AACxB,YAAO,iCACE,2CACqB,gBACnB,SAAC,SAAS,UAAU,kCACtB,AAAO,AAAkB,yFACb,QAAC,YAAa,yCAClB,QAAC,WAAY,6CAAqB,KAAK,0OAExC,AAAO,AAAsB,iFACpC,wCACe,sBAAS,KAAK,GAAG,KAAK,uBACnB,sBAAS,KAAK,IAAI,IAAI,gBAC5B,AAAY,AAAU,eAAnB,OAAO,+BACb,uBAGV;IAGV;;;;;;EACF;;;;;;;;;AAnCS;AACkC,MAAnB;AACR,MAAd;AAME,MALW,oDAAyB,iCAClB,4CACA,8CACA,+CACA;AAEL,MAAf,eAAO;IACT","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
