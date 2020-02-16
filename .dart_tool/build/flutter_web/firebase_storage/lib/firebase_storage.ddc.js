define(['dart_sdk', 'packages/flutter/src/gestures/arena', 'packages/firebase_core/firebase_core'], function(dart_sdk, packages__flutter__src__gestures__arena, packages__firebase_core__firebase_core) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const io = dart_sdk.io;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const firebase_app = packages__firebase_core__firebase_core.src__firebase_app;
  const firebase_storage = Object.create(dart.library);
  const $_get = dartx._get;
  const $cast = dartx.cast;
  const $split = dartx.split;
  const $addAll = dartx.addAll;
  const $isEmpty = dartx.isEmpty;
  const $every = dartx.every;
  const $last = dartx.last;
  const $removeLast = dartx.removeLast;
  const $join = dartx.join;
  const $startsWith = dartx.startsWith;
  const $substring = dartx.substring;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let MethodCallToFutureOfNull = () => (MethodCallToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [message_codec.MethodCall])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let StreamControllerOfMethodCall = () => (StreamControllerOfMethodCall = dart.constFn(async.StreamController$(message_codec.MethodCall)))();
  let CompleterOfFileDownloadTaskSnapshot = () => (CompleterOfFileDownloadTaskSnapshot = dart.constFn(async.Completer$(firebase_storage.FileDownloadTaskSnapshot)))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let CompleterOfStorageTaskSnapshot = () => (CompleterOfStorageTaskSnapshot = dart.constFn(async.Completer$(firebase_storage.StorageTaskSnapshot)))();
  let StreamControllerOfStorageTaskEvent = () => (StreamControllerOfStorageTaskEvent = dart.constFn(async.StreamController$(firebase_storage.StorageTaskEvent)))();
  let MethodCallTobool = () => (MethodCallTobool = dart.constFn(dart.fnType(core.bool, [message_codec.MethodCall])))();
  let MethodCallToStorageTaskEvent = () => (MethodCallToStorageTaskEvent = dart.constFn(dart.fnType(firebase_storage.StorageTaskEvent, [message_codec.MethodCall])))();
  let StorageTaskEventTobool = () => (StorageTaskEventTobool = dart.constFn(dart.fnType(core.bool, [firebase_storage.StorageTaskEvent])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: firebase_storage.StorageTaskEventType.prototype,
        [_name$]: "StorageTaskEventType.resume",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: firebase_storage.StorageTaskEventType.prototype,
        [_name$]: "StorageTaskEventType.progress",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: firebase_storage.StorageTaskEventType.prototype,
        [_name$]: "StorageTaskEventType.pause",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: firebase_storage.StorageTaskEventType.prototype,
        [_name$]: "StorageTaskEventType.success",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: firebase_storage.StorageTaskEventType.prototype,
        [_name$]: "StorageTaskEventType.failure",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], firebase_storage.StorageTaskEventType);
    },
    get C6() {
      return C6 = dart.constList([], core.String);
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
        [MethodChannel_name]: "plugins.flutter.io/firebase_storage"
      });
    }
  });
  firebase_storage.StorageError = class StorageError extends core.Object {};
  (firebase_storage.StorageError.new = function() {
    ;
  }).prototype = firebase_storage.StorageError.prototype;
  dart.addTypeTests(firebase_storage.StorageError);
  dart.setLibraryUri(firebase_storage.StorageError, "package:firebase_storage/firebase_storage.dart");
  dart.defineLazy(firebase_storage.StorageError, {
    /*firebase_storage.StorageError.unknown*/get unknown() {
      return -13000;
    },
    /*firebase_storage.StorageError.objectNotFound*/get objectNotFound() {
      return -13010;
    },
    /*firebase_storage.StorageError.bucketNotFound*/get bucketNotFound() {
      return -13011;
    },
    /*firebase_storage.StorageError.projectNotFound*/get projectNotFound() {
      return -13012;
    },
    /*firebase_storage.StorageError.quotaExceeded*/get quotaExceeded() {
      return -13013;
    },
    /*firebase_storage.StorageError.notAuthenticated*/get notAuthenticated() {
      return -13020;
    },
    /*firebase_storage.StorageError.notAuthorized*/get notAuthorized() {
      return -13021;
    },
    /*firebase_storage.StorageError.retryLimitExceeded*/get retryLimitExceeded() {
      return -13030;
    },
    /*firebase_storage.StorageError.invalidChecksum*/get invalidChecksum() {
      return -13031;
    },
    /*firebase_storage.StorageError.canceled*/get canceled() {
      return -13040;
    }
  });
  const _name$ = dart.privateName(firebase_storage, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  firebase_storage.StorageTaskEventType = class StorageTaskEventType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (firebase_storage.StorageTaskEventType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = firebase_storage.StorageTaskEventType.prototype;
  dart.addTypeTests(firebase_storage.StorageTaskEventType);
  dart.setLibraryUri(firebase_storage.StorageTaskEventType, "package:firebase_storage/firebase_storage.dart");
  dart.setFieldSignature(firebase_storage.StorageTaskEventType, () => ({
    __proto__: dart.getFields(firebase_storage.StorageTaskEventType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(firebase_storage.StorageTaskEventType, ['toString']);
  firebase_storage.StorageTaskEventType.resume = C0 || CT.C0;
  firebase_storage.StorageTaskEventType.progress = C1 || CT.C1;
  firebase_storage.StorageTaskEventType.pause = C2 || CT.C2;
  firebase_storage.StorageTaskEventType.success = C3 || CT.C3;
  firebase_storage.StorageTaskEventType.failure = C4 || CT.C4;
  firebase_storage.StorageTaskEventType.values = C5 || CT.C5;
  const type$ = dart.privateName(firebase_storage, "StorageTaskEvent.type");
  const snapshot = dart.privateName(firebase_storage, "StorageTaskEvent.snapshot");
  firebase_storage.StorageTaskEvent = class StorageTaskEvent extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get snapshot() {
      return this[snapshot];
    }
    set snapshot(value) {
      super.snapshot = value;
    }
  };
  (firebase_storage.StorageTaskEvent.__ = function(type, ref, data) {
    this[type$] = firebase_storage.StorageTaskEventType.values[$_get](type);
    this[snapshot] = new firebase_storage.StorageTaskSnapshot.__(ref, data[$cast](core.String, dart.dynamic));
    ;
  }).prototype = firebase_storage.StorageTaskEvent.prototype;
  dart.addTypeTests(firebase_storage.StorageTaskEvent);
  dart.setLibraryUri(firebase_storage.StorageTaskEvent, "package:firebase_storage/firebase_storage.dart");
  dart.setFieldSignature(firebase_storage.StorageTaskEvent, () => ({
    __proto__: dart.getFields(firebase_storage.StorageTaskEvent.__proto__),
    type: dart.finalFieldType(firebase_storage.StorageTaskEventType),
    snapshot: dart.finalFieldType(firebase_storage.StorageTaskSnapshot)
  }));
  const ref$ = dart.privateName(firebase_storage, "StorageTaskSnapshot.ref");
  const error = dart.privateName(firebase_storage, "StorageTaskSnapshot.error");
  const bytesTransferred = dart.privateName(firebase_storage, "StorageTaskSnapshot.bytesTransferred");
  const totalByteCount = dart.privateName(firebase_storage, "StorageTaskSnapshot.totalByteCount");
  const uploadSessionUri = dart.privateName(firebase_storage, "StorageTaskSnapshot.uploadSessionUri");
  const storageMetadata = dart.privateName(firebase_storage, "StorageTaskSnapshot.storageMetadata");
  firebase_storage.StorageTaskSnapshot = class StorageTaskSnapshot extends core.Object {
    get ref() {
      return this[ref$];
    }
    set ref(value) {
      super.ref = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      super.error = value;
    }
    get bytesTransferred() {
      return this[bytesTransferred];
    }
    set bytesTransferred(value) {
      super.bytesTransferred = value;
    }
    get totalByteCount() {
      return this[totalByteCount];
    }
    set totalByteCount(value) {
      super.totalByteCount = value;
    }
    get uploadSessionUri() {
      return this[uploadSessionUri];
    }
    set uploadSessionUri(value) {
      super.uploadSessionUri = value;
    }
    get storageMetadata() {
      return this[storageMetadata];
    }
    set storageMetadata(value) {
      super.storageMetadata = value;
    }
  };
  (firebase_storage.StorageTaskSnapshot.__ = function(ref, m) {
    this[ref$] = ref;
    this[error] = core.int._check(m[$_get]("error"));
    this[bytesTransferred] = core.int._check(m[$_get]("bytesTransferred"));
    this[totalByteCount] = core.int._check(m[$_get]("totalByteCount"));
    this[uploadSessionUri] = m[$_get]("uploadSessionUri") != null ? core.Uri.parse(core.String._check(m[$_get]("uploadSessionUri"))) : null;
    this[storageMetadata] = m[$_get]("storageMetadata") != null ? new firebase_storage.StorageMetadata._fromMap(MapOfString$dynamic()._check(dart.dgsend(m[$_get]("storageMetadata"), [core.String, dart.dynamic], 'cast', []))) : null;
    ;
  }).prototype = firebase_storage.StorageTaskSnapshot.prototype;
  dart.addTypeTests(firebase_storage.StorageTaskSnapshot);
  dart.setLibraryUri(firebase_storage.StorageTaskSnapshot, "package:firebase_storage/firebase_storage.dart");
  dart.setFieldSignature(firebase_storage.StorageTaskSnapshot, () => ({
    __proto__: dart.getFields(firebase_storage.StorageTaskSnapshot.__proto__),
    ref: dart.finalFieldType(firebase_storage.StorageReference),
    error: dart.finalFieldType(core.int),
    bytesTransferred: dart.finalFieldType(core.int),
    totalByteCount: dart.finalFieldType(core.int),
    uploadSessionUri: dart.finalFieldType(core.Uri),
    storageMetadata: dart.finalFieldType(firebase_storage.StorageMetadata)
  }));
  const _methodStream = dart.privateName(firebase_storage, "_methodStream");
  let C6;
  const app$ = dart.privateName(firebase_storage, "FirebaseStorage.app");
  const storageBucket$ = dart.privateName(firebase_storage, "FirebaseStorage.storageBucket");
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C9;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C8;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C7;
  firebase_storage.FirebaseStorage = class FirebaseStorage extends core.Object {
    get app() {
      return this[app$];
    }
    set app(value) {
      super.app = value;
    }
    get storageBucket() {
      return this[storageBucket$];
    }
    set storageBucket(value) {
      super.storageBucket = value;
    }
    static get instance() {
      return firebase_storage.FirebaseStorage._instance;
    }
    get [_methodStream]() {
      return firebase_storage.FirebaseStorage._methodStreamController.stream;
    }
    ref() {
      return new firebase_storage.StorageReference.__(C6 || CT.C6, this);
    }
    getMaxDownloadRetryTimeMillis() {
      return async.async(core.int, (function* getMaxDownloadRetryTimeMillis() {
        let t0;
        return yield firebase_storage.FirebaseStorage.channel.invokeMethod(core.int, "FirebaseStorage#getMaxDownloadRetryTime", new (IdentityMapOfString$dynamic()).from(["app", (t0 = this.app, t0 == null ? null : t0.name), "bucket", this.storageBucket]));
      }).bind(this));
    }
    getMaxUploadRetryTimeMillis() {
      return async.async(core.int, (function* getMaxUploadRetryTimeMillis() {
        let t0;
        return yield firebase_storage.FirebaseStorage.channel.invokeMethod(core.int, "FirebaseStorage#getMaxUploadRetryTime", new (IdentityMapOfString$dynamic()).from(["app", (t0 = this.app, t0 == null ? null : t0.name), "bucket", this.storageBucket]));
      }).bind(this));
    }
    getMaxOperationRetryTimeMillis() {
      return async.async(core.int, (function* getMaxOperationRetryTimeMillis() {
        let t0;
        return yield firebase_storage.FirebaseStorage.channel.invokeMethod(core.int, "FirebaseStorage#getMaxOperationRetryTime", new (IdentityMapOfString$dynamic()).from(["app", (t0 = this.app, t0 == null ? null : t0.name), "bucket", this.storageBucket]));
      }).bind(this));
    }
    setMaxDownloadRetryTimeMillis(time) {
      let t0;
      return firebase_storage.FirebaseStorage.channel.invokeMethod(dart.void, "FirebaseStorage#setMaxDownloadRetryTime", new (IdentityMapOfString$dynamic()).from(["app", (t0 = this.app, t0 == null ? null : t0.name), "bucket", this.storageBucket, "time", time]));
    }
    setMaxUploadRetryTimeMillis(time) {
      let t0;
      return firebase_storage.FirebaseStorage.channel.invokeMethod(dart.void, "FirebaseStorage#setMaxUploadRetryTime", new (IdentityMapOfString$dynamic()).from(["app", (t0 = this.app, t0 == null ? null : t0.name), "bucket", this.storageBucket, "time", time]));
    }
    setMaxOperationRetryTimeMillis(time) {
      let t0;
      return firebase_storage.FirebaseStorage.channel.invokeMethod(dart.void, "FirebaseStorage#setMaxOperationRetryTime", new (IdentityMapOfString$dynamic()).from(["app", (t0 = this.app, t0 == null ? null : t0.name), "bucket", this.storageBucket, "time", time]));
    }
    getReferenceFromUrl(fullUrl) {
      return async.async(firebase_storage.StorageReference, (function* getReferenceFromUrl() {
        let t0;
        let path = (yield firebase_storage.FirebaseStorage.channel.invokeMethod(core.String, "FirebaseStorage#getReferenceFromUrl", new (IdentityMapOfString$dynamic()).from(["app", (t0 = this.app, t0 == null ? null : t0.name), "bucket", this.storageBucket, "fullUrl", fullUrl])));
        if (path != null) {
          return this.ref().child(path);
        } else {
          return null;
        }
      }).bind(this));
    }
  };
  (firebase_storage.FirebaseStorage.new = function(opts) {
    let app = opts && 'app' in opts ? opts.app : null;
    let storageBucket = opts && 'storageBucket' in opts ? opts.storageBucket : null;
    this[app$] = app;
    this[storageBucket$] = storageBucket;
    if (dart.test(firebase_storage.FirebaseStorage._initialized)) return;
    firebase_storage.FirebaseStorage.channel.setMethodCallHandler(dart.fn(call => async.async(core.Null, function*() {
      firebase_storage.FirebaseStorage._methodStreamController.add(call);
    }), MethodCallToFutureOfNull()));
    firebase_storage.FirebaseStorage._initialized = true;
  }).prototype = firebase_storage.FirebaseStorage.prototype;
  dart.addTypeTests(firebase_storage.FirebaseStorage);
  dart.setMethodSignature(firebase_storage.FirebaseStorage, () => ({
    __proto__: dart.getMethods(firebase_storage.FirebaseStorage.__proto__),
    ref: dart.fnType(firebase_storage.StorageReference, []),
    getMaxDownloadRetryTimeMillis: dart.fnType(async.Future$(core.int), []),
    getMaxUploadRetryTimeMillis: dart.fnType(async.Future$(core.int), []),
    getMaxOperationRetryTimeMillis: dart.fnType(async.Future$(core.int), []),
    setMaxDownloadRetryTimeMillis: dart.fnType(async.Future$(dart.void), [core.int]),
    setMaxUploadRetryTimeMillis: dart.fnType(async.Future$(dart.void), [core.int]),
    setMaxOperationRetryTimeMillis: dart.fnType(async.Future$(dart.void), [core.int]),
    getReferenceFromUrl: dart.fnType(async.Future$(firebase_storage.StorageReference), [core.String])
  }));
  dart.setGetterSignature(firebase_storage.FirebaseStorage, () => ({
    __proto__: dart.getGetters(firebase_storage.FirebaseStorage.__proto__),
    [_methodStream]: async.Stream$(message_codec.MethodCall)
  }));
  dart.setLibraryUri(firebase_storage.FirebaseStorage, "package:firebase_storage/firebase_storage.dart");
  dart.setFieldSignature(firebase_storage.FirebaseStorage, () => ({
    __proto__: dart.getFields(firebase_storage.FirebaseStorage.__proto__),
    app: dart.finalFieldType(firebase_app.FirebaseApp),
    storageBucket: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(firebase_storage.FirebaseStorage, {
    /*firebase_storage.FirebaseStorage.channel*/get channel() {
      return C7 || CT.C7;
    },
    /*firebase_storage.FirebaseStorage._initialized*/get _initialized() {
      return false;
    },
    set _initialized(_) {},
    /*firebase_storage.FirebaseStorage._instance*/get _instance() {
      return new firebase_storage.FirebaseStorage.new();
    },
    set _instance(_) {},
    /*firebase_storage.FirebaseStorage._methodStreamController*/get _methodStreamController() {
      return StreamControllerOfMethodCall().broadcast();
    }
  });
  const _completer = dart.privateName(firebase_storage, "_completer");
  const _firebaseStorage$ = dart.privateName(firebase_storage, "_firebaseStorage");
  const _path$ = dart.privateName(firebase_storage, "_path");
  const _file$ = dart.privateName(firebase_storage, "_file");
  const _start = dart.privateName(firebase_storage, "_start");
  firebase_storage.StorageFileDownloadTask = class StorageFileDownloadTask extends core.Object {
    [_start]() {
      return async.async(dart.void, (function* _start() {
        let t0;
        try {
          let totalByteCount = (yield firebase_storage.FirebaseStorage.channel.invokeMethod(core.int, "StorageReference#writeToFile", new (IdentityMapOfString$dynamic()).from(["app", (t0 = this[_firebaseStorage$].app, t0 == null ? null : t0.name), "bucket", this[_firebaseStorage$].storageBucket, "filePath", this[_file$].absolute.path, "path", this[_path$]])));
          this[_completer].complete(new firebase_storage.FileDownloadTaskSnapshot.new({totalByteCount: totalByteCount}));
        } catch (e$) {
          let e = dart.getThrown(e$);
          this[_completer].completeError(e);
        }
      }).bind(this));
    }
    get future() {
      return this[_completer].future;
    }
  };
  (firebase_storage.StorageFileDownloadTask.__ = function(_firebaseStorage, _path, _file) {
    this[_completer] = CompleterOfFileDownloadTaskSnapshot().new();
    this[_firebaseStorage$] = _firebaseStorage;
    this[_path$] = _path;
    this[_file$] = _file;
    ;
  }).prototype = firebase_storage.StorageFileDownloadTask.prototype;
  dart.addTypeTests(firebase_storage.StorageFileDownloadTask);
  dart.setMethodSignature(firebase_storage.StorageFileDownloadTask, () => ({
    __proto__: dart.getMethods(firebase_storage.StorageFileDownloadTask.__proto__),
    [_start]: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(firebase_storage.StorageFileDownloadTask, () => ({
    __proto__: dart.getGetters(firebase_storage.StorageFileDownloadTask.__proto__),
    future: async.Future$(firebase_storage.FileDownloadTaskSnapshot)
  }));
  dart.setLibraryUri(firebase_storage.StorageFileDownloadTask, "package:firebase_storage/firebase_storage.dart");
  dart.setFieldSignature(firebase_storage.StorageFileDownloadTask, () => ({
    __proto__: dart.getFields(firebase_storage.StorageFileDownloadTask.__proto__),
    [_firebaseStorage$]: dart.finalFieldType(firebase_storage.FirebaseStorage),
    [_path$]: dart.finalFieldType(core.String),
    [_file$]: dart.finalFieldType(io.File),
    [_completer]: dart.fieldType(async.Completer$(firebase_storage.FileDownloadTaskSnapshot))
  }));
  const totalByteCount$ = dart.privateName(firebase_storage, "FileDownloadTaskSnapshot.totalByteCount");
  firebase_storage.FileDownloadTaskSnapshot = class FileDownloadTaskSnapshot extends core.Object {
    get totalByteCount() {
      return this[totalByteCount$];
    }
    set totalByteCount(value) {
      super.totalByteCount = value;
    }
  };
  (firebase_storage.FileDownloadTaskSnapshot.new = function(opts) {
    let totalByteCount = opts && 'totalByteCount' in opts ? opts.totalByteCount : null;
    this[totalByteCount$] = totalByteCount;
    ;
  }).prototype = firebase_storage.FileDownloadTaskSnapshot.prototype;
  dart.addTypeTests(firebase_storage.FileDownloadTaskSnapshot);
  dart.setLibraryUri(firebase_storage.FileDownloadTaskSnapshot, "package:firebase_storage/firebase_storage.dart");
  dart.setFieldSignature(firebase_storage.FileDownloadTaskSnapshot, () => ({
    __proto__: dart.getFields(firebase_storage.FileDownloadTaskSnapshot.__proto__),
    totalByteCount: dart.finalFieldType(core.int)
  }));
  const bucket = dart.privateName(firebase_storage, "StorageMetadata.bucket");
  const generation = dart.privateName(firebase_storage, "StorageMetadata.generation");
  const metadataGeneration = dart.privateName(firebase_storage, "StorageMetadata.metadataGeneration");
  const path = dart.privateName(firebase_storage, "StorageMetadata.path");
  const name = dart.privateName(firebase_storage, "StorageMetadata.name");
  const sizeBytes = dart.privateName(firebase_storage, "StorageMetadata.sizeBytes");
  const creationTimeMillis = dart.privateName(firebase_storage, "StorageMetadata.creationTimeMillis");
  const updatedTimeMillis = dart.privateName(firebase_storage, "StorageMetadata.updatedTimeMillis");
  const md5Hash = dart.privateName(firebase_storage, "StorageMetadata.md5Hash");
  const cacheControl$ = dart.privateName(firebase_storage, "StorageMetadata.cacheControl");
  const contentDisposition$ = dart.privateName(firebase_storage, "StorageMetadata.contentDisposition");
  const contentEncoding$ = dart.privateName(firebase_storage, "StorageMetadata.contentEncoding");
  const contentLanguage$ = dart.privateName(firebase_storage, "StorageMetadata.contentLanguage");
  const contentType$ = dart.privateName(firebase_storage, "StorageMetadata.contentType");
  const customMetadata$ = dart.privateName(firebase_storage, "StorageMetadata.customMetadata");
  firebase_storage.StorageMetadata = class StorageMetadata extends core.Object {
    get bucket() {
      return this[bucket];
    }
    set bucket(value) {
      super.bucket = value;
    }
    get generation() {
      return this[generation];
    }
    set generation(value) {
      super.generation = value;
    }
    get metadataGeneration() {
      return this[metadataGeneration];
    }
    set metadataGeneration(value) {
      super.metadataGeneration = value;
    }
    get path() {
      return this[path];
    }
    set path(value) {
      super.path = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      super.name = value;
    }
    get sizeBytes() {
      return this[sizeBytes];
    }
    set sizeBytes(value) {
      super.sizeBytes = value;
    }
    get creationTimeMillis() {
      return this[creationTimeMillis];
    }
    set creationTimeMillis(value) {
      super.creationTimeMillis = value;
    }
    get updatedTimeMillis() {
      return this[updatedTimeMillis];
    }
    set updatedTimeMillis(value) {
      super.updatedTimeMillis = value;
    }
    get md5Hash() {
      return this[md5Hash];
    }
    set md5Hash(value) {
      super.md5Hash = value;
    }
    get cacheControl() {
      return this[cacheControl$];
    }
    set cacheControl(value) {
      super.cacheControl = value;
    }
    get contentDisposition() {
      return this[contentDisposition$];
    }
    set contentDisposition(value) {
      super.contentDisposition = value;
    }
    get contentEncoding() {
      return this[contentEncoding$];
    }
    set contentEncoding(value) {
      super.contentEncoding = value;
    }
    get contentLanguage() {
      return this[contentLanguage$];
    }
    set contentLanguage(value) {
      super.contentLanguage = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get customMetadata() {
      return this[customMetadata$];
    }
    set customMetadata(value) {
      super.customMetadata = value;
    }
  };
  (firebase_storage.StorageMetadata.new = function(opts) {
    let cacheControl = opts && 'cacheControl' in opts ? opts.cacheControl : null;
    let contentDisposition = opts && 'contentDisposition' in opts ? opts.contentDisposition : null;
    let contentEncoding = opts && 'contentEncoding' in opts ? opts.contentEncoding : null;
    let contentLanguage = opts && 'contentLanguage' in opts ? opts.contentLanguage : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    let customMetadata = opts && 'customMetadata' in opts ? opts.customMetadata : null;
    this[cacheControl$] = cacheControl;
    this[contentDisposition$] = contentDisposition;
    this[contentEncoding$] = contentEncoding;
    this[contentLanguage$] = contentLanguage;
    this[contentType$] = contentType;
    this[bucket] = null;
    this[generation] = null;
    this[metadataGeneration] = null;
    this[path] = null;
    this[name] = null;
    this[sizeBytes] = null;
    this[creationTimeMillis] = null;
    this[updatedTimeMillis] = null;
    this[md5Hash] = null;
    this[customMetadata$] = customMetadata == null ? null : MapOfString$String().unmodifiable(customMetadata);
    ;
  }).prototype = firebase_storage.StorageMetadata.prototype;
  (firebase_storage.StorageMetadata._fromMap = function(map) {
    this[bucket] = core.String._check(map[$_get]("bucket"));
    this[generation] = core.String._check(map[$_get]("generation"));
    this[metadataGeneration] = core.String._check(map[$_get]("metadataGeneration"));
    this[path] = core.String._check(map[$_get]("path"));
    this[name] = core.String._check(map[$_get]("name"));
    this[sizeBytes] = core.int._check(map[$_get]("sizeBytes"));
    this[creationTimeMillis] = core.int._check(map[$_get]("creationTimeMillis"));
    this[updatedTimeMillis] = core.int._check(map[$_get]("updatedTimeMillis"));
    this[md5Hash] = core.String._check(map[$_get]("md5Hash"));
    this[cacheControl$] = core.String._check(map[$_get]("cacheControl"));
    this[contentDisposition$] = core.String._check(map[$_get]("contentDisposition"));
    this[contentLanguage$] = core.String._check(map[$_get]("contentLanguage"));
    this[contentType$] = core.String._check(map[$_get]("contentType"));
    this[contentEncoding$] = core.String._check(map[$_get]("contentEncoding"));
    this[customMetadata$] = map[$_get]("customMetadata") == null ? null : MapOfString$String().unmodifiable(core.Map._check(dart.dgsend(map[$_get]("customMetadata"), [core.String, core.String], 'cast', [])));
    ;
  }).prototype = firebase_storage.StorageMetadata.prototype;
  dart.addTypeTests(firebase_storage.StorageMetadata);
  dart.setLibraryUri(firebase_storage.StorageMetadata, "package:firebase_storage/firebase_storage.dart");
  dart.setFieldSignature(firebase_storage.StorageMetadata, () => ({
    __proto__: dart.getFields(firebase_storage.StorageMetadata.__proto__),
    bucket: dart.finalFieldType(core.String),
    generation: dart.finalFieldType(core.String),
    metadataGeneration: dart.finalFieldType(core.String),
    path: dart.finalFieldType(core.String),
    name: dart.finalFieldType(core.String),
    sizeBytes: dart.finalFieldType(core.int),
    creationTimeMillis: dart.finalFieldType(core.int),
    updatedTimeMillis: dart.finalFieldType(core.int),
    md5Hash: dart.finalFieldType(core.String),
    cacheControl: dart.finalFieldType(core.String),
    contentDisposition: dart.finalFieldType(core.String),
    contentEncoding: dart.finalFieldType(core.String),
    contentLanguage: dart.finalFieldType(core.String),
    contentType: dart.finalFieldType(core.String),
    customMetadata: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  const _pathComponents = dart.privateName(firebase_storage, "_pathComponents");
  const _firebaseStorage$0 = dart.privateName(firebase_storage, "StorageReference._firebaseStorage");
  const _pathComponents$ = dart.privateName(firebase_storage, "StorageReference._pathComponents");
  firebase_storage.StorageReference = class StorageReference extends core.Object {
    get [_firebaseStorage$]() {
      return this[_firebaseStorage$0];
    }
    set [_firebaseStorage$](value) {
      super[_firebaseStorage$] = value;
    }
    get [_pathComponents]() {
      return this[_pathComponents$];
    }
    set [_pathComponents](value) {
      super[_pathComponents] = value;
    }
    child(path) {
      let t1;
      let childPath = (t1 = ListOfString().from(this[_pathComponents]), t1[$addAll](path[$split]("/")), t1);
      return new firebase_storage.StorageReference.__(childPath, this[_firebaseStorage$]);
    }
    getParent() {
      if (dart.test(this[_pathComponents][$isEmpty]) || dart.test(this[_pathComponents][$every](dart.fn(e => e[$isEmpty], StringTobool())))) {
        return null;
      }
      let parentPath = ListOfString().from(this[_pathComponents]);
      while (parentPath[$last][$isEmpty]) {
        parentPath[$removeLast]();
      }
      parentPath[$removeLast]();
      return new firebase_storage.StorageReference.__(parentPath, this[_firebaseStorage$]);
    }
    getRoot() {
      return new firebase_storage.StorageReference.__(JSArrayOfString().of([]), this[_firebaseStorage$]);
    }
    getStorage() {
      return this[_firebaseStorage$];
    }
    put(file, metadata = null) {
      return this.putFile(file, metadata);
    }
    putFile(file, metadata = null) {
      if (!dart.test(file.existsSync())) dart.assertFailed(null, "org-dartlang-app:///packages/firebase_storage/src/storage_reference.dart", 62, 12, "file.existsSync()");
      let task = new firebase_storage._StorageFileUploadTask.__(file, this[_firebaseStorage$], this, metadata);
      task[_start]();
      return task;
    }
    putData(data, metadata = null) {
      let task = new firebase_storage._StorageDataUploadTask.__(data, this[_firebaseStorage$], this, metadata);
      task[_start]();
      return task;
    }
    getBucket() {
      return async.async(core.String, (function* getBucket() {
        let t1;
        return yield firebase_storage.FirebaseStorage.channel.invokeMethod(core.String, "StorageReference#getBucket", new (IdentityMapOfString$String()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "path", this[_pathComponents][$join]("/")]));
      }).bind(this));
    }
    getPath() {
      return async.async(core.String, (function* getPath() {
        let t1;
        let path = (yield firebase_storage.FirebaseStorage.channel.invokeMethod(core.String, "StorageReference#getPath", new (IdentityMapOfString$String()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "path", this[_pathComponents][$join]("/")])));
        if (path[$startsWith]("/")) {
          return path[$substring](1);
        } else {
          return path;
        }
      }).bind(this));
    }
    getName() {
      return async.async(core.String, (function* getName() {
        let t1;
        return yield firebase_storage.FirebaseStorage.channel.invokeMethod(core.String, "StorageReference#getName", new (IdentityMapOfString$String()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "path", this[_pathComponents][$join]("/")]));
      }).bind(this));
    }
    getData(maxSize) {
      return async.async(typed_data.Uint8List, (function* getData() {
        let t1;
        return yield firebase_storage.FirebaseStorage.channel.invokeMethod(typed_data.Uint8List, "StorageReference#getData", new (IdentityMapOfString$dynamic()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "maxSize", maxSize, "path", this[_pathComponents][$join]("/")]));
      }).bind(this));
    }
    writeToFile(file) {
      let task = new firebase_storage.StorageFileDownloadTask.__(this[_firebaseStorage$], this[_pathComponents][$join]("/"), file);
      task[_start]();
      return task;
    }
    getDownloadURL() {
      return async.async(dart.dynamic, (function* getDownloadURL() {
        let t1;
        return yield firebase_storage.FirebaseStorage.channel.invokeMethod(dart.dynamic, "StorageReference#getDownloadUrl", new (IdentityMapOfString$String()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "path", this[_pathComponents][$join]("/")]));
      }).bind(this));
    }
    delete() {
      let t1;
      return firebase_storage.FirebaseStorage.channel.invokeMethod(dart.void, "StorageReference#delete", new (IdentityMapOfString$String()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "path", this[_pathComponents][$join]("/")]));
    }
    getMetadata() {
      return async.async(firebase_storage.StorageMetadata, (function* getMetadata() {
        let t1;
        return new firebase_storage.StorageMetadata._fromMap(yield firebase_storage.FirebaseStorage.channel.invokeMapMethod(core.String, dart.dynamic, "StorageReference#getMetadata", new (IdentityMapOfString$String()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "path", this[_pathComponents][$join]("/")])));
      }).bind(this));
    }
    updateMetadata(metadata) {
      return async.async(firebase_storage.StorageMetadata, (function* updateMetadata() {
        let t1;
        return new firebase_storage.StorageMetadata._fromMap(yield firebase_storage.FirebaseStorage.channel.invokeMapMethod(core.String, dart.dynamic, "StorageReference#updateMetadata", new (IdentityMapOfString$dynamic()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "path", this[_pathComponents][$join]("/"), "metadata", metadata == null ? null : firebase_storage._buildMetadataUploadMap(metadata)])));
      }).bind(this));
    }
    get path() {
      return this[_pathComponents][$join]("/");
    }
  };
  (firebase_storage.StorageReference.__ = function(_pathComponents, _firebaseStorage) {
    this[_pathComponents$] = _pathComponents;
    this[_firebaseStorage$0] = _firebaseStorage;
    ;
  }).prototype = firebase_storage.StorageReference.prototype;
  dart.addTypeTests(firebase_storage.StorageReference);
  dart.setMethodSignature(firebase_storage.StorageReference, () => ({
    __proto__: dart.getMethods(firebase_storage.StorageReference.__proto__),
    child: dart.fnType(firebase_storage.StorageReference, [core.String]),
    getParent: dart.fnType(firebase_storage.StorageReference, []),
    getRoot: dart.fnType(firebase_storage.StorageReference, []),
    getStorage: dart.fnType(firebase_storage.FirebaseStorage, []),
    put: dart.fnType(firebase_storage.StorageUploadTask, [io.File], [firebase_storage.StorageMetadata]),
    putFile: dart.fnType(firebase_storage.StorageUploadTask, [io.File], [firebase_storage.StorageMetadata]),
    putData: dart.fnType(firebase_storage.StorageUploadTask, [typed_data.Uint8List], [firebase_storage.StorageMetadata]),
    getBucket: dart.fnType(async.Future$(core.String), []),
    getPath: dart.fnType(async.Future$(core.String), []),
    getName: dart.fnType(async.Future$(core.String), []),
    getData: dart.fnType(async.Future$(typed_data.Uint8List), [core.int]),
    writeToFile: dart.fnType(firebase_storage.StorageFileDownloadTask, [io.File]),
    getDownloadURL: dart.fnType(async.Future, []),
    delete: dart.fnType(async.Future$(dart.void), []),
    getMetadata: dart.fnType(async.Future$(firebase_storage.StorageMetadata), []),
    updateMetadata: dart.fnType(async.Future$(firebase_storage.StorageMetadata), [firebase_storage.StorageMetadata])
  }));
  dart.setGetterSignature(firebase_storage.StorageReference, () => ({
    __proto__: dart.getGetters(firebase_storage.StorageReference.__proto__),
    path: core.String
  }));
  dart.setLibraryUri(firebase_storage.StorageReference, "package:firebase_storage/firebase_storage.dart");
  dart.setFieldSignature(firebase_storage.StorageReference, () => ({
    __proto__: dart.getFields(firebase_storage.StorageReference.__proto__),
    [_firebaseStorage$]: dart.finalFieldType(firebase_storage.FirebaseStorage),
    [_pathComponents]: dart.finalFieldType(core.List$(core.String))
  }));
  const _handle = dart.privateName(firebase_storage, "_handle");
  const _controller = dart.privateName(firebase_storage, "_controller");
  const _ref$ = dart.privateName(firebase_storage, "_ref");
  const _metadata$ = dart.privateName(firebase_storage, "_metadata");
  const _platformStart = dart.privateName(firebase_storage, "_platformStart");
  const _changeState = dart.privateName(firebase_storage, "_changeState");
  const _resetState = dart.privateName(firebase_storage, "_resetState");
  const isCanceled = dart.privateName(firebase_storage, "StorageUploadTask.isCanceled");
  const isComplete = dart.privateName(firebase_storage, "StorageUploadTask.isComplete");
  const isInProgress = dart.privateName(firebase_storage, "StorageUploadTask.isInProgress");
  const isPaused = dart.privateName(firebase_storage, "StorageUploadTask.isPaused");
  const isSuccessful = dart.privateName(firebase_storage, "StorageUploadTask.isSuccessful");
  const lastSnapshot = dart.privateName(firebase_storage, "StorageUploadTask.lastSnapshot");
  firebase_storage.StorageUploadTask = class StorageUploadTask extends core.Object {
    get isCanceled() {
      return this[isCanceled];
    }
    set isCanceled(value) {
      this[isCanceled] = value;
    }
    get isComplete() {
      return this[isComplete];
    }
    set isComplete(value) {
      this[isComplete] = value;
    }
    get isInProgress() {
      return this[isInProgress];
    }
    set isInProgress(value) {
      this[isInProgress] = value;
    }
    get isPaused() {
      return this[isPaused];
    }
    set isPaused(value) {
      this[isPaused] = value;
    }
    get isSuccessful() {
      return this[isSuccessful];
    }
    set isSuccessful(value) {
      this[isSuccessful] = value;
    }
    get lastSnapshot() {
      return this[lastSnapshot];
    }
    set lastSnapshot(value) {
      this[lastSnapshot] = value;
    }
    get onComplete() {
      return this[_completer].future;
    }
    get events() {
      return this[_controller].stream;
    }
    [_start]() {
      return async.async(firebase_storage.StorageTaskSnapshot, (function* _start() {
        this[_handle] = core.int._check(yield this[_platformStart]());
        let event = (yield this[_firebaseStorage$][_methodStream].where(dart.fn(m => m.method === "StorageTaskEvent" && dart.equals(dart.dsend(m.arguments, '_get', ["handle"]), this[_handle]), MethodCallTobool())).map(firebase_storage.StorageTaskEvent, dart.fn(m => {
          let args = core.Map._check(m.arguments);
          let e = new firebase_storage.StorageTaskEvent.__(core.int._check(args[$_get]("type")), this[_ref$], core.Map._check(args[$_get]("snapshot")));
          this[_changeState](e);
          this.lastSnapshot = e.snapshot;
          this[_controller].add(e);
          if (dart.equals(e.type, firebase_storage.StorageTaskEventType.success) || dart.equals(e.type, firebase_storage.StorageTaskEventType.failure)) {
            this[_completer].complete(e.snapshot);
          }
          return e;
        }, MethodCallToStorageTaskEvent())).firstWhere(dart.fn(e => dart.equals(e.type, firebase_storage.StorageTaskEventType.success) || dart.equals(e.type, firebase_storage.StorageTaskEventType.failure), StorageTaskEventTobool())));
        return event.snapshot;
      }).bind(this));
    }
    [_changeState](event) {
      this[_resetState]();
      switch (event.type) {
        case C1 || CT.C1:
        {
          this.isInProgress = true;
          break;
        }
        case C0 || CT.C0:
        {
          this.isInProgress = true;
          break;
        }
        case C2 || CT.C2:
        {
          this.isPaused = true;
          break;
        }
        case C3 || CT.C3:
        {
          this.isSuccessful = true;
          this.isComplete = true;
          break;
        }
        case C4 || CT.C4:
        {
          this.isComplete = true;
          if (event.snapshot.error === -13040) {
            this.isCanceled = true;
          }
          break;
        }
      }
    }
    [_resetState]() {
      this.isCanceled = false;
      this.isComplete = false;
      this.isInProgress = false;
      this.isPaused = false;
      this.isSuccessful = false;
    }
    pause() {
      let t1;
      return firebase_storage.FirebaseStorage.channel.invokeMethod(dart.void, "UploadTask#pause", new (IdentityMapOfString$dynamic()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "handle", this[_handle]]));
    }
    resume() {
      let t1;
      return firebase_storage.FirebaseStorage.channel.invokeMethod(dart.void, "UploadTask#resume", new (IdentityMapOfString$dynamic()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "handle", this[_handle]]));
    }
    cancel() {
      let t1;
      return firebase_storage.FirebaseStorage.channel.invokeMethod(dart.void, "UploadTask#cancel", new (IdentityMapOfString$dynamic()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "handle", this[_handle]]));
    }
  };
  (firebase_storage.StorageUploadTask.__ = function(_firebaseStorage, _ref, _metadata) {
    this[_handle] = null;
    this[isCanceled] = false;
    this[isComplete] = false;
    this[isInProgress] = true;
    this[isPaused] = false;
    this[isSuccessful] = false;
    this[lastSnapshot] = null;
    this[_completer] = CompleterOfStorageTaskSnapshot().new();
    this[_controller] = StreamControllerOfStorageTaskEvent().broadcast();
    this[_firebaseStorage$] = _firebaseStorage;
    this[_ref$] = _ref;
    this[_metadata$] = _metadata;
    ;
  }).prototype = firebase_storage.StorageUploadTask.prototype;
  dart.addTypeTests(firebase_storage.StorageUploadTask);
  dart.setMethodSignature(firebase_storage.StorageUploadTask, () => ({
    __proto__: dart.getMethods(firebase_storage.StorageUploadTask.__proto__),
    [_start]: dart.fnType(async.Future$(firebase_storage.StorageTaskSnapshot), []),
    [_changeState]: dart.fnType(dart.void, [firebase_storage.StorageTaskEvent]),
    [_resetState]: dart.fnType(dart.void, []),
    pause: dart.fnType(dart.void, []),
    resume: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(firebase_storage.StorageUploadTask, () => ({
    __proto__: dart.getGetters(firebase_storage.StorageUploadTask.__proto__),
    onComplete: async.Future$(firebase_storage.StorageTaskSnapshot),
    events: async.Stream$(firebase_storage.StorageTaskEvent)
  }));
  dart.setLibraryUri(firebase_storage.StorageUploadTask, "package:firebase_storage/firebase_storage.dart");
  dart.setFieldSignature(firebase_storage.StorageUploadTask, () => ({
    __proto__: dart.getFields(firebase_storage.StorageUploadTask.__proto__),
    [_firebaseStorage$]: dart.finalFieldType(firebase_storage.FirebaseStorage),
    [_ref$]: dart.finalFieldType(firebase_storage.StorageReference),
    [_metadata$]: dart.finalFieldType(firebase_storage.StorageMetadata),
    [_handle]: dart.fieldType(core.int),
    isCanceled: dart.fieldType(core.bool),
    isComplete: dart.fieldType(core.bool),
    isInProgress: dart.fieldType(core.bool),
    isPaused: dart.fieldType(core.bool),
    isSuccessful: dart.fieldType(core.bool),
    lastSnapshot: dart.fieldType(firebase_storage.StorageTaskSnapshot),
    [_completer]: dart.fieldType(async.Completer$(firebase_storage.StorageTaskSnapshot)),
    [_controller]: dart.fieldType(async.StreamController$(firebase_storage.StorageTaskEvent))
  }));
  firebase_storage._StorageFileUploadTask = class _StorageFileUploadTask extends firebase_storage.StorageUploadTask {
    [_platformStart]() {
      let t1;
      return firebase_storage.FirebaseStorage.channel.invokeMethod(dart.dynamic, "StorageReference#putFile", new (IdentityMapOfString$dynamic()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "filename", this[_file$].absolute.path, "path", this[_ref$].path, "metadata", this[_metadata$] == null ? null : firebase_storage._buildMetadataUploadMap(this[_metadata$])]));
    }
  };
  (firebase_storage._StorageFileUploadTask.__ = function(_file, firebaseStorage, ref, metadata) {
    this[_file$] = _file;
    firebase_storage._StorageFileUploadTask.__proto__.__.call(this, firebaseStorage, ref, metadata);
    ;
  }).prototype = firebase_storage._StorageFileUploadTask.prototype;
  dart.addTypeTests(firebase_storage._StorageFileUploadTask);
  dart.setMethodSignature(firebase_storage._StorageFileUploadTask, () => ({
    __proto__: dart.getMethods(firebase_storage._StorageFileUploadTask.__proto__),
    [_platformStart]: dart.fnType(async.Future, [])
  }));
  dart.setLibraryUri(firebase_storage._StorageFileUploadTask, "package:firebase_storage/firebase_storage.dart");
  dart.setFieldSignature(firebase_storage._StorageFileUploadTask, () => ({
    __proto__: dart.getFields(firebase_storage._StorageFileUploadTask.__proto__),
    [_file$]: dart.finalFieldType(io.File)
  }));
  const _bytes$ = dart.privateName(firebase_storage, "_bytes");
  firebase_storage._StorageDataUploadTask = class _StorageDataUploadTask extends firebase_storage.StorageUploadTask {
    [_platformStart]() {
      let t1;
      return firebase_storage.FirebaseStorage.channel.invokeMethod(dart.dynamic, "StorageReference#putData", new (IdentityMapOfString$dynamic()).from(["app", (t1 = this[_firebaseStorage$].app, t1 == null ? null : t1.name), "bucket", this[_firebaseStorage$].storageBucket, "data", this[_bytes$], "path", this[_ref$].path, "metadata", this[_metadata$] == null ? null : firebase_storage._buildMetadataUploadMap(this[_metadata$])]));
    }
  };
  (firebase_storage._StorageDataUploadTask.__ = function(_bytes, firebaseStorage, ref, metadata) {
    this[_bytes$] = _bytes;
    firebase_storage._StorageDataUploadTask.__proto__.__.call(this, firebaseStorage, ref, metadata);
    ;
  }).prototype = firebase_storage._StorageDataUploadTask.prototype;
  dart.addTypeTests(firebase_storage._StorageDataUploadTask);
  dart.setMethodSignature(firebase_storage._StorageDataUploadTask, () => ({
    __proto__: dart.getMethods(firebase_storage._StorageDataUploadTask.__proto__),
    [_platformStart]: dart.fnType(async.Future, [])
  }));
  dart.setLibraryUri(firebase_storage._StorageDataUploadTask, "package:firebase_storage/firebase_storage.dart");
  dart.setFieldSignature(firebase_storage._StorageDataUploadTask, () => ({
    __proto__: dart.getFields(firebase_storage._StorageDataUploadTask.__proto__),
    [_bytes$]: dart.finalFieldType(typed_data.Uint8List)
  }));
  firebase_storage._buildMetadataUploadMap = function _buildMetadataUploadMap(metadata) {
    return new (IdentityMapOfString$dynamic()).from(["cacheControl", metadata.cacheControl, "contentDisposition", metadata.contentDisposition, "contentLanguage", metadata.contentLanguage, "contentType", metadata.contentType, "contentEncoding", metadata.contentEncoding, "customMetadata", metadata.customMetadata]);
  };
  dart.trackLibraries("packages/firebase_storage/firebase_storage", {
    "package:firebase_storage/firebase_storage.dart": firebase_storage
  }, {
    "package:firebase_storage/firebase_storage.dart": ["src/error.dart", "src/event.dart", "src/firebase_storage.dart", "src/storage_metadata.dart", "src/storage_reference.dart", "src/upload_task.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/error.dart","src/event.dart","src/firebase_storage.dart","src/storage_metadata.dart","src/storage_reference.dart","src/upload_task.dart"],"names":[],"mappings":"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","file":"firebase_storage.ddc.js"}');
  // Exports:
  return {
    firebase_storage: firebase_storage
  };
});

//# sourceMappingURL=firebase_storage.ddc.js.map
