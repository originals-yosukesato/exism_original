new Swiper(".swiper-container", {
  loop: true,
  effect: "fade", // フェードで切り替える
  fadeEffect: {
    crossFade: true, // ふわっと切り替え（前のスライドと被るように）
  },
  speed: 2000, // ← スライドの切り替えにかかる時間（ms）
  autoplay: {
    delay: 7000, // ← 各スライドの表示時間（ms）
    disableOnInteraction: false, // ユーザー操作後も止まらない
  },
});
