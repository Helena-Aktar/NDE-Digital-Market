// // =================== Products ==================
const products = document.querySelector(".products");
const ALLproduct = document.querySelector(".all_product");
const product = products.querySelectorAll(".product");
const productsearchBar = document.querySelector("#search_product");
// console.log(products);
// console.log(product);
// console.log(productsearchBar);
// =================== Products search ==================
// my way
//searches products

const searchProduct = () => {
  ALLproduct.querySelector(".cards_container").style.background = "white";
  ALLproduct.querySelector(".markerdiv").style.background = "white";
  ALLproduct.querySelector(".expanderdiv").style.background = "white";

  ALLproduct.querySelector(".hubberdiv").style.background = "white";

  ALLproduct.querySelector(".mammodiv").style.background = "white";
  ALLproduct.querySelector(".softdiv").style.background = "white";
  ALLproduct.querySelector(".umdiv").style.background = "white";
  // console.log(ALLproduct.querySelector(".cards_container"));
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
      products.querySelector(".innerText").style.display = "block";

      // document.querySelectorAll("h4").display = "none";
    } else {
      item.style.display = "none";
      // products.querySelector(".innerText").style.display = "none";

      // document.querySelectorAll("h4").display = "none";
    }
  });
  if (val == "") {
    products.querySelector(".innerText").style.display = "none";
    ALLproduct.querySelector(".cards_container").style.background =
      "var(--color-gray)";
    ALLproduct.querySelector(".markerdiv").style.background =
      "var(--color-gray)";
    ALLproduct.querySelector(".expanderdiv").style.background =
      "var(--color-gray)";

    ALLproduct.querySelector(".hubberdiv").style.background =
      "var(--color-gray)";

    ALLproduct.querySelector(".mammodiv").style.background =
      "var(--color-gray)";
    ALLproduct.querySelector(".softdiv").style.background = "var(--color-gray)";
    ALLproduct.querySelector(".umdiv").style.background = "var(--color-gray)";
    // console.log(ALLproduct.querySelector(".cards_container"));
    products.querySelector(".a").style.display = "block";
    products.querySelector(".b").style.display = "block";
    products.querySelector(".c").style.display = "block";
    products.querySelector(".d").style.display = "block";
    products.querySelector(".e").style.display = "block";
    products.querySelector(".f").style.display = "block";
    products.querySelector(".g").style.display = "block";
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

if (searchValue != null) {
  ALLproduct.querySelector(".cards_container").style.background = "white";
  ALLproduct.querySelector(".markerdiv").style.background = "white";
  ALLproduct.querySelector(".expanderdiv").style.background = "white";

  ALLproduct.querySelector(".hubberdiv").style.background = "white";

  ALLproduct.querySelector(".mammodiv").style.background = "white";
  ALLproduct.querySelector(".softdiv").style.background = "white";
  ALLproduct.querySelector(".umdiv").style.background = "white";
  // console.log(ALLproduct.querySelector(".cards_container"));
  products.querySelector(".a").style.display = "none";
  products.querySelector(".b").style.display = "none";
  products.querySelector(".c").style.display = "none";
  products.querySelector(".d").style.display = "none";
  products.querySelector(".e").style.display = "none";
  products.querySelector(".f").style.display = "none";
  products.querySelector(".g").style.display = "none";
  const val = searchValue.toLowerCase();
  console.log(val);
  product.forEach((item) => {
    console.log(product);
    let title = item.querySelector("span").textContent.toLowerCase();
    console.log(title);
    if (title.indexOf(val) != -1) {
      item.style.display = "block";
      products.querySelector(".innerText").style.display = "block";
    } else {
      item.style.display = "none";
      products.querySelector(".innerText").style.display = "none";
    }
  });
  localStorage.clear();
}
