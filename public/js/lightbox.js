$(document).ready(function () {
  const images = document.querySelectorAll(".img-lightbox");
  $(".img-lightbox").click(function (e) {
    // Get src of image
    const src = e.target.getAttribute("src");

    // template light box
    const template = `<div class="lightbox">
      <div class="lightbox-content">
        <div class="box-left">
          <i id="left" class="fa-solid fa-angle-left"></i>
        </div>
        <img src="${src}" class="lightbox-img"/>
        <div class="box-right">
          <i id="right" class="fa-solid fa-angle-right"></i>
        </div>
    </div>`;

    // Gọi lên template
    document.body.insertAdjacentHTML("beforeend", template);
  });

  let index = 0;

  document.body.addEventListener("click", function (e) {
    let lightImage = document.querySelector(".lightbox-img");
    let lightSrc = "";

    if (e.target.matches(".lightbox")) {
      e.target.parentNode.removeChild(e.target);
    } else if (
      e.target.matches(".box-left") ||
      e.target.matches(".box-left i")
    ) {
      // Tác động vào div và i
      lightSrc = lightImage.getAttribute("src");
      index = [...images].findIndex(
        (item) => item.getAttribute("src") === lightSrc
      );
      index -= 1;
      // Tạo vòng lặp
      if (index == -1) {
        index = 3;
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src", newSrc);
      } else {
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src", newSrc);
      }
    } else if (
      e.target.matches(".box-right") ||
      e.target.matches(".box-right i")
    ) {
      // Tác động vào div và i
      lightSrc = lightImage.getAttribute("src");
      index = [...images].findIndex(
        (item) => item.getAttribute("src") === lightSrc
      );
      index += 1;
      // Tạo vòng lặp
      if (index == 4) {
        index = 0;
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src", newSrc);
      } else {
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src", newSrc);
      }
    }
  });
});
