import addonMenu from "./addons/menu.js";
import addonSearch from "./addons/addon-search.js";
import bsModal from "./addons/bs-modal.js";
addonMenu();
addonSearch();
bsModal();

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > $("#header").height()) {
      $("body").addClass("body-header-scroll");
      $(".header__mid").addClass("fixed");
    } else {
      $("body").removeClass("body-header-scroll");
      $(".header__mid").removeClass("fixed");
    }
  });

  function backTop() {
    // var offset = 300;
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > offset) {
    //         $('.btn__up').addClass('active');
    //     } else {
    //         $('.btn__up').removeClass('active');
    //     }
    //     // ($(this).scrollTop() > offset) ? $back_to_top.addClass('active'): $back_to_top.removeClass('active');
    // });
    // $('.btn__up').on('click', function() {
    //     $('body,html').animate({
    //         scrollTop: 0,
    //     }, 0);
    // });

    var offset = 300,
      $back_to_top = $(".btn__up");
    $(window).scroll(function () {
      $(this).scrollTop() > offset
        ? $back_to_top.addClass("active")
        : $back_to_top.removeClass("active");
    });
    $back_to_top.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 100);
      return false;
    });
  }
  backTop();
  function book__car() {
    var offset = 850,
      $book_top = $(".book__car");
    $(window).scroll(function () {
      $(this).scrollTop() > offset
        ? $book_top.addClass("active")
        : $book_top.removeClass("active");
    });
  }
  book__car();
  // $(window).scroll(function() {
  //     var scroll = $(window).scrollTop();
  //     if (scroll >= 200) {
  //         $(".header__mid").addClass("fixed");
  //     } else {
  //         $(".header__mid").removeClass("fixed");
  //     }
  // });
  // $(`<div class="after-shadow-1"></div><div class="after-shadow-2"></div>`).appendTo('.decorate__global');
  // $(`<div class="before-shadow-1"></div><div class="before-shadow-2"></div>`).appendTo('.decorate__global-1');
});

var GUI = (function () {
  var win = $(window);
  var html = $("html,body");

  var dateSelect = function () {
    if ($("#datepicker ").length === 0) return;
    $("#datepicker").datepicker({
      dateFormat: "dd/mm/yy",
    });
    if ($("#datepicker2 ").length === 0) return;
    $("#datepicker2").datepicker({
      dateFormat: "dd/mm/yy",
    });
    if ($(".search-rental select.form-control ").length === 0) return;
    $(".search-rental select.form-control").select2();
    if ($(".page-contact .main-contact select ").length === 0) return;
    $(".page-contact .main-contact select").select2();
  };

  var bannerSlider = function () {
    if ($(".banner__slider ").length === 0) return;
    var swiper3 = new Swiper(".banner__slider", {
      speed: 1500,
      // autoplay: {
      //     delay: 3000,
      // },
      lazy: false,
      loop: true,
      spaceBetween: 0,
      navigation: {
        nextEl: ".banner__slider .swiper-button-next",
        prevEl: ".banner__slider .swiper-button-prev",
      },
    });
  };

  var productSlide = function () {
    var swiper = new Swiper(".mySwiper", {
      lazy: false,
      spaceBetween: 15,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      speed: 1500,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        576: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      },
    });
    var swiper2 = new Swiper(".mySwiper2", {
      lazy: false,
      spaceBetween: 10,
      speed: 1500,
      loop: true,

      // autoplay: {
      //     delay: 3000,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  };

  var forcusMenu = function () {
    // chien code

    const menu__link = document.querySelectorAll(".menu__link");

    //
    const currentLocation = location.href;
    const menuLength = menu__link.length;
    for (let i = 0; i < menuLength; i++) {
      if (menu__link[i].href === currentLocation) {
        menu__link[i].className = "menu__link active";
      }
    }
  };
  var sliderIndexR = function () {
    var NewsFeed = new Swiper(".NewsFeed__slider", {
      speed: 1500,
      slidesPerView: 4,
      loop: true,
      spaceBetween: 16,
      slideClass: "NewsFeed__slider-item",
      navigation: {
        nextEl: ".NewsFeed__slider-button-next",
        prevEl: ".NewsFeed__slider-button-prev",
      },
      breakpoints: {
        230: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });

    var Patner = new Swiper(".Patner__slider", {
      // speed: 1500,
      slidesPerView: 5,
      loop: true,
      spaceBetween: 10,
      slideClass: "Patner__slider-item",
      // autoplay: {
      //     // delay: 2500,
      //     // disableOnInteraction: false,
      // },
      breakpoints: {
        230: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
      },
    });
  };

  return {
    _: function () {
      bannerSlider();
      productSlide();
      forcusMenu();
      sliderIndexR();
      dateSelect();
    },
  };
})();

$(document).ready(function () {
  GUI._();
});
