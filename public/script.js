const navigationList = document.querySelector(".nav_list");
const mobileMenu = document.querySelector(".mob_btn");
const boxArrow = document.querySelector(".triangle");
const allLinks = document.querySelectorAll("a:link");
const navigationEl = document.querySelector(".navigationEl");
console.log(boxArrow);
console.log(mobileMenu);
removeMobNav();
mobileMenu.addEventListener("click", function () {
  navigationList.classList.toggle("hidden");
  navigationList.classList.toggle("mob_nav");
  boxArrow.classList.toggle("hide");

  //   if (navigationList.classList.contains("hide")) {
  //     navigationList.classList.remove("hide");
  //   }
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function removeMobNav() {
  navigationList.classList.remove("mob_nav");
  boxArrow.classList.add("hide");
}
