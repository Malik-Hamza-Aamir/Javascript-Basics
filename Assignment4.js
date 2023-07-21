// Q1:
console.log(Math.round(Math.random() * 10));
// random numbers from 0 - 9

// Q2:
// Create an object called country for a country of your
// choice, containing properties name , capital, language,
// population and neighbors

// Increase the country population by two million using dot
// notation.
// Decrease the country population by one million using
// bracket notation.
// Make language value in Uppercase.

let country = {
  name: "Pakistan",
  capital: "Islamabad",
  population: 10,
  neighbours: ["India", "Afghanistan", "China"],
};

console.log((country.population = country.population + 2));
console.log((country["population"] = country["population"] - 1));
console.log(country);

// Q3:
let car = {
  color: "Blue",
  model: 2021,
  company: "Toyota",
  describeCar: () => {
    return `Company of my car is ${this.company}. Its color is ${this.color} and Model of my car is ${this.model}`;
  },
};

let carColor = "Blue";

console.log(car[carColor]); // undefined
console.log(car.carColor); // undefined
// because we can access an object property using key

// Q4:
// Create a method describeCar inside car object in which you
// have to print like this in console using template literals

// Company of my car is ** . It color is And Model of my car
//  is __**

console.log(car.describeCar());

// Q5:
// Generate random numbers between 0 and 10 using trunc
// method of MATH object
function getRandomNumber() {
  let randomNumber = Math.random() * 10;
  console.log(Math.trunc(randomNumber));
}

getRandomNumber();

// Q6:

let arr = [1, 2, 3, 4];

arr.forEach((elem) => {
  if (elem == 1) {
    // cannot use continue to jump in foreach
    // continue;
    // can do return statement to jump this elem
    return;
  }

  console.log(elem);
});

// Q8:
let arr1 = [1, 2, 3, 4];

for (let elem in arr1) {
  console.log(elem); // key print 1 2 3 4
}

// Q9:
// You have to create a Shopping_Cart array with following features :
// addItem(itemName) : this function should add string itemName to cart
// removeItem(itemName): this function should remove any item which matches itemName. Hint : search for index of itemName and then remove it
// cartSize() : returns size of cart in terms of number of cart Items.

let shoppingCart = []; // empty array

function addItem(item) {
  shoppingCart.push(item);
}

addItem("shirt1");
addItem("pant1");
addItem("shirt2");
addItem("pant2");
addItem("shirt3");
addItem("pant3");

console.log(shoppingCart);

function removeItem(itemName) {
  let itemIndex = shoppingCart.indexOf(itemName);
  if (itemIndex !== -1) {
    shoppingCart.splice(itemIndex, 1);
    console.log("Deleted");
  } else {
    console.log("Item not found in shopping cart");
  }
}

removeItem("shirt3");
console.log(shoppingCart);

function cartSize(shoppingCart) {
  let length = shoppingCart.length;
  console.log("Shopping Cart Length :", length);
}

cartSize(shoppingCart);
