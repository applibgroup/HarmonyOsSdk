"use strict";
exports.__esModule = true;
exports.LiteralBuffer = exports.Literal = exports.LiteralTag = void 0;
var LiteralTag;
(function (LiteralTag) {
    LiteralTag[LiteralTag["BOOLEAN"] = 1] = "BOOLEAN";
    LiteralTag[LiteralTag["INTERGER"] = 2] = "INTERGER";
    LiteralTag[LiteralTag["DOUBLE"] = 4] = "DOUBLE";
    LiteralTag[LiteralTag["STRING"] = 5] = "STRING";
    LiteralTag[LiteralTag["METHOD"] = 6] = "METHOD";
    LiteralTag[LiteralTag["GENERATOR"] = 7] = "GENERATOR";
    LiteralTag[LiteralTag["ACCESSOR"] = 8] = "ACCESSOR";
    LiteralTag[LiteralTag["NULLVALUE"] = 9] = "NULLVALUE";
})(LiteralTag = exports.LiteralTag || (exports.LiteralTag = {}));
var Literal = /** @class */ (function () {
    function Literal(tag, value) {
        this.tag = tag;
        this.value = value;
    }
    Literal.prototype.getTag = function () {
        return this.tag;
    };
    Literal.prototype.getValue = function () {
        return this.value;
    };
    return Literal;
}());
exports.Literal = Literal;
var LiteralBuffer = /** @class */ (function () {
    function LiteralBuffer() {
        this.literalBuffer = [];
    }
    ;
    LiteralBuffer.prototype.addLiterals = function () {
        var _a;
        var literals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            literals[_i] = arguments[_i];
        }
        (_a = this.literalBuffer).push.apply(_a, literals);
    };
    LiteralBuffer.prototype.isEmpty = function () {
        return this.literalBuffer.length == 0;
    };
    return LiteralBuffer;
}());
exports.LiteralBuffer = LiteralBuffer;
//# sourceMappingURL=literal.js.map