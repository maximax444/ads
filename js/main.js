$(".home-serv-tabs-wrap").slick({
 slidesToShow: 4,
 slidesToScroll: 3,
 infinite: false,
 arrows: true,
 prevArrow: ".accessories-prev",
 nextArrow: ".accessories-next",
 responsive: [{
  breakpoint: 1200,
  settings: {
   slidesToShow: 3
  }
 },
 {
  breakpoint: 992,
  settings: {
   slidesToShow: 2,
   slidesToScroll: 1
  }
 }]
});
$(".home-blog-slider").slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 arrows: true,
 prevArrow: ".home-blog-prev",
 nextArrow: ".home-blog-next",
 responsive: [{
  breakpoint: 1200,
  settings: {
   slidesToShow: 3
  }
 },
 {
  breakpoint: 992,
  settings: {
   slidesToShow: 1
  }
 }]
});
$(".home-reviews-write").slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 arrows: true,
 infinite: false,
 prevArrow: ".home-reviews-prev",
 nextArrow: ".home-reviews-next",
 responsive: [{
  breakpoint: 1200,
  settings: {
   slidesToShow: 3
  }
 },
 {
  breakpoint: 992,
  settings: {
   slidesToShow: 2
  }
 },
 {
  breakpoint: 576,
  settings: {
   slidesToShow: 1
  }
 }]
});
(function ($) {
 $(function () {
  $('.home-serv-tabs-wrap').on('click', '.home-serv-tabs-block:not(.home-serv-tabs-block-active)', function () {
   $(this)
    .addClass('home-serv-tabs-block-active').siblings().removeClass('home-serv-tabs-block-active')
    .closest('section.home-serv').find('.home-serv-cont-block').removeClass('home-serv-cont-block-active').eq($(this).index()).addClass('home-serv-cont-block-active');
  });
 });
})(jQuery);
(function ($) {
 $(function () {
  $('.home-reviews-tabs').on('click', '.home-reviews-tabs-block:not(.home-reviews-tabs-block-active)', function () {
   $(this)
    .addClass('home-reviews-tabs-block-active').siblings().removeClass('home-reviews-tabs-block-active')
    .closest('section.home-reviews').find('.home-reviews-cont-block').removeClass('home-reviews-cont-block-active').eq($(this).index()).addClass('home-reviews-cont-block-active');
  });
 });
})(jQuery);

$('.home-serv-next').on('click', function (e) {
 e.preventDefault();
 $(".home-serv-tabs-wrap").slick('slickNext');
});
$('.home-serv-prev').on('click', function (e) {
 e.preventDefault();
 $(".home-serv-tabs-wrap").slick('slickPrev');
});
$('.home-text-drop').on('click', function (e) {
 e.preventDefault();
 $(".home-text").toggleClass('home-text-active');
 $(this).hide();
});
// Конец главной

// Общее
$('input[type="tel"]').inputmask("+375 (99) 999-99-99");
$('.footer-menu-top').on('click', function (e) {
 e.preventDefault();
 var wr = $(this).closest('.footer-menu-block');
 $('.footer-menu-block').not(wr).removeClass('footer-menu-block-active');
 $(this).closest('.footer-menu-block').toggleClass('footer-menu-block-active');
});