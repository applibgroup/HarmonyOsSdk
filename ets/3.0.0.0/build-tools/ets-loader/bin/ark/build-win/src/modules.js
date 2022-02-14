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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.setExportBinding = exports.setImport = exports.ModuleStmt = void 0;
var jshelpers_1 = __importDefault(require("./jshelpers"));
var variable_1 = require("./variable");
var diagnostic_1 = require("./diagnostic");
var ModuleStmt = /** @class */ (function () {
    function ModuleStmt(node, moduleRequest) {
        if (moduleRequest === void 0) { moduleRequest = ""; }
        this.namespace = "";
        this.bingdingNameMap = new Map();
        this.isCopy = true;
        this.node = node;
        this.moduleRequest = moduleRequest;
    }
    ModuleStmt.prototype.getNode = function () {
        return this.node;
    };
    ModuleStmt.prototype.getModuleRequest = function () {
        return this.moduleRequest;
    };
    ModuleStmt.prototype.addLocalName = function (localName, importName) {
        if (this.bingdingNameMap.has(localName)) {
            throw new diagnostic_1.DiagnosticError(this.node, diagnostic_1.DiagnosticCode.Duplicate_identifier_0, jshelpers_1["default"].getSourceFileOfNode(this.node), [localName]);
        }
        this.bingdingNameMap.set(localName, importName);
    };
    ModuleStmt.prototype.getBindingNameMap = function () {
        return this.bingdingNameMap;
    };
    ModuleStmt.prototype.setNameSpace = function (namespace) {
        this.namespace = namespace;
    };
    ModuleStmt.prototype.getNameSpace = function () {
        return this.namespace;
    };
    ModuleStmt.prototype.setCopyFlag = function (isCopy) {
        this.isCopy = isCopy;
    };
    ModuleStmt.prototype.getCopyFlag = function () {
        return this.isCopy;
    };
    return ModuleStmt;
}());
exports.ModuleStmt = ModuleStmt;
function setImport(importStmts, moduleScope, pandagen, compiler) {
    importStmts.forEach(function (importStmt) {
        pandagen.importModule(importStmt.getNode(), importStmt.getModuleRequest());
        var moduleReg = pandagen.allocLocalVreg();
        pandagen.storeAccumulator(importStmt.getNode(), moduleReg);
        if (importStmt.getNameSpace()) {
            var v = moduleScope.findLocal(importStmt.getNameSpace());
            pandagen.storeAccToLexEnv(importStmt.getNode(), moduleScope, 0, v, true);
            v.initialize();
        }
        var bindingNameMap = importStmt.getBindingNameMap();
        bindingNameMap.forEach(function (value, key) {
            var v = moduleScope.findLocal(key);
            v.bindModuleVreg(moduleReg);
            v.setExoticName(value);
        });
    });
}
exports.setImport = setImport;
function setExportBinding(exportStmts, moduleScope, pandagen) {
    exportStmts.forEach(function (exportStmt) {
        if (exportStmt.getModuleRequest()) {
            pandagen.importModule(exportStmt.getNode(), exportStmt.getModuleRequest());
            var moduleReg_1 = pandagen.allocLocalVreg();
            pandagen.storeAccumulator(exportStmt.getNode(), moduleReg_1);
            if (!exportStmt.getCopyFlag()) {
                if (exportStmt.getNameSpace()) {
                    pandagen.storeModuleVar(exportStmt.getNode(), exportStmt.getNameSpace());
                }
                var bindingNameMap = exportStmt.getBindingNameMap();
                bindingNameMap.forEach(function (value, key) {
                    pandagen.loadModuleVariable(exportStmt.getNode(), moduleReg_1, value);
                    pandagen.storeModuleVar(exportStmt.getNode(), key);
                });
            }
            else {
                pandagen.copyModule(exportStmt.getNode(), moduleReg_1);
            }
        }
        else {
            var bindingNameMap = exportStmt.getBindingNameMap();
            bindingNameMap.forEach(function (value, key) {
                var v = moduleScope.findLocal(value);
                if (typeof v == 'undefined') {
                    throw new diagnostic_1.DiagnosticError(exportStmt.getNode(), diagnostic_1.DiagnosticCode.Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module, jshelpers_1["default"].getSourceFileOfNode(exportStmt.getNode()), [value]);
                }
                if (v instanceof variable_1.ModuleVariable) {
                    pandagen.loadModuleVariable(exportStmt.getNode(), v.getModule(), v.getName());
                    pandagen.storeModuleVar(exportStmt.getNode(), key);
                }
                else {
                    v.setExport();
                    v.setExportedName(key);
                }
            });
        }
    });
}
exports.setExportBinding = setExportBinding;
//# sourceMappingURL=modules.js.map