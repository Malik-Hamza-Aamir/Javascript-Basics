// Q1:
let arr = [3, 4, 5, 7, 98, 0];
// let [a, b, , c] = arr;
// console.log(a, b, c); // 3 4 7

// Q2:
let arr2 = [1, 3, [2, 55], [9, 8, 7]];
let [a, , [b, c], d] = arr2;
console.log(a, b, c, d); // 1 2 55 [9, 8, 7]

// Q3:
let obj = {
  Name: "John",
  age: 25,
  weight: 70,
};

let { Name: objName, age } = obj; // name can be assigned to string only
// console.log(Name, age); // error

// Q4:
// You have given an array as below . Create a function which accept multiple elements as an argument and return last 4 element of the array

function lastFourElems(...arr) {
  return arr.slice(-4);
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(lastFourElems(...nums));

// Q5:
// You have given an object as below. You have to check wheather physics is the subject of that student or not, if true find the score of physics subject using optional chaining
let student = {
  Math: {
    score: 75,
  },

  physics: {
    score: 85,
  },
};

if (student?.physics) {
  console.log("Yes physics is a subject");
  const score = student.physics.score;
  console.log(score);
} else {
  console.log("physics is not a subject");
}

// Q6:
let nums2 = [2, 3, 4, 5, 6];

for (let key of nums2) {
  console.log(key); // 2 3 4 5 6
}

// Q7:
let arr3 = [1, 2, 3, 4, 5];

let arr4 = [...arr3];

arr4[2] = 10;
// [1, 2, 3, 4, 5] [1, 2, 10, 4, 5]
console.log(arr3, arr4);

// Q8:
function fun(a, b, ...c) {
  console.log(`${a}  ${b}`);

  console.log(c);

  console.log(c[0]);

  console.log(c.length);

  console.log(c.indexOf("google"));
}

fun("apple", "sumsung", "amazon", "google", "facebook");

// Q9:
const fruits = { apple: 8, orange: 7, pear: 5 };

const entries = Object.entries(fruits);
console.log(entries, typeof entries);
for (const [fruit, count] of entries) {
  console.log(`There are ${count}  ${fruit}s`);
}