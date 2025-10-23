// Union | to  accept multiple data type 
function add(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return "".concat(param1, " ").concat(param2);
    }
}
console.log(add(1, 3));
console.log(add("shaeed", "plabon"));
//  LITERAL TYPES 
// Literal types are often used with union types, type aliases, or function parameters to make your code safer and clearer.
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine("10", "20", "as-number"); // 30
var sum2 = combine(10, 50, "as-number");
var combinedName = combine("Plabon", " plabon", "as-string");
console.log(sum1, sum2, combinedName);
// Literal types
var status_;
var s;
// Using the type alias
var user1 = {
    id: 1,
    name: "Shaeed",
    email: "shaeed@example.com",
};
var user2 = {
    id: 2,
    name: "Plabon",
    email: "plabon@example.com",
    isAdmin: true,
};
// Function using the type alias
function greetUser(user) {
    console.log("Hello, ".concat(user.name, "!"));
}
greetUser(user1);
