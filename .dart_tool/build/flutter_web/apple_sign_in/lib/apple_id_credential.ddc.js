define(['dart_sdk', 'packages/apple_sign_in/scope'], function(dart_sdk, packages__apple_sign_in__scope) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scope$ = packages__apple_sign_in__scope.scope;
  const apple_id_credential = Object.create(dart.library);
  const $_get = dartx._get;
  const $containsKey = dartx.containsKey;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfScope = () => (JSArrayOfScope = dart.constFn(_interceptors.JSArray$(scope$.Scope)))();
  let dynamicToScope = () => (dynamicToScope = dart.constFn(dart.fnType(scope$.Scope, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: apple_id_credential.UserDetectionStatus.prototype,
        [_name$]: "UserDetectionStatus.unsupported",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: apple_id_credential.UserDetectionStatus.prototype,
        [_name$]: "UserDetectionStatus.unknown",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: apple_id_credential.UserDetectionStatus.prototype,
        [_name$]: "UserDetectionStatus.likelyReal",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], apple_id_credential.UserDetectionStatus);
    }
  });
  const identityToken$ = dart.privateName(apple_id_credential, "AppleIdCredential.identityToken");
  const authorizationCode$ = dart.privateName(apple_id_credential, "AppleIdCredential.authorizationCode");
  const state$ = dart.privateName(apple_id_credential, "AppleIdCredential.state");
  const user$ = dart.privateName(apple_id_credential, "AppleIdCredential.user");
  const authorizedScopes$ = dart.privateName(apple_id_credential, "AppleIdCredential.authorizedScopes");
  const fullName$ = dart.privateName(apple_id_credential, "AppleIdCredential.fullName");
  const email$ = dart.privateName(apple_id_credential, "AppleIdCredential.email");
  const realUserStatus$ = dart.privateName(apple_id_credential, "AppleIdCredential.realUserStatus");
  apple_id_credential.AppleIdCredential = class AppleIdCredential extends core.Object {
    get identityToken() {
      return this[identityToken$];
    }
    set identityToken(value) {
      super.identityToken = value;
    }
    get authorizationCode() {
      return this[authorizationCode$];
    }
    set authorizationCode(value) {
      super.authorizationCode = value;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
    get user() {
      return this[user$];
    }
    set user(value) {
      super.user = value;
    }
    get authorizedScopes() {
      return this[authorizedScopes$];
    }
    set authorizedScopes(value) {
      super.authorizedScopes = value;
    }
    get fullName() {
      return this[fullName$];
    }
    set fullName(value) {
      super.fullName = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    get realUserStatus() {
      return this[realUserStatus$];
    }
    set realUserStatus(value) {
      super.realUserStatus = value;
    }
    static fromMap(map) {
      if (!(map != null)) dart.assertFailed(null, "org-dartlang-app:///packages/apple_sign_in/apple_id_credential.dart", 43, 12, "map != null");
      return new apple_id_credential.AppleIdCredential.new({identityToken: typed_data.Uint8List._check(map[$_get]("identityToken")), authorizationCode: typed_data.Uint8List._check(map[$_get]("authorizationCode")), state: core.String._check(map[$_get]("state")), user: core.String._check(map[$_get]("user")), authorizedScopes: apple_id_credential.AppleIdCredential._scopesFromList(core.List._check(map[$_get]("authorizedScopes"))), email: core.String._check(map[$_get]("email")), realUserStatus: dart.test(map[$containsKey]("realUserStatus")) ? apple_id_credential.UserDetectionStatus.values[$_get](core.int._check(map[$_get]("realUserStatus"))) : apple_id_credential.UserDetectionStatus.unsupported, fullName: apple_id_credential.PersonNameComponents.fromMap(core.Map._check(map[$_get]("fullName")))});
    }
    static _scopesFromList(list) {
      if (list == null) {
        return JSArrayOfScope().of([]);
      }
      return list[$map](scope$.Scope, dart.fn(scope => new scope$.Scope.rawValue(core.String._check(scope)), dynamicToScope()))[$toList]();
    }
  };
  (apple_id_credential.AppleIdCredential.new = function(opts) {
    let identityToken = opts && 'identityToken' in opts ? opts.identityToken : null;
    let authorizationCode = opts && 'authorizationCode' in opts ? opts.authorizationCode : null;
    let state = opts && 'state' in opts ? opts.state : null;
    let user = opts && 'user' in opts ? opts.user : null;
    let authorizedScopes = opts && 'authorizedScopes' in opts ? opts.authorizedScopes : null;
    let fullName = opts && 'fullName' in opts ? opts.fullName : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let realUserStatus = opts && 'realUserStatus' in opts ? opts.realUserStatus : null;
    this[identityToken$] = identityToken;
    this[authorizationCode$] = authorizationCode;
    this[state$] = state;
    this[user$] = user;
    this[authorizedScopes$] = authorizedScopes;
    this[fullName$] = fullName;
    this[email$] = email;
    this[realUserStatus$] = realUserStatus;
    ;
  }).prototype = apple_id_credential.AppleIdCredential.prototype;
  dart.addTypeTests(apple_id_credential.AppleIdCredential);
  dart.setLibraryUri(apple_id_credential.AppleIdCredential, "package:apple_sign_in/apple_id_credential.dart");
  dart.setFieldSignature(apple_id_credential.AppleIdCredential, () => ({
    __proto__: dart.getFields(apple_id_credential.AppleIdCredential.__proto__),
    identityToken: dart.finalFieldType(typed_data.Uint8List),
    authorizationCode: dart.finalFieldType(typed_data.Uint8List),
    state: dart.finalFieldType(core.String),
    user: dart.finalFieldType(core.String),
    authorizedScopes: dart.finalFieldType(core.List$(scope$.Scope)),
    fullName: dart.finalFieldType(apple_id_credential.PersonNameComponents),
    email: dart.finalFieldType(core.String),
    realUserStatus: dart.finalFieldType(apple_id_credential.UserDetectionStatus)
  }));
  const _name$ = dart.privateName(apple_id_credential, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  apple_id_credential.UserDetectionStatus = class UserDetectionStatus extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (apple_id_credential.UserDetectionStatus.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = apple_id_credential.UserDetectionStatus.prototype;
  dart.addTypeTests(apple_id_credential.UserDetectionStatus);
  dart.setLibraryUri(apple_id_credential.UserDetectionStatus, "package:apple_sign_in/apple_id_credential.dart");
  dart.setFieldSignature(apple_id_credential.UserDetectionStatus, () => ({
    __proto__: dart.getFields(apple_id_credential.UserDetectionStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(apple_id_credential.UserDetectionStatus, ['toString']);
  apple_id_credential.UserDetectionStatus.unsupported = C0 || CT.C0;
  apple_id_credential.UserDetectionStatus.unknown = C1 || CT.C1;
  apple_id_credential.UserDetectionStatus.likelyReal = C2 || CT.C2;
  apple_id_credential.UserDetectionStatus.values = C3 || CT.C3;
  const namePrefix$ = dart.privateName(apple_id_credential, "PersonNameComponents.namePrefix");
  const givenName$ = dart.privateName(apple_id_credential, "PersonNameComponents.givenName");
  const middleName$ = dart.privateName(apple_id_credential, "PersonNameComponents.middleName");
  const familyName$ = dart.privateName(apple_id_credential, "PersonNameComponents.familyName");
  const nameSuffix$ = dart.privateName(apple_id_credential, "PersonNameComponents.nameSuffix");
  const nickname$ = dart.privateName(apple_id_credential, "PersonNameComponents.nickname");
  apple_id_credential.PersonNameComponents = class PersonNameComponents extends core.Object {
    get namePrefix() {
      return this[namePrefix$];
    }
    set namePrefix(value) {
      super.namePrefix = value;
    }
    get givenName() {
      return this[givenName$];
    }
    set givenName(value) {
      super.givenName = value;
    }
    get middleName() {
      return this[middleName$];
    }
    set middleName(value) {
      super.middleName = value;
    }
    get familyName() {
      return this[familyName$];
    }
    set familyName(value) {
      super.familyName = value;
    }
    get nameSuffix() {
      return this[nameSuffix$];
    }
    set nameSuffix(value) {
      super.nameSuffix = value;
    }
    get nickname() {
      return this[nickname$];
    }
    set nickname(value) {
      super.nickname = value;
    }
    static fromMap(map) {
      if (map == null) {
        return new apple_id_credential.PersonNameComponents.new();
      }
      return new apple_id_credential.PersonNameComponents.new({namePrefix: core.String._check(map[$_get]("namePrefix")), givenName: core.String._check(map[$_get]("givenName")), middleName: core.String._check(map[$_get]("middleName")), familyName: core.String._check(map[$_get]("familyName")), nameSuffix: core.String._check(map[$_get]("nameSuffix")), nickname: core.String._check(map[$_get]("nickname"))});
    }
  };
  (apple_id_credential.PersonNameComponents.new = function(opts) {
    let namePrefix = opts && 'namePrefix' in opts ? opts.namePrefix : null;
    let givenName = opts && 'givenName' in opts ? opts.givenName : null;
    let middleName = opts && 'middleName' in opts ? opts.middleName : null;
    let familyName = opts && 'familyName' in opts ? opts.familyName : null;
    let nameSuffix = opts && 'nameSuffix' in opts ? opts.nameSuffix : null;
    let nickname = opts && 'nickname' in opts ? opts.nickname : null;
    this[namePrefix$] = namePrefix;
    this[givenName$] = givenName;
    this[middleName$] = middleName;
    this[familyName$] = familyName;
    this[nameSuffix$] = nameSuffix;
    this[nickname$] = nickname;
    ;
  }).prototype = apple_id_credential.PersonNameComponents.prototype;
  dart.addTypeTests(apple_id_credential.PersonNameComponents);
  dart.setLibraryUri(apple_id_credential.PersonNameComponents, "package:apple_sign_in/apple_id_credential.dart");
  dart.setFieldSignature(apple_id_credential.PersonNameComponents, () => ({
    __proto__: dart.getFields(apple_id_credential.PersonNameComponents.__proto__),
    namePrefix: dart.finalFieldType(core.String),
    givenName: dart.finalFieldType(core.String),
    middleName: dart.finalFieldType(core.String),
    familyName: dart.finalFieldType(core.String),
    nameSuffix: dart.finalFieldType(core.String),
    nickname: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/apple_sign_in/apple_id_credential", {
    "package:apple_sign_in/apple_id_credential.dart": apple_id_credential
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["apple_id_credential.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOkB;;;;;;IAGA;;;;;;IAGH;;;;;;IAGA;;;;;;IAGK;;;;;;IAGS;;;;;;IAGd;;;;;;IAGa;;;;;;mBAaY;AACpC,YAAO,AAAI,GAAD,IAAI;AAEd,YAAO,2FACU,AAAG,GAAA,QAAC,kEACA,AAAG,GAAA,QAAC,iDAChB,AAAG,GAAA,QAAC,oCACL,AAAG,GAAA,QAAC,4BACQ,uEAAgB,AAAG,GAAA,QAAC,iDAC/B,AAAG,GAAA,QAAC,qCACK,AAAI,GAAD,eAAa,qBACN,AAAM,sEAAC,AAAG,GAAA,QAAC,sBACX,+DACK,iEAAQ,AAAG,GAAA,QAAC;IAE/C;2BAEwC;AACtC,UAAI,AAAK,IAAD,IAAI;AACV,cAAO;;AAGT,YAAO,AAAK,AAAsC,KAAvC,qBAAK,QAAC,SAAgB,6CAAS,KAAK;IACjD;;;QAjCO;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAPA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;IAsCJ;;iEATK;;;;EASL;;;;;;;;;;;;;;;;;;;;IAMe;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;mBAW4B;AACvC,UAAI,AAAI,GAAD,IAAI;AACT,cAAO;;AAGT,YAAO,kFACO,AAAG,GAAA,QAAC,8CACL,AAAG,GAAA,QAAC,8CACH,AAAG,GAAA,QAAC,+CACJ,AAAG,GAAA,QAAC,+CACJ,AAAG,GAAA,QAAC,6CACN,AAAG,GAAA,QAAC;IAElB;;;QArBO;QACA;QACA;QACA;QACA;QACA;IALA;IACA;IACA;IACA;IACA;IACA;;EACL","file":"apple_id_credential.ddc.js"}');
  // Exports:
  return {
    apple_id_credential: apple_id_credential
  };
});

//# sourceMappingURL=apple_id_credential.ddc.js.map
