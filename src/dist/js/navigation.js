document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".mainArea__hamburger");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  hamburger.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
  });
});
