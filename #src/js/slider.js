$(".slider__slides").slick({
  infinite: false,
  swipe: false,
  fade: true,
  loop: false,
  prevArrow: $(".slider__prev"),
  nextArrow: $(".slider__next"),
});

$(".blog__list").slick({
  dots: true,
  infinite: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,

  loop: false,
});
