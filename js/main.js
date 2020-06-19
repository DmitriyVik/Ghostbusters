$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    // direction: "vertical",
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      // when window width is >= 614px
      614: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
