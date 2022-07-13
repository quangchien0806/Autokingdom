$(document).ready(function () {
  $(".scroll__top").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    var offsetTop = $(id).offset().top;
    jQuery("html, body").animate(
      {
        scrollTop: offsetTop - 85,
      },
      300
    );
  });
});

const menu__link = document.querySelectorAll(".menu__link");

//
const currentLocation = location.href;
const menuLength = menu__link.length;
for (let i = 0; i < menuLength; i++) {
  if (menu__link[i].href === currentLocation) {
    menu__link[i].className = "menu__link active";
  }
}

// const scroll__top = document.querySelectorAll(".scroll__top");
// const scroll__active = document.querySelectorAll(".scroll__top.active");
// scroll__top.forEach((scroll, index) => {
//   scroll.onclick = function () {
//     this.classList.add("active");
//     scroll__active.classList.removeClass("active");
//   };
// });
$(".scroll__top").click(function () {
  // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
  if ($(this).hasClass("active")) {
    $(".scroll__top").removeClass("active");
  }
  // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
  else {
    $(".scroll__top").removeClass("active");
    $(this).addClass("active");
  }
});

$(".modal").on("hidden.bs.modal", function (e) {
  if ($(".modal:visible").length) {
    $("body").addClass("modal-open");
    $("body").removeClass("body-header-scroll");
  }
});
