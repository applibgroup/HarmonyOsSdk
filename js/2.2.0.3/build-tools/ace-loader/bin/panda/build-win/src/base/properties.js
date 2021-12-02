"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.getPropName = exports.propertyKeyAsString = exports.isConstantExpr = exports.generatePropertyFromExpr = exports.Property = exports.PropertyKind = void 0;
var ts = __importStar(require("typescript"));
var memberAccessExpression_1 = require("../expression/memberAccessExpression");
var jshelpers = __importStar(require("../jshelpers"));
var PropertyKind;
(function (PropertyKind) {
    PropertyKind[PropertyKind["Variable"] = 0] = "Variable";
    PropertyKind[PropertyKind["Constant"] = 1] = "Constant";
    PropertyKind[PropertyKind["Computed"] = 2] = "Computed";
    PropertyKind[PropertyKind["Prototype"] = 3] = "Prototype";
    PropertyKind[PropertyKind["Accessor"] = 4] = "Accessor";
    PropertyKind[PropertyKind["Spread"] = 5] = "Spread";
})(PropertyKind = exports.PropertyKind || (exports.PropertyKind = {}));
var Property = /** @class */ (function () {
    function Property(propKind, name) {
        this.compiled = false;
        this.redeclared = false;
        this.propKind = propKind;
        if (typeof (name) != 'undefined') {
            this.name = name;
        }
    }
    Property.prototype.setCompiled = function () {
        this.compiled = true;
    };
    Property.prototype.setRedeclared = function () {
        this.redeclared = true;
    };
    Property.prototype.isCompiled = function () {
        return this.compiled;
    };
    Property.prototype.isRedeclared = function () {
        return this.redeclared;
    };
    Property.prototype.getName = function () {
        if (typeof (this.name) == 'undefined') {
            throw new Error("this property doesn't have a name");
        }
        return this.name;
    };
    Property.prototype.getKind = function () {
        return this.propKind;
    };
    Property.prototype.getValue = function () {
        if (this.propKind == PropertyKind.Accessor) {
            throw new Error("Accessor doesn't have valueNode");
        }
        return this.valueNode;
    };
    Property.prototype.getGetter = function () {
        return this.getterNode;
    };
    Property.prototype.getSetter = function () {
        return this.setterNode;
    };
    Property.prototype.setValue = function (valueNode) {
        this.valueNode = valueNode;
        this.getterNode = undefined;
        this.setterNode = undefined;
    };
    Property.prototype.setGetter = function (getter) {
        if (this.propKind != PropertyKind.Accessor) {
            this.valueNode = undefined;
            this.setterNode = undefined;
            this.propKind = PropertyKind.Accessor;
        }
        this.getterNode = getter;
    };
    Property.prototype.setSetter = function (setter) {
        if (this.propKind != PropertyKind.Accessor) {
            this.valueNode = undefined;
            this.getterNode = undefined;
            this.propKind = PropertyKind.Accessor;
        }
        this.setterNode = setter;
    };
    Property.prototype.setKind = function (propKind) {
        this.propKind = propKind;
    };
    return Property;
}());
exports.Property = Property;
function generatePropertyFromExpr(expr) {
    var hasProto = false;
    var properties = [];
    var namedPropertyMap = new Map();
    expr.properties.forEach(function (property) {
        switch (property.kind) {
            case ts.SyntaxKind.PropertyAssignment: {
                if (property.name.kind == ts.SyntaxKind.ComputedPropertyName) {
                    defineProperty(property.name, property, PropertyKind.Computed, properties, namedPropertyMap);
                }
                else {
                    var propName = getPropName(property.name);
                    if (propName == "__proto__") {
                        if (!hasProto) {
                            defineProperty(propName, property.initializer, PropertyKind.Prototype, properties, namedPropertyMap);
                            hasProto = true;
                            break;
                        }
                        else {
                            throw new Error("__proto__ was set multiple times in the object definition.");
                        }
                    }
                    if (isConstantExpr(property.initializer)) {
                        defineProperty(propName, property.initializer, PropertyKind.Constant, properties, namedPropertyMap);
                    }
                    else {
                        defineProperty(propName, property.initializer, PropertyKind.Variable, properties, namedPropertyMap);
                    }
                }
                break;
            }
            case ts.SyntaxKind.ShorthandPropertyAssignment: {
                // ShorthandProperty's name always be Identifier
                var propName = jshelpers.getTextOfIdentifierOrLiteral(property.name);
                defineProperty(propName, property.name, PropertyKind.Variable, properties, namedPropertyMap);
                break;
            }
            case ts.SyntaxKind.SpreadAssignment: {
                defineProperty(undefined, property.expression, PropertyKind.Spread, properties, namedPropertyMap);
                break;
            }
            case ts.SyntaxKind.MethodDeclaration: {
                var propName = getPropName(property.name);
                if (typeof (propName) == 'string' || typeof (propName) == 'number') {
                    defineProperty(propName, property, PropertyKind.Variable, properties, namedPropertyMap);
                }
                else {
                    defineProperty(propName, property, PropertyKind.Computed, properties, namedPropertyMap);
                }
                break;
            }
            case ts.SyntaxKind.GetAccessor:
            case ts.SyntaxKind.SetAccessor: {
                var propName = getPropName(property.name);
                if (typeof (propName) == 'string' || typeof (propName) == 'number') {
                    defineProperty(propName, property, PropertyKind.Accessor, properties, namedPropertyMap);
                }
                else {
                    defineProperty(propName, property, PropertyKind.Computed, properties, namedPropertyMap);
                }
                break;
            }
            default:
                throw new Error("Unreachable Kind");
        }
    });
    return properties;
}
exports.generatePropertyFromExpr = generatePropertyFromExpr;
function defineProperty(propName, propValue, propKind, properties, namedPropertyMap) {
    if (propKind == PropertyKind.Computed || propKind == PropertyKind.Spread) {
        var prop = new Property(propKind, propName);
        prop.setValue(propValue);
        properties.push(prop);
    }
    else {
        var prop = new Property(propKind, propName);
        var name_str = propertyKeyAsString(propName);
        if (namedPropertyMap.has(name_str)) {
            var prevProp = properties[namedPropertyMap.get(name_str)];
            if ((prevProp.getKind() == PropertyKind.Accessor || prevProp.getKind() == PropertyKind.Constant) &&
                (propKind == PropertyKind.Accessor || propKind == PropertyKind.Constant)) {
                if (propKind == PropertyKind.Accessor) {
                    if (ts.isGetAccessorDeclaration(propValue)) {
                        prevProp.setGetter(propValue);
                    }
                    else if (ts.isSetAccessorDeclaration(propValue)) {
                        prevProp.setSetter(propValue);
                    }
                }
                else {
                    prevProp.setValue(propValue);
                    prevProp.setKind(PropertyKind.Constant);
                }
                return;
            }
            prop.setRedeclared();
        }
        namedPropertyMap.set(name_str, properties.length);
        if (propKind == PropertyKind.Accessor) {
            if (ts.isGetAccessorDeclaration(propValue)) {
                prop.setGetter(propValue);
            }
            else if (ts.isSetAccessorDeclaration(propValue)) {
                prop.setSetter(propValue);
            }
        }
        else {
            prop.setValue(propValue);
        }
        properties.push(prop);
    }
}
function isConstantExpr(node) {
    switch (node.kind) {
        case ts.SyntaxKind.StringLiteral:
        case ts.SyntaxKind.NumericLiteral:
        case ts.SyntaxKind.NullKeyword:
        case ts.SyntaxKind.TrueKeyword:
        case ts.SyntaxKind.FalseKeyword:
            return true;
        default:
            return false;
    }
}
exports.isConstantExpr = isConstantExpr;
function propertyKeyAsString(propName) {
    if (typeof (propName) == 'number') {
        return propName.toString();
    }
    return propName;
}
exports.propertyKeyAsString = propertyKeyAsString;
function getPropName(propertyName) {
    if (ts.isComputedPropertyName(propertyName)) {
        return propertyName;
    }
    var propName = jshelpers.getTextOfIdentifierOrLiteral(propertyName);
    if (propertyName.kind == ts.SyntaxKind.NumericLiteral) {
        propName = Number.parseFloat(propName);
        if (!memberAccessExpression_1.isValidIndex(propName)) {
            propName = propName.toString();
        }
    }
    else if (propertyName.kind == ts.SyntaxKind.StringLiteral) {
        var temp = Number(propName);
        if (!isNaN(Number.parseFloat(propName)) && !isNaN(temp) && memberAccessExpression_1.isValidIndex(temp) && String(temp) == propName) {
            propName = temp;
        }
    }
    else {
        // TODO: privateIdentifier
    }
    return propName;
}
exports.getPropName = getPropName;
//# sourceMappingURL=properties.js.map