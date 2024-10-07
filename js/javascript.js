var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

var swiper = new Swiper(".mySwiper1", {
    loop: true,
    slidesPerView : 2.5,
    spaceBetween : 16,
    breakpoints : {
      1801 : {
        slidesPerView : 4,
        spaceBetween : 40,
      },
      751 : {
        slidesPerView : 3.5,
        spaceBetween : 40,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



$(".nav > ul > li").mouseover(function(){
  $(".nav > ul > li").find(".sub_menu").stop().slideDown();
});

$(".nav > ul > li").mouseout(function(){
  $(".nav > ul > li").find(".sub_menu").stop().slideUp();
});


$(window).scroll(function() {
  if ($(this).scrollTop() > 10) {
    $('.top_text_area').addClass('dis_none');
  } else {
    $('.top_text_area').removeClass('dis_none');
  }
});