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
    "/Medical Equipment Image/Bone & Bone Marrow Biopsy/Bone Marrow Aspiration Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(2).png",
    "/Medical Equipment Image/Bone & Bone Marrow Biopsy/Bone Marrow Aspiration Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(0).png",
    "/Medical Equipment Image/Bone & Bone Marrow Biopsy/Bone Marrow Aspiration Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(1).png",
    "/Medical Equipment Image/Bone & Bone Marrow Biopsy/Bone Marrow Aspiration Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(3).png",
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
