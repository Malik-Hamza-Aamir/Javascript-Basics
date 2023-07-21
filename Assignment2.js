// Q1: 
let i = 4;
for (let j = 0; i < 10; i++) {
    if (j === 1 || i === 6) {
      continue;
    } else {
      console.log(i, j);
  
      if (i === 7) {
        break;
      }
    }
  }

// output will be:
// i j
// 4 0
// 5 0
// 7 0

// Q2:
let j = 0;

for (j; j < 5; j++) {
  console.log(j);
}

// Output : 
// 0 1 2 3 4

// Q3:
// Write a simple Program in which You have to print first 
// 10 numbers in descending order (10...1)?

for (let i = 10; i >= 1; i--) {
    console.log("Descending :", i);
}

// Q4:
// Lets say John is looking a new country to live in. He want 
// to live in a country that speaks English, has less than 
// 10 million people. One of the food option between these two 
// must present Spanish food OR English food.
// Write an if/else if statement to help john figure out 
// Your country is right for him?

let lang = "english";
let p_count = 11;
let food1 = "spanish";
let food2 = "english";

if (lang === "english" && p_count < 10 && (food1 === "spanish" || food2 === "english")) {
    console.log("good country");
} else {
    console.log("Not the right country");
}

// Q5:
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// output: 
// 0 1 2 3 4 5 6 7 8 9
  
// console.log(i); // error because i is not accessible outside the block scope

// Q6: 
// use nested-if statement to check your age>18
// than check your height height > 5.10.
// If both true show any message(I can sit in exam) in the console?

let age = 45;
let height = 5.6;

if (age > 18) {
    if (height > 5.8) {
        console.log("You can sit in exam");
    } else {
        console.log("height problem");
    }
} else {
    console.log("Age problem");
}

// Q7: 
// Create two variables grade and passingYear.Check if your 
// grade == "A" and passingYear < 2020 with the help of 
// ternary operator(Not allowed to use any logical operator).
// If both condition true print on console Qualify. Otherwise 
// Fail

let grade = "A";
let passingYear = 2021;

let result = (grade === "A") ? ((passingYear < 2020) ? "Qualify" : "Fail") : "Fail";

console.log(result);
