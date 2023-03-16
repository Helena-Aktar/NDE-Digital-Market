const orderValue = localStorage.getItem("order_key");

const order_num = document.querySelector("#order_number");
order_num.innerHTML = orderValue;
