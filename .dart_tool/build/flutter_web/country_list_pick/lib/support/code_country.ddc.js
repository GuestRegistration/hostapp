define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const code_country = Object.create(dart.library);
  const CT = Object.create(null);
  code_country.ToAlias = class ToAlias extends core.Object {};
  code_country.ToAlias[dart.mixinOn] = Object => class ToAlias extends Object {};
  (code_country.ToAlias[dart.mixinNew] = function() {
  }).prototype = code_country.ToAlias.prototype;
  dart.addTypeTests(code_country.ToAlias);
  code_country.ToAlias[dart.implements] = () => [core.Object];
  dart.setLibraryUri(code_country.ToAlias, "package:country_list_pick/support/code_country.dart");
  const name$ = dart.privateName(code_country, "CountryCode.name");
  const flagUri$ = dart.privateName(code_country, "CountryCode.flagUri");
  const code$ = dart.privateName(code_country, "CountryCode.code");
  const dialCode$ = dart.privateName(code_country, "CountryCode.dialCode");
  code_country.CountryCode = class CountryCode extends core.Object {
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
  (code_country.CountryCode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let flagUri = opts && 'flagUri' in opts ? opts.flagUri : null;
    let code = opts && 'code' in opts ? opts.code : null;
    let dialCode = opts && 'dialCode' in opts ? opts.dialCode : null;
    this[name$] = name;
    this[flagUri$] = flagUri;
    this[code$] = code;
    this[dialCode$] = dialCode;
    ;
  }).prototype = code_country.CountryCode.prototype;
  dart.addTypeTests(code_country.CountryCode);
  dart.setMethodSignature(code_country.CountryCode, () => ({
    __proto__: dart.getMethods(code_country.CountryCode.__proto__),
    toLongString: dart.fnType(core.String, []),
    toCountryStringOnly: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(code_country.CountryCode, "package:country_list_pick/support/code_country.dart");
  dart.setFieldSignature(code_country.CountryCode, () => ({
    __proto__: dart.getFields(code_country.CountryCode.__proto__),
    name: dart.fieldType(core.String),
    flagUri: dart.fieldType(core.String),
    code: dart.fieldType(core.String),
    dialCode: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(code_country.CountryCode, ['toString']);
  const CountryCode_ToAlias$36 = class CountryCode_ToAlias extends code_country.CountryCode {};
  (CountryCode_ToAlias$36.new = function(opts) {
    CountryCode_ToAlias$36.__proto__.new.call(this, opts);
  }).prototype = CountryCode_ToAlias$36.prototype;
  dart.applyMixin(CountryCode_ToAlias$36, code_country.ToAlias);
  code_country.CElement = class CElement extends CountryCode_ToAlias$36 {};
  (code_country.CElement.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let flagUri = opts && 'flagUri' in opts ? opts.flagUri : null;
    let code = opts && 'code' in opts ? opts.code : null;
    let dialCode = opts && 'dialCode' in opts ? opts.dialCode : null;
    code_country.CElement.__proto__.new.call(this, {name: name, flagUri: flagUri, code: code, dialCode: dialCode});
    ;
  }).prototype = code_country.CElement.prototype;
  dart.addTypeTests(code_country.CElement);
  dart.setLibraryUri(code_country.CElement, "package:country_list_pick/support/code_country.dart");
  dart.trackLibraries("packages/country_list_pick/support/code_country", {
    "package:country_list_pick/support/code_country.dart": code_country
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["code_country.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAQS;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;;AAKc,YAAW,UAAT;IAAS;;AAEP,YAAiB,UAAf,iBAAQ,eAAE;IAAK;;AAEV,YAAO,UAAL;IAAK;;;QAPrB;QAAW;QAAc;QAAW;IAApC;IAAW;IAAc;IAAW;;EAAU;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAhBzB","file":"code_country.ddc.js"}');
  // Exports:
  return {
    support__code_country: code_country
  };
});

//# sourceMappingURL=code_country.ddc.js.map
