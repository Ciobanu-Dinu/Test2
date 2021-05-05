// function Log(constructor: Function) {
//     // console.log(constructor);

// }
// function Log2(target: any, propName: string | Symbol) {
//     // console.log(target);
//     // console.log(propName);

// }

// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//     // console.log(target);
//     // console.log(propName);
//     // console.log(descriptor);

// }
// @Log
// class Data {
//     @Log2
//     name: string

//     constructor(name: string) {
//         this.name = name
//     }

//     @Log3
//     logName(): void {
//         // console.log(`name is ${this.name}`);

//     }
// }

//=====================

// interface IComponent {
//     selector: string,
//     template: string,
// }

// function Component(config: IComponent) {
//     return function
//         <T extends { new(...args: any[]): object }>
//         (Constructor: T) {
//         return class extends Constructor {
//             constructor(...args: any) {
//                 super(...args)
//                 const $el = document.querySelector(config.selector)!
//                 $el.innerHTML += config.template;
//             }
//         }


//     }
// }


// function Bind(_: any, _2: any, descriptor: PropertyDescriptor) {
//     const original = descriptor.value

//     return {
//         configurable: true,
//         enumerable: false,
//         get() {
//             return original.bind(this)
//         }
//     }

// }

// @Component({
//     selector: '#container',
//     template: `
//     <div style="margin-bottom:30px">
//         <div>Item</div>
//         <div>Item</div>
//         <div>Item</div>
//         <div>Item</div>
//     </div>
//     `
// })
// class CardComponent {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     @Bind
//     getName() {
//         console.log('Name is: ', this.name);

//     }
// }

// let card = new CardComponent('lala')
// let card2 = new CardComponent('Second name')
// card2.getName()

// let btn = document.querySelector('#button')

// btn?.addEventListener('click', card2.getName)

//============= FORM VALIDATION ===================
// type ValidatorType = 'required' | 'email'

// interface ValidatorConfig {
//     [prop: string]: {
//         [validateProp: string]: ValidatorType
//     }
// }

// const validators: ValidatorConfig = {}

// function Required(target: any, propName: any) {
//     validators[target.constructor.name] = {
//         ...validators[target.constructor.name],
//         [propName]: 'required'
//     }
// }

// function validate(obj: any): boolean {
//     const objConfig = validators[obj.constructor.name]
//     if (!objConfig) return true

//     let isValid = true
//     Object.keys(objConfig).forEach(key => {
//         if (objConfig[key] === 'required') {
//             isValid = isValid && !!obj[key]
//         }
//     })

//     return isValid
// }


// class Form {
//     @Required
//     email: string | void

//     constructor(email?: string) {
//         this.email = email
//     }
// }
// const form = new Form()


// if (validate(form)) {
//     console.log('Valid: ', form);
// } else {
//     console.log('Ne-Valid: ', form);

// }

//=================== 

type ValidatorType = 'required' | 'email'

interface IValidator {
    [prop: string]: {
        [propName: string]: ValidatorType
    }
}

const validators: IValidator = {}

function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required'
    }
}

function validate(obj: any): boolean {
    const objConfig = validators[obj.constructor.name]
    if (!objConfig) return false

    let isValid = true

    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === "required") {
            isValid = isValid && !!obj[key]
        }
    })
    return isValid

}


class Form {
    @Required
    email: string | void

    constructor(email?: string) {
        this.email = email
    }
}

const form = new Form('asdas')

console.log(validators);



if (validate(form)) {
    console.log('Valid: ', form);
} else {
    console.log('Ne-Valid: ', form);

}
