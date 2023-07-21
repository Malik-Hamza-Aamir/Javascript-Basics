// Strings
console.log("Hello");

let fname = "Hamza";
let lname = "Aamir";

// console.log has special property to make a space between the two printed variables
console.log(fname, lname);

// String Concatenation : + can be used
// their will be no space in between because single variable is being printed
// to create a space we can concatenate a space also
// let fullname = fname + " " + lname;

// String Concatenation can be also done using template literals
let fullname = `Hello ${fname} ${lname}`;
console.log(fullname); 

// getting an string character
console.log(fname[0]);
// this will be wrong as we cannot apply map method directly to a string
// fname.map((elem, i) => {
//     console.log(fname[i]);
// });

// String Methods
// all theses functions are not modifying the orignal string
// its making copies of the string
console.log(fname.toLowerCase());
console.log(lname.toUpperCase());
console.log(fname.indexOf("m")); // always return the first occuring index

// Common String Methods

let hobbies = "    I play games    ";
// how to remove unwanted space
console.log(hobbies);
let newHobbies = hobbies.trim();
console.log(newHobbies);

// last index of: return the last index in the string
console.log(hobbies.lastIndexOf("s"));

// if we want to find a string or char is present in the string or not we use includes methods
console.log(newHobbies.includes("play"));

// slice method
let result  = newHobbies.slice(0,7); // indexes from 0 to 6 will be printed
console.log(result);

// split method
// we can convert a string to an Array
let strtoArr = newHobbies.split(" "); // spliting by space
console.log(strtoArr);

// now we can add array methods to the splited string
console.log(strtoArr.reverse());
console.log(strtoArr.join());

console.log(fname.split("").reverse().join(""));