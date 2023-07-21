// Destructuring: assigning array elems or obj elems to a variable

// Arrays
// without destructuring
let item = [1, 2, 3, 4];
// let x = item[0];
// let y = item[1];
// console.log(x,y);
// this is a lengthy process

// Destructuring
let [x, y, z, p] = item;
console.log(x, y, z, p);

// e.g 2:
let hotel = {
  name: "hotel1",
  location: "street no this that",
  category: ["chinese", "english", "italian"],
};

// let [first, second] = hotel.category;

// we need to skip english
let [first, , third] = hotel.category;
console.log(first, third);

// switch/swap using destructuring
[first, third] = [third, first];
console.log(first, third);

// Destructuring nested arrays
let nums = [2, 3, [1, 4]];
// let [a, ,b] = nums;
let [a, , [b, c]] = nums;
console.log(a, b, c);

// Objects

let hotels = {
  Name: "hotel2",
  Location: "address hotel 2",
  foodCategories: ["chinese", "italian", "english"],
  mainMenu: ["foodA", "foodB", "foodC"],
  openingHours: {
    sunday: {
      open: "09:00AM",
      close: "11:00PM",
    },
    monday: {
      open: "10:00AM",
      close: "11:00PM",
    },
  },
};


// name should be matching in object
// let {Name, Location, mainMenu} = hotels;
// console.log(Name, Location, mainMenu);

// name: newName
// what if we want to change the names
// let {Name: hotelName, Location: hotelLocation, mainMenu: menu} = hotels;
// console.log(hotelName, hotelLocation, menu);

// we can also give default values if the names doesnot match
// let {name = "default", Location} = hotels;
// console.log("name was with big N in the object", name, Location);

// Destructuting nested objects
// let {Location, openingHours} = hotels;
// console.log(openingHours);
// let {monday} = openingHours;
// console.log(monday);
// easy way to do this
let {openingHours: {monday: {open, close}}} = hotels;
// console.log("Opening Hour Object :", openingHours); error
// console.log("Inside opening hour :", monday); error
console.log("Inside monday :", open);
console.log("Inside monday :", close);

