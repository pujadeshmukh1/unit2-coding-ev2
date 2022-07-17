import navbar from "../components/navbar.js";
console.log(navbar());

document.getElementById('navbar').innerHTML=navbar();





let form = document.querySelector("form");

let userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
  };
  if (checkEmails(data.email) === true) {
    userData.push(data);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Account Creating Succesful")
    window.location.href="login.html"

  }
   else{
      alert("Account Already Exists")  
  }
  
});
function checkEmails(email) {
  let filterd = userData.filter(function (element) {
    return email === element.email;
  });
  if (filterd.length > 0) {
    return false;
  } else {
    return true;
  }
}

