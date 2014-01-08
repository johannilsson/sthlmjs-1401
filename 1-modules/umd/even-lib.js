(function(_global) {
  "use strict";

  var shim = {};
  if (typeof(exports) === 'undefined') {
    if(typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      // we are in amd.
      shim.exports = {};
      define(function() {
        return shim.exports;
      });
    } else {
      // we are in a browser, define its namespaces in global
      shim.exports = typeof(window) !== 'undefined' ? window : _global;
    }
  }
  else {
    // we are in commonjs, define its namespaces in exports
    shim.exports = exports;
  }

  (function(exports) {


var isEven = function(i) {
  return i % 2 === 0;
};


    if (typeof(exports) !== 'undefined') {
      exports.isEven = isEven;
    }

  })(shim.exports);
})(this);


