// // =================== Products ==================
const products = document.querySelector(".products");
const product = products.querySelectorAll(".product");
const productsearchBar = document.querySelector("#search_product");
// console.log(products);
// console.log(product);
// console.log(productsearchBar);
// =================== Products search ==================
// my way
//searches products
const searchProduct = () => {
  products.querySelector(".innerText").style.display = "block";
  products.querySelector(".a").style.display = "none";
  products.querySelector(".b").style.display = "none";
  products.querySelector(".c").style.display = "none";
  products.querySelector(".d").style.display = "none";
  products.querySelector(".e").style.display = "none";
  products.querySelector(".f").style.display = "none";
  products.querySelector(".g").style.display = "none";

  const val = productsearchBar.value.toLowerCase();
  // console.log(val);
  product.forEach((item) => {
    // console.log(products);
    // console.log(item);
    let title = item.querySelector("span").textContent.toLowerCase();
    // console.log(title);
    if (title.indexOf(val) != -1) {
      item.style.display = "block";

      // document.querySelectorAll("h4").display = "none";
    } else {
      item.style.display = "none";

      // document.querySelectorAll("h4").display = "none";
    }
  });
};

// searched products
productsearchBar.addEventListener("keyup", searchProduct);
// my way ends

// // tushars way
// productsearchBar.addEventListener("keyup", function () {
//   const val = productsearchBar.value.toLowerCase();
//   console.log(val);
//   product.forEach((item) => {
//     console.log(product);
//     let title = item.querySelector("span").textContent.toLowerCase();
//     console.log(title);
//     if (title.indexOf(val) != -1) {
//       item.style.display = "flex";
//     } else {
//       item.style.display = "none";
//     }
//   });
// });
// // tushars way end

//============== search from another page ==============
const searchValue = localStorage.getItem("searchkey");

if (searchValue != null) {
  const val = searchValue.toLowerCase();
  console.log(val);
  product.forEach((item) => {
    console.log(product);
    let title = item.querySelector("span").textContent.toLowerCase();
    console.log(title);
    if (title.indexOf(val) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  localStorage.clear();
}
