define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ufixnum = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const $truncate = dartx.truncate;
  const $rightShift = dartx['>>'];
  const $toRadixString = dartx.toRadixString;
  const $_equals = dartx._equals;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $leftShift = dartx['<<'];
  const $setUint16 = dartx.setUint16;
  const $getUint16 = dartx.getUint16;
  const $setUint32 = dartx.setUint32;
  const $getUint32 = dartx.getUint32;
  const $_set = dartx._set;
  let ListOfRegister64 = () => (ListOfRegister64 = dart.constFn(core.List$(ufixnum.Register64)))();
  let intToRegister64 = () => (intToRegister64 = dart.constFn(dart.fnType(ufixnum.Register64, [core.int])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: typed_data.Endian.prototype,
        [Endian__littleEndian]: false
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: typed_data.Endian.prototype,
        [Endian__littleEndian]: true
      });
    }
  });
  const _hi32 = dart.privateName(ufixnum, "_hi32");
  const _lo32 = dart.privateName(ufixnum, "_lo32");
  const Endian__littleEndian = dart.privateName(typed_data, "Endian._littleEndian");
  let C0;
  let C1;
  const _padWrite = dart.privateName(ufixnum, "_padWrite");
  ufixnum.Register64 = class Register64 extends core.Object {
    get lo32() {
      return this[_lo32];
    }
    get hi32() {
      return this[_hi32];
    }
    _equals(y) {
      if (y == null) return false;
      return ufixnum.Register64.is(y) ? this[_hi32] == y[_hi32] && this[_lo32] == y[_lo32] : false;
    }
    ['<'](y) {
      return dart.notNull(this[_hi32]) < dart.notNull(y[_hi32]) || this[_hi32] == y[_hi32] && dart.notNull(this[_lo32]) < dart.notNull(y[_lo32]);
    }
    ['<='](y) {
      return dart.test(this['<'](y)) || this._equals(y);
    }
    ['>'](y) {
      return dart.notNull(this[_hi32]) > dart.notNull(y[_hi32]) || this[_hi32] == y[_hi32] && dart.notNull(this[_lo32]) > dart.notNull(y[_lo32]);
    }
    ['>='](y) {
      return dart.test(this['>'](y)) || this._equals(y);
    }
    set(hiOrLo32OrY, lo32 = null) {
      if (lo32 == null) {
        if (ufixnum.Register64.is(hiOrLo32OrY)) {
          this[_hi32] = hiOrLo32OrY[_hi32];
          this[_lo32] = hiOrLo32OrY[_lo32];
        } else {
          if (!dart.test(core.bool._check(dart.dsend(hiOrLo32OrY, '<=', [4294967295.0])))) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 255, 16, "hiOrLo32OrY <= _MASK_32");
          this[_hi32] = 0;
          this[_lo32] = core.int._check(hiOrLo32OrY);
        }
      } else {
        if (!dart.test(core.bool._check(dart.dsend(hiOrLo32OrY, '<=', [4294967295.0])))) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 260, 14, "hiOrLo32OrY <= _MASK_32");
        if (!(dart.notNull(lo32) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 261, 14, "lo32 <= _MASK_32");
        this[_hi32] = core.int._check(hiOrLo32OrY);
        this[_lo32] = lo32;
      }
    }
    sum(y) {
      if (core.int.is(y)) {
        y = dart.dsend(y, '&', [4294967295.0]);
        let slo32 = dart.asInt(dart.notNull(this[_lo32]) + dart.notNull(core.num._check(y)));
        this[_lo32] = (slo32 & 4294967295.0) >>> 0;
        if (slo32 !== this[_lo32]) {
          this[_hi32] = dart.notNull(this[_hi32]) + 1;
          this[_hi32] = (dart.notNull(this[_hi32]) & 4294967295.0) >>> 0;
        }
      } else {
        let slo32 = dart.asInt(dart.notNull(this[_lo32]) + dart.notNull(core.num._check(dart.dload(y, _lo32))));
        this[_lo32] = (slo32 & 4294967295.0) >>> 0;
        let carry = slo32 !== this[_lo32] ? 1 : 0;
        this[_hi32] = (dart.asInt(dart.notNull(this[_hi32]) + dart.notNull(core.num._check(dart.dload(y, _hi32))) + carry) & 4294967295.0) >>> 0;
      }
    }
    sumReg(y) {
      let slo32 = dart.notNull(this[_lo32]) + dart.notNull(y[_lo32]);
      this[_lo32] = (slo32 & 4294967295.0) >>> 0;
      let carry = slo32 !== this[_lo32] ? 1 : 0;
      this[_hi32] = (dart.notNull(this[_hi32]) + dart.notNull(y[_hi32]) + carry & 4294967295.0) >>> 0;
    }
    sub(y) {
      let t0;
      this.sum((t0 = new ufixnum.Register64.new(y), t0.neg(), t0));
    }
    mul(y) {
      if (core.int.is(y)) {
        let lo32 = dart.notNull(this[_lo32]) * dart.notNull(y);
        let carry = (lo32 / 4294967296)[$truncate]();
        let hi32 = dart.notNull(ufixnum.clip32(dart.notNull(this[_hi32]) * dart.notNull(y))) + carry;
        this[_hi32] = ufixnum.clip32(hi32);
        this[_lo32] = ufixnum.clip32(lo32);
      } else {
        let lo32 = dart.notNull(this[_lo32]) * dart.notNull(core.num._check(dart.dload(y, _lo32)));
        let carry = (lo32 / 4294967296)[$truncate]();
        let hi32 = dart.notNull(ufixnum.clip32(dart.asInt(dart.notNull(this[_hi32]) * dart.notNull(core.num._check(dart.dload(y, _lo32)))))) + dart.notNull(ufixnum.clip32(dart.asInt(dart.notNull(this[_lo32]) * dart.notNull(core.num._check(dart.dload(y, _hi32)))))) + carry;
        this[_hi32] = ufixnum.clip32(hi32);
        this[_lo32] = ufixnum.clip32(dart.asInt(lo32));
      }
    }
    neg() {
      this.not();
      this.sum(1);
    }
    not() {
      this[_hi32] = (~dart.notNull(this[_hi32]) & 4294967295.0) >>> 0;
      this[_lo32] = (~dart.notNull(this[_lo32]) & 4294967295.0) >>> 0;
    }
    and(y) {
      this[_hi32] = (dart.notNull(this[_hi32]) & dart.notNull(y[_hi32])) >>> 0;
      this[_lo32] = (dart.notNull(this[_lo32]) & dart.notNull(y[_lo32])) >>> 0;
    }
    or(y) {
      this[_hi32] = (dart.notNull(this[_hi32]) | dart.notNull(y[_hi32])) >>> 0;
      this[_lo32] = (dart.notNull(this[_lo32]) | dart.notNull(y[_lo32])) >>> 0;
    }
    xor(y) {
      this[_hi32] = (dart.notNull(this[_hi32]) ^ dart.notNull(y[_hi32])) >>> 0;
      this[_lo32] = (dart.notNull(this[_lo32]) ^ dart.notNull(y[_lo32])) >>> 0;
    }
    shiftl(n) {
      n = (dart.notNull(n) & 63) >>> 0;
      if (n === 0) {
      } else if (dart.notNull(n) >= 32) {
        this[_hi32] = ufixnum.shiftl32(this[_lo32], dart.notNull(n) - 32);
        this[_lo32] = 0;
      } else {
        this[_hi32] = ufixnum.shiftl32(this[_hi32], n);
        this[_hi32] = (dart.notNull(this[_hi32]) | this[_lo32][$rightShift](32 - dart.notNull(n))) >>> 0;
        this[_lo32] = ufixnum.shiftl32(this[_lo32], n);
      }
    }
    shiftr(n) {
      n = (dart.notNull(n) & 63) >>> 0;
      if (n === 0) {
      } else if (dart.notNull(n) >= 32) {
        this[_lo32] = this[_hi32][$rightShift](dart.notNull(n) - 32);
        this[_hi32] = 0;
      } else {
        this[_lo32] = this[_lo32][$rightShift](n);
        this[_lo32] = (dart.notNull(this[_lo32]) | dart.notNull(ufixnum.shiftl32(this[_hi32], 32 - dart.notNull(n)))) >>> 0;
        this[_hi32] = this[_hi32][$rightShift](n);
      }
    }
    rotl(n) {
      n = (dart.notNull(n) & 63) >>> 0;
      if (n === 0) {
      } else {
        if (dart.notNull(n) >= 32) {
          let swap = this[_hi32];
          this[_hi32] = this[_lo32];
          this[_lo32] = swap;
          n = dart.notNull(n) - 32;
        }
        if (n === 0) {
        } else {
          let hi32 = this[_hi32];
          this[_hi32] = ufixnum.shiftl32(this[_hi32], n);
          this[_hi32] = (dart.notNull(this[_hi32]) | this[_lo32][$rightShift](32 - dart.notNull(n))) >>> 0;
          this[_lo32] = ufixnum.shiftl32(this[_lo32], n);
          this[_lo32] = (dart.notNull(this[_lo32]) | hi32[$rightShift](32 - dart.notNull(n))) >>> 0;
        }
      }
    }
    rotr(n) {
      n = (dart.notNull(n) & 63) >>> 0;
      if (n === 0) {
      } else {
        if (dart.notNull(n) >= 32) {
          let swap = this[_hi32];
          this[_hi32] = this[_lo32];
          this[_lo32] = swap;
          n = dart.notNull(n) - 32;
        }
        if (n === 0) {
        } else {
          let hi32 = this[_hi32];
          this[_hi32] = this[_hi32][$rightShift](n);
          this[_hi32] = (dart.notNull(this[_hi32]) | dart.notNull(ufixnum.shiftl32(this[_lo32], 32 - dart.notNull(n)))) >>> 0;
          this[_lo32] = this[_lo32][$rightShift](n);
          this[_lo32] = (dart.notNull(this[_lo32]) | dart.notNull(ufixnum.shiftl32(hi32, 32 - dart.notNull(n)))) >>> 0;
        }
      }
    }
    pack(out, offset, endian) {
      switch (endian) {
        case C0 || CT.C0:
        {
          ufixnum.pack32(this.hi32, out, offset, endian);
          ufixnum.pack32(this.lo32, out, dart.notNull(offset) + 4, endian);
          break;
        }
        case C1 || CT.C1:
        {
          ufixnum.pack32(this.hi32, out, dart.notNull(offset) + 4, endian);
          ufixnum.pack32(this.lo32, out, offset, endian);
          break;
        }
        default:
        {
          dart.throw(new core.UnsupportedError.new("Invalid endianness: " + dart.str(endian)));
        }
      }
    }
    unpack(inp, offset, endian) {
      switch (endian) {
        case C0 || CT.C0:
        {
          this[_hi32] = ufixnum.unpack32(inp, offset, endian);
          this[_lo32] = ufixnum.unpack32(inp, dart.notNull(offset) + 4, endian);
          break;
        }
        case C1 || CT.C1:
        {
          this[_hi32] = ufixnum.unpack32(inp, dart.notNull(offset) + 4, endian);
          this[_lo32] = ufixnum.unpack32(inp, offset, endian);
          break;
        }
        default:
        {
          dart.throw(new core.UnsupportedError.new("Invalid endianness: " + dart.str(endian)));
        }
      }
    }
    toString() {
      let sb = new core.StringBuffer.new();
      this[_padWrite](sb, this[_hi32]);
      this[_padWrite](sb, this[_lo32]);
      return sb.toString();
    }
    [_padWrite](sb, value) {
      let str = value[$toRadixString](16);
      for (let i = 8 - str.length; i > 0; i = i - 1) {
        sb.write("0");
      }
      sb.write(str);
    }
  };
  (ufixnum.Register64.new = function(hiOrLo32OrY = 0, lo32 = null) {
    this[_hi32] = null;
    this[_lo32] = null;
    this.set(hiOrLo32OrY, lo32);
  }).prototype = ufixnum.Register64.prototype;
  dart.addTypeTests(ufixnum.Register64);
  dart.setMethodSignature(ufixnum.Register64, () => ({
    __proto__: dart.getMethods(ufixnum.Register64.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object]),
    '<': dart.fnType(core.bool, [ufixnum.Register64]),
    '<=': dart.fnType(core.bool, [ufixnum.Register64]),
    '>': dart.fnType(core.bool, [ufixnum.Register64]),
    '>=': dart.fnType(core.bool, [ufixnum.Register64]),
    set: dart.fnType(dart.void, [dart.dynamic], [core.int]),
    sum: dart.fnType(dart.void, [dart.dynamic]),
    sumReg: dart.fnType(dart.void, [ufixnum.Register64]),
    sub: dart.fnType(dart.void, [dart.dynamic]),
    mul: dart.fnType(dart.void, [dart.dynamic]),
    neg: dart.fnType(dart.void, []),
    not: dart.fnType(dart.void, []),
    and: dart.fnType(dart.void, [ufixnum.Register64]),
    or: dart.fnType(dart.void, [ufixnum.Register64]),
    xor: dart.fnType(dart.void, [ufixnum.Register64]),
    shiftl: dart.fnType(dart.void, [core.int]),
    shiftr: dart.fnType(dart.void, [core.int]),
    rotl: dart.fnType(dart.void, [core.int]),
    rotr: dart.fnType(dart.void, [core.int]),
    pack: dart.fnType(dart.void, [dart.dynamic, core.int, typed_data.Endian]),
    unpack: dart.fnType(dart.void, [dart.dynamic, core.int, typed_data.Endian]),
    [_padWrite]: dart.fnType(dart.void, [core.StringBuffer, core.int])
  }));
  dart.setGetterSignature(ufixnum.Register64, () => ({
    __proto__: dart.getGetters(ufixnum.Register64.__proto__),
    lo32: core.int,
    hi32: core.int
  }));
  dart.setLibraryUri(ufixnum.Register64, "package:pointycastle/src/ufixnum.dart");
  dart.setFieldSignature(ufixnum.Register64, () => ({
    __proto__: dart.getFields(ufixnum.Register64.__proto__),
    [_hi32]: dart.fieldType(core.int),
    [_lo32]: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(ufixnum.Register64, ['_equals', 'toString']);
  dart.defineLazy(ufixnum.Register64, {
    /*ufixnum.Register64._MAX_VALUE*/get _MAX_VALUE() {
      return new ufixnum.Register64.new(4294967295, 4294967295);
    }
  });
  const _list = dart.privateName(ufixnum, "_list");
  ufixnum.Register64List = class Register64List extends core.Object {
    get length() {
      return this[_list][$length];
    }
    _get(index) {
      return this[_list][$_get](index);
    }
    fillRange(start, end, hiOrLo32OrY, lo32 = null) {
      for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
        this[_list][$_get](i).set(hiOrLo32OrY, lo32);
      }
    }
    setRange(start, end, list, skipCount = 0) {
      let length = dart.notNull(end) - dart.notNull(start);
      for (let i = 0; i < length; i = i + 1) {
        this[_list][$_get](dart.notNull(start) + i).set(list._get(dart.notNull(skipCount) + i));
      }
    }
    toString() {
      let sb = new core.StringBuffer.new("(");
      for (let i = 0; i < dart.notNull(this[_list][$length]); i = i + 1) {
        if (i > 0) {
          sb.write(", ");
        }
        sb.write(dart.toString(this[_list][$_get](i)));
      }
      sb.write(")");
      return sb.toString();
    }
  };
  (ufixnum.Register64List.from = function(values) {
    this[_list] = ListOfRegister64().generate(values[$length], dart.fn(i => new ufixnum.Register64.new(values[$_get](i)[$_get](0), values[$_get](i)[$_get](1)), intToRegister64()));
    ;
  }).prototype = ufixnum.Register64List.prototype;
  (ufixnum.Register64List.new = function(length) {
    this[_list] = ListOfRegister64().generate(length, dart.fn(_ => new ufixnum.Register64.new(), intToRegister64()));
    ;
  }).prototype = ufixnum.Register64List.prototype;
  dart.addTypeTests(ufixnum.Register64List);
  dart.setMethodSignature(ufixnum.Register64List, () => ({
    __proto__: dart.getMethods(ufixnum.Register64List.__proto__),
    _get: dart.fnType(ufixnum.Register64, [core.int]),
    fillRange: dart.fnType(dart.void, [core.int, core.int, dart.dynamic], [core.int]),
    setRange: dart.fnType(dart.void, [core.int, core.int, ufixnum.Register64List], [core.int])
  }));
  dart.setGetterSignature(ufixnum.Register64List, () => ({
    __proto__: dart.getGetters(ufixnum.Register64List.__proto__),
    length: core.int
  }));
  dart.setLibraryUri(ufixnum.Register64List, "package:pointycastle/src/ufixnum.dart");
  dart.setFieldSignature(ufixnum.Register64List, () => ({
    __proto__: dart.getFields(ufixnum.Register64List.__proto__),
    [_list]: dart.finalFieldType(core.List$(ufixnum.Register64))
  }));
  dart.defineExtensionMethods(ufixnum.Register64List, ['toString']);
  ufixnum.clip8 = function clip8(x) {
    return (dart.notNull(x) & 255) >>> 0;
  };
  ufixnum.csum8 = function csum8(x, y) {
    return ufixnum.sum8(ufixnum.clip8(x), ufixnum.clip8(y));
  };
  ufixnum.sum8 = function sum8(x, y) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 255)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 59, 10, "(x >= 0) && (x <= _MASK_8)");
    if (!(dart.notNull(y) >= 0 && dart.notNull(y) <= 255)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 60, 10, "(y >= 0) && (y <= _MASK_8)");
    return (dart.notNull(x) + dart.notNull(y) & 255) >>> 0;
  };
  ufixnum.csub8 = function csub8(x, y) {
    return ufixnum.sub8(ufixnum.clip8(x), ufixnum.clip8(y));
  };
  ufixnum.sub8 = function sub8(x, y) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 255)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 66, 10, "(x >= 0) && (x <= _MASK_8)");
    if (!(dart.notNull(y) >= 0 && dart.notNull(y) <= 255)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 67, 10, "(y >= 0) && (y <= _MASK_8)");
    return (dart.notNull(x) - dart.notNull(y) & 255) >>> 0;
  };
  ufixnum.cshiftl8 = function cshiftl8(x, n) {
    return ufixnum.shiftl8(ufixnum.clip8(x), n);
  };
  ufixnum.shiftl8 = function shiftl8(x, n) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 255)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 73, 10, "(x >= 0) && (x <= _MASK_8)");
    return (x[$leftShift]((dart.notNull(n) & 7) >>> 0) & 255) >>> 0;
  };
  ufixnum.cshiftr8 = function cshiftr8(x, n) {
    return ufixnum.shiftr8(ufixnum.clip8(x), n);
  };
  ufixnum.shiftr8 = function shiftr8(x, n) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 255)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 79, 10, "(x >= 0) && (x <= _MASK_8)");
    return x[$rightShift]((dart.notNull(n) & 7) >>> 0);
  };
  ufixnum.cneg8 = function cneg8(x) {
    return ufixnum.neg8(ufixnum.clip8(x));
  };
  ufixnum.neg8 = function neg8(x) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 255)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 85, 10, "(x >= 0) && (x <= _MASK_8)");
    return (-dart.notNull(x) & 255) >>> 0;
  };
  ufixnum.cnot8 = function cnot8(x) {
    return ufixnum.not8(ufixnum.clip8(x));
  };
  ufixnum.not8 = function not8(x) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 255)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 91, 10, "(x >= 0) && (x <= _MASK_8)");
    return (~dart.notNull(x) & 255) >>> 0;
  };
  ufixnum.crotl8 = function crotl8(x, n) {
    return ufixnum.rotl8(ufixnum.clip8(x), n);
  };
  ufixnum.rotl8 = function rotl8(x, n) {
    if (!(dart.notNull(n) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 97, 10, "n >= 0");
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 255)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 98, 10, "(x >= 0) && (x <= _MASK_8)");
    n = (dart.notNull(n) & 7) >>> 0;
    return (x[$leftShift](n) & 255 | x[$rightShift](8 - dart.notNull(n))) >>> 0;
  };
  ufixnum.crotr8 = function crotr8(x, n) {
    return ufixnum.rotr8(ufixnum.clip8(x), n);
  };
  ufixnum.rotr8 = function rotr8(x, n) {
    if (!(dart.notNull(n) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 105, 10, "n >= 0");
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 255)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 106, 10, "(x >= 0) && (x <= _MASK_8)");
    n = (dart.notNull(n) & 7) >>> 0;
    return (x[$rightShift](n) & 255 | (x[$leftShift](8 - dart.notNull(n)) & 255) >>> 0) >>> 0;
  };
  ufixnum.clip16 = function clip16(x) {
    return (dart.notNull(x) & 65535) >>> 0;
  };
  ufixnum.pack16 = function pack16(x, out, offset, endian) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 65535)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 121, 10, "(x >= 0) && (x <= _MASK_16)");
    if (!typed_data.ByteData.is(out)) {
      out = typed_data.ByteData.view(typed_data.ByteBuffer._check(dart.dload(out, 'buffer')), core.int._check(dart.dload(out, 'offsetInBytes')), core.int._check(dart.dload(out, 'length')));
    }
    typed_data.ByteData.as(out)[$setUint16](offset, x, endian);
  };
  ufixnum.unpack16 = function unpack16(inp, offset, endian) {
    if (!typed_data.ByteData.is(inp)) {
      inp = typed_data.ByteData.view(typed_data.ByteBuffer._check(dart.dload(inp, 'buffer')), core.int._check(dart.dload(inp, 'offsetInBytes')), core.int._check(dart.dload(inp, 'length')));
    }
    return typed_data.ByteData.as(inp)[$getUint16](offset, endian);
  };
  ufixnum.clip32 = function clip32(x) {
    return (dart.notNull(x) & 4294967295.0) >>> 0;
  };
  ufixnum.csum32 = function csum32(x, y) {
    return ufixnum.sum32(ufixnum.clip32(x), ufixnum.clip32(y));
  };
  ufixnum.sum32 = function sum32(x, y) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 146, 10, "(x >= 0) && (x <= _MASK_32)");
    if (!(dart.notNull(y) >= 0 && dart.notNull(y) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 147, 10, "(y >= 0) && (y <= _MASK_32)");
    return (dart.notNull(x) + dart.notNull(y) & 4294967295.0) >>> 0;
  };
  ufixnum.csub32 = function csub32(x, y) {
    return ufixnum.sub32(ufixnum.clip32(x), ufixnum.clip32(y));
  };
  ufixnum.sub32 = function sub32(x, y) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 153, 10, "(x >= 0) && (x <= _MASK_32)");
    if (!(dart.notNull(y) >= 0 && dart.notNull(y) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 154, 10, "(y >= 0) && (y <= _MASK_32)");
    return (dart.notNull(x) - dart.notNull(y) & 4294967295.0) >>> 0;
  };
  ufixnum.cshiftl32 = function cshiftl32(x, n) {
    return ufixnum.shiftl32(ufixnum.clip32(x), n);
  };
  ufixnum.shiftl32 = function shiftl32(x, n) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 160, 10, "(x >= 0) && (x <= _MASK_32)");
    n = (dart.notNull(n) & 31) >>> 0;
    x = (dart.notNull(x) & dart.notNull(ufixnum._MASK32_HI_BITS[$_get](n))) >>> 0;
    return (x[$leftShift](n) & 4294967295.0) >>> 0;
  };
  ufixnum.cshiftr32 = function cshiftr32(x, n) {
    return ufixnum.shiftr32(ufixnum.clip32(x), n);
  };
  ufixnum.shiftr32 = function shiftr32(x, n) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 168, 10, "(x >= 0) && (x <= _MASK_32)");
    n = (dart.notNull(n) & 31) >>> 0;
    return x[$rightShift](n);
  };
  ufixnum.cneg32 = function cneg32(x) {
    return ufixnum.neg32(ufixnum.clip32(x));
  };
  ufixnum.neg32 = function neg32(x) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 175, 10, "(x >= 0) && (x <= _MASK_32)");
    return (-dart.notNull(x) & 4294967295.0) >>> 0;
  };
  ufixnum.cnot32 = function cnot32(x) {
    return ufixnum.not32(ufixnum.clip32(x));
  };
  ufixnum.not32 = function not32(x) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 181, 10, "(x >= 0) && (x <= _MASK_32)");
    return (~dart.notNull(x) & 4294967295.0) >>> 0;
  };
  ufixnum.crotl32 = function crotl32(x, n) {
    return ufixnum.rotl32(ufixnum.clip32(x), n);
  };
  ufixnum.rotl32 = function rotl32(x, n) {
    if (!(dart.notNull(n) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 187, 10, "n >= 0");
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 188, 10, "(x >= 0) && (x <= _MASK_32)");
    n = (dart.notNull(n) & 31) >>> 0;
    return (dart.notNull(ufixnum.shiftl32(x, n)) | x[$rightShift](32 - dart.notNull(n))) >>> 0;
  };
  ufixnum.crotr32 = function crotr32(x, n) {
    return ufixnum.rotr32(ufixnum.clip32(x), n);
  };
  ufixnum.rotr32 = function rotr32(x, n) {
    if (!(dart.notNull(n) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 195, 10, "n >= 0");
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 196, 10, "(x >= 0) && (x <= _MASK_32)");
    n = (dart.notNull(n) & 31) >>> 0;
    return (x[$rightShift](n) | dart.notNull(ufixnum.shiftl32(x, 32 - dart.notNull(n)))) >>> 0;
  };
  ufixnum.pack32 = function pack32(x, out, offset, endian) {
    if (!(dart.notNull(x) >= 0 && dart.notNull(x) <= 4294967295.0)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/src/ufixnum.dart", 206, 10, "(x >= 0) && (x <= _MASK_32)");
    if (!typed_data.ByteData.is(out)) {
      out = typed_data.ByteData.view(typed_data.ByteBuffer._check(dart.dload(out, 'buffer')), core.int._check(dart.dload(out, 'offsetInBytes')), core.int._check(dart.dload(out, 'length')));
    }
    typed_data.ByteData.as(out)[$setUint32](offset, x, endian);
  };
  ufixnum.unpack32 = function unpack32(inp, offset, endian) {
    if (!typed_data.ByteData.is(inp)) {
      inp = typed_data.ByteData.view(typed_data.ByteBuffer._check(dart.dload(inp, 'buffer')), core.int._check(dart.dload(inp, 'offsetInBytes')), core.int._check(dart.dload(inp, 'length')));
    }
    return typed_data.ByteData.as(inp)[$getUint32](offset, endian);
  };
  dart.defineLazy(ufixnum, {
    /*ufixnum._MASK_3*/get _MASK_3() {
      return 7;
    },
    /*ufixnum._MASK_5*/get _MASK_5() {
      return 31;
    },
    /*ufixnum._MASK_6*/get _MASK_6() {
      return 63;
    },
    /*ufixnum._MASK_8*/get _MASK_8() {
      return 255;
    },
    /*ufixnum._MASK_16*/get _MASK_16() {
      return 65535;
    },
    /*ufixnum._MASK_32*/get _MASK_32() {
      return 4294967295.0;
    },
    /*ufixnum._MASK32_HI_BITS*/get _MASK32_HI_BITS() {
      return JSArrayOfint().of([4294967295, 2147483647, 1073741823, 536870911, 268435455, 134217727, 67108863, 33554431, 16777215, 8388607, 4194303, 2097151, 1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0]);
    }
  });
  utils.decodeBigInt = function decodeBigInt(bytes) {
    let result = core._BigIntImpl.from(0);
    for (let i = 0; i < dart.notNull(bytes[$length]); i = i + 1) {
      result = result['+'](core._BigIntImpl.from(bytes[$_get](dart.notNull(bytes[$length]) - i - 1))['<<'](8 * i));
    }
    return result;
  };
  utils.encodeBigInt = function encodeBigInt(number) {
    let size = (dart.notNull(number.bitLength) + 7)[$rightShift](3);
    let result = _native_typed_data.NativeUint8List.new(size);
    for (let i = 0; i < size; i = i + 1) {
      result[$_set](size - i - 1, number['&'](utils._byteMask).toInt());
      number = number['>>'](8);
    }
    return result;
  };
  dart.defineLazy(utils, {
    /*utils._byteMask*/get _byteMask() {
      return core._BigIntImpl.from(255);
    },
    set _byteMask(_) {}
  });
  dart.trackLibraries("packages/pointycastle/src/ufixnum", {
    "package:pointycastle/src/ufixnum.dart": ufixnum,
    "package:pointycastle/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ufixnum.dart","utils.dart"],"names":[],"mappings":"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","file":"ufixnum.ddc.js"}');
  // Exports:
  return {
    src__ufixnum: ufixnum,
    src__utils: utils
  };
});

//# sourceMappingURL=ufixnum.ddc.js.map
