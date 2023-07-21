// Q1:
async function greeting() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("I love Programming !!");
    }, 2000);
  });

  document.getElementById("heading").innerHTML = await myPromise;
}

greeting(); // i love programming after 2 seconds

// Q2:
// Find the Logical Error in below code. And How can we solve them with callback function approach?
// const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

// function getMovies() {
//   setTimeout(() => {
//     movies.forEach((movie, index) => {
//       console.log(movie.title);
//     });
//   }, 1000);
// }

// function createMovies(movie, callback) {
//   setTimeout(() => {
//     movies.push(movie);
//     callback();
//   }, 2000);
// }

// createMovies({ title: `Movie 3` }, getMovies);

// Q3:
// What are the three possible State of any promise?
// resolve
// reject
// pending

// Q4:
// Solve Question 2 again But this time with the help of promise

// const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

// function getMovies() {
//   setTimeout(() => {
//     movies.forEach((movie) => {
//       console.log(movie.title);
//     });
//   }, 1000);
// }

// function createMovies(movie) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       movies.push(movie);
//       resolve(); // Resolve the promise after adding the new movie
//     }, 2000);
//   });
// }

// createMovies({ title: `Movie 3` }).then(getMovies);

// Q5: solve using async await
const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

function getMovies() {
  setTimeout(() => {
    movies.forEach((movie) => {
      console.log(movie.title);
    });
  }, 1000);
}

function createMovies(movie) {
  return new Promise((resolve) => {
    setTimeout(() => {
      movies.push(movie);
      resolve(); // Resolve the promise after adding the new movie
    }, 2000);
  });
}

async function main() {
  await createMovies({ title: `Movie 3` });
  getMovies();
}

main();


// Q6:
// Status code starting with 404 represent which type of message/error?
// client side error : trying to access a page which is not created
