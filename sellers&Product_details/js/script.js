var sellHover = document.getElementById("top_navber");
sellHover.addEventListener("mouseover", function () {
  var a = document.getElementById("top_navber_sell_hover");
  console.log(a.style.display);
  // if(a.style.display!="none")
  // {
  //     a.style.display="none";
  // }
  // else{
  //     a.style.display="block";
  // }
});
function showAllCategories() {
  const a = document.getElementById("show_All_Categories");
  if (a.style.display != "block") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}

function loginasSeller() {
  const popup = document.querySelector(".Login_as_seller-outbox");
  const stickytop = document.getElementById("button-card-section");
  const pass = document.getElementById("login_password").value;
  const mail = document.getElementById("email").value;
  if (pass == 12345 && mail == "tushar") {
    popup.style.display = "none";
    stickytop.style.display = "block";
  } else alert("Wrong password");
}
