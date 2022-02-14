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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../lib/json.js!../../lib/style.js!./pages/index/index.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/json.js!D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/style.js!./pages/index/index.css ***!
  \******************************************************************************************************************************************************************************************************************/
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

/***/ "../../lib/json.js!../../lib/template.js!./pages/index/index.hml":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/json.js!D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/template.js!./pages/index/index.hml ***!
  \*********************************************************************************************************************************************************************************************************************/
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
            "value": "This is the index page."
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
            "value": "Go to the second page"
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

/***/ "../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.2.0.3\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.2.0.3\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../lib/resource-reference-script.js!./pages/index/index.js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/script.js!D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/lib/resource-reference-script.js!./pages/index/index.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault(requireModule("@system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {},
  launch: function launch() {
    _system["default"].push({
      uri: 'pages/detail/detail'
    });
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

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

/***/ "./pages/index/index.hml?entry":
/*!*************************************!*\
  !*** ./pages/index/index.hml?entry ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../lib/json.js!../../../../lib/template.js!./index.hml */ "../../lib/json.js!../../lib/template.js!./pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../lib/json.js!../../../../lib/style.js!./index.css */ "../../lib/json.js!../../lib/style.js!./pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../lib/script.js!../../../../node_modules/babel-loader?presets[]=D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/project/ohos/sdk/.temp/js/2.2.0.3/install/unzip/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../lib/resource-reference-script.js!./index.js */ "../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.2.0.3\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\ohos\\sdk\\.temp\\js\\2.2.0.3\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../lib/resource-reference-script.js!./pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ })

/******/ });
//# sourceMappingURL=index.js.map