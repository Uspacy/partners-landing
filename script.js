function initSlider() {
  $(".testimonial-wrapper").slick({
    dots: false,
    speed: 600,
    slidesToShow: 1,
    arrows: false,
  });
}

function handleChangeSlider() {
  $("a[data-slide]").click(function (e) {
    e.preventDefault();
    //Get next point
    var slideTo = $(this).data("slide") - 1;
    $(".testimonial-wrapper").slick("slickGoTo", slideTo);
    //Clear Prev Active Dot
    $(`.slider-dot:not()`).removeClass("active-dot");
    //Set Active Dot
    $(`.slider-dot:nth-child(${slideTo + 1})`).addClass("active-dot");
  });
}

$(document).ready(function () {
  initSlider();
  handleChangeSlider();
});
