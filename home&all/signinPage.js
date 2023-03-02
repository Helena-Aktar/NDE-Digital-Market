
const inputField1 = document.getElementById("login_password");
const inputField2 = document.getElementById("email");

const buttonHeight = 40;
const buttonWidth = 150;
const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

const button = document.getElementById("register_button");

inputField1.addEventListener("input", updateValues);
inputField2.addEventListener("input", updateValues);

function updateValues() {
  const value1 = inputField1.value;
  const value2 = inputField2.value;
  console.log(value1, value2); // display the real-time values in the console
  if (value2 == "tushar" && value1 == 12345) {
    button.removeEventListener("mouseover", moveButton);
        button.addEventListener("click", function () {
            //alert("login Successfull");
            window.location.href = "/home&all/homePage.html";
        });
  } else {
    button.addEventListener("mouseover", moveButton);
  }
}

function moveButton() {
  button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + "px";
  button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
}
