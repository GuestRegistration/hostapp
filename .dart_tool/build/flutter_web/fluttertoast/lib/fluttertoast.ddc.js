define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/material', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flutter__material, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const colors = packages__flutter__material.src__material__colors;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const fluttertoast = Object.create(dart.library);
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: fluttertoast.Toast.prototype,
        [_name$]: "Toast.LENGTH_SHORT",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: fluttertoast.Toast.prototype,
        [_name$]: "Toast.LENGTH_LONG",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], fluttertoast.Toast);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: fluttertoast.ToastGravity.prototype,
        [_name$]: "ToastGravity.TOP",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: fluttertoast.ToastGravity.prototype,
        [_name$]: "ToastGravity.BOTTOM",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: fluttertoast.ToastGravity.prototype,
        [_name$]: "ToastGravity.CENTER",
        index: 2
      });
    },
    get C6() {
      return C6 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], fluttertoast.ToastGravity);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C9 || CT.C9
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C8 || CT.C8,
        [MethodChannel_name]: "PonnamKarthik/fluttertoast"
      });
    }
  });
  const _name$ = dart.privateName(fluttertoast, "_name");
  let C0;
  let C1;
  let C2;
  fluttertoast.Toast = class Toast extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (fluttertoast.Toast.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = fluttertoast.Toast.prototype;
  dart.addTypeTests(fluttertoast.Toast);
  dart.setLibraryUri(fluttertoast.Toast, "package:fluttertoast/fluttertoast.dart");
  dart.setFieldSignature(fluttertoast.Toast, () => ({
    __proto__: dart.getFields(fluttertoast.Toast.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(fluttertoast.Toast, ['toString']);
  fluttertoast.Toast.LENGTH_SHORT = C0 || CT.C0;
  fluttertoast.Toast.LENGTH_LONG = C1 || CT.C1;
  fluttertoast.Toast.values = C2 || CT.C2;
  let C3;
  let C4;
  let C5;
  let C6;
  fluttertoast.ToastGravity = class ToastGravity extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (fluttertoast.ToastGravity.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = fluttertoast.ToastGravity.prototype;
  dart.addTypeTests(fluttertoast.ToastGravity);
  dart.setLibraryUri(fluttertoast.ToastGravity, "package:fluttertoast/fluttertoast.dart");
  dart.setFieldSignature(fluttertoast.ToastGravity, () => ({
    __proto__: dart.getFields(fluttertoast.ToastGravity.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(fluttertoast.ToastGravity, ['toString']);
  fluttertoast.ToastGravity.TOP = C3 || CT.C3;
  fluttertoast.ToastGravity.BOTTOM = C4 || CT.C4;
  fluttertoast.ToastGravity.CENTER = C5 || CT.C5;
  fluttertoast.ToastGravity.values = C6 || CT.C6;
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C9;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C8;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C7;
  fluttertoast.Fluttertoast = class Fluttertoast extends core.Object {
    static cancel() {
      return async.async(core.bool, function* cancel() {
        let res = (yield fluttertoast.Fluttertoast._channel.invokeMethod(core.bool, "cancel"));
        return res;
      });
    }
    static showToast(opts) {
      let msg = opts && 'msg' in opts ? opts.msg : null;
      let toastLength = opts && 'toastLength' in opts ? opts.toastLength : null;
      let timeInSecForIos = opts && 'timeInSecForIos' in opts ? opts.timeInSecForIos : 1;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : 16;
      let gravity = opts && 'gravity' in opts ? opts.gravity : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let textColor = opts && 'textColor' in opts ? opts.textColor : null;
      return async.async(core.bool, function* showToast() {
        let toast = "short";
        if (dart.equals(toastLength, fluttertoast.Toast.LENGTH_LONG)) {
          toast = "long";
        }
        let gravityToast = "bottom";
        if (dart.equals(gravity, fluttertoast.ToastGravity.TOP)) {
          gravityToast = "top";
        } else if (dart.equals(gravity, fluttertoast.ToastGravity.CENTER)) {
          gravityToast = "center";
        } else {
          gravityToast = "bottom";
        }
        if (backgroundColor == null && dart.equals(platform.defaultTargetPlatform, platform.TargetPlatform.iOS)) {
          backgroundColor = colors.Colors.black;
        }
        if (textColor == null && dart.equals(platform.defaultTargetPlatform, platform.TargetPlatform.iOS)) {
          textColor = colors.Colors.white;
        }
        let params = new (IdentityMapOfString$dynamic()).from(["msg", msg, "length", toast, "time", timeInSecForIos, "gravity", gravityToast, "bgcolor", backgroundColor != null ? backgroundColor.value : null, "textcolor", textColor != null ? textColor.value : null, "fontSize", fontSize]);
        let res = (yield fluttertoast.Fluttertoast._channel.invokeMethod(core.bool, "showToast", params));
        return res;
      });
    }
  };
  (fluttertoast.Fluttertoast.new = function() {
    ;
  }).prototype = fluttertoast.Fluttertoast.prototype;
  dart.addTypeTests(fluttertoast.Fluttertoast);
  dart.setLibraryUri(fluttertoast.Fluttertoast, "package:fluttertoast/fluttertoast.dart");
  dart.defineLazy(fluttertoast.Fluttertoast, {
    /*fluttertoast.Fluttertoast._channel*/get _channel() {
      return C7 || CT.C7;
    }
  });
  dart.trackLibraries("packages/fluttertoast/fluttertoast", {
    "package:fluttertoast/fluttertoast.dart": fluttertoast
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fluttertoast.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMuC;;4CAAlC;;;;EAAkC;;;;;;;;;;;;;;;;;;;IAEC;;mDAAnC;;;;EAAmC;;;;;;;;;;;;;;;;;;;;;;AAoBZ;AACnB,mBAAM,MAAM,AAAS,2DAAa;AACvC,cAAO,IAAG;MACZ;;;UAGmB;UACX;UACF;UACG;UACM;UACP;UACA;AAPqB;AAWpB,oBAAQ;AACf,YAAgB,YAAZ,WAAW,EAAU;AACT,UAAd,QAAQ;;AAGH,2BAAe;AACtB,YAAY,YAAR,OAAO,EAAiB;AACN,UAApB,eAAe;cACV,KAAY,YAAR,OAAO,EAAiB;AACV,UAAvB,eAAe;;AAEQ,UAAvB,eAAe;;AAGjB,YAAI,AAAgB,eAAD,IAAI,QACG,YAAtB,gCAAwC;AACZ,UAA9B,kBAAyB;;AAE3B,YAAI,AAAU,SAAD,IAAI,QAA8B,YAAtB,gCAAwC;AACvC,UAAxB,YAAmB;;AAEM,qBAA0B,0CACnD,OAAO,GAAG,EACV,UAAU,KAAK,EACf,QAAQ,eAAe,EACvB,WAAW,YAAY,EACvB,WAAW,AAAgB,eAAD,IAAI,OAAO,AAAgB,eAAD,SAAS,MAC7D,aAAa,AAAU,SAAD,IAAI,OAAO,AAAU,SAAD,SAAS,MACnD,YAAY,QAAQ;AAGjB,mBAAM,MAAM,AAAS,2DAAa,aAAa,MAAM;AAC1D,cAAO,IAAG;MACZ;;;;;EACF;;;;MAnE6B,kCAAQ","file":"fluttertoast.ddc.js"}');
  // Exports:
  return {
    fluttertoast: fluttertoast
  };
});

//# sourceMappingURL=fluttertoast.ddc.js.map
