"use strict";

const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal1");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnsOpenModal1 = document.querySelectorAll(".show-modal1");
const btnsOpenModal2 = document.querySelectorAll(".show-modal2");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModal1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
