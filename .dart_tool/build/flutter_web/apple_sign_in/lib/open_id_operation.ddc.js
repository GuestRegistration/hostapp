define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const open_id_operation = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: open_id_operation.OpenIdOperation.prototype,
        [value$]: "implicit"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: open_id_operation.OpenIdOperation.prototype,
        [value$]: "login"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: open_id_operation.OpenIdOperation.prototype,
        [value$]: "logout"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: open_id_operation.OpenIdOperation.prototype,
        [value$]: "refresh"
      });
    }
  });
  const value$ = dart.privateName(open_id_operation, "OpenIdOperation.value");
  let C0;
  let C1;
  let C2;
  let C3;
  open_id_operation.OpenIdOperation = class OpenIdOperation extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
  };
  (open_id_operation.OpenIdOperation.rawValue = function(value) {
    this[value$] = value;
    ;
  }).prototype = open_id_operation.OpenIdOperation.prototype;
  dart.addTypeTests(open_id_operation.OpenIdOperation);
  dart.setLibraryUri(open_id_operation.OpenIdOperation, "package:apple_sign_in/open_id_operation.dart");
  dart.setFieldSignature(open_id_operation.OpenIdOperation, () => ({
    __proto__: dart.getFields(open_id_operation.OpenIdOperation.__proto__),
    value: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(open_id_operation.OpenIdOperation, {
    /*open_id_operation.OpenIdOperation.operationImplicit*/get operationImplicit() {
      return C0 || CT.C0;
    },
    /*open_id_operation.OpenIdOperation.operationLogin*/get operationLogin() {
      return C1 || CT.C1;
    },
    /*open_id_operation.OpenIdOperation.operationLogout*/get operationLogout() {
      return C2 || CT.C2;
    },
    /*open_id_operation.OpenIdOperation.operationRefresh*/get operationRefresh() {
      return C3 || CT.C3;
    }
  });
  dart.trackLibraries("packages/apple_sign_in/open_id_operation", {
    "package:apple_sign_in/open_id_operation.dart": open_id_operation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["open_id_operation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBe;;;;;;;;IAGuB;;EAAM;;;;;;;;MAf7B,mDAAiB;;;MAGjB,gDAAc;;;MAGd,iDAAe;;;MAGf,kDAAgB","file":"open_id_operation.ddc.js"}');
  // Exports:
  return {
    open_id_operation: open_id_operation
  };
});

//# sourceMappingURL=open_id_operation.ddc.js.map
