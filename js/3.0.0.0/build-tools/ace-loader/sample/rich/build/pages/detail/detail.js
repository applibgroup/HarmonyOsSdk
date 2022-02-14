/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../lib/json.js!../../lib/style.js!./pages/detail/detail.css":
/*!**********************************************************************!*\
  !*** ../../lib/json.js!../../lib/style.js!./pages/detail/detail.css ***!
  \**********************************************************************/
/***/ ((module) => {

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
/*!*************************************************************************!*\
  !*** ../../lib/json.js!../../lib/template.js!./pages/detail/detail.hml ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {
  "attr": {
    "debugLine": "pages/detail/detail:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/detail/detail:2",
        "className": "text-div"
      },
      "type": "div",
      "classList": [
        "text-div"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/detail/detail:3",
            "className": "title",
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
      "attr": {
        "debugLine": "pages/detail/detail:5",
        "className": "button-div"
      },
      "type": "div",
      "classList": [
        "button-div"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/detail/detail:6",
            "type": "button",
            "value": "Go back",
            "className": "button"
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

/***/ "../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\ohos\\sdk\\.temp\\js\\3.0.0.0\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\ohos\\sdk\\.temp\\js\\3.0.0.0\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../lib/resource-reference-script.js!./pages/detail/detail.js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\project\ohos\sdk\.temp\js\3.0.0.0\install\unzip\js\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\project\ohos\sdk\.temp\js\3.0.0.0\install\unzip\js\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!../../lib/resource-reference-script.js!./pages/detail/detail.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

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
      uri: 'pages/index/index'
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./pages/detail/detail.hml?entry ***!
  \***************************************/
var $app_template$ = __webpack_require__(/*! !!../../../../lib/json.js!../../../../lib/template.js!./detail.hml */ "../../lib/json.js!../../lib/template.js!./pages/detail/detail.hml")
var $app_style$ = __webpack_require__(/*! !!../../../../lib/json.js!../../../../lib/style.js!./detail.css */ "../../lib/json.js!../../lib/style.js!./pages/detail/detail.css")
var $app_script$ = __webpack_require__(/*! !!../../../../lib/script.js!../../../../node_modules/babel-loader?presets[]=D:\project\ohos\sdk\.temp\js\3.0.0.0\install\unzip\js\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\project\ohos\sdk\.temp\js\3.0.0.0\install\unzip\js\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!../../../../lib/resource-reference-script.js!./detail.js */ "../../lib/script.js!../../node_modules/babel-loader/lib/index.js?presets[]=D:\\project\\ohos\\sdk\\.temp\\js\\3.0.0.0\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\project\\ohos\\sdk\\.temp\\js\\3.0.0.0\\install\\unzip\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../lib/resource-reference-script.js!./pages/detail/detail.js")

$app_define$('@app-component/detail', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/detail',undefined,undefined)
})();

/******/ })()
;
//# sourceMappingURL=detail.js.map