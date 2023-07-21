// Date and Time
// Date object has both date and time

// date is a type of constructor
// months starts from 0
let currDate = new Date(23,7,2);
// year month date
console.log(currDate);

let dt = new Date(23,4,2,4,5,6);
// year month date hours minutes seconds
console.log(currDate);

// Local storage: in value stores string only
// how to store complex data in localstorage

let vehicle = [
    {company : "Honda", model : "2009"},
    {company : "Toyota", model : "2010"}
];

// console.log(vehicle);
// to store this into a localstorage we have to convert this
// object to String

let strOfObjects = JSON.stringify(vehicle);
console.log(strOfObjects, typeof strOfObjects);

localStorage.setItem('vehicle', strOfObjects);
console.log(localStorage);

// get localStorage str to obj formate
let strFormate = localStorage.getItem('vehicle');
let objFormate = JSON.parse(strFormate);
console.log(objFormate);