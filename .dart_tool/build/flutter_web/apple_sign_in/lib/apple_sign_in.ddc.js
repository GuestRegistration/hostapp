define(['dart_sdk', 'packages/apple_sign_in/apple_id_request', 'packages/apple_sign_in/apple_id_credential', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__apple_sign_in__apple_id_request, packages__apple_sign_in__apple_id_credential, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const apple_id_request = packages__apple_sign_in__apple_id_request.apple_id_request;
  const apple_id_credential = packages__apple_sign_in__apple_id_credential.apple_id_credential;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const apple_sign_in = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $_get = dartx._get;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let AuthorizationRequestToMapOfString$dynamic = () => (AuthorizationRequestToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [apple_id_request.AuthorizationRequest])))();
  let ListOfMapOfString$dynamic = () => (ListOfMapOfString$dynamic = dart.constFn(core.List$(MapOfString$dynamic())))();
  let IdentityMapOfString$ListOfMapOfString$dynamic = () => (IdentityMapOfString$ListOfMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, ListOfMapOfString$dynamic())))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "dev.gilder.tom/apple_sign_in"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform_channel.EventChannel.prototype,
        [EventChannel__binaryMessenger]: null,
        [EventChannel_codec]: C1 || CT.C1,
        [EventChannel_name]: "dev.gilder.tom/apple_sign_in_events"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: apple_sign_in.CredentialStatus.prototype,
        [_name$]: "CredentialStatus.revoked",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: apple_sign_in.CredentialStatus.prototype,
        [_name$]: "CredentialStatus.authorized",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: apple_sign_in.CredentialStatus.prototype,
        [_name$]: "CredentialStatus.notFound",
        index: 2
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: apple_sign_in.CredentialStatus.prototype,
        [_name$]: "CredentialStatus.transferred",
        index: 3
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: apple_sign_in.CredentialStatus.prototype,
        [_name$]: "CredentialStatus.error",
        index: 4
      });
    },
    get C9() {
      return C9 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], apple_sign_in.CredentialStatus);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: apple_sign_in.AuthorizationStatus.prototype,
        [_name$]: "AuthorizationStatus.authorized",
        index: 0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: apple_sign_in.AuthorizationStatus.prototype,
        [_name$]: "AuthorizationStatus.cancelled",
        index: 1
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: apple_sign_in.AuthorizationStatus.prototype,
        [_name$]: "AuthorizationStatus.error",
        index: 2
      });
    },
    get C13() {
      return C13 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], apple_sign_in.AuthorizationStatus);
    }
  });
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C2;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C1;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C0;
  const EventChannel__binaryMessenger = dart.privateName(platform_channel, "EventChannel._binaryMessenger");
  const EventChannel_codec = dart.privateName(platform_channel, "EventChannel.codec");
  const EventChannel_name = dart.privateName(platform_channel, "EventChannel.name");
  let C3;
  apple_sign_in.AppleSignIn = class AppleSignIn extends core.Object {
    static get onCredentialRevoked() {
      if (apple_sign_in.AppleSignIn._onCredentialRevoked == null) {
        apple_sign_in.AppleSignIn._onCredentialRevoked = apple_sign_in.AppleSignIn._eventChannel.receiveBroadcastStream();
      }
      return apple_sign_in.AppleSignIn._onCredentialRevoked;
    }
    static performRequests(requests) {
      return async.async(apple_sign_in.AuthorizationResult, function* performRequests() {
        let result = (yield apple_sign_in.AppleSignIn._methodChannel.invokeMethod(dart.dynamic, "performRequests", new (IdentityMapOfString$ListOfMapOfString$dynamic()).from(["requests", requests[$map](MapOfString$dynamic(), dart.fn(request => request.toMap(), AuthorizationRequestToMapOfString$dynamic()))[$toList]()])));
        let status = dart.dsend(result, '_get', ["status"]);
        switch (status) {
          case "authorized":
          {
            return apple_sign_in.AppleSignIn._makeAuthorizationResult(core.Map._check(result));
            break;
          }
          case "error":
          {
            let error = apple_sign_in.NsError.fromMap(core.Map._check(dart.dsend(result, '_get', ["error"])));
            if (error.code === 1001) {
              return new apple_sign_in.AuthorizationResult.new({status: apple_sign_in.AuthorizationStatus.cancelled});
            }
            return new apple_sign_in.AuthorizationResult.new({status: apple_sign_in.AuthorizationStatus.error, error: apple_sign_in.NsError.fromMap(core.Map._check(dart.dsend(result, '_get', ["error"])))});
            break;
          }
        }
        dart.throw("performRequests: Unknown status returned: '" + dart.str(status) + "'");
      });
    }
    static getCredentialState(userId) {
      return async.async(apple_sign_in.CredentialState, function* getCredentialState() {
        if (!(userId != null)) dart.assertFailed("Must provide userId", "org-dartlang-app:///packages/apple_sign_in/apple_sign_in.dart", 73, 12, "userId != null");
        let result = (yield apple_sign_in.AppleSignIn._methodChannel.invokeMethod(dart.dynamic, "getCredentialState", new (IdentityMapOfString$String()).from(["userId", userId])));
        let credentialState = dart.dsend(result, '_get', ["credentialState"]);
        switch (credentialState) {
          case "error":
          {
            return new apple_sign_in.CredentialState.new({status: apple_sign_in.CredentialStatus.error, error: apple_sign_in.NsError.fromMap(core.Map._check(dart.dsend(result, '_get', ["error"])))});
          }
          case "revoked":
          {
            return new apple_sign_in.CredentialState.new({status: apple_sign_in.CredentialStatus.revoked});
          }
          case "authorized":
          {
            return new apple_sign_in.CredentialState.new({status: apple_sign_in.CredentialStatus.authorized});
          }
          case "notFound":
          {
            return new apple_sign_in.CredentialState.new({status: apple_sign_in.CredentialStatus.notFound});
          }
          case "transferred":
          {
            return new apple_sign_in.CredentialState.new({status: apple_sign_in.CredentialStatus.transferred});
          }
        }
        dart.throw("Unknown credentialState: '" + dart.str(credentialState) + "'");
      });
    }
    static isAvailable() {
      return async.async(core.bool, function* isAvailable() {
        if (!dart.test(io.Platform.isIOS)) {
          return false;
        }
        let result = (yield apple_sign_in.AppleSignIn._methodChannel.invokeMethod(dart.dynamic, "isAvailable"));
        let isAvailable = dart.equals(dart.dsend(result, '_get', ["isAvailable"]), 1);
        if (!(isAvailable !== null)) dart.assertFailed(null, "org-dartlang-app:///packages/apple_sign_in/apple_sign_in.dart", 109, 12, "isAvailable != null");
        return isAvailable;
      });
    }
    static _makeAuthorizationResult(params) {
      switch (params[$_get]("credentialType")) {
        case "ASAuthorizationAppleIDCredential":
        {
          let credential = core.Map._check(params[$_get]("credential"));
          if (!(credential != null)) dart.assertFailed(null, "org-dartlang-app:///packages/apple_sign_in/apple_sign_in.dart", 117, 16, "credential != null");
          return new apple_sign_in.AuthorizationResult.new({status: apple_sign_in.AuthorizationStatus.authorized, credential: apple_id_credential.AppleIdCredential.fromMap(credential)});
          break;
        }
        default:
        {
          dart.throw("Unknown credentials type");
        }
      }
    }
  };
  (apple_sign_in.AppleSignIn.new = function() {
    ;
  }).prototype = apple_sign_in.AppleSignIn.prototype;
  dart.addTypeTests(apple_sign_in.AppleSignIn);
  dart.setLibraryUri(apple_sign_in.AppleSignIn, "package:apple_sign_in/apple_sign_in.dart");
  dart.defineLazy(apple_sign_in.AppleSignIn, {
    /*apple_sign_in.AppleSignIn._methodChannel*/get _methodChannel() {
      return C0 || CT.C0;
    },
    /*apple_sign_in.AppleSignIn._eventChannel*/get _eventChannel() {
      return C3 || CT.C3;
    },
    /*apple_sign_in.AppleSignIn._errorCodeCancelled*/get _errorCodeCancelled() {
      return 1001;
    },
    /*apple_sign_in.AppleSignIn._onCredentialRevoked*/get _onCredentialRevoked() {
      return null;
    },
    set _onCredentialRevoked(_) {}
  });
  const status$ = dart.privateName(apple_sign_in, "CredentialState.status");
  const error$ = dart.privateName(apple_sign_in, "CredentialState.error");
  apple_sign_in.CredentialState = class CredentialState extends core.Object {
    get status() {
      return this[status$];
    }
    set status(value) {
      super.status = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
  };
  (apple_sign_in.CredentialState.new = function(opts) {
    let status = opts && 'status' in opts ? opts.status : null;
    let error = opts && 'error' in opts ? opts.error : null;
    this[status$] = status;
    this[error$] = error;
    ;
  }).prototype = apple_sign_in.CredentialState.prototype;
  dart.addTypeTests(apple_sign_in.CredentialState);
  dart.setLibraryUri(apple_sign_in.CredentialState, "package:apple_sign_in/apple_sign_in.dart");
  dart.setFieldSignature(apple_sign_in.CredentialState, () => ({
    __proto__: dart.getFields(apple_sign_in.CredentialState.__proto__),
    status: dart.finalFieldType(apple_sign_in.CredentialStatus),
    error: dart.finalFieldType(apple_sign_in.NsError)
  }));
  const code$ = dart.privateName(apple_sign_in, "NsError.code");
  const domain$ = dart.privateName(apple_sign_in, "NsError.domain");
  const localizedDescription$ = dart.privateName(apple_sign_in, "NsError.localizedDescription");
  const localizedRecoverySuggestion$ = dart.privateName(apple_sign_in, "NsError.localizedRecoverySuggestion");
  const localizedFailureReason$ = dart.privateName(apple_sign_in, "NsError.localizedFailureReason");
  apple_sign_in.NsError = class NsError extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get domain() {
      return this[domain$];
    }
    set domain(value) {
      super.domain = value;
    }
    get localizedDescription() {
      return this[localizedDescription$];
    }
    set localizedDescription(value) {
      super.localizedDescription = value;
    }
    get localizedRecoverySuggestion() {
      return this[localizedRecoverySuggestion$];
    }
    set localizedRecoverySuggestion(value) {
      super.localizedRecoverySuggestion = value;
    }
    get localizedFailureReason() {
      return this[localizedFailureReason$];
    }
    set localizedFailureReason(value) {
      super.localizedFailureReason = value;
    }
    toString() {
      return this.localizedDescription;
    }
    static fromMap(map) {
      if (!(map != null)) dart.assertFailed(null, "org-dartlang-app:///packages/apple_sign_in/apple_sign_in.dart", 163, 12, "map != null");
      return new apple_sign_in.NsError.new({code: core.int._check(map[$_get]("code")), domain: core.String._check(map[$_get]("domain")), localizedDescription: core.String._check(map[$_get]("localizedDescription")), localizedRecoverySuggestion: core.String._check(map[$_get]("localizedRecoverySuggestion")), localizedFailureReason: core.String._check(map[$_get]("localizedFailureReason"))});
    }
  };
  (apple_sign_in.NsError.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let domain = opts && 'domain' in opts ? opts.domain : null;
    let localizedDescription = opts && 'localizedDescription' in opts ? opts.localizedDescription : null;
    let localizedRecoverySuggestion = opts && 'localizedRecoverySuggestion' in opts ? opts.localizedRecoverySuggestion : null;
    let localizedFailureReason = opts && 'localizedFailureReason' in opts ? opts.localizedFailureReason : null;
    this[code$] = code;
    this[domain$] = domain;
    this[localizedDescription$] = localizedDescription;
    this[localizedRecoverySuggestion$] = localizedRecoverySuggestion;
    this[localizedFailureReason$] = localizedFailureReason;
    ;
  }).prototype = apple_sign_in.NsError.prototype;
  dart.addTypeTests(apple_sign_in.NsError);
  dart.setLibraryUri(apple_sign_in.NsError, "package:apple_sign_in/apple_sign_in.dart");
  dart.setFieldSignature(apple_sign_in.NsError, () => ({
    __proto__: dart.getFields(apple_sign_in.NsError.__proto__),
    code: dart.finalFieldType(core.int),
    domain: dart.finalFieldType(core.String),
    localizedDescription: dart.finalFieldType(core.String),
    localizedRecoverySuggestion: dart.finalFieldType(core.String),
    localizedFailureReason: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(apple_sign_in.NsError, ['toString']);
  const _name$ = dart.privateName(apple_sign_in, "_name");
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  apple_sign_in.CredentialStatus = class CredentialStatus extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (apple_sign_in.CredentialStatus.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = apple_sign_in.CredentialStatus.prototype;
  dart.addTypeTests(apple_sign_in.CredentialStatus);
  dart.setLibraryUri(apple_sign_in.CredentialStatus, "package:apple_sign_in/apple_sign_in.dart");
  dart.setFieldSignature(apple_sign_in.CredentialStatus, () => ({
    __proto__: dart.getFields(apple_sign_in.CredentialStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(apple_sign_in.CredentialStatus, ['toString']);
  apple_sign_in.CredentialStatus.revoked = C4 || CT.C4;
  apple_sign_in.CredentialStatus.authorized = C5 || CT.C5;
  apple_sign_in.CredentialStatus.notFound = C6 || CT.C6;
  apple_sign_in.CredentialStatus.transferred = C7 || CT.C7;
  apple_sign_in.CredentialStatus.error = C8 || CT.C8;
  apple_sign_in.CredentialStatus.values = C9 || CT.C9;
  const status$0 = dart.privateName(apple_sign_in, "AuthorizationResult.status");
  const credential$ = dart.privateName(apple_sign_in, "AuthorizationResult.credential");
  const error$0 = dart.privateName(apple_sign_in, "AuthorizationResult.error");
  apple_sign_in.AuthorizationResult = class AuthorizationResult extends core.Object {
    get status() {
      return this[status$0];
    }
    set status(value) {
      super.status = value;
    }
    get credential() {
      return this[credential$];
    }
    set credential(value) {
      super.credential = value;
    }
    get error() {
      return this[error$0];
    }
    set error(value) {
      super.error = value;
    }
  };
  (apple_sign_in.AuthorizationResult.new = function(opts) {
    let status = opts && 'status' in opts ? opts.status : null;
    let credential = opts && 'credential' in opts ? opts.credential : null;
    let error = opts && 'error' in opts ? opts.error : null;
    this[status$0] = status;
    this[credential$] = credential;
    this[error$0] = error;
    ;
  }).prototype = apple_sign_in.AuthorizationResult.prototype;
  dart.addTypeTests(apple_sign_in.AuthorizationResult);
  dart.setLibraryUri(apple_sign_in.AuthorizationResult, "package:apple_sign_in/apple_sign_in.dart");
  dart.setFieldSignature(apple_sign_in.AuthorizationResult, () => ({
    __proto__: dart.getFields(apple_sign_in.AuthorizationResult.__proto__),
    status: dart.finalFieldType(apple_sign_in.AuthorizationStatus),
    credential: dart.finalFieldType(apple_id_credential.AppleIdCredential),
    error: dart.finalFieldType(apple_sign_in.NsError)
  }));
  let C10;
  let C11;
  let C12;
  let C13;
  apple_sign_in.AuthorizationStatus = class AuthorizationStatus extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (apple_sign_in.AuthorizationStatus.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = apple_sign_in.AuthorizationStatus.prototype;
  dart.addTypeTests(apple_sign_in.AuthorizationStatus);
  dart.setLibraryUri(apple_sign_in.AuthorizationStatus, "package:apple_sign_in/apple_sign_in.dart");
  dart.setFieldSignature(apple_sign_in.AuthorizationStatus, () => ({
    __proto__: dart.getFields(apple_sign_in.AuthorizationStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(apple_sign_in.AuthorizationStatus, ['toString']);
  apple_sign_in.AuthorizationStatus.authorized = C10 || CT.C10;
  apple_sign_in.AuthorizationStatus.cancelled = C11 || CT.C11;
  apple_sign_in.AuthorizationStatus.error = C12 || CT.C12;
  apple_sign_in.AuthorizationStatus.values = C13 || CT.C13;
  dart.trackLibraries("packages/apple_sign_in/apple_sign_in", {
    "package:apple_sign_in/apple_sign_in.dart": apple_sign_in
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["apple_sign_in.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwBI,UAAI,AAAqB,kDAAG;AACmC,QAA7D,iDAAuB,AAAc;;AAGvC,YAAO;IACT;2BAW+B;AADmB;AAE1C,sBAAS,MAAM,AAAe,oEAClC,mBACA,4DAAC,YAAY,AAAS,AAAkC,QAAnC,8BAAK,QAAC,WAAY,AAAQ,OAAD;AAE1C,qBAAe,WAAN,MAAM,WAAC;AAEtB,gBAAQ,MAAM;;;AAEV,kBAAO,oEAAyB,MAAM;AACtC;;;;AAGM,wBAAgB,8CAAc,WAAN,MAAM,WAAC;AAErC,gBAAI,AAAM,AAAK,KAAN;AACP,oBAAO,oDACuB;;AAIhC,kBAAO,oDACyB,gDACb,8CAAc,WAAN,MAAM,WAAC;AAClC;;;AAGuD,QAA3D,WAAM,AAAqD,yDAAR,MAAM;MAC3D;;8BAGyD;AAAR;AAC/C,cAAO,AAAO,MAAD,IAAI,yBAAM;AAEjB,sBAAS,MAAM,AAChB,oEAAa,sBAAsB,yCAAC,UAAU,MAAM;AACnD,8BAAwB,WAAN,MAAM,WAAC;AAE/B,gBAAQ,eAAe;;;AAEnB,kBAAO,gDACsB,6CACV,8CAAc,WAAN,MAAM,WAAC;;;;AAGlC,kBAAO,gDAAyC;;;;AAGhD,kBAAO,gDAAyC;;;;AAGhD,kBAAO,gDAAyC;;;;AAGhD,kBAAO,gDAAyC;;;AAGD,QAAnD,WAAM,AAA6C,wCAAjB,eAAe;MACnD;;;AAG+B;AAC7B,uBAAc;AACZ,gBAAO;;AAGH,sBAAS,MAAM,AAAe,oEAAa;AAC3C,0BAAoC,YAAhB,WAAN,MAAM,WAAC,iBAAkB;AAC7C,cAAO,AAAY,WAAD,KAAI;AACtB,cAAO,YAAW;MACpB;;oCAEwD;AACtD,cAAQ,AAAM,MAAA,QAAC;;;AAED,2CAAa,AAAM,MAAA,QAAC;AAC9B,gBAAO,AAAW,UAAD,IAAI;AAErB,gBAAO,oDACyB,0DACE,8CAAQ,UAAU;AAEpD;;;;AAGgC,UAAhC,WAAM;;;IAEZ;;;;EACF;;;;MAnH6B,wCAAc;;;MAEf,uCAAa;;;MAG1B,6CAAmB;;;MAEZ,8CAAoB;;;;;;;;IAgHjB;;;;;;IAET;;;;;;;;QAEwB;QAAa;IAAb;IAAa;;EAAO;;;;;;;;;;;;;;IAKhD;;;;;;IAEG;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;;AAGQ;IAAoB;mBASb;AAC1B,YAAO,AAAI,GAAD,IAAI;AAEd,YAAO,sDACC,AAAG,GAAA,QAAC,qCACF,AAAG,GAAA,QAAC,qDACU,AAAG,GAAA,QAAC,0EACG,AAAG,GAAA,QAAC,4EACT,AAAG,GAAA,QAAC;IAEhC;;;QAhBU;QACD;QACA;QACA;QACA;IAJC;IACD;IACA;IACA;IACA;;EAAwB;;;;;;;;;;;;;;;;;;;;;;IA6BnC;;wDAbK;;;;EAaL;;;;;;;;;;;;;;;;;;;IAK4B;;;;;;IAEF;;;;;;IAEV;;;;;;;;QAGG;QACV;QACA;IAFU;IACV;IACA;;EACL;;;;;;;;;;;;;;;;IAGoD;;2DAAnD;;;;EAAmD","file":"apple_sign_in.ddc.js"}');
  // Exports:
  return {
    apple_sign_in: apple_sign_in
  };
});

//# sourceMappingURL=apple_sign_in.ddc.js.map
