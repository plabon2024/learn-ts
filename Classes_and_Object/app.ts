// Access modifiers 1.public  2.private 3.protected 
// readonly operator
// static members 
// getter and setter
// 1.public
class BottleMaker1 {
    constructor(public name: string, public price: number,) { } //TypeScript’s constructor parameter shorthand
}
class BottleMaker2 {
    public name
    public price
    constructor(name: string, price: number,) { //TypeScript’s constructor manual version
        this.name = name
        this.price = price
    }
}
let b1 = new BottleMaker1("Adidas", 1000);
let b2 = new BottleMaker2("Nike", 1200);
console.log(b1)
console.log(b2)

//  2.private
class BankAccount {
    private balance: number;

    constructor(public owner: string, initialBalance: number) {
        this.balance = initialBalance;
        this.logTransaction("Account created");
    }
    // public method
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.logTransaction(`Deposited ${amount}`);
        } else {
            this.logTransaction("Invalid deposit amount");
        }
    }
    // public method
    getBalance(): number {
        this.logTransaction("Checked balance");
        return this.balance;
    }

    // private method
    private logTransaction(message: string): void {
        console.log(`[Transaction Log]: ${message}`);
    }
}
const acc = new BankAccount("Plabon", 5000);
acc.deposit(2000);
console.log(acc.getBalance());
console.log(acc); //  works because JavaScript doesn’t actually support true privacy
// acc.logTransaction("Manual log");// Property 'logTransaction' is private


// ****3  Protected 
class Product {
    // Public property (default)
    public name: string;

    // Private property - accessible only inside the class
    private price: number;

    // Protected property - accessible inside class and subclasses
    protected category: string;

    // Readonly property - can only be assigned at declaration or in constructor
    readonly sku: string;

    // Optional property - may or may not exist
    description?: string;

    // Parameter properties in constructor
    constructor(
        name: string,
        price: number,
        category: string,
        sku: string,
        public discount: number = 0 // public parameter property with default value
    ) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.sku = sku;
    }

    // Public method
    public getPrice(): number {
        return this.price - this.discount;
    }

    // Private method
    private logDetails(): void {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }

    // Protected method
    protected changeCategory(newCategory: string): void {
        this.category = newCategory;
    }
}

// Example usage
const product1 = new Product("Laptop", 1200, "Electronics", "SKU123", 100);
product1.description = "High-end gaming laptop";

console.log(product1.name);       //  Works (public)
console.log(product1.discount);   //  Works (public parameter property)
console.log(product1.getPrice()); //  Works

// console.log(product1.price);   //  Error: private
// console.log(product1.category);//  Error: protected
// product1.logDetails();         //  Error: private


//4. static members
class car {
    static model = 1.0
    static getCarBrand() {
        return "Tesla"
    }
}
console.log(car.model)
console.log(car.getCarBrand())


// 5.getter and setter
class Car {
    private _model: number;
    constructor(model: number) {
        this._model = model;
    }
    // getter
    get model() {
        return this._model;
    }
    // setter
    set model(value) {
        if (value > 0) {
            this._model = value;
        } else {
            console.log("Model must be greater than 0");
        }
    }
    getCarBrand() {
        return "Tesla";
    }
}
const myCar = new Car(1.0);
console.log(myCar.model);
myCar.model = 2.5;
console.log(myCar.model);
myCar.model = -1;
console.log(myCar.model);
console.log(myCar.getCarBrand());



// class Car {
//     static _model = 1.0; // private static-like property (by convention, underscore)
//     // static getter
//     static get model() {
//         return this._model;
//     }
//     // static setter
//     static set model(value) {
//         if (value > 0) {
//             this._model = value;
//         } else {
//             console.log("Model must be greater than 0");
//         }
//     }
//     static getCarBrand() {
//         return "Tesla";
//     }
// }
// console.log(Car.model);
// Car.model = 2.5;
// console.log(Car.model);
// Car.model = -1;
// console.log(Car.model);
// console.log(Car.getCarBrand());


abstract class Vehicle {
    constructor(public brand: string) { }

    abstract getModel(): string;

    startEngine(): void {
        console.log(`${this.brand} engine started`);
    }
}

class Cars extends Vehicle {
    constructor(brand: string, private model: string) {
        super(brand);
    }

    getModel(): string {
        return this.model;
    }
}

const myCars = new Cars("Tesla", "Model S");
console.log(myCars.getModel()); // "Model S"
myCars.startEngine();            // "Tesla engine started"
