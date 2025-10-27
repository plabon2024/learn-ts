var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Access modifiers 1.public  2.private 3.protected 
// readonly operator
// static members 
// getter and setter
// 1.public
var BottleMaker1 = /** @class */ (function () {
    function BottleMaker1(name, price) {
        this.name = name;
        this.price = price;
    } //TypeScript’s constructor parameter shorthand
    return BottleMaker1;
}());
var BottleMaker2 = /** @class */ (function () {
    function BottleMaker2(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker2;
}());
var b1 = new BottleMaker1("Adidas", 1000);
var b2 = new BottleMaker2("Nike", 1200);
console.log(b1);
console.log(b2);
//  2.private
var BankAccount = /** @class */ (function () {
    function BankAccount(owner, initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
        this.logTransaction("Account created");
    }
    // public method
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            this.logTransaction("Deposited ".concat(amount));
        }
        else {
            this.logTransaction("Invalid deposit amount");
        }
    };
    // public method
    BankAccount.prototype.getBalance = function () {
        this.logTransaction("Checked balance");
        return this.balance;
    };
    // private method
    BankAccount.prototype.logTransaction = function (message) {
        console.log("[Transaction Log]: ".concat(message));
    };
    return BankAccount;
}());
var acc = new BankAccount("Plabon", 5000);
acc.deposit(2000);
console.log(acc.getBalance());
console.log(acc); //  works because JavaScript doesn’t actually support true privacy
// acc.logTransaction("Manual log");// Property 'logTransaction' is private
// ****3  Protected 
var Product = /** @class */ (function () {
    // Parameter properties in constructor
    function Product(name, price, category, sku, discount // public parameter property with default value
    ) {
        if (discount === void 0) { discount = 0; }
        this.discount = discount;
        this.name = name;
        this.price = price;
        this.category = category;
        this.sku = sku;
    }
    // Public method
    Product.prototype.getPrice = function () {
        return this.price - this.discount;
    };
    // Private method
    Product.prototype.logDetails = function () {
        console.log("Product: ".concat(this.name, ", Price: ").concat(this.price));
    };
    // Protected method
    Product.prototype.changeCategory = function (newCategory) {
        this.category = newCategory;
    };
    return Product;
}());
// Example usage
var product1 = new Product("Laptop", 1200, "Electronics", "SKU123", 100);
product1.description = "High-end gaming laptop";
console.log(product1.name); //  Works (public)
console.log(product1.discount); //  Works (public parameter property)
console.log(product1.getPrice()); //  Works
// console.log(product1.price);   //  Error: private
// console.log(product1.category);//  Error: protected
// product1.logDetails();         //  Error: private
//4. static members
var car = /** @class */ (function () {
    function car() {
    }
    car.getCarBrand = function () {
        return "Tesla";
    };
    car.model = 1.0;
    return car;
}());
console.log(car.model);
console.log(car.getCarBrand());
// 5.getter and setter
var Car = /** @class */ (function () {
    function Car(model) {
        this._model = model;
    }
    Object.defineProperty(Car.prototype, "model", {
        // getter
        get: function () {
            return this._model;
        },
        // setter
        set: function (value) {
            if (value > 0) {
                this._model = value;
            }
            else {
                console.log("Model must be greater than 0");
            }
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.getCarBrand = function () {
        return "Tesla";
    };
    return Car;
}());
var myCar = new Car(1.0);
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
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    Vehicle.prototype.startEngine = function () {
        console.log("".concat(this.brand, " engine started"));
    };
    return Vehicle;
}());
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(brand, model) {
        var _this = _super.call(this, brand) || this;
        _this.model = model;
        return _this;
    }
    Cars.prototype.getModel = function () {
        return this.model;
    };
    return Cars;
}(Vehicle));
var myCars = new Cars("Tesla", "Model S");
console.log(myCars.getModel()); // "Model S"
myCars.startEngine(); // "Tesla engine started"
