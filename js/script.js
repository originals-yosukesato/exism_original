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
gsap.utils.toArray(".company-info li, .executives li").forEach((item) => {
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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#" || targetId === "") return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const yOffset = -40;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  });
});

//.site-titleをふわっと表示
gsap.from(".site-title-text", {
  opacity: 0,
  scale: 0.7,
  duration: 2.5, // ← ゆっくりに！
  ease: "power3.out", // ← さらに柔らかいイーズ
});