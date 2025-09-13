//! story section

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

//   return direction;
// }
//! end story section
//! start slider
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
//! scroll section
var swiper = new Swiper(".swiper2", {
  slidesPerView: "autp",
  // direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

//   return direction;
// }
//! mostscroll section
var swiper = new Swiper(".swiper3", {
  slidesPerView: "auto",
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // on: {
  //   resize: function () {
  //     swiper.changeDirection(getDirection());
  //   },
  // },
});

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

//   return direction;
// }
//! footer more js
$(".footer__more").on("click", function () {
  let moreText = $(".footer__text");
  if (moreText.css("max-height") === "max-content") {
    moreText.css("max-height", "14rem");
    $(this).text("مشاهده بیشتر");
  } else {
    moreText.css("max-height", "max-content");
    $(this).text("بستن");
  }
});
