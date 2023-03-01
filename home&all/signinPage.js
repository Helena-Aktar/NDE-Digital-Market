const buttonHeight = 40;
const buttonWidth = 150;
const maxWidth = window.innerWidth-buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;
window.addEventListener('DOMContentLoaded',function(){
    const button = this.document.getElementById("register_button");
    button.addEventListener('mouseover',function(){
        button.style.left=Math.floor(Math.random() * (maxWidth+1))+'px';
        button.style.top=Math.floor(Math.random() * (maxHeight+1))+'px';
    })
})
const password = document.getElementById("login_password");
// var value;
password.addEventListener("input", function(){
    const passwordvalue = password.value;
    console.log(passwordvalue);
});
//   console.log(value); // display the real-time value in the console

// function value()
// {
//     // const password = document.getElementById("login_password");
//     // const passwordvalue = password.value;
//     // console.log(passwordvalue);
//     // const email = document.getElementById("email");

// }



