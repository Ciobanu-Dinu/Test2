
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

function map<T>(items: T[], callback: (arg0: T) => T): T[] {
    let newItems: T[] = []

    for (let i = 0; i < items.length; i++) {
        let newItem: T = callback(items[i])
        newItems.push(newItem)
    }
    return newItems
}


//================

function data<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}
let person = {
    name: 'Dianu',

}
data(person, 'name')

//==============

class Names<T>{
    constructor(private _items: T[] = []) { }

    add(item: T): void {
        this._items.push(item)
    }
}
let numbers = new Names([2])
numbers.add(2)

interface Car {
    model: string,
    key: string
}

function validate(): Car {
    let car: Partial<Car> = {}

    return car as Car
}

//====================


type Callback = <T>(a: T) => T

interface IMyArray<T> {
    map(callback: Callback): T[],

    items: T[]
}

class Ar<T extends number> implements IMyArray<T> {
    _items: T[];

    get items() {
        return this._items;
    }
    constructor(v: T[]) {
        this._items = v
    }

    map(callback: Callback): T[] {
        let newItems: T[] = []
        for (let index = 0; index < this._items.length; index++) {
            const element: T = callback(this._items[index])
            newItems.push(element)
        }
        return newItems
    }
}
// let myArray = new Ar([2, 3, 4, 5])
// console.log
//     (myArray.map((item) => {
//         return item ** 3
//     }))
