// Union | to  accept multiple data type 
function add(param1: number | string, param2: number | string) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2
    } else {
        return `${param1} ${param2}`
    }
}
console.log(add(1, 3))
console.log(add("shaeed", "plabon"))

//  LITERAL TYPES 
// Literal types are often used with union types, type aliases, or function parameters to make your code safer and clearer.
function combine(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string") {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
const sum1 = combine("10", "20", "as-number"); // 30
const sum2 = combine(10, 50, "as-number");
const combinedName = combine("Plabon", " plabon", "as-string");
console.log(sum1, sum2, combinedName);


// Literal types
let status_: "success" | "error" | "loading";

// Type alias using literals
type Status = "success" | "error" | "loading";
let s: Status;


// ** Type alias for a user object
type User = {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean;
};

// Using the type alias
const user1: User = {
  id: 1,
  name: "Shaeed",
  email: "shaeed@example.com",
};

const user2: User = {
  id: 2,
  name: "Plabon",
  email: "plabon@example.com",
  isAdmin: true,
};

// Function using the type alias
function greetUser(user: User) {
  console.log(`Hello, ${user.name}!`);
}
greetUser(user1); 




