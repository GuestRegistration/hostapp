define(['dart_sdk', 'packages/apple_sign_in/open_id_operation', 'packages/apple_sign_in/scope'], function(dart_sdk, packages__apple_sign_in__open_id_operation, packages__apple_sign_in__scope) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const open_id_operation = packages__apple_sign_in__open_id_operation.open_id_operation;
  const scope = packages__apple_sign_in__scope.scope;
  const apple_id_request = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let ScopeToString = () => (ScopeToString = dart.constFn(dart.fnType(core.String, [scope.Scope])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: open_id_operation.OpenIdOperation.prototype,
        [OpenIdOperation_value]: "login"
      });
    }
  });
  const requestedOperation$ = dart.privateName(apple_id_request, "AuthorizationRequest.requestedOperation");
  const requestedScopes$ = dart.privateName(apple_id_request, "AuthorizationRequest.requestedScopes");
  apple_id_request.AuthorizationRequest = class AuthorizationRequest extends core.Object {
    get requestedOperation() {
      return this[requestedOperation$];
    }
    set requestedOperation(value) {
      super.requestedOperation = value;
    }
    get requestedScopes() {
      return this[requestedScopes$];
    }
    set requestedScopes(value) {
      super.requestedScopes = value;
    }
  };
  (apple_id_request.AuthorizationRequest.new = function(opts) {
    let requestedOperation = opts && 'requestedOperation' in opts ? opts.requestedOperation : null;
    let requestedScopes = opts && 'requestedScopes' in opts ? opts.requestedScopes : null;
    this[requestedOperation$] = requestedOperation;
    this[requestedScopes$] = requestedScopes;
    ;
  }).prototype = apple_id_request.AuthorizationRequest.prototype;
  dart.addTypeTests(apple_id_request.AuthorizationRequest);
  dart.setLibraryUri(apple_id_request.AuthorizationRequest, "package:apple_sign_in/apple_id_request.dart");
  dart.setFieldSignature(apple_id_request.AuthorizationRequest, () => ({
    __proto__: dart.getFields(apple_id_request.AuthorizationRequest.__proto__),
    requestedOperation: dart.finalFieldType(open_id_operation.OpenIdOperation),
    requestedScopes: dart.finalFieldType(core.List$(scope.Scope))
  }));
  const OpenIdOperation_value = dart.privateName(open_id_operation, "OpenIdOperation.value");
  let C0;
  const user$ = dart.privateName(apple_id_request, "AppleIdRequest.user");
  apple_id_request.AppleIdRequest = class AppleIdRequest extends apple_id_request.AuthorizationRequest {
    get user() {
      return this[user$];
    }
    set user(value) {
      super.user = value;
    }
    toMap() {
      let t0, t0$, t0$0;
      return new (IdentityMapOfString$dynamic()).from(["requestType", "AppleIdRequest", "user", this.user, "requestedOperation", this.requestedOperation.value, "requestedScopes", (t0$0 = (t0$ = (t0 = this.requestedScopes, t0 == null ? null : t0[$map](core.String, dart.fn(scope => scope.value, ScopeToString()))), t0$ == null ? null : t0$[$toList]()), t0$0 == null ? [] : t0$0)]);
    }
  };
  (apple_id_request.AppleIdRequest.new = function(opts) {
    let user = opts && 'user' in opts ? opts.user : null;
    let requestedOperation = opts && 'requestedOperation' in opts ? opts.requestedOperation : C0 || CT.C0;
    let requestedScopes = opts && 'requestedScopes' in opts ? opts.requestedScopes : null;
    this[user$] = user;
    apple_id_request.AppleIdRequest.__proto__.new.call(this, {requestedOperation: requestedOperation, requestedScopes: requestedScopes});
    ;
  }).prototype = apple_id_request.AppleIdRequest.prototype;
  dart.addTypeTests(apple_id_request.AppleIdRequest);
  dart.setMethodSignature(apple_id_request.AppleIdRequest, () => ({
    __proto__: dart.getMethods(apple_id_request.AppleIdRequest.__proto__),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(apple_id_request.AppleIdRequest, "package:apple_sign_in/apple_id_request.dart");
  dart.setFieldSignature(apple_id_request.AppleIdRequest, () => ({
    __proto__: dart.getFields(apple_id_request.AppleIdRequest.__proto__),
    user: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/apple_sign_in/apple_id_request", {
    "package:apple_sign_in/apple_id_request.dart": apple_id_request
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["apple_id_request.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAOwB;;;;;;IAEJ;;;;;;;;QAKX;QACA;IADA;IACA;;EACL;;;;;;;;;;;;IAWW;;;;;;;;AAYX,YAAO,2CACL,eAAe,kBACf,QAAQ,WACR,sBAAsB,AAAmB,+BACzC,oBAC2D,uDAAvD,OAAiB,sBAAI,QAAC,SAAU,AAAM,KAAD,0CAArC,OAA8C,yBAA9C,OAA0D;IAElE;;;QAhBO;QACW;QACJ;IAFP;AAGF,kFACuB,kBAAkB,mBACrB,eAAe;;EACjC","file":"apple_id_request.ddc.js"}');
  // Exports:
  return {
    apple_id_request: apple_id_request
  };
});

//# sourceMappingURL=apple_id_request.ddc.js.map
