"use strict";

const navBtn = document.querySelector(".nav-btn-box");
const navBox = document.querySelector(".nav-box");
const line_1 = document.querySelector(".line-1");
const line_2 = document.querySelector(".line-2");

const selectBox = document.querySelector(".select");
const arrow = document.querySelector(".arrow");
const optionDataset = document.querySelectorAll(".option--dataset");

const dropDownContainer = document.querySelector(".search__inner__container");

// let chosenDataset = document.querySelector(
//   ".option--default-dataset"
// ).textContent;

navBtn.addEventListener("click", function () {
  line_1.classList.toggle("line-1--modified");
  line_2.classList.toggle("line-2--modified");
  navBox.classList.toggle("nav-box--modified");
});

selectBox.addEventListener("click", function () {
  selectBox.classList.toggle("select--modifier");
  dropDownContainer.classList.toggle("hide");
});

function isElementPresent(collection, item) {
  for (let i = 0; i < collection.length; i++) {
    if (item === collection[i]) {
      return true;
    }
  }
  return false;
}

window.addEventListener("click", function (e) {
  const col = e.target.classList;
  if (
    !(
      isElementPresent(col, "default") ||
      isElementPresent(col, "option") ||
      isElementPresent(col, "arrow")
    )
  ) {
    selectBox.classList.remove("select--modifier");
    dropDownContainer.classList.add("hide");
  }
});

function attachEvent(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i].addEventListener("click", function () {
      arr[0].textContent = arr[i].textContent;
    });
  }
}

attachEvent(optionDataset);
