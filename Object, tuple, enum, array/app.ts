// Object 
const student: { 
    name: string;
    age: number;
    class: number;
    address: {
        city: string;
        country: string;
        postalCode: number;
    };
} = { // with const declarations must be initialized
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


// ***Array***

const student2: {
    name: string;
    age: number;
    class: number;
    subject: string[];

} = {
    name: "Plabon",
    age: 20,
    class: 12,
    subject: ["Bangla", "English", "Math", "Physics"]
};
console.log(student2.subject[1]);


let Subjects: string[]; // only allows strings
Subjects = ["Bangla", "English", "Math", "Physics"];

console.log(Subjects);
console.log(Subjects[2]);

let Subjects2: (string | number)[];
Subjects2 = ["Bangla", 12, "Math", 8];
console.log(Subjects2);


let Language: any[];//lose TypeScript’s type safety.
Language = ["Python", "English","JavaScript", 21, true];


// ***Tuple*** 
// A tuple is a typed array with a pre-defined length and types for each index.
const student3: {
    name: string;
    age: number;
    class: number;
    subject: [string, string, string, string]; // tuple with 4 strings
} = {
    name: "Plabon",
    age: 20,
    class: 12,
    subject: ["Bangla", "English", "Math", "Physics"]
};

console.log(student3.subject[1]); 



const studentInfo: [string, number, boolean] = ["Plabon", 20, true];
console.log(studentInfo);

// ***Enum***
// An enum (short for enumeration) is a special TypeScript type that allows you to define a set of named constants.
enum ClassLevel {
    Ten = 10,
    Eleven = 11,
    Twelve = 12
}

const student4: {
    name: string;
    age: number;
    class: ClassLevel; //enum
    subject: [string, string, string, string]; // tuple
} = {
    name: "Plabon",
    age: 20,
    class: ClassLevel.Twelve,
    subject: ["Bangla", "English", "Math", "Physics"]
};

console.log(student4.subject[1]);
console.log(student4.class);    
