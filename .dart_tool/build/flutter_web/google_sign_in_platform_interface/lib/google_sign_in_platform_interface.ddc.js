define(['dart_sdk', 'packages/quiver/core', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__quiver__core, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$ = packages__quiver__core.core;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const utils = Object.create(dart.library);
  const google_sign_in_platform_interface = Object.create(dart.library);
  const types = Object.create(dart.library);
  const method_channel_google_sign_in = Object.create(dart.library);
  const $_get = dartx._get;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let MapOfString$dynamicToGoogleSignInUserData = () => (MapOfString$dynamicToGoogleSignInUserData = dart.constFn(dart.fnType(types.GoogleSignInUserData, [MapOfString$dynamic()])))();
  let MapOfString$dynamicToGoogleSignInTokenData = () => (MapOfString$dynamicToGoogleSignInTokenData = dart.constFn(dart.fnType(types.GoogleSignInTokenData, [MapOfString$dynamic()])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: types.SignInOption.prototype,
        [_name$]: "SignInOption.standard",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: types.SignInOption.prototype,
        [_name$]: "SignInOption.games",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], types.SignInOption);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C5 || CT.C5
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C4 || CT.C4,
        [MethodChannel_name]: "plugins.flutter.io/google_sign_in"
      });
    },
    get C6() {
      return C6 = dart.constList([], core.String);
    },
    get C7() {
      return C7 = dart.fn(utils.getUserDataFromMap, MapOfString$dynamicToGoogleSignInUserData());
    },
    get C8() {
      return C8 = dart.fn(utils.getTokenDataFromMap, MapOfString$dynamicToGoogleSignInTokenData());
    }
  });
  utils.getUserDataFromMap = function getUserDataFromMap(data) {
    if (data == null) {
      return null;
    }
    return new types.GoogleSignInUserData.new({displayName: core.String._check(data[$_get]("displayName")), email: core.String._check(data[$_get]("email")), id: core.String._check(data[$_get]("id")), photoUrl: core.String._check(data[$_get]("photoUrl")), idToken: core.String._check(data[$_get]("idToken"))});
  };
  utils.getTokenDataFromMap = function getTokenDataFromMap(data) {
    if (data == null) {
      return null;
    }
    return new types.GoogleSignInTokenData.new({idToken: core.String._check(data[$_get]("idToken")), accessToken: core.String._check(data[$_get]("accessToken"))});
  };
  const _verifyProvidesDefaultImplementations = dart.privateName(google_sign_in_platform_interface, "_verifyProvidesDefaultImplementations");
  google_sign_in_platform_interface.GoogleSignInPlatform = class GoogleSignInPlatform extends core.Object {
    get isMock() {
      return false;
    }
    static get instance() {
      return google_sign_in_platform_interface.GoogleSignInPlatform._instance;
    }
    static set instance(instance) {
      if (!dart.test(instance.isMock)) {
        try {
          instance[_verifyProvidesDefaultImplementations]();
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.NoSuchMethodError.is(_)) {
            dart.throw(new core.AssertionError.new("Platform interfaces must not be implemented with `implements`"));
          } else
            throw e;
        }
      }
      google_sign_in_platform_interface.GoogleSignInPlatform._instance = instance;
    }
    [_verifyProvidesDefaultImplementations]() {
    }
    init(opts) {
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      let scopes = opts && 'scopes' in opts ? opts.scopes : null;
      let signInOption = opts && 'signInOption' in opts ? opts.signInOption : null;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      return async.async(dart.void, function* init() {
        dart.throw(new core.UnimplementedError.new("init() has not been implemented."));
      });
    }
    signInSilently() {
      return async.async(types.GoogleSignInUserData, function* signInSilently() {
        dart.throw(new core.UnimplementedError.new("signInSilently() has not been implemented."));
      });
    }
    signIn() {
      return async.async(types.GoogleSignInUserData, function* signIn() {
        dart.throw(new core.UnimplementedError.new("signIn() has not been implemented."));
      });
    }
    getTokens(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let shouldRecoverAuth = opts && 'shouldRecoverAuth' in opts ? opts.shouldRecoverAuth : null;
      return async.async(types.GoogleSignInTokenData, function* getTokens() {
        dart.throw(new core.UnimplementedError.new("getTokens() has not been implemented."));
      });
    }
    signOut() {
      return async.async(dart.void, function* signOut() {
        dart.throw(new core.UnimplementedError.new("signOut() has not been implemented."));
      });
    }
    disconnect() {
      return async.async(dart.void, function* disconnect() {
        dart.throw(new core.UnimplementedError.new("disconnect() has not been implemented."));
      });
    }
    isSignedIn() {
      return async.async(core.bool, function* isSignedIn() {
        dart.throw(new core.UnimplementedError.new("isSignedIn() has not been implemented."));
      });
    }
    clearAuthCache(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return async.async(dart.void, function* clearAuthCache() {
        dart.throw(new core.UnimplementedError.new("clearAuthCache() has not been implemented."));
      });
    }
  };
  (google_sign_in_platform_interface.GoogleSignInPlatform.new = function() {
    ;
  }).prototype = google_sign_in_platform_interface.GoogleSignInPlatform.prototype;
  dart.addTypeTests(google_sign_in_platform_interface.GoogleSignInPlatform);
  dart.setMethodSignature(google_sign_in_platform_interface.GoogleSignInPlatform, () => ({
    __proto__: dart.getMethods(google_sign_in_platform_interface.GoogleSignInPlatform.__proto__),
    [_verifyProvidesDefaultImplementations]: dart.fnType(dart.void, []),
    init: dart.fnType(async.Future$(dart.void), [], {clientId: core.String, hostedDomain: core.String, scopes: core.List$(core.String), signInOption: types.SignInOption}, {}),
    signInSilently: dart.fnType(async.Future$(types.GoogleSignInUserData), []),
    signIn: dart.fnType(async.Future$(types.GoogleSignInUserData), []),
    getTokens: dart.fnType(async.Future$(types.GoogleSignInTokenData), [], {email: core.String, shouldRecoverAuth: core.bool}, {}),
    signOut: dart.fnType(async.Future$(dart.void), []),
    disconnect: dart.fnType(async.Future$(dart.void), []),
    isSignedIn: dart.fnType(async.Future$(core.bool), []),
    clearAuthCache: dart.fnType(async.Future$(dart.void), [], {token: core.String}, {})
  }));
  dart.setGetterSignature(google_sign_in_platform_interface.GoogleSignInPlatform, () => ({
    __proto__: dart.getGetters(google_sign_in_platform_interface.GoogleSignInPlatform.__proto__),
    isMock: core.bool
  }));
  dart.setLibraryUri(google_sign_in_platform_interface.GoogleSignInPlatform, "package:google_sign_in_platform_interface/google_sign_in_platform_interface.dart");
  dart.defineLazy(google_sign_in_platform_interface.GoogleSignInPlatform, {
    /*google_sign_in_platform_interface.GoogleSignInPlatform._instance*/get _instance() {
      return new method_channel_google_sign_in.MethodChannelGoogleSignIn.new();
    },
    set _instance(_) {}
  });
  const _name$ = dart.privateName(types, "_name");
  let C0;
  let C1;
  let C2;
  types.SignInOption = class SignInOption extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (types.SignInOption.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = types.SignInOption.prototype;
  dart.addTypeTests(types.SignInOption);
  dart.setLibraryUri(types.SignInOption, "package:google_sign_in_platform_interface/src/types.dart");
  dart.setFieldSignature(types.SignInOption, () => ({
    __proto__: dart.getFields(types.SignInOption.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(types.SignInOption, ['toString']);
  types.SignInOption.standard = C0 || CT.C0;
  types.SignInOption.games = C1 || CT.C1;
  types.SignInOption.values = C2 || CT.C2;
  const displayName$ = dart.privateName(types, "GoogleSignInUserData.displayName");
  const email$ = dart.privateName(types, "GoogleSignInUserData.email");
  const id$ = dart.privateName(types, "GoogleSignInUserData.id");
  const photoUrl$ = dart.privateName(types, "GoogleSignInUserData.photoUrl");
  const idToken$ = dart.privateName(types, "GoogleSignInUserData.idToken");
  types.GoogleSignInUserData = class GoogleSignInUserData extends core.Object {
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      this[displayName$] = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      this[email$] = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get photoUrl() {
      return this[photoUrl$];
    }
    set photoUrl(value) {
      this[photoUrl$] = value;
    }
    get idToken() {
      return this[idToken$];
    }
    set idToken(value) {
      this[idToken$] = value;
    }
    get hashCode() {
      return core$.hashObjects(JSArrayOfString().of([this.displayName, this.email, this.id, this.photoUrl, this.idToken]));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!types.GoogleSignInUserData.is(other)) return false;
      let otherUserData = types.GoogleSignInUserData._check(other);
      return otherUserData.displayName == this.displayName && otherUserData.email == this.email && otherUserData.id == this.id && otherUserData.photoUrl == this.photoUrl && otherUserData.idToken == this.idToken;
    }
  };
  (types.GoogleSignInUserData.new = function(opts) {
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let photoUrl = opts && 'photoUrl' in opts ? opts.photoUrl : null;
    let idToken = opts && 'idToken' in opts ? opts.idToken : null;
    this[displayName$] = displayName;
    this[email$] = email;
    this[id$] = id;
    this[photoUrl$] = photoUrl;
    this[idToken$] = idToken;
    ;
  }).prototype = types.GoogleSignInUserData.prototype;
  dart.addTypeTests(types.GoogleSignInUserData);
  dart.setLibraryUri(types.GoogleSignInUserData, "package:google_sign_in_platform_interface/src/types.dart");
  dart.setFieldSignature(types.GoogleSignInUserData, () => ({
    __proto__: dart.getFields(types.GoogleSignInUserData.__proto__),
    displayName: dart.fieldType(core.String),
    email: dart.fieldType(core.String),
    id: dart.fieldType(core.String),
    photoUrl: dart.fieldType(core.String),
    idToken: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(types.GoogleSignInUserData, ['_equals']);
  dart.defineExtensionAccessors(types.GoogleSignInUserData, ['hashCode']);
  const idToken$0 = dart.privateName(types, "GoogleSignInTokenData.idToken");
  const accessToken$ = dart.privateName(types, "GoogleSignInTokenData.accessToken");
  types.GoogleSignInTokenData = class GoogleSignInTokenData extends core.Object {
    get idToken() {
      return this[idToken$0];
    }
    set idToken(value) {
      this[idToken$0] = value;
    }
    get accessToken() {
      return this[accessToken$];
    }
    set accessToken(value) {
      this[accessToken$] = value;
    }
    get hashCode() {
      return core$.hash2(this.idToken, this.accessToken);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!types.GoogleSignInTokenData.is(other)) return false;
      let otherTokenData = types.GoogleSignInTokenData._check(other);
      return otherTokenData.idToken == this.idToken && otherTokenData.accessToken == this.accessToken;
    }
  };
  (types.GoogleSignInTokenData.new = function(opts) {
    let idToken = opts && 'idToken' in opts ? opts.idToken : null;
    let accessToken = opts && 'accessToken' in opts ? opts.accessToken : null;
    this[idToken$0] = idToken;
    this[accessToken$] = accessToken;
    ;
  }).prototype = types.GoogleSignInTokenData.prototype;
  dart.addTypeTests(types.GoogleSignInTokenData);
  dart.setLibraryUri(types.GoogleSignInTokenData, "package:google_sign_in_platform_interface/src/types.dart");
  dart.setFieldSignature(types.GoogleSignInTokenData, () => ({
    __proto__: dart.getFields(types.GoogleSignInTokenData.__proto__),
    idToken: dart.fieldType(core.String),
    accessToken: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(types.GoogleSignInTokenData, ['_equals']);
  dart.defineExtensionAccessors(types.GoogleSignInTokenData, ['hashCode']);
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C5;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C4;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C3;
  let C6;
  let C7;
  let C8;
  const channel = dart.privateName(method_channel_google_sign_in, "MethodChannelGoogleSignIn.channel");
  method_channel_google_sign_in.MethodChannelGoogleSignIn = class MethodChannelGoogleSignIn extends google_sign_in_platform_interface.GoogleSignInPlatform {
    get channel() {
      return this[channel];
    }
    set channel(value) {
      this[channel] = value;
    }
    init(opts) {
      let hostedDomain = opts && 'hostedDomain' in opts ? opts.hostedDomain : null;
      let scopes = opts && 'scopes' in opts ? opts.scopes : C6 || CT.C6;
      let signInOption = opts && 'signInOption' in opts ? opts.signInOption : C0 || CT.C0;
      let clientId = opts && 'clientId' in opts ? opts.clientId : null;
      return this.channel.invokeMethod(dart.void, "init", new (IdentityMapOfString$dynamic()).from(["signInOption", dart.toString(signInOption), "scopes", scopes, "hostedDomain", hostedDomain]));
    }
    signInSilently() {
      return this.channel.invokeMapMethod(core.String, dart.dynamic, "signInSilently").then(types.GoogleSignInUserData, C7 || CT.C7);
    }
    signIn() {
      return this.channel.invokeMapMethod(core.String, dart.dynamic, "signIn").then(types.GoogleSignInUserData, C7 || CT.C7);
    }
    getTokens(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let shouldRecoverAuth = opts && 'shouldRecoverAuth' in opts ? opts.shouldRecoverAuth : true;
      return this.channel.invokeMapMethod(core.String, dart.dynamic, "getTokens", new (IdentityMapOfString$dynamic()).from(["email", email, "shouldRecoverAuth", shouldRecoverAuth])).then(types.GoogleSignInTokenData, C8 || CT.C8);
    }
    signOut() {
      return this.channel.invokeMapMethod(core.String, dart.dynamic, "signOut");
    }
    disconnect() {
      return this.channel.invokeMapMethod(core.String, dart.dynamic, "disconnect");
    }
    isSignedIn() {
      return this.channel.invokeMethod(core.bool, "isSignedIn");
    }
    clearAuthCache(opts) {
      let token = opts && 'token' in opts ? opts.token : null;
      return this.channel.invokeMethod(dart.void, "clearAuthCache", new (IdentityMapOfString$String()).from(["token", token]));
    }
  };
  (method_channel_google_sign_in.MethodChannelGoogleSignIn.new = function() {
    this[channel] = C3 || CT.C3;
    ;
  }).prototype = method_channel_google_sign_in.MethodChannelGoogleSignIn.prototype;
  dart.addTypeTests(method_channel_google_sign_in.MethodChannelGoogleSignIn);
  dart.setLibraryUri(method_channel_google_sign_in.MethodChannelGoogleSignIn, "package:google_sign_in_platform_interface/src/method_channel_google_sign_in.dart");
  dart.setFieldSignature(method_channel_google_sign_in.MethodChannelGoogleSignIn, () => ({
    __proto__: dart.getFields(method_channel_google_sign_in.MethodChannelGoogleSignIn.__proto__),
    channel: dart.fieldType(platform_channel.MethodChannel)
  }));
  dart.trackLibraries("packages/google_sign_in_platform_interface/google_sign_in_platform_interface", {
    "package:google_sign_in_platform_interface/src/utils.dart": utils,
    "package:google_sign_in_platform_interface/google_sign_in_platform_interface.dart": google_sign_in_platform_interface,
    "package:google_sign_in_platform_interface/src/types.dart": types,
    "package:google_sign_in_platform_interface/src/method_channel_google_sign_in.dart": method_channel_google_sign_in
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/utils.dart","google_sign_in_platform_interface.dart","src/types.dart","src/method_channel_google_sign_in.dart"],"names":[],"mappings":"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","file":"google_sign_in_platform_interface.ddc.js"}');
  // Exports:
  return {
    src__utils: utils,
    google_sign_in_platform_interface: google_sign_in_platform_interface,
    src__types: types,
    src__method_channel_google_sign_in: method_channel_google_sign_in
  };
});

//# sourceMappingURL=google_sign_in_platform_interface.ddc.js.map
