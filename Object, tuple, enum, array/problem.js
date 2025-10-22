// Problem 1
var classes;
(function (classes) {
    classes["Ten"] = "Ten";
    classes["Eleven"] = "Eleven";
    classes["Twelve"] = "Twelve";
})(classes || (classes = {}));
var student_Info = {
    id: 1,
    name: "plabon",
    age: 20,
    class: classes.Twelve,
    subject: ["Bangla", "English", "Math", "Physics"],
    isGraduated: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
        postcode: 1235,
    },
};
function printStudentInfo(student) {
    console.log("Student Information:\n  Name: ".concat(student.name, "\n  Subjects: ").concat(student.subject.join(", "), "\n  City: ").concat(student.address.city, "\n  Postcode: ").concat(student.address.postcode, "\n  Class: ").concat(student.class, "\n"));
}
printStudentInfo(student_Info);
// Problem 2
// let products: [number, boolean, string][] = [];// define an array of tuples
// products.push([1, true, 'Product A']);// add multiple products
// products.push([2, false, 'Product B']);
// products.push([3, true, 'Product C']);
// console.log(products);
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["Electronics"] = "Electronics";
    ProductCategory["Clothing"] = "Clothing";
    ProductCategory["Groceries"] = "Groceries";
})(ProductCategory || (ProductCategory = {}));
var ProductDetails;
ProductDetails = ["laptop", 1000, true];
var Product = {
    id: 1,
    category: ProductCategory.Electronics,
    details: ProductDetails,
    tag: ['new', 'sale', 'popular']
};
var getProductSummary = function (product) {
    var _a = product.details, name = _a[0], price = _a[1], inStock = _a[2]; // destructuring tuple if not done previously
    return "Product: ".concat(name, ", Price: $").concat(price, ", In Stock: ").concat(inStock, ", Category: ").concat(product.category, ", Tags: ").concat(product.tag.join(', '));
};
console.log(getProductSummary(Product));
// Problem 3 
