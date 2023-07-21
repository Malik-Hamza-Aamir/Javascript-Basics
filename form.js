// forms event
let form = document.querySelector(".form");

// Regex
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    console.log("submit the form");
    console.log("Email :", form.email.value);
    console.log("Password :", form.password.value);
});

