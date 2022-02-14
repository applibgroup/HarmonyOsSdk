"use strict";
/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.__esModule = true;
exports.LiteralBuffer = exports.Literal = exports.LiteralTag = void 0;
var LiteralTag;
(function (LiteralTag) {
    LiteralTag[LiteralTag["BOOLEAN"] = 1] = "BOOLEAN";
    LiteralTag[LiteralTag["INTEGER"] = 2] = "INTEGER";
    LiteralTag[LiteralTag["DOUBLE"] = 4] = "DOUBLE";
    LiteralTag[LiteralTag["STRING"] = 5] = "STRING";
    LiteralTag[LiteralTag["METHOD"] = 6] = "METHOD";
    LiteralTag[LiteralTag["GENERATOR"] = 7] = "GENERATOR";
    LiteralTag[LiteralTag["ACCESSOR"] = 8] = "ACCESSOR";
    LiteralTag[LiteralTag["METHODAFFILIATE"] = 9] = "METHODAFFILIATE";
    LiteralTag[LiteralTag["NULLVALUE"] = 255] = "NULLVALUE";
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