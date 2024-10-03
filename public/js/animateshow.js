document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const h1 = document.querySelectorAll("h1");
  const h2 = document.querySelectorAll("h2");
  const h3 = document.querySelectorAll("h3");
  const h4 = document.querySelectorAll("h4");
  const h5 = document.querySelectorAll("h5");
  const h6 = document.querySelectorAll("h6");
  const p = document.querySelectorAll("p");
  const a = document.querySelectorAll("a");
  const img = document.querySelectorAll("img");
  const input = document.querySelectorAll("input");
  const button = document.querySelectorAll("button");

  function checkVisibility() {
    const triggerBottom = window.innerHeight;

    button.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show-animation");
      } else {
        section.classList.remove("show-animation");
      }
    });

    input.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show-animation");
      } else {
        section.classList.remove("show-animation");
      }
    });

    h1.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show-animation");
      } else {
        section.classList.remove("show-animation");
      }
    });

    h2.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show-animation");
      } else {
        section.classList.remove("show-animation");
      }
    });

    h3.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show-animation");
      } else {
        section.classList.remove("show-animation");
      }
    });

    h4.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show-animation");
      } else {
        section.classList.remove("show-animation");
      }
    });

    h5.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show-animation");
      } else {
        section.classList.remove("show-animation");
      }
    });

    h6.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show-animation");
      } else {
        section.classList.remove("show-animation");
      }
    });

    p.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show-animation");
      } else {
        section.classList.remove("show-animation");
      }
    });

    a.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show-animation");
      } else {
        section.classList.remove("show-animation");
      }
    });

    img.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show-animation");
      } else {
        section.classList.remove("show-animation");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);

  // Kiểm tra khi tải trang
  checkVisibility();
});
