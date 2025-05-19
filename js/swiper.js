const swiper = new Swiper(".swiper-container", {
  effect: "fade", // ✅ ふわっと切り替わる
  loop: true, // 無限ループ
  autoplay: {
    delay: 6000, // 3秒ごとに切り替え
    disableOnInteraction: false,
  },
  speed: 3000, // 切り替え速度1秒
  fadeEffect: {
    crossFade: true, // クロスフェードを有効
  },
  // ✅ ページネーション（スライドのインジケーター）
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
