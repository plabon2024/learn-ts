// Problem 1
enum classes {
    Ten = "Ten",
    Eleven = "Eleven",
    Twelve = "Twelve",
}
const student_Info: {
    id: number;
    name: string;
    age: 20;
    class: classes;
    subject: [string, string, string, string];
    isGraduated: boolean;
    address: {
        city: string;
        country: string;
        postcode: number;
    };
} = {
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

function printStudentInfo(student: typeof student_Info) {
    console.log(`Student Information:
  Name: ${student.name}
  Subjects: ${student.subject.join(", ")}
  City: ${student.address.city}
  Postcode: ${student.address.postcode}
  Class: ${student.class}
`);
}
printStudentInfo(student_Info);

// Problem 2


// let products: [number, boolean, string][] = [];// define an array of tuples
// products.push([1, true, 'Product A']);// add multiple products
// products.push([2, false, 'Product B']);
// products.push([3, true, 'Product C']);
// console.log(products);

enum ProductCategory {
    Electronics = "Electronics",
    Clothing = "Clothing",
    Groceries = "Groceries",
}


let ProductDetails: [string, number, boolean]
ProductDetails = ["laptop", 1000, true]

const Product: {
    id: number;
    category: ProductCategory;
    details: [string, number, boolean];
    tag: [string, string, string]
} = {
    id: 1,
    category: ProductCategory.Electronics,
    details: ProductDetails,
    tag: ['new', 'sale', 'popular']
}


const getProductSummary = (product: typeof Product) => {
    const [name, price, inStock] = product.details; // destructuring tuple if not done previously
    return `Product: ${name}, Price: $${price}, In Stock: ${inStock}, Category: ${product.category}, Tags: ${product.tag.join(', ')}`;
};
console.log(getProductSummary(Product));


// Problem 3 