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

/***/ "./src/end-scene.ts":
/*!**************************!*\
  !*** ./src/end-scene.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reset_button_1 = __webpack_require__(/*! ./reset-button */ "./src/reset-button.ts");
var util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
var EndScene = /** @class */ (function () {
    function EndScene(state) {
        this.state = state;
        // center start button in middle of screen
        this.resetBtn = new reset_button_1.ResetButton(util_1.gameOptions.centerWidth - 100, util_1.gameOptions.centerHeight, this.onStartClick.bind(this));
    }
    EndScene.prototype.onStartClick = function () {
        this.state.currentScene = "start";
        this.state.points = 0;
        console.log("restart game");
    };
    EndScene.prototype.draw = function (app) {
        app.stage.addChild(this.resetBtn.getForStage());
    };
    return EndScene;
}());
exports.EndScene = EndScene;


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
var end_scene_1 = __webpack_require__(/*! ./end-scene */ "./src/end-scene.ts");
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
            "questions": new question_scene_1.QuestionScene(this.state),
            "end": new end_scene_1.EndScene(this.state)
        };
        this.score = new PIXI.Text("score: 0", { fontSize: 25 });
        this.score.x = util_1.gameOptions.width - 200;
    }
    Game.prototype.start = function () {
        document.body.appendChild(this.app.view);
        this.render();
    };
    Game.prototype.render = function () {
        this.app.stage.removeChildren();
        var scene = this.scenes[this.state.currentScene];
        // only show score when game starts, not on start scene
        if (this.state.currentScene !== "start") {
            this.score.text = "score: " + this.state.points;
            this.app.stage.addChild(this.score);
        }
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
var question_1 = __webpack_require__(/*! ./question */ "./src/question.ts");
var util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
var QuestionScene = /** @class */ (function () {
    function QuestionScene(state) {
        // store the main game state currentScene, points
        this.state = state;
        // create a placeholder for the question to be asked
        this.question = new PIXI.Text("", {
            align: "center",
            fontSize: 20
        });
        this.question.x = util_1.gameOptions.centerWidth - 280;
        this.question.y = util_1.gameOptions.centerHeight - 150;
        // bind this to the function
        this.onAnswerClick = this.onAnswerClick.bind(this);
        // store all questions in array
        this.questions = [
            new question_1.Question("What movie has the quote 'this is sparta'", ["Bee Movie", "300", "Infinity wars"], 1, this.onAnswerClick),
            new question_1.Question("What movie quotes 'I'm gonna make him an offer he can't refuse'", ["The Godfather", "Fornite", "Iron man"], 0, this.onAnswerClick),
        ];
        // get first question
        this.questionIndex = 0;
    }
    QuestionScene.prototype.onAnswerClick = function (isCorrect) {
        if (isCorrect) {
            // if the answer is correct add 10 points
            this.state.points = this.state.points + 10;
        }
        else {
            // if the answer is wrong substract 5 points;
            this.state.points = this.state.points - 5;
        }
        // check if this is the last question in the array
        if (this.questions.length === this.questionIndex + 1) {
            // set the scene to the ending since all questions are answered
            this.state.currentScene = "end";
            this.questionIndex = 0;
        }
        else {
            // go on to next question
            this.questionIndex = this.questionIndex + 1;
        }
    };
    QuestionScene.prototype.draw = function (app) {
        var currentQuestion = this.questions[this.questionIndex];
        this.question.text = currentQuestion.question;
        app.stage.addChild(this.question);
        var minHeight = 10;
        for (var _i = 0, _a = currentQuestion.answers; _i < _a.length; _i++) {
            var answer = _a[_i];
            answer.x = util_1.gameOptions.centerWidth - 100;
            answer.y = util_1.gameOptions.centerHeight - minHeight;
            // add 40 more pixels so the answers wont be on top of eachother
            minHeight = minHeight + 40;
            // add answer to stage
            app.stage.addChild(answer);
        }
    };
    return QuestionScene;
}());
exports.QuestionScene = QuestionScene;


/***/ }),

/***/ "./src/question.ts":
/*!*************************!*\
  !*** ./src/question.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Question = /** @class */ (function () {
    function Question(question, answers, correctAnswer, onAnswerClick) {
        var _this = this;
        this.question = question;
        this.correctAnswer = answers[correctAnswer];
        this.answers = [];
        var _loop_1 = function (answer) {
            var text = new PIXI.Text(answer);
            text.interactive = true;
            text.buttonMode = true;
            text.on("click", function () {
                onAnswerClick(answer === _this.correctAnswer);
            });
            this_1.answers.push(text);
        };
        var this_1 = this;
        for (var _i = 0, answers_1 = answers; _i < answers_1.length; _i++) {
            var answer = answers_1[_i];
            _loop_1(answer);
        }
    }
    return Question;
}());
exports.Question = Question;


/***/ }),

/***/ "./src/reset-button.ts":
/*!*****************************!*\
  !*** ./src/reset-button.ts ***!
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
var ResetButton = /** @class */ (function (_super) {
    __extends(ResetButton, _super);
    function ResetButton(x, y, onClick) {
        return _super.call(this, "images/button-reset.png", x, y, 150, 60, onClick) || this;
    }
    return ResetButton;
}(button_1.Button));
exports.ResetButton = ResetButton;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5kLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbi1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc2V0LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhcnQtYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGFydC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGVBQWU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGdCQUFnQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsdUJBQXVCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQnV0dG9uKHBhdGgsIHgsIHksIHcsIGgsIG9uQ2xpY2spIHtcclxuICAgICAgICB2YXIgdGV4dHVyZSA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UocGF0aCk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5idXR0b24ueCA9IHg7XHJcbiAgICAgICAgdGhpcy5idXR0b24ueSA9IHk7XHJcbiAgICAgICAgdGhpcy5idXR0b24ud2lkdGggPSB3O1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmhlaWdodCA9IGg7XHJcbiAgICAgICAgdGhpcy5idXR0b24uaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLm9uKFwicG9pbnRlcmRvd25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBvbkNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBCdXR0b24ucHJvdG90eXBlLmdldEZvclN0YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQnV0dG9uO1xyXG59KCkpO1xyXG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJlc2V0X2J1dHRvbl8xID0gcmVxdWlyZShcIi4vcmVzZXQtYnV0dG9uXCIpO1xyXG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxudmFyIEVuZFNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRW5kU2NlbmUoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgLy8gY2VudGVyIHN0YXJ0IGJ1dHRvbiBpbiBtaWRkbGUgb2Ygc2NyZWVuXHJcbiAgICAgICAgdGhpcy5yZXNldEJ0biA9IG5ldyByZXNldF9idXR0b25fMS5SZXNldEJ1dHRvbih1dGlsXzEuZ2FtZU9wdGlvbnMuY2VudGVyV2lkdGggLSAxMDAsIHV0aWxfMS5nYW1lT3B0aW9ucy5jZW50ZXJIZWlnaHQsIHRoaXMub25TdGFydENsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgRW5kU2NlbmUucHJvdG90eXBlLm9uU3RhcnRDbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRTY2VuZSA9IFwic3RhcnRcIjtcclxuICAgICAgICB0aGlzLnN0YXRlLnBvaW50cyA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN0YXJ0IGdhbWVcIik7XHJcbiAgICB9O1xyXG4gICAgRW5kU2NlbmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoYXBwKSB7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMucmVzZXRCdG4uZ2V0Rm9yU3RhZ2UoKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEVuZFNjZW5lO1xyXG59KCkpO1xyXG5leHBvcnRzLkVuZFNjZW5lID0gRW5kU2NlbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzdGFydF9zY2VuZV8xID0gcmVxdWlyZShcIi4vc3RhcnQtc2NlbmVcIik7XHJcbnZhciBxdWVzdGlvbl9zY2VuZV8xID0gcmVxdWlyZShcIi4vcXVlc3Rpb24tc2NlbmVcIik7XHJcbnZhciBlbmRfc2NlbmVfMSA9IHJlcXVpcmUoXCIuL2VuZC1zY2VuZVwiKTtcclxudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50U2NlbmU6IFwic3RhcnRcIixcclxuICAgICAgICAgICAgcG9pbnRzOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih7XHJcbiAgICAgICAgICAgIHdpZHRoOiB1dGlsXzEuZ2FtZU9wdGlvbnMud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdXRpbF8xLmdhbWVPcHRpb25zLmhlaWdodCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweGNmZDlkZlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0ge1xyXG4gICAgICAgICAgICBcInN0YXJ0XCI6IG5ldyBzdGFydF9zY2VuZV8xLlN0YXJ0U2NlbmUodGhpcy5zdGF0ZSksXHJcbiAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IG5ldyBxdWVzdGlvbl9zY2VuZV8xLlF1ZXN0aW9uU2NlbmUodGhpcy5zdGF0ZSksXHJcbiAgICAgICAgICAgIFwiZW5kXCI6IG5ldyBlbmRfc2NlbmVfMS5FbmRTY2VuZSh0aGlzLnN0YXRlKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IG5ldyBQSVhJLlRleHQoXCJzY29yZTogMFwiLCB7IGZvbnRTaXplOiAyNSB9KTtcclxuICAgICAgICB0aGlzLnNjb3JlLnggPSB1dGlsXzEuZ2FtZU9wdGlvbnMud2lkdGggLSAyMDA7XHJcbiAgICB9XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYXBwLnZpZXcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHNjZW5lID0gdGhpcy5zY2VuZXNbdGhpcy5zdGF0ZS5jdXJyZW50U2NlbmVdO1xyXG4gICAgICAgIC8vIG9ubHkgc2hvdyBzY29yZSB3aGVuIGdhbWUgc3RhcnRzLCBub3Qgb24gc3RhcnQgc2NlbmVcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U2NlbmUgIT09IFwic3RhcnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlLnRleHQgPSBcInNjb3JlOiBcIiArIHRoaXMuc3RhdGUucG9pbnRzO1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLnNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NlbmUuZHJhdyh0aGlzLmFwcCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lO1xyXG59KCkpO1xyXG5leHBvcnRzLkdhbWUgPSBHYW1lO1xyXG52YXIgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbmdhbWUuc3RhcnQoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHF1ZXN0aW9uXzEgPSByZXF1aXJlKFwiLi9xdWVzdGlvblwiKTtcclxudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcbnZhciBRdWVzdGlvblNjZW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUXVlc3Rpb25TY2VuZShzdGF0ZSkge1xyXG4gICAgICAgIC8vIHN0b3JlIHRoZSBtYWluIGdhbWUgc3RhdGUgY3VycmVudFNjZW5lLCBwb2ludHNcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgcGxhY2Vob2xkZXIgZm9yIHRoZSBxdWVzdGlvbiB0byBiZSBhc2tlZFxyXG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBuZXcgUElYSS5UZXh0KFwiXCIsIHtcclxuICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb24ueCA9IHV0aWxfMS5nYW1lT3B0aW9ucy5jZW50ZXJXaWR0aCAtIDI4MDtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uLnkgPSB1dGlsXzEuZ2FtZU9wdGlvbnMuY2VudGVySGVpZ2h0IC0gMTUwO1xyXG4gICAgICAgIC8vIGJpbmQgdGhpcyB0byB0aGUgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLm9uQW5zd2VyQ2xpY2sgPSB0aGlzLm9uQW5zd2VyQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBzdG9yZSBhbGwgcXVlc3Rpb25zIGluIGFycmF5XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBxdWVzdGlvbl8xLlF1ZXN0aW9uKFwiV2hhdCBtb3ZpZSBoYXMgdGhlIHF1b3RlICd0aGlzIGlzIHNwYXJ0YSdcIiwgW1wiQmVlIE1vdmllXCIsIFwiMzAwXCIsIFwiSW5maW5pdHkgd2Fyc1wiXSwgMSwgdGhpcy5vbkFuc3dlckNsaWNrKSxcclxuICAgICAgICAgICAgbmV3IHF1ZXN0aW9uXzEuUXVlc3Rpb24oXCJXaGF0IG1vdmllIHF1b3RlcyAnSSdtIGdvbm5hIG1ha2UgaGltIGFuIG9mZmVyIGhlIGNhbid0IHJlZnVzZSdcIiwgW1wiVGhlIEdvZGZhdGhlclwiLCBcIkZvcm5pdGVcIiwgXCJJcm9uIG1hblwiXSwgMCwgdGhpcy5vbkFuc3dlckNsaWNrKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vIGdldCBmaXJzdCBxdWVzdGlvblxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25JbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICBRdWVzdGlvblNjZW5lLnByb3RvdHlwZS5vbkFuc3dlckNsaWNrID0gZnVuY3Rpb24gKGlzQ29ycmVjdCkge1xyXG4gICAgICAgIGlmIChpc0NvcnJlY3QpIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGFuc3dlciBpcyBjb3JyZWN0IGFkZCAxMCBwb2ludHNcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wb2ludHMgPSB0aGlzLnN0YXRlLnBvaW50cyArIDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGFuc3dlciBpcyB3cm9uZyBzdWJzdHJhY3QgNSBwb2ludHM7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucG9pbnRzID0gdGhpcy5zdGF0ZS5wb2ludHMgLSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGlzIHRoZSBsYXN0IHF1ZXN0aW9uIGluIHRoZSBhcnJheVxyXG4gICAgICAgIGlmICh0aGlzLnF1ZXN0aW9ucy5sZW5ndGggPT09IHRoaXMucXVlc3Rpb25JbmRleCArIDEpIHtcclxuICAgICAgICAgICAgLy8gc2V0IHRoZSBzY2VuZSB0byB0aGUgZW5kaW5nIHNpbmNlIGFsbCBxdWVzdGlvbnMgYXJlIGFuc3dlcmVkXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFNjZW5lID0gXCJlbmRcIjtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGdvIG9uIHRvIG5leHQgcXVlc3Rpb25cclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkluZGV4ID0gdGhpcy5xdWVzdGlvbkluZGV4ICsgMTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUXVlc3Rpb25TY2VuZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChhcHApIHtcclxuICAgICAgICB2YXIgY3VycmVudFF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbkluZGV4XTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uLnRleHQgPSBjdXJyZW50UXVlc3Rpb24ucXVlc3Rpb247XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMucXVlc3Rpb24pO1xyXG4gICAgICAgIHZhciBtaW5IZWlnaHQgPSAxMDtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gY3VycmVudFF1ZXN0aW9uLmFuc3dlcnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBhbnN3ZXIgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIGFuc3dlci54ID0gdXRpbF8xLmdhbWVPcHRpb25zLmNlbnRlcldpZHRoIC0gMTAwO1xyXG4gICAgICAgICAgICBhbnN3ZXIueSA9IHV0aWxfMS5nYW1lT3B0aW9ucy5jZW50ZXJIZWlnaHQgLSBtaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIGFkZCA0MCBtb3JlIHBpeGVscyBzbyB0aGUgYW5zd2VycyB3b250IGJlIG9uIHRvcCBvZiBlYWNob3RoZXJcclxuICAgICAgICAgICAgbWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgNDA7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhbnN3ZXIgdG8gc3RhZ2VcclxuICAgICAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKGFuc3dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBRdWVzdGlvblNjZW5lO1xyXG59KCkpO1xyXG5leHBvcnRzLlF1ZXN0aW9uU2NlbmUgPSBRdWVzdGlvblNjZW5lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUXVlc3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBRdWVzdGlvbihxdWVzdGlvbiwgYW5zd2VycywgY29ycmVjdEFuc3dlciwgb25BbnN3ZXJDbGljaykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEFuc3dlciA9IGFuc3dlcnNbY29ycmVjdEFuc3dlcl07XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJzID0gW107XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFBJWEkuVGV4dChhbnN3ZXIpO1xyXG4gICAgICAgICAgICB0ZXh0LmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGV4dC5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGV4dC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG9uQW5zd2VyQ2xpY2soYW5zd2VyID09PSBfdGhpcy5jb3JyZWN0QW5zd2VyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXNfMS5hbnN3ZXJzLnB1c2godGV4dCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdGhpc18xID0gdGhpcztcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGFuc3dlcnNfMSA9IGFuc3dlcnM7IF9pIDwgYW5zd2Vyc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgYW5zd2VyID0gYW5zd2Vyc18xW19pXTtcclxuICAgICAgICAgICAgX2xvb3BfMShhbnN3ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBRdWVzdGlvbjtcclxufSgpKTtcclxuZXhwb3J0cy5RdWVzdGlvbiA9IFF1ZXN0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vYnV0dG9uXCIpO1xyXG52YXIgUmVzZXRCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUmVzZXRCdXR0b24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSZXNldEJ1dHRvbih4LCB5LCBvbkNsaWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIFwiaW1hZ2VzL2J1dHRvbi1yZXNldC5wbmdcIiwgeCwgeSwgMTUwLCA2MCwgb25DbGljaykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNldEJ1dHRvbjtcclxufShidXR0b25fMS5CdXR0b24pKTtcclxuZXhwb3J0cy5SZXNldEJ1dHRvbiA9IFJlc2V0QnV0dG9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vYnV0dG9uXCIpO1xyXG52YXIgU3RhcnRCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU3RhcnRCdXR0b24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTdGFydEJ1dHRvbih4LCB5LCBvbkNsaWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIFwiaW1hZ2VzL2J1dHRvbi1zdGFydC5wbmdcIiwgeCwgeSwgMTUwLCA2MCwgb25DbGljaykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBTdGFydEJ1dHRvbjtcclxufShidXR0b25fMS5CdXR0b24pKTtcclxuZXhwb3J0cy5TdGFydEJ1dHRvbiA9IFN0YXJ0QnV0dG9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc3RhcnRfYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9zdGFydC1idXR0b25cIik7XHJcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xyXG52YXIgU3RhcnRTY2VuZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0YXJ0U2NlbmUoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgLy8gY2VudGVyIHN0YXJ0IGJ1dHRvbiBpbiBtaWRkbGUgb2Ygc2NyZWVuXHJcbiAgICAgICAgdGhpcy5zdGFydEJ0biA9IG5ldyBzdGFydF9idXR0b25fMS5TdGFydEJ1dHRvbih1dGlsXzEuZ2FtZU9wdGlvbnMuY2VudGVyV2lkdGggLSAxMDAsIHV0aWxfMS5nYW1lT3B0aW9ucy5jZW50ZXJIZWlnaHQsIHRoaXMub25TdGFydENsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgU3RhcnRTY2VuZS5wcm90b3R5cGUub25TdGFydENsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFNjZW5lID0gXCJxdWVzdGlvbnNcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0IGdhbWVcIik7XHJcbiAgICB9O1xyXG4gICAgU3RhcnRTY2VuZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChhcHApIHtcclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zdGFydEJ0bi5nZXRGb3JTdGFnZSgpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU3RhcnRTY2VuZTtcclxufSgpKTtcclxuZXhwb3J0cy5TdGFydFNjZW5lID0gU3RhcnRTY2VuZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nYW1lT3B0aW9ucyA9IHtcclxuICAgIHdpZHRoOiA3MDAsXHJcbiAgICBoZWlnaHQ6IDUwMCxcclxuICAgIGNlbnRlcldpZHRoOiA3MDAgLyAyLFxyXG4gICAgY2VudGVySGVpZ2h0OiA1MDAgLyAyXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=