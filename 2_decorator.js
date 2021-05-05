"use strict";
// function Log(constructor: Function) {
//     // console.log(constructor);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var validators = {};
function Required(target, propName) {
    var _a;
    validators[target.constructor.name] = __assign(__assign({}, validators[target.constructor.name]), (_a = {}, _a[propName] = 'required', _a));
}
function validate(obj) {
    var objConfig = validators[obj.constructor.name];
    if (!objConfig)
        return false;
    var isValid = true;
    Object.keys(objConfig).forEach(function (key) {
        if (objConfig[key] === "required") {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
var Form = /** @class */ (function () {
    function Form(email) {
        this.email = email;
    }
    __decorate([
        Required
    ], Form.prototype, "email", void 0);
    return Form;
}());
var form = new Form('asdas');
console.log(validators);
if (validate(form)) {
    console.log('Valid: ', form);
}
else {
    console.log('Ne-Valid: ', form);
}
