// Document object model
// tree like structure
// we can edit the html and css of the document
// dom is used to select an element then change that element

// console.log(document); // full html doc

// Prefered Method
// Queryselector: only gives the element specified
// querySelectorAll: gives all the specified tags

// giving the paragraph tag to specify
let result1 = document.querySelector("p"); // by tag
let result2 = document.querySelector("#para"); // by id
let result3 = document.querySelector(".heading"); // by class
let result4 = document.querySelectorAll("p"); // returns all p tags in a Nodelist type

// Unprefered method
let tagElem = document.getElementsByTagName("p");
let clasElem = document.getElementsByClassName("heading");
// let idElem = document.getElementsById("para");

// Updating and changing the content
// innerText: change the rext of element
// Ignore spaces
let heading = document.querySelector(".heading");
// heading.innerText = "<h1> hello world from js side </h1>";
// heading.innerText += "<h1> hello world from js side </h1>"; // add text next to the old text
// console.log(heading.innerText); // the tags are also being displayed

console.log("*************************");
// innerHTML: change the html of element
// It doesnot ignore spaces
// heading.innerHTML = "<p>Hello World</p>";
// heading.innerHTML += "<h3>Hello World</h3>"; // the h3 tag is added inside the h1 after printing hello on the screen
// console.log(heading); // not returning the tag heading tag just the text

// dynamically getting and setting the attribute of html
let atag = document.querySelector("#atag");
// now we change the attribute href
// console.log(atag.getAttribute('href')); get attribute

// set attribute
atag.setAttribute("href", "www.facebook.com");
atag.innerText = "facebook";

// CSS changing from js
let para1 = document.querySelector("#para1");
para1.style.color = "red"; // adding inline css
para1.style.backgroundColor = "yellow";


// Add remove or replace the class
para1.classList.add("newClass"); // Add
para1.classList.add("newClass2");
para1.classList.remove("newClass"); // remove a class
para1.classList.replace("newClass2", "newClass"); // replace class

// console.log(para1);


// Parent Children and Sibbling Element Selection
let parentElement = document.querySelector("#parent");
// Accessing All elements/childrens of the parent
console.log(parentElement.children); // we can apply array methods on them
// console.log(parentElement);
// we cannot use for each loop on htmlcollections
// but we can convert collection to array
Array.from(parentElement.children).forEach((elem) => {
    elem.classList.add("Coders");
});

// from child to parent accessing
let childElement = document.querySelector(".ch1");
console.log(childElement.parentElement);

// Accessing the next and prev elements using sibblings
console.log(childElement.nextElementSibling);
console.log(childElement.previousElementSibling); // no sibling prev just the parent


// Event Basics
// let eventElement = document.querySelector(".clickMe");
// eventElement.addEventListener("click" , () => {
//     console.log("Clicked");
// });

let liElements = document.querySelectorAll("li");
console.log(liElements);

liElements.forEach((liElem) => {
    liElem.addEventListener("click" , (e) => {
        console.log(e.target);
        e.target.style.textDecoration = "line-through";
        // for removing
        e.target.remove();
    });
});

// Adding elements
const ul = document.querySelector("ul");
const button = document.querySelector(".clickMe");

button.addEventListener("click" , () => {
    let li = document.createElement("li"); // created a new li
    li.textContent = "New";
    ul.append(li);
    // on top add : preppend
});

// Event Bubbling : when an event is added first the li event will occur
// then ul event will occur the event will keep occuring till it reached the root

// Delegation: put event to the parent and child can be captured
