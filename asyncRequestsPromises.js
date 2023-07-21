// Async javascript
// not synced with the normal flow of the code
// doesnot block execution of other code

// example:
// console.log(1);

// async code
// setTimeout(() => {
//   console.log("Async code after 3 sec");
// }, 3000);

// console.log(2);

// AJAX : HTTP REQUEST
// let request = new XMLHttpRequest();
// console.log(request);

// To convert string to JSON ARRAY

// HTTP Response status codes
// informational res    = 100 to 199
// successful res       = 200 to 299
// redirectional res    = 300 to 399
// Client side err res  = 400 to 499
// Server side err res  = 500 to 599

// let todos = (callback) => {
//   // set up request
//   request.open("Get", "https://jsonplaceholder.typicode.com/todos");

//   // sending the request
//   request.send();
//   request.addEventListener("readystatechange", () => {
//     // to get request in console
//     // console.log(request, request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//       //   console.log(request.responseText);
//       // err, data
//       let data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState !== 4) {
//       // console.log("Data Could not be fetched");
//       // err, data
//       callback("Data could not be fetched", undefined);
//     }
//   });
// };

// callbacks: function as an arguement
// todos((err, data) => {
// err and data values can be get from inside the if else statement
// console.log("Callback if fired");
//   if (err) {
// console.log(err);
//   } else {
// console.log(data);
// console.log(typeof data); // String
//   }
// });

// the same thing can be done but in a much cleaner way using
// promises: used to avoid call back hell but still not the best way
let handleData = (resource) => {
  let request = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    request.open("GET", resource);
    request.send();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          let data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          reject("Error fetching");
        }
      }
    });
  });
};


handleData("data.json")
  .then((data) => {
    console.log(data); // here we can return a new json file and then
  }) // we can call more json files here by .then((data) => {}) also called chaining of methods but also creates callback hell
  .catch((err) => {
    console.log("Error: " + err);
  });


// We can solve this using fetch api and aysnc await it returns a promise as well .then and .catch can also be used while declaring a function