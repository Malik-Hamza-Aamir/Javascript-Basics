let nums = [1, 2, 3, 4, 5, 6];
console.log("Orignal Arr :", nums);
console.log("Spread Arr :", ...nums); // this returns values not an array datastructure

// usecases
let newArr = [9, 10, ...nums];
console.log("Start Added Arr :", newArr); // doesnot mutate the array gives an arr copy
console.log("Orignal Arr :", nums);

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

let updatedMenu = [...hotels.mainMenu, "FoodD", "FoodE"];
console.log(updatedMenu);

// join to arrays
let joinedArr = [...nums, ...newArr];
console.log(joinedArr);

// we can use spread operator in strings also
let passion = "programming";
console.log(...passion);