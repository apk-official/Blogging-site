"use strict";
let navBar = document.querySelector(".nav");
let sticky = navBar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

window.onscroll = function () {
  myFunction();
};
let blog1 = document.getElementById("related-blog-1");
blog1.onclick = function () {
  location.href = "/Blogs/Dreams%20Unleashed%20Memories/index.html";
};
let blog2 = document.getElementById("related-blog-2");
blog2.onclick = function () {
  location.href = "/Blogs/The%20Third%20gender/index.html";
};

let mainNav = document.getElementById("main-nav");
let burgerIcon = document.getElementById("menu-icon-open");
burgerIcon.addEventListener("click", function () {
  if (mainNav.classList.contains("main-nav")) {
    burgerIcon.name = "close-outline";
    mainNav.classList.remove("main-nav");
    mainNav.classList.add("mobile-nav");
    mainNav.style.animation = "drawer 0.4s linear";
  } else {
    mainNav.style.animation = "bakDrawer 0.4s linear";
    burgerIcon.name = "menu-outline";
    mainNav.classList.add("main-nav");
    mainNav.classList.remove("mobile-nav");
  }
});
