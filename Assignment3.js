// Q1:
// Create a function Declaration called describeYourState
// Which take three parameters Population, traditional food
// and historical place. Based on this input function should
// return a String with this format.

// My state population is ** Its traditional food is ** and
// historical place name is ___

function describeYourState(population, traditionalFood, historicalPlace) {
  console.log(
    `My state population is ${population} Million. Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace} `
  );
}

describeYourState(20, "Beryani", "IDK");

// Q2:
// Create a function expression which does the exact same
// thing as defined in Question 1

((population, traditionalFood, historicalPlace) => {
  console.log(
    `My state population is ${population} Million. Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace} `
  );
})(40, "Chat", "place");

// Q3:
// Create function addition which takes two numbers as an
// argument And return the result of sum of two numbers

// Important Note: In the function call you are not passing
// any parameter. You can modify function to achieve this.

function addition(num1 = 10, num2 = 20) {
  return num1 + num2;
}

console.log(addition());

// Q4:
let person = {
  name: "john",
  age: 25,
};

function greet(person) {
  person.name = `Mr ${person.name}`;
  return `Welcome ${person.name}`;
}
console.log(greet(person));

// Q5:
// Create higher order function named as transformer which
// take string and firstUpperCaseWord function as an
// arguments. firstUpperCaseWord is function which make
// first word UpperCase from a given String.
function firstUpperCaseWord(word) {
  let arr = word.split("");
  let arrFirstWord = arr[0];
  let uppercase = arrFirstWord.toUpperCase();
  arr[0] = uppercase;
  return arr.join("");
}

function transformer(string, func) {
  return func(string);
}

console.log(transformer("hamza", firstUpperCaseWord));

// Q6:
// create function which will display Your name after
// every 5 seconds

// setInterval((name) => {
//     console.log(name);
// }, 5000, "HAMZA");

// Q7:
let arrowFunction = (name = "Coders") => {
  `Welcome ${name}`;
};

console.log(arrowFunction("Programmers")); // undefined bcz no return statement

// Q8:
// Create a JavaScript Function to find the area of a
// triangle where lengths of the three of its sides are
// 5, 6, 7. : Area = Square root of√s(s - a)(s - b)(s - c)
// where s is half the perimeter, or (a + b + c)/2.

function areaOfTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

console.log("Area of Triangle :", areaOfTriangle(5, 6, 7));

// Q9:
// Create a JavaScript Function to capitalize the first letter of each word of
// a given string.

function capatalize(string) {
  let eachWord = string.split(" ");

  for (let i = 0; i < eachWord.length; i++) {
    let word = eachWord[i];
    let eachLetter = word.split("");
    eachLetter[0] = eachLetter[0].toUpperCase();
    eachWord[i] = eachLetter.join("");
  }

  return eachWord.join(" ");
}

console.log(capatalize("hello world my name is hamza")); // Output: "Hello World"
