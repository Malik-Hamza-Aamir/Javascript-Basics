// Objects

// key value pair

let car = {
  color: "black",
  model: 2022,
  company: "Honda",
  damagedYear: (birthyear) => {
    let age = 2023 - birthyear;
    return age;
  },
};

console.log(car);

// Accessing properties
console.log(car["color"]);

// or

console.log(car.company);

let propertyName = "color";
console.log(car[propertyName]);

// Modify object : changed the object
car.color = "blue";

// delete properties
delete car.company; // returns true false
console.log(car);

console.log(car.damagedYear(2002));

// this keyword
let person = {
  fname: "Hamza",
  lname: "Aamir",
  city: "Islamabad",
  age: 22,
  education: "Software Eng",
  getSummary: function () {
    return `${this.fname} ${this.lname} is ${this.education}`;
  },
};

console.log(person.getSummary());

// For Each Method

let dishes = ["beryani", "dish1", "dish2"];
dishes.forEach((dish) => {
  console.log(dish);
});

// Object Inside an Array
let blockList = [
  { userName: "John", reason: "Abusive Content" },
  { userName: "Smith", reason: "Copyright Issue" },
];

console.log(blockList);

for (let i = 0; i < blockList.length; i++) {
  console.log(blockList[i].userName);
}

// Math Object: Inbuild js library
console.log(Math);
console.log(Math.round(7.5));
console.log(Math.floor(7.5));
console.log(Math.ceil(7.5));
console.log(Math.random());
console.log(Math.random() * 100);

// pass by reference and pass by value in object/array

let arr = [1,2,3,4,5];
let ref = arr; // now this array is passed by reference
// any changes in ref[i] will result in change in arr[i]

console.log("Orignal Array" , arr);
console.log("Ref Array" , ref);

console.log(ref.pop());
console.log("After Pop");

console.log("Orignal Array" , arr);
console.log("Ref Array" , ref);


console.log("********************");


// Pass by value
// for pass by value we use spread operator

let val = [...arr]; // this array is pass by value
// any changes in val[i] will not result in change in arr[i]
console.log("Orignal Array" , arr);
console.log("Val Array" , val);

console.log(val.pop());
console.log("After Pop in val");

console.log("Orignal Array" , arr);
console.log("Val Array" , val);

// For in loop for objects only
// the car object is defined on the top we will just use them
// we get the keys in this case
for (const key in car) {
  console.log(key);
};

// we want the values of objects
console.log("**********Values in keys***********");
for (const key in car) {
  console.log(car[key]);
};