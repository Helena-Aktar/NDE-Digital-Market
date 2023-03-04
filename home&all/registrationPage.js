// function WelcomNewUser() {
//   console.log("heloo");
//   window.location.href = "/home&all/homePage.html";
// }
console.log("heloo");
const btn = document.getElementById("register_button");
const form = document.getElementById("form_event");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log("hellllllloo");
  const username = document.getElementById("email").value;
  localStorage.setItem("uname", username);
  window.location.href = "/home&all/Dashboard.html";
});
