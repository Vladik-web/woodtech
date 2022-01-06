const menuWrapper = document.querySelector(".menu-wrapper");

menuWrapper.addEventListener("click", () => {
  document.querySelector(".hamburger-menu").classList.toggle("animate");
  document.querySelector(".nav").classList.toggle("active");
});
