define(['dart_sdk', 'packages/flutter/src/gestures/arena', 'packages/platform/platform'], function(dart_sdk, packages__flutter__src__gestures__arena, packages__platform__platform) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const local_platform = packages__platform__platform.src__interface__local_platform;
  const path_provider = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let StringToDirectory = () => (StringToDirectory = dart.constFn(dart.fnType(io.Directory, [core.String])))();
  let ListOfDirectory = () => (ListOfDirectory = dart.constFn(core.List$(io.Directory)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: path_provider.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.music",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: path_provider.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.podcasts",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: path_provider.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.ringtones",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: path_provider.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.alarms",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: path_provider.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.notifications",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: path_provider.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.pictures",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: path_provider.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.movies",
        index: 6
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: path_provider.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.downloads",
        index: 7
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: path_provider.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.dcim",
        index: 8
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: path_provider.StorageDirectory.prototype,
        [_name$]: "StorageDirectory.documents",
        index: 9
      });
    },
    get C10() {
      return C10 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], path_provider.StorageDirectory);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C13 || CT.C13
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C12 || CT.C12,
        [MethodChannel_name]: "plugins.flutter.io/path_provider"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: local_platform.LocalPlatform.prototype
      });
    }
  });
  const _name$ = dart.privateName(path_provider, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  path_provider.StorageDirectory = class StorageDirectory extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (path_provider.StorageDirectory.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = path_provider.StorageDirectory.prototype;
  dart.addTypeTests(path_provider.StorageDirectory);
  dart.setLibraryUri(path_provider.StorageDirectory, "package:path_provider/path_provider.dart");
  dart.setFieldSignature(path_provider.StorageDirectory, () => ({
    __proto__: dart.getFields(path_provider.StorageDirectory.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(path_provider.StorageDirectory, ['toString']);
  path_provider.StorageDirectory.music = C0 || CT.C0;
  path_provider.StorageDirectory.podcasts = C1 || CT.C1;
  path_provider.StorageDirectory.ringtones = C2 || CT.C2;
  path_provider.StorageDirectory.alarms = C3 || CT.C3;
  path_provider.StorageDirectory.notifications = C4 || CT.C4;
  path_provider.StorageDirectory.pictures = C5 || CT.C5;
  path_provider.StorageDirectory.movies = C6 || CT.C6;
  path_provider.StorageDirectory.downloads = C7 || CT.C7;
  path_provider.StorageDirectory.dcim = C8 || CT.C8;
  path_provider.StorageDirectory.documents = C9 || CT.C9;
  path_provider.StorageDirectory.values = C10 || CT.C10;
  path_provider.setMockPathProviderPlatform = function setMockPathProviderPlatform(platform) {
    path_provider._platform = platform;
  };
  path_provider.getTemporaryDirectory = function getTemporaryDirectory() {
    return async.async(io.Directory, function* getTemporaryDirectory() {
      let path = (yield path_provider._channel.invokeMethod(core.String, "getTemporaryDirectory"));
      if (path == null) {
        return null;
      }
      return io.Directory.new(path);
    });
  };
  path_provider.getApplicationSupportDirectory = function getApplicationSupportDirectory() {
    return async.async(io.Directory, function* getApplicationSupportDirectory() {
      let path = (yield path_provider._channel.invokeMethod(core.String, "getApplicationSupportDirectory"));
      if (path == null) {
        return null;
      }
      return io.Directory.new(path);
    });
  };
  path_provider.getLibraryDirectory = function getLibraryDirectory() {
    return async.async(io.Directory, function* getLibraryDirectory() {
      if (dart.test(path_provider._platform.isAndroid)) {
        dart.throw(new core.UnsupportedError.new("Functionality not available on Android"));
      }
      let path = (yield path_provider._channel.invokeMethod(core.String, "getLibraryDirectory"));
      if (path == null) {
        return null;
      }
      return io.Directory.new(path);
    });
  };
  path_provider.getApplicationDocumentsDirectory = function getApplicationDocumentsDirectory() {
    return async.async(io.Directory, function* getApplicationDocumentsDirectory() {
      let path = (yield path_provider._channel.invokeMethod(core.String, "getApplicationDocumentsDirectory"));
      if (path == null) {
        return null;
      }
      return io.Directory.new(path);
    });
  };
  path_provider.getExternalStorageDirectory = function getExternalStorageDirectory() {
    return async.async(io.Directory, function* getExternalStorageDirectory() {
      if (dart.test(path_provider._platform.isIOS)) {
        dart.throw(new core.UnsupportedError.new("Functionality not available on iOS"));
      }
      let path = (yield path_provider._channel.invokeMethod(core.String, "getStorageDirectory"));
      if (path == null) {
        return null;
      }
      return io.Directory.new(path);
    });
  };
  path_provider.getExternalCacheDirectories = function getExternalCacheDirectories() {
    return async.async(ListOfDirectory(), function* getExternalCacheDirectories() {
      if (dart.test(path_provider._platform.isIOS)) {
        dart.throw(new core.UnsupportedError.new("Functionality not available on iOS"));
      }
      let paths = (yield path_provider._channel.invokeListMethod(core.String, "getExternalCacheDirectories"));
      return paths[$map](io.Directory, dart.fn(path => io.Directory.new(path), StringToDirectory()))[$toList]();
    });
  };
  path_provider.getExternalStorageDirectories = function getExternalStorageDirectories(opts) {
    let type = opts && 'type' in opts ? opts.type : null;
    return async.async(ListOfDirectory(), function* getExternalStorageDirectories() {
      let t0;
      if (dart.test(path_provider._platform.isIOS)) {
        dart.throw(new core.UnsupportedError.new("Functionality not available on iOS"));
      }
      let paths = (yield path_provider._channel.invokeListMethod(core.String, "getExternalStorageDirectories", new (IdentityMapOfString$dynamic()).from(["type", (t0 = type, t0 == null ? null : t0.index)])));
      return paths[$map](io.Directory, dart.fn(path => io.Directory.new(path), StringToDirectory()))[$toList]();
    });
  };
  path_provider.getDownloadsDirectory = function getDownloadsDirectory() {
    return async.async(io.Directory, function* getDownloadsDirectory() {
      if (dart.test(path_provider._platform.isAndroid)) {
        dart.throw(new core.UnsupportedError.new("Functionality not available on Android"));
      }
      if (dart.test(path_provider._platform.isIOS)) {
        dart.throw(new core.UnsupportedError.new("Functionality not available on iOS"));
      }
      let path = (yield path_provider._channel.invokeMethod(core.String, "getDownloadsDirectory"));
      if (path == null) {
        return null;
      }
      return io.Directory.new(path);
    });
  };
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C13;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C12;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C11;
  let C14;
  dart.defineLazy(path_provider, {
    /*path_provider._channel*/get _channel() {
      return C11 || CT.C11;
    },
    /*path_provider._platform*/get _platform() {
      return C14 || CT.C14;
    },
    set _platform(_) {}
  });
  dart.trackLibraries("packages/path_provider/path_provider", {
    "package:path_provider/path_provider.dart": path_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["path_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6LA;;wDA7CK;;;;EA6CL;;;;;;;;;;;;;;;;;;;;mFA1K0C;AACpB,IAApB,0BAAY,QAAQ;EACtB;;AAauC;AACxB,kBACT,MAAM,AAAS,iDAAqB;AACxC,UAAI,AAAK,IAAD,IAAI;AACV,cAAO;;AAET,YAAO,kBAAU,IAAI;IACvB;;;AAYgD;AACjC,kBACT,MAAM,AAAS,iDAAqB;AACxC,UAAI,AAAK,IAAD,IAAI;AACV,cAAO;;AAGT,YAAO,kBAAU,IAAI;IACvB;;;AAOqC;AACnC,oBAAI,AAAU;AACoD,QAAhE,WAAM,8BAAiB;;AAEZ,kBACT,MAAM,AAAS,iDAAqB;AACxC,UAAI,AAAK,IAAD,IAAI;AACV,cAAO;;AAET,YAAO,kBAAU,IAAI;IACvB;;;AAWkD;AACnC,kBACT,MAAM,AAAS,iDAAqB;AACxC,UAAI,AAAK,IAAD,IAAI;AACV,cAAO;;AAET,YAAO,kBAAU,IAAI;IACvB;;;AAU6C;AAC3C,oBAAI,AAAU;AACgD,QAA5D,WAAM,8BAAiB;;AAEZ,kBACT,MAAM,AAAS,iDAAqB;AACxC,UAAI,AAAK,IAAD,IAAI;AACV,cAAO;;AAET,YAAO,kBAAU,IAAI;IACvB;;;AAemD;AACjD,oBAAI,AAAU;AACgD,QAA5D,WAAM,8BAAiB;;AAEN,mBACf,MAAM,AAAS,qDAAyB;AAE5C,YAAO,AAAM,AAAsC,MAAvC,qBAAK,QAAQ,QAAS,iBAAU,IAAI;IAClD;;;QAmEmB;AAHkC;;AAKnD,oBAAI,AAAU;AACgD,QAA5D,WAAM,8BAAiB;;AAEN,mBAAQ,MAAM,AAAS,qDACxC,iCACiB,0CAAC,cAAQ,IAAI,eAAJ,OAAM;AAGlC,YAAO,AAAM,AAAsC,MAAvC,qBAAK,QAAQ,QAAS,iBAAU,IAAI;IAClD;;;AAOuC;AACrC,oBAAI,AAAU;AACoD,QAAhE,WAAM,8BAAiB;;AAEzB,oBAAI,AAAU;AACgD,QAA5D,WAAM,8BAAiB;;AAEZ,kBACT,MAAM,AAAS,iDAAqB;AACxC,UAAI,AAAK,IAAD,IAAI;AACV,cAAO;;AAET,YAAO,kBAAU,IAAI;IACvB;;;;;;;;;;;MAlOoB,sBAAQ;;;MAGnB,uBAAS","file":"path_provider.ddc.js"}');
  // Exports:
  return {
    path_provider: path_provider
  };
});

//# sourceMappingURL=path_provider.ddc.js.map
