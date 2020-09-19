$(function () {
  $(".saying__sliders").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    loop: true,
    centerMode: true,
    variableWidth: true,
    prevArrow: $(".sliders__arrows-left"),
    nextArrow: $(".sliders__arrows-right"),
    responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1134,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
});


// Scroll page
$("a.scroll-to").on("click", function (e) {
  e.preventDefault();
  var anchor = $(this).attr("href");
  $("html, body")
    .stop()
    .animate({
        scrollTop: $(anchor).offset().top - 0,
      },
      800
    );
});