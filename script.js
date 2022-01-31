var likes = document.getElementsByClassName("like");
console.log(likes);
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];

  like.addEventListener("click", function () {
    if (like.style.color == "red") {
      like.style.color = "black";
    } else {
      like.style.color = "red";
    }
  });
}
var pluss = document.getElementsByClassName("plus-btn");
console.log(pluss);
for (let i = 0; i < pluss.length; i++) {
  let plus = pluss[i];

  plus.addEventListener("click", function () {
    plus.previousElementSibling.value++;
    Total();
  });
}

var minuss = document.getElementsByClassName("minus-btn");
console.log(minuss);
for (let i = 0; i < minuss.length; i++) {
  let min = minuss[i];
  min.addEventListener("click", function () {
    if (min.nextElementSibling.value > 1) {
      min.nextElementSibling.value--;
    }
  });
}
var totalPrice = document.getElementById("finalPrice");
var items = document.getElementsByClassName("Item");
console.log(items);
function Total() {
  var s = 0;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    s = parseInt(
      s +
        item.querySelector(".Quant").value *
          item.querySelector(".price").innerText
    );
    totalPrice.value = s;
    console.log(s);
  }
}
