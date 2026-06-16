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
