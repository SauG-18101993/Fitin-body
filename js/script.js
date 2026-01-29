// Navbar toggler animation
const btnToggler = document.querySelector(".navbar-toggler");

btnToggler.addEventListener("click", () => {
  btnToggler.classList.toggle("animate");
});

// Swiper init
const workoutSwiper = new Swiper(".workout-swiper", {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 1.5 },
    992: { slidesPerView: 2 },
    1500: { slidesPerView: 3 }
  }
});
