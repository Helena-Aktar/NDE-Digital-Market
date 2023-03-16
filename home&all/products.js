// // =================== Products ==================
const products = document.querySelector(".products");
const Allproducts = document.querySelector(".all_product");
const Searchedproducts = document.querySelector(".searched_products");

const product = products.querySelectorAll(".product");
const productsearchBar = document.querySelector("#search_product");
// console.log(products);
// console.log(product);
// console.log(productsearchBar);
// =================== Products search ==================
// my way
//searches products

const searchProduct = () => {
  const val = productsearchBar.value.toLowerCase();
  // console.log(val);
  if (val != "") {
    Allproducts.style.display = "none";
    Searchedproducts.style.display = "block";
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
        // products.querySelector(".innerText").style.display = "none";

        // document.querySelectorAll("h4").display = "none";
      }
    });
  } else {
    Allproducts.style.display = "flex";
    Searchedproducts.style.display = "none";
  }
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
// console.log(searchValue);
if (searchValue != "") {
  // console.log(searchValue);
  Allproducts.style.display = "none";
  Searchedproducts.style.display = "block";
  product.forEach((item) => {
    // console.log(products);
    // console.log(item);
    let title = item.querySelector("span").textContent.toLowerCase();
    // console.log(title);
    if (title.indexOf(searchValue) != -1) {
      item.style.display = "block";

      // document.querySelectorAll("h4").display = "none";
    } else if (searchValue == null) {
      Allproducts.style.display = "flex";
      Searchedproducts.style.display = "none";
    } else {
      item.style.display = "none";
      // products.querySelector(".innerText").style.display = "none";

      // document.querySelectorAll("h4").display = "none";
    }
  });
  localStorage.clear();
} else {
  Allproducts.style.display = "flex";
  Searchedproducts.style.display = "none";
}
function track() {
  const track_value = document.querySelector("#order_num").value;
  localStorage.setItem("order_key", track_value);
  window.location.href = "/home&all/trackOrder.html";
  document.querySelector("#order_num").value = "";
}
