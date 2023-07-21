// Q1:
// You have given array of strings. Your task is to obtain last two elements of given array using slice method?

let admins = ['john', 'paul', 'Neha', 'harry'];
console.log(admins.slice(2));

// Q2:
// You have to delete 2 elements starting from index 2.
// You have to add 3 new elements on index 1 choice.
// Display the 2 deleted elements in console (from step 1)

const arr = [1, 4, 7, 6, 8];
console.log(arr);

// Adding elements at index 1
arr.splice(1, 0, 2, 3, 5);
console.log(arr);

const deletedArr = arr.slice(2, 4);
console.log(deletedArr);

// Q3:
const arr1 = [1, 4, 7, 6, 8];
console.log(arr1.slice(-2)); // last 2 elements

// Q4:
// Write three different methods/approaches to get last element of the array?
const arr2 = [1, 4, 7, 6, 8];
const m1 = arr2.pop();
console.log(m1);
const m2 = arr2.slice(0);
console.log(m2);
console.log(arr2[arr2.length-1]);

// Q5:
// You have given an array of nums. Create new Array with the help of nums array. In new Array each element will be a result of multiplication by 2 of the original array element
let nums = [1, 2, 3, 4, 5];
let numsDoubled = nums.map((num) => {
    return num * 2;
});

console.log(numsDoubled);

// Q6:
// You have given an array of scores in which score of each student stored. Create a new array with the help of original scores array in which only those scores exist greater than 75%
let scores = [55, 76, 35, 77, 88, 97, 120, 136, 140];
let totalScore = 150;
let score75 = 112;
let newScores = scores.filter((score) => {
    if (score > score75) {
        return score;
    }
});

console.log(newScores);

// Q9:
let users = [
    {
      name: 'Paul',
  
      age: 24,
  
      verified: true,
    },
  
    {
      name: 'John',
  
      age: 21,
  
      verified: false,
    },
  
    {
      name: 'Neha',
  
      age: 19,
  
      verify: true,
    },
  ];

let specifiedUser = users.find((user) => {
    return user.name === "John";
});

console.log(specifiedUser);
let specifiedUserIndex = users.findIndex((user) => {
    return user.name === "John";
});
console.log(specifiedUserIndex+1);

// Q10:
let arr3 = ['a', 'b', 'h', 'i', 's', 'h', 'e', 'k'];
console.log(arr3.join(""));