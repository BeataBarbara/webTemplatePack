"use strict";

var _index = _interopRequireDefault(require("./src/index.scss"));

var _proba = _interopRequireDefault(require(".\\assets\\img\\proba.png"));

var _function = require("./function");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var heading = document.querySelector("#demo"),
    sumValue = sum(10, 5);
heading.innerHTML = "10 + 5 = ".concat(sumValue);
var myIcon = new Image();
myIcon.src = _proba["default"];