function show(imgID) {
  // console.log(imgID);
  var a = document.querySelector("#print");
  a.innerHTML = "";
  // var p = imgID.innerHTML;
  // console.log(p);
  var b = document.createElement("div");
  b.innerHTML = `
    <img style="width: 350px; height: 330px; margin: 10px; position:relative; align-item:right;" 
    src="/Medical Equipment Image/Bone & Bone Marrow Biopsy/Bone Marrow Aspiration Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(${imgID}).png" alt="">
    `;
  a.appendChild(b);
  // console.log(a);
  setTimeout(off, 10000);
}
function off() {
  var a = document.querySelector("#print");
  a.innerHTML = "";
}

function change(a) {
  const arr = [
    "/Medical-Equipment-Image/Bone-&-Bone-Marrow-Biopsy/Bone-Marrow-Aspiration-Needle/Stainless-Steel-Bone-Marrow-Aspiration-Biopsy-puncture-Needle-2.png",
    "/Medical-Equipment-Image/Bone-&-Bone-Marrow-Biopsy/Bone-Marrow-Aspiration-Needle/Stainless-Steel-Bone-Marrow-Aspiration-Biopsy-puncture-Needle-0.png",
    "/Medical-Equipment-Image/Bone-&-Bone-Marrow-Biopsy/Bone-Marrow-Aspiration-Needle/Stainless-Steel-Bone-Marrow-Aspiration-Biopsy-puncture-Needle-1.png",
    "/Medical-Equipment-Image/Bone-&-Bone-Marrow-Biopsy/Bone-Marrow-Aspiration-Needle/Stainless-Steel-Bone-Marrow-Aspiration-Biopsy-puncture-Needle-3.png",
  ];
  console.log(a);
  console.log(arr[a]);
  // var img = document.getElementById("img1");
  // console.log(img);
  // var bigImg = document.getElementById("product_image");
  // console.log(bigImg);
  // bigImg.innerHTML="";
  document.getElementById("root_img").src = arr[a];
  // b.innerHTML=`
  // <img style="width: 420px; height: 350px;"
  // src="/sellers&Product_details/product_details/img/1st_img.png" alt="">
  // `;
  // bigImg.appendChild(b);
}

// // zoom start
// // const array = [
// //   "/Medical-Equipment-Image/Bone-&-Bone-Marrow-Biopsy/Bone-Marrow-Aspiration-Needle/Stainless-Steel-Bone-Marrow-Aspiration-Biopsy-puncture-Needle(2).png",
// //   "/Medical-Equipment-Image/Bone-&-Bone-Marrow-Biopsy/Bone-Marrow-Aspiration-Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(0).png",
// //   "/Medical Equipment Image/Bone & Bone Marrow Biopsy/Bone Marrow Aspiration Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(1).png",
// //   "/Medical Equipment Image/Bone & Bone Marrow Biopsy/Bone Marrow Aspiration Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(3).png",
// // ];
// const container = document.querySelector("#zoom");
// const image = document.querySelector("#root_img");
// const lens = document.querySelector(".lens");
// const result = document.querySelector(".res");
// //  result.style.display = "none";
// console.log(image);
// // console.log(result);
// const containerRact = container.getBoundingClientRect();
// const imageRact = image.getBoundingClientRect();
// const lensRact = lens.getBoundingClientRect();
// const resultRact = result.getBoundingClientRect();
// // result.style.display = "none";
// container.addEventListener("mousemove", zoomImage);
// // result.style.display = "none";
// function zoomImage(e) {
//   result.style.display = "block";
//   console.log(result.style.display);
//   const { x, y } = getMousepositon(e);
//   console.log("zoom image", e.clientX, e.clientY);
//   lens.style.left = x + "px";
//   lens.style.top = y + "px";
//   let fx = resultRact.width / lensRact.width;
//   let fy = resultRact.height / lensRact.height;
//   result.style.backgroundSize = `${imageRact.width * fx}px ${
//     imageRact.height * fy
//   }px`;
//   result.style.backgroundPosition = `-${x * fx}px -${y * fy}px`;
//   result.style.backgroundImage = `url(${image.src})`;
//   // result.style.display = "none";
// }
// function getMousepositon(e) {
//   let x = e.clientX - containerRact.left - lensRact.width / 2;
//   let y = e.clientY - containerRact.top - lensRact.width / 2;
//   let minX = 0;
//   let minY = 0;
//   let maxX = imageRact.width - lensRact.width;
//   let maxY = imageRact.height - lensRact.height;
//   if (x <= minX) {
//     x = minX;
//   } else if (x >= maxX) {
//     x = maxX;
//   }
//   if (y <= minY) {
//     y = minY;
//   } else if (y >= maxY) {
//     y = maxY;
//   }
//   return { x, y };
// }
// container.addEventListener("mouseout", (event) => {});
// onmouseout = (event) => {
//   console.log(" mouse out");
//   result.style.display = "none";
// };
// // container.addEventListener("mouseout",function(event){
// //     result.style.display="none";
// // })

// // zoom End
