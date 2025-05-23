document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const historyContainer = document.querySelector(".history-container");
  if (!historyContainer) return;

  const scrollLength = historyContainer.scrollWidth - window.innerWidth;

  gsap.to(historyContainer, {
    x: -scrollLength,
    ease: "none",
    scrollTrigger: {
      trigger: ".c-s-history",
      start: "top top",
      end: () => "+=" + (historyContainer.scrollWidth - window.innerWidth + 500),
      scrub: true,
      pin: ".history-container",
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  gsap.utils.toArray(".company-info li").forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
});
