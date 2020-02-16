define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const country_code = Object.create(dart.library);
  const CT = Object.create(null);
  country_code.ToAlias = class ToAlias extends core.Object {};
  country_code.ToAlias[dart.mixinOn] = Object => class ToAlias extends Object {};
  (country_code.ToAlias[dart.mixinNew] = function() {
  }).prototype = country_code.ToAlias.prototype;
  dart.addTypeTests(country_code.ToAlias);
  country_code.ToAlias[dart.implements] = () => [core.Object];
  dart.setLibraryUri(country_code.ToAlias, "package:country_code_picker/country_code.dart");
  const name$ = dart.privateName(country_code, "CountryCode.name");
  const flagUri$ = dart.privateName(country_code, "CountryCode.flagUri");
  const code$ = dart.privateName(country_code, "CountryCode.code");
  const dialCode$ = dart.privateName(country_code, "CountryCode.dialCode");
  country_code.CountryCode = class CountryCode extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get flagUri() {
      return this[flagUri$];
    }
    set flagUri(value) {
      this[flagUri$] = value;
    }
    get code() {
      return this[code$];
    }
    set code(value) {
      this[code$] = value;
    }
    get dialCode() {
      return this[dialCode$];
    }
    set dialCode(value) {
      this[dialCode$] = value;
    }
    toString() {
      return dart.str(this.dialCode);
    }
    toLongString() {
      return dart.str(this.dialCode) + " " + dart.str(this.name);
    }
    toCountryStringOnly() {
      return dart.str(this.name);
    }
  };
  (country_code.CountryCode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let flagUri = opts && 'flagUri' in opts ? opts.flagUri : null;
    let code = opts && 'code' in opts ? opts.code : null;
    let dialCode = opts && 'dialCode' in opts ? opts.dialCode : null;
    this[name$] = name;
    this[flagUri$] = flagUri;
    this[code$] = code;
    this[dialCode$] = dialCode;
    ;
  }).prototype = country_code.CountryCode.prototype;
  dart.addTypeTests(country_code.CountryCode);
  dart.setMethodSignature(country_code.CountryCode, () => ({
    __proto__: dart.getMethods(country_code.CountryCode.__proto__),
    toLongString: dart.fnType(core.String, []),
    toCountryStringOnly: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(country_code.CountryCode, "package:country_code_picker/country_code.dart");
  dart.setFieldSignature(country_code.CountryCode, () => ({
    __proto__: dart.getFields(country_code.CountryCode.__proto__),
    name: dart.fieldType(core.String),
    flagUri: dart.fieldType(core.String),
    code: dart.fieldType(core.String),
    dialCode: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(country_code.CountryCode, ['toString']);
  const CountryCode_ToAlias$36 = class CountryCode_ToAlias extends country_code.CountryCode {};
  (CountryCode_ToAlias$36.new = function(opts) {
    CountryCode_ToAlias$36.__proto__.new.call(this, opts);
  }).prototype = CountryCode_ToAlias$36.prototype;
  dart.applyMixin(CountryCode_ToAlias$36, country_code.ToAlias);
  country_code.CElement = class CElement extends CountryCode_ToAlias$36 {};
  (country_code.CElement.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let flagUri = opts && 'flagUri' in opts ? opts.flagUri : null;
    let code = opts && 'code' in opts ? opts.code : null;
    let dialCode = opts && 'dialCode' in opts ? opts.dialCode : null;
    country_code.CElement.__proto__.new.call(this, {name: name, flagUri: flagUri, code: code, dialCode: dialCode});
    ;
  }).prototype = country_code.CElement.prototype;
  dart.addTypeTests(country_code.CElement);
  dart.setLibraryUri(country_code.CElement, "package:country_code_picker/country_code.dart");
  dart.trackLibraries("packages/country_code_picker/country_code", {
    "package:country_code_picker/country_code.dart": country_code
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["country_code.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAQS;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;;AAKc,YAAW,UAAT;IAAS;;AAEP,YAAiB,UAAf,iBAAQ,eAAE;IAAK;;AAEV,YAAO,UAAL;IAAK;;;QAPrB;QAAW;QAAc;QAAW;IAApC;IAAW;IAAc;IAAW;;EAAU;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAhBzB","file":"country_code.ddc.js"}');
  // Exports:
  return {
    country_code: country_code
  };
});

//# sourceMappingURL=country_code.ddc.js.map
