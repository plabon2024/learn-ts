function add(num1: number, num2: number) {
    return num1 + num2
}
console.log(add(1, 2))




function add2(num1: number, num2: number, add: boolean) {
    if (add) {
        return (num1 + num2)
    } else {
        return `first number: ${num1}, second number: ${num2}`;

    }
}
console.log(add2(5, 2, false))




function add3(num1: number, num2: number, add: boolean, comment: string) {
    if (add) {
        return `${comment} ${num1 + num2}`;
    } else {
        return `${comment} first: ${num1}, second: ${num2}`;
    }
}

console.log(add3(5, 2, true, "Add both numbers"));
console.log(add3(5, 2, false, "Don't add numbers"));


function calculateFinalPrice(price: number, discount: number, isMember: boolean, customerName: string) {
    if (discount > 50) {
        return `Hello ${customerName}! Discount too high! Final price  is ${price}`
    }
    else if (isMember) {
        return `Hello ${customerName}! Your final price after ${discount + 5}% discount is ${price - (price * (discount + 5)) / 100}`
    } else {
        return `Hello ${customerName}! Your final price after ${discount}% discount is ${price - (price * discount) / 100}`
    }

}
console.log(calculateFinalPrice(100, 10, true, "Araf"));
console.log(calculateFinalPrice(200, 60, false, "Mahi"));
console.log(calculateFinalPrice(150, 20, false, "Tahsin"));

