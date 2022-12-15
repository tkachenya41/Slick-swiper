$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    speed: 300,
    easing: "ease",
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    swipe: true,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    slidesPerRow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
