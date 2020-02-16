define(['dart_sdk', 'packages/google_sign_in_platform_interface/google_sign_in_platform_interface', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__google_sign_in_platform_interface__google_sign_in_platform_interface, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const js_util = dart_sdk.js_util;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const types = packages__google_sign_in_platform_interface__google_sign_in_platform_interface.src__types;
  const google_sign_in_platform_interface = packages__google_sign_in_platform_interface__google_sign_in_platform_interface.google_sign_in_platform_interface;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const utils = Object.create(dart.library);
  const gapiauth2 = Object.create(dart.library);
  const gapi = Object.create(dart.library);
  const load_gapi = Object.create(dart.library);
  const google_sign_in_web = Object.create(dart.library);
  const $onLoad = dartx.onLoad;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $children = dartx.children;
  const $addAll = dartx.addAll;
  const $startsWith = dartx.startsWith;
  const $getAttribute = dartx.getAttribute;
  const $contains = dartx.contains;
  const $any = dartx.any;
  const $join = dartx.join;
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let JSArrayOfFutureOfvoid = () => (JSArrayOfFutureOfvoid = dart.constFn(_interceptors.JSArray$(FutureOfvoid())))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let FutureOfGoogleUser = () => (FutureOfGoogleUser = dart.constFn(async.Future$(dart.anonymousJSType("GoogleUser"))))();
  let dynamicToFutureOfGoogleUser = () => (dynamicToFutureOfGoogleUser = dart.constFn(dart.fnType(FutureOfGoogleUser(), [], [dart.dynamic])))();
  let OfflineAccessOptionsToFuture = () => (OfflineAccessOptionsToFuture = dart.constFn(dart.fnType(async.Future, [], [dart.anonymousJSType("OfflineAccessOptions")])))();
  let FutureOfAuthResponse = () => (FutureOfAuthResponse = dart.constFn(async.Future$(dart.anonymousJSType("AuthResponse"))))();
  let VoidToFutureOfAuthResponse = () => (VoidToFutureOfAuthResponse = dart.constFn(dart.fnType(FutureOfAuthResponse(), [])))();
  let dynamicAnddynamicAnddynamicToFuture = () => (dynamicAnddynamicAnddynamicToFuture = dart.constFn(dart.fnType(async.Future, [], [dart.dynamic, dart.dynamic, dart.dynamic])))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let voidToFutureOfvoid = () => (voidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [dart.void])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let GoogleAuthTodynamic = () => (GoogleAuthTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.lazyJSType(() => dart.global.gapi.auth2.GoogleAuth, "gapi.auth2.GoogleAuth")])))();
  let GoogleAuthToNull = () => (GoogleAuthToNull = dart.constFn(dart.fnType(core.Null, [dart.lazyJSType(() => dart.global.gapi.auth2.GoogleAuth, "gapi.auth2.GoogleAuth")])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.String);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: types.SignInOption.prototype,
        [_name]: "SignInOption.standard",
        index: 0
      });
    }
  });
  utils.injectJSLibraries = function injectJSLibraries(libraries, opts) {
    let t0;
    let target = opts && 'target' in opts ? opts.target : null;
    let loading = JSArrayOfFutureOfvoid().of([]);
    let tags = JSArrayOfHtmlElement().of([]);
    libraries[$forEach](dart.fn(library => {
      let t0;
      let script = (t0 = html.ScriptElement.new(), t0.async = true, t0.defer = true, t0.src = library, t0);
      loading[$add](script[$onLoad].first);
      tags[$add](script);
    }, StringToNull()));
    (t0 = target, t0 == null ? html.querySelector("head") : t0)[$children][$addAll](tags);
    return async.Future.wait(dart.void, loading);
  };
  utils.gapiUserToPluginUserData = function gapiUserToPluginUserData(currentUser) {
    let t0, t0$, t0$0, t0$1, t0$2;
    if (!(currentUser != null)) dart.assertFailed(null, "org-dartlang-app:///packages/google_sign_in_web/src/utils.dart", 35, 10, "currentUser != null");
    let profile = currentUser.getBasicProfile();
    return new types.GoogleSignInUserData.new({displayName: (t0 = profile, t0 == null ? null : t0.getName()), email: (t0$ = profile, t0$ == null ? null : t0$.getEmail()), id: (t0$0 = profile, t0$0 == null ? null : t0$0.getId()), photoUrl: (t0$1 = profile, t0$1 == null ? null : t0$1.getImageUrl()), idToken: (t0$2 = currentUser.getAuthResponse(), t0$2 == null ? null : t0$2.id_token)});
  };
  gapiauth2['GoogleAuthExtensions|signIn'] = function GoogleAuthExtensions$124signIn($this, options = null) {
    let t = $this;
    let tt = dart.anonymousJSType("_GoogleAuth")._check(t);
    return js_util.promiseToFuture(dart.anonymousJSType("GoogleUser"), tt.signIn(options));
  };
  gapiauth2['GoogleAuthExtensions|get#signIn'] = function GoogleAuthExtensions$124get$35signIn($this) {
    return dart.fn((options = null) => gapiauth2['GoogleAuthExtensions|signIn']($this, options), dynamicToFutureOfGoogleUser());
  };
  gapiauth2['GoogleAuthExtensions|grantOfflineAccess'] = function GoogleAuthExtensions$124grantOfflineAccess($this, options = null) {
    let t = $this;
    let tt = dart.anonymousJSType("_GoogleAuth")._check(t);
    return js_util.promiseToFuture(dart.dynamic, tt.grantOfflineAccess(options));
  };
  gapiauth2['GoogleAuthExtensions|get#grantOfflineAccess'] = function GoogleAuthExtensions$124get$35grantOfflineAccess($this) {
    return dart.fn((options = null) => gapiauth2['GoogleAuthExtensions|grantOfflineAccess']($this, options), OfflineAccessOptionsToFuture());
  };
  gapiauth2['GoogleUserExtensions|reloadAuthResponse'] = function GoogleUserExtensions$124reloadAuthResponse($this) {
    let t = $this;
    let tt = dart.anonymousJSType("_GoogleUser")._check(t);
    return js_util.promiseToFuture(dart.anonymousJSType("AuthResponse"), tt.reloadAuthResponse());
  };
  gapiauth2['GoogleUserExtensions|get#reloadAuthResponse'] = function GoogleUserExtensions$124get$35reloadAuthResponse($this) {
    return dart.fn(() => gapiauth2['GoogleUserExtensions|reloadAuthResponse']($this), VoidToFutureOfAuthResponse());
  };
  gapi['HttpRequestPromiseExtensions|then'] = function HttpRequestPromiseExtensions$124then(T, $this, onfulfilled = null, onrejected = null, opt_context = null) {
    let t = $this;
    let tt = dart.lazyJSType(() => dart.global.gapi.client.HttpRequestPromise, "gapi.client.HttpRequestPromise")._check(t);
    return js_util.promiseToFuture(dart.dynamic, tt.then(onfulfilled, onrejected, opt_context));
  };
  gapi['HttpRequestPromiseExtensions|get#then'] = function HttpRequestPromiseExtensions$124get$35then(T, $this) {
    return dart.fn((onfulfilled = null, onrejected = null, opt_context = null) => gapi['HttpRequestPromiseExtensions|then'](T, $this, onfulfilled, onrejected, opt_context), dynamicAnddynamicAnddynamicToFuture());
  };
  let C0;
  load_gapi._addOnloadToScript = function _addOnloadToScript(url) {
    return url[$startsWith]("data:") ? url : dart.str(url) + "?onload=" + "gapiOnloadCallback";
  };
  load_gapi.inject = function inject(url, opts) {
    let t8;
    let libraries = opts && 'libraries' in opts ? opts.libraries : C0 || CT.C0;
    let gapiOnLoad = CompleterOfvoid().new();
    dart.global.gapiOnloadCallback = js.allowInterop(core.Function, dart.fn(() => {
      gapiOnLoad.complete();
    }, VoidToNull()));
    let allLibraries = (t8 = JSArrayOfString().of([load_gapi._addOnloadToScript(url)]), t8[$addAll](libraries), t8);
    return async.Future.wait(dart.void, JSArrayOfFutureOfvoid().of([utils.injectJSLibraries(allLibraries), gapiOnLoad.future]));
  };
  load_gapi.init = function init() {
    let gapiLoadCompleter = CompleterOfvoid().new();
    dart.global.gapi.load("auth2", js.allowInterop(VoidToNull(), dart.fn(() => {
      gapiLoadCompleter.complete();
    }, VoidToNull())));
    return gapiLoadCompleter.future;
  };
  dart.defineLazy(load_gapi, {
    /*load_gapi.kGapiOnloadCallbackFunctionName*/get kGapiOnloadCallbackFunctionName() {
      return "gapiOnloadCallback";
    }
  });
  const _isGapiInitialized = dart.privateName(google_sign_in_web, "_isGapiInitialized");
  const _isAuthInitialized = dart.privateName(google_sign_in_web, "_isAuthInitialized");
  const _isInitCalled = dart.privateName(google_sign_in_web, "_isInitCalled");
  const _autoDetectedClientId = dart.privateName(google_sign_in_web, "_autoDetectedClientId");
  const _assertIsInitCalled = dart.privateName(google_sign_in_web, "_assertIsInitCalled");
  const _name = dart.privateName(types, "_name");
  let C1;
  google_sign_in_web.GoogleSignInPlugin = class GoogleSignInPlugin extends google_sign_in_platform_interface.GoogleSignInPlatform {
    [_assertIsInitCalled]() {
      if (!dart.test(this[_isInitCalled])) {
        dart.throw(new core.StateError.new("GoogleSignInPlugin::init() must be called before any other method in this plugin."));
      }
    }
    get initialized() {
      this[_assertIsInitCalled]();
      return async.Future.wait(dart.void, JSArrayOfFutureOfvoid().of([this[_isGapiInitialized], this[_isAuthInitialized]]));
    }
    static registerWith(registrar) {
      google_sign_in_platform_interface.GoogleSignInPlatform.instance = new google_sign_in_web.GoogleSignInPlugin.new();
    }
    init(opts) {
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      let scopes = opts && 'scopes' in opts ? opts.scopes : C0 || CT.C0;
      let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C1 || CT.C1;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      return async.async(dart.void, (function* init() {
        let t8;
        let appClientId = (t8 = clientId, t8 == null ? this[_autoDetectedClientId] : t8);
        if (!(appClientId != null)) dart.assertFailed("ClientID not set. Either set it on a " + "<meta name=\"google-signin-client_id\" content=\"CLIENT_ID\" /> tag," + " or pass clientId when calling init()", "org-dartlang-app:///packages/google_sign_in_web/google_sign_in_web.dart", 76, 9, "appClientId != null");
        if (!!dart.test(scopes[$any](dart.fn(scope => scope[$contains](" "), StringTobool())))) dart.assertFailed("OAuth 2.0 Scopes for Google APIs can't contain spaces." + "Check https://developers.google.com/identity/protocols/googlescopes " + "for a list of valid OAuth 2.0 scopes.", "org-dartlang-app:///packages/google_sign_in_web/google_sign_in_web.dart", 82, 9, "!scopes.any((String scope) => scope.contains(' '))");
        yield this[_isGapiInitialized];
        let auth = dart.global.gapi.auth2.init({hosted_domain: hostedDomain, scope: scopes[$join](" "), client_id: appClientId});
        let isAuthInitialized = CompleterOfvoid().new();
        this[_isAuthInitialized] = isAuthInitialized.future;
        this[_isInitCalled] = true;
        auth.then(js.allowInterop(GoogleAuthTodynamic(), dart.fn(initializedAuth => {
          isAuthInitialized.complete();
        }, GoogleAuthToNull())), js.allowInterop(dynamicTodynamic(), dart.fn(reason => {
          dart.throw(new message_codec.PlatformException.new({code: "google_sign_in", message: core.String._check(dart.dload(reason, 'error')), details: dart.dload(reason, 'details')}));
        }, dynamicToNull())));
        return null;
      }).bind(this));
    }
    signInSilently() {
      return async.async(types.GoogleSignInUserData, (function* signInSilently() {
        yield this.initialized;
        return utils.gapiUserToPluginUserData(yield dart.global.gapi.auth2.getAuthInstance().currentUser.get());
      }).bind(this));
    }
    signIn() {
      return async.async(types.GoogleSignInUserData, (function* signIn() {
        yield this.initialized;
        return utils.gapiUserToPluginUserData(yield gapiauth2['GoogleAuthExtensions|signIn'](dart.global.gapi.auth2.getAuthInstance()));
      }).bind(this));
    }
    getTokens(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let shouldRecoverAuth = opts && 'shouldRecoverAuth' in opts ? opts.shouldRecoverAuth : null;
      return async.async(types.GoogleSignInTokenData, (function* getTokens() {
        let t8, t8$;
        yield this.initialized;
        let currentUser = (t8$ = (t8 = dart.global.gapi.auth2.getAuthInstance(), t8 == null ? null : t8.currentUser), t8$ == null ? null : t8$.get());
        let response = currentUser.getAuthResponse();
        return new types.GoogleSignInTokenData.new({idToken: response.id_token, accessToken: response.access_token});
      }).bind(this));
    }
    signOut() {
      return async.async(dart.void, (function* signOut() {
        yield this.initialized;
        return dart.global.gapi.auth2.getAuthInstance().signOut();
      }).bind(this));
    }
    disconnect() {
      return async.async(dart.void, (function* disconnect() {
        let t8, t8$;
        yield this.initialized;
        let currentUser = (t8$ = (t8 = dart.global.gapi.auth2.getAuthInstance(), t8 == null ? null : t8.currentUser), t8$ == null ? null : t8$.get());
        return currentUser.disconnect();
      }).bind(this));
    }
    isSignedIn() {
      return async.async(core.bool, (function* isSignedIn() {
        let t8, t8$;
        yield this.initialized;
        let currentUser = (t8$ = (t8 = dart.global.gapi.auth2.getAuthInstance(), t8 == null ? null : t8.currentUser), t8$ == null ? null : t8$.get());
        return currentUser.isSignedIn();
      }).bind(this));
    }
    clearAuthCache(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return async.async(dart.void, (function* clearAuthCache() {
        yield this.initialized;
        return dart.global.gapi.auth2.getAuthInstance().disconnect();
      }).bind(this));
    }
  };
  (google_sign_in_web.GoogleSignInPlugin.new = function() {
    let t8;
    this[_isGapiInitialized] = null;
    this[_isAuthInitialized] = null;
    this[_isInitCalled] = false;
    this[_autoDetectedClientId] = null;
    this[_autoDetectedClientId] = (t8 = html.querySelector(google_sign_in_web._kClientIdMetaSelector), t8 == null ? null : t8[$getAttribute]("content"));
    this[_isGapiInitialized] = load_gapi.inject(google_sign_in_web.gapiUrl).then(dart.void, dart.fn(_ => load_gapi.init(), voidToFutureOfvoid()));
  }).prototype = google_sign_in_web.GoogleSignInPlugin.prototype;
  dart.addTypeTests(google_sign_in_web.GoogleSignInPlugin);
  dart.setMethodSignature(google_sign_in_web.GoogleSignInPlugin, () => ({
    __proto__: dart.getMethods(google_sign_in_web.GoogleSignInPlugin.__proto__),
    [_assertIsInitCalled]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(google_sign_in_web.GoogleSignInPlugin, () => ({
    __proto__: dart.getGetters(google_sign_in_web.GoogleSignInPlugin.__proto__),
    initialized: async.Future$(dart.void)
  }));
  dart.setLibraryUri(google_sign_in_web.GoogleSignInPlugin, "package:google_sign_in_web/google_sign_in_web.dart");
  dart.setFieldSignature(google_sign_in_web.GoogleSignInPlugin, () => ({
    __proto__: dart.getFields(google_sign_in_web.GoogleSignInPlugin.__proto__),
    [_isGapiInitialized]: dart.fieldType(async.Future$(dart.void)),
    [_isAuthInitialized]: dart.fieldType(async.Future$(dart.void)),
    [_isInitCalled]: dart.fieldType(core.bool),
    [_autoDetectedClientId]: dart.fieldType(core.String)
  }));
  dart.defineLazy(google_sign_in_web, {
    /*google_sign_in_web._kClientIdMetaSelector*/get _kClientIdMetaSelector() {
      return "meta[name=google-signin-client_id]";
    },
    /*google_sign_in_web._kClientIdAttributeName*/get _kClientIdAttributeName() {
      return "content";
    },
    /*google_sign_in_web.gapiUrl*/get gapiUrl() {
      return "https://apis.google.com/js/platform.js";
    },
    set gapiUrl(_) {}
  });
  dart.trackLibraries("packages/google_sign_in_web/google_sign_in_web", {
    "package:google_sign_in_web/src/utils.dart": utils,
    "package:google_sign_in_web/src/generated/gapiauth2.dart": gapiauth2,
    "package:google_sign_in_web/src/generated/gapi.dart": gapi,
    "package:google_sign_in_web/src/load_gapi.dart": load_gapi,
    "package:google_sign_in_web/google_sign_in_web.dart": google_sign_in_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/utils.dart","src/generated/gapiauth2.dart","src/generated/gapi.dart","src/load_gapi.dart","google_sign_in_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uDAa4C;;QACtB;AACK,kBAAwB;AACpB,eAAyB;AAUpD,IARF,AAAU,SAAD,WAAS,QAAQ;;AACC,yBAAc,0BACnC,WAAQ,MACR,WAAQ,MACR,SAAM,OAAO;AAEe,MAAhC,AAAQ,OAAD,OAAK,AAAO,AAAO,MAAR;AACF,MAAhB,AAAK,IAAD,OAAK,MAAM;;AAE2C,IAArB,AAAS,CAAxC,KAAP,MAAM,QAAN,OAAU,mBAAmB,kCAAyB,IAAI;AAC3D,UAAc,8BAAK,OAAO;EAC5B;qEAI+D;;AAC7D,UAAO,AAAY,WAAD,IAAI;AACG,kBAAU,AAAY,WAAD;AAC9C,UAAO,wDACQ,OAAO,eAAP,OAAS,6BACf,OAAO,gBAAP,OAAS,6BACZ,OAAO,iBAAP,OAAS,iCACH,OAAO,iBAAP,OAAS,sCACV,AAAY,WAAD,mCAAC,OAAmB;EAE5C;4FCkBsD;AACrC;AACK,wDAAK,CAAC;AACxB,UAAO,6DAAgB,AAAG,EAAD,QAAQ,OAAO;EAC1C;;AALmB,oBACiC,mEADjC,OAAO;;oHAQA;AACX;AACK,wDAAK,CAAC;AACxB,UAAO,uCAAgB,AAAG,EAAD,oBAAoB,OAAO;EACtD;;AALoC,oBACV,+EADU,OAAO;;;AA8T5B;AACK,wDAAK,CAAC;AACxB,UAAO,+DAAgB,AAAG,EAAD;EAC3B;;AAJqB;;sGCpB0E,oBACL,mBAC9E;AACG;AACgB,wHAAK,CAAC;AACnC,UAAO,uCAAgB,AAAG,EAAD,MAAM,WAAW,EAAE,UAAU,EAAE,WAAW;EACrE;;AAPuC,oBACwD,oBACL,mBAC9E,2EAH2B,WACpC,EADoC,UACrC,EADqC,WACpC;;;6DCrV4B;AAAQ,UAAA,AAAI,IAAD,cAAY,WAClD,GAAG,GAC2C,SAA5C,GAAG;EAAyC;qCAKzB;;QAAmB;AAEtB,qBAAa;AAIjC,IAHF,iCAAqB,+BAAa;AAEX,MAArB,AAAW,UAAD;;AAIO,6BAAuB,sBAAC,6BAAmB,GAAG,KAC7D,YAAO,SAAS;AAEpB,UAAc,8BACI,4BAAC,wBAAkB,YAAY,GAAG,AAAW,UAAD;EAChE;;AAKwB,4BAAoB;AAGvC,IAFH,sBAAU,SAAS,8BAAa;AACF,MAA5B,AAAkB,iBAAD;;AAInB,UAAO,AAAkB,kBAAD;EAC1B;;MAlCa,yCAA+B;;;;;;;;;;;;;ACyBxC,qBAAK;AAEqF,QADxF,WAAM,wBACF;;IAER;;AAKuB,MAArB;AACA,YAAc,8BAAK,4BAAC,0BAAoB;IAC1C;wBAKmC;AACmB,MAA/B,kEAAW;IAClC;;UAIsB;UACL;UACA;UACN;AAJM;;AAKF,2BAAuB,KAAT,QAAQ,QAAR,OAAY;AACvC,cACI,AAAY,WAAD,IAAI,yBAAI,AACnB,0CACA,yEACA;AAEJ,aACI,WAAC,AAAO,MAAD,OAAK,QAAQ,SAAU,AAAM,KAAD,YAAU,2CAAK,AAClD,2DACA,yEACA;AAEoB,QAAxB,MAAM;AAEiB,mBAAO,4BAAiB,gBAC9B,YAAY,SAEpB,AAAO,MAAD,QAAM,iBACR,WAAW;AAGR,gCAAoB;AACS,QAA7C,2BAAqB,AAAkB,iBAAD;AAClB,QAApB,sBAAgB;AAiBb,QAfH,AAAK,IAAD,MAAM,uCAAa,QAAkB;AAOX,UAA5B,AAAkB,iBAAD;iCACf,oCAAa,QAAS;AAMvB,UAJD,WAAM,+CACE,8CACU,WAAP,MAAM,sBACC,WAAP,MAAM;;AAInB,cAAO;MACT;;;AAG2C;AACxB,QAAjB,MAAM;AAEN,cAAO,gCACH,MAAM,AAAwB,AAAY;MAChD;;;AAGmC;AAChB,QAAjB,MAAM;AAEN,cAAO,gCAAyB,MAA8B,yCAAxB;MACxC;;;UAIsB;UAAY;AADK;;AAEpB,QAAjB,MAAM;AAEiB,8FACnB,OAAyB,+BAAzB,OAAsC;AACjB,uBAAW,AAAY,WAAD;AAE/C,cAAO,+CACM,AAAS,QAAD,wBAAwB,AAAS,QAAD;MACvD;;;AAGoB;AACD,QAAjB,MAAM;AAEN,cAAO,AAAwB;MACjC;;;AAGuB;;AACJ,QAAjB,MAAM;AAEiB,8FACnB,OAAyB,+BAAzB,OAAsC;AAC1C,cAAO,AAAY,YAAD;MACpB;;;AAGuB;;AACJ,QAAjB,MAAM;AAEiB,8FACnB,OAAyB,+BAAzB,OAAsC;AAC1C,cAAO,AAAY,YAAD;MACpB;;;UAGoC;AAAT;AACR,QAAjB,MAAM;AAEN,cAAO,AAAwB;MACjC;;;;;IA1Ia;IACA;IACR,sBAAgB;IAmBd;AA1BsC,IAF3C,oCAAwB,mBACL,yDADK,OAElB;AAE4D,IAAlE,2BAAqB,AAAqB,iBAAT,4CAAc,QAAC,KAAM;EACxD;;;;;;;;;;;;;;;;;;;MApBW,yCAAsB;;;MACtB,0CAAuB;;;MAK7B,0BAAO;YAAG","file":"google_sign_in_web.ddc.js"}');
  // Exports:
  return {
    src__utils: utils,
    src__generated__gapiauth2: gapiauth2,
    src__generated__gapi: gapi,
    src__load_gapi: load_gapi,
    google_sign_in_web: google_sign_in_web
  };
});

//# sourceMappingURL=google_sign_in_web.ddc.js.map
