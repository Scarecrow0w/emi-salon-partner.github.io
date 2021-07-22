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

  let navLinks = document.querySelector("#navLinks"),
    navLogo = document.querySelector("#navLogo"),
    navLinksOffset = 94.625;

  window.addEventListener("scroll", () => {
    if (window.innerWidth >= 1024) {
      if (window.pageYOffset >= navLinksOffset) {
        if (!navLinks.classList.contains("fixed")) {
          navLinks.classList.add("fixed");
          navLogo.classList.add('fixed');
          navLogo.classList.add('slidedown');
          navLogo.classList.add('logo-min');
        }
      } else {
        navLinks.classList.remove("fixed");
        navLogo.classList.remove('fixed');
        navLogo.classList.remove('slidedown');
        navLogo.classList.remove('logo-min');
      }
    }
  });
});

// Hamburger Menu
let btn = document.getElementById("menuBtn"),
  navLinks = document.getElementById("navLinks");

btn.onclick = () => {
  btn.classList.toggle('open');

  navLinks.classList.toggle('hidden');
  navLinks.classList.toggle('flex');
  navLinks.classList.toggle('slidedown');
}

