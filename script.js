const navlinks = document.querySelectorAll(".nav__link");
const crewslink = document.querySelectorAll(".slider");
const technologylink = document.querySelectorAll(".technology__nav-link");
const hamburger = document.querySelector(".nav__hamburger");
const header = document.querySelector(".header");
const close = document.querySelector(".close");
let url = window.location.pathname;
let urlArray = url.split("/");
let particularPath = urlArray.at("-1").split("-").at(-1);
let overAllPath = urlArray.at("-1").split("-").at(0);

const addActive = function (parent, path) {
  parent.forEach((nav) => {
    console.log(nav, path, "entered");
    if (nav.href.includes(path)) {
      nav.classList.add("active");
    }
  });
};
const displayLine = () => {
  if (particularPath === "") {
    navlinks[0].classList.add("active");
    return;
  }
  navlinks.forEach((nav, i) => {
    if (i < 4 && nav.href.includes(overAllPath)) {
      nav.classList.add("active");
    }
    if (i >= 4 && nav.href.includes(particularPath)) {
      nav.classList.add("active");
    }
  });
  addActive(technologylink, particularPath);
  addActive(crewslink, particularPath);
};
displayLine();

hamburger.addEventListener("click", () => {
  header.classList.add("active");
});

close.addEventListener("click", () => {
  header.classList.remove("active");
});
