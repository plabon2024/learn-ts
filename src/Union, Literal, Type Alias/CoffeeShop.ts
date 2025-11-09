// 1. Define type aliases using union literal types
type CoffeeSize = "small" | "medium" | "large";
type CoffeeType = "espresso" | "latte" | "cappuccino";
type MilkOption = "none" | "regular" | "soy" | "almond";

// 2. Function to order coffee
function orderCoffee(order: {
  size: CoffeeSize;
  type: CoffeeType;
  milk: MilkOption;
}) {
  const milkText = order.milk === "none" ? "no milk" : `${order.milk} milk`;
  console.log(`You ordered a ${order.size} ${order.type} with ${milkText}.`);
}

orderCoffee({ size: "medium", type: "latte", milk: "soy" });
// Output: You ordered a medium latte with soy milk.

orderCoffee({ size: "small", type: "espresso", milk: "none" });
// Output: You ordered a small espresso with no milk.

// orderCoffee({ size: "extra-large", type: "latte", milk: "soy" });
//  Error
