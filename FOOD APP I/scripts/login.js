import navbar from "../components/navbar.js";
console.log(navbar());

document.getElementById('navbar').innerHTML=navbar();

let form = document.querySelector("form");

  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
      email: form.email.value,
      password: form.password.value,
    };

    let count = 0;
    if (checkSignin(data.email, data.password) === true) {
      count++;
    }

    if (count >= 1) {
      localStorage.setItem("signin", JSON.stringify(data));
      alert("Sign in Successful");
      window.location.href = "home.html";
    } else {
      alert("wrong Username or password")
    }
  });
  function checkSignin(email, password) {
    let filter = userData.filter(function (element) {
      return element.email === email && element.password === password;
    });
    if (filter.length > 0) {
      return true;
    } else {
      return false;
    }
    }