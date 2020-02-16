define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scope = Object.create(dart.library);
  const $hashCode = dartx.hashCode;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: scope.Scope.prototype,
        [value$]: "email"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: scope.Scope.prototype,
        [value$]: "full_name"
      });
    }
  });
  const value$ = dart.privateName(scope, "Scope.value");
  let C0;
  let C1;
  scope.Scope = class Scope extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    _equals(other) {
      if (other == null) return false;
      return scope.Scope.is(other) && other.value == this.value;
    }
    get hashCode() {
      return dart.hashCode(this.value);
    }
  };
  (scope.Scope.rawValue = function(value) {
    this[value$] = value;
    ;
  }).prototype = scope.Scope.prototype;
  dart.addTypeTests(scope.Scope);
  dart.setLibraryUri(scope.Scope, "package:apple_sign_in/scope.dart");
  dart.setFieldSignature(scope.Scope, () => ({
    __proto__: dart.getFields(scope.Scope.__proto__),
    value: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(scope.Scope, ['_equals']);
  dart.defineExtensionAccessors(scope.Scope, ['hashCode']);
  dart.defineLazy(scope.Scope, {
    /*scope.Scope.email*/get email() {
      return C0 || CT.C0;
    },
    /*scope.Scope.fullName*/get fullName() {
      return C1 || CT.C1;
    }
  });
  dart.trackLibraries("packages/apple_sign_in/scope", {
    "package:apple_sign_in/scope.dart": scope
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scope.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IAYe;;;;;;;UAOI;AAAU,YAAM,AAAS,gBAAf,KAAK,KAAa,AAAM,AAAM,KAAP,UAAU;IAAK;;AAG7C,YAAM,eAAN;IAAc;;;IANR;;EAAM;;;;;;;;;;MAVb,iBAAK;;;MAGL,oBAAQ","file":"scope.ddc.js"}');
  // Exports:
  return {
    scope: scope
  };
});

//# sourceMappingURL=scope.ddc.js.map
