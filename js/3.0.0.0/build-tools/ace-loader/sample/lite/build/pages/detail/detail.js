/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/detail/detail.hml?entry":
/*!***************************************!*\
  !*** ./pages/detail/detail.hml?entry ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !!../../../../lib/json.js!../../../../lib/template.js!./detail.hml */ "../../lib/json.js!../../lib/template.js!./pages/detail/detail.hml")
var $app_style$ = __webpack_require__(/*! !!../../../../lib/json.js!../../../../lib/style.js!./detail.css */ "../../lib/json.js!../../lib/style.js!./pages/detail/detail.css")
var $app_script$ = __webpack_require__(/*! !!../../../../lib/script.js!../../../../node_modules/babel-loader?presets[]=D:\project\ohos\sdk\.temp\js\3.0.0.0\install\unzip\js\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\project\ohos\sdk\.temp\js\3.0.0.0\install\unzip\js\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!../../../../lib/resource-reference-script.js!./detail.js */ "../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\ohos\\sdk\\.temp\\js\\3.0.0.0\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\ohos\\sdk\\.temp\\js\\3.0.0.0\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../lib/resource-reference-script.js!./pages/detail/detail.js")
var options=$app_script$
 if ($app_script$.__esModule) {

      options = $app_script$.default;
 }
options.styleSheet=$app_style$
options.render=$app_template$;
module.exports=new ViewModel(options);

/***/ }),

/***/ "../../lib/json.js!../../lib/style.js!./pages/detail/detail.css":
/*!**********************************************************************!*\
  !*** ../../lib/json.js!../../lib/style.js!./pages/detail/detail.css ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = {"classSelectors":{"commonStyle":{"left":95,"top":95,"width":200,"height":200,"marginTop":10,"marginRight":10,"marginBottom":10,"marginLeft":10,"paddingTop":30,"paddingRight":30,"paddingBottom":30,"paddingLeft":30,"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderRadius":10,"backgroundColor":16711680}}}

/***/ }),

/***/ "../../lib/json.js!../../lib/template.js!./pages/detail/detail.hml":
/*!*************************************************************************!*\
  !*** ../../lib/json.js!../../lib/template.js!./pages/detail/detail.hml ***!
  \*************************************************************************/
/***/ (function(module) {

module.exports = function (vm) { var _vm = vm || this; return _c('stack', {'staticStyle' : {'width' : 444,'height' : 444,'marginTop' : 20,'marginRight' : 20,'marginBottom' : 20,'marginLeft' : 20,'borderTopWidth' : 5,'borderRightWidth' : 5,'borderBottomWidth' : 5,'borderLeftWidth' : 5,'borderTopColor' : 65280,'borderRightColor' : 65280,'borderBottomColor' : 65280,'borderLeftColor' : 65280,'borderRadius' : 10,'opacity' : 0.5}, } , [_c('text', {'attrs' : {'value' : "common style"},'staticStyle' : {'left' : 140,'top' : 50,'width' : 300,'height' : 40}, } ),_c('div', {'staticClass' : ["commonStyle"]} ),_c('image', {'attrs' : {'src' : "common/nextRow.bin"},'staticStyle' : {'left' : 390,'top' : 227,'width' : 30,'height' : 42}, 'onBubbleEvents' : {'click' : _vm.nextPage}} )] ) }

/***/ }),

/***/ "../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\ohos\\sdk\\.temp\\js\\3.0.0.0\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\ohos\\sdk\\.temp\\js\\3.0.0.0\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../lib/resource-reference-script.js!./pages/detail/detail.js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\project\ohos\sdk\.temp\js\3.0.0.0\install\unzip\js\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\project\ohos\sdk\.temp\js\3.0.0.0\install\unzip\js\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!../../lib/resource-reference-script.js!./pages/detail/detail.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var router = requireModule('@system.router');

var _default = {
  data: {},
  nextPage: function nextPage() {
    router.replace({
      uri: 'pages/chart/index'
    });
  },
  onInit: function onInit() {
    console.log('onInit called...');
  },
  onReady: function onReady() {
    console.log('onReady called...');
  },
  onShow: function onShow() {
    console.log('onShow called...');
  },
  onDestroy: function onDestroy() {
    console.log('onDestroy called...');
  }
};
exports.default = _default;

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./pages/detail/detail.hml?entry");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=detail.js.map