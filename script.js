const navlinks = document.querySelectorAll(".nav__link");
const crewslink = document.querySelectorAll(".slider");
const technologylink = document.querySelectorAll(".technology__nav-link");
let url = window.location.pathname;
let urlArray = url.split("/");
let particularPath = urlArray.at("-1").split("-").at(-1);
let overAllPath = urlArray.at("-1").split("-").at(0);

const addActive = function (parent, path) {
  // if ((path = "")) {
  //   console.log(navlinks);
  //   navlinks[0].classList.add("active");
  // }
  // parent.forEach((nav) => {
  //   console.log(nav, path, "entered");
  //   if (nav.href.includes(path)) {
  //     nav.classList.add("active");
  //   }
  // });
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
  // addActive(crewslink, particularPath);
};
displayLine();
