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
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** D:/project/ohos/sdk/.temp/js/2.1.1.21/install/unzip/js/build-tools/ace-loader/lib/json.js!D:/project/ohos/sdk/.temp/js/2.1.1.21/install/unzip/js/build-tools/ace-loader/lib/style.js!./pages/detail/detail.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "50px"
  },
  ".button-div": {
    "paddingTop": "50px",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".text-div": {
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".button": {
    "fontSize": "30px"
  }
}

/***/ }),

/***/ "../../lib/json.js!../../lib/template.js!./pages/detail/detail.hml":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** D:/project/ohos/sdk/.temp/js/2.1.1.21/install/unzip/js/build-tools/ace-loader/lib/json.js!D:/project/ohos/sdk/.temp/js/2.1.1.21/install/unzip/js/build-tools/ace-loader/lib/template.js!./pages/detail/detail.hml ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {},
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {},
      "type": "div",
      "classList": [
        "text-div"
      ],
      "children": [
        {
          "attr": {
            "value": "This is the detail page."
          },
          "type": "text",
          "classList": [
            "title"
          ]
        }
      ]
    },
    {
      "attr": {},
      "type": "div",
      "classList": [
        "button-div"
      ],
      "children": [
        {
          "attr": {
            "type": "button",
            "value": "Go back"
          },
          "type": "input",
          "classList": [
            "button"
          ],
          "events": {
            "click": "launch"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.1.1.21\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.1.1.21\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./pages/detail/detail.js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/project/ohos/sdk/.temp/js/2.1.1.21/install/unzip/js/build-tools/ace-loader/lib/script.js!D:/project/ohos/sdk/.temp/js/2.1.1.21/install/unzip/js/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=D:/project/ohos/sdk/.temp/js/2.1.1.21/install/unzip/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/project/ohos/sdk/.temp/js/2.1.1.21/install/unzip/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./pages/detail/detail.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {},
  launch: function launch() {
    _system["default"].push({
      uri: 'pages/index/index'
    });
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./pages/detail/detail.hml?entry":
/*!***************************************!*\
  !*** ./pages/detail/detail.hml?entry ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../lib/json.js!../../../../lib/template.js!./detail.hml */ "../../lib/json.js!../../lib/template.js!./pages/detail/detail.hml")
var $app_style$ = __webpack_require__(/*! !../../../../lib/json.js!../../../../lib/style.js!./detail.css */ "../../lib/json.js!../../lib/style.js!./pages/detail/detail.css")
var $app_script$ = __webpack_require__(/*! !../../../../lib/script.js!../../../../node_modules/babel-loader?presets[]=D:/project/ohos/sdk/.temp/js/2.1.1.21/install/unzip/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/project/ohos/sdk/.temp/js/2.1.1.21/install/unzip/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./detail.js */ "../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.1.1.21\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.1.1.21\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./pages/detail/detail.js")

$app_define$('@app-component/detail', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/detail',undefined,undefined)

/***/ })

/******/ });
//# sourceMappingURL=detail.js.map