import "./style.css";

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  speed: 600,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".main-banner").style.marginTop =
    document.querySelector("header").offsetHeight + "px";

  let element = document.getElementById("test"),
    elementOffset = 94.625;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= elementOffset) {
      if (!element.classList.contains("fixed")) {
        element.classList.add("fixed");
      }
    } else {
      element.classList.remove("fixed");
    }
  });
});


