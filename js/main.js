const DOM = {
  li: document.querySelectorAll("nav ul li"),
  a: document.querySelectorAll("nav ul li a"),
  nav: document.querySelector("nav"),
  Header: document.querySelector("header"),
  butnMenu: document.querySelector(".menu-btn"),
  left: document.querySelector(".pageShell .main .hero .left"),
  right: document.querySelector(".pageShell .main .hero .right"),
  progress: document.querySelectorAll(".skills .skill .prograss span"),
  skills: document.querySelector(
    ".pageShell .main #about .about-content .info .skills",
  ),
  img: document.querySelector(".pageShell .main #about .about-content .img"),
  conProject: document.querySelector(".pageShell .main #projects .conProject"),
};
document
  .querySelector(".pageShell .main .hero .left")
  .classList.add("animation");
document
  .querySelector(".pageShell .main .hero .right")
  .classList.add("animation");
document.querySelector(".pageShell header").classList.add("animation");
DOM.li.forEach((l) => {
  l.addEventListener("click", (li) => {
    DOM.li.forEach((l) => l.classList.remove("active"));
    li.target.classList.add("active");
    DOM.nav.classList.remove("open");
  });
});
DOM.butnMenu.addEventListener("click", () => {
  DOM.nav.classList.toggle("open");
});
window.addEventListener("scroll", () => {
  if (scrollY > DOM.img.offsetTop - 400) {
    DOM.img.classList.add("animation");
  } else if (scrollY < DOM.img.offsetTop) {
    // reorder
    DOM.li.forEach((l) => {
      l.classList.remove("active");
    });
    DOM.li[0].classList.add("active");
  }
  if (scrollY > DOM.skills.offsetTop - 600) {
    // reorder
    DOM.li.forEach((l) => {
      l.classList.remove("active");
    });
    DOM.li[1].classList.add("active");
    // show
    DOM.skills.classList.add("animation");
    document
      .querySelector(".pageShell .main #about .about-content .info p")
      .classList.add("animation");
    // value
    DOM.progress.forEach((r) => {
      r.classList.add("fillbar");
    });
  }
  if (scrollY > DOM.conProject.offsetTop - 400) {
    document
      .querySelectorAll(".pageShell .main #projects .conProject .card")
      .forEach((l) => {
        l.classList.add("animation");
      });
    // reorder
    DOM.li.forEach((l) => {
      l.classList.remove("active");
    });
    DOM.li[2].classList.add("active");
  } else if (scrollY > DOM.conProject.offsetTop) {
    // reorder
    DOM.li.forEach((l) => {
      l.classList.remove("active");
    });
    DOM.li[3].classList.add("active");
    // show
    document
      .querySelectorAll(".pageShell .main #contact .cards a")
      .forEach((l) => {
        l.classList.add("animation");
      });
  }
});
