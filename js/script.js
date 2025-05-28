document.addEventListener("DOMContentLoaded", () => {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const items = document.querySelectorAll(".history-container .history-item");

  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      items.forEach((item) => {
        item.style.display = "flex";
      });
      showMoreBtn.style.display = "none"; // ボタン自体を消す
    });
  }

  // 既存のコード（ScrollTriggerなど）はそのままでOK！
});
gsap.utils.toArray(".policy li, .feature li, .company-info li, .service-inner .card, .executives li, .message li").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "play none none none",
    },
  });
});

let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }
  lastScroll = currentScroll;
});

//.site-titleをふわっと表示
gsap.from(".site-title-text", {
  opacity: 0,
  scale: 0.5,
  y: 30,
  duration: 5, // アニメーションの長さ（ふわっと感）
  delay: 1, // ⏰ 3秒待ってからスタート
  ease: "expo.out", // 柔らかく止まる
});

//アコーディオン
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".year-toggle");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const nextGroup = this.nextElementSibling;
      nextGroup.classList.toggle("active");
    });
  });

  // 最初は最新年だけ開いておく（例：2025）
  const firstGroup = document.querySelector(".year-group");
  if (firstGroup) firstGroup.classList.add("active");
});

//スムーススクロール
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href === "#") {
        // hrefが「#」のみなら index.html に遷移
        window.location.href = "index.html";
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

//ページジャンプスムーススクロール
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300); // フェードイン後にスクロール
    }
  }
});

//
window.addEventListener("DOMContentLoaded", () => {
  // URLに#が付いてたら、履歴を上書きして削除する
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
});

//アコーディオンメニューの開閉
document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".accordion-title");

  titles.forEach((title) => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
      const isOpen = title.classList.contains("active");

      // 一度すべて閉じる（←不要なら削除OK）
      document.querySelectorAll(".accordion-content").forEach((c) => (c.style.display = "none"));
      document.querySelectorAll(".accordion-title").forEach((t) => t.classList.remove("active"));

      // 選択された項目だけ開く
      if (!isOpen) {
        content.style.display = "block";
        title.classList.add("active");
      }
    });
  });
});
