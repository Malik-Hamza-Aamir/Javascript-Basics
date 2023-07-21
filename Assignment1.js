// Q1 : Create a code to check difference between null and 
// undefined data type. Also check their type using typeof.

let a = null;
let b;

console.log("a type : ", typeof a); // object
console.log("b type : ", typeof b); // undefinded

// Q2 : Which type of variables (var, let or const) must be 
// initialized at the time of declaration?

// Ans: const must be declared at the time of declaration otherwise it 
// will throw error

// Q3
let languages = 'java javaScript python cSharp';
let result = languages.lastIndexOf('S');
console.log(result); // from last the cSharp S is big so it will return its index

// Q4
let variable = 'hello programmers';
let result2 = Number(variable); 
// this will generate an error because to convert it into Number
// the String must also be a Number
console.log(result2);

// Q5
let num1 = 32;
let num2 = '32';
let result1 = num1 !== num2; // returns true because its checking value and type
let result3 = num1 != num2; // returns false because its checking value only
console.log(result1, result3); // true false

// Q6
let str = 'Hello Programmers';
let result4 = str.includes('r');
console.log(result4); // returns the true

// Q7
let num3 = 2;
let num4 = 5;
let result5 = num3 ** num4 * 2;
console.log(result5); // 64: first ^ then * from left to right

// Q8
let num5 = [1, 2, 4, 5];
let num6 = [6, 5, 8, 0];
let result6 = num5.concat(num6);
console.log(result6); // [1, 2, 4, 5, 6, 5, 8, 0]

// Q9
let a1 = 5;
let b1 = 7;
let c1 = 8;
let result7 = a1 < b1 > c1;
//            5  <  7 >  8
console.log(result7); // false

// Q10
// If your State is split into four equal parts such that in 
// each part there are 1/4 number of people live. You have to 
// find how many people would live in each part? which 
// operators will you use ?

// we use / operator 