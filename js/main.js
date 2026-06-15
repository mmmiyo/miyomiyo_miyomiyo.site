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
