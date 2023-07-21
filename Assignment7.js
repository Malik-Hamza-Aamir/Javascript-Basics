// Create two variables myHobby , age . Now set their value in local storage (according to your hobby and age).
// After setting also get value from local storage and display their values in console.

let myHobby = "coding";
let age = 22;

localStorage.setItem("myHobby", myHobby);
localStorage.setItem("age", age);

console.log(localStorage.getItem("myHobby"));
console.log(localStorage.getItem("age"));