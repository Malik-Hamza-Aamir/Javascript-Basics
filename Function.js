//  Functions

function nameofFunction() {
    console.log("hello first fn");
}

nameofFunction();

// assigning a variable a function

let fun = function() {
    console.log("fun function");
};

fun();

let invitation = function (name = "none", time = "night") {
    console.log(`${name} is invited at ${time}`);
}

invitation("Hamza" , "morning");

// return values in a function

let ageCalc = function (birthYear) {
    let age = 2023 - birthYear;
    return age;
    // anything written after return in a function will not run
}

console.log("Age =", ageCalc(2005));

// Arrow Function
// no function keyword
// no paranthesis if single line of code
// no return if single line of code
// no need of curly brces {}

let sum = (a,b) => a+b; 
console.log(sum(10,10));

// METHOD 1: Passing functions as an arguement (Higher Order Functions)
let upperCase = (str) => {
    return str.toUpperCase();
};

let lowerCase = (str) => {
    return str.toLowerCase();
};

// making a higher order function passing as an arg

let transformer = (str, functn) => {
    return functn(str);
};

console.log(transformer("hamza", upperCase));

// Method 2: function  returned within a function

let complement = (msg) => {
    return (name) => console.log(`Message : ${msg} and Name : ${name}`);
}

let complemented = complement("Good Coder"); // saved in message
complemented("Hamza"); // saved in name

// IIFE : immediately invoke function expression
// executed only once;

((name) => {
    console.log("Only one execution", name)
})("IIFE");

// setTimeout:  run function once after an interval
// setInterval: run function repeatidly after interval

// setTimeout(function, time_count, arg1, arg2...)
// now we also have to pass name in function we can use
// arg1 space to pass name as an arguement
// setTimeout((name) => {
//     console.log(`My name ${name} is good`);
// }, 2000, "Alizu");


// setInterval(function, time_count, arg1, arg2...)
// runs every 3 seconds
// setInterval((animal) => {
//     console.log(`animal name is ${animal}`)
// }, 3000, "Elephant");

// Hoisting
// variables var are hoisted at the top
score = 10;
console.log(score);
// var score = 5; // giving undefined
var score; // no error printing 10

// functions are also hoisted at the top
test();
function test() {
    console.log("Hoisted");
}

// arrow functions are not hoisted