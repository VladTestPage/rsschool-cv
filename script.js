const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav");
const close = document.querySelector(".header__nav-close");
const menuItem = document.querySelectorAll(".header__nav-list-item");

burger.addEventListener("click", () => {
  menu.classList.add("header__nav-active");
});

close.addEventListener("click", () => {
  menu.classList.remove("header__nav-active");
});

menuItem.forEach((element) =>
  element.addEventListener("click", () => {
    menu.classList.remove("header__nav-active");
  })
);

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
