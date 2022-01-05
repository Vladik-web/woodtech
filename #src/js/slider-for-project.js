$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 7,

  slidesToScroll: 1,
  asNavFor: ".slider-for",

  arrows: false,
  focusOnSelect: true,
});
