define(['dart_sdk', 'packages/pointycastle/src/ufixnum'], function(dart_sdk, packages__pointycastle__src__ufixnum) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ufixnum = packages__pointycastle__src__ufixnum.src__ufixnum;
  const utils = packages__pointycastle__src__ufixnum.src__utils;
  const long_sha2_family_digest = Object.create(dart.library);
  const base_digest = Object.create(dart.library);
  const api = Object.create(dart.library);
  const registry = Object.create(dart.library);
  const registration = Object.create(dart.library);
  const sic = Object.create(dart.library);
  const base_stream_cipher = Object.create(dart.library);
  const salsa20 = Object.create(dart.library);
  const ctr = Object.create(dart.library);
  const rsa_signer = Object.create(dart.library);
  const rsa = Object.create(dart.library);
  const base_asymmetric_block_cipher = Object.create(dart.library);
  const api$ = Object.create(dart.library);
  const pkcs1 = Object.create(dart.library);
  const fortuna_random = Object.create(dart.library);
  const auto_seed_block_ctr_random = Object.create(dart.library);
  const block_ctr_random = Object.create(dart.library);
  const secure_random_base = Object.create(dart.library);
  const aes_fast = Object.create(dart.library);
  const base_block_cipher = Object.create(dart.library);
  const ecdsa_signer = Object.create(dart.library);
  const api$0 = Object.create(dart.library);
  const iso7816d4 = Object.create(dart.library);
  const base_padding = Object.create(dart.library);
  const pkcs7 = Object.create(dart.library);
  const padded_block_cipher_impl = Object.create(dart.library);
  const cbc_block_cipher_mac = Object.create(dart.library);
  const cbc = Object.create(dart.library);
  const base_mac = Object.create(dart.library);
  const cmac = Object.create(dart.library);
  const hmac = Object.create(dart.library);
  const rsa_key_generator = Object.create(dart.library);
  const api$1 = Object.create(dart.library);
  const ec_key_generator = Object.create(dart.library);
  const scrypt = Object.create(dart.library);
  const base_key_derivator = Object.create(dart.library);
  const pbkdf2$ = Object.create(dart.library);
  const api$2 = Object.create(dart.library);
  const sha256 = Object.create(dart.library);
  const md4_family_digest = Object.create(dart.library);
  const secp521r1 = Object.create(dart.library);
  const ec_standard_curve_constructor = Object.create(dart.library);
  const ecc_fp = Object.create(dart.library);
  const ecc_base = Object.create(dart.library);
  const secp384r1 = Object.create(dart.library);
  const secp256r1 = Object.create(dart.library);
  const secp256k1 = Object.create(dart.library);
  const secp224r1 = Object.create(dart.library);
  const secp224k1 = Object.create(dart.library);
  const secp192r1 = Object.create(dart.library);
  const secp192k1 = Object.create(dart.library);
  const secp160r2 = Object.create(dart.library);
  const secp160r1 = Object.create(dart.library);
  const secp160k1 = Object.create(dart.library);
  const secp128r2 = Object.create(dart.library);
  const secp128r1 = Object.create(dart.library);
  const secp112r2 = Object.create(dart.library);
  const secp112r1 = Object.create(dart.library);
  const prime256v1 = Object.create(dart.library);
  const prime239v3 = Object.create(dart.library);
  const prime239v2 = Object.create(dart.library);
  const prime239v1 = Object.create(dart.library);
  const prime192v3 = Object.create(dart.library);
  const prime192v2 = Object.create(dart.library);
  const prime192v1 = Object.create(dart.library);
  const gostr3410_2001_cryptopro_xchb = Object.create(dart.library);
  const gostr3410_2001_cryptopro_xcha = Object.create(dart.library);
  const gostr3410_2001_cryptopro_c = Object.create(dart.library);
  const gostr3410_2001_cryptopro_b = Object.create(dart.library);
  const gostr3410_2001_cryptopro_a = Object.create(dart.library);
  const brainpoolp512t1 = Object.create(dart.library);
  const brainpoolp512r1 = Object.create(dart.library);
  const brainpoolp384t1 = Object.create(dart.library);
  const brainpoolp384r1 = Object.create(dart.library);
  const brainpoolp320t1 = Object.create(dart.library);
  const brainpoolp320r1 = Object.create(dart.library);
  const brainpoolp256t1 = Object.create(dart.library);
  const brainpoolp256r1 = Object.create(dart.library);
  const brainpoolp224t1 = Object.create(dart.library);
  const brainpoolp224r1 = Object.create(dart.library);
  const brainpoolp192t1 = Object.create(dart.library);
  const brainpoolp192r1 = Object.create(dart.library);
  const brainpoolp160t1 = Object.create(dart.library);
  const brainpoolp160r1 = Object.create(dart.library);
  const whirlpool = Object.create(dart.library);
  const tiger = Object.create(dart.library);
  const sha512t = Object.create(dart.library);
  const sha512 = Object.create(dart.library);
  const sha384 = Object.create(dart.library);
  const sha3 = Object.create(dart.library);
  const sha224 = Object.create(dart.library);
  const sha1 = Object.create(dart.library);
  const ripemd320 = Object.create(dart.library);
  const ripemd256 = Object.create(dart.library);
  const ripemd160 = Object.create(dart.library);
  const ripemd128 = Object.create(dart.library);
  const md5 = Object.create(dart.library);
  const md4 = Object.create(dart.library);
  const md2 = Object.create(dart.library);
  const blake2b = Object.create(dart.library);
  const sic$ = Object.create(dart.library);
  const stream_cipher_as_block_cipher = Object.create(dart.library);
  const ofb = Object.create(dart.library);
  const gctr = Object.create(dart.library);
  const ecb = Object.create(dart.library);
  const ctr$ = Object.create(dart.library);
  const cfb = Object.create(dart.library);
  const oaep = Object.create(dart.library);
  const $length = dartx.length;
  const $fillRange = dartx.fillRange;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $sublist = dartx.sublist;
  const $clear = dartx.clear;
  const $containsKey = dartx.containsKey;
  const $putIfAbsent = dartx.putIfAbsent;
  const $splitMapJoin = dartx.splitMapJoin;
  const $setAll = dartx.setAll;
  const $lengthInBytes = dartx.lengthInBytes;
  const $codeUnits = dartx.codeUnits;
  const $truncate = dartx.truncate;
  const $substring = dartx.substring;
  const $setRange = dartx.setRange;
  const $hashCode = dartx.hashCode;
  const $toString = dartx.toString;
  const $add = dartx.add;
  const $leftShift = dartx['<<'];
  const $floor = dartx.floor;
  const $buffer = dartx.buffer;
  const $offsetInBytes = dartx.offsetInBytes;
  const $rightShift = dartx['>>'];
  const $toInt = dartx.toInt;
  const $modulo = dartx['%'];
  const $runtimeType = dartx.runtimeType;
  const $isEmpty = dartx.isEmpty;
  const $first = dartx.first;
  const $split = dartx.split;
  const $last = dartx.last;
  const $toRadixString = dartx.toRadixString;
  const $asByteData = dartx.asByteData;
  let JSArrayOfRegister64 = () => (JSArrayOfRegister64 = dart.constFn(_interceptors.JSArray$(ufixnum.Register64)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let LinkedMapOfString$VoidTodynamic = () => (LinkedMapOfString$VoidTodynamic = dart.constFn(_js_helper.LinkedMap$(core.String, VoidTodynamic())))();
  let MapOfString$VoidTodynamic = () => (MapOfString$VoidTodynamic = dart.constFn(core.Map$(core.String, VoidTodynamic())))();
  let LinkedMapOfType$MapOfString$VoidTodynamic = () => (LinkedMapOfType$MapOfString$VoidTodynamic = dart.constFn(_js_helper.LinkedMap$(core.Type, MapOfString$VoidTodynamic())))();
  let SetOfDynamicFactoryConfig = () => (SetOfDynamicFactoryConfig = dart.constFn(core.Set$(registry.DynamicFactoryConfig)))();
  let LinkedMapOfType$SetOfDynamicFactoryConfig = () => (LinkedMapOfType$SetOfDynamicFactoryConfig = dart.constFn(_js_helper.LinkedMap$(core.Type, SetOfDynamicFactoryConfig())))();
  let VoidToMapOfString$VoidTodynamic = () => (VoidToMapOfString$VoidTodynamic = dart.constFn(dart.fnType(MapOfString$VoidTodynamic(), [])))();
  let _HashSetOfDynamicFactoryConfig = () => (_HashSetOfDynamicFactoryConfig = dart.constFn(collection._HashSet$(registry.DynamicFactoryConfig)))();
  let VoidToSetOfDynamicFactoryConfig = () => (VoidToSetOfDynamicFactoryConfig = dart.constFn(dart.fnType(SetOfDynamicFactoryConfig(), [])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let ParametersWithIVOfCipherParameters = () => (ParametersWithIVOfCipherParameters = dart.constFn(api.ParametersWithIV$(api.CipherParameters)))();
  let VoidToSICStreamCipher = () => (VoidToSICStreamCipher = dart.constFn(dart.fnType(sic.SICStreamCipher, [])))();
  let StringAndMatchToFn = () => (StringAndMatchToFn = dart.constFn(dart.fnType(VoidToSICStreamCipher(), [core.String, core.Match])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ParametersWithIVOfKeyParameter = () => (ParametersWithIVOfKeyParameter = dart.constFn(api.ParametersWithIV$(api.KeyParameter)))();
  let VoidToSalsa20Engine = () => (VoidToSalsa20Engine = dart.constFn(dart.fnType(salsa20.Salsa20Engine, [])))();
  let VoidToCTRStreamCipher = () => (VoidToCTRStreamCipher = dart.constFn(dart.fnType(ctr.CTRStreamCipher, [])))();
  let StringAndMatchToFn$ = () => (StringAndMatchToFn$ = dart.constFn(dart.fnType(VoidToCTRStreamCipher(), [core.String, core.Match])))();
  let ParametersWithRandomOfCipherParameters = () => (ParametersWithRandomOfCipherParameters = dart.constFn(api.ParametersWithRandom$(api.CipherParameters)))();
  let AsymmetricKeyParameterOfAsymmetricKey = () => (AsymmetricKeyParameterOfAsymmetricKey = dart.constFn(api.AsymmetricKeyParameter$(api.AsymmetricKey)))();
  let VoidToRSASigner = () => (VoidToRSASigner = dart.constFn(dart.fnType(rsa_signer.RSASigner, [])))();
  let StringAndMatchToFn$0 = () => (StringAndMatchToFn$0 = dart.constFn(dart.fnType(VoidToRSASigner(), [core.String, core.Match])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let AsymmetricKeyParameterOfRSAAsymmetricKey = () => (AsymmetricKeyParameterOfRSAAsymmetricKey = dart.constFn(api.AsymmetricKeyParameter$(api$.RSAAsymmetricKey)))();
  let VoidToRSAEngine = () => (VoidToRSAEngine = dart.constFn(dart.fnType(rsa.RSAEngine, [])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidToPKCS1Encoding = () => (VoidToPKCS1Encoding = dart.constFn(dart.fnType(pkcs1.PKCS1Encoding, [])))();
  let StringAndMatchToFn$1 = () => (StringAndMatchToFn$1 = dart.constFn(dart.fnType(VoidToPKCS1Encoding(), [core.String, core.Match])))();
  let VoidToFortunaRandom = () => (VoidToFortunaRandom = dart.constFn(dart.fnType(fortuna_random.FortunaRandom, [])))();
  let VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  let VoidToBigInt = () => (VoidToBigInt = dart.constFn(dart.fnType(core.BigInt, [])))();
  let VoidToUint8List = () => (VoidToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [])))();
  let VoidToAutoSeedBlockCtrRandom = () => (VoidToAutoSeedBlockCtrRandom = dart.constFn(dart.fnType(auto_seed_block_ctr_random.AutoSeedBlockCtrRandom, [])))();
  let StringAndMatchToFn$2 = () => (StringAndMatchToFn$2 = dart.constFn(dart.fnType(VoidToAutoSeedBlockCtrRandom(), [core.String, core.Match])))();
  let VoidToBlockCtrRandom = () => (VoidToBlockCtrRandom = dart.constFn(dart.fnType(block_ctr_random.BlockCtrRandom, [])))();
  let StringAndMatchToFn$3 = () => (StringAndMatchToFn$3 = dart.constFn(dart.fnType(VoidToBlockCtrRandom(), [core.String, core.Match])))();
  let ListOfListOfint = () => (ListOfListOfint = dart.constFn(core.List$(ListOfint())))();
  let intToListOfint = () => (intToListOfint = dart.constFn(dart.fnType(ListOfint(), [core.int])))();
  let VoidToAESFastEngine = () => (VoidToAESFastEngine = dart.constFn(dart.fnType(aes_fast.AESFastEngine, [])))();
  let PrivateKeyParameterOfPrivateKey = () => (PrivateKeyParameterOfPrivateKey = dart.constFn(api.PrivateKeyParameter$(api.PrivateKey)))();
  let PublicKeyParameterOfPublicKey = () => (PublicKeyParameterOfPublicKey = dart.constFn(api.PublicKeyParameter$(api.PublicKey)))();
  let VoidToECDSASigner = () => (VoidToECDSASigner = dart.constFn(dart.fnType(ecdsa_signer.ECDSASigner, [])))();
  let StringAndMatchToFn$4 = () => (StringAndMatchToFn$4 = dart.constFn(dart.fnType(VoidToECDSASigner(), [core.String, core.Match])))();
  let VoidToISO7816d4Padding = () => (VoidToISO7816d4Padding = dart.constFn(dart.fnType(iso7816d4.ISO7816d4Padding, [])))();
  let VoidToPKCS7Padding = () => (VoidToPKCS7Padding = dart.constFn(dart.fnType(pkcs7.PKCS7Padding, [])))();
  let PaddedBlockCipherParametersOfCipherParameters$CipherParameters = () => (PaddedBlockCipherParametersOfCipherParameters$CipherParameters = dart.constFn(api.PaddedBlockCipherParameters$(api.CipherParameters, api.CipherParameters)))();
  let VoidToPaddedBlockCipherImpl = () => (VoidToPaddedBlockCipherImpl = dart.constFn(dart.fnType(padded_block_cipher_impl.PaddedBlockCipherImpl, [])))();
  let StringAndMatchToFn$5 = () => (StringAndMatchToFn$5 = dart.constFn(dart.fnType(VoidToPaddedBlockCipherImpl(), [core.String, core.Match])))();
  let VoidToCBCBlockCipherMac = () => (VoidToCBCBlockCipherMac = dart.constFn(dart.fnType(cbc_block_cipher_mac.CBCBlockCipherMac, [])))();
  let StringAndMatchToFn$6 = () => (StringAndMatchToFn$6 = dart.constFn(dart.fnType(VoidToCBCBlockCipherMac(), [core.String, core.Match])))();
  let VoidToCBCBlockCipher = () => (VoidToCBCBlockCipher = dart.constFn(dart.fnType(cbc.CBCBlockCipher, [])))();
  let StringAndMatchToFn$7 = () => (StringAndMatchToFn$7 = dart.constFn(dart.fnType(VoidToCBCBlockCipher(), [core.String, core.Match])))();
  let VoidToCMac = () => (VoidToCMac = dart.constFn(dart.fnType(cmac.CMac, [])))();
  let StringAndMatchToFn$8 = () => (StringAndMatchToFn$8 = dart.constFn(dart.fnType(VoidToCMac(), [core.String, core.Match])))();
  let VoidToHMac = () => (VoidToHMac = dart.constFn(dart.fnType(hmac.HMac, [])))();
  let StringAndMatchToFn$9 = () => (StringAndMatchToFn$9 = dart.constFn(dart.fnType(VoidToHMac(), [core.String, core.Match])))();
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  let AsymmetricKeyPairOfPublicKey$PrivateKey = () => (AsymmetricKeyPairOfPublicKey$PrivateKey = dart.constFn(api.AsymmetricKeyPair$(api.PublicKey, api.PrivateKey)))();
  let VoidToRSAKeyGenerator = () => (VoidToRSAKeyGenerator = dart.constFn(dart.fnType(rsa_key_generator.RSAKeyGenerator, [])))();
  let JSArrayOfBigInt = () => (JSArrayOfBigInt = dart.constFn(_interceptors.JSArray$(core.BigInt)))();
  let VoidToECKeyGenerator = () => (VoidToECKeyGenerator = dart.constFn(dart.fnType(ec_key_generator.ECKeyGenerator, [])))();
  let VoidToScrypt = () => (VoidToScrypt = dart.constFn(dart.fnType(scrypt.Scrypt, [])))();
  let VoidToPBKDF2KeyDerivator = () => (VoidToPBKDF2KeyDerivator = dart.constFn(dart.fnType(pbkdf2$.PBKDF2KeyDerivator, [])))();
  let StringAndMatchToFn$10 = () => (StringAndMatchToFn$10 = dart.constFn(dart.fnType(VoidToPBKDF2KeyDerivator(), [core.String, core.Match])))();
  let VoidToSHA256Digest = () => (VoidToSHA256Digest = dart.constFn(dart.fnType(sha256.SHA256Digest, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp521r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp521r1 = dart.constFn(dart.fnType(secp521r1.ECCurve_secp521r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp521r1 = () => (VoidToECCurve_secp521r1 = dart.constFn(dart.fnType(secp521r1.ECCurve_secp521r1, [])))();
  let ECPointBaseAndBigIntAndPreCompInfoToECPointBase = () => (ECPointBaseAndBigIntAndPreCompInfoToECPointBase = dart.constFn(dart.fnType(ecc_base.ECPointBase, [ecc_base.ECPointBase, core.BigInt, ecc_base.PreCompInfo])))();
  let ListOfECPoint = () => (ListOfECPoint = dart.constFn(core.List$(ecc_fp.ECPoint)))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp384r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp384r1 = dart.constFn(dart.fnType(secp384r1.ECCurve_secp384r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp384r1 = () => (VoidToECCurve_secp384r1 = dart.constFn(dart.fnType(secp384r1.ECCurve_secp384r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp256r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp256r1 = dart.constFn(dart.fnType(secp256r1.ECCurve_secp256r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp256r1 = () => (VoidToECCurve_secp256r1 = dart.constFn(dart.fnType(secp256r1.ECCurve_secp256r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp256k1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp256k1 = dart.constFn(dart.fnType(secp256k1.ECCurve_secp256k1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp256k1 = () => (VoidToECCurve_secp256k1 = dart.constFn(dart.fnType(secp256k1.ECCurve_secp256k1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp224r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp224r1 = dart.constFn(dart.fnType(secp224r1.ECCurve_secp224r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp224r1 = () => (VoidToECCurve_secp224r1 = dart.constFn(dart.fnType(secp224r1.ECCurve_secp224r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp224k1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp224k1 = dart.constFn(dart.fnType(secp224k1.ECCurve_secp224k1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp224k1 = () => (VoidToECCurve_secp224k1 = dart.constFn(dart.fnType(secp224k1.ECCurve_secp224k1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp192r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp192r1 = dart.constFn(dart.fnType(secp192r1.ECCurve_secp192r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp192r1 = () => (VoidToECCurve_secp192r1 = dart.constFn(dart.fnType(secp192r1.ECCurve_secp192r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp192k1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp192k1 = dart.constFn(dart.fnType(secp192k1.ECCurve_secp192k1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp192k1 = () => (VoidToECCurve_secp192k1 = dart.constFn(dart.fnType(secp192k1.ECCurve_secp192k1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp160r2 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp160r2 = dart.constFn(dart.fnType(secp160r2.ECCurve_secp160r2, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp160r2 = () => (VoidToECCurve_secp160r2 = dart.constFn(dart.fnType(secp160r2.ECCurve_secp160r2, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp160r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp160r1 = dart.constFn(dart.fnType(secp160r1.ECCurve_secp160r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp160r1 = () => (VoidToECCurve_secp160r1 = dart.constFn(dart.fnType(secp160r1.ECCurve_secp160r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp160k1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp160k1 = dart.constFn(dart.fnType(secp160k1.ECCurve_secp160k1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp160k1 = () => (VoidToECCurve_secp160k1 = dart.constFn(dart.fnType(secp160k1.ECCurve_secp160k1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp128r2 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp128r2 = dart.constFn(dart.fnType(secp128r2.ECCurve_secp128r2, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp128r2 = () => (VoidToECCurve_secp128r2 = dart.constFn(dart.fnType(secp128r2.ECCurve_secp128r2, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp128r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp128r1 = dart.constFn(dart.fnType(secp128r1.ECCurve_secp128r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp128r1 = () => (VoidToECCurve_secp128r1 = dart.constFn(dart.fnType(secp128r1.ECCurve_secp128r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp112r2 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp112r2 = dart.constFn(dart.fnType(secp112r2.ECCurve_secp112r2, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp112r2 = () => (VoidToECCurve_secp112r2 = dart.constFn(dart.fnType(secp112r2.ECCurve_secp112r2, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_secp112r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_secp112r1 = dart.constFn(dart.fnType(secp112r1.ECCurve_secp112r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_secp112r1 = () => (VoidToECCurve_secp112r1 = dart.constFn(dart.fnType(secp112r1.ECCurve_secp112r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_prime256v1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_prime256v1 = dart.constFn(dart.fnType(prime256v1.ECCurve_prime256v1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_prime256v1 = () => (VoidToECCurve_prime256v1 = dart.constFn(dart.fnType(prime256v1.ECCurve_prime256v1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_prime239v3 = () => (dynamicAnddynamicAnddynamic__ToECCurve_prime239v3 = dart.constFn(dart.fnType(prime239v3.ECCurve_prime239v3, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_prime239v3 = () => (VoidToECCurve_prime239v3 = dart.constFn(dart.fnType(prime239v3.ECCurve_prime239v3, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_prime239v2 = () => (dynamicAnddynamicAnddynamic__ToECCurve_prime239v2 = dart.constFn(dart.fnType(prime239v2.ECCurve_prime239v2, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_prime239v2 = () => (VoidToECCurve_prime239v2 = dart.constFn(dart.fnType(prime239v2.ECCurve_prime239v2, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_prime239v1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_prime239v1 = dart.constFn(dart.fnType(prime239v1.ECCurve_prime239v1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_prime239v1 = () => (VoidToECCurve_prime239v1 = dart.constFn(dart.fnType(prime239v1.ECCurve_prime239v1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_prime192v3 = () => (dynamicAnddynamicAnddynamic__ToECCurve_prime192v3 = dart.constFn(dart.fnType(prime192v3.ECCurve_prime192v3, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_prime192v3 = () => (VoidToECCurve_prime192v3 = dart.constFn(dart.fnType(prime192v3.ECCurve_prime192v3, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_prime192v2 = () => (dynamicAnddynamicAnddynamic__ToECCurve_prime192v2 = dart.constFn(dart.fnType(prime192v2.ECCurve_prime192v2, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_prime192v2 = () => (VoidToECCurve_prime192v2 = dart.constFn(dart.fnType(prime192v2.ECCurve_prime192v2, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_prime192v1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_prime192v1 = dart.constFn(dart.fnType(prime192v1.ECCurve_prime192v1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_prime192v1 = () => (VoidToECCurve_prime192v1 = dart.constFn(dart.fnType(prime192v1.ECCurve_prime192v1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_xchb = () => (dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_xchb = dart.constFn(dart.fnType(gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_gostr3410_2001_cryptopro_xchb = () => (VoidToECCurve_gostr3410_2001_cryptopro_xchb = dart.constFn(dart.fnType(gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_xcha = () => (dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_xcha = dart.constFn(dart.fnType(gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_gostr3410_2001_cryptopro_xcha = () => (VoidToECCurve_gostr3410_2001_cryptopro_xcha = dart.constFn(dart.fnType(gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_c = () => (dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_c = dart.constFn(dart.fnType(gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_gostr3410_2001_cryptopro_c = () => (VoidToECCurve_gostr3410_2001_cryptopro_c = dart.constFn(dart.fnType(gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_b = () => (dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_b = dart.constFn(dart.fnType(gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_gostr3410_2001_cryptopro_b = () => (VoidToECCurve_gostr3410_2001_cryptopro_b = dart.constFn(dart.fnType(gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_a = () => (dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_a = dart.constFn(dart.fnType(gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_gostr3410_2001_cryptopro_a = () => (VoidToECCurve_gostr3410_2001_cryptopro_a = dart.constFn(dart.fnType(gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp512t1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp512t1 = dart.constFn(dart.fnType(brainpoolp512t1.ECCurve_brainpoolp512t1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp512t1 = () => (VoidToECCurve_brainpoolp512t1 = dart.constFn(dart.fnType(brainpoolp512t1.ECCurve_brainpoolp512t1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp512r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp512r1 = dart.constFn(dart.fnType(brainpoolp512r1.ECCurve_brainpoolp512r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp512r1 = () => (VoidToECCurve_brainpoolp512r1 = dart.constFn(dart.fnType(brainpoolp512r1.ECCurve_brainpoolp512r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp384t1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp384t1 = dart.constFn(dart.fnType(brainpoolp384t1.ECCurve_brainpoolp384t1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp384t1 = () => (VoidToECCurve_brainpoolp384t1 = dart.constFn(dart.fnType(brainpoolp384t1.ECCurve_brainpoolp384t1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp384r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp384r1 = dart.constFn(dart.fnType(brainpoolp384r1.ECCurve_brainpoolp384r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp384r1 = () => (VoidToECCurve_brainpoolp384r1 = dart.constFn(dart.fnType(brainpoolp384r1.ECCurve_brainpoolp384r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp320t1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp320t1 = dart.constFn(dart.fnType(brainpoolp320t1.ECCurve_brainpoolp320t1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp320t1 = () => (VoidToECCurve_brainpoolp320t1 = dart.constFn(dart.fnType(brainpoolp320t1.ECCurve_brainpoolp320t1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp320r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp320r1 = dart.constFn(dart.fnType(brainpoolp320r1.ECCurve_brainpoolp320r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp320r1 = () => (VoidToECCurve_brainpoolp320r1 = dart.constFn(dart.fnType(brainpoolp320r1.ECCurve_brainpoolp320r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp256t1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp256t1 = dart.constFn(dart.fnType(brainpoolp256t1.ECCurve_brainpoolp256t1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp256t1 = () => (VoidToECCurve_brainpoolp256t1 = dart.constFn(dart.fnType(brainpoolp256t1.ECCurve_brainpoolp256t1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp256r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp256r1 = dart.constFn(dart.fnType(brainpoolp256r1.ECCurve_brainpoolp256r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp256r1 = () => (VoidToECCurve_brainpoolp256r1 = dart.constFn(dart.fnType(brainpoolp256r1.ECCurve_brainpoolp256r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp224t1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp224t1 = dart.constFn(dart.fnType(brainpoolp224t1.ECCurve_brainpoolp224t1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp224t1 = () => (VoidToECCurve_brainpoolp224t1 = dart.constFn(dart.fnType(brainpoolp224t1.ECCurve_brainpoolp224t1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp224r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp224r1 = dart.constFn(dart.fnType(brainpoolp224r1.ECCurve_brainpoolp224r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp224r1 = () => (VoidToECCurve_brainpoolp224r1 = dart.constFn(dart.fnType(brainpoolp224r1.ECCurve_brainpoolp224r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp192t1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp192t1 = dart.constFn(dart.fnType(brainpoolp192t1.ECCurve_brainpoolp192t1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp192t1 = () => (VoidToECCurve_brainpoolp192t1 = dart.constFn(dart.fnType(brainpoolp192t1.ECCurve_brainpoolp192t1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp192r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp192r1 = dart.constFn(dart.fnType(brainpoolp192r1.ECCurve_brainpoolp192r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp192r1 = () => (VoidToECCurve_brainpoolp192r1 = dart.constFn(dart.fnType(brainpoolp192r1.ECCurve_brainpoolp192r1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp160t1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp160t1 = dart.constFn(dart.fnType(brainpoolp160t1.ECCurve_brainpoolp160t1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp160t1 = () => (VoidToECCurve_brainpoolp160t1 = dart.constFn(dart.fnType(brainpoolp160t1.ECCurve_brainpoolp160t1, [])))();
  let dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp160r1 = () => (dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp160r1 = dart.constFn(dart.fnType(brainpoolp160r1.ECCurve_brainpoolp160r1, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToECCurve_brainpoolp160r1 = () => (VoidToECCurve_brainpoolp160r1 = dart.constFn(dart.fnType(brainpoolp160r1.ECCurve_brainpoolp160r1, [])))();
  let VoidToWhirlpoolDigest = () => (VoidToWhirlpoolDigest = dart.constFn(dart.fnType(whirlpool.WhirlpoolDigest, [])))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let VoidToTigerDigest = () => (VoidToTigerDigest = dart.constFn(dart.fnType(tiger.TigerDigest, [])))();
  let VoidToSHA512tDigest = () => (VoidToSHA512tDigest = dart.constFn(dart.fnType(sha512t.SHA512tDigest, [])))();
  let StringAndMatchToFn$11 = () => (StringAndMatchToFn$11 = dart.constFn(dart.fnType(VoidToSHA512tDigest(), [core.String, core.Match])))();
  let VoidToSHA512Digest = () => (VoidToSHA512Digest = dart.constFn(dart.fnType(sha512.SHA512Digest, [])))();
  let VoidToSHA384Digest = () => (VoidToSHA384Digest = dart.constFn(dart.fnType(sha384.SHA384Digest, [])))();
  let VoidToSHA3Digest = () => (VoidToSHA3Digest = dart.constFn(dart.fnType(sha3.SHA3Digest, [])))();
  let StringAndMatchToFn$12 = () => (StringAndMatchToFn$12 = dart.constFn(dart.fnType(VoidToSHA3Digest(), [core.String, core.Match])))();
  let VoidToSHA224Digest = () => (VoidToSHA224Digest = dart.constFn(dart.fnType(sha224.SHA224Digest, [])))();
  let VoidToSHA1Digest = () => (VoidToSHA1Digest = dart.constFn(dart.fnType(sha1.SHA1Digest, [])))();
  let VoidToRIPEMD320Digest = () => (VoidToRIPEMD320Digest = dart.constFn(dart.fnType(ripemd320.RIPEMD320Digest, [])))();
  let VoidToRIPEMD256Digest = () => (VoidToRIPEMD256Digest = dart.constFn(dart.fnType(ripemd256.RIPEMD256Digest, [])))();
  let VoidToRIPEMD160Digest = () => (VoidToRIPEMD160Digest = dart.constFn(dart.fnType(ripemd160.RIPEMD160Digest, [])))();
  let VoidToRIPEMD128Digest = () => (VoidToRIPEMD128Digest = dart.constFn(dart.fnType(ripemd128.RIPEMD128Digest, [])))();
  let VoidToMD5Digest = () => (VoidToMD5Digest = dart.constFn(dart.fnType(md5.MD5Digest, [])))();
  let VoidToMD4Digest = () => (VoidToMD4Digest = dart.constFn(dart.fnType(md4.MD4Digest, [])))();
  let VoidToMD2Digest = () => (VoidToMD2Digest = dart.constFn(dart.fnType(md2.MD2Digest, [])))();
  let VoidToBlake2bDigest = () => (VoidToBlake2bDigest = dart.constFn(dart.fnType(blake2b.Blake2bDigest, [])))();
  let VoidToSICBlockCipher = () => (VoidToSICBlockCipher = dart.constFn(dart.fnType(sic$.SICBlockCipher, [])))();
  let StringAndMatchToFn$13 = () => (StringAndMatchToFn$13 = dart.constFn(dart.fnType(VoidToSICBlockCipher(), [core.String, core.Match])))();
  let VoidToOFBBlockCipher = () => (VoidToOFBBlockCipher = dart.constFn(dart.fnType(ofb.OFBBlockCipher, [])))();
  let StringAndMatchToFn$14 = () => (StringAndMatchToFn$14 = dart.constFn(dart.fnType(VoidToOFBBlockCipher(), [core.String, core.Match])))();
  let VoidToGCTRBlockCipher = () => (VoidToGCTRBlockCipher = dart.constFn(dart.fnType(gctr.GCTRBlockCipher, [])))();
  let StringAndMatchToFn$15 = () => (StringAndMatchToFn$15 = dart.constFn(dart.fnType(VoidToGCTRBlockCipher(), [core.String, core.Match])))();
  let VoidToECBBlockCipher = () => (VoidToECBBlockCipher = dart.constFn(dart.fnType(ecb.ECBBlockCipher, [])))();
  let StringAndMatchToFn$16 = () => (StringAndMatchToFn$16 = dart.constFn(dart.fnType(VoidToECBBlockCipher(), [core.String, core.Match])))();
  let VoidToCTRBlockCipher = () => (VoidToCTRBlockCipher = dart.constFn(dart.fnType(ctr$.CTRBlockCipher, [])))();
  let StringAndMatchToFn$17 = () => (StringAndMatchToFn$17 = dart.constFn(dart.fnType(VoidToCTRBlockCipher(), [core.String, core.Match])))();
  let VoidToCFBBlockCipher = () => (VoidToCFBBlockCipher = dart.constFn(dart.fnType(cfb.CFBBlockCipher, [])))();
  let StringAndMatchToFn$18 = () => (StringAndMatchToFn$18 = dart.constFn(dart.fnType(VoidToCFBBlockCipher(), [core.String, core.Match])))();
  let VoidToOAEPEncoding = () => (VoidToOAEPEncoding = dart.constFn(dart.fnType(oaep.OAEPEncoding, [])))();
  let StringAndMatchToFn$19 = () => (StringAndMatchToFn$19 = dart.constFn(dart.fnType(VoidToOAEPEncoding(), [core.String, core.Match])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: typed_data.Endian.prototype,
        [Endian__littleEndian]: true
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: typed_data.Endian.prototype,
        [Endian__littleEndian]: false
      });
    },
    get C2() {
      return C2 = dart.fn(secp521r1.ECCurve_secp521r1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp521r1());
    },
    get C3() {
      return C3 = dart.fn(ecc_fp._WNafMultiplier, ECPointBaseAndBigIntAndPreCompInfoToECPointBase());
    },
    get C4() {
      return C4 = dart.fn(ecc_base._FpNafMultiplier, ECPointBaseAndBigIntAndPreCompInfoToECPointBase());
    },
    get C5() {
      return C5 = dart.fn(secp384r1.ECCurve_secp384r1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp384r1());
    },
    get C6() {
      return C6 = dart.fn(secp256r1.ECCurve_secp256r1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp256r1());
    },
    get C7() {
      return C7 = dart.fn(secp256k1.ECCurve_secp256k1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp256k1());
    },
    get C8() {
      return C8 = dart.fn(secp224r1.ECCurve_secp224r1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp224r1());
    },
    get C9() {
      return C9 = dart.fn(secp224k1.ECCurve_secp224k1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp224k1());
    },
    get C10() {
      return C10 = dart.fn(secp192r1.ECCurve_secp192r1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp192r1());
    },
    get C11() {
      return C11 = dart.fn(secp192k1.ECCurve_secp192k1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp192k1());
    },
    get C12() {
      return C12 = dart.fn(secp160r2.ECCurve_secp160r2._make, dynamicAnddynamicAnddynamic__ToECCurve_secp160r2());
    },
    get C13() {
      return C13 = dart.fn(secp160r1.ECCurve_secp160r1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp160r1());
    },
    get C14() {
      return C14 = dart.fn(secp160k1.ECCurve_secp160k1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp160k1());
    },
    get C15() {
      return C15 = dart.fn(secp128r2.ECCurve_secp128r2._make, dynamicAnddynamicAnddynamic__ToECCurve_secp128r2());
    },
    get C16() {
      return C16 = dart.fn(secp128r1.ECCurve_secp128r1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp128r1());
    },
    get C17() {
      return C17 = dart.fn(secp112r2.ECCurve_secp112r2._make, dynamicAnddynamicAnddynamic__ToECCurve_secp112r2());
    },
    get C18() {
      return C18 = dart.fn(secp112r1.ECCurve_secp112r1._make, dynamicAnddynamicAnddynamic__ToECCurve_secp112r1());
    },
    get C19() {
      return C19 = dart.fn(prime256v1.ECCurve_prime256v1._make, dynamicAnddynamicAnddynamic__ToECCurve_prime256v1());
    },
    get C20() {
      return C20 = dart.fn(prime239v3.ECCurve_prime239v3._make, dynamicAnddynamicAnddynamic__ToECCurve_prime239v3());
    },
    get C21() {
      return C21 = dart.fn(prime239v2.ECCurve_prime239v2._make, dynamicAnddynamicAnddynamic__ToECCurve_prime239v2());
    },
    get C22() {
      return C22 = dart.fn(prime239v1.ECCurve_prime239v1._make, dynamicAnddynamicAnddynamic__ToECCurve_prime239v1());
    },
    get C23() {
      return C23 = dart.fn(prime192v3.ECCurve_prime192v3._make, dynamicAnddynamicAnddynamic__ToECCurve_prime192v3());
    },
    get C24() {
      return C24 = dart.fn(prime192v2.ECCurve_prime192v2._make, dynamicAnddynamicAnddynamic__ToECCurve_prime192v2());
    },
    get C25() {
      return C25 = dart.fn(prime192v1.ECCurve_prime192v1._make, dynamicAnddynamicAnddynamic__ToECCurve_prime192v1());
    },
    get C26() {
      return C26 = dart.fn(gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb._make, dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_xchb());
    },
    get C27() {
      return C27 = dart.fn(gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha._make, dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_xcha());
    },
    get C28() {
      return C28 = dart.fn(gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c._make, dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_c());
    },
    get C29() {
      return C29 = dart.fn(gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b._make, dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_b());
    },
    get C30() {
      return C30 = dart.fn(gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a._make, dynamicAnddynamicAnddynamic__ToECCurve_gostr3410_2001_cryptopro_a());
    },
    get C31() {
      return C31 = dart.fn(brainpoolp512t1.ECCurve_brainpoolp512t1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp512t1());
    },
    get C32() {
      return C32 = dart.fn(brainpoolp512r1.ECCurve_brainpoolp512r1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp512r1());
    },
    get C33() {
      return C33 = dart.fn(brainpoolp384t1.ECCurve_brainpoolp384t1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp384t1());
    },
    get C34() {
      return C34 = dart.fn(brainpoolp384r1.ECCurve_brainpoolp384r1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp384r1());
    },
    get C35() {
      return C35 = dart.fn(brainpoolp320t1.ECCurve_brainpoolp320t1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp320t1());
    },
    get C36() {
      return C36 = dart.fn(brainpoolp320r1.ECCurve_brainpoolp320r1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp320r1());
    },
    get C37() {
      return C37 = dart.fn(brainpoolp256t1.ECCurve_brainpoolp256t1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp256t1());
    },
    get C38() {
      return C38 = dart.fn(brainpoolp256r1.ECCurve_brainpoolp256r1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp256r1());
    },
    get C39() {
      return C39 = dart.fn(brainpoolp224t1.ECCurve_brainpoolp224t1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp224t1());
    },
    get C40() {
      return C40 = dart.fn(brainpoolp224r1.ECCurve_brainpoolp224r1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp224r1());
    },
    get C41() {
      return C41 = dart.fn(brainpoolp192t1.ECCurve_brainpoolp192t1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp192t1());
    },
    get C42() {
      return C42 = dart.fn(brainpoolp192r1.ECCurve_brainpoolp192r1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp192r1());
    },
    get C43() {
      return C43 = dart.fn(brainpoolp160t1.ECCurve_brainpoolp160t1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp160t1());
    },
    get C44() {
      return C44 = dart.fn(brainpoolp160r1.ECCurve_brainpoolp160r1._make, dynamicAnddynamicAnddynamic__ToECCurve_brainpoolp160r1());
    }
  });
  const _wordBuffer = dart.privateName(long_sha2_family_digest, "_wordBuffer");
  const _wordBufferOffset = dart.privateName(long_sha2_family_digest, "_wordBufferOffset");
  const _W = dart.privateName(long_sha2_family_digest, "_W");
  const _wOff = dart.privateName(long_sha2_family_digest, "_wOff");
  const _byteCount1 = dart.privateName(long_sha2_family_digest, "_byteCount1");
  const _byteCount2 = dart.privateName(long_sha2_family_digest, "_byteCount2");
  const _processWord = dart.privateName(long_sha2_family_digest, "_processWord");
  const _adjustByteCounts = dart.privateName(long_sha2_family_digest, "_adjustByteCounts");
  const _processLength = dart.privateName(long_sha2_family_digest, "_processLength");
  const _processBlock = dart.privateName(long_sha2_family_digest, "_processBlock");
  const _Sigma1 = dart.privateName(long_sha2_family_digest, "_Sigma1");
  const _Sigma0 = dart.privateName(long_sha2_family_digest, "_Sigma0");
  const _Sum1 = dart.privateName(long_sha2_family_digest, "_Sum1");
  const _Ch = dart.privateName(long_sha2_family_digest, "_Ch");
  const _Sum0 = dart.privateName(long_sha2_family_digest, "_Sum0");
  const _Maj = dart.privateName(long_sha2_family_digest, "_Maj");
  base_digest.BaseDigest = class BaseDigest extends core.Object {
    process(data) {
      this.update(data, 0, data[$length]);
      let out = _native_typed_data.NativeUint8List.new(this.digestSize);
      let len = this.doFinal(out, 0);
      return out[$sublist](0, len);
    }
  };
  (base_digest.BaseDigest.new = function() {
    ;
  }).prototype = base_digest.BaseDigest.prototype;
  dart.addTypeTests(base_digest.BaseDigest);
  base_digest.BaseDigest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(base_digest.BaseDigest, () => ({
    __proto__: dart.getMethods(base_digest.BaseDigest.__proto__),
    process: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List])
  }));
  dart.setLibraryUri(base_digest.BaseDigest, "package:pointycastle/src/impl/base_digest.dart");
  const H1 = dart.privateName(long_sha2_family_digest, "LongSHA2FamilyDigest.H1");
  const H2 = dart.privateName(long_sha2_family_digest, "LongSHA2FamilyDigest.H2");
  const H3 = dart.privateName(long_sha2_family_digest, "LongSHA2FamilyDigest.H3");
  const H4 = dart.privateName(long_sha2_family_digest, "LongSHA2FamilyDigest.H4");
  const H5 = dart.privateName(long_sha2_family_digest, "LongSHA2FamilyDigest.H5");
  const H6 = dart.privateName(long_sha2_family_digest, "LongSHA2FamilyDigest.H6");
  const H7 = dart.privateName(long_sha2_family_digest, "LongSHA2FamilyDigest.H7");
  const H8 = dart.privateName(long_sha2_family_digest, "LongSHA2FamilyDigest.H8");
  long_sha2_family_digest.LongSHA2FamilyDigest = class LongSHA2FamilyDigest extends base_digest.BaseDigest {
    get H1() {
      return this[H1];
    }
    set H1(value) {
      super.H1 = value;
    }
    get H2() {
      return this[H2];
    }
    set H2(value) {
      super.H2 = value;
    }
    get H3() {
      return this[H3];
    }
    set H3(value) {
      super.H3 = value;
    }
    get H4() {
      return this[H4];
    }
    set H4(value) {
      super.H4 = value;
    }
    get H5() {
      return this[H5];
    }
    set H5(value) {
      super.H5 = value;
    }
    get H6() {
      return this[H6];
    }
    set H6(value) {
      super.H6 = value;
    }
    get H7() {
      return this[H7];
    }
    set H7(value) {
      super.H7 = value;
    }
    get H8() {
      return this[H8];
    }
    set H8(value) {
      super.H8 = value;
    }
    get byteLength() {
      return 128;
    }
    reset() {
      this[_byteCount1].set(0);
      this[_byteCount2].set(0);
      this[_wordBufferOffset] = 0;
      this[_wordBuffer][$fillRange](0, this[_wordBuffer][$length], 0);
      this[_wOff] = 0;
      this[_W].fillRange(0, this[_W].length, 0);
    }
    updateByte(inp) {
      let t0;
      this[_wordBuffer][$_set]((t0 = this[_wordBufferOffset], this[_wordBufferOffset] = dart.notNull(t0) + 1, t0), inp);
      if (this[_wordBufferOffset] == this[_wordBuffer][$length]) {
        this[_processWord](this[_wordBuffer], 0);
        this[_wordBufferOffset] = 0;
      }
      this[_byteCount1].sum(1);
    }
    update(inp, inpOff, len) {
      while (this[_wordBufferOffset] !== 0 && dart.notNull(len) > 0) {
        this.updateByte(inp[$_get](inpOff));
        inpOff = dart.notNull(inpOff) + 1;
        len = dart.notNull(len) - 1;
      }
      while (dart.notNull(len) > dart.notNull(this[_wordBuffer][$length])) {
        this[_processWord](inp, inpOff);
        inpOff = dart.notNull(inpOff) + dart.notNull(this[_wordBuffer][$length]);
        len = dart.notNull(len) - dart.notNull(this[_wordBuffer][$length]);
        this[_byteCount1].sum(this[_wordBuffer][$length]);
      }
      while (dart.notNull(len) > 0) {
        this.updateByte(inp[$_get](inpOff));
        inpOff = dart.notNull(inpOff) + 1;
        len = dart.notNull(len) - 1;
      }
    }
    finish() {
      let t0;
      this[_adjustByteCounts]();
      let lowBitLength = (t0 = new ufixnum.Register64.new(this[_byteCount1]), t0.shiftl(3), t0);
      let hiBitLength = this[_byteCount2];
      this.updateByte(128);
      while (this[_wordBufferOffset] !== 0) {
        this.updateByte(0);
      }
      this[_processLength](lowBitLength, hiBitLength);
      this[_processBlock]();
    }
    [_processWord](inp, inpOff) {
      let t0;
      this[_W]._get((t0 = this[_wOff], this[_wOff] = dart.notNull(t0) + 1, t0)).unpack(inp, inpOff, typed_data.Endian.big);
      if (this[_wOff] === 16) {
        this[_processBlock]();
      }
    }
    [_adjustByteCounts]() {
      let t0;
      if (dart.test(this[_byteCount1]['>'](long_sha2_family_digest.LongSHA2FamilyDigest._MAX_BYTE_COUNT1))) {
        this[_byteCount2].sum((t0 = new ufixnum.Register64.new(this[_byteCount1]), t0.shiftr(61), t0));
        this[_byteCount1].and(long_sha2_family_digest.LongSHA2FamilyDigest._MAX_BYTE_COUNT1);
      }
    }
    [_processLength](lowW, hiW) {
      if (dart.notNull(this[_wOff]) > 14) {
        this[_processBlock]();
      }
      this[_W]._get(14).set(hiW);
      this[_W]._get(15).set(lowW);
    }
    [_processBlock]() {
      let t0, t1, t0$, t0$0, t1$, t0$1, t0$2, t1$0, t0$3, t0$4, t1$1, t0$5, t0$6, t1$2, t0$7, t0$8, t1$3, t0$9, t0$10, t1$4, t0$11, t0$12, t1$5, t0$13, t0$14;
      this[_adjustByteCounts]();
      for (let t = 16; t < 80; t = t + 1) {
        this[_W]._get(t).set((t0 = this[_Sigma1](this[_W]._get(t - 2)), t0.sum(this[_W]._get(t - 7)), t0.sum(this[_Sigma0](this[_W]._get(t - 15))), t0.sum(this[_W]._get(t - 16)), t0));
      }
      let a = new ufixnum.Register64.new(this.H1);
      let b = new ufixnum.Register64.new(this.H2);
      let c = new ufixnum.Register64.new(this.H3);
      let d = new ufixnum.Register64.new(this.H4);
      let e = new ufixnum.Register64.new(this.H5);
      let f = new ufixnum.Register64.new(this.H6);
      let g = new ufixnum.Register64.new(this.H7);
      let h = new ufixnum.Register64.new(this.H8);
      let t = 0;
      for (let i = 0; i < 10; i = i + 1) {
        t0$ = h;
        t0$.sum(this[_Sum1](e));
        t0$.sum(this[_Ch](e, f, g));
        t0$.sum(long_sha2_family_digest.LongSHA2FamilyDigest._K[$_get](t));
        t0$.sum(this[_W]._get((t1 = t, t = t1 + 1, t1)));
        t0$;
        d.sum(h);
        t0$0 = h;
        t0$0.sum(this[_Sum0](a));
        t0$0.sum(this[_Maj](a, b, c));
        t0$0;
        t0$1 = g;
        t0$1.sum(this[_Sum1](d));
        t0$1.sum(this[_Ch](d, e, f));
        t0$1.sum(long_sha2_family_digest.LongSHA2FamilyDigest._K[$_get](t));
        t0$1.sum(this[_W]._get((t1$ = t, t = t1$ + 1, t1$)));
        t0$1;
        c.sum(g);
        t0$2 = g;
        t0$2.sum(this[_Sum0](h));
        t0$2.sum(this[_Maj](h, a, b));
        t0$2;
        t0$3 = f;
        t0$3.sum(this[_Sum1](c));
        t0$3.sum(this[_Ch](c, d, e));
        t0$3.sum(long_sha2_family_digest.LongSHA2FamilyDigest._K[$_get](t));
        t0$3.sum(this[_W]._get((t1$0 = t, t = t1$0 + 1, t1$0)));
        t0$3;
        b.sum(f);
        t0$4 = f;
        t0$4.sum(this[_Sum0](g));
        t0$4.sum(this[_Maj](g, h, a));
        t0$4;
        t0$5 = e;
        t0$5.sum(this[_Sum1](b));
        t0$5.sum(this[_Ch](b, c, d));
        t0$5.sum(long_sha2_family_digest.LongSHA2FamilyDigest._K[$_get](t));
        t0$5.sum(this[_W]._get((t1$1 = t, t = t1$1 + 1, t1$1)));
        t0$5;
        a.sum(e);
        t0$6 = e;
        t0$6.sum(this[_Sum0](f));
        t0$6.sum(this[_Maj](f, g, h));
        t0$6;
        t0$7 = d;
        t0$7.sum(this[_Sum1](a));
        t0$7.sum(this[_Ch](a, b, c));
        t0$7.sum(long_sha2_family_digest.LongSHA2FamilyDigest._K[$_get](t));
        t0$7.sum(this[_W]._get((t1$2 = t, t = t1$2 + 1, t1$2)));
        t0$7;
        h.sum(d);
        t0$8 = d;
        t0$8.sum(this[_Sum0](e));
        t0$8.sum(this[_Maj](e, f, g));
        t0$8;
        t0$9 = c;
        t0$9.sum(this[_Sum1](h));
        t0$9.sum(this[_Ch](h, a, b));
        t0$9.sum(long_sha2_family_digest.LongSHA2FamilyDigest._K[$_get](t));
        t0$9.sum(this[_W]._get((t1$3 = t, t = t1$3 + 1, t1$3)));
        t0$9;
        g.sum(c);
        t0$10 = c;
        t0$10.sum(this[_Sum0](d));
        t0$10.sum(this[_Maj](d, e, f));
        t0$10;
        t0$11 = b;
        t0$11.sum(this[_Sum1](g));
        t0$11.sum(this[_Ch](g, h, a));
        t0$11.sum(long_sha2_family_digest.LongSHA2FamilyDigest._K[$_get](t));
        t0$11.sum(this[_W]._get((t1$4 = t, t = t1$4 + 1, t1$4)));
        t0$11;
        f.sum(b);
        t0$12 = b;
        t0$12.sum(this[_Sum0](c));
        t0$12.sum(this[_Maj](c, d, e));
        t0$12;
        t0$13 = a;
        t0$13.sum(this[_Sum1](f));
        t0$13.sum(this[_Ch](f, g, h));
        t0$13.sum(long_sha2_family_digest.LongSHA2FamilyDigest._K[$_get](t));
        t0$13.sum(this[_W]._get((t1$5 = t, t = t1$5 + 1, t1$5)));
        t0$13;
        e.sum(a);
        t0$14 = a;
        t0$14.sum(this[_Sum0](b));
        t0$14.sum(this[_Maj](b, c, d));
        t0$14;
      }
      this.H1.sum(a);
      this.H2.sum(b);
      this.H3.sum(c);
      this.H4.sum(d);
      this.H5.sum(e);
      this.H6.sum(f);
      this.H7.sum(g);
      this.H8.sum(h);
      this[_wOff] = 0;
      this[_W].fillRange(0, 16, 0);
    }
    [_Ch](x, y, z) {
      let r0 = new ufixnum.Register64.new(x);
      r0.and(y);
      let r1 = new ufixnum.Register64.new(x);
      r1.not();
      r1.and(z);
      r0.xor(r1);
      return r0;
    }
    [_Maj](x, y, z) {
      let r0 = new ufixnum.Register64.new(x);
      r0.and(y);
      let r1 = new ufixnum.Register64.new(x);
      r1.and(z);
      let r2 = new ufixnum.Register64.new(y);
      r2.and(z);
      r0.xor(r1);
      r0.xor(r2);
      return r0;
    }
    [_Sum0](x) {
      let r0 = new ufixnum.Register64.new(x);
      r0.rotl(36);
      let r1 = new ufixnum.Register64.new(x);
      r1.rotl(30);
      let r2 = new ufixnum.Register64.new(x);
      r2.rotl(25);
      r0.xor(r1);
      r0.xor(r2);
      return r0;
    }
    [_Sum1](x) {
      let r0 = new ufixnum.Register64.new(x);
      r0.rotl(50);
      let r1 = new ufixnum.Register64.new(x);
      r1.rotl(46);
      let r2 = new ufixnum.Register64.new(x);
      r2.rotl(23);
      r0.xor(r1);
      r0.xor(r2);
      return r0;
    }
    [_Sigma0](x) {
      let r0 = new ufixnum.Register64.new(x);
      r0.rotl(63);
      let r1 = new ufixnum.Register64.new(x);
      r1.rotl(56);
      let r2 = new ufixnum.Register64.new(x);
      r2.shiftr(7);
      r0.xor(r1);
      r0.xor(r2);
      return r0;
    }
    [_Sigma1](x) {
      let r0 = new ufixnum.Register64.new(x);
      r0.rotl(45);
      let r1 = new ufixnum.Register64.new(x);
      r1.rotl(3);
      let r2 = new ufixnum.Register64.new(x);
      r2.shiftr(6);
      r0.xor(r1);
      r0.xor(r2);
      return r0;
    }
  };
  (long_sha2_family_digest.LongSHA2FamilyDigest.new = function() {
    this[H1] = new ufixnum.Register64.new();
    this[H2] = new ufixnum.Register64.new();
    this[H3] = new ufixnum.Register64.new();
    this[H4] = new ufixnum.Register64.new();
    this[H5] = new ufixnum.Register64.new();
    this[H6] = new ufixnum.Register64.new();
    this[H7] = new ufixnum.Register64.new();
    this[H8] = new ufixnum.Register64.new();
    this[_wordBuffer] = _native_typed_data.NativeUint8List.new(8);
    this[_wordBufferOffset] = 0;
    this[_W] = new ufixnum.Register64List.new(80);
    this[_wOff] = 0;
    this[_byteCount1] = new ufixnum.Register64.new();
    this[_byteCount2] = new ufixnum.Register64.new();
    this.reset();
  }).prototype = long_sha2_family_digest.LongSHA2FamilyDigest.prototype;
  dart.addTypeTests(long_sha2_family_digest.LongSHA2FamilyDigest);
  dart.setMethodSignature(long_sha2_family_digest.LongSHA2FamilyDigest, () => ({
    __proto__: dart.getMethods(long_sha2_family_digest.LongSHA2FamilyDigest.__proto__),
    reset: dart.fnType(dart.void, []),
    updateByte: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    finish: dart.fnType(dart.void, []),
    [_processWord]: dart.fnType(dart.void, [typed_data.Uint8List, core.int]),
    [_adjustByteCounts]: dart.fnType(dart.void, []),
    [_processLength]: dart.fnType(dart.void, [ufixnum.Register64, ufixnum.Register64]),
    [_processBlock]: dart.fnType(dart.void, []),
    [_Ch]: dart.fnType(ufixnum.Register64, [ufixnum.Register64, ufixnum.Register64, ufixnum.Register64]),
    [_Maj]: dart.fnType(ufixnum.Register64, [ufixnum.Register64, ufixnum.Register64, ufixnum.Register64]),
    [_Sum0]: dart.fnType(ufixnum.Register64, [ufixnum.Register64]),
    [_Sum1]: dart.fnType(ufixnum.Register64, [ufixnum.Register64]),
    [_Sigma0]: dart.fnType(ufixnum.Register64, [ufixnum.Register64]),
    [_Sigma1]: dart.fnType(ufixnum.Register64, [ufixnum.Register64])
  }));
  dart.setGetterSignature(long_sha2_family_digest.LongSHA2FamilyDigest, () => ({
    __proto__: dart.getGetters(long_sha2_family_digest.LongSHA2FamilyDigest.__proto__),
    byteLength: core.int
  }));
  dart.setLibraryUri(long_sha2_family_digest.LongSHA2FamilyDigest, "package:pointycastle/src/impl/long_sha2_family_digest.dart");
  dart.setFieldSignature(long_sha2_family_digest.LongSHA2FamilyDigest, () => ({
    __proto__: dart.getFields(long_sha2_family_digest.LongSHA2FamilyDigest.__proto__),
    H1: dart.finalFieldType(ufixnum.Register64),
    H2: dart.finalFieldType(ufixnum.Register64),
    H3: dart.finalFieldType(ufixnum.Register64),
    H4: dart.finalFieldType(ufixnum.Register64),
    H5: dart.finalFieldType(ufixnum.Register64),
    H6: dart.finalFieldType(ufixnum.Register64),
    H7: dart.finalFieldType(ufixnum.Register64),
    H8: dart.finalFieldType(ufixnum.Register64),
    [_wordBuffer]: dart.finalFieldType(typed_data.Uint8List),
    [_wordBufferOffset]: dart.fieldType(core.int),
    [_W]: dart.finalFieldType(ufixnum.Register64List),
    [_wOff]: dart.fieldType(core.int),
    [_byteCount1]: dart.finalFieldType(ufixnum.Register64),
    [_byteCount2]: dart.finalFieldType(ufixnum.Register64)
  }));
  dart.defineLazy(long_sha2_family_digest.LongSHA2FamilyDigest, {
    /*long_sha2_family_digest.LongSHA2FamilyDigest._BYTE_LENGTH*/get _BYTE_LENGTH() {
      return 128;
    },
    /*long_sha2_family_digest.LongSHA2FamilyDigest._MAX_BYTE_COUNT1*/get _MAX_BYTE_COUNT1() {
      return new ufixnum.Register64.new(536870911, 4294967295);
    },
    /*long_sha2_family_digest.LongSHA2FamilyDigest._K*/get _K() {
      return JSArrayOfRegister64().of([new ufixnum.Register64.new(1116352408, 3609767458), new ufixnum.Register64.new(1899447441, 602891725), new ufixnum.Register64.new(3049323471, 3964484399), new ufixnum.Register64.new(3921009573, 2173295548), new ufixnum.Register64.new(961987163, 4081628472), new ufixnum.Register64.new(1508970993, 3053834265), new ufixnum.Register64.new(2453635748, 2937671579), new ufixnum.Register64.new(2870763221, 3664609560), new ufixnum.Register64.new(3624381080, 2734883394), new ufixnum.Register64.new(310598401, 1164996542), new ufixnum.Register64.new(607225278, 1323610764), new ufixnum.Register64.new(1426881987, 3590304994), new ufixnum.Register64.new(1925078388, 4068182383), new ufixnum.Register64.new(2162078206, 991336113), new ufixnum.Register64.new(2614888103, 633803317), new ufixnum.Register64.new(3248222580, 3479774868), new ufixnum.Register64.new(3835390401, 2666613458), new ufixnum.Register64.new(4022224774, 944711139), new ufixnum.Register64.new(264347078, 2341262773), new ufixnum.Register64.new(604807628, 2007800933), new ufixnum.Register64.new(770255983, 1495990901), new ufixnum.Register64.new(1249150122, 1856431235), new ufixnum.Register64.new(1555081692, 3175218132), new ufixnum.Register64.new(1996064986, 2198950837), new ufixnum.Register64.new(2554220882, 3999719339), new ufixnum.Register64.new(2821834349, 766784016), new ufixnum.Register64.new(2952996808, 2566594879), new ufixnum.Register64.new(3210313671, 3203337956), new ufixnum.Register64.new(3336571891, 1034457026), new ufixnum.Register64.new(3584528711, 2466948901), new ufixnum.Register64.new(113926993, 3758326383), new ufixnum.Register64.new(338241895, 168717936), new ufixnum.Register64.new(666307205, 1188179964), new ufixnum.Register64.new(773529912, 1546045734), new ufixnum.Register64.new(1294757372, 1522805485), new ufixnum.Register64.new(1396182291, 2643833823), new ufixnum.Register64.new(1695183700, 2343527390), new ufixnum.Register64.new(1986661051, 1014477480), new ufixnum.Register64.new(2177026350, 1206759142), new ufixnum.Register64.new(2456956037, 344077627), new ufixnum.Register64.new(2730485921, 1290863460), new ufixnum.Register64.new(2820302411, 3158454273), new ufixnum.Register64.new(3259730800, 3505952657), new ufixnum.Register64.new(3345764771, 106217008), new ufixnum.Register64.new(3516065817, 3606008344), new ufixnum.Register64.new(3600352804, 1432725776), new ufixnum.Register64.new(4094571909, 1467031594), new ufixnum.Register64.new(275423344, 851169720), new ufixnum.Register64.new(430227734, 3100823752), new ufixnum.Register64.new(506948616, 1363258195), new ufixnum.Register64.new(659060556, 3750685593), new ufixnum.Register64.new(883997877, 3785050280), new ufixnum.Register64.new(958139571, 3318307427), new ufixnum.Register64.new(1322822218, 3812723403), new ufixnum.Register64.new(1537002063, 2003034995), new ufixnum.Register64.new(1747873779, 3602036899), new ufixnum.Register64.new(1955562222, 1575990012), new ufixnum.Register64.new(2024104815, 1125592928), new ufixnum.Register64.new(2227730452, 2716904306), new ufixnum.Register64.new(2361852424, 442776044), new ufixnum.Register64.new(2428436474, 593698344), new ufixnum.Register64.new(2756734187, 3733110249), new ufixnum.Register64.new(3204031479, 2999351573), new ufixnum.Register64.new(3329325298, 3815920427), new ufixnum.Register64.new(3391569614, 3928383900), new ufixnum.Register64.new(3515267271, 566280711), new ufixnum.Register64.new(3940187606, 3454069534), new ufixnum.Register64.new(4118630271, 4000239992), new ufixnum.Register64.new(116418474, 1914138554), new ufixnum.Register64.new(174292421, 2731055270), new ufixnum.Register64.new(289380356, 3203993006), new ufixnum.Register64.new(460393269, 320620315), new ufixnum.Register64.new(685471733, 587496836), new ufixnum.Register64.new(852142971, 1086792851), new ufixnum.Register64.new(1017036298, 365543100), new ufixnum.Register64.new(1126000580, 2618297676), new ufixnum.Register64.new(1288033470, 3409855158), new ufixnum.Register64.new(1501505948, 4234509866), new ufixnum.Register64.new(1607167915, 987167468), new ufixnum.Register64.new(1816402316, 1246189591)]);
    }
  });
  api.Algorithm = class Algorithm extends core.Object {};
  (api.Algorithm.new = function() {
    ;
  }).prototype = api.Algorithm.prototype;
  dart.addTypeTests(api.Algorithm);
  dart.setLibraryUri(api.Algorithm, "package:pointycastle/api.dart");
  api.AsymmetricBlockCipher = class AsymmetricBlockCipher extends api.Algorithm {
    static new(algorithmName) {
      return registry.registry.create(api.AsymmetricBlockCipher, algorithmName);
    }
  };
  dart.addTypeTests(api.AsymmetricBlockCipher);
  dart.setLibraryUri(api.AsymmetricBlockCipher, "package:pointycastle/api.dart");
  api.AsymmetricKey = class AsymmetricKey extends core.Object {};
  (api.AsymmetricKey.new = function() {
    ;
  }).prototype = api.AsymmetricKey.prototype;
  dart.addTypeTests(api.AsymmetricKey);
  dart.setLibraryUri(api.AsymmetricKey, "package:pointycastle/api.dart");
  const _is_AsymmetricKeyPair_default = Symbol('_is_AsymmetricKeyPair_default');
  const publicKey$ = dart.privateName(api, "AsymmetricKeyPair.publicKey");
  const privateKey$ = dart.privateName(api, "AsymmetricKeyPair.privateKey");
  api.AsymmetricKeyPair$ = dart.generic((B, V) => {
    class AsymmetricKeyPair extends core.Object {
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
    }
    (AsymmetricKeyPair.new = function(publicKey, privateKey) {
      this[publicKey$] = publicKey;
      this[privateKey$] = privateKey;
      ;
    }).prototype = AsymmetricKeyPair.prototype;
    dart.addTypeTests(AsymmetricKeyPair);
    AsymmetricKeyPair.prototype[_is_AsymmetricKeyPair_default] = true;
    dart.setLibraryUri(AsymmetricKeyPair, "package:pointycastle/api.dart");
    dart.setFieldSignature(AsymmetricKeyPair, () => ({
      __proto__: dart.getFields(AsymmetricKeyPair.__proto__),
      publicKey: dart.finalFieldType(B),
      privateKey: dart.finalFieldType(V)
    }));
    return AsymmetricKeyPair;
  });
  api.AsymmetricKeyPair = api.AsymmetricKeyPair$();
  dart.addTypeTests(api.AsymmetricKeyPair, _is_AsymmetricKeyPair_default);
  const _is_AsymmetricKeyParameter_default = Symbol('_is_AsymmetricKeyParameter_default');
  const key$ = dart.privateName(api, "AsymmetricKeyParameter.key");
  api.AsymmetricKeyParameter$ = dart.generic(T => {
    class AsymmetricKeyParameter extends core.Object {
      get key() {
        return this[key$];
      }
      set key(value) {
        super.key = value;
      }
    }
    (AsymmetricKeyParameter.new = function(key) {
      this[key$] = key;
      ;
    }).prototype = AsymmetricKeyParameter.prototype;
    dart.addTypeTests(AsymmetricKeyParameter);
    AsymmetricKeyParameter.prototype[_is_AsymmetricKeyParameter_default] = true;
    AsymmetricKeyParameter[dart.implements] = () => [api.CipherParameters];
    dart.setLibraryUri(AsymmetricKeyParameter, "package:pointycastle/api.dart");
    dart.setFieldSignature(AsymmetricKeyParameter, () => ({
      __proto__: dart.getFields(AsymmetricKeyParameter.__proto__),
      key: dart.finalFieldType(T)
    }));
    return AsymmetricKeyParameter;
  });
  api.AsymmetricKeyParameter = api.AsymmetricKeyParameter$();
  dart.addTypeTests(api.AsymmetricKeyParameter, _is_AsymmetricKeyParameter_default);
  api.BlockCipher = class BlockCipher extends api.Algorithm {
    static new(algorithmName) {
      return registry.registry.create(api.BlockCipher, algorithmName);
    }
  };
  dart.addTypeTests(api.BlockCipher);
  dart.setLibraryUri(api.BlockCipher, "package:pointycastle/api.dart");
  api.CipherParameters = class CipherParameters extends core.Object {};
  (api.CipherParameters.new = function() {
    ;
  }).prototype = api.CipherParameters.prototype;
  dart.addTypeTests(api.CipherParameters);
  dart.setLibraryUri(api.CipherParameters, "package:pointycastle/api.dart");
  api.Digest = class Digest extends api.Algorithm {
    static new(algorithmName) {
      return registry.registry.create(api.Digest, algorithmName);
    }
  };
  dart.addTypeTests(api.Digest);
  dart.setLibraryUri(api.Digest, "package:pointycastle/api.dart");
  api.KeyDerivator = class KeyDerivator extends api.Algorithm {
    static new(algorithmName) {
      return registry.registry.create(api.KeyDerivator, algorithmName);
    }
  };
  dart.addTypeTests(api.KeyDerivator);
  dart.setLibraryUri(api.KeyDerivator, "package:pointycastle/api.dart");
  api.KeyGenerator = class KeyGenerator extends api.Algorithm {
    static new(algorithmName) {
      return registry.registry.create(api.KeyGenerator, algorithmName);
    }
  };
  dart.addTypeTests(api.KeyGenerator);
  dart.setLibraryUri(api.KeyGenerator, "package:pointycastle/api.dart");
  const bitStrength$ = dart.privateName(api, "KeyGeneratorParameters.bitStrength");
  api.KeyGeneratorParameters = class KeyGeneratorParameters extends core.Object {
    get bitStrength() {
      return this[bitStrength$];
    }
    set bitStrength(value) {
      super.bitStrength = value;
    }
  };
  (api.KeyGeneratorParameters.new = function(bitStrength) {
    this[bitStrength$] = bitStrength;
    ;
  }).prototype = api.KeyGeneratorParameters.prototype;
  dart.addTypeTests(api.KeyGeneratorParameters);
  api.KeyGeneratorParameters[dart.implements] = () => [api.CipherParameters];
  dart.setLibraryUri(api.KeyGeneratorParameters, "package:pointycastle/api.dart");
  dart.setFieldSignature(api.KeyGeneratorParameters, () => ({
    __proto__: dart.getFields(api.KeyGeneratorParameters.__proto__),
    bitStrength: dart.finalFieldType(core.int)
  }));
  const key$0 = dart.privateName(api, "KeyParameter.key");
  api.KeyParameter = class KeyParameter extends api.CipherParameters {
    get key() {
      return this[key$0];
    }
    set key(value) {
      super.key = value;
    }
  };
  (api.KeyParameter.new = function(key) {
    this[key$0] = key;
    ;
  }).prototype = api.KeyParameter.prototype;
  dart.addTypeTests(api.KeyParameter);
  dart.setLibraryUri(api.KeyParameter, "package:pointycastle/api.dart");
  dart.setFieldSignature(api.KeyParameter, () => ({
    __proto__: dart.getFields(api.KeyParameter.__proto__),
    key: dart.finalFieldType(typed_data.Uint8List)
  }));
  api.Mac = class Mac extends api.Algorithm {
    static new(algorithmName) {
      return registry.registry.create(api.Mac, algorithmName);
    }
  };
  dart.addTypeTests(api.Mac);
  dart.setLibraryUri(api.Mac, "package:pointycastle/api.dart");
  api.PaddedBlockCipher = class PaddedBlockCipher extends core.Object {
    static new(algorithmName) {
      return registry.registry.create(api.PaddedBlockCipher, algorithmName);
    }
  };
  (api.PaddedBlockCipher[dart.mixinNew] = function() {
  }).prototype = api.PaddedBlockCipher.prototype;
  dart.addTypeTests(api.PaddedBlockCipher);
  api.PaddedBlockCipher[dart.implements] = () => [api.BlockCipher];
  dart.setLibraryUri(api.PaddedBlockCipher, "package:pointycastle/api.dart");
  const _is_PaddedBlockCipherParameters_default = Symbol('_is_PaddedBlockCipherParameters_default');
  const underlyingCipherParameters$ = dart.privateName(api, "PaddedBlockCipherParameters.underlyingCipherParameters");
  const paddingCipherParameters$ = dart.privateName(api, "PaddedBlockCipherParameters.paddingCipherParameters");
  api.PaddedBlockCipherParameters$ = dart.generic((UnderlyingCipherParameters, PaddingCipherParameters) => {
    class PaddedBlockCipherParameters extends core.Object {
      get underlyingCipherParameters() {
        return this[underlyingCipherParameters$];
      }
      set underlyingCipherParameters(value) {
        super.underlyingCipherParameters = value;
      }
      get paddingCipherParameters() {
        return this[paddingCipherParameters$];
      }
      set paddingCipherParameters(value) {
        super.paddingCipherParameters = value;
      }
    }
    (PaddedBlockCipherParameters.new = function(underlyingCipherParameters, paddingCipherParameters) {
      this[underlyingCipherParameters$] = underlyingCipherParameters;
      this[paddingCipherParameters$] = paddingCipherParameters;
      ;
    }).prototype = PaddedBlockCipherParameters.prototype;
    dart.addTypeTests(PaddedBlockCipherParameters);
    PaddedBlockCipherParameters.prototype[_is_PaddedBlockCipherParameters_default] = true;
    PaddedBlockCipherParameters[dart.implements] = () => [api.CipherParameters];
    dart.setLibraryUri(PaddedBlockCipherParameters, "package:pointycastle/api.dart");
    dart.setFieldSignature(PaddedBlockCipherParameters, () => ({
      __proto__: dart.getFields(PaddedBlockCipherParameters.__proto__),
      underlyingCipherParameters: dart.finalFieldType(UnderlyingCipherParameters),
      paddingCipherParameters: dart.finalFieldType(PaddingCipherParameters)
    }));
    return PaddedBlockCipherParameters;
  });
  api.PaddedBlockCipherParameters = api.PaddedBlockCipherParameters$();
  dart.addTypeTests(api.PaddedBlockCipherParameters, _is_PaddedBlockCipherParameters_default);
  api.Padding = class Padding extends api.Algorithm {
    static new(algorithmName) {
      return registry.registry.create(api.Padding, algorithmName);
    }
  };
  dart.addTypeTests(api.Padding);
  dart.setLibraryUri(api.Padding, "package:pointycastle/api.dart");
  const _is_ParametersWithIV_default = Symbol('_is_ParametersWithIV_default');
  const iv$ = dart.privateName(api, "ParametersWithIV.iv");
  const parameters$ = dart.privateName(api, "ParametersWithIV.parameters");
  api.ParametersWithIV$ = dart.generic(UnderlyingParameters => {
    class ParametersWithIV extends core.Object {
      get iv() {
        return this[iv$];
      }
      set iv(value) {
        super.iv = value;
      }
      get parameters() {
        return this[parameters$];
      }
      set parameters(value) {
        super.parameters = value;
      }
    }
    (ParametersWithIV.new = function(parameters, iv) {
      this[parameters$] = parameters;
      this[iv$] = iv;
      ;
    }).prototype = ParametersWithIV.prototype;
    dart.addTypeTests(ParametersWithIV);
    ParametersWithIV.prototype[_is_ParametersWithIV_default] = true;
    ParametersWithIV[dart.implements] = () => [api.CipherParameters];
    dart.setLibraryUri(ParametersWithIV, "package:pointycastle/api.dart");
    dart.setFieldSignature(ParametersWithIV, () => ({
      __proto__: dart.getFields(ParametersWithIV.__proto__),
      iv: dart.finalFieldType(typed_data.Uint8List),
      parameters: dart.finalFieldType(UnderlyingParameters)
    }));
    return ParametersWithIV;
  });
  api.ParametersWithIV = api.ParametersWithIV$();
  dart.addTypeTests(api.ParametersWithIV, _is_ParametersWithIV_default);
  const _is_ParametersWithRandom_default = Symbol('_is_ParametersWithRandom_default');
  const parameters$0 = dart.privateName(api, "ParametersWithRandom.parameters");
  const random$ = dart.privateName(api, "ParametersWithRandom.random");
  api.ParametersWithRandom$ = dart.generic(UnderlyingParameters => {
    class ParametersWithRandom extends core.Object {
      get parameters() {
        return this[parameters$0];
      }
      set parameters(value) {
        super.parameters = value;
      }
      get random() {
        return this[random$];
      }
      set random(value) {
        super.random = value;
      }
    }
    (ParametersWithRandom.new = function(parameters, random) {
      this[parameters$0] = parameters;
      this[random$] = random;
      ;
    }).prototype = ParametersWithRandom.prototype;
    dart.addTypeTests(ParametersWithRandom);
    ParametersWithRandom.prototype[_is_ParametersWithRandom_default] = true;
    ParametersWithRandom[dart.implements] = () => [api.CipherParameters];
    dart.setLibraryUri(ParametersWithRandom, "package:pointycastle/api.dart");
    dart.setFieldSignature(ParametersWithRandom, () => ({
      __proto__: dart.getFields(ParametersWithRandom.__proto__),
      parameters: dart.finalFieldType(UnderlyingParameters),
      random: dart.finalFieldType(api.SecureRandom)
    }));
    return ParametersWithRandom;
  });
  api.ParametersWithRandom = api.ParametersWithRandom$();
  dart.addTypeTests(api.ParametersWithRandom, _is_ParametersWithRandom_default);
  api.PrivateKey = class PrivateKey extends core.Object {};
  (api.PrivateKey.new = function() {
    ;
  }).prototype = api.PrivateKey.prototype;
  dart.addTypeTests(api.PrivateKey);
  api.PrivateKey[dart.implements] = () => [api.AsymmetricKey];
  dart.setLibraryUri(api.PrivateKey, "package:pointycastle/api.dart");
  const _is_PrivateKeyParameter_default = Symbol('_is_PrivateKeyParameter_default');
  api.PrivateKeyParameter$ = dart.generic(T => {
    class PrivateKeyParameter extends api.AsymmetricKeyParameter$(T) {}
    (PrivateKeyParameter.new = function(key) {
      PrivateKeyParameter.__proto__.new.call(this, T._check(key));
      ;
    }).prototype = PrivateKeyParameter.prototype;
    dart.addTypeTests(PrivateKeyParameter);
    PrivateKeyParameter.prototype[_is_PrivateKeyParameter_default] = true;
    dart.setLibraryUri(PrivateKeyParameter, "package:pointycastle/api.dart");
    return PrivateKeyParameter;
  });
  api.PrivateKeyParameter = api.PrivateKeyParameter$();
  dart.addTypeTests(api.PrivateKeyParameter, _is_PrivateKeyParameter_default);
  api.PublicKey = class PublicKey extends core.Object {};
  (api.PublicKey.new = function() {
    ;
  }).prototype = api.PublicKey.prototype;
  dart.addTypeTests(api.PublicKey);
  api.PublicKey[dart.implements] = () => [api.AsymmetricKey];
  dart.setLibraryUri(api.PublicKey, "package:pointycastle/api.dart");
  const _is_PublicKeyParameter_default = Symbol('_is_PublicKeyParameter_default');
  api.PublicKeyParameter$ = dart.generic(T => {
    class PublicKeyParameter extends api.AsymmetricKeyParameter$(T) {}
    (PublicKeyParameter.new = function(key) {
      PublicKeyParameter.__proto__.new.call(this, T._check(key));
      ;
    }).prototype = PublicKeyParameter.prototype;
    dart.addTypeTests(PublicKeyParameter);
    PublicKeyParameter.prototype[_is_PublicKeyParameter_default] = true;
    dart.setLibraryUri(PublicKeyParameter, "package:pointycastle/api.dart");
    return PublicKeyParameter;
  });
  api.PublicKeyParameter = api.PublicKeyParameter$();
  dart.addTypeTests(api.PublicKeyParameter, _is_PublicKeyParameter_default);
  const message$ = dart.privateName(api, "RegistryFactoryException.message");
  api.RegistryFactoryException = class RegistryFactoryException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "RegistryFactoryException: " + dart.str(this.message);
    }
  };
  (api.RegistryFactoryException.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = api.RegistryFactoryException.prototype;
  (api.RegistryFactoryException.unknown = function(algorithm, type = null) {
    api.RegistryFactoryException.new.call(this, "No algorithm registered" + (type != null ? " of type " + dart.str(type) : "") + (" with name: " + dart.str(algorithm)));
  }).prototype = api.RegistryFactoryException.prototype;
  (api.RegistryFactoryException.invalid = function(algorithm, type = null) {
    api.RegistryFactoryException.new.call(this, "Algorithm name " + dart.str(algorithm) + " is invalid" + (type != null ? " of type " + dart.str(type) : ""));
  }).prototype = api.RegistryFactoryException.prototype;
  dart.addTypeTests(api.RegistryFactoryException);
  api.RegistryFactoryException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(api.RegistryFactoryException, "package:pointycastle/api.dart");
  dart.setFieldSignature(api.RegistryFactoryException, () => ({
    __proto__: dart.getFields(api.RegistryFactoryException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(api.RegistryFactoryException, ['toString']);
  api.SecureRandom = class SecureRandom extends api.Algorithm {
    static new(algorithmName = "") {
      return registry.registry.create(api.SecureRandom, algorithmName);
    }
  };
  dart.addTypeTests(api.SecureRandom);
  dart.setLibraryUri(api.SecureRandom, "package:pointycastle/api.dart");
  api.Signature = class Signature extends core.Object {};
  (api.Signature.new = function() {
    ;
  }).prototype = api.Signature.prototype;
  dart.addTypeTests(api.Signature);
  dart.setLibraryUri(api.Signature, "package:pointycastle/api.dart");
  api.Signer = class Signer extends api.Algorithm {
    static new(algorithmName) {
      return registry.registry.create(api.Signer, algorithmName);
    }
  };
  dart.addTypeTests(api.Signer);
  dart.setLibraryUri(api.Signer, "package:pointycastle/api.dart");
  api.StreamCipher = class StreamCipher extends api.Algorithm {
    static new(algorithmName) {
      return registry.registry.create(api.StreamCipher, algorithmName);
    }
  };
  dart.addTypeTests(api.StreamCipher);
  dart.setLibraryUri(api.StreamCipher, "package:pointycastle/api.dart");
  registry.FactoryRegistry = class FactoryRegistry extends core.Object {};
  (registry.FactoryRegistry.new = function() {
    ;
  }).prototype = registry.FactoryRegistry.prototype;
  dart.addTypeTests(registry.FactoryRegistry);
  dart.setLibraryUri(registry.FactoryRegistry, "package:pointycastle/src/registry/registry.dart");
  const type$ = dart.privateName(registry, "FactoryConfig.type");
  registry.FactoryConfig = class FactoryConfig extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
  };
  (registry.FactoryConfig.new = function(type) {
    this[type$] = type;
    ;
  }).prototype = registry.FactoryConfig.prototype;
  dart.addTypeTests(registry.FactoryConfig);
  dart.setLibraryUri(registry.FactoryConfig, "package:pointycastle/src/registry/registry.dart");
  dart.setFieldSignature(registry.FactoryConfig, () => ({
    __proto__: dart.getFields(registry.FactoryConfig.__proto__),
    type: dart.finalFieldType(core.Type)
  }));
  const algorithmName$ = dart.privateName(registry, "StaticFactoryConfig.algorithmName");
  const factory$ = dart.privateName(registry, "StaticFactoryConfig.factory");
  registry.StaticFactoryConfig = class StaticFactoryConfig extends registry.FactoryConfig {
    get algorithmName() {
      return this[algorithmName$];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get factory() {
      return this[factory$];
    }
    set factory(value) {
      super.factory = value;
    }
  };
  (registry.StaticFactoryConfig.new = function(type, algorithmName, factory) {
    this[algorithmName$] = algorithmName;
    this[factory$] = factory;
    registry.StaticFactoryConfig.__proto__.new.call(this, type);
    ;
  }).prototype = registry.StaticFactoryConfig.prototype;
  dart.addTypeTests(registry.StaticFactoryConfig);
  dart.setLibraryUri(registry.StaticFactoryConfig, "package:pointycastle/src/registry/registry.dart");
  dart.setFieldSignature(registry.StaticFactoryConfig, () => ({
    __proto__: dart.getFields(registry.StaticFactoryConfig.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    factory: dart.finalFieldType(dart.fnType(dart.dynamic, []))
  }));
  const regExp$ = dart.privateName(registry, "DynamicFactoryConfig.regExp");
  const factory$0 = dart.privateName(registry, "DynamicFactoryConfig.factory");
  registry.DynamicFactoryConfig = class DynamicFactoryConfig extends registry.FactoryConfig {
    get regExp() {
      return this[regExp$];
    }
    set regExp(value) {
      super.regExp = value;
    }
    get factory() {
      return this[factory$0];
    }
    set factory(value) {
      super.factory = value;
    }
    tryFactory(algorithmName) {
      let match = this.regExp.firstMatch(algorithmName);
      if (match == null) {
        return null;
      }
      return this.factory(algorithmName, match);
    }
  };
  (registry.DynamicFactoryConfig.new = function(type, regExp, factory) {
    this[regExp$] = regExp;
    this[factory$0] = factory;
    registry.DynamicFactoryConfig.__proto__.new.call(this, type);
    ;
  }).prototype = registry.DynamicFactoryConfig.prototype;
  (registry.DynamicFactoryConfig.regex = function(type, regexString, factory) {
    registry.DynamicFactoryConfig.new.call(this, type, core.RegExp.new(regexString), factory);
  }).prototype = registry.DynamicFactoryConfig.prototype;
  (registry.DynamicFactoryConfig.prefix = function(type, prefix, factory) {
    registry.DynamicFactoryConfig.regex.call(this, type, "^" + dart.str(registry._escapeRegExp(prefix)) + "(.+)$", factory);
  }).prototype = registry.DynamicFactoryConfig.prototype;
  (registry.DynamicFactoryConfig.suffix = function(type, suffix, factory) {
    registry.DynamicFactoryConfig.regex.call(this, type, "^(.+)" + dart.str(registry._escapeRegExp(suffix)) + "$", factory);
  }).prototype = registry.DynamicFactoryConfig.prototype;
  dart.addTypeTests(registry.DynamicFactoryConfig);
  dart.setMethodSignature(registry.DynamicFactoryConfig, () => ({
    __proto__: dart.getMethods(registry.DynamicFactoryConfig.__proto__),
    tryFactory: dart.fnType(dart.fnType(dart.dynamic, []), [core.String])
  }));
  dart.setLibraryUri(registry.DynamicFactoryConfig, "package:pointycastle/src/registry/registry.dart");
  dart.setFieldSignature(registry.DynamicFactoryConfig, () => ({
    __proto__: dart.getFields(registry.DynamicFactoryConfig.__proto__),
    regExp: dart.finalFieldType(core.RegExp),
    factory: dart.finalFieldType(dart.fnType(dart.fnType(dart.dynamic, []), [core.String, core.Match]))
  }));
  const _constructorCache = dart.privateName(registry, "_constructorCache");
  const _initialized = dart.privateName(registry, "_initialized");
  const _staticFactories = dart.privateName(registry, "_staticFactories");
  const _dynamicFactories = dart.privateName(registry, "_dynamicFactories");
  const _createConstructor = dart.privateName(registry, "_createConstructor");
  const _checkInit = dart.privateName(registry, "_checkInit");
  const _initialize = dart.privateName(registry, "_initialize");
  const _addStaticFactoryConfig = dart.privateName(registry, "_addStaticFactoryConfig");
  const _addDynamicFactoryConfig = dart.privateName(registry, "_addDynamicFactoryConfig");
  registry._RegistryImpl = class _RegistryImpl extends core.Object {
    create(T, registrableName) {
      let type = dart.wrapType(T);
      let constructor = this.getConstructor(type, registrableName);
      let result = T._check(constructor());
      return result;
    }
    getConstructor(type, registrableName) {
      let constructor = this[_constructorCache][$_get](dart.str(type) + "." + dart.str(registrableName));
      if (constructor == null) {
        constructor = this[_createConstructor](type, registrableName);
        if (dart.notNull(this[_constructorCache][$length]) > 25) {
          this[_constructorCache][$clear]();
        }
        this[_constructorCache][$_set](dart.str(type) + "." + dart.str(registrableName), constructor);
      }
      return constructor;
    }
    [_createConstructor](type, registrableName) {
      this[_checkInit]();
      if (dart.test(this[_staticFactories][$containsKey](type)) && dart.test(this[_staticFactories][$_get](type)[$containsKey](registrableName))) {
        return this[_staticFactories][$_get](type)[$_get](registrableName);
      }
      if (dart.test(this[_dynamicFactories][$containsKey](type))) {
        for (let factory of this[_dynamicFactories][$_get](type)) {
          let constructor = factory.tryFactory(registrableName);
          if (constructor != null) {
            return constructor;
          }
        }
      }
      dart.throw(new api.RegistryFactoryException.unknown(registrableName, type));
    }
    [_checkInit]() {
      if (!dart.test(this[_initialized])) {
        this[_initialize]();
      }
    }
    register(T, config) {
      let t = dart.wrapType(T);
      if (registry.StaticFactoryConfig.is(config)) {
        this[_addStaticFactoryConfig](config);
      } else if (registry.DynamicFactoryConfig.is(config)) {
        this[_addDynamicFactoryConfig](config);
      }
    }
    [_addStaticFactoryConfig](config) {
      let factories = this[_staticFactories][$putIfAbsent](config.type, dart.fn(() => new (LinkedMapOfString$VoidTodynamic()).new(), VoidToMapOfString$VoidTodynamic()));
      factories[$_set](config.algorithmName, config.factory);
    }
    [_addDynamicFactoryConfig](config) {
      let factories = this[_dynamicFactories][$putIfAbsent](config.type, dart.fn(() => new (_HashSetOfDynamicFactoryConfig()).new(), VoidToSetOfDynamicFactoryConfig()));
      factories.add(config);
    }
    [_initialize]() {
      registration.registerFactories(this);
      this[_initialized] = true;
    }
  };
  (registry._RegistryImpl.new = function() {
    this[_constructorCache] = new (LinkedMapOfString$VoidTodynamic()).new();
    this[_initialized] = false;
    this[_staticFactories] = new (LinkedMapOfType$MapOfString$VoidTodynamic()).new();
    this[_dynamicFactories] = new (LinkedMapOfType$SetOfDynamicFactoryConfig()).new();
    ;
  }).prototype = registry._RegistryImpl.prototype;
  dart.addTypeTests(registry._RegistryImpl);
  registry._RegistryImpl[dart.implements] = () => [registry.FactoryRegistry];
  dart.setMethodSignature(registry._RegistryImpl, () => ({
    __proto__: dart.getMethods(registry._RegistryImpl.__proto__),
    create: dart.gFnType(T => [T, [core.String]]),
    getConstructor: dart.fnType(dart.fnType(dart.dynamic, []), [core.Type, core.String]),
    [_createConstructor]: dart.fnType(dart.fnType(dart.dynamic, []), [core.Type, core.String]),
    [_checkInit]: dart.fnType(dart.void, []),
    register: dart.gFnType(T => [dart.void, [registry.FactoryConfig]]),
    [_addStaticFactoryConfig]: dart.fnType(dart.void, [registry.StaticFactoryConfig]),
    [_addDynamicFactoryConfig]: dart.fnType(dart.void, [registry.DynamicFactoryConfig]),
    [_initialize]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(registry._RegistryImpl, "package:pointycastle/src/registry/registry.dart");
  dart.setFieldSignature(registry._RegistryImpl, () => ({
    __proto__: dart.getFields(registry._RegistryImpl.__proto__),
    [_staticFactories]: dart.finalFieldType(core.Map$(core.Type, core.Map$(core.String, dart.fnType(dart.dynamic, [])))),
    [_dynamicFactories]: dart.finalFieldType(core.Map$(core.Type, core.Set$(registry.DynamicFactoryConfig))),
    [_constructorCache]: dart.finalFieldType(core.Map$(core.String, dart.fnType(dart.dynamic, []))),
    [_initialized]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(registry._RegistryImpl, {
    /*registry._RegistryImpl._CONSTRUCTOR_CACHE_SIZE*/get _CONSTRUCTOR_CACHE_SIZE() {
      return 25;
    }
  });
  registry._escapeRegExp = function _escapeRegExp(str) {
    return str[$splitMapJoin](registry._specialRegExpChars, {onMatch: dart.fn(m => "\\" + dart.str(m.group(0)), MatchToString()), onNonMatch: dart.fn(s => s, StringToString())});
  };
  dart.defineLazy(registry, {
    /*registry.registry*/get registry() {
      return new registry._RegistryImpl.new();
    },
    /*registry._specialRegExpChars*/get _specialRegExpChars() {
      return core.RegExp.new("([\\\\\\^\\$\\.\\|\\+\\[\\]\\(\\)\\{\\}])");
    }
  });
  registration.registerFactories = function registerFactories(registry) {
    registration._registerAsymmetricCiphers(registry);
    registration._registerBlockCiphers(registry);
    registration._registerDigests(registry);
    registration._registerECCurves(registry);
    registration._registerKeyDerivators(registry);
    registration._registerKeyGenerators(registry);
    registration._registerMacs(registry);
    registration._registerPaddedBlockCiphers(registry);
    registration._registerPaddings(registry);
    registration._registerRandoms(registry);
    registration._registerSigners(registry);
    registration._registerStreamCiphers(registry);
  };
  registration._registerAsymmetricCiphers = function _registerAsymmetricCiphers(registry) {
    registry.register(dart.dynamic, oaep.OAEPEncoding.FACTORY_CONFIG);
    registry.register(dart.dynamic, pkcs1.PKCS1Encoding.FACTORY_CONFIG);
    registry.register(dart.dynamic, rsa.RSAEngine.FACTORY_CONFIG);
  };
  registration._registerBlockCiphers = function _registerBlockCiphers(registry) {
    registry.register(dart.dynamic, aes_fast.AESFastEngine.FACTORY_CONFIG);
    registry.register(dart.dynamic, cbc.CBCBlockCipher.FACTORY_CONFIG);
    registry.register(dart.dynamic, cfb.CFBBlockCipher.FACTORY_CONFIG);
    registry.register(dart.dynamic, ctr$.CTRBlockCipher.FACTORY_CONFIG);
    registry.register(dart.dynamic, ecb.ECBBlockCipher.FACTORY_CONFIG);
    registry.register(dart.dynamic, gctr.GCTRBlockCipher.FACTORY_CONFIG);
    registry.register(dart.dynamic, ofb.OFBBlockCipher.FACTORY_CONFIG);
    registry.register(dart.dynamic, sic$.SICBlockCipher.FACTORY_CONFIG);
  };
  registration._registerDigests = function _registerDigests(registry) {
    registry.register(dart.dynamic, blake2b.Blake2bDigest.FACTORY_CONFIG);
    registry.register(dart.dynamic, md2.MD2Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, md4.MD4Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, md5.MD5Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, ripemd128.RIPEMD128Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, ripemd160.RIPEMD160Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, ripemd256.RIPEMD256Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, ripemd320.RIPEMD320Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, sha1.SHA1Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, sha3.SHA3Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, sha224.SHA224Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, sha256.SHA256Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, sha384.SHA384Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, sha512.SHA512Digest.FACTORY_CONFIG);
    registry.register(dart.dynamic, sha512t.SHA512tDigest.FACTORY_CONFIG);
    registry.register(dart.dynamic, tiger.TigerDigest.FACTORY_CONFIG);
    registry.register(dart.dynamic, whirlpool.WhirlpoolDigest.FACTORY_CONFIG);
  };
  registration._registerECCurves = function _registerECCurves(registry) {
    registry.register(dart.dynamic, brainpoolp160r1.ECCurve_brainpoolp160r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp160t1.ECCurve_brainpoolp160t1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp192r1.ECCurve_brainpoolp192r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp192t1.ECCurve_brainpoolp192t1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp224r1.ECCurve_brainpoolp224r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp224t1.ECCurve_brainpoolp224t1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp256r1.ECCurve_brainpoolp256r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp256t1.ECCurve_brainpoolp256t1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp320r1.ECCurve_brainpoolp320r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp320t1.ECCurve_brainpoolp320t1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp384r1.ECCurve_brainpoolp384r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp384t1.ECCurve_brainpoolp384t1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp512r1.ECCurve_brainpoolp512r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, brainpoolp512t1.ECCurve_brainpoolp512t1.FACTORY_CONFIG);
    registry.register(dart.dynamic, gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a.FACTORY_CONFIG);
    registry.register(dart.dynamic, gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b.FACTORY_CONFIG);
    registry.register(dart.dynamic, gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c.FACTORY_CONFIG);
    registry.register(dart.dynamic, gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha.FACTORY_CONFIG);
    registry.register(dart.dynamic, gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb.FACTORY_CONFIG);
    registry.register(dart.dynamic, prime192v1.ECCurve_prime192v1.FACTORY_CONFIG);
    registry.register(dart.dynamic, prime192v2.ECCurve_prime192v2.FACTORY_CONFIG);
    registry.register(dart.dynamic, prime192v3.ECCurve_prime192v3.FACTORY_CONFIG);
    registry.register(dart.dynamic, prime239v1.ECCurve_prime239v1.FACTORY_CONFIG);
    registry.register(dart.dynamic, prime239v2.ECCurve_prime239v2.FACTORY_CONFIG);
    registry.register(dart.dynamic, prime239v3.ECCurve_prime239v3.FACTORY_CONFIG);
    registry.register(dart.dynamic, prime256v1.ECCurve_prime256v1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp112r1.ECCurve_secp112r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp112r2.ECCurve_secp112r2.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp128r1.ECCurve_secp128r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp128r2.ECCurve_secp128r2.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp160k1.ECCurve_secp160k1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp160r1.ECCurve_secp160r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp160r2.ECCurve_secp160r2.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp192k1.ECCurve_secp192k1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp192r1.ECCurve_secp192r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp224k1.ECCurve_secp224k1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp224r1.ECCurve_secp224r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp256k1.ECCurve_secp256k1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp256r1.ECCurve_secp256r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp384r1.ECCurve_secp384r1.FACTORY_CONFIG);
    registry.register(dart.dynamic, secp521r1.ECCurve_secp521r1.FACTORY_CONFIG);
  };
  registration._registerKeyDerivators = function _registerKeyDerivators(registry) {
    registry.register(dart.dynamic, pbkdf2$.PBKDF2KeyDerivator.FACTORY_CONFIG);
    registry.register(dart.dynamic, scrypt.Scrypt.FACTORY_CONFIG);
  };
  registration._registerKeyGenerators = function _registerKeyGenerators(registry) {
    registry.register(dart.dynamic, ec_key_generator.ECKeyGenerator.FACTORY_CONFIG);
    registry.register(dart.dynamic, rsa_key_generator.RSAKeyGenerator.FACTORY_CONFIG);
  };
  registration._registerMacs = function _registerMacs(registry) {
    registry.register(dart.dynamic, hmac.HMac.FACTORY_CONFIG);
    registry.register(dart.dynamic, cmac.CMac.FACTORY_CONFIG);
    registry.register(dart.dynamic, cbc_block_cipher_mac.CBCBlockCipherMac.FACTORY_CONFIG);
  };
  registration._registerPaddedBlockCiphers = function _registerPaddedBlockCiphers(registry) {
    registry.register(dart.dynamic, padded_block_cipher_impl.PaddedBlockCipherImpl.FACTORY_CONFIG);
  };
  registration._registerPaddings = function _registerPaddings(registry) {
    registry.register(dart.dynamic, pkcs7.PKCS7Padding.FACTORY_CONFIG);
    registry.register(dart.dynamic, iso7816d4.ISO7816d4Padding.FACTORY_CONFIG);
  };
  registration._registerRandoms = function _registerRandoms(registry) {
    registry.register(dart.dynamic, auto_seed_block_ctr_random.AutoSeedBlockCtrRandom.FACTORY_CONFIG);
    registry.register(dart.dynamic, block_ctr_random.BlockCtrRandom.FACTORY_CONFIG);
    registry.register(dart.dynamic, fortuna_random.FortunaRandom.FACTORY_CONFIG);
  };
  registration._registerSigners = function _registerSigners(registry) {
    registry.register(dart.dynamic, ecdsa_signer.ECDSASigner.FACTORY_CONFIG);
    registry.register(dart.dynamic, rsa_signer.RSASigner.FACTORY_CONFIG);
  };
  registration._registerStreamCiphers = function _registerStreamCiphers(registry) {
    registry.register(dart.dynamic, ctr.CTRStreamCipher.FACTORY_CONFIG);
    registry.register(dart.dynamic, salsa20.Salsa20Engine.FACTORY_CONFIG);
    registry.register(dart.dynamic, sic.SICStreamCipher.FACTORY_CONFIG);
  };
  const _iv = dart.privateName(sic, "_iv");
  const _counter = dart.privateName(sic, "_counter");
  const _counterOut = dart.privateName(sic, "_counterOut");
  const _consumed = dart.privateName(sic, "_consumed");
  const _feedCounterIfNeeded = dart.privateName(sic, "_feedCounterIfNeeded");
  const _feedCounter = dart.privateName(sic, "_feedCounter");
  const _incrementCounter = dart.privateName(sic, "_incrementCounter");
  base_stream_cipher.BaseStreamCipher = class BaseStreamCipher extends core.Object {
    process(data) {
      let out = _native_typed_data.NativeUint8List.new(data[$length]);
      this.processBytes(data, 0, data[$length], out, 0);
      return out;
    }
  };
  (base_stream_cipher.BaseStreamCipher.new = function() {
    ;
  }).prototype = base_stream_cipher.BaseStreamCipher.prototype;
  dart.addTypeTests(base_stream_cipher.BaseStreamCipher);
  base_stream_cipher.BaseStreamCipher[dart.implements] = () => [api.StreamCipher];
  dart.setMethodSignature(base_stream_cipher.BaseStreamCipher, () => ({
    __proto__: dart.getMethods(base_stream_cipher.BaseStreamCipher.__proto__),
    process: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List])
  }));
  dart.setLibraryUri(base_stream_cipher.BaseStreamCipher, "package:pointycastle/src/impl/base_stream_cipher.dart");
  const underlyingCipher$ = dart.privateName(sic, "SICStreamCipher.underlyingCipher");
  sic.SICStreamCipher = class SICStreamCipher extends base_stream_cipher.BaseStreamCipher {
    get underlyingCipher() {
      return this[underlyingCipher$];
    }
    set underlyingCipher(value) {
      super.underlyingCipher = value;
    }
    get algorithmName() {
      return dart.str(this.underlyingCipher.algorithmName) + "/SIC";
    }
    reset() {
      this.underlyingCipher.reset();
      this[_counter][$setAll](0, this[_iv]);
      this[_counterOut][$fillRange](0, this[_counterOut][$length], 0);
      this[_consumed] = this[_counterOut][$length];
    }
    init(forEncryption, params) {
      ParametersWithIVOfCipherParameters()._check(params);
      this[_iv][$setAll](0, params.iv);
      this.reset();
      this.underlyingCipher.init(true, params.parameters);
    }
    processBytes(inp, inpOff, len, out, outOff) {
      for (let i = 0; i < dart.notNull(len); i = i + 1) {
        out[$_set](dart.notNull(outOff) + i, this.returnByte(inp[$_get](dart.notNull(inpOff) + i)));
      }
    }
    returnByte(inp) {
      let t0;
      this[_feedCounterIfNeeded]();
      return (dart.notNull(ufixnum.clip8(inp)) ^ dart.notNull(this[_counterOut][$_get]((t0 = this[_consumed], this[_consumed] = dart.notNull(t0) + 1, t0)))) >>> 0;
    }
    [_feedCounterIfNeeded]() {
      if (dart.notNull(this[_consumed]) >= dart.notNull(this[_counterOut][$length])) {
        this[_feedCounter]();
      }
    }
    [_feedCounter]() {
      this.underlyingCipher.processBlock(this[_counter], 0, this[_counterOut], 0);
      this[_incrementCounter]();
      this[_consumed] = 0;
    }
    [_incrementCounter]() {
      let i = null;
      for (let t0 = i = dart.notNull(this[_counter][$lengthInBytes]) - 1; dart.dtest(dart.dsend(i, '>=', [0])); i = dart.dsend(i, '-', [1])) {
        let val = this[_counter][$_get](core.int._check(i));
        val = dart.notNull(val) + 1;
        this[_counter][$_set](core.int._check(i), val);
        if (this[_counter][$_get](core.int._check(i)) !== 0) break;
      }
    }
  };
  (sic.SICStreamCipher.new = function(underlyingCipher) {
    this[_iv] = null;
    this[_counter] = null;
    this[_counterOut] = null;
    this[_consumed] = null;
    this[underlyingCipher$] = underlyingCipher;
    this[_iv] = _native_typed_data.NativeUint8List.new(this.underlyingCipher.blockSize);
    this[_counter] = _native_typed_data.NativeUint8List.new(this.underlyingCipher.blockSize);
    this[_counterOut] = _native_typed_data.NativeUint8List.new(this.underlyingCipher.blockSize);
  }).prototype = sic.SICStreamCipher.prototype;
  dart.addTypeTests(sic.SICStreamCipher);
  dart.setMethodSignature(sic.SICStreamCipher, () => ({
    __proto__: dart.getMethods(sic.SICStreamCipher.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, core.Object]),
    processBytes: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int]),
    returnByte: dart.fnType(core.int, [core.int]),
    [_feedCounterIfNeeded]: dart.fnType(dart.void, []),
    [_feedCounter]: dart.fnType(dart.void, []),
    [_incrementCounter]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sic.SICStreamCipher, () => ({
    __proto__: dart.getGetters(sic.SICStreamCipher.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(sic.SICStreamCipher, "package:pointycastle/stream/sic.dart");
  dart.setFieldSignature(sic.SICStreamCipher, () => ({
    __proto__: dart.getFields(sic.SICStreamCipher.__proto__),
    underlyingCipher: dart.finalFieldType(api.BlockCipher),
    [_iv]: dart.fieldType(typed_data.Uint8List),
    [_counter]: dart.fieldType(typed_data.Uint8List),
    [_counterOut]: dart.fieldType(typed_data.Uint8List),
    [_consumed]: dart.fieldType(core.int)
  }));
  dart.defineLazy(sic.SICStreamCipher, {
    /*sic.SICStreamCipher.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.StreamCipher), "/SIC", dart.fn((_, match) => dart.fn(() => {
        let digestName = match.group(1);
        return new sic.SICStreamCipher.new(api.BlockCipher.new(digestName));
      }, VoidToSICStreamCipher()), StringAndMatchToFn()));
    }
  });
  const _workingKey = dart.privateName(salsa20, "_workingKey");
  const _workingIV = dart.privateName(salsa20, "_workingIV");
  const _state = dart.privateName(salsa20, "_state");
  const _buffer = dart.privateName(salsa20, "_buffer");
  const _keyStream = dart.privateName(salsa20, "_keyStream");
  const _keyStreamOffset = dart.privateName(salsa20, "_keyStreamOffset");
  const _initialised = dart.privateName(salsa20, "_initialised");
  const _setKey = dart.privateName(salsa20, "_setKey");
  const _generateKeyStream = dart.privateName(salsa20, "_generateKeyStream");
  const _salsa20Core = dart.privateName(salsa20, "_salsa20Core");
  const algorithmName = dart.privateName(salsa20, "Salsa20Engine.algorithmName");
  salsa20.Salsa20Engine = class Salsa20Engine extends base_stream_cipher.BaseStreamCipher {
    get algorithmName() {
      return this[algorithmName];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    reset() {
      if (this[_workingKey] != null) {
        this[_setKey](this[_workingKey], this[_workingIV]);
      }
    }
    init(forEncryption, params) {
      ParametersWithIVOfKeyParameter()._check(params);
      let uparams = params.parameters;
      let iv = params.iv;
      if (iv == null || iv[$length] !== 8) {
        dart.throw(new core.ArgumentError.new("Salsa20 requires exactly 8 bytes of IV"));
      }
      this[_workingIV] = iv;
      this[_workingKey] = uparams.key;
      this[_setKey](this[_workingKey], this[_workingIV]);
    }
    returnByte(inp) {
      let t3, t2, t1, t3$, t2$, t1$;
      if (this[_keyStreamOffset] === 0) {
        this[_generateKeyStream](this[_keyStream]);
        if ((t1 = this[_state], t2 = 8, t3 = dart.notNull(t1[$_get](t2)) + 1, t1[$_set](t2, t3), t3) === 0) {
          t1$ = this[_state];
          t2$ = 9;
          t3$ = dart.notNull(t1$[$_get](t2$)) + 1;
          t1$[$_set](t2$, t3$);
          t3$;
        }
      }
      let out = ufixnum.clip8((dart.notNull(this[_keyStream][$_get](this[_keyStreamOffset])) ^ dart.notNull(inp)) >>> 0);
      this[_keyStreamOffset] = dart.notNull(this[_keyStreamOffset]) + 1 & 63;
      return out;
    }
    processBytes(inp, inpOff, len, out, outOff) {
      let t3, t2, t1, t3$, t2$, t1$;
      if (!dart.test(this[_initialised])) {
        dart.throw(new core.StateError.new("Salsa20 not initialized: please call init() first"));
      }
      if (dart.notNull(inpOff) + dart.notNull(len) > dart.notNull(inp[$length])) {
        dart.throw(new core.ArgumentError.new("Input buffer too short or requested length too long"));
      }
      if (dart.notNull(outOff) + dart.notNull(len) > dart.notNull(out[$length])) {
        dart.throw(new core.ArgumentError.new("Output buffer too short or requested length too long"));
      }
      for (let i = 0; i < dart.notNull(len); i = i + 1) {
        if (this[_keyStreamOffset] === 0) {
          this[_generateKeyStream](this[_keyStream]);
          if ((t1 = this[_state], t2 = 8, t3 = dart.notNull(t1[$_get](t2)) + 1, t1[$_set](t2, t3), t3) === 0) {
            t1$ = this[_state];
            t2$ = 9;
            t3$ = dart.notNull(t1$[$_get](t2$)) + 1;
            t1$[$_set](t2$, t3$);
            t3$;
          }
        }
        out[$_set](i + dart.notNull(outOff), ufixnum.clip8((dart.notNull(this[_keyStream][$_get](this[_keyStreamOffset])) ^ dart.notNull(inp[$_get](i + dart.notNull(inpOff)))) >>> 0));
        this[_keyStreamOffset] = dart.notNull(this[_keyStreamOffset]) + 1 & 63;
      }
    }
    [_setKey](keyBytes, ivBytes) {
      let t3, t2, t1;
      this[_workingKey] = keyBytes;
      this[_workingIV] = ivBytes;
      this[_keyStreamOffset] = 0;
      let offset = 0;
      let constants = null;
      this[_state][$_set](1, ufixnum.unpack32(this[_workingKey], 0, typed_data.Endian.little));
      this[_state][$_set](2, ufixnum.unpack32(this[_workingKey], 4, typed_data.Endian.little));
      this[_state][$_set](3, ufixnum.unpack32(this[_workingKey], 8, typed_data.Endian.little));
      this[_state][$_set](4, ufixnum.unpack32(this[_workingKey], 12, typed_data.Endian.little));
      if (this[_workingKey][$length] === 32) {
        constants = salsa20.Salsa20Engine._sigma;
        offset = 16;
      } else {
        constants = salsa20.Salsa20Engine._tau;
      }
      this[_state][$_set](11, ufixnum.unpack32(this[_workingKey], offset, typed_data.Endian.little));
      this[_state][$_set](12, ufixnum.unpack32(this[_workingKey], offset + 4, typed_data.Endian.little));
      this[_state][$_set](13, ufixnum.unpack32(this[_workingKey], offset + 8, typed_data.Endian.little));
      this[_state][$_set](14, ufixnum.unpack32(this[_workingKey], offset + 12, typed_data.Endian.little));
      this[_state][$_set](0, ufixnum.unpack32(constants, 0, typed_data.Endian.little));
      this[_state][$_set](5, ufixnum.unpack32(constants, 4, typed_data.Endian.little));
      this[_state][$_set](10, ufixnum.unpack32(constants, 8, typed_data.Endian.little));
      this[_state][$_set](15, ufixnum.unpack32(constants, 12, typed_data.Endian.little));
      this[_state][$_set](6, ufixnum.unpack32(this[_workingIV], 0, typed_data.Endian.little));
      this[_state][$_set](7, ufixnum.unpack32(this[_workingIV], 4, typed_data.Endian.little));
      this[_state][$_set](8, (t1 = this[_state], t2 = 9, t3 = 0, t1[$_set](t2, t3), t3));
      this[_initialised] = true;
    }
    [_generateKeyStream](output) {
      this[_salsa20Core](20, this[_state], this[_buffer]);
      let outOff = 0;
      for (let x of this[_buffer]) {
        ufixnum.pack32(x, output, outOff, typed_data.Endian.little);
        outOff = outOff + 4;
      }
    }
    [_salsa20Core](rounds, input, x) {
      let t2, t1, t2$, t1$, t2$0, t1$0, t2$1, t1$1, t2$2, t1$2, t2$3, t1$3, t2$4, t1$4, t2$5, t1$5, t2$6, t1$6, t2$7, t1$7, t2$8, t1$8, t2$9, t1$9, t2$10, t1$10, t2$11, t1$11, t2$12, t1$12, t2$13, t1$13, t2$14, t1$14, t2$15, t1$15, t2$16, t1$16, t2$17, t1$17, t2$18, t1$18, t2$19, t1$19, t2$20, t1$20, t2$21, t1$21, t2$22, t1$22, t2$23, t1$23, t2$24, t1$24, t2$25, t1$25, t2$26, t1$26, t2$27, t1$27, t2$28, t1$28, t2$29, t1$29;
      x[$setAll](0, input);
      for (let i = rounds; dart.notNull(i) > 0; i = dart.notNull(i) - 2) {
        t1 = x;
        t2 = 4;
        t1[$_set](t2, (dart.notNull(t1[$_get](t2)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](0)) + dart.notNull(x[$_get](12)), 7))) >>> 0);
        t1$ = x;
        t2$ = 8;
        t1$[$_set](t2$, (dart.notNull(t1$[$_get](t2$)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](4)) + dart.notNull(x[$_get](0)), 9))) >>> 0);
        t1$0 = x;
        t2$0 = 12;
        t1$0[$_set](t2$0, (dart.notNull(t1$0[$_get](t2$0)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](8)) + dart.notNull(x[$_get](4)), 13))) >>> 0);
        t1$1 = x;
        t2$1 = 0;
        t1$1[$_set](t2$1, (dart.notNull(t1$1[$_get](t2$1)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](12)) + dart.notNull(x[$_get](8)), 18))) >>> 0);
        t1$2 = x;
        t2$2 = 9;
        t1$2[$_set](t2$2, (dart.notNull(t1$2[$_get](t2$2)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](5)) + dart.notNull(x[$_get](1)), 7))) >>> 0);
        t1$3 = x;
        t2$3 = 13;
        t1$3[$_set](t2$3, (dart.notNull(t1$3[$_get](t2$3)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](9)) + dart.notNull(x[$_get](5)), 9))) >>> 0);
        t1$4 = x;
        t2$4 = 1;
        t1$4[$_set](t2$4, (dart.notNull(t1$4[$_get](t2$4)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](13)) + dart.notNull(x[$_get](9)), 13))) >>> 0);
        t1$5 = x;
        t2$5 = 5;
        t1$5[$_set](t2$5, (dart.notNull(t1$5[$_get](t2$5)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](1)) + dart.notNull(x[$_get](13)), 18))) >>> 0);
        t1$6 = x;
        t2$6 = 14;
        t1$6[$_set](t2$6, (dart.notNull(t1$6[$_get](t2$6)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](10)) + dart.notNull(x[$_get](6)), 7))) >>> 0);
        t1$7 = x;
        t2$7 = 2;
        t1$7[$_set](t2$7, (dart.notNull(t1$7[$_get](t2$7)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](14)) + dart.notNull(x[$_get](10)), 9))) >>> 0);
        t1$8 = x;
        t2$8 = 6;
        t1$8[$_set](t2$8, (dart.notNull(t1$8[$_get](t2$8)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](2)) + dart.notNull(x[$_get](14)), 13))) >>> 0);
        t1$9 = x;
        t2$9 = 10;
        t1$9[$_set](t2$9, (dart.notNull(t1$9[$_get](t2$9)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](6)) + dart.notNull(x[$_get](2)), 18))) >>> 0);
        t1$10 = x;
        t2$10 = 3;
        t1$10[$_set](t2$10, (dart.notNull(t1$10[$_get](t2$10)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](15)) + dart.notNull(x[$_get](11)), 7))) >>> 0);
        t1$11 = x;
        t2$11 = 7;
        t1$11[$_set](t2$11, (dart.notNull(t1$11[$_get](t2$11)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](3)) + dart.notNull(x[$_get](15)), 9))) >>> 0);
        t1$12 = x;
        t2$12 = 11;
        t1$12[$_set](t2$12, (dart.notNull(t1$12[$_get](t2$12)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](7)) + dart.notNull(x[$_get](3)), 13))) >>> 0);
        t1$13 = x;
        t2$13 = 15;
        t1$13[$_set](t2$13, (dart.notNull(t1$13[$_get](t2$13)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](11)) + dart.notNull(x[$_get](7)), 18))) >>> 0);
        t1$14 = x;
        t2$14 = 1;
        t1$14[$_set](t2$14, (dart.notNull(t1$14[$_get](t2$14)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](0)) + dart.notNull(x[$_get](3)), 7))) >>> 0);
        t1$15 = x;
        t2$15 = 2;
        t1$15[$_set](t2$15, (dart.notNull(t1$15[$_get](t2$15)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](1)) + dart.notNull(x[$_get](0)), 9))) >>> 0);
        t1$16 = x;
        t2$16 = 3;
        t1$16[$_set](t2$16, (dart.notNull(t1$16[$_get](t2$16)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](2)) + dart.notNull(x[$_get](1)), 13))) >>> 0);
        t1$17 = x;
        t2$17 = 0;
        t1$17[$_set](t2$17, (dart.notNull(t1$17[$_get](t2$17)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](3)) + dart.notNull(x[$_get](2)), 18))) >>> 0);
        t1$18 = x;
        t2$18 = 6;
        t1$18[$_set](t2$18, (dart.notNull(t1$18[$_get](t2$18)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](5)) + dart.notNull(x[$_get](4)), 7))) >>> 0);
        t1$19 = x;
        t2$19 = 7;
        t1$19[$_set](t2$19, (dart.notNull(t1$19[$_get](t2$19)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](6)) + dart.notNull(x[$_get](5)), 9))) >>> 0);
        t1$20 = x;
        t2$20 = 4;
        t1$20[$_set](t2$20, (dart.notNull(t1$20[$_get](t2$20)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](7)) + dart.notNull(x[$_get](6)), 13))) >>> 0);
        t1$21 = x;
        t2$21 = 5;
        t1$21[$_set](t2$21, (dart.notNull(t1$21[$_get](t2$21)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](4)) + dart.notNull(x[$_get](7)), 18))) >>> 0);
        t1$22 = x;
        t2$22 = 11;
        t1$22[$_set](t2$22, (dart.notNull(t1$22[$_get](t2$22)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](10)) + dart.notNull(x[$_get](9)), 7))) >>> 0);
        t1$23 = x;
        t2$23 = 8;
        t1$23[$_set](t2$23, (dart.notNull(t1$23[$_get](t2$23)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](11)) + dart.notNull(x[$_get](10)), 9))) >>> 0);
        t1$24 = x;
        t2$24 = 9;
        t1$24[$_set](t2$24, (dart.notNull(t1$24[$_get](t2$24)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](8)) + dart.notNull(x[$_get](11)), 13))) >>> 0);
        t1$25 = x;
        t2$25 = 10;
        t1$25[$_set](t2$25, (dart.notNull(t1$25[$_get](t2$25)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](9)) + dart.notNull(x[$_get](8)), 18))) >>> 0);
        t1$26 = x;
        t2$26 = 12;
        t1$26[$_set](t2$26, (dart.notNull(t1$26[$_get](t2$26)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](15)) + dart.notNull(x[$_get](14)), 7))) >>> 0);
        t1$27 = x;
        t2$27 = 13;
        t1$27[$_set](t2$27, (dart.notNull(t1$27[$_get](t2$27)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](12)) + dart.notNull(x[$_get](15)), 9))) >>> 0);
        t1$28 = x;
        t2$28 = 14;
        t1$28[$_set](t2$28, (dart.notNull(t1$28[$_get](t2$28)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](13)) + dart.notNull(x[$_get](12)), 13))) >>> 0);
        t1$29 = x;
        t2$29 = 15;
        t1$29[$_set](t2$29, (dart.notNull(t1$29[$_get](t2$29)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](14)) + dart.notNull(x[$_get](13)), 18))) >>> 0);
      }
      for (let i = 0; i < 16; i = i + 1) {
        x[$_set](i, ufixnum.sum32(x[$_get](i), input[$_get](i)));
      }
    }
  };
  (salsa20.Salsa20Engine.new = function() {
    this[_workingKey] = null;
    this[_workingIV] = null;
    this[_state] = ListOfint().new(16);
    this[_buffer] = ListOfint().new(16);
    this[_keyStream] = _native_typed_data.NativeUint8List.new(16 * 4);
    this[_keyStreamOffset] = 0;
    this[_initialised] = false;
    this[algorithmName] = "Salsa20";
    ;
  }).prototype = salsa20.Salsa20Engine.prototype;
  dart.addTypeTests(salsa20.Salsa20Engine);
  dart.setMethodSignature(salsa20.Salsa20Engine, () => ({
    __proto__: dart.getMethods(salsa20.Salsa20Engine.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, core.Object]),
    returnByte: dart.fnType(core.int, [core.int]),
    processBytes: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int]),
    [_setKey]: dart.fnType(dart.void, [typed_data.Uint8List, typed_data.Uint8List]),
    [_generateKeyStream]: dart.fnType(dart.void, [typed_data.Uint8List]),
    [_salsa20Core]: dart.fnType(dart.void, [core.int, core.List$(core.int), core.List$(core.int)])
  }));
  dart.setLibraryUri(salsa20.Salsa20Engine, "package:pointycastle/stream/salsa20.dart");
  dart.setFieldSignature(salsa20.Salsa20Engine, () => ({
    __proto__: dart.getFields(salsa20.Salsa20Engine.__proto__),
    [_workingKey]: dart.fieldType(typed_data.Uint8List),
    [_workingIV]: dart.fieldType(typed_data.Uint8List),
    [_state]: dart.finalFieldType(core.List$(core.int)),
    [_buffer]: dart.finalFieldType(core.List$(core.int)),
    [_keyStream]: dart.finalFieldType(typed_data.Uint8List),
    [_keyStreamOffset]: dart.fieldType(core.int),
    [_initialised]: dart.fieldType(core.bool),
    algorithmName: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(salsa20.Salsa20Engine, {
    /*salsa20.Salsa20Engine.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.StreamCipher), "Salsa20", dart.fn(() => new salsa20.Salsa20Engine.new(), VoidToSalsa20Engine()));
    },
    /*salsa20.Salsa20Engine._STATE_SIZE*/get _STATE_SIZE() {
      return 16;
    },
    /*salsa20.Salsa20Engine._sigma*/get _sigma() {
      return _native_typed_data.NativeUint8List.fromList("expand 32-byte k"[$codeUnits]);
    },
    /*salsa20.Salsa20Engine._tau*/get _tau() {
      return _native_typed_data.NativeUint8List.fromList("expand 16-byte k"[$codeUnits]);
    }
  });
  ctr.CTRStreamCipher = class CTRStreamCipher extends sic.SICStreamCipher {
    get algorithmName() {
      return dart.str(this.underlyingCipher.algorithmName) + "/CTR";
    }
  };
  (ctr.CTRStreamCipher.new = function(underlyingCipher) {
    ctr.CTRStreamCipher.__proto__.new.call(this, underlyingCipher);
    ;
  }).prototype = ctr.CTRStreamCipher.prototype;
  dart.addTypeTests(ctr.CTRStreamCipher);
  dart.setLibraryUri(ctr.CTRStreamCipher, "package:pointycastle/stream/ctr.dart");
  dart.defineLazy(ctr.CTRStreamCipher, {
    /*ctr.CTRStreamCipher.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.StreamCipher), "/CTR", dart.fn((_, match) => dart.fn(() => {
        let digestName = match.group(1);
        return new ctr.CTRStreamCipher.new(api.BlockCipher.new(digestName));
      }, VoidToCTRStreamCipher()), StringAndMatchToFn$()));
    }
  });
  const _rsa = dart.privateName(rsa_signer, "_rsa");
  const _digestIdentifier = dart.privateName(rsa_signer, "_digestIdentifier");
  const _forSigning = dart.privateName(rsa_signer, "_forSigning");
  const _digest$ = dart.privateName(rsa_signer, "_digest");
  const _hexStringToBytes = dart.privateName(rsa_signer, "_hexStringToBytes");
  const _derEncode = dart.privateName(rsa_signer, "_derEncode");
  rsa_signer.RSASigner = class RSASigner extends core.Object {
    get algorithmName() {
      return dart.str(this[_digest$].algorithmName) + "/RSA";
    }
    reset() {
      this[_digest$].reset();
      this[_rsa].reset();
    }
    init(forSigning, params) {
      this[_forSigning] = forSigning;
      let akparams = null;
      if (ParametersWithRandomOfCipherParameters().is(params)) {
        akparams = AsymmetricKeyParameterOfAsymmetricKey()._check(params.parameters);
      } else {
        akparams = AsymmetricKeyParameterOfAsymmetricKey()._check(params);
      }
      let k = api$.RSAAsymmetricKey._check(akparams.key);
      if (dart.test(forSigning) && !api$.RSAPrivateKey.is(k)) {
        dart.throw(new core.ArgumentError.new("Signing requires private key"));
      }
      if (!dart.test(forSigning) && !api$.RSAPublicKey.is(k)) {
        dart.throw(new core.ArgumentError.new("Verification requires public key"));
      }
      this.reset();
      this[_rsa].init(forSigning, params);
    }
    generateSignature(message) {
      if (!dart.test(this[_forSigning])) {
        dart.throw(new core.StateError.new("Signer was not initialised for signature generation"));
      }
      let hash = _native_typed_data.NativeUint8List.new(this[_digest$].digestSize);
      this[_digest$].reset();
      this[_digest$].update(message, 0, message[$length]);
      this[_digest$].doFinal(hash, 0);
      let data = this[_derEncode](hash);
      let out = _native_typed_data.NativeUint8List.new(this[_rsa].outputBlockSize);
      let len = this[_rsa].processBlock(data, 0, data[$length], out, 0);
      return new api$.RSASignature.new(out[$sublist](0, len));
    }
    verifySignature(message, signature) {
      let t2, t1, t2$, t1$;
      api$.RSASignature._check(signature);
      if (dart.test(this[_forSigning])) {
        dart.throw(new core.StateError.new("Signer was not initialised for signature verification"));
      }
      let hash = _native_typed_data.NativeUint8List.new(this[_digest$].digestSize);
      this[_digest$].reset();
      this[_digest$].update(message, 0, message[$length]);
      this[_digest$].doFinal(hash, 0);
      let sig = _native_typed_data.NativeUint8List.new(this[_rsa].outputBlockSize);
      let len = this[_rsa].processBlock(signature.bytes, 0, signature.bytes[$length], sig, 0);
      sig = sig[$sublist](0, len);
      let expected = this[_derEncode](hash);
      if (sig[$length] == expected[$length]) {
        for (let i = 0; i < dart.notNull(sig[$length]); i = i + 1) {
          if (sig[$_get](i) != expected[$_get](i)) {
            return false;
          }
        }
        return true;
      } else if (sig[$length] === dart.notNull(expected[$length]) - 2) {
        let sigOffset = dart.notNull(sig[$length]) - dart.notNull(hash[$length]) - 2;
        let expectedOffset = dart.notNull(expected[$length]) - dart.notNull(hash[$length]) - 2;
        t1 = expected;
        t2 = 1;
        t1[$_set](t2, dart.notNull(t1[$_get](t2)) - 2);
        t1$ = expected;
        t2$ = 3;
        t1$[$_set](t2$, dart.notNull(t1$[$_get](t2$)) - 2);
        let nonEqual = 0;
        for (let i = 0; i < dart.notNull(hash[$length]); i = i + 1) {
          nonEqual = (nonEqual | (dart.notNull(sig[$_get](sigOffset + i)) ^ dart.notNull(expected[$_get](expectedOffset + i))) >>> 0) >>> 0;
        }
        for (let i = 0; i < sigOffset; i = i + 1) {
          nonEqual = (nonEqual | (dart.notNull(sig[$_get](i)) ^ dart.notNull(expected[$_get](i))) >>> 0) >>> 0;
        }
        return nonEqual === 0;
      } else {
        return false;
      }
    }
    [_derEncode](hash) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5;
      let out = _native_typed_data.NativeUint8List.new(2 + 2 + dart.notNull(this[_digestIdentifier][$length]) + 2 + 2 + dart.notNull(hash[$length]));
      let i = 0;
      out[$_set]((t1 = i, i = t1 + 1, t1), 48);
      out[$_set]((t1$ = i, i = t1$ + 1, t1$), dart.notNull(out[$length]) - 2);
      out[$_set]((t1$0 = i, i = t1$0 + 1, t1$0), 48);
      out[$_set]((t1$1 = i, i = t1$1 + 1, t1$1), dart.notNull(this[_digestIdentifier][$length]) + 2);
      out[$setAll](i, this[_digestIdentifier]);
      i = i + dart.notNull(this[_digestIdentifier][$length]);
      out[$_set]((t1$2 = i, i = t1$2 + 1, t1$2), 5);
      out[$_set]((t1$3 = i, i = t1$3 + 1, t1$3), 0);
      out[$_set]((t1$4 = i, i = t1$4 + 1, t1$4), 4);
      out[$_set]((t1$5 = i, i = t1$5 + 1, t1$5), hash[$length]);
      out[$setAll](i, hash);
      return out;
    }
    [_hexStringToBytes](hex) {
      let result = _native_typed_data.NativeUint8List.new((hex.length / 2)[$truncate]());
      for (let i = 0; i < hex.length; i = i + 2) {
        let num = hex[$substring](i, i + 2);
        let byte = core.int.parse(num, {radix: 16});
        result[$_set]((i / 2)[$truncate](), byte);
      }
      return result;
    }
  };
  (rsa_signer.RSASigner.new = function(_digest, digestIdentifierHex) {
    this[_rsa] = new pkcs1.PKCS1Encoding.new(new rsa.RSAEngine.new());
    this[_digestIdentifier] = null;
    this[_forSigning] = null;
    this[_digest$] = _digest;
    this[_digestIdentifier] = this[_hexStringToBytes](digestIdentifierHex);
  }).prototype = rsa_signer.RSASigner.prototype;
  dart.addTypeTests(rsa_signer.RSASigner);
  rsa_signer.RSASigner[dart.implements] = () => [api.Signer];
  dart.setMethodSignature(rsa_signer.RSASigner, () => ({
    __proto__: dart.getMethods(rsa_signer.RSASigner.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, api.CipherParameters]),
    generateSignature: dart.fnType(api$.RSASignature, [typed_data.Uint8List]),
    verifySignature: dart.fnType(core.bool, [typed_data.Uint8List, core.Object]),
    [_derEncode]: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List]),
    [_hexStringToBytes]: dart.fnType(typed_data.Uint8List, [core.String])
  }));
  dart.setGetterSignature(rsa_signer.RSASigner, () => ({
    __proto__: dart.getGetters(rsa_signer.RSASigner.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(rsa_signer.RSASigner, "package:pointycastle/signers/rsa_signer.dart");
  dart.setFieldSignature(rsa_signer.RSASigner, () => ({
    __proto__: dart.getFields(rsa_signer.RSASigner.__proto__),
    [_rsa]: dart.finalFieldType(api.AsymmetricBlockCipher),
    [_digest$]: dart.finalFieldType(api.Digest),
    [_digestIdentifier]: dart.fieldType(typed_data.Uint8List),
    [_forSigning]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(rsa_signer.RSASigner, {
    /*rsa_signer.RSASigner.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.Signer), "/RSA", dart.fn((_, match) => {
        let digestName = match.group(1);
        let digestIdentifierHex = rsa_signer.RSASigner._DIGEST_IDENTIFIER_HEXES[$_get](digestName);
        if (digestIdentifierHex == null) {
          dart.throw(new api.RegistryFactoryException.new("RSA signing with digest " + dart.str(digestName) + " is not supported"));
        }
        return dart.fn(() => new rsa_signer.RSASigner.new(api.Digest.new(digestName), digestIdentifierHex), VoidToRSASigner());
      }, StringAndMatchToFn$0()));
    },
    /*rsa_signer.RSASigner._DIGEST_IDENTIFIER_HEXES*/get _DIGEST_IDENTIFIER_HEXES() {
      return new (IdentityMapOfString$String()).from(["MD2", "06082a864886f70d0202", "MD4", "06082a864886f70d0204", "MD5", "06082a864886f70d0205", "RIPEMD-128", "06052b24030202", "RIPEMD-160", "06052b24030201", "RIPEMD-256", "06052b24030203", "SHA-1", "06052b0e03021a", "SHA-224", "0609608648016503040204", "SHA-256", "0609608648016503040201", "SHA-384", "0609608648016503040202", "SHA-512", "0609608648016503040203"]);
    }
  });
  const _forEncryption = dart.privateName(rsa, "_forEncryption");
  const _key = dart.privateName(rsa, "_key");
  const _dP = dart.privateName(rsa, "_dP");
  const _dQ = dart.privateName(rsa, "_dQ");
  const _qInv = dart.privateName(rsa, "_qInv");
  const _convertInput = dart.privateName(rsa, "_convertInput");
  const _processBigInteger = dart.privateName(rsa, "_processBigInteger");
  const _convertOutput = dart.privateName(rsa, "_convertOutput");
  base_asymmetric_block_cipher.BaseAsymmetricBlockCipher = class BaseAsymmetricBlockCipher extends core.Object {
    process(data) {
      let out = _native_typed_data.NativeUint8List.new(this.outputBlockSize);
      let len = this.processBlock(data, 0, data[$length], out, 0);
      return out[$sublist](0, len);
    }
  };
  (base_asymmetric_block_cipher.BaseAsymmetricBlockCipher.new = function() {
    ;
  }).prototype = base_asymmetric_block_cipher.BaseAsymmetricBlockCipher.prototype;
  dart.addTypeTests(base_asymmetric_block_cipher.BaseAsymmetricBlockCipher);
  base_asymmetric_block_cipher.BaseAsymmetricBlockCipher[dart.implements] = () => [api.AsymmetricBlockCipher];
  dart.setMethodSignature(base_asymmetric_block_cipher.BaseAsymmetricBlockCipher, () => ({
    __proto__: dart.getMethods(base_asymmetric_block_cipher.BaseAsymmetricBlockCipher.__proto__),
    process: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List])
  }));
  dart.setLibraryUri(base_asymmetric_block_cipher.BaseAsymmetricBlockCipher, "package:pointycastle/src/impl/base_asymmetric_block_cipher.dart");
  rsa.RSAEngine = class RSAEngine extends base_asymmetric_block_cipher.BaseAsymmetricBlockCipher {
    get algorithmName() {
      return "RSA";
    }
    get inputBlockSize() {
      if (this[_key] == null) {
        dart.throw(new core.StateError.new("Input block size cannot be calculated until init() called"));
      }
      let bitSize = this[_key].modulus.bitLength;
      if (dart.test(this[_forEncryption])) {
        return ((dart.notNull(bitSize) + 7) / 8)[$truncate]() - 1;
      } else {
        return ((dart.notNull(bitSize) + 7) / 8)[$truncate]();
      }
    }
    get outputBlockSize() {
      if (this[_key] == null) {
        dart.throw(new core.StateError.new("Output block size cannot be calculated until init() called"));
      }
      let bitSize = this[_key].modulus.bitLength;
      if (dart.test(this[_forEncryption])) {
        return ((dart.notNull(bitSize) + 7) / 8)[$truncate]();
      } else {
        return ((dart.notNull(bitSize) + 7) / 8)[$truncate]() - 1;
      }
    }
    reset() {
    }
    init(forEncryption, params) {
      AsymmetricKeyParameterOfRSAAsymmetricKey()._check(params);
      this[_forEncryption] = forEncryption;
      this[_key] = params.key;
      if (api$.RSAPrivateKey.is(this[_key])) {
        let privKey = api$.RSAPrivateKey.as(this[_key]);
        let pSub1 = privKey.p['-'](core.BigInt.one);
        let qSub1 = privKey.q['-'](core.BigInt.one);
        this[_dP] = privKey.d.remainder(pSub1);
        this[_dQ] = privKey.d.remainder(qSub1);
        this[_qInv] = privKey.q.modInverse(privKey.p);
      }
    }
    processBlock(inp, inpOff, len, out, outOff) {
      let input = this[_convertInput](inp, inpOff, len);
      let output = this[_processBigInteger](input);
      return this[_convertOutput](output, out, outOff);
    }
    [_convertInput](inp, inpOff, len) {
      let inpLen = inp[$length];
      if (dart.notNull(inpLen) > dart.notNull(this.inputBlockSize) + 1) {
        dart.throw(new core.ArgumentError.new("Input too large for RSA cipher"));
      }
      if (inpLen === dart.notNull(this.inputBlockSize) + 1 && !dart.test(this[_forEncryption])) {
        dart.throw(new core.ArgumentError.new("Input too large for RSA cipher"));
      }
      let res = utils.decodeBigInt(inp[$sublist](inpOff, dart.notNull(inpOff) + dart.notNull(len)));
      if (dart.test(res['>='](this[_key].modulus))) {
        dart.throw(new core.ArgumentError.new("Input too large for RSA cipher"));
      }
      return res;
    }
    [_convertOutput](result, out, outOff) {
      let output = utils.encodeBigInt(result);
      if (dart.test(this[_forEncryption])) {
        if (output[$_get](0) === 0 && dart.notNull(output[$length]) > dart.notNull(this.outputBlockSize)) {
          let len = dart.notNull(output[$length]) - 1;
          out[$setRange](outOff, dart.notNull(outOff) + len, output[$sublist](1));
          return len;
        }
        if (dart.notNull(output[$length]) < dart.notNull(this.outputBlockSize)) {
          let len = this.outputBlockSize;
          out[$setRange](dart.notNull(outOff) + dart.notNull(len) - dart.notNull(output[$length]), dart.notNull(outOff) + dart.notNull(len), output);
          return len;
        }
      } else {
        if (output[$_get](0) === 0) {
          let len = dart.notNull(output[$length]) - 1;
          out[$setRange](outOff, dart.notNull(outOff) + len, output[$sublist](1));
          return len;
        }
      }
      out[$setAll](outOff, output);
      return output[$length];
    }
    [_processBigInteger](input) {
      if (api$.RSAPrivateKey.is(this[_key])) {
        let privKey = api$.RSAPrivateKey.as(this[_key]);
        let mP = null;
        let mQ = null;
        let h = null;
        let m = null;
        mP = input.remainder(privKey.p).modPow(this[_dP], privKey.p);
        mQ = input.remainder(privKey.q).modPow(this[_dQ], privKey.q);
        h = mP['-'](mQ);
        h = h['*'](this[_qInv]);
        h = h['%'](privKey.p);
        m = h['*'](privKey.q);
        m = m['+'](mQ);
        return m;
      } else {
        return input.modPow(this[_key].exponent, this[_key].modulus);
      }
    }
  };
  (rsa.RSAEngine.new = function() {
    this[_forEncryption] = null;
    this[_key] = null;
    this[_dP] = null;
    this[_dQ] = null;
    this[_qInv] = null;
    ;
  }).prototype = rsa.RSAEngine.prototype;
  dart.addTypeTests(rsa.RSAEngine);
  dart.setMethodSignature(rsa.RSAEngine, () => ({
    __proto__: dart.getMethods(rsa.RSAEngine.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, core.Object]),
    processBlock: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int]),
    [_convertInput]: dart.fnType(core.BigInt, [typed_data.Uint8List, core.int, core.int]),
    [_convertOutput]: dart.fnType(core.int, [core.BigInt, typed_data.Uint8List, core.int]),
    [_processBigInteger]: dart.fnType(core.BigInt, [core.BigInt])
  }));
  dart.setGetterSignature(rsa.RSAEngine, () => ({
    __proto__: dart.getGetters(rsa.RSAEngine.__proto__),
    algorithmName: core.String,
    inputBlockSize: core.int,
    outputBlockSize: core.int
  }));
  dart.setLibraryUri(rsa.RSAEngine, "package:pointycastle/asymmetric/rsa.dart");
  dart.setFieldSignature(rsa.RSAEngine, () => ({
    __proto__: dart.getFields(rsa.RSAEngine.__proto__),
    [_forEncryption]: dart.fieldType(core.bool),
    [_key]: dart.fieldType(api$.RSAAsymmetricKey),
    [_dP]: dart.fieldType(core.BigInt),
    [_dQ]: dart.fieldType(core.BigInt),
    [_qInv]: dart.fieldType(core.BigInt)
  }));
  dart.defineLazy(rsa.RSAEngine, {
    /*rsa.RSAEngine.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.AsymmetricBlockCipher), "RSA", dart.fn(() => new rsa.RSAEngine.new(), VoidToRSAEngine()));
    }
  });
  const modulus$ = dart.privateName(api$, "RSAAsymmetricKey.modulus");
  const exponent$ = dart.privateName(api$, "RSAAsymmetricKey.exponent");
  api$.RSAAsymmetricKey = class RSAAsymmetricKey extends core.Object {
    get modulus() {
      return this[modulus$];
    }
    set modulus(value) {
      super.modulus = value;
    }
    get exponent() {
      return this[exponent$];
    }
    set exponent(value) {
      super.exponent = value;
    }
    get n() {
      return this.modulus;
    }
  };
  (api$.RSAAsymmetricKey.new = function(modulus, exponent) {
    this[modulus$] = modulus;
    this[exponent$] = exponent;
    ;
  }).prototype = api$.RSAAsymmetricKey.prototype;
  dart.addTypeTests(api$.RSAAsymmetricKey);
  api$.RSAAsymmetricKey[dart.implements] = () => [api.AsymmetricKey];
  dart.setGetterSignature(api$.RSAAsymmetricKey, () => ({
    __proto__: dart.getGetters(api$.RSAAsymmetricKey.__proto__),
    n: core.BigInt
  }));
  dart.setLibraryUri(api$.RSAAsymmetricKey, "package:pointycastle/asymmetric/api.dart");
  dart.setFieldSignature(api$.RSAAsymmetricKey, () => ({
    __proto__: dart.getFields(api$.RSAAsymmetricKey.__proto__),
    modulus: dart.finalFieldType(core.BigInt),
    exponent: dart.finalFieldType(core.BigInt)
  }));
  const p$ = dart.privateName(api$, "RSAPrivateKey.p");
  const q$ = dart.privateName(api$, "RSAPrivateKey.q");
  api$.RSAPrivateKey = class RSAPrivateKey extends api$.RSAAsymmetricKey {
    get p() {
      return this[p$];
    }
    set p(value) {
      super.p = value;
    }
    get q() {
      return this[q$];
    }
    set q(value) {
      super.q = value;
    }
    get d() {
      return this.exponent;
    }
    _equals(other) {
      if (other == null) return false;
      if (other == null) return false;
      if (!api$.RSAPrivateKey.is(other)) return false;
      return dart.equals(dart.dload(other, 'n'), this.n) && dart.equals(dart.dload(other, 'd'), this.d);
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.modulus)) + dart.notNull(dart.hashCode(this.exponent));
    }
  };
  (api$.RSAPrivateKey.new = function(modulus, exponent, p, q) {
    this[p$] = p;
    this[q$] = q;
    api$.RSAPrivateKey.__proto__.new.call(this, modulus, exponent);
    ;
  }).prototype = api$.RSAPrivateKey.prototype;
  dart.addTypeTests(api$.RSAPrivateKey);
  api$.RSAPrivateKey[dart.implements] = () => [api.PrivateKey];
  dart.setGetterSignature(api$.RSAPrivateKey, () => ({
    __proto__: dart.getGetters(api$.RSAPrivateKey.__proto__),
    d: core.BigInt
  }));
  dart.setLibraryUri(api$.RSAPrivateKey, "package:pointycastle/asymmetric/api.dart");
  dart.setFieldSignature(api$.RSAPrivateKey, () => ({
    __proto__: dart.getFields(api$.RSAPrivateKey.__proto__),
    p: dart.finalFieldType(core.BigInt),
    q: dart.finalFieldType(core.BigInt)
  }));
  dart.defineExtensionMethods(api$.RSAPrivateKey, ['_equals']);
  dart.defineExtensionAccessors(api$.RSAPrivateKey, ['hashCode']);
  api$.RSAPublicKey = class RSAPublicKey extends api$.RSAAsymmetricKey {
    get e() {
      return this.exponent;
    }
    _equals(other) {
      if (other == null) return false;
      if (other == null) return false;
      if (!api$.RSAPublicKey.is(other)) return false;
      return dart.equals(dart.dload(other, 'n'), this.n) && dart.equals(dart.dload(other, 'e'), this.e);
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.modulus)) + dart.notNull(dart.hashCode(this.exponent));
    }
  };
  (api$.RSAPublicKey.new = function(modulus, exponent) {
    api$.RSAPublicKey.__proto__.new.call(this, modulus, exponent);
    ;
  }).prototype = api$.RSAPublicKey.prototype;
  dart.addTypeTests(api$.RSAPublicKey);
  api$.RSAPublicKey[dart.implements] = () => [api.PublicKey];
  dart.setGetterSignature(api$.RSAPublicKey, () => ({
    __proto__: dart.getGetters(api$.RSAPublicKey.__proto__),
    e: core.BigInt
  }));
  dart.setLibraryUri(api$.RSAPublicKey, "package:pointycastle/asymmetric/api.dart");
  dart.defineExtensionMethods(api$.RSAPublicKey, ['_equals']);
  dart.defineExtensionAccessors(api$.RSAPublicKey, ['hashCode']);
  const bytes$ = dart.privateName(api$, "RSASignature.bytes");
  api$.RSASignature = class RSASignature extends core.Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    toString() {
      return dart.toString(this.bytes);
    }
    _equals(other) {
      if (other == null) return false;
      if (other == null) return false;
      if (!api$.RSASignature.is(other)) return false;
      if (!dart.equals(dart.dload(dart.dload(other, 'bytes'), 'length'), this.bytes[$length])) return false;
      for (let i = 0; i < dart.notNull(this.bytes[$length]); i = i + 1) {
        if (!core.identical(this.bytes[$_get](i), dart.dsend(dart.dload(other, 'bytes'), '_get', [i]))) {
          return false;
        }
      }
      return true;
    }
    get hashCode() {
      return dart.hashCode(this.bytes);
    }
  };
  (api$.RSASignature.new = function(bytes) {
    this[bytes$] = bytes;
    ;
  }).prototype = api$.RSASignature.prototype;
  dart.addTypeTests(api$.RSASignature);
  api$.RSASignature[dart.implements] = () => [api.Signature];
  dart.setLibraryUri(api$.RSASignature, "package:pointycastle/asymmetric/api.dart");
  dart.setFieldSignature(api$.RSASignature, () => ({
    __proto__: dart.getFields(api$.RSASignature.__proto__),
    bytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  dart.defineExtensionMethods(api$.RSASignature, ['toString', '_equals']);
  dart.defineExtensionAccessors(api$.RSASignature, ['hashCode']);
  const _random = dart.privateName(pkcs1, "_random");
  const _forEncryption$ = dart.privateName(pkcs1, "_forEncryption");
  const _forPrivateKey = dart.privateName(pkcs1, "_forPrivateKey");
  const _engine$ = dart.privateName(pkcs1, "_engine");
  const _seed = dart.privateName(pkcs1, "_seed");
  const _encodeBlock = dart.privateName(pkcs1, "_encodeBlock");
  const _decodeBlock = dart.privateName(pkcs1, "_decodeBlock");
  pkcs1.PKCS1Encoding = class PKCS1Encoding extends base_asymmetric_block_cipher.BaseAsymmetricBlockCipher {
    get algorithmName() {
      return dart.str(this[_engine$].algorithmName) + "/PKCS1";
    }
    reset() {
    }
    [_seed]() {
      let random = math.Random.secure();
      let seeds = JSArrayOfint().of([]);
      for (let i = 0; i < 32; i = i + 1) {
        seeds[$add](random.nextInt(255));
      }
      return _native_typed_data.NativeUint8List.fromList(seeds);
    }
    init(forEncryption, params) {
      let akparams = null;
      if (ParametersWithRandomOfCipherParameters().is(params)) {
        let paramswr = params;
        this[_random] = paramswr.random;
        akparams = AsymmetricKeyParameterOfAsymmetricKey()._check(paramswr.parameters);
      } else {
        this[_random] = new fortuna_random.FortunaRandom.new();
        this[_random].seed(new api.KeyParameter.new(this[_seed]()));
        akparams = AsymmetricKeyParameterOfAsymmetricKey()._check(params);
      }
      this[_engine$].init(forEncryption, akparams);
      this[_forPrivateKey] = api.PrivateKey.is(akparams.key);
      this[_forEncryption$] = forEncryption;
    }
    get inputBlockSize() {
      let baseBlockSize = this[_engine$].inputBlockSize;
      if (dart.test(this[_forEncryption$])) {
        return dart.notNull(baseBlockSize) - 10;
      } else {
        return baseBlockSize;
      }
    }
    get outputBlockSize() {
      let baseBlockSize = this[_engine$].outputBlockSize;
      if (dart.test(this[_forEncryption$])) {
        return baseBlockSize;
      } else {
        return dart.notNull(baseBlockSize) - 10;
      }
    }
    processBlock(inp, inpOff, len, out, outOff) {
      if (dart.test(this[_forEncryption$])) {
        return this[_encodeBlock](inp, inpOff, len, out, outOff);
      } else {
        return this[_decodeBlock](inp, inpOff, len, out, outOff);
      }
    }
    [_encodeBlock](inp, inpOff, inpLen, out, outOff) {
      if (dart.notNull(inpLen) > dart.notNull(this.inputBlockSize)) {
        dart.throw(new core.ArgumentError.new("Input data too large"));
      }
      let block = _native_typed_data.NativeUint8List.new(this[_engine$].inputBlockSize);
      let padLength = dart.notNull(block[$length]) - dart.notNull(inpLen) - 1;
      if (dart.test(this[_forPrivateKey])) {
        block[$_set](0, 1);
        block[$fillRange](1, padLength, 255);
      } else {
        block[$_set](0, 2);
        block[$setRange](1, padLength, this[_random].nextBytes(padLength - 1));
        for (let i = 1; i < padLength; i = i + 1) {
          while (block[$_get](i) === 0) {
            block[$_set](i, this[_random].nextUint8());
          }
        }
      }
      block[$_set](padLength, 0);
      block[$setRange](padLength + 1, block[$length], inp[$sublist](inpOff));
      return this[_engine$].processBlock(block, 0, block[$length], out, outOff);
    }
    [_decodeBlock](inp, inpOff, inpLen, out, outOff) {
      let block = _native_typed_data.NativeUint8List.new(this[_engine$].inputBlockSize);
      let len = this[_engine$].processBlock(inp, inpOff, inpLen, block, 0);
      block = block[$sublist](0, len);
      if (dart.notNull(block[$length]) < dart.notNull(this.outputBlockSize)) {
        dart.throw(new core.ArgumentError.new("Block truncated"));
      }
      let type = block[$_get](0);
      if (dart.test(this[_forPrivateKey]) && type !== 2) {
        dart.throw(new core.ArgumentError.new("Unsupported block type for private key: " + dart.str(type)));
      }
      if (!dart.test(this[_forPrivateKey]) && type !== 1) {
        dart.throw(new core.ArgumentError.new("Unsupported block type for public key: " + dart.str(type)));
      }
      if (block[$length] != this[_engine$].outputBlockSize) {
        dart.throw(new core.ArgumentError.new("Block size is incorrect: " + dart.str(block[$length])));
      }
      let start = null;
      for (let t1 = start = 1; dart.dtest(dart.dsend(start, '<', [block[$length]])); start = dart.dsend(start, '+', [1])) {
        let pad = block[$_get](core.int._check(start));
        if (pad === 0) {
          break;
        }
        if (type === 1 && pad !== 255) {
          dart.throw(new core.ArgumentError.new("Incorrect block padding"));
        }
      }
      start = dart.dsend(start, '+', [1]);
      if (dart.dtest(dart.dsend(start, '>', [block[$length]])) || dart.dtest(dart.dsend(start, '<', [10]))) {
        dart.throw(new core.ArgumentError.new("No data found in block, only padding"));
      }
      let result = _native_typed_data.NativeUint8List.new(dart.asInt(dart.notNull(block[$length]) - dart.notNull(core.num._check(start))));
      let rlen = dart.notNull(block[$length]) - dart.notNull(core.num._check(start));
      out[$setRange](0, dart.asInt(rlen), block[$sublist](core.int._check(start)));
      return dart.asInt(rlen);
    }
  };
  (pkcs1.PKCS1Encoding.new = function(_engine) {
    this[_random] = null;
    this[_forEncryption$] = null;
    this[_forPrivateKey] = null;
    this[_engine$] = _engine;
    ;
  }).prototype = pkcs1.PKCS1Encoding.prototype;
  dart.addTypeTests(pkcs1.PKCS1Encoding);
  dart.setMethodSignature(pkcs1.PKCS1Encoding, () => ({
    __proto__: dart.getMethods(pkcs1.PKCS1Encoding.__proto__),
    reset: dart.fnType(dart.void, []),
    [_seed]: dart.fnType(typed_data.Uint8List, []),
    init: dart.fnType(dart.void, [core.bool, api.CipherParameters]),
    processBlock: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int]),
    [_encodeBlock]: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int]),
    [_decodeBlock]: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int])
  }));
  dart.setGetterSignature(pkcs1.PKCS1Encoding, () => ({
    __proto__: dart.getGetters(pkcs1.PKCS1Encoding.__proto__),
    algorithmName: core.String,
    inputBlockSize: core.int,
    outputBlockSize: core.int
  }));
  dart.setLibraryUri(pkcs1.PKCS1Encoding, "package:pointycastle/asymmetric/pkcs1.dart");
  dart.setFieldSignature(pkcs1.PKCS1Encoding, () => ({
    __proto__: dart.getFields(pkcs1.PKCS1Encoding.__proto__),
    [_engine$]: dart.finalFieldType(api.AsymmetricBlockCipher),
    [_random]: dart.fieldType(api.SecureRandom),
    [_forEncryption$]: dart.fieldType(core.bool),
    [_forPrivateKey]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(pkcs1.PKCS1Encoding, {
    /*pkcs1.PKCS1Encoding.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.AsymmetricBlockCipher), "/PKCS1", dart.fn((_, match) => dart.fn(() => {
        let underlyingCipher = api.AsymmetricBlockCipher.new(match.group(1));
        return new pkcs1.PKCS1Encoding.new(underlyingCipher);
      }, VoidToPKCS1Encoding()), StringAndMatchToFn$1()));
    },
    /*pkcs1.PKCS1Encoding._HEADER_LENGTH*/get _HEADER_LENGTH() {
      return 10;
    }
  });
  const _aes = dart.privateName(fortuna_random, "_aes");
  const _prng = dart.privateName(fortuna_random, "_prng");
  fortuna_random.FortunaRandom = class FortunaRandom extends core.Object {
    get algorithmName() {
      return "Fortuna";
    }
    seed(param) {
      api.KeyParameter._check(param);
      if (param.key[$length] !== 32) {
        dart.throw(new core.ArgumentError.new("Fortuna PRNG can only be used with 256 bits keys"));
      }
      let iv = _native_typed_data.NativeUint8List.new(16);
      iv[$_set](15, 1);
      this[_prng].seed(new (ParametersWithIVOfKeyParameter()).new(param, iv));
    }
    nextUint8() {
      return this[_prng].nextUint8();
    }
    nextUint16() {
      return this[_prng].nextUint16();
    }
    nextUint32() {
      return this[_prng].nextUint32();
    }
    nextBigInteger(bitLength) {
      return this[_prng].nextBigInteger(bitLength);
    }
    nextBytes(count) {
      if (dart.notNull(count) > 1048576) {
        dart.throw(new core.ArgumentError.new("Fortuna PRNG cannot generate more than 1MB of random data per invocation"));
      }
      return this[_prng].nextBytes(count);
    }
  };
  (fortuna_random.FortunaRandom.new = function() {
    this[_aes] = null;
    this[_prng] = null;
    this[_aes] = new aes_fast.AESFastEngine.new();
    this[_prng] = new auto_seed_block_ctr_random.AutoSeedBlockCtrRandom.new(this[_aes], false);
  }).prototype = fortuna_random.FortunaRandom.prototype;
  dart.addTypeTests(fortuna_random.FortunaRandom);
  fortuna_random.FortunaRandom[dart.implements] = () => [api.SecureRandom];
  dart.setMethodSignature(fortuna_random.FortunaRandom, () => ({
    __proto__: dart.getMethods(fortuna_random.FortunaRandom.__proto__),
    seed: dart.fnType(dart.void, [core.Object]),
    nextUint8: dart.fnType(core.int, []),
    nextUint16: dart.fnType(core.int, []),
    nextUint32: dart.fnType(core.int, []),
    nextBigInteger: dart.fnType(core.BigInt, [core.int]),
    nextBytes: dart.fnType(typed_data.Uint8List, [core.int])
  }));
  dart.setGetterSignature(fortuna_random.FortunaRandom, () => ({
    __proto__: dart.getGetters(fortuna_random.FortunaRandom.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(fortuna_random.FortunaRandom, "package:pointycastle/random/fortuna_random.dart");
  dart.setFieldSignature(fortuna_random.FortunaRandom, () => ({
    __proto__: dart.getFields(fortuna_random.FortunaRandom.__proto__),
    [_aes]: dart.fieldType(aes_fast.AESFastEngine),
    [_prng]: dart.fieldType(auto_seed_block_ctr_random.AutoSeedBlockCtrRandom)
  }));
  dart.defineLazy(fortuna_random.FortunaRandom, {
    /*fortuna_random.FortunaRandom.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.SecureRandom), "Fortuna", dart.fn(() => new fortuna_random.FortunaRandom.new(), VoidToFortunaRandom()));
    }
  });
  const _delegate = dart.privateName(auto_seed_block_ctr_random, "_delegate");
  const _inAutoReseed = dart.privateName(auto_seed_block_ctr_random, "_inAutoReseed");
  const _autoReseedKeyLength = dart.privateName(auto_seed_block_ctr_random, "_autoReseedKeyLength");
  const _reseedIV$ = dart.privateName(auto_seed_block_ctr_random, "_reseedIV");
  const _autoReseedIfNeededAfter = dart.privateName(auto_seed_block_ctr_random, "_autoReseedIfNeededAfter");
  const _doAutoReseed = dart.privateName(auto_seed_block_ctr_random, "_doAutoReseed");
  auto_seed_block_ctr_random.AutoSeedBlockCtrRandom = class AutoSeedBlockCtrRandom extends core.Object {
    get algorithmName() {
      return dart.str(this[_delegate].cipher.algorithmName) + "/CTR/AUTO-SEED-PRNG";
    }
    seed(params) {
      if (ParametersWithIVOfKeyParameter().is(params)) {
        this[_autoReseedKeyLength] = params.parameters.key[$length];
        this[_delegate].seed(params);
      } else if (api.KeyParameter.is(params)) {
        this[_autoReseedKeyLength] = params.key[$length];
        this[_delegate].seed(params);
      } else {
        dart.throw(new core.ArgumentError.new("Only types ParametersWithIV<KeyParameter> or KeyParameter allowed for seeding"));
      }
    }
    nextUint8() {
      return core.int._check(this[_autoReseedIfNeededAfter](dart.fn(() => this[_delegate].nextUint8(), VoidToint())));
    }
    nextUint16() {
      return core.int._check(this[_autoReseedIfNeededAfter](dart.fn(() => this[_delegate].nextUint16(), VoidToint())));
    }
    nextUint32() {
      return core.int._check(this[_autoReseedIfNeededAfter](dart.fn(() => this[_delegate].nextUint32(), VoidToint())));
    }
    nextBigInteger(bitLength) {
      return core.BigInt._check(this[_autoReseedIfNeededAfter](dart.fn(() => this[_delegate].nextBigInteger(bitLength), VoidToBigInt())));
    }
    nextBytes(count) {
      return typed_data.Uint8List._check(this[_autoReseedIfNeededAfter](dart.fn(() => this[_delegate].nextBytes(count), VoidToUint8List())));
    }
    [_autoReseedIfNeededAfter](closure) {
      if (dart.test(this[_inAutoReseed])) {
        return dart.dcall(closure, []);
      } else {
        this[_inAutoReseed] = true;
        let ret = dart.dcall(closure, []);
        this[_doAutoReseed]();
        this[_inAutoReseed] = false;
        return ret;
      }
    }
    [_doAutoReseed]() {
      let newKey = this.nextBytes(core.int._check(this[_autoReseedKeyLength]));
      let keyParam = new api.KeyParameter.new(newKey);
      let params = null;
      if (dart.test(this[_reseedIV$])) {
        params = new (ParametersWithIVOfKeyParameter()).new(keyParam, this.nextBytes(this[_delegate].cipher.blockSize));
      } else {
        params = keyParam;
      }
      this[_delegate].seed(api.CipherParameters._check(params));
    }
  };
  (auto_seed_block_ctr_random.AutoSeedBlockCtrRandom.new = function(cipher, _reseedIV = true) {
    this[_delegate] = null;
    this[_inAutoReseed] = false;
    this[_autoReseedKeyLength] = null;
    this[_reseedIV$] = _reseedIV;
    this[_delegate] = new block_ctr_random.BlockCtrRandom.new(cipher);
  }).prototype = auto_seed_block_ctr_random.AutoSeedBlockCtrRandom.prototype;
  dart.addTypeTests(auto_seed_block_ctr_random.AutoSeedBlockCtrRandom);
  auto_seed_block_ctr_random.AutoSeedBlockCtrRandom[dart.implements] = () => [api.SecureRandom];
  dart.setMethodSignature(auto_seed_block_ctr_random.AutoSeedBlockCtrRandom, () => ({
    __proto__: dart.getMethods(auto_seed_block_ctr_random.AutoSeedBlockCtrRandom.__proto__),
    seed: dart.fnType(dart.void, [api.CipherParameters]),
    nextUint8: dart.fnType(core.int, []),
    nextUint16: dart.fnType(core.int, []),
    nextUint32: dart.fnType(core.int, []),
    nextBigInteger: dart.fnType(core.BigInt, [core.int]),
    nextBytes: dart.fnType(typed_data.Uint8List, [core.int]),
    [_autoReseedIfNeededAfter]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_doAutoReseed]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(auto_seed_block_ctr_random.AutoSeedBlockCtrRandom, () => ({
    __proto__: dart.getGetters(auto_seed_block_ctr_random.AutoSeedBlockCtrRandom.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(auto_seed_block_ctr_random.AutoSeedBlockCtrRandom, "package:pointycastle/random/auto_seed_block_ctr_random.dart");
  dart.setFieldSignature(auto_seed_block_ctr_random.AutoSeedBlockCtrRandom, () => ({
    __proto__: dart.getFields(auto_seed_block_ctr_random.AutoSeedBlockCtrRandom.__proto__),
    [_delegate]: dart.fieldType(block_ctr_random.BlockCtrRandom),
    [_reseedIV$]: dart.finalFieldType(core.bool),
    [_inAutoReseed]: dart.fieldType(core.bool),
    [_autoReseedKeyLength]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(auto_seed_block_ctr_random.AutoSeedBlockCtrRandom, {
    /*auto_seed_block_ctr_random.AutoSeedBlockCtrRandom.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.regex(dart.wrapType(api.SecureRandom), "^(.*)/CTR/AUTO-SEED-PRNG$", dart.fn((_, match) => dart.fn(() => {
        let blockCipherName = match.group(1);
        let blockCipher = api.BlockCipher.new(blockCipherName);
        return new auto_seed_block_ctr_random.AutoSeedBlockCtrRandom.new(blockCipher);
      }, VoidToAutoSeedBlockCtrRandom()), StringAndMatchToFn$2()));
    }
  });
  const _input = dart.privateName(block_ctr_random, "_input");
  const _output = dart.privateName(block_ctr_random, "_output");
  const _used = dart.privateName(block_ctr_random, "_used");
  const _incrementInput = dart.privateName(block_ctr_random, "_incrementInput");
  const _randomBits = dart.privateName(secure_random_base, "_randomBits");
  secure_random_base.SecureRandomBase = class SecureRandomBase extends core.Object {
    nextUint16() {
      let b0 = this.nextUint8();
      let b1 = this.nextUint8();
      return ufixnum.clip16((dart.notNull(b1) << 8 | dart.notNull(b0)) >>> 0);
    }
    nextUint32() {
      let b0 = this.nextUint8();
      let b1 = this.nextUint8();
      let b2 = this.nextUint8();
      let b3 = this.nextUint8();
      return ufixnum.clip32((dart.notNull(b3) << 24 | dart.notNull(b2) << 16 >>> 0 | dart.notNull(b1) << 8 >>> 0 | dart.notNull(b0)) >>> 0);
    }
    nextBigInteger(bitLength) {
      return utils.decodeBigInt(this[_randomBits](bitLength));
    }
    nextBytes(count) {
      let bytes = _native_typed_data.NativeUint8List.new(count);
      for (let i = 0; i < dart.notNull(count); i = i + 1) {
        bytes[$_set](i, this.nextUint8());
      }
      return bytes;
    }
    [_randomBits](numBits) {
      let t3, t2;
      if (dart.notNull(numBits) < 0) {
        dart.throw(new core.ArgumentError.new("numBits must be non-negative"));
      }
      let numBytes = ((dart.notNull(numBits) + 7) / 8)[$truncate]();
      let randomBits = _native_typed_data.NativeUint8List.new(numBytes);
      if (numBytes > 0) {
        for (let i = 0; i < numBytes; i = i + 1) {
          randomBits[$_set](i, this.nextUint8());
        }
        let excessBits = 8 * numBytes - dart.notNull(numBits);
        t2 = randomBits;
        t3 = 0;
        t2[$_set](t3, (dart.notNull(t2[$_get](t3)) & (1)[$leftShift](8 - excessBits) - 1) >>> 0);
      }
      return randomBits;
    }
  };
  (secure_random_base.SecureRandomBase.new = function() {
    ;
  }).prototype = secure_random_base.SecureRandomBase.prototype;
  dart.addTypeTests(secure_random_base.SecureRandomBase);
  secure_random_base.SecureRandomBase[dart.implements] = () => [api.SecureRandom];
  dart.setMethodSignature(secure_random_base.SecureRandomBase, () => ({
    __proto__: dart.getMethods(secure_random_base.SecureRandomBase.__proto__),
    nextUint16: dart.fnType(core.int, []),
    nextUint32: dart.fnType(core.int, []),
    nextBigInteger: dart.fnType(core.BigInt, [core.int]),
    nextBytes: dart.fnType(typed_data.Uint8List, [core.int]),
    [_randomBits]: dart.fnType(core.List$(core.int), [core.int])
  }));
  dart.setLibraryUri(secure_random_base.SecureRandomBase, "package:pointycastle/src/impl/secure_random_base.dart");
  const cipher$ = dart.privateName(block_ctr_random, "BlockCtrRandom.cipher");
  block_ctr_random.BlockCtrRandom = class BlockCtrRandom extends secure_random_base.SecureRandomBase {
    get cipher() {
      return this[cipher$];
    }
    set cipher(value) {
      super.cipher = value;
    }
    get algorithmName() {
      return dart.str(this.cipher.algorithmName) + "/CTR/PRNG";
    }
    seed(params) {
      this[_used] = this[_output][$length];
      if (ParametersWithIVOfCipherParameters().is(params)) {
        this[_input][$setAll](0, params.iv);
        this.cipher.init(true, params.parameters);
      } else {
        this.cipher.init(true, params);
      }
    }
    nextUint8() {
      let t2;
      if (dart.equals(this[_used], this[_output][$length])) {
        this.cipher.processBlock(this[_input], 0, this[_output], 0);
        this[_used] = 0;
        this[_incrementInput]();
      }
      return ufixnum.clip8(this[_output][$_get](core.int._check((t2 = this[_used], this[_used] = dart.dsend(t2, '+', [1]), t2))));
    }
    [_incrementInput]() {
      let t3, t2;
      let offset = this[_input][$length];
      do {
        offset = dart.notNull(offset) - 1;
        t2 = this[_input];
        t3 = offset;
        t2[$_set](t3, dart.notNull(t2[$_get](t3)) + 1);
      } while (this[_input][$_get](offset) === 0);
    }
  };
  (block_ctr_random.BlockCtrRandom.new = function(cipher) {
    this[_input] = null;
    this[_output] = null;
    this[_used] = null;
    this[cipher$] = cipher;
    this[_input] = _native_typed_data.NativeUint8List.new(this.cipher.blockSize);
    this[_output] = _native_typed_data.NativeUint8List.new(this.cipher.blockSize);
    this[_used] = this[_output][$length];
  }).prototype = block_ctr_random.BlockCtrRandom.prototype;
  dart.addTypeTests(block_ctr_random.BlockCtrRandom);
  block_ctr_random.BlockCtrRandom[dart.implements] = () => [api.SecureRandom];
  dart.setMethodSignature(block_ctr_random.BlockCtrRandom, () => ({
    __proto__: dart.getMethods(block_ctr_random.BlockCtrRandom.__proto__),
    seed: dart.fnType(dart.void, [api.CipherParameters]),
    nextUint8: dart.fnType(core.int, []),
    [_incrementInput]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(block_ctr_random.BlockCtrRandom, () => ({
    __proto__: dart.getGetters(block_ctr_random.BlockCtrRandom.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(block_ctr_random.BlockCtrRandom, "package:pointycastle/random/block_ctr_random.dart");
  dart.setFieldSignature(block_ctr_random.BlockCtrRandom, () => ({
    __proto__: dart.getFields(block_ctr_random.BlockCtrRandom.__proto__),
    cipher: dart.finalFieldType(api.BlockCipher),
    [_input]: dart.fieldType(typed_data.Uint8List),
    [_output]: dart.fieldType(typed_data.Uint8List),
    [_used]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(block_ctr_random.BlockCtrRandom, {
    /*block_ctr_random.BlockCtrRandom.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.regex(dart.wrapType(api.SecureRandom), "^(.*)/CTR/PRNG$", dart.fn((_, match) => dart.fn(() => {
        let blockCipherName = match.group(1);
        let blockCipher = api.BlockCipher.new(blockCipherName);
        return new block_ctr_random.BlockCtrRandom.new(blockCipher);
      }, VoidToBlockCtrRandom()), StringAndMatchToFn$3()));
    }
  });
  const _forEncryption$0 = dart.privateName(aes_fast, "_forEncryption");
  const _workingKey$ = dart.privateName(aes_fast, "_workingKey");
  const _ROUNDS = dart.privateName(aes_fast, "_ROUNDS");
  const _C0 = dart.privateName(aes_fast, "_C0");
  const _C1 = dart.privateName(aes_fast, "_C1");
  const _C2 = dart.privateName(aes_fast, "_C2");
  const _C3 = dart.privateName(aes_fast, "_C3");
  const _unpackBlock = dart.privateName(aes_fast, "_unpackBlock");
  const _encryptBlock = dart.privateName(aes_fast, "_encryptBlock");
  const _packBlock = dart.privateName(aes_fast, "_packBlock");
  const _decryptBlock = dart.privateName(aes_fast, "_decryptBlock");
  base_block_cipher.BaseBlockCipher = class BaseBlockCipher extends core.Object {
    process(data) {
      let out = _native_typed_data.NativeUint8List.new(this.blockSize);
      let len = this.processBlock(data, 0, out, 0);
      return out[$sublist](0, len);
    }
  };
  (base_block_cipher.BaseBlockCipher.new = function() {
    ;
  }).prototype = base_block_cipher.BaseBlockCipher.prototype;
  dart.addTypeTests(base_block_cipher.BaseBlockCipher);
  base_block_cipher.BaseBlockCipher[dart.implements] = () => [api.BlockCipher];
  dart.setMethodSignature(base_block_cipher.BaseBlockCipher, () => ({
    __proto__: dart.getMethods(base_block_cipher.BaseBlockCipher.__proto__),
    process: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List])
  }));
  dart.setLibraryUri(base_block_cipher.BaseBlockCipher, "package:pointycastle/src/impl/base_block_cipher.dart");
  aes_fast.AESFastEngine = class AESFastEngine extends base_block_cipher.BaseBlockCipher {
    get algorithmName() {
      return "AES";
    }
    get blockSize() {
      return 16;
    }
    reset() {
      this[_ROUNDS] = 0;
      this[_C0] = this[_C1] = this[_C2] = this[_C3] = 0;
      this[_forEncryption$0] = false;
      this[_workingKey$] = null;
    }
    init(forEncryption, params) {
      api.KeyParameter._check(params);
      let key = params.key;
      let KC = (dart.notNull(key[$lengthInBytes]) / 4)[$floor]();
      if (KC !== 4 && KC !== 6 && KC !== 8 || KC * 4 !== key[$lengthInBytes]) {
        dart.throw(new core.ArgumentError.new("Key length must be 128/192/256 bits"));
      }
      this[_forEncryption$0] = forEncryption;
      this[_ROUNDS] = KC + 6;
      this[_workingKey$] = ListOfListOfint().generate(dart.notNull(this[_ROUNDS]) + 1, dart.fn(i => ListOfint().new(4), intToListOfint()));
      let keyView = typed_data.ByteData.view(params.key[$buffer], params.key[$offsetInBytes], params.key[$length]);
      for (let i = 0, t = 0; i < dart.notNull(key[$lengthInBytes]); i = i + 4, t = t + 1) {
        let value = ufixnum.unpack32(keyView, i, typed_data.Endian.little);
        this[_workingKey$][$_get](t[$rightShift](2))[$_set](t & 3, value);
      }
      let k = dart.notNull(this[_ROUNDS]) + 1 << 2 >>> 0;
      for (let i = KC; i < k; i = i + 1) {
        let temp = this[_workingKey$][$_get]((i - 1)[$rightShift](2))[$_get](i - 1 & 3)[$toInt]();
        if (i[$modulo](KC) === 0) {
          temp = (dart.notNull(aes_fast._subWord(aes_fast._shift(temp, 8))) ^ dart.notNull(aes_fast._rcon[$_get]((i / KC - 1)[$floor]()))) >>> 0;
        } else if (KC > 6 && i[$modulo](KC) === 4) {
          temp = aes_fast._subWord(temp);
        }
        let value = (dart.notNull(this[_workingKey$][$_get]((i - KC)[$rightShift](2))[$_get](i - KC & 3)) ^ dart.notNull(temp)) >>> 0;
        this[_workingKey$][$_get](i[$rightShift](2))[$_set](i & 3, value);
      }
      if (!dart.test(forEncryption)) {
        for (let j = 1; j < dart.notNull(this[_ROUNDS]); j = j + 1) {
          for (let i = 0; i < 4; i = i + 1) {
            let value = aes_fast._inv_mcol(this[_workingKey$][$_get](j)[$_get](i)[$toInt]());
            this[_workingKey$][$_get](j)[$_set](i, value);
          }
        }
      }
    }
    processBlock(inp, inpOff, out, outOff) {
      if (this[_workingKey$] == null) {
        dart.throw(new core.StateError.new("AES engine not initialised"));
      }
      if (dart.notNull(inpOff) + 32 / 2 > dart.notNull(inp[$lengthInBytes])) {
        dart.throw(new core.ArgumentError.new("Input buffer too short"));
      }
      if (dart.notNull(outOff) + 32 / 2 > dart.notNull(out[$lengthInBytes])) {
        dart.throw(new core.ArgumentError.new("Output buffer too short"));
      }
      let inpView = typed_data.ByteData.view(inp[$buffer], inp[$offsetInBytes], inp[$length]);
      let outView = typed_data.ByteData.view(out[$buffer], out[$offsetInBytes], out[$length]);
      if (dart.test(this[_forEncryption$0])) {
        this[_unpackBlock](inpView, inpOff);
        this[_encryptBlock](this[_workingKey$]);
        this[_packBlock](outView, outOff);
      } else {
        this[_unpackBlock](inpView, inpOff);
        this[_decryptBlock](this[_workingKey$]);
        this[_packBlock](outView, outOff);
      }
      return 16;
    }
    [_encryptBlock](KW) {
      let r = null;
      let r0 = null;
      let r1 = null;
      let r2 = null;
      let r3 = null;
      this[_C0] = (dart.notNull(this[_C0]) ^ KW[$_get](0)[$_get](0)[$toInt]()) >>> 0;
      this[_C1] = (dart.notNull(this[_C1]) ^ KW[$_get](0)[$_get](1)[$toInt]()) >>> 0;
      this[_C2] = (dart.notNull(this[_C2]) ^ KW[$_get](0)[$_get](2)[$toInt]()) >>> 0;
      this[_C3] = (dart.notNull(this[_C3]) ^ KW[$_get](0)[$_get](3)[$toInt]()) >>> 0;
      r = 1;
      while (dart.notNull(r) < dart.notNull(this[_ROUNDS]) - 1) {
        r0 = (dart.notNull(aes_fast._T0[$_get](dart.notNull(this[_C0]) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(this[_C1]) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(this[_C2]) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](this[_C3][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](0)[$toInt]()) >>> 0;
        r1 = (dart.notNull(aes_fast._T0[$_get](dart.notNull(this[_C1]) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(this[_C2]) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(this[_C3]) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](this[_C0][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](1)[$toInt]()) >>> 0;
        r2 = (dart.notNull(aes_fast._T0[$_get](dart.notNull(this[_C2]) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(this[_C3]) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(this[_C0]) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](this[_C1][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](2)[$toInt]()) >>> 0;
        r3 = (dart.notNull(aes_fast._T0[$_get](dart.notNull(this[_C3]) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(this[_C0]) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(this[_C1]) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](this[_C2][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](3)[$toInt]()) >>> 0;
        r = dart.notNull(r) + 1;
        this[_C0] = (dart.notNull(aes_fast._T0[$_get](dart.notNull(r0) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(r1) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(r2) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](r3[$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](0)[$toInt]()) >>> 0;
        this[_C1] = (dart.notNull(aes_fast._T0[$_get](dart.notNull(r1) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(r2) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(r3) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](r0[$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](1)[$toInt]()) >>> 0;
        this[_C2] = (dart.notNull(aes_fast._T0[$_get](dart.notNull(r2) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(r3) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(r0) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](r1[$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](2)[$toInt]()) >>> 0;
        this[_C3] = (dart.notNull(aes_fast._T0[$_get](dart.notNull(r3) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(r0) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(r1) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](r2[$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](3)[$toInt]()) >>> 0;
        r = dart.notNull(r) + 1;
      }
      r0 = (dart.notNull(aes_fast._T0[$_get](dart.notNull(this[_C0]) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(this[_C1]) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(this[_C2]) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](this[_C3][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](0)[$toInt]()) >>> 0;
      r1 = (dart.notNull(aes_fast._T0[$_get](dart.notNull(this[_C1]) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(this[_C2]) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(this[_C3]) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](this[_C0][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](1)[$toInt]()) >>> 0;
      r2 = (dart.notNull(aes_fast._T0[$_get](dart.notNull(this[_C2]) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(this[_C3]) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(this[_C0]) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](this[_C1][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](2)[$toInt]()) >>> 0;
      r3 = (dart.notNull(aes_fast._T0[$_get](dart.notNull(this[_C3]) & 255)) ^ dart.notNull(aes_fast._T1[$_get](dart.notNull(this[_C0]) >> 8 & 255)) ^ dart.notNull(aes_fast._T2[$_get](dart.notNull(this[_C1]) >> 16 & 255)) ^ dart.notNull(aes_fast._T3[$_get](this[_C2][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](3)[$toInt]()) >>> 0;
      r = dart.notNull(r) + 1;
      this[_C0] = (dart.notNull(aes_fast._S[$_get](dart.notNull(r0) & 255)) & 255 ^ (dart.notNull(aes_fast._S[$_get](dart.notNull(r1) >> 8 & 255)) & 255) << 8 ^ (dart.notNull(aes_fast._S[$_get](dart.notNull(r2) >> 16 & 255)) & 255) << 16 ^ dart.notNull(aes_fast._S[$_get](r3[$rightShift](24) & 255)) << 24 >>> 0 ^ KW[$_get](r)[$_get](0)[$toInt]()) >>> 0;
      this[_C1] = (dart.notNull(aes_fast._S[$_get](dart.notNull(r1) & 255)) & 255 ^ (dart.notNull(aes_fast._S[$_get](dart.notNull(r2) >> 8 & 255)) & 255) << 8 ^ (dart.notNull(aes_fast._S[$_get](dart.notNull(r3) >> 16 & 255)) & 255) << 16 ^ dart.notNull(aes_fast._S[$_get](r0[$rightShift](24) & 255)) << 24 >>> 0 ^ KW[$_get](r)[$_get](1)[$toInt]()) >>> 0;
      this[_C2] = (dart.notNull(aes_fast._S[$_get](dart.notNull(r2) & 255)) & 255 ^ (dart.notNull(aes_fast._S[$_get](dart.notNull(r3) >> 8 & 255)) & 255) << 8 ^ (dart.notNull(aes_fast._S[$_get](dart.notNull(r0) >> 16 & 255)) & 255) << 16 ^ dart.notNull(aes_fast._S[$_get](r1[$rightShift](24) & 255)) << 24 >>> 0 ^ KW[$_get](r)[$_get](2)[$toInt]()) >>> 0;
      this[_C3] = (dart.notNull(aes_fast._S[$_get](dart.notNull(r3) & 255)) & 255 ^ (dart.notNull(aes_fast._S[$_get](dart.notNull(r0) >> 8 & 255)) & 255) << 8 ^ (dart.notNull(aes_fast._S[$_get](dart.notNull(r1) >> 16 & 255)) & 255) << 16 ^ dart.notNull(aes_fast._S[$_get](r2[$rightShift](24) & 255)) << 24 >>> 0 ^ KW[$_get](r)[$_get](3)[$toInt]()) >>> 0;
    }
    [_decryptBlock](KW) {
      let r = null;
      let r0 = null;
      let r1 = null;
      let r2 = null;
      let r3 = null;
      this[_C0] = (dart.notNull(this[_C0]) ^ KW[$_get](this[_ROUNDS])[$_get](0)[$toInt]()) >>> 0;
      this[_C1] = (dart.notNull(this[_C1]) ^ KW[$_get](this[_ROUNDS])[$_get](1)[$toInt]()) >>> 0;
      this[_C2] = (dart.notNull(this[_C2]) ^ KW[$_get](this[_ROUNDS])[$_get](2)[$toInt]()) >>> 0;
      this[_C3] = (dart.notNull(this[_C3]) ^ KW[$_get](this[_ROUNDS])[$_get](3)[$toInt]()) >>> 0;
      r = dart.notNull(this[_ROUNDS]) - 1;
      while (dart.notNull(r) > 1) {
        r0 = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(this[_C0]) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(this[_C3]) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(this[_C2]) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](this[_C1][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](0)[$toInt]()) >>> 0;
        r1 = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(this[_C1]) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(this[_C0]) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(this[_C3]) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](this[_C2][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](1)[$toInt]()) >>> 0;
        r2 = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(this[_C2]) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(this[_C1]) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(this[_C0]) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](this[_C3][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](2)[$toInt]()) >>> 0;
        r3 = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(this[_C3]) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(this[_C2]) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(this[_C1]) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](this[_C0][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](3)[$toInt]()) >>> 0;
        r = dart.notNull(r) - 1;
        this[_C0] = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(r0) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(r3) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(r2) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](r1[$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](0)[$toInt]()) >>> 0;
        this[_C1] = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(r1) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(r0) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(r3) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](r2[$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](1)[$toInt]()) >>> 0;
        this[_C2] = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(r2) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(r1) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(r0) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](r3[$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](2)[$toInt]()) >>> 0;
        this[_C3] = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(r3) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(r2) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(r1) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](r0[$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](3)[$toInt]()) >>> 0;
        r = dart.notNull(r) - 1;
      }
      r0 = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(this[_C0]) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(this[_C3]) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(this[_C2]) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](this[_C1][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](0)[$toInt]()) >>> 0;
      r1 = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(this[_C1]) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(this[_C0]) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(this[_C3]) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](this[_C2][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](1)[$toInt]()) >>> 0;
      r2 = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(this[_C2]) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(this[_C1]) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(this[_C0]) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](this[_C3][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](2)[$toInt]()) >>> 0;
      r3 = (dart.notNull(aes_fast._Tinv0[$_get](dart.notNull(this[_C3]) & 255)) ^ dart.notNull(aes_fast._Tinv1[$_get](dart.notNull(this[_C2]) >> 8 & 255)) ^ dart.notNull(aes_fast._Tinv2[$_get](dart.notNull(this[_C1]) >> 16 & 255)) ^ dart.notNull(aes_fast._Tinv3[$_get](this[_C0][$rightShift](24) & 255)) ^ KW[$_get](r)[$_get](3)[$toInt]()) >>> 0;
      this[_C0] = (dart.notNull(aes_fast._Si[$_get](dart.notNull(r0) & 255)) & 255 ^ (dart.notNull(aes_fast._Si[$_get](dart.notNull(r3) >> 8 & 255)) & 255) << 8 ^ (dart.notNull(aes_fast._Si[$_get](dart.notNull(r2) >> 16 & 255)) & 255) << 16 ^ dart.notNull(aes_fast._Si[$_get](r1[$rightShift](24) & 255)) << 24 >>> 0 ^ KW[$_get](0)[$_get](0)[$toInt]()) >>> 0;
      this[_C1] = (dart.notNull(aes_fast._Si[$_get](dart.notNull(r1) & 255)) & 255 ^ (dart.notNull(aes_fast._Si[$_get](dart.notNull(r0) >> 8 & 255)) & 255) << 8 ^ (dart.notNull(aes_fast._Si[$_get](dart.notNull(r3) >> 16 & 255)) & 255) << 16 ^ dart.notNull(aes_fast._Si[$_get](r2[$rightShift](24) & 255)) << 24 >>> 0 ^ KW[$_get](0)[$_get](1)[$toInt]()) >>> 0;
      this[_C2] = (dart.notNull(aes_fast._Si[$_get](dart.notNull(r2) & 255)) & 255 ^ (dart.notNull(aes_fast._Si[$_get](dart.notNull(r1) >> 8 & 255)) & 255) << 8 ^ (dart.notNull(aes_fast._Si[$_get](dart.notNull(r0) >> 16 & 255)) & 255) << 16 ^ dart.notNull(aes_fast._Si[$_get](r3[$rightShift](24) & 255)) << 24 >>> 0 ^ KW[$_get](0)[$_get](2)[$toInt]()) >>> 0;
      this[_C3] = (dart.notNull(aes_fast._Si[$_get](dart.notNull(r3) & 255)) & 255 ^ (dart.notNull(aes_fast._Si[$_get](dart.notNull(r2) >> 8 & 255)) & 255) << 8 ^ (dart.notNull(aes_fast._Si[$_get](dart.notNull(r1) >> 16 & 255)) & 255) << 16 ^ dart.notNull(aes_fast._Si[$_get](r0[$rightShift](24) & 255)) << 24 >>> 0 ^ KW[$_get](0)[$_get](3)[$toInt]()) >>> 0;
    }
    [_unpackBlock](view, off) {
      this[_C0] = ufixnum.unpack32(view, off, typed_data.Endian.little);
      this[_C1] = ufixnum.unpack32(view, dart.notNull(off) + 4, typed_data.Endian.little);
      this[_C2] = ufixnum.unpack32(view, dart.notNull(off) + 8, typed_data.Endian.little);
      this[_C3] = ufixnum.unpack32(view, dart.notNull(off) + 12, typed_data.Endian.little);
    }
    [_packBlock](view, off) {
      ufixnum.pack32(this[_C0], view, off, typed_data.Endian.little);
      ufixnum.pack32(this[_C1], view, dart.notNull(off) + 4, typed_data.Endian.little);
      ufixnum.pack32(this[_C2], view, dart.notNull(off) + 8, typed_data.Endian.little);
      ufixnum.pack32(this[_C3], view, dart.notNull(off) + 12, typed_data.Endian.little);
    }
  };
  (aes_fast.AESFastEngine.new = function() {
    this[_forEncryption$0] = null;
    this[_workingKey$] = null;
    this[_ROUNDS] = null;
    this[_C0] = null;
    this[_C1] = null;
    this[_C2] = null;
    this[_C3] = null;
    ;
  }).prototype = aes_fast.AESFastEngine.prototype;
  dart.addTypeTests(aes_fast.AESFastEngine);
  dart.setMethodSignature(aes_fast.AESFastEngine, () => ({
    __proto__: dart.getMethods(aes_fast.AESFastEngine.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, core.Object]),
    processBlock: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int]),
    [_encryptBlock]: dart.fnType(dart.void, [core.List$(core.List$(core.int))]),
    [_decryptBlock]: dart.fnType(dart.void, [core.List$(core.List$(core.int))]),
    [_unpackBlock]: dart.fnType(dart.void, [typed_data.ByteData, core.int]),
    [_packBlock]: dart.fnType(dart.void, [typed_data.ByteData, core.int])
  }));
  dart.setGetterSignature(aes_fast.AESFastEngine, () => ({
    __proto__: dart.getGetters(aes_fast.AESFastEngine.__proto__),
    algorithmName: core.String,
    blockSize: core.int
  }));
  dart.setLibraryUri(aes_fast.AESFastEngine, "package:pointycastle/block/aes_fast.dart");
  dart.setFieldSignature(aes_fast.AESFastEngine, () => ({
    __proto__: dart.getFields(aes_fast.AESFastEngine.__proto__),
    [_forEncryption$0]: dart.fieldType(core.bool),
    [_workingKey$]: dart.fieldType(core.List$(core.List$(core.int))),
    [_ROUNDS]: dart.fieldType(core.int),
    [_C0]: dart.fieldType(core.int),
    [_C1]: dart.fieldType(core.int),
    [_C2]: dart.fieldType(core.int),
    [_C3]: dart.fieldType(core.int)
  }));
  dart.defineLazy(aes_fast.AESFastEngine, {
    /*aes_fast.AESFastEngine.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.BlockCipher), "AES", dart.fn(() => new aes_fast.AESFastEngine.new(), VoidToAESFastEngine()));
    },
    /*aes_fast.AESFastEngine._BLOCK_SIZE*/get _BLOCK_SIZE() {
      return 16;
    }
  });
  aes_fast._shift = function _shift(r, shift) {
    return ufixnum.rotr32(r, shift);
  };
  aes_fast._FFmulX = function _FFmulX(x) {
    let lsr = ufixnum.shiftr32((dart.notNull(x) & 2155905152.0) >>> 0, 7);
    return ((dart.notNull(x) & 2139062143) >>> 0 << 1 ^ dart.notNull(lsr) * 27) >>> 0;
  };
  aes_fast._inv_mcol = function _inv_mcol(x) {
    let f2 = aes_fast._FFmulX(x);
    let f4 = aes_fast._FFmulX(f2);
    let f8 = aes_fast._FFmulX(f4);
    let f9 = (dart.notNull(x) ^ dart.notNull(f8)) >>> 0;
    return (dart.notNull(f2) ^ dart.notNull(f4) ^ dart.notNull(f8) ^ dart.notNull(aes_fast._shift((dart.notNull(f2) ^ f9) >>> 0, 8)) ^ dart.notNull(aes_fast._shift((dart.notNull(f4) ^ f9) >>> 0, 16)) ^ dart.notNull(aes_fast._shift(f9, 24))) >>> 0;
  };
  aes_fast._subWord = function _subWord(x) {
    return (dart.notNull(aes_fast._S[$_get](dart.notNull(x) & 255)) & 255 | (dart.notNull(aes_fast._S[$_get](dart.notNull(x) >> 8 & 255)) & 255) << 8 | (dart.notNull(aes_fast._S[$_get](dart.notNull(x) >> 16 & 255)) & 255) << 16 | dart.notNull(aes_fast._S[$_get](x[$rightShift](24) & 255)) << 24 >>> 0) >>> 0;
  };
  dart.defineLazy(aes_fast, {
    /*aes_fast._m1*/get _m1() {
      return 2155905152.0;
    },
    /*aes_fast._m2*/get _m2() {
      return 2139062143;
    },
    /*aes_fast._m3*/get _m3() {
      return 27;
    },
    /*aes_fast._S*/get _S() {
      return JSArrayOfint().of([99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22]);
    },
    /*aes_fast._Si*/get _Si() {
      return JSArrayOfint().of([82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125]);
    },
    /*aes_fast._rcon*/get _rcon() {
      return JSArrayOfint().of([1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145]);
    },
    /*aes_fast._T0*/get _T0() {
      return JSArrayOfint().of([2774754246, 2222750968, 2574743534, 2373680118, 234025727, 3177933782, 2976870366, 1422247313, 1345335392, 50397442, 2842126286, 2099981142, 436141799, 1658312629, 3870010189, 2591454956, 1170918031, 2642575903, 1086966153, 2273148410, 368769775, 3948501426, 3376891790, 200339707, 3970805057, 1742001331, 4255294047, 3937382213, 3214711843, 4154762323, 2524082916, 1539358875, 3266819957, 486407649, 2928907069, 1780885068, 1513502316, 1094664062, 49805301, 1338821763, 1546925160, 4104496465, 887481809, 150073849, 2473685474, 1943591083, 1395732834, 1058346282, 201589768, 1388824469, 1696801606, 1589887901, 672667696, 2711000631, 251987210, 3046808111, 151455502, 907153956, 2608889883, 1038279391, 652995533, 1764173646, 3451040383, 2675275242, 453576978, 2659418909, 1949051992, 773462580, 756751158, 2993581788, 3998898868, 4221608027, 4132590244, 1295727478, 1641469623, 3467883389, 2066295122, 1055122397, 1898917726, 2542044179, 4115878822, 1758581177, 0, 753790401, 1612718144, 536673507, 3367088505, 3982187446, 3194645204, 1187761037, 3653156455, 1262041458, 3729410708, 3561770136, 3898103984, 1255133061, 1808847035, 720367557, 3853167183, 385612781, 3309519750, 3612167578, 1429418854, 2491778321, 3477423498, 284817897, 100794884, 2172616702, 4031795360, 1144798328, 3131023141, 3819481163, 4082192802, 4272137053, 3225436288, 2324664069, 2912064063, 3164445985, 1211644016, 83228145, 3753688163, 3249976951, 1977277103, 1663115586, 806359072, 452984805, 250868733, 1842533055, 1288555905, 336333848, 890442534, 804056259, 3781124030, 2727843637, 3427026056, 957814574, 1472513171, 4071073621, 2189328124, 1195195770, 2892260552, 3881655738, 723065138, 2507371494, 2690670784, 2558624025, 3511635870, 2145180835, 1713513028, 2116692564, 2878378043, 2206763019, 3393603212, 703524551, 3552098411, 1007948840, 2044649127, 3797835452, 487262998, 1994120109, 1004593371, 1446130276, 1312438900, 503974420, 3679013266, 168166924, 1814307912, 3831258296, 1573044895, 1859376061, 4021070915, 2791465668, 2828112185, 2761266481, 937747667, 2339994098, 854058965, 1137232011, 1496790894, 3077402074, 2358086913, 1691735473, 3528347292, 3769215305, 3027004632, 4199962284, 133494003, 636152527, 2942657994, 2390391540, 3920539207, 403179536, 3585784431, 2289596656, 1864705354, 1915629148, 605822008, 4054230615, 3350508659, 1371981463, 602466507, 2094914977, 2624877800, 555687742, 3712699286, 3703422305, 2257292045, 2240449039, 2423288032, 1111375484, 3300242801, 2858837708, 3628615824, 84083462, 32962295, 302911004, 2741068226, 1597322602, 4183250862, 3501832553, 2441512471, 1489093017, 656219450, 3114180135, 954327513, 335083755, 3013122091, 856756514, 3144247762, 1893325225, 2307821063, 2811532339, 3063651117, 572399164, 2458355477, 552200649, 1238290055, 4283782570, 2015897680, 2061492133, 2408352771, 4171342169, 2156497161, 386731290, 3669999461, 837215959, 3326231172, 3093850320, 3275833730, 2962856233, 1999449434, 286199582, 3417354363, 4233385128, 3602627437, 974525996]);
    },
    /*aes_fast._T1*/get _T1() {
      return JSArrayOfint().of([1667483301, 2088564868, 2004348569, 2071721613, 4076011277, 1802229437, 1869602481, 3318059348, 808476752, 16843267, 1734856361, 724260477, 4278118169, 3621238114, 2880130534, 1987505306, 3402272581, 2189565853, 3385428288, 2105408135, 4210749205, 1499050731, 1195871945, 4042324747, 2913812972, 3570709351, 2728550397, 2947499498, 2627478463, 2762232823, 1920132246, 3233848155, 3082253762, 4261273884, 2475900334, 640044138, 909536346, 1061125697, 4160222466, 3435955023, 875849820, 2779075060, 3857043764, 4059166984, 1903288979, 3638078323, 825320019, 353708607, 67373068, 3351745874, 589514341, 3284376926, 404238376, 2526427041, 84216335, 2593796021, 117902857, 303178806, 2155879323, 3806519101, 3958099238, 656887401, 2998042573, 1970662047, 151589403, 2206408094, 741103732, 437924910, 454768173, 1852759218, 1515893998, 2694863867, 1381147894, 993752653, 3604395873, 3014884814, 690573947, 3823361342, 791633521, 2223248279, 1397991157, 3520182632, 0, 3991781676, 538984544, 4244431647, 2981198280, 1532737261, 1785386174, 3419114822, 3200149465, 960066123, 1246401758, 1280088276, 1482207464, 3486483786, 3503340395, 4025468202, 2863288293, 4227591446, 1128498885, 1296931543, 859006549, 2240090516, 1162185423, 4193904912, 33686534, 2139094657, 1347461360, 1010595908, 2678007226, 2829601763, 1364304627, 2745392638, 1077969088, 2408514954, 2459058093, 2644320700, 943222856, 4126535940, 3166462943, 3065411521, 3671764853, 555827811, 269492272, 4294960410, 4092853518, 3537026925, 3452797260, 202119188, 320022069, 3974939439, 1600110305, 2543269282, 1145342156, 387395129, 3301217111, 2812761586, 2122251394, 1027439175, 1684326572, 1566423783, 421081643, 1936975509, 1616953504, 2172721560, 1330618065, 3705447295, 572671078, 707417214, 2425371563, 2290617219, 1179028682, 4008625961, 3099093971, 336865340, 3739133817, 1583267042, 185275933, 3688607094, 3772832571, 842163286, 976909390, 168432670, 1229558491, 101059594, 606357612, 1549580516, 3267534685, 3553869166, 2896970735, 1650640038, 2442213800, 2509582756, 3840201527, 2038035083, 3890730290, 3368586051, 926379609, 1835915959, 2374828428, 3587551588, 1313774802, 2846444000, 1819072692, 1448520954, 4109693703, 3941256997, 1701169839, 2054878350, 2930657257, 134746136, 3132780501, 2021191816, 623200879, 774790258, 471611428, 2795919345, 3031724999, 3334903633, 3907570467, 3722289532, 1953818780, 522141217, 1263245021, 3183305180, 2341145990, 2324303749, 1886445712, 1044282434, 3048567236, 1718013098, 1212715224, 50529797, 4143380225, 235805714, 1633796771, 892693087, 1465364217, 3115936208, 2256934801, 3250690392, 488454695, 2661164985, 3789674808, 4177062675, 2560109491, 286335539, 1768542907, 3654920560, 2391672713, 2492740519, 2610638262, 505297954, 2273777042, 3924412704, 3469641545, 1431677695, 673730680, 3755976058, 2357986191, 2711706104, 2307459456, 218962455, 3216991706, 3873888049, 1111655622, 1751699640, 1094812355, 2576951728, 757946999, 252648977, 2964356043, 1414834428, 3149622742, 370551866]);
    },
    /*aes_fast._T2*/get _T2() {
      return JSArrayOfint().of([1673962851, 2096661628, 2012125559, 2079755643, 4076801522, 1809235307, 1876865391, 3314635973, 811618352, 16909057, 1741597031, 727088427, 4276558334, 3618988759, 2874009259, 1995217526, 3398387146, 2183110018, 3381215433, 2113570685, 4209972730, 1504897881, 1200539975, 4042984432, 2906778797, 3568527316, 2724199842, 2940594863, 2619588508, 2756966308, 1927583346, 3231407040, 3077948087, 4259388669, 2470293139, 642542118, 913070646, 1065238847, 4160029431, 3431157708, 879254580, 2773611685, 3855693029, 4059629809, 1910674289, 3635114968, 828527409, 355090197, 67636228, 3348452039, 591815971, 3281870531, 405809176, 2520228246, 84545285, 2586817946, 118360327, 304363026, 2149292928, 3806281186, 3956090603, 659450151, 2994720178, 1978310517, 152181513, 2199756419, 743994412, 439627290, 456535323, 1859957358, 1521806938, 2690382752, 1386542674, 997608763, 3602342358, 3011366579, 693271337, 3822927587, 794718511, 2215876484, 1403450707, 3518589137, 0, 3988860141, 541089824, 4242743292, 2977548465, 1538714971, 1792327274, 3415033547, 3194476990, 963791673, 1251270218, 1285084236, 1487988824, 3481619151, 3501943760, 4022676207, 2857362858, 4226619131, 1132905795, 1301993293, 862344499, 2232521861, 1166724933, 4192801017, 33818114, 2147385727, 1352724560, 1014514748, 2670049951, 2823545768, 1369633617, 2740846243, 1082179648, 2399505039, 2453646738, 2636233885, 946882616, 4126213365, 3160661948, 3061301686, 3668932058, 557998881, 270544912, 4293204735, 4093447923, 3535760850, 3447803085, 202904588, 321271059, 3972214764, 1606345055, 2536874647, 1149815876, 388905239, 3297990596, 2807427751, 2130477694, 1031423805, 1690872932, 1572530013, 422718233, 1944491379, 1623236704, 2165938305, 1335808335, 3701702620, 574907938, 710180394, 2419829648, 2282455944, 1183631942, 4006029806, 3094074296, 338181140, 3735517662, 1589437022, 185998603, 3685578459, 3772464096, 845436466, 980700730, 169090570, 1234361161, 101452294, 608726052, 1555620956, 3265224130, 3552407251, 2890133420, 1657054818, 2436475025, 2503058581, 3839047652, 2045938553, 3889509095, 3364570056, 929978679, 1843050349, 2365688973, 3585172693, 1318900302, 2840191145, 1826141292, 1454176854, 4109567988, 3939444202, 1707781989, 2062847610, 2923948462, 135272456, 3127891386, 2029029496, 625635109, 777810478, 473441308, 2790781350, 3027486644, 3331805638, 3905627112, 3718347997, 1961401460, 524165407, 1268178251, 3177307325, 2332919435, 2316273034, 1893765232, 1048330814, 3044132021, 1724688998, 1217452104, 50726147, 4143383030, 236720654, 1640145761, 896163637, 1471084887, 3110719673, 2249691526, 3248052417, 490350365, 2653403550, 3789109473, 4176155640, 2553000856, 287453969, 1775418217, 3651760345, 2382858638, 2486413204, 2603464347, 507257374, 2266337927, 3922272489, 3464972750, 1437269845, 676362280, 3752164063, 2349043596, 2707028129, 2299101321, 219813645, 3211123391, 3872862694, 1115997762, 1758509160, 1099088705, 2569646233, 760903469, 253628687, 2960903088, 1420360788, 3144537787, 371997206]);
    },
    /*aes_fast._T3*/get _T3() {
      return JSArrayOfint().of([3332727651, 4169432188, 4003034999, 4136467323, 4279104242, 3602738027, 3736170351, 2438251973, 1615867952, 33751297, 3467208551, 1451043627, 3877240574, 3043153879, 1306962859, 3969545846, 2403715786, 530416258, 2302724553, 4203183485, 4011195130, 3001768281, 2395555655, 4211863792, 1106029997, 3009926356, 1610457762, 1173008303, 599760028, 1408738468, 3835064946, 2606481600, 1975695287, 3776773629, 1034851219, 1282024998, 1817851446, 2118205247, 4110612471, 2203045068, 1750873140, 1374987685, 3509904869, 4178113009, 3801313649, 2876496088, 1649619249, 708777237, 135005188, 2505230279, 1181033251, 2640233411, 807933976, 933336726, 168756485, 800430746, 235472647, 607523346, 463175808, 3745374946, 3441880043, 1315514151, 2144187058, 3936318837, 303761673, 496927619, 1484008492, 875436570, 908925723, 3702681198, 3035519578, 1543217312, 2767606354, 1984772923, 3076642518, 2110698419, 1383803177, 3711886307, 1584475951, 328696964, 2801095507, 3110654417, 0, 3240947181, 1080041504, 3810524412, 2043195825, 3069008731, 3569248874, 2370227147, 1742323390, 1917532473, 2497595978, 2564049996, 2968016984, 2236272591, 3144405200, 3307925487, 1340451498, 3977706491, 2261074755, 2597801293, 1716859699, 294946181, 2328839493, 3910203897, 67502594, 4269899647, 2700103760, 2017737788, 632987551, 1273211048, 2733855057, 1576969123, 2160083008, 92966799, 1068339858, 566009245, 1883781176, 4043634165, 1675607228, 2009183926, 2943736538, 1113792801, 540020752, 3843751935, 4245615603, 3211645650, 2169294285, 403966988, 641012499, 3274697964, 3202441055, 899848087, 2295088196, 775493399, 2472002756, 1441965991, 4236410494, 2051489085, 3366741092, 3135724893, 841685273, 3868554099, 3231735904, 429425025, 2664517455, 2743065820, 1147544098, 1417554474, 1001099408, 193169544, 2362066502, 3341414126, 1809037496, 675025940, 2809781982, 3168951902, 371002123, 2910247899, 3678134496, 1683370546, 1951283770, 337512970, 2463844681, 201983494, 1215046692, 3101973596, 2673722050, 3178157011, 1139780780, 3299238498, 967348625, 832869781, 3543655652, 4069226873, 3576883175, 2336475336, 1851340599, 3669454189, 25988493, 2976175573, 2631028302, 1239460265, 3635702892, 2902087254, 4077384948, 3475368682, 3400492389, 4102978170, 1206496942, 270010376, 1876277946, 4035475576, 1248797989, 1550986798, 941890588, 1475454630, 1942467764, 2538718918, 3408128232, 2709315037, 3902567540, 1042358047, 2531085131, 1641856445, 226921355, 260409994, 3767562352, 2084716094, 1908716981, 3433719398, 2430093384, 100991747, 4144101110, 470945294, 3265487201, 1784624437, 2935576407, 1775286713, 395413126, 2572730817, 975641885, 666476190, 3644383713, 3943954680, 733190296, 573772049, 3535497577, 2842745305, 126455438, 866620564, 766942107, 1008868894, 361924487, 3374377449, 2269761230, 2868860245, 1350051880, 2776293343, 59739276, 1509466529, 159418761, 437718285, 1708834751, 3610371814, 2227585602, 3501746280, 2193834305, 699439513, 1517759789, 504434447, 2076946608, 2835108948, 1842789307, 742004246]);
    },
    /*aes_fast._Tinv0*/get _Tinv0() {
      return JSArrayOfint().of([1353184337, 1399144830, 3282310938, 2522752826, 3412831035, 4047871263, 2874735276, 2466505547, 1442459680, 4134368941, 2440481928, 625738485, 4242007375, 3620416197, 2151953702, 2409849525, 1230680542, 1729870373, 2551114309, 3787521629, 41234371, 317738113, 2744600205, 3338261355, 3881799427, 2510066197, 3950669247, 3663286933, 763608788, 3542185048, 694804553, 1154009486, 1787413109, 2021232372, 1799248025, 3715217703, 3058688446, 397248752, 1722556617, 3023752829, 407560035, 2184256229, 1613975959, 1165972322, 3765920945, 2226023355, 480281086, 2485848313, 1483229296, 436028815, 2272059028, 3086515026, 601060267, 3791801202, 1468997603, 715871590, 120122290, 63092015, 2591802758, 2768779219, 4068943920, 2997206819, 3127509762, 1552029421, 723308426, 2461301159, 4042393587, 2715969870, 3455375973, 3586000134, 526529745, 2331944644, 2639474228, 2689987490, 853641733, 1978398372, 971801355, 2867814464, 111112542, 1360031421, 4186579262, 1023860118, 2919579357, 1186850381, 3045938321, 90031217, 1876166148, 4279586912, 620468249, 2548678102, 3426959497, 2006899047, 3175278768, 2290845959, 945494503, 3689859193, 1191869601, 3910091388, 3374220536, 0, 2206629897, 1223502642, 2893025566, 1316117100, 4227796733, 1446544655, 517320253, 658058550, 1691946762, 564550760, 3511966619, 976107044, 2976320012, 266819475, 3533106868, 2660342555, 1338359936, 2720062561, 1766553434, 370807324, 179999714, 3844776128, 1138762300, 488053522, 185403662, 2915535858, 3114841645, 3366526484, 2233069911, 1275557295, 3151862254, 4250959779, 2670068215, 3170202204, 3309004356, 880737115, 1982415755, 3703972811, 1761406390, 1676797112, 3403428311, 277177154, 1076008723, 538035844, 2099530373, 4164795346, 288553390, 1839278535, 1261411869, 4080055004, 3964831245, 3504587127, 1813426987, 2579067049, 4199060497, 577038663, 3297574056, 440397984, 3626794326, 4019204898, 3343796615, 3251714265, 4272081548, 906744984, 3481400742, 685669029, 646887386, 2764025151, 3835509292, 227702864, 2613862250, 1648787028, 3256061430, 3904428176, 1593260334, 4121936770, 3196083615, 2090061929, 2838353263, 3004310991, 999926984, 2809993232, 1852021992, 2075868123, 158869197, 4095236462, 28809964, 2828685187, 1701746150, 2129067946, 147831841, 3873969647, 3650873274, 3459673930, 3557400554, 3598495785, 2947720241, 824393514, 815048134, 3227951669, 935087732, 2798289660, 2966458592, 366520115, 1251476721, 4158319681, 240176511, 804688151, 2379631990, 1303441219, 1414376140, 3741619940, 3820343710, 461924940, 3089050817, 2136040774, 82468509, 1563790337, 1937016826, 776014843, 1511876531, 1389550482, 861278441, 323475053, 2355222426, 2047648055, 2383738969, 2302415851, 3995576782, 902390199, 3991215329, 1018251130, 1507840668, 1064563285, 2043548696, 3208103795, 3939366739, 1537932639, 342834655, 2262516856, 2180231114, 1053059257, 741614648, 1598071746, 1925389590, 203809468, 2336832552, 1100287487, 1895934009, 3736275976, 2632234200, 2428589668, 1636092795, 1890988757, 1952214088, 1113045200]);
    },
    /*aes_fast._Tinv1*/get _Tinv1() {
      return JSArrayOfint().of([2817806672, 1698790995, 2752977603, 1579629206, 1806384075, 1167925233, 1492823211, 65227667, 4197458005, 1836494326, 1993115793, 1275262245, 3622129660, 3408578007, 1144333952, 2741155215, 1521606217, 465184103, 250234264, 3237895649, 1966064386, 4031545618, 2537983395, 4191382470, 1603208167, 2626819477, 2054012907, 1498584538, 2210321453, 561273043, 1776306473, 3368652356, 2311222634, 2039411832, 1045993835, 1907959773, 1340194486, 2911432727, 2887829862, 986611124, 1256153880, 823846274, 860985184, 2136171077, 2003087840, 2926295940, 2692873756, 722008468, 1749577816, 4249194265, 1826526343, 4168831671, 3547573027, 38499042, 2401231703, 2874500650, 686535175, 3266653955, 2076542618, 137876389, 2267558130, 2780767154, 1778582202, 2182540636, 483363371, 3027871634, 4060607472, 3798552225, 4107953613, 3188000469, 1647628575, 4272342154, 1395537053, 1442030240, 3783918898, 3958809717, 3968011065, 4016062634, 2675006982, 275692881, 2317434617, 115185213, 88006062, 3185986886, 2371129781, 1573155077, 3557164143, 357589247, 4221049124, 3921532567, 1128303052, 2665047927, 1122545853, 2341013384, 1528424248, 4006115803, 175939911, 256015593, 512030921, 0, 2256537987, 3979031112, 1880170156, 1918528590, 4279172603, 948244310, 3584965918, 959264295, 3641641572, 2791073825, 1415289809, 775300154, 1728711857, 3881276175, 2532226258, 2442861470, 3317727311, 551313826, 1266113129, 437394454, 3130253834, 715178213, 3760340035, 387650077, 218697227, 3347837613, 2830511545, 2837320904, 435246981, 125153100, 3717852859, 1618977789, 637663135, 4117912764, 996558021, 2130402100, 692292470, 3324234716, 4243437160, 4058298467, 3694254026, 2237874704, 580326208, 298222624, 608863613, 1035719416, 855223825, 2703869805, 798891339, 817028339, 1384517100, 3821107152, 380840812, 3111168409, 1217663482, 1693009698, 2365368516, 1072734234, 746411736, 2419270383, 1313441735, 3510163905, 2731183358, 198481974, 2180359887, 3732579624, 2394413606, 3215802276, 2637835492, 2457358349, 3428805275, 1182684258, 328070850, 3101200616, 4147719774, 2948825845, 2153619390, 2479909244, 768962473, 304467891, 2578237499, 2098729127, 1671227502, 3141262203, 2015808777, 408514292, 3080383489, 2588902312, 1855317605, 3875515006, 3485212936, 3893751782, 2615655129, 913263310, 161475284, 2091919830, 2997105071, 591342129, 2493892144, 1721906624, 3159258167, 3397581990, 3499155632, 3634836245, 2550460746, 3672916471, 1355644686, 4136703791, 3595400845, 2968470349, 1303039060, 76997855, 3050413795, 2288667675, 523026872, 1365591679, 3932069124, 898367837, 1955068531, 1091304238, 493335386, 3537605202, 1443948851, 1205234963, 1641519756, 211892090, 351820174, 1007938441, 665439982, 3378624309, 3843875309, 2974251580, 3755121753, 1945261375, 3457423481, 935818175, 3455538154, 2868731739, 1866325780, 3678697606, 4088384129, 3295197502, 874788908, 1084473951, 3273463410, 635616268, 1228679307, 2500722497, 27801969, 3003910366, 3837057180, 3243664528, 2227927905, 3056784752, 1550600308, 1471729730]);
    },
    /*aes_fast._Tinv2*/get _Tinv2() {
      return JSArrayOfint().of([4098969767, 1098797925, 387629988, 658151006, 2872822635, 2636116293, 4205620056, 3813380867, 807425530, 1991112301, 3431502198, 49620300, 3847224535, 717608907, 891715652, 1656065955, 2984135002, 3123013403, 3930429454, 4267565504, 801309301, 1283527408, 1183687575, 3547055865, 2399397727, 2450888092, 1841294202, 1385552473, 3201576323, 1951978273, 3762891113, 3381544136, 3262474889, 2398386297, 1486449470, 3106397553, 3787372111, 2297436077, 550069932, 3464344634, 3747813450, 451248689, 1368875059, 1398949247, 1689378935, 1807451310, 2180914336, 150574123, 1215322216, 1167006205, 3734275948, 2069018616, 1940595667, 1265820162, 534992783, 1432758955, 3954313000, 3039757250, 3313932923, 936617224, 674296455, 3206787749, 50510442, 384654466, 3481938716, 2041025204, 133427442, 1766760930, 3664104948, 84334014, 886120290, 2797898494, 775200083, 4087521365, 2315596513, 4137973227, 2198551020, 1614850799, 1901987487, 1857900816, 557775242, 3717610758, 1054715397, 3863824061, 1418835341, 3295741277, 100954068, 1348534037, 2551784699, 3184957417, 1082772547, 3647436702, 3903896898, 2298972299, 434583643, 3363429358, 2090944266, 1115482383, 2230896926, 0, 2148107142, 724715757, 287222896, 1517047410, 251526143, 2232374840, 2923241173, 758523705, 252339417, 1550328230, 1536938324, 908343854, 168604007, 1469255655, 4004827798, 2602278545, 3229634501, 3697386016, 2002413899, 303830554, 2481064634, 2696996138, 574374880, 454171927, 151915277, 2347937223, 3056449960, 504678569, 4049044761, 1974422535, 2582559709, 2141453664, 33005350, 1918680309, 1715782971, 4217058430, 1133213225, 600562886, 3988154620, 3837289457, 836225756, 1665273989, 2534621218, 3330547729, 1250262308, 3151165501, 4188934450, 700935585, 2652719919, 3000824624, 2249059410, 3245854947, 3005967382, 1890163129, 2484206152, 3913753188, 4238918796, 4037024319, 2102843436, 857927568, 1233635150, 953795025, 3398237858, 3566745099, 4121350017, 2057644254, 3084527246, 2906629311, 976020637, 2018512274, 1600822220, 2119459398, 2381758995, 3633375416, 959340279, 3280139695, 1570750080, 3496574099, 3580864813, 634368786, 2898803609, 403744637, 2632478307, 1004239803, 650971512, 1500443672, 2599158199, 1334028442, 2514904430, 4289363686, 3156281551, 368043752, 3887782299, 1867173430, 2682967049, 2955531900, 2754719666, 1059729699, 2781229204, 2721431654, 1316239292, 2197595850, 2430644432, 2805143000, 82922136, 3963746266, 3447656016, 2434215926, 1299615190, 4014165424, 2865517645, 2531581700, 3516851125, 1783372680, 750893087, 1699118929, 1587348714, 2348899637, 2281337716, 201010753, 1739807261, 3683799762, 283718486, 3597472583, 3617229921, 2704767500, 4166618644, 334203196, 2848910887, 1639396809, 484568549, 1199193265, 3533461983, 4065673075, 337148366, 3346251575, 4149471949, 4250885034, 1038029935, 1148749531, 2949284339, 1756970692, 607661108, 2747424576, 488010435, 3803974693, 1009290057, 234832277, 2822336769, 201907891, 3034094820, 1449431233, 3413860740, 852848822, 1816687708, 3100656215]);
    },
    /*aes_fast._Tinv3*/get _Tinv3() {
      return JSArrayOfint().of([1364240372, 2119394625, 449029143, 982933031, 1003187115, 535905693, 2896910586, 1267925987, 542505520, 2918608246, 2291234508, 4112862210, 1341970405, 3319253802, 645940277, 3046089570, 3729349297, 627514298, 1167593194, 1575076094, 3271718191, 2165502028, 2376308550, 1808202195, 65494927, 362126482, 3219880557, 2514114898, 3559752638, 1490231668, 1227450848, 2386872521, 1969916354, 4101536142, 2573942360, 668823993, 3199619041, 4028083592, 3378949152, 2108963534, 1662536415, 3850514714, 2539664209, 1648721747, 2984277860, 3146034795, 4263288961, 4187237128, 1884842056, 2400845125, 2491903198, 1387788411, 2871251827, 1927414347, 3814166303, 1714072405, 2986813675, 788775605, 2258271173, 3550808119, 821200680, 598910399, 45771267, 3982262806, 2318081231, 2811409529, 4092654087, 1319232105, 1707996378, 114671109, 3508494900, 3297443494, 882725678, 2728416755, 87220618, 2759191542, 188345475, 1084944224, 1577492337, 3176206446, 1056541217, 2520581853, 3719169342, 1296481766, 2444594516, 1896177092, 74437638, 1627329872, 421854104, 3600279997, 2311865152, 1735892697, 2965193448, 126389129, 3879230233, 2044456648, 2705787516, 2095648578, 4173930116, 0, 159614592, 843640107, 514617361, 1817080410, 4261150478, 257308805, 1025430958, 908540205, 174381327, 1747035740, 2614187099, 607792694, 212952842, 2467293015, 3033700078, 463376795, 2152711616, 1638015196, 1516850039, 471210514, 3792353939, 3236244128, 1011081250, 303896347, 235605257, 4071475083, 767142070, 348694814, 1468340721, 2940995445, 4005289369, 2751291519, 4154402305, 1555887474, 1153776486, 1530167035, 2339776835, 3420243491, 3060333805, 3093557732, 3620396081, 1108378979, 322970263, 2216694214, 2239571018, 3539484091, 2920362745, 3345850665, 491466654, 3706925234, 233591430, 2010178497, 728503987, 2845423984, 301615252, 1193436393, 2831453436, 2686074864, 1457007741, 586125363, 2277985865, 3653357880, 2365498058, 2553678804, 2798617077, 2770919034, 3659959991, 1067761581, 753179962, 1343066744, 1788595295, 1415726718, 4139914125, 2431170776, 777975609, 2197139395, 2680062045, 1769771984, 1873358293, 3484619301, 3359349164, 279411992, 3899548572, 3682319163, 3439949862, 1861490777, 3959535514, 2208864847, 3865407125, 2860443391, 554225596, 4024887317, 3134823399, 1255028335, 3939764639, 701922480, 833598116, 707863359, 3325072549, 901801634, 1949809742, 4238789250, 3769684112, 857069735, 4048197636, 1106762476, 2131644621, 389019281, 1989006925, 1129165039, 3428076970, 3839820950, 2665723345, 1276872810, 3250069292, 1182749029, 2634345054, 22885772, 4201870471, 4214112523, 3009027431, 2454901467, 3912455696, 1829980118, 2592891351, 930745505, 1502483704, 3951639571, 3471714217, 3073755489, 3790464284, 2050797895, 2623135698, 1430221810, 410635796, 1941911495, 1407897079, 1599843069, 3742658365, 2022103876, 3397514159, 3107898472, 942421028, 3261022371, 376619805, 3154912738, 680216892, 4282488077, 963707304, 148812556, 3634160820, 1687208278, 2069988555, 3580933682, 1215585388, 3494008760]);
    }
  });
  const _pbkey = dart.privateName(ecdsa_signer, "_pbkey");
  const _pvkey = dart.privateName(ecdsa_signer, "_pvkey");
  const _random$ = dart.privateName(ecdsa_signer, "_random");
  const _deterministic = dart.privateName(ecdsa_signer, "_deterministic");
  const _digest$0 = dart.privateName(ecdsa_signer, "_digest");
  const _kMac$ = dart.privateName(ecdsa_signer, "_kMac");
  const _hashMessageIfNeeded = dart.privateName(ecdsa_signer, "_hashMessageIfNeeded");
  const _calculateE = dart.privateName(ecdsa_signer, "_calculateE");
  const _sumOfTwoMultiplies = dart.privateName(ecdsa_signer, "_sumOfTwoMultiplies");
  const _implShamirsTrick = dart.privateName(ecdsa_signer, "_implShamirsTrick");
  ecdsa_signer.ECDSASigner = class ECDSASigner extends core.Object {
    get algorithmName() {
      return dart.str(this[_digest$0].algorithmName) + "/" + (this[_kMac$] == null ? "" : "DET-") + "ECDSA";
    }
    reset() {
    }
    init(forSigning, params) {
      this[_pbkey] = this[_pvkey] = null;
      if (dart.test(forSigning)) {
        let pvparams = null;
        if (ParametersWithRandomOfCipherParameters().is(params)) {
          this[_random$] = params.random;
          pvparams = PrivateKeyParameterOfPrivateKey()._check(params.parameters);
        } else if (this[_kMac$] != null) {
          this[_random$] = null;
          pvparams = PrivateKeyParameterOfPrivateKey()._check(params);
        } else {
          this[_random$] = api.SecureRandom.new();
          pvparams = PrivateKeyParameterOfPrivateKey()._check(params);
        }
        if (!PrivateKeyParameterOfPrivateKey().is(pvparams)) {
          dart.throw(new core.ArgumentError.new("Unsupported parameters type " + dart.str(dart.runtimeType(pvparams)) + ": should be PrivateKeyParameter"));
        }
        this[_pvkey] = api$0.ECPrivateKey._check(pvparams.key);
      } else {
        let pbparams = null;
        pbparams = PublicKeyParameterOfPublicKey()._check(params);
        if (!PublicKeyParameterOfPublicKey().is(pbparams)) {
          dart.throw(new core.ArgumentError.new("Unsupported parameters type " + dart.str(dart.runtimeType(pbparams)) + ": should be PublicKeyParameter"));
        }
        this[_pbkey] = api$0.ECPublicKey._check(pbparams.key);
      }
    }
    generateSignature(message) {
      message = this[_hashMessageIfNeeded](message);
      let n = this[_pvkey].parameters.n;
      let e = this[_calculateE](n, message);
      let r = null;
      let s = null;
      let kCalculator = null;
      if (this[_kMac$] != null) {
        kCalculator = new ecdsa_signer._RFC6979KCalculator.new(this[_kMac$], n, this[_pvkey].d, message);
      } else {
        kCalculator = new ecdsa_signer._RandomKCalculator.new(n, this[_random$]);
      }
      do {
        let k = null;
        do {
          k = dart.dsend(kCalculator, 'nextK', []);
          let p = this[_pvkey].parameters.G['*'](core.BigInt._check(k));
          let x = p.x.toBigInteger();
          r = x['%'](n);
        } while (dart.equals(r, core.BigInt.zero));
        let d = this[_pvkey].d;
        s = dart.dsend(dart.dsend(dart.dsend(k, 'modInverse', [n]), '*', [e['+'](d['*'](core.BigInt._check(r)))]), '%', [n]);
      } while (dart.equals(s, core.BigInt.zero));
      return new api$0.ECSignature.new(core.BigInt._check(r), core.BigInt._check(s));
    }
    verifySignature(message, signature) {
      api$0.ECSignature._check(signature);
      message = this[_hashMessageIfNeeded](message);
      let n = this[_pbkey].parameters.n;
      let e = this[_calculateE](n, message);
      let r = signature.r;
      let s = signature.s;
      if (dart.notNull(r.compareTo(core.BigInt.one)) < 0 || dart.notNull(r.compareTo(n)) >= 0) {
        return false;
      }
      if (dart.notNull(s.compareTo(core.BigInt.one)) < 0 || dart.notNull(s.compareTo(n)) >= 0) {
        return false;
      }
      let c = s.modInverse(n);
      let u1 = e['*'](c)['%'](n);
      let u2 = r['*'](c)['%'](n);
      let G = this[_pbkey].parameters.G;
      let Q = this[_pbkey].Q;
      let point = this[_sumOfTwoMultiplies](G, u1, Q, u2);
      if (dart.test(point.isInfinity)) {
        return false;
      }
      let v = point.x.toBigInteger()['%'](n);
      return dart.equals(v, r);
    }
    [_hashMessageIfNeeded](message) {
      if (this[_digest$0] != null) {
        this[_digest$0].reset();
        return this[_digest$0].process(message);
      } else {
        return message;
      }
    }
    [_calculateE](n, message) {
      let log2n = n.bitLength;
      let messageBitLength = dart.notNull(message[$length]) * 8;
      if (dart.notNull(log2n) >= messageBitLength) {
        return utils.decodeBigInt(message);
      } else {
        let trunc = utils.decodeBigInt(message);
        trunc = trunc['>>'](messageBitLength - dart.notNull(log2n));
        return trunc;
      }
    }
    [_sumOfTwoMultiplies](P, a, Q, b) {
      let c = P.curve;
      if (!dart.equals(c, Q.curve)) {
        dart.throw(new core.ArgumentError.new("P and Q must be on same curve"));
      }
      return this[_implShamirsTrick](P, a, Q, b);
    }
    [_implShamirsTrick](P, k, Q, l) {
      let m = math.max(core.int, k.bitLength, l.bitLength);
      let Z = P['+'](Q);
      let R = P.curve.infinity;
      for (let i = m - 1; i >= 0; i = i - 1) {
        R = R.twice();
        if (dart.test(ecdsa_signer._testBit(k, i))) {
          if (dart.test(ecdsa_signer._testBit(l, i))) {
            R = R['+'](Z);
          } else {
            R = R['+'](P);
          }
        } else {
          if (dart.test(ecdsa_signer._testBit(l, i))) {
            R = R['+'](Q);
          }
        }
      }
      return R;
    }
  };
  (ecdsa_signer.ECDSASigner.new = function(_digest = null, _kMac = null) {
    this[_pbkey] = null;
    this[_pvkey] = null;
    this[_random$] = null;
    this[_deterministic] = null;
    this[_digest$0] = _digest;
    this[_kMac$] = _kMac;
    ;
  }).prototype = ecdsa_signer.ECDSASigner.prototype;
  dart.addTypeTests(ecdsa_signer.ECDSASigner);
  ecdsa_signer.ECDSASigner[dart.implements] = () => [api.Signer];
  dart.setMethodSignature(ecdsa_signer.ECDSASigner, () => ({
    __proto__: dart.getMethods(ecdsa_signer.ECDSASigner.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, api.CipherParameters]),
    generateSignature: dart.fnType(api.Signature, [typed_data.Uint8List]),
    verifySignature: dart.fnType(core.bool, [typed_data.Uint8List, core.Object]),
    [_hashMessageIfNeeded]: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List]),
    [_calculateE]: dart.fnType(core.BigInt, [core.BigInt, typed_data.Uint8List]),
    [_sumOfTwoMultiplies]: dart.fnType(api$0.ECPoint, [api$0.ECPoint, core.BigInt, api$0.ECPoint, core.BigInt]),
    [_implShamirsTrick]: dart.fnType(api$0.ECPoint, [api$0.ECPoint, core.BigInt, api$0.ECPoint, core.BigInt])
  }));
  dart.setGetterSignature(ecdsa_signer.ECDSASigner, () => ({
    __proto__: dart.getGetters(ecdsa_signer.ECDSASigner.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(ecdsa_signer.ECDSASigner, "package:pointycastle/signers/ecdsa_signer.dart");
  dart.setFieldSignature(ecdsa_signer.ECDSASigner, () => ({
    __proto__: dart.getFields(ecdsa_signer.ECDSASigner.__proto__),
    [_pbkey]: dart.fieldType(api$0.ECPublicKey),
    [_pvkey]: dart.fieldType(api$0.ECPrivateKey),
    [_random$]: dart.fieldType(api.SecureRandom),
    [_deterministic]: dart.fieldType(core.bool),
    [_digest$0]: dart.fieldType(api.Digest),
    [_kMac$]: dart.fieldType(api.Mac)
  }));
  dart.defineLazy(ecdsa_signer.ECDSASigner, {
    /*ecdsa_signer.ECDSASigner.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.regex(dart.wrapType(api.Signer), "^(.+)/(DET-)?ECDSA$", dart.fn((_, match) => {
        let digestName = match.group(1);
        let withMac = match.group(2) != null;
        return dart.fn(() => {
          let underlyingDigest = api.Digest.new(digestName);
          let mac = withMac ? api.Mac.new(dart.str(digestName) + "/HMAC") : null;
          return new ecdsa_signer.ECDSASigner.new(underlyingDigest, mac);
        }, VoidToECDSASigner());
      }, StringAndMatchToFn$4()));
    }
  });
  const _K = dart.privateName(ecdsa_signer, "_K");
  const _V = dart.privateName(ecdsa_signer, "_V");
  const _mac$ = dart.privateName(ecdsa_signer, "_mac");
  const _n$ = dart.privateName(ecdsa_signer, "_n");
  const _init = dart.privateName(ecdsa_signer, "_init");
  const _asUnsignedByteArray = dart.privateName(ecdsa_signer, "_asUnsignedByteArray");
  const _bitsToInt = dart.privateName(ecdsa_signer, "_bitsToInt");
  ecdsa_signer._RFC6979KCalculator = class _RFC6979KCalculator extends core.Object {
    [_init](d, message) {
      this[_V][$fillRange](0, this[_V][$length], 1);
      this[_K][$fillRange](0, this[_K][$length], 0);
      let x = _native_typed_data.NativeUint8List.new(((dart.notNull(this[_n$].bitLength) + 7) / 8)[$truncate]());
      let dVal = this[_asUnsignedByteArray](d);
      x[$setRange](dart.notNull(x[$length]) - dart.notNull(dVal[$length]), x[$length], dVal);
      let m = _native_typed_data.NativeUint8List.new(((dart.notNull(this[_n$].bitLength) + 7) / 8)[$truncate]());
      let mInt = this[_bitsToInt](message);
      if (dart.test(mInt['>'](this[_n$]))) {
        mInt = mInt['-'](this[_n$]);
      }
      let mVal = this[_asUnsignedByteArray](mInt);
      m[$setRange](dart.notNull(m[$length]) - dart.notNull(mVal[$length]), m[$length], mVal);
      this[_mac$].init(new api.KeyParameter.new(this[_K]));
      this[_mac$].update(this[_V], 0, this[_V][$length]);
      this[_mac$].updateByte(0);
      this[_mac$].update(x, 0, x[$length]);
      this[_mac$].update(m, 0, m[$length]);
      this[_mac$].doFinal(this[_K], 0);
      this[_mac$].init(new api.KeyParameter.new(this[_K]));
      this[_mac$].update(this[_V], 0, this[_V][$length]);
      this[_mac$].doFinal(this[_V], 0);
      this[_mac$].update(this[_V], 0, this[_V][$length]);
      this[_mac$].updateByte(1);
      this[_mac$].update(x, 0, x[$length]);
      this[_mac$].update(m, 0, m[$length]);
      this[_mac$].doFinal(this[_K], 0);
      this[_mac$].init(new api.KeyParameter.new(this[_K]));
      this[_mac$].update(this[_V], 0, this[_V][$length]);
      this[_mac$].doFinal(this[_V], 0);
    }
    nextK() {
      let t = _native_typed_data.NativeUint8List.new(((dart.notNull(this[_n$].bitLength) + 7) / 8)[$truncate]());
      for (;;) {
        let tOff = 0;
        while (tOff < dart.notNull(t[$length])) {
          this[_mac$].update(this[_V], 0, this[_V][$length]);
          this[_mac$].doFinal(this[_V], 0);
          if (dart.notNull(t[$length]) - tOff < dart.notNull(this[_V][$length])) {
            t[$setRange](tOff, t[$length], this[_V]);
            tOff = tOff + (dart.notNull(t[$length]) - tOff);
          } else {
            t[$setRange](tOff, tOff + dart.notNull(this[_V][$length]), this[_V]);
            tOff = tOff + dart.notNull(this[_V][$length]);
          }
        }
        let k = this[_bitsToInt](t);
        if (dart.equals(k, 0) || dart.test(k['>='](this[_n$]))) {
          this[_mac$].update(this[_V], 0, this[_V][$length]);
          this[_mac$].updateByte(0);
          this[_mac$].doFinal(this[_K], 0);
          this[_mac$].init(new api.KeyParameter.new(this[_K]));
          this[_mac$].update(this[_V], 0, this[_V][$length]);
          this[_mac$].doFinal(this[_V], 0);
        } else {
          return k;
        }
      }
    }
    [_bitsToInt](t) {
      let v = utils.decodeBigInt(t);
      if (dart.notNull(t[$length]) * 8 > dart.notNull(this[_n$].bitLength)) {
        v = v['>>'](dart.notNull(t[$length]) * 8 - dart.notNull(this[_n$].bitLength));
      }
      return v;
    }
    [_asUnsignedByteArray](value) {
      let bytes = utils.encodeBigInt(value);
      if (bytes[$_get](0) === 0) {
        return _native_typed_data.NativeUint8List.fromList(bytes[$sublist](1));
      } else {
        return _native_typed_data.NativeUint8List.fromList(bytes);
      }
    }
  };
  (ecdsa_signer._RFC6979KCalculator.new = function(_mac, _n, d, message) {
    this[_K] = null;
    this[_V] = null;
    this[_mac$] = _mac;
    this[_n$] = _n;
    this[_V] = _native_typed_data.NativeUint8List.new(this[_mac$].macSize);
    this[_K] = _native_typed_data.NativeUint8List.new(this[_mac$].macSize);
    this[_init](d, message);
  }).prototype = ecdsa_signer._RFC6979KCalculator.prototype;
  dart.addTypeTests(ecdsa_signer._RFC6979KCalculator);
  dart.setMethodSignature(ecdsa_signer._RFC6979KCalculator, () => ({
    __proto__: dart.getMethods(ecdsa_signer._RFC6979KCalculator.__proto__),
    [_init]: dart.fnType(dart.void, [core.BigInt, typed_data.Uint8List]),
    nextK: dart.fnType(core.BigInt, []),
    [_bitsToInt]: dart.fnType(core.BigInt, [typed_data.Uint8List]),
    [_asUnsignedByteArray]: dart.fnType(typed_data.Uint8List, [core.BigInt])
  }));
  dart.setLibraryUri(ecdsa_signer._RFC6979KCalculator, "package:pointycastle/signers/ecdsa_signer.dart");
  dart.setFieldSignature(ecdsa_signer._RFC6979KCalculator, () => ({
    __proto__: dart.getFields(ecdsa_signer._RFC6979KCalculator.__proto__),
    [_mac$]: dart.fieldType(api.Mac),
    [_K]: dart.fieldType(typed_data.Uint8List),
    [_V]: dart.fieldType(typed_data.Uint8List),
    [_n$]: dart.fieldType(core.BigInt)
  }));
  ecdsa_signer._RandomKCalculator = class _RandomKCalculator extends core.Object {
    nextK() {
      let k = null;
      do {
        k = this[_random$].nextBigInteger(this[_n$].bitLength);
      } while (dart.equals(k, core.BigInt.zero) || dart.dtest(dart.dsend(k, '>=', [this[_n$]])));
      return core.BigInt._check(k);
    }
  };
  (ecdsa_signer._RandomKCalculator.new = function(_n, _random) {
    this[_n$] = _n;
    this[_random$] = _random;
    ;
  }).prototype = ecdsa_signer._RandomKCalculator.prototype;
  dart.addTypeTests(ecdsa_signer._RandomKCalculator);
  dart.setMethodSignature(ecdsa_signer._RandomKCalculator, () => ({
    __proto__: dart.getMethods(ecdsa_signer._RandomKCalculator.__proto__),
    nextK: dart.fnType(core.BigInt, [])
  }));
  dart.setLibraryUri(ecdsa_signer._RandomKCalculator, "package:pointycastle/signers/ecdsa_signer.dart");
  dart.setFieldSignature(ecdsa_signer._RandomKCalculator, () => ({
    __proto__: dart.getFields(ecdsa_signer._RandomKCalculator.__proto__),
    [_n$]: dart.fieldType(core.BigInt),
    [_random$]: dart.fieldType(api.SecureRandom)
  }));
  ecdsa_signer._testBit = function _testBit(i, n) {
    return !dart.equals(i['&'](core.BigInt.one['<<'](n)), core.BigInt.zero);
  };
  api$0.ECDomainParameters = class ECDomainParameters extends core.Object {
    static new(domainName) {
      return registry.registry.create(api$0.ECDomainParameters, domainName);
    }
  };
  (api$0.ECDomainParameters[dart.mixinNew] = function() {
  }).prototype = api$0.ECDomainParameters.prototype;
  dart.addTypeTests(api$0.ECDomainParameters);
  dart.setLibraryUri(api$0.ECDomainParameters, "package:pointycastle/ecc/api.dart");
  api$0.ECFieldElement = class ECFieldElement extends core.Object {};
  (api$0.ECFieldElement.new = function() {
    ;
  }).prototype = api$0.ECFieldElement.prototype;
  dart.addTypeTests(api$0.ECFieldElement);
  dart.setLibraryUri(api$0.ECFieldElement, "package:pointycastle/ecc/api.dart");
  api$0.ECPoint = class ECPoint extends core.Object {};
  (api$0.ECPoint.new = function() {
    ;
  }).prototype = api$0.ECPoint.prototype;
  dart.addTypeTests(api$0.ECPoint);
  dart.setLibraryUri(api$0.ECPoint, "package:pointycastle/ecc/api.dart");
  api$0.ECCurve = class ECCurve extends core.Object {};
  (api$0.ECCurve.new = function() {
    ;
  }).prototype = api$0.ECCurve.prototype;
  dart.addTypeTests(api$0.ECCurve);
  dart.setLibraryUri(api$0.ECCurve, "package:pointycastle/ecc/api.dart");
  const parameters$1 = dart.privateName(api$0, "ECAsymmetricKey.parameters");
  api$0.ECAsymmetricKey = class ECAsymmetricKey extends core.Object {
    get parameters() {
      return this[parameters$1];
    }
    set parameters(value) {
      super.parameters = value;
    }
  };
  (api$0.ECAsymmetricKey.new = function(parameters) {
    this[parameters$1] = parameters;
    ;
  }).prototype = api$0.ECAsymmetricKey.prototype;
  dart.addTypeTests(api$0.ECAsymmetricKey);
  api$0.ECAsymmetricKey[dart.implements] = () => [api.AsymmetricKey];
  dart.setLibraryUri(api$0.ECAsymmetricKey, "package:pointycastle/ecc/api.dart");
  dart.setFieldSignature(api$0.ECAsymmetricKey, () => ({
    __proto__: dart.getFields(api$0.ECAsymmetricKey.__proto__),
    parameters: dart.finalFieldType(api$0.ECDomainParameters)
  }));
  const d$ = dart.privateName(api$0, "ECPrivateKey.d");
  api$0.ECPrivateKey = class ECPrivateKey extends api$0.ECAsymmetricKey {
    get d() {
      return this[d$];
    }
    set d(value) {
      super.d = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other == null) return false;
      if (!api$0.ECPrivateKey.is(other)) return false;
      return dart.equals(dart.dload(other, 'parameters'), this.parameters) && dart.equals(dart.dload(other, 'd'), this.d);
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.parameters)) + dart.notNull(dart.hashCode(this.d));
    }
  };
  (api$0.ECPrivateKey.new = function(d, parameters) {
    this[d$] = d;
    api$0.ECPrivateKey.__proto__.new.call(this, parameters);
    ;
  }).prototype = api$0.ECPrivateKey.prototype;
  dart.addTypeTests(api$0.ECPrivateKey);
  api$0.ECPrivateKey[dart.implements] = () => [api.PrivateKey];
  dart.setLibraryUri(api$0.ECPrivateKey, "package:pointycastle/ecc/api.dart");
  dart.setFieldSignature(api$0.ECPrivateKey, () => ({
    __proto__: dart.getFields(api$0.ECPrivateKey.__proto__),
    d: dart.finalFieldType(core.BigInt)
  }));
  dart.defineExtensionMethods(api$0.ECPrivateKey, ['_equals']);
  dart.defineExtensionAccessors(api$0.ECPrivateKey, ['hashCode']);
  const Q$ = dart.privateName(api$0, "ECPublicKey.Q");
  api$0.ECPublicKey = class ECPublicKey extends api$0.ECAsymmetricKey {
    get Q() {
      return this[Q$];
    }
    set Q(value) {
      super.Q = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (other == null) return false;
      if (!api$0.ECPublicKey.is(other)) return false;
      return dart.equals(dart.dload(other, 'parameters'), this.parameters) && dart.equals(dart.dload(other, 'Q'), this.Q);
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.parameters)) + dart.notNull(dart.hashCode(this.Q));
    }
  };
  (api$0.ECPublicKey.new = function(Q, parameters) {
    this[Q$] = Q;
    api$0.ECPublicKey.__proto__.new.call(this, parameters);
    ;
  }).prototype = api$0.ECPublicKey.prototype;
  dart.addTypeTests(api$0.ECPublicKey);
  api$0.ECPublicKey[dart.implements] = () => [api.PublicKey];
  dart.setLibraryUri(api$0.ECPublicKey, "package:pointycastle/ecc/api.dart");
  dart.setFieldSignature(api$0.ECPublicKey, () => ({
    __proto__: dart.getFields(api$0.ECPublicKey.__proto__),
    Q: dart.finalFieldType(api$0.ECPoint)
  }));
  dart.defineExtensionMethods(api$0.ECPublicKey, ['_equals']);
  dart.defineExtensionAccessors(api$0.ECPublicKey, ['hashCode']);
  const r$ = dart.privateName(api$0, "ECSignature.r");
  const s$ = dart.privateName(api$0, "ECSignature.s");
  api$0.ECSignature = class ECSignature extends core.Object {
    get r() {
      return this[r$];
    }
    set r(value) {
      super.r = value;
    }
    get s() {
      return this[s$];
    }
    set s(value) {
      super.s = value;
    }
    toString() {
      return "(" + dart.str(dart.toString(this.r)) + "," + dart.str(dart.toString(this.s)) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (other == null) return false;
      if (!api$0.ECSignature.is(other)) return false;
      return dart.equals(dart.dload(other, 'r'), this.r) && dart.equals(dart.dload(other, 's'), this.s);
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.r)) + dart.notNull(dart.hashCode(this.s));
    }
  };
  (api$0.ECSignature.new = function(r, s) {
    this[r$] = r;
    this[s$] = s;
    ;
  }).prototype = api$0.ECSignature.prototype;
  dart.addTypeTests(api$0.ECSignature);
  api$0.ECSignature[dart.implements] = () => [api.Signature];
  dart.setLibraryUri(api$0.ECSignature, "package:pointycastle/ecc/api.dart");
  dart.setFieldSignature(api$0.ECSignature, () => ({
    __proto__: dart.getFields(api$0.ECSignature.__proto__),
    r: dart.finalFieldType(core.BigInt),
    s: dart.finalFieldType(core.BigInt)
  }));
  dart.defineExtensionMethods(api$0.ECSignature, ['toString', '_equals']);
  dart.defineExtensionAccessors(api$0.ECSignature, ['hashCode']);
  base_padding.BasePadding = class BasePadding extends core.Object {
    process(pad, data) {
      if (dart.test(pad)) {
        let out = _native_typed_data.NativeUint8List.fromList(data);
        let len = this.addPadding(out, 0);
        return out;
      } else {
        let len = this.padCount(data);
        return _native_typed_data.NativeUint8List.fromList(data[$sublist](0, len));
      }
    }
  };
  (base_padding.BasePadding.new = function() {
    ;
  }).prototype = base_padding.BasePadding.prototype;
  dart.addTypeTests(base_padding.BasePadding);
  base_padding.BasePadding[dart.implements] = () => [api.Padding];
  dart.setMethodSignature(base_padding.BasePadding, () => ({
    __proto__: dart.getMethods(base_padding.BasePadding.__proto__),
    process: dart.fnType(typed_data.Uint8List, [core.bool, typed_data.Uint8List])
  }));
  dart.setLibraryUri(base_padding.BasePadding, "package:pointycastle/src/impl/base_padding.dart");
  iso7816d4.ISO7816d4Padding = class ISO7816d4Padding extends base_padding.BasePadding {
    get algorithmName() {
      return "ISO7816-4";
    }
    init(params = null) {
    }
    addPadding(data, offset) {
      let added = dart.notNull(data[$length]) - dart.notNull(offset);
      data[$_set](offset, 128);
      offset = dart.notNull(offset) + 1;
      while (dart.notNull(offset) < dart.notNull(data[$length])) {
        data[$_set](offset, 0);
        offset = dart.notNull(offset) + 1;
      }
      return added;
    }
    padCount(data) {
      let count = dart.notNull(data[$length]) - 1;
      while (count > 0 && data[$_get](count) === 0) {
        count = count - 1;
      }
      if (data[$_get](count) !== 128) {
        dart.throw(new core.ArgumentError.new("pad block corrupted"));
      }
      return dart.notNull(data[$length]) - count;
    }
  };
  (iso7816d4.ISO7816d4Padding.new = function() {
    ;
  }).prototype = iso7816d4.ISO7816d4Padding.prototype;
  dart.addTypeTests(iso7816d4.ISO7816d4Padding);
  dart.setMethodSignature(iso7816d4.ISO7816d4Padding, () => ({
    __proto__: dart.getMethods(iso7816d4.ISO7816d4Padding.__proto__),
    init: dart.fnType(dart.void, [], [api.CipherParameters]),
    addPadding: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    padCount: dart.fnType(core.int, [typed_data.Uint8List])
  }));
  dart.setGetterSignature(iso7816d4.ISO7816d4Padding, () => ({
    __proto__: dart.getGetters(iso7816d4.ISO7816d4Padding.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(iso7816d4.ISO7816d4Padding, "package:pointycastle/paddings/iso7816d4.dart");
  dart.defineLazy(iso7816d4.ISO7816d4Padding, {
    /*iso7816d4.ISO7816d4Padding.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Padding), "ISO7816-4", dart.fn(() => new iso7816d4.ISO7816d4Padding.new(), VoidToISO7816d4Padding()));
    }
  });
  pkcs7.PKCS7Padding = class PKCS7Padding extends base_padding.BasePadding {
    get algorithmName() {
      return "PKCS7";
    }
    init(params = null) {
    }
    addPadding(data, offset) {
      let code = dart.notNull(data[$length]) - dart.notNull(offset);
      while (dart.notNull(offset) < dart.notNull(data[$length])) {
        data[$_set](offset, code);
        offset = dart.notNull(offset) + 1;
      }
      return code;
    }
    padCount(data) {
      let count = ufixnum.clip8(data[$_get](dart.notNull(data[$length]) - 1));
      if (dart.notNull(count) > dart.notNull(data[$length]) || count === 0) {
        dart.throw(new core.ArgumentError.new("Invalid or corrupted pad block"));
      }
      for (let i = 1; i <= dart.notNull(count); i = i + 1) {
        if (data[$_get](dart.notNull(data[$length]) - i) != count) {
          dart.throw(new core.ArgumentError.new("Invalid or corrupted pad block"));
        }
      }
      return count;
    }
  };
  (pkcs7.PKCS7Padding.new = function() {
    ;
  }).prototype = pkcs7.PKCS7Padding.prototype;
  dart.addTypeTests(pkcs7.PKCS7Padding);
  dart.setMethodSignature(pkcs7.PKCS7Padding, () => ({
    __proto__: dart.getMethods(pkcs7.PKCS7Padding.__proto__),
    init: dart.fnType(dart.void, [], [api.CipherParameters]),
    addPadding: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    padCount: dart.fnType(core.int, [typed_data.Uint8List])
  }));
  dart.setGetterSignature(pkcs7.PKCS7Padding, () => ({
    __proto__: dart.getGetters(pkcs7.PKCS7Padding.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(pkcs7.PKCS7Padding, "package:pointycastle/paddings/pkcs7.dart");
  dart.defineLazy(pkcs7.PKCS7Padding, {
    /*pkcs7.PKCS7Padding.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Padding), "PKCS7", dart.fn(() => new pkcs7.PKCS7Padding.new(), VoidToPKCS7Padding()));
    }
  });
  const _encrypting = dart.privateName(padded_block_cipher_impl, "_encrypting");
  const padding$ = dart.privateName(padded_block_cipher_impl, "PaddedBlockCipherImpl.padding");
  const cipher$0 = dart.privateName(padded_block_cipher_impl, "PaddedBlockCipherImpl.cipher");
  padded_block_cipher_impl.PaddedBlockCipherImpl = class PaddedBlockCipherImpl extends core.Object {
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get cipher() {
      return this[cipher$0];
    }
    set cipher(value) {
      super.cipher = value;
    }
    get algorithmName() {
      return dart.notNull(this.cipher.algorithmName) + "/" + dart.notNull(this.padding.algorithmName);
    }
    get blockSize() {
      return this.cipher.blockSize;
    }
    reset() {
      this[_encrypting] = null;
      this.cipher.reset();
    }
    init(forEncryption, params) {
      PaddedBlockCipherParametersOfCipherParameters$CipherParameters()._check(params);
      this[_encrypting] = forEncryption;
      this.cipher.init(forEncryption, params.underlyingCipherParameters);
      this.padding.init(params.paddingCipherParameters);
    }
    process(data) {
      let inputBlocks = ((dart.notNull(data[$length]) + dart.notNull(this.blockSize) - 1) / dart.notNull(this.blockSize))[$truncate]();
      let outputBlocks = null;
      if (dart.test(this[_encrypting])) {
        outputBlocks = ((dart.notNull(data[$length]) + dart.notNull(this.blockSize)) / dart.notNull(this.blockSize))[$truncate]();
      } else {
        if (data[$length][$modulo](this.blockSize) !== 0) {
          dart.throw(new core.ArgumentError.new("Input data length must be a multiple of cipher's block size"));
        }
        outputBlocks = inputBlocks;
      }
      let out = _native_typed_data.NativeUint8List.new(core.int._check(dart.dsend(outputBlocks, '*', [this.blockSize])));
      for (let i = 0; i < inputBlocks - 1; i = i + 1) {
        let offset = i * dart.notNull(this.blockSize);
        this.processBlock(data, offset, out, offset);
      }
      let lastBlockOffset = (inputBlocks - 1) * dart.notNull(this.blockSize);
      let lastBlockSize = this.doFinal(data, lastBlockOffset, out, lastBlockOffset);
      return out[$sublist](0, lastBlockOffset + dart.notNull(lastBlockSize));
    }
    processBlock(inp, inpOff, out, outOff) {
      return this.cipher.processBlock(inp, inpOff, out, outOff);
    }
    doFinal(inp, inpOff, out, outOff) {
      let t2;
      if (dart.test(this[_encrypting])) {
        let lastInputBlock = (t2 = _native_typed_data.NativeUint8List.new(this.blockSize), t2[$setAll](0, inp[$sublist](inpOff)), t2);
        let remainder = dart.notNull(inp[$length]) - dart.notNull(inpOff);
        if (remainder < dart.notNull(this.blockSize)) {
          this.padding.addPadding(lastInputBlock, dart.notNull(inp[$length]) - dart.notNull(inpOff));
          this.processBlock(lastInputBlock, 0, out, outOff);
          return this.blockSize;
        } else {
          this.processBlock(inp, inpOff, out, outOff);
          this.padding.addPadding(lastInputBlock, 0);
          this.processBlock(lastInputBlock, 0, out, dart.notNull(outOff) + dart.notNull(this.blockSize));
          return 2 * dart.notNull(this.blockSize);
        }
      } else {
        this.processBlock(inp, inpOff, out, outOff);
        let padCount = this.padding.padCount(out[$sublist](outOff));
        let padOffsetInBlock = dart.notNull(this.blockSize) - dart.notNull(padCount);
        out[$fillRange](dart.notNull(outOff) + padOffsetInBlock, out[$length], 0);
        return padOffsetInBlock;
      }
    }
  };
  (padded_block_cipher_impl.PaddedBlockCipherImpl.new = function(padding, cipher) {
    this[_encrypting] = null;
    this[padding$] = padding;
    this[cipher$0] = cipher;
    ;
  }).prototype = padded_block_cipher_impl.PaddedBlockCipherImpl.prototype;
  dart.addTypeTests(padded_block_cipher_impl.PaddedBlockCipherImpl);
  padded_block_cipher_impl.PaddedBlockCipherImpl[dart.implements] = () => [api.PaddedBlockCipher];
  dart.setMethodSignature(padded_block_cipher_impl.PaddedBlockCipherImpl, () => ({
    __proto__: dart.getMethods(padded_block_cipher_impl.PaddedBlockCipherImpl.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, core.Object]),
    process: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List]),
    processBlock: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int]),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int])
  }));
  dart.setGetterSignature(padded_block_cipher_impl.PaddedBlockCipherImpl, () => ({
    __proto__: dart.getGetters(padded_block_cipher_impl.PaddedBlockCipherImpl.__proto__),
    algorithmName: core.String,
    blockSize: core.int
  }));
  dart.setLibraryUri(padded_block_cipher_impl.PaddedBlockCipherImpl, "package:pointycastle/padded_block_cipher/padded_block_cipher_impl.dart");
  dart.setFieldSignature(padded_block_cipher_impl.PaddedBlockCipherImpl, () => ({
    __proto__: dart.getFields(padded_block_cipher_impl.PaddedBlockCipherImpl.__proto__),
    padding: dart.finalFieldType(api.Padding),
    cipher: dart.finalFieldType(api.BlockCipher),
    [_encrypting]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(padded_block_cipher_impl.PaddedBlockCipherImpl, {
    /*padded_block_cipher_impl.PaddedBlockCipherImpl.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.regex(dart.wrapType(api.PaddedBlockCipher), "^(.+)/([^/]+)$", dart.fn((_, match) => dart.fn(() => {
        let padding = api.Padding.new(match.group(2));
        let underlyingCipher = api.BlockCipher.new(match.group(1));
        return new padded_block_cipher_impl.PaddedBlockCipherImpl.new(padding, underlyingCipher);
      }, VoidToPaddedBlockCipherImpl()), StringAndMatchToFn$5()));
    }
  });
  const _mac = dart.privateName(cbc_block_cipher_mac, "_mac");
  const _buf = dart.privateName(cbc_block_cipher_mac, "_buf");
  const _bufOff = dart.privateName(cbc_block_cipher_mac, "_bufOff");
  const _params = dart.privateName(cbc_block_cipher_mac, "_params");
  const _cipher = dart.privateName(cbc_block_cipher_mac, "_cipher");
  const _macSize = dart.privateName(cbc_block_cipher_mac, "_macSize");
  const _padding = dart.privateName(cbc_block_cipher_mac, "_padding");
  base_mac.BaseMac = class BaseMac extends core.Object {
    process(data) {
      this.update(data, 0, data[$length]);
      let out = _native_typed_data.NativeUint8List.new(this.macSize);
      let len = this.doFinal(out, 0);
      return out[$sublist](0, len);
    }
  };
  (base_mac.BaseMac.new = function() {
    ;
  }).prototype = base_mac.BaseMac.prototype;
  dart.addTypeTests(base_mac.BaseMac);
  base_mac.BaseMac[dart.implements] = () => [api.Mac];
  dart.setMethodSignature(base_mac.BaseMac, () => ({
    __proto__: dart.getMethods(base_mac.BaseMac.__proto__),
    process: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List])
  }));
  dart.setLibraryUri(base_mac.BaseMac, "package:pointycastle/src/impl/base_mac.dart");
  cbc_block_cipher_mac.CBCBlockCipherMac = class CBCBlockCipherMac extends base_mac.BaseMac {
    get algorithmName() {
      let paddingName = this[_padding] != null ? "/" + dart.str(this[_padding].algorithmName) : "";
      return dart.str(this[_cipher].algorithmName) + "_CMAC" + paddingName;
    }
    init(params) {
      if (ParametersWithIVOfCipherParameters().is(params)) {
        this[_params] = params;
      } else if (api.KeyParameter.is(params)) {
        let zeroIV = _native_typed_data.NativeUint8List.new(params.key[$length]);
        this[_params] = new (ParametersWithIVOfCipherParameters()).new(params, zeroIV);
      }
      this.reset();
      this[_cipher].init(true, this[_params]);
    }
    get macSize() {
      return this[_macSize];
    }
    updateByte(inp) {
      let t2;
      if (this[_bufOff] == this[_buf][$length]) {
        this[_cipher].processBlock(this[_buf], 0, this[_mac], 0);
        this[_bufOff] = 0;
      }
      this[_buf][$_set]((t2 = this[_bufOff], this[_bufOff] = dart.notNull(t2) + 1, t2), inp);
    }
    update(inp, inOff, len) {
      if (dart.notNull(len) < 0) {
        dart.throw(new core.ArgumentError.new("Can't have a negative input length!"));
      }
      let blockSize = this[_cipher].blockSize;
      let gapLen = dart.notNull(blockSize) - dart.notNull(this[_bufOff]);
      if (dart.notNull(len) > gapLen) {
        this[_buf][$setRange](this[_bufOff], dart.notNull(this[_bufOff]) + gapLen, inp[$sublist](inOff));
        this[_cipher].processBlock(this[_buf], 0, this[_mac], 0);
        this[_bufOff] = 0;
        len = dart.notNull(len) - gapLen;
        inOff = dart.notNull(inOff) + gapLen;
        while (dart.notNull(len) > dart.notNull(blockSize)) {
          this[_cipher].processBlock(inp, inOff, this[_mac], 0);
          len = dart.notNull(len) - dart.notNull(blockSize);
          inOff = dart.notNull(inOff) + dart.notNull(blockSize);
        }
      }
      this[_buf][$setRange](this[_bufOff], dart.notNull(this[_bufOff]) + dart.notNull(len), inp[$sublist](inOff));
      this[_bufOff] = dart.notNull(this[_bufOff]) + dart.notNull(len);
    }
    doFinal(out, outOff) {
      let blockSize = this[_cipher].blockSize;
      if (this[_padding] == null) {
        while (dart.notNull(this[_bufOff]) < dart.notNull(blockSize)) {
          this[_buf][$_set](this[_bufOff], 0);
          this[_bufOff] = dart.notNull(this[_bufOff]) + 1;
        }
      } else {
        if (this[_bufOff] == blockSize) {
          this[_cipher].processBlock(this[_buf], 0, this[_mac], 0);
          this[_bufOff] = 0;
        }
        this[_padding].addPadding(this[_buf], this[_bufOff]);
      }
      this[_cipher].processBlock(this[_buf], 0, this[_mac], 0);
      out[$setRange](outOff, dart.notNull(outOff) + dart.notNull(this[_macSize]), this[_mac]);
      this.reset();
      return this[_macSize];
    }
    reset() {
      for (let i = 0; i < dart.notNull(this[_buf][$length]); i = i + 1) {
        this[_buf][$_set](i, 0);
      }
      this[_bufOff] = 0;
      this[_cipher].reset();
      if (this[_params] != null) {
        this[_cipher].init(true, this[_params]);
      }
    }
  };
  (cbc_block_cipher_mac.CBCBlockCipherMac.fromCipher = function(cipher) {
    cbc_block_cipher_mac.CBCBlockCipherMac.new.call(this, cipher, (dart.notNull(cipher.blockSize) * 8 / 2)[$truncate](), null);
  }).prototype = cbc_block_cipher_mac.CBCBlockCipherMac.prototype;
  (cbc_block_cipher_mac.CBCBlockCipherMac.fromCipherAndPadding = function(cipher, padding) {
    cbc_block_cipher_mac.CBCBlockCipherMac.new.call(this, cipher, (dart.notNull(cipher.blockSize) * 8 / 2)[$truncate](), padding);
  }).prototype = cbc_block_cipher_mac.CBCBlockCipherMac.prototype;
  (cbc_block_cipher_mac.CBCBlockCipherMac.fromCipherAndMacSize = function(cipher, macSizeInBits) {
    cbc_block_cipher_mac.CBCBlockCipherMac.new.call(this, cipher, macSizeInBits, null);
  }).prototype = cbc_block_cipher_mac.CBCBlockCipherMac.prototype;
  (cbc_block_cipher_mac.CBCBlockCipherMac.new = function(cipher, macSizeInBits, padding) {
    this[_mac] = null;
    this[_buf] = null;
    this[_bufOff] = null;
    this[_params] = null;
    this[_cipher] = new cbc.CBCBlockCipher.new(cipher);
    this[_macSize] = (dart.notNull(macSizeInBits) / 8)[$truncate]();
    this[_padding] = padding;
    if (macSizeInBits[$modulo](8) !== 0) {
      dart.throw(new core.ArgumentError.new("MAC size must be multiple of 8"));
    }
    this[_mac] = _native_typed_data.NativeUint8List.new(cipher.blockSize);
    this[_buf] = _native_typed_data.NativeUint8List.new(cipher.blockSize);
    this[_bufOff] = 0;
  }).prototype = cbc_block_cipher_mac.CBCBlockCipherMac.prototype;
  dart.addTypeTests(cbc_block_cipher_mac.CBCBlockCipherMac);
  dart.setMethodSignature(cbc_block_cipher_mac.CBCBlockCipherMac, () => ({
    __proto__: dart.getMethods(cbc_block_cipher_mac.CBCBlockCipherMac.__proto__),
    init: dart.fnType(dart.void, [api.CipherParameters]),
    updateByte: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(cbc_block_cipher_mac.CBCBlockCipherMac, () => ({
    __proto__: dart.getGetters(cbc_block_cipher_mac.CBCBlockCipherMac.__proto__),
    algorithmName: core.String,
    macSize: core.int
  }));
  dart.setLibraryUri(cbc_block_cipher_mac.CBCBlockCipherMac, "package:pointycastle/macs/cbc_block_cipher_mac.dart");
  dart.setFieldSignature(cbc_block_cipher_mac.CBCBlockCipherMac, () => ({
    __proto__: dart.getFields(cbc_block_cipher_mac.CBCBlockCipherMac.__proto__),
    [_mac]: dart.fieldType(typed_data.Uint8List),
    [_buf]: dart.fieldType(typed_data.Uint8List),
    [_bufOff]: dart.fieldType(core.int),
    [_cipher]: dart.finalFieldType(api.BlockCipher),
    [_padding]: dart.finalFieldType(api.Padding),
    [_macSize]: dart.finalFieldType(core.int),
    [_params]: dart.fieldType(api.ParametersWithIV$(api.CipherParameters))
  }));
  dart.defineLazy(cbc_block_cipher_mac.CBCBlockCipherMac, {
    /*cbc_block_cipher_mac.CBCBlockCipherMac.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.regex(dart.wrapType(api.Mac), "^(.+)/CBC_CMAC(/(.+))?$", dart.fn((_, match) => dart.fn(() => {
        let cipher = api.BlockCipher.new(match.group(1));
        let padding = dart.notNull(match.groupCount) >= 3 && match.group(3) != null && !match.group(3)[$isEmpty] ? api.Padding.new(match.group(3)) : null;
        return new cbc_block_cipher_mac.CBCBlockCipherMac.fromCipherAndPadding(cipher, padding);
      }, VoidToCBCBlockCipherMac()), StringAndMatchToFn$6()));
    }
  });
  const _IV = dart.privateName(cbc, "_IV");
  const _cbcV = dart.privateName(cbc, "_cbcV");
  const _cbcNextV = dart.privateName(cbc, "_cbcNextV");
  const _encrypting$ = dart.privateName(cbc, "_encrypting");
  const _underlyingCipher$ = dart.privateName(cbc, "_underlyingCipher");
  const _encryptBlock$ = dart.privateName(cbc, "_encryptBlock");
  const _decryptBlock$ = dart.privateName(cbc, "_decryptBlock");
  cbc.CBCBlockCipher = class CBCBlockCipher extends base_block_cipher.BaseBlockCipher {
    get algorithmName() {
      return dart.str(this[_underlyingCipher$].algorithmName) + "/CBC";
    }
    get blockSize() {
      return this[_underlyingCipher$].blockSize;
    }
    reset() {
      this[_cbcV][$setAll](0, this[_IV]);
      this[_cbcNextV][$fillRange](0, this[_cbcNextV][$length], 0);
      this[_underlyingCipher$].reset();
    }
    init(forEncryption, params) {
      ParametersWithIVOfCipherParameters()._check(params);
      if (params.iv[$length] != this.blockSize) {
        dart.throw(new core.ArgumentError.new("Initialization vector must be the same length as block size"));
      }
      this[_encrypting$] = forEncryption;
      this[_IV][$setAll](0, params.iv);
      this.reset();
      this[_underlyingCipher$].init(forEncryption, params.parameters);
    }
    processBlock(inp, inpOff, out, outOff) {
      return dart.test(this[_encrypting$]) ? this[_encryptBlock$](inp, inpOff, out, outOff) : this[_decryptBlock$](inp, inpOff, out, outOff);
    }
    [_encryptBlock$](inp, inpOff, out, outOff) {
      let t3, t2;
      if (dart.notNull(inpOff) + dart.notNull(this.blockSize) > dart.notNull(inp[$length])) {
        dart.throw(new core.ArgumentError.new("Input buffer too short"));
      }
      for (let i = 0; i < dart.notNull(this.blockSize); i = i + 1) {
        t2 = this[_cbcV];
        t3 = i;
        t2[$_set](t3, (dart.notNull(t2[$_get](t3)) ^ dart.notNull(inp[$_get](dart.notNull(inpOff) + i))) >>> 0);
      }
      let length = this[_underlyingCipher$].processBlock(this[_cbcV], 0, out, outOff);
      this[_cbcV][$setRange](0, this.blockSize, out[$sublist](outOff));
      return length;
    }
    [_decryptBlock$](inp, inpOff, out, outOff) {
      let t3, t2;
      if (dart.notNull(inpOff) + dart.notNull(this.blockSize) > dart.notNull(inp[$length])) {
        dart.throw(new core.ArgumentError.new("Input buffer too short"));
      }
      this[_cbcNextV][$setRange](0, this.blockSize, inp[$sublist](inpOff));
      let length = this[_underlyingCipher$].processBlock(inp, inpOff, out, outOff);
      for (let i = 0; i < dart.notNull(this.blockSize); i = i + 1) {
        t2 = out;
        t3 = dart.notNull(outOff) + i;
        t2[$_set](t3, (dart.notNull(t2[$_get](t3)) ^ dart.notNull(this[_cbcV][$_get](i))) >>> 0);
      }
      let tmp = null;
      tmp = this[_cbcV];
      this[_cbcV] = this[_cbcNextV];
      this[_cbcNextV] = tmp;
      return length;
    }
  };
  (cbc.CBCBlockCipher.new = function(_underlyingCipher) {
    this[_IV] = null;
    this[_cbcV] = null;
    this[_cbcNextV] = null;
    this[_encrypting$] = null;
    this[_underlyingCipher$] = _underlyingCipher;
    this[_IV] = _native_typed_data.NativeUint8List.new(this.blockSize);
    this[_cbcV] = _native_typed_data.NativeUint8List.new(this.blockSize);
    this[_cbcNextV] = _native_typed_data.NativeUint8List.new(this.blockSize);
  }).prototype = cbc.CBCBlockCipher.prototype;
  dart.addTypeTests(cbc.CBCBlockCipher);
  dart.setMethodSignature(cbc.CBCBlockCipher, () => ({
    __proto__: dart.getMethods(cbc.CBCBlockCipher.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, core.Object]),
    processBlock: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int]),
    [_encryptBlock$]: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int]),
    [_decryptBlock$]: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int])
  }));
  dart.setGetterSignature(cbc.CBCBlockCipher, () => ({
    __proto__: dart.getGetters(cbc.CBCBlockCipher.__proto__),
    algorithmName: core.String,
    blockSize: core.int
  }));
  dart.setLibraryUri(cbc.CBCBlockCipher, "package:pointycastle/block/modes/cbc.dart");
  dart.setFieldSignature(cbc.CBCBlockCipher, () => ({
    __proto__: dart.getFields(cbc.CBCBlockCipher.__proto__),
    [_underlyingCipher$]: dart.finalFieldType(api.BlockCipher),
    [_IV]: dart.fieldType(typed_data.Uint8List),
    [_cbcV]: dart.fieldType(typed_data.Uint8List),
    [_cbcNextV]: dart.fieldType(typed_data.Uint8List),
    [_encrypting$]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(cbc.CBCBlockCipher, {
    /*cbc.CBCBlockCipher.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.BlockCipher), "/CBC", dart.fn((_, match) => dart.fn(() => {
        let underlying = api.BlockCipher.new(match.group(1));
        return new cbc.CBCBlockCipher.new(underlying);
      }, VoidToCBCBlockCipher()), StringAndMatchToFn$7()));
    }
  });
  const _poly = dart.privateName(cmac, "_poly");
  const _ZEROES = dart.privateName(cmac, "_ZEROES");
  const _mac$0 = dart.privateName(cmac, "_mac");
  const _buf$ = dart.privateName(cmac, "_buf");
  const _bufOff$ = dart.privateName(cmac, "_bufOff");
  const _Lu = dart.privateName(cmac, "_Lu");
  const _Lu2 = dart.privateName(cmac, "_Lu2");
  const _params$ = dart.privateName(cmac, "_params");
  const _macSize$ = dart.privateName(cmac, "_macSize");
  const _cipher$ = dart.privateName(cmac, "_cipher");
  const _doubleLu = dart.privateName(cmac, "_doubleLu");
  cmac.CMac = class CMac extends base_mac.BaseMac {
    get algorithmName() {
      let blockCipherAlgorithmName = this[_cipher$].algorithmName[$split]("/")[$first];
      return dart.str(blockCipherAlgorithmName) + "/CMAC";
    }
    static shiftLeft(block, output) {
      let i = block[$length];
      let bit = 0;
      while ((i = dart.notNull(i) - 1) >= 0) {
        let b = dart.notNull(block[$_get](i)) & 255;
        output[$_set](i, (b << 1 | bit) >>> 0);
        bit = b >> 7 & 1;
      }
      return bit;
    }
    [_doubleLu](inp) {
      let t3, t2, t3$, t2$, t3$0, t2$0;
      let ret = _native_typed_data.NativeUint8List.new(inp[$length]);
      let carry = cmac.CMac.shiftLeft(inp, ret);
      let mask = -dart.notNull(carry) & 255;
      t2 = ret;
      t3 = dart.notNull(inp[$length]) - 3;
      t2[$_set](t3, (dart.notNull(t2[$_get](t3)) ^ (dart.notNull(this[_poly][$_get](1)) & mask) >>> 0) >>> 0);
      t2$ = ret;
      t3$ = dart.notNull(inp[$length]) - 2;
      t2$[$_set](t3$, (dart.notNull(t2$[$_get](t3$)) ^ (dart.notNull(this[_poly][$_get](2)) & mask) >>> 0) >>> 0);
      t2$0 = ret;
      t3$0 = dart.notNull(inp[$length]) - 1;
      t2$0[$_set](t3$0, (dart.notNull(t2$0[$_get](t3$0)) ^ (dart.notNull(this[_poly][$_get](3)) & mask) >>> 0) >>> 0);
      return ret;
    }
    static lookupPoly(blockSizeLength) {
      let xor = null;
      switch (dart.notNull(blockSizeLength) * 8) {
        case 64:
        {
          xor = 27;
          break;
        }
        case 128:
        {
          xor = 135;
          break;
        }
        case 160:
        {
          xor = 45;
          break;
        }
        case 192:
        {
          xor = 135;
          break;
        }
        case 224:
        {
          xor = 777;
          break;
        }
        case 256:
        {
          xor = 1061;
          break;
        }
        case 320:
        {
          xor = 27;
          break;
        }
        case 384:
        {
          xor = 4109;
          break;
        }
        case 448:
        {
          xor = 2129;
          break;
        }
        case 512:
        {
          xor = 293;
          break;
        }
        case 768:
        {
          xor = 655377;
          break;
        }
        case 1024:
        {
          xor = 524355;
          break;
        }
        case 2048:
        {
          xor = 548865;
          break;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("Unknown block size for CMAC: " + dart.str(dart.notNull(blockSizeLength) * 8)));
        }
      }
      let out = _native_typed_data.NativeUint8List.new(4);
      out[$_set](3, xor[$rightShift](0));
      out[$_set](2, xor[$rightShift](8));
      out[$_set](1, xor[$rightShift](16));
      out[$_set](0, xor[$rightShift](24));
      return out;
    }
    init(keyParams) {
      api.KeyParameter._check(keyParams);
      let zeroIV = _native_typed_data.NativeUint8List.new(keyParams.key[$length]);
      this[_params$] = new (ParametersWithIVOfCipherParameters()).new(keyParams, zeroIV);
      this[_cipher$].init(true, this[_params$]);
      let L = _native_typed_data.NativeUint8List.new(this[_ZEROES][$length]);
      this[_cipher$].processBlock(this[_ZEROES], 0, L, 0);
      this[_Lu] = this[_doubleLu](L);
      this[_Lu2] = this[_doubleLu](this[_Lu]);
      this.reset();
    }
    get macSize() {
      return this[_macSize$];
    }
    updateByte(inp) {
      let t2;
      if (this[_bufOff$] == this[_buf$][$length]) {
        this[_cipher$].processBlock(this[_buf$], 0, this[_mac$0], 0);
        this[_bufOff$] = 0;
      }
      this[_buf$][$_set]((t2 = this[_bufOff$], this[_bufOff$] = dart.notNull(t2) + 1, t2), inp);
    }
    update(inp, inOff, len) {
      if (dart.notNull(len) < 0) {
        dart.throw(new core.ArgumentError.new("Can't have a negative input length!"));
      }
      let blockSize = this[_cipher$].blockSize;
      let gapLen = dart.notNull(blockSize) - dart.notNull(this[_bufOff$]);
      if (dart.notNull(len) > gapLen) {
        this[_buf$][$setRange](this[_bufOff$], dart.notNull(this[_bufOff$]) + gapLen, inp[$sublist](inOff));
        this[_cipher$].processBlock(this[_buf$], 0, this[_mac$0], 0);
        this[_bufOff$] = 0;
        len = dart.notNull(len) - gapLen;
        inOff = dart.notNull(inOff) + gapLen;
        while (dart.notNull(len) > dart.notNull(blockSize)) {
          this[_cipher$].processBlock(inp, inOff, this[_mac$0], 0);
          len = dart.notNull(len) - dart.notNull(blockSize);
          inOff = dart.notNull(inOff) + dart.notNull(blockSize);
        }
      }
      this[_buf$][$setRange](this[_bufOff$], dart.notNull(this[_bufOff$]) + dart.notNull(len), inp[$sublist](inOff));
      this[_bufOff$] = dart.notNull(this[_bufOff$]) + dart.notNull(len);
    }
    doFinal(out, outOff) {
      let t3, t2;
      let blockSize = this[_cipher$].blockSize;
      let lu = null;
      if (this[_bufOff$] == blockSize) {
        lu = this[_Lu];
      } else {
        new iso7816d4.ISO7816d4Padding.new().addPadding(this[_buf$], this[_bufOff$]);
        lu = this[_Lu2];
      }
      for (let i = 0; i < dart.notNull(this[_mac$0][$length]); i = i + 1) {
        t2 = this[_buf$];
        t3 = i;
        t2[$_set](t3, (dart.notNull(t2[$_get](t3)) ^ dart.notNull(lu[$_get](i))) >>> 0);
      }
      this[_cipher$].processBlock(this[_buf$], 0, this[_mac$0], 0);
      out[$setRange](outOff, dart.notNull(outOff) + dart.notNull(this[_macSize$]), this[_mac$0]);
      this.reset();
      return this[_macSize$];
    }
    reset() {
      for (let i = 0; i < dart.notNull(this[_buf$][$length]); i = i + 1) {
        this[_buf$][$_set](i, 0);
      }
      this[_bufOff$] = 0;
      this[_cipher$].reset();
      if (this[_params$] != null) {
        this[_cipher$].init(true, this[_params$]);
      }
    }
  };
  (cmac.CMac.fromCipher = function(cipher) {
    cmac.CMac.new.call(this, cipher, dart.notNull(cipher.blockSize) * 8);
  }).prototype = cmac.CMac.prototype;
  (cmac.CMac.new = function(cipher, macSizeInBits) {
    this[_poly] = null;
    this[_ZEROES] = null;
    this[_mac$0] = null;
    this[_buf$] = null;
    this[_bufOff$] = null;
    this[_Lu] = null;
    this[_Lu2] = null;
    this[_params$] = null;
    this[_macSize$] = (dart.notNull(macSizeInBits) / 8)[$truncate]();
    this[_cipher$] = new cbc.CBCBlockCipher.new(cipher);
    if (macSizeInBits[$modulo](8) !== 0) {
      dart.throw(new core.ArgumentError.new("MAC size must be multiple of 8"));
    }
    if (dart.notNull(macSizeInBits) > dart.notNull(this[_cipher$].blockSize) * 8) {
      dart.throw(new core.ArgumentError.new("MAC size must be less or equal to " + dart.str(dart.notNull(this[_cipher$].blockSize) * 8)));
    }
    this[_poly] = cmac.CMac.lookupPoly(cipher.blockSize);
    this[_mac$0] = _native_typed_data.NativeUint8List.new(cipher.blockSize);
    this[_buf$] = _native_typed_data.NativeUint8List.new(cipher.blockSize);
    this[_ZEROES] = _native_typed_data.NativeUint8List.new(cipher.blockSize);
    this[_bufOff$] = 0;
  }).prototype = cmac.CMac.prototype;
  dart.addTypeTests(cmac.CMac);
  dart.setMethodSignature(cmac.CMac, () => ({
    __proto__: dart.getMethods(cmac.CMac.__proto__),
    [_doubleLu]: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List]),
    init: dart.fnType(dart.void, [core.Object]),
    updateByte: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(cmac.CMac, () => ({
    __proto__: dart.getGetters(cmac.CMac.__proto__),
    algorithmName: core.String,
    macSize: core.int
  }));
  dart.setLibraryUri(cmac.CMac, "package:pointycastle/macs/cmac.dart");
  dart.setFieldSignature(cmac.CMac, () => ({
    __proto__: dart.getFields(cmac.CMac.__proto__),
    [_poly]: dart.fieldType(typed_data.Uint8List),
    [_ZEROES]: dart.fieldType(typed_data.Uint8List),
    [_mac$0]: dart.fieldType(typed_data.Uint8List),
    [_buf$]: dart.fieldType(typed_data.Uint8List),
    [_bufOff$]: dart.fieldType(core.int),
    [_cipher$]: dart.finalFieldType(api.BlockCipher),
    [_macSize$]: dart.finalFieldType(core.int),
    [_Lu]: dart.fieldType(typed_data.Uint8List),
    [_Lu2]: dart.fieldType(typed_data.Uint8List),
    [_params$]: dart.fieldType(api.ParametersWithIV$(api.CipherParameters))
  }));
  dart.defineLazy(cmac.CMac, {
    /*cmac.CMac.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.Mac), "/CMAC", dart.fn((_, match) => dart.fn(() => {
        let cipher = api.BlockCipher.new(match.group(1));
        return new cmac.CMac.fromCipher(cipher);
      }, VoidToCMac()), StringAndMatchToFn$8()));
    }
  });
  const _digestSize = dart.privateName(hmac, "_digestSize");
  const _inputPad = dart.privateName(hmac, "_inputPad");
  const _outputBuf = dart.privateName(hmac, "_outputBuf");
  const _digest$1 = dart.privateName(hmac, "_digest");
  const _blockLength$ = dart.privateName(hmac, "_blockLength");
  const _xorPad = dart.privateName(hmac, "_xorPad");
  hmac.HMac = class HMac extends base_mac.BaseMac {
    get algorithmName() {
      return dart.str(this[_digest$1].algorithmName) + "/HMAC";
    }
    get macSize() {
      return this[_digestSize];
    }
    reset() {
      this[_digest$1].reset();
      this[_digest$1].update(this[_inputPad], 0, this[_inputPad][$length]);
    }
    init(params) {
      api.KeyParameter._check(params);
      this[_digest$1].reset();
      let key = params.key;
      let keyLength = key[$length];
      if (dart.notNull(keyLength) > dart.notNull(this[_blockLength$])) {
        this[_digest$1].update(key, 0, keyLength);
        this[_digest$1].doFinal(this[_inputPad], 0);
        keyLength = this[_digestSize];
      } else {
        this[_inputPad][$setRange](0, keyLength, key);
      }
      this[_inputPad][$fillRange](keyLength, this[_inputPad][$length], 0);
      this[_outputBuf][$setRange](0, this[_blockLength$], this[_inputPad]);
      this[_xorPad](this[_inputPad], this[_blockLength$], hmac.HMac._IPAD);
      this[_xorPad](this[_outputBuf], this[_blockLength$], hmac.HMac._OPAD);
      this[_digest$1].update(this[_inputPad], 0, this[_inputPad][$length]);
    }
    updateByte(inp) {
      this[_digest$1].updateByte(inp);
    }
    update(inp, inpOff, len) {
      this[_digest$1].update(inp, inpOff, len);
    }
    doFinal(out, outOff) {
      this[_digest$1].doFinal(this[_outputBuf], this[_blockLength$]);
      this[_digest$1].update(this[_outputBuf], 0, this[_outputBuf][$length]);
      let len = this[_digest$1].doFinal(out, outOff);
      this[_outputBuf][$fillRange](this[_blockLength$], this[_outputBuf][$length], 0);
      this[_digest$1].update(this[_inputPad], 0, this[_inputPad][$length]);
      return len;
    }
    [_xorPad](pad, len, n) {
      let t3, t2;
      for (let i = 0; i < dart.notNull(len); i = i + 1) {
        t2 = pad;
        t3 = i;
        t2[$_set](t3, (dart.notNull(t2[$_get](t3)) ^ dart.notNull(n)) >>> 0);
      }
    }
  };
  (hmac.HMac.new = function(_digest, _blockLength) {
    this[_digestSize] = null;
    this[_inputPad] = null;
    this[_outputBuf] = null;
    this[_digest$1] = _digest;
    this[_blockLength$] = _blockLength;
    this[_digestSize] = this[_digest$1].digestSize;
    this[_inputPad] = _native_typed_data.NativeUint8List.new(this[_blockLength$]);
    this[_outputBuf] = _native_typed_data.NativeUint8List.new(dart.notNull(this[_blockLength$]) + dart.notNull(this[_digestSize]));
  }).prototype = hmac.HMac.prototype;
  dart.addTypeTests(hmac.HMac);
  dart.setMethodSignature(hmac.HMac, () => ({
    __proto__: dart.getMethods(hmac.HMac.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.Object]),
    updateByte: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    [_xorPad]: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int])
  }));
  dart.setGetterSignature(hmac.HMac, () => ({
    __proto__: dart.getGetters(hmac.HMac.__proto__),
    algorithmName: core.String,
    macSize: core.int
  }));
  dart.setLibraryUri(hmac.HMac, "package:pointycastle/macs/hmac.dart");
  dart.setFieldSignature(hmac.HMac, () => ({
    __proto__: dart.getFields(hmac.HMac.__proto__),
    [_digest$1]: dart.fieldType(api.Digest),
    [_digestSize]: dart.fieldType(core.int),
    [_blockLength$]: dart.fieldType(core.int),
    [_inputPad]: dart.fieldType(typed_data.Uint8List),
    [_outputBuf]: dart.fieldType(typed_data.Uint8List)
  }));
  dart.defineLazy(hmac.HMac, {
    /*hmac.HMac.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.Mac), "/HMAC", dart.fn((_, match) => {
        let digestName = match.group(1);
        let blockLength = hmac.HMac._DIGEST_BLOCK_LENGTH[$_get](digestName);
        if (blockLength == null) {
          dart.throw(new api.RegistryFactoryException.new("Digest " + dart.str(digestName) + " unknown for " + "HMAC construction."));
        }
        return dart.fn(() => {
          let digest = api.Digest.new(digestName);
          return new hmac.HMac.new(digest, blockLength);
        }, VoidToHMac());
      }, StringAndMatchToFn$9()));
    },
    /*hmac.HMac._DIGEST_BLOCK_LENGTH*/get _DIGEST_BLOCK_LENGTH() {
      return new (IdentityMapOfString$int()).from(["GOST3411", 32, "MD2", 16, "MD4", 64, "MD5", 64, "RIPEMD-128", 64, "RIPEMD-160", 64, "SHA-1", 64, "SHA-224", 64, "SHA-256", 64, "SHA-384", 128, "SHA-512", 128, "Tiger", 64, "Whirlpool", 64]);
    },
    /*hmac.HMac._IPAD*/get _IPAD() {
      return 54;
    },
    /*hmac.HMac._OPAD*/get _OPAD() {
      return 92;
    }
  });
  const _random$0 = dart.privateName(rsa_key_generator, "_random");
  const _params$0 = dart.privateName(rsa_key_generator, "_params");
  rsa_key_generator.RSAKeyGenerator = class RSAKeyGenerator extends core.Object {
    get algorithmName() {
      return "RSA";
    }
    init(params) {
      if (ParametersWithRandomOfCipherParameters().is(params)) {
        this[_random$0] = params.random;
        this[_params$0] = api$1.RSAKeyGeneratorParameters._check(params.parameters);
      } else {
        this[_random$0] = api.SecureRandom.new();
        this[_params$0] = api$1.RSAKeyGeneratorParameters._check(params);
      }
      if (dart.notNull(this[_params$0].bitStrength) < 12) {
        dart.throw(new core.ArgumentError.new("key bit strength cannot be smaller than 12"));
      }
      if (!dart.test(rsa_key_generator._testBit(this[_params$0].publicExponent, 0))) {
        dart.throw(new core.ArgumentError.new("Public exponent cannot be even"));
      }
    }
    generateKeyPair() {
      let p = null;
      let q = null;
      let n = null;
      let e = null;
      let strength = this[_params$0].bitStrength;
      let pbitlength = ((dart.notNull(strength) + 1) / 2)[$truncate]();
      let qbitlength = dart.notNull(strength) - pbitlength;
      let mindiffbits = (dart.notNull(strength) / 3)[$truncate]();
      e = this[_params$0].publicExponent;
      for (;;) {
        p = rsa_key_generator.generateProbablePrime(pbitlength, 1, this[_random$0]);
        if (dart.equals(dart.dsend(p, '%', [e]), core.BigInt.one)) {
          continue;
        }
        if (!dart.test(rsa_key_generator._isProbablePrime(core.BigInt._check(p), this[_params$0].certainty))) {
          continue;
        }
        if (dart.equals(dart.dsend(e, 'gcd', [dart.dsend(p, '-', [core.BigInt.one])]), core.BigInt.one)) {
          break;
        }
      }
      for (;;) {
        for (;;) {
          q = rsa_key_generator.generateProbablePrime(qbitlength, 1, this[_random$0]);
          if (dart.dtest(dart.dsend(dart.dload(dart.dsend(dart.dsend(q, '-', [p]), 'abs', []), 'bitLength'), '<', [mindiffbits]))) {
            continue;
          }
          if (dart.equals(dart.dsend(q, '%', [e]), core.BigInt.one)) {
            continue;
          }
          if (!dart.test(rsa_key_generator._isProbablePrime(core.BigInt._check(q), this[_params$0].certainty))) {
            continue;
          }
          if (dart.equals(dart.dsend(e, 'gcd', [dart.dsend(q, '-', [core.BigInt.one])]), core.BigInt.one)) {
            break;
          }
        }
        n = dart.dsend(p, '*', [q]);
        if (dart.equals(dart.dload(n, 'bitLength'), this[_params$0].bitStrength)) {
          break;
        }
        p = dart.dtest(dart.dsend(dart.dsend(p, 'compareTo', [q]), '>', [0])) ? p : q;
      }
      if (dart.dtest(dart.dsend(p, '<', [q]))) {
        let swap = p;
        p = q;
        q = swap;
      }
      let pSub1 = dart.dsend(p, '-', [core.BigInt.one]);
      let qSub1 = dart.dsend(q, '-', [core.BigInt.one]);
      let phi = dart.dsend(pSub1, '*', [qSub1]);
      let d = dart.dsend(e, 'modInverse', [phi]);
      return new (AsymmetricKeyPairOfPublicKey$PrivateKey()).new(new api$.RSAPublicKey.new(core.BigInt._check(n), core.BigInt._check(e)), new api$.RSAPrivateKey.new(core.BigInt._check(n), core.BigInt._check(d), core.BigInt._check(p), core.BigInt._check(q)));
    }
  };
  (rsa_key_generator.RSAKeyGenerator.new = function() {
    this[_random$0] = null;
    this[_params$0] = null;
    ;
  }).prototype = rsa_key_generator.RSAKeyGenerator.prototype;
  dart.addTypeTests(rsa_key_generator.RSAKeyGenerator);
  rsa_key_generator.RSAKeyGenerator[dart.implements] = () => [api.KeyGenerator];
  dart.setMethodSignature(rsa_key_generator.RSAKeyGenerator, () => ({
    __proto__: dart.getMethods(rsa_key_generator.RSAKeyGenerator.__proto__),
    init: dart.fnType(dart.void, [api.CipherParameters]),
    generateKeyPair: dart.fnType(api.AsymmetricKeyPair$(api.PublicKey, api.PrivateKey), [])
  }));
  dart.setGetterSignature(rsa_key_generator.RSAKeyGenerator, () => ({
    __proto__: dart.getGetters(rsa_key_generator.RSAKeyGenerator.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(rsa_key_generator.RSAKeyGenerator, "package:pointycastle/key_generators/rsa_key_generator.dart");
  dart.setFieldSignature(rsa_key_generator.RSAKeyGenerator, () => ({
    __proto__: dart.getFields(rsa_key_generator.RSAKeyGenerator.__proto__),
    [_random$0]: dart.fieldType(api.SecureRandom),
    [_params$0]: dart.fieldType(api$1.RSAKeyGeneratorParameters)
  }));
  dart.defineLazy(rsa_key_generator.RSAKeyGenerator, {
    /*rsa_key_generator.RSAKeyGenerator.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.KeyGenerator), "RSA", dart.fn(() => new rsa_key_generator.RSAKeyGenerator.new(), VoidToRSAKeyGenerator()));
    }
  });
  rsa_key_generator._testBit = function _testBit$(i, n) {
    return !dart.equals(i['&'](core.BigInt.one['<<'](n)), core.BigInt.zero);
  };
  rsa_key_generator._lbit = function _lbit(x) {
    if (dart.equals(x, core.BigInt.zero)) return -1;
    let r = 0;
    while (dart.equals(x['&'](core._BigIntImpl.from(4294967295)), core.BigInt.zero)) {
      x = x['>>'](32);
      r = r + 32;
    }
    if (dart.equals(x['&'](core._BigIntImpl.from(65535)), core.BigInt.zero)) {
      x = x['>>'](16);
      r = r + 16;
    }
    if (dart.equals(x['&'](core._BigIntImpl.from(255)), core.BigInt.zero)) {
      x = x['>>'](8);
      r = r + 8;
    }
    if (dart.equals(x['&'](core._BigIntImpl.from(15)), core.BigInt.zero)) {
      x = x['>>'](4);
      r = r + 4;
    }
    if (dart.equals(x['&'](core._BigIntImpl.from(3)), core.BigInt.zero)) {
      x = x['>>'](2);
      r = r + 2;
    }
    if (dart.equals(x['&'](core.BigInt.one), core.BigInt.zero)) r = r + 1;
    return r;
  };
  rsa_key_generator._millerRabin = function _millerRabin(b, t) {
    let t2;
    let n1 = b['-'](core.BigInt.one);
    let k = rsa_key_generator._lbit(n1);
    if (dart.notNull(k) <= 0) return false;
    let r = n1['>>'](k);
    t = (dart.notNull(t) + 1)[$rightShift](1);
    if (dart.notNull(t) > dart.notNull(rsa_key_generator._lowprimes[$length])) t = rsa_key_generator._lowprimes[$length];
    let a = null;
    for (let i = 0; i < dart.notNull(t); i = i + 1) {
      a = rsa_key_generator._lowprimes[$_get](i);
      let y = a.modPow(r, b);
      if (y.compareTo(core.BigInt.one) !== 0 && y.compareTo(n1) !== 0) {
        let j = 1;
        while ((t2 = j, j = t2 + 1, t2) < dart.notNull(k) && y.compareTo(n1) !== 0) {
          y = y.modPow(rsa_key_generator._bigTwo, b);
          if (y.compareTo(core.BigInt.one) === 0) return false;
        }
        if (y.compareTo(n1) !== 0) return false;
      }
    }
    return true;
  };
  rsa_key_generator._isProbablePrime = function _isProbablePrime(b, t) {
    let t3, t3$;
    let i = null;
    let x = b.abs();
    if (dart.test(b['<='](rsa_key_generator._lowprimes[$last]))) {
      for (let t2 = i = 0; dart.dtest(dart.dsend(i, '<', [rsa_key_generator._lowprimes[$length]])); i = dart.dsend(i, '+', [1]))
        if (dart.equals(b, rsa_key_generator._lowprimes[$_get](core.int._check(i)))) return true;
      return false;
    }
    if (dart.test(x.isEven)) return false;
    i = 1;
    while (dart.dtest(dart.dsend(i, '<', [rsa_key_generator._lowprimes[$length]]))) {
      let m = rsa_key_generator._lowprimes[$_get](core.int._check(i));
      let j = dart.dsend(i, '+', [1]);
      while (dart.dtest(dart.dsend(j, '<', [rsa_key_generator._lowprimes[$length]])) && dart.test(m['<'](rsa_key_generator._lplim)))
        m = m['*'](rsa_key_generator._lowprimes[$_get](core.int._check((t3 = j, j = dart.dsend(t3, '+', [1]), t3))));
      m = x['%'](m);
      while (dart.dtest(dart.dsend(i, '<', [j])))
        if (dart.equals(m['%'](rsa_key_generator._lowprimes[$_get](core.int._check((t3$ = i, i = dart.dsend(t3$, '+', [1]), t3$)))), 0)) return false;
    }
    return rsa_key_generator._millerRabin(x, t);
  };
  rsa_key_generator.generateProbablePrime = function generateProbablePrime(bitLength, certainty, rnd) {
    if (dart.notNull(bitLength) < 2) {
      return core.BigInt.one;
    }
    let candidate = rnd.nextBigInteger(bitLength);
    if (!dart.test(rsa_key_generator._testBit(candidate, dart.notNull(bitLength) - 1))) {
      candidate = candidate['|'](core.BigInt.one['<<'](dart.notNull(bitLength) - 1));
    }
    if (dart.test(candidate.isEven)) {
      candidate = candidate['+'](core.BigInt.one);
    }
    while (!dart.test(rsa_key_generator._isProbablePrime(candidate, certainty))) {
      candidate = candidate['+'](rsa_key_generator._bigTwo);
      if (dart.notNull(candidate.bitLength) > dart.notNull(bitLength)) {
        candidate = candidate['-'](core.BigInt.one['<<'](dart.notNull(bitLength) - 1));
      }
    }
    return candidate;
  };
  dart.defineLazy(rsa_key_generator, {
    /*rsa_key_generator._lowprimes*/get _lowprimes() {
      return JSArrayOfBigInt().of([core._BigIntImpl.from(2), core._BigIntImpl.from(3), core._BigIntImpl.from(5), core._BigIntImpl.from(7), core._BigIntImpl.from(11), core._BigIntImpl.from(13), core._BigIntImpl.from(17), core._BigIntImpl.from(19), core._BigIntImpl.from(23), core._BigIntImpl.from(29), core._BigIntImpl.from(31), core._BigIntImpl.from(37), core._BigIntImpl.from(41), core._BigIntImpl.from(43), core._BigIntImpl.from(47), core._BigIntImpl.from(53), core._BigIntImpl.from(59), core._BigIntImpl.from(61), core._BigIntImpl.from(67), core._BigIntImpl.from(71), core._BigIntImpl.from(73), core._BigIntImpl.from(79), core._BigIntImpl.from(83), core._BigIntImpl.from(89), core._BigIntImpl.from(97), core._BigIntImpl.from(101), core._BigIntImpl.from(103), core._BigIntImpl.from(107), core._BigIntImpl.from(109), core._BigIntImpl.from(113), core._BigIntImpl.from(127), core._BigIntImpl.from(131), core._BigIntImpl.from(137), core._BigIntImpl.from(139), core._BigIntImpl.from(149), core._BigIntImpl.from(151), core._BigIntImpl.from(157), core._BigIntImpl.from(163), core._BigIntImpl.from(167), core._BigIntImpl.from(173), core._BigIntImpl.from(179), core._BigIntImpl.from(181), core._BigIntImpl.from(191), core._BigIntImpl.from(193), core._BigIntImpl.from(197), core._BigIntImpl.from(199), core._BigIntImpl.from(211), core._BigIntImpl.from(223), core._BigIntImpl.from(227), core._BigIntImpl.from(229), core._BigIntImpl.from(233), core._BigIntImpl.from(239), core._BigIntImpl.from(241), core._BigIntImpl.from(251), core._BigIntImpl.from(257), core._BigIntImpl.from(263), core._BigIntImpl.from(269), core._BigIntImpl.from(271), core._BigIntImpl.from(277), core._BigIntImpl.from(281), core._BigIntImpl.from(283), core._BigIntImpl.from(293), core._BigIntImpl.from(307), core._BigIntImpl.from(311), core._BigIntImpl.from(313), core._BigIntImpl.from(317), core._BigIntImpl.from(331), core._BigIntImpl.from(337), core._BigIntImpl.from(347), core._BigIntImpl.from(349), core._BigIntImpl.from(353), core._BigIntImpl.from(359), core._BigIntImpl.from(367), core._BigIntImpl.from(373), core._BigIntImpl.from(379), core._BigIntImpl.from(383), core._BigIntImpl.from(389), core._BigIntImpl.from(397), core._BigIntImpl.from(401), core._BigIntImpl.from(409), core._BigIntImpl.from(419), core._BigIntImpl.from(421), core._BigIntImpl.from(431), core._BigIntImpl.from(433), core._BigIntImpl.from(439), core._BigIntImpl.from(443), core._BigIntImpl.from(449), core._BigIntImpl.from(457), core._BigIntImpl.from(461), core._BigIntImpl.from(463), core._BigIntImpl.from(467), core._BigIntImpl.from(479), core._BigIntImpl.from(487), core._BigIntImpl.from(491), core._BigIntImpl.from(499), core._BigIntImpl.from(503), core._BigIntImpl.from(509)]);
    },
    /*rsa_key_generator._lplim*/get _lplim() {
      return core.BigInt.one['<<'](26)['~/'](rsa_key_generator._lowprimes[$last]);
    },
    /*rsa_key_generator._bigTwo*/get _bigTwo() {
      return core._BigIntImpl.from(2);
    }
  });
  const _domainParameters = dart.privateName(api$1, "_domainParameters");
  api$1.ECKeyGeneratorParameters = class ECKeyGeneratorParameters extends api.KeyGeneratorParameters {
    get domainParameters() {
      return this[_domainParameters];
    }
  };
  (api$1.ECKeyGeneratorParameters.new = function(domainParameters) {
    this[_domainParameters] = null;
    api$1.ECKeyGeneratorParameters.__proto__.new.call(this, domainParameters.n.bitLength);
    this[_domainParameters] = domainParameters;
  }).prototype = api$1.ECKeyGeneratorParameters.prototype;
  dart.addTypeTests(api$1.ECKeyGeneratorParameters);
  dart.setGetterSignature(api$1.ECKeyGeneratorParameters, () => ({
    __proto__: dart.getGetters(api$1.ECKeyGeneratorParameters.__proto__),
    domainParameters: api$0.ECDomainParameters
  }));
  dart.setLibraryUri(api$1.ECKeyGeneratorParameters, "package:pointycastle/key_generators/api.dart");
  dart.setFieldSignature(api$1.ECKeyGeneratorParameters, () => ({
    __proto__: dart.getFields(api$1.ECKeyGeneratorParameters.__proto__),
    [_domainParameters]: dart.fieldType(api$0.ECDomainParameters)
  }));
  const publicExponent$ = dart.privateName(api$1, "RSAKeyGeneratorParameters.publicExponent");
  const certainty$ = dart.privateName(api$1, "RSAKeyGeneratorParameters.certainty");
  api$1.RSAKeyGeneratorParameters = class RSAKeyGeneratorParameters extends api.KeyGeneratorParameters {
    get publicExponent() {
      return this[publicExponent$];
    }
    set publicExponent(value) {
      super.publicExponent = value;
    }
    get certainty() {
      return this[certainty$];
    }
    set certainty(value) {
      super.certainty = value;
    }
  };
  (api$1.RSAKeyGeneratorParameters.new = function(publicExponent, bitStrength, certainty) {
    this[publicExponent$] = publicExponent;
    this[certainty$] = certainty;
    api$1.RSAKeyGeneratorParameters.__proto__.new.call(this, bitStrength);
    ;
  }).prototype = api$1.RSAKeyGeneratorParameters.prototype;
  dart.addTypeTests(api$1.RSAKeyGeneratorParameters);
  dart.setLibraryUri(api$1.RSAKeyGeneratorParameters, "package:pointycastle/key_generators/api.dart");
  dart.setFieldSignature(api$1.RSAKeyGeneratorParameters, () => ({
    __proto__: dart.getFields(api$1.RSAKeyGeneratorParameters.__proto__),
    publicExponent: dart.finalFieldType(core.BigInt),
    certainty: dart.finalFieldType(core.int)
  }));
  const _params$1 = dart.privateName(ec_key_generator, "_params");
  const _random$1 = dart.privateName(ec_key_generator, "_random");
  ec_key_generator.ECKeyGenerator = class ECKeyGenerator extends core.Object {
    get algorithmName() {
      return "EC";
    }
    init(params) {
      let ecparams = null;
      if (ParametersWithRandomOfCipherParameters().is(params)) {
        this[_random$1] = params.random;
        ecparams = api$1.ECKeyGeneratorParameters._check(params.parameters);
      } else {
        this[_random$1] = api.SecureRandom.new();
        ecparams = api$1.ECKeyGeneratorParameters._check(params);
      }
      this[_params$1] = ecparams.domainParameters;
    }
    generateKeyPair() {
      let n = this[_params$1].n;
      let nBitLength = n.bitLength;
      let d = null;
      do {
        d = this[_random$1].nextBigInteger(nBitLength);
      } while (dart.equals(d, core.BigInt.zero) || dart.dtest(dart.dsend(d, '>=', [n])));
      let Q = this[_params$1].G['*'](core.BigInt._check(d));
      return new (AsymmetricKeyPairOfPublicKey$PrivateKey()).new(new api$0.ECPublicKey.new(Q, this[_params$1]), new api$0.ECPrivateKey.new(core.BigInt._check(d), this[_params$1]));
    }
  };
  (ec_key_generator.ECKeyGenerator.new = function() {
    this[_params$1] = null;
    this[_random$1] = null;
    ;
  }).prototype = ec_key_generator.ECKeyGenerator.prototype;
  dart.addTypeTests(ec_key_generator.ECKeyGenerator);
  ec_key_generator.ECKeyGenerator[dart.implements] = () => [api.KeyGenerator];
  dart.setMethodSignature(ec_key_generator.ECKeyGenerator, () => ({
    __proto__: dart.getMethods(ec_key_generator.ECKeyGenerator.__proto__),
    init: dart.fnType(dart.void, [api.CipherParameters]),
    generateKeyPair: dart.fnType(api.AsymmetricKeyPair$(api.PublicKey, api.PrivateKey), [])
  }));
  dart.setGetterSignature(ec_key_generator.ECKeyGenerator, () => ({
    __proto__: dart.getGetters(ec_key_generator.ECKeyGenerator.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(ec_key_generator.ECKeyGenerator, "package:pointycastle/key_generators/ec_key_generator.dart");
  dart.setFieldSignature(ec_key_generator.ECKeyGenerator, () => ({
    __proto__: dart.getFields(ec_key_generator.ECKeyGenerator.__proto__),
    [_params$1]: dart.fieldType(api$0.ECDomainParameters),
    [_random$1]: dart.fieldType(api.SecureRandom)
  }));
  dart.defineLazy(ec_key_generator.ECKeyGenerator, {
    /*ec_key_generator.ECKeyGenerator.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.KeyGenerator), "EC", dart.fn(() => new ec_key_generator.ECKeyGenerator.new(), VoidToECKeyGenerator()));
    }
  });
  const _params$2 = dart.privateName(scrypt, "_params");
  const _scryptJ = dart.privateName(scrypt, "_scryptJ");
  const _smix = dart.privateName(scrypt, "_smix");
  const _arraycopy = dart.privateName(scrypt, "_arraycopy");
  const _blockmix_salsa8 = dart.privateName(scrypt, "_blockmix_salsa8");
  const _integerify = dart.privateName(scrypt, "_integerify");
  const _blockxor = dart.privateName(scrypt, "_blockxor");
  const _salsa20_8 = dart.privateName(scrypt, "_salsa20_8");
  base_key_derivator.BaseKeyDerivator = class BaseKeyDerivator extends core.Object {
    process(data) {
      let out = _native_typed_data.NativeUint8List.new(this.keySize);
      let len = this.deriveKey(data, 0, out, 0);
      return out[$sublist](0, len);
    }
  };
  (base_key_derivator.BaseKeyDerivator.new = function() {
    ;
  }).prototype = base_key_derivator.BaseKeyDerivator.prototype;
  dart.addTypeTests(base_key_derivator.BaseKeyDerivator);
  base_key_derivator.BaseKeyDerivator[dart.implements] = () => [api.KeyDerivator];
  dart.setMethodSignature(base_key_derivator.BaseKeyDerivator, () => ({
    __proto__: dart.getMethods(base_key_derivator.BaseKeyDerivator.__proto__),
    process: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List])
  }));
  dart.setLibraryUri(base_key_derivator.BaseKeyDerivator, "package:pointycastle/src/impl/base_key_derivator.dart");
  const algorithmName$0 = dart.privateName(scrypt, "Scrypt.algorithmName");
  scrypt.Scrypt = class Scrypt extends base_key_derivator.BaseKeyDerivator {
    get algorithmName() {
      return this[algorithmName$0];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get keySize() {
      return this[_params$2].desiredKeyLength;
    }
    reset() {
      this[_params$2] = null;
    }
    init(params) {
      api$2.ScryptParameters._check(params);
      this[_params$2] = params;
    }
    deriveKey(inp, inpOff, out, outOff) {
      let key = this[_scryptJ](_native_typed_data.NativeUint8List.fromList(inp[$sublist](inpOff)), this[_params$2].salt, this[_params$2].N, this[_params$2].r, this[_params$2].p, this[_params$2].desiredKeyLength);
      out[$setRange](0, this.keySize, key);
      return this.keySize;
    }
    [_scryptJ](passwd, salt, N, r, p, dkLen) {
      if (dart.notNull(N) < 2 || (dart.notNull(N) & dart.notNull(N) - 1) !== 0) {
        dart.throw(new core.ArgumentError.new("N must be a power of 2 greater than 1"));
      }
      if (dart.notNull(N) > dart.notNull(scrypt.Scrypt._MAX_VALUE) / 128 / dart.notNull(r)) {
        dart.throw(new core.ArgumentError.new("Parameter N is too large"));
      }
      if (dart.notNull(r) > dart.notNull(scrypt.Scrypt._MAX_VALUE) / 128 / dart.notNull(p)) {
        dart.throw(new core.ArgumentError.new("Parameter r is too large"));
      }
      let DK = _native_typed_data.NativeUint8List.new(dkLen);
      let B = _native_typed_data.NativeUint8List.new(128 * dart.notNull(r) * dart.notNull(p));
      let XY = _native_typed_data.NativeUint8List.new(256 * dart.notNull(r));
      let V = _native_typed_data.NativeUint8List.new(128 * dart.notNull(r) * dart.notNull(N));
      let pbkdf2 = new pbkdf2$.PBKDF2KeyDerivator.new(new hmac.HMac.new(new sha256.SHA256Digest.new(), 64));
      pbkdf2.init(new api$2.Pbkdf2Parameters.new(salt, 1, dart.notNull(p) * 128 * dart.notNull(r)));
      pbkdf2.deriveKey(passwd, 0, B, 0);
      for (let i = 0; i < dart.notNull(p); i = i + 1) {
        this[_smix](B, i * 128 * dart.notNull(r), r, N, V, XY);
      }
      pbkdf2.init(new api$2.Pbkdf2Parameters.new(B, 1, dkLen));
      pbkdf2.deriveKey(passwd, 0, DK, 0);
      return DK;
    }
    [_smix](B, Bi, r, N, V, XY) {
      let Xi = 0;
      let Yi = 128 * dart.notNull(r);
      this[_arraycopy](B, Bi, XY, Xi, 128 * dart.notNull(r));
      for (let i = 0; i < dart.notNull(N); i = i + 1) {
        this[_arraycopy](XY, Xi, V, i * (128 * dart.notNull(r)), 128 * dart.notNull(r));
        this[_blockmix_salsa8](XY, Xi, Yi, r);
      }
      for (let i = 0; i < dart.notNull(N); i = i + 1) {
        let j = (dart.notNull(this[_integerify](XY, Xi, r)) & dart.notNull(N) - 1) >>> 0;
        this[_blockxor](V, j * (128 * dart.notNull(r)), XY, Xi, 128 * dart.notNull(r));
        this[_blockmix_salsa8](XY, Xi, Yi, r);
      }
      this[_arraycopy](XY, Xi, B, Bi, 128 * dart.notNull(r));
    }
    [_blockmix_salsa8](BY, Bi, Yi, r) {
      let X = _native_typed_data.NativeUint8List.new(64);
      this[_arraycopy](BY, dart.notNull(Bi) + (2 * dart.notNull(r) - 1) * 64, X, 0, 64);
      for (let i = 0; i < 2 * dart.notNull(r); i = i + 1) {
        this[_blockxor](BY, i * 64, X, 0, 64);
        this[_salsa20_8](X);
        this[_arraycopy](X, 0, BY, dart.notNull(Yi) + i * 64, 64);
      }
      for (let i = 0; i < dart.notNull(r); i = i + 1) {
        this[_arraycopy](BY, dart.notNull(Yi) + i * 2 * 64, BY, dart.notNull(Bi) + i * 64, 64);
      }
      for (let i = 0; i < dart.notNull(r); i = i + 1) {
        this[_arraycopy](BY, dart.notNull(Yi) + (i * 2 + 1) * 64, BY, dart.notNull(Bi) + (i + dart.notNull(r)) * 64, 64);
      }
    }
    [_salsa20_8](B) {
      let t4, t3, t4$, t3$, t4$0, t3$0, t4$1, t3$1, t4$2, t3$2, t4$3, t3$3, t4$4, t3$4, t4$5, t3$5, t4$6, t3$6, t4$7, t3$7, t4$8, t3$8, t4$9, t3$9, t4$10, t3$10, t4$11, t3$11, t4$12, t3$12, t4$13, t3$13, t4$14, t3$14, t4$15, t3$15, t4$16, t3$16, t4$17, t3$17, t4$18, t3$18, t4$19, t3$19, t4$20, t3$20, t4$21, t3$21, t4$22, t3$22, t4$23, t3$23, t4$24, t3$24, t4$25, t3$25, t4$26, t3$26, t4$27, t3$27, t4$28, t3$28, t4$29, t3$29;
      let B32 = _native_typed_data.NativeUint32List.new(16);
      let x = _native_typed_data.NativeUint32List.new(16);
      for (let i = 0; i < 16; i = i + 1) {
        B32[$_set](i, ufixnum.unpack32(B, i * 4, typed_data.Endian.little));
      }
      this[_arraycopy](B32, 0, x, 0, 16);
      for (let i = 8; i > 0; i = i - 2) {
        t3 = x;
        t4 = 4;
        t3[$_set](t4, (dart.notNull(t3[$_get](t4)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](0)) + dart.notNull(x[$_get](12)), 7))) >>> 0);
        t3$ = x;
        t4$ = 8;
        t3$[$_set](t4$, (dart.notNull(t3$[$_get](t4$)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](4)) + dart.notNull(x[$_get](0)), 9))) >>> 0);
        t3$0 = x;
        t4$0 = 12;
        t3$0[$_set](t4$0, (dart.notNull(t3$0[$_get](t4$0)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](8)) + dart.notNull(x[$_get](4)), 13))) >>> 0);
        t3$1 = x;
        t4$1 = 0;
        t3$1[$_set](t4$1, (dart.notNull(t3$1[$_get](t4$1)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](12)) + dart.notNull(x[$_get](8)), 18))) >>> 0);
        t3$2 = x;
        t4$2 = 9;
        t3$2[$_set](t4$2, (dart.notNull(t3$2[$_get](t4$2)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](5)) + dart.notNull(x[$_get](1)), 7))) >>> 0);
        t3$3 = x;
        t4$3 = 13;
        t3$3[$_set](t4$3, (dart.notNull(t3$3[$_get](t4$3)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](9)) + dart.notNull(x[$_get](5)), 9))) >>> 0);
        t3$4 = x;
        t4$4 = 1;
        t3$4[$_set](t4$4, (dart.notNull(t3$4[$_get](t4$4)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](13)) + dart.notNull(x[$_get](9)), 13))) >>> 0);
        t3$5 = x;
        t4$5 = 5;
        t3$5[$_set](t4$5, (dart.notNull(t3$5[$_get](t4$5)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](1)) + dart.notNull(x[$_get](13)), 18))) >>> 0);
        t3$6 = x;
        t4$6 = 14;
        t3$6[$_set](t4$6, (dart.notNull(t3$6[$_get](t4$6)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](10)) + dart.notNull(x[$_get](6)), 7))) >>> 0);
        t3$7 = x;
        t4$7 = 2;
        t3$7[$_set](t4$7, (dart.notNull(t3$7[$_get](t4$7)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](14)) + dart.notNull(x[$_get](10)), 9))) >>> 0);
        t3$8 = x;
        t4$8 = 6;
        t3$8[$_set](t4$8, (dart.notNull(t3$8[$_get](t4$8)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](2)) + dart.notNull(x[$_get](14)), 13))) >>> 0);
        t3$9 = x;
        t4$9 = 10;
        t3$9[$_set](t4$9, (dart.notNull(t3$9[$_get](t4$9)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](6)) + dart.notNull(x[$_get](2)), 18))) >>> 0);
        t3$10 = x;
        t4$10 = 3;
        t3$10[$_set](t4$10, (dart.notNull(t3$10[$_get](t4$10)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](15)) + dart.notNull(x[$_get](11)), 7))) >>> 0);
        t3$11 = x;
        t4$11 = 7;
        t3$11[$_set](t4$11, (dart.notNull(t3$11[$_get](t4$11)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](3)) + dart.notNull(x[$_get](15)), 9))) >>> 0);
        t3$12 = x;
        t4$12 = 11;
        t3$12[$_set](t4$12, (dart.notNull(t3$12[$_get](t4$12)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](7)) + dart.notNull(x[$_get](3)), 13))) >>> 0);
        t3$13 = x;
        t4$13 = 15;
        t3$13[$_set](t4$13, (dart.notNull(t3$13[$_get](t4$13)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](11)) + dart.notNull(x[$_get](7)), 18))) >>> 0);
        t3$14 = x;
        t4$14 = 1;
        t3$14[$_set](t4$14, (dart.notNull(t3$14[$_get](t4$14)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](0)) + dart.notNull(x[$_get](3)), 7))) >>> 0);
        t3$15 = x;
        t4$15 = 2;
        t3$15[$_set](t4$15, (dart.notNull(t3$15[$_get](t4$15)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](1)) + dart.notNull(x[$_get](0)), 9))) >>> 0);
        t3$16 = x;
        t4$16 = 3;
        t3$16[$_set](t4$16, (dart.notNull(t3$16[$_get](t4$16)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](2)) + dart.notNull(x[$_get](1)), 13))) >>> 0);
        t3$17 = x;
        t4$17 = 0;
        t3$17[$_set](t4$17, (dart.notNull(t3$17[$_get](t4$17)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](3)) + dart.notNull(x[$_get](2)), 18))) >>> 0);
        t3$18 = x;
        t4$18 = 6;
        t3$18[$_set](t4$18, (dart.notNull(t3$18[$_get](t4$18)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](5)) + dart.notNull(x[$_get](4)), 7))) >>> 0);
        t3$19 = x;
        t4$19 = 7;
        t3$19[$_set](t4$19, (dart.notNull(t3$19[$_get](t4$19)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](6)) + dart.notNull(x[$_get](5)), 9))) >>> 0);
        t3$20 = x;
        t4$20 = 4;
        t3$20[$_set](t4$20, (dart.notNull(t3$20[$_get](t4$20)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](7)) + dart.notNull(x[$_get](6)), 13))) >>> 0);
        t3$21 = x;
        t4$21 = 5;
        t3$21[$_set](t4$21, (dart.notNull(t3$21[$_get](t4$21)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](4)) + dart.notNull(x[$_get](7)), 18))) >>> 0);
        t3$22 = x;
        t4$22 = 11;
        t3$22[$_set](t4$22, (dart.notNull(t3$22[$_get](t4$22)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](10)) + dart.notNull(x[$_get](9)), 7))) >>> 0);
        t3$23 = x;
        t4$23 = 8;
        t3$23[$_set](t4$23, (dart.notNull(t3$23[$_get](t4$23)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](11)) + dart.notNull(x[$_get](10)), 9))) >>> 0);
        t3$24 = x;
        t4$24 = 9;
        t3$24[$_set](t4$24, (dart.notNull(t3$24[$_get](t4$24)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](8)) + dart.notNull(x[$_get](11)), 13))) >>> 0);
        t3$25 = x;
        t4$25 = 10;
        t3$25[$_set](t4$25, (dart.notNull(t3$25[$_get](t4$25)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](9)) + dart.notNull(x[$_get](8)), 18))) >>> 0);
        t3$26 = x;
        t4$26 = 12;
        t3$26[$_set](t4$26, (dart.notNull(t3$26[$_get](t4$26)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](15)) + dart.notNull(x[$_get](14)), 7))) >>> 0);
        t3$27 = x;
        t4$27 = 13;
        t3$27[$_set](t4$27, (dart.notNull(t3$27[$_get](t4$27)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](12)) + dart.notNull(x[$_get](15)), 9))) >>> 0);
        t3$28 = x;
        t4$28 = 14;
        t3$28[$_set](t4$28, (dart.notNull(t3$28[$_get](t4$28)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](13)) + dart.notNull(x[$_get](12)), 13))) >>> 0);
        t3$29 = x;
        t4$29 = 15;
        t3$29[$_set](t4$29, (dart.notNull(t3$29[$_get](t4$29)) ^ dart.notNull(ufixnum.crotl32(dart.notNull(x[$_get](14)) + dart.notNull(x[$_get](13)), 18))) >>> 0);
      }
      for (let i = 0; i < 16; i = i + 1) {
        B32[$_set](i, dart.notNull(x[$_get](i)) + dart.notNull(B32[$_get](i)));
      }
      for (let i = 0; i < 16; i = i + 1) {
        ufixnum.pack32(B32[$_get](i), B, i * 4, typed_data.Endian.little);
      }
    }
    [_blockxor](S, Si, D, Di, len) {
      let t4, t3;
      for (let i = 0; i < dart.notNull(len); i = i + 1) {
        t3 = D;
        t4 = dart.notNull(Di) + i;
        t3[$_set](t4, (dart.notNull(t3[$_get](t4)) ^ dart.notNull(S[$_get](dart.notNull(Si) + i))) >>> 0);
      }
    }
    [_integerify](B, Bi, r) {
      Bi = dart.notNull(Bi) + (2 * dart.notNull(r) - 1) * 64;
      return ufixnum.unpack32(B, Bi, typed_data.Endian.little);
    }
    [_arraycopy](inp, inpOff, out, outOff, len) {
      return out[$setRange](outOff, dart.notNull(outOff) + dart.notNull(len), inp[$sublist](inpOff));
    }
  };
  (scrypt.Scrypt.new = function() {
    this[_params$2] = null;
    this[algorithmName$0] = "scrypt";
    ;
  }).prototype = scrypt.Scrypt.prototype;
  dart.addTypeTests(scrypt.Scrypt);
  dart.setMethodSignature(scrypt.Scrypt, () => ({
    __proto__: dart.getMethods(scrypt.Scrypt.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.Object]),
    deriveKey: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int]),
    [_scryptJ]: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List, typed_data.Uint8List, core.int, core.int, core.int, core.int]),
    [_smix]: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int, core.int, typed_data.Uint8List, typed_data.Uint8List]),
    [_blockmix_salsa8]: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int, core.int]),
    [_salsa20_8]: dart.fnType(dart.void, [typed_data.Uint8List]),
    [_blockxor]: dart.fnType(dart.void, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int, core.int]),
    [_integerify]: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int]),
    [_arraycopy]: dart.fnType(dart.void, [core.List$(core.int), core.int, core.List$(core.int), core.int, core.int])
  }));
  dart.setGetterSignature(scrypt.Scrypt, () => ({
    __proto__: dart.getGetters(scrypt.Scrypt.__proto__),
    keySize: core.int
  }));
  dart.setLibraryUri(scrypt.Scrypt, "package:pointycastle/key_derivators/scrypt.dart");
  dart.setFieldSignature(scrypt.Scrypt, () => ({
    __proto__: dart.getFields(scrypt.Scrypt.__proto__),
    [_params$2]: dart.fieldType(api$2.ScryptParameters),
    algorithmName: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(scrypt.Scrypt, {
    /*scrypt.Scrypt.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.KeyDerivator), "scrypt", dart.fn(() => new scrypt.Scrypt.new(), VoidToScrypt()));
    },
    /*scrypt.Scrypt._MAX_VALUE*/get _MAX_VALUE() {
      return 2147483647;
    }
  });
  const _params$3 = dart.privateName(pbkdf2$, "_params");
  const _state$ = dart.privateName(pbkdf2$, "_state");
  const _mac$1 = dart.privateName(pbkdf2$, "_mac");
  const _F = dart.privateName(pbkdf2$, "_F");
  pbkdf2$.PBKDF2KeyDerivator = class PBKDF2KeyDerivator extends base_key_derivator.BaseKeyDerivator {
    get algorithmName() {
      return dart.str(this[_mac$1].algorithmName) + "/PBKDF2";
    }
    get keySize() {
      return this[_params$3].desiredKeyLength;
    }
    reset() {
      this[_mac$1].reset();
      this[_state$][$fillRange](0, this[_state$][$length], 0);
    }
    init(params) {
      api$2.Pbkdf2Parameters._check(params);
      this[_params$3] = params;
    }
    deriveKey(inp, inpOff, out, outOff) {
      let t4, t3;
      let dkLen = this[_params$3].desiredKeyLength;
      let hLen = this[_mac$1].macSize;
      let l = ((dart.notNull(dkLen) + dart.notNull(hLen) - 1) / dart.notNull(hLen))[$truncate]();
      let iBuf = _native_typed_data.NativeUint8List.new(4);
      let outBytes = _native_typed_data.NativeUint8List.new(l * dart.notNull(hLen));
      let outPos = 0;
      let param = new api.KeyParameter.new(inp[$sublist](inpOff));
      this[_mac$1].init(param);
      for (let i = 1; i <= l; i = i + 1) {
        for (let pos = 3;; pos = pos - 1) {
          t3 = iBuf;
          t4 = pos;
          t3[$_set](t4, dart.notNull(t3[$_get](t4)) + 1);
          if (iBuf[$_get](pos) !== 0) break;
        }
        this[_F](this[_params$3].salt, this[_params$3].iterationCount, iBuf, outBytes, outPos);
        outPos = outPos + dart.notNull(hLen);
      }
      out[$setRange](outOff, dart.notNull(outOff) + dart.notNull(dkLen), outBytes);
      return this.keySize;
    }
    [_F](S, c, iBuf, out, outOff) {
      let t4, t3;
      if (dart.notNull(c) <= 0) {
        dart.throw(new core.ArgumentError.new("Iteration count must be at least 1."));
      }
      if (S != null) {
        this[_mac$1].update(S, 0, S[$length]);
      }
      this[_mac$1].update(iBuf, 0, iBuf[$length]);
      this[_mac$1].doFinal(this[_state$], 0);
      out[$setRange](outOff, dart.notNull(outOff) + dart.notNull(this[_state$][$length]), this[_state$]);
      for (let count = 1; count < dart.notNull(c); count = count + 1) {
        this[_mac$1].update(this[_state$], 0, this[_state$][$length]);
        this[_mac$1].doFinal(this[_state$], 0);
        for (let j = 0; j !== this[_state$][$length]; j = j + 1) {
          t3 = out;
          t4 = dart.notNull(outOff) + j;
          t3[$_set](t4, (dart.notNull(t3[$_get](t4)) ^ dart.notNull(this[_state$][$_get](j))) >>> 0);
        }
      }
    }
  };
  (pbkdf2$.PBKDF2KeyDerivator.new = function(_mac) {
    this[_params$3] = null;
    this[_state$] = null;
    this[_mac$1] = _mac;
    this[_state$] = _native_typed_data.NativeUint8List.new(this[_mac$1].macSize);
  }).prototype = pbkdf2$.PBKDF2KeyDerivator.prototype;
  dart.addTypeTests(pbkdf2$.PBKDF2KeyDerivator);
  dart.setMethodSignature(pbkdf2$.PBKDF2KeyDerivator, () => ({
    __proto__: dart.getMethods(pbkdf2$.PBKDF2KeyDerivator.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.Object]),
    deriveKey: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int]),
    [_F]: dart.fnType(dart.void, [typed_data.Uint8List, core.int, typed_data.Uint8List, typed_data.Uint8List, core.int])
  }));
  dart.setGetterSignature(pbkdf2$.PBKDF2KeyDerivator, () => ({
    __proto__: dart.getGetters(pbkdf2$.PBKDF2KeyDerivator.__proto__),
    algorithmName: core.String,
    keySize: core.int
  }));
  dart.setLibraryUri(pbkdf2$.PBKDF2KeyDerivator, "package:pointycastle/key_derivators/pbkdf2.dart");
  dart.setFieldSignature(pbkdf2$.PBKDF2KeyDerivator, () => ({
    __proto__: dart.getFields(pbkdf2$.PBKDF2KeyDerivator.__proto__),
    [_params$3]: dart.fieldType(api$2.Pbkdf2Parameters),
    [_mac$1]: dart.fieldType(api.Mac),
    [_state$]: dart.fieldType(typed_data.Uint8List)
  }));
  dart.defineLazy(pbkdf2$.PBKDF2KeyDerivator, {
    /*pbkdf2$.PBKDF2KeyDerivator.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.KeyDerivator), "/PBKDF2", dart.fn((_, match) => dart.fn(() => {
        let mac = api.Mac.new(match.group(1));
        return new pbkdf2$.PBKDF2KeyDerivator.new(mac);
      }, VoidToPBKDF2KeyDerivator()), StringAndMatchToFn$10()));
    }
  });
  const salt$ = dart.privateName(api$2, "Pbkdf2Parameters.salt");
  const iterationCount$ = dart.privateName(api$2, "Pbkdf2Parameters.iterationCount");
  const desiredKeyLength$ = dart.privateName(api$2, "Pbkdf2Parameters.desiredKeyLength");
  api$2.Pbkdf2Parameters = class Pbkdf2Parameters extends api.CipherParameters {
    get salt() {
      return this[salt$];
    }
    set salt(value) {
      super.salt = value;
    }
    get iterationCount() {
      return this[iterationCount$];
    }
    set iterationCount(value) {
      super.iterationCount = value;
    }
    get desiredKeyLength() {
      return this[desiredKeyLength$];
    }
    set desiredKeyLength(value) {
      super.desiredKeyLength = value;
    }
  };
  (api$2.Pbkdf2Parameters.new = function(salt, iterationCount, desiredKeyLength) {
    this[salt$] = salt;
    this[iterationCount$] = iterationCount;
    this[desiredKeyLength$] = desiredKeyLength;
    ;
  }).prototype = api$2.Pbkdf2Parameters.prototype;
  dart.addTypeTests(api$2.Pbkdf2Parameters);
  dart.setLibraryUri(api$2.Pbkdf2Parameters, "package:pointycastle/key_derivators/api.dart");
  dart.setFieldSignature(api$2.Pbkdf2Parameters, () => ({
    __proto__: dart.getFields(api$2.Pbkdf2Parameters.__proto__),
    salt: dart.finalFieldType(typed_data.Uint8List),
    iterationCount: dart.finalFieldType(core.int),
    desiredKeyLength: dart.finalFieldType(core.int)
  }));
  const N$ = dart.privateName(api$2, "ScryptParameters.N");
  const r$0 = dart.privateName(api$2, "ScryptParameters.r");
  const p$0 = dart.privateName(api$2, "ScryptParameters.p");
  const desiredKeyLength$0 = dart.privateName(api$2, "ScryptParameters.desiredKeyLength");
  const salt$0 = dart.privateName(api$2, "ScryptParameters.salt");
  api$2.ScryptParameters = class ScryptParameters extends core.Object {
    get N() {
      return this[N$];
    }
    set N(value) {
      super.N = value;
    }
    get r() {
      return this[r$0];
    }
    set r(value) {
      super.r = value;
    }
    get p() {
      return this[p$0];
    }
    set p(value) {
      super.p = value;
    }
    get desiredKeyLength() {
      return this[desiredKeyLength$0];
    }
    set desiredKeyLength(value) {
      super.desiredKeyLength = value;
    }
    get salt() {
      return this[salt$0];
    }
    set salt(value) {
      super.salt = value;
    }
  };
  (api$2.ScryptParameters.new = function(N, r, p, desiredKeyLength, salt) {
    this[N$] = N;
    this[r$0] = r;
    this[p$0] = p;
    this[desiredKeyLength$0] = desiredKeyLength;
    this[salt$0] = salt;
    ;
  }).prototype = api$2.ScryptParameters.prototype;
  dart.addTypeTests(api$2.ScryptParameters);
  api$2.ScryptParameters[dart.implements] = () => [api.CipherParameters];
  dart.setLibraryUri(api$2.ScryptParameters, "package:pointycastle/key_derivators/api.dart");
  dart.setFieldSignature(api$2.ScryptParameters, () => ({
    __proto__: dart.getFields(api$2.ScryptParameters.__proto__),
    N: dart.finalFieldType(core.int),
    r: dart.finalFieldType(core.int),
    p: dart.finalFieldType(core.int),
    desiredKeyLength: dart.finalFieldType(core.int),
    salt: dart.finalFieldType(typed_data.Uint8List)
  }));
  const _Theta1 = dart.privateName(sha256, "_Theta1");
  const _Theta0 = dart.privateName(sha256, "_Theta0");
  const _Sum1$ = dart.privateName(sha256, "_Sum1");
  const _Ch$ = dart.privateName(sha256, "_Ch");
  const _Sum0$ = dart.privateName(sha256, "_Sum0");
  const _Maj$ = dart.privateName(sha256, "_Maj");
  const _byteCount = dart.privateName(md4_family_digest, "_byteCount");
  const _wordBuffer$ = dart.privateName(md4_family_digest, "_wordBuffer");
  const _wordBufferOffset$ = dart.privateName(md4_family_digest, "_wordBufferOffset");
  const _endian$ = dart.privateName(md4_family_digest, "_endian");
  const _packedStateSize = dart.privateName(md4_family_digest, "_packedStateSize");
  const _processWordIfBufferFull = dart.privateName(md4_family_digest, "_processWordIfBufferFull");
  const _processUntilNextWord = dart.privateName(md4_family_digest, "_processUntilNextWord");
  const _processWholeWords = dart.privateName(md4_family_digest, "_processWholeWords");
  const _processBytes = dart.privateName(md4_family_digest, "_processBytes");
  const _processPadding = dart.privateName(md4_family_digest, "_processPadding");
  const _processLength$ = dart.privateName(md4_family_digest, "_processLength");
  const _doProcessBlock = dart.privateName(md4_family_digest, "_doProcessBlock");
  const _packState = dart.privateName(md4_family_digest, "_packState");
  const _processWord$ = dart.privateName(md4_family_digest, "_processWord");
  const Endian__littleEndian = dart.privateName(typed_data, "Endian._littleEndian");
  let C0;
  let C1;
  const state = dart.privateName(md4_family_digest, "MD4FamilyDigest.state");
  const buffer = dart.privateName(md4_family_digest, "MD4FamilyDigest.buffer");
  const bufferOffset = dart.privateName(md4_family_digest, "MD4FamilyDigest.bufferOffset");
  md4_family_digest.MD4FamilyDigest = class MD4FamilyDigest extends base_digest.BaseDigest {
    get state() {
      return this[state];
    }
    set state(value) {
      super.state = value;
    }
    get buffer() {
      return this[buffer];
    }
    set buffer(value) {
      super.buffer = value;
    }
    get bufferOffset() {
      return this[bufferOffset];
    }
    set bufferOffset(value) {
      this[bufferOffset] = value;
    }
    reset() {
      this[_byteCount].set(0);
      this[_wordBufferOffset$] = 0;
      this[_wordBuffer$][$fillRange](0, this[_wordBuffer$][$length], 0);
      this.bufferOffset = 0;
      dart.dsend(this.buffer, 'fillRange', [0, dart.dload(this.buffer, 'length'), 0]);
      this.resetState();
    }
    updateByte(inp) {
      let t3;
      this[_wordBuffer$][$_set]((t3 = this[_wordBufferOffset$], this[_wordBufferOffset$] = dart.notNull(t3) + 1, t3), ufixnum.clip8(inp));
      this[_processWordIfBufferFull]();
      this[_byteCount].sum(1);
    }
    update(inp, inpOff, len) {
      let nbytes = null;
      nbytes = this[_processUntilNextWord](inp, inpOff, len);
      inpOff = dart.asInt(dart.notNull(inpOff) + dart.notNull(core.num._check(nbytes)));
      len = dart.asInt(dart.notNull(len) - dart.notNull(core.num._check(nbytes)));
      nbytes = this[_processWholeWords](inp, inpOff, len);
      inpOff = dart.asInt(dart.notNull(inpOff) + dart.notNull(core.num._check(nbytes)));
      len = dart.asInt(dart.notNull(len) - dart.notNull(core.num._check(nbytes)));
      this[_processBytes](inp, inpOff, len);
    }
    doFinal(out, outOff) {
      let t3;
      let bitLength = (t3 = new ufixnum.Register64.new(this[_byteCount]), t3.shiftl(3), t3);
      this[_processPadding]();
      this[_processLength$](bitLength);
      this[_doProcessBlock]();
      this[_packState](out, outOff);
      this.reset();
      return this.digestSize;
    }
    [_processWord$](inp, inpOff) {
      let t3;
      dart.dsend(this.buffer, '_set', [(t3 = this.bufferOffset, this.bufferOffset = dart.notNull(t3) + 1, t3), ufixnum.unpack32(inp, inpOff, this[_endian$])]);
      if (this.bufferOffset === 16) {
        this[_doProcessBlock]();
      }
    }
    [_doProcessBlock]() {
      this.processBlock();
      this.bufferOffset = 0;
      dart.dsend(this.buffer, 'fillRange', [0, 16, 0]);
    }
    [_processBytes](inp, inpOff, len) {
      while (dart.notNull(len) > 0) {
        this.updateByte(inp[$_get](inpOff));
        inpOff = dart.notNull(inpOff) + 1;
        len = dart.notNull(len) - 1;
      }
    }
    [_processWholeWords](inp, inpOff, len) {
      let processed = 0;
      while (dart.notNull(len) > dart.notNull(this[_wordBuffer$][$length])) {
        this[_processWord$](inp, inpOff);
        inpOff = dart.notNull(inpOff) + dart.notNull(this[_wordBuffer$][$length]);
        len = dart.notNull(len) - dart.notNull(this[_wordBuffer$][$length]);
        this[_byteCount].sum(this[_wordBuffer$][$length]);
        processed = processed + 4;
      }
      return processed;
    }
    [_processUntilNextWord](inp, inpOff, len) {
      let processed = 0;
      while (this[_wordBufferOffset$] !== 0 && dart.notNull(len) > 0) {
        this.updateByte(inp[$_get](inpOff));
        inpOff = dart.notNull(inpOff) + 1;
        len = dart.notNull(len) - 1;
        processed = processed + 1;
      }
      return processed;
    }
    [_processWordIfBufferFull]() {
      if (this[_wordBufferOffset$] == this[_wordBuffer$][$length]) {
        this[_processWord$](this[_wordBuffer$], 0);
        this[_wordBufferOffset$] = 0;
      }
    }
    [_processPadding]() {
      this.updateByte(128);
      while (this[_wordBufferOffset$] !== 0) {
        this.updateByte(0);
      }
    }
    [_processLength$](bitLength) {
      if (dart.notNull(this.bufferOffset) > 14) {
        this[_doProcessBlock]();
      }
      switch (this[_endian$]) {
        case C0 || CT.C0:
        {
          dart.dsend(this.buffer, '_set', [14, bitLength.lo32]);
          dart.dsend(this.buffer, '_set', [15, bitLength.hi32]);
          break;
        }
        case C1 || CT.C1:
        {
          dart.dsend(this.buffer, '_set', [14, bitLength.hi32]);
          dart.dsend(this.buffer, '_set', [15, bitLength.lo32]);
          break;
        }
        default:
        {
          dart.throw(new core.StateError.new("Invalid endianness: " + dart.str(this[_endian$])));
        }
      }
    }
    [_packState](out, outOff) {
      for (let i = 0; i < dart.notNull(core.num._check(this[_packedStateSize])); i = i + 1) {
        ufixnum.pack32(core.int._check(dart.dsend(this.state, '_get', [i])), out, dart.notNull(outOff) + i * 4, this[_endian$]);
      }
    }
  };
  (md4_family_digest.MD4FamilyDigest.new = function(_endian, stateSize, bufferSize, packedStateSize = null) {
    this[_byteCount] = new ufixnum.Register64.new(0);
    this[_wordBuffer$] = _native_typed_data.NativeUint8List.new(4);
    this[_wordBufferOffset$] = null;
    this[bufferOffset] = null;
    this[_endian$] = _endian;
    this[_packedStateSize] = packedStateSize == null ? stateSize : packedStateSize;
    this[state] = ListOfint().new(stateSize);
    this[buffer] = ListOfint().new(bufferSize);
    this.reset();
  }).prototype = md4_family_digest.MD4FamilyDigest.prototype;
  dart.addTypeTests(md4_family_digest.MD4FamilyDigest);
  dart.setMethodSignature(md4_family_digest.MD4FamilyDigest, () => ({
    __proto__: dart.getMethods(md4_family_digest.MD4FamilyDigest.__proto__),
    reset: dart.fnType(dart.void, []),
    updateByte: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    [_processWord$]: dart.fnType(dart.void, [typed_data.Uint8List, core.int]),
    [_doProcessBlock]: dart.fnType(dart.void, []),
    [_processBytes]: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    [_processWholeWords]: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int]),
    [_processUntilNextWord]: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int]),
    [_processWordIfBufferFull]: dart.fnType(dart.void, []),
    [_processPadding]: dart.fnType(dart.void, []),
    [_processLength$]: dart.fnType(dart.void, [ufixnum.Register64]),
    [_packState]: dart.fnType(dart.void, [typed_data.Uint8List, core.int])
  }));
  dart.setLibraryUri(md4_family_digest.MD4FamilyDigest, "package:pointycastle/src/impl/md4_family_digest.dart");
  dart.setFieldSignature(md4_family_digest.MD4FamilyDigest, () => ({
    __proto__: dart.getFields(md4_family_digest.MD4FamilyDigest.__proto__),
    [_byteCount]: dart.finalFieldType(ufixnum.Register64),
    [_wordBuffer$]: dart.finalFieldType(typed_data.Uint8List),
    [_wordBufferOffset$]: dart.fieldType(core.int),
    [_endian$]: dart.finalFieldType(typed_data.Endian),
    [_packedStateSize]: dart.finalFieldType(dart.dynamic),
    state: dart.finalFieldType(dart.dynamic),
    buffer: dart.finalFieldType(dart.dynamic),
    bufferOffset: dart.fieldType(core.int)
  }));
  const algorithmName$1 = dart.privateName(sha256, "SHA256Digest.algorithmName");
  const digestSize = dart.privateName(sha256, "SHA256Digest.digestSize");
  sha256.SHA256Digest = class SHA256Digest extends md4_family_digest.MD4FamilyDigest {
    get algorithmName() {
      return this[algorithmName$1];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    resetState() {
      dart.dsend(this.state, '_set', [0, 1779033703]);
      dart.dsend(this.state, '_set', [1, 3144134277]);
      dart.dsend(this.state, '_set', [2, 1013904242]);
      dart.dsend(this.state, '_set', [3, 2773480762]);
      dart.dsend(this.state, '_set', [4, 1359893119]);
      dart.dsend(this.state, '_set', [5, 2600822924]);
      dart.dsend(this.state, '_set', [6, 528734635]);
      dart.dsend(this.state, '_set', [7, 1541459225]);
    }
    processBlock() {
      for (let t = 16; t < 64; t = t + 1) {
        dart.dsend(this.buffer, '_set', [t, ufixnum.clip32(dart.asInt(dart.notNull(this[_Theta1](core.int._check(dart.dsend(this.buffer, '_get', [t - 2])))) + dart.notNull(core.num._check(dart.dsend(this.buffer, '_get', [t - 7]))) + dart.notNull(this[_Theta0](core.int._check(dart.dsend(this.buffer, '_get', [t - 15])))) + dart.notNull(core.num._check(dart.dsend(this.buffer, '_get', [t - 16])))))]);
      }
      let a = dart.dsend(this.state, '_get', [0]);
      let b = dart.dsend(this.state, '_get', [1]);
      let c = dart.dsend(this.state, '_get', [2]);
      let d = dart.dsend(this.state, '_get', [3]);
      let e = dart.dsend(this.state, '_get', [4]);
      let f = dart.dsend(this.state, '_get', [5]);
      let g = dart.dsend(this.state, '_get', [6]);
      let h = dart.dsend(this.state, '_get', [7]);
      let t = 0;
      for (let i = 0; i < 8; i = i + 1) {
        h = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(h, '+', [this[_Sum1$](core.int._check(e))]), '+', [this[_Ch$](core.int._check(e), core.int._check(f), core.int._check(g))]), '+', [sha256.SHA256Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        d = ufixnum.clip32(core.int._check(dart.dsend(d, '+', [h])));
        h = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(h, '+', [this[_Sum0$](core.int._check(a))]), '+', [this[_Maj$](core.int._check(a), core.int._check(b), core.int._check(c))])));
        t = t + 1;
        g = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(g, '+', [this[_Sum1$](core.int._check(d))]), '+', [this[_Ch$](core.int._check(d), core.int._check(e), core.int._check(f))]), '+', [sha256.SHA256Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        c = ufixnum.clip32(core.int._check(dart.dsend(c, '+', [g])));
        g = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(g, '+', [this[_Sum0$](core.int._check(h))]), '+', [this[_Maj$](core.int._check(h), core.int._check(a), core.int._check(b))])));
        t = t + 1;
        f = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(f, '+', [this[_Sum1$](core.int._check(c))]), '+', [this[_Ch$](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [sha256.SHA256Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        b = ufixnum.clip32(core.int._check(dart.dsend(b, '+', [f])));
        f = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(f, '+', [this[_Sum0$](core.int._check(g))]), '+', [this[_Maj$](core.int._check(g), core.int._check(h), core.int._check(a))])));
        t = t + 1;
        e = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_Sum1$](core.int._check(b))]), '+', [this[_Ch$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [sha256.SHA256Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        a = ufixnum.clip32(core.int._check(dart.dsend(a, '+', [e])));
        e = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(e, '+', [this[_Sum0$](core.int._check(f))]), '+', [this[_Maj$](core.int._check(f), core.int._check(g), core.int._check(h))])));
        t = t + 1;
        d = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_Sum1$](core.int._check(a))]), '+', [this[_Ch$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [sha256.SHA256Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        h = ufixnum.clip32(core.int._check(dart.dsend(h, '+', [d])));
        d = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_Sum0$](core.int._check(e))]), '+', [this[_Maj$](core.int._check(e), core.int._check(f), core.int._check(g))])));
        t = t + 1;
        c = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_Sum1$](core.int._check(h))]), '+', [this[_Ch$](core.int._check(h), core.int._check(a), core.int._check(b))]), '+', [sha256.SHA256Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        g = ufixnum.clip32(core.int._check(dart.dsend(g, '+', [c])));
        c = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_Sum0$](core.int._check(d))]), '+', [this[_Maj$](core.int._check(d), core.int._check(e), core.int._check(f))])));
        t = t + 1;
        b = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_Sum1$](core.int._check(g))]), '+', [this[_Ch$](core.int._check(g), core.int._check(h), core.int._check(a))]), '+', [sha256.SHA256Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        f = ufixnum.clip32(core.int._check(dart.dsend(f, '+', [b])));
        b = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_Sum0$](core.int._check(c))]), '+', [this[_Maj$](core.int._check(c), core.int._check(d), core.int._check(e))])));
        t = t + 1;
        a = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_Sum1$](core.int._check(f))]), '+', [this[_Ch$](core.int._check(f), core.int._check(g), core.int._check(h))]), '+', [sha256.SHA256Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        e = ufixnum.clip32(core.int._check(dart.dsend(e, '+', [a])));
        a = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_Sum0$](core.int._check(b))]), '+', [this[_Maj$](core.int._check(b), core.int._check(c), core.int._check(d))])));
        t = t + 1;
      }
      dart.dsend(this.state, '_set', [0, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [0]), '+', [a])))]);
      dart.dsend(this.state, '_set', [1, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [1]), '+', [b])))]);
      dart.dsend(this.state, '_set', [2, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [2]), '+', [c])))]);
      dart.dsend(this.state, '_set', [3, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [3]), '+', [d])))]);
      dart.dsend(this.state, '_set', [4, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [4]), '+', [e])))]);
      dart.dsend(this.state, '_set', [5, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [5]), '+', [f])))]);
      dart.dsend(this.state, '_set', [6, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [6]), '+', [g])))]);
      dart.dsend(this.state, '_set', [7, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [7]), '+', [h])))]);
    }
    [_Ch$](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) ^ (~dart.notNull(x) & dart.notNull(z)) >>> 0) >>> 0;
    }
    [_Maj$](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) ^ (dart.notNull(x) & dart.notNull(z)) >>> 0 ^ (dart.notNull(y) & dart.notNull(z)) >>> 0) >>> 0;
    }
    [_Sum0$](x) {
      return (dart.notNull(ufixnum.rotr32(x, 2)) ^ dart.notNull(ufixnum.rotr32(x, 13)) ^ dart.notNull(ufixnum.rotr32(x, 22))) >>> 0;
    }
    [_Sum1$](x) {
      return (dart.notNull(ufixnum.rotr32(x, 6)) ^ dart.notNull(ufixnum.rotr32(x, 11)) ^ dart.notNull(ufixnum.rotr32(x, 25))) >>> 0;
    }
    [_Theta0](x) {
      return (dart.notNull(ufixnum.rotr32(x, 7)) ^ dart.notNull(ufixnum.rotr32(x, 18)) ^ dart.notNull(ufixnum.shiftr32(x, 3))) >>> 0;
    }
    [_Theta1](x) {
      return (dart.notNull(ufixnum.rotr32(x, 17)) ^ dart.notNull(ufixnum.rotr32(x, 19)) ^ dart.notNull(ufixnum.shiftr32(x, 10))) >>> 0;
    }
  };
  (sha256.SHA256Digest.new = function() {
    this[algorithmName$1] = "SHA-256";
    this[digestSize] = 32;
    sha256.SHA256Digest.__proto__.new.call(this, typed_data.Endian.big, 8, 64);
    ;
  }).prototype = sha256.SHA256Digest.prototype;
  dart.addTypeTests(sha256.SHA256Digest);
  sha256.SHA256Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(sha256.SHA256Digest, () => ({
    __proto__: dart.getMethods(sha256.SHA256Digest.__proto__),
    resetState: dart.fnType(dart.void, []),
    processBlock: dart.fnType(dart.void, []),
    [_Ch$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_Maj$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_Sum0$]: dart.fnType(core.int, [core.int]),
    [_Sum1$]: dart.fnType(core.int, [core.int]),
    [_Theta0]: dart.fnType(core.int, [core.int]),
    [_Theta1]: dart.fnType(core.int, [core.int])
  }));
  dart.setLibraryUri(sha256.SHA256Digest, "package:pointycastle/digests/sha256.dart");
  dart.setFieldSignature(sha256.SHA256Digest, () => ({
    __proto__: dart.getFields(sha256.SHA256Digest.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(sha256.SHA256Digest, {
    /*sha256.SHA256Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "SHA-256", dart.fn(() => new sha256.SHA256Digest.new(), VoidToSHA256Digest()));
    },
    /*sha256.SHA256Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 32;
    },
    /*sha256.SHA256Digest._K*/get _K() {
      return JSArrayOfint().of([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
    }
  });
  let C2;
  const _h$ = dart.privateName(ecc_base, "_h");
  const domainName$ = dart.privateName(ecc_base, "ECDomainParametersImpl.domainName");
  const curve$ = dart.privateName(ecc_base, "ECDomainParametersImpl.curve");
  const seed$ = dart.privateName(ecc_base, "ECDomainParametersImpl.seed");
  const G$ = dart.privateName(ecc_base, "ECDomainParametersImpl.G");
  const n$ = dart.privateName(ecc_base, "ECDomainParametersImpl.n");
  ecc_base.ECDomainParametersImpl = class ECDomainParametersImpl extends core.Object {
    get domainName() {
      return this[domainName$];
    }
    set domainName(value) {
      super.domainName = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get seed() {
      return this[seed$];
    }
    set seed(value) {
      super.seed = value;
    }
    get G() {
      return this[G$];
    }
    set G(value) {
      super.G = value;
    }
    get n() {
      return this[n$];
    }
    set n(value) {
      super.n = value;
    }
    get h() {
      return this[_h$];
    }
  };
  (ecc_base.ECDomainParametersImpl.new = function(domainName, curve, G, n, _h = null, seed = null) {
    this[domainName$] = domainName;
    this[curve$] = curve;
    this[G$] = G;
    this[n$] = n;
    this[_h$] = _h;
    this[seed$] = seed;
    if (this[_h$] == null) {
      this[_h$] = core.BigInt.one;
    }
  }).prototype = ecc_base.ECDomainParametersImpl.prototype;
  dart.addTypeTests(ecc_base.ECDomainParametersImpl);
  ecc_base.ECDomainParametersImpl[dart.implements] = () => [api$0.ECDomainParameters];
  dart.setGetterSignature(ecc_base.ECDomainParametersImpl, () => ({
    __proto__: dart.getGetters(ecc_base.ECDomainParametersImpl.__proto__),
    h: core.BigInt
  }));
  dart.setLibraryUri(ecc_base.ECDomainParametersImpl, "package:pointycastle/ecc/ecc_base.dart");
  dart.setFieldSignature(ecc_base.ECDomainParametersImpl, () => ({
    __proto__: dart.getFields(ecc_base.ECDomainParametersImpl.__proto__),
    domainName: dart.finalFieldType(core.String),
    curve: dart.finalFieldType(api$0.ECCurve),
    seed: dart.finalFieldType(core.List$(core.int)),
    G: dart.finalFieldType(api$0.ECPoint),
    n: dart.finalFieldType(core.BigInt),
    [_h$]: dart.fieldType(core.BigInt)
  }));
  secp521r1.ECCurve_secp521r1 = class ECCurve_secp521r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp521r1.ECCurve_secp521r1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp521r1", C2 || CT.C2, {q: core.BigInt.parse("1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", {radix: 16}), a: core.BigInt.parse("1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc", {radix: 16}), b: core.BigInt.parse("51953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00", {radix: 16}), g: core.BigInt.parse("0400c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", {radix: 16}), n: core.BigInt.parse("1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("d09e8800291cb85396cc6717393284aaa0da64ba", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp521r1.ECCurve_secp521r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp521r1.ECCurve_secp521r1._super = function(domainName, curve, G, n, _h, seed) {
    secp521r1.ECCurve_secp521r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp521r1.ECCurve_secp521r1.prototype;
  dart.addTypeTests(secp521r1.ECCurve_secp521r1);
  dart.setLibraryUri(secp521r1.ECCurve_secp521r1, "package:pointycastle/ecc/curves/secp521r1.dart");
  dart.defineLazy(secp521r1.ECCurve_secp521r1, {
    /*secp521r1.ECCurve_secp521r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp521r1", dart.fn(() => secp521r1.ECCurve_secp521r1.new(), VoidToECCurve_secp521r1()));
    }
  });
  ec_standard_curve_constructor.constructFpStandardCurve = function constructFpStandardCurve(name, constructor, opts) {
    let q = opts && 'q' in opts ? opts.q : null;
    let a = opts && 'a' in opts ? opts.a : null;
    let b = opts && 'b' in opts ? opts.b : null;
    let g = opts && 'g' in opts ? opts.g : null;
    let n = opts && 'n' in opts ? opts.n : null;
    let h = opts && 'h' in opts ? opts.h : null;
    let seed = opts && 'seed' in opts ? opts.seed : null;
    let curve = new ecc_fp.ECCurve.new(q, a, b);
    let seedBytes = seed == null ? null : utils.encodeBigInt(seed);
    return ecc_base.ECDomainParametersImpl._check(dart.dcall(constructor, [name, curve, curve.decodePoint(utils.encodeBigInt(g)), n, h, seedBytes]));
  };
  const _lucasSequence = dart.privateName(ecc_fp, "_lucasSequence");
  ecc_base.ECFieldElementBase = class ECFieldElementBase extends core.Object {
    get byteLength() {
      return ((dart.notNull(this.fieldSize) + 7) / 8)[$truncate]();
    }
    toString() {
      return dart.toString(this.toBigInteger());
    }
  };
  (ecc_base.ECFieldElementBase.new = function() {
    ;
  }).prototype = ecc_base.ECFieldElementBase.prototype;
  dart.addTypeTests(ecc_base.ECFieldElementBase);
  ecc_base.ECFieldElementBase[dart.implements] = () => [api$0.ECFieldElement];
  dart.setGetterSignature(ecc_base.ECFieldElementBase, () => ({
    __proto__: dart.getGetters(ecc_base.ECFieldElementBase.__proto__),
    byteLength: core.int
  }));
  dart.setLibraryUri(ecc_base.ECFieldElementBase, "package:pointycastle/ecc/ecc_base.dart");
  dart.defineExtensionMethods(ecc_base.ECFieldElementBase, ['toString']);
  const q$0 = dart.privateName(ecc_fp, "ECFieldElement.q");
  const x$ = dart.privateName(ecc_fp, "ECFieldElement.x");
  ecc_fp.ECFieldElement = class ECFieldElement extends ecc_base.ECFieldElementBase {
    get q() {
      return this[q$0];
    }
    set q(value) {
      super.q = value;
    }
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get fieldName() {
      return "Fp";
    }
    get fieldSize() {
      return this.q.bitLength;
    }
    toBigInteger() {
      return this.x;
    }
    ['+'](b) {
      ecc_fp.ECFieldElement._check(b);
      return new ecc_fp.ECFieldElement.new(this.q, this.x['+'](b.toBigInteger())['%'](this.q));
    }
    ['-'](b) {
      ecc_fp.ECFieldElement._check(b);
      return new ecc_fp.ECFieldElement.new(this.q, this.x['-'](b.toBigInteger())['%'](this.q));
    }
    ['*'](b) {
      ecc_fp.ECFieldElement._check(b);
      return new ecc_fp.ECFieldElement.new(this.q, this.x['*'](b.toBigInteger())['%'](this.q));
    }
    ['/'](b) {
      ecc_fp.ECFieldElement._check(b);
      return new ecc_fp.ECFieldElement.new(this.q, this.x['*'](b.toBigInteger().modInverse(this.q))['%'](this.q));
    }
    _negate() {
      return new ecc_fp.ECFieldElement.new(this.q, this.x._negate()['%'](this.q));
    }
    invert() {
      return new ecc_fp.ECFieldElement.new(this.q, this.x.modInverse(this.q));
    }
    square() {
      return new ecc_fp.ECFieldElement.new(this.q, this.x.modPow(core.BigInt.two, this.q));
    }
    sqrt() {
      if (!dart.test(ecc_fp._testBit(this.q, 0))) {
        dart.throw(new core.UnimplementedError.new("Not implemented yet"));
      }
      if (dart.test(ecc_fp._testBit(this.q, 1))) {
        let z = new ecc_fp.ECFieldElement.new(this.q, this.x.modPow(this.q['>>'](2)['+'](core.BigInt.one), this.q));
        return dart.equals(z.square(), this) ? z : null;
      }
      let qMinusOne = this.q['-'](core.BigInt.one);
      let legendreExponent = qMinusOne['>>'](1);
      if (!dart.equals(this.x.modPow(legendreExponent, this.q), core.BigInt.one)) {
        return null;
      }
      let u = qMinusOne['>>'](2);
      let k = u['<<'](1)['+'](core.BigInt.one);
      let Q = this.x;
      let fourQ = Q['>>'](2)['%'](this.q);
      let U = null;
      let V = null;
      let rand = api.SecureRandom.new();
      do {
        let P = null;
        do {
          P = rand.nextBigInteger(this.q.bitLength);
        } while (dart.test(P['>='](this.q)) || !dart.equals(P['*'](P)['-'](fourQ).modPow(legendreExponent, this.q), qMinusOne));
        let result = this[_lucasSequence](this.q, P, Q, k);
        U = result[$_get](0);
        V = result[$_get](1);
        if (dart.equals(dart.dsend(dart.dsend(V, '*', [V]), '%', [this.q]), fourQ)) {
          if (dart.test(ecc_fp._testBit(core.BigInt._check(V), 0))) {
            V = dart.dsend(V, '+', [this.q]);
          }
          V = dart.dsend(V, '>>', [1]);
          return new ecc_fp.ECFieldElement.new(this.q, core.BigInt._check(V));
        }
      } while (dart.equals(U, core.BigInt.one) || dart.equals(U, qMinusOne));
      return null;
    }
    [_lucasSequence](p, P, Q, k) {
      let n = k.bitLength;
      let s = ecc_fp._lbit(k);
      let Uh = core.BigInt.one;
      let Vl = core.BigInt.two;
      let Vh = P;
      let Ql = core.BigInt.one;
      let Qh = core.BigInt.one;
      for (let j = dart.notNull(n) - 1; j >= dart.notNull(s) + 1; j = j - 1) {
        Ql = Ql['*'](Qh)['%'](p);
        if (dart.test(ecc_fp._testBit(k, j))) {
          Qh = Ql['*'](Q)['%'](p);
          Uh = Uh['*'](Vh)['%'](p);
          Vl = Vh['*'](Vl)['-'](P['*'](Ql))['%'](p);
          Vh = Vh['*'](Vh)['-'](Qh['<<'](1))['%'](p);
        } else {
          Qh = Ql;
          Uh = Uh['*'](Vl)['-'](Ql)['%'](p);
          Vh = Vh['*'](Vl)['-'](P['*'](Ql))['%'](p);
          Vl = Vl['*'](Vl)['-'](Ql['<<'](1))['%'](p);
        }
      }
      Ql = Ql['*'](Qh)['%'](p);
      Qh = Ql['*'](Q)['%'](p);
      Uh = Uh['*'](Vl)['-'](Ql)['%'](p);
      Vl = Vh['*'](Vl)['-'](P['*'](Ql))['%'](p);
      Ql = Ql['*'](Qh)['%'](p);
      for (let j = 1; j <= dart.notNull(s); j = j + 1) {
        Uh = Uh['*'](Vl)['%'](p);
        Vl = Vl['*'](Vl)['-'](Ql['<<'](1))['%'](p);
        Ql = Ql['*'](Ql)['%'](p);
      }
      return JSArrayOfBigInt().of([Uh, Vl]);
    }
    _equals(other) {
      if (other == null) return false;
      if (ecc_fp.ECFieldElement.is(other)) {
        return dart.equals(this.q, other.q) && dart.equals(this.x, other.x);
      }
      return false;
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.q)) ^ dart.notNull(dart.hashCode(this.x))) >>> 0;
    }
  };
  (ecc_fp.ECFieldElement.new = function(q, x) {
    this[q$0] = q;
    this[x$] = x;
    if (dart.test(this.x['>='](this.q))) {
      dart.throw(new core.ArgumentError.new("Value x must be smaller than q"));
    }
  }).prototype = ecc_fp.ECFieldElement.prototype;
  dart.addTypeTests(ecc_fp.ECFieldElement);
  dart.setMethodSignature(ecc_fp.ECFieldElement, () => ({
    __proto__: dart.getMethods(ecc_fp.ECFieldElement.__proto__),
    toBigInteger: dart.fnType(core.BigInt, []),
    '+': dart.fnType(ecc_fp.ECFieldElement, [core.Object]),
    '-': dart.fnType(ecc_fp.ECFieldElement, [core.Object]),
    '*': dart.fnType(ecc_fp.ECFieldElement, [core.Object]),
    '/': dart.fnType(ecc_fp.ECFieldElement, [core.Object]),
    _negate: dart.fnType(ecc_fp.ECFieldElement, []),
    invert: dart.fnType(ecc_fp.ECFieldElement, []),
    square: dart.fnType(ecc_fp.ECFieldElement, []),
    sqrt: dart.fnType(ecc_fp.ECFieldElement, []),
    [_lucasSequence]: dart.fnType(core.List$(core.BigInt), [core.BigInt, core.BigInt, core.BigInt, core.BigInt])
  }));
  dart.setGetterSignature(ecc_fp.ECFieldElement, () => ({
    __proto__: dart.getGetters(ecc_fp.ECFieldElement.__proto__),
    fieldName: core.String,
    fieldSize: core.int
  }));
  dart.setLibraryUri(ecc_fp.ECFieldElement, "package:pointycastle/ecc/ecc_fp.dart");
  dart.setFieldSignature(ecc_fp.ECFieldElement, () => ({
    __proto__: dart.getFields(ecc_fp.ECFieldElement.__proto__),
    q: dart.finalFieldType(core.BigInt),
    x: dart.finalFieldType(core.BigInt)
  }));
  dart.defineExtensionMethods(ecc_fp.ECFieldElement, ['_equals']);
  dart.defineExtensionAccessors(ecc_fp.ECFieldElement, ['hashCode']);
  let C3;
  let C4;
  const _preCompInfo = dart.privateName(ecc_base, "_preCompInfo");
  const _multiplier$ = dart.privateName(ecc_base, "_multiplier");
  const curve$0 = dart.privateName(ecc_base, "ECPointBase.curve");
  const x$0 = dart.privateName(ecc_base, "ECPointBase.x");
  const y$ = dart.privateName(ecc_base, "ECPointBase.y");
  const isCompressed$ = dart.privateName(ecc_base, "ECPointBase.isCompressed");
  ecc_base.ECPointBase = class ECPointBase extends core.Object {
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      super.curve = value;
    }
    get x() {
      return this[x$0];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get isCompressed() {
      return this[isCompressed$];
    }
    set isCompressed(value) {
      super.isCompressed = value;
    }
    get isInfinity() {
      return this.x == null && this.y == null;
    }
    set preCompInfo(preCompInfo) {
      this[_preCompInfo] = preCompInfo;
    }
    _equals(other) {
      if (other == null) return false;
      if (ecc_base.ECPointBase.is(other)) {
        if (dart.test(this.isInfinity)) {
          return other.isInfinity;
        }
        return dart.equals(this.x, other.x) && dart.equals(this.y, other.y);
      }
      return false;
    }
    toString() {
      return "(" + dart.str(this.x) + "," + dart.str(this.y) + ")";
    }
    get hashCode() {
      if (dart.test(this.isInfinity)) {
        return 0;
      }
      return (dart.notNull(dart.hashCode(this.x)) ^ dart.notNull(dart.hashCode(this.y))) >>> 0;
    }
    ['*'](k) {
      if (dart.notNull(k.sign) < 0) {
        dart.throw(new core.ArgumentError.new("The multiplicator cannot be negative"));
      }
      if (dart.test(this.isInfinity)) {
        return this;
      }
      if (k.sign === 0) {
        return this.curve.infinity;
      }
      return this[_multiplier$](this, k, this[_preCompInfo]);
    }
  };
  (ecc_base.ECPointBase.new = function(curve, x, y, isCompressed, _multiplier = C4 || CT.C4) {
    this[_preCompInfo] = null;
    this[curve$0] = curve;
    this[x$0] = x;
    this[y$] = y;
    this[isCompressed$] = isCompressed;
    this[_multiplier$] = _multiplier;
    ;
  }).prototype = ecc_base.ECPointBase.prototype;
  dart.addTypeTests(ecc_base.ECPointBase);
  ecc_base.ECPointBase[dart.implements] = () => [api$0.ECPoint];
  dart.setMethodSignature(ecc_base.ECPointBase, () => ({
    __proto__: dart.getMethods(ecc_base.ECPointBase.__proto__),
    '*': dart.fnType(ecc_base.ECPointBase, [core.BigInt])
  }));
  dart.setGetterSignature(ecc_base.ECPointBase, () => ({
    __proto__: dart.getGetters(ecc_base.ECPointBase.__proto__),
    isInfinity: core.bool
  }));
  dart.setSetterSignature(ecc_base.ECPointBase, () => ({
    __proto__: dart.getSetters(ecc_base.ECPointBase.__proto__),
    preCompInfo: ecc_base.PreCompInfo
  }));
  dart.setLibraryUri(ecc_base.ECPointBase, "package:pointycastle/ecc/ecc_base.dart");
  dart.setFieldSignature(ecc_base.ECPointBase, () => ({
    __proto__: dart.getFields(ecc_base.ECPointBase.__proto__),
    curve: dart.finalFieldType(ecc_base.ECCurveBase),
    x: dart.finalFieldType(ecc_base.ECFieldElementBase),
    y: dart.finalFieldType(ecc_base.ECFieldElementBase),
    isCompressed: dart.finalFieldType(core.bool),
    [_multiplier$]: dart.finalFieldType(dart.fnType(ecc_base.ECPointBase, [ecc_base.ECPointBase, core.BigInt, ecc_base.PreCompInfo])),
    [_preCompInfo]: dart.fieldType(ecc_base.PreCompInfo)
  }));
  dart.defineExtensionMethods(ecc_base.ECPointBase, ['_equals', 'toString']);
  dart.defineExtensionAccessors(ecc_base.ECPointBase, ['hashCode']);
  ecc_fp.ECPoint = class ECPoint extends ecc_base.ECPointBase {
    getEncoded(compressed = true) {
      if (dart.test(this.isInfinity)) {
        return _native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([1]));
      }
      let qLength = this.x.byteLength;
      if (dart.test(compressed)) {
        let PC = null;
        if (dart.test(ecc_fp._testBit(this.y.toBigInteger(), 0))) {
          PC = 3;
        } else {
          PC = 2;
        }
        let X = ecc_fp._x9IntegerToBytes(this.x.toBigInteger(), qLength);
        let PO = _native_typed_data.NativeUint8List.new(dart.notNull(X[$length]) + 1);
        PO[$_set](0, PC[$toInt]());
        PO[$setAll](1, X);
        return PO;
      } else {
        let X = ecc_fp._x9IntegerToBytes(this.x.toBigInteger(), qLength);
        let Y = ecc_fp._x9IntegerToBytes(this.y.toBigInteger(), qLength);
        let PO = _native_typed_data.NativeUint8List.new(dart.notNull(X[$length]) + dart.notNull(Y[$length]) + 1);
        PO[$_set](0, 4);
        PO[$setAll](1, X);
        PO[$setAll](dart.notNull(X[$length]) + 1, Y);
        return PO;
      }
    }
    ['+'](b) {
      ecc_fp.ECPoint._check(b);
      if (dart.test(this.isInfinity)) {
        return b;
      }
      if (dart.test(b.isInfinity)) {
        return this;
      }
      if (dart.equals(this.x, b.x)) {
        if (dart.equals(this.y, b.y)) {
          return this.twice();
        }
        return ecc_fp.ECPoint._check(this.curve.infinity);
      }
      let gamma = b.y['-'](this.y)['/'](b.x['-'](this.x));
      let x3 = gamma.square()['-'](this.x)['-'](b.x);
      let y3 = gamma['*'](this.x['-'](x3))['-'](this.y);
      return new ecc_fp.ECPoint.new(ecc_fp.ECCurve._check(this.curve), ecc_fp.ECFieldElement._check(x3), ecc_fp.ECFieldElement._check(y3), this.isCompressed);
    }
    twice() {
      if (dart.test(this.isInfinity)) {
        return this;
      }
      if (dart.equals(this.y.toBigInteger(), 0)) {
        return ecc_fp.ECPoint._check(this.curve.infinity);
      }
      let TWO = this.curve.fromBigInteger(core.BigInt.two);
      let THREE = this.curve.fromBigInteger(core._BigIntImpl.from(3));
      let gamma = this.x.square()['*'](THREE)['+'](this.curve.a)['/'](this.y['*'](TWO));
      let x3 = gamma.square()['-'](this.x['*'](TWO));
      let y3 = gamma['*'](this.x['-'](x3))['-'](this.y);
      return new ecc_fp.ECPoint.new(ecc_fp.ECCurve._check(this.curve), ecc_fp.ECFieldElement._check(x3), ecc_fp.ECFieldElement._check(y3), this.isCompressed);
    }
    ['-'](b) {
      ecc_fp.ECPoint._check(b);
      if (dart.test(b.isInfinity)) {
        return this;
      }
      return this['+'](b._negate());
    }
    _negate() {
      return new ecc_fp.ECPoint.new(ecc_fp.ECCurve._check(this.curve), ecc_fp.ECFieldElement._check(this.x), ecc_fp.ECFieldElement._check(this.y._negate()), this.isCompressed);
    }
  };
  (ecc_fp.ECPoint.new = function(curve, x, y, withCompression = false) {
    ecc_fp.ECPoint.__proto__.new.call(this, curve, x, y, withCompression, C3 || CT.C3);
    if (x != null && y == null || x == null && y != null) {
      dart.throw(new core.ArgumentError.new("Exactly one of the field elements is null"));
    }
  }).prototype = ecc_fp.ECPoint.prototype;
  dart.addTypeTests(ecc_fp.ECPoint);
  dart.setMethodSignature(ecc_fp.ECPoint, () => ({
    __proto__: dart.getMethods(ecc_fp.ECPoint.__proto__),
    getEncoded: dart.fnType(typed_data.Uint8List, [], [core.bool]),
    '+': dart.fnType(ecc_fp.ECPoint, [core.Object]),
    twice: dart.fnType(ecc_fp.ECPoint, []),
    '-': dart.fnType(ecc_fp.ECPoint, [core.Object]),
    _negate: dart.fnType(ecc_fp.ECPoint, [])
  }));
  dart.setLibraryUri(ecc_fp.ECPoint, "package:pointycastle/ecc/ecc_fp.dart");
  const _infinity = dart.privateName(ecc_fp, "_infinity");
  const _a = dart.privateName(ecc_base, "_a");
  const _b = dart.privateName(ecc_base, "_b");
  const _fromArray = dart.privateName(ecc_base, "_fromArray");
  ecc_base.ECCurveBase = class ECCurveBase extends core.Object {
    get a() {
      return this[_a];
    }
    get b() {
      return this[_b];
    }
    decodePoint(encoded) {
      let p = null;
      let expectedLength = ((dart.notNull(this.fieldSize) + 7) / 8)[$truncate]();
      switch (encoded[$_get](0)) {
        case 0:
        {
          if (encoded[$length] !== 1) {
            dart.throw(new core.ArgumentError.new("Incorrect length for infinity encoding"));
          }
          p = this.infinity;
          break;
        }
        case 2:
        case 3:
        {
          if (encoded[$length] !== expectedLength + 1) {
            dart.throw(new core.ArgumentError.new("Incorrect length for compressed encoding"));
          }
          let yTilde = dart.notNull(encoded[$_get](0)) & 1;
          let X1 = this[_fromArray](encoded, 1, expectedLength);
          p = this.decompressPoint(yTilde, X1);
          break;
        }
        case 4:
        case 6:
        case 7:
        {
          if (encoded[$length] !== 2 * expectedLength + 1) {
            dart.throw(new core.ArgumentError.new("Incorrect length for uncompressed/hybrid encoding"));
          }
          let X1 = this[_fromArray](encoded, 1, expectedLength);
          let Y1 = this[_fromArray](encoded, 1 + expectedLength, expectedLength);
          p = this.createPoint(X1, Y1, false);
          break;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("Invalid point encoding 0x" + encoded[$_get](0)[$toRadixString](16)));
        }
      }
      return p;
    }
    [_fromArray](buf, off, length) {
      return utils.decodeBigInt(buf[$sublist](off, dart.notNull(off) + dart.notNull(length)));
    }
  };
  (ecc_base.ECCurveBase.new = function(a, b) {
    this[_a] = null;
    this[_b] = null;
    this[_a] = this.fromBigInteger(a);
    this[_b] = this.fromBigInteger(b);
  }).prototype = ecc_base.ECCurveBase.prototype;
  dart.addTypeTests(ecc_base.ECCurveBase);
  ecc_base.ECCurveBase[dart.implements] = () => [api$0.ECCurve];
  dart.setMethodSignature(ecc_base.ECCurveBase, () => ({
    __proto__: dart.getMethods(ecc_base.ECCurveBase.__proto__),
    decodePoint: dart.fnType(ecc_base.ECPointBase, [core.List$(core.int)]),
    [_fromArray]: dart.fnType(core.BigInt, [core.List$(core.int), core.int, core.int])
  }));
  dart.setGetterSignature(ecc_base.ECCurveBase, () => ({
    __proto__: dart.getGetters(ecc_base.ECCurveBase.__proto__),
    a: ecc_base.ECFieldElementBase,
    b: ecc_base.ECFieldElementBase
  }));
  dart.setLibraryUri(ecc_base.ECCurveBase, "package:pointycastle/ecc/ecc_base.dart");
  dart.setFieldSignature(ecc_base.ECCurveBase, () => ({
    __proto__: dart.getFields(ecc_base.ECCurveBase.__proto__),
    [_a]: dart.fieldType(ecc_base.ECFieldElementBase),
    [_b]: dart.fieldType(ecc_base.ECFieldElementBase)
  }));
  const q$1 = dart.privateName(ecc_fp, "ECCurve.q");
  ecc_fp.ECCurve = class ECCurve extends ecc_base.ECCurveBase {
    get q() {
      return this[q$1];
    }
    set q(value) {
      super.q = value;
    }
    get fieldSize() {
      return this.q.bitLength;
    }
    get infinity() {
      return this[_infinity];
    }
    fromBigInteger(x) {
      return new ecc_fp.ECFieldElement.new(this.q, x);
    }
    createPoint(x, y, withCompression = false) {
      return new ecc_fp.ECPoint.new(this, this.fromBigInteger(x), this.fromBigInteger(y), withCompression);
    }
    decompressPoint(yTilde, X1) {
      let x = this.fromBigInteger(X1);
      let alpha = x['*'](x['*'](x)['+'](ecc_fp.ECFieldElement._check(this.a)))['+'](ecc_fp.ECFieldElement._check(this.b));
      let beta = alpha.sqrt();
      if (beta == null) {
        dart.throw(new core.ArgumentError.new("Invalid point compression"));
      }
      let betaValue = beta.toBigInteger();
      let bit0 = dart.test(ecc_fp._testBit(betaValue, 0)) ? 1 : 0;
      if (bit0 !== yTilde) {
        beta = this.fromBigInteger(this.q['-'](betaValue));
      }
      return new ecc_fp.ECPoint.new(this, x, beta, true);
    }
    _equals(other) {
      if (other == null) return false;
      if (ecc_fp.ECCurve.is(other)) {
        return dart.equals(this.q, other.q) && dart.equals(this.a, other.a) && dart.equals(this.b, other.b);
      }
      return false;
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.a)) ^ dart.notNull(dart.hashCode(this.b)) ^ dart.notNull(dart.hashCode(this.q))) >>> 0;
    }
  };
  (ecc_fp.ECCurve.new = function(q, a, b) {
    this[_infinity] = null;
    this[q$1] = q;
    ecc_fp.ECCurve.__proto__.new.call(this, a, b);
    this[_infinity] = new ecc_fp.ECPoint.new(this, null, null);
  }).prototype = ecc_fp.ECCurve.prototype;
  dart.addTypeTests(ecc_fp.ECCurve);
  dart.setMethodSignature(ecc_fp.ECCurve, () => ({
    __proto__: dart.getMethods(ecc_fp.ECCurve.__proto__),
    fromBigInteger: dart.fnType(ecc_fp.ECFieldElement, [core.BigInt]),
    createPoint: dart.fnType(ecc_fp.ECPoint, [core.BigInt, core.BigInt], [core.bool]),
    decompressPoint: dart.fnType(ecc_fp.ECPoint, [core.int, core.BigInt])
  }));
  dart.setGetterSignature(ecc_fp.ECCurve, () => ({
    __proto__: dart.getGetters(ecc_fp.ECCurve.__proto__),
    fieldSize: core.int,
    infinity: ecc_fp.ECPoint
  }));
  dart.setLibraryUri(ecc_fp.ECCurve, "package:pointycastle/ecc/ecc_fp.dart");
  dart.setFieldSignature(ecc_fp.ECCurve, () => ({
    __proto__: dart.getFields(ecc_fp.ECCurve.__proto__),
    q: dart.finalFieldType(core.BigInt),
    [_infinity]: dart.fieldType(ecc_fp.ECPoint)
  }));
  dart.defineExtensionMethods(ecc_fp.ECCurve, ['_equals']);
  dart.defineExtensionAccessors(ecc_fp.ECCurve, ['hashCode']);
  ecc_fp._WNafPreCompInfo = class _WNafPreCompInfo extends core.Object {};
  (ecc_fp._WNafPreCompInfo.new = function() {
    this.preComp = null;
    this.twiceP = null;
    ;
  }).prototype = ecc_fp._WNafPreCompInfo.prototype;
  dart.addTypeTests(ecc_fp._WNafPreCompInfo);
  ecc_fp._WNafPreCompInfo[dart.implements] = () => [ecc_base.PreCompInfo];
  dart.setLibraryUri(ecc_fp._WNafPreCompInfo, "package:pointycastle/ecc/ecc_fp.dart");
  dart.setFieldSignature(ecc_fp._WNafPreCompInfo, () => ({
    __proto__: dart.getFields(ecc_fp._WNafPreCompInfo.__proto__),
    preComp: dart.fieldType(core.List$(ecc_fp.ECPoint)),
    twiceP: dart.fieldType(ecc_fp.ECPoint)
  }));
  ecc_fp._lbit = function _lbit$(x) {
    if (dart.equals(x, core.BigInt.zero)) return -1;
    let r = 0;
    while (dart.equals(x['&'](core._BigIntImpl.from(4294967295)), core.BigInt.zero)) {
      x = x['>>'](32);
      r = r + 32;
    }
    if (dart.equals(x['&'](core._BigIntImpl.from(65535)), core.BigInt.zero)) {
      x = x['>>'](16);
      r = r + 16;
    }
    if (dart.equals(x['&'](core._BigIntImpl.from(255)), core.BigInt.zero)) {
      x = x['>>'](8);
      r = r + 8;
    }
    if (dart.equals(x['&'](core._BigIntImpl.from(15)), core.BigInt.zero)) {
      x = x['>>'](4);
      r = r + 4;
    }
    if (dart.equals(x['&'](core._BigIntImpl.from(3)), core.BigInt.zero)) {
      x = x['>>'](2);
      r = r + 2;
    }
    if (dart.equals(x['&'](core.BigInt.one), core.BigInt.zero)) r = r + 1;
    return r;
  };
  ecc_fp._testBit = function _testBit$0(i, n) {
    return !dart.equals(i['&'](core.BigInt.one['<<'](n)), core.BigInt.zero);
  };
  ecc_fp._WNafMultiplier = function _WNafMultiplier(p, k, preCompInfo) {
    let wnafPreCompInfo = ecc_fp._WNafPreCompInfo._check(preCompInfo);
    if (preCompInfo == null && !ecc_fp._WNafPreCompInfo.is(preCompInfo)) {
      wnafPreCompInfo = new ecc_fp._WNafPreCompInfo.new();
    }
    let m = k.bitLength;
    let width = null;
    let reqPreCompLen = null;
    if (dart.notNull(m) < 13) {
      width = 2;
      reqPreCompLen = 1;
    } else {
      if (dart.notNull(m) < 41) {
        width = 3;
        reqPreCompLen = 2;
      } else {
        if (dart.notNull(m) < 121) {
          width = 4;
          reqPreCompLen = 4;
        } else {
          if (dart.notNull(m) < 337) {
            width = 5;
            reqPreCompLen = 8;
          } else {
            if (dart.notNull(m) < 897) {
              width = 6;
              reqPreCompLen = 16;
            } else {
              if (dart.notNull(m) < 2305) {
                width = 7;
                reqPreCompLen = 32;
              } else {
                width = 8;
                reqPreCompLen = 127;
              }
            }
          }
        }
      }
    }
    let preCompLen = 1;
    let preComp = wnafPreCompInfo.preComp;
    let twiceP = wnafPreCompInfo.twiceP;
    if (preComp == null) {
      preComp = ListOfECPoint().filled(1, ecc_fp.ECPoint._check(p));
    } else {
      preCompLen = preComp[$length];
    }
    if (twiceP == null) {
      twiceP = ecc_fp.ECPoint._check(p.twice());
    }
    if (dart.notNull(preCompLen) < dart.notNull(core.num._check(reqPreCompLen))) {
      let oldPreComp = preComp;
      preComp = ListOfECPoint().new(core.int._check(reqPreCompLen));
      preComp[$setAll](0, oldPreComp);
      for (let i = preCompLen; dart.notNull(i) < dart.notNull(core.num._check(reqPreCompLen)); i = dart.notNull(i) + 1) {
        preComp[$_set](i, twiceP['+'](preComp[$_get](dart.notNull(i) - 1)));
      }
    }
    let wnaf = ecc_fp._windowNaf(core.int._check(width), k);
    let l = wnaf[$length];
    let q = p.curve.infinity;
    for (let i = dart.notNull(l) - 1; i >= 0; i = i - 1) {
      q = q.twice();
      if (wnaf[$_get](i) !== 0) {
        if (dart.notNull(wnaf[$_get](i)) > 0) {
          q = q['+'](preComp[$_get](((dart.notNull(wnaf[$_get](i)) - 1) / 2)[$truncate]()));
        } else {
          q = q['-'](preComp[$_get](((-dart.notNull(wnaf[$_get](i)) - 1) / 2)[$truncate]()));
        }
      }
    }
    wnafPreCompInfo.preComp = preComp;
    wnafPreCompInfo.twiceP = twiceP;
    p.preCompInfo = wnafPreCompInfo;
    return q;
  };
  ecc_fp._windowNaf = function _windowNaf(width, k) {
    let t4, t3;
    let wnaf = ListOfint().new(dart.notNull(k.bitLength) + 1);
    let pow2wB = (1)[$leftShift](width);
    let pow2wBI = core._BigIntImpl.from(pow2wB);
    let i = 0;
    let length = 0;
    while (dart.notNull(k.sign) > 0) {
      if (dart.test(ecc_fp._testBit(k, 0))) {
        let remainder = k['%'](pow2wBI);
        if (dart.test(ecc_fp._testBit(remainder, dart.notNull(width) - 1))) {
          wnaf[$_set](i, dart.notNull(remainder.toInt()) - pow2wB);
        } else {
          wnaf[$_set](i, remainder.toInt());
        }
        t3 = wnaf;
        t4 = i;
        t3[$_set](t4, t3[$_get](t4)[$modulo](256));
        if ((dart.notNull(wnaf[$_get](i)) & 128) !== 0) {
          wnaf[$_set](i, dart.notNull(wnaf[$_get](i)) - 256);
        }
        k = k['-'](core._BigIntImpl.from(wnaf[$_get](i)));
        length = i;
      } else {
        wnaf[$_set](i, 0);
      }
      k = k['>>'](1);
      i = i + 1;
    }
    length = length + 1;
    let wnafShort = ListOfint().new(length);
    wnafShort[$setAll](0, wnaf[$sublist](0, length));
    return wnafShort;
  };
  ecc_fp._x9IntegerToBytes = function _x9IntegerToBytes(s, qLength) {
    let t3;
    let bytes = _native_typed_data.NativeUint8List.fromList(utils.encodeBigInt(s));
    if (dart.notNull(qLength) < dart.notNull(bytes[$length])) {
      return bytes[$sublist](dart.notNull(bytes[$length]) - dart.notNull(qLength));
    } else if (dart.notNull(qLength) > dart.notNull(bytes[$length])) {
      t3 = _native_typed_data.NativeUint8List.new(qLength);
      t3[$setAll](dart.notNull(qLength) - dart.notNull(bytes[$length]), bytes);
      return t3;
    }
    return bytes;
  };
  ecc_base.PreCompInfo = class PreCompInfo extends core.Object {};
  (ecc_base.PreCompInfo.new = function() {
    ;
  }).prototype = ecc_base.PreCompInfo.prototype;
  dart.addTypeTests(ecc_base.PreCompInfo);
  dart.setLibraryUri(ecc_base.PreCompInfo, "package:pointycastle/ecc/ecc_base.dart");
  ecc_base._testBit = function _testBit$1(i, n) {
    return !dart.equals(i['&'](core.BigInt.one['<<'](n)), core.BigInt.zero);
  };
  ecc_base._FpNafMultiplier = function _FpNafMultiplier(p, k, preCompInfo) {
    let e = k;
    let h = e['*'](core._BigIntImpl.from(3));
    let neg = p._negate();
    let R = p;
    for (let i = dart.notNull(h.bitLength) - 2; i > 0; i = i - 1) {
      R = R.twice();
      let hBit = ecc_base._testBit(h, i);
      let eBit = ecc_base._testBit(e, i);
      if (!dart.equals(hBit, eBit)) {
        R = R['+'](dart.test(hBit) ? p : neg);
      }
    }
    return R;
  };
  let C5;
  secp384r1.ECCurve_secp384r1 = class ECCurve_secp384r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp384r1.ECCurve_secp384r1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp384r1", C5 || CT.C5, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff", {radix: 16}), a: core.BigInt.parse("fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc", {radix: 16}), b: core.BigInt.parse("b3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef", {radix: 16}), g: core.BigInt.parse("04aa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab73617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", {radix: 16}), n: core.BigInt.parse("ffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("a335926aa319a27a1d00896a6773a4827acdac73", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp384r1.ECCurve_secp384r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp384r1.ECCurve_secp384r1._super = function(domainName, curve, G, n, _h, seed) {
    secp384r1.ECCurve_secp384r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp384r1.ECCurve_secp384r1.prototype;
  dart.addTypeTests(secp384r1.ECCurve_secp384r1);
  dart.setLibraryUri(secp384r1.ECCurve_secp384r1, "package:pointycastle/ecc/curves/secp384r1.dart");
  dart.defineLazy(secp384r1.ECCurve_secp384r1, {
    /*secp384r1.ECCurve_secp384r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp384r1", dart.fn(() => secp384r1.ECCurve_secp384r1.new(), VoidToECCurve_secp384r1()));
    }
  });
  let C6;
  secp256r1.ECCurve_secp256r1 = class ECCurve_secp256r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp256r1.ECCurve_secp256r1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp256r1", C6 || CT.C6, {q: core.BigInt.parse("ffffffff00000001000000000000000000000000ffffffffffffffffffffffff", {radix: 16}), a: core.BigInt.parse("ffffffff00000001000000000000000000000000fffffffffffffffffffffffc", {radix: 16}), b: core.BigInt.parse("5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b", {radix: 16}), g: core.BigInt.parse("046b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2964fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5", {radix: 16}), n: core.BigInt.parse("ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("c49d360886e704936a6678e1139d26b7819f7e90", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp256r1.ECCurve_secp256r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp256r1.ECCurve_secp256r1._super = function(domainName, curve, G, n, _h, seed) {
    secp256r1.ECCurve_secp256r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp256r1.ECCurve_secp256r1.prototype;
  dart.addTypeTests(secp256r1.ECCurve_secp256r1);
  dart.setLibraryUri(secp256r1.ECCurve_secp256r1, "package:pointycastle/ecc/curves/secp256r1.dart");
  dart.defineLazy(secp256r1.ECCurve_secp256r1, {
    /*secp256r1.ECCurve_secp256r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp256r1", dart.fn(() => secp256r1.ECCurve_secp256r1.new(), VoidToECCurve_secp256r1()));
    }
  });
  let C7;
  secp256k1.ECCurve_secp256k1 = class ECCurve_secp256k1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp256k1.ECCurve_secp256k1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp256k1", C7 || CT.C7, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f", {radix: 16}), a: core.BigInt.parse("0", {radix: 16}), b: core.BigInt.parse("7", {radix: 16}), g: core.BigInt.parse("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", {radix: 16}), n: core.BigInt.parse("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp256k1.ECCurve_secp256k1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp256k1.ECCurve_secp256k1._super = function(domainName, curve, G, n, _h, seed) {
    secp256k1.ECCurve_secp256k1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp256k1.ECCurve_secp256k1.prototype;
  dart.addTypeTests(secp256k1.ECCurve_secp256k1);
  dart.setLibraryUri(secp256k1.ECCurve_secp256k1, "package:pointycastle/ecc/curves/secp256k1.dart");
  dart.defineLazy(secp256k1.ECCurve_secp256k1, {
    /*secp256k1.ECCurve_secp256k1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp256k1", dart.fn(() => secp256k1.ECCurve_secp256k1.new(), VoidToECCurve_secp256k1()));
    }
  });
  let C8;
  secp224r1.ECCurve_secp224r1 = class ECCurve_secp224r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp224r1.ECCurve_secp224r1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp224r1", C8 || CT.C8, {q: core.BigInt.parse("ffffffffffffffffffffffffffffffff000000000000000000000001", {radix: 16}), a: core.BigInt.parse("fffffffffffffffffffffffffffffffefffffffffffffffffffffffe", {radix: 16}), b: core.BigInt.parse("b4050a850c04b3abf54132565044b0b7d7bfd8ba270b39432355ffb4", {radix: 16}), g: core.BigInt.parse("04b70e0cbd6bb4bf7f321390b94a03c1d356c21122343280d6115c1d21bd376388b5f723fb4c22dfe6cd4375a05a07476444d5819985007e34", {radix: 16}), n: core.BigInt.parse("ffffffffffffffffffffffffffff16a2e0b8f03e13dd29455c5c2a3d", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("bd71344799d5c7fcdc45b59fa3b9ab8f6a948bc5", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp224r1.ECCurve_secp224r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp224r1.ECCurve_secp224r1._super = function(domainName, curve, G, n, _h, seed) {
    secp224r1.ECCurve_secp224r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp224r1.ECCurve_secp224r1.prototype;
  dart.addTypeTests(secp224r1.ECCurve_secp224r1);
  dart.setLibraryUri(secp224r1.ECCurve_secp224r1, "package:pointycastle/ecc/curves/secp224r1.dart");
  dart.defineLazy(secp224r1.ECCurve_secp224r1, {
    /*secp224r1.ECCurve_secp224r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp224r1", dart.fn(() => secp224r1.ECCurve_secp224r1.new(), VoidToECCurve_secp224r1()));
    }
  });
  let C9;
  secp224k1.ECCurve_secp224k1 = class ECCurve_secp224k1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp224k1.ECCurve_secp224k1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp224k1", C9 || CT.C9, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffffffffffffffffffeffffe56d", {radix: 16}), a: core.BigInt.parse("0", {radix: 16}), b: core.BigInt.parse("5", {radix: 16}), g: core.BigInt.parse("04a1455b334df099df30fc28a169a467e9e47075a90f7e650eb6b7a45c7e089fed7fba344282cafbd6f7e319f7c0b0bd59e2ca4bdb556d61a5", {radix: 16}), n: core.BigInt.parse("10000000000000000000000000001dce8d2ec6184caf0a971769fb1f7", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp224k1.ECCurve_secp224k1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp224k1.ECCurve_secp224k1._super = function(domainName, curve, G, n, _h, seed) {
    secp224k1.ECCurve_secp224k1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp224k1.ECCurve_secp224k1.prototype;
  dart.addTypeTests(secp224k1.ECCurve_secp224k1);
  dart.setLibraryUri(secp224k1.ECCurve_secp224k1, "package:pointycastle/ecc/curves/secp224k1.dart");
  dart.defineLazy(secp224k1.ECCurve_secp224k1, {
    /*secp224k1.ECCurve_secp224k1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp224k1", dart.fn(() => secp224k1.ECCurve_secp224k1.new(), VoidToECCurve_secp224k1()));
    }
  });
  let C10;
  secp192r1.ECCurve_secp192r1 = class ECCurve_secp192r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp192r1.ECCurve_secp192r1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp192r1", C10 || CT.C10, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffeffffffffffffffff", {radix: 16}), a: core.BigInt.parse("fffffffffffffffffffffffffffffffefffffffffffffffc", {radix: 16}), b: core.BigInt.parse("64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1", {radix: 16}), g: core.BigInt.parse("04188da80eb03090f67cbf20eb43a18800f4ff0afd82ff101207192b95ffc8da78631011ed6b24cdd573f977a11e794811", {radix: 16}), n: core.BigInt.parse("ffffffffffffffffffffffff99def836146bc9b1b4d22831", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("3045ae6fc8422f64ed579528d38120eae12196d5", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp192r1.ECCurve_secp192r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp192r1.ECCurve_secp192r1._super = function(domainName, curve, G, n, _h, seed) {
    secp192r1.ECCurve_secp192r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp192r1.ECCurve_secp192r1.prototype;
  dart.addTypeTests(secp192r1.ECCurve_secp192r1);
  dart.setLibraryUri(secp192r1.ECCurve_secp192r1, "package:pointycastle/ecc/curves/secp192r1.dart");
  dart.defineLazy(secp192r1.ECCurve_secp192r1, {
    /*secp192r1.ECCurve_secp192r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp192r1", dart.fn(() => secp192r1.ECCurve_secp192r1.new(), VoidToECCurve_secp192r1()));
    }
  });
  let C11;
  secp192k1.ECCurve_secp192k1 = class ECCurve_secp192k1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp192k1.ECCurve_secp192k1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp192k1", C11 || CT.C11, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffffffffffeffffee37", {radix: 16}), a: core.BigInt.parse("0", {radix: 16}), b: core.BigInt.parse("3", {radix: 16}), g: core.BigInt.parse("04db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d", {radix: 16}), n: core.BigInt.parse("fffffffffffffffffffffffe26f2fc170f69466a74defd8d", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp192k1.ECCurve_secp192k1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp192k1.ECCurve_secp192k1._super = function(domainName, curve, G, n, _h, seed) {
    secp192k1.ECCurve_secp192k1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp192k1.ECCurve_secp192k1.prototype;
  dart.addTypeTests(secp192k1.ECCurve_secp192k1);
  dart.setLibraryUri(secp192k1.ECCurve_secp192k1, "package:pointycastle/ecc/curves/secp192k1.dart");
  dart.defineLazy(secp192k1.ECCurve_secp192k1, {
    /*secp192k1.ECCurve_secp192k1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp192k1", dart.fn(() => secp192k1.ECCurve_secp192k1.new(), VoidToECCurve_secp192k1()));
    }
  });
  let C12;
  secp160r2.ECCurve_secp160r2 = class ECCurve_secp160r2 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp160r2.ECCurve_secp160r2._check(ec_standard_curve_constructor.constructFpStandardCurve("secp160r2", C12 || CT.C12, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffeffffac73", {radix: 16}), a: core.BigInt.parse("fffffffffffffffffffffffffffffffeffffac70", {radix: 16}), b: core.BigInt.parse("b4e134d3fb59eb8bab57274904664d5af50388ba", {radix: 16}), g: core.BigInt.parse("0452dcb034293a117e1f4ff11b30f7199d3144ce6dfeaffef2e331f296e071fa0df9982cfea7d43f2e", {radix: 16}), n: core.BigInt.parse("100000000000000000000351ee786a818f3a1a16b", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("b99b99b099b323e02709a4d696e6768756151751", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp160r2.ECCurve_secp160r2._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp160r2.ECCurve_secp160r2._super = function(domainName, curve, G, n, _h, seed) {
    secp160r2.ECCurve_secp160r2.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp160r2.ECCurve_secp160r2.prototype;
  dart.addTypeTests(secp160r2.ECCurve_secp160r2);
  dart.setLibraryUri(secp160r2.ECCurve_secp160r2, "package:pointycastle/ecc/curves/secp160r2.dart");
  dart.defineLazy(secp160r2.ECCurve_secp160r2, {
    /*secp160r2.ECCurve_secp160r2.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp160r2", dart.fn(() => secp160r2.ECCurve_secp160r2.new(), VoidToECCurve_secp160r2()));
    }
  });
  let C13;
  secp160r1.ECCurve_secp160r1 = class ECCurve_secp160r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp160r1.ECCurve_secp160r1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp160r1", C13 || CT.C13, {q: core.BigInt.parse("ffffffffffffffffffffffffffffffff7fffffff", {radix: 16}), a: core.BigInt.parse("ffffffffffffffffffffffffffffffff7ffffffc", {radix: 16}), b: core.BigInt.parse("1c97befc54bd7a8b65acf89f81d4d4adc565fa45", {radix: 16}), g: core.BigInt.parse("044a96b5688ef573284664698968c38bb913cbfc8223a628553168947d59dcc912042351377ac5fb32", {radix: 16}), n: core.BigInt.parse("100000000000000000001f4c8f927aed3ca752257", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("1053cde42c14d696e67687561517533bf3f83345", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp160r1.ECCurve_secp160r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp160r1.ECCurve_secp160r1._super = function(domainName, curve, G, n, _h, seed) {
    secp160r1.ECCurve_secp160r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp160r1.ECCurve_secp160r1.prototype;
  dart.addTypeTests(secp160r1.ECCurve_secp160r1);
  dart.setLibraryUri(secp160r1.ECCurve_secp160r1, "package:pointycastle/ecc/curves/secp160r1.dart");
  dart.defineLazy(secp160r1.ECCurve_secp160r1, {
    /*secp160r1.ECCurve_secp160r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp160r1", dart.fn(() => secp160r1.ECCurve_secp160r1.new(), VoidToECCurve_secp160r1()));
    }
  });
  let C14;
  secp160k1.ECCurve_secp160k1 = class ECCurve_secp160k1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp160k1.ECCurve_secp160k1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp160k1", C14 || CT.C14, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffeffffac73", {radix: 16}), a: core.BigInt.parse("0", {radix: 16}), b: core.BigInt.parse("7", {radix: 16}), g: core.BigInt.parse("043b4c382ce37aa192a4019e763036f4f5dd4d7ebb938cf935318fdced6bc28286531733c3f03c4fee", {radix: 16}), n: core.BigInt.parse("100000000000000000001b8fa16dfab9aca16b6b3", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp160k1.ECCurve_secp160k1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp160k1.ECCurve_secp160k1._super = function(domainName, curve, G, n, _h, seed) {
    secp160k1.ECCurve_secp160k1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp160k1.ECCurve_secp160k1.prototype;
  dart.addTypeTests(secp160k1.ECCurve_secp160k1);
  dart.setLibraryUri(secp160k1.ECCurve_secp160k1, "package:pointycastle/ecc/curves/secp160k1.dart");
  dart.defineLazy(secp160k1.ECCurve_secp160k1, {
    /*secp160k1.ECCurve_secp160k1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp160k1", dart.fn(() => secp160k1.ECCurve_secp160k1.new(), VoidToECCurve_secp160k1()));
    }
  });
  let C15;
  secp128r2.ECCurve_secp128r2 = class ECCurve_secp128r2 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp128r2.ECCurve_secp128r2._check(ec_standard_curve_constructor.constructFpStandardCurve("secp128r2", C15 || CT.C15, {q: core.BigInt.parse("fffffffdffffffffffffffffffffffff", {radix: 16}), a: core.BigInt.parse("d6031998d1b3bbfebf59cc9bbff9aee1", {radix: 16}), b: core.BigInt.parse("5eeefca380d02919dc2c6558bb6d8a5d", {radix: 16}), g: core.BigInt.parse("047b6aa5d85e572983e6fb32a7cdebc14027b6916a894d3aee7106fe805fc34b44", {radix: 16}), n: core.BigInt.parse("3fffffff7fffffffbe0024720613b5a3", {radix: 16}), h: core.BigInt.parse("4", {radix: 16}), seed: core.BigInt.parse("004d696e67687561517512d8f03431fce63b88f4", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp128r2.ECCurve_secp128r2._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp128r2.ECCurve_secp128r2._super = function(domainName, curve, G, n, _h, seed) {
    secp128r2.ECCurve_secp128r2.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp128r2.ECCurve_secp128r2.prototype;
  dart.addTypeTests(secp128r2.ECCurve_secp128r2);
  dart.setLibraryUri(secp128r2.ECCurve_secp128r2, "package:pointycastle/ecc/curves/secp128r2.dart");
  dart.defineLazy(secp128r2.ECCurve_secp128r2, {
    /*secp128r2.ECCurve_secp128r2.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp128r2", dart.fn(() => secp128r2.ECCurve_secp128r2.new(), VoidToECCurve_secp128r2()));
    }
  });
  let C16;
  secp128r1.ECCurve_secp128r1 = class ECCurve_secp128r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp128r1.ECCurve_secp128r1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp128r1", C16 || CT.C16, {q: core.BigInt.parse("fffffffdffffffffffffffffffffffff", {radix: 16}), a: core.BigInt.parse("fffffffdfffffffffffffffffffffffc", {radix: 16}), b: core.BigInt.parse("e87579c11079f43dd824993c2cee5ed3", {radix: 16}), g: core.BigInt.parse("04161ff7528b899b2d0c28607ca52c5b86cf5ac8395bafeb13c02da292dded7a83", {radix: 16}), n: core.BigInt.parse("fffffffe0000000075a30d1b9038a115", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("000e0d4d696e6768756151750cc03a4473d03679", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp128r1.ECCurve_secp128r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp128r1.ECCurve_secp128r1._super = function(domainName, curve, G, n, _h, seed) {
    secp128r1.ECCurve_secp128r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp128r1.ECCurve_secp128r1.prototype;
  dart.addTypeTests(secp128r1.ECCurve_secp128r1);
  dart.setLibraryUri(secp128r1.ECCurve_secp128r1, "package:pointycastle/ecc/curves/secp128r1.dart");
  dart.defineLazy(secp128r1.ECCurve_secp128r1, {
    /*secp128r1.ECCurve_secp128r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp128r1", dart.fn(() => secp128r1.ECCurve_secp128r1.new(), VoidToECCurve_secp128r1()));
    }
  });
  let C17;
  secp112r2.ECCurve_secp112r2 = class ECCurve_secp112r2 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp112r2.ECCurve_secp112r2._check(ec_standard_curve_constructor.constructFpStandardCurve("secp112r2", C17 || CT.C17, {q: core.BigInt.parse("db7c2abf62e35e668076bead208b", {radix: 16}), a: core.BigInt.parse("6127c24c05f38a0aaaf65c0ef02c", {radix: 16}), b: core.BigInt.parse("51def1815db5ed74fcc34c85d709", {radix: 16}), g: core.BigInt.parse("044ba30ab5e892b4e1649dd0928643adcd46f5882e3747def36e956e97", {radix: 16}), n: core.BigInt.parse("36df0aafd8b8d7597ca10520d04b", {radix: 16}), h: core.BigInt.parse("4", {radix: 16}), seed: core.BigInt.parse("002757a1114d696e6768756151755316c05e0bd4", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp112r2.ECCurve_secp112r2._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp112r2.ECCurve_secp112r2._super = function(domainName, curve, G, n, _h, seed) {
    secp112r2.ECCurve_secp112r2.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp112r2.ECCurve_secp112r2.prototype;
  dart.addTypeTests(secp112r2.ECCurve_secp112r2);
  dart.setLibraryUri(secp112r2.ECCurve_secp112r2, "package:pointycastle/ecc/curves/secp112r2.dart");
  dart.defineLazy(secp112r2.ECCurve_secp112r2, {
    /*secp112r2.ECCurve_secp112r2.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp112r2", dart.fn(() => secp112r2.ECCurve_secp112r2.new(), VoidToECCurve_secp112r2()));
    }
  });
  let C18;
  secp112r1.ECCurve_secp112r1 = class ECCurve_secp112r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return secp112r1.ECCurve_secp112r1._check(ec_standard_curve_constructor.constructFpStandardCurve("secp112r1", C18 || CT.C18, {q: core.BigInt.parse("db7c2abf62e35e668076bead208b", {radix: 16}), a: core.BigInt.parse("db7c2abf62e35e668076bead2088", {radix: 16}), b: core.BigInt.parse("659ef8ba043916eede8911702b22", {radix: 16}), g: core.BigInt.parse("0409487239995a5ee76b55f9c2f098a89ce5af8724c0a23e0e0ff77500", {radix: 16}), n: core.BigInt.parse("db7c2abf62e35e7628dfac6561c5", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("00f50b028e4d696e676875615175290472783fb1", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new secp112r1.ECCurve_secp112r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (secp112r1.ECCurve_secp112r1._super = function(domainName, curve, G, n, _h, seed) {
    secp112r1.ECCurve_secp112r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = secp112r1.ECCurve_secp112r1.prototype;
  dart.addTypeTests(secp112r1.ECCurve_secp112r1);
  dart.setLibraryUri(secp112r1.ECCurve_secp112r1, "package:pointycastle/ecc/curves/secp112r1.dart");
  dart.defineLazy(secp112r1.ECCurve_secp112r1, {
    /*secp112r1.ECCurve_secp112r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "secp112r1", dart.fn(() => secp112r1.ECCurve_secp112r1.new(), VoidToECCurve_secp112r1()));
    }
  });
  let C19;
  prime256v1.ECCurve_prime256v1 = class ECCurve_prime256v1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return prime256v1.ECCurve_prime256v1._check(ec_standard_curve_constructor.constructFpStandardCurve("prime256v1", C19 || CT.C19, {q: core.BigInt.parse("ffffffff00000001000000000000000000000000ffffffffffffffffffffffff", {radix: 16}), a: core.BigInt.parse("ffffffff00000001000000000000000000000000fffffffffffffffffffffffc", {radix: 16}), b: core.BigInt.parse("5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b", {radix: 16}), g: core.BigInt.parse("036b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296", {radix: 16}), n: core.BigInt.parse("ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("c49d360886e704936a6678e1139d26b7819f7e90", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new prime256v1.ECCurve_prime256v1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (prime256v1.ECCurve_prime256v1._super = function(domainName, curve, G, n, _h, seed) {
    prime256v1.ECCurve_prime256v1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = prime256v1.ECCurve_prime256v1.prototype;
  dart.addTypeTests(prime256v1.ECCurve_prime256v1);
  dart.setLibraryUri(prime256v1.ECCurve_prime256v1, "package:pointycastle/ecc/curves/prime256v1.dart");
  dart.defineLazy(prime256v1.ECCurve_prime256v1, {
    /*prime256v1.ECCurve_prime256v1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "prime256v1", dart.fn(() => prime256v1.ECCurve_prime256v1.new(), VoidToECCurve_prime256v1()));
    }
  });
  let C20;
  prime239v3.ECCurve_prime239v3 = class ECCurve_prime239v3 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return prime239v3.ECCurve_prime239v3._check(ec_standard_curve_constructor.constructFpStandardCurve("prime239v3", C20 || CT.C20, {q: core.BigInt.parse("7fffffffffffffffffffffff7fffffffffff8000000000007fffffffffff", {radix: 16}), a: core.BigInt.parse("7fffffffffffffffffffffff7fffffffffff8000000000007ffffffffffc", {radix: 16}), b: core.BigInt.parse("255705fa2a306654b1f4cb03d6a750a30c250102d4988717d9ba15ab6d3e", {radix: 16}), g: core.BigInt.parse("036768ae8e18bb92cfcf005c949aa2c6d94853d0e660bbf854b1c9505fe95a", {radix: 16}), n: core.BigInt.parse("7fffffffffffffffffffffff7fffff975deb41b3a6057c3c432146526551", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("7d7374168ffe3471b60a857686a19475d3bfa2ff", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new prime239v3.ECCurve_prime239v3._super(domainName, curve, G, n, _h, seed);
    }
  };
  (prime239v3.ECCurve_prime239v3._super = function(domainName, curve, G, n, _h, seed) {
    prime239v3.ECCurve_prime239v3.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = prime239v3.ECCurve_prime239v3.prototype;
  dart.addTypeTests(prime239v3.ECCurve_prime239v3);
  dart.setLibraryUri(prime239v3.ECCurve_prime239v3, "package:pointycastle/ecc/curves/prime239v3.dart");
  dart.defineLazy(prime239v3.ECCurve_prime239v3, {
    /*prime239v3.ECCurve_prime239v3.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "prime239v3", dart.fn(() => prime239v3.ECCurve_prime239v3.new(), VoidToECCurve_prime239v3()));
    }
  });
  let C21;
  prime239v2.ECCurve_prime239v2 = class ECCurve_prime239v2 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return prime239v2.ECCurve_prime239v2._check(ec_standard_curve_constructor.constructFpStandardCurve("prime239v2", C21 || CT.C21, {q: core.BigInt.parse("7fffffffffffffffffffffff7fffffffffff8000000000007fffffffffff", {radix: 16}), a: core.BigInt.parse("7fffffffffffffffffffffff7fffffffffff8000000000007ffffffffffc", {radix: 16}), b: core.BigInt.parse("617fab6832576cbbfed50d99f0249c3fee58b94ba0038c7ae84c8c832f2c", {radix: 16}), g: core.BigInt.parse("0238af09d98727705120c921bb5e9e26296a3cdcf2f35757a0eafd87b830e7", {radix: 16}), n: core.BigInt.parse("7fffffffffffffffffffffff800000cfa7e8594377d414c03821bc582063", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("e8b4011604095303ca3b8099982be09fcb9ae616", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new prime239v2.ECCurve_prime239v2._super(domainName, curve, G, n, _h, seed);
    }
  };
  (prime239v2.ECCurve_prime239v2._super = function(domainName, curve, G, n, _h, seed) {
    prime239v2.ECCurve_prime239v2.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = prime239v2.ECCurve_prime239v2.prototype;
  dart.addTypeTests(prime239v2.ECCurve_prime239v2);
  dart.setLibraryUri(prime239v2.ECCurve_prime239v2, "package:pointycastle/ecc/curves/prime239v2.dart");
  dart.defineLazy(prime239v2.ECCurve_prime239v2, {
    /*prime239v2.ECCurve_prime239v2.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "prime239v2", dart.fn(() => prime239v2.ECCurve_prime239v2.new(), VoidToECCurve_prime239v2()));
    }
  });
  let C22;
  prime239v1.ECCurve_prime239v1 = class ECCurve_prime239v1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return prime239v1.ECCurve_prime239v1._check(ec_standard_curve_constructor.constructFpStandardCurve("prime239v1", C22 || CT.C22, {q: core.BigInt.parse("7fffffffffffffffffffffff7fffffffffff8000000000007fffffffffff", {radix: 16}), a: core.BigInt.parse("7fffffffffffffffffffffff7fffffffffff8000000000007ffffffffffc", {radix: 16}), b: core.BigInt.parse("6b016c3bdcf18941d0d654921475ca71a9db2fb27d1d37796185c2942c0a", {radix: 16}), g: core.BigInt.parse("020ffa963cdca8816ccc33b8642bedf905c3d358573d3f27fbbd3b3cb9aaaf", {radix: 16}), n: core.BigInt.parse("7fffffffffffffffffffffff7fffff9e5e9a9f5d9071fbd1522688909d0b", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("e43bb460f0b80cc0c0b075798e948060f8321b7d", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new prime239v1.ECCurve_prime239v1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (prime239v1.ECCurve_prime239v1._super = function(domainName, curve, G, n, _h, seed) {
    prime239v1.ECCurve_prime239v1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = prime239v1.ECCurve_prime239v1.prototype;
  dart.addTypeTests(prime239v1.ECCurve_prime239v1);
  dart.setLibraryUri(prime239v1.ECCurve_prime239v1, "package:pointycastle/ecc/curves/prime239v1.dart");
  dart.defineLazy(prime239v1.ECCurve_prime239v1, {
    /*prime239v1.ECCurve_prime239v1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "prime239v1", dart.fn(() => prime239v1.ECCurve_prime239v1.new(), VoidToECCurve_prime239v1()));
    }
  });
  let C23;
  prime192v3.ECCurve_prime192v3 = class ECCurve_prime192v3 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return prime192v3.ECCurve_prime192v3._check(ec_standard_curve_constructor.constructFpStandardCurve("prime192v3", C23 || CT.C23, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffeffffffffffffffff", {radix: 16}), a: core.BigInt.parse("fffffffffffffffffffffffffffffffefffffffffffffffc", {radix: 16}), b: core.BigInt.parse("22123dc2395a05caa7423daeccc94760a7d462256bd56916", {radix: 16}), g: core.BigInt.parse("027d29778100c65a1da1783716588dce2b8b4aee8e228f1896", {radix: 16}), n: core.BigInt.parse("ffffffffffffffffffffffff7a62d031c83f4294f640ec13", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("c469684435deb378c4b65ca9591e2a5763059a2e", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new prime192v3.ECCurve_prime192v3._super(domainName, curve, G, n, _h, seed);
    }
  };
  (prime192v3.ECCurve_prime192v3._super = function(domainName, curve, G, n, _h, seed) {
    prime192v3.ECCurve_prime192v3.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = prime192v3.ECCurve_prime192v3.prototype;
  dart.addTypeTests(prime192v3.ECCurve_prime192v3);
  dart.setLibraryUri(prime192v3.ECCurve_prime192v3, "package:pointycastle/ecc/curves/prime192v3.dart");
  dart.defineLazy(prime192v3.ECCurve_prime192v3, {
    /*prime192v3.ECCurve_prime192v3.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "prime192v3", dart.fn(() => prime192v3.ECCurve_prime192v3.new(), VoidToECCurve_prime192v3()));
    }
  });
  let C24;
  prime192v2.ECCurve_prime192v2 = class ECCurve_prime192v2 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return prime192v2.ECCurve_prime192v2._check(ec_standard_curve_constructor.constructFpStandardCurve("prime192v2", C24 || CT.C24, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffeffffffffffffffff", {radix: 16}), a: core.BigInt.parse("fffffffffffffffffffffffffffffffefffffffffffffffc", {radix: 16}), b: core.BigInt.parse("cc22d6dfb95c6b25e49c0d6364a4e5980c393aa21668d953", {radix: 16}), g: core.BigInt.parse("03eea2bae7e1497842f2de7769cfe9c989c072ad696f48034a", {radix: 16}), n: core.BigInt.parse("fffffffffffffffffffffffe5fb1a724dc80418648d8dd31", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("31a92ee2029fd10d901b113e990710f0d21ac6b6", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new prime192v2.ECCurve_prime192v2._super(domainName, curve, G, n, _h, seed);
    }
  };
  (prime192v2.ECCurve_prime192v2._super = function(domainName, curve, G, n, _h, seed) {
    prime192v2.ECCurve_prime192v2.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = prime192v2.ECCurve_prime192v2.prototype;
  dart.addTypeTests(prime192v2.ECCurve_prime192v2);
  dart.setLibraryUri(prime192v2.ECCurve_prime192v2, "package:pointycastle/ecc/curves/prime192v2.dart");
  dart.defineLazy(prime192v2.ECCurve_prime192v2, {
    /*prime192v2.ECCurve_prime192v2.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "prime192v2", dart.fn(() => prime192v2.ECCurve_prime192v2.new(), VoidToECCurve_prime192v2()));
    }
  });
  let C25;
  prime192v1.ECCurve_prime192v1 = class ECCurve_prime192v1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return prime192v1.ECCurve_prime192v1._check(ec_standard_curve_constructor.constructFpStandardCurve("prime192v1", C25 || CT.C25, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffeffffffffffffffff", {radix: 16}), a: core.BigInt.parse("fffffffffffffffffffffffffffffffefffffffffffffffc", {radix: 16}), b: core.BigInt.parse("64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1", {radix: 16}), g: core.BigInt.parse("03188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012", {radix: 16}), n: core.BigInt.parse("ffffffffffffffffffffffff99def836146bc9b1b4d22831", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: core.BigInt.parse("3045ae6fc8422f64ed579528d38120eae12196d5", {radix: 16})}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new prime192v1.ECCurve_prime192v1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (prime192v1.ECCurve_prime192v1._super = function(domainName, curve, G, n, _h, seed) {
    prime192v1.ECCurve_prime192v1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = prime192v1.ECCurve_prime192v1.prototype;
  dart.addTypeTests(prime192v1.ECCurve_prime192v1);
  dart.setLibraryUri(prime192v1.ECCurve_prime192v1, "package:pointycastle/ecc/curves/prime192v1.dart");
  dart.defineLazy(prime192v1.ECCurve_prime192v1, {
    /*prime192v1.ECCurve_prime192v1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "prime192v1", dart.fn(() => prime192v1.ECCurve_prime192v1.new(), VoidToECCurve_prime192v1()));
    }
  });
  let C26;
  gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb = class ECCurve_gostr3410_2001_cryptopro_xchb extends ecc_base.ECDomainParametersImpl {
    static new() {
      return gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb._check(ec_standard_curve_constructor.constructFpStandardCurve("GostR3410-2001-CryptoPro-XchB", C26 || CT.C26, {q: core.BigInt.parse("9b9f605f5a858107ab1ec85e6b41c8aacf846e86789051d37998f7b9022d759b", {radix: 16}), a: core.BigInt.parse("9b9f605f5a858107ab1ec85e6b41c8aacf846e86789051d37998f7b9022d7598", {radix: 16}), b: core.BigInt.parse("805a", {radix: 16}), g: core.BigInt.parse("04000000000000000000000000000000000000000000000000000000000000000041ece55743711a8c3cbf3783cd08c0ee4d4dc440d4641a8f366e550dfdb3bb67", {radix: 16}), n: core.BigInt.parse("9b9f605f5a858107ab1ec85e6b41c8aa582ca3511eddfb74f02f3a6598980bb9", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb._super(domainName, curve, G, n, _h, seed);
    }
  };
  (gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb._super = function(domainName, curve, G, n, _h, seed) {
    gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb.prototype;
  dart.addTypeTests(gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb);
  dart.setLibraryUri(gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb, "package:pointycastle/ecc/curves/gostr3410_2001_cryptopro_xchb.dart");
  dart.defineLazy(gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb, {
    /*gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "GostR3410-2001-CryptoPro-XchB", dart.fn(() => gostr3410_2001_cryptopro_xchb.ECCurve_gostr3410_2001_cryptopro_xchb.new(), VoidToECCurve_gostr3410_2001_cryptopro_xchb()));
    }
  });
  let C27;
  gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha = class ECCurve_gostr3410_2001_cryptopro_xcha extends ecc_base.ECDomainParametersImpl {
    static new() {
      return gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha._check(ec_standard_curve_constructor.constructFpStandardCurve("GostR3410-2001-CryptoPro-XchA", C27 || CT.C27, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd97", {radix: 16}), a: core.BigInt.parse("fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd94", {radix: 16}), b: core.BigInt.parse("a6", {radix: 16}), g: core.BigInt.parse("0400000000000000000000000000000000000000000000000000000000000000018d91e471e0989cda27df505a453f2b7635294f2ddf23e3b122acc99c9e9f1e14", {radix: 16}), n: core.BigInt.parse("ffffffffffffffffffffffffffffffff6c611070995ad10045841b09b761b893", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha._super(domainName, curve, G, n, _h, seed);
    }
  };
  (gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha._super = function(domainName, curve, G, n, _h, seed) {
    gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha.prototype;
  dart.addTypeTests(gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha);
  dart.setLibraryUri(gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha, "package:pointycastle/ecc/curves/gostr3410_2001_cryptopro_xcha.dart");
  dart.defineLazy(gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha, {
    /*gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "GostR3410-2001-CryptoPro-XchA", dart.fn(() => gostr3410_2001_cryptopro_xcha.ECCurve_gostr3410_2001_cryptopro_xcha.new(), VoidToECCurve_gostr3410_2001_cryptopro_xcha()));
    }
  });
  let C28;
  gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c = class ECCurve_gostr3410_2001_cryptopro_c extends ecc_base.ECDomainParametersImpl {
    static new() {
      return gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c._check(ec_standard_curve_constructor.constructFpStandardCurve("GostR3410-2001-CryptoPro-C", C28 || CT.C28, {q: core.BigInt.parse("9b9f605f5a858107ab1ec85e6b41c8aacf846e86789051d37998f7b9022d759b", {radix: 16}), a: core.BigInt.parse("9b9f605f5a858107ab1ec85e6b41c8aacf846e86789051d37998f7b9022d7598", {radix: 16}), b: core.BigInt.parse("805a", {radix: 16}), g: core.BigInt.parse("04000000000000000000000000000000000000000000000000000000000000000041ece55743711a8c3cbf3783cd08c0ee4d4dc440d4641a8f366e550dfdb3bb67", {radix: 16}), n: core.BigInt.parse("9b9f605f5a858107ab1ec85e6b41c8aa582ca3511eddfb74f02f3a6598980bb9", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c._super(domainName, curve, G, n, _h, seed);
    }
  };
  (gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c._super = function(domainName, curve, G, n, _h, seed) {
    gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c.prototype;
  dart.addTypeTests(gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c);
  dart.setLibraryUri(gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c, "package:pointycastle/ecc/curves/gostr3410_2001_cryptopro_c.dart");
  dart.defineLazy(gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c, {
    /*gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "GostR3410-2001-CryptoPro-C", dart.fn(() => gostr3410_2001_cryptopro_c.ECCurve_gostr3410_2001_cryptopro_c.new(), VoidToECCurve_gostr3410_2001_cryptopro_c()));
    }
  });
  let C29;
  gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b = class ECCurve_gostr3410_2001_cryptopro_b extends ecc_base.ECDomainParametersImpl {
    static new() {
      return gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b._check(ec_standard_curve_constructor.constructFpStandardCurve("GostR3410-2001-CryptoPro-B", C29 || CT.C29, {q: core.BigInt.parse("8000000000000000000000000000000000000000000000000000000000000c99", {radix: 16}), a: core.BigInt.parse("8000000000000000000000000000000000000000000000000000000000000c96", {radix: 16}), b: core.BigInt.parse("3e1af419a269a5f866a7d3c25c3df80ae979259373ff2b182f49d4ce7e1bbc8b", {radix: 16}), g: core.BigInt.parse("0400000000000000000000000000000000000000000000000000000000000000013fa8124359f96680b83d1c3eb2c070e5c545c9858d03ecfb744bf8d717717efc", {radix: 16}), n: core.BigInt.parse("800000000000000000000000000000015f700cfff1a624e5e497161bcc8a198f", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b._super(domainName, curve, G, n, _h, seed);
    }
  };
  (gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b._super = function(domainName, curve, G, n, _h, seed) {
    gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b.prototype;
  dart.addTypeTests(gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b);
  dart.setLibraryUri(gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b, "package:pointycastle/ecc/curves/gostr3410_2001_cryptopro_b.dart");
  dart.defineLazy(gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b, {
    /*gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "GostR3410-2001-CryptoPro-B", dart.fn(() => gostr3410_2001_cryptopro_b.ECCurve_gostr3410_2001_cryptopro_b.new(), VoidToECCurve_gostr3410_2001_cryptopro_b()));
    }
  });
  let C30;
  gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a = class ECCurve_gostr3410_2001_cryptopro_a extends ecc_base.ECDomainParametersImpl {
    static new() {
      return gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a._check(ec_standard_curve_constructor.constructFpStandardCurve("GostR3410-2001-CryptoPro-A", C30 || CT.C30, {q: core.BigInt.parse("fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd97", {radix: 16}), a: core.BigInt.parse("fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd94", {radix: 16}), b: core.BigInt.parse("a6", {radix: 16}), g: core.BigInt.parse("0400000000000000000000000000000000000000000000000000000000000000018d91e471e0989cda27df505a453f2b7635294f2ddf23e3b122acc99c9e9f1e14", {radix: 16}), n: core.BigInt.parse("ffffffffffffffffffffffffffffffff6c611070995ad10045841b09b761b893", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a._super(domainName, curve, G, n, _h, seed);
    }
  };
  (gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a._super = function(domainName, curve, G, n, _h, seed) {
    gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a.prototype;
  dart.addTypeTests(gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a);
  dart.setLibraryUri(gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a, "package:pointycastle/ecc/curves/gostr3410_2001_cryptopro_a.dart");
  dart.defineLazy(gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a, {
    /*gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "GostR3410-2001-CryptoPro-A", dart.fn(() => gostr3410_2001_cryptopro_a.ECCurve_gostr3410_2001_cryptopro_a.new(), VoidToECCurve_gostr3410_2001_cryptopro_a()));
    }
  });
  let C31;
  brainpoolp512t1.ECCurve_brainpoolp512t1 = class ECCurve_brainpoolp512t1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp512t1.ECCurve_brainpoolp512t1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp512t1", C31 || CT.C31, {q: core.BigInt.parse("aadd9db8dbe9c48b3fd4e6ae33c9fc07cb308db3b3c9d20ed6639cca703308717d4d9b009bc66842aecda12ae6a380e62881ff2f2d82c68528aa6056583a48f3", {radix: 16}), a: core.BigInt.parse("aadd9db8dbe9c48b3fd4e6ae33c9fc07cb308db3b3c9d20ed6639cca703308717d4d9b009bc66842aecda12ae6a380e62881ff2f2d82c68528aa6056583a48f0", {radix: 16}), b: core.BigInt.parse("7cbbbcf9441cfab76e1890e46884eae321f70c0bcb4981527897504bec3e36a62bcdfa2304976540f6450085f2dae145c22553b465763689180ea2571867423e", {radix: 16}), g: core.BigInt.parse("04640ece5c12788717b9c1ba06cbc2a6feba85842458c56dde9db1758d39c0313d82ba51735cdb3ea499aa77a7d6943a64f7a3f25fe26f06b51baa2696fa9035da5b534bd595f5af0fa2c892376c84ace1bb4e3019b71634c01131159cae03cee9d9932184beef216bd71df2dadf86a627306ecff96dbb8bace198b61e00f8b332", {radix: 16}), n: core.BigInt.parse("aadd9db8dbe9c48b3fd4e6ae33c9fc07cb308db3b3c9d20ed6639cca70330870553e5c414ca92619418661197fac10471db1d381085ddaddb58796829ca90069", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp512t1.ECCurve_brainpoolp512t1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp512t1.ECCurve_brainpoolp512t1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp512t1.ECCurve_brainpoolp512t1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp512t1.ECCurve_brainpoolp512t1.prototype;
  dart.addTypeTests(brainpoolp512t1.ECCurve_brainpoolp512t1);
  dart.setLibraryUri(brainpoolp512t1.ECCurve_brainpoolp512t1, "package:pointycastle/ecc/curves/brainpoolp512t1.dart");
  dart.defineLazy(brainpoolp512t1.ECCurve_brainpoolp512t1, {
    /*brainpoolp512t1.ECCurve_brainpoolp512t1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp512t1", dart.fn(() => brainpoolp512t1.ECCurve_brainpoolp512t1.new(), VoidToECCurve_brainpoolp512t1()));
    }
  });
  let C32;
  brainpoolp512r1.ECCurve_brainpoolp512r1 = class ECCurve_brainpoolp512r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp512r1.ECCurve_brainpoolp512r1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp512r1", C32 || CT.C32, {q: core.BigInt.parse("aadd9db8dbe9c48b3fd4e6ae33c9fc07cb308db3b3c9d20ed6639cca703308717d4d9b009bc66842aecda12ae6a380e62881ff2f2d82c68528aa6056583a48f3", {radix: 16}), a: core.BigInt.parse("7830a3318b603b89e2327145ac234cc594cbdd8d3df91610a83441caea9863bc2ded5d5aa8253aa10a2ef1c98b9ac8b57f1117a72bf2c7b9e7c1ac4d77fc94ca", {radix: 16}), b: core.BigInt.parse("3df91610a83441caea9863bc2ded5d5aa8253aa10a2ef1c98b9ac8b57f1117a72bf2c7b9e7c1ac4d77fc94cadc083e67984050b75ebae5dd2809bd638016f723", {radix: 16}), g: core.BigInt.parse("0481aee4bdd82ed9645a21322e9c4c6a9385ed9f70b5d916c1b43b62eef4d0098eff3b1f78e2d0d48d50d1687b93b97d5f7c6d5047406a5e688b352209bcb9f8227dde385d566332ecc0eabfa9cf7822fdf209f70024a57b1aa000c55b881f8111b2dcde494a5f485e5bca4bd88a2763aed1ca2b2fa8f0540678cd1e0f3ad80892", {radix: 16}), n: core.BigInt.parse("aadd9db8dbe9c48b3fd4e6ae33c9fc07cb308db3b3c9d20ed6639cca70330870553e5c414ca92619418661197fac10471db1d381085ddaddb58796829ca90069", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp512r1.ECCurve_brainpoolp512r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp512r1.ECCurve_brainpoolp512r1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp512r1.ECCurve_brainpoolp512r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp512r1.ECCurve_brainpoolp512r1.prototype;
  dart.addTypeTests(brainpoolp512r1.ECCurve_brainpoolp512r1);
  dart.setLibraryUri(brainpoolp512r1.ECCurve_brainpoolp512r1, "package:pointycastle/ecc/curves/brainpoolp512r1.dart");
  dart.defineLazy(brainpoolp512r1.ECCurve_brainpoolp512r1, {
    /*brainpoolp512r1.ECCurve_brainpoolp512r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp512r1", dart.fn(() => brainpoolp512r1.ECCurve_brainpoolp512r1.new(), VoidToECCurve_brainpoolp512r1()));
    }
  });
  let C33;
  brainpoolp384t1.ECCurve_brainpoolp384t1 = class ECCurve_brainpoolp384t1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp384t1.ECCurve_brainpoolp384t1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp384t1", C33 || CT.C33, {q: core.BigInt.parse("8cb91e82a3386d280f5d6f7e50e641df152f7109ed5456b412b1da197fb71123acd3a729901d1a71874700133107ec53", {radix: 16}), a: core.BigInt.parse("8cb91e82a3386d280f5d6f7e50e641df152f7109ed5456b412b1da197fb71123acd3a729901d1a71874700133107ec50", {radix: 16}), b: core.BigInt.parse("7f519eada7bda81bd826dba647910f8c4b9346ed8ccdc64e4b1abd11756dce1d2074aa263b88805ced70355a33b471ee", {radix: 16}), g: core.BigInt.parse("0418de98b02db9a306f2afcd7235f72a819b80ab12ebd653172476fecd462aabffc4ff191b946a5f54d8d0aa2f418808cc25ab056962d30651a114afd2755ad336747f93475b7a1fca3b88f2b6a208ccfe469408584dc2b2912675bf5b9e582928", {radix: 16}), n: core.BigInt.parse("8cb91e82a3386d280f5d6f7e50e641df152f7109ed5456b31f166e6cac0425a7cf3ab6af6b7fc3103b883202e9046565", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp384t1.ECCurve_brainpoolp384t1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp384t1.ECCurve_brainpoolp384t1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp384t1.ECCurve_brainpoolp384t1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp384t1.ECCurve_brainpoolp384t1.prototype;
  dart.addTypeTests(brainpoolp384t1.ECCurve_brainpoolp384t1);
  dart.setLibraryUri(brainpoolp384t1.ECCurve_brainpoolp384t1, "package:pointycastle/ecc/curves/brainpoolp384t1.dart");
  dart.defineLazy(brainpoolp384t1.ECCurve_brainpoolp384t1, {
    /*brainpoolp384t1.ECCurve_brainpoolp384t1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp384t1", dart.fn(() => brainpoolp384t1.ECCurve_brainpoolp384t1.new(), VoidToECCurve_brainpoolp384t1()));
    }
  });
  let C34;
  brainpoolp384r1.ECCurve_brainpoolp384r1 = class ECCurve_brainpoolp384r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp384r1.ECCurve_brainpoolp384r1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp384r1", C34 || CT.C34, {q: core.BigInt.parse("8cb91e82a3386d280f5d6f7e50e641df152f7109ed5456b412b1da197fb71123acd3a729901d1a71874700133107ec53", {radix: 16}), a: core.BigInt.parse("7bc382c63d8c150c3c72080ace05afa0c2bea28e4fb22787139165efba91f90f8aa5814a503ad4eb04a8c7dd22ce2826", {radix: 16}), b: core.BigInt.parse("4a8c7dd22ce28268b39b55416f0447c2fb77de107dcd2a62e880ea53eeb62d57cb4390295dbc9943ab78696fa504c11", {radix: 16}), g: core.BigInt.parse("041d1c64f068cf45ffa2a63a81b7c13f6b8847a3e77ef14fe3db7fcafe0cbd10e8e826e03436d646aaef87b2e247d4af1e8abe1d7520f9c2a45cb1eb8e95cfd55262b70b29feec5864e19c054ff99129280e4646217791811142820341263c5315", {radix: 16}), n: core.BigInt.parse("8cb91e82a3386d280f5d6f7e50e641df152f7109ed5456b31f166e6cac0425a7cf3ab6af6b7fc3103b883202e9046565", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp384r1.ECCurve_brainpoolp384r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp384r1.ECCurve_brainpoolp384r1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp384r1.ECCurve_brainpoolp384r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp384r1.ECCurve_brainpoolp384r1.prototype;
  dart.addTypeTests(brainpoolp384r1.ECCurve_brainpoolp384r1);
  dart.setLibraryUri(brainpoolp384r1.ECCurve_brainpoolp384r1, "package:pointycastle/ecc/curves/brainpoolp384r1.dart");
  dart.defineLazy(brainpoolp384r1.ECCurve_brainpoolp384r1, {
    /*brainpoolp384r1.ECCurve_brainpoolp384r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp384r1", dart.fn(() => brainpoolp384r1.ECCurve_brainpoolp384r1.new(), VoidToECCurve_brainpoolp384r1()));
    }
  });
  let C35;
  brainpoolp320t1.ECCurve_brainpoolp320t1 = class ECCurve_brainpoolp320t1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp320t1.ECCurve_brainpoolp320t1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp320t1", C35 || CT.C35, {q: core.BigInt.parse("d35e472036bc4fb7e13c785ed201e065f98fcfa6f6f40def4f92b9ec7893ec28fcd412b1f1b32e27", {radix: 16}), a: core.BigInt.parse("d35e472036bc4fb7e13c785ed201e065f98fcfa6f6f40def4f92b9ec7893ec28fcd412b1f1b32e24", {radix: 16}), b: core.BigInt.parse("a7f561e038eb1ed560b3d147db782013064c19f27ed27c6780aaf77fb8a547ceb5b4fef422340353", {radix: 16}), g: core.BigInt.parse("04925be9fb01afc6fb4d3e7d4990010f813408ab106c4f09cb7ee07868cc136fff3357f624a21bed5263ba3a7a27483ebf6671dbef7abb30ebee084e58a0b077ad42a5a0989d1ee71b1b9bc0455fb0d2c3", {radix: 16}), n: core.BigInt.parse("d35e472036bc4fb7e13c785ed201e065f98fcfa5b68f12a32d482ec7ee8658e98691555b44c59311", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp320t1.ECCurve_brainpoolp320t1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp320t1.ECCurve_brainpoolp320t1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp320t1.ECCurve_brainpoolp320t1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp320t1.ECCurve_brainpoolp320t1.prototype;
  dart.addTypeTests(brainpoolp320t1.ECCurve_brainpoolp320t1);
  dart.setLibraryUri(brainpoolp320t1.ECCurve_brainpoolp320t1, "package:pointycastle/ecc/curves/brainpoolp320t1.dart");
  dart.defineLazy(brainpoolp320t1.ECCurve_brainpoolp320t1, {
    /*brainpoolp320t1.ECCurve_brainpoolp320t1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp320t1", dart.fn(() => brainpoolp320t1.ECCurve_brainpoolp320t1.new(), VoidToECCurve_brainpoolp320t1()));
    }
  });
  let C36;
  brainpoolp320r1.ECCurve_brainpoolp320r1 = class ECCurve_brainpoolp320r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp320r1.ECCurve_brainpoolp320r1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp320r1", C36 || CT.C36, {q: core.BigInt.parse("d35e472036bc4fb7e13c785ed201e065f98fcfa6f6f40def4f92b9ec7893ec28fcd412b1f1b32e27", {radix: 16}), a: core.BigInt.parse("3ee30b568fbab0f883ccebd46d3f3bb8a2a73513f5eb79da66190eb085ffa9f492f375a97d860eb4", {radix: 16}), b: core.BigInt.parse("520883949dfdbc42d3ad198640688a6fe13f41349554b49acc31dccd884539816f5eb4ac8fb1f1a6", {radix: 16}), g: core.BigInt.parse("0443bd7e9afb53d8b85289bcc48ee5bfe6f20137d10a087eb6e7871e2a10a599c710af8d0d39e2061114fdd05545ec1cc8ab4093247f77275e0743ffed117182eaa9c77877aaac6ac7d35245d1692e8ee1", {radix: 16}), n: core.BigInt.parse("d35e472036bc4fb7e13c785ed201e065f98fcfa5b68f12a32d482ec7ee8658e98691555b44c59311", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp320r1.ECCurve_brainpoolp320r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp320r1.ECCurve_brainpoolp320r1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp320r1.ECCurve_brainpoolp320r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp320r1.ECCurve_brainpoolp320r1.prototype;
  dart.addTypeTests(brainpoolp320r1.ECCurve_brainpoolp320r1);
  dart.setLibraryUri(brainpoolp320r1.ECCurve_brainpoolp320r1, "package:pointycastle/ecc/curves/brainpoolp320r1.dart");
  dart.defineLazy(brainpoolp320r1.ECCurve_brainpoolp320r1, {
    /*brainpoolp320r1.ECCurve_brainpoolp320r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp320r1", dart.fn(() => brainpoolp320r1.ECCurve_brainpoolp320r1.new(), VoidToECCurve_brainpoolp320r1()));
    }
  });
  let C37;
  brainpoolp256t1.ECCurve_brainpoolp256t1 = class ECCurve_brainpoolp256t1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp256t1.ECCurve_brainpoolp256t1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp256t1", C37 || CT.C37, {q: core.BigInt.parse("a9fb57dba1eea9bc3e660a909d838d726e3bf623d52620282013481d1f6e5377", {radix: 16}), a: core.BigInt.parse("a9fb57dba1eea9bc3e660a909d838d726e3bf623d52620282013481d1f6e5374", {radix: 16}), b: core.BigInt.parse("662c61c430d84ea4fe66a7733d0b76b7bf93ebc4af2f49256ae58101fee92b04", {radix: 16}), g: core.BigInt.parse("04a3e8eb3cc1cfe7b7732213b23a656149afa142c47aafbc2b79a191562e1305f42d996c823439c56d7f7b22e14644417e69bcb6de39d027001dabe8f35b25c9be", {radix: 16}), n: core.BigInt.parse("a9fb57dba1eea9bc3e660a909d838d718c397aa3b561a6f7901e0e82974856a7", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp256t1.ECCurve_brainpoolp256t1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp256t1.ECCurve_brainpoolp256t1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp256t1.ECCurve_brainpoolp256t1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp256t1.ECCurve_brainpoolp256t1.prototype;
  dart.addTypeTests(brainpoolp256t1.ECCurve_brainpoolp256t1);
  dart.setLibraryUri(brainpoolp256t1.ECCurve_brainpoolp256t1, "package:pointycastle/ecc/curves/brainpoolp256t1.dart");
  dart.defineLazy(brainpoolp256t1.ECCurve_brainpoolp256t1, {
    /*brainpoolp256t1.ECCurve_brainpoolp256t1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp256t1", dart.fn(() => brainpoolp256t1.ECCurve_brainpoolp256t1.new(), VoidToECCurve_brainpoolp256t1()));
    }
  });
  let C38;
  brainpoolp256r1.ECCurve_brainpoolp256r1 = class ECCurve_brainpoolp256r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp256r1.ECCurve_brainpoolp256r1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp256r1", C38 || CT.C38, {q: core.BigInt.parse("a9fb57dba1eea9bc3e660a909d838d726e3bf623d52620282013481d1f6e5377", {radix: 16}), a: core.BigInt.parse("7d5a0975fc2c3057eef67530417affe7fb8055c126dc5c6ce94a4b44f330b5d9", {radix: 16}), b: core.BigInt.parse("26dc5c6ce94a4b44f330b5d9bbd77cbf958416295cf7e1ce6bccdc18ff8c07b6", {radix: 16}), g: core.BigInt.parse("048bd2aeb9cb7e57cb2c4b482ffc81b7afb9de27e1e3bd23c23a4453bd9ace3262547ef835c3dac4fd97f8461a14611dc9c27745132ded8e545c1d54c72f046997", {radix: 16}), n: core.BigInt.parse("a9fb57dba1eea9bc3e660a909d838d718c397aa3b561a6f7901e0e82974856a7", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp256r1.ECCurve_brainpoolp256r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp256r1.ECCurve_brainpoolp256r1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp256r1.ECCurve_brainpoolp256r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp256r1.ECCurve_brainpoolp256r1.prototype;
  dart.addTypeTests(brainpoolp256r1.ECCurve_brainpoolp256r1);
  dart.setLibraryUri(brainpoolp256r1.ECCurve_brainpoolp256r1, "package:pointycastle/ecc/curves/brainpoolp256r1.dart");
  dart.defineLazy(brainpoolp256r1.ECCurve_brainpoolp256r1, {
    /*brainpoolp256r1.ECCurve_brainpoolp256r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp256r1", dart.fn(() => brainpoolp256r1.ECCurve_brainpoolp256r1.new(), VoidToECCurve_brainpoolp256r1()));
    }
  });
  let C39;
  brainpoolp224t1.ECCurve_brainpoolp224t1 = class ECCurve_brainpoolp224t1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp224t1.ECCurve_brainpoolp224t1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp224t1", C39 || CT.C39, {q: core.BigInt.parse("d7c134aa264366862a18302575d1d787b09f075797da89f57ec8c0ff", {radix: 16}), a: core.BigInt.parse("d7c134aa264366862a18302575d1d787b09f075797da89f57ec8c0fc", {radix: 16}), b: core.BigInt.parse("4b337d934104cd7bef271bf60ced1ed20da14c08b3bb64f18a60888d", {radix: 16}), g: core.BigInt.parse("046ab1e344ce25ff3896424e7ffe14762ecb49f8928ac0c76029b4d5800374e9f5143e568cd23f3f4d7c0d4b1e41c8cc0d1c6abd5f1a46db4c", {radix: 16}), n: core.BigInt.parse("d7c134aa264366862a18302575d0fb98d116bc4b6ddebca3a5a7939f", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp224t1.ECCurve_brainpoolp224t1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp224t1.ECCurve_brainpoolp224t1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp224t1.ECCurve_brainpoolp224t1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp224t1.ECCurve_brainpoolp224t1.prototype;
  dart.addTypeTests(brainpoolp224t1.ECCurve_brainpoolp224t1);
  dart.setLibraryUri(brainpoolp224t1.ECCurve_brainpoolp224t1, "package:pointycastle/ecc/curves/brainpoolp224t1.dart");
  dart.defineLazy(brainpoolp224t1.ECCurve_brainpoolp224t1, {
    /*brainpoolp224t1.ECCurve_brainpoolp224t1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp224t1", dart.fn(() => brainpoolp224t1.ECCurve_brainpoolp224t1.new(), VoidToECCurve_brainpoolp224t1()));
    }
  });
  let C40;
  brainpoolp224r1.ECCurve_brainpoolp224r1 = class ECCurve_brainpoolp224r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp224r1.ECCurve_brainpoolp224r1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp224r1", C40 || CT.C40, {q: core.BigInt.parse("d7c134aa264366862a18302575d1d787b09f075797da89f57ec8c0ff", {radix: 16}), a: core.BigInt.parse("68a5e62ca9ce6c1c299803a6c1530b514e182ad8b0042a59cad29f43", {radix: 16}), b: core.BigInt.parse("2580f63ccfe44138870713b1a92369e33e2135d266dbb372386c400b", {radix: 16}), g: core.BigInt.parse("040d9029ad2c7e5cf4340823b2a87dc68c9e4ce3174c1e6efdee12c07d58aa56f772c0726f24c6b89e4ecdac24354b9e99caa3f6d3761402cd", {radix: 16}), n: core.BigInt.parse("d7c134aa264366862a18302575d0fb98d116bc4b6ddebca3a5a7939f", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp224r1.ECCurve_brainpoolp224r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp224r1.ECCurve_brainpoolp224r1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp224r1.ECCurve_brainpoolp224r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp224r1.ECCurve_brainpoolp224r1.prototype;
  dart.addTypeTests(brainpoolp224r1.ECCurve_brainpoolp224r1);
  dart.setLibraryUri(brainpoolp224r1.ECCurve_brainpoolp224r1, "package:pointycastle/ecc/curves/brainpoolp224r1.dart");
  dart.defineLazy(brainpoolp224r1.ECCurve_brainpoolp224r1, {
    /*brainpoolp224r1.ECCurve_brainpoolp224r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp224r1", dart.fn(() => brainpoolp224r1.ECCurve_brainpoolp224r1.new(), VoidToECCurve_brainpoolp224r1()));
    }
  });
  let C41;
  brainpoolp192t1.ECCurve_brainpoolp192t1 = class ECCurve_brainpoolp192t1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp192t1.ECCurve_brainpoolp192t1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp192t1", C41 || CT.C41, {q: core.BigInt.parse("c302f41d932a36cda7a3463093d18db78fce476de1a86297", {radix: 16}), a: core.BigInt.parse("c302f41d932a36cda7a3463093d18db78fce476de1a86294", {radix: 16}), b: core.BigInt.parse("13d56ffaec78681e68f9deb43b35bec2fb68542e27897b79", {radix: 16}), g: core.BigInt.parse("043ae9e58c82f63c30282e1fe7bbf43fa72c446af6f4618129097e2c5667c2223a902ab5ca449d0084b7e5b3de7ccc01c9", {radix: 16}), n: core.BigInt.parse("c302f41d932a36cda7a3462f9e9e916b5be8f1029ac4acc1", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp192t1.ECCurve_brainpoolp192t1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp192t1.ECCurve_brainpoolp192t1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp192t1.ECCurve_brainpoolp192t1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp192t1.ECCurve_brainpoolp192t1.prototype;
  dart.addTypeTests(brainpoolp192t1.ECCurve_brainpoolp192t1);
  dart.setLibraryUri(brainpoolp192t1.ECCurve_brainpoolp192t1, "package:pointycastle/ecc/curves/brainpoolp192t1.dart");
  dart.defineLazy(brainpoolp192t1.ECCurve_brainpoolp192t1, {
    /*brainpoolp192t1.ECCurve_brainpoolp192t1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp192t1", dart.fn(() => brainpoolp192t1.ECCurve_brainpoolp192t1.new(), VoidToECCurve_brainpoolp192t1()));
    }
  });
  let C42;
  brainpoolp192r1.ECCurve_brainpoolp192r1 = class ECCurve_brainpoolp192r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp192r1.ECCurve_brainpoolp192r1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp192r1", C42 || CT.C42, {q: core.BigInt.parse("c302f41d932a36cda7a3463093d18db78fce476de1a86297", {radix: 16}), a: core.BigInt.parse("6a91174076b1e0e19c39c031fe8685c1cae040e5c69a28ef", {radix: 16}), b: core.BigInt.parse("469a28ef7c28cca3dc721d044f4496bcca7ef4146fbf25c9", {radix: 16}), g: core.BigInt.parse("04c0a0647eaab6a48753b033c56cb0f0900a2f5c4853375fd614b690866abd5bb88b5f4828c1490002e6773fa2fa299b8f", {radix: 16}), n: core.BigInt.parse("c302f41d932a36cda7a3462f9e9e916b5be8f1029ac4acc1", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp192r1.ECCurve_brainpoolp192r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp192r1.ECCurve_brainpoolp192r1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp192r1.ECCurve_brainpoolp192r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp192r1.ECCurve_brainpoolp192r1.prototype;
  dart.addTypeTests(brainpoolp192r1.ECCurve_brainpoolp192r1);
  dart.setLibraryUri(brainpoolp192r1.ECCurve_brainpoolp192r1, "package:pointycastle/ecc/curves/brainpoolp192r1.dart");
  dart.defineLazy(brainpoolp192r1.ECCurve_brainpoolp192r1, {
    /*brainpoolp192r1.ECCurve_brainpoolp192r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp192r1", dart.fn(() => brainpoolp192r1.ECCurve_brainpoolp192r1.new(), VoidToECCurve_brainpoolp192r1()));
    }
  });
  let C43;
  brainpoolp160t1.ECCurve_brainpoolp160t1 = class ECCurve_brainpoolp160t1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp160t1.ECCurve_brainpoolp160t1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp160t1", C43 || CT.C43, {q: core.BigInt.parse("e95e4a5f737059dc60dfc7ad95b3d8139515620f", {radix: 16}), a: core.BigInt.parse("e95e4a5f737059dc60dfc7ad95b3d8139515620c", {radix: 16}), b: core.BigInt.parse("7a556b6dae535b7b51ed2c4d7daa7a0b5c55f380", {radix: 16}), g: core.BigInt.parse("04b199b13b9b34efc1397e64baeb05acc265ff2378add6718b7c7c1961f0991b842443772152c9e0ad", {radix: 16}), n: core.BigInt.parse("e95e4a5f737059dc60df5991d45029409e60fc09", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp160t1.ECCurve_brainpoolp160t1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp160t1.ECCurve_brainpoolp160t1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp160t1.ECCurve_brainpoolp160t1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp160t1.ECCurve_brainpoolp160t1.prototype;
  dart.addTypeTests(brainpoolp160t1.ECCurve_brainpoolp160t1);
  dart.setLibraryUri(brainpoolp160t1.ECCurve_brainpoolp160t1, "package:pointycastle/ecc/curves/brainpoolp160t1.dart");
  dart.defineLazy(brainpoolp160t1.ECCurve_brainpoolp160t1, {
    /*brainpoolp160t1.ECCurve_brainpoolp160t1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp160t1", dart.fn(() => brainpoolp160t1.ECCurve_brainpoolp160t1.new(), VoidToECCurve_brainpoolp160t1()));
    }
  });
  let C44;
  brainpoolp160r1.ECCurve_brainpoolp160r1 = class ECCurve_brainpoolp160r1 extends ecc_base.ECDomainParametersImpl {
    static new() {
      return brainpoolp160r1.ECCurve_brainpoolp160r1._check(ec_standard_curve_constructor.constructFpStandardCurve("brainpoolp160r1", C44 || CT.C44, {q: core.BigInt.parse("e95e4a5f737059dc60dfc7ad95b3d8139515620f", {radix: 16}), a: core.BigInt.parse("340e7be2a280eb74e2be61bada745d97e8f7c300", {radix: 16}), b: core.BigInt.parse("1e589a8595423412134faa2dbdec95c8d8675e58", {radix: 16}), g: core.BigInt.parse("04bed5af16ea3f6a4f62938c4631eb5af7bdbcdbc31667cb477a1a8ec338f94741669c976316da6321", {radix: 16}), n: core.BigInt.parse("e95e4a5f737059dc60df5991d45029409e60fc09", {radix: 16}), h: core.BigInt.parse("1", {radix: 16}), seed: null}));
    }
    static _make(domainName, curve, G, n, _h, seed) {
      return new brainpoolp160r1.ECCurve_brainpoolp160r1._super(domainName, curve, G, n, _h, seed);
    }
  };
  (brainpoolp160r1.ECCurve_brainpoolp160r1._super = function(domainName, curve, G, n, _h, seed) {
    brainpoolp160r1.ECCurve_brainpoolp160r1.__proto__.new.call(this, core.String._check(domainName), api$0.ECCurve._check(curve), api$0.ECPoint._check(G), core.BigInt._check(n), core.BigInt._check(_h), ListOfint()._check(seed));
    ;
  }).prototype = brainpoolp160r1.ECCurve_brainpoolp160r1.prototype;
  dart.addTypeTests(brainpoolp160r1.ECCurve_brainpoolp160r1);
  dart.setLibraryUri(brainpoolp160r1.ECCurve_brainpoolp160r1, "package:pointycastle/ecc/curves/brainpoolp160r1.dart");
  dart.defineLazy(brainpoolp160r1.ECCurve_brainpoolp160r1, {
    /*brainpoolp160r1.ECCurve_brainpoolp160r1.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api$0.ECDomainParameters), "brainpoolp160r1", dart.fn(() => brainpoolp160r1.ECCurve_brainpoolp160r1.new(), VoidToECCurve_brainpoolp160r1()));
    }
  });
  const _buffer$ = dart.privateName(whirlpool, "_buffer");
  const _bufferPos = dart.privateName(whirlpool, "_bufferPos");
  const _bitCount = dart.privateName(whirlpool, "_bitCount");
  const _hash = dart.privateName(whirlpool, "_hash");
  const _K$ = dart.privateName(whirlpool, "_K");
  const _L = dart.privateName(whirlpool, "_L");
  const _block = dart.privateName(whirlpool, "_block");
  const _state$0 = dart.privateName(whirlpool, "_state");
  const _processFilledBuffer = dart.privateName(whirlpool, "_processFilledBuffer");
  const _increment = dart.privateName(whirlpool, "_increment");
  const _finish = dart.privateName(whirlpool, "_finish");
  const _processBlock$ = dart.privateName(whirlpool, "_processBlock");
  const _copyBitLength = dart.privateName(whirlpool, "_copyBitLength");
  const algorithmName$2 = dart.privateName(whirlpool, "WhirlpoolDigest.algorithmName");
  const digestSize$ = dart.privateName(whirlpool, "WhirlpoolDigest.digestSize");
  whirlpool.WhirlpoolDigest = class WhirlpoolDigest extends base_digest.BaseDigest {
    get algorithmName() {
      return this[algorithmName$2];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    reset() {
      this[_bufferPos] = 0;
      this[_buffer$][$fillRange](0, this[_buffer$][$length], 0);
      this[_bitCount].fillRange(0, this[_bitCount].length, 0);
      this[_hash].fillRange(0, this[_hash].length, 0);
      this[_K$].fillRange(0, this[_K$].length, 0);
      this[_L].fillRange(0, this[_L].length, 0);
      this[_block].fillRange(0, this[_block].length, 0);
      this[_state$0].fillRange(0, this[_state$0].length, 0);
    }
    updateByte(inp) {
      let t3;
      this[_buffer$][$_set]((t3 = this[_bufferPos], this[_bufferPos] = dart.notNull(t3) + 1, t3), inp);
      if (this[_bufferPos] == this[_buffer$][$length]) {
        this[_processFilledBuffer](this[_buffer$], 0);
      }
      this[_increment]();
    }
    update(inp, inpOff, len) {
      let t3;
      for (let i = 0; i < dart.notNull(len); i = i + 1) {
        this[_buffer$][$_set]((t3 = this[_bufferPos], this[_bufferPos] = dart.notNull(t3) + 1, t3), inp[$_get](dart.notNull(inpOff) + i));
        if (this[_bufferPos] == this[_buffer$][$length]) {
          this[_processFilledBuffer](this[_buffer$], 0);
        }
      }
      this[_increment](dart.notNull(len) * 8);
    }
    doFinal(out, outOff) {
      this[_finish]();
      for (let i = 0; i < 8; i = i + 1) {
        this[_hash]._get(i).pack(out, dart.notNull(outOff) + i * 8, typed_data.Endian.big);
      }
      this.reset();
      return this.digestSize;
    }
    [_processFilledBuffer](inp, inpOff) {
      for (let i = 0; i < dart.notNull(this[_state$0].length); i = i + 1) {
        this[_block]._get(i).unpack(this[_buffer$], i * 8, typed_data.Endian.big);
      }
      this[_processBlock$]();
      this[_bufferPos] = 0;
      this[_buffer$][$fillRange](0, this[_buffer$][$length], 0);
    }
    [_processBlock$]() {
      let t3, t3$;
      for (let i = 0; i < 8; i = i + 1) {
        this[_K$]._get(i).set(this[_hash]._get(i));
        t3 = this[_state$0]._get(i);
        t3.set(this[_block]._get(i));
        t3.xor(this[_K$]._get(i));
        t3;
      }
      for (let round = 1; round <= 10; round = round + 1) {
        for (let i = 0; i < 8; i = i + 1) {
          this[_L]._get(i).set(0);
          this[_L]._get(i).xor(whirlpool._C0._get(ufixnum.clip8(this[_K$]._get(i - 0 & 7).hi32[$rightShift](24))));
          this[_L]._get(i).xor(whirlpool._C1._get(ufixnum.clip8(this[_K$]._get(i - 1 & 7).hi32[$rightShift](16))));
          this[_L]._get(i).xor(whirlpool._C2._get(ufixnum.clip8(this[_K$]._get(i - 2 & 7).hi32[$rightShift](8))));
          this[_L]._get(i).xor(whirlpool._C3._get(ufixnum.clip8(this[_K$]._get(i - 3 & 7).hi32)));
          this[_L]._get(i).xor(whirlpool._C4._get(ufixnum.clip8(this[_K$]._get(i - 4 & 7).lo32[$rightShift](24))));
          this[_L]._get(i).xor(whirlpool._C5._get(ufixnum.clip8(this[_K$]._get(i - 5 & 7).lo32[$rightShift](16))));
          this[_L]._get(i).xor(whirlpool._C6._get(ufixnum.clip8(this[_K$]._get(i - 6 & 7).lo32[$rightShift](8))));
          this[_L]._get(i).xor(whirlpool._C7._get(ufixnum.clip8(this[_K$]._get(i - 7 & 7).lo32)));
        }
        this[_K$].setRange(0, this[_K$].length, this[_L]);
        this[_K$]._get(0).xor(whirlpool._rc._get(round));
        for (let i = 0; i < 8; i = i + 1) {
          this[_L]._get(i).set(this[_K$]._get(i));
          this[_L]._get(i).xor(whirlpool._C0._get(ufixnum.clip8(this[_state$0]._get(i - 0 & 7).hi32[$rightShift](24))));
          this[_L]._get(i).xor(whirlpool._C1._get(ufixnum.clip8(this[_state$0]._get(i - 1 & 7).hi32[$rightShift](16))));
          this[_L]._get(i).xor(whirlpool._C2._get(ufixnum.clip8(this[_state$0]._get(i - 2 & 7).hi32[$rightShift](8))));
          this[_L]._get(i).xor(whirlpool._C3._get(ufixnum.clip8(this[_state$0]._get(i - 3 & 7).hi32)));
          this[_L]._get(i).xor(whirlpool._C4._get(ufixnum.clip8(this[_state$0]._get(i - 4 & 7).lo32[$rightShift](24))));
          this[_L]._get(i).xor(whirlpool._C5._get(ufixnum.clip8(this[_state$0]._get(i - 5 & 7).lo32[$rightShift](16))));
          this[_L]._get(i).xor(whirlpool._C6._get(ufixnum.clip8(this[_state$0]._get(i - 6 & 7).lo32[$rightShift](8))));
          this[_L]._get(i).xor(whirlpool._C7._get(ufixnum.clip8(this[_state$0]._get(i - 7 & 7).lo32)));
        }
        this[_state$0].setRange(0, this[_state$0].length, this[_L]);
      }
      let r = new ufixnum.Register64.new();
      for (let i = 0; i < 8; i = i + 1) {
        this[_hash]._get(i).xor((t3$ = r, t3$.set(this[_state$0]._get(i)), t3$.xor(this[_block]._get(i)), t3$));
      }
    }
    [_increment](bits = 8) {
      if (!(dart.notNull(bits) <= 4294967295)) dart.assertFailed(null, "org-dartlang-app:///packages/pointycastle/digests/whirlpool.dart", 156, 12, "bits <= 0xFFFFFFFF");
      let i = dart.notNull(this[_bitCount].length) - 1;
      this[_bitCount]._get(i).sum(bits);
      while (dart.equals(this[_bitCount]._get(i), whirlpool.WhirlpoolDigest._R64_ZERO)) {
        i = i - 1;
        this[_bitCount]._get(i).sum(1);
      }
    }
    [_finish]() {
      let t3, t4, t3$;
      let bitLength = this[_copyBitLength]();
      t3$ = this[_buffer$];
      t4 = (t3 = this[_bufferPos], this[_bufferPos] = dart.notNull(t3) + 1, t3);
      t3$[$_set](t4, (dart.notNull(t3$[$_get](t4)) | 128) >>> 0);
      if (this[_bufferPos] == this[_buffer$][$length]) {
        this[_processFilledBuffer](this[_buffer$], 0);
      }
      if (dart.notNull(this[_bufferPos]) > 32) {
        let padCount = dart.notNull(this[_buffer$][$length]) - dart.notNull(this[_bufferPos]);
        this.update(whirlpool.WhirlpoolDigest._ZEROS_LIST, 0, padCount);
      } else {
        let padCount = 32 - dart.notNull(this[_bufferPos]);
        this.update(whirlpool.WhirlpoolDigest._ZEROS_LIST, 0, padCount);
      }
      this[_buffer$][$setRange](32, 32 + dart.notNull(bitLength[$length]), bitLength);
      this[_processFilledBuffer](this[_buffer$], 0);
    }
    [_copyBitLength]() {
      let rv = _native_typed_data.NativeUint8List.new(dart.notNull(this[_bitCount].length) * 8);
      for (let i = 0; i < dart.notNull(this[_bitCount].length); i = i + 1) {
        this[_bitCount]._get(i).pack(rv, i * 8, typed_data.Endian.big);
      }
      return rv;
    }
  };
  (whirlpool.WhirlpoolDigest.new = function() {
    this[_buffer$] = _native_typed_data.NativeUint8List.new(64);
    this[_bufferPos] = 0;
    this[_bitCount] = new ufixnum.Register64List.new(4);
    this[_hash] = new ufixnum.Register64List.new(8);
    this[_K$] = new ufixnum.Register64List.new(8);
    this[_L] = new ufixnum.Register64List.new(8);
    this[_block] = new ufixnum.Register64List.new(8);
    this[_state$0] = new ufixnum.Register64List.new(8);
    this[algorithmName$2] = "Whirlpool";
    this[digestSize$] = 64;
    this.reset();
  }).prototype = whirlpool.WhirlpoolDigest.prototype;
  dart.addTypeTests(whirlpool.WhirlpoolDigest);
  whirlpool.WhirlpoolDigest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(whirlpool.WhirlpoolDigest, () => ({
    __proto__: dart.getMethods(whirlpool.WhirlpoolDigest.__proto__),
    reset: dart.fnType(dart.void, []),
    updateByte: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    [_processFilledBuffer]: dart.fnType(dart.void, [typed_data.Uint8List, core.int]),
    [_processBlock$]: dart.fnType(dart.void, []),
    [_increment]: dart.fnType(dart.void, [], [core.int]),
    [_finish]: dart.fnType(dart.void, []),
    [_copyBitLength]: dart.fnType(typed_data.Uint8List, [])
  }));
  dart.setLibraryUri(whirlpool.WhirlpoolDigest, "package:pointycastle/digests/whirlpool.dart");
  dart.setFieldSignature(whirlpool.WhirlpoolDigest, () => ({
    __proto__: dart.getFields(whirlpool.WhirlpoolDigest.__proto__),
    [_buffer$]: dart.finalFieldType(typed_data.Uint8List),
    [_bufferPos]: dart.fieldType(core.int),
    [_bitCount]: dart.finalFieldType(ufixnum.Register64List),
    [_hash]: dart.finalFieldType(ufixnum.Register64List),
    [_K$]: dart.finalFieldType(ufixnum.Register64List),
    [_L]: dart.finalFieldType(ufixnum.Register64List),
    [_block]: dart.finalFieldType(ufixnum.Register64List),
    [_state$0]: dart.finalFieldType(ufixnum.Register64List),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(whirlpool.WhirlpoolDigest, {
    /*whirlpool.WhirlpoolDigest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "Whirlpool", dart.fn(() => new whirlpool.WhirlpoolDigest.new(), VoidToWhirlpoolDigest()));
    },
    /*whirlpool.WhirlpoolDigest._DIGEST_LENGTH_BYTES*/get _DIGEST_LENGTH_BYTES() {
      return 64;
    },
    /*whirlpool.WhirlpoolDigest._BUFFER_SIZE*/get _BUFFER_SIZE() {
      return 64;
    },
    /*whirlpool.WhirlpoolDigest._ROUNDS*/get _ROUNDS() {
      return 10;
    },
    /*whirlpool.WhirlpoolDigest._R64_ZERO*/get _R64_ZERO() {
      return new ufixnum.Register64.new(0);
    },
    /*whirlpool.WhirlpoolDigest._ZEROS_LIST*/get _ZEROS_LIST() {
      return _native_typed_data.NativeUint8List.new(64);
    }
  });
  dart.defineLazy(whirlpool, {
    /*whirlpool._C0*/get _C0() {
      return new ufixnum.Register64List.from(JSArrayOfListOfint().of([JSArrayOfint().of([404250648, 3229102296]), JSArrayOfint().of([589532195, 95372838]), JSArrayOfint().of([3334881222, 2130284984]), JSArrayOfint().of([3907553256, 326094331]), JSArrayOfint().of([2273781383, 1285624779]), JSArrayOfint().of([3099122360, 2841799953]), JSArrayOfint().of([16843777, 134545929]), JSArrayOfint().of([1330585935, 1114545677]), JSArrayOfint().of([909563958, 2918083739]), JSArrayOfint().of([2795938470, 1493455359]), JSArrayOfint().of([3537006546, 3736975628]), JSArrayOfint().of([4126536693, 4211537678]), JSArrayOfint().of([2038036857, 4018205334]), JSArrayOfint().of([1869586799, 1607392816]), JSArrayOfint().of([2442231441, 4243537773]), JSArrayOfint().of([1381127506, 2852627704]), JSArrayOfint().of([1616944480, 670941255]), JSArrayOfint().of([3166489276, 2306237749]), JSArrayOfint().of([2610648731, 2899127095]), JSArrayOfint().of([2391671438, 76284298]), JSArrayOfint().of([2745415331, 1897225170]), JSArrayOfint().of([202125324, 1614551148]), JSArrayOfint().of([2071720315, 4287297156]), JSArrayOfint().of([892720181, 3051448960]), JSArrayOfint().of([488469533, 3899210485]), JSArrayOfint().of([3772819424, 1397218739]), JSArrayOfint().of([3621223383, 4138513185]), JSArrayOfint().of([3267506114, 1592629660]), JSArrayOfint().of([774813742, 1838570563]), JSArrayOfint().of([1263219019, 1652201001]), JSArrayOfint().of([4278116350, 2736906589]), JSArrayOfint().of([1465336151, 2182524629]), JSArrayOfint().of([353719317, 2822843069]), JSArrayOfint().of([2004337015, 2679566056]), JSArrayOfint().of([926407735, 2783669906]), JSArrayOfint().of([3857036261, 2069288862]), JSArrayOfint().of([2678015647, 2363040531]), JSArrayOfint().of([4042319856, 3541564707]), JSArrayOfint().of([1246377290, 1786745888]), JSArrayOfint().of([3671740378, 2660608324]), JSArrayOfint().of([1482194264, 4196774050]), JSArrayOfint().of([3385394121, 113938383]), JSArrayOfint().of([690594857, 1435325052]), JSArrayOfint().of([168437770, 1344410714]), JSArrayOfint().of([2981232305, 3780083536]), JSArrayOfint().of([2694888096, 1763335625]), JSArrayOfint().of([1802219883, 2145048084]), JSArrayOfint().of([2240097925, 1554716633]), JSArrayOfint().of([3183333053, 2171823932]), JSArrayOfint().of([1566402909, 3526670991]), JSArrayOfint().of([269500432, 2152734864]), JSArrayOfint().of([4109694964, 4077122823]), JSArrayOfint().of([3419081675, 381717469]), JSArrayOfint().of([1044314174, 3989208275]), JSArrayOfint().of([84218885, 672205357]), JSArrayOfint().of([1734836583, 535219832]), JSArrayOfint().of([3840194532, 1934874007]), JSArrayOfint().of([656907303, 633032194]), JSArrayOfint().of([1094785345, 844661363]), JSArrayOfint().of([2341148299, 748489639]), JSArrayOfint().of([2812782247, 1359041526]), JSArrayOfint().of([2105403773, 3482647218]), JSArrayOfint().of([2509598357, 3707451209]), JSArrayOfint().of([3638052824, 2392829270]), JSArrayOfint().of([4227582971, 2335239024]), JSArrayOfint().of([4008615918, 594657741]), JSArrayOfint().of([2088562044, 3348232379]), JSArrayOfint().of([1717994854, 400804977]), JSArrayOfint().of([3722269661, 2794366843]), JSArrayOfint().of([387406871, 3091934895]), JSArrayOfint().of([1195835719, 38178373]), JSArrayOfint().of([2661171870, 2229018906]), JSArrayOfint().of([3402239946, 516262356]), JSArrayOfint().of([757969965, 1972984408]), JSArrayOfint().of([3217016511, 2440651566]), JSArrayOfint().of([117906439, 941297215]), JSArrayOfint().of([2913832621, 19089324]), JSArrayOfint().of([1515877722, 3928994992]), JSArrayOfint().of([2206414467, 1823808495]), JSArrayOfint().of([859032627, 2248107702]), JSArrayOfint().of([1667469667, 1072875100]), JSArrayOfint().of([33687554, 269091858]), JSArrayOfint().of([2863305386, 959990163]), JSArrayOfint().of([1903286641, 2947080926]), JSArrayOfint().of([3368552392, 248483270]), JSArrayOfint().of([421094425, 3363648209]), JSArrayOfint().of([1229535561, 1919980091]), JSArrayOfint().of([3654894553, 2258284383]), JSArrayOfint().of([4076007410, 3273521457]), JSArrayOfint().of([3823348707, 1263066024]), JSArrayOfint().of([1532719451, 3794450105]), JSArrayOfint().of([2290621064, 881987004]), JSArrayOfint().of([2593804954, 2764581182]), JSArrayOfint().of([640063526, 767446027]), JSArrayOfint().of([842188850, 2381997247]), JSArrayOfint().of([2964388528, 3913973081]), JSArrayOfint().of([3924394985, 459984882]), JSArrayOfint().of([252656655, 2016616055]), JSArrayOfint().of([3587535829, 3869685555]), JSArrayOfint().of([2155887232, 1958354420]), JSArrayOfint().of([3200172734, 2575065383]), JSArrayOfint().of([3452769229, 652117995]), JSArrayOfint().of([875876404, 3185862793]), JSArrayOfint().of([1212693832, 2054524978]), JSArrayOfint().of([4294958079, 2871321428]), JSArrayOfint().of([2054878586, 4153406605]), JSArrayOfint().of([2425387664, 4108991844]), JSArrayOfint().of([1600086367, 3258891933]), JSArrayOfint().of([539000864, 497041469]), JSArrayOfint().of([1751694696, 1742065679]), JSArrayOfint().of([437938202, 3497145546]), JSArrayOfint().of([2930672302, 422330807]), JSArrayOfint().of([3031755444, 3378410877]), JSArrayOfint().of([1414810964, 2585372878]), JSArrayOfint().of([2475914899, 3974445951]), JSArrayOfint().of([572688418, 229262383]), JSArrayOfint().of([1684311396, 132761699]), JSArrayOfint().of([4059161585, 3675455274]), JSArrayOfint().of([1936970099, 3215124172]), JSArrayOfint().of([303187986, 2421826690]), JSArrayOfint().of([1077943616, 979206266]), JSArrayOfint().of([134750216, 1076367432]), JSArrayOfint().of([3284347843, 1458084757]), JSArrayOfint().of([3974928364, 863749599]), JSArrayOfint().of([3688582107, 2526063437]), JSArrayOfint().of([2711731873, 1629446080]), JSArrayOfint().of([2374831757, 478349201]), JSArrayOfint().of([1027470397, 4123622088]), JSArrayOfint().of([2543281815, 3438359387]), JSArrayOfint().of([0, 0]), JSArrayOfint().of([3486456783, 919897081]), JSArrayOfint().of([724282411, 1166497390]), JSArrayOfint().of([1987495286, 2545151201]), JSArrayOfint().of([2189570690, 1689262566]), JSArrayOfint().of([3604381654, 4272533800]), JSArrayOfint().of([454781979, 3631691459]), JSArrayOfint().of([3048599221, 3243997044]), JSArrayOfint().of([2947516079, 287916990]), JSArrayOfint().of([1785378154, 2011157533]), JSArrayOfint().of([1347444048, 3121455338]), JSArrayOfint().of([1162152261, 307006039]), JSArrayOfint().of([4092849139, 3407412024]), JSArrayOfint().of([808501296, 2649776301]), JSArrayOfint().of([4025457647, 729072580]), JSArrayOfint().of([1061157951, 3854794458]), JSArrayOfint().of([1431652693, 2451352263]), JSArrayOfint().of([2728571554, 2031114715]), JSArrayOfint().of([3941240810, 57002473]), JSArrayOfint().of([1701153125, 267176554]), JSArrayOfint().of([3132805818, 3110627587]), JSArrayOfint().of([791657519, 1704156746]), JSArrayOfint().of([3233818560, 1323801998]), JSArrayOfint().of([3739115486, 3196166496]), JSArrayOfint().of([471625756, 3765188860]), JSArrayOfint().of([4261270525, 3140413254]), JSArrayOfint().of([1296902477, 1382324767]), JSArrayOfint().of([2459071122, 3839900022]), JSArrayOfint().of([1970653557, 2411522810]), JSArrayOfint().of([101062662, 807275574]), JSArrayOfint().of([2324304522, 613943726]), JSArrayOfint().of([2998071986, 4181752139]), JSArrayOfint().of([3873882086, 1666830725]), JSArrayOfint().of([235812878, 1882594430]), JSArrayOfint().of([522157087, 4167253735]), JSArrayOfint().of([1650627938, 938984533]), JSArrayOfint().of([3570694100, 4003706170]), JSArrayOfint().of([2829621928, 691162497]), JSArrayOfint().of([2526438038, 3304337746]), JSArrayOfint().of([4193895417, 2604330850]), JSArrayOfint().of([3318035397, 1727436707]), JSArrayOfint().of([623219749, 900811280]), JSArrayOfint().of([1499035993, 4062229163]), JSArrayOfint().of([2223254148, 1420694992]), JSArrayOfint().of([1920128370, 3081233605]), JSArrayOfint().of([960095289, 3588059884]), JSArrayOfint().of([1280060748, 1516345366]), JSArrayOfint().of([1583244638, 3392912532]), JSArrayOfint().of([2021195128, 3884314783]), JSArrayOfint().of([943251512, 3721949413]), JSArrayOfint().of([2357987980, 344327576]), JSArrayOfint().of([3520160721, 3333603095]), JSArrayOfint().of([2779098789, 1091262436]), JSArrayOfint().of([3806506978, 1129175457]), JSArrayOfint().of([1633786209, 804831822]), JSArrayOfint().of([3014915763, 4047862594]), JSArrayOfint().of([555844641, 363151924]), JSArrayOfint().of([2627488412, 2497062152]), JSArrayOfint().of([505313310, 4033232110]), JSArrayOfint().of([1128468803, 575833697]), JSArrayOfint().of([3351722951, 1996264369]), JSArrayOfint().of([4244428796, 3005998415]), JSArrayOfint().of([67375108, 538183716]), JSArrayOfint().of([1364285777, 2986910435]), JSArrayOfint().of([2576965273, 3167170341]), JSArrayOfint().of([1835903341, 1338300962]), JSArrayOfint().of([218969101, 1748572773]), JSArrayOfint().of([4210741242, 2201348473]), JSArrayOfint().of([3755957215, 3062145897]), JSArrayOfint().of([2122245502, 3617324201]), JSArrayOfint().of([606375972, 1035225113]), JSArrayOfint().of([993782843, 3319232254]), JSArrayOfint().of([2880149163, 826100634]), JSArrayOfint().of([3469615054, 1053917680]), JSArrayOfint().of([286344209, 2287280793]), JSArrayOfint().of([2408515215, 210305923]), JSArrayOfint().of([1313744206, 1248566276]), JSArrayOfint().of([3082282679, 3511776102]), JSArrayOfint().of([3958082539, 190893024]), JSArrayOfint().of([1010626620, 4258035905]), JSArrayOfint().of([2172731009, 2092900349]), JSArrayOfint().of([2492754580, 3573429568]), JSArrayOfint().of([4160224247, 3943494428]), JSArrayOfint().of([3115966137, 2707910424]), JSArrayOfint().of([320031763, 2556372619]), JSArrayOfint().of([741126188, 2107398225]), JSArrayOfint().of([3553848275, 3602430725]), JSArrayOfint().of([3890723815, 1801245580]), JSArrayOfint().of([1852745070, 1472977977]), JSArrayOfint().of([3301193668, 1861457322]), JSArrayOfint().of([50531331, 403637787]), JSArrayOfint().of([1448494422, 2316545244]), JSArrayOfint().of([1145310532, 441026654]), JSArrayOfint().of([2139087231, 3751739040]), JSArrayOfint().of([2846465705, 557272968]), JSArrayOfint().of([707438634, 1300386919]), JSArrayOfint().of([3149649595, 2976738058]), JSArrayOfint().of([3250660289, 1189257095]), JSArrayOfint().of([1397969235, 2718082801]), JSArrayOfint().of([3705427932, 2928387442]), JSArrayOfint().of([185281547, 1478956627]), JSArrayOfint().of([2644332189, 2631083777]), JSArrayOfint().of([1819061612, 1203886123]), JSArrayOfint().of([825345073, 2515886756]), JSArrayOfint().of([1953811828, 2277107955]), JSArrayOfint().of([4143382518, 3809079573]), JSArrayOfint().of([1178993990, 172198988]), JSArrayOfint().of([2896988844, 153503141]), JSArrayOfint().of([2307464841, 1016532917]), JSArrayOfint().of([336875540, 2688821428]), JSArrayOfint().of([3789661153, 1531109306]), JSArrayOfint().of([370563094, 2957913254]), JSArrayOfint().of([976939066, 3453121783]), JSArrayOfint().of([1768536425, 1875956230]), JSArrayOfint().of([151593993, 1210913345]), JSArrayOfint().of([1886444912, 2813190359]), JSArrayOfint().of([3065438902, 3646189935]), JSArrayOfint().of([3503318992, 3468147998]), JSArrayOfint().of([3991770093, 998164438]), JSArrayOfint().of([3435927500, 786138594]), JSArrayOfint().of([1111627074, 710378600]), JSArrayOfint().of([2560121496, 3032624428]), JSArrayOfint().of([2762255012, 1225676269]), JSArrayOfint().of([673751080, 1569214581]), JSArrayOfint().of([1549561180, 3660691590]), JSArrayOfint().of([4177053688, 2470440299]), JSArrayOfint().of([2256937606, 1151603138])]));
    },
    /*whirlpool._C1*/get _C1() {
      return new ufixnum.Register64List.from(JSArrayOfListOfint().of([JSArrayOfint().of([3625457760, 415266864]), JSArrayOfint().of([639837068, 587575110]), JSArrayOfint().of([3100034623, 3330210193]), JSArrayOfint().of([4226345095, 3893587917]), JSArrayOfint().of([3414656806, 2269946131]), JSArrayOfint().of([297318618, 3098108525]), JSArrayOfint().of([151060740, 17302786]), JSArrayOfint().of([223301409, 1329753758]), JSArrayOfint().of([2604021464, 917368428]), JSArrayOfint().of([4289111714, 2790851665]), JSArrayOfint().of([215143023, 3537812921]), JSArrayOfint().of([251000307, 4126869239]), JSArrayOfint().of([2524543481, 2045739250]), JSArrayOfint().of([812609441, 1868549854]), JSArrayOfint().of([1838256510, 2449272639]), JSArrayOfint().of([4166144597, 1386874788]), JSArrayOfint().of([1197498525, 1613233600]), JSArrayOfint().of([901561546, 3163125349]), JSArrayOfint().of([932944726, 2611793195]), JSArrayOfint().of([2324598274, 2382662657]), JSArrayOfint().of([3533939638, 2742097243]), JSArrayOfint().of([1812728880, 207633432]), JSArrayOfint().of([2222685169, 2080344822]), JSArrayOfint().of([2150970836, 901112170]), JSArrayOfint().of([4112326004, 501770554]), JSArrayOfint().of([3017859239, 3763554269]), JSArrayOfint().of([567793531, 3623267507]), JSArrayOfint().of([2630009391, 3261001113]), JSArrayOfint().of([1127100088, 778933852]), JSArrayOfint().of([692800305, 1264745110]), JSArrayOfint().of([1576992479, 4272103905]), JSArrayOfint().of([3579270977, 1468143278]), JSArrayOfint().of([3172275540, 363348266]), JSArrayOfint().of([3900143553, 2006955758]), JSArrayOfint().of([2453092316, 933620590]), JSArrayOfint().of([2665866675, 3850065623]), JSArrayOfint().of([329228102, 2676807971]), JSArrayOfint().of([602992871, 4040366077]), JSArrayOfint().of([541739573, 1248493460]), JSArrayOfint().of([1155193423, 3667826089]), JSArrayOfint().of([2723698813, 1492788656]), JSArrayOfint().of([3486107907, 3372665487]), JSArrayOfint().of([2083072420, 693472594]), JSArrayOfint().of([1510607400, 173023764]), JSArrayOfint().of([1353822718, 2984333183]), JSArrayOfint().of([3382747322, 2691242589]), JSArrayOfint().of([342584241, 1803541206]), JSArrayOfint().of([3649406254, 2237442839]), JSArrayOfint().of([1019067854, 3179377511]), JSArrayOfint().of([2405260649, 1574057146]), JSArrayOfint().of([2416971840, 276844576]), JSArrayOfint().of([133494007, 4109566965]), JSArrayOfint().of([3721120523, 3407265931]), JSArrayOfint().of([3544071928, 1055770236]), JSArrayOfint().of([755303700, 86511882]), JSArrayOfint().of([2020042625, 1730143950]), JSArrayOfint().of([2548360375, 3832763349]), JSArrayOfint().of([36120476, 656784206]), JSArrayOfint().of([1933656345, 1093818498]), JSArrayOfint().of([2810940182, 2334956811]), JSArrayOfint().of([4138182566, 2807103827]), JSArrayOfint().of([2994568681, 2110756090]), JSArrayOfint().of([1234539886, 2514287415]), JSArrayOfint().of([1457051719, 3633225645]), JSArrayOfint().of([1895562187, 4220203243]), JSArrayOfint().of([3454987935, 3995300289]), JSArrayOfint().of([3145497837, 2093453816]), JSArrayOfint().of([1902536325, 1712841676]), JSArrayOfint().of([2078137683, 3718680231]), JSArrayOfint().of([2937526108, 397953838]), JSArrayOfint().of([1162299137, 1191331470]), JSArrayOfint().of([446602818, 2659507233]), JSArrayOfint().of([3570059791, 3391014281]), JSArrayOfint().of([1479355828, 762681690]), JSArrayOfint().of([784318406, 3213982051]), JSArrayOfint().of([1057425180, 121117454]), JSArrayOfint().of([2897063310, 2902532935]), JSArrayOfint().of([2958711413, 1525297076]), JSArrayOfint().of([4018373430, 2204939547]), JSArrayOfint().of([3056808908, 864419686]), JSArrayOfint().of([1550017425, 1665135302]), JSArrayOfint().of([302121480, 34605572]), JSArrayOfint().of([2477435538, 2855876681]), JSArrayOfint().of([3731976665, 1907337442]), JSArrayOfint().of([3335047175, 3356413837]), JSArrayOfint().of([3508083044, 432569650]), JSArrayOfint().of([994658617, 1232236690]), JSArrayOfint().of([1608112451, 3649477295]), JSArrayOfint().of([838005487, 4072873465]), JSArrayOfint().of([2833507243, 3813361883]), JSArrayOfint().of([3109772145, 1541548726]), JSArrayOfint().of([3163064346, 2285146637]), JSArrayOfint().of([1050319442, 2594490409]), JSArrayOfint().of([187049624, 640532044]), JSArrayOfint().of([3207738056, 848165476]), JSArrayOfint().of([1504751866, 2968078973]), JSArrayOfint().of([4075415939, 3910888143]), JSArrayOfint().of([1997475644, 259535646]), JSArrayOfint().of([869651827, 3588662967]), JSArrayOfint().of([4102062138, 2155133469]), JSArrayOfint().of([666812098, 3197729889]), JSArrayOfint().of([3956133139, 3441876615]), JSArrayOfint().of([2301899984, 884860008]), JSArrayOfint().of([843597885, 1215985040]), JSArrayOfint().of([1426063323, 4289406179]), JSArrayOfint().of([2373614325, 2063044596]), JSArrayOfint().of([1687195770, 2431969853]), JSArrayOfint().of([2640273249, 1606565566]), JSArrayOfint().of([1025515648, 538812480]), JSArrayOfint().of([258500797, 1751635408]), JSArrayOfint().of([3390708328, 449868340]), JSArrayOfint().of([3081678466, 2920885313]), JSArrayOfint().of([2108994794, 3033095797]), JSArrayOfint().of([3461633101, 1419385256]), JSArrayOfint().of([2140377974, 2481775931]), JSArrayOfint().of([790766216, 571320900]), JSArrayOfint().of([1667523725, 1678240200]), JSArrayOfint().of([720499171, 4057666303]), JSArrayOfint().of([3430118353, 1941938918]), JSArrayOfint().of([2182222408, 311450148]), JSArrayOfint().of([2051031069, 1077566848]), JSArrayOfint().of([1208485920, 138422288]), JSArrayOfint().of([2512634667, 3277252763]), JSArrayOfint().of([3756846231, 3962796997]), JSArrayOfint().of([1306254155, 3684077739]), JSArrayOfint().of([3231818174, 2707496799]), JSArrayOfint().of([2441973006, 2367456007]), JSArrayOfint().of([3359456756, 1039518074]), JSArrayOfint().of([1536661350, 2546790707]), JSArrayOfint().of([0, 0]), JSArrayOfint().of([4191145755, 3476477059]), JSArrayOfint().of([1848322988, 725976918]), JSArrayOfint().of([3782637253, 1989653484]), JSArrayOfint().of([3867312690, 2187636761]), JSArrayOfint().of([685168255, 3607013809]), JSArrayOfint().of([3273333612, 467171126]), JSArrayOfint().of([1958065646, 3049347959]), JSArrayOfint().of([3199184774, 2937137475]), JSArrayOfint().of([493513397, 1786240980]), JSArrayOfint().of([3931131997, 1354370464]), JSArrayOfint().of([1464157449, 1158827146]), JSArrayOfint().of([955511787, 4090173691]), JSArrayOfint().of([2905616576, 815657056]), JSArrayOfint().of([3304058779, 4012602563]), JSArrayOfint().of([3661578236, 1072022398]), JSArrayOfint().of([3344258377, 1435638954]), JSArrayOfint().of([3684868786, 2725843033]), JSArrayOfint().of([3924486799, 3926091209]), JSArrayOfint().of([1785030025, 1695542474]), JSArrayOfint().of([62569170, 3132713065]), JSArrayOfint().of([1244606396, 795186014]), JSArrayOfint().of([2394996775, 3226396573]), JSArrayOfint().of([1625218655, 3737026977]), JSArrayOfint().of([4229700720, 484469816]), JSArrayOfint().of([1191050707, 4256902887]), JSArrayOfint().of([525159721, 1297245338]), JSArrayOfint().of([1989317234, 2464473145]), JSArrayOfint().of([4202001865, 1972354282]), JSArrayOfint().of([906364440, 103816716]), JSArrayOfint().of([2928314898, 2317654025]), JSArrayOfint().of([1270002418, 3002679417]), JSArrayOfint().of([2246502079, 3865270737]), JSArrayOfint().of([2114850360, 242234908]), JSArrayOfint().of([3877576572, 536372030]), JSArrayOfint().of([1432511125, 1647835076]), JSArrayOfint().of([987026551, 3572409269]), JSArrayOfint().of([2175314074, 2821272141]), JSArrayOfint().of([1385600610, 2529489969]), JSArrayOfint().of([1660549571, 4187699951]), JSArrayOfint().of([2747647283, 3311859351]), JSArrayOfint().of([270869908, 624275786]), JSArrayOfint().of([2874759545, 1509040306]), JSArrayOfint().of([3498345514, 2220142101]), JSArrayOfint().of([3312612053, 1924638692]), JSArrayOfint().of([3963173348, 970317170]), JSArrayOfint().of([374098989, 1280991640]), JSArrayOfint().of([2489212517, 1590311868]), JSArrayOfint().of([2675472637, 2028439024]), JSArrayOfint().of([3845667040, 954062960]), JSArrayOfint().of([2559347722, 2350155269]), JSArrayOfint().of([399626595, 3519460031]), JSArrayOfint().of([3836061102, 2772503383]), JSArrayOfint().of([2716000943, 3796061657]), JSArrayOfint().of([1315004825, 1630533826]), JSArrayOfint().of([1119073270, 3018933627]), JSArrayOfint().of([874586500, 555066690]), JSArrayOfint().of([144481354, 2626999845]), JSArrayOfint().of([3994951288, 519071292]), JSArrayOfint().of([1631798033, 1126322822]), JSArrayOfint().of([2982659899, 3346463891]), JSArrayOfint().of([1341979863, 4239600613]), JSArrayOfint().of([604242960, 69211144]), JSArrayOfint().of([3813757273, 1370622114]), JSArrayOfint().of([630823262, 2579285807]), JSArrayOfint().of([577596841, 1833944282]), JSArrayOfint().of([1695354164, 224934170]), JSArrayOfint().of([2046491343, 4202903017]), JSArrayOfint().of([1776279387, 3753280675]), JSArrayOfint().of([2843639525, 2128059388]), JSArrayOfint().of([421799056, 608023624]), JSArrayOfint().of([4265294828, 1002821494]), JSArrayOfint().of([2594941846, 2872130891]), JSArrayOfint().of([4040085023, 3460223361]), JSArrayOfint().of([2568032580, 294147362]), JSArrayOfint().of([2207223558, 2399963395]), JSArrayOfint().of([72240677, 1313500060]), JSArrayOfint().of([1723316198, 3083948403]), JSArrayOfint().of([3773557643, 3943391435]), JSArrayOfint().of([3241950448, 1023265912]), JSArrayOfint().of([4253122878, 2172436255]), JSArrayOfint().of([1083479146, 2496986677]), JSArrayOfint().of([486012923, 4159376627]), JSArrayOfint().of([414824926, 3114362735]), JSArrayOfint().of([2333283148, 328752934]), JSArrayOfint().of([1361849520, 746429528]), JSArrayOfint().of([97768299, 3554064571]), JSArrayOfint().of([2364008379, 3882573011]), JSArrayOfint().of([963538597, 1851247580]), JSArrayOfint().of([2865022007, 3295605653]), JSArrayOfint().of([453182220, 51908358]), JSArrayOfint().of([3696645701, 1451889580]), JSArrayOfint().of([1581532173, 1142573448]), JSArrayOfint().of([2692710369, 2145361662]), JSArrayOfint().of([2292820382, 2837526351]), JSArrayOfint().of([1730816680, 709722708]), JSArrayOfint().of([180075478, 3148967275]), JSArrayOfint().of([2277622051, 3242648223]), JSArrayOfint().of([4048769873, 1403126438]), JSArrayOfint().of([1927076951, 3702426533]), JSArrayOfint().of([1393232684, 190326550]), JSArrayOfint().of([27106638, 2644300583]), JSArrayOfint().of([728525997, 1816642008]), JSArrayOfint().of([2754687428, 831911266]), JSArrayOfint().of([4084495565, 1955052008]), JSArrayOfint().of([368506623, 4142074353]), JSArrayOfint().of([1279673861, 1175077772]), JSArrayOfint().of([2779557002, 2886280773]), JSArrayOfint().of([3045689630, 2302449423]), JSArrayOfint().of([3021214800, 346047528]), JSArrayOfint().of([3135365539, 3780854495]), JSArrayOfint().of([2786465368, 380653100]), JSArrayOfint().of([4147788520, 986567284]), JSArrayOfint().of([107571641, 1768935634]), JSArrayOfint().of([1091111204, 155725074]), JSArrayOfint().of([3614470365, 1890037216]), JSArrayOfint().of([1874245346, 3067696241]), JSArrayOfint().of([517001319, 3503208381]), JSArrayOfint().of([3605917075, 3980099271]), JSArrayOfint().of([3805072407, 3425622917]), JSArrayOfint().of([1749172757, 1110071172]), JSArrayOfint().of([748197978, 2561983021]), JSArrayOfint().of([3986990250, 2756251221]), JSArrayOfint().of([1965566112, 677218384]), JSArrayOfint().of([2254199917, 1557803448]), JSArrayOfint().of([1811478727, 4170399725]), JSArrayOfint().of([3263596066, 2252645393])]));
    },
    /*whirlpool._C2*/get _C2() {
      return new ufixnum.Register64List.from(JSArrayOfListOfint().of([JSArrayOfint().of([819468312, 1612234872]), JSArrayOfint().of([1176904483, 2351105455]), JSArrayOfint().of([2444805830, 1069973241]), JSArrayOfint().of([3455838440, 2280133487]), JSArrayOfint().of([332105607, 646401185]), JSArrayOfint().of([1829877944, 3669535074]), JSArrayOfint().of([34144513, 67176453]), JSArrayOfint().of([2651672399, 558842478]), JSArrayOfint().of([1822111286, 3627462126]), JSArrayOfint().of([1375708838, 2728810756]), JSArrayOfint().of([3104625362, 1876090557]), JSArrayOfint().of([4144952821, 4092984070]), JSArrayOfint().of([4069947769, 4185517952]), JSArrayOfint().of([3727716207, 2708430798]), JSArrayOfint().of([1064145297, 2123496687]), JSArrayOfint().of([2767737426, 1431480839]), JSArrayOfint().of([3225903200, 2640324605]), JSArrayOfint().of([1698020540, 3401353590]), JSArrayOfint().of([725064603, 1453042893]), JSArrayOfint().of([25857678, 42861708]), JSArrayOfint().of([1540531107, 3064164629]), JSArrayOfint().of([409734156, 806117436]), JSArrayOfint().of([4135877499, 4051435402]), JSArrayOfint().of([1786787125, 3560289761]), JSArrayOfint().of([989142301, 1948117097]), JSArrayOfint().of([3719553248, 2816496455]), JSArrayOfint().of([3005339607, 2077750956]), JSArrayOfint().of([2577187522, 801267437]), JSArrayOfint().of([1547906606, 3090050454]), JSArrayOfint().of([2519288651, 827023994]), JSArrayOfint().of([3781033726, 3758007073]), JSArrayOfint().of([2933217111, 1096253974]), JSArrayOfint().of([717034773, 1410705473]), JSArrayOfint().of([4008212343, 3245842358]), JSArrayOfint().of([1855076151, 3694634475]), JSArrayOfint().of([3617514981, 3018160982]), JSArrayOfint().of([588488607, 1184861401]), JSArrayOfint().of([4246991088, 3891319575]), JSArrayOfint().of([2485144138, 894069375]), JSArrayOfint().of([2839861978, 1339727509]), JSArrayOfint().of([2963429464, 2102983205]), JSArrayOfint().of([2412759497, 63506122]), JSArrayOfint().of([1383868713, 2754172301]), JSArrayOfint().of([341445130, 671764514]), JSArrayOfint().of([2135994801, 4273070415]), JSArrayOfint().of([1573494944, 3131074842]), JSArrayOfint().of([3591662443, 2976612314]), JSArrayOfint().of([400131461, 780491947]), JSArrayOfint().of([1732033981, 3468525939]), JSArrayOfint().of([3129957725, 1767756340]), JSArrayOfint().of([546312208, 1074823248]), JSArrayOfint().of([4110939380, 4160025347]), JSArrayOfint().of([2346568651, 197859008]), JSArrayOfint().of([2094218814, 4164873670]), JSArrayOfint().of([170722565, 335882257]), JSArrayOfint().of([3463997287, 2171019238]), JSArrayOfint().of([3583501540, 3085202259]), JSArrayOfint().of([1308763943, 2619811259]), JSArrayOfint().of([2188591425, 423703128]), JSArrayOfint().of([195529611, 378219677]), JSArrayOfint().of([1408673703, 2795983105]), JSArrayOfint().of([4206001533, 3917336468]), JSArrayOfint().of([927569301, 1855315195]), JSArrayOfint().of([2908149976, 1205374623]), JSArrayOfint().of([3950050299, 3422260016]), JSArrayOfint().of([3251498734, 2683183985]), JSArrayOfint().of([4173036668, 3984377745]), JSArrayOfint().of([3429983846, 2238060515]), JSArrayOfint().of([2809912797, 1407035022]), JSArrayOfint().of([783226647, 1545058379]), JSArrayOfint().of([2386904903, 21430854]), JSArrayOfint().of([555392670, 1117684956]), JSArrayOfint().of([2312424138, 264904389]), JSArrayOfint().of([1515728173, 3022878105]), JSArrayOfint().of([1664008127, 3334443385]), JSArrayOfint().of([239011591, 470235163]), JSArrayOfint().of([1202498989, 2393702691]), JSArrayOfint().of([3031456346, 1968892463]), JSArrayOfint().of([468681603, 914582709]), JSArrayOfint().of([1723216691, 3425928703]), JSArrayOfint().of([3327943523, 2439200754]), JSArrayOfint().of([68289026, 134352906]), JSArrayOfint().of([1234414250, 2460629304]), JSArrayOfint().of([3806228849, 3648106408]), JSArrayOfint().of([2378614984, 130551503]), JSArrayOfint().of([852564249, 1679411325]), JSArrayOfint().of([2453358921, 961114736]), JSArrayOfint().of([2942294489, 1138329242]), JSArrayOfint().of([4180800242, 4025664285]), JSArrayOfint().of([3685278691, 2883799880]), JSArrayOfint().of([3065600859, 1901847082]), JSArrayOfint().of([230459528, 445133970]), JSArrayOfint().of([691968666, 1385866440]), JSArrayOfint().of([1275799078, 2552638910]), JSArrayOfint().of([1690251826, 3358756346]), JSArrayOfint().of([2103029936, 4205898058]), JSArrayOfint().of([3488803305, 2213092202]), JSArrayOfint().of([511119119, 1007646771]), JSArrayOfint().of([3073627605, 1943398054]), JSArrayOfint().of([502562944, 981497018]), JSArrayOfint().of([1629994686, 3267271036]), JSArrayOfint().of([2280377805, 332211934]), JSArrayOfint().of([1753822260, 3493117412]), JSArrayOfint().of([2419214408, 1028160117]), JSArrayOfint().of([3813998591, 3690965796]), JSArrayOfint().of([4102912634, 4118476687]), JSArrayOfint().of([1030000784, 2056320234]), JSArrayOfint().of([3197984607, 1633665598]), JSArrayOfint().of([1077747744, 2149588384]), JSArrayOfint().of([3490670696, 3177736149]), JSArrayOfint().of([885660186, 1746587762]), JSArrayOfint().of([1102556846, 2192447788]), JSArrayOfint().of([1971172532, 3937716574]), JSArrayOfint().of([2832094292, 1297390105]), JSArrayOfint().of([998216595, 1989405925]), JSArrayOfint().of([1143939618, 2283933098]), JSArrayOfint().of([3361956964, 2372143081]), JSArrayOfint().of([4281004529, 3824278290]), JSArrayOfint().of([3872158579, 3514023842]), JSArrayOfint().of([612504082, 1209176154]), JSArrayOfint().of([2155495488, 490748509]), JSArrayOfint().of([273156104, 537411624]), JSArrayOfint().of([2610283459, 734222056]), JSArrayOfint().of([3319786732, 2548839291]), JSArrayOfint().of([2874006491, 1272682128]), JSArrayOfint().of([1606459809, 3198247199]), JSArrayOfint().of([126979469, 244128899]), JSArrayOfint().of([2059943229, 4097701321]), JSArrayOfint().of([861640599, 1721224433]), JSArrayOfint().of([0, 0]), JSArrayOfint().of([2214186959, 466564820]), JSArrayOfint().of([1450060587, 2888516999]), JSArrayOfint().of([3974198902, 3312883635]), JSArrayOfint().of([434537090, 847406256]), JSArrayOfint().of([2972243670, 2144796329]), JSArrayOfint().of([918756123, 1813764215]), JSArrayOfint().of([2004137397, 4004888923]), JSArrayOfint().of([1136570287, 2259620137]), JSArrayOfint().of([3558697578, 3043653599]), JSArrayOfint().of([2699710544, 1565571597]), JSArrayOfint().of([2320975173, 155521612]), JSArrayOfint().of([4214813683, 3958623000]), JSArrayOfint().of([1621962800, 3224411632]), JSArrayOfint().of([3284463599, 2616142708]), JSArrayOfint().of([2128232255, 4232046019]), JSArrayOfint().of([2865190229, 1230344732]), JSArrayOfint().of([1507566242, 2996992272]), JSArrayOfint().of([3387550442, 2414478181]), JSArrayOfint().of([3395970405, 2305101804]), JSArrayOfint().of([1761852090, 3535452520]), JSArrayOfint().of([1581920047, 3157222803]), JSArrayOfint().of([2643378368, 666914535]), JSArrayOfint().of([2707480286, 1608433281]), JSArrayOfint().of([956046364, 1880940652]), JSArrayOfint().of([3880189437, 3556621102]), JSArrayOfint().of([2585742669, 692933220]), JSArrayOfint().of([964072082, 1922229472]), JSArrayOfint().of([3942282613, 3379924924]), JSArrayOfint().of([204867078, 403058718]), JSArrayOfint().of([162433674, 311043224]), JSArrayOfint().of([2035004082, 4071815488]), JSArrayOfint().of([3515213542, 3219546969]), JSArrayOfint().of([478023182, 940470326]), JSArrayOfint().of([1055334175, 2082469987]), JSArrayOfint().of([3293930082, 2506242039]), JSArrayOfint().of([3040531668, 2010443427]), JSArrayOfint().of([1300342952, 2594711858]), JSArrayOfint().of([827496086, 1654047988]), JSArrayOfint().of([4016241145, 3287915322]), JSArrayOfint().of([2544092613, 868574966]), JSArrayOfint().of([1242572069, 2485466545]), JSArrayOfint().of([2997573977, 2035937824]), JSArrayOfint().of([365986948, 713315502]), JSArrayOfint().of([3838145138, 3581065127]), JSArrayOfint().of([1928083769, 3828995549]), JSArrayOfint().of([2551598156, 759978593]), JSArrayOfint().of([3163840094, 1700710971]), JSArrayOfint().of([4036982904, 4252559237]), JSArrayOfint().of([1894070328, 3761823192]), JSArrayOfint().of([93883532, 176952454]), JSArrayOfint().of([3206009297, 1674692274]), JSArrayOfint().of([1474602405, 2930065675]), JSArrayOfint().of([3651265250, 2950841165]), JSArrayOfint().of([3259916641, 2573283320]), JSArrayOfint().of([2067968947, 4138987845]), JSArrayOfint().of([1110712609, 2216760741]), JSArrayOfint().of([621321372, 1251775702]), JSArrayOfint().of([1022238238, 2015293542]), JSArrayOfint().of([2254521155, 289612370]), JSArrayOfint().of([2477901767, 1002927868]), JSArrayOfint().of([3847224572, 3623662379]), JSArrayOfint().of([136578052, 268705812]), JSArrayOfint().of([2732806481, 1498526216]), JSArrayOfint().of([790993305, 1587133639]), JSArrayOfint().of([3659689325, 2842513348]), JSArrayOfint().of([442830093, 873293881]), JSArrayOfint().of([3917085434, 3489301301]), JSArrayOfint().of([2741624799, 1541387908]), JSArrayOfint().of([4238966398, 3850295195]), JSArrayOfint().of([1209607204, 2418294196]), JSArrayOfint().of([1996372795, 3963340247]), JSArrayOfint().of([1268427691, 2527801661]), JSArrayOfint().of([2180042446, 533610193]), JSArrayOfint().of([580456721, 1141999701]), JSArrayOfint().of([58953615, 110038153]), JSArrayOfint().of([2617527886, 625887851]), JSArrayOfint().of([1936111543, 3870806353]), JSArrayOfint().of([3420515307, 2347436896]), JSArrayOfint().of([2025929788, 4030528972]), JSArrayOfint().of([536707457, 1048673471]), JSArrayOfint().of([893424788, 1788138750]), JSArrayOfint().of([4078761975, 4227328780]), JSArrayOfint().of([1863891385, 3736707431]), JSArrayOfint().of([646648595, 1276352607]), JSArrayOfint().of([1481714732, 2955705756]), JSArrayOfint().of([3137721299, 1809045176]), JSArrayOfint().of([3549226983, 3152505692]), JSArrayOfint().of([3694751342, 2775472075]), JSArrayOfint().of([2510996676, 935620339]), JSArrayOfint().of([102433539, 201529359]), JSArrayOfint().of([2900121174, 1163299347]), JSArrayOfint().of([2287879236, 222566985]), JSArrayOfint().of([4271931263, 3783253918]), JSArrayOfint().of([1334356393, 2661884215]), JSArrayOfint().of([1416047146, 2821344642]), JSArrayOfint().of([1795865531, 3602624877]), JSArrayOfint().of([2676474305, 599869154]), JSArrayOfint().of([2800833363, 1364435458]), JSArrayOfint().of([2775768284, 1474080395]), JSArrayOfint().of([374541067, 738940967]), JSArrayOfint().of([654417309, 1318952147]), JSArrayOfint().of([3626724460, 2909554625]), JSArrayOfint().of([1654927665, 3291583989]), JSArrayOfint().of([3908269172, 3446966201]), JSArrayOfint().of([4044748534, 4294370057]), JSArrayOfint().of([2353808966, 88476227]), JSArrayOfint().of([1168485548, 2326530342]), JSArrayOfint().of([263555465, 512310423]), JSArrayOfint().of([682890260, 1343529028]), JSArrayOfint().of([3753566689, 2749455170]), JSArrayOfint().of([749082134, 1477881934]), JSArrayOfint().of([1962359354, 3896167890]), JSArrayOfint().of([3523635561, 3110694864]), JSArrayOfint().of([306252041, 604588077]), JSArrayOfint().of([3772215408, 3715147693]), JSArrayOfint().of([1903146678, 3803634004]), JSArrayOfint().of([3172913360, 1741737655]), JSArrayOfint().of([3352751597, 2481798014]), JSArrayOfint().of([2246233292, 399257307]), JSArrayOfint().of([2221425218, 356657751]), JSArrayOfint().of([757897368, 1519957186]), JSArrayOfint().of([1441637540, 2862893326]), JSArrayOfint().of([1349855272, 2686999944]), JSArrayOfint().of([3095813212, 1834801713]), JSArrayOfint().of([3983276280, 3354956607]), JSArrayOfint().of([297961094, 579224740])]));
    },
    /*whirlpool._C3*/get _C3() {
      return new ufixnum.Register64List.from(JSArrayOfListOfint().of([JSArrayOfint().of([2016466968, 408950976]), JSArrayOfint().of([2940610083, 596386565]), JSArrayOfint().of([4187076806, 3326068350]), JSArrayOfint().of([1875770344, 3901220883]), JSArrayOfint().of([2702429063, 2267449164]), JSArrayOfint().of([1651315128, 3101341865]), JSArrayOfint().of([84019457, 17039624]), JSArrayOfint().of([1855851855, 1327583042]), JSArrayOfint().of([4000095030, 920139437]), JSArrayOfint().of([72482726, 2795677273]), JSArrayOfint().of([3183021266, 3530543838]), JSArrayOfint().of([116854517, 4126406139]), JSArrayOfint().of([2163381881, 2046392815]), JSArrayOfint().of([3470667887, 1872850783]), JSArrayOfint().of([4013911441, 2440991228]), JSArrayOfint().of([128251986, 1381323434]), JSArrayOfint().of([4257236832, 1620926503]), JSArrayOfint().of([1986344380, 3167403145]), JSArrayOfint().of([3442161563, 2606144428]), JSArrayOfint().of([2348911246, 2382532100]), JSArrayOfint().of([358339235, 2746655601]), JSArrayOfint().of([1008233484, 204475488]), JSArrayOfint().of([2331411579, 2079423487]), JSArrayOfint().of([3781853237, 903099829]), JSArrayOfint().of([1765471517, 494149096]), JSArrayOfint().of([1205711840, 3769098323]), JSArrayOfint().of([2897420759, 3615217654]), JSArrayOfint().of([3986267330, 3257909854]), JSArrayOfint().of([2522628910, 783822445]), JSArrayOfint().of([2056661323, 1261521762]), JSArrayOfint().of([568417790, 4276092579]), JSArrayOfint().of([380556631, 1463900034]), JSArrayOfint().of([1093319957, 357832104]), JSArrayOfint().of([3069110391, 2009167775]), JSArrayOfint().of([3949892151, 937179045]), JSArrayOfint().of([1456971493, 3853772155]), JSArrayOfint().of([3642954655, 2672205708]), JSArrayOfint().of([402465776, 4041732307]), JSArrayOfint().of([2140414026, 1245006442]), JSArrayOfint().of([2510898394, 3662666398]), JSArrayOfint().of([632332888, 1484609786]), JSArrayOfint().of([3398422473, 3372468486]), JSArrayOfint().of([2370993193, 698624341]), JSArrayOfint().of([571759114, 170396240]), JSArrayOfint().of([1333743793, 2986258913]), JSArrayOfint().of([442354080, 2696585321]), JSArrayOfint().of([3671463019, 1806789503]), JSArrayOfint().of([2870466949, 2234418524]), JSArrayOfint().of([1936145597, 3184442753]), JSArrayOfint().of([884641629, 1567186386]), JSArrayOfint().of([1344311312, 272633984]), JSArrayOfint().of([66390004, 4109890803]), JSArrayOfint().of([3230391755, 3406547734]), JSArrayOfint().of([3330069310, 1056456429]), JSArrayOfint().of([285879557, 85198120]), JSArrayOfint().of([3872290919, 1736533791]), JSArrayOfint().of([1406506980, 3837256819]), JSArrayOfint().of([3142451751, 664545061]), JSArrayOfint().of([1484944193, 1092174130]), JSArrayOfint().of([2634786699, 2333510444]), JSArrayOfint().of([22279847, 2812716881]), JSArrayOfint().of([2499457661, 2112454095]), JSArrayOfint().of([4214704533, 2507052508]), JSArrayOfint().of([2678937304, 3628587150]), JSArrayOfint().of([820736251, 4224449419]), JSArrayOfint().of([1908526574, 4003458595]), JSArrayOfint().of([2448997244, 2095938759]), JSArrayOfint().of([3821826406, 1720018455]), JSArrayOfint().of([2393340893, 3713260966]), JSArrayOfint().of([1261350679, 391911352]), JSArrayOfint().of([1183728967, 1191266050]), JSArrayOfint().of([3693157022, 2655166084]), JSArrayOfint().of([3314144458, 3390032414]), JSArrayOfint().of([2572834861, 766782837]), JSArrayOfint().of([2036543167, 3217473425]), JSArrayOfint().of([453918471, 119277368]), JSArrayOfint().of([591899821, 2911808769]), JSArrayOfint().of([800370778, 1517640426]), JSArrayOfint().of([3038506883, 2201387884]), JSArrayOfint().of([4284921395, 869020549]), JSArrayOfint().of([4073086051, 1670472511]), JSArrayOfint().of([168038914, 34079248]), JSArrayOfint().of([944346026, 2861738553]), JSArrayOfint().of([2833440369, 1910075823]), JSArrayOfint().of([3482175176, 3355953166]), JSArrayOfint().of([2100482329, 425990600]), JSArrayOfint().of([1888631625, 1228491122]), JSArrayOfint().of([2595184601, 3645102470]), JSArrayOfint().of([502870514, 4075811523]), JSArrayOfint().of([1222355171, 3819692875]), JSArrayOfint().of([716618075, 1534155746]), JSArrayOfint().of([2450373768, 2283440180]), JSArrayOfint().of([3358146202, 2589104804]), JSArrayOfint().of([3192654630, 647505453]), JSArrayOfint().of([4200906546, 851980941]), JSArrayOfint().of([1249728944, 2969219305]), JSArrayOfint().of([1792013033, 3917736219]), JSArrayOfint().of([857634575, 255594360]), JSArrayOfint().of([2797024213, 3581138406]), JSArrayOfint().of([3122525312, 2151317620]), JSArrayOfint().of([2086741950, 3200433817]), JSArrayOfint().of([3733449677, 3440626982]), JSArrayOfint().of([3832056116, 886060221]), JSArrayOfint().of([1972384328, 1211975802]), JSArrayOfint().of([618878207, 4292607915]), JSArrayOfint().of([2415168890, 2062908151]), JSArrayOfint().of([3929891984, 2423951604]), JSArrayOfint().of([1052679519, 1600217026]), JSArrayOfint().of([2688564512, 545267741]), JSArrayOfint().of([3587182440, 1757243495]), JSArrayOfint().of([1916062234, 443030224]), JSArrayOfint().of([742504366, 2927799833]), JSArrayOfint().of([1584758196, 3035280585]), JSArrayOfint().of([430493268, 1414354074]), JSArrayOfint().of([3845881747, 2474021868]), JSArrayOfint().of([2856595234, 579346957]), JSArrayOfint().of([3922223972, 1686987783]), JSArrayOfint().of([318712561, 4058247643]), JSArrayOfint().of([2733034611, 1943106495]), JSArrayOfint().of([1512342034, 306713232]), JSArrayOfint().of([1568700992, 1075658810]), JSArrayOfint().of([672155656, 136316992]), JSArrayOfint().of([3902510531, 3274425174]), JSArrayOfint().of([2076565484, 3969379379]), JSArrayOfint().of([2427145691, 3679181718]), JSArrayOfint().of([526368929, 2713624929]), JSArrayOfint().of([2198311309, 2366541084]), JSArrayOfint().of([3380267069, 1039416821]), JSArrayOfint().of([4046674839, 2540083148]), JSArrayOfint().of([0, 0]), JSArrayOfint().of([3565418959, 3474706230]), JSArrayOfint().of([2270588459, 732703557]), JSArrayOfint().of([3018645878, 1992652439]), JSArrayOfint().of([2954487426, 2184348260]), JSArrayOfint().of([2846959830, 3598702334]), JSArrayOfint().of([2000077595, 460069848]), JSArrayOfint().of([1534555317, 3052320193]), JSArrayOfint().of([692305583, 2944839441]), JSArrayOfint().of([3755220330, 1790274167]), JSArrayOfint().of([228649552, 1348292794]), JSArrayOfint().of([1284134725, 1158235410]), JSArrayOfint().of([419117299, 4092326859]), JSArrayOfint().of([4032867632, 817901725]), JSArrayOfint().of([1958986991, 4019973931]), JSArrayOfint().of([3279870527, 1073496037]), JSArrayOfint().of([480954197, 1430869394]), JSArrayOfint().of([274324386, 2729615993]), JSArrayOfint().of([1707731434, 3935300099]), JSArrayOfint().of([3972688485, 1703503119]), JSArrayOfint().of([1751712698, 3134372537]), JSArrayOfint().of([2472430127, 800862053]), JSArrayOfint().of([3885862592, 3223830606]), JSArrayOfint().of([2174836958, 3730824894]), JSArrayOfint().of([1815673884, 477109472]), JSArrayOfint().of([786908925, 4258528699]), JSArrayOfint().of([1687822157, 1294552402]), JSArrayOfint().of([3761862290, 2456982244]), JSArrayOfint().of([3169516149, 1976137103]), JSArrayOfint().of([504116742, 102237744]), JSArrayOfint().of([2550771338, 2316470820]), JSArrayOfint().of([1081691058, 3002249977]), JSArrayOfint().of([1506903526, 3871336035]), JSArrayOfint().of([907836942, 238554736]), JSArrayOfint().of([1665066783, 528228344]), JSArrayOfint().of([4156839266, 1653957175]), JSArrayOfint().of([2746563284, 3564623086]), JSArrayOfint().of([843940264, 2828707881]), JSArrayOfint().of([4096873110, 2523043524]), JSArrayOfint().of([988766969, 4190370203]), JSArrayOfint().of([4137132997, 3308504422]), JSArrayOfint().of([2974421029, 630465845]), JSArrayOfint().of([548580185, 1501125106]), JSArrayOfint().of([2920665220, 2217378900]), JSArrayOfint().of([2816787826, 1926591159]), JSArrayOfint().of([3715296313, 971258325]), JSArrayOfint().of([1637357132, 1278037082]), JSArrayOfint().of([1002214494, 1583701706]), JSArrayOfint().of([2247139192, 2029877479]), JSArrayOfint().of([3631277368, 954218717]), JSArrayOfint().of([2248513676, 2349501460]), JSArrayOfint().of([2998867921, 3512979910]), JSArrayOfint().of([190309541, 2779686209]), JSArrayOfint().of([1306108386, 3803177539]), JSArrayOfint().of([4173483617, 1637441839]), JSArrayOfint().of([1165705907, 3019289585]), JSArrayOfint().of([2772579361, 562307349]), JSArrayOfint().of([3592751260, 2622135444]), JSArrayOfint().of([1715269150, 511188720]), JSArrayOfint().of([1384538435, 1125204770]), JSArrayOfint().of([4237537735, 3342583670]), JSArrayOfint().of([736448508, 4242013363]), JSArrayOfint().of([336077828, 68158496]), JSArrayOfint().of([144892753, 1364808114]), JSArrayOfint().of([3341755801, 2573113788]), JSArrayOfint().of([3302629997, 1839820111]), JSArrayOfint().of([958031117, 221515112]), JSArrayOfint().of([904493562, 4207934083]), JSArrayOfint().of([2225301983, 3747340214]), JSArrayOfint().of([2617026942, 2128969431]), JSArrayOfint().of([3024623908, 613426237]), JSArrayOfint().of([3614899771, 1005337541]), JSArrayOfint().of([1028364971, 2878778161]), JSArrayOfint().of([3514953934, 3458190910]), JSArrayOfint().of([1428330769, 289673608]), JSArrayOfint().of([2298708879, 2399571724]), JSArrayOfint().of([1805386830, 1311067722]), JSArrayOfint().of([1366517431, 3085350865]), JSArrayOfint().of([1623974123, 3951815435]), JSArrayOfint().of([3430465852, 1022377213]), JSArrayOfint().of([3206544769, 2168357244]), JSArrayOfint().of([4264902804, 2490012884]), JSArrayOfint().of([217259255, 4160485355]), JSArrayOfint().of([1735334073, 3118381473]), JSArrayOfint().of([1596361491, 323752856]), JSArrayOfint().of([2623033644, 749743229]), JSArrayOfint().of([3099264467, 3547059158]), JSArrayOfint().of([1557368039, 3887851371]), JSArrayOfint().of([3420207470, 1856335447]), JSArrayOfint().of([4086672068, 3291989102]), JSArrayOfint().of([252058371, 51118872]), JSArrayOfint().of([330095702, 1447384714]), JSArrayOfint().of([1233673796, 1141720090]), JSArrayOfint().of([2667487359, 2145484767]), JSArrayOfint().of([927959209, 2845747489]), JSArrayOfint().of([2186569514, 715663949]), JSArrayOfint().of([1835731643, 3151412145]), JSArrayOfint().of([3802105793, 3240345926]), JSArrayOfint().of([44495187, 1397838754]), JSArrayOfint().of([2342875868, 3696745646]), JSArrayOfint().of([655774475, 187435864]), JSArrayOfint().of([3542548893, 2639175068]), JSArrayOfint().of([3252169580, 1823304775]), JSArrayOfint().of([4116882481, 834941333]), JSArrayOfint().of([3119051636, 1959621767]), JSArrayOfint().of([166794742, 4143970019]), JSArrayOfint().of([1133268038, 1174750730]), JSArrayOfint().of([642098604, 2894769161]), JSArrayOfint().of([2534389129, 2300479804]), JSArrayOfint().of([1143518228, 340792480]), JSArrayOfint().of([1121958625, 3785613659]), JSArrayOfint().of([1311548950, 374871728]), JSArrayOfint().of([3530880826, 988297933]), JSArrayOfint().of([3503425129, 1773758831]), JSArrayOfint().of([756171017, 153356616]), JSArrayOfint().of([2917193584, 1893560487]), JSArrayOfint().of([1416720310, 3068311257]), JSArrayOfint().of([3082624720, 3496464590]), JSArrayOfint().of([2127025901, 3985894715]), JSArrayOfint().of([3682984652, 3424111662]), JSArrayOfint().of([1468295234, 1108689450]), JSArrayOfint().of([3257740440, 2556074164]), JSArrayOfint().of([240512420, 2762646601]), JSArrayOfint().of([2286974248, 681584733]), JSArrayOfint().of([834176604, 1550671066]), JSArrayOfint().of([1072524280, 4173854867]), JSArrayOfint().of([2752627334, 2250409540])]));
    },
    /*whirlpool._C4*/get _C4() {
      return new ufixnum.Register64List.from(JSArrayOfListOfint().of([JSArrayOfint().of([3229102296, 404250648]), JSArrayOfint().of([95372838, 589532195]), JSArrayOfint().of([2130284984, 3334881222]), JSArrayOfint().of([326094331, 3907553256]), JSArrayOfint().of([1285624779, 2273781383]), JSArrayOfint().of([2841799953, 3099122360]), JSArrayOfint().of([134545929, 16843777]), JSArrayOfint().of([1114545677, 1330585935]), JSArrayOfint().of([2918083739, 909563958]), JSArrayOfint().of([1493455359, 2795938470]), JSArrayOfint().of([3736975628, 3537006546]), JSArrayOfint().of([4211537678, 4126536693]), JSArrayOfint().of([4018205334, 2038036857]), JSArrayOfint().of([1607392816, 1869586799]), JSArrayOfint().of([4243537773, 2442231441]), JSArrayOfint().of([2852627704, 1381127506]), JSArrayOfint().of([670941255, 1616944480]), JSArrayOfint().of([2306237749, 3166489276]), JSArrayOfint().of([2899127095, 2610648731]), JSArrayOfint().of([76284298, 2391671438]), JSArrayOfint().of([1897225170, 2745415331]), JSArrayOfint().of([1614551148, 202125324]), JSArrayOfint().of([4287297156, 2071720315]), JSArrayOfint().of([3051448960, 892720181]), JSArrayOfint().of([3899210485, 488469533]), JSArrayOfint().of([1397218739, 3772819424]), JSArrayOfint().of([4138513185, 3621223383]), JSArrayOfint().of([1592629660, 3267506114]), JSArrayOfint().of([1838570563, 774813742]), JSArrayOfint().of([1652201001, 1263219019]), JSArrayOfint().of([2736906589, 4278116350]), JSArrayOfint().of([2182524629, 1465336151]), JSArrayOfint().of([2822843069, 353719317]), JSArrayOfint().of([2679566056, 2004337015]), JSArrayOfint().of([2783669906, 926407735]), JSArrayOfint().of([2069288862, 3857036261]), JSArrayOfint().of([2363040531, 2678015647]), JSArrayOfint().of([3541564707, 4042319856]), JSArrayOfint().of([1786745888, 1246377290]), JSArrayOfint().of([2660608324, 3671740378]), JSArrayOfint().of([4196774050, 1482194264]), JSArrayOfint().of([113938383, 3385394121]), JSArrayOfint().of([1435325052, 690594857]), JSArrayOfint().of([1344410714, 168437770]), JSArrayOfint().of([3780083536, 2981232305]), JSArrayOfint().of([1763335625, 2694888096]), JSArrayOfint().of([2145048084, 1802219883]), JSArrayOfint().of([1554716633, 2240097925]), JSArrayOfint().of([2171823932, 3183333053]), JSArrayOfint().of([3526670991, 1566402909]), JSArrayOfint().of([2152734864, 269500432]), JSArrayOfint().of([4077122823, 4109694964]), JSArrayOfint().of([381717469, 3419081675]), JSArrayOfint().of([3989208275, 1044314174]), JSArrayOfint().of([672205357, 84218885]), JSArrayOfint().of([535219832, 1734836583]), JSArrayOfint().of([1934874007, 3840194532]), JSArrayOfint().of([633032194, 656907303]), JSArrayOfint().of([844661363, 1094785345]), JSArrayOfint().of([748489639, 2341148299]), JSArrayOfint().of([1359041526, 2812782247]), JSArrayOfint().of([3482647218, 2105403773]), JSArrayOfint().of([3707451209, 2509598357]), JSArrayOfint().of([2392829270, 3638052824]), JSArrayOfint().of([2335239024, 4227582971]), JSArrayOfint().of([594657741, 4008615918]), JSArrayOfint().of([3348232379, 2088562044]), JSArrayOfint().of([400804977, 1717994854]), JSArrayOfint().of([2794366843, 3722269661]), JSArrayOfint().of([3091934895, 387406871]), JSArrayOfint().of([38178373, 1195835719]), JSArrayOfint().of([2229018906, 2661171870]), JSArrayOfint().of([516262356, 3402239946]), JSArrayOfint().of([1972984408, 757969965]), JSArrayOfint().of([2440651566, 3217016511]), JSArrayOfint().of([941297215, 117906439]), JSArrayOfint().of([19089324, 2913832621]), JSArrayOfint().of([3928994992, 1515877722]), JSArrayOfint().of([1823808495, 2206414467]), JSArrayOfint().of([2248107702, 859032627]), JSArrayOfint().of([1072875100, 1667469667]), JSArrayOfint().of([269091858, 33687554]), JSArrayOfint().of([959990163, 2863305386]), JSArrayOfint().of([2947080926, 1903286641]), JSArrayOfint().of([248483270, 3368552392]), JSArrayOfint().of([3363648209, 421094425]), JSArrayOfint().of([1919980091, 1229535561]), JSArrayOfint().of([2258284383, 3654894553]), JSArrayOfint().of([3273521457, 4076007410]), JSArrayOfint().of([1263066024, 3823348707]), JSArrayOfint().of([3794450105, 1532719451]), JSArrayOfint().of([881987004, 2290621064]), JSArrayOfint().of([2764581182, 2593804954]), JSArrayOfint().of([767446027, 640063526]), JSArrayOfint().of([2381997247, 842188850]), JSArrayOfint().of([3913973081, 2964388528]), JSArrayOfint().of([459984882, 3924394985]), JSArrayOfint().of([2016616055, 252656655]), JSArrayOfint().of([3869685555, 3587535829]), JSArrayOfint().of([1958354420, 2155887232]), JSArrayOfint().of([2575065383, 3200172734]), JSArrayOfint().of([652117995, 3452769229]), JSArrayOfint().of([3185862793, 875876404]), JSArrayOfint().of([2054524978, 1212693832]), JSArrayOfint().of([2871321428, 4294958079]), JSArrayOfint().of([4153406605, 2054878586]), JSArrayOfint().of([4108991844, 2425387664]), JSArrayOfint().of([3258891933, 1600086367]), JSArrayOfint().of([497041469, 539000864]), JSArrayOfint().of([1742065679, 1751694696]), JSArrayOfint().of([3497145546, 437938202]), JSArrayOfint().of([422330807, 2930672302]), JSArrayOfint().of([3378410877, 3031755444]), JSArrayOfint().of([2585372878, 1414810964]), JSArrayOfint().of([3974445951, 2475914899]), JSArrayOfint().of([229262383, 572688418]), JSArrayOfint().of([132761699, 1684311396]), JSArrayOfint().of([3675455274, 4059161585]), JSArrayOfint().of([3215124172, 1936970099]), JSArrayOfint().of([2421826690, 303187986]), JSArrayOfint().of([979206266, 1077943616]), JSArrayOfint().of([1076367432, 134750216]), JSArrayOfint().of([1458084757, 3284347843]), JSArrayOfint().of([863749599, 3974928364]), JSArrayOfint().of([2526063437, 3688582107]), JSArrayOfint().of([1629446080, 2711731873]), JSArrayOfint().of([478349201, 2374831757]), JSArrayOfint().of([4123622088, 1027470397]), JSArrayOfint().of([3438359387, 2543281815]), JSArrayOfint().of([0, 0]), JSArrayOfint().of([919897081, 3486456783]), JSArrayOfint().of([1166497390, 724282411]), JSArrayOfint().of([2545151201, 1987495286]), JSArrayOfint().of([1689262566, 2189570690]), JSArrayOfint().of([4272533800, 3604381654]), JSArrayOfint().of([3631691459, 454781979]), JSArrayOfint().of([3243997044, 3048599221]), JSArrayOfint().of([287916990, 2947516079]), JSArrayOfint().of([2011157533, 1785378154]), JSArrayOfint().of([3121455338, 1347444048]), JSArrayOfint().of([307006039, 1162152261]), JSArrayOfint().of([3407412024, 4092849139]), JSArrayOfint().of([2649776301, 808501296]), JSArrayOfint().of([729072580, 4025457647]), JSArrayOfint().of([3854794458, 1061157951]), JSArrayOfint().of([2451352263, 1431652693]), JSArrayOfint().of([2031114715, 2728571554]), JSArrayOfint().of([57002473, 3941240810]), JSArrayOfint().of([267176554, 1701153125]), JSArrayOfint().of([3110627587, 3132805818]), JSArrayOfint().of([1704156746, 791657519]), JSArrayOfint().of([1323801998, 3233818560]), JSArrayOfint().of([3196166496, 3739115486]), JSArrayOfint().of([3765188860, 471625756]), JSArrayOfint().of([3140413254, 4261270525]), JSArrayOfint().of([1382324767, 1296902477]), JSArrayOfint().of([3839900022, 2459071122]), JSArrayOfint().of([2411522810, 1970653557]), JSArrayOfint().of([807275574, 101062662]), JSArrayOfint().of([613943726, 2324304522]), JSArrayOfint().of([4181752139, 2998071986]), JSArrayOfint().of([1666830725, 3873882086]), JSArrayOfint().of([1882594430, 235812878]), JSArrayOfint().of([4167253735, 522157087]), JSArrayOfint().of([938984533, 1650627938]), JSArrayOfint().of([4003706170, 3570694100]), JSArrayOfint().of([691162497, 2829621928]), JSArrayOfint().of([3304337746, 2526438038]), JSArrayOfint().of([2604330850, 4193895417]), JSArrayOfint().of([1727436707, 3318035397]), JSArrayOfint().of([900811280, 623219749]), JSArrayOfint().of([4062229163, 1499035993]), JSArrayOfint().of([1420694992, 2223254148]), JSArrayOfint().of([3081233605, 1920128370]), JSArrayOfint().of([3588059884, 960095289]), JSArrayOfint().of([1516345366, 1280060748]), JSArrayOfint().of([3392912532, 1583244638]), JSArrayOfint().of([3884314783, 2021195128]), JSArrayOfint().of([3721949413, 943251512]), JSArrayOfint().of([344327576, 2357987980]), JSArrayOfint().of([3333603095, 3520160721]), JSArrayOfint().of([1091262436, 2779098789]), JSArrayOfint().of([1129175457, 3806506978]), JSArrayOfint().of([804831822, 1633786209]), JSArrayOfint().of([4047862594, 3014915763]), JSArrayOfint().of([363151924, 555844641]), JSArrayOfint().of([2497062152, 2627488412]), JSArrayOfint().of([4033232110, 505313310]), JSArrayOfint().of([575833697, 1128468803]), JSArrayOfint().of([1996264369, 3351722951]), JSArrayOfint().of([3005998415, 4244428796]), JSArrayOfint().of([538183716, 67375108]), JSArrayOfint().of([2986910435, 1364285777]), JSArrayOfint().of([3167170341, 2576965273]), JSArrayOfint().of([1338300962, 1835903341]), JSArrayOfint().of([1748572773, 218969101]), JSArrayOfint().of([2201348473, 4210741242]), JSArrayOfint().of([3062145897, 3755957215]), JSArrayOfint().of([3617324201, 2122245502]), JSArrayOfint().of([1035225113, 606375972]), JSArrayOfint().of([3319232254, 993782843]), JSArrayOfint().of([826100634, 2880149163]), JSArrayOfint().of([1053917680, 3469615054]), JSArrayOfint().of([2287280793, 286344209]), JSArrayOfint().of([210305923, 2408515215]), JSArrayOfint().of([1248566276, 1313744206]), JSArrayOfint().of([3511776102, 3082282679]), JSArrayOfint().of([190893024, 3958082539]), JSArrayOfint().of([4258035905, 1010626620]), JSArrayOfint().of([2092900349, 2172731009]), JSArrayOfint().of([3573429568, 2492754580]), JSArrayOfint().of([3943494428, 4160224247]), JSArrayOfint().of([2707910424, 3115966137]), JSArrayOfint().of([2556372619, 320031763]), JSArrayOfint().of([2107398225, 741126188]), JSArrayOfint().of([3602430725, 3553848275]), JSArrayOfint().of([1801245580, 3890723815]), JSArrayOfint().of([1472977977, 1852745070]), JSArrayOfint().of([1861457322, 3301193668]), JSArrayOfint().of([403637787, 50531331]), JSArrayOfint().of([2316545244, 1448494422]), JSArrayOfint().of([441026654, 1145310532]), JSArrayOfint().of([3751739040, 2139087231]), JSArrayOfint().of([557272968, 2846465705]), JSArrayOfint().of([1300386919, 707438634]), JSArrayOfint().of([2976738058, 3149649595]), JSArrayOfint().of([1189257095, 3250660289]), JSArrayOfint().of([2718082801, 1397969235]), JSArrayOfint().of([2928387442, 3705427932]), JSArrayOfint().of([1478956627, 185281547]), JSArrayOfint().of([2631083777, 2644332189]), JSArrayOfint().of([1203886123, 1819061612]), JSArrayOfint().of([2515886756, 825345073]), JSArrayOfint().of([2277107955, 1953811828]), JSArrayOfint().of([3809079573, 4143382518]), JSArrayOfint().of([172198988, 1178993990]), JSArrayOfint().of([153503141, 2896988844]), JSArrayOfint().of([1016532917, 2307464841]), JSArrayOfint().of([2688821428, 336875540]), JSArrayOfint().of([1531109306, 3789661153]), JSArrayOfint().of([2957913254, 370563094]), JSArrayOfint().of([3453121783, 976939066]), JSArrayOfint().of([1875956230, 1768536425]), JSArrayOfint().of([1210913345, 151593993]), JSArrayOfint().of([2813190359, 1886444912]), JSArrayOfint().of([3646189935, 3065438902]), JSArrayOfint().of([3468147998, 3503318992]), JSArrayOfint().of([998164438, 3991770093]), JSArrayOfint().of([786138594, 3435927500]), JSArrayOfint().of([710378600, 1111627074]), JSArrayOfint().of([3032624428, 2560121496]), JSArrayOfint().of([1225676269, 2762255012]), JSArrayOfint().of([1569214581, 673751080]), JSArrayOfint().of([3660691590, 1549561180]), JSArrayOfint().of([2470440299, 4177053688]), JSArrayOfint().of([1151603138, 2256937606])]));
    },
    /*whirlpool._C5*/get _C5() {
      return new ufixnum.Register64List.from(JSArrayOfListOfint().of([JSArrayOfint().of([415266864, 3625457760]), JSArrayOfint().of([587575110, 639837068]), JSArrayOfint().of([3330210193, 3100034623]), JSArrayOfint().of([3893587917, 4226345095]), JSArrayOfint().of([2269946131, 3414656806]), JSArrayOfint().of([3098108525, 297318618]), JSArrayOfint().of([17302786, 151060740]), JSArrayOfint().of([1329753758, 223301409]), JSArrayOfint().of([917368428, 2604021464]), JSArrayOfint().of([2790851665, 4289111714]), JSArrayOfint().of([3537812921, 215143023]), JSArrayOfint().of([4126869239, 251000307]), JSArrayOfint().of([2045739250, 2524543481]), JSArrayOfint().of([1868549854, 812609441]), JSArrayOfint().of([2449272639, 1838256510]), JSArrayOfint().of([1386874788, 4166144597]), JSArrayOfint().of([1613233600, 1197498525]), JSArrayOfint().of([3163125349, 901561546]), JSArrayOfint().of([2611793195, 932944726]), JSArrayOfint().of([2382662657, 2324598274]), JSArrayOfint().of([2742097243, 3533939638]), JSArrayOfint().of([207633432, 1812728880]), JSArrayOfint().of([2080344822, 2222685169]), JSArrayOfint().of([901112170, 2150970836]), JSArrayOfint().of([501770554, 4112326004]), JSArrayOfint().of([3763554269, 3017859239]), JSArrayOfint().of([3623267507, 567793531]), JSArrayOfint().of([3261001113, 2630009391]), JSArrayOfint().of([778933852, 1127100088]), JSArrayOfint().of([1264745110, 692800305]), JSArrayOfint().of([4272103905, 1576992479]), JSArrayOfint().of([1468143278, 3579270977]), JSArrayOfint().of([363348266, 3172275540]), JSArrayOfint().of([2006955758, 3900143553]), JSArrayOfint().of([933620590, 2453092316]), JSArrayOfint().of([3850065623, 2665866675]), JSArrayOfint().of([2676807971, 329228102]), JSArrayOfint().of([4040366077, 602992871]), JSArrayOfint().of([1248493460, 541739573]), JSArrayOfint().of([3667826089, 1155193423]), JSArrayOfint().of([1492788656, 2723698813]), JSArrayOfint().of([3372665487, 3486107907]), JSArrayOfint().of([693472594, 2083072420]), JSArrayOfint().of([173023764, 1510607400]), JSArrayOfint().of([2984333183, 1353822718]), JSArrayOfint().of([2691242589, 3382747322]), JSArrayOfint().of([1803541206, 342584241]), JSArrayOfint().of([2237442839, 3649406254]), JSArrayOfint().of([3179377511, 1019067854]), JSArrayOfint().of([1574057146, 2405260649]), JSArrayOfint().of([276844576, 2416971840]), JSArrayOfint().of([4109566965, 133494007]), JSArrayOfint().of([3407265931, 3721120523]), JSArrayOfint().of([1055770236, 3544071928]), JSArrayOfint().of([86511882, 755303700]), JSArrayOfint().of([1730143950, 2020042625]), JSArrayOfint().of([3832763349, 2548360375]), JSArrayOfint().of([656784206, 36120476]), JSArrayOfint().of([1093818498, 1933656345]), JSArrayOfint().of([2334956811, 2810940182]), JSArrayOfint().of([2807103827, 4138182566]), JSArrayOfint().of([2110756090, 2994568681]), JSArrayOfint().of([2514287415, 1234539886]), JSArrayOfint().of([3633225645, 1457051719]), JSArrayOfint().of([4220203243, 1895562187]), JSArrayOfint().of([3995300289, 3454987935]), JSArrayOfint().of([2093453816, 3145497837]), JSArrayOfint().of([1712841676, 1902536325]), JSArrayOfint().of([3718680231, 2078137683]), JSArrayOfint().of([397953838, 2937526108]), JSArrayOfint().of([1191331470, 1162299137]), JSArrayOfint().of([2659507233, 446602818]), JSArrayOfint().of([3391014281, 3570059791]), JSArrayOfint().of([762681690, 1479355828]), JSArrayOfint().of([3213982051, 784318406]), JSArrayOfint().of([121117454, 1057425180]), JSArrayOfint().of([2902532935, 2897063310]), JSArrayOfint().of([1525297076, 2958711413]), JSArrayOfint().of([2204939547, 4018373430]), JSArrayOfint().of([864419686, 3056808908]), JSArrayOfint().of([1665135302, 1550017425]), JSArrayOfint().of([34605572, 302121480]), JSArrayOfint().of([2855876681, 2477435538]), JSArrayOfint().of([1907337442, 3731976665]), JSArrayOfint().of([3356413837, 3335047175]), JSArrayOfint().of([432569650, 3508083044]), JSArrayOfint().of([1232236690, 994658617]), JSArrayOfint().of([3649477295, 1608112451]), JSArrayOfint().of([4072873465, 838005487]), JSArrayOfint().of([3813361883, 2833507243]), JSArrayOfint().of([1541548726, 3109772145]), JSArrayOfint().of([2285146637, 3163064346]), JSArrayOfint().of([2594490409, 1050319442]), JSArrayOfint().of([640532044, 187049624]), JSArrayOfint().of([848165476, 3207738056]), JSArrayOfint().of([2968078973, 1504751866]), JSArrayOfint().of([3910888143, 4075415939]), JSArrayOfint().of([259535646, 1997475644]), JSArrayOfint().of([3588662967, 869651827]), JSArrayOfint().of([2155133469, 4102062138]), JSArrayOfint().of([3197729889, 666812098]), JSArrayOfint().of([3441876615, 3956133139]), JSArrayOfint().of([884860008, 2301899984]), JSArrayOfint().of([1215985040, 843597885]), JSArrayOfint().of([4289406179, 1426063323]), JSArrayOfint().of([2063044596, 2373614325]), JSArrayOfint().of([2431969853, 1687195770]), JSArrayOfint().of([1606565566, 2640273249]), JSArrayOfint().of([538812480, 1025515648]), JSArrayOfint().of([1751635408, 258500797]), JSArrayOfint().of([449868340, 3390708328]), JSArrayOfint().of([2920885313, 3081678466]), JSArrayOfint().of([3033095797, 2108994794]), JSArrayOfint().of([1419385256, 3461633101]), JSArrayOfint().of([2481775931, 2140377974]), JSArrayOfint().of([571320900, 790766216]), JSArrayOfint().of([1678240200, 1667523725]), JSArrayOfint().of([4057666303, 720499171]), JSArrayOfint().of([1941938918, 3430118353]), JSArrayOfint().of([311450148, 2182222408]), JSArrayOfint().of([1077566848, 2051031069]), JSArrayOfint().of([138422288, 1208485920]), JSArrayOfint().of([3277252763, 2512634667]), JSArrayOfint().of([3962796997, 3756846231]), JSArrayOfint().of([3684077739, 1306254155]), JSArrayOfint().of([2707496799, 3231818174]), JSArrayOfint().of([2367456007, 2441973006]), JSArrayOfint().of([1039518074, 3359456756]), JSArrayOfint().of([2546790707, 1536661350]), JSArrayOfint().of([0, 0]), JSArrayOfint().of([3476477059, 4191145755]), JSArrayOfint().of([725976918, 1848322988]), JSArrayOfint().of([1989653484, 3782637253]), JSArrayOfint().of([2187636761, 3867312690]), JSArrayOfint().of([3607013809, 685168255]), JSArrayOfint().of([467171126, 3273333612]), JSArrayOfint().of([3049347959, 1958065646]), JSArrayOfint().of([2937137475, 3199184774]), JSArrayOfint().of([1786240980, 493513397]), JSArrayOfint().of([1354370464, 3931131997]), JSArrayOfint().of([1158827146, 1464157449]), JSArrayOfint().of([4090173691, 955511787]), JSArrayOfint().of([815657056, 2905616576]), JSArrayOfint().of([4012602563, 3304058779]), JSArrayOfint().of([1072022398, 3661578236]), JSArrayOfint().of([1435638954, 3344258377]), JSArrayOfint().of([2725843033, 3684868786]), JSArrayOfint().of([3926091209, 3924486799]), JSArrayOfint().of([1695542474, 1785030025]), JSArrayOfint().of([3132713065, 62569170]), JSArrayOfint().of([795186014, 1244606396]), JSArrayOfint().of([3226396573, 2394996775]), JSArrayOfint().of([3737026977, 1625218655]), JSArrayOfint().of([484469816, 4229700720]), JSArrayOfint().of([4256902887, 1191050707]), JSArrayOfint().of([1297245338, 525159721]), JSArrayOfint().of([2464473145, 1989317234]), JSArrayOfint().of([1972354282, 4202001865]), JSArrayOfint().of([103816716, 906364440]), JSArrayOfint().of([2317654025, 2928314898]), JSArrayOfint().of([3002679417, 1270002418]), JSArrayOfint().of([3865270737, 2246502079]), JSArrayOfint().of([242234908, 2114850360]), JSArrayOfint().of([536372030, 3877576572]), JSArrayOfint().of([1647835076, 1432511125]), JSArrayOfint().of([3572409269, 987026551]), JSArrayOfint().of([2821272141, 2175314074]), JSArrayOfint().of([2529489969, 1385600610]), JSArrayOfint().of([4187699951, 1660549571]), JSArrayOfint().of([3311859351, 2747647283]), JSArrayOfint().of([624275786, 270869908]), JSArrayOfint().of([1509040306, 2874759545]), JSArrayOfint().of([2220142101, 3498345514]), JSArrayOfint().of([1924638692, 3312612053]), JSArrayOfint().of([970317170, 3963173348]), JSArrayOfint().of([1280991640, 374098989]), JSArrayOfint().of([1590311868, 2489212517]), JSArrayOfint().of([2028439024, 2675472637]), JSArrayOfint().of([954062960, 3845667040]), JSArrayOfint().of([2350155269, 2559347722]), JSArrayOfint().of([3519460031, 399626595]), JSArrayOfint().of([2772503383, 3836061102]), JSArrayOfint().of([3796061657, 2716000943]), JSArrayOfint().of([1630533826, 1315004825]), JSArrayOfint().of([3018933627, 1119073270]), JSArrayOfint().of([555066690, 874586500]), JSArrayOfint().of([2626999845, 144481354]), JSArrayOfint().of([519071292, 3994951288]), JSArrayOfint().of([1126322822, 1631798033]), JSArrayOfint().of([3346463891, 2982659899]), JSArrayOfint().of([4239600613, 1341979863]), JSArrayOfint().of([69211144, 604242960]), JSArrayOfint().of([1370622114, 3813757273]), JSArrayOfint().of([2579285807, 630823262]), JSArrayOfint().of([1833944282, 577596841]), JSArrayOfint().of([224934170, 1695354164]), JSArrayOfint().of([4202903017, 2046491343]), JSArrayOfint().of([3753280675, 1776279387]), JSArrayOfint().of([2128059388, 2843639525]), JSArrayOfint().of([608023624, 421799056]), JSArrayOfint().of([1002821494, 4265294828]), JSArrayOfint().of([2872130891, 2594941846]), JSArrayOfint().of([3460223361, 4040085023]), JSArrayOfint().of([294147362, 2568032580]), JSArrayOfint().of([2399963395, 2207223558]), JSArrayOfint().of([1313500060, 72240677]), JSArrayOfint().of([3083948403, 1723316198]), JSArrayOfint().of([3943391435, 3773557643]), JSArrayOfint().of([1023265912, 3241950448]), JSArrayOfint().of([2172436255, 4253122878]), JSArrayOfint().of([2496986677, 1083479146]), JSArrayOfint().of([4159376627, 486012923]), JSArrayOfint().of([3114362735, 414824926]), JSArrayOfint().of([328752934, 2333283148]), JSArrayOfint().of([746429528, 1361849520]), JSArrayOfint().of([3554064571, 97768299]), JSArrayOfint().of([3882573011, 2364008379]), JSArrayOfint().of([1851247580, 963538597]), JSArrayOfint().of([3295605653, 2865022007]), JSArrayOfint().of([51908358, 453182220]), JSArrayOfint().of([1451889580, 3696645701]), JSArrayOfint().of([1142573448, 1581532173]), JSArrayOfint().of([2145361662, 2692710369]), JSArrayOfint().of([2837526351, 2292820382]), JSArrayOfint().of([709722708, 1730816680]), JSArrayOfint().of([3148967275, 180075478]), JSArrayOfint().of([3242648223, 2277622051]), JSArrayOfint().of([1403126438, 4048769873]), JSArrayOfint().of([3702426533, 1927076951]), JSArrayOfint().of([190326550, 1393232684]), JSArrayOfint().of([2644300583, 27106638]), JSArrayOfint().of([1816642008, 728525997]), JSArrayOfint().of([831911266, 2754687428]), JSArrayOfint().of([1955052008, 4084495565]), JSArrayOfint().of([4142074353, 368506623]), JSArrayOfint().of([1175077772, 1279673861]), JSArrayOfint().of([2886280773, 2779557002]), JSArrayOfint().of([2302449423, 3045689630]), JSArrayOfint().of([346047528, 3021214800]), JSArrayOfint().of([3780854495, 3135365539]), JSArrayOfint().of([380653100, 2786465368]), JSArrayOfint().of([986567284, 4147788520]), JSArrayOfint().of([1768935634, 107571641]), JSArrayOfint().of([155725074, 1091111204]), JSArrayOfint().of([1890037216, 3614470365]), JSArrayOfint().of([3067696241, 1874245346]), JSArrayOfint().of([3503208381, 517001319]), JSArrayOfint().of([3980099271, 3605917075]), JSArrayOfint().of([3425622917, 3805072407]), JSArrayOfint().of([1110071172, 1749172757]), JSArrayOfint().of([2561983021, 748197978]), JSArrayOfint().of([2756251221, 3986990250]), JSArrayOfint().of([677218384, 1965566112]), JSArrayOfint().of([1557803448, 2254199917]), JSArrayOfint().of([4170399725, 1811478727]), JSArrayOfint().of([2252645393, 3263596066])]));
    },
    /*whirlpool._C6*/get _C6() {
      return new ufixnum.Register64List.from(JSArrayOfListOfint().of([JSArrayOfint().of([1612234872, 819468312]), JSArrayOfint().of([2351105455, 1176904483]), JSArrayOfint().of([1069973241, 2444805830]), JSArrayOfint().of([2280133487, 3455838440]), JSArrayOfint().of([646401185, 332105607]), JSArrayOfint().of([3669535074, 1829877944]), JSArrayOfint().of([67176453, 34144513]), JSArrayOfint().of([558842478, 2651672399]), JSArrayOfint().of([3627462126, 1822111286]), JSArrayOfint().of([2728810756, 1375708838]), JSArrayOfint().of([1876090557, 3104625362]), JSArrayOfint().of([4092984070, 4144952821]), JSArrayOfint().of([4185517952, 4069947769]), JSArrayOfint().of([2708430798, 3727716207]), JSArrayOfint().of([2123496687, 1064145297]), JSArrayOfint().of([1431480839, 2767737426]), JSArrayOfint().of([2640324605, 3225903200]), JSArrayOfint().of([3401353590, 1698020540]), JSArrayOfint().of([1453042893, 725064603]), JSArrayOfint().of([42861708, 25857678]), JSArrayOfint().of([3064164629, 1540531107]), JSArrayOfint().of([806117436, 409734156]), JSArrayOfint().of([4051435402, 4135877499]), JSArrayOfint().of([3560289761, 1786787125]), JSArrayOfint().of([1948117097, 989142301]), JSArrayOfint().of([2816496455, 3719553248]), JSArrayOfint().of([2077750956, 3005339607]), JSArrayOfint().of([801267437, 2577187522]), JSArrayOfint().of([3090050454, 1547906606]), JSArrayOfint().of([827023994, 2519288651]), JSArrayOfint().of([3758007073, 3781033726]), JSArrayOfint().of([1096253974, 2933217111]), JSArrayOfint().of([1410705473, 717034773]), JSArrayOfint().of([3245842358, 4008212343]), JSArrayOfint().of([3694634475, 1855076151]), JSArrayOfint().of([3018160982, 3617514981]), JSArrayOfint().of([1184861401, 588488607]), JSArrayOfint().of([3891319575, 4246991088]), JSArrayOfint().of([894069375, 2485144138]), JSArrayOfint().of([1339727509, 2839861978]), JSArrayOfint().of([2102983205, 2963429464]), JSArrayOfint().of([63506122, 2412759497]), JSArrayOfint().of([2754172301, 1383868713]), JSArrayOfint().of([671764514, 341445130]), JSArrayOfint().of([4273070415, 2135994801]), JSArrayOfint().of([3131074842, 1573494944]), JSArrayOfint().of([2976612314, 3591662443]), JSArrayOfint().of([780491947, 400131461]), JSArrayOfint().of([3468525939, 1732033981]), JSArrayOfint().of([1767756340, 3129957725]), JSArrayOfint().of([1074823248, 546312208]), JSArrayOfint().of([4160025347, 4110939380]), JSArrayOfint().of([197859008, 2346568651]), JSArrayOfint().of([4164873670, 2094218814]), JSArrayOfint().of([335882257, 170722565]), JSArrayOfint().of([2171019238, 3463997287]), JSArrayOfint().of([3085202259, 3583501540]), JSArrayOfint().of([2619811259, 1308763943]), JSArrayOfint().of([423703128, 2188591425]), JSArrayOfint().of([378219677, 195529611]), JSArrayOfint().of([2795983105, 1408673703]), JSArrayOfint().of([3917336468, 4206001533]), JSArrayOfint().of([1855315195, 927569301]), JSArrayOfint().of([1205374623, 2908149976]), JSArrayOfint().of([3422260016, 3950050299]), JSArrayOfint().of([2683183985, 3251498734]), JSArrayOfint().of([3984377745, 4173036668]), JSArrayOfint().of([2238060515, 3429983846]), JSArrayOfint().of([1407035022, 2809912797]), JSArrayOfint().of([1545058379, 783226647]), JSArrayOfint().of([21430854, 2386904903]), JSArrayOfint().of([1117684956, 555392670]), JSArrayOfint().of([264904389, 2312424138]), JSArrayOfint().of([3022878105, 1515728173]), JSArrayOfint().of([3334443385, 1664008127]), JSArrayOfint().of([470235163, 239011591]), JSArrayOfint().of([2393702691, 1202498989]), JSArrayOfint().of([1968892463, 3031456346]), JSArrayOfint().of([914582709, 468681603]), JSArrayOfint().of([3425928703, 1723216691]), JSArrayOfint().of([2439200754, 3327943523]), JSArrayOfint().of([134352906, 68289026]), JSArrayOfint().of([2460629304, 1234414250]), JSArrayOfint().of([3648106408, 3806228849]), JSArrayOfint().of([130551503, 2378614984]), JSArrayOfint().of([1679411325, 852564249]), JSArrayOfint().of([961114736, 2453358921]), JSArrayOfint().of([1138329242, 2942294489]), JSArrayOfint().of([4025664285, 4180800242]), JSArrayOfint().of([2883799880, 3685278691]), JSArrayOfint().of([1901847082, 3065600859]), JSArrayOfint().of([445133970, 230459528]), JSArrayOfint().of([1385866440, 691968666]), JSArrayOfint().of([2552638910, 1275799078]), JSArrayOfint().of([3358756346, 1690251826]), JSArrayOfint().of([4205898058, 2103029936]), JSArrayOfint().of([2213092202, 3488803305]), JSArrayOfint().of([1007646771, 511119119]), JSArrayOfint().of([1943398054, 3073627605]), JSArrayOfint().of([981497018, 502562944]), JSArrayOfint().of([3267271036, 1629994686]), JSArrayOfint().of([332211934, 2280377805]), JSArrayOfint().of([3493117412, 1753822260]), JSArrayOfint().of([1028160117, 2419214408]), JSArrayOfint().of([3690965796, 3813998591]), JSArrayOfint().of([4118476687, 4102912634]), JSArrayOfint().of([2056320234, 1030000784]), JSArrayOfint().of([1633665598, 3197984607]), JSArrayOfint().of([2149588384, 1077747744]), JSArrayOfint().of([3177736149, 3490670696]), JSArrayOfint().of([1746587762, 885660186]), JSArrayOfint().of([2192447788, 1102556846]), JSArrayOfint().of([3937716574, 1971172532]), JSArrayOfint().of([1297390105, 2832094292]), JSArrayOfint().of([1989405925, 998216595]), JSArrayOfint().of([2283933098, 1143939618]), JSArrayOfint().of([2372143081, 3361956964]), JSArrayOfint().of([3824278290, 4281004529]), JSArrayOfint().of([3514023842, 3872158579]), JSArrayOfint().of([1209176154, 612504082]), JSArrayOfint().of([490748509, 2155495488]), JSArrayOfint().of([537411624, 273156104]), JSArrayOfint().of([734222056, 2610283459]), JSArrayOfint().of([2548839291, 3319786732]), JSArrayOfint().of([1272682128, 2874006491]), JSArrayOfint().of([3198247199, 1606459809]), JSArrayOfint().of([244128899, 126979469]), JSArrayOfint().of([4097701321, 2059943229]), JSArrayOfint().of([1721224433, 861640599]), JSArrayOfint().of([0, 0]), JSArrayOfint().of([466564820, 2214186959]), JSArrayOfint().of([2888516999, 1450060587]), JSArrayOfint().of([3312883635, 3974198902]), JSArrayOfint().of([847406256, 434537090]), JSArrayOfint().of([2144796329, 2972243670]), JSArrayOfint().of([1813764215, 918756123]), JSArrayOfint().of([4004888923, 2004137397]), JSArrayOfint().of([2259620137, 1136570287]), JSArrayOfint().of([3043653599, 3558697578]), JSArrayOfint().of([1565571597, 2699710544]), JSArrayOfint().of([155521612, 2320975173]), JSArrayOfint().of([3958623000, 4214813683]), JSArrayOfint().of([3224411632, 1621962800]), JSArrayOfint().of([2616142708, 3284463599]), JSArrayOfint().of([4232046019, 2128232255]), JSArrayOfint().of([1230344732, 2865190229]), JSArrayOfint().of([2996992272, 1507566242]), JSArrayOfint().of([2414478181, 3387550442]), JSArrayOfint().of([2305101804, 3395970405]), JSArrayOfint().of([3535452520, 1761852090]), JSArrayOfint().of([3157222803, 1581920047]), JSArrayOfint().of([666914535, 2643378368]), JSArrayOfint().of([1608433281, 2707480286]), JSArrayOfint().of([1880940652, 956046364]), JSArrayOfint().of([3556621102, 3880189437]), JSArrayOfint().of([692933220, 2585742669]), JSArrayOfint().of([1922229472, 964072082]), JSArrayOfint().of([3379924924, 3942282613]), JSArrayOfint().of([403058718, 204867078]), JSArrayOfint().of([311043224, 162433674]), JSArrayOfint().of([4071815488, 2035004082]), JSArrayOfint().of([3219546969, 3515213542]), JSArrayOfint().of([940470326, 478023182]), JSArrayOfint().of([2082469987, 1055334175]), JSArrayOfint().of([2506242039, 3293930082]), JSArrayOfint().of([2010443427, 3040531668]), JSArrayOfint().of([2594711858, 1300342952]), JSArrayOfint().of([1654047988, 827496086]), JSArrayOfint().of([3287915322, 4016241145]), JSArrayOfint().of([868574966, 2544092613]), JSArrayOfint().of([2485466545, 1242572069]), JSArrayOfint().of([2035937824, 2997573977]), JSArrayOfint().of([713315502, 365986948]), JSArrayOfint().of([3581065127, 3838145138]), JSArrayOfint().of([3828995549, 1928083769]), JSArrayOfint().of([759978593, 2551598156]), JSArrayOfint().of([1700710971, 3163840094]), JSArrayOfint().of([4252559237, 4036982904]), JSArrayOfint().of([3761823192, 1894070328]), JSArrayOfint().of([176952454, 93883532]), JSArrayOfint().of([1674692274, 3206009297]), JSArrayOfint().of([2930065675, 1474602405]), JSArrayOfint().of([2950841165, 3651265250]), JSArrayOfint().of([2573283320, 3259916641]), JSArrayOfint().of([4138987845, 2067968947]), JSArrayOfint().of([2216760741, 1110712609]), JSArrayOfint().of([1251775702, 621321372]), JSArrayOfint().of([2015293542, 1022238238]), JSArrayOfint().of([289612370, 2254521155]), JSArrayOfint().of([1002927868, 2477901767]), JSArrayOfint().of([3623662379, 3847224572]), JSArrayOfint().of([268705812, 136578052]), JSArrayOfint().of([1498526216, 2732806481]), JSArrayOfint().of([1587133639, 790993305]), JSArrayOfint().of([2842513348, 3659689325]), JSArrayOfint().of([873293881, 442830093]), JSArrayOfint().of([3489301301, 3917085434]), JSArrayOfint().of([1541387908, 2741624799]), JSArrayOfint().of([3850295195, 4238966398]), JSArrayOfint().of([2418294196, 1209607204]), JSArrayOfint().of([3963340247, 1996372795]), JSArrayOfint().of([2527801661, 1268427691]), JSArrayOfint().of([533610193, 2180042446]), JSArrayOfint().of([1141999701, 580456721]), JSArrayOfint().of([110038153, 58953615]), JSArrayOfint().of([625887851, 2617527886]), JSArrayOfint().of([3870806353, 1936111543]), JSArrayOfint().of([2347436896, 3420515307]), JSArrayOfint().of([4030528972, 2025929788]), JSArrayOfint().of([1048673471, 536707457]), JSArrayOfint().of([1788138750, 893424788]), JSArrayOfint().of([4227328780, 4078761975]), JSArrayOfint().of([3736707431, 1863891385]), JSArrayOfint().of([1276352607, 646648595]), JSArrayOfint().of([2955705756, 1481714732]), JSArrayOfint().of([1809045176, 3137721299]), JSArrayOfint().of([3152505692, 3549226983]), JSArrayOfint().of([2775472075, 3694751342]), JSArrayOfint().of([935620339, 2510996676]), JSArrayOfint().of([201529359, 102433539]), JSArrayOfint().of([1163299347, 2900121174]), JSArrayOfint().of([222566985, 2287879236]), JSArrayOfint().of([3783253918, 4271931263]), JSArrayOfint().of([2661884215, 1334356393]), JSArrayOfint().of([2821344642, 1416047146]), JSArrayOfint().of([3602624877, 1795865531]), JSArrayOfint().of([599869154, 2676474305]), JSArrayOfint().of([1364435458, 2800833363]), JSArrayOfint().of([1474080395, 2775768284]), JSArrayOfint().of([738940967, 374541067]), JSArrayOfint().of([1318952147, 654417309]), JSArrayOfint().of([2909554625, 3626724460]), JSArrayOfint().of([3291583989, 1654927665]), JSArrayOfint().of([3446966201, 3908269172]), JSArrayOfint().of([4294370057, 4044748534]), JSArrayOfint().of([88476227, 2353808966]), JSArrayOfint().of([2326530342, 1168485548]), JSArrayOfint().of([512310423, 263555465]), JSArrayOfint().of([1343529028, 682890260]), JSArrayOfint().of([2749455170, 3753566689]), JSArrayOfint().of([1477881934, 749082134]), JSArrayOfint().of([3896167890, 1962359354]), JSArrayOfint().of([3110694864, 3523635561]), JSArrayOfint().of([604588077, 306252041]), JSArrayOfint().of([3715147693, 3772215408]), JSArrayOfint().of([3803634004, 1903146678]), JSArrayOfint().of([1741737655, 3172913360]), JSArrayOfint().of([2481798014, 3352751597]), JSArrayOfint().of([399257307, 2246233292]), JSArrayOfint().of([356657751, 2221425218]), JSArrayOfint().of([1519957186, 757897368]), JSArrayOfint().of([2862893326, 1441637540]), JSArrayOfint().of([2686999944, 1349855272]), JSArrayOfint().of([1834801713, 3095813212]), JSArrayOfint().of([3354956607, 3983276280]), JSArrayOfint().of([579224740, 297961094])]));
    },
    /*whirlpool._C7*/get _C7() {
      return new ufixnum.Register64List.from(JSArrayOfListOfint().of([JSArrayOfint().of([408950976, 2016466968]), JSArrayOfint().of([596386565, 2940610083]), JSArrayOfint().of([3326068350, 4187076806]), JSArrayOfint().of([3901220883, 1875770344]), JSArrayOfint().of([2267449164, 2702429063]), JSArrayOfint().of([3101341865, 1651315128]), JSArrayOfint().of([17039624, 84019457]), JSArrayOfint().of([1327583042, 1855851855]), JSArrayOfint().of([920139437, 4000095030]), JSArrayOfint().of([2795677273, 72482726]), JSArrayOfint().of([3530543838, 3183021266]), JSArrayOfint().of([4126406139, 116854517]), JSArrayOfint().of([2046392815, 2163381881]), JSArrayOfint().of([1872850783, 3470667887]), JSArrayOfint().of([2440991228, 4013911441]), JSArrayOfint().of([1381323434, 128251986]), JSArrayOfint().of([1620926503, 4257236832]), JSArrayOfint().of([3167403145, 1986344380]), JSArrayOfint().of([2606144428, 3442161563]), JSArrayOfint().of([2382532100, 2348911246]), JSArrayOfint().of([2746655601, 358339235]), JSArrayOfint().of([204475488, 1008233484]), JSArrayOfint().of([2079423487, 2331411579]), JSArrayOfint().of([903099829, 3781853237]), JSArrayOfint().of([494149096, 1765471517]), JSArrayOfint().of([3769098323, 1205711840]), JSArrayOfint().of([3615217654, 2897420759]), JSArrayOfint().of([3257909854, 3986267330]), JSArrayOfint().of([783822445, 2522628910]), JSArrayOfint().of([1261521762, 2056661323]), JSArrayOfint().of([4276092579, 568417790]), JSArrayOfint().of([1463900034, 380556631]), JSArrayOfint().of([357832104, 1093319957]), JSArrayOfint().of([2009167775, 3069110391]), JSArrayOfint().of([937179045, 3949892151]), JSArrayOfint().of([3853772155, 1456971493]), JSArrayOfint().of([2672205708, 3642954655]), JSArrayOfint().of([4041732307, 402465776]), JSArrayOfint().of([1245006442, 2140414026]), JSArrayOfint().of([3662666398, 2510898394]), JSArrayOfint().of([1484609786, 632332888]), JSArrayOfint().of([3372468486, 3398422473]), JSArrayOfint().of([698624341, 2370993193]), JSArrayOfint().of([170396240, 571759114]), JSArrayOfint().of([2986258913, 1333743793]), JSArrayOfint().of([2696585321, 442354080]), JSArrayOfint().of([1806789503, 3671463019]), JSArrayOfint().of([2234418524, 2870466949]), JSArrayOfint().of([3184442753, 1936145597]), JSArrayOfint().of([1567186386, 884641629]), JSArrayOfint().of([272633984, 1344311312]), JSArrayOfint().of([4109890803, 66390004]), JSArrayOfint().of([3406547734, 3230391755]), JSArrayOfint().of([1056456429, 3330069310]), JSArrayOfint().of([85198120, 285879557]), JSArrayOfint().of([1736533791, 3872290919]), JSArrayOfint().of([3837256819, 1406506980]), JSArrayOfint().of([664545061, 3142451751]), JSArrayOfint().of([1092174130, 1484944193]), JSArrayOfint().of([2333510444, 2634786699]), JSArrayOfint().of([2812716881, 22279847]), JSArrayOfint().of([2112454095, 2499457661]), JSArrayOfint().of([2507052508, 4214704533]), JSArrayOfint().of([3628587150, 2678937304]), JSArrayOfint().of([4224449419, 820736251]), JSArrayOfint().of([4003458595, 1908526574]), JSArrayOfint().of([2095938759, 2448997244]), JSArrayOfint().of([1720018455, 3821826406]), JSArrayOfint().of([3713260966, 2393340893]), JSArrayOfint().of([391911352, 1261350679]), JSArrayOfint().of([1191266050, 1183728967]), JSArrayOfint().of([2655166084, 3693157022]), JSArrayOfint().of([3390032414, 3314144458]), JSArrayOfint().of([766782837, 2572834861]), JSArrayOfint().of([3217473425, 2036543167]), JSArrayOfint().of([119277368, 453918471]), JSArrayOfint().of([2911808769, 591899821]), JSArrayOfint().of([1517640426, 800370778]), JSArrayOfint().of([2201387884, 3038506883]), JSArrayOfint().of([869020549, 4284921395]), JSArrayOfint().of([1670472511, 4073086051]), JSArrayOfint().of([34079248, 168038914]), JSArrayOfint().of([2861738553, 944346026]), JSArrayOfint().of([1910075823, 2833440369]), JSArrayOfint().of([3355953166, 3482175176]), JSArrayOfint().of([425990600, 2100482329]), JSArrayOfint().of([1228491122, 1888631625]), JSArrayOfint().of([3645102470, 2595184601]), JSArrayOfint().of([4075811523, 502870514]), JSArrayOfint().of([3819692875, 1222355171]), JSArrayOfint().of([1534155746, 716618075]), JSArrayOfint().of([2283440180, 2450373768]), JSArrayOfint().of([2589104804, 3358146202]), JSArrayOfint().of([647505453, 3192654630]), JSArrayOfint().of([851980941, 4200906546]), JSArrayOfint().of([2969219305, 1249728944]), JSArrayOfint().of([3917736219, 1792013033]), JSArrayOfint().of([255594360, 857634575]), JSArrayOfint().of([3581138406, 2797024213]), JSArrayOfint().of([2151317620, 3122525312]), JSArrayOfint().of([3200433817, 2086741950]), JSArrayOfint().of([3440626982, 3733449677]), JSArrayOfint().of([886060221, 3832056116]), JSArrayOfint().of([1211975802, 1972384328]), JSArrayOfint().of([4292607915, 618878207]), JSArrayOfint().of([2062908151, 2415168890]), JSArrayOfint().of([2423951604, 3929891984]), JSArrayOfint().of([1600217026, 1052679519]), JSArrayOfint().of([545267741, 2688564512]), JSArrayOfint().of([1757243495, 3587182440]), JSArrayOfint().of([443030224, 1916062234]), JSArrayOfint().of([2927799833, 742504366]), JSArrayOfint().of([3035280585, 1584758196]), JSArrayOfint().of([1414354074, 430493268]), JSArrayOfint().of([2474021868, 3845881747]), JSArrayOfint().of([579346957, 2856595234]), JSArrayOfint().of([1686987783, 3922223972]), JSArrayOfint().of([4058247643, 318712561]), JSArrayOfint().of([1943106495, 2733034611]), JSArrayOfint().of([306713232, 1512342034]), JSArrayOfint().of([1075658810, 1568700992]), JSArrayOfint().of([136316992, 672155656]), JSArrayOfint().of([3274425174, 3902510531]), JSArrayOfint().of([3969379379, 2076565484]), JSArrayOfint().of([3679181718, 2427145691]), JSArrayOfint().of([2713624929, 526368929]), JSArrayOfint().of([2366541084, 2198311309]), JSArrayOfint().of([1039416821, 3380267069]), JSArrayOfint().of([2540083148, 4046674839]), JSArrayOfint().of([0, 0]), JSArrayOfint().of([3474706230, 3565418959]), JSArrayOfint().of([732703557, 2270588459]), JSArrayOfint().of([1992652439, 3018645878]), JSArrayOfint().of([2184348260, 2954487426]), JSArrayOfint().of([3598702334, 2846959830]), JSArrayOfint().of([460069848, 2000077595]), JSArrayOfint().of([3052320193, 1534555317]), JSArrayOfint().of([2944839441, 692305583]), JSArrayOfint().of([1790274167, 3755220330]), JSArrayOfint().of([1348292794, 228649552]), JSArrayOfint().of([1158235410, 1284134725]), JSArrayOfint().of([4092326859, 419117299]), JSArrayOfint().of([817901725, 4032867632]), JSArrayOfint().of([4019973931, 1958986991]), JSArrayOfint().of([1073496037, 3279870527]), JSArrayOfint().of([1430869394, 480954197]), JSArrayOfint().of([2729615993, 274324386]), JSArrayOfint().of([3935300099, 1707731434]), JSArrayOfint().of([1703503119, 3972688485]), JSArrayOfint().of([3134372537, 1751712698]), JSArrayOfint().of([800862053, 2472430127]), JSArrayOfint().of([3223830606, 3885862592]), JSArrayOfint().of([3730824894, 2174836958]), JSArrayOfint().of([477109472, 1815673884]), JSArrayOfint().of([4258528699, 786908925]), JSArrayOfint().of([1294552402, 1687822157]), JSArrayOfint().of([2456982244, 3761862290]), JSArrayOfint().of([1976137103, 3169516149]), JSArrayOfint().of([102237744, 504116742]), JSArrayOfint().of([2316470820, 2550771338]), JSArrayOfint().of([3002249977, 1081691058]), JSArrayOfint().of([3871336035, 1506903526]), JSArrayOfint().of([238554736, 907836942]), JSArrayOfint().of([528228344, 1665066783]), JSArrayOfint().of([1653957175, 4156839266]), JSArrayOfint().of([3564623086, 2746563284]), JSArrayOfint().of([2828707881, 843940264]), JSArrayOfint().of([2523043524, 4096873110]), JSArrayOfint().of([4190370203, 988766969]), JSArrayOfint().of([3308504422, 4137132997]), JSArrayOfint().of([630465845, 2974421029]), JSArrayOfint().of([1501125106, 548580185]), JSArrayOfint().of([2217378900, 2920665220]), JSArrayOfint().of([1926591159, 2816787826]), JSArrayOfint().of([971258325, 3715296313]), JSArrayOfint().of([1278037082, 1637357132]), JSArrayOfint().of([1583701706, 1002214494]), JSArrayOfint().of([2029877479, 2247139192]), JSArrayOfint().of([954218717, 3631277368]), JSArrayOfint().of([2349501460, 2248513676]), JSArrayOfint().of([3512979910, 2998867921]), JSArrayOfint().of([2779686209, 190309541]), JSArrayOfint().of([3803177539, 1306108386]), JSArrayOfint().of([1637441839, 4173483617]), JSArrayOfint().of([3019289585, 1165705907]), JSArrayOfint().of([562307349, 2772579361]), JSArrayOfint().of([2622135444, 3592751260]), JSArrayOfint().of([511188720, 1715269150]), JSArrayOfint().of([1125204770, 1384538435]), JSArrayOfint().of([3342583670, 4237537735]), JSArrayOfint().of([4242013363, 736448508]), JSArrayOfint().of([68158496, 336077828]), JSArrayOfint().of([1364808114, 144892753]), JSArrayOfint().of([2573113788, 3341755801]), JSArrayOfint().of([1839820111, 3302629997]), JSArrayOfint().of([221515112, 958031117]), JSArrayOfint().of([4207934083, 904493562]), JSArrayOfint().of([3747340214, 2225301983]), JSArrayOfint().of([2128969431, 2617026942]), JSArrayOfint().of([613426237, 3024623908]), JSArrayOfint().of([1005337541, 3614899771]), JSArrayOfint().of([2878778161, 1028364971]), JSArrayOfint().of([3458190910, 3514953934]), JSArrayOfint().of([289673608, 1428330769]), JSArrayOfint().of([2399571724, 2298708879]), JSArrayOfint().of([1311067722, 1805386830]), JSArrayOfint().of([3085350865, 1366517431]), JSArrayOfint().of([3951815435, 1623974123]), JSArrayOfint().of([1022377213, 3430465852]), JSArrayOfint().of([2168357244, 3206544769]), JSArrayOfint().of([2490012884, 4264902804]), JSArrayOfint().of([4160485355, 217259255]), JSArrayOfint().of([3118381473, 1735334073]), JSArrayOfint().of([323752856, 1596361491]), JSArrayOfint().of([749743229, 2623033644]), JSArrayOfint().of([3547059158, 3099264467]), JSArrayOfint().of([3887851371, 1557368039]), JSArrayOfint().of([1856335447, 3420207470]), JSArrayOfint().of([3291989102, 4086672068]), JSArrayOfint().of([51118872, 252058371]), JSArrayOfint().of([1447384714, 330095702]), JSArrayOfint().of([1141720090, 1233673796]), JSArrayOfint().of([2145484767, 2667487359]), JSArrayOfint().of([2845747489, 927959209]), JSArrayOfint().of([715663949, 2186569514]), JSArrayOfint().of([3151412145, 1835731643]), JSArrayOfint().of([3240345926, 3802105793]), JSArrayOfint().of([1397838754, 44495187]), JSArrayOfint().of([3696745646, 2342875868]), JSArrayOfint().of([187435864, 655774475]), JSArrayOfint().of([2639175068, 3542548893]), JSArrayOfint().of([1823304775, 3252169580]), JSArrayOfint().of([834941333, 4116882481]), JSArrayOfint().of([1959621767, 3119051636]), JSArrayOfint().of([4143970019, 166794742]), JSArrayOfint().of([1174750730, 1133268038]), JSArrayOfint().of([2894769161, 642098604]), JSArrayOfint().of([2300479804, 2534389129]), JSArrayOfint().of([340792480, 1143518228]), JSArrayOfint().of([3785613659, 1121958625]), JSArrayOfint().of([374871728, 1311548950]), JSArrayOfint().of([988297933, 3530880826]), JSArrayOfint().of([1773758831, 3503425129]), JSArrayOfint().of([153356616, 756171017]), JSArrayOfint().of([1893560487, 2917193584]), JSArrayOfint().of([3068311257, 1416720310]), JSArrayOfint().of([3496464590, 3082624720]), JSArrayOfint().of([3985894715, 2127025901]), JSArrayOfint().of([3424111662, 3682984652]), JSArrayOfint().of([1108689450, 1468295234]), JSArrayOfint().of([2556074164, 3257740440]), JSArrayOfint().of([2762646601, 240512420]), JSArrayOfint().of([681584733, 2286974248]), JSArrayOfint().of([1550671066, 834176604]), JSArrayOfint().of([4173854867, 1072524280]), JSArrayOfint().of([2250409540, 2752627334])]));
    },
    /*whirlpool._rc*/get _rc() {
      return new ufixnum.Register64List.from(JSArrayOfListOfint().of([JSArrayOfint().of([0, 0]), JSArrayOfint().of([404997864, 2276983119]), JSArrayOfint().of([916902645, 2037354834]), JSArrayOfint().of([1622973326, 2735504181]), JSArrayOfint().of([501274562, 776732247]), JSArrayOfint().of([360134629, 2683325146]), JSArrayOfint().of([1489578250, 2980080517]), JSArrayOfint().of([3176993012, 3409839463]), JSArrayOfint().of([3827777931, 2810025432]), JSArrayOfint().of([4226710630, 3709290398]), JSArrayOfint().of([3391995655, 2908390195])]));
    }
  });
  const _a$ = dart.privateName(tiger, "_a");
  const _b$ = dart.privateName(tiger, "_b");
  const _c = dart.privateName(tiger, "_c");
  const _byteCount$ = dart.privateName(tiger, "_byteCount");
  const _wordBuffer$0 = dart.privateName(tiger, "_wordBuffer");
  const _wordBufferOffset$0 = dart.privateName(tiger, "_wordBufferOffset");
  const _buffer$0 = dart.privateName(tiger, "_buffer");
  const _bufferOffset = dart.privateName(tiger, "_bufferOffset");
  const _finish$ = dart.privateName(tiger, "_finish");
  const _processWord$0 = dart.privateName(tiger, "_processWord");
  const _processBlock$0 = dart.privateName(tiger, "_processBlock");
  const _roundABC = dart.privateName(tiger, "_roundABC");
  const _roundBCA = dart.privateName(tiger, "_roundBCA");
  const _roundCAB = dart.privateName(tiger, "_roundCAB");
  const _keySchedule = dart.privateName(tiger, "_keySchedule");
  const _processLength$0 = dart.privateName(tiger, "_processLength");
  const algorithmName$3 = dart.privateName(tiger, "TigerDigest.algorithmName");
  const digestSize$0 = dart.privateName(tiger, "TigerDigest.digestSize");
  tiger.TigerDigest = class TigerDigest extends base_digest.BaseDigest {
    get algorithmName() {
      return this[algorithmName$3];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$0];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    reset() {
      this[_a$].set(19088743, 2309737967);
      this[_b$].set(4275878552, 1985229328);
      this[_c].set(4036404660, 3283280263);
      this[_bufferOffset] = 0;
      this[_buffer$0].fillRange(0, this[_buffer$0].length, 0);
      this[_wordBufferOffset$0] = 0;
      this[_wordBuffer$0][$fillRange](0, this[_wordBuffer$0][$length], 0);
      this[_byteCount$].set(0);
    }
    doFinal(out, outOff) {
      this[_finish$]();
      this[_a$].pack(out, outOff, typed_data.Endian.little);
      this[_b$].pack(out, dart.notNull(outOff) + 8, typed_data.Endian.little);
      this[_c].pack(out, dart.notNull(outOff) + 16, typed_data.Endian.little);
      this.reset();
      return 24;
    }
    updateByte(inp) {
      let t3;
      this[_wordBuffer$0][$_set]((t3 = this[_wordBufferOffset$0], this[_wordBufferOffset$0] = dart.notNull(t3) + 1, t3), inp);
      if (this[_wordBufferOffset$0] == this[_wordBuffer$0][$length]) {
        this[_processWord$0](this[_wordBuffer$0], 0);
      }
      this[_byteCount$].sum(1);
    }
    update(inp, inpOff, len) {
      while (this[_wordBufferOffset$0] !== 0 && dart.notNull(len) > 0) {
        this.updateByte(inp[$_get](inpOff));
        inpOff = dart.notNull(inpOff) + 1;
        len = dart.notNull(len) - 1;
      }
      while (dart.notNull(len) > 8) {
        this[_processWord$0](inp, inpOff);
        inpOff = dart.notNull(inpOff) + 8;
        len = dart.notNull(len) - 8;
        this[_byteCount$].sum(8);
      }
      while (dart.notNull(len) > 0) {
        this.updateByte(inp[$_get](inpOff));
        inpOff = dart.notNull(inpOff) + 1;
        len = dart.notNull(len) - 1;
      }
    }
    [_processWord$0](b, off) {
      let t3;
      this[_buffer$0]._get((t3 = this[_bufferOffset], this[_bufferOffset] = dart.notNull(t3) + 1, t3)).unpack(b, off, typed_data.Endian.little);
      if (this[_bufferOffset] == this[_buffer$0].length) {
        this[_processBlock$0]();
      }
      this[_wordBufferOffset$0] = 0;
    }
    [_processBlock$0]() {
      let aa = new ufixnum.Register64.new(this[_a$]);
      let bb = new ufixnum.Register64.new(this[_b$]);
      let cc = new ufixnum.Register64.new(this[_c]);
      this[_roundABC](this[_buffer$0]._get(0), 5);
      this[_roundBCA](this[_buffer$0]._get(1), 5);
      this[_roundCAB](this[_buffer$0]._get(2), 5);
      this[_roundABC](this[_buffer$0]._get(3), 5);
      this[_roundBCA](this[_buffer$0]._get(4), 5);
      this[_roundCAB](this[_buffer$0]._get(5), 5);
      this[_roundABC](this[_buffer$0]._get(6), 5);
      this[_roundBCA](this[_buffer$0]._get(7), 5);
      this[_keySchedule]();
      this[_roundCAB](this[_buffer$0]._get(0), 7);
      this[_roundABC](this[_buffer$0]._get(1), 7);
      this[_roundBCA](this[_buffer$0]._get(2), 7);
      this[_roundCAB](this[_buffer$0]._get(3), 7);
      this[_roundABC](this[_buffer$0]._get(4), 7);
      this[_roundBCA](this[_buffer$0]._get(5), 7);
      this[_roundCAB](this[_buffer$0]._get(6), 7);
      this[_roundABC](this[_buffer$0]._get(7), 7);
      this[_keySchedule]();
      this[_roundBCA](this[_buffer$0]._get(0), 9);
      this[_roundCAB](this[_buffer$0]._get(1), 9);
      this[_roundABC](this[_buffer$0]._get(2), 9);
      this[_roundBCA](this[_buffer$0]._get(3), 9);
      this[_roundCAB](this[_buffer$0]._get(4), 9);
      this[_roundABC](this[_buffer$0]._get(5), 9);
      this[_roundBCA](this[_buffer$0]._get(6), 9);
      this[_roundCAB](this[_buffer$0]._get(7), 9);
      this[_a$].xor(aa);
      this[_b$].sub(bb);
      this[_c].sum(cc);
      this[_bufferOffset] = 0;
      this[_buffer$0].fillRange(0, this[_buffer$0].length, 0);
    }
    [_processLength$0](bitLength) {
      this[_buffer$0]._get(7).set(bitLength);
    }
    [_finish$]() {
      let t3;
      let bitLength = (t3 = new ufixnum.Register64.new(this[_byteCount$]), t3.shiftl(3), t3);
      this.updateByte(1);
      while (this[_wordBufferOffset$0] !== 0) {
        this.updateByte(0);
      }
      this[_processLength$0](bitLength);
      this[_processBlock$0]();
    }
    [_keySchedule]() {
      let t3, t3$, t3$0, t3$1, t3$2, t3$3;
      let r = new ufixnum.Register64.new();
      this[_buffer$0]._get(0).sub((t3 = r, t3.set(this[_buffer$0]._get(7)), t3.xor(tiger.TigerDigest._KEY_MASK_0), t3));
      this[_buffer$0]._get(1).xor(this[_buffer$0]._get(0));
      this[_buffer$0]._get(2).sum(this[_buffer$0]._get(1));
      this[_buffer$0]._get(3).sub((t3$ = r, t3$.set(this[_buffer$0]._get(1)), t3$.not(), t3$.shiftl(19), t3$.xor(this[_buffer$0]._get(2)), t3$));
      this[_buffer$0]._get(4).xor(this[_buffer$0]._get(3));
      this[_buffer$0]._get(5).sum(this[_buffer$0]._get(4));
      this[_buffer$0]._get(6).sub((t3$0 = r, t3$0.set(this[_buffer$0]._get(4)), t3$0.not(), t3$0.shiftr(23), t3$0.xor(this[_buffer$0]._get(5)), t3$0));
      this[_buffer$0]._get(7).xor(this[_buffer$0]._get(6));
      this[_buffer$0]._get(0).sum(this[_buffer$0]._get(7));
      this[_buffer$0]._get(1).sub((t3$1 = r, t3$1.set(this[_buffer$0]._get(7)), t3$1.not(), t3$1.shiftl(19), t3$1.xor(this[_buffer$0]._get(0)), t3$1));
      this[_buffer$0]._get(2).xor(this[_buffer$0]._get(1));
      this[_buffer$0]._get(3).sum(this[_buffer$0]._get(2));
      this[_buffer$0]._get(4).sub((t3$2 = r, t3$2.set(this[_buffer$0]._get(2)), t3$2.not(), t3$2.shiftr(23), t3$2.xor(this[_buffer$0]._get(3)), t3$2));
      this[_buffer$0]._get(5).xor(this[_buffer$0]._get(4));
      this[_buffer$0]._get(6).sum(this[_buffer$0]._get(5));
      this[_buffer$0]._get(7).sub((t3$3 = r, t3$3.set(this[_buffer$0]._get(6)), t3$3.xor(tiger.TigerDigest._KEY_MASK_7), t3$3));
    }
    [_roundABC](x, mul) {
      let t3, t3$;
      let r = new ufixnum.Register64.new();
      let c = _native_typed_data.NativeUint8List.new(8);
      this[_c].xor(x);
      this[_c].pack(c, 0, typed_data.Endian.little);
      this[_a$].sub((t3 = r, t3.set(tiger._t1[$_get](c[$_get](0))), t3.xor(tiger._t2[$_get](c[$_get](2))), t3.xor(tiger._t3[$_get](c[$_get](4))), t3.xor(tiger._t4[$_get](c[$_get](6))), t3));
      this[_b$].sum((t3$ = r, t3$.set(tiger._t4[$_get](c[$_get](1))), t3$.xor(tiger._t3[$_get](c[$_get](3))), t3$.xor(tiger._t2[$_get](c[$_get](5))), t3$.xor(tiger._t1[$_get](c[$_get](7))), t3$));
      this[_b$].mul(mul);
    }
    [_roundBCA](x, mul) {
      let t3, t3$;
      let r = new ufixnum.Register64.new();
      let a = _native_typed_data.NativeUint8List.new(8);
      this[_a$].xor(x);
      this[_a$].pack(a, 0, typed_data.Endian.little);
      this[_b$].sub((t3 = r, t3.set(tiger._t1[$_get](a[$_get](0))), t3.xor(tiger._t2[$_get](a[$_get](2))), t3.xor(tiger._t3[$_get](a[$_get](4))), t3.xor(tiger._t4[$_get](a[$_get](6))), t3));
      this[_c].sum((t3$ = r, t3$.set(tiger._t4[$_get](a[$_get](1))), t3$.xor(tiger._t3[$_get](a[$_get](3))), t3$.xor(tiger._t2[$_get](a[$_get](5))), t3$.xor(tiger._t1[$_get](a[$_get](7))), t3$));
      this[_c].mul(mul);
    }
    [_roundCAB](x, mul) {
      let t3, t3$;
      let r = new ufixnum.Register64.new();
      let b = _native_typed_data.NativeUint8List.new(8);
      this[_b$].xor(x);
      this[_b$].pack(b, 0, typed_data.Endian.little);
      this[_c].sub((t3 = r, t3.set(tiger._t1[$_get](b[$_get](0))), t3.xor(tiger._t2[$_get](b[$_get](2))), t3.xor(tiger._t3[$_get](b[$_get](4))), t3.xor(tiger._t4[$_get](b[$_get](6))), t3));
      this[_a$].sum((t3$ = r, t3$.set(tiger._t4[$_get](b[$_get](1))), t3$.xor(tiger._t3[$_get](b[$_get](3))), t3$.xor(tiger._t2[$_get](b[$_get](5))), t3$.xor(tiger._t1[$_get](b[$_get](7))), t3$));
      this[_a$].mul(mul);
    }
  };
  (tiger.TigerDigest.new = function() {
    this[_a$] = new ufixnum.Register64.new();
    this[_b$] = new ufixnum.Register64.new();
    this[_c] = new ufixnum.Register64.new();
    this[_byteCount$] = new ufixnum.Register64.new();
    this[_wordBuffer$0] = _native_typed_data.NativeUint8List.new(8);
    this[_wordBufferOffset$0] = 0;
    this[_buffer$0] = new ufixnum.Register64List.new(8);
    this[_bufferOffset] = 0;
    this[algorithmName$3] = "Tiger";
    this[digestSize$0] = 24;
    this.reset();
  }).prototype = tiger.TigerDigest.prototype;
  dart.addTypeTests(tiger.TigerDigest);
  tiger.TigerDigest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(tiger.TigerDigest, () => ({
    __proto__: dart.getMethods(tiger.TigerDigest.__proto__),
    reset: dart.fnType(dart.void, []),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    updateByte: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    [_processWord$0]: dart.fnType(dart.void, [typed_data.Uint8List, core.int]),
    [_processBlock$0]: dart.fnType(dart.void, []),
    [_processLength$0]: dart.fnType(dart.void, [ufixnum.Register64]),
    [_finish$]: dart.fnType(dart.void, []),
    [_keySchedule]: dart.fnType(dart.void, []),
    [_roundABC]: dart.fnType(dart.void, [ufixnum.Register64, core.int]),
    [_roundBCA]: dart.fnType(dart.void, [ufixnum.Register64, core.int]),
    [_roundCAB]: dart.fnType(dart.void, [ufixnum.Register64, core.int])
  }));
  dart.setLibraryUri(tiger.TigerDigest, "package:pointycastle/digests/tiger.dart");
  dart.setFieldSignature(tiger.TigerDigest, () => ({
    __proto__: dart.getFields(tiger.TigerDigest.__proto__),
    [_a$]: dart.finalFieldType(ufixnum.Register64),
    [_b$]: dart.finalFieldType(ufixnum.Register64),
    [_c]: dart.finalFieldType(ufixnum.Register64),
    [_byteCount$]: dart.finalFieldType(ufixnum.Register64),
    [_wordBuffer$0]: dart.finalFieldType(typed_data.Uint8List),
    [_wordBufferOffset$0]: dart.fieldType(core.int),
    [_buffer$0]: dart.finalFieldType(ufixnum.Register64List),
    [_bufferOffset]: dart.fieldType(core.int),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(tiger.TigerDigest, {
    /*tiger.TigerDigest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "Tiger", dart.fn(() => new tiger.TigerDigest.new(), VoidToTigerDigest()));
    },
    /*tiger.TigerDigest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 24;
    },
    /*tiger.TigerDigest._KEY_MASK_0*/get _KEY_MASK_0() {
      return new ufixnum.Register64.new(2779096485, 2779096485);
    },
    /*tiger.TigerDigest._KEY_MASK_7*/get _KEY_MASK_7() {
      return new ufixnum.Register64.new(19088743, 2309737967);
    }
  });
  dart.defineLazy(tiger, {
    /*tiger._t1*/get _t1() {
      return JSArrayOfRegister64().of([new ufixnum.Register64.new(44740988, 4159245406), new ufixnum.Register64.new(2890025731, 3796084972), new ufixnum.Register64.new(1926061027, 232127699), new ufixnum.Register64.new(1828821907, 4143546170), new ufixnum.Register64.new(3449387263, 3525284243), new ufixnum.Register64.new(1970512329, 1887447522), new ufixnum.Register64.new(2976133739, 2452259779), new ufixnum.Register64.new(1183334126, 76634224), new ufixnum.Register64.new(3937198853, 1896082662), new ufixnum.Register64.new(3309398456, 144921436), new ufixnum.Register64.new(1290228881, 2380186748), new ufixnum.Register64.new(178451679, 3691901964), new ufixnum.Register64.new(280456984, 2806890234), new ufixnum.Register64.new(3335304739, 1523690346), new ufixnum.Register64.new(326263073, 1462756095), new ufixnum.Register64.new(440962159, 429756958), new ufixnum.Register64.new(1271527924, 3657435082), new ufixnum.Register64.new(653649654, 3897704903), new ufixnum.Register64.new(2240838107, 3931719606), new ufixnum.Register64.new(1327007173, 3382611090), new ufixnum.Register64.new(3616437790, 2842658379), new ufixnum.Register64.new(2385920652, 1387643261), new ufixnum.Register64.new(1775200295, 925918145), new ufixnum.Register64.new(3053963581, 2612315502), new ufixnum.Register64.new(2105675382, 242660842), new ufixnum.Register64.new(1683791046, 4034911298), new ufixnum.Register64.new(3208159352, 607339232), new ufixnum.Register64.new(1600861244, 2637069572), new ufixnum.Register64.new(4072835819, 1611337414), new ufixnum.Register64.new(1812912223, 1918155948), new ufixnum.Register64.new(1901666945, 2765836261), new ufixnum.Register64.new(426244713, 3457150367), new ufixnum.Register64.new(4250047480, 3110421979), new ufixnum.Register64.new(3363432919, 4071055371), new ufixnum.Register64.new(2248296594, 26417486), new ufixnum.Register64.new(2767803195, 765247667), new ufixnum.Register64.new(2421392236, 362116627), new ufixnum.Register64.new(3681406858, 4231363569), new ufixnum.Register64.new(415165050, 2050428759), new ufixnum.Register64.new(57743306, 1354338406), new ufixnum.Register64.new(1790118551, 1950501429), new ufixnum.Register64.new(4108922626, 3810862235), new ufixnum.Register64.new(2000280327, 102550241), new ufixnum.Register64.new(3639850140, 3970181637), new ufixnum.Register64.new(3176578623, 1362636659), new ufixnum.Register64.new(1174072664, 1135655720), new ufixnum.Register64.new(478231900, 297738115), new ufixnum.Register64.new(2331042998, 3613368681), new ufixnum.Register64.new(871241892, 2276301209), new ufixnum.Register64.new(1009182954, 2982757392), new ufixnum.Register64.new(3037728811, 3232244473), new ufixnum.Register64.new(337571633, 216404539), new ufixnum.Register64.new(4234524928, 1507701076), new ufixnum.Register64.new(3759507008, 3319850503), new ufixnum.Register64.new(2286815128, 650355663), new ufixnum.Register64.new(2467106197, 600126973), new ufixnum.Register64.new(895716725, 1318726400), new ufixnum.Register64.new(1082522831, 1078369749), new ufixnum.Register64.new(3299965650, 2346859084), new ufixnum.Register64.new(3400724732, 1782475310), new ufixnum.Register64.new(677418778, 1804877773), new ufixnum.Register64.new(1037987554, 316867654), new ufixnum.Register64.new(1646457642, 3759629742), new ufixnum.Register64.new(1565854645, 1199769854), new ufixnum.Register64.new(2851056013, 2699928106), new ufixnum.Register64.new(3276908310, 2260995495), new ufixnum.Register64.new(285562989, 2626059396), new ufixnum.Register64.new(3707760261, 4255262803), new ufixnum.Register64.new(3439054886, 744419190), new ufixnum.Register64.new(3136459979, 2307969537), new ufixnum.Register64.new(3868484853, 721082741), new ufixnum.Register64.new(2494567343, 3742580244), new ufixnum.Register64.new(111661475, 673433944), new ufixnum.Register64.new(1872100945, 821432601), new ufixnum.Register64.new(3643454286, 1177290432), new ufixnum.Register64.new(3984318003, 2289856978), new ufixnum.Register64.new(2037673326, 1696086334), new ufixnum.Register64.new(1537481016, 1567699753), new ufixnum.Register64.new(2082186937, 1219065188), new ufixnum.Register64.new(832076825, 2080222311), new ufixnum.Register64.new(3731628996, 1258634498), new ufixnum.Register64.new(1478248958, 3489846861), new ufixnum.Register64.new(3712437603, 942019953), new ufixnum.Register64.new(2856666819, 3832795234), new ufixnum.Register64.new(2458897972, 2488662112), new ufixnum.Register64.new(1209408442, 3400242393), new ufixnum.Register64.new(1670456368, 1997434728), new ufixnum.Register64.new(1858643430, 46556188), new ufixnum.Register64.new(2267555093, 863886635), new ufixnum.Register64.new(752511810, 55275547), new ufixnum.Register64.new(2956801985, 2177567085), new ufixnum.Register64.new(3775415170, 1724324975), new ufixnum.Register64.new(724664519, 3947999829), new ufixnum.Register64.new(3750934575, 2529201084), new ufixnum.Register64.new(1550371008, 2788357050), new ufixnum.Register64.new(1426377862, 473761110), new ufixnum.Register64.new(2881463525, 1605528463), new ufixnum.Register64.new(1099205386, 3015364276), new ufixnum.Register64.new(3006571123, 2856607026), new ufixnum.Register64.new(3165034224, 2824525953), new ufixnum.Register64.new(620162149, 3039352172), new ufixnum.Register64.new(216092974, 2431930954), new ufixnum.Register64.new(1318967197, 1426510682), new ufixnum.Register64.new(629736954, 3335427961), new ufixnum.Register64.new(538519899, 1041275699), new ufixnum.Register64.new(4171843467, 1939887308), new ufixnum.Register64.new(690287353, 876707504), new ufixnum.Register64.new(965948797, 1399659460), new ufixnum.Register64.new(950540994, 498532235), new ufixnum.Register64.new(1204091889, 2103449279), new ufixnum.Register64.new(504343261, 1986520053), new ufixnum.Register64.new(2059206498, 2475420566), new ufixnum.Register64.new(2811080084, 2411821513), new ufixnum.Register64.new(2401212599, 689038605), new ufixnum.Register64.new(1642368686, 655497873), new ufixnum.Register64.new(1298331565, 830838792), new ufixnum.Register64.new(3974865733, 4015844075), new ufixnum.Register64.new(4123963998, 3163981006), new ufixnum.Register64.new(4130595340, 3086443041), new ufixnum.Register64.new(2737626886, 2877461476), new ufixnum.Register64.new(2556043308, 2783849636), new ufixnum.Register64.new(3473638471, 3431632817), new ufixnum.Register64.new(2675331652, 2543344035), new ufixnum.Register64.new(2832537265, 2703491095), new ufixnum.Register64.new(198687294, 3143485222), new ufixnum.Register64.new(3846949461, 3094010681), new ufixnum.Register64.new(494549757, 1816625251), new ufixnum.Register64.new(1369359880, 3882262237), new ufixnum.Register64.new(240588194, 3511265827), new ufixnum.Register64.new(394085745, 2224026004), new ufixnum.Register64.new(4004863794, 1090604066), new ufixnum.Register64.new(257842337, 980299458), new ufixnum.Register64.new(2150208123, 1979040609), new ufixnum.Register64.new(2903744427, 3285640246), new ufixnum.Register64.new(224260521, 1288650799), new ufixnum.Register64.new(1049352520, 3198541768), new ufixnum.Register64.new(2778780503, 3175085950), new ufixnum.Register64.new(2731617829, 527758917), new ufixnum.Register64.new(1727897170, 1585553538), new ufixnum.Register64.new(772575438, 2137553481), new ufixnum.Register64.new(3270032574, 3130473413), new ufixnum.Register64.new(444, 3842602079), new ufixnum.Register64.new(1110931387, 3873092566), new ufixnum.Register64.new(3513130110, 2934992565), new ufixnum.Register64.new(2709004085, 1303039960), new ufixnum.Register64.new(756099146, 722907132), new ufixnum.Register64.new(4059844455, 4203289887), new ufixnum.Register64.new(1944896093, 3415345882), new ufixnum.Register64.new(2925595682, 3265341009), new ufixnum.Register64.new(2531305488, 3545675658), new ufixnum.Register64.new(1520056351, 803702543), new ufixnum.Register64.new(3584910061, 3914224944), new ufixnum.Register64.new(3525699048, 915215399), new ufixnum.Register64.new(1704426352, 3350152753), new ufixnum.Register64.new(2583202226, 3728332623), new ufixnum.Register64.new(591343807, 1424085315), new ufixnum.Register64.new(2593551827, 3651550359), new ufixnum.Register64.new(1416648015, 4080335272), new ufixnum.Register64.new(376097652, 1246713480), new ufixnum.Register64.new(1892109482, 3001331373), new ufixnum.Register64.new(4040200548, 1864977682), new ufixnum.Register64.new(1471687305, 1749037521), new ufixnum.Register64.new(4023999066, 1639844715), new ufixnum.Register64.new(800920297, 1777529498), new ufixnum.Register64.new(2614325267, 4278165480), new ufixnum.Register64.new(1067123716, 3590871558), new ufixnum.Register64.new(1228980723, 376241685), new ufixnum.Register64.new(156511309, 3455311611), new ufixnum.Register64.new(3032818051, 2244828387), new ufixnum.Register64.new(3375740892, 1147315777), new ufixnum.Register64.new(873986214, 2396239423), new ufixnum.Register64.new(3087620393, 1528912704), new ufixnum.Register64.new(4187806447, 999064946), new ufixnum.Register64.new(25953812, 4177312093), new ufixnum.Register64.new(454339789, 440061427), new ufixnum.Register64.new(2228515314, 12284717), new ufixnum.Register64.new(3248689422, 2515065366), new ufixnum.Register64.new(1124758048, 3206185656), new ufixnum.Register64.new(3078490381, 970924302), new ufixnum.Register64.new(1593097631, 1020288669), new ufixnum.Register64.new(2639263450, 2119672900), new ufixnum.Register64.new(3659358433, 2211751416), new ufixnum.Register64.new(2995241860, 395939399), new ufixnum.Register64.new(4265532434, 464722054), new ufixnum.Register64.new(3355327692, 2550975471), new ufixnum.Register64.new(3832526224, 412876035), new ufixnum.Register64.new(926088518, 2588694492), new ufixnum.Register64.new(2130116768, 2096213349), new ufixnum.Register64.new(1506165864, 2736621657), new ufixnum.Register64.new(1982836916, 3562758646), new ufixnum.Register64.new(358330064, 2567206680), new ufixnum.Register64.new(1752522316, 1028700838), new ufixnum.Register64.new(3911274111, 584627423), new ufixnum.Register64.new(719175507, 783062516), new ufixnum.Register64.new(850278665, 3032285449), new ufixnum.Register64.new(2202924343, 2962109520), new ufixnum.Register64.new(4196441512, 1109422733), new ufixnum.Register64.new(2657688987, 2667455479), new ufixnum.Register64.new(71750280, 3299773823), new ufixnum.Register64.new(2068628772, 3781785691), new ufixnum.Register64.new(567836417, 902435717), new ufixnum.Register64.new(3468378127, 326863525), new ufixnum.Register64.new(657337190, 1476892350), new ufixnum.Register64.new(907159105, 633516254), new ufixnum.Register64.new(91685565, 2904488882), new ufixnum.Register64.new(3569007502, 2901953513), new ufixnum.Register64.new(2438476089, 1679541883), new ufixnum.Register64.new(2346462688, 2151079972), new ufixnum.Register64.new(1614578006, 4104087789), new ufixnum.Register64.new(4157748983, 3689894161), new ufixnum.Register64.new(2535965785, 2329026176), new ufixnum.Register64.new(2693400726, 1728733143), new ufixnum.Register64.new(3410661187, 166439371), new ufixnum.Register64.new(2175751755, 259012257), new ufixnum.Register64.new(3233389223, 2014943933), new ufixnum.Register64.new(2510233288, 1070131538), new ufixnum.Register64.new(2354073719, 2034926009), new ufixnum.Register64.new(986361743, 90388720), new ufixnum.Register64.new(129253200, 1652189048), new ufixnum.Register64.new(1246014281, 4125936759), new ufixnum.Register64.new(1002690276, 3061444248), new ufixnum.Register64.new(2629883089, 3474198668), new ufixnum.Register64.new(1141293067, 543934624), new ufixnum.Register64.new(2191624276, 3369545097), new ufixnum.Register64.new(1742956211, 1547453228), new ufixnum.Register64.new(3106135393, 271267826), new ufixnum.Register64.new(1454057337, 3632539421), new ufixnum.Register64.new(3196314032, 4279575983), new ufixnum.Register64.new(4219233748, 561924521), new ufixnum.Register64.new(1809572071, 1833494484), new ufixnum.Register64.new(148865671, 1171855262), new ufixnum.Register64.new(585788058, 3713252660), new ufixnum.Register64.new(3815642140, 1445077002), new ufixnum.Register64.new(2139118875, 2360824046), new ufixnum.Register64.new(2951071653, 2673403959), new ufixnum.Register64.new(3800013162, 1337049660), new ufixnum.Register64.new(3548806651, 125169872), new ufixnum.Register64.new(3504763870, 1854441754), new ufixnum.Register64.new(305851294, 2948099109), new ufixnum.Register64.new(821155285, 3242571925), new ufixnum.Register64.new(3141749293, 4000475623), new ufixnum.Register64.new(2026596332, 4180802104), new ufixnum.Register64.new(4080730994, 842776476), new ufixnum.Register64.new(1389781814, 4213677172), new ufixnum.Register64.new(1348416428, 184241834), new ufixnum.Register64.new(3903180185, 2731336071), new ufixnum.Register64.new(1397322880, 506278075), new ufixnum.Register64.new(2368558865, 3582422416), new ufixnum.Register64.new(521814312, 2445017998), new ufixnum.Register64.new(3605194525, 2196072008), new ufixnum.Register64.new(1946381370, 1232548535), new ufixnum.Register64.new(2310438617, 1667364267), new ufixnum.Register64.new(4293760472, 4058645154), new ufixnum.Register64.new(3878370262, 342152253), new ufixnum.Register64.new(2788167447, 198985760), new ufixnum.Register64.new(3955328864, 3984107386)]);
    },
    /*tiger._t2*/get _t2() {
      return JSArrayOfRegister64().of([new ufixnum.Register64.new(3869687386, 94445880), new ufixnum.Register64.new(3047236261, 3036183704), new ufixnum.Register64.new(1446797449, 336292240), new ufixnum.Register64.new(1279707950, 958356949), new ufixnum.Register64.new(3643977179, 3384251444), new ufixnum.Register64.new(149582052, 538292213), new ufixnum.Register64.new(3613763175, 1044876529), new ufixnum.Register64.new(3304813950, 2871496089), new ufixnum.Register64.new(3742484102, 762185362), new ufixnum.Register64.new(3723199729, 226442006), new ufixnum.Register64.new(1865348612, 2791696900), new ufixnum.Register64.new(1250823951, 4041269171), new ufixnum.Register64.new(2783833848, 1035778641), new ufixnum.Register64.new(4233038378, 245643038), new ufixnum.Register64.new(3896384936, 1555268649), new ufixnum.Register64.new(3700422786, 3122339042), new ufixnum.Register64.new(3443871838, 2203314189), new ufixnum.Register64.new(416389632, 3571123991), new ufixnum.Register64.new(882954221, 2784198913), new ufixnum.Register64.new(199720529, 2290600690), new ufixnum.Register64.new(506729528, 3015987510), new ufixnum.Register64.new(3763836916, 2424950009), new ufixnum.Register64.new(4291968925, 4065926420), new ufixnum.Register64.new(1413339682, 2241185229), new ufixnum.Register64.new(1713340925, 2567252531), new ufixnum.Register64.new(2268522049, 3675224950), new ufixnum.Register64.new(354580261, 1099846407), new ufixnum.Register64.new(3797909318, 372159226), new ufixnum.Register64.new(1219015186, 1813240318), new ufixnum.Register64.new(2950452247, 2464640746), new ufixnum.Register64.new(64557759, 3335621007), new ufixnum.Register64.new(833727226, 461632795), new ufixnum.Register64.new(4054591382, 3828004825), new ufixnum.Register64.new(1084467159, 4241681324), new ufixnum.Register64.new(274076525, 184270021), new ufixnum.Register64.new(2022302173, 2590837893), new ufixnum.Register64.new(3543475576, 712602794), new ufixnum.Register64.new(2816630025, 126533787), new ufixnum.Register64.new(3175168179, 3938905552), new ufixnum.Register64.new(2450177982, 1911266928), new ufixnum.Register64.new(2728775925, 1338139228), new ufixnum.Register64.new(3226788715, 185766051), new ufixnum.Register64.new(4141701631, 1660850987), new ufixnum.Register64.new(892810565, 296266877), new ufixnum.Register64.new(3397672593, 1929043156), new ufixnum.Register64.new(2230856544, 849158364), new ufixnum.Register64.new(2043030753, 3446091544), new ufixnum.Register64.new(2332664493, 3508823084), new ufixnum.Register64.new(3502369130, 433710886), new ufixnum.Register64.new(1517841051, 1269387276), new ufixnum.Register64.new(235012918, 1665942515), new ufixnum.Register64.new(3246081866, 3949385762), new ufixnum.Register64.new(1785928419, 3969624770), new ufixnum.Register64.new(2183554682, 3766747736), new ufixnum.Register64.new(1741969014, 2445995173), new ufixnum.Register64.new(496244060, 1215671733), new ufixnum.Register64.new(1828781464, 1535197151), new ufixnum.Register64.new(1361604348, 3077885190), new ufixnum.Register64.new(1585984583, 531055791), new ufixnum.Register64.new(4146897070, 3881938478), new ufixnum.Register64.new(3191923917, 2934497434), new ufixnum.Register64.new(3918990267, 1360590437), new ufixnum.Register64.new(1919831019, 870259044), new ufixnum.Register64.new(1882914823, 689543010), new ufixnum.Register64.new(1177671702, 4126093479), new ufixnum.Register64.new(3095442869, 352626366), new ufixnum.Register64.new(1679266755, 2128104300), new ufixnum.Register64.new(2065821047, 4142497174), new ufixnum.Register64.new(2002978353, 788097907), new ufixnum.Register64.new(2924644680, 3899651060), new ufixnum.Register64.new(1406916594, 2258893048), new ufixnum.Register64.new(382393575, 1291587683), new ufixnum.Register64.new(6035901, 4199728861), new ufixnum.Register64.new(1753648989, 1691642579), new ufixnum.Register64.new(983388460, 3474856042), new ufixnum.Register64.new(914252482, 945184942), new ufixnum.Register64.new(3814320106, 2010952151), new ufixnum.Register64.new(1382811507, 1956298350), new ufixnum.Register64.new(1935336953, 3500110667), new ufixnum.Register64.new(1228916684, 2320862120), new ufixnum.Register64.new(2964963667, 809610053), new ufixnum.Register64.new(840521914, 1191860669), new ufixnum.Register64.new(2234363915, 1598473107), new ufixnum.Register64.new(2434833195, 3543576805), new ufixnum.Register64.new(1851805565, 1704915359), new ufixnum.Register64.new(3113913058, 2016201508), new ufixnum.Register64.new(3438619318, 3356804295), new ufixnum.Register64.new(1193793967, 3188814459), new ufixnum.Register64.new(2123697420, 18985805), new ufixnum.Register64.new(1970226006, 1890404127), new ufixnum.Register64.new(4121809986, 1633314889), new ufixnum.Register64.new(1317527705, 2159646074), new ufixnum.Register64.new(718250463, 1353638741), new ufixnum.Register64.new(3633849914, 4247770454), new ufixnum.Register64.new(3371471437, 3624701910), new ufixnum.Register64.new(3482962493, 1967789882), new ufixnum.Register64.new(4266097580, 2945564476), new ufixnum.Register64.new(3981668854, 3599810861), new ufixnum.Register64.new(2199542824, 1583902868), new ufixnum.Register64.new(3318991114, 923312292), new ufixnum.Register64.new(260018231, 399533440), new ufixnum.Register64.new(435796755, 3103650431), new ufixnum.Register64.new(2981981979, 1297098819), new ufixnum.Register64.new(477502371, 2415869970), new ufixnum.Register64.new(219492548, 3806469947), new ufixnum.Register64.new(2302922345, 2805410954), new ufixnum.Register64.new(3843575313, 4273327718), new ufixnum.Register64.new(1636555648, 3178456609), new ufixnum.Register64.new(2099886806, 2337754379), new ufixnum.Register64.new(2176540990, 635895387), new ufixnum.Register64.new(119315472, 3154612543), new ufixnum.Register64.new(3351178105, 162278807), new ufixnum.Register64.new(3286601013, 1002821463), new ufixnum.Register64.new(3942742162, 4086260200), new ufixnum.Register64.new(3572497308, 2602353178), new ufixnum.Register64.new(2574417190, 4103403435), new ufixnum.Register64.new(2749391778, 2506833411), new ufixnum.Register64.new(2638908314, 1252039728), new ufixnum.Register64.new(1063958485, 593844), new ufixnum.Register64.new(2629890720, 1462143680), new ufixnum.Register64.new(1039047981, 3988734673), new ufixnum.Register64.new(856639944, 2036377970), new ufixnum.Register64.new(3333583362, 2269256513), new ufixnum.Register64.new(180723392, 2080388764), new ufixnum.Register64.new(4014910537, 3409261605), new ufixnum.Register64.new(4098892878, 4009830872), new ufixnum.Register64.new(2328643301, 3405045430), new ufixnum.Register64.new(805219171, 2559730679), new ufixnum.Register64.new(2407315966, 1568294264), new ufixnum.Register64.new(1540945764, 1315128885), new ufixnum.Register64.new(1115321109, 3207448832), new ufixnum.Register64.new(399557802, 556082716), new ufixnum.Register64.new(965888108, 2471595600), new ufixnum.Register64.new(3033267936, 2732053699), new ufixnum.Register64.new(2088097312, 744349069), new ufixnum.Register64.new(3686962648, 3814419553), new ufixnum.Register64.new(1622370771, 33762073), new ufixnum.Register64.new(3460458591, 3705946418), new ufixnum.Register64.new(116645305, 3723908624), new ufixnum.Register64.new(2393166365, 3051440368), new ufixnum.Register64.new(548469990, 801982831), new ufixnum.Register64.new(740004131, 1487990321), new ufixnum.Register64.new(2994935736, 418751240), new ufixnum.Register64.new(2828803608, 2628178639), new ufixnum.Register64.new(208345175, 1789582280), new ufixnum.Register64.new(3059608233, 312081123), new ufixnum.Register64.new(4213930315, 2131765223), new ufixnum.Register64.new(82063743, 1144740843), new ufixnum.Register64.new(1267019058, 1496961190), new ufixnum.Register64.new(3584977902, 4213211132), new ufixnum.Register64.new(815170226, 2177356660), new ufixnum.Register64.new(3135441313, 2495853685), new ufixnum.Register64.new(2361653627, 330604293), new ufixnum.Register64.new(2561229359, 4163451239), new ufixnum.Register64.new(608900784, 276234108), new ufixnum.Register64.new(4173289244, 1715300334), new ufixnum.Register64.new(520972120, 4007857569), new ufixnum.Register64.new(3384152537, 2061416887), new ufixnum.Register64.new(3081753992, 2070697890), new ufixnum.Register64.new(1653649028, 1805144033), new ufixnum.Register64.new(2497662174, 2898372093), new ufixnum.Register64.new(92953553, 3309845247), new ufixnum.Register64.new(1662414017, 1119501367), new ufixnum.Register64.new(2377667182, 3002560320), new ufixnum.Register64.new(3775430659, 1863150926), new ufixnum.Register64.new(2651136969, 2535272733), new ufixnum.Register64.new(1173104676, 3430733457), new ufixnum.Register64.new(1465615193, 3861086921), new ufixnum.Register64.new(4204675085, 3297286549), new ufixnum.Register64.new(3514973899, 1165104488), new ufixnum.Register64.new(3674052667, 2181433391), new ufixnum.Register64.new(2860329224, 596027595), new ufixnum.Register64.new(648006980, 62420360), new ufixnum.Register64.new(462550519, 683528672), new ufixnum.Register64.new(3831930681, 67240438), new ufixnum.Register64.new(2048752673, 2364558046), new ufixnum.Register64.new(1700936745, 3617383886), new ufixnum.Register64.new(594035856, 2529168305), new ufixnum.Register64.new(2879123847, 2644837306), new ufixnum.Register64.new(3156470961, 2757232014), new ufixnum.Register64.new(2589515521, 3141541580), new ufixnum.Register64.new(2691754088, 2824803389), new ufixnum.Register64.new(1341229104, 2113020830), new ufixnum.Register64.new(349529524, 442765699), new ufixnum.Register64.new(3994235764, 1383077378), new ufixnum.Register64.new(2500738511, 1059610121), new ufixnum.Register64.new(1502806612, 3116894547), new ufixnum.Register64.new(1005754688, 2301680237), new ufixnum.Register64.new(2840958015, 1399395207), new ufixnum.Register64.new(2707349194, 2848688004), new ufixnum.Register64.new(689185063, 892070304), new ufixnum.Register64.new(1995454239, 4283333371), new ufixnum.Register64.new(37352528, 659497512), new ufixnum.Register64.new(3137813232, 492734091), new ufixnum.Register64.new(3217556849, 3238958785), new ufixnum.Register64.new(3529967749, 1747070499), new ufixnum.Register64.new(2524029908, 2390799792), new ufixnum.Register64.new(1437979530, 3784555393), new ufixnum.Register64.new(1765466832, 2710242488), new ufixnum.Register64.new(1548268780, 2916430687), new ufixnum.Register64.new(4252252953, 1226219978), new ufixnum.Register64.new(628556161, 884906180), new ufixnum.Register64.new(3883501544, 1012180141), new ufixnum.Register64.new(685838356, 3660833209), new ufixnum.Register64.new(655148446, 577413651), new ufixnum.Register64.new(1900633973, 1830444896), new ufixnum.Register64.new(2615694331, 1622142839), new ufixnum.Register64.new(2915534503, 4148444607), new ufixnum.Register64.new(151274849, 1941084802), new ufixnum.Register64.new(1488747110, 3258105182), new ufixnum.Register64.new(4077278604, 1731905714), new ufixnum.Register64.new(1106655686, 3066656554), new ufixnum.Register64.new(560852969, 2681877978), new ufixnum.Register64.new(291769543, 477881877), new ufixnum.Register64.new(2479109780, 1448891687), new ufixnum.Register64.new(3926101602, 1182234681), new ufixnum.Register64.new(4188795854, 1514021993), new ufixnum.Register64.new(1948153485, 265491154), new ufixnum.Register64.new(21280899, 3470152390), new ufixnum.Register64.new(3255523931, 2738849106), new ufixnum.Register64.new(451319347, 3275971229), new ufixnum.Register64.new(2544012452, 143457772), new ufixnum.Register64.new(2284102716, 513209376), new ufixnum.Register64.new(929116070, 1861134150), new ufixnum.Register64.new(1800188261, 4191096410), new ufixnum.Register64.new(1135221766, 2695625546), new ufixnum.Register64.new(2135802479, 4049762667), new ufixnum.Register64.new(1824181390, 1424857871), new ufixnum.Register64.new(2797076463, 3535480126), new ufixnum.Register64.new(774225045, 2963447119), new ufixnum.Register64.new(2262214027, 3740350604), new ufixnum.Register64.new(3738651333, 1991700564), new ufixnum.Register64.new(2150677948, 725975133), new ufixnum.Register64.new(1015132016, 3914175113), new ufixnum.Register64.new(1056927194, 2654011611), new ufixnum.Register64.new(3012412319, 3754723399), new ufixnum.Register64.new(305694034, 2367142014), new ufixnum.Register64.new(4074376914, 1085388354), new ufixnum.Register64.new(1154415324, 3578526121), new ufixnum.Register64.new(319954958, 1128038118), new ufixnum.Register64.new(2684143695, 980993864), new ufixnum.Register64.new(4039974770, 612726459), new ufixnum.Register64.new(3966333957, 909692900), new ufixnum.Register64.new(732411516, 216813132), new ufixnum.Register64.new(2888781299, 3855495917), new ufixnum.Register64.new(3409170755, 652889105), new ufixnum.Register64.new(2766734412, 3346946236), new ufixnum.Register64.new(1599156883, 3644128495), new ufixnum.Register64.new(1573479509, 115692612), new ufixnum.Register64.new(1356743055, 830333962), new ufixnum.Register64.new(948744986, 1776149081), new ufixnum.Register64.new(766814260, 1434585734), new ufixnum.Register64.new(2417010974, 2222004969), new ufixnum.Register64.new(1308094647, 2974385009), new ufixnum.Register64.new(3593088683, 3231150457), new ufixnum.Register64.new(586858647, 2861390862)]);
    },
    /*tiger._t3*/get _t3() {
      return JSArrayOfRegister64().of([new ufixnum.Register64.new(4104113199, 4057658267), new ufixnum.Register64.new(1216337350, 1878168193), new ufixnum.Register64.new(3902998119, 4242319423), new ufixnum.Register64.new(748375011, 3539783267), new ufixnum.Register64.new(3661625163, 2482748354), new ufixnum.Register64.new(799106514, 4268800614), new ufixnum.Register64.new(2701386361, 2534314964), new ufixnum.Register64.new(3201166455, 2967756401), new ufixnum.Register64.new(3484687986, 965076119), new ufixnum.Register64.new(3070929410, 1593266199), new ufixnum.Register64.new(3559066096, 943765728), new ufixnum.Register64.new(2398886608, 898205049), new ufixnum.Register64.new(2529595915, 3803360197), new ufixnum.Register64.new(1722761571, 928682354), new ufixnum.Register64.new(561294300, 3396413435), new ufixnum.Register64.new(3007106726, 1249050433), new ufixnum.Register64.new(4031400243, 137389733), new ufixnum.Register64.new(2375486157, 3609762549), new ufixnum.Register64.new(2409031904, 835240542), new ufixnum.Register64.new(4093558818, 1988582727), new ufixnum.Register64.new(3967546128, 90280157), new ufixnum.Register64.new(4121800878, 3138327697), new ufixnum.Register64.new(2605774981, 265652370), new ufixnum.Register64.new(1232423043, 1488408040), new ufixnum.Register64.new(2738180086, 2438143073), new ufixnum.Register64.new(117619684, 2178074350), new ufixnum.Register64.new(2314937349, 2112744856), new ufixnum.Register64.new(2888856851, 2241259778), new ufixnum.Register64.new(489502080, 388461293), new ufixnum.Register64.new(3950219202, 2389426957), new ufixnum.Register64.new(1481961359, 1661223718), new ufixnum.Register64.new(2656850482, 1524448190), new ufixnum.Register64.new(2427081679, 844908067), new ufixnum.Register64.new(3251785041, 882757735), new ufixnum.Register64.new(542232558, 2795415076), new ufixnum.Register64.new(320999178, 2251193935), new ufixnum.Register64.new(3459856788, 81807460), new ufixnum.Register64.new(3653512356, 1887894711), new ufixnum.Register64.new(1750782499, 2315511756), new ufixnum.Register64.new(107250866, 2872046043), new ufixnum.Register64.new(4271725936, 4022303212), new ufixnum.Register64.new(1528019421, 2621970516), new ufixnum.Register64.new(368104565, 3977578925), new ufixnum.Register64.new(200002822, 247961681), new ufixnum.Register64.new(3582748561, 406501368), new ufixnum.Register64.new(3508042832, 1391718116), new ufixnum.Register64.new(3378319762, 3847127807), new ufixnum.Register64.new(2263785804, 3115084962), new ufixnum.Register64.new(881180337, 1399291229), new ufixnum.Register64.new(3709410680, 529287466), new ufixnum.Register64.new(4127745722, 2810506233), new ufixnum.Register64.new(1368351803, 2731576436), new ufixnum.Register64.new(2287135062, 3775429666), new ufixnum.Register64.new(2808662925, 3289427597), new ufixnum.Register64.new(939816742, 3219951130), new ufixnum.Register64.new(2792831156, 3443213738), new ufixnum.Register64.new(2903927068, 3960331801), new ufixnum.Register64.new(3335795091, 2152082951), new ufixnum.Register64.new(3315959661, 195434808), new ufixnum.Register64.new(381286943, 2777667648), new ufixnum.Register64.new(411742487, 1017597720), new ufixnum.Register64.new(2883202968, 3382444575), new ufixnum.Register64.new(1040548011, 323676182), new ufixnum.Register64.new(1597703607, 1935956667), new ufixnum.Register64.new(620864190, 1433793270), new ufixnum.Register64.new(456094720, 1316916137), new ufixnum.Register64.new(483874819, 1911085395), new ufixnum.Register64.new(2137970837, 1651920432), new ufixnum.Register64.new(2975409919, 1500446781), new ufixnum.Register64.new(2674207037, 2831537849), new ufixnum.Register64.new(1859055693, 3599824972), new ufixnum.Register64.new(1199712095, 4281577352), new ufixnum.Register64.new(3826529032, 1065486337), new ufixnum.Register64.new(4245552704, 2585459125), new ufixnum.Register64.new(1126540084, 752564587), new ufixnum.Register64.new(2330426978, 3003232850), new ufixnum.Register64.new(3278872223, 1716871514), new ufixnum.Register64.new(2235914797, 2463312905), new ufixnum.Register64.new(4073184937, 1229419653), new ufixnum.Register64.new(1674556609, 866361018), new ufixnum.Register64.new(2209366220, 1857836130), new ufixnum.Register64.new(999576776, 4256376496), new ufixnum.Register64.new(1458924190, 2281691020), new ufixnum.Register64.new(767726605, 2582916038), new ufixnum.Register64.new(2566381321, 1795780141), new ufixnum.Register64.new(430366750, 987255487), new ufixnum.Register64.new(1118411979, 3688150027), new ufixnum.Register64.new(2778306735, 1172948313), new ufixnum.Register64.new(912430568, 131674502), new ufixnum.Register64.new(1799886875, 4204918643), new ufixnum.Register64.new(535582690, 360319517), new ufixnum.Register64.new(1181172842, 4129299157), new ufixnum.Register64.new(3860196298, 3484479605), new ufixnum.Register64.new(3102941007, 1747519352), new ufixnum.Register64.new(577846998, 3458388254), new ufixnum.Register64.new(811057575, 784582971), new ufixnum.Register64.new(3410406595, 2084511535), new ufixnum.Register64.new(3686306813, 44758286), new ufixnum.Register64.new(857725230, 1611374543), new ufixnum.Register64.new(2761488737, 1223310038), new ufixnum.Register64.new(2832745070, 2339013610), new ufixnum.Register64.new(2693378676, 3077790940), new ufixnum.Register64.new(2281091955, 508709393), new ufixnum.Register64.new(294127845, 3418974025), new ufixnum.Register64.new(2567365831, 2979779476), new ufixnum.Register64.new(2951577470, 2602869260), new ufixnum.Register64.new(1695148766, 3946202279), new ufixnum.Register64.new(1813967315, 3907981022), new ufixnum.Register64.new(3116989763, 3917057972), new ufixnum.Register64.new(2733823876, 1946953891), new ufixnum.Register64.new(2072286791, 1637308015), new ufixnum.Register64.new(2052842470, 3059680925), new ufixnum.Register64.new(4184027373, 2025746192), new ufixnum.Register64.new(4008054247, 2047306261), new ufixnum.Register64.new(726396490, 2693503952), new ufixnum.Register64.new(1784063550, 3350759758), new ufixnum.Register64.new(34739033, 3124035316), new ufixnum.Register64.new(1287625208, 674694140), new ufixnum.Register64.new(964718901, 212807880), new ufixnum.Register64.new(3500636809, 4028065914), new ufixnum.Register64.new(4056001003, 2655139177), new ufixnum.Register64.new(2356770344, 770605465), new ufixnum.Register64.new(1561802661, 3709827773), new ufixnum.Register64.new(1330856764, 162134656), new ufixnum.Register64.new(4203416659, 3749487065), new ufixnum.Register64.new(1071242428, 2288831351), new ufixnum.Register64.new(3225457020, 2837137184), new ufixnum.Register64.new(2110783810, 4191280351), new ufixnum.Register64.new(2222390301, 1329101656), new ufixnum.Register64.new(603514821, 4080100611), new ufixnum.Register64.new(53092932, 3890443065), new ufixnum.Register64.new(1552393687, 1358276427), new ufixnum.Register64.new(137055428, 915970350), new ufixnum.Register64.new(3750853612, 3092837948), new ufixnum.Register64.new(846248188, 1543007706), new ufixnum.Register64.new(279868091, 699784566), new ufixnum.Register64.new(1466616142, 1996502571), new ufixnum.Register64.new(449909466, 3323919247), new ufixnum.Register64.new(1763427086, 3321537575), new ufixnum.Register64.new(4280574737, 3425857859), new ufixnum.Register64.new(826422926, 820326918), new ufixnum.Register64.new(1899499057, 3761021846), new ufixnum.Register64.new(2509069462, 179140337), new ufixnum.Register64.new(4174836784, 3245188406), new ufixnum.Register64.new(3372208447, 468181458), new ufixnum.Register64.new(1970843238, 5102561), new ufixnum.Register64.new(92487425, 108783174), new ufixnum.Register64.new(3140793773, 1006524525), new ufixnum.Register64.new(157234377, 2703988720), new ufixnum.Register64.new(612021829, 634784936), new ufixnum.Register64.new(3705390835, 24410065), new ufixnum.Register64.new(1244533972, 3737834061), new ufixnum.Register64.new(3182814937, 3188334315), new ufixnum.Register64.new(712929527, 2034434475), new ufixnum.Register64.new(3740544394, 654655741), new ufixnum.Register64.new(17272512, 2739675841), new ufixnum.Register64.new(3856552218, 4106314631), new ufixnum.Register64.new(2126199378, 3180999434), new ufixnum.Register64.new(2003400791, 2860344373), new ufixnum.Register64.new(5145366, 61754418), new ufixnum.Register64.new(3886157856, 2910380818), new ufixnum.Register64.new(2638325516, 1790189810), new ufixnum.Register64.new(685796376, 3926999526), new ufixnum.Register64.new(3534916797, 2555341608), new ufixnum.Register64.new(649551724, 1148099971), new ufixnum.Register64.new(3125237388, 1296141695), new ufixnum.Register64.new(3624644031, 3860348302), new ufixnum.Register64.new(237006207, 1595301956), new ufixnum.Register64.new(3797460025, 298568254), new ufixnum.Register64.new(1916409670, 2988294332), new ufixnum.Register64.new(3351947348, 4124560851), new ufixnum.Register64.new(2091659912, 1025908124), new ufixnum.Register64.new(1989198436, 599430188), new ufixnum.Register64.new(400905508, 1199588024), new ufixnum.Register64.new(3770566518, 1453471903), new ufixnum.Register64.new(1294506846, 1739271584), new ufixnum.Register64.new(1149643676, 2411461937), new ufixnum.Register64.new(3028076548, 2635338597), new ufixnum.Register64.new(2183928630, 730974099), new ufixnum.Register64.new(1320240725, 4212383704), new ufixnum.Register64.new(516667911, 350398843), new ufixnum.Register64.new(1631798685, 1558077204), new ufixnum.Register64.new(1403583473, 3589319817), new ufixnum.Register64.new(2548696280, 475945728), new ufixnum.Register64.new(1646363048, 3573396467), new ufixnum.Register64.new(3921466177, 1462374920), new ufixnum.Register64.new(336668038, 1137501578), new ufixnum.Register64.new(2437203454, 2764497060), new ufixnum.Register64.new(221499493, 1708089871), new ufixnum.Register64.new(1420070216, 2669780129), new ufixnum.Register64.new(3292421804, 1835255841), new ufixnum.Register64.new(2842856250, 1920404911), new ufixnum.Register64.new(3616755323, 551520239), new ufixnum.Register64.new(3813999542, 440305381), new ufixnum.Register64.new(3403883003, 3357136132), new ufixnum.Register64.new(312103091, 2892021670), new ufixnum.Register64.new(3445516522, 2124396227), new ufixnum.Register64.new(2954661913, 2491658695), new ufixnum.Register64.new(1038695637, 3264558956), new ufixnum.Register64.new(2933206751, 716811539), new ufixnum.Register64.new(778106130, 3231742084), new ufixnum.Register64.new(3158148771, 3814854857), new ufixnum.Register64.new(891723163, 372855246), new ufixnum.Register64.new(209546794, 3503142394), new ufixnum.Register64.new(1508401815, 3632224051), new ufixnum.Register64.new(697233953, 2307764455), new ufixnum.Register64.new(1426063401, 3517295230), new ufixnum.Register64.new(2344651489, 3037076293), new ufixnum.Register64.new(3267566635, 1821536314), new ufixnum.Register64.new(2496420203, 2938498882), new ufixnum.Register64.new(169702363, 575931478), new ufixnum.Register64.new(79077625, 3653506970), new ufixnum.Register64.new(4026380194, 2923248736), new ufixnum.Register64.new(4157081435, 3029636804), new ufixnum.Register64.new(2630207252, 488428771), new ufixnum.Register64.new(2025657912, 562976052), new ufixnum.Register64.new(3002144104, 4166001770), new ufixnum.Register64.new(3992632570, 2499984425), new ufixnum.Register64.new(2037179890, 3659728155), new ufixnum.Register64.new(2866882736, 3700642684), new ufixnum.Register64.new(977878432, 3997903278), new ufixnum.Register64.new(3051318060, 1097373143), new ufixnum.Register64.new(4239113509, 304971575), new ufixnum.Register64.new(1887505240, 274580657), new ufixnum.Register64.new(3775913271, 4152896144), new ufixnum.Register64.new(1380829877, 1368014684), new ufixnum.Register64.new(1017021831, 2219910491), new ufixnum.Register64.new(1076462209, 431830242), new ufixnum.Register64.new(1956666223, 1564273867), new ufixnum.Register64.new(3054502421, 1122057930), new ufixnum.Register64.new(268007889, 794419884), new ufixnum.Register64.new(1614273063, 3841576016), new ufixnum.Register64.new(1586665306, 233931901), new ufixnum.Register64.new(3597525392, 3555075070), new ufixnum.Register64.new(1345509048, 2069266504), new ufixnum.Register64.new(2587277262, 2184520046), new ufixnum.Register64.new(2150050426, 620120906), new ufixnum.Register64.new(2481974667, 2355697399), new ufixnum.Register64.new(937279476, 1288574293), new ufixnum.Register64.new(1268112221, 1268366629), new ufixnum.Register64.new(2463366561, 1770074048), new ufixnum.Register64.new(4212804250, 2422606774), new ufixnum.Register64.new(1930172777, 1185200562), new ufixnum.Register64.new(2179107242, 2135546472), new ufixnum.Register64.new(1684445711, 2209456223), new ufixnum.Register64.new(666107773, 2521101451), new ufixnum.Register64.new(3429589340, 2377545139), new ufixnum.Register64.new(1733238969, 3169566357), new ufixnum.Register64.new(1865491330, 1969576322), new ufixnum.Register64.new(1524926577, 1044762373), new ufixnum.Register64.new(3210846105, 1422004567), new ufixnum.Register64.new(3938108512, 1084812009), new ufixnum.Register64.new(1162637289, 4072718797), new ufixnum.Register64.new(1100805705, 1678928156), new ufixnum.Register64.new(3554425839, 643501936), new ufixnum.Register64.new(1829658869, 3277294238)]);
    },
    /*tiger._t4*/get _t4() {
      return JSArrayOfRegister64().of([new ufixnum.Register64.new(1527668869, 640826453), new ufixnum.Register64.new(440844713, 4196096501), new ufixnum.Register64.new(2850178465, 2085392378), new ufixnum.Register64.new(1707757913, 3676919255), new ufixnum.Register64.new(98241142, 3459624898), new ufixnum.Register64.new(2179647358, 2836479301), new ufixnum.Register64.new(1385101450, 3064728077), new ufixnum.Register64.new(2694750803, 1501291519), new ufixnum.Register64.new(1124982707, 2890452310), new ufixnum.Register64.new(3300107898, 4099728495), new ufixnum.Register64.new(1322176472, 4225945694), new ufixnum.Register64.new(1056272144, 3013162480), new ufixnum.Register64.new(186832514, 2631276998), new ufixnum.Register64.new(402474506, 1960779881), new ufixnum.Register64.new(1828244622, 2232479040), new ufixnum.Register64.new(3603440831, 980339367), new ufixnum.Register64.new(1629764952, 444690505), new ufixnum.Register64.new(76262582, 3150013346), new ufixnum.Register64.new(3651373762, 2101660722), new ufixnum.Register64.new(2145255259, 2868121771), new ufixnum.Register64.new(2909620570, 2818867787), new ufixnum.Register64.new(3785795407, 764190612), new ufixnum.Register64.new(3572991250, 903801059), new ufixnum.Register64.new(4249583496, 1698748563), new ufixnum.Register64.new(612114436, 715440090), new ufixnum.Register64.new(158245317, 399585916), new ufixnum.Register64.new(3580454580, 907699845), new ufixnum.Register64.new(662545859, 304153981), new ufixnum.Register64.new(2497026195, 2755317751), new ufixnum.Register64.new(1693500700, 3451921025), new ufixnum.Register64.new(1026800836, 4284582363), new ufixnum.Register64.new(3758476056, 1290169073), new ufixnum.Register64.new(4284271901, 498703338), new ufixnum.Register64.new(2964870311, 4265777167), new ufixnum.Register64.new(2077518442, 1905085343), new ufixnum.Register64.new(3507464396, 581303692), new ufixnum.Register64.new(3541337237, 736410929), new ufixnum.Register64.new(3355088735, 3408148551), new ufixnum.Register64.new(1216802078, 1481032711), new ufixnum.Register64.new(684579705, 515312388), new ufixnum.Register64.new(3266317282, 4117971327), new ufixnum.Register64.new(1553305669, 562100343), new ufixnum.Register64.new(2053889535, 4084263680), new ufixnum.Register64.new(3461389880, 3604600484), new ufixnum.Register64.new(3958050560, 1686087426), new ufixnum.Register64.new(499910351, 1986031366), new ufixnum.Register64.new(3839488651, 2726756106), new ufixnum.Register64.new(3629789277, 3373843042), new ufixnum.Register64.new(1197153671, 841113428), new ufixnum.Register64.new(760198422, 1758246398), new ufixnum.Register64.new(2792995289, 3609967136), new ufixnum.Register64.new(1401166861, 2435662757), new ufixnum.Register64.new(998156872, 3205670120), new ufixnum.Register64.new(2015235655, 4063174111), new ufixnum.Register64.new(4025617638, 179636595), new ufixnum.Register64.new(550658513, 2650781506), new ufixnum.Register64.new(379661059, 103427641), new ufixnum.Register64.new(425782050, 962921621), new ufixnum.Register64.new(622597886, 3574511800), new ufixnum.Register64.new(2596324144, 4163240302), new ufixnum.Register64.new(3977586277, 2503898737), new ufixnum.Register64.new(47591828, 2788595056), new ufixnum.Register64.new(1349841027, 2494679431), new ufixnum.Register64.new(1891260812, 2427608289), new ufixnum.Register64.new(2034898305, 194462454), new ufixnum.Register64.new(223946217, 4239363180), new ufixnum.Register64.new(812085612, 3630724174), new ufixnum.Register64.new(2433396855, 3906433819), new ufixnum.Register64.new(1784789979, 1522806625), new ufixnum.Register64.new(2471575291, 4035253607), new ufixnum.Register64.new(4103369291, 2659445205), new ufixnum.Register64.new(3901219224, 1544119437), new ufixnum.Register64.new(884069318, 1966542077), new ufixnum.Register64.new(3694519347, 3154978141), new ufixnum.Register64.new(3500849218, 873667552), new ufixnum.Register64.new(134490704, 3029040815), new ufixnum.Register64.new(2576860398, 1151576885), new ufixnum.Register64.new(2191162185, 538417616), new ufixnum.Register64.new(641434375, 3083158593), new ufixnum.Register64.new(1966052852, 4251610278), new ufixnum.Register64.new(2456950592, 738772709), new ufixnum.Register64.new(713733972, 2811615726), new ufixnum.Register64.new(2755852117, 796038205), new ufixnum.Register64.new(741421902, 427299336), new ufixnum.Register64.new(1336511868, 3941491345), new ufixnum.Register64.new(1438877231, 1717416713), new ufixnum.Register64.new(3171291159, 1565766131), new ufixnum.Register64.new(1191079096, 1078017831), new ufixnum.Register64.new(1071658898, 3742169689), new ufixnum.Register64.new(3488022583, 783834767), new ufixnum.Register64.new(2814257639, 2914836760), new ufixnum.Register64.new(3846499932, 3733205469), new ufixnum.Register64.new(2323127067, 1106347838), new ufixnum.Register64.new(2781432952, 2698178791), new ufixnum.Register64.new(960572968, 2008418088), new ufixnum.Register64.new(2703646451, 2949228076), new ufixnum.Register64.new(3166861068, 1780811461), new ufixnum.Register64.new(985034197, 3705785874), new ufixnum.Register64.new(3864304080, 1248287543), new ufixnum.Register64.new(2106544692, 2176832022), new ufixnum.Register64.new(258958588, 3960861577), new ufixnum.Register64.new(1961868897, 2338001864), new ufixnum.Register64.new(2900132535, 338116125), new ufixnum.Register64.new(3712008160, 52010263), new ufixnum.Register64.new(938054231, 3890242040), new ufixnum.Register64.new(4199703145, 74930858), new ufixnum.Register64.new(2344351290, 1178425081), new ufixnum.Register64.new(4026613525, 1134718564), new ufixnum.Register64.new(2821750431, 2275330200), new ufixnum.Register64.new(3427542948, 352417740), new ufixnum.Register64.new(457387820, 3390911304), new ufixnum.Register64.new(3726450575, 2674892819), new ufixnum.Register64.new(1617298080, 1202183638), new ufixnum.Register64.new(3526863716, 3424432839), new ufixnum.Register64.new(2610138738, 637325779), new ufixnum.Register64.new(3964535664, 2383410294), new ufixnum.Register64.new(4273142746, 1023656237), new ufixnum.Register64.new(2920009426, 3997403290), new ufixnum.Register64.new(583764259, 3959115587), new ufixnum.Register64.new(1765149953, 1022835053), new ufixnum.Register64.new(2237543938, 3537166370), new ufixnum.Register64.new(121111994, 3491723340), new ufixnum.Register64.new(870414867, 944960838), new ufixnum.Register64.new(3746067461, 2328344120), new ufixnum.Register64.new(3130176156, 1737138506), new ufixnum.Register64.new(216571847, 1828367821), new ufixnum.Register64.new(1604144649, 137600564), new ufixnum.Register64.new(4054837545, 525935545), new ufixnum.Register64.new(1848934646, 256517727), new ufixnum.Register64.new(4005509674, 2996536348), new ufixnum.Register64.new(3793303720, 2408690861), new ufixnum.Register64.new(1474293752, 1170658243), new ufixnum.Register64.new(788556555, 4130122482), new ufixnum.Register64.new(1660189167, 1869999736), new ufixnum.Register64.new(296049364, 478746281), new ufixnum.Register64.new(4062827152, 2231293011), new ufixnum.Register64.new(1123140219, 380633318), new ufixnum.Register64.new(723482228, 2552479860), new ufixnum.Register64.new(1266085027, 3262403424), new ufixnum.Register64.new(2358834275, 3105264061), new ufixnum.Register64.new(347916604, 4054705770), new ufixnum.Register64.new(2290426174, 1833272215), new ufixnum.Register64.new(2383904240, 659375889), new ufixnum.Register64.new(3030086581, 1346316625), new ufixnum.Register64.new(269910376, 3287903083), new ufixnum.Register64.new(238917179, 1674227886), new ufixnum.Register64.new(2382121814, 1436670740), new ufixnum.Register64.new(4153012533, 1846861404), new ufixnum.Register64.new(1748920495, 1313987265), new ufixnum.Register64.new(3383250845, 2370506713), new ufixnum.Register64.new(915529791, 1386281425), new ufixnum.Register64.new(1591242310, 3783757440), new ufixnum.Register64.new(1014045198, 2580574544), new ufixnum.Register64.new(1510499762, 206476048), new ufixnum.Register64.new(1459354655, 3840960558), new ufixnum.Register64.new(3935133155, 274653083), new ufixnum.Register64.new(1907097009, 595138682), new ufixnum.Register64.new(783916513, 3202841500), new ufixnum.Register64.new(569164010, 869221667), new ufixnum.Register64.new(1503975250, 403031969), new ufixnum.Register64.new(949417451, 1454275698), new ufixnum.Register64.new(2858651453, 2978969052), new ufixnum.Register64.new(2671326605, 2884206734), new ufixnum.Register64.new(3084843665, 3221975724), new ufixnum.Register64.new(1800749565, 1648962962), new ufixnum.Register64.new(1841749736, 4180561243), new ufixnum.Register64.new(893343659, 3300846206), new ufixnum.Register64.new(1935108566, 3663106254), new ufixnum.Register64.new(170085030, 1111037060), new ufixnum.Register64.new(4143534208, 687345053), new ufixnum.Register64.new(3101890978, 2058613269), new ufixnum.Register64.new(833461265, 1362369101), new ufixnum.Register64.new(2000429733, 2079283205), new ufixnum.Register64.new(1170691610, 127305267), new ufixnum.Register64.new(4178827934, 614317622), new ufixnum.Register64.new(3664063899, 2024164456), new ufixnum.Register64.new(1277667711, 1002648815), new ufixnum.Register64.new(1986138656, 3865778164), new ufixnum.Register64.new(2524398473, 2597158155), new ufixnum.Register64.new(4092484554, 3773654914), new ufixnum.Register64.new(1084192054, 13138428), new ufixnum.Register64.new(114334265, 3046272438), new ufixnum.Register64.new(1870900912, 830129544), new ufixnum.Register64.new(31902282, 2251824929), new ufixnum.Register64.new(1728001122, 3516870693), new ufixnum.Register64.new(1914731556, 3724360699), new ufixnum.Register64.new(1257682643, 3807175403), new ufixnum.Register64.new(2627292606, 3354003678), new ufixnum.Register64.new(1236067735, 2962918340), new ufixnum.Register64.new(3012314982, 3473381306), new ufixnum.Register64.new(320574323, 3313248885), new ufixnum.Register64.new(2978098382, 1637031512), new ufixnum.Register64.new(2641712569, 163191820), new ufixnum.Register64.new(310357981, 2474447314), new ufixnum.Register64.new(702167981, 3329069796), new ufixnum.Register64.new(2730612081, 1422060732), new ufixnum.Register64.new(1489310541, 2197224996), new ufixnum.Register64.new(473621329, 1533159247), new ufixnum.Register64.new(3909601326, 30114086), new ufixnum.Register64.new(4176283929, 333676491), new ufixnum.Register64.new(843700473, 3355461321), new ufixnum.Register64.new(2161089517, 3817405283), new ufixnum.Register64.new(411128730, 292352414), new ufixnum.Register64.new(1359213559, 1809130583), new ufixnum.Register64.new(364373749, 2923952040), new ufixnum.Register64.new(3688351454, 3565067471), new ufixnum.Register64.new(1155882049, 36223770), new ufixnum.Register64.new(3058160677, 1591430809), new ufixnum.Register64.new(1561430059, 3098213424), new ufixnum.Register64.new(4111043515, 701702442), new ufixnum.Register64.new(2411063828, 3909260979), new ufixnum.Register64.new(1736152097, 1474101850), new ufixnum.Register64.new(4216907712, 2744167605), new ufixnum.Register64.new(2312333132, 2210220545), new ufixnum.Register64.new(2653791455, 1274263867), new ufixnum.Register64.new(4240711218, 2360035369), new ufixnum.Register64.new(66292886, 3126340690), new ufixnum.Register64.new(3402743229, 2144886194), new ufixnum.Register64.new(3149152961, 1619177091), new ufixnum.Register64.new(3110070379, 2782567088), new ufixnum.Register64.new(2989360231, 930195775), new ufixnum.Register64.new(2220054729, 1227969240), new ufixnum.Register64.new(3190442118, 2545177630), new ufixnum.Register64.new(2510478381, 3549325670), new ufixnum.Register64.new(3224113580, 2453439787), new ufixnum.Register64.new(596160921, 234006651), new ufixnum.Register64.new(2088765690, 458176446), new ufixnum.Register64.new(527487176, 1297409283), new ufixnum.Register64.new(1418767852, 2127452116), new ufixnum.Register64.new(2833447, 3641063994), new ufixnum.Register64.new(2125374340, 2150671039), new ufixnum.Register64.new(3322032749, 3978298304), new ufixnum.Register64.new(2208770173, 1772699782), new ufixnum.Register64.new(3313131467, 821394058), new ufixnum.Register64.new(3043509476, 2045503353), new ufixnum.Register64.new(2742268943, 98352361), new ufixnum.Register64.new(3608836206, 2287406818), new ufixnum.Register64.new(2275195597, 3186161312), new ufixnum.Register64.new(2540360124, 3244598063), new ufixnum.Register64.new(2871124574, 2523322251), new ufixnum.Register64.new(2416993194, 3857040188), new ufixnum.Register64.new(2551755588, 1214877072), new ufixnum.Register64.new(3815016366, 1042188987), new ufixnum.Register64.new(2948462897, 2302401716), new ufixnum.Register64.new(1665507548, 1606145305), new ufixnum.Register64.new(2250833446, 2610193866), new ufixnum.Register64.new(509411680, 1067209196), new ufixnum.Register64.new(1306804230, 2706393527), new ufixnum.Register64.new(3211555045, 4151757745), new ufixnum.Register64.new(1091705074, 4015336429), new ufixnum.Register64.new(3406563080, 1884960419), new ufixnum.Register64.new(3880588405, 1335386180), new ufixnum.Register64.new(3445020995, 245901326), new ufixnum.Register64.new(3240464855, 1398755429), new ufixnum.Register64.new(3358729201, 1913319318), new ufixnum.Register64.new(3282057583, 1935910175)]);
    }
  });
  const _H1t = dart.privateName(sha512t, "_H1t");
  const _H2t = dart.privateName(sha512t, "_H2t");
  const _H3t = dart.privateName(sha512t, "_H3t");
  const _H4t = dart.privateName(sha512t, "_H4t");
  const _H5t = dart.privateName(sha512t, "_H5t");
  const _H6t = dart.privateName(sha512t, "_H6t");
  const _H7t = dart.privateName(sha512t, "_H7t");
  const _H8t = dart.privateName(sha512t, "_H8t");
  const _generateIVs = dart.privateName(sha512t, "_generateIVs");
  const digestSize$1 = dart.privateName(sha512t, "SHA512tDigest.digestSize");
  sha512t.SHA512tDigest = class SHA512tDigest extends long_sha2_family_digest.LongSHA2FamilyDigest {
    get digestSize() {
      return this[digestSize$1];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    get algorithmName() {
      return "SHA-512/" + dart.str(dart.notNull(this.digestSize) * 8);
    }
    reset() {
      super.reset();
      this.H1.set(this[_H1t]);
      this.H2.set(this[_H2t]);
      this.H3.set(this[_H3t]);
      this.H4.set(this[_H4t]);
      this.H5.set(this[_H5t]);
      this.H6.set(this[_H6t]);
      this.H7.set(this[_H7t]);
      this.H8.set(this[_H8t]);
    }
    doFinal(out, outOff) {
      this.finish();
      let tmp = _native_typed_data.NativeUint8List.new(64);
      let view = typed_data.ByteData.view(tmp[$buffer], tmp[$offsetInBytes], tmp[$length]);
      this.H1.pack(view, 0, typed_data.Endian.big);
      this.H2.pack(view, 8, typed_data.Endian.big);
      this.H3.pack(view, 16, typed_data.Endian.big);
      this.H4.pack(view, 24, typed_data.Endian.big);
      this.H5.pack(view, 32, typed_data.Endian.big);
      this.H6.pack(view, 40, typed_data.Endian.big);
      this.H7.pack(view, 48, typed_data.Endian.big);
      this.H8.pack(view, 56, typed_data.Endian.big);
      out[$setRange](outOff, dart.notNull(outOff) + dart.notNull(this.digestSize), tmp);
      this.reset();
      return this.digestSize;
    }
    [_generateIVs](bitLength) {
      let t3, t3$, t3$0, t3$1, t3$2, t3$3, t3$4, t3$5;
      t3 = this.H1;
      t3.set(1779033703, 4089235720);
      t3.xor(sha512t.SHA512tDigest._H_MASK);
      t3;
      t3$ = this.H2;
      t3$.set(3144134277, 2227873595);
      t3$.xor(sha512t.SHA512tDigest._H_MASK);
      t3$;
      t3$0 = this.H3;
      t3$0.set(1013904242, 4271175723);
      t3$0.xor(sha512t.SHA512tDigest._H_MASK);
      t3$0;
      t3$1 = this.H4;
      t3$1.set(2773480762, 1595750129);
      t3$1.xor(sha512t.SHA512tDigest._H_MASK);
      t3$1;
      t3$2 = this.H5;
      t3$2.set(1359893119, 2917565137);
      t3$2.xor(sha512t.SHA512tDigest._H_MASK);
      t3$2;
      t3$3 = this.H6;
      t3$3.set(2600822924, 725511199);
      t3$3.xor(sha512t.SHA512tDigest._H_MASK);
      t3$3;
      t3$4 = this.H7;
      t3$4.set(528734635, 4215389547);
      t3$4.xor(sha512t.SHA512tDigest._H_MASK);
      t3$4;
      t3$5 = this.H8;
      t3$5.set(1541459225, 327033209);
      t3$5.xor(sha512t.SHA512tDigest._H_MASK);
      t3$5;
      this.updateByte(83);
      this.updateByte(72);
      this.updateByte(65);
      this.updateByte(45);
      this.updateByte(53);
      this.updateByte(49);
      this.updateByte(50);
      this.updateByte(47);
      if (dart.notNull(bitLength) > 100) {
        this.updateByte((dart.notNull(bitLength) / 100)[$truncate]() + 48);
        bitLength = bitLength[$modulo](100);
        this.updateByte((dart.notNull(bitLength) / 10)[$truncate]() + 48);
        bitLength = bitLength[$modulo](10);
        this.updateByte(dart.notNull(bitLength) + 48);
      } else if (dart.notNull(bitLength) > 10) {
        this.updateByte((dart.notNull(bitLength) / 10)[$truncate]() + 48);
        bitLength = bitLength[$modulo](10);
        this.updateByte(dart.notNull(bitLength) + 48);
      } else {
        this.updateByte(dart.notNull(bitLength) + 48);
      }
      this.finish();
      this[_H1t].set(this.H1);
      this[_H2t].set(this.H2);
      this[_H3t].set(this.H3);
      this[_H4t].set(this.H4);
      this[_H5t].set(this.H5);
      this[_H6t].set(this.H6);
      this[_H7t].set(this.H7);
      this[_H8t].set(this.H8);
    }
  };
  (sha512t.SHA512tDigest.new = function(digestSize) {
    this[_H1t] = new ufixnum.Register64.new();
    this[_H2t] = new ufixnum.Register64.new();
    this[_H3t] = new ufixnum.Register64.new();
    this[_H4t] = new ufixnum.Register64.new();
    this[_H5t] = new ufixnum.Register64.new();
    this[_H6t] = new ufixnum.Register64.new();
    this[_H7t] = new ufixnum.Register64.new();
    this[_H8t] = new ufixnum.Register64.new();
    this[digestSize$1] = digestSize;
    sha512t.SHA512tDigest.__proto__.new.call(this);
    if (dart.notNull(this.digestSize) >= 64) {
      dart.throw(new core.ArgumentError.new("Digest size cannot be >= 64 bytes (512 bits)"));
    }
    if (this.digestSize === 48) {
      dart.throw(new core.ArgumentError.new("Digest size cannot be 48 bytes (384 bits): use SHA-384 instead"));
    }
    this[_generateIVs](dart.notNull(this.digestSize) * 8);
    this.reset();
  }).prototype = sha512t.SHA512tDigest.prototype;
  dart.addTypeTests(sha512t.SHA512tDigest);
  sha512t.SHA512tDigest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(sha512t.SHA512tDigest, () => ({
    __proto__: dart.getMethods(sha512t.SHA512tDigest.__proto__),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    [_generateIVs]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(sha512t.SHA512tDigest, () => ({
    __proto__: dart.getGetters(sha512t.SHA512tDigest.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(sha512t.SHA512tDigest, "package:pointycastle/digests/sha512t.dart");
  dart.setFieldSignature(sha512t.SHA512tDigest, () => ({
    __proto__: dart.getFields(sha512t.SHA512tDigest.__proto__),
    digestSize: dart.finalFieldType(core.int),
    [_H1t]: dart.finalFieldType(ufixnum.Register64),
    [_H2t]: dart.finalFieldType(ufixnum.Register64),
    [_H3t]: dart.finalFieldType(ufixnum.Register64),
    [_H4t]: dart.finalFieldType(ufixnum.Register64),
    [_H5t]: dart.finalFieldType(ufixnum.Register64),
    [_H6t]: dart.finalFieldType(ufixnum.Register64),
    [_H7t]: dart.finalFieldType(ufixnum.Register64),
    [_H8t]: dart.finalFieldType(ufixnum.Register64)
  }));
  dart.defineLazy(sha512t.SHA512tDigest, {
    /*sha512t.SHA512tDigest._NAME_REGEX*/get _NAME_REGEX() {
      return core.RegExp.new("^SHA-512\\/([0-9]+)$");
    },
    /*sha512t.SHA512tDigest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.new(dart.wrapType(api.Digest), sha512t.SHA512tDigest._NAME_REGEX, dart.fn((_, match) => dart.fn(() => {
        let bitLength = core.int.parse(match.group(1));
        if (bitLength[$modulo](8) !== 0) {
          dart.throw(new api.RegistryFactoryException.new("Digest length for SHA-512/t is not a multiple of 8: " + dart.str(bitLength)));
        }
        return new sha512t.SHA512tDigest.new((dart.notNull(bitLength) / 8)[$truncate]());
      }, VoidToSHA512tDigest()), StringAndMatchToFn$11()));
    },
    /*sha512t.SHA512tDigest._H_MASK*/get _H_MASK() {
      return new ufixnum.Register64.new(2779096485, 2779096485);
    }
  });
  const algorithmName$4 = dart.privateName(sha512, "SHA512Digest.algorithmName");
  const digestSize$2 = dart.privateName(sha512, "SHA512Digest.digestSize");
  sha512.SHA512Digest = class SHA512Digest extends long_sha2_family_digest.LongSHA2FamilyDigest {
    get algorithmName() {
      return this[algorithmName$4];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$2];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    reset() {
      super.reset();
      this.H1.set(1779033703, 4089235720);
      this.H2.set(3144134277, 2227873595);
      this.H3.set(1013904242, 4271175723);
      this.H4.set(2773480762, 1595750129);
      this.H5.set(1359893119, 2917565137);
      this.H6.set(2600822924, 725511199);
      this.H7.set(528734635, 4215389547);
      this.H8.set(1541459225, 327033209);
    }
    doFinal(out, outOff) {
      this.finish();
      let view = typed_data.ByteData.view(out[$buffer], out[$offsetInBytes], out[$length]);
      this.H1.pack(view, outOff, typed_data.Endian.big);
      this.H2.pack(view, dart.notNull(outOff) + 8, typed_data.Endian.big);
      this.H3.pack(view, dart.notNull(outOff) + 16, typed_data.Endian.big);
      this.H4.pack(view, dart.notNull(outOff) + 24, typed_data.Endian.big);
      this.H5.pack(view, dart.notNull(outOff) + 32, typed_data.Endian.big);
      this.H6.pack(view, dart.notNull(outOff) + 40, typed_data.Endian.big);
      this.H7.pack(view, dart.notNull(outOff) + 48, typed_data.Endian.big);
      this.H8.pack(view, dart.notNull(outOff) + 56, typed_data.Endian.big);
      this.reset();
      return 64;
    }
  };
  (sha512.SHA512Digest.new = function() {
    this[algorithmName$4] = "SHA-512";
    this[digestSize$2] = 64;
    sha512.SHA512Digest.__proto__.new.call(this);
    this.reset();
  }).prototype = sha512.SHA512Digest.prototype;
  dart.addTypeTests(sha512.SHA512Digest);
  sha512.SHA512Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(sha512.SHA512Digest, () => ({
    __proto__: dart.getMethods(sha512.SHA512Digest.__proto__),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int])
  }));
  dart.setLibraryUri(sha512.SHA512Digest, "package:pointycastle/digests/sha512.dart");
  dart.setFieldSignature(sha512.SHA512Digest, () => ({
    __proto__: dart.getFields(sha512.SHA512Digest.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(sha512.SHA512Digest, {
    /*sha512.SHA512Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "SHA-512", dart.fn(() => new sha512.SHA512Digest.new(), VoidToSHA512Digest()));
    },
    /*sha512.SHA512Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 64;
    }
  });
  const algorithmName$5 = dart.privateName(sha384, "SHA384Digest.algorithmName");
  const digestSize$3 = dart.privateName(sha384, "SHA384Digest.digestSize");
  sha384.SHA384Digest = class SHA384Digest extends long_sha2_family_digest.LongSHA2FamilyDigest {
    get algorithmName() {
      return this[algorithmName$5];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$3];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    reset() {
      super.reset();
      this.H1.set(3418070365, 3238371032);
      this.H2.set(1654270250, 914150663);
      this.H3.set(2438529370, 812702999);
      this.H4.set(355462360, 4144912697);
      this.H5.set(1731405415, 4290775857);
      this.H6.set(2394180231, 1750603025);
      this.H7.set(3675008525, 1694076839);
      this.H8.set(1203062813, 3204075428);
    }
    doFinal(out, outOff) {
      this.finish();
      let view = typed_data.ByteData.view(out[$buffer], out[$offsetInBytes], out[$length]);
      this.H1.pack(view, outOff, typed_data.Endian.big);
      this.H2.pack(view, dart.notNull(outOff) + 8, typed_data.Endian.big);
      this.H3.pack(view, dart.notNull(outOff) + 16, typed_data.Endian.big);
      this.H4.pack(view, dart.notNull(outOff) + 24, typed_data.Endian.big);
      this.H5.pack(view, dart.notNull(outOff) + 32, typed_data.Endian.big);
      this.H6.pack(view, dart.notNull(outOff) + 40, typed_data.Endian.big);
      this.reset();
      return 48;
    }
  };
  (sha384.SHA384Digest.new = function() {
    this[algorithmName$5] = "SHA-384";
    this[digestSize$3] = 48;
    sha384.SHA384Digest.__proto__.new.call(this);
    this.reset();
  }).prototype = sha384.SHA384Digest.prototype;
  dart.addTypeTests(sha384.SHA384Digest);
  sha384.SHA384Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(sha384.SHA384Digest, () => ({
    __proto__: dart.getMethods(sha384.SHA384Digest.__proto__),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int])
  }));
  dart.setLibraryUri(sha384.SHA384Digest, "package:pointycastle/digests/sha384.dart");
  dart.setFieldSignature(sha384.SHA384Digest, () => ({
    __proto__: dart.getFields(sha384.SHA384Digest.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(sha384.SHA384Digest, {
    /*sha384.SHA384Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "SHA-384", dart.fn(() => new sha384.SHA384Digest.new(), VoidToSHA384Digest()));
    },
    /*sha384.SHA384Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 48;
    }
  });
  const _rate = dart.privateName(sha3, "_rate");
  const _fixedOutputLength = dart.privateName(sha3, "_fixedOutputLength");
  const _state$1 = dart.privateName(sha3, "_state");
  const _dataQueue = dart.privateName(sha3, "_dataQueue");
  const _bitsInQueue = dart.privateName(sha3, "_bitsInQueue");
  const _squeezing = dart.privateName(sha3, "_squeezing");
  const _bitsAvailableForSqueezing = dart.privateName(sha3, "_bitsAvailableForSqueezing");
  const _keccak$ = dart.privateName(sha3, "_keccak");
  const _init$ = dart.privateName(sha3, "_init");
  const _doUpdate = dart.privateName(sha3, "_doUpdate");
  const _squeeze = dart.privateName(sha3, "_squeeze");
  const _initSponge = dart.privateName(sha3, "_initSponge");
  const _clearDataQueueSection = dart.privateName(sha3, "_clearDataQueueSection");
  const _absorb = dart.privateName(sha3, "_absorb");
  const _keccakAbsorb = dart.privateName(sha3, "_keccakAbsorb");
  const _absorbQueue = dart.privateName(sha3, "_absorbQueue");
  const _keccakExtract1024bits = dart.privateName(sha3, "_keccakExtract1024bits");
  const _keccakExtract = dart.privateName(sha3, "_keccakExtract");
  const _padAndSwitchToSqueezingPhase = dart.privateName(sha3, "_padAndSwitchToSqueezingPhase");
  const _keccakPermutation = dart.privateName(sha3, "_keccakPermutation");
  const _fromBytesToWords = dart.privateName(sha3, "_fromBytesToWords");
  const _fromWordsToBytes = dart.privateName(sha3, "_fromWordsToBytes");
  const _keccakPermutationOnWords = dart.privateName(sha3, "_keccakPermutationOnWords");
  const _keccakPermutationAfterXor = dart.privateName(sha3, "_keccakPermutationAfterXor");
  const _iota = dart.privateName(sha3, "_iota");
  sha3.SHA3Digest = class SHA3Digest extends base_digest.BaseDigest {
    get algorithmName() {
      return "SHA-3/" + dart.str(this[_fixedOutputLength]);
    }
    get digestSize() {
      return (dart.notNull(this[_fixedOutputLength]) / 8)[$truncate]();
    }
    reset() {
      this[_init$](this[_fixedOutputLength]);
    }
    updateByte(inp) {
      this[_doUpdate](_native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([inp])), 0, 8);
    }
    update(inp, inpOff, len) {
      this[_doUpdate](inp, inpOff, dart.notNull(len) * 8);
    }
    doFinal(out, outOff) {
      if (!dart.test(this[_keccak$])) {
        this.absorbBits(2, 2);
      }
      this[_squeeze](out, outOff, this[_fixedOutputLength]);
      this.reset();
      return this.digestSize;
    }
    absorbBits(data, bits) {
      if (dart.notNull(bits) < 1 || dart.notNull(bits) > 7) {
        dart.throw(new core.StateError.new("'bits' must be in the range 1 to 7"));
      }
      if (this[_bitsInQueue][$modulo](8) !== 0) {
        dart.throw(new core.StateError.new("attempt to absorb with odd length queue"));
      }
      if (dart.test(this[_squeezing])) {
        dart.throw(new core.StateError.new("attempt to absorb while squeezing"));
      }
      let mask = (1)[$leftShift](bits) - 1;
      this[_dataQueue][$_set](this[_bitsInQueue][$rightShift](3), (dart.notNull(data) & mask) >>> 0);
      this[_bitsInQueue] = dart.notNull(this[_bitsInQueue]) + dart.notNull(bits);
    }
    [_init$](bitLength) {
      switch (bitLength) {
        case 288:
        {
          this[_initSponge](1024, 576);
          break;
        }
        case 224:
        {
          this[_initSponge](1152, 448);
          break;
        }
        case 256:
        {
          this[_initSponge](1088, 512);
          break;
        }
        case 384:
        {
          this[_initSponge](832, 768);
          break;
        }
        case 512:
        {
          this[_initSponge](576, 1024);
          break;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("bitLength (" + dart.str(bitLength) + ") must be one of 224, 256, 384, or 512"));
        }
      }
    }
    [_clearDataQueueSection](off, len) {
      this[_dataQueue][$fillRange](off, dart.notNull(off) + dart.notNull(len), 0);
    }
    [_doUpdate](data, off, databitlen) {
      if (databitlen[$modulo](8) === 0) {
        this[_absorb](data, off, databitlen);
      } else {
        this[_absorb](data, off, dart.notNull(databitlen) - databitlen[$modulo](8));
        let lastByte = _native_typed_data.NativeUint8List.new(1);
        lastByte[$_set](0, data[$_get](dart.notNull(off) + (dart.notNull(databitlen) / 8)[$truncate]())[$rightShift](8 - databitlen[$modulo](8)));
        this[_absorb](lastByte, off, databitlen[$modulo](8));
      }
    }
    [_initSponge](rate, capacity) {
      if (dart.notNull(rate) + dart.notNull(capacity) !== 1600) {
        dart.throw(new core.StateError.new("Value of (rate + capacity) is not 1600: " + dart.str(dart.notNull(rate) + dart.notNull(capacity))));
      }
      if (dart.notNull(rate) <= 0 || dart.notNull(rate) >= 1600 || rate[$modulo](64) !== 0) {
        dart.throw(new core.StateError.new("Invalid rate value: " + dart.str(rate)));
      }
      this[_rate] = rate;
      this[_fixedOutputLength] = (dart.notNull(capacity) / 2)[$truncate]();
      this[_state$1][$fillRange](0, this[_state$1][$length], 0);
      this[_dataQueue][$fillRange](0, this[_dataQueue][$length], 0);
      this[_bitsInQueue] = 0;
      this[_squeezing] = false;
      this[_bitsAvailableForSqueezing] = 0;
    }
    [_absorbQueue]() {
      this[_keccakAbsorb](this[_state$1], this[_dataQueue], (dart.notNull(this[_rate]) / 8)[$truncate]());
      this[_bitsInQueue] = 0;
    }
    [_absorb](data, off, databitlen) {
      let i = null;
      let j = null;
      let wholeBlocks = null;
      if (this[_bitsInQueue][$modulo](8) !== 0) {
        dart.throw(new core.StateError.new("Attempt to absorb with odd length queue"));
      }
      if (dart.test(this[_squeezing])) {
        dart.throw(new core.StateError.new("Attempt to absorb while squeezing"));
      }
      i = 0;
      while (dart.notNull(i) < dart.notNull(databitlen)) {
        if (this[_bitsInQueue] === 0 && dart.notNull(databitlen) >= dart.notNull(this[_rate]) && dart.notNull(i) <= dart.notNull(databitlen) - dart.notNull(this[_rate])) {
          wholeBlocks = ((dart.notNull(databitlen) - dart.notNull(i)) / dart.notNull(this[_rate]))[$truncate]();
          for (let t3 = j = 0; dart.notNull(j) < dart.notNull(wholeBlocks); j = dart.notNull(j) + 1) {
            let chunk = _native_typed_data.NativeUint8List.new((dart.notNull(this[_rate]) / 8)[$truncate]());
            let offset = dart.notNull(off) + (dart.notNull(i) / 8)[$truncate]() + dart.notNull(j) * dart.notNull(chunk[$length]);
            chunk[$setRange](0, chunk[$length], data[$sublist](offset));
            this[_keccakAbsorb](this[_state$1], chunk, chunk[$length]);
          }
          i = dart.notNull(i) + dart.notNull(wholeBlocks) * dart.notNull(this[_rate]);
        } else {
          let partialBlock = dart.notNull(databitlen) - dart.notNull(i);
          if (partialBlock + dart.notNull(this[_bitsInQueue]) > dart.notNull(this[_rate])) {
            partialBlock = dart.notNull(this[_rate]) - dart.notNull(this[_bitsInQueue]);
          }
          let partialByte = partialBlock[$modulo](8);
          partialBlock = partialBlock - partialByte;
          let start = (dart.notNull(this[_bitsInQueue]) / 8)[$truncate]();
          let end = start + (partialBlock / 8)[$truncate]();
          let offset = dart.notNull(off) + (dart.notNull(i) / 8)[$truncate]();
          this[_dataQueue][$setRange](start, end, data[$sublist](offset));
          this[_bitsInQueue] = dart.notNull(this[_bitsInQueue]) + partialBlock;
          i = dart.notNull(i) + partialBlock;
          if (this[_bitsInQueue] == this[_rate]) {
            this[_absorbQueue]();
          }
          if (partialByte > 0) {
            let mask = (1)[$leftShift](partialByte) - 1;
            this[_dataQueue][$_set]((dart.notNull(this[_bitsInQueue]) / 8)[$truncate](), (dart.notNull(data[$_get](dart.notNull(off) + (dart.notNull(i) / 8)[$truncate]())) & mask) >>> 0);
            this[_bitsInQueue] = dart.notNull(this[_bitsInQueue]) + partialByte;
            i = dart.notNull(i) + partialByte;
          }
        }
      }
    }
    [_padAndSwitchToSqueezingPhase]() {
      let t5, t4, t5$, t4$, t5$0, t4$0;
      if (dart.notNull(this[_bitsInQueue]) + 1 === this[_rate]) {
        t4 = this[_dataQueue];
        t5 = (dart.notNull(this[_bitsInQueue]) / 8)[$truncate]();
        t4[$_set](t5, (dart.notNull(t4[$_get](t5)) | (1)[$leftShift](this[_bitsInQueue][$modulo](8))) >>> 0);
        this[_absorbQueue]();
        this[_clearDataQueueSection](0, (dart.notNull(this[_rate]) / 8)[$truncate]());
      } else {
        this[_clearDataQueueSection](((dart.notNull(this[_bitsInQueue]) + 7) / 8)[$truncate](), (dart.notNull(this[_rate]) / 8)[$truncate]() - ((dart.notNull(this[_bitsInQueue]) + 7) / 8)[$truncate]());
        t4$ = this[_dataQueue];
        t5$ = (dart.notNull(this[_bitsInQueue]) / 8)[$truncate]();
        t4$[$_set](t5$, (dart.notNull(t4$[$_get](t5$)) | (1)[$leftShift](this[_bitsInQueue][$modulo](8))) >>> 0);
      }
      t4$0 = this[_dataQueue];
      t5$0 = ((dart.notNull(this[_rate]) - 1) / 8)[$truncate]();
      t4$0[$_set](t5$0, (dart.notNull(t4$0[$_get](t5$0)) | (1)[$leftShift]((dart.notNull(this[_rate]) - 1)[$modulo](8))) >>> 0);
      this[_absorbQueue]();
      if (this[_rate] === 1024) {
        this[_keccakExtract1024bits](this[_state$1], this[_dataQueue]);
        this[_bitsAvailableForSqueezing] = 1024;
      } else {
        this[_keccakExtract](this[_state$1], this[_dataQueue], (dart.notNull(this[_rate]) / 64)[$truncate]());
        this[_bitsAvailableForSqueezing] = this[_rate];
      }
      this[_squeezing] = true;
    }
    [_squeeze](output, offset, outputLength) {
      let i = null;
      let partialBlock = null;
      if (!dart.test(this[_squeezing])) {
        this[_padAndSwitchToSqueezingPhase]();
      }
      if (outputLength[$modulo](8) !== 0) {
        dart.throw(new core.StateError.new("Output length not a multiple of 8: " + dart.str(outputLength)));
      }
      i = 0;
      while (dart.notNull(i) < dart.notNull(outputLength)) {
        if (this[_bitsAvailableForSqueezing] === 0) {
          this[_keccakPermutation](this[_state$1]);
          if (this[_rate] === 1024) {
            this[_keccakExtract1024bits](this[_state$1], this[_dataQueue]);
            this[_bitsAvailableForSqueezing] = 1024;
          } else {
            this[_keccakExtract](this[_state$1], this[_dataQueue], (dart.notNull(this[_rate]) / 64)[$truncate]());
            this[_bitsAvailableForSqueezing] = this[_rate];
          }
        }
        partialBlock = this[_bitsAvailableForSqueezing];
        if (dart.notNull(partialBlock) > dart.notNull(outputLength) - dart.notNull(i)) {
          partialBlock = dart.notNull(outputLength) - dart.notNull(i);
        }
        let start = dart.notNull(offset) + (dart.notNull(i) / 8)[$truncate]();
        let end = start + (dart.notNull(partialBlock) / 8)[$truncate]();
        let offset2 = ((dart.notNull(this[_rate]) - dart.notNull(this[_bitsAvailableForSqueezing])) / 8)[$truncate]();
        output[$setRange](start, end, this[_dataQueue][$sublist](offset2));
        this[_bitsAvailableForSqueezing] = dart.notNull(this[_bitsAvailableForSqueezing]) - dart.notNull(partialBlock);
        i = dart.notNull(i) + dart.notNull(partialBlock);
      }
    }
    [_fromBytesToWords](stateAsWords, state) {
      let r = new ufixnum.Register64.new();
      for (let i = 0; i < (1600 / 64)[$truncate](); i = i + 1) {
        let index = i * (64 / 8)[$truncate]();
        stateAsWords._get(i).set(0);
        for (let j = 0; j < (64 / 8)[$truncate](); j = j + 1) {
          r.set(state[$_get](index + j));
          r.shiftl(8 * j);
          stateAsWords._get(i).or(r);
        }
      }
    }
    [_fromWordsToBytes](state, stateAsWords) {
      let r = new ufixnum.Register64.new();
      for (let i = 0; i < (1600 / 64)[$truncate](); i = i + 1) {
        let index = i * (64 / 8)[$truncate]();
        for (let j = 0; j < (64 / 8)[$truncate](); j = j + 1) {
          r.set(stateAsWords._get(i));
          r.shiftr(8 * j);
          state[$_set](index + j, r.lo32);
        }
      }
    }
    [_keccakPermutation](state) {
      let longState = new ufixnum.Register64List.new((dart.notNull(state[$length]) / 8)[$truncate]());
      this[_fromBytesToWords](longState, state);
      this[_keccakPermutationOnWords](longState);
      this[_fromWordsToBytes](state, longState);
    }
    [_keccakPermutationAfterXor](state, data, dataLengthInBytes) {
      let t5, t4;
      for (let i = 0; i < dart.notNull(dataLengthInBytes); i = i + 1) {
        t4 = state;
        t5 = i;
        t4[$_set](t5, (dart.notNull(t4[$_get](t5)) ^ dart.notNull(data[$_get](i))) >>> 0);
      }
      this[_keccakPermutation](state);
    }
    [_keccakPermutationOnWords](state) {
      for (let i = 0; i < 24; i = i + 1) {
        this.theta(state);
        this.rho(state);
        this.pi(state);
        this.chi(state);
        this[_iota](state, i);
      }
    }
    theta(A) {
      let C = new ufixnum.Register64List.new(5);
      let r0 = new ufixnum.Register64.new();
      let r1 = new ufixnum.Register64.new();
      for (let x = 0; x < 5; x = x + 1) {
        C._get(x).set(0);
        for (let y = 0; y < 5; y = y + 1) {
          C._get(x).xor(A._get(x + 5 * y));
        }
      }
      for (let x = 0; x < 5; x = x + 1) {
        r0.set(C._get((x + 1)[$modulo](5)));
        r0.shiftl(1);
        r1.set(C._get((x + 1)[$modulo](5)));
        r1.shiftr(63);
        r0.xor(r1);
        r0.xor(C._get((x + 4)[$modulo](5)));
        for (let y = 0; y < 5; y = y + 1) {
          A._get(x + 5 * y).xor(r0);
        }
      }
    }
    rho(A) {
      let r = new ufixnum.Register64.new();
      for (let x = 0; x < 5; x = x + 1) {
        for (let y = 0; y < 5; y = y + 1) {
          let index = x + 5 * y;
          if (sha3.SHA3Digest._keccakRhoOffsets[$_get](index) !== 0) {
            r.set(A._get(index));
            r.shiftr(64 - dart.notNull(sha3.SHA3Digest._keccakRhoOffsets[$_get](index)));
            A._get(index).shiftl(sha3.SHA3Digest._keccakRhoOffsets[$_get](index));
            A._get(index).xor(r);
          }
        }
      }
    }
    pi(A) {
      let tempA = new ufixnum.Register64List.new(25);
      tempA.setRange(0, tempA.length, A);
      for (let x = 0; x < 5; x = x + 1) {
        for (let y = 0; y < 5; y = y + 1) {
          A._get(y + 5 * (2 * x + 3 * y)[$modulo](5)).set(tempA._get(x + 5 * y));
        }
      }
    }
    chi(A) {
      let chiC = new ufixnum.Register64List.new(5);
      for (let y = 0; y < 5; y = y + 1) {
        for (let x = 0; x < 5; x = x + 1) {
          chiC._get(x).set(A._get((x + 1)[$modulo](5) + 5 * y));
          chiC._get(x).not();
          chiC._get(x).and(A._get((x + 2)[$modulo](5) + 5 * y));
          chiC._get(x).xor(A._get(x + 5 * y));
        }
        for (let x = 0; x < 5; x = x + 1) {
          A._get(x + 5 * y).set(chiC._get(x));
        }
      }
    }
    [_iota](A, indexRound) {
      A._get((0)[$modulo](5) + 5 * (0)[$modulo](5)).xor(sha3.SHA3Digest._keccakRoundConstants._get(indexRound));
    }
    [_keccakAbsorb](byteState, data, dataInBytes) {
      this[_keccakPermutationAfterXor](byteState, data, dataInBytes);
    }
    [_keccakExtract1024bits](byteState, data) {
      data[$setRange](0, 128, byteState);
    }
    [_keccakExtract](byteState, data, laneCount) {
      data[$setRange](0, dart.notNull(laneCount) * 8, byteState);
    }
  };
  (sha3.SHA3Digest.new = function(bitLength = 0, _keccak = true) {
    this[_rate] = null;
    this[_fixedOutputLength] = null;
    this[_state$1] = _native_typed_data.NativeUint8List.new(200);
    this[_dataQueue] = _native_typed_data.NativeUint8List.new(192);
    this[_bitsInQueue] = null;
    this[_squeezing] = null;
    this[_bitsAvailableForSqueezing] = null;
    this[_keccak$] = _keccak;
    this[_init$](bitLength);
  }).prototype = sha3.SHA3Digest.prototype;
  dart.addTypeTests(sha3.SHA3Digest);
  sha3.SHA3Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(sha3.SHA3Digest, () => ({
    __proto__: dart.getMethods(sha3.SHA3Digest.__proto__),
    reset: dart.fnType(dart.void, []),
    updateByte: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    absorbBits: dart.fnType(dart.void, [core.int, core.int]),
    [_init$]: dart.fnType(dart.void, [core.int]),
    [_clearDataQueueSection]: dart.fnType(dart.void, [core.int, core.int]),
    [_doUpdate]: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    [_initSponge]: dart.fnType(dart.void, [core.int, core.int]),
    [_absorbQueue]: dart.fnType(dart.void, []),
    [_absorb]: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    [_padAndSwitchToSqueezingPhase]: dart.fnType(dart.void, []),
    [_squeeze]: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    [_fromBytesToWords]: dart.fnType(dart.void, [ufixnum.Register64List, typed_data.Uint8List]),
    [_fromWordsToBytes]: dart.fnType(dart.void, [typed_data.Uint8List, ufixnum.Register64List]),
    [_keccakPermutation]: dart.fnType(dart.void, [typed_data.Uint8List]),
    [_keccakPermutationAfterXor]: dart.fnType(dart.void, [typed_data.Uint8List, typed_data.Uint8List, core.int]),
    [_keccakPermutationOnWords]: dart.fnType(dart.void, [ufixnum.Register64List]),
    theta: dart.fnType(dart.void, [ufixnum.Register64List]),
    rho: dart.fnType(dart.void, [ufixnum.Register64List]),
    pi: dart.fnType(dart.void, [ufixnum.Register64List]),
    chi: dart.fnType(dart.void, [ufixnum.Register64List]),
    [_iota]: dart.fnType(dart.void, [ufixnum.Register64List, core.int]),
    [_keccakAbsorb]: dart.fnType(dart.void, [typed_data.Uint8List, typed_data.Uint8List, core.int]),
    [_keccakExtract1024bits]: dart.fnType(dart.void, [typed_data.Uint8List, typed_data.Uint8List]),
    [_keccakExtract]: dart.fnType(dart.void, [typed_data.Uint8List, typed_data.Uint8List, core.int])
  }));
  dart.setGetterSignature(sha3.SHA3Digest, () => ({
    __proto__: dart.getGetters(sha3.SHA3Digest.__proto__),
    algorithmName: core.String,
    digestSize: core.int
  }));
  dart.setLibraryUri(sha3.SHA3Digest, "package:pointycastle/digests/sha3.dart");
  dart.setFieldSignature(sha3.SHA3Digest, () => ({
    __proto__: dart.getFields(sha3.SHA3Digest.__proto__),
    [_rate]: dart.fieldType(core.int),
    [_fixedOutputLength]: dart.fieldType(core.int),
    [_state$1]: dart.finalFieldType(typed_data.Uint8List),
    [_dataQueue]: dart.finalFieldType(typed_data.Uint8List),
    [_bitsInQueue]: dart.fieldType(core.int),
    [_squeezing]: dart.fieldType(core.bool),
    [_keccak$]: dart.fieldType(core.bool),
    [_bitsAvailableForSqueezing]: dart.fieldType(core.int)
  }));
  dart.defineLazy(sha3.SHA3Digest, {
    /*sha3.SHA3Digest._NAME_REGEX*/get _NAME_REGEX() {
      return core.RegExp.new("^SHA-3\\/([0-9]+)$");
    },
    /*sha3.SHA3Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.new(dart.wrapType(api.Digest), sha3.SHA3Digest._NAME_REGEX, dart.fn((_, match) => dart.fn(() => {
        let bitLength = core.int.parse(match.group(1));
        return new sha3.SHA3Digest.new(bitLength);
      }, VoidToSHA3Digest()), StringAndMatchToFn$12()));
    },
    /*sha3.SHA3Digest._keccakRoundConstants*/get _keccakRoundConstants() {
      return new ufixnum.Register64List.from(JSArrayOfListOfint().of([JSArrayOfint().of([0, 1]), JSArrayOfint().of([0, 32898]), JSArrayOfint().of([2147483648, 32906]), JSArrayOfint().of([2147483648, 2147516416]), JSArrayOfint().of([0, 32907]), JSArrayOfint().of([0, 2147483649]), JSArrayOfint().of([2147483648, 2147516545]), JSArrayOfint().of([2147483648, 32777]), JSArrayOfint().of([0, 138]), JSArrayOfint().of([0, 136]), JSArrayOfint().of([0, 2147516425]), JSArrayOfint().of([0, 2147483658]), JSArrayOfint().of([0, 2147516555]), JSArrayOfint().of([2147483648, 139]), JSArrayOfint().of([2147483648, 32905]), JSArrayOfint().of([2147483648, 32771]), JSArrayOfint().of([2147483648, 32770]), JSArrayOfint().of([2147483648, 128]), JSArrayOfint().of([0, 32778]), JSArrayOfint().of([2147483648, 2147483658]), JSArrayOfint().of([2147483648, 2147516545]), JSArrayOfint().of([2147483648, 32896]), JSArrayOfint().of([0, 2147483649]), JSArrayOfint().of([2147483648, 2147516424])]));
    },
    /*sha3.SHA3Digest._keccakRhoOffsets*/get _keccakRhoOffsets() {
      return JSArrayOfint().of([0, 1, 62, 28, 27, 36, 44, 6, 55, 20, 3, 10, 43, 25, 39, 41, 45, 15, 21, 8, 18, 2, 61, 56, 14]);
    }
  });
  const _Theta1$ = dart.privateName(sha224, "_Theta1");
  const _Theta0$ = dart.privateName(sha224, "_Theta0");
  const _Sum1$0 = dart.privateName(sha224, "_Sum1");
  const _Ch$0 = dart.privateName(sha224, "_Ch");
  const _Sum0$0 = dart.privateName(sha224, "_Sum0");
  const _Maj$0 = dart.privateName(sha224, "_Maj");
  const algorithmName$6 = dart.privateName(sha224, "SHA224Digest.algorithmName");
  const digestSize$4 = dart.privateName(sha224, "SHA224Digest.digestSize");
  sha224.SHA224Digest = class SHA224Digest extends md4_family_digest.MD4FamilyDigest {
    get algorithmName() {
      return this[algorithmName$6];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$4];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    resetState() {
      dart.dsend(this.state, '_set', [0, 3238371032]);
      dart.dsend(this.state, '_set', [1, 914150663]);
      dart.dsend(this.state, '_set', [2, 812702999]);
      dart.dsend(this.state, '_set', [3, 4144912697]);
      dart.dsend(this.state, '_set', [4, 4290775857]);
      dart.dsend(this.state, '_set', [5, 1750603025]);
      dart.dsend(this.state, '_set', [6, 1694076839]);
      dart.dsend(this.state, '_set', [7, 3204075428]);
    }
    processBlock() {
      for (let t = 16; t < 64; t = t + 1) {
        dart.dsend(this.buffer, '_set', [t, ufixnum.clip32(dart.asInt(dart.notNull(this[_Theta1$](core.int._check(dart.dsend(this.buffer, '_get', [t - 2])))) + dart.notNull(core.num._check(dart.dsend(this.buffer, '_get', [t - 7]))) + dart.notNull(this[_Theta0$](core.int._check(dart.dsend(this.buffer, '_get', [t - 15])))) + dart.notNull(core.num._check(dart.dsend(this.buffer, '_get', [t - 16])))))]);
      }
      let a = dart.dsend(this.state, '_get', [0]);
      let b = dart.dsend(this.state, '_get', [1]);
      let c = dart.dsend(this.state, '_get', [2]);
      let d = dart.dsend(this.state, '_get', [3]);
      let e = dart.dsend(this.state, '_get', [4]);
      let f = dart.dsend(this.state, '_get', [5]);
      let g = dart.dsend(this.state, '_get', [6]);
      let h = dart.dsend(this.state, '_get', [7]);
      let t = 0;
      for (let i = 0; i < 8; i = i + 1) {
        h = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(h, '+', [this[_Sum1$0](core.int._check(e))]), '+', [this[_Ch$0](core.int._check(e), core.int._check(f), core.int._check(g))]), '+', [sha224.SHA224Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        d = ufixnum.clip32(core.int._check(dart.dsend(d, '+', [h])));
        h = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(h, '+', [this[_Sum0$0](core.int._check(a))]), '+', [this[_Maj$0](core.int._check(a), core.int._check(b), core.int._check(c))])));
        t = t + 1;
        g = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(g, '+', [this[_Sum1$0](core.int._check(d))]), '+', [this[_Ch$0](core.int._check(d), core.int._check(e), core.int._check(f))]), '+', [sha224.SHA224Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        c = ufixnum.clip32(core.int._check(dart.dsend(c, '+', [g])));
        g = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(g, '+', [this[_Sum0$0](core.int._check(h))]), '+', [this[_Maj$0](core.int._check(h), core.int._check(a), core.int._check(b))])));
        t = t + 1;
        f = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(f, '+', [this[_Sum1$0](core.int._check(c))]), '+', [this[_Ch$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [sha224.SHA224Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        b = ufixnum.clip32(core.int._check(dart.dsend(b, '+', [f])));
        f = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(f, '+', [this[_Sum0$0](core.int._check(g))]), '+', [this[_Maj$0](core.int._check(g), core.int._check(h), core.int._check(a))])));
        t = t + 1;
        e = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_Sum1$0](core.int._check(b))]), '+', [this[_Ch$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [sha224.SHA224Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        a = ufixnum.clip32(core.int._check(dart.dsend(a, '+', [e])));
        e = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(e, '+', [this[_Sum0$0](core.int._check(f))]), '+', [this[_Maj$0](core.int._check(f), core.int._check(g), core.int._check(h))])));
        t = t + 1;
        d = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_Sum1$0](core.int._check(a))]), '+', [this[_Ch$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [sha224.SHA224Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        h = ufixnum.clip32(core.int._check(dart.dsend(h, '+', [d])));
        d = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_Sum0$0](core.int._check(e))]), '+', [this[_Maj$0](core.int._check(e), core.int._check(f), core.int._check(g))])));
        t = t + 1;
        c = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_Sum1$0](core.int._check(h))]), '+', [this[_Ch$0](core.int._check(h), core.int._check(a), core.int._check(b))]), '+', [sha224.SHA224Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        g = ufixnum.clip32(core.int._check(dart.dsend(g, '+', [c])));
        c = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_Sum0$0](core.int._check(d))]), '+', [this[_Maj$0](core.int._check(d), core.int._check(e), core.int._check(f))])));
        t = t + 1;
        b = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_Sum1$0](core.int._check(g))]), '+', [this[_Ch$0](core.int._check(g), core.int._check(h), core.int._check(a))]), '+', [sha224.SHA224Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        f = ufixnum.clip32(core.int._check(dart.dsend(f, '+', [b])));
        b = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_Sum0$0](core.int._check(c))]), '+', [this[_Maj$0](core.int._check(c), core.int._check(d), core.int._check(e))])));
        t = t + 1;
        a = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_Sum1$0](core.int._check(f))]), '+', [this[_Ch$0](core.int._check(f), core.int._check(g), core.int._check(h))]), '+', [sha224.SHA224Digest._K[$_get](t)]), '+', [dart.dsend(this.buffer, '_get', [t])])));
        e = ufixnum.clip32(core.int._check(dart.dsend(e, '+', [a])));
        a = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_Sum0$0](core.int._check(b))]), '+', [this[_Maj$0](core.int._check(b), core.int._check(c), core.int._check(d))])));
        t = t + 1;
      }
      dart.dsend(this.state, '_set', [0, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [0]), '+', [a])))]);
      dart.dsend(this.state, '_set', [1, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [1]), '+', [b])))]);
      dart.dsend(this.state, '_set', [2, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [2]), '+', [c])))]);
      dart.dsend(this.state, '_set', [3, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [3]), '+', [d])))]);
      dart.dsend(this.state, '_set', [4, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [4]), '+', [e])))]);
      dart.dsend(this.state, '_set', [5, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [5]), '+', [f])))]);
      dart.dsend(this.state, '_set', [6, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [6]), '+', [g])))]);
      dart.dsend(this.state, '_set', [7, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [7]), '+', [h])))]);
    }
    [_Ch$0](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) ^ (~dart.notNull(x) & dart.notNull(z)) >>> 0) >>> 0;
    }
    [_Maj$0](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) ^ (dart.notNull(x) & dart.notNull(z)) >>> 0 ^ (dart.notNull(y) & dart.notNull(z)) >>> 0) >>> 0;
    }
    [_Sum0$0](x) {
      return (dart.notNull(ufixnum.rotr32(x, 2)) ^ dart.notNull(ufixnum.rotr32(x, 13)) ^ dart.notNull(ufixnum.rotr32(x, 22))) >>> 0;
    }
    [_Sum1$0](x) {
      return (dart.notNull(ufixnum.rotr32(x, 6)) ^ dart.notNull(ufixnum.rotr32(x, 11)) ^ dart.notNull(ufixnum.rotr32(x, 25))) >>> 0;
    }
    [_Theta0$](x) {
      return (dart.notNull(ufixnum.rotr32(x, 7)) ^ dart.notNull(ufixnum.rotr32(x, 18)) ^ dart.notNull(ufixnum.shiftr32(x, 3))) >>> 0;
    }
    [_Theta1$](x) {
      return (dart.notNull(ufixnum.rotr32(x, 17)) ^ dart.notNull(ufixnum.rotr32(x, 19)) ^ dart.notNull(ufixnum.shiftr32(x, 10))) >>> 0;
    }
  };
  (sha224.SHA224Digest.new = function() {
    this[algorithmName$6] = "SHA-224";
    this[digestSize$4] = 28;
    sha224.SHA224Digest.__proto__.new.call(this, typed_data.Endian.big, 8, 64, 7);
    ;
  }).prototype = sha224.SHA224Digest.prototype;
  dart.addTypeTests(sha224.SHA224Digest);
  sha224.SHA224Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(sha224.SHA224Digest, () => ({
    __proto__: dart.getMethods(sha224.SHA224Digest.__proto__),
    resetState: dart.fnType(dart.void, []),
    processBlock: dart.fnType(dart.void, []),
    [_Ch$0]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_Maj$0]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_Sum0$0]: dart.fnType(core.int, [core.int]),
    [_Sum1$0]: dart.fnType(core.int, [core.int]),
    [_Theta0$]: dart.fnType(core.int, [core.int]),
    [_Theta1$]: dart.fnType(core.int, [core.int])
  }));
  dart.setLibraryUri(sha224.SHA224Digest, "package:pointycastle/digests/sha224.dart");
  dart.setFieldSignature(sha224.SHA224Digest, () => ({
    __proto__: dart.getFields(sha224.SHA224Digest.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(sha224.SHA224Digest, {
    /*sha224.SHA224Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "SHA-224", dart.fn(() => new sha224.SHA224Digest.new(), VoidToSHA224Digest()));
    },
    /*sha224.SHA224Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 28;
    },
    /*sha224.SHA224Digest._K*/get _K() {
      return JSArrayOfint().of([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
    }
  });
  const _f = dart.privateName(sha1, "_f");
  const _h = dart.privateName(sha1, "_h");
  const _g = dart.privateName(sha1, "_g");
  const algorithmName$7 = dart.privateName(sha1, "SHA1Digest.algorithmName");
  const digestSize$5 = dart.privateName(sha1, "SHA1Digest.digestSize");
  sha1.SHA1Digest = class SHA1Digest extends md4_family_digest.MD4FamilyDigest {
    get algorithmName() {
      return this[algorithmName$7];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$5];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    resetState() {
      dart.dsend(this.state, '_set', [0, 1732584193]);
      dart.dsend(this.state, '_set', [1, 4023233417]);
      dart.dsend(this.state, '_set', [2, 2562383102]);
      dart.dsend(this.state, '_set', [3, 271733878]);
      dart.dsend(this.state, '_set', [4, 3285377520]);
    }
    processBlock() {
      let t4, t4$, t4$0, t4$1, t4$2, t4$3, t4$4, t4$5, t4$6, t4$7, t4$8, t4$9, t4$10, t4$11, t4$12, t4$13, t4$14, t4$15, t4$16, t4$17;
      for (let i = 16; i < 80; i = i + 1) {
        let t = dart.dsend(dart.dsend(dart.dsend(dart.dsend(this.buffer, '_get', [i - 3]), '^', [dart.dsend(this.buffer, '_get', [i - 8])]), '^', [dart.dsend(this.buffer, '_get', [i - 14])]), '^', [dart.dsend(this.buffer, '_get', [i - 16])]);
        dart.dsend(this.buffer, '_set', [i, ufixnum.rotl32(core.int._check(t), 1)]);
      }
      let A = dart.dsend(this.state, '_get', [0]);
      let B = dart.dsend(this.state, '_get', [1]);
      let C = dart.dsend(this.state, '_get', [2]);
      let D = dart.dsend(this.state, '_get', [3]);
      let E = dart.dsend(this.state, '_get', [4]);
      let idx = 0;
      for (let j = 0; j < 4; j = j + 1) {
        E = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(E, '+', [ufixnum.rotl32(core.int._check(A), 5)]), '+', [this[_f](core.int._check(B), core.int._check(C), core.int._check(D))]), '+', [dart.dsend(this.buffer, '_get', [(t4 = idx, idx = t4 + 1, t4)])]), '+', [1518500249])));
        B = ufixnum.rotl32(core.int._check(B), 30);
        D = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(D, '+', [ufixnum.rotl32(core.int._check(E), 5)]), '+', [this[_f](core.int._check(A), core.int._check(B), core.int._check(C))]), '+', [dart.dsend(this.buffer, '_get', [(t4$ = idx, idx = t4$ + 1, t4$)])]), '+', [1518500249])));
        A = ufixnum.rotl32(core.int._check(A), 30);
        C = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(C, '+', [ufixnum.rotl32(core.int._check(D), 5)]), '+', [this[_f](core.int._check(E), core.int._check(A), core.int._check(B))]), '+', [dart.dsend(this.buffer, '_get', [(t4$0 = idx, idx = t4$0 + 1, t4$0)])]), '+', [1518500249])));
        E = ufixnum.rotl32(core.int._check(E), 30);
        B = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(B, '+', [ufixnum.rotl32(core.int._check(C), 5)]), '+', [this[_f](core.int._check(D), core.int._check(E), core.int._check(A))]), '+', [dart.dsend(this.buffer, '_get', [(t4$1 = idx, idx = t4$1 + 1, t4$1)])]), '+', [1518500249])));
        D = ufixnum.rotl32(core.int._check(D), 30);
        A = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(A, '+', [ufixnum.rotl32(core.int._check(B), 5)]), '+', [this[_f](core.int._check(C), core.int._check(D), core.int._check(E))]), '+', [dart.dsend(this.buffer, '_get', [(t4$2 = idx, idx = t4$2 + 1, t4$2)])]), '+', [1518500249])));
        C = ufixnum.rotl32(core.int._check(C), 30);
      }
      for (let j = 0; j < 4; j = j + 1) {
        E = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(E, '+', [ufixnum.rotl32(core.int._check(A), 5)]), '+', [this[_h](core.int._check(B), core.int._check(C), core.int._check(D))]), '+', [dart.dsend(this.buffer, '_get', [(t4$3 = idx, idx = t4$3 + 1, t4$3)])]), '+', [1859775393])));
        B = ufixnum.rotl32(core.int._check(B), 30);
        D = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(D, '+', [ufixnum.rotl32(core.int._check(E), 5)]), '+', [this[_h](core.int._check(A), core.int._check(B), core.int._check(C))]), '+', [dart.dsend(this.buffer, '_get', [(t4$4 = idx, idx = t4$4 + 1, t4$4)])]), '+', [1859775393])));
        A = ufixnum.rotl32(core.int._check(A), 30);
        C = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(C, '+', [ufixnum.rotl32(core.int._check(D), 5)]), '+', [this[_h](core.int._check(E), core.int._check(A), core.int._check(B))]), '+', [dart.dsend(this.buffer, '_get', [(t4$5 = idx, idx = t4$5 + 1, t4$5)])]), '+', [1859775393])));
        E = ufixnum.rotl32(core.int._check(E), 30);
        B = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(B, '+', [ufixnum.rotl32(core.int._check(C), 5)]), '+', [this[_h](core.int._check(D), core.int._check(E), core.int._check(A))]), '+', [dart.dsend(this.buffer, '_get', [(t4$6 = idx, idx = t4$6 + 1, t4$6)])]), '+', [1859775393])));
        D = ufixnum.rotl32(core.int._check(D), 30);
        A = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(A, '+', [ufixnum.rotl32(core.int._check(B), 5)]), '+', [this[_h](core.int._check(C), core.int._check(D), core.int._check(E))]), '+', [dart.dsend(this.buffer, '_get', [(t4$7 = idx, idx = t4$7 + 1, t4$7)])]), '+', [1859775393])));
        C = ufixnum.rotl32(core.int._check(C), 30);
      }
      for (let j = 0; j < 4; j = j + 1) {
        E = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(E, '+', [ufixnum.rotl32(core.int._check(A), 5)]), '+', [this[_g](core.int._check(B), core.int._check(C), core.int._check(D))]), '+', [dart.dsend(this.buffer, '_get', [(t4$8 = idx, idx = t4$8 + 1, t4$8)])]), '+', [2400959708.0])));
        B = ufixnum.rotl32(core.int._check(B), 30);
        D = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(D, '+', [ufixnum.rotl32(core.int._check(E), 5)]), '+', [this[_g](core.int._check(A), core.int._check(B), core.int._check(C))]), '+', [dart.dsend(this.buffer, '_get', [(t4$9 = idx, idx = t4$9 + 1, t4$9)])]), '+', [2400959708.0])));
        A = ufixnum.rotl32(core.int._check(A), 30);
        C = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(C, '+', [ufixnum.rotl32(core.int._check(D), 5)]), '+', [this[_g](core.int._check(E), core.int._check(A), core.int._check(B))]), '+', [dart.dsend(this.buffer, '_get', [(t4$10 = idx, idx = t4$10 + 1, t4$10)])]), '+', [2400959708.0])));
        E = ufixnum.rotl32(core.int._check(E), 30);
        B = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(B, '+', [ufixnum.rotl32(core.int._check(C), 5)]), '+', [this[_g](core.int._check(D), core.int._check(E), core.int._check(A))]), '+', [dart.dsend(this.buffer, '_get', [(t4$11 = idx, idx = t4$11 + 1, t4$11)])]), '+', [2400959708.0])));
        D = ufixnum.rotl32(core.int._check(D), 30);
        A = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(A, '+', [ufixnum.rotl32(core.int._check(B), 5)]), '+', [this[_g](core.int._check(C), core.int._check(D), core.int._check(E))]), '+', [dart.dsend(this.buffer, '_get', [(t4$12 = idx, idx = t4$12 + 1, t4$12)])]), '+', [2400959708.0])));
        C = ufixnum.rotl32(core.int._check(C), 30);
      }
      for (let j = 0; j < 4; j = j + 1) {
        E = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(E, '+', [ufixnum.rotl32(core.int._check(A), 5)]), '+', [this[_h](core.int._check(B), core.int._check(C), core.int._check(D))]), '+', [dart.dsend(this.buffer, '_get', [(t4$13 = idx, idx = t4$13 + 1, t4$13)])]), '+', [3395469782.0])));
        B = ufixnum.rotl32(core.int._check(B), 30);
        D = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(D, '+', [ufixnum.rotl32(core.int._check(E), 5)]), '+', [this[_h](core.int._check(A), core.int._check(B), core.int._check(C))]), '+', [dart.dsend(this.buffer, '_get', [(t4$14 = idx, idx = t4$14 + 1, t4$14)])]), '+', [3395469782.0])));
        A = ufixnum.rotl32(core.int._check(A), 30);
        C = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(C, '+', [ufixnum.rotl32(core.int._check(D), 5)]), '+', [this[_h](core.int._check(E), core.int._check(A), core.int._check(B))]), '+', [dart.dsend(this.buffer, '_get', [(t4$15 = idx, idx = t4$15 + 1, t4$15)])]), '+', [3395469782.0])));
        E = ufixnum.rotl32(core.int._check(E), 30);
        B = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(B, '+', [ufixnum.rotl32(core.int._check(C), 5)]), '+', [this[_h](core.int._check(D), core.int._check(E), core.int._check(A))]), '+', [dart.dsend(this.buffer, '_get', [(t4$16 = idx, idx = t4$16 + 1, t4$16)])]), '+', [3395469782.0])));
        D = ufixnum.rotl32(core.int._check(D), 30);
        A = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dart.dsend(A, '+', [ufixnum.rotl32(core.int._check(B), 5)]), '+', [this[_h](core.int._check(C), core.int._check(D), core.int._check(E))]), '+', [dart.dsend(this.buffer, '_get', [(t4$17 = idx, idx = t4$17 + 1, t4$17)])]), '+', [3395469782.0])));
        C = ufixnum.rotl32(core.int._check(C), 30);
      }
      dart.dsend(this.state, '_set', [0, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [0]), '+', [A])))]);
      dart.dsend(this.state, '_set', [1, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [1]), '+', [B])))]);
      dart.dsend(this.state, '_set', [2, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [2]), '+', [C])))]);
      dart.dsend(this.state, '_set', [3, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [3]), '+', [D])))]);
      dart.dsend(this.state, '_set', [4, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [4]), '+', [E])))]);
    }
    [_f](u, v, w) {
      return (dart.notNull(u) & dart.notNull(v) | (~dart.notNull(u) & dart.notNull(w)) >>> 0) >>> 0;
    }
    [_h](u, v, w) {
      return (dart.notNull(u) ^ dart.notNull(v) ^ dart.notNull(w)) >>> 0;
    }
    [_g](u, v, w) {
      return (dart.notNull(u) & dart.notNull(v) | (dart.notNull(u) & dart.notNull(w)) >>> 0 | (dart.notNull(v) & dart.notNull(w)) >>> 0) >>> 0;
    }
  };
  (sha1.SHA1Digest.new = function() {
    this[algorithmName$7] = "SHA-1";
    this[digestSize$5] = 20;
    sha1.SHA1Digest.__proto__.new.call(this, typed_data.Endian.big, 5, 80);
    ;
  }).prototype = sha1.SHA1Digest.prototype;
  dart.addTypeTests(sha1.SHA1Digest);
  sha1.SHA1Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(sha1.SHA1Digest, () => ({
    __proto__: dart.getMethods(sha1.SHA1Digest.__proto__),
    resetState: dart.fnType(dart.void, []),
    processBlock: dart.fnType(dart.void, []),
    [_f]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_h]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_g]: dart.fnType(core.int, [core.int, core.int, core.int])
  }));
  dart.setLibraryUri(sha1.SHA1Digest, "package:pointycastle/digests/sha1.dart");
  dart.setFieldSignature(sha1.SHA1Digest, () => ({
    __proto__: dart.getFields(sha1.SHA1Digest.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(sha1.SHA1Digest, {
    /*sha1.SHA1Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "SHA-1", dart.fn(() => new sha1.SHA1Digest.new(), VoidToSHA1Digest()));
    },
    /*sha1.SHA1Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 20;
    },
    /*sha1.SHA1Digest._Y1*/get _Y1() {
      return 1518500249;
    },
    /*sha1.SHA1Digest._Y2*/get _Y2() {
      return 1859775393;
    },
    /*sha1.SHA1Digest._Y3*/get _Y3() {
      return 2400959708.0;
    },
    /*sha1.SHA1Digest._Y4*/get _Y4() {
      return 3395469782.0;
    }
  });
  const _f1 = dart.privateName(ripemd320, "_f1");
  const _f5 = dart.privateName(ripemd320, "_f5");
  const _f2 = dart.privateName(ripemd320, "_f2");
  const _f4 = dart.privateName(ripemd320, "_f4");
  const _f3 = dart.privateName(ripemd320, "_f3");
  const algorithmName$8 = dart.privateName(ripemd320, "RIPEMD320Digest.algorithmName");
  const digestSize$6 = dart.privateName(ripemd320, "RIPEMD320Digest.digestSize");
  ripemd320.RIPEMD320Digest = class RIPEMD320Digest extends md4_family_digest.MD4FamilyDigest {
    get algorithmName() {
      return this[algorithmName$8];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$6];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    resetState() {
      dart.dsend(this.state, '_set', [0, 1732584193]);
      dart.dsend(this.state, '_set', [1, 4023233417]);
      dart.dsend(this.state, '_set', [2, 2562383102]);
      dart.dsend(this.state, '_set', [3, 271733878]);
      dart.dsend(this.state, '_set', [4, 3285377520]);
      dart.dsend(this.state, '_set', [5, 1985229328]);
      dart.dsend(this.state, '_set', [6, 4275878552]);
      dart.dsend(this.state, '_set', [7, 2309737967]);
      dart.dsend(this.state, '_set', [8, 19088743]);
      dart.dsend(this.state, '_set', [9, 1009589775]);
    }
    processBlock() {
      let a = null;
      let aa = null;
      let b = null;
      let bb = null;
      let c = null;
      let cc = null;
      let d = null;
      let dd = null;
      let e = null;
      let ee = null;
      let t = null;
      a = dart.dsend(this.state, '_get', [0]);
      b = dart.dsend(this.state, '_get', [1]);
      c = dart.dsend(this.state, '_get', [2]);
      d = dart.dsend(this.state, '_get', [3]);
      e = dart.dsend(this.state, '_get', [4]);
      aa = dart.dsend(this.state, '_get', [5]);
      bb = dart.dsend(this.state, '_get', [6]);
      cc = dart.dsend(this.state, '_get', [7]);
      dd = dart.dsend(this.state, '_get', [8]);
      ee = dart.dsend(this.state, '_get', [9]);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_f1](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [0])])), 11), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(e, '+', [this[_f1](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [1])])), 14), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_f1](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [2])])), 15), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_f1](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [3])])), 12), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_f1](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [4])])), 5), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_f1](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [5])])), 8), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(e, '+', [this[_f1](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [6])])), 7), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_f1](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [7])])), 9), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_f1](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [8])])), 11), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_f1](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [9])])), 13), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_f1](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [10])])), 14), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(e, '+', [this[_f1](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [11])])), 15), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_f1](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [12])])), 6), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_f1](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [13])])), 7), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_f1](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [14])])), 9), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_f1](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [15])])), 8), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f5](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1352829926])), 8), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f5](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1352829926])), 9), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f5](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1352829926])), 9), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f5](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1352829926])), 11), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f5](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1352829926])), 13), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f5](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1352829926])), 15), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f5](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1352829926])), 15), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f5](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1352829926])), 5), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f5](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1352829926])), 7), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f5](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1352829926])), 7), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f5](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1352829926])), 8), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f5](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1352829926])), 11), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f5](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1352829926])), 14), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f5](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1352829926])), 14), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f5](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1352829926])), 12), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f5](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1352829926])), 6), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      t = a;
      a = aa;
      aa = t;
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f2](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1518500249])), 7), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f2](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1518500249])), 6), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f2](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1518500249])), 8), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f2](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1518500249])), 13), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f2](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1518500249])), 11), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f2](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1518500249])), 9), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f2](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1518500249])), 7), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f2](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1518500249])), 15), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f2](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1518500249])), 7), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f2](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1518500249])), 12), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f2](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1518500249])), 15), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f2](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1518500249])), 9), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f2](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1518500249])), 11), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f2](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1518500249])), 7), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f2](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1518500249])), 13), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f2](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1518500249])), 12), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f4](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1548603684])), 9), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f4](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1548603684])), 13), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f4](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1548603684])), 15), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f4](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1548603684])), 7), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f4](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1548603684])), 12), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f4](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1548603684])), 8), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f4](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1548603684])), 9), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f4](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1548603684])), 11), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f4](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1548603684])), 7), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f4](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1548603684])), 7), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f4](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1548603684])), 12), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f4](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1548603684])), 7), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f4](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1548603684])), 6), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f4](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1548603684])), 15), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f4](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1548603684])), 13), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f4](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1548603684])), 11), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      t = b;
      b = bb;
      bb = t;
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f3](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1859775393])), 11), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f3](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1859775393])), 13), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f3](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1859775393])), 6), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f3](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1859775393])), 7), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f3](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1859775393])), 14), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f3](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1859775393])), 9), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f3](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1859775393])), 13), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f3](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1859775393])), 15), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f3](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1859775393])), 14), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f3](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1859775393])), 8), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f3](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1859775393])), 13), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f3](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1859775393])), 6), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f3](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1859775393])), 5), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f3](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1859775393])), 12), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f3](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1859775393])), 7), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f3](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1859775393])), 5), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f3](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1836072691])), 9), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f3](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1836072691])), 7), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f3](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1836072691])), 15), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f3](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1836072691])), 11), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f3](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1836072691])), 8), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f3](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1836072691])), 6), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f3](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1836072691])), 6), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f3](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1836072691])), 14), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f3](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1836072691])), 12), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f3](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1836072691])), 13), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f3](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1836072691])), 5), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f3](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1836072691])), 14), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f3](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1836072691])), 13), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f3](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1836072691])), 13), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f3](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1836072691])), 7), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f3](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1836072691])), 5), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      t = c;
      c = cc;
      cc = t;
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f4](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [2400959708])), 11), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f4](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [2400959708])), 12), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f4](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [2400959708])), 14), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f4](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [2400959708])), 15), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f4](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [2400959708])), 14), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f4](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [2400959708])), 15), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f4](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [2400959708])), 9), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f4](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [2400959708])), 8), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f4](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [2400959708])), 9), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f4](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [2400959708])), 14), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f4](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [2400959708])), 5), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f4](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [2400959708])), 6), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f4](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [2400959708])), 8), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f4](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [2400959708])), 6), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f4](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [2400959708])), 5), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f4](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [2400959708])), 12), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f2](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [2053994217])), 15), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f2](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [2053994217])), 5), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f2](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [2053994217])), 8), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f2](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [2053994217])), 11), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f2](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [2053994217])), 14), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f2](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [2053994217])), 14), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f2](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [2053994217])), 6), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f2](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [2053994217])), 14), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f2](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [2053994217])), 6), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f2](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [2053994217])), 9), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f2](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [2053994217])), 12), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f2](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [2053994217])), 9), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f2](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [2053994217])), 12), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f2](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [2053994217])), 5), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f2](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [2053994217])), 15), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f2](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [2053994217])), 8), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      t = d;
      d = dd;
      dd = t;
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f5](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [2840853838])), 9), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f5](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [2840853838])), 15), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f5](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [2840853838])), 5), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f5](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [2840853838])), 11), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f5](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [2840853838])), 6), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f5](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [2840853838])), 8), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f5](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [2840853838])), 13), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f5](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [2840853838])), 12), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f5](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [2840853838])), 5), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f5](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [2840853838])), 12), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f5](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [2840853838])), 13), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f5](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [2840853838])), 14), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f5](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [2840853838])), 11), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f5](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [2840853838])), 8), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f5](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [2840853838])), 5), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f5](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [2840853838])), 6), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(bb, '+', [this[_f1](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [12])])), 8), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(aa, '+', [this[_f1](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [15])])), 5), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(ee, '+', [this[_f1](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [10])])), 12), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dd, '+', [this[_f1](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [4])])), 9), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(cc, '+', [this[_f1](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [1])])), 12), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(bb, '+', [this[_f1](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [5])])), 5), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(aa, '+', [this[_f1](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [8])])), 14), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(ee, '+', [this[_f1](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [7])])), 6), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dd, '+', [this[_f1](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [6])])), 8), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(cc, '+', [this[_f1](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [2])])), 13), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(bb, '+', [this[_f1](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [13])])), 6), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(aa, '+', [this[_f1](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [14])])), 5), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(ee, '+', [this[_f1](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [0])])), 15), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dd, '+', [this[_f1](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [3])])), 13), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(cc, '+', [this[_f1](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [9])])), 11), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(bb, '+', [this[_f1](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [11])])), 11), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      dart.dsend(this.state, '_set', [0, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [0])), core.int._check(a))]);
      dart.dsend(this.state, '_set', [1, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [1])), core.int._check(b))]);
      dart.dsend(this.state, '_set', [2, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [2])), core.int._check(c))]);
      dart.dsend(this.state, '_set', [3, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [3])), core.int._check(d))]);
      dart.dsend(this.state, '_set', [4, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [4])), core.int._check(ee))]);
      dart.dsend(this.state, '_set', [5, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [5])), core.int._check(aa))]);
      dart.dsend(this.state, '_set', [6, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [6])), core.int._check(bb))]);
      dart.dsend(this.state, '_set', [7, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [7])), core.int._check(cc))]);
      dart.dsend(this.state, '_set', [8, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [8])), core.int._check(dd))]);
      dart.dsend(this.state, '_set', [9, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [9])), core.int._check(e))]);
    }
    [_f1](x, y, z) {
      return (dart.notNull(x) ^ dart.notNull(y) ^ dart.notNull(z)) >>> 0;
    }
    [_f2](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) | (~dart.notNull(x) & dart.notNull(z)) >>> 0) >>> 0;
    }
    [_f3](x, y, z) {
      return ((dart.notNull(x) | ~dart.notNull(y) >>> 0) ^ dart.notNull(z)) >>> 0;
    }
    [_f4](x, y, z) {
      return (dart.notNull(x) & dart.notNull(z) | (dart.notNull(y) & ~dart.notNull(z) >>> 0) >>> 0) >>> 0;
    }
    [_f5](x, y, z) {
      return (dart.notNull(x) ^ (dart.notNull(y) | ~dart.notNull(z) >>> 0) >>> 0) >>> 0;
    }
  };
  (ripemd320.RIPEMD320Digest.new = function() {
    this[algorithmName$8] = "RIPEMD-320";
    this[digestSize$6] = 40;
    ripemd320.RIPEMD320Digest.__proto__.new.call(this, typed_data.Endian.little, 10, 16);
    ;
  }).prototype = ripemd320.RIPEMD320Digest.prototype;
  dart.addTypeTests(ripemd320.RIPEMD320Digest);
  ripemd320.RIPEMD320Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(ripemd320.RIPEMD320Digest, () => ({
    __proto__: dart.getMethods(ripemd320.RIPEMD320Digest.__proto__),
    resetState: dart.fnType(dart.void, []),
    processBlock: dart.fnType(dart.void, []),
    [_f1]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f2]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f3]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f4]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f5]: dart.fnType(core.int, [core.int, core.int, core.int])
  }));
  dart.setLibraryUri(ripemd320.RIPEMD320Digest, "package:pointycastle/digests/ripemd320.dart");
  dart.setFieldSignature(ripemd320.RIPEMD320Digest, () => ({
    __proto__: dart.getFields(ripemd320.RIPEMD320Digest.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(ripemd320.RIPEMD320Digest, {
    /*ripemd320.RIPEMD320Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "RIPEMD-320", dart.fn(() => new ripemd320.RIPEMD320Digest.new(), VoidToRIPEMD320Digest()));
    },
    /*ripemd320.RIPEMD320Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 40;
    }
  });
  const _F1 = dart.privateName(ripemd256, "_F1");
  const _FF4 = dart.privateName(ripemd256, "_FF4");
  const _F2 = dart.privateName(ripemd256, "_F2");
  const _FF3 = dart.privateName(ripemd256, "_FF3");
  const _F3 = dart.privateName(ripemd256, "_F3");
  const _FF2 = dart.privateName(ripemd256, "_FF2");
  const _F4 = dart.privateName(ripemd256, "_F4");
  const _FF1 = dart.privateName(ripemd256, "_FF1");
  const _f1$ = dart.privateName(ripemd256, "_f1");
  const _f2$ = dart.privateName(ripemd256, "_f2");
  const _f3$ = dart.privateName(ripemd256, "_f3");
  const _f4$ = dart.privateName(ripemd256, "_f4");
  const algorithmName$9 = dart.privateName(ripemd256, "RIPEMD256Digest.algorithmName");
  const digestSize$7 = dart.privateName(ripemd256, "RIPEMD256Digest.digestSize");
  ripemd256.RIPEMD256Digest = class RIPEMD256Digest extends md4_family_digest.MD4FamilyDigest {
    get algorithmName() {
      return this[algorithmName$9];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$7];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    resetState() {
      dart.dsend(this.state, '_set', [0, 1732584193]);
      dart.dsend(this.state, '_set', [1, 4023233417]);
      dart.dsend(this.state, '_set', [2, 2562383102]);
      dart.dsend(this.state, '_set', [3, 271733878]);
      dart.dsend(this.state, '_set', [4, 1985229328]);
      dart.dsend(this.state, '_set', [5, 4275878552]);
      dart.dsend(this.state, '_set', [6, 2309737967]);
      dart.dsend(this.state, '_set', [7, 19088743]);
    }
    processBlock() {
      let a = null;
      let aa = null;
      let b = null;
      let bb = null;
      let c = null;
      let cc = null;
      let d = null;
      let dd = null;
      let t = null;
      a = dart.dsend(this.state, '_get', [0]);
      b = dart.dsend(this.state, '_get', [1]);
      c = dart.dsend(this.state, '_get', [2]);
      d = dart.dsend(this.state, '_get', [3]);
      aa = dart.dsend(this.state, '_get', [4]);
      bb = dart.dsend(this.state, '_get', [5]);
      cc = dart.dsend(this.state, '_get', [6]);
      dd = dart.dsend(this.state, '_get', [7]);
      a = this[_F1](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [0])), 11);
      d = this[_F1](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [1])), 14);
      c = this[_F1](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [2])), 15);
      b = this[_F1](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [3])), 12);
      a = this[_F1](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [4])), 5);
      d = this[_F1](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [5])), 8);
      c = this[_F1](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [6])), 7);
      b = this[_F1](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [7])), 9);
      a = this[_F1](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [8])), 11);
      d = this[_F1](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [9])), 13);
      c = this[_F1](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [10])), 14);
      b = this[_F1](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [11])), 15);
      a = this[_F1](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [12])), 6);
      d = this[_F1](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [13])), 7);
      c = this[_F1](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [14])), 9);
      b = this[_F1](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [15])), 8);
      aa = this[_FF4](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [5])), 8);
      dd = this[_FF4](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [14])), 9);
      cc = this[_FF4](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [7])), 9);
      bb = this[_FF4](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [0])), 11);
      aa = this[_FF4](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [9])), 13);
      dd = this[_FF4](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [2])), 15);
      cc = this[_FF4](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [11])), 15);
      bb = this[_FF4](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [4])), 5);
      aa = this[_FF4](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [13])), 7);
      dd = this[_FF4](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [6])), 7);
      cc = this[_FF4](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [15])), 8);
      bb = this[_FF4](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [8])), 11);
      aa = this[_FF4](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [1])), 14);
      dd = this[_FF4](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [10])), 14);
      cc = this[_FF4](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [3])), 12);
      bb = this[_FF4](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [12])), 6);
      t = a;
      a = aa;
      aa = t;
      a = this[_F2](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [7])), 7);
      d = this[_F2](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [4])), 6);
      c = this[_F2](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [13])), 8);
      b = this[_F2](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [1])), 13);
      a = this[_F2](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [10])), 11);
      d = this[_F2](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [6])), 9);
      c = this[_F2](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [15])), 7);
      b = this[_F2](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [3])), 15);
      a = this[_F2](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [12])), 7);
      d = this[_F2](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [0])), 12);
      c = this[_F2](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [9])), 15);
      b = this[_F2](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [5])), 9);
      a = this[_F2](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [2])), 11);
      d = this[_F2](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [14])), 7);
      c = this[_F2](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [11])), 13);
      b = this[_F2](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [8])), 12);
      aa = this[_FF3](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [6])), 9);
      dd = this[_FF3](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [11])), 13);
      cc = this[_FF3](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [3])), 15);
      bb = this[_FF3](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [7])), 7);
      aa = this[_FF3](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [0])), 12);
      dd = this[_FF3](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [13])), 8);
      cc = this[_FF3](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [5])), 9);
      bb = this[_FF3](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [10])), 11);
      aa = this[_FF3](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [14])), 7);
      dd = this[_FF3](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [15])), 7);
      cc = this[_FF3](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [8])), 12);
      bb = this[_FF3](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [12])), 7);
      aa = this[_FF3](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [4])), 6);
      dd = this[_FF3](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [9])), 15);
      cc = this[_FF3](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [1])), 13);
      bb = this[_FF3](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [2])), 11);
      t = b;
      b = bb;
      bb = t;
      a = this[_F3](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [3])), 11);
      d = this[_F3](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [10])), 13);
      c = this[_F3](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [14])), 6);
      b = this[_F3](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [4])), 7);
      a = this[_F3](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [9])), 14);
      d = this[_F3](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [15])), 9);
      c = this[_F3](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [8])), 13);
      b = this[_F3](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [1])), 15);
      a = this[_F3](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [2])), 14);
      d = this[_F3](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [7])), 8);
      c = this[_F3](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [0])), 13);
      b = this[_F3](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [6])), 6);
      a = this[_F3](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [13])), 5);
      d = this[_F3](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [11])), 12);
      c = this[_F3](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [5])), 7);
      b = this[_F3](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [12])), 5);
      aa = this[_FF2](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [15])), 9);
      dd = this[_FF2](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [5])), 7);
      cc = this[_FF2](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [1])), 15);
      bb = this[_FF2](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [3])), 11);
      aa = this[_FF2](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [7])), 8);
      dd = this[_FF2](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [14])), 6);
      cc = this[_FF2](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [6])), 6);
      bb = this[_FF2](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [9])), 14);
      aa = this[_FF2](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [11])), 12);
      dd = this[_FF2](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [8])), 13);
      cc = this[_FF2](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [12])), 5);
      bb = this[_FF2](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [2])), 14);
      aa = this[_FF2](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [10])), 13);
      dd = this[_FF2](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [0])), 13);
      cc = this[_FF2](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [4])), 7);
      bb = this[_FF2](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [13])), 5);
      t = c;
      c = cc;
      cc = t;
      a = this[_F4](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [1])), 11);
      d = this[_F4](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [9])), 12);
      c = this[_F4](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [11])), 14);
      b = this[_F4](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [10])), 15);
      a = this[_F4](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [0])), 14);
      d = this[_F4](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [8])), 15);
      c = this[_F4](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [12])), 9);
      b = this[_F4](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [4])), 8);
      a = this[_F4](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [13])), 9);
      d = this[_F4](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [3])), 14);
      c = this[_F4](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [7])), 5);
      b = this[_F4](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [15])), 6);
      a = this[_F4](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [14])), 8);
      d = this[_F4](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [5])), 6);
      c = this[_F4](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [6])), 5);
      b = this[_F4](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [2])), 12);
      aa = this[_FF1](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [8])), 15);
      dd = this[_FF1](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [6])), 5);
      cc = this[_FF1](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [4])), 8);
      bb = this[_FF1](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [1])), 11);
      aa = this[_FF1](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [3])), 14);
      dd = this[_FF1](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [11])), 14);
      cc = this[_FF1](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [15])), 6);
      bb = this[_FF1](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [0])), 14);
      aa = this[_FF1](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [5])), 6);
      dd = this[_FF1](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [12])), 9);
      cc = this[_FF1](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [2])), 12);
      bb = this[_FF1](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [13])), 9);
      aa = this[_FF1](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [9])), 12);
      dd = this[_FF1](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [7])), 5);
      cc = this[_FF1](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [10])), 15);
      bb = this[_FF1](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [14])), 8);
      t = d;
      d = dd;
      dd = t;
      dart.dsend(this.state, '_set', [0, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [0])), core.int._check(a))]);
      dart.dsend(this.state, '_set', [1, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [1])), core.int._check(b))]);
      dart.dsend(this.state, '_set', [2, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [2])), core.int._check(c))]);
      dart.dsend(this.state, '_set', [3, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [3])), core.int._check(d))]);
      dart.dsend(this.state, '_set', [4, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [4])), core.int._check(aa))]);
      dart.dsend(this.state, '_set', [5, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [5])), core.int._check(bb))]);
      dart.dsend(this.state, '_set', [6, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [6])), core.int._check(cc))]);
      dart.dsend(this.state, '_set', [7, ufixnum.sum32(core.int._check(dart.dsend(this.state, '_get', [7])), core.int._check(dd))]);
    }
    [_f1$](x, y, z) {
      return (dart.notNull(x) ^ dart.notNull(y) ^ dart.notNull(z)) >>> 0;
    }
    [_f2$](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) | (~dart.notNull(x) & dart.notNull(z)) >>> 0) >>> 0;
    }
    [_f3$](x, y, z) {
      return ((dart.notNull(x) | ~dart.notNull(y) >>> 0) ^ dart.notNull(z)) >>> 0;
    }
    [_f4$](x, y, z) {
      return (dart.notNull(x) & dart.notNull(z) | (dart.notNull(y) & ~dart.notNull(z) >>> 0) >>> 0) >>> 0;
    }
    [_F1](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f1$](b, c, d)) + dart.notNull(x), s);
    }
    [_F2](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f2$](b, c, d)) + dart.notNull(x) + 1518500249, s);
    }
    [_F3](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f3$](b, c, d)) + dart.notNull(x) + 1859775393, s);
    }
    [_F4](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f4$](b, c, d)) + dart.notNull(x) + 2400959708, s);
    }
    [_FF1](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f1$](b, c, d)) + dart.notNull(x), s);
    }
    [_FF2](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f2$](b, c, d)) + dart.notNull(x) + 1836072691, s);
    }
    [_FF3](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f3$](b, c, d)) + dart.notNull(x) + 1548603684, s);
    }
    [_FF4](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f4$](b, c, d)) + dart.notNull(x) + 1352829926, s);
    }
  };
  (ripemd256.RIPEMD256Digest.new = function() {
    this[algorithmName$9] = "RIPEMD-256";
    this[digestSize$7] = 32;
    ripemd256.RIPEMD256Digest.__proto__.new.call(this, typed_data.Endian.little, 8, 16);
    ;
  }).prototype = ripemd256.RIPEMD256Digest.prototype;
  dart.addTypeTests(ripemd256.RIPEMD256Digest);
  ripemd256.RIPEMD256Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(ripemd256.RIPEMD256Digest, () => ({
    __proto__: dart.getMethods(ripemd256.RIPEMD256Digest.__proto__),
    resetState: dart.fnType(dart.void, []),
    processBlock: dart.fnType(dart.void, []),
    [_f1$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f2$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f3$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f4$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_F1]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_F2]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_F3]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_F4]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_FF1]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_FF2]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_FF3]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_FF4]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int])
  }));
  dart.setLibraryUri(ripemd256.RIPEMD256Digest, "package:pointycastle/digests/ripemd256.dart");
  dart.setFieldSignature(ripemd256.RIPEMD256Digest, () => ({
    __proto__: dart.getFields(ripemd256.RIPEMD256Digest.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(ripemd256.RIPEMD256Digest, {
    /*ripemd256.RIPEMD256Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "RIPEMD-256", dart.fn(() => new ripemd256.RIPEMD256Digest.new(), VoidToRIPEMD256Digest()));
    },
    /*ripemd256.RIPEMD256Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 32;
    }
  });
  const _f1$0 = dart.privateName(ripemd160, "_f1");
  const _f5$ = dart.privateName(ripemd160, "_f5");
  const _f2$0 = dart.privateName(ripemd160, "_f2");
  const _f4$0 = dart.privateName(ripemd160, "_f4");
  const _f3$0 = dart.privateName(ripemd160, "_f3");
  const algorithmName$10 = dart.privateName(ripemd160, "RIPEMD160Digest.algorithmName");
  const digestSize$8 = dart.privateName(ripemd160, "RIPEMD160Digest.digestSize");
  ripemd160.RIPEMD160Digest = class RIPEMD160Digest extends md4_family_digest.MD4FamilyDigest {
    get algorithmName() {
      return this[algorithmName$10];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$8];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    resetState() {
      dart.dsend(this.state, '_set', [0, 1732584193]);
      dart.dsend(this.state, '_set', [1, 4023233417]);
      dart.dsend(this.state, '_set', [2, 2562383102]);
      dart.dsend(this.state, '_set', [3, 271733878]);
      dart.dsend(this.state, '_set', [4, 3285377520]);
    }
    processBlock() {
      let a = null;
      let aa = null;
      let b = null;
      let bb = null;
      let c = null;
      let cc = null;
      let d = null;
      let dd = null;
      let e = null;
      let ee = null;
      a = aa = dart.dsend(this.state, '_get', [0]);
      b = bb = dart.dsend(this.state, '_get', [1]);
      c = cc = dart.dsend(this.state, '_get', [2]);
      d = dd = dart.dsend(this.state, '_get', [3]);
      e = ee = dart.dsend(this.state, '_get', [4]);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_f1$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [0])])), 11), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(e, '+', [this[_f1$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [1])])), 14), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_f1$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [2])])), 15), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_f1$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [3])])), 12), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_f1$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [4])])), 5), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_f1$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [5])])), 8), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(e, '+', [this[_f1$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [6])])), 7), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_f1$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [7])])), 9), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_f1$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [8])])), 11), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_f1$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [9])])), 13), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_f1$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [10])])), 14), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(e, '+', [this[_f1$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [11])])), 15), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_f1$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [12])])), 6), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_f1$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [13])])), 7), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_f1$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [14])])), 9), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_f1$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [15])])), 8), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f5$](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1352829926])), 8), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f5$](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1352829926])), 9), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f5$](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1352829926])), 9), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f5$](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1352829926])), 11), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f5$](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1352829926])), 13), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f5$](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1352829926])), 15), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f5$](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1352829926])), 15), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f5$](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1352829926])), 5), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f5$](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1352829926])), 7), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f5$](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1352829926])), 7), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f5$](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1352829926])), 8), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f5$](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1352829926])), 11), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f5$](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1352829926])), 14), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f5$](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1352829926])), 14), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f5$](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1352829926])), 12), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f5$](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1352829926])), 6), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f2$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1518500249])), 7), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f2$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1518500249])), 6), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f2$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1518500249])), 8), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f2$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1518500249])), 13), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f2$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1518500249])), 11), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f2$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1518500249])), 9), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f2$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1518500249])), 7), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f2$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1518500249])), 15), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f2$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1518500249])), 7), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f2$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1518500249])), 12), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f2$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1518500249])), 15), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f2$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1518500249])), 9), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f2$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1518500249])), 11), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f2$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1518500249])), 7), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f2$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1518500249])), 13), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f2$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1518500249])), 12), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f4$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1548603684])), 9), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f4$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1548603684])), 13), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f4$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1548603684])), 15), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f4$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1548603684])), 7), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f4$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1548603684])), 12), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f4$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1548603684])), 8), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f4$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1548603684])), 9), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f4$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1548603684])), 11), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f4$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1548603684])), 7), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f4$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1548603684])), 7), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f4$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1548603684])), 12), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f4$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1548603684])), 7), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f4$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1548603684])), 6), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f4$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1548603684])), 15), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f4$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1548603684])), 13), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f4$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1548603684])), 11), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f3$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1859775393])), 11), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f3$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1859775393])), 13), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f3$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1859775393])), 6), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f3$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1859775393])), 7), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f3$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1859775393])), 14), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f3$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1859775393])), 9), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f3$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1859775393])), 13), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f3$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1859775393])), 15), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f3$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1859775393])), 14), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f3$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1859775393])), 8), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f3$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1859775393])), 13), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f3$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1859775393])), 6), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f3$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1859775393])), 5), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f3$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1859775393])), 12), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f3$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1859775393])), 7), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f3$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1859775393])), 5), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f3$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1836072691])), 9), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f3$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1836072691])), 7), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f3$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1836072691])), 15), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f3$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1836072691])), 11), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f3$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1836072691])), 8), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f3$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1836072691])), 6), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f3$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1836072691])), 6), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f3$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1836072691])), 14), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f3$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1836072691])), 12), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f3$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1836072691])), 13), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f3$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1836072691])), 5), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f3$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1836072691])), 14), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f3$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1836072691])), 13), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f3$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1836072691])), 13), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f3$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1836072691])), 7), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f3$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1836072691])), 5), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f4$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [2400959708])), 11), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f4$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [2400959708])), 12), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f4$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [2400959708])), 14), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f4$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [2400959708])), 15), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f4$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [2400959708])), 14), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f4$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [2400959708])), 15), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f4$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [2400959708])), 9), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f4$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [2400959708])), 8), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f4$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [2400959708])), 9), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f4$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [2400959708])), 14), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f4$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [2400959708])), 5), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f4$0](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [2400959708])), 6), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f4$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [2400959708])), 8), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f4$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [2400959708])), 6), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f4$0](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [2400959708])), 5), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f4$0](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [2400959708])), 12), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f2$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [2053994217])), 15), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f2$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [2053994217])), 5), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f2$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [2053994217])), 8), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f2$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [2053994217])), 11), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f2$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [2053994217])), 14), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f2$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [2053994217])), 14), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f2$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [2053994217])), 6), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f2$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [2053994217])), 14), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f2$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [2053994217])), 6), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f2$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [2053994217])), 9), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f2$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [2053994217])), 12), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(bb, '+', [this[_f2$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [2053994217])), 9), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(aa, '+', [this[_f2$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [2053994217])), 12), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(ee, '+', [this[_f2$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [2053994217])), 5), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(dd, '+', [this[_f2$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [2053994217])), 15), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(cc, '+', [this[_f2$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [2053994217])), 8), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f5$](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [2840853838])), 9), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f5$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [2840853838])), 15), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f5$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [2840853838])), 5), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f5$](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [2840853838])), 11), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f5$](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [2840853838])), 6), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f5$](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [2840853838])), 8), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f5$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [2840853838])), 13), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f5$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [2840853838])), 12), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f5$](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [2840853838])), 5), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f5$](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [2840853838])), 12), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f5$](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [2840853838])), 13), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_f5$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [2840853838])), 14), core.int._check(e));
      c = ufixnum.rotl32(core.int._check(c), 10);
      e = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(e, '+', [this[_f5$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [2840853838])), 11), core.int._check(d));
      b = ufixnum.rotl32(core.int._check(b), 10);
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_f5$](core.int._check(e), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [2840853838])), 8), core.int._check(c));
      a = ufixnum.rotl32(core.int._check(a), 10);
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_f5$](core.int._check(d), core.int._check(e), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [2840853838])), 5), core.int._check(b));
      e = ufixnum.rotl32(core.int._check(e), 10);
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_f5$](core.int._check(c), core.int._check(d), core.int._check(e))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [2840853838])), 6), core.int._check(a));
      d = ufixnum.rotl32(core.int._check(d), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(bb, '+', [this[_f1$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [12])])), 8), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(aa, '+', [this[_f1$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [15])])), 5), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(ee, '+', [this[_f1$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [10])])), 12), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dd, '+', [this[_f1$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [4])])), 9), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(cc, '+', [this[_f1$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [1])])), 12), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(bb, '+', [this[_f1$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [5])])), 5), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(aa, '+', [this[_f1$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [8])])), 14), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(ee, '+', [this[_f1$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [7])])), 6), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dd, '+', [this[_f1$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [6])])), 8), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(cc, '+', [this[_f1$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [2])])), 13), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(bb, '+', [this[_f1$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [13])])), 6), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      aa = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(aa, '+', [this[_f1$0](core.int._check(bb), core.int._check(cc), core.int._check(dd))]), '+', [dart.dsend(this.buffer, '_get', [14])])), 5), core.int._check(ee));
      cc = ufixnum.rotl32(core.int._check(cc), 10);
      ee = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(ee, '+', [this[_f1$0](core.int._check(aa), core.int._check(bb), core.int._check(cc))]), '+', [dart.dsend(this.buffer, '_get', [0])])), 15), core.int._check(dd));
      bb = ufixnum.rotl32(core.int._check(bb), 10);
      dd = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dd, '+', [this[_f1$0](core.int._check(ee), core.int._check(aa), core.int._check(bb))]), '+', [dart.dsend(this.buffer, '_get', [3])])), 13), core.int._check(cc));
      aa = ufixnum.rotl32(core.int._check(aa), 10);
      cc = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(cc, '+', [this[_f1$0](core.int._check(dd), core.int._check(ee), core.int._check(aa))]), '+', [dart.dsend(this.buffer, '_get', [9])])), 11), core.int._check(bb));
      ee = ufixnum.rotl32(core.int._check(ee), 10);
      bb = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(bb, '+', [this[_f1$0](core.int._check(cc), core.int._check(dd), core.int._check(ee))]), '+', [dart.dsend(this.buffer, '_get', [11])])), 11), core.int._check(aa));
      dd = ufixnum.rotl32(core.int._check(dd), 10);
      dd = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dd, '+', [c]), '+', [dart.dsend(this.state, '_get', [1])])));
      dart.dsend(this.state, '_set', [1, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(this.state, '_get', [2]), '+', [d]), '+', [ee])))]);
      dart.dsend(this.state, '_set', [2, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(this.state, '_get', [3]), '+', [e]), '+', [aa])))]);
      dart.dsend(this.state, '_set', [3, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(this.state, '_get', [4]), '+', [a]), '+', [bb])))]);
      dart.dsend(this.state, '_set', [4, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(this.state, '_get', [0]), '+', [b]), '+', [cc])))]);
      dart.dsend(this.state, '_set', [0, dd]);
    }
    [_f1$0](x, y, z) {
      return (dart.notNull(x) ^ dart.notNull(y) ^ dart.notNull(z)) >>> 0;
    }
    [_f2$0](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) | (~dart.notNull(x) & dart.notNull(z)) >>> 0) >>> 0;
    }
    [_f3$0](x, y, z) {
      return ((dart.notNull(x) | ~dart.notNull(y) >>> 0) ^ dart.notNull(z)) >>> 0;
    }
    [_f4$0](x, y, z) {
      return (dart.notNull(x) & dart.notNull(z) | (dart.notNull(y) & ~dart.notNull(z) >>> 0) >>> 0) >>> 0;
    }
    [_f5$](x, y, z) {
      return (dart.notNull(x) ^ (dart.notNull(y) | ~dart.notNull(z) >>> 0) >>> 0) >>> 0;
    }
  };
  (ripemd160.RIPEMD160Digest.new = function() {
    this[algorithmName$10] = "RIPEMD-160";
    this[digestSize$8] = 20;
    ripemd160.RIPEMD160Digest.__proto__.new.call(this, typed_data.Endian.little, 5, 16);
    ;
  }).prototype = ripemd160.RIPEMD160Digest.prototype;
  dart.addTypeTests(ripemd160.RIPEMD160Digest);
  ripemd160.RIPEMD160Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(ripemd160.RIPEMD160Digest, () => ({
    __proto__: dart.getMethods(ripemd160.RIPEMD160Digest.__proto__),
    resetState: dart.fnType(dart.void, []),
    processBlock: dart.fnType(dart.void, []),
    [_f1$0]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f2$0]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f3$0]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f4$0]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f5$]: dart.fnType(core.int, [core.int, core.int, core.int])
  }));
  dart.setLibraryUri(ripemd160.RIPEMD160Digest, "package:pointycastle/digests/ripemd160.dart");
  dart.setFieldSignature(ripemd160.RIPEMD160Digest, () => ({
    __proto__: dart.getFields(ripemd160.RIPEMD160Digest.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(ripemd160.RIPEMD160Digest, {
    /*ripemd160.RIPEMD160Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "RIPEMD-160", dart.fn(() => new ripemd160.RIPEMD160Digest.new(), VoidToRIPEMD160Digest()));
    },
    /*ripemd160.RIPEMD160Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 20;
    }
  });
  const _F1$ = dart.privateName(ripemd128, "_F1");
  const _F2$ = dart.privateName(ripemd128, "_F2");
  const _F3$ = dart.privateName(ripemd128, "_F3");
  const _F4$ = dart.privateName(ripemd128, "_F4");
  const _FF4$ = dart.privateName(ripemd128, "_FF4");
  const _FF3$ = dart.privateName(ripemd128, "_FF3");
  const _FF2$ = dart.privateName(ripemd128, "_FF2");
  const _FF1$ = dart.privateName(ripemd128, "_FF1");
  const _f1$1 = dart.privateName(ripemd128, "_f1");
  const _f2$1 = dart.privateName(ripemd128, "_f2");
  const _f3$1 = dart.privateName(ripemd128, "_f3");
  const _f4$1 = dart.privateName(ripemd128, "_f4");
  const algorithmName$11 = dart.privateName(ripemd128, "RIPEMD128Digest.algorithmName");
  const digestSize$9 = dart.privateName(ripemd128, "RIPEMD128Digest.digestSize");
  ripemd128.RIPEMD128Digest = class RIPEMD128Digest extends md4_family_digest.MD4FamilyDigest {
    get algorithmName() {
      return this[algorithmName$11];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$9];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    resetState() {
      dart.dsend(this.state, '_set', [0, 1732584193]);
      dart.dsend(this.state, '_set', [1, 4023233417]);
      dart.dsend(this.state, '_set', [2, 2562383102]);
      dart.dsend(this.state, '_set', [3, 271733878]);
    }
    processBlock() {
      let a = null;
      let aa = null;
      let b = null;
      let bb = null;
      let c = null;
      let cc = null;
      let d = null;
      let dd = null;
      a = aa = dart.dsend(this.state, '_get', [0]);
      b = bb = dart.dsend(this.state, '_get', [1]);
      c = cc = dart.dsend(this.state, '_get', [2]);
      d = dd = dart.dsend(this.state, '_get', [3]);
      a = this[_F1$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [0])), 11);
      d = this[_F1$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [1])), 14);
      c = this[_F1$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [2])), 15);
      b = this[_F1$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [3])), 12);
      a = this[_F1$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [4])), 5);
      d = this[_F1$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [5])), 8);
      c = this[_F1$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [6])), 7);
      b = this[_F1$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [7])), 9);
      a = this[_F1$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [8])), 11);
      d = this[_F1$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [9])), 13);
      c = this[_F1$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [10])), 14);
      b = this[_F1$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [11])), 15);
      a = this[_F1$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [12])), 6);
      d = this[_F1$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [13])), 7);
      c = this[_F1$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [14])), 9);
      b = this[_F1$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [15])), 8);
      a = this[_F2$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [7])), 7);
      d = this[_F2$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [4])), 6);
      c = this[_F2$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [13])), 8);
      b = this[_F2$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [1])), 13);
      a = this[_F2$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [10])), 11);
      d = this[_F2$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [6])), 9);
      c = this[_F2$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [15])), 7);
      b = this[_F2$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [3])), 15);
      a = this[_F2$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [12])), 7);
      d = this[_F2$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [0])), 12);
      c = this[_F2$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [9])), 15);
      b = this[_F2$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [5])), 9);
      a = this[_F2$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [2])), 11);
      d = this[_F2$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [14])), 7);
      c = this[_F2$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [11])), 13);
      b = this[_F2$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [8])), 12);
      a = this[_F3$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [3])), 11);
      d = this[_F3$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [10])), 13);
      c = this[_F3$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [14])), 6);
      b = this[_F3$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [4])), 7);
      a = this[_F3$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [9])), 14);
      d = this[_F3$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [15])), 9);
      c = this[_F3$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [8])), 13);
      b = this[_F3$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [1])), 15);
      a = this[_F3$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [2])), 14);
      d = this[_F3$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [7])), 8);
      c = this[_F3$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [0])), 13);
      b = this[_F3$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [6])), 6);
      a = this[_F3$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [13])), 5);
      d = this[_F3$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [11])), 12);
      c = this[_F3$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [5])), 7);
      b = this[_F3$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [12])), 5);
      a = this[_F4$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [1])), 11);
      d = this[_F4$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [9])), 12);
      c = this[_F4$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [11])), 14);
      b = this[_F4$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [10])), 15);
      a = this[_F4$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [0])), 14);
      d = this[_F4$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [8])), 15);
      c = this[_F4$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [12])), 9);
      b = this[_F4$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [4])), 8);
      a = this[_F4$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [13])), 9);
      d = this[_F4$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [3])), 14);
      c = this[_F4$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [7])), 5);
      b = this[_F4$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [15])), 6);
      a = this[_F4$](core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(dart.dsend(this.buffer, '_get', [14])), 8);
      d = this[_F4$](core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(c), core.int._check(dart.dsend(this.buffer, '_get', [5])), 6);
      c = this[_F4$](core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(b), core.int._check(dart.dsend(this.buffer, '_get', [6])), 5);
      b = this[_F4$](core.int._check(b), core.int._check(c), core.int._check(d), core.int._check(a), core.int._check(dart.dsend(this.buffer, '_get', [2])), 12);
      aa = this[_FF4$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [5])), 8);
      dd = this[_FF4$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [14])), 9);
      cc = this[_FF4$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [7])), 9);
      bb = this[_FF4$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [0])), 11);
      aa = this[_FF4$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [9])), 13);
      dd = this[_FF4$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [2])), 15);
      cc = this[_FF4$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [11])), 15);
      bb = this[_FF4$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [4])), 5);
      aa = this[_FF4$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [13])), 7);
      dd = this[_FF4$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [6])), 7);
      cc = this[_FF4$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [15])), 8);
      bb = this[_FF4$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [8])), 11);
      aa = this[_FF4$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [1])), 14);
      dd = this[_FF4$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [10])), 14);
      cc = this[_FF4$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [3])), 12);
      bb = this[_FF4$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [12])), 6);
      aa = this[_FF3$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [6])), 9);
      dd = this[_FF3$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [11])), 13);
      cc = this[_FF3$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [3])), 15);
      bb = this[_FF3$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [7])), 7);
      aa = this[_FF3$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [0])), 12);
      dd = this[_FF3$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [13])), 8);
      cc = this[_FF3$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [5])), 9);
      bb = this[_FF3$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [10])), 11);
      aa = this[_FF3$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [14])), 7);
      dd = this[_FF3$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [15])), 7);
      cc = this[_FF3$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [8])), 12);
      bb = this[_FF3$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [12])), 7);
      aa = this[_FF3$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [4])), 6);
      dd = this[_FF3$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [9])), 15);
      cc = this[_FF3$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [1])), 13);
      bb = this[_FF3$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [2])), 11);
      aa = this[_FF2$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [15])), 9);
      dd = this[_FF2$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [5])), 7);
      cc = this[_FF2$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [1])), 15);
      bb = this[_FF2$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [3])), 11);
      aa = this[_FF2$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [7])), 8);
      dd = this[_FF2$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [14])), 6);
      cc = this[_FF2$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [6])), 6);
      bb = this[_FF2$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [9])), 14);
      aa = this[_FF2$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [11])), 12);
      dd = this[_FF2$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [8])), 13);
      cc = this[_FF2$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [12])), 5);
      bb = this[_FF2$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [2])), 14);
      aa = this[_FF2$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [10])), 13);
      dd = this[_FF2$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [0])), 13);
      cc = this[_FF2$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [4])), 7);
      bb = this[_FF2$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [13])), 5);
      aa = this[_FF1$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [8])), 15);
      dd = this[_FF1$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [6])), 5);
      cc = this[_FF1$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [4])), 8);
      bb = this[_FF1$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [1])), 11);
      aa = this[_FF1$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [3])), 14);
      dd = this[_FF1$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [11])), 14);
      cc = this[_FF1$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [15])), 6);
      bb = this[_FF1$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [0])), 14);
      aa = this[_FF1$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [5])), 6);
      dd = this[_FF1$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [12])), 9);
      cc = this[_FF1$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [2])), 12);
      bb = this[_FF1$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [13])), 9);
      aa = this[_FF1$](core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(dart.dsend(this.buffer, '_get', [9])), 12);
      dd = this[_FF1$](core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(cc), core.int._check(dart.dsend(this.buffer, '_get', [7])), 5);
      cc = this[_FF1$](core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(bb), core.int._check(dart.dsend(this.buffer, '_get', [10])), 15);
      bb = this[_FF1$](core.int._check(bb), core.int._check(cc), core.int._check(dd), core.int._check(aa), core.int._check(dart.dsend(this.buffer, '_get', [14])), 8);
      dd = ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dd, '+', [c]), '+', [dart.dsend(this.state, '_get', [1])])));
      dart.dsend(this.state, '_set', [1, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(this.state, '_get', [2]), '+', [d]), '+', [aa])))]);
      dart.dsend(this.state, '_set', [2, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(this.state, '_get', [3]), '+', [a]), '+', [bb])))]);
      dart.dsend(this.state, '_set', [3, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(dart.dsend(this.state, '_get', [0]), '+', [b]), '+', [cc])))]);
      dart.dsend(this.state, '_set', [0, dd]);
    }
    [_f1$1](x, y, z) {
      return (dart.notNull(x) ^ dart.notNull(y) ^ dart.notNull(z)) >>> 0;
    }
    [_f2$1](x, y, z) {
      return (dart.notNull(x) & dart.notNull(y) | (~dart.notNull(x) & dart.notNull(z)) >>> 0) >>> 0;
    }
    [_f3$1](x, y, z) {
      return ((dart.notNull(x) | ~dart.notNull(y) >>> 0) ^ dart.notNull(z)) >>> 0;
    }
    [_f4$1](x, y, z) {
      return (dart.notNull(x) & dart.notNull(z) | (dart.notNull(y) & ~dart.notNull(z) >>> 0) >>> 0) >>> 0;
    }
    [_F1$](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f1$1](b, c, d)) + dart.notNull(x), s);
    }
    [_F2$](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f2$1](b, c, d)) + dart.notNull(x) + 1518500249, s);
    }
    [_F3$](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f3$1](b, c, d)) + dart.notNull(x) + 1859775393, s);
    }
    [_F4$](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f4$1](b, c, d)) + dart.notNull(x) + 2400959708, s);
    }
    [_FF1$](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f1$1](b, c, d)) + dart.notNull(x), s);
    }
    [_FF2$](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f2$1](b, c, d)) + dart.notNull(x) + 1836072691, s);
    }
    [_FF3$](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f3$1](b, c, d)) + dart.notNull(x) + 1548603684, s);
    }
    [_FF4$](a, b, c, d, x, s) {
      return ufixnum.crotl32(dart.notNull(a) + dart.notNull(this[_f4$1](b, c, d)) + dart.notNull(x) + 1352829926, s);
    }
  };
  (ripemd128.RIPEMD128Digest.new = function() {
    this[algorithmName$11] = "RIPEMD-128";
    this[digestSize$9] = 16;
    ripemd128.RIPEMD128Digest.__proto__.new.call(this, typed_data.Endian.little, 4, 16);
    ;
  }).prototype = ripemd128.RIPEMD128Digest.prototype;
  dart.addTypeTests(ripemd128.RIPEMD128Digest);
  ripemd128.RIPEMD128Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(ripemd128.RIPEMD128Digest, () => ({
    __proto__: dart.getMethods(ripemd128.RIPEMD128Digest.__proto__),
    resetState: dart.fnType(dart.void, []),
    processBlock: dart.fnType(dart.void, []),
    [_f1$1]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f2$1]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f3$1]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_f4$1]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_F1$]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_F2$]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_F3$]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_F4$]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_FF1$]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_FF2$]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_FF3$]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int]),
    [_FF4$]: dart.fnType(core.int, [core.int, core.int, core.int, core.int, core.int, core.int])
  }));
  dart.setLibraryUri(ripemd128.RIPEMD128Digest, "package:pointycastle/digests/ripemd128.dart");
  dart.setFieldSignature(ripemd128.RIPEMD128Digest, () => ({
    __proto__: dart.getFields(ripemd128.RIPEMD128Digest.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(ripemd128.RIPEMD128Digest, {
    /*ripemd128.RIPEMD128Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "RIPEMD-128", dart.fn(() => new ripemd128.RIPEMD128Digest.new(), VoidToRIPEMD128Digest()));
    },
    /*ripemd128.RIPEMD128Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 16;
    }
  });
  const _F$ = dart.privateName(md5, "_F");
  const _G = dart.privateName(md5, "_G");
  const _H = dart.privateName(md5, "_H");
  const _K$0 = dart.privateName(md5, "_K");
  const algorithmName$12 = dart.privateName(md5, "MD5Digest.algorithmName");
  const digestSize$10 = dart.privateName(md5, "MD5Digest.digestSize");
  md5.MD5Digest = class MD5Digest extends md4_family_digest.MD4FamilyDigest {
    get algorithmName() {
      return this[algorithmName$12];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$10];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    resetState() {
      dart.dsend(this.state, '_set', [0, 1732584193]);
      dart.dsend(this.state, '_set', [1, 4023233417]);
      dart.dsend(this.state, '_set', [2, 2562383102]);
      dart.dsend(this.state, '_set', [3, 271733878]);
    }
    processBlock() {
      let a = dart.dsend(this.state, '_get', [0]);
      let b = dart.dsend(this.state, '_get', [1]);
      let c = dart.dsend(this.state, '_get', [2]);
      let d = dart.dsend(this.state, '_get', [3]);
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_F$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [3614090360])), 7), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_F$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [3905402710])), 12), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_F$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [606105819])), 17), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_F$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [3250441966])), 22), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_F$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [4118548399])), 7), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_F$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1200080426])), 12), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_F$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [2821735955])), 17), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_F$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [4249261313])), 22), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_F$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1770035416])), 7), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_F$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [2336552879])), 12), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_F$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [4294925233])), 17), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_F$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [2304563134])), 22), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_F$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1804603682])), 7), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_F$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [4254626195])), 12), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_F$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [2792965006])), 17), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_F$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1236535329])), 22), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_G](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [4129170786])), 5), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_G](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [3225465664])), 9), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_G](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [643717713])), 14), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_G](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [3921069994])), 20), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_G](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [3593408605])), 5), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_G](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [38016083])), 9), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_G](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [3634488961])), 14), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_G](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [3889429448])), 20), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_G](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [568446438])), 5), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_G](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [3275163606])), 9), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_G](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [4107603335])), 14), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_G](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1163531501])), 20), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_G](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [2850285829])), 5), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_G](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [4243563512])), 9), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_G](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1735328473])), 14), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_G](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [2368359562])), 20), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_H](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [4294588738])), 4), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_H](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [2272392833])), 11), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_H](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1839030562])), 16), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_H](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [4259657740])), 23), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_H](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [2763975236])), 4), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_H](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1272893353])), 11), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_H](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [4139469664])), 16), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_H](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [3200236656])), 23), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_H](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [681279174])), 4), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_H](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [3936430074])), 11), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_H](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [3572445317])), 16), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_H](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [76029189])), 23), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_H](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [3654602809])), 4), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_H](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [3873151461])), 11), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_H](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [530742520])), 16), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_H](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [3299628645])), 23), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_K$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [4096336452])), 6), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_K$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1126891415])), 10), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_K$0](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [2878612391])), 15), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_K$0](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [4237533241])), 21), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_K$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1700485571])), 6), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_K$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [2399980690])), 10), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_K$0](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [4293915773])), 15), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_K$0](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [2240044497])), 21), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_K$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1873313359])), 6), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_K$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [4264355552])), 10), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_K$0](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [2734768916])), 15), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_K$0](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1309151649])), 21), core.int._check(c));
      a = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_K$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [4149444226])), 6), core.int._check(b));
      d = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_K$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [3174756917])), 10), core.int._check(a));
      c = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_K$0](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [718787259])), 15), core.int._check(d));
      b = ufixnum.sum32(ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_K$0](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [3951481745])), 21), core.int._check(c));
      dart.dsend(this.state, '_set', [0, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [0]), '+', [a])))]);
      dart.dsend(this.state, '_set', [1, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [1]), '+', [b])))]);
      dart.dsend(this.state, '_set', [2, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [2]), '+', [c])))]);
      dart.dsend(this.state, '_set', [3, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [3]), '+', [d])))]);
    }
    [_F$](u, v, w) {
      return (dart.notNull(u) & dart.notNull(v) | (dart.notNull(ufixnum.not32(u)) & dart.notNull(w)) >>> 0) >>> 0;
    }
    [_G](u, v, w) {
      return (dart.notNull(u) & dart.notNull(w) | (dart.notNull(v) & dart.notNull(ufixnum.not32(w))) >>> 0) >>> 0;
    }
    [_H](u, v, w) {
      return (dart.notNull(u) ^ dart.notNull(v) ^ dart.notNull(w)) >>> 0;
    }
    [_K$0](u, v, w) {
      return (dart.notNull(v) ^ (dart.notNull(u) | dart.notNull(ufixnum.not32(w))) >>> 0) >>> 0;
    }
  };
  (md5.MD5Digest.new = function() {
    this[algorithmName$12] = "MD5";
    this[digestSize$10] = 16;
    md5.MD5Digest.__proto__.new.call(this, typed_data.Endian.little, 4, 16);
    ;
  }).prototype = md5.MD5Digest.prototype;
  dart.addTypeTests(md5.MD5Digest);
  md5.MD5Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(md5.MD5Digest, () => ({
    __proto__: dart.getMethods(md5.MD5Digest.__proto__),
    resetState: dart.fnType(dart.void, []),
    processBlock: dart.fnType(dart.void, []),
    [_F$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_G]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_H]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_K$0]: dart.fnType(core.int, [core.int, core.int, core.int])
  }));
  dart.setLibraryUri(md5.MD5Digest, "package:pointycastle/digests/md5.dart");
  dart.setFieldSignature(md5.MD5Digest, () => ({
    __proto__: dart.getFields(md5.MD5Digest.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(md5.MD5Digest, {
    /*md5.MD5Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "MD5", dart.fn(() => new md5.MD5Digest.new(), VoidToMD5Digest()));
    },
    /*md5.MD5Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 16;
    },
    /*md5.MD5Digest._S11*/get _S11() {
      return 7;
    },
    /*md5.MD5Digest._S12*/get _S12() {
      return 12;
    },
    /*md5.MD5Digest._S13*/get _S13() {
      return 17;
    },
    /*md5.MD5Digest._S14*/get _S14() {
      return 22;
    },
    /*md5.MD5Digest._S21*/get _S21() {
      return 5;
    },
    /*md5.MD5Digest._S22*/get _S22() {
      return 9;
    },
    /*md5.MD5Digest._S23*/get _S23() {
      return 14;
    },
    /*md5.MD5Digest._S24*/get _S24() {
      return 20;
    },
    /*md5.MD5Digest._S31*/get _S31() {
      return 4;
    },
    /*md5.MD5Digest._S32*/get _S32() {
      return 11;
    },
    /*md5.MD5Digest._S33*/get _S33() {
      return 16;
    },
    /*md5.MD5Digest._S34*/get _S34() {
      return 23;
    },
    /*md5.MD5Digest._S41*/get _S41() {
      return 6;
    },
    /*md5.MD5Digest._S42*/get _S42() {
      return 10;
    },
    /*md5.MD5Digest._S43*/get _S43() {
      return 15;
    },
    /*md5.MD5Digest._S44*/get _S44() {
      return 21;
    }
  });
  const _F$0 = dart.privateName(md4, "_F");
  const _G$ = dart.privateName(md4, "_G");
  const _H$ = dart.privateName(md4, "_H");
  const algorithmName$13 = dart.privateName(md4, "MD4Digest.algorithmName");
  const digestSize$11 = dart.privateName(md4, "MD4Digest.digestSize");
  md4.MD4Digest = class MD4Digest extends md4_family_digest.MD4FamilyDigest {
    get algorithmName() {
      return this[algorithmName$13];
    }
    set algorithmName(value) {
      super.algorithmName = value;
    }
    get digestSize() {
      return this[digestSize$11];
    }
    set digestSize(value) {
      super.digestSize = value;
    }
    resetState() {
      dart.dsend(this.state, '_set', [0, 1732584193]);
      dart.dsend(this.state, '_set', [1, 4023233417]);
      dart.dsend(this.state, '_set', [2, 2562383102]);
      dart.dsend(this.state, '_set', [3, 271733878]);
    }
    processBlock() {
      let a = dart.dsend(this.state, '_get', [0]);
      let b = dart.dsend(this.state, '_get', [1]);
      let c = dart.dsend(this.state, '_get', [2]);
      let d = dart.dsend(this.state, '_get', [3]);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_F$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [0])])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_F$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [1])])), 7);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_F$0](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [2])])), 11);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_F$0](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [3])])), 19);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_F$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [4])])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_F$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [5])])), 7);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_F$0](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [6])])), 11);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_F$0](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [7])])), 19);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_F$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [8])])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_F$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [9])])), 7);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_F$0](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [10])])), 11);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_F$0](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [11])])), 19);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(a, '+', [this[_F$0](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [12])])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(d, '+', [this[_F$0](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [13])])), 7);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(c, '+', [this[_F$0](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [14])])), 11);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(b, '+', [this[_F$0](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [15])])), 19);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_G$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1518500249])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_G$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1518500249])), 5);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_G$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1518500249])), 9);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_G$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1518500249])), 13);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_G$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1518500249])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_G$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1518500249])), 5);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_G$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1518500249])), 9);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_G$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1518500249])), 13);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_G$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1518500249])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_G$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1518500249])), 5);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_G$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1518500249])), 9);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_G$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1518500249])), 13);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_G$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1518500249])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_G$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1518500249])), 5);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_G$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1518500249])), 9);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_G$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1518500249])), 13);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_H$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [0])]), '+', [1859775393])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_H$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [8])]), '+', [1859775393])), 9);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_H$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [4])]), '+', [1859775393])), 11);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_H$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [12])]), '+', [1859775393])), 15);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_H$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [2])]), '+', [1859775393])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_H$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [10])]), '+', [1859775393])), 9);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_H$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [6])]), '+', [1859775393])), 11);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_H$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [14])]), '+', [1859775393])), 15);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_H$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [1])]), '+', [1859775393])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_H$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [9])]), '+', [1859775393])), 9);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_H$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [5])]), '+', [1859775393])), 11);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_H$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [13])]), '+', [1859775393])), 15);
      a = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(a, '+', [this[_H$](core.int._check(b), core.int._check(c), core.int._check(d))]), '+', [dart.dsend(this.buffer, '_get', [3])]), '+', [1859775393])), 3);
      d = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(d, '+', [this[_H$](core.int._check(a), core.int._check(b), core.int._check(c))]), '+', [dart.dsend(this.buffer, '_get', [11])]), '+', [1859775393])), 9);
      c = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(c, '+', [this[_H$](core.int._check(d), core.int._check(a), core.int._check(b))]), '+', [dart.dsend(this.buffer, '_get', [7])]), '+', [1859775393])), 11);
      b = ufixnum.crotl32(core.int._check(dart.dsend(dart.dsend(dart.dsend(b, '+', [this[_H$](core.int._check(c), core.int._check(d), core.int._check(a))]), '+', [dart.dsend(this.buffer, '_get', [15])]), '+', [1859775393])), 15);
      dart.dsend(this.state, '_set', [0, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [0]), '+', [a])))]);
      dart.dsend(this.state, '_set', [1, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [1]), '+', [b])))]);
      dart.dsend(this.state, '_set', [2, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [2]), '+', [c])))]);
      dart.dsend(this.state, '_set', [3, ufixnum.clip32(core.int._check(dart.dsend(dart.dsend(this.state, '_get', [3]), '+', [d])))]);
    }
    [_F$0](u, v, w) {
      return (dart.notNull(u) & dart.notNull(v) | (dart.notNull(ufixnum.not32(u)) & dart.notNull(w)) >>> 0) >>> 0;
    }
    [_G$](u, v, w) {
      return (dart.notNull(u) & dart.notNull(v) | (dart.notNull(u) & dart.notNull(w)) >>> 0 | (dart.notNull(v) & dart.notNull(w)) >>> 0) >>> 0;
    }
    [_H$](u, v, w) {
      return (dart.notNull(u) ^ dart.notNull(v) ^ dart.notNull(w)) >>> 0;
    }
  };
  (md4.MD4Digest.new = function() {
    this[algorithmName$13] = "MD4";
    this[digestSize$11] = 16;
    md4.MD4Digest.__proto__.new.call(this, typed_data.Endian.little, 4, 16);
    ;
  }).prototype = md4.MD4Digest.prototype;
  dart.addTypeTests(md4.MD4Digest);
  md4.MD4Digest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(md4.MD4Digest, () => ({
    __proto__: dart.getMethods(md4.MD4Digest.__proto__),
    resetState: dart.fnType(dart.void, []),
    processBlock: dart.fnType(dart.void, []),
    [_F$0]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_G$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_H$]: dart.fnType(core.int, [core.int, core.int, core.int])
  }));
  dart.setLibraryUri(md4.MD4Digest, "package:pointycastle/digests/md4.dart");
  dart.setFieldSignature(md4.MD4Digest, () => ({
    __proto__: dart.getFields(md4.MD4Digest.__proto__),
    algorithmName: dart.finalFieldType(core.String),
    digestSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(md4.MD4Digest, {
    /*md4.MD4Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "MD4", dart.fn(() => new md4.MD4Digest.new(), VoidToMD4Digest()));
    },
    /*md4.MD4Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 16;
    },
    /*md4.MD4Digest._S11*/get _S11() {
      return 3;
    },
    /*md4.MD4Digest._S12*/get _S12() {
      return 7;
    },
    /*md4.MD4Digest._S13*/get _S13() {
      return 11;
    },
    /*md4.MD4Digest._S14*/get _S14() {
      return 19;
    },
    /*md4.MD4Digest._S21*/get _S21() {
      return 3;
    },
    /*md4.MD4Digest._S22*/get _S22() {
      return 5;
    },
    /*md4.MD4Digest._S23*/get _S23() {
      return 9;
    },
    /*md4.MD4Digest._S24*/get _S24() {
      return 13;
    },
    /*md4.MD4Digest._S31*/get _S31() {
      return 3;
    },
    /*md4.MD4Digest._S32*/get _S32() {
      return 9;
    },
    /*md4.MD4Digest._S33*/get _S33() {
      return 11;
    },
    /*md4.MD4Digest._S34*/get _S34() {
      return 15;
    }
  });
  const _X = dart.privateName(md2, "_X");
  const _xOff = dart.privateName(md2, "_xOff");
  const _M = dart.privateName(md2, "_M");
  const _mOff = dart.privateName(md2, "_mOff");
  const _C = dart.privateName(md2, "_C");
  const _COff = dart.privateName(md2, "_COff");
  const _processCheckSum = dart.privateName(md2, "_processCheckSum");
  const _processBlock$1 = dart.privateName(md2, "_processBlock");
  md2.MD2Digest = class MD2Digest extends base_digest.BaseDigest {
    get algorithmName() {
      return "MD2";
    }
    get digestSize() {
      return 16;
    }
    reset() {
      this[_xOff] = 0;
      this[_X][$fillRange](0, this[_X][$length], 0);
      this[_mOff] = 0;
      this[_M][$fillRange](0, this[_M][$length], 0);
      this[_COff] = 0;
      this[_C][$fillRange](0, this[_C][$length], 0);
    }
    updateByte(inp) {
      let t4;
      this[_M][$_set]((t4 = this[_mOff], this[_mOff] = dart.notNull(t4) + 1, t4), inp);
      if (this[_mOff] === 16) {
        this[_processCheckSum](this[_M]);
        this[_processBlock$1](this[_M]);
        this[_mOff] = 0;
      }
    }
    update(inp, inpOff, len) {
      while (this[_mOff] !== 0 && dart.notNull(len) > 0) {
        this.updateByte(inp[$_get](inpOff));
        inpOff = dart.notNull(inpOff) + 1;
        len = dart.notNull(len) - 1;
      }
      while (dart.notNull(len) > 16) {
        this[_M][$setRange](0, 16, inp[$sublist](inpOff));
        this[_processCheckSum](this[_M]);
        this[_processBlock$1](this[_M]);
        len = dart.notNull(len) - 16;
        inpOff = dart.notNull(inpOff) + 16;
      }
      while (dart.notNull(len) > 0) {
        this.updateByte(inp[$_get](inpOff));
        inpOff = dart.notNull(inpOff) + 1;
        len = dart.notNull(len) - 1;
      }
    }
    doFinal(out, outOff) {
      let paddingByte = dart.notNull(this[_M][$length]) - dart.notNull(this[_mOff]);
      for (let i = this[_mOff]; dart.notNull(i) < dart.notNull(this[_M][$length]); i = dart.notNull(i) + 1) {
        this[_M][$_set](i, paddingByte);
      }
      this[_processCheckSum](this[_M]);
      this[_processBlock$1](this[_M]);
      this[_processBlock$1](this[_C]);
      out[$setRange](outOff, dart.notNull(outOff) + 16, this[_X][$sublist](this[_xOff]));
      this.reset();
      return 16;
    }
    [_processBlock$1](m) {
      let t6, t5, t4;
      for (let i = 0; i < 16; i = i + 1) {
        this[_X][$_set](i + 16, m[$_get](i));
        this[_X][$_set](i + 32, (dart.notNull(m[$_get](i)) ^ dart.notNull(this[_X][$_get](i))) >>> 0);
      }
      let t = 0;
      for (let j = 0; j < 18; j = j + 1) {
        for (let k = 0; k < 48; k = k + 1) {
          t = (t4 = this[_X], t5 = k, t6 = (dart.notNull(t4[$_get](t5)) ^ dart.notNull(md2.MD2Digest._S[$_get](t))) >>> 0, t4[$_set](t5, t6), t6);
          t = dart.notNull(t) & 255;
        }
        t = (dart.notNull(t) + j)[$modulo](256);
      }
    }
    [_processCheckSum](m) {
      let t5, t4;
      let L = this[_C][$_get](15);
      for (let i = 0; i < 16; i = i + 1) {
        t4 = this[_C];
        t5 = i;
        t4[$_set](t5, (dart.notNull(t4[$_get](t5)) ^ dart.notNull(md2.MD2Digest._S[$_get]((dart.notNull(m[$_get](i)) ^ dart.notNull(L)) & 255))) >>> 0);
        L = this[_C][$_get](i);
      }
    }
  };
  (md2.MD2Digest.new = function() {
    this[_X] = _native_typed_data.NativeUint8List.new(48);
    this[_xOff] = 0;
    this[_M] = _native_typed_data.NativeUint8List.new(16);
    this[_mOff] = 0;
    this[_C] = _native_typed_data.NativeUint8List.new(16);
    this[_COff] = 0;
    ;
  }).prototype = md2.MD2Digest.prototype;
  dart.addTypeTests(md2.MD2Digest);
  dart.setMethodSignature(md2.MD2Digest, () => ({
    __proto__: dart.getMethods(md2.MD2Digest.__proto__),
    reset: dart.fnType(dart.void, []),
    updateByte: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    [_processBlock$1]: dart.fnType(dart.void, [typed_data.Uint8List]),
    [_processCheckSum]: dart.fnType(dart.void, [typed_data.Uint8List])
  }));
  dart.setGetterSignature(md2.MD2Digest, () => ({
    __proto__: dart.getGetters(md2.MD2Digest.__proto__),
    algorithmName: core.String,
    digestSize: core.int
  }));
  dart.setLibraryUri(md2.MD2Digest, "package:pointycastle/digests/md2.dart");
  dart.setFieldSignature(md2.MD2Digest, () => ({
    __proto__: dart.getFields(md2.MD2Digest.__proto__),
    [_X]: dart.fieldType(typed_data.Uint8List),
    [_xOff]: dart.fieldType(core.int),
    [_M]: dart.fieldType(typed_data.Uint8List),
    [_mOff]: dart.fieldType(core.int),
    [_C]: dart.fieldType(typed_data.Uint8List),
    [_COff]: dart.fieldType(core.int)
  }));
  dart.defineLazy(md2.MD2Digest, {
    /*md2.MD2Digest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "MD2", dart.fn(() => new md2.MD2Digest.new(), VoidToMD2Digest()));
    },
    /*md2.MD2Digest._DIGEST_LENGTH*/get _DIGEST_LENGTH() {
      return 16;
    },
    /*md2.MD2Digest._S*/get _S() {
      return JSArrayOfint().of([41, 46, 67, 201, 162, 216, 124, 1, 61, 54, 84, 161, 236, 240, 6, 19, 98, 167, 5, 243, 192, 199, 115, 140, 152, 147, 43, 217, 188, 76, 130, 202, 30, 155, 87, 60, 253, 212, 224, 22, 103, 66, 111, 24, 138, 23, 229, 18, 190, 78, 196, 214, 218, 158, 222, 73, 160, 251, 245, 142, 187, 47, 238, 122, 169, 104, 121, 145, 21, 178, 7, 63, 148, 194, 16, 137, 11, 34, 95, 33, 128, 127, 93, 154, 90, 144, 50, 39, 53, 62, 204, 231, 191, 247, 151, 3, 255, 25, 48, 179, 72, 165, 181, 209, 215, 94, 146, 42, 172, 86, 170, 198, 79, 184, 56, 210, 150, 164, 125, 182, 118, 252, 107, 226, 156, 116, 4, 241, 69, 157, 112, 89, 100, 113, 135, 32, 134, 91, 207, 101, 230, 45, 168, 2, 27, 96, 37, 173, 174, 176, 185, 246, 28, 70, 97, 105, 52, 64, 126, 15, 85, 71, 163, 35, 221, 81, 175, 58, 195, 92, 249, 206, 186, 197, 234, 38, 44, 83, 13, 110, 133, 40, 132, 9, 211, 223, 205, 244, 65, 129, 77, 82, 106, 220, 55, 200, 108, 193, 171, 250, 36, 225, 123, 8, 12, 189, 177, 74, 120, 136, 149, 139, 227, 99, 232, 109, 233, 203, 213, 254, 59, 0, 29, 57, 242, 239, 183, 14, 102, 88, 208, 228, 166, 119, 114, 248, 235, 117, 75, 10, 49, 68, 80, 180, 143, 237, 31, 26, 219, 153, 141, 51, 159, 17, 131, 20]);
    }
  });
  const _digestLength = dart.privateName(blake2b, "_digestLength");
  const _keyLength = dart.privateName(blake2b, "_keyLength");
  const _salt = dart.privateName(blake2b, "_salt");
  const _personalization = dart.privateName(blake2b, "_personalization");
  const _key$ = dart.privateName(blake2b, "_key");
  const _buffer$1 = dart.privateName(blake2b, "_buffer");
  const _bufferPos$ = dart.privateName(blake2b, "_bufferPos");
  const _internalState = dart.privateName(blake2b, "_internalState");
  const _chainValue = dart.privateName(blake2b, "_chainValue");
  const _t0 = dart.privateName(blake2b, "_t0");
  const _t1 = dart.privateName(blake2b, "_t1");
  const _f0 = dart.privateName(blake2b, "_f0");
  const _m = dart.privateName(blake2b, "_m");
  const _initializeInternalState = dart.privateName(blake2b, "_initializeInternalState");
  const _compress = dart.privateName(blake2b, "_compress");
  blake2b.Blake2bDigest = class Blake2bDigest extends base_digest.BaseDigest {
    get algorithmName() {
      return "Blake2b";
    }
    get digestSize() {
      return this[_digestLength];
    }
    init() {
      let t4, t4$, t4$0, t4$1, t4$2;
      if (this[_chainValue] == null) {
        this[_chainValue] = new ufixnum.Register64List.new(8);
        t4 = this[_chainValue]._get(0);
        t4.set(blake2b._blake2b_IV._get(0));
        t4.xor(new ufixnum.Register64.new((dart.notNull(this.digestSize) | dart.notNull(this[_keyLength]) << 8 >>> 0 | 16842752) >>> 0));
        t4;
        this[_chainValue]._get(1).set(blake2b._blake2b_IV._get(1));
        this[_chainValue]._get(2).set(blake2b._blake2b_IV._get(2));
        this[_chainValue]._get(3).set(blake2b._blake2b_IV._get(3));
        this[_chainValue]._get(4).set(blake2b._blake2b_IV._get(4));
        this[_chainValue]._get(5).set(blake2b._blake2b_IV._get(5));
        if (this[_salt] != null) {
          this[_chainValue]._get(4).xor((t4$ = new ufixnum.Register64.new(), t4$.unpack(this[_salt], 0, typed_data.Endian.little), t4$));
          this[_chainValue]._get(5).xor((t4$0 = new ufixnum.Register64.new(), t4$0.unpack(this[_salt], 8, typed_data.Endian.little), t4$0));
        }
        this[_chainValue]._get(6).set(blake2b._blake2b_IV._get(6));
        this[_chainValue]._get(7).set(blake2b._blake2b_IV._get(7));
        if (this[_personalization] != null) {
          this[_chainValue]._get(6).xor((t4$1 = new ufixnum.Register64.new(), t4$1.unpack(this[_personalization], 0, typed_data.Endian.little), t4$1));
          this[_chainValue]._get(7).xor((t4$2 = new ufixnum.Register64.new(), t4$2.unpack(this[_personalization], 8, typed_data.Endian.little), t4$2));
        }
      }
    }
    [_initializeInternalState]() {
      let t4, t4$, t4$0, t4$1;
      this[_internalState].setRange(0, this[_chainValue].length, this[_chainValue]);
      this[_internalState].setRange(this[_chainValue].length, dart.notNull(this[_chainValue].length) + 4, blake2b._blake2b_IV);
      t4 = this[_internalState]._get(12);
      t4.set(this[_t0]);
      t4.xor(blake2b._blake2b_IV._get(4));
      t4;
      t4$ = this[_internalState]._get(13);
      t4$.set(this[_t1]);
      t4$.xor(blake2b._blake2b_IV._get(5));
      t4$;
      t4$0 = this[_internalState]._get(14);
      t4$0.set(this[_f0]);
      t4$0.xor(blake2b._blake2b_IV._get(6));
      t4$0;
      t4$1 = this[_internalState]._get(15);
      t4$1.set(blake2b._blake2b_IV._get(7));
      t4$1;
    }
    updateByte(inp) {
      if (this[_bufferPos$] === 128) {
        this[_t0].sum(128);
        if (this[_t0].lo32 === 0 && this[_t0].hi32 === 0) this[_t1].sum(1);
        this[_compress](this[_buffer$1], 0);
        this[_buffer$1][$fillRange](0, this[_buffer$1][$length], 0);
        this[_buffer$1][$_set](0, inp);
        this[_bufferPos$] = 1;
      } else {
        this[_buffer$1][$_set](this[_bufferPos$], inp);
        this[_bufferPos$] = dart.notNull(this[_bufferPos$]) + 1;
      }
    }
    update(inp, inpOff, len) {
      if (inp == null || len === 0) return;
      let remainingLength = 0;
      if (this[_bufferPos$] !== 0) {
        remainingLength = 128 - dart.notNull(this[_bufferPos$]);
        if (remainingLength < dart.notNull(len)) {
          this[_buffer$1][$setRange](this[_bufferPos$], dart.notNull(this[_bufferPos$]) + remainingLength, inp, inpOff);
          this[_t0].sum(128);
          if (this[_t0].lo32 === 0 && this[_t0].hi32 === 0) this[_t1].sum(1);
          this[_compress](inp, 0);
          this[_bufferPos$] = 0;
          this[_buffer$1][$fillRange](0, this[_buffer$1][$length], 0);
        } else {
          this[_buffer$1][$setRange](this[_bufferPos$], dart.notNull(this[_bufferPos$]) + dart.notNull(len), inp, inpOff);
          this[_bufferPos$] = dart.notNull(this[_bufferPos$]) + dart.notNull(len);
          return;
        }
      }
      let msgPos = null;
      let blockWiseLastPos = dart.notNull(inpOff) + dart.notNull(len) - 128;
      for (let t4 = msgPos = dart.notNull(inpOff) + remainingLength; dart.notNull(msgPos) < blockWiseLastPos; msgPos = dart.notNull(msgPos) + 128) {
        this[_t0].sum(128);
        if (this[_t0].lo32 === 0 && this[_t0].hi32 === 0) this[_t1].sum(1);
        this[_compress](inp, msgPos);
      }
      this[_buffer$1][$setRange](0, dart.notNull(inpOff) + dart.notNull(len) - dart.notNull(msgPos), inp, msgPos);
      this[_bufferPos$] = dart.notNull(this[_bufferPos$]) + (dart.notNull(inpOff) + dart.notNull(len) - dart.notNull(msgPos));
    }
    doFinal(out, outOff) {
      this[_f0].set(4294967295, 4294967295);
      this[_t0].sum(this[_bufferPos$]);
      if (dart.notNull(this[_bufferPos$]) > 0 && this[_t0].lo32 === 0 && this[_t0].hi32 === 0) this[_t1].sum(1);
      this[_compress](this[_buffer$1], 0);
      this[_buffer$1][$fillRange](0, this[_buffer$1][$length], 0);
      this[_internalState].fillRange(0, this[_internalState].length, 0);
      let packedValue = _native_typed_data.NativeUint8List.new(8);
      let packedValueData = packedValue[$buffer][$asByteData]();
      for (let i = 0; i < dart.notNull(this[_chainValue].length) && i * 8 < dart.notNull(this[_digestLength]); i = i + 1) {
        this[_chainValue]._get(i).pack(packedValueData, 0, typed_data.Endian.little);
        let start = dart.notNull(outOff) + i * 8;
        if (i * 8 < dart.notNull(this[_digestLength]) - 8) {
          out[$setRange](start, start + 8, packedValue);
        } else {
          out[$setRange](start, start + dart.notNull(this[_digestLength]) - i * 8, packedValue);
        }
      }
      this[_chainValue].fillRange(0, this[_chainValue].length, 0);
      this.reset();
      return this[_digestLength];
    }
    reset() {
      this[_bufferPos$] = 0;
      this[_f0].set(0);
      this[_t0].set(0);
      this[_t1].set(0);
      this[_chainValue] = null;
      this[_buffer$1][$fillRange](0, this[_buffer$1][$length], 0);
      if (this[_key$] != null) {
        this[_buffer$1][$setAll](0, this[_key$]);
        this[_bufferPos$] = 128;
      }
      this.init();
    }
    [_compress](message, messagePos) {
      let t5;
      this[_initializeInternalState]();
      for (let j = 0; j < 16; j = j + 1) {
        this[_m]._get(j).unpack(message, dart.notNull(messagePos) + j * 8, typed_data.Endian.little);
      }
      for (let round = 0; round < 12; round = round + 1) {
        this.G(this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](0)), this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](1)), 0, 4, 8, 12);
        this.G(this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](2)), this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](3)), 1, 5, 9, 13);
        this.G(this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](4)), this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](5)), 2, 6, 10, 14);
        this.G(this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](6)), this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](7)), 3, 7, 11, 15);
        this.G(this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](8)), this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](9)), 0, 5, 10, 15);
        this.G(this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](10)), this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](11)), 1, 6, 11, 12);
        this.G(this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](12)), this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](13)), 2, 7, 8, 13);
        this.G(this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](14)), this[_m]._get(blake2b._blake2b_sigma[$_get](round)[$_get](15)), 3, 4, 9, 14);
      }
      for (let offset = 0; offset < dart.notNull(this[_chainValue].length); offset = offset + 1) {
        t5 = this[_chainValue]._get(offset);
        t5.xor(this[_internalState]._get(offset));
        t5.xor(this[_internalState]._get(offset + 8));
        t5;
      }
    }
    G(m1, m2, posA, posB, posC, posD) {
      let t5, t5$, t5$0, t5$1, t5$2, t5$3;
      let r = new ufixnum.Register64.new();
      this[_internalState]._get(posA).sumReg((t5 = r, t5.set(this[_internalState]._get(posB)), t5.sumReg(m1), t5));
      t5$ = this[_internalState]._get(posD);
      t5$.xor(this[_internalState]._get(posA));
      t5$.rotr(32);
      t5$;
      this[_internalState]._get(posC).sumReg(this[_internalState]._get(posD));
      t5$0 = this[_internalState]._get(posB);
      t5$0.xor(this[_internalState]._get(posC));
      t5$0.rotr(24);
      t5$0;
      this[_internalState]._get(posA).sumReg((t5$1 = r, t5$1.set(this[_internalState]._get(posB)), t5$1.sumReg(m2), t5$1));
      t5$2 = this[_internalState]._get(posD);
      t5$2.xor(this[_internalState]._get(posA));
      t5$2.rotr(16);
      t5$2;
      this[_internalState]._get(posC).sumReg(this[_internalState]._get(posD));
      t5$3 = this[_internalState]._get(posB);
      t5$3.xor(this[_internalState]._get(posC));
      t5$3.rotr(63);
      t5$3;
    }
  };
  (blake2b.Blake2bDigest.new = function(opts) {
    let digestSize = opts && 'digestSize' in opts ? opts.digestSize : 64;
    let key = opts && 'key' in opts ? opts.key : null;
    let salt = opts && 'salt' in opts ? opts.salt : null;
    let personalization = opts && 'personalization' in opts ? opts.personalization : null;
    this[_digestLength] = 64;
    this[_keyLength] = 0;
    this[_salt] = null;
    this[_personalization] = null;
    this[_key$] = null;
    this[_buffer$1] = null;
    this[_bufferPos$] = 0;
    this[_internalState] = new ufixnum.Register64List.new(16);
    this[_chainValue] = null;
    this[_t0] = new ufixnum.Register64.new();
    this[_t1] = new ufixnum.Register64.new();
    this[_f0] = new ufixnum.Register64.new();
    this[_m] = new ufixnum.Register64List.new(16);
    this[_buffer$1] = _native_typed_data.NativeUint8List.new(128);
    if (dart.notNull(digestSize) < 1 || dart.notNull(digestSize) > 64) {
      dart.throw(new core.ArgumentError.new("Invalid digest length (required: 1 - 64)"));
    }
    this[_digestLength] = digestSize;
    if (salt != null) {
      if (salt[$length] !== 16) dart.throw(new core.ArgumentError.new("salt length must be exactly 16 bytes"));
      this[_salt] = _native_typed_data.NativeUint8List.fromList(salt);
    }
    if (personalization != null) {
      if (personalization[$length] !== 16) dart.throw(new core.ArgumentError.new("personalization length must be exactly 16 bytes"));
      this[_personalization] = _native_typed_data.NativeUint8List.fromList(personalization);
    }
    if (key != null) {
      if (dart.notNull(key[$length]) > 64) dart.throw(new core.ArgumentError.new("Keys > 64 are not supported"));
      this[_key$] = _native_typed_data.NativeUint8List.fromList(key);
      this[_keyLength] = key[$length];
      this[_buffer$1][$setAll](0, key);
      this[_bufferPos$] = 128;
    }
    this.init();
  }).prototype = blake2b.Blake2bDigest.prototype;
  dart.addTypeTests(blake2b.Blake2bDigest);
  blake2b.Blake2bDigest[dart.implements] = () => [api.Digest];
  dart.setMethodSignature(blake2b.Blake2bDigest, () => ({
    __proto__: dart.getMethods(blake2b.Blake2bDigest.__proto__),
    init: dart.fnType(dart.void, []),
    [_initializeInternalState]: dart.fnType(dart.void, []),
    updateByte: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [typed_data.Uint8List, core.int, core.int]),
    doFinal: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    reset: dart.fnType(dart.void, []),
    [_compress]: dart.fnType(dart.void, [typed_data.Uint8List, core.int]),
    G: dart.fnType(dart.void, [ufixnum.Register64, ufixnum.Register64, core.int, core.int, core.int, core.int])
  }));
  dart.setGetterSignature(blake2b.Blake2bDigest, () => ({
    __proto__: dart.getGetters(blake2b.Blake2bDigest.__proto__),
    algorithmName: core.String,
    digestSize: core.int
  }));
  dart.setLibraryUri(blake2b.Blake2bDigest, "package:pointycastle/digests/blake2b.dart");
  dart.setFieldSignature(blake2b.Blake2bDigest, () => ({
    __proto__: dart.getFields(blake2b.Blake2bDigest.__proto__),
    [_digestLength]: dart.fieldType(core.int),
    [_keyLength]: dart.fieldType(core.int),
    [_salt]: dart.fieldType(typed_data.Uint8List),
    [_personalization]: dart.fieldType(typed_data.Uint8List),
    [_key$]: dart.fieldType(typed_data.Uint8List),
    [_buffer$1]: dart.fieldType(typed_data.Uint8List),
    [_bufferPos$]: dart.fieldType(core.int),
    [_internalState]: dart.finalFieldType(ufixnum.Register64List),
    [_chainValue]: dart.fieldType(ufixnum.Register64List),
    [_t0]: dart.finalFieldType(ufixnum.Register64),
    [_t1]: dart.finalFieldType(ufixnum.Register64),
    [_f0]: dart.finalFieldType(ufixnum.Register64),
    [_m]: dart.finalFieldType(ufixnum.Register64List)
  }));
  dart.defineLazy(blake2b.Blake2bDigest, {
    /*blake2b.Blake2bDigest.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.StaticFactoryConfig.new(dart.wrapType(api.Digest), "Blake2b", dart.fn(() => new blake2b.Blake2bDigest.new(), VoidToBlake2bDigest()));
    },
    /*blake2b.Blake2bDigest._rounds*/get _rounds() {
      return 12;
    },
    /*blake2b.Blake2bDigest._blockSize*/get _blockSize() {
      return 128;
    }
  });
  dart.defineLazy(blake2b, {
    /*blake2b._blake2b_IV*/get _blake2b_IV() {
      return new ufixnum.Register64List.from(JSArrayOfListOfint().of([JSArrayOfint().of([1779033703, 4089235720]), JSArrayOfint().of([3144134277, 2227873595]), JSArrayOfint().of([1013904242, 4271175723]), JSArrayOfint().of([2773480762, 1595750129]), JSArrayOfint().of([1359893119, 2917565137]), JSArrayOfint().of([2600822924, 725511199]), JSArrayOfint().of([528734635, 4215389547]), JSArrayOfint().of([1541459225, 327033209])]));
    },
    /*blake2b._blake2b_sigma*/get _blake2b_sigma() {
      return JSArrayOfListOfint().of([JSArrayOfint().of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), JSArrayOfint().of([14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3]), JSArrayOfint().of([11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4]), JSArrayOfint().of([7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8]), JSArrayOfint().of([9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13]), JSArrayOfint().of([2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]), JSArrayOfint().of([12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11]), JSArrayOfint().of([13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10]), JSArrayOfint().of([6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5]), JSArrayOfint().of([10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0]), JSArrayOfint().of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), JSArrayOfint().of([14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3])]);
    }
  });
  const streamCipher$ = dart.privateName(stream_cipher_as_block_cipher, "StreamCipherAsBlockCipher.streamCipher");
  const blockSize$ = dart.privateName(stream_cipher_as_block_cipher, "StreamCipherAsBlockCipher.blockSize");
  stream_cipher_as_block_cipher.StreamCipherAsBlockCipher = class StreamCipherAsBlockCipher extends base_block_cipher.BaseBlockCipher {
    get streamCipher() {
      return this[streamCipher$];
    }
    set streamCipher(value) {
      super.streamCipher = value;
    }
    get blockSize() {
      return this[blockSize$];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    get algorithmName() {
      return this.streamCipher.algorithmName;
    }
    reset() {
      this.streamCipher.reset();
    }
    init(forEncryption, params) {
      this.streamCipher.init(forEncryption, params);
    }
    processBlock(inp, inpOff, out, outOff) {
      this.streamCipher.processBytes(inp, inpOff, this.blockSize, out, outOff);
      return this.blockSize;
    }
  };
  (stream_cipher_as_block_cipher.StreamCipherAsBlockCipher.new = function(blockSize, streamCipher) {
    this[blockSize$] = blockSize;
    this[streamCipher$] = streamCipher;
    ;
  }).prototype = stream_cipher_as_block_cipher.StreamCipherAsBlockCipher.prototype;
  dart.addTypeTests(stream_cipher_as_block_cipher.StreamCipherAsBlockCipher);
  dart.setMethodSignature(stream_cipher_as_block_cipher.StreamCipherAsBlockCipher, () => ({
    __proto__: dart.getMethods(stream_cipher_as_block_cipher.StreamCipherAsBlockCipher.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, api.CipherParameters]),
    processBlock: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int])
  }));
  dart.setGetterSignature(stream_cipher_as_block_cipher.StreamCipherAsBlockCipher, () => ({
    __proto__: dart.getGetters(stream_cipher_as_block_cipher.StreamCipherAsBlockCipher.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(stream_cipher_as_block_cipher.StreamCipherAsBlockCipher, "package:pointycastle/adapters/stream_cipher_as_block_cipher.dart");
  dart.setFieldSignature(stream_cipher_as_block_cipher.StreamCipherAsBlockCipher, () => ({
    __proto__: dart.getFields(stream_cipher_as_block_cipher.StreamCipherAsBlockCipher.__proto__),
    streamCipher: dart.finalFieldType(api.StreamCipher),
    blockSize: dart.finalFieldType(core.int)
  }));
  sic$.SICBlockCipher = class SICBlockCipher extends stream_cipher_as_block_cipher.StreamCipherAsBlockCipher {};
  (sic$.SICBlockCipher.new = function(blockSize, underlyingCipher) {
    sic$.SICBlockCipher.__proto__.new.call(this, blockSize, underlyingCipher);
    ;
  }).prototype = sic$.SICBlockCipher.prototype;
  dart.addTypeTests(sic$.SICBlockCipher);
  dart.setLibraryUri(sic$.SICBlockCipher, "package:pointycastle/block/modes/sic.dart");
  dart.defineLazy(sic$.SICBlockCipher, {
    /*sic$.SICBlockCipher.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.BlockCipher), "/SIC", dart.fn((_, match) => dart.fn(() => {
        let underlying = api.BlockCipher.new(match.group(1));
        return new sic$.SICBlockCipher.new(underlying.blockSize, new sic.SICStreamCipher.new(underlying));
      }, VoidToSICBlockCipher()), StringAndMatchToFn$13()));
    }
  });
  const _IV$ = dart.privateName(ofb, "_IV");
  const _ofbV = dart.privateName(ofb, "_ofbV");
  const _ofbOutV = dart.privateName(ofb, "_ofbOutV");
  const _underlyingCipher$0 = dart.privateName(ofb, "_underlyingCipher");
  const blockSize$0 = dart.privateName(ofb, "OFBBlockCipher.blockSize");
  ofb.OFBBlockCipher = class OFBBlockCipher extends base_block_cipher.BaseBlockCipher {
    get blockSize() {
      return this[blockSize$0];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    get algorithmName() {
      return dart.str(this[_underlyingCipher$0].algorithmName) + "/OFB-" + dart.str(dart.notNull(this.blockSize) * 8);
    }
    reset() {
      this[_ofbV][$setRange](0, this[_IV$][$length], this[_IV$]);
      this[_underlyingCipher$0].reset();
    }
    init(forEncryption, params) {
      if (ParametersWithIVOfCipherParameters().is(params)) {
        let ivParam = params;
        let iv = ivParam.iv;
        if (dart.notNull(iv[$length]) < dart.notNull(this[_IV$][$length])) {
          let offset = dart.notNull(this[_IV$][$length]) - dart.notNull(iv[$length]);
          this[_IV$][$fillRange](0, offset, 0);
          this[_IV$][$setAll](offset, iv);
        } else {
          this[_IV$][$setRange](0, this[_IV$][$length], iv);
        }
        this.reset();
        if (ivParam.parameters != null) {
          this[_underlyingCipher$0].init(true, ivParam.parameters);
        }
      } else {
        this[_underlyingCipher$0].init(true, params);
      }
    }
    processBlock(inp, inpOff, out, outOff) {
      if (dart.notNull(inpOff) + dart.notNull(this.blockSize) > dart.notNull(inp[$length])) {
        dart.throw(new core.ArgumentError.new("Input buffer too short"));
      }
      if (dart.notNull(outOff) + dart.notNull(this.blockSize) > dart.notNull(out[$length])) {
        dart.throw(new core.ArgumentError.new("Output buffer too short"));
      }
      this[_underlyingCipher$0].processBlock(this[_ofbV], 0, this[_ofbOutV], 0);
      for (let i = 0; i < dart.notNull(this.blockSize); i = i + 1) {
        out[$_set](dart.notNull(outOff) + i, (dart.notNull(this[_ofbOutV][$_get](i)) ^ dart.notNull(inp[$_get](dart.notNull(inpOff) + i))) >>> 0);
      }
      let offset = dart.notNull(this[_ofbV][$length]) - dart.notNull(this.blockSize);
      this[_ofbV][$setRange](0, offset, this[_ofbV][$sublist](this.blockSize));
      this[_ofbV][$setRange](offset, this[_ofbV][$length], this[_ofbOutV]);
      return this.blockSize;
    }
  };
  (ofb.OFBBlockCipher.new = function(_underlyingCipher, blockSize) {
    this[_IV$] = null;
    this[_ofbV] = null;
    this[_ofbOutV] = null;
    this[_underlyingCipher$0] = _underlyingCipher;
    this[blockSize$0] = blockSize;
    this[_IV$] = _native_typed_data.NativeUint8List.new(this[_underlyingCipher$0].blockSize);
    this[_ofbV] = _native_typed_data.NativeUint8List.new(this[_underlyingCipher$0].blockSize);
    this[_ofbOutV] = _native_typed_data.NativeUint8List.new(this[_underlyingCipher$0].blockSize);
  }).prototype = ofb.OFBBlockCipher.prototype;
  dart.addTypeTests(ofb.OFBBlockCipher);
  dart.setMethodSignature(ofb.OFBBlockCipher, () => ({
    __proto__: dart.getMethods(ofb.OFBBlockCipher.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, api.CipherParameters]),
    processBlock: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int])
  }));
  dart.setGetterSignature(ofb.OFBBlockCipher, () => ({
    __proto__: dart.getGetters(ofb.OFBBlockCipher.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(ofb.OFBBlockCipher, "package:pointycastle/block/modes/ofb.dart");
  dart.setFieldSignature(ofb.OFBBlockCipher, () => ({
    __proto__: dart.getFields(ofb.OFBBlockCipher.__proto__),
    blockSize: dart.finalFieldType(core.int),
    [_underlyingCipher$0]: dart.finalFieldType(api.BlockCipher),
    [_IV$]: dart.fieldType(typed_data.Uint8List),
    [_ofbV]: dart.fieldType(typed_data.Uint8List),
    [_ofbOutV]: dart.fieldType(typed_data.Uint8List)
  }));
  dart.defineLazy(ofb.OFBBlockCipher, {
    /*ofb.OFBBlockCipher.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.regex(dart.wrapType(api.BlockCipher), "^(.+)/OFB-([0-9]+)$", dart.fn((_, match) => dart.fn(() => {
        let underlying = api.BlockCipher.new(match.group(1));
        let blockSizeInBits = core.int.parse(match.group(2));
        if (blockSizeInBits[$modulo](8) !== 0) {
          dart.throw(new api.RegistryFactoryException.invalid("Bad OFB block size: " + dart.str(blockSizeInBits) + " (must be a multiple of 8)"));
        }
        return new ofb.OFBBlockCipher.new(underlying, (dart.notNull(blockSizeInBits) / 8)[$truncate]());
      }, VoidToOFBBlockCipher()), StringAndMatchToFn$14()));
    }
  });
  const _IV$0 = dart.privateName(gctr, "_IV");
  const _ofbV$ = dart.privateName(gctr, "_ofbV");
  const _ofbOutV$ = dart.privateName(gctr, "_ofbOutV");
  const _firstStep = dart.privateName(gctr, "_firstStep");
  const _N3 = dart.privateName(gctr, "_N3");
  const _N4 = dart.privateName(gctr, "_N4");
  const _underlyingCipher$1 = dart.privateName(gctr, "_underlyingCipher");
  const _bytesToint = dart.privateName(gctr, "_bytesToint");
  const _intTobytes = dart.privateName(gctr, "_intTobytes");
  gctr.GCTRBlockCipher = class GCTRBlockCipher extends base_block_cipher.BaseBlockCipher {
    get blockSize() {
      return this[_underlyingCipher$1].blockSize;
    }
    get algorithmName() {
      return dart.str(this[_underlyingCipher$1].algorithmName) + "/GCTR";
    }
    reset() {
      this[_ofbV$][$setRange](0, this[_IV$0][$length], this[_IV$0]);
      this[_underlyingCipher$1].reset();
    }
    init(encrypting, params) {
      this[_firstStep] = true;
      this[_N3] = 0;
      this[_N4] = 0;
      if (ParametersWithIVOfCipherParameters().is(params)) {
        let ivParam = params;
        let iv = ivParam.iv;
        if (dart.notNull(iv[$length]) < dart.notNull(this[_IV$0][$length])) {
          let offset = dart.notNull(this[_IV$0][$length]) - dart.notNull(iv[$length]);
          this[_IV$0][$fillRange](0, offset, 0);
          this[_IV$0][$setRange](offset, this[_IV$0][$length], iv);
        } else {
          this[_IV$0][$setRange](0, this[_IV$0][$length], iv);
        }
        this.reset();
        if (ivParam.parameters != null) {
          this[_underlyingCipher$1].init(true, ivParam.parameters);
        }
      } else {
        this.reset();
        if (params != null) {
          this[_underlyingCipher$1].init(true, params);
        }
      }
    }
    processBlock(inp, inpOff, out, outOff) {
      if (dart.notNull(inpOff) + dart.notNull(this.blockSize) > dart.notNull(inp[$length])) {
        dart.throw(new core.ArgumentError.new("Input buffer too short"));
      }
      if (dart.notNull(outOff) + dart.notNull(this.blockSize) > dart.notNull(out[$length])) {
        dart.throw(new core.ArgumentError.new("Output buffer too short"));
      }
      if (dart.test(this[_firstStep])) {
        this[_firstStep] = false;
        this[_underlyingCipher$1].processBlock(this[_ofbV$], 0, this[_ofbOutV$], 0);
        this[_N3] = this[_bytesToint](this[_ofbOutV$], 0);
        this[_N4] = this[_bytesToint](this[_ofbOutV$], 4);
      }
      this[_N3] = dart.notNull(this[_N3]) + 16843009;
      this[_N4] = dart.notNull(this[_N4]) + 16843012;
      this[_intTobytes](this[_N3], this[_ofbV$], 0);
      this[_intTobytes](this[_N4], this[_ofbV$], 4);
      this[_underlyingCipher$1].processBlock(this[_ofbV$], 0, this[_ofbOutV$], 0);
      for (let i = 0; i < dart.notNull(this.blockSize); i = i + 1) {
        out[$_set](dart.notNull(outOff) + i, (dart.notNull(this[_ofbOutV$][$_get](i)) ^ dart.notNull(inp[$_get](dart.notNull(inpOff) + i))) >>> 0);
      }
      let offset = dart.notNull(this[_ofbV$][$length]) - dart.notNull(this.blockSize);
      this[_ofbV$][$setRange](0, offset, this[_ofbV$][$sublist](this.blockSize));
      this[_ofbV$][$setRange](offset, this[_ofbV$][$length], this[_ofbOutV$]);
      return this.blockSize;
    }
    [_bytesToint](inp, inpOff) {
      return ufixnum.unpack32(inp, inpOff, typed_data.Endian.little);
    }
    [_intTobytes](num, out, outOff) {
      ufixnum.pack32(num, out, outOff, typed_data.Endian.little);
    }
  };
  (gctr.GCTRBlockCipher.new = function(_underlyingCipher) {
    this[_IV$0] = null;
    this[_ofbV$] = null;
    this[_ofbOutV$] = null;
    this[_firstStep] = true;
    this[_N3] = null;
    this[_N4] = null;
    this[_underlyingCipher$1] = _underlyingCipher;
    if (this.blockSize !== 8) {
      dart.throw(new core.ArgumentError.new("GCTR can only be used with 64 bit block ciphers"));
    }
    this[_IV$0] = _native_typed_data.NativeUint8List.new(this[_underlyingCipher$1].blockSize);
    this[_ofbV$] = _native_typed_data.NativeUint8List.new(this[_underlyingCipher$1].blockSize);
    this[_ofbOutV$] = _native_typed_data.NativeUint8List.new(this[_underlyingCipher$1].blockSize);
  }).prototype = gctr.GCTRBlockCipher.prototype;
  dart.addTypeTests(gctr.GCTRBlockCipher);
  dart.setMethodSignature(gctr.GCTRBlockCipher, () => ({
    __proto__: dart.getMethods(gctr.GCTRBlockCipher.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, api.CipherParameters]),
    processBlock: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int]),
    [_bytesToint]: dart.fnType(core.int, [typed_data.Uint8List, core.int]),
    [_intTobytes]: dart.fnType(dart.void, [core.int, typed_data.Uint8List, core.int])
  }));
  dart.setGetterSignature(gctr.GCTRBlockCipher, () => ({
    __proto__: dart.getGetters(gctr.GCTRBlockCipher.__proto__),
    blockSize: core.int,
    algorithmName: core.String
  }));
  dart.setLibraryUri(gctr.GCTRBlockCipher, "package:pointycastle/block/modes/gctr.dart");
  dart.setFieldSignature(gctr.GCTRBlockCipher, () => ({
    __proto__: dart.getFields(gctr.GCTRBlockCipher.__proto__),
    [_underlyingCipher$1]: dart.finalFieldType(api.BlockCipher),
    [_IV$0]: dart.fieldType(typed_data.Uint8List),
    [_ofbV$]: dart.fieldType(typed_data.Uint8List),
    [_ofbOutV$]: dart.fieldType(typed_data.Uint8List),
    [_firstStep]: dart.fieldType(core.bool),
    [_N3]: dart.fieldType(core.int),
    [_N4]: dart.fieldType(core.int)
  }));
  dart.defineLazy(gctr.GCTRBlockCipher, {
    /*gctr.GCTRBlockCipher.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.BlockCipher), "/GCTR", dart.fn((_, match) => dart.fn(() => {
        let underlying = api.BlockCipher.new(match.group(1));
        return new gctr.GCTRBlockCipher.new(underlying);
      }, VoidToGCTRBlockCipher()), StringAndMatchToFn$15()));
    },
    /*gctr.GCTRBlockCipher.C1*/get C1() {
      return 16843012;
    },
    /*gctr.GCTRBlockCipher.C2*/get C2() {
      return 16843009;
    }
  });
  const _underlyingCipher$2 = dart.privateName(ecb, "_underlyingCipher");
  ecb.ECBBlockCipher = class ECBBlockCipher extends base_block_cipher.BaseBlockCipher {
    get algorithmName() {
      return dart.str(this[_underlyingCipher$2].algorithmName) + "/ECB";
    }
    get blockSize() {
      return this[_underlyingCipher$2].blockSize;
    }
    reset() {
      this[_underlyingCipher$2].reset();
    }
    init(forEncryption, params) {
      this[_underlyingCipher$2].init(forEncryption, params);
    }
    processBlock(inp, inpOff, out, outOff) {
      return this[_underlyingCipher$2].processBlock(inp, inpOff, out, outOff);
    }
  };
  (ecb.ECBBlockCipher.new = function(_underlyingCipher) {
    this[_underlyingCipher$2] = _underlyingCipher;
    ;
  }).prototype = ecb.ECBBlockCipher.prototype;
  dart.addTypeTests(ecb.ECBBlockCipher);
  dart.setMethodSignature(ecb.ECBBlockCipher, () => ({
    __proto__: dart.getMethods(ecb.ECBBlockCipher.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, api.CipherParameters]),
    processBlock: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int])
  }));
  dart.setGetterSignature(ecb.ECBBlockCipher, () => ({
    __proto__: dart.getGetters(ecb.ECBBlockCipher.__proto__),
    algorithmName: core.String,
    blockSize: core.int
  }));
  dart.setLibraryUri(ecb.ECBBlockCipher, "package:pointycastle/block/modes/ecb.dart");
  dart.setFieldSignature(ecb.ECBBlockCipher, () => ({
    __proto__: dart.getFields(ecb.ECBBlockCipher.__proto__),
    [_underlyingCipher$2]: dart.finalFieldType(api.BlockCipher)
  }));
  dart.defineLazy(ecb.ECBBlockCipher, {
    /*ecb.ECBBlockCipher.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.BlockCipher), "/ECB", dart.fn((_, match) => dart.fn(() => {
        let underlying = api.BlockCipher.new(match.group(1));
        return new ecb.ECBBlockCipher.new(underlying);
      }, VoidToECBBlockCipher()), StringAndMatchToFn$16()));
    }
  });
  ctr$.CTRBlockCipher = class CTRBlockCipher extends stream_cipher_as_block_cipher.StreamCipherAsBlockCipher {};
  (ctr$.CTRBlockCipher.new = function(blockSize, underlyingCipher) {
    ctr$.CTRBlockCipher.__proto__.new.call(this, blockSize, underlyingCipher);
    ;
  }).prototype = ctr$.CTRBlockCipher.prototype;
  dart.addTypeTests(ctr$.CTRBlockCipher);
  dart.setLibraryUri(ctr$.CTRBlockCipher, "package:pointycastle/block/modes/ctr.dart");
  dart.defineLazy(ctr$.CTRBlockCipher, {
    /*ctr$.CTRBlockCipher.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.BlockCipher), "/CTR", dart.fn((_, match) => dart.fn(() => {
        let underlying = api.BlockCipher.new(match.group(1));
        return new ctr$.CTRBlockCipher.new(underlying.blockSize, new ctr.CTRStreamCipher.new(underlying));
      }, VoidToCTRBlockCipher()), StringAndMatchToFn$17()));
    }
  });
  const _IV$1 = dart.privateName(cfb, "_IV");
  const _cfbV = dart.privateName(cfb, "_cfbV");
  const _cfbOutV = dart.privateName(cfb, "_cfbOutV");
  const _encrypting$0 = dart.privateName(cfb, "_encrypting");
  const _underlyingCipher$3 = dart.privateName(cfb, "_underlyingCipher");
  const _encryptBlock$0 = dart.privateName(cfb, "_encryptBlock");
  const _decryptBlock$0 = dart.privateName(cfb, "_decryptBlock");
  const blockSize$1 = dart.privateName(cfb, "CFBBlockCipher.blockSize");
  cfb.CFBBlockCipher = class CFBBlockCipher extends base_block_cipher.BaseBlockCipher {
    get blockSize() {
      return this[blockSize$1];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    get algorithmName() {
      return dart.str(this[_underlyingCipher$3].algorithmName) + "/CFB-" + dart.str(dart.notNull(this.blockSize) * 8);
    }
    reset() {
      this[_cfbV][$setRange](0, this[_IV$1][$length], this[_IV$1]);
      this[_underlyingCipher$3].reset();
    }
    init(encrypting, params) {
      this[_encrypting$0] = encrypting;
      if (ParametersWithIVOfCipherParameters().is(params)) {
        let ivParam = params;
        let iv = ivParam.iv;
        if (dart.notNull(iv[$length]) < dart.notNull(this[_IV$1][$length])) {
          let offset = dart.notNull(this[_IV$1][$length]) - dart.notNull(iv[$length]);
          this[_IV$1][$fillRange](0, offset, 0);
          this[_IV$1][$setRange](offset, this[_IV$1][$length], iv);
        } else {
          this[_IV$1][$setRange](0, this[_IV$1][$length], iv);
        }
        this.reset();
        if (ivParam.parameters != null) {
          this[_underlyingCipher$3].init(true, ivParam.parameters);
        }
      } else {
        this.reset();
        this[_underlyingCipher$3].init(true, params);
      }
    }
    processBlock(inp, inpOff, out, outOff) {
      return dart.test(this[_encrypting$0]) ? this[_encryptBlock$0](inp, inpOff, out, outOff) : this[_decryptBlock$0](inp, inpOff, out, outOff);
    }
    [_encryptBlock$0](inp, inpOff, out, outOff) {
      if (dart.notNull(inpOff) + dart.notNull(this.blockSize) > dart.notNull(inp[$length])) {
        dart.throw(new core.ArgumentError.new("Input buffer too short"));
      }
      if (dart.notNull(outOff) + dart.notNull(this.blockSize) > dart.notNull(out[$length])) {
        dart.throw(new core.ArgumentError.new("Output buffer too short"));
      }
      this[_underlyingCipher$3].processBlock(this[_cfbV], 0, this[_cfbOutV], 0);
      for (let i = 0; i < dart.notNull(this.blockSize); i = i + 1) {
        out[$_set](dart.notNull(outOff) + i, (dart.notNull(this[_cfbOutV][$_get](i)) ^ dart.notNull(inp[$_get](dart.notNull(inpOff) + i))) >>> 0);
      }
      let offset = dart.notNull(this[_cfbV][$length]) - dart.notNull(this.blockSize);
      this[_cfbV][$setRange](0, offset, this[_cfbV][$sublist](this.blockSize));
      this[_cfbV][$setRange](offset, this[_cfbV][$length], out[$sublist](outOff));
      return this.blockSize;
    }
    [_decryptBlock$0](inp, inpOff, out, outOff) {
      if (dart.notNull(inpOff) + dart.notNull(this.blockSize) > dart.notNull(inp[$length])) {
        dart.throw(new core.ArgumentError.new("Input buffer too short"));
      }
      if (dart.notNull(outOff) + dart.notNull(this.blockSize) > dart.notNull(out[$length])) {
        dart.throw(new core.ArgumentError.new("Output buffer too short"));
      }
      this[_underlyingCipher$3].processBlock(this[_cfbV], 0, this[_cfbOutV], 0);
      let offset = dart.notNull(this[_cfbV][$length]) - dart.notNull(this.blockSize);
      this[_cfbV][$setRange](0, offset, this[_cfbV][$sublist](this.blockSize));
      this[_cfbV][$setRange](offset, this[_cfbV][$length], inp[$sublist](inpOff));
      for (let i = 0; i < dart.notNull(this.blockSize); i = i + 1) {
        out[$_set](dart.notNull(outOff) + i, (dart.notNull(this[_cfbOutV][$_get](i)) ^ dart.notNull(inp[$_get](dart.notNull(inpOff) + i))) >>> 0);
      }
      return this.blockSize;
    }
  };
  (cfb.CFBBlockCipher.new = function(_underlyingCipher, blockSize) {
    this[_IV$1] = null;
    this[_cfbV] = null;
    this[_cfbOutV] = null;
    this[_encrypting$0] = null;
    this[_underlyingCipher$3] = _underlyingCipher;
    this[blockSize$1] = blockSize;
    this[_IV$1] = _native_typed_data.NativeUint8List.new(this[_underlyingCipher$3].blockSize);
    this[_cfbV] = _native_typed_data.NativeUint8List.new(this[_underlyingCipher$3].blockSize);
    this[_cfbOutV] = _native_typed_data.NativeUint8List.new(this[_underlyingCipher$3].blockSize);
  }).prototype = cfb.CFBBlockCipher.prototype;
  dart.addTypeTests(cfb.CFBBlockCipher);
  dart.setMethodSignature(cfb.CFBBlockCipher, () => ({
    __proto__: dart.getMethods(cfb.CFBBlockCipher.__proto__),
    reset: dart.fnType(dart.void, []),
    init: dart.fnType(dart.void, [core.bool, api.CipherParameters]),
    processBlock: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int]),
    [_encryptBlock$0]: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int]),
    [_decryptBlock$0]: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int])
  }));
  dart.setGetterSignature(cfb.CFBBlockCipher, () => ({
    __proto__: dart.getGetters(cfb.CFBBlockCipher.__proto__),
    algorithmName: core.String
  }));
  dart.setLibraryUri(cfb.CFBBlockCipher, "package:pointycastle/block/modes/cfb.dart");
  dart.setFieldSignature(cfb.CFBBlockCipher, () => ({
    __proto__: dart.getFields(cfb.CFBBlockCipher.__proto__),
    blockSize: dart.finalFieldType(core.int),
    [_underlyingCipher$3]: dart.finalFieldType(api.BlockCipher),
    [_IV$1]: dart.fieldType(typed_data.Uint8List),
    [_cfbV]: dart.fieldType(typed_data.Uint8List),
    [_cfbOutV]: dart.fieldType(typed_data.Uint8List),
    [_encrypting$0]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(cfb.CFBBlockCipher, {
    /*cfb.CFBBlockCipher.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.regex(dart.wrapType(api.BlockCipher), "^(.+)/CFB-([0-9]+)$", dart.fn((_, match) => dart.fn(() => {
        let underlying = api.BlockCipher.new(match.group(1));
        let blockSizeInBits = core.int.parse(match.group(2));
        if (blockSizeInBits[$modulo](8) !== 0) {
          dart.throw(new api.RegistryFactoryException.invalid("Bad CFB block size: " + dart.str(blockSizeInBits) + " (must be a multiple of 8)"));
        }
        return new cfb.CFBBlockCipher.new(underlying, (dart.notNull(blockSizeInBits) / 8)[$truncate]());
      }, VoidToCFBBlockCipher()), StringAndMatchToFn$18()));
    }
  });
  const _random$2 = dart.privateName(oaep, "_random");
  const _forEncryption$1 = dart.privateName(oaep, "_forEncryption");
  const _engine$0 = dart.privateName(oaep, "_engine");
  const _seed$ = dart.privateName(oaep, "_seed");
  const _arraycopy$ = dart.privateName(oaep, "_arraycopy");
  const _encodeBlock$ = dart.privateName(oaep, "_encodeBlock");
  const _decodeBlock$ = dart.privateName(oaep, "_decodeBlock");
  const _maskGeneratorFunction1 = dart.privateName(oaep, "_maskGeneratorFunction1");
  const _ItoOSP = dart.privateName(oaep, "_ItoOSP");
  const hash = dart.privateName(oaep, "OAEPEncoding.hash");
  const mgf1Hash = dart.privateName(oaep, "OAEPEncoding.mgf1Hash");
  const defHash = dart.privateName(oaep, "OAEPEncoding.defHash");
  oaep.OAEPEncoding = class OAEPEncoding extends base_asymmetric_block_cipher.BaseAsymmetricBlockCipher {
    get hash() {
      return this[hash];
    }
    set hash(value) {
      this[hash] = value;
    }
    get mgf1Hash() {
      return this[mgf1Hash];
    }
    set mgf1Hash(value) {
      this[mgf1Hash] = value;
    }
    get defHash() {
      return this[defHash];
    }
    set defHash(value) {
      this[defHash] = value;
    }
    get algorithmName() {
      return dart.str(this[_engine$0].algorithmName) + "/OAEP";
    }
    reset() {
    }
    [_seed$]() {
      let random = math.Random.secure();
      let seeds = JSArrayOfint().of([]);
      for (let i = 0; i < 32; i = i + 1) {
        seeds[$add](random.nextInt(255));
      }
      return _native_typed_data.NativeUint8List.fromList(seeds);
    }
    [_arraycopy$](src, srcPos, dest, destPos, length) {
      dest[$setRange](destPos, dart.notNull(destPos) + dart.notNull(length), src[$sublist](srcPos, dart.notNull(srcPos) + dart.notNull(length)));
      return dest;
    }
    init(forEncryption, params) {
      let akparams = null;
      this.mgf1Hash = this.hash;
      if (ParametersWithRandomOfCipherParameters().is(params)) {
        let paramswr = params;
        this[_random$2] = paramswr.random;
        akparams = AsymmetricKeyParameterOfAsymmetricKey()._check(paramswr.parameters);
      } else {
        this[_random$2] = new fortuna_random.FortunaRandom.new();
        this[_random$2].seed(new api.KeyParameter.new(this[_seed$]()));
        akparams = AsymmetricKeyParameterOfAsymmetricKey()._check(params);
      }
      this[_engine$0].init(forEncryption, akparams);
      this[_forEncryption$1] = forEncryption;
    }
    get inputBlockSize() {
      let baseBlockSize = this[_engine$0].inputBlockSize;
      if (dart.test(this[_forEncryption$1])) {
        return dart.notNull(baseBlockSize) - 1 - 2 * dart.notNull(this.defHash[$length]);
      } else {
        return baseBlockSize;
      }
    }
    get outputBlockSize() {
      let baseBlockSize = this[_engine$0].outputBlockSize;
      if (dart.test(this[_forEncryption$1])) {
        return baseBlockSize;
      } else {
        return dart.notNull(baseBlockSize) - 1 - 2 * dart.notNull(this.defHash[$length]);
      }
    }
    processBlock(inp, inpOff, len, out, outOff) {
      if (dart.test(this[_forEncryption$1])) {
        return this[_encodeBlock$](inp, inpOff, len, out, outOff);
      } else {
        return this[_decodeBlock$](inp, inpOff, len, out, outOff);
      }
    }
    [_encodeBlock$](inp, inpOff, inpLen, out, outOff) {
      let t6, t5, t6$, t5$;
      if (dart.notNull(inpLen) > dart.notNull(this.inputBlockSize)) {
        dart.throw(new core.ArgumentError.new("Input data too large"));
      }
      let block = _native_typed_data.NativeUint8List.new(dart.notNull(this.inputBlockSize) + 1 + 2 * dart.notNull(this.defHash[$length]));
      block = this[_arraycopy$](inp, inpOff, block, dart.notNull(block[$length]) - dart.notNull(inpLen), inpLen);
      block[$_set](dart.notNull(block[$length]) - dart.notNull(inpLen) - 1, 1);
      block = this[_arraycopy$](this.defHash, 0, block, this.defHash[$length], this.defHash[$length]);
      let seed = this[_random$2].nextBytes(this.defHash[$length]);
      let mask = this[_maskGeneratorFunction1](seed, 0, seed[$length], dart.notNull(block[$length]) - dart.notNull(this.defHash[$length]));
      for (let i = this.defHash[$length]; i != block[$length]; i = dart.notNull(i) + 1) {
        t5 = block;
        t6 = i;
        t5[$_set](t6, (dart.notNull(t5[$_get](t6)) ^ dart.notNull(mask[$_get](dart.notNull(i) - dart.notNull(this.defHash[$length])))) >>> 0);
      }
      block = this[_arraycopy$](seed, 0, block, 0, this.defHash[$length]);
      mask = this[_maskGeneratorFunction1](block, this.defHash[$length], dart.notNull(block[$length]) - dart.notNull(this.defHash[$length]), this.defHash[$length]);
      for (let i = 0; i !== this.defHash[$length]; i = i + 1) {
        t5$ = block;
        t6$ = i;
        t5$[$_set](t6$, (dart.notNull(t5$[$_get](t6$)) ^ dart.notNull(mask[$_get](i))) >>> 0);
      }
      return this[_engine$0].processBlock(block, 0, block[$length], out, outOff);
    }
    [_decodeBlock$](inp, inpOff, inpLen, out, outOff) {
      let t6, t5, t6$, t5$;
      let block = _native_typed_data.NativeUint8List.new(this[_engine$0].inputBlockSize);
      let len = this[_engine$0].processBlock(inp, inpOff, inpLen, block, 0);
      block = block[$sublist](0, len);
      let wrongData = dart.notNull(block[$length]) < 2 * dart.notNull(this.defHash[$length]) + 1;
      if (dart.notNull(block[$length]) <= dart.notNull(block[$length])) {
        block = this[_arraycopy$](block, 0, block, dart.notNull(block[$length]) - dart.notNull(block[$length]), block[$length]);
      } else {
        block = this[_arraycopy$](block, 0, block, 0, block[$length]);
        wrongData = true;
      }
      let mask = this[_maskGeneratorFunction1](block, this.defHash[$length], dart.notNull(block[$length]) - dart.notNull(this.defHash[$length]), this.defHash[$length]);
      for (let i = 0; i !== this.defHash[$length]; i = i + 1) {
        t5 = block;
        t6 = i;
        t5[$_set](t6, (dart.notNull(t5[$_get](t6)) ^ dart.notNull(mask[$_get](i))) >>> 0);
      }
      mask = this[_maskGeneratorFunction1](block, 0, this.defHash[$length], dart.notNull(block[$length]) - dart.notNull(this.defHash[$length]));
      for (let i = this.defHash[$length]; i != block[$length]; i = dart.notNull(i) + 1) {
        t5$ = block;
        t6$ = i;
        t5$[$_set](t6$, (dart.notNull(t5$[$_get](t6$)) ^ dart.notNull(mask[$_get](dart.notNull(i) - dart.notNull(this.defHash[$length])))) >>> 0);
      }
      let defHashWrong = false;
      for (let i = 0; i !== this.defHash[$length]; i = i + 1) {
        if (this.defHash[$_get](i) != block[$_get](dart.notNull(this.defHash[$length]) + i)) {
          defHashWrong = true;
        }
      }
      let start = block[$length];
      for (let index = 2 * dart.notNull(this.defHash[$length]); index !== block[$length]; index = index + 1) {
        if (!!(block[$_get](index) !== 0 & start == block[$length])) {
          start = index;
        }
      }
      let dataStartWrong = !!(dart.notNull(start) > dart.notNull(block[$length]) - 1 | block[$_get](start) !== 1);
      start = dart.notNull(start) + 1;
      if (!!(!!(defHashWrong | wrongData) | dataStartWrong)) {
        block[$fillRange](0, block[$length], 0);
        dart.throw(new core.ArgumentError.new("data wrong"));
      }
      let output = _native_typed_data.NativeUint8List.new(dart.notNull(block[$length]) - dart.notNull(start));
      output = this[_arraycopy$](block, start, output, 0, output[$length]);
      let result = _native_typed_data.NativeUint8List.new(dart.notNull(block[$length]) - dart.notNull(start));
      let rlen = dart.notNull(block[$length]) - dart.notNull(start);
      out[$setRange](0, rlen, block[$sublist](start));
      return rlen;
    }
    [_ItoOSP](i, sp) {
      sp[$_set](0, i[$rightShift](24));
      sp[$_set](1, i[$rightShift](16));
      sp[$_set](2, i[$rightShift](8));
      sp[$_set](3, i[$rightShift](0));
      return sp;
    }
    [_maskGeneratorFunction1](Z, zOff, zLen, length) {
      let mask = _native_typed_data.NativeUint8List.new(length);
      let hashBuf = _native_typed_data.NativeUint8List.new(this.mgf1Hash.digestSize);
      let C = _native_typed_data.NativeUint8List.new(4);
      let counter = 0;
      this.mgf1Hash.reset();
      while (counter < (dart.notNull(length) / dart.notNull(hashBuf[$length]))[$floor]()) {
        this[_ItoOSP](counter, C);
        this.mgf1Hash.update(Z, zOff, zLen);
        this.mgf1Hash.update(C, 0, C[$length]);
        this.mgf1Hash.doFinal(hashBuf, 0);
        mask = this[_arraycopy$](hashBuf, 0, mask, counter * dart.notNull(hashBuf[$length]), hashBuf[$length]);
        counter = counter + 1;
      }
      if (counter * dart.notNull(hashBuf[$length]) < dart.notNull(length)) {
        this[_ItoOSP](counter, C);
        this.mgf1Hash.update(Z, zOff, zLen);
        this.mgf1Hash.update(C, 0, C[$length]);
        this.mgf1Hash.doFinal(hashBuf, 0);
        mask = this[_arraycopy$](hashBuf, 0, mask, counter * dart.notNull(hashBuf[$length]), dart.notNull(mask[$length]) - counter * dart.notNull(hashBuf[$length]));
      }
      return mask;
    }
  };
  (oaep.OAEPEncoding.new = function(_engine) {
    this[hash] = new sha1.SHA1Digest.new();
    this[mgf1Hash] = null;
    this[defHash] = _native_typed_data.NativeUint8List.new(new sha1.SHA1Digest.new().digestSize);
    this[_random$2] = null;
    this[_forEncryption$1] = null;
    this[_engine$0] = _engine;
    new sha1.SHA1Digest.new().doFinal(this.defHash, 0);
  }).prototype = oaep.OAEPEncoding.prototype;
  dart.addTypeTests(oaep.OAEPEncoding);
  dart.setMethodSignature(oaep.OAEPEncoding, () => ({
    __proto__: dart.getMethods(oaep.OAEPEncoding.__proto__),
    reset: dart.fnType(dart.void, []),
    [_seed$]: dart.fnType(typed_data.Uint8List, []),
    [_arraycopy$]: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List, core.int, typed_data.Uint8List, core.int, core.int]),
    init: dart.fnType(dart.void, [core.bool, api.CipherParameters]),
    processBlock: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int]),
    [_encodeBlock$]: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int]),
    [_decodeBlock$]: dart.fnType(core.int, [typed_data.Uint8List, core.int, core.int, typed_data.Uint8List, core.int]),
    [_ItoOSP]: dart.fnType(typed_data.Uint8List, [core.int, typed_data.Uint8List]),
    [_maskGeneratorFunction1]: dart.fnType(typed_data.Uint8List, [typed_data.Uint8List, core.int, core.int, core.int])
  }));
  dart.setGetterSignature(oaep.OAEPEncoding, () => ({
    __proto__: dart.getGetters(oaep.OAEPEncoding.__proto__),
    algorithmName: core.String,
    inputBlockSize: core.int,
    outputBlockSize: core.int
  }));
  dart.setLibraryUri(oaep.OAEPEncoding, "package:pointycastle/asymmetric/oaep.dart");
  dart.setFieldSignature(oaep.OAEPEncoding, () => ({
    __proto__: dart.getFields(oaep.OAEPEncoding.__proto__),
    hash: dart.fieldType(api.Digest),
    mgf1Hash: dart.fieldType(api.Digest),
    defHash: dart.fieldType(typed_data.Uint8List),
    [_engine$0]: dart.finalFieldType(api.AsymmetricBlockCipher),
    [_random$2]: dart.fieldType(api.SecureRandom),
    [_forEncryption$1]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(oaep.OAEPEncoding, {
    /*oaep.OAEPEncoding.FACTORY_CONFIG*/get FACTORY_CONFIG() {
      return new registry.DynamicFactoryConfig.suffix(dart.wrapType(api.AsymmetricBlockCipher), "/OAEP", dart.fn((_, match) => dart.fn(() => {
        let underlyingCipher = api.AsymmetricBlockCipher.new(match.group(1));
        return new oaep.OAEPEncoding.new(underlyingCipher);
      }, VoidToOAEPEncoding()), StringAndMatchToFn$19()));
    }
  });
  dart.trackLibraries("packages/pointycastle/adapters/stream_cipher_as_block_cipher", {
    "package:pointycastle/src/impl/long_sha2_family_digest.dart": long_sha2_family_digest,
    "package:pointycastle/src/impl/base_digest.dart": base_digest,
    "package:pointycastle/api.dart": api,
    "package:pointycastle/src/registry/registry.dart": registry,
    "package:pointycastle/src/registry/registration.dart": registration,
    "package:pointycastle/stream/sic.dart": sic,
    "package:pointycastle/src/impl/base_stream_cipher.dart": base_stream_cipher,
    "package:pointycastle/stream/salsa20.dart": salsa20,
    "package:pointycastle/stream/ctr.dart": ctr,
    "package:pointycastle/signers/rsa_signer.dart": rsa_signer,
    "package:pointycastle/asymmetric/rsa.dart": rsa,
    "package:pointycastle/src/impl/base_asymmetric_block_cipher.dart": base_asymmetric_block_cipher,
    "package:pointycastle/asymmetric/api.dart": api$,
    "package:pointycastle/asymmetric/pkcs1.dart": pkcs1,
    "package:pointycastle/random/fortuna_random.dart": fortuna_random,
    "package:pointycastle/random/auto_seed_block_ctr_random.dart": auto_seed_block_ctr_random,
    "package:pointycastle/random/block_ctr_random.dart": block_ctr_random,
    "package:pointycastle/src/impl/secure_random_base.dart": secure_random_base,
    "package:pointycastle/block/aes_fast.dart": aes_fast,
    "package:pointycastle/src/impl/base_block_cipher.dart": base_block_cipher,
    "package:pointycastle/signers/ecdsa_signer.dart": ecdsa_signer,
    "package:pointycastle/ecc/api.dart": api$0,
    "package:pointycastle/paddings/iso7816d4.dart": iso7816d4,
    "package:pointycastle/src/impl/base_padding.dart": base_padding,
    "package:pointycastle/paddings/pkcs7.dart": pkcs7,
    "package:pointycastle/padded_block_cipher/padded_block_cipher_impl.dart": padded_block_cipher_impl,
    "package:pointycastle/macs/cbc_block_cipher_mac.dart": cbc_block_cipher_mac,
    "package:pointycastle/block/modes/cbc.dart": cbc,
    "package:pointycastle/src/impl/base_mac.dart": base_mac,
    "package:pointycastle/macs/cmac.dart": cmac,
    "package:pointycastle/macs/hmac.dart": hmac,
    "package:pointycastle/key_generators/rsa_key_generator.dart": rsa_key_generator,
    "package:pointycastle/key_generators/api.dart": api$1,
    "package:pointycastle/key_generators/ec_key_generator.dart": ec_key_generator,
    "package:pointycastle/key_derivators/scrypt.dart": scrypt,
    "package:pointycastle/src/impl/base_key_derivator.dart": base_key_derivator,
    "package:pointycastle/key_derivators/pbkdf2.dart": pbkdf2$,
    "package:pointycastle/key_derivators/api.dart": api$2,
    "package:pointycastle/digests/sha256.dart": sha256,
    "package:pointycastle/src/impl/md4_family_digest.dart": md4_family_digest,
    "package:pointycastle/ecc/curves/secp521r1.dart": secp521r1,
    "package:pointycastle/src/ec_standard_curve_constructor.dart": ec_standard_curve_constructor,
    "package:pointycastle/ecc/ecc_fp.dart": ecc_fp,
    "package:pointycastle/ecc/ecc_base.dart": ecc_base,
    "package:pointycastle/ecc/curves/secp384r1.dart": secp384r1,
    "package:pointycastle/ecc/curves/secp256r1.dart": secp256r1,
    "package:pointycastle/ecc/curves/secp256k1.dart": secp256k1,
    "package:pointycastle/ecc/curves/secp224r1.dart": secp224r1,
    "package:pointycastle/ecc/curves/secp224k1.dart": secp224k1,
    "package:pointycastle/ecc/curves/secp192r1.dart": secp192r1,
    "package:pointycastle/ecc/curves/secp192k1.dart": secp192k1,
    "package:pointycastle/ecc/curves/secp160r2.dart": secp160r2,
    "package:pointycastle/ecc/curves/secp160r1.dart": secp160r1,
    "package:pointycastle/ecc/curves/secp160k1.dart": secp160k1,
    "package:pointycastle/ecc/curves/secp128r2.dart": secp128r2,
    "package:pointycastle/ecc/curves/secp128r1.dart": secp128r1,
    "package:pointycastle/ecc/curves/secp112r2.dart": secp112r2,
    "package:pointycastle/ecc/curves/secp112r1.dart": secp112r1,
    "package:pointycastle/ecc/curves/prime256v1.dart": prime256v1,
    "package:pointycastle/ecc/curves/prime239v3.dart": prime239v3,
    "package:pointycastle/ecc/curves/prime239v2.dart": prime239v2,
    "package:pointycastle/ecc/curves/prime239v1.dart": prime239v1,
    "package:pointycastle/ecc/curves/prime192v3.dart": prime192v3,
    "package:pointycastle/ecc/curves/prime192v2.dart": prime192v2,
    "package:pointycastle/ecc/curves/prime192v1.dart": prime192v1,
    "package:pointycastle/ecc/curves/gostr3410_2001_cryptopro_xchb.dart": gostr3410_2001_cryptopro_xchb,
    "package:pointycastle/ecc/curves/gostr3410_2001_cryptopro_xcha.dart": gostr3410_2001_cryptopro_xcha,
    "package:pointycastle/ecc/curves/gostr3410_2001_cryptopro_c.dart": gostr3410_2001_cryptopro_c,
    "package:pointycastle/ecc/curves/gostr3410_2001_cryptopro_b.dart": gostr3410_2001_cryptopro_b,
    "package:pointycastle/ecc/curves/gostr3410_2001_cryptopro_a.dart": gostr3410_2001_cryptopro_a,
    "package:pointycastle/ecc/curves/brainpoolp512t1.dart": brainpoolp512t1,
    "package:pointycastle/ecc/curves/brainpoolp512r1.dart": brainpoolp512r1,
    "package:pointycastle/ecc/curves/brainpoolp384t1.dart": brainpoolp384t1,
    "package:pointycastle/ecc/curves/brainpoolp384r1.dart": brainpoolp384r1,
    "package:pointycastle/ecc/curves/brainpoolp320t1.dart": brainpoolp320t1,
    "package:pointycastle/ecc/curves/brainpoolp320r1.dart": brainpoolp320r1,
    "package:pointycastle/ecc/curves/brainpoolp256t1.dart": brainpoolp256t1,
    "package:pointycastle/ecc/curves/brainpoolp256r1.dart": brainpoolp256r1,
    "package:pointycastle/ecc/curves/brainpoolp224t1.dart": brainpoolp224t1,
    "package:pointycastle/ecc/curves/brainpoolp224r1.dart": brainpoolp224r1,
    "package:pointycastle/ecc/curves/brainpoolp192t1.dart": brainpoolp192t1,
    "package:pointycastle/ecc/curves/brainpoolp192r1.dart": brainpoolp192r1,
    "package:pointycastle/ecc/curves/brainpoolp160t1.dart": brainpoolp160t1,
    "package:pointycastle/ecc/curves/brainpoolp160r1.dart": brainpoolp160r1,
    "package:pointycastle/digests/whirlpool.dart": whirlpool,
    "package:pointycastle/digests/tiger.dart": tiger,
    "package:pointycastle/digests/sha512t.dart": sha512t,
    "package:pointycastle/digests/sha512.dart": sha512,
    "package:pointycastle/digests/sha384.dart": sha384,
    "package:pointycastle/digests/sha3.dart": sha3,
    "package:pointycastle/digests/sha224.dart": sha224,
    "package:pointycastle/digests/sha1.dart": sha1,
    "package:pointycastle/digests/ripemd320.dart": ripemd320,
    "package:pointycastle/digests/ripemd256.dart": ripemd256,
    "package:pointycastle/digests/ripemd160.dart": ripemd160,
    "package:pointycastle/digests/ripemd128.dart": ripemd128,
    "package:pointycastle/digests/md5.dart": md5,
    "package:pointycastle/digests/md4.dart": md4,
    "package:pointycastle/digests/md2.dart": md2,
    "package:pointycastle/digests/blake2b.dart": blake2b,
    "package:pointycastle/block/modes/sic.dart": sic$,
    "package:pointycastle/adapters/stream_cipher_as_block_cipher.dart": stream_cipher_as_block_cipher,
    "package:pointycastle/block/modes/ofb.dart": ofb,
    "package:pointycastle/block/modes/gctr.dart": gctr,
    "package:pointycastle/block/modes/ecb.dart": ecb,
    "package:pointycastle/block/modes/ctr.dart": ctr$,
    "package:pointycastle/block/modes/cfb.dart": cfb,
    "package:pointycastle/asymmetric/oaep.dart": oaep
  }, {
    "package:pointycastle/api.dart": ["src/api/algorithm.dart", "src/api/asymmetric_block_cipher.dart", "src/api/asymmetric_key.dart", "src/api/asymmetric_key_pair.dart", "src/api/asymmetric_key_parameter.dart", "src/api/block_cipher.dart", "src/api/cipher_parameters.dart", "src/api/digest.dart", "src/api/key_derivator.dart", "src/api/key_generator.dart", "src/api/key_generator_parameters.dart", "src/api/key_parameter.dart", "src/api/mac.dart", "src/api/padded_block_cipher.dart", "src/api/padded_block_cipher_parameters.dart", "src/api/padding.dart", "src/api/parameters_with_iv.dart", "src/api/parameters_with_random.dart", "src/api/private_key.dart", "src/api/private_key_parameter.dart", "src/api/public_key.dart", "src/api/public_key_parameter.dart", "src/api/registry_factory_exception.dart", "src/api/secure_random.dart", "src/api/signature.dart", "src/api/signer.dart", "src/api/stream_cipher.dart"]
  // Exports:
  return {
    src__impl__long_sha2_family_digest: long_sha2_family_digest,
    src__impl__base_digest: base_digest,
    api: api,
    src__registry__registry: registry,
    src__registry__registration: registration,
    stream__sic: sic,
    src__impl__base_stream_cipher: base_stream_cipher,
    stream__salsa20: salsa20,
    stream__ctr: ctr,
    signers__rsa_signer: rsa_signer,
    asymmetric__rsa: rsa,
    src__impl__base_asymmetric_block_cipher: base_asymmetric_block_cipher,
    asymmetric__api: api$,
    asymmetric__pkcs1: pkcs1,
    random__fortuna_random: fortuna_random,
    random__auto_seed_block_ctr_random: auto_seed_block_ctr_random,
    random__block_ctr_random: block_ctr_random,
    src__impl__secure_random_base: secure_random_base,
    block__aes_fast: aes_fast,
    src__impl__base_block_cipher: base_block_cipher,
    signers__ecdsa_signer: ecdsa_signer,
    ecc__api: api$0,
    paddings__iso7816d4: iso7816d4,
    src__impl__base_padding: base_padding,
    paddings__pkcs7: pkcs7,
    padded_block_cipher__padded_block_cipher_impl: padded_block_cipher_impl,
    macs__cbc_block_cipher_mac: cbc_block_cipher_mac,
    block__modes__cbc: cbc,
    src__impl__base_mac: base_mac,
    macs__cmac: cmac,
    macs__hmac: hmac,
    key_generators__rsa_key_generator: rsa_key_generator,
    key_generators__api: api$1,
    key_generators__ec_key_generator: ec_key_generator,
    key_derivators__scrypt: scrypt,
    src__impl__base_key_derivator: base_key_derivator,
    key_derivators__pbkdf2: pbkdf2$,
    key_derivators__api: api$2,
    digests__sha256: sha256,
    src__impl__md4_family_digest: md4_family_digest,
    ecc__curves__secp521r1: secp521r1,
    src__ec_standard_curve_constructor: ec_standard_curve_constructor,
    ecc__ecc_fp: ecc_fp,
    ecc__ecc_base: ecc_base,
    ecc__curves__secp384r1: secp384r1,
    ecc__curves__secp256r1: secp256r1,
    ecc__curves__secp256k1: secp256k1,
    ecc__curves__secp224r1: secp224r1,
    ecc__curves__secp224k1: secp224k1,
    ecc__curves__secp192r1: secp192r1,
    ecc__curves__secp192k1: secp192k1,
    ecc__curves__secp160r2: secp160r2,
    ecc__curves__secp160r1: secp160r1,
    ecc__curves__secp160k1: secp160k1,
    ecc__curves__secp128r2: secp128r2,
    ecc__curves__secp128r1: secp128r1,
    ecc__curves__secp112r2: secp112r2,
    ecc__curves__secp112r1: secp112r1,
    ecc__curves__prime256v1: prime256v1,
    ecc__curves__prime239v3: prime239v3,
    ecc__curves__prime239v2: prime239v2,
    ecc__curves__prime239v1: prime239v1,
    ecc__curves__prime192v3: prime192v3,
    ecc__curves__prime192v2: prime192v2,
    ecc__curves__prime192v1: prime192v1,
    ecc__curves__gostr3410_2001_cryptopro_xchb: gostr3410_2001_cryptopro_xchb,
    ecc__curves__gostr3410_2001_cryptopro_xcha: gostr3410_2001_cryptopro_xcha,
    ecc__curves__gostr3410_2001_cryptopro_c: gostr3410_2001_cryptopro_c,
    ecc__curves__gostr3410_2001_cryptopro_b: gostr3410_2001_cryptopro_b,
    ecc__curves__gostr3410_2001_cryptopro_a: gostr3410_2001_cryptopro_a,
    ecc__curves__brainpoolp512t1: brainpoolp512t1,
    ecc__curves__brainpoolp512r1: brainpoolp512r1,
    ecc__curves__brainpoolp384t1: brainpoolp384t1,
    ecc__curves__brainpoolp384r1: brainpoolp384r1,
    ecc__curves__brainpoolp320t1: brainpoolp320t1,
    ecc__curves__brainpoolp320r1: brainpoolp320r1,
    ecc__curves__brainpoolp256t1: brainpoolp256t1,
    ecc__curves__brainpoolp256r1: brainpoolp256r1,
    ecc__curves__brainpoolp224t1: brainpoolp224t1,
    ecc__curves__brainpoolp224r1: brainpoolp224r1,
    ecc__curves__brainpoolp192t1: brainpoolp192t1,
    ecc__curves__brainpoolp192r1: brainpoolp192r1,
    ecc__curves__brainpoolp160t1: brainpoolp160t1,
    ecc__curves__brainpoolp160r1: brainpoolp160r1,
    digests__whirlpool: whirlpool,
    digests__tiger: tiger,
    digests__sha512t: sha512t,
    digests__sha512: sha512,
    digests__sha384: sha384,
    digests__sha3: sha3,
    digests__sha224: sha224,
    digests__sha1: sha1,
    digests__ripemd320: ripemd320,
    digests__ripemd256: ripemd256,
    digests__ripemd160: ripemd160,
    digests__ripemd128: ripemd128,
    digests__md5: md5,
    digests__md4: md4,
    digests__md2: md2,
    digests__blake2b: blake2b,
    block__modes__sic: sic$,
    adapters__stream_cipher_as_block_cipher: stream_cipher_as_block_cipher,
    block__modes__ofb: ofb,
    block__modes__gctr: gctr,
    block__modes__ecb: ecb,
    block__modes__ctr: ctr$,
    block__modes__cfb: cfb,
    asymmetric__oaep: oaep
  };
});

//# sourceMappingURL=stream_cipher_as_block_cipher.ddc.js.map