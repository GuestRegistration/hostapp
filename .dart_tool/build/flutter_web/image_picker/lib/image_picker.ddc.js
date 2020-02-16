define(['dart_sdk', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const io = dart_sdk.io;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const image_picker = Object.create(dart.library);
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: image_picker.ImageSource.prototype,
        [_name$]: "ImageSource.camera",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: image_picker.ImageSource.prototype,
        [_name$]: "ImageSource.gallery",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], image_picker.ImageSource);
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
        [MethodChannel_name]: "plugins.flutter.io/image_picker"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: image_picker.RetrieveType.prototype,
        [_name$]: "RetrieveType.image",
        index: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: image_picker.RetrieveType.prototype,
        [_name$]: "RetrieveType.video",
        index: 1
      });
    },
    get C8() {
      return C8 = dart.constList([C6 || CT.C6, C7 || CT.C7], image_picker.RetrieveType);
    }
  });
  const _name$ = dart.privateName(image_picker, "_name");
  let C0;
  let C1;
  let C2;
  image_picker.ImageSource = class ImageSource extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (image_picker.ImageSource.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = image_picker.ImageSource.prototype;
  dart.addTypeTests(image_picker.ImageSource);
  dart.setLibraryUri(image_picker.ImageSource, "package:image_picker/image_picker.dart");
  dart.setFieldSignature(image_picker.ImageSource, () => ({
    __proto__: dart.getFields(image_picker.ImageSource.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(image_picker.ImageSource, ['toString']);
  image_picker.ImageSource.camera = C0 || CT.C0;
  image_picker.ImageSource.gallery = C1 || CT.C1;
  image_picker.ImageSource.values = C2 || CT.C2;
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C5;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C4;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C3;
  image_picker.ImagePicker = class ImagePicker extends core.Object {
    static pickImage(opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : null;
      let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
      let imageQuality = opts && 'imageQuality' in opts ? opts.imageQuality : null;
      return async.async(io.File, function* pickImage() {
        if (!(source != null)) dart.assertFailed(null, "org-dartlang-app:///packages/image_picker/image_picker.dart", 53, 12, "source != null");
        if (!(imageQuality == null || dart.notNull(imageQuality) >= 0 && dart.notNull(imageQuality) <= 100)) dart.assertFailed(null, "org-dartlang-app:///packages/image_picker/image_picker.dart", 54, 12, "imageQuality == null || (imageQuality >= 0 && imageQuality <= 100)");
        if (maxWidth != null && dart.notNull(maxWidth) < 0) {
          dart.throw(new core.ArgumentError.value(maxWidth, "maxWidth cannot be negative"));
        }
        if (maxHeight != null && dart.notNull(maxHeight) < 0) {
          dart.throw(new core.ArgumentError.value(maxHeight, "maxHeight cannot be negative"));
        }
        let path = (yield image_picker.ImagePicker._channel.invokeMethod(core.String, "pickImage", new (IdentityMapOfString$dynamic()).from(["source", source.index, "maxWidth", maxWidth, "maxHeight", maxHeight, "imageQuality", imageQuality])));
        return path == null ? null : io.File.new(path);
      });
    }
    static pickVideo(opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      return async.async(io.File, function* pickVideo() {
        if (!(source != null)) dart.assertFailed(null, "org-dartlang-app:///packages/image_picker/image_picker.dart", 87, 12, "source != null");
        let path = (yield image_picker.ImagePicker._channel.invokeMethod(core.String, "pickVideo", new (IdentityMapOfString$dynamic()).from(["source", source.index])));
        return path == null ? null : io.File.new(path);
      });
    }
    static retrieveLostData() {
      return async.async(image_picker.LostDataResponse, function* retrieveLostData() {
        let result = (yield image_picker.ImagePicker._channel.invokeMapMethod(core.String, dart.dynamic, "retrieve"));
        if (result == null) {
          return new image_picker.LostDataResponse.empty();
        }
        if (!(dart.notNull(result[$containsKey]("path")) !== dart.test(result[$containsKey]("errorCode")))) dart.assertFailed(null, "org-dartlang-app:///packages/image_picker/image_picker.dart", 116, 12, "result.containsKey('path') ^ result.containsKey('errorCode')");
        let type = core.String._check(result[$_get]("type"));
        if (!(type === "image" || type === "video")) dart.assertFailed(null, "org-dartlang-app:///packages/image_picker/image_picker.dart", 119, 12, "type == kTypeImage || type == kTypeVideo");
        let retrieveType = null;
        if (type === "image") {
          retrieveType = image_picker.RetrieveType.image;
        } else if (type === "video") {
          retrieveType = image_picker.RetrieveType.video;
        }
        let exception = null;
        if (dart.test(result[$containsKey]("errorCode"))) {
          exception = new message_codec.PlatformException.new({code: core.String._check(result[$_get]("errorCode")), message: core.String._check(result[$_get]("errorMessage"))});
        }
        let path = core.String._check(result[$_get]("path"));
        return new image_picker.LostDataResponse.new({file: path == null ? null : io.File.new(path), exception: exception, type: retrieveType});
      });
    }
  };
  (image_picker.ImagePicker.new = function() {
    ;
  }).prototype = image_picker.ImagePicker.prototype;
  dart.addTypeTests(image_picker.ImagePicker);
  dart.setLibraryUri(image_picker.ImagePicker, "package:image_picker/image_picker.dart");
  dart.defineLazy(image_picker.ImagePicker, {
    /*image_picker.ImagePicker._channel*/get _channel() {
      return C3 || CT.C3;
    }
  });
  const _empty = dart.privateName(image_picker, "_empty");
  const file$ = dart.privateName(image_picker, "LostDataResponse.file");
  const exception$ = dart.privateName(image_picker, "LostDataResponse.exception");
  const type$ = dart.privateName(image_picker, "LostDataResponse.type");
  image_picker.LostDataResponse = class LostDataResponse extends core.Object {
    get file() {
      return this[file$];
    }
    set file(value) {
      super.file = value;
    }
    get exception() {
      return this[exception$];
    }
    set exception(value) {
      super.exception = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get isEmpty() {
      return this[_empty];
    }
  };
  (image_picker.LostDataResponse.new = function(opts) {
    let file = opts && 'file' in opts ? opts.file : null;
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let type = opts && 'type' in opts ? opts.type : null;
    this[_empty] = false;
    this[file$] = file;
    this[exception$] = exception;
    this[type$] = type;
    ;
  }).prototype = image_picker.LostDataResponse.prototype;
  (image_picker.LostDataResponse.empty = function() {
    this[_empty] = false;
    this[file$] = null;
    this[exception$] = null;
    this[type$] = null;
    this[_empty] = true;
    ;
  }).prototype = image_picker.LostDataResponse.prototype;
  dart.addTypeTests(image_picker.LostDataResponse);
  dart.setGetterSignature(image_picker.LostDataResponse, () => ({
    __proto__: dart.getGetters(image_picker.LostDataResponse.__proto__),
    isEmpty: core.bool
  }));
  dart.setLibraryUri(image_picker.LostDataResponse, "package:image_picker/image_picker.dart");
  dart.setFieldSignature(image_picker.LostDataResponse, () => ({
    __proto__: dart.getFields(image_picker.LostDataResponse.__proto__),
    file: dart.finalFieldType(io.File),
    exception: dart.finalFieldType(message_codec.PlatformException),
    type: dart.finalFieldType(image_picker.RetrieveType),
    [_empty]: dart.fieldType(core.bool)
  }));
  let C6;
  let C7;
  let C8;
  image_picker.RetrieveType = class RetrieveType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (image_picker.RetrieveType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = image_picker.RetrieveType.prototype;
  dart.addTypeTests(image_picker.RetrieveType);
  dart.setLibraryUri(image_picker.RetrieveType, "package:image_picker/image_picker.dart");
  dart.setFieldSignature(image_picker.RetrieveType, () => ({
    __proto__: dart.getFields(image_picker.RetrieveType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(image_picker.RetrieveType, ['toString']);
  image_picker.RetrieveType.image = C6 || CT.C6;
  image_picker.RetrieveType.video = C7 || CT.C7;
  image_picker.RetrieveType.values = C8 || CT.C8;
  dart.defineLazy(image_picker, {
    /*image_picker.kTypeImage*/get kTypeImage() {
      return "image";
    },
    /*image_picker.kTypeVideo*/get kTypeVideo() {
      return "video";
    }
  });
  dart.trackLibraries("packages/image_picker/image_picker", {
    "package:image_picker/image_picker.dart": image_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image_picker.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuBA;;kDANK;;;;EAML;;;;;;;;;;;;;;;;;;;;;UAyB6B;UAChB;UACA;UACH;AAJqB;AAK3B,cAAO,AAAO,MAAD,IAAI;AACjB,cAAO,AAAa,AAAQ,YAAT,IAAI,QAAsB,aAAb,YAAY,KAAI,KAAkB,aAAb,YAAY,KAAI;AAErE,YAAI,QAAQ,IAAI,QAAiB,aAAT,QAAQ,IAAG;AACiC,UAAlE,WAAoB,6BAAM,QAAQ,EAAE;;AAGtC,YAAI,SAAS,IAAI,QAAkB,aAAV,SAAS,IAAG;AACiC,UAApE,WAAoB,6BAAM,SAAS,EAAE;;AAG1B,oBAAO,MAAM,AAAS,4DACjC,aACiB,0CACf,UAAU,AAAO,MAAD,QAChB,YAAY,QAAQ,EACpB,aAAa,SAAS,EACtB,gBAAgB,YAAY;AAIhC,cAAO,AAAK,KAAD,IAAI,OAAO,OAAO,YAAK,IAAI;MACxC;;;UAUwB;AADK;AAG3B,cAAO,AAAO,MAAD,IAAI;AACJ,oBAAO,MAAM,AAAS,4DACjC,aACiB,0CACf,UAAU,AAAO,MAAD;AAGpB,cAAO,AAAK,KAAD,IAAI,OAAO,OAAO,YAAK,IAAI;MACxC;;;AAegD;AACnB,sBACvB,MAAM,AAAS,6EAAiC;AACpD,YAAI,AAAO,MAAD,IAAI;AACZ,gBAAwB;;AAE1B,cAAkC,aAA3B,AAAO,MAAD,eAAa,uBAAU,AAAO,MAAD,eAAa;AAE1C,sCAAO,AAAM,MAAA,QAAC;AAC3B,cAAO,AAAK,AAAc,IAAf,gBAAkB,AAAK,IAAD;AAEpB;AACb,YAAI,AAAK,IAAD;AAC2B,UAAjC,eAA4B;cACvB,KAAI,AAAK,IAAD;AACoB,UAAjC,eAA4B;;AAGZ;AAClB,sBAAI,AAAO,MAAD,eAAa;AAE0C,UAD/D,YAAY,kEACF,AAAM,MAAA,QAAC,2CAAuB,AAAM,MAAA,QAAC;;AAGpC,sCAAO,AAAM,MAAA,QAAC;AAE3B,cAAO,8CACG,AAAK,IAAD,IAAI,OAAO,OAAO,YAAK,IAAI,cAC1B,SAAS,QACd,YAAY;MACxB;;;;;EACF;;;;MAhH6B,iCAAQ;;;;;;;;;IA4IxB;;;;;;IASa;;;;;;IAGL;;;;;;;AAjBC;IAAM;;;QAbH;QAAW;QAAgB;IAgC7C,eAAS;IAhCS;IAAW;IAAgB;;EAAM;;IAgCnD,eAAS;IA3BH,cAAE;IACG,mBAAE;IACP,cAAE;IACA,eAAE;;EAAI;;;;;;;;;;;;;;;;;;;;IAkCrB;;mDANK;;;;EAML;;;;;;;;;;;;;MArLa,uBAAU;;;MAGV,uBAAU","file":"image_picker.ddc.js"}');
  // Exports:
  return {
    image_picker: image_picker
  };
});

//# sourceMappingURL=image_picker.ddc.js.map
