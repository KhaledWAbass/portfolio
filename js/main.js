// selecetor
const DOM = {
  li: document.querySelectorAll("nav ul li"),
  nav: document.querySelector("nav"),
  Header: document.querySelector("header"),
  butnMenu: document.querySelector(".menu-btn"),
  left: document.querySelector(".pageShell .main .hero .left"),
  up: document.querySelector(".pageShell .UP"),
  right: document.querySelector(".pageShell .main .hero .right"),
  progress: document.querySelectorAll(".skills .skill .prograss span"),
  skills: document.querySelector(
    ".pageShell .main #about .about-content .info .skills",
  ),
  img: document.querySelector(".pageShell .main #about .about-content .img"),
  button: document.querySelector(".pageShell .main #projects button"),
  git: document.querySelector(".pageShell .main #projects button.git"),
  all: document.querySelector(".pageShell .main .all"),
  conProject: document.querySelector(".pageShell .main #projects .conProject"),
};
// event
DOM.button
  ? DOM.button.addEventListener("click", () => window.open("projects.html"))
  : null;
// ==========================================
DOM.git
  ? DOM.button.addEventListener("click", () =>
      window.open("https://github.com/KhaledWAbass"),
    )
  : null;
// ==========================================
DOM.up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
if (DOM.all) {
  document
    .querySelectorAll(".pageShell .main .all .conProject .card")
    .forEach((l) => {
      l.classList.add("animation");
    });
}
// code
DOM.left ? DOM.left.classList.add("animation") : null;
document;
DOM.right ? DOM.right.classList.add("animation") : null;
DOM.Header.classList.add("animation");
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
  if (scrollY > 500) {
    DOM.up.style.opacity = "1";
    DOM.up.style.display = "flex";
  } else {
    DOM.up.style.opacity = "0";
    DOM.up.style.display = "none";
  }
  if (DOM.img) {
    if (scrollY > DOM.img.offsetTop - 400) {
      DOM.img.classList.add("animation");
    } else if (scrollY < DOM.img.offsetTop) {
      // reorder
      DOM.li.forEach((l) => {
        l.classList.remove("active");
      });
      DOM.li[0].classList.add("active");
    } else {
      return;
    }
  } else {
    return;
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
  console.log(DOM.conProject);
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

// links
// https://khaledwabass.github.io/telepronter/
// https://khaledwabass.github.io/Mystore/
// https://khaledwabass.github.io/web/
// https://khaledwabass.github.io/-/
// https://khaledwabass.github.io/templet-1/
// https://khaledwabass.github.io/templet-2/
// https://khaledwabass.github.io/templet-3/
// https://khaledwabass.github.io/khaled-dev.github.io/
