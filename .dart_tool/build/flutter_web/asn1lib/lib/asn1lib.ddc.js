define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const asn1lib = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $ceil = dartx.ceil;
  const $_set = dartx._set;
  const $sublist = dartx.sublist;
  const $runtimeType = dartx.runtimeType;
  const $hashCode = dartx.hashCode;
  const $setRange = dartx.setRange;
  const $buffer = dartx.buffer;
  const $offsetInBytes = dartx.offsetInBytes;
  const $toRadixString = dartx.toRadixString;
  const $_equals = dartx._equals;
  const $forEach = dartx.forEach;
  const $codeUnits = dartx.codeUnits;
  const $add = dartx.add;
  const $truncate = dartx.truncate;
  const $keys = dartx.keys;
  const $split = dartx.split;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $rightShift = dartx['>>'];
  const $insert = dartx.insert;
  const $toLowerCase = dartx.toLowerCase;
  const $entries = dartx.entries;
  const $addAll = dartx.addAll;
  const $substring = dartx.substring;
  const $toString = dartx.toString;
  const $padLeft = dartx.padLeft;
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfASN1Object = () => (JSArrayOfASN1Object = dart.constFn(_interceptors.JSArray$(asn1lib.ASN1Object)))();
  let ASN1ObjectToNull = () => (ASN1ObjectToNull = dart.constFn(dart.fnType(core.Null, [asn1lib.ASN1Object])))();
  let _HashSetOfASN1Object = () => (_HashSetOfASN1Object = dart.constFn(collection._HashSet$(asn1lib.ASN1Object)))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let LinkedMapOfString$ASN1ObjectIdentifier = () => (LinkedMapOfString$ASN1ObjectIdentifier = dart.constFn(_js_helper.LinkedMap$(core.String, asn1lib.ASN1ObjectIdentifier)))();
  const CT = Object.create(null);
  const _intValue$ = dart.privateName(asn1lib, "_intValue");
  const _encode = dart.privateName(asn1lib, "_encode");
  const _valueByteLength = dart.privateName(asn1lib, "_valueByteLength");
  const _encodeHeader = dart.privateName(asn1lib, "_encodeHeader");
  const _setValueBytes = dart.privateName(asn1lib, "_setValueBytes");
  const _encodedBytes = dart.privateName(asn1lib, "_encodedBytes");
  const _valueStartPosition$ = dart.privateName(asn1lib, "_valueStartPosition");
  const _tag = dart.privateName(asn1lib, "_tag");
  const _initFromBytes = dart.privateName(asn1lib, "_initFromBytes");
  const _encodedBytes$ = dart.privateName(asn1lib, "ASN1Object._encodedBytes");
  asn1lib.ASN1Object = class ASN1Object extends core.Object {
    get [_encodedBytes]() {
      return this[_encodedBytes$];
    }
    set [_encodedBytes](value) {
      this[_encodedBytes$] = value;
    }
    get tag() {
      return this[_tag];
    }
    get encodedBytes() {
      if (this[_encodedBytes] == null) this[_encode]();
      return this[_encodedBytes];
    }
    get isEncoded() {
      return this[_encodedBytes] != null;
    }
    [_initFromBytes]() {
      let l = asn1lib.ASN1Length.decodeLength(this[_encodedBytes]);
      this[_valueByteLength] = l.length;
      this[_valueStartPosition$] = l.valueStartPosition;
    }
    get totalEncodedByteLength() {
      return dart.notNull(this[_valueStartPosition$]) + dart.notNull(this[_valueByteLength]);
    }
    [_encodeHeader]() {
      if (this[_encodedBytes] == null) {
        let lenEnc = asn1lib.ASN1Length.encodeLength(this[_valueByteLength]);
        this[_encodedBytes] = _native_typed_data.NativeUint8List.new(1 + dart.notNull(lenEnc[$length]) + dart.notNull(this[_valueByteLength]));
        this[_encodedBytes][$_set](0, this.tag);
        this[_encodedBytes][$setRange](1, 1 + dart.notNull(lenEnc[$length]), lenEnc, 0);
        this[_valueStartPosition$] = 1 + dart.notNull(lenEnc[$length]);
      }
      return this[_encodedBytes];
    }
    [_encode]() {
      return this[_encodeHeader]();
    }
    valueBytes() {
      return typed_data.Uint8List.view(this[_encodedBytes][$buffer], dart.notNull(this[_valueStartPosition$]) + dart.notNull(this[_encodedBytes][$offsetInBytes]), this[_valueByteLength]);
    }
    contentBytes() {
      return this.valueBytes();
    }
    [_setValueBytes](valBytes) {
      this.encodedBytes[$setRange](this[_valueStartPosition$], dart.notNull(this[_valueStartPosition$]) + dart.notNull(valBytes[$length]), valBytes);
    }
    toHexString() {
      return asn1lib.ASN1Util.listToString(this.encodedBytes);
    }
    toString() {
      return "ASN1Object(tag=" + this.tag[$toRadixString](16) + " valueByteLength=" + dart.str(this[_valueByteLength]) + ") startpos=" + dart.str(this[_valueStartPosition$]) + " bytes=" + dart.str(this.toHexString());
    }
  };
  (asn1lib.ASN1Object.new = function(opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 0;
    this[_encodedBytes$] = null;
    this[_valueByteLength] = null;
    this[_valueStartPosition$] = 2;
    this[_tag] = tag;
    ;
  }).prototype = asn1lib.ASN1Object.prototype;
  (asn1lib.ASN1Object.preEncoded = function(tag, valBytes) {
    this[_encodedBytes$] = null;
    this[_valueByteLength] = null;
    this[_valueStartPosition$] = 2;
    this[_tag] = tag;
    this[_valueByteLength] = valBytes[$length];
    this[_encodeHeader]();
    this[_encodedBytes][$setRange](this[_valueStartPosition$], valBytes[$length], valBytes);
  }).prototype = asn1lib.ASN1Object.prototype;
  (asn1lib.ASN1Object.fromBytes = function(bytes) {
    this[_encodedBytes$] = null;
    this[_valueByteLength] = null;
    this[_valueStartPosition$] = 2;
    this[_tag] = core.int._check(dart.dsend(bytes, '_get', [0]));
    this[_encodedBytes] = typed_data.Uint8List._check(bytes);
    this[_initFromBytes]();
  }).prototype = asn1lib.ASN1Object.prototype;
  dart.addTypeTests(asn1lib.ASN1Object);
  dart.setMethodSignature(asn1lib.ASN1Object, () => ({
    __proto__: dart.getMethods(asn1lib.ASN1Object.__proto__),
    [_initFromBytes]: dart.fnType(dart.void, []),
    [_encodeHeader]: dart.fnType(typed_data.Uint8List, []),
    [_encode]: dart.fnType(typed_data.Uint8List, []),
    valueBytes: dart.fnType(typed_data.Uint8List, []),
    contentBytes: dart.fnType(typed_data.Uint8List, []),
    [_setValueBytes]: dart.fnType(dart.void, [core.List$(core.int)]),
    toHexString: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(asn1lib.ASN1Object, () => ({
    __proto__: dart.getGetters(asn1lib.ASN1Object.__proto__),
    tag: core.int,
    encodedBytes: typed_data.Uint8List,
    isEncoded: core.bool,
    totalEncodedByteLength: core.int
  }));
  dart.setLibraryUri(asn1lib.ASN1Object, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1Object, () => ({
    __proto__: dart.getFields(asn1lib.ASN1Object.__proto__),
    [_tag]: dart.finalFieldType(core.int),
    [_encodedBytes]: dart.fieldType(typed_data.Uint8List),
    [_valueByteLength]: dart.fieldType(core.int),
    [_valueStartPosition$]: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(asn1lib.ASN1Object, ['toString']);
  asn1lib.ASN1Integer = class ASN1Integer extends asn1lib.ASN1Object {
    get intValue() {
      return this[_intValue$].toInt();
    }
    get valueAsBigInteger() {
      return this[_intValue$];
    }
    [_encode]() {
      let t = asn1lib.ASN1Integer.encodeBigInt(this[_intValue$]);
      this[_valueByteLength] = t[$length];
      super[_encodeHeader]();
      this[_setValueBytes](t);
      return this[_encodedBytes];
    }
    static encodeInt(x) {
      return asn1lib.ASN1Integer.encodeBigInt(core._BigIntImpl.from(x));
    }
    static decodeInt(bytes) {
      return asn1lib.ASN1Integer.decodeBigInt(bytes).toInt();
    }
    toString() {
      return "ASNInteger(" + dart.str(this.intValue) + ")";
    }
    static decodeBigInt(bytes) {
      let isNegative = (dart.notNull(bytes[$_get](0)) & 128) !== 0;
      let result = core.BigInt.zero;
      for (let i = 0; i < dart.notNull(bytes[$length]); i = i + 1) {
        result = result['<<'](8);
        let x = isNegative ? (dart.notNull(bytes[$_get](i)) ^ 255) >>> 0 : bytes[$_get](i);
        result = result['+'](core._BigIntImpl.from(x));
      }
      if (isNegative) return result['+'](core.BigInt.one)['*'](asn1lib.ASN1Integer._minusOne);
      return result;
    }
    static encodeBigInt(number) {
      let orig = number;
      if (number.bitLength === 0) {
        if (dart.equals(number, asn1lib.ASN1Integer._negOne)) {
          return asn1lib.ASN1Integer._negOneArray;
        } else {
          return asn1lib.ASN1Integer._zeroList;
        }
      }
      let bytes = (dart.notNull(number.bitLength) / 8)[$ceil]() + 1;
      let result = _native_typed_data.NativeUint8List.new(bytes);
      number = number.abs();
      for (let i = 0, j = bytes - 1; i < bytes; i = i + 1, j = j - 1) {
        let x = number.remainder(asn1lib.ASN1Integer._b256).toInt();
        result[$_set](j, x);
        number = number['>>'](8);
      }
      if (dart.test(orig.isNegative)) {
        asn1lib.ASN1Integer._twosComplement(result);
        if ((dart.notNull(result[$_get](1)) & 128) === 128) {
          return result[$sublist](1);
        }
      } else {
        if ((dart.notNull(result[$_get](1)) & 128) !== 128) {
          return result[$sublist](1);
        }
      }
      return result;
    }
    static _twosComplement(result) {
      let t1, t0, t1$, t0$;
      let carry = 1;
      for (let j = dart.notNull(result[$length]) - 1; j >= 0; j = j - 1) {
        t0 = result;
        t1 = j;
        t0[$_set](t1, (dart.notNull(t0[$_get](t1)) ^ 255) >>> 0);
        if (result[$_get](j) === 255 && carry === 1) {
          result[$_set](j, 0);
          carry = 1;
        } else {
          t0$ = result;
          t1$ = j;
          t0$[$_set](t1$, dart.notNull(t0$[$_get](t1$)) + carry);
          carry = 0;
        }
      }
      result[$_set](0, (dart.notNull(result[$_get](0)) | 128) >>> 0);
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || asn1lib.ASN1Integer.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this[_intValue$], other[_intValue$]);
    }
    get hashCode() {
      return dart.hashCode(this[_intValue$]);
    }
  };
  (asn1lib.ASN1Integer.new = function(_intValue, opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 2;
    this[_intValue$] = _intValue;
    asn1lib.ASN1Integer.__proto__.new.call(this, {tag: core.int._check(tag)});
    ;
  }).prototype = asn1lib.ASN1Integer.prototype;
  (asn1lib.ASN1Integer.fromInt = function(x, opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 2;
    this[_intValue$] = null;
    asn1lib.ASN1Integer.__proto__.new.call(this, {tag: core.int._check(tag)});
    this[_intValue$] = core._BigIntImpl.from(x);
    this[_encode]();
  }).prototype = asn1lib.ASN1Integer.prototype;
  (asn1lib.ASN1Integer.fromBytes = function(bytes) {
    this[_intValue$] = null;
    asn1lib.ASN1Integer.__proto__.fromBytes.call(this, bytes);
    this[_intValue$] = asn1lib.ASN1Integer.decodeBigInt(this.valueBytes());
  }).prototype = asn1lib.ASN1Integer.prototype;
  dart.addTypeTests(asn1lib.ASN1Integer);
  dart.setMethodSignature(asn1lib.ASN1Integer, () => ({
    __proto__: dart.getMethods(asn1lib.ASN1Integer.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(asn1lib.ASN1Integer, () => ({
    __proto__: dart.getGetters(asn1lib.ASN1Integer.__proto__),
    intValue: core.int,
    valueAsBigInteger: core.BigInt
  }));
  dart.setLibraryUri(asn1lib.ASN1Integer, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1Integer, () => ({
    __proto__: dart.getFields(asn1lib.ASN1Integer.__proto__),
    [_intValue$]: dart.fieldType(core.BigInt)
  }));
  dart.defineExtensionMethods(asn1lib.ASN1Integer, ['toString', '_equals']);
  dart.defineExtensionAccessors(asn1lib.ASN1Integer, ['hashCode']);
  dart.defineLazy(asn1lib.ASN1Integer, {
    /*asn1lib.ASN1Integer._b256*/get _b256() {
      return core._BigIntImpl.from(256);
    },
    /*asn1lib.ASN1Integer._minusOne*/get _minusOne() {
      return core._BigIntImpl.from(-1);
    },
    /*asn1lib.ASN1Integer._negOne*/get _negOne() {
      return core._BigIntImpl.from(-1);
    },
    set _negOne(_) {},
    /*asn1lib.ASN1Integer._negOneArray*/get _negOneArray() {
      return _native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([255]));
    },
    set _negOneArray(_) {},
    /*asn1lib.ASN1Integer._zeroList*/get _zeroList() {
      return _native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([0]));
    }
  });
  asn1lib.ASN1Enumerated = class ASN1Enumerated extends asn1lib.ASN1Integer {};
  (asn1lib.ASN1Enumerated.new = function(i, opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 10;
    asn1lib.ASN1Enumerated.__proto__.new.call(this, core._BigIntImpl.from(i), {tag: tag});
    ;
  }).prototype = asn1lib.ASN1Enumerated.prototype;
  dart.addTypeTests(asn1lib.ASN1Enumerated);
  dart.setLibraryUri(asn1lib.ASN1Enumerated, "package:asn1lib/asn1lib.dart");
  asn1lib.ASN1Util = class ASN1Util extends core.Object {
    static listToString(list) {
      let b = new core.StringBuffer.new("[");
      let doComma = false;
      list[$forEach](dart.fn(v => {
        doComma ? b.write(", ") : doComma = true;
        b.write("0x" + v[$toRadixString](16));
      }, intToNull()));
      b.write("]");
      return b.toString();
    }
    static obj2HexString(x) {
      if (core.List.is(x)) {
        return asn1lib.ASN1Util.listToString(ListOfint()._check(x));
      } else {
        return core.String._check(dart.dsend(x, 'toRadixString', [16]));
      }
    }
    static bytes2BigInt(bytes) {
      let x = core.BigInt.zero;
      for (let i = 0; i < dart.notNull(bytes[$length]); i = i + 1) {
        x = x['<<'](8);
        x = x['+'](core._BigIntImpl.from(bytes[$_get](i)));
      }
      return x;
    }
  };
  (asn1lib.ASN1Util.new = function() {
    ;
  }).prototype = asn1lib.ASN1Util.prototype;
  dart.addTypeTests(asn1lib.ASN1Util);
  dart.setLibraryUri(asn1lib.ASN1Util, "package:asn1lib/asn1lib.dart");
  const octets$ = dart.privateName(asn1lib, "ASN1OctetString.octets");
  asn1lib.ASN1OctetString = class ASN1OctetString extends asn1lib.ASN1Object {
    get octets() {
      return this[octets$];
    }
    set octets(value) {
      this[octets$] = value;
    }
    contentBytes() {
      return this.octets;
    }
    get stringValue() {
      return core.String.fromCharCodes(this.octets);
    }
    [_encode]() {
      this[_valueByteLength] = this.octets[$length];
      this[_encodeHeader]();
      this[_setValueBytes](this.octets);
      return this[_encodedBytes];
    }
    toString() {
      return "OctetString(" + dart.str(this.stringValue) + ")";
    }
  };
  (asn1lib.ASN1OctetString.new = function(octets, opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 4;
    this[octets$] = null;
    asn1lib.ASN1OctetString.__proto__.new.call(this, {tag: tag});
    if (typeof octets == 'string') {
      this.octets = _native_typed_data.NativeUint8List.fromList(octets[$codeUnits]);
    } else if (typed_data.Uint8List.is(octets)) {
      this.octets = octets;
    } else if (ListOfint().is(octets)) {
      this.octets = _native_typed_data.NativeUint8List.fromList(octets);
    } else {
      dart.throw(new core.ArgumentError.new("Parameters octets should be either of type String or List<int>."));
    }
  }).prototype = asn1lib.ASN1OctetString.prototype;
  (asn1lib.ASN1OctetString.fromBytes = function(bytes) {
    this[octets$] = null;
    asn1lib.ASN1OctetString.__proto__.fromBytes.call(this, bytes);
    this.octets = this.valueBytes();
  }).prototype = asn1lib.ASN1OctetString.prototype;
  dart.addTypeTests(asn1lib.ASN1OctetString);
  dart.setGetterSignature(asn1lib.ASN1OctetString, () => ({
    __proto__: dart.getGetters(asn1lib.ASN1OctetString.__proto__),
    stringValue: core.String
  }));
  dart.setLibraryUri(asn1lib.ASN1OctetString, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1OctetString, () => ({
    __proto__: dart.getFields(asn1lib.ASN1OctetString.__proto__),
    octets: dart.fieldType(typed_data.Uint8List)
  }));
  dart.defineExtensionMethods(asn1lib.ASN1OctetString, ['toString']);
  const message$ = dart.privateName(asn1lib, "ASN1Exception.message");
  asn1lib.ASN1Exception = class ASN1Exception extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      this[message$] = value;
    }
  };
  (asn1lib.ASN1Exception.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = asn1lib.ASN1Exception.prototype;
  dart.addTypeTests(asn1lib.ASN1Exception);
  dart.setLibraryUri(asn1lib.ASN1Exception, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1Exception, () => ({
    __proto__: dart.getFields(asn1lib.ASN1Exception.__proto__),
    message: dart.fieldType(core.String)
  }));
  const _decodeSeq = dart.privateName(asn1lib, "_decodeSeq");
  const _childLength = dart.privateName(asn1lib, "_childLength");
  const elements = dart.privateName(asn1lib, "ASN1Sequence.elements");
  asn1lib.ASN1Sequence = class ASN1Sequence extends asn1lib.ASN1Object {
    get elements() {
      return this[elements];
    }
    set elements(value) {
      this[elements] = value;
    }
    add(o) {
      this.elements[$add](o);
    }
    [_encode]() {
      this[_valueByteLength] = this[_childLength]();
      super[_encodeHeader]();
      let i = this[_valueStartPosition$];
      this.elements[$forEach](dart.fn(obj => {
        let b = obj.encodedBytes;
        this.encodedBytes[$setRange](i, dart.notNull(i) + dart.notNull(b[$length]), b);
        i = dart.notNull(i) + dart.notNull(b[$length]);
      }, ASN1ObjectToNull()));
      return this[_encodedBytes];
    }
    [_childLength]() {
      let l = 0;
      this.elements[$forEach](dart.fn(obj => {
        l = l + dart.notNull(obj[_encode]()[$length]);
      }, ASN1ObjectToNull()));
      return l;
    }
    [_decodeSeq]() {
      let parser = new asn1lib.ASN1Parser.new(this.valueBytes());
      while (dart.test(parser.hasNext())) {
        this.elements[$add](parser.nextObject());
      }
    }
    toString() {
      let b = new core.StringBuffer.new("Seq[");
      this.elements[$forEach](dart.fn(e => {
        b.write(dart.toString(e));
        b.write(" ");
      }, ASN1ObjectToNull()));
      b.write("]");
      return b.toString();
    }
  };
  (asn1lib.ASN1Sequence.fromBytes = function(bytes) {
    this[elements] = JSArrayOfASN1Object().of([]);
    asn1lib.ASN1Sequence.__proto__.fromBytes.call(this, bytes);
    if ((dart.notNull(this.tag) & 48) === 0) {
      dart.throw(new asn1lib.ASN1Exception.new("The tag " + dart.str(this.tag) + " does not look like a sequence type"));
    }
    this[_decodeSeq]();
  }).prototype = asn1lib.ASN1Sequence.prototype;
  (asn1lib.ASN1Sequence.new = function(opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 48;
    this[elements] = JSArrayOfASN1Object().of([]);
    asn1lib.ASN1Sequence.__proto__.new.call(this, {tag: tag});
    ;
  }).prototype = asn1lib.ASN1Sequence.prototype;
  dart.addTypeTests(asn1lib.ASN1Sequence);
  dart.setMethodSignature(asn1lib.ASN1Sequence, () => ({
    __proto__: dart.getMethods(asn1lib.ASN1Sequence.__proto__),
    add: dart.fnType(dart.dynamic, [asn1lib.ASN1Object]),
    [_childLength]: dart.fnType(core.int, []),
    [_decodeSeq]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(asn1lib.ASN1Sequence, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1Sequence, () => ({
    __proto__: dart.getFields(asn1lib.ASN1Sequence.__proto__),
    elements: dart.fieldType(core.List$(asn1lib.ASN1Object))
  }));
  dart.defineExtensionMethods(asn1lib.ASN1Sequence, ['toString']);
  const _length$ = dart.privateName(asn1lib, "_length");
  asn1lib.ASN1Length = class ASN1Length extends core.Object {
    get length() {
      return this[_length$];
    }
    get valueStartPosition() {
      return this[_valueStartPosition$];
    }
    static encodeLength(length) {
      let t0;
      let e = null;
      if (dart.notNull(length) <= 127) {
        e = _native_typed_data.NativeUint8List.new(1);
        e[$_set](0, length);
      } else {
        let x = _native_typed_data.NativeUint32List.new(1);
        x[$_set](0, length);
        let y = typed_data.Uint8List.view(x[$buffer]);
        let num = 3;
        while (y[$_get](num) === 0) {
          num = num - 1;
        }
        e = _native_typed_data.NativeUint8List.new(num + 2);
        e[$_set](0, 128 + num + 1);
        for (let i = 1; i < dart.notNull(e[$length]); i = i + 1) {
          e[$_set](i, y[$_get]((t0 = num, num = t0 - 1, t0)));
        }
      }
      return e;
    }
    static decodeLength(encodedBytes) {
      let t0;
      let valueStartPosition = 2;
      let length = dart.notNull(encodedBytes[$_get](1)) & 127;
      if (length !== encodedBytes[$_get](1)) {
        let numLengthBytes = length;
        length = 0;
        for (let i = 0; i < numLengthBytes; i = i + 1) {
          length = length << 8 >>> 0;
          length = (length | dart.notNull(encodedBytes[$_get]((t0 = valueStartPosition, valueStartPosition = t0 + 1, t0))) & 255) >>> 0;
        }
      }
      return new asn1lib.ASN1Length.new(length, valueStartPosition);
    }
  };
  (asn1lib.ASN1Length.new = function(_length, _valueStartPosition) {
    this[_length$] = _length;
    this[_valueStartPosition$] = _valueStartPosition;
    ;
  }).prototype = asn1lib.ASN1Length.prototype;
  dart.addTypeTests(asn1lib.ASN1Length);
  dart.setGetterSignature(asn1lib.ASN1Length, () => ({
    __proto__: dart.getGetters(asn1lib.ASN1Length.__proto__),
    length: core.int,
    valueStartPosition: core.int
  }));
  dart.setLibraryUri(asn1lib.ASN1Length, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1Length, () => ({
    __proto__: dart.getFields(asn1lib.ASN1Length.__proto__),
    [_length$]: dart.fieldType(core.int),
    [_valueStartPosition$]: dart.fieldType(core.int)
  }));
  const _position = dart.privateName(asn1lib, "_position");
  const _bytes$ = dart.privateName(asn1lib, "_bytes");
  const _doPrimitive = dart.privateName(asn1lib, "_doPrimitive");
  asn1lib.ASN1Parser = class ASN1Parser extends core.Object {
    hasNext() {
      return dart.notNull(this[_position]) < dart.notNull(this[_bytes$][$length]);
    }
    nextObject() {
      let tag = this[_bytes$][$_get](this[_position]);
      let isPrimitive = (192 & dart.notNull(tag)) === 0;
      let isApplication = (64 & dart.notNull(tag)) !== 0;
      let l = 0;
      let length = asn1lib.ASN1Length.decodeLength(this[_bytes$][$sublist](this[_position]));
      if (dart.notNull(this[_position]) < dart.notNull(length.length) + dart.notNull(length.valueStartPosition)) {
        l = dart.notNull(length.length) + dart.notNull(length.valueStartPosition);
      } else {
        l = dart.notNull(this[_bytes$][$length]) - dart.notNull(this[_position]);
      }
      let offset = dart.notNull(this[_position]) + dart.notNull(this[_bytes$][$offsetInBytes]);
      let subBytes = typed_data.Uint8List.view(this[_bytes$][$buffer], offset, l);
      let obj = null;
      if (isPrimitive) {
        obj = this[_doPrimitive](tag, subBytes);
      } else if (isApplication) {
        if ((dart.notNull(tag) & 48) !== 0) {
          obj = new asn1lib.ASN1Sequence.fromBytes(subBytes);
        } else {
          dart.throw(new asn1lib.ASN1Exception.new("Parser for tag " + dart.str(tag) + " not implemented yet"));
        }
      } else {
        obj = new asn1lib.ASN1Object.fromBytes(subBytes);
      }
      this[_position] = dart.notNull(this[_position]) + dart.notNull(obj.totalEncodedByteLength);
      return obj;
    }
    [_doPrimitive](tag, b) {
      switch (tag) {
        case 48:
        {
          return new asn1lib.ASN1Sequence.fromBytes(b);
        }
        case 4:
        {
          return new asn1lib.ASN1OctetString.fromBytes(b);
        }
        case 12:
        {
          return new asn1lib.ASN1UTF8String.fromBytes(b);
        }
        case 22:
        {
          return new asn1lib.ASN1IA5String.fromBytes(b);
        }
        case 2:
        case 10:
        {
          return new asn1lib.ASN1Integer.fromBytes(b);
        }
        case 49:
        {
          return new asn1lib.ASN1Set.fromBytes(b);
        }
        case 1:
        {
          return new asn1lib.ASN1Boolean.fromBytes(b);
        }
        case 6:
        {
          return new asn1lib.ASN1ObjectIdentifier.fromBytes(b);
        }
        case 3:
        {
          return new asn1lib.ASN1BitString.fromBytes(b);
        }
        case 5:
        {
          return new asn1lib.ASN1Null.fromBytes(b);
        }
        case 19:
        {
          return new asn1lib.ASN1PrintableString.fromBytes(b);
        }
        case 23:
        {
          return new asn1lib.ASN1UtcTime.fromBytes(b);
        }
        default:
        {
          dart.throw(new asn1lib.ASN1Exception.new("Parser for tag " + dart.str(tag) + " not implemented yet"));
        }
      }
    }
  };
  (asn1lib.ASN1Parser.new = function(_bytes) {
    this[_position] = 0;
    this[_bytes$] = _bytes;
    ;
  }).prototype = asn1lib.ASN1Parser.prototype;
  dart.addTypeTests(asn1lib.ASN1Parser);
  dart.setMethodSignature(asn1lib.ASN1Parser, () => ({
    __proto__: dart.getMethods(asn1lib.ASN1Parser.__proto__),
    hasNext: dart.fnType(core.bool, []),
    nextObject: dart.fnType(asn1lib.ASN1Object, []),
    [_doPrimitive]: dart.fnType(asn1lib.ASN1Object, [core.int, typed_data.Uint8List])
  }));
  dart.setLibraryUri(asn1lib.ASN1Parser, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1Parser, () => ({
    __proto__: dart.getFields(asn1lib.ASN1Parser.__proto__),
    [_bytes$]: dart.fieldType(typed_data.Uint8List),
    [_position]: dart.fieldType(core.int)
  }));
  asn1lib.ASN1Null = class ASN1Null extends asn1lib.ASN1Object {
    get [_encodedBytes]() {
      return _native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([this.tag, 0]));
    }
    set [_encodedBytes](value) {
      super[_encodedBytes] = value;
    }
    [_encode]() {
      return _native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([this.tag, 0]));
    }
  };
  (asn1lib.ASN1Null.new = function(opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 5;
    asn1lib.ASN1Null.__proto__.new.call(this, {tag: core.int._check(tag)});
    ;
  }).prototype = asn1lib.ASN1Null.prototype;
  (asn1lib.ASN1Null.fromBytes = function(bytes) {
    asn1lib.ASN1Null.__proto__.fromBytes.call(this, bytes);
    ;
  }).prototype = asn1lib.ASN1Null.prototype;
  dart.addTypeTests(asn1lib.ASN1Null);
  dart.setGetterSignature(asn1lib.ASN1Null, () => ({
    __proto__: dart.getGetters(asn1lib.ASN1Null.__proto__),
    [_encodedBytes]: typed_data.Uint8List
  }));
  dart.setLibraryUri(asn1lib.ASN1Null, "package:asn1lib/asn1lib.dart");
  const _boolValue$ = dart.privateName(asn1lib, "_boolValue");
  asn1lib.ASN1Boolean = class ASN1Boolean extends asn1lib.ASN1Object {
    get booleanValue() {
      return this[_boolValue$];
    }
    [_encode]() {
      super[_encodeHeader]();
      super[_setValueBytes](JSArrayOfint().of([dart.equals(this[_boolValue$], true) ? 255 : 0]));
      return this[_encodedBytes];
    }
  };
  (asn1lib.ASN1Boolean.new = function(_boolValue, opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 1;
    this[_boolValue$] = _boolValue;
    asn1lib.ASN1Boolean.__proto__.new.call(this, {tag: core.int._check(tag)});
    this[_valueByteLength] = 1;
  }).prototype = asn1lib.ASN1Boolean.prototype;
  (asn1lib.ASN1Boolean.fromBytes = function(bytes) {
    this[_boolValue$] = null;
    asn1lib.ASN1Boolean.__proto__.fromBytes.call(this, bytes);
    let b = bytes[$_get](this[_valueStartPosition$]);
    this[_boolValue$] = b === 255;
  }).prototype = asn1lib.ASN1Boolean.prototype;
  dart.addTypeTests(asn1lib.ASN1Boolean);
  dart.setGetterSignature(asn1lib.ASN1Boolean, () => ({
    __proto__: dart.getGetters(asn1lib.ASN1Boolean.__proto__),
    booleanValue: core.bool
  }));
  dart.setLibraryUri(asn1lib.ASN1Boolean, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1Boolean, () => ({
    __proto__: dart.getFields(asn1lib.ASN1Boolean.__proto__),
    [_boolValue$]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(asn1lib.ASN1Boolean, {
    /*asn1lib.ASN1Boolean.ASN1TrueBoolean*/get ASN1TrueBoolean() {
      return new asn1lib.ASN1Boolean.new(true);
    },
    /*asn1lib.ASN1Boolean.ASN1FalseBoolean*/get ASN1FalseBoolean() {
      return new asn1lib.ASN1Boolean.new(false);
    }
  });
  const _decodeSet = dart.privateName(asn1lib, "_decodeSet");
  const elements$ = dart.privateName(asn1lib, "ASN1Set.elements");
  asn1lib.ASN1Set = class ASN1Set extends asn1lib.ASN1Object {
    get elements() {
      return this[elements$];
    }
    set elements(value) {
      this[elements$] = value;
    }
    add(o) {
      this.elements.add(o);
    }
    [_encode]() {
      this[_valueByteLength] = this[_childLength]();
      super[_encodeHeader]();
      let i = this[_valueStartPosition$];
      this.elements[$forEach](dart.fn(obj => {
        let b = obj.encodedBytes;
        this.encodedBytes[$setRange](i, dart.notNull(i) + dart.notNull(b[$length]), b);
        i = dart.notNull(i) + dart.notNull(b[$length]);
      }, ASN1ObjectToNull()));
      return this[_encodedBytes];
    }
    [_childLength]() {
      let l = 0;
      this.elements[$forEach](dart.fn(obj => {
        obj[_encode]();
        l = l + dart.notNull(obj.encodedBytes[$length]);
      }, ASN1ObjectToNull()));
      return l;
    }
    [_decodeSet]() {
      let parser = new asn1lib.ASN1Parser.new(this.valueBytes());
      while (dart.test(parser.hasNext())) {
        this.elements.add(parser.nextObject());
      }
    }
    toString() {
      let b = new core.StringBuffer.new("Set[");
      this.elements[$forEach](dart.fn(e => {
        b.write(dart.toString(e));
        b.write(" ");
      }, ASN1ObjectToNull()));
      b.write("]");
      return b.toString();
    }
  };
  (asn1lib.ASN1Set.fromBytes = function(bytes) {
    this[elements$] = new (_HashSetOfASN1Object()).new();
    asn1lib.ASN1Set.__proto__.fromBytes.call(this, bytes);
    if ((dart.notNull(this.tag) & 49) === 0) {
      dart.throw(new asn1lib.ASN1Exception.new("The tag " + dart.str(this.tag) + " does not look like a set type"));
    }
    this[_decodeSet]();
  }).prototype = asn1lib.ASN1Set.prototype;
  (asn1lib.ASN1Set.new = function(opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 49;
    this[elements$] = new (_HashSetOfASN1Object()).new();
    asn1lib.ASN1Set.__proto__.new.call(this, {tag: tag});
    ;
  }).prototype = asn1lib.ASN1Set.prototype;
  dart.addTypeTests(asn1lib.ASN1Set);
  dart.setMethodSignature(asn1lib.ASN1Set, () => ({
    __proto__: dart.getMethods(asn1lib.ASN1Set.__proto__),
    add: dart.fnType(dart.dynamic, [asn1lib.ASN1Object]),
    [_childLength]: dart.fnType(core.int, []),
    [_decodeSet]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(asn1lib.ASN1Set, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1Set, () => ({
    __proto__: dart.getFields(asn1lib.ASN1Set.__proto__),
    elements: dart.fieldType(core.Set$(asn1lib.ASN1Object))
  }));
  dart.defineExtensionMethods(asn1lib.ASN1Set, ['toString']);
  const oi$ = dart.privateName(asn1lib, "ASN1ObjectIdentifier.oi");
  const identifier$ = dart.privateName(asn1lib, "ASN1ObjectIdentifier.identifier");
  asn1lib.ASN1ObjectIdentifier = class ASN1ObjectIdentifier extends asn1lib.ASN1Object {
    get oi() {
      return this[oi$];
    }
    set oi(value) {
      this[oi$] = value;
    }
    get identifier() {
      return this[identifier$];
    }
    set identifier(value) {
      this[identifier$] = value;
    }
    [_encode]() {
      this[_valueByteLength] = this.oi[$length];
      super[_encodeHeader]();
      this[_setValueBytes](this.oi);
      return this[_encodedBytes];
    }
    static fromComponentString(path, opts) {
      let tag = opts && 'tag' in opts ? opts.tag : 6;
      return asn1lib.ASN1ObjectIdentifier.fromComponents(path[$split](".")[$map](core.int, dart.fn(v => core.int.parse(v), StringToint()))[$toList](), {tag: tag});
    }
    static fromComponents(components, opts) {
      let tag = opts && 'tag' in opts ? opts.tag : 6;
      if (!(dart.notNull(components[$length]) >= 2)) dart.assertFailed(null, "org-dartlang-app:///packages/asn1lib/asn1objectidentifier.dart", 140, 12, "components.length >= 2");
      if (!(dart.notNull(components[$_get](0)) < 3)) dart.assertFailed(null, "org-dartlang-app:///packages/asn1lib/asn1objectidentifier.dart", 141, 12, "components[0] < 3");
      if (!(dart.notNull(components[$_get](1)) < 64)) dart.assertFailed(null, "org-dartlang-app:///packages/asn1lib/asn1objectidentifier.dart", 142, 12, "components[1] < 64");
      let oi = JSArrayOfint().of([]);
      oi[$add](dart.notNull(components[$_get](0)) * 40 + dart.notNull(components[$_get](1)));
      for (let ci = 2; ci < dart.notNull(components[$length]); ci = ci + 1) {
        let position = oi[$length];
        let v = components[$_get](ci);
        if (!(dart.notNull(v) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/asn1lib/asn1objectidentifier.dart", 150, 14, "v > 0");
        let first = true;
        do {
          let remainder = dart.notNull(v) & 127;
          v = v[$rightShift](7);
          if (first) {
            first = false;
          } else {
            remainder = (remainder | 128) >>> 0;
          }
          oi[$insert](position, remainder);
        } while (dart.notNull(v) > 0);
      }
      return new asn1lib.ASN1ObjectIdentifier.new(oi, {tag: tag});
    }
    static fromName(name, opts) {
      let tag = opts && 'tag' in opts ? opts.tag : 6;
      name = name[$toLowerCase]();
      for (let entry of asn1lib.ASN1ObjectIdentifier._names[$entries]) {
        if (entry.key == name) {
          return new asn1lib.ASN1ObjectIdentifier.new(entry.value.oi, {tag: entry.value.tag});
        }
      }
      return null;
    }
    static registerObjectIdentiferName(name, oid) {
      asn1lib.ASN1ObjectIdentifier._names[$_set](name[$toLowerCase](), oid);
    }
    static registerManyNames(pairs) {
      pairs[$forEach](dart.fn((key, value) => {
        asn1lib.ASN1ObjectIdentifier.registerObjectIdentiferName(key, asn1lib.ASN1ObjectIdentifier.fromComponentString(value));
      }, StringAndStringToNull()));
    }
    static registerFrequentNames() {
      asn1lib.ASN1ObjectIdentifier.registerManyNames(asn1lib.ASN1ObjectIdentifier.DN);
    }
  };
  (asn1lib.ASN1ObjectIdentifier.new = function(oi, opts) {
    let identifier = opts && 'identifier' in opts ? opts.identifier : null;
    let tag = opts && 'tag' in opts ? opts.tag : 6;
    this[oi$] = oi;
    this[identifier$] = identifier;
    asn1lib.ASN1ObjectIdentifier.__proto__.new.call(this, {tag: core.int._check(tag)});
    ;
  }).prototype = asn1lib.ASN1ObjectIdentifier.prototype;
  (asn1lib.ASN1ObjectIdentifier.fromBytes = function(bytes) {
    this[identifier$] = null;
    this[oi$] = null;
    asn1lib.ASN1ObjectIdentifier.__proto__.fromBytes.call(this, bytes);
    let subBytes = bytes[$sublist](2, bytes[$length]);
    let value = 0;
    let first = true;
    let bigValue = null;
    let list = JSArrayOfint().of([]);
    let objId = new core.StringBuffer.new();
    for (let i = 0; i !== subBytes[$length]; i = i + 1) {
      let b = dart.notNull(subBytes[$_get](i)) & 255;
      if (value < 36028797018963968) {
        value = value * 128 + (b & 127);
        if ((b & 128) === 0) {
          if (first) {
            switch ((value / 40)[$truncate]()) {
              case 0:
              {
                list[$add](0);
                objId.write("0");
                break;
              }
              case 1:
              {
                list[$add](1);
                objId.write("1");
                value = value - 40;
                break;
              }
              default:
              {
                list[$add](2);
                objId.write("2");
                value = value - 80;
              }
            }
            first = false;
          }
          list[$add](value);
          objId.write(".");
          objId.write(value);
          value = 0;
        }
      } else {
        if (bigValue == null) {
          bigValue = core._BigIntImpl.from(value);
        }
        bigValue = bigValue['<<'](7);
        bigValue = bigValue['|'](core._BigIntImpl.from(b & 127));
        if ((b & 128) === 0) {
          objId.write(".");
          objId.write(bigValue);
          bigValue = null;
          value = 0;
        }
      }
    }
    let objIdAsString = objId.toString();
    for (let k of asn1lib.ASN1ObjectIdentifier.DN[$keys]) {
      if (asn1lib.ASN1ObjectIdentifier.DN[$_get](k) == objIdAsString) {
        this.oi = list;
        this.identifier = objId.toString();
      }
    }
  }).prototype = asn1lib.ASN1ObjectIdentifier.prototype;
  dart.addTypeTests(asn1lib.ASN1ObjectIdentifier);
  dart.setLibraryUri(asn1lib.ASN1ObjectIdentifier, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1ObjectIdentifier, () => ({
    __proto__: dart.getFields(asn1lib.ASN1ObjectIdentifier.__proto__),
    oi: dart.fieldType(core.List$(core.int)),
    identifier: dart.fieldType(core.String)
  }));
  dart.defineLazy(asn1lib.ASN1ObjectIdentifier, {
    /*asn1lib.ASN1ObjectIdentifier.DN*/get DN() {
      return new (IdentityMapOfString$String()).from(["cn", "2.5.4.3", "sn", "2.5.4.4", "c", "2.5.4.6", "l", "2.5.4.7", "st", "2.5.4.8", "s", "2.5.4.8", "o", "2.5.4.10", "ou", "2.5.4.11", "title", "2.5.4.12", "registeredAddress", "2.5.4.26", "member", "2.5.4.31", "owner", "2.5.4.32", "roleOccupant", "2.5.4.33", "seeAlso", "2.5.4.34", "givenName", "2.5.4.42", "initials", "2.5.4.43", "generationQualifier", "2.5.4.44", "dmdName", "2.5.4.54", "alias", "2.5.6.1", "country", "2.5.6.2", "locality", "2.5.6.3", "organization", "2.5.6.4", "organizationalUnit", "2.5.6.5", "person", "2.5.6.6", "organizationalPerson", "2.5.6.7", "organizationalRole", "2.5.6.8", "groupOfNames", "2.5.6.9", "residentialPerson", "2.5.6.10", "applicationProcess", "2.5.6.11", "applicationEntity", "2.5.6.12", "dSA", "2.5.6.13", "device", "2.5.6.14", "strongAuthenticationUser", "2.5.6.15", "certificationAuthority", "2.5.6.16", "groupOfUniqueNames", "2.5.6.17", "userSecurityInformation", "2.5.6.18", "certificationAuthority-V2", "2.5.6.16.2", "cRLDistributionPoint", "2.5.6.19", "dmd", "2.5.6.20", "md5WithRSAEncryption", "1.2.840.113549.1.1.4", "rsaEncryption", "1.2.840.113549.1.1.1", "sha256WithRSAEncryption", "1.2.840.113549.1.1.11", "subjectAltName", "2.5.29.17", "businessCategory", "2.5.4.15"]);
    },
    /*asn1lib.ASN1ObjectIdentifier._names*/get _names() {
      return new (LinkedMapOfString$ASN1ObjectIdentifier()).new();
    },
    set _names(_) {}
  });
  const stringValue$ = dart.privateName(asn1lib, "ASN1BitString.stringValue");
  const unusedbits$ = dart.privateName(asn1lib, "ASN1BitString.unusedbits");
  asn1lib.ASN1BitString = class ASN1BitString extends asn1lib.ASN1Object {
    get stringValue() {
      return this[stringValue$];
    }
    set stringValue(value) {
      this[stringValue$] = value;
    }
    get unusedbits() {
      return this[unusedbits$];
    }
    set unusedbits(value) {
      this[unusedbits$] = value;
    }
    contentBytes() {
      return _native_typed_data.NativeUint8List.fromList(this.stringValue);
    }
    [_encode]() {
      let valBytes = JSArrayOfint().of([this.unusedbits]);
      valBytes[$addAll](this.stringValue);
      this[_valueByteLength] = valBytes[$length];
      this[_encodeHeader]();
      this[_setValueBytes](valBytes);
      return this[_encodedBytes];
    }
    static decodeOctetString(bytes) {
      return core.String.fromCharCodes(bytes);
    }
    toString() {
      return "BitString(" + dart.str(this.stringValue) + ")";
    }
  };
  (asn1lib.ASN1BitString.new = function(stringValue, opts) {
    let unusedbits = opts && 'unusedbits' in opts ? opts.unusedbits : 0;
    let tag = opts && 'tag' in opts ? opts.tag : 3;
    this[stringValue$] = stringValue;
    this[unusedbits$] = unusedbits;
    asn1lib.ASN1BitString.__proto__.new.call(this, {tag: tag});
    ;
  }).prototype = asn1lib.ASN1BitString.prototype;
  (asn1lib.ASN1BitString.fromBytes = function(bytes) {
    this[unusedbits$] = null;
    this[stringValue$] = null;
    asn1lib.ASN1BitString.__proto__.fromBytes.call(this, bytes);
    this.unusedbits = bytes[$_get](0);
    this.stringValue = this.valueBytes()[$sublist](1);
  }).prototype = asn1lib.ASN1BitString.prototype;
  dart.addTypeTests(asn1lib.ASN1BitString);
  dart.setLibraryUri(asn1lib.ASN1BitString, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1BitString, () => ({
    __proto__: dart.getFields(asn1lib.ASN1BitString.__proto__),
    stringValue: dart.fieldType(core.List$(core.int)),
    unusedbits: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(asn1lib.ASN1BitString, ['toString']);
  const stringValue$0 = dart.privateName(asn1lib, "ASN1PrintableString.stringValue");
  asn1lib.ASN1PrintableString = class ASN1PrintableString extends asn1lib.ASN1Object {
    get stringValue() {
      return this[stringValue$0];
    }
    set stringValue(value) {
      this[stringValue$0] = value;
    }
    [_encode]() {
      let octets = convert.ascii.encode(this.stringValue);
      this[_valueByteLength] = octets[$length];
      this[_encodeHeader]();
      this[_setValueBytes](octets);
      return this[_encodedBytes];
    }
    toString() {
      return "PrintableString(" + dart.str(this.stringValue) + ")";
    }
  };
  (asn1lib.ASN1PrintableString.new = function(stringValue, opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 19;
    this[stringValue$0] = stringValue;
    asn1lib.ASN1PrintableString.__proto__.new.call(this, {tag: tag});
    ;
  }).prototype = asn1lib.ASN1PrintableString.prototype;
  (asn1lib.ASN1PrintableString.fromBytes = function(bytes) {
    this[stringValue$0] = null;
    asn1lib.ASN1PrintableString.__proto__.fromBytes.call(this, bytes);
    let octets = this.valueBytes();
    this.stringValue = convert.ascii.decode(octets);
  }).prototype = asn1lib.ASN1PrintableString.prototype;
  dart.addTypeTests(asn1lib.ASN1PrintableString);
  dart.setLibraryUri(asn1lib.ASN1PrintableString, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1PrintableString, () => ({
    __proto__: dart.getFields(asn1lib.ASN1PrintableString.__proto__),
    stringValue: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(asn1lib.ASN1PrintableString, ['toString']);
  const utf8StringValue$ = dart.privateName(asn1lib, "ASN1UTF8String.utf8StringValue");
  asn1lib.ASN1UTF8String = class ASN1UTF8String extends asn1lib.ASN1Object {
    get utf8StringValue() {
      return this[utf8StringValue$];
    }
    set utf8StringValue(value) {
      this[utf8StringValue$] = value;
    }
    [_encode]() {
      let octets = convert.utf8.encode(this.utf8StringValue);
      this[_valueByteLength] = octets[$length];
      this[_encodeHeader]();
      this[_setValueBytes](octets);
      return this[_encodedBytes];
    }
    toString() {
      return "UTF8String(" + dart.str(this.utf8StringValue) + ")";
    }
  };
  (asn1lib.ASN1UTF8String.new = function(utf8StringValue, opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 12;
    this[utf8StringValue$] = utf8StringValue;
    asn1lib.ASN1UTF8String.__proto__.new.call(this, {tag: tag});
    ;
  }).prototype = asn1lib.ASN1UTF8String.prototype;
  (asn1lib.ASN1UTF8String.fromBytes = function(bytes) {
    this[utf8StringValue$] = null;
    asn1lib.ASN1UTF8String.__proto__.fromBytes.call(this, bytes);
    let octets = this.valueBytes();
    this.utf8StringValue = convert.utf8.decode(octets);
  }).prototype = asn1lib.ASN1UTF8String.prototype;
  dart.addTypeTests(asn1lib.ASN1UTF8String);
  dart.setLibraryUri(asn1lib.ASN1UTF8String, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1UTF8String, () => ({
    __proto__: dart.getFields(asn1lib.ASN1UTF8String.__proto__),
    utf8StringValue: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(asn1lib.ASN1UTF8String, ['toString']);
  const stringValue$1 = dart.privateName(asn1lib, "ASN1IA5String.stringValue");
  asn1lib.ASN1IA5String = class ASN1IA5String extends asn1lib.ASN1Object {
    get stringValue() {
      return this[stringValue$1];
    }
    set stringValue(value) {
      this[stringValue$1] = value;
    }
    [_encode]() {
      let octets = convert.ascii.encode(this.stringValue);
      this[_valueByteLength] = octets[$length];
      this[_encodeHeader]();
      this[_setValueBytes](octets);
      return this[_encodedBytes];
    }
    toString() {
      return "IA5String(" + dart.str(this.stringValue) + ")";
    }
  };
  (asn1lib.ASN1IA5String.new = function(stringValue, opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 22;
    this[stringValue$1] = stringValue;
    asn1lib.ASN1IA5String.__proto__.new.call(this, {tag: tag});
    ;
  }).prototype = asn1lib.ASN1IA5String.prototype;
  (asn1lib.ASN1IA5String.fromBytes = function(bytes) {
    this[stringValue$1] = null;
    asn1lib.ASN1IA5String.__proto__.fromBytes.call(this, bytes);
    let octets = this.valueBytes();
    this.stringValue = convert.ascii.decode(octets);
  }).prototype = asn1lib.ASN1IA5String.prototype;
  dart.addTypeTests(asn1lib.ASN1IA5String);
  dart.setLibraryUri(asn1lib.ASN1IA5String, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1IA5String, () => ({
    __proto__: dart.getFields(asn1lib.ASN1IA5String.__proto__),
    stringValue: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(asn1lib.ASN1IA5String, ['toString']);
  const dateTimeValue$ = dart.privateName(asn1lib, "ASN1UtcTime.dateTimeValue");
  asn1lib.ASN1UtcTime = class ASN1UtcTime extends asn1lib.ASN1Object {
    get dateTimeValue() {
      return this[dateTimeValue$];
    }
    set dateTimeValue(value) {
      this[dateTimeValue$] = value;
    }
    [_encode]() {
      let utc = this.dateTimeValue.toUtc();
      let year = dart.toString(utc.year)[$substring](2)[$padLeft](2, "0");
      let month = dart.toString(utc.month)[$padLeft](2, "0");
      let day = dart.toString(utc.day)[$padLeft](2, "0");
      let hour = dart.toString(utc.hour)[$padLeft](2, "0");
      let minute = dart.toString(utc.minute)[$padLeft](2, "0");
      let second = dart.toString(utc.second)[$padLeft](2, "0");
      let utcString = year + month + day + hour + minute + second + "Z";
      let valBytes = JSArrayOfint().of([]);
      valBytes[$addAll](convert.ascii.encode(utcString));
      this[_valueByteLength] = valBytes[$length];
      this[_encodeHeader]();
      this[_setValueBytes](valBytes);
      return this[_encodedBytes];
    }
    toString() {
      return "UtcTime(" + dart.str(this.dateTimeValue) + ")";
    }
  };
  (asn1lib.ASN1UtcTime.new = function(dateTimeValue, opts) {
    let tag = opts && 'tag' in opts ? opts.tag : 23;
    this[dateTimeValue$] = dateTimeValue;
    asn1lib.ASN1UtcTime.__proto__.new.call(this, {tag: tag});
    ;
  }).prototype = asn1lib.ASN1UtcTime.prototype;
  (asn1lib.ASN1UtcTime.fromBytes = function(bytes) {
    this[dateTimeValue$] = null;
    asn1lib.ASN1UtcTime.__proto__.fromBytes.call(this, bytes);
    let octets = this.valueBytes();
    let stringValue = convert.ascii.decode(octets);
    let y2 = core.int.parse(stringValue[$substring](0, 2));
    if (dart.notNull(y2) > 75) {
      stringValue = "19" + dart.notNull(stringValue);
    } else {
      stringValue = "20" + dart.notNull(stringValue);
    }
    stringValue = stringValue[$substring](0, 8) + "T" + stringValue[$substring](8);
    this.dateTimeValue = core.DateTime.parse(stringValue);
  }).prototype = asn1lib.ASN1UtcTime.prototype;
  dart.addTypeTests(asn1lib.ASN1UtcTime);
  dart.setLibraryUri(asn1lib.ASN1UtcTime, "package:asn1lib/asn1lib.dart");
  dart.setFieldSignature(asn1lib.ASN1UtcTime, () => ({
    __proto__: dart.getFields(asn1lib.ASN1UtcTime.__proto__),
    dateTimeValue: dart.fieldType(core.DateTime)
  }));
  dart.defineExtensionMethods(asn1lib.ASN1UtcTime, ['toString']);
  dart.defineLazy(asn1lib, {
    /*asn1lib.BOOLEAN_TYPE*/get BOOLEAN_TYPE() {
      return 1;
    },
    /*asn1lib.INTEGER_TYPE*/get INTEGER_TYPE() {
      return 2;
    },
    /*asn1lib.BIT_STRING_TYPE*/get BIT_STRING_TYPE() {
      return 3;
    },
    /*asn1lib.OCTET_STRING_TYPE*/get OCTET_STRING_TYPE() {
      return 4;
    },
    /*asn1lib.NULL_TYPE*/get NULL_TYPE() {
      return 5;
    },
    /*asn1lib.ENUMERATED_TYPE*/get ENUMERATED_TYPE() {
      return 10;
    },
    /*asn1lib.UTF8_STRING_TYPE*/get UTF8_STRING_TYPE() {
      return 12;
    },
    /*asn1lib.PRINTABLE_STRING_TYPE*/get PRINTABLE_STRING_TYPE() {
      return 19;
    },
    /*asn1lib.IA5_STRING_TYPE*/get IA5_STRING_TYPE() {
      return 22;
    },
    /*asn1lib.UTC_TIME_TYPE*/get UTC_TIME_TYPE() {
      return 23;
    },
    /*asn1lib.SEQUENCE_TYPE*/get SEQUENCE_TYPE() {
      return 48;
    },
    /*asn1lib.SET_TYPE*/get SET_TYPE() {
      return 49;
    },
    /*asn1lib.OBJECT_IDENTIFIER*/get OBJECT_IDENTIFIER() {
      return 6;
    },
    /*asn1lib.BOOLEAN_TRUE_VALUE*/get BOOLEAN_TRUE_VALUE() {
      return 255;
    },
    /*asn1lib.BOOLEAN_FALSE_VALUE*/get BOOLEAN_FALSE_VALUE() {
      return 0;
    }
  });
  dart.trackLibraries("packages/asn1lib/asn1lib", {
    "package:asn1lib/asn1lib.dart": asn1lib
  }, {
    "package:asn1lib/asn1lib.dart": ["asn1integer.dart", "asn1enumerated.dart", "asn1object.dart", "asn1util.dart", "asn1octetstring.dart", "asn1exception.dart", "asn1sequence.dart", "asn1length.dart", "asn1parser.dart", "asn1constants.dart", "asn1null.dart", "asn1boolean.dart", "asn1set.dart", "asn1objectidentifier.dart", "asn1bitstring.dart", "asn1printablestring.dart", "asn1utf8string.dart", "asn1ia5string.dart", "asn1utctime.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["asn1object.dart","asn1integer.dart","asn1enumerated.dart","asn1util.dart","asn1octetstring.dart","asn1exception.dart","asn1sequence.dart","asn1length.dart","asn1parser.dart","asn1null.dart","asn1boolean.dart","asn1set.dart","asn1objectidentifier.dart","asn1bitstring.dart","asn1printablestring.dart","asn1utf8string.dart","asn1ia5string.dart","asn1utctime.dart","asn1constants.dart"],"names":[],"mappings":"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","file":"asn1lib.ddc.js"}');
  // Exports:
  return {
    asn1lib: asn1lib
  };
});

//# sourceMappingURL=asn1lib.ddc.js.map
