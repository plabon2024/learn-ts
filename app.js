function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
function add2(num1, num2, add) {
    if (add) {
        return (num1 + num2);
    }
    else {
        return "first number: ".concat(num1, ", second number: ").concat(num2);
    }
}
console.log(add2(5, 2, false));
function add3(num1, num2, add, comment) {
    if (add) {
        return "".concat(comment, " ").concat(num1 + num2);
    }
    else {
        return "".concat(comment, " first: ").concat(num1, ", second: ").concat(num2);
    }
}
console.log(add3(5, 2, true, "Add both numbers"));
console.log(add3(5, 2, false, "Don't add numbers"));
function calculateFinalPrice(price, discount, isMember, customerName) {
    if (discount > 50) {
        return "Hello ".concat(customerName, "! Discount too high! Final price  is ").concat(price);
    }
    else if (isMember) {
        return "Hello ".concat(customerName, "! Your final price after ").concat(discount + 5, "% discount is ").concat(price - (price * (discount + 5)) / 100);
    }
    else {
        return "Hello ".concat(customerName, "! Your final price after ").concat(discount, "% discount is ").concat(price - (price * discount) / 100);
    }
}
console.log(calculateFinalPrice(100, 10, true, "Araf"));
console.log(calculateFinalPrice(200, 60, false, "Mahi"));
console.log(calculateFinalPrice(150, 20, false, "Tahsin"));
