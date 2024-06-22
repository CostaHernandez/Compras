$(function () {
  $(".menu-link").click(function () {
   $(".menu-link").removeClass("is-active");
   $(this).addClass("is-active");
  });
 });
 
 $(function () {
  $(".main-header-link").click(function () {
   $(".main-header-link").removeClass("is-active");
   $(this).addClass("is-active");
  });
 });
 
 const dropdowns = document.querySelectorAll(".dropdown");
 dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
   e.stopPropagation();
   dropdowns.forEach((c) => c.classList.remove("is-active"));
   dropdown.classList.add("is-active");
  });
 });
 
 $(".search-bar input")
  .focus(function () {
   $(".header").addClass("wide");
  })
  .blur(function () {
   $(".header").removeClass("wide");
  });
 
 $(document).click(function (e) {
  var container = $(".status-button");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
   dd.removeClass("is-active");
  }
 });
 
 $(function () {
  $(".dropdown").on("click", function (e) {
   $(".content-wrapper").addClass("overlay");
   e.stopPropagation();
  });
  $(document).on("click", function (e) {
   if ($(e.target).is(".dropdown") === false) {
    $(".content-wrapper").removeClass("overlay");
   }
  });
 });
 
 $(function () {
  $(".status-button:not(.open)").on("click", function (e) {
   $(".overlay-app").addClass("is-active");
  });
  $(".pop-up .close").click(function () {
   $(".overlay-app").removeClass("is-active");
  });
 });
 
 $(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
 });
 
 $(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
 });
 
 const toggleButton = document.querySelector(".dark-light");
 
 toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
 });

 $(function () {
  "use strict";

  var init = "No items yet!";
  var counter = 0;

  // Initial Cart
  $(".counter").html(init);

  // Add Items To Basket
  function addToBasket() {
    counter++;
    $(".counter")
      .html(counter)
      .animate(
        {
          opacity: "0"
        },
        300,
        function () {
          $(".counter").delay(300).animate({
            opacity: "1"
          });
        }
      );
  }

  // Add To Basket Animation
  $("button").on("click", function () {
    addToBasket();
    $(this)
      .parent()
      .parent()
      .find(".product_overlay")
      .css({
        transform: " translateY(0px)",
        opacity: "1",
        transition: "all ease-in-out .45s"
      })
      .delay(1500)
      .queue(function () {
        $(this)
          .css({
            transform: "translateY(-500px)",
            opacity: "0",
            transition: "all ease-in-out .45s"
          })
          .dequeue();
      });
  });
});
