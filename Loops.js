// For loop

for (let i = 0; i < 10; i++) {
    console.log("run the task");
}

let dishes = ["beryani", "chat", "keema", "pani poori"];
for (let j = 0; j < dishes.length; j++) {
    const element = dishes[j];
    console.log(element);
}

// while loop
let i=1;
while (i<5) {
    console.log("While loop : " + i);
    i++;
} 

let j=0;
while (j < dishes.length) {
    console.log("While Loop Dishes : ", dishes[j]);
    j++;
}

// Conditionals statement

let budget = 7000;
if (budget < 5000) {
    console.log("Budget smaller than 5000: true");
}

else if (budget > 5000 && budget < 6000) {
    console.log("Budget between 5000 and 6000: true");
}

else {
    console.log("Budget greater than 6000: true");
}

// break and continuous statements
// continuous: skip this it eration but keep going in loop
// break: break the loop

// AND && OR || NOT !
let password = "Hamza16Feb@";

if (password.length > 5 && password.includes("@")) {
    console.log("Password strenth: Top Notch");
}

// first not is checked then and then or

// Scopes

let score = 69; // global scope
if (true) {
    let score = 50; // block scope  
    console.log(score);
}

// Ternary operator (? :)
// when we want to store the result in some variable then ternary operators are used
let age = 15;

if (age > 18) {
    console.log("Qualify");
}else {
    console.log("Fail");
}

let result = age > 21 ? "Qualify" : "Fail";
// if age > 21  true then save qualify in result
// else save fail in result
console.log("Result :", result);

// Switch
switch (age) {
    case 15:
        console.log("age : 15");
        break;
    case 16:
        console.log("age : 16");
        break;

    default:
        console.log("Not Allowed")
        break;
}