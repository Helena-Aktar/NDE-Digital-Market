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
    "/Medical-Equipment-Image/Bone-&-Bone-Marrow-Biopsy/Bone-Marrow-Aspiration-Needle/Stainless-Steel-Bone-Marrow-Aspiration-Biopsy-puncture-Needle(2).png",
    "/Medical-Equipment-Image/Bone-&-Bone-Marrow-Biopsy/Bone-Marrow-Aspiration-Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(0).png",
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


// zoom start
// const array = [
//   "/Medical-Equipment-Image/Bone-&-Bone-Marrow-Biopsy/Bone-Marrow-Aspiration-Needle/Stainless-Steel-Bone-Marrow-Aspiration-Biopsy-puncture-Needle(2).png",
//   "/Medical-Equipment-Image/Bone-&-Bone-Marrow-Biopsy/Bone-Marrow-Aspiration-Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(0).png",
//   "/Medical Equipment Image/Bone & Bone Marrow Biopsy/Bone Marrow Aspiration Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(1).png",
//   "/Medical Equipment Image/Bone & Bone Marrow Biopsy/Bone Marrow Aspiration Needle/Stainless Steel Bone Marrow Aspiration Biopsy puncture Needle(3).png",
// ];
const container = document.querySelector("#zoom");
const image = document.querySelector("#root_img");
const lens = document.querySelector(".lens");
const result = document.querySelector(".res");
// console.log(image);
// console.log(result);
const containerRect = container.getBoundingClientRect();
const imageRect = image.getBoundingClientRect();
const lensRect = lens.getBoundingClientRect();
const resultRect = result.getBoundingClientRect();

container.addEventListener("mousemove", zoomImage);

// var z = result.style.backgroundImage = `url(${image.src})`;
// console.log(z);

function zoomImage(e) {
    // console.log("zoom image", e.clientX, e.clientY)
    const { x, y } = getMousePos(e)

    lens.style.left = x + "px";
    lens.style.top = y + "px";

    let fx = resultRect.width / lensRect.width;
    let fy = resultRect.height / lensRect.height;

    result.style.backgroundSize = `${imageRect.width * fx}px ${
        imageRect.height * fy
    }px`
    result.style.backgroundPosition = `-${x * fx}px -${y * fy}px`
}

function getMousePos(e) {
    let x = e.clientX - containerRect.left - lensRect.width / 2;
    let y = e.clientY - containerRect.top - lensRect.height / 2;

    let minX = 0;
    let minY = 0;
    let maxX = containerRect.width - lensRect.width;
    let maxY = containerRect.height - lensRect.height;

    if (x <= minX) {
        x = minX;
    } else if (x >= maxX) {
        x = maxX;
    }
    if (y <= minY) {
        y = minY;
    } else if (y >= maxY) {
        y = maxY;
    }

    return { x, y };
}

function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /* Create lens: */
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /* Insert lens: */
  img.parentElement.insertBefore(lens, img);
  /* Calculate the ratio between result DIV and lens: */
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /* Set background properties for the result DIV */
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /* Execute a function when someone moves the cursor over the image, or the lens: */
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /* And also for touch screens: */
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    /* Calculate the position of the lens: */
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /* Prevent the lens from being positioned outside the image: */
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /* Set the position of the lens: */
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /* Display what the lens "sees": */
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
// zoom End
