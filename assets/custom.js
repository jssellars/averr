$(document).ready(function() {
  //header loading bug fixes
  $(".css-transitions-only-after-page-load").each(function (index, element) {
      setTimeout(function () { $(element).removeClass("css-transitions-only-after-page-load") }, 10);
  });
  setTimeout(function () { 
    $(".nav-wrap .logo").css('opacity', '1')
  }, 1500);
  //header loading bug fixes end

  $(".everything_body .rowpl.owl-carousel").owlCarousel({
    items: 3,
    responsive : {
      0 : {
        items: 1,
        loop:true,
        margin:15,
        responsiveClass:true,
        stagePadding: 30,
        nav: false,
        dots: true
      },
      480 : {
        items: 2,
        loop:true,
        margin:15,
        responsiveClass:true,
        stagePadding: 30,
        nav: false,
        dots: true
      },
      767 : {
        items: 3,
        margin:15,
        stagePadding: 30,
        nav: false,
        dots: false
      },
      1200 : {
        items: 3,
      }
    }
  });

  $("#shopify-section-about-guide .rowpl.owl-carousel").owlCarousel({
    items: 3,
    responsive : {
      0 : {
        items: 1,
        loop:true,
        margin:15,
        responsiveClass:true,
        nav: false,
        dots: true
      },
      480 : {
        items: 2,
        loop:true,
        margin:15,
        responsiveClass:true,
        nav: false,
        dots: true
      },
      767 : {
        items: 4,
        margin:15,
        nav: false,
        dots: false
      },
      1200 : {
        items: 4,
      }
    }
  });




  $(".banner-wrap.owl-carousel").owlCarousel({
    items: 1,
    loop: true,
  });
  $(".customer-inner.owl-carousel").owlCarousel({
    nav: true,
    items: 3,
    loop: false,
    margin: 23,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      576: {
        items: 2,
        nav: true
      },
      900: {
        items: 3,
        nav: false
      }
    }
  });
  $('.owl-carousel.logo-bar').owlCarousel({
    loop:true,
    margin:10,
    nav:true, 
    responsive:{
      0:{
        items:2.5
      },
      641:{
        items:3
      },
      992:{
        items:5
      }
    }
  }); 
  $(".menu-btn").click(function() {
    $(".side-menu").addClass("show");
    $("body").addClass("menu-active");
  });
  $(".close-menu-btn").click(function() {
    $(".side-menu").removeClass("show");
    $("body").removeClass("menu-active")
  });
  const $menu = $('.side-menu');

  $(document).mouseup(e => {
    if (!$menu.is(e.target) &&
        $menu.has(e.target).length === 0) {
      $menu.removeClass('show');
      $("body").removeClass("menu-active")
    }
  });
  $("#search-toggle").click(function(e) {
    e.preventDefault();
  });
  $(".search-btn").click(function() {
    showSearchbar();
  });
  $(".mobile-category .search").click(function(e) {
    e.preventDefault();
    showSearchbar();
  });
  $(".close-searchbar").click(function() {
    $(".searchbar").removeClass("show");
    $("header").removeClass("searchbar-active");
  });
  const $sb = $('.searchbar');
  $(document).mouseup(e => {
    if (!$sb.is(e.target) &&
        $sb.has(e.target).length === 0) {
      $sb.removeClass('show');
      $("header").removeClass("searchbar-active")
    }
  });
  if($(".index header").hasClass("fixed") || $(".collection header").hasClass("fixed") || $(".page-collection-landing header").hasClass("fixed")){
    $(".index header").removeClass("fixed");
    $(".collection header").removeClass("fixed");
    $(".page-collection-landing header").removeClass("fixed");
  }
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $(".index header").addClass("fixed");
      $(".collection header").addClass("fixed");
      $(".page-collection-landing header").addClass("fixed");
    }else{
      $(".index header").removeClass("fixed");
      $(".collection header").removeClass("fixed");
      $(".page-collection-landing header").removeClass("fixed");
    }
  });
//   if($(".collection header").hasClass("fixed")){
//     $(".collection header").removeClass("fixed");
//   }
//   $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
//     if (scroll >= 1) {
//       $(".collection header").addClass("fixed");
//     }else{
//       $(".collection header").removeClass("fixed");
//     }
//   });
  $('.refer-link').click(function(){
    $('.refer-friend-wrapper').show();
  });

  $('.pop-close').click(function(){
    $('.refer-friend-wrapper').hide();
  });
  $('.flex-control-nav.flex-control-paging li').on('mouseover',function(){
    $(this).trigger('click');
  })
});
function showSearchbar(){
  console.log("Clicked");
  $(".searchbar").addClass("show");
  $("header").addClass("searchbar-active");
}


$(document).ready(function() {
  
  $(".klaviyo__notify").click(function(e){
    e.preventDefault();
      $("#contact_form .notify_email").addClass("dis-block");
          $("#contact_form .action_button").addClass("dis-block");
      $(".quantidte").addClass("dis-block");
    $(".notify__btn").hide();
    $(".lion-loyalty-widget.lion-loyalty-widget_position_left").hide();
    
    $(".klaviyo-form-UBfnxX.klaviyo-form.form-version-cid-2, .klaviyo-form-UBfnxX.klaviyo-form.form-version-cid-3").fadeIn();

});
});


var instaInited = false;

var instaFeedInterval = setInterval(function (){

  if(!instaInited && $(".page-new-about #insta-feed a").length) {
    instaInited = true;
    $(".page-new-about #insta-feed a").wrap('<div></div>');
    $(".page-new-about #insta-feed").owlCarousel({
      items: 3,
      responsive : {
        0 : {
          items: 2.5,
          loop:true,
          responsiveClass:true,
          nav: false,
          margin:15,
          dots: true
        },
        480 : {
          items: 3,
        },
        767 : {
          items: 4,
          loop:false,
          margin:30,
        }
      }
    });
    clearInterval(instaFeedInterval)
  }
}, 200);

// $(window).load(function() {

//   $('html').removeAttr('style');

// });

