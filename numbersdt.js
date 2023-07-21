// numbers

let score = 50;
console.log(score, typeof score);

// mathematical operators = * / - + % done that ** power sign is double stars

// concatenation of numbers with strings
// js is a loosly typed language and the score is being converted
// to string below here. js does this automatically
let line = "My score is " + score;
console.log(line);

// loose equality operator
let age = 22;
console.log(age == "22"); // focus on value not on type avoid this

// strict equality operator
console.log(age === "22"); // false: checks type as well as value

// Type Conversion

let stringType = "54";
console.log(stringType, typeof stringType);

let toNumber = Number(stringType); // converted to number
console.log(toNumber, typeof toNumber);

// is we want to convert string to number then their must be a number inside a string otherwise it will not convert and give result as NAN: not a number

// Arrays
// all these methods doesnot modify the array rather returns a new array

let dish = ["beryani", "chat", "paratha"];
let dish2 = ["zinger", "pizza", "juice"];
console.log(dish[0]);

dish[0] = "karahi";
console.log(dish[0]);

console.log(dish);

console.log(dish.indexOf("chat"));
// join method : used to join elements of array by the character specified inside the ""
// console.log(dish.join(" "));

// Concate two arrays
console.log(dish.concat(dish2));

// Length method
console.log("length : " + dish2.length);

// Push method: this method modifies the array
console.log(dish.push("Alu keema")) // returns new length of array after push

// Pop method: pops the last element of the array
console.log(dish.pop()); // return that element that was taken out

// Boolean Values and comparison operator
let boolType = true;
let stringType2 = "true";

console.log(typeof boolType, typeof stringType2);

let email = "hamzaaamir6@gmail.com";
let boolVal = email.includes("@");
console.log(boolVal);

// comparison operators : all returns a boolean true or false
// == === != !==
// > >=
// < <=