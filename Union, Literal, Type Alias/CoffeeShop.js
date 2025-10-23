// 2. Function to order coffee
function orderCoffee(order) {
    var milkText = order.milk === "none" ? "no milk" : "".concat(order.milk, " milk");
    console.log("You ordered a ".concat(order.size, " ").concat(order.type, " with ").concat(milkText, "."));
}
orderCoffee({ size: "medium", type: "latte", milk: "soy" });
// Output: You ordered a medium latte with soy milk.
orderCoffee({ size: "small", type: "espresso", milk: "none" });
// Output: You ordered a small espresso with no milk.
// orderCoffee({ size: "extra-large", type: "latte", milk: "soy" });
//  Error
