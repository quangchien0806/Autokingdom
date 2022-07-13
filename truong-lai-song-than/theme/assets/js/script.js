function backTop() {
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
var GUI = (function () {
  var win = $(window);
  var html = $("html,body");

  var _scroll_menus = function () {
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
    });
  };

  var slideMains = function () {
    if ($(".banner-mains").length === 0) return;
    var swiper2 = new Swiper(".banner-mains", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      draggable: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    $(".showss-button-prev").click(function () {
      $(this)
        .parent(".group-btns__showss")
        .parent()
        .find(".swiper .swiper-button-prev")
        .trigger("click");
    });

    $(".showss-button-next").click(function () {
      $(this)
        .parent(".group-btns__showss")
        .parent()
        .find(".swiper .swiper-button-next")
        .trigger("click");
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

  var slideNewsMains = function () {
    if ($(".sl-news__mains").length === 0) return;
    var swiper2 = new Swiper(".sl-news__mains", {
      slidesPerView: 4,
      spaceBetween: 15,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false,
      // },
      draggable: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      },
    });

    $(".showss-button-prev").click(function () {
      $(this)
        .parent(".group-btns__showss")
        .parent()
        .find(".swiper .swiper-button-prev")
        .trigger("click");
    });

    $(".showss-button-next").click(function () {
      $(this)
        .parent(".group-btns__showss")
        .parent()
        .find(".swiper .swiper-button-next")
        .trigger("click");
    });
  };

  var slideFeedbackMains = function () {
    if ($(".sl-feedback__mains").length === 0) return;
    var swiper2 = new Swiper(".sl-feedback__mains", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      draggable: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    $(".showss-button-prev").click(function () {
      $(this)
        .parent(".group-btns__showss")
        .parent()
        .find(".swiper .swiper-button-prev")
        .trigger("click");
    });

    $(".showss-button-next").click(function () {
      $(this)
        .parent(".group-btns__showss")
        .parent()
        .find(".swiper .swiper-button-next")
        .trigger("click");
    });
  };

  const addonMenu = () => {
    $(".toggle__menu").on("click", function () {
      let has = $(".menu .menu__list:has(ul)");
      if (has) {
        has.append('<button type="button" class="btn__childrens"></button>');
      }
      $(".addon__menu").toggleClass("active");
      $("body").toggleClass("open__modal");
      $(".btn__childrens").on("click", function () {
        let _notMenu = $(this).parents(".menu__list").children("ul");
        $(".btn__childrens").not($(this)).removeClass("active");
        $(this).toggleClass("active");
        $(".menu .menu__list ul").not(_notMenu).slideUp();
        _notMenu.slideToggle();
      });

      $(".addon__menu").on("click", function (e) {
        if (!$(".menu").is(e.target) && $(".menu").has(e.target).length == 0) {
          $("body").removeClass("open__modal");
          $(".addon__menu").removeClass("active");
          $(".btn__childrens").remove();
        }
      });
    });
  };

  var questionMains = async function () {
    $(".items-question__mains:first-child")
      .find(".intros-question__mains")
      .slideDown();

    $(".titles-btn__mains").click(function () {
      $(this)
        .parent(".items-question__mains")
        .find(".intros-question__mains")
        .slideDown();
      $(".titles-btn__mains")
        .not(this)
        .parent(".items-question__mains")
        .find(".intros-question__mains")
        .slideUp();
    });
  };

  var questionMainsPages = async function () {
    $(".items-question__pages:first-child")
      .find(".intros-question__pages")
      .slideDown();

    $(".titles-btn__pages").click(function () {
      $(this)
        .parent(".items-question__pages")
        .find(".intros-question__pages")
        .slideDown();
      $(".titles-btn__pages")
        .not(this)
        .parent(".items-question__pages")
        .find(".intros-question__pages")
        .slideUp();
    });
  };

  var allHeightssssss = async function () {
    var win = await $(window);

    $(".slide-news__mains").each(function () {
      var highestBoxx = 0;
      $(this)
        .find(".names-news__mains")
        .each(function () {
          if ($(this).height() > highestBoxx) {
            highestBoxx = $(this).height();
          }
        });
      $(this).find(".names-news__mains").height(highestBoxx);
    });
  };

  var checkQuestion = async function () {
    $(" .baithi__group .answer label").click(function () {
      if ($(this).find("input").prop("checked") == true) {
        $(this)
          .parents(".answer")
          .parents(".nav-item  ")
          .children(".question-item")
          .addClass("done");
      } else {
        $(this)
          .parents(".answer")
          .parents(".nav-item  ")
          .children(".question-item")
          .removeClass("done");
      }
    });

    var n = $(".baithi__group .tab__question .nav .nav-item").length;
    var h = 0;
    if (n % 2 == 0) {
      h = (n / 2) * 40 + (n / 2) * 5;
      $(".baithi__group .tab__question .nav").css("height", h + 15);
    } else {
      h = ((n + 1) / 2) * 40 + ((n + 1) / 2) * 5;
      $(".baithi__group .tab__question .nav").css("height", h + 15);
    }
  };

  var initWowJs = function () {
    new WOW().init();
  };

  /*  Mobile */

  return {
    _: function () {
      _scroll_menus();
      forcusMenu();
      addonMenu();
      slideMains();
      slideNewsMains();
      questionMains();
      slideFeedbackMains();
      questionMainsPages();
      allHeightssssss();
      initWowJs();
      checkQuestion();
    },
  };
})();
$(document).ready(function () {
  // if (/Lighthouse/.test(navigator.userAgent)) {
  //     return;
  // }
  GUI._();
});

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
const menu__link_new = document.querySelectorAll(".menu__link.menu-link-new");

//
const currentLocations1 = location.href;
const menuLength1 = menu__link_new.length;
for (let i = 0; i < menuLength1; i++) {
  if (menu__link_new[i].href === currentLocations1) {
    menu__link_new[i].className = ".menu__link.menu-link-new active";
  }
}

$(".tag-photo__mains li a").on("click", function () {
  $(".tab-content .tab-pane").removeClass("show").removeClass("active");
  $($(this).attr("tab-show")).addClass("show").addClass("active");
});
