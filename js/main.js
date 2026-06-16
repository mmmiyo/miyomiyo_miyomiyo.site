document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("js-hamburger");
  const nav = document.getElementById("js-nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
  });

  // メニュー内のリンクをクリックした時にも閉じる
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("is-active");
      nav.classList.remove("is-active");
    });
  });
  const toggleBtn = document.querySelector(".sub-toggle-btn");
  const parentLi = document.querySelector(".has-sub");

  if (toggleBtn && parentLi) {
    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      parentLi.classList.toggle("is-open");
    });
  }
});

document
  .querySelector(".back-to-top-btn")
  .addEventListener("click", function () {
    //scrollToが効かないブラウザ向けに両方書く
    window.scrollTo({
      //Chrome対応
      top: 0,
      behavior: "smooth", //なめらかにスクロール
    });
    document.documentElement.scrollTop = 0; // Safari対策
    document.body.scrollTop = 0; // 古いiOS Safari対策
  });

$(document).ready(function () {
  $(".modal-button").modaal();
});

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
