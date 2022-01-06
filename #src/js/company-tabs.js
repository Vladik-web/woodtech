const tabs = document.querySelector(".tabs");
const contents = document.querySelectorAll(".content__item");
tabs.addEventListener("click", (evt) => {
  const target = evt.target.closest("LI");
  if (!target) return;
  else {
    [...tabs.children].forEach((item) => item.classList.remove("active"));
    target.classList.add("active");
    contents.forEach((item) => item.classList.remove("active"));
    contents.forEach((item) => {
      if (target.dataset.tab === item.dataset.content) {
        item.classList.add("active");
      }
    });
  }
});
