// Arrays Methods

let letters = ["A" , "B", "C"];
console.log(letters);
// Reverse mutation orginal array changing method
let rev = letters.reverse();
console.log(rev);

// Concatinate new copy

let num = [1,2,3,5];
let concatenated = num.concat(rev);
console.log(concatenated);

// join method new copy
let joined = letters.join("");
console.log(joined);

// Slice Method : starting index included and last index not included
// cut part of some array: non mutating also does not change the orignal arr
// follows 0 based indexing
let slicedArr = num.slice(1,3);
console.log(slicedArr);

// splice : mutating : orignal modified
// we can delete or add new things in Array
// Array.splice(index, deleteValue, ValuetoAdd);
// return deleted items in the form of array
// for replacing used
let numbers = [3,4,5,6,7,8,9];
let splicedNum = numbers.splice(1,2,1);
console.log("Orignal Arr :", numbers);
console.log("Spliced Arr :" ,slicedArr);


// at method
console.log(numbers.at(-1));

// Map Method
// create new array
let salaries = [2,4,6,8,10];
let newSalaries = salaries.map((salary) => {
    return salary*2;
});

console.log(newSalaries);

// Filter Method
// perform filteration on array
// if return is true it is kept otherwise it is not kept in filter

let gifts = ["ring", "chocholate", "watch", "teddyBear"];
let filterGifts = gifts.filter((gift) => {
    if (gift === "watch" || gift === "chocholate") {
        return gift;
    }
});

console.log(filterGifts);

// reduce method
// returns a single value

let nums = [1,2,3];
let sum = nums.reduce((total , currVal) => {
    return total + currVal;
} , 0);

console.log(sum);
// doesnot mutate the arr

// find method
const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eva' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Hannah' },
    { id: 9, name: 'Isaac' },
    { id: 10, name: 'Jack' },
  ];

// the whole object will be returned
const foundStudent = students.find((student) => {
    return student.id === 5;
});

console.log(foundStudent);

// findIndex
const foundStudentIndex = students.findIndex((student) => {
    return student.id === 5;
});

console.log(foundStudentIndex);

// Soring of Arr
let numss = [2,-5,7,-6,5, -20];
let sorted = numss.sort();
console.log(sorted);