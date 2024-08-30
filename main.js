let hamburgerSrcCnt = 0;
let hamburgerSrc = ["icon-hamburger.svg", "icon-close.svg"];

let sliderMainCnt = 3;

menuToggle = function () {
  let isHamburgerHidden = ++hamburgerSrcCnt % 2;

  document.getElementById("menu-hamburger").src =
    "images/" + hamburgerSrc[isHamburgerHidden];

  let lis = document.getElementById("menu").getElementsByTagName("li");
  for (let i = 1; i < lis.length; i++) {
    updateObjectClass(lis[i], "visible", isHamburgerHidden);
  }

  updateObjectClass(
    document.getElementById("logo-container"),
    "hidden",
    isHamburgerHidden
  );

  updateObjectClass(
    document.getElementById("main-nav"),
    "nav-visible",
    isHamburgerHidden
  );

  return false;
};

sliderMove = function (mode) {
  if (sliderMainCnt === 0) {
    sliderMainCnt = 3;
  }
  let sliderPos = ((mode == "R" ? ++sliderMainCnt : --sliderMainCnt) % 3) + 1;

  hide(document.getElementsByClassName("main-picture"));
  show("main-picture-" + sliderPos);

  hide(
    document
      .getElementById("main-slider")
      .getElementsByClassName("content-container")
  );
  show("content-" + sliderPos);

  return false;
};

updateObjectClass = function (obj, className, isHamburgerHidden) {
  obj = obj.classList;

  isHamburgerHidden ? obj.add(className) : obj.remove(className);
};

show = function (id) {
  document.getElementById(id).classList.add("visible");
};

hide = function (obj) {
  for (let i = 0; i < obj.length; i++) {
    obj[i].classList.remove("visible");
  }
};
