define(['dart_sdk', 'packages/pointycastle/adapters/stream_cipher_as_block_cipher', 'packages/clock/clock', 'packages/crypto/crypto', 'packages/collection/src/comparators', 'packages/asn1lib/asn1lib'], function(dart_sdk, packages__pointycastle__adapters__stream_cipher_as_block_cipher, packages__clock__clock, packages__crypto__crypto, packages__collection__src__comparators, packages__asn1lib__asn1lib) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const api = packages__pointycastle__adapters__stream_cipher_as_block_cipher.api;
  const api$ = packages__pointycastle__adapters__stream_cipher_as_block_cipher.asymmetric__api;
  const oaep = packages__pointycastle__adapters__stream_cipher_as_block_cipher.asymmetric__oaep;
  const rsa = packages__pointycastle__adapters__stream_cipher_as_block_cipher.asymmetric__rsa;
  const pkcs1 = packages__pointycastle__adapters__stream_cipher_as_block_cipher.asymmetric__pkcs1;
  const salsa20 = packages__pointycastle__adapters__stream_cipher_as_block_cipher.stream__salsa20;
  const api$0 = packages__pointycastle__adapters__stream_cipher_as_block_cipher.key_derivators__api;
  const pbkdf2$ = packages__pointycastle__adapters__stream_cipher_as_block_cipher.key_derivators__pbkdf2;
  const sha256 = packages__pointycastle__adapters__stream_cipher_as_block_cipher.digests__sha256;
  const clock$ = packages__clock__clock.src__clock;
  const hmac$ = packages__crypto__crypto.src__hmac;
  const sha256$ = packages__crypto__crypto.src__sha256;
  const equality = packages__collection__src__comparators.src__equality;
  const asn1lib = packages__asn1lib__asn1lib.asn1lib;
  const encrypt = Object.create(dart.library);
  const $_get = dartx._get;
  const $lengthInBytes = dartx.lengthInBytes;
  const $length = dartx.length;
  const $sublist = dartx.sublist;
  const $round = dartx.round;
  const $first = dartx.first;
  const $buffer = dartx.buffer;
  const $getUint64 = dartx.getUint64;
  const $setUint64 = dartx.setUint64;
  const $asUint8List = dartx.asUint8List;
  const $add = dartx.add;
  const $_set = dartx._set;
  const $setAll = dartx.setAll;
  const $split = dartx.split;
  const $startsWith = dartx.startsWith;
  const $skipWhile = dartx.skipWhile;
  const $takeWhile = dartx.takeWhile;
  const $trim = dartx.trim;
  const $map = dartx.map;
  const $join = dartx.join;
  const $modulo = dartx['%'];
  const $substring = dartx.substring;
  const $where = dartx.where;
  const $toList = dartx.toList;
  const $toRadixString = dartx.toRadixString;
  const $padLeft = dartx.padLeft;
  let ParametersWithIVOfKeyParameter = () => (ParametersWithIVOfKeyParameter = dart.constFn(api.ParametersWithIV$(api.KeyParameter)))();
  let PaddedBlockCipherParametersOfCipherParameters$CipherParameters = () => (PaddedBlockCipherParametersOfCipherParameters$CipherParameters = dart.constFn(api.PaddedBlockCipherParameters$(api.CipherParameters, api.CipherParameters)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let PublicKeyParameterOfRSAPublicKey = () => (PublicKeyParameterOfRSAPublicKey = dart.constFn(api.PublicKeyParameter$(api$.RSAPublicKey)))();
  let PrivateKeyParameterOfRSAPrivateKey = () => (PrivateKeyParameterOfRSAPrivateKey = dart.constFn(api.PrivateKeyParameter$(api$.RSAPrivateKey)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let DefaultEqualityOfNull = () => (DefaultEqualityOfNull = dart.constFn(equality.DefaultEquality$(core.Null)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let VoidToSHA256Digest = () => (VoidToSHA256Digest = dart.constFn(dart.fnType(sha256.SHA256Digest, [])))();
  let LinkedMapOfRSASignDigest$_DigestIdFactory = () => (LinkedMapOfRSASignDigest$_DigestIdFactory = dart.constFn(_js_helper.LinkedMap$(encrypt.RSASignDigest, encrypt._DigestIdFactory)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: encrypt.AESMode.prototype,
        [_name$]: "AESMode.sic",
        index: 6
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: encrypt.AESMode.prototype,
        [_name$]: "AESMode.cbc",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: encrypt.AESMode.prototype,
        [_name$]: "AESMode.cfb64",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: encrypt.AESMode.prototype,
        [_name$]: "AESMode.ctr",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: encrypt.AESMode.prototype,
        [_name$]: "AESMode.ecb",
        index: 3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: encrypt.AESMode.prototype,
        [_name$]: "AESMode.ofb64Gctr",
        index: 4
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: encrypt.AESMode.prototype,
        [_name$]: "AESMode.ofb64",
        index: 5
      });
    },
    get C7() {
      return C7 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C0 || CT.C0], encrypt.AESMode);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: encrypt.RSAEncoding.prototype,
        [_name$]: "RSAEncoding.PKCS1",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: encrypt.RSAEncoding.prototype,
        [_name$]: "RSAEncoding.OAEP",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.constList([C8 || CT.C8, C9 || CT.C9], encrypt.RSAEncoding);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: encrypt.RSASignDigest.prototype,
        [_name$]: "RSASignDigest.SHA256",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.constList([C11 || CT.C11], encrypt.RSASignDigest);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: DefaultEqualityOfNull().prototype
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: equality.ListEquality.prototype,
        [ListEquality__elementEquality]: C14 || CT.C14
      });
    },
    get C15() {
      return C15 = dart.constMap(encrypt.AESMode, core.String, [C1 || CT.C1, "CBC", C2 || CT.C2, "CFB-64", C3 || CT.C3, "CTR", C4 || CT.C4, "ECB", C5 || CT.C5, "OFB-64/GCTR", C6 || CT.C6, "OFB-64", C0 || CT.C0, "SIC"]);
    }
  });
  encrypt.Algorithm = class Algorithm extends core.Object {};
  (encrypt.Algorithm.new = function() {
    ;
  }).prototype = encrypt.Algorithm.prototype;
  dart.addTypeTests(encrypt.Algorithm);
  dart.setLibraryUri(encrypt.Algorithm, "package:encrypt/encrypt.dart");
  encrypt.SignerAlgorithm = class SignerAlgorithm extends core.Object {};
  (encrypt.SignerAlgorithm.new = function() {
    ;
  }).prototype = encrypt.SignerAlgorithm.prototype;
  dart.addTypeTests(encrypt.SignerAlgorithm);
  dart.setLibraryUri(encrypt.SignerAlgorithm, "package:encrypt/encrypt.dart");
  const _name$ = dart.privateName(encrypt, "_name");
  let C0;
  const _cipher = dart.privateName(encrypt, "_cipher");
  const _buildParams = dart.privateName(encrypt, "_buildParams");
  const _processBlocks = dart.privateName(encrypt, "_processBlocks");
  const _paddedParams = dart.privateName(encrypt, "_paddedParams");
  const key$ = dart.privateName(encrypt, "AES.key");
  const mode$ = dart.privateName(encrypt, "AES.mode");
  const padding$ = dart.privateName(encrypt, "AES.padding");
  encrypt.AES = class AES extends core.Object {
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get mode() {
      return this[mode$];
    }
    set mode(value) {
      super.mode = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    encrypt(bytes, opts) {
      let t0;
      let iv = opts && 'iv' in opts ? opts.iv : null;
      t0 = this[_cipher];
      t0.reset();
      t0.init(true, this[_buildParams](iv));
      t0;
      if (this.padding == null) {
        return new encrypt.Encrypted.new(this[_processBlocks](bytes));
      }
      return new encrypt.Encrypted.new(this[_cipher].process(bytes));
    }
    decrypt(encrypted, opts) {
      let t0;
      let iv = opts && 'iv' in opts ? opts.iv : null;
      t0 = this[_cipher];
      t0.reset();
      t0.init(false, this[_buildParams](iv));
      t0;
      if (this.padding == null) {
        return this[_processBlocks](encrypted.bytes);
      }
      return this[_cipher].process(encrypted.bytes);
    }
    [_processBlocks](input) {
      let output = _native_typed_data.NativeUint8List.new(input[$lengthInBytes]);
      for (let offset = 0; offset < dart.notNull(input[$lengthInBytes]);) {
        offset = offset + dart.notNull(this[_cipher].processBlock(input, offset, output, offset));
      }
      return output;
    }
    [_buildParams](iv) {
      if (this.padding != null) {
        return this[_paddedParams](iv);
      }
      if (dart.equals(this.mode, encrypt.AESMode.ecb)) {
        return new api.KeyParameter.new(this.key.bytes);
      }
      return new (ParametersWithIVOfKeyParameter()).new(new api.KeyParameter.new(this.key.bytes), iv.bytes);
    }
    [_paddedParams](iv) {
      if (dart.equals(this.mode, encrypt.AESMode.ecb)) {
        return new (PaddedBlockCipherParametersOfCipherParameters$CipherParameters()).new(new api.KeyParameter.new(this.key.bytes), null);
      }
      return new (PaddedBlockCipherParametersOfCipherParameters$CipherParameters()).new(new (ParametersWithIVOfKeyParameter()).new(new api.KeyParameter.new(this.key.bytes), iv.bytes), null);
    }
  };
  (encrypt.AES.new = function(key, opts) {
    let mode = opts && 'mode' in opts ? opts.mode : C0 || CT.C0;
    let padding = opts && 'padding' in opts ? opts.padding : "PKCS7";
    this[key$] = key;
    this[mode$] = mode;
    this[padding$] = padding;
    this[_cipher] = padding != null ? api.PaddedBlockCipher.new("AES/" + dart.str(encrypt._modes[$_get](mode)) + "/" + dart.str(padding)) : api.BlockCipher.new("AES/" + dart.str(encrypt._modes[$_get](mode)));
    ;
  }).prototype = encrypt.AES.prototype;
  dart.addTypeTests(encrypt.AES);
  encrypt.AES[dart.implements] = () => [encrypt.Algorithm];
  dart.setMethodSignature(encrypt.AES, () => ({
    __proto__: dart.getMethods(encrypt.AES.__proto__),
    encrypt: dart.fnType(encrypt.Encrypted, [typed_data.Uint8List], {iv: encrypt.IV}, {}),
    decrypt: dart.fnType(typed_data.Uint8List, [encrypt.Encrypted], {iv: encrypt.IV}, {}),
    [_processBlocks]: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List]),
    [_buildParams]: dart.fnType(api.CipherParameters, [encrypt.IV]),
    [_paddedParams]: dart.fnType(api.PaddedBlockCipherParameters$(api.CipherParameters, api.CipherParameters), [encrypt.IV])
  }));
  dart.setLibraryUri(encrypt.AES, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.AES, () => ({
    __proto__: dart.getFields(encrypt.AES.__proto__),
    key: dart.finalFieldType(encrypt.Key),
    mode: dart.finalFieldType(encrypt.AESMode),
    padding: dart.finalFieldType(core.String),
    [_cipher]: dart.finalFieldType(api.BlockCipher)
  }));
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  encrypt.AESMode = class AESMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (encrypt.AESMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = encrypt.AESMode.prototype;
  dart.addTypeTests(encrypt.AESMode);
  dart.setLibraryUri(encrypt.AESMode, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.AESMode, () => ({
    __proto__: dart.getFields(encrypt.AESMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(encrypt.AESMode, ['toString']);
  encrypt.AESMode.cbc = C1 || CT.C1;
  encrypt.AESMode.cfb64 = C2 || CT.C2;
  encrypt.AESMode.ctr = C3 || CT.C3;
  encrypt.AESMode.ecb = C4 || CT.C4;
  encrypt.AESMode.ofb64Gctr = C5 || CT.C5;
  encrypt.AESMode.ofb64 = C6 || CT.C6;
  encrypt.AESMode.sic = C0 || CT.C0;
  encrypt.AESMode.values = C7 || CT.C7;
  const _maxClockSkew = dart.privateName(encrypt, "_maxClockSkew");
  const _signKey = dart.privateName(encrypt, "_signKey");
  const _encryptionKey = dart.privateName(encrypt, "_encryptionKey");
  const _clock = dart.privateName(encrypt, "_clock");
  const _encryptFromParts = dart.privateName(encrypt, "_encryptFromParts");
  const _verifySignature = dart.privateName(encrypt, "_verifySignature");
  encrypt.Fernet = class Fernet extends core.Object {
    encrypt(bytes, opts) {
      let iv = opts && 'iv' in opts ? opts.iv : null;
      if (iv == null) {
        iv = new encrypt.IV.fromSecureRandom(16);
      }
      let currentTime = (dart.notNull(this[_clock].now().millisecondsSinceEpoch) / 1000)[$round]();
      let encryptedBytes = this[_encryptFromParts](bytes, currentTime, iv);
      return new encrypt.Encrypted.new(encryptedBytes);
    }
    decrypt(encrypted, opts) {
      let iv = opts && 'iv' in opts ? opts.iv : null;
      let ttl = opts && 'ttl' in opts ? opts.ttl : null;
      let data = encrypted.bytes;
      if (data[$first] !== 128) {
        dart.throw(new core.StateError.new("Invalid token"));
      }
      let ts = this.extractTimestamp(data);
      let now = (dart.notNull(this[_clock].now().millisecondsSinceEpoch) / 1000)[$round]();
      if (ttl != null && dart.notNull(ts) + dart.notNull(ttl) < now) {
        dart.throw(new core.StateError.new("Invalid token"));
      }
      if (now + dart.notNull(this[_maxClockSkew]) < dart.notNull(ts)) {
        dart.throw(new core.StateError.new("Invalid token"));
      }
      this[_verifySignature](data);
      if (iv != null) {
        dart.throw(new core.StateError.new("IV must be infered from token"));
      }
      iv = new encrypt.IV.new(_native_typed_data.NativeUint8List.fromList(data[$sublist](9, 25)));
      let length = data[$length];
      let ciphertext = new encrypt.Encrypted.new(_native_typed_data.NativeUint8List.fromList(data[$sublist](25, dart.notNull(length) - 32)));
      let aes = new encrypt.AES.new(this[_encryptionKey], {mode: encrypt.AESMode.cbc});
      let decrypted = aes.decrypt(ciphertext, {iv: iv});
      return decrypted;
    }
    extractTimestamp(data) {
      let tsBytes = data[$sublist](1, 9);
      let buffer = _native_typed_data.NativeUint8List.fromList(tsBytes)[$buffer];
      let bdata = typed_data.ByteData.view(buffer);
      return bdata[$getUint64](0, typed_data.Endian.big);
    }
    [_verifySignature](data) {
      let length = data[$length];
      let parts = data[$sublist](0, dart.notNull(length) - 32);
      let _digest = data[$sublist](dart.notNull(length) - 32);
      let hmac = new hmac$.Hmac.new(sha256$.sha256, this[_signKey].bytes);
      let digest_ = hmac.convert(parts).bytes;
      if (!dart.test(new equality.ListEquality.new().equals(_digest, digest_))) {
        dart.throw(new core.StateError.new("Invalid token"));
      }
    }
    [_encryptFromParts](bytes, currentTime, iv) {
      let aes = new encrypt.AES.new(this[_encryptionKey], {mode: encrypt.AESMode.cbc});
      let cipherText = aes.encrypt(bytes, {iv: iv});
      let buffer = _native_typed_data.NativeUint8List.new(8)[$buffer];
      let bdata = typed_data.ByteData.view(buffer);
      bdata[$setUint64](0, currentTime, typed_data.Endian.big);
      let currentTimeBytes = bdata[$buffer][$asUint8List]();
      let parts = (() => {
        let t0 = JSArrayOfint().of([]);
        t0[$add](128);
        for (let t1 of currentTimeBytes)
          t0[$add](t1);
        for (let t2 of iv.bytes)
          t0[$add](t2);
        for (let t3 of cipherText.bytes)
          t0[$add](t3);
        return t0;
      })();
      let hmac = new hmac$.Hmac.new(sha256$.sha256, this[_signKey].bytes);
      let digest = hmac.convert(parts).bytes;
      let result = (() => {
        let t4 = JSArrayOfint().of([]);
        for (let t5 of parts)
          t4[$add](t5);
        for (let t6 of _native_typed_data.NativeUint8List.fromList(digest))
          t4[$add](t6);
        return t4;
      })();
      return _native_typed_data.NativeUint8List.fromList(result);
    }
  };
  (encrypt.Fernet.new = function(b64key, opts) {
    let clock = opts && 'clock' in opts ? opts.clock : null;
    this[_maxClockSkew] = 60;
    this[_signKey] = null;
    this[_encryptionKey] = null;
    this[_clock] = null;
    let keyString = convert.utf8.decode(b64key.bytes);
    let keyBytes = convert.base64Url.decode(keyString);
    if (keyBytes[$length] !== 32) {
      dart.throw(new core.StateError.new("Fernet key must be 32 url-safe base64-encoded bytes."));
    }
    this[_signKey] = new encrypt.Key.new(_native_typed_data.NativeUint8List.fromList(keyBytes[$sublist](0, 16)));
    this[_encryptionKey] = new encrypt.Key.new(_native_typed_data.NativeUint8List.fromList(keyBytes[$sublist](16)));
    if (clock == null) {
      this[_clock] = new clock$.Clock.new();
    } else {
      this[_clock] = clock;
    }
  }).prototype = encrypt.Fernet.prototype;
  dart.addTypeTests(encrypt.Fernet);
  encrypt.Fernet[dart.implements] = () => [encrypt.Algorithm];
  dart.setMethodSignature(encrypt.Fernet, () => ({
    __proto__: dart.getMethods(encrypt.Fernet.__proto__),
    encrypt: dart.fnType(encrypt.Encrypted, [typed_data.Uint8List], {iv: encrypt.IV}, {}),
    decrypt: dart.fnType(typed_data.Uint8List, [encrypt.Encrypted], {iv: encrypt.IV, ttl: core.int}, {}),
    extractTimestamp: dart.fnType(core.int, [typed_data.Uint8List]),
    [_verifySignature]: dart.fnType(dart.void, [typed_data.Uint8List]),
    [_encryptFromParts]: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List, core.int, encrypt.IV])
  }));
  dart.setLibraryUri(encrypt.Fernet, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.Fernet, () => ({
    __proto__: dart.getFields(encrypt.Fernet.__proto__),
    [_maxClockSkew]: dart.finalFieldType(core.int),
    [_signKey]: dart.fieldType(encrypt.Key),
    [_encryptionKey]: dart.fieldType(encrypt.Key),
    [_clock]: dart.fieldType(clock$.Clock)
  }));
  let C8;
  const _publicKeyParams = dart.privateName(encrypt, "_publicKeyParams");
  const _privateKeyParams = dart.privateName(encrypt, "_privateKeyParams");
  const publicKey$ = dart.privateName(encrypt, "AbstractRSA.publicKey");
  const privateKey$ = dart.privateName(encrypt, "AbstractRSA.privateKey");
  encrypt.AbstractRSA = class AbstractRSA extends core.Object {
    get publicKey() {
      return this[publicKey$];
    }
    set publicKey(value) {
      super.publicKey = value;
    }
    get privateKey() {
      return this[privateKey$];
    }
    set privateKey(value) {
      super.privateKey = value;
    }
  };
  (encrypt.AbstractRSA.new = function(opts) {
    let publicKey = opts && 'publicKey' in opts ? opts.publicKey : null;
    let privateKey = opts && 'privateKey' in opts ? opts.privateKey : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : C8 || CT.C8;
    this[publicKey$] = publicKey;
    this[privateKey$] = privateKey;
    this[_publicKeyParams] = new (PublicKeyParameterOfRSAPublicKey()).new(publicKey);
    this[_privateKeyParams] = new (PrivateKeyParameterOfRSAPrivateKey()).new(privateKey);
    this[_cipher] = dart.equals(encoding, encrypt.RSAEncoding.OAEP) ? new oaep.OAEPEncoding.new(new rsa.RSAEngine.new()) : new pkcs1.PKCS1Encoding.new(new rsa.RSAEngine.new());
    ;
  }).prototype = encrypt.AbstractRSA.prototype;
  dart.addTypeTests(encrypt.AbstractRSA);
  dart.setLibraryUri(encrypt.AbstractRSA, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.AbstractRSA, () => ({
    __proto__: dart.getFields(encrypt.AbstractRSA.__proto__),
    publicKey: dart.finalFieldType(api$.RSAPublicKey),
    privateKey: dart.finalFieldType(api$.RSAPrivateKey),
    [_publicKeyParams]: dart.finalFieldType(api.PublicKeyParameter$(api$.RSAPublicKey)),
    [_privateKeyParams]: dart.finalFieldType(api.PrivateKeyParameter$(api$.RSAPrivateKey)),
    [_cipher]: dart.finalFieldType(api.AsymmetricBlockCipher)
  }));
  encrypt.RSA = class RSA extends encrypt.AbstractRSA {
    encrypt(bytes, opts) {
      let t7;
      let iv = opts && 'iv' in opts ? opts.iv : null;
      if (this.publicKey == null) {
        dart.throw(new core.StateError.new("Can't encrypt without a public key, null given."));
      }
      t7 = this[_cipher];
      t7.reset();
      t7.init(true, this[_publicKeyParams]);
      t7;
      return new encrypt.Encrypted.new(this[_cipher].process(bytes));
    }
    decrypt(encrypted, opts) {
      let t7;
      let iv = opts && 'iv' in opts ? opts.iv : null;
      if (this.privateKey == null) {
        dart.throw(new core.StateError.new("Can't decrypt without a private key, null given."));
      }
      t7 = this[_cipher];
      t7.reset();
      t7.init(false, this[_privateKeyParams]);
      t7;
      return this[_cipher].process(encrypted.bytes);
    }
  };
  (encrypt.RSA.new = function(opts) {
    let publicKey = opts && 'publicKey' in opts ? opts.publicKey : null;
    let privateKey = opts && 'privateKey' in opts ? opts.privateKey : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : C8 || CT.C8;
    encrypt.RSA.__proto__.new.call(this, {publicKey: publicKey, privateKey: privateKey, encoding: encoding});
    ;
  }).prototype = encrypt.RSA.prototype;
  dart.addTypeTests(encrypt.RSA);
  encrypt.RSA[dart.implements] = () => [encrypt.Algorithm];
  dart.setMethodSignature(encrypt.RSA, () => ({
    __proto__: dart.getMethods(encrypt.RSA.__proto__),
    encrypt: dart.fnType(encrypt.Encrypted, [typed_data.Uint8List], {iv: encrypt.IV}, {}),
    decrypt: dart.fnType(typed_data.Uint8List, [encrypt.Encrypted], {iv: encrypt.IV}, {})
  }));
  dart.setLibraryUri(encrypt.RSA, "package:encrypt/encrypt.dart");
  const _digestId = dart.privateName(encrypt, "_digestId");
  const _digestCipher = dart.privateName(encrypt, "_digestCipher");
  const _encode = dart.privateName(encrypt, "_encode");
  const digest$ = dart.privateName(encrypt, "RSASigner.digest");
  encrypt.RSASigner = class RSASigner extends encrypt.AbstractRSA {
    get digest() {
      return this[digest$];
    }
    set digest(value) {
      super.digest = value;
    }
    sign(bytes) {
      let t7, t7$;
      let hash = _native_typed_data.NativeUint8List.new(this[_digestCipher].digestSize);
      t7 = this[_digestCipher];
      t7.reset();
      t7.update(bytes, 0, bytes[$length]);
      t7.doFinal(hash, 0);
      t7;
      t7$ = this[_cipher];
      t7$.reset();
      t7$.init(true, this[_privateKeyParams]);
      t7$;
      return new encrypt.Encrypted.new(this[_cipher].process(this[_encode](hash)));
    }
    verify(bytes, signature) {
      let t7, t7$, t10, t9, t10$, t9$;
      let hash = _native_typed_data.NativeUint8List.new(this[_digestCipher].digestSize);
      t7 = this[_digestCipher];
      t7.reset();
      t7.update(bytes, 0, bytes[$length]);
      t7.doFinal(hash, 0);
      t7;
      t7$ = this[_cipher];
      t7$.reset();
      t7$.init(false, this[_publicKeyParams]);
      t7$;
      let _signature = _native_typed_data.NativeUint8List.new(this[_cipher].outputBlockSize);
      try {
        let length = this[_cipher].processBlock(signature.bytes, 0, signature.bytes[$length], _signature, 0);
        _signature = _signature[$sublist](0, length);
      } catch (e) {
        let ex = dart.getThrown(e);
        if (core.ArgumentError.is(ex)) {
          return false;
        } else
          throw e;
      }
      let expected = this[_encode](hash);
      if (_signature[$length] == expected[$length]) {
        for (let i = 0; i < dart.notNull(_signature[$length]); i = i + 1) {
          if (_signature[$_get](i) != expected[$_get](i)) {
            return false;
          }
        }
        return true;
      } else if (_signature[$length] === dart.notNull(expected[$length]) - 2) {
        let sigOffset = dart.notNull(_signature[$length]) - dart.notNull(hash[$length]) - 2;
        let expectedOffset = dart.notNull(expected[$length]) - dart.notNull(hash[$length]) - 2;
        t9 = expected;
        t10 = 1;
        t9[$_set](t10, dart.notNull(t9[$_get](t10)) - 2);
        t9$ = expected;
        t10$ = 3;
        t9$[$_set](t10$, dart.notNull(t9$[$_get](t10$)) - 2);
        let nonEqual = 0;
        for (let i = 0; i < dart.notNull(hash[$length]); i = i + 1) {
          nonEqual = (nonEqual | (dart.notNull(_signature[$_get](sigOffset + i)) ^ dart.notNull(expected[$_get](expectedOffset + i))) >>> 0) >>> 0;
        }
        for (let i = 0; i < sigOffset; i = i + 1) {
          nonEqual = (nonEqual | (dart.notNull(_signature[$_get](i)) ^ dart.notNull(expected[$_get](i))) >>> 0) >>> 0;
        }
        return nonEqual === 0;
      } else {
        return false;
      }
    }
    [_encode](hash) {
      let t9, t9$, t9$0, t9$1, t9$2, t9$3, t9$4, t9$5;
      let digestBytes = _native_typed_data.NativeUint8List.new(2 + 2 + dart.notNull(this[_digestId][$length]) + 2 + 2 + dart.notNull(hash[$length]));
      let i = 0;
      digestBytes[$_set]((t9 = i, i = t9 + 1, t9), 48);
      digestBytes[$_set]((t9$ = i, i = t9$ + 1, t9$), dart.notNull(digestBytes[$length]) - 2);
      digestBytes[$_set]((t9$0 = i, i = t9$0 + 1, t9$0), 48);
      digestBytes[$_set]((t9$1 = i, i = t9$1 + 1, t9$1), dart.notNull(this[_digestId][$length]) + 2);
      digestBytes[$setAll](i, this[_digestId]);
      i = i + dart.notNull(this[_digestId][$length]);
      digestBytes[$_set]((t9$2 = i, i = t9$2 + 1, t9$2), 5);
      digestBytes[$_set]((t9$3 = i, i = t9$3 + 1, t9$3), 0);
      digestBytes[$_set]((t9$4 = i, i = t9$4 + 1, t9$4), 4);
      digestBytes[$_set]((t9$5 = i, i = t9$5 + 1, t9$5), hash[$length]);
      digestBytes[$setAll](i, hash);
      return digestBytes;
    }
  };
  (encrypt.RSASigner.new = function(digest, opts) {
    let publicKey = opts && 'publicKey' in opts ? opts.publicKey : null;
    let privateKey = opts && 'privateKey' in opts ? opts.privateKey : null;
    this[digest$] = digest;
    this[_digestId] = encrypt._digestIdFactoryMap[$_get](digest).id;
    this[_digestCipher] = encrypt._digestIdFactoryMap[$_get](digest).factory();
    encrypt.RSASigner.__proto__.new.call(this, {publicKey: publicKey, privateKey: privateKey});
    ;
  }).prototype = encrypt.RSASigner.prototype;
  dart.addTypeTests(encrypt.RSASigner);
  encrypt.RSASigner[dart.implements] = () => [encrypt.SignerAlgorithm];
  dart.setMethodSignature(encrypt.RSASigner, () => ({
    __proto__: dart.getMethods(encrypt.RSASigner.__proto__),
    sign: dart.fnType(encrypt.Encrypted, [typed_data.Uint8List]),
    verify: dart.fnType(core.bool, [typed_data.Uint8List, encrypt.Encrypted]),
    [_encode]: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List])
  }));
  dart.setLibraryUri(encrypt.RSASigner, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.RSASigner, () => ({
    __proto__: dart.getFields(encrypt.RSASigner.__proto__),
    digest: dart.finalFieldType(encrypt.RSASignDigest),
    [_digestId]: dart.finalFieldType(typed_data.Uint8List),
    [_digestCipher]: dart.finalFieldType(api.Digest)
  }));
  let C9;
  let C10;
  encrypt.RSAEncoding = class RSAEncoding extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (encrypt.RSAEncoding.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = encrypt.RSAEncoding.prototype;
  dart.addTypeTests(encrypt.RSAEncoding);
  dart.setLibraryUri(encrypt.RSAEncoding, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.RSAEncoding, () => ({
    __proto__: dart.getFields(encrypt.RSAEncoding.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(encrypt.RSAEncoding, ['toString']);
  encrypt.RSAEncoding.PKCS1 = C8 || CT.C8;
  encrypt.RSAEncoding.OAEP = C9 || CT.C9;
  encrypt.RSAEncoding.values = C10 || CT.C10;
  let C11;
  let C12;
  encrypt.RSASignDigest = class RSASignDigest extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (encrypt.RSASignDigest.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = encrypt.RSASignDigest.prototype;
  dart.addTypeTests(encrypt.RSASignDigest);
  dart.setLibraryUri(encrypt.RSASignDigest, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.RSASignDigest, () => ({
    __proto__: dart.getFields(encrypt.RSASignDigest.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(encrypt.RSASignDigest, ['toString']);
  encrypt.RSASignDigest.SHA256 = C11 || CT.C11;
  encrypt.RSASignDigest.values = C12 || CT.C12;
  encrypt._DigestIdFactory = class _DigestIdFactory extends core.Object {};
  (encrypt._DigestIdFactory.new = function(id, factory) {
    this.id = id;
    this.factory = factory;
    ;
  }).prototype = encrypt._DigestIdFactory.prototype;
  dart.addTypeTests(encrypt._DigestIdFactory);
  dart.setLibraryUri(encrypt._DigestIdFactory, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt._DigestIdFactory, () => ({
    __proto__: dart.getFields(encrypt._DigestIdFactory.__proto__),
    id: dart.finalFieldType(typed_data.Uint8List),
    factory: dart.finalFieldType(dart.fnType(api.Digest, []))
  }));
  const _parseSequence = dart.privateName(encrypt, "_parseSequence");
  const _parsePublic = dart.privateName(encrypt, "_parsePublic");
  const _pkcs8PublicSequence = dart.privateName(encrypt, "_pkcs8PublicSequence");
  const _parsePrivate = dart.privateName(encrypt, "_parsePrivate");
  const _pkcs8PrivateSequence = dart.privateName(encrypt, "_pkcs8PrivateSequence");
  encrypt.RSAKeyParser = class RSAKeyParser extends core.Object {
    parse(key) {
      let rows = key[$split](core.RegExp.new("\\r\\n?|\\n"));
      let header = rows[$first];
      if (header === "-----BEGIN RSA PUBLIC KEY-----") {
        return this[_parsePublic](this[_parseSequence](rows));
      }
      if (header === "-----BEGIN PUBLIC KEY-----") {
        return this[_parsePublic](this[_pkcs8PublicSequence](this[_parseSequence](rows)));
      }
      if (header === "-----BEGIN RSA PRIVATE KEY-----") {
        return this[_parsePrivate](this[_parseSequence](rows));
      }
      if (header === "-----BEGIN PRIVATE KEY-----") {
        return this[_parsePrivate](this[_pkcs8PrivateSequence](this[_parseSequence](rows)));
      }
      dart.throw(new core.FormatException.new("Unable to parse key, invalid format.", header));
    }
    [_parsePublic](sequence) {
      let modulus = asn1lib.ASN1Integer.as(sequence.elements[$_get](0)).valueAsBigInteger;
      let exponent = asn1lib.ASN1Integer.as(sequence.elements[$_get](1)).valueAsBigInteger;
      return new api$.RSAPublicKey.new(modulus, exponent);
    }
    [_parsePrivate](sequence) {
      let modulus = asn1lib.ASN1Integer.as(sequence.elements[$_get](1)).valueAsBigInteger;
      let exponent = asn1lib.ASN1Integer.as(sequence.elements[$_get](3)).valueAsBigInteger;
      let p = asn1lib.ASN1Integer.as(sequence.elements[$_get](4)).valueAsBigInteger;
      let q = asn1lib.ASN1Integer.as(sequence.elements[$_get](5)).valueAsBigInteger;
      return new api$.RSAPrivateKey.new(modulus, exponent, p, q);
    }
    [_parseSequence](rows) {
      let keyText = rows[$skipWhile](dart.fn(row => row[$startsWith]("-----BEGIN"), StringTobool()))[$takeWhile](dart.fn(row => !row[$startsWith]("-----END"), StringTobool()))[$map](core.String, dart.fn(row => row[$trim](), StringToString()))[$join]("");
      let keyBytes = _native_typed_data.NativeUint8List.fromList(convert.base64.decode(keyText));
      let asn1Parser = new asn1lib.ASN1Parser.new(keyBytes);
      return asn1lib.ASN1Sequence.as(asn1Parser.nextObject());
    }
    [_pkcs8PublicSequence](sequence) {
      let bitString = sequence.elements[$_get](1);
      let bytes = bitString.valueBytes()[$sublist](1);
      let parser = new asn1lib.ASN1Parser.new(_native_typed_data.NativeUint8List.fromList(bytes));
      return asn1lib.ASN1Sequence.as(parser.nextObject());
    }
    [_pkcs8PrivateSequence](sequence) {
      let bitString = sequence.elements[$_get](2);
      let bytes = bitString.valueBytes();
      let parser = new asn1lib.ASN1Parser.new(bytes);
      return asn1lib.ASN1Sequence.as(parser.nextObject());
    }
  };
  (encrypt.RSAKeyParser.new = function() {
    ;
  }).prototype = encrypt.RSAKeyParser.prototype;
  dart.addTypeTests(encrypt.RSAKeyParser);
  dart.setMethodSignature(encrypt.RSAKeyParser, () => ({
    __proto__: dart.getMethods(encrypt.RSAKeyParser.__proto__),
    parse: dart.fnType(api$.RSAAsymmetricKey, [core.String]),
    [_parsePublic]: dart.fnType(api$.RSAAsymmetricKey, [asn1lib.ASN1Sequence]),
    [_parsePrivate]: dart.fnType(api$.RSAAsymmetricKey, [asn1lib.ASN1Sequence]),
    [_parseSequence]: dart.fnType(asn1lib.ASN1Sequence, [core.List$(core.String)]),
    [_pkcs8PublicSequence]: dart.fnType(asn1lib.ASN1Sequence, [asn1lib.ASN1Sequence]),
    [_pkcs8PrivateSequence]: dart.fnType(asn1lib.ASN1Sequence, [asn1lib.ASN1Sequence])
  }));
  dart.setLibraryUri(encrypt.RSAKeyParser, "package:encrypt/encrypt.dart");
  const key$0 = dart.privateName(encrypt, "Salsa20.key");
  encrypt.Salsa20 = class Salsa20 extends core.Object {
    get key() {
      return this[key$0];
    }
    set key(value) {
      super.key = value;
    }
    encrypt(bytes, opts) {
      let t9;
      let iv = opts && 'iv' in opts ? opts.iv : null;
      t9 = this[_cipher];
      t9.reset();
      t9.init(true, this[_buildParams](iv));
      t9;
      return new encrypt.Encrypted.new(this[_cipher].process(bytes));
    }
    decrypt(encrypted, opts) {
      let t9;
      let iv = opts && 'iv' in opts ? opts.iv : null;
      t9 = this[_cipher];
      t9.reset();
      t9.init(false, this[_buildParams](iv));
      t9;
      return this[_cipher].process(encrypted.bytes);
    }
    [_buildParams](iv) {
      return new (ParametersWithIVOfKeyParameter()).new(new api.KeyParameter.new(this.key.bytes), iv.bytes);
    }
  };
  (encrypt.Salsa20.new = function(key) {
    this[_cipher] = new salsa20.Salsa20Engine.new();
    this[key$0] = key;
    ;
  }).prototype = encrypt.Salsa20.prototype;
  dart.addTypeTests(encrypt.Salsa20);
  encrypt.Salsa20[dart.implements] = () => [encrypt.Algorithm];
  dart.setMethodSignature(encrypt.Salsa20, () => ({
    __proto__: dart.getMethods(encrypt.Salsa20.__proto__),
    encrypt: dart.fnType(encrypt.Encrypted, [typed_data.Uint8List], {iv: encrypt.IV}, {}),
    decrypt: dart.fnType(typed_data.Uint8List, [encrypt.Encrypted], {iv: encrypt.IV}, {}),
    [_buildParams]: dart.fnType(api.ParametersWithIV$(api.KeyParameter), [encrypt.IV])
  }));
  dart.setLibraryUri(encrypt.Salsa20, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.Salsa20, () => ({
    __proto__: dart.getFields(encrypt.Salsa20.__proto__),
    key: dart.finalFieldType(encrypt.Key),
    [_cipher]: dart.finalFieldType(salsa20.Salsa20Engine)
  }));
  const _meta = dart.privateName(encrypt, "_meta");
  const _bytes$ = dart.privateName(encrypt, "_bytes");
  let C14;
  const ListEquality__elementEquality = dart.privateName(equality, "ListEquality._elementEquality");
  let C13;
  encrypt.Encrypted = class Encrypted extends core.Object {
    get bytes() {
      return this[_bytes$];
    }
    get base16() {
      return this[_bytes$][$map](core.String, dart.fn(byte => byte[$toRadixString](16)[$padLeft](2, "0"), intToString()))[$join]();
    }
    get base64() {
      return convert.base64.encode(this[_bytes$]);
    }
    _equals(other) {
      if (other == null) return false;
      if (encrypt.Encrypted.is(other)) {
        return (C13 || CT.C13).equals(this.bytes, other.bytes);
      }
      return false;
    }
    set meta(m) {
      if (this[_meta] != null) {
        dart.throw(new core.UnsupportedError.new("Cannot modify meta once initialized"));
      }
      this[_meta] = core.Map.unmodifiable(m);
    }
  };
  (encrypt.Encrypted.new = function(_bytes) {
    this[_meta] = null;
    this[_bytes$] = _bytes;
    ;
  }).prototype = encrypt.Encrypted.prototype;
  (encrypt.Encrypted.fromBase16 = function(encoded) {
    this[_meta] = null;
    this[_bytes$] = _native_typed_data.NativeUint8List.fromList(ListOfString().generate(encoded.length, dart.fn(i => i[$modulo](2) === 0 ? encoded[$substring](i, dart.notNull(i) + 2) : null, intToString()))[$where](dart.fn(b => b != null, StringTobool()))[$map](core.int, dart.fn(b => core.int.parse(b, {radix: 16}), StringToint()))[$toList]());
    ;
  }).prototype = encrypt.Encrypted.prototype;
  (encrypt.Encrypted.fromBase64 = function(encoded) {
    this[_meta] = null;
    this[_bytes$] = convert.base64.decode(encoded);
    ;
  }).prototype = encrypt.Encrypted.prototype;
  (encrypt.Encrypted.from64 = function(encoded) {
    this[_meta] = null;
    this[_bytes$] = convert.base64.decode(encoded);
    ;
  }).prototype = encrypt.Encrypted.prototype;
  (encrypt.Encrypted.fromUtf8 = function(input) {
    this[_meta] = null;
    this[_bytes$] = _native_typed_data.NativeUint8List.fromList(convert.utf8.encode(input));
    ;
  }).prototype = encrypt.Encrypted.prototype;
  (encrypt.Encrypted.fromLength = function(length) {
    this[_meta] = null;
    this[_bytes$] = _native_typed_data.NativeUint8List.new(length);
    ;
  }).prototype = encrypt.Encrypted.prototype;
  dart.addTypeTests(encrypt.Encrypted);
  dart.setGetterSignature(encrypt.Encrypted, () => ({
    __proto__: dart.getGetters(encrypt.Encrypted.__proto__),
    bytes: typed_data.Uint8List,
    base16: core.String,
    base64: core.String
  }));
  dart.setSetterSignature(encrypt.Encrypted, () => ({
    __proto__: dart.getSetters(encrypt.Encrypted.__proto__),
    meta: core.Map
  }));
  dart.setLibraryUri(encrypt.Encrypted, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.Encrypted, () => ({
    __proto__: dart.getFields(encrypt.Encrypted.__proto__),
    [_bytes$]: dart.finalFieldType(typed_data.Uint8List),
    [_meta]: dart.fieldType(core.Map)
  }));
  dart.defineExtensionMethods(encrypt.Encrypted, ['_equals']);
  encrypt.IV = class IV extends encrypt.Encrypted {};
  (encrypt.IV.new = function(bytes) {
    encrypt.IV.__proto__.new.call(this, bytes);
    ;
  }).prototype = encrypt.IV.prototype;
  (encrypt.IV.fromBase16 = function(encoded) {
    encrypt.IV.__proto__.fromBase16.call(this, encoded);
    ;
  }).prototype = encrypt.IV.prototype;
  (encrypt.IV.fromBase64 = function(encoded) {
    encrypt.IV.__proto__.fromBase64.call(this, encoded);
    ;
  }).prototype = encrypt.IV.prototype;
  (encrypt.IV.fromUtf8 = function(input) {
    encrypt.IV.__proto__.fromUtf8.call(this, input);
    ;
  }).prototype = encrypt.IV.prototype;
  (encrypt.IV.fromLength = function(length) {
    encrypt.IV.__proto__.fromLength.call(this, length);
    ;
  }).prototype = encrypt.IV.prototype;
  (encrypt.IV.fromSecureRandom = function(length) {
    encrypt.IV.__proto__.new.call(this, new encrypt.SecureRandom.new(length).bytes);
    ;
  }).prototype = encrypt.IV.prototype;
  dart.addTypeTests(encrypt.IV);
  dart.setLibraryUri(encrypt.IV, "package:encrypt/encrypt.dart");
  encrypt.Key = class Key extends encrypt.Encrypted {
    stretch(desiredKeyLength, opts) {
      let t9;
      let iterationCount = opts && 'iterationCount' in opts ? opts.iterationCount : 100;
      let salt = opts && 'salt' in opts ? opts.salt : null;
      if (salt == null) {
        salt = new encrypt.SecureRandom.new(desiredKeyLength).bytes;
      }
      let params = new api$0.Pbkdf2Parameters.new(salt, iterationCount, desiredKeyLength);
      let pbkdf2 = (t9 = new pbkdf2$.PBKDF2KeyDerivator.new(api.Mac.new("SHA-1/HMAC")), t9.init(params), t9);
      return new encrypt.Key.new(pbkdf2.process(this[_bytes$]));
    }
  };
  (encrypt.Key.new = function(bytes) {
    encrypt.Key.__proto__.new.call(this, bytes);
    ;
  }).prototype = encrypt.Key.prototype;
  (encrypt.Key.fromBase16 = function(encoded) {
    encrypt.Key.__proto__.fromBase16.call(this, encoded);
    ;
  }).prototype = encrypt.Key.prototype;
  (encrypt.Key.fromBase64 = function(encoded) {
    encrypt.Key.__proto__.fromBase64.call(this, encoded);
    ;
  }).prototype = encrypt.Key.prototype;
  (encrypt.Key.fromUtf8 = function(input) {
    encrypt.Key.__proto__.fromUtf8.call(this, input);
    ;
  }).prototype = encrypt.Key.prototype;
  (encrypt.Key.fromLength = function(length) {
    encrypt.Key.__proto__.fromLength.call(this, length);
    ;
  }).prototype = encrypt.Key.prototype;
  (encrypt.Key.fromSecureRandom = function(length) {
    encrypt.Key.__proto__.new.call(this, new encrypt.SecureRandom.new(length).bytes);
    ;
  }).prototype = encrypt.Key.prototype;
  dart.addTypeTests(encrypt.Key);
  dart.setMethodSignature(encrypt.Key, () => ({
    __proto__: dart.getMethods(encrypt.Key.__proto__),
    stretch: dart.fnType(encrypt.Key, [core.int], {iterationCount: core.int, salt: typed_data.Uint8List}, {})
  }));
  dart.setLibraryUri(encrypt.Key, "package:encrypt/encrypt.dart");
  const algo$ = dart.privateName(encrypt, "Encrypter.algo");
  encrypt.Encrypter = class Encrypter extends core.Object {
    get algo() {
      return this[algo$];
    }
    set algo(value) {
      super.algo = value;
    }
    encryptBytes(input, opts) {
      let iv = opts && 'iv' in opts ? opts.iv : null;
      if (typed_data.Uint8List.is(input)) {
        return this.algo.encrypt(input, {iv: iv});
      }
      return this.algo.encrypt(_native_typed_data.NativeUint8List.fromList(input), {iv: iv});
    }
    encrypt(input, opts) {
      let iv = opts && 'iv' in opts ? opts.iv : null;
      return this.encryptBytes(convert.utf8.encode(input), {iv: iv});
    }
    decryptBytes(encrypted, opts) {
      let iv = opts && 'iv' in opts ? opts.iv : null;
      return this.algo.decrypt(encrypted, {iv: iv})[$toList]();
    }
    decrypt(encrypted, opts) {
      let iv = opts && 'iv' in opts ? opts.iv : null;
      return convert.utf8.decode(this.decryptBytes(encrypted, {iv: iv}), {allowMalformed: true});
    }
    decrypt16(encoded, opts) {
      let iv = opts && 'iv' in opts ? opts.iv : null;
      return this.decrypt(new encrypt.Encrypted.fromBase16(encoded), {iv: iv});
    }
    decrypt64(encoded, opts) {
      let iv = opts && 'iv' in opts ? opts.iv : null;
      return this.decrypt(new encrypt.Encrypted.fromBase64(encoded), {iv: iv});
    }
  };
  (encrypt.Encrypter.new = function(algo) {
    this[algo$] = algo;
    ;
  }).prototype = encrypt.Encrypter.prototype;
  dart.addTypeTests(encrypt.Encrypter);
  dart.setMethodSignature(encrypt.Encrypter, () => ({
    __proto__: dart.getMethods(encrypt.Encrypter.__proto__),
    encryptBytes: dart.fnType(encrypt.Encrypted, [core.List$(core.int)], {iv: encrypt.IV}, {}),
    encrypt: dart.fnType(encrypt.Encrypted, [core.String], {iv: encrypt.IV}, {}),
    decryptBytes: dart.fnType(core.List$(core.int), [encrypt.Encrypted], {iv: encrypt.IV}, {}),
    decrypt: dart.fnType(core.String, [encrypt.Encrypted], {iv: encrypt.IV}, {}),
    decrypt16: dart.fnType(core.String, [core.String], {iv: encrypt.IV}, {}),
    decrypt64: dart.fnType(core.String, [core.String], {iv: encrypt.IV}, {})
  }));
  dart.setLibraryUri(encrypt.Encrypter, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.Encrypter, () => ({
    __proto__: dart.getFields(encrypt.Encrypter.__proto__),
    algo: dart.finalFieldType(encrypt.Algorithm)
  }));
  encrypt.SecureRandom = class SecureRandom extends core.Object {
    get bytes() {
      return this[_bytes$];
    }
    get base16() {
      return this[_bytes$][$map](core.String, dart.fn(byte => byte[$toRadixString](16)[$padLeft](2, "0"), intToString()))[$join]();
    }
    get base64() {
      return convert.base64.encode(this[_bytes$]);
    }
    get utf8() {
      return convert.utf8.decode(this[_bytes$]);
    }
    get length() {
      return this[_bytes$][$length];
    }
  };
  (encrypt.SecureRandom.new = function(length) {
    this[_bytes$] = _native_typed_data.NativeUint8List.fromList(ListOfint().generate(length, dart.fn(i => encrypt.SecureRandom._generator.nextInt(256), intToint())));
    ;
  }).prototype = encrypt.SecureRandom.prototype;
  dart.addTypeTests(encrypt.SecureRandom);
  dart.setGetterSignature(encrypt.SecureRandom, () => ({
    __proto__: dart.getGetters(encrypt.SecureRandom.__proto__),
    bytes: typed_data.Uint8List,
    base16: core.String,
    base64: core.String,
    utf8: core.String,
    length: core.int
  }));
  dart.setLibraryUri(encrypt.SecureRandom, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.SecureRandom, () => ({
    __proto__: dart.getFields(encrypt.SecureRandom.__proto__),
    [_bytes$]: dart.finalFieldType(typed_data.Uint8List)
  }));
  dart.defineLazy(encrypt.SecureRandom, {
    /*encrypt.SecureRandom._generator*/get _generator() {
      return math.Random.secure();
    }
  });
  const algo$0 = dart.privateName(encrypt, "Signer.algo");
  encrypt.Signer = class Signer extends core.Object {
    get algo() {
      return this[algo$0];
    }
    set algo(value) {
      super.algo = value;
    }
    sign(input) {
      return this.signBytes(convert.utf8.encode(input));
    }
    signBytes(bytes) {
      return this.algo.sign(_native_typed_data.NativeUint8List.fromList(bytes));
    }
    verifyBytes(bytes, signature) {
      return this.algo.verify(_native_typed_data.NativeUint8List.fromList(bytes), signature);
    }
    verify(input, signature) {
      return this.verifyBytes(convert.utf8.encode(input), signature);
    }
    verify16(input, signature) {
      return this.verify(input, new encrypt.Encrypted.fromBase16(signature));
    }
    verify64(input, signature) {
      return this.verify(input, new encrypt.Encrypted.fromBase64(signature));
    }
  };
  (encrypt.Signer.new = function(algo) {
    this[algo$0] = algo;
    ;
  }).prototype = encrypt.Signer.prototype;
  dart.addTypeTests(encrypt.Signer);
  dart.setMethodSignature(encrypt.Signer, () => ({
    __proto__: dart.getMethods(encrypt.Signer.__proto__),
    sign: dart.fnType(encrypt.Encrypted, [core.String]),
    signBytes: dart.fnType(encrypt.Encrypted, [core.List$(core.int)]),
    verifyBytes: dart.fnType(core.bool, [core.List$(core.int), encrypt.Encrypted]),
    verify: dart.fnType(core.bool, [core.String, encrypt.Encrypted]),
    verify16: dart.fnType(core.bool, [core.String, core.String]),
    verify64: dart.fnType(core.bool, [core.String, core.String])
  }));
  dart.setLibraryUri(encrypt.Signer, "package:encrypt/encrypt.dart");
  dart.setFieldSignature(encrypt.Signer, () => ({
    __proto__: dart.getFields(encrypt.Signer.__proto__),
    algo: dart.finalFieldType(encrypt.SignerAlgorithm)
  }));
  encrypt._hexToBytes = function _hexToBytes(encoded) {
    return _native_typed_data.NativeUint8List.fromList(ListOfString().generate(encoded.length, dart.fn(i => i[$modulo](2) === 0 ? encoded[$substring](i, dart.notNull(i) + 2) : null, intToString()))[$where](dart.fn(b => b != null, StringTobool()))[$map](core.int, dart.fn(b => core.int.parse(b, {radix: 16}), StringToint()))[$toList]());
  };
  let C15;
  dart.defineLazy(encrypt, {
    /*encrypt._modes*/get _modes() {
      return C15 || CT.C15;
    },
    /*encrypt._digestIdFactoryMap*/get _digestIdFactoryMap() {
      return new (LinkedMapOfRSASignDigest$_DigestIdFactory()).from([encrypt.RSASignDigest.SHA256, new encrypt._DigestIdFactory.new(encrypt._hexToBytes("0609608648016503040201"), dart.fn(() => new sha256.SHA256Digest.new(), VoidToSHA256Digest()))]);
    }
  });
  dart.trackLibraries("packages/encrypt/encrypt", {
    "package:encrypt/encrypt.dart": encrypt
  }, {
    "package:encrypt/encrypt.dart": ["src/algorithm.dart", "src/algorithms/aes.dart", "src/algorithms/fernet.dart", "src/algorithms/rsa.dart", "src/algorithms/salsa20.dart", "src/encrypted.dart", "src/encrypter.dart", "src/secure_random.dart", "src/signer.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/algorithm.dart","src/algorithms/aes.dart","src/algorithms/fernet.dart","src/algorithms/rsa.dart","src/algorithms/salsa20.dart","src/encrypted.dart","src/encrypter.dart","src/secure_random.dart","src/signer.dart"],"names":[],"mappings":"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","file":"encrypt.ddc.js"}');
  // Exports:
  return {
    encrypt: encrypt
  };
});

//# sourceMappingURL=encrypt.ddc.js.map
