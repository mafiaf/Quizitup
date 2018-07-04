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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/button.ts":
/*!***********************!*\
  !*** ./src/button.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button(path, x, y, w, h, onClick) {
        var texture = PIXI.Texture.fromImage(path);
        this.button = new PIXI.Sprite(texture);
        this.button.buttonMode = true;
        this.button.x = x;
        this.button.y = y;
        this.button.width = w;
        this.button.height = h;
        this.button.interactive = true;
        this.button.on("pointerdown", function () {
            onClick();
        });
    }
    Button.prototype.getForStage = function () {
        return this.button;
    };
    return Button;
}());
exports.Button = Button;


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var start_scene_1 = __webpack_require__(/*! ./start-scene */ "./src/start-scene.ts");
var question_scene_1 = __webpack_require__(/*! ./question-scene */ "./src/question-scene.ts");
var util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
var Game = /** @class */ (function () {
    function Game() {
        this.state = {
            currentScene: "start",
            points: 0,
        };
        this.app = new PIXI.Application({
            width: util_1.gameOptions.width,
            height: util_1.gameOptions.height,
            backgroundColor: 0xcfd9df
        });
        this.scenes = {
            "start": new start_scene_1.StartScene(this.state),
            "questions": new question_scene_1.QuestionScene(this.state)
        };
    }
    Game.prototype.start = function () {
        document.body.appendChild(this.app.view);
        this.render();
    };
    Game.prototype.render = function () {
        this.app.stage.removeChildren();
        var scene = this.scenes[this.state.currentScene];
        scene.draw(this.app);
        requestAnimationFrame(this.render.bind(this));
    };
    return Game;
}());
exports.Game = Game;
var game = new Game();
game.start();


/***/ }),

/***/ "./src/question-scene.ts":
/*!*******************************!*\
  !*** ./src/question-scene.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QuestionScene = /** @class */ (function () {
    function QuestionScene(state) {
        this.state = state;
        // center start button in middle of screen
        this.question = new PIXI.Text("What movie has the quote 'this is sparta'", {
            align: "center"
        });
    }
    QuestionScene.prototype.draw = function (app) {
        app.stage.addChild(this.question);
    };
    return QuestionScene;
}());
exports.QuestionScene = QuestionScene;


/***/ }),

/***/ "./src/start-button.ts":
/*!*****************************!*\
  !*** ./src/start-button.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = __webpack_require__(/*! ./button */ "./src/button.ts");
var StartButton = /** @class */ (function (_super) {
    __extends(StartButton, _super);
    function StartButton(x, y, onClick) {
        return _super.call(this, "images/button-start.png", x, y, 150, 60, onClick) || this;
    }
    return StartButton;
}(button_1.Button));
exports.StartButton = StartButton;


/***/ }),

/***/ "./src/start-scene.ts":
/*!****************************!*\
  !*** ./src/start-scene.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var start_button_1 = __webpack_require__(/*! ./start-button */ "./src/start-button.ts");
var util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
var StartScene = /** @class */ (function () {
    function StartScene(state) {
        this.state = state;
        // center start button in middle of screen
        this.startBtn = new start_button_1.StartButton(util_1.gameOptions.centerWidth - 100, util_1.gameOptions.centerHeight, this.onStartClick.bind(this));
    }
    StartScene.prototype.onStartClick = function () {
        this.state.currentScene = "questions";
        console.log("start game");
    };
    StartScene.prototype.draw = function (app) {
        app.stage.addChild(this.startBtn.getForStage());
    };
    return StartScene;
}());
exports.StartScene = StartScene;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.gameOptions = {
    width: 700,
    height: 500,
    centerWidth: 700 / 2,
    centerHeight: 500 / 2
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb24tc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXJ0LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnQtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQnV0dG9uKHBhdGgsIHgsIHksIHcsIGgsIG9uQ2xpY2spIHtcclxuICAgICAgICB2YXIgdGV4dHVyZSA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UocGF0aCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5idXR0b24ueCA9IHg7XHJcbiAgICAgICAgdGhpcy5idXR0b24ueSA9IHk7XHJcbiAgICAgICAgdGhpcy5idXR0b24ud2lkdGggPSB3O1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmhlaWdodCA9IGg7XHJcbiAgICAgICAgdGhpcy5idXR0b24uaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLm9uKFwicG9pbnRlcmRvd25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBvbkNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBCdXR0b24ucHJvdG90eXBlLmdldEZvclN0YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQnV0dG9uO1xyXG59KCkpO1xyXG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHN0YXJ0X3NjZW5lXzEgPSByZXF1aXJlKFwiLi9zdGFydC1zY2VuZVwiKTtcclxudmFyIHF1ZXN0aW9uX3NjZW5lXzEgPSByZXF1aXJlKFwiLi9xdWVzdGlvbi1zY2VuZVwiKTtcclxudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50U2NlbmU6IFwic3RhcnRcIixcclxuICAgICAgICAgICAgcG9pbnRzOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih7XHJcbiAgICAgICAgICAgIHdpZHRoOiB1dGlsXzEuZ2FtZU9wdGlvbnMud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdXRpbF8xLmdhbWVPcHRpb25zLmhlaWdodCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweGNmZDlkZlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0ge1xyXG4gICAgICAgICAgICBcInN0YXJ0XCI6IG5ldyBzdGFydF9zY2VuZV8xLlN0YXJ0U2NlbmUodGhpcy5zdGF0ZSksXHJcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IG5ldyBxdWVzdGlvbl9zY2VuZV8xLlF1ZXN0aW9uU2NlbmUodGhpcy5zdGF0ZSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgR2FtZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFwcC52aWV3KTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFwcC5zdGFnZS5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciBzY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuc3RhdGUuY3VycmVudFNjZW5lXTtcclxuICAgICAgICBzY2VuZS5kcmF3KHRoaXMuYXBwKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuR2FtZSA9IEdhbWU7XHJcbnZhciBnYW1lID0gbmV3IEdhbWUoKTtcclxuZ2FtZS5zdGFydCgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUXVlc3Rpb25TY2VuZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFF1ZXN0aW9uU2NlbmUoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgLy8gY2VudGVyIHN0YXJ0IGJ1dHRvbiBpbiBtaWRkbGUgb2Ygc2NyZWVuXHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IG5ldyBQSVhJLlRleHQoXCJXaGF0IG1vdmllIGhhcyB0aGUgcXVvdGUgJ3RoaXMgaXMgc3BhcnRhJ1wiLCB7XHJcbiAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBRdWVzdGlvblNjZW5lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGFwcCkge1xyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLnF1ZXN0aW9uKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUXVlc3Rpb25TY2VuZTtcclxufSgpKTtcclxuZXhwb3J0cy5RdWVzdGlvblNjZW5lID0gUXVlc3Rpb25TY2VuZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBidXR0b25fMSA9IHJlcXVpcmUoXCIuL2J1dHRvblwiKTtcclxudmFyIFN0YXJ0QnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFN0YXJ0QnV0dG9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU3RhcnRCdXR0b24oeCwgeSwgb25DbGljaykge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBcImltYWdlcy9idXR0b24tc3RhcnQucG5nXCIsIHgsIHksIDE1MCwgNjAsIG9uQ2xpY2spIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RhcnRCdXR0b247XHJcbn0oYnV0dG9uXzEuQnV0dG9uKSk7XHJcbmV4cG9ydHMuU3RhcnRCdXR0b24gPSBTdGFydEJ1dHRvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHN0YXJ0X2J1dHRvbl8xID0gcmVxdWlyZShcIi4vc3RhcnQtYnV0dG9uXCIpO1xyXG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxudmFyIFN0YXJ0U2NlbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdGFydFNjZW5lKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIC8vIGNlbnRlciBzdGFydCBidXR0b24gaW4gbWlkZGxlIG9mIHNjcmVlblxyXG4gICAgICAgIHRoaXMuc3RhcnRCdG4gPSBuZXcgc3RhcnRfYnV0dG9uXzEuU3RhcnRCdXR0b24odXRpbF8xLmdhbWVPcHRpb25zLmNlbnRlcldpZHRoIC0gMTAwLCB1dGlsXzEuZ2FtZU9wdGlvbnMuY2VudGVySGVpZ2h0LCB0aGlzLm9uU3RhcnRDbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIFN0YXJ0U2NlbmUucHJvdG90eXBlLm9uU3RhcnRDbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRTY2VuZSA9IFwicXVlc3Rpb25zXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCBnYW1lXCIpO1xyXG4gICAgfTtcclxuICAgIFN0YXJ0U2NlbmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoYXBwKSB7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuc3RhcnRCdG4uZ2V0Rm9yU3RhZ2UoKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0YXJ0U2NlbmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU3RhcnRTY2VuZSA9IFN0YXJ0U2NlbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2FtZU9wdGlvbnMgPSB7XHJcbiAgICB3aWR0aDogNzAwLFxyXG4gICAgaGVpZ2h0OiA1MDAsXHJcbiAgICBjZW50ZXJXaWR0aDogNzAwIC8gMixcclxuICAgIGNlbnRlckhlaWdodDogNTAwIC8gMlxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9