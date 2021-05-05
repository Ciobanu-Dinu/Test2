"use strict";
// type Par = {
//     a: number,
//     b: number,
//     f: (a: string) => void
// }
// function show<T extends Par, R>(arg: T, arg2: R): T | R {
//     console.log("Args: ", arg);
//     let a: T = arg;
//     a.f('hello!')
//     return a
// }
// show({
//     a: 2, b: 3, f: (a) => {
//         console.log(a);
//     }
// }, 2)
function map(items, callback) {
    var newItems = [];
    for (var i = 0; i < items.length; i++) {
        var newItem = callback(items[i]);
        newItems.push(newItem);
    }
    return newItems;
}
//================
function data(obj, key) {
    return obj[key];
}
var person = {
    name: 'Dianu',
};
data(person, 'name');
//==============
var Names = /** @class */ (function () {
    function Names(_items) {
        if (_items === void 0) { _items = []; }
        this._items = _items;
    }
    Names.prototype.add = function (item) {
        this._items.push(item);
    };
    return Names;
}());
var numbers = new Names([2]);
numbers.add(2);
function validate() {
    var car = {};
    return car;
}
var Ar = /** @class */ (function () {
    function Ar(v) {
        this._items = v;
    }
    Object.defineProperty(Ar.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    Ar.prototype.map = function (callback) {
        var newItems = [];
        for (var index = 0; index < this._items.length; index++) {
            var element = callback(this._items[index]);
            newItems.push(element);
        }
        return newItems;
    };
    return Ar;
}());
// let myArray = new Ar([2, 3, 4, 5])
// console.log
//     (myArray.map((item) => {
//         return item ** 3
//     }))
