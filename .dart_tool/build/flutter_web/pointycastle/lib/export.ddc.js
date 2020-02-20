define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const $export = Object.create(dart.library);
  const impl = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/pointycastle/export", {
    "package:pointycastle/export.dart": $export,
    "package:pointycastle/impl.dart": impl
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"export.ddc.js"}');
  // Exports:
  return {
    $export: $export,
    impl: impl
  };
});

//# sourceMappingURL=export.ddc.js.map
