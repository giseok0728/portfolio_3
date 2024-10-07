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



// 사이드 슬라이더 이벤트

$(".open_side_slide").click(function(){
  $(".m_side_slide").show();
  $(".open_side_slide").hide();
  $(".close_side_slide").show();
});

$(".close_side_slide").click(function(){
  $(".m_side_slide").hide();
  $(".close_side_slide").hide();
  $(".open_side_slide").show();
});




/* 메뉴 접히고 펼치기 */
$('.side_li').click(function(e){
  //console.log("메뉴 클릭됨");
  
  /* 만약 클릭된 메뉴에 엑티브 클래스가 있으면 */
  if ( $(this).hasClass('active') ){
      /* 클릭된 메뉴의 엑티브를 없앤다 */
      $(this).removeClass('active');
  }
  else {
      /* 클릭된 메뉴의 형제의 엑티브를 없앤다 */
      $(this).siblings('.active').removeClass('active');
      
      /* 클릭된 메뉴(지역)의 엑티브를 없앤다 */
      $(this).find('.active').removeClass('active');
      
      /* 클릭된 메뉴의 엑티브를 만든다 */
      $(this).addClass('active');
  }
  
  /* 클릭된 메뉴 안에 다른 메뉴를 클릭하면 위에있는 메뉴가 같이 클릭되는데 그것을 막아준다 */
  e.stopPropagation();
});