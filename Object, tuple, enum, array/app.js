// Object 
var student = {
    name: "Plabon",
    age: 20,
    class: 12,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
        postalCode: 1207
    }
};
console.log(student);
console.log("City:", student.address.city);
// ****Array***
var student2 = {
    name: "Plabon",
    age: 20,
    class: 12,
    subject: ["Bangla", "English", "Math", "Physics"]
};
console.log(student2.subject[1]);
var Subjects; // only allows strings
Subjects = ["Bangla", "English", "Math", "Physics"];
console.log(Subjects);
console.log(Subjects[2]);
var Subjects2;
Subjects2 = ["Bangla", 12, "Math", 8];
console.log(Subjects2);
var Language; //lose TypeScript’s type safety.
Language = ["Python", "English", "JavaScript", 21, true];
