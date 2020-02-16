define(['dart_sdk', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const flutter_secure_storage = Object.create(dart.library);
  const $cast = dartx.cast;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
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
        [MethodChannel_name]: "plugins.it_nomads.com/flutter_secure_storage"
      });
    }
  });
  const _selectOptions = dart.privateName(flutter_secure_storage, "_selectOptions");
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C2;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C1;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C0;
  flutter_secure_storage.FlutterSecureStorage = class FlutterSecureStorage extends core.Object {
    write(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let iOptions = opts && 'iOptions' in opts ? opts.iOptions : null;
      let aOptions = opts && 'aOptions' in opts ? opts.aOptions : null;
      return async.async(dart.void, (function* write() {
        return flutter_secure_storage.FlutterSecureStorage._channel.invokeMethod(dart.void, "write", new (IdentityMapOfString$dynamic()).from(["key", key, "value", value, "options", this[_selectOptions](iOptions, aOptions)]));
      }).bind(this));
    }
    read(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let iOptions = opts && 'iOptions' in opts ? opts.iOptions : null;
      let aOptions = opts && 'aOptions' in opts ? opts.aOptions : null;
      return async.async(core.String, (function* read() {
        let value = (yield flutter_secure_storage.FlutterSecureStorage._channel.invokeMethod(core.String, "read", new (IdentityMapOfString$dynamic()).from(["key", key, "options", this[_selectOptions](iOptions, aOptions)])));
        return value;
      }).bind(this));
    }
    delete(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let iOptions = opts && 'iOptions' in opts ? opts.iOptions : null;
      let aOptions = opts && 'aOptions' in opts ? opts.aOptions : null;
      return flutter_secure_storage.FlutterSecureStorage._channel.invokeMethod(dart.void, "delete", new (IdentityMapOfString$dynamic()).from(["key", key, "options", this[_selectOptions](iOptions, aOptions)]));
    }
    readAll(opts) {
      let iOptions = opts && 'iOptions' in opts ? opts.iOptions : null;
      let aOptions = opts && 'aOptions' in opts ? opts.aOptions : null;
      return async.async(MapOfString$String(), (function* readAll() {
        let results = (yield flutter_secure_storage.FlutterSecureStorage._channel.invokeMethod(core.Map, "readAll", new (IdentityMapOfString$dynamic()).from(["options", this[_selectOptions](iOptions, aOptions)])));
        return results[$cast](core.String, core.String);
      }).bind(this));
    }
    deleteAll(opts) {
      let iOptions = opts && 'iOptions' in opts ? opts.iOptions : null;
      let aOptions = opts && 'aOptions' in opts ? opts.aOptions : null;
      return flutter_secure_storage.FlutterSecureStorage._channel.invokeMethod(dart.void, "deleteAll", new (IdentityMapOfString$dynamic()).from(["options", this[_selectOptions](iOptions, aOptions)]));
    }
    [_selectOptions](iOptions, aOptions) {
      let t0, t0$;
      return dart.test(io.Platform.isIOS) ? (t0 = iOptions, t0 == null ? null : t0.params) : (t0$ = aOptions, t0$ == null ? null : t0$.params);
    }
  };
  (flutter_secure_storage.FlutterSecureStorage.new = function() {
    ;
  }).prototype = flutter_secure_storage.FlutterSecureStorage.prototype;
  dart.addTypeTests(flutter_secure_storage.FlutterSecureStorage);
  dart.setMethodSignature(flutter_secure_storage.FlutterSecureStorage, () => ({
    __proto__: dart.getMethods(flutter_secure_storage.FlutterSecureStorage.__proto__),
    write: dart.fnType(async.Future$(dart.void), [], {aOptions: flutter_secure_storage.AndroidOptions, iOptions: flutter_secure_storage.iOSOptions, key: core.String, value: core.String}, {}),
    read: dart.fnType(async.Future$(core.String), [], {aOptions: flutter_secure_storage.AndroidOptions, iOptions: flutter_secure_storage.iOSOptions, key: core.String}, {}),
    delete: dart.fnType(async.Future$(dart.void), [], {aOptions: flutter_secure_storage.AndroidOptions, iOptions: flutter_secure_storage.iOSOptions, key: core.String}, {}),
    readAll: dart.fnType(async.Future$(core.Map$(core.String, core.String)), [], {aOptions: flutter_secure_storage.AndroidOptions, iOptions: flutter_secure_storage.iOSOptions}, {}),
    deleteAll: dart.fnType(async.Future$(dart.void), [], {aOptions: flutter_secure_storage.AndroidOptions, iOptions: flutter_secure_storage.iOSOptions}, {}),
    [_selectOptions]: dart.fnType(core.Map$(core.String, core.String), [flutter_secure_storage.iOSOptions, flutter_secure_storage.AndroidOptions])
  }));
  dart.setLibraryUri(flutter_secure_storage.FlutterSecureStorage, "package:flutter_secure_storage/flutter_secure_storage.dart");
  dart.defineLazy(flutter_secure_storage.FlutterSecureStorage, {
    /*flutter_secure_storage.FlutterSecureStorage._channel*/get _channel() {
      return C0 || CT.C0;
    }
  });
  const _toMap = dart.privateName(flutter_secure_storage, "_toMap");
  flutter_secure_storage.Options = class Options extends core.Object {
    get params() {
      return this[_toMap]();
    }
    [_toMap]() {
      dart.throw(core.Exception.new("Missing implementation"));
    }
  };
  (flutter_secure_storage.Options.new = function() {
    ;
  }).prototype = flutter_secure_storage.Options.prototype;
  dart.addTypeTests(flutter_secure_storage.Options);
  dart.setMethodSignature(flutter_secure_storage.Options, () => ({
    __proto__: dart.getMethods(flutter_secure_storage.Options.__proto__),
    [_toMap]: dart.fnType(core.Map$(core.String, core.String), [])
  }));
  dart.setGetterSignature(flutter_secure_storage.Options, () => ({
    __proto__: dart.getGetters(flutter_secure_storage.Options.__proto__),
    params: core.Map$(core.String, core.String)
  }));
  dart.setLibraryUri(flutter_secure_storage.Options, "package:flutter_secure_storage/flutter_secure_storage.dart");
  const _groupId = dart.privateName(flutter_secure_storage, "_groupId");
  flutter_secure_storage.iOSOptions = class iOSOptions extends flutter_secure_storage.Options {
    [_toMap]() {
      return new (IdentityMapOfString$String()).from(["groupId", this[_groupId]]);
    }
  };
  (flutter_secure_storage.iOSOptions.new = function(opts) {
    let groupId = opts && 'groupId' in opts ? opts.groupId : null;
    this[_groupId] = groupId;
    ;
  }).prototype = flutter_secure_storage.iOSOptions.prototype;
  dart.addTypeTests(flutter_secure_storage.iOSOptions);
  dart.setLibraryUri(flutter_secure_storage.iOSOptions, "package:flutter_secure_storage/flutter_secure_storage.dart");
  dart.setFieldSignature(flutter_secure_storage.iOSOptions, () => ({
    __proto__: dart.getFields(flutter_secure_storage.iOSOptions.__proto__),
    [_groupId]: dart.finalFieldType(core.String)
  }));
  flutter_secure_storage.AndroidOptions = class AndroidOptions extends flutter_secure_storage.Options {
    [_toMap]() {
      return new (IdentityMapOfString$String()).new();
    }
  };
  (flutter_secure_storage.AndroidOptions.new = function() {
    ;
  }).prototype = flutter_secure_storage.AndroidOptions.prototype;
  dart.addTypeTests(flutter_secure_storage.AndroidOptions);
  dart.setLibraryUri(flutter_secure_storage.AndroidOptions, "package:flutter_secure_storage/flutter_secure_storage.dart");
  dart.trackLibraries("packages/flutter_secure_storage/flutter_secure_storage", {
    "package:flutter_secure_storage/flutter_secure_storage.dart": flutter_secure_storage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flutter_secure_storage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAkBuC;UAAsB;UAAkB;UAAyB;AAApF;AACd,cAAA,AAAS,8EAAa,SAA0B,0CAAC,OAAO,GAAG,EAAE,SAAS,KAAK,EAAE,WAAW,qBAAe,QAAQ,EAAE,QAAQ;MAAG;;;UAQ1F;UAAgB;UAAyB;AAA5D;AACJ,qBAAQ,MAAM,AAAS,+EAAa,QAAyB,0CAAC,OAAO,GAAG,EAAE,WAAW,qBAAe,QAAQ,EAAE,QAAQ;AACnI,cAAO,MAAK;MACd;;;UAQsC;UAAgB;UAAyB;AAC3E,YAAA,AAAS,8EAAa,UAA2B,0CAAC,OAAO,GAAG,EAAE,WAAW,qBAAe,QAAQ,EAAE,QAAQ;IAAG;;UAOjE;UAAyB;AAAtC;AACvB,uBAAU,MAAM,AAAS,4EAAa,WAA4B,0CAAC,WAAW,qBAAe,QAAQ,EAAE,QAAQ;AACzH,cAAO,AAAQ,QAAD;MAChB;;;UAOmC;UAAyB;AACxD,YAAA,AAAS,8EAAa,aAA8B,0CAAC,WAAW,qBAAe,QAAQ,EAAE,QAAQ;IAAG;qBAG1D,UAAyB;;AACrE,uBAAgB,2BAAQ,QAAQ,eAAR,OAAU,oBAAS,QAAQ,gBAAR,OAAU;IACvD;;;;EAvD4B;;;;;;;;;;;;;MAED,oDAAQ;;;;;;;AAyDD;IAAQ;;AAGC,MAAzC,WAAM,mBAAU;IAClB;;;;EACF;;;;;;;;;;;;;;AASI,YAAuB,0CAAC,WAAW;IACrC;;;QALmB;IAAqB,iBAAE,OAAO;;;;;;;;;;;AAW/C,YAAuB;IACzB;;;;EACF","file":"flutter_secure_storage.ddc.js"}');
  // Exports:
  return {
    flutter_secure_storage: flutter_secure_storage
  };
});

//# sourceMappingURL=flutter_secure_storage.ddc.js.map
