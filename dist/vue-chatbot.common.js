module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0459":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cb-bot-ui{position:fixed;z-index:1000;bottom:1.5rem;right:1.5rem;display:flex;flex-direction:column;font-size:1rem}.cb-bot-ui *{box-sizing:border-box}.cb-preload-image{position:absolute;top:0;left:0;width:0;height:0;overflow:hidden}.cb-bot-ui--animate .cb-fadeUp-enter-active,.cb-bot-ui--animate .cb-fadeUp-leave-active{opacity:1;transform:translate(0);transition:opacity .15s linear,transform .2s ease-out}.cb-bot-ui--animate .cb-fadeUp-enter,.cb-bot-ui--animate .cb-fadeUp-leave-to{transform:translateY(20px);opacity:0}.cb-bot-ui--animate .cb-scaleUp-enter-active,.cb-bot-ui--animate .cb-scaleUp-leave-active{opacity:1;transform:scale(1);transition:opacity .1s linear,transform .2s ease-out}.cb-bot-ui--animate .cb-scaleUp-enter,.cb-bot-ui--animate .cb-scaleUp-leave-to{transform:scale(0);opacity:0}@keyframes cbJump{0%{transform:translateY(2px)}to{transform:translateY(-1px)}}.cb-msg-bubble__typing-indicator:after,.cb-msg-bubble__typing-indicator:before,.cb-msg-bubble__typing-indicator span{transform:translateY(2px);animation:cbJump .35s ease infinite alternate}.cb-msg-bubble__typing-indicator span{animation-delay:.175s}.cb-msg-bubble__typing-indicator:after{animation-delay:.35s}.cb-bot-bubble{align-self:flex-end}.cb-bubble-btn{display:block;padding:0;outline:0;border:0;box-shadow:none;border-radius:50%;color:#fff;fill:#fff;cursor:pointer;box-shadow:0 3px 5px 0 rgba(0,0,0,.15);transition:opacity .2s linear}.cb-bubble-btn:hover{opacity:.85}.cb-bubble-btn-icon{display:block;position:absolute;top:50%;left:50%;width:27px;height:auto;margin:-11px 0 0 -13px;line-height:1em}.cb-bubble-btn-icon.cb-bubble-btn-icon--close{width:15px;margin:-7px 0 0 -7px}.cb-board{display:flex;flex-direction:column;position:absolute;right:0;overflow:hidden;width:376px;height:80vh;margin-bottom:10px;border-radius:8px;background-color:#fff;box-shadow:0 3px 30px 0 rgba(0,0,0,.15)}.cb-board-header{display:flex;flex:none;align-items:center;justify-content:space-between;height:50px;padding:5px 15px}.cb-board-header__title{font-weight:700;font-size:.875rem}.cb-board-content{flex-grow:1;overflow:hidden scroll}.cb-board-content__bubbles{min-height:100%;padding:1.5rem 1.25rem 1rem}.cb-msg-bubble{display:flex;position:relative}.cb-msg-avatar{flex-grow:1;flex:none;position:relative;overflow:hidden;border-radius:50%}.cb-msg-avatar__img{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;background-size:cover;background-repeat:no-repeat}.cb-msg-bubble__time{display:none;position:absolute;right:0;top:0;padding:2px 5px;margin-top:-5px;border-radius:5px;font-size:.625rem;color:#fff;background-color:#222;transform:translateY(-100%);opacity:0;transition:opacity .1s linear 1s}.cb-msg-bubble--user .cb-msg-bubble__time{display:block}.cb-msg-bubble-component{font-size:.875rem;max-width:80%}.cb-msg-bubble-component:hover~.cb-msg-bubble__time{opacity:.8}.cb-msg-bubble{padding-bottom:1rem}.cb-msg-bubble.cb-msg-bubble--bot .cb-msg-bubble-component{margin-right:2.5rem;margin-left:.5rem}.cb-msg-bubble.cb-msg-bubble--user{justify-content:flex-end}.cb-msg-bubble.cb-msg-bubble--user .cb-msg-bubble-component{margin-left:5rem}.cb-msg-bubble-component__text{position:relative;padding:.75rem 1rem;border-radius:6px;overflow-wrap:break-word;word-wrap:break-all}.cb-msg-bubble-component__img{position:relative;padding:.5rem 0;border-radius:6px}.cb-msg-bubble-component__options-wrapper{display:flex;flex-wrap:wrap}.cb-mb-button-options__item{flex:0 0 auto}.cb-mb-button-options__btn{display:block;overflow:hidden;position:relative;margin:.5rem .375rem 0 0;padding:.25rem 1rem;cursor:pointer;outline:0;border:1px solid transparent;border-radius:13px;color:inherit;font-size:.875rem;font-family:inherit;text-decoration:none;background-color:transparent;transition:background-color .15s linear,color .1s linear}.cb-mb-button-options__btn span{position:relative;z-index:10}.cb-msg-bubble__typing-indicator{position:relative;min-width:29px;opacity:.3}.cb-msg-bubble__typing-indicator span{display:block;width:7px;height:7px;margin:0 auto;border-radius:50%}.cb-msg-bubble__typing-indicator:after,.cb-msg-bubble__typing-indicator:before{content:\"\";display:block;position:absolute;top:0;width:7px;height:7px;border-radius:50%}.cb-msg-bubble__typing-indicator:before{left:0}.cb-msg-bubble__typing-indicator:after{right:0}.cb-board-action{position:relative;display:flex;flex:none;height:46px;padding:.45rem 1.25rem .5rem;border-top:1px solid #e6e6e6}.cb-board-action--disabled:before{content:\"\";display:block;position:absolute;z-index:10;top:0;left:0;width:100%;height:100%;opacity:.2;cursor:not-allowed}.cb-board-action__wrapper{display:flex;width:100%;background-color:#fff}.cb-board-action__msg-box{position:relative;flex-grow:1;padding:0 1rem 0 0}.cb-board-action__input{height:100%;width:100%;padding:0;font-size:.875rem;border:0;background-color:transparent;box-shadow:none;outline:0}.cb-board-action__input[disabled=disabled]{pointer-events:none}.cb-board-action__disable-text{display:flex;align-items:center;position:absolute;top:0;left:0;height:100%;width:100%;background-color:#fff;font-size:.875rem}.cb-board-action__extra{display:flex;flex:none;justify-content:center}.cb-action-item{display:block;padding:0;outline:0;border:0;line-height:1;box-shadow:none;background-color:transparent;cursor:pointer;opacity:.6;transition:opacity .1s linear}.cb-action-item:hover{opacity:1}.cb-action-icon{width:16px;height:16px;line-height:1;fill:#666;color:#666;vertical-align:middle}.cb-board-aciton--typing .cb-action-item--send{opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0808":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("42bf");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0618d185", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "0cd7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0459");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1b73c2c7", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "0fce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_app_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0cd7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_app_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_app_scss_vue_type_style_index_0_prod_lang_scss_external__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "42bf":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n * Viewer.js v1.11.6\n * https://fengyuanchen.github.io/viewerjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2023-09-17T03:16:35.830Z\n */.viewer-close:before,.viewer-flip-horizontal:before,.viewer-flip-vertical:before,.viewer-fullscreen-exit:before,.viewer-fullscreen:before,.viewer-next:before,.viewer-one-to-one:before,.viewer-play:before,.viewer-prev:before,.viewer-reset:before,.viewer-rotate-left:before,.viewer-rotate-right:before,.viewer-zoom-in:before,.viewer-zoom-out:before{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC\");background-repeat:no-repeat;background-size:280px;color:transparent;display:block;font-size:0;height:20px;line-height:0;width:20px}.viewer-zoom-in:before{background-position:0 0;content:\"Zoom In\"}.viewer-zoom-out:before{background-position:-20px 0;content:\"Zoom Out\"}.viewer-one-to-one:before{background-position:-40px 0;content:\"One to One\"}.viewer-reset:before{background-position:-60px 0;content:\"Reset\"}.viewer-prev:before{background-position:-80px 0;content:\"Previous\"}.viewer-play:before{background-position:-100px 0;content:\"Play\"}.viewer-next:before{background-position:-120px 0;content:\"Next\"}.viewer-rotate-left:before{background-position:-140px 0;content:\"Rotate Left\"}.viewer-rotate-right:before{background-position:-160px 0;content:\"Rotate Right\"}.viewer-flip-horizontal:before{background-position:-180px 0;content:\"Flip Horizontal\"}.viewer-flip-vertical:before{background-position:-200px 0;content:\"Flip Vertical\"}.viewer-fullscreen:before{background-position:-220px 0;content:\"Enter Full Screen\"}.viewer-fullscreen-exit:before{background-position:-240px 0;content:\"Exit Full Screen\"}.viewer-close:before{background-position:-260px 0;content:\"Close\"}.viewer-container{bottom:0;direction:ltr;font-size:0;left:0;line-height:0;overflow:hidden;position:absolute;right:0;-webkit-tap-highlight-color:transparent;top:0;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.viewer-container::-moz-selection,.viewer-container ::-moz-selection{background-color:transparent}.viewer-container::selection,.viewer-container ::selection{background-color:transparent}.viewer-container:focus{outline:0}.viewer-container img{display:block;height:auto;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.viewer-canvas{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0}.viewer-canvas>img{height:auto;margin:15px auto;max-width:90%!important;width:auto}.viewer-footer{bottom:0;left:0;overflow:hidden;position:absolute;right:0;text-align:center}.viewer-navbar{background-color:rgba(0,0,0,.5);overflow:hidden}.viewer-list{box-sizing:content-box;height:50px;margin:0;overflow:hidden;padding:1px 0}.viewer-list>li{color:transparent;cursor:pointer;float:left;font-size:0;height:50px;line-height:0;opacity:.5;overflow:hidden;transition:opacity .15s;width:30px}.viewer-list>li:focus,.viewer-list>li:hover{opacity:.75}.viewer-list>li:focus{outline:0}.viewer-list>li+li{margin-left:1px}.viewer-list>.viewer-loading{position:relative}.viewer-list>.viewer-loading:after{border-width:2px;height:20px;margin-left:-10px;margin-top:-10px;width:20px}.viewer-list>.viewer-active,.viewer-list>.viewer-active:focus,.viewer-list>.viewer-active:hover{opacity:1}.viewer-player{background-color:#000;bottom:0;cursor:none;display:none;right:0;z-index:1}.viewer-player,.viewer-player>img{left:0;position:absolute;top:0}.viewer-toolbar>ul{display:inline-block;margin:0 auto 5px;overflow:hidden;padding:6px 3px}.viewer-toolbar>ul>li{background-color:rgba(0,0,0,.5);border-radius:50%;cursor:pointer;float:left;height:24px;overflow:hidden;transition:background-color .15s;width:24px}.viewer-toolbar>ul>li:focus,.viewer-toolbar>ul>li:hover{background-color:rgba(0,0,0,.8)}.viewer-toolbar>ul>li:focus{box-shadow:0 0 3px #fff;outline:0;position:relative;z-index:1}.viewer-toolbar>ul>li:before{margin:2px}.viewer-toolbar>ul>li+li{margin-left:1px}.viewer-toolbar>ul>.viewer-small{height:18px;margin-bottom:3px;margin-top:3px;width:18px}.viewer-toolbar>ul>.viewer-small:before{margin:-1px}.viewer-toolbar>ul>.viewer-large{height:30px;margin-bottom:-3px;margin-top:-3px;width:30px}.viewer-toolbar>ul>.viewer-large:before{margin:5px}.viewer-tooltip{background-color:rgba(0,0,0,.8);border-radius:10px;color:#fff;display:none;font-size:12px;height:20px;left:50%;line-height:20px;margin-left:-25px;margin-top:-10px;position:absolute;text-align:center;top:50%;width:50px}.viewer-title{color:#ccc;display:inline-block;font-size:12px;line-height:1.2;margin:5px 5%;max-width:90%;min-height:14px;opacity:.8;overflow:hidden;text-overflow:ellipsis;transition:opacity .15s;white-space:nowrap}.viewer-title:hover{opacity:1}.viewer-button{-webkit-app-region:no-drag;background-color:rgba(0,0,0,.5);border-radius:50%;cursor:pointer;height:80px;overflow:hidden;position:absolute;right:-40px;top:-40px;transition:background-color .15s;width:80px}.viewer-button:focus,.viewer-button:hover{background-color:rgba(0,0,0,.8)}.viewer-button:focus{box-shadow:0 0 3px #fff;outline:0}.viewer-button:before{bottom:15px;left:15px;position:absolute}.viewer-fixed{position:fixed}.viewer-open{overflow:hidden}.viewer-show{display:block}.viewer-hide{display:none}.viewer-backdrop{background-color:rgba(0,0,0,.5)}.viewer-invisible{visibility:hidden}.viewer-move{cursor:move;cursor:grab}.viewer-fade{opacity:0}.viewer-in{opacity:1}.viewer-transition{transition:all .3s}@keyframes viewer-spinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.viewer-loading:after{animation:viewer-spinner 1s linear infinite;border:4px solid hsla(0,0%,100%,.1);border-left-color:hsla(0,0%,100%,.5);border-radius:50%;content:\"\";display:inline-block;height:40px;left:50%;margin-left:-20px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:1}@media (max-width:767px){.viewer-hide-xs-down{display:none}}@media (max-width:991px){.viewer-hide-sm-down{display:none}}@media (max-width:1199px){.viewer-hide-md-down{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "c71c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* unused harmony export api */
/* unused harmony export component */
/* unused harmony export default */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return directive; });
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c82c");
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(viewerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);



var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
var nativeObjectToString$1 = objectProto$8.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$6.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$7 = Object.prototype;
var nativeObjectToString = objectProto$7.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isArray = Array.isArray;
var isArray$1 = isArray;
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$6 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$5).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty$1 = defineProperty;
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var baseSetToString$1 = baseSetToString;
var setToString = shortOut(baseSetToString$1);
var setToString$1 = setToString;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax$1 = Math.max;
function overRest(func, start, transform) {
  start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start) {
  return setToString$1(overRest(func, start, identity), func + "");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isIterateeCall(value, index2, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var objectProto$4 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$1 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$1;
}
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer = moduleExports$1 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});
var assign$1 = assign;
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._t("default", null, { "images": _vm.images, "options": _vm.options })], 2);
};
var staticRenderFns = [];
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const __vue2_script = {
  props: {
    images: {
      type: Array
    },
    rebuild: {
      type: Boolean,
      default: false
    },
    trigger: {},
    options: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {
    images() {
      this.$nextTick(() => {
        this.onChange();
      });
    },
    trigger: {
      handler() {
        this.$nextTick(() => {
          this.onChange();
        });
      },
      deep: true
    },
    options: {
      handler() {
        this.$nextTick(() => {
          this.rebuildViewer();
        });
      },
      deep: true
    }
  },
  mounted() {
    this.createViewer();
  },
  unmounted() {
    this.destroyViewer();
  },
  methods: {
    onChange() {
      if (this.rebuild) {
        this.rebuildViewer();
      } else {
        this.updateViewer();
      }
    },
    rebuildViewer() {
      this.destroyViewer();
      this.createViewer();
    },
    updateViewer() {
      if (this.$viewer) {
        this.$viewer.update();
        this.$emit("inited", this.$viewer);
      } else {
        this.createViewer();
      }
    },
    destroyViewer() {
      this.$viewer && this.$viewer.destroy();
    },
    createViewer() {
      this.$viewer = new viewerjs__WEBPACK_IMPORTED_MODULE_0___default.a(this.$el, this.options);
      this.$emit("inited", this.$viewer);
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  __vue2_script,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  null,
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var component = /* @__PURE__ */ function() {
  return __component__.exports;
}();
const directive = ({ name = "viewer", debug = false } = {}) => {
  function createViewer(el, options, rebuild = false, observer = false) {
    vue__WEBPACK_IMPORTED_MODULE_1___default.a.nextTick(() => {
      if (observer && !imageDiff(el))
        return;
      if (rebuild || !el[`$${name}`]) {
        destroyViewer(el);
        el[`$${name}`] = new viewerjs__WEBPACK_IMPORTED_MODULE_0___default.a(el, options);
        log("Viewer created");
      } else {
        el[`$${name}`].update();
        log("Viewer updated");
      }
    });
  }
  function imageDiff(el) {
    const imageContent = el.innerHTML.match(/<img([\w\W]+?)[\\/]?>/g);
    const viewerImageText = imageContent ? imageContent.join("") : void 0;
    if (el.__viewerImageDiffCache === viewerImageText) {
      log("Element change detected, but image(s) has not changed");
      return false;
    } else {
      log("Image change detected");
      el.__viewerImageDiffCache = viewerImageText;
      return true;
    }
  }
  function createObserver(el, options, debouncedCreateViewer, rebuild) {
    destroyObserver(el);
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    if (!MutationObserver) {
      log("Observer not supported");
      return;
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        log(`Viewer mutation:${mutation.type}`);
        debouncedCreateViewer(el, options, rebuild, true);
      });
    });
    const config = { attributes: true, childList: true, characterData: true, subtree: true };
    observer.observe(el, config);
    el.__viewerMutationObserver = observer;
    log("Observer created");
  }
  function createWatcher(el, { expression }, vnode, debouncedCreateViewer) {
    const simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
    if (!expression || !simplePathRE.test(expression)) {
      log("Only simple dot-delimited paths can create watcher");
      return;
    }
    el.__viewerUnwatch = vnode.context.$watch(expression, (newVal, oldVal) => {
      log("Change detected by watcher: ", expression);
      debouncedCreateViewer(el, newVal, true);
    }, {
      deep: true
    });
    log("Watcher created, expression: ", expression);
  }
  function destroyViewer(el) {
    if (!el[`$${name}`]) {
      return;
    }
    el[`$${name}`].destroy();
    delete el[`$${name}`];
    log("Viewer destroyed");
  }
  function destroyObserver(el) {
    if (!el.__viewerMutationObserver) {
      return;
    }
    el.__viewerMutationObserver.disconnect();
    delete el.__viewerMutationObserver;
    log("Observer destroyed");
  }
  function destroyWatcher(el) {
    if (!el.__viewerUnwatch) {
      return;
    }
    el.__viewerUnwatch();
    delete el.__viewerUnwatch;
    log("Watcher destroyed");
  }
  function log() {
    debug && console.log(...arguments);
  }
  const directive2 = {
    bind(el, binding, vnode) {
      log("Viewer bind");
      const debouncedCreateViewer = debounce(createViewer, 50);
      debouncedCreateViewer(el, binding.value);
      createWatcher(el, binding, vnode, debouncedCreateViewer);
      if (!binding.modifiers.static) {
        createObserver(el, binding.value, debouncedCreateViewer, binding.modifiers.rebuild);
      }
    },
    unbind(el, binding) {
      log("Viewer unbind");
      destroyObserver(el);
      destroyWatcher(el);
      destroyViewer(el);
    }
  };
  return directive2;
};
const api = ({ images = [], options = {} } = {}) => {
  options = assign$1(options, {
    inline: false
  });
  const ViewerToken = vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
    render(h) {
      return h(
        "div",
        {
          style: {
            display: "none"
          },
          class: ["__viewer-token"]
        },
        images.map((attr) => {
          return h(
            "img",
            {
              attrs: typeof attr === "string" ? { src: attr } : attr
            }
          );
        })
      );
    }
  });
  const token = new ViewerToken();
  token.$mount();
  document.body.appendChild(token.$el);
  const $viewer = new viewerjs__WEBPACK_IMPORTED_MODULE_0___default.a(token.$el, options);
  const $destroy = $viewer.destroy.bind($viewer);
  $viewer.destroy = function() {
    $destroy();
    token.$destroy();
    document.body.removeChild(token.$el);
    return $viewer;
  };
  $viewer.show();
  token.$el.addEventListener("hidden", function() {
    if (this.viewer === $viewer) {
      $viewer.destroy();
    }
  });
  return $viewer;
};
var index = {
  install(Vue2, { name = "viewer", debug = false, defaultOptions } = {}) {
    viewerjs__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults(defaultOptions);
    Vue2.component(name, assign$1(component, { name }));
    Vue2.directive(name, directive({ name, debug }));
    Vue2.prototype[`$${name}Api`] = api;
  },
  setDefaults(defaultOptions) {
    viewerjs__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults(defaultOptions);
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("dd40")(module)))

/***/ }),

/***/ "c82c":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Viewer.js v1.11.6
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-09-17T03:16:38.052Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
})(this, (function () { 'use strict';

  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var DEFAULTS = {
    /**
     * Enable a modal backdrop, specify `static` for a backdrop
     * which doesn't close the modal on click.
     * @type {boolean}
     */
    backdrop: true,
    /**
     * Show the button on the top-right of the viewer.
     * @type {boolean}
     */
    button: true,
    /**
     * Show the navbar.
     * @type {boolean | number}
     */
    navbar: true,
    /**
     * Specify the visibility and the content of the title.
     * @type {boolean | number | Function | Array}
     */
    title: true,
    /**
     * Show the toolbar.
     * @type {boolean | number | Object}
     */
    toolbar: true,
    /**
     * Custom class name(s) to add to the viewer's root element.
     * @type {string}
     */
    className: '',
    /**
     * Define where to put the viewer in modal mode.
     * @type {string | Element}
     */
    container: 'body',
    /**
     * Filter the images for viewing. Return true if the image is viewable.
     * @type {Function}
     */
    filter: null,
    /**
     * Enable to request fullscreen when play.
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions}
     * @type {boolean|FullscreenOptions}
     */
    fullscreen: true,
    /**
     * Define the extra attributes to inherit from the original image.
     * @type {Array}
     */
    inheritedAttributes: ['crossOrigin', 'decoding', 'isMap', 'loading', 'referrerPolicy', 'sizes', 'srcset', 'useMap'],
    /**
     * Define the initial coverage of the viewing image.
     * @type {number}
     */
    initialCoverage: 0.9,
    /**
     * Define the initial index of the image for viewing.
     * @type {number}
     */
    initialViewIndex: 0,
    /**
     * Enable inline mode.
     * @type {boolean}
     */
    inline: false,
    /**
     * The amount of time to delay between automatically cycling an image when playing.
     * @type {number}
     */
    interval: 5000,
    /**
     * Enable keyboard support.
     * @type {boolean}
     */
    keyboard: true,
    /**
     * Focus the viewer when initialized.
     * @type {boolean}
     */
    focus: true,
    /**
     * Indicate if show a loading spinner when load image or not.
     * @type {boolean}
     */
    loading: true,
    /**
     * Indicate if enable loop viewing or not.
     * @type {boolean}
     */
    loop: true,
    /**
     * Min width of the viewer in inline mode.
     * @type {number}
     */
    minWidth: 200,
    /**
     * Min height of the viewer in inline mode.
     * @type {number}
     */
    minHeight: 100,
    /**
     * Enable to move the image.
     * @type {boolean}
     */
    movable: true,
    /**
     * Enable to rotate the image.
     * @type {boolean}
     */
    rotatable: true,
    /**
     * Enable to scale the image.
     * @type {boolean}
     */
    scalable: true,
    /**
     * Enable to zoom the image.
     * @type {boolean}
     */
    zoomable: true,
    /**
     * Enable to zoom the current image by dragging on the touch screen.
     * @type {boolean}
     */
    zoomOnTouch: true,
    /**
     * Enable to zoom the image by wheeling mouse.
     * @type {boolean}
     */
    zoomOnWheel: true,
    /**
     * Enable to slide to the next or previous image by swiping on the touch screen.
     * @type {boolean}
     */
    slideOnTouch: true,
    /**
     * Indicate if toggle the image size between its natural size
     * and initial size when double click on the image or not.
     * @type {boolean}
     */
    toggleOnDblclick: true,
    /**
     * Show the tooltip with image ratio (percentage) when zoom in or zoom out.
     * @type {boolean}
     */
    tooltip: true,
    /**
     * Enable CSS3 Transition for some special elements.
     * @type {boolean}
     */
    transition: true,
    /**
     * Define the CSS `z-index` value of viewer in modal mode.
     * @type {number}
     */
    zIndex: 2015,
    /**
     * Define the CSS `z-index` value of viewer in inline mode.
     * @type {number}
     */
    zIndexInline: 0,
    /**
     * Define the ratio when zoom the image by wheeling mouse.
     * @type {number}
     */
    zoomRatio: 0.1,
    /**
     * Define the min ratio of the image when zoom out.
     * @type {number}
     */
    minZoomRatio: 0.01,
    /**
     * Define the max ratio of the image when zoom in.
     * @type {number}
     */
    maxZoomRatio: 100,
    /**
     * Define where to get the original image URL for viewing.
     * @type {string | Function}
     */
    url: 'src',
    /**
     * Event shortcuts.
     * @type {Function}
     */
    ready: null,
    show: null,
    shown: null,
    hide: null,
    hidden: null,
    view: null,
    viewed: null,
    move: null,
    moved: null,
    rotate: null,
    rotated: null,
    scale: null,
    scaled: null,
    zoom: null,
    zoomed: null,
    play: null,
    stop: null
  };

  var TEMPLATE = '<div class="viewer-container" tabindex="-1" touch-action="none">' + '<div class="viewer-canvas"></div>' + '<div class="viewer-footer">' + '<div class="viewer-title"></div>' + '<div class="viewer-toolbar"></div>' + '<div class="viewer-navbar">' + '<ul class="viewer-list" role="navigation"></ul>' + '</div>' + '</div>' + '<div class="viewer-tooltip" role="alert" aria-hidden="true"></div>' + '<div class="viewer-button" data-viewer-action="mix" role="button"></div>' + '<div class="viewer-player"></div>' + '</div>';

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'viewer';

  // Actions
  var ACTION_MOVE = 'move';
  var ACTION_SWITCH = 'switch';
  var ACTION_ZOOM = 'zoom';

  // Classes
  var CLASS_ACTIVE = "".concat(NAMESPACE, "-active");
  var CLASS_CLOSE = "".concat(NAMESPACE, "-close");
  var CLASS_FADE = "".concat(NAMESPACE, "-fade");
  var CLASS_FIXED = "".concat(NAMESPACE, "-fixed");
  var CLASS_FULLSCREEN = "".concat(NAMESPACE, "-fullscreen");
  var CLASS_FULLSCREEN_EXIT = "".concat(NAMESPACE, "-fullscreen-exit");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_HIDE_MD_DOWN = "".concat(NAMESPACE, "-hide-md-down");
  var CLASS_HIDE_SM_DOWN = "".concat(NAMESPACE, "-hide-sm-down");
  var CLASS_HIDE_XS_DOWN = "".concat(NAMESPACE, "-hide-xs-down");
  var CLASS_IN = "".concat(NAMESPACE, "-in");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_LOADING = "".concat(NAMESPACE, "-loading");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move");
  var CLASS_OPEN = "".concat(NAMESPACE, "-open");
  var CLASS_SHOW = "".concat(NAMESPACE, "-show");
  var CLASS_TRANSITION = "".concat(NAMESPACE, "-transition");

  // Native events
  var EVENT_CLICK = 'click';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_DRAG_START = 'dragstart';
  var EVENT_FOCUSIN = 'focusin';
  var EVENT_KEY_DOWN = 'keydown';
  var EVENT_LOAD = 'load';
  var EVENT_ERROR = 'error';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_RESIZE = 'resize';
  var EVENT_TRANSITION_END = 'transitionend';
  var EVENT_WHEEL = 'wheel';

  // Custom events
  var EVENT_READY = 'ready';
  var EVENT_SHOW = 'show';
  var EVENT_SHOWN = 'shown';
  var EVENT_HIDE = 'hide';
  var EVENT_HIDDEN = 'hidden';
  var EVENT_VIEW = 'view';
  var EVENT_VIEWED = 'viewed';
  var EVENT_MOVE = 'move';
  var EVENT_MOVED = 'moved';
  var EVENT_ROTATE = 'rotate';
  var EVENT_ROTATED = 'rotated';
  var EVENT_SCALE = 'scale';
  var EVENT_SCALED = 'scaled';
  var EVENT_ZOOM = 'zoom';
  var EVENT_ZOOMED = 'zoomed';
  var EVENT_PLAY = 'play';
  var EVENT_STOP = 'stop';

  // Data keys
  var DATA_ACTION = "".concat(NAMESPACE, "Action");

  // RegExps
  var REGEXP_SPACES = /\s\s*/;

  // Misc
  var BUTTONS = ['zoom-in', 'zoom-out', 'one-to-one', 'reset', 'prev', 'play', 'next', 'rotate-left', 'rotate-right', 'flip-horizontal', 'flip-vertical'];

  /**
   * Check if the given value is a string.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a string, else `false`.
   */
  function isString(value) {
    return typeof value === 'string';
  }

  /**
   * Check if the given value is not a number.
   */
  var isNaN = Number.isNaN || WINDOW.isNaN;

  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */
  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }

  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */
  function isUndefined(value) {
    return typeof value === 'undefined';
  }

  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */
  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */
  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }
    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }

  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */
  function isFunction(value) {
    return typeof value === 'function';
  }

  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */
  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length) /* array-like */) {
        var length = data.length;
        var i;
        for (i = 0; i < length; i += 1) {
          if (callback.call(data, data[i], i, data) === false) {
            break;
          }
        }
      } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }
    return data;
  }

  /**
   * Extend the given object.
   * @param {*} obj - The object to be extended.
   * @param {*} args - The rest objects which will be merged to the first object.
   * @returns {Object} The extended object.
   */
  var assign = Object.assign || function assign(obj) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (isObject(obj) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            obj[key] = arg[key];
          });
        }
      });
    }
    return obj;
  };
  var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;

  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */
  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value += 'px';
      }
      style[property] = value;
    });
  }

  /**
   * Escape a string for using in HTML.
   * @param {String} value - The string to escape.
   * @returns {String} Returns the escaped string.
   */
  function escapeHTMLEntities(value) {
    return isString(value) ? value.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : value;
  }

  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */
  function hasClass(element, value) {
    if (!element || !value) {
      return false;
    }
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }

  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */
  function addClass(element, value) {
    if (!element || !value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }
    if (element.classList) {
      element.classList.add(value);
      return;
    }
    var className = element.className.trim();
    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }

  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */
  function removeClass(element, value) {
    if (!element || !value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }
    if (element.classList) {
      element.classList.remove(value);
      return;
    }
    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }

  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */
  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    }

    // IE10-11 doesn't support the second parameter of `classList.toggle`
    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;

  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */
  function hyphenate(value) {
    return value.replace(REGEXP_HYPHENATE, '$1-$2').toLowerCase();
  }

  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */
  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }
    if (element.dataset) {
      return element.dataset[name];
    }
    return element.getAttribute("data-".concat(hyphenate(name)));
  }

  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */
  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(hyphenate(name)), data);
    }
  }
  var onceSupported = function () {
    var supported = false;
    if (IS_BROWSER) {
      var once = false;
      var listener = function listener() {};
      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },
        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }
    return supported;
  }();

  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */
  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;
        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];
          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }
          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }
      element.removeEventListener(event, handler, options);
    });
  }

  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */
  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
          listeners = _element$listeners === void 0 ? {} : _element$listeners;
        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          listener.apply(element, args);
        };
        if (!listeners[event]) {
          listeners[event] = {};
        }
        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }
        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }
      element.addEventListener(event, _handler, options);
    });
  }

  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @param {Object} options - The additional event options.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */
  function dispatchEvent(element, type, data, options) {
    var event;

    // Event and CustomEvent on IE9-11 are global objects, not constructors
    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, _objectSpread2({
        bubbles: true,
        cancelable: true,
        detail: data
      }, options));
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }
    return element.dispatchEvent(event);
  }

  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */
  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }

  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */
  function getTransforms(_ref) {
    var rotate = _ref.rotate,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      translateX = _ref.translateX,
      translateY = _ref.translateY;
    var values = [];
    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }
    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    }

    // Rotate should come first before scale to match orientation transform
    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }
    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }
    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }
    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }

  /**
   * Get an image name from an image url.
   * @param {string} url - The target url.
   * @example
   * // picture.jpg
   * getImageNameFromURL('https://domain.com/path/to/picture.jpg?size=1280×960')
   * @returns {string} A string contains the image name.
   */
  function getImageNameFromURL(url) {
    return isString(url) ? decodeURIComponent(url.replace(/^.*\//, '').replace(/[?&#].*$/, '')) : '';
  }
  var IS_SAFARI = WINDOW.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(WINDOW.navigator.userAgent);

  /**
   * Get an image's natural sizes.
   * @param {string} image - The target image.
   * @param {Object} options - The viewer options.
   * @param {Function} callback - The callback function.
   * @returns {HTMLImageElement} The new image.
   */
  function getImageNaturalSizes(image, options, callback) {
    var newImage = document.createElement('img');

    // Modern browsers (except Safari)
    if (image.naturalWidth && !IS_SAFARI) {
      callback(image.naturalWidth, image.naturalHeight);
      return newImage;
    }
    var body = document.body || document.documentElement;
    newImage.onload = function () {
      callback(newImage.width, newImage.height);
      if (!IS_SAFARI) {
        body.removeChild(newImage);
      }
    };
    forEach(options.inheritedAttributes, function (name) {
      var value = image.getAttribute(name);
      if (value !== null) {
        newImage.setAttribute(name, value);
      }
    });
    newImage.src = image.src;

    // iOS Safari will convert the image automatically
    // with its orientation once append it into DOM
    if (!IS_SAFARI) {
      newImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
      body.appendChild(newImage);
    }
    return newImage;
  }

  /**
   * Get the related class name of a responsive type number.
   * @param {string} type - The responsive type.
   * @returns {string} The related class name.
   */
  function getResponsiveClass(type) {
    switch (type) {
      case 2:
        return CLASS_HIDE_XS_DOWN;
      case 3:
        return CLASS_HIDE_SM_DOWN;
      case 4:
        return CLASS_HIDE_MD_DOWN;
      default:
        return '';
    }
  }

  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */
  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);
    var ratios = [];
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;
        ratios.push(ratio);
      });
    });
    ratios.sort(function (a, b) {
      return Math.abs(a) < Math.abs(b);
    });
    return ratios[0];
  }

  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */
  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
      pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      timeStamp: Date.now(),
      startX: pageX,
      startY: pageY
    }, end);
  }

  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */
  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
        startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initViewer();
      this.initList();
      this.renderViewer();
    },
    initBody: function initBody() {
      var ownerDocument = this.element.ownerDocument;
      var body = ownerDocument.body || ownerDocument.documentElement;
      this.body = body;
      this.scrollbarWidth = window.innerWidth - ownerDocument.documentElement.clientWidth;
      this.initialBodyPaddingRight = body.style.paddingRight;
      this.initialBodyComputedPaddingRight = window.getComputedStyle(body).paddingRight;
    },
    initContainer: function initContainer() {
      this.containerData = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    initViewer: function initViewer() {
      var options = this.options,
        parent = this.parent;
      var viewerData;
      if (options.inline) {
        viewerData = {
          width: Math.max(parent.offsetWidth, options.minWidth),
          height: Math.max(parent.offsetHeight, options.minHeight)
        };
        this.parentData = viewerData;
      }
      if (this.fulled || !viewerData) {
        viewerData = this.containerData;
      }
      this.viewerData = assign({}, viewerData);
    },
    renderViewer: function renderViewer() {
      if (this.options.inline && !this.fulled) {
        setStyle(this.viewer, this.viewerData);
      }
    },
    initList: function initList() {
      var _this = this;
      var element = this.element,
        options = this.options,
        list = this.list;
      var items = [];

      // initList may be called in this.update, so should keep idempotent
      list.innerHTML = '';
      forEach(this.images, function (image, index) {
        var src = image.src;
        var alt = image.alt || getImageNameFromURL(src);
        var url = _this.getImageURL(image);
        if (src || url) {
          var item = document.createElement('li');
          var img = document.createElement('img');
          forEach(options.inheritedAttributes, function (name) {
            var value = image.getAttribute(name);
            if (value !== null) {
              img.setAttribute(name, value);
            }
          });
          if (options.navbar) {
            img.src = src || url;
          }
          img.alt = alt;
          img.setAttribute('data-original-url', url || src);
          item.setAttribute('data-index', index);
          item.setAttribute('data-viewer-action', 'view');
          item.setAttribute('role', 'button');
          if (options.keyboard) {
            item.setAttribute('tabindex', 0);
          }
          item.appendChild(img);
          list.appendChild(item);
          items.push(item);
        }
      });
      this.items = items;
      forEach(items, function (item) {
        var image = item.firstElementChild;
        var onLoad;
        var onError;
        setData(image, 'filled', true);
        if (options.loading) {
          addClass(item, CLASS_LOADING);
        }
        addListener(image, EVENT_LOAD, onLoad = function onLoad(event) {
          removeListener(image, EVENT_ERROR, onError);
          if (options.loading) {
            removeClass(item, CLASS_LOADING);
          }
          _this.loadImage(event);
        }, {
          once: true
        });
        addListener(image, EVENT_ERROR, onError = function onError() {
          removeListener(image, EVENT_LOAD, onLoad);
          if (options.loading) {
            removeClass(item, CLASS_LOADING);
          }
        }, {
          once: true
        });
      });
      if (options.transition) {
        addListener(element, EVENT_VIEWED, function () {
          addClass(list, CLASS_TRANSITION);
        }, {
          once: true
        });
      }
    },
    renderList: function renderList() {
      var index = this.index;
      var item = this.items[index];
      if (!item) {
        return;
      }
      var next = item.nextElementSibling;
      var gutter = parseInt(window.getComputedStyle(next || item).marginLeft, 10);
      var offsetWidth = item.offsetWidth;
      var outerWidth = offsetWidth + gutter;

      // Place the active item in the center of the screen
      setStyle(this.list, assign({
        width: outerWidth * this.length - gutter
      }, getTransforms({
        translateX: (this.viewerData.width - offsetWidth) / 2 - outerWidth * index
      })));
    },
    resetList: function resetList() {
      var list = this.list;
      list.innerHTML = '';
      removeClass(list, CLASS_TRANSITION);
      setStyle(list, getTransforms({
        translateX: 0
      }));
    },
    initImage: function initImage(done) {
      var _this2 = this;
      var options = this.options,
        image = this.image,
        viewerData = this.viewerData;
      var footerHeight = this.footer.offsetHeight;
      var viewerWidth = viewerData.width;
      var viewerHeight = Math.max(viewerData.height - footerHeight, footerHeight);
      var oldImageData = this.imageData || {};
      var sizingImage;
      this.imageInitializing = {
        abort: function abort() {
          sizingImage.onload = null;
        }
      };
      sizingImage = getImageNaturalSizes(image, options, function (naturalWidth, naturalHeight) {
        var aspectRatio = naturalWidth / naturalHeight;
        var initialCoverage = Math.max(0, Math.min(1, options.initialCoverage));
        var width = viewerWidth;
        var height = viewerHeight;
        _this2.imageInitializing = false;
        if (viewerHeight * aspectRatio > viewerWidth) {
          height = viewerWidth / aspectRatio;
        } else {
          width = viewerHeight * aspectRatio;
        }
        initialCoverage = isNumber(initialCoverage) ? initialCoverage : 0.9;
        width = Math.min(width * initialCoverage, naturalWidth);
        height = Math.min(height * initialCoverage, naturalHeight);
        var left = (viewerWidth - width) / 2;
        var top = (viewerHeight - height) / 2;
        var imageData = {
          left: left,
          top: top,
          x: left,
          y: top,
          width: width,
          height: height,
          oldRatio: 1,
          ratio: width / naturalWidth,
          aspectRatio: aspectRatio,
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight
        };
        var initialImageData = assign({}, imageData);
        if (options.rotatable) {
          imageData.rotate = oldImageData.rotate || 0;
          initialImageData.rotate = 0;
        }
        if (options.scalable) {
          imageData.scaleX = oldImageData.scaleX || 1;
          imageData.scaleY = oldImageData.scaleY || 1;
          initialImageData.scaleX = 1;
          initialImageData.scaleY = 1;
        }
        _this2.imageData = imageData;
        _this2.initialImageData = initialImageData;
        if (done) {
          done();
        }
      });
    },
    renderImage: function renderImage(done) {
      var _this3 = this;
      var image = this.image,
        imageData = this.imageData;
      setStyle(image, assign({
        width: imageData.width,
        height: imageData.height,
        // XXX: Not to use translateX/Y to avoid image shaking when zooming
        marginLeft: imageData.x,
        marginTop: imageData.y
      }, getTransforms(imageData)));
      if (done) {
        if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && hasClass(image, CLASS_TRANSITION)) {
          var onTransitionEnd = function onTransitionEnd() {
            _this3.imageRendering = false;
            done();
          };
          this.imageRendering = {
            abort: function abort() {
              removeListener(image, EVENT_TRANSITION_END, onTransitionEnd);
            }
          };
          addListener(image, EVENT_TRANSITION_END, onTransitionEnd, {
            once: true
          });
        } else {
          done();
        }
      }
    },
    resetImage: function resetImage() {
      var image = this.image;
      if (image) {
        if (this.viewing) {
          this.viewing.abort();
        }
        image.parentNode.removeChild(image);
        this.image = null;
        this.title.innerHTML = '';
      }
    }
  };

  var events = {
    bind: function bind() {
      var options = this.options,
        viewer = this.viewer,
        canvas = this.canvas;
      var document = this.element.ownerDocument;
      addListener(viewer, EVENT_CLICK, this.onClick = this.click.bind(this));
      addListener(viewer, EVENT_DRAG_START, this.onDragStart = this.dragstart.bind(this));
      addListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown = this.pointerdown.bind(this));
      addListener(document, EVENT_POINTER_MOVE, this.onPointerMove = this.pointermove.bind(this));
      addListener(document, EVENT_POINTER_UP, this.onPointerUp = this.pointerup.bind(this));
      addListener(document, EVENT_KEY_DOWN, this.onKeyDown = this.keydown.bind(this));
      addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      if (options.zoomable && options.zoomOnWheel) {
        addListener(viewer, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }
      if (options.toggleOnDblclick) {
        addListener(canvas, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }
    },
    unbind: function unbind() {
      var options = this.options,
        viewer = this.viewer,
        canvas = this.canvas;
      var document = this.element.ownerDocument;
      removeListener(viewer, EVENT_CLICK, this.onClick);
      removeListener(viewer, EVENT_DRAG_START, this.onDragStart);
      removeListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown);
      removeListener(document, EVENT_POINTER_MOVE, this.onPointerMove);
      removeListener(document, EVENT_POINTER_UP, this.onPointerUp);
      removeListener(document, EVENT_KEY_DOWN, this.onKeyDown);
      removeListener(window, EVENT_RESIZE, this.onResize);
      if (options.zoomable && options.zoomOnWheel) {
        removeListener(viewer, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }
      if (options.toggleOnDblclick) {
        removeListener(canvas, EVENT_DBLCLICK, this.onDblclick);
      }
    }
  };

  var handlers = {
    click: function click(event) {
      var options = this.options,
        imageData = this.imageData;
      var target = event.target;
      var action = getData(target, DATA_ACTION);
      if (!action && target.localName === 'img' && target.parentElement.localName === 'li') {
        target = target.parentElement;
        action = getData(target, DATA_ACTION);
      }

      // Cancel the emulated click when the native click event was triggered.
      if (IS_TOUCH_DEVICE && event.isTrusted && target === this.canvas) {
        clearTimeout(this.clickCanvasTimeout);
      }
      switch (action) {
        case 'mix':
          if (this.played) {
            this.stop();
          } else if (options.inline) {
            if (this.fulled) {
              this.exit();
            } else {
              this.full();
            }
          } else {
            this.hide();
          }
          break;
        case 'hide':
          if (!this.pointerMoved) {
            this.hide();
          }
          break;
        case 'view':
          this.view(getData(target, 'index'));
          break;
        case 'zoom-in':
          this.zoom(0.1, true);
          break;
        case 'zoom-out':
          this.zoom(-0.1, true);
          break;
        case 'one-to-one':
          this.toggle();
          break;
        case 'reset':
          this.reset();
          break;
        case 'prev':
          this.prev(options.loop);
          break;
        case 'play':
          this.play(options.fullscreen);
          break;
        case 'next':
          this.next(options.loop);
          break;
        case 'rotate-left':
          this.rotate(-90);
          break;
        case 'rotate-right':
          this.rotate(90);
          break;
        case 'flip-horizontal':
          this.scaleX(-imageData.scaleX || -1);
          break;
        case 'flip-vertical':
          this.scaleY(-imageData.scaleY || -1);
          break;
        default:
          if (this.played) {
            this.stop();
          }
      }
    },
    dblclick: function dblclick(event) {
      event.preventDefault();
      if (this.viewed && event.target === this.image) {
        // Cancel the emulated double click when the native dblclick event was triggered.
        if (IS_TOUCH_DEVICE && event.isTrusted) {
          clearTimeout(this.doubleClickImageTimeout);
        }

        // XXX: No pageX/Y properties in custom event, fallback to the original event.
        this.toggle(event.isTrusted ? event : event.detail && event.detail.originalEvent);
      }
    },
    load: function load() {
      var _this = this;
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = false;
      }
      var element = this.element,
        options = this.options,
        image = this.image,
        index = this.index,
        viewerData = this.viewerData;
      removeClass(image, CLASS_INVISIBLE);
      if (options.loading) {
        removeClass(this.canvas, CLASS_LOADING);
      }
      image.style.cssText = 'height:0;' + "margin-left:".concat(viewerData.width / 2, "px;") + "margin-top:".concat(viewerData.height / 2, "px;") + 'max-width:none!important;' + 'position:relative;' + 'width:0;';
      this.initImage(function () {
        toggleClass(image, CLASS_MOVE, options.movable);
        toggleClass(image, CLASS_TRANSITION, options.transition);
        _this.renderImage(function () {
          _this.viewed = true;
          _this.viewing = false;
          if (isFunction(options.viewed)) {
            addListener(element, EVENT_VIEWED, options.viewed, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_VIEWED, {
            originalImage: _this.images[index],
            index: index,
            image: image
          }, {
            cancelable: false
          });
        });
      });
    },
    loadImage: function loadImage(event) {
      var image = event.target;
      var parent = image.parentNode;
      var parentWidth = parent.offsetWidth || 30;
      var parentHeight = parent.offsetHeight || 50;
      var filled = !!getData(image, 'filled');
      getImageNaturalSizes(image, this.options, function (naturalWidth, naturalHeight) {
        var aspectRatio = naturalWidth / naturalHeight;
        var width = parentWidth;
        var height = parentHeight;
        if (parentHeight * aspectRatio > parentWidth) {
          if (filled) {
            width = parentHeight * aspectRatio;
          } else {
            height = parentWidth / aspectRatio;
          }
        } else if (filled) {
          height = parentWidth / aspectRatio;
        } else {
          width = parentHeight * aspectRatio;
        }
        setStyle(image, assign({
          width: width,
          height: height
        }, getTransforms({
          translateX: (parentWidth - width) / 2,
          translateY: (parentHeight - height) / 2
        })));
      });
    },
    keydown: function keydown(event) {
      var options = this.options;
      if (!options.keyboard) {
        return;
      }
      var keyCode = event.keyCode || event.which || event.charCode;
      switch (keyCode) {
        // Enter
        case 13:
          if (this.viewer.contains(event.target)) {
            this.click(event);
          }
          break;
      }
      if (!this.fulled) {
        return;
      }
      switch (keyCode) {
        // Escape
        case 27:
          if (this.played) {
            this.stop();
          } else if (options.inline) {
            if (this.fulled) {
              this.exit();
            }
          } else {
            this.hide();
          }
          break;

        // Space
        case 32:
          if (this.played) {
            this.stop();
          }
          break;

        // ArrowLeft
        case 37:
          if (this.played && this.playing) {
            this.playing.prev();
          } else {
            this.prev(options.loop);
          }
          break;

        // ArrowUp
        case 38:
          // Prevent scroll on Firefox
          event.preventDefault();

          // Zoom in
          this.zoom(options.zoomRatio, true);
          break;

        // ArrowRight
        case 39:
          if (this.played && this.playing) {
            this.playing.next();
          } else {
            this.next(options.loop);
          }
          break;

        // ArrowDown
        case 40:
          // Prevent scroll on Firefox
          event.preventDefault();

          // Zoom out
          this.zoom(-options.zoomRatio, true);
          break;

        // Ctrl + 0
        case 48:
        // Fall through

        // Ctrl + 1
        // eslint-disable-next-line no-fallthrough
        case 49:
          if (event.ctrlKey) {
            event.preventDefault();
            this.toggle();
          }
          break;
      }
    },
    dragstart: function dragstart(event) {
      if (event.target.localName === 'img') {
        event.preventDefault();
      }
    },
    pointerdown: function pointerdown(event) {
      var options = this.options,
        pointers = this.pointers;
      var buttons = event.buttons,
        button = event.button;
      this.pointerMoved = false;
      if (!this.viewed || this.showing || this.viewing || this.hiding

      // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && (
      // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0

      // Open context menu
      || event.ctrlKey)) {
        return;
      }

      // Prevent default behaviours as page zooming in touch devices.
      event.preventDefault();
      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        pointers[event.pointerId || 0] = getPointer(event);
      }
      var action = options.movable ? ACTION_MOVE : false;
      if (options.zoomOnTouch && options.zoomable && Object.keys(pointers).length > 1) {
        action = ACTION_ZOOM;
      } else if (options.slideOnTouch && (event.pointerType === 'touch' || event.type === 'touchstart') && this.isSwitchable()) {
        action = ACTION_SWITCH;
      }
      if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
        removeClass(this.image, CLASS_TRANSITION);
      }
      this.action = action;
    },
    pointermove: function pointermove(event) {
      var pointers = this.pointers,
        action = this.action;
      if (!this.viewed || !action) {
        return;
      }
      event.preventDefault();
      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }
      this.change(event);
    },
    pointerup: function pointerup(event) {
      var _this2 = this;
      var options = this.options,
        action = this.action,
        pointers = this.pointers;
      var pointer;
      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          pointer = pointers[touch.identifier];
          delete pointers[touch.identifier];
        });
      } else {
        pointer = pointers[event.pointerId || 0];
        delete pointers[event.pointerId || 0];
      }
      if (!action) {
        return;
      }
      event.preventDefault();
      if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
        addClass(this.image, CLASS_TRANSITION);
      }
      this.action = false;

      // Emulate click and double click in touch devices to support backdrop and image zooming (#210).
      if (IS_TOUCH_DEVICE && action !== ACTION_ZOOM && pointer && Date.now() - pointer.timeStamp < 500) {
        clearTimeout(this.clickCanvasTimeout);
        clearTimeout(this.doubleClickImageTimeout);
        if (options.toggleOnDblclick && this.viewed && event.target === this.image) {
          if (this.imageClicked) {
            this.imageClicked = false;

            // This timeout will be cleared later when a native dblclick event is triggering
            this.doubleClickImageTimeout = setTimeout(function () {
              dispatchEvent(_this2.image, EVENT_DBLCLICK, {
                originalEvent: event
              });
            }, 50);
          } else {
            this.imageClicked = true;

            // The default timing of a double click in Windows is 500 ms
            this.doubleClickImageTimeout = setTimeout(function () {
              _this2.imageClicked = false;
            }, 500);
          }
        } else {
          this.imageClicked = false;
          if (options.backdrop && options.backdrop !== 'static' && event.target === this.canvas) {
            // This timeout will be cleared later when a native click event is triggering
            this.clickCanvasTimeout = setTimeout(function () {
              dispatchEvent(_this2.canvas, EVENT_CLICK, {
                originalEvent: event
              });
            }, 50);
          }
        }
      }
    },
    resize: function resize() {
      var _this3 = this;
      if (!this.isShown || this.hiding) {
        return;
      }
      if (this.fulled) {
        this.close();
        this.initBody();
        this.open();
      }
      this.initContainer();
      this.initViewer();
      this.renderViewer();
      this.renderList();
      if (this.viewed) {
        this.initImage(function () {
          _this3.renderImage();
        });
      }
      if (this.played) {
        if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
          this.stop();
          return;
        }
        forEach(this.player.getElementsByTagName('img'), function (image) {
          addListener(image, EVENT_LOAD, _this3.loadImage.bind(_this3), {
            once: true
          });
          dispatchEvent(image, EVENT_LOAD);
        });
      }
    },
    wheel: function wheel(event) {
      var _this4 = this;
      if (!this.viewed) {
        return;
      }
      event.preventDefault();

      // Limit wheel speed to prevent zoom too fast
      if (this.wheeling) {
        return;
      }
      this.wheeling = true;
      setTimeout(function () {
        _this4.wheeling = false;
      }, 50);
      var ratio = Number(this.options.zoomRatio) || 0.1;
      var delta = 1;
      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }
      this.zoom(-delta * ratio, true, null, event);
    }
  };

  var methods = {
    /** Show the viewer (only available in modal mode)
     * @param {boolean} [immediate=false] - Indicates if show the viewer immediately or not.
     * @returns {Viewer} this
     */
    show: function show() {
      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var element = this.element,
        options = this.options;
      if (options.inline || this.showing || this.isShown || this.showing) {
        return this;
      }
      if (!this.ready) {
        this.build();
        if (this.ready) {
          this.show(immediate);
        }
        return this;
      }
      if (isFunction(options.show)) {
        addListener(element, EVENT_SHOW, options.show, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_SHOW) === false || !this.ready) {
        return this;
      }
      if (this.hiding) {
        this.transitioning.abort();
      }
      this.showing = true;
      this.open();
      var viewer = this.viewer;
      removeClass(viewer, CLASS_HIDE);
      viewer.setAttribute('role', 'dialog');
      viewer.setAttribute('aria-labelledby', this.title.id);
      viewer.setAttribute('aria-modal', true);
      viewer.removeAttribute('aria-hidden');
      if (options.transition && !immediate) {
        var shown = this.shown.bind(this);
        this.transitioning = {
          abort: function abort() {
            removeListener(viewer, EVENT_TRANSITION_END, shown);
            removeClass(viewer, CLASS_IN);
          }
        };
        addClass(viewer, CLASS_TRANSITION);

        // Force reflow to enable CSS3 transition
        viewer.initialOffsetWidth = viewer.offsetWidth;
        addListener(viewer, EVENT_TRANSITION_END, shown, {
          once: true
        });
        addClass(viewer, CLASS_IN);
      } else {
        addClass(viewer, CLASS_IN);
        this.shown();
      }
      return this;
    },
    /**
     * Hide the viewer (only available in modal mode)
     * @param {boolean} [immediate=false] - Indicates if hide the viewer immediately or not.
     * @returns {Viewer} this
     */
    hide: function hide() {
      var _this = this;
      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var element = this.element,
        options = this.options;
      if (options.inline || this.hiding || !(this.isShown || this.showing)) {
        return this;
      }
      if (isFunction(options.hide)) {
        addListener(element, EVENT_HIDE, options.hide, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_HIDE) === false) {
        return this;
      }
      if (this.showing) {
        this.transitioning.abort();
      }
      this.hiding = true;
      if (this.played) {
        this.stop();
      } else if (this.viewing) {
        this.viewing.abort();
      }
      var viewer = this.viewer,
        image = this.image;
      var hideImmediately = function hideImmediately() {
        removeClass(viewer, CLASS_IN);
        _this.hidden();
      };
      if (options.transition && !immediate) {
        var onViewerTransitionEnd = function onViewerTransitionEnd(event) {
          // Ignore all propagating `transitionend` events (#275).
          if (event && event.target === viewer) {
            removeListener(viewer, EVENT_TRANSITION_END, onViewerTransitionEnd);
            _this.hidden();
          }
        };
        var onImageTransitionEnd = function onImageTransitionEnd() {
          // In case of show the viewer by `viewer.show(true)` previously (#407).
          if (hasClass(viewer, CLASS_TRANSITION)) {
            addListener(viewer, EVENT_TRANSITION_END, onViewerTransitionEnd);
            removeClass(viewer, CLASS_IN);
          } else {
            hideImmediately();
          }
        };
        this.transitioning = {
          abort: function abort() {
            if (_this.viewed && hasClass(image, CLASS_TRANSITION)) {
              removeListener(image, EVENT_TRANSITION_END, onImageTransitionEnd);
            } else if (hasClass(viewer, CLASS_TRANSITION)) {
              removeListener(viewer, EVENT_TRANSITION_END, onViewerTransitionEnd);
            }
          }
        };

        // In case of hiding the viewer when holding on the image (#255),
        // note that the `CLASS_TRANSITION` class will be removed on pointer down.
        if (this.viewed && hasClass(image, CLASS_TRANSITION)) {
          addListener(image, EVENT_TRANSITION_END, onImageTransitionEnd, {
            once: true
          });
          this.zoomTo(0, false, null, null, true);
        } else {
          onImageTransitionEnd();
        }
      } else {
        hideImmediately();
      }
      return this;
    },
    /**
     * View one of the images with image's index
     * @param {number} index - The index of the image to view.
     * @returns {Viewer} this
     */
    view: function view() {
      var _this2 = this;
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.initialViewIndex;
      index = Number(index) || 0;
      if (this.hiding || this.played || index < 0 || index >= this.length || this.viewed && index === this.index) {
        return this;
      }
      if (!this.isShown) {
        this.index = index;
        return this.show();
      }
      if (this.viewing) {
        this.viewing.abort();
      }
      var element = this.element,
        options = this.options,
        title = this.title,
        canvas = this.canvas;
      var item = this.items[index];
      var img = item.querySelector('img');
      var url = getData(img, 'originalUrl');
      var alt = img.getAttribute('alt');
      var image = document.createElement('img');
      forEach(options.inheritedAttributes, function (name) {
        var value = img.getAttribute(name);
        if (value !== null) {
          image.setAttribute(name, value);
        }
      });
      image.src = url;
      image.alt = alt;
      if (isFunction(options.view)) {
        addListener(element, EVENT_VIEW, options.view, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_VIEW, {
        originalImage: this.images[index],
        index: index,
        image: image
      }) === false || !this.isShown || this.hiding || this.played) {
        return this;
      }
      var activeItem = this.items[this.index];
      if (activeItem) {
        removeClass(activeItem, CLASS_ACTIVE);
        activeItem.removeAttribute('aria-selected');
      }
      addClass(item, CLASS_ACTIVE);
      item.setAttribute('aria-selected', true);
      if (options.focus) {
        item.focus();
      }
      this.image = image;
      this.viewed = false;
      this.index = index;
      this.imageData = {};
      addClass(image, CLASS_INVISIBLE);
      if (options.loading) {
        addClass(canvas, CLASS_LOADING);
      }
      canvas.innerHTML = '';
      canvas.appendChild(image);

      // Center current item
      this.renderList();

      // Clear title
      title.innerHTML = '';

      // Generate title after viewed
      var onViewed = function onViewed() {
        var imageData = _this2.imageData;
        var render = Array.isArray(options.title) ? options.title[1] : options.title;
        title.innerHTML = escapeHTMLEntities(isFunction(render) ? render.call(_this2, image, imageData) : "".concat(alt, " (").concat(imageData.naturalWidth, " \xD7 ").concat(imageData.naturalHeight, ")"));
      };
      var onLoad;
      var onError;
      addListener(element, EVENT_VIEWED, onViewed, {
        once: true
      });
      this.viewing = {
        abort: function abort() {
          removeListener(element, EVENT_VIEWED, onViewed);
          if (image.complete) {
            if (_this2.imageRendering) {
              _this2.imageRendering.abort();
            } else if (_this2.imageInitializing) {
              _this2.imageInitializing.abort();
            }
          } else {
            // Cancel download to save bandwidth.
            image.src = '';
            removeListener(image, EVENT_LOAD, onLoad);
            if (_this2.timeout) {
              clearTimeout(_this2.timeout);
            }
          }
        }
      };
      if (image.complete) {
        this.load();
      } else {
        addListener(image, EVENT_LOAD, onLoad = function onLoad() {
          removeListener(image, EVENT_ERROR, onError);
          _this2.load();
        }, {
          once: true
        });
        addListener(image, EVENT_ERROR, onError = function onError() {
          removeListener(image, EVENT_LOAD, onLoad);
          if (_this2.timeout) {
            clearTimeout(_this2.timeout);
            _this2.timeout = false;
          }
          removeClass(image, CLASS_INVISIBLE);
          if (options.loading) {
            removeClass(_this2.canvas, CLASS_LOADING);
          }
        }, {
          once: true
        });
        if (this.timeout) {
          clearTimeout(this.timeout);
        }

        // Make the image visible if it fails to load within 1s
        this.timeout = setTimeout(function () {
          removeClass(image, CLASS_INVISIBLE);
          _this2.timeout = false;
        }, 1000);
      }
      return this;
    },
    /**
     * View the previous image
     * @param {boolean} [loop=false] - Indicate if view the last one
     * when it is the first one at present.
     * @returns {Viewer} this
     */
    prev: function prev() {
      var loop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var index = this.index - 1;
      if (index < 0) {
        index = loop ? this.length - 1 : 0;
      }
      this.view(index);
      return this;
    },
    /**
     * View the next image
     * @param {boolean} [loop=false] - Indicate if view the first one
     * when it is the last one at present.
     * @returns {Viewer} this
     */
    next: function next() {
      var loop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var maxIndex = this.length - 1;
      var index = this.index + 1;
      if (index > maxIndex) {
        index = loop ? 0 : maxIndex;
      }
      this.view(index);
      return this;
    },
    /**
     * Move the image with relative offsets.
     * @param {number} x - The moving distance in the horizontal direction.
     * @param {number} [y=x] The moving distance in the vertical direction.
     * @returns {Viewer} this
     */
    move: function move(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var imageData = this.imageData;
      this.moveTo(isUndefined(x) ? x : imageData.x + Number(x), isUndefined(y) ? y : imageData.y + Number(y));
      return this;
    },
    /**
     * Move the image to an absolute point.
     * @param {number} x - The new position in the horizontal direction.
     * @param {number} [y=x] - The new position in the vertical direction.
     * @param {Event} [_originalEvent=null] - The original event if any.
     * @returns {Viewer} this
     */
    moveTo: function moveTo(x) {
      var _this3 = this;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var _originalEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var element = this.element,
        options = this.options,
        imageData = this.imageData;
      x = Number(x);
      y = Number(y);
      if (this.viewed && !this.played && options.movable) {
        var oldX = imageData.x;
        var oldY = imageData.y;
        var changed = false;
        if (isNumber(x)) {
          changed = true;
        } else {
          x = oldX;
        }
        if (isNumber(y)) {
          changed = true;
        } else {
          y = oldY;
        }
        if (changed) {
          if (isFunction(options.move)) {
            addListener(element, EVENT_MOVE, options.move, {
              once: true
            });
          }
          if (dispatchEvent(element, EVENT_MOVE, {
            x: x,
            y: y,
            oldX: oldX,
            oldY: oldY,
            originalEvent: _originalEvent
          }) === false) {
            return this;
          }
          imageData.x = x;
          imageData.y = y;
          imageData.left = x;
          imageData.top = y;
          this.moving = true;
          this.renderImage(function () {
            _this3.moving = false;
            if (isFunction(options.moved)) {
              addListener(element, EVENT_MOVED, options.moved, {
                once: true
              });
            }
            dispatchEvent(element, EVENT_MOVED, {
              x: x,
              y: y,
              oldX: oldX,
              oldY: oldY,
              originalEvent: _originalEvent
            }, {
              cancelable: false
            });
          });
        }
      }
      return this;
    },
    /**
     * Rotate the image with a relative degree.
     * @param {number} degree - The rotate degree.
     * @returns {Viewer} this
     */
    rotate: function rotate(degree) {
      this.rotateTo((this.imageData.rotate || 0) + Number(degree));
      return this;
    },
    /**
     * Rotate the image to an absolute degree.
     * @param {number} degree - The rotate degree.
     * @returns {Viewer} this
     */
    rotateTo: function rotateTo(degree) {
      var _this4 = this;
      var element = this.element,
        options = this.options,
        imageData = this.imageData;
      degree = Number(degree);
      if (isNumber(degree) && this.viewed && !this.played && options.rotatable) {
        var oldDegree = imageData.rotate;
        if (isFunction(options.rotate)) {
          addListener(element, EVENT_ROTATE, options.rotate, {
            once: true
          });
        }
        if (dispatchEvent(element, EVENT_ROTATE, {
          degree: degree,
          oldDegree: oldDegree
        }) === false) {
          return this;
        }
        imageData.rotate = degree;
        this.rotating = true;
        this.renderImage(function () {
          _this4.rotating = false;
          if (isFunction(options.rotated)) {
            addListener(element, EVENT_ROTATED, options.rotated, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_ROTATED, {
            degree: degree,
            oldDegree: oldDegree
          }, {
            cancelable: false
          });
        });
      }
      return this;
    },
    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Viewer} this
     */
    scaleX: function scaleX(_scaleX) {
      this.scale(_scaleX, this.imageData.scaleY);
      return this;
    },
    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Viewer} this
     */
    scaleY: function scaleY(_scaleY) {
      this.scale(this.imageData.scaleX, _scaleY);
      return this;
    },
    /**
     * Scale the image.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Viewer} this
     */
    scale: function scale(scaleX) {
      var _this5 = this;
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var element = this.element,
        options = this.options,
        imageData = this.imageData;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);
      if (this.viewed && !this.played && options.scalable) {
        var oldScaleX = imageData.scaleX;
        var oldScaleY = imageData.scaleY;
        var changed = false;
        if (isNumber(scaleX)) {
          changed = true;
        } else {
          scaleX = oldScaleX;
        }
        if (isNumber(scaleY)) {
          changed = true;
        } else {
          scaleY = oldScaleY;
        }
        if (changed) {
          if (isFunction(options.scale)) {
            addListener(element, EVENT_SCALE, options.scale, {
              once: true
            });
          }
          if (dispatchEvent(element, EVENT_SCALE, {
            scaleX: scaleX,
            scaleY: scaleY,
            oldScaleX: oldScaleX,
            oldScaleY: oldScaleY
          }) === false) {
            return this;
          }
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
          this.scaling = true;
          this.renderImage(function () {
            _this5.scaling = false;
            if (isFunction(options.scaled)) {
              addListener(element, EVENT_SCALED, options.scaled, {
                once: true
              });
            }
            dispatchEvent(element, EVENT_SCALED, {
              scaleX: scaleX,
              scaleY: scaleY,
              oldScaleX: oldScaleX,
              oldScaleY: oldScaleY
            }, {
              cancelable: false
            });
          });
        }
      }
      return this;
    },
    /**
     * Zoom the image with a relative ratio.
     * @param {number} ratio - The target ratio.
     * @param {boolean} [showTooltip=false] - Indicates whether to show the tooltip.
     * @param {Object} [pivot] - The pivot point coordinate for zooming.
     * @param {Event} [_originalEvent=null] - The original event if any.
     * @returns {Viewer} this
     */
    zoom: function zoom(ratio) {
      var showTooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var pivot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var _originalEvent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var imageData = this.imageData;
      ratio = Number(ratio);
      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }
      this.zoomTo(imageData.width * ratio / imageData.naturalWidth, showTooltip, pivot, _originalEvent);
      return this;
    },
    /**
     * Zoom the image to an absolute ratio.
     * @param {number} ratio - The target ratio.
     * @param {boolean} [showTooltip] - Indicates whether to show the tooltip.
     * @param {Object} [pivot] - The pivot point coordinate for zooming.
     * @param {Event} [_originalEvent=null] - The original event if any.
     * @param {Event} [_zoomable=false] - Indicates if the current zoom is available or not.
     * @returns {Viewer} this
     */
    zoomTo: function zoomTo(ratio) {
      var _this6 = this;
      var showTooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var pivot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var _originalEvent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var _zoomable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var element = this.element,
        options = this.options,
        pointers = this.pointers,
        imageData = this.imageData;
      var x = imageData.x,
        y = imageData.y,
        width = imageData.width,
        height = imageData.height,
        naturalWidth = imageData.naturalWidth,
        naturalHeight = imageData.naturalHeight;
      ratio = Math.max(0, ratio);
      if (isNumber(ratio) && this.viewed && !this.played && (_zoomable || options.zoomable)) {
        if (!_zoomable) {
          var minZoomRatio = Math.max(0.01, options.minZoomRatio);
          var maxZoomRatio = Math.min(100, options.maxZoomRatio);
          ratio = Math.min(Math.max(ratio, minZoomRatio), maxZoomRatio);
        }
        if (_originalEvent) {
          switch (_originalEvent.type) {
            case 'wheel':
              if (options.zoomRatio >= 0.055 && ratio > 0.95 && ratio < 1.05) {
                ratio = 1;
              }
              break;
            case 'pointermove':
            case 'touchmove':
            case 'mousemove':
              if (ratio > 0.99 && ratio < 1.01) {
                ratio = 1;
              }
              break;
          }
        }
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;
        var offsetWidth = newWidth - width;
        var offsetHeight = newHeight - height;
        var oldRatio = imageData.ratio;
        if (isFunction(options.zoom)) {
          addListener(element, EVENT_ZOOM, options.zoom, {
            once: true
          });
        }
        if (dispatchEvent(element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: oldRatio,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }
        this.zooming = true;
        if (_originalEvent) {
          var offset = getOffset(this.viewer);
          var center = pointers && Object.keys(pointers).length > 0 ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          };

          // Zoom from the triggering point of the event
          imageData.x -= offsetWidth * ((center.pageX - offset.left - x) / width);
          imageData.y -= offsetHeight * ((center.pageY - offset.top - y) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          imageData.x -= offsetWidth * ((pivot.x - x) / width);
          imageData.y -= offsetHeight * ((pivot.y - y) / height);
        } else {
          // Zoom from the center of the image
          imageData.x -= offsetWidth / 2;
          imageData.y -= offsetHeight / 2;
        }
        imageData.left = imageData.x;
        imageData.top = imageData.y;
        imageData.width = newWidth;
        imageData.height = newHeight;
        imageData.oldRatio = oldRatio;
        imageData.ratio = ratio;
        this.renderImage(function () {
          _this6.zooming = false;
          if (isFunction(options.zoomed)) {
            addListener(element, EVENT_ZOOMED, options.zoomed, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_ZOOMED, {
            ratio: ratio,
            oldRatio: oldRatio,
            originalEvent: _originalEvent
          }, {
            cancelable: false
          });
        });
        if (showTooltip) {
          this.tooltip();
        }
      }
      return this;
    },
    /**
     * Play the images
     * @param {boolean|FullscreenOptions} [fullscreen=false] - Indicate if request fullscreen or not.
     * @returns {Viewer} this
     */
    play: function play() {
      var _this7 = this;
      var fullscreen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.isShown || this.played) {
        return this;
      }
      var element = this.element,
        options = this.options;
      if (isFunction(options.play)) {
        addListener(element, EVENT_PLAY, options.play, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_PLAY) === false) {
        return this;
      }
      var player = this.player;
      var onLoad = this.loadImage.bind(this);
      var list = [];
      var total = 0;
      var index = 0;
      this.played = true;
      this.onLoadWhenPlay = onLoad;
      if (fullscreen) {
        this.requestFullscreen(fullscreen);
      }
      addClass(player, CLASS_SHOW);
      forEach(this.items, function (item, i) {
        var img = item.querySelector('img');
        var image = document.createElement('img');
        image.src = getData(img, 'originalUrl');
        image.alt = img.getAttribute('alt');
        image.referrerPolicy = img.referrerPolicy;
        total += 1;
        addClass(image, CLASS_FADE);
        toggleClass(image, CLASS_TRANSITION, options.transition);
        if (hasClass(item, CLASS_ACTIVE)) {
          addClass(image, CLASS_IN);
          index = i;
        }
        list.push(image);
        addListener(image, EVENT_LOAD, onLoad, {
          once: true
        });
        player.appendChild(image);
      });
      if (isNumber(options.interval) && options.interval > 0) {
        var prev = function prev() {
          clearTimeout(_this7.playing.timeout);
          removeClass(list[index], CLASS_IN);
          index -= 1;
          index = index >= 0 ? index : total - 1;
          addClass(list[index], CLASS_IN);
          _this7.playing.timeout = setTimeout(prev, options.interval);
        };
        var next = function next() {
          clearTimeout(_this7.playing.timeout);
          removeClass(list[index], CLASS_IN);
          index += 1;
          index = index < total ? index : 0;
          addClass(list[index], CLASS_IN);
          _this7.playing.timeout = setTimeout(next, options.interval);
        };
        if (total > 1) {
          this.playing = {
            prev: prev,
            next: next,
            timeout: setTimeout(next, options.interval)
          };
        }
      }
      return this;
    },
    // Stop play
    stop: function stop() {
      var _this8 = this;
      if (!this.played) {
        return this;
      }
      var element = this.element,
        options = this.options;
      if (isFunction(options.stop)) {
        addListener(element, EVENT_STOP, options.stop, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_STOP) === false) {
        return this;
      }
      var player = this.player;
      clearTimeout(this.playing.timeout);
      this.playing = false;
      this.played = false;
      forEach(player.getElementsByTagName('img'), function (image) {
        removeListener(image, EVENT_LOAD, _this8.onLoadWhenPlay);
      });
      removeClass(player, CLASS_SHOW);
      player.innerHTML = '';
      this.exitFullscreen();
      return this;
    },
    // Enter modal mode (only available in inline mode)
    full: function full() {
      var _this9 = this;
      var options = this.options,
        viewer = this.viewer,
        image = this.image,
        list = this.list;
      if (!this.isShown || this.played || this.fulled || !options.inline) {
        return this;
      }
      this.fulled = true;
      this.open();
      addClass(this.button, CLASS_FULLSCREEN_EXIT);
      if (options.transition) {
        removeClass(list, CLASS_TRANSITION);
        if (this.viewed) {
          removeClass(image, CLASS_TRANSITION);
        }
      }
      addClass(viewer, CLASS_FIXED);
      viewer.setAttribute('role', 'dialog');
      viewer.setAttribute('aria-labelledby', this.title.id);
      viewer.setAttribute('aria-modal', true);
      viewer.removeAttribute('style');
      setStyle(viewer, {
        zIndex: options.zIndex
      });
      if (options.focus) {
        this.enforceFocus();
      }
      this.initContainer();
      this.viewerData = assign({}, this.containerData);
      this.renderList();
      if (this.viewed) {
        this.initImage(function () {
          _this9.renderImage(function () {
            if (options.transition) {
              setTimeout(function () {
                addClass(image, CLASS_TRANSITION);
                addClass(list, CLASS_TRANSITION);
              }, 0);
            }
          });
        });
      }
      return this;
    },
    // Exit modal mode (only available in inline mode)
    exit: function exit() {
      var _this10 = this;
      var options = this.options,
        viewer = this.viewer,
        image = this.image,
        list = this.list;
      if (!this.isShown || this.played || !this.fulled || !options.inline) {
        return this;
      }
      this.fulled = false;
      this.close();
      removeClass(this.button, CLASS_FULLSCREEN_EXIT);
      if (options.transition) {
        removeClass(list, CLASS_TRANSITION);
        if (this.viewed) {
          removeClass(image, CLASS_TRANSITION);
        }
      }
      if (options.focus) {
        this.clearEnforceFocus();
      }
      viewer.removeAttribute('role');
      viewer.removeAttribute('aria-labelledby');
      viewer.removeAttribute('aria-modal');
      removeClass(viewer, CLASS_FIXED);
      setStyle(viewer, {
        zIndex: options.zIndexInline
      });
      this.viewerData = assign({}, this.parentData);
      this.renderViewer();
      this.renderList();
      if (this.viewed) {
        this.initImage(function () {
          _this10.renderImage(function () {
            if (options.transition) {
              setTimeout(function () {
                addClass(image, CLASS_TRANSITION);
                addClass(list, CLASS_TRANSITION);
              }, 0);
            }
          });
        });
      }
      return this;
    },
    // Show the current ratio of the image with percentage
    tooltip: function tooltip() {
      var _this11 = this;
      var options = this.options,
        tooltipBox = this.tooltipBox,
        imageData = this.imageData;
      if (!this.viewed || this.played || !options.tooltip) {
        return this;
      }
      tooltipBox.textContent = "".concat(Math.round(imageData.ratio * 100), "%");
      if (!this.tooltipping) {
        if (options.transition) {
          if (this.fading) {
            dispatchEvent(tooltipBox, EVENT_TRANSITION_END);
          }
          addClass(tooltipBox, CLASS_SHOW);
          addClass(tooltipBox, CLASS_FADE);
          addClass(tooltipBox, CLASS_TRANSITION);
          tooltipBox.removeAttribute('aria-hidden');

          // Force reflow to enable CSS3 transition
          tooltipBox.initialOffsetWidth = tooltipBox.offsetWidth;
          addClass(tooltipBox, CLASS_IN);
        } else {
          addClass(tooltipBox, CLASS_SHOW);
          tooltipBox.removeAttribute('aria-hidden');
        }
      } else {
        clearTimeout(this.tooltipping);
      }
      this.tooltipping = setTimeout(function () {
        if (options.transition) {
          addListener(tooltipBox, EVENT_TRANSITION_END, function () {
            removeClass(tooltipBox, CLASS_SHOW);
            removeClass(tooltipBox, CLASS_FADE);
            removeClass(tooltipBox, CLASS_TRANSITION);
            tooltipBox.setAttribute('aria-hidden', true);
            _this11.fading = false;
          }, {
            once: true
          });
          removeClass(tooltipBox, CLASS_IN);
          _this11.fading = true;
        } else {
          removeClass(tooltipBox, CLASS_SHOW);
          tooltipBox.setAttribute('aria-hidden', true);
        }
        _this11.tooltipping = false;
      }, 1000);
      return this;
    },
    /**
     * Toggle the image size between its current size and natural size
     * @param {Event} [_originalEvent=null] - The original event if any.
     * @returns {Viewer} this
     */
    toggle: function toggle() {
      var _originalEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (this.imageData.ratio === 1) {
        this.zoomTo(this.imageData.oldRatio, true, null, _originalEvent);
      } else {
        this.zoomTo(1, true, null, _originalEvent);
      }
      return this;
    },
    // Reset the image to its initial state
    reset: function reset() {
      if (this.viewed && !this.played) {
        this.imageData = assign({}, this.initialImageData);
        this.renderImage();
      }
      return this;
    },
    // Update viewer when images changed
    update: function update() {
      var _this12 = this;
      var element = this.element,
        options = this.options,
        isImg = this.isImg;

      // Destroy viewer if the target image was deleted
      if (isImg && !element.parentNode) {
        return this.destroy();
      }
      var images = [];
      forEach(isImg ? [element] : element.querySelectorAll('img'), function (image) {
        if (isFunction(options.filter)) {
          if (options.filter.call(_this12, image)) {
            images.push(image);
          }
        } else if (_this12.getImageURL(image)) {
          images.push(image);
        }
      });
      if (!images.length) {
        return this;
      }
      this.images = images;
      this.length = images.length;
      if (this.ready) {
        var changedIndexes = [];
        forEach(this.items, function (item, i) {
          var img = item.querySelector('img');
          var image = images[i];
          if (image && img) {
            if (image.src !== img.src

            // Title changed (#408)
            || image.alt !== img.alt) {
              changedIndexes.push(i);
            }
          } else {
            changedIndexes.push(i);
          }
        });
        setStyle(this.list, {
          width: 'auto'
        });
        this.initList();
        if (this.isShown) {
          if (this.length) {
            if (this.viewed) {
              var changedIndex = changedIndexes.indexOf(this.index);
              if (changedIndex >= 0) {
                this.viewed = false;
                this.view(Math.max(Math.min(this.index - changedIndex, this.length - 1), 0));
              } else {
                var activeItem = this.items[this.index];

                // Reactivate the current viewing item after reset the list.
                addClass(activeItem, CLASS_ACTIVE);
                activeItem.setAttribute('aria-selected', true);
              }
            }
          } else {
            this.image = null;
            this.viewed = false;
            this.index = 0;
            this.imageData = {};
            this.canvas.innerHTML = '';
            this.title.innerHTML = '';
          }
        }
      } else {
        this.build();
      }
      return this;
    },
    // Destroy the viewer
    destroy: function destroy() {
      var element = this.element,
        options = this.options;
      if (!element[NAMESPACE]) {
        return this;
      }
      this.destroyed = true;
      if (this.ready) {
        if (this.played) {
          this.stop();
        }
        if (options.inline) {
          if (this.fulled) {
            this.exit();
          }
          this.unbind();
        } else if (this.isShown) {
          if (this.viewing) {
            if (this.imageRendering) {
              this.imageRendering.abort();
            } else if (this.imageInitializing) {
              this.imageInitializing.abort();
            }
          }
          if (this.hiding) {
            this.transitioning.abort();
          }
          this.hidden();
        } else if (this.showing) {
          this.transitioning.abort();
          this.hidden();
        }
        this.ready = false;
        this.viewer.parentNode.removeChild(this.viewer);
      } else if (options.inline) {
        if (this.delaying) {
          this.delaying.abort();
        } else if (this.initializing) {
          this.initializing.abort();
        }
      }
      if (!options.inline) {
        removeListener(element, EVENT_CLICK, this.onStart);
      }
      element[NAMESPACE] = undefined;
      return this;
    }
  };

  var others = {
    getImageURL: function getImageURL(image) {
      var url = this.options.url;
      if (isString(url)) {
        url = image.getAttribute(url);
      } else if (isFunction(url)) {
        url = url.call(this, image);
      } else {
        url = '';
      }
      return url;
    },
    enforceFocus: function enforceFocus() {
      var _this = this;
      this.clearEnforceFocus();
      addListener(document, EVENT_FOCUSIN, this.onFocusin = function (event) {
        var viewer = _this.viewer;
        var target = event.target;
        if (target === document || target === viewer || viewer.contains(target)) {
          return;
        }
        while (target) {
          // Avoid conflicts with other modals (#474, #540)
          if (target.getAttribute('tabindex') !== null || target.getAttribute('aria-modal') === 'true') {
            return;
          }
          target = target.parentElement;
        }
        viewer.focus();
      });
    },
    clearEnforceFocus: function clearEnforceFocus() {
      if (this.onFocusin) {
        removeListener(document, EVENT_FOCUSIN, this.onFocusin);
        this.onFocusin = null;
      }
    },
    open: function open() {
      var body = this.body;
      addClass(body, CLASS_OPEN);
      if (this.scrollbarWidth > 0) {
        body.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px");
      }
    },
    close: function close() {
      var body = this.body;
      removeClass(body, CLASS_OPEN);
      if (this.scrollbarWidth > 0) {
        body.style.paddingRight = this.initialBodyPaddingRight;
      }
    },
    shown: function shown() {
      var element = this.element,
        options = this.options,
        viewer = this.viewer;
      this.fulled = true;
      this.isShown = true;
      this.render();
      this.bind();
      this.showing = false;
      if (options.focus) {
        viewer.focus();
        this.enforceFocus();
      }
      if (isFunction(options.shown)) {
        addListener(element, EVENT_SHOWN, options.shown, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_SHOWN) === false) {
        return;
      }
      if (this.ready && this.isShown && !this.hiding) {
        this.view(this.index);
      }
    },
    hidden: function hidden() {
      var element = this.element,
        options = this.options,
        viewer = this.viewer;
      if (options.fucus) {
        this.clearEnforceFocus();
      }
      this.close();
      this.unbind();
      addClass(viewer, CLASS_HIDE);
      viewer.removeAttribute('role');
      viewer.removeAttribute('aria-labelledby');
      viewer.removeAttribute('aria-modal');
      viewer.setAttribute('aria-hidden', true);
      this.resetList();
      this.resetImage();
      this.fulled = false;
      this.viewed = false;
      this.isShown = false;
      this.hiding = false;
      if (!this.destroyed) {
        if (isFunction(options.hidden)) {
          addListener(element, EVENT_HIDDEN, options.hidden, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_HIDDEN, null, {
          cancelable: false
        });
      }
    },
    requestFullscreen: function requestFullscreen(options) {
      var document = this.element.ownerDocument;
      if (this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
        var documentElement = document.documentElement;

        // Element.requestFullscreen()
        if (documentElement.requestFullscreen) {
          // Avoid TypeError when convert `options` to dictionary
          if (isPlainObject(options)) {
            documentElement.requestFullscreen(options);
          } else {
            documentElement.requestFullscreen();
          }
        } else if (documentElement.webkitRequestFullscreen) {
          documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (documentElement.mozRequestFullScreen) {
          documentElement.mozRequestFullScreen();
        } else if (documentElement.msRequestFullscreen) {
          documentElement.msRequestFullscreen();
        }
      }
    },
    exitFullscreen: function exitFullscreen() {
      var document = this.element.ownerDocument;
      if (this.fulled && (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
        // Document.exitFullscreen()
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    },
    change: function change(event) {
      var options = this.options,
        pointers = this.pointers;
      var pointer = pointers[Object.keys(pointers)[0]];

      // In the case of the `pointers` object is empty (#421)
      if (!pointer) {
        return;
      }
      var offsetX = pointer.endX - pointer.startX;
      var offsetY = pointer.endY - pointer.startY;
      switch (this.action) {
        // Move the current image
        case ACTION_MOVE:
          if (offsetX !== 0 || offsetY !== 0) {
            this.pointerMoved = true;
            this.move(offsetX, offsetY, event);
          }
          break;

        // Zoom the current image
        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), false, null, event);
          break;
        case ACTION_SWITCH:
          {
            this.action = 'switched';
            var absoluteOffsetX = Math.abs(offsetX);
            if (absoluteOffsetX > 1 && absoluteOffsetX > Math.abs(offsetY)) {
              // Empty `pointers` as `touchend` event will not be fired after swiped in iOS browsers.
              this.pointers = {};
              if (offsetX > 1) {
                this.prev(options.loop);
              } else if (offsetX < -1) {
                this.next(options.loop);
              }
            }
            break;
          }
      }

      // Override
      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    },
    isSwitchable: function isSwitchable() {
      var imageData = this.imageData,
        viewerData = this.viewerData;
      return this.length > 1 && imageData.x >= 0 && imageData.y >= 0 && imageData.width <= viewerData.width && imageData.height <= viewerData.height;
    }
  };

  var AnotherViewer = WINDOW.Viewer;
  var getUniqueID = function (id) {
    return function () {
      id += 1;
      return id;
    };
  }(-1);
  var Viewer = /*#__PURE__*/function () {
    /**
     * Create a new Viewer.
     * @param {Element} element - The target element for viewing.
     * @param {Object} [options={}] - The configuration options.
     */
    function Viewer(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Viewer);
      if (!element || element.nodeType !== 1) {
        throw new Error('The first argument is required and must be an element.');
      }
      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.action = false;
      this.fading = false;
      this.fulled = false;
      this.hiding = false;
      this.imageClicked = false;
      this.imageData = {};
      this.index = this.options.initialViewIndex;
      this.isImg = false;
      this.isShown = false;
      this.length = 0;
      this.moving = false;
      this.played = false;
      this.playing = false;
      this.pointers = {};
      this.ready = false;
      this.rotating = false;
      this.scaling = false;
      this.showing = false;
      this.timeout = false;
      this.tooltipping = false;
      this.viewed = false;
      this.viewing = false;
      this.wheeling = false;
      this.zooming = false;
      this.pointerMoved = false;
      this.id = getUniqueID();
      this.init();
    }
    _createClass(Viewer, [{
      key: "init",
      value: function init() {
        var _this = this;
        var element = this.element,
          options = this.options;
        if (element[NAMESPACE]) {
          return;
        }
        element[NAMESPACE] = this;

        // The `focus` option requires the `keyboard` option set to `true`.
        if (options.focus && !options.keyboard) {
          options.focus = false;
        }
        var isImg = element.localName === 'img';
        var images = [];
        forEach(isImg ? [element] : element.querySelectorAll('img'), function (image) {
          if (isFunction(options.filter)) {
            if (options.filter.call(_this, image)) {
              images.push(image);
            }
          } else if (_this.getImageURL(image)) {
            images.push(image);
          }
        });
        this.isImg = isImg;
        this.length = images.length;
        this.images = images;
        this.initBody();

        // Override `transition` option if it is not supported
        if (isUndefined(document.createElement(NAMESPACE).style.transition)) {
          options.transition = false;
        }
        if (options.inline) {
          var count = 0;
          var progress = function progress() {
            count += 1;
            if (count === _this.length) {
              var timeout;
              _this.initializing = false;
              _this.delaying = {
                abort: function abort() {
                  clearTimeout(timeout);
                }
              };

              // build asynchronously to keep `this.viewer` is accessible in `ready` event handler.
              timeout = setTimeout(function () {
                _this.delaying = false;
                _this.build();
              }, 0);
            }
          };
          this.initializing = {
            abort: function abort() {
              forEach(images, function (image) {
                if (!image.complete) {
                  removeListener(image, EVENT_LOAD, progress);
                  removeListener(image, EVENT_ERROR, progress);
                }
              });
            }
          };
          forEach(images, function (image) {
            if (image.complete) {
              progress();
            } else {
              var onLoad;
              var onError;
              addListener(image, EVENT_LOAD, onLoad = function onLoad() {
                removeListener(image, EVENT_ERROR, onError);
                progress();
              }, {
                once: true
              });
              addListener(image, EVENT_ERROR, onError = function onError() {
                removeListener(image, EVENT_LOAD, onLoad);
                progress();
              }, {
                once: true
              });
            }
          });
        } else {
          addListener(element, EVENT_CLICK, this.onStart = function (_ref) {
            var target = _ref.target;
            if (target.localName === 'img' && (!isFunction(options.filter) || options.filter.call(_this, target))) {
              _this.view(_this.images.indexOf(target));
            }
          });
        }
      }
    }, {
      key: "build",
      value: function build() {
        if (this.ready) {
          return;
        }
        var element = this.element,
          options = this.options;
        var parent = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var viewer = template.querySelector(".".concat(NAMESPACE, "-container"));
        var title = viewer.querySelector(".".concat(NAMESPACE, "-title"));
        var toolbar = viewer.querySelector(".".concat(NAMESPACE, "-toolbar"));
        var navbar = viewer.querySelector(".".concat(NAMESPACE, "-navbar"));
        var button = viewer.querySelector(".".concat(NAMESPACE, "-button"));
        var canvas = viewer.querySelector(".".concat(NAMESPACE, "-canvas"));
        this.parent = parent;
        this.viewer = viewer;
        this.title = title;
        this.toolbar = toolbar;
        this.navbar = navbar;
        this.button = button;
        this.canvas = canvas;
        this.footer = viewer.querySelector(".".concat(NAMESPACE, "-footer"));
        this.tooltipBox = viewer.querySelector(".".concat(NAMESPACE, "-tooltip"));
        this.player = viewer.querySelector(".".concat(NAMESPACE, "-player"));
        this.list = viewer.querySelector(".".concat(NAMESPACE, "-list"));
        viewer.id = "".concat(NAMESPACE).concat(this.id);
        title.id = "".concat(NAMESPACE, "Title").concat(this.id);
        addClass(title, !options.title ? CLASS_HIDE : getResponsiveClass(Array.isArray(options.title) ? options.title[0] : options.title));
        addClass(navbar, !options.navbar ? CLASS_HIDE : getResponsiveClass(options.navbar));
        toggleClass(button, CLASS_HIDE, !options.button);
        if (options.keyboard) {
          button.setAttribute('tabindex', 0);
        }
        if (options.backdrop) {
          addClass(viewer, "".concat(NAMESPACE, "-backdrop"));
          if (!options.inline && options.backdrop !== 'static') {
            setData(canvas, DATA_ACTION, 'hide');
          }
        }
        if (isString(options.className) && options.className) {
          // In case there are multiple class names
          options.className.split(REGEXP_SPACES).forEach(function (className) {
            addClass(viewer, className);
          });
        }
        if (options.toolbar) {
          var list = document.createElement('ul');
          var custom = isPlainObject(options.toolbar);
          var zoomButtons = BUTTONS.slice(0, 3);
          var rotateButtons = BUTTONS.slice(7, 9);
          var scaleButtons = BUTTONS.slice(9);
          if (!custom) {
            addClass(toolbar, getResponsiveClass(options.toolbar));
          }
          forEach(custom ? options.toolbar : BUTTONS, function (value, index) {
            var deep = custom && isPlainObject(value);
            var name = custom ? hyphenate(index) : value;
            var show = deep && !isUndefined(value.show) ? value.show : value;
            if (!show || !options.zoomable && zoomButtons.indexOf(name) !== -1 || !options.rotatable && rotateButtons.indexOf(name) !== -1 || !options.scalable && scaleButtons.indexOf(name) !== -1) {
              return;
            }
            var size = deep && !isUndefined(value.size) ? value.size : value;
            var click = deep && !isUndefined(value.click) ? value.click : value;
            var item = document.createElement('li');
            if (options.keyboard) {
              item.setAttribute('tabindex', 0);
            }
            item.setAttribute('role', 'button');
            addClass(item, "".concat(NAMESPACE, "-").concat(name));
            if (!isFunction(click)) {
              setData(item, DATA_ACTION, name);
            }
            if (isNumber(show)) {
              addClass(item, getResponsiveClass(show));
            }
            if (['small', 'large'].indexOf(size) !== -1) {
              addClass(item, "".concat(NAMESPACE, "-").concat(size));
            } else if (name === 'play') {
              addClass(item, "".concat(NAMESPACE, "-large"));
            }
            if (isFunction(click)) {
              addListener(item, EVENT_CLICK, click);
            }
            list.appendChild(item);
          });
          toolbar.appendChild(list);
        } else {
          addClass(toolbar, CLASS_HIDE);
        }
        if (!options.rotatable) {
          var rotates = toolbar.querySelectorAll('li[class*="rotate"]');
          addClass(rotates, CLASS_INVISIBLE);
          forEach(rotates, function (rotate) {
            toolbar.appendChild(rotate);
          });
        }
        if (options.inline) {
          addClass(button, CLASS_FULLSCREEN);
          setStyle(viewer, {
            zIndex: options.zIndexInline
          });
          if (window.getComputedStyle(parent).position === 'static') {
            setStyle(parent, {
              position: 'relative'
            });
          }
          parent.insertBefore(viewer, element.nextSibling);
        } else {
          addClass(button, CLASS_CLOSE);
          addClass(viewer, CLASS_FIXED);
          addClass(viewer, CLASS_FADE);
          addClass(viewer, CLASS_HIDE);
          setStyle(viewer, {
            zIndex: options.zIndex
          });
          var container = options.container;
          if (isString(container)) {
            container = element.ownerDocument.querySelector(container);
          }
          if (!container) {
            container = this.body;
          }
          container.appendChild(viewer);
        }
        if (options.inline) {
          this.render();
          this.bind();
          this.isShown = true;
        }
        this.ready = true;
        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }
        if (dispatchEvent(element, EVENT_READY) === false) {
          this.ready = false;
          return;
        }
        if (this.ready && options.inline) {
          this.view(this.index);
        }
      }

      /**
       * Get the no conflict viewer class.
       * @returns {Viewer} The viewer class.
       */
    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Viewer = AnotherViewer;
        return Viewer;
      }

      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */
    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);
    return Viewer;
  }();
  assign(Viewer.prototype, render, events, handlers, methods, others);

  return Viewer;

}));


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "dd40":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueBotUI", function() { return /* reexport */ BotUI; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28d1788d-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BotUI.vue?vue&type=template&id=b0e62b8c&lang=pug
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cb-bot-ui",
    class: _vm.uiClasses
  }, [_c('transition', {
    attrs: {
      "name": "cb-fadeUp"
    }
  }, [_vm.botActive ? _c('div', {
    staticClass: "cb-board"
  }, [_c('BoardHeader', {
    attrs: {
      "bot-title": _vm.optionsMain.botTitle
    },
    on: {
      "close-bot": _vm.botToggle
    }
  }), _c('BoardContent', {
    attrs: {
      "bot-typing": _vm.botTyping,
      "main-data": _vm.messages
    }
  }), _c('BoardAction', {
    attrs: {
      "input-disable": _vm.inputDisable,
      "input-placeholder": _vm.optionsMain.inputPlaceholder,
      "input-disable-placeholder": _vm.optionsMain.inputDisablePlaceholder
    },
    on: {
      "msg-send": _vm.sendMessage
    }
  })], 1) : _vm._e()]), _c('div', {
    staticClass: "cb-bot-bubble"
  }, [_c('button', {
    staticClass: "cb-bubble-btn",
    on: {
      "click": _vm.botToggle
    }
  }, [_vm._t("bubbleButton", function () {
    return [_c('transition', {
      attrs: {
        "name": "cb-scaleUp"
      }
    }, [!_vm.botActive ? _c('BubbleIcon', {
      key: "1",
      staticClass: "cb-bubble-btn-icon"
    }) : _c('CloseIcon', {
      key: "2",
      staticClass: "cb-bubble-btn-icon cb-bubble-btn-icon--close"
    })], 1)];
  })], 2)]), _c('AppStyle', {
    attrs: {
      "options": _vm.optionsMain
    }
  }), _c('div', {
    staticClass: "cb-preload-image"
  }, [_vm.optionsMain.botAvatarImg ? _c('div', {
    staticClass: "cb-msg-avatar__img"
  }) : _vm._e()])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/BotUI.vue?vue&type=template&id=b0e62b8c&lang=pug

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/helpers/event-bus.js

const EventBus = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
/* harmony default export */ var event_bus = (EventBus);
// CONCATENATED MODULE: ./src/config/index.js
/* harmony default export */ var config = ({
  EVENT_OPEN: 'botui-open',
  EVENT_CLOSE: 'botui-close',
  EVENT_TOGGLE: 'botui-toggle'
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28d1788d-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Header.vue?vue&type=template&id=1062cfba&lang=pug
var Headervue_type_template_id_1062cfba_lang_pug_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cb-board-header"
  }, [_vm._t("header", function () {
    return [_c('div', {
      staticClass: "cb-board-header__title"
    }, [_vm._v(_vm._s(_vm.botTitle))])];
  })], 2);
};
var Headervue_type_template_id_1062cfba_lang_pug_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Board/Header.vue?vue&type=template&id=1062cfba&lang=pug

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Header.vue?vue&type=script&lang=js
/* harmony default export */ var Headervue_type_script_lang_js = ({
  props: {
    botTitle: {
      type: String,
      default: 'Chatbot'
    }
  }
});
// CONCATENATED MODULE: ./src/components/Board/Header.vue?vue&type=script&lang=js
 /* harmony default export */ var Board_Headervue_type_script_lang_js = (Headervue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Board/Header.vue





/* normalize component */

var component = normalizeComponent(
  Board_Headervue_type_script_lang_js,
  Headervue_type_template_id_1062cfba_lang_pug_render,
  Headervue_type_template_id_1062cfba_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Header = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28d1788d-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Content.vue?vue&type=template&id=3e66dbe8&lang=pug
var Contentvue_type_template_id_3e66dbe8_lang_pug_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "boardContent",
    staticClass: "cb-board-content"
  }, [_c('div', {
    ref: "boardBubbles",
    staticClass: "cb-board-content__bubbles"
  }, [_vm._l(_vm.mainData, function (item, index) {
    return _c('message-bubble', {
      key: index,
      attrs: {
        "message": item
      }
    });
  }), _vm.botTyping ? _c('div', {
    staticClass: "cb-board-content__bot-typing"
  }, [_vm._t("botTyping", function () {
    return [_c('message-typing')];
  })], 2) : _vm._e()], 2)]);
};
var Contentvue_type_template_id_3e66dbe8_lang_pug_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Board/Content.vue?vue&type=template&id=3e66dbe8&lang=pug

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28d1788d-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/Main.vue?vue&type=template&id=7f282afb&lang=pug
var Mainvue_type_template_id_7f282afb_lang_pug_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cb-msg-bubble",
    class: _vm.bubbleClass
  }, [_vm.message.agent === 'bot' ? _c('div', {
    staticClass: "cb-msg-avatar"
  }, [_c('div', {
    staticClass: "cb-msg-avatar__img"
  }, [_vm._v(" ")])]) : _vm._e(), _vm.componentType ? _c(_vm.componentType, {
    tag: "component",
    attrs: {
      "main-data": _vm.message
    }
  }) : _vm._e(), _vm.message.createdAt ? _c('div', {
    staticClass: "cb-msg-bubble__time"
  }, [_vm._v(_vm._s(_vm.message.createdAt))]) : _vm._e()], 1);
};
var Mainvue_type_template_id_7f282afb_lang_pug_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/MessageBubble/Main.vue?vue&type=template&id=7f282afb&lang=pug

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28d1788d-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/SingleText.vue?vue&type=template&id=5c99949c&lang=pug
var SingleTextvue_type_template_id_5c99949c_lang_pug_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cb-msg-bubble-component cb-msg-bubble-component--single-text"
  }, [_c('div', {
    staticClass: "cb-msg-bubble-component__text"
  }, [_vm._v(_vm._s(_vm.mainData.text))])]);
};
var SingleTextvue_type_template_id_5c99949c_lang_pug_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/MessageBubble/SingleText.vue?vue&type=template&id=5c99949c&lang=pug

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/SingleText.vue?vue&type=script&lang=js
/* harmony default export */ var SingleTextvue_type_script_lang_js = ({
  props: {
    mainData: {
      type: Object
    }
  }
});
// CONCATENATED MODULE: ./src/components/MessageBubble/SingleText.vue?vue&type=script&lang=js
 /* harmony default export */ var MessageBubble_SingleTextvue_type_script_lang_js = (SingleTextvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/MessageBubble/SingleText.vue





/* normalize component */

var SingleText_component = normalizeComponent(
  MessageBubble_SingleTextvue_type_script_lang_js,
  SingleTextvue_type_template_id_5c99949c_lang_pug_render,
  SingleTextvue_type_template_id_5c99949c_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SingleText = (SingleText_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28d1788d-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/SingleImg.vue?vue&type=template&id=1bafc170&lang=pug
var SingleImgvue_type_template_id_1bafc170_lang_pug_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cb-msg-bubble-component"
  }, [_c('div', {
    directives: [{
      name: "viewer",
      rawName: "v-viewer.static",
      value: _vm.viewerOps,
      expression: "viewerOps",
      modifiers: {
        "static": true
      }
    }],
    staticClass: "cb-msg-bubble-component__img"
  }, [_c('img', {
    style: {
      'max-width': '100%',
      'max-height': '100%',
      'object-fit': 'contain'
    },
    attrs: {
      "src": _vm.imgSrc
    }
  })])]);
};
var SingleImgvue_type_template_id_1bafc170_lang_pug_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/MessageBubble/SingleImg.vue?vue&type=template&id=1bafc170&lang=pug

// EXTERNAL MODULE: ./node_modules/viewerjs/dist/viewer.css
var viewer = __webpack_require__("0808");

// EXTERNAL MODULE: ./node_modules/v-viewer/dist/index.es.js
var index_es = __webpack_require__("c71c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/SingleImg.vue?vue&type=script&lang=js


/* harmony default export */ var SingleImgvue_type_script_lang_js = ({
  data() {
    return {
      viewerOps: {
        inline: false,
        button: true,
        navbar: false,
        title: false,
        toolbar: false,
        initialCoverage: 0.5,
        loop: false
      }
    };
  },
  props: {
    mainData: {
      type: Object
    }
  },
  directives: {
    viewer: Object(index_es["a" /* directive */])()
  },
  computed: {
    imgSrc() {
      if (this.mainData.image.url) {
        return this.mainData.image.url;
      } else if (this.mainData.image.base64) {
        return 'data:image/png;base64,' + this.mainData.image.base64;
      } else {
        return '';
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/MessageBubble/SingleImg.vue?vue&type=script&lang=js
 /* harmony default export */ var MessageBubble_SingleImgvue_type_script_lang_js = (SingleImgvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/MessageBubble/SingleImg.vue





/* normalize component */

var SingleImg_component = normalizeComponent(
  MessageBubble_SingleImgvue_type_script_lang_js,
  SingleImgvue_type_template_id_1bafc170_lang_pug_render,
  SingleImgvue_type_template_id_1bafc170_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SingleImg = (SingleImg_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28d1788d-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/ButtonOptions.vue?vue&type=template&id=619f77e5&lang=pug
var ButtonOptionsvue_type_template_id_619f77e5_lang_pug_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cb-msg-bubble-component cb-msg-bubble-component--button-options"
  }, [_c('div', {
    staticClass: "cb-msg-bubble-component__text"
  }, [_vm._v(_vm._s(_vm.mainData.text))]), _c('div', {
    staticClass: "cb-msg-bubble-component__options-wrapper"
  }, _vm._l(_vm.mainData.options, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "cb-mb-button-options__item",
      class: {
        active: _vm.selectedItem === item.value
      }
    }, [item.action === 'postback' ? _c('button', {
      staticClass: "cb-mb-button-options__btn",
      on: {
        "click": function ($event) {
          return _vm.selectOption(item);
        }
      }
    }, [_c('span', [_vm._v(_vm._s(item.text))])]) : _c('a', {
      staticClass: "cb-mb-button-options__btn cb-mb-button-options__url",
      attrs: {
        "target": "_blank",
        "href": item.value
      }
    }, [_c('span', [_vm._v(_vm._s(item.text))])])]);
  }), 0)]);
};
var ButtonOptionsvue_type_template_id_619f77e5_lang_pug_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/MessageBubble/ButtonOptions.vue?vue&type=template&id=619f77e5&lang=pug

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/ButtonOptions.vue?vue&type=script&lang=js

/* harmony default export */ var ButtonOptionsvue_type_script_lang_js = ({
  props: {
    mainData: {
      type: Object
    }
  },
  data() {
    return {
      selectedItem: null
    };
  },
  methods: {
    selectOption(value) {
      this.selectedItem = value;
      event_bus.$emit('select-button-option', value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/MessageBubble/ButtonOptions.vue?vue&type=script&lang=js
 /* harmony default export */ var MessageBubble_ButtonOptionsvue_type_script_lang_js = (ButtonOptionsvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/MessageBubble/ButtonOptions.vue





/* normalize component */

var ButtonOptions_component = normalizeComponent(
  MessageBubble_ButtonOptionsvue_type_script_lang_js,
  ButtonOptionsvue_type_template_id_619f77e5_lang_pug_render,
  ButtonOptionsvue_type_template_id_619f77e5_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ButtonOptions = (ButtonOptions_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/Main.vue?vue&type=script&lang=js



/* harmony default export */ var Mainvue_type_script_lang_js = ({
  components: {
    SingleText: SingleText,
    SingleImg: SingleImg,
    ButtonOptions: ButtonOptions
  },
  props: {
    message: {
      type: Object
    }
  },
  computed: {
    bubbleClass() {
      return this.message.agent === 'bot' ? 'cb-msg-bubble--bot' : 'cb-msg-bubble--user';
    },
    // Define the message type and return the specific component
    componentType() {
      let type = '';
      switch (this.message.type) {
        case 'button':
          type = 'ButtonOptions';
          break;
        case 'image':
          type = 'SingleImg';
          break;
        default:
          type = 'SingleText';
      }
      return type;
    }
  }
});
// CONCATENATED MODULE: ./src/components/MessageBubble/Main.vue?vue&type=script&lang=js
 /* harmony default export */ var MessageBubble_Mainvue_type_script_lang_js = (Mainvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/MessageBubble/Main.vue





/* normalize component */

var Main_component = normalizeComponent(
  MessageBubble_Mainvue_type_script_lang_js,
  Mainvue_type_template_id_7f282afb_lang_pug_render,
  Mainvue_type_template_id_7f282afb_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Main = (Main_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28d1788d-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBubble/Typing.vue?vue&type=template&id=0e743fd8&lang=pug
var Typingvue_type_template_id_0e743fd8_lang_pug_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var Typingvue_type_template_id_0e743fd8_lang_pug_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cb-msg-bubble cb-msg-bubble--bot"
  }, [_c('div', {
    staticClass: "cb-msg-avatar"
  }, [_c('div', {
    staticClass: "cb-msg-avatar__img"
  }, [_vm._v(" ")])]), _c('div', {
    staticClass: "cb-msg-bubble-component cb-msg-bubble-component--typing"
  }, [_c('div', {
    staticClass: "cb-msg-bubble-component__text"
  }, [_c('div', {
    staticClass: "cb-msg-bubble__typing-indicator"
  }, [_c('span')])])])]);
}];

// CONCATENATED MODULE: ./src/components/MessageBubble/Typing.vue?vue&type=template&id=0e743fd8&lang=pug

// CONCATENATED MODULE: ./src/components/MessageBubble/Typing.vue

var script = {}


/* normalize component */

var Typing_component = normalizeComponent(
  script,
  Typingvue_type_template_id_0e743fd8_lang_pug_render,
  Typingvue_type_template_id_0e743fd8_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Typing = (Typing_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Content.vue?vue&type=script&lang=js


/* harmony default export */ var Contentvue_type_script_lang_js = ({
  components: {
    MessageBubble: Main,
    MessageTyping: Typing
  },
  props: {
    mainData: {
      type: Array,
      required: true
    },
    botTyping: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    mainData: function (newVal) {
      this.$nextTick(() => {
        this.updateScroll();
      });
    }
  },
  methods: {
    updateScroll() {
      const contentElm = this.$refs.boardContent;
      const offsetHeight = this.$refs.boardBubbles.offsetHeight;
      contentElm.scrollTop = offsetHeight;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Board/Content.vue?vue&type=script&lang=js
 /* harmony default export */ var Board_Contentvue_type_script_lang_js = (Contentvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Board/Content.vue





/* normalize component */

var Content_component = normalizeComponent(
  Board_Contentvue_type_script_lang_js,
  Contentvue_type_template_id_3e66dbe8_lang_pug_render,
  Contentvue_type_template_id_3e66dbe8_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Content = (Content_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28d1788d-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Action.vue?vue&type=template&id=3cd3245f&lang=pug
var Actionvue_type_template_id_3cd3245f_lang_pug_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cb-board-action",
    class: _vm.actionClass
  }, [_c('div', {
    staticClass: "cb-board-action__wrapper"
  }, [_c('div', {
    staticClass: "cb-board-action__msg-box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.messageText,
      expression: "messageText"
    }],
    ref: "cbMessageInput",
    staticClass: "cb-board-action__input",
    attrs: {
      "type": "text",
      "disabled": _vm.inputDisable,
      "placeholder": _vm.inputPlaceholder
    },
    domProps: {
      "value": _vm.messageText
    },
    on: {
      "keydown": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.sendMessage.apply(null, arguments);
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.messageText = $event.target.value;
      }
    }
  }), _vm.inputDisablePlaceholder && _vm.inputDisable ? _c('div', {
    staticClass: "cb-board-action__disable-text"
  }, [_c('span', [_vm._v(_vm._s(_vm.inputDisablePlaceholder))])]) : _vm._e()]), _c('div', {
    staticClass: "cb-board-action__extra"
  }, [_vm._t("actions"), _c('button', {
    staticClass: "cb-action-item cb-action-item--send",
    on: {
      "click": _vm.sendMessage
    }
  }, [_vm._t("sendButton", function () {
    return [_c('IconSend', {
      staticClass: "cb-action-icon cb-action-icon--send"
    })];
  })], 2)], 2)])]);
};
var Actionvue_type_template_id_3cd3245f_lang_pug_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Board/Action.vue?vue&type=template&id=3cd3245f&lang=pug

// CONCATENATED MODULE: ./src/assets/icons/send.svg
/* harmony default export */ var send = ({
  functional: true,
  render(_h, _vm) {
    const {
      _c,
      _v,
      data,
      children = []
    } = _vm;
    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;
    return _c('svg', {
      class: [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 488.721 488.721"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "d": "M483.589 222.024a51.197 51.197 0 00-23.762-23.762L73.522 11.331C48.074-.998 17.451 9.638 5.122 35.086A51.2 51.2 0 003.669 76.44l67.174 167.902L3.669 412.261c-10.463 26.341 2.409 56.177 28.75 66.639a51.314 51.314 0 0018.712 3.624c7.754 0 15.408-1.75 22.391-5.12l386.304-186.982c25.45-12.326 36.089-42.949 23.763-68.398zM58.657 446.633c-8.484 4.107-18.691.559-22.798-7.925a17.065 17.065 0 01-.481-13.784l65.399-163.516h340.668L58.657 446.633zm42.121-219.358L35.379 63.759a16.64 16.64 0 014.215-18.773 16.537 16.537 0 0119.063-2.884l382.788 185.173H100.778z"
      }
    })]));
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Board/Action.vue?vue&type=script&lang=js

/* harmony default export */ var Actionvue_type_script_lang_js = ({
  components: {
    IconSend: send
  },
  props: {
    inputPlaceholder: {
      type: String
    },
    inputDisablePlaceholder: {
      type: String
    },
    inputDisable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      messageText: null
    };
  },
  computed: {
    actionClass() {
      const actionClasses = [];
      if (this.inputDisable) {
        actionClasses.push('cb-board-action--disabled');
      }
      if (this.messageText) {
        actionClasses.push('cb-board-aciton--typing');
      }

      // TODO: sending

      return actionClasses;
    }
  },
  mounted() {
    this.$refs.cbMessageInput.focus();
  },
  methods: {
    sendMessage() {
      if (this.messageText) {
        this.$emit('msg-send', {
          text: this.messageText
        });
        this.messageText = null;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Board/Action.vue?vue&type=script&lang=js
 /* harmony default export */ var Board_Actionvue_type_script_lang_js = (Actionvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Board/Action.vue





/* normalize component */

var Action_component = normalizeComponent(
  Board_Actionvue_type_script_lang_js,
  Actionvue_type_template_id_3cd3245f_lang_pug_render,
  Actionvue_type_template_id_3cd3245f_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Action = (Action_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28d1788d-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppStyle.vue?vue&type=template&id=7bc00fba&lang=pug
var AppStylevue_type_template_id_7bc00fba_lang_pug_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cb-bot-style",
    staticStyle: {
      "display": "none"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.style)
    }
  });
};
var AppStylevue_type_template_id_7bc00fba_lang_pug_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/AppStyle.vue?vue&type=template&id=7bc00fba&lang=pug

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AppStyle.vue?vue&type=script&lang=js
/* harmony default export */ var AppStylevue_type_script_lang_js = ({
  props: ['options'],
  computed: {
    style() {
      if (!this.options) {
        return '';
      }
      const {
        colorScheme,
        textColor,
        boardContentBg,
        bubbleBtnSize,
        botAvatarImg,
        botAvatarSize,
        inputDisableBg,
        msgBubbleBgBot,
        msgBubbleColorBot,
        msgBubbleBgUser,
        msgBubbleColorUser
      } = this.options;
      const styles = `
<style type="text/css" id="cb-bot-style">
.cb-bubble-btn {
  background-color: ${colorScheme};
  width: ${bubbleBtnSize}px;
  height: ${bubbleBtnSize}px;
}
.cb-bubble-btn-icon {
  fill: ${textColor};
  color: ${textColor};
}
.cb-board {
  bottom: ${bubbleBtnSize}px;
}
.cb-board-header {
  background-color: ${colorScheme};
}
.cb-board-header__title {
  color: ${textColor};
}
.cb-board-content {
  background-color: ${boardContentBg};
}
${botAvatarImg ? `.cb-msg-avatar {
      width: ${botAvatarSize}px;
      height: ${botAvatarSize}px;
    }
    .cb-msg-avatar__img {
      background-image: url(${botAvatarImg});
    }` : ''}
.cb-msg-bubble--bot .cb-msg-bubble-component__text {
  color: ${msgBubbleColorBot};
  background-color: ${msgBubbleBgBot};
}
.cb-msg-bubble__typing-indicator span,
.cb-msg-bubble__typing-indicator::before,
.cb-msg-bubble__typing-indicator::after {
  background-color: ${msgBubbleColorBot};
}
.cb-mb-button-options__btn::before {
  background-color: ${msgBubbleBgUser};
}
.cb-msg-bubble--user .cb-msg-bubble-component__text {
  color: ${msgBubbleColorUser};
  background-color: ${msgBubbleBgUser};
}
.cb-mb-button-options__btn {
  color: ${msgBubbleBgUser};
  border-color: ${msgBubbleBgUser};
}
.cb-mb-button-options__btn:hover {
  color: ${msgBubbleColorUser};
  background-color: ${msgBubbleBgUser};
}
.cb-board-action--disabled::before {
  background-color: ${inputDisableBg};
}
</style>
      `;
      return styles;
    }
  }
});
// CONCATENATED MODULE: ./src/components/AppStyle.vue?vue&type=script&lang=js
 /* harmony default export */ var components_AppStylevue_type_script_lang_js = (AppStylevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/AppStyle.vue





/* normalize component */

var AppStyle_component = normalizeComponent(
  components_AppStylevue_type_script_lang_js,
  AppStylevue_type_template_id_7bc00fba_lang_pug_render,
  AppStylevue_type_template_id_7bc00fba_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AppStyle = (AppStyle_component.exports);
// CONCATENATED MODULE: ./src/assets/icons/bubble.svg
/* harmony default export */ var bubble = ({
  functional: true,
  render(_h, _vm) {
    const {
      _c,
      _v,
      data,
      children = []
    } = _vm;
    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;
    return _c('svg', {
      class: [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "height": "511pt",
        "viewBox": "1 -31 512 511",
        "width": "511pt",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "d": "M128 448.5c-8.836 0-16-7.164-16-16v-80H48c-26.512 0-48-21.492-48-48v-256C0 21.988 21.488.5 48 .5h416c26.512 0 48 21.488 48 48v256c0 26.508-21.488 48-48 48H230.625l-91.313 91.313c-3 3-7.07 4.687-11.312 4.687zm-80-416c-8.836 0-16 7.164-16 16v256c0 8.836 7.164 16 16 16h80c8.836 0 16 7.164 16 16v57.375l68.688-68.688c3-3 7.07-4.687 11.312-4.687h240c8.836 0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm0 0"
      }
    }), _c('path', {
      attrs: {
        "d": "M160 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32zm0 0M352 144.5c-17.672 0-32-14.328-32-32s14.328-32 32-32 32 14.328 32 32-14.328 32-32 32zm0 0M256 288.5c-52.996-.05-95.945-43.004-96-96 0-8.836 7.164-16 16-16s16 7.164 16 16c0 35.348 28.652 64 64 64s64-28.652 64-64c0-8.836 7.164-16 16-16s16 7.164 16 16c-.055 52.996-43.004 95.945-96 96zm0 0"
      }
    })]));
  }
});
// CONCATENATED MODULE: ./src/assets/icons/close.svg
/* harmony default export */ var icons_close = ({
  functional: true,
  render(_h, _vm) {
    const {
      _c,
      _v,
      data,
      children = []
    } = _vm;
    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;
    return _c('svg', {
      class: [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 512.001 512.001"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "d": "M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"
      }
    })]));
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BotUI.vue?vue&type=script&lang=js








/* harmony default export */ var BotUIvue_type_script_lang_js = ({
  name: 'VueBotUI',
  components: {
    BoardHeader: Header,
    BoardContent: Content,
    BoardAction: Action,
    BubbleIcon: bubble,
    CloseIcon: icons_close,
    AppStyle: AppStyle
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    messages: {
      type: Array
    },
    botTyping: {
      type: Boolean,
      default: false
    },
    inputDisable: {
      type: Boolean,
      default: false
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    openDelay: {
      type: Number
    }
  },
  data() {
    return {
      botActive: false,
      defaultOptions: {
        botTitle: 'Chatbot',
        colorScheme: '#1b53d0',
        textColor: '#fff',
        bubbleBtnSize: 56,
        animation: true,
        boardContentBg: '#fff',
        botAvatarSize: 32,
        botAvatarImg: 'http://placehold.it/200x200',
        msgBubbleBgBot: '#f0f0f0',
        msgBubbleColorBot: '#000',
        msgBubbleBgUser: '#4356e0',
        msgBubbleColorUser: '#fff',
        inputPlaceholder: 'Message',
        inputDisableBg: '#fff',
        inputDisablePlaceholder: null
      }
    };
  },
  computed: {
    optionsMain() {
      return {
        ...this.defaultOptions,
        ...this.options
      };
    },
    // Add class to bot ui wrapper
    uiClasses() {
      let classes = [];
      if (this.optionsMain.animation) {
        classes.push('cb-bot-ui--animate');
      }
      return classes;
    }
  },
  created() {
    if (this.isOpen) {
      if (this.openDelay) {
        setTimeout(this.botOpen, this.openDelay);
      } else {
        this.botToggle();
      }
    }
  },
  mounted() {
    document.addEventListener(config.EVENT_OPEN, function () {
      this.botOpen();
    });
    document.addEventListener(config.EVENT_CLOSE, function () {
      this.botClose();
    });
    document.addEventListener(config.EVENT_TOGGLE, function () {
      this.botToggle();
    });
  },
  beforeDestroy() {
    event_bus.$off('select-button-option');
  },
  methods: {
    botOpen() {
      if (!this.botActive) {
        this.botToggle();
      }
    },
    botClose() {
      if (this.botActive) {
        this.botToggle();
      }
    },
    botToggle() {
      this.botActive = !this.botActive;
      if (this.botActive) {
        event_bus.$on('select-button-option', this.selectOption);
        this.$emit('init');
      } else {
        event_bus.$off('select-button-option');
        this.$emit('destroy');
      }
    },
    sendMessage(value) {
      this.$emit('msg-send', value);
    },
    selectOption(value) {
      this.$emit('msg-send', value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BotUI.vue?vue&type=script&lang=js
 /* harmony default export */ var components_BotUIvue_type_script_lang_js = (BotUIvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/assets/scss/_app.scss?vue&type=style&index=0&prod&lang=scss&external
var _appvue_type_style_index_0_prod_lang_scss_external = __webpack_require__("0fce");

// CONCATENATED MODULE: ./src/components/BotUI.vue






/* normalize component */

var BotUI_component = normalizeComponent(
  components_BotUIvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BotUI = (BotUI_component.exports);
// CONCATENATED MODULE: ./src/vue-chatbot.js

const Plugin = {
  install(Vue, options) {
    Vue.component('VueBotUI', BotUI);
    if (options) {
      // console.log('options', options)
    }
  }
};
/* harmony default export */ var vue_chatbot = (Plugin);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vue_chatbot);



/***/ })

/******/ });