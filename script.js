"use strict";

const navBtn = document.querySelector(".nav-btn-box");
const navBox = document.querySelector(".nav-box");
const line_1 = document.querySelector(".line-1");
const line_2 = document.querySelector(".line-2");

navBtn.addEventListener("click", function () {
  line_1.classList.toggle("line-1--modified");
  line_2.classList.toggle("line-2--modified");
  navBox.classList.toggle("nav-box--modified");
});
