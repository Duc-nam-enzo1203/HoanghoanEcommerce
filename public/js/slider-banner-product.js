// $(document).ready(function () {

//     $(".carousel-control-prev").click(function () {});
// });

let list = document.querySelector(".carousel-inner");
let items = document.querySelectorAll(".carousel-item");
let dots = document.querySelectorAll(".carousel-indicators button");
let prev = document.querySelector(".carousel-control-prev");
let next = document.querySelector(".carousel-control-next");

let lengthItems = items.length;

$(".carousel-inner .carousel-item").each(function () {
  var minPerSlide = lengthItems;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
