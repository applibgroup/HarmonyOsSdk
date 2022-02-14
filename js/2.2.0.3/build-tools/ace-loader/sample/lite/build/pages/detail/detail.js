/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/detail/detail.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../lib/json.js!../../lib/style.js!./pages/detail/detail.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/json.js!D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/style.js!./pages/detail/detail.css ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"classSelectors":{"commonStyle":{"left":95,"top":95,"width":200,"height":200,"marginTop":10,"marginRight":10,"marginBottom":10,"marginLeft":10,"paddingTop":30,"paddingRight":30,"paddingBottom":30,"paddingLeft":30,"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderRadius":10,"backgroundColor":16711680}}}

/***/ }),

/***/ "../../lib/json.js!../../lib/template.js!./pages/detail/detail.hml":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/json.js!D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/template.js!./pages/detail/detail.hml ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (vm) { var _vm = vm || this; return _c('stack', {'staticStyle' : {'width' : 444,'height' : 444,'marginTop' : 20,'marginRight' : 20,'marginBottom' : 20,'marginLeft' : 20,'borderTopWidth' : 5,'borderRightWidth' : 5,'borderBottomWidth' : 5,'borderLeftWidth' : 5,'borderTopColor' : 65280,'borderRightColor' : 65280,'borderBottomColor' : 65280,'borderLeftColor' : 65280,'borderRadius' : 10,'opacity' : 0.5}, } , [_c('text', {'attrs' : {'value' : "common style"},'staticStyle' : {'left' : 140,'top' : 50,'width' : 300,'height' : 40}, } ),_c('div', {'staticClass' : ["commonStyle"]} ),_c('image', {'attrs' : {'src' : "common/nextRow.bin"},'staticStyle' : {'left' : 390,'top' : 227,'width' : 30,'height' : 42}, 'onBubbleEvents' : {'click' : _vm.nextPage}} )] ) }

/***/ }),

/***/ "../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.2.0.3\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.2.0.3\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../lib/resource-reference-script.js!./pages/detail/detail.js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/script.js!D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/resource-reference-script.js!./pages/detail/detail.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
exports["default"] = _default;

function requireModule(moduleName) {
  return requireNative(moduleName.slice(1));
}


/***/ }),

/***/ "./pages/detail/detail.hml?entry":
/*!***************************************!*\
  !*** ./pages/detail/detail.hml?entry ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../lib/json.js!../../../../lib/template.js!./detail.hml */ "../../lib/json.js!../../lib/template.js!./pages/detail/detail.hml")
var $app_style$ = __webpack_require__(/*! !../../../../lib/json.js!../../../../lib/style.js!./detail.css */ "../../lib/json.js!../../lib/style.js!./pages/detail/detail.css")
var $app_script$ = __webpack_require__(/*! !../../../../lib/script.js!../../../../node_modules/babel-loader?presets[]=D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../lib/resource-reference-script.js!./detail.js */ "../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.2.0.3\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.2.0.3\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../lib/resource-reference-script.js!./pages/detail/detail.js")
var options=$app_script$
 if ($app_script$.__esModule) {

      options = $app_script$.default;
 }
options.styleSheet=$app_style$
options.render=$app_template$;
module.exports=new ViewModel(options);

/***/ })

/******/ });
//# sourceMappingURL=detail.js.map